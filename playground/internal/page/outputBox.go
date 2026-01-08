package page

import (
	"go/scanner"
	"regexp"
	"strconv"
	"strings"

	"github.com/gopherjs/gopherjs/compiler/errlist"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

// OutputBox creates a box React element for displaying output strings and errors.
func OutputBox(outputRef react.ValueRef[common.Output], onErrorLine react.Func) *react.Element {
	return react.CreateElement(outputBoxComponent, react.Props{}.
		Set(`outputRef`, outputRef).
		Set(`onErrorLine`, onErrorLine))
}

func outputBoxComponent(props react.Props) *react.Element {
	var (
		outputRef         = react.GetValueRef[common.Output](props, `outputRef`)
		onErrorLine       = props.GetFunc(`onErrorLine`)
		output, setOutput = react.UseState([]any{})
		outputBoxRef      = react.UseRef()
	)

	// Set the handle for the output so that other components call change output.
	react.UseImperativeHandle(outputRef, func() common.Output {
		return &outputImpl{setOutput: setOutput}
	}, []any{setOutput})

	// Add effect so that if there are no stderr's in the output, scroll to the bottom.
	react.UseLayoutEffect(func() {
		if !hasErrors(output) {
			outputBox := outputBoxRef.Current()
			scrollTop := outputBox.Get(`scrollHeight`).Int()
			outputBox.Set(`scrollTop`, scrollTop)
		}
	}, []any{output})

	// Update the error lines when the output changes.
	react.UseLayoutEffect(func() {
		errLines := map[string][]int{}
		for _, item := range output {
			itemMap := item.(map[string]any)
			if itemMap[typeKey] == stderrType {
				parseError(itemMap[contentKey], errLines)
			}
		}
		onErrorLine.Invoke(errLines)
	}, []any{output, onErrorLine})

	children := make([]react.Node, len(output))
	for i, item := range output {
		itemMap := item.(map[string]any)
		classType := itemMap[typeKey].(string)
		content := itemMap[contentKey].(string)
		children[i] = outputLine(i, classType, content)
	}

	return react.Div(react.Props{}.
		Set(`id`, `output-box`).
		Set(`ref`, outputBoxRef),
		react.Div(react.Props{}.
			Set(`id`, `output-box-inner`),
			children...))
}

const (
	stderrType = `stderr`
	stdoutType = `stdout`
	systemType = `system`
	typeKey    = `type`
	contentKey = `content`
)

// hasErrors determines if any output is an error.
func hasErrors(output []any) bool {
	for _, item := range output {
		if item.(map[string]any)[typeKey] == stderrType {
			return true
		}
	}
	return false
}

var errRegex = regexp.MustCompile(`^(\w+\.go):(\d+):`)

func parseError(content any, errLines map[string][]int) {
	if contentStr, ok := content.(string); ok {
		for _, line := range strings.Split(contentStr, "\n") {
			matches := errRegex.FindStringSubmatch(line)
			if len(matches) == 3 {
				if lineNo, err := strconv.Atoi(matches[2]); err == nil {
					fileName := matches[1]
					fileLines := errLines[fileName]
					fileLines = append(fileLines, lineNo)
					errLines[fileName] = fileLines
				}
			}
		}
	}
}

// outputLine creates a React element for a span of output content.
// The index is used to create a unique ID for the line so it should
// be the line's position in the output list.
func outputLine(index int, classType string, content string) *react.Element {
	return react.CreateElement(outputLineComponent, react.Props{}.
		Set(`index`, index).
		Set(`classType`, classType).
		Set(`content`, content))
}

func outputLineComponent(props react.Props) *react.Element {
	var (
		index     = props.GetInt(`index`)
		classType = props.GetString(`classType`)
		content   = props.GetString(`content`)
	)
	return react.Span(react.Props{}.
		Set(`className`, classType).
		Set(`key`, index),
		content)
}

func ungroupError(err error) []error {
	switch t := err.(type) {
	case scanner.ErrorList:
		errs := make([]error, len(t))
		for i, entry := range t {
			errs[i] = entry
		}
		return errs
	case errlist.ErrorList:
		return t
	default:
		return []error{err}
	}
}

func appendContent(items []any, itemTyp, content string, startNewLine bool) []any {
	// Check for a form feed ("\x0c") to clear the output.
	if index := strings.LastIndexByte(content, '\x0c'); index >= 0 {
		items = []any{}
		content = content[index+1:]
	}

	// Attempt to append the content to a prior item if the type matches,
	// also prepend a new line to the content if needed and requested.
	if maxItem := len(items) - 1; maxItem >= 0 {
		lastItem := items[maxItem].(map[string]any)

		lastContent := lastItem[contentKey].(string)
		if startNewLine && !strings.HasSuffix(lastContent, "\n") {
			content = "\n" + content
		}

		if lastItem[typeKey] == itemTyp {
			lastItem[contentKey] = lastContent + content
			return items
		}
	}

	// Append new type of content.
	return append(items, map[string]any{typeKey: itemTyp, contentKey: content})
}

func NoopOutput() common.Output {
	return (*outputImpl)(nil)
}

type outputImpl struct{ setOutput react.Func }

func (o *outputImpl) Clear() {
	if o == nil || o.setOutput == nil {
		return
	}
	o.setOutput.Invoke([]any{})
}

func (o *outputImpl) AddError(err error) {
	if o == nil || o.setOutput == nil {
		return
	}
	o.setOutput.Invoke(func(items []any) []any {
		content := ``
		for _, entry := range ungroupError(err) {
			text := entry.Error()
			content += text
			if !strings.HasSuffix(text, "\n") {
				content += "\n"
			}
		}
		return appendContent(items, stderrType, content, true)
	})
}

func (o *outputImpl) AppendOut(out string) {
	if o != nil && o.setOutput != nil {
		o.setOutput.Invoke(func(items []any) []any {
			return appendContent(items, stdoutType, out, false)
		})
	}
}

func (o *outputImpl) AppendErr(err string) {
	if o != nil && o.setOutput != nil {
		o.setOutput.Invoke(func(items []any) []any {
			return appendContent(items, stderrType, err, false)
		})
	}
}

func (o *outputImpl) AddSystem(sys string) {
	if o != nil && o.setOutput != nil {
		o.setOutput.Invoke(func(items []any) []any {
			return appendContent(items, systemType, sys+"\n", true)
		})
	}
}
