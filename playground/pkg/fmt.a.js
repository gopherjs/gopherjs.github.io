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
GoLinkname�� Implementation�� 	Reference��   �����fmtfmt	errorsinternal/fmtsortiomathosreflectstrconvsyncunicode/utf8��i ��formata FormatfStateverbwWriterionerrrReaderGoStringReadbufReadRunesize	SkipSpaceToken	skipSpacetoken
UnreadRuneWidthwidokScanstate	ScanStatestrFlagc	PrecisionprecWritebStringpfmtErrorf	FormatterFprintFprintfFprintlnFscanFscanfFscanln
GoStringerPrintPrintfPrintlnScanfScanlnScannerSprintSprintfSprintlnSscanSscanfSscanlnStringer	   F    $ 	 		  
 4   T 7  '	  LF  I P * ,	  cF  I   g * ,	  }F  I � * , 2'	  �F  0� � * ,	  �F  0�   � * ,	  �F  0� � * ,	  9  	T �	  �F  � * ,	  �F    � * ,	  �F  � * ,	  �F  � * ,	 	 	  	  B G� * ,  K  0 T , Y   c i  � s� ,  y  	 �  � � T �	  �F    � * ,	  �F  � * , �		  � ��  	 T �	  �F  � 		  �F    � 		  �F  � 		  �F  � � * ,	  �F  �   � * ,	  �F  � � * ,	  � � 	   �  � �  �  � �  � �� * , T �	  �  	T �'  � �� * , T �'  B �� * , T �	� ��&�2�I�c��������������������������������������'' 2� ��� errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmtsort*	fmtsort = $packages["internal/fmtsort"];
��    		$r = fmtsort.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	wrapError�	wrapError = $pkg.wrapError = $newType(0, $kindStruct, "fmt.wrapError", true, "fmt", false, function(msg_, err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.msg = "";
			this.err = $ifaceNil;
			return;
		}
		this.msg = msg_;
		this.err = err_;
	});
��	ptrType$25.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Unwrap", name: "Unwrap", pkg: "", typ: $funcType([], [$error], false)}];
��	wrapError.init("fmt", [{prop: "msg", name: "msg", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	wrapErrorfmt.ptrType$25fmt.wrapError  fmtFlags��	fmtFlags = $pkg.fmtFlags = $newType(0, $kindStruct, "fmt.fmtFlags", true, "fmt", false, function(widPresent_, precPresent_, minus_, plus_, sharp_, space_, zero_, plusV_, sharpV_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.widPresent = false;
			this.precPresent = false;
			this.minus = false;
			this.plus = false;
			this.sharp = false;
			this.space = false;
			this.zero = false;
			this.plusV = false;
			this.sharpV = false;
			return;
		}
		this.widPresent = widPresent_;
		this.precPresent = precPresent_;
		this.minus = minus_;
		this.plus = plus_;
		this.sharp = sharp_;
		this.space = space_;
		this.zero = zero_;
		this.plusV = plusV_;
		this.sharpV = sharpV_;
	});
�<	fmtFlags.init("fmt", [{prop: "widPresent", name: "widPresent", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "precPresent", name: "precPresent", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "minus", name: "minus", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "plus", name: "plus", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "sharp", name: "sharp", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "space", name: "space", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "zero", name: "zero", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "plusV", name: "plusV", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "sharpV", name: "sharpV", embedded: false, exported: false, typ: $Bool, tag: ""}]);
fmtFlagsfmt.fmtFlags  fmt��	fmt = $pkg.fmt = $newType(0, $kindStruct, "fmt.fmt", true, "fmt", false, function(buf_, fmtFlags_, wid_, prec_, intbuf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.buf = ptrType$1.nil;
			this.fmtFlags = new fmtFlags.ptr(false, false, false, false, false, false, false, false, false);
			this.wid = 0;
			this.prec = 0;
			this.intbuf = arrayType.zero();
			return;
		}
		this.buf = buf_;
		this.fmtFlags = fmtFlags_;
		this.wid = wid_;
		this.prec = prec_;
		this.intbuf = intbuf_;
	});
��	ptrType$26.methods = [{prop: "clearflags", name: "clearflags", pkg: "fmt", typ: $funcType([], [], false)}, {prop: "init", name: "init", pkg: "fmt", typ: $funcType([ptrType$1], [], false)}, {prop: "writePadding", name: "writePadding", pkg: "fmt", typ: $funcType([$Int], [], false)}, {prop: "pad", name: "pad", pkg: "fmt", typ: $funcType([sliceType$2], [], false)}, {prop: "padString", name: "padString", pkg: "fmt", typ: $funcType([$String], [], false)}, {prop: "fmtBoolean", name: "fmtBoolean", pkg: "fmt", typ: $funcType([$Bool], [], false)}, {prop: "fmtUnicode", name: "fmtUnicode", pkg: "fmt", typ: $funcType([$Uint64], [], false)}, {prop: "fmtInteger", name: "fmtInteger", pkg: "fmt", typ: $funcType([$Uint64, $Int, $Bool, $Int32, $String], [], false)}, {prop: "truncateString", name: "truncateString", pkg: "fmt", typ: $funcType([$String], [$String], false)}, {prop: "truncate", name: "truncate", pkg: "fmt", typ: $funcType([sliceType$2], [sliceType$2], false)}, {prop: "fmtS", name: "fmtS", pkg: "fmt", typ: $funcType([$String], [], false)}, {prop: "fmtBs", name: "fmtBs", pkg: "fmt", typ: $funcType([sliceType$2], [], false)}, {prop: "fmtSbx", name: "fmtSbx", pkg: "fmt", typ: $funcType([$String, sliceType$2, $String], [], false)}, {prop: "fmtSx", name: "fmtSx", pkg: "fmt", typ: $funcType([$String, $String], [], false)}, {prop: "fmtBx", name: "fmtBx", pkg: "fmt", typ: $funcType([sliceType$2, $String], [], false)}, {prop: "fmtQ", name: "fmtQ", pkg: "fmt", typ: $funcType([$String], [], false)}, {prop: "fmtC", name: "fmtC", pkg: "fmt", typ: $funcType([$Uint64], [], false)}, {prop: "fmtQc", name: "fmtQc", pkg: "fmt", typ: $funcType([$Uint64], [], false)}, {prop: "fmtFloat", name: "fmtFloat", pkg: "fmt", typ: $funcType([$Float64, $Int, $Int32, $Int], [], false)}];
��	fmt.init("fmt", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "fmtFlags", name: "fmtFlags", embedded: true, exported: false, typ: fmtFlags, tag: ""}, {prop: "wid", name: "wid", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "prec", name: "prec", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "intbuf", name: "intbuf", embedded: false, exported: false, typ: arrayType, tag: ""}]);
fmtfmt.arrayTypefmt.fmtfmt.fmtFlagsfmt.ptrType$1fmt.ptrType$26fmt.sliceType$2  StateY	State = $pkg.State = $newType(8, $kindInterface, "fmt.State", true, "fmt", true, null);
�k	State.init([{prop: "Flag", name: "Flag", pkg: "", typ: $funcType([$Int], [$Bool], false)}, {prop: "Precision", name: "Precision", pkg: "", typ: $funcType([], [$Int, $Bool], false)}, {prop: "Width", name: "Width", pkg: "", typ: $funcType([], [$Int, $Bool], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}]);
State	fmt.Statefmt.sliceType$2  	Formattere	Formatter = $pkg.Formatter = $newType(8, $kindInterface, "fmt.Formatter", true, "fmt", true, null);
j	Formatter.init([{prop: "Format", name: "Format", pkg: "", typ: $funcType([State, $Int32], [], false)}]);
	Formatterfmt.Formatter	fmt.State  Stringerb	Stringer = $pkg.Stringer = $newType(8, $kindInterface, "fmt.Stringer", true, "fmt", true, null);
c	Stringer.init([{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}]);
Stringerfmt.Stringer  
GoStringerh	GoStringer = $pkg.GoStringer = $newType(8, $kindInterface, "fmt.GoStringer", true, "fmt", true, null);
i	GoStringer.init([{prop: "GoString", name: "GoString", pkg: "", typ: $funcType([], [$String], false)}]);

GoStringerfmt.GoStringer  bufferZ	buffer = $pkg.buffer = $newType(12, $kindSlice, "fmt.buffer", true, "fmt", false, null);
�}	ptrType$1.methods = [{prop: "write", name: "write", pkg: "fmt", typ: $funcType([sliceType$2], [], false)}, {prop: "writeString", name: "writeString", pkg: "fmt", typ: $funcType([$String], [], false)}, {prop: "writeByte", name: "writeByte", pkg: "fmt", typ: $funcType([$Uint8], [], false)}, {prop: "writeRune", name: "writeRune", pkg: "fmt", typ: $funcType([$Int32], [], false)}];
	buffer.init($Uint8);
buffer
fmt.bufferfmt.ptrType$1fmt.sliceType$2  pp��	pp = $pkg.pp = $newType(0, $kindStruct, "fmt.pp", true, "fmt", false, function(buf_, arg_, value_, fmt_, reordered_, goodArgNum_, panicking_, erroring_, wrapErrs_, wrappedErr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.buf = buffer.nil;
			this.arg = $ifaceNil;
			this.value = new reflect.Value.ptr(ptrType.nil, 0, 0);
			this.fmt = new fmt.ptr(ptrType$1.nil, new fmtFlags.ptr(false, false, false, false, false, false, false, false, false), 0, 0, arrayType.zero());
			this.reordered = false;
			this.goodArgNum = false;
			this.panicking = false;
			this.erroring = false;
			this.wrapErrs = false;
			this.wrappedErr = $ifaceNil;
			return;
		}
		this.buf = buf_;
		this.arg = arg_;
		this.value = value_;
		this.fmt = fmt_;
		this.reordered = reordered_;
		this.goodArgNum = goodArgNum_;
		this.panicking = panicking_;
		this.erroring = erroring_;
		this.wrapErrs = wrapErrs_;
		this.wrappedErr = wrappedErr_;
	});
�
		ptrType$2.methods = [{prop: "free", name: "free", pkg: "fmt", typ: $funcType([], [], false)}, {prop: "Width", name: "Width", pkg: "", typ: $funcType([], [$Int, $Bool], false)}, {prop: "Precision", name: "Precision", pkg: "", typ: $funcType([], [$Int, $Bool], false)}, {prop: "Flag", name: "Flag", pkg: "", typ: $funcType([$Int], [$Bool], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "unknownType", name: "unknownType", pkg: "fmt", typ: $funcType([reflect.Value], [], false)}, {prop: "badVerb", name: "badVerb", pkg: "fmt", typ: $funcType([$Int32], [], false)}, {prop: "fmtBool", name: "fmtBool", pkg: "fmt", typ: $funcType([$Bool, $Int32], [], false)}, {prop: "fmt0x64", name: "fmt0x64", pkg: "fmt", typ: $funcType([$Uint64, $Bool], [], false)}, {prop: "fmtInteger", name: "fmtInteger", pkg: "fmt", typ: $funcType([$Uint64, $Bool, $Int32], [], false)}, {prop: "fmtFloat", name: "fmtFloat", pkg: "fmt", typ: $funcType([$Float64, $Int, $Int32], [], false)}, {prop: "fmtComplex", name: "fmtComplex", pkg: "fmt", typ: $funcType([$Complex128, $Int, $Int32], [], false)}, {prop: "fmtString", name: "fmtString", pkg: "fmt", typ: $funcType([$String, $Int32], [], false)}, {prop: "fmtBytes", name: "fmtBytes", pkg: "fmt", typ: $funcType([sliceType$2, $Int32, $String], [], false)}, {prop: "fmtPointer", name: "fmtPointer", pkg: "fmt", typ: $funcType([reflect.Value, $Int32], [], false)}, {prop: "catchPanic", name: "catchPanic", pkg: "fmt", typ: $funcType([$emptyInterface, $Int32, $String], [], false)}, {prop: "handleMethods", name: "handleMethods", pkg: "fmt", typ: $funcType([$Int32], [$Bool], false)}, {prop: "printArg", name: "printArg", pkg: "fmt", typ: $funcType([$emptyInterface, $Int32], [], false)}, {prop: "printValue", name: "printValue", pkg: "fmt", typ: $funcType([reflect.Value, $Int32, $Int], [], false)}, {prop: "argNumber", name: "argNumber", pkg: "fmt", typ: $funcType([$Int, $String, $Int, $Int], [$Int, $Int, $Bool], false)}, {prop: "badArgNum", name: "badArgNum", pkg: "fmt", typ: $funcType([$Int32], [], false)}, {prop: "missingArg", name: "missingArg", pkg: "fmt", typ: $funcType([$Int32], [], false)}, {prop: "doPrintf", name: "doPrintf", pkg: "fmt", typ: $funcType([$String, sliceType], [], false)}, {prop: "doPrint", name: "doPrint", pkg: "fmt", typ: $funcType([sliceType], [], false)}, {prop: "doPrintln", name: "doPrintln", pkg: "fmt", typ: $funcType([sliceType], [], false)}];
��	pp.init("fmt", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: buffer, tag: ""}, {prop: "arg", name: "arg", embedded: false, exported: false, typ: $emptyInterface, tag: ""}, {prop: "value", name: "value", embedded: false, exported: false, typ: reflect.Value, tag: ""}, {prop: "fmt", name: "fmt", embedded: false, exported: false, typ: fmt, tag: ""}, {prop: "reordered", name: "reordered", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "goodArgNum", name: "goodArgNum", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "panicking", name: "panicking", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "erroring", name: "erroring", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "wrapErrs", name: "wrapErrs", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "wrappedErr", name: "wrappedErr", embedded: false, exported: false, typ: $error, tag: ""}]);
ppfmt.arrayType
fmt.bufferfmt.fmtfmt.fmtFlagsfmt.ppfmt.ptrTypefmt.ptrType$1fmt.ptrType$2fmt.sliceTypefmt.sliceType$2reflect.Value  	ScanStatee	ScanState = $pkg.ScanState = $newType(8, $kindInterface, "fmt.ScanState", true, "fmt", true, null);
�7	ScanState.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "SkipSpace", name: "SkipSpace", pkg: "", typ: $funcType([], [], false)}, {prop: "Token", name: "Token", pkg: "", typ: $funcType([$Bool, funcType], [sliceType$2, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Width", name: "Width", pkg: "", typ: $funcType([], [$Int, $Bool], false)}]);
	ScanStatefmt.ScanStatefmt.funcTypefmt.sliceType$2  Scanner_	Scanner = $pkg.Scanner = $newType(8, $kindInterface, "fmt.Scanner", true, "fmt", true, null);
n	Scanner.init([{prop: "Scan", name: "Scan", pkg: "", typ: $funcType([ScanState, $Int32], [$error], false)}]);
Scannerfmt.ScanStatefmt.Scanner  stringReaderl	stringReader = $pkg.stringReader = $newType(8, $kindString, "fmt.stringReader", true, "fmt", false, null);
t	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}];
stringReaderfmt.ptrType$3fmt.sliceType$2fmt.stringReader  	scanError��	scanError = $pkg.scanError = $newType(0, $kindStruct, "fmt.scanError", true, "fmt", false, function(err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			return;
		}
		this.err = err_;
	});
n	scanError.init("fmt", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	scanErrorfmt.scanError  ss��	ss = $pkg.ss = $newType(0, $kindStruct, "fmt.ss", true, "fmt", false, function(rs_, buf_, count_, atEOF_, ssave_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.rs = $ifaceNil;
			this.buf = buffer.nil;
			this.count = 0;
			this.atEOF = false;
			this.ssave = new ssave.ptr(false, false, false, 0, 0, 0);
			return;
		}
		this.rs = rs_;
		this.buf = buf_;
		this.count = count_;
		this.atEOF = atEOF_;
		this.ssave = ssave_;
	});
��	ptrType$5.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "Width", name: "Width", pkg: "", typ: $funcType([], [$Int, $Bool], false)}, {prop: "getRune", name: "getRune", pkg: "fmt", typ: $funcType([], [$Int32], false)}, {prop: "mustReadRune", name: "mustReadRune", pkg: "fmt", typ: $funcType([], [$Int32], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "error", name: "error", pkg: "fmt", typ: $funcType([$error], [], false)}, {prop: "errorString", name: "errorString", pkg: "fmt", typ: $funcType([$String], [], false)}, {prop: "Token", name: "Token", pkg: "", typ: $funcType([$Bool, funcType], [sliceType$2, $error], false)}, {prop: "free", name: "free", pkg: "fmt", typ: $funcType([ssave], [], false)}, {prop: "SkipSpace", name: "SkipSpace", pkg: "", typ: $funcType([], [], false)}, {prop: "token", name: "token", pkg: "fmt", typ: $funcType([$Bool, funcType], [sliceType$2], false)}, {prop: "consume", name: "consume", pkg: "fmt", typ: $funcType([$String, $Bool], [$Bool], false)}, {prop: "peek", name: "peek", pkg: "fmt", typ: $funcType([$String], [$Bool], false)}, {prop: "notEOF", name: "notEOF", pkg: "fmt", typ: $funcType([], [], false)}, {prop: "accept", name: "accept", pkg: "fmt", typ: $funcType([$String], [$Bool], false)}, {prop: "okVerb", name: "okVerb", pkg: "fmt", typ: $funcType([$Int32, $String, $String], [$Bool], false)}, {prop: "scanBool", name: "scanBool", pkg: "fmt", typ: $funcType([$Int32], [$Bool], false)}, {prop: "getBase", name: "getBase", pkg: "fmt", typ: $funcType([$Int32], [$Int, $String], false)}, {prop: "scanNumber", name: "scanNumber", pkg: "fmt", typ: $funcType([$String, $Bool], [$String], false)}, {prop: "scanRune", name: "scanRune", pkg: "fmt", typ: $funcType([$Int], [$Int64], false)}, {prop: "scanBasePrefix", name: "scanBasePrefix", pkg: "fmt", typ: $funcType([], [$Int, $String, $Bool], false)}, {prop: "scanInt", name: "scanInt", pkg: "fmt", typ: $funcType([$Int32, $Int], [$Int64], false)}, {prop: "scanUint", name: "scanUint", pkg: "fmt", typ: $funcType([$Int32, $Int], [$Uint64], false)}, {prop: "floatToken", name: "floatToken", pkg: "fmt", typ: $funcType([], [$String], false)}, {prop: "complexTokens", name: "complexTokens", pkg: "fmt", typ: $funcType([], [$String, $String], false)}, {prop: "convertFloat", name: "convertFloat", pkg: "fmt", typ: $funcType([$String, $Int], [$Float64], false)}, {prop: "scanComplex", name: "scanComplex", pkg: "fmt", typ: $funcType([$Int32, $Int], [$Complex128], false)}, {prop: "convertString", name: "convertString", pkg: "fmt", typ: $funcType([$Int32], [$String], false)}, {prop: "quotedString", name: "quotedString", pkg: "fmt", typ: $funcType([], [$String], false)}, {prop: "hexByte", name: "hexByte", pkg: "fmt", typ: $funcType([], [$Uint8, $Bool], false)}, {prop: "hexString", name: "hexString", pkg: "fmt", typ: $funcType([], [$String], false)}, {prop: "scanPercent", name: "scanPercent", pkg: "fmt", typ: $funcType([], [], false)}, {prop: "scanOne", name: "scanOne", pkg: "fmt", typ: $funcType([$Int32, $emptyInterface], [], false)}, {prop: "doScan", name: "doScan", pkg: "fmt", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "advance", name: "advance", pkg: "fmt", typ: $funcType([$String], [$Int], false)}, {prop: "doScanf", name: "doScanf", pkg: "fmt", typ: $funcType([$String, sliceType], [$Int, $error], false)}];
��	ss.init("fmt", [{prop: "rs", name: "rs", embedded: false, exported: false, typ: io.RuneScanner, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: buffer, tag: ""}, {prop: "count", name: "count", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "atEOF", name: "atEOF", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "ssave", name: "ssave", embedded: true, exported: false, typ: ssave, tag: ""}]);
ss
fmt.bufferfmt.funcTypefmt.ptrType$5fmt.sliceTypefmt.sliceType$2fmt.ss	fmt.ssaveio.RuneScanner  ssave�	ssave = $pkg.ssave = $newType(0, $kindStruct, "fmt.ssave", true, "fmt", false, function(validSave_, nlIsEnd_, nlIsSpace_, argLimit_, limit_, maxWid_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.validSave = false;
			this.nlIsEnd = false;
			this.nlIsSpace = false;
			this.argLimit = 0;
			this.limit = 0;
			this.maxWid = 0;
			return;
		}
		this.validSave = validSave_;
		this.nlIsEnd = nlIsEnd_;
		this.nlIsSpace = nlIsSpace_;
		this.argLimit = argLimit_;
		this.limit = limit_;
		this.maxWid = maxWid_;
	});
�9	ssave.init("fmt", [{prop: "validSave", name: "validSave", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "nlIsEnd", name: "nlIsEnd", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "nlIsSpace", name: "nlIsSpace", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "argLimit", name: "argLimit", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "limit", name: "limit", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "maxWid", name: "maxWid", embedded: false, exported: false, typ: $Int, tag: ""}]);
ssave	fmt.ssave  readRune��	readRune = $pkg.readRune = $newType(0, $kindStruct, "fmt.readRune", true, "fmt", false, function(reader_, buf_, pending_, pendBuf_, peekRune_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.reader = $ifaceNil;
			this.buf = arrayType$3.zero();
			this.pending = 0;
			this.pendBuf = arrayType$3.zero();
			this.peekRune = 0;
			return;
		}
		this.reader = reader_;
		this.buf = buf_;
		this.pending = pending_;
		this.pendBuf = pendBuf_;
		this.peekRune = peekRune_;
	});
�1	ptrType$27.methods = [{prop: "readByte", name: "readByte", pkg: "fmt", typ: $funcType([], [$Uint8, $error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}];
��	readRune.init("fmt", [{prop: "reader", name: "reader", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "pending", name: "pending", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "pendBuf", name: "pendBuf", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "peekRune", name: "peekRune", embedded: false, exported: false, typ: $Int32, tag: ""}]);
readRunefmt.arrayType$3fmt.ptrType$27fmt.readRune	io.Reader  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  ptrType$	ptrType = $ptrType(reflect.rtype);
ptrTypereflect.rtype  	ptrType$1	ptrType$1 = $ptrType(buffer);
	ptrType$1
fmt.buffer  	arrayType%	arrayType = $arrayType($Uint8, 68);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint16, 2);
arrayType$1  sliceType$1(	sliceType$1 = $sliceType(arrayType$1);
sliceType$1fmt.arrayType$1  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  arrayType$2&	arrayType$2 = $arrayType($Uint8, 6);
arrayType$2  	ptrType$2	ptrType$2 = $ptrType(pp);
	ptrType$2fmt.pp  	ptrType$3%	ptrType$3 = $ptrType(stringReader);
	ptrType$3fmt.stringReader  	ptrType$4 	ptrType$4 = $ptrType($String);
	ptrType$4  	ptrType$5	ptrType$5 = $ptrType(ss);
	ptrType$5fmt.ss  arrayType$3&	arrayType$3 = $arrayType($Uint8, 4);
arrayType$3  	ptrType$6)	ptrType$6 = $ptrType(strconv.NumError);
	ptrType$6strconv.NumError  	ptrType$7	ptrType$7 = $ptrType($Bool);
	ptrType$7  	ptrType$8#	ptrType$8 = $ptrType($Complex64);
	ptrType$8  	ptrType$9$	ptrType$9 = $ptrType($Complex128);
	ptrType$9  
ptrType$10	ptrType$10 = $ptrType($Int);

ptrType$10  
ptrType$11	ptrType$11 = $ptrType($Int8);

ptrType$11  
ptrType$12 	ptrType$12 = $ptrType($Int16);

ptrType$12  
ptrType$13 	ptrType$13 = $ptrType($Int32);

ptrType$13  
ptrType$14 	ptrType$14 = $ptrType($Int64);

ptrType$14  
ptrType$15	ptrType$15 = $ptrType($Uint);

ptrType$15  
ptrType$16 	ptrType$16 = $ptrType($Uint8);

ptrType$16  
ptrType$17!	ptrType$17 = $ptrType($Uint16);

ptrType$17  
ptrType$18!	ptrType$18 = $ptrType($Uint32);

ptrType$18  
ptrType$19!	ptrType$19 = $ptrType($Uint64);

ptrType$19  
ptrType$20"	ptrType$20 = $ptrType($Uintptr);

ptrType$20  
ptrType$21"	ptrType$21 = $ptrType($Float32);

ptrType$21  
ptrType$22"	ptrType$22 = $ptrType($Float64);

ptrType$22  
ptrType$23%	ptrType$23 = $ptrType(sliceType$2);

ptrType$23fmt.sliceType$2  
ptrType$24 	ptrType$24 = $ptrType($error);

ptrType$24  
ptrType$25#	ptrType$25 = $ptrType(wrapError);

ptrType$25fmt.wrapError  
ptrType$26	ptrType$26 = $ptrType(fmt);

ptrType$26fmt.fmt  funcType1	funcType = $funcType([$Int32], [$Bool], false);
funcType  
ptrType$27"	ptrType$27 = $ptrType(readRune);

ptrType$27fmt.readRune  ppFreeppFree  spacespace  ssFreessFree  complexErrorcomplexError  	boolError	boolError  �Z  ��		ppFree = new sync.Pool.ptr(sliceType.nil, (function() {
  ��			return new pp.ptr(buffer.nil, $ifaceNil, new reflect.Value.ptr(ptrType.nil, 0, 0), new fmt.ptr(ptrType$1.nil, new fmtFlags.ptr(false, false, false, false, false, false, false, false, false), 0, 0, arrayType.zero()), false, false, false, false, false, $ifaceNil);
    		}));
fmt.arrayType
fmt.bufferfmt.fmtfmt.fmtFlagsfmt.pp
fmt.ppFreefmt.ptrTypefmt.ptrType$1fmt.sliceTypereflect.Valuereflect.rtype	sync.Pool  �� 		space = new sliceType$1([$toNativeArray($kindUint16, [9, 13]), $toNativeArray($kindUint16, [32, 32]), $toNativeArray($kindUint16, [133, 133]), $toNativeArray($kindUint16, [160, 160]), $toNativeArray($kindUint16, [5760, 5760]), $toNativeArray($kindUint16, [8192, 8202]), $toNativeArray($kindUint16, [8232, 8233]), $toNativeArray($kindUint16, [8239, 8239]), $toNativeArray($kindUint16, [8287, 8287]), $toNativeArray($kindUint16, [12288, 12288])]);
spacefmt.arrayType$1fmt.sliceType$1	fmt.space  �� S		ssFree = new sync.Pool.ptr(sliceType.nil, (function() {
 �			return new ss.ptr($ifaceNil, buffer.nil, 0, false, new ssave.ptr(false, false, false, 0, 0, 0));
    		}));

fmt.bufferfmt.sliceTypefmt.ss
fmt.ssFree	fmt.ssave	sync.Pool  J E		complexError = errors.New("syntax error scanning complex number");

errors.Newfmt.complexError  @ �		boolError = errors.New("syntax error scanning boolean");

errors.Newfmt.boolError 
fmt.ErrorffmtErrorf Errorf�Z	Errorf = function(format, a) {
		var _r, a, err, format, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; a = $f.a; err = $f.err; format = $f.format; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  <�		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  <�		p.wrapErrs = true;
  <�		$r = p.doPrintf(format, a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  <�		s = ($bytesToString(p.buf));
  =			err = $ifaceNil;
    		if ($interfaceIsEqual(p.wrappedErr, $ifaceNil)) {
  =/			err = errors.New(s);
    		} else {
  =O			err = new wrapError.ptr(s, p.wrappedErr);
    		}
  =u		p.free();
  =		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Errorf }; } $f._r = _r; $f.a = a; $f.err = err; $f.format = format; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Errorf = Errorf;
Errorf
errors.New
fmt.Errorffmt.doPrintf~	fmt.free~fmt.newPrinterfmt.wrapError (*fmt.wrapError).Error ��	wrapError.ptr.prototype.Error = function() {
		var e;
		e = this;
  =�		return e.msg;
    	};
	wrapError.prototype.Error = function() { return this.$val.Error(); };
	wrapErrorfmt.wrapError (*fmt.wrapError).Unwrap ��	wrapError.ptr.prototype.Unwrap = function() {
		var e;
		e = this;
  >		return e.err;
    	};
	wrapError.prototype.Unwrap = function() { return this.$val.Unwrap(); };
	wrapErrorfmt.wrapError (*fmt.fmt).clearflags �		fmt.ptr.prototype.clearflags = function() {
		var f;
		f = this;
  B�		fmtFlags.copy(f.fmtFlags, new fmtFlags.ptr(false, false, false, false, false, false, false, false, false));
    	};
	fmt.prototype.clearflags = function() { return this.$val.clearflags(); };
fmtclearflags~fmt.fmtfmt.fmtFlags (*fmt.fmt).init ��	fmt.ptr.prototype.init = function(buf) {
		var buf, f;
		f = this;
  B�		f.buf = buf;
  B�		f.clearflags();
    	};
	fmt.prototype.init = function(buf) { return this.$val.init(buf); };
fmtinit~fmt.clearflags~fmt.fmt (*fmt.fmt).writePadding ��	fmt.ptr.prototype.writePadding = function(n) {
		var _i, _ref, buf, f, i, n, newLen, oldLen, padByte, padding;
		f = this;
    		if (n <= 0) {
  Cl			return;
    		}
  Cw		buf = f.buf.$get();
  C�		oldLen = buf.$length;
  C�		newLen = oldLen + n >> 0;
    		if (newLen > buf.$capacity) {
  C�			buf = $makeSlice(buffer, (($imul(buf.$capacity, 2)) + n >> 0));
  D			$copySlice(buf, f.buf.$get());
    		}
  D]		padByte = 32;
    		if (f.fmtFlags.zero) {
  D�			padByte = 48;
    		}
  D�		padding = $subslice(buf, oldLen, newLen);
  D�		_ref = padding;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  D�			((i < 0 || i >= padding.$length) ? ($throwRuntimeError("index out of range"), undefined) : padding.$array[padding.$offset + i] = padByte);
    			_i++;
		}
  E		f.buf.$set($subslice(buf, 0, newLen));
    	};
	fmt.prototype.writePadding = function(n) { return this.$val.writePadding(n); };
fmtwritePadding~
fmt.bufferfmt.fmt (*fmt.fmt).pad ��	fmt.ptr.prototype.pad = function(b) {
		var b, f, width;
		f = this;
    		if (!f.fmtFlags.widPresent || (f.wid === 0)) {
  E�			f.buf.write(b);
  E�			return;
    		}
  E�		width = f.wid - utf8.RuneCount(b) >> 0;
    		if (!f.fmtFlags.minus) {
  F			f.writePadding(width);
  F)			f.buf.write(b);
    		} else {
  FW			f.buf.write(b);
  Fh			f.writePadding(width);
    		}
    	};
	fmt.prototype.pad = function(b) { return this.$val.pad(b); };
fmtpad~fmt.fmtfmt.writePadding~
fmt.write~unicode/utf8.RuneCount (*fmt.fmt).padString ��	fmt.ptr.prototype.padString = function(s) {
		var f, s, width;
		f = this;
    		if (!f.fmtFlags.widPresent || (f.wid === 0)) {
  G			f.buf.writeString(s);
  G2			return;
    		}
  G=		width = f.wid - utf8.RuneCountInString(s) >> 0;
    		if (!f.fmtFlags.minus) {
  G�			f.writePadding(width);
  G�			f.buf.writeString(s);
    		} else {
  G�			f.buf.writeString(s);
  G�			f.writePadding(width);
    		}
    	};
	fmt.prototype.padString = function(s) { return this.$val.padString(s); };
fmt
padString~fmt.fmtfmt.writePadding~fmt.writeString~unicode/utf8.RuneCountInString (*fmt.fmt).fmtBoolean � 	fmt.ptr.prototype.fmtBoolean = function(v) {
		var f, v;
		f = this;
    		if (v) {
  HX			f.padString("true");
    		} else {
  Hx			f.padString("false");
    		}
    	};
	fmt.prototype.fmtBoolean = function(v) { return this.$val.fmtBoolean(v); };
fmtfmtBoolean~fmt.fmtfmt.padString~ (*fmt.fmt).fmtUnicode �
	fmt.ptr.prototype.fmtUnicode = function(u) {
		var buf, f, i, oldZero, prec, u, width;
		f = this;
  I			buf = $subslice(new sliceType$2(f.intbuf), 0);
  I�		prec = 4;
    		if (f.fmtFlags.precPresent && f.prec > 4) {
  J			prec = f.prec;
  Jg			width = (((2 + prec >> 0) + 2 >> 0) + 4 >> 0) + 1 >> 0;
    			if (width > buf.$length) {
  J�				buf = $makeSlice(sliceType$2, width);
    			}
    		}
  K 		i = buf.$length;
    		if (f.fmtFlags.sharp && (u.$high < 0 || (u.$high === 0 && u.$low <= 1114111)) && strconv.IsPrint(((u.$low >> 0)))) {
  K�			i = i - (1) >> 0;
  K�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 39);
  K�			i = i - (utf8.RuneLen(((u.$low >> 0)))) >> 0;
  K�			utf8.EncodeRune($subslice(buf, i), ((u.$low >> 0)));
  L			i = i - (1) >> 0;
  L!			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 39);
  L1			i = i - (1) >> 0;
  L7			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 32);
    		}
  L�		while (true) {
			if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 16)))) { break; }
  L�			i = i - (1) >> 0;
  L�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = "0123456789ABCDEFX".charCodeAt($flatten64(new $Uint64(u.$high & 0, (u.$low & 15) >>> 0))));
  L�			prec = prec - (1) >> 0;
  L�			u = $shiftRightUint64(u, (4));
    		}
  L�		i = i - (1) >> 0;
  L�		((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = "0123456789ABCDEFX".charCodeAt($flatten64(u)));
  L�		prec = prec - (1) >> 0;
  M7		while (true) {
			if (!(prec > 0)) { break; }
  MH			i = i - (1) >> 0;
  MN			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
  M]			prec = prec - (1) >> 0;
    		}
  M�		i = i - (1) >> 0;
  M�		((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 43);
  M�		i = i - (1) >> 0;
  M�		((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 85);
  M�		oldZero = f.fmtFlags.zero;
  M�		f.fmtFlags.zero = false;
  M�		f.pad($subslice(buf, i));
  M�		f.fmtFlags.zero = oldZero;
    	};
	fmt.prototype.fmtUnicode = function(u) { return this.$val.fmtUnicode(u); };
fmtfmtUnicode~fmt.fmtfmt.pad~fmt.sliceType$2strconv.IsPrintunicode/utf8.EncodeRuneunicode/utf8.RuneLen (*fmt.fmt).fmtInteger �	fmt.ptr.prototype.fmtInteger = function(u, base, isSigned, verb, digits) {
		var _1, _2, base, buf, digits, f, i, isSigned, negative, next, oldZero, oldZero$1, prec, u, verb, width, x, x$1, x$2, x$3, x$4;
		f = this;
  N{		negative = isSigned && (x = (new $Int64(u.$high, u.$low)), (x.$high < 0 || (x.$high === 0 && x.$low < 0)));
    		if (negative) {
  N�			u = new $Uint64(-u.$high, -u.$low);
    		}
  N�		buf = $subslice(new sliceType$2(f.intbuf), 0);
    		if (f.fmtFlags.widPresent || f.fmtFlags.precPresent) {
  O�			width = (3 + f.wid >> 0) + f.prec >> 0;
    			if (width > buf.$length) {
  PN				buf = $makeSlice(sliceType$2, width);
    			}
    		}
  Q		prec = 0;
    		if (f.fmtFlags.precPresent) {
  Q4			prec = f.prec;
    			if ((prec === 0) && (u.$high === 0 && u.$low === 0)) {
  Q�				oldZero = f.fmtFlags.zero;
  Q�				f.fmtFlags.zero = false;
  Q�				f.writePadding(f.wid);
  Q�				f.fmtFlags.zero = oldZero;
  Q�				return;
    			}
    		} else if (f.fmtFlags.zero && f.fmtFlags.widPresent) {
  R+			prec = f.wid;
    			if (negative || f.fmtFlags.plus || f.fmtFlags.space) {
  R`				prec = prec - (1) >> 0;
    			}
    		}
  Sv		i = buf.$length;
    		_1 = base;
    		if (_1 === (10)) {
  T			while (true) {
				if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 10)))) { break; }
  T				i = i - (1) >> 0;
  T&				next = $div64(u, new $Uint64(0, 10), false);
  T8				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = (((x$1 = new $Uint64(0 + u.$high, 48 + u.$low), x$2 = $mul64(next, new $Uint64(0, 10)), new $Uint64(x$1.$high - x$2.$high, x$1.$low - x$2.$low)).$low << 24 >>> 24)));
  T\				u = next;
    			}
    		} else if (_1 === (16)) {
  Tu			while (true) {
				if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 16)))) { break; }
  T�				i = i - (1) >> 0;
  T�				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = digits.charCodeAt($flatten64(new $Uint64(u.$high & 0, (u.$low & 15) >>> 0))));
  T�				u = $shiftRightUint64(u, (4));
    			}
    		} else if (_1 === (8)) {
  T�			while (true) {
				if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 8)))) { break; }
  T�				i = i - (1) >> 0;
  T�				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = (((x$3 = new $Uint64(u.$high & 0, (u.$low & 7) >>> 0), new $Uint64(0 + x$3.$high, 48 + x$3.$low)).$low << 24 >>> 24)));
  T�				u = $shiftRightUint64(u, (3));
    			}
    		} else if (_1 === (2)) {
  U			while (true) {
				if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 2)))) { break; }
  U				i = i - (1) >> 0;
  U				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = (((x$4 = new $Uint64(u.$high & 0, (u.$low & 1) >>> 0), new $Uint64(0 + x$4.$high, 48 + x$4.$low)).$low << 24 >>> 24)));
  U;				u = $shiftRightUint64(u, (1));
    			}
    		} else {
  US			$panic(new $String("fmt: unknown base; can't happen"));
    		}
  U�		i = i - (1) >> 0;
  U�		((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = digits.charCodeAt($flatten64(u)));
  U�		while (true) {
			if (!(i > 0 && prec > (buf.$length - i >> 0))) { break; }
  U�			i = i - (1) >> 0;
  U�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
    		}
    		if (f.fmtFlags.sharp) {
    			_2 = base;
    			if (_2 === (2)) {
  V8				i = i - (1) >> 0;
  V?				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 98);
  VO				i = i - (1) >> 0;
  VV				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
    			} else if (_2 === (8)) {
    				if (!((((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i]) === 48))) {
  V�					i = i - (1) >> 0;
  V�					((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
    				}
    			} else if (_2 === (16)) {
  V�				i = i - (1) >> 0;
  V�				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = digits.charCodeAt(16));
  V�				i = i - (1) >> 0;
  V�				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
    			}
    		}
    		if (verb === 79) {
  W			i = i - (1) >> 0;
  W 			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 111);
  W/			i = i - (1) >> 0;
  W5			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 48);
    		}
    		if (negative) {
  WW			i = i - (1) >> 0;
  W]			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 45);
    		} else if (f.fmtFlags.plus) {
  W�			i = i - (1) >> 0;
  W�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 43);
    		} else if (f.fmtFlags.space) {
  W�			i = i - (1) >> 0;
  W�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = 32);
    		}
  XT		oldZero$1 = f.fmtFlags.zero;
  Xg		f.fmtFlags.zero = false;
  Xw		f.pad($subslice(buf, i));
  X�		f.fmtFlags.zero = oldZero$1;
    	};
	fmt.prototype.fmtInteger = function(u, base, isSigned, verb, digits) { return this.$val.fmtInteger(u, base, isSigned, verb, digits); };
fmtfmtInteger~fmt.fmtfmt.pad~fmt.sliceType$2fmt.writePadding~ (*fmt.fmt).truncateString �	fmt.ptr.prototype.truncateString = function(s) {
		var _i, _ref, _rune, f, i, n, s;
		f = this;
    		if (f.fmtFlags.precPresent) {
  Y2			n = f.prec;
  Y@			_ref = s;
			_i = 0;
			while (true) {
				if (!(_i < _ref.length)) { break; }
				_rune = $decodeRune(_ref, _i);
				i = _i;
  YV				n = n - (1) >> 0;
    				if (n < 0) {
  Yl					return $substring(s, 0, i);
    				}
    				_i += _rune[1];
			}
    		}
  Y�		return s;
    	};
	fmt.prototype.truncateString = function(s) { return this.$val.truncateString(s); };
fmttruncateString~fmt.fmt (*fmt.fmt).truncate ��	fmt.ptr.prototype.truncate = function(b) {
		var _tuple, b, f, i, n, wid;
		f = this;
    		if (f.fmtFlags.precPresent) {
  Z-			n = f.prec;
  Z?			i = 0;
			while (true) {
				if (!(i < b.$length)) { break; }
  ZX				n = n - (1) >> 0;
    				if (n < 0) {
  Zn					return $subslice(b, 0, i);
    				}
  Z�				wid = 1;
    				if (((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]) >= 128) {
  Z�					_tuple = utf8.DecodeRune($subslice(b, i));
					wid = _tuple[1];
    				}
  Z�				i = i + (wid) >> 0;
    			}
    		}
  Z�		return b;
    	};
	fmt.prototype.truncate = function(b) { return this.$val.truncate(b); };
fmt	truncate~fmt.fmtunicode/utf8.DecodeRune (*fmt.fmt).fmtS ��	fmt.ptr.prototype.fmtS = function(s) {
		var f, s;
		f = this;
  [-		s = f.truncateString(s);
  [F		f.padString(s);
    	};
	fmt.prototype.fmtS = function(s) { return this.$val.fmtS(s); };
fmtfmtS~fmt.fmtfmt.padString~fmt.truncateString~ (*fmt.fmt).fmtBs ��	fmt.ptr.prototype.fmtBs = function(b) {
		var b, f;
		f = this;
  [�		b = f.truncate(b);
  [�		f.pad(b);
    	};
	fmt.prototype.fmtBs = function(b) { return this.$val.fmtBs(b); };
fmtfmtBs~fmt.fmtfmt.pad~fmt.truncate~ (*fmt.fmt).fmtSbx �>	fmt.ptr.prototype.fmtSbx = function(s, b, digits) {
		var b, buf, c, digits, f, i, length, s, width;
		f = this;
  \r		length = b.$length;
    		if (b === sliceType$2.nil) {
  \�			length = s.length;
    		}
    		if (f.fmtFlags.precPresent && f.prec < length) {
  ]T			length = f.prec;
    		}
  ]�		width = $imul(2, length);
    		if (width > 0) {
    			if (f.fmtFlags.space) {
    				if (f.fmtFlags.sharp) {
  ^O					width = $imul(width, (2));
    				}
  ^�				width = width + ((length - 1 >> 0)) >> 0;
    			} else if (f.fmtFlags.sharp) {
  ^�				width = width + (2) >> 0;
    			}
    		} else {
    			if (f.fmtFlags.widPresent) {
  _k				f.writePadding(f.wid);
    			}
  _�			return;
    		}
    		if (f.fmtFlags.widPresent && f.wid > width && !f.fmtFlags.minus) {
  _�			f.writePadding(f.wid - width >> 0);
    		}
  `=		buf = f.buf.$get();
    		if (f.fmtFlags.sharp) {
  `v			buf = $append(buf, 48, digits.charCodeAt(16));
    		}
  `�		c = 0;
  `�		i = 0;
		while (true) {
			if (!(i < length)) { break; }
    			if (f.fmtFlags.space && i > 0) {
  a				buf = $append(buf, 32);
    				if (f.fmtFlags.sharp) {
  aa					buf = $append(buf, 48, digits.charCodeAt(16));
    				}
    			}
    			if (!(b === sliceType$2.nil)) {
  a�				c = ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]);
    			} else {
  a�				c = s.charCodeAt(i);
    			}
  bG			buf = $append(buf, digits.charCodeAt((c >>> 4 << 24 >>> 24)), digits.charCodeAt(((c & 15) >>> 0)));
  `�			i = i + (1) >> 0;
    		}
  bz		f.buf.$set(buf);
    		if (f.fmtFlags.widPresent && f.wid > width && f.fmtFlags.minus) {
  b�			f.writePadding(f.wid - width >> 0);
    		}
    	};
	fmt.prototype.fmtSbx = function(s, b, digits) { return this.$val.fmtSbx(s, b, digits); };
fmtfmtSbx~fmt.fmtfmt.sliceType$2fmt.writePadding~ (*fmt.fmt).fmtSx ��	fmt.ptr.prototype.fmtSx = function(s, digits) {
		var digits, f, s;
		f = this;
  ch		f.fmtSbx(s, sliceType$2.nil, digits);
    	};
	fmt.prototype.fmtSx = function(s, digits) { return this.$val.fmtSx(s, digits); };
fmtfmtSx~fmt.fmtfmt.fmtSbx~fmt.sliceType$2 (*fmt.fmt).fmtBx ��	fmt.ptr.prototype.fmtBx = function(b, digits) {
		var b, digits, f;
		f = this;
  c�		f.fmtSbx("", b, digits);
    	};
	fmt.prototype.fmtBx = function(b, digits) { return this.$val.fmtBx(b, digits); };
fmtfmtBx~fmt.fmtfmt.fmtSbx~ (*fmt.fmt).fmtQ ��	fmt.ptr.prototype.fmtQ = function(s) {
		var buf, f, s;
		f = this;
  e		s = f.truncateString(s);
    		if (f.fmtFlags.sharp && strconv.CanBackquote(s)) {
  eQ			f.padString("`" + s + "`");
  en			return;
    		}
  ey		buf = $subslice(new sliceType$2(f.intbuf), 0, 0);
    		if (f.fmtFlags.plus) {
  e�			f.pad(strconv.AppendQuoteToASCII(buf, s));
    		} else {
  e�			f.pad(strconv.AppendQuote(buf, s));
    		}
    	};
	fmt.prototype.fmtQ = function(s) { return this.$val.fmtQ(s); };
fmtfmtQ~fmt.fmtfmt.padString~fmt.pad~fmt.sliceType$2fmt.truncateString~strconv.AppendQuotestrconv.AppendQuoteToASCIIstrconv.CanBackquote (*fmt.fmt).fmtC ��	fmt.ptr.prototype.fmtC = function(c) {
		var buf, c, f, r, w;
		f = this;
  f�		r = ((c.$low >> 0));
    		if ((c.$high > 0 || (c.$high === 0 && c.$low > 1114111))) {
  f�			r = 65533;
    		}
  f�		buf = $subslice(new sliceType$2(f.intbuf), 0, 0);
  f�		w = utf8.EncodeRune($subslice(buf, 0, 4), r);
  g		f.pad($subslice(buf, 0, w));
    	};
	fmt.prototype.fmtC = function(c) { return this.$val.fmtC(c); };
fmtfmtC~fmt.fmtfmt.pad~fmt.sliceType$2unicode/utf8.EncodeRune (*fmt.fmt).fmtQc ��	fmt.ptr.prototype.fmtQc = function(c) {
		var buf, c, f, r;
		f = this;
  g�		r = ((c.$low >> 0));
    		if ((c.$high > 0 || (c.$high === 0 && c.$low > 1114111))) {
  g�			r = 65533;
    		}
  h		buf = $subslice(new sliceType$2(f.intbuf), 0, 0);
    		if (f.fmtFlags.plus) {
  h2			f.pad(strconv.AppendQuoteRuneToASCII(buf, r));
    		} else {
  hl			f.pad(strconv.AppendQuoteRune(buf, r));
    		}
    	};
	fmt.prototype.fmtQc = function(c) { return this.$val.fmtQc(c); };
fmtfmtQc~fmt.fmtfmt.pad~fmt.sliceType$2strconv.AppendQuoteRunestrconv.AppendQuoteRuneToASCII (*fmt.fmt).fmtFloat ��	fmt.ptr.prototype.fmtFloat = function(v, size, verb, prec) {
		var _1, _2, digits, f, hasDecimalPoint, i, num, oldZero, prec, sawNonzeroDigit, size, tail, tailBuf, v, verb;
		f = this;
    		if (f.fmtFlags.precPresent) {
  i�			prec = f.prec;
    		}
  j		num = strconv.AppendFloat($subslice(new sliceType$2(f.intbuf), 0, 1), v, ((verb << 24 >>> 24)), prec, size);
    		if (((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 45) || ((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 43)) {
  j�			num = $subslice(num, 1);
    		} else {
  j�			(0 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 0] = 43);
    		}
    		if (f.fmtFlags.space && ((0 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 0]) === 43) && !f.fmtFlags.plus) {
  kO			(0 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 0] = 32);
    		}
    		if (((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 73) || ((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 78)) {
  k�			oldZero = f.fmtFlags.zero;
  l			f.fmtFlags.zero = false;
    			if (((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 78) && !f.fmtFlags.space && !f.fmtFlags.plus) {
  ly				num = $subslice(num, 1);
    			}
  l�			f.pad(num);
  l�			f.fmtFlags.zero = oldZero;
  l�			return;
    		}
    		if (f.fmtFlags.sharp && !((verb === 98))) {
  m^			digits = 0;
    			_1 = verb;
    			if ((_1 === (118)) || (_1 === (103)) || (_1 === (71)) || (_1 === (120))) {
  m�				digits = prec;
    				if (digits === -1) {
  m�					digits = 6;
    				}
    			}
  n�			tailBuf = arrayType$2.zero();
  n�			tail = $subslice(new sliceType$2(tailBuf), 0, 0);
  n�			hasDecimalPoint = false;
  n�			sawNonzeroDigit = false;
  o			i = 1;
			while (true) {
				if (!(i < num.$length)) { break; }
  o3				switch (0) { default:
    					_2 = ((i < 0 || i >= num.$length) ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + i]);
    					if (_2 === (46)) {
  oT						hasDecimalPoint = true;
    					} else if ((_2 === (112)) || (_2 === (80))) {
  o�						tail = $appendSlice(tail, $subslice(num, i));
  o�						num = $subslice(num, 0, i);
    					} else if ((_2 === (101)) || (_2 === (69))) {
    						if (!((verb === 120)) && !((verb === 88))) {
  o�							tail = $appendSlice(tail, $subslice(num, i));
  p							num = $subslice(num, 0, i);
  p&							break;
    						}
    						if (!((((i < 0 || i >= num.$length) ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + i]) === 48))) {
  pj							sawNonzeroDigit = true;
    						}
    						if (sawNonzeroDigit) {
  p�							digits = digits - (1) >> 0;
    						}
    					} else {
    						if (!((((i < 0 || i >= num.$length) ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + i]) === 48))) {
  pj							sawNonzeroDigit = true;
    						}
    						if (sawNonzeroDigit) {
  p�							digits = digits - (1) >> 0;
    						}
    					}
    				}
  o*				i = i + (1) >> 0;
    			}
    			if (!hasDecimalPoint) {
    				if ((num.$length === 2) && ((1 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 1]) === 48)) {
  qx					digits = digits - (1) >> 0;
    				}
  q�				num = $append(num, 46);
    			}
  q�			while (true) {
				if (!(digits > 0)) { break; }
  q�				num = $append(num, 48);
  q�				digits = digits - (1) >> 0;
    			}
  q�			num = $appendSlice(num, tail);
    		}
    		if (f.fmtFlags.plus || !(((0 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 0]) === 43))) {
    			if (f.fmtFlags.zero && f.fmtFlags.widPresent && f.wid > num.$length) {
  s7				f.buf.writeByte((0 >= num.$length ? ($throwRuntimeError("index out of range"), undefined) : num.$array[num.$offset + 0]));
  sR				f.writePadding(f.wid - num.$length >> 0);
  sv				f.buf.write($subslice(num, 1));
  s�				return;
    			}
  s�			f.pad(num);
  s�			return;
    		}
  t		f.pad($subslice(num, 1));
    	};
	fmt.prototype.fmtFloat = function(v, size, verb, prec) { return this.$val.fmtFloat(v, size, verb, prec); };
fmt	fmtFloat~fmt.arrayType$2fmt.fmtfmt.pad~fmt.sliceType$2fmt.writeByte~fmt.writePadding~
fmt.write~strconv.AppendFloat (*fmt.buffer).write }	$ptrType(buffer).prototype.write = function(p) {
		var b, p;
		b = this;
  }�		b.$set($appendSlice(b.$get(), p));
    	};
bufferwrite~
fmt.buffer (*fmt.buffer).writeString ��	$ptrType(buffer).prototype.writeString = function(s) {
		var b, s;
		b = this;
  }�		b.$set($appendSlice(b.$get(), s));
    	};
bufferwriteString~
fmt.buffer (*fmt.buffer).writeByte |	$ptrType(buffer).prototype.writeByte = function(c) {
		var b, c;
		b = this;
  ~		b.$set($append(b.$get(), c));
    	};
buffer
writeByte~
fmt.buffer (*fmt.buffer).writeRune ��	$ptrType(buffer).prototype.writeRune = function(r) {
		var b, bp, n, r, w;
		bp = this;
    		if (r < 128) {
  ~g			bp.$set($append(bp.$get(), ((r << 24 >>> 24))));
  ~�			return;
    		}
  ~�		b = bp.$get();
  ~�		n = b.$length;
  ~�		while (true) {
			if (!((n + 4 >> 0) > b.$capacity)) { break; }
  ~�			b = $append(b, 0);
    		}
  ~�		w = utf8.EncodeRune($convertSliceType($subslice(b, n, (n + 4 >> 0)), sliceType$2), r);
  		bp.$set($subslice(b, 0, (n + w >> 0)));
    	};
buffer
writeRune~
fmt.bufferfmt.sliceType$2unicode/utf8.EncodeRune fmt.newPrinterfmt
newPrinter 
newPrinter�+	newPrinter = function() {
		var _r, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �6		_r = ppFree.Get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = $assertType(_r, ptrType$2);
  �O		p.panicking = false;
  �d		p.erroring = false;
  �x		p.wrapErrs = false;
  ��		p.fmt.init((p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))));
  ��		$s = -1; return p;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newPrinter }; } $f._r = _r; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};

newPrinter	fmt.init~fmt.newPrinterfmt.pp
fmt.ppFreefmt.ptrType$1fmt.ptrType$2 (*fmt.pp).free �t	pp.ptr.prototype.free = function() {
		var p;
		p = this;
    		if (p.buf.$capacity > 65536) {
  �W			return;
    		}
  �c		p.buf = $subslice(p.buf, 0, 0);
  �v		p.arg = $ifaceNil;
  ��		p.value = new reflect.Value.ptr(ptrType.nil, 0, 0);
  ��		p.wrappedErr = $ifaceNil;
  ��		ppFree.Put(p);
    	};
	pp.prototype.free = function() { return this.$val.free(); };
ppfree~fmt.pp
fmt.ppFreefmt.ptrTypereflect.Value (*fmt.pp).Width �%	pp.ptr.prototype.Width = function() {
		var _tmp, _tmp$1, ok, p, wid;
		wid = 0;
		ok = false;
		p = this;
    		_tmp = p.fmt.wid;
		_tmp$1 = p.fmt.fmtFlags.widPresent;
		wid = _tmp;
		ok = _tmp$1;
		return [wid, ok];
    	};
	pp.prototype.Width = function() { return this.$val.Width(); };
ppfmt.pp (*fmt.pp).Precision �7	pp.ptr.prototype.Precision = function() {
		var _tmp, _tmp$1, ok, p, prec;
		prec = 0;
		ok = false;
		p = this;
    		_tmp = p.fmt.prec;
		_tmp$1 = p.fmt.fmtFlags.precPresent;
		prec = _tmp;
		ok = _tmp$1;
		return [prec, ok];
    	};
	pp.prototype.Precision = function() { return this.$val.Precision(); };
ppfmt.pp (*fmt.pp).Flag �?	pp.ptr.prototype.Flag = function(b) {
		var _1, b, p;
		p = this;
    		_1 = b;
    		if (_1 === (45)) {
  ��			return p.fmt.fmtFlags.minus;
    		} else if (_1 === (43)) {
  ��			return p.fmt.fmtFlags.plus || p.fmt.fmtFlags.plusV;
    		} else if (_1 === (35)) {
  ��			return p.fmt.fmtFlags.sharp || p.fmt.fmtFlags.sharpV;
    		} else if (_1 === (32)) {
  �!			return p.fmt.fmtFlags.space;
    		} else if (_1 === (48)) {
  �A			return p.fmt.fmtFlags.zero;
    		}
  �W		return false;
    	};
	pp.prototype.Flag = function(b) { return this.$val.Flag(b); };
ppfmt.pp (*fmt.pp).Write ��	pp.ptr.prototype.Write = function(b) {
		var _tmp, _tmp$1, b, err, p, ret;
		ret = 0;
		err = $ifaceNil;
		p = this;
  �		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).write(b);
    		_tmp = b.$length;
		_tmp$1 = $ifaceNil;
		ret = _tmp;
		err = _tmp$1;
		return [ret, err];
    	};
	pp.prototype.Write = function(b) { return this.$val.Write(b); };
ppfmt.ppfmt.ptrType$1
fmt.write~ (*fmt.pp).WriteString ��	pp.ptr.prototype.WriteString = function(s) {
		var _tmp, _tmp$1, err, p, ret, s;
		ret = 0;
		err = $ifaceNil;
		p = this;
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(s);
    		_tmp = s.length;
		_tmp$1 = $ifaceNil;
		ret = _tmp;
		err = _tmp$1;
		return [ret, err];
    	};
	pp.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
ppfmt.ppfmt.ptrType$1fmt.writeString~ fmt.FprintffmtFprintf Fprintf��	Fprintf = function(w, format, a) {
		var _r, _r$1, _tuple, a, err, format, n, p, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; a = $f.a; err = $f.err; format = $f.format; n = $f.n; p = $f.p; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  �		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  �%		$r = p.doPrintf(format, a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �<		_r$1 = w.Write($convertSliceType(p.buf, sliceType$2)); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		n = _tuple[0];
		err = _tuple[1];
  �U		p.free();
  �_		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fprintf }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.format = format; $f.n = n; $f.p = p; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fprintf = Fprintf;
Fprintffmt.Fprintffmt.doPrintf~	fmt.free~fmt.newPrinterfmt.sliceType$2 
fmt.PrintffmtPrintf Printf�o	Printf = function(format, a) {
		var $24r, _r, _tuple, a, err, format, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; format = $f.format; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fprintf(os.Stdout, format, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Printf }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.format = format; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Printf = Printf;
Printffmt.Fprintf
fmt.Printf	os.Stdout fmt.SprintffmtSprintf Sprintf�h	Sprintf = function(format, a) {
		var _r, a, format, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; a = $f.a; format = $f.format; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  � 		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  �		$r = p.doPrintf(format, a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �*		s = ($bytesToString(p.buf));
  �>		p.free();
  �H		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sprintf }; } $f._r = _r; $f.a = a; $f.format = format; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sprintf = Sprintf;
Sprintffmt.Sprintffmt.doPrintf~	fmt.free~fmt.newPrinter 
fmt.FprintfmtFprint Fprint��	Fprint = function(w, a) {
		var _r, _r$1, _tuple, a, err, n, p, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; p = $f.p; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  ��		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  ��		$r = p.doPrint(a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		_r$1 = w.Write($convertSliceType(p.buf, sliceType$2)); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		n = _tuple[0];
		err = _tuple[1];
  ��		p.free();
  ��		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fprint }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.p = p; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fprint = Fprint;
Fprint
fmt.Fprintfmt.doPrint~	fmt.free~fmt.newPrinterfmt.sliceType$2 	fmt.PrintfmtPrint Print�*	Print = function(a) {
		var $24r, _r, _tuple, a, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fprint(os.Stdout, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Print }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Print = Print;
Print
fmt.Fprint	fmt.Print	os.Stdout 
fmt.SprintfmtSprint Sprint�#	Sprint = function(a) {
		var _r, a, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; a = $f.a; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  ��		$r = p.doPrint(a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		s = ($bytesToString(p.buf));
  �		p.free();
  �)		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sprint }; } $f._r = _r; $f.a = a; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sprint = Sprint;
Sprint
fmt.Sprintfmt.doPrint~	fmt.free~fmt.newPrinter fmt.FprintlnfmtFprintln Fprintln��	Fprintln = function(w, a) {
		var _r, _r$1, _tuple, a, err, n, p, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; p = $f.p; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  ��		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  ��		$r = p.doPrintln(a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		_r$1 = w.Write($convertSliceType(p.buf, sliceType$2)); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		n = _tuple[0];
		err = _tuple[1];
  �'		p.free();
  �1		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fprintln }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.p = p; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fprintln = Fprintln;
Fprintlnfmt.Fprintlnfmt.doPrintln~	fmt.free~fmt.newPrinterfmt.sliceType$2 fmt.PrintlnfmtPrintln Println�4	Println = function(a) {
		var $24r, _r, _tuple, a, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fprintln(os.Stdout, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Println }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Println = Println;
Printlnfmt.Fprintlnfmt.Println	os.Stdout fmt.SprintlnfmtSprintln Sprintln�-	Sprintln = function(a) {
		var _r, a, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; a = $f.a; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �U		_r = newPrinter(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		p = _r;
  �h		$r = p.doPrintln(a); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �x		s = ($bytesToString(p.buf));
  ��		p.free();
  ��		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sprintln }; } $f._r = _r; $f.a = a; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sprintln = Sprintln;
Sprintlnfmt.Sprintlnfmt.doPrintln~	fmt.free~fmt.newPrinter fmt.getFieldfmtgetField getField�o	getField = function(v, i) {
		var _r, _r$1, i, v, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; i = $f.i; v = $f.v; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = $clone(v, reflect.Value).Field(i); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		val = _r;
  ��		/* */ if (($clone(val, reflect.Value).Kind() === 20) && !$clone(val, reflect.Value).IsNil()) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (($clone(val, reflect.Value).Kind() === 20) && !$clone(val, reflect.Value).IsNil()) { */ case 2:
  ��			_r$1 = $clone(val, reflect.Value).Elem(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			val = _r$1;
    		/* } */ case 3:
  ��		$s = -1; return val;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: getField }; } $f._r = _r; $f._r$1 = _r$1; $f.i = i; $f.v = v; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
getFieldfmt.getFieldreflect.Value fmt.tooLargefmttooLarge tooLargeW	tooLarge = function(x) {
		var x;
  ��		return x > 1000000 || x < -1000000;
    	};
tooLargefmt.tooLarge fmt.parsenumfmtparsenum parsenum�I	parsenum = function(s, start, end) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, end, isnum, newi, num, s, start;
		num = 0;
		isnum = false;
		newi = 0;
    		if (start >= end) {
    			_tmp = 0;
			_tmp$1 = false;
			_tmp$2 = end;
			num = _tmp;
			isnum = _tmp$1;
			newi = _tmp$2;
			return [num, isnum, newi];
    		}
  ��		newi = start;
		while (true) {
			if (!(newi < end && 48 <= s.charCodeAt(newi) && s.charCodeAt(newi) <= 57)) { break; }
    			if (tooLarge(num)) {
    				_tmp$3 = 0;
				_tmp$4 = false;
				_tmp$5 = end;
				num = _tmp$3;
				isnum = _tmp$4;
				newi = _tmp$5;
				return [num, isnum, newi];
    			}
  �<			num = ($imul(num, 10)) + (((s.charCodeAt(newi) - 48 << 24 >>> 24) >> 0)) >> 0;
  �^			isnum = true;
  ��			newi = newi + (1) >> 0;
    		}
  �o		return [num, isnum, newi];
    	};
parsenumfmt.parsenumfmt.tooLarge (*fmt.pp).unknownType ��	pp.ptr.prototype.unknownType = function(v) {
		var _r, p, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; p = $f.p; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    		if (!$clone(v, reflect.Value).IsValid()) {
  ��			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
  ��			$s = -1; return;
    		}
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(63);
  ��		_r = $clone(v, reflect.Value).Type().String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �%		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(63);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.unknownType }; } $f._r = _r; $f.p = p; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.unknownType = function(v) { return this.$val.unknownType(v); };
ppunknownType~fmt.ppfmt.ptrType$1fmt.writeByte~fmt.writeString~reflect.Value (*fmt.pp).badVerb �)	pp.ptr.prototype.badVerb = function(verb) {
		var _r, _r$1, p, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; p = $f.p; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �`		p.erroring = true;
  �s		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!");
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeRune(verb);
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(40);
  ��			/* */ if (!($interfaceIsEqual(p.arg, $ifaceNil))) { $s = 2; continue; }
			/* */ if ($clone(p.value, reflect.Value).IsValid()) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!($interfaceIsEqual(p.arg, $ifaceNil))) { */ case 2:
  ��				_r = reflect.TypeOf(p.arg).String(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(61);
  �0				$r = p.printArg(p.arg, 118); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 5; continue;
    			/* } else if ($clone(p.value, reflect.Value).IsValid()) { */ case 3:
  �b				_r$1 = $clone(p.value, reflect.Value).Type().String(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$1); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(61);
  ��				$r = p.printValue($clone(p.value, reflect.Value), 118, 0); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 5; continue;
			/* } else { */ case 4:
  ��				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
    			/* } */ case 5:
    		case 1:
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(41);
  �		p.erroring = false;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.badVerb }; } $f._r = _r; $f._r$1 = _r$1; $f.p = p; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.badVerb = function(verb) { return this.$val.badVerb(verb); };
ppbadVerb~	fmt.ppfmt.printArg~fmt.printValue~fmt.ptrType$1fmt.writeByte~fmt.writeRune~fmt.writeString~reflect.TypeOfreflect.Value (*fmt.pp).fmtBool �	pp.ptr.prototype.fmtBool = function(v, verb) {
		var _1, p, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; p = $f.p; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  �\			/* */ if ((_1 === (116)) || (_1 === (118))) { $s = 2; continue; }
			/* */ $s = 3; continue;
    			/* if ((_1 === (116)) || (_1 === (118))) { */ case 2:
  �m				p.fmt.fmtBoolean(v);
    				$s = 4; continue;
			/* } else { */ case 3:
  ��				$r = p.badVerb(verb); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 4:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtBool }; } $f._1 = _1; $f.p = p; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtBool = function(v, verb) { return this.$val.fmtBool(v, verb); };
ppfmtBool~fmt.badVerb~fmt.fmtBoolean~fmt.pp (*fmt.pp).fmt0x64 �x	pp.ptr.prototype.fmt0x64 = function(v, leading0x) {
		var leading0x, p, sharp, v;
		p = this;
  �X		sharp = p.fmt.fmtFlags.sharp;
  �n		p.fmt.fmtFlags.sharp = leading0x;
  ��		p.fmt.fmtInteger(v, 16, false, 118, "0123456789abcdefx");
  ��		p.fmt.fmtFlags.sharp = sharp;
    	};
	pp.prototype.fmt0x64 = function(v, leading0x) { return this.$val.fmt0x64(v, leading0x); };
ppfmt0x64~fmt.fmtInteger~fmt.pp (*fmt.pp).fmtInteger �
�	pp.ptr.prototype.fmtInteger = function(v, isSigned, verb) {
		var _1, isSigned, p, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; isSigned = $f.isSigned; p = $f.p; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  �Q			/* */ if (_1 === (118)) { $s = 2; continue; }
			/* */ if (_1 === (100)) { $s = 3; continue; }
			/* */ if (_1 === (98)) { $s = 4; continue; }
			/* */ if ((_1 === (111)) || (_1 === (79))) { $s = 5; continue; }
			/* */ if (_1 === (120)) { $s = 6; continue; }
			/* */ if (_1 === (88)) { $s = 7; continue; }
			/* */ if (_1 === (99)) { $s = 8; continue; }
			/* */ if (_1 === (113)) { $s = 9; continue; }
			/* */ if (_1 === (85)) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (_1 === (118)) { */ case 2:
    				if (p.fmt.fmtFlags.sharpV && !isSigned) {
  �					p.fmt0x64(v, true);
    				} else {
  ��					p.fmt.fmtInteger(v, 10, isSigned, verb, "0123456789abcdefx");
    				}
    				$s = 12; continue;
    			/* } else if (_1 === (100)) { */ case 3:
  ��				p.fmt.fmtInteger(v, 10, isSigned, verb, "0123456789abcdefx");
    				$s = 12; continue;
    			/* } else if (_1 === (98)) { */ case 4:
  � 				p.fmt.fmtInteger(v, 2, isSigned, verb, "0123456789abcdefx");
    				$s = 12; continue;
    			/* } else if ((_1 === (111)) || (_1 === (79))) { */ case 5:
  �b				p.fmt.fmtInteger(v, 8, isSigned, verb, "0123456789abcdefx");
    				$s = 12; continue;
    			/* } else if (_1 === (120)) { */ case 6:
  ��				p.fmt.fmtInteger(v, 16, isSigned, verb, "0123456789abcdefx");
    				$s = 12; continue;
    			/* } else if (_1 === (88)) { */ case 7:
  ��				p.fmt.fmtInteger(v, 16, isSigned, verb, "0123456789ABCDEFX");
    				$s = 12; continue;
    			/* } else if (_1 === (99)) { */ case 8:
  �				p.fmt.fmtC(v);
    				$s = 12; continue;
    			/* } else if (_1 === (113)) { */ case 9:
  �6				p.fmt.fmtQc(v);
    				$s = 12; continue;
    			/* } else if (_1 === (85)) { */ case 10:
  �R				p.fmt.fmtUnicode(v);
    				$s = 12; continue;
			/* } else { */ case 11:
  �r				$r = p.badVerb(verb); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 12:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtInteger }; } $f._1 = _1; $f.isSigned = isSigned; $f.p = p; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtInteger = function(v, isSigned, verb) { return this.$val.fmtInteger(v, isSigned, verb); };
ppfmtInteger~fmt.badVerb~fmt.fmt0x64~	fmt.fmtC~fmt.fmtInteger~
fmt.fmtQc~fmt.fmtUnicode~fmt.pp (*fmt.pp).fmtFloat ��	pp.ptr.prototype.fmtFloat = function(v, size, verb) {
		var _1, p, size, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; p = $f.p; size = $f.size; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  �L			/* */ if (_1 === (118)) { $s = 2; continue; }
			/* */ if ((_1 === (98)) || (_1 === (103)) || (_1 === (71)) || (_1 === (120)) || (_1 === (88))) { $s = 3; continue; }
			/* */ if ((_1 === (102)) || (_1 === (101)) || (_1 === (69))) { $s = 4; continue; }
			/* */ if (_1 === (70)) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_1 === (118)) { */ case 2:
  �X				p.fmt.fmtFloat(v, size, 103, -1);
    				$s = 7; continue;
    			/* } else if ((_1 === (98)) || (_1 === (103)) || (_1 === (71)) || (_1 === (120)) || (_1 === (88))) { */ case 3:
  ��				p.fmt.fmtFloat(v, size, verb, -1);
    				$s = 7; continue;
    			/* } else if ((_1 === (102)) || (_1 === (101)) || (_1 === (69))) { */ case 4:
  ��				p.fmt.fmtFloat(v, size, verb, 6);
    				$s = 7; continue;
    			/* } else if (_1 === (70)) { */ case 5:
  �				p.fmt.fmtFloat(v, size, 102, 6);
    				$s = 7; continue;
			/* } else { */ case 6:
  �-				$r = p.badVerb(verb); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 7:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtFloat }; } $f._1 = _1; $f.p = p; $f.size = size; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtFloat = function(v, size, verb) { return this.$val.fmtFloat(v, size, verb); };
pp	fmtFloat~fmt.badVerb~fmt.fmtFloat~fmt.pp (*fmt.pp).fmtComplex �	�	pp.ptr.prototype.fmtComplex = function(v, size, verb) {
		var _1, _q, _q$1, oldPlus, p, size, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _q = $f._q; _q$1 = $f._q$1; oldPlus = $f.oldPlus; p = $f.p; size = $f.size; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  ��			/* */ if ((_1 === (118)) || (_1 === (98)) || (_1 === (103)) || (_1 === (71)) || (_1 === (120)) || (_1 === (88)) || (_1 === (102)) || (_1 === (70)) || (_1 === (101)) || (_1 === (69))) { $s = 2; continue; }
			/* */ $s = 3; continue;
    			/* if ((_1 === (118)) || (_1 === (98)) || (_1 === (103)) || (_1 === (71)) || (_1 === (120)) || (_1 === (88)) || (_1 === (102)) || (_1 === (70)) || (_1 === (101)) || (_1 === (69))) { */ case 2:
  ��				oldPlus = p.fmt.fmtFlags.plus;
  ��				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(40);
  ��				$r = p.fmtFloat(v.$real, (_q = size / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), verb); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �>				p.fmt.fmtFlags.plus = true;
  �R				$r = p.fmtFloat(v.$imag, (_q$1 = size / 2, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), verb); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �v				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("i)");
  ��				p.fmt.fmtFlags.plus = oldPlus;
    				$s = 4; continue;
			/* } else { */ case 3:
  ��				$r = p.badVerb(verb); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 4:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtComplex }; } $f._1 = _1; $f._q = _q; $f._q$1 = _q$1; $f.oldPlus = oldPlus; $f.p = p; $f.size = size; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtComplex = function(v, size, verb) { return this.$val.fmtComplex(v, size, verb); };
ppfmtComplex~fmt.badVerb~fmt.fmtFloat~fmt.ppfmt.ptrType$1fmt.writeByte~fmt.writeString~ (*fmt.pp).fmtString ��	pp.ptr.prototype.fmtString = function(v, verb) {
		var _1, p, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; p = $f.p; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  �			/* */ if (_1 === (118)) { $s = 2; continue; }
			/* */ if (_1 === (115)) { $s = 3; continue; }
			/* */ if (_1 === (120)) { $s = 4; continue; }
			/* */ if (_1 === (88)) { $s = 5; continue; }
			/* */ if (_1 === (113)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (_1 === (118)) { */ case 2:
    				if (p.fmt.fmtFlags.sharpV) {
  �&					p.fmt.fmtQ(v);
    				} else {
  �B					p.fmt.fmtS(v);
    				}
    				$s = 8; continue;
    			/* } else if (_1 === (115)) { */ case 3:
  �a				p.fmt.fmtS(v);
    				$s = 8; continue;
    			/* } else if (_1 === (120)) { */ case 4:
  �|				p.fmt.fmtSx(v, "0123456789abcdefx");
    				$s = 8; continue;
    			/* } else if (_1 === (88)) { */ case 5:
  ��				p.fmt.fmtSx(v, "0123456789ABCDEFX");
    				$s = 8; continue;
    			/* } else if (_1 === (113)) { */ case 6:
  ��				p.fmt.fmtQ(v);
    				$s = 8; continue;
			/* } else { */ case 7:
  ��				$r = p.badVerb(verb); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 8:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtString }; } $f._1 = _1; $f.p = p; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtString = function(v, verb) { return this.$val.fmtString(v, verb); };
pp
fmtString~fmt.badVerb~	fmt.fmtQ~
fmt.fmtSx~	fmt.fmtS~fmt.pp (*fmt.pp).fmtBytes �J	pp.ptr.prototype.fmtBytes = function(v, verb, typeString) {
		var _1, _i, _i$1, _r, _ref, _ref$1, c, c$1, i, i$1, p, typeString, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; c = $f.c; c$1 = $f.c$1; i = $f.i; i$1 = $f.i$1; p = $f.p; typeString = $f.typeString; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    			_1 = verb;
  �F			/* */ if ((_1 === (118)) || (_1 === (100))) { $s = 2; continue; }
			/* */ if (_1 === (115)) { $s = 3; continue; }
			/* */ if (_1 === (120)) { $s = 4; continue; }
			/* */ if (_1 === (88)) { $s = 5; continue; }
			/* */ if (_1 === (113)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if ((_1 === (118)) || (_1 === (100))) { */ case 2:
    				if (p.fmt.fmtFlags.sharpV) {
  �l					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(typeString);
    					if (v === sliceType$2.nil) {
  ��						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(nil)");
  ��						$s = -1; return;
    					}
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(123);
  ��					_ref = v;
					_i = 0;
					while (true) {
						if (!(_i < _ref.$length)) { break; }
						i = _i;
						c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    						if (i > 0) {
  �							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(", ");
    						}
  �D						p.fmt0x64((new $Uint64(0, c)), true);
    						_i++;
					}
  �g					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(125);
    				} else {
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(91);
  ��					_ref$1 = v;
					_i$1 = 0;
					while (true) {
						if (!(_i$1 < _ref$1.$length)) { break; }
						i$1 = _i$1;
						c$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    						if (i$1 > 0) {
  ��							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    						}
  ��						p.fmt.fmtInteger((new $Uint64(0, c$1)), 10, false, verb, "0123456789abcdefx");
    						_i$1++;
					}
  �,					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(93);
    				}
    				$s = 8; continue;
    			/* } else if (_1 === (115)) { */ case 3:
  �R				p.fmt.fmtBs(v);
    				$s = 8; continue;
    			/* } else if (_1 === (120)) { */ case 4:
  �n				p.fmt.fmtBx(v, "0123456789abcdefx");
    				$s = 8; continue;
    			/* } else if (_1 === (88)) { */ case 5:
  ��				p.fmt.fmtBx(v, "0123456789ABCDEFX");
    				$s = 8; continue;
    			/* } else if (_1 === (113)) { */ case 6:
  ��				p.fmt.fmtQ(($bytesToString(v)));
    				$s = 8; continue;
			/* } else { */ case 7:
  ��				_r = reflect.ValueOf(v); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$r = p.printValue($clone(_r, reflect.Value), verb, 0); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 8:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtBytes }; } $f._1 = _1; $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.c = c; $f.c$1 = c$1; $f.i = i; $f.i$1 = i$1; $f.p = p; $f.typeString = typeString; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtBytes = function(v, verb, typeString) { return this.$val.fmtBytes(v, verb, typeString); };
pp	fmtBytes~fmt.fmt0x64~
fmt.fmtBs~
fmt.fmtBx~fmt.fmtInteger~	fmt.fmtQ~fmt.ppfmt.printValue~fmt.ptrType$1fmt.sliceType$2fmt.writeByte~fmt.writeString~reflect.Valuereflect.ValueOf (*fmt.pp).fmtPointer ��	pp.ptr.prototype.fmtPointer = function(value, verb) {
		var _1, _2, _r, p, u, value, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _r = $f._r; p = $f.p; u = $f.u; value = $f.value; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �I		u = 0;
    			_1 = $clone(value, reflect.Value).Kind();
  �k			/* */ if ((_1 === (18)) || (_1 === (19)) || (_1 === (21)) || (_1 === (22)) || (_1 === (23)) || (_1 === (26))) { $s = 2; continue; }
			/* */ $s = 3; continue;
    			/* if ((_1 === (18)) || (_1 === (19)) || (_1 === (21)) || (_1 === (22)) || (_1 === (23)) || (_1 === (26))) { */ case 2:
  ��				u = $clone(value, reflect.Value).Pointer();
    				$s = 4; continue;
			/* } else { */ case 3:
  ��				$r = p.badVerb(verb); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  � 				$s = -1; return;
    			/* } */ case 4:
    		case 1:
    			_2 = verb;
  �			/* */ if (_2 === (118)) { $s = 7; continue; }
			/* */ if (_2 === (112)) { $s = 8; continue; }
			/* */ if ((_2 === (98)) || (_2 === (111)) || (_2 === (100)) || (_2 === (120)) || (_2 === (88))) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (_2 === (118)) { */ case 7:
  �'				/* */ if (p.fmt.fmtFlags.sharpV) { $s = 12; continue; }
				/* */ $s = 13; continue;
    				/* if (p.fmt.fmtFlags.sharpV) { */ case 12:
  �<					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(40);
  �T					_r = $clone(value, reflect.Value).Type().String(); /* */ $s = 15; case 15: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(")(");
    					if (u === 0) {
  ��						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("nil");
    					} else {
  ��						p.fmt0x64((new $Uint64(0, u.constructor === Number ? u : 1)), true);
    					}
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(41);
    					$s = 14; continue;
				/* } else { */ case 13:
    					if (u === 0) {
  �.						p.fmt.padString("<nil>");
    					} else {
  �^						p.fmt0x64((new $Uint64(0, u.constructor === Number ? u : 1)), !p.fmt.fmtFlags.sharp);
    					}
    				/* } */ case 14:
    				$s = 11; continue;
    			/* } else if (_2 === (112)) { */ case 8:
  ��				p.fmt0x64((new $Uint64(0, u.constructor === Number ? u : 1)), !p.fmt.fmtFlags.sharp);
    				$s = 11; continue;
    			/* } else if ((_2 === (98)) || (_2 === (111)) || (_2 === (100)) || (_2 === (120)) || (_2 === (88))) { */ case 9:
  ��				$r = p.fmtInteger((new $Uint64(0, u.constructor === Number ? u : 1)), false, verb); /* */ $s = 17; case 17: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 11; continue;
			/* } else { */ case 10:
  �				$r = p.badVerb(verb); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 11:
    		case 6:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.fmtPointer }; } $f._1 = _1; $f._2 = _2; $f._r = _r; $f.p = p; $f.u = u; $f.value = value; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.fmtPointer = function(value, verb) { return this.$val.fmtPointer(value, verb); };
ppfmtPointer~	fmt.badVerb~fmt.fmt0x64~fmt.fmtInteger~fmt.padString~fmt.ppfmt.ptrType$1fmt.writeByte~fmt.writeString~reflect.Value (*fmt.pp).catchPanic �
�	pp.ptr.prototype.catchPanic = function(arg, verb, method) {
		var _r, arg, err, method, oldFlags, p, v, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; arg = $f.arg; err = $f.err; method = $f.method; oldFlags = $f.oldFlags; p = $f.p; v = $f.v; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �n		err = $recover();
  �k		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 1:
  �c			_r = reflect.ValueOf(arg); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			v = _r;
    			if (($clone(v, reflect.Value).Kind() === 22) && $clone(v, reflect.Value).IsNil()) {
  ��				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
  ��				$s = -1; return;
    			}
    			if (p.panicking) {
  ��				$panic(err);
    			}
  ��			oldFlags = $clone(p.fmt.fmtFlags, fmtFlags);
  ��			p.fmt.clearflags();
  �			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!");
  �6			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeRune(verb);
  �N			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(PANIC=");
  �o			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(method);
  ��			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(" method: ");
  ��			p.panicking = true;
  ��			$r = p.printArg(err, 118); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��			p.panicking = false;
  ��			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(41);
  �			fmtFlags.copy(p.fmt.fmtFlags, oldFlags);
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.catchPanic }; } $f._r = _r; $f.arg = arg; $f.err = err; $f.method = method; $f.oldFlags = oldFlags; $f.p = p; $f.v = v; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.catchPanic = function(arg, verb, method) { return this.$val.catchPanic(arg, verb, method); };
ppcatchPanic~
fmt.clearflags~fmt.fmtFlagsfmt.ppfmt.printArg~fmt.ptrType$1fmt.writeByte~fmt.writeRune~fmt.writeString~reflect.Valuereflect.ValueOf (*fmt.pp).handleMethods ��	pp.ptr.prototype.handleMethods = function(verb) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, _1, _r, _r$1, _r$2, _ref, _tuple, _tuple$1, _tuple$2, err, formatter, handled, ok, ok$1, ok$2, p, stringer, v, v$1, verb, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; formatter = $f.formatter; handled = $f.handled; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; p = $f.p; stringer = $f.stringer; v = $f.v; v$1 = $f.v$1; verb = $f.verb; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		handled = false;
		p = this;
  �^		/* */ if (p.erroring) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.erroring) { */ case 1:
  �p			$24r = handled;
			$s = 3; case 3: return $24r;
    		/* } */ case 2:
  �{		/* */ if (verb === 119) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (verb === 119) { */ case 4:
  ��			_tuple = $assertType(p.arg, $error, true);
			err = _tuple[0];
			ok = _tuple[1];
  �			/* */ if (!ok || !p.wrapErrs || !($interfaceIsEqual(p.wrappedErr, $ifaceNil))) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!ok || !p.wrapErrs || !($interfaceIsEqual(p.wrappedErr, $ifaceNil))) { */ case 6:
  �>				p.wrappedErr = $ifaceNil;
  �T				p.wrapErrs = false;
  �j				$r = p.badVerb(verb); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				handled = true;
				$24r$1 = handled;
				$s = 9; case 9: return $24r$1;
    			/* } */ case 7:
  ��			p.wrappedErr = err;
  ��			verb = 118;
    		/* } */ case 5:
  �
		_tuple$1 = $assertType(p.arg, Formatter, true);
		formatter = _tuple$1[0];
		ok$1 = _tuple$1[1];
  �		/* */ if (ok$1) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (ok$1) { */ case 10:
  �5			handled = true;
  �F			$deferred.push([$methodVal(p, "catchPanic"), [p.arg, verb, "Format"]]);
  �r			$r = formatter.Format(p, verb); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��			$24r$2 = handled;
			$s = 13; case 13: return $24r$2;
    		/* } */ case 11:
  ��		/* */ if (p.fmt.fmtFlags.sharpV) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if (p.fmt.fmtFlags.sharpV) { */ case 14:
  �			_tuple$2 = $assertType(p.arg, GoStringer, true);
			stringer = _tuple$2[0];
			ok$2 = _tuple$2[1];
  �				/* */ if (ok$2) { $s = 17; continue; }
			/* */ $s = 18; continue;
    			/* if (ok$2) { */ case 17:
  �8				handled = true;
  �J				$deferred.push([$methodVal(p, "catchPanic"), [p.arg, verb, "GoString"]]);
  ��				_r = stringer.GoString(); /* */ $s = 19; case 19: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$r = p.fmt.fmtS(_r); /* */ $s = 20; case 20: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��				$24r$3 = handled;
				$s = 21; case 21: return $24r$3;
    			/* } */ case 18:
    			$s = 16; continue;
		/* } else { */ case 15:
    				_1 = verb;
  ��				/* */ if ((_1 === (118)) || (_1 === (115)) || (_1 === (120)) || (_1 === (88)) || (_1 === (113))) { $s = 23; continue; }
				/* */ $s = 24; continue;
    				/* if ((_1 === (118)) || (_1 === (115)) || (_1 === (120)) || (_1 === (88)) || (_1 === (113))) { */ case 23:
  �x					_ref = p.arg;
					/* */ if ($assertType(_ref, $error, true)[1]) { $s = 25; continue; }
					/* */ if ($assertType(_ref, Stringer, true)[1]) { $s = 26; continue; }
					/* */ $s = 27; continue;
    					/* if ($assertType(_ref, $error, true)[1]) { */ case 25:
    						v = _ref;
  ��						handled = true;
  ��						$deferred.push([$methodVal(p, "catchPanic"), [p.arg, verb, "Error"]]);
  ��						_r$1 = v.Error(); /* */ $s = 28; case 28: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						$r = p.fmtString(_r$1, verb); /* */ $s = 29; case 29: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �						$24r$4 = handled;
						$s = 30; case 30: return $24r$4;
    					/* } else if ($assertType(_ref, Stringer, true)[1]) { */ case 26:
    						v$1 = _ref;
  �%						handled = true;
  �8						$deferred.push([$methodVal(p, "catchPanic"), [p.arg, verb, "String"]]);
  �f						_r$2 = v$1.String(); /* */ $s = 31; case 31: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						$r = p.fmtString(_r$2, verb); /* */ $s = 32; case 32: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��						$24r$5 = handled;
						$s = 33; case 33: return $24r$5;
    					/* } */ case 27:
    				/* } */ case 24:
    			case 22:
    		/* } */ case 16:
    		handled = false;
		$24r$6 = handled;
		$s = 34; case 34: return $24r$6;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  handled; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: pp.ptr.prototype.handleMethods }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.formatter = formatter; $f.handled = handled; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.p = p; $f.stringer = stringer; $f.v = v; $f.v$1 = v$1; $f.verb = verb; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	pp.prototype.handleMethods = function(verb) { return this.$val.handleMethods(verb); };
pphandleMethods~fmt.Formatterfmt.GoStringerfmt.Stringerfmt.badVerb~fmt.catchPanic~fmt.fmtString~	fmt.fmtS~fmt.pp (*fmt.pp).printArg �-�	pp.ptr.prototype.printArg = function(arg, verb) {
		var _1, _2, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _ref, arg, f, f$1, f$10, f$11, f$12, f$13, f$14, f$15, f$16, f$17, f$18, f$19, f$2, f$3, f$4, f$5, f$6, f$7, f$8, f$9, p, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _ref = $f._ref; arg = $f.arg; f = $f.f; f$1 = $f.f$1; f$10 = $f.f$10; f$11 = $f.f$11; f$12 = $f.f$12; f$13 = $f.f$13; f$14 = $f.f$14; f$15 = $f.f$15; f$16 = $f.f$16; f$17 = $f.f$17; f$18 = $f.f$18; f$19 = $f.f$19; f$2 = $f.f$2; f$3 = $f.f$3; f$4 = $f.f$4; f$5 = $f.f$5; f$6 = $f.f$6; f$7 = $f.f$7; f$8 = $f.f$8; f$9 = $f.f$9; p = $f.p; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ��		p.arg = arg;
  ��		p.value = new reflect.Value.ptr(ptrType.nil, 0, 0);
  �
		/* */ if ($interfaceIsEqual(arg, $ifaceNil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ($interfaceIsEqual(arg, $ifaceNil)) { */ case 1:
    				_1 = verb;
  �,				/* */ if ((_1 === (84)) || (_1 === (118))) { $s = 4; continue; }
				/* */ $s = 5; continue;
    				/* if ((_1 === (84)) || (_1 === (118))) { */ case 4:
  �>					p.fmt.padString("<nil>");
    					$s = 6; continue;
				/* } else { */ case 5:
  �l					$r = p.badVerb(verb); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 6:
    			case 3:
  ��			$s = -1; return;
    		/* } */ case 2:
    			_2 = verb;
  �			/* */ if (_2 === (84)) { $s = 9; continue; }
			/* */ if (_2 === (112)) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (_2 === (84)) { */ case 9:
  �%				_r = reflect.TypeOf(arg).String(); /* */ $s = 12; case 12: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$r = p.fmt.fmtS(_r); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �P				$s = -1; return;
    			/* } else if (_2 === (112)) { */ case 10:
  �d				_r$1 = reflect.ValueOf(arg); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$r = p.fmtPointer($clone(_r$1, reflect.Value), 112); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��				$s = -1; return;
    			/* } */ case 11:
    		case 8:
  ��		_ref = arg;
		/* */ if ($assertType(_ref, $Bool, true)[1]) { $s = 16; continue; }
		/* */ if ($assertType(_ref, $Float32, true)[1]) { $s = 17; continue; }
		/* */ if ($assertType(_ref, $Float64, true)[1]) { $s = 18; continue; }
		/* */ if ($assertType(_ref, $Complex64, true)[1]) { $s = 19; continue; }
		/* */ if ($assertType(_ref, $Complex128, true)[1]) { $s = 20; continue; }
		/* */ if ($assertType(_ref, $Int, true)[1]) { $s = 21; continue; }
		/* */ if ($assertType(_ref, $Int8, true)[1]) { $s = 22; continue; }
		/* */ if ($assertType(_ref, $Int16, true)[1]) { $s = 23; continue; }
		/* */ if ($assertType(_ref, $Int32, true)[1]) { $s = 24; continue; }
		/* */ if ($assertType(_ref, $Int64, true)[1]) { $s = 25; continue; }
		/* */ if ($assertType(_ref, $Uint, true)[1]) { $s = 26; continue; }
		/* */ if ($assertType(_ref, $Uint8, true)[1]) { $s = 27; continue; }
		/* */ if ($assertType(_ref, $Uint16, true)[1]) { $s = 28; continue; }
		/* */ if ($assertType(_ref, $Uint32, true)[1]) { $s = 29; continue; }
		/* */ if ($assertType(_ref, $Uint64, true)[1]) { $s = 30; continue; }
		/* */ if ($assertType(_ref, $Uintptr, true)[1]) { $s = 31; continue; }
		/* */ if ($assertType(_ref, $String, true)[1]) { $s = 32; continue; }
		/* */ if ($assertType(_ref, sliceType$2, true)[1]) { $s = 33; continue; }
		/* */ if ($assertType(_ref, reflect.Value, true)[1]) { $s = 34; continue; }
		/* */ $s = 35; continue;
    		/* if ($assertType(_ref, $Bool, true)[1]) { */ case 16:
    			f = _ref.$val;
  ��			$r = p.fmtBool(f, verb); /* */ $s = 37; case 37: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Float32, true)[1]) { */ case 17:
    			f$1 = _ref.$val;
  �			$r = p.fmtFloat((f$1), 32, verb); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Float64, true)[1]) { */ case 18:
    			f$2 = _ref.$val;
  �F			$r = p.fmtFloat(f$2, 64, verb); /* */ $s = 39; case 39: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Complex64, true)[1]) { */ case 19:
    			f$3 = _ref.$val;
  �q			$r = p.fmtComplex((new $Complex128(f$3.$real, f$3.$imag)), 64, verb); /* */ $s = 40; case 40: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Complex128, true)[1]) { */ case 20:
    			f$4 = _ref.$val;
  ��			$r = p.fmtComplex(f$4, 128, verb); /* */ $s = 41; case 41: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Int, true)[1]) { */ case 21:
    			f$5 = _ref.$val;
  ��			$r = p.fmtInteger((new $Uint64(0, f$5)), true, verb); /* */ $s = 42; case 42: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Int8, true)[1]) { */ case 22:
    			f$6 = _ref.$val;
  �			$r = p.fmtInteger((new $Uint64(0, f$6)), true, verb); /* */ $s = 43; case 43: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Int16, true)[1]) { */ case 23:
    			f$7 = _ref.$val;
  �<			$r = p.fmtInteger((new $Uint64(0, f$7)), true, verb); /* */ $s = 44; case 44: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Int32, true)[1]) { */ case 24:
    			f$8 = _ref.$val;
  �q			$r = p.fmtInteger((new $Uint64(0, f$8)), true, verb); /* */ $s = 45; case 45: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Int64, true)[1]) { */ case 25:
    			f$9 = _ref.$val;
  ��			$r = p.fmtInteger((new $Uint64(f$9.$high, f$9.$low)), true, verb); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uint, true)[1]) { */ case 26:
    			f$10 = _ref.$val;
  ��			$r = p.fmtInteger((new $Uint64(0, f$10)), false, verb); /* */ $s = 47; case 47: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uint8, true)[1]) { */ case 27:
    			f$11 = _ref.$val;
  �			$r = p.fmtInteger((new $Uint64(0, f$11)), false, verb); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uint16, true)[1]) { */ case 28:
    			f$12 = _ref.$val;
  �I			$r = p.fmtInteger((new $Uint64(0, f$12)), false, verb); /* */ $s = 49; case 49: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uint32, true)[1]) { */ case 29:
    			f$13 = _ref.$val;
  ��			$r = p.fmtInteger((new $Uint64(0, f$13)), false, verb); /* */ $s = 50; case 50: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uint64, true)[1]) { */ case 30:
    			f$14 = _ref.$val;
  ��			$r = p.fmtInteger(f$14, false, verb); /* */ $s = 51; case 51: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $Uintptr, true)[1]) { */ case 31:
    			f$15 = _ref.$val;
  ��			$r = p.fmtInteger((new $Uint64(0, f$15.constructor === Number ? f$15 : 1)), false, verb); /* */ $s = 52; case 52: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, $String, true)[1]) { */ case 32:
    			f$16 = _ref.$val;
  �"			$r = p.fmtString(f$16, verb); /* */ $s = 53; case 53: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, sliceType$2, true)[1]) { */ case 33:
    			f$17 = _ref.$val;
  �G			$r = p.fmtBytes(f$17, verb, "[]byte"); /* */ $s = 54; case 54: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
    		/* } else if ($assertType(_ref, reflect.Value, true)[1]) { */ case 34:
    			f$18 = _ref.$val;
  ��			/* */ if ($clone(f$18, reflect.Value).IsValid() && $clone(f$18, reflect.Value).CanInterface()) { $s = 55; continue; }
			/* */ $s = 56; continue;
    			/* if ($clone(f$18, reflect.Value).IsValid() && $clone(f$18, reflect.Value).CanInterface()) { */ case 55:
  �				_r$2 = $clone(f$18, reflect.Value).Interface(); /* */ $s = 57; case 57: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				p.arg = _r$2;
  �(				_r$3 = p.handleMethods(verb); /* */ $s = 60; case 60: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				/* */ if (_r$3) { $s = 58; continue; }
				/* */ $s = 59; continue;
    				/* if (_r$3) { */ case 58:
  �G					$s = -1; return;
    				/* } */ case 59:
    			/* } */ case 56:
  �Y			$r = p.printValue($clone(f$18, reflect.Value), verb, 0); /* */ $s = 61; case 61: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 36; continue;
		/* } else { */ case 35:
    			f$19 = _ref;
  ��			_r$4 = p.handleMethods(verb); /* */ $s = 64; case 64: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* */ if (!_r$4) { $s = 62; continue; }
			/* */ $s = 63; continue;
    			/* if (!_r$4) { */ case 62:
  �C				_r$5 = reflect.ValueOf(f$19); /* */ $s = 65; case 65: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				$r = p.printValue($clone(_r$5, reflect.Value), verb, 0); /* */ $s = 66; case 66: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 63:
    		/* } */ case 36:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.printArg }; } $f._1 = _1; $f._2 = _2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._ref = _ref; $f.arg = arg; $f.f = f; $f.f$1 = f$1; $f.f$10 = f$10; $f.f$11 = f$11; $f.f$12 = f$12; $f.f$13 = f$13; $f.f$14 = f$14; $f.f$15 = f$15; $f.f$16 = f$16; $f.f$17 = f$17; $f.f$18 = f$18; $f.f$19 = f$19; $f.f$2 = f$2; $f.f$3 = f$3; $f.f$4 = f$4; $f.f$5 = f$5; $f.f$6 = f$6; $f.f$7 = f$7; $f.f$8 = f$8; $f.f$9 = f$9; $f.p = p; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.printArg = function(arg, verb) { return this.$val.printArg(arg, verb); };
pp	printArg~fmt.badVerb~fmt.fmtBool~fmt.fmtBytes~fmt.fmtComplex~fmt.fmtFloat~fmt.fmtInteger~fmt.fmtPointer~fmt.fmtString~	fmt.fmtS~fmt.handleMethods~fmt.padString~fmt.ppfmt.printValue~fmt.ptrTypefmt.sliceType$2reflect.TypeOfreflect.Valuereflect.ValueOf (*fmt.pp).printValue �^m	pp.ptr.prototype.printValue = function(value, verb, depth) {
		var _1, _2, _3, _4, _arg, _arg$1, _arg$2, _i, _i$1, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, a, bytes, depth, f, i, i$1, i$2, i$3, i$4, key, name, p, sorted, t, value, value$1, verb, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; a = $f.a; bytes = $f.bytes; depth = $f.depth; f = $f.f; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; key = $f.key; name = $f.name; p = $f.p; sorted = $f.sorted; t = $f.t; value = $f.value; value$1 = $f.value$1; verb = $f.verb; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ��		/* */ if (depth > 0 && $clone(value, reflect.Value).IsValid() && $clone(value, reflect.Value).CanInterface()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (depth > 0 && $clone(value, reflect.Value).IsValid() && $clone(value, reflect.Value).CanInterface()) { */ case 1:
  �			_r = $clone(value, reflect.Value).Interface(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			p.arg = _r;
  �1			_r$1 = p.handleMethods(verb); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (_r$1) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (_r$1) { */ case 4:
  �O				$s = -1; return;
    			/* } */ case 5:
    		/* } */ case 2:
  �^		p.arg = $ifaceNil;
  �k		p.value = value;
  ��			f = value;
    			_1 = $clone(value, reflect.Value).Kind();
  ��			/* */ if (_1 === (0)) { $s = 8; continue; }
			/* */ if (_1 === (1)) { $s = 9; continue; }
			/* */ if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { $s = 10; continue; }
			/* */ if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { $s = 11; continue; }
			/* */ if (_1 === (13)) { $s = 12; continue; }
			/* */ if (_1 === (14)) { $s = 13; continue; }
			/* */ if (_1 === (15)) { $s = 14; continue; }
			/* */ if (_1 === (16)) { $s = 15; continue; }
			/* */ if (_1 === (24)) { $s = 16; continue; }
			/* */ if (_1 === (21)) { $s = 17; continue; }
			/* */ if (_1 === (25)) { $s = 18; continue; }
			/* */ if (_1 === (20)) { $s = 19; continue; }
			/* */ if ((_1 === (17)) || (_1 === (23))) { $s = 20; continue; }
			/* */ if (_1 === (22)) { $s = 21; continue; }
			/* */ if ((_1 === (18)) || (_1 === (19)) || (_1 === (26))) { $s = 22; continue; }
			/* */ $s = 23; continue;
    			/* if (_1 === (0)) { */ case 8:
  ��				/* */ if (depth === 0) { $s = 25; continue; }
				/* */ $s = 26; continue;
    				/* if (depth === 0) { */ case 25:
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<invalid reflect.Value>");
    					$s = 27; continue;
				/* } else { */ case 26:
    						_2 = verb;
  �						/* */ if (_2 === (118)) { $s = 29; continue; }
						/* */ $s = 30; continue;
    						/* if (_2 === (118)) { */ case 29:
  �							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
    							$s = 31; continue;
						/* } else { */ case 30:
  �N							$r = p.badVerb(verb); /* */ $s = 32; case 32: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						/* } */ case 31:
    					case 28:
    				/* } */ case 27:
    				$s = 24; continue;
    			/* } else if (_1 === (1)) { */ case 9:
  �}				$r = p.fmtBool($clone(f, reflect.Value).Bool(), verb); /* */ $s = 33; case 33: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { */ case 10:
  ��				$r = p.fmtInteger(((x = $clone(f, reflect.Value).Int(), new $Uint64(x.$high, x.$low))), true, verb); /* */ $s = 34; case 34: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { */ case 11:
  �y				$r = p.fmtInteger($clone(f, reflect.Value).Uint(), false, verb); /* */ $s = 35; case 35: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (13)) { */ case 12:
  ��				$r = p.fmtFloat($clone(f, reflect.Value).Float(), 32, verb); /* */ $s = 36; case 36: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (14)) { */ case 13:
  ��				$r = p.fmtFloat($clone(f, reflect.Value).Float(), 64, verb); /* */ $s = 37; case 37: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (15)) { */ case 14:
  �-				$r = p.fmtComplex($clone(f, reflect.Value).Complex(), 64, verb); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (16)) { */ case 15:
  �m				$r = p.fmtComplex($clone(f, reflect.Value).Complex(), 128, verb); /* */ $s = 39; case 39: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (24)) { */ case 16:
  ª				_r$2 = $clone(f, reflect.Value).String(); /* */ $s = 40; case 40: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$r = p.fmtString(_r$2, verb); /* */ $s = 41; case 41: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if (_1 === (21)) { */ case 17:
  ��				/* */ if (p.fmt.fmtFlags.sharpV) { $s = 42; continue; }
				/* */ $s = 43; continue;
    				/* if (p.fmt.fmtFlags.sharpV) { */ case 42:
  ��					_r$3 = $clone(f, reflect.Value).Type().String(); /* */ $s = 45; case 45: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$3); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					if ($clone(f, reflect.Value).IsNil()) {
  �-						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(nil)");
  �S						$s = -1; return;
    					}
  �b					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(123);
    					$s = 44; continue;
				/* } else { */ case 43:
  Å					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("map[");
    				/* } */ case 44:
  è				_r$4 = fmtsort.Sort($clone(f, reflect.Value)); /* */ $s = 47; case 47: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				sorted = _r$4;
  ��				_ref = sorted.Key;
				_i = 0;
				/* while (true) { */ case 48:
					/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 49; continue; }
					i = _i;
					key = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    					if (i > 0) {
    						if (p.fmt.fmtFlags.sharpV) {
  �							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(", ");
    						} else {
  �D							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    						}
    					}
  �g					$r = p.printValue($clone(key, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 50; case 50: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ċ					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(58);
  ģ					$r = p.printValue($clone((x$1 = sorted.Value, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])), reflect.Value), verb, depth + 1 >> 0); /* */ $s = 51; case 51: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i++;
				$s = 48; continue;
				case 49:
    				if (p.fmt.fmtFlags.sharpV) {
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(125);
    				} else {
  �					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(93);
    				}
    				$s = 24; continue;
    			/* } else if (_1 === (25)) { */ case 18:
  �?				/* */ if (p.fmt.fmtFlags.sharpV) { $s = 52; continue; }
				/* */ $s = 53; continue;
    				/* if (p.fmt.fmtFlags.sharpV) { */ case 52:
  �T					_r$5 = $clone(f, reflect.Value).Type().String(); /* */ $s = 54; case 54: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$5); /* */ $s = 55; case 55: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 53:
  �				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(123);
  Ś				i$1 = 0;
				/* while (true) { */ case 56:
					/* if (!(i$1 < $clone(f, reflect.Value).NumField())) { break; } */ if(!(i$1 < $clone(f, reflect.Value).NumField())) { $s = 57; continue; }
    					if (i$1 > 0) {
    						if (p.fmt.fmtFlags.sharpV) {
  ��							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(", ");
    						} else {
  �							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    						}
    					}
  �<					/* */ if (p.fmt.fmtFlags.plusV || p.fmt.fmtFlags.sharpV) { $s = 58; continue; }
					/* */ $s = 59; continue;
    					/* if (p.fmt.fmtFlags.plusV || p.fmt.fmtFlags.sharpV) { */ case 58:
  �d						_r$6 = $clone(f, reflect.Value).Type().Field(i$1); /* */ $s = 60; case 60: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
						name = _r$6.Name;
    						if (!(name === "")) {
  Ɩ							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(name);
  Ƴ							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(58);
    						}
    					/* } */ case 59:
  ��					_r$7 = getField($clone(f, reflect.Value), i$1); /* */ $s = 61; case 61: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					$r = p.printValue($clone(_r$7, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 62; case 62: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Ŵ					i$1 = i$1 + (1) >> 0;
    				$s = 56; continue;
				case 57:
  �				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(125);
    				$s = 24; continue;
    			/* } else if (_1 === (20)) { */ case 19:
  �8				_r$8 = $clone(f, reflect.Value).Elem(); /* */ $s = 63; case 63: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				value$1 = _r$8;
  �L				/* */ if (!$clone(value$1, reflect.Value).IsValid()) { $s = 64; continue; }
				/* */ $s = 65; continue;
    				/* if (!$clone(value$1, reflect.Value).IsValid()) { */ case 64:
  �e					/* */ if (p.fmt.fmtFlags.sharpV) { $s = 67; continue; }
					/* */ $s = 68; continue;
    					/* if (p.fmt.fmtFlags.sharpV) { */ case 67:
  �{						_r$9 = $clone(f, reflect.Value).Type().String(); /* */ $s = 70; case 70: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
						$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$9); /* */ $s = 71; case 71: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Ǥ						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(nil)");
    						$s = 69; continue;
					/* } else { */ case 68:
  ��						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
    					/* } */ case 69:
    					$s = 66; continue;
				/* } else { */ case 65:
  �					$r = p.printValue($clone(value$1, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 72; case 72: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 66:
    				$s = 24; continue;
    			/* } else if ((_1 === (17)) || (_1 === (23))) { */ case 20:
    					_3 = verb;
  �h					/* */ if ((_3 === (115)) || (_3 === (113)) || (_3 === (120)) || (_3 === (88))) { $s = 74; continue; }
					/* */ $s = 75; continue;
    					/* if ((_3 === (115)) || (_3 === (113)) || (_3 === (120)) || (_3 === (88))) { */ case 74:
  ��						t = $clone(f, reflect.Value).Type();
  ��						_r$10 = t.Elem(); /* */ $s = 78; case 78: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
						_r$11 = _r$10.Kind(); /* */ $s = 79; case 79: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
						/* */ if (_r$11 === 8) { $s = 76; continue; }
						/* */ $s = 77; continue;
    						/* if (_r$11 === 8) { */ case 76:
  �							bytes = sliceType$2.nil;
  �							/* */ if ($clone(f, reflect.Value).Kind() === 23) { $s = 80; continue; }
							/* */ if ($clone(f, reflect.Value).CanAddr()) { $s = 81; continue; }
							/* */ $s = 82; continue;
    							/* if ($clone(f, reflect.Value).Kind() === 23) { */ case 80:
  �C								_r$12 = $clone(f, reflect.Value).Bytes(); /* */ $s = 84; case 84: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
								bytes = _r$12;
    								$s = 83; continue;
    							/* } else if ($clone(f, reflect.Value).CanAddr()) { */ case 81:
  �v								_r$13 = $clone(f, reflect.Value).Slice(0, $clone(f, reflect.Value).Len()); /* */ $s = 85; case 85: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
								_r$14 = $clone(_r$13, reflect.Value).Bytes(); /* */ $s = 86; case 86: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
								bytes = _r$14;
    								$s = 83; continue;
							/* } else { */ case 82:
  �s								bytes = $makeSlice(sliceType$2, $clone(f, reflect.Value).Len());
  ʖ								_ref$1 = bytes;
								_i$1 = 0;
								/* while (true) { */ case 87:
									/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 88; continue; }
									i$2 = _i$1;
  ʳ									_r$15 = $clone(f, reflect.Value).Index(i$2); /* */ $s = 89; case 89: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
									_r$16 = $clone(_r$15, reflect.Value).Uint(); /* */ $s = 90; case 90: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
									((i$2 < 0 || i$2 >= bytes.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes.$array[bytes.$offset + i$2] = ((_r$16.$low << 24 >>> 24)));
    									_i$1++;
								$s = 87; continue;
								case 88:
    							/* } */ case 83:
  ��							_arg = bytes;
							_arg$1 = verb;
							_r$17 = t.String(); /* */ $s = 91; case 91: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
							_arg$2 = _r$17;
							$r = p.fmtBytes(_arg, _arg$1, _arg$2); /* */ $s = 92; case 92: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �							$s = -1; return;
    						/* } */ case 77:
    					/* } */ case 75:
    				case 73:
  �!				/* */ if (p.fmt.fmtFlags.sharpV) { $s = 93; continue; }
				/* */ $s = 94; continue;
    				/* if (p.fmt.fmtFlags.sharpV) { */ case 93:
  �6					_r$18 = $clone(f, reflect.Value).Type().String(); /* */ $s = 96; case 96: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
					$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$18); /* */ $s = 97; case 97: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					if (($clone(f, reflect.Value).Kind() === 23) && $clone(f, reflect.Value).IsNil()) {
  ˎ						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(nil)");
  ˴						$s = -1; return;
    					}
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(123);
  ��					i$3 = 0;
					/* while (true) { */ case 98:
						/* if (!(i$3 < $clone(f, reflect.Value).Len())) { break; } */ if(!(i$3 < $clone(f, reflect.Value).Len())) { $s = 99; continue; }
    						if (i$3 > 0) {
  �							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(", ");
    						}
  �<						_r$19 = $clone(f, reflect.Value).Index(i$3); /* */ $s = 100; case 100: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
						$r = p.printValue($clone(_r$19, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 101; case 101: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��						i$3 = i$3 + (1) >> 0;
    					$s = 98; continue;
					case 99:
  �l					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(125);
    					$s = 95; continue;
				/* } else { */ case 94:
  ̏					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(91);
  ̫					i$4 = 0;
					/* while (true) { */ case 102:
						/* if (!(i$4 < $clone(f, reflect.Value).Len())) { break; } */ if(!(i$4 < $clone(f, reflect.Value).Len())) { $s = 103; continue; }
    						if (i$4 > 0) {
  ��							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    						}
  ��						_r$20 = $clone(f, reflect.Value).Index(i$4); /* */ $s = 104; case 104: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
						$r = p.printValue($clone(_r$20, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 105; case 105: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��						i$4 = i$4 + (1) >> 0;
    					$s = 102; continue;
					case 103:
  �)					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(93);
    				/* } */ case 95:
    				$s = 24; continue;
    			/* } else if (_1 === (22)) { */ case 21:
  ͵				/* */ if ((depth === 0) && !(($clone(f, reflect.Value).Pointer() === 0))) { $s = 106; continue; }
				/* */ $s = 107; continue;
    				/* if ((depth === 0) && !(($clone(f, reflect.Value).Pointer() === 0))) { */ case 106:
  ��						_r$21 = $clone(f, reflect.Value).Elem(); /* */ $s = 109; case 109: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
						a = _r$21;
    						_4 = $clone(a, reflect.Value).Kind();
  � 						/* */ if ((_4 === (17)) || (_4 === (23)) || (_4 === (25)) || (_4 === (21))) { $s = 110; continue; }
						/* */ $s = 111; continue;
    						/* if ((_4 === (17)) || (_4 === (23)) || (_4 === (25)) || (_4 === (21))) { */ case 110:
  �D							(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(38);
  �]							$r = p.printValue($clone(a, reflect.Value), verb, depth + 1 >> 0); /* */ $s = 112; case 112: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ΀							$s = -1; return;
    						/* } */ case 111:
    					case 108:
    				/* } */ case 107:
  ��				$r = p.fmtPointer($clone(f, reflect.Value), verb); /* */ $s = 113; case 113: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
    			/* } else if ((_1 === (18)) || (_1 === (19)) || (_1 === (26))) { */ case 22:
  ��				$r = p.fmtPointer($clone(f, reflect.Value), verb); /* */ $s = 114; case 114: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 24; continue;
			/* } else { */ case 23:
  ��				$r = p.unknownType($clone(f, reflect.Value)); /* */ $s = 115; case 115: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 24:
    		case 7:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.printValue }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f.a = a; $f.bytes = bytes; $f.depth = depth; $f.f = f; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.key = key; $f.name = name; $f.p = p; $f.sorted = sorted; $f.t = t; $f.value = value; $f.value$1 = value$1; $f.verb = verb; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.printValue = function(value, verb, depth) { return this.$val.printValue(value, verb, depth); };
ppprintValue~fmt.badVerb~fmt.fmtBool~fmt.fmtBytes~fmt.fmtComplex~fmt.fmtFloat~fmt.fmtInteger~fmt.fmtPointer~fmt.fmtString~fmt.getFieldfmt.handleMethods~fmt.ppfmt.printValue~fmt.ptrType$1fmt.sliceType$2fmt.unknownType~fmt.writeByte~fmt.writeString~internal/fmtsort.Sortreflect.Value fmt.intFromArgfmt
intFromArg 
intFromArg�
�	intFromArg = function(a, argNum) {
		var _1, _r, _tuple, a, argNum, isInt, n, n$1, newArgNum, num, v, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tuple = $f._tuple; a = $f.a; argNum = $f.argNum; isInt = $f.isInt; n = $f.n; n$1 = $f.n$1; newArgNum = $f.newArgNum; num = $f.num; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		num = 0;
		isInt = false;
		newArgNum = 0;
  ��		newArgNum = argNum;
  ��		/* */ if (argNum < a.$length) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (argNum < a.$length) { */ case 1:
  � 			_tuple = $assertType(((argNum < 0 || argNum >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + argNum]), $Int, true);
			num = _tuple[0];
			isInt = _tuple[1];
  �4			/* */ if (!isInt) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!isInt) { */ case 3:
  �]					_r = reflect.ValueOf(((argNum < 0 || argNum >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + argNum])); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					v = _r;
    					_1 = $clone(v, reflect.Value).Kind();
    					if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) {
  ��						n = $clone(v, reflect.Value).Int();
    						if ((x = (new $Int64(0, (((n.$low + ((n.$high >> 31) * 4294967296)) >> 0)))), (x.$high === n.$high && x.$low === n.$low))) {
  �							num = (((n.$low + ((n.$high >> 31) * 4294967296)) >> 0));
  �							isInt = true;
    						}
    					} else if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) {
  њ						n$1 = $clone(v, reflect.Value).Uint();
    						if ((x$1 = (new $Int64(n$1.$high, n$1.$low)), (x$1.$high > 0 || (x$1.$high === 0 && x$1.$low >= 0))) && (x$2 = (new $Uint64(0, ((n$1.$low >> 0)))), (x$2.$high === n$1.$high && x$2.$low === n$1.$low))) {
  ��							num = ((n$1.$low >> 0));
  ��							isInt = true;
    						}
    					}
    				case 5:
    			/* } */ case 4:
  �0			newArgNum = argNum + 1 >> 0;
    			if (tooLarge(num)) {
  �_				num = 0;
  �j				isInt = false;
    			}
    		/* } */ case 2:
  Ҁ		$s = -1; return [num, isInt, newArgNum];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: intFromArg }; } $f._1 = _1; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.argNum = argNum; $f.isInt = isInt; $f.n = n; $f.n$1 = n$1; $f.newArgNum = newArgNum; $f.num = num; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};

intFromArgfmt.intFromArgfmt.tooLargereflect.Valuereflect.ValueOf fmt.parseArgNumberfmtparseArgNumber parseArgNumber��	parseArgNumber = function(format) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, format, i, index, newi, ok, ok$1, wid, width;
		index = 0;
		wid = 0;
		ok = false;
    		if (format.length < 3) {
    			_tmp = 0;
			_tmp$1 = 1;
			_tmp$2 = false;
			index = _tmp;
			wid = _tmp$1;
			ok = _tmp$2;
			return [index, wid, ok];
    		}
  ��		i = 1;
		while (true) {
			if (!(i < format.length)) { break; }
    			if (format.charCodeAt(i) === 93) {
  �				_tuple = parsenum(format, 1, i);
				width = _tuple[0];
				ok$1 = _tuple[1];
				newi = _tuple[2];
    				if (!ok$1 || !((newi === i))) {
    					_tmp$3 = 0;
					_tmp$4 = i + 1 >> 0;
					_tmp$5 = false;
					index = _tmp$3;
					wid = _tmp$4;
					ok = _tmp$5;
					return [index, wid, ok];
    				}
    				_tmp$6 = width - 1 >> 0;
				_tmp$7 = i + 1 >> 0;
				_tmp$8 = true;
				index = _tmp$6;
				wid = _tmp$7;
				ok = _tmp$8;
				return [index, wid, ok];
    			}
  ��			i = i + (1) >> 0;
    		}
    		_tmp$9 = 0;
		_tmp$10 = 1;
		_tmp$11 = false;
		index = _tmp$9;
		wid = _tmp$10;
		ok = _tmp$11;
		return [index, wid, ok];
    	};
parseArgNumberfmt.parseArgNumberfmt.parsenum (*fmt.pp).argNumber ��	pp.ptr.prototype.argNumber = function(argNum, format, i, numArgs) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, argNum, format, found, i, index, newArgNum, newi, numArgs, ok, p, wid;
		newArgNum = 0;
		newi = 0;
		found = false;
		p = this;
    		if (format.length <= i || !((format.charCodeAt(i) === 91))) {
    			_tmp = argNum;
			_tmp$1 = i;
			_tmp$2 = false;
			newArgNum = _tmp;
			newi = _tmp$1;
			found = _tmp$2;
			return [newArgNum, newi, found];
    		}
  ש		p.reordered = true;
  ׽		_tuple = parseArgNumber($substring(format, i));
		index = _tuple[0];
		wid = _tuple[1];
		ok = _tuple[2];
    		if (ok && 0 <= index && index < numArgs) {
    			_tmp$3 = index;
			_tmp$4 = i + wid >> 0;
			_tmp$5 = true;
			newArgNum = _tmp$3;
			newi = _tmp$4;
			found = _tmp$5;
			return [newArgNum, newi, found];
    		}
  �6		p.goodArgNum = false;
    		_tmp$6 = argNum;
		_tmp$7 = i + wid >> 0;
		_tmp$8 = ok;
		newArgNum = _tmp$6;
		newi = _tmp$7;
		found = _tmp$8;
		return [newArgNum, newi, found];
    	};
	pp.prototype.argNumber = function(argNum, format, i, numArgs) { return this.$val.argNumber(argNum, format, i, numArgs); };
pp
argNumber~fmt.parseArgNumberfmt.pp (*fmt.pp).badArgNum �}	pp.ptr.prototype.badArgNum = function(verb) {
		var p, verb;
		p = this;
  ؏		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!");
  ص		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeRune(verb);
  ��		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(BADINDEX)");
    	};
	pp.prototype.badArgNum = function(verb) { return this.$val.badArgNum(verb); };
pp
badArgNum~fmt.ppfmt.ptrType$1fmt.writeRune~fmt.writeString~ (*fmt.pp).missingArg �	pp.ptr.prototype.missingArg = function(verb) {
		var p, verb;
		p = this;
  �		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!");
  �=		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeRune(verb);
  �T		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("(MISSING)");
    	};
	pp.prototype.missingArg = function(verb) { return this.$val.missingArg(verb); };
ppmissingArg~fmt.ppfmt.ptrType$1fmt.writeRune~fmt.writeString~ (*fmt.pp).doPrintf �/�	pp.ptr.prototype.doPrintf = function(format, a) {
		var _1, _i, _r, _r$1, _r$2, _ref, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, a, afterIndex, arg, argNum, c, end, format, i, i$1, lasti, p, size, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; a = $f.a; afterIndex = $f.afterIndex; arg = $f.arg; argNum = $f.argNum; c = $f.c; end = $f.end; format = $f.format; i = $f.i; i$1 = $f.i$1; lasti = $f.lasti; p = $f.p; size = $f.size; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ٱ		end = format.length;
  ��		argNum = 0;
  �		afterIndex = false;
  �S		p.reordered = false;
  �x		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < end)) { break; } */ if(!(i < end)) { $s = 2; continue; }
  ڍ			p.goodArgNum = true;
  ڣ			lasti = i;
  ڰ			while (true) {
				if (!(i < end && !((format.charCodeAt(i) === 37)))) { break; }
  ��				i = i + (1) >> 0;
    			}
    			if (i > lasti) {
  ��				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString($substring(format, lasti, i));
    			}
    			if (i >= end) {
  �O				/* break; */ $s = 2; continue;
    			}
  �r			i = i + (1) >> 0;
  ې			p.fmt.clearflags();
  ۴			/* while (true) { */ case 3:
				/* if (!(i < end)) { break; } */ if(!(i < end)) { $s = 4; continue; }
  ��				c = format.charCodeAt(i);
    					_1 = c;
  ��					/* */ if (_1 === (35)) { $s = 6; continue; }
					/* */ if (_1 === (48)) { $s = 7; continue; }
					/* */ if (_1 === (43)) { $s = 8; continue; }
					/* */ if (_1 === (45)) { $s = 9; continue; }
					/* */ if (_1 === (32)) { $s = 10; continue; }
					/* */ $s = 11; continue;
    					/* if (_1 === (35)) { */ case 6:
  ��						p.fmt.fmtFlags.sharp = true;
    						$s = 12; continue;
    					/* } else if (_1 === (48)) { */ case 7:
  �						p.fmt.fmtFlags.zero = !p.fmt.fmtFlags.minus;
    						$s = 12; continue;
    					/* } else if (_1 === (43)) { */ case 8:
  �q						p.fmt.fmtFlags.plus = true;
    						$s = 12; continue;
    					/* } else if (_1 === (45)) { */ case 9:
  ܔ						p.fmt.fmtFlags.minus = true;
  ܫ						p.fmt.fmtFlags.zero = false;
    						$s = 12; continue;
    					/* } else if (_1 === (32)) { */ case 10:
  ��						p.fmt.fmtFlags.space = true;
    						$s = 12; continue;
					/* } else { */ case 11:
  ݒ						/* */ if (97 <= c && c <= 122 && argNum < a.$length) { $s = 13; continue; }
						/* */ $s = 14; continue;
    						/* if (97 <= c && c <= 122 && argNum < a.$length) { */ case 13:
    							if (c === 118) {
  ��								p.fmt.fmtFlags.sharpV = p.fmt.fmtFlags.sharp;
  �								p.fmt.fmtFlags.sharp = false;
  �C								p.fmt.fmtFlags.plusV = p.fmt.fmtFlags.plus;
  �b								p.fmt.fmtFlags.plus = false;
    							}
  ށ							$r = p.printArg(((argNum < 0 || argNum >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + argNum]), ((c >> 0))); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ޥ							argNum = argNum + (1) >> 0;
  ޳							i = i + (1) >> 0;
  ޼							/* continue formatLoop; */ $s = 1; continue s;
    						/* } */ case 14:
  �&						/* break simpleFormat; */ $s = 4; continue s;
    					/* } */ case 12:
    				case 5:
  ��				i = i + (1) >> 0;
    			$s = 3; continue;
			case 4:
  �q			_tuple = p.argNumber(argNum, format, i, a.$length);
			argNum = _tuple[0];
			i = _tuple[1];
			afterIndex = _tuple[2];
  ��			/* */ if (i < end && (format.charCodeAt(i) === 42)) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (i < end && (format.charCodeAt(i) === 42)) { */ case 16:
  ��				i = i + (1) >> 0;
  ��				_r = intFromArg(a, argNum); /* */ $s = 19; case 19: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				p.fmt.wid = _tuple$1[0];
				p.fmt.fmtFlags.widPresent = _tuple$1[1];
				argNum = _tuple$1[2];
    				if (!p.fmt.fmtFlags.widPresent) {
  �P					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!(BADWIDTH)");
    				}
    				if (p.fmt.wid < 0) {
  ��					p.fmt.wid = -p.fmt.wid;
  �					p.fmt.fmtFlags.minus = true;
  �"					p.fmt.fmtFlags.zero = false;
    				}
  �d				afterIndex = false;
    				$s = 18; continue;
			/* } else { */ case 17:
  �				_tuple$2 = parsenum(format, i, end);
				p.fmt.wid = _tuple$2[0];
				p.fmt.fmtFlags.widPresent = _tuple$2[1];
				i = _tuple$2[2];
    				if (afterIndex && p.fmt.fmtFlags.widPresent) {
  ��					p.goodArgNum = false;
    				}
    			/* } */ case 18:
  �2			/* */ if ((i + 1 >> 0) < end && (format.charCodeAt(i) === 46)) { $s = 20; continue; }
			/* */ $s = 21; continue;
    			/* if ((i + 1 >> 0) < end && (format.charCodeAt(i) === 46)) { */ case 20:
  �X				i = i + (1) >> 0;
    				if (afterIndex) {
  �					p.goodArgNum = false;
    				}
  �				_tuple$3 = p.argNumber(argNum, format, i, a.$length);
				argNum = _tuple$3[0];
				i = _tuple$3[1];
				afterIndex = _tuple$3[2];
  ��				/* */ if (i < end && (format.charCodeAt(i) === 42)) { $s = 22; continue; }
				/* */ $s = 23; continue;
    				/* if (i < end && (format.charCodeAt(i) === 42)) { */ case 22:
  �					i = i + (1) >> 0;
  �					_r$1 = intFromArg(a, argNum); /* */ $s = 25; case 25: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_tuple$4 = _r$1;
					p.fmt.prec = _tuple$4[0];
					p.fmt.fmtFlags.precPresent = _tuple$4[1];
					argNum = _tuple$4[2];
    					if (p.fmt.prec < 0) {
  �						p.fmt.prec = 0;
  �						p.fmt.fmtFlags.precPresent = false;
    					}
    					if (!p.fmt.fmtFlags.precPresent) {
  ��						(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!(BADPREC)");
    					}
  �					afterIndex = false;
    					$s = 24; continue;
				/* } else { */ case 23:
  �?					_tuple$5 = parsenum(format, i, end);
					p.fmt.prec = _tuple$5[0];
					p.fmt.fmtFlags.precPresent = _tuple$5[1];
					i = _tuple$5[2];
    					if (!p.fmt.fmtFlags.precPresent) {
  �						p.fmt.prec = 0;
  �						p.fmt.fmtFlags.precPresent = true;
    					}
    				/* } */ case 24:
    			/* } */ case 21:
    			if (!afterIndex) {
  ��				_tuple$6 = p.argNumber(argNum, format, i, a.$length);
				argNum = _tuple$6[0];
				i = _tuple$6[1];
				afterIndex = _tuple$6[2];
    			}
    			if (i >= end) {
  �F				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!(NOVERB)");
  �i				/* break; */ $s = 2; continue;
    			}
  �v			_tmp = ((format.charCodeAt(i) >> 0));
			_tmp$1 = 1;
			verb = _tmp;
			size = _tmp$1;
    			if (verb >= 128) {
  �				_tuple$7 = utf8.DecodeRuneInString($substring(format, i));
				verb = _tuple$7[0];
				size = _tuple$7[1];
    			}
  ��			i = i + (size) >> 0;
  �				/* */ if ((verb === 37)) { $s = 27; continue; }
				/* */ if (!p.goodArgNum) { $s = 28; continue; }
				/* */ if (argNum >= a.$length) { $s = 29; continue; }
				/* */ if ((verb === 118)) { $s = 30; continue; }
				/* */ $s = 31; continue;
    				/* if ((verb === 37)) { */ case 27:
  �]					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(37);
    					$s = 32; continue;
    				/* } else if (!p.goodArgNum) { */ case 28:
  �					p.badArgNum(verb);
    					$s = 32; continue;
    				/* } else if (argNum >= a.$length) { */ case 29:
  ��					p.missingArg(verb);
    					$s = 32; continue;
    				/* } else if ((verb === 118)) { */ case 30:
  �+					p.fmt.fmtFlags.sharpV = p.fmt.fmtFlags.sharp;
  �I					p.fmt.fmtFlags.sharp = false;
  �z					p.fmt.fmtFlags.plusV = p.fmt.fmtFlags.plus;
  �					p.fmt.fmtFlags.plus = false;
  ��					$r = p.printArg(((argNum < 0 || argNum >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + argNum]), verb); /* */ $s = 33; case 33: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��					argNum = argNum + (1) >> 0;
    					$s = 32; continue;
				/* } else { */ case 31:
  ��					$r = p.printArg(((argNum < 0 || argNum >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + argNum]), verb); /* */ $s = 34; case 34: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��					argNum = argNum + (1) >> 0;
    				/* } */ case 32:
    			case 26:
    		$s = 1; continue;
		case 2:
  �		/* */ if (!p.reordered && argNum < a.$length) { $s = 35; continue; }
		/* */ $s = 36; continue;
    		/* if (!p.reordered && argNum < a.$length) { */ case 35:
  ��			p.fmt.clearflags();
  ��			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("%!(EXTRA ");
  �			_ref = $subslice(a, argNum);
			_i = 0;
			/* while (true) { */ case 37:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 38; continue; }
				i$1 = _i;
				arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (i$1 > 0) {
  �F					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(", ");
    				}
  �r				/* */ if ($interfaceIsEqual(arg, $ifaceNil)) { $s = 39; continue; }
				/* */ $s = 40; continue;
    				/* if ($interfaceIsEqual(arg, $ifaceNil)) { */ case 39:
  �					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString("<nil>");
    					$s = 41; continue;
				/* } else { */ case 40:
  �					_r$2 = reflect.TypeOf(arg).String(); /* */ $s = 42; case 42: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					$r = (p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeString(_r$2); /* */ $s = 43; case 43: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��					(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(61);
  �					$r = p.printArg(arg, 118); /* */ $s = 44; case 44: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 41:
    				_i++;
			$s = 37; continue;
			case 38:
  �%			(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(41);
    		/* } */ case 36:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.doPrintf }; } $f._1 = _1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f.a = a; $f.afterIndex = afterIndex; $f.arg = arg; $f.argNum = argNum; $f.c = c; $f.end = end; $f.format = format; $f.i = i; $f.i$1 = i$1; $f.lasti = lasti; $f.p = p; $f.size = size; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.doPrintf = function(format, a) { return this.$val.doPrintf(format, a); };
pp	doPrintf~fmt.argNumber~fmt.badArgNum~fmt.clearflags~fmt.intFromArgfmt.missingArg~fmt.parsenumfmt.ppfmt.printArg~fmt.ptrType$1fmt.writeByte~fmt.writeString~reflect.TypeOfunicode/utf8.DecodeRuneInString (*fmt.pp).doPrint �V	pp.ptr.prototype.doPrint = function(a) {
		var _i, _r, _ref, _v, a, arg, argNum, isString, p, prevString, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _v = $f._v; a = $f.a; arg = $f.arg; argNum = $f.argNum; isString = $f.isString; p = $f.p; prevString = $f.prevString; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �i		prevString = false;
  �~		_ref = a;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			argNum = _i;
			arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			if (!(!($interfaceIsEqual(arg, $ifaceNil)))) { _v = false; $s = 3; continue s; }
			_r = reflect.TypeOf(arg).Kind(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_v = _r === 24; case 3:
			isString = _v;
    			if (argNum > 0 && !isString && !prevString) {
  �H				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    			}
  �c			$r = p.printArg(arg, 118); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �z			prevString = isString;
    			_i++;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.doPrint }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._v = _v; $f.a = a; $f.arg = arg; $f.argNum = argNum; $f.isString = isString; $f.p = p; $f.prevString = prevString; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.doPrint = function(a) { return this.$val.doPrint(a); };
ppdoPrint~fmt.ppfmt.printArg~fmt.ptrType$1fmt.writeByte~reflect.TypeOf (*fmt.pp).doPrintln ��	pp.ptr.prototype.doPrintln = function(a) {
		var _i, _ref, a, arg, argNum, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; a = $f.a; arg = $f.arg; argNum = $f.argNum; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �2		_ref = a;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			argNum = _i;
			arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (argNum > 0) {
  �d				(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(32);
    			}
  �			$r = p.printArg(arg, 118); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 1; continue;
		case 2:
  �		(p.$ptr_buf || (p.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, p))).writeByte(10);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: pp.ptr.prototype.doPrintln }; } $f._i = _i; $f._ref = _ref; $f.a = a; $f.arg = arg; $f.argNum = argNum; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	pp.prototype.doPrintln = function(a) { return this.$val.doPrintln(a); };
pp
doPrintln~fmt.ppfmt.printArg~fmt.ptrType$1fmt.writeByte~ fmt.ScanfmtScan Scan�$	Scan = function(a) {
		var $24r, _r, _tuple, a, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fscan(os.Stdin, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scan }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Scan = Scan;
Scan	fmt.Fscanfmt.Scanos.Stdin 
fmt.ScanlnfmtScanln Scanln�.	Scanln = function(a) {
		var $24r, _r, _tuple, a, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fscanln(os.Stdin, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanln }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Scanln = Scanln;
Scanlnfmt.Fscanln
fmt.Scanlnos.Stdin 	fmt.ScanffmtScanf Scanf�i	Scanf = function(format, a) {
		var $24r, _r, _tuple, a, err, format, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; format = $f.format; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = Fscanf(os.Stdin, format, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Scanf }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.format = format; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Scanf = Scanf;
Scanf
fmt.Fscanf	fmt.Scanfos.Stdin (*fmt.stringReader).Read �	$ptrType(stringReader).prototype.Read = function(b) {
		var b, err, n, r;
		n = 0;
		err = $ifaceNil;
		r = this;
  ��		n = $copyString(b, r.$get());
  ��		r.$set($substring((r.$get()), n));
    		if (n === 0) {
  ��			err = io.EOF;
    		}
  ��		return [n, err];
    	};
stringReaderfmt.stringReaderio.EOF 	fmt.SscanfmtSscan Sscan�e	Sscan = function(str, a) {
		var $24r, _ptr, _r, _tuple, a, err, n, str, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _ptr = $f._ptr; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; str = $f.str; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		str = [str];
		n = 0;
		err = $ifaceNil;
    		_r = Fscan(((_ptr = (str.$ptr || (str.$ptr = new ptrType$4(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, str))), new ptrType$3(function() { return _ptr.$get(); }, function($v) { _ptr.$set($v); }, _ptr.$target))), a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sscan }; } $f.$24r = $24r; $f._ptr = _ptr; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.str = str; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sscan = Sscan;
Sscan	fmt.Fscan	fmt.Sscanfmt.ptrType$3fmt.ptrType$4fmt.stringReader fmt.SscanlnfmtSscanln Sscanln�o	Sscanln = function(str, a) {
		var $24r, _ptr, _r, _tuple, a, err, n, str, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _ptr = $f._ptr; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; n = $f.n; str = $f.str; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		str = [str];
		n = 0;
		err = $ifaceNil;
    		_r = Fscanln(((_ptr = (str.$ptr || (str.$ptr = new ptrType$4(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, str))), new ptrType$3(function() { return _ptr.$get(); }, function($v) { _ptr.$set($v); }, _ptr.$target))), a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sscanln }; } $f.$24r = $24r; $f._ptr = _ptr; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.n = n; $f.str = str; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sscanln = Sscanln;
Sscanlnfmt.Fscanlnfmt.Sscanlnfmt.ptrType$3fmt.ptrType$4 
fmt.SscanffmtSscanf Sscanf��	Sscanf = function(str, format, a) {
		var $24r, _ptr, _r, _tuple, a, err, format, n, str, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _ptr = $f._ptr; _r = $f._r; _tuple = $f._tuple; a = $f.a; err = $f.err; format = $f.format; n = $f.n; str = $f.str; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		str = [str];
		n = 0;
		err = $ifaceNil;
    		_r = Fscanf(((_ptr = (str.$ptr || (str.$ptr = new ptrType$4(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, str))), new ptrType$3(function() { return _ptr.$get(); }, function($v) { _ptr.$set($v); }, _ptr.$target))), format, a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sscanf }; } $f.$24r = $24r; $f._ptr = _ptr; $f._r = _r; $f._tuple = _tuple; $f.a = a; $f.err = err; $f.format = format; $f.n = n; $f.str = str; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sscanf = Sscanf;
Sscanf
fmt.Fscanf
fmt.Sscanffmt.ptrType$3fmt.ptrType$4 	fmt.FscanfmtFscan Fscan��	Fscan = function(r, a) {
		var _r, _r$1, _tuple, _tuple$1, a, err, n, old, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; err = $f.err; n = $f.n; old = $f.old; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
   		_r = newScanState(r, true, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		s = _tuple[0];
		old = $clone(_tuple[1], ssave);
  H		_r$1 = s.doScan(a); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
  ^		s.free($clone(old, ssave));
  k		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fscan }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.err = err; $f.n = n; $f.old = old; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fscan = Fscan;
Fscan	fmt.Fscanfmt.doScan~	fmt.free~fmt.newScanState	fmt.ssave fmt.FscanlnfmtFscanln Fscanln��	Fscanln = function(r, a) {
		var _r, _r$1, _tuple, _tuple$1, a, err, n, old, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; err = $f.err; n = $f.n; old = $f.old; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
 3		_r = newScanState(r, false, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		s = _tuple[0];
		old = $clone(_tuple[1], ssave);
 [		_r$1 = s.doScan(a); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
 q		s.free($clone(old, ssave));
 ~		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fscanln }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.err = err; $f.n = n; $f.old = old; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fscanln = Fscanln;
Fscanlnfmt.Fscanlnfmt.doScan~	fmt.free~fmt.newScanState	fmt.ssave 
fmt.FscanffmtFscanf Fscanf��	Fscanf = function(r, format, a) {
		var _r, _r$1, _tuple, _tuple$1, a, err, format, n, old, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; err = $f.err; format = $f.format; n = $f.n; old = $f.old; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
 �		_r = newScanState(r, false, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		s = _tuple[0];
		old = $clone(_tuple[1], ssave);
 �		_r$1 = s.doScanf(format, a); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
 		s.free($clone(old, ssave));
 &		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fscanf }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.err = err; $f.format = format; $f.n = n; $f.old = old; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fscanf = Fscanf;
Fscanf
fmt.Fscanffmt.doScanf~	fmt.free~fmt.newScanState	fmt.ssave (*fmt.ss).Read �P	ss.ptr.prototype.Read = function(buf) {
		var _tmp, _tmp$1, buf, err, n, s;
		n = 0;
		err = $ifaceNil;
		s = this;
    		_tmp = 0;
		_tmp$1 = errors.New("ScanState's Read should not be called. Use ReadRune");
		n = _tmp;
		err = _tmp$1;
		return [n, err];
    	};
	ss.prototype.Read = function(buf) { return this.$val.Read(buf); };
ss
errors.Newfmt.ss (*fmt.ss).ReadRune �	ss.ptr.prototype.ReadRune = function() {
		var _r, _tuple, err, r, s, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; r = $f.r; s = $f.s; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = 0;
		size = 0;
		err = $ifaceNil;
		s = this;
    		if (s.atEOF || s.count >= s.ssave.argLimit) {
 7			err = io.EOF;
 F			$s = -1; return [r, size, err];
    		}
 R		_r = s.rs.ReadRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r = _tuple[0];
		size = _tuple[1];
		err = _tuple[2];
    		if ($interfaceIsEqual(err, $ifaceNil)) {
 �			s.count = s.count + (1) >> 0;
    			if (s.ssave.nlIsEnd && (r === 10)) {
 �				s.atEOF = true;
    			}
    		} else if ($interfaceIsEqual(err, io.EOF)) {
 �			s.atEOF = true;
    		}
 �		$s = -1; return [r, size, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.ReadRune }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.r = r; $f.s = s; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.ReadRune = function() { return this.$val.ReadRune(); };
ssfmt.ssio.EOF (*fmt.ss).Width ��	ss.ptr.prototype.Width = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, ok, s, wid;
		wid = 0;
		ok = false;
		s = this;
    		if (s.ssave.maxWid === 1073741824) {
    			_tmp = 0;
			_tmp$1 = false;
			wid = _tmp;
			ok = _tmp$1;
			return [wid, ok];
    		}
    		_tmp$2 = s.ssave.maxWid;
		_tmp$3 = true;
		wid = _tmp$2;
		ok = _tmp$3;
		return [wid, ok];
    	};
	ss.prototype.Width = function() { return this.$val.Width(); };
ssfmt.ss (*fmt.ss).getRune ��	ss.ptr.prototype.getRune = function() {
		var _r, _tuple, err, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = 0;
		s = this;
 
		_r = s.ReadRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r = _tuple[0];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			if ($interfaceIsEqual(err, io.EOF)) {
    				r = -1;
				$s = -1; return r;
    			}
 
_			s.error(err);
    		}
 
p		$s = -1; return r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.getRune }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.getRune = function() { return this.$val.getRune(); };
ssgetRune~
fmt.error~fmt.ssio.EOF (*fmt.ss).mustReadRune �	ss.ptr.prototype.mustReadRune = function() {
		var _r, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = 0;
		s = this;
 6		_r = s.getRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
    		if (r === -1) {
 W			s.error(io.ErrUnexpectedEOF);
    		}
 x		$s = -1; return r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.mustReadRune }; } $f._r = _r; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.mustReadRune = function() { return this.$val.mustReadRune(); };
ssmustReadRune~
fmt.error~fmt.getRune~fmt.ssio.ErrUnexpectedEOF (*fmt.ss).UnreadRune ��	ss.ptr.prototype.UnreadRune = function() {
		var _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 �		_r = s.rs.UnreadRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
 �		s.atEOF = false;
 �		s.count = s.count - (1) >> 0;
 �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.UnreadRune }; } $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
ssfmt.ss (*fmt.ss).error ��	ss.ptr.prototype.error = function(err) {
		var err, s, x;
		s = this;
 		$panic((x = new scanError.ptr(err), new x.constructor.elem(x)));
    	};
	ss.prototype.error = function(err) { return this.$val.error(err); };
sserror~fmt.scanErrorfmt.ss (*fmt.ss).errorString ��	ss.ptr.prototype.errorString = function(err) {
		var err, s, x;
		s = this;
 D		$panic((x = new scanError.ptr(errors.New(err)), new x.constructor.elem(x)));
    	};
	ss.prototype.errorString = function(err) { return this.$val.errorString(err); };
sserrorString~
errors.Newfmt.scanErrorfmt.ss (*fmt.ss).Token �	ss.ptr.prototype.Token = function(skipSpace, f) {
		var $24r, _r, err, f, s, skipSpace, tok, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; err = $f.err; f = $f.f; s = $f.s; skipSpace = $f.skipSpace; tok = $f.tok; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		err = [err];
		tok = sliceType$2.nil;
		err[0] = $ifaceNil;
		s = this;
 �		$deferred.push([(function(err) { return function() {
			var _tuple, e, ok, se;
 �			e = $recover();
    			if (!($interfaceIsEqual(e, $ifaceNil))) {
 �				_tuple = $assertType(e, scanError, true);
				se = $clone(_tuple[0], scanError);
				ok = _tuple[1];
    				if (ok) {
 					err[0] = se.err;
    				} else {
 .					$panic(e);
    				}
    			}
    		}; })(err), []]);
    		if (f === $throwNilPointerError) {
 V			f = notSpace;
    		}
 g		s.buf = $subslice(s.buf, 0, 0);
 z		_r = s.token(skipSpace, f); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		tok = _r;
 �		$24r = [tok, err[0]];
		$s = 2; case 2: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [tok, err[0]]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: ss.ptr.prototype.Token }; } $f.$24r = $24r; $f._r = _r; $f.err = err; $f.f = f; $f.s = s; $f.skipSpace = skipSpace; $f.tok = tok; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	ss.prototype.Token = function(skipSpace, f) { return this.$val.Token(skipSpace, f); };
ssfmt.notSpacefmt.scanErrorfmt.sliceType$2fmt.ss
fmt.token~ fmt.isSpacefmtisSpace isSpace�&	isSpace = function(r) {
		var _i, _ref, r, rng, rx;
    		if (r >= 65536) {
 
			return false;
    		}
 		rx = ((r << 16 >>> 16));
 ,		_ref = space;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			rng = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), arrayType$1);
    			if (rx < rng[0]) {
 ^				return false;
    			}
    			if (rx <= rng[1]) {
 �				return true;
    			}
    			_i++;
		}
 �		return false;
    	};
isSpacefmt.arrayType$1fmt.isSpace	fmt.space fmt.notSpacefmtnotSpace notSpaceG	notSpace = function(r) {
		var r;
 		return !isSpace(r);
    	};
notSpacefmt.isSpacefmt.notSpace (*fmt.readRune).readByte � 	readRune.ptr.prototype.readByte = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = 0;
		err = $ifaceNil;
		r = this;
    		if (r.pending > 0) {
 �			b = r.pendBuf[0];
 �			$copySlice($subslice(new sliceType$2(r.pendBuf), 0), $subslice(new sliceType$2(r.pendBuf), 1));
 			r.pending = r.pending - (1) >> 0;
 			$s = -1; return [b, err];
    		}
  		_r = io.ReadFull(r.reader, $subslice(new sliceType$2(r.pendBuf), 0, 1)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (!((n === 1))) {
    			_tmp = 0;
			_tmp$1 = err;
			b = _tmp;
			err = _tmp$1;
			$s = -1; return [b, err];
    		}
    		_tmp$2 = r.pendBuf[0];
		_tmp$3 = err;
		b = _tmp$2;
		err = _tmp$3;
		$s = -1; return [b, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readRune.ptr.prototype.readByte }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	readRune.prototype.readByte = function() { return this.$val.readByte(); };
readRune	readByte~fmt.readRunefmt.sliceType$2io.ReadFull (*fmt.readRune).ReadRune �
�	readRune.ptr.prototype.ReadRune = function() {
		var _r, _r$1, _tuple, _tuple$1, _tuple$2, err, n, r, rr, size, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; n = $f.n; r = $f.r; rr = $f.rr; size = $f.size; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rr = 0;
		size = 0;
		err = $ifaceNil;
		r = this;
    		if (r.peekRune >= 0) {
 9			rr = r.peekRune;
 K			r.peekRune = ~r.peekRune >> 0;
 f			size = utf8.RuneLen(rr);
 �			$s = -1; return [rr, size, err];
    		}
 �		_r = r.readByte(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r.buf[0] = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
 �			$s = -1; return [rr, size, err];
    		}
    		if (r.buf[0] < 128) {
 
			rr = ((r.buf[0] >> 0));
  			size = 1;
 }			r.peekRune = ~rr >> 0;
 �			$s = -1; return [rr, size, err];
    		}
 �		n = 0;
 �		n = 1;
		/* while (true) { */ case 2:
			/* if (!(!utf8.FullRune($subslice(new sliceType$2(r.buf), 0, n)))) { break; } */ if(!(!utf8.FullRune($subslice(new sliceType$2(r.buf), 0, n)))) { $s = 3; continue; }
 �			_r$1 = r.readByte(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			(x = r.buf, ((n < 0 || n >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[n] = _tuple$1[0]));
			err = _tuple$1[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
 					err = $ifaceNil;
 +					/* break; */ $s = 3; continue;
    				}
 9				$s = -1; return [rr, size, err];
    			}
 �			n = n + (1) >> 0;
    		$s = 2; continue;
		case 3:
 H		_tuple$2 = utf8.DecodeRune($subslice(new sliceType$2(r.buf), 0, n));
		rr = _tuple$2[0];
		size = _tuple$2[1];
    		if (size < n) {
 �			$copySlice($subslice(new sliceType$2(r.pendBuf), r.pending), $subslice(new sliceType$2(r.buf), size, n));
 �			r.pending = r.pending + ((n - size >> 0)) >> 0;
    		}
 3		r.peekRune = ~rr >> 0;
 E		$s = -1; return [rr, size, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readRune.ptr.prototype.ReadRune }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.n = n; $f.r = r; $f.rr = rr; $f.size = size; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	readRune.prototype.ReadRune = function() { return this.$val.ReadRune(); };
readRunefmt.readByte~fmt.readRunefmt.sliceType$2io.EOFunicode/utf8.DecodeRuneunicode/utf8.FullRuneunicode/utf8.RuneLen (*fmt.readRune).UnreadRune �[	readRune.ptr.prototype.UnreadRune = function() {
		var r;
		r = this;
    		if (r.peekRune >= 0) {
 �			return errors.New("fmt: scanning called UnreadRune with no rune available");
    		}
 '		r.peekRune = ~r.peekRune >> 0;
 A		return $ifaceNil;
    	};
	readRune.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
readRune
errors.Newfmt.readRune fmt.newScanStatefmtnewScanState newScanState��	newScanState = function(r, nlIsSpace, nlIsEnd) {
		var _r, _tuple, nlIsEnd, nlIsSpace, ok, old, r, rs, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; nlIsEnd = $f.nlIsEnd; nlIsSpace = $f.nlIsSpace; ok = $f.ok; old = $f.old; r = $f.r; rs = $f.rs; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = ptrType$5.nil;
		old = new ssave.ptr(false, false, false, 0, 0, 0);
 %		_r = ssFree.Get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = $assertType(_r, ptrType$5);
 @		_tuple = $assertType(r, io.RuneScanner, true);
		rs = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
 e			s.rs = rs;
    		} else {
 {			s.rs = new readRune.ptr(r, arrayType$3.zero(), 0, arrayType$3.zero(), -1);
    		}
 �		s.ssave.nlIsSpace = nlIsSpace;
 �		s.ssave.nlIsEnd = nlIsEnd;
 �		s.atEOF = false;
 �		s.ssave.limit = 1073741824;
 �		s.ssave.argLimit = 1073741824;
 		s.ssave.maxWid = 1073741824;
 %		s.ssave.validSave = true;
 9		s.count = 0;
 F		$s = -1; return [s, old];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newScanState }; } $f._r = _r; $f._tuple = _tuple; $f.nlIsEnd = nlIsEnd; $f.nlIsSpace = nlIsSpace; $f.ok = ok; $f.old = old; $f.r = r; $f.rs = rs; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
newScanStatefmt.arrayType$3fmt.newScanStatefmt.ptrType$5fmt.readRunefmt.ss
fmt.ssFree	fmt.ssaveio.RuneScanner (*fmt.ss).free �{	ss.ptr.prototype.free = function(old) {
		var old, s;
		s = this;
    		if (old.validSave) {
 			ssave.copy(s.ssave, old);
 			return;
    		}
    		if (s.buf.$capacity > 1024) {
 v			return;
    		}
 �		s.buf = $subslice(s.buf, 0, 0);
 �		s.rs = $ifaceNil;
 �		ssFree.Put(s);
    	};
	ss.prototype.free = function(old) { return this.$val.free(old); };
ssfree~fmt.ss
fmt.ssFree	fmt.ssave (*fmt.ss).SkipSpace �9	ss.ptr.prototype.SkipSpace = function() {
		var _r, _r$1, _r$2, _v, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _v = $f._v; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 x		/* while (true) { */ case 1:
 �			_r = s.getRune(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r = _r;
    			if (r === -1) {
 �				$s = -1; return;
    			}
 �			if (!(r === 13)) { _v = false; $s = 6; continue s; }
			_r$1 = s.peek("\n"); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_v = _r$1; case 6:
			/* */ if (_v) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (_v) { */ case 4:
 �				/* continue; */ $s = 1; continue;
    			/* } */ case 5:
    			if (r === 10) {
    				if (s.ssave.nlIsSpace) {
 						/* continue; */ $s = 1; continue;
    				}
 				s.errorString("unexpected newline");
 A				$s = -1; return;
    			}
 N			/* */ if (!isSpace(r)) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (!isSpace(r)) { */ case 8:
 b				_r$2 = s.UnreadRune(); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$2;
 t				/* break; */ $s = 2; continue;
    			/* } */ case 9:
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.SkipSpace }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._v = _v; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.SkipSpace = function() { return this.$val.SkipSpace(); };
ssfmt.errorString~fmt.getRune~fmt.isSpace	fmt.peek~fmt.ss (*fmt.ss).token ��	ss.ptr.prototype.token = function(skipSpace, f) {
		var _r, _r$1, _r$2, f, r, s, skipSpace, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; f = $f.f; r = $f.r; s = $f.s; skipSpace = $f.skipSpace; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 m		/* */ if (skipSpace) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (skipSpace) { */ case 1:
 ~			$r = s.SkipSpace(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
 �		/* while (true) { */ case 4:
 �			_r = s.getRune(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r = _r;
    			if (r === -1) {
 �				/* break; */ $s = 5; continue;
    			}
 �			_r$1 = f(r); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (!_r$1) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (!_r$1) { */ case 7:
 �				_r$2 = s.UnreadRune(); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$2;
 				/* break; */ $s = 5; continue;
    			/* } */ case 8:
 			(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeRune(r);
    		$s = 4; continue;
		case 5:
 1		$s = -1; return $convertSliceType(s.buf, sliceType$2);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.token }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.f = f; $f.r = r; $f.s = s; $f.skipSpace = skipSpace; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.token = function(skipSpace, f) { return this.$val.token(skipSpace, f); };
sstoken~fmt.getRune~fmt.ptrType$1fmt.sliceType$2fmt.ssfmt.writeRune~ fmt.indexRunefmt	indexRune 	indexRune�=	indexRune = function(s, r) {
		var _i, _ref, _rune, c, i, r, s;
 �		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
    			if (c === r) {
  				return i;
    			}
    			_i += _rune[1];
		}
  $		return -1;
    	};
	indexRunefmt.indexRune (*fmt.ss).consume ��	ss.ptr.prototype.consume = function(ok, accept) {
		var _r, _r$1, accept, ok, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; accept = $f.accept; ok = $f.ok; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 ! 		_r = s.getRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
    		if (r === -1) {
 !"			$s = -1; return false;
    		}
    		if (indexRune(ok, r) >= 0) {
    			if (accept) {
 !_				(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeRune(r);
    			}
 !x			$s = -1; return true;
    		}
 !�		/* */ if (!((r === -1)) && accept) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((r === -1)) && accept) { */ case 2:
 !�			_r$1 = s.UnreadRune(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 3:
 !�		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.consume }; } $f._r = _r; $f._r$1 = _r$1; $f.accept = accept; $f.ok = ok; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.consume = function(ok, accept) { return this.$val.consume(ok, accept); };
ssconsume~fmt.getRune~fmt.indexRunefmt.ptrType$1fmt.ssfmt.writeRune~ (*fmt.ss).peek �)	ss.ptr.prototype.peek = function(ok) {
		var _r, _r$1, ok, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; ok = $f.ok; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 "@		_r = s.getRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
 "R		/* */ if (!((r === -1))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((r === -1))) { */ case 2:
 "b			_r$1 = s.UnreadRune(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 3:
 "u		$s = -1; return indexRune(ok, r) >= 0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.peek }; } $f._r = _r; $f._r$1 = _r$1; $f.ok = ok; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.peek = function(ok) { return this.$val.peek(ok); };
sspeek~fmt.getRune~fmt.indexRunefmt.ss (*fmt.ss).notEOF ��	ss.ptr.prototype.notEOF = function() {
		var _r, _r$1, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 "�		_r = s.getRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
    		if (r === -1) {
 "�			$panic(io.EOF);
    		}
 #
		_r$1 = s.UnreadRune(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.notEOF }; } $f._r = _r; $f._r$1 = _r$1; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.notEOF = function() { return this.$val.notEOF(); };
ssnotEOF~fmt.getRune~fmt.ssio.EOF (*fmt.ss).accept ��	ss.ptr.prototype.accept = function(ok) {
		var $24r, _r, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 #�		_r = s.consume(ok, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.accept }; } $f.$24r = $24r; $f._r = _r; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.accept = function(ok) { return this.$val.accept(ok); };
ssaccept~fmt.consume~fmt.ss (*fmt.ss).okVerb �)	ss.ptr.prototype.okVerb = function(verb, okVerbs, typ) {
		var _i, _ref, _rune, okVerbs, s, typ, v, verb;
		s = this;
 $�		_ref = okVerbs;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			v = _rune[0];
    			if (v === verb) {
 $�				return true;
    			}
    			_i += _rune[1];
		}
 $�		s.errorString("bad verb '%" + ($encodeRune(verb)) + "' for " + typ);
 %		return false;
    	};
	ss.prototype.okVerb = function(verb, okVerbs, typ) { return this.$val.okVerb(verb, okVerbs, typ); };
ssokVerb~fmt.errorString~fmt.ss (*fmt.ss).scanBool �h	ss.ptr.prototype.scanBool = function(verb) {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _v, _v$1, _v$2, _v$3, _v$4, s, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; _v$3 = $f._v$3; _v$4 = $f._v$4; s = $f.s; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 %�		$r = s.SkipSpace(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 %�		$r = s.notEOF(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!s.okVerb(verb, "tv", "boolean")) {
 %�			$s = -1; return false;
    		}
    			_r = s.getRune(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_1 = _r;
 &Q			/* */ if (_1 === (48)) { $s = 5; continue; }
			/* */ if (_1 === (49)) { $s = 6; continue; }
			/* */ if ((_1 === (116)) || (_1 === (84))) { $s = 7; continue; }
			/* */ if ((_1 === (102)) || (_1 === (70))) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (_1 === (48)) { */ case 5:
 &]				$s = -1; return false;
    			/* } else if (_1 === (49)) { */ case 6:
 &w				$s = -1; return true;
    			/* } else if ((_1 === (116)) || (_1 === (84))) { */ case 7:
 &�				_r$1 = s.accept("rR"); /* */ $s = 13; case 13: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				if (!(_r$1)) { _v = false; $s = 12; continue s; }
				_r$2 = s.accept("uU"); /* */ $s = 15; case 15: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				if (!_r$2) { _v$1 = true; $s = 14; continue s; }
				_r$3 = s.accept("eE"); /* */ $s = 16; case 16: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_v$1 = !_r$3; case 14:
				_v = _v$1; case 12:
				/* */ if (_v) { $s = 10; continue; }
				/* */ $s = 11; continue;
    				/* if (_v) { */ case 10:
 &�					s.error(boolError);
    				/* } */ case 11:
 &�				$s = -1; return true;
    			/* } else if ((_1 === (102)) || (_1 === (70))) { */ case 8:
 '				_r$4 = s.accept("aA"); /* */ $s = 20; case 20: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				if (!(_r$4)) { _v$2 = false; $s = 19; continue s; }
				_r$5 = s.accept("lL"); /* */ $s = 23; case 23: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				if (!_r$5) { _v$4 = true; $s = 22; continue s; }
				_r$6 = s.accept("sS"); /* */ $s = 24; case 24: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_v$4 = !_r$6; case 22:
				if (_v$4) { _v$3 = true; $s = 21; continue s; }
				_r$7 = s.accept("eE"); /* */ $s = 25; case 25: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_v$3 = !_r$7; case 21:
				_v$2 = _v$3; case 19:
				/* */ if (_v$2) { $s = 17; continue; }
				/* */ $s = 18; continue;
    				/* if (_v$2) { */ case 17:
 ']					s.error(boolError);
    				/* } */ case 18:
 'v				$s = -1; return false;
    			/* } */ case 9:
    		case 3:
 '�		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanBool }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f._v$3 = _v$3; $f._v$4 = _v$4; $f.s = s; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanBool = function(verb) { return this.$val.scanBool(verb); };
ss	scanBool~fmt.accept~fmt.boolError
fmt.error~fmt.getRune~fmt.notEOF~fmt.okVerb~fmt.ss (*fmt.ss).getBase �x	ss.ptr.prototype.getBase = function(verb) {
		var _1, base, digits, s, verb;
		base = 0;
		digits = "";
		s = this;
 ) 		s.okVerb(verb, "bdoUxXv", "integer");
 )T		base = 10;
 )_		digits = "0123456789";
    		_1 = verb;
    		if (_1 === (98)) {
 )�			base = 2;
 )�			digits = "01";
    		} else if (_1 === (111)) {
 )�			base = 8;
 )�			digits = "01234567";
    		} else if ((_1 === (120)) || (_1 === (88)) || (_1 === (85))) {
 )�			base = 16;
 *			digits = "0123456789aAbBcCdDeEfF";
    		}
 *"		return [base, digits];
    	};
	ss.prototype.getBase = function(verb) { return this.$val.getBase(verb); };
ssgetBase~fmt.okVerb~fmt.ss (*fmt.ss).scanNumber �V	ss.ptr.prototype.scanNumber = function(digits, haveDigits) {
		var _r, _r$1, digits, haveDigits, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; digits = $f.digits; haveDigits = $f.haveDigits; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 *�		/* */ if (!haveDigits) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!haveDigits) { */ case 1:
 *�			$r = s.notEOF(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 *�			_r = s.accept(digits); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!_r) { */ case 4:
 *�				s.errorString("expected integer");
    			/* } */ case 5:
    		/* } */ case 2:
 +"		/* while (true) { */ case 7:
			_r$1 = s.accept(digits); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* if (!(_r$1)) { break; } */ if(!(_r$1)) { $s = 8; continue; }
    		$s = 7; continue;
		case 8:
 +=		$s = -1; return ($bytesToString(s.buf));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanNumber }; } $f._r = _r; $f._r$1 = _r$1; $f.digits = digits; $f.haveDigits = haveDigits; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanNumber = function(digits, haveDigits) { return this.$val.scanNumber(digits, haveDigits); };
ssscanNumber~fmt.accept~fmt.errorString~fmt.notEOF~fmt.ss (*fmt.ss).scanRune �	ss.ptr.prototype.scanRune = function(bitSize) {
		var _r, bitSize, n, r, s, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; bitSize = $f.bitSize; n = $f.n; r = $f.r; s = $f.s; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 +�		$r = s.notEOF(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 +�		_r = s.getRune(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		r = _r;
 +�		n = ((bitSize >>> 0));
 +�		x = $shiftRightInt64(($shiftLeft64((new $Int64(0, r)), ((64 - n >>> 0)))), ((64 - n >>> 0)));
    		if (!((x$1 = (new $Int64(0, r)), (x.$high === x$1.$high && x.$low === x$1.$low)))) {
 ,'			s.errorString("overflow on character value " + ($encodeRune(r)));
    		}
 ,e		$s = -1; return (new $Int64(0, r));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanRune }; } $f._r = _r; $f.bitSize = bitSize; $f.n = n; $f.r = r; $f.s = s; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanRune = function(bitSize) { return this.$val.scanRune(bitSize); };
ss	scanRune~fmt.errorString~fmt.getRune~fmt.notEOF~fmt.ss (*fmt.ss).scanBasePrefix ��	ss.ptr.prototype.scanBasePrefix = function() {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, base, digits, s, zeroFound, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; base = $f.base; digits = $f.digits; s = $f.s; zeroFound = $f.zeroFound; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		base = 0;
		digits = "";
		zeroFound = false;
		s = this;
 -x		_r = s.peek("0"); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!_r) { */ case 1:
    			_tmp = 0;
			_tmp$1 = "0123456789_";
			_tmp$2 = false;
			base = _tmp;
			digits = _tmp$1;
			zeroFound = _tmp$2;
			$s = -1; return [base, digits, zeroFound];
    		/* } */ case 2:
 -�		_r$1 = s.accept("0"); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
 -�			_r$2 = s.peek("bB"); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			/* */ if (_r$2) { $s = 6; continue; }
			_r$3 = s.peek("oO"); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			/* */ if (_r$3) { $s = 7; continue; }
			_r$4 = s.peek("xX"); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* */ if (_r$4) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (_r$2) { */ case 6:
 .				_r$5 = s.consume("bB", true); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_r$5;
    				_tmp$3 = 0;
				_tmp$4 = "01_";
				_tmp$5 = true;
				base = _tmp$3;
				digits = _tmp$4;
				zeroFound = _tmp$5;
				$s = -1; return [base, digits, zeroFound];
    			/* } else if (_r$3) { */ case 7:
 .Y				_r$6 = s.consume("oO", true); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_r$6;
    				_tmp$6 = 0;
				_tmp$7 = "01234567_";
				_tmp$8 = true;
				base = _tmp$6;
				digits = _tmp$7;
				zeroFound = _tmp$8;
				$s = -1; return [base, digits, zeroFound];
    			/* } else if (_r$4) { */ case 8:
 .�				_r$7 = s.consume("xX", true); /* */ $s = 16; case 16: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_r$7;
    				_tmp$9 = 0;
				_tmp$10 = "0123456789aAbBcCdDeEfF_";
				_tmp$11 = true;
				base = _tmp$9;
				digits = _tmp$10;
				zeroFound = _tmp$11;
				$s = -1; return [base, digits, zeroFound];
    			/* } else { */ case 9:
    				_tmp$12 = 0;
				_tmp$13 = "01234567_";
				_tmp$14 = true;
				base = _tmp$12;
				digits = _tmp$13;
				zeroFound = _tmp$14;
				$s = -1; return [base, digits, zeroFound];
    			/* } */ case 10:
    		case 5:
    		$s = -1; return [base, digits, zeroFound];
		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanBasePrefix }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.base = base; $f.digits = digits; $f.s = s; $f.zeroFound = zeroFound; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanBasePrefix = function() { return this.$val.scanBasePrefix(); };
ssscanBasePrefix~fmt.accept~fmt.consume~	fmt.peek~fmt.ss (*fmt.ss).scanInt �r	ss.ptr.prototype.scanInt = function(verb, bitSize) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, _tuple$2, _v, base, bitSize, digits, err, haveDigits, i, n, s, tok, verb, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _v = $f._v; base = $f.base; bitSize = $f.bitSize; digits = $f.digits; err = $f.err; haveDigits = $f.haveDigits; i = $f.i; n = $f.n; s = $f.s; tok = $f.tok; verb = $f.verb; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 /�		/* */ if (verb === 99) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (verb === 99) { */ case 1:
 /�			_r = s.scanRune(bitSize); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
 0		$r = s.SkipSpace(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 0		$r = s.notEOF(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 0#		_tuple = s.getBase(verb);
		base = _tuple[0];
		digits = _tuple[1];
 0D		haveDigits = false;
 0Y		/* */ if (verb === 85) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (verb === 85) { */ case 7:
 0l			_r$1 = s.consume("U", false); /* */ $s = 13; case 13: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			if (!_r$1) { _v = true; $s = 12; continue s; }
			_r$2 = s.consume("+", false); /* */ $s = 14; case 14: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_v = !_r$2; case 12:
			/* */ if (_v) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (_v) { */ case 10:
 0�				s.errorString("bad unicode format ");
    			/* } */ case 11:
    			$s = 9; continue;
		/* } else { */ case 8:
 0�			_r$3 = s.accept("+-"); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$3;
 1&			/* */ if (verb === 118) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (verb === 118) { */ case 16:
 1:				_r$4 = s.scanBasePrefix(); /* */ $s = 18; case 18: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_tuple$1 = _r$4;
				base = _tuple$1[0];
				digits = _tuple$1[1];
				haveDigits = _tuple$1[2];
    			/* } */ case 17:
    		/* } */ case 9:
 1p		_r$5 = s.scanNumber(digits, haveDigits); /* */ $s = 19; case 19: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		tok = _r$5;
 1�		_tuple$2 = strconv.ParseInt(tok, base, 64);
		i = _tuple$2[0];
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
 1�			s.error(err);
    		}
 1�		n = ((bitSize >>> 0));
 1�		x = $shiftRightInt64(($shiftLeft64(i, ((64 - n >>> 0)))), ((64 - n >>> 0)));
    		if (!((x.$high === i.$high && x.$low === i.$low))) {
 2+			s.errorString("integer overflow on token " + tok);
    		}
 2a		$s = -1; return i;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanInt }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._v = _v; $f.base = base; $f.bitSize = bitSize; $f.digits = digits; $f.err = err; $f.haveDigits = haveDigits; $f.i = i; $f.n = n; $f.s = s; $f.tok = tok; $f.verb = verb; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanInt = function(verb, bitSize) { return this.$val.scanInt(verb, bitSize); };
ssscanInt~fmt.accept~fmt.consume~fmt.errorString~
fmt.error~fmt.getBase~fmt.notEOF~fmt.scanBasePrefix~fmt.scanNumber~fmt.scanRune~fmt.ssstrconv.ParseInt (*fmt.ss).scanUint ��	ss.ptr.prototype.scanUint = function(verb, bitSize) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, _tuple, _tuple$1, _tuple$2, _v, base, bitSize, digits, err, haveDigits, i, n, s, tok, verb, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _v = $f._v; base = $f.base; bitSize = $f.bitSize; digits = $f.digits; err = $f.err; haveDigits = $f.haveDigits; i = $f.i; n = $f.n; s = $f.s; tok = $f.tok; verb = $f.verb; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 32		/* */ if (verb === 99) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (verb === 99) { */ case 1:
 3E			_r = s.scanRune(bitSize); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = ((x = _r, new $Uint64(x.$high, x.$low)));
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
 3l		$r = s.SkipSpace(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 3{		$r = s.notEOF(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 3�		_tuple = s.getBase(verb);
		base = _tuple[0];
		digits = _tuple[1];
 3�		haveDigits = false;
 3�		/* */ if (verb === 85) { $s = 7; continue; }
		/* */ if (verb === 118) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if (verb === 85) { */ case 7:
 3�			_r$1 = s.consume("U", false); /* */ $s = 13; case 13: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			if (!_r$1) { _v = true; $s = 12; continue s; }
			_r$2 = s.consume("+", false); /* */ $s = 14; case 14: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_v = !_r$2; case 12:
			/* */ if (_v) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (_v) { */ case 10:
 4					s.errorString("bad unicode format ");
    			/* } */ case 11:
    			$s = 9; continue;
    		/* } else if (verb === 118) { */ case 8:
 4M			_r$3 = s.scanBasePrefix(); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$1 = _r$3;
			base = _tuple$1[0];
			digits = _tuple$1[1];
			haveDigits = _tuple$1[2];
    		/* } */ case 9:
 4		_r$4 = s.scanNumber(digits, haveDigits); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		tok = _r$4;
 4�		_tuple$2 = strconv.ParseUint(tok, base, 64);
		i = _tuple$2[0];
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
 4�			s.error(err);
    		}
 4�		n = ((bitSize >>> 0));
 5		x$1 = $shiftRightUint64(($shiftLeft64(i, ((64 - n >>> 0)))), ((64 - n >>> 0)));
    		if (!((x$1.$high === i.$high && x$1.$low === i.$low))) {
 5;			s.errorString("unsigned integer overflow on token " + tok);
    		}
 5z		$s = -1; return i;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanUint }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._v = _v; $f.base = base; $f.bitSize = bitSize; $f.digits = digits; $f.err = err; $f.haveDigits = haveDigits; $f.i = i; $f.n = n; $f.s = s; $f.tok = tok; $f.verb = verb; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanUint = function(verb, bitSize) { return this.$val.scanUint(verb, bitSize); };
ss	scanUint~
fmt.consume~fmt.errorString~
fmt.error~fmt.getBase~fmt.notEOF~fmt.scanBasePrefix~fmt.scanNumber~fmt.scanRune~fmt.ssstrconv.ParseUint (*fmt.ss).floatToken ��	ss.ptr.prototype.floatToken = function() {
		var _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _v, _v$1, _v$2, _v$3, _v$4, digits, exp, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; _v$3 = $f._v$3; _v$4 = $f._v$4; digits = $f.digits; exp = $f.exp; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 6�		s.buf = $subslice(s.buf, 0, 0);
 6�		_r = s.accept("nN"); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		if (!(_r)) { _v$1 = false; $s = 4; continue s; }
		_r$1 = s.accept("aA"); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v$1 = _r$1; case 4:
		if (!(_v$1)) { _v = false; $s = 3; continue s; }
		_r$2 = s.accept("nN"); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_v = _r$2; case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_v) { */ case 1:
 6�			$s = -1; return ($bytesToString(s.buf));
    		/* } */ case 2:
 7		_r$3 = s.accept("+-"); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$3;
 7*		_r$4 = s.accept("iI"); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		if (!(_r$4)) { _v$3 = false; $s = 12; continue s; }
		_r$5 = s.accept("nN"); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_v$3 = _r$5; case 12:
		if (!(_v$3)) { _v$2 = false; $s = 11; continue s; }
		_r$6 = s.accept("fF"); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_v$2 = _r$6; case 11:
		/* */ if (_v$2) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if (_v$2) { */ case 9:
 7d			$s = -1; return ($bytesToString(s.buf));
    		/* } */ case 10:
 7}		digits = "0123456789_";
 7�		exp = "eEpP";
 7�		_r$7 = s.accept("0"); /* */ $s = 19; case 19: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		if (!(_r$7)) { _v$4 = false; $s = 18; continue s; }
		_r$8 = s.accept("xX"); /* */ $s = 20; case 20: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		_v$4 = _r$8; case 18:
		/* */ if (_v$4) { $s = 16; continue; }
		/* */ $s = 17; continue;
    		/* if (_v$4) { */ case 16:
 7�			digits = "0123456789aAbBcCdDeEfF_";
 7�			exp = "pP";
    		/* } */ case 17:
 8		/* while (true) { */ case 21:
			_r$9 = s.accept(digits); /* */ $s = 23; case 23: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			/* if (!(_r$9)) { break; } */ if(!(_r$9)) { $s = 22; continue; }
    		$s = 21; continue;
		case 22:
 8@		_r$10 = s.accept("."); /* */ $s = 26; case 26: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		/* */ if (_r$10) { $s = 24; continue; }
		/* */ $s = 25; continue;
    		/* if (_r$10) { */ case 24:
 8g			/* while (true) { */ case 27:
				_r$11 = s.accept(digits); /* */ $s = 29; case 29: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
				/* if (!(_r$11)) { break; } */ if(!(_r$11)) { $s = 28; continue; }
    			$s = 27; continue;
			case 28:
    		/* } */ case 25:
 8�		_r$12 = s.accept(exp); /* */ $s = 32; case 32: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
		/* */ if (_r$12) { $s = 30; continue; }
		/* */ $s = 31; continue;
    		/* if (_r$12) { */ case 30:
 8�			_r$13 = s.accept("+-"); /* */ $s = 33; case 33: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
			_r$13;
 8�			/* while (true) { */ case 34:
				_r$14 = s.accept("0123456789_"); /* */ $s = 36; case 36: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
				/* if (!(_r$14)) { break; } */ if(!(_r$14)) { $s = 35; continue; }
    			$s = 34; continue;
			case 35:
    		/* } */ case 31:
 9		$s = -1; return ($bytesToString(s.buf));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.floatToken }; } $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f._v$3 = _v$3; $f._v$4 = _v$4; $f.digits = digits; $f.exp = exp; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.floatToken = function() { return this.$val.floatToken(); };
ssfloatToken~fmt.accept~fmt.ss (*fmt.ss).complexTokens �
l	ss.ptr.prototype.complexTokens = function() {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tmp, _tmp$1, _v, imag, imagSign, parens, real, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _v = $f._v; imag = $f.imag; imagSign = $f.imagSign; parens = $f.parens; real = $f.real; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		real = "";
		imag = "";
		s = this;
 :[		_r = s.accept("("); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		parens = _r;
 :t		_r$1 = s.floatToken(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		real = _r$1;
 :�		s.buf = $subslice(s.buf, 0, 0);
 :�		_r$2 = s.accept("+-"); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		/* */ if (!_r$2) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!_r$2) { */ case 3:
 :�			s.error(complexError);
    		/* } */ case 4:
 ;		imagSign = ($bytesToString(s.buf));
 ;		_r$3 = s.floatToken(); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		imag = _r$3;
 ;5		_r$4 = s.accept("i"); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		/* */ if (!_r$4) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!_r$4) { */ case 7:
 ;K			s.error(complexError);
    		/* } */ case 8:
 ;e		if (!(parens)) { _v = false; $s = 12; continue s; }
		_r$5 = s.accept(")"); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_v = !_r$5; case 12:
		/* */ if (_v) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (_v) { */ case 10:
 ;�			s.error(complexError);
    		/* } */ case 11:
    		_tmp = real;
		_tmp$1 = imagSign + imag;
		real = _tmp;
		imag = _tmp$1;
		$s = -1; return [real, imag];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.complexTokens }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._v = _v; $f.imag = imag; $f.imagSign = imagSign; $f.parens = parens; $f.real = real; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.complexTokens = function() { return this.$val.complexTokens(); };
sscomplexTokens~fmt.accept~fmt.complexError
fmt.error~fmt.floatToken~fmt.ss fmt.hasXfmthasX hasX�
	hasX = function(s) {
		var i, s;
 ;�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if ((s.charCodeAt(i) === 120) || (s.charCodeAt(i) === 88)) {
 <				return true;
    			}
 ;�			i = i + (1) >> 0;
    		}
 <2		return false;
    	};
hasXfmt.hasX (*fmt.ss).convertFloat ��	ss.ptr.prototype.convertFloat = function(str, n) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, e, e$1, err, err$1, f, f$1, m, n, ok, ok$1, p, s, str;
		s = this;
 =E		p = indexRune(str, 112);
    		if (p >= 0 && !hasX(str)) {
 =�			_tuple = strconv.ParseFloat($substring(str, 0, p), n);
			f = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
 >-				_tuple$1 = $assertType(err, ptrType$6, true);
				e = _tuple$1[0];
				ok = _tuple$1[1];
    				if (ok) {
 >X					e.Num = str;
    				}
 >l				s.error(err);
    			}
 >			_tuple$2 = strconv.Atoi($substring(str, (p + 1 >> 0)));
			m = _tuple$2[0];
			err = _tuple$2[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
 >�				_tuple$3 = $assertType(err, ptrType$6, true);
				e$1 = _tuple$3[0];
				ok$1 = _tuple$3[1];
    				if (ok$1) {
 ?					e$1.Num = str;
    				}
 ?				s.error(err);
    			}
 ?-			return math.Ldexp(f, m);
    		}
 ?I		_tuple$4 = strconv.ParseFloat(str, n);
		f$1 = _tuple$4[0];
		err$1 = _tuple$4[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
 ?�			s.error(err$1);
    		}
 ?�		return f$1;
    	};
	ss.prototype.convertFloat = function(str, n) { return this.$val.convertFloat(str, n); };
ssconvertFloat~	
fmt.error~fmt.hasXfmt.indexRunefmt.ptrType$6fmt.ss
math.Ldexpstrconv.Atoistrconv.NumErrorstrconv.ParseFloat (*fmt.ss).scanComplex �		ss.ptr.prototype.scanComplex = function(verb, n) {
		var _q, _q$1, _r, _tuple, imag, n, real, s, simag, sreal, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; _tuple = $f._tuple; imag = $f.imag; n = $f.n; real = $f.real; s = $f.s; simag = $f.simag; sreal = $f.sreal; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
    		if (!s.okVerb(verb, "beEfFgGv", "complex")) {
 A			$s = -1; return new $Complex128(0, 0);
    		}
 A*		$r = s.SkipSpace(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 A9		$r = s.notEOF(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 AE		_r = s.complexTokens(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		sreal = _tuple[0];
		simag = _tuple[1];
 Ah		real = s.convertFloat(sreal, (_q = n / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
 A�		imag = s.convertFloat(simag, (_q$1 = n / 2, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")));
 A�		$s = -1; return new $Complex128(real, imag);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanComplex }; } $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f._tuple = _tuple; $f.imag = imag; $f.n = n; $f.real = real; $f.s = s; $f.simag = simag; $f.sreal = sreal; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanComplex = function(verb, n) { return this.$val.scanComplex(verb, n); };
ssscanComplex~fmt.complexTokens~fmt.convertFloat~fmt.notEOF~fmt.okVerb~fmt.ss (*fmt.ss).convertString ��	ss.ptr.prototype.convertString = function(verb) {
		var _1, _r, _r$1, _r$2, s, str, verb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; s = $f.s; str = $f.str; verb = $f.verb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		str = "";
		s = this;
    		if (!s.okVerb(verb, "svqxX", "string")) {
    			str = "";
			$s = -1; return str;
    		}
 B�		$r = s.SkipSpace(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 B�		$r = s.notEOF(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_1 = verb;
 B�			/* */ if (_1 === (113)) { $s = 4; continue; }
			/* */ if ((_1 === (120)) || (_1 === (88))) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_1 === (113)) { */ case 4:
 B�				_r = s.quotedString(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				str = _r;
    				$s = 7; continue;
    			/* } else if ((_1 === (120)) || (_1 === (88))) { */ case 5:
 C				_r$1 = s.hexString(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				str = _r$1;
    				$s = 7; continue;
			/* } else { */ case 6:
 C?				_r$2 = s.token(true, notSpace); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				str = ($bytesToString(_r$2));
    			/* } */ case 7:
    		case 3:
 C�		$s = -1; return str;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.convertString }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.s = s; $f.str = str; $f.verb = verb; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.convertString = function(verb) { return this.$val.convertString(verb); };
ssconvertString~fmt.hexString~fmt.notEOF~fmt.notSpacefmt.okVerb~fmt.quotedString~fmt.ss
fmt.token~ (*fmt.ss).quotedString �	ss.ptr.prototype.quotedString = function() {
		var _1, _r, _r$1, _r$2, _r$3, _tuple, err, quote, r, r$1, result, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; err = $f.err; quote = $f.quote; r = $f.r; r$1 = $f.r$1; result = $f.result; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 D$		$r = s.notEOF(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 D0		_r = s.getRune(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		quote = _r;
    			_1 = quote;
 DV			/* */ if (_1 === (96)) { $s = 4; continue; }
			/* */ if (_1 === (34)) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_1 === (96)) { */ case 4:
 D�				/* while (true) { */ case 8:
 D�					_r$1 = s.mustReadRune(); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					r = _r$1;
    					if (r === quote) {
 D�						/* break; */ $s = 9; continue;
    					}
 D�					(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeRune(r);
    				$s = 8; continue;
				case 9:
 D�				$s = -1; return ($bytesToString(s.buf));
    			/* } else if (_1 === (34)) { */ case 5:
 Es				(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeByte(34);
 E�				/* while (true) { */ case 11:
 E�					_r$2 = s.mustReadRune(); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					r$1 = _r$2;
 E�					(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeRune(r$1);
 E�					/* */ if (r$1 === 92) { $s = 14; continue; }
					/* */ if (r$1 === 34) { $s = 15; continue; }
					/* */ $s = 16; continue;
    					/* if (r$1 === 92) { */ case 14:
 F�						_r$3 = s.mustReadRune(); /* */ $s = 17; case 17: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						$r = (s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeRune(_r$3); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 16; continue;
    					/* } else if (r$1 === 34) { */ case 15:
 F�						/* break; */ $s = 12; continue;
    					/* } */ case 16:
    				$s = 11; continue;
				case 12:
 G				_tuple = strconv.Unquote(($bytesToString(s.buf)));
				result = _tuple[0];
				err = _tuple[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
 GG					s.error(err);
    				}
 GZ				$s = -1; return result;
    			/* } else { */ case 6:
 Gt				s.errorString("expected quoted string");
    			/* } */ case 7:
    		case 3:
 G�		$s = -1; return "";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.quotedString }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f.err = err; $f.quote = quote; $f.r = r; $f.r$1 = r$1; $f.result = result; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.quotedString = function() { return this.$val.quotedString(); };
ssquotedString~
fmt.errorString~
fmt.error~fmt.getRune~fmt.mustReadRune~fmt.notEOF~fmt.ptrType$1fmt.ssfmt.writeByte~fmt.writeRune~strconv.Unquote fmt.hexDigitfmthexDigit hexDigit��	hexDigit = function(d) {
		var _1, d, digit;
 H
		digit = ((d >> 0));
    		_1 = digit;
    		if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55)) || (_1 === (56)) || (_1 === (57))) {
 Hd			return [digit - 48 >> 0, true];
    		} else if ((_1 === (97)) || (_1 === (98)) || (_1 === (99)) || (_1 === (100)) || (_1 === (101)) || (_1 === (102))) {
 H�			return [(10 + digit >> 0) - 97 >> 0, true];
    		} else if ((_1 === (65)) || (_1 === (66)) || (_1 === (67)) || (_1 === (68)) || (_1 === (69)) || (_1 === (70))) {
 H�			return [(10 + digit >> 0) - 65 >> 0, true];
    		}
 I			return [-1, false];
    	};
hexDigitfmt.hexDigit (*fmt.ss).hexByte ��	ss.ptr.prototype.hexByte = function() {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tuple, _tuple$1, b, ok, rune1, s, value1, value2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; ok = $f.ok; rune1 = $f.rune1; s = $f.s; value1 = $f.value1; value2 = $f.value2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = 0;
		ok = false;
		s = this;
 J,		_r = s.getRune(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		rune1 = _r;
    		if (rune1 === -1) {
 JV			$s = -1; return [b, ok];
    		}
 Ja		_tuple = hexDigit(rune1);
		value1 = _tuple[0];
		ok = _tuple[1];
 J�		/* */ if (!ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!ok) { */ case 2:
 J�			_r$1 = s.UnreadRune(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
 J�			$s = -1; return [b, ok];
    		/* } */ case 3:
 J�		_r$2 = s.mustReadRune(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = hexDigit(_r$2); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$1 = _r$3;
		value2 = _tuple$1[0];
		ok = _tuple$1[1];
    		if (!ok) {
 J�			s.errorString("illegal hex digit");
 K			$s = -1; return [b, ok];
    		}
    		_tmp = ((((value1 << 4 >> 0) | value2) << 24 >>> 24));
		_tmp$1 = true;
		b = _tmp;
		ok = _tmp$1;
		$s = -1; return [b, ok];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.hexByte }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.ok = ok; $f.rune1 = rune1; $f.s = s; $f.value1 = value1; $f.value2 = value2; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.hexByte = function() { return this.$val.hexByte(); };
sshexByte~fmt.errorString~fmt.getRune~fmt.hexDigitfmt.mustReadRune~fmt.ss (*fmt.ss).hexString �e	ss.ptr.prototype.hexString = function() {
		var _r, _tuple, b, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 K�		$r = s.notEOF(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 K�		/* while (true) { */ case 2:
 K�			_r = s.hexByte(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			b = _tuple[0];
			ok = _tuple[1];
    			if (!ok) {
 K�				/* break; */ $s = 3; continue;
    			}
 K�			(s.$ptr_buf || (s.$ptr_buf = new ptrType$1(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, s))).writeByte(b);
    		$s = 2; continue;
		case 3:
    		if (s.buf.$length === 0) {
 L
			s.errorString("no hex data for %x string");
 L7			$s = -1; return "";
    		}
 LE		$s = -1; return ($bytesToString(s.buf));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.hexString }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.hexString = function() { return this.$val.hexString(); };
ss
hexString~fmt.errorString~fmt.hexByte~fmt.notEOF~fmt.ptrType$1fmt.ssfmt.writeByte~ (*fmt.ss).scanPercent �D	ss.ptr.prototype.scanPercent = function() {
		var _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 M5		$r = s.SkipSpace(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 MD		$r = s.notEOF(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 MP		_r = s.accept("%"); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!_r) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!_r) { */ case 3:
 Mf			s.errorString("missing literal %");
    		/* } */ case 4:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanPercent }; } $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanPercent = function() { return this.$val.scanPercent(); };
ssscanPercent~fmt.accept~fmt.errorString~fmt.notEOF~fmt.ss (*fmt.ss).scanOne �R�	ss.ptr.prototype.scanOne = function(verb, arg) {
		var _1, _arg, _arg$1, _arg$2, _arg$3, _arg$4, _arg$5, _arg$6, _arg$7, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$28, _r$29, _r$3, _r$30, _r$31, _r$32, _r$33, _r$34, _r$35, _r$36, _r$37, _r$38, _r$39, _r$4, _r$40, _r$41, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, arg, err, i, ok, ptr, s, str, typ, v, v$1, v$10, v$11, v$12, v$13, v$14, v$15, v$16, v$17, v$18, v$19, v$2, v$20, v$3, v$4, v$5, v$6, v$7, v$8, v$9, val, verb, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _arg$4 = $f._arg$4; _arg$5 = $f._arg$5; _arg$6 = $f._arg$6; _arg$7 = $f._arg$7; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$28 = $f._r$28; _r$29 = $f._r$29; _r$3 = $f._r$3; _r$30 = $f._r$30; _r$31 = $f._r$31; _r$32 = $f._r$32; _r$33 = $f._r$33; _r$34 = $f._r$34; _r$35 = $f._r$35; _r$36 = $f._r$36; _r$37 = $f._r$37; _r$38 = $f._r$38; _r$39 = $f._r$39; _r$4 = $f._r$4; _r$40 = $f._r$40; _r$41 = $f._r$41; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; arg = $f.arg; err = $f.err; i = $f.i; ok = $f.ok; ptr = $f.ptr; s = $f.s; str = $f.str; typ = $f.typ; v = $f.v; v$1 = $f.v$1; v$10 = $f.v$10; v$11 = $f.v$11; v$12 = $f.v$12; v$13 = $f.v$13; v$14 = $f.v$14; v$15 = $f.v$15; v$16 = $f.v$16; v$17 = $f.v$17; v$18 = $f.v$18; v$19 = $f.v$19; v$2 = $f.v$2; v$20 = $f.v$20; v$3 = $f.v$3; v$4 = $f.v$4; v$5 = $f.v$5; v$6 = $f.v$6; v$7 = $f.v$7; v$8 = $f.v$8; v$9 = $f.v$9; val = $f.val; verb = $f.verb; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
 N		s.buf = $subslice(s.buf, 0, 0);
 N/		err = $ifaceNil;
 Nu		_tuple = $assertType(arg, Scanner, true);
		v = _tuple[0];
		ok = _tuple[1];
 Nr		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
 N�			_r = v.Scan(s, verb); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
 N�					err = io.ErrUnexpectedEOF;
    				}
 N�				s.error(err);
    			}
 O			$s = -1; return;
    		/* } */ case 2:
 O		_ref = arg;
		/* */ if ($assertType(_ref, ptrType$7, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, ptrType$8, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, ptrType$9, true)[1]) { $s = 6; continue; }
		/* */ if ($assertType(_ref, ptrType$10, true)[1]) { $s = 7; continue; }
		/* */ if ($assertType(_ref, ptrType$11, true)[1]) { $s = 8; continue; }
		/* */ if ($assertType(_ref, ptrType$12, true)[1]) { $s = 9; continue; }
		/* */ if ($assertType(_ref, ptrType$13, true)[1]) { $s = 10; continue; }
		/* */ if ($assertType(_ref, ptrType$14, true)[1]) { $s = 11; continue; }
		/* */ if ($assertType(_ref, ptrType$15, true)[1]) { $s = 12; continue; }
		/* */ if ($assertType(_ref, ptrType$16, true)[1]) { $s = 13; continue; }
		/* */ if ($assertType(_ref, ptrType$17, true)[1]) { $s = 14; continue; }
		/* */ if ($assertType(_ref, ptrType$18, true)[1]) { $s = 15; continue; }
		/* */ if ($assertType(_ref, ptrType$19, true)[1]) { $s = 16; continue; }
		/* */ if ($assertType(_ref, ptrType$20, true)[1]) { $s = 17; continue; }
		/* */ if ($assertType(_ref, ptrType$21, true)[1]) { $s = 18; continue; }
		/* */ if ($assertType(_ref, ptrType$22, true)[1]) { $s = 19; continue; }
		/* */ if ($assertType(_ref, ptrType$4, true)[1]) { $s = 20; continue; }
		/* */ if ($assertType(_ref, ptrType$23, true)[1]) { $s = 21; continue; }
		/* */ $s = 22; continue;
    		/* if ($assertType(_ref, ptrType$7, true)[1]) { */ case 4:
    			v$1 = _ref.$val;
 O?			_r$1 = s.scanBool(verb); /* */ $s = 24; case 24: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			v$1.$set(_r$1);
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$8, true)[1]) { */ case 5:
    			v$2 = _ref.$val;
 Oi			_r$2 = s.scanComplex(verb, 64); /* */ $s = 25; case 25: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			v$2.$set(((x = _r$2, new $Complex64(x.$real, x.$imag))));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$9, true)[1]) { */ case 6:
    			v$3 = _ref.$val;
 O�			_r$3 = s.scanComplex(verb, 128); /* */ $s = 26; case 26: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			v$3.$set(_r$3);
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$10, true)[1]) { */ case 7:
    			v$4 = _ref.$val;
 O�			_r$4 = s.scanInt(verb, 32); /* */ $s = 27; case 27: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			v$4.$set((((x$1 = _r$4, x$1.$low + ((x$1.$high >> 31) * 4294967296)) >> 0)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$11, true)[1]) { */ case 8:
    			v$5 = _ref.$val;
 P			_r$5 = s.scanInt(verb, 8); /* */ $s = 28; case 28: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			v$5.$set((((x$2 = _r$5, x$2.$low + ((x$2.$high >> 31) * 4294967296)) << 24 >> 24)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$12, true)[1]) { */ case 9:
    			v$6 = _ref.$val;
 P2			_r$6 = s.scanInt(verb, 16); /* */ $s = 29; case 29: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			v$6.$set((((x$3 = _r$6, x$3.$low + ((x$3.$high >> 31) * 4294967296)) << 16 >> 16)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$13, true)[1]) { */ case 10:
    			v$7 = _ref.$val;
 Pb			_r$7 = s.scanInt(verb, 32); /* */ $s = 30; case 30: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			v$7.$set((((x$4 = _r$7, x$4.$low + ((x$4.$high >> 31) * 4294967296)) >> 0)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$14, true)[1]) { */ case 11:
    			v$8 = _ref.$val;
 P�			_r$8 = s.scanInt(verb, 64); /* */ $s = 31; case 31: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			v$8.$set(_r$8);
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$15, true)[1]) { */ case 12:
    			v$9 = _ref.$val;
 P�			_r$9 = s.scanUint(verb, 32); /* */ $s = 32; case 32: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			v$9.$set(((_r$9.$low >>> 0)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$16, true)[1]) { */ case 13:
    			v$10 = _ref.$val;
 P�			_r$10 = s.scanUint(verb, 8); /* */ $s = 33; case 33: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			v$10.$set(((_r$10.$low << 24 >>> 24)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$17, true)[1]) { */ case 14:
    			v$11 = _ref.$val;
 Q 			_r$11 = s.scanUint(verb, 16); /* */ $s = 34; case 34: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			v$11.$set(((_r$11.$low << 16 >>> 16)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$18, true)[1]) { */ case 15:
    			v$12 = _ref.$val;
 QS			_r$12 = s.scanUint(verb, 32); /* */ $s = 35; case 35: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			v$12.$set(((_r$12.$low >>> 0)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$19, true)[1]) { */ case 16:
    			v$13 = _ref.$val;
 Q�			_r$13 = s.scanUint(verb, 64); /* */ $s = 36; case 36: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
			v$13.$set(_r$13);
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$20, true)[1]) { */ case 17:
    			v$14 = _ref.$val;
 Q�			_r$14 = s.scanUint(verb, 32); /* */ $s = 37; case 37: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
			v$14.$set(((_r$14.$low >>> 0)));
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$21, true)[1]) { */ case 18:
    			v$15 = _ref.$val;
 R�			/* */ if (s.okVerb(verb, "beEfFgGv", "float32")) { $s = 38; continue; }
			/* */ $s = 39; continue;
    			/* if (s.okVerb(verb, "beEfFgGv", "float32")) { */ case 38:
 R�				$r = s.SkipSpace(); /* */ $s = 40; case 40: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 R�				$r = s.notEOF(); /* */ $s = 41; case 41: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 R�				_r$15 = s.floatToken(); /* */ $s = 42; case 42: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
				_r$16 = s.convertFloat(_r$15, 32); /* */ $s = 43; case 43: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
				v$15.$set(($fround(_r$16)));
    			/* } */ case 39:
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$22, true)[1]) { */ case 19:
    			v$16 = _ref.$val;
 S1			/* */ if (s.okVerb(verb, "beEfFgGv", "float64")) { $s = 44; continue; }
			/* */ $s = 45; continue;
    			/* if (s.okVerb(verb, "beEfFgGv", "float64")) { */ case 44:
 S_				$r = s.SkipSpace(); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 Sp				$r = s.notEOF(); /* */ $s = 47; case 47: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 S~				_r$17 = s.floatToken(); /* */ $s = 48; case 48: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
				_r$18 = s.convertFloat(_r$17, 64); /* */ $s = 49; case 49: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				v$16.$set(_r$18);
    			/* } */ case 45:
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$4, true)[1]) { */ case 20:
    			v$17 = _ref.$val;
 S�			_r$19 = s.convertString(verb); /* */ $s = 50; case 50: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
			v$17.$set(_r$19);
    			$s = 23; continue;
    		/* } else if ($assertType(_ref, ptrType$23, true)[1]) { */ case 21:
    			v$18 = _ref.$val;
 Tj			_r$20 = s.convertString(verb); /* */ $s = 51; case 51: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
			v$18.$set((new sliceType$2($stringToBytes(_r$20))));
    			$s = 23; continue;
		/* } else { */ case 22:
    			v$19 = _ref;
 T�			_r$21 = reflect.ValueOf(v$19); /* */ $s = 52; case 52: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
			val = _r$21;
 T�			ptr = val;
 T�			/* */ if (!(($clone(ptr, reflect.Value).Kind() === 22))) { $s = 53; continue; }
			/* */ $s = 54; continue;
    			/* if (!(($clone(ptr, reflect.Value).Kind() === 22))) { */ case 53:
 T�				_r$22 = $clone(val, reflect.Value).Type().String(); /* */ $s = 55; case 55: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
				$r = s.errorString("type not a pointer: " + _r$22); /* */ $s = 56; case 56: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 U#				$s = -1; return;
    			/* } */ case 54:
 U7				_r$23 = $clone(ptr, reflect.Value).Elem(); /* */ $s = 58; case 58: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
				v$20 = _r$23;
    				_1 = $clone(v$20, reflect.Value).Kind();
 UU				/* */ if (_1 === (1)) { $s = 59; continue; }
				/* */ if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { $s = 60; continue; }
				/* */ if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { $s = 61; continue; }
				/* */ if (_1 === (24)) { $s = 62; continue; }
				/* */ if (_1 === (23)) { $s = 63; continue; }
				/* */ if ((_1 === (13)) || (_1 === (14))) { $s = 64; continue; }
				/* */ if ((_1 === (15)) || (_1 === (16))) { $s = 65; continue; }
				/* */ $s = 66; continue;
    				/* if (_1 === (1)) { */ case 59:
 Uk					_r$24 = s.scanBool(verb); /* */ $s = 68; case 68: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetBool(_r$24); /* */ $s = 69; case 69: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
    				/* } else if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { */ case 60:
 U�					_arg = verb;
					_r$25 = $clone(v$20, reflect.Value).Type().Bits(); /* */ $s = 70; case 70: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
					_arg$1 = _r$25;
					_r$26 = s.scanInt(_arg, _arg$1); /* */ $s = 71; case 71: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetInt(_r$26); /* */ $s = 72; case 72: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
    				/* } else if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { */ case 61:
 Vl					_arg$2 = verb;
					_r$27 = $clone(v$20, reflect.Value).Type().Bits(); /* */ $s = 73; case 73: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
					_arg$3 = _r$27;
					_r$28 = s.scanUint(_arg$2, _arg$3); /* */ $s = 74; case 74: if($c) { $c = false; _r$28 = _r$28.$blk(); } if (_r$28 && _r$28.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetUint(_r$28); /* */ $s = 75; case 75: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
    				/* } else if (_1 === (24)) { */ case 62:
 V�					_r$29 = s.convertString(verb); /* */ $s = 76; case 76: if($c) { $c = false; _r$29 = _r$29.$blk(); } if (_r$29 && _r$29.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetString(_r$29); /* */ $s = 77; case 77: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
    				/* } else if (_1 === (23)) { */ case 63:
 W 					typ = $clone(v$20, reflect.Value).Type();
 W3					_r$30 = typ.Elem(); /* */ $s = 80; case 80: if($c) { $c = false; _r$30 = _r$30.$blk(); } if (_r$30 && _r$30.$blk !== undefined) { break s; }
					_r$31 = _r$30.Kind(); /* */ $s = 81; case 81: if($c) { $c = false; _r$31 = _r$31.$blk(); } if (_r$31 && _r$31.$blk !== undefined) { break s; }
					/* */ if (!((_r$31 === 8))) { $s = 78; continue; }
					/* */ $s = 79; continue;
    					/* if (!((_r$31 === 8))) { */ case 78:
 W_						_r$32 = $clone(val, reflect.Value).Type().String(); /* */ $s = 82; case 82: if($c) { $c = false; _r$32 = _r$32.$blk(); } if (_r$32 && _r$32.$blk !== undefined) { break s; }
						$r = s.errorString("can't scan type: " + _r$32); /* */ $s = 83; case 83: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 79:
 W�					_r$33 = s.convertString(verb); /* */ $s = 84; case 84: if($c) { $c = false; _r$33 = _r$33.$blk(); } if (_r$33 && _r$33.$blk !== undefined) { break s; }
					str = _r$33;
 W�					_r$34 = reflect.MakeSlice(typ, str.length, str.length); /* */ $s = 85; case 85: if($c) { $c = false; _r$34 = _r$34.$blk(); } if (_r$34 && _r$34.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).Set($clone(_r$34, reflect.Value)); /* */ $s = 86; case 86: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 W�					i = 0;
					/* while (true) { */ case 87:
						/* if (!(i < str.length)) { break; } */ if(!(i < str.length)) { $s = 88; continue; }
 X						_r$35 = $clone(v$20, reflect.Value).Index(i); /* */ $s = 89; case 89: if($c) { $c = false; _r$35 = _r$35.$blk(); } if (_r$35 && _r$35.$blk !== undefined) { break s; }
						$r = $clone(_r$35, reflect.Value).SetUint((new $Uint64(0, str.charCodeAt(i)))); /* */ $s = 90; case 90: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 X						i = i + (1) >> 0;
    					$s = 87; continue;
					case 88:
    					$s = 67; continue;
    				/* } else if ((_1 === (13)) || (_1 === (14))) { */ case 64:
 Xm					$r = s.SkipSpace(); /* */ $s = 91; case 91: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 X~					$r = s.notEOF(); /* */ $s = 92; case 92: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 X�					_r$36 = s.floatToken(); /* */ $s = 93; case 93: if($c) { $c = false; _r$36 = _r$36.$blk(); } if (_r$36 && _r$36.$blk !== undefined) { break s; }
					_arg$4 = _r$36;
					_r$37 = $clone(v$20, reflect.Value).Type().Bits(); /* */ $s = 94; case 94: if($c) { $c = false; _r$37 = _r$37.$blk(); } if (_r$37 && _r$37.$blk !== undefined) { break s; }
					_arg$5 = _r$37;
					_r$38 = s.convertFloat(_arg$4, _arg$5); /* */ $s = 95; case 95: if($c) { $c = false; _r$38 = _r$38.$blk(); } if (_r$38 && _r$38.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetFloat(_r$38); /* */ $s = 96; case 96: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
    				/* } else if ((_1 === (15)) || (_1 === (16))) { */ case 65:
 X�					_arg$6 = verb;
					_r$39 = $clone(v$20, reflect.Value).Type().Bits(); /* */ $s = 97; case 97: if($c) { $c = false; _r$39 = _r$39.$blk(); } if (_r$39 && _r$39.$blk !== undefined) { break s; }
					_arg$7 = _r$39;
					_r$40 = s.scanComplex(_arg$6, _arg$7); /* */ $s = 98; case 98: if($c) { $c = false; _r$40 = _r$40.$blk(); } if (_r$40 && _r$40.$blk !== undefined) { break s; }
					$r = $clone(v$20, reflect.Value).SetComplex(_r$40); /* */ $s = 99; case 99: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 67; continue;
				/* } else { */ case 66:
 Y:					_r$41 = $clone(val, reflect.Value).Type().String(); /* */ $s = 100; case 100: if($c) { $c = false; _r$41 = _r$41.$blk(); } if (_r$41 && _r$41.$blk !== undefined) { break s; }
					$r = s.errorString("can't scan type: " + _r$41); /* */ $s = 101; case 101: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 67:
    			case 57:
    		/* } */ case 23:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.scanOne }; } $f._1 = _1; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._arg$4 = _arg$4; $f._arg$5 = _arg$5; $f._arg$6 = _arg$6; $f._arg$7 = _arg$7; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$28 = _r$28; $f._r$29 = _r$29; $f._r$3 = _r$3; $f._r$30 = _r$30; $f._r$31 = _r$31; $f._r$32 = _r$32; $f._r$33 = _r$33; $f._r$34 = _r$34; $f._r$35 = _r$35; $f._r$36 = _r$36; $f._r$37 = _r$37; $f._r$38 = _r$38; $f._r$39 = _r$39; $f._r$4 = _r$4; $f._r$40 = _r$40; $f._r$41 = _r$41; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f.arg = arg; $f.err = err; $f.i = i; $f.ok = ok; $f.ptr = ptr; $f.s = s; $f.str = str; $f.typ = typ; $f.v = v; $f.v$1 = v$1; $f.v$10 = v$10; $f.v$11 = v$11; $f.v$12 = v$12; $f.v$13 = v$13; $f.v$14 = v$14; $f.v$15 = v$15; $f.v$16 = v$16; $f.v$17 = v$17; $f.v$18 = v$18; $f.v$19 = v$19; $f.v$2 = v$2; $f.v$20 = v$20; $f.v$3 = v$3; $f.v$4 = v$4; $f.v$5 = v$5; $f.v$6 = v$6; $f.v$7 = v$7; $f.v$8 = v$8; $f.v$9 = v$9; $f.val = val; $f.verb = verb; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.scanOne = function(verb, arg) { return this.$val.scanOne(verb, arg); };
ssscanOne~%fmt.Scannerfmt.convertFloat~fmt.convertString~fmt.errorString~
fmt.error~fmt.floatToken~fmt.notEOF~fmt.okVerb~fmt.ptrType$10fmt.ptrType$11fmt.ptrType$12fmt.ptrType$13fmt.ptrType$14fmt.ptrType$15fmt.ptrType$16fmt.ptrType$17fmt.ptrType$18fmt.ptrType$19fmt.ptrType$20fmt.ptrType$21fmt.ptrType$22fmt.ptrType$23fmt.ptrType$4fmt.ptrType$7fmt.ptrType$8fmt.ptrType$9fmt.scanBool~fmt.scanComplex~fmt.scanInt~fmt.scanUint~fmt.sliceType$2fmt.ssio.EOFio.ErrUnexpectedEOFreflect.MakeSlicereflect.Valuereflect.ValueOf fmt.errorHandlerfmterrorHandler errorHandler�G	errorHandler = function(errp) {
		var _tuple, _tuple$1, e, eof, errp, ok, ok$1, se;
 Y�		e = $recover();
    		if (!($interfaceIsEqual(e, $ifaceNil))) {
 Y�			_tuple = $assertType(e, scanError, true);
			se = $clone(_tuple[0], scanError);
			ok = _tuple[1];
    			if (ok) {
 Z/				errp.$set(se.err);
    			} else {
 ZJ				_tuple$1 = $assertType(e, $error, true);
				eof = _tuple$1[0];
				ok$1 = _tuple$1[1];
    				if (ok$1 && $interfaceIsEqual(eof, io.EOF)) {
 Z�					errp.$set(eof);
    				} else {
 Z�					$panic(e);
    				}
    			}
    		}
    	};
errorHandlerfmt.errorHandlerfmt.scanErrorio.EOF (*fmt.ss).doScan �	�	ss.ptr.prototype.doScan = function(a) {
		var $24r, _i, _r, _ref, a, arg, err, numProcessed, r, s, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _ref = $f._ref; a = $f.a; arg = $f.arg; err = $f.err; numProcessed = $f.numProcessed; r = $f.r; s = $f.s; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		err = [err];
		numProcessed = 0;
		err[0] = $ifaceNil;
		s = this;
 [?		$deferred.push([errorHandler, [(err.$ptr || (err.$ptr = new ptrType$24(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, err)))]]);
 [Y		_ref = a;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 [s			$r = s.scanOne(118, arg); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 [�			numProcessed = numProcessed + (1) >> 0;
    			_i++;
		$s = 1; continue;
		case 2:
 [�		/* */ if (s.ssave.nlIsEnd) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (s.ssave.nlIsEnd) { */ case 4:
 [�			/* while (true) { */ case 6:
 [�				_r = s.getRune(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				r = _r;
    				if ((r === 10) || (r === -1)) {
 \#					/* break; */ $s = 7; continue;
    				}
    				if (!isSpace(r)) {
 \F					s.errorString("expected newline");
 \l					/* break; */ $s = 7; continue;
    				}
    			$s = 6; continue;
			case 7:
    		/* } */ case 5:
 \		$24r = [numProcessed, err[0]];
		$s = 9; case 9: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [numProcessed, err[0]]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: ss.ptr.prototype.doScan }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._ref = _ref; $f.a = a; $f.arg = arg; $f.err = err; $f.numProcessed = numProcessed; $f.r = r; $f.s = s; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	ss.prototype.doScan = function(a) { return this.$val.doScan(a); };
ssdoScan~fmt.errorHandlerfmt.errorString~fmt.getRune~fmt.isSpacefmt.ptrType$24fmt.scanOne~fmt.ss (*fmt.ss).advance ��	ss.ptr.prototype.advance = function(format) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tuple, _tuple$1, _tuple$2, fmtc, format, i, inputc, inputc$1, inputc$2, j, newlines, nextc, s, trailingSpace, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; fmtc = $f.fmtc; format = $f.format; i = $f.i; inputc = $f.inputc; inputc$1 = $f.inputc$1; inputc$2 = $f.inputc$2; j = $f.j; newlines = $f.newlines; nextc = $f.nextc; s = $f.s; trailingSpace = $f.trailingSpace; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		i = 0;
		s = this;
 ^�		/* while (true) { */ case 1:
			/* if (!(i < format.length)) { break; } */ if(!(i < format.length)) { $s = 2; continue; }
 ^�			_tuple = utf8.DecodeRuneInString($substring(format, i));
			fmtc = _tuple[0];
			w = _tuple[1];
 `�			/* */ if (isSpace(fmtc)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (isSpace(fmtc)) { */ case 3:
 a				newlines = 0;
 a				trailingSpace = false;
 a9				while (true) {
					if (!(isSpace(fmtc) && i < format.length)) { break; }
    					if (fmtc === 10) {
 a{						newlines = newlines + (1) >> 0;
 a�						trailingSpace = false;
    					} else {
 a�						trailingSpace = true;
    					}
 a�					i = i + (w) >> 0;
 a�					_tuple$1 = utf8.DecodeRuneInString($substring(format, i));
					fmtc = _tuple$1[0];
					w = _tuple$1[1];
    				}
 b				j = 0;
				/* while (true) { */ case 5:
					/* if (!(j < newlines)) { break; } */ if(!(j < newlines)) { $s = 6; continue; }
 b7					_r = s.getRune(); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					inputc = _r;
 bQ					/* while (true) { */ case 8:
						/* if (!(isSpace(inputc) && !((inputc === 10)))) { break; } */ if(!(isSpace(inputc) && !((inputc === 10)))) { $s = 9; continue; }
 b~						_r$1 = s.getRune(); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						inputc = _r$1;
    					$s = 8; continue;
					case 9:
    					if (!((inputc === 10)) && !((inputc === -1))) {
 b�						s.errorString("newline in format does not match input");
    					}
 b-					j = j + (1) >> 0;
    				$s = 5; continue;
				case 6:
 c				/* */ if (trailingSpace) { $s = 11; continue; }
				/* */ $s = 12; continue;
    				/* if (trailingSpace) { */ case 11:
 c$					_r$2 = s.getRune(); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					inputc$1 = _r$2;
    					if (newlines === 0) {
    						if (!isSpace(inputc$1) && !((inputc$1 === -1))) {
 c�							s.errorString("expected space in input to match format");
    						}
    						if (inputc$1 === 10) {
 d\							s.errorString("newline in input does not match format");
    						}
    					}
 d�					/* while (true) { */ case 14:
						/* if (!(isSpace(inputc$1) && !((inputc$1 === 10)))) { break; } */ if(!(isSpace(inputc$1) && !((inputc$1 === 10)))) { $s = 15; continue; }
 d�						_r$3 = s.getRune(); /* */ $s = 16; case 16: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						inputc$1 = _r$3;
    					$s = 14; continue;
					case 15:
 d�					/* */ if (!((inputc$1 === -1))) { $s = 17; continue; }
					/* */ $s = 18; continue;
    					/* if (!((inputc$1 === -1))) { */ case 17:
 e							_r$4 = s.UnreadRune(); /* */ $s = 19; case 19: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
						_r$4;
    					/* } */ case 18:
    				/* } */ case 12:
 e&				/* continue; */ $s = 1; continue;
    			/* } */ case 4:
    			if (fmtc === 37) {
    				if ((i + w >> 0) === format.length) {
 e�					s.errorString("missing verb: % at end of format string");
    				}
 e�				_tuple$2 = utf8.DecodeRuneInString($substring(format, (i + w >> 0)));
				nextc = _tuple$2[0];
    				if (!((nextc === 37))) {
 fm					$s = -1; return i;
    				}
 f|				i = i + (w) >> 0;
    			}
 f�			_r$5 = s.mustReadRune(); /* */ $s = 20; case 20: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			inputc$2 = _r$5;
 f�			/* */ if (!((fmtc === inputc$2))) { $s = 21; continue; }
			/* */ $s = 22; continue;
    			/* if (!((fmtc === inputc$2))) { */ case 21:
 f�				_r$6 = s.UnreadRune(); /* */ $s = 23; case 23: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_r$6;
    				i = -1;
				$s = -1; return i;
    			/* } */ case 22:
 g			i = i + (w) >> 0;
    		$s = 1; continue;
		case 2:
 g		$s = -1; return i;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ss.ptr.prototype.advance }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.fmtc = fmtc; $f.format = format; $f.i = i; $f.inputc = inputc; $f.inputc$1 = inputc$1; $f.inputc$2 = inputc$2; $f.j = j; $f.newlines = newlines; $f.nextc = nextc; $f.s = s; $f.trailingSpace = trailingSpace; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	ss.prototype.advance = function(format) { return this.$val.advance(format); };
ssadvance~fmt.errorString~fmt.getRune~fmt.isSpacefmt.mustReadRune~fmt.ssunicode/utf8.DecodeRuneInString (*fmt.ss).doScanf �8	ss.ptr.prototype.doScanf = function(format, a) {
		var $24r, _r, _tuple, _tuple$1, a, arg, c, end, err, f, format, i, numProcessed, s, w, widPresent, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; arg = $f.arg; c = $f.c; end = $f.end; err = $f.err; f = $f.f; format = $f.format; i = $f.i; numProcessed = $f.numProcessed; s = $f.s; w = $f.w; widPresent = $f.widPresent; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		err = [err];
		numProcessed = 0;
		err[0] = $ifaceNil;
		s = this;
 g�		$deferred.push([errorHandler, [(err.$ptr || (err.$ptr = new ptrType$24(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, err)))]]);
 h		end = format.length - 1 >> 0;
 hP		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i <= end)) { break; } */ if(!(i <= end)) { $s = 2; continue; }
 hf			_r = s.advance($substring(format, i)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			w = _r;
    			if (w > 0) {
 h�				i = i + (w) >> 0;
 h�				/* continue; */ $s = 1; continue;
    			}
    			if (!((format.charCodeAt(i) === 37))) {
    				if (w < 0) {
 iN					s.errorString("input does not match format");
    				}
 i�				/* break; */ $s = 2; continue;
    			}
 i�			i = i + (1) >> 0;
 j			widPresent = false;
 j			_tuple = parsenum(format, i, end);
			s.ssave.maxWid = _tuple[0];
			widPresent = _tuple[1];
			i = _tuple[2];
    			if (!widPresent) {
 jb				s.ssave.maxWid = 1073741824;
    			}
 j|			_tuple$1 = utf8.DecodeRuneInString($substring(format, i));
			c = _tuple$1[0];
			w = _tuple$1[1];
 j�			i = i + (w) >> 0;
 j�			/* */ if (!((c === 99))) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!((c === 99))) { */ case 4:
 j�				$r = s.SkipSpace(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 5:
 j�			/* */ if (c === 37) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (c === 37) { */ case 7:
 j�				$r = s.scanPercent(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 j�				/* continue; */ $s = 1; continue;
    			/* } */ case 8:
 k+			s.ssave.argLimit = s.ssave.limit;
 kE			f = s.count + s.ssave.maxWid >> 0;
    			if (f < s.ssave.argLimit) {
 kr				s.ssave.argLimit = f;
    			}
    			if (numProcessed >= a.$length) {
 k�				s.errorString("too few operands for format '%" + $substring(format, (i - w >> 0)) + "'");
 l				/* break; */ $s = 2; continue;
    			}
 l			arg = ((numProcessed < 0 || numProcessed >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + numProcessed]);
 l(			$r = s.scanOne(c, arg); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 l<			numProcessed = numProcessed + (1) >> 0;
 lM			s.ssave.argLimit = s.ssave.limit;
    		$s = 1; continue;
		case 2:
    		if (numProcessed < a.$length) {
 l�			s.errorString("too many operands");
    		}
 l�		$24r = [numProcessed, err[0]];
		$s = 11; case 11: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [numProcessed, err[0]]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: ss.ptr.prototype.doScanf }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.arg = arg; $f.c = c; $f.end = end; $f.err = err; $f.f = f; $f.format = format; $f.i = i; $f.numProcessed = numProcessed; $f.s = s; $f.w = w; $f.widPresent = widPresent; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	ss.prototype.doScanf = function(format, a) { return this.$val.doScanf(format, a); };
ssdoScanf~	fmt.advance~fmt.errorHandlerfmt.errorString~fmt.parsenumfmt.ptrType$24fmt.scanOne~fmt.scanPercent~fmt.ssunicode/utf8.DecodeRuneInString �K�{"Base":93364,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/fmt/doc.go","Base":1,"Size":14860,"Lines":[0,55,109,159,160,163,226,297,311,312,313,323,324,336,337,347,382,445,491,548,595,596,606,634,644,656,727,740,752,779,849,895,941,987,1029,1096,1157,1177,1222,1267,1316,1336,1409,1451,1535,1593,1661,1713,1771,1821,1871,1879,1944,1954,1993,2052,2109,2110,2141,2171,2201,2256,2286,2316,2346,2376,2456,2477,2519,2559,2614,2653,2654,2736,2807,2884,2955,3021,3032,3074,3110,3146,3176,3206,3207,3274,3331,3397,3465,3528,3556,3557,3623,3677,3678,3740,3805,3871,3939,3965,3966,4040,4112,4184,4259,4337,4417,4438,4439,4502,4575,4619,4620,4634,4678,4722,4801,4875,4935,5002,5019,5082,5129,5198,5260,5333,5380,5434,5435,5488,5553,5574,5575,5638,5701,5759,5792,5793,5855,5919,5926,5951,5975,5991,5992,6048,6109,6155,6156,6226,6300,6301,6363,6430,6466,6467,6532,6592,6593,6659,6722,6723,6790,6858,6906,6907,6972,7040,7088,7089,7151,7217,7281,7345,7373,7374,7435,7508,7509,7546,7562,7621,7658,7725,7792,7860,7928,7976,7977,8043,8109,8110,8137,8138,8205,8273,8347,8419,8493,8567,8629,8630,8644,8683,8710,8754,8769,8798,8872,8939,9002,9044,9075,9076,9091,9092,9155,9208,9259,9260,9309,9354,9397,9451,9488,9533,9595,9640,9684,9741,9785,9829,9830,9888,9951,9965,9966,10030,10090,10153,10212,10275,10281,10298,10299,10358,10422,10480,10498,10499,10509,10510,10571,10631,10691,10741,10742,10801,10802,10862,10919,10920,10982,11044,11101,11118,11119,11179,11241,11303,11365,11426,11487,11550,11614,11677,11738,11796,11858,11914,11915,11977,12039,12100,12149,12150,12200,12263,12330,12401,12468,12531,12606,12678,12679,12740,12801,12859,12926,12955,12956,13023,13081,13144,13158,13159,13215,13275,13334,13393,13428,13469,13510,13553,13586,13587,13646,13702,13732,13733,13797,13855,13918,13981,14024,14025,14087,14139,14140,14206,14276,14277,14340,14401,14462,14523,14588,14652,14715,14777,14827,14845,14848],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/fmt/errors.go","Base":14862,"Size":1052,"Lines":[0,55,109,159,160,172,173,189,190,268,299,302,371,454,530,603,624,677,696,715,738,758,773,799,821,831,867,870,880,892,894,895,919,931,942,944,945,982,996,998,999,1036,1050],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/fmt/format.go","Base":15915,"Size":13801,"Lines":[0,55,109,159,160,172,173,182,193,209,211,212,220,251,282,284,285,293,310,328,330,331,387,410,428,446,464,482,500,518,536,537,596,663,717,730,743,745,746,796,855,873,886,887,897,898,917,940,941,1008,1077,1094,1096,1097,1126,1151,1153,1154,1188,1201,1217,1219,1220,1266,1302,1343,1352,1355,1370,1390,1412,1446,1470,1505,1525,1528,1585,1607,1620,1642,1645,1676,1707,1733,1756,1759,1782,1784,1785,1858,1888,1922,1939,1948,1951,1987,2002,2020,2044,2061,2071,2090,2107,2131,2134,2136,2137,2216,2252,2286,2309,2318,2321,2365,2380,2398,2422,2445,2455,2474,2497,2521,2524,2526,2527,2560,2595,2603,2625,2635,2658,2661,2663,2664,2744,2781,2802,2803,2870,2935,3002,3013,3047,3063,3130,3172,3196,3225,3229,3232,3233,3316,3331,3332,3416,3479,3485,3501,3530,3566,3572,3588,3594,3609,3612,3673,3688,3694,3720,3729,3739,3742,3747,3768,3776,3851,3867,3873,3888,3897,3900,3924,3929,3943,3948,3962,3963,3982,3998,4014,4032,4034,4035,4087,4175,4213,4228,4237,4240,4241,4262,4325,4403,4439,4508,4575,4599,4640,4669,4673,4676,4677,4742,4799,4840,4851,4871,4887,4957,4984,5005,5023,5048,5068,5078,5082,5118,5133,5170,5203,5207,5210,5211,5294,5370,5450,5465,5536,5576,5591,5601,5617,5624,5642,5678,5690,5694,5704,5720,5727,5753,5764,5768,5777,5792,5799,5827,5838,5842,5851,5866,5873,5901,5912,5916,5926,5969,5972,5977,5997,6031,6037,6052,6055,6056,6090,6104,6120,6130,6154,6161,6177,6184,6200,6210,6232,6240,6257,6262,6273,6303,6310,6333,6340,6356,6360,6363,6381,6387,6402,6408,6423,6426,6427,6442,6448,6463,6483,6489,6504,6525,6531,6546,6549,6550,6626,6696,6715,6731,6747,6765,6767,6768,6849,6897,6917,6931,6952,6959,6973,6990,6995,6999,7002,7012,7014,7015,7106,7148,7168,7182,7210,7217,7231,7248,7253,7265,7295,7331,7336,7348,7352,7355,7365,7367,7368,7394,7425,7450,7466,7468,7469,7547,7579,7598,7608,7610,7611,7692,7750,7768,7783,7846,7864,7867,7936,7975,7993,7996,8080,8101,8117,8132,8208,8224,8239,8244,8289,8312,8334,8400,8414,8418,8489,8509,8534,8538,8547,8550,8582,8630,8662,8665,8721,8736,8750,8777,8814,8817,8829,8860,8884,8922,8948,8964,9010,9049,9054,9058,9074,9128,9139,9189,9193,9242,9291,9294,9308,9341,9388,9420,9423,9425,9426,9492,9532,9558,9560,9561,9631,9678,9703,9705,9706,9779,9850,9923,9954,9979,10020,10049,10058,10061,10082,10095,10139,10149,10186,10189,10191,10192,10243,10309,10340,10354,10377,10398,10401,10422,10466,10482,10484,10485,10564,10630,10662,10676,10699,10720,10723,10744,10757,10805,10815,10856,10859,10861,10862,10942,11001,11068,11140,11160,11176,11179,11244,11313,11350,11366,11376,11391,11394,11464,11512,11554,11569,11572,11617,11687,11724,11744,11761,11807,11851,11868,11872,11885,11904,11913,11916,11990,12052,12081,12095,12111,12138,12155,12217,12238,12253,12258,12262,12263,12310,12367,12389,12411,12412,12439,12466,12515,12549,12568,12581,12608,12626,12662,12680,12698,12734,12771,12790,12801,12807,12823,12835,12858,12886,12892,12956,12981,12995,13001,13006,13010,13034,13090,13129,13142,13147,13173,13177,13196,13222,13234,13238,13267,13270,13335,13365,13447,13527,13577,13604,13640,13664,13674,13678,13691,13700,13703,13783,13799],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/fmt/print.go","Base":29717,"Size":30875,"Lines":[0,55,109,159,160,172,173,182,202,208,214,225,233,249,251,252,296,363,371,397,426,455,482,510,536,569,603,634,667,703,738,772,819,821,822,889,961,1022,1045,1119,1155,1232,1260,1345,1378,1379,1443,1461,1463,1464,1531,1598,1666,1693,1721,1723,1724,1790,1845,1911,1979,1997,2023,2040,2042,2043,2113,2160,2228,2248,2276,2295,2297,2298,2370,2389,2390,2425,2448,2450,2451,2492,2515,2517,2518,2555,2575,2577,2578,2616,2640,2669,2678,2681,2682,2692,2705,2735,2754,2757,2802,2817,2819,2820,2912,2929,2941,2942,2993,3010,3011,3064,3085,3086,3153,3162,3163,3237,3253,3332,3349,3440,3456,3546,3561,3627,3642,3692,3710,3712,3713,3737,3782,3784,3785,3848,3872,3897,3918,3938,3958,3978,3988,3990,3991,4069,4091,4165,4236,4316,4347,4351,4390,4416,4425,4428,4429,4448,4461,4488,4508,4523,4525,4526,4605,4606,4692,4693,4725,4737,4748,4769,4780,4815,4826,4863,4874,4895,4906,4926,4929,4943,4945,4946,5017,5051,5103,5119,5139,5141,5142,5202,5246,5304,5326,5346,5348,5349,5404,5405,5473,5548,5628,5647,5670,5695,5705,5713,5715,5716,5797,5872,5938,5979,5981,5982,6067,6122,6141,6164,6184,6194,6204,6206,6207,6253,6254,6332,6395,6470,6534,6553,6567,6592,6602,6610,6612,6613,6704,6767,6842,6892,6924,6926,6927,7022,7085,7124,7143,7157,7177,7187,7197,7199,7200,7260,7317,7344,7345,7425,7496,7571,7637,7656,7672,7697,7707,7715,7717,7718,7811,7882,7957,8009,8043,8045,8046,8143,8214,8255,8274,8290,8310,8320,8330,8332,8333,8386,8448,8509,8563,8582,8636,8655,8658,8670,8672,8673,8733,8793,8821,8842,8870,8872,8873,8965,9039,9058,9081,9084,9160,9181,9249,9253,9287,9302,9305,9313,9315,9316,9360,9379,9415,9424,9427,9449,9487,9509,9511,9512,9546,9565,9603,9626,9648,9658,9678,9730,9753,9778,9803,9848,9871,9903,9913,9949,9952,9974,9994,9996,9997,10039,10054,10070,10092,10102,10120,10123,10125,10126,10196,10257,10306,10328,10353,10402,10423,10425,10426,10478,10540,10555,10566,10599,10621,10632,10684,10688,10699,10750,10761,10811,10827,10877,10888,10939,10950,11001,11012,11028,11039,11056,11067,11089,11099,11117,11120,11122,11123,11188,11247,11303,11318,11329,11364,11395,11431,11452,11487,11498,11532,11542,11560,11563,11565,11566,11612,11659,11695,11756,11813,11878,11893,11949,11973,11996,12032,12071,12091,12127,12153,12176,12186,12204,12207,12209,12210,12256,12271,12282,12302,12319,12330,12347,12351,12362,12378,12389,12415,12426,12452,12463,12479,12489,12507,12510,12512,12513,12577,12592,12608,12628,12661,12678,12716,12727,12732,12756,12781,12796,12837,12843,12874,12879,12903,12914,12938,12963,12978,13004,13010,13071,13076,13100,13104,13115,13132,13143,13169,13180,13206,13217,13241,13251,13295,13298,13300,13301,13359,13374,13397,13495,13517,13527,13545,13554,13557,13558,13573,13584,13604,13628,13672,13699,13714,13747,13759,13790,13795,13819,13830,13845,13881,13893,13932,13937,13941,13952,13989,14020,14062,14072,14090,14093,14095,14096,14165,14200,14273,14342,14409,14480,14517,14527,14531,14604,14641,14660,14723,14737,14741,14742,14771,14818,14839,14840,14879,14903,14936,14964,14997,15018,15041,15063,15086,15087,15115,15118,15120,15121,15176,15193,15202,15205,15223,15292,15322,15349,15398,15420,15442,15461,15476,15480,15501,15561,15574,15577,15578,15601,15646,15663,15707,15735,15744,15747,15748,15839,15858,15904,15922,15969,16015,16050,16060,16064,16074,16137,16199,16256,16272,16304,16338,16388,16435,16480,16510,16525,16544,16589,16622,16633,16634,16652,16671,16717,16751,16762,16767,16771,16774,16788,16790,16791,16843,16856,16883,16884,16901,16917,16934,16969,16980,16999,17003,17012,17015,17016,17055,17140,17155,17166,17209,17218,17229,17271,17280,17283,17284,17331,17357,17369,17390,17405,17440,17455,17481,17498,17538,17556,17585,17596,17636,17648,17688,17701,17741,17754,17794,17807,17847,17859,17901,17914,17956,17970,18012,18026,18068,18082,18116,18131,18173,18187,18210,18224,18256,18277,18329,18384,18423,18448,18478,18489,18494,18498,18525,18535,18590,18620,18672,18731,18776,18780,18783,18785,18786,18882,18982,19051,19139,19198,19226,19255,19265,19269,19272,19285,19302,19303,19338,19361,19379,19418,19429,19446,19459,19497,19509,19529,19534,19538,19558,19586,19664,19710,19810,19851,19874,19908,19931,19965,19990,20028,20054,20093,20115,20147,20166,20186,20226,20244,20282,20293,20298,20322,20333,20365,20369,20397,20432,20446,20468,20509,20522,20548,20554,20559,20595,20619,20667,20671,20691,20715,20726,20750,20754,20776,20796,20836,20840,20863,20901,20915,20937,20978,20991,21017,21023,21028,21064,21116,21145,21171,21177,21182,21229,21233,21256,21281,21301,21325,21346,21387,21425,21437,21475,21480,21491,21529,21533,21569,21585,21612,21687,21704,21745,21766,21801,21824,21852,21893,21906,21979,22057,22105,22140,22168,22209,22216,22222,22262,22273,22278,22282,22302,22342,22389,22427,22438,22443,22467,22501,22516,22557,22563,22607,22612,22636,22647,22671,22705,22720,22746,22752,22796,22801,22825,22829,22848,22906,22942,22980,23016,23083,23108,23143,23154,23159,23163,23177,23234,23258,23268,23287,23290,23292,23293,23403,23487,23507,23529,23581,23595,23614,23668,23748,23765,23793,23811,23829,23835,23937,23955,24001,24019,24037,24043,24055,24080,24085,24089,24114,24135,24146,24163,24167,24170,24178,24180,24181,24250,24323,24383,24452,24522,24592,24659,24700,24722,24743,24746,24747,24773,24809,24833,24878,24903,24930,24935,25015,25019,25022,25042,25044,25045,25140,25228,25313,25419,25462,25488,25491,25511,25557,25599,25629,25632,25654,25682,25684,25685,25721,25759,25782,25817,25819,25820,25857,25895,25918,25952,25954,25955,26011,26031,26102,26173,26194,26206,26230,26252,26265,26301,26308,26312,26329,26367,26371,26387,26423,26432,26436,26437,26459,26465,26466,26489,26510,26525,26548,26566,26580,26593,26616,26629,26699,26712,26734,26747,26770,26832,26845,26868,26880,26946,27001,27050,27069,27088,27121,27147,27176,27207,27232,27239,27275,27289,27298,27323,27329,27405,27428,27433,27437,27438,27482,27547,27548,27571,27606,27613,27676,27677,27703,27741,27746,27747,27808,27841,27863,27890,27913,27975,27980,28002,28013,28074,28125,28150,28155,28159,28160,28187,28224,28231,28263,28288,28293,28359,28395,28403,28469,28522,28546,28566,28597,28603,28631,28669,28675,28698,28710,28774,28802,28822,28852,28858,28863,28867,28868,28887,28953,28957,28958,28974,29009,29018,29022,29023,29058,29087,29139,29143,29155,29156,29167,29253,29277,29299,29320,29401,29423,29443,29459,29489,29512,29538,29566,29588,29603,29614,29645,29657,29661,29664,29665,29734,29810,29856,29894,29915,29948,29983,29997,30037,30042,30061,30099,30111,30163,30188,30213,30218,30222,30245,30248,30250,30251,30291,30312,30342,30415,30466,30512,30536,30540,30563,30587,30590,30592,30593,30664,30706,30748,30778,30796,30820,30824,30847,30850,30873],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/fmt/scan.go","Base":60593,"Size":32770,"Lines":[0,55,109,159,160,172,173,182,192,198,206,212,223,234,242,258,260,261,330,394,441,468,538,605,674,699,741,814,834,909,978,1004,1017,1091,1155,1227,1302,1369,1438,1515,1570,1638,1715,1752,1780,1855,1921,1983,2020,2022,2023,2098,2174,2251,2317,2342,2382,2384,2385,2449,2517,2583,2653,2702,2732,2734,2735,2801,2857,2908,2940,2942,2943,3008,3077,3145,3215,3275,3343,3401,3466,3505,3507,3508,3533,3534,3593,3610,3625,3638,3653,3656,3664,3666,3667,3738,3803,3872,3926,3988,4031,4033,4034,4102,4158,4222,4267,4269,4270,4342,4410,4462,4522,4600,4652,4654,4655,4723,4788,4857,4911,4974,5014,5036,5049,5057,5059,5060,5128,5184,5249,5289,5311,5324,5332,5334,5335,5404,5472,5524,5584,5663,5704,5735,5748,5756,5758,5759,5828,5904,5928,5939,5941,5942,5957,5958,6009,6026,6071,6114,6162,6204,6211,6213,6214,6261,6303,6323,6376,6427,6484,6557,6599,6637,6639,6640,6698,6759,6818,6869,6946,6948,6949,7005,7044,7059,7068,7071,7072,7104,7121,7133,7163,7181,7185,7212,7229,7232,7240,7242,7243,7285,7311,7329,7332,7355,7357,7358,7422,7479,7513,7540,7557,7578,7592,7596,7611,7614,7622,7624,7625,7689,7756,7773,7812,7829,7844,7875,7878,7886,7888,7889,7923,7942,7959,7970,7982,7984,7985,8017,8040,8042,8043,8082,8117,8119,8120,8200,8216,8248,8284,8301,8313,8326,8331,8335,8340,8355,8370,8373,8392,8421,8429,8431,8432,8486,8528,8553,8572,8591,8610,8629,8648,8667,8686,8705,8724,8743,8745,8746,8774,8791,8806,8809,8826,8855,8874,8890,8894,8914,8929,8933,8936,8950,8952,8953,9013,9042,9062,9064,9065,9136,9209,9250,9273,9293,9350,9431,9478,9555,9557,9558,9621,9684,9736,9756,9775,9812,9826,9835,9838,9886,9899,9915,9918,9944,9946,9947,10010,10033,10096,10118,10136,10163,10189,10198,10201,10231,10248,10257,10260,10327,10349,10378,10442,10461,10470,10473,10484,10529,10560,10578,10600,10614,10624,10629,10639,10643,10646,10685,10746,10791,10815,10818,10881,10899,10907,10909,10910,10950,10972,11050,11053,11125,11151,11163,11165,11166,11190,11235,11237,11238,11302,11379,11403,11442,11454,11464,11508,11511,11536,11557,11574,11593,11615,11635,11655,11668,11676,11678,11679,11756,11787,11847,11867,11883,11892,11895,11947,11971,11980,11983,12002,12014,12029,12031,12032,12105,12183,12203,12230,12237,12256,12272,12282,12286,12319,12331,12335,12352,12372,12385,12390,12429,12439,12443,12462,12480,12489,12493,12496,12498,12499,12567,12633,12668,12731,12747,12763,12766,12804,12811,12830,12846,12855,12859,12872,12890,12899,12903,12924,12927,12941,12943,12944,13014,13074,13075,13114,13137,13151,13163,13167,13170,13181,13183,13184,13272,13338,13390,13408,13423,13438,13441,13469,13483,13505,13509,13523,13526,13551,13568,13571,13585,13587,13588,13674,13710,13728,13743,13760,13763,13793,13795,13796,13820,13860,13893,13909,13912,13928,13930,13931,14030,14085,14123,14151,14153,14154,14247,14306,14335,14352,14367,14371,14374,14436,14450,14452,14453,14529,14569,14584,14596,14635,14650,14653,14729,14751,14762,14777,14788,14802,14818,14880,14902,14906,14920,14936,15017,15039,15043,15058,15061,15075,15077,15078,15100,15108,15134,15166,15200,15246,15272,15297,15325,15327,15328,15410,15470,15522,15533,15557,15572,15583,15594,15618,15629,15640,15663,15684,15696,15725,15728,15736,15738,15739,15819,15884,15902,15915,15940,15977,15981,15984,16008,16011,16033,16035,16036,16090,16133,16145,16163,16183,16224,16244,16304,16307,16324,16326,16327,16399,16468,16508,16582,16601,16640,16643,16658,16695,16705,16725,16749,16786,16806,16830,16866,16886,16910,16952,16962,16998,17001,17003,17004,17072,17135,17188,17206,17235,17238,17253,17265,17298,17319,17337,17393,17433,17437,17447,17523,17542,17591,17595,17598,17639,17682,17699,17714,17717,17737,17771,17784,17836,17839,17849,17851,17852,17918,17993,18048,18066,18103,18106,18121,18133,18166,18187,18205,18261,18301,18305,18330,18378,18381,18422,18466,18483,18498,18501,18521,18555,18568,18629,18632,18642,18644,18645,18728,18819,18875,18910,18929,18938,18995,19018,19021,19039,19055,19064,19121,19144,19147,19178,19195,19233,19268,19281,19284,19296,19320,19323,19342,19365,19380,19405,19409,19412,19426,19446,19465,19482,19495,19533,19537,19540,19562,19564,19565,19656,19747,19789,19840,19881,19906,19929,19948,19974,19996,20020,20023,20049,20076,20099,20120,20144,20147,20178,20202,20205,20235,20237,20238,20265,20296,20330,20345,20349,20352,20366,20368,20369,20424,20479,20527,20573,20624,20677,20724,20759,20802,20820,20854,20899,20915,20920,20936,20940,20976,20994,21028,21073,21089,21094,21110,21114,21140,21143,21181,21198,21213,21216,21226,21228,21229,21294,21366,21439,21509,21565,21610,21621,21624,21639,21651,21686,21722,21758,21786,21788,21789,21867,21921,21974,22015,22027,22030,22045,22057,22072,22083,22108,22124,22146,22156,22235,22238,22246,22248,22249,22349,22386,22398,22420,22436,22447,22504,22512,22537,22556,22566,22571,22593,22597,22620,22631,22720,22743,22751,22776,22798,22816,22891,22963,23040,23078,23102,23112,23117,23121,23169,23187,23203,23207,23223,23233,23275,23278,23289,23291,23292,23348,23384,23401,23417,23473,23500,23536,23568,23604,23636,23639,23657,23659,23660,23737,23818,23887,23930,23952,23971,23980,23983,24014,24024,24041,24050,24053,24095,24105,24142,24151,24154,24193,24195,24196,24261,24295,24307,24314,24337,24348,24357,24361,24382,24385,24407,24452,24464,24467,24489,24491,24492,24500,24525,24526,24545,24546,24584,24625,24627,24628,24678,24707,24722,24734,24755,24792,24795,24797,24798,24883,24934,24953,24968,25024,25057,25081,25099,25121,25151,25156,25172,25176,25185,25188,25189,25215,25228,25252,25270,25312,25331,25363,25375,25412,25425,25457,25471,25505,25519,25553,25567,25594,25607,25646,25660,25694,25709,25745,25760,25796,25811,25839,25855,25901,25984,26074,26090,26135,26152,26166,26218,26222,26238,26283,26300,26314,26357,26361,26376,26405,26420,26485,26551,26588,26598,26626,26639,26672,26735,26745,26749,26786,26807,26838,26917,26963,27064,27112,27135,27173,27195,27244,27263,27306,27367,27372,27404,27457,27492,27531,27536,27577,27594,27608,27671,27717,27771,27782,27842,27846,27849,27851,27852,27907,27940,27971,28027,28045,28117,28132,28143,28155,28159,28162,28164,28165,28232,28301,28327,28352,28374,28391,28394,28452,28468,28476,28496,28526,28536,28541,28561,28599,28609,28614,28618,28621,28629,28631,28632,28701,28771,28837,28903,28975,29046,29114,29182,29228,29251,29300,29301,29324,29398,29496,29573,29682,29765,29786,29803,29829,29871,29893,29909,29936,29949,29975,29981,29992,30042,30047,30082,30108,30152,30178,30184,30225,30286,30292,30297,30319,30345,30368,30438,30490,30534,30597,30604,30629,30691,30698,30704,30748,30774,30780,30803,30823,30829,30834,30846,30850,30851,30863,30882,30920,30947,31008,31013,31047,31139,31160,31171,31176,31206,31210,31211,31226,31255,31277,31295,31308,31312,31321,31324,31332,31334,31335,31401,31460,31545,31571,31595,31642,31667,31696,31709,31719,31731,31735,31822,31846,31883,31897,31946,31951,32015,32024,32028,32051,32052,32080,32102,32155,32174,32196,32200,32201,32247,32256,32257,32273,32290,32294,32310,32329,32372,32376,32399,32446,32464,32468,32469,32518,32590,32599,32603,32628,32629,32649,32666,32689,32692,32720,32757,32760,32768],"Infos":null}]}
 