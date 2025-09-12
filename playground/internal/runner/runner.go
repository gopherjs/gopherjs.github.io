package runner

import (
	"bytes"
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"go/types"
	"runtime"
	_ "unsafe"

	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/compiler/sources"
	"github.com/gopherjs/gopherjs/js"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/common"
)

const pseudoFileName = `prog.go`

type runner struct {
	cache *packageCache

	output common.Output
}

func New(output common.Output, fetcher common.Fetcher) common.Runner {
	return &runner{
		cache:  newPackageCache(output, fetcher),
		output: output,
	}
}

// Preload asynchronously starts loading standard library packages needed
// to run the given code.
func (r *runner) Preload(code string) {
	fileSet := token.NewFileSet()
	file, err := parser.ParseFile(fileSet, pseudoFileName, code, parser.ImportsOnly)
	if err != nil {
		// Ignore errors here. They will be reported during actual compilation.
		return
	}
	r.preloadImports(&sources.Sources{Files: []*ast.File{file}})
}

func (r *runner) preloadImports(srcs *sources.Sources) {
	imports := srcs.UnresolvedImports()
	for _, imp := range imports {
		go func(path string) {
			srcs, result := r.cache.Load(path)
			if result == loadFetched {
				// If this is the first time this package was fetched,
				// start preloading its imports too.
				r.preloadImports(srcs)
			}
		}(imp)
	}
}

// Run compiles and runs the given code.
// If this is called again while a previous Run is still in progress,
// the previous Run is cancelled.
func (r *runner) Run(code string) {
	fileSet := token.NewFileSet()
	file, err := parser.ParseFile(fileSet, pseudoFileName, code, parser.ParseComments)
	if err != nil {
		r.output.AddError(err)
		return
	}

	root := &sources.Sources{
		ImportPath: `main`,
		Dir:        ``,
		Files:      []*ast.File{file},
		FileSet:    fileSet,
	}

	// start preloading imports so that they are fetched asynchronously,
	// and we can synchronously wait for them later during actual compilation.
	r.preloadImports(root)

	allSources, ok := r.collectAllSources(root)
	if !ok {
		return // Errors have already been reported.
	}
	archives, err := r.prepareAndCompilePackages(allSources)
	if err != nil {
		r.output.AddError(err)
		return
	}

	jsCode := r.write(archives)
	r.eval(jsCode)
}

func (r *runner) collectAllSources(root *sources.Sources) ([]*sources.Sources, bool) {
	allSrcs := map[string]*sources.Sources{}
	var collect func(srcs *sources.Sources) bool
	collect = func(srcs *sources.Sources) bool {
		allSrcs[srcs.ImportPath] = srcs
		for _, path := range srcs.UnresolvedImports() {
			if _, has := allSrcs[path]; has {
				continue // Already collected.
			}
			srcs, result := r.cache.Load(path)
			if result == loadFailed {
				// Failed to load an import.
				r.output.AddError(fmt.Errorf(`failed to load package %q`, path))
				return false
			}
			if !collect(srcs) {
				return false
			}
		}
		return true
	}
	if !collect(root) {
		return nil, false
	}

	sourcesSlice := make([]*sources.Sources, 0, len(allSrcs))
	for _, srcs := range allSrcs {
		sourcesSlice = append(sourcesSlice, srcs)
	}
	return sourcesSlice, true
}

func (r *runner) sourcesForImport(path, _ string) (*sources.Sources, error) {
	srcs, result := r.cache.Load(path)
	if result == loadFailed {
		return nil, fmt.Errorf(`failed to load package %q`, path)
	}
	return srcs, nil
}

func (r *runner) prepareAndCompilePackages(allSources []*sources.Sources) ([]*compiler.Archive, error) {
	tContext := types.NewContext()
	err := compiler.PrepareAllSources(allSources, r.sourcesForImport, tContext)
	if err != nil {
		return nil, err
	}

	archives := make([]*compiler.Archive, 0, len(allSources))
	for _, srcs := range allSources {
		arch, err := compiler.Compile(srcs, tContext, true)
		if err != nil {
			return nil, err
		}
		archives = append(archives, arch)
	}

	return archives, nil
}

func (r *runner) write(allPkgs []*compiler.Archive) string {
	jsCode := bytes.NewBuffer(nil)
	jsCode.WriteString("try{\n")
	compiler.WriteProgramCode(allPkgs, compiler.DefaultFilter(jsCode), runtime.Version())
	jsCode.WriteString("} catch (err) {\n")
	jsCode.WriteString("\tgoPanicHandler(err.message);\n")
	jsCode.WriteString("}\n")
	return jsCode.String()
}

func (r *runner) eval(jsCode string) {
	js.Global.Set("$checkForDeadlock", true)
	js.Global.Call("eval", js.InternalObject(jsCode))
}
