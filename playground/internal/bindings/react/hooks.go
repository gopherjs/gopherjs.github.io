package react

import (
	"github.com/gopherjs/gopherjs/js"
)

type (
	// Ref is a React ref created with UseRef().
	// This is intended to hold a reference to a DOM element or a *js.Object.
	// It is a mutable object with a `current` property that can hold any value.
	// Modifying the `current` property does not trigger re-renders.
	//
	// See: https://react.dev/reference/react/useRef
	Ref struct{ *js.Object }

	// ValueRef is a React ref created with UseRefWith() that contains a value.
	// It is a mutable object with a `current` property that can hold any value.
	// Modifying the `current` property does not trigger re-renders.
	//
	// See: https://react.dev/reference/react/useRef
	ValueRef[T any] struct{ *js.Object }

	// Func is the type of function that is passed back when a function
	// is passed as a prop to a React element.
	// This is because of how functions are represented in GopherJS.
	//
	// See: https://github.com/gopherjs/gopherjs/blob/master/js/js.go
	Func interface{ Invoke(...any) *js.Object }

	// Context is a context component creater.
	//
	// See: https://react.dev/reference/react/createContext
	Context[T any] struct{ *js.Object }
)

// UseID generates a stable unique ID for accessibility attributes.
//
// Do not call useId to generate keys in a list.
//
// See: https://react.dev/reference/react/useId
func UseId() string {
	return react().Call(`useId`).String()
}

func castObj[T any](obj *js.Object) (result T) {
	if obj == nil || obj == js.Undefined {
		return
	}
	switch any(result).(type) {
	case bool:
		return any(obj.Bool()).(T)
	case string:
		return any(obj.String()).(T)
	case int:
		return any(obj.Int()).(T)
	case int8:
		return any(int8(obj.Int())).(T)
	case int16:
		return any(int16(obj.Int())).(T)
	case int32:
		return any(int32(obj.Int())).(T)
	case int64:
		return any(obj.Int64()).(T)
	case uint:
		return any(uint(obj.Int())).(T)
	case uint8:
		return any(uint8(obj.Int())).(T)
	case uint16:
		return any(uint16(obj.Int())).(T)
	case uint32:
		return any(uint32(obj.Int())).(T)
	case uint64:
		return any(obj.Uint64()).(T)
	case float32:
		return any(float32(obj.Float())).(T)
	case float64:
		return any(obj.Float()).(T)
	default:
		v := obj.Interface()
		if v == nil {
			return
		}
		return v.(T)
	}
}

// UseState creates a state for the current component render.
// Returns the current state value and a setter function to update the state.
// The setter accepts any value, which will be the new state at the next render,
// or a function that takes the current state and returns the new state.
//
// Warning: The types are externalized into JS and back into Go types when
// going through React, meaning some types will not be able to be recovered
// the same as when passed in. Therefore these should typeically use
// bool, int, float64, string, or *js.Objects.
// See https://github.com/gopherjs/gopherjs/blob/master/js/js.go
//
// It must be called unconditionally at the top level of the component function.
// See: https://react.dev/reference/react/useState
func UseState[T any](initial T) (T, Func) {
	return UseStateLazy(func() T { return initial })
}

// UseStateLazy is the same as UseState but the initial value
// is computed by calling the given function only once during the initial render.
//
// Use this to avoid expensive computations on every render for the initial state
// value that will always be thrown away after the first render.
//
// Warning: The types are externalized into JS and back into Go types when
// going through React, meaning some types will not be able to be recovered
// the same as when passed in. Therefore these should typeically use
// bool, int, float64, string, or *js.Objects.
// See https://github.com/gopherjs/gopherjs/blob/master/js/js.go
//
// See: https://react.dev/reference/react/useState
func UseStateLazy[T any](initialFn func() T) (T, Func) {
	r := react().Call(`useState`, initialFn)
	current := castObj[T](r.Index(0))
	setter := r.Index(1)
	return current, setter
}

// UseRef creates a mutable ref object that persists for the lifetime of the component.
// The ref object has a `current` property that can hold any JS object,
// such as references to components.
//
// See: https://react.dev/reference/react/useRef
func UseRef() Ref {
	return Ref{Object: react().Call(`useRef`, nil)}
}

func (ref Ref) Current() *js.Object     { return ref.Get(`current`) }
func (ref Ref) SetCurrent(v *js.Object) { ref.Set(`current`, v) }

// UseRefWith is similar to UseRef except initializes the `current` property
// to the given initial value. Since the value is being given this will use
// a ValueRef to hold the value instead of a Ref.
//
// UseRefWith will store any value type including Go values types without
// allowing them to be internalized and externalized.
//
// To avoid recreating the initial value over and over again,
// for complex values use UseRefLazy.
//
// See https://react.dev/reference/react/useRef#avoiding-recreating-the-ref-contents
func UseRefWith[T any](initial T) ValueRef[T] {
	return UseRefLazy(func() T { return initial })
}

// UseRefLazy is similar to UseRef except initializes the `current` property
// to an initial value. Since the value is being given this will use
// a ValueRef to hold the value instead of a general Ref.
//
// The given initial function will usually only be called once when
// initializing (or twice when in strict mode).
func UseRefLazy[T any](initialFn func() T) ValueRef[T] {
	ref := ValueRef[T]{Object: react().Call(`useRef`, -1)}
	id := ref.Get(`current`).Int()

	if id <= 0 {
		valueRefLastId++
		id = valueRefLastId
		ref.Set(`current`, id)
		valueRefStore[id] = initialFn()
	}

	UseLayoutEffectWithCleanup(func() func() {
		// Ensure value exists (should only happen in strict mode)
		if _, ok := valueRefStore[id]; !ok {
			valueRefStore[id] = initialFn()
		}
		return func() { delete(valueRefStore, id) }
	}, []any{})

	return ref
}

func (ref ValueRef[T]) getId() int     { return ref.Get(`current`).Int() }
func (ref ValueRef[T]) Current() T     { return valueRefStore[ref.getId()].(T) }
func (ref ValueRef[T]) SetCurrent(v T) { valueRefStore[ref.getId()] = v }

// The value ref global storage is used for references since the
// internalization / externalization of the value may cause the object to
// not be able to be recovered. This is for things like interfaces and structs
// but can store other types that could be recovered any way as well.
// The internalization / externalization of the value is caused by sending
// values through react props via hooks and components.
var (
	valueRefLastId = 0
	valueRefStore  = map[int]any{}
)

// UseEffect registers an effect function that is called after rendering.
// The effect is re-run whenever any of the dependencies change.
//
// If nil is given for the dependencies, the effect is re-run after every render.
// If an empty `[]any{}` is given for the dependencies,
// the effect is only run once after the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// See: https://react.dev/reference/react/useEffect
func UseEffect(effect func(), deps []any) {
	react().Call(`useEffect`, effect, deps)
}

// UseEffectWithCleanup registers an effect function that is called after rendering.
// The effect is re-run whenever any of the dependencies change.
//
// If nil is given for the dependencies, the effect is re-run after every render.
// If an empty `[]any{}` is given for the dependencies,
// the effect is only run once after the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// The effect function returns a cleanup function that is called before the effect
// is re-run or when the component is unmounted.
// See: https://react.dev/reference/react/useEffect
func UseEffectWithCleanup(effect func() func(), deps []any) {
	react().Call(`useEffect`, effect, deps)
}

// UseLayoutEffect registers an effect function that is called before rendering.
// The effect is re-run whenever any of the dependencies change.
//
// UseLayoutEffect can hurt performance.
// Prefer UseEffect when possible.
//
// If nil is given for the dependencies, the effect is re-run before every render.
// If an empty `[]any{}` is given for the dependencies,
// the effect is only run once before the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// See: https://react.dev/reference/react/useLayoutEffect
func UseLayoutEffect(effect func(), deps []any) {
	react().Call(`useLayoutEffect`, effect, deps)
}

// UseLayoutEffectWithCleanup registers an effect function that is called before
// rendering. The effect is re-run whenever any of the dependencies change.
//
// UseLayoutEffectWithCleanup can hurt performance.
// Prefer UseEffectWithCleanup when possible.
//
// If nil is given for the dependencies, the effect is re-run before every render.
// If an empty `[]any{}` is given for the dependencies,
// the effect is only run once before the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// The effect function returns a cleanup function that is called before the effect
// is re-run or when the component is unmounted.
// See: https://react.dev/reference/react/useLayoutEffect
func UseLayoutEffectWithCleanup(effect func() func(), deps []any) {
	react().Call(`useLayoutEffect`, effect, deps)
}

// UseImperativeHandle exposes an imperative handle to a parent component
// via a ref passed as a prop. The createHandle function is called to
// produce the handle value, and it is re-created whenever deps change.
// On unmount (or before re-creation), the handle is cleared to the zero value.
//
// Typically the handle type is an interface that a component will populate
// with a struct that implements that interface. This provides the parent
// component with a way to call into the child component to perform specific
// events in a much more conveniant way than using a Ref alone.
//
// If nil is given for the dependencies, createHandle is re-run after
// every render. If an empty `[]any{}` is given for the dependencies,
// createHandle is only run once after the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// See: https://react.dev/reference/react/useImperativeHandle
func UseImperativeHandle[T any](ref ValueRef[T], createHandle func() T, deps []any) {
	// This is the Go equivalent of React's useImperativeHandle, but works with
	// ValueRef's Go-side storage instead of React's ref.current to keep the Go types correct.
	UseLayoutEffectWithCleanup(func() func() {
		ref.SetCurrent(createHandle())
		return func() {
			var zero T
			ref.SetCurrent(zero)
		}
	}, deps)
}

// UseMemo memoizes the result of a computation function.
// The computation is only re-run when any of the dependencies change.
//
// If nil is given for the dependencies, the computation is re-run for every render.
// If an empty `[]any{}` is given for the dependencies,
// the computation is only run once for the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// See: https://react.dev/reference/react/useMemo
func UseMemo[T any](compute func() T, deps []any) T {
	r := react().Call(`useMemo`, compute, deps)
	return castObj[T](r)
}

// UseCallback memoizes a callback function so it maintains stable identity
// across renders unless dependencies change.
//
// If nil is given for the dependencies, the function is recreated for every render.
// If an empty `[]any{}` is given for the dependencies,
// the function is only created once for the initial render.
// Setters, Funcs, and Refs should be stablized so should normally
// not need to be used as dependencies.
// The number and order of dependencies must remain consistent.
//
// See: https://react.dev/reference/react/useCallback
func UseCallback(fn any, deps []any) Func {
	return react().Call(`useCallback`, fn, deps)
}

// CreateContext lets you create a context that components can provide or read.
// Call CreateContext outside of any components to create a context.
// This allows context to be passed into child components without having
// to pass the context as a prop.
//
// T must be a type that survives JS round-tripping (string, int, float64,
// bool, *js.Object)
//
// See: https://react.dev/reference/react/createContext
func CreateContext[T any](defaultValue T) Context[T] {
	return Context[T]{Object: react().Call(`createContext`, defaultValue)}
}

// Provider creates the component element for the given context.
//
// See: https://react.dev/reference/react/createContext#provider
func (c Context[T]) Provider(value T, children ...Node) *Element {
	return CreateElement(c.Get(`Provider`), Props{}.Set(`value`, value), children...)
}

// UseContext is called from a component to looks up the information for the
// context that wraps that component.
//
// See: https://react.dev/reference/react/useContext
func UseContext[T any](ctx Context[T]) T {
	r := react().Call(`useContext`, ctx.Object)
	return castObj[T](r)
}

// UseSyncExternalStore subscribes to an external store and returns its
// current snapshot. React will call getSnapshot to read the current value
// and re-render whenever subscribe's onStoreChange callback is called.
//
// subscribe is called with an onStoreChange callback and must return
// an unsubscribe function. If a different subscribe function is passed during
// a re-render, React will re-subscribe to the store using the newly passed
// subscribe function.
//
// getSnapshot must return the current store value. The store snapshot returned
// by getSnapshot must be immutable.
//
// T must be a type that survives JS round-tripping (string, int, float64,
// bool, *js.Object) and is comparable via Object.is(). Go types such as
// interfaces and structs may not be used.
//
// See: https://react.dev/reference/react/useSyncExternalStore
func UseSyncExternalStore[T any](subscribe func(onStoreChange func()) func(), getSnapshot func() T) T {
	r := react().Call(`useSyncExternalStore`, subscribe, getSnapshot)
	return castObj[T](r)
}
