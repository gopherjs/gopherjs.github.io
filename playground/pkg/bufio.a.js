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
GoLinkname�� Implementation�� 	Reference��   �GF��bufiobufiobyteserrorsiostringsunicode/utf8�~i ��	rReader wWriter
ReadWriterrdiosizeScannerbuferrlastBytelastRuneSizeSizebResetresetfillreadErrPeeknDiscard	discardedReadpReadByte
UnreadByteReadRune
UnreadRuneBuffered	ReadSlicedelimlineReadLineisPrefixcollectFragmentsfullBuffersfinalFragmenttotalLen	ReadBytes
ReadStringWriteTowriteBufdataatEOFadvancetokensplit	SplitFuncmaxTokenSizestartendempties
scanCalleddoneErrsBytesTextScansetErrBuffermaxSplitwrFlush	AvailableWritenn	WriteBytec	WriteRuneWriteStringReadFrombufioErrAdvanceTooFarErrBadReadCountErrBufferFullErrFinalTokenErrInvalidUnreadByteErrInvalidUnreadRuneErrNegativeAdvanceErrNegativeCount
ErrTooLongMaxScanTokenSizeNewReadWriter	NewReaderNewReaderSize
NewScanner	NewWriterNewWriterSize	ScanBytes	ScanLines	ScanRunes	ScanWordsV V V V V V V V V C �   	B 	G 	LF   E 
J 	O  !BF  _ 	b BF  _ $ 	o  )	F   _ 	�  !GF  
� 	� GF  
� $ 	� BG	 �	 �	T � 	 1� 	 _ 	   	 
 	 5 	 9 	 B 	BBBBBBBBBBBBBBBB�BBBBT � O T�  	 V T�  _   \ T� 1�  _   b T�   g T�  	 o T� t 	� 	  v T� t ~ 5  � T� �� t 5  � T�  	 	 � T�  	 � T�    $ 5 � T�  	 � T�  	 � T� � �� 5  � T�  �� �  5 � T� � �� �� � 5  � T� � 	� 	  � T� � 	 	  � T� 
� t 5  � T� 
� 	 	 F  �� �  � �� 5 F  �� �  � �� 5 F  �� �  � �� 5 F  �� �  � �� 5  �		  _ 	 �� 	 � 	 �� 	 1� 	 � 	 � 	 5 	 � 	 �  	 �  	T � � ��  	 � ��  	� � ��  	 � ��  	  � �� t 	   � �� 5   � �� 1� �   � �� ��  	 �� �  � �� 5 T � 	 5 	 1� 	 t 	 �� 	GGGGGGGGGGT �
 O T�  	 V T� 
�   � T�  	 � T�  	 � T�  	 � T� �� � 5  � T� � 	  � T�   $ 5  � T� � 	 	  � T�  _ t 5 !  � ��	 t 5 T �	!  � ��	 t 5 T �		� � ���	�������1�D�Q�d�u������������)����!! �	�	Z bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Reader�	Reader = $pkg.Reader = $newType(0, $kindStruct, "bufio.Reader", true, "bufio", true, function(buf_, rd_, r_, w_, err_, lastByte_, lastRuneSize_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.buf = sliceType.nil;
			this.rd = $ifaceNil;
			this.r = 0;
			this.w = 0;
			this.err = $ifaceNil;
			this.lastByte = 0;
			this.lastRuneSize = 0;
			return;
		}
		this.buf = buf_;
		this.rd = rd_;
		this.r = r_;
		this.w = w_;
		this.err = err_;
		this.lastByte = lastByte_;
		this.lastRuneSize = lastRuneSize_;
	});
�z	ptrType.methods = [{prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([io.Reader], [], false)}, {prop: "reset", name: "reset", pkg: "bufio", typ: $funcType([sliceType, io.Reader], [], false)}, {prop: "fill", name: "fill", pkg: "bufio", typ: $funcType([], [], false)}, {prop: "readErr", name: "readErr", pkg: "bufio", typ: $funcType([], [$error], false)}, {prop: "Peek", name: "Peek", pkg: "", typ: $funcType([$Int], [sliceType, $error], false)}, {prop: "Discard", name: "Discard", pkg: "", typ: $funcType([$Int], [$Int, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Buffered", name: "Buffered", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "ReadSlice", name: "ReadSlice", pkg: "", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "ReadLine", name: "ReadLine", pkg: "", typ: $funcType([], [sliceType, $Bool, $error], false)}, {prop: "collectFragments", name: "collectFragments", pkg: "bufio", typ: $funcType([$Uint8], [sliceType$1, sliceType, $Int, $error], false)}, {prop: "ReadBytes", name: "ReadBytes", pkg: "", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "ReadString", name: "ReadString", pkg: "", typ: $funcType([$Uint8], [$String, $error], false)}, {prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([io.Writer], [$Int64, $error], false)}, {prop: "writeBuf", name: "writeBuf", pkg: "bufio", typ: $funcType([io.Writer], [$Int64, $error], false)}];
�u	Reader.init("bufio", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "rd", name: "rd", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "lastByte", name: "lastByte", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastRuneSize", name: "lastRuneSize", embedded: false, exported: false, typ: $Int, tag: ""}]);
Readerbufio.Readerbufio.ptrTypebufio.sliceTypebufio.sliceType$1	io.Reader	io.Writer  Writer�a	Writer = $pkg.Writer = $newType(0, $kindStruct, "bufio.Writer", true, "bufio", true, function(err_, buf_, n_, wr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.buf = sliceType.nil;
			this.n = 0;
			this.wr = $ifaceNil;
			return;
		}
		this.err = err_;
		this.buf = buf_;
		this.n = n_;
		this.wr = wr_;
	});
��	ptrType$2.methods = [{prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([io.Writer], [], false)}, {prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Available", name: "Available", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Buffered", name: "Buffered", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "WriteRune", name: "WriteRune", pkg: "", typ: $funcType([$Int32], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "ReadFrom", name: "ReadFrom", pkg: "", typ: $funcType([io.Reader], [$Int64, $error], false)}];
�g	Writer.init("bufio", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "wr", name: "wr", embedded: false, exported: false, typ: io.Writer, tag: ""}]);
Writerbufio.Writerbufio.ptrType$2bufio.sliceType	io.Reader	io.Writer  
ReadWriter�7	ReadWriter = $pkg.ReadWriter = $newType(0, $kindStruct, "bufio.ReadWriter", true, "bufio", true, function(Reader_, Writer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Reader = ptrType.nil;
			this.Writer = ptrType$2.nil;
			return;
		}
		this.Reader = Reader_;
		this.Writer = Writer_;
	});
��	ReadWriter.init("", [{prop: "Reader", name: "Reader", embedded: true, exported: true, typ: ptrType, tag: ""}, {prop: "Writer", name: "Writer", embedded: true, exported: true, typ: ptrType$2, tag: ""}]);

ReadWriterbufio.ReadWriterbufio.ptrTypebufio.ptrType$2  Scanner�"	Scanner = $pkg.Scanner = $newType(0, $kindStruct, "bufio.Scanner", true, "bufio", true, function(r_, split_, maxTokenSize_, token_, buf_, start_, end_, err_, empties_, scanCalled_, done_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.split = $throwNilPointerError;
			this.maxTokenSize = 0;
			this.token = sliceType.nil;
			this.buf = sliceType.nil;
			this.start = 0;
			this.end = 0;
			this.err = $ifaceNil;
			this.empties = 0;
			this.scanCalled = false;
			this.done = false;
			return;
		}
		this.r = r_;
		this.split = split_;
		this.maxTokenSize = maxTokenSize_;
		this.token = token_;
		this.buf = buf_;
		this.start = start_;
		this.end = end_;
		this.err = err_;
		this.empties = empties_;
		this.scanCalled = scanCalled_;
		this.done = done_;
	});
��	ptrType$3.methods = [{prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "Text", name: "Text", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Scan", name: "Scan", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "advance", name: "advance", pkg: "bufio", typ: $funcType([$Int], [$Bool], false)}, {prop: "setErr", name: "setErr", pkg: "bufio", typ: $funcType([$error], [], false)}, {prop: "Buffer", name: "Buffer", pkg: "", typ: $funcType([sliceType, $Int], [], false)}, {prop: "Split", name: "Split", pkg: "", typ: $funcType([SplitFunc], [], false)}];
��	Scanner.init("bufio", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "split", name: "split", embedded: false, exported: false, typ: SplitFunc, tag: ""}, {prop: "maxTokenSize", name: "maxTokenSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "token", name: "token", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "start", name: "start", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "end", name: "end", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "empties", name: "empties", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "scanCalled", name: "scanCalled", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "done", name: "done", embedded: false, exported: false, typ: $Bool, tag: ""}]);
Scannerbufio.Scannerbufio.SplitFuncbufio.ptrType$3bufio.sliceType	io.Reader  	SplitFuncd	SplitFunc = $pkg.SplitFunc = $newType(4, $kindFunc, "bufio.SplitFunc", true, "bufio", true, null);
G	SplitFunc.init([sliceType, $Bool], [$Int, sliceType, $error], false);
	SplitFuncbufio.SplitFuncbufio.sliceType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(Reader);
ptrTypebufio.Reader  sliceType$1&	sliceType$1 = $sliceType(sliceType);
sliceType$1bufio.sliceType  	ptrType$1(	ptrType$1 = $ptrType(strings.Builder);
	ptrType$1strings.Builder  	ptrType$2	ptrType$2 = $ptrType(Writer);
	ptrType$2bufio.Writer  	ptrType$3 	ptrType$3 = $ptrType(Scanner);
	ptrType$3bufio.Scanner  ErrInvalidUnreadByte  ErrInvalidUnreadRune  ErrBufferFull  ErrNegativeCount  errNegativeReaderrNegativeRead  errNegativeWriteerrNegativeWrite  
ErrTooLong  ErrNegativeAdvance  ErrAdvanceTooFar  ErrBadReadCount  ErrFinalToken  	errorRune	errorRune  S  �		$pkg.ErrInvalidUnreadByte = errors.New("bufio: invalid use of UnreadByte");
bufio.ErrInvalidUnreadByte
errors.New  S  ?		$pkg.ErrInvalidUnreadRune = errors.New("bufio: invalid use of UnreadRune");
bufio.ErrInvalidUnreadRune
errors.New  >  �		$pkg.ErrBufferFull = errors.New("bufio: buffer full");
bufio.ErrBufferFull
errors.New  D  �		$pkg.ErrNegativeCount = errors.New("bufio: negative count");
bufio.ErrNegativeCount
errors.New  X  �		errNegativeRead = errors.New("bufio: reader returned negative count from Read");
bufio.errNegativeRead
errors.New  Z  7�		errNegativeWrite = errors.New("bufio: writer returned negative count from Write");
bufio.errNegativeWrite
errors.New  F  ZV		$pkg.ErrTooLong = errors.New("bufio.Scanner: token too long");
bufio.ErrTooLong
errors.New  h  Z�		$pkg.ErrNegativeAdvance = errors.New("bufio.Scanner: SplitFunc returns negative advance count");
bufio.ErrNegativeAdvance
errors.New  j  Z�		$pkg.ErrAdvanceTooFar = errors.New("bufio.Scanner: SplitFunc returns advance count beyond input");
bufio.ErrAdvanceTooFar
errors.New  [  [T		$pkg.ErrBadReadCount = errors.New("bufio.Scanner: Read returned impossible count");
bufio.ErrBadReadCount
errors.New  7  bz		$pkg.ErrFinalToken = errors.New("final token");
bufio.ErrFinalToken
errors.New  D  t�		errorRune = (new sliceType($stringToBytes("\xEF\xBF\xBD")));
	errorRunebufio.errorRunebufio.sliceType bufio.NewReaderSizebufioNewReaderSize NewReaderSize��	NewReaderSize = function(rd, size) {
		var _tuple, b, ok, r, rd, size;
  �		_tuple = $assertType(rd, ptrType, true);
		b = _tuple[0];
		ok = _tuple[1];
    		if (ok && b.buf.$length >= size) {
  			return b;
    		}
    		if (size < 16) {
  H			size = 16;
    		}
  e		r = new Reader.ptr(sliceType.nil, $ifaceNil, 0, 0, $ifaceNil, 0, 0);
  w		r.reset($makeSlice(sliceType, size), rd);
  �		return r;
    	};
	$pkg.NewReaderSize = NewReaderSize;
NewReaderSizebufio.NewReaderSizebufio.Readerbufio.ptrTypebufio.reset~bufio.sliceType bufio.NewReaderbufio	NewReader 	NewReaders	NewReader = function(rd) {
		var rd;
  		return NewReaderSize(rd, 4096);
    	};
	$pkg.NewReader = NewReader;
	NewReaderbufio.NewReaderbufio.NewReaderSize (*bufio.Reader).Size ��	Reader.ptr.prototype.Size = function() {
		var b;
		b = this;
  �		return b.buf.$length;
    	};
	Reader.prototype.Size = function() { return this.$val.Size(); };
Readerbufio.Reader (*bufio.Reader).Reset ��	Reader.ptr.prototype.Reset = function(r) {
		var b, r;
		b = this;
  >		b.reset(b.buf, r);
    	};
	Reader.prototype.Reset = function(r) { return this.$val.Reset(r); };
Readerbufio.Readerbufio.reset~ (*bufio.Reader).reset ��	Reader.ptr.prototype.reset = function(buf, r) {
		var b, buf, r;
		b = this;
  �		Reader.copy(b, new Reader.ptr(buf, r, 0, 0, $ifaceNil, -1, -1));
    	};
	Reader.prototype.reset = function(buf, r) { return this.$val.reset(buf, r); };
Readerreset~bufio.Readerbufio.sliceType (*bufio.Reader).fill �	Reader.ptr.prototype.fill = function() {
		var _r, _tuple, b, err, i, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; i = $f.i; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (b.r > 0) {
  	�			$copySlice(b.buf, $subslice(b.buf, b.r, b.w));
  	�			b.w = b.w - (b.r) >> 0;
  	�			b.r = 0;
    		}
    		if (b.w >= b.buf.$length) {
  

			$panic(new $String("bufio: tried to fill full buffer"));
    		}
  
o		i = 100;
		/* while (true) { */ case 1:
			/* if (!(i > 0)) { break; } */ if(!(i > 0)) { $s = 2; continue; }
  
�			_r = b.rd.Read($subslice(b.buf, b.w)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			n = _tuple[0];
			err = _tuple[1];
    			if (n < 0) {
  
�				$panic(errNegativeRead);
    			}
  
�			b.w = b.w + (n) >> 0;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  					b.err = err;
  				$s = -1; return;
    			}
    			if (n > 0) {
  3				$s = -1; return;
    			}
  
�			i = i - (1) >> 0;
    		$s = 1; continue;
		case 2:
  B		b.err = io.ErrNoProgress;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.fill }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.i = i; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.fill = function() { return this.$val.fill(); };
Readerfill~bufio.Readerbufio.errNegativeReadio.ErrNoProgress (*bufio.Reader).readErr ��	Reader.ptr.prototype.readErr = function() {
		var b, err;
		b = this;
  �		err = b.err;
  �		b.err = $ifaceNil;
  �		return err;
    	};
	Reader.prototype.readErr = function() { return this.$val.readErr(); };
ReaderreadErr~bufio.Reader (*bufio.Reader).Peek �'	Reader.ptr.prototype.Peek = function(n) {
		var avail, b, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; avail = $f.avail; b = $f.b; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (n < 0) {
  o			$s = -1; return [sliceType.nil, $pkg.ErrNegativeCount];
    		}
  �		b.lastByte = -1;
  �		b.lastRuneSize = -1;
  �		/* while (true) { */ case 1:
			/* if (!((b.w - b.r >> 0) < n && (b.w - b.r >> 0) < b.buf.$length && $interfaceIsEqual(b.err, $ifaceNil))) { break; } */ if(!((b.w - b.r >> 0) < n && (b.w - b.r >> 0) < b.buf.$length && $interfaceIsEqual(b.err, $ifaceNil))) { $s = 2; continue; }
  �			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
    		if (n > b.buf.$length) {
  F			$s = -1; return [$subslice(b.buf, b.r, b.w), $pkg.ErrBufferFull];
    		}
  �		err = $ifaceNil;
  �		avail = b.w - b.r >> 0;
    		if (avail < n) {
  �			n = avail;
  �			err = b.readErr();
    			if ($interfaceIsEqual(err, $ifaceNil)) {
  				err = $pkg.ErrBufferFull;
    			}
    		}
  +		$s = -1; return [$subslice(b.buf, b.r, (b.r + n >> 0)), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Peek }; } $f.avail = avail; $f.b = b; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Peek = function(n) { return this.$val.Peek(n); };
Readerbufio.ErrBufferFullbufio.ErrNegativeCountbufio.Readerbufio.fill~bufio.readErr~bufio.sliceType (*bufio.Reader).Discard ��	Reader.ptr.prototype.Discard = function(n) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, discarded, err, n, remain, skip, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; b = $f.b; discarded = $f.discarded; err = $f.err; n = $f.n; remain = $f.remain; skip = $f.skip; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		discarded = 0;
		err = $ifaceNil;
		b = this;
    		if (n < 0) {
    			_tmp = 0;
			_tmp$1 = $pkg.ErrNegativeCount;
			discarded = _tmp;
			err = _tmp$1;
			$s = -1; return [discarded, err];
    		}
    		if (n === 0) {
  �			$s = -1; return [discarded, err];
    		}
  �		remain = n;
  �		/* while (true) { */ case 1:
  �			skip = b.Buffered();
  �			/* */ if (skip === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (skip === 0) { */ case 3:
  				$r = b.fill(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  				skip = b.Buffered();
    			/* } */ case 4:
    			if (skip > remain) {
  L				skip = remain;
    			}
  `			b.r = b.r + (skip) >> 0;
  n			remain = remain - (skip) >> 0;
    			if (remain === 0) {
    				_tmp$2 = n;
				_tmp$3 = $ifaceNil;
				discarded = _tmp$2;
				err = _tmp$3;
				$s = -1; return [discarded, err];
    			}
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    				_tmp$4 = n - remain >> 0;
				_tmp$5 = b.readErr();
				discarded = _tmp$4;
				err = _tmp$5;
				$s = -1; return [discarded, err];
    			}
    		$s = 1; continue;
		case 2:
    		$s = -1; return [discarded, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Discard }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.b = b; $f.discarded = discarded; $f.err = err; $f.n = n; $f.remain = remain; $f.skip = skip; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Discard = function(n) { return this.$val.Discard(n); };
Readerbufio.ErrNegativeCountbufio.Readerbufio.fill~bufio.readErr~ (*bufio.Reader).Read �n	Reader.ptr.prototype.Read = function(p) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, b, err, n, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; err = $f.err; n = $f.n; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		b = this;
  B		n = p.$length;
    		if (n === 0) {
    			if (b.Buffered() > 0) {
    				_tmp = 0;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    			_tmp$2 = 0;
			_tmp$3 = b.readErr();
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
  �		/* */ if (b.r === b.w) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.r === b.w) { */ case 1:
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    				_tmp$4 = 0;
				_tmp$5 = b.readErr();
				n = _tmp$4;
				err = _tmp$5;
				$s = -1; return [n, err];
    			}
  �			/* */ if (p.$length >= b.buf.$length) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (p.$length >= b.buf.$length) { */ case 3:
  M				_r = b.rd.Read(p); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				n = _tuple[0];
				b.err = _tuple[1];
    				if (n < 0) {
  w					$panic(errNegativeRead);
    				}
    				if (n > 0) {
  �					b.lastByte = (((x = n - 1 >> 0, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x])) >> 0));
  �					b.lastRuneSize = -1;
    				}
    				_tmp$6 = n;
				_tmp$7 = b.readErr();
				n = _tmp$6;
				err = _tmp$7;
				$s = -1; return [n, err];
    			/* } */ case 4:
  2			b.r = 0;
  <			b.w = 0;
  F			_r$1 = b.rd.Read(b.buf); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			n = _tuple$1[0];
			b.err = _tuple$1[1];
    			if (n < 0) {
  r				$panic(errNegativeRead);
    			}
    			if (n === 0) {
    				_tmp$8 = 0;
				_tmp$9 = b.readErr();
				n = _tmp$8;
				err = _tmp$9;
				$s = -1; return [n, err];
    			}
  �			b.w = b.w + (n) >> 0;
    		/* } */ case 2:
  �		n = $copySlice(p, $subslice(b.buf, b.r, b.w));
   		b.r = b.r + (n) >> 0;
  
		b.lastByte = (((x$1 = b.buf, x$2 = b.r - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2])) >> 0));
  *		b.lastRuneSize = -1;
    		_tmp$10 = n;
		_tmp$11 = $ifaceNil;
		n = _tmp$10;
		err = _tmp$11;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.err = err; $f.n = n; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Read = function(p) { return this.$val.Read(p); };
Readerbufio.Readerbufio.errNegativeReadbufio.readErr~ (*bufio.Reader).ReadByte ��	Reader.ptr.prototype.ReadByte = function() {
		var b, c, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; c = $f.c; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  �		b.lastRuneSize = -1;
  �		/* while (true) { */ case 1:
			/* if (!(b.r === b.w)) { break; } */ if(!(b.r === b.w)) { $s = 2; continue; }
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  				$s = -1; return [0, b.readErr()];
    			}
  1			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
  Q		c = (x = b.buf, x$1 = b.r, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  b		b.r = b.r + (1) >> 0;
  i		b.lastByte = ((c >> 0));
  ~		$s = -1; return [c, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadByte }; } $f.b = b; $f.c = c; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadByte = function() { return this.$val.ReadByte(); };
Readerbufio.Readerbufio.fill~bufio.readErr~ (*bufio.Reader).UnreadByte �k	Reader.ptr.prototype.UnreadByte = function() {
		var b, x, x$1;
		b = this;
    		if (b.lastByte < 0 || (b.r === 0) && b.w > 0) {
  �			return $pkg.ErrInvalidUnreadByte;
    		}
    		if (b.r > 0) {
  "			b.r = b.r - (1) >> 0;
    		} else {
  N			b.w = 1;
    		}
  Z		(x = b.buf, x$1 = b.r, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1] = ((b.lastByte << 24 >>> 24))));
  y		b.lastByte = -1;
  �		b.lastRuneSize = -1;
  �		return $ifaceNil;
    	};
	Reader.prototype.UnreadByte = function() { return this.$val.UnreadByte(); };
Readerbufio.ErrInvalidUnreadBytebufio.Reader (*bufio.Reader).ReadRune �
N	Reader.ptr.prototype.ReadRune = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, b, err, r, size, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; b = $f.b; err = $f.err; r = $f.r; size = $f.size; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = 0;
		size = 0;
		err = $ifaceNil;
		b = this;
  �		/* while (true) { */ case 1:
			/* if (!((b.r + 4 >> 0) > b.w && !utf8.FullRune($subslice(b.buf, b.r, b.w)) && $interfaceIsEqual(b.err, $ifaceNil) && (b.w - b.r >> 0) < b.buf.$length)) { break; } */ if(!((b.r + 4 >> 0) > b.w && !utf8.FullRune($subslice(b.buf, b.r, b.w)) && $interfaceIsEqual(b.err, $ifaceNil) && (b.w - b.r >> 0) < b.buf.$length)) { $s = 2; continue; }
  3			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
  l		b.lastRuneSize = -1;
    		if (b.r === b.w) {
    			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = b.readErr();
			r = _tmp;
			size = _tmp$1;
			err = _tmp$2;
			$s = -1; return [r, size, err];
    		}
  �		_tmp$3 = (((x = b.buf, x$1 = b.r, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])) >> 0));
		_tmp$4 = 1;
		r = _tmp$3;
		size = _tmp$4;
    		if (r >= 128) {
  �			_tuple = utf8.DecodeRune($subslice(b.buf, b.r, b.w));
			r = _tuple[0];
			size = _tuple[1];
    		}
  		b.r = b.r + (size) >> 0;
  $		b.lastByte = (((x$2 = b.buf, x$3 = b.r - 1 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3])) >> 0));
  D		b.lastRuneSize = size;
    		_tmp$5 = r;
		_tmp$6 = size;
		_tmp$7 = $ifaceNil;
		r = _tmp$5;
		size = _tmp$6;
		err = _tmp$7;
		$s = -1; return [r, size, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadRune }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.r = r; $f.size = size; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadRune = function() { return this.$val.ReadRune(); };
Readerbufio.Readerbufio.fill~bufio.readErr~unicode/utf8.DecodeRuneunicode/utf8.FullRune (*bufio.Reader).UnreadRune �	Reader.ptr.prototype.UnreadRune = function() {
		var b;
		b = this;
    		if (b.lastRuneSize < 0 || b.r < b.lastRuneSize) {
  �			return $pkg.ErrInvalidUnreadRune;
    		}
  �		b.r = b.r - (b.lastRuneSize) >> 0;
  �		b.lastByte = -1;
  		b.lastRuneSize = -1;
   		return $ifaceNil;
    	};
	Reader.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
Readerbufio.ErrInvalidUnreadRunebufio.Reader (*bufio.Reader).Buffered ��	Reader.ptr.prototype.Buffered = function() {
		var b;
		b = this;
  �		return b.w - b.r >> 0;
    	};
	Reader.prototype.Buffered = function() { return this.$val.Buffered(); };
Readerbufio.Reader (*bufio.Reader).ReadSlice ��	Reader.ptr.prototype.ReadSlice = function(delim) {
		var b, delim, err, i, i$1, line, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; delim = $f.delim; err = $f.err; i = $f.i; i$1 = $f.i$1; line = $f.line; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		line = sliceType.nil;
		err = $ifaceNil;
		b = this;
  !l		s = 0;
  !�		/* while (true) { */ case 1:
  !�			i = bytes.IndexByte($subslice(b.buf, (b.r + s >> 0), b.w), delim);
    			if (i >= 0) {
  !�				i = i + (s) >> 0;
  !�				line = $subslice(b.buf, b.r, ((b.r + i >> 0) + 1 >> 0));
  "				b.r = b.r + ((i + 1 >> 0)) >> 0;
  "				/* break; */ $s = 2; continue;
    			}
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  "S				line = $subslice(b.buf, b.r, b.w);
  "l				b.r = b.w;
  "y				err = b.readErr();
  "�				/* break; */ $s = 2; continue;
    			}
    			if (b.Buffered() >= b.buf.$length) {
  "�				b.r = b.w;
  "�				line = b.buf;
  "�				err = $pkg.ErrBufferFull;
  #				/* break; */ $s = 2; continue;
    			}
  #			s = b.w - b.r >> 0;
  #J			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
  #�		i$1 = line.$length - 1 >> 0;
    		if (i$1 >= 0) {
  #�			b.lastByte = ((((i$1 < 0 || i$1 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + i$1]) >> 0));
  #�			b.lastRuneSize = -1;
    		}
  #�		$s = -1; return [line, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadSlice }; } $f.b = b; $f.delim = delim; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.line = line; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadSlice = function(delim) { return this.$val.ReadSlice(delim); };
Readerbufio.ErrBufferFullbufio.Readerbufio.fill~bufio.readErr~bufio.sliceTypebytes.IndexByte (*bufio.Reader).ReadLine �
	Reader.ptr.prototype.ReadLine = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tuple, b, drop, err, isPrefix, line, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tuple = $f._tuple; b = $f.b; drop = $f.drop; err = $f.err; isPrefix = $f.isPrefix; line = $f.line; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		line = sliceType.nil;
		isPrefix = false;
		err = $ifaceNil;
		b = this;
  ( 		_r = b.ReadSlice(10); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $pkg.ErrBufferFull)) {
    			if (line.$length > 0 && ((x = line.$length - 1 >> 0, ((x < 0 || x >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x])) === 13)) {
    				if (b.r === 0) {
  )A					$panic(new $String("bufio: tried to rewind past start of buffer"));
    				}
  )~				b.r = b.r - (1) >> 0;
  )�				line = $subslice(line, 0, (line.$length - 1 >> 0));
    			}
    			_tmp = line;
			_tmp$1 = true;
			_tmp$2 = $ifaceNil;
			line = _tmp;
			isPrefix = _tmp$1;
			err = _tmp$2;
			$s = -1; return [line, isPrefix, err];
    		}
    		if (line.$length === 0) {
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  )�				line = sliceType.nil;
    			}
  )�			$s = -1; return [line, isPrefix, err];
    		}
  *		err = $ifaceNil;
    		if ((x$1 = line.$length - 1 >> 0, ((x$1 < 0 || x$1 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x$1])) === 10) {
  *5			drop = 1;
    			if (line.$length > 1 && ((x$2 = line.$length - 2 >> 0, ((x$2 < 0 || x$2 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x$2])) === 13)) {
  *t				drop = 2;
    			}
  *�			line = $subslice(line, 0, (line.$length - drop >> 0));
    		}
  *�		$s = -1; return [line, isPrefix, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadLine }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tuple = _tuple; $f.b = b; $f.drop = drop; $f.err = err; $f.isPrefix = isPrefix; $f.line = line; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadLine = function() { return this.$val.ReadLine(); };
Readerbufio.ErrBufferFullbufio.Readerbufio.sliceType  (*bufio.Reader).collectFragments ��	Reader.ptr.prototype.collectFragments = function(delim) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, buf, delim, e, err, finalFragment, frag, fullBuffers, totalLen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; buf = $f.buf; delim = $f.delim; e = $f.e; err = $f.err; finalFragment = $f.finalFragment; frag = $f.frag; fullBuffers = $f.fullBuffers; totalLen = $f.totalLen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		fullBuffers = sliceType$1.nil;
		finalFragment = sliceType.nil;
		totalLen = 0;
		err = $ifaceNil;
		b = this;
  ,�		frag = sliceType.nil;
  -*		/* while (true) { */ case 1:
  -6			e = $ifaceNil;
  -@			_r = b.ReadSlice(delim); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			frag = _tuple[0];
			e = _tuple[1];
    			if ($interfaceIsEqual(e, $ifaceNil)) {
  -�				/* break; */ $s = 2; continue;
    			}
    			if (!($interfaceIsEqual(e, $pkg.ErrBufferFull))) {
  -�				err = e;
  -�				/* break; */ $s = 2; continue;
    			}
  -�			buf = $makeSlice(sliceType, frag.$length);
  .			$copySlice(buf, frag);
  .,			fullBuffers = $append(fullBuffers, buf);
  .U			totalLen = totalLen + (buf.$length) >> 0;
    		$s = 1; continue;
		case 2:
  .o		totalLen = totalLen + (frag.$length) >> 0;
    		_tmp = fullBuffers;
		_tmp$1 = frag;
		_tmp$2 = totalLen;
		_tmp$3 = err;
		fullBuffers = _tmp;
		finalFragment = _tmp$1;
		totalLen = _tmp$2;
		err = _tmp$3;
		$s = -1; return [fullBuffers, finalFragment, totalLen, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.collectFragments }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.buf = buf; $f.delim = delim; $f.e = e; $f.err = err; $f.finalFragment = finalFragment; $f.frag = frag; $f.fullBuffers = fullBuffers; $f.totalLen = totalLen; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.collectFragments = function(delim) { return this.$val.collectFragments(delim); };
ReadercollectFragments~bufio.ErrBufferFullbufio.Readerbufio.sliceTypebufio.sliceType$1 (*bufio.Reader).ReadBytes ��	Reader.ptr.prototype.ReadBytes = function(delim) {
		var _i, _r, _ref, _tuple, b, buf, delim, err, frag, full, i, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; b = $f.b; buf = $f.buf; delim = $f.delim; err = $f.err; frag = $f.frag; full = $f.full; i = $f.i; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  0�		_r = b.collectFragments(delim); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		full = _tuple[0];
		frag = _tuple[1];
		n = _tuple[2];
		err = _tuple[3];
  1		buf = $makeSlice(sliceType, n);
  1*		n = 0;
  1W		_ref = full;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  1o			n = n + ($copySlice($subslice(buf, n), ((i < 0 || i >= full.$length) ? ($throwRuntimeError("index out of range"), undefined) : full.$array[full.$offset + i]))) >> 0;
    			_i++;
		}
  1�		$copySlice($subslice(buf, n), frag);
  1�		$s = -1; return [buf, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadBytes }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f.b = b; $f.buf = buf; $f.delim = delim; $f.err = err; $f.frag = frag; $f.full = full; $f.i = i; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadBytes = function(delim) { return this.$val.ReadBytes(delim); };
Readerbufio.Readerbufio.collectFragments~bufio.sliceType (*bufio.Reader).ReadString ��	Reader.ptr.prototype.ReadString = function(delim) {
		var _i, _r, _ref, _tuple, b, buf, delim, err, fb, frag, full, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; b = $f.b; buf = $f.buf; delim = $f.delim; err = $f.err; fb = $f.fb; frag = $f.frag; full = $f.full; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  3�		_r = b.collectFragments(delim); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		full = _tuple[0];
		frag = _tuple[1];
		n = _tuple[2];
		err = _tuple[3];
  4!		buf = new strings.Builder.ptr(ptrType$1.nil, sliceType.nil);
  46		buf.Grow(n);
  4i		_ref = full;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			fb = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  4�			buf.Write(fb);
    			_i++;
		}
  4�		buf.Write(frag);
  4�		$s = -1; return [buf.String(), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadString }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f.b = b; $f.buf = buf; $f.delim = delim; $f.err = err; $f.fb = fb; $f.frag = frag; $f.full = full; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadString = function(delim) { return this.$val.ReadString(delim); };
Readerbufio.Readerbufio.collectFragments~bufio.ptrType$1bufio.sliceTypestrings.Builder (*bufio.Reader).WriteTo �	Reader.ptr.prototype.WriteTo = function(w) {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, b, err, err$1, err$2, err$3, m, m$1, m$2, n, ok, ok$1, r, w, w$1, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; b = $f.b; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; m = $f.m; m$1 = $f.m$1; m$2 = $f.m$2; n = $f.n; ok = $f.ok; ok$1 = $f.ok$1; r = $f.r; w = $f.w; w$1 = $f.w$1; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
  5�		_r = b.writeBuf(w); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  6			$s = -1; return [n, err];
    		}
  6		_tuple$1 = $assertType(b.rd, io.WriterTo, true);
		r = _tuple$1[0];
		ok = _tuple$1[1];
  6		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok) { */ case 2:
  6@			_r$1 = r.WriteTo(w); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$2 = _r$1;
			m = _tuple$2[0];
			err$1 = _tuple$2[1];
  6Y			n = (x = m, new $Int64(n.$high + x.$high, n.$low + x.$low));
    			_tmp = n;
			_tmp$1 = err$1;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		/* } */ case 3:
  6x		_tuple$3 = $assertType(w, io.ReaderFrom, true);
		w$1 = _tuple$3[0];
		ok$1 = _tuple$3[1];
  6u		/* */ if (ok$1) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (ok$1) { */ case 5:
  6�			_r$2 = w$1.ReadFrom(b.rd); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$4 = _r$2;
			m$1 = _tuple$4[0];
			err$2 = _tuple$4[1];
  6�			n = (x$1 = m$1, new $Int64(n.$high + x$1.$high, n.$low + x$1.$low));
    			_tmp$2 = n;
			_tmp$3 = err$2;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		/* } */ case 6:
  6�		/* */ if ((b.w - b.r >> 0) < b.buf.$length) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if ((b.w - b.r >> 0) < b.buf.$length) { */ case 8:
  6�			$r = b.fill(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 9:
  7		/* while (true) { */ case 11:
			/* if (!(b.r < b.w)) { break; } */ if(!(b.r < b.w)) { $s = 12; continue; }
  7I			_r$3 = b.writeBuf(w); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$5 = _r$3;
			m$2 = _tuple$5[0];
			err$3 = _tuple$5[1];
  7c			n = (x$2 = m$2, new $Int64(n.$high + x$2.$high, n.$low + x$2.$low));
    			if (!($interfaceIsEqual(err$3, $ifaceNil))) {
    				_tmp$4 = n;
				_tmp$5 = err$3;
				n = _tmp$4;
				err = _tmp$5;
				$s = -1; return [n, err];
    			}
  7�			$r = b.fill(); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 11; continue;
		case 12:
    		if ($interfaceIsEqual(b.err, io.EOF)) {
  7�			b.err = $ifaceNil;
    		}
    		_tmp$6 = n;
		_tmp$7 = b.readErr();
		n = _tmp$6;
		err = _tmp$7;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.WriteTo }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.b = b; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.m = m; $f.m$1 = m$1; $f.m$2 = m$2; $f.n = n; $f.ok = ok; $f.ok$1 = ok$1; $f.r = r; $f.w = w; $f.w$1 = w$1; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.WriteTo = function(w) { return this.$val.WriteTo(w); };
Readerbufio.Readerbufio.fill~bufio.readErr~bufio.writeBuf~io.EOFio.ReaderFromio.WriterTo (*bufio.Reader).writeBuf ��	Reader.ptr.prototype.writeBuf = function(w) {
		var _r, _tuple, b, err, n, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  8�		_r = w.Write($subslice(b.buf, b.r, b.w)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (n < 0) {
  8�			$panic(errNegativeWrite);
    		}
  9		b.r = b.r + (n) >> 0;
  9		$s = -1; return [(new $Int64(0, n)), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.writeBuf }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.writeBuf = function(w) { return this.$val.writeBuf(w); };
Reader	writeBuf~bufio.Readerbufio.errNegativeWrite bufio.NewWriterSizebufioNewWriterSize NewWriterSize��	NewWriterSize = function(w, size) {
		var _tuple, b, ok, size, w;
  ;�		_tuple = $assertType(w, ptrType$2, true);
		b = _tuple[0];
		ok = _tuple[1];
    		if (ok && b.buf.$length >= size) {
  <&			return b;
    		}
    		if (size <= 0) {
  <D			size = 4096;
    		}
  <^		return new Writer.ptr($ifaceNil, $makeSlice(sliceType, size), 0, w);
    	};
	$pkg.NewWriterSize = NewWriterSize;
NewWriterSizebufio.NewWriterSizebufio.Writerbufio.ptrType$2bufio.sliceType bufio.NewWriterbufio	NewWriter 	NewWriterp	NewWriter = function(w) {
		var w;
  =		return NewWriterSize(w, 4096);
    	};
	$pkg.NewWriter = NewWriter;
	NewWriterbufio.NewWriterbufio.NewWriterSize (*bufio.Writer).Size ��	Writer.ptr.prototype.Size = function() {
		var b;
		b = this;
  =�		return b.buf.$length;
    	};
	Writer.prototype.Size = function() { return this.$val.Size(); };
Writerbufio.Writer (*bufio.Writer).Reset ��	Writer.ptr.prototype.Reset = function(w) {
		var b, w;
		b = this;
  >1		b.err = $ifaceNil;
  >>		b.n = 0;
  >G		b.wr = w;
    	};
	Writer.prototype.Reset = function(w) { return this.$val.Reset(w); };
Writerbufio.Writer (*bufio.Writer).Flush �k	Writer.ptr.prototype.Flush = function() {
		var _r, _tuple, b, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  >�			$s = -1; return b.err;
    		}
    		if (b.n === 0) {
  >�			$s = -1; return $ifaceNil;
    		}
  >�		_r = b.wr.Write($subslice(b.buf, 0, b.n)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (n < b.n && $interfaceIsEqual(err, $ifaceNil)) {
  ?9			err = io.ErrShortWrite;
    		}
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			if (n > 0 && n < b.n) {
  ?				$copySlice($subslice(b.buf, 0, (b.n - n >> 0)), $subslice(b.buf, n, b.n));
    			}
  ?�			b.n = b.n - (n) >> 0;
  ?�			b.err = err;
  ?�			$s = -1; return err;
    		}
  ?�		b.n = 0;
  ?�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Flush }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Flush = function() { return this.$val.Flush(); };
Writerbufio.Writerio.ErrShortWrite (*bufio.Writer).Available ��	Writer.ptr.prototype.Available = function() {
		var b;
		b = this;
  @H		return b.buf.$length - b.n >> 0;
    	};
	Writer.prototype.Available = function() { return this.$val.Available(); };
Writerbufio.Writer (*bufio.Writer).Buffered ��	Writer.ptr.prototype.Buffered = function() {
		var b;
		b = this;
  @�		return b.n;
    	};
	Writer.prototype.Buffered = function() { return this.$val.Buffered(); };
Writerbufio.Writer (*bufio.Writer).Write ��	Writer.ptr.prototype.Write = function(p) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, err, n, n$1, nn, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; n$1 = $f.n$1; nn = $f.nn; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		nn = 0;
		err = $ifaceNil;
		b = this;
  A�		/* while (true) { */ case 1:
			/* if (!(p.$length > b.Available() && $interfaceIsEqual(b.err, $ifaceNil))) { break; } */ if(!(p.$length > b.Available() && $interfaceIsEqual(b.err, $ifaceNil))) { $s = 2; continue; }
  B			n = 0;
  B			/* */ if (b.Buffered() === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (b.Buffered() === 0) { */ case 3:
  Bt				_r = b.wr.Write(p); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				n = _tuple[0];
				b.err = _tuple[1];
    				$s = 5; continue;
			/* } else { */ case 4:
  B�				n = $copySlice($subslice(b.buf, b.n), p);
  B�				b.n = b.n + (n) >> 0;
  B�				_r$1 = b.Flush(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$1;
    			/* } */ case 5:
  B�			nn = nn + (n) >> 0;
  B�			p = $subslice(p, n);
    		$s = 1; continue;
		case 2:
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    			_tmp = nn;
			_tmp$1 = b.err;
			nn = _tmp;
			err = _tmp$1;
			$s = -1; return [nn, err];
    		}
  C		n$1 = $copySlice($subslice(b.buf, b.n), p);
  C/		b.n = b.n + (n$1) >> 0;
  C9		nn = nn + (n$1) >> 0;
    		_tmp$2 = nn;
		_tmp$3 = $ifaceNil;
		nn = _tmp$2;
		err = _tmp$3;
		$s = -1; return [nn, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Write }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.n$1 = n$1; $f.nn = nn; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Write = function(p) { return this.$val.Write(p); };
Writerbufio.Writer (*bufio.Writer).WriteByte �0	Writer.ptr.prototype.WriteByte = function(c) {
		var _r, _v, b, c, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _v = $f._v; b = $f.b; c = $f.c; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  C�			$s = -1; return b.err;
    		}
  C�		if (!(b.Available() <= 0)) { _v = false; $s = 3; continue s; }
		_r = b.Flush(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_v = !($interfaceIsEqual(_r, $ifaceNil)); case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_v) { */ case 1:
  C�			$s = -1; return b.err;
    		/* } */ case 2:
  D		(x = b.buf, x$1 = b.n, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1] = c));
  D		b.n = b.n + (1) >> 0;
  D		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.WriteByte }; } $f._r = _r; $f._v = _v; $f.b = b; $f.c = c; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
Writerbufio.Writer (*bufio.Writer).WriteRune �o	Writer.ptr.prototype.WriteRune = function(r) {
		var $24r, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, b, err, n, r, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; r = $f.r; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		size = 0;
		err = $ifaceNil;
		b = this;
  E		/* */ if (((r >>> 0)) < 128) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (((r >>> 0)) < 128) { */ case 1:
  E,			_r = b.WriteByte(((r << 24 >>> 24))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp = 0;
				_tmp$1 = err;
				size = _tmp;
				err = _tmp$1;
				$s = -1; return [size, err];
    			}
    			_tmp$2 = 1;
			_tmp$3 = $ifaceNil;
			size = _tmp$2;
			err = _tmp$3;
			$s = -1; return [size, err];
    		/* } */ case 2:
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    			_tmp$4 = 0;
			_tmp$5 = b.err;
			size = _tmp$4;
			err = _tmp$5;
			$s = -1; return [size, err];
    		}
  E�		n = b.Available();
  E�		/* */ if (n < 4) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (n < 4) { */ case 4:
  E�			_r$1 = b.Flush(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    				_tmp$6 = 0;
				_tmp$7 = b.err;
				size = _tmp$6;
				err = _tmp$7;
				$s = -1; return [size, err];
    			}
  F			n = b.Available();
  F			/* */ if (n < 4) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (n < 4) { */ case 7:
    				_r$2 = b.WriteString(($encodeRune(r))); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				size = _tuple[0];
				err = _tuple[1];
				$24r = [size, err];
				$s = 10; case 10: return $24r;
    			/* } */ case 8:
    		/* } */ case 5:
  F�		size = utf8.EncodeRune($subslice(b.buf, b.n), r);
  F�		b.n = b.n + (size) >> 0;
    		_tmp$8 = size;
		_tmp$9 = $ifaceNil;
		size = _tmp$8;
		err = _tmp$9;
		$s = -1; return [size, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.WriteRune }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.r = r; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.WriteRune = function(r) { return this.$val.WriteRune(r); };
Writerbufio.Writerunicode/utf8.EncodeRune (*bufio.Writer).WriteString ��	Writer.ptr.prototype.WriteString = function(s) {
		var _r, b, n, n$1, nn, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; n = $f.n; n$1 = $f.n$1; nn = $f.nn; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  G�		nn = 0;
  G�		/* while (true) { */ case 1:
			/* if (!(s.length > b.Available() && $interfaceIsEqual(b.err, $ifaceNil))) { break; } */ if(!(s.length > b.Available() && $interfaceIsEqual(b.err, $ifaceNil))) { $s = 2; continue; }
  G�			n = $copyString($subslice(b.buf, b.n), s);
  H			b.n = b.n + (n) >> 0;
  H			nn = nn + (n) >> 0;
  H'			s = $substring(s, n);
  H3			_r = b.Flush(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    		$s = 1; continue;
		case 2:
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  HU			$s = -1; return [nn, b.err];
    		}
  Hj		n$1 = $copyString($subslice(b.buf, b.n), s);
  H�		b.n = b.n + (n$1) >> 0;
  H�		nn = nn + (n$1) >> 0;
  H�		$s = -1; return [nn, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.WriteString }; } $f._r = _r; $f.b = b; $f.n = n; $f.n$1 = n$1; $f.nn = nn; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
Writerbufio.Writer (*bufio.Writer).ReadFrom ��	Writer.ptr.prototype.ReadFrom = function(r) {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, b, err, err1, m, n, nr, ok, r, w, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; b = $f.b; err = $f.err; err1 = $f.err1; m = $f.m; n = $f.n; nr = $f.nr; ok = $f.ok; r = $f.r; w = $f.w; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
    			_tmp = new $Int64(0, 0);
			_tmp$1 = b.err;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  I�		/* */ if (b.Buffered() === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.Buffered() === 0) { */ case 1:
  I�			_tuple = $assertType(b.wr, io.ReaderFrom, true);
			w = _tuple[0];
			ok = _tuple[1];
  I�			/* */ if (ok) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ok) { */ case 3:
  J				_r = w.ReadFrom(r); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				n = _tuple$1[0];
				err = _tuple$1[1];
  J'				b.err = err;
    				_tmp$2 = n;
				_tmp$3 = err;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			/* } */ case 4:
    		/* } */ case 2:
  JP		m = 0;
  JW		/* while (true) { */ case 6:
  J_			/* */ if (b.Available() === 0) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (b.Available() === 0) { */ case 8:
  J}				_r$1 = b.Flush(); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				err1 = _r$1;
    				if (!($interfaceIsEqual(err1, $ifaceNil))) {
    					_tmp$4 = n;
					_tmp$5 = err1;
					n = _tmp$4;
					err = _tmp$5;
					$s = -1; return [n, err];
    				}
    			/* } */ case 9:
  J�			nr = 0;
  J�			/* while (true) { */ case 11:
				/* if (!(nr < 100)) { break; } */ if(!(nr < 100)) { $s = 12; continue; }
  J�				_r$2 = r.Read($subslice(b.buf, b.n)); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple$2 = _r$2;
				m = _tuple$2[0];
				err = _tuple$2[1];
    				if (!((m === 0)) || !($interfaceIsEqual(err, $ifaceNil))) {
  K+					/* break; */ $s = 12; continue;
    				}
  K9				nr = nr + (1) >> 0;
    			$s = 11; continue;
			case 12:
    			if (nr === 100) {
    				_tmp$6 = n;
				_tmp$7 = io.ErrNoProgress;
				n = _tmp$6;
				err = _tmp$7;
				$s = -1; return [n, err];
    			}
  K�			b.n = b.n + (m) >> 0;
  K�			n = (x = (new $Int64(0, m)), new $Int64(n.$high + x.$high, n.$low + x.$low));
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  K�				/* break; */ $s = 7; continue;
    			}
    		$s = 6; continue;
		case 7:
  K�		/* */ if ($interfaceIsEqual(err, io.EOF)) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if ($interfaceIsEqual(err, io.EOF)) { */ case 14:
  L			/* */ if (b.Available() === 0) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (b.Available() === 0) { */ case 16:
  L2				_r$3 = b.Flush(); /* */ $s = 19; case 19: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				err = _r$3;
    				$s = 18; continue;
			/* } else { */ case 17:
  LP				err = $ifaceNil;
    			/* } */ case 18:
    		/* } */ case 15:
    		_tmp$8 = n;
		_tmp$9 = err;
		n = _tmp$8;
		err = _tmp$9;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.ReadFrom }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.b = b; $f.err = err; $f.err1 = err1; $f.m = m; $f.n = n; $f.nr = nr; $f.ok = ok; $f.r = r; $f.w = w; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.ReadFrom = function(r) { return this.$val.ReadFrom(r); };
Writerbufio.Writerio.EOFio.ErrNoProgressio.ReaderFrom bufio.NewReadWriterbufioNewReadWriter NewReadWriter��	NewReadWriter = function(r, w) {
		var r, w;
  M�		return new ReadWriter.ptr(r, w);
    	};
	$pkg.NewReadWriter = NewReadWriter;
NewReadWriterbufio.NewReadWriterbufio.ReadWriter bufio.NewScannerbufio
NewScanner 
NewScanner��	NewScanner = function(r) {
		var r;
  ]�		return new Scanner.ptr(r, ScanLines, 65536, sliceType.nil, sliceType.nil, 0, 0, $ifaceNil, 0, false, false);
    	};
	$pkg.NewScanner = NewScanner;

NewScannerbufio.NewScannerbufio.ScanLinesbufio.Scannerbufio.sliceType (*bufio.Scanner).Err ��	Scanner.ptr.prototype.Err = function() {
		var s;
		s = this;
    		if ($interfaceIsEqual(s.err, io.EOF)) {
  ^|			return $ifaceNil;
    		}
  ^�		return s.err;
    	};
	Scanner.prototype.Err = function() { return this.$val.Err(); };
Scannerbufio.Scannerio.EOF (*bufio.Scanner).Bytes ��	Scanner.ptr.prototype.Bytes = function() {
		var s;
		s = this;
  _~		return s.token;
    	};
	Scanner.prototype.Bytes = function() { return this.$val.Bytes(); };
Scannerbufio.Scanner (*bufio.Scanner).Text ��	Scanner.ptr.prototype.Text = function() {
		var s;
		s = this;
  `'		return ($bytesToString(s.token));
    	};
	Scanner.prototype.Text = function() { return this.$val.Text(); };
Scannerbufio.Scanner (*bufio.Scanner).Scan �|	Scanner.ptr.prototype.Scan = function() {
		var _q, _r, _r$1, _tuple, _tuple$1, advance, err, err$1, loop, n, newBuf, newSize, s, token, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; advance = $f.advance; err = $f.err; err$1 = $f.err$1; loop = $f.loop; n = $f.n; newBuf = $f.newBuf; newSize = $f.newSize; s = $f.s; token = $f.token; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
    		if (s.done) {
  d�			$s = -1; return false;
    		}
  d�		s.scanCalled = true;
  e		/* while (true) { */ case 1:
  e�			/* */ if (s.end > s.start || !($interfaceIsEqual(s.err, $ifaceNil))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (s.end > s.start || !($interfaceIsEqual(s.err, $ifaceNil))) { */ case 3:
  f				_r = s.split($subslice(s.buf, s.start, s.end), !($interfaceIsEqual(s.err, $ifaceNil))); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				advance = _tuple[0];
				token = _tuple[1];
				err = _tuple[2];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					if ($interfaceIsEqual(err, $pkg.ErrFinalToken)) {
  f~						s.token = token;
  f�						s.done = true;
  f�						$s = -1; return true;
    					}
  f�					s.setErr(err);
  f�					$s = -1; return false;
    				}
    				if (!s.advance(advance)) {
  g 					$s = -1; return false;
    				}
  g				s.token = token;
    				if (!(token === sliceType.nil)) {
    					if ($interfaceIsEqual(s.err, $ifaceNil) || advance > 0) {
  gd						s.empties = 0;
    					} else {
  g�						s.empties = s.empties + (1) >> 0;
    						if (s.empties > 100) {
  g�							$panic(new $String("bufio.Scan: too many empty tokens without progressing"));
    						}
    					}
  hJ					$s = -1; return true;
    				}
    			/* } */ case 4:
    			if (!($interfaceIsEqual(s.err, $ifaceNil))) {
  i 				s.start = 0;
  i				s.end = 0;
  i				$s = -1; return false;
    			}
    			if (s.start > 0 && ((s.end === s.buf.$length) || s.start > (_q = s.buf.$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")))) {
  i�				$copySlice(s.buf, $subslice(s.buf, s.start, s.end));
  j				s.end = s.end - (s.start) >> 0;
  j/				s.start = 0;
    			}
    			if (s.end === s.buf.$length) {
    				if (s.buf.$length >= s.maxTokenSize || s.buf.$length > 1073741823) {
  k"					s.setErr($pkg.ErrTooLong);
  k;					$s = -1; return false;
    				}
  kP				newSize = $imul(s.buf.$length, 2);
    				if (newSize === 0) {
  k�					newSize = 4096;
    				}
    				if (newSize > s.maxTokenSize) {
  k�					newSize = s.maxTokenSize;
    				}
  k�				newBuf = $makeSlice(sliceType, newSize);
  l				$copySlice(newBuf, $subslice(s.buf, s.start, s.end));
  l.				s.buf = newBuf;
  l@				s.end = s.end - (s.start) >> 0;
  lT				s.start = 0;
    			}
  m4			loop = 0;
			/* while (true) { */ case 6:
  mF				_r$1 = s.r.Read($subslice(s.buf, s.end, s.buf.$length)); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				n = _tuple$1[0];
				err$1 = _tuple$1[1];
    				if (n < 0 || (s.buf.$length - s.end >> 0) < n) {
  m�					s.setErr($pkg.ErrBadReadCount);
  m�					/* break; */ $s = 7; continue;
    				}
  m�				s.end = s.end + (n) >> 0;
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  m�					s.setErr(err$1);
  m�					/* break; */ $s = 7; continue;
    				}
    				if (n > 0) {
  n					s.empties = 0;
  n+					/* break; */ $s = 7; continue;
    				}
  n9				loop = loop + (1) >> 0;
    				if (loop > 100) {
  nl					s.setErr(io.ErrNoProgress);
  n�					/* break; */ $s = 7; continue;
    				}
    			$s = 6; continue;
			case 7:
    		$s = 1; continue;
		case 2:
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Scan }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.advance = advance; $f.err = err; $f.err$1 = err$1; $f.loop = loop; $f.n = n; $f.newBuf = newBuf; $f.newSize = newSize; $f.s = s; $f.token = token; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Scan = function() { return this.$val.Scan(); };
Scannerbufio.ErrBadReadCountbufio.ErrFinalTokenbufio.ErrTooLongbufio.Scannerbufio.advance~bufio.setErr~bufio.sliceTypeio.ErrNoProgress (*bufio.Scanner).advance ��	Scanner.ptr.prototype.advance = function(n) {
		var n, s;
		s = this;
    		if (n < 0) {
  o+			s.setErr($pkg.ErrNegativeAdvance);
  oJ			return false;
    		}
    		if (n > (s.end - s.start >> 0)) {
  ot			s.setErr($pkg.ErrAdvanceTooFar);
  o�			return false;
    		}
  o�		s.start = s.start + (n) >> 0;
  o�		return true;
    	};
	Scanner.prototype.advance = function(n) { return this.$val.advance(n); };
Scanneradvance~bufio.ErrAdvanceTooFarbufio.ErrNegativeAdvancebufio.Scannerbufio.setErr~ (*bufio.Scanner).setErr �	Scanner.ptr.prototype.setErr = function(err) {
		var err, s;
		s = this;
    		if ($interfaceIsEqual(s.err, $ifaceNil) || $interfaceIsEqual(s.err, io.EOF)) {
  p<			s.err = err;
    		}
    	};
	Scanner.prototype.setErr = function(err) { return this.$val.setErr(err); };
ScannersetErr~bufio.Scannerio.EOF (*bufio.Scanner).Buffer �_	Scanner.ptr.prototype.Buffer = function(buf, max) {
		var buf, max, s;
		s = this;
    		if (s.scanCalled) {
  rC			$panic(new $String("Buffer called after Scan"));
    		}
  ri		s.buf = $subslice(buf, 0, buf.$capacity);
  r�		s.maxTokenSize = max;
    	};
	Scanner.prototype.Buffer = function(buf, max) { return this.$val.Buffer(buf, max); };
Scannerbufio.Scanner (*bufio.Scanner).Split �	Scanner.ptr.prototype.Split = function(split) {
		var s, split;
		s = this;
    		if (s.scanCalled) {
  sw			$panic(new $String("Split called after Scan"));
    		}
  s�		s.split = split;
    	};
	Scanner.prototype.Split = function(split) { return this.$val.Split(split); };
Scannerbufio.Scanner bufio.ScanBytesbufio	ScanBytes 	ScanBytes�N	ScanBytes = function(data, atEOF) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, advance, atEOF, data, err, token;
		advance = 0;
		token = sliceType.nil;
		err = $ifaceNil;
    		if (atEOF && (data.$length === 0)) {
    			_tmp = 0;
			_tmp$1 = sliceType.nil;
			_tmp$2 = $ifaceNil;
			advance = _tmp;
			token = _tmp$1;
			err = _tmp$2;
			return [advance, token, err];
    		}
    		_tmp$3 = 1;
		_tmp$4 = $subslice(data, 0, 1);
		_tmp$5 = $ifaceNil;
		advance = _tmp$3;
		token = _tmp$4;
		err = _tmp$5;
		return [advance, token, err];
    	};
	$pkg.ScanBytes = ScanBytes;
	ScanBytesbufio.ScanBytesbufio.sliceType bufio.ScanRunesbufio	ScanRunes 	ScanRunes��	ScanRunes = function(data, atEOF) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, advance, atEOF, data, err, token, width;
		advance = 0;
		token = sliceType.nil;
		err = $ifaceNil;
    		if (atEOF && (data.$length === 0)) {
    			_tmp = 0;
			_tmp$1 = sliceType.nil;
			_tmp$2 = $ifaceNil;
			advance = _tmp;
			token = _tmp$1;
			err = _tmp$2;
			return [advance, token, err];
    		}
    		if ((0 >= data.$length ? ($throwRuntimeError("index out of range"), undefined) : data.$array[data.$offset + 0]) < 128) {
    			_tmp$3 = 1;
			_tmp$4 = $subslice(data, 0, 1);
			_tmp$5 = $ifaceNil;
			advance = _tmp$3;
			token = _tmp$4;
			err = _tmp$5;
			return [advance, token, err];
    		}
  w�		_tuple = utf8.DecodeRune(data);
		width = _tuple[1];
    		if (width > 1) {
    			_tmp$6 = width;
			_tmp$7 = $subslice(data, 0, width);
			_tmp$8 = $ifaceNil;
			advance = _tmp$6;
			token = _tmp$7;
			err = _tmp$8;
			return [advance, token, err];
    		}
    		if (!atEOF && !utf8.FullRune(data)) {
    			_tmp$9 = 0;
			_tmp$10 = sliceType.nil;
			_tmp$11 = $ifaceNil;
			advance = _tmp$9;
			token = _tmp$10;
			err = _tmp$11;
			return [advance, token, err];
    		}
    		_tmp$12 = 1;
		_tmp$13 = errorRune;
		_tmp$14 = $ifaceNil;
		advance = _tmp$12;
		token = _tmp$13;
		err = _tmp$14;
		return [advance, token, err];
    	};
	$pkg.ScanRunes = ScanRunes;
	ScanRunesbufio.ScanRunesbufio.errorRunebufio.sliceTypeunicode/utf8.DecodeRuneunicode/utf8.FullRune bufio.dropCRbufiodropCR dropCR�K	dropCR = function(data) {
		var data, x;
    		if (data.$length > 0 && ((x = data.$length - 1 >> 0, ((x < 0 || x >= data.$length) ? ($throwRuntimeError("index out of range"), undefined) : data.$array[data.$offset + x])) === 13)) {
  {			return $subslice(data, 0, (data.$length - 1 >> 0));
    		}
  {#		return data;
    	};
dropCRbufio.dropCR bufio.ScanLinesbufio	ScanLines 	ScanLines�C	ScanLines = function(data, atEOF) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, advance, atEOF, data, err, i, token;
		advance = 0;
		token = sliceType.nil;
		err = $ifaceNil;
    		if (atEOF && (data.$length === 0)) {
    			_tmp = 0;
			_tmp$1 = sliceType.nil;
			_tmp$2 = $ifaceNil;
			advance = _tmp;
			token = _tmp$1;
			err = _tmp$2;
			return [advance, token, err];
    		}
  }>		i = bytes.IndexByte(data, 10);
    		if (i >= 0) {
    			_tmp$3 = i + 1 >> 0;
			_tmp$4 = dropCR($subslice(data, 0, i));
			_tmp$5 = $ifaceNil;
			advance = _tmp$3;
			token = _tmp$4;
			err = _tmp$5;
			return [advance, token, err];
    		}
    		if (atEOF) {
    			_tmp$6 = data.$length;
			_tmp$7 = dropCR(data);
			_tmp$8 = $ifaceNil;
			advance = _tmp$6;
			token = _tmp$7;
			err = _tmp$8;
			return [advance, token, err];
    		}
    		_tmp$9 = 0;
		_tmp$10 = sliceType.nil;
		_tmp$11 = $ifaceNil;
		advance = _tmp$9;
		token = _tmp$10;
		err = _tmp$11;
		return [advance, token, err];
    	};
	$pkg.ScanLines = ScanLines;
	ScanLinesbufio.ScanLinesbufio.dropCRbufio.sliceTypebytes.IndexByte bufio.isSpacebufioisSpace isSpace�Z	isSpace = function(r) {
		var _1, _2, r;
    		if (r <= 255) {
    			_1 = r;
    			if ((_1 === (32)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12)) || (_1 === (13))) {
  �				return true;
    			} else if ((_1 === (133)) || (_1 === (160))) {
  �				return true;
    			}
  �			return false;
    		}
    		if (8192 <= r && r <= 8202) {
  �`			return true;
    		}
    		_2 = r;
    		if ((_2 === (5760)) || (_2 === (8232)) || (_2 === (8233)) || (_2 === (8239)) || (_2 === (8287)) || (_2 === (12288))) {
  ��			return true;
    		}
  ��		return false;
    	};
isSpacebufio.isSpace bufio.ScanWordsbufio	ScanWords 	ScanWords��	ScanWords = function(data, atEOF) {
		var _tmp, _tmp$1, _tmp$10, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, advance, atEOF, data, err, i, r, r$1, start, token, width, width$1;
		advance = 0;
		token = sliceType.nil;
		err = $ifaceNil;
  �,		start = 0;
  �<		width = 0;
		while (true) {
			if (!(start < data.$length)) { break; }
  �r			r = 0;
  �{			_tuple = utf8.DecodeRune($subslice(data, start));
			r = _tuple[0];
			width = _tuple[1];
    			if (!isSpace(r)) {
  ��				break;
    			}
  �[			start = start + (width) >> 0;
    		}
  ��		_tmp = 0;
		_tmp$1 = start;
		width$1 = _tmp;
		i = _tmp$1;
		while (true) {
			if (!(i < data.$length)) { break; }
  �/			r$1 = 0;
  �8			_tuple$1 = utf8.DecodeRune($subslice(data, i));
			r$1 = _tuple$1[0];
			width$1 = _tuple$1[1];
    			if (isSpace(r$1)) {
    				_tmp$2 = i + width$1 >> 0;
				_tmp$3 = $subslice(data, start, i);
				_tmp$4 = $ifaceNil;
				advance = _tmp$2;
				token = _tmp$3;
				err = _tmp$4;
				return [advance, token, err];
    			}
  �			i = i + (width$1) >> 0;
    		}
    		if (atEOF && data.$length > start) {
    			_tmp$5 = data.$length;
			_tmp$6 = $subslice(data, start);
			_tmp$7 = $ifaceNil;
			advance = _tmp$5;
			token = _tmp$6;
			err = _tmp$7;
			return [advance, token, err];
    		}
    		_tmp$8 = start;
		_tmp$9 = sliceType.nil;
		_tmp$10 = $ifaceNil;
		advance = _tmp$8;
		token = _tmp$9;
		err = _tmp$10;
		return [advance, token, err];
    	};
	$pkg.ScanWords = ScanWords;
	ScanWordsbufio.ScanWordsbufio.isSpacebufio.sliceTypeunicode/utf8.DecodeRune �L{"Base":33899,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bufio/bufio.go","Base":1,"Size":19889,"Lines":[0,55,109,159,160,237,312,383,397,398,407,416,426,432,443,459,461,462,470,493,495,496,502,573,644,701,761,763,764,783,784,840,861,882,939,995,1015,1084,1161,1163,1164,1193,1230,1231,1309,1382,1425,1478,1506,1529,1560,1571,1574,1605,1632,1635,1653,1686,1696,1698,1699,1768,1807,1849,1851,1852,1912,1962,1963,2031,2070,2108,2127,2129,2130,2180,2194,2215,2234,2254,2274,2277,2279,2280,2364,2365,2408,2434,2472,2486,2516,2529,2539,2542,2543,2567,2611,2614,2615,2665,2714,2749,2762,2788,2792,2803,2821,2836,2846,2850,2863,2873,2877,2880,2906,2908,2909,2944,2958,2971,2983,2985,2986,3064,3141,3213,3267,3270,3343,3377,3424,3436,3467,3470,3471,3488,3509,3510,3569,3626,3629,3630,3651,3690,3693,3694,3719,3734,3770,3801,3813,3833,3851,3874,3878,3881,3913,3915,3916,3992,3995,4061,4132,4174,4235,4247,4276,4279,4292,4301,4304,4317,4324,4347,4364,4376,4399,4403,4424,4441,4445,4459,4476,4495,4512,4516,4536,4570,4574,4577,4579,4580,4607,4654,4725,4761,4817,4875,4928,4940,4953,4977,4994,4998,5022,5025,5042,5062,5087,5091,5119,5151,5193,5220,5234,5261,5266,5280,5309,5333,5338,5363,5367,5382,5423,5433,5443,5473,5486,5512,5516,5530,5555,5559,5570,5573,5574,5601,5630,5640,5672,5693,5708,5710,5711,5756,5802,5846,5867,5885,5905,5930,5934,5964,5967,5984,5991,6012,6027,6029,6030,6115,6118,6189,6259,6278,6316,6360,6390,6393,6417,6431,6439,6449,6475,6485,6488,6519,6536,6557,6569,6571,6572,6647,6731,6797,6857,6960,7015,7018,7039,7056,7083,7086,7117,7142,7186,7189,7202,7234,7257,7278,7280,7281,7354,7426,7500,7529,7567,7616,7646,7649,7672,7689,7710,7722,7724,7725,7807,7860,7861,7930,7988,8036,8100,8178,8259,8323,8377,8413,8488,8554,8584,8591,8611,8672,8682,8713,8729,8738,8742,8743,8763,8783,8808,8821,8842,8851,8855,8856,8874,8908,8921,8937,8960,8969,8973,8974,9030,9031,9064,9067,9068,9098,9131,9159,9181,9184,9185,9193,9195,9196,9271,9336,9339,9419,9491,9567,9645,9718,9794,9809,9812,9895,9974,10049,10126,10168,10238,10269,10296,10352,10402,10456,10510,10527,10556,10613,10618,10627,10656,10660,10685,10688,10689,10710,10728,10742,10746,10755,10758,10769,10770,10802,10814,10864,10876,10880,10911,10914,10922,10924,10925,11004,11082,11138,11173,11243,11322,11361,11479,11496,11560,11567,11581,11612,11650,11659,11663,11709,11720,11729,11733,11734,11766,11799,11817,11858,11881,11884,11885,11908,11949,11951,11952,12021,12097,12161,12243,12324,12334,12388,12445,12494,12560,12584,12591,12629,12652,12682,12685,12706,12723,12725,12726,12796,12873,12938,13020,13102,13112,13166,13224,13273,13339,13364,13377,13415,13442,13458,13461,13478,13504,13506,13507,13542,13619,13676,13732,13793,13817,13834,13843,13846,13847,13885,13910,13919,13935,13938,13939,13976,14005,14014,14030,14033,14034,14061,14091,14094,14095,14112,14150,14176,14185,14203,14220,14224,14254,14257,14258,14280,14294,14297,14298,14321,14323,14324,14410,14411,14465,14521,14556,14568,14594,14597,14607,14629,14631,14632,14651,14652,14708,14772,14845,14908,14968,14997,15018,15029,15041,15050,15065,15067,15068,15146,15219,15262,15314,15342,15364,15395,15406,15409,15425,15449,15452,15469,15496,15506,15509,15511,15512,15581,15619,15660,15662,15663,15723,15773,15774,15843,15881,15919,15932,15941,15951,15953,15954,16017,16050,16069,16084,16087,16102,16115,16118,16154,16182,16207,16210,16227,16251,16289,16293,16304,16318,16331,16334,16343,16355,16357,16358,16420,16481,16482,16570,16617,16618,16669,16712,16767,16794,16849,16895,16907,16932,16965,17008,17036,17047,17075,17087,17100,17104,17114,17126,17129,17148,17167,17170,17197,17207,17216,17232,17234,17235,17270,17313,17332,17347,17350,17395,17410,17413,17429,17436,17448,17450,17451,17510,17556,17615,17673,17705,17734,17752,17769,17773,17789,17792,17811,17829,17832,17852,17874,17905,17924,17928,17948,17971,18019,18054,18058,18061,18101,18114,18132,18134,18135,18167,18210,18283,18310,18364,18373,18419,18447,18458,18468,18480,18492,18495,18514,18533,18536,18563,18573,18582,18598,18600,18601,18664,18729,18786,18848,18867,18885,18888,18912,18953,18979,18994,19011,19015,19018,19029,19036,19062,19101,19120,19125,19129,19139,19177,19209,19238,19248,19253,19261,19265,19303,19333,19337,19348,19364,19382,19391,19395,19398,19418,19476,19502,19521,19532,19545,19549,19552,19567,19569,19570,19599,19600,19656,19688,19713,19722,19731,19733,19734,19806,19861,19887],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bufio/scan.go","Base":19891,"Size":14007,"Lines":[0,55,109,159,160,174,175,184,193,203,209,225,227,228,296,362,432,497,565,643,709,778,833,836,912,982,1055,1132,1181,1184,1206,1268,1329,1400,1457,1518,1578,1625,1666,1727,1794,1840,1842,1843,1916,1994,2070,2145,2221,2224,2298,2370,2394,2397,2468,2532,2603,2673,2743,2813,2878,2935,2938,3008,3074,3112,3196,3197,3228,3234,3300,3392,3488,3570,3572,3573,3581,3645,3714,3777,3827,3857,3858,3921,3923,3924,3976,4021,4061,4079,4098,4125,4159,4162,4164,4165,4241,4273,4295,4308,4311,4325,4327,4328,4396,4463,4519,4554,4570,4572,4573,4639,4689,4723,4747,4749,4750,4823,4898,4975,5049,5124,5192,5255,5315,5361,5362,5429,5502,5570,5641,5704,5724,5784,5855,5868,5900,5913,5928,5931,5952,5984,5991,6049,6122,6184,6223,6293,6312,6342,6363,6382,6399,6405,6423,6440,6445,6473,6490,6495,6514,6535,6572,6591,6604,6657,6674,6721,6790,6797,6803,6819,6824,6828,6886,6946,6966,6986,7001,7014,7030,7034,7060,7137,7162,7232,7269,7289,7304,7308,7348,7375,7432,7469,7531,7556,7573,7578,7607,7628,7655,7660,7693,7722,7727,7762,7800,7818,7838,7853,7857,7928,8002,8059,8080,8127,8165,8195,8205,8210,8224,8243,8261,8271,8276,8290,8308,8318,8323,8333,8373,8404,8414,8419,8423,8426,8428,8429,8514,8554,8566,8597,8612,8615,8639,8668,8683,8686,8700,8713,8715,8716,8763,8801,8839,8853,8856,8858,8859,8930,8999,9068,9124,9127,9184,9227,9230,9291,9339,9358,9394,9397,9422,9444,9446,9447,9497,9541,9544,9604,9647,9666,9701,9704,9721,9723,9724,9743,9744,9826,9907,9937,9958,9961,9987,9989,9990,10037,10038,10103,10171,10245,10323,10400,10473,10554,10584,10605,10608,10609,10633,10663,10690,10693,10694,10747,10782,10798,10870,10891,10926,10929,10930,11008,11073,11154,11191,11224,11245,11248,11249,11327,11405,11440,11466,11468,11469,11514,11548,11597,11628,11631,11644,11646,11647,11720,11796,11873,11949,12020,12032,12113,12143,12164,12167,12214,12259,12298,12301,12371,12383,12421,12424,12447,12467,12469,12470,12547,12635,12652,12680,12700,12778,12791,12833,12848,12875,12890,12894,12909,12912,12934,12971,12985,12988,13000,13066,13080,13083,13097,13099,13100,13165,13239,13306,13326,13407,13432,13444,13497,13510,13553,13572,13581,13585,13588,13631,13686,13699,13738,13756,13796,13800,13803,13884,13917,13955,13958,13981,14005],"Infos":null}]}
 