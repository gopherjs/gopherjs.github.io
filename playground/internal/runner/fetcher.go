package runner

import (
	"bytes"
	"compress/gzip"
	"encoding/gob"
	"fmt"

	"github.com/gopherjs/gopherjs/compiler/sources"
	"github.com/gopherjs/gopherjs/js"
	"honnef.co/go/js/xhr"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

type fetcher struct{}

func NewFetcher() common.Fetcher {
	return &fetcher{}
}

func (f *fetcher) FetchPackage(importPath string) (srcs *sources.Sources, err error) {
	data, err := f.fetchFile(importPath)
	if err != nil {
		return nil, err
	}

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

func (f *fetcher) fetchFile(importPath string) ([]byte, error) {
	const (
		pkgBaseURL = `pkg/`
		pkgExt     = `.a.js`
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
