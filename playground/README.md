# GopherJS Playground

## Development

To update the entire playground environment, run the `update.sh` script. It will pull the latest gopherjs compiler, rebuild and copy the standard library into the `pkg` directory, and build the playground.

Working on the application itself is made easier by using the [SRVi](https://github.com/ajhager/srvi) utility to rebuild and serve the playground every time you refresh the browser.

```bash
go get -u github.com/ajhager/srvi
srvi -index index.html playground.go
```
