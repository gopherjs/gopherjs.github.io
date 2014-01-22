package main

import (
	"bytes"
	"fmt"
	"github.com/neelance/go-angularjs"
	"github.com/neelance/gopherjs/js"
	"github.com/neelance/gopherjs/translator"
	"go/ast"
	"go/format"
	"go/parser"
	"go/scanner"
	"go/token"
	"strings"
	"time"
)

type Line map[string]string

var output []Line

func main() {
	app := angularjs.NewModule("playground", nil, nil)

	app.NewController("PlaygroundCtrl", func(scope *angularjs.Scope) {
		scope.Set("code", "package main\n\nimport (\n\t\"fmt\"\n\t\"github.com/neelance/gopherjs/js\"\n)\n\nfunc main() {\n\tfmt.Println(\"Hello, playground\")\n\tjs.Global(\"alert\").Invoke(\"Hello, JavaScript\")\n\tprintln(\"Hello, JS console\")\n}\n")

		packages := make(map[string]*translator.Output)
		fileSet := token.NewFileSet()
		var pkgsToLoad []string
		pkgsReceived := 0

		setupEnvironment(scope)

		codeArea := angularjs.ElementById("code")
		codeArea.On("keydown", func(e *angularjs.Event) {
			toInsert := ""
			switch e.KeyCode {
			case '\t':
				toInsert = "\t"
			case '\r':
				toInsert = "\n"
				start := codeArea.Prop("selectionStart").Int()
				code := scope.Get("code").String()
				i := strings.LastIndex(code[:start], "\n") + 1
				for i < start {
					c := code[i]
					if c != ' ' && c != '\t' {
						break
					}
					toInsert += string(c)
					i++
				}
			}
			if toInsert != "" {
				start := codeArea.Prop("selectionStart").Int()
				end := codeArea.Prop("selectionEnd").Int()
				code := scope.Get("code").String()
				scope.Apply(func() {
					scope.Set("code", code[:start]+toInsert+code[end:])
				})
				codeArea.SetProp("selectionStart", start+len(toInsert))
				codeArea.SetProp("selectionEnd", start+len(toInsert))
				e.PreventDefault()
			}
		})

		var run func(bool)
		run = func(loadOnly bool) {
			output = nil
			scope.Set("output", output)
			pkgsToLoad = nil

			file, err := parser.ParseFile(fileSet, "prog.go", []byte(scope.Get("code").String()), 0)
			if err != nil {
				if list, ok := err.(scanner.ErrorList); ok {
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}

			importPackage := func(path string) (*translator.Output, error) {
				if pkg, found := packages[path]; found {
					return pkg, nil
				}
				pkgsToLoad = append(pkgsToLoad, path)
				return &translator.Output{}, nil
			}
			mainPkg, err := translator.TranslatePackage("main", []*ast.File{file}, fileSet, importPackage)
			packages["main"] = mainPkg
			if err != nil && len(pkgsToLoad) == 0 {
				if list, ok := err.(translator.ErrorList); ok {
					output := make([]Line, 0)
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}

			var pkgsToEval []string
			if len(pkgsToLoad) == 0 {
				for _, path := range mainPkg.Dependencies {
					importPackage(path)
					if path == "main" || !isAlreadyLoaded(path) {
						pkgsToEval = append(pkgsToEval, path)
					}
				}
			}

			if len(pkgsToLoad) != 0 {
				pkgsReceived = 0
				for _, p := range pkgsToLoad {
					path := p

					req := js.Global("XMLHttpRequest").New()
					req.Call("open", "GET", "pkg/"+path+".a", true)
					req.Set("responseType", "arraybuffer")
					req.Set("onload", func() {
						if req.Get("status").Int() != 200 {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": `cannot load package "` + path + `"`}})
							})
							return
						}

						data := js.Global("Uint8Array").New(req.Get("response")).Interface().([]byte)
						packages[path], err = translator.ReadArchive(path+".a", path, []byte(data))
						if err != nil {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
							})
							return
						}
						pkgsReceived++
						if pkgsReceived == len(pkgsToLoad) {
							run(loadOnly)
						}
					})
					req.Call("send")
				}
				return
			}

			if loadOnly {
				return
			}

			jsCode := bytes.NewBuffer(nil)

			for _, path := range pkgsToEval {
				jsCode.WriteString("go$packages[\"" + path + "\"] = (function() {\n\tvar go$pkg = {};\n")
				jsCode.Write(packages[path].Code)
				jsCode.WriteString("\treturn go$pkg;\n})();\n")
			}

			translator.WriteInterfaces(mainPkg.Dependencies, jsCode, true)

			for _, path := range pkgsToEval {
				jsCode.WriteString("go$packages[\"" + path + "\"].init();\n")
			}

			jsCode.WriteString("go$packages[\"main\"].main();\n")

			evalScript(jsCode.String(), scope)
		}
		scope.Set("run", run)
		run(true)

		scope.Set("format", func() {
			out, err := format.Source([]byte(scope.Get("code").String()))
			if err != nil {
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}
			scope.Set("code", string(out))
			scope.Set("output", []Line{})
		})
	})
}

func writeString(scope *angularjs.Scope, s string) {
	lines := strings.Split(s, "\n")
	if len(output) == 0 || output[len(output)-1]["type"] != "out" {
		output = append(output, Line{"type": "out", "content": ""})
	}
	output[len(output)-1]["content"] += lines[0]
	for i := 1; i < len(lines); i++ {
		output = append(output, Line{"type": "out", "content": lines[i]})
	}
	scope.Set("output", output)
	scope.EvalAsync(func() {
		time.AfterFunc(0, func() {
			box := angularjs.ElementById("output")
			box.SetProp("scrollTop", box.Prop("scrollHeight"))
		})
	})
}

func setupEnvironment(scope *angularjs.Scope) {
	js.Global("go$packages").Get("syscall").Call("go$setSyscall", func(trap int, a1, a2, a3 js.Object) (r1, r2 int, err error) {
		switch trap {
		case 4:
			s := string(a2.Interface().([]byte))
			writeString(scope, s)
			return len(s), 0, nil
		default:
			panic("syscall not supported")
		}
	})
}

func isAlreadyLoaded(path string) bool {
	return !js.Global("go$packages").Get(path).IsUndefined()
}

func evalScript(script string, scope *angularjs.Scope) {
	defer func() {
		if err := recover(); err != nil {
			output = append(output, Line{"type": "err", "content": fmt.Sprintf("panic: %v", err)})
			scope.Set("output", output)
		}
	}()
	js.Global("eval").Invoke(script)
}
