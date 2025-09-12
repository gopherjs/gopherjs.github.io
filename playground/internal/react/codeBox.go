package react

import (
	"strconv"
	"strings"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/editor"
)

// CodeBox creates a code editor box React element for editing
// the given code state.
func CodeBox(code string, setCode func(any), onSave func(), onEscape func()) *Element {
	return CreateElement(codeBoxComponent, Props{
		`curCode`:  code,
		`setCode`:  setCode,
		`onSave`:   onSave,
		`onEscape`: onEscape,
	})
}

func codeBoxComponent(props Props) *Element {
	cba := &codeBoxAssistant{
		curCode:     As[string](props, `curCode`),
		setCode:     AsSetter(props, `setCode`),
		onSave:      AsFunc(props, `onSave`),
		onEscape:    AsFunc(props, `onEscape`),
		textAreaRef: UseRef(),
		lineNumsRef: UseRef(),
	}

	UseEffect(func() {
		// On first render, focus the code textarea.
		cba.textAreaRef.Call(`focus`)
		cba.textAreaRef.Set(`selectionStart`, 0)
		cba.textAreaRef.Set(`selectionEnd`, 0)
	}, []any{})

	lineCount := strings.Count(cba.curCode, "\n") + 1
	lineNumbers := UseMemo(func() string {
		return getLineNumbers(lineCount)
	}, []any{lineCount})

	return Div(Props{
		`id`: `code-box`,
	},
		TextArea(Props{
			`id`:       `line-nums`,
			`ref`:      cba.lineNumsRef,
			`value`:    lineNumbers,
			`readOnly`: true,
			`disable`:  `true`,
		}),
		TextArea(Props{
			`id`:             `code`,
			`ref`:            cba.textAreaRef,
			`value`:          cba.curCode,
			`onInput`:        cba.onInput,
			`onKeyDown`:      cba.onKeyDown,
			`onScroll`:       cba.onScroll,
			`autoFocus`:      true,
			`autoCorrect`:    `off`,
			`autoComplete`:   `off`,
			`autoCapitalize`: `off`,
			`spellCheck`:     false,
		}),
	)
}

type codeBoxAssistant struct {
	curCode     string
	setCode     func(any)
	onSave      Func
	onEscape    Func
	textAreaRef *Ref
	lineNumsRef *Ref
}

var _ editor.CodeBoxWrapper = (*codeBoxAssistant)(nil)

func (cba *codeBoxAssistant) Code() string { return cba.curCode }

func (cba *codeBoxAssistant) EmitEvent(event string) {
	switch event {
	case editor.SaveEvent:
		cba.onSave()
	case editor.EscapeEvent:
		cba.onEscape()

	case editor.UndoEvent, editor.RedoEvent:
		println("Not implemented yet: Undo/Redo requested from CodeBox:", event)
	// TODO(grantnelson-wf): Implement undo/redo stack since textarea
	// only handles undo/redo itself for non-programmatic changes but
	// doesn't handle undo/redo for when setCode is called.

	// TODO(grantnelson-wf): If it is possible to detect a paste event,
	// then indent the pasted code automatically.

	default:
		println("Unknown event was requested to be emitted from CodeBox:", event)
	}
}

func (cba *codeBoxAssistant) onInput(e *js.Object) {
	cba.setCode(e.Get(`target`).Get(`value`).String())
}

func (cba *codeBoxAssistant) onKeyDown(e *js.Object) {
	key := e.Get(`key`).String()
	shift := e.Get(`shiftKey`).Bool()
	ctrl := e.Get(`metaKey`).Bool() || e.Get(`ctrlKey`).Bool()
	if editor.ProcessKeyDown(cba, key, shift, ctrl) {
		e.Call(`preventDefault`)
		e.Call(`stopPropagation`)
	}
}

func (cba *codeBoxAssistant) onScroll(e *js.Object) {
	scrollTop := e.Get(`target`).Get(`scrollTop`).Int()
	cba.lineNumsRef.Set(`scrollTop`, scrollTop)
}

func (cba *codeBoxAssistant) GetSelection() editor.Selection {
	start := cba.textAreaRef.Get(`selectionStart`).Int()
	end := cba.textAreaRef.Get(`selectionEnd`).Int()
	if start > end {
		// Reverse selection so start is always <= end.
		return editor.Selection{Start: end, End: start}
	}
	return editor.Selection{Start: start, End: end}
}

func (cba *codeBoxAssistant) SetCode(sel editor.Selection, code string) {
	// Update the code state for react.
	cba.setCode(code)

	// Pre-update the textarea value so that the caret and scroll can be set
	// correctly before the next render so that the next render doesn't reset them.
	cba.textAreaRef.Set(`value`, code)

	// Match the diretionallity of the prior selection.
	oldStart := cba.textAreaRef.Get(`selectionStart`).Int()
	oldEnd := cba.textAreaRef.Get(`selectionEnd`).Int()
	if oldStart > oldEnd {
		sel.Start, sel.End = sel.End, sel.Start
	}

	// Set selections
	cba.textAreaRef.Set(`selectionStart`, sel.Start)
	cba.textAreaRef.Set(`selectionEnd`, sel.End)

	// Auto-scroll to keep caret in view.
	cba.verticallyAutoScroll(sel.End, code)
	cba.horizontallyAutoScroll(sel.End, code)
}

func (cba *codeBoxAssistant) verticallyAutoScroll(caret int, code string) {
	totalHeight := cba.textAreaRef.Get(`scrollHeight`).Int()
	visibleHeight := cba.textAreaRef.Get(`clientHeight`).Int()
	if totalHeight <= visibleHeight {
		return // No vertical scrolling needed.
	}

	lineCount := strings.Count(code, "\n") + 1
	curLine := strings.Count(code[:caret], "\n") + 1
	scrollTop := int(float64(curLine) * float64(totalHeight) / float64(lineCount))

	curTop := cba.textAreaRef.Get(`scrollTop`).Int()
	if scrollTop < curTop {
		cba.textAreaRef.Set(`scrollTop`, scrollTop)
	} else if scrollTop -= visibleHeight; scrollTop > curTop {
		cba.textAreaRef.Set(`scrollTop`, scrollTop)
	}
}

func (cba *codeBoxAssistant) horizontallyAutoScroll(caret int, code string) {
	totalWidth := cba.textAreaRef.Get(`scrollWidth`).Int()
	visibleWidth := cba.textAreaRef.Get(`clientWidth`).Int()
	if totalWidth <= visibleWidth {
		return // No horizontal scrolling needed.
	}

	longestLine := editor.LongestMeasuredLineLength(code)
	par := strings.LastIndexByte(code[:caret], '\n') + 1
	curLine := editor.MeasureLineLength(code[par:caret])
	scrollLeft := int(float64(curLine) * float64(totalWidth) / float64(longestLine))

	curLeft := cba.textAreaRef.Get(`scrollLeft`).Int()
	if scrollLeft < curLeft {
		cba.textAreaRef.Set(`scrollLeft`, scrollLeft)
	} else if scrollLeft -= visibleWidth; scrollLeft > curLeft {
		cba.textAreaRef.Set(`scrollLeft`, scrollLeft)
	}
}

func getLineNumbers(lineCount int) string {
	lines := make([]string, lineCount)
	for i := 0; i < lineCount; i++ {
		lines[i] = strconv.Itoa(i + 1)
	}
	return strings.Join(lines, "\n")
}
