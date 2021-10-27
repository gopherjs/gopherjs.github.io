����Archive�� 	
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   ��s��encoding/base64base64encoding/binaryiostrconv�ui ��ErroreCorruptInputError encode	decodeMappadCharstrictWithPaddingencEncodingpaddingStrictEncodedstsrcEncodeToString
EncodedLenndecodeQuantumsinsierrDecodeStringsDecode
DecodedLenrReaderiowWriterWriteCloserencoderReadpWriteCloserClosebase64
NewDecoder
NewEncoderNewEncoding	NoPaddingRawStdEncodingRawURLEncodingStdEncoding
StdPaddingURLEncoding T       @� 1  "4  ,  4   KOOOOOOOOOT 8	 ; GO T R  \ GO  T c GV jX nX   r GZ n\   � G^ �   � G` jb nb � � � �  � Gd � f   � Gh jj nj � �  � Gl �  O ��F  G� �� � O �� ��F  G� �� � OF  � � C V RV RV �C zV ��  � �� � � T ��  � �� � � T � ��� � � T ��  �  T �� KN�������������������� ��������. binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Encoding��	Encoding = $pkg.Encoding = $newType(0, $kindStruct, "base64.Encoding", true, "encoding/base64", true, function(encode_, decodeMap_, padChar_, strict_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.encode = arrayType.zero();
			this.decodeMap = arrayType$1.zero();
			this.padChar = 0;
			this.strict = false;
			return;
		}
		this.encode = encode_;
		this.decodeMap = decodeMap_;
		this.padChar = padChar_;
		this.strict = strict_;
	});
��	Encoding.methods = [{prop: "WithPadding", name: "WithPadding", pkg: "", typ: $funcType([$Int32], [ptrType], false)}, {prop: "Strict", name: "Strict", pkg: "", typ: $funcType([], [ptrType], false)}];
	ptrType.methods = [{prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "EncodeToString", name: "EncodeToString", pkg: "", typ: $funcType([sliceType], [$String], false)}, {prop: "EncodedLen", name: "EncodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}, {prop: "decodeQuantum", name: "decodeQuantum", pkg: "encoding/base64", typ: $funcType([sliceType, sliceType, $Int], [$Int, $Int, $error], false)}, {prop: "DecodeString", name: "DecodeString", pkg: "", typ: $funcType([$String], [sliceType, $error], false)}, {prop: "Decode", name: "Decode", pkg: "", typ: $funcType([sliceType, sliceType], [$Int, $error], false)}, {prop: "DecodedLen", name: "DecodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}];
��	Encoding.init("encoding/base64", [{prop: "encode", name: "encode", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "decodeMap", name: "decodeMap", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "padChar", name: "padChar", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "strict", name: "strict", embedded: false, exported: false, typ: $Bool, tag: ""}]);
Encodingencoding/base64.Encodingencoding/base64.arrayTypeencoding/base64.arrayType$1encoding/base64.ptrTypeencoding/base64.sliceType  encoder��	encoder = $pkg.encoder = $newType(0, $kindStruct, "base64.encoder", true, "encoding/base64", false, function(err_, enc_, w_, buf_, nbuf_, out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.enc = ptrType.nil;
			this.w = $ifaceNil;
			this.buf = arrayType$2.zero();
			this.nbuf = 0;
			this.out = arrayType$3.zero();
			return;
		}
		this.err = err_;
		this.enc = enc_;
		this.w = w_;
		this.buf = buf_;
		this.nbuf = nbuf_;
		this.out = out_;
	});
��	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
�&	encoder.init("encoding/base64", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "nbuf", name: "nbuf", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: arrayType$3, tag: ""}]);
encoderencoding/base64.arrayType$2encoding/base64.arrayType$3encoding/base64.encoderencoding/base64.ptrTypeencoding/base64.ptrType$1encoding/base64.sliceType	io.Writer  CorruptInputError��	CorruptInputError = $pkg.CorruptInputError = $newType(8, $kindInt64, "base64.CorruptInputError", true, "encoding/base64", true, null);
n	CorruptInputError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
CorruptInputError!encoding/base64.CorruptInputError  decoder�p	decoder = $pkg.decoder = $newType(0, $kindStruct, "base64.decoder", true, "encoding/base64", false, function(err_, readErr_, enc_, r_, buf_, nbuf_, out_, outbuf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.readErr = $ifaceNil;
			this.enc = ptrType.nil;
			this.r = $ifaceNil;
			this.buf = arrayType$3.zero();
			this.nbuf = 0;
			this.out = sliceType.nil;
			this.outbuf = arrayType$5.zero();
			return;
		}
		this.err = err_;
		this.readErr = readErr_;
		this.enc = enc_;
		this.r = r_;
		this.buf = buf_;
		this.nbuf = nbuf_;
		this.out = out_;
		this.outbuf = outbuf_;
	});
r	ptrType$2.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	decoder.init("encoding/base64", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "readErr", name: "readErr", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "nbuf", name: "nbuf", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "outbuf", name: "outbuf", embedded: false, exported: false, typ: arrayType$5, tag: ""}]);
decoderencoding/base64.arrayType$3encoding/base64.arrayType$5encoding/base64.decoderencoding/base64.ptrTypeencoding/base64.ptrType$2encoding/base64.sliceType	io.Reader  newlineFilteringReader�'	newlineFilteringReader = $pkg.newlineFilteringReader = $newType(0, $kindStruct, "base64.newlineFilteringReader", true, "encoding/base64", false, function(wrapped_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wrapped = $ifaceNil;
			return;
		}
		this.wrapped = wrapped_;
	});
r	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	newlineFilteringReader.init("encoding/base64", [{prop: "wrapped", name: "wrapped", embedded: false, exported: false, typ: io.Reader, tag: ""}]);
newlineFilteringReader&encoding/base64.newlineFilteringReaderencoding/base64.ptrType$3encoding/base64.sliceType	io.Reader  	arrayType%	arrayType = $arrayType($Uint8, 64);
	arrayType  arrayType$1(	arrayType$1 = $arrayType($Uint8, 256);
arrayType$1  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(Encoding);
ptrTypeencoding/base64.Encoding  arrayType$2&	arrayType$2 = $arrayType($Uint8, 3);
arrayType$2  arrayType$3)	arrayType$3 = $arrayType($Uint8, 1024);
arrayType$3  arrayType$4&	arrayType$4 = $arrayType($Uint8, 4);
arrayType$4  arrayType$5(	arrayType$5 = $arrayType($Uint8, 768);
arrayType$5  	ptrType$1 	ptrType$1 = $ptrType(encoder);
	ptrType$1encoding/base64.encoder  	ptrType$2 	ptrType$2 = $ptrType(decoder);
	ptrType$2encoding/base64.decoder  	ptrType$3/	ptrType$3 = $ptrType(newlineFilteringReader);
	ptrType$3&encoding/base64.newlineFilteringReader  StdEncoding  URLEncoding  RawStdEncoding  RawURLEncoding  k  H		$pkg.StdEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
encoding/base64.NewEncodingencoding/base64.StdEncoding  k  �		$pkg.URLEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");
encoding/base64.NewEncodingencoding/base64.URLEncoding  Q  �		$pkg.RawStdEncoding = $clone($pkg.StdEncoding, Encoding).WithPadding(-1);
encoding/base64.Encodingencoding/base64.RawStdEncodingencoding/base64.StdEncoding  Q  �		$pkg.RawURLEncoding = $clone($pkg.URLEncoding, Encoding).WithPadding(-1);
encoding/base64.Encodingencoding/base64.RawURLEncodingencoding/base64.URLEncoding encoding/base64.NewEncodingencoding/base64NewEncoding NewEncoding��	NewEncoding = function(encoder$1) {
		var e, encoder$1, i, i$1, i$2, x, x$1, x$2;
    		if (!((encoder$1.length === 64))) {
  w			$panic(new $String("encoding alphabet is not 64-bytes long"));
    		}
  �		i = 0;
		while (true) {
			if (!(i < encoder$1.length)) { break; }
    			if ((encoder$1.charCodeAt(i) === 10) || (encoder$1.charCodeAt(i) === 13)) {
  				$panic(new $String("encoding alphabet contains newline character"));
    			}
  �			i = i + (1) >> 0;
    		}
  A		e = new Encoding.ptr(arrayType.zero(), arrayType$1.zero(), 0, false);
  U		e.padChar = 61;
  m		$copyString(new sliceType(e.encode), encoder$1);
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < 256)) { break; }
  �			(x = e.decodeMap, ((i$1 < 0 || i$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i$1] = 255));
  �			i$1 = i$1 + (1) >> 0;
    		}
  �		i$2 = 0;
		while (true) {
			if (!(i$2 < encoder$1.length)) { break; }
  �			(x$1 = e.decodeMap, x$2 = encoder$1.charCodeAt(i$2), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = ((i$2 << 24 >>> 24))));
  �			i$2 = i$2 + (1) >> 0;
    		}
  		return e;
    	};
	$pkg.NewEncoding = NewEncoding;
NewEncodingencoding/base64.Encodingencoding/base64.NewEncodingencoding/base64.arrayTypeencoding/base64.arrayType$1encoding/base64.sliceType &(encoding/base64.Encoding).WithPadding ��	Encoding.ptr.prototype.WithPadding = function(padding) {
		var enc, i, padding, x;
		enc = this;
    		if ((padding === 13) || (padding === 10) || padding > 255) {
  �			$panic(new $String("invalid padding"));
    		}
  �		i = 0;
		while (true) {
			if (!(i < 64)) { break; }
    			if ((((x = enc.encode, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) >> 0)) === padding) {
  	%				$panic(new $String("padding contained in alphabet"));
    			}
  �			i = i + (1) >> 0;
    		}
  	U		enc.padChar = padding;
  	l		return enc;
    	};
	Encoding.prototype.WithPadding = function(padding) { return this.$val.WithPadding(padding); };
Encodingencoding/base64.Encoding !(encoding/base64.Encoding).Strict ��	Encoding.ptr.prototype.Strict = function() {
		var enc;
		enc = this;
  
�		enc.strict = true;
  
�		return enc;
    	};
	Encoding.prototype.Strict = function() { return this.$val.Strict(); };
Encodingencoding/base64.Encoding "(*encoding/base64.Encoding).Encode ��	Encoding.ptr.prototype.Encode = function(dst, src) {
		var _1, _q, _tmp, _tmp$1, di, dst, enc, n, remain, si, src, val, val$1, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		enc = this;
    		if (src.$length === 0) {
  M			return;
    		}
  		$unused(enc.encode);
  *		_tmp = 0;
		_tmp$1 = 0;
		di = _tmp;
		si = _tmp$1;
  :		n = $imul(((_q = src.$length / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))), 3);
  S		while (true) {
			if (!(si < n)) { break; }
  �			val = (((((((x = si + 0 >> 0, ((x < 0 || x >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x])) >>> 0)) << 16 >>> 0) | ((((x$1 = si + 1 >> 0, ((x$1 < 0 || x$1 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$1])) >>> 0)) << 8 >>> 0)) >>> 0) | (((x$2 = si + 2 >> 0, ((x$2 < 0 || x$2 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$2])) >>> 0))) >>> 0;
  �			(x$5 = di + 0 >> 0, ((x$5 < 0 || x$5 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$5] = (x$3 = enc.encode, x$4 = ((val >>> 18 >>> 0) & 63) >>> 0, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4]))));
  �			(x$8 = di + 1 >> 0, ((x$8 < 0 || x$8 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$8] = (x$6 = enc.encode, x$7 = ((val >>> 12 >>> 0) & 63) >>> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7]))));
  $			(x$11 = di + 2 >> 0, ((x$11 < 0 || x$11 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$11] = (x$9 = enc.encode, x$10 = ((val >>> 6 >>> 0) & 63) >>> 0, ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10]))));
  J			(x$14 = di + 3 >> 0, ((x$14 < 0 || x$14 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$14] = (x$12 = enc.encode, x$13 = (val & 63) >>> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13]))));
  n			si = si + (3) >> 0;
  x			di = di + (4) >> 0;
    		}
  �		remain = src.$length - si >> 0;
    		if (remain === 0) {
  �			return;
    		}
  �		val$1 = (((x$15 = si + 0 >> 0, ((x$15 < 0 || x$15 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$15])) >>> 0)) << 16 >>> 0;
    		if (remain === 2) {
  			val$1 = (val$1 | (((((x$16 = si + 1 >> 0, ((x$16 < 0 || x$16 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$16])) >>> 0)) << 8 >>> 0))) >>> 0;
    		}
  0		(x$19 = di + 0 >> 0, ((x$19 < 0 || x$19 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$19] = (x$17 = enc.encode, x$18 = ((val$1 >>> 18 >>> 0) & 63) >>> 0, ((x$18 < 0 || x$18 >= x$17.length) ? ($throwRuntimeError("index out of range"), undefined) : x$17[x$18]))));
  V		(x$22 = di + 1 >> 0, ((x$22 < 0 || x$22 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$22] = (x$20 = enc.encode, x$21 = ((val$1 >>> 12 >>> 0) & 63) >>> 0, ((x$21 < 0 || x$21 >= x$20.length) ? ($throwRuntimeError("index out of range"), undefined) : x$20[x$21]))));
    		_1 = remain;
    		if (_1 === (2)) {
  �			(x$25 = di + 2 >> 0, ((x$25 < 0 || x$25 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$25] = (x$23 = enc.encode, x$24 = ((val$1 >>> 6 >>> 0) & 63) >>> 0, ((x$24 < 0 || x$24 >= x$23.length) ? ($throwRuntimeError("index out of range"), undefined) : x$23[x$24]))));
    			if (!((enc.padChar === -1))) {
  �				(x$26 = di + 3 >> 0, ((x$26 < 0 || x$26 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$26] = ((enc.padChar << 24 >>> 24))));
    			}
    		} else if (_1 === (1)) {
    			if (!((enc.padChar === -1))) {
  -				(x$27 = di + 2 >> 0, ((x$27 < 0 || x$27 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$27] = ((enc.padChar << 24 >>> 24))));
  N				(x$28 = di + 3 >> 0, ((x$28 < 0 || x$28 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$28] = ((enc.padChar << 24 >>> 24))));
    			}
    		}
    	};
	Encoding.prototype.Encode = function(dst, src) { return this.$val.Encode(dst, src); };
Encodingencoding/base64.Encoding *(*encoding/base64.Encoding).EncodeToString �F	Encoding.ptr.prototype.EncodeToString = function(src) {
		var buf, enc, src;
		enc = this;
  �		buf = $makeSlice(sliceType, enc.EncodedLen(src.$length));
  		enc.Encode(buf, src);
  +		return ($bytesToString(buf));
    	};
	Encoding.prototype.EncodeToString = function(src) { return this.$val.EncodeToString(src); };
Encodingencoding/base64.Encodingencoding/base64.sliceType  (*encoding/base64.encoder).Write ��	encoder.ptr.prototype.Write = function(p) {
		var _q, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, e, err, i, i$1, n, nn, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; err = $f.err; i = $f.i; i$1 = $f.i$1; n = $f.n; nn = $f.nn; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    			_tmp = 0;
			_tmp$1 = e.err;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  �		/* */ if (e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (e.nbuf > 0) { */ case 1:
  �			i = 0;
  �			i = 0;
			while (true) {
				if (!(i < p.$length && e.nbuf < 3)) { break; }
  �				(x = e.buf, x$1 = e.nbuf, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i])));
  �				e.nbuf = e.nbuf + (1) >> 0;
  �				i = i + (1) >> 0;
    			}
  �			n = n + (i) >> 0;
  �			p = $subslice(p, i);
    			if (e.nbuf < 3) {
  				$s = -1; return [n, err];
    			}
  (			e.enc.Encode(new sliceType(e.out), new sliceType(e.buf));
  N			_r = e.w.Write($subslice(new sliceType(e.out), 0, 4)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
    			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    				_tmp$2 = n;
				_tmp$3 = e.err;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
  �			e.nbuf = 0;
    		/* } */ case 2:
  �		/* while (true) { */ case 4:
			/* if (!(p.$length >= 3)) { break; } */ if(!(p.$length >= 3)) { $s = 5; continue; }
  �			nn = 768;
    			if (nn > p.$length) {
  				nn = p.$length;
  				nn = nn - ((_r$1 = nn % 3, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"))) >> 0;
    			}
  '			e.enc.Encode(new sliceType(e.out), $subslice(p, 0, nn));
  K			_r$2 = e.w.Write($subslice(new sliceType(e.out), 0, ($imul((_q = nn / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 4)))); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			e.err = _tuple$1[1];
    			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    				_tmp$4 = n;
				_tmp$5 = e.err;
				n = _tmp$4;
				err = _tmp$5;
				$s = -1; return [n, err];
    			}
  �			n = n + (nn) >> 0;
  �			p = $subslice(p, nn);
    		$s = 4; continue;
		case 5:
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < p.$length)) { break; }
  �			(x$2 = e.buf, ((i$1 < 0 || i$1 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$1] = ((i$1 < 0 || i$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i$1])));
  �			i$1 = i$1 + (1) >> 0;
    		}
  �		e.nbuf = p.$length;
  		n = n + (p.$length) >> 0;
  		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Write }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.nn = nn; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Write = function(p) { return this.$val.Write(p); };
encoderencoding/base64.encoderencoding/base64.sliceType  (*encoding/base64.encoder).Close �o	encoder.ptr.prototype.Close = function() {
		var _r, _tuple, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �		/* */ if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { */ case 1:
  			e.enc.Encode(new sliceType(e.out), $subslice(new sliceType(e.buf), 0, e.nbuf));
  9			_r = e.w.Write($subslice(new sliceType(e.out), 0, e.enc.EncodedLen(e.nbuf))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
  r			e.nbuf = 0;
    		/* } */ case 2:
  �		$s = -1; return e.err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Close }; } $f._r = _r; $f._tuple = _tuple; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Close = function() { return this.$val.Close(); };
encoderencoding/base64.encoderencoding/base64.sliceType encoding/base64.NewEncoderencoding/base64
NewEncoder 
NewEncoder��	NewEncoder = function(enc, w) {
		var enc, w;
  �		return new encoder.ptr($ifaceNil, enc, w, arrayType$2.zero(), 0, arrayType$3.zero());
    	};
	$pkg.NewEncoder = NewEncoder;

NewEncoderencoding/base64.Encodingencoding/base64.NewEncoderencoding/base64.arrayType$2encoding/base64.arrayType$3encoding/base64.encoderencoding/base64.ptrType &(*encoding/base64.Encoding).EncodedLen �	Encoding.ptr.prototype.EncodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
    		if (enc.padChar === -1) {
  �			return (_q = ((($imul(n, 8)) + 5 >> 0)) / 6, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  		return $imul((_q$1 = ((n + 2 >> 0)) / 3, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 4);
    	};
	Encoding.prototype.EncodedLen = function(n) { return this.$val.EncodedLen(n); };
Encodingencoding/base64.Encoding )(encoding/base64.CorruptInputError).Error �	CorruptInputError.prototype.Error = function() {
		var e;
		e = this;
  �		return "illegal base64 data at input byte " + strconv.FormatInt((new $Int64(e.$high, e.$low)), 10);
    	};
	$ptrType(CorruptInputError).prototype.Error = function() { return this.$get().Error(); };
CorruptInputError!encoding/base64.CorruptInputErrorstrconv.FormatInt )(*encoding/base64.Encoding).decodeQuantum ��	Encoding.ptr.prototype.decodeQuantum = function(dst, src, si) {
		var _1, _2, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, dbuf, dlen, dst, enc, err, in$1, j, n, nsi, out, si, src, val, x;
		nsi = 0;
		n = 0;
		err = $ifaceNil;
		enc = this;
  �		dbuf = arrayType$4.zero();
  �		dlen = 4;
  �		$unused(enc.decodeMap);
  �		j = 0;
		while (true) {
			if (!(j < 4)) { break; }
    			if (src.$length === si) {
    				if ((j === 0)) {
    					_tmp = si;
					_tmp$1 = 0;
					_tmp$2 = $ifaceNil;
					nsi = _tmp;
					n = _tmp$1;
					err = _tmp$2;
					return [nsi, n, err];
    				} else if (((j === 1)) || (!((enc.padChar === -1)))) {
    					_tmp$3 = si;
					_tmp$4 = 0;
					_tmp$5 = (new CorruptInputError(0, (si - j >> 0)));
					nsi = _tmp$3;
					n = _tmp$4;
					err = _tmp$5;
					return [nsi, n, err];
    				}
  �				dlen = j;
  �				break;
    			}
  �			in$1 = ((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]);
  �			si = si + (1) >> 0;
  �			out = (x = enc.decodeMap, ((in$1 < 0 || in$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[in$1]));
    			if (!((out === 255))) {
   				((j < 0 || j >= dbuf.length) ? ($throwRuntimeError("index out of range"), undefined) : dbuf[j] = out);
  				j = j + (1) >> 0;
    				continue;
    			}
    			if ((in$1 === 10) || (in$1 === 13)) {
   ^				j = j - (1) >> 0;
  				j = j + (1) >> 0;
    				continue;
    			}
    			if (!((((in$1 >> 0)) === enc.padChar))) {
    				_tmp$6 = si;
				_tmp$7 = 0;
				_tmp$8 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$6;
				n = _tmp$7;
				err = _tmp$8;
				return [nsi, n, err];
    			}
    			_1 = j;
    			if ((_1 === (0)) || (_1 === (1))) {
    				_tmp$9 = si;
				_tmp$10 = 0;
				_tmp$11 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$9;
				n = _tmp$10;
				err = _tmp$11;
				return [nsi, n, err];
    			} else if (_1 === (2)) {
  !�				while (true) {
					if (!(si < src.$length && ((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 10) || (((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 13)))) { break; }
  !�					si = si + (1) >> 0;
    				}
    				if (si === src.$length) {
    					_tmp$12 = si;
					_tmp$13 = 0;
					_tmp$14 = (new CorruptInputError(0, src.$length));
					nsi = _tmp$12;
					n = _tmp$13;
					err = _tmp$14;
					return [nsi, n, err];
    				}
    				if (!((((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) >> 0)) === enc.padChar))) {
    					_tmp$15 = si;
					_tmp$16 = 0;
					_tmp$17 = (new CorruptInputError(0, (si - 1 >> 0)));
					nsi = _tmp$15;
					n = _tmp$16;
					err = _tmp$17;
					return [nsi, n, err];
    				}
  "�				si = si + (1) >> 0;
    			}
  "�			while (true) {
				if (!(si < src.$length && ((((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 10) || (((si < 0 || si >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + si]) === 13)))) { break; }
  #3				si = si + (1) >> 0;
    			}
    			if (si < src.$length) {
  #k				err = (new CorruptInputError(0, si));
    			}
  #�			dlen = j;
  #�			break;
    		}
  #�		val = ((((((((dbuf[0] >>> 0)) << 18 >>> 0) | (((dbuf[1] >>> 0)) << 12 >>> 0)) >>> 0) | (((dbuf[2] >>> 0)) << 6 >>> 0)) >>> 0) | ((dbuf[3] >>> 0))) >>> 0;
  $"		_tmp$18 = (((val >>> 0 >>> 0) << 24 >>> 24));
		_tmp$19 = (((val >>> 8 >>> 0) << 24 >>> 24));
		_tmp$20 = (((val >>> 16 >>> 0) << 24 >>> 24));
		dbuf[2] = _tmp$18;
		dbuf[1] = _tmp$19;
		dbuf[0] = _tmp$20;
    		_2 = dlen;
    		if (_2 === (4)) {
  $�			(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = dbuf[2]);
  $�			dbuf[2] = 0;
  $�			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = dbuf[1]);
    			if (enc.strict && !((dbuf[2] === 0))) {
    				_tmp$21 = si;
				_tmp$22 = 0;
				_tmp$23 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$21;
				n = _tmp$22;
				err = _tmp$23;
				return [nsi, n, err];
    			}
  %			dbuf[1] = 0;
  %C			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
    			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
    				_tmp$24 = si;
				_tmp$25 = 0;
				_tmp$26 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$24;
				n = _tmp$25;
				err = _tmp$26;
				return [nsi, n, err];
    			}
    		} else if (_2 === (3)) {
  $�			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = dbuf[1]);
    			if (enc.strict && !((dbuf[2] === 0))) {
    				_tmp$27 = si;
				_tmp$28 = 0;
				_tmp$29 = (new CorruptInputError(0, (si - 1 >> 0)));
				nsi = _tmp$27;
				n = _tmp$28;
				err = _tmp$29;
				return [nsi, n, err];
    			}
  %			dbuf[1] = 0;
  %C			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
    			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
    				_tmp$30 = si;
				_tmp$31 = 0;
				_tmp$32 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$30;
				n = _tmp$31;
				err = _tmp$32;
				return [nsi, n, err];
    			}
    		} else if (_2 === (2)) {
  %C			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = dbuf[0]);
    			if (enc.strict && (!((dbuf[1] === 0)) || !((dbuf[2] === 0)))) {
    				_tmp$33 = si;
				_tmp$34 = 0;
				_tmp$35 = (new CorruptInputError(0, (si - 2 >> 0)));
				nsi = _tmp$33;
				n = _tmp$34;
				err = _tmp$35;
				return [nsi, n, err];
    			}
    		}
    		_tmp$36 = si;
		_tmp$37 = dlen - 1 >> 0;
		_tmp$38 = err;
		nsi = _tmp$36;
		n = _tmp$37;
		err = _tmp$38;
		return [nsi, n, err];
    	};
	Encoding.prototype.decodeQuantum = function(dst, src, si) { return this.$val.decodeQuantum(dst, src, si); };
EncodingdecodeQuantum~!encoding/base64.CorruptInputErrorencoding/base64.Encodingencoding/base64.arrayType$4 ((*encoding/base64.Encoding).DecodeString ��	Encoding.ptr.prototype.DecodeString = function(s) {
		var _tuple, dbuf, enc, err, n, s;
		enc = this;
  &]		dbuf = $makeSlice(sliceType, enc.DecodedLen(s.length));
  &�		_tuple = enc.Decode(dbuf, (new sliceType($stringToBytes(s))));
		n = _tuple[0];
		err = _tuple[1];
  &�		return [$subslice(dbuf, 0, n), err];
    	};
	Encoding.prototype.DecodeString = function(s) { return this.$val.DecodeString(s); };
Encodingencoding/base64.Encodingencoding/base64.sliceType (*encoding/base64.decoder).Read ��	decoder.ptr.prototype.Read = function(p) {
		var _q, _q$1, _q$2, _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, d, err, n, nn, nr, nw, nw$1, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; d = $f.d; err = $f.err; n = $f.n; nn = $f.nn; nr = $f.nr; nw = $f.nw; nw$1 = $f.nw$1; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
    		if (d.out.$length > 0) {
  (3			n = $copySlice(p, d.out);
  (H			d.out = $subslice(d.out, n);
    			_tmp = n;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
    		if (!($interfaceIsEqual(d.err, $ifaceNil))) {
    			_tmp$2 = 0;
			_tmp$3 = d.err;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
  (�		/* while (true) { */ case 1:
			/* if (!(d.nbuf < 4 && $interfaceIsEqual(d.readErr, $ifaceNil))) { break; } */ if(!(d.nbuf < 4 && $interfaceIsEqual(d.readErr, $ifaceNil))) { $s = 2; continue; }
  )			nn = $imul((_q = p.$length / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 4);
    			if (nn < 4) {
  )E				nn = 4;
    			}
    			if (nn > 1024) {
  )j				nn = 1024;
    			}
  )�			_r = d.r.Read($subslice(new sliceType(d.buf), d.nbuf, nn)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			nn = _tuple[0];
			d.readErr = _tuple[1];
  )�			d.nbuf = d.nbuf + (nn) >> 0;
    		$s = 1; continue;
		case 2:
    		if (d.nbuf < 4) {
    			if ((d.enc.padChar === -1) && d.nbuf > 0) {
  *4				nw = 0;
  *>				_tuple$1 = d.enc.Decode(new sliceType(d.outbuf), $subslice(new sliceType(d.buf), 0, d.nbuf));
				nw = _tuple$1[0];
				d.err = _tuple$1[1];
  *w				d.nbuf = 0;
  *�				d.out = $subslice(new sliceType(d.outbuf), 0, nw);
  *�				n = $copySlice(p, d.out);
  *�				d.out = $subslice(d.out, n);
    				if (n > 0 || (p.$length === 0) && d.out.$length > 0) {
    					_tmp$4 = n;
					_tmp$5 = $ifaceNil;
					n = _tmp$4;
					err = _tmp$5;
					$s = -1; return [n, err];
    				}
    				if (!($interfaceIsEqual(d.err, $ifaceNil))) {
    					_tmp$6 = 0;
					_tmp$7 = d.err;
					n = _tmp$6;
					err = _tmp$7;
					$s = -1; return [n, err];
    				}
    			}
  +@			d.err = d.readErr;
    			if ($interfaceIsEqual(d.err, io.EOF) && d.nbuf > 0) {
  +z				d.err = io.ErrUnexpectedEOF;
    			}
    			_tmp$8 = 0;
			_tmp$9 = d.err;
			n = _tmp$8;
			err = _tmp$9;
			$s = -1; return [n, err];
    		}
  +�		nr = $imul((_q$1 = d.nbuf / 4, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 4);
  ,		nw$1 = $imul((_q$2 = d.nbuf / 4, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")), 3);
    		if (nw$1 > p.$length) {
  ,0			_tuple$2 = d.enc.Decode(new sliceType(d.outbuf), $subslice(new sliceType(d.buf), 0, nr));
			nw$1 = _tuple$2[0];
			d.err = _tuple$2[1];
  ,d			d.out = $subslice(new sliceType(d.outbuf), 0, nw$1);
  ,|			n = $copySlice(p, d.out);
  ,�			d.out = $subslice(d.out, n);
    		} else {
  ,�			_tuple$3 = d.enc.Decode(p, $subslice(new sliceType(d.buf), 0, nr));
			n = _tuple$3[0];
			d.err = _tuple$3[1];
    		}
  ,�		d.nbuf = d.nbuf - (nr) >> 0;
  ,�		$copySlice($subslice(new sliceType(d.buf), 0, d.nbuf), $subslice(new sliceType(d.buf), nr));
    		_tmp$10 = n;
		_tmp$11 = d.err;
		n = _tmp$10;
		err = _tmp$11;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.Read }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.d = d; $f.err = err; $f.n = n; $f.nn = nn; $f.nr = nr; $f.nw = nw; $f.nw$1 = nw$1; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.Read = function(p) { return this.$val.Read(p); };
decoderencoding/base64.decoderencoding/base64.sliceTypeio.EOFio.ErrUnexpectedEOF "(*encoding/base64.Encoding).Decode �M	Encoding.ptr.prototype.Decode = function(dst, src) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, dn, dn$1, dst, enc, err, n, ninc, ninc$1, ninc$2, ok, ok$1, si, src, src2, src2$1, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		n = 0;
		err = $ifaceNil;
		enc = this;
    		if (src.$length === 0) {
    			_tmp = 0;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
  /d		$unused(enc.decodeMap);
  /x		si = 0;
  /�		while (true) {
			if (!(false && (src.$length - si >> 0) >= 8 && (dst.$length - n >> 0) >= 8)) { break; }
  /�			src2 = $subslice(src, si, (si + 8 >> 0));
  /�			_tuple = assemble64((x = enc.decodeMap, x$1 = (0 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 0]), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])), (x$2 = enc.decodeMap, x$3 = (1 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 1]), ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])), (x$4 = enc.decodeMap, x$5 = (2 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 2]), ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])), (x$6 = enc.decodeMap, x$7 = (3 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 3]), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])), (x$8 = enc.decodeMap, x$9 = (4 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 4]), ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])), (x$10 = enc.decodeMap, x$11 = (5 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 5]), ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11])), (x$12 = enc.decodeMap, x$13 = (6 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 6]), ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13])), (x$14 = enc.decodeMap, x$15 = (7 >= src2.$length ? ($throwRuntimeError("index out of range"), undefined) : src2.$array[src2.$offset + 7]), ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15])));
			dn = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  0�				$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(dst, n), dn);
  1				n = n + (6) >> 0;
  1				si = si + (8) >> 0;
    			} else {
  1,				ninc = 0;
  18				_tuple$1 = enc.decodeQuantum($subslice(dst, n), src, si);
				si = _tuple$1[0];
				ninc = _tuple$1[1];
				err = _tuple$1[2];
  1o				n = n + (ninc) >> 0;
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					_tmp$2 = n;
					_tmp$3 = err;
					n = _tmp$2;
					err = _tmp$3;
					return [n, err];
    				}
    			}
    		}
  1�		while (true) {
			if (!((src.$length - si >> 0) >= 4 && (dst.$length - n >> 0) >= 4)) { break; }
  1�			src2$1 = $subslice(src, si, (si + 4 >> 0));
  1�			_tuple$2 = assemble32((x$16 = enc.decodeMap, x$17 = (0 >= src2$1.$length ? ($throwRuntimeError("index out of range"), undefined) : src2$1.$array[src2$1.$offset + 0]), ((x$17 < 0 || x$17 >= x$16.length) ? ($throwRuntimeError("index out of range"), undefined) : x$16[x$17])), (x$18 = enc.decodeMap, x$19 = (1 >= src2$1.$length ? ($throwRuntimeError("index out of range"), undefined) : src2$1.$array[src2$1.$offset + 1]), ((x$19 < 0 || x$19 >= x$18.length) ? ($throwRuntimeError("index out of range"), undefined) : x$18[x$19])), (x$20 = enc.decodeMap, x$21 = (2 >= src2$1.$length ? ($throwRuntimeError("index out of range"), undefined) : src2$1.$array[src2$1.$offset + 2]), ((x$21 < 0 || x$21 >= x$20.length) ? ($throwRuntimeError("index out of range"), undefined) : x$20[x$21])), (x$22 = enc.decodeMap, x$23 = (3 >= src2$1.$length ? ($throwRuntimeError("index out of range"), undefined) : src2$1.$array[src2$1.$offset + 3]), ((x$23 < 0 || x$23 >= x$22.length) ? ($throwRuntimeError("index out of range"), undefined) : x$22[x$23])));
			dn$1 = _tuple$2[0];
			ok$1 = _tuple$2[1];
    			if (ok$1) {
  2�				$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(dst, n), dn$1);
  2�				n = n + (3) >> 0;
  2�				si = si + (4) >> 0;
    			} else {
  2�				ninc$1 = 0;
  2�				_tuple$3 = enc.decodeQuantum($subslice(dst, n), src, si);
				si = _tuple$3[0];
				ninc$1 = _tuple$3[1];
				err = _tuple$3[2];
  3				n = n + (ninc$1) >> 0;
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					_tmp$4 = n;
					_tmp$5 = err;
					n = _tmp$4;
					err = _tmp$5;
					return [n, err];
    				}
    			}
    		}
  3R		while (true) {
			if (!(si < src.$length)) { break; }
  3l			ninc$2 = 0;
  3w			_tuple$4 = enc.decodeQuantum($subslice(dst, n), src, si);
			si = _tuple$4[0];
			ninc$2 = _tuple$4[1];
			err = _tuple$4[2];
  3�			n = n + (ninc$2) >> 0;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$6 = n;
				_tmp$7 = err;
				n = _tmp$6;
				err = _tmp$7;
				return [n, err];
    			}
    		}
    		_tmp$8 = n;
		_tmp$9 = err;
		n = _tmp$8;
		err = _tmp$9;
		return [n, err];
    	};
	Encoding.prototype.Decode = function(dst, src) { return this.$val.Decode(dst, src); };
Encodingencoding/base64.Encodingencoding/base64.assemble32encoding/base64.assemble64encoding/base64.decodeQuantum~encoding/binary.BigEndianencoding/binary.bigEndian encoding/base64.assemble32encoding/base64
assemble32 
assemble32�	assemble32 = function(n1, n2, n3, n4) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, dn, n1, n2, n3, n4, ok;
		dn = 0;
		ok = false;
    		if (((((((n1 | n2) >>> 0) | n3) >>> 0) | n4) >>> 0) === 255) {
    			_tmp = 0;
			_tmp$1 = false;
			dn = _tmp;
			ok = _tmp$1;
			return [dn, ok];
    		}
    		_tmp$2 = ((((((((n1 >>> 0)) << 26 >>> 0) | (((n2 >>> 0)) << 20 >>> 0)) >>> 0) | (((n3 >>> 0)) << 14 >>> 0)) >>> 0) | (((n4 >>> 0)) << 8 >>> 0)) >>> 0;
		_tmp$3 = true;
		dn = _tmp$2;
		ok = _tmp$3;
		return [dn, ok];
    	};

assemble32encoding/base64.assemble32 encoding/base64.assemble64encoding/base64
assemble64 
assemble64��	assemble64 = function(n1, n2, n3, n4, n5, n6, n7, n8) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, dn, n1, n2, n3, n4, n5, n6, n7, n8, ok, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		dn = new $Uint64(0, 0);
		ok = false;
    		if (((((((((((((((n1 | n2) >>> 0) | n3) >>> 0) | n4) >>> 0) | n5) >>> 0) | n6) >>> 0) | n7) >>> 0) | n8) >>> 0) === 255) {
    			_tmp = new $Uint64(0, 0);
			_tmp$1 = false;
			dn = _tmp;
			ok = _tmp$1;
			return [dn, ok];
    		}
    		_tmp$2 = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = $shiftLeft64((new $Uint64(0, n1)), 58), x$7 = $shiftLeft64((new $Uint64(0, n2)), 52), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, n3)), 46), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, n4)), 40), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, n5)), 34), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, n6)), 28), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, n7)), 22), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, n8)), 16), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
		_tmp$3 = true;
		dn = _tmp$2;
		ok = _tmp$3;
		return [dn, ok];
    	};

assemble64encoding/base64.assemble64 .(*encoding/base64.newlineFilteringReader).Read �e	newlineFilteringReader.ptr.prototype.Read = function(p) {
		var _i, _r, _r$1, _ref, _tuple, _tuple$1, b, err, i, n, offset, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; err = $f.err; i = $f.i; n = $f.n; offset = $f.offset; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  8g		_r = r.wrapped.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  8�		/* while (true) { */ case 2:
			/* if (!(n > 0)) { break; } */ if(!(n > 0)) { $s = 3; continue; }
  8�			offset = 0;
  8�			_ref = $subslice(p, 0, n);
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (!((b === 13)) && !((b === 10))) {
    					if (!((i === offset))) {
  8�						((offset < 0 || offset >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + offset] = b);
    					}
  9					offset = offset + (1) >> 0;
    				}
    				_i++;
			}
    			if (offset > 0) {
  92				$s = -1; return [offset, err];
    			}
  9�			_r$1 = r.wrapped.Read(p); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			n = _tuple$1[0];
			err = _tuple$1[1];
    		$s = 2; continue;
		case 3:
  9�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newlineFilteringReader.ptr.prototype.Read }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.err = err; $f.i = i; $f.n = n; $f.offset = offset; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	newlineFilteringReader.prototype.Read = function(p) { return this.$val.Read(p); };
newlineFilteringReader&encoding/base64.newlineFilteringReader encoding/base64.NewDecoderencoding/base64
NewDecoder 
NewDecoder��	NewDecoder = function(enc, r) {
		var enc, r;
  :		return new decoder.ptr($ifaceNil, $ifaceNil, enc, new newlineFilteringReader.ptr(r), arrayType$3.zero(), 0, sliceType.nil, arrayType$5.zero());
    	};
	$pkg.NewDecoder = NewDecoder;

NewDecoderencoding/base64.NewDecoderencoding/base64.arrayType$3encoding/base64.arrayType$5encoding/base64.decoder&encoding/base64.newlineFilteringReaderencoding/base64.ptrTypeencoding/base64.sliceType &(*encoding/base64.Encoding).DecodedLen ��	Encoding.ptr.prototype.DecodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
    		if (enc.padChar === -1) {
  ;d			return (_q = ($imul(n, 6)) / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  ;�		return $imul((_q$1 = n / 4, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 3);
    	};
	Encoding.prototype.DecodedLen = function(n) { return this.$val.DecodedLen(n); };
Encodingencoding/base64.Encoding �P{"Base":15318,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/base64/base64.go","Base":1,"Size":15316,"Lines":[0,55,109,159,160,231,246,247,256,275,281,292,294,295,298,311,315,316,384,451,519,589,652,675,695,716,732,748,750,751,759,812,849,851,852,937,1022,1023,1099,1177,1205,1273,1326,1371,1396,1446,1449,1486,1534,1591,1595,1598,1599,1619,1643,1671,1672,1713,1737,1740,1777,1813,1816,1826,1828,1829,1891,1963,2023,2094,2111,2169,2228,2255,2258,2259,2299,2337,2379,2383,2386,2387,2410,2423,2425,2426,2488,2556,2629,2632,2698,2732,2773,2792,2805,2807,2808,2870,2883,2924,2925,2994,3042,3083,3084,3149,3188,3253,3309,3310,3391,3439,3504,3560,3561,3564,3575,3579,3580,3634,3672,3675,3733,3794,3847,3894,3914,3923,3926,3997,4070,4119,4135,4136,4152,4177,4191,4238,4306,4307,4346,4385,4423,4458,4459,4469,4479,4482,4483,4508,4526,4535,4538,4572,4602,4620,4650,4653,4654,4692,4730,4731,4748,4757,4795,4827,4860,4864,4873,4905,4938,4971,4975,4978,4980,4981,5035,5092,5139,5161,5181,5183,5184,5206,5218,5234,5250,5306,5349,5383,5385,5386,5441,5460,5478,5481,5482,5502,5519,5531,5576,5600,5612,5616,5625,5637,5655,5665,5669,5704,5757,5776,5780,5793,5796,5797,5824,5843,5870,5889,5904,5920,5924,5957,6018,6037,6041,6051,6064,6067,6068,6089,6120,6138,6141,6158,6171,6179,6181,6182,6236,6289,6323,6380,6413,6454,6511,6524,6527,6541,6543,6544,6611,6683,6743,6811,6840,6901,6934,6936,6937,7002,7037,7082,7113,7174,7177,7242,7244,7245,7248,7259,7263,7264,7293,7294,7338,7417,7419,7420,7495,7568,7589,7666,7699,7785,7830,7848,7859,7860,7904,7923,7924,7958,7980,7992,8008,8030,8072,8116,8121,8133,8142,8146,8162,8169,8170,8197,8216,8233,8245,8249,8250,8282,8289,8301,8305,8306,8337,8380,8384,8385,8432,8445,8458,8482,8525,8535,8594,8619,8682,8691,8696,8719,8745,8791,8796,8833,8858,8902,8907,8908,8916,8920,8921,8945,9007,9015,9019,9040,9063,9094,9098,9109,9117,9120,9121,9167,9248,9319,9334,9343,9362,9376,9390,9399,9418,9452,9495,9499,9513,9527,9536,9555,9607,9650,9654,9657,9658,9684,9686,9687,9757,9819,9865,9904,9926,9928,9929,9951,9966,10002,10021,10040,10078,10091,10134,10162,10164,10165,10219,10267,10288,10309,10329,10345,10348,10349,10368,10386,10389,10390,10466,10467,10486,10524,10547,10561,10571,10575,10598,10617,10621,10666,10681,10684,10685,10702,10750,10796,10810,10867,10881,10906,10928,10949,10996,11014,11019,11040,11060,11065,11069,11089,11126,11157,11161,11179,11182,11183,11247,11269,11291,11309,11361,11385,11406,11426,11436,11477,11480,11494,11528,11545,11547,11548,11612,11681,11749,11812,11860,11926,11946,11962,11965,11966,12036,12103,12130,12149,12150,12159,12227,12252,12279,12306,12333,12360,12387,12414,12441,12468,12495,12505,12548,12558,12569,12580,12596,12651,12664,12683,12701,12706,12710,12713,12714,12757,12782,12809,12836,12863,12890,12917,12927,12970,12980,12991,13002,13018,13073,13086,13105,13123,13128,13132,13135,13136,13157,13172,13226,13238,13256,13273,13277,13280,13295,13297,13298,13352,13410,13451,13511,13583,13612,13638,13656,13659,13684,13704,13724,13742,13749,13751,13752,13806,13864,13905,13981,14053,14082,14120,14138,14141,14166,14186,14206,14226,14246,14266,14286,14305,14312,14314,14315,14352,14371,14373,14374,14437,14466,14479,14493,14521,14552,14573,14592,14598,14611,14616,14620,14638,14660,14664,14717,14746,14749,14764,14766,14767,14821,14877,14935,14937,14938,15008,15060,15105,15136,15201,15220,15223,15296,15314],"Infos":null}]}
 