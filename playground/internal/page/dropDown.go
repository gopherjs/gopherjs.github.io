package page

import (
	"fmt"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
)

func DropDown(id, className string, items []any, selected any, onSelect react.Func) *react.Element {
	return react.CreateElement(dropDownComponent, react.Props{}.
		Set(`id`, id).
		Set(`className`, className).
		Set(`items`, items).
		Set(`selected`, selected).
		Set(`onSelect`, onSelect))
}

func dropDownComponent(props react.Props) *react.Element {
	var (
		id        = props.GetString(`id`)
		className = props.GetString(`className`)
		items     = props.Get(`items`).Interface().([]any)
		selected  = props.Get(`selected`)
		onSelect  = props.GetFunc(`onSelect`)
	)

	onChange := react.UseCallback(func(e *js.Object) {
		selected := e.Get(`target`).Get(`value`).String()
		onSelect.Invoke(selected)
	}, []any{onSelect})

	options := make([]react.Node, len(items)+1)

	// Add hidden placeholder option
	options[0] = react.CreateElement(`option`, react.Props{}.
		Set(`key`, id+`-placeholder`).
		Set(`value`, ``).
		Set(`disabled`, true).
		Set(`hidden`, true),
		`—`)

	for i, item := range items {
		value := item.(string)
		options[i+1] = react.CreateElement(`option`, react.Props{}.
			Set(`key`, fmt.Sprintf("%s-%v", id, value)).
			Set(`value`, value),
			value)
	}

	return react.CreateElement(`select`, react.Props{}.
		Set(`id`, id).
		Set(`value`, selected).
		Set(`className`, className).
		Set(`onChange`, onChange),
		options...)
}
