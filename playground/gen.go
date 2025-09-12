//go:generate go1.19.13 run ./internal/cmd/precompile
//go:generate go1.19.13 install github.com/gopherjs/gopherjs
//go:generate env GOOS=js GOARCH=ecmascript gopherjs build -m .

package main
