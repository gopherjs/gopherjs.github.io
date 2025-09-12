package react

import (
	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/snippets"
)

func Playground() *Element {
	version := "vx.x.x" // TODO(grantnelson-wf): compiler.Version()
	preferslightTheme := getPrefersLightTheme()
	snippetsStore := snippets.NewStore()

	return CreateElement(func() *Element {
		code, setCode := UseState(``)
		shareUrl, setShareUrl := UseState(``)
		output, setOutput := UseState([]any{})
		fmtImports, setFmtImports := UseState(true)
		lightTheme, setLightTheme := UseState(preferslightTheme)

		pa := &playgroundAssistant{
			snippetStore: snippetsStore,
			code:         code,
			setCode:      setCode,
			setShareUrl:  setShareUrl,
			setOutput:    setOutput,
			fmtImports:   fmtImports,
		}

		UseEffect(func() {
			setDataTheme(lightTheme)
		}, []any{lightTheme})

		UseEffect(func() {
			// code changed so clear share URL
			setShareUrl(``)
			getLocation().Set(`hash`, ``)
		}, []any{code})

		UseEffect(pa.initCode, []any{})

		/* TODO(grantnelson-wf): Implement hashchange loading
		dom.GetWindow().Top().AddEventListener("hashchange", false, func(event dom.Event) {
			event.PreventDefault()
			callback()
		})
		*/

		return Fragment(
			Div(Props{
				`id`: `banner`,
			},
				BannerTitle(version),
				Span(Props{
					`id`: `controls`,
				},
					Button(`run-button`, `Run`, nil, pa.onRunClick),
					Button(`format-button`, `Format`, nil, pa.onFormatClick),
					ToggleBox(`format-imports`, `Rewrite imports on Format`, `Imports`, fmtImports, setFmtImports),
					ShareUrlControl(shareUrl, pa.onShareClick),
					// TODO(grantnelson-wf): Snippet selection control.
					ToggleBox(`color-theme`, `Change color-theme`, ``, lightTheme, setLightTheme),
				),
			),
			Div(Props{
				`id`: `code-output-box`,
			},
				Div(Props{
					`id`: `code-box-container`,
				},
					CodeBox(code, setCode, pa.onSaveKeyPress, pa.onEscapeCode),
				),
				OutputBox(output),
			),
		)
	}, nil)
}

func getPrefersLightTheme() bool {
	return js.Global.Get(`window`).Call(`matchMedia`, `(prefers-color-scheme: light)`).Get(`matches`).Bool()
}

func setDataTheme(lightTheme bool) {
	theme := `dark`
	if lightTheme {
		theme = `light`
	}
	js.Global.Get(`document`).Get(`documentElement`).Call(`setAttribute`, `data-theme`, theme)
}

func getLocation() *js.Object {
	return js.Global.Get(`window`).Get(`top`).Get(`location`)
}

type playgroundAssistant struct {
	snippetStore common.SnippetStore
	code         string
	setCode      func(any)
	setShareUrl  func(any)
	setOutput    func(any)
	fmtImports   bool
}

func (pa *playgroundAssistant) initCode() {
	// TODO(grantnelson-wf): Update
	hash := getLocation().Get(`hash`).String()
	code, err := pa.snippetStore.Read(hash)
	if err != nil {
		o := Output(pa.setOutput)
		o.Clear()
		o.AddError(err)
	}
	// even on error, set the code so the default code is shown.
	pa.setCode(code)
}

func (pa *playgroundAssistant) onSaveKeyPress() {
	println("Save key pressed") // TODO(grantnelson-wf): Implement
}

func (pa *playgroundAssistant) onEscapeCode() {
	println("Escape code pressed") // TODO(grantnelson-wf): Implement to change focus to the run button or something
}

func (pa *playgroundAssistant) onRunClick() {
	println("Run clicked") // TODO(grantnelson-wf): Implement
}

func (pa *playgroundAssistant) onFormatClick() {
	println("Format clicked", pa.fmtImports) // TODO(grantnelson-wf): Implement
}

func (pa *playgroundAssistant) onShareClick() {
	println("Share URL Clicked") // TODO(grantnelson-wf): Implement
}
