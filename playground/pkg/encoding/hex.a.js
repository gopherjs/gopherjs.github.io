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
GoLinkname�� Implementation�� 	Reference��   �n_��encoding/hexhexerrorsfmtiostrings�i ��dstsrc sxdatawWriterioWriteClosernErroreInvalidByteErrorrReaderWriteperrCloserReadClosehexDecodeDecodeString
DecodedLenDumpDumperEncodeEncodeToString
EncodedLen	ErrLength
NewDecoder
NewEncoderF         F  	 3  F    F  N    F  [ ^ F   l l  F  |  F  *  V  4T  , 2�   GF  E� � F  [ [   N T� * V T � Z � [ T �  a T� * V T �  f  T �l pw�#�0�A�N�^�i�t4z���� Z�G���$ errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  InvalidByteError	InvalidByteError = $pkg.InvalidByteError = $newType(1, $kindUint8, "hex.InvalidByteError", true, "encoding/hex", true, null);
m	InvalidByteError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
InvalidByteErrorencoding/hex.InvalidByteError  encoder�G	encoder = $pkg.encoder = $newType(0, $kindStruct, "hex.encoder", true, "encoding/hex", false, function(w_, err_, out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.err = $ifaceNil;
			this.out = arrayType.zero();
			return;
		}
		this.w = w_;
		this.err = err_;
		this.out = out_;
	});
v	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
�	encoder.init("encoding/hex", [{prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: arrayType, tag: ""}]);
encoderencoding/hex.arrayTypeencoding/hex.encoderencoding/hex.ptrType$1encoding/hex.sliceType$1	io.Writer  decoder��	decoder = $pkg.decoder = $newType(0, $kindStruct, "hex.decoder", true, "encoding/hex", false, function(r_, err_, in$2_, arr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.err = $ifaceNil;
			this.in$2 = sliceType$1.nil;
			this.arr = arrayType.zero();
			return;
		}
		this.r = r_;
		this.err = err_;
		this.in$2 = in$2_;
		this.arr = arr_;
	});
t	ptrType$2.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
�x	decoder.init("encoding/hex", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "in$2", name: "in", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "arr", name: "arr", embedded: false, exported: false, typ: arrayType, tag: ""}]);
decoderencoding/hex.arrayTypeencoding/hex.decoderencoding/hex.ptrType$2encoding/hex.sliceType$1	io.Reader  dumper��	dumper = $pkg.dumper = $newType(0, $kindStruct, "hex.dumper", true, "encoding/hex", false, function(w_, rightChars_, buf_, used_, n_, closed_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.rightChars = arrayType$1.zero();
			this.buf = arrayType$2.zero();
			this.used = 0;
			this.n = 0;
			this.closed = false;
			return;
		}
		this.w = w_;
		this.rightChars = rightChars_;
		this.buf = buf_;
		this.used = used_;
		this.n = n_;
		this.closed = closed_;
	});
��	ptrType$3.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
�/	dumper.init("encoding/hex", [{prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "rightChars", name: "rightChars", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "used", name: "used", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "closed", name: "closed", embedded: false, exported: false, typ: $Bool, tag: ""}]);
dumperencoding/hex.arrayType$1encoding/hex.arrayType$2encoding/hex.dumperencoding/hex.ptrType$3encoding/hex.sliceType$1	io.Writer  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  ptrType&	ptrType = $ptrType(strings.Builder);
ptrTypestrings.Builder  	arrayType'	arrayType = $arrayType($Uint8, 1024);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint8, 18);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint8, 14);
arrayType$2  	ptrType$1 	ptrType$1 = $ptrType(encoder);
	ptrType$1encoding/hex.encoder  	ptrType$2 	ptrType$2 = $ptrType(decoder);
	ptrType$2encoding/hex.decoder  	ptrType$3	ptrType$3 = $ptrType(dumper);
	ptrType$3encoding/hex.dumper  	ErrLength  K  		$pkg.ErrLength = errors.New("encoding/hex: odd length hex string");
encoding/hex.ErrLength
errors.New encoding/hex.EncodedLenencoding/hex
EncodedLen 
EncodedLenh	EncodedLen = function(n) {
		var n;
  �		return $imul(n, 2);
    	};
	$pkg.EncodedLen = EncodedLen;

EncodedLenencoding/hex.EncodedLen encoding/hex.Encodeencoding/hexEncode Encode�	Encode = function(dst, src) {
		var _i, _ref, dst, j, src, v, x;
  �		j = 0;
  �		_ref = src;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			((j < 0 || j >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + j] = "0123456789abcdef".charCodeAt((v >>> 4 << 24 >>> 24)));
  			(x = j + 1 >> 0, ((x < 0 || x >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x] = "0123456789abcdef".charCodeAt(((v & 15) >>> 0))));
  .			j = j + (2) >> 0;
    			_i++;
		}
  9		return $imul(src.$length, 2);
    	};
	$pkg.Encode = Encode;
Encodeencoding/hex.Encode %(encoding/hex.InvalidByteError).Error �Q	InvalidByteError.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this.$val;
  �		_r = fmt.Sprintf("encoding/hex: invalid byte: %#U", new sliceType([new $Int32(((e >> 0)))])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: InvalidByteError.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(InvalidByteError).prototype.Error = function() { return new InvalidByteError(this.$get()).Error(); };
InvalidByteErrorencoding/hex.InvalidByteErrorencoding/hex.sliceTypefmt.Sprintf encoding/hex.DecodedLenencoding/hex
DecodedLen 
DecodedLen��	DecodedLen = function(x) {
		var _q, x;
  �		return (_q = x / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    	};
	$pkg.DecodedLen = DecodedLen;

DecodedLenencoding/hex.DecodedLen encoding/hex.Decodeencoding/hexDecode Decode��	Decode = function(dst, src) {
		var _r, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, a, b, dst, i, j, ok, ok$1, src, x, x$1, x$2, x$3;
  		_tmp = 0;
		_tmp$1 = 1;
		i = _tmp;
		j = _tmp$1;
  #		while (true) {
			if (!(j < src.$length)) { break; }
  B			_tuple = fromHexChar((x = j - 1 >> 0, ((x < 0 || x >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x])));
			a = _tuple[0];
			ok = _tuple[1];
    			if (!ok) {
  o				return [i, new InvalidByteError((((x$1 = j - 1 >> 0, ((x$1 < 0 || x$1 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$1])) << 24 >>> 24)))];
    			}
  �			_tuple$1 = fromHexChar(((j < 0 || j >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + j]));
			b = _tuple$1[0];
			ok = _tuple$1[1];
    			if (!ok) {
  �				return [i, new InvalidByteError(((((j < 0 || j >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + j]) << 24 >>> 24)))];
    			}
  �			((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = ((((a << 4 << 24 >>> 24)) | b) >>> 0));
  			i = i + (1) >> 0;
  7			j = j + (2) >> 0;
    		}
    		if ((_r = src.$length % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 1) {
  �			_tuple$2 = fromHexChar((x$2 = j - 1 >> 0, ((x$2 < 0 || x$2 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$2])));
			ok$1 = _tuple$2[1];
    			if (!ok$1) {
  �				return [i, new InvalidByteError((((x$3 = j - 1 >> 0, ((x$3 < 0 || x$3 >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x$3])) << 24 >>> 24)))];
    			}
  �			return [i, $pkg.ErrLength];
    		}
  			return [i, $ifaceNil];
    	};
	$pkg.Decode = Decode;
Decodeencoding/hex.Decodeencoding/hex.ErrLengthencoding/hex.InvalidByteErrorencoding/hex.fromHexChar encoding/hex.fromHexCharencoding/hexfromHexChar fromHexChar�p	fromHexChar = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  	�			return [c - 48 << 24 >>> 24, true];
    		} else if (97 <= c && c <= 102) {
  	�			return [(c - 97 << 24 >>> 24) + 10 << 24 >>> 24, true];
    		} else if (65 <= c && c <= 70) {
  
$			return [(c - 65 << 24 >>> 24) + 10 << 24 >>> 24, true];
    		}
  
C		return [0, false];
    	};
fromHexCharencoding/hex.fromHexChar encoding/hex.EncodeToStringencoding/hexEncodeToString EncodeToString��	EncodeToString = function(src) {
		var dst, src;
  
�		dst = $makeSlice(sliceType$1, EncodedLen(src.$length));
  
�		Encode(dst, src);
  
�		return ($bytesToString(dst));
    	};
	$pkg.EncodeToString = EncodeToString;
EncodeToStringencoding/hex.Encodeencoding/hex.EncodeToStringencoding/hex.EncodedLenencoding/hex.sliceType$1 encoding/hex.DecodeStringencoding/hexDecodeString DecodeString�	DecodeString = function(s) {
		var _tuple, err, n, s, src;
  L		src = (new sliceType$1($stringToBytes(s)));
  �		_tuple = Decode(src, src);
		n = _tuple[0];
		err = _tuple[1];
  		return [$subslice(src, 0, n), err];
    	};
	$pkg.DecodeString = DecodeString;
DecodeStringencoding/hex.Decodeencoding/hex.DecodeStringencoding/hex.sliceType$1 encoding/hex.Dumpencoding/hexDump Dump�	Dump = function(data) {
		var _q, _r, _r$1, buf, data, dumper$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; buf = $f.buf; data = $f.data; dumper$1 = $f.dumper$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
    		if (data.$length === 0) {
  �			$s = -1; return "";
    		}
  		buf[0] = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  �		buf[0].Grow($imul(((1 + ((_q = ((data.$length - 1 >> 0)) / 16, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))) >> 0)), 79));
  		dumper$1 = Dumper(buf[0]);
   		_r = dumper$1.Write(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  4		_r$1 = dumper$1.Close(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  D		$s = -1; return buf[0].String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Dump }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f.buf = buf; $f.data = data; $f.dumper$1 = dumper$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Dump = Dump;
Dumpencoding/hex.Dumpencoding/hex.Dumperencoding/hex.ptrTypeencoding/hex.sliceType$1strings.Builder encoding/hex.NewEncoderencoding/hex
NewEncoder 
NewEncoder��	NewEncoder = function(w) {
		var w;
  �		return new encoder.ptr(w, $ifaceNil, arrayType.zero());
    	};
	$pkg.NewEncoder = NewEncoder;

NewEncoderencoding/hex.NewEncoderencoding/hex.arrayTypeencoding/hex.encoder (*encoding/hex.encoder).Write �a	encoder.ptr.prototype.Write = function(p) {
		var _q, _r, _tmp, _tmp$1, _tuple, chunkSize, e, encoded, err, n, p, written, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; chunkSize = $f.chunkSize; e = $f.e; encoded = $f.encoded; err = $f.err; n = $f.n; p = $f.p; written = $f.written; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		e = this;
  �		/* while (true) { */ case 1:
			/* if (!(p.$length > 0 && $interfaceIsEqual(e.err, $ifaceNil))) { break; } */ if(!(p.$length > 0 && $interfaceIsEqual(e.err, $ifaceNil))) { $s = 2; continue; }
  			chunkSize = 512;
    			if (p.$length < chunkSize) {
  S				chunkSize = p.$length;
    			}
  q			written = 0;
  			encoded = Encode(new sliceType$1(e.out), $subslice(p, 0, chunkSize));
  �			_r = e.w.Write($subslice(new sliceType$1(e.out), 0, encoded)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			written = _tuple[0];
			e.err = _tuple[1];
  �			n = n + ((_q = written / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))) >> 0;
  �			p = $subslice(p, chunkSize);
    		$s = 1; continue;
		case 2:
    		_tmp = n;
		_tmp$1 = e.err;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Write }; } $f._q = _q; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.chunkSize = chunkSize; $f.e = e; $f.encoded = encoded; $f.err = err; $f.n = n; $f.p = p; $f.written = written; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Write = function(p) { return this.$val.Write(p); };
encoderencoding/hex.Encodeencoding/hex.encoderencoding/hex.sliceType$1 encoding/hex.NewDecoderencoding/hex
NewDecoder 
NewDecoder��	NewDecoder = function(r) {
		var r;
  y		return new decoder.ptr(r, $ifaceNil, sliceType$1.nil, arrayType.zero());
    	};
	$pkg.NewDecoder = NewDecoder;

NewDecoderencoding/hex.NewDecoderencoding/hex.arrayTypeencoding/hex.decoderencoding/hex.sliceType$1 (*encoding/hex.decoder).Read ��	decoder.ptr.prototype.Read = function(p) {
		var _q, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, _tuple$2, d, err, n, numAvail, numCopy, numDec, numRead, ok, p, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; d = $f.d; err = $f.err; n = $f.n; numAvail = $f.numAvail; numCopy = $f.numCopy; numDec = $f.numDec; numRead = $f.numRead; ok = $f.ok; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
  		/* */ if (d.in$2.$length < 2 && $interfaceIsEqual(d.err, $ifaceNil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.in$2.$length < 2 && $interfaceIsEqual(d.err, $ifaceNil)) { */ case 1:
  +			_tmp = 0;
			_tmp$1 = 0;
			numCopy = _tmp;
			numRead = _tmp$1;
  B			numCopy = $copySlice(new sliceType$1(d.arr), d.in$2);
  �			_r = d.r.Read($subslice(new sliceType$1(d.arr), numCopy)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			numRead = _tuple[0];
			d.err = _tuple[1];
  �			d.in$2 = $subslice(new sliceType$1(d.arr), 0, (numCopy + numRead >> 0));
    			if ($interfaceIsEqual(d.err, io.EOF) && !(((_r$1 = d.in$2.$length % 2, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0))) {
  �				_tuple$1 = fromHexChar((x = d.in$2, x$1 = d.in$2.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])));
				ok = _tuple$1[1];
    				if (!ok) {
  1					d.err = new InvalidByteError((((x$2 = d.in$2, x$3 = d.in$2.$length - 1 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3])) << 24 >>> 24)));
    				} else {
  m					d.err = io.ErrUnexpectedEOF;
    				}
    			}
    		/* } */ case 2:
  �		numAvail = (_q = d.in$2.$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		if (p.$length > numAvail) {
  �			p = $subslice(p, 0, numAvail);
    		}
  		_tuple$2 = Decode(p, $subslice(d.in$2, 0, ($imul(p.$length, 2))));
		numDec = _tuple$2[0];
		err = _tuple$2[1];
  9		d.in$2 = $subslice(d.in$2, ($imul(2, numDec)));
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  c			_tmp$2 = sliceType$1.nil;
			_tmp$3 = err;
			d.in$2 = _tmp$2;
			d.err = _tmp$3;
    		}
    		if (d.in$2.$length < 2) {
    			_tmp$4 = numDec;
			_tmp$5 = d.err;
			n = _tmp$4;
			err = _tmp$5;
			$s = -1; return [n, err];
    		}
    		_tmp$6 = numDec;
		_tmp$7 = $ifaceNil;
		n = _tmp$6;
		err = _tmp$7;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.Read }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.d = d; $f.err = err; $f.n = n; $f.numAvail = numAvail; $f.numCopy = numCopy; $f.numDec = numDec; $f.numRead = numRead; $f.ok = ok; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.Read = function(p) { return this.$val.Read(p); };
decoderencoding/hex.Decodeencoding/hex.InvalidByteErrorencoding/hex.decoderencoding/hex.fromHexCharencoding/hex.sliceType$1io.EOFio.ErrUnexpectedEOF encoding/hex.Dumperencoding/hexDumper Dumper��	Dumper = function(w) {
		var w;
  �		return new dumper.ptr(w, arrayType$1.zero(), arrayType$2.zero(), 0, 0, false);
    	};
	$pkg.Dumper = Dumper;
Dumperencoding/hex.Dumperencoding/hex.arrayType$1encoding/hex.arrayType$2encoding/hex.dumper encoding/hex.toCharencoding/hextoChar toCharw	toChar = function(b) {
		var b;
    		if (b < 32 || b > 126) {
  			return 46;
    		}
  		return b;
    	};
toCharencoding/hex.toChar (*encoding/hex.dumper).Write �	dumper.ptr.prototype.Write = function(data) {
		var _i, _r, _r$1, _r$2, _ref, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, data, err, h, i, l, n, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; data = $f.data; err = $f.err; h = $f.h; i = $f.i; l = $f.l; n = $f.n; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		h = this;
    		if (h.closed) {
    			_tmp = 0;
			_tmp$1 = errors.New("encoding/hex: dumper closed");
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  f		_ref = data;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
  ~			/* */ if (h.used === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (h.used === 0) { */ case 3:
  �				h.buf[0] = (((h.n >>> 24 >>> 0) << 24 >>> 24));
  �				h.buf[1] = (((h.n >>> 16 >>> 0) << 24 >>> 24));
  				h.buf[2] = (((h.n >>> 8 >>> 0) << 24 >>> 24));
  6				h.buf[3] = ((h.n << 24 >>> 24));
  N				Encode($subslice(new sliceType$1(h.buf), 4), $subslice(new sliceType$1(h.buf), 0, 4));
  n				h.buf[12] = 32;
  �				h.buf[13] = 32;
  �				_r = h.w.Write($subslice(new sliceType$1(h.buf), 4)); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				err = _tuple[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  �					$s = -1; return [n, err];
    				}
    			/* } */ case 4:
  �			Encode(new sliceType$1(h.buf), $subslice(data, i, (i + 1 >> 0)));
  �			h.buf[2] = 32;
  			l = 3;
    			if (h.used === 7) {
  _				h.buf[3] = 32;
  q				l = 4;
    			} else if (h.used === 15) {
  �				h.buf[3] = 32;
  				h.buf[4] = 124;
  				l = 5;
    			}
  !			_r$1 = h.w.Write($subslice(new sliceType$1(h.buf), 0, l)); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			err = _tuple$1[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  T				$s = -1; return [n, err];
    			}
  a			n = n + (1) >> 0;
  g			(x = h.rightChars, x$1 = h.used, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = toChar(((i < 0 || i >= data.$length) ? ($throwRuntimeError("index out of range"), undefined) : data.$array[data.$offset + i]))));
  �			h.used = h.used + (1) >> 0;
  �			h.n = h.n + (1) >>> 0;
  �			/* */ if (h.used === 16) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (h.used === 16) { */ case 7:
  �				h.rightChars[16] = 124;
  �				h.rightChars[17] = 10;
  �				_r$2 = h.w.Write(new sliceType$1(h.rightChars)); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple$2 = _r$2;
				err = _tuple$2[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  (					$s = -1; return [n, err];
    				}
  7				h.used = 0;
    			/* } */ case 8:
    			_i++;
		$s = 1; continue;
		case 2:
  J		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dumper.ptr.prototype.Write }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.data = data; $f.err = err; $f.h = h; $f.i = i; $f.l = l; $f.n = n; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	dumper.prototype.Write = function(data) { return this.$val.Write(data); };
dumperencoding/hex.Encodeencoding/hex.dumperencoding/hex.sliceType$1encoding/hex.toChar
errors.New (*encoding/hex.dumper).Close �		dumper.ptr.prototype.Close = function() {
		var _r, _r$1, _tuple, _tuple$1, err, h, l, nBytes, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; h = $f.h; l = $f.l; nBytes = $f.nBytes; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		err = $ifaceNil;
		h = this;
    		if (h.closed) {
  �			$s = -1; return err;
    		}
  �		h.closed = true;
    		if (h.used === 0) {
  �			$s = -1; return err;
    		}
  		h.buf[0] = 32;
  		h.buf[1] = 32;
  &		h.buf[2] = 32;
  6		h.buf[3] = 32;
  F		h.buf[4] = 124;
  V		nBytes = h.used;
  h		/* while (true) { */ case 1:
			/* if (!(h.used < 16)) { break; } */ if(!(h.used < 16)) { $s = 2; continue; }
  |			l = 3;
    			if (h.used === 7) {
  �				l = 4;
    			} else if (h.used === 15) {
  �				l = 5;
    			}
  �			_r = h.w.Write($subslice(new sliceType$1(h.buf), 0, l)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				$s = -1; return err;
    			}
   				h.used = h.used + (1) >> 0;
    		$s = 1; continue;
		case 2:
   		(x = h.rightChars, ((nBytes < 0 || nBytes >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[nBytes] = 124));
   2		(x$1 = h.rightChars, x$2 = nBytes + 1 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = 10));
   Q		_r$1 = h.w.Write($subslice(new sliceType$1(h.rightChars), 0, (nBytes + 2 >> 0))); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		err = _tuple$1[1];
   ~		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dumper.ptr.prototype.Close }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.h = h; $f.l = l; $f.nBytes = nBytes; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	dumper.prototype.Close = function() { return this.$val.Close(); };
dumperencoding/hex.dumperencoding/hex.sliceType$1 ��{"Base":8328,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/encoding/hex/hex.go","Base":1,"Size":8326,"Lines":[0,55,109,159,160,221,233,234,243,253,260,266,277,279,280,316,317,384,419,463,464,512,569,644,687,722,730,755,781,811,820,823,844,846,847,909,942,1020,1086,1087,1178,1205,1206,1249,1313,1315,1316,1382,1417,1461,1462,1517,1573,1576,1629,1673,1729,1767,1811,1825,1855,1888,1899,1939,1943,1974,1985,2023,2027,2051,2057,2060,2082,2139,2203,2246,2286,2290,2312,2315,2330,2332,2333,2408,2448,2458,2486,2509,2537,2565,2593,2621,2624,2625,2642,2644,2645,2704,2745,2788,2806,2826,2828,2829,2904,2907,2966,3010,3061,3100,3146,3164,3222,3314,3342,3363,3365,3366,3446,3521,3553,3574,3586,3589,3590,3615,3687,3760,3800,3845,3846,3870,3890,3906,3927,3929,3930,4018,4042,4043,4065,4080,4091,4130,4132,4133,4219,4260,4283,4285,4286,4341,4375,4405,4431,4453,4457,4458,4476,4521,4567,4586,4606,4609,4626,4628,4629,4651,4666,4677,4730,4776,4778,4779,4858,4942,4983,5006,5008,5009,5063,5120,5156,5183,5246,5291,5324,5367,5420,5468,5480,5512,5517,5521,5524,5525,5571,5622,5641,5644,5687,5711,5728,5794,5797,5798,5818,5890,5893,5913,5915,5916,5994,6073,6082,6124,6146,6148,6149,6170,6192,6213,6234,6290,6333,6350,6352,6353,6380,6404,6417,6420,6430,6432,6433,6490,6505,6559,6562,6563,6591,6674,6756,6779,6798,6852,6873,6903,6933,6962,6986,7018,7037,7056,7089,7108,7119,7124,7128,7160,7177,7186,7205,7259,7277,7286,7313,7369,7405,7423,7441,7450,7454,7486,7504,7514,7518,7524,7565,7576,7584,7604,7630,7657,7696,7715,7726,7731,7745,7749,7752,7760,7762,7763,7802,7866,7881,7890,7893,7910,7928,7937,7940,7956,7972,7988,8004,8020,8038,8057,8066,8085,8094,8121,8130,8134,8166,8184,8194,8198,8209,8212,8240,8271,8316,8324],"Infos":null}]}
 