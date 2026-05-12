// This package is the entry point of the compile webworker that will be
// running along side the playground awaiting a request to compile Go code
// into JS code.
package main

import (
	"fmt"
	"go/scanner"
	"strings"

	"github.com/gopherjs/gopherjs/compiler/errlist"
	"github.com/gopherjs/gopherjs/js"
	"github.com/grantnelson-wf/gopherjs.github.io/playground/internal/cmd/compile/internal"
)

func main() {
	fetcher := internal.NewFetcher()
	compiler := internal.NewCompiler(fetcher)

	ch := make(chan *js.Object, 1)
	js.Global.Set(`onmessage`, js.MakeFunc(func(this *js.Object, args []*js.Object) any {
		ch <- args[0]
		return nil
	}))

	go awaitMessages(fetcher, compiler, ch)
}

func awaitMessages(fetcher internal.Fetcher, compiler internal.Compiler, ch chan *js.Object) {
	for msg := range ch {
		data := msg.Get("data")
		msgType := data.Get("type").String()
		content := data.Get("content")
		handleMessage(fetcher, compiler, msgType, content)
	}
}

func handleMessage(fetcher internal.Fetcher, compiler internal.Compiler, msgType string, content *js.Object) {
	switch msgType {
	case `requestVersion`:
		handleRequestVersion(compiler)
	case `verbose`:
		handleSetVerbose(fetcher, compiler, content)
	case `preload`:
		handlePreload(compiler, content)
	case `compile`:
		handleCompile(compiler, content)
	default:
		postMessage(`error`, fmt.Sprintf(`unknown request message type: %q`, msgType))
	}
}

func handleRequestVersion(compiler internal.Compiler) {
	postMessage(`version`, compiler.Version())
}

func handleSetVerbose(fetcher internal.Fetcher, compiler internal.Compiler, content *js.Object) {
	verbose := content.Bool()
	fetcher.SetVerbose(verbose)
	compiler.SetVerbose(verbose)
}

func handlePreload(compiler internal.Compiler, content *js.Object) {
	compiler.Preload(toStringMap(content))
}

func ungroupError(err error) []error {
	switch t := err.(type) {
	case scanner.ErrorList:
		errs := make([]error, len(t))
		for i, entry := range t {
			errs[i] = entry
		}
		return errs
	case errlist.ErrorList:
		return t
	default:
		return []error{err}
	}
}

func handleCompile(compiler internal.Compiler, content *js.Object) {
	jsCode, err := compiler.Compile(toStringMap(content))
	response := map[string]string{}
	if err != nil {
		errs := ungroupError(err)
		errStr := make([]string, len(errs))
		for i, e := range errs {
			errStr[i] = e.Error()
		}
		response[`error`] = strings.Join(errStr, "\n")
	} else {
		response[`result`] = jsCode
	}
	postMessage(`compiled`, response)
}

func toStringMap(obj *js.Object) map[string]string {
	result := map[string]string{}
	keys := js.Global.Get(`Object`).Call(`keys`, obj)
	for i := 0; i < keys.Length(); i++ {
		key := keys.Index(i).String()
		result[key] = obj.Get(key).String()
	}
	return result
}

func postMessage(typ string, content any) {
	resp := js.Global.Get(`Object`).New()
	resp.Set(`type`, typ)
	resp.Set(`content`, content)
	js.Global.Call(`postMessage`, resp)
}
