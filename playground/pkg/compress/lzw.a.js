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
GoLinkname�� Implementation�� 	Reference��   ��T��compress/lzwlzwbufioerrorsfmtio��i ��Order rReaderioorderlitWidth
ReadCloserwWriterWriteCloser
ByteReaderbitsnBitswidthreaderrcleareofhioverflowlastsuffixprefixoutputotoReadreadLSBreadMSBReadbdecodeCloseResetsrcinitwriterwrite	savedCodetablewriteLSBcwriteMSBincHiWritepndstCloserReadByte
ByteWriterFlush	WriteBytelzwLSBMSB	NewReader	NewWriter  C   C   	 "F  +    .  / 6F  -B    E T   B 	` c   � � �@ ]  M	  R  X  ^e    c  g  m  q  t  }  �s  �w  �{  �  � ```````T � � �    � �    � � ��    � �   � �   � � �+      � � �+      � /� � 	  ��	 -�     ��  M	  R  X    q	  t	  �	  c  �� �������T � � -� �	   � -� �	   � -�   � -� �� � c  � -�   � -� �B      � -� �B       � �� � c T � � � + T �  � �� � c T � � B T �  �   T � � � �  T �  �  T �  � �  T �� ����( 9	�/��� B�����"�	�6�/�( bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Order\	Order = $pkg.Order = $newType(4, $kindInt, "lzw.Order", true, "compress/lzw", true, null);
Ordercompress/lzw.Order  Reader�A	Reader = $pkg.Reader = $newType(0, $kindStruct, "lzw.Reader", true, "compress/lzw", true, function(r_, bits_, nBits_, width_, read_, litWidth_, err_, clear_, eof_, hi_, overflow_, last_, suffix_, prefix_, output_, o_, toRead_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.bits = 0;
			this.nBits = 0;
			this.width = 0;
			this.read = $throwNilPointerError;
			this.litWidth = 0;
			this.err = $ifaceNil;
			this.clear = 0;
			this.eof = 0;
			this.hi = 0;
			this.overflow = 0;
			this.last = 0;
			this.suffix = arrayType.zero();
			this.prefix = arrayType$1.zero();
			this.output = arrayType$2.zero();
			this.o = 0;
			this.toRead = sliceType.nil;
			return;
		}
		this.r = r_;
		this.bits = bits_;
		this.nBits = nBits_;
		this.width = width_;
		this.read = read_;
		this.litWidth = litWidth_;
		this.err = err_;
		this.clear = clear_;
		this.eof = eof_;
		this.hi = hi_;
		this.overflow = overflow_;
		this.last = last_;
		this.suffix = suffix_;
		this.prefix = prefix_;
		this.output = output_;
		this.o = o_;
		this.toRead = toRead_;
	});
��	ptrType.methods = [{prop: "readLSB", name: "readLSB", pkg: "compress/lzw", typ: $funcType([], [$Uint16, $error], false)}, {prop: "readMSB", name: "readMSB", pkg: "compress/lzw", typ: $funcType([], [$Uint16, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "decode", name: "decode", pkg: "compress/lzw", typ: $funcType([], [], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([io.Reader, Order, $Int], [], false)}, {prop: "init", name: "init", pkg: "compress/lzw", typ: $funcType([io.Reader, Order, $Int], [], false)}];
�	Reader.init("compress/lzw", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.ByteReader, tag: ""}, {prop: "bits", name: "bits", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "nBits", name: "nBits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "width", name: "width", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "read", name: "read", embedded: false, exported: false, typ: funcType, tag: ""}, {prop: "litWidth", name: "litWidth", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "clear", name: "clear", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "eof", name: "eof", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "overflow", name: "overflow", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "last", name: "last", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "suffix", name: "suffix", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "prefix", name: "prefix", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "output", name: "output", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "o", name: "o", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "toRead", name: "toRead", embedded: false, exported: false, typ: sliceType, tag: ""}]);
Reader
compress/lzw.Ordercompress/lzw.Readercompress/lzw.arrayTypecompress/lzw.arrayType$1compress/lzw.arrayType$2compress/lzw.funcTypecompress/lzw.ptrTypecompress/lzw.sliceTypeio.ByteReader	io.Reader  writerf	writer = $pkg.writer = $newType(8, $kindInterface, "lzw.writer", true, "compress/lzw", false, null);
��	writer.init([{prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [$error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}]);
writercompress/lzw.writer  Writer�;	Writer = $pkg.Writer = $newType(0, $kindStruct, "lzw.Writer", true, "compress/lzw", true, function(w_, order_, write_, bits_, nBits_, width_, litWidth_, hi_, overflow_, savedCode_, err_, table_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.order = 0;
			this.write = $throwNilPointerError;
			this.bits = 0;
			this.nBits = 0;
			this.width = 0;
			this.litWidth = 0;
			this.hi = 0;
			this.overflow = 0;
			this.savedCode = 0;
			this.err = $ifaceNil;
			this.table = arrayType$3.zero();
			return;
		}
		this.w = w_;
		this.order = order_;
		this.write = write_;
		this.bits = bits_;
		this.nBits = nBits_;
		this.width = width_;
		this.litWidth = litWidth_;
		this.hi = hi_;
		this.overflow = overflow_;
		this.savedCode = savedCode_;
		this.err = err_;
		this.table = table_;
	});
��	ptrType$1.methods = [{prop: "writeLSB", name: "writeLSB", pkg: "compress/lzw", typ: $funcType([$Uint32], [$error], false)}, {prop: "writeMSB", name: "writeMSB", pkg: "compress/lzw", typ: $funcType([$Uint32], [$error], false)}, {prop: "incHi", name: "incHi", pkg: "compress/lzw", typ: $funcType([], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([io.Writer, Order, $Int], [], false)}, {prop: "init", name: "init", pkg: "compress/lzw", typ: $funcType([io.Writer, Order, $Int], [], false)}];
�I	Writer.init("compress/lzw", [{prop: "w", name: "w", embedded: false, exported: false, typ: writer, tag: ""}, {prop: "order", name: "order", embedded: false, exported: false, typ: Order, tag: ""}, {prop: "write", name: "write", embedded: false, exported: false, typ: funcType$1, tag: ""}, {prop: "bits", name: "bits", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "nBits", name: "nBits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "width", name: "width", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "litWidth", name: "litWidth", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "overflow", name: "overflow", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "savedCode", name: "savedCode", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "table", name: "table", embedded: false, exported: false, typ: arrayType$3, tag: ""}]);
Writercompress/lzw.Ordercompress/lzw.Writercompress/lzw.arrayType$3compress/lzw.funcType$1compress/lzw.ptrType$1compress/lzw.sliceTypecompress/lzw.writer	io.Writer  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType'	arrayType = $arrayType($Uint8, 4096);
	arrayType  arrayType$1*	arrayType$1 = $arrayType($Uint16, 4096);
arrayType$1  arrayType$2)	arrayType$2 = $arrayType($Uint8, 8192);
arrayType$2  ptrType	ptrType = $ptrType(Reader);
ptrTypecompress/lzw.Reader  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  arrayType$3+	arrayType$3 = $arrayType($Uint32, 16384);
arrayType$3  	ptrType$1	ptrType$1 = $ptrType(Writer);
	ptrType$1compress/lzw.Writer  funcType<	funcType = $funcType([ptrType], [$Uint16, $error], false);
funcTypecompress/lzw.ptrType  
funcType$1@	funcType$1 = $funcType([ptrType$1, $Uint32], [$error], false);

funcType$1compress/lzw.ptrType$1  	errClosed	errClosed  errOutOfCodeserrOutOfCodes  ?  C		errClosed = errors.New("lzw: reader/writer is closed");
compress/lzw.errClosed
errors.New  8  *�		errOutOfCodes = errors.New("lzw: out of codes");
compress/lzw.errOutOfCodes
errors.New (*compress/lzw.Reader).readLSB �;	Reader.ptr.prototype.readLSB = function() {
		var _r, _tuple, code, err, r, x, y, y$1, y$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; code = $f.code; err = $f.err; r = $f.r; x = $f.x; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		/* while (true) { */ case 1:
			/* if (!(r.nBits < r.width)) { break; } */ if(!(r.nBits < r.width)) { $s = 2; continue; }
   			_r = r.r.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			x = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  .				$s = -1; return [0, err];
    			}
  B			r.bits = (r.bits | (((y = r.nBits, y < 32 ? (((x >>> 0)) << y) : 0) >>> 0))) >>> 0;
  c			r.nBits = r.nBits + (8) >>> 0;
    		$s = 1; continue;
		case 2:
  t		code = ((((r.bits & ((((y$1 = r.width, y$1 < 32 ? (1 << y$1) : 0) >>> 0) - 1 >>> 0))) >>> 0) << 16 >>> 16));
  �		r.bits = (y$2 = (r.width), y$2 < 32 ? (r.bits >>> y$2) : 0) >>> 0;
  �		r.nBits = r.nBits - (r.width) >>> 0;
  �		$s = -1; return [code, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readLSB }; } $f._r = _r; $f._tuple = _tuple; $f.code = code; $f.err = err; $f.r = r; $f.x = x; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readLSB = function() { return this.$val.readLSB(); };
ReaderreadLSB~compress/lzw.Reader (*compress/lzw.Reader).readMSB �=	Reader.ptr.prototype.readMSB = function() {
		var _r, _tuple, code, err, r, x, y, y$1, y$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; code = $f.code; err = $f.err; r = $f.r; x = $f.x; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  R		/* while (true) { */ case 1:
			/* if (!(r.nBits < r.width)) { break; } */ if(!(r.nBits < r.width)) { $s = 2; continue; }
  l			_r = r.r.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			x = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				$s = -1; return [0, err];
    			}
  �			r.bits = (r.bits | (((y = ((24 - r.nBits >>> 0)), y < 32 ? (((x >>> 0)) << y) : 0) >>> 0))) >>> 0;
  �			r.nBits = r.nBits + (8) >>> 0;
    		$s = 1; continue;
		case 2:
  �		code = ((((y$1 = ((32 - r.width >>> 0)), y$1 < 32 ? (r.bits >>> y$1) : 0) >>> 0) << 16 >>> 16));
  		r.bits = (y$2 = (r.width), y$2 < 32 ? (r.bits << y$2) : 0) >>> 0;
  %		r.nBits = r.nBits - (r.width) >>> 0;
  9		$s = -1; return [code, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readMSB }; } $f._r = _r; $f._tuple = _tuple; $f.code = code; $f.err = err; $f.r = r; $f.x = x; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readMSB = function() { return this.$val.readMSB(); };
ReaderreadMSB~compress/lzw.Reader (*compress/lzw.Reader).Read ��	Reader.ptr.prototype.Read = function(b) {
		var b, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		/* while (true) { */ case 1:
    			if (r.toRead.$length > 0) {
  �				n = $copySlice(b, r.toRead);
  				r.toRead = $subslice(r.toRead, n);
  )				$s = -1; return [n, $ifaceNil];
    			}
    			if (!($interfaceIsEqual(r.err, $ifaceNil))) {
  R				$s = -1; return [0, r.err];
    			}
  h			$r = r.decode(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
    		$s = -1; return [0, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Read }; } $f.b = b; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Read = function(b) { return this.$val.Read(b); };
Readercompress/lzw.Readercompress/lzw.decode~ (*compress/lzw.Reader).decode ��	Reader.ptr.prototype.decode = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, c, code, err, i, r, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; c = $f.c; code = $f.code; err = $f.err; i = $f.i; r = $f.r; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		/* while (true) { */ case 1:
  �			_r = r.read(r); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			code = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  �					err = io.ErrUnexpectedEOF;
    				}
  �				r.err = err;
  				/* break; */ $s = 2; continue;
    			}
    			if (code < r.clear) {
  T				(x = r.output, x$1 = r.o, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = ((code << 24 >>> 24))));
  s				r.o = r.o + (1) >> 0;
    				if (!((r.last === 65535))) {
  �					(x$2 = r.suffix, x$3 = r.hi, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3] = ((code << 24 >>> 24))));
  �					(x$4 = r.prefix, x$5 = r.hi, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5] = r.last));
    				}
    			} else if ((code === r.clear)) {
  $				r.width = 1 + ((r.litWidth >>> 0)) >>> 0;
  F				r.hi = r.eof;
  V				r.overflow = (y = r.width, y < 32 ? (1 << y) : 0) << 16 >>> 16;
  s				r.last = 65535;
  �				/* continue; */ $s = 1; continue;
    			} else if ((code === r.eof)) {
  �				r.err = io.EOF;
  �				/* break loop; */ $s = 2; continue s;
    			} else if (code <= r.hi) {
  �				_tmp = code;
				_tmp$1 = 8191;
				c = _tmp;
				i = _tmp$1;
    				if ((code === r.hi) && !((r.last === 65535))) {
  					c = r.last;
  					while (true) {
						if (!(c >= r.clear)) { break; }
  2						c = (x$6 = r.prefix, ((c < 0 || c >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[c]));
    					}
  L					(x$7 = r.output, ((i < 0 || i >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[i] = ((c << 24 >>> 24))));
  g					i = i - (1) >> 0;
  o					c = r.last;
    				}
  �				while (true) {
					if (!(c >= r.clear)) { break; }
  �					(x$9 = r.output, ((i < 0 || i >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[i] = (x$8 = r.suffix, ((c < 0 || c >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[c]))));
  �					i = i - (1) >> 0;
  					c = (x$10 = r.prefix, ((c < 0 || c >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[c]));
    				}
  				(x$11 = r.output, ((i < 0 || i >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[i] = ((c << 24 >>> 24))));
  3				r.o = r.o + ($copySlice($subslice(new sliceType(r.output), r.o), $subslice(new sliceType(r.output), i))) >> 0;
    				if (!((r.last === 65535))) {
  �					(x$12 = r.suffix, x$13 = r.hi, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13] = ((c << 24 >>> 24))));
  �					(x$14 = r.prefix, x$15 = r.hi, ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15] = r.last));
    				}
    			} else {
  �				r.err = errors.New("lzw: invalid code");
  #				/* break loop; */ $s = 2; continue s;
    			}
  4			_tmp$2 = code;
			_tmp$3 = r.hi + 1 << 16 >>> 16;
			r.last = _tmp$2;
			r.hi = _tmp$3;
    			if (r.hi >= r.overflow) {
    				if (r.hi > r.overflow) {
  �					$panic(new $String("unreachable"));
    				}
    				if (r.width === 12) {
  �					r.last = 65535;
  �					r.hi = r.hi - (1) << 16 >>> 16;
    				} else {
  �					r.width = r.width + (1) >>> 0;
  �					r.overflow = (y$1 = r.width, y$1 < 32 ? (1 << y$1) : 0) << 16 >>> 16;
    				}
    			}
    			if (r.o >= 4096) {
  �				/* break; */ $s = 2; continue;
    			}
    		$s = 1; continue;
		case 2:
  		r.toRead = $subslice(new sliceType(r.output), 0, r.o);
  4		r.o = 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.decode }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.c = c; $f.code = code; $f.err = err; $f.i = i; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.decode = function() { return this.$val.decode(); };
Readerdecode~compress/lzw.Readercompress/lzw.sliceType
errors.Newio.EOFio.ErrUnexpectedEOF (*compress/lzw.Reader).Close ��	Reader.ptr.prototype.Close = function() {
		var r;
		r = this;
  		r.err = errClosed;
  N		return $ifaceNil;
    	};
	Reader.prototype.Close = function() { return this.$val.Close(); };
Readercompress/lzw.Readercompress/lzw.errClosed (*compress/lzw.Reader).Reset ��	Reader.ptr.prototype.Reset = function(src, order, litWidth) {
		var litWidth, order, r, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; litWidth = $f.litWidth; order = $f.order; r = $f.r; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		Reader.copy(r, new Reader.ptr($ifaceNil, 0, 0, 0, $throwNilPointerError, 0, $ifaceNil, 0, 0, 0, 0, 0, arrayType.zero(), arrayType$1.zero(), arrayType$2.zero(), 0, sliceType.nil));
  		$r = r.init(src, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Reset }; } $f.litWidth = litWidth; $f.order = order; $f.r = r; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Reset = function(src, order, litWidth) { return this.$val.Reset(src, order, litWidth); };
Readercompress/lzw.Readercompress/lzw.arrayTypecompress/lzw.arrayType$1compress/lzw.arrayType$2compress/lzw.init~compress/lzw.sliceType compress/lzw.NewReadercompress/lzw	NewReader 	NewReader��	NewReader = function(r, order, litWidth) {
		var $24r, _r, litWidth, order, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; litWidth = $f.litWidth; order = $f.order; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = newReader(r, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewReader }; } $f.$24r = $24r; $f._r = _r; $f.litWidth = litWidth; $f.order = order; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewReader = NewReader;
	NewReadercompress/lzw.NewReadercompress/lzw.newReader compress/lzw.newReadercompress/lzw	newReader 	newReader�\	newReader = function(src, order, litWidth) {
		var litWidth, order, r, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; litWidth = $f.litWidth; order = $f.order; r = $f.r; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		r = new Reader.ptr($ifaceNil, 0, 0, 0, $throwNilPointerError, 0, $ifaceNil, 0, 0, 0, 0, 0, arrayType.zero(), arrayType$1.zero(), arrayType$2.zero(), 0, sliceType.nil);
  /		$r = r.init(src, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  M		$s = -1; return r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newReader }; } $f.litWidth = litWidth; $f.order = order; $f.r = r; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	newReadercompress/lzw.Readercompress/lzw.arrayTypecompress/lzw.arrayType$1compress/lzw.arrayType$2compress/lzw.init~compress/lzw.newReadercompress/lzw.sliceType (*compress/lzw.Reader).init ��	Reader.ptr.prototype.init = function(src, order, litWidth) {
		var _1, _r, _tmp, _tmp$1, _tuple, br, litWidth, ok, order, r, src, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; br = $f.br; litWidth = $f.litWidth; ok = $f.ok; order = $f.order; r = $f.r; src = $f.src; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
    		_1 = order;
    		if (_1 === (0)) {
  �			r.read = $methodExpr(ptrType, "readLSB");
    		} else if (_1 === (1)) {
  �			r.read = $methodExpr(ptrType, "readMSB");
    		} else {
  			r.err = errors.New("lzw: unknown order");
  2			$s = -1; return;
    		}
  =		/* */ if (litWidth < 2 || 8 < litWidth) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (litWidth < 2 || 8 < litWidth) { */ case 1:
  a			_r = fmt.Errorf("lzw: litWidth %d out of range", new sliceType$1([new $Int(litWidth)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r.err = _r;
  �			$s = -1; return;
    		/* } */ case 2:
  �		_tuple = $assertType(src, io.ByteReader, true);
		br = _tuple[0];
		ok = _tuple[1];
    		if (!ok && !($interfaceIsEqual(src, $ifaceNil))) {
  �			br = bufio.NewReader(src);
    		}
  		r.r = br;
  		r.litWidth = litWidth;
  $		r.width = 1 + ((litWidth >>> 0)) >>> 0;
  B		r.clear = (y = ((litWidth >>> 0)), y < 32 ? (1 << y) : 0) << 16 >>> 16;
  i		_tmp = r.clear + 1 << 16 >>> 16;
		_tmp$1 = r.clear + 1 << 16 >>> 16;
		r.eof = _tmp;
		r.hi = _tmp$1;
  �		r.overflow = (y$1 = r.width, y$1 < 32 ? (1 << y$1) : 0) << 16 >>> 16;
  �		r.last = 65535;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.init }; } $f._1 = _1; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.br = br; $f.litWidth = litWidth; $f.ok = ok; $f.order = order; $f.r = r; $f.src = src; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.init = function(src, order, litWidth) { return this.$val.init(src, order, litWidth); };
Readerinit~	bufio.NewReadercompress/lzw.Readercompress/lzw.ptrTypecompress/lzw.readLSB~compress/lzw.readMSB~compress/lzw.sliceType$1
errors.New
fmt.Errorfio.ByteReader (*compress/lzw.Writer).writeLSB �	Writer.ptr.prototype.writeLSB = function(c) {
		var _r, c, err, w, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; c = $f.c; err = $f.err; w = $f.w; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  (4		w.bits = (w.bits | (((y = w.nBits, y < 32 ? (c << y) : 0) >>> 0))) >>> 0;
  (L		w.nBits = w.nBits + (w.width) >>> 0;
  (`		/* while (true) { */ case 1:
			/* if (!(w.nBits >= 8)) { break; } */ if(!(w.nBits >= 8)) { $s = 2; continue; }
  (x			_r = w.w.WriteByte(((w.bits << 24 >>> 24))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  (�				$s = -1; return err;
    			}
  (�			w.bits = (y$1 = (8), y$1 < 32 ? (w.bits >>> y$1) : 0) >>> 0;
  (�			w.nBits = w.nBits - (8) >>> 0;
    		$s = 1; continue;
		case 2:
  (�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.writeLSB }; } $f._r = _r; $f.c = c; $f.err = err; $f.w = w; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.writeLSB = function(c) { return this.$val.writeLSB(c); };
Writer	writeLSB~compress/lzw.Writer (*compress/lzw.Writer).writeMSB �N	Writer.ptr.prototype.writeMSB = function(c) {
		var _r, c, err, w, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; c = $f.c; err = $f.err; w = $f.w; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  )_		w.bits = (w.bits | (((y = (((32 - w.width >>> 0) - w.nBits >>> 0)), y < 32 ? (c << y) : 0) >>> 0))) >>> 0;
  )�		w.nBits = w.nBits + (w.width) >>> 0;
  )�		/* while (true) { */ case 1:
			/* if (!(w.nBits >= 8)) { break; } */ if(!(w.nBits >= 8)) { $s = 2; continue; }
  )�			_r = w.w.WriteByte((((w.bits >>> 24 >>> 0) << 24 >>> 24))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  )�				$s = -1; return err;
    			}
  * 			w.bits = (y$1 = (8), y$1 < 32 ? (w.bits << y$1) : 0) >>> 0;
  *			w.nBits = w.nBits - (8) >>> 0;
    		$s = 1; continue;
		case 2:
  * 		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.writeMSB }; } $f._r = _r; $f.c = c; $f.err = err; $f.w = w; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.writeMSB = function(c) { return this.$val.writeMSB(c); };
Writer	writeMSB~compress/lzw.Writer (*compress/lzw.Writer).incHi �	Writer.ptr.prototype.incHi = function() {
		var _i, _r, _ref, clear, err, i, w, x, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; clear = $f.clear; err = $f.err; i = $f.i; w = $f.w; x = $f.x; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  +�		w.hi = w.hi + (1) >>> 0;
    		if (w.hi === w.overflow) {
  +�			w.width = w.width + (1) >>> 0;
  +�			w.overflow = (y = (1), y < 32 ? (w.overflow << y) : 0) >>> 0;
    		}
  ,		/* */ if (w.hi === 4095) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (w.hi === 4095) { */ case 1:
  ,%			clear = (y$1 = w.litWidth, y$1 < 32 ? (1 << y$1) : 0) >>> 0;
  ,K			_r = w.write(w, clear); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  ,u				$s = -1; return err;
    			}
  ,�			w.width = w.litWidth + 1 >>> 0;
  ,�			w.hi = clear + 1 >>> 0;
  ,�			w.overflow = clear << 1 >>> 0;
  ,�			_ref = w.table;
			_i = 0;
			while (true) {
				if (!(_i < 16384)) { break; }
				i = _i;
  ,�				(x = w.table, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i] = 0));
    				_i++;
			}
  -
			$s = -1; return errOutOfCodes;
    		/* } */ case 2:
  -#		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.incHi }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.clear = clear; $f.err = err; $f.i = i; $f.w = w; $f.x = x; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.incHi = function() { return this.$val.incHi(); };
WriterincHi~compress/lzw.Writercompress/lzw.errOutOfCodes (*compress/lzw.Writer).Write �b	Writer.ptr.prototype.Write = function(p) {
		var _i, _i$1, _r, _r$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, code, err, err1, h, hash, key, literal, maxLit, n, p, t, w, x, x$1, x$2, x$3, x$4, x$5, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; code = $f.code; err = $f.err; err1 = $f.err1; h = $f.h; hash = $f.hash; key = $f.key; literal = $f.literal; maxLit = $f.maxLit; n = $f.n; p = $f.p; t = $f.t; w = $f.w; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		w = this;
    		if (!($interfaceIsEqual(w.err, $ifaceNil))) {
    			_tmp = 0;
			_tmp$1 = w.err;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
    		if (p.$length === 0) {
    			_tmp$2 = 0;
			_tmp$3 = $ifaceNil;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
  .		maxLit = ((((y = w.litWidth, y < 32 ? (1 << y) : 0) << 24 >>> 24) - 1 << 24 >>> 24));
    		if (!((maxLit === 255))) {
  .:			_ref = p;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (x > maxLit) {
  .g					w.err = errors.New("lzw: input byte too large for the litWidth");
    					_tmp$4 = 0;
					_tmp$5 = w.err;
					n = _tmp$4;
					err = _tmp$5;
					$s = -1; return [n, err];
    				}
    				_i++;
			}
    		}
  .�		n = p.$length;
  .�		code = w.savedCode;
    		if (code === 4294967295) {
  /8			_tmp$6 = (((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0));
			_tmp$7 = $subslice(p, 1);
			code = _tmp$6;
			p = _tmp$7;
    		}
  /`		_ref$1 = p;
		_i$1 = 0;
		/* while (true) { */ case 1:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 2; continue; }
			x$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  /x			literal = ((x$1 >>> 0));
  /�			key = ((code << 8 >>> 0) | literal) >>> 0;
  0			hash = (((((key >>> 12 >>> 0) ^ key) >>> 0)) & 16383) >>> 0;
  0>			_tmp$8 = hash;
			_tmp$9 = (x$2 = w.table, ((hash < 0 || hash >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[hash]));
			h = _tmp$8;
			t = _tmp$9;
			while (true) {
				if (!(!((t === 0)))) { break; }
    				if (key === (t >>> 12 >>> 0)) {
  0�					code = (t & 4095) >>> 0;
  0�					_i$1++;
					/* continue loop; */ $s = 1; continue s;
    				}
  0�				h = (((h + 1 >>> 0)) & 16383) >>> 0;
  0�				t = (x$3 = w.table, ((h < 0 || h >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[h]));
    			}
  1N			_r = w.write(w, code); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			w.err = _r;
    			if (!($interfaceIsEqual(w.err, $ifaceNil))) {
    				_tmp$10 = 0;
				_tmp$11 = w.err;
				n = _tmp$10;
				err = _tmp$11;
				$s = -1; return [n, err];
    			}
  1�			code = literal;
  26			_r$1 = w.incHi(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err1 = _r$1;
    			if (!($interfaceIsEqual(err1, $ifaceNil))) {
    				if ($interfaceIsEqual(err1, errOutOfCodes)) {
  2y					_i$1++;
					/* continue; */ $s = 1; continue;
    				}
  2�				w.err = err1;
    				_tmp$12 = 0;
				_tmp$13 = w.err;
				n = _tmp$12;
				err = _tmp$13;
				$s = -1; return [n, err];
    			}
  2�			while (true) {
    				if ((x$4 = w.table, ((hash < 0 || hash >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[hash])) === 0) {
  3)					(x$5 = w.table, ((hash < 0 || hash >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[hash] = ((((key << 12 >>> 0)) | w.hi) >>> 0)));
  3P					break;
    				}
  3^				hash = (((hash + 1 >>> 0)) & 16383) >>> 0;
    			}
    			_i$1++;
		$s = 1; continue;
		case 2:
  3�		w.savedCode = code;
    		_tmp$14 = n;
		_tmp$15 = $ifaceNil;
		n = _tmp$14;
		err = _tmp$15;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Write }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.code = code; $f.err = err; $f.err1 = err1; $f.h = h; $f.hash = hash; $f.key = key; $f.literal = literal; $f.maxLit = maxLit; $f.n = n; $f.p = p; $f.t = t; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Write = function(p) { return this.$val.Write(p); };
Writercompress/lzw.Writercompress/lzw.errOutOfCodescompress/lzw.incHi~
errors.New (*compress/lzw.Writer).Close �y	Writer.ptr.prototype.Close = function() {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, eof, err, err$1, err$2, err$3, w, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; eof = $f.eof; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; w = $f.w; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
    		if (!($interfaceIsEqual(w.err, $ifaceNil))) {
    			if ($interfaceIsEqual(w.err, errClosed)) {
  4_				$s = -1; return $ifaceNil;
    			}
  4p			$s = -1; return w.err;
    		}
  4�		w.err = errClosed;
  4�		/* */ if (!((w.savedCode === 4294967295))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((w.savedCode === 4294967295))) { */ case 1:
  5			_r = w.write(w, w.savedCode); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  5@				$s = -1; return err;
    			}
  5T			_r$1 = w.incHi(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err$1 = _r$1;
    			if (!($interfaceIsEqual(err$1, $ifaceNil)) && !($interfaceIsEqual(err$1, errOutOfCodes))) {
  5�				$s = -1; return err$1;
    			}
    		/* } */ case 2:
  5�		eof = ((y = w.litWidth, y < 32 ? (1 << y) : 0) >>> 0) + 1 >>> 0;
  5�		_r$2 = w.write(w, eof); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		err$2 = _r$2;
    		if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  6			$s = -1; return err$2;
    		}
  6.		/* */ if (w.nBits > 0) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (w.nBits > 0) { */ case 6:
    			if (w.order === 1) {
  6X				w.bits = (y$1 = (24), y$1 < 32 ? (w.bits >>> y$1) : 0) >>> 0;
    			}
  6o			_r$3 = w.w.WriteByte(((w.bits << 24 >>> 24))); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			err$3 = _r$3;
    			if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  6�				$s = -1; return err$3;
    			}
    		/* } */ case 7:
  6�		_r$4 = w.w.Flush(); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$24r = _r$4;
		$s = 10; case 10: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.eof = eof; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.w = w; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Close = function() { return this.$val.Close(); };
Writercompress/lzw.Writercompress/lzw.errClosedcompress/lzw.errOutOfCodescompress/lzw.incHi~ (*compress/lzw.Writer).Reset ��	Writer.ptr.prototype.Reset = function(dst, order, litWidth) {
		var dst, litWidth, order, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; litWidth = $f.litWidth; order = $f.order; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  7i		Writer.copy(w, new Writer.ptr($ifaceNil, 0, $throwNilPointerError, 0, 0, 0, 0, 0, 0, 0, $ifaceNil, arrayType$3.zero()));
  7x		$r = w.init(dst, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Reset }; } $f.dst = dst; $f.litWidth = litWidth; $f.order = order; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Reset = function(dst, order, litWidth) { return this.$val.Reset(dst, order, litWidth); };
Writercompress/lzw.Writercompress/lzw.arrayType$3compress/lzw.init~ compress/lzw.NewWritercompress/lzw	NewWriter 	NewWriter��	NewWriter = function(w, order, litWidth) {
		var $24r, _r, litWidth, order, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; litWidth = $f.litWidth; order = $f.order; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  9�		_r = newWriter(w, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewWriter }; } $f.$24r = $24r; $f._r = _r; $f.litWidth = litWidth; $f.order = order; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewWriter = NewWriter;
	NewWritercompress/lzw.NewWritercompress/lzw.newWriter compress/lzw.newWritercompress/lzw	newWriter 	newWriter�!	newWriter = function(dst, order, litWidth) {
		var dst, litWidth, order, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; litWidth = $f.litWidth; order = $f.order; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  :		w = new Writer.ptr($ifaceNil, 0, $throwNilPointerError, 0, 0, 0, 0, 0, 0, 0, $ifaceNil, arrayType$3.zero());
  :+		$r = w.init(dst, order, litWidth); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  :I		$s = -1; return w;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newWriter }; } $f.dst = dst; $f.litWidth = litWidth; $f.order = order; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	newWritercompress/lzw.Writercompress/lzw.arrayType$3compress/lzw.init~compress/lzw.newWriter (*compress/lzw.Writer).init �E	Writer.ptr.prototype.init = function(dst, order, litWidth) {
		var _1, _r, _tuple, bw, dst, litWidth, lw, ok, order, w, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tuple = $f._tuple; bw = $f.bw; dst = $f.dst; litWidth = $f.litWidth; lw = $f.lw; ok = $f.ok; order = $f.order; w = $f.w; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
    		_1 = order;
    		if (_1 === (0)) {
  :�			w.write = $methodExpr(ptrType$1, "writeLSB");
    		} else if (_1 === (1)) {
  :�			w.write = $methodExpr(ptrType$1, "writeMSB");
    		} else {
  ;			w.err = errors.New("lzw: unknown order");
  ;2			$s = -1; return;
    		}
  ;=		/* */ if (litWidth < 2 || 8 < litWidth) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (litWidth < 2 || 8 < litWidth) { */ case 1:
  ;a			_r = fmt.Errorf("lzw: litWidth %d out of range", new sliceType$1([new $Int(litWidth)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			w.err = _r;
  ;�			$s = -1; return;
    		/* } */ case 2:
  ;�		_tuple = $assertType(dst, writer, true);
		bw = _tuple[0];
		ok = _tuple[1];
    		if (!ok && !($interfaceIsEqual(dst, $ifaceNil))) {
  ;�			bw = bufio.NewWriter(dst);
    		}
  ;�		w.w = bw;
  <		lw = ((litWidth >>> 0));
  <		w.order = order;
  <,		w.width = 1 + lw >>> 0;
  <>		w.litWidth = lw;
  <O		w.hi = ((y = lw, y < 32 ? (1 << y) : 0) >>> 0) + 1 >>> 0;
  <a		w.overflow = (y$1 = ((lw + 1 >>> 0)), y$1 < 32 ? (1 << y$1) : 0) >>> 0;
  <}		w.savedCode = 4294967295;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.init }; } $f._1 = _1; $f._r = _r; $f._tuple = _tuple; $f.bw = bw; $f.dst = dst; $f.litWidth = litWidth; $f.lw = lw; $f.ok = ok; $f.order = order; $f.w = w; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.init = function(dst, order, litWidth) { return this.$val.init(dst, order, litWidth); };
Writerinit~	bufio.NewWritercompress/lzw.Writercompress/lzw.ptrType$1compress/lzw.sliceType$1compress/lzw.writeLSB~compress/lzw.writeMSB~compress/lzw.writer
errors.New
fmt.Errorf ��{"Base":15514,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/lzw/reader.go","Base":1,"Size":8141,"Lines":[0,55,109,159,160,231,300,356,359,427,500,559,562,637,702,721,733,734,801,834,835,844,853,863,870,876,878,879,938,953,954,962,1038,1056,1127,1145,1150,1152,1153,1161,1186,1215,1251,1253,1254,1329,1344,1365,1389,1406,1421,1436,1498,1572,1588,1589,1640,1683,1754,1811,1815,1888,1911,1915,1979,1983,2023,2062,2063,2134,2178,2233,2306,2346,2375,2405,2406,2449,2513,2583,2656,2688,2745,2804,2836,2878,2922,2924,2925,2999,3044,3069,3096,3114,3131,3135,3168,3183,3186,3229,3249,3269,3287,3289,3290,3363,3408,3433,3460,3478,3495,3499,3539,3554,3557,3599,3619,3639,3657,3659,3660,3745,3792,3799,3824,3850,3877,3894,3898,3918,3937,3941,3954,3957,3959,3960,4025,4075,4126,4154,4227,4233,4240,4265,4283,4305,4335,4340,4355,4364,4368,4379,4402,4432,4463,4472,4509,4550,4583,4611,4616,4640,4674,4690,4719,4750,4762,4784,4802,4816,4837,4870,4923,4995,5072,5126,5141,5164,5185,5191,5218,5226,5241,5246,5312,5334,5364,5372,5392,5397,5423,5468,5505,5546,5576,5604,5609,5620,5663,5677,5681,5711,5737,5763,5788,5793,5821,5853,5919,5986,6023,6034,6046,6060,6090,6095,6099,6125,6134,6138,6141,6167,6194,6203,6205,6206,6265,6266,6345,6392,6425,6476,6488,6490,6491,6559,6579,6646,6661,6691,6693,6694,6736,6810,6857,6919,6993,7014,7087,7149,7177,7180,7255,7272,7343,7381,7383,7384,7451,7469,7499,7509,7511,7512,7578,7594,7605,7634,7645,7674,7684,7727,7736,7739,7774,7838,7847,7850,7851,7882,7906,7934,7937,7947,7970,8000,8039,8075,8110,8139],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/lzw/writer.go","Base":8143,"Size":7370,"Lines":[0,55,109,159,160,172,173,182,191,201,208,214,216,217,262,286,301,316,318,319,327,399,440,465,490,567,646,671,698,769,832,850,852,853,927,971,992,1050,1060,1118,1167,1180,1215,1229,1241,1253,1305,1320,1374,1437,1458,1532,1596,1614,1688,1742,1753,1827,1900,1971,2005,2030,2032,2033,2104,2148,2172,2192,2212,2267,2281,2285,2300,2315,2318,2330,2332,2333,2403,2447,2488,2508,2528,2589,2603,2607,2622,2637,2640,2652,2654,2655,2732,2791,2843,2844,2917,2991,3034,3067,3075,3100,3112,3131,3134,3156,3191,3235,3249,3253,3280,3299,3325,3352,3381,3385,3408,3411,3423,3425,3426,3501,3555,3574,3592,3595,3613,3629,3632,3689,3713,3732,3801,3821,3826,3830,3833,3845,3866,3892,3943,3975,3978,3984,4007,4030,4057,4130,4163,4201,4257,4278,4301,4319,4324,4351,4369,4373,4446,4474,4520,4539,4543,4560,4634,4706,4744,4774,4787,4792,4808,4827,4831,4904,4912,4950,4989,4999,5004,5037,5041,5044,5064,5079,5081,5082,5157,5183,5216,5235,5261,5275,5279,5294,5297,5350,5369,5403,5436,5486,5500,5504,5564,5578,5582,5585,5609,5643,5684,5697,5700,5726,5744,5766,5783,5787,5842,5856,5860,5863,5883,5885,5886,5954,5974,6041,6056,6086,6088,6089,6132,6206,6281,6302,6375,6453,6456,6532,6549,6621,6659,6661,6662,6729,6747,6777,6787,6789,6790,6856,6872,6883,6914,6925,6956,6966,7009,7018,7021,7056,7120,7129,7132,7156,7180,7208,7211,7221,7243,7260,7278,7295,7313,7341,7368],"Infos":null}]}
 