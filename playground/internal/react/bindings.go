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

	// Props represents the properties (props) passed to a React element,
	// e.g. { `className`: `greeting` }.
	//
	// The props may carry any value or function that is needed by the component
	// to render itself and to callback to the parent.
	// See: https://react.dev/reference/react/createElement
	Props map[string]any

	// Ref is a React ref created with UseRef().
	// It is a mutable object with a `current` property that can hold any value.
	// Modifying the `current` property does not trigger re-renders.
	// See: https://react.dev/reference/react/useRef
	Ref struct{ holder *js.Object }

	// Func is the type of function that is passed back when a function
	// is passed as a prop to a React element.
	// This is because of how functions are represented in GopherJS.
	// See: https://github.com/gopherjs/gopherjs/blob/master/js/js.go
	Func func(...any) *js.Object
)

var (
	ErrReactDOMClientNotLoaded = errors.New(`react: ReactDOMClient is not loaded`)
	ErrReactNotLoaded          = errors.New(`react: React is not loaded`)
	ErrUndefinedPropKey        = errors.New(`react: undefined prop key`)
	ErrRefNotInitialized       = errors.New(`react: Ref not initialized`)
)

var ReactDOMClient *js.Object
var React *js.Object

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

// Affirm ensures that the given Props is non-nil.
// If the recevier is nil, a new empty Props is returned,
// otherwise the recevier is returned unchanged.
func (p Props) Affirm() Props {
	if p == nil {
		return Props{}
	}
	return p
}

// As retrieves the property with the given name from the Props
// and converts it to the specified type T.
func As[T any](props Props, name string) T {
	if prop, ok := props[name]; ok {
		return prop.(T)
	}
	panic(ErrUndefinedPropKey)
}

// AsFunc retrieves the property with the given name from the Props
// and converts it to a function of type Func.
func AsFunc(props Props, name string) Func {
	if prop, ok := props[name]; ok {
		return Func(prop.(func(...any) *js.Object))
	}
	panic(ErrUndefinedPropKey)
}

// AsSetter retrieves the property with the given name from the Props
// and converts it to a setter function of type func(any).
func AsSetter(props Props, name string) func(any) {
	fn := AsFunc(props, name)
	return func(v any) { fn(v) }
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
func Button(id, value string, props Props, onClick func()) *Element {
	props = props.Affirm()
	props[`id`] = id
	props[`value`] = value
	props[`type`] = `button`
	props[`onClick`] = onClick
	return CreateElement(`input`, props)
}

// UseState creates a state for the current component render.
// Returns the current state value and a setter function to update the state.
// The setter accepts any value, which will be the new state at the next render,
// or a function that takes the current state and returns the new state.
//
// It must be called unconditionally at the top level of the component function.
// See: https://react.dev/reference/react/useState
//
// NOTE: Some types like `State[int]` might be `State[float64]`,
// and instead of `State[[]*foo]` it might be `State[[]any]`,
// because of how the underlying React hook and GopherJS works.
func UseState[T any](initial T) (T, func(any)) {
	r := react().Call(`useState`, initial)
	current := r.Index(0).Interface().(T)
	setFn := r.Index(1)
	setter := func(v any) { setFn.Invoke(v) }
	return current, setter
}

// UseRef creates a mutable ref object that persists for the lifetime of the component.
// The ref object has a `current` property that can hold any value.
// See: https://react.dev/reference/react/useRef
func UseRef() *Ref {
	return &Ref{holder: react().Call(`useRef`, nil)}
}

func (r *Ref) Current() *js.Object {
	if r != nil && r.holder != nil {
		return r.holder.Get(`current`)
	}
	panic(ErrRefNotInitialized)
}

func (r *Ref) Get(key string) *js.Object {
	return r.Current().Get(key)
}

func (r *Ref) Set(key string, value any) {
	r.Current().Set(key, value)
}

func (r *Ref) Call(name string, args ...any) {
	r.Current().Call(name, args...)
}

// UseEffect registers an effect function that is called after rendering.
// The effect is re-run whenever any of the dependencies change.
//
// If nil is given for the dependencies, the effect is re-run after every render.
// If an empty `[]any{}` is given for the dependencies, the effect is only run once after the initial render.
//
// See: https://react.dev/reference/react/useEffect
func UseEffect(effect func(), deps []any) {
	react().Call(`useEffect`, effect, deps)
}

// UseEffectWithCleanup registers an effect function that is called after rendering.
// The effect is re-run whenever any of the dependencies change.
//
// If nil is given for the dependencies, the effect is re-run after every render.
// If an empty `[]any{}` is given for the dependencies, the effect is only run once after the initial render.
//
// The effect function returns a cleanup function that is called before the effect
// is re-run or when the component is unmounted.
// See: https://react.dev/reference/react/useEffect
func UseEffectWithCleanup(effect func() func(), deps ...any) {
	react().Call(`useEffect`, effect, deps)
}

// UseMemo memoizes the result of a computation function.
// The computation is only re-run when any of the dependencies change.
//
// See: https://react.dev/reference/react/useMemo
func UseMemo[T any](compute func() T, deps []any) T {
	r := react().Call(`useMemo`, compute, deps)
	return r.Interface().(T)
}
