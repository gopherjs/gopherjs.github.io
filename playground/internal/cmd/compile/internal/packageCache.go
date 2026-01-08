package internal

import (
	"fmt"
	"sync"

	"github.com/gopherjs/gopherjs/compiler/sources"
)

type loadResult string

const (
	loadCached  loadResult = "cached"
	loadFetched loadResult = "fetched"
	loadFailed  loadResult = "failed"
)

type packageCache struct {
	fetcher    Fetcher
	cached     map[string]*sources.Sources
	inprogress map[string]chan struct{}
	lock       sync.Mutex
}

func newPackageCache(fetcher Fetcher) *packageCache {
	return &packageCache{
		fetcher:    fetcher,
		cached:     make(map[string]*sources.Sources),
		inprogress: make(map[string]chan struct{}),
	}
}

func (pc *packageCache) Load(importPath string) (*sources.Sources, loadResult, error) {
	srcs := &sources.Sources{}
	result, err := pc.syncLoad(importPath)(srcs)
	return srcs, result, err
}

type syncLoadFunc func(srcs *sources.Sources) (loadResult, error)

// syncLoad returns a function to complete loading the package.
//
// The returned function may either return the cached package immediately,
// wait for an in-progress load to complete, or perform the load itself.
// syncLoad will not block, but the returned function may block.
//
// If the returned function is run and returns loadFailed, the error will be non-nil
// and if the error is non-nil, the loadResult will be loadFailed.
func (pc *packageCache) syncLoad(importPath string) syncLoadFunc {
	pc.lock.Lock()
	defer pc.lock.Unlock()

	if cached, found := pc.cached[importPath]; found {
		return pc.alreadyLoaded(cached)
	}

	// Load is already in progress, wait for it to complete.
	if ch, loading := pc.inprogress[importPath]; loading {
		return pc.alreadyInprogress(importPath, ch)
	}

	// Load is not in progress, start it now.
	ch := make(chan struct{})
	pc.inprogress[importPath] = ch
	return pc.startLoading(importPath, ch)
}

// alreadyLoaded returns a syncLoadFunc that returns the cached sources.
// The given cached sources must be the sources that are already loaded in the cache.
func (pc *packageCache) alreadyLoaded(cached *sources.Sources) syncLoadFunc {
	return func(srcs *sources.Sources) (loadResult, error) {
		*srcs = *cached // Shallow copy the cached sources.
		return loadCached, nil
	}
}

// alreadyInprogress returns a syncLoadFunc that waits for an in-progress load to complete.
// The given channel will be waited on until it is closed, indicating the load is complete
// and the sources should now be in the cache.
func (pc *packageCache) alreadyInprogress(importPath string, ch chan struct{}) syncLoadFunc {
	return func(srcs *sources.Sources) (loadResult, error) {
		<-ch // Wait for the in-progress load to complete.

		pc.lock.Lock()
		defer pc.lock.Unlock()

		if cached, found := pc.cached[importPath]; found {
			*srcs = *cached // Shallow copy the cached sources.
			return loadCached, nil
		}
		return loadFailed, fmt.Errorf(`failed to find package %q in cache after waiting load`, importPath)
	}
}

// startLoading returns a syncLoadFunc that performs the package load.
// The given channel will be closed when the load is complete to indicate to any
// other processed waiting on the load that it is done.
func (pc *packageCache) startLoading(importPath string, ch chan struct{}) syncLoadFunc {
	return func(srcs *sources.Sources) (loadResult, error) {
		fetched, err := pc.fetcher.FetchPackage(importPath)
		if err != nil {
			return loadFailed, err
		}

		pc.lock.Lock()
		defer pc.lock.Unlock()

		pc.cached[importPath] = fetched
		*srcs = *fetched // Shallow copy the fetched sources.
		delete(pc.inprogress, importPath)
		close(ch)
		return loadFetched, nil
	}
}
