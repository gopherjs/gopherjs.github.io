package main

import (
	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/react"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/url"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/page"
)

func main() {
	js.Global.Set(`RunPlayground`, func(r, rdc *js.Object) {
		react.React = r
		react.ReactDOMClient = rdc

		root := react.CreateRoot(`playground`)
		pg := page.Playground()
		if url.GetQueryBool(`debug`) {
			root.Render(react.StrictMode(pg))
		} else {
			root.Render(pg)
		}
	})
}
