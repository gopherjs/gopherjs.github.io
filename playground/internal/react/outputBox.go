package react

import (
	"fmt"
	"go/scanner"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

const (
	errType    = `err`
	textType   = `text`
	typeKey    = `type`
	contextKey = `context`
)

func Output(setOutput func(any)) common.Output {
	return &outputImpl{setOutput: setOutput}
}

type outputImpl struct{ setOutput func(any) }

func (o *outputImpl) Clear() {
	o.setOutput([]any{})
}

func (o *outputImpl) AddError(err error) {
	o.setOutput(func(items []any) []any {
		if list, ok := err.(scanner.ErrorList); ok {
			for _, entry := range list {
				items = append(items, map[string]any{typeKey: errType, contextKey: entry.Error()})
			}
			return items
		}
		return append(items, map[string]any{typeKey: errType, contextKey: err.Error()})
	})
}

func (o *outputImpl) AddOutput(out string) {
	o.setOutput(func(items []any) []any {
		if maxItem := len(items) - 1; maxItem >= 0 {
			lastItem := items[maxItem].(map[string]any)
			if lastItem[typeKey] == textType {
				lastItem[contextKey] = lastItem[contextKey].(string) + out
				return items
			}
		}
		return append(items, map[string]any{typeKey: textType, contextKey: out})
	})
}

// OutputBox creates a box React element for displaying output strings and errors.
func OutputBox(output []any) *Element {
	return CreateElement(outputBoxComponent, Props{
		`output`: output,
	})
}

func outputBoxComponent(props Props) *Element {
	output := As[[]any](props, `output`)
	outputBoxRef := UseRef()

	UseEffect(func() {
		// If there are only errors, scroll to the top,
		// otherwise scroll to the bottom.
		outputBox := outputBoxRef.Current()
		scrollTop := 0
		if hasNonErrors(output) {
			scrollTop = outputBox.Get(`scrollHeight`).Int()
		}
		outputBox.Set(`scrollTop`, scrollTop)
	}, []any{output})

	children := make([]Node, 0, len(output))
	for i, item := range output {
		itemMap := item.(map[string]any)
		children = append(children, outputLine(
			i, itemMap[typeKey] == errType,
			itemMap[contextKey].(string),
		))
	}

	return Div(Props{
		`id`:  `output-box`,
		`ref`: outputBoxRef,
	}, children...)
}

// hasNonErrors determines if any output is not an error,
// otherwise the list is empty or only contains errors.
func hasNonErrors(output []any) bool {
	for _, item := range output {
		if item.(map[string]any)[typeKey] != errType {
			return true
		}
	}
	return false
}

// outputLine creates a React element for a single output line.
// The index is used to create a unique ID for the line so it should
// be the line's position in the output list.
func outputLine(index int, isError bool, content string) *Element {
	return CreateElement(outputLineComponent, Props{
		`index`:   index,
		`isError`: isError,
		`content`: content,
	})
}

func outputLineComponent(props Props) *Element {
	index := int(As[float64](props, `index`))
	isError := As[bool](props, `isError`)
	content := As[string](props, `content`)

	classType := `output-text`
	if isError {
		classType = `output-err`
	}
	id := fmt.Sprintf(`output-item-%d`, index)

	return Pre(Props{
		`className`: classType,
		`id`:        id,
	}, content)
}
