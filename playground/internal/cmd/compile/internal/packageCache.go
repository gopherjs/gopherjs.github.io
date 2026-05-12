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

// Load will get the sources for the given import path.
//
// This will block until the sources are available.
// If the sources are cached, then this will be fast,
// otherwise it will await a network request before returning.
func (pc *packageCache) Load(importPath string) (*sources.Sources, loadResult, error) {
	load := pc.getLoadStratagy(importPath)

	srcs := &sources.Sources{}
	result, err := load(srcs)
	return srcs, result, err
}

// loadStrategy is the stratagy for performing the load based
// on the current state of any other load of the same package.
//
// If this returns loadFailed, the error will be non-nil.
// and if the error is non-nil, the loadResult will be loadFailed.
type loadStrategy func(srcs *sources.Sources) (loadResult, error)

// getLoadStratagy returns the stratagy to complete loading the package.
// When the returned stratagy is run, it may either return the cached
// package immediately, wait for an in-progress load to complete,
// or perform the load itself.
//
// getLoadStratagy will not block, but the returned function may block.
func (pc *packageCache) getLoadStratagy(importPath string) loadStrategy {
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

// alreadyLoaded returns a load stratagy that returns the cached sources.
// The given cached sources must be the sources that are already loaded in the cache.
func (pc *packageCache) alreadyLoaded(cached *sources.Sources) loadStrategy {
	return func(srcs *sources.Sources) (loadResult, error) {
		*srcs = *cached // Shallow copy the cached sources.
		return loadCached, nil
	}
}

// alreadyInprogress returns a load stratagy that waits for an in-progress load to complete.
// The given channel will be waited on until it is closed, indicating the load is complete
// and the sources should now be in the cache.
func (pc *packageCache) alreadyInprogress(importPath string, ch chan struct{}) loadStrategy {
	return func(srcs *sources.Sources) (loadResult, error) {
		<-ch // Wait for the in-progress load to complete.

		pc.lock.Lock()
		defer pc.lock.Unlock()

		if cached, found := pc.cached[importPath]; found {
			*srcs = *cached // Shallow copy the cached sources.
			return loadCached, nil
		}

		// The following may occur if the loading package failed for some reason
		// and so the package was not added to the cache by the time the channel was closed.
		return loadFailed, fmt.Errorf(`failed awaiting load of package %q`, importPath)
	}
}

// startLoading returns a load stratagy that performs the package load via a network request.
// This occurs when the package is not cached and not currently in progress.
// The given channel will be closed when the load is complete to indicate to any
// other processed waiting on the load that it is done.
func (pc *packageCache) startLoading(importPath string, ch chan struct{}) loadStrategy {
	return func(srcs *sources.Sources) (loadResult, error) {
		fetched, err := pc.fetcher.FetchPackage(importPath)
		if err != nil {
			delete(pc.inprogress, importPath)
			close(ch)
			return loadFailed, err
		}

		pc.lock.Lock()
		defer pc.lock.Unlock()

		pc.cached[importPath] = fetched
		*srcs = *fetched // Shallow copy the fetched sources into passed in sources.
		delete(pc.inprogress, importPath)
		close(ch)
		return loadFetched, nil
	}
}
