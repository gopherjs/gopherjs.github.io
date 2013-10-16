package main

import (
	"bytes"
	"code.google.com/p/go.tools/go/types"
	"github.com/neelance/go-angularjs"
	"github.com/neelance/gopherjs/translator"
	"go/ast"
	"go/format"
	"go/parser"
	"go/scanner"
	"go/token"
	"os"
	"strings"
	"time"
)

type OutputLine struct {
	Type    string
	Content string
}

const gopherjsWebMode = true

func main() {
	app := angularjs.NewModule("playground", nil, nil)

	app.NewController("PlaygroundCtrl", func(scope *angularjs.Scope) {
		scope.Set("code", "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello, playground\")\n}\n")
		scope.Set("output", []interface{}{&OutputLine{"out", "Loading..."}})

		jsPackages := make(map[string][]byte)
		fileSet := token.NewFileSet()
		typesConfig := &types.Config{
			Packages: make(map[string]*types.Package),
			Import: func(imports map[string]*types.Package, path string) (*types.Package, error) {
				if _, found := jsPackages[path]; found {
					return imports[path], nil
				}

				code, imp, err := translator.ReadArchive(imports, path+".a", path, strings.NewReader(files["/pkg/darwin_amd64_js/"+path+".a"]))
				if err != nil {
					return nil, err
				}
				jsPackages[path] = code

				return imp, nil
			},
		}

		setupEnvironment(scope)

		run := func() {
			scope.Set("output", []interface{}{})

			file, err := parser.ParseFile(fileSet, "prog.go", []byte(scope.GetString("code")), 0)
			if err != nil {
				if list, isList := err.(scanner.ErrorList); isList {
					output := make([]interface{}, 0)
					for _, entry := range list {
						output = append(output, &OutputLine{"err", entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []interface{}{&OutputLine{"err", err.Error()}})
				return
			}

			jsPackages["main"], err = translator.TranslatePackage("main", []*ast.File{file}, fileSet, typesConfig)
			if err != nil {
				if list, isList := err.(translator.ErrorList); isList {
					output := make([]interface{}, 0)
					for _, entry := range list {
						output = append(output, &OutputLine{"err", entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []interface{}{&OutputLine{"err", err.Error()}})
				return
			}

			dependencies, err := translator.GetAllDependencies("main", typesConfig)
			if err != nil {
				scope.Set("output", []interface{}{&OutputLine{"err", err.Error()}})
				return
			}

			var toLoad []*types.Package
			for _, dep := range dependencies {
				if dep.Path() == "main" || !isAlreadyLoaded(dep.Path()) {
					toLoad = append(toLoad, dep)
				}
			}

			jsCode := bytes.NewBuffer(nil)

			for _, dep := range toLoad {
				jsCode.WriteString("Go$packages[\"" + dep.Path() + "\"] = (function() {\n")
				jsCode.Write(jsPackages[dep.Path()])
				jsCode.WriteString("})();\n")
			}

			translator.WriteInterfaces(dependencies, jsCode)

			for _, dep := range toLoad {
				if dep.Scope().Lookup("init") != nil {
					jsCode.WriteString("Go$packages[\"" + dep.Path() + "\"].init();\n")
				}
			}

			jsCode.WriteString("Go$packages[\"main\"].main();\n")

			evalScript(jsCode.String(), scope)
		}
		scope.Set("run", run)
		run()

		scope.Set("format", func() {
			out, err := format.Source([]byte(scope.GetString("code")))
			if err != nil {
				scope.Set("output", []interface{}{&OutputLine{"err", err.Error()}})
				return
			}
			scope.Set("code", string(out))
			scope.Set("output", []interface{}{})
		})
	})
}

func setupEnvironment(scope *angularjs.Scope) {}

const js_setupEnvironment = `
  console = { log: function() {
  	var lines = Go$externalizeString(Array.prototype.join.call(arguments, " ")).split("\n");
  	for (var i = 0; i < lines.length; i++) {
  		scope.native.output.push(new OutputLine("out", lines[i]));
  	}
  } };
  Go$packages["syscall"].Go$setSyscall(function(trap, arg1, arg2, arg3) {
  	switch (trap) {
  	case 4: // SYS_WRITE
  	  var lines = Go$externalizeString(Go$bytesToString(new Go$Slice(arg2))).split("\n");
  	  if (scope.native.output.length === 0) {
  	  	scope.native.output.push(new OutputLine("out", ""));
  	  }
  	  scope.native.output[scope.native.output.length - 1].Content += lines[0];
	  	for (var i = 1; i < lines.length; i++) {
	  	  scope.native.output.push(new OutputLine("out", lines[i]));
	  	}
  	  return [arg2.length, 0, null];
  	default:
	  	throw new Go$Panic("Syscall not supported: " + trap);
  	}
  });
`

func isAlreadyLoaded(path string) bool { return false }

const js_isAlreadyLoaded = `
  return Go$packages[path] !== undefined;
`

func evalScript(script string, scope *angularjs.Scope) {}

const js_evalScript = `
  try {
  	eval(script);
  } catch (err) {
  	scope.native.output.push(new OutputLine("err", "panic: " + err.message.v));
  	var stack = err.stack.split("\n").slice(1, -12);
  	for (var i = 0; i < stack.length; i++) {
  		scope.native.output.push(new OutputLine("err", stack[i].split(" (eval at ")[0]));
  	}
  }
`

type FileEntry struct {
	name string
	mode os.FileMode
}

func (e *FileEntry) Name() string {
	return e.name
}

func (e *FileEntry) Size() int64 {
	return 0
}

func (e *FileEntry) Mode() os.FileMode {
	return e.mode
}

func (e *FileEntry) ModTime() time.Time {
	return time.Unix(1, 0)
}

func (e *FileEntry) IsDir() bool {
	return e.mode.IsDir()
}

func (e *FileEntry) Sys() interface{} {
	return nil
}
