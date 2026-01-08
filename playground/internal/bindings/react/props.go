package react

import (
	"github.com/gopherjs/gopherjs/js"
)

// Props represents the properties (props) passed to a React element,
//
// The props may carry any value or function that is needed by the component
// to render itself and to callback to the parent.
// See: https://react.dev/reference/react/createElement
type Props struct {
	*js.Object
}

// Set will set the value to the props. The returned props
// should be used to chain and update the props.
func (p Props) Set(key string, value any) Props {
	if p.Object == nil {
		p.Object = js.Global.Get(`Object`).New()
	}
	p.Object.Set(key, value)
	return p
}

func (p Props) Has(key string) bool {
	return p.Object != nil && p.Object.Get(key) != js.Undefined
}

func (p Props) Get(key string) *js.Object {
	if p.Object != nil {
		if prop := p.Object.Get(key); prop != js.Undefined {
			return prop
		}
	}
	panic(ErrUndefinedPropKey)
}

func (p Props) GetString(key string) string { return p.Get(key).String() }
func (p Props) GetBool(key string) bool     { return p.Get(key).Bool() }
func (p Props) GetFloat(key string) float64 { return p.Get(key).Float() }
func (p Props) GetInt(key string) int       { return p.Get(key).Int() }
func (p Props) GetFunc(key string) Func     { return p.Get(key) }

func (p Props) GetRef(key string) Ref {
	return Ref{Object: p.Get(key)}
}

func GetProp[T any](p Props, key string) T {
	return castObj[T](p.Get(key))
}

func GetValueRef[T any](p Props, key string) ValueRef[T] {
	return ValueRef[T]{Object: p.Get(key)}
}
