package main

import (
	"fmt"
	"go/build"
	"io/ioutil"
	"os"
	"path/filepath"
)

func main() {
	out, err := os.Create("src/github.com/neelance/gopherjs-playground/files.go")
	if err != nil {
		panic(err)
	}
	out.WriteString("package main\n\nvar files = map[string]string {\n")

	readDir := func(dir string) {
		dir = fmt.Sprintf("%s/pkg/%s_%s_js/", dir, build.Default.GOOS, build.Default.GOARCH)
		err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
			if info.IsDir() {
				return nil
			}

			in, err := ioutil.ReadFile(path)
			if err != nil {
				return err
			}
			fmt.Fprintf(out, "\t\"%s\": %#v,\n", path[len(dir):], string(in))
			return nil
		})
		if err != nil {
			panic(err)
		}
	}
	readDir(build.Default.GOROOT)
	readDir(build.Default.GOPATH)

	out.WriteString("}\n")
	out.Close()
}
