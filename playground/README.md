# GopherJS Playground

The playground is a place where users can explore GopherJS without needing to install anything, or to share code with others.

## Development

To update the entire playground environment, just run `go generate github.com/gopherjs/gopherjs.github.io/playground`. It will install your local version of GopherJS compiler, build the playground, make a temporary copy of Go to /tmp/gopherjsplayground_goroot, rebuild and copy the standard library into the `pkg` directory.

Working on the playground application itself is made easier by using the `gopherjs serve` command to rebuild and serve the playground every time you refresh the browser.

```bash
gopherjs serve
```

Then open <http://localhost:8080/github.com/gopherjs/gopherjs.github.io/playground>.

## Upgrading GopherJS release

```shell
VERSION="$(go list -m -versions -f "{{ range .Versions }}{{ println . }}{{ end }}" github.com/gopherjs/gopherjs | tail -n 1)"
echo "$VERSION"
go get -v "github.com/gopherjs/gopherjs@$VERSION"
go mod tidy
```
