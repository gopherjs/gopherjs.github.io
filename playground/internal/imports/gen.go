//go:generate go1.19.13 run mkapi.go -output=syscalljs.txt -contexts js-wasm syscall/js
//go:generate go1.19.13 run mkapi.go -output=gopherjs.txt -gopath github.com/gopherjs/gopherjs/js
//go:generate go1.19.13 run mkstdlib.go -output=zstdlib
//go:generate rm syscalljs.txt gopherjs.txt

package imports
