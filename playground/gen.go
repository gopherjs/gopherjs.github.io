//go:generate $GOROOT/bin/go run ./internal/cmd/precompile
//go:generate $GOROOT/bin/go install github.com/gopherjs/gopherjs
//go:generate env GOOS=js GOARCH=ecmascript gopherjs build -m ./internal/cmd/compile/.
//go:generate env GOOS=js GOARCH=ecmascript gopherjs build -m .

package main
