package url

import (
	"fmt"
	"strings"

	"github.com/gopherjs/gopherjs/js"
)

func getTopWindow() *js.Object { return js.Global.Get(`window`).Get(`top`) }
func getLocation() *js.Object  { return getTopWindow().Get(`location`) }

func GetUrlWithoutHash() string {
	href := getLocation().Get(`href`).String()
	if before, _, ok := strings.Cut(href, `#`); ok {
		return before
	}
	return href
}

func GetUrlHash() string {
	return getLocation().Get(`hash`).String()
}

func GetQueryParam(name string) string {
	params := js.Global.Get(`URLSearchParams`).New(getLocation().Get(`search`))
	result := params.Call(`get`, name)
	if result == nil || result == js.Undefined {
		return ``
	}
	return result.String()
}

func GetQueryBool(name string) bool {
	return GetQueryParam(name) == `true`
}

func SetUrlHash(hash string) {
	if hash != `` && !strings.HasPrefix(hash, `#`) {
		panic(fmt.Errorf(`invalid hash to set. Must be empty or start with a "#": %q`, hash))
	}

	if history := getTopWindow().Get(`history`); history != js.Undefined {
		if pushState := history.Get(`pushState`); pushState != js.Undefined {
			newUrl := GetUrlWithoutHash()
			if hash != `` {
				newUrl += hash
			}
			history.Call(`pushState`, nil, ``, newUrl)
			return
		}
	}

	// Fallback to setting location.hash directly
	getLocation().Set(`hash`, hash)
}

// Func is the type of function that has been internalized / externalized for JS.
type Func interface{ Invoke(...any) *js.Object }

func addEventListener(event string, handler Func) {
	getTopWindow().Call(`addEventListener`, event, handler)
}

func removeEventListener(event string, handler Func) {
	getTopWindow().Call(`removeEventListener`, event, handler)
}

func SubscribeToHashChanges(urlHashChanged Func) func() {
	addEventListener(`hashchange`, urlHashChanged)
	return func() {
		removeEventListener(`hashchange`, urlHashChanged)
	}
}

func SubscribeToQueryChanges(urlQueryChanged Func) func() {
	addEventListener(`popstate`, urlQueryChanged)
	return func() {
		removeEventListener(`popstate`, urlQueryChanged)
	}
}
