package runner

import (
	"sync"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
	"github.com/gopherjs/gopherjs/compiler/sources"
)

type loadResult string

const (
	loadCached  loadResult = "cached"
	loadFetched loadResult = "fetched"
	loadFailed  loadResult = "failed"
)

type packageCache struct {
	output     common.Output
	fetcher    common.Fetcher
	cached     map[string]*sources.Sources
	inprogress map[string]chan struct{}
	lock       sync.Mutex
}

func newPackageCache(output common.Output, fetcher common.Fetcher) *packageCache {
	return &packageCache{
		output:     output,
		fetcher:    fetcher,
		cached:     make(map[string]*sources.Sources),
		inprogress: make(map[string]chan struct{}),
	}
}

func (pc *packageCache) Load(importPath string) (*sources.Sources, loadResult) {
	srcs := &sources.Sources{}
	result := pc.syncLoad(importPath)(srcs)
	return srcs, result
}

// syncLoad returns a function to complete loading the package.
//
// The returned function may either return the cached package immediately,
// wait for an in-progress load to complete, or perform the load itself.
// syncLoad will not block, but the returned function may block.
func (pc *packageCache) syncLoad(importPath string) func(srcs *sources.Sources) loadResult {
	pc.lock.Lock()
	defer pc.lock.Unlock()

	if cached, found := pc.cached[importPath]; found {
		return func(srcs *sources.Sources) loadResult {
			*srcs = *cached // Copy the cached sources.
			return loadCached
		}
	}

	// Load is already in progress, wait for it to complete.
	if ch, loading := pc.inprogress[importPath]; loading {
		return func(srcs *sources.Sources) loadResult {
			<-ch // Wait for the in-progress load to complete.

			pc.lock.Lock()
			defer pc.lock.Unlock()

			if cached, found := pc.cached[importPath]; found {
				*srcs = *cached // Copy the cached sources.
				return loadCached
			}
			return loadFailed
		}
	}

	// Load is not in progress, start it now.
	ch := make(chan struct{})
	pc.inprogress[importPath] = ch
	return func(srcs *sources.Sources) loadResult {
		fetched, err := pc.fetcher.FetchPackage(importPath)
		if err != nil {
			pc.output.AddError(err)
			return loadFailed
		}

		pc.lock.Lock()
		defer pc.lock.Unlock()

		pc.cached[importPath] = fetched
		*srcs = *fetched // Copy the fetched sources.
		delete(pc.inprogress, importPath)
		close(ch)
		return loadFetched
	}
}
