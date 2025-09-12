package main

import (
	"github.com/gopherjs/gopherjs.github.io/playground/internal/react"

	"github.com/gopherjs/gopherjs/js"
)

func main() {
	js.Global.Set(`RunPlayground`, func(r, rdc *js.Object) {
		react.React = r
		react.ReactDOMClient = rdc

		root := react.CreateRoot(`playground`)
		root.Render(react.StrictMode(
			react.Playground(),
		))
	})
}
