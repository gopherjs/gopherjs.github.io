package internal

import (
	"bytes"
	"fmt"
	"go/parser"
	"go/token"
	"go/types"
	"runtime"
	"sort"
	_ "unsafe"

	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/compiler/sources"
)

// Compiler is the interface describing the functions to compile Go code
// via GopherJS in the playground.
type Compiler interface {
	// Gets the current version number of this compiler.
	Version() string

	// SetVerbose enables or disables verbose output.
	SetVerbose(verbose bool)

	// Preload asynchronously starts loading standard library packages needed
	// to run the Go given code.
	//
	// See comment about `goCode` on `Compile` method.
	Preload(goCode map[string]string)

	// Compile compiles the given Go code. This returns the resulting JavaScript
	// code or an error if the compilation failed.
	//
	// Currently all of the given sources in the given `goCode` must be part of
	// the `main` package. The keys are the file names for the value with the
	// Go source code. This currently doesn't allow multiple packages to be
	// given so all other packages must be from the STL precompiled packages.
	Compile(goCode map[string]string) (string, error)
}

type compilerImp struct {
	verbose bool
	cache   *packageCache
}

func NewCompiler(fetcher Fetcher) Compiler {
	return &compilerImp{cache: newPackageCache(fetcher)}
}

func (r *compilerImp) Version() string {
	return compiler.Version
}

func (r *compilerImp) SetVerbose(verbose bool) {
	r.verbose = verbose
}

func (r *compilerImp) Preload(goCode map[string]string) {
	fileSet := token.NewFileSet()
	srcs := &sources.Sources{
		FileSet: fileSet,
	}

	for filepath, source := range goCode {
		file, err := parser.ParseFile(fileSet, filepath, source, parser.ImportsOnly)
		if err != nil {
			// Ignore errors here. They will be reported during actual compilation.
			continue
		}
		srcs.Files = append(srcs.Files, file)
	}

	// Always preload runtime since it is always needed.
	r.asyncPreloadImports(`runtime`)
	if len(srcs.Files) > 0 {
		r.preloadImports(srcs)
	}
}

// preloadImports will asynchronously preload the imports needed by the given sources.
func (r *compilerImp) preloadImports(srcs *sources.Sources) {
	imports := srcs.UnresolvedImports()
	for _, imp := range imports {
		r.asyncPreloadImports(imp)
	}
}

// asyncPreloadImports will asynchronously preload the import with the
// given path and any import that is needed for that import.
func (r *compilerImp) asyncPreloadImports(path string) {
	go func(path string) {
		srcs, result, err := r.cache.Load(path)
		if err != nil {
			// Ignore errors here. They will be reported during actual compilation.
			return
		}
		if result == loadFetched {
			// If this is the first time this package was fetched,
			// start preloading its imports too.
			r.preloadImports(srcs)
		}
	}(path)
}

func (r *compilerImp) Compile(goCode map[string]string) (string, error) {
	if r.verbose {
		println(`starting compile`)
	}

	// TODO(grantnelson-wf): Idea: We could detect if [goCode] has no main method and
	// instead has Test, Bench, or Example, methods, then run the code as a test.

	fileSet := token.NewFileSet()
	root := &sources.Sources{
		ImportPath: `main`,
		Dir:        ``,
		FileSet:    fileSet,
	}

	filepaths := make([]string, 0, len(goCode))
	for filepath := range goCode {
		filepaths = append(filepaths, filepath)
	}
	sort.Strings(filepaths)

	for _, filepath := range filepaths {
		source := goCode[filepath]
		file, err := parser.ParseFile(fileSet, filepath, source, parser.ParseComments)
		if err != nil {
			return ``, err
		}
		root.Files = append(root.Files, file)
	}

	// start preloading imports so that they are fetched asynchronously,
	// and we can synchronously wait for them later during actual compilation.
	r.preloadImports(root)

	allSources, err := r.collectAllSources(root)
	if err != nil {
		if r.verbose {
			println(`compile failed`)
		}
		return ``, err
	}

	archives, err := r.prepareAndCompilePackages(root.ImportPath, allSources)
	if err != nil {
		if r.verbose {
			println(`compile failed`)
		}
		return ``, err
	}

	jsCode := r.write(archives)
	if r.verbose {
		println(`done compiling`)
	}
	return jsCode, nil
}

func (r *compilerImp) collectAllSources(root *sources.Sources) (map[string]*sources.Sources, error) {
	allSources := map[string]*sources.Sources{
		root.ImportPath: root,
	}
	if err := r.addSourcesToSourcesMap(allSources, root); err != nil {
		return nil, err
	}

	// Ensure `runtime` is added even if it was not explicitly imported.
	if err := r.addPathToSourcesMap(allSources, `runtime`); err != nil {
		return nil, err
	}
	return allSources, nil
}

func (r *compilerImp) addSourcesToSourcesMap(allSources map[string]*sources.Sources, srcs *sources.Sources) error {
	for _, path := range srcs.UnresolvedImports() {
		if err := r.addPathToSourcesMap(allSources, path); err != nil {
			return err
		}
	}
	return nil
}

func (r *compilerImp) addPathToSourcesMap(allSources map[string]*sources.Sources, path string) error {
	if _, has := allSources[path]; has {
		return nil // Already collected.
	}

	// Run load synchronously to await for the package to be available.
	srcs, _, err := r.cache.Load(path)
	if err != nil {
		// Failed to load an import.
		return fmt.Errorf(`failed to load package %q: %w`, path, err)
	}

	allSources[srcs.ImportPath] = srcs
	return r.addSourcesToSourcesMap(allSources, srcs)
}

func (r *compilerImp) prepareAndCompilePackages(rootPath string, allSources map[string]*sources.Sources) ([]*compiler.Archive, error) {
	tContext := types.NewContext()

	sortedSources := make([]*sources.Sources, 0, len(allSources))
	for _, srcs := range allSources {
		sortedSources = append(sortedSources, srcs)
	}
	sources.SortedSourcesSlice(sortedSources)

	importer := func(path, _ string) (*sources.Sources, error) {
		if srcs, found := allSources[path]; found {
			return srcs, nil
		}
		return nil, fmt.Errorf(`failed to find package %q`, path)
	}

	err := compiler.PrepareAllSources(sortedSources, importer, tContext)
	if err != nil {
		return nil, err
	}

	// Compile all sources into archives.
	archives := make(map[string]*compiler.Archive, len(sortedSources))
	for _, srcs := range sortedSources {
		arch, err := compiler.Compile(srcs, tContext, false)
		if err != nil {
			return nil, err
		}
		archives[arch.ImportPath] = arch
	}

	// Get the archives ordered by dependency.
	rootArch := archives[rootPath]
	return compiler.ImportDependencies(rootArch, func(path string) (*compiler.Archive, error) {
		if arch, found := archives[path]; found {
			return arch, nil
		}
		return nil, fmt.Errorf(`failed to find archive for package %q`, path)
	})
}

// write writes the JS for all the archives to a stirng.
// The archives must be ordered by dependency.
func (r *compilerImp) write(allPkgs []*compiler.Archive) string {
	jsCode := bytes.NewBuffer(nil)
	const testBinary = `0`
	compiler.WriteProgramCode(allPkgs, compiler.DefaultFilter(jsCode), runtime.Version(), testBinary)
	return jsCode.String()
}
