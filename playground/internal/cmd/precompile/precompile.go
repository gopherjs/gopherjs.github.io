// Program precompile updates pre-built standard library packages for the
// playground.
//
// This script performs the following sequence of steps:
//
//  - Enumerate all standard packages that should be available in the playground.
//  - Precompile them, including transitive dependencies.
//  - Delete all old precompiled archive.
//  - Write all new precompiled archive in their place.
//
// This will use the same GopherJS version as specified in the playground gm.mod
// to ensure consistency. The script uses GopherJS compiler API directly, so
// it doesn't require the GopherJS tool to be installed.
package main

import (
	"flag"
	"fmt"
	gobuild "go/build"
	"os"
	"path/filepath"
	"strings"

	"github.com/gopherjs/gopherjs/build"
	"github.com/gopherjs/gopherjs/compiler"
	log "github.com/sirupsen/logrus"
)

type logLevelFlag struct{ log.Level }

func (l *logLevelFlag) Set(raw string) error { return l.UnmarshalText([]byte(raw)) }

var (
	logLevel logLevelFlag = logLevelFlag{Level: log.ErrorLevel}
)

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
	packages = append(packages, "github.com/gopherjs/gopherjs/js", "github.com/gopherjs/gopherjs/nosync")

	for _, pkg := range packages {
		_, err := s.BuildImportPath(pkg)
		if err != nil {
			return fmt.Errorf("failed to precompile package %q: %w", pkg, err)
		}
	}

	target, err := targetDir(s)
	if err := os.RemoveAll(target); err != nil {
		return fmt.Errorf("failed to clean out old precompiled archives: %w", err)
	}

	for _, archive := range s.UpToDateArchives {
		if err := writeArchive(target, archive); err != nil {
			return fmt.Errorf("failed to write package %q archive: %w", archive.ImportPath, err)
		}
	}

	return nil
}

func writeArchive(target string, archive *compiler.Archive) error {
	path := filepath.Join(target, filepath.FromSlash(archive.ImportPath)+".a.js")
	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return fmt.Errorf("failed to create precompiled package directory %q: %w", filepath.Dir(path), err)
	}
	f, err := os.Create(path)
	if err != nil {
		return fmt.Errorf("failed to create precompiled archive %q: %w", path, err)
	}
	defer f.Close()

	return compiler.WriteArchive(archive, f)
}

// targetDir returns path to the directory where precompiled packages must be
// stored.
func targetDir(s *build.Session) (string, error) {
	pkg, err := s.XContext().Import("github.com/gopherjs/gopherjs.github.io/playground", "", gobuild.FindOnly)
	if err != nil {
		return "", fmt.Errorf("failed to find playground package directory: %w", err)
	}
	target := filepath.Join(pkg.Dir, "pkg")
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
