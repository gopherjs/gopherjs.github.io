// Package react provides basic React bindings for GopherJS.
// This is not an exhaustive React binding, but provides enough
// functionality to create React components and use React hooks
// needed by the playground application.
package react

import (
	"errors"

	"github.com/gopherjs/gopherjs/js"
)

type (
	// Node is a React node that can be displayed.
	// This will usually be a react element constructed with CreateElement(),
	// a string, a number, null, or undefined.
	// Node may be a slice of Nodes as well.
	Node any

	// Root is a React root created with CreateRoot().
	// It is used to render React nodes into the DOM.
	// See: https://react.dev/reference/react-dom/client/createRoot
	Root struct{ *js.Object }

	// Element is a React element created with CreateElement().
	// It represents a UI component and can be rendered into the DOM.
	// See: https://react.dev/reference/react/createElement
	Element struct{ *js.Object }
)

var (
	ErrReactDOMClientNotLoaded = errors.New(`react: ReactDOMClient is not loaded`)
	ErrReactNotLoaded          = errors.New(`react: React is not loaded`)
	ErrUndefinedPropKey        = errors.New(`react: undefined prop key`)
	ErrUninitializedValueRef   = errors.New(`react: uninitialized value ref`)
	ErrMissingGoValue          = errors.New(`react: missing value in go value registry`)
)

var (
	ReactDOMClient *js.Object
	React          *js.Object
)

func reactDom() *js.Object {
	if ReactDOMClient == nil {
		ReactDOMClient = js.Global.Get(`ReactDOMClient`)
	}
	if ReactDOMClient == nil {
		panic(ErrReactDOMClientNotLoaded)
	}
	return ReactDOMClient
}

func react() *js.Object {
	if React == nil {
		React = js.Global.Get(`React`)
	}
	if React == nil {
		panic(ErrReactNotLoaded)
	}
	return React
}

func CreateRoot(id string) *Root {
	rootElem := js.Global.Get(`document`).Call(`getElementById`, id)
	return &Root{Object: reactDom().Call(`createRoot`, rootElem)}
}

func (r *Root) Render(n Node) {
	r.Call(`render`, n)
}

// CreateElement creates a React element of the given type with the given props and children.
//
// The type can be a string for HTML elements (e.g. `div`, `span`, etc.),
// or a React component (function or class).
// The props can be nil if there are no properties to set, a Props map,
// or a struct for typed props.
// Children can be zero or more React nodes to be nested inside the element.
// See: https://react.dev/reference/react/createElement
func CreateElement(typ any, props any, children ...Node) *Element {
	args := []any{typ, props}
	for _, c := range children {
		args = append(args, c)
	}
	return &Element{Object: react().Call(`createElement`, args...)}
}

// StrictMode lets you find common bugs in your components early during development.
// See: https://react.dev/reference/react/StrictMode
func StrictMode(children ...Node) *Element {
	return CreateElement(react().Get(`StrictMode`), nil, children...)
}

// Fragments groups items without a wrapping element.
// The Fragments "disappears" from the DOM such that only its children are
// rendered as siblings to the Fragment's sibling elements.
// See: https://react.dev/reference/react/Fragment
func Fragment(children ...Node) *Element {
	return CreateElement(react().Get(`Fragment`), nil, children...)
}

// Memo prevents a component from re-rendering when its props haven't changed.
// Without this, every child re-renders whenever the parent renders,
// even if nothing relevant changed.
//
// See: https://react.dev/reference/react/memo
func Memo(component any) any {
	return react().Call(`memo`, component)
}

func Div(props Props, children ...Node) *Element {
	return CreateElement(`div`, props, children...)
}

func Pre(props Props, children ...Node) *Element {
	return CreateElement(`pre`, props, children...)
}

func TextArea(props Props, children ...Node) *Element {
	return CreateElement(`textarea`, props, children...)
}

func Span(props Props, children ...Node) *Element {
	return CreateElement(`span`, props, children...)
}

// Button creates a button input element with the given value, properties,
// and onClick handler. The onClick handler is added to the props as the `onClick`
// property and is called when the button is clicked.
func Button(id, value string, props Props, onClick Func) *Element {
	return CreateElement(`input`, props.
		Set(`id`, id).
		Set(`value`, value).
		Set(`type`, `button`).
		Set(`onClick`, UseCallback(func() {
			onClick.Invoke() // Call without the event argument
		}, []any{onClick})))
}

// A creates an `<a>` link element for a hyperlink tag.
func A(href string, props Props, children ...Node) *Element {
	props = props.Set(`href`, href)
	if !props.Has(`target`) {
		props = props.Set(`target`, `_blank`)
	}
	return CreateElement(`a`, props, children...)
}
