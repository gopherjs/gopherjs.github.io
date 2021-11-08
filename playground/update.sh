#!/bin/sh
set -e;

tmp=$(mktemp -d "${TMPDIR:-/tmp}/gopherjs_playground.XXXXXXXXXX");

cleanup() {
    chmod -R u+w "$tmp";
    rm -rf "$tmp";
    exit;
}

isolated_goroot() {
    REAL_GOROOT="$(go env GOROOT)"
    export GOROOT="$tmp/goroot"
    unset GOPHERJS_GOROOT  # force $GOROOT to be used
    mkdir -p "$GOROOT/pkg"
    for f in $(ls $REAL_GOROOT | grep -v pkg); do
        ln -s "$REAL_GOROOT/$f" "$GOROOT/$f"
    done
    export GOPATH="$tmp/gopath"  # Intentionally doesn't exist.
}

trap cleanup EXIT HUP INT TERM;

export GO111MODULE=on;

# Stage 1: Install latest released GopherJS version.
go install github.com/gopherjs/gopherjs@latest;
go get -d github.com/gopherjs/gopherjs;
go mod tidy

# Stage 2: Regenerate stdlib API information for auto-imports.
go generate github.com/gopherjs/gopherjs.github.io/playground/internal/imports;

# Stage 3: Build playground itself.
gopherjs build -m .;

# Stage 4: Precompile standard library and GopherJS packages.

# Stage 4.1: Set up isolated GOROOT/GOPATH directory so that we can easily
# extract all compiled archives.
isolated_goroot;

# Stage 4.2: Wipe out all previously built archives.
rm -rf pkg/;

# Stage 4.3: Precompile GopherJS libraries.
mkdir -p pkg/github.com/gopherjs/gopherjs;
gopherjs build -o pkg/github.com/gopherjs/gopherjs/js.a github.com/gopherjs/gopherjs/js;
gopherjs build -o pkg/github.com/gopherjs/gopherjs/nosync.a github.com/gopherjs/gopherjs/nosync;

# Stage 4.4: Precompile standard library.
gopherjs install $(GOOS=js GOARCH=wasm go list std | grep -v -E "internal/|vendor/|pprof|plugin")

# Stage 4.5: Copy compiled archives into the repository tree.
cp -a "$GOROOT"/pkg/*_js/* pkg/
cp -a "$GOROOT"/pkg/*_amd64_amd64/* pkg/  # This is for the syscall package, which is built with a different GOARCH.

# Stage 4.6 Rename all *.a files in pkg/ to *.a.js.
find pkg -name "*.a" -exec sh -c 'mv $0 $0.js' {} \;
