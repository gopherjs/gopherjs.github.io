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
GoLinkname�� Implementation�� 	Reference��   �d��text/scannerscannerbytesfmtioosunicodeunicode/utf8�	(i ��
 FilenameOffsetLineColumnIsValidposPositionStringsrcReaderiosrcBufsrcPossrcEndsrcBufOffsetlinecolumnlastLineLenlastCharLentokBufBufferbytestokPostokEndchErrorsScannermsg
ErrorCountMode
WhitespaceIsIdentRuneiInitnextNextPeekerrorerrorfformatargsisIdentRunescanIdentifierdigitsch0baseinvaliddigsep
scanNumberseenDot
scanDigitsn
scanEscapequote
scanStringscanRawStringscanCharscanCommentScanPos	TokenTexttokReadperrbufofflastReadreadOpBytesbemptyLenCapTruncateResettryGrowByReslicegrowGrowWriteWriteStringReadFromrWriteTowWriter	WriteBytec	WriteRuneReadByteReadRunesize
UnreadRune
UnreadByte	ReadBytesdelim	readSlice
ReadStringscannerCharCommentEOFFloatGoTokensGoWhitespaceIdentInt	RawString	ScanCharsScanComments
ScanFloats
ScanIdentsScanIntsScanRawStringsScanStringsSkipCommentsTokenStringC 	C C C C ��C �  & C C      
         ) ^T G  %a     2 %^   C C @C � C  C C C ��C �@ =D� �� � �  �� �    � �      9�   G�   N   U   \   i   n   u   �   ��   �   �   �   ��   �   �   �
   ��   )^ �������   ��������������T � � �� 9�  �  � ��    � ��    � ��    � �� �   � �� � ��  � �� � �     � ��    � �� � � �� � �  � �� � �       � �� � � �    � �� �    � �� � �  � ��   � ��   � �� �    � ��    � ��  %^ � ��   C � C F  �   D  � �� � � T � ��� ��   �   ��  �������������� �D�����������T � � ��   � 2 ��    � ��     � ��    � ��    � �� �   � ��   � �� �       � �� �    � �� �   � �� �� � �  � �� � � �  � �� �� � �  � �� �� � �  � �� �    � �� � � �  � �� �� � �  � �� �  �  � ��      � ��  � � � � ��    � ��    � �� � i� �  � �� � i� �  � �� � i � T  D  � ��
 � � T �
 � � �������#)C�[�_�c�i�m�q�u�z����2����� ����
DD =���
. bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Position��	Position = $pkg.Position = $newType(0, $kindStruct, "scanner.Position", true, "text/scanner", true, function(Filename_, Offset_, Line_, Column_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Filename = "";
			this.Offset = 0;
			this.Line = 0;
			this.Column = 0;
			return;
		}
		this.Filename = Filename_;
		this.Offset = Offset_;
		this.Line = Line_;
		this.Column = Column_;
	});
��	Position.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	ptrType$1.methods = [{prop: "IsValid", name: "IsValid", pkg: "", typ: $funcType([], [$Bool], false)}];
�u	Position.init("", [{prop: "Filename", name: "Filename", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Column", name: "Column", embedded: false, exported: true, typ: $Int, tag: ""}]);
Positiontext/scanner.Positiontext/scanner.ptrType$1  Scanner��	Scanner = $pkg.Scanner = $newType(0, $kindStruct, "scanner.Scanner", true, "text/scanner", true, function(src_, srcBuf_, srcPos_, srcEnd_, srcBufOffset_, line_, column_, lastLineLen_, lastCharLen_, tokBuf_, tokPos_, tokEnd_, ch_, Error_, ErrorCount_, Mode_, Whitespace_, IsIdentRune_, Position_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.src = $ifaceNil;
			this.srcBuf = arrayType.zero();
			this.srcPos = 0;
			this.srcEnd = 0;
			this.srcBufOffset = 0;
			this.line = 0;
			this.column = 0;
			this.lastLineLen = 0;
			this.lastCharLen = 0;
			this.tokBuf = new bytes.Buffer.ptr(sliceType$1.nil, 0, 0);
			this.tokPos = 0;
			this.tokEnd = 0;
			this.ch = 0;
			this.Error = $throwNilPointerError;
			this.ErrorCount = 0;
			this.Mode = 0;
			this.Whitespace = new $Uint64(0, 0);
			this.IsIdentRune = $throwNilPointerError;
			this.Position = new Position.ptr("", 0, 0, 0);
			return;
		}
		this.src = src_;
		this.srcBuf = srcBuf_;
		this.srcPos = srcPos_;
		this.srcEnd = srcEnd_;
		this.srcBufOffset = srcBufOffset_;
		this.line = line_;
		this.column = column_;
		this.lastLineLen = lastLineLen_;
		this.lastCharLen = lastCharLen_;
		this.tokBuf = tokBuf_;
		this.tokPos = tokPos_;
		this.tokEnd = tokEnd_;
		this.ch = ch_;
		this.Error = Error_;
		this.ErrorCount = ErrorCount_;
		this.Mode = Mode_;
		this.Whitespace = Whitespace_;
		this.IsIdentRune = IsIdentRune_;
		this.Position = Position_;
	});
�O	ptrType$2.methods = [{prop: "Init", name: "Init", pkg: "", typ: $funcType([io.Reader], [ptrType$2], false)}, {prop: "next", name: "next", pkg: "text/scanner", typ: $funcType([], [$Int32], false)}, {prop: "Next", name: "Next", pkg: "", typ: $funcType([], [$Int32], false)}, {prop: "Peek", name: "Peek", pkg: "", typ: $funcType([], [$Int32], false)}, {prop: "error", name: "error", pkg: "text/scanner", typ: $funcType([$String], [], false)}, {prop: "errorf", name: "errorf", pkg: "text/scanner", typ: $funcType([$String, sliceType], [], true)}, {prop: "isIdentRune", name: "isIdentRune", pkg: "text/scanner", typ: $funcType([$Int32, $Int], [$Bool], false)}, {prop: "scanIdentifier", name: "scanIdentifier", pkg: "text/scanner", typ: $funcType([], [$Int32], false)}, {prop: "digits", name: "digits", pkg: "text/scanner", typ: $funcType([$Int32, $Int, ptrType], [$Int32, $Int], false)}, {prop: "scanNumber", name: "scanNumber", pkg: "text/scanner", typ: $funcType([$Int32, $Bool], [$Int32, $Int32], false)}, {prop: "scanDigits", name: "scanDigits", pkg: "text/scanner", typ: $funcType([$Int32, $Int, $Int], [$Int32], false)}, {prop: "scanEscape", name: "scanEscape", pkg: "text/scanner", typ: $funcType([$Int32], [$Int32], false)}, {prop: "scanString", name: "scanString", pkg: "text/scanner", typ: $funcType([$Int32], [$Int], false)}, {prop: "scanRawString", name: "scanRawString", pkg: "text/scanner", typ: $funcType([], [], false)}, {prop: "scanChar", name: "scanChar", pkg: "text/scanner", typ: $funcType([], [], false)}, {prop: "scanComment", name: "scanComment", pkg: "text/scanner", typ: $funcType([$Int32], [$Int32], false)}, {prop: "Scan", name: "Scan", pkg: "", typ: $funcType([], [$Int32], false)}, {prop: "Pos", name: "Pos", pkg: "", typ: $funcType([], [Position], false)}, {prop: "TokenText", name: "TokenText", pkg: "", typ: $funcType([], [$String], false)}];
��	Scanner.init("text/scanner", [{prop: "src", name: "src", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "srcBuf", name: "srcBuf", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "srcPos", name: "srcPos", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "srcEnd", name: "srcEnd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "srcBufOffset", name: "srcBufOffset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "line", name: "line", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "column", name: "column", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastLineLen", name: "lastLineLen", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "lastCharLen", name: "lastCharLen", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "tokBuf", name: "tokBuf", embedded: false, exported: false, typ: bytes.Buffer, tag: ""}, {prop: "tokPos", name: "tokPos", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "tokEnd", name: "tokEnd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "Error", name: "Error", embedded: false, exported: true, typ: funcType, tag: ""}, {prop: "ErrorCount", name: "ErrorCount", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Mode", name: "Mode", embedded: false, exported: true, typ: $Uint, tag: ""}, {prop: "Whitespace", name: "Whitespace", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "IsIdentRune", name: "IsIdentRune", embedded: false, exported: true, typ: funcType$1, tag: ""}, {prop: "Position", name: "Position", embedded: true, exported: true, typ: Position, tag: ""}]);
Scannerbytes.Buffer	io.Readertext/scanner.Positiontext/scanner.Scannertext/scanner.arrayTypetext/scanner.funcTypetext/scanner.funcType$1text/scanner.ptrTypetext/scanner.ptrType$2text/scanner.sliceTypetext/scanner.sliceType$1  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  ptrType	ptrType = $ptrType($Int32);
ptrType  	ptrType$1!	ptrType$1 = $ptrType(Position);
	ptrType$1text/scanner.Position  	arrayType'	arrayType = $arrayType($Uint8, 1025);
	arrayType  	ptrType$2 	ptrType$2 = $ptrType(Scanner);
	ptrType$2text/scanner.Scanner  funcType8	funcType = $funcType([ptrType$2, $String], [], false);
funcTypetext/scanner.ptrType$2  
funcType$19	funcType$1 = $funcType([$Int32, $Int], [$Bool], false);

funcType$1  tokenStringtokenString  ��  o		tokenString = $makeMap($Int32.keyFor, [{ k: -1, v: "EOF" }, { k: -2, v: "Ident" }, { k: -3, v: "Int" }, { k: -4, v: "Float" }, { k: -5, v: "Char" }, { k: -6, v: "String" }, { k: -7, v: "RawString" }, { k: -8, v: "Comment" }]);
tokenStringtext/scanner.tokenString  (*text/scanner.Position).IsValid ��	Position.ptr.prototype.IsValid = function() {
		var pos;
		pos = this;
  		return pos.Line > 0;
    	};
	Position.prototype.IsValid = function() { return this.$val.IsValid(); };
Positiontext/scanner.Position (text/scanner.Position).String ��	Position.ptr.prototype.String = function() {
		var _r, pos, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; pos = $f.pos; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = this;
  \		s = pos.Filename;
    		if (s === "") {
  ~			s = "<input>";
    		}
  �		/* */ if (pos.IsValid()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (pos.IsValid()) { */ case 1:
  �			_r = fmt.Sprintf(":%d:%d", new sliceType([new $Int(pos.Line), new $Int(pos.Column)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			s = s + (_r);
    		/* } */ case 2:
  �		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Position.ptr.prototype.String }; } $f._r = _r; $f.pos = pos; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Position.prototype.String = function() { return this.$val.String(); };
Positionfmt.Sprintftext/scanner.Positiontext/scanner.sliceType text/scanner.TokenStringtext/scannerTokenString TokenString�3	TokenString = function(tok) {
		var $24r, _entry, _r, _tuple, found, s, tok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; _tuple = $f._tuple; found = $f.found; s = $f.s; tok = $f.tok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = (_entry = tokenString[$Int32.keyFor(tok)], _entry !== undefined ? [_entry.v, true] : ["", false]);
		s = _tuple[0];
		found = _tuple[1];
    		if (found) {
  �			$s = -1; return s;
    		}
  �		_r = fmt.Sprintf("%q", new sliceType([new $String(($encodeRune(tok)))])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TokenString }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f._tuple = _tuple; $f.found = found; $f.s = s; $f.tok = tok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TokenString = TokenString;
TokenStringfmt.Sprintftext/scanner.TokenStringtext/scanner.sliceTypetext/scanner.tokenString (*text/scanner.Scanner).Init �A	Scanner.ptr.prototype.Init = function(src) {
		var s, src;
		s = this;
  		s.src = src;
  |		s.srcBuf[0] = 128;
  �		s.srcPos = 0;
  �		s.srcEnd = 0;
  �		s.srcBufOffset = 0;
  �		s.line = 1;
  		s.column = 0;
  		s.lastLineLen = 0;
  "		s.lastCharLen = 0;
  �		s.tokPos = -1;
  �		s.ch = -2;
  �		s.Error = $throwNilPointerError;
  		s.ErrorCount = 0;
  		s.Mode = 1012;
  2		s.Whitespace = new $Uint64(1, 9728);
  O		s.Position.Line = 0;
  y		return s;
    	};
	Scanner.prototype.Init = function(src) { return this.$val.Init(src); };
Scannertext/scanner.Scanner (*text/scanner.Scanner).next �:	Scanner.ptr.prototype.next = function() {
		var _1, _r, _r$1, _r$2, _tmp, _tmp$1, _tuple, _tuple$1, ch, err, i, n, s, width, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; ch = $f.ch; err = $f.err; i = $f.i; n = $f.n; s = $f.s; width = $f.width; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �		_tmp = (((x = s.srcBuf, x$1 = s.srcPos, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) >> 0));
		_tmp$1 = 1;
		ch = _tmp;
		width = _tmp$1;
  �		/* */ if (ch >= 128) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ch >= 128) { */ case 1:
  			/* while (true) { */ case 3:
				/* if (!((s.srcPos + 4 >> 0) > s.srcEnd && !utf8.FullRune($subslice(new sliceType$1(s.srcBuf), s.srcPos, s.srcEnd)))) { break; } */ if(!((s.srcPos + 4 >> 0) > s.srcEnd && !utf8.FullRune($subslice(new sliceType$1(s.srcBuf), s.srcPos, s.srcEnd)))) { $s = 4; continue; }
  �				/* */ if (s.tokPos >= 0) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (s.tokPos >= 0) { */ case 5:
  �					_r = s.tokBuf.Write($subslice(new sliceType$1(s.srcBuf), s.tokPos, s.srcPos)); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					_r;
  					s.tokPos = 0;
    				/* } */ case 6:
  p				$copySlice($subslice(new sliceType$1(s.srcBuf), 0), $subslice(new sliceType$1(s.srcBuf), s.srcPos, s.srcEnd));
  �				s.srcBufOffset = s.srcBufOffset + (s.srcPos) >> 0;
  �				i = s.srcEnd - s.srcPos >> 0;
  �				_r$1 = s.src.Read($subslice(new sliceType$1(s.srcBuf), i, 1024)); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple = _r$1;
				n = _tuple[0];
				err = _tuple[1];
  �				s.srcPos = 0;
   				s.srcEnd = i + n >> 0;
   #				(x$2 = s.srcBuf, x$3 = s.srcEnd, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3] = 128));
   U				/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 9; continue; }
				/* */ $s = 10; continue;
    				/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 9:
   i					/* */ if (!($interfaceIsEqual(err, io.EOF))) { $s = 11; continue; }
					/* */ $s = 12; continue;
    					/* if (!($interfaceIsEqual(err, io.EOF))) { */ case 11:
   �						_r$2 = err.Error(); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						$r = s.error(_r$2); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 12:
    					if (s.srcEnd === 0) {
    						if (s.lastCharLen > 0) {
   �							s.column = s.column + (1) >> 0;
    						}
  !						s.lastCharLen = 0;
  !+						$s = -1; return -1;
    					}
  !�					/* break; */ $s = 4; continue;
    				/* } */ case 10:
    			$s = 3; continue;
			case 4:
  "$			ch = (((x$4 = s.srcBuf, x$5 = s.srcPos, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])) >> 0));
  "D			/* */ if (ch >= 128) { $s = 15; continue; }
			/* */ $s = 16; continue;
    			/* if (ch >= 128) { */ case 15:
  "				_tuple$1 = utf8.DecodeRune($subslice(new sliceType$1(s.srcBuf), s.srcPos, s.srcEnd));
				ch = _tuple$1[0];
				width = _tuple$1[1];
  "�				/* */ if ((ch === 65533) && (width === 1)) { $s = 17; continue; }
				/* */ $s = 18; continue;
    				/* if ((ch === 65533) && (width === 1)) { */ case 17:
  #					s.srcPos = s.srcPos + (width) >> 0;
  #'					s.lastCharLen = width;
  #A					s.column = s.column + (1) >> 0;
  #P					$r = s.error("invalid UTF-8 encoding"); /* */ $s = 19; case 19: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  #v					$s = -1; return ch;
    				/* } */ case 18:
    			/* } */ case 16:
    		/* } */ case 2:
  #�		s.srcPos = s.srcPos + (width) >> 0;
  #�		s.lastCharLen = width;
  #�		s.column = s.column + (1) >> 0;
    			_1 = ch;
  #�			/* */ if (_1 === (0)) { $s = 21; continue; }
			/* */ if (_1 === (10)) { $s = 22; continue; }
			/* */ $s = 23; continue;
    			/* if (_1 === (0)) { */ case 21:
  $'				$r = s.error("invalid character NUL"); /* */ $s = 24; case 24: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 23; continue;
    			/* } else if (_1 === (10)) { */ case 22:
  $V				s.line = s.line + (1) >> 0;
  $a				s.lastLineLen = s.column;
  $|				s.column = 0;
    			/* } */ case 23:
    		case 20:
  $�		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.next }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.ch = ch; $f.err = err; $f.i = i; $f.n = n; $f.s = s; $f.width = width; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.next = function() { return this.$val.next(); };
Scannernext~io.EOFtext/scanner.Scannertext/scanner.error~text/scanner.sliceType$1unicode/utf8.DecodeRuneunicode/utf8.FullRune (*text/scanner.Scanner).Next �;	Scanner.ptr.prototype.Next = function() {
		var _r, _r$1, ch, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; ch = $f.ch; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  %�		s.tokPos = -1;
  &		s.Position.Line = 0;
  &F		_r = s.Peek(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
  &V		/* */ if (!((ch === -1))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((ch === -1))) { */ case 2:
  &g			_r$1 = s.next(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			s.ch = _r$1;
    		/* } */ case 3:
  &{		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Next }; } $f._r = _r; $f._r$1 = _r$1; $f.ch = ch; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Next = function() { return this.$val.Next(); };
Scannertext/scanner.Scannertext/scanner.next~ (*text/scanner.Scanner).Peek ��	Scanner.ptr.prototype.Peek = function() {
		var _r, _r$1, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  'X		/* */ if (s.ch === -2) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (s.ch === -2) { */ case 1:
  '�			_r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			s.ch = _r;
  '�			/* */ if (s.ch === 65279) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (s.ch === 65279) { */ case 4:
  '�				_r$1 = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				s.ch = _r$1;
    			/* } */ case 5:
    		/* } */ case 2:
  '�		$s = -1; return s.ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Peek }; } $f._r = _r; $f._r$1 = _r$1; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Peek = function() { return this.$val.Peek(); };
Scannertext/scanner.Scannertext/scanner.next~ (*text/scanner.Scanner).error �m	Scanner.ptr.prototype.error = function(msg) {
		var _r, msg, pos, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; msg = $f.msg; pos = $f.pos; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  ()		s.tokEnd = s.srcPos - s.lastCharLen >> 0;
  (t		s.ErrorCount = s.ErrorCount + (1) >> 0;
  (�		/* */ if (!(s.Error === $throwNilPointerError)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(s.Error === $throwNilPointerError)) { */ case 1:
  (�			$r = s.Error(s, msg); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  (�			$s = -1; return;
    		/* } */ case 2:
  (�		pos = $clone(s.Position, Position);
    		if (!pos.IsValid()) {
  (�			Position.copy(pos, s.Pos());
    		}
  (�		_r = fmt.Fprintf(os.Stderr, "%s: %s\n", new sliceType([new pos.constructor.elem(pos), new $String(msg)])); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.error }; } $f._r = _r; $f.msg = msg; $f.pos = pos; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.error = function(msg) { return this.$val.error(msg); };
Scannererror~fmt.Fprintf	os.Stderrtext/scanner.Positiontext/scanner.Scannertext/scanner.sliceType (*text/scanner.Scanner).errorf ��	Scanner.ptr.prototype.errorf = function(format, args) {
		var _r, args, format, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; args = $f.args; format = $f.format; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  )b		_r = fmt.Sprintf(format, args); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$r = s.error(_r); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.errorf }; } $f._r = _r; $f.args = args; $f.format = format; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.errorf = function(format, args) { return this.$val.errorf(format, args); };
Scannererrorf~fmt.Sprintftext/scanner.Scannertext/scanner.error~ #(*text/scanner.Scanner).isIdentRune �X	Scanner.ptr.prototype.isIdentRune = function(ch, i) {
		var $24r, _r, ch, i, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; ch = $f.ch; i = $f.i; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  )�		/* */ if (!(s.IsIdentRune === $throwNilPointerError)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(s.IsIdentRune === $throwNilPointerError)) { */ case 1:
  )�			_r = s.IsIdentRune(ch, i); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  )�		$s = -1; return (ch === 95) || unicode.IsLetter(ch) || unicode.IsDigit(ch) && i > 0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.isIdentRune }; } $f.$24r = $24r; $f._r = _r; $f.ch = ch; $f.i = i; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.isIdentRune = function(ch, i) { return this.$val.isIdentRune(ch, i); };
ScannerisIdentRune~text/scanner.Scannerunicode.IsDigitunicode.IsLetter &(*text/scanner.Scanner).scanIdentifier �	Scanner.ptr.prototype.scanIdentifier = function() {
		var _r, _r$1, _r$2, ch, i, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; ch = $f.ch; i = $f.i; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  *�		_r = s.next(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
  *�		i = 1;
		/* while (true) { */ case 2:
			_r$1 = s.isIdentRune(ch, i); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* if (!(_r$1)) { break; } */ if(!(_r$1)) { $s = 3; continue; }
  *�			_r$2 = s.next(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			ch = _r$2;
  *�			i = i + (1) >> 0;
    		$s = 2; continue;
		case 3:
  +		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanIdentifier }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.ch = ch; $f.i = i; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanIdentifier = function() { return this.$val.scanIdentifier(); };
ScannerscanIdentifier~text/scanner.Scannertext/scanner.isIdentRune~text/scanner.next~ text/scanner.lowertext/scannerlower lowerB	lower = function(ch) {
		var ch;
  +/		return 32 | ch;
    	};
lowertext/scanner.lower text/scanner.isDecimaltext/scanner	isDecimal 	isDecimalS	isDecimal = function(ch) {
		var ch;
  +�		return 48 <= ch && ch <= 57;
    	};
	isDecimaltext/scanner.isDecimal text/scanner.isHextext/scannerisHex isHexv	isHex = function(ch) {
		var ch;
  +�		return 48 <= ch && ch <= 57 || 97 <= lower(ch) && lower(ch) <= 102;
    	};
isHextext/scanner.isHextext/scanner.lower (*text/scanner.Scanner).digits ��	Scanner.ptr.prototype.digits = function(ch0, base, invalid) {
		var _r, _r$1, base, ch, ch0, digsep, ds, ds$1, invalid, max, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; base = $f.base; ch = $f.ch; ch0 = $f.ch0; digsep = $f.digsep; ds = $f.ds; ds$1 = $f.ds$1; invalid = $f.invalid; max = $f.max; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ch = 0;
		digsep = 0;
		s = this;
  -�		ch = ch0;
  .		/* */ if (base <= 10) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (base <= 10) { */ case 1:
  .			max = (((48 + base >> 0) >> 0));
  ..			/* while (true) { */ case 4:
				/* if (!(isDecimal(ch) || (ch === 95))) { break; } */ if(!(isDecimal(ch) || (ch === 95))) { $s = 5; continue; }
  .R				ds = 1;
    				if (ch === 95) {
  .p					ds = 2;
    				} else if (ch >= max && (invalid.$get() === 0)) {
  .�					invalid.$set(ch);
    				}
  .�				digsep = digsep | (ds);
  .�				_r = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				ch = _r;
    			$s = 4; continue;
			case 5:
    			$s = 3; continue;
		/* } else { */ case 2:
  .�			/* while (true) { */ case 7:
				/* if (!(isHex(ch) || (ch === 95))) { break; } */ if(!(isHex(ch) || (ch === 95))) { $s = 8; continue; }
  /					ds$1 = 1;
    				if (ch === 95) {
  /'					ds$1 = 2;
    				}
  /6				digsep = digsep | (ds$1);
  /F				_r$1 = s.next(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				ch = _r$1;
    			$s = 7; continue;
			case 8:
    		/* } */ case 3:
  /\		$s = -1; return [ch, digsep];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.digits }; } $f._r = _r; $f._r$1 = _r$1; $f.base = base; $f.ch = ch; $f.ch0 = ch0; $f.digsep = digsep; $f.ds = ds; $f.ds$1 = ds$1; $f.invalid = invalid; $f.max = max; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.digits = function(ch0, base, invalid) { return this.$val.digits(ch0, base, invalid); };
Scannerdigits~text/scanner.Scannertext/scanner.isDecimaltext/scanner.isHextext/scanner.next~ "(*text/scanner.Scanner).scanNumber �&	Scanner.ptr.prototype.scanNumber = function(ch, seenDot) {
		var _1, _r, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, _tuple$2, base, ch, digsep, ds, e, i, invalid, prefix, s, seenDot, tok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; base = $f.base; ch = $f.ch; digsep = $f.digsep; ds = $f.ds; e = $f.e; i = $f.i; invalid = $f.invalid; prefix = $f.prefix; s = $f.s; seenDot = $f.seenDot; tok = $f.tok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		invalid = [invalid];
		s = this;
  /�		base = 10;
  /�		prefix = 0;
  0		digsep = 0;
  0X		invalid[0] = 0;
  0�		tok = 0;
  0�		ds = 0;
  0�		/* */ if (!seenDot) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!seenDot) { */ case 1:
  0�			tok = -3;
  0�			/* */ if (ch === 48) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ch === 48) { */ case 3:
  0�				_r = s.next(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				ch = _r;
    					_1 = lower(ch);
  1					/* */ if (_1 === (120)) { $s = 7; continue; }
					/* */ if (_1 === (111)) { $s = 8; continue; }
					/* */ if (_1 === (98)) { $s = 9; continue; }
					/* */ $s = 10; continue;
    					/* if (_1 === (120)) { */ case 7:
  1						_r$1 = s.next(); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						ch = _r$1;
  1/						_tmp = 16;
						_tmp$1 = 120;
						base = _tmp;
						prefix = _tmp$1;
    						$s = 11; continue;
    					/* } else if (_1 === (111)) { */ case 8:
  1W						_r$2 = s.next(); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						ch = _r$2;
  1i						_tmp$2 = 8;
						_tmp$3 = 111;
						base = _tmp$2;
						prefix = _tmp$3;
    						$s = 11; continue;
    					/* } else if (_1 === (98)) { */ case 9:
  1�						_r$3 = s.next(); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						ch = _r$3;
  1�						_tmp$4 = 2;
						_tmp$5 = 98;
						base = _tmp$4;
						prefix = _tmp$5;
    						$s = 11; continue;
					/* } else { */ case 10:
  1�						_tmp$6 = 8;
						_tmp$7 = 48;
						base = _tmp$6;
						prefix = _tmp$7;
  1�						digsep = 1;
    					/* } */ case 11:
    				case 6:
    			/* } */ case 4:
  2			_r$4 = s.digits(ch, base, (invalid.$ptr || (invalid.$ptr = new ptrType(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, invalid)))); /* */ $s = 15; case 15: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple = _r$4;
			ch = _tuple[0];
			ds = _tuple[1];
  2-			digsep = digsep | (ds);
  2<			/* */ if ((ch === 46) && !((((s.Mode & 16) >>> 0) === 0))) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if ((ch === 46) && !((((s.Mode & 16) >>> 0) === 0))) { */ case 16:
  2h				_r$5 = s.next(); /* */ $s = 18; case 18: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				ch = _r$5;
  2y				seenDot = true;
    			/* } */ case 17:
    		/* } */ case 2:
  2�		/* */ if (seenDot) { $s = 19; continue; }
		/* */ $s = 20; continue;
    		/* if (seenDot) { */ case 19:
  2�			tok = -4;
  2�			/* */ if ((prefix === 111) || (prefix === 98)) { $s = 21; continue; }
			/* */ $s = 22; continue;
    			/* if ((prefix === 111) || (prefix === 98)) { */ case 21:
  2�				$r = s.error("invalid radix point in " + litname(prefix)); /* */ $s = 23; case 23: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 22:
  3$			_r$6 = s.digits(ch, base, (invalid.$ptr || (invalid.$ptr = new ptrType(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, invalid)))); /* */ $s = 24; case 24: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_tuple$1 = _r$6;
			ch = _tuple$1[0];
			ds = _tuple$1[1];
  3L			digsep = digsep | (ds);
    		/* } */ case 20:
  3^		/* */ if ((digsep & 1) === 0) { $s = 25; continue; }
		/* */ $s = 26; continue;
    		/* if ((digsep & 1) === 0) { */ case 25:
  3s			$r = s.error(litname(prefix) + " has no digits"); /* */ $s = 27; case 27: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 26:
  3�		e = lower(ch);
  3�		/* */ if (((e === 101) || (e === 112)) && !((((s.Mode & 16) >>> 0) === 0))) { $s = 28; continue; }
		/* */ if ((prefix === 120) && (tok === -4)) { $s = 29; continue; }
		/* */ $s = 30; continue;
    		/* if (((e === 101) || (e === 112)) && !((((s.Mode & 16) >>> 0) === 0))) { */ case 28:
  4				/* */ if ((e === 101) && !((prefix === 0)) && !((prefix === 48))) { $s = 32; continue; }
				/* */ if ((e === 112) && !((prefix === 120))) { $s = 33; continue; }
				/* */ $s = 34; continue;
    				/* if ((e === 101) && !((prefix === 0)) && !((prefix === 48))) { */ case 32:
  46					$r = s.errorf("%q exponent requires decimal mantissa", new sliceType([new $Int32(ch)])); /* */ $s = 35; case 35: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 34; continue;
    				/* } else if ((e === 112) && !((prefix === 120))) { */ case 33:
  4�					$r = s.errorf("%q exponent requires hexadecimal mantissa", new sliceType([new $Int32(ch)])); /* */ $s = 36; case 36: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 34:
    			case 31:
  4�			_r$7 = s.next(); /* */ $s = 37; case 37: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			ch = _r$7;
  4�			tok = -4;
  4�			/* */ if ((ch === 43) || (ch === 45)) { $s = 38; continue; }
			/* */ $s = 39; continue;
    			/* if ((ch === 43) || (ch === 45)) { */ case 38:
  5				_r$8 = s.next(); /* */ $s = 40; case 40: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				ch = _r$8;
    			/* } */ case 39:
  5"			_r$9 = s.digits(ch, 10, ptrType.nil); /* */ $s = 41; case 41: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_tuple$2 = _r$9;
			ch = _tuple$2[0];
			ds = _tuple$2[1];
  5C			digsep = digsep | (ds);
  5R			/* */ if ((ds & 1) === 0) { $s = 42; continue; }
			/* */ $s = 43; continue;
    			/* if ((ds & 1) === 0) { */ case 42:
  5d				$r = s.error("exponent has no digits"); /* */ $s = 44; case 44: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 43:
    			$s = 30; continue;
    		/* } else if ((prefix === 120) && (tok === -4)) { */ case 29:
  5�			$r = s.error("hexadecimal mantissa requires a 'p' exponent"); /* */ $s = 45; case 45: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 30:
  5�		/* */ if ((tok === -3) && !((invalid[0] === 0))) { $s = 46; continue; }
		/* */ $s = 47; continue;
    		/* if ((tok === -3) && !((invalid[0] === 0))) { */ case 46:
  6			$r = s.errorf("invalid digit %q in %s", new sliceType([new $Int32(invalid[0]), new $String(litname(prefix))])); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 47:
  6X		/* */ if (!(((digsep & 2) === 0))) { $s = 49; continue; }
		/* */ $s = 50; continue;
    		/* if (!(((digsep & 2) === 0))) { */ case 49:
  6m			s.tokEnd = s.srcPos - s.lastCharLen >> 0;
  6�			_r$10 = s.TokenText(); /* */ $s = 51; case 51: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_r$11 = invalidSep(_r$10); /* */ $s = 52; case 52: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			i = _r$11;
  6�			/* */ if (i >= 0) { $s = 53; continue; }
			/* */ $s = 54; continue;
    			/* if (i >= 0) { */ case 53:
  6�				$r = s.error("'_' must separate successive digits"); /* */ $s = 55; case 55: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 54:
    		/* } */ case 50:
  7 		$s = -1; return [tok, ch];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanNumber }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.base = base; $f.ch = ch; $f.digsep = digsep; $f.ds = ds; $f.e = e; $f.i = i; $f.invalid = invalid; $f.prefix = prefix; $f.s = s; $f.seenDot = seenDot; $f.tok = tok; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanNumber = function(ch, seenDot) { return this.$val.scanNumber(ch, seenDot); };
ScannerscanNumber~
text/scanner.Scannertext/scanner.digits~text/scanner.errorf~text/scanner.error~text/scanner.invalidSeptext/scanner.litnametext/scanner.lowertext/scanner.next~text/scanner.ptrTypetext/scanner.sliceType text/scanner.litnametext/scannerlitname litname�`	litname = function(prefix) {
		var _1, prefix;
    		_1 = prefix;
    		if (_1 === (120)) {
  7�			return "hexadecimal literal";
    		} else if ((_1 === (111)) || (_1 === (48))) {
  7�			return "octal literal";
    		} else if (_1 === (98)) {
  7�			return "binary literal";
    		} else {
  7r			return "decimal literal";
    		}
    	};
litnametext/scanner.litname text/scanner.invalidSeptext/scanner
invalidSep 
invalidSep�6	invalidSep = function(x) {
		var d, i, p, x, x1;
  8v		x1 = 32;
  8�		d = 46;
  8�		i = 0;
    		if (x.length >= 2 && (x.charCodeAt(0) === 48)) {
  9;			x1 = lower(((x.charCodeAt(1) >> 0)));
    			if ((x1 === 120) || (x1 === 111) || (x1 === 98)) {
  9�				d = 48;
  9�				i = 2;
    			}
    		}
  9�		while (true) {
			if (!(i < x.length)) { break; }
  9�			p = d;
  9�			d = ((x.charCodeAt(i) >> 0));
    			if ((d === 95)) {
    				if (!((p === 48))) {
  :)					return i;
    				}
    			} else if (isDecimal(d) || (x1 === 120) && isHex(d)) {
  :h				d = 48;
    			} else {
    				if (p === 95) {
  :�					return i - 1 >> 0;
    				}
  :�				d = 46;
    			}
  9�			i = i + (1) >> 0;
    		}
    		if (d === 95) {
  :�			return x.length - 1 >> 0;
    		}
  :�		return -1;
    	};

invalidSeptext/scanner.invalidSeptext/scanner.isDecimaltext/scanner.isHextext/scanner.lower text/scanner.digitValtext/scannerdigitVal digitVal�	digitVal = function(ch) {
		var ch;
    		if (48 <= ch && ch <= 57) {
  ;0			return (((ch - 48 >> 0) >> 0));
    		} else if (97 <= lower(ch) && lower(ch) <= 102) {
  ;s			return ((((lower(ch) - 97 >> 0) + 10 >> 0) >> 0));
    		}
  ;�		return 16;
    	};
digitValtext/scanner.digitValtext/scanner.lower "(*text/scanner.Scanner).scanDigits �	Scanner.ptr.prototype.scanDigits = function(ch, base, n) {
		var _r, base, ch, n, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; base = $f.base; ch = $f.ch; n = $f.n; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  <		/* while (true) { */ case 1:
			/* if (!(n > 0 && digitVal(ch) < base)) { break; } */ if(!(n > 0 && digitVal(ch) < base)) { $s = 2; continue; }
  <(			_r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			ch = _r;
  <8			n = n - (1) >> 0;
    		$s = 1; continue;
		case 2:
  <@		/* */ if (n > 0) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (n > 0) { */ case 4:
  <M			$r = s.error("invalid char escape"); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 5:
  <p		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanDigits }; } $f._r = _r; $f.base = base; $f.ch = ch; $f.n = n; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanDigits = function(ch, base, n) { return this.$val.scanDigits(ch, base, n); };
ScannerscanDigits~text/scanner.Scannertext/scanner.digitValtext/scanner.error~text/scanner.next~ "(*text/scanner.Scanner).scanEscape ��	Scanner.ptr.prototype.scanEscape = function(quote) {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, ch, quote, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; ch = $f.ch; quote = $f.quote; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  <�		_r = s.next(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
    			_1 = ch;
  <�			/* */ if ((_1 === (97)) || (_1 === (98)) || (_1 === (102)) || (_1 === (110)) || (_1 === (114)) || (_1 === (116)) || (_1 === (118)) || (_1 === (92)) || (_1 === (quote))) { $s = 3; continue; }
			/* */ if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) { $s = 4; continue; }
			/* */ if (_1 === (120)) { $s = 5; continue; }
			/* */ if (_1 === (117)) { $s = 6; continue; }
			/* */ if (_1 === (85)) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if ((_1 === (97)) || (_1 === (98)) || (_1 === (102)) || (_1 === (110)) || (_1 === (114)) || (_1 === (116)) || (_1 === (118)) || (_1 === (92)) || (_1 === (quote))) { */ case 3:
  =1				_r$1 = s.next(); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				ch = _r$1;
    				$s = 9; continue;
    			/* } else if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) { */ case 4:
  =o				_r$2 = s.scanDigits(ch, 8, 3); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				ch = _r$2;
    				$s = 9; continue;
    			/* } else if (_1 === (120)) { */ case 5:
  =�				_r$3 = s.next(); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$4 = s.scanDigits(_r$3, 16, 2); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				ch = _r$4;
    				$s = 9; continue;
    			/* } else if (_1 === (117)) { */ case 6:
  =�				_r$5 = s.next(); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_r$6 = s.scanDigits(_r$5, 16, 4); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				ch = _r$6;
    				$s = 9; continue;
    			/* } else if (_1 === (85)) { */ case 7:
  =�				_r$7 = s.next(); /* */ $s = 16; case 16: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_r$8 = s.scanDigits(_r$7, 16, 8); /* */ $s = 17; case 17: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				ch = _r$8;
    				$s = 9; continue;
			/* } else { */ case 8:
  >'				$r = s.error("invalid char escape"); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 9:
    		case 2:
  >J		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanEscape }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f.ch = ch; $f.quote = quote; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanEscape = function(quote) { return this.$val.scanEscape(quote); };
ScannerscanEscape~text/scanner.Scannertext/scanner.error~text/scanner.next~text/scanner.scanDigits~ "(*text/scanner.Scanner).scanString ��	Scanner.ptr.prototype.scanString = function(quote) {
		var _r, _r$1, _r$2, ch, n, quote, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; ch = $f.ch; n = $f.n; quote = $f.quote; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		s = this;
  >�		_r = s.next(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
  >�		/* while (true) { */ case 2:
			/* if (!(!((ch === quote)))) { break; } */ if(!(!((ch === quote)))) { $s = 3; continue; }
  >�			/* */ if ((ch === 10) || ch < 0) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if ((ch === 10) || ch < 0) { */ case 4:
  >�				$r = s.error("literal not terminated"); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ?				$s = -1; return n;
    			/* } */ case 5:
  ?			/* */ if (ch === 92) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (ch === 92) { */ case 7:
  ?/				_r$1 = s.scanEscape(quote); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				ch = _r$1;
    				$s = 9; continue;
			/* } else { */ case 8:
  ?V				_r$2 = s.next(); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				ch = _r$2;
    			/* } */ case 9:
  ?j			n = n + (1) >> 0;
    		$s = 2; continue;
		case 3:
  ?r		$s = -1; return n;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanString }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.ch = ch; $f.n = n; $f.quote = quote; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanString = function(quote) { return this.$val.scanString(quote); };
ScannerscanString~text/scanner.Scannertext/scanner.error~text/scanner.next~text/scanner.scanEscape~ %(*text/scanner.Scanner).scanRawString �k	Scanner.ptr.prototype.scanRawString = function() {
		var _r, _r$1, ch, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; ch = $f.ch; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  ?�		_r = s.next(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
  ?�		/* while (true) { */ case 2:
			/* if (!(!((ch === 96)))) { break; } */ if(!(!((ch === 96)))) { $s = 3; continue; }
  ?�			/* */ if (ch < 0) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (ch < 0) { */ case 4:
  ?�				$r = s.error("literal not terminated"); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  @				$s = -1; return;
    			/* } */ case 5:
  @ 			_r$1 = s.next(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			ch = _r$1;
    		$s = 2; continue;
		case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanRawString }; } $f._r = _r; $f._r$1 = _r$1; $f.ch = ch; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanRawString = function() { return this.$val.scanRawString(); };
ScannerscanRawString~text/scanner.Scannertext/scanner.error~text/scanner.next~  (*text/scanner.Scanner).scanChar ��	Scanner.ptr.prototype.scanChar = function() {
		var _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  @T		_r = s.scanString(39); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 1))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((_r === 1))) { */ case 1:
  @s			$r = s.error("invalid char literal"); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanChar }; } $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanChar = function() { return this.$val.scanChar(); };
Scanner	scanChar~text/scanner.Scannertext/scanner.error~text/scanner.scanString~ #(*text/scanner.Scanner).scanComment �	�	Scanner.ptr.prototype.scanComment = function(ch) {
		var _r, _r$1, _r$2, _r$3, _r$4, ch, ch0, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; ch = $f.ch; ch0 = $f.ch0; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  @�		/* */ if (ch === 47) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ch === 47) { */ case 1:
  A			_r = s.next(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			ch = _r;
  A3			/* while (true) { */ case 4:
				/* if (!(!((ch === 10)) && ch >= 0)) { break; } */ if(!(!((ch === 10)) && ch >= 0)) { $s = 5; continue; }
  AR				_r$1 = s.next(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				ch = _r$1;
    			$s = 4; continue;
			case 5:
  Af			$s = -1; return ch;
    		/* } */ case 2:
  A�		_r$2 = s.next(); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		ch = _r$2;
  A�		/* while (true) { */ case 8:
  A�			/* */ if (ch < 0) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (ch < 0) { */ case 10:
  A�				$r = s.error("comment not terminated"); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  A�				/* break; */ $s = 9; continue;
    			/* } */ case 11:
  A�			ch0 = ch;
  B				_r$3 = s.next(); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			ch = _r$3;
  B			/* */ if ((ch0 === 42) && (ch === 47)) { $s = 14; continue; }
			/* */ $s = 15; continue;
    			/* if ((ch0 === 42) && (ch === 47)) { */ case 14:
  B9				_r$4 = s.next(); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				ch = _r$4;
  BJ				/* break; */ $s = 9; continue;
    			/* } */ case 15:
    		$s = 8; continue;
		case 9:
  BX		$s = -1; return ch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.scanComment }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.ch = ch; $f.ch0 = ch0; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.scanComment = function(ch) { return this.$val.scanComment(ch); };
ScannerscanComment~text/scanner.Scannertext/scanner.error~text/scanner.next~ (*text/scanner.Scanner).Scan �"�	Scanner.ptr.prototype.Scan = function() {
		var _1, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tuple, _tuple$1, ch, s, tok, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; ch = $f.ch; s = $f.s; tok = $f.tok; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  C�		_r = s.Peek(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		ch = _r;
  D		s.tokPos = -1;
  D		s.Position.Line = 0;
  D&		/* redo: */ case 2:
  DB		/* while (true) { */ case 3:
			/* if (!(!((x = (x$1 = s.Whitespace, x$2 = $shiftLeft64(new $Uint64(0, 1), ((ch >>> 0))), new $Uint64(x$1.$high & x$2.$high, (x$1.$low & x$2.$low) >>> 0)), (x.$high === 0 && x.$low === 0))))) { break; } */ if(!(!((x = (x$1 = s.Whitespace, x$2 = $shiftLeft64(new $Uint64(0, 1), ((ch >>> 0))), new $Uint64(x$1.$high & x$2.$high, (x$1.$low & x$2.$low) >>> 0)), (x.$high === 0 && x.$low === 0))))) { $s = 4; continue; }
  Dj			_r$1 = s.next(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			ch = _r$1;
    		$s = 3; continue;
		case 4:
  D�		s.tokBuf.Reset();
  D�		s.tokPos = s.srcPos - s.lastCharLen >> 0;
  E,		s.Position.Offset = s.srcBufOffset + s.tokPos >> 0;
    		if (s.column > 0) {
  E�			s.Position.Line = s.line;
  E�			s.Position.Column = s.column;
    		} else {
  FI			s.Position.Line = s.line - 1 >> 0;
  F_			s.Position.Column = s.lastLineLen;
    		}
  F�		tok = ch;
  F�			_r$2 = s.isIdentRune(ch, 0); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			/* */ if (_r$2) { $s = 7; continue; }
			/* */ if (isDecimal(ch)) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (_r$2) { */ case 7:
  F�				/* */ if (!((((s.Mode & 4) >>> 0) === 0))) { $s = 12; continue; }
				/* */ $s = 13; continue;
    				/* if (!((((s.Mode & 4) >>> 0) === 0))) { */ case 12:
  F�					tok = -2;
  F�					_r$3 = s.scanIdentifier(); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					ch = _r$3;
    					$s = 14; continue;
				/* } else { */ case 13:
  G					_r$4 = s.next(); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					ch = _r$4;
    				/* } */ case 14:
    				$s = 10; continue;
    			/* } else if (isDecimal(ch)) { */ case 8:
  GF				/* */ if (!((((s.Mode & 24) >>> 0) === 0))) { $s = 17; continue; }
				/* */ $s = 18; continue;
    				/* if (!((((s.Mode & 24) >>> 0) === 0))) { */ case 17:
  Gp					_r$5 = s.scanNumber(ch, false); /* */ $s = 20; case 20: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					_tuple = _r$5;
					tok = _tuple[0];
					ch = _tuple[1];
    					$s = 19; continue;
				/* } else { */ case 18:
  G�					_r$6 = s.next(); /* */ $s = 21; case 21: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					ch = _r$6;
    				/* } */ case 19:
    				$s = 10; continue;
			/* } else { */ case 9:
    					_1 = ch;
  G�					/* */ if (_1 === (-1)) { $s = 23; continue; }
					/* */ if (_1 === (34)) { $s = 24; continue; }
					/* */ if (_1 === (39)) { $s = 25; continue; }
					/* */ if (_1 === (46)) { $s = 26; continue; }
					/* */ if (_1 === (47)) { $s = 27; continue; }
					/* */ if (_1 === (96)) { $s = 28; continue; }
					/* */ $s = 29; continue;
    					/* if (_1 === (-1)) { */ case 23:
  G�						/* break; */ $s = 22; continue;
    						$s = 30; continue;
    					/* } else if (_1 === (34)) { */ case 24:
  G�						/* */ if (!((((s.Mode & 64) >>> 0) === 0))) { $s = 31; continue; }
						/* */ $s = 32; continue;
    						/* if (!((((s.Mode & 64) >>> 0) === 0))) { */ case 31:
  H							_r$7 = s.scanString(34); /* */ $s = 33; case 33: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
							_r$7;
  H%							tok = -6;
    						/* } */ case 32:
  H:						_r$8 = s.next(); /* */ $s = 34; case 34: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
						ch = _r$8;
    						$s = 30; continue;
    					/* } else if (_1 === (39)) { */ case 25:
  HX						/* */ if (!((((s.Mode & 32) >>> 0) === 0))) { $s = 35; continue; }
						/* */ $s = 36; continue;
    						/* if (!((((s.Mode & 32) >>> 0) === 0))) { */ case 35:
  Hw							$r = s.scanChar(); /* */ $s = 37; case 37: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  H�							tok = -5;
    						/* } */ case 36:
  H�						_r$9 = s.next(); /* */ $s = 38; case 38: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
						ch = _r$9;
    						$s = 30; continue;
    					/* } else if (_1 === (46)) { */ case 26:
  H�						_r$10 = s.next(); /* */ $s = 39; case 39: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
						ch = _r$10;
  H�						/* */ if (isDecimal(ch) && !((((s.Mode & 16) >>> 0) === 0))) { $s = 40; continue; }
						/* */ $s = 41; continue;
    						/* if (isDecimal(ch) && !((((s.Mode & 16) >>> 0) === 0))) { */ case 40:
  H�							_r$11 = s.scanNumber(ch, true); /* */ $s = 42; case 42: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
							_tuple$1 = _r$11;
							tok = _tuple$1[0];
							ch = _tuple$1[1];
    						/* } */ case 41:
    						$s = 30; continue;
    					/* } else if (_1 === (47)) { */ case 27:
  I/						_r$12 = s.next(); /* */ $s = 43; case 43: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
						ch = _r$12;
  I@						/* */ if (((ch === 47) || (ch === 42)) && !((((s.Mode & 256) >>> 0) === 0))) { $s = 44; continue; }
						/* */ $s = 45; continue;
    						/* if (((ch === 47) || (ch === 42)) && !((((s.Mode & 256) >>> 0) === 0))) { */ case 44:
  I~							/* */ if (!((((s.Mode & 512) >>> 0) === 0))) { $s = 46; continue; }
							/* */ $s = 47; continue;
    							/* if (!((((s.Mode & 512) >>> 0) === 0))) { */ case 46:
  I�								s.tokPos = -1;
  I�								_r$13 = s.scanComment(ch); /* */ $s = 48; case 48: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
								ch = _r$13;
  I�								/* goto redo */ $s = 2; continue;
    							/* } */ case 47:
  J 							_r$14 = s.scanComment(ch); /* */ $s = 49; case 49: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
							ch = _r$14;
  J							tok = -8;
    						/* } */ case 45:
    						$s = 30; continue;
    					/* } else if (_1 === (96)) { */ case 28:
  J=						/* */ if (!((((s.Mode & 128) >>> 0) === 0))) { $s = 50; continue; }
						/* */ $s = 51; continue;
    						/* if (!((((s.Mode & 128) >>> 0) === 0))) { */ case 50:
  Ja							$r = s.scanRawString(); /* */ $s = 52; case 52: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Jw							tok = -7;
    						/* } */ case 51:
  J�						_r$15 = s.next(); /* */ $s = 53; case 53: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
						ch = _r$15;
    						$s = 30; continue;
					/* } else { */ case 29:
  J�						_r$16 = s.next(); /* */ $s = 54; case 54: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
						ch = _r$16;
    					/* } */ case 30:
    				case 22:
    			/* } */ case 10:
    		case 6:
  J�		s.tokEnd = s.srcPos - s.lastCharLen >> 0;
  J�		s.ch = ch;
  K			$s = -1; return tok;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.Scan }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.ch = ch; $f.s = s; $f.tok = tok; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.Scan = function() { return this.$val.Scan(); };
Scanner
text/scanner.Scannertext/scanner.isDecimaltext/scanner.isIdentRune~text/scanner.next~text/scanner.scanChar~text/scanner.scanComment~text/scanner.scanIdentifier~text/scanner.scanNumber~text/scanner.scanRawString~text/scanner.scanString~ (*text/scanner.Scanner).Pos �I	Scanner.ptr.prototype.Pos = function() {
		var pos, s;
		pos = new Position.ptr("", 0, 0, 0);
		s = this;
  L'		pos.Filename = s.Position.Filename;
  LB		pos.Offset = (s.srcBufOffset + s.srcPos >> 0) - s.lastCharLen >> 0;
    		if (s.column > 0) {
  L�			pos.Line = s.line;
  L�			pos.Column = s.column;
    		} else if (s.lastLineLen > 0) {
  M-			pos.Line = s.line - 1 >> 0;
  ME			pos.Column = s.lastLineLen;
    		} else {
  M�			pos.Line = 1;
  M�			pos.Column = 1;
    		}
  M�		return pos;
    	};
	Scanner.prototype.Pos = function() { return this.$val.Pos(); };
Scannertext/scanner.Positiontext/scanner.Scanner !(*text/scanner.Scanner).TokenText �*	Scanner.ptr.prototype.TokenText = function() {
		var _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
    		if (s.tokPos < 0) {
  N�			$s = -1; return "";
    		}
    		if (s.tokEnd < s.tokPos) {
  O			s.tokEnd = s.tokPos;
    		}
    		if (s.tokBuf.Len() === 0) {
  O�			$s = -1; return ($bytesToString($subslice(new sliceType$1(s.srcBuf), s.tokPos, s.tokEnd)));
    		}
  P$		_r = s.tokBuf.Write($subslice(new sliceType$1(s.srcBuf), s.tokPos, s.tokEnd)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  PQ		s.tokPos = s.tokEnd;
  P�		$s = -1; return s.tokBuf.String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanner.ptr.prototype.TokenText }; } $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Scanner.prototype.TokenText = function() { return this.$val.TokenText(); };
Scannertext/scanner.Scannertext/scanner.sliceType$1 ��{"Base":20652,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/text/scanner/scanner.go","Base":1,"Size":20650,"Lines":[0,55,109,159,160,236,311,382,458,534,537,615,682,758,810,826,827,836,845,852,858,864,875,891,893,894,952,988,1011,1048,1095,1142,1218,1220,1221,1271,1331,1332,1370,1389,1403,1419,1422,1442,1493,1496,1506,1508,1509,1581,1654,1720,1723,1763,1766,1839,1912,1986,2059,2116,2119,2188,2258,2261,2269,2299,2327,2397,2426,2457,2491,2523,2616,2731,2733,2734,2803,2811,2830,2837,2842,2849,2855,2863,2874,2883,2884,2906,2919,2921,2922,2957,2976,2997,3016,3037,3057,3079,3104,3127,3129,3130,3206,3242,3284,3295,3298,3337,3339,3340,3413,3463,3521,3522,3566,3567,3651,3673,3683,3698,3699,3717,3789,3849,3903,3904,3924,3980,4012,4049,4135,4190,4191,4213,4286,4361,4391,4461,4540,4599,4600,4629,4673,4674,4734,4791,4827,4828,4893,4909,4910,4981,5051,5076,5087,5088,5154,5225,5298,5362,5381,5382,5449,5515,5578,5644,5704,5743,5744,5808,5871,5935,6000,6067,6132,6175,6185,6187,6188,6251,6324,6366,6415,6428,6429,6458,6522,6563,6577,6591,6592,6623,6643,6655,6669,6688,6707,6708,6741,6782,6797,6798,6838,6878,6879,6908,6923,6941,6960,6989,7030,7031,7041,7043,7044,7118,7193,7267,7294,7326,7368,7369,7395,7445,7532,7582,7616,7638,7686,7703,7736,7741,7788,7839,7869,7891,7946,8001,8057,8115,8143,8187,8203,8223,8273,8292,8315,8341,8347,8370,8398,8438,8455,8462,8485,8501,8507,8554,8601,8648,8695,8705,8710,8714,8737,8769,8796,8827,8887,8930,8972,8994,9020,9035,9073,9087,9092,9096,9099,9100,9112,9131,9154,9166,9167,9190,9203,9212,9252,9287,9299,9310,9337,9352,9355,9356,9367,9369,9370,9424,9479,9537,9595,9648,9677,9709,9752,9796,9812,9828,9846,9849,9860,9862,9863,9938,10010,10038,10070,10087,10143,10161,10185,10218,10222,10225,10238,10240,10241,10279,10354,10370,10391,10409,10418,10421,10440,10461,10477,10480,10526,10528,10529,10592,10631,10633,10634,10687,10714,10744,10747,10821,10823,10824,10866,10933,10949,10990,11006,11009,11020,11022,11023,11128,11191,11294,11295,11361,11424,11489,11555,11622,11682,11766,11776,11793,11819,11854,11865,11883,11894,11936,11954,11959,11975,11992,11996,12006,12037,12048,12066,12077,12082,12098,12115,12119,12122,12130,12132,12133,12200,12235,12310,12374,12428,12429,12446,12460,12472,12487,12499,12516,12533,12555,12568,12586,12613,12626,12644,12670,12683,12701,12727,12739,12765,12793,12798,12802,12842,12857,12900,12917,12935,12939,12942,12943,12963,12977,12991,13029,13085,13089,13129,13144,13147,13148,13168,13214,13217,13218,13231,13302,13313,13362,13419,13453,13514,13518,13534,13548,13578,13595,13599,13632,13647,13664,13701,13705,13748,13806,13809,13810,13843,13906,13909,13910,13930,14006,14052,14102,14106,14109,14110,14126,14128,14129,14164,14181,14191,14218,14229,14260,14276,14301,14312,14338,14341,14343,14344,14420,14452,14504,14575,14583,14584,14615,14648,14673,14716,14727,14736,14740,14743,14744,14770,14795,14822,14839,14850,14867,14884,14897,14902,14948,14959,14970,14987,15004,15009,15020,15024,15027,15042,15062,15065,15066,15077,15079,15080,15109,15119,15149,15172,15216,15251,15254,15300,15302,15303,15361,15397,15413,15419,15422,15434,15467,15470,15481,15483,15484,15532,15576,15589,15643,15662,15678,15724,15754,15765,15802,15813,15850,15861,15898,15908,15941,15944,15955,15957,15958,16009,16055,16074,16102,16139,16149,16153,16171,16199,16210,16227,16231,16237,16240,16248,16250,16251,16287,16331,16348,16362,16399,16409,16413,16429,16432,16434,16435,16466,16496,16530,16533,16535,16536,16582,16609,16625,16643,16688,16718,16735,16739,16751,16754,16755,16775,16819,16826,16840,16877,16886,16890,16902,16918,16949,16966,16975,16979,16982,16993,16995,16996,17074,17155,17235,17313,17338,17370,17386,17387,17417,17432,17444,17445,17451,17472,17511,17527,17530,17531,17563,17581,17618,17619,17642,17706,17744,17763,17811,17829,17851,17861,17892,17942,17990,18012,18039,18042,18043,18069,18080,18090,18118,18148,18163,18190,18201,18218,18222,18243,18284,18321,18332,18349,18353,18363,18377,18389,18398,18410,18442,18464,18481,18486,18503,18516,18546,18563,18578,18583,18600,18612,18629,18677,18714,18719,18731,18748,18809,18843,18890,18918,18933,18939,18966,18984,18989,19001,19036,19058,19078,19083,19100,19111,19128,19132,19135,19136,19158,19195,19196,19207,19219,19221,19222,19285,19354,19425,19452,19493,19520,19576,19586,19606,19654,19674,19698,19723,19754,19778,19807,19817,19853,19868,19885,19888,19896,19898,19899,19981,20040,20079,20098,20117,20129,20132,20133,20159,20222,20244,20247,20272,20273,20299,20358,20403,20406,20407,20472,20514,20559,20622,20648],"Infos":null}]}
 