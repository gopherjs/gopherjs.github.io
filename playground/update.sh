#!/bin/sh
set -e

go install github.com/gopherjs/gopherjs/...

go generate github.com/gopherjs/gopherjs.github.io/playground/internal/imports

# Build playground itself.
gopherjs build -m

# The GOPATH workspace where the GopherJS project is.
GOPHERJSGOPATH=$(go list -f '{{.Root}}' github.com/gopherjs/gopherjs)

PKG=pkg
rm -r $PKG

# Use an empty GOPATH workspace with just gopherjs,
# so that all the standard library packages get written to GOROOT/pkg.
export GOPATH=/tmp/gopherjsplayground_gopath
mkdir -p $GOPATH/src/github.com/gopherjs/gopherjs
cp -r $GOPHERJSGOPATH/src/github.com/gopherjs/gopherjs/* $GOPATH/src/github.com/gopherjs/gopherjs

gopherjs install -m github.com/gopherjs/gopherjs/js github.com/gopherjs/gopherjs/nosync
mkdir -p $PKG/github.com/gopherjs/gopherjs
cp $GOPATH/pkg/darwin_js_min/github.com/gopherjs/gopherjs/js.a $PKG/github.com/gopherjs/gopherjs/js.a
cp $GOPATH/pkg/darwin_js_min/github.com/gopherjs/gopherjs/nosync.a $PKG/github.com/gopherjs/gopherjs/nosync.a

# Make a copy of GOROOT that is user-writeable,
# use it to build and copy out standard library packages.
cp -r $(go env GOROOT) /tmp/gopherjsplayground_goroot
export GOROOT=/tmp/gopherjsplayground_goroot
gopherjs install -m archive/tar archive/zip bufio bytes compress/bzip2 compress/flate compress/gzip compress/lzw compress/zlib container/heap container/list container/ring crypto/aes crypto/cipher crypto/des crypto/dsa crypto/ecdsa crypto/elliptic crypto/hmac crypto/md5 crypto/rand crypto/rc4 crypto/rsa crypto/sha1 crypto/sha256 crypto/sha512 crypto/subtle database/sql/driver debug/gosym debug/pe encoding/ascii85 encoding/asn1 encoding/base32 encoding/base64 encoding/binary encoding/csv encoding/gob encoding/hex encoding/json encoding/pem encoding/xml errors fmt go/ast go/doc go/format go/printer go/token hash/adler32 hash/crc32 hash/crc64 hash/fnv html html/template image image/color image/draw image/gif image/jpeg image/png index/suffixarray io io/ioutil math math/big math/cmplx math/rand mime net/http/cookiejar net/http/fcgi net/http/httptest net/http/httputil net/mail net/smtp net/textproto net/url path path/filepath reflect regexp regexp/syntax runtime/internal/sys sort strconv strings sync/atomic testing testing/iotest testing/quick text/scanner text/tabwriter text/template text/template/parse time unicode unicode/utf16 unicode/utf8
cp -r $GOROOT/pkg/darwin_js_min/* $PKG
cp -r $GOROOT/pkg/darwin_amd64_js_min/* $PKG

rm -r /tmp/gopherjsplayground_goroot
rm -r /tmp/gopherjsplayground_gopath

rename 's/\.a/\.a.js/' $(find $PKG -name "*.a")
