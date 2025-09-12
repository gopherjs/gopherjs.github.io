package snippets

import (
	"fmt"
	"strings"

	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

const snippetStoreHost = `https://snippets.gopherjs.org`

// storeImp provides access to a remote snippet store.
type storeImp struct{}

// NewStore creates a new Store instance.
func NewStore() common.SnippetStore {
	return storeImp{}
}

func (s storeImp) Read(hash string) (string, error) {
	if strings.HasPrefix(hash, `#/`) {
		return s.fetchStoredCode(hash[2:])
	}

	if strings.HasPrefix(hash, `#`) {
		if predef, ok := predefined[hash[1:]]; ok {
			return predef, nil
		}
	}

	return DefaultCode, nil
}

func (s storeImp) fetchStoredCode(id string) (string, error) {
	req := xhr.NewRequest(`GET`, snippetStoreHost+`/p/`+id)
	req.ResponseType = xhr.ArrayBuffer

	err := req.Send(nil)
	if err != nil || req.Status != 200 {
		return DefaultCode, fmt.Errorf(`failed to load snippet %q: [%d]%w`, id, req.Status, err)
	}

	data := js.Global.Get(`Uint8Array`).New(req.Response).Interface().([]byte)
	return string(data), nil
}

func (s storeImp) Write(code string) (string, error) {
	req := xhr.NewRequest(`POST`, snippetStoreHost+`/share`)
	req.ResponseType = xhr.ArrayBuffer

	err := req.Send([]byte(code)) // Send as binary.
	if err != nil || req.Status != 200 {
		return ``, fmt.Errorf(`failed to share snippet: [%d]%w`, req.Status, err)
	}

	id := js.Global.Get(`Uint8Array`).New(req.Response).Interface().([]byte)
	return `#/` + string(id), nil
}
