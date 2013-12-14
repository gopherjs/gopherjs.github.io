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
)

type OutputLine struct {
	Type    string
	Content string
}

func main() {
	app := angularjs.NewModule("playground", nil, nil)

	app.NewController("PlaygroundCtrl", func(scope *angularjs.Scope) {
		scope.Set("code", "package main\n\nimport \"fmt\"\n\nfunc main() {\n\talert(\"Hello, JavaScript\")\n\tfmt.Println(\"Hello, playground\")\n}\n\nfunc alert(msg string) {}\n\nconst js_alert = `window.alert(msg);`\n")
		scope.Set("output", []interface{}{&OutputLine{"out", "Loading..."}})

		jsPackages := make(map[string][]byte)
		fileSet := token.NewFileSet()
		typesConfig := &types.Config{
			Packages: make(map[string]*types.Package),
			Import: func(imports map[string]*types.Package, path string) (*types.Package, error) {
				if _, found := jsPackages[path]; found {
					return imports[path], nil
				}

				code, imp, err := translator.ReadArchive(imports, path+".a", path, bytes.NewReader([]byte(files[path+".a"])))
				if err != nil {
					return nil, err
				}
				jsPackages[path] = code

				return imp, nil
			},
		}

		setupEnvironment(scope)

		run := func(loadOnly bool) {
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

			if loadOnly {
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
				jsCode.WriteString("Go$packages[\"" + dep.Path() + "\"] = (function() {\n  var Go$pkg = {};\n")
				jsCode.Write(jsPackages[dep.Path()])
				jsCode.WriteString("  return Go$pkg;\n})();\n")
			}

			translator.WriteInterfaces(dependencies, jsCode, true)

			for _, dep := range toLoad {
				jsCode.WriteString("Go$packages[\"" + dep.Path() + "\"].init();\n")
			}

			jsCode.WriteString("Go$packages[\"main\"].main();\n")

			evalScript(jsCode.String(), scope)
		}
		scope.Set("run", run)
		run(true)

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
  var write = function(str) {
    var lines = Go$externalizeString(str).split("\n");
    if (scope.native.output.length === 0) {
      scope.native.output.push(new OutputLine("out", ""));
    }
    scope.native.output[scope.native.output.length - 1].Content += lines[0];
    for (var i = 1; i < lines.length; i++) {
      scope.native.output.push(new OutputLine("out", lines[i]));
    }
    scope.native.$evalAsync(function() {
      window.setTimeout(function() {
        var box = document.getElementById("output");
        box.scrollTop = box.scrollHeight;
      }, 0);
    });
  };
  console = { log: function() {
    write(Array.prototype.join.call(arguments, " ") + "\n");
  } };
  Go$packages["syscall"].Go$setSyscall(function(trap, arg1, arg2, arg3) {
  	switch (trap) {
  	case 4: // SYS_WRITE
  	  write(Go$bytesToString(new (Go$sliceType(Go$Byte))(arg2)));
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
