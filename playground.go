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
	"strings"
	"time"
)

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
				jsCode.WriteString("go$packages[\"" + dep.Path() + "\"] = (function() {\n  var go$pkg = {};\n")
				jsCode.Write(jsPackages[dep.Path()])
				jsCode.WriteString("  return go$pkg;\n})();\n")
			}

			translator.WriteInterfaces(dependencies, jsCode, true)

			for _, dep := range toLoad {
				jsCode.WriteString("go$packages[\"" + dep.Path() + "\"].init();\n")
			}

			jsCode.WriteString("go$packages[\"main\"].main();\n")

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

type jsObject *struct{}

type OutputLine struct {
	Type    string
	Content string
}

func (o *OutputLine) EncodedContent() jsObject {
	return encodeString(o.Content)
}

func encodeString(s string) jsObject { return nil }

const js_encodeString = `
  return s;
`

func writeString(scope *angularjs.Scope, s string) {
	lines := strings.Split(s, "\n")
	output := scope.Get("output").([]interface{})
	if len(output) == 0 {
		output = []interface{}{&OutputLine{"out", ""}}
	}
	output[len(output)-1].(*OutputLine).Content += lines[0]
	for i := 1; i < len(lines); i++ {
		output = append(output, OutputLine{"out", lines[i]})
	}
	scope.Set("output", output)
	scope.EvalAsync(func() {
		time.AfterFunc(0, func() {
			box := angularjs.ElementById("output")
			box.SetProp("scrollTop", box.Prop("scrollHeight"))
		})
	})
}

func writeBytes(scope *angularjs.Scope, b [0]byte) {
	writeString(scope, string(b[:]))
}

func setupEnvironment(scope *angularjs.Scope) {}

const js_setupEnvironment = `
  console = { log: function() {
    writeString(scope, Array.prototype.join.call(arguments, " ") + "\n");
  } };
  go$packages["syscall"].go$setSyscall(function(trap, arg1, arg2, arg3) {
  	switch (trap) {
  	case 4: // SYS_WRITE
  	  writeBytes(scope, arg2);
  	  return [arg2.length, 0, null];
  	default:
	  	throw new Go$Panic("Syscall not supported: " + trap);
  	}
  });
`

func isAlreadyLoaded(path string) bool { return false }

const js_isAlreadyLoaded = `
  return go$packages[path] !== undefined;
`

func evalScript(script string, scope *angularjs.Scope) {}

const js_evalScript = `
  try {
  	eval(script);
  } catch (err) {
  	scope.native.output.push(new OutputLine.Ptr("err", "panic: " + err.message));
  	var stack = err.stack.split("\n").slice(1, -12);
  	for (var i = 0; i < stack.length; i++) {
  		scope.native.output.push(new OutputLine.Ptr("err", stack[i].split(" (eval at ")[0]));
  	}
  }
`
