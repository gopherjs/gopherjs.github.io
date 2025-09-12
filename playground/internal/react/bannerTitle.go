package react

func BannerTitle(version string) *Element {
	return CreateElement(bannerTitleComponent, Props{
		`version`: version,
	})
}

func bannerTitleComponent(props Props) *Element {
	version := As[string](props, `version`)
	return Span(Props{
		`id`: `banner-title`,
	},
		`playground `,
		Span(Props{
			`id`: `banner-title-sub`,
		},
			// TODO(grantnelson-wf): Make this a link to the gopherjs repo
			//     https://github.com/gopherjs/gopherjs
			`GopherJS `,
		),
		Span(Props{
			`id`: `banner-title-version`,
		},
			// TODO(grantnelson-wf): Make this version a link to release notes
			//     https://github.com/gopherjs/gopherjs/releases/tag/v1.19.0-beta2
			`(`+version+`)`,
		),
	)
}
