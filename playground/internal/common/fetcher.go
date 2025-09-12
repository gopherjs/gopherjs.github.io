package common

import "github.com/gopherjs/gopherjs/compiler/sources"

// Fetcher represents a package fetcher for retrieving prepackaged packages.
//
// This interface allows the network access to be replaced
// with a mock implementation for testing.
type Fetcher interface {

	// FetchPackage fetches the package from the website's package folder.
	//
	// The importPath is the path to the package, e.g. "fmt" or "crypto/md5".
	// This will block while waiting for the network request to complete.
	//
	// The prepaackaged packages only contain Standard Library packages
	// that were prepaired with the `precompile` command.
	FetchPackage(importPath string) (*sources.Sources, error)
}
