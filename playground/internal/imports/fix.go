// Copyright 2013 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package imports

import (
	"go/ast"
	"go/token"
	"path"
	"strings"

	"golang.org/x/tools/go/ast/astutil"
)

// importToGroup is a list of functions which map from an import path to
// a group number.
var importToGroup = []func(importPath string) (num int, ok bool){
	func(importPath string) (num int, ok bool) {
		if strings.HasPrefix(importPath, "appengine") {
			return 2, true
		}
		return
	},
	func(importPath string) (num int, ok bool) {
		if strings.Contains(importPath, ".") {
			return 1, true
		}
		return
	},
}

func importGroup(importPath string) int {
	for _, fn := range importToGroup {
		if n, ok := fn(importPath); ok {
			return n
		}
	}
	return 0
}

func fixImports(fset *token.FileSet, f *ast.File) (added []string, err error) {
	// refs are a set of possible package references currently unsatisfied by imports.
	// first key: either base package (e.g. "fmt") or renamed package
	// second key: referenced package symbol (e.g. "Println")
	refs := make(map[string]map[string]bool)

	// decls are the current package imports. key is base package or renamed package.
	decls := make(map[string]*ast.ImportSpec)

	// collect potential uses of packages.
	var visitor visitFn
	visitor = visitFn(func(node ast.Node) ast.Visitor {
		if node == nil {
			return visitor
		}
		switch v := node.(type) {
		case *ast.ImportSpec:
			if v.Name != nil {
				decls[v.Name.Name] = v
			} else {
				local := importPathToName(strings.Trim(v.Path.Value, `\"`))
				decls[local] = v
			}
		case *ast.SelectorExpr:
			xident, ok := v.X.(*ast.Ident)
			if !ok {
				break
			}
			if xident.Obj != nil {
				// if the parser can resolve it, it's not a package ref
				break
			}
			pkgName := xident.Name
			if refs[pkgName] == nil {
				refs[pkgName] = make(map[string]bool)
			}
			if decls[pkgName] == nil {
				refs[pkgName][v.Sel.Name] = true
			}
		}
		return visitor
	})
	ast.Walk(visitor, f)

	// Nil out any unused ImportSpecs, to be removed in following passes
	unusedImport := map[string]bool{}
	for pkg, is := range decls {
		if refs[pkg] == nil && pkg != "_" && pkg != "." {
			unusedImport[strings.Trim(is.Path.Value, `"`)] = true
		}
	}
	for ipath := range unusedImport {
		if ipath == "C" {
			// Don't remove cgo stuff.
			continue
		}
		astutil.DeleteImport(fset, f, ipath)
	}

	// Search for imports matching potential package references.
	searches := 0
	type result struct {
		ipath string
		name  string
		err   error
	}
	results := make(chan result)
	for pkgName, symbols := range refs {
		if len(symbols) == 0 {
			continue // skip over packages already imported
		}
		go func(pkgName string, symbols map[string]bool) {
			ipath, rename, err := findImport(pkgName, symbols)
			r := result{ipath: ipath, err: err}
			if rename {
				r.name = pkgName
			}
			results <- r
		}(pkgName, symbols)
		searches++
	}
	for i := 0; i < searches; i++ {
		result := <-results
		if result.err != nil {
			return nil, result.err
		}
		if result.ipath != "" {
			if result.name != "" {
				astutil.AddNamedImport(fset, f, result.name, result.ipath)
			} else {
				astutil.AddImport(fset, f, result.ipath)
			}
			added = append(added, result.ipath)
		}
	}

	return added, nil
}

// importPathToName returns the package name for the given import path.
var importPathToName = importPathToNameBasic

// importPathToNameBasic assumes the package name is the base of import path.
func importPathToNameBasic(importPath string) (packageName string) {
	return path.Base(importPath)
}

type pkg struct {
	importpath string // full pkg import path, e.g. "net/http"
	dir        string // absolute file path to pkg directory e.g. "/usr/lib/go/src/fmt"
}

// findImport searches for a package with the given symbols.
// If no package is found, findImport returns "".
// Declared as a variable rather than a function so goimports can be easily
// extended by adding a file with an init function.
var findImport = findImportStdlib

type visitFn func(node ast.Node) ast.Visitor

func (fn visitFn) Visit(node ast.Node) ast.Visitor {
	return fn(node)
}

func findImportStdlib(shortPkg string, symbols map[string]bool) (importPath string, rename bool, err error) {
	for symbol := range symbols {
		path := stdlib[shortPkg+"."+symbol]
		if path == "" {
			return "", false, nil
		}
		if importPath != "" && importPath != path {
			// Ambiguous. Symbols pointed to different things.
			return "", false, nil
		}
		importPath = path
	}
	return importPath, false, nil
}
