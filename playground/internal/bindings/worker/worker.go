package worker

import "github.com/gopherjs/gopherjs/js"

type ResponseHandler func(content *js.Object)

// Worker is a wrapper around a webworker.
//
// This is run from the page to manage a webworker being run
// in the background.
type Worker struct {
	resHandlers map[string]ResponseHandler
	workObj     *js.Object
	objUrl      *js.Object
}

func newWorker(url any) *Worker {
	workObj := js.Global.Get(`Worker`).New(url)
	w := &Worker{
		resHandlers: map[string]ResponseHandler{},
		workObj:     workObj,
	}
	workObj.Set("onmessage", js.MakeFunc(func(this *js.Object, args []*js.Object) any {
		w.onMessage(args[0])
		return nil
	}))
	workObj.Set("onerror", js.MakeFunc(func(this *js.Object, args []*js.Object) any {
		w.onError(args[0])
		return nil
	}))
	return w
}

// NewForUrl creates a new webworker for the given url.
func NewForUrl(url string) *Worker {
	return newWorker(url)
}

// NewForCode creates a new webworker that runs the given JS code.
//
// WARNING: This is not safe to do normally since it is an injection sink.
// Here it is fine because we're running on a secure host, gopherjs.github.io.
// Just promise not to do this in any other location without first understanding
// the security concerns.
func NewForCode(jsCode string) *Worker {
	blob := js.Global.Get(`Blob`).New(
		[]any{jsCode},
		map[string]any{`type`: `application/javascript`},
	)
	objUrl := js.Global.Get(`URL`).Call(`createObjectURL`, blob)

	w := newWorker(objUrl)
	w.objUrl = objUrl
	return w
}

// Terminate will immediately kill the webwoker.
func (w *Worker) Terminate() {
	if w.workObj != nil {
		w.workObj.Call(`terminate`)
		w.workObj = nil
	}
	if w.objUrl != nil {
		js.Global.Get(`URL`).Call(`revokeObjectURL`, w.objUrl)
		w.objUrl = nil
	}
}

func (w *Worker) SendMessage(msgType string, content any) bool {
	if w.workObj == nil {
		return false
	}
	msg := js.Global.Get("Object").New()
	msg.Set("type", msgType)
	msg.Set("content", content)
	w.workObj.Call("postMessage", msg)
	return true
}

func (w *Worker) SetResponseHandler(msgType string, handler ResponseHandler) {
	w.resHandlers[msgType] = handler
}

func (w *Worker) onResp(msgType string, content *js.Object) {
	if handler := w.resHandlers[msgType]; handler != nil {
		handler(content)
		return
	}
	println(`unhandled message type: {type:`, msgType, `content:`, content, `}`)
}

func (w *Worker) onMessage(m *js.Object) {
	data := m.Get(`data`)
	w.onResp(data.Get(`type`).String(), data.Get(`content`))
}

func (w *Worker) onError(e *js.Object) {
	w.onResp(`error`, e.Get("message"))
}
