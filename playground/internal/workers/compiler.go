package workers

import (
	"errors"
	"fmt"
	"time"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/worker"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

const (
	// prefetchDur is the amount of time to throttle prefetch packages
	// requests between updates.
	prefetchDur = 3 * time.Second

	// workerUrl is the URL to the GopherJS compiled JS file to run
	// that will compile Go code into JS on demand.
	workerUrl = `compile.js`
)

// Compiler is a wrapper for a webworker that is launched when the compiler
// is created. The webworker will perform compiles asynchronously.
// The code for the compiler webworker is found in playground/internal/cmd/compile.
//
// This interface allow the compiler to be mocked during tests where running
// a webworker is not ideal or possible.
type Compiler interface {
	// GetVersion sets function to call when the version has been received
	// from the webworker. If the version has already been gotten, the callback
	// will be called right away.
	GetVersion(callback func(string))

	// SetVerbose sets if the compiler webworker should output
	// status logs or not. This is useful when debugging.
	SetVerbose(verbose bool)

	// SetOutput redirects random problems in the compiler from being
	// sent to the console and instead outputs them to the output box.
	// These errors are typically from the compiler itself having problems,
	// and not errors the compiler found in the code being sent to it, which
	// will be returned as part of the "then" passed in when starting a compile.
	SetOutput(out common.Output)

	// SetCode updates the source code that the runner is working on.
	//
	// The given Go code is the set of entry-point virtual-files to use keyed
	// with the name of the file, e.g. `main.go`.
	// The value is the source code that corresponds to that file name.
	// All this code is expected to be part of the main package.
	// We currently don't allow auxiliary code for other packages.
	//
	// When the code is set, any packages that this code depends on will
	// start preloading to reduce the time that compile takes.
	// This will not check if the code has actually changed, it will assume
	// that the code has been changed if this method is being called.
	SetCode(goCode map[string]string)

	// Compile asynchronously compiles the currently set Go code.
	// When done the given callback is invoked with the resulting
	// JavaScript code or an error if the compilation failed.
	//
	// If a previous compile is running, the other compile must finish
	// prior to another one being started. If a compile is running
	// this will return false to indicate the newest request was ignored.
	// Otherwise, this will return true indicating a compile has started.
	Compile(then func(string, error)) bool
}

type compilerImp struct {
	out              common.Output
	curCode          map[string]string
	prefetchThrottle *throttle
	worker           *worker.Worker
	compileThen      func(string, error)

	verbose     bool
	version     string
	verCallback func(string)
}

func NewCompiler() Compiler {
	c := &compilerImp{
		curCode: map[string]string{},
		worker:  worker.NewForUrl(workerUrl),
	}
	c.prefetchThrottle = newThrottle(prefetchDur, c.requestPreload)
	c.worker.SetResponseHandler(`version`, c.onVersionResponse)
	c.worker.SetResponseHandler(`compiled`, c.onCompileFinished)
	c.worker.SetResponseHandler(`error`, c.onErrorResponse)
	c.worker.SendMessage(`requestVersion`, ``)
	return c
}

func (c *compilerImp) GetVersion(callback func(string)) {
	if len(c.version) > 0 {
		callback(c.version)
		return
	}
	c.verCallback = callback
}

func (c *compilerImp) SetVerbose(verbose bool) {
	if c.verbose != verbose {
		c.verbose = verbose
		c.worker.SendMessage(`verbose`, verbose)
	}
}

func (c *compilerImp) SetOutput(out common.Output) {
	c.out = out
}

func (c *compilerImp) SetCode(goCode map[string]string) {
	c.curCode = goCode
	c.prefetchThrottle.Trigger()
}

func (c *compilerImp) requestPreload() {
	c.worker.SendMessage(`preload`, c.curCode)
}

func (c *compilerImp) isAwaitingCompile() bool {
	return c.compileThen != nil
}

func (c *compilerImp) Compile(then func(string, error)) bool {
	if c.isAwaitingCompile() {
		return false
	}

	c.compileThen = then
	c.prefetchThrottle.Suspend()
	c.worker.SendMessage(`compile`, c.curCode)
	return true
}

func (c *compilerImp) onVersionResponse(content *js.Object) {
	c.version = content.String()
	if len(c.version) <= 0 {
		panic(`empty version information was returned from compile webworker`)
	}
	if c.verCallback != nil {
		callback := c.verCallback
		c.verCallback = nil
		callback(c.version)
	}
}

func (c *compilerImp) onCompileFinished(content *js.Object) {
	if !c.isAwaitingCompile() {
		panic(`unexpected compile finished response without a "then" method`)
	}

	var err error
	var jsCode string
	errObj := content.Get(`error`)
	if errObj != js.Undefined {
		err = errors.New(errObj.String())
	}

	if err == nil {
		jsCode = content.Get(`result`).String()
		if len(jsCode) <= 0 {
			err = errors.New(`compiler returned an empty result`)
		}
	}

	then := c.compileThen
	c.compileThen = nil
	then(jsCode, err)
	c.prefetchThrottle.Resume()
}

func (c *compilerImp) onErrorResponse(content *js.Object) {
	err := fmt.Errorf(`error in compiler webworker: %s`, content.String())
	if c.out != nil {
		c.out.AddError(err)
		return
	}
	js.Global.Get(`console`).Call(`error`, err.Error())
}
