//go:generate go run ./internal/cmd/precompile
//go:generate go install github.com/gopherjs/gopherjs
//go:generate gopherjs build -m .

package main
