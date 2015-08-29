#! /bin/sh
set -e

go install github.com/gopherjs/gopherjs/...

gopherjs install -m github.com/gopherjs/gopherjs.github.io/playground github.com/gopherjs/gopherjs/js
cp $GOPATH/bin/playground.js $GOPATH/src/github.com/gopherjs/gopherjs.github.io/playground/playground.js
cp $GOPATH/bin/playground.js.map $GOPATH/src/github.com/gopherjs/gopherjs.github.io/playground/playground.js.map

PKG=$GOPATH/src/github.com/gopherjs/gopherjs.github.io/playground/pkg

rm -r $PKG

mkdir -p $PKG/github.com/gopherjs/gopherjs
cp $GOPATH/pkg/darwin_js_min/github.com/gopherjs/gopherjs/js.a $PKG/github.com/gopherjs/gopherjs/js.a
cp $GOPATH/pkg/darwin_js_min/github.com/gopherjs/gopherjs/nosync.a $PKG/github.com/gopherjs/gopherjs/nosync.a

gopherjs install -m github.com/gopherjs/gopherjs/js archive/tar archive/zip bufio bytes compress/bzip2 compress/flate compress/gzip compress/lzw compress/zlib container/heap container/list container/ring crypto/aes crypto/cipher crypto/des crypto/dsa crypto/ecdsa crypto/elliptic crypto/hmac crypto/md5 crypto/rand crypto/rc4 crypto/rsa crypto/sha1 crypto/sha256 crypto/sha512 crypto/subtle database/sql/driver debug/gosym debug/pe encoding/ascii85 encoding/asn1 encoding/base32 encoding/base64 encoding/binary encoding/csv encoding/gob encoding/hex encoding/json encoding/pem encoding/xml errors fmt go/ast go/doc go/format go/printer go/token hash/adler32 hash/crc32 hash/crc64 hash/fnv html html/template image image/color image/draw image/gif image/jpeg image/png index/suffixarray io io/ioutil math math/big math/cmplx math/rand mime net/http/cookiejar net/http/fcgi net/http/httptest net/http/httputil net/mail net/smtp net/textproto net/url path path/filepath reflect regexp regexp/syntax sort strconv strings sync/atomic testing testing/iotest testing/quick text/scanner text/tabwriter text/template text/template/parse time unicode unicode/utf16 unicode/utf8
cp -r $GOROOT/pkg/darwin_js_min/* $PKG
cp -r $GOROOT/pkg/darwin_amd64_js_min/* $PKG

rename 's/\.a/\.a.js/' `find $PKG -name "*.a"`
