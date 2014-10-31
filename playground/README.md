# GopherJS Playground

The playground is a place where users can explore GopherJS without needing to install anything, or to share code with others. Our motivation should be that a potential user could easily be turned of by a bad experience here.

A secondary motivation is making the playground usable for other projects, such as in the GopherJS book, a GopherJS codewalk, or custom interactive environments using other packages.

## Development

To update the entire playground environment, run the `update.sh` script. It will pull the latest gopherjs compiler, rebuild and copy the standard library into the `pkg` directory, and build the playground.

Working on the application itself is made easier by using the [SRVi](https://github.com/ajhager/srvi) utility to rebuild and serve the playground every time you refresh the browser.

```bash
go get -u github.com/ajhager/srvi
srvi -index index.html playground.go
```
