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
GoLinkname�� Implementation�� 	Reference��   �����
go/scannerscanner	bytesfmtgo/tokeniopath/filepathsortstrconvunicodeunicode/utf8��i �� PosPositiongo/tokenMsgErroreposmsgAddp	ErrorListResetLenSwapijLessSortRemoveMultiplesErrwWriterioerrModefileFiledirsrcErrorHandlermodechoffsetrdOffset
lineOffset
insertSemi
ErrorCountnextsScannerpeekIniterroroffserrorfformatargsscanCommentupdateLineInfotextfindLineEndscanIdentifierdigitsbaseinvaliddigsep
scanNumberToken
scanEscapequotescanRune
scanStringscanRawStringskipWhitespaceswitch2tok0tok1switch3ch2tok2switch4tok3ScantoklitFilenameOffsetLineColumnIsValidStringWritensetFileSetnamesizemutexMutex#github.com/gopherjs/gopherjs/nosynclinesinfoslineInfoNamefBaseSize	LineCountAddLine	MergeLinelineSetLinesSetLinesForContentcontent	LineStartAddLineInfofilenameAddLineColumnInfocolumnunpackadjustedpositionPositionFor
Precedenceop	IsLiteral
IsOperator	IsKeywordRWMutexfileslastAddFileIterateReaddecodeencodelockedLockmUnlockwriteLockedreadLockCounterrwRLockRUnlockscanner
PrintErrorScanCommentsnosynctoken           T #  !0     #  '  T A 0P 1 TTTT R	 + /W #  '   ; /Y   A /T    E /T J L   N /T J L     S /T   X /[    /T    h /T   T   nuF  l� x   | C � �� �   ��   �   ��   x�   ��   �   �   �   �   �    �   � ������   ������� ���������� T � � ��   � ��    � �� �� �� x� ��   � �� � '   � �� � � ��  � ��    � �� � � ��   � ��     � ��    � �� � �� �  � ��   �   � �� �     � ��    � ��    � ��    � ��   � �� �� ��  �  � �� �� �� � ��  �  � �� �� �� � �� ��  �  � ��  #� �� � �   �   �   �   T � � #�     � #    u  � /� � x T � �� �� �� ��   �   �   �   ��   ��   ��  ������������������T � � ��    � ��    � ��    � ��    � �� �   � �� �   � �� ��     � �� ��   � �� �  �  � �� � � �   � �� � � � �    �� �  �  � �� /�    � �� /�    � �� � �  � � �  � �� /� �  #   � �� /� �  #    �� /� #  T  � ��    � ��    � ��     � ��     � ��    T  � /�     ����� ��   �   ��   ��  �����  �    �������    �   �    �   T �	 � ��    � �� � � �  �  � �� ��   � �� /�  �  � �� /� ��  � �� /� �  #    �� /� #   � �� ��    � �� ��   � �   ��T � � ��   � ��   �   �   �   �  T � � �    �  ����T � � ��   � ��   � ��   � ��   � �,1=|��������� ����� �����
���
��uu n�A bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  token 	token = $packages["go/token"];
��    		$r = token.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  filepath(	filepath = $packages["path/filepath"];
��    		$r = filepath.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Error�$	Error = $pkg.Error = $newType(0, $kindStruct, "scanner.Error", true, "go/scanner", true, function(Pos_, Msg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Pos = new token.Position.ptr("", 0, 0, 0);
			this.Msg = "";
			return;
		}
		this.Pos = Pos_;
		this.Msg = Msg_;
	});
b	Error.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	Error.init("", [{prop: "Pos", name: "Pos", embedded: false, exported: true, typ: token.Position, tag: ""}, {prop: "Msg", name: "Msg", embedded: false, exported: true, typ: $String, tag: ""}]);
Errorgo/scanner.Errorgo/token.Position  	ErrorListm	ErrorList = $pkg.ErrorList = $newType(12, $kindSlice, "scanner.ErrorList", true, "go/scanner", true, null);
��	ErrorList.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Swap", name: "Swap", pkg: "", typ: $funcType([$Int, $Int], [], false)}, {prop: "Less", name: "Less", pkg: "", typ: $funcType([$Int, $Int], [$Bool], false)}, {prop: "Sort", name: "Sort", pkg: "", typ: $funcType([], [], false)}, {prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}];
	ptrType$1.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([token.Position, $String], [], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "RemoveMultiples", name: "RemoveMultiples", pkg: "", typ: $funcType([], [], false)}];
	ErrorList.init(ptrType$2);
	ErrorListgo/scanner.Errorgo/scanner.ErrorListgo/scanner.ptrType$1go/scanner.ptrType$2go/token.Position  ErrorHandlert	ErrorHandler = $pkg.ErrorHandler = $newType(4, $kindFunc, "scanner.ErrorHandler", true, "go/scanner", true, null);
:	ErrorHandler.init([token.Position, $String], [], false);
ErrorHandlergo/scanner.ErrorHandlergo/token.Position  Scanner�*	Scanner = $pkg.Scanner = $newType(0, $kindStruct, "scanner.Scanner", true, "go/scanner", true, function(file_, dir_, src_, err_, mode_, ch_, offset_, rdOffset_, lineOffset_, insertSemi_, ErrorCount_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.file = ptrType$3.nil;
			this.dir = "";
			this.src = sliceType.nil;
			this.err = $throwNilPointerError;
			this.mode = 0;
			this.ch = 0;
			this.offset = 0;
			this.rdOffset = 0;
			this.lineOffset = 0;
			this.insertSemi = false;
			this.ErrorCount = 0;
			return;
		}
		this.file = file_;
		this.dir = dir_;
		this.src = src_;
		this.err = err_;
		this.mode = mode_;
		this.ch = ch_;
		this.offset = offset_;
		this.rdOffset = rdOffset_;
		this.lineOffset = lineOffset_;
		this.insertSemi = insertSemi_;
		this.ErrorCount = ErrorCount_;
	});
�u	ptrType$4.methods = [{prop: "next", name: "next", pkg: "go/scanner", typ: $funcType([], [], false)}, {prop: "peek", name: "peek", pkg: "go/scanner", typ: $funcType([], [$Uint8], false)}, {prop: "Init", name: "Init", pkg: "", typ: $funcType([ptrType$3, sliceType, ErrorHandler, Mode], [], false)}, {prop: "error", name: "error", pkg: "go/scanner", typ: $funcType([$Int, $String], [], false)}, {prop: "errorf", name: "errorf", pkg: "go/scanner", typ: $funcType([$Int, $String, sliceType$1], [], true)}, {prop: "scanComment", name: "scanComment", pkg: "go/scanner", typ: $funcType([], [$String], false)}, {prop: "updateLineInfo", name: "updateLineInfo", pkg: "go/scanner", typ: $funcType([$Int, $Int, sliceType], [], false)}, {prop: "findLineEnd", name: "findLineEnd", pkg: "go/scanner", typ: $funcType([], [$Bool], false)}, {prop: "scanIdentifier", name: "scanIdentifier", pkg: "go/scanner", typ: $funcType([], [$String], false)}, {prop: "digits", name: "digits", pkg: "go/scanner", typ: $funcType([$Int, ptrType], [$Int], false)}, {prop: "scanNumber", name: "scanNumber", pkg: "go/scanner", typ: $funcType([], [token.Token, $String], false)}, {prop: "scanEscape", name: "scanEscape", pkg: "go/scanner", typ: $funcType([$Int32], [$Bool], false)}, {prop: "scanRune", name: "scanRune", pkg: "go/scanner", typ: $funcType([], [$String], false)}, {prop: "scanString", name: "scanString", pkg: "go/scanner", typ: $funcType([], [$String], false)}, {prop: "scanRawString", name: "scanRawString", pkg: "go/scanner", typ: $funcType([], [$String], false)}, {prop: "skipWhitespace", name: "skipWhitespace", pkg: "go/scanner", typ: $funcType([], [], false)}, {prop: "switch2", name: "switch2", pkg: "go/scanner", typ: $funcType([token.Token, token.Token], [token.Token], false)}, {prop: "switch3", name: "switch3", pkg: "go/scanner", typ: $funcType([token.Token, token.Token, $Int32, token.Token], [token.Token], false)}, {prop: "switch4", name: "switch4", pkg: "go/scanner", typ: $funcType([token.Token, token.Token, $Int32, token.Token, token.Token], [token.Token], false)}, {prop: "Scan", name: "Scan", pkg: "", typ: $funcType([], [token.Pos, token.Token, $String], false)}];
��	Scanner.init("go/scanner", [{prop: "file", name: "file", embedded: false, exported: false, typ: ptrType$3, tag: ""}, {prop: "dir", name: "dir", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "src", name: "src", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: ErrorHandler, tag: ""}, {prop: "mode", name: "mode", embedded: false, exported: false, typ: Mode, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "rdOffset", name: "rdOffset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lineOffset", name: "lineOffset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "insertSemi", name: "insertSemi", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "ErrorCount", name: "ErrorCount", embedded: false, exported: true, typ: $Int, tag: ""}]);
Scannergo/scanner.ErrorHandlergo/scanner.Modego/scanner.Scannergo/scanner.ptrTypego/scanner.ptrType$3go/scanner.ptrType$4go/scanner.sliceTypego/scanner.sliceType$1go/token.Filego/token.Posgo/token.Token  Mode\	Mode = $pkg.Mode = $newType(4, $kindUint, "scanner.Mode", true, "go/scanner", true, null);
Modego/scanner.Mode  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  sliceType$2$	sliceType$2 = $sliceType($String);
sliceType$2  ptrType	ptrType = $ptrType($Int);
ptrType  	ptrType$1"	ptrType$1 = $ptrType(ErrorList);
	ptrType$1go/scanner.ErrorList  	ptrType$2	ptrType$2 = $ptrType(Error);
	ptrType$2go/scanner.Error  	ptrType$3#	ptrType$3 = $ptrType(token.File);
	ptrType$3go/token.File  	ptrType$4 	ptrType$4 = $ptrType(Scanner);
	ptrType$4go/scanner.Scanner  prefixprefix  :  $6		prefix = (new sliceType($stringToBytes("line ")));
prefixgo/scanner.prefixgo/scanner.sliceType (go/scanner.Error).Error ��	Error.ptr.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  		/* */ if (!(e.Pos.Filename === "") || e.Pos.IsValid()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(e.Pos.Filename === "") || e.Pos.IsValid()) { */ case 1:
  �			_r = $clone(e.Pos, token.Position).String(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r + ": " + e.Msg;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �		$s = -1; return e.Msg;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Error.ptr.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Errorgo/scanner.Errorgo/token.Position (*go/scanner.ErrorList).Add ��	$ptrType(ErrorList).prototype.Add = function(pos, msg) {
		var msg, p, pos;
		p = this;
  �		p.$set($append(p.$get(), new Error.ptr($clone(pos, token.Position), msg)));
    	};
	ErrorListgo/scanner.Errorgo/scanner.ErrorListgo/token.Position (*go/scanner.ErrorList).Reset ~	$ptrType(ErrorList).prototype.Reset = function() {
		var p;
		p = this;
  d		p.$set($subslice((p.$get()), 0, 0));
    	};
	ErrorListgo/scanner.ErrorList (go/scanner.ErrorList).Len ��	ErrorList.prototype.Len = function() {
		var p;
		p = this;
  �		return p.$length;
    	};
	$ptrType(ErrorList).prototype.Len = function() { return this.$get().Len(); };
	ErrorListgo/scanner.ErrorList (go/scanner.ErrorList).Swap ��	ErrorList.prototype.Swap = function(i, j) {
		var _tmp, _tmp$1, i, j, p;
		p = this;
  �		_tmp = ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]);
		_tmp$1 = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]);
		((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i] = _tmp);
		((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j] = _tmp$1);
    	};
	$ptrType(ErrorList).prototype.Swap = function(i, j) { return this.$get().Swap(i, j); };
	ErrorListgo/scanner.ErrorList (go/scanner.ErrorList).Less ��	ErrorList.prototype.Less = function(i, j) {
		var e, f, i, j, p;
		p = this;
  ?		e = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]).Pos;
  O		f = ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]).Pos;
    		if (!(e.Filename === f.Filename)) {
  !			return e.Filename < f.Filename;
    		}
    		if (!((e.Line === f.Line))) {
  \			return e.Line < f.Line;
    		}
    		if (!((e.Column === f.Column))) {
  �			return e.Column < f.Column;
    		}
  �		return ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]).Msg < ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]).Msg;
    	};
	$ptrType(ErrorList).prototype.Less = function(i, j) { return this.$get().Less(i, j); };
	ErrorListgo/scanner.ErrorList (go/scanner.ErrorList).Sort �w	ErrorList.prototype.Sort = function() {
		var p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		$r = sort.Sort(p); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ErrorList.prototype.Sort }; } $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(ErrorList).prototype.Sort = function() { return this.$get().Sort(); };
	ErrorListgo/scanner.ErrorList	sort.Sort '(*go/scanner.ErrorList).RemoveMultiples ��	$ptrType(ErrorList).prototype.RemoveMultiples = function() {
		var _i, _ref, e, i, last, p, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; e = $f.e; i = $f.i; last = $f.last; p = $f.p; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  		$r = sort.Sort(p); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		last = new token.Position.ptr("", 0, 0, 0);
  d		i = 0;
  l		_ref = p.$get();
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!(e.Pos.Filename === last.Filename) || !((e.Pos.Line === last.Line))) {
  �				token.Position.copy(last, e.Pos);
  �				(x = p.$get(), ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = e));
  �				i = i + (1) >> 0;
    			}
    			_i++;
		}
  �		p.$set($subslice((p.$get()), 0, i));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: $ptrType(ErrorList).prototype.RemoveMultiples }; } $f._i = _i; $f._ref = _ref; $f.e = e; $f.i = i; $f.last = last; $f.p = p; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ErrorListgo/scanner.ErrorListgo/token.Position	sort.Sort (go/scanner.ErrorList).Error �g	ErrorList.prototype.Error = function() {
		var $24r, $24r$1, _1, _r, _r$1, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = p.$length;
  	k			/* */ if (_1 === (0)) { $s = 2; continue; }
			/* */ if (_1 === (1)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_1 === (0)) { */ case 2:
  	u				$s = -1; return "no errors";
    			/* } else if (_1 === (1)) { */ case 3:
  	�				_r = $clone((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]), Error).Error(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
    		case 1:
  	�		_r$1 = fmt.Sprintf("%s (and %d more errors)", new sliceType$1([(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]), new $Int((p.$length - 1 >> 0))])); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 8; case 8: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ErrorList.prototype.Error }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(ErrorList).prototype.Error = function() { return this.$get().Error(); };
	ErrorListfmt.Sprintfgo/scanner.Errorgo/scanner.ErrorListgo/scanner.sliceType$1 (go/scanner.ErrorList).Err ��	ErrorList.prototype.Err = function() {
		var p;
		p = this;
    		if (p.$length === 0) {
  
�			return $ifaceNil;
    		}
  
�		return p;
    	};
	$ptrType(ErrorList).prototype.Err = function() { return this.$get().Err(); };
	ErrorListgo/scanner.ErrorList go/scanner.PrintError
go/scanner
PrintError 
PrintError�	PrintError = function(w, err) {
		var _i, _r, _r$1, _ref, _tuple, e, err, list, ok, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tuple = $f._tuple; e = $f.e; err = $f.err; list = $f.list; ok = $f.ok; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  y		_tuple = $assertType(err, ErrorList, true);
		list = _tuple[0];
		ok = _tuple[1];
  v		/* */ if (ok) { $s = 1; continue; }
		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok) { */ case 1:
  �			_ref = list;
			_i = 0;
			/* while (true) { */ case 4:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 5; continue; }
				e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �				_r = fmt.Fprintf(w, "%s\n", new sliceType$1([e])); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r;
    				_i++;
			$s = 4; continue;
			case 5:
    			$s = 3; continue;
    		/* } else if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			_r$1 = fmt.Fprintf(w, "%s\n", new sliceType$1([err])); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: PrintError }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tuple = _tuple; $f.e = e; $f.err = err; $f.list = list; $f.ok = ok; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.PrintError = PrintError;

PrintErrorfmt.Fprintfgo/scanner.ErrorListgo/scanner.PrintErrorgo/scanner.sliceType$1 (*go/scanner.Scanner).next �
�	Scanner.ptr.prototype.next = function() {
		var _tmp, _tmp$1, _tuple, r, s, w, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; r = $f.r; s = $f.s; w = $f.w; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  :		/* */ if (s.rdOffset < s.src.$length) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.rdOffset < s.src.$length) { */ case 1:
  Y			s.offset = s.rdOffset;
    			if (s.ch === 10) {
  �				s.lineOffset = s.offset;
  �				s.file.AddLine(s.offset);
    			}
  �			_tmp = (((x = s.src, x$1 = s.rdOffset, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])) >> 0));
			_tmp$1 = 1;
			r = _tmp;
			w = _tmp$1;
  �				/* */ if ((r === 0)) { $s = 5; continue; }
				/* */ if (r >= 128) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if ((r === 0)) { */ case 5:
   					$r = s.error(s.offset, "illegal character NUL"); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 7; continue;
    				/* } else if (r >= 128) { */ case 6:
  Y					_tuple = utf8.DecodeRune($subslice(s.src, s.rdOffset));
					r = _tuple[0];
					w = _tuple[1];
  �					/* */ if ((r === 65533) && (w === 1)) { $s = 9; continue; }
					/* */ if ((r === 65279) && s.offset > 0) { $s = 10; continue; }
					/* */ $s = 11; continue;
    					/* if ((r === 65533) && (w === 1)) { */ case 9:
  �						$r = s.error(s.offset, "illegal UTF-8 encoding"); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 11; continue;
    					/* } else if ((r === 65279) && s.offset > 0) { */ case 10:
  						$r = s.error(s.offset, "illegal byte order mark"); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 11:
    				/* } */ case 7:
    			case 4:
  >			s.rdOffset = s.rdOffset + (w) >> 0;
  P			s.ch = r;
    			$s = 3; continue;
		/* } else { */ case 2:
  e			s.offset = s.src.$length;
    			if (s.ch === 10) {
  �				s.lineOffset = s.offset;
  �				s.file.AddLine(s.offset);
    			}
  �			s.ch = -1;
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.next }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.r = r; $f.s = s; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.next = function() { return this.$val.next(); };
Scannernext~go/scanner.Scannergo/scanner.error~unicode/utf8.DecodeRune (*go/scanner.Scanner).peek �z	Scanner.ptr.prototype.peek = function() {
		var s, x, x$1;
		s = this;
    		if (s.rdOffset < s.src.$length) {
  �			return (x = s.src, x$1 = s.rdOffset, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		}
  �		return 0;
    	};
	Scanner.prototype.peek = function() { return this.$val.peek(); };
Scannerpeek~go/scanner.Scanner (*go/scanner.Scanner).Init �~	Scanner.ptr.prototype.Init = function(file, src, err, mode) {
		var _r, _tuple, err, file, mode, s, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; file = $f.file; mode = $f.mode; s = $f.s; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  |		/* */ if (!((file.Size() === src.$length))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((file.Size() === src.$length))) { */ case 1:
  �			_r = fmt.Sprintf("file size (%d) does not match src len (%d)", new sliceType$1([new $Int(file.Size()), new $Int(src.$length)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  �		s.file = file;
  		_tuple = filepath.Split(file.Name());
		s.dir = _tuple[0];
  .		s.src = src;
  ;		s.err = err;
  H		s.mode = mode;
  X		s.ch = 32;
  d		s.offset = 0;
  r		s.rdOffset = 0;
  �		s.lineOffset = 0;
  �		s.insertSemi = false;
  �		s.ErrorCount = 0;
  �		$r = s.next(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		/* */ if (s.ch === 65279) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (s.ch === 65279) { */ case 5:
  �			$r = s.next(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 6:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Init }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.file = file; $f.mode = mode; $f.s = s; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Init = function(file, src, err, mode) { return this.$val.Init(file, src, err, mode); };
Scannerfmt.Sprintfgo/scanner.Scannergo/scanner.next~go/scanner.sliceType$1path/filepath.Split (*go/scanner.Scanner).error �3	Scanner.ptr.prototype.error = function(offs, msg) {
		var _r, _r$1, msg, offs, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; msg = $f.msg; offs = $f.offs; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  :		/* */ if (!(s.err === $throwNilPointerError)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(s.err === $throwNilPointerError)) { */ case 1:
  N			_r = s.file.Pos(offs); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r$1 = s.file.Position(_r); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$r = s.err($clone(_r$1, token.Position), msg); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
  �		s.ErrorCount = s.ErrorCount + (1) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.error }; } $f._r = _r; $f._r$1 = _r$1; $f.msg = msg; $f.offs = offs; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.error = function(offs, msg) { return this.$val.error(offs, msg); };
Scannererror~go/scanner.Scannergo/token.Position (*go/scanner.Scanner).errorf �M	Scanner.ptr.prototype.errorf = function(offs, format, args) {
		var _arg, _arg$1, _r, args, format, offs, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; args = $f.args; format = $f.format; offs = $f.offs; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �		_arg = offs;
		_r = fmt.Sprintf(format, args); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = _r;
		$r = s.error(_arg, _arg$1); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.errorf }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f.args = args; $f.format = format; $f.offs = offs; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.errorf = function(offs, format, args) { return this.$val.errorf(offs, format, args); };
Scannererrorf~fmt.Sprintfgo/scanner.Scannergo/scanner.error~ !(*go/scanner.Scanner).scanComment ��	Scanner.ptr.prototype.scanComment = function() {
		var ch, lit, next, numCR, offs, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; ch = $f.ch; lit = $f.lit; next = $f.next; numCR = $f.numCR; offs = $f.offs; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  r		offs = s.offset - 1 >> 0;
  �		next = -1;
  		numCR = 0;
  		/* */ if (s.ch === 47) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.ch === 47) { */ case 1:
  q			$r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  |			/* while (true) { */ case 4:
				/* if (!(!((s.ch === 10)) && s.ch >= 0)) { break; } */ if(!(!((s.ch === 10)) && s.ch >= 0)) { $s = 5; continue; }
    				if (s.ch === 13) {
  �					numCR = numCR + (1) >> 0;
    				}
  �				$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 4; continue;
			case 5:
   			next = s.offset;
    			if (s.ch === 10) {
   D				next = next + (1) >> 0;
    			}
   Q			/* goto exit */ $s = 7; continue;
    		/* } */ case 2:
   u		$r = s.next(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
   		/* while (true) { */ case 9:
			/* if (!(s.ch >= 0)) { break; } */ if(!(s.ch >= 0)) { $s = 10; continue; }
   �			ch = s.ch;
    			if (ch === 13) {
   �				numCR = numCR + (1) >> 0;
    			}
   �			$r = s.next(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
   �			/* */ if ((ch === 42) && (s.ch === 47)) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if ((ch === 42) && (s.ch === 47)) { */ case 12:
   �				$r = s.next(); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
   �				next = s.offset;
  !
				/* goto exit */ $s = 7; continue;
    			/* } */ case 13:
    		$s = 9; continue;
		case 10:
  !		$r = s.error(offs, "comment not terminated"); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  !F		/* exit: */ case 7:
  !M		lit = $subslice(s.src, offs, s.offset);
    		if (numCR > 0 && lit.$length >= 2 && ((1 >= lit.$length ? ($throwRuntimeError("index out of range"), undefined) : lit.$array[lit.$offset + 1]) === 47) && ((x = lit.$length - 1 >> 0, ((x < 0 || x >= lit.$length) ? ($throwRuntimeError("index out of range"), undefined) : lit.$array[lit.$offset + x])) === 13)) {
  "�			lit = $subslice(lit, 0, (lit.$length - 1 >> 0));
  "�			numCR = numCR - (1) >> 0;
    		}
  #A		/* */ if (next >= 0 && (((1 >= lit.$length ? ($throwRuntimeError("index out of range"), undefined) : lit.$array[lit.$offset + 1]) === 42) || (offs === s.lineOffset)) && bytes.HasPrefix($subslice(lit, 2), prefix)) { $s = 16; continue; }
		/* */ $s = 17; continue;
    		/* if (next >= 0 && (((1 >= lit.$length ? ($throwRuntimeError("index out of range"), undefined) : lit.$array[lit.$offset + 1]) === 42) || (offs === s.lineOffset)) && bytes.HasPrefix($subslice(lit, 2), prefix)) { */ case 16:
  #�			$r = s.updateLineInfo(next, offs, lit); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 17:
    		if (numCR > 0) {
  #�			lit = stripCR(lit, (1 >= lit.$length ? ($throwRuntimeError("index out of range"), undefined) : lit.$array[lit.$offset + 1]) === 42);
    		}
  $		$s = -1; return ($bytesToString(lit));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanComment }; } $f.ch = ch; $f.lit = lit; $f.next = next; $f.numCR = numCR; $f.offs = offs; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanComment = function() { return this.$val.scanComment(); };
ScannerscanComment~bytes.HasPrefixgo/scanner.Scannergo/scanner.error~go/scanner.next~go/scanner.prefixgo/scanner.stripCRgo/scanner.updateLineInfo~ $(*go/scanner.Scanner).updateLineInfo �`	Scanner.ptr.prototype.updateLineInfo = function(next, offs, text) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, col, filename, i, i2, line, n, n2, next, offs, ok, ok2, s, text, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; col = $f.col; filename = $f.filename; i = $f.i; i2 = $f.i2; line = $f.line; n = $f.n; n2 = $f.n2; next = $f.next; offs = $f.offs; ok = $f.ok; ok2 = $f.ok2; s = $f.s; text = $f.text; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
    		if ((1 >= text.$length ? ($throwRuntimeError("index out of range"), undefined) : text.$array[text.$offset + 1]) === 42) {
  %y			text = $subslice(text, 0, (text.$length - 2 >> 0));
    		}
  %�		text = $subslice(text, 7);
  %�		offs = offs + (7) >> 0;
  %�		_tuple = trailingDigits(text);
		i = _tuple[0];
		n = _tuple[1];
		ok = _tuple[2];
    		if (i === 0) {
  &'			$s = -1; return;
    		}
  &^		/* */ if (!ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok) { */ case 1:
  &�			$r = s.error(offs + i >> 0, "invalid line number: " + ($bytesToString($subslice(text, i)))); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  &�			$s = -1; return;
    		/* } */ case 2:
  &�		_tmp = 0;
		_tmp$1 = 0;
		line = _tmp;
		col = _tmp$1;
  &�		_tuple$1 = trailingDigits($subslice(text, 0, (i - 1 >> 0)));
		i2 = _tuple$1[0];
		n2 = _tuple$1[1];
		ok2 = _tuple$1[2];
  '#		/* */ if (ok2) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (ok2) { */ case 4:
  'I			_tmp$2 = i2;
			_tmp$3 = i;
			i = _tmp$2;
			i2 = _tmp$3;
  'Y			_tmp$4 = n2;
			_tmp$5 = n;
			line = _tmp$4;
			col = _tmp$5;
  'm			/* */ if (col === 0) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (col === 0) { */ case 7:
  '~				$r = s.error(offs + i2 >> 0, "invalid column number: " + ($bytesToString($subslice(text, i2)))); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  '�				$s = -1; return;
    			/* } */ case 8:
  '�			text = $subslice(text, 0, (i2 - 1 >> 0));
    			$s = 6; continue;
		/* } else { */ case 5:
  (			line = n;
    		/* } */ case 6:
  ("		/* */ if (line === 0) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (line === 0) { */ case 10:
  (3			$r = s.error(offs + i >> 0, "invalid line number: " + ($bytesToString($subslice(text, i)))); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  (o			$s = -1; return;
    		/* } */ case 11:
  (�		filename = ($bytesToString($subslice(text, 0, (i - 1 >> 0))));
  )7		/* */ if (filename === "" && ok2) { $s = 13; continue; }
		/* */ if (!(filename === "")) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if (filename === "" && ok2) { */ case 13:
  )T			_r = s.file.Pos(offs); /* */ $s = 16; case 16: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r$1 = s.file.Position(_r); /* */ $s = 17; case 17: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			filename = _r$1.Filename;
    			$s = 15; continue;
    		/* } else if (!(filename === "")) { */ case 14:
  *+			filename = filepath.Clean(filename);
    			if (!filepath.IsAbs(filename)) {
  *s				filename = filepath.Join(new sliceType$2([s.dir, filename]));
    			}
    		/* } */ case 15:
  *�		s.file.AddLineColumnInfo(next, filename, line, col);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.updateLineInfo }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.col = col; $f.filename = filename; $f.i = i; $f.i2 = i2; $f.line = line; $f.n = n; $f.n2 = n2; $f.next = next; $f.offs = offs; $f.ok = ok; $f.ok2 = ok2; $f.s = s; $f.text = text; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.updateLineInfo = function(next, offs, text) { return this.$val.updateLineInfo(next, offs, text); };
ScannerupdateLineInfo~go/scanner.Scannergo/scanner.error~go/scanner.sliceType$2go/scanner.trailingDigitspath/filepath.Cleanpath/filepath.IsAbspath/filepath.Join go/scanner.trailingDigits
go/scannertrailingDigits trailingDigits�	trailingDigits = function(text) {
		var _tuple, err, i, n, text;
  +		i = bytes.LastIndexByte(text, 58);
    		if (i < 0) {
  +{			return [0, 0, false];
    		}
  +�		_tuple = strconv.ParseUint(($bytesToString($subslice(text, (i + 1 >> 0)))), 10, 0);
		n = _tuple[0];
		err = _tuple[1];
  +�		return [i + 1 >> 0, ((n.$low >> 0)), $interfaceIsEqual(err, $ifaceNil)];
    	};
trailingDigitsbytes.LastIndexBytego/scanner.trailingDigitsstrconv.ParseUint !(*go/scanner.Scanner).findLineEnd ��	Scanner.ptr.prototype.findLineEnd = function() {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, ch, s, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; ch = $f.ch; s = $f.s; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		s = [s];
		s[0] = this;
  ,M		$deferred.push([(function(s) { return function $b(offs) {
			var offs, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; offs = $f.offs; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ,�			s[0].ch = 47;
  ,�			s[0].offset = offs;
  ,�			s[0].rdOffset = offs + 1 >> 0;
  ,�			$r = s[0].next(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.offs = offs; $f.$s = $s; $f.$r = $r; return $f;
		}; })(s), [s[0].offset - 1 >> 0]]);
  -[		/* while (true) { */ case 1:
			/* if (!((s[0].ch === 47) || (s[0].ch === 42))) { break; } */ if(!((s[0].ch === 47) || (s[0].ch === 42))) { $s = 2; continue; }
  -~			/* */ if (s[0].ch === 47) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (s[0].ch === 47) { */ case 3:
  -�				$24r = true;
				$s = 5; case 5: return $24r;
    			/* } */ case 4:
  -�			$r = s[0].next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .			/* while (true) { */ case 7:
				/* if (!(s[0].ch >= 0)) { break; } */ if(!(s[0].ch >= 0)) { $s = 8; continue; }
  .				ch = s[0].ch;
  .&				/* */ if (ch === 10) { $s = 9; continue; }
				/* */ $s = 10; continue;
    				/* if (ch === 10) { */ case 9:
  .:					$24r$1 = true;
					$s = 11; case 11: return $24r$1;
    				/* } */ case 10:
  .N				$r = s[0].next(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .Z				/* */ if ((ch === 42) && (s[0].ch === 47)) { $s = 13; continue; }
				/* */ $s = 14; continue;
    				/* if ((ch === 42) && (s[0].ch === 47)) { */ case 13:
  .|					$r = s[0].next(); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .�					/* break; */ $s = 8; continue;
    				/* } */ case 14:
    			$s = 7; continue;
			case 8:
  .�			$r = s[0].skipWhitespace(); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .�			/* */ if (s[0].ch < 0 || (s[0].ch === 10)) { $s = 17; continue; }
			/* */ $s = 18; continue;
    			/* if (s[0].ch < 0 || (s[0].ch === 10)) { */ case 17:
  .�				$24r$2 = true;
				$s = 19; case 19: return $24r$2;
    			/* } */ case 18:
  .�			/* */ if (!((s[0].ch === 47))) { $s = 20; continue; }
			/* */ $s = 21; continue;
    			/* if (!((s[0].ch === 47))) { */ case 20:
  /%				$24r$3 = false;
				$s = 22; case 22: return $24r$3;
    			/* } */ case 21:
  /8			$r = s[0].next(); /* */ $s = 23; case 23: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
  /U		$24r$4 = false;
		$s = 24; case 24: return $24r$4;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return false; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.findLineEnd }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.ch = ch; $f.s = s; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Scanner.prototype.findLineEnd = function() { return this.$val.findLineEnd(); };
ScannerfindLineEnd~go/scanner.Scannergo/scanner.next~go/scanner.skipWhitespace~ go/scanner.isLetter
go/scannerisLetter isLetter��	isLetter = function(ch) {
		var ch;
  /�		return 97 <= lower(ch) && lower(ch) <= 122 || (ch === 95) || ch >= 128 && unicode.IsLetter(ch);
    	};
isLettergo/scanner.isLettergo/scanner.lowerunicode.IsLetter go/scanner.isDigit
go/scannerisDigit isDigitn	isDigit = function(ch) {
		var ch;
  0		return isDecimal(ch) || ch >= 128 && unicode.IsDigit(ch);
    	};
isDigitgo/scanner.isDecimalgo/scanner.isDigitunicode.IsDigit $(*go/scanner.Scanner).scanIdentifier ��	Scanner.ptr.prototype.scanIdentifier = function() {
		var _i, _ref, b, offs, rdOffset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; b = $f.b; offs = $f.offs; rdOffset = $f.rdOffset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  1�		offs = s.offset;
  2�		_ref = $subslice(s.src, s.rdOffset);
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			rdOffset = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (97 <= b && b <= 122 || 65 <= b && b <= 90 || (b === 95) || 48 <= b && b <= 57) {
  3�				_i++;
				/* continue; */ $s = 1; continue;
    			}
  3�			s.rdOffset = s.rdOffset + (rdOffset) >> 0;
  3�			/* */ if (0 < b && b < 128) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (0 < b && b < 128) { */ case 3:
  5				s.ch = ((b >> 0));
  5+				s.offset = s.rdOffset;
  5D				s.rdOffset = s.rdOffset + (1) >> 0;
  5T				/* goto exit */ $s = 5; continue;
    			/* } */ case 4:
  6,			$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  67			/* while (true) { */ case 7:
				/* if (!(isLetter(s.ch) || isDigit(s.ch))) { break; } */ if(!(isLetter(s.ch) || isDigit(s.ch))) { $s = 8; continue; }
  6`				$r = s.next(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 7; continue;
			case 8:
  6o			/* goto exit */ $s = 5; continue;
    		case 2:
  6}		s.offset = s.src.$length;
  6�		s.rdOffset = s.src.$length;
  6�		s.ch = -1;
  6�		/* exit: */ case 5:
  6�		$s = -1; return ($bytesToString($subslice(s.src, offs, s.offset)));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanIdentifier }; } $f._i = _i; $f._ref = _ref; $f.b = b; $f.offs = offs; $f.rdOffset = rdOffset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanIdentifier = function() { return this.$val.scanIdentifier(); };
ScannerscanIdentifier~go/scanner.Scannergo/scanner.isDigitgo/scanner.isLettergo/scanner.next~ go/scanner.digitVal
go/scannerdigitVal digitVal�	digitVal = function(ch) {
		var ch;
    		if (48 <= ch && ch <= 57) {
  7.			return (((ch - 48 >> 0) >> 0));
    		} else if (97 <= lower(ch) && lower(ch) <= 102) {
  7q			return ((((lower(ch) - 97 >> 0) + 10 >> 0) >> 0));
    		}
  7�		return 16;
    	};
digitValgo/scanner.digitValgo/scanner.lower go/scanner.lower
go/scannerlower lowerB	lower = function(ch) {
		var ch;
  7�		return 32 | ch;
    	};
lowergo/scanner.lower go/scanner.isDecimal
go/scanner	isDecimal 	isDecimalS	isDecimal = function(ch) {
		var ch;
  8N		return 48 <= ch && ch <= 57;
    	};
	isDecimalgo/scanner.isDecimal go/scanner.isHex
go/scannerisHex isHexv	isHex = function(ch) {
		var ch;
  8�		return 48 <= ch && ch <= 57 || 97 <= lower(ch) && lower(ch) <= 102;
    	};
isHexgo/scanner.isHexgo/scanner.lower (*go/scanner.Scanner).digits ��	Scanner.ptr.prototype.digits = function(base, invalid) {
		var base, digsep, ds, ds$1, invalid, max, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; base = $f.base; digsep = $f.digsep; ds = $f.ds; ds$1 = $f.ds$1; invalid = $f.invalid; max = $f.max; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		digsep = 0;
		s = this;
  :h		/* */ if (base <= 10) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (base <= 10) { */ case 1:
  :z			max = (((48 + base >> 0) >> 0));
  :�			/* while (true) { */ case 4:
				/* if (!(isDecimal(s.ch) || (s.ch === 95))) { break; } */ if(!(isDecimal(s.ch) || (s.ch === 95))) { $s = 5; continue; }
  :�				ds = 1;
    				if (s.ch === 95) {
  :�					ds = 2;
    				} else if (s.ch >= max && invalid.$get() < 0) {
  ;					invalid.$set(s.offset);
    				}
  ;L				digsep = digsep | (ds);
  ;\				$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 4; continue;
			case 5:
    			$s = 3; continue;
		/* } else { */ case 2:
  ;u			/* while (true) { */ case 7:
				/* if (!(isHex(s.ch) || (s.ch === 95))) { break; } */ if(!(isHex(s.ch) || (s.ch === 95))) { $s = 8; continue; }
  ;�				ds$1 = 1;
    				if (s.ch === 95) {
  ;�					ds$1 = 2;
    				}
  ;�				digsep = digsep | (ds$1);
  ;�				$r = s.next(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 7; continue;
			case 8:
    		/* } */ case 3:
  ;�		$s = -1; return digsep;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.digits }; } $f.base = base; $f.digsep = digsep; $f.ds = ds; $f.ds$1 = ds$1; $f.invalid = invalid; $f.max = max; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.digits = function(base, invalid) { return this.$val.digits(base, invalid); };
Scannerdigits~go/scanner.Scannergo/scanner.isDecimalgo/scanner.isHexgo/scanner.next~  (*go/scanner.Scanner).scanNumber �"	Scanner.ptr.prototype.scanNumber = function() {
		var _1, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, base, digsep, ds, e, i, invalid, lit, offs, prefix$1, s, tok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; base = $f.base; digsep = $f.digsep; ds = $f.ds; e = $f.e; i = $f.i; invalid = $f.invalid; lit = $f.lit; offs = $f.offs; prefix$1 = $f.prefix$1; s = $f.s; tok = $f.tok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		invalid = [invalid];
		s = this;
  <+		offs = s.offset;
  <=		tok = 0;
  <T		base = 10;
  <v		prefix$1 = 0;
  <�		digsep = 0;
  <�		invalid[0] = -1;
  =Q		/* */ if (!((s.ch === 46))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((s.ch === 46))) { */ case 1:
  =d			tok = 5;
  =v			/* */ if (s.ch === 48) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (s.ch === 48) { */ case 3:
  =�				$r = s.next(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_1 = lower(s.ch);
  =�					/* */ if (_1 === (120)) { $s = 7; continue; }
					/* */ if (_1 === (111)) { $s = 8; continue; }
					/* */ if (_1 === (98)) { $s = 9; continue; }
					/* */ $s = 10; continue;
    					/* if (_1 === (120)) { */ case 7:
  =�						$r = s.next(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  =�						_tmp = 16;
						_tmp$1 = 120;
						base = _tmp;
						prefix$1 = _tmp$1;
    						$s = 11; continue;
    					/* } else if (_1 === (111)) { */ case 8:
  =�						$r = s.next(); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  =�						_tmp$2 = 8;
						_tmp$3 = 111;
						base = _tmp$2;
						prefix$1 = _tmp$3;
    						$s = 11; continue;
    					/* } else if (_1 === (98)) { */ case 9:
  >%						$r = s.next(); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  >2						_tmp$4 = 2;
						_tmp$5 = 98;
						base = _tmp$4;
						prefix$1 = _tmp$5;
    						$s = 11; continue;
					/* } else { */ case 10:
  >X						_tmp$6 = 8;
						_tmp$7 = 48;
						base = _tmp$6;
						prefix$1 = _tmp$7;
  >r						digsep = 1;
    					/* } */ case 11:
    				case 6:
    			/* } */ case 4:
  >�			_r = s.digits(base, (invalid.$ptr || (invalid.$ptr = new ptrType(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, invalid)))); /* */ $s = 15; case 15: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			digsep = digsep | (_r);
    		/* } */ case 2:
  >�		/* */ if (s.ch === 46) { $s = 16; continue; }
		/* */ $s = 17; continue;
    		/* if (s.ch === 46) { */ case 16:
  >�			tok = 6;
  >�			/* */ if ((prefix$1 === 111) || (prefix$1 === 98)) { $s = 18; continue; }
			/* */ $s = 19; continue;
    			/* if ((prefix$1 === 111) || (prefix$1 === 98)) { */ case 18:
  ?				$r = s.error(s.offset, "invalid radix point in " + litname(prefix$1)); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 19:
  ?b			$r = s.next(); /* */ $s = 21; case 21: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ?m			_r$1 = s.digits(base, (invalid.$ptr || (invalid.$ptr = new ptrType(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, invalid)))); /* */ $s = 22; case 22: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			digsep = digsep | (_r$1);
    		/* } */ case 17:
  ?�		/* */ if ((digsep & 1) === 0) { $s = 23; continue; }
		/* */ $s = 24; continue;
    		/* if ((digsep & 1) === 0) { */ case 23:
  ?�			$r = s.error(s.offset, litname(prefix$1) + " has no digits"); /* */ $s = 25; case 25: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 24:
  ?�		e = lower(s.ch);
  ?�		/* */ if ((e === 101) || (e === 112)) { $s = 26; continue; }
		/* */ if ((prefix$1 === 120) && (tok === 6)) { $s = 27; continue; }
		/* */ $s = 28; continue;
    		/* if ((e === 101) || (e === 112)) { */ case 26:
  @)				/* */ if ((e === 101) && !((prefix$1 === 0)) && !((prefix$1 === 48))) { $s = 30; continue; }
				/* */ if ((e === 112) && !((prefix$1 === 120))) { $s = 31; continue; }
				/* */ $s = 32; continue;
    				/* if ((e === 101) && !((prefix$1 === 0)) && !((prefix$1 === 48))) { */ case 30:
  @[					$r = s.errorf(s.offset, "%q exponent requires decimal mantissa", new sliceType$1([new $Int32(s.ch)])); /* */ $s = 33; case 33: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 32; continue;
    				/* } else if ((e === 112) && !((prefix$1 === 120))) { */ case 31:
  @�					$r = s.errorf(s.offset, "%q exponent requires hexadecimal mantissa", new sliceType$1([new $Int32(s.ch)])); /* */ $s = 34; case 34: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 32:
    			case 29:
  A			$r = s.next(); /* */ $s = 35; case 35: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  A			tok = 6;
  A-			/* */ if ((s.ch === 43) || (s.ch === 45)) { $s = 36; continue; }
			/* */ $s = 37; continue;
    			/* if ((s.ch === 43) || (s.ch === 45)) { */ case 36:
  AP				$r = s.next(); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 37:
  A_			_r$2 = s.digits(10, ptrType.nil); /* */ $s = 39; case 39: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			ds = _r$2;
  Ay			digsep = digsep | (ds);
  A�			/* */ if ((ds & 1) === 0) { $s = 40; continue; }
			/* */ $s = 41; continue;
    			/* if ((ds & 1) === 0) { */ case 40:
  A�				$r = s.error(s.offset, "exponent has no digits"); /* */ $s = 42; case 42: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 41:
    			$s = 28; continue;
    		/* } else if ((prefix$1 === 120) && (tok === 6)) { */ case 27:
  A�			$r = s.error(s.offset, "hexadecimal mantissa requires a 'p' exponent"); /* */ $s = 43; case 43: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 28:
  BS		/* */ if (s.ch === 105) { $s = 44; continue; }
		/* */ $s = 45; continue;
    		/* if (s.ch === 105) { */ case 44:
  Bf			tok = 7;
  By			$r = s.next(); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 45:
  B�		lit = ($bytesToString($subslice(s.src, offs, s.offset)));
  B�		/* */ if ((tok === 5) && invalid[0] >= 0) { $s = 47; continue; }
		/* */ $s = 48; continue;
    		/* if ((tok === 5) && invalid[0] >= 0) { */ case 47:
  B�			$r = s.errorf(invalid[0], "invalid digit %q in %s", new sliceType$1([new $Uint8(lit.charCodeAt((invalid[0] - offs >> 0))), new $String(litname(prefix$1))])); /* */ $s = 49; case 49: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 48:
  C(		/* */ if (!(((digsep & 2) === 0))) { $s = 50; continue; }
		/* */ $s = 51; continue;
    		/* if (!(((digsep & 2) === 0))) { */ case 50:
  C@			i = invalidSep(lit);
  C=			/* */ if (i >= 0) { $s = 52; continue; }
			/* */ $s = 53; continue;
    			/* if (i >= 0) { */ case 52:
  Cb				$r = s.error(offs + i >> 0, "'_' must separate successive digits"); /* */ $s = 54; case 54: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 53:
    		/* } */ case 51:
  C�		$s = -1; return [tok, lit];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanNumber }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f.base = base; $f.digsep = digsep; $f.ds = ds; $f.e = e; $f.i = i; $f.invalid = invalid; $f.lit = lit; $f.offs = offs; $f.prefix$1 = prefix$1; $f.s = s; $f.tok = tok; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanNumber = function() { return this.$val.scanNumber(); };
ScannerscanNumber~
go/scanner.Scannergo/scanner.digits~go/scanner.errorf~go/scanner.error~go/scanner.invalidSepgo/scanner.litnamego/scanner.lowergo/scanner.next~go/scanner.ptrTypego/scanner.sliceType$1 go/scanner.litname
go/scannerlitname litname�U	litname = function(prefix$1) {
		var _1, prefix$1;
    		_1 = prefix$1;
    		if (_1 === (120)) {
  C�			return "hexadecimal literal";
    		} else if ((_1 === (111)) || (_1 === (48))) {
  D%			return "octal literal";
    		} else if (_1 === (98)) {
  DI			return "binary literal";
    		}
  De		return "decimal literal";
    	};
litnamego/scanner.litname go/scanner.invalidSep
go/scanner
invalidSep 
invalidSep�6	invalidSep = function(x) {
		var d, i, p, x, x1;
  D�		x1 = 32;
  E"		d = 46;
  Ei		i = 0;
    		if (x.length >= 2 && (x.charCodeAt(0) === 48)) {
  E�			x1 = lower(((x.charCodeAt(1) >> 0)));
    			if ((x1 === 120) || (x1 === 111) || (x1 === 98)) {
  E�				d = 48;
  F				i = 2;
    			}
    		}
  F,		while (true) {
			if (!(i < x.length)) { break; }
  FF			p = d;
  Fa			d = ((x.charCodeAt(i) >> 0));
    			if ((d === 95)) {
    				if (!((p === 48))) {
  F�					return i;
    				}
    			} else if (isDecimal(d) || (x1 === 120) && isHex(d)) {
  F�				d = 48;
    			} else {
    				if (p === 95) {
  G					return i - 1 >> 0;
    				}
  G				d = 46;
    			}
  F>			i = i + (1) >> 0;
    		}
    		if (d === 95) {
  G=			return x.length - 1 >> 0;
    		}
  GT		return -1;
    	};

invalidSepgo/scanner.invalidSepgo/scanner.isDecimalgo/scanner.isHexgo/scanner.lower  (*go/scanner.Scanner).scanEscape �-	Scanner.ptr.prototype.scanEscape = function(quote) {
		var _1, _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, base, d, max, msg, msg$1, n, offs, quote, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; base = $f.base; d = $f.d; max = $f.max; msg = $f.msg; msg$1 = $f.msg$1; n = $f.n; offs = $f.offs; quote = $f.quote; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  Hq		offs = s.offset;
  H�		n = 0;
  H�		_tmp = 0;
		_tmp$1 = 0;
		base = _tmp;
		max = _tmp$1;
    			_1 = s.ch;
  H�			/* */ if ((_1 === (97)) || (_1 === (98)) || (_1 === (102)) || (_1 === (110)) || (_1 === (114)) || (_1 === (116)) || (_1 === (118)) || (_1 === (92)) || (_1 === (quote))) { $s = 2; continue; }
			/* */ if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) { $s = 3; continue; }
			/* */ if (_1 === (120)) { $s = 4; continue; }
			/* */ if (_1 === (117)) { $s = 5; continue; }
			/* */ if (_1 === (85)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if ((_1 === (97)) || (_1 === (98)) || (_1 === (102)) || (_1 === (110)) || (_1 === (114)) || (_1 === (116)) || (_1 === (118)) || (_1 === (92)) || (_1 === (quote))) { */ case 2:
  H�				$r = s.next(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  H�				$s = -1; return true;
    			/* } else if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) { */ case 3:
  I2				_tmp$2 = 3;
				_tmp$3 = 8;
				_tmp$4 = 255;
				n = _tmp$2;
				base = _tmp$3;
				max = _tmp$4;
    				$s = 8; continue;
    			/* } else if (_1 === (120)) { */ case 4:
  IX				$r = s.next(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Ic				_tmp$5 = 2;
				_tmp$6 = 16;
				_tmp$7 = 255;
				n = _tmp$5;
				base = _tmp$6;
				max = _tmp$7;
    				$s = 8; continue;
    			/* } else if (_1 === (117)) { */ case 5:
  I�				$r = s.next(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  I�				_tmp$8 = 4;
				_tmp$9 = 16;
				_tmp$10 = 1114111;
				n = _tmp$8;
				base = _tmp$9;
				max = _tmp$10;
    				$s = 8; continue;
    			/* } else if (_1 === (85)) { */ case 6:
  I�				$r = s.next(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  I�				_tmp$11 = 8;
				_tmp$12 = 16;
				_tmp$13 = 1114111;
				n = _tmp$11;
				base = _tmp$12;
				max = _tmp$13;
    				$s = 8; continue;
			/* } else { */ case 7:
  J				msg = "unknown escape sequence";
    				if (s.ch < 0) {
  J9					msg = "escape sequence not terminated";
    				}
  Jf				$r = s.error(offs, msg); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  J{				$s = -1; return false;
    			/* } */ case 8:
    		case 1:
  J�		x = 0;
  J�		/* while (true) { */ case 14:
			/* if (!(n > 0)) { break; } */ if(!(n > 0)) { $s = 15; continue; }
  J�			d = ((digitVal(s.ch) >>> 0));
  J�			/* */ if (d >= base) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (d >= base) { */ case 16:
  J�				_r = fmt.Sprintf("illegal character %#U in escape sequence", new sliceType$1([new $Int32(s.ch)])); /* */ $s = 18; case 18: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				msg$1 = _r;
    				if (s.ch < 0) {
  K3					msg$1 = "escape sequence not terminated";
    				}
  Kb				$r = s.error(s.offset, msg$1); /* */ $s = 19; case 19: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  K|				$s = -1; return false;
    			/* } */ case 17:
  K�			x = ($imul(x, base) >>> 0) + d >>> 0;
  K�			$r = s.next(); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  K�			n = n - (1) >> 0;
    		$s = 14; continue;
		case 15:
  K�		/* */ if (x > max || 55296 <= x && x < 57344) { $s = 21; continue; }
		/* */ $s = 22; continue;
    		/* if (x > max || 55296 <= x && x < 57344) { */ case 21:
  K�			$r = s.error(offs, "escape sequence is invalid Unicode code point"); /* */ $s = 23; case 23: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  L!			$s = -1; return false;
    		/* } */ case 22:
  L3		$s = -1; return true;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanEscape }; } $f._1 = _1; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.base = base; $f.d = d; $f.max = max; $f.msg = msg; $f.msg$1 = msg$1; $f.n = n; $f.offs = offs; $f.quote = quote; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanEscape = function(quote) { return this.$val.scanEscape(quote); };
ScannerscanEscape~fmt.Sprintfgo/scanner.Scannergo/scanner.digitValgo/scanner.error~go/scanner.next~go/scanner.sliceType$1 (*go/scanner.Scanner).scanRune �	k	Scanner.ptr.prototype.scanRune = function() {
		var _r, ch, n, offs, s, valid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; ch = $f.ch; n = $f.n; offs = $f.offs; s = $f.s; valid = $f.valid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  L�		offs = s.offset - 1 >> 0;
  L�		valid = true;
  L�		n = 0;
  L�		/* while (true) { */ case 1:
  L�			ch = s.ch;
  L�			/* */ if ((ch === 10) || ch < 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if ((ch === 10) || ch < 0) { */ case 3:
  M 				/* */ if (valid) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (valid) { */ case 5:
  M/					$r = s.error(offs, "rune literal not terminated"); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  M`					valid = false;
    				/* } */ case 6:
  Mv				/* break; */ $s = 2; continue;
    			/* } */ case 4:
  M�			$r = s.next(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if (ch === 39) {
  M�				/* break; */ $s = 2; continue;
    			}
  M�			n = n + (1) >> 0;
  M�			/* */ if (ch === 92) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (ch === 92) { */ case 9:
  M�				_r = s.scanEscape(39); /* */ $s = 13; case 13: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				/* */ if (!_r) { $s = 11; continue; }
				/* */ $s = 12; continue;
    				/* if (!_r) { */ case 11:
  M�					valid = false;
    				/* } */ case 12:
    			/* } */ case 10:
    		$s = 1; continue;
		case 2:
  N&		/* */ if (valid && !((n === 1))) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if (valid && !((n === 1))) { */ case 14:
  N=			$r = s.error(offs, "illegal rune literal"); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 15:
  Nh		$s = -1; return ($bytesToString($subslice(s.src, offs, s.offset)));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanRune }; } $f._r = _r; $f.ch = ch; $f.n = n; $f.offs = offs; $f.s = s; $f.valid = valid; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanRune = function() { return this.$val.scanRune(); };
Scanner	scanRune~go/scanner.Scannergo/scanner.error~go/scanner.next~go/scanner.scanEscape~  (*go/scanner.Scanner).scanString �t	Scanner.ptr.prototype.scanString = function() {
		var _r, ch, offs, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; ch = $f.ch; offs = $f.offs; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  N�		offs = s.offset - 1 >> 0;
  N�		/* while (true) { */ case 1:
  N�			ch = s.ch;
  O			/* */ if ((ch === 10) || ch < 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if ((ch === 10) || ch < 0) { */ case 3:
  O"				$r = s.error(offs, "string literal not terminated"); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  OT				/* break; */ $s = 2; continue;
    			/* } */ case 4:
  O`			$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if (ch === 34) {
  O}				/* break; */ $s = 2; continue;
    			}
  O�			/* */ if (ch === 92) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (ch === 92) { */ case 7:
  O�				_r = s.scanEscape(34); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r;
    			/* } */ case 8:
    		$s = 1; continue;
		case 2:
  O�		$s = -1; return ($bytesToString($subslice(s.src, offs, s.offset)));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanString }; } $f._r = _r; $f.ch = ch; $f.offs = offs; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanString = function() { return this.$val.scanString(); };
ScannerscanString~go/scanner.Scannergo/scanner.error~go/scanner.next~go/scanner.scanEscape~ go/scanner.stripCR
go/scannerstripCR stripCR��	stripCR = function(b, comment) {
		var _i, _ref, b, c, ch, comment, i, j, x, x$1;
  P		c = $makeSlice(sliceType, b.$length);
  P(		i = 0;
  P0		_ref = b;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			j = _i;
			ch = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!((ch === 13)) || comment && i > 2 && ((x = i - 1 >> 0, ((x < 0 || x >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + x])) === 42) && (j + 1 >> 0) < b.$length && ((x$1 = j + 1 >> 0, ((x$1 < 0 || x$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + x$1])) === 47)) {
  Q�				((i < 0 || i >= c.$length) ? ($throwRuntimeError("index out of range"), undefined) : c.$array[c.$offset + i] = ch);
  Q�				i = i + (1) >> 0;
    			}
    			_i++;
		}
  Q�		return $subslice(c, 0, i);
    	};
stripCRgo/scanner.sliceTypego/scanner.stripCR #(*go/scanner.Scanner).scanRawString �	Scanner.ptr.prototype.scanRawString = function() {
		var ch, hasCR, lit, offs, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; ch = $f.ch; hasCR = $f.hasCR; lit = $f.lit; offs = $f.offs; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  RI		offs = s.offset - 1 >> 0;
  R`		hasCR = false;
  Rp		/* while (true) { */ case 1:
  Rx			ch = s.ch;
  R�			/* */ if (ch < 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ch < 0) { */ case 3:
  R�				$r = s.error(offs, "raw string literal not terminated"); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  R�				/* break; */ $s = 2; continue;
    			/* } */ case 4:
  R�			$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if (ch === 96) {
  R�				/* break; */ $s = 2; continue;
    			}
    			if (ch === 13) {
  S				hasCR = true;
    			}
    		$s = 1; continue;
		case 2:
  S(		lit = $subslice(s.src, offs, s.offset);
    		if (hasCR) {
  SR			lit = stripCR(lit, false);
    		}
  Sq		$s = -1; return ($bytesToString(lit));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanRawString }; } $f.ch = ch; $f.hasCR = hasCR; $f.lit = lit; $f.offs = offs; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanRawString = function() { return this.$val.scanRawString(); };
ScannerscanRawString~go/scanner.Scannergo/scanner.error~go/scanner.next~go/scanner.stripCR $(*go/scanner.Scanner).skipWhitespace ��	Scanner.ptr.prototype.skipWhitespace = function() {
		var s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  S�		/* while (true) { */ case 1:
			/* if (!((s.ch === 32) || (s.ch === 9) || (s.ch === 10) && !s.insertSemi || (s.ch === 13))) { break; } */ if(!((s.ch === 32) || (s.ch === 9) || (s.ch === 10) && !s.insertSemi || (s.ch === 13))) { $s = 2; continue; }
  T			$r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.skipWhitespace }; } $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.skipWhitespace = function() { return this.$val.skipWhitespace(); };
ScannerskipWhitespace~go/scanner.Scannergo/scanner.next~ (*go/scanner.Scanner).switch2 ��	Scanner.ptr.prototype.switch2 = function(tok0, tok1) {
		var s, tok0, tok1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; s = $f.s; tok0 = $f.tok0; tok1 = $f.tok1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  U�		/* */ if (s.ch === 61) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.ch === 61) { */ case 1:
  U�			$r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  U�			$s = -1; return tok1;
    		/* } */ case 2:
  U�		$s = -1; return tok0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.switch2 }; } $f.s = s; $f.tok0 = tok0; $f.tok1 = tok1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.switch2 = function(tok0, tok1) { return this.$val.switch2(tok0, tok1); };
Scannerswitch2~go/scanner.Scannergo/scanner.next~ (*go/scanner.Scanner).switch3 �,	Scanner.ptr.prototype.switch3 = function(tok0, tok1, ch2, tok2) {
		var ch2, s, tok0, tok1, tok2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; ch2 = $f.ch2; s = $f.s; tok0 = $f.tok0; tok1 = $f.tok1; tok2 = $f.tok2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  VB		/* */ if (s.ch === 61) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.ch === 61) { */ case 1:
  VU			$r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  V`			$s = -1; return tok1;
    		/* } */ case 2:
  Vp		/* */ if (s.ch === ch2) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (s.ch === ch2) { */ case 4:
  V�			$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  V�			$s = -1; return tok2;
    		/* } */ case 5:
  V�		$s = -1; return tok0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.switch3 }; } $f.ch2 = ch2; $f.s = s; $f.tok0 = tok0; $f.tok1 = tok1; $f.tok2 = tok2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.switch3 = function(tok0, tok1, ch2, tok2) { return this.$val.switch3(tok0, tok1, ch2, tok2); };
Scannerswitch3~go/scanner.Scannergo/scanner.next~ (*go/scanner.Scanner).switch4 ��	Scanner.ptr.prototype.switch4 = function(tok0, tok1, ch2, tok2, tok3) {
		var ch2, s, tok0, tok1, tok2, tok3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; ch2 = $f.ch2; s = $f.s; tok0 = $f.tok0; tok1 = $f.tok1; tok2 = $f.tok2; tok3 = $f.tok3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  W		/* */ if (s.ch === 61) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.ch === 61) { */ case 1:
  W#			$r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  W.			$s = -1; return tok1;
    		/* } */ case 2:
  W>		/* */ if (s.ch === ch2) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (s.ch === ch2) { */ case 4:
  WQ			$r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  W\			/* */ if (s.ch === 61) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (s.ch === 61) { */ case 7:
  Wp				$r = s.next(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  W|				$s = -1; return tok3;
    			/* } */ case 8:
  W�			$s = -1; return tok2;
    		/* } */ case 5:
  W�		$s = -1; return tok0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.switch4 }; } $f.ch2 = ch2; $f.s = s; $f.tok0 = tok0; $f.tok1 = tok1; $f.tok2 = tok2; $f.tok3 = tok3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.switch4 = function(tok0, tok1, ch2, tok2, tok3) { return this.$val.switch4(tok0, tok1, ch2, tok2, tok3); };
Scannerswitch4~go/scanner.Scannergo/scanner.next~ (*go/scanner.Scanner).Scan �;�	Scanner.ptr.prototype.Scan = function() {
		var _1, _2, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, _v, ch, comment, insertSemi, lit, pos, s, tok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tuple = $f._tuple; _v = $f._v; ch = $f.ch; comment = $f.comment; insertSemi = $f.insertSemi; lit = $f.lit; pos = $f.pos; s = $f.s; tok = $f.tok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = 0;
		tok = 0;
		lit = "";
		s = this;
  ]'		/* scanAgain: */ case 1:
  ]3		$r = s.skipWhitespace(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ]`		_r = s.file.Pos(s.offset); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		pos = _r;
  ]�		insertSemi = false;
  ]�			ch = s.ch;
  ]�			/* */ if (isLetter(ch)) { $s = 5; continue; }
			/* */ if (isDecimal(ch) || (ch === 46) && isDecimal(((s.peek() >> 0)))) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (isLetter(ch)) { */ case 5:
  ]�				_r$1 = s.scanIdentifier(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				lit = _r$1;
    				if (lit.length > 1) {
  ^J					tok = token.Lookup(lit);
    					_1 = tok;
    					if ((_1 === (4)) || (_1 === (61)) || (_1 === (65)) || (_1 === (69)) || (_1 === (80))) {
  ^�						insertSemi = true;
    					}
    				} else {
  ^�					insertSemi = true;
  _					tok = 4;
    				}
    				$s = 8; continue;
    			/* } else if (isDecimal(ch) || (ch === 46) && isDecimal(((s.peek() >> 0)))) { */ case 6:
  _Z				insertSemi = true;
  _n				_r$2 = s.scanNumber(); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				tok = _tuple[0];
				lit = _tuple[1];
    				$s = 8; continue;
			/* } else { */ case 7:
  _�				$r = s.next(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_2 = ch;
  _�					/* */ if (_2 === (-1)) { $s = 13; continue; }
					/* */ if (_2 === (10)) { $s = 14; continue; }
					/* */ if (_2 === (34)) { $s = 15; continue; }
					/* */ if (_2 === (39)) { $s = 16; continue; }
					/* */ if (_2 === (96)) { $s = 17; continue; }
					/* */ if (_2 === (58)) { $s = 18; continue; }
					/* */ if (_2 === (46)) { $s = 19; continue; }
					/* */ if (_2 === (44)) { $s = 20; continue; }
					/* */ if (_2 === (59)) { $s = 21; continue; }
					/* */ if (_2 === (40)) { $s = 22; continue; }
					/* */ if (_2 === (41)) { $s = 23; continue; }
					/* */ if (_2 === (91)) { $s = 24; continue; }
					/* */ if (_2 === (93)) { $s = 25; continue; }
					/* */ if (_2 === (123)) { $s = 26; continue; }
					/* */ if (_2 === (125)) { $s = 27; continue; }
					/* */ if (_2 === (43)) { $s = 28; continue; }
					/* */ if (_2 === (45)) { $s = 29; continue; }
					/* */ if (_2 === (42)) { $s = 30; continue; }
					/* */ if (_2 === (47)) { $s = 31; continue; }
					/* */ if (_2 === (37)) { $s = 32; continue; }
					/* */ if (_2 === (94)) { $s = 33; continue; }
					/* */ if (_2 === (60)) { $s = 34; continue; }
					/* */ if (_2 === (62)) { $s = 35; continue; }
					/* */ if (_2 === (61)) { $s = 36; continue; }
					/* */ if (_2 === (33)) { $s = 37; continue; }
					/* */ if (_2 === (38)) { $s = 38; continue; }
					/* */ if (_2 === (124)) { $s = 39; continue; }
					/* */ $s = 40; continue;
    					/* if (_2 === (-1)) { */ case 13:
    						if (s.insertSemi) {
  _�							s.insertSemi = false;
    							_tmp = pos;
							_tmp$1 = 57;
							_tmp$2 = "\n";
							pos = _tmp;
							tok = _tmp$1;
							lit = _tmp$2;
							$s = -1; return [pos, tok, lit];
    						}
  `:						tok = 1;
    						$s = 41; continue;
    					/* } else if (_2 === (10)) { */ case 14:
  `�						s.insertSemi = false;
    						_tmp$3 = pos;
						_tmp$4 = 57;
						_tmp$5 = "\n";
						pos = _tmp$3;
						tok = _tmp$4;
						lit = _tmp$5;
						$s = -1; return [pos, tok, lit];
    					/* } else if (_2 === (34)) { */ case 15:
  a0						insertSemi = true;
  aE						tok = 9;
  a[						_r$3 = s.scanString(); /* */ $s = 42; case 42: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						lit = _r$3;
    						$s = 41; continue;
    					/* } else if (_2 === (39)) { */ case 16:
  a�						insertSemi = true;
  a�						tok = 8;
  a�						_r$4 = s.scanRune(); /* */ $s = 43; case 43: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
						lit = _r$4;
    						$s = 41; continue;
    					/* } else if (_2 === (96)) { */ case 17:
  a�						insertSemi = true;
  a�						tok = 9;
  a�						_r$5 = s.scanRawString(); /* */ $s = 44; case 44: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
						lit = _r$5;
    						$s = 41; continue;
    					/* } else if (_2 === (58)) { */ case 18:
  b						_r$6 = s.switch2(58, 47); /* */ $s = 45; case 45: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
						tok = _r$6;
    						$s = 41; continue;
    					/* } else if (_2 === (46)) { */ case 19:
  b�						tok = 53;
  b�						/* */ if ((s.ch === 46) && (s.peek() === 46)) { $s = 46; continue; }
						/* */ $s = 47; continue;
    						/* if ((s.ch === 46) && (s.peek() === 46)) { */ case 46:
  b�							$r = s.next(); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  b�							$r = s.next(); /* */ $s = 49; case 49: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c							tok = 48;
    						/* } */ case 47:
    						$s = 41; continue;
    					/* } else if (_2 === (44)) { */ case 20:
  c,						tok = 52;
    						$s = 41; continue;
    					/* } else if (_2 === (59)) { */ case 21:
  cM						tok = 57;
  cf						lit = ";";
    						$s = 41; continue;
    					/* } else if (_2 === (40)) { */ case 22:
  c						tok = 49;
    						$s = 41; continue;
    					/* } else if (_2 === (41)) { */ case 23:
  c�						insertSemi = true;
  c�						tok = 54;
    						$s = 41; continue;
    					/* } else if (_2 === (91)) { */ case 24:
  c�						tok = 50;
    						$s = 41; continue;
    					/* } else if (_2 === (93)) { */ case 25:
  c�						insertSemi = true;
  d						tok = 55;
    						$s = 41; continue;
    					/* } else if (_2 === (123)) { */ case 26:
  d1						tok = 51;
    						$s = 41; continue;
    					/* } else if (_2 === (125)) { */ case 27:
  dS						insertSemi = true;
  dh						tok = 56;
    						$s = 41; continue;
    					/* } else if (_2 === (43)) { */ case 28:
  d�						_r$7 = s.switch3(12, 23, 43, 37); /* */ $s = 50; case 50: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
						tok = _r$7;
    						if (tok === 37) {
  d�							insertSemi = true;
    						}
    						$s = 41; continue;
    					/* } else if (_2 === (45)) { */ case 29:
  e
						_r$8 = s.switch3(13, 24, 45, 38); /* */ $s = 51; case 51: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
						tok = _r$8;
    						if (tok === 38) {
  ed							insertSemi = true;
    						}
    						$s = 41; continue;
    					/* } else if (_2 === (42)) { */ case 30:
  e�						_r$9 = s.switch2(14, 25); /* */ $s = 52; case 52: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
						tok = _r$9;
    						$s = 41; continue;
    					/* } else if (_2 === (47)) { */ case 31:
  e�						/* */ if ((s.ch === 47) || (s.ch === 42)) { $s = 53; continue; }
						/* */ $s = 54; continue;
    						/* if ((s.ch === 47) || (s.ch === 42)) { */ case 53:
  e�							if (!(s.insertSemi)) { _v = false; $s = 58; continue s; }
							_r$10 = s.findLineEnd(); /* */ $s = 59; case 59: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
							_v = _r$10; case 58:
							/* */ if (_v) { $s = 56; continue; }
							/* */ $s = 57; continue;
    							/* if (_v) { */ case 56:
  fZ								s.ch = 47;
  fj								_r$11 = s.file.Offset(pos); /* */ $s = 60; case 60: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
								s.offset = _r$11;
  f�								s.rdOffset = s.offset + 1 >> 0;
  f�								s.insertSemi = false;
    								_tmp$6 = pos;
								_tmp$7 = 57;
								_tmp$8 = "\n";
								pos = _tmp$6;
								tok = _tmp$7;
								lit = _tmp$8;
								$s = -1; return [pos, tok, lit];
    							/* } */ case 57:
  g							_r$12 = s.scanComment(); /* */ $s = 61; case 61: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
							comment = _r$12;
  g%							/* */ if (((s.mode & 1) >>> 0) === 0) { $s = 62; continue; }
							/* */ $s = 63; continue;
    							/* if (((s.mode & 1) >>> 0) === 0) { */ case 62:
  g]								s.insertSemi = false;
  g�								/* goto scanAgain */ $s = 1; continue;
    							/* } */ case 63:
  g�							tok = 2;
  g�							lit = comment;
    							$s = 55; continue;
						/* } else { */ case 54:
  g�							_r$13 = s.switch2(15, 26); /* */ $s = 64; case 64: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
							tok = _r$13;
    						/* } */ case 55:
    						$s = 41; continue;
    					/* } else if (_2 === (37)) { */ case 32:
  h						_r$14 = s.switch2(16, 27); /* */ $s = 65; case 65: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
						tok = _r$14;
    						$s = 41; continue;
    					/* } else if (_2 === (94)) { */ case 33:
  hW						_r$15 = s.switch2(19, 30); /* */ $s = 66; case 66: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
						tok = _r$15;
    						$s = 41; continue;
    					/* } else if (_2 === (60)) { */ case 34:
  h�						/* */ if (s.ch === 45) { $s = 67; continue; }
						/* */ $s = 68; continue;
    						/* if (s.ch === 45) { */ case 67:
  h�							$r = s.next(); /* */ $s = 70; case 70: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  h�							tok = 36;
    							$s = 69; continue;
						/* } else { */ case 68:
  h�							_r$16 = s.switch4(40, 45, 60, 20, 31); /* */ $s = 71; case 71: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
							tok = _r$16;
    						/* } */ case 69:
    						$s = 41; continue;
    					/* } else if (_2 === (62)) { */ case 35:
  i3						_r$17 = s.switch4(41, 46, 62, 21, 32); /* */ $s = 72; case 72: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
						tok = _r$17;
    						$s = 41; continue;
    					/* } else if (_2 === (61)) { */ case 36:
  i�						_r$18 = s.switch2(42, 39); /* */ $s = 73; case 73: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
						tok = _r$18;
    						$s = 41; continue;
    					/* } else if (_2 === (33)) { */ case 37:
  i�						_r$19 = s.switch2(43, 44); /* */ $s = 74; case 74: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
						tok = _r$19;
    						$s = 41; continue;
    					/* } else if (_2 === (38)) { */ case 38:
  i�						/* */ if (s.ch === 94) { $s = 75; continue; }
						/* */ $s = 76; continue;
    						/* if (s.ch === 94) { */ case 75:
  j							$r = s.next(); /* */ $s = 78; case 78: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  j							_r$20 = s.switch2(22, 33); /* */ $s = 79; case 79: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
							tok = _r$20;
    							$s = 77; continue;
						/* } else { */ case 76:
  j^							_r$21 = s.switch3(17, 28, 38, 34); /* */ $s = 80; case 80: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
							tok = _r$21;
    						/* } */ case 77:
    						$s = 41; continue;
    					/* } else if (_2 === (124)) { */ case 39:
  j�						_r$22 = s.switch3(18, 29, 124, 35); /* */ $s = 81; case 81: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
						tok = _r$22;
    						$s = 41; continue;
					/* } else { */ case 40:
  k+						/* */ if (!((ch === 65279))) { $s = 82; continue; }
						/* */ $s = 83; continue;
    						/* if (!((ch === 65279))) { */ case 82:
  k>							_r$23 = s.file.Offset(pos); /* */ $s = 84; case 84: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
							$r = s.errorf(_r$23, "illegal character %#U", new sliceType$1([new $Int32(ch)])); /* */ $s = 85; case 85: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						/* } */ case 83:
  k�						insertSemi = s.insertSemi;
  k�						tok = 0;
  k�						lit = ($encodeRune(ch));
    					/* } */ case 41:
    				case 12:
    			/* } */ case 8:
    		case 4:
    		if (((s.mode & 2) >>> 0) === 0) {
  l			s.insertSemi = insertSemi;
    		}
  l+		$s = -1; return [pos, tok, lit];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Scan }; } $f._1 = _1; $f._2 = _2; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tuple = _tuple; $f._v = _v; $f.ch = ch; $f.comment = comment; $f.insertSemi = insertSemi; $f.lit = lit; $f.pos = pos; $f.s = s; $f.tok = tok; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Scan = function() { return this.$val.Scan(); };
Scannergo/scanner.Scannergo/scanner.errorf~go/scanner.findLineEnd~go/scanner.isDecimalgo/scanner.isLettergo/scanner.next~go/scanner.peek~go/scanner.scanComment~go/scanner.scanIdentifier~go/scanner.scanNumber~go/scanner.scanRawString~go/scanner.scanRune~go/scanner.scanString~go/scanner.skipWhitespace~go/scanner.sliceType$1go/scanner.switch2~go/scanner.switch3~go/scanner.switch4~go/token.Lookup ��{"Base":27701,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/go/scanner/errors.go","Base":1,"Size":3089,"Lines":[0,55,109,159,160,176,177,186,193,205,211,219,221,222,280,338,399,410,413,433,453,465,467,468,509,541,587,625,685,724,727,741,743,744,779,850,853,877,878,954,1012,1047,1049,1050,1093,1140,1141,1185,1237,1299,1300,1341,1357,1373,1447,1520,1535,1566,1599,1602,1625,1650,1653,1680,1709,1712,1740,1742,1743,1810,1877,1887,1890,1918,1932,1934,1935,2019,2059,2073,2146,2154,2178,2244,2260,2275,2282,2286,2289,2305,2307,2308,2356,2392,2409,2418,2439,2448,2470,2473,2536,2538,2539,2594,2636,2669,2687,2700,2703,2713,2715,2716,2787,2858,2887,2890,2932,2970,2997,3026,3030,3054,3084,3087],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/go/scanner/scanner.go","Base":3091,"Size":24609,"Lines":[0,55,109,159,160,220,279,325,328,344,345,354,363,370,382,399,410,421,437,439,440,513,586,660,684,687,742,743,808,869,927,930,952,972,1013,1068,1097,1143,1179,1180,1199,1237,1274,1344,1384,1443,1444,1476,1524,1526,1527,1535,1608,1637,1639,1640,1681,1712,1715,1782,1803,1830,1860,1884,1904,1931,1959,1963,2000,2011,2026,2072,2099,2115,2161,2199,2247,2287,2336,2341,2345,2363,2374,2384,2408,2428,2455,2483,2487,2500,2503,2505,2506,2582,2650,2682,2712,2739,2742,2752,2754,2755,2797,2831,2834,2849,2850,2858,2929,3024,3026,3027,3098,3169,3241,3311,3382,3437,3440,3511,3581,3655,3695,3698,3773,3789,3792,3876,3944,3974,4064,4067,4082,4122,4135,4148,4163,4164,4176,4190,4206,4224,4246,4264,4265,4275,4293,4336,4339,4341,4342,4390,4409,4457,4460,4476,4478,4479,4552,4597,4599,4600,4641,4702,4751,4846,4858,4859,4877,4896,4956,4967,5001,5022,5034,5039,5051,5055,5128,5146,5166,5176,5180,5192,5195,5196,5217,5227,5244,5257,5275,5286,5290,5301,5333,5345,5364,5377,5381,5384,5385,5426,5427,5433,5462,5463,5518,5574,5630,5687,5715,5792,5817,5827,5830,5831,5861,5933,6056,6092,6095,6096,6112,6148,6151,6152,6172,6174,6175,6204,6205,6271,6341,6390,6454,6479,6500,6553,6556,6615,6626,6627,6661,6674,6716,6719,6729,6730,6740,6792,6852,6861,6864,6865,6884,6927,6937,6964,6980,7000,7016,7081,7091,7095,7134,7144,7167,7178,7181,7182,7198,7258,7267,7270,7271,7328,7386,7459,7487,7543,7571,7626,7680,7702,7740,7773,7818,7822,7825,7826,7879,7881,7882,7934,8026,8038,8069,8072,8083,8139,8173,8175,8176,8215,8248,8249,8273,8339,8352,8370,8394,8434,8451,8452,8519,8553,8572,8618,8633,8637,8677,8688,8706,8720,8739,8755,8760,8772,8805,8818,8828,8833,8837,8881,8913,8928,8932,8951,8975,8991,8995,9021,9024,9025,9039,9041,9042,9072,9177,9179,9180,9209,9277,9279,9280,9359,9426,9429,9509,9548,9592,9610,9611,9668,9672,9746,9779,9783,9860,9890,9937,10025,10097,10109,10113,10138,10172,10249,10321,10327,10403,10480,10499,10517,10542,10558,10571,10575,10652,10730,10775,10786,10826,10838,10842,10854,10857,10880,10905,10917,10918,10924,10961,10963,10964,10993,11003,11033,11056,11100,11135,11138,11184,11186,11187,11292,11355,11458,11459,11507,11570,11634,11667,11736,11796,11860,11877,11903,11942,11953,11973,11984,12027,12081,12086,12102,12114,12118,12128,12163,12174,12194,12205,12210,12226,12238,12242,12245,12253,12255,12256,12311,12329,12351,12352,12386,12460,12523,12587,12588,12605,12623,12641,12660,12672,12696,12709,12722,12749,12762,12775,12801,12814,12827,12853,12865,12891,12919,12924,12928,12965,12968,12969,12989,13007,13027,13065,13129,13133,13144,13181,13184,13185,13205,13259,13262,13263,13276,13321,13332,13381,13450,13484,13557,13561,13572,13592,13626,13638,13642,13668,13683,13700,13747,13751,13800,13868,13871,13872,13887,13905,13924,13935,13938,13939,13976,14015,14097,14100,14120,14156,14214,14218,14221,14222,14239,14241,14242,14277,14294,14305,14336,14352,14377,14388,14414,14417,14443,14445,14446,14522,14554,14606,14677,14685,14686,14717,14750,14775,14818,14829,14838,14842,14845,14846,14872,14897,14924,14941,14952,14969,14986,14999,15004,15050,15061,15072,15089,15106,15111,15122,15126,15129,15144,15164,15167,15168,15179,15181,15182,15249,15320,15385,15405,15453,15471,15472,15483,15505,15520,15574,15585,15599,15645,15672,15683,15694,15722,15733,15744,15784,15795,15806,15846,15856,15891,15907,15949,15953,15974,15989,15992,15993,16007,16020,16050,16067,16139,16156,16199,16204,16230,16246,16250,16267,16278,16284,16287,16288,16331,16396,16411,16414,16415,16428,16430,16431,16469,16503,16525,16526,16541,16549,16556,16569,16597,16650,16664,16713,16731,16736,16745,16749,16760,16778,16787,16791,16797,16815,16843,16861,16866,16906,16910,16913,16914,16936,16976,16979,16980,17017,17019,17020,17060,17093,17115,17116,17123,17136,17164,17214,17223,17227,17238,17255,17264,17268,17286,17307,17311,17314,17315,17352,17354,17355,17401,17428,17436,17460,17520,17579,17639,17698,17757,17853,17866,17873,17877,17880,17894,17896,17897,17940,17973,17995,17996,18012,18019,18032,18046,18100,18109,18113,18124,18141,18150,18154,18172,18188,18192,18195,18196,18225,18237,18265,18268,18269,18289,18291,18292,18329,18413,18424,18427,18429,18430,18501,18573,18636,18705,18771,18772,18836,18854,18865,18879,18882,18895,18897,18898,18990,19008,19019,19033,19036,19054,19065,19079,19082,19095,19097,19098,19196,19214,19225,19239,19242,19260,19271,19290,19302,19317,19321,19335,19338,19351,19353,19354,19426,19498,19512,19515,19591,19669,19701,19704,19778,19781,19844,19913,19979,19990,19993,20062,20086,20089,20150,20153,20217,20280,20343,20405,20467,20520,20523,20583,20643,20681,20684,20756,20767,20787,20788,20812,20840,20841,20867,20888,20910,20930,20957,20977,21044,21071,21087,21170,21192,21197,21208,21229,21250,21254,21317,21337,21365,21375,21410,21424,21435,21456,21497,21535,21540,21559,21572,21617,21663,21693,21737,21774,21786,21807,21829,21853,21866,21887,21907,21929,21941,21962,21984,22011,22023,22069,22081,22145,22167,22206,22219,22252,22277,22282,22294,22315,22327,22352,22365,22377,22399,22411,22432,22454,22466,22488,22500,22521,22543,22555,22577,22589,22610,22632,22644,22708,22733,22755,22760,22772,22836,22861,22883,22888,22900,22948,22960,22995,23010,23051,23106,23122,23157,23188,23234,23273,23279,23310,23344,23365,23411,23431,23437,23461,23479,23491,23540,23545,23557,23605,23617,23665,23677,23697,23710,23732,23744,23820,23825,23837,23912,23924,23968,23980,24021,24033,24053,24066,24123,24135,24201,24206,24218,24280,24291,24341,24359,24421,24426,24483,24506,24526,24530,24533,24567,24595,24598,24599,24607],"Infos":null}]}
 