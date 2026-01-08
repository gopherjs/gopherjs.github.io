package page

import (
	"strconv"
	"strings"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/editor"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/undoRedo"
)

type CodeBoxHandle interface {
	common.CodeBox

	FileName() string
	SetFileName(fileName string)

	SetErrorLines(lines []int)
}

const defaultFileName = `main.go`

func CodeBox(codeBoxRef react.ValueRef[CodeBoxHandle], onCodeChange, onUserChange, onSave, onEscape react.Func) *react.Element {
	return react.CreateElement(codeBoxComponent, react.Props{}.
		Set(`codeBoxRef`, codeBoxRef).
		Set(`onCodeChange`, onCodeChange).
		Set(`onUserChange`, onUserChange).
		Set(`onSave`, onSave).
		Set(`onEscape`, onEscape))
}

func codeBoxComponent(props react.Props) *react.Element {
	var (
		codeBoxRef   = react.GetValueRef[CodeBoxHandle](props, `codeBoxRef`)
		onCodeChange = props.GetFunc(`onCodeChange`)
		onUserChange = props.GetFunc(`onUserChange`)
		onSave       = props.GetFunc(`onSave`)
		onEscape     = props.GetFunc(`onEscape`)

		fileName, setFileName = react.UseState(defaultFileName)
		code, setCode         = react.UseState(``)
		errLines, setErrLines = react.UseState([]int{})
		textAreaRef           = react.UseRef()
		lineNumsRef           = react.UseRef()
		undoRedoRef           = react.UseRefLazy(undoRedo.NewStack)
	)

	react.UseImperativeHandle(codeBoxRef, func() CodeBoxHandle {
		return &codeBoxHandle{
			fileName:    fileName,
			setFileName: setFileName,
			code:        code,
			setCode:     setCode,
			setErrLines: setErrLines,
			onSave:      onSave,
			onEscape:    onEscape,
			textAreaRef: textAreaRef,
			undoRedoRef: undoRedoRef,
		}
	}, []any{fileName, setFileName, code, setCode, onSave, onEscape, textAreaRef, undoRedoRef})

	// Record changes to code into the undo/redo.
	// Since keypresses also record to undo/redo, this is mainly for changes
	// coming from outside the codeBox such as loading a snippet or formatting.
	react.UseEffect(func() {
		sel := getSelection(textAreaRef)
		undoRedoRef.Current().RecordCodeChange(sel, code)
	}, []any{code, textAreaRef})

	// If any change is made to the code or file name we need to tell
	// the playground so that it will start preloading and so the compiler
	// is up-to-date. This is more broad that onUserChange since it will include
	// loading snippets, formatting, etc not just when keppresses are handled.
	react.UseEffect(func() {
		onCodeChange.Invoke(fileName, code)
	}, []any{fileName, code, onCodeChange})

	onInput := react.UseCallback(func(e *js.Object) {
		newCode := e.Get(`target`).Get(`value`).String()
		sel := getSelection(textAreaRef)
		undoRedoRef.Current().RecordCodeChange(sel, newCode)
		setCode.Invoke(newCode)
		onUserChange.Invoke()
	}, []any{setCode, textAreaRef, undoRedoRef})

	onKeyDown := react.UseCallback(func(e *js.Object) {
		key := e.Get(`key`).String()
		shift := e.Get(`shiftKey`).Bool()
		ctrl := e.Get(`metaKey`).Bool() || e.Get(`ctrlKey`).Bool()
		if editor.ProcessKeyDown(codeBoxRef.Current(), key, shift, ctrl) {
			e.Call(`preventDefault`)
			e.Call(`stopPropagation`)
			onUserChange.Invoke()
		}
	}, []any{codeBoxRef, onUserChange})

	onScroll := react.UseCallback(func(e *js.Object) {
		scrollTop := e.Get(`target`).Get(`scrollTop`).Int()
		lineNumsRef.Current().Set(`scrollTop`, scrollTop)
	}, []any{lineNumsRef})

	onSelect := react.UseCallback(func(e *js.Object) {
		// Don't normalize the selection so that the direction is preserved.
		undoRedoRef.Current().RecordSelectionChange(getSelection(textAreaRef))
	}, []any{textAreaRef, undoRedoRef})

	react.UseLayoutEffect(func() {
		// On first render, focus the code textarea.
		textAreaRef.Current().Call(`focus`)
		setSelection(textAreaRef, common.Selection{})
	}, []any{})

	lineCount := react.UseMemo(func() int {
		return strings.Count(code, "\n") + 1
	}, []any{code})

	return react.Div(react.Props{}.
		Set(`id`, `code-box-container`),
		react.Div(react.Props{}.
			Set(`id`, `code-box`),
			LineNumbers(lineNumsRef, lineCount, errLines),
			react.TextArea(react.Props{}.
				Set(`id`, `code`).
				Set(`ref`, textAreaRef).
				Set(`value`, code).
				Set(`onInput`, onInput).
				Set(`onKeyDown`, onKeyDown).
				Set(`onScroll`, onScroll).
				Set(`onSelect`, onSelect).
				Set(`autoFocus`, true).
				Set(`autoCorrect`, `off`).
				Set(`autoComplete`, `off`).
				Set(`autoCapitalize`, `off`).
				Set(`spellCheck`, false)),
		),
	)
}

var memoizedLineNumbers any

func LineNumbers(lineNumsRef react.Ref, lineCount int, errorLines []int) *react.Element {
	if memoizedLineNumbers == nil {
		memoizedLineNumbers = react.Memo(lineNumbersComponent)
	}
	return react.CreateElement(memoizedLineNumbers, react.Props{}.
		Set(`lineNumsRef`, lineNumsRef).
		Set(`lineCount`, lineCount).
		Set(`errorLines`, errorLines))
}

func lineNumbersComponent(props react.Props) *react.Element {
	var (
		lineNumsRef = props.GetRef(`lineNumsRef`)
		lineCount   = props.GetInt(`lineCount`)
		errorLines  = react.GetProp[[]int](props, `errorLines`)
	)

	errs := map[int]bool{}
	for _, el := range errorLines {
		errs[el] = true
	}

	lineElems := make([]react.Node, lineCount)
	for i := 0; i < lineCount; i++ {
		lineNum := i + 1
		className := `normal`
		if errs[lineNum] {
			className = `error`
		}
		lineElems[i] = react.Div(react.Props{}.
			Set(`className`, className).
			Set(`key`, lineNum),
			strconv.Itoa(lineNum))
	}

	return react.Div(react.Props{}.
		Set(`id`, `line-nums`).
		Set(`ref`, lineNumsRef),
		lineElems...)
}

func NoopCodeBoxHandle() CodeBoxHandle {
	return (*codeBoxHandle)(nil)
}

type codeBoxHandle struct {
	fileName    string
	setFileName react.Func
	code        string
	setCode     react.Func
	setErrLines react.Func
	onSave      react.Func
	onEscape    react.Func
	textAreaRef react.Ref
	undoRedoRef react.ValueRef[undoRedo.UndoRedoStack]
}

var _ common.CodeBox = (*codeBoxHandle)(nil)

func (cb *codeBoxHandle) FileName() string {
	if cb != nil {
		return cb.fileName
	}
	return ``
}

func (cb *codeBoxHandle) SetFileName(fileName string) {
	if cb != nil {
		cb.setFileName.Invoke(fileName)
	}
}

func (cb *codeBoxHandle) Code() string {
	if cb != nil {
		return cb.code
	}
	return ``
}

func (cb *codeBoxHandle) EmitEvent(event common.Event) {
	if cb == nil {
		return
	}
	switch event {
	case common.SaveEvent:
		cb.onSave.Invoke()
	case common.EscapeEvent:
		cb.onEscape.Invoke()
	case common.UndoEvent:
		cb.performUndo()
	case common.RedoEvent:
		cb.performRedo()
	default:
		println(`Unknown event was requested to be emitted from CodeBox:`, event)
	}
}

func (cb *codeBoxHandle) performUndo() {
	if cb != nil {
		if newSel, newCode, hadUndo := cb.undoRedoRef.Current().PerformUndo(); hadUndo {
			cb.SetCode(newSel, newCode)
		}
	}
}

func (cb *codeBoxHandle) performRedo() {
	if cb != nil {
		if newSel, newCode, hadRedo := cb.undoRedoRef.Current().PerformRedo(); hadRedo {
			cb.SetCode(newSel, newCode)
		}
	}
}

func (cb *codeBoxHandle) GetSelection() common.Selection {
	if cb != nil {
		return getSelection(cb.textAreaRef).Normalize()
	}
	return common.Selection{}
}

func (cb *codeBoxHandle) SetCode(sel common.Selection, code string) {
	if cb == nil {
		return
	}

	// Record the code change for undo/redo.
	// Since this is used mostly for when the editor is doing some kind of edit
	// (otherwise the key down would be use the default behavior), we can
	// assume the code change should not be joined with other changes.
	// Use AddBreak to issolate this change.
	undoRedo := cb.undoRedoRef.Current()
	undoRedo.AddBreak()
	undoRedo.RecordCodeChange(sel, code)
	undoRedo.AddBreak()

	// Update the code state for react.
	cb.setCode.Invoke(code)

	// Pre-update the textarea value so that the caret and scroll can be set
	// correctly before the next render so that the next render doesn't reset them.
	cb.textAreaRef.Current().Set(`value`, code)

	// Match the diretionallity of the prior selection.
	if getSelection(cb.textAreaRef).Reversed() {
		sel.Start, sel.End = sel.End, sel.Start
	}

	// Set selections
	setSelection(cb.textAreaRef, sel)

	// Auto-scroll to keep caret in view.
	verticallyAutoScroll(cb.textAreaRef, sel.End, code)
	horizontallyAutoScroll(cb.textAreaRef, sel.End, code)
}

func (cb *codeBoxHandle) SetErrorLines(lines []int) {
	if cb != nil {
		cb.setErrLines.Invoke(lines)
	}
}

func verticallyAutoScroll(textAreaRef react.Ref, caret int, code string) {
	textArea := textAreaRef.Current()
	totalHeight := textArea.Get(`scrollHeight`).Int()
	visibleHeight := textArea.Get(`clientHeight`).Int()
	if totalHeight <= visibleHeight {
		return // No vertical scrolling needed.
	}

	lineCount := strings.Count(code, "\n") + 1
	curLine := strings.Count(code[:caret], "\n") + 1
	scrollTop := int(float64(curLine) * float64(totalHeight) / float64(lineCount))

	curTop := textArea.Get(`scrollTop`).Int()
	if scrollTop < curTop {
		textArea.Set(`scrollTop`, scrollTop)
	} else if scrollTop -= visibleHeight; scrollTop > curTop {
		textArea.Set(`scrollTop`, scrollTop)
	}
}

func horizontallyAutoScroll(textAreaRef react.Ref, caret int, code string) {
	textArea := textAreaRef.Current()
	totalWidth := textArea.Get(`scrollWidth`).Int()
	visibleWidth := textArea.Get(`clientWidth`).Int()
	if totalWidth <= visibleWidth {
		return // No horizontal scrolling needed.
	}

	longestLine := editor.LongestMeasuredLineLength(code)
	par := strings.LastIndexByte(code[:caret], '\n') + 1
	curLine := editor.MeasureLineLength(code[par:caret])
	scrollLeft := int(float64(curLine) * float64(totalWidth) / float64(longestLine))

	curLeft := textArea.Get(`scrollLeft`).Int()
	if scrollLeft < curLeft {
		textArea.Set(`scrollLeft`, scrollLeft)
	} else if scrollLeft -= visibleWidth; scrollLeft > curLeft {
		textArea.Set(`scrollLeft`, scrollLeft)
	}
}

func getSelection(textAreaRef react.Ref) common.Selection {
	textArea := textAreaRef.Current()
	start := textArea.Get(`selectionStart`).Int()
	end := textArea.Get(`selectionEnd`).Int()
	return common.Selection{Start: start, End: end}
}

// setSelection sets the selection on the given textarea ref.
func setSelection(textAreaRef react.Ref, sel common.Selection) {
	textArea := textAreaRef.Current()
	textArea.Set(`selectionStart`, sel.Start)
	textArea.Set(`selectionEnd`, sel.End)
}
