package react

import "github.com/gopherjs/gopherjs/js"

func ToggleBox(id, title, label string, checked bool, setChecked func(any)) *Element {
	return CreateElement(toggleBoxComponent, Props{
		`id`:         id,
		`title`:      title,
		`label`:      label,
		`checked`:    checked,
		`setChecked`: setChecked,
	})
}

func toggleBoxComponent(props Props) *Element {
	id := As[string](props, `id`)
	title := As[string](props, `title`)
	label := As[string](props, `label`)
	checked := As[bool](props, `checked`)
	setChecked := AsSetter(props, `setChecked`)

	onChange := func(e *js.Object) {
		setChecked(e.Get(`target`).Get(`checked`).Bool())
	}

	return Div(Props{
		`id`:        id,
		`className`: `toggle-box-wrapper`,
		`title`:     title,
	},
		CreateElement(`input`, Props{
			`id`:        id + `-checkbox`,
			`className`: `toggle-box-checkbox`,
			`type`:      `checkbox`,
			`checked`:   checked,
			`onChange`:  onChange,
		}),
		CreateElement(`label`, Props{
			`id`:        id + `-toggle`,
			`className`: `toggle-box-toggle`,
			`htmlFor`:   id + `-checkbox`,
		}),
		label,
	)
}
