package page

import (
	"strings"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/url"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/snippets"
)

const repoUrl = `https://github.com/gopherjs/gopherjs`

type BannerHandle interface {
	Focus()
	FormatImports() bool
	SetVersion(version string)
	ShareHash() string
	SetShareHash(hash string)
}

var memoizedBanner any

func Banner(bannerRef react.ValueRef[BannerHandle], onRun, onFormat, onShare, onSnippetSelected react.Func) *react.Element {
	if memoizedBanner == nil {
		memoizedBanner = react.Memo(bannerComponent)
	}
	return react.CreateElement(memoizedBanner, react.Props{}.
		Set(`bannerRef`, bannerRef).
		Set(`onRun`, onRun).
		Set(`onFormat`, onFormat).
		Set(`onShare`, onShare).
		Set(`onSnippetSelected`, onSnippetSelected))
}

func bannerComponent(props react.Props) *react.Element {
	var (
		bannerRef         = react.GetValueRef[BannerHandle](props, `bannerRef`)
		onRun             = props.GetFunc(`onRun`)
		onFormat          = props.GetFunc(`onFormat`)
		onShare           = props.GetFunc(`onShare`)
		onSnippetSelected = props.GetFunc(`onSnippetSelected`)

		version, setVersion       = react.UseState(`--`)
		shareHash, setShareHash   = react.UseState(``)
		runButtonRef              = react.UseRef()
		shareUrlRef               = react.UseRef()
		lightTheme, setLightTheme = react.UseStateLazy(getDefaultToLightTheme)
		fmtImports, setFmtImports = react.UseState(true)
	)

	react.UseImperativeHandle(bannerRef, func() BannerHandle {
		return &bannerHandle{
			runButtonRef: runButtonRef,
			fmtImports:   fmtImports,
			setVersion:   setVersion,
			shareHash:    shareHash,
			setShareHash: setShareHash,
		}
	}, []any{runButtonRef, fmtImports, setVersion, shareHash, setShareHash})

	react.UseLayoutEffect(func() {
		setDataTheme(lightTheme)
	}, []any{lightTheme})

	// This updates the top window's URL hash when the share hash state has changed.
	react.UseEffect(func() {
		url.SetUrlHash(shareHash)
	}, []any{shareHash})

	onFormatClick := react.UseCallback(func() {
		onFormat.Invoke(fmtImports)
	}, []any{onFormat, fmtImports})

	tagUrl := react.UseMemo(func() string {
		if before, _, ok := strings.Cut(version, "+"); ok {
			return repoUrl + `/releases/tag/v` + before
		}
		return repoUrl
	}, []any{version})

	react.UseLayoutEffect(func() {
		if len(shareHash) > 0 && strings.HasPrefix(shareHash, `#/`) {
			shareUrlRef.Current().Call(`focus`)
		}
	}, []any{shareHash})

	onShareClick := react.UseCallback(func(e *js.Object) {
		onShare.Invoke() // call without the dom target
	}, []any{onShare})

	onShareUrlFocus := react.UseCallback(func(e *js.Object) {
		e.Get(`target`).Call(`select`)
	}, []any{})

	snippetItems := react.UseMemo(func() []any {
		names := snippets.SnippetNames()
		// because of the type system in JS used by react, convert []string to []any
		items := make([]any, len(names))
		for i, name := range names {
			items[i] = name
		}
		return items
	}, []any{})

	onSelectSnippet := react.UseCallback(func(name string) {
		onSnippetSelected.Invoke(name)
	}, []any{onSnippetSelected})

	// based on the URL Hash, determine which UI elements to show.
	shareUrlClass := `share-url-hidden`
	snippetsClass := `snippets-drop-down-show`
	selSnippet := snippets.DefaultName
	shownSharedUrl := ``
	if len(shareHash) > 0 {
		if strings.HasPrefix(shareHash, `#/`) {
			shownSharedUrl = url.GetUrlWithoutHash() + shareHash
			shareUrlClass = `share-url-show`
			snippetsClass = `snippets-drop-down-hidden`
		} else if strings.HasPrefix(shareHash, `#`) {
			selSnippet = shareHash[1:]
		}
	}

	return react.Div(react.Props{}.
		Set(`id`, `banner`),
		react.Span(react.Props{}.
			Set(`id`, `banner-title`),
			`playground `,
			react.Span(react.Props{}.
				Set(`id`, `banner-title-sub`),
				react.A(repoUrl, react.Props{}, `GopherJS`),
				` `,
			),
			react.Span(react.Props{}.
				Set(`id`, `banner-title-version`),
				`(`,
				react.A(tagUrl, react.Props{}, version),
				`)`,
			),
		),
		react.Span(react.Props{}.
			Set(`id`, `controls`),
			react.Button(`run-button`, `Run`, react.Props{}.Set(`ref`, runButtonRef), onRun),
			react.Button(`format-button`, `Format`, react.Props{}, onFormatClick),
			ToggleBox(`format-imports`, `Rewrite imports on Format`, `Imports`, fmtImports, setFmtImports),
			react.Button(`share-button`, `Share`, react.Props{}, onShareClick),
			react.CreateElement(`input`, react.Props{}.
				Set(`id`, `share-url`).
				Set(`type`, `text`).
				Set(`className`, shareUrlClass).
				Set(`ref`, shareUrlRef).
				Set(`value`, shownSharedUrl).
				Set(`readOnly`, true).
				Set(`onFocus`, onShareUrlFocus)),
			DropDown(`snippets-drop-down`, snippetsClass, snippetItems, selSnippet, onSelectSnippet),
			ToggleBox(`color-theme`, `Change color-theme`, ``, lightTheme, setLightTheme),
		),
	)
}

func NoopBannerHandle() BannerHandle {
	return (*bannerHandle)(nil)
}

type bannerHandle struct {
	runButtonRef react.Ref
	fmtImports   bool
	setVersion   react.Func
	shareHash    string
	setShareHash react.Func
}

func (h *bannerHandle) Focus() {
	if h != nil {
		h.runButtonRef.Current().Call(`focus`)
	}
}

func (h *bannerHandle) FormatImports() bool {
	return h != nil && h.fmtImports
}

func (h *bannerHandle) SetVersion(version string) {
	if h != nil && h.setVersion != nil {
		h.setVersion.Invoke(version)
	}
}

func (h *bannerHandle) ShareHash() string {
	if h != nil {
		return h.shareHash
	}
	return ``
}

func (h *bannerHandle) SetShareHash(hash string) {
	if h != nil && h.setShareHash != nil {
		h.setShareHash.Invoke(hash)
	}
}

func getDefaultToLightTheme() bool {
	return js.Global.Get(`window`).Call(`matchMedia`, `(prefers-color-scheme: light)`).Get(`matches`).Bool()
}

func setDataTheme(lightTheme bool) {
	theme := `dark`
	if lightTheme {
		theme = `light`
	}
	js.Global.Get(`document`).Get(`documentElement`).Call(`setAttribute`, `data-theme`, theme)
}
