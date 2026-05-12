package workers

import (
	"fmt"
	"strings"

	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/bindings/worker"
	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

// Runner is a wrapper around a webworker launcher that launches
// javascript code in an isolated webworker so that it can run
// asynchronously and cancelled at any time.
//
// This interface allow the runner to be mocked during tests where running
// a webworker is not ideal or possible.
type Runner interface {
	// SetOutput sets where the running code will output to.
	// This may be called while code is running.
	SetOutput(out common.Output)

	// Run executes the given JavaScript code.
	//
	// If some code is already being run, this will stop it from running
	// prior to starting some other code running.
	Run(jsCode string)

	// Stop will cancel a previous run, if anything is running, otherwise
	// it will have no effect.
	Stop()
}

type runnerImp struct {
	out    common.Output
	worker *worker.Worker
}

func NewRunner() Runner {
	return &runnerImp{}
}

func (r *runnerImp) SetOutput(out common.Output) {
	r.out = out
}

func (r *runnerImp) Run(jsCode string) {
	r.Stop()
	workerJS := wrapJsCodeForWebWorker(jsCode)
	r.worker = worker.NewForCode(workerJS)
	r.worker.SetResponseHandler(`out`, r.onRunnerOut)
	r.worker.SetResponseHandler(`err`, r.onRunnerErr)
	r.worker.SetResponseHandler(`panic`, r.onRunnerPanic)
}

func (r *runnerImp) Stop() {
	if r.worker != nil {
		r.worker.Terminate()
		r.worker = nil
	}
}

func (r *runnerImp) onRunnerOut(content *js.Object) {
	if r.out != nil {
		r.out.AppendOut(content.String())
	} else {
		println(`unhandled runner output:`, content)
	}
}

func (r *runnerImp) onRunnerErr(content *js.Object) {
	if r.out != nil {
		r.out.AppendErr(content.String())
	} else {
		println(`unhandled runner error:`, content)
	}
}

func (r *runnerImp) onRunnerPanic(content *js.Object) {
	if r.out != nil {
		r.out.AddError(fmt.Errorf(`%v`, content.String()))
	} else {
		println(`unhandled runner output:`, content)
	}
	r.Stop()
}

// wrapJsCodeForWebWorker takes the typical output from GopherJS and wraps
// more JS around it so that the code can run as a webworker. Mainly
// this will add a shim to communicate output and errors back to the main thread.
func wrapJsCodeForWebWorker(jsCode string) string {
	wrap := &strings.Builder{}
	wrap.WriteString("var $global = self;\n")
	wrap.WriteString("self.gopherjsWriteSyncHook = function(fd, text) {\n")
	wrap.WriteString("  postMessage({type: fd == 1 ? 'out' : 'err', content: text});\n")
	wrap.WriteString("};\n")
	wrap.WriteString("self.gopherjsPanicHandler = function(msg) {\n")
	wrap.WriteString("  postMessage({type: 'panic', content: msg});\n")
	wrap.WriteString("};\n")
	wrap.WriteString("self.$checkForDeadlock = true;\n")
	wrap.WriteString("try {\n")
	wrap.WriteString(jsCode)
	wrap.WriteString("\n} catch (err) {\n")
	wrap.WriteString("\tself.gopherjsPanicHandler(err.message);\n")
	wrap.WriteString("}\n")
	return wrap.String()
}
