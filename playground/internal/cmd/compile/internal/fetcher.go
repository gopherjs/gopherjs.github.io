package internal

import (
	"bytes"
	"compress/gzip"
	"encoding/gob"
	"fmt"

	"github.com/gopherjs/gopherjs/compiler/sources"
	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"
)

// Fetcher represents a package fetcher for retrieving prepackaged packages.
//
// This interface allows the network access to be replaced
// with a mock implementation for testing.
type Fetcher interface {
	// SetVerbose enables or disables verbose output.
	SetVerbose(verbose bool)

	// FetchPackage fetches the package from the website's package folder.
	//
	// The importPath is the path to the package, e.g. "fmt" or "crypto/md5".
	// This will block while waiting for the network request to complete.
	//
	// The prepaackaged packages only contain Standard Library packages
	// that were prepaired with the `precompile` command.
	FetchPackage(importPath string) (*sources.Sources, error)
}

type fetcher struct {
	verbose bool
}

func NewFetcher() Fetcher {
	return &fetcher{}
}

func (f *fetcher) SetVerbose(verbose bool) {
	f.verbose = verbose
}

func (f *fetcher) FetchPackage(importPath string) (*sources.Sources, error) {
	if f.verbose {
		println("Fetching package:", importPath)
	}

	data, err := f.fetchFile(importPath)
	if err != nil {
		return nil, err
	}

	srcs, err := f.readPackage(importPath, data)
	if err != nil {
		return nil, err
	}

	if f.verbose {
		println("Package ready:   ", importPath)
	}
	return srcs, nil
}

func (f *fetcher) fetchFile(importPath string) ([]byte, error) {
	const (
		pkgBaseURL = `pkg/`
		pkgExt     = `.zip`
	)

	req := xhr.NewRequest(`GET`, pkgBaseURL+importPath+pkgExt)
	req.ResponseType = xhr.ArrayBuffer

	err := req.Send(nil)
	if err != nil || req.Status != 200 {
		return nil, fmt.Errorf(`failed to fetch prepackaged package for %q: [%d]%w`, importPath, req.Status, err)
	}

	data := js.Global.Get(`Uint8Array`).New(req.Response).Interface().([]byte)
	return data, nil
}

func (f *fetcher) readPackage(importPath string, data []byte) (srcs *sources.Sources, err error) {
	zr, err := gzip.NewReader(bytes.NewReader(data))
	if err != nil {
		return nil, fmt.Errorf(`failed to create gzip reader for package %q: %v`, importPath, err)
	}
	defer func() {
		if closeErr := zr.Close(); err == nil && closeErr != nil {
			err = fmt.Errorf(`failed to close gzip reader for package %q: %w`, importPath, closeErr)
		}
	}()

	srcs = &sources.Sources{}
	if err := srcs.Read(gob.NewDecoder(zr).Decode); err != nil {
		return nil, fmt.Errorf(`failed to decode package %q: %v`, importPath, err)
	}

	return srcs, nil
}
