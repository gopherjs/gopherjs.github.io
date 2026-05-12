package snippets

import (
	"fmt"
	"hash/crc32"
	"strings"
	"sync"

	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"
)

const snippetStoreHost = `https://snippets.gopherjs.org`

// SnippetStore represents a code snippet store for persisting and retrieving
// customer defined code snippets.
//
// This interfaces allows the network access to be replaced
// with a mock implementation for testing.
type SnippetStore interface {
	// LocalOnly indicates the store instance only stores snippets locally.
	// This is for testing and protyping purposes only. It will use local
	// storage to store snippets instead of the remote snippet store.
	// Use this when on a fork to prevent CORS issues.
	LocalOnly() bool

	// SetLocalOnly will change if the snippet store is local or not.
	SetLocalOnly(localOnly bool)

	// Read fetches the code snippet with the given hash (including the `#/`)
	// from the snippet store.
	// If the has is `#` without the `/`, the remainder is checked to see
	// if it matches any pre-defined snippets, i.e. `#Hello`.
	// If the hash is empty or invalid, it returns the default code.
	//
	// This will not block but the then method will be called after
	// the network request has completed.
	Read(hash string, then func(string, error))

	// Write sends the given code snippet to the snippet store and returns
	// the snippet hash (including the `#/`) on success.
	//
	// This will not block but the then method will be called after
	// the network request has completed.
	Write(code string, then func(string, error))
}

// storeImp provides access to a remote snippet store.
type storeImp struct {
	localOnly bool
	lock      *sync.Mutex
	cache     map[string]string
}

// NewStore creates a new Store instance.
// This store will be initially set to read and write snippets
// to the remote snippet store.
func NewStore() SnippetStore {
	return &storeImp{
		localOnly: false,
		lock:      &sync.Mutex{},
		cache:     map[string]string{},
	}
}

func (s *storeImp) LocalOnly() bool { return s.localOnly }

func (s *storeImp) SetLocalOnly(localOnly bool) { s.localOnly = localOnly }

func (s *storeImp) Read(hash string, then func(string, error)) {
	go func() { then(s.syncRead(hash)) }()
}

func (s *storeImp) Write(code string, then func(string, error)) {
	go func() { then(s.syncWrite(code)) }()
}

// syncRead reads the stored code for the given hash.
// This method blocks until the read is complete which may involve a network request.
func (s *storeImp) syncRead(hash string) (string, error) {
	if hash == `` || hash == `#` || hash == `#/` {
		return DefaultCode, nil
	}

	if code, found := s.readCache(hash); found {
		return code, nil
	}

	if strings.HasPrefix(hash, `#/`) {
		if s.localOnly {
			return DefaultCode, fmt.Errorf(`local only mode can not fetch hash: %q`, hash)
		}

		code, err := getCodeFromStorage(hash[2:])
		if err == nil {
			s.writeCache(hash, code)
		}
		return code, err
	}

	if strings.HasPrefix(hash, `#`) {
		if predef, ok := predefined[hash[1:]]; ok {
			return predef, nil
		}
	}

	return DefaultCode, fmt.Errorf(`unexpected hash: %q`, hash)
}

// syncWrite writes the given code to storage and returns the hash used to retrieve it.
// This method blocks until the write is complete which may involve a network request.
func (s *storeImp) syncWrite(code string) (string, error) {
	if url, found := s.alreadyCached(code); found {
		return url, nil
	}

	// Check if the code to write matches one of the predefined snippets.
	if name, found := getSnippetName(code); found {
		return `#` + name, nil
	}

	if s.localOnly {
		// If in local-only mode, generate a hash instead of posting to the
		// remote store. The code will be stored in the cache so that it can
		// be retrieved later.
		url, err := generateLocalURL(code)
		if err == nil {
			s.writeCache(url, code)
		}
		return url, err
	}

	url, err := postCodeToStorage(code)
	if err == nil {
		s.writeCache(url, code)
	}
	return url, err
}

func (s *storeImp) readCache(url string) (string, bool) {
	s.lock.Lock()
	defer s.lock.Unlock()
	code, found := s.cache[url]
	return code, found
}

func (s *storeImp) writeCache(url, code string) {
	s.lock.Lock()
	defer s.lock.Unlock()
	s.cache[url] = code
}

func (s *storeImp) alreadyCached(code string) (string, bool) {
	s.lock.Lock()
	defer s.lock.Unlock()
	for url, cachedCode := range s.cache {
		if code == cachedCode {
			return url, true
		}
	}
	return ``, false
}

func generateLocalURL(code string) (string, error) {
	hash := crc32.NewIEEE()
	if _, err := hash.Write([]byte(code)); err != nil {
		return ``, err
	}
	return fmt.Sprintf(`#/local-%08X`, hash.Sum32()), nil
}

func getCodeFromStorage(id string) (string, error) {
	req := xhr.NewRequest(`GET`, snippetStoreHost+`/p/`+id)
	req.ResponseType = xhr.ArrayBuffer

	err := req.Send(nil)
	if err != nil || req.Status != 200 {
		status := ``
		if req.Status != 0 {
			status = fmt.Sprintf(`[%d] `, req.Status)
		}
		return DefaultCode, fmt.Errorf(`failed to load shared code %q: %s%w`, id, status, err)
	}

	data := js.Global.Get(`Uint8Array`).New(req.Response).Interface().([]byte)
	return string(data), nil
}

func postCodeToStorage(code string) (string, error) {
	req := xhr.NewRequest(`POST`, snippetStoreHost+`/share`)
	req.ResponseType = xhr.ArrayBuffer

	err := req.Send([]byte(code)) // Send as binary.
	if err != nil || req.Status != 200 {
		status := ``
		if req.Status != 0 {
			status = fmt.Sprintf(`[%d] `, req.Status)
		}
		return ``, fmt.Errorf(`failed to share code: %s%w`, status, err)
	}

	id := js.Global.Get(`Uint8Array`).New(req.Response).Interface().([]byte)
	return `#/` + string(id), nil
}
