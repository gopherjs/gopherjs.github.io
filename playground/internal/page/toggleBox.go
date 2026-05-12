package page

import (
	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
)

func ToggleBox(id, title, label string, checked bool, setChecked react.Func) *react.Element {
	return react.CreateElement(toggleBoxComponent, react.Props{}.
		Set(`id`, id).
		Set(`title`, title).
		Set(`label`, label).
		Set(`checked`, checked).
		Set(`setChecked`, setChecked))
}

func toggleBoxComponent(props react.Props) *react.Element {
	var (
		id         = props.GetString(`id`)
		title      = props.GetString(`title`)
		label      = props.GetString(`label`)
		checked    = props.GetBool(`checked`)
		setChecked = props.GetFunc(`setChecked`)
	)

	onChange := react.UseCallback(func(e *js.Object) {
		checked := e.Get(`target`).Get(`checked`).Bool()
		setChecked.Invoke(checked)
	}, []any{setChecked})

	return react.Div(react.Props{}.
		Set(`id`, id).
		Set(`className`, `toggle-box-wrapper`).
		Set(`title`, title),
		react.CreateElement(`input`, react.Props{}.
			Set(`id`, id+`-checkbox`).
			Set(`className`, `toggle-box-checkbox`).
			Set(`type`, `checkbox`).
			Set(`checked`, checked).
			Set(`onChange`, onChange)),
		react.CreateElement(`label`, react.Props{}.
			Set(`id`, id+`-toggle`).
			Set(`className`, `toggle-box-toggle`).
			Set(`htmlFor`, id+`-checkbox`)),
		label,
	)
}
