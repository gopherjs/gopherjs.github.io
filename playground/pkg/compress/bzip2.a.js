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
GoLinkname�� Implementation�� 	Reference��   ��y��compress/bzip2bzip2bufioiosort��i B6rReaderio ErrorsStructuralErrorReadpnerrbzip2	NewReader 	F        T   .  	  % *? , . T A2 8		 3/ bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	bitReader�x	bitReader = $pkg.bitReader = $newType(0, $kindStruct, "bzip2.bitReader", true, "compress/bzip2", false, function(r_, n_, bits_, err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.n = new $Uint64(0, 0);
			this.bits = 0;
			this.err = $ifaceNil;
			return;
		}
		this.r = r_;
		this.n = n_;
		this.bits = bits_;
		this.err = err_;
	});
�e	ptrType.methods = [{prop: "ReadBits64", name: "ReadBits64", pkg: "", typ: $funcType([$Uint], [$Uint64], false)}, {prop: "ReadBits", name: "ReadBits", pkg: "", typ: $funcType([$Uint], [$Int], false)}, {prop: "ReadBit", name: "ReadBit", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}];
�v	bitReader.init("compress/bzip2", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.ByteReader, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "bits", name: "bits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	bitReadercompress/bzip2.bitReadercompress/bzip2.ptrTypeio.ByteReader  StructuralError��	StructuralError = $pkg.StructuralError = $newType(8, $kindString, "bzip2.StructuralError", true, "compress/bzip2", true, null);
l	StructuralError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
StructuralErrorcompress/bzip2.StructuralError  reader�n	reader = $pkg.reader = $newType(0, $kindStruct, "bzip2.reader", true, "compress/bzip2", false, function(br_, fileCRC_, blockCRC_, wantBlockCRC_, setupDone_, blockSize_, eof_, c_, tt_, tPos_, preRLE_, preRLEUsed_, lastByte_, byteRepeats_, repeats_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.br = new bitReader.ptr($ifaceNil, new $Uint64(0, 0), 0, $ifaceNil);
			this.fileCRC = 0;
			this.blockCRC = 0;
			this.wantBlockCRC = 0;
			this.setupDone = false;
			this.blockSize = 0;
			this.eof = false;
			this.c = arrayType$1.zero();
			this.tt = sliceType.nil;
			this.tPos = 0;
			this.preRLE = sliceType.nil;
			this.preRLEUsed = 0;
			this.lastByte = 0;
			this.byteRepeats = 0;
			this.repeats = 0;
			return;
		}
		this.br = br_;
		this.fileCRC = fileCRC_;
		this.blockCRC = blockCRC_;
		this.wantBlockCRC = wantBlockCRC_;
		this.setupDone = setupDone_;
		this.blockSize = blockSize_;
		this.eof = eof_;
		this.c = c_;
		this.tt = tt_;
		this.tPos = tPos_;
		this.preRLE = preRLE_;
		this.preRLEUsed = preRLEUsed_;
		this.lastByte = lastByte_;
		this.byteRepeats = byteRepeats_;
		this.repeats = repeats_;
	});
�	ptrType$1.methods = [{prop: "setup", name: "setup", pkg: "compress/bzip2", typ: $funcType([$Bool], [$error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "readFromBlock", name: "readFromBlock", pkg: "compress/bzip2", typ: $funcType([sliceType$2], [$Int], false)}, {prop: "read", name: "read", pkg: "compress/bzip2", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "readBlock", name: "readBlock", pkg: "compress/bzip2", typ: $funcType([], [$error], false)}];
��	reader.init("compress/bzip2", [{prop: "br", name: "br", embedded: false, exported: false, typ: bitReader, tag: ""}, {prop: "fileCRC", name: "fileCRC", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "blockCRC", name: "blockCRC", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "wantBlockCRC", name: "wantBlockCRC", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "setupDone", name: "setupDone", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "blockSize", name: "blockSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "eof", name: "eof", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "c", name: "c", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "tt", name: "tt", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "tPos", name: "tPos", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "preRLE", name: "preRLE", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "preRLEUsed", name: "preRLEUsed", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastByte", name: "lastByte", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "byteRepeats", name: "byteRepeats", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "repeats", name: "repeats", embedded: false, exported: false, typ: $Uint, tag: ""}]);
readercompress/bzip2.arrayType$1compress/bzip2.bitReadercompress/bzip2.ptrType$1compress/bzip2.readercompress/bzip2.sliceTypecompress/bzip2.sliceType$2  huffmanTree�@	huffmanTree = $pkg.huffmanTree = $newType(0, $kindStruct, "bzip2.huffmanTree", true, "compress/bzip2", false, function(nodes_, nextNode_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.nodes = sliceType$5.nil;
			this.nextNode = 0;
			return;
		}
		this.nodes = nodes_;
		this.nextNode = nextNode_;
	});
o	ptrType$2.methods = [{prop: "Decode", name: "Decode", pkg: "", typ: $funcType([ptrType], [$Uint16], false)}];
��	huffmanTree.init("compress/bzip2", [{prop: "nodes", name: "nodes", embedded: false, exported: false, typ: sliceType$5, tag: ""}, {prop: "nextNode", name: "nextNode", embedded: false, exported: false, typ: $Int, tag: ""}]);
huffmanTreecompress/bzip2.huffmanTreecompress/bzip2.ptrTypecompress/bzip2.ptrType$2compress/bzip2.sliceType$5  huffmanNode��	huffmanNode = $pkg.huffmanNode = $newType(0, $kindStruct, "bzip2.huffmanNode", true, "compress/bzip2", false, function(left_, right_, leftValue_, rightValue_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.left = 0;
			this.right = 0;
			this.leftValue = 0;
			this.rightValue = 0;
			return;
		}
		this.left = left_;
		this.right = right_;
		this.leftValue = leftValue_;
		this.rightValue = rightValue_;
	});
��	huffmanNode.init("compress/bzip2", [{prop: "left", name: "left", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "right", name: "right", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "leftValue", name: "leftValue", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "rightValue", name: "rightValue", embedded: false, exported: false, typ: $Uint16, tag: ""}]);
huffmanNodecompress/bzip2.huffmanNode  huffmanSymbolLengthPair�N	huffmanSymbolLengthPair = $pkg.huffmanSymbolLengthPair = $newType(0, $kindStruct, "bzip2.huffmanSymbolLengthPair", true, "compress/bzip2", false, function(value_, length_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.value = 0;
			this.length = 0;
			return;
		}
		this.value = value_;
		this.length = length_;
	});
��	huffmanSymbolLengthPair.init("compress/bzip2", [{prop: "value", name: "value", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "length", name: "length", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
huffmanSymbolLengthPair&compress/bzip2.huffmanSymbolLengthPair  huffmanCode�\	huffmanCode = $pkg.huffmanCode = $newType(0, $kindStruct, "bzip2.huffmanCode", true, "compress/bzip2", false, function(code_, codeLen_, value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.code = 0;
			this.codeLen = 0;
			this.value = 0;
			return;
		}
		this.code = code_;
		this.codeLen = codeLen_;
		this.value = value_;
	});
�3	huffmanCode.init("compress/bzip2", [{prop: "code", name: "code", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "codeLen", name: "codeLen", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "value", name: "value", embedded: false, exported: false, typ: $Uint16, tag: ""}]);
huffmanCodecompress/bzip2.huffmanCode  moveToFrontDecoder��	moveToFrontDecoder = $pkg.moveToFrontDecoder = $newType(12, $kindSlice, "bzip2.moveToFrontDecoder", true, "compress/bzip2", false, null);
��	moveToFrontDecoder.methods = [{prop: "Decode", name: "Decode", pkg: "", typ: $funcType([$Int], [$Uint8], false)}, {prop: "First", name: "First", pkg: "", typ: $funcType([], [$Uint8], false)}];
"	moveToFrontDecoder.init($Uint8);
moveToFrontDecoder!compress/bzip2.moveToFrontDecoder  	arrayType'	arrayType = $arrayType($Uint32, 256);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint, 256);
arrayType$1  	sliceType"	sliceType = $sliceType($Uint32);
	sliceType  sliceType$1"	sliceType$1 = $sliceType($Bool);
sliceType$1  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  sliceType$3(	sliceType$3 = $sliceType(huffmanTree);
sliceType$3compress/bzip2.huffmanTree  sliceType$4"	sliceType$4 = $sliceType($Uint);
sliceType$4  sliceType$5(	sliceType$5 = $sliceType(huffmanNode);
sliceType$5compress/bzip2.huffmanNode  sliceType$64	sliceType$6 = $sliceType(huffmanSymbolLengthPair);
sliceType$6&compress/bzip2.huffmanSymbolLengthPair  sliceType$7(	sliceType$7 = $sliceType(huffmanCode);
sliceType$7compress/bzip2.huffmanCode  ptrType 	ptrType = $ptrType(bitReader);
ptrTypecompress/bzip2.bitReader  	ptrType$1	ptrType$1 = $ptrType(reader);
	ptrType$1compress/bzip2.reader  	ptrType$2$	ptrType$2 = $ptrType(huffmanTree);
	ptrType$2compress/bzip2.huffmanTree  crctab		crctab = arrayType.zero();
crctabcompress/bzip2.arrayTypecompress/bzip2.crctab compress/bzip2.newBitReadercompress/bzip2newBitReader newBitReader�'	newBitReader = function(r) {
		var _tuple, byter, ok, r;
  �		_tuple = $assertType(r, io.ByteReader, true);
		byter = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  �			byter = bufio.NewReader(r);
    		}
  		return new bitReader.ptr(byter, new $Uint64(0, 0), 0, $ifaceNil);
    	};
newBitReaderbufio.NewReadercompress/bzip2.bitReadercompress/bzip2.newBitReaderio.ByteReader &(*compress/bzip2.bitReader).ReadBits64 ��	bitReader.ptr.prototype.ReadBits64 = function(bits) {
		var _r, _tuple, b, bits, br, err, n, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; bits = $f.bits; br = $f.br; err = $f.err; n = $f.n; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Uint64(0, 0);
		br = this;
  3		/* while (true) { */ case 1:
			/* if (!(bits > br.bits)) { break; } */ if(!(bits > br.bits)) { $s = 2; continue; }
  J			_r = br.r.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			b = _tuple[0];
			err = _tuple[1];
    			if ($interfaceIsEqual(err, io.EOF)) {
  |				err = io.ErrUnexpectedEOF;
    			}
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				br.err = err;
    				n = new $Uint64(0, 0);
				$s = -1; return n;
    			}
  �			br.n = $shiftLeft64(br.n, (8));
  �			br.n = (x = br.n, x$1 = (new $Uint64(0, b)), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
  �			br.bits = br.bits + (8) >>> 0;
    		$s = 1; continue;
		case 2:
  �		n = (x$2 = $shiftRightUint64(br.n, ((br.bits - bits >>> 0))), x$3 = (x$4 = $shiftLeft64(new $Uint64(0, 1), bits), new $Uint64(x$4.$high - 0, x$4.$low - 1)), new $Uint64(x$2.$high & x$3.$high, (x$2.$low & x$3.$low) >>> 0));
  �		br.bits = br.bits - (bits) >>> 0;
  �		$s = -1; return n;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: bitReader.ptr.prototype.ReadBits64 }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.bits = bits; $f.br = br; $f.err = err; $f.n = n; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	bitReader.prototype.ReadBits64 = function(bits) { return this.$val.ReadBits64(bits); };
	bitReadercompress/bzip2.bitReaderio.EOFio.ErrUnexpectedEOF $(*compress/bzip2.bitReader).ReadBits �K	bitReader.ptr.prototype.ReadBits = function(bits) {
		var _r, bits, br, n, n64, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; bits = $f.bits; br = $f.br; n = $f.n; n64 = $f.n64; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		br = this;
  7		_r = br.ReadBits64(bits); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		n64 = _r;
    		n = ((n64.$low >> 0));
		$s = -1; return n;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: bitReader.ptr.prototype.ReadBits }; } $f._r = _r; $f.bits = bits; $f.br = br; $f.n = n; $f.n64 = n64; $f.$s = $s; $f.$r = $r; return $f;
	};
	bitReader.prototype.ReadBits = function(bits) { return this.$val.ReadBits(bits); };
	bitReadercompress/bzip2.bitReader #(*compress/bzip2.bitReader).ReadBit ��	bitReader.ptr.prototype.ReadBit = function() {
		var _r, br, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; br = $f.br; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		br = this;
  �		_r = br.ReadBits(1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		n = _r;
  �		$s = -1; return !((n === 0));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: bitReader.ptr.prototype.ReadBit }; } $f._r = _r; $f.br = br; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	bitReader.prototype.ReadBit = function() { return this.$val.ReadBit(); };
	bitReadercompress/bzip2.bitReader (*compress/bzip2.bitReader).Err ��	bitReader.ptr.prototype.Err = function() {
		var br;
		br = this;
  �		return br.err;
    	};
	bitReader.prototype.Err = function() { return this.$val.Err(); };
	bitReadercompress/bzip2.bitReader &(compress/bzip2.StructuralError).Error ��	StructuralError.prototype.Error = function() {
		var s;
		s = this.$val;
  
f		return "bzip2 data invalid: " + (s);
    	};
	$ptrType(StructuralError).prototype.Error = function() { return new StructuralError(this.$get()).Error(); };
StructuralErrorcompress/bzip2.StructuralError compress/bzip2.NewReadercompress/bzip2	NewReader 	NewReader�I	NewReader = function(r) {
		var bz2, r;
  �		bz2 = new reader.ptr(new bitReader.ptr($ifaceNil, new $Uint64(0, 0), 0, $ifaceNil), 0, 0, 0, false, 0, false, arrayType$1.zero(), sliceType.nil, 0, sliceType.nil, 0, 0, 0, 0);
  �		bitReader.copy(bz2.br, newBitReader(r));
  �		return bz2;
    	};
	$pkg.NewReader = NewReader;
	NewReadercompress/bzip2.NewReadercompress/bzip2.arrayType$1compress/bzip2.bitReadercompress/bzip2.newBitReadercompress/bzip2.readercompress/bzip2.sliceType (*compress/bzip2.reader).setup ��	reader.ptr.prototype.setup = function(needMagic) {
		var _r, _r$1, _r$2, br, bz2, level, magic, needMagic, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; br = $f.br; bz2 = $f.bz2; level = $f.level; magic = $f.magic; needMagic = $f.needMagic; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		bz2 = this;
  �		br = bz2.br;
  �		/* */ if (needMagic) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (needMagic) { */ case 1:
  �			_r = br.ReadBits(16); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			magic = _r;
    			if (!((magic === 16986))) {
  0				$s = -1; return new StructuralError("bad magic value");
    			}
    		/* } */ case 2:
  c		_r$1 = br.ReadBits(8); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		t = _r$1;
    		if (!((t === 104))) {
  �			$s = -1; return new StructuralError("non-Huffman entropy encoding");
    		}
  �		_r$2 = br.ReadBits(8); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		level = _r$2;
    		if (level < 49 || level > 57) {
  �			$s = -1; return new StructuralError("invalid compression level");
    		}
  8		bz2.fileCRC = 0;
  I		bz2.blockSize = $imul(100000, ((level - 48 >> 0)));
    		if (bz2.blockSize > bz2.tt.$length) {
  �			bz2.tt = $makeSlice(sliceType, bz2.blockSize);
    		}
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: reader.ptr.prototype.setup }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.br = br; $f.bz2 = bz2; $f.level = level; $f.magic = magic; $f.needMagic = needMagic; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	reader.prototype.setup = function(needMagic) { return this.$val.setup(needMagic); };
readersetup~compress/bzip2.StructuralErrorcompress/bzip2.readercompress/bzip2.sliceType (*compress/bzip2.reader).Read � 	reader.ptr.prototype.Read = function(buf) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, brErr, brErr$1, buf, bz2, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; brErr = $f.brErr; brErr$1 = $f.brErr$1; buf = $f.buf; bz2 = $f.bz2; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		bz2 = this;
    		if (bz2.eof) {
    			_tmp = 0;
			_tmp$1 = io.EOF;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  0		/* */ if (!bz2.setupDone) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!bz2.setupDone) { */ case 1:
  F			_r = bz2.setup(true); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
  ^			brErr = bz2.br.Err();
    			if (!($interfaceIsEqual(brErr, $ifaceNil))) {
  �				err = brErr;
    			}
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$2 = 0;
				_tmp$3 = err;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
  �			bz2.setupDone = true;
    		/* } */ case 2:
  �		_r$1 = bz2.read(buf); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		n = _tuple[0];
		err = _tuple[1];
  �		brErr$1 = bz2.br.Err();
    		if (!($interfaceIsEqual(brErr$1, $ifaceNil))) {
  !			err = brErr$1;
    		}
  1		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: reader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.brErr = brErr; $f.brErr$1 = brErr$1; $f.buf = buf; $f.bz2 = bz2; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	reader.prototype.Read = function(buf) { return this.$val.Read(buf); };
readercompress/bzip2.readercompress/bzip2.read~compress/bzip2.setup~io.EOF &(*compress/bzip2.reader).readFromBlock ��	reader.ptr.prototype.readFromBlock = function(buf) {
		var b, buf, bz2, n, x, x$1, y;
		bz2 = this;
  �		n = 0;
  �		while (true) {
			if (!((bz2.repeats > 0 || bz2.preRLEUsed < bz2.preRLE.$length) && n < buf.$length)) { break; }
    			if (bz2.repeats > 0) {
  �				((n < 0 || n >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + n] = ((bz2.lastByte << 24 >>> 24)));
  �				n = n + (1) >> 0;
  �				bz2.repeats = bz2.repeats - (1) >>> 0;
    				if (bz2.repeats === 0) {
  
					bz2.lastByte = -1;
    				}
  $				continue;
    			}
  4			bz2.tPos = (x = bz2.preRLE, x$1 = bz2.tPos, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  V			b = ((bz2.tPos << 24 >>> 24));
  l			bz2.tPos = (y = (8), y < 32 ? (bz2.tPos >>> y) : 0) >>> 0;
  }			bz2.preRLEUsed = bz2.preRLEUsed + (1) >> 0;
    			if (bz2.byteRepeats === 3) {
  �				bz2.repeats = ((b >>> 0));
  �				bz2.byteRepeats = 0;
  �				continue;
    			}
    			if (bz2.lastByte === ((b >> 0))) {
  				bz2.byteRepeats = bz2.byteRepeats + (1) >>> 0;
    			} else {
  -				bz2.byteRepeats = 0;
    			}
  G			bz2.lastByte = ((b >> 0));
  `			((n < 0 || n >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + n] = b);
  m			n = n + (1) >> 0;
    		}
  v		return n;
    	};
	reader.prototype.readFromBlock = function(buf) { return this.$val.readFromBlock(buf); };
readerreadFromBlock~compress/bzip2.reader (*compress/bzip2.reader).read �4	reader.ptr.prototype.read = function(buf) {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _tuple, _tuple$1, b, br, buf, bz2, err, err$1, err$2, n, wantFileCRC, x, x$1, z, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; br = $f.br; buf = $f.buf; bz2 = $f.bz2; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; n = $f.n; wantFileCRC = $f.wantFileCRC; x = $f.x; x$1 = $f.x$1; z = $f.z; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		bz2 = this;
  �		/* while (true) { */ case 1:
  �			n = bz2.readFromBlock(buf);
    			if (n > 0 || (buf.$length === 0)) {
  �				bz2.blockCRC = updateCRC(bz2.blockCRC, $subslice(buf, 0, n));
  .				$s = -1; return [n, $ifaceNil];
    			}
    			if (!((bz2.blockCRC === bz2.wantBlockCRC))) {
  �				bz2.br.err = new StructuralError("block checksum mismatch");
  �				$s = -1; return [0, bz2.br.err];
    			}
  �			br = bz2.br;
    				_r = br.ReadBits64(48); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_1 = _r;
  f				/* */ if ((x = new $Uint64(12609, 1495683929), (_1.$high === x.$high && _1.$low === x.$low))) { $s = 5; continue; }
				/* */ if ((x$1 = new $Uint64(6002, 1161318544), (_1.$high === x$1.$high && _1.$low === x$1.$low))) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if ((x = new $Uint64(12609, 1495683929), (_1.$high === x.$high && _1.$low === x.$low))) { */ case 5:
  �					_r$1 = bz2.readBlock(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					err = _r$1;
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
  �						$s = -1; return [0, err];
    					}
    					$s = 8; continue;
    				/* } else if ((x$1 = new $Uint64(6002, 1161318544), (_1.$high === x$1.$high && _1.$low === x$1.$low))) { */ case 6:
  					_r$2 = br.ReadBits64(32); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					wantFileCRC = ((_r$2.$low >>> 0));
    					if (!($interfaceIsEqual(br.err, $ifaceNil))) {
  R						$s = -1; return [0, br.err];
    					}
    					if (!((bz2.fileCRC === wantFileCRC))) {
  �						br.err = new StructuralError("file checksum mismatch");
  �						$s = -1; return [0, br.err];
    					}
  Q					/* */ if (!(((_r$3 = br.bits % 8, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero")) === 0))) { $s = 11; continue; }
					/* */ $s = 12; continue;
    					/* if (!(((_r$3 = br.bits % 8, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero")) === 0))) { */ case 11:
  i						_r$5 = br.ReadBits((_r$4 = br.bits % 8, _r$4 === _r$4 ? _r$4 : $throwRuntimeError("integer divide by zero"))); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
						_r$5;
    					/* } */ case 12:
  �					_r$6 = br.r.ReadByte(); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_tuple = _r$6;
					b = _tuple[0];
					err$1 = _tuple[1];
    					if ($interfaceIsEqual(err$1, io.EOF)) {
  �						br.err = io.EOF;
  �						bz2.eof = true;
  �						$s = -1; return [0, io.EOF];
    					}
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  						br.err = err$1;
  #						$s = -1; return [0, err$1];
    					}
  9					_r$7 = br.r.ReadByte(); /* */ $s = 15; case 15: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					_tuple$1 = _r$7;
					z = _tuple$1[0];
					err$1 = _tuple$1[1];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    						if ($interfaceIsEqual(err$1, io.EOF)) {
  �							err$1 = io.ErrUnexpectedEOF;
    						}
  �						br.err = err$1;
  �						$s = -1; return [0, err$1];
    					}
    					if (!((b === 66)) || !((z === 90))) {
  �						$s = -1; return [0, new StructuralError("bad magic value in continuation file")];
    					}
  8					_r$8 = bz2.setup(false); /* */ $s = 16; case 16: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
					err$2 = _r$8;
    					if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  b						$s = -1; return [0, err$2];
    					}
    					$s = 8; continue;
				/* } else { */ case 7:
  0					$s = -1; return [0, new StructuralError("bad magic value found")];
    				/* } */ case 8:
    			case 3:
    		$s = 1; continue;
		case 2:
    		$s = -1; return [0, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: reader.ptr.prototype.read }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.br = br; $f.buf = buf; $f.bz2 = bz2; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.n = n; $f.wantFileCRC = wantFileCRC; $f.x = x; $f.x$1 = x$1; $f.z = z; $f.$s = $s; $f.$r = $r; return $f;
	};
	reader.prototype.read = function(buf) { return this.$val.read(buf); };
readerread~compress/bzip2.StructuralErrorcompress/bzip2.readBlock~compress/bzip2.readFromBlock~compress/bzip2.readercompress/bzip2.setup~compress/bzip2.updateCRCio.EOFio.ErrUnexpectedEOF "(*compress/bzip2.reader).readBlock �=2	reader.ptr.prototype.readBlock = function() {
		var _i, _i$1, _i$2, _i$3, _r, _r$1, _r$10, _r$11, _r$12, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _ref$3, _tuple, b, b$1, bits, br, bufIndex, bz2, c, currentHuffmanTree, decoded, err, huffmanTrees, i, i$1, i$2, i$3, i$4, inc, j, length, lengths, mtf, mtfTreeDecoder, nextSymbol, numHuffmanTrees, numSelectors, numSymbols, origPtr, randomized, repeat, repeatPower, selectorIndex, symRange, symbol, symbolPresent, symbolRangeUsedBitmap, symbols, treeIndexes, v, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1, y$2, y$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _tuple = $f._tuple; b = $f.b; b$1 = $f.b$1; bits = $f.bits; br = $f.br; bufIndex = $f.bufIndex; bz2 = $f.bz2; c = $f.c; currentHuffmanTree = $f.currentHuffmanTree; decoded = $f.decoded; err = $f.err; huffmanTrees = $f.huffmanTrees; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; inc = $f.inc; j = $f.j; length = $f.length; lengths = $f.lengths; mtf = $f.mtf; mtfTreeDecoder = $f.mtfTreeDecoder; nextSymbol = $f.nextSymbol; numHuffmanTrees = $f.numHuffmanTrees; numSelectors = $f.numSelectors; numSymbols = $f.numSymbols; origPtr = $f.origPtr; randomized = $f.randomized; repeat = $f.repeat; repeatPower = $f.repeatPower; selectorIndex = $f.selectorIndex; symRange = $f.symRange; symbol = $f.symbol; symbolPresent = $f.symbolPresent; symbolRangeUsedBitmap = $f.symbolRangeUsedBitmap; symbols = $f.symbols; treeIndexes = $f.treeIndexes; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		err = $ifaceNil;
		bz2 = this;
  		br = bz2.br;
  		_r = br.ReadBits64(32); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		bz2.wantBlockCRC = ((_r.$low >>> 0));
  �		bz2.blockCRC = 0;
  �		bz2.fileCRC = (((((bz2.fileCRC << 1 >>> 0) | (bz2.fileCRC >>> 31 >>> 0)) >>> 0)) ^ bz2.wantBlockCRC) >>> 0;
  �		_r$1 = br.ReadBits(1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		randomized = _r$1;
    		if (!((randomized === 0))) {
    			err = new StructuralError("deprecated randomized files");
			$s = -1; return err;
    		}
   H		_r$2 = br.ReadBits(24); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		origPtr = ((_r$2 >>> 0));
  !		_r$3 = br.ReadBits(16); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		symbolRangeUsedBitmap = _r$3;
  !:		symbolPresent = $makeSlice(sliceType$1, 256);
  !^		numSymbols = 0;
  !s		symRange = 0;
		/* while (true) { */ case 5:
			/* if (!(symRange < 16)) { break; } */ if(!(symRange < 16)) { $s = 6; continue; }
  !�			/* */ if (!(((symbolRangeUsedBitmap & (((y = ((15 - symRange >>> 0)), y < 32 ? (1 << y) : 0) >> 0))) === 0))) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (!(((symbolRangeUsedBitmap & (((y = ((15 - symRange >>> 0)), y < 32 ? (1 << y) : 0) >> 0))) === 0))) { */ case 7:
  !�				_r$4 = br.ReadBits(16); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				bits = _r$4;
  !�				symbol = 0;
				while (true) {
					if (!(symbol < 16)) { break; }
    					if (!(((bits & (((y$1 = ((15 - symbol >>> 0)), y$1 < 32 ? (1 << y$1) : 0) >> 0))) === 0))) {
  "O						(x = (16 * symRange >>> 0) + symbol >>> 0, ((x < 0 || x >= symbolPresent.$length) ? ($throwRuntimeError("index out of range"), undefined) : symbolPresent.$array[symbolPresent.$offset + x] = true));
  "}						numSymbols = numSymbols + (1) >> 0;
    					}
  "					symbol = symbol + (1) >>> 0;
    				}
    			/* } */ case 8:
  !�			symRange = symRange + (1) >>> 0;
    		$s = 5; continue;
		case 6:
    		if (numSymbols === 0) {
    			err = new StructuralError("no symbols in input");
			$s = -1; return err;
    		}
  #H		_r$5 = br.ReadBits(3); /* */ $s = 10; case 10: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		numHuffmanTrees = _r$5;
    		if (numHuffmanTrees < 2 || numHuffmanTrees > 6) {
    			err = new StructuralError("invalid number of Huffman trees");
			$s = -1; return err;
    		}
  $j		_r$6 = br.ReadBits(15); /* */ $s = 11; case 11: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		numSelectors = _r$6;
  $�		treeIndexes = $makeSlice(sliceType$2, numSelectors);
  %		mtfTreeDecoder = newMTFDecoderWithRange(numHuffmanTrees);
  %G		_ref = treeIndexes;
		_i = 0;
		/* while (true) { */ case 12:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 13; continue; }
			i = _i;
  %f			c = 0;
  %o			/* while (true) { */ case 14:
  %x				_r$7 = br.ReadBits(1); /* */ $s = 16; case 16: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				inc = _r$7;
    				if (inc === 0) {
  %�					/* break; */ $s = 15; continue;
    				}
  %�				c = c + (1) >> 0;
    			$s = 14; continue;
			case 15:
    			if (c >= numHuffmanTrees) {
    				err = new StructuralError("tree index too large");
				$s = -1; return err;
    			}
  &			((i < 0 || i >= treeIndexes.$length) ? ($throwRuntimeError("index out of range"), undefined) : treeIndexes.$array[treeIndexes.$offset + i] = mtfTreeDecoder.Decode(c));
    			_i++;
		$s = 12; continue;
		case 13:
  &�		symbols = $makeSlice(sliceType$2, numSymbols);
  &�		nextSymbol = 0;
  &�		i$1 = 0;
		while (true) {
			if (!(i$1 < 256)) { break; }
    			if (((i$1 < 0 || i$1 >= symbolPresent.$length) ? ($throwRuntimeError("index out of range"), undefined) : symbolPresent.$array[symbolPresent.$offset + i$1])) {
  '				((nextSymbol < 0 || nextSymbol >= symbols.$length) ? ($throwRuntimeError("index out of range"), undefined) : symbols.$array[symbols.$offset + nextSymbol] = ((i$1 << 24 >>> 24)));
  '9				nextSymbol = nextSymbol + (1) >> 0;
    			}
  &�			i$1 = i$1 + (1) >> 0;
    		}
  'N		mtf = newMTFDecoder(symbols);
  'n		numSymbols = numSymbols + (2) >> 0;
  '�		huffmanTrees = $makeSlice(sliceType$3, numHuffmanTrees);
  (		lengths = $makeSlice(sliceType$2, numSymbols);
  (@		_ref$1 = huffmanTrees;
		_i$1 = 0;
		/* while (true) { */ case 17:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 18; continue; }
			i$2 = _i$1;
  (�			_r$8 = br.ReadBits(5); /* */ $s = 19; case 19: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			length = _r$8;
  (�			_ref$2 = lengths;
			_i$2 = 0;
			/* while (true) { */ case 20:
				/* if (!(_i$2 < _ref$2.$length)) { break; } */ if(!(_i$2 < _ref$2.$length)) { $s = 21; continue; }
				j = _i$2;
  (�				/* while (true) { */ case 22:
    					if (length < 1 || length > 20) {
    						err = new StructuralError("Huffman length out of range");
						$s = -1; return err;
    					}
  )F					_r$9 = br.ReadBit(); /* */ $s = 26; case 26: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					/* */ if (!_r$9) { $s = 24; continue; }
					/* */ $s = 25; continue;
    					/* if (!_r$9) { */ case 24:
  )^						/* break; */ $s = 23; continue;
    					/* } */ case 25:
  )n					_r$10 = br.ReadBit(); /* */ $s = 30; case 30: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
					/* */ if (_r$10) { $s = 27; continue; }
					/* */ $s = 28; continue;
    					/* if (_r$10) { */ case 27:
  )�						length = length - (1) >> 0;
    						$s = 29; continue;
					/* } else { */ case 28:
  )�						length = length + (1) >> 0;
    					/* } */ case 29:
    				$s = 22; continue;
				case 23:
  )�				((j < 0 || j >= lengths.$length) ? ($throwRuntimeError("index out of range"), undefined) : lengths.$array[lengths.$offset + j] = ((length << 24 >>> 24)));
    				_i$2++;
			$s = 20; continue;
			case 21:
  )�			_r$11 = newHuffmanTree(lengths); /* */ $s = 31; case 31: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_tuple = _r$11;
			huffmanTree.copy(((i$2 < 0 || i$2 >= huffmanTrees.$length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanTrees.$array[huffmanTrees.$offset + i$2]), _tuple[0]);
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				err = err;
				$s = -1; return err;
    			}
    			_i$1++;
		$s = 17; continue;
		case 18:
  *0		selectorIndex = 1;
    		if (treeIndexes.$length === 0) {
    			err = new StructuralError("no tree selectors given");
			$s = -1; return err;
    		}
    		if ((((0 >= treeIndexes.$length ? ($throwRuntimeError("index out of range"), undefined) : treeIndexes.$array[treeIndexes.$offset + 0]) >> 0)) >= huffmanTrees.$length) {
    			err = new StructuralError("tree selector out of range");
			$s = -1; return err;
    		}
  +		currentHuffmanTree = $clone((x$1 = (0 >= treeIndexes.$length ? ($throwRuntimeError("index out of range"), undefined) : treeIndexes.$array[treeIndexes.$offset + 0]), ((x$1 < 0 || x$1 >= huffmanTrees.$length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanTrees.$array[huffmanTrees.$offset + x$1])), huffmanTree);
  +R		bufIndex = 0;
  ,f		repeat = 0;
  ,s		repeatPower = 0;
  ,�		_ref$3 = bz2.c;
		_i$3 = 0;
		while (true) {
			if (!(_i$3 < 256)) { break; }
			i$3 = _i$3;
  ,�			(x$2 = bz2.c, ((i$3 < 0 || i$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$3] = 0));
    			_i$3++;
		}
  ,�		decoded = 0;
  -F		/* while (true) { */ case 32:
    			if (decoded === 50) {
    				if (selectorIndex >= numSelectors) {
    					err = new StructuralError("insufficient selector indices for number of symbols");
					$s = -1; return err;
    				}
    				if (((((selectorIndex < 0 || selectorIndex >= treeIndexes.$length) ? ($throwRuntimeError("index out of range"), undefined) : treeIndexes.$array[treeIndexes.$offset + selectorIndex]) >> 0)) >= huffmanTrees.$length) {
    					err = new StructuralError("tree selector out of range");
					$s = -1; return err;
    				}
  .\				huffmanTree.copy(currentHuffmanTree, (x$3 = ((selectorIndex < 0 || selectorIndex >= treeIndexes.$length) ? ($throwRuntimeError("index out of range"), undefined) : treeIndexes.$array[treeIndexes.$offset + selectorIndex]), ((x$3 < 0 || x$3 >= huffmanTrees.$length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanTrees.$array[huffmanTrees.$offset + x$3])));
  .�				selectorIndex = selectorIndex + (1) >> 0;
  .�				decoded = 0;
    			}
  .�			_r$12 = currentHuffmanTree.Decode(br); /* */ $s = 34; case 34: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			v = _r$12;
  .�			decoded = decoded + (1) >> 0;
    			if (v < 2) {
    				if (repeat === 0) {
  /F					repeatPower = 1;
    				}
  /^				repeat = repeat + (((y$2 = v, y$2 < 32 ? (repeatPower << y$2) : 0) >> 0)) >> 0;
  /|				repeatPower = (y$3 = (1), y$3 < 32 ? (repeatPower << y$3) : 0) >> 0;
    				if (repeat > 2097152) {
    					err = new StructuralError("repeat count too large");
					$s = -1; return err;
    				}
  0T				/* continue; */ $s = 32; continue;
    			}
    			if (repeat > 0) {
    				if (repeat > (bz2.blockSize - bufIndex >> 0)) {
    					err = new StructuralError("repeats past end of block");
					$s = -1; return err;
    				}
  1B				i$4 = 0;
				while (true) {
					if (!(i$4 < repeat)) { break; }
  1`					b = mtf.First();
  1u					(x$4 = bz2.tt, ((bufIndex < 0 || bufIndex >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + bufIndex] = ((b >>> 0))));
  1�					(x$6 = bz2.c, ((b < 0 || b >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[b] = ((x$5 = bz2.c, ((b < 0 || b >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[b])) + (1) >>> 0)));
  1�					bufIndex = bufIndex + (1) >> 0;
  1V					i$4 = i$4 + (1) >> 0;
    				}
  1�				repeat = 0;
    			}
    			if (((v >> 0)) === (numSymbols - 1 >> 0)) {
  2�				/* break; */ $s = 33; continue;
    			}
  3�			b$1 = mtf.Decode((((v - 1 << 16 >>> 16) >> 0)));
    			if (bufIndex >= bz2.blockSize) {
    				err = new StructuralError("data exceeds block size");
				$s = -1; return err;
    			}
  4R			(x$7 = bz2.tt, ((bufIndex < 0 || bufIndex >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + bufIndex] = ((b$1 >>> 0))));
  4q			(x$9 = bz2.c, ((b$1 < 0 || b$1 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[b$1] = ((x$8 = bz2.c, ((b$1 < 0 || b$1 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[b$1])) + (1) >>> 0)));
  4~			bufIndex = bufIndex + (1) >> 0;
    		$s = 32; continue;
		case 33:
    		if (origPtr >= ((bufIndex >>> 0))) {
    			err = new StructuralError("origPtr out of bounds");
			$s = -1; return err;
    		}
  5Q		bz2.preRLE = $subslice(bz2.tt, 0, bufIndex);
  5q		bz2.preRLEUsed = 0;
  5�		bz2.tPos = inverseBWT(bz2.preRLE, origPtr, new sliceType$4(bz2.c));
  5�		bz2.lastByte = -1;
  5�		bz2.byteRepeats = 0;
  5�		bz2.repeats = 0;
    		err = $ifaceNil;
		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: reader.ptr.prototype.readBlock }; } $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._tuple = _tuple; $f.b = b; $f.b$1 = b$1; $f.bits = bits; $f.br = br; $f.bufIndex = bufIndex; $f.bz2 = bz2; $f.c = c; $f.currentHuffmanTree = currentHuffmanTree; $f.decoded = decoded; $f.err = err; $f.huffmanTrees = huffmanTrees; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.inc = inc; $f.j = j; $f.length = length; $f.lengths = lengths; $f.mtf = mtf; $f.mtfTreeDecoder = mtfTreeDecoder; $f.nextSymbol = nextSymbol; $f.numHuffmanTrees = numHuffmanTrees; $f.numSelectors = numSelectors; $f.numSymbols = numSymbols; $f.origPtr = origPtr; $f.randomized = randomized; $f.repeat = repeat; $f.repeatPower = repeatPower; $f.selectorIndex = selectorIndex; $f.symRange = symRange; $f.symbol = symbol; $f.symbolPresent = symbolPresent; $f.symbolRangeUsedBitmap = symbolRangeUsedBitmap; $f.symbols = symbols; $f.treeIndexes = treeIndexes; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	reader.prototype.readBlock = function() { return this.$val.readBlock(); };
reader
readBlock~compress/bzip2.StructuralErrorcompress/bzip2.huffmanTreecompress/bzip2.inverseBWTcompress/bzip2.newHuffmanTreecompress/bzip2.newMTFDecoder%compress/bzip2.newMTFDecoderWithRangecompress/bzip2.readercompress/bzip2.sliceType$1compress/bzip2.sliceType$2compress/bzip2.sliceType$3compress/bzip2.sliceType$4 compress/bzip2.inverseBWTcompress/bzip2
inverseBWT 
inverseBWT��	inverseBWT = function(tt, origPtr, c) {
		var _i, _ref, b, c, i, i$1, origPtr, sum, tt, x, x$1;
  8�		sum = 0;
  8�		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  8�			sum = sum + (((i < 0 || i >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + i])) >>> 0;
  8�			((i < 0 || i >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + i] = (sum - ((i < 0 || i >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + i]) >>> 0));
  8�			i = i + (1) >> 0;
    		}
  8�		_ref = tt;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i$1 = _i;
  9			b = (((i$1 < 0 || i$1 >= tt.$length) ? ($throwRuntimeError("index out of range"), undefined) : tt.$array[tt.$offset + i$1]) & 255) >>> 0;
  9			(x$1 = ((b < 0 || b >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + b]), ((x$1 < 0 || x$1 >= tt.$length) ? ($throwRuntimeError("index out of range"), undefined) : tt.$array[tt.$offset + x$1] = (((x = ((b < 0 || b >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + b]), ((x < 0 || x >= tt.$length) ? ($throwRuntimeError("index out of range"), undefined) : tt.$array[tt.$offset + x])) | ((((i$1 >>> 0)) << 8 >>> 0))) >>> 0)));
  94			((b < 0 || b >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + b] = (((b < 0 || b >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + b]) + (1) >>> 0));
    			_i++;
		}
  9@		return ((origPtr < 0 || origPtr >= tt.$length) ? ($throwRuntimeError("index out of range"), undefined) : tt.$array[tt.$offset + origPtr]) >>> 8 >>> 0;
    	};

inverseBWTcompress/bzip2.inverseBWT compress/bzip2.initcompress/bzip2init init�j	init = function() {
		var _i, _ref, crc, i, j, y;
  :H		_ref = crctab;
		_i = 0;
		while (true) {
			if (!(_i < 256)) { break; }
			i = _i;
  :b			crc = ((i >>> 0)) << 24 >>> 0;
  :			j = 0;
			while (true) {
				if (!(j < 8)) { break; }
    				if (!((((crc & 2147483648) >>> 0) === 0))) {
  :�					crc = (((crc << 1 >>> 0)) ^ 79764919) >>> 0;
    				} else {
  :�					crc = (y = (1), y < 32 ? (crc << y) : 0) >>> 0;
    				}
  :�				j = j + (1) >> 0;
    			}
  :�			((i < 0 || i >= crctab.length) ? ($throwRuntimeError("index out of range"), undefined) : crctab[i] = crc);
    			_i++;
		}
    	};
    		init();
compress/bzip2.crctabcompress/bzip2.init compress/bzip2.updateCRCcompress/bzip2	updateCRC 	updateCRC�5	updateCRC = function(val, b) {
		var _i, _ref, b, crc, v, val, x;
  ;�		crc = ~val >>> 0;
  ;�		_ref = b;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ;�			crc = ((x = ((((crc >>> 24 >>> 0) << 24 >>> 24)) ^ v) << 24 >>> 24, ((x < 0 || x >= crctab.length) ? ($throwRuntimeError("index out of range"), undefined) : crctab[x])) ^ ((crc << 8 >>> 0))) >>> 0;
    			_i++;
		}
  ;�		return ~crc >>> 0;
    	};
	updateCRCcompress/bzip2.crctabcompress/bzip2.updateCRC $(*compress/bzip2.huffmanTree).Decode ��	huffmanTree.ptr.prototype.Decode = function(br) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, bit, br, l, l$1, node, nodeIndex, r, r$1, t, v, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; bit = $f.bit; br = $f.br; l = $f.l; l$1 = $f.l$1; node = $f.node; nodeIndex = $f.nodeIndex; r = $f.r; r$1 = $f.r$1; t = $f.t; v = $f.v; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = 0;
		t = this;
  A#		nodeIndex = 0;
  A_		/* while (true) { */ case 1:
  Ag			node = (x = t.nodes, ((nodeIndex < 0 || nodeIndex >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + nodeIndex]));
  A�			bit = 0;
  A�			/* */ if (br.bits > 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (br.bits > 0) { */ case 3:
  A�				br.bits = br.bits - (1) >>> 0;
  A�				bit = ((($shiftRightUint64(br.n, (((br.bits & 63) >>> 0))).$low << 16 >>> 16)) & 1) >>> 0;
    				$s = 5; continue;
			/* } else { */ case 4:
  B				_r = br.ReadBits(1); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				bit = ((_r << 16 >>> 16));
    			/* } */ case 5:
  C			_tmp = node.left;
			_tmp$1 = node.right;
			l = _tmp;
			r = _tmp$1;
    			if (bit === 1) {
  CH				nodeIndex = l;
    			} else {
  Cd				nodeIndex = r;
    			}
    			if (nodeIndex === 65535) {
  C�				_tmp$2 = node.leftValue;
				_tmp$3 = node.rightValue;
				l$1 = _tmp$2;
				r$1 = _tmp$3;
    				if (bit === 1) {
  D<					v = l$1;
    				} else {
  DR					v = r$1;
    				}
  D`				$s = -1; return v;
    			}
    		$s = 1; continue;
		case 2:
    		$s = -1; return v;
		/* */ } return; } if ($f === undefined) { $f = { $blk: huffmanTree.ptr.prototype.Decode }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.bit = bit; $f.br = br; $f.l = l; $f.l$1 = l$1; $f.node = node; $f.nodeIndex = nodeIndex; $f.r = r; $f.r$1 = r$1; $f.t = t; $f.v = v; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	huffmanTree.prototype.Decode = function(br) { return this.$val.Decode(br); };
huffmanTreecompress/bzip2.huffmanTree compress/bzip2.newHuffmanTreecompress/bzip2newHuffmanTree newHuffmanTree�y	newHuffmanTree = function(lengths) {
		var _i, _ref, _tuple, code, codes, err, i, i$1, length, length$1, lengths, pairs, t, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; _tuple = $f._tuple; code = $f.code; codes = $f.codes; err = $f.err; i = $f.i; i$1 = $f.i$1; length = $f.length; length$1 = $f.length$1; lengths = $f.lengths; pairs = $f.pairs; t = $f.t; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		codes = [codes];
		pairs = [pairs];
		t = [t];
    		if (lengths.$length < 2) {
  G			$panic(new $String("newHuffmanTree: too few symbols"));
    		}
  G=		t[0] = new huffmanTree.ptr(sliceType$5.nil, 0);
  G�		pairs[0] = $makeSlice(sliceType$6, lengths.$length);
  G�		_ref = lengths;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			length = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  H			((i < 0 || i >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i]).value = ((i << 16 >>> 16));
  H7			((i < 0 || i >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i]).length = length;
    			_i++;
		}
  HU		$r = sort.Slice(pairs[0], (function(codes, pairs, t) { return function(i$1, j) {
			var i$1, j;
    			if (((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).length < ((j < 0 || j >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + j]).length) {
  H�				return true;
    			}
    			if (((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).length > ((j < 0 || j >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + j]).length) {
  H�				return false;
    			}
    			if (((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).value < ((j < 0 || j >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + j]).value) {
  I 				return true;
    			}
  I2			return false;
    		}; })(codes, pairs, t)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  J3		code = 0;
  JF		length$1 = 32;
  J\		codes[0] = $makeSlice(sliceType$7, lengths.$length);
  J�		i$1 = pairs[0].$length - 1 >> 0;
		while (true) {
			if (!(i$1 >= 0)) { break; }
    			if (length$1 > ((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).length) {
  J�				length$1 = ((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).length;
    			}
  J�			((i$1 < 0 || i$1 >= codes[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : codes[0].$array[codes[0].$offset + i$1]).code = code;
  K			((i$1 < 0 || i$1 >= codes[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : codes[0].$array[codes[0].$offset + i$1]).codeLen = length$1;
  K$			((i$1 < 0 || i$1 >= codes[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : codes[0].$array[codes[0].$offset + i$1]).value = ((i$1 < 0 || i$1 >= pairs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : pairs[0].$array[pairs[0].$offset + i$1]).value;
  K�			code = code + (((y = ((32 - length$1 << 24 >>> 24)), y < 32 ? (1 << y) : 0) >>> 0)) >>> 0;
  J�			i$1 = i$1 - (1) >> 0;
    		}
  L5		$r = sort.Slice(codes[0], (function(codes, pairs, t) { return function(i$2, j) {
			var i$2, j;
  L_			return ((i$2 < 0 || i$2 >= codes[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : codes[0].$array[codes[0].$offset + i$2]).code < ((j < 0 || j >= codes[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : codes[0].$array[codes[0].$offset + j]).code;
    		}; })(codes, pairs, t)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  L�		t[0].nodes = $makeSlice(sliceType$5, codes[0].$length);
  L�		_tuple = buildHuffmanNode(t[0], codes[0], 0);
		err = _tuple[1];
  L�		$s = -1; return [t[0], err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newHuffmanTree }; } $f._i = _i; $f._ref = _ref; $f._tuple = _tuple; $f.code = code; $f.codes = codes; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.length = length; $f.length$1 = length$1; $f.lengths = lengths; $f.pairs = pairs; $f.t = t; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
newHuffmanTree
compress/bzip2.buildHuffmanNodecompress/bzip2.huffmanCodecompress/bzip2.huffmanNode&compress/bzip2.huffmanSymbolLengthPaircompress/bzip2.huffmanTreecompress/bzip2.newHuffmanTreecompress/bzip2.sliceType$5compress/bzip2.sliceType$6compress/bzip2.sliceType$7
sort.Slice compress/bzip2.buildHuffmanNodecompress/bzip2buildHuffmanNode buildHuffmanNode�
�	buildHuffmanNode = function(t, codes, level) {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, _tuple$3, code, codes, err, firstRightIndex, i, left, level, node, nodeIndex, right, t, test, x, x$1, y;
		nodeIndex = 0;
		err = $ifaceNil;
  O		test = (y = ((31 - level >>> 0)), y < 32 ? (1 << y) : 0) >>> 0;
  O�		firstRightIndex = codes.$length;
  O�		_ref = codes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			code = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), huffmanCode);
    			if (!((((code.code & test) >>> 0) === 0))) {
  O�				firstRightIndex = i;
  P					break;
    			}
    			_i++;
		}
  P		left = $subslice(codes, 0, firstRightIndex);
  P9		right = $subslice(codes, firstRightIndex);
    		if ((left.$length === 0) || (right.$length === 0)) {
    			if (codes.$length < 2) {
    				_tmp = 0;
				_tmp$1 = new StructuralError("empty Huffman tree");
				nodeIndex = _tmp;
				err = _tmp$1;
				return [nodeIndex, err];
    			}
    			if (level === 31) {
    				_tmp$2 = 0;
				_tmp$3 = new StructuralError("equal symbols in Huffman tree");
				nodeIndex = _tmp$2;
				err = _tmp$3;
				return [nodeIndex, err];
    			}
    			if (left.$length === 0) {
    				_tuple = buildHuffmanNode(t, right, level + 1 >>> 0);
				nodeIndex = _tuple[0];
				err = _tuple[1];
				return [nodeIndex, err];
    			}
    			_tuple$1 = buildHuffmanNode(t, left, level + 1 >>> 0);
			nodeIndex = _tuple$1[0];
			err = _tuple$1[1];
			return [nodeIndex, err];
    		}
  U;		nodeIndex = ((t.nextNode << 16 >>> 16));
  U[		node = (x = t.nodes, x$1 = t.nextNode, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  Uy		t.nextNode = t.nextNode + (1) >> 0;
    		if (left.$length === 1) {
  U�			node.left = 65535;
  U�			node.leftValue = (0 >= left.$length ? ($throwRuntimeError("index out of range"), undefined) : left.$array[left.$offset + 0]).value;
    		} else {
  U�			_tuple$2 = buildHuffmanNode(t, left, level + 1 >>> 0);
			node.left = _tuple$2[0];
			err = _tuple$2[1];
    		}
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  VB			return [nodeIndex, err];
    		}
    		if (right.$length === 1) {
  Vt			node.right = 65535;
  V�			node.rightValue = (0 >= right.$length ? ($throwRuntimeError("index out of range"), undefined) : right.$array[right.$offset + 0]).value;
    		} else {
  V�			_tuple$3 = buildHuffmanNode(t, right, level + 1 >>> 0);
			node.right = _tuple$3[0];
			err = _tuple$3[1];
    		}
  V�		return [nodeIndex, err];
    	};
buildHuffmanNodecompress/bzip2.StructuralErrorcompress/bzip2.buildHuffmanNodecompress/bzip2.huffmanCode compress/bzip2.newMTFDecodercompress/bzip2newMTFDecoder newMTFDecoder��	newMTFDecoder = function(symbols) {
		var symbols;
    		if (symbols.$length > 256) {
  Z�			$panic(new $String("too many symbols"));
    		}
  Z�		return ($convertSliceType(symbols, moveToFrontDecoder));
    	};
newMTFDecoder!compress/bzip2.moveToFrontDecodercompress/bzip2.newMTFDecoder %compress/bzip2.newMTFDecoderWithRangecompress/bzip2newMTFDecoderWithRange newMTFDecoderWithRange��	newMTFDecoderWithRange = function(n) {
		var i, m, n;
    		if (n > 256) {
  [�			$panic(new $String("newMTFDecoderWithRange: cannot have > 256 symbols"));
    		}
  [�		m = $makeSlice(sliceType$2, n);
  [�		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  \			((i < 0 || i >= m.$length) ? ($throwRuntimeError("index out of range"), undefined) : m.$array[m.$offset + i] = ((i << 24 >>> 24)));
  [�			i = i + (1) >> 0;
    		}
  \		return ($convertSliceType(m, moveToFrontDecoder));
    	};
newMTFDecoderWithRange!compress/bzip2.moveToFrontDecoder%compress/bzip2.newMTFDecoderWithRangecompress/bzip2.sliceType$2 *(compress/bzip2.moveToFrontDecoder).Decode ��	moveToFrontDecoder.prototype.Decode = function(n) {
		var b, m, n;
		b = 0;
		m = this;
  ]i		b = ((n < 0 || n >= m.$length) ? ($throwRuntimeError("index out of range"), undefined) : m.$array[m.$offset + n]);
  ]s		$copySlice($subslice(m, 1), $subslice(m, 0, n));
  ]�		(0 >= m.$length ? ($throwRuntimeError("index out of range"), undefined) : m.$array[m.$offset + 0] = b);
  ]�		return b;
    	};
	$ptrType(moveToFrontDecoder).prototype.Decode = function(n) { return this.$get().Decode(n); };
moveToFrontDecoder!compress/bzip2.moveToFrontDecoder )(compress/bzip2.moveToFrontDecoder).First �	moveToFrontDecoder.prototype.First = function() {
		var m;
		m = this;
  ]�		return (0 >= m.$length ? ($throwRuntimeError("index out of range"), undefined) : m.$array[m.$offset + 0]);
    	};
	$ptrType(moveToFrontDecoder).prototype.First = function() { return this.$get().First(); };
moveToFrontDecoder!compress/bzip2.moveToFrontDecoder �6{"Base":24076,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/bzip2/bit_reader.go","Base":1,"Size":2022,"Lines":[0,55,109,159,160,174,175,184,193,199,201,202,275,346,424,450,474,494,507,518,530,532,533,601,671,714,746,756,785,788,816,818,819,888,966,1017,1073,1095,1123,1144,1173,1177,1195,1211,1223,1227,1240,1260,1275,1278,1279,1347,1363,1389,1393,1434,1453,1472,1498,1524,1550,1589,1593,1655,1714,1766,1783,1791,1793,1794,1845,1873,1890,1892,1893,1931,1952,1967,1969,1970,2005,2020],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/bzip2/bzip2.go","Base":2024,"Size":13324,"Lines":[0,55,109,159,160,209,223,224,236,237,316,368,424,471,472,540,566,594,595,637,680,682,683,731,752,776,797,818,839,902,961,980,1044,1163,1227,1228,1298,1357,1408,1473,1542,1544,1545,1617,1664,1726,1766,1786,1812,1824,1826,1827,1865,1904,1943,1944,1978,2027,2042,2043,2059,2086,2117,2162,2166,2169,2170,2191,2206,2263,2266,2267,2292,2325,2379,2382,2383,2400,2444,2478,2519,2522,2534,2536,2537,2594,2608,2627,2630,2631,2652,2676,2700,2720,2735,2739,2757,2774,2778,2801,2804,2805,2829,2852,2871,2885,2888,2896,2898,2899,2950,3021,3086,3154,3223,3293,3338,3346,3423,3454,3455,3501,3563,3626,3692,3753,3766,3767,3790,3821,3828,3845,3870,3892,3897,3909,3913,3914,3948,3970,3987,4006,4007,4035,4060,4083,4095,4099,4100,4130,4151,4162,4185,4189,4213,4214,4227,4233,4236,4237,4247,4249,4250,4301,4308,4338,4368,4419,4436,4440,4441,4471,4511,4570,4594,4598,4599,4621,4637,4666,4677,4731,4732,4756,4778,4804,4823,4841,4846,4847,4871,4900,4944,4966,4987,4992,5027,5082,5103,5108,5109,5144,5192,5222,5245,5274,5279,5308,5330,5350,5369,5390,5395,5414,5431,5449,5454,5483,5502,5525,5556,5562,5579,5597,5602,5631,5701,5706,5750,5768,5773,5777,5780,5782,5783,5869,5914,5929,6041,6059,6128,6158,6180,6236,6239,6273,6274,6346,6410,6439,6481,6517,6534,6588,6641,6668,6718,6754,6800,6818,6824,6829,6833,6836,6837,6859,6893,6941,6944,6945,7007,7042,7091,7151,7154,7155,7225,7297,7330,7374,7375,7446,7459,7518,7548,7557,7565,7590,7607,7617,7622,7629,7633,7661,7711,7715,7759,7762,7763,7833,7875,7912,7929,7957,7981,8014,8030,8034,8037,8068,8069,8126,8180,8181,8241,8279,8310,8375,8402,8429,8438,8473,8532,8538,8561,8572,8578,8600,8614,8627,8641,8647,8652,8682,8686,8735,8753,8767,8771,8774,8775,8825,8853,8905,8908,8955,9010,9013,9065,9119,9191,9258,9328,9341,9354,9372,9373,9447,9471,9486,9489,9490,9565,9572,9593,9631,9713,9718,9779,9836,9841,9906,9925,9940,9944,9945,9982,9994,9995,10008,10054,10074,10094,10099,10129,10150,10151,10209,10258,10287,10340,10345,10357,10361,10362,10380,10438,10478,10518,10574,10579,10612,10633,10666,10681,10696,10701,10715,10719,10720,10750,10807,10865,10911,10920,10924,10925,10989,11050,11116,11175,11237,11248,11278,11311,11364,11368,11399,11412,11425,11428,11429,11461,11511,11514,11515,11582,11624,11656,11676,11730,11749,11770,11787,11788,11800,11802,11803,11882,11959,12039,12117,12152,12155,12234,12314,12391,12404,12466,12482,12510,12524,12544,12547,12548,12569,12589,12618,12627,12630,12631,12656,12658,12659,12747,12831,12832,12855,12856,12870,12895,12920,12945,12972,13000,13028,13040,13054,13059,13063,13081,13084,13086,13087,13152,13179,13225,13238,13261,13306,13309,13322],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/bzip2/huffman.go","Base":15349,"Size":6928,"Lines":[0,55,109,159,160,174,175,189,190,266,277,303,374,447,503,527,541,543,544,624,704,764,767,844,922,972,998,1028,1058,1060,1061,1138,1170,1171,1248,1268,1325,1384,1385,1392,1422,1423,1440,1459,1491,1504,1544,1555,1587,1631,1671,1703,1707,1708,1782,1823,1855,1856,1872,1889,1900,1917,1921,1922,1959,2013,2055,2098,2115,2125,2137,2147,2152,2162,2166,2169,2171,2172,2245,2308,2368,2438,2503,2565,2633,2704,2774,2812,2813,2836,2879,2882,2883,2902,2903,2975,3017,3073,3107,3136,3163,3166,3167,3208,3249,3264,3268,3309,3325,3329,3368,3383,3387,3402,3406,3407,3479,3552,3624,3645,3664,3685,3686,3730,3770,3802,3830,3834,3857,3885,3919,3985,4018,4047,4050,4051,4124,4159,4200,4239,4243,4244,4287,4329,4344,4346,4347,4413,4451,4466,4480,4482,4483,4543,4569,4585,4600,4616,4618,4619,4697,4771,4792,4897,4932,4933,5026,5057,5087,5114,5137,5146,5150,5153,5154,5187,5221,5222,5262,5327,5393,5424,5425,5488,5551,5599,5604,5669,5735,5797,5852,5874,5925,5929,5930,5995,6054,6070,6089,6146,6205,6256,6282,6344,6348,6349,6371,6417,6421,6465,6468,6469,6501,6531,6545,6546,6567,6582,6613,6646,6656,6710,6713,6714,6731,6740,6743,6744,6766,6781,6813,6848,6858,6914,6917,6918,6926],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/compress/bzip2/move_to_front.go","Base":22278,"Size":1797,"Lines":[0,55,109,159,160,174,175,248,325,404,483,561,640,714,745,746,825,840,896,921,949,952,988,990,991,1065,1092,1148,1162,1223,1226,1227,1249,1275,1292,1295,1325,1327,1328,1381,1443,1509,1567,1634,1644,1664,1674,1682,1684,1685,1739,1782,1795],"Infos":null}]}
 