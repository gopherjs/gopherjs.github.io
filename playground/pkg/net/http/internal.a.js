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
GoLinkname�� Implementation�� 	Reference��   �X~��net/http/internalinternalbufiobyteserrorsfmtio�li �� WriterbufiorReaderiowWriteClosererrbufnwrSizebResetFlush	AvailableBufferedWritepnn	WriteBytec	WriteRunesizeWriteStringsReadFromReadCloserCloseinternalErrLineTooLongFlushAfterChunkWriterNewChunkedReaderNewChunkedWriterV  #  & T (  F  4  4   F  B  E  (   ,S   0   2B  ##########T U
 5 :l    < :n B   B :p    H :r    R :t    [ :v ax c (  f :z p    r :|  | (  � :~ �      � :� 4 0 (   � a� 0 ( T �  [ a� 0 ( T � � � B T �  �   T � � � ���( b ����� bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  chunkedReader��	chunkedReader = $pkg.chunkedReader = $newType(0, $kindStruct, "internal.chunkedReader", true, "net/http/internal", false, function(r_, n_, err_, buf_, checkEnd_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = ptrType.nil;
			this.n = new $Uint64(0, 0);
			this.err = $ifaceNil;
			this.buf = arrayType.zero();
			this.checkEnd = false;
			return;
		}
		this.r = r_;
		this.n = n_;
		this.err = err_;
		this.buf = buf_;
		this.checkEnd = checkEnd_;
	});
�Q	ptrType$2.methods = [{prop: "beginChunk", name: "beginChunk", pkg: "net/http/internal", typ: $funcType([], [], false)}, {prop: "chunkHeaderAvailable", name: "chunkHeaderAvailable", pkg: "net/http/internal", typ: $funcType([], [$Bool], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	chunkedReader.init("net/http/internal", [{prop: "r", name: "r", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "checkEnd", name: "checkEnd", embedded: false, exported: false, typ: $Bool, tag: ""}]);
chunkedReadernet/http/internal.arrayTypenet/http/internal.chunkedReadernet/http/internal.ptrTypenet/http/internal.ptrType$2net/http/internal.sliceType  chunkedWriter�	chunkedWriter = $pkg.chunkedWriter = $newType(0, $kindStruct, "internal.chunkedWriter", true, "net/http/internal", false, function(Wire_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Wire = $ifaceNil;
			return;
		}
		this.Wire = Wire_;
	});
��	ptrType$3.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
s	chunkedWriter.init("", [{prop: "Wire", name: "Wire", embedded: false, exported: true, typ: io.Writer, tag: ""}]);
chunkedWriter	io.Writernet/http/internal.chunkedWriternet/http/internal.ptrType$3net/http/internal.sliceType  FlushAfterChunkWriter�'	FlushAfterChunkWriter = $pkg.FlushAfterChunkWriter = $newType(0, $kindStruct, "internal.FlushAfterChunkWriter", true, "net/http/internal", true, function(Writer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Writer = ptrType$4.nil;
			return;
		}
		this.Writer = Writer_;
	});
~	FlushAfterChunkWriter.init("", [{prop: "Writer", name: "Writer", embedded: true, exported: true, typ: ptrType$4, tag: ""}]);
FlushAfterChunkWriterbufio.Writer'net/http/internal.FlushAfterChunkWriternet/http/internal.ptrType$4  ptrType#	ptrType = $ptrType(bufio.Reader);
ptrTypebufio.Reader  	arrayType$	arrayType = $arrayType($Uint8, 2);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  	ptrType$1.	ptrType$1 = $ptrType(FlushAfterChunkWriter);
	ptrType$1'net/http/internal.FlushAfterChunkWriter  	ptrType$2&	ptrType$2 = $ptrType(chunkedReader);
	ptrType$2net/http/internal.chunkedReader  	ptrType$3&	ptrType$3 = $ptrType(chunkedWriter);
	ptrType$3net/http/internal.chunkedWriter  	ptrType$4%	ptrType$4 = $ptrType(bufio.Writer);
	ptrType$4bufio.Writer  ErrLineTooLong  A  �		$pkg.ErrLineTooLong = errors.New("header line too long");

errors.New net/http/internal.ErrLineTooLong "net/http/internal.NewChunkedReadernet/http/internalNewChunkedReader NewChunkedReader�^	NewChunkedReader = function(r) {
		var _tuple, br, ok, r;
  �		_tuple = $assertType(r, ptrType, true);
		br = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  �			br = bufio.NewReader(r);
    		}
  �		return new chunkedReader.ptr(br, new $Uint64(0, 0), $ifaceNil, arrayType.zero(), false);
    	};
	$pkg.NewChunkedReader = NewChunkedReader;
NewChunkedReaderbufio.NewReaderbufio.Reader"net/http/internal.NewChunkedReadernet/http/internal.arrayTypenet/http/internal.chunkedReadernet/http/internal.ptrType -(*net/http/internal.chunkedReader).beginChunk �	chunkedReader.ptr.prototype.beginChunk = function() {
		var _r, _tuple, _tuple$1, cr, line, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; cr = $f.cr; line = $f.line; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cr = this;
  �		line = sliceType.nil;
  �		_r = readChunkLine(cr.r); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		cr.err = _tuple[1];
    		if (!($interfaceIsEqual(cr.err, $ifaceNil))) {
  6			$s = -1; return;
    		}
  A		_tuple$1 = parseHexUint(line);
		cr.n = _tuple$1[0];
		cr.err = _tuple$1[1];
    		if (!($interfaceIsEqual(cr.err, $ifaceNil))) {
  y			$s = -1; return;
    		}
    		if ((x = cr.n, (x.$high === 0 && x.$low === 0))) {
  �			cr.err = io.EOF;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: chunkedReader.ptr.prototype.beginChunk }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.cr = cr; $f.line = line; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	chunkedReader.prototype.beginChunk = function() { return this.$val.beginChunk(); };
chunkedReaderbeginChunk~io.EOFnet/http/internal.chunkedReadernet/http/internal.parseHexUintnet/http/internal.readChunkLinenet/http/internal.sliceType 7(*net/http/internal.chunkedReader).chunkHeaderAvailable �T	chunkedReader.ptr.prototype.chunkHeaderAvailable = function() {
		var _r, _tuple, cr, n, peek, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; cr = $f.cr; n = $f.n; peek = $f.peek; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cr = this;
  �		n = cr.r.Buffered();
  �		/* */ if (n > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n > 0) { */ case 1:
  			_r = cr.r.Peek(n); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			peek = _tuple[0];
   			$s = -1; return bytes.IndexByte(peek, 10) >= 0;
    		/* } */ case 2:
  L		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chunkedReader.ptr.prototype.chunkHeaderAvailable }; } $f._r = _r; $f._tuple = _tuple; $f.cr = cr; $f.n = n; $f.peek = peek; $f.$s = $s; $f.$r = $r; return $f;
	};
	chunkedReader.prototype.chunkHeaderAvailable = function() { return this.$val.chunkHeaderAvailable(); };
chunkedReaderchunkHeaderAvailable~bytes.IndexBytenet/http/internal.chunkedReader '(*net/http/internal.chunkedReader).Read �	chunkedReader.ptr.prototype.Read = function(b) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tuple, _tuple$1, _v, b, cr, err, n, n0, rbuf, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _v = $f._v; b = $f.b; cr = $f.cr; err = $f.err; n = $f.n; n0 = $f.n0; rbuf = $f.rbuf; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		cr = this;
  �		/* while (true) { */ case 1:
			/* if (!($interfaceIsEqual(cr.err, $ifaceNil))) { break; } */ if(!($interfaceIsEqual(cr.err, $ifaceNil))) { $s = 2; continue; }
  �			/* */ if (cr.checkEnd) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (cr.checkEnd) { */ case 3:
    				if (n > 0 && cr.r.Buffered() < 2) {
  q					/* break; */ $s = 2; continue;
    				}
  �				_r = io.ReadFull(cr.r, $subslice(new sliceType(cr.buf), 0, 2)); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				cr.err = _tuple[1];
    				if ($interfaceIsEqual(cr.err, $ifaceNil)) {
    					if (!(($bytesToString(new sliceType(cr.buf))) === "\r\n")) {
  �						cr.err = errors.New("malformed chunked encoding");
  						/* break; */ $s = 2; continue;
    					}
    				}
  2				cr.checkEnd = false;
    			/* } */ case 4:
  L			/* */ if ((x = cr.n, (x.$high === 0 && x.$low === 0))) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if ((x = cr.n, (x.$high === 0 && x.$low === 0))) { */ case 6:
  ^				if (!(n > 0)) { _v = false; $s = 10; continue s; }
				_r$1 = cr.chunkHeaderAvailable(); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_v = !_r$1; case 10:
				/* */ if (_v) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if (_v) { */ case 8:
  �					/* break; */ $s = 2; continue;
    				/* } */ case 9:
  �				$r = cr.beginChunk(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  					/* continue; */ $s = 1; continue;
    			/* } */ case 7:
    			if (b.$length === 0) {
  	$				/* break; */ $s = 2; continue;
    			}
  	0			rbuf = b;
    			if ((x$1 = (new $Uint64(0, rbuf.$length)), x$2 = cr.n, (x$1.$high > x$2.$high || (x$1.$high === x$2.$high && x$1.$low > x$2.$low)))) {
  	]				rbuf = $subslice(rbuf, 0, $flatten64(cr.n));
    			}
  	z			n0 = 0;
  	�			_r$2 = cr.r.Read(rbuf); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			n0 = _tuple$1[0];
			cr.err = _tuple$1[1];
  	�			n = n + (n0) >> 0;
  	�			b = $subslice(b, n0);
  	�			cr.n = (x$3 = cr.n, x$4 = (new $Uint64(0, n0)), new $Uint64(x$3.$high - x$4.$high, x$3.$low - x$4.$low));
    			if ((x$5 = cr.n, (x$5.$high === 0 && x$5.$low === 0)) && $interfaceIsEqual(cr.err, $ifaceNil)) {
  
N				cr.checkEnd = true;
    			}
    		$s = 1; continue;
		case 2:
    		_tmp = n;
		_tmp$1 = cr.err;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chunkedReader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._v = _v; $f.b = b; $f.cr = cr; $f.err = err; $f.n = n; $f.n0 = n0; $f.rbuf = rbuf; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	chunkedReader.prototype.Read = function(b) { return this.$val.Read(b); };
chunkedReader
errors.Newio.ReadFullnet/http/internal.beginChunk~'net/http/internal.chunkHeaderAvailable~net/http/internal.chunkedReadernet/http/internal.sliceType net/http/internal.readChunkLinenet/http/internalreadChunkLine readChunkLine��	readChunkLine = function(b) {
		var _r, _tuple, _tuple$1, b, err, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; err = $f.err; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  v		_r = b.ReadSlice(10); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		p = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			if ($interfaceIsEqual(err, io.EOF)) {
   				err = io.ErrUnexpectedEOF;
    			} else if ($interfaceIsEqual(err, bufio.ErrBufferFull)) {
  f				err = $pkg.ErrLineTooLong;
    			}
  �			$s = -1; return [sliceType.nil, err];
    		}
    		if (p.$length >= 4096) {
  �			$s = -1; return [sliceType.nil, $pkg.ErrLineTooLong];
    		}
  �		p = trimTrailingWhitespace(p);
  �		_tuple$1 = removeChunkExtension(p);
		p = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  &			$s = -1; return [sliceType.nil, err];
    		}
  :		$s = -1; return [p, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readChunkLine }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.err = err; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
readChunkLinebufio.ErrBufferFullio.EOFio.ErrUnexpectedEOF net/http/internal.ErrLineTooLongnet/http/internal.readChunkLine&net/http/internal.removeChunkExtensionnet/http/internal.sliceType(net/http/internal.trimTrailingWhitespace (net/http/internal.trimTrailingWhitespacenet/http/internaltrimTrailingWhitespace trimTrailingWhitespace�]	trimTrailingWhitespace = function(b) {
		var b, x;
  {		while (true) {
			if (!(b.$length > 0 && isASCIISpace((x = b.$length - 1 >> 0, ((x < 0 || x >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + x]))))) { break; }
  �			b = $subslice(b, 0, (b.$length - 1 >> 0));
    		}
  �		return b;
    	};
trimTrailingWhitespacenet/http/internal.isASCIISpace(net/http/internal.trimTrailingWhitespace net/http/internal.isASCIISpacenet/http/internalisASCIISpace isASCIISpaces	isASCIISpace = function(b) {
		var b;
  �		return (b === 32) || (b === 9) || (b === 10) || (b === 13);
    	};
isASCIISpacenet/http/internal.isASCIISpace &net/http/internal.removeChunkExtensionnet/http/internalremoveChunkExtension removeChunkExtension��	removeChunkExtension = function(p) {
		var p, semi;
  		semi = bytes.IndexByte(p, 59);
    		if (semi === -1) {
  L			return [p, $ifaceNil];
    		}
  �		return [$subslice(p, 0, semi), $ifaceNil];
    	};
removeChunkExtensionbytes.IndexByte&net/http/internal.removeChunkExtension "net/http/internal.NewChunkedWriternet/http/internalNewChunkedWriter NewChunkedWriter��	NewChunkedWriter = function(w) {
		var w;
  �		return new chunkedWriter.ptr(w);
    	};
	$pkg.NewChunkedWriter = NewChunkedWriter;
NewChunkedWriter"net/http/internal.NewChunkedWriternet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Write �J	chunkedWriter.ptr.prototype.Write = function(data) {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, _tuple$3, bw, cw, data, err, n, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; bw = $f.bw; cw = $f.cw; data = $f.data; err = $f.err; n = $f.n; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		cw = this;
    		if (data.$length === 0) {
    			_tmp = 0;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  		_r = fmt.Fprintf(cw.Wire, "%x\r\n", new sliceType$1([new $Int(data.$length)])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$2 = 0;
			_tmp$3 = err;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
  k		_r$1 = cw.Wire.Write(data); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [n, err];
    		}
    		if (!((n === data.$length))) {
  �			err = io.ErrShortWrite;
  �			$s = -1; return [n, err];
    		}
  �		_r$2 = io.WriteString(cw.Wire, "\r\n"); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  			$s = -1; return [n, err];
    		}
  '		_tuple$3 = $assertType(cw.Wire, ptrType$1, true);
		bw = _tuple$3[0];
		ok = _tuple$3[1];
  $		/* */ if (ok) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (ok) { */ case 4:
  Z			_r$3 = bw.Writer.Flush(); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			err = _r$3;
    		/* } */ case 5:
  o		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chunkedWriter.ptr.prototype.Write }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.bw = bw; $f.cw = cw; $f.data = data; $f.err = err; $f.n = n; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	chunkedWriter.prototype.Write = function(data) { return this.$val.Write(data); };
chunkedWriterfmt.Fprintfio.ErrShortWriteio.WriteString'net/http/internal.FlushAfterChunkWriternet/http/internal.chunkedWriternet/http/internal.ptrType$1net/http/internal.sliceType$1 ((*net/http/internal.chunkedWriter).Close �5	chunkedWriter.ptr.prototype.Close = function() {
		var _r, _tuple, cw, err, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; cw = $f.cw; err = $f.err; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cw = this;
  �		_r = io.WriteString(cw.Wire, "0\r\n"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
  �		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chunkedWriter.ptr.prototype.Close }; } $f._r = _r; $f._tuple = _tuple; $f.cw = cw; $f.err = err; $f.$s = $s; $f.$r = $r; return $f;
	};
	chunkedWriter.prototype.Close = function() { return this.$val.Close(); };
chunkedWriterio.WriteStringnet/http/internal.chunkedWriter net/http/internal.parseHexUintnet/http/internalparseHexUint parseHexUint��	parseHexUint = function(v) {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, b, err, i, n, v, x;
		n = new $Uint64(0, 0);
		err = $ifaceNil;
  �		_ref = v;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (48 <= b && b <= 57) {
  �				b = b - 48 << 24 >>> 24;
    			} else if (97 <= b && b <= 102) {
  				b = (b - 97 << 24 >>> 24) + 10 << 24 >>> 24;
    			} else if (65 <= b && b <= 70) {
  7				b = (b - 65 << 24 >>> 24) + 10 << 24 >>> 24;
    			} else {
    				_tmp = new $Uint64(0, 0);
				_tmp$1 = errors.New("invalid byte in chunk length");
				n = _tmp;
				err = _tmp$1;
				return [n, err];
    			}
    			if (i === 16) {
    				_tmp$2 = new $Uint64(0, 0);
				_tmp$3 = errors.New("http chunk length too large");
				n = _tmp$2;
				err = _tmp$3;
				return [n, err];
    			}
  �			n = $shiftLeft64(n, (4));
  �			n = (x = (new $Uint64(0, b)), new $Uint64(n.$high | x.$high, (n.$low | x.$low) >>> 0));
    			_i++;
		}
  �		return [n, err];
    	};
parseHexUint
errors.Newnet/http/internal.parseHexUint �q{"Base":6658,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/net/http/internal/chunked.go","Base":1,"Size":6656,"Lines":[0,55,109,159,160,221,222,289,311,328,329,338,347,356,366,373,379,381,382,444,445,501,502,587,640,715,718,793,857,904,933,943,969,972,1002,1004,1005,1033,1057,1099,1115,1133,1195,1197,1198,1238,1258,1275,1311,1331,1340,1343,1378,1398,1407,1410,1426,1444,1447,1449,1450,1505,1527,1539,1565,1607,1610,1624,1626,1627,1689,1710,1729,1766,1824,1879,1900,1910,1915,1980,2017,2072,2083,2089,2094,2117,2121,2138,2182,2232,2267,2277,2282,2301,2313,2317,2336,2345,2349,2361,2393,2415,2419,2432,2463,2473,2486,2507,2562,2600,2634,2656,2660,2663,2681,2683,2684,2727,2773,2825,2878,2932,2961,2978,3018,3079,3100,3129,3170,3194,3198,3216,3219,3249,3278,3281,3312,3346,3363,3381,3384,3399,3401,3402,3449,3496,3515,3518,3528,3530,3531,3564,3620,3622,3623,3683,3699,3717,3741,3769,3809,3863,3896,3913,3929,3932,3993,4052,4073,4095,4097,4098,4179,4260,4336,4414,4450,4453,4520,4583,4649,4718,4754,4806,4832,4834,4835,4910,4972,5000,5016,5018,5019,5071,5150,5213,5278,5279,5349,5370,5386,5389,5390,5459,5475,5478,5525,5534,5537,5558,5583,5592,5595,5654,5663,5666,5719,5738,5741,5749,5751,5752,5793,5837,5849,5851,5852,5921,5989,6059,6124,6189,6225,6240,6242,6243,6295,6318,6329,6358,6373,6402,6422,6451,6471,6482,6538,6542,6557,6612,6616,6626,6643,6646,6654],"Infos":null}]}
 