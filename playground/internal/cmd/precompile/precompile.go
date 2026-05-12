// Program precompile updates prepackaged standard library packages for the
// playground.
//
// This script performs the following sequence of steps:
//
//   - Enumerate all standard packages that should be available in the playground.
//   - Parses and augments them, including transitive dependencies.
//   - Delete all old prepackaged packages.
//   - Write all new prepackaged packages in their place.
//
// This will use the same GopherJS version as specified in the playground gm.mod
// to ensure consistency. The script uses GopherJS compiler API directly, so
// it doesn't require the GopherJS tool to be installed.
package main

import (
	"compress/gzip"
	"encoding/gob"
	"flag"
	"fmt"
	gobuild "go/build"
	"os"
	"path/filepath"
	"strings"

	"github.com/gopherjs/gopherjs/build"
	"github.com/gopherjs/gopherjs/compiler/sources"
	log "github.com/sirupsen/logrus"
)

const (
	pkgPath = `pkg/`
	pkgExt  = `.zip`

	jsPkgPath         = `github.com/gopherjs/gopherjs/js`
	nosyncPkgPath     = `github.com/gopherjs/gopherjs/nosync`
	playgroundPkgPath = `github.com/gopherjs/gopherjs.github.io/playground`
)

type logLevelFlag struct{ log.Level }

func (l *logLevelFlag) Set(raw string) error { return l.UnmarshalText([]byte(raw)) }

var logLevel logLevelFlag = logLevelFlag{Level: log.ErrorLevel}

func init() {
	flag.Var(&logLevel, "log_level", "Default logging level.")
}

func run() error {
	s, err := build.NewSession(&build.Options{
		Verbose: true,
		Minify:  true,
		NoCache: true,
	})
	if err != nil {
		return fmt.Errorf("failed to create a build session: %w", err)
	}

	packages, err := s.XContext().Match([]string{"std"})
	if err != nil {
		return fmt.Errorf("failed to enumerate standard library packages")
	}
	packages = importable(packages)
	packages = append(packages, jsPkgPath, nosyncPkgPath)

	for _, path := range packages {
		pkg, err := s.XContext().Import(path, ``, 0)
		if err != nil {
			return fmt.Errorf("failed to get build package for %s: %w", path, err)
		}

		if _, err = s.LoadPackages(pkg); err != nil {
			return fmt.Errorf("failed to prepackaged package %q: %w", pkg, err)
		}
	}

	target, err := targetDir(s)
	if err != nil {
		return fmt.Errorf("failed to determine target directory: %w", err)
	}
	if err := os.RemoveAll(target); err != nil {
		return fmt.Errorf("failed to clean out old packages: %w", err)
	}

	for _, srcs := range s.GetSortedSources() {
		if err := writePackage(target, srcs); err != nil {
			return fmt.Errorf("failed to write package %q: %w", srcs.ImportPath, err)
		}
	}

	return nil
}

func writePackage(target string, srcs *sources.Sources) (err error) {
	path := filepath.Join(target, filepath.FromSlash(srcs.ImportPath)+pkgExt)
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return fmt.Errorf("failed to create precompiled package directory %q: %w", filepath.Dir(path), err)
	}

	f, err := os.Create(path)
	if err != nil {
		return fmt.Errorf("failed to create precompiled archive %q: %w", path, err)
	}
	defer func() {
		if closeErr := f.Close(); err == nil {
			err = closeErr
		}
	}()

	zw := gzip.NewWriter(f)
	defer func() {
		// This close flushes the gzip but does not close the file.
		if closeErr := zw.Close(); err == nil {
			err = closeErr
		}
	}()

	return srcs.Write(gob.NewEncoder(zw).Encode)
}

// targetDir returns path to the directory where precompiled packages must be
// stored.
func targetDir(s *build.Session) (string, error) {
	pkg, err := s.XContext().Import(playgroundPkgPath, "", gobuild.FindOnly)
	if err != nil {
		return "", fmt.Errorf("failed to find playground package directory: %w", err)
	}
	target := filepath.Join(pkg.Dir, pkgPath)
	if _, err := os.Stat(target); os.IsNotExist(err) {
		return "", fmt.Errorf("target directory %q not found", target)
	}
	return target, nil
}

// importable excludes packages that are incompatible with GopherJS or can't be
// directly imported by the user code. The remaining packages will be used as a
// starting points for precompilation.
func importable(all []string) []string {
	result := []string{}
	for _, pkg := range all {
		switch {
		case strings.HasPrefix(pkg, "vendor/"),
			strings.Contains(pkg, "internal"),
			strings.Contains(pkg, "pprof"),
			strings.Contains(pkg, "plugin"):
			continue
		default:
			result = append(result, pkg)
		}
	}
	return result
}

func main() {
	flag.Parse()
	log.SetLevel(logLevel.Level)
	if err := run(); err != nil {
		log.Fatalf("Precompilation failed: %v", err)
	}
}
