# GopherJS Playground

The playground is a place where users can explore GopherJS without needing to install anything, or to share code with others.

- [Building the playgound](#building-the-playgound)
- [Development](#development)
- [Upgrading GopherJS release](#upgrading-gopherjs-release)
- [Adding a new predefined snippet](#adding-a-new-predefined-snippet)

## Building the playgound

To build the entire playground environment,
run `go generate`.

This assumes that your `go` matches the current version of `go` that `gopherjs` supports.
If you have a different version of `go` then install the other versions as
described in [Managing Go installations](https://go.dev/doc/manage-install).

For example, to build for [GopherJS 1.20.0 for Go 1.20.14](https://github.com/gopherjs/gopherjs/releases/tag/v1.20.0)
run `go1.20.14 generate`.

Generate will:

1. Install your local version of GopherJS compiler
2. Build the playground
3. Build the web worker compiler
4. Create precompiled standard library packages in the `pkg` directory

To manually build the playground:

1. See [GopherJS](https://github.com/gopherjs/gopherjs) documentation about building GopherJS
2. Build the playgound with `gopherjs build ./playground.go`
3. Build the web worker compiler with `gopherjs build ./internal/cmd/compile/compile.go`
4. Create the precompiled standard library packages with `go run ./internal/cmd/precompile`.
   Use the same `go` as `gopherjs` as described above

## Development

Working on the playground application itself is made easier by using the
`gopherjs serve` command serve the playground locally.

Then open <http://localhost:8080?debug=true&local=true>.

The `debug` query will enable debugging for react and verbose output.

If running locally or from a fork, trying to access the remote store will
fail with a a CORS error. Use the `local` query to make the snippet store
(used when clicking "Share" or loading with a shared url) use local cache only.

There are a few ways to check changes. When working on the playground itself
it may be simpliest to run `gopherjs build ./playground.go && gopherjs serve`
after you have made changes so that the changes will be built and served.

When running code in the playground, the JS that is being run can be seen
by checking the page source files and finding the webworker that is running
the code. The webworker should have a GUID name, e.g. `fb29b3a9-d5b0-478d-aaf7-85cb60ddbd6d`,
and the JS compiled for that code will have the same name (usually without `.js`).

## Upgrading GopherJS release

To upgrade to the newest version, run

```shell
VERSION="$(go list -m -versions -f "{{ range .Versions }}{{ println . }}{{ end }}" github.com/gopherjs/gopherjs | tail -n 1)"
echo "$VERSION"
go get -v "github.com/gopherjs/gopherjs@$VERSION"
go mod tidy
```

then rebuild the playground with the correct version of `go`.

When committing the update, make sure that `compile.js` at minimum has been
updated to use the new version of GopherJS so that we can build in that version.

## Adding a new predefined snippet

The snippets are prewritten example programs such as `Hello` and `Donut`.
To add new snippets:

1. Write the code you would like to add
2. Test it in the playground and check the console to make sure it does
   what you expected it to do
3. Create file in the [snippets folder](./internal/snippets) for that code and change
   file extension to `.go.txt`
4. In [`snippets.go`](./internal/snippets/snippets.go) add the new file as
   an embedded string and add that string to the `predefined` map.
