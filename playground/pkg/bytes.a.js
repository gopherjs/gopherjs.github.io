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
GoLinkname�� Implementation�� 	Reference��   �����bytesbyteserrorsinternal/bytealgiounicodeunicode/utf8��i �� bufofflastReadreadOpBytesbBufferStringemptyLenCapTruncatenResettryGrowByReslicegrowGrowWriteperrWriteStringsReadFromrReaderioWriteTowWriter	WriteBytec	WriteRuneReadNextReadByteReadRunesize
UnreadRune
UnreadByte	ReadBytesdelimline	readSlice
ReadStringasubslicecharsseptfprefixsuffixmappingiprevRuneSizeReadAtchSeekoffsetwhencecountoldnewSpecialCaseunicodereplacementcutset	CaseRangeToUpperspecialToTitleToLowerLoHiDeltadbytesCompareContainsContainsAnyContainsRuneCountEqual	EqualFoldErrTooLargeFields
FieldsFunc	HasPrefix	HasSuffixIndexIndexAny	IndexByte	IndexFunc	IndexRuneJoin	LastIndexLastIndexAnyLastIndexByteLastIndexFuncMapMinRead	NewBufferNewBufferString	NewReaderRepeatReplace
ReplaceAllRunesSplit
SplitAfterSplitAfterNSplitNTitleToLowerSpecialToTitleSpecialToUpperSpecialToValidUTF8TrimTrimFuncTrimLeftTrimLeftFunc
TrimPrefix	TrimRightTrimRightFunc	TrimSpace
TrimSuffix           	"   ! 7777777777777 ��7 ��77777777777T %  :   < ( >    / @     5 B    9 D    = F F   H H   N J F       _ L F    d N F   i P oR F q  u T � F q  � V �X F q  � ] �_ F q  � d �    � f � F q  � h oj F q  � l F  n  � p      � r  � � q � t    � v    � x � �z q  � | � �~ q  � � � � q F  �� �   F  � ��    F  � �    F  � �    F  �� ��   F  �� �    F  �� ��    V �F  ��  �        �F  �� ��  � F  �� ��    F  �� ��    F  �� ��   F  �� �   F  �� �     �    F  �� ��   F  �� �   �F  �� ��  � F  �� ��   F  �� �   F  �� �     �    F  �� ��     �   F  �� ��  � C � 7F  �  � 7F  �  �  � �F  �  �   ��   �   �  �����������T � 5 ��    � ��    � �� � F q  � �� �  F q  � ��      � ��    � ��  � � q � ��    � �� � �      � �� �_ F q  H �� �  F  �
 �  �
 F  ��
 ��
 ��
 F  �
 F  ��
 ��
 ��
  �
 F  ��
  �
 �F  �� ��  � �F  �� ��  � �F  �� �� F  � �F  �� �� F  � F  ��  � F  ��  �  ��F  �� ��  � F  ��  � F  �� ��  � F  ��  � F  �� ��  � F  �� ��  � F  �� �  �   �    F  �� ��  � F  �� �  �   �    F  �� ��  � F  �� ��  � F  �� �  �   �    F  �� ��  � F  ��  � F  �� ��  � T  �  � o� F q T ��  i o� F q T � ���T � � �� �    � �� �    � �� �    ��� �	   �	   ��  T � T �  � 7!b����������������������������������������������������������
��
��
��
��
������������������������������������������� ������ ������{ errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytealg*	bytealg = $packages["internal/bytealg"];
��    		$r = bytealg.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Buffer�G	Buffer = $pkg.Buffer = $newType(0, $kindStruct, "bytes.Buffer", true, "bytes", true, function(buf_, off_, lastRead_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.buf = sliceType.nil;
			this.off = 0;
			this.lastRead = 0;
			return;
		}
		this.buf = buf_;
		this.off = off_;
		this.lastRead = lastRead_;
	});
��	ptrType.methods = [{prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "empty", name: "empty", pkg: "bytes", typ: $funcType([], [$Bool], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Cap", name: "Cap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Truncate", name: "Truncate", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "tryGrowByReslice", name: "tryGrowByReslice", pkg: "bytes", typ: $funcType([$Int], [$Int, $Bool], false)}, {prop: "grow", name: "grow", pkg: "bytes", typ: $funcType([$Int], [$Int], false)}, {prop: "Grow", name: "Grow", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "ReadFrom", name: "ReadFrom", pkg: "", typ: $funcType([io.Reader], [$Int64, $error], false)}, {prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([io.Writer], [$Int64, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "WriteRune", name: "WriteRune", pkg: "", typ: $funcType([$Int32], [$Int, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Next", name: "Next", pkg: "", typ: $funcType([$Int], [sliceType], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}, {prop: "ReadBytes", name: "ReadBytes", pkg: "", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "readSlice", name: "readSlice", pkg: "bytes", typ: $funcType([$Uint8], [sliceType, $error], false)}, {prop: "ReadString", name: "ReadString", pkg: "", typ: $funcType([$Uint8], [$String, $error], false)}];
� 	Buffer.init("bytes", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "off", name: "off", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastRead", name: "lastRead", embedded: false, exported: false, typ: readOp, tag: ""}]);
Bufferbytes.Bufferbytes.ptrTypebytes.readOpbytes.sliceType	io.Reader	io.Writer  readOp\	readOp = $pkg.readOp = $newType(1, $kindInt8, "bytes.readOp", true, "bytes", false, null);
readOpbytes.readOp  asciiSetd	asciiSet = $pkg.asciiSet = $newType(32, $kindArray, "bytes.asciiSet", true, "bytes", false, null);
u	ptrType$1.methods = [{prop: "contains", name: "contains", pkg: "bytes", typ: $funcType([$Uint8], [$Bool], false)}];
	asciiSet.init($Uint32, 8);
asciiSetbytes.asciiSetbytes.ptrType$1  Reader�F	Reader = $pkg.Reader = $newType(0, $kindStruct, "bytes.Reader", true, "bytes", true, function(s_, i_, prevRune_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = sliceType.nil;
			this.i = new $Int64(0, 0);
			this.prevRune = 0;
			return;
		}
		this.s = s_;
		this.i = i_;
		this.prevRune = prevRune_;
	});
��	ptrType$2.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "ReadAt", name: "ReadAt", pkg: "", typ: $funcType([sliceType, $Int64], [$Int, $error], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}, {prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([io.Writer], [$Int64, $error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([sliceType], [], false)}];
�	Reader.init("bytes", [{prop: "s", name: "s", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "prevRune", name: "prevRune", embedded: false, exported: false, typ: $Int, tag: ""}]);
Readerbytes.Readerbytes.ptrType$2bytes.sliceType	io.Writer  span��	span = $newType(0, $kindStruct, "bytes.span", true, "bytes", false, function(start_, end_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.start = 0;
			this.end = 0;
			return;
		}
		this.start = start_;
		this.end = end_;
	});
��	span.init("bytes", [{prop: "start", name: "start", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "end", name: "end", embedded: false, exported: false, typ: $Int, tag: ""}]);
span  ptrType	ptrType = $ptrType(Buffer);
ptrTypebytes.Buffer  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1&	sliceType$1 = $sliceType(sliceType);
sliceType$1bytes.sliceType  	arrayType$	arrayType = $arrayType($Uint8, 4);
	arrayType  	ptrType$1!	ptrType$1 = $ptrType(asciiSet);
	ptrType$1bytes.asciiSet  sliceType$2!	sliceType$2 = $sliceType(span);
sliceType$2  arrayType$1'	arrayType$1 = $arrayType($Uint32, 8);
arrayType$1  sliceType$3#	sliceType$3 = $sliceType($Int32);
sliceType$3  	ptrType$2	ptrType$2 = $ptrType(Reader);
	ptrType$2bytes.Reader  ErrTooLarge  errNegativeReaderrNegativeRead  errUnreadByteerrUnreadByte  
asciiSpace
asciiSpace  A  			$pkg.ErrTooLarge = errors.New("bytes.Buffer: too large");
bytes.ErrTooLarge
errors.New  _  A		errNegativeRead = errors.New("bytes.Buffer: reader returned negative count from Read");
bytes.errNegativeRead
errors.New  m  01		errUnreadByte = errors.New("bytes.Buffer: UnreadByte: previous operation was not a successful read");
bytes.errUnreadByte
errors.New  �2  `�		asciiSpace = $toNativeArray($kindUint8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

asciiSpacebytes.asciiSpace bytes.IndexBytebytes	IndexByte 	IndexByte��	IndexByte = function(s, c) {
		var _i, _ref, b, c, i, s;
   T		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (b === c) {
   {				return i;
    			}
    			_i++;
		}
   �		return -1;
    	};
	$pkg.IndexByte = IndexByte;
	IndexBytebytes.IndexByte bytes.EqualbytesEqual Equal�N	Equal = function(a, b) {
		var _i, _ref, a, b, c, i;
    		if (!((a.$length === b.$length))) {
   �			return false;
    		}
   �		_ref = a;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!((c === ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i])))) {
  				return false;
    			}
    			_i++;
		}
  !		return true;
    	};
	$pkg.Equal = Equal;
Equalbytes.Equal bytes.ComparebytesCompare Compare��	Compare = function(a, b) {
		var _i, _ref, a, b, ca, cb, i;
  Q		_ref = a;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			ca = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (i >= b.$length) {
  ~				return 1;
    			}
  �			cb = ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]);
    			if (ca < cb) {
  �				return -1;
    			}
    			if (ca > cb) {
  �				return 1;
    			}
    			_i++;
		}
    		if (a.$length < b.$length) {
  �			return -1;
    		}
   		return 0;
    	};
	$pkg.Compare = Compare;
Comparebytes.Compare (*bytes.Buffer).Bytes ��	Buffer.ptr.prototype.Bytes = function() {
		var b;
		b = this;
  
t		return $subslice(b.buf, b.off);
    	};
	Buffer.prototype.Bytes = function() { return this.$val.Bytes(); };
Bufferbytes.Buffer (*bytes.Buffer).String �
	Buffer.ptr.prototype.String = function() {
		var b;
		b = this;
    		if (b === ptrType.nil) {
  �			return "<nil>";
    		}
  �		return ($bytesToString($subslice(b.buf, b.off)));
    	};
	Buffer.prototype.String = function() { return this.$val.String(); };
Bufferbytes.Bufferbytes.ptrType (*bytes.Buffer).empty ��	Buffer.ptr.prototype.empty = function() {
		var b;
		b = this;
  M		return b.buf.$length <= b.off;
    	};
	Buffer.prototype.empty = function() { return this.$val.empty(); };
Bufferempty~bytes.Buffer (*bytes.Buffer).Len ��	Buffer.ptr.prototype.Len = function() {
		var b;
		b = this;
  �		return b.buf.$length - b.off >> 0;
    	};
	Buffer.prototype.Len = function() { return this.$val.Len(); };
Bufferbytes.Buffer (*bytes.Buffer).Cap ��	Buffer.ptr.prototype.Cap = function() {
		var b;
		b = this;
  �		return b.buf.$capacity;
    	};
	Buffer.prototype.Cap = function() { return this.$val.Cap(); };
Bufferbytes.Buffer (*bytes.Buffer).Truncate ��	Buffer.ptr.prototype.Truncate = function(n) {
		var b, n;
		b = this;
    		if (n === 0) {
  �			b.Reset();
  �			return;
    		}
  �		b.lastRead = 0;
    		if (n < 0 || n > b.Len()) {
  �			$panic(new $String("bytes.Buffer: truncation out of range"));
    		}
  /		b.buf = $subslice(b.buf, 0, (b.off + n >> 0));
    	};
	Buffer.prototype.Truncate = function(n) { return this.$val.Truncate(n); };
Bufferbytes.Buffer (*bytes.Buffer).Reset ��	Buffer.ptr.prototype.Reset = function() {
		var b;
		b = this;
  �		b.buf = $subslice(b.buf, 0, 0);
  			b.off = 0;
  		b.lastRead = 0;
    	};
	Buffer.prototype.Reset = function() { return this.$val.Reset(); };
Bufferbytes.Buffer  (*bytes.Buffer).tryGrowByReslice �o	Buffer.ptr.prototype.tryGrowByReslice = function(n) {
		var b, l, n;
		b = this;
  7		l = b.buf.$length;
    		if (n <= (b.buf.$capacity - l >> 0)) {
  ^			b.buf = $subslice(b.buf, 0, (l + n >> 0));
  t			return [l, true];
    		}
  �		return [0, false];
    	};
	Buffer.prototype.tryGrowByReslice = function(n) { return this.$val.tryGrowByReslice(n); };
BuffertryGrowByReslice~bytes.Buffer (*bytes.Buffer).grow �E	Buffer.ptr.prototype.grow = function(n) {
		var _q, _r, _tuple, b, buf, c, i, m, n, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _tuple = $f._tuple; b = $f.b; buf = $f.buf; c = $f.c; i = $f.i; m = $f.m; n = $f.n; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  o		m = b.Len();
    		if ((m === 0) && !((b.off === 0))) {
  �			b.Reset();
    		}
  		_tuple = b.tryGrowByReslice(n);
		i = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  (			$s = -1; return i;
    		}
    		if (b.buf === sliceType.nil && n <= 64) {
  a			b.buf = $makeSlice(sliceType, n, 64);
  �			$s = -1; return 0;
    		}
  �		c = b.buf.$capacity;
  �		/* */ if (n <= ((_q = c / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) - m >> 0)) { $s = 1; continue; }
		/* */ if (c > ((2147483647 - c >> 0) - n >> 0)) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (n <= ((_q = c / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) - m >> 0)) { */ case 1:
  �			$copySlice(b.buf, $subslice(b.buf, b.off));
    			$s = 4; continue;
    		/* } else if (c > ((2147483647 - c >> 0) - n >> 0)) { */ case 2:
  �			$panic($pkg.ErrTooLarge);
    			$s = 4; continue;
		/* } else { */ case 3:
  			_r = makeSlice(($imul(2, c)) + n >> 0); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			buf = _r;
  ,			$copySlice(buf, $subslice(b.buf, b.off));
  G			b.buf = buf;
    		/* } */ case 4:
  y		b.off = 0;
  �		b.buf = $subslice(b.buf, 0, (m + n >> 0));
  �		$s = -1; return m;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.grow }; } $f._q = _q; $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.buf = buf; $f.c = c; $f.i = i; $f.m = m; $f.n = n; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.grow = function(n) { return this.$val.grow(n); };
Buffergrow~bytes.Bufferbytes.ErrTooLargebytes.makeSlicebytes.sliceTypebytes.tryGrowByReslice~ (*bytes.Buffer).Grow �D	Buffer.ptr.prototype.Grow = function(n) {
		var _r, b, m, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; m = $f.m; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (n < 0) {
  �			$panic(new $String("bytes.Buffer.Grow: negative count"));
    		}
  		_r = b.grow(n); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		m = _r;
  -		b.buf = $subslice(b.buf, 0, m);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.Grow }; } $f._r = _r; $f.b = b; $f.m = m; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.Grow = function(n) { return this.$val.Grow(n); };
Bufferbytes.Bufferbytes.grow~ (*bytes.Buffer).Write �	Buffer.ptr.prototype.Write = function(p) {
		var _r, _tmp, _tmp$1, _tuple, b, err, m, n, ok, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; b = $f.b; err = $f.err; m = $f.m; n = $f.n; ok = $f.ok; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		b = this;
  M		b.lastRead = 0;
  e		_tuple = b.tryGrowByReslice(p.$length);
		m = _tuple[0];
		ok = _tuple[1];
  �		/* */ if (!ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok) { */ case 1:
  �			_r = b.grow(p.$length); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			m = _r;
    		/* } */ case 2:
    		_tmp = $copySlice($subslice(b.buf, m), p);
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.Write }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.m = m; $f.n = n; $f.ok = ok; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.Write = function(p) { return this.$val.Write(p); };
Bufferbytes.Bufferbytes.grow~bytes.tryGrowByReslice~ (*bytes.Buffer).WriteString �,	Buffer.ptr.prototype.WriteString = function(s) {
		var _r, _tmp, _tmp$1, _tuple, b, err, m, n, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; b = $f.b; err = $f.err; m = $f.m; n = $f.n; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		b = this;
  �		b.lastRead = 0;
  		_tuple = b.tryGrowByReslice(s.length);
		m = _tuple[0];
		ok = _tuple[1];
  (		/* */ if (!ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok) { */ case 1:
  3			_r = b.grow(s.length); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			m = _r;
    		/* } */ case 2:
    		_tmp = $copyString($subslice(b.buf, m), s);
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.WriteString }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.m = m; $f.n = n; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
Bufferbytes.Bufferbytes.grow~bytes.tryGrowByReslice~ (*bytes.Buffer).ReadFrom �	Buffer.ptr.prototype.ReadFrom = function(r) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, e, err, i, m, n, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; e = $f.e; err = $f.err; i = $f.i; m = $f.m; n = $f.n; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
  �		b.lastRead = 0;
  �		/* while (true) { */ case 1:
  �			_r = b.grow(512); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			i = _r;
  			b.buf = $subslice(b.buf, 0, i);
  			_r$1 = r.Read($subslice(b.buf, i, b.buf.$capacity)); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple = _r$1;
			m = _tuple[0];
			e = _tuple[1];
    			if (m < 0) {
  S				$panic(errNegativeRead);
    			}
  q			b.buf = $subslice(b.buf, 0, (i + m >> 0));
  �			n = (x = (new $Int64(0, m)), new $Int64(n.$high + x.$high, n.$low + x.$low));
    			if ($interfaceIsEqual(e, io.EOF)) {
    				_tmp = n;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    			if (!($interfaceIsEqual(e, $ifaceNil))) {
    				_tmp$2 = n;
				_tmp$3 = e;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
    		$s = 1; continue;
		case 2:
    		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.ReadFrom }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.err = err; $f.i = i; $f.m = m; $f.n = n; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.ReadFrom = function(r) { return this.$val.ReadFrom(r); };
Bufferbytes.Bufferbytes.errNegativeReadbytes.grow~io.EOF bytes.makeSlicebytes	makeSlice 	makeSlice��	makeSlice = function(n) {
		var $24r, n, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; n = $f.n; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  �		$deferred.push([(function() {
    			if (!($interfaceIsEqual($recover(), $ifaceNil))) {
  �				$panic($pkg.ErrTooLarge);
    			}
    		}), []]);
   		$24r = $makeSlice(sliceType, n);
		$s = 1; case 1: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return sliceType.nil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: makeSlice }; } $f.$24r = $24r; $f.n = n; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	makeSlicebytes.ErrTooLargebytes.makeSlicebytes.sliceType (*bytes.Buffer).WriteTo �	Buffer.ptr.prototype.WriteTo = function(w) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, b, e, err, m, n, nBytes, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; b = $f.b; e = $f.e; err = $f.err; m = $f.m; n = $f.n; nBytes = $f.nBytes; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		b = this;
   i		b.lastRead = 0;
   �		nBytes = b.Len();
   �		/* */ if (nBytes > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (nBytes > 0) { */ case 1:
   �			_r = w.Write($subslice(b.buf, b.off)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			m = _tuple[0];
			e = _tuple[1];
    			if (m > nBytes) {
   �				$panic(new $String("bytes.Buffer.WriteTo: invalid Write count"));
    			}
  !			b.off = b.off + (m) >> 0;
  ! 			n = (new $Int64(0, m));
    			if (!($interfaceIsEqual(e, $ifaceNil))) {
    				_tmp = n;
				_tmp$1 = e;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    			if (!((m === nBytes))) {
    				_tmp$2 = n;
				_tmp$3 = io.ErrShortWrite;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
    		/* } */ case 2:
  "		b.Reset();
    		_tmp$4 = n;
		_tmp$5 = $ifaceNil;
		n = _tmp$4;
		err = _tmp$5;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.WriteTo }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.err = err; $f.m = m; $f.n = n; $f.nBytes = nBytes; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.WriteTo = function(w) { return this.$val.WriteTo(w); };
Bufferbytes.Bufferio.ErrShortWrite (*bytes.Buffer).WriteByte ��	Buffer.ptr.prototype.WriteByte = function(c) {
		var _r, _tuple, b, c, m, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; c = $f.c; m = $f.m; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  #=		b.lastRead = 0;
  #U		_tuple = b.tryGrowByReslice(1);
		m = _tuple[0];
		ok = _tuple[1];
  #u		/* */ if (!ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok) { */ case 1:
  #�			_r = b.grow(1); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			m = _r;
    		/* } */ case 2:
  #�		(x = b.buf, ((m < 0 || m >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + m] = c));
  #�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.WriteByte }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.c = c; $f.m = m; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
Bufferbytes.Bufferbytes.grow~bytes.tryGrowByReslice~ (*bytes.Buffer).WriteRune ��	Buffer.ptr.prototype.WriteRune = function(r) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, err, m, n, ok, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; err = $f.err; m = $f.m; n = $f.n; ok = $f.ok; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		b = this;
  %B		/* */ if (((r >>> 0)) < 128) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (((r >>> 0)) < 128) { */ case 1:
  %c			_r = b.WriteByte(((r << 24 >>> 24))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    			_tmp = 1;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		/* } */ case 2:
  %�		b.lastRead = 0;
  %�		_tuple = b.tryGrowByReslice(4);
		m = _tuple[0];
		ok = _tuple[1];
  %�		/* */ if (!ok) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (!ok) { */ case 4:
  %�			_r$1 = b.grow(4); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			m = _r$1;
    		/* } */ case 5:
  %�		n = utf8.EncodeRune($subslice(b.buf, m, (m + 4 >> 0)), r);
  &%		b.buf = $subslice(b.buf, 0, (m + n >> 0));
    		_tmp$2 = n;
		_tmp$3 = $ifaceNil;
		n = _tmp$2;
		err = _tmp$3;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Buffer.ptr.prototype.WriteRune }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.m = m; $f.n = n; $f.ok = ok; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Buffer.prototype.WriteRune = function(r) { return this.$val.WriteRune(r); };
Bufferbytes.Bufferbytes.grow~bytes.tryGrowByReslice~unicode/utf8.EncodeRune (*bytes.Buffer).Read ��	Buffer.ptr.prototype.Read = function(p) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, err, n, p;
		n = 0;
		err = $ifaceNil;
		b = this;
  'o		b.lastRead = 0;
    		if (b.empty()) {
  '�			b.Reset();
    			if (p.$length === 0) {
    				_tmp = 0;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				return [n, err];
    			}
    			_tmp$2 = 0;
			_tmp$3 = io.EOF;
			n = _tmp$2;
			err = _tmp$3;
			return [n, err];
    		}
  (		n = $copySlice(p, $subslice(b.buf, b.off));
  (+		b.off = b.off + (n) >> 0;
    		if (n > 0) {
  (D			b.lastRead = -1;
    		}
    		_tmp$4 = n;
		_tmp$5 = $ifaceNil;
		n = _tmp$4;
		err = _tmp$5;
		return [n, err];
    	};
	Buffer.prototype.Read = function(p) { return this.$val.Read(p); };
Bufferbytes.Bufferbytes.empty~io.EOF (*bytes.Buffer).Next ��	Buffer.ptr.prototype.Next = function(n) {
		var b, data, m, n;
		b = this;
  )�		b.lastRead = 0;
  )�		m = b.Len();
    		if (n > m) {
  )�			n = m;
    		}
  )�		data = $subslice(b.buf, b.off, (b.off + n >> 0));
  *		b.off = b.off + (n) >> 0;
    		if (n > 0) {
  *.			b.lastRead = -1;
    		}
  *F		return data;
    	};
	Buffer.prototype.Next = function(n) { return this.$val.Next(n); };
Bufferbytes.Buffer (*bytes.Buffer).ReadByte ��	Buffer.ptr.prototype.ReadByte = function() {
		var b, c, x, x$1;
		b = this;
    		if (b.empty()) {
  +3			b.Reset();
  +?			return [0, io.EOF];
    		}
  +T		c = (x = b.buf, x$1 = b.off, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  +g		b.off = b.off + (1) >> 0;
  +p		b.lastRead = -1;
  +�		return [c, $ifaceNil];
    	};
	Buffer.prototype.ReadByte = function() { return this.$val.ReadByte(); };
Bufferbytes.Bufferbytes.empty~io.EOF (*bytes.Buffer).ReadRune ��	Buffer.ptr.prototype.ReadRune = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, b, c, err, n, r, size, x, x$1;
		r = 0;
		size = 0;
		err = $ifaceNil;
		b = this;
    		if (b.empty()) {
  -
			b.Reset();
    			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = io.EOF;
			r = _tmp;
			size = _tmp$1;
			err = _tmp$2;
			return [r, size, err];
    		}
  -.		c = (x = b.buf, x$1 = b.off, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		if (c < 128) {
  -Z			b.off = b.off + (1) >> 0;
  -d			b.lastRead = 1;
    			_tmp$3 = ((c >> 0));
			_tmp$4 = 1;
			_tmp$5 = $ifaceNil;
			r = _tmp$3;
			size = _tmp$4;
			err = _tmp$5;
			return [r, size, err];
    		}
  -�		_tuple = utf8.DecodeRune($subslice(b.buf, b.off));
		r = _tuple[0];
		n = _tuple[1];
  -�		b.off = b.off + (n) >> 0;
  -�		b.lastRead = ((n << 24 >> 24));
    		_tmp$6 = r;
		_tmp$7 = n;
		_tmp$8 = $ifaceNil;
		r = _tmp$6;
		size = _tmp$7;
		err = _tmp$8;
		return [r, size, err];
    	};
	Buffer.prototype.ReadRune = function() { return this.$val.ReadRune(); };
Bufferbytes.Bufferbytes.empty~io.EOFunicode/utf8.DecodeRune (*bytes.Buffer).UnreadRune ��	Buffer.ptr.prototype.UnreadRune = function() {
		var b;
		b = this;
    		if (b.lastRead <= 0) {
  /f			return errors.New("bytes.Buffer: UnreadRune: previous operation was not a successful ReadRune");
    		}
    		if (b.off >= ((b.lastRead >> 0))) {
  /�			b.off = b.off - (((b.lastRead >> 0))) >> 0;
    		}
  0		b.lastRead = 0;
  0		return $ifaceNil;
    	};
	Buffer.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
Bufferbytes.Buffer
errors.New (*bytes.Buffer).UnreadByte �U	Buffer.ptr.prototype.UnreadByte = function() {
		var b;
		b = this;
    		if (b.lastRead === 0) {
  1�			return errUnreadByte;
    		}
  2		b.lastRead = 0;
    		if (b.off > 0) {
  2-			b.off = b.off - (1) >> 0;
    		}
  29		return $ifaceNil;
    	};
	Buffer.prototype.UnreadByte = function() { return this.$val.UnreadByte(); };
Bufferbytes.Bufferbytes.errUnreadByte (*bytes.Buffer).ReadBytes ��	Buffer.ptr.prototype.ReadBytes = function(delim) {
		var _tmp, _tmp$1, _tuple, b, delim, err, line, slice;
		line = sliceType.nil;
		err = $ifaceNil;
		b = this;
  4		_tuple = b.readSlice(delim);
		slice = _tuple[0];
		err = _tuple[1];
  4�		line = $appendSlice(line, slice);
    		_tmp = line;
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
    	};
	Buffer.prototype.ReadBytes = function(delim) { return this.$val.ReadBytes(delim); };
Bufferbytes.Bufferbytes.readSlice~bytes.sliceType (*bytes.Buffer).readSlice �Z	Buffer.ptr.prototype.readSlice = function(delim) {
		var _tmp, _tmp$1, b, delim, end, err, i, line;
		line = sliceType.nil;
		err = $ifaceNil;
		b = this;
  5N		i = IndexByte($subslice(b.buf, b.off), delim);
  5t		end = (b.off + i >> 0) + 1 >> 0;
    		if (i < 0) {
  5�			end = b.buf.$length;
  5�			err = io.EOF;
    		}
  5�		line = $subslice(b.buf, b.off, end);
  5�		b.off = end;
  5�		b.lastRead = -1;
    		_tmp = line;
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
    	};
	Buffer.prototype.readSlice = function(delim) { return this.$val.readSlice(delim); };
Buffer
readSlice~bytes.Bufferbytes.IndexBytebytes.sliceTypeio.EOF (*bytes.Buffer).ReadString ��	Buffer.ptr.prototype.ReadString = function(delim) {
		var _tmp, _tmp$1, _tuple, b, delim, err, line, slice;
		line = "";
		err = $ifaceNil;
		b = this;
  7�		_tuple = b.readSlice(delim);
		slice = _tuple[0];
		err = _tuple[1];
    		_tmp = ($bytesToString(slice));
		_tmp$1 = err;
		line = _tmp;
		err = _tmp$1;
		return [line, err];
    	};
	Buffer.prototype.ReadString = function(delim) { return this.$val.ReadString(delim); };
Bufferbytes.Bufferbytes.readSlice~ bytes.NewBufferbytes	NewBuffer 	NewBufferw	NewBuffer = function(buf) {
		var buf;
  ::		return new Buffer.ptr(buf, 0, 0);
    	};
	$pkg.NewBuffer = NewBuffer;
	NewBufferbytes.Bufferbytes.NewBufferbytes.sliceType bytes.NewBufferStringbytesNewBufferString NewBufferString��	NewBufferString = function(s) {
		var s;
  ;�		return new Buffer.ptr((new sliceType($stringToBytes(s))), 0, 0);
    	};
	$pkg.NewBufferString = NewBufferString;
NewBufferStringbytes.Bufferbytes.NewBufferStringbytes.sliceType bytes.explodebytesexplode explode�	explode = function(s, n) {
		var _tuple, a, n, na, s, size;
    		if (n <= 0) {
  @:			n = s.$length;
    		}
  @I		a = $makeSlice(sliceType$1, n);
  @e		size = 0;
  @o		na = 0;
  @x		while (true) {
			if (!(s.$length > 0)) { break; }
    			if ((na + 1 >> 0) >= n) {
  @�				((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = s);
  @�				na = na + (1) >> 0;
  @�				break;
    			}
  @�			_tuple = utf8.DecodeRune(s);
			size = _tuple[1];
  @�			((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = $subslice(s, 0, size, size));
  @�			s = $subslice(s, size);
  A			na = na + (1) >> 0;
    		}
  A		return $subslice(a, 0, na);
    	};
explodebytes.explodebytes.sliceTypebytes.sliceType$1unicode/utf8.DecodeRune bytes.CountbytesCount Count�	Count = function(s, sep) {
		var i, n, s, sep;
    		if (sep.$length === 0) {
  B				return utf8.RuneCount(s) + 1 >> 0;
    		}
    		if (sep.$length === 1) {
  B?			return bytealg.Count(s, (0 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 0]));
    		}
  Bc		n = 0;
  Bk		while (true) {
  Bs			i = Index(s, sep);
    			if (i === -1) {
  B�				return n;
    			}
  B�			n = n + (1) >> 0;
  B�			s = $subslice(s, (i + sep.$length >> 0));
    		}
    	};
	$pkg.Count = Count;
Countbytes.Countbytes.Indexinternal/bytealg.Countunicode/utf8.RuneCount bytes.ContainsbytesContains Contains��	Contains = function(b, subslice) {
		var b, subslice;
  C"		return !((Index(b, subslice) === -1));
    	};
	$pkg.Contains = Contains;
Containsbytes.Containsbytes.Index bytes.ContainsAnybytesContainsAny ContainsAny��	ContainsAny = function(b, chars) {
		var b, chars;
  C�		return IndexAny(b, chars) >= 0;
    	};
	$pkg.ContainsAny = ContainsAny;
ContainsAnybytes.ContainsAnybytes.IndexAny bytes.ContainsRunebytesContainsRune ContainsRune}	ContainsRune = function(b, r) {
		var b, r;
  Dx		return IndexRune(b, r) >= 0;
    	};
	$pkg.ContainsRune = ContainsRune;
ContainsRunebytes.ContainsRunebytes.IndexRune bytes.indexBytePortablebytesindexBytePortable indexBytePortable��	indexBytePortable = function(s, c) {
		var _i, _ref, b, c, i, s;
  Eq		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (b === c) {
  E�				return i;
    			}
    			_i++;
		}
  E�		return -1;
    	};
indexBytePortablebytes.indexBytePortable bytes.LastIndexbytes	LastIndex 	LastIndex��	LastIndex = function(s, sep) {
		var _tuple, h, hashss, i, i$1, last, n, pow, s, sep, x;
  F>		n = sep.$length;
    		if ((n === 0)) {
  Ff			return s.$length;
    		} else if ((n === 1)) {
  F�			return LastIndexByte(s, (0 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 0]));
    		} else if ((n === s.$length)) {
    			if (Equal(s, sep)) {
  F�				return 0;
    			}
  F�			return -1;
    		} else if (n > s.$length) {
  F�			return -1;
    		}
  G;		_tuple = bytealg.HashStrRevBytes(sep);
		hashss = _tuple[0];
		pow = _tuple[1];
  Gh		last = s.$length - n >> 0;
  G�		h = 0;
  G�		i = s.$length - 1 >> 0;
		while (true) {
			if (!(i >= last)) { break; }
  G�			h = ($imul(h, 16777619) >>> 0) + ((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) >>> 0)) >>> 0;
  G�			i = i - (1) >> 0;
    		}
    		if ((h === hashss) && Equal($subslice(s, last), sep)) {
  H			return last;
    		}
  H		i$1 = last - 1 >> 0;
		while (true) {
			if (!(i$1 >= 0)) { break; }
  H9			h = $imul(h, (16777619)) >>> 0;
  HP			h = h + (((((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]) >>> 0))) >>> 0;
  Hd			h = h - (($imul(pow, (((x = i$1 + n >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) >>> 0))) >>> 0)) >>> 0;
    			if ((h === hashss) && Equal($subslice(s, i$1, (i$1 + n >> 0)), sep)) {
  H�				return i$1;
    			}
  H1			i$1 = i$1 - (1) >> 0;
    		}
  H�		return -1;
    	};
	$pkg.LastIndex = LastIndex;
	LastIndexbytes.Equalbytes.LastIndexbytes.LastIndexByte internal/bytealg.HashStrRevBytes bytes.LastIndexBytebytesLastIndexByte LastIndexByte��	LastIndexByte = function(s, c) {
		var c, i, s;
  I]		i = s.$length - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
    			if (((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) === c) {
  I�				return i;
    			}
  Iv			i = i - (1) >> 0;
    		}
  I�		return -1;
    	};
	$pkg.LastIndexByte = LastIndexByte;
LastIndexBytebytes.LastIndexByte bytes.IndexRunebytes	IndexRune 	IndexRune��	IndexRune = function(s, r) {
		var _tuple, b, i, n, n$1, r, r1, s;
    		if (0 <= r && r < 128) {
  K%			return IndexByte(s, ((r << 24 >>> 24)));
    		} else if ((r === 65533)) {
  Kc			i = 0;
			while (true) {
				if (!(i < s.$length)) { break; }
  K|				_tuple = utf8.DecodeRune($subslice(s, i));
				r1 = _tuple[0];
				n = _tuple[1];
    				if (r1 === 65533) {
  K�					return i;
    				}
  K�				i = i + (n) >> 0;
    			}
  K�			return -1;
    		} else if (!utf8.ValidRune(r)) {
  L			return -1;
    		} else {
  L			b = arrayType.zero();
  L1			n$1 = utf8.EncodeRune(new sliceType(b), r);
  LQ			return Index(s, $subslice(new sliceType(b), 0, n$1));
    		}
    	};
	$pkg.IndexRune = IndexRune;
	IndexRunebytes.Indexbytes.IndexBytebytes.IndexRunebytes.arrayTypebytes.sliceTypeunicode/utf8.DecodeRuneunicode/utf8.EncodeRuneunicode/utf8.ValidRune bytes.IndexAnybytesIndexAny IndexAny��	IndexAny = function(s, chars) {
		var _i, _i$1, _i$2, _ref, _ref$1, _ref$2, _rune, _rune$1, _tuple, _tuple$1, as, c, ch, chars, i, i$1, isASCII, r, r$1, r$2, s, width;
    		if (chars === "") {
  M�			return -1;
    		}
    		if (s.$length === 1) {
  M�			r = (((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >> 0));
    			if (r >= 128) {
  N8				_ref = chars;
				_i = 0;
				while (true) {
					if (!(_i < _ref.length)) { break; }
					_rune = $decodeRune(_ref, _i);
					r = _rune[0];
    					if (r === 65533) {
  Ns						return 0;
    					}
    					_i += _rune[1];
				}
  N�				return -1;
    			}
    			if (bytealg.IndexByteString(chars, (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0])) >= 0) {
  N�				return 0;
    			}
  N�			return -1;
    		}
    		if (chars.length === 1) {
  O 			r$1 = ((chars.charCodeAt(0) >> 0));
    			if (r$1 >= 128) {
  O1				r$1 = 65533;
    			}
  OJ			return IndexRune(s, r$1);
    		}
    		if (s.$length > 8) {
  Oz			_tuple = makeASCIISet(chars);
			as = $clone(_tuple[0], asciiSet);
			isASCII = _tuple[1];
    			if (isASCII) {
  O�				_ref$1 = s;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					i = _i$1;
					c = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    					if (new ptrType$1(as).contains(c)) {
  O�						return i;
    					}
    					_i$1++;
				}
  O�				return -1;
    			}
    		}
  P		width = 0;
  P		i$1 = 0;
		while (true) {
			if (!(i$1 < s.$length)) { break; }
  P=			r$2 = ((((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]) >> 0));
    			if (r$2 < 128) {
    				if (bytealg.IndexByteString(chars, ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1])) >= 0) {
  P�					return i$1;
    				}
  P�				width = 1;
  P.				i$1 = i$1 + (width) >> 0;
    				continue;
    			}
  P�			_tuple$1 = utf8.DecodeRune($subslice(s, i$1));
			r$2 = _tuple$1[0];
			width = _tuple$1[1];
    			if (!((r$2 === 65533))) {
    				if (chars.length === width) {
    					if (chars === ($encodeRune(r$2))) {
  Q[						return i$1;
    					}
  P.					i$1 = i$1 + (width) >> 0;
    					continue;
    				}
    				if (bytealg.MaxLen >= width) {
    					if (bytealg.IndexString(chars, ($encodeRune(r$2))) >= 0) {
  R						return i$1;
    					}
  P.					i$1 = i$1 + (width) >> 0;
    					continue;
    				}
    			}
  R8			_ref$2 = chars;
			_i$2 = 0;
			while (true) {
				if (!(_i$2 < _ref$2.length)) { break; }
				_rune$1 = $decodeRune(_ref$2, _i$2);
				ch = _rune$1[0];
    				if (r$2 === ch) {
  Rg					return i$1;
    				}
    				_i$2 += _rune$1[1];
			}
  P.			i$1 = i$1 + (width) >> 0;
    		}
  R}		return -1;
    	};
	$pkg.IndexAny = IndexAny;
IndexAny
bytes.IndexAnybytes.IndexRunebytes.asciiSetbytes.contains~bytes.makeASCIISetbytes.ptrType$1 internal/bytealg.IndexByteStringinternal/bytealg.IndexStringinternal/bytealg.MaxLenunicode/utf8.DecodeRune bytes.LastIndexAnybytesLastIndexAny LastIndexAny��	LastIndexAny = function(s, chars) {
		var _i, _i$1, _ref, _ref$1, _rune, _rune$1, _tuple, _tuple$1, _tuple$2, as, ch, chars, cr, i, i$1, i$2, isASCII, r, r$1, r$2, s, size, size$1, x, x$1;
    		if (chars === "") {
  S�			return -1;
    		}
    		if (s.$length > 8) {
  T			_tuple = makeASCIISet(chars);
			as = $clone(_tuple[0], asciiSet);
			isASCII = _tuple[1];
    			if (isASCII) {
  TH				i = s.$length - 1 >> 0;
				while (true) {
					if (!(i >= 0)) { break; }
    					if (new ptrType$1(as).contains(((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]))) {
  T�						return i;
    					}
  Ta					i = i - (1) >> 0;
    				}
  T�				return -1;
    			}
    		}
    		if (s.$length === 1) {
  T�			r = (((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >> 0));
    			if (r >= 128) {
  T�				_ref = chars;
				_i = 0;
				while (true) {
					if (!(_i < _ref.length)) { break; }
					_rune = $decodeRune(_ref, _i);
					r = _rune[0];
    					if (r === 65533) {
  U+						return 0;
    					}
    					_i += _rune[1];
				}
  UB				return -1;
    			}
    			if (bytealg.IndexByteString(chars, (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0])) >= 0) {
  U�				return 0;
    			}
  U�			return -1;
    		}
    		if (chars.length === 1) {
  U�			cr = ((chars.charCodeAt(0) >> 0));
    			if (cr >= 128) {
  U�				cr = 65533;
    			}
  V				i$1 = s.$length;
			while (true) {
				if (!(i$1 > 0)) { break; }
  V"				_tuple$1 = utf8.DecodeLastRune($subslice(s, 0, i$1));
				r$1 = _tuple$1[0];
				size = _tuple$1[1];
  VK				i$1 = i$1 - (size) >> 0;
    				if (r$1 === cr) {
  Vi					return i$1;
    				}
    			}
  V}			return -1;
    		}
  V�		i$2 = s.$length;
		while (true) {
			if (!(i$2 > 0)) { break; }
  V�			r$2 = (((x = i$2 - 1 >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) >> 0));
    			if (r$2 < 128) {
    				if (bytealg.IndexByteString(chars, (x$1 = i$2 - 1 >> 0, ((x$1 < 0 || x$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x$1]))) >= 0) {
  W
					return i$2 - 1 >> 0;
    				}
  W				i$2 = i$2 - (1) >> 0;
  W&				continue;
    			}
  W5			_tuple$2 = utf8.DecodeLastRune($subslice(s, 0, i$2));
			r$2 = _tuple$2[0];
			size$1 = _tuple$2[1];
  W]			i$2 = i$2 - (size$1) >> 0;
    			if (!((r$2 === 65533))) {
    				if (chars.length === size$1) {
    					if (chars === ($encodeRune(r$2))) {
  W�						return i$2;
    					}
  W�					continue;
    				}
    				if (bytealg.MaxLen >= size$1) {
    					if (bytealg.IndexString(chars, ($encodeRune(r$2))) >= 0) {
  X�						return i$2;
    					}
  X�					continue;
    				}
    			}
  X�			_ref$1 = chars;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.length)) { break; }
				_rune$1 = $decodeRune(_ref$1, _i$1);
				ch = _rune$1[0];
    				if (r$2 === ch) {
  X�					return i$2;
    				}
    				_i$1 += _rune$1[1];
			}
    		}
  X�		return -1;
    	};
	$pkg.LastIndexAny = LastIndexAny;
LastIndexAny	bytes.LastIndexAnybytes.asciiSetbytes.contains~bytes.makeASCIISetbytes.ptrType$1 internal/bytealg.IndexByteStringinternal/bytealg.IndexStringinternal/bytealg.MaxLenunicode/utf8.DecodeLastRune bytes.genSplitbytesgenSplit genSplit��	genSplit = function(s, sep, sepSave, n) {
		var a, i, m, n, s, sep, sepSave;
    		if (n === 0) {
  Y�			return sliceType$1.nil;
    		}
    		if (sep.$length === 0) {
  Y�			return explode(s, n);
    		}
    		if (n < 0) {
  Y�			n = Count(s, sep) + 1 >> 0;
    		}
  Z		a = $makeSlice(sliceType$1, n);
  Z1		n = n - (1) >> 0;
  Z6		i = 0;
  Z>		while (true) {
			if (!(i < n)) { break; }
  ZL			m = Index(s, sep);
    			if (m < 0) {
  Zo				break;
    			}
  Z{			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = $subslice(s, 0, (m + sepSave >> 0), (m + sepSave >> 0)));
  Z�			s = $subslice(s, (m + sep.$length >> 0));
  Z�			i = i + (1) >> 0;
    		}
  Z�		((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = s);
  Z�		return $subslice(a, 0, (i + 1 >> 0));
    	};
genSplitbytes.Countbytes.Indexbytes.explodebytes.genSplitbytes.sliceType$1 bytes.SplitNbytesSplitN SplitNw	SplitN = function(s, sep, n) {
		var n, s, sep;
  \�		return genSplit(s, sep, 0, n);
    	};
	$pkg.SplitN = SplitN;
SplitNbytes.SplitNbytes.genSplit bytes.SplitAfterNbytesSplitAfterN SplitAfterN��	SplitAfterN = function(s, sep, n) {
		var n, s, sep;
  ^h		return genSplit(s, sep, sep.$length, n);
    	};
	$pkg.SplitAfterN = SplitAfterN;
SplitAfterNbytes.SplitAfterNbytes.genSplit bytes.SplitbytesSplit Splito	Split = function(s, sep) {
		var s, sep;
  _�		return genSplit(s, sep, 0, -1);
    	};
	$pkg.Split = Split;
Splitbytes.Splitbytes.genSplit bytes.SplitAfterbytes
SplitAfter 
SplitAfter��	SplitAfter = function(s, sep) {
		var s, sep;
  `�		return genSplit(s, sep, sep.$length, -1);
    	};
	$pkg.SplitAfter = SplitAfter;

SplitAfterbytes.SplitAfterbytes.genSplit bytes.FieldsbytesFields Fields��	Fields = function(s) {
		var $24r, _r, a, fieldStart, i, i$1, isSpace, n, na, r, s, setBits, wasSpace, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; a = $f.a; fieldStart = $f.fieldStart; i = $f.i; i$1 = $f.i$1; isSpace = $f.isSpace; n = $f.n; na = $f.na; r = $f.r; s = $f.s; setBits = $f.setBits; wasSpace = $f.wasSpace; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  b�		n = 0;
  b�		wasSpace = 1;
  cN		setBits = 0;
  cg		i = 0;
		while (true) {
			if (!(i < s.$length)) { break; }
  c�			r = ((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]);
  c�			setBits = (setBits | (r)) >>> 0;
  c�			isSpace = ((((r < 0 || r >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[r]) >> 0));
  c�			n = n + ((wasSpace & (~isSpace >> 0))) >> 0;
  c�			wasSpace = isSpace;
  c{			i = i + (1) >> 0;
    		}
  c�		/* */ if (setBits >= 128) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (setBits >= 128) { */ case 1:
  dC			_r = FieldsFunc(s, unicode.IsSpace); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  d�		a = $makeSlice(sliceType$1, n);
  d�		na = 0;
  d�		fieldStart = 0;
  d�		i$1 = 0;
  d�		while (true) {
			if (!(i$1 < s.$length && !(((x = ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]), ((x < 0 || x >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x])) === 0)))) { break; }
  e			i$1 = i$1 + (1) >> 0;
    		}
  e		fieldStart = i$1;
  e+		while (true) {
			if (!(i$1 < s.$length)) { break; }
    			if ((x$1 = ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]), ((x$1 < 0 || x$1 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x$1])) === 0) {
  e\				i$1 = i$1 + (1) >> 0;
  ec				continue;
    			}
  er			((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = $subslice(s, fieldStart, i$1, i$1));
  e�			na = na + (1) >> 0;
  e�			i$1 = i$1 + (1) >> 0;
  e�			while (true) {
				if (!(i$1 < s.$length && !(((x$2 = ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]), ((x$2 < 0 || x$2 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x$2])) === 0)))) { break; }
  e�				i$1 = i$1 + (1) >> 0;
    			}
  e�			fieldStart = i$1;
    		}
    		if (fieldStart < s.$length) {
  fD			((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = $subslice(s, fieldStart, s.$length, s.$length));
    		}
  fl		$s = -1; return a;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fields }; } $f.$24r = $24r; $f._r = _r; $f.a = a; $f.fieldStart = fieldStart; $f.i = i; $f.i$1 = i$1; $f.isSpace = isSpace; $f.n = n; $f.na = na; $f.r = r; $f.s = s; $f.setBits = setBits; $f.wasSpace = wasSpace; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fields = Fields;
Fieldsbytes.Fieldsbytes.FieldsFuncbytes.asciiSpacebytes.sliceType$1unicode.IsSpace bytes.FieldsFuncbytes
FieldsFunc 
FieldsFunc�	�	FieldsFunc = function(s, f) {
		var _i, _r, _ref, _tuple, a, f, i, i$1, r, s, size, span$1, spans, start, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; a = $f.a; f = $f.f; i = $f.i; i$1 = $f.i$1; r = $f.r; s = $f.s; size = $f.size; span$1 = $f.span$1; spans = $f.spans; start = $f.start; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  i 		spans = $makeSlice(sliceType$2, 0, 32);
  j		start = -1;
  j3		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < s.$length)) { break; } */ if(!(i < s.$length)) { $s = 2; continue; }
  jK			size = 1;
  jW			r = ((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) >> 0));
    			if (r >= 128) {
  j�				_tuple = utf8.DecodeRune($subslice(s, i));
				r = _tuple[0];
				size = _tuple[1];
    			}
  j�			_r = f(r); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r) { */ case 3:
    				if (start >= 0) {
  j�					spans = $append(spans, new span.ptr(start, i));
  j�					start = -1;
    				}
    				$s = 5; continue;
			/* } else { */ case 4:
    				if (start < 0) {
  k'					start = i;
    				}
    			/* } */ case 5:
  k<			i = i + (size) >> 0;
    		$s = 1; continue;
		case 2:
    		if (start >= 0) {
  k~			spans = $append(spans, new span.ptr(start, s.$length));
    		}
  k�		a = $makeSlice(sliceType$1, spans.$length);
  l		_ref = spans;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i$1 = _i;
			span$1 = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), span);
  l 			((i$1 < 0 || i$1 >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i$1] = $subslice(s, span$1.start, span$1.end, span$1.end));
    			_i++;
		}
  lL		$s = -1; return a;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FieldsFunc }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f.a = a; $f.f = f; $f.i = i; $f.i$1 = i$1; $f.r = r; $f.s = s; $f.size = size; $f.span$1 = span$1; $f.spans = spans; $f.start = start; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.FieldsFunc = FieldsFunc;

FieldsFuncbytes.FieldsFuncbytes.sliceType$1bytes.sliceType$2
bytes.spanunicode/utf8.DecodeRune 
bytes.JoinbytesJoin Join��	Join = function(s, sep) {
		var _i, _i$1, _ref, _ref$1, b, bp, n, s, sep, v, v$1;
    		if (s.$length === 0) {
  m"			return new sliceType([]);
    		}
    		if (s.$length === 1) {
  mb			return $appendSlice((sliceType.nil), (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]));
    		}
  m�		n = $imul(sep.$length, ((s.$length - 1 >> 0)));
  m�		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  m�			n = n + (v.$length) >> 0;
    			_i++;
		}
  m�		b = $makeSlice(sliceType, n);
  m�		bp = $copySlice(b, (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]));
  m�		_ref$1 = $subslice(s, 1);
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			v$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  n			bp = bp + ($copySlice($subslice(b, bp), sep)) >> 0;
  n2			bp = bp + ($copySlice($subslice(b, bp), v$1)) >> 0;
    			_i$1++;
		}
  nL		return b;
    	};
	$pkg.Join = Join;
Join
bytes.Joinbytes.sliceType bytes.HasPrefixbytes	HasPrefix 	HasPrefix��	HasPrefix = function(s, prefix) {
		var prefix, s;
  n�		return s.$length >= prefix.$length && Equal($subslice(s, 0, prefix.$length), prefix);
    	};
	$pkg.HasPrefix = HasPrefix;
	HasPrefixbytes.Equalbytes.HasPrefix bytes.HasSuffixbytes	HasSuffix 	HasSuffix��	HasSuffix = function(s, suffix) {
		var s, suffix;
  ok		return s.$length >= suffix.$length && Equal($subslice(s, (s.$length - suffix.$length >> 0)), suffix);
    	};
	$pkg.HasSuffix = HasSuffix;
	HasSuffixbytes.Equalbytes.HasSuffix 	bytes.MapbytesMap Map��	Map = function(mapping, s) {
		var _r, _tuple, b, i, mapping, maxbytes, nb, nbytes, r, rl, s, wid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; i = $f.i; mapping = $f.mapping; maxbytes = $f.maxbytes; nb = $f.nb; nbytes = $f.nbytes; r = $f.r; rl = $f.rl; s = $f.s; wid = $f.wid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  q�		maxbytes = s.$length;
  q�		nbytes = 0;
  r/		b = $makeSlice(sliceType, maxbytes);
  rP		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < s.$length)) { break; } */ if(!(i < s.$length)) { $s = 2; continue; }
  rh			wid = 1;
  rs			r = ((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) >> 0));
    			if (r >= 128) {
  r�				_tuple = utf8.DecodeRune($subslice(s, i));
				r = _tuple[0];
				wid = _tuple[1];
    			}
  r�			_r = mapping(r); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r = _r;
    			if (r >= 0) {
  r�				rl = utf8.RuneLen(r);
    				if (rl < 0) {
  s					rl = 3;
    				}
    				if ((nbytes + rl >> 0) > maxbytes) {
  sn					maxbytes = ($imul(maxbytes, 2)) + 4 >> 0;
  s�					nb = $makeSlice(sliceType, maxbytes);
  s�					$copySlice(nb, $subslice(b, 0, nbytes));
  s�					b = nb;
    				}
  s�				nbytes = nbytes + (utf8.EncodeRune($subslice(b, nbytes, maxbytes), r)) >> 0;
    			}
  t			i = i + (wid) >> 0;
    		$s = 1; continue;
		case 2:
  t$		$s = -1; return $subslice(b, 0, nbytes);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Map }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.i = i; $f.mapping = mapping; $f.maxbytes = maxbytes; $f.nb = nb; $f.nbytes = nbytes; $f.r = r; $f.rl = rl; $f.s = s; $f.wid = wid; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Map = Map;
Map	bytes.Mapbytes.sliceTypeunicode/utf8.DecodeRuneunicode/utf8.EncodeRuneunicode/utf8.RuneLen bytes.RepeatbytesRepeat Repeat�	Repeat = function(b, count) {
		var _q, b, bp, count, nb;
    		if (count === 0) {
  u			return new sliceType([]);
    		}
    		if (count < 0) {
  u�			$panic(new $String("bytes: negative Repeat count"));
    		} else if (!(((_q = ($imul(b.$length, count)) / count, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) === b.$length))) {
  v"			$panic(new $String("bytes: Repeat count causes overflow"));
    		}
  vT		nb = $makeSlice(sliceType, ($imul(b.$length, count)));
  vv		bp = $copySlice(nb, b);
  v�		while (true) {
			if (!(bp < nb.$length)) { break; }
  v�			$copySlice($subslice(nb, bp), $subslice(nb, 0, bp));
  v�			bp = $imul(bp, (2));
    		}
  v�		return nb;
    	};
	$pkg.Repeat = Repeat;
Repeatbytes.Repeatbytes.sliceType bytes.ToUpperbytesToUpper ToUpper�%	ToUpper = function(s) {
		var $24r, _r, _tmp, _tmp$1, b, c, c$1, hasLower, i, i$1, isASCII, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; c = $f.c; c$1 = $f.c$1; hasLower = $f.hasLower; i = $f.i; i$1 = $f.i$1; isASCII = $f.isASCII; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  wW		_tmp = true;
		_tmp$1 = false;
		isASCII = _tmp;
		hasLower = _tmp$1;
  w}		i = 0;
		while (true) {
			if (!(i < s.$length)) { break; }
  w�			c = ((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]);
    			if (c >= 128) {
  w�				isASCII = false;
  w�				break;
    			}
  w�			hasLower = hasLower || (97 <= c && c <= 122);
  w�			i = i + (1) >> 0;
    		}
    		if (isASCII) {
    			if (!hasLower) {
  xu				$s = -1; return $appendSlice((new sliceType($stringToBytes(""))), s);
    			}
  x�			b = $makeSlice(sliceType, s.$length);
  x�			i$1 = 0;
			while (true) {
				if (!(i$1 < s.$length)) { break; }
  x�				c$1 = ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]);
    				if (97 <= c$1 && c$1 <= 122) {
  y					c$1 = c$1 - (32) << 24 >>> 24;
    				}
  y				((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1] = c$1);
  x�				i$1 = i$1 + (1) >> 0;
    			}
  y)			$s = -1; return b;
    		}
  y6		_r = Map(unicode.ToUpper, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToUpper }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.hasLower = hasLower; $f.i = i; $f.i$1 = i$1; $f.isASCII = isASCII; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToUpper = ToUpper;
ToUpper	bytes.Mapbytes.ToUpperbytes.sliceTypeunicode.ToUpper bytes.ToLowerbytesToLower ToLower�#	ToLower = function(s) {
		var $24r, _r, _tmp, _tmp$1, b, c, c$1, hasUpper, i, i$1, isASCII, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; c = $f.c; c$1 = $f.c$1; hasUpper = $f.hasUpper; i = $f.i; i$1 = $f.i$1; isASCII = $f.isASCII; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  y�		_tmp = true;
		_tmp$1 = false;
		isASCII = _tmp;
		hasUpper = _tmp$1;
  z		i = 0;
		while (true) {
			if (!(i < s.$length)) { break; }
  z!			c = ((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]);
    			if (c >= 128) {
  zH				isASCII = false;
  z[				break;
    			}
  zg			hasUpper = hasUpper || (65 <= c && c <= 90);
  z			i = i + (1) >> 0;
    		}
    		if (isASCII) {
    			if (!hasUpper) {
  z�				$s = -1; return $appendSlice((new sliceType($stringToBytes(""))), s);
    			}
  {				b = $makeSlice(sliceType, s.$length);
  {)			i$1 = 0;
			while (true) {
				if (!(i$1 < s.$length)) { break; }
  {F				c$1 = ((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]);
    				if (65 <= c$1 && c$1 <= 90) {
  {q					c$1 = c$1 + (32) << 24 >>> 24;
    				}
  {�				((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1] = c$1);
  {=				i$1 = i$1 + (1) >> 0;
    			}
  {�			$s = -1; return b;
    		}
  {�		_r = Map(unicode.ToLower, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToLower }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.hasUpper = hasUpper; $f.i = i; $f.i$1 = i$1; $f.isASCII = isASCII; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToLower = ToLower;
ToLower	bytes.Mapbytes.ToLowerbytes.sliceTypeunicode.ToLower bytes.ToTitlebytesToTitle ToTitle�x	ToTitle = function(s) {
		var $24r, _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  |]		_r = Map(unicode.ToTitle, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToTitle }; } $f.$24r = $24r; $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToTitle = ToTitle;
ToTitle	bytes.Mapbytes.ToTitleunicode.ToTitle bytes.ToUpperSpecialbytesToUpperSpecial ToUpperSpecial��	ToUpperSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  }l		_r = Map($methodVal(c, "ToUpper"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToUpperSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToUpperSpecial = ToUpperSpecial;
ToUpperSpecial	bytes.Mapbytes.ToUpperSpecial bytes.ToLowerSpecialbytesToLowerSpecial ToLowerSpecial��	ToLowerSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ~u		_r = Map($methodVal(c, "ToLower"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToLowerSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToLowerSpecial = ToLowerSpecial;
ToLowerSpecial	bytes.Mapbytes.ToLowerSpecial bytes.ToTitleSpecialbytesToTitleSpecial ToTitleSpecial��	ToTitleSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ~		_r = Map($methodVal(c, "ToTitle"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToTitleSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToTitleSpecial = ToTitleSpecial;
ToTitleSpecial	bytes.Mapbytes.ToTitleSpecial bytes.ToValidUTF8bytesToValidUTF8 ToValidUTF8��	ToValidUTF8 = function(s, replacement) {
		var _tuple, b, c, i, invalid, replacement, s, wid;
  �		b = $makeSlice(sliceType, 0, (s.$length + replacement.$length >> 0));
  ��		invalid = false;
  ��		i = 0;
		while (true) {
			if (!(i < s.$length)) { break; }
  �			c = ((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]);
    			if (c < 128) {
  �6				i = i + (1) >> 0;
  �=				invalid = false;
  �P				b = $append(b, (c));
  �j				continue;
    			}
  �y			_tuple = utf8.DecodeRune($subslice(s, i));
			wid = _tuple[1];
    			if (wid === 1) {
  ��				i = i + (1) >> 0;
    				if (!invalid) {
  ��					invalid = true;
  ��					b = $appendSlice(b, replacement);
    				}
  ��				continue;
    			}
  �			invalid = false;
  � 			b = $appendSlice(b, $subslice(s, i, (i + wid >> 0)));
  �?			i = i + (wid) >> 0;
    		}
  �L		return b;
    	};
	$pkg.ToValidUTF8 = ToValidUTF8;
ToValidUTF8bytes.ToValidUTF8bytes.sliceTypeunicode/utf8.DecodeRune bytes.isSeparatorbytesisSeparator isSeparator��	isSeparator = function(r) {
		var r;
    		if (r <= 127) {
    			if (48 <= r && r <= 57) {
  �w				return false;
    			} else if (97 <= r && r <= 122) {
  ��				return false;
    			} else if (65 <= r && r <= 90) {
  ��				return false;
    			} else if ((r === 95)) {
  ��				return false;
    			}
  �			return true;
    		}
    		if (unicode.IsLetter(r) || unicode.IsDigit(r)) {
  �p			return false;
    		}
  ��		return unicode.IsSpace(r);
    	};
isSeparatorbytes.isSeparatorunicode.IsDigitunicode.IsLetterunicode.IsSpace bytes.TitlebytesTitle Title�	Title = function(s) {
		var $24r, _r, prev, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; prev = $f.prev; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		prev = [prev];
  �}		prev[0] = 32;
  ��		_r = Map((function(prev) { return function(r) {
			var r;
    			if (isSeparator(prev[0])) {
  ��				prev[0] = r;
  ��				return unicode.ToTitle(r);
    			}
  ��			prev[0] = r;
  �			return r;
    		}; })(prev), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Title }; } $f.$24r = $24r; $f._r = _r; $f.prev = prev; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Title = Title;
Title	bytes.Mapbytes.Titlebytes.isSeparatorunicode.ToTitle bytes.TrimLeftFuncbytesTrimLeftFunc TrimLeftFunc��	TrimLeftFunc = function(s, f) {
		var _r, f, i, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; i = $f.i; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = indexFunc(s, f, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i === -1) {
  �			$s = -1; return sliceType.nil;
    		}
  �*		$s = -1; return $subslice(s, i);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimLeftFunc }; } $f._r = _r; $f.f = f; $f.i = i; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimLeftFunc = TrimLeftFunc;
TrimLeftFuncbytes.TrimLeftFuncbytes.indexFuncbytes.sliceType bytes.TrimRightFuncbytesTrimRightFunc TrimRightFunc�	TrimRightFunc = function(s, f) {
		var _r, _tuple, f, i, s, wid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; f = $f.f; i = $f.i; s = $f.s; wid = $f.wid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = lastIndexFunc(s, f, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i >= 0 && ((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) >= 128) {
  �5			_tuple = utf8.DecodeRune($subslice(s, i));
			wid = _tuple[1];
  �X			i = i + (wid) >> 0;
    		} else {
  �m			i = i + (1) >> 0;
    		}
  �u		$s = -1; return $subslice(s, 0, i);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimRightFunc }; } $f._r = _r; $f._tuple = _tuple; $f.f = f; $f.i = i; $f.s = s; $f.wid = wid; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimRightFunc = TrimRightFunc;
TrimRightFuncbytes.TrimRightFuncbytes.lastIndexFuncunicode/utf8.DecodeRune bytes.TrimFuncbytesTrimFunc TrimFunc�K	TrimFunc = function(s, f) {
		var $24r, _r, _r$1, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �;		_r = TrimLeftFunc(s, f); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = TrimRightFunc(_r, f); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimFunc }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimFunc = TrimFunc;
TrimFuncbytes.TrimFuncbytes.TrimLeftFuncbytes.TrimRightFunc bytes.TrimPrefixbytes
TrimPrefix 
TrimPrefix��	TrimPrefix = function(s, prefix) {
		var prefix, s;
    		if (HasPrefix(s, prefix)) {
  �2			return $subslice(s, prefix.$length);
    		}
  �M		return s;
    	};
	$pkg.TrimPrefix = TrimPrefix;

TrimPrefixbytes.HasPrefixbytes.TrimPrefix bytes.TrimSuffixbytes
TrimSuffix 
TrimSuffix��	TrimSuffix = function(s, suffix) {
		var s, suffix;
    		if (HasSuffix(s, suffix)) {
  � 			return $subslice(s, 0, (s.$length - suffix.$length >> 0));
    		}
  �B		return s;
    	};
	$pkg.TrimSuffix = TrimSuffix;

TrimSuffixbytes.HasSuffixbytes.TrimSuffix bytes.IndexFuncbytes	IndexFunc 	IndexFunc��	IndexFunc = function(s, f) {
		var $24r, _r, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �1		_r = indexFunc(s, f, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: IndexFunc }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.IndexFunc = IndexFunc;
	IndexFuncbytes.IndexFuncbytes.indexFunc bytes.LastIndexFuncbytesLastIndexFunc LastIndexFunc��	LastIndexFunc = function(s, f) {
		var $24r, _r, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �;		_r = lastIndexFunc(s, f, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LastIndexFunc }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.LastIndexFunc = LastIndexFunc;
LastIndexFuncbytes.LastIndexFuncbytes.lastIndexFunc bytes.indexFuncbytes	indexFunc 	indexFunc��	indexFunc = function(s, f, truth) {
		var _r, _tuple, f, r, s, start, truth, wid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; f = $f.f; r = $f.r; s = $f.s; start = $f.start; truth = $f.truth; wid = $f.wid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		start = 0;
  �&		/* while (true) { */ case 1:
			/* if (!(start < s.$length)) { break; } */ if(!(start < s.$length)) { $s = 2; continue; }
  �=			wid = 1;
  �H			r = ((((start < 0 || start >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + start]) >> 0));
    			if (r >= 128) {
  �y				_tuple = utf8.DecodeRune($subslice(s, start));
				r = _tuple[0];
				wid = _tuple[1];
    			}
  ��			_r = f(r); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r === truth) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r === truth) { */ case 3:
  ��				$s = -1; return start;
    			/* } */ case 4:
  ��			start = start + (wid) >> 0;
    		$s = 1; continue;
		case 2:
  ��		$s = -1; return -1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: indexFunc }; } $f._r = _r; $f._tuple = _tuple; $f.f = f; $f.r = r; $f.s = s; $f.start = start; $f.truth = truth; $f.wid = wid; $f.$s = $s; $f.$r = $r; return $f;
	};
	indexFuncbytes.indexFuncunicode/utf8.DecodeRune bytes.lastIndexFuncbyteslastIndexFunc lastIndexFunc�	lastIndexFunc = function(s, f, truth) {
		var _r, _tmp, _tmp$1, _tuple, f, i, r, s, size, truth, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; f = $f.f; i = $f.i; r = $f.r; s = $f.s; size = $f.size; truth = $f.truth; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		i = s.$length;
		/* while (true) { */ case 1:
			/* if (!(i > 0)) { break; } */ if(!(i > 0)) { $s = 2; continue; }
  ��			_tmp = (((x = i - 1 >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) >> 0));
			_tmp$1 = 1;
			r = _tmp;
			size = _tmp$1;
    			if (r >= 128) {
  �				_tuple = utf8.DecodeLastRune($subslice(s, 0, i));
				r = _tuple[0];
				size = _tuple[1];
    			}
  �1			i = i - (size) >> 0;
  �=			_r = f(r); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r === truth) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r === truth) { */ case 3:
  �S				$s = -1; return i;
    			/* } */ case 4:
    		$s = 1; continue;
		case 2:
  �d		$s = -1; return -1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: lastIndexFunc }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.f = f; $f.i = i; $f.r = r; $f.s = s; $f.size = size; $f.truth = truth; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
lastIndexFuncbytes.lastIndexFuncunicode/utf8.DecodeLastRune bytes.makeASCIISetbytesmakeASCIISet makeASCIISet��	makeASCIISet = function(chars) {
		var _index, _tmp, _tmp$1, _tmp$2, _tmp$3, as, c, chars, i, ok, y;
		as = arrayType$1.zero();
		ok = false;
  ��		i = 0;
		while (true) {
			if (!(i < chars.length)) { break; }
  �			c = chars.charCodeAt(i);
    			if (c >= 128) {
    				_tmp = $clone(as, asciiSet);
				_tmp$1 = false;
				asciiSet.copy(as, _tmp);
				ok = _tmp$1;
				return [as, ok];
    			}
    			_index = c >>> 5 << 24 >>> 24;
  �S			((_index < 0 || _index >= as.length) ? ($throwRuntimeError("index out of range"), undefined) : as[_index] = ((((_index < 0 || _index >= as.length) ? ($throwRuntimeError("index out of range"), undefined) : as[_index]) | (((y = ((((c & 31) >>> 0) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0));
  �				i = i + (1) >> 0;
    		}
    		_tmp$2 = $clone(as, asciiSet);
		_tmp$3 = true;
		asciiSet.copy(as, _tmp$2);
		ok = _tmp$3;
		return [as, ok];
    	};
makeASCIISetbytes.arrayType$1bytes.asciiSetbytes.makeASCIISet (*bytes.asciiSet).contains ��	asciiSet.prototype.contains = function(c) {
		var as, c, x, x$1, y;
		as = this.$val;
  ��		return !((((((x = as, x$1 = c >>> 5 << 24 >>> 24, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) & (((y = ((((c & 31) >>> 0) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0)) === 0));
    	};
	$ptrType(asciiSet).prototype.contains = function(c) { return (new asciiSet(this.$get())).contains(c); };
asciiSet	contains~bytes.asciiSet bytes.makeCutsetFuncbytesmakeCutsetFunc makeCutsetFunc�K	makeCutsetFunc = function(cutset) {
		var _tuple, as, cutset, isASCII;
    		if ((cutset.length === 1) && cutset.charCodeAt(0) < 128) {
  �			return (function(r) {
				var r;
  ��				return r === ((cutset.charCodeAt(0) >> 0));
    			});
    		}
  ��		_tuple = makeASCIISet(cutset);
		as = $clone(_tuple[0], asciiSet);
		isASCII = _tuple[1];
    		if (isASCII) {
  ��			return (function(r) {
				var r;
  �				return r < 128 && new ptrType$1(as).contains(((r << 24 >>> 24)));
    			});
    		}
  �L		return (function(r) {
			var _i, _ref, _rune, c, r;
  �i			_ref = cutset;
			_i = 0;
			while (true) {
				if (!(_i < _ref.length)) { break; }
				_rune = $decodeRune(_ref, _i);
				c = _rune[0];
    				if (c === r) {
  ��					return true;
    				}
    				_i += _rune[1];
			}
  ��			return false;
    		});
    	};
makeCutsetFuncbytes.asciiSetbytes.contains~bytes.makeASCIISetbytes.makeCutsetFuncbytes.ptrType$1 
bytes.TrimbytesTrim Trim��	Trim = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �h		_r = TrimFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Trim }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Trim = Trim;
Trim
bytes.Trimbytes.TrimFuncbytes.makeCutsetFunc bytes.TrimLeftbytesTrimLeft TrimLeft��	TrimLeft = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �8		_r = TrimLeftFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimLeft }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimLeft = TrimLeft;
TrimLeftbytes.TrimLeftbytes.TrimLeftFuncbytes.makeCutsetFunc bytes.TrimRightbytes	TrimRight 	TrimRight��	TrimRight = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = TrimRightFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimRight }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimRight = TrimRight;
	TrimRightbytes.TrimRightbytes.TrimRightFuncbytes.makeCutsetFunc bytes.TrimSpacebytes	TrimSpace 	TrimSpace�
Q	TrimSpace = function(s) {
		var $24r, $24r$1, _r, _r$1, c, c$1, s, start, stop, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; c = $f.c; c$1 = $f.c$1; s = $f.s; start = $f.start; stop = $f.stop; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �#		start = 0;
  �/		/* while (true) { */ case 1:
			/* if (!(start < s.$length)) { break; } */ if(!(start < s.$length)) { $s = 2; continue; }
  �Q			c = ((start < 0 || start >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + start]);
  �a			/* */ if (c >= 128) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (c >= 128) { */ case 3:
  ��				_r = TrimFunc($subslice(s, start), unicode.IsSpace); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
    			if (((c < 0 || c >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[c]) === 0) {
  �:				/* break; */ $s = 2; continue;
    			}
  �E			start = start + (1) >> 0;
    		$s = 1; continue;
		case 2:
  ��		stop = s.$length;
  ��		/* while (true) { */ case 7:
			/* if (!(stop > start)) { break; } */ if(!(stop > start)) { $s = 8; continue; }
  ��			c$1 = (x = stop - 1 >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x]));
  ��			/* */ if (c$1 >= 128) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (c$1 >= 128) { */ case 9:
  ��				_r$1 = TrimFunc($subslice(s, start, stop), unicode.IsSpace); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r$1 = _r$1;
				$s = 12; case 12: return $24r$1;
    			/* } */ case 10:
    			if (((c$1 < 0 || c$1 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[c$1]) === 0) {
  �2				/* break; */ $s = 8; continue;
    			}
  ��			stop = stop - (1) >> 0;
    		$s = 7; continue;
		case 8:
    		if (start === stop) {
  �d			$s = -1; return sliceType.nil;
    		}
  �s		$s = -1; return $subslice(s, start, stop);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimSpace }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.c = c; $f.c$1 = c$1; $f.s = s; $f.start = start; $f.stop = stop; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimSpace = TrimSpace;
	TrimSpacebytes.TrimFuncbytes.TrimSpacebytes.asciiSpacebytes.sliceTypeunicode.IsSpace bytes.RunesbytesRunes Runes��	Runes = function(s) {
		var _tuple, i, l, r, s, t;
  �2		t = $makeSlice(sliceType$3, utf8.RuneCount(s));
  �X		i = 0;
  �`		while (true) {
			if (!(s.$length > 0)) { break; }
  �s			_tuple = utf8.DecodeRune(s);
			r = _tuple[0];
			l = _tuple[1];
  ��			((i < 0 || i >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + i] = r);
  ��			i = i + (1) >> 0;
  ��			s = $subslice(s, l);
    		}
  ��		return t;
    	};
	$pkg.Runes = Runes;
Runesbytes.Runesbytes.sliceType$3unicode/utf8.DecodeRuneunicode/utf8.RuneCount bytes.ReplacebytesReplace Replace�i	Replace = function(s, old, new$1, n) {
		var _tuple, i, j, m, n, new$1, old, s, start, t, w, wid;
  �0		m = 0;
    		if (!((n === 0))) {
  �k			m = Count(s, old);
    		}
    		if (m === 0) {
  ��			return $appendSlice((sliceType.nil), s);
    		}
    		if (n < 0 || m < n) {
  ��			n = m;
    		}
  �		t = $makeSlice(sliceType, (s.$length + ($imul(n, ((new$1.$length - old.$length >> 0)))) >> 0));
  �A		w = 0;
  �I		start = 0;
  �Y		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  �p			j = start;
    			if (old.$length === 0) {
    				if (i > 0) {
  ��					_tuple = utf8.DecodeRune($subslice(s, start));
					wid = _tuple[1];
  ��					j = j + (wid) >> 0;
    				}
    			} else {
  ��				j = j + (Index($subslice(s, start), old)) >> 0;
    			}
  �			w = w + ($copySlice($subslice(t, w), $subslice(s, start, j))) >> 0;
  �'			w = w + ($copySlice($subslice(t, w), new$1)) >> 0;
  �?			start = j + old.$length >> 0;
  �h			i = i + (1) >> 0;
    		}
  �X		w = w + ($copySlice($subslice(t, w), $subslice(s, start))) >> 0;
  �u		return $subslice(t, 0, w);
    	};
	$pkg.Replace = Replace;
Replacebytes.Countbytes.Indexbytes.Replacebytes.sliceTypeunicode/utf8.DecodeRune bytes.ReplaceAllbytes
ReplaceAll 
ReplaceAll��	ReplaceAll = function(s, old, new$1) {
		var new$1, old, s;
  ��		return Replace(s, old, new$1, -1);
    	};
	$pkg.ReplaceAll = ReplaceAll;

ReplaceAllbytes.Replacebytes.ReplaceAll bytes.EqualFoldbytes	EqualFold 	EqualFold��	EqualFold = function(s, t) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, r, r$1, r$2, s, size, size$1, sr, t, tr;
  ��		while (true) {
			if (!(!((s.$length === 0)) && !((t.$length === 0)))) { break; }
  ��			_tmp = 0;
			_tmp$1 = 0;
			sr = _tmp;
			tr = _tmp$1;
    			if ((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) < 128) {
  �				_tmp$2 = (((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >> 0));
				_tmp$3 = $subslice(s, 1);
				sr = _tmp$2;
				s = _tmp$3;
    			} else {
  �<				_tuple = utf8.DecodeRune(s);
				r = _tuple[0];
				size = _tuple[1];
  �]				_tmp$4 = r;
				_tmp$5 = $subslice(s, size);
				sr = _tmp$4;
				s = _tmp$5;
    			}
    			if ((0 >= t.$length ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + 0]) < 128) {
  ��				_tmp$6 = (((0 >= t.$length ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + 0]) >> 0));
				_tmp$7 = $subslice(t, 1);
				tr = _tmp$6;
				t = _tmp$7;
    			} else {
  ��				_tuple$1 = utf8.DecodeRune(t);
				r$1 = _tuple$1[0];
				size$1 = _tuple$1[1];
  ��				_tmp$8 = r$1;
				_tmp$9 = $subslice(t, size$1);
				tr = _tmp$8;
				t = _tmp$9;
    			}
    			if (tr === sr) {
  �P				continue;
    			}
    			if (tr < sr) {
  ��				_tmp$10 = sr;
				_tmp$11 = tr;
				tr = _tmp$10;
				sr = _tmp$11;
    			}
    			if (tr < 128) {
    				if (65 <= sr && sr <= 90 && (tr === ((sr + 97 >> 0) - 65 >> 0))) {
  �M					continue;
    				}
  �^				return false;
    			}
  ��			r$2 = unicode.SimpleFold(sr);
  ��			while (true) {
				if (!(!((r$2 === sr)) && r$2 < tr)) { break; }
  �				r$2 = unicode.SimpleFold(r$2);
    			}
    			if (r$2 === tr) {
  �I				continue;
    			}
  �X			return false;
    		}
  ��		return s.$length === t.$length;
    	};
	$pkg.EqualFold = EqualFold;
	EqualFoldbytes.EqualFoldunicode.SimpleFoldunicode/utf8.DecodeRune bytes.IndexbytesIndex Index�1	Index = function(s, sep) {
		var c0, c0$1, c1, c1$1, fails, fails$1, i, i$1, j, n, o, o$1, r, s, sep, t, t$1, x, x$1;
  �)		n = sep.$length;
    		if ((n === 0)) {
  �Q			return 0;
    		} else if ((n === 1)) {
  �j			return IndexByte(s, (0 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 0]));
    		} else if ((n === s.$length)) {
    			if (Equal(sep, s)) {
  ��				return 0;
    			}
  ��			return -1;
    		} else if (n > s.$length) {
  ��			return -1;
    		} else if (n <= bytealg.MaxLen) {
    			if (s.$length <= 0) {
  �`				return bytealg.Index(s, sep);
    			}
  ��			c0 = (0 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 0]);
  ��			c1 = (1 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 1]);
  ��			i = 0;
  ��			t = (s.$length - n >> 0) + 1 >> 0;
  ��			fails = 0;
  ��			while (true) {
				if (!(i < t)) { break; }
    				if (!((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) === c0))) {
  �f					o = IndexByte($subslice(s, (i + 1 >> 0), t), c0);
    					if (o < 0) {
  ��						return -1;
    					}
  ��					i = i + ((o + 1 >> 0)) >> 0;
    				}
    				if (((x = i + 1 >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) === c1) && Equal($subslice(s, i, (i + n >> 0)), sep)) {
  ��					return i;
    				}
  ��				fails = fails + (1) >> 0;
  �				i = i + (1) >> 0;
    				if (fails > bytealg.Cutover(i)) {
  ��					r = bytealg.Index($subslice(s, i), sep);
    					if (r >= 0) {
  ��						return r + i >> 0;
    					}
  ��					return -1;
    				}
    			}
  ��			return -1;
    		}
  ��		c0$1 = (0 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 0]);
  ��		c1$1 = (1 >= sep.$length ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + 1]);
  �		i$1 = 0;
  �		fails$1 = 0;
  �!		t$1 = (s.$length - n >> 0) + 1 >> 0;
  �6		while (true) {
			if (!(i$1 < t$1)) { break; }
    			if (!((((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]) === c0$1))) {
  �W				o$1 = IndexByte($subslice(s, (i$1 + 1 >> 0), t$1), c0$1);
    				if (o$1 < 0) {
  ��					break;
    				}
  ��				i$1 = i$1 + ((o$1 + 1 >> 0)) >> 0;
    			}
    			if (((x$1 = i$1 + 1 >> 0, ((x$1 < 0 || x$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x$1])) === c1$1) && Equal($subslice(s, i$1, (i$1 + n >> 0)), sep)) {
  ��				return i$1;
    			}
  ��			i$1 = i$1 + (1) >> 0;
  ��			fails$1 = fails$1 + (1) >> 0;
    			if (fails$1 >= (4 + (i$1 >> 4 >> 0) >> 0) && i$1 < t$1) {
  ��				j = bytealg.IndexRabinKarpBytes($subslice(s, i$1), sep);
    				if (j < 0) {
  ��					return -1;
    				}
  ��				return i$1 + j >> 0;
    			}
    		}
  �		return -1;
    	};
	$pkg.Index = Index;
Indexbytes.Equalbytes.Indexbytes.IndexByteinternal/bytealg.Cutoverinternal/bytealg.Index$internal/bytealg.IndexRabinKarpBytesinternal/bytealg.MaxLen (*bytes.Reader).Len ��	Reader.ptr.prototype.Len = function() {
		var r, x, x$1, x$2, x$3, x$4;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.$length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
  �!			return 0;
    		}
  �.		return (((x$2 = (x$3 = (new $Int64(0, r.s.$length)), x$4 = r.i, new $Int64(x$3.$high - x$4.$high, x$3.$low - x$4.$low)), x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0));
    	};
	Reader.prototype.Len = function() { return this.$val.Len(); };
Readerbytes.Reader (*bytes.Reader).Size ��	Reader.ptr.prototype.Size = function() {
		var r;
		r = this;
  �T		return (new $Int64(0, r.s.$length));
    	};
	Reader.prototype.Size = function() { return this.$val.Size(); };
Readerbytes.Reader (*bytes.Reader).Read ��	Reader.ptr.prototype.Read = function(b) {
		var _tmp, _tmp$1, b, err, n, r, x, x$1, x$2, x$3;
		n = 0;
		err = $ifaceNil;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.$length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
    			_tmp = 0;
			_tmp$1 = io.EOF;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
  �		r.prevRune = -1;
  �		n = $copySlice(b, $subslice(r.s, $flatten64(r.i)));
  �,		r.i = (x$2 = r.i, x$3 = (new $Int64(0, n)), new $Int64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
  �=		return [n, err];
    	};
	Reader.prototype.Read = function(b) { return this.$val.Read(b); };
Readerbytes.Readerio.EOF (*bytes.Reader).ReadAt �+	Reader.ptr.prototype.ReadAt = function(b, off) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, b, err, n, off, r, x;
		n = 0;
		err = $ifaceNil;
		r = this;
    		if ((off.$high < 0 || (off.$high === 0 && off.$low < 0))) {
    			_tmp = 0;
			_tmp$1 = errors.New("bytes.Reader.ReadAt: negative offset");
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
    		if ((x = (new $Int64(0, r.s.$length)), (off.$high > x.$high || (off.$high === x.$high && off.$low >= x.$low)))) {
    			_tmp$2 = 0;
			_tmp$3 = io.EOF;
			n = _tmp$2;
			err = _tmp$3;
			return [n, err];
    		}
  �g		n = $copySlice(b, $subslice(r.s, $flatten64(off)));
    		if (n < b.$length) {
  ��			err = io.EOF;
    		}
  ��		return [n, err];
    	};
	Reader.prototype.ReadAt = function(b, off) { return this.$val.ReadAt(b, off); };
Readerbytes.Reader
errors.Newio.EOF (*bytes.Reader).ReadByte ��	Reader.ptr.prototype.ReadByte = function() {
		var b, r, x, x$1, x$2, x$3, x$4, x$5;
		r = this;
  �		r.prevRune = -1;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.$length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
  �<			return [0, io.EOF];
    		}
  �Q		b = (x$2 = r.s, x$3 = r.i, (($flatten64(x$3) < 0 || $flatten64(x$3) >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + $flatten64(x$3)]));
  �`		r.i = (x$4 = r.i, x$5 = new $Int64(0, 1), new $Int64(x$4.$high + x$5.$high, x$4.$low + x$5.$low));
  �g		return [b, $ifaceNil];
    	};
	Reader.prototype.ReadByte = function() { return this.$val.ReadByte(); };
Readerbytes.Readerio.EOF (*bytes.Reader).UnreadByte ��	Reader.ptr.prototype.UnreadByte = function() {
		var r, x, x$1, x$2;
		r = this;
    		if ((x = r.i, (x.$high < 0 || (x.$high === 0 && x.$low <= 0)))) {
  � 			return errors.New("bytes.Reader.UnreadByte: at beginning of slice");
    		}
  �H		r.prevRune = -1;
  �Y		r.i = (x$1 = r.i, x$2 = new $Int64(0, 1), new $Int64(x$1.$high - x$2.$high, x$1.$low - x$2.$low));
  �`		return $ifaceNil;
    	};
	Reader.prototype.UnreadByte = function() { return this.$val.UnreadByte(); };
Readerbytes.Reader
errors.New (*bytes.Reader).ReadRune ��	Reader.ptr.prototype.ReadRune = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, c, ch, err, r, size, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8;
		ch = 0;
		size = 0;
		err = $ifaceNil;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.$length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
  ��			r.prevRune = -1;
    			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = io.EOF;
			ch = _tmp;
			size = _tmp$1;
			err = _tmp$2;
			return [ch, size, err];
    		}
  �(		r.prevRune = (((x$2 = r.i, x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0));
  �B		c = (x$3 = r.s, x$4 = r.i, (($flatten64(x$4) < 0 || $flatten64(x$4) >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + $flatten64(x$4)]));
    		if (c < 128) {
  �g			r.i = (x$5 = r.i, x$6 = new $Int64(0, 1), new $Int64(x$5.$high + x$6.$high, x$5.$low + x$6.$low));
    			_tmp$3 = ((c >> 0));
			_tmp$4 = 1;
			_tmp$5 = $ifaceNil;
			ch = _tmp$3;
			size = _tmp$4;
			err = _tmp$5;
			return [ch, size, err];
    		}
  ��		_tuple = utf8.DecodeRune($subslice(r.s, $flatten64(r.i)));
		ch = _tuple[0];
		size = _tuple[1];
  ��		r.i = (x$7 = r.i, x$8 = (new $Int64(0, size)), new $Int64(x$7.$high + x$8.$high, x$7.$low + x$8.$low));
  ��		return [ch, size, err];
    	};
	Reader.prototype.ReadRune = function() { return this.$val.ReadRune(); };
Readerbytes.Readerio.EOFunicode/utf8.DecodeRune (*bytes.Reader).UnreadRune �	Reader.ptr.prototype.UnreadRune = function() {
		var r, x;
		r = this;
    		if ((x = r.i, (x.$high < 0 || (x.$high === 0 && x.$low <= 0)))) {
  �W			return errors.New("bytes.Reader.UnreadRune: at beginning of slice");
    		}
    		if (r.prevRune < 0) {
  ��			return errors.New("bytes.Reader.UnreadRune: previous operation was not ReadRune");
    		}
  �		r.i = (new $Int64(0, r.prevRune));
  �$		r.prevRune = -1;
  �5		return $ifaceNil;
    	};
	Reader.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
Readerbytes.Reader
errors.New (*bytes.Reader).Seek ��	Reader.ptr.prototype.Seek = function(offset, whence) {
		var _1, abs, offset, r, whence, x, x$1;
		r = this;
  ��		r.prevRune = -1;
  ��		abs = new $Int64(0, 0);
    		_1 = whence;
    		if (_1 === (0)) {
  ��			abs = offset;
    		} else if (_1 === (1)) {
  �			abs = (x = r.i, new $Int64(x.$high + offset.$high, x.$low + offset.$low));
    		} else if (_1 === (2)) {
  �C			abs = (x$1 = (new $Int64(0, r.s.$length)), new $Int64(x$1.$high + offset.$high, x$1.$low + offset.$low));
    		} else {
  �n			return [new $Int64(0, 0), errors.New("bytes.Reader.Seek: invalid whence")];
    		}
    		if ((abs.$high < 0 || (abs.$high === 0 && abs.$low < 0))) {
  ��			return [new $Int64(0, 0), errors.New("bytes.Reader.Seek: negative position")];
    		}
  ��		r.i = abs;
  �		return [abs, $ifaceNil];
    	};
	Reader.prototype.Seek = function(offset, whence) { return this.$val.Seek(offset, whence); };
Readerbytes.Reader
errors.New (*bytes.Reader).WriteTo �+	Reader.ptr.prototype.WriteTo = function(w) {
		var _r, _tmp, _tmp$1, _tuple, b, err, m, n, r, w, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; b = $f.b; err = $f.err; m = $f.m; n = $f.n; r = $f.r; w = $f.w; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		r = this;
  ��		r.prevRune = -1;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.$length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
    			_tmp = new $Int64(0, 0);
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  ��		b = $subslice(r.s, $flatten64(r.i));
  ��		_r = w.Write(b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		m = _tuple[0];
		err = _tuple[1];
    		if (m > b.$length) {
  �			$panic(new $String("bytes.Reader.WriteTo: invalid Write count"));
    		}
  �9		r.i = (x$2 = r.i, x$3 = (new $Int64(0, m)), new $Int64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
  �J		n = (new $Int64(0, m));
    		if (!((m === b.$length)) && $interfaceIsEqual(err, $ifaceNil)) {
  �y			err = io.ErrShortWrite;
    		}
  ��		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.WriteTo }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.m = m; $f.n = n; $f.r = r; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.WriteTo = function(w) { return this.$val.WriteTo(w); };
Readerbytes.Readerio.ErrShortWrite (*bytes.Reader).Reset ��	Reader.ptr.prototype.Reset = function(b) {
		var b, r;
		r = this;
  ��		Reader.copy(r, new Reader.ptr(b, new $Int64(0, 0), -1));
    	};
	Reader.prototype.Reset = function(b) { return this.$val.Reset(b); };
Readerbytes.Reader bytes.NewReaderbytes	NewReader 	NewReader��	NewReader = function(b) {
		var b;
  �`		return new Reader.ptr(b, new $Int64(0, 0), -1);
    	};
	$pkg.NewReader = NewReader;
	NewReaderbytes.NewReaderbytes.Reader �(�{"Base":49020,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bytes/bytes.go","Base":1,"Size":522,"Lines":[0,14,27,28,42,43,82,105,119,131,135,138,149,151,152,183,206,221,224,247,264,280,284,287,300,302,303,335,359,378,390,394,407,422,435,439,454,466,470,473,495,507,510,520],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bytes/buffer.go","Base":524,"Size":14762,"Lines":[0,55,109,159,160,174,175,218,219,228,238,244,260,262,263,325,352,353,430,492,513,576,639,716,718,719,781,844,905,973,990,991,1062,1129,1137,1191,1239,1288,1337,1386,1435,1437,1438,1529,1585,1676,1677,1711,1712,1797,1877,1956,2041,2118,2175,2176,2243,2311,2314,2382,2417,2432,2472,2489,2492,2522,2524,2525,2593,2654,2655,2727,2757,2814,2815,2895,2943,2992,2993,3063,3115,3187,3222,3235,3247,3256,3259,3283,3310,3359,3362,3387,3389,3390,3430,3497,3534,3561,3580,3591,3615,3617,3618,3698,3744,3824,3879,3920,3942,3959,3962,3979,3981,3982,4044,4099,4159,4194,4208,4256,4283,4295,4298,4337,4378,4389,4392,4435,4478,4489,4492,4509,4526,4584,4632,4686,4725,4754,4782,4803,4813,4866,4894,4921,4935,4938,4972,4983,5004,5014,5016,5017,5091,5165,5203,5241,5301,5332,5344,5389,5392,5408,5427,5429,5430,5502,5578,5642,5696,5720,5757,5767,5788,5791,5823,5825,5826,5904,5980,6050,6110,6134,6171,6181,6202,6205,6237,6239,6240,6302,6378,6452,6474,6494,6495,6573,6650,6726,6793,6855,6879,6886,6909,6929,6967,6980,7006,7010,7011,7033,7049,7068,7123,7127,7143,7158,7162,7165,7167,7168,7245,7266,7297,7340,7356,7380,7402,7406,7411,7435,7437,7438,7514,7591,7661,7711,7772,7796,7832,7865,7883,7937,7941,7954,7969,7985,8000,8004,8062,8093,8112,8142,8146,8149,8181,8192,8207,8209,8210,8287,8364,8437,8453,8496,8520,8552,8562,8578,8581,8595,8607,8609,8610,8681,8754,8832,8899,8955,9013,9045,9068,9084,9087,9111,9153,9163,9189,9192,9240,9261,9276,9278,9279,9351,9421,9493,9517,9570,9594,9610,9656,9668,9687,9704,9708,9727,9730,9758,9770,9782,9804,9807,9822,9824,9825,9894,9961,10043,10117,10155,10179,10193,10205,10213,10216,10248,10260,10272,10294,10297,10310,10312,10313,10374,10427,10471,10487,10533,10545,10564,10567,10586,10595,10616,10631,10633,10634,10687,10726,10786,10838,10882,10942,10958,11004,11016,11038,11041,11060,11084,11094,11121,11146,11149,11189,11201,11225,11243,11245,11246,11304,11368,11444,11511,11540,11578,11608,11706,11709,11740,11767,11770,11794,11806,11808,11809,11914,11915,11990,12067,12146,12185,12223,12253,12276,12279,12303,12319,12329,12332,12344,12346,12347,12416,12492,12556,12638,12719,12729,12795,12829,12888,12923,12954,12972,12974,12975,13055,13121,13159,13181,13193,13212,13227,13230,13255,13268,13289,13307,13309,13310,13380,13457,13522,13604,13683,13696,13763,13797,13824,13826,13827,13894,13962,14033,14103,14171,14233,14236,14307,14345,14409,14410,14488,14564,14575,14578,14649,14687,14728,14760],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bytes/bytes.go","Base":15287,"Size":29792,"Lines":[0,55,109,159,160,235,296,310,311,320,340,351,367,369,370,403,454,505,536,610,641,643,644,719,782,833,865,895,897,898,1003,1099,1140,1153,1166,1169,1193,1207,1216,1234,1251,1264,1272,1281,1285,1316,1341,1356,1363,1366,1382,1384,1385,1454,1547,1579,1596,1616,1647,1650,1670,1704,1707,1715,1722,1743,1758,1770,1774,1780,1801,1804,1806,1807,1857,1898,1931,1933,1934,2025,2073,2105,2107,2108,2197,2240,2269,2271,2272,2368,2407,2439,2441,2442,2489,2512,2526,2538,2542,2545,2556,2558,2559,2658,2694,2709,2719,2733,2749,2763,2797,2816,2837,2849,2853,2865,2883,2895,2898,2947,2992,3012,3026,3065,3104,3107,3149,3163,3166,3200,3223,3243,3271,3314,3326,3330,3333,3344,3346,3347,3446,3489,3525,3542,3554,3558,3561,3572,3574,3575,3645,3722,3768,3832,3864,3903,3913,3948,3979,4006,4034,4069,4098,4111,4116,4126,4130,4142,4168,4180,4190,4216,4248,4273,4276,4278,4279,4356,4436,4516,4536,4580,4598,4628,4640,4643,4661,4679,4705,4734,4762,4791,4805,4811,4816,4829,4833,4882,4894,4898,4910,4913,4935,4957,4983,5005,5009,5034,5037,5054,5105,5130,5154,5168,5174,5179,5192,5196,5199,5214,5252,5270,5295,5345,5358,5363,5376,5388,5392,5428,5455,5479,5507,5535,5549,5555,5568,5573,5633,5665,5717,5731,5737,5750,5755,5759,5788,5804,5817,5822,5826,5829,5840,5842,5843,5916,5991,6066,6103,6151,6169,6199,6211,6214,6231,6282,6320,6347,6361,6367,6372,6385,6389,6392,6410,6428,6454,6482,6511,6525,6531,6536,6549,6553,6602,6614,6618,6630,6633,6655,6678,6705,6728,6732,6760,6801,6814,6830,6843,6848,6852,6864,6867,6894,6914,6939,6991,7008,7013,7020,7032,7036,7076,7088,7115,7139,7166,7194,7208,7214,7227,7232,7292,7323,7375,7389,7395,7408,7413,7417,7446,7462,7475,7480,7484,7487,7498,7500,7501,7554,7606,7662,7675,7688,7691,7711,7734,7737,7749,7773,7776,7777,7801,7806,7814,7827,7848,7861,7870,7874,7910,7931,7937,7940,7950,7966,7968,7969,8043,8086,8147,8206,8288,8336,8362,8439,8440,8510,8549,8615,8674,8756,8804,8830,8880,8918,8920,8921,8998,9041,9101,9151,9221,9222,9295,9334,9399,9454,9496,9535,9537,9538,9619,9620,9687,9772,9860,9907,9940,9968,10044,10052,10067,10134,10155,10186,10198,10213,10245,10272,10293,10296,10297,10328,10378,10418,10421,10422,10442,10466,10475,10492,10500,10543,10586,10592,10595,10611,10629,10658,10665,10677,10681,10709,10716,10722,10758,10802,10809,10813,10830,10833,10891,10929,10932,10942,10944,10945,11016,11090,11169,11213,11216,11289,11356,11412,11480,11545,11565,11577,11589,11592,11622,11623,11665,11733,11803,11854,11895,11922,11934,11952,11978,12014,12018,12030,12049,12091,12106,12111,12122,12140,12154,12159,12163,12175,12178,12179,12212,12229,12274,12277,12278,12328,12361,12391,12432,12435,12436,12446,12448,12449,12530,12588,12631,12649,12667,12670,12688,12713,12751,12754,12784,12807,12821,12824,12825,12847,12868,12895,12921,12945,12948,12958,12960,12961,13025,13065,13130,13132,13133,13195,13235,13306,13308,13309,13384,13476,13556,13612,13667,13729,13795,13856,13891,13943,13972,13999,14010,14028,14054,14089,14093,14110,14124,14149,14164,14201,14206,14235,14259,14299,14332,14358,14369,14374,14426,14430,14441,14444,14464,14466,14467,14535,14538,14578,14623,14665,14682,14700,14703,14752,14800,14817,14855,14871,14911,14953,15000,15003,15004,15038,15057,15077,15102,15112,15115,15126,15128,15129,15210,15231,15263,15297,15328,15340,15366,15385,15394,15398,15446,15449,15450,15504,15521,15547,15582,15586,15614,15646,15659,15688,15707,15712,15724,15728,15739,15742,15774,15776,15777,15858,15879,15911,15945,15976,15988,16014,16033,16042,16046,16094,16097,16098,16152,16169,16204,16208,16236,16268,16281,16310,16329,16334,16346,16350,16361,16364,16396,16398,16399,16518,16583,16584,16698,16758,16820,16846,16848,16849,16963,17023,17085,17111,17113,17114,17228,17288,17350,17376,17378,17379,17468,17558,17607,17654,17724,17751,17763,17788,17795,17814,17840,17852,17856,17891,17907,17914,17931,17950,17984,17989,18001,18005,18023,18054,18065,18068,18078,18080,18081,18149,18219,18251,18309,18325,18336,18365,18381,18410,18426,18455,18471,18488,18504,18508,18522,18525,18567,18615,18630,18633,18701,18728,18730,18731,18827,18864,18867,18966,18996,19038,19110,19141,19154,19167,19189,19215,19228,19258,19263,19275,19287,19292,19297,19299,19300,19391,19453,19511,19540,19554,19567,19570,19584,19586,19587,19656,19706,19765,19798,19836,19871,19882,19892,19898,19901,19916,19918,19919,19995,20045,20099,20144,20146,20147,20215,20275,20318,20345,20370,20373,20383,20385,20386,20455,20513,20556,20583,20615,20618,20628,20630,20631,20701,20756,20805,20857,20887,20889,20890,20964,21018,21067,21123,21157,21159,21160,21213,21269,21282,21346,21358,21380,21391,21413,21439,21478,21482,21503,21519,21523,21538,21541,21552,21554,21555,21616,21672,21685,21753,21780,21809,21835,21876,21880,21892,21913,21925,21929,21932,21943,21945,21946,22022,22095,22164,22238,22314,22391,22415,22416,22490,22524,22581,22616,22632,22658,22678,22682,22712,22715,22732,22734,22735,22784,22828,22872,22874,22875,22930,22982,23011,23042,23046,23049,23100,23129,23181,23185,23188,23216,23245,23260,23276,23281,23285,23300,23303,23305,23306,23369,23428,23472,23516,23518,23519,23582,23632,23680,23728,23730,23731,23796,23855,23904,23953,23955,23956,24024,24072,24106,24171,24183,24216,24232,24258,24314,24371,24418,24422,24448,24457,24461,24464,24465,24526,24542,24572,24589,24615,24666,24670,24696,24705,24709,24712,24713,24775,24840,24864,24884,24946,25003,25016,25019,25041,25043,25044,25110,25180,25210,25248,25256,25274,25303,25314,25320,25332,25335,25345,25347,25348,25406,25459,25520,25586,25609,25671,25720,25728,25741,25778,25798,25801,25814,25839,25874,25877,25898,25906,25909,25910,25944,25993,26001,26013,26039,26052,26073,26087,26128,26141,26146,26157,26187,26191,26222,26246,26269,26272,26301,26316,26318,26319,26372,26425,26486,26552,26575,26620,26653,26655,26656,26724,26789,26820,26855,26889,26924,26942,26970,26999,27010,27043,27066,27070,27098,27127,27138,27171,27194,27198,27199,27253,27254,27270,27286,27298,27302,27303,27347,27362,27381,27385,27412,27438,27487,27538,27551,27556,27572,27576,27577,27647,27687,27717,27743,27772,27776,27791,27803,27807,27822,27825,27826,27861,27886,27888,27889,27985,28017,28032,28042,28056,28067,28081,28111,28130,28151,28163,28167,28179,28197,28209,28236,28287,28326,28358,28362,28377,28392,28401,28423,28436,28450,28469,28537,28587,28620,28635,28650,28656,28671,28676,28721,28734,28739,28750,28757,28837,28872,28907,28923,28941,28947,28961,28966,28970,28982,28985,28999,29013,29021,29033,29054,29067,29085,29117,29131,29141,29146,29160,29164,29208,29220,29224,29230,29240,29272,29324,29371,29419,29461,29511,29565,29619,29675,29723,29737,29751,29756,29772,29776,29779,29790],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/bytes/reader.go","Base":45080,"Size":3939,"Lines":[0,55,109,159,160,174,175,184,194,200,216,218,219,294,359,376,440,511,532,549,590,640,642,643,707,717,746,775,786,789,824,826,827,893,958,1028,1052,1109,1110,1154,1207,1236,1255,1258,1275,1299,1316,1324,1326,1327,1375,1441,1483,1497,1560,1563,1592,1611,1614,1638,1655,1670,1673,1681,1683,1684,1736,1780,1797,1826,1845,1848,1863,1870,1885,1887,1888,1969,2007,2022,2092,2095,2112,2119,2131,2133,2134,2186,2247,2276,2294,2316,2319,2342,2381,2389,2414,2417,2456,2476,2484,2486,2487,2568,2606,2621,2691,2694,2715,2799,2802,2827,2844,2856,2858,2859,2903,2968,2985,3000,3017,3037,3052,3074,3095,3113,3146,3156,3216,3219,3233,3296,3299,3310,3327,3329,3330,3379,3440,3457,3486,3502,3505,3521,3543,3560,3613,3616,3633,3647,3679,3704,3707,3715,3717,3718,3767,3826,3827,3877],"Infos":null}]}
 