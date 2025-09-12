package react

import "github.com/gopherjs/gopherjs/js"

func ShareUrlControl(shareUrl string, onShare func()) *Element {
	return CreateElement(shareUrlComponent, Props{
		`shareUrl`: shareUrl,
		`onShare`:  onShare,
	})
}

func shareUrlComponent(props Props) *Element {
	shareUrl := As[string](props, `shareUrl`)
	onShare := AsFunc(props, `onShare`)
	shareUrlRef := UseRef()

	UseEffect(func() {
		if len(shareUrl) > 0 {
			shareUrlRef.Call(`focus`)
		}
	}, []any{shareUrl, shareUrlRef})

	onShareUrlFocus := func(e *js.Object) {
		e.Get(`target`).Call(`select`)
	}

	onShareClick := func() {
		onShare()
	}

	className := `share-url-hidden`
	if len(shareUrl) > 0 {
		className = `share-url-show`
	}

	return Fragment(
		Button(`share-button`, `Share`, nil, onShareClick),
		CreateElement(`input`, Props{
			`id`:        `share-url`,
			`type`:      `text`,
			`className`: className,
			`ref`:       shareUrlRef,
			`value`:     shareUrl,
			`readOnly`:  true,
			`onFocus`:   onShareUrlFocus,
		}),
	)
}
