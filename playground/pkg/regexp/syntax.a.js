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
GoLinkname�� Implementation�� 	Reference��   �"'��regexp/syntaxsyntaxsortstrconvstringsunicodeunicode/utf8�
�i ��Flags reRegexpProgEmptyOpr1r2	ErrorCoderegexp/syntax: internal errorinvalid character classinvalid character class rangeinvalid escape sequenceinvalid named capture"invalid or unsupported Perl syntax"invalid nested repetition operatorinvalid repeat countinvalid UTF-8missing closing ]missing closing )'missing argument to repetition operator'trailing backslash at end of expressionunexpected )CodeExprErroreStringOpInstOpOutArgRuneopiInst	MatchRunerMatchRunePosMatchEmptyWidthbeforeaftersflagsStartNumCappskipNoppcPrefixprefixcomplete	StartCondSubSub0Rune0MinMaxCapNameEqualxyMaxCapCapNamescapNamesnamesSimplifysyntaxClassNLCompileDotNLEmptyBeginLineEmptyBeginTextEmptyEndLineEmptyEndTextEmptyNoWordBoundaryEmptyOpContextEmptyWordBoundaryErrInternalErrorErrInvalidCharClassErrInvalidCharRangeErrInvalidEscapeErrInvalidNamedCaptureErrInvalidPerlOpErrInvalidRepeatOpErrInvalidRepeatSizeErrInvalidUTF8ErrMissingBracketErrMissingParenErrMissingRepeatArgumentErrTrailingBackslashErrUnexpectedParenFoldCaseInstAltInstAltMatchInstCaptureInstEmptyWidthInstFail	InstMatchInstNopInstRune	InstRune1InstRuneAnyInstRuneAnyNotNL
IsWordCharLiteralMatchNL	NonGreedyOneLineOpAlternate	OpAnyCharOpAnyCharNotNLOpBeginLineOpBeginText	OpCaptureOpCharClassOpConcatOpEmptyMatch	OpEndLine	OpEndText	OpLiteral	OpNoMatchOpNoWordBoundaryOpPlusOpQuestOpRepeatOpStarOpWordBoundaryPOSIXParsePerlPerlXSimpleUnicodeGroups	WasDollar  C   
' ,F  * /  C   C CC CC CC CC C T  F   ! C C C $C p.C pLC pdC p�C p�C p�C p�C p�C p�C p�C p�C p�C p�C p� �p  �  ��T � � ��  T  � �p  T  C   � ��  �	  �	  ��  ������T � � ��  � � �� �    � �� �   � �� � �    � ��  C � C �C �C �C �C �C �T  � ��  C �C �C �	C �
F  �   C  C  C   C   �T  � ��  C �C �C �C �C �	C �C �C �C �C �C �
C �C �C �C �C �C �C �C �C   'F  � �  �  C  �C  @� ��  �  � ,,�,,T � � ��   � �� �	 �  � ��  � �  � ��  C'�'�
 ��      ��  ��  ��  ��  �  �  �  � ''''''''T � � �� ��    � �   � �   � �  � � � ��   � �  �C  � C  �C  � � L����&�*�.�2�6:�>�L�S�W�[�_�d�i�n�s�x�}����������$� ������������������	����	��	��	��	��	��	��	��	��	����	��	��	��
��
��
��
��
��
��
��
��
��
��
��������������������
��������� sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	patchList�	patchList = $pkg.patchList = $newType(0, $kindStruct, "syntax.patchList", true, "regexp/syntax", false, function(head_, tail_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.head = 0;
			this.tail = 0;
			return;
		}
		this.head = head_;
		this.tail = tail_;
	});
��	patchList.methods = [{prop: "patch", name: "patch", pkg: "regexp/syntax", typ: $funcType([ptrType, $Uint32], [], false)}, {prop: "append", name: "append", pkg: "regexp/syntax", typ: $funcType([ptrType, patchList], [patchList], false)}];
��	patchList.init("regexp/syntax", [{prop: "head", name: "head", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "tail", name: "tail", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
	patchListregexp/syntax.patchListregexp/syntax.ptrType  frag�Q	frag = $pkg.frag = $newType(0, $kindStruct, "syntax.frag", true, "regexp/syntax", false, function(i_, out_, nullable_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.i = 0;
			this.out = new patchList.ptr(0, 0);
			this.nullable = false;
			return;
		}
		this.i = i_;
		this.out = out_;
		this.nullable = nullable_;
	});
�$	frag.init("regexp/syntax", [{prop: "i", name: "i", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: patchList, tag: ""}, {prop: "nullable", name: "nullable", embedded: false, exported: false, typ: $Bool, tag: ""}]);
fragregexp/syntax.fragregexp/syntax.patchList  compiler��	compiler = $pkg.compiler = $newType(0, $kindStruct, "syntax.compiler", true, "regexp/syntax", false, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = ptrType.nil;
			return;
		}
		this.p = p_;
	});
�D	ptrType$5.methods = [{prop: "init", name: "init", pkg: "regexp/syntax", typ: $funcType([], [], false)}, {prop: "compile", name: "compile", pkg: "regexp/syntax", typ: $funcType([ptrType$1], [frag], false)}, {prop: "inst", name: "inst", pkg: "regexp/syntax", typ: $funcType([InstOp], [frag], false)}, {prop: "nop", name: "nop", pkg: "regexp/syntax", typ: $funcType([], [frag], false)}, {prop: "fail", name: "fail", pkg: "regexp/syntax", typ: $funcType([], [frag], false)}, {prop: "cap", name: "cap", pkg: "regexp/syntax", typ: $funcType([$Uint32], [frag], false)}, {prop: "cat", name: "cat", pkg: "regexp/syntax", typ: $funcType([frag, frag], [frag], false)}, {prop: "alt", name: "alt", pkg: "regexp/syntax", typ: $funcType([frag, frag], [frag], false)}, {prop: "quest", name: "quest", pkg: "regexp/syntax", typ: $funcType([frag, $Bool], [frag], false)}, {prop: "loop", name: "loop", pkg: "regexp/syntax", typ: $funcType([frag, $Bool], [frag], false)}, {prop: "star", name: "star", pkg: "regexp/syntax", typ: $funcType([frag, $Bool], [frag], false)}, {prop: "plus", name: "plus", pkg: "regexp/syntax", typ: $funcType([frag, $Bool], [frag], false)}, {prop: "empty", name: "empty", pkg: "regexp/syntax", typ: $funcType([EmptyOp], [frag], false)}, {prop: "rune", name: "rune", pkg: "regexp/syntax", typ: $funcType([sliceType, Flags], [frag], false)}];
t	compiler.init("regexp/syntax", [{prop: "p", name: "p", embedded: false, exported: false, typ: ptrType, tag: ""}]);
compiler	regexp/syntax.EmptyOpregexp/syntax.Flagsregexp/syntax.InstOpregexp/syntax.compilerregexp/syntax.fragregexp/syntax.ptrTyperegexp/syntax.ptrType$1regexp/syntax.ptrType$5regexp/syntax.sliceType  Error�	Error = $pkg.Error = $newType(0, $kindStruct, "syntax.Error", true, "regexp/syntax", true, function(Code_, Expr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Code = "";
			this.Expr = "";
			return;
		}
		this.Code = Code_;
		this.Expr = Expr_;
	});
f	ptrType$6.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	Error.init("", [{prop: "Code", name: "Code", embedded: false, exported: true, typ: ErrorCode, tag: ""}, {prop: "Expr", name: "Expr", embedded: false, exported: true, typ: $String, tag: ""}]);
Errorregexp/syntax.Errorregexp/syntax.ErrorCoderegexp/syntax.ptrType$6  	ErrorCodeo	ErrorCode = $pkg.ErrorCode = $newType(8, $kindString, "syntax.ErrorCode", true, "regexp/syntax", true, null);
h	ErrorCode.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	ErrorCoderegexp/syntax.ErrorCode  Flagsc	Flags = $pkg.Flags = $newType(2, $kindUint16, "syntax.Flags", true, "regexp/syntax", true, null);
Flagsregexp/syntax.Flags  parser�*	parser = $pkg.parser = $newType(0, $kindStruct, "syntax.parser", true, "regexp/syntax", false, function(flags_, stack_, free_, numCap_, wholeRegexp_, tmpClass_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.flags = 0;
			this.stack = sliceType$5.nil;
			this.free = ptrType$1.nil;
			this.numCap = 0;
			this.wholeRegexp = "";
			this.tmpClass = sliceType.nil;
			return;
		}
		this.flags = flags_;
		this.stack = stack_;
		this.free = free_;
		this.numCap = numCap_;
		this.wholeRegexp = wholeRegexp_;
		this.tmpClass = tmpClass_;
	});
�3	ptrType$7.methods = [{prop: "newRegexp", name: "newRegexp", pkg: "regexp/syntax", typ: $funcType([Op], [ptrType$1], false)}, {prop: "reuse", name: "reuse", pkg: "regexp/syntax", typ: $funcType([ptrType$1], [], false)}, {prop: "push", name: "push", pkg: "regexp/syntax", typ: $funcType([ptrType$1], [ptrType$1], false)}, {prop: "maybeConcat", name: "maybeConcat", pkg: "regexp/syntax", typ: $funcType([$Int32, Flags], [$Bool], false)}, {prop: "literal", name: "literal", pkg: "regexp/syntax", typ: $funcType([$Int32], [], false)}, {prop: "op", name: "op", pkg: "regexp/syntax", typ: $funcType([Op], [ptrType$1], false)}, {prop: "repeat", name: "repeat", pkg: "regexp/syntax", typ: $funcType([Op, $Int, $Int, $String, $String, $String], [$String, $error], false)}, {prop: "concat", name: "concat", pkg: "regexp/syntax", typ: $funcType([], [ptrType$1], false)}, {prop: "alternate", name: "alternate", pkg: "regexp/syntax", typ: $funcType([], [ptrType$1], false)}, {prop: "collapse", name: "collapse", pkg: "regexp/syntax", typ: $funcType([sliceType$5, Op], [ptrType$1], false)}, {prop: "factor", name: "factor", pkg: "regexp/syntax", typ: $funcType([sliceType$5], [sliceType$5], false)}, {prop: "leadingString", name: "leadingString", pkg: "regexp/syntax", typ: $funcType([ptrType$1], [sliceType, Flags], false)}, {prop: "removeLeadingString", name: "removeLeadingString", pkg: "regexp/syntax", typ: $funcType([ptrType$1, $Int], [ptrType$1], false)}, {prop: "leadingRegexp", name: "leadingRegexp", pkg: "regexp/syntax", typ: $funcType([ptrType$1], [ptrType$1], false)}, {prop: "removeLeadingRegexp", name: "removeLeadingRegexp", pkg: "regexp/syntax", typ: $funcType([ptrType$1, $Bool], [ptrType$1], false)}, {prop: "parseRepeat", name: "parseRepeat", pkg: "regexp/syntax", typ: $funcType([$String], [$Int, $Int, $String, $Bool], false)}, {prop: "parsePerlFlags", name: "parsePerlFlags", pkg: "regexp/syntax", typ: $funcType([$String], [$String, $error], false)}, {prop: "parseInt", name: "parseInt", pkg: "regexp/syntax", typ: $funcType([$String], [$Int, $String, $Bool], false)}, {prop: "parseVerticalBar", name: "parseVerticalBar", pkg: "regexp/syntax", typ: $funcType([], [$error], false)}, {prop: "swapVerticalBar", name: "swapVerticalBar", pkg: "regexp/syntax", typ: $funcType([], [$Bool], false)}, {prop: "parseRightParen", name: "parseRightParen", pkg: "regexp/syntax", typ: $funcType([], [$error], false)}, {prop: "parseEscape", name: "parseEscape", pkg: "regexp/syntax", typ: $funcType([$String], [$Int32, $String, $error], false)}, {prop: "parseClassChar", name: "parseClassChar", pkg: "regexp/syntax", typ: $funcType([$String, $String], [$Int32, $String, $error], false)}, {prop: "parsePerlClassEscape", name: "parsePerlClassEscape", pkg: "regexp/syntax", typ: $funcType([$String, sliceType], [sliceType, $String], false)}, {prop: "parseNamedClass", name: "parseNamedClass", pkg: "regexp/syntax", typ: $funcType([$String, sliceType], [sliceType, $String, $error], false)}, {prop: "appendGroup", name: "appendGroup", pkg: "regexp/syntax", typ: $funcType([sliceType, charGroup], [sliceType], false)}, {prop: "parseUnicodeClass", name: "parseUnicodeClass", pkg: "regexp/syntax", typ: $funcType([$String, sliceType], [sliceType, $String, $error], false)}, {prop: "parseClass", name: "parseClass", pkg: "regexp/syntax", typ: $funcType([$String], [$String, $error], false)}];
�L	parser.init("regexp/syntax", [{prop: "flags", name: "flags", embedded: false, exported: false, typ: Flags, tag: ""}, {prop: "stack", name: "stack", embedded: false, exported: false, typ: sliceType$5, tag: ""}, {prop: "free", name: "free", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "numCap", name: "numCap", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "wholeRegexp", name: "wholeRegexp", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "tmpClass", name: "tmpClass", embedded: false, exported: false, typ: sliceType, tag: ""}]);
parserregexp/syntax.Flagsregexp/syntax.Opregexp/syntax.charGroupregexp/syntax.parserregexp/syntax.ptrType$1regexp/syntax.ptrType$7regexp/syntax.sliceTyperegexp/syntax.sliceType$5  	charGroup�0	charGroup = $pkg.charGroup = $newType(0, $kindStruct, "syntax.charGroup", true, "regexp/syntax", false, function(sign_, class$1_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.sign = 0;
			this.class$1 = sliceType.nil;
			return;
		}
		this.sign = sign_;
		this.class$1 = class$1_;
	});
��	charGroup.init("regexp/syntax", [{prop: "sign", name: "sign", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "class$1", name: "class", embedded: false, exported: false, typ: sliceType, tag: ""}]);
	charGroupregexp/syntax.charGroupregexp/syntax.sliceType  ranges��	ranges = $pkg.ranges = $newType(0, $kindStruct, "syntax.ranges", true, "regexp/syntax", false, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = ptrType$2.nil;
			return;
		}
		this.p = p_;
	});
�	ranges.methods = [{prop: "Less", name: "Less", pkg: "", typ: $funcType([$Int, $Int], [$Bool], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Swap", name: "Swap", pkg: "", typ: $funcType([$Int, $Int], [], false)}];
t	ranges.init("regexp/syntax", [{prop: "p", name: "p", embedded: false, exported: false, typ: ptrType$2, tag: ""}]);
rangesregexp/syntax.ptrType$2regexp/syntax.ranges  Prog�P	Prog = $pkg.Prog = $newType(0, $kindStruct, "syntax.Prog", true, "regexp/syntax", true, function(Inst_, Start_, NumCap_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Inst = sliceType$4.nil;
			this.Start = 0;
			this.NumCap = 0;
			return;
		}
		this.Inst = Inst_;
		this.Start = Start_;
		this.NumCap = NumCap_;
	});
�~	ptrType.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "skipNop", name: "skipNop", pkg: "regexp/syntax", typ: $funcType([$Uint32], [ptrType$8], false)}, {prop: "Prefix", name: "Prefix", pkg: "", typ: $funcType([], [$String, $Bool], false)}, {prop: "StartCond", name: "StartCond", pkg: "", typ: $funcType([], [EmptyOp], false)}];
�	Prog.init("", [{prop: "Inst", name: "Inst", embedded: false, exported: true, typ: sliceType$4, tag: ""}, {prop: "Start", name: "Start", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "NumCap", name: "NumCap", embedded: false, exported: true, typ: $Int, tag: ""}]);
Progregexp/syntax.EmptyOpregexp/syntax.Instregexp/syntax.Progregexp/syntax.ptrTyperegexp/syntax.ptrType$8regexp/syntax.sliceType$4  InstOpe	InstOp = $pkg.InstOp = $newType(1, $kindUint8, "syntax.InstOp", true, "regexp/syntax", true, null);
e	InstOp.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
InstOpregexp/syntax.InstOp  EmptyOph	EmptyOp = $pkg.EmptyOp = $newType(1, $kindUint8, "syntax.EmptyOp", true, "regexp/syntax", true, null);
EmptyOpregexp/syntax.EmptyOp  Inst�`	Inst = $pkg.Inst = $newType(0, $kindStruct, "syntax.Inst", true, "regexp/syntax", true, function(Op_, Out_, Arg_, Rune_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Op = 0;
			this.Out = 0;
			this.Arg = 0;
			this.Rune = sliceType.nil;
			return;
		}
		this.Op = Op_;
		this.Out = Out_;
		this.Arg = Arg_;
		this.Rune = Rune_;
	});
��	ptrType$8.methods = [{prop: "op", name: "op", pkg: "regexp/syntax", typ: $funcType([], [InstOp], false)}, {prop: "MatchRune", name: "MatchRune", pkg: "", typ: $funcType([$Int32], [$Bool], false)}, {prop: "MatchRunePos", name: "MatchRunePos", pkg: "", typ: $funcType([$Int32], [$Int], false)}, {prop: "MatchEmptyWidth", name: "MatchEmptyWidth", pkg: "", typ: $funcType([$Int32, $Int32], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
�c	Inst.init("", [{prop: "Op", name: "Op", embedded: false, exported: true, typ: InstOp, tag: ""}, {prop: "Out", name: "Out", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Arg", name: "Arg", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Rune", name: "Rune", embedded: false, exported: true, typ: sliceType, tag: ""}]);
Instregexp/syntax.Instregexp/syntax.InstOpregexp/syntax.ptrType$8regexp/syntax.sliceType  Regexp��	Regexp = $pkg.Regexp = $newType(0, $kindStruct, "syntax.Regexp", true, "regexp/syntax", true, function(Op_, Flags_, Sub_, Sub0_, Rune_, Rune0_, Min_, Max_, Cap_, Name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Op = 0;
			this.Flags = 0;
			this.Sub = sliceType$5.nil;
			this.Sub0 = arrayType.zero();
			this.Rune = sliceType.nil;
			this.Rune0 = arrayType$1.zero();
			this.Min = 0;
			this.Max = 0;
			this.Cap = 0;
			this.Name = "";
			return;
		}
		this.Op = Op_;
		this.Flags = Flags_;
		this.Sub = Sub_;
		this.Sub0 = Sub0_;
		this.Rune = Rune_;
		this.Rune0 = Rune0_;
		this.Min = Min_;
		this.Max = Max_;
		this.Cap = Cap_;
		this.Name = Name_;
	});
�"	ptrType$1.methods = [{prop: "Equal", name: "Equal", pkg: "", typ: $funcType([ptrType$1], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "MaxCap", name: "MaxCap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "CapNames", name: "CapNames", pkg: "", typ: $funcType([], [sliceType$3], false)}, {prop: "capNames", name: "capNames", pkg: "regexp/syntax", typ: $funcType([sliceType$3], [], false)}, {prop: "Simplify", name: "Simplify", pkg: "", typ: $funcType([], [ptrType$1], false)}];
�d	Regexp.init("", [{prop: "Op", name: "Op", embedded: false, exported: true, typ: Op, tag: ""}, {prop: "Flags", name: "Flags", embedded: false, exported: true, typ: Flags, tag: ""}, {prop: "Sub", name: "Sub", embedded: false, exported: true, typ: sliceType$5, tag: ""}, {prop: "Sub0", name: "Sub0", embedded: false, exported: true, typ: arrayType, tag: ""}, {prop: "Rune", name: "Rune", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "Rune0", name: "Rune0", embedded: false, exported: true, typ: arrayType$1, tag: ""}, {prop: "Min", name: "Min", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Max", name: "Max", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Cap", name: "Cap", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}]);
Regexp	regexp/syntax.Flagsregexp/syntax.Opregexp/syntax.Regexpregexp/syntax.arrayTyperegexp/syntax.arrayType$1regexp/syntax.ptrType$1regexp/syntax.sliceTyperegexp/syntax.sliceType$3regexp/syntax.sliceType$5  OpY	Op = $pkg.Op = $newType(1, $kindUint8, "syntax.Op", true, "regexp/syntax", true, null);
a	Op.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
Opregexp/syntax.Op  	sliceType!	sliceType = $sliceType($Int32);
	sliceType  sliceType$1,	sliceType$1 = $sliceType(unicode.Range16);
sliceType$1unicode.Range16  sliceType$2,	sliceType$2 = $sliceType(unicode.Range32);
sliceType$2unicode.Range32  sliceType$3$	sliceType$3 = $sliceType($String);
sliceType$3  ptrType	ptrType = $ptrType(Prog);
ptrTyperegexp/syntax.Prog  sliceType$4!	sliceType$4 = $sliceType(Inst);
sliceType$4regexp/syntax.Inst  	ptrType$1	ptrType$1 = $ptrType(Regexp);
	ptrType$1regexp/syntax.Regexp  sliceType$5&	sliceType$5 = $sliceType(ptrType$1);
sliceType$5regexp/syntax.ptrType$1  	arrayType'	arrayType = $arrayType(ptrType$1, 1);
	arrayTyperegexp/syntax.ptrType$1  arrayType$1&	arrayType$1 = $arrayType($Int32, 2);
arrayType$1  	ptrType$2"	ptrType$2 = $ptrType(sliceType);
	ptrType$2regexp/syntax.sliceType  	ptrType$3+	ptrType$3 = $ptrType(unicode.RangeTable);
	ptrType$3unicode.RangeTable  	ptrType$4(	ptrType$4 = $ptrType(strings.Builder);
	ptrType$4strings.Builder  sliceType$6#	sliceType$6 = $sliceType($Uint8);
sliceType$6  	ptrType$5!	ptrType$5 = $ptrType(compiler);
	ptrType$5regexp/syntax.compiler  	ptrType$6	ptrType$6 = $ptrType(Error);
	ptrType$6regexp/syntax.Error  	ptrType$7	ptrType$7 = $ptrType(parser);
	ptrType$7regexp/syntax.parser  	ptrType$8	ptrType$8 = $ptrType(Inst);
	ptrType$8regexp/syntax.Inst  anyRuneNotNLanyRuneNotNL  anyRuneanyRune  _Op_index_0_Op_index_0  anyTableanyTable  code1code1  code2code2  code3code3  	perlGroup	perlGroup  code4code4  code5code5  code6code6  code7code7  code8code8  code9code9  code10code10  code11code11  code12code12  code13code13  code14code14  code15code15  code16code16  code17code17  
posixGroup
posixGroup  instOpNamesinstOpNames  :  h		anyRuneNotNL = new sliceType([0, 9, 11, 1114111]);
anyRuneNotNLregexp/syntax.anyRuneNotNLregexp/syntax.sliceType  .  �		anyRune = new sliceType([0, 1114111]);
anyRuneregexp/syntax.anyRuneregexp/syntax.sliceType  ��  1�		_Op_index_0 = $toNativeArray($kindUint8, [0, 7, 17, 24, 33, 45, 52, 61, 68, 77, 84, 96, 110, 117, 121, 125, 130, 136, 142, 151]);
_Op_index_0regexp/syntax._Op_index_0  ��  �		anyTable = new unicode.RangeTable.ptr(new sliceType$1([new unicode.Range16.ptr(0, 65535, 1)]), new sliceType$2([new unicode.Range32.ptr(65536, 1114111, 1)]), 0);
anyTableregexp/syntax.anyTableregexp/syntax.sliceType$1regexp/syntax.sliceType$2unicode.Range16unicode.Range32unicode.RangeTable  (  �<		code1 = new sliceType([48, 57]);
code1regexp/syntax.code1regexp/syntax.sliceType  7  �i		code2 = new sliceType([9, 10, 12, 13, 32, 32]);
code2regexp/syntax.code2regexp/syntax.sliceType  A  �		code3 = new sliceType([48, 57, 65, 90, 95, 95, 97, 122]);
code3regexp/syntax.code3regexp/syntax.sliceType  �F  � 		perlGroup = $makeMap($String.keyFor, [{ k: "\\d", v: new charGroup.ptr(1, code1) }, { k: "\\D", v: new charGroup.ptr(-1, code1) }, { k: "\\s", v: new charGroup.ptr(1, code2) }, { k: "\\S", v: new charGroup.ptr(-1, code2) }, { k: "\\w", v: new charGroup.ptr(1, code3) }, { k: "\\W", v: new charGroup.ptr(-1, code3) }]);
	perlGroupregexp/syntax.charGroupregexp/syntax.code1regexp/syntax.code2regexp/syntax.code3regexp/syntax.perlGroup  9  ��		code4 = new sliceType([48, 57, 65, 90, 97, 122]);
code4regexp/syntax.code4regexp/syntax.sliceType  1  ��		code5 = new sliceType([65, 90, 97, 122]);
code5regexp/syntax.code5regexp/syntax.sliceType  (  �/		code6 = new sliceType([0, 127]);
code6regexp/syntax.code6regexp/syntax.sliceType  .  �b		code7 = new sliceType([9, 9, 32, 32]);
code7regexp/syntax.code7regexp/syntax.sliceType  1  �		code8 = new sliceType([0, 31, 127, 127]);
code8regexp/syntax.code8regexp/syntax.sliceType  (  ��		code9 = new sliceType([48, 57]);
code9regexp/syntax.code9regexp/syntax.sliceType  *  �		code10 = new sliceType([33, 126]);
code10regexp/syntax.code10regexp/syntax.sliceType  *  �J		code11 = new sliceType([97, 122]);
code11regexp/syntax.code11regexp/syntax.sliceType  *  �		code12 = new sliceType([32, 126]);
code12regexp/syntax.code12regexp/syntax.sliceType  C  �		code13 = new sliceType([33, 47, 58, 64, 91, 96, 123, 126]);
code13regexp/syntax.code13regexp/syntax.sliceType  0  �		code14 = new sliceType([9, 13, 32, 32]);
code14regexp/syntax.code14regexp/syntax.sliceType  )  �P		code15 = new sliceType([65, 90]);
code15regexp/syntax.code15regexp/syntax.sliceType  B  ��		code16 = new sliceType([48, 57, 65, 90, 95, 95, 97, 122]);
code16regexp/syntax.code16regexp/syntax.sliceType  :  ��		code17 = new sliceType([48, 57, 65, 70, 97, 102]);
code17regexp/syntax.code17regexp/syntax.sliceType  �  �0		posixGroup = $makeMap($String.keyFor, [{ k: "[:alnum:]", v: new charGroup.ptr(1, code4) }, { k: "[:^alnum:]", v: new charGroup.ptr(-1, code4) }, { k: "[:alpha:]", v: new charGroup.ptr(1, code5) }, { k: "[:^alpha:]", v: new charGroup.ptr(-1, code5) }, { k: "[:ascii:]", v: new charGroup.ptr(1, code6) }, { k: "[:^ascii:]", v: new charGroup.ptr(-1, code6) }, { k: "[:blank:]", v: new charGroup.ptr(1, code7) }, { k: "[:^blank:]", v: new charGroup.ptr(-1, code7) }, { k: "[:cntrl:]", v: new charGroup.ptr(1, code8) }, { k: "[:^cntrl:]", v: new charGroup.ptr(-1, code8) }, { k: "[:digit:]", v: new charGroup.ptr(1, code9) }, { k: "[:^digit:]", v: new charGroup.ptr(-1, code9) }, { k: "[:graph:]", v: new charGroup.ptr(1, code10) }, { k: "[:^graph:]", v: new charGroup.ptr(-1, code10) }, { k: "[:lower:]", v: new charGroup.ptr(1, code11) }, { k: "[:^lower:]", v: new charGroup.ptr(-1, code11) }, { k: "[:print:]", v: new charGroup.ptr(1, code12) }, { k: "[:^print:]", v: new charGroup.ptr(-1, code12) }, { k: "[:punct:]", v: new charGroup.ptr(1, code13) }, { k: "[:^punct:]", v: new charGroup.ptr(-1, code13) }, { k: "[:space:]", v: new charGroup.ptr(1, code14) }, { k: "[:^space:]", v: new charGroup.ptr(-1, code14) }, { k: "[:upper:]", v: new charGroup.ptr(1, code15) }, { k: "[:^upper:]", v: new charGroup.ptr(-1, code15) }, { k: "[:word:]", v: new charGroup.ptr(1, code16) }, { k: "[:^word:]", v: new charGroup.ptr(-1, code16) }, { k: "[:xdigit:]", v: new charGroup.ptr(1, code17) }, { k: "[:^xdigit:]", v: new charGroup.ptr(-1, code17) }]);

posixGroupregexp/syntax.charGroupregexp/syntax.code10regexp/syntax.code11regexp/syntax.code12regexp/syntax.code13regexp/syntax.code14regexp/syntax.code15regexp/syntax.code16regexp/syntax.code17regexp/syntax.code4regexp/syntax.code5regexp/syntax.code6regexp/syntax.code7regexp/syntax.code8regexp/syntax.code9regexp/syntax.posixGroup  ��  �Q		instOpNames = new sliceType$3(["InstAlt", "InstAltMatch", "InstCapture", "InstEmptyWidth", "InstMatch", "InstFail", "InstNop", "InstRune", "InstRune1", "InstRuneAny", "InstRuneAnyNotNL"]);
instOpNamesregexp/syntax.instOpNamesregexp/syntax.sliceType$3 regexp/syntax.makePatchListregexp/syntaxmakePatchList makePatchListX	makePatchList = function(n) {
		var n;
  �		return new patchList.ptr(n, n);
    	};
makePatchListregexp/syntax.makePatchListregexp/syntax.patchList (regexp/syntax.patchList).patch �]	patchList.ptr.prototype.patch = function(p, val) {
		var head, i, l, p, val, x, x$1;
		l = this;
  �		head = l.head;
  
		while (true) {
			if (!(!((head === 0)))) { break; }
  			i = (x = p.Inst, x$1 = head >>> 1 >>> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    			if (((head & 1) >>> 0) === 0) {
  H				head = i.Out;
  X				i.Out = val;
    			} else {
  r				head = i.Arg;
  �				i.Arg = val;
    			}
    		}
    	};
	patchList.prototype.patch = function(p, val) { return this.$val.patch(p, val); };
	patchListpatch~regexp/syntax.patchList  (regexp/syntax.patchList).append �z	patchList.ptr.prototype.append = function(p, l2) {
		var i, l1, l2, p, x, x$1;
		l1 = this;
    		if (l1.head === 0) {
  �			return l2;
    		}
    		if (l2.head === 0) {
  			return l1;
    		}
  		i = (x = p.Inst, x$1 = l1.tail >>> 1 >>> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		if (((l1.tail & 1) >>> 0) === 0) {
  L			i.Out = l2.head;
    		} else {
  h			i.Arg = l2.head;
    		}
  |		return new patchList.ptr(l1.head, l2.tail);
    	};
	patchList.prototype.append = function(p, l2) { return this.$val.append(p, l2); };
	patchListappend~regexp/syntax.patchList regexp/syntax.Compileregexp/syntaxCompile Compile�)	Compile = function(re) {
		var c, f, re;
  q		c = new compiler.ptr(ptrType.nil);
  }		c.init();
  �		f = $clone(c.compile(re), frag);
  �		$clone(f.out, patchList).patch(c.p, c.inst(4).i);
  �		c.p.Start = ((f.i >> 0));
  �		return [c.p, $ifaceNil];
    	};
	$pkg.Compile = Compile;
Compile
regexp/syntax.Compileregexp/syntax.Progregexp/syntax.compilerregexp/syntax.compile~regexp/syntax.fragregexp/syntax.init~regexp/syntax.inst~regexp/syntax.patchListregexp/syntax.patch~regexp/syntax.ptrType (*regexp/syntax.compiler).init ��	compiler.ptr.prototype.init = function() {
		var c;
		c = this;
  		c.p = new Prog.ptr(sliceType$4.nil, 0, 0);
  		c.p.NumCap = 2;
  P		c.inst(5);
    	};
	compiler.prototype.init = function() { return this.$val.init(); };
compilerinit~regexp/syntax.Instregexp/syntax.Progregexp/syntax.compilerregexp/syntax.inst~regexp/syntax.sliceType$4 !(*regexp/syntax.compiler).compile �	compiler.ptr.prototype.compile = function(re) {
		var _1, _i, _i$1, _i$2, _ref, _ref$1, _ref$2, bra, c, f, f$1, f$2, f1, i, j, ket, re, sub, sub$1, sub$2, x, x$1, x$2, x$3;
		c = this;
    		_1 = re.Op;
    		if (_1 === (1)) {
  	!			return c.fail();
    		} else if (_1 === (2)) {
  	G			return c.nop();
    		} else if (_1 === (3)) {
    			if (re.Rune.$length === 0) {
  	�				return c.nop();
    			}
  	�			f = new frag.ptr(0, new patchList.ptr(0, 0), false);
  	�			_ref = re.Rune;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				j = _i;
  	�				f1 = $clone(c.rune($subslice(re.Rune, j, (j + 1 >> 0)), re.Flags), frag);
    				if (j === 0) {
  	�					frag.copy(f, f1);
    				} else {
  
					frag.copy(f, c.cat($clone(f, frag), $clone(f1, frag)));
    				}
    				_i++;
			}
  
.			return f;
    		} else if (_1 === (4)) {
  
L			return c.rune(re.Rune, re.Flags);
    		} else if (_1 === (5)) {
  
�			return c.rune(anyRuneNotNL, 0);
    		} else if (_1 === (6)) {
  
�			return c.rune(anyRune, 0);
    		} else if (_1 === (7)) {
  
�			return c.empty(1);
    		} else if (_1 === (8)) {
  			return c.empty(2);
    		} else if (_1 === (9)) {
  J			return c.empty(4);
    		} else if (_1 === (10)) {
  |			return c.empty(8);
    		} else if (_1 === (11)) {
  �			return c.empty(16);
    		} else if (_1 === (12)) {
  �			return c.empty(32);
    		} else if (_1 === (13)) {
  $			bra = $clone(c.cap((((re.Cap << 1 >> 0) >>> 0))), frag);
  H			sub = $clone(c.compile((x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]))), frag);
  f			ket = $clone(c.cap(((((re.Cap << 1 >> 0) | 1) >>> 0))), frag);
  �			return c.cat($clone(c.cat($clone(bra, frag), $clone(sub, frag)), frag), $clone(ket, frag));
    		} else if (_1 === (14)) {
  �			return c.star($clone(c.compile((x$1 = re.Sub, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0]))), frag), !((((re.Flags & 32) >>> 0) === 0)));
    		} else if (_1 === (15)) {
  			return c.plus($clone(c.compile((x$2 = re.Sub, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0]))), frag), !((((re.Flags & 32) >>> 0) === 0)));
    		} else if (_1 === (16)) {
  Z			return c.quest($clone(c.compile((x$3 = re.Sub, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0]))), frag), !((((re.Flags & 32) >>> 0) === 0)));
    		} else if (_1 === (18)) {
    			if (re.Sub.$length === 0) {
  �				return c.nop();
    			}
  �			f$1 = new frag.ptr(0, new patchList.ptr(0, 0), false);
  �			_ref$1 = re.Sub;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i = _i$1;
				sub$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    				if (i === 0) {
  					frag.copy(f$1, c.compile(sub$1));
    				} else {
  8					frag.copy(f$1, c.cat($clone(f$1, frag), $clone(c.compile(sub$1), frag)));
    				}
    				_i$1++;
			}
  `			return f$1;
    		} else if (_1 === (19)) {
  �			f$2 = new frag.ptr(0, new patchList.ptr(0, 0), false);
  �			_ref$2 = re.Sub;
			_i$2 = 0;
			while (true) {
				if (!(_i$2 < _ref$2.$length)) { break; }
				sub$2 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
  �				frag.copy(f$2, c.alt($clone(f$2, frag), $clone(c.compile(sub$2), frag)));
    				_i$2++;
			}
  �			return f$2;
    		}
  �		$panic(new $String("regexp: unhandled case in compile"));
    	};
	compiler.prototype.compile = function(re) { return this.$val.compile(re); };
compilercompile~regexp/syntax.alt~regexp/syntax.anyRuneregexp/syntax.anyRuneNotNLregexp/syntax.cap~regexp/syntax.cat~regexp/syntax.compilerregexp/syntax.compile~regexp/syntax.empty~regexp/syntax.fail~regexp/syntax.fragregexp/syntax.nop~regexp/syntax.patchListregexp/syntax.plus~regexp/syntax.quest~regexp/syntax.rune~regexp/syntax.star~ (*regexp/syntax.compiler).inst �L	compiler.ptr.prototype.inst = function(op) {
		var c, f, op;
		c = this;
  R		f = new frag.ptr(((c.p.Inst.$length >>> 0)), new patchList.ptr(0, 0), true);
  �		c.p.Inst = $append(c.p.Inst, new Inst.ptr(op, 0, 0, sliceType.nil));
  �		return f;
    	};
	compiler.prototype.inst = function(op) { return this.$val.inst(op); };
compilerinst~regexp/syntax.Instregexp/syntax.compilerregexp/syntax.fragregexp/syntax.patchListregexp/syntax.sliceType (*regexp/syntax.compiler).nop � 	compiler.ptr.prototype.nop = function() {
		var c, f;
		c = this;
  �		f = $clone(c.inst(6), frag);
  �		patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
  		return f;
    	};
	compiler.prototype.nop = function() { return this.$val.nop(); };
compilernop~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchList (*regexp/syntax.compiler).fail ��	compiler.ptr.prototype.fail = function() {
		var c;
		c = this;
  D		return new frag.ptr(0, new patchList.ptr(0, 0), false);
    	};
	compiler.prototype.fail = function() { return this.$val.fail(); };
compilerfail~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.patchList (*regexp/syntax.compiler).cap �	compiler.ptr.prototype.cap = function(arg) {
		var arg, c, f, x, x$1;
		c = this;
  �		f = $clone(c.inst(2), frag);
  �		patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
  �		(x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Arg = arg;
    		if (c.p.NumCap < (((arg >> 0)) + 1 >> 0)) {
  �			c.p.NumCap = ((arg >> 0)) + 1 >> 0;
    		}
  		return f;
    	};
	compiler.prototype.cap = function(arg) { return this.$val.cap(arg); };
compilercap~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchList (*regexp/syntax.compiler).cat ��	compiler.ptr.prototype.cat = function(f1, f2) {
		var c, f1, f2;
		c = this;
    		if ((f1.i === 0) || (f2.i === 0)) {
  �			return new frag.ptr(0, new patchList.ptr(0, 0), false);
    		}
  �		$clone(f1.out, patchList).patch(c.p, f2.i);
  �		return new frag.ptr(f1.i, $clone(f2.out, patchList), f1.nullable && f2.nullable);
    	};
	compiler.prototype.cat = function(f1, f2) { return this.$val.cat(f1, f2); };
compilercat~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.patchListregexp/syntax.patch~ (*regexp/syntax.compiler).alt ��	compiler.ptr.prototype.alt = function(f1, f2) {
		var c, f, f1, f2, i, x, x$1;
		c = this;
    		if (f1.i === 0) {
  \			return f2;
    		}
    		if (f2.i === 0) {
  {			return f1;
    		}
  �		f = $clone(c.inst(0), frag);
  �		i = (x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  �		i.Out = f1.i;
  �		i.Arg = f2.i;
  �		patchList.copy(f.out, $clone(f1.out, patchList).append(c.p, $clone(f2.out, patchList)));
  �		f.nullable = f1.nullable || f2.nullable;
  		return f;
    	};
	compiler.prototype.alt = function(f1, f2) { return this.$val.alt(f1, f2); };
compileralt~regexp/syntax.append~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.patchList (*regexp/syntax.compiler).quest ��	compiler.ptr.prototype.quest = function(f1, nongreedy) {
		var c, f, f1, i, nongreedy, x, x$1;
		c = this;
  d		f = $clone(c.inst(0), frag);
  z		i = (x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		if (nongreedy) {
  �			i.Arg = f1.i;
  �			patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
    		} else {
  �			i.Out = f1.i;
  �			patchList.copy(f.out, makePatchList(((f.i << 1 >>> 0) | 1) >>> 0));
    		}
  		patchList.copy(f.out, $clone(f.out, patchList).append(c.p, $clone(f1.out, patchList)));
  3		return f;
    	};
	compiler.prototype.quest = function(f1, nongreedy) { return this.$val.quest(f1, nongreedy); };
compilerquest~regexp/syntax.append~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchList (*regexp/syntax.compiler).loop ��	compiler.ptr.prototype.loop = function(f1, nongreedy) {
		var c, f, f1, i, nongreedy, x, x$1;
		c = this;
  �		f = $clone(c.inst(0), frag);
  �		i = (x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		if (nongreedy) {
  �			i.Arg = f1.i;
  			patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
    		} else {
  /			i.Out = f1.i;
  >			patchList.copy(f.out, makePatchList(((f.i << 1 >>> 0) | 1) >>> 0));
    		}
  d		$clone(f1.out, patchList).patch(c.p, f.i);
  |		return f;
    	};
	compiler.prototype.loop = function(f1, nongreedy) { return this.$val.loop(f1, nongreedy); };
compilerloop~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchListregexp/syntax.patch~ (*regexp/syntax.compiler).star �p	compiler.ptr.prototype.star = function(f1, nongreedy) {
		var c, f1, nongreedy;
		c = this;
    		if (f1.nullable) {
  *			return c.quest($clone(c.plus($clone(f1, frag), nongreedy), frag), nongreedy);
    		}
  _		return c.loop($clone(f1, frag), nongreedy);
    	};
	compiler.prototype.star = function(f1, nongreedy) { return this.$val.star(f1, nongreedy); };
compilerstar~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.loop~regexp/syntax.plus~regexp/syntax.quest~ (*regexp/syntax.compiler).plus �/	compiler.ptr.prototype.plus = function(f1, nongreedy) {
		var c, f1, nongreedy;
		c = this;
  �		return new frag.ptr(f1.i, $clone(c.loop($clone(f1, frag), nongreedy).out, patchList), f1.nullable);
    	};
	compiler.prototype.plus = function(f1, nongreedy) { return this.$val.plus(f1, nongreedy); };
compilerplus~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.loop~regexp/syntax.patchList (*regexp/syntax.compiler).empty ��	compiler.ptr.prototype.empty = function(op) {
		var c, f, op, x, x$1;
		c = this;
  "		f = $clone(c.inst(3), frag);
  ?		(x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Arg = ((op >>> 0));
  _		patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
  �		return f;
    	};
	compiler.prototype.empty = function(op) { return this.$val.empty(op); };
compilerempty~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchList (*regexp/syntax.compiler).rune ��	compiler.ptr.prototype.rune = function(r, flags) {
		var c, f, flags, i, r, x, x$1;
		c = this;
  �		f = $clone(c.inst(7), frag);
  �		f.nullable = false;
  �		i = (x = c.p.Inst, x$1 = f.i, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  		i.Rune = r;
  		flags = (flags & (1)) >>> 0;
    		if (!((r.$length === 1)) || (unicode.SimpleFold((0 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 0])) === (0 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 0]))) {
  �			flags = (flags & ~(1)) << 16 >>> 16;
    		}
  �		i.Arg = ((flags >>> 0));
  �		patchList.copy(f.out, makePatchList(f.i << 1 >>> 0));
    		if ((((flags & 1) >>> 0) === 0) && ((r.$length === 1) || (r.$length === 2) && ((0 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 0]) === (1 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 1])))) {
  f			i.Op = 8;
    		} else if ((r.$length === 2) && ((0 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 0]) === 0) && ((1 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 1]) === 1114111)) {
  �			i.Op = 9;
    		} else if ((r.$length === 4) && ((0 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 0]) === 0) && ((1 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 1]) === 9) && ((2 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 2]) === 11) && ((3 >= r.$length ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + 3]) === 1114111)) {
  (			i.Op = 10;
    		}
  E		return f;
    	};
	compiler.prototype.rune = function(r, flags) { return this.$val.rune(r, flags); };
compilerrune~regexp/syntax.compilerregexp/syntax.fragregexp/syntax.inst~regexp/syntax.makePatchListregexp/syntax.patchListunicode.SimpleFold (regexp/syntax.Op).String �-	Op.prototype.String = function() {
		var i, x;
		i = this.$val;
    		if (1 <= i && i <= 19) {
  2�			i = i - (1) << 24 >>> 24;
  2�			return $substring("NoMatchEmptyMatchLiteralCharClassAnyCharNotNLAnyCharBeginLineEndLineBeginTextEndTextWordBoundaryNoWordBoundaryCaptureStarPlusQuestRepeatConcatAlternate", ((i < 0 || i >= _Op_index_0.length) ? ($throwRuntimeError("index out of range"), undefined) : _Op_index_0[i]), (x = i + 1 << 24 >>> 24, ((x < 0 || x >= _Op_index_0.length) ? ($throwRuntimeError("index out of range"), undefined) : _Op_index_0[x])));
    		} else if ((i === 128)) {
  2�			return "opPseudo";
    		} else {
  3			return "Op(" + strconv.FormatInt((new $Int64(0, i)), 10) + ")";
    		}
    	};
	$ptrType(Op).prototype.String = function() { return new Op(this.$get()).String(); };
Opregexp/syntax.Opregexp/syntax._Op_index_0strconv.FormatInt (*regexp/syntax.Error).Error ��	Error.ptr.prototype.Error = function() {
		var e;
		e = this;
  4�		return "error parsing regexp: " + new ErrorCode(e.Code).String() + ": `" + e.Expr + "`";
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Errorregexp/syntax.Errorregexp/syntax.ErrorCode  (regexp/syntax.ErrorCode).String ��	ErrorCode.prototype.String = function() {
		var e;
		e = this.$val;
  9�		return (e);
    	};
	$ptrType(ErrorCode).prototype.String = function() { return new ErrorCode(this.$get()).String(); };
	ErrorCoderegexp/syntax.ErrorCode !(*regexp/syntax.parser).newRegexp �4	parser.ptr.prototype.newRegexp = function(op) {
		var op, p, re;
		p = this;
  ?\		re = p.free;
    		if (!(re === ptrType$1.nil)) {
  ?{			p.free = re.Sub0[0];
  ?�			Regexp.copy(re, new Regexp.ptr(0, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, ""));
    		} else {
  ?�			re = new Regexp.ptr(0, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
    		}
  ?�		re.Op = op;
  ?�		return re;
    	};
	parser.prototype.newRegexp = function(op) { return this.$val.newRegexp(op); };
parser
newRegexp~regexp/syntax.Regexpregexp/syntax.arrayTyperegexp/syntax.arrayType$1regexp/syntax.parserregexp/syntax.ptrType$1regexp/syntax.sliceTyperegexp/syntax.sliceType$5 (*regexp/syntax.parser).reuse ��	parser.ptr.prototype.reuse = function(re) {
		var p, re;
		p = this;
  @ 		re.Sub0[0] = p.free;
  @		p.free = re;
    	};
	parser.prototype.reuse = function(re) { return this.$val.reuse(re); };
parserreuse~regexp/syntax.parser (*regexp/syntax.parser).push ��	parser.ptr.prototype.push = function(re) {
		var p, re, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		p = this;
    		if ((re.Op === 4) && (re.Rune.$length === 2) && ((x = re.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) === (x$1 = re.Rune, (1 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 1])))) {
    			if (p.maybeConcat((x$16 = re.Rune, (0 >= x$16.$length ? ($throwRuntimeError("index out of range"), undefined) : x$16.$array[x$16.$offset + 0])), (p.flags & ~1) << 16 >>> 16)) {
  AM				return ptrType$1.nil;
    			}
  A^			re.Op = 3;
  Ar			re.Rune = $subslice(re.Rune, 0, 1);
  A�			re.Flags = (p.flags & ~1) << 16 >>> 16;
    		} else if ((re.Op === 4) && (re.Rune.$length === 4) && ((x$2 = re.Rune, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0])) === (x$3 = re.Rune, (1 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 1]))) && ((x$4 = re.Rune, (2 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 2])) === (x$5 = re.Rune, (3 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 3]))) && (unicode.SimpleFold((x$6 = re.Rune, (0 >= x$6.$length ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + 0]))) === (x$7 = re.Rune, (2 >= x$7.$length ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + 2]))) && (unicode.SimpleFold((x$8 = re.Rune, (2 >= x$8.$length ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + 2]))) === (x$9 = re.Rune, (0 >= x$9.$length ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + 0]))) || (re.Op === 4) && (re.Rune.$length === 2) && (((x$10 = re.Rune, (0 >= x$10.$length ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + 0])) + 1 >> 0) === (x$11 = re.Rune, (1 >= x$11.$length ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + 1]))) && (unicode.SimpleFold((x$12 = re.Rune, (0 >= x$12.$length ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + 0]))) === (x$13 = re.Rune, (1 >= x$13.$length ? ($throwRuntimeError("index out of range"), undefined) : x$13.$array[x$13.$offset + 1]))) && (unicode.SimpleFold((x$14 = re.Rune, (1 >= x$14.$length ? ($throwRuntimeError("index out of range"), undefined) : x$14.$array[x$14.$offset + 1]))) === (x$15 = re.Rune, (0 >= x$15.$length ? ($throwRuntimeError("index out of range"), undefined) : x$15.$array[x$15.$offset + 0])))) {
    			if (p.maybeConcat((x$17 = re.Rune, (0 >= x$17.$length ? ($throwRuntimeError("index out of range"), undefined) : x$17.$array[x$17.$offset + 0])), (p.flags | 1) >>> 0)) {
  C�				return ptrType$1.nil;
    			}
  C�			re.Op = 3;
  C�			re.Rune = $subslice(re.Rune, 0, 1);
  D			re.Flags = (p.flags | 1) >>> 0;
    		} else {
  DN			p.maybeConcat(-1, 0);
    		}
  Dh		p.stack = $append(p.stack, re);
  D�		return re;
    	};
	parser.prototype.push = function(re) { return this.$val.push(re); };
parserpush~regexp/syntax.maybeConcat~regexp/syntax.parserregexp/syntax.ptrType$1unicode.SimpleFold #(*regexp/syntax.parser).maybeConcat ��	parser.ptr.prototype.maybeConcat = function(r, flags) {
		var flags, n, p, r, re1, re2, x, x$1, x$2, x$3, x$4;
		p = this;
  F�		n = p.stack.$length;
    		if (n < 2) {
  F�			return false;
    		}
  F�		re1 = (x = p.stack, x$1 = n - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  F�		re2 = (x$2 = p.stack, x$3 = n - 2 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3]));
    		if (!((re1.Op === 3)) || !((re2.Op === 3)) || !((((re1.Flags & 1) >>> 0) === ((re2.Flags & 1) >>> 0)))) {
  Gk			return false;
    		}
  G�		re2.Rune = $appendSlice(re2.Rune, re1.Rune);
    		if (r >= 0) {
  G�			re1.Rune = $subslice(new sliceType(re1.Rune0), 0, 1);
  H			(x$4 = re1.Rune, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0] = r));
  H			re1.Flags = flags;
  H)			return true;
    		}
  H:		p.stack = $subslice(p.stack, 0, (n - 1 >> 0));
  HS		p.reuse(re1);
  Ha		return false;
    	};
	parser.prototype.maybeConcat = function(r, flags) { return this.$val.maybeConcat(r, flags); };
parsermaybeConcat~regexp/syntax.parserregexp/syntax.reuse~regexp/syntax.sliceType (*regexp/syntax.parser).literal ��	parser.ptr.prototype.literal = function(r) {
		var p, r, re;
		p = this;
  H�		re = p.newRegexp(3);
  I		re.Flags = p.flags;
    		if (!((((p.flags & 1) >>> 0) === 0))) {
  I6			r = minFoldRune(r);
    		}
  IM		re.Rune0[0] = r;
  I^		re.Rune = $subslice(new sliceType(re.Rune0), 0, 1);
  Iv		p.push(re);
    	};
	parser.prototype.literal = function(r) { return this.$val.literal(r); };
parserliteral~regexp/syntax.minFoldRuneregexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.push~regexp/syntax.sliceType regexp/syntax.minFoldRuneregexp/syntaxminFoldRune minFoldRune�Y	minFoldRune = function(r) {
		var min, r, r0;
    		if (r < 65 || r > 125251) {
  J			return r;
    		}
  J		min = r;
  J		r0 = r;
  J)		r = unicode.SimpleFold(r);
		while (true) {
			if (!(!((r === r0)))) { break; }
    			if (min > r) {
  J{				min = r;
    			}
  JM			r = unicode.SimpleFold(r);
		}
  J�		return min;
    	};
minFoldRuneregexp/syntax.minFoldRuneunicode.SimpleFold (*regexp/syntax.parser).op ��	parser.ptr.prototype.op = function(op) {
		var op, p, re;
		p = this;
  K		re = p.newRegexp(op);
  K)		re.Flags = p.flags;
  K=		return p.push(re);
    	};
	parser.prototype.op = function(op) { return this.$val.op(op); };
parserop~regexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.push~ (*regexp/syntax.parser).repeat ��	parser.ptr.prototype.repeat = function(op, min, max, before, after, lastRepeat) {
		var after, before, flags, lastRepeat, max, min, n, op, p, re, sub, x, x$1, x$2, x$3, x$4;
		p = this;
  L�		flags = p.flags;
    		if (!((((p.flags & 64) >>> 0) === 0))) {
    			if (after.length > 0 && (after.charCodeAt(0) === 63)) {
  M)				after = $substring(after, 1);
  M>				flags = (flags ^ (32)) << 16 >>> 16;
    			}
    			if (!(lastRepeat === "")) {
  N%				return ["", new Error.ptr("invalid nested repetition operator", $substring(lastRepeat, 0, (lastRepeat.length - after.length >> 0)))];
    			}
    		}
  N|		n = p.stack.$length;
    		if (n === 0) {
  N�			return ["", new Error.ptr("missing argument to repetition operator", $substring(before, 0, (before.length - after.length >> 0)))];
    		}
  N�		sub = (x = p.stack, x$1 = n - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    		if (sub.Op >= 128) {
  O			return ["", new Error.ptr("missing argument to repetition operator", $substring(before, 0, (before.length - after.length >> 0)))];
    		}
  Oo		re = p.newRegexp(op);
  O�		re.Min = min;
  O�		re.Max = max;
  O�		re.Flags = flags;
  O�		re.Sub = $subslice(new sliceType$5(re.Sub0), 0, 1);
  O�		(x$2 = re.Sub, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0] = sub));
  O�		(x$3 = p.stack, x$4 = n - 1 >> 0, ((x$4 < 0 || x$4 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + x$4] = re));
    		if ((op === 17) && (min >= 2 || max >= 2) && !repeatIsValid(re, 1000)) {
  P;			return ["", new Error.ptr("invalid repeat count", $substring(before, 0, (before.length - after.length >> 0)))];
    		}
  P�		return [after, $ifaceNil];
    	};
	parser.prototype.repeat = function(op, min, max, before, after, lastRepeat) { return this.$val.repeat(op, min, max, before, after, lastRepeat); };
parserrepeat~regexp/syntax.Errorregexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.repeatIsValidregexp/syntax.sliceType$5 regexp/syntax.repeatIsValidregexp/syntaxrepeatIsValid repeatIsValid�	repeatIsValid = function(re, n) {
		var _i, _q, _ref, m, n, re, sub;
    		if (re.Op === 17) {
  S 			m = re.Max;
    			if (m === 0) {
  S=				return true;
    			}
    			if (m < 0) {
  S]				m = re.Min;
    			}
    			if (m > n) {
  S|				return false;
    			}
    			if (m > 0) {
  S�				n = (_q = n / (m), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    			}
    		}
  S�		_ref = re.Sub;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			sub = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!repeatIsValid(sub, n)) {
  S�				return false;
    			}
    			_i++;
		}
  S�		return true;
    	};
repeatIsValidregexp/syntax.repeatIsValid (*regexp/syntax.parser).concat ��	parser.ptr.prototype.concat = function() {
		var $24r, _r, _r$1, i, p, subs, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; i = $f.i; p = $f.p; subs = $f.subs; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  T�		p.maybeConcat(-1, 0);
  T�		i = p.stack.$length;
  T�		while (true) {
			if (!(i > 0 && (x = p.stack, x$1 = i - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Op < 128)) { break; }
  U			i = i - (1) >> 0;
    		}
  U		subs = $subslice(p.stack, i);
  U3		p.stack = $subslice(p.stack, 0, i);
    		if (subs.$length === 0) {
  U�			$s = -1; return p.push(p.newRegexp(2));
    		}
  U�		_r = p.collapse(subs, 18); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = p.push(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.concat }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.i = i; $f.p = p; $f.subs = subs; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.concat = function() { return this.$val.concat(); };
parserconcat~regexp/syntax.collapse~regexp/syntax.maybeConcat~regexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.push~ !(*regexp/syntax.parser).alternate ��	parser.ptr.prototype.alternate = function() {
		var $24r, _r, _r$1, i, p, subs, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; i = $f.i; p = $f.p; subs = $f.subs; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  V�		i = p.stack.$length;
  V�		while (true) {
			if (!(i > 0 && (x = p.stack, x$1 = i - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Op < 128)) { break; }
  V�			i = i - (1) >> 0;
    		}
  V�		subs = $subslice(p.stack, i);
  W		p.stack = $subslice(p.stack, 0, i);
  Ww		/* */ if (subs.$length > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (subs.$length > 0) { */ case 1:
  W�			$r = cleanAlt((x$2 = subs.$length - 1 >> 0, ((x$2 < 0 || x$2 >= subs.$length) ? ($throwRuntimeError("index out of range"), undefined) : subs.$array[subs.$offset + x$2]))); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		if (subs.$length === 0) {
  X			$s = -1; return p.push(p.newRegexp(1));
    		}
  X=		_r = p.collapse(subs, 19); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = p.push(_r); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 6; case 6: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.alternate }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.i = i; $f.p = p; $f.subs = subs; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.alternate = function() { return this.$val.alternate(); };
parser
alternate~regexp/syntax.cleanAltregexp/syntax.collapse~regexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.push~ regexp/syntax.cleanAltregexp/syntaxcleanAlt cleanAlt�		cleanAlt = function(re) {
		var _1, _r, re, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; re = $f.re; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = re.Op;
  X�			/* */ if (_1 === (4)) { $s = 2; continue; }
			/* */ $s = 3; continue;
    			/* if (_1 === (4)) { */ case 2:
  X�				_r = cleanClass((re.$ptr_Rune || (re.$ptr_Rune = new ptrType$2(function() { return this.$target.Rune; }, function($v) { this.$target.Rune = $v; }, re)))); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				re.Rune = _r;
    				if ((re.Rune.$length === 2) && ((x = re.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) === 0) && ((x$1 = re.Rune, (1 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 1])) === 1114111)) {
  Y]					re.Rune = sliceType.nil;
  Yn					re.Op = 6;
  Y�					$s = -1; return;
    				}
    				if ((re.Rune.$length === 4) && ((x$2 = re.Rune, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0])) === 0) && ((x$3 = re.Rune, (1 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 1])) === 9) && ((x$4 = re.Rune, (2 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 2])) === 11) && ((x$5 = re.Rune, (3 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 3])) === 1114111)) {
  Z					re.Rune = sliceType.nil;
  Z					re.Op = 5;
  Z9					$s = -1; return;
    				}
    				if ((re.Rune.$capacity - re.Rune.$length >> 0) > 100) {
  Z�					re.Rune = $appendSlice($subslice(new sliceType(re.Rune0), 0, 0), re.Rune);
    				}
    			/* } */ case 3:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cleanAlt }; } $f._1 = _1; $f._r = _r; $f.re = re; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
cleanAltregexp/syntax.cleanAltregexp/syntax.cleanClassregexp/syntax.ptrType$2regexp/syntax.sliceType  (*regexp/syntax.parser).collapse ��	parser.ptr.prototype.collapse = function(subs, op) {
		var _i, _r, _ref, old, op, p, re, sub, subs, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; old = $f.old; op = $f.op; p = $f.p; re = $f.re; sub = $f.sub; subs = $f.subs; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    		if (subs.$length === 1) {
  \				$s = -1; return (0 >= subs.$length ? ($throwRuntimeError("index out of range"), undefined) : subs.$array[subs.$offset + 0]);
    		}
  \		re = p.newRegexp(op);
  \3		re.Sub = $subslice(new sliceType$5(re.Sub0), 0, 0);
  \I		_ref = subs;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			sub = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (sub.Op === op) {
  \{				re.Sub = $appendSlice(re.Sub, sub.Sub);
  \�				p.reuse(sub);
    			} else {
  \�				re.Sub = $append(re.Sub, sub);
    			}
    			_i++;
		}
  \�		/* */ if (op === 19) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (op === 19) { */ case 1:
  \�			_r = p.factor(re.Sub); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			re.Sub = _r;
    			if (re.Sub.$length === 1) {
  ]0				old = re;
  ]=				re = (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
  ]O				p.reuse(old);
    			}
    		/* } */ case 2:
  ]d		$s = -1; return re;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.collapse }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.old = old; $f.op = op; $f.p = p; $f.re = re; $f.sub = sub; $f.subs = subs; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.collapse = function(subs, op) { return this.$val.collapse(subs, op); };
parser	collapse~regexp/syntax.factor~regexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.reuse~regexp/syntax.sliceType$5 (*regexp/syntax.parser).factor �,F	parser.ptr.prototype.factor = function(sub) {
		var _i, _r, _r$1, _ref, _tmp, _tmp$1, _tuple, first, i, i$1, i$2, i$3, ifirst, iflags, istr, j, j$1, j$2, j$3, max, out, p, prefix, prefix$1, re, re$1, reuse, same, start, str, strflags, sub, suffix, suffix$1, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; first = $f.first; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; ifirst = $f.ifirst; iflags = $f.iflags; istr = $f.istr; j = $f.j; j$1 = $f.j$1; j$2 = $f.j$2; j$3 = $f.j$3; max = $f.max; out = $f.out; p = $f.p; prefix = $f.prefix; prefix$1 = $f.prefix$1; re = $f.re; re$1 = $f.re$1; reuse = $f.reuse; same = $f.same; start = $f.start; str = $f.str; strflags = $f.strflags; sub = $f.sub; suffix = $f.suffix; suffix$1 = $f.suffix$1; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    		if (sub.$length < 2) {
  _;			$s = -1; return sub;
    		}
  _�		str = sliceType.nil;
  _�		strflags = 0;
  _�		start = 0;
  _�		out = $subslice(sub, 0, 0);
  _�		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i <= sub.$length)) { break; } */ if(!(i <= sub.$length)) { $s = 2; continue; }
  `�			istr = sliceType.nil;
  a			iflags = 0;
    			if (i < sub.$length) {
  a*				_tuple = p.leadingString(((i < 0 || i >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i]));
				istr = _tuple[0];
				iflags = _tuple[1];
    				if (iflags === strflags) {
  ap					same = 0;
  a~					while (true) {
						if (!(same < str.$length && same < istr.$length && (((same < 0 || same >= str.$length) ? ($throwRuntimeError("index out of range"), undefined) : str.$array[str.$offset + same]) === ((same < 0 || same >= istr.$length) ? ($throwRuntimeError("index out of range"), undefined) : istr.$array[istr.$offset + same])))) { break; }
  a�						same = same + (1) >> 0;
    					}
    					if (same > 0) {
  b;						str = $subslice(str, 0, same);
  _�						i = i + (1) >> 0;
    						/* continue; */ $s = 1; continue;
    					}
    				}
    			}
  cU			/* */ if (i === start) { $s = 3; continue; }
			/* */ if (i === (start + 1 >> 0)) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (i === start) { */ case 3:
    				$s = 6; continue;
    			/* } else if (i === (start + 1 >> 0)) { */ case 4:
  c�				out = $append(out, ((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]));
    				$s = 6; continue;
			/* } else { */ case 5:
  d9				prefix = p.newRegexp(3);
  d]				prefix.Flags = strflags;
  dx				prefix.Rune = $appendSlice($subslice(prefix.Rune, 0, 0), str);
  d�				j = start;
				while (true) {
					if (!(j < i)) { break; }
  d�					((j < 0 || j >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j] = p.removeLeadingString(((j < 0 || j >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j]), str.$length));
  d�					j = j + (1) >> 0;
    				}
  e				_r = p.collapse($subslice(sub, start, i), 19); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				suffix = _r;
  eC				re = p.newRegexp(18);
  eb				re.Sub = $append($subslice(re.Sub, 0, 0), prefix, suffix);
  e�				out = $append(out, re);
    			/* } */ case 6:
  e�			start = i;
  e�			str = istr;
  e�			strflags = iflags;
  _�			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  e�		sub = out;
  ge		start = 0;
  gp		out = $subslice(sub, 0, 0);
  g�		first = ptrType$1.nil;
  g�		i$1 = 0;
		/* while (true) { */ case 8:
			/* if (!(i$1 <= sub.$length)) { break; } */ if(!(i$1 <= sub.$length)) { $s = 9; continue; }
  h�			ifirst = ptrType$1.nil;
    			if (i$1 < sub.$length) {
  h�				ifirst = p.leadingRegexp(((i$1 < 0 || i$1 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i$1]));
    				if (!(first === ptrType$1.nil) && first.Equal(ifirst) && (isCharClass(first) || ((first.Op === 17) && (first.Min === first.Max) && isCharClass((x = first.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])))))) {
  g�					i$1 = i$1 + (1) >> 0;
    					/* continue; */ $s = 8; continue;
    				}
    			}
  j�			/* */ if (i$1 === start) { $s = 10; continue; }
			/* */ if (i$1 === (start + 1 >> 0)) { $s = 11; continue; }
			/* */ $s = 12; continue;
    			/* if (i$1 === start) { */ case 10:
    				$s = 13; continue;
    			/* } else if (i$1 === (start + 1 >> 0)) { */ case 11:
  k/				out = $append(out, ((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]));
    				$s = 13; continue;
			/* } else { */ case 12:
  k�				prefix$1 = first;
  k�				j$1 = start;
				while (true) {
					if (!(j$1 < i$1)) { break; }
  k�					reuse = !((j$1 === start));
  l					((j$1 < 0 || j$1 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$1] = p.removeLeadingRegexp(((j$1 < 0 || j$1 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$1]), reuse));
  k�					j$1 = j$1 + (1) >> 0;
    				}
  l7				_r$1 = p.collapse($subslice(sub, start, i$1), 19); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				suffix$1 = _r$1;
  lv				re$1 = p.newRegexp(18);
  l�				re$1.Sub = $append($subslice(re$1.Sub, 0, 0), prefix$1, suffix$1);
  l�				out = $append(out, re$1);
    			/* } */ case 13:
  m			start = i$1;
  m			first = ifirst;
  g�			i$1 = i$1 + (1) >> 0;
    		$s = 8; continue;
		case 9:
  m!		sub = out;
  ms		start = 0;
  m~		out = $subslice(sub, 0, 0);
  m�		i$2 = 0;
		/* while (true) { */ case 15:
			/* if (!(i$2 <= sub.$length)) { break; } */ if(!(i$2 <= sub.$length)) { $s = 16; continue; }
    			if (i$2 < sub.$length && isCharClass(((i$2 < 0 || i$2 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i$2]))) {
  m�				i$2 = i$2 + (1) >> 0;
    				/* continue; */ $s = 15; continue;
    			}
  oR			/* */ if (i$2 === start) { $s = 17; continue; }
			/* */ if (i$2 === (start + 1 >> 0)) { $s = 18; continue; }
			/* */ $s = 19; continue;
    			/* if (i$2 === start) { */ case 17:
    				$s = 20; continue;
    			/* } else if (i$2 === (start + 1 >> 0)) { */ case 18:
  o�				out = $append(out, ((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]));
    				$s = 20; continue;
			/* } else { */ case 19:
  p"				max = start;
  p6				j$2 = start + 1 >> 0;
				while (true) {
					if (!(j$2 < i$2)) { break; }
    					if (((max < 0 || max >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + max]).Op < ((j$2 < 0 || j$2 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$2]).Op || (((max < 0 || max >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + max]).Op === ((j$2 < 0 || j$2 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$2]).Op) && ((max < 0 || max >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + max]).Rune.$length < ((j$2 < 0 || j$2 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$2]).Rune.$length) {
  p�						max = j$2;
    					}
  pM					j$2 = j$2 + (1) >> 0;
    				}
  p�				_tmp = ((max < 0 || max >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + max]);
				_tmp$1 = ((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]);
				((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start] = _tmp);
				((max < 0 || max >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + max] = _tmp$1);
  q				j$3 = start + 1 >> 0;
				while (true) {
					if (!(j$3 < i$2)) { break; }
  q)					mergeCharClass(((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]), ((j$3 < 0 || j$3 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$3]));
  qP					p.reuse(((j$3 < 0 || j$3 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + j$3]));
  q					j$3 = j$3 + (1) >> 0;
    				}
  qh				$r = cleanAlt(((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start])); /* */ $s = 21; case 21: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  q�				out = $append(out, ((start < 0 || start >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + start]));
    			/* } */ case 20:
    			if (i$2 < sub.$length) {
  q�				out = $append(out, ((i$2 < 0 || i$2 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i$2]));
    			}
  q�			start = i$2 + 1 >> 0;
  m�			i$2 = i$2 + (1) >> 0;
    		$s = 15; continue;
		case 16:
  r		sub = out;
  r^		start = 0;
  ri		out = $subslice(sub, 0, 0);
  rx		_ref = sub;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i$3 = _i;
    			if ((i$3 + 1 >> 0) < sub.$length && (((i$3 < 0 || i$3 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i$3]).Op === 2) && ((x$1 = i$3 + 1 >> 0, ((x$1 < 0 || x$1 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + x$1])).Op === 2)) {
  r�				_i++;
				continue;
    			}
  r�			out = $append(out, ((i$3 < 0 || i$3 >= sub.$length) ? ($throwRuntimeError("index out of range"), undefined) : sub.$array[sub.$offset + i$3]));
    			_i++;
		}
  s		sub = out;
  s		$s = -1; return sub;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.factor }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.first = first; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.ifirst = ifirst; $f.iflags = iflags; $f.istr = istr; $f.j = j; $f.j$1 = j$1; $f.j$2 = j$2; $f.j$3 = j$3; $f.max = max; $f.out = out; $f.p = p; $f.prefix = prefix; $f.prefix$1 = prefix$1; $f.re = re; $f.re$1 = re$1; $f.reuse = reuse; $f.same = same; $f.start = start; $f.str = str; $f.strflags = strflags; $f.sub = sub; $f.suffix = suffix; $f.suffix$1 = suffix$1; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.factor = function(sub) { return this.$val.factor(sub); };
parserfactor~regexp/syntax.cleanAltregexp/syntax.collapse~regexp/syntax.isCharClassregexp/syntax.leadingRegexp~regexp/syntax.leadingString~regexp/syntax.mergeCharClassregexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.ptrType$1"regexp/syntax.removeLeadingRegexp~"regexp/syntax.removeLeadingString~regexp/syntax.reuse~regexp/syntax.sliceType %(*regexp/syntax.parser).leadingString ��	parser.ptr.prototype.leadingString = function(re) {
		var p, re, x;
		p = this;
    		if ((re.Op === 18) && re.Sub.$length > 0) {
  t			re = (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
    		}
    		if (!((re.Op === 3))) {
  t@			return [sliceType.nil, 0];
    		}
  tR		return [re.Rune, (re.Flags & 1) >>> 0];
    	};
	parser.prototype.leadingString = function(re) { return this.$val.leadingString(re); };
parserleadingString~regexp/syntax.parserregexp/syntax.sliceType +(*regexp/syntax.parser).removeLeadingString �f	parser.ptr.prototype.removeLeadingString = function(re, n) {
		var _1, n, old, p, re, sub, x, x$1, x$2;
		p = this;
    		if ((re.Op === 18) && re.Sub.$length > 0) {
  u�			sub = (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
  u�			sub = p.removeLeadingString(sub, n);
  u�			(x$1 = re.Sub, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0] = sub));
    			if (sub.Op === 2) {
  v$				p.reuse(sub);
    				_1 = re.Sub.$length;
    				if ((_1 === (0)) || (_1 === (1))) {
  vy					re.Op = 2;
  v�					re.Sub = sliceType$5.nil;
    				} else if (_1 === (2)) {
  v�					old = re;
  v�					re = (x$2 = re.Sub, (1 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 1]));
  v�					p.reuse(old);
    				} else {
  v�					$copySlice(re.Sub, $subslice(re.Sub, 1));
  w						re.Sub = $subslice(re.Sub, 0, (re.Sub.$length - 1 >> 0));
    				}
    			}
  w4			return re;
    		}
    		if (re.Op === 3) {
  w]			re.Rune = $subslice(re.Rune, 0, $copySlice(re.Rune, $subslice(re.Rune, n)));
    			if (re.Rune.$length === 0) {
  w�				re.Op = 2;
    			}
    		}
  w�		return re;
    	};
	parser.prototype.removeLeadingString = function(re, n) { return this.$val.removeLeadingString(re, n); };
parserremoveLeadingString~regexp/syntax.parser"regexp/syntax.removeLeadingString~regexp/syntax.reuse~regexp/syntax.sliceType$5 %(*regexp/syntax.parser).leadingRegexp �	parser.ptr.prototype.leadingRegexp = function(re) {
		var p, re, sub, x;
		p = this;
    		if (re.Op === 2) {
  x�			return ptrType$1.nil;
    		}
    		if ((re.Op === 18) && re.Sub.$length > 0) {
  x�			sub = (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
    			if (sub.Op === 2) {
  y
				return ptrType$1.nil;
    			}
  y			return sub;
    		}
  y*		return re;
    	};
	parser.prototype.leadingRegexp = function(re) { return this.$val.leadingRegexp(re); };
parserleadingRegexp~regexp/syntax.parserregexp/syntax.ptrType$1 +(*regexp/syntax.parser).removeLeadingRegexp ��	parser.ptr.prototype.removeLeadingRegexp = function(re, reuse) {
		var _1, old, p, re, reuse, x, x$1;
		p = this;
    		if ((re.Op === 18) && re.Sub.$length > 0) {
    			if (reuse) {
  zl				p.reuse((x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])));
    			}
  z�			re.Sub = $subslice(re.Sub, 0, $copySlice(re.Sub, $subslice(re.Sub, 1)));
    			_1 = re.Sub.$length;
    			if (_1 === (0)) {
  z�				re.Op = 2;
  z�				re.Sub = sliceType$5.nil;
    			} else if (_1 === (1)) {
  {				old = re;
  {				re = (x$1 = re.Sub, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0]));
  {%				p.reuse(old);
    			}
  {8			return re;
    		}
    		if (reuse) {
  {S			p.reuse(re);
    		}
  {c		return p.newRegexp(2);
    	};
	parser.prototype.removeLeadingRegexp = function(re, reuse) { return this.$val.removeLeadingRegexp(re, reuse); };
parserremoveLeadingRegexp~regexp/syntax.newRegexp~regexp/syntax.parserregexp/syntax.reuse~regexp/syntax.sliceType$5 regexp/syntax.literalRegexpregexp/syntaxliteralRegexp literalRegexp��	literalRegexp = function(s, flags) {
		var _i, _ref, _rune, c, flags, re, s;
  {�		re = new Regexp.ptr(3, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
  {�		re.Flags = flags;
  {�		re.Rune = $subslice(new sliceType(re.Rune0), 0, 0);
  |+		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			c = _rune[0];
    			if (re.Rune.$length >= re.Rune.$capacity) {
  |�				re.Rune = (new sliceType($stringToRunes(s)));
  |�				break;
    			}
  |�			re.Rune = $append(re.Rune, c);
    			_i += _rune[1];
		}
  |�		return re;
    	};
literalRegexpregexp/syntax.Regexpregexp/syntax.arrayTyperegexp/syntax.arrayType$1regexp/syntax.literalRegexpregexp/syntax.ptrType$1regexp/syntax.sliceTyperegexp/syntax.sliceType$5 regexp/syntax.Parseregexp/syntaxParse Parse�0�	Parse = function(s, flags) {
		var _1, _2, _3, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _struct, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, after, after$1, before, before$1, c, c$1, err, err$1, err$2, err$3, flags, i, lastRepeat, lit, max, min, n, ok, op, p, r, r$1, re, repeat, rest, rest$1, rest$2, s, t, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _struct = $f._struct; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; after = $f.after; after$1 = $f.after$1; before = $f.before; before$1 = $f.before$1; c = $f.c; c$1 = $f.c$1; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; flags = $f.flags; i = $f.i; lastRepeat = $f.lastRepeat; lit = $f.lit; max = $f.max; min = $f.min; n = $f.n; ok = $f.ok; op = $f.op; p = $f.p; r = $f.r; r$1 = $f.r$1; re = $f.re; repeat = $f.repeat; rest = $f.rest; rest$1 = $f.rest$1; rest$2 = $f.rest$2; s = $f.s; t = $f.t; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (!((((flags & 2) >>> 0) === 0))) {
  ~4			err = checkUTF8(s);
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  ~Y				$s = -1; return [ptrType$1.nil, err];
    			}
  ~o			$s = -1; return [literalRegexp(s, flags), $ifaceNil];
    		}
  ~�		p = new parser.ptr(0, sliceType$5.nil, ptrType$1.nil, 0, "", sliceType.nil);
  ~�		err$1 = $ifaceNil;
  ~�		c = 0;
  ~�		op = 0;
  		lastRepeat = "";
  !		p.flags = flags;
  2		p.wholeRegexp = s;
  E		t = s;
  M		/* while (true) { */ case 1:
			/* if (!(!(t === ""))) { break; } */ if(!(!(t === ""))) { $s = 2; continue; }
  ]			repeat = "";
    				_1 = t.charCodeAt(0);
  �				/* */ if (_1 === (40)) { $s = 4; continue; }
				/* */ if (_1 === (124)) { $s = 5; continue; }
				/* */ if (_1 === (41)) { $s = 6; continue; }
				/* */ if (_1 === (94)) { $s = 7; continue; }
				/* */ if (_1 === (36)) { $s = 8; continue; }
				/* */ if (_1 === (46)) { $s = 9; continue; }
				/* */ if (_1 === (91)) { $s = 10; continue; }
				/* */ if ((_1 === (42)) || (_1 === (43)) || (_1 === (63))) { $s = 11; continue; }
				/* */ if (_1 === (123)) { $s = 12; continue; }
				/* */ if (_1 === (92)) { $s = 13; continue; }
				/* */ $s = 14; continue;
    				/* if (_1 === (40)) { */ case 4:
    					if (!((((p.flags & 64) >>> 0) === 0)) && t.length >= 2 && (t.charCodeAt(1) === 63)) {
  �a						_tuple = p.parsePerlFlags(t);
						t = _tuple[0];
						err$1 = _tuple[1];
    						if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��							$s = -1; return [ptrType$1.nil, err$1];
    						}
  ��						/* break; */ $s = 3; continue;
    					}
  ��					p.numCap = p.numCap + (1) >> 0;
  ��					p.op(128).Cap = p.numCap;
  ��					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (124)) { */ case 5:
  �					_r = p.parseVerticalBar(); /* */ $s = 16; case 16: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					err$1 = _r;
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �4						$s = -1; return [ptrType$1.nil, err$1];
    					}
  �L					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (41)) { */ case 6:
  �h					_r$1 = p.parseRightParen(); /* */ $s = 17; case 17: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					err$1 = _r$1;
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��						$s = -1; return [ptrType$1.nil, err$1];
    					}
  ��					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (94)) { */ case 7:
    					if (!((((p.flags & 16) >>> 0) === 0))) {
  ��						p.op(9);
    					} else {
  �						p.op(7);
    					}
  �					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (36)) { */ case 8:
    					if (!((((p.flags & 16) >>> 0) === 0))) {
    						_struct = p.op(10);
    						_struct.Flags = (_struct.Flags | (256)) >>> 0;
    					} else {
  ��						p.op(8);
    					}
  ��					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (46)) { */ case 9:
    					if (!((((p.flags & 8) >>> 0) === 0))) {
  ��						p.op(6);
    					} else {
  ��						p.op(5);
    					}
  �					t = $substring(t, 1);
    					$s = 15; continue;
    				/* } else if (_1 === (91)) { */ case 10:
  �/					_r$2 = p.parseClass(t); /* */ $s = 18; case 18: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_tuple$1 = _r$2;
					t = _tuple$1[0];
					err$1 = _tuple$1[1];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �Z						$s = -1; return [ptrType$1.nil, err$1];
    					}
    					$s = 15; continue;
    				/* } else if ((_1 === (42)) || (_1 === (43)) || (_1 === (63))) { */ case 11:
  ��					before = t;
    					_2 = t.charCodeAt(0);
    					if (_2 === (42)) {
  ��						op = 14;
    					} else if (_2 === (43)) {
  ��						op = 15;
    					} else if (_2 === (63)) {
  ��						op = 16;
    					}
  �					after = $substring(t, 1);
  �					_tuple$2 = p.repeat(op, 0, 0, before, after, lastRepeat);
					after = _tuple$2[0];
					err$1 = _tuple$2[1];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �g						$s = -1; return [ptrType$1.nil, err$1];
    					}
  �					repeat = before;
  ��					t = after;
    					$s = 15; continue;
    				/* } else if (_1 === (123)) { */ case 12:
  ��					op = 17;
  ��					before$1 = t;
  ��					_tuple$3 = p.parseRepeat(t);
					min = _tuple$3[0];
					max = _tuple$3[1];
					after$1 = _tuple$3[2];
					ok = _tuple$3[3];
    					if (!ok) {
  �:						p.literal(123);
  �M						t = $substring(t, 1);
  �[						/* break; */ $s = 3; continue;
    					}
    					if (min < 0 || min > 1000 || max > 1000 || max >= 0 && min > max) {
  ��						$s = -1; return [ptrType$1.nil, new Error.ptr("invalid repeat count", $substring(before$1, 0, (before$1.length - after$1.length >> 0)))];
    					}
  �B					_tuple$4 = p.repeat(op, min, max, before$1, after$1, lastRepeat);
					after$1 = _tuple$4[0];
					err$1 = _tuple$4[1];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��						$s = -1; return [ptrType$1.nil, err$1];
    					}
  ��					repeat = before$1;
  ��					t = after$1;
    					$s = 15; continue;
    				/* } else if (_1 === (92)) { */ case 13:
    					if (!((((p.flags & 64) >>> 0) === 0)) && t.length >= 2) {
    						_3 = t.charCodeAt(1);
    						if (_3 === (65)) {
  �$							p.op(9);
  �;							t = $substring(t, 2);
  �J							/* break BigSwitch; */ $s = 3; continue s;
    						} else if (_3 === (98)) {
  �m							p.op(11);
  ��							t = $substring(t, 2);
  ��							/* break BigSwitch; */ $s = 3; continue s;
    						} else if (_3 === (66)) {
  ��							p.op(12);
  ��							t = $substring(t, 2);
  ��							/* break BigSwitch; */ $s = 3; continue s;
    						} else if (_3 === (67)) {
  �'							$s = -1; return [ptrType$1.nil, new Error.ptr("invalid escape sequence", $substring(t, 0, 2))];
    						} else if (_3 === (81)) {
  ��							lit = "";
  ��							i = strings.Index(t, "\\E");
    							if (i < 0) {
  ��								lit = $substring(t, 2);
  ��								t = "";
    							} else {
  �								lit = $substring(t, 2, i);
  �								t = $substring(t, (i + 2 >> 0));
    							}
  �.							while (true) {
								if (!(!(lit === ""))) { break; }
  �D								_tuple$5 = nextRune(lit);
								c$1 = _tuple$5[0];
								rest = _tuple$5[1];
								err$2 = _tuple$5[2];
    								if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  �									$s = -1; return [ptrType$1.nil, err$2];
    								}
  ��								p.literal(c$1);
  ��								lit = rest;
    							}
  ��							/* break BigSwitch; */ $s = 3; continue s;
    						} else if (_3 === (122)) {
  ��							p.op(10);
  ��							t = $substring(t, 2);
  �							/* break BigSwitch; */ $s = 3; continue s;
    						}
    					}
  �-					re = p.newRegexp(4);
  �O					re.Flags = p.flags;
  ��					/* */ if (t.length >= 2 && ((t.charCodeAt(1) === 112) || (t.charCodeAt(1) === 80))) { $s = 19; continue; }
					/* */ $s = 20; continue;
    					/* if (t.length >= 2 && ((t.charCodeAt(1) === 112) || (t.charCodeAt(1) === 80))) { */ case 19:
  ��						_r$3 = p.parseUnicodeClass(t, $subslice(new sliceType(re.Rune0), 0, 0)); /* */ $s = 21; case 21: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						_tuple$6 = _r$3;
						r = _tuple$6[0];
						rest$1 = _tuple$6[1];
						err$3 = _tuple$6[2];
    						if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  �							$s = -1; return [ptrType$1.nil, err$3];
    						}
    						if (!(r === sliceType.nil)) {
  �J							re.Rune = r;
  �[							t = rest$1;
  �i							p.push(re);
  �y							/* break BigSwitch; */ $s = 3; continue s;
    						}
    					/* } */ case 20:
  ��					_r$4 = p.parsePerlClassEscape(t, $subslice(new sliceType(re.Rune0), 0, 0)); /* */ $s = 22; case 22: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					_tuple$7 = _r$4;
					r$1 = _tuple$7[0];
					rest$2 = _tuple$7[1];
    					if (!(r$1 === sliceType.nil)) {
  �						re.Rune = r$1;
  �						t = rest$2;
  �						p.push(re);
  �-						/* break BigSwitch; */ $s = 3; continue s;
    					}
  �E					p.reuse(re);
  ��					_tuple$8 = p.parseEscape(t);
					c = _tuple$8[0];
					t = _tuple$8[1];
					err$1 = _tuple$8[2];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��						$s = -1; return [ptrType$1.nil, err$1];
    					}
  ��					p.literal(c);
    					$s = 15; continue;
				/* } else { */ case 14:
  �					_tuple$9 = nextRune(t);
					c = _tuple$9[0];
					t = _tuple$9[1];
					err$1 = _tuple$9[2];
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �						$s = -1; return [ptrType$1.nil, err$1];
    					}
  �					p.literal(c);
    				/* } */ case 15:
    			case 3:
  ��			lastRepeat = repeat;
    		$s = 1; continue;
		case 2:
  ��		_r$5 = p.concat(); /* */ $s = 23; case 23: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_r$5;
  ��		_r$6 = p.swapVerticalBar(); /* */ $s = 26; case 26: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		/* */ if (_r$6) { $s = 24; continue; }
		/* */ $s = 25; continue;
    		/* if (_r$6) { */ case 24:
  �0			p.stack = $subslice(p.stack, 0, (p.stack.$length - 1 >> 0));
    		/* } */ case 25:
  �W		_r$7 = p.alternate(); /* */ $s = 27; case 27: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_r$7;
  �g		n = p.stack.$length;
    		if (!((n === 1))) {
  ��			$s = -1; return [ptrType$1.nil, new Error.ptr("missing closing )", s)];
    		}
  ��		$s = -1; return [(x = p.stack, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Parse }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._struct = _struct; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f.after = after; $f.after$1 = after$1; $f.before = before; $f.before$1 = before$1; $f.c = c; $f.c$1 = c$1; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.flags = flags; $f.i = i; $f.lastRepeat = lastRepeat; $f.lit = lit; $f.max = max; $f.min = min; $f.n = n; $f.ok = ok; $f.op = op; $f.p = p; $f.r = r; $f.r$1 = r$1; $f.re = re; $f.repeat = repeat; $f.rest = rest; $f.rest$1 = rest$1; $f.rest$2 = rest$2; $f.s = s; $f.t = t; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Parse = Parse;
Parseregexp/syntax.Errorregexp/syntax.Parseregexp/syntax.alternate~regexp/syntax.checkUTF8regexp/syntax.concat~regexp/syntax.literalRegexpregexp/syntax.literal~regexp/syntax.newRegexp~regexp/syntax.nextRuneregexp/syntax.op~regexp/syntax.parseClass~regexp/syntax.parseEscape~#regexp/syntax.parsePerlClassEscape~regexp/syntax.parsePerlFlags~regexp/syntax.parseRepeat~regexp/syntax.parseRightParen~ regexp/syntax.parseUnicodeClass~regexp/syntax.parseVerticalBar~regexp/syntax.parserregexp/syntax.ptrType$1regexp/syntax.push~regexp/syntax.repeat~regexp/syntax.reuse~regexp/syntax.sliceTyperegexp/syntax.sliceType$5regexp/syntax.swapVerticalBar~strings.Index #(*regexp/syntax.parser).parseRepeat �	parser.ptr.prototype.parseRepeat = function(s) {
		var _tuple, _tuple$1, max, min, ok, ok1, p, rest, s;
		min = 0;
		max = 0;
		rest = "";
		ok = false;
		p = this;
    		if (s === "" || !((s.charCodeAt(0) === 123))) {
  �			return [min, max, rest, ok];
    		}
  �		s = $substring(s, 1);
  �)		ok1 = false;
  �6		_tuple = p.parseInt(s);
		min = _tuple[0];
		s = _tuple[1];
		ok1 = _tuple[2];
    		if (!ok1) {
  �\			return [min, max, rest, ok];
    		}
    		if (s === "") {
  �v			return [min, max, rest, ok];
    		}
    		if (!((s.charCodeAt(0) === 44))) {
  ��			max = min;
    		} else {
  ��			s = $substring(s, 1);
    			if (s === "") {
  ��				return [min, max, rest, ok];
    			}
    			if (s.charCodeAt(0) === 125) {
  ��				max = -1;
    			} else {
  ��				_tuple$1 = p.parseInt(s);
				max = _tuple$1[0];
				s = _tuple$1[1];
				ok1 = _tuple$1[2];
    				if (!ok1) {
  �#					return [min, max, rest, ok];
    				} else if (max < 0) {
  �i					min = -1;
    				}
    			}
    		}
    		if (s === "" || !((s.charCodeAt(0) === 125))) {
  ��			return [min, max, rest, ok];
    		}
  ��		rest = $substring(s, 1);
  ��		ok = true;
  ��		return [min, max, rest, ok];
    	};
	parser.prototype.parseRepeat = function(s) { return this.$val.parseRepeat(s); };
parserparseRepeat~regexp/syntax.parseInt~regexp/syntax.parser &(*regexp/syntax.parser).parsePerlFlags ��	parser.ptr.prototype.parsePerlFlags = function(s) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, c, capture, end, err, flags, name, p, re, rest, s, sawFlag, sign, t;
		rest = "";
		err = $ifaceNil;
		p = this;
  ��		t = s;
    		if (t.length > 4 && (t.charCodeAt(2) === 80) && (t.charCodeAt(3) === 60)) {
  �8			end = strings.IndexRune(t, 62);
    			if (end < 0) {
  �n				err = checkUTF8(t);
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					_tmp = "";
					_tmp$1 = err;
					rest = _tmp;
					err = _tmp$1;
					return [rest, err];
    				}
    				_tmp$2 = "";
				_tmp$3 = new Error.ptr("invalid named capture", s);
				rest = _tmp$2;
				err = _tmp$3;
				return [rest, err];
    			}
  ��			capture = $substring(t, 0, (end + 1 >> 0));
  �			name = $substring(t, 4, end);
  �(			err = checkUTF8(name);
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$4 = "";
				_tmp$5 = err;
				rest = _tmp$4;
				err = _tmp$5;
				return [rest, err];
    			}
    			if (!isValidCaptureName(name)) {
    				_tmp$6 = "";
				_tmp$7 = new Error.ptr("invalid named capture", capture);
				rest = _tmp$6;
				err = _tmp$7;
				return [rest, err];
    			}
  ��			p.numCap = p.numCap + (1) >> 0;
  ��			re = p.op(128);
  �			re.Cap = p.numCap;
  �"			re.Name = name;
    			_tmp$8 = $substring(t, (end + 1 >> 0));
			_tmp$9 = $ifaceNil;
			rest = _tmp$8;
			err = _tmp$9;
			return [rest, err];
    		}
  ��		c = 0;
  ��		t = $substring(t, 2);
  ��		flags = p.flags;
  ��		sign = 1;
  ��		sawFlag = false;
  ��		Loop:
		while (true) {
			if (!(!(t === ""))) { break; }
  ��			_tuple = nextRune(t);
			c = _tuple[0];
			t = _tuple[1];
			err = _tuple[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$10 = "";
				_tmp$11 = err;
				rest = _tmp$10;
				err = _tmp$11;
				return [rest, err];
    			}
    			_1 = c;
    			if (_1 === (105)) {
  �o				flags = (flags | (1)) >>> 0;
  ��				sawFlag = true;
    			} else if (_1 === (109)) {
  ��				flags = (flags & ~(16)) << 16 >>> 16;
  ��				sawFlag = true;
    			} else if (_1 === (115)) {
  ��				flags = (flags | (8)) >>> 0;
  ��				sawFlag = true;
    			} else if (_1 === (85)) {
  �				flags = (flags | (32)) >>> 0;
  �				sawFlag = true;
    			} else if (_1 === (45)) {
    				if (sign < 0) {
  �e					break Loop;
    				}
  �x				sign = -1;
  ��				flags = ~flags << 16 >>> 16;
  �				sawFlag = false;
    			} else if ((_1 === (58)) || (_1 === (41))) {
    				if (sign < 0) {
    					if (!sawFlag) {
  ��						break Loop;
    					}
  ��					flags = ~flags << 16 >>> 16;
    				}
    				if (c === 58) {
  ��					p.op(128);
    				}
  ��				p.flags = flags;
    				_tmp$12 = t;
				_tmp$13 = $ifaceNil;
				rest = _tmp$12;
				err = _tmp$13;
				return [rest, err];
    			} else {
  �H				break Loop;
    			}
    		}
    		_tmp$14 = "";
		_tmp$15 = new Error.ptr("invalid or unsupported Perl syntax", $substring(s, 0, (s.length - t.length >> 0)));
		rest = _tmp$14;
		err = _tmp$15;
		return [rest, err];
    	};
	parser.prototype.parsePerlFlags = function(s) { return this.$val.parsePerlFlags(s); };
parserparsePerlFlags~regexp/syntax.Errorregexp/syntax.checkUTF8 regexp/syntax.isValidCaptureNameregexp/syntax.nextRuneregexp/syntax.op~regexp/syntax.parserstrings.IndexRune  regexp/syntax.isValidCaptureNameregexp/syntaxisValidCaptureName isValidCaptureName��	isValidCaptureName = function(name) {
		var _i, _ref, _rune, c, name;
    		if (name === "") {
  �]			return false;
    		}
  �n		_ref = name;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			c = _rune[0];
    			if (!((c === 95)) && !isalnum(c)) {
  ��				return false;
    			}
    			_i += _rune[1];
		}
  ��		return true;
    	};
isValidCaptureName regexp/syntax.isValidCaptureNameregexp/syntax.isalnum  (*regexp/syntax.parser).parseInt ��	parser.ptr.prototype.parseInt = function(s) {
		var i, n, ok, p, rest, s, t;
		n = 0;
		rest = "";
		ok = false;
		p = this;
    		if (s === "" || s.charCodeAt(0) < 48 || 57 < s.charCodeAt(0)) {
  �c			return [n, rest, ok];
    		}
    		if (s.length >= 2 && (s.charCodeAt(0) === 48) && 48 <= s.charCodeAt(1) && s.charCodeAt(1) <= 57) {
  ��			return [n, rest, ok];
    		}
  ��		t = s;
  ��		while (true) {
			if (!(!(s === "") && 48 <= s.charCodeAt(0) && s.charCodeAt(0) <= 57)) { break; }
  �			s = $substring(s, 1);
    		}
  �		rest = s;
  �#		ok = true;
  �N		t = $substring(t, 0, (t.length - s.length >> 0));
  �i		i = 0;
		while (true) {
			if (!(i < t.length)) { break; }
    			if (n >= 100000000) {
  ��				n = -1;
  ��				break;
    			}
  ��			n = (($imul(n, 10)) + ((t.charCodeAt(i) >> 0)) >> 0) - 48 >> 0;
  �}			i = i + (1) >> 0;
    		}
  ��		return [n, rest, ok];
    	};
	parser.prototype.parseInt = function(s) { return this.$val.parseInt(s); };
parser	parseInt~regexp/syntax.parser regexp/syntax.isCharClassregexp/syntaxisCharClass isCharClass��	isCharClass = function(re) {
		var re;
  �x		return (re.Op === 3) && (re.Rune.$length === 1) || (re.Op === 4) || (re.Op === 5) || (re.Op === 6);
    	};
isCharClassregexp/syntax.isCharClass regexp/syntax.matchRuneregexp/syntax	matchRune 	matchRune��	matchRune = function(re, r) {
		var _1, i, r, re, x, x$1, x$2, x$3;
    		_1 = re.Op;
    		if (_1 === (3)) {
  �Z			return (re.Rune.$length === 1) && ((x = re.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) === r);
    		} else if (_1 === (4)) {
  ��			i = 0;
			while (true) {
				if (!(i < re.Rune.$length)) { break; }
    				if ((x$1 = re.Rune, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])) <= r && r <= (x$2 = re.Rune, x$3 = i + 1 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3]))) {
  ��					return true;
    				}
  ��				i = i + (2) >> 0;
    			}
  �
			return false;
    		} else if (_1 === (5)) {
  �/			return !((r === 10));
    		} else if (_1 === (6)) {
  �S			return true;
    		}
  �c		return false;
    	};
	matchRuneregexp/syntax.matchRune ((*regexp/syntax.parser).parseVerticalBar �	parser.ptr.prototype.parseVerticalBar = function() {
		var _r, _r$1, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ��		_r = p.concat(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  ��		_r$1 = p.swapVerticalBar(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (!_r$1) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!_r$1) { */ case 2:
  ��			p.op(129);
    		/* } */ case 3:
  ��		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parseVerticalBar }; } $f._r = _r; $f._r$1 = _r$1; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parseVerticalBar = function() { return this.$val.parseVerticalBar(); };
parserparseVerticalBar~regexp/syntax.concat~regexp/syntax.op~regexp/syntax.parserregexp/syntax.swapVerticalBar~ regexp/syntax.mergeCharClassregexp/syntaxmergeCharClass mergeCharClass�Q	mergeCharClass = function(dst, src) {
		var _1, dst, src, x, x$1, x$2, x$3, x$4;
  ��		switch (0) { default:
    			_1 = dst.Op;
    			if (_1 === (6)) {
    			} else if (_1 === (5)) {
    				if (matchRune(src, 10)) {
  �#					dst.Op = 6;
    				}
    			} else if (_1 === (4)) {
    				if (src.Op === 3) {
  ��					dst.Rune = appendLiteral(dst.Rune, (x = src.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])), src.Flags);
    				} else {
  ��					dst.Rune = appendClass(dst.Rune, src.Rune);
    				}
    			} else if (_1 === (3)) {
    				if (((x$1 = src.Rune, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0])) === (x$2 = dst.Rune, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0]))) && (src.Flags === dst.Flags)) {
  �z					break;
    				}
  ��				dst.Op = 4;
  ��				dst.Rune = appendLiteral($subslice(dst.Rune, 0, 0), (x$3 = dst.Rune, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])), dst.Flags);
  ��				dst.Rune = appendLiteral(dst.Rune, (x$4 = src.Rune, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0])), src.Flags);
    			}
    		}
    	};
mergeCharClassregexp/syntax.appendClassregexp/syntax.appendLiteralregexp/syntax.matchRuneregexp/syntax.mergeCharClass '(*regexp/syntax.parser).swapVerticalBar �(	parser.ptr.prototype.swapVerticalBar = function() {
		var _tmp, _tmp$1, n, p, re1, re1$1, re2, re3, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; n = $f.n; p = $f.p; re1 = $f.re1; re1$1 = $f.re1$1; re2 = $f.re2; re3 = $f.re3; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$16 = $f.x$16; x$17 = $f.x$17; x$18 = $f.x$18; x$19 = $f.x$19; x$2 = $f.x$2; x$20 = $f.x$20; x$21 = $f.x$21; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �I		n = p.stack.$length;
    		if (n >= 3 && ((x = p.stack, x$1 = n - 2 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Op === 129) && isCharClass((x$2 = p.stack, x$3 = n - 1 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3]))) && isCharClass((x$4 = p.stack, x$5 = n - 3 >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5])))) {
  ��			re1 = (x$6 = p.stack, x$7 = n - 1 >> 0, ((x$7 < 0 || x$7 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + x$7]));
  ��			re3 = (x$8 = p.stack, x$9 = n - 3 >> 0, ((x$9 < 0 || x$9 >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + x$9]));
    			if (re1.Op > re3.Op) {
  �7				_tmp = re3;
				_tmp$1 = re1;
				re1 = _tmp;
				re3 = _tmp$1;
  �N				(x$10 = p.stack, x$11 = n - 3 >> 0, ((x$11 < 0 || x$11 >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + x$11] = re3));
    			}
  �g			mergeCharClass(re3, re1);
  ��			p.reuse(re1);
  ��			p.stack = $subslice(p.stack, 0, (n - 1 >> 0));
  ��			$s = -1; return true;
    		}
  ��		/* */ if (n >= 2) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n >= 2) { */ case 1:
  ��			re1$1 = (x$12 = p.stack, x$13 = n - 1 >> 0, ((x$13 < 0 || x$13 >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + x$13]));
  ��			re2 = (x$14 = p.stack, x$15 = n - 2 >> 0, ((x$15 < 0 || x$15 >= x$14.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$14.$array[x$14.$offset + x$15]));
  ��			/* */ if (re2.Op === 129) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (re2.Op === 129) { */ case 3:
  �				/* */ if (n >= 3) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (n >= 3) { */ case 5:
  �_					$r = cleanAlt((x$16 = p.stack, x$17 = n - 3 >> 0, ((x$17 < 0 || x$17 >= x$16.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$16.$array[x$16.$offset + x$17]))); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 6:
  �~				(x$18 = p.stack, x$19 = n - 2 >> 0, ((x$19 < 0 || x$19 >= x$18.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$18.$array[x$18.$offset + x$19] = re1$1));
  ��				(x$20 = p.stack, x$21 = n - 1 >> 0, ((x$21 < 0 || x$21 >= x$20.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$20.$array[x$20.$offset + x$21] = re2));
  ��				$s = -1; return true;
    			/* } */ case 4:
    		/* } */ case 2:
  ��		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.swapVerticalBar }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.n = n; $f.p = p; $f.re1 = re1; $f.re1$1 = re1$1; $f.re2 = re2; $f.re3 = re3; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$16 = x$16; $f.x$17 = x$17; $f.x$18 = x$18; $f.x$19 = x$19; $f.x$2 = x$2; $f.x$20 = x$20; $f.x$21 = x$21; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.swapVerticalBar = function() { return this.$val.swapVerticalBar(); };
parserswapVerticalBar~regexp/syntax.cleanAltregexp/syntax.isCharClassregexp/syntax.mergeCharClassregexp/syntax.parserregexp/syntax.reuse~ '(*regexp/syntax.parser).parseRightParen �	�	parser.ptr.prototype.parseRightParen = function() {
		var _r, _r$1, _r$2, n, p, re1, re2, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; n = $f.n; p = $f.p; re1 = $f.re1; re2 = $f.re2; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �'		_r = p.concat(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  �3		_r$1 = p.swapVerticalBar(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (_r$1) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_r$1) { */ case 2:
  �d			p.stack = $subslice(p.stack, 0, (p.stack.$length - 1 >> 0));
    		/* } */ case 3:
  ��		_r$2 = p.alternate(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
  ��		n = p.stack.$length;
    		if (n < 2) {
  ��			$s = -1; return new Error.ptr("unexpected )", p.wholeRegexp);
    		}
  ��		re1 = (x = p.stack, x$1 = n - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  �		re2 = (x$2 = p.stack, x$3 = n - 2 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3]));
  �		p.stack = $subslice(p.stack, 0, (n - 2 >> 0));
    		if (!((re2.Op === 128))) {
  �P			$s = -1; return new Error.ptr("unexpected )", p.wholeRegexp);
    		}
  ��		p.flags = re2.Flags;
    		if (re2.Cap === 0) {
  ��			p.push(re1);
    		} else {
  �			re2.Op = 13;
  �			re2.Sub = $subslice(new sliceType$5(re2.Sub0), 0, 1);
  �0			(x$4 = re2.Sub, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0] = re1));
  �C			p.push(re2);
    		}
  �S		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parseRightParen }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.n = n; $f.p = p; $f.re1 = re1; $f.re2 = re2; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parseRightParen = function() { return this.$val.parseRightParen(); };
parserparseRightParen~regexp/syntax.Errorregexp/syntax.alternate~regexp/syntax.concat~regexp/syntax.parserregexp/syntax.push~regexp/syntax.sliceType$5regexp/syntax.swapVerticalBar~ #(*regexp/syntax.parser).parseEscape ��	parser.ptr.prototype.parseEscape = function(s) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$40, _tmp$41, _tmp$42, _tmp$43, _tmp$44, _tmp$45, _tmp$46, _tmp$47, _tmp$48, _tmp$49, _tmp$5, _tmp$50, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, c, err, i, nhex, p, r, rest, s, t, v, x, y;
		r = 0;
		rest = "";
		err = $ifaceNil;
		p = this;
  �		t = $substring(s, 1);
    		if (t === "") {
    			_tmp = 0;
			_tmp$1 = "";
			_tmp$2 = new Error.ptr("trailing backslash at end of expression", "");
			r = _tmp;
			rest = _tmp$1;
			err = _tmp$2;
			return [r, rest, err];
    		}
  �R		_tuple = nextRune(t);
		c = _tuple[0];
		t = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$3 = 0;
			_tmp$4 = "";
			_tmp$5 = err;
			r = _tmp$3;
			rest = _tmp$4;
			err = _tmp$5;
			return [r, rest, err];
    		}
  ��		Switch:
		switch (0) { default:
    			_1 = c;
    			if ((_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) {
    				if (t === "" || t.charCodeAt(0) < 48 || t.charCodeAt(0) > 55) {
  ��					break;
    				}
  ��				r = c - 48 >> 0;
  ��				i = 1;
				while (true) {
					if (!(i < 3)) { break; }
    					if (t === "" || t.charCodeAt(0) < 48 || t.charCodeAt(0) > 55) {
  �9						break;
    					}
  �G					r = (($imul(r, 8)) + ((t.charCodeAt(0) >> 0)) >> 0) - 48 >> 0;
  �e					t = $substring(t, 1);
  �					i = i + (1) >> 0;
    				}
    				_tmp$6 = r;
				_tmp$7 = t;
				_tmp$8 = $ifaceNil;
				r = _tmp$6;
				rest = _tmp$7;
				err = _tmp$8;
				return [r, rest, err];
    			} else if (_1 === (48)) {
  ��				r = c - 48 >> 0;
  ��				i = 1;
				while (true) {
					if (!(i < 3)) { break; }
    					if (t === "" || t.charCodeAt(0) < 48 || t.charCodeAt(0) > 55) {
  �9						break;
    					}
  �G					r = (($imul(r, 8)) + ((t.charCodeAt(0) >> 0)) >> 0) - 48 >> 0;
  �e					t = $substring(t, 1);
  �					i = i + (1) >> 0;
    				}
    				_tmp$9 = r;
				_tmp$10 = t;
				_tmp$11 = $ifaceNil;
				r = _tmp$9;
				rest = _tmp$10;
				err = _tmp$11;
				return [r, rest, err];
    			} else if (_1 === (120)) {
    				if (t === "") {
  ��					break;
    				}
  ��				_tuple$1 = nextRune(t);
				c = _tuple$1[0];
				t = _tuple$1[1];
				err = _tuple$1[2];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					_tmp$12 = 0;
					_tmp$13 = "";
					_tmp$14 = err;
					r = _tmp$12;
					rest = _tmp$13;
					err = _tmp$14;
					return [r, rest, err];
    				}
    				if (c === 123) {
  ��					nhex = 0;
  ��					r = 0;
  ��					while (true) {
    						if (t === "") {
  �							break Switch;
    						}
  �!						_tuple$2 = nextRune(t);
						c = _tuple$2[0];
						t = _tuple$2[1];
						err = _tuple$2[2];
    						if (!($interfaceIsEqual(err, $ifaceNil))) {
    							_tmp$15 = 0;
							_tmp$16 = "";
							_tmp$17 = err;
							r = _tmp$15;
							rest = _tmp$16;
							err = _tmp$17;
							return [r, rest, err];
    						}
    						if (c === 125) {
  �{							break;
    						}
  ��						v = unhex(c);
    						if (v < 0) {
  ��							break Switch;
    						}
  ��						r = ($imul(r, 16)) + v >> 0;
    						if (r > 1114111) {
  ��							break Switch;
    						}
  �
						nhex = nhex + (1) >> 0;
    					}
    					if (nhex === 0) {
  �,						break Switch;
    					}
    					_tmp$18 = r;
					_tmp$19 = t;
					_tmp$20 = $ifaceNil;
					r = _tmp$18;
					rest = _tmp$19;
					err = _tmp$20;
					return [r, rest, err];
    				}
  �y				x = unhex(c);
  ��				_tuple$3 = nextRune(t);
				c = _tuple$3[0];
				t = _tuple$3[1];
				err = _tuple$3[2];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					_tmp$21 = 0;
					_tmp$22 = "";
					_tmp$23 = err;
					r = _tmp$21;
					rest = _tmp$22;
					err = _tmp$23;
					return [r, rest, err];
    				}
  ��				y = unhex(c);
    				if (x < 0 || y < 0) {
  ��					break;
    				}
    				_tmp$24 = ($imul(x, 16)) + y >> 0;
				_tmp$25 = t;
				_tmp$26 = $ifaceNil;
				r = _tmp$24;
				rest = _tmp$25;
				err = _tmp$26;
				return [r, rest, err];
    			} else if (_1 === (97)) {
    				_tmp$27 = 7;
				_tmp$28 = t;
				_tmp$29 = err;
				r = _tmp$27;
				rest = _tmp$28;
				err = _tmp$29;
				return [r, rest, err];
    			} else if (_1 === (102)) {
    				_tmp$30 = 12;
				_tmp$31 = t;
				_tmp$32 = err;
				r = _tmp$30;
				rest = _tmp$31;
				err = _tmp$32;
				return [r, rest, err];
    			} else if (_1 === (110)) {
    				_tmp$33 = 10;
				_tmp$34 = t;
				_tmp$35 = err;
				r = _tmp$33;
				rest = _tmp$34;
				err = _tmp$35;
				return [r, rest, err];
    			} else if (_1 === (114)) {
    				_tmp$36 = 13;
				_tmp$37 = t;
				_tmp$38 = err;
				r = _tmp$36;
				rest = _tmp$37;
				err = _tmp$38;
				return [r, rest, err];
    			} else if (_1 === (116)) {
    				_tmp$39 = 9;
				_tmp$40 = t;
				_tmp$41 = err;
				r = _tmp$39;
				rest = _tmp$40;
				err = _tmp$41;
				return [r, rest, err];
    			} else if (_1 === (118)) {
    				_tmp$42 = 11;
				_tmp$43 = t;
				_tmp$44 = err;
				r = _tmp$42;
				rest = _tmp$43;
				err = _tmp$44;
				return [r, rest, err];
    			} else if (c < 128 && !isalnum(c)) {
    				_tmp$45 = c;
				_tmp$46 = t;
				_tmp$47 = $ifaceNil;
				r = _tmp$45;
				rest = _tmp$46;
				err = _tmp$47;
				return [r, rest, err];
    			}
    		}
    		_tmp$48 = 0;
		_tmp$49 = "";
		_tmp$50 = new Error.ptr("invalid escape sequence", $substring(s, 0, (s.length - t.length >> 0)));
		r = _tmp$48;
		rest = _tmp$49;
		err = _tmp$50;
		return [r, rest, err];
    	};
	parser.prototype.parseEscape = function(s) { return this.$val.parseEscape(s); };
parserparseEscape~regexp/syntax.Errorregexp/syntax.isalnumregexp/syntax.nextRuneregexp/syntax.parserregexp/syntax.unhex &(*regexp/syntax.parser).parseClassChar �!	parser.ptr.prototype.parseClassChar = function(s, wholeClass) {
		var _tmp, _tmp$1, _tmp$2, _tuple, _tuple$1, err, p, r, rest, s, wholeClass;
		r = 0;
		rest = "";
		err = $ifaceNil;
		p = this;
    		if (s === "") {
    			_tmp = 0;
			_tmp$1 = "";
			_tmp$2 = new Error.ptr("missing closing ]", wholeClass);
			r = _tmp;
			rest = _tmp$1;
			err = _tmp$2;
			return [r, rest, err];
    		}
    		if (s.charCodeAt(0) === 92) {
    			_tuple = p.parseEscape(s);
			r = _tuple[0];
			rest = _tuple[1];
			err = _tuple[2];
			return [r, rest, err];
    		}
    		_tuple$1 = nextRune(s);
		r = _tuple$1[0];
		rest = _tuple$1[1];
		err = _tuple$1[2];
		return [r, rest, err];
    	};
	parser.prototype.parseClassChar = function(s, wholeClass) { return this.$val.parseClassChar(s, wholeClass); };
parserparseClassChar~regexp/syntax.Errorregexp/syntax.nextRuneregexp/syntax.parseEscape~regexp/syntax.parser ,(*regexp/syntax.parser).parsePerlClassEscape �&	parser.ptr.prototype.parsePerlClassEscape = function(s, r) {
		var $24r, _entry, _r, _tmp, _tmp$1, g, out, p, r, rest, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; g = $f.g; out = $f.out; p = $f.p; r = $f.r; rest = $f.rest; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		out = sliceType.nil;
		rest = "";
		p = this;
    		if ((((p.flags & 64) >>> 0) === 0) || s.length < 2 || !((s.charCodeAt(0) === 92))) {
  ��			$s = -1; return [out, rest];
    		}
  ��		g = $clone((_entry = perlGroup[$String.keyFor($substring(s, 0, 2))], _entry !== undefined ? _entry.v : new charGroup.ptr(0, sliceType.nil)), charGroup);
    		if (g.sign === 0) {
  ��			$s = -1; return [out, rest];
    		}
    		_r = p.appendGroup(r, $clone(g, charGroup)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tmp = _r;
		_tmp$1 = $substring(s, 2);
		out = _tmp;
		rest = _tmp$1;
		$24r = [out, rest];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parsePerlClassEscape }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.g = g; $f.out = out; $f.p = p; $f.r = r; $f.rest = rest; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parsePerlClassEscape = function(s, r) { return this.$val.parsePerlClassEscape(s, r); };
parserparsePerlClassEscape~regexp/syntax.appendGroup~regexp/syntax.charGroupregexp/syntax.parserregexp/syntax.perlGroupregexp/syntax.sliceType '(*regexp/syntax.parser).parseNamedClass �	b	parser.ptr.prototype.parseNamedClass = function(s, r) {
		var $24r, _entry, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, err, g, i, name, out, p, r, rest, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; err = $f.err; g = $f.g; i = $f.i; name = $f.name; out = $f.out; p = $f.p; r = $f.r; rest = $f.rest; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		out = sliceType.nil;
		rest = "";
		err = $ifaceNil;
		p = this;
    		if (s.length < 2 || !((s.charCodeAt(0) === 91)) || !((s.charCodeAt(1) === 58))) {
  �n			$s = -1; return [out, rest, err];
    		}
  �z		i = strings.Index($substring(s, 2), ":]");
    		if (i < 0) {
  ��			$s = -1; return [out, rest, err];
    		}
  ��		i = i + (2) >> 0;
  ��		_tmp = $substring(s, 0, (i + 2 >> 0));
		_tmp$1 = $substring(s, (i + 2 >> 0));
		name = _tmp;
		s = _tmp$1;
  ��		g = $clone((_entry = posixGroup[$String.keyFor(name)], _entry !== undefined ? _entry.v : new charGroup.ptr(0, sliceType.nil)), charGroup);
    		if (g.sign === 0) {
    			_tmp$2 = sliceType.nil;
			_tmp$3 = "";
			_tmp$4 = new Error.ptr("invalid character class range", name);
			out = _tmp$2;
			rest = _tmp$3;
			err = _tmp$4;
			$s = -1; return [out, rest, err];
    		}
    		_r = p.appendGroup(r, $clone(g, charGroup)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tmp$5 = _r;
		_tmp$6 = s;
		_tmp$7 = $ifaceNil;
		out = _tmp$5;
		rest = _tmp$6;
		err = _tmp$7;
		$24r = [out, rest, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parseNamedClass }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f.err = err; $f.g = g; $f.i = i; $f.name = name; $f.out = out; $f.p = p; $f.r = r; $f.rest = rest; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parseNamedClass = function(s, r) { return this.$val.parseNamedClass(s, r); };
parserparseNamedClass~regexp/syntax.Errorregexp/syntax.appendGroup~regexp/syntax.charGroupregexp/syntax.parserregexp/syntax.posixGroupregexp/syntax.sliceTypestrings.Index #(*regexp/syntax.parser).appendGroup �		parser.ptr.prototype.appendGroup = function(r, g) {
		var _r, g, p, r, tmp, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; g = $f.g; p = $f.p; r = $f.r; tmp = $f.tmp; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ��		/* */ if (((p.flags & 1) >>> 0) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (((p.flags & 1) >>> 0) === 0) { */ case 1:
    			if (g.sign < 0) {
  ��				r = appendNegatedClass(r, g.class$1);
    			} else {
  ��				r = appendClass(r, g.class$1);
    			}
    			$s = 3; continue;
		/* } else { */ case 2:
  �*			tmp = $subslice(p.tmpClass, 0, 0);
  �B			tmp = appendFoldedClass(tmp, g.class$1);
  �j			p.tmpClass = tmp;
  �}			_r = cleanClass((p.$ptr_tmpClass || (p.$ptr_tmpClass = new ptrType$2(function() { return this.$target.tmpClass; }, function($v) { this.$target.tmpClass = $v; }, p)))); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			tmp = _r;
    			if (g.sign < 0) {
  ��				r = appendNegatedClass(r, tmp);
    			} else {
  ��				r = appendClass(r, tmp);
    			}
    		/* } */ case 3:
  ��		$s = -1; return r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.appendGroup }; } $f._r = _r; $f.g = g; $f.p = p; $f.r = r; $f.tmp = tmp; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.appendGroup = function(r, g) { return this.$val.appendGroup(r, g); };
parserappendGroup~regexp/syntax.appendClassregexp/syntax.appendFoldedClass regexp/syntax.appendNegatedClassregexp/syntax.cleanClassregexp/syntax.parserregexp/syntax.ptrType$2 regexp/syntax.unicodeTableregexp/syntaxunicodeTable unicodeTable�&	unicodeTable = function(name) {
		var _entry, _entry$1, _entry$2, _entry$3, name, t, t$1;
    		if (name === "Any") {
  ��			return [anyTable, anyTable];
    		}
  ��		t = (_entry = unicode.Categories[$String.keyFor(name)], _entry !== undefined ? _entry.v : ptrType$3.nil);
    		if (!(t === ptrType$3.nil)) {
  �			return [t, (_entry$1 = unicode.FoldCategory[$String.keyFor(name)], _entry$1 !== undefined ? _entry$1.v : ptrType$3.nil)];
    		}
  �0		t$1 = (_entry$2 = unicode.Scripts[$String.keyFor(name)], _entry$2 !== undefined ? _entry$2.v : ptrType$3.nil);
    		if (!(t$1 === ptrType$3.nil)) {
  �Y			return [t$1, (_entry$3 = unicode.FoldScript[$String.keyFor(name)], _entry$3 !== undefined ? _entry$3.v : ptrType$3.nil)];
    		}
  ��		return [ptrType$3.nil, ptrType$3.nil];
    	};
unicodeTableregexp/syntax.anyTableregexp/syntax.ptrType$3regexp/syntax.unicodeTableunicode.Categoriesunicode.FoldCategoryunicode.FoldScriptunicode.RangeTableunicode.Scripts )(*regexp/syntax.parser).parseUnicodeClass ��	parser.ptr.prototype.parseUnicodeClass = function(s, r) {
		var _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, c, end, err, fold, name, out, p, r, rest, s, seq, sign, t, tab, tmp, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; c = $f.c; end = $f.end; err = $f.err; fold = $f.fold; name = $f.name; out = $f.out; p = $f.p; r = $f.r; rest = $f.rest; s = $f.s; seq = $f.seq; sign = $f.sign; t = $f.t; tab = $f.tab; tmp = $f.tmp; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		out = sliceType.nil;
		rest = "";
		err = $ifaceNil;
		p = this;
    		if ((((p.flags & 128) >>> 0) === 0) || s.length < 2 || !((s.charCodeAt(0) === 92)) || !((s.charCodeAt(1) === 112)) && !((s.charCodeAt(1) === 80))) {
  �)			$s = -1; return [out, rest, err];
    		}
  �]		sign = 1;
    		if (s.charCodeAt(1) === 80) {
  �|			sign = -1;
    		}
  		t = $substring(s, 2);
  		_tuple = nextRune(t);
		c = _tuple[0];
		t = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ��			$s = -1; return [out, rest, err];
    		}
  ��		_tmp = "";
		_tmp$1 = "";
		seq = _tmp;
		name = _tmp$1;
    		if (!((c === 123))) {
  �			seq = $substring(s, 0, (s.length - t.length >> 0));
  �&			name = $substring(seq, 2);
    		} else {
  �Y			end = strings.IndexRune(s, 125);
    			if (end < 0) {
  Ï				err = checkUTF8(s);
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  ô					$s = -1; return [out, rest, err];
    				}
    				_tmp$2 = sliceType.nil;
				_tmp$3 = "";
				_tmp$4 = new Error.ptr("invalid character class range", s);
				out = _tmp$2;
				rest = _tmp$3;
				err = _tmp$4;
				$s = -1; return [out, rest, err];
    			}
  ��			_tmp$5 = $substring(s, 0, (end + 1 >> 0));
			_tmp$6 = $substring(s, (end + 1 >> 0));
			seq = _tmp$5;
			t = _tmp$6;
  �			name = $substring(s, 3, end);
  �-			err = checkUTF8(name);
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �T				$s = -1; return [out, rest, err];
    			}
    		}
    		if (!(name === "") && (name.charCodeAt(0) === 94)) {
  ��			sign = -sign;
  ��			name = $substring(name, 1);
    		}
  � 		_tuple$1 = unicodeTable(name);
		tab = _tuple$1[0];
		fold = _tuple$1[1];
    		if (tab === ptrType$3.nil) {
    			_tmp$7 = sliceType.nil;
			_tmp$8 = "";
			_tmp$9 = new Error.ptr("invalid character class range", seq);
			out = _tmp$7;
			rest = _tmp$8;
			err = _tmp$9;
			$s = -1; return [out, rest, err];
    		}
  �i		/* */ if ((((p.flags & 1) >>> 0) === 0) || fold === ptrType$3.nil) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((((p.flags & 1) >>> 0) === 0) || fold === ptrType$3.nil) { */ case 1:
    			if (sign > 0) {
  Ŧ				r = appendTable(r, tab);
    			} else {
  ��				r = appendNegatedTable(r, tab);
    			}
    			$s = 3; continue;
		/* } else { */ case 2:
  Ƌ			tmp = $subslice(p.tmpClass, 0, 0);
  ƣ			tmp = appendTable(tmp, tab);
  ��			tmp = appendTable(tmp, fold);
  ��			p.tmpClass = tmp;
  ��			_r = cleanClass((p.$ptr_tmpClass || (p.$ptr_tmpClass = new ptrType$2(function() { return this.$target.tmpClass; }, function($v) { this.$target.tmpClass = $v; }, p)))); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			tmp = _r;
    			if (sign > 0) {
  �$				r = appendClass(r, tmp);
    			} else {
  �J				r = appendNegatedClass(r, tmp);
    			}
    		/* } */ case 3:
    		_tmp$10 = r;
		_tmp$11 = t;
		_tmp$12 = $ifaceNil;
		out = _tmp$10;
		rest = _tmp$11;
		err = _tmp$12;
		$s = -1; return [out, rest, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parseUnicodeClass }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.c = c; $f.end = end; $f.err = err; $f.fold = fold; $f.name = name; $f.out = out; $f.p = p; $f.r = r; $f.rest = rest; $f.s = s; $f.seq = seq; $f.sign = sign; $f.t = t; $f.tab = tab; $f.tmp = tmp; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parseUnicodeClass = function(s, r) { return this.$val.parseUnicodeClass(s, r); };
parserparseUnicodeClass~regexp/syntax.Errorregexp/syntax.appendClass regexp/syntax.appendNegatedClass regexp/syntax.appendNegatedTableregexp/syntax.appendTableregexp/syntax.checkUTF8regexp/syntax.cleanClassregexp/syntax.nextRuneregexp/syntax.parserregexp/syntax.ptrType$2regexp/syntax.ptrType$3regexp/syntax.sliceTyperegexp/syntax.unicodeTablestrings.IndexRune "(*regexp/syntax.parser).parseClass �$	parser.ptr.prototype.parseClass = function(s) {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, class$1, err, err$1, err$2, first, hi, lo, nclass, nclass$1, nclass$2, nt, nt$1, nt$2, p, re, rest, rng, s, sign, size, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$21 = $f._tmp$21; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; class$1 = $f.class$1; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; first = $f.first; hi = $f.hi; lo = $f.lo; nclass = $f.nclass; nclass$1 = $f.nclass$1; nclass$2 = $f.nclass$2; nt = $f.nt; nt$1 = $f.nt$1; nt$2 = $f.nt$2; p = $f.p; re = $f.re; rest = $f.rest; rng = $f.rng; s = $f.s; sign = $f.sign; size = $f.size; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rest = "";
		err = $ifaceNil;
		p = this;
  �+		t = $substring(s, 1);
  �A		re = p.newRegexp(4);
  �a		re.Flags = p.flags;
  �u		re.Rune = $subslice(new sliceType(re.Rune0), 0, 0);
  Ȏ		sign = 1;
    		if (!(t === "") && (t.charCodeAt(0) === 94)) {
  ȸ			sign = -1;
  ��			t = $substring(t, 1);
    			if (((p.flags & 4) >>> 0) === 0) {
  �[				re.Rune = $append(re.Rune, 10, 10);
    			}
    		}
  Ɋ		class$1 = re.Rune;
  ɜ		first = true;
  ��		/* while (true) { */ case 1:
			/* if (!(t === "" || !((t.charCodeAt(0) === 93)) || first)) { break; } */ if(!(t === "" || !((t.charCodeAt(0) === 93)) || first)) { $s = 2; continue; }
    			if (!(t === "") && (t.charCodeAt(0) === 45) && (((p.flags & 64) >>> 0) === 0) && !first && ((t.length === 1) || !((t.charCodeAt(1) === 93)))) {
  ʼ				_tuple = utf8.DecodeRuneInString($substring(t, 1));
				size = _tuple[1];
    				_tmp = "";
				_tmp$1 = new Error.ptr("invalid character class range", $substring(t, 0, (1 + size >> 0)));
				rest = _tmp;
				err = _tmp$1;
				$s = -1; return [rest, err];
    			}
  �.			first = false;
  �b			/* */ if (t.length > 2 && (t.charCodeAt(0) === 91) && (t.charCodeAt(1) === 58)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (t.length > 2 && (t.charCodeAt(0) === 91) && (t.charCodeAt(1) === 58)) { */ case 3:
  ˓				_r = p.parseNamedClass(t, class$1); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				nclass = _tuple$1[0];
				nt = _tuple$1[1];
				err$1 = _tuple$1[2];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    					_tmp$2 = "";
					_tmp$3 = err$1;
					rest = _tmp$2;
					err = _tmp$3;
					$s = -1; return [rest, err];
    				}
    				if (!(nclass === sliceType.nil)) {
  �					_tmp$4 = nclass;
					_tmp$5 = nt;
					class$1 = _tmp$4;
					t = _tmp$5;
  �!					/* continue; */ $s = 1; continue;
    				}
    			/* } */ case 4:
  �j			_r$1 = p.parseUnicodeClass(t, class$1); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$2 = _r$1;
			nclass$1 = _tuple$2[0];
			nt$1 = _tuple$2[1];
			err$2 = _tuple$2[2];
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    				_tmp$6 = "";
				_tmp$7 = err$2;
				rest = _tmp$6;
				err = _tmp$7;
				$s = -1; return [rest, err];
    			}
    			if (!(nclass$1 === sliceType.nil)) {
  ��				_tmp$8 = nclass$1;
				_tmp$9 = nt$1;
				class$1 = _tmp$8;
				t = _tmp$9;
  ��				/* continue; */ $s = 1; continue;
    			}
  �?			_r$2 = p.parsePerlClassEscape(t, class$1); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$3 = _r$2;
			nclass$2 = _tuple$3[0];
			nt$2 = _tuple$3[1];
    			if (!(nclass$2 === sliceType.nil)) {
  ͂				_tmp$10 = nclass$2;
				_tmp$11 = nt$2;
				class$1 = _tmp$10;
				t = _tmp$11;
  ͛				/* continue; */ $s = 1; continue;
    			}
  ��			rng = t;
  ��			_tmp$12 = 0;
			_tmp$13 = 0;
			lo = _tmp$12;
			hi = _tmp$13;
  ��			_tuple$4 = p.parseClassChar(t, s);
			lo = _tuple$4[0];
			t = _tuple$4[1];
			err$2 = _tuple$4[2];
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    				_tmp$14 = "";
				_tmp$15 = err$2;
				rest = _tmp$14;
				err = _tmp$15;
				$s = -1; return [rest, err];
    			}
  �<			hi = lo;
    			if (t.length >= 2 && (t.charCodeAt(0) === 45) && !((t.charCodeAt(1) === 93))) {
  Τ				t = $substring(t, 1);
  δ				_tuple$5 = p.parseClassChar(t, s);
				hi = _tuple$5[0];
				t = _tuple$5[1];
				err$2 = _tuple$5[2];
    				if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    					_tmp$16 = "";
					_tmp$17 = err$2;
					rest = _tmp$16;
					err = _tmp$17;
					$s = -1; return [rest, err];
    				}
    				if (hi < lo) {
  �					rng = $substring(rng, 0, (rng.length - t.length >> 0));
    					_tmp$18 = "";
					_tmp$19 = new Error.ptr("invalid character class range", rng);
					rest = _tmp$18;
					err = _tmp$19;
					$s = -1; return [rest, err];
    				}
    			}
    			if (((p.flags & 1) >>> 0) === 0) {
  ϓ				class$1 = appendRange(class$1, lo, hi);
    			} else {
  ��				class$1 = appendFoldedRange(class$1, lo, hi);
    			}
    		$s = 1; continue;
		case 2:
  ��		t = $substring(t, 1);
  �C		re.Rune = class$1;
  �T		_r$3 = cleanClass((re.$ptr_Rune || (re.$ptr_Rune = new ptrType$2(function() { return this.$target.Rune; }, function($v) { this.$target.Rune = $v; }, re)))); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		class$1 = _r$3;
    		if (sign < 0) {
  Ђ			class$1 = negateClass(class$1);
    		}
  С		re.Rune = class$1;
  в		p.push(re);
    		_tmp$20 = t;
		_tmp$21 = $ifaceNil;
		rest = _tmp$20;
		err = _tmp$21;
		$s = -1; return [rest, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parser.ptr.prototype.parseClass }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$21 = _tmp$21; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.class$1 = class$1; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.first = first; $f.hi = hi; $f.lo = lo; $f.nclass = nclass; $f.nclass$1 = nclass$1; $f.nclass$2 = nclass$2; $f.nt = nt; $f.nt$1 = nt$1; $f.nt$2 = nt$2; $f.p = p; $f.re = re; $f.rest = rest; $f.rng = rng; $f.s = s; $f.sign = sign; $f.size = size; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	parser.prototype.parseClass = function(s) { return this.$val.parseClass(s); };
parserparseClass~regexp/syntax.Errorregexp/syntax.appendFoldedRangeregexp/syntax.appendRangeregexp/syntax.cleanClassregexp/syntax.negateClassregexp/syntax.newRegexp~regexp/syntax.parseClassChar~regexp/syntax.parseNamedClass~#regexp/syntax.parsePerlClassEscape~ regexp/syntax.parseUnicodeClass~regexp/syntax.parserregexp/syntax.ptrType$2regexp/syntax.push~regexp/syntax.sliceTypeunicode/utf8.DecodeRuneInString regexp/syntax.cleanClassregexp/syntax
cleanClass 
cleanClass�	%	cleanClass = function(rp) {
		var _tmp, _tmp$1, hi, i, lo, r, rp, w, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; hi = $f.hi; i = $f.i; lo = $f.lo; r = $f.r; rp = $f.rp; w = $f.w; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ђ		$r = sort.Sort((x = new ranges.ptr(rp), new x.constructor.elem(x))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Ѫ		r = rp.$get();
    		if (r.$length < 2) {
  ��			$s = -1; return r;
    		}
  ��		w = 2;
  �		i = 2;
		while (true) {
			if (!(i < r.$length)) { break; }
  �/			_tmp = ((i < 0 || i >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + i]);
			_tmp$1 = (x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$1]));
			lo = _tmp;
			hi = _tmp$1;
    			if (lo <= ((x$2 = w - 1 >> 0, ((x$2 < 0 || x$2 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$2])) + 1 >> 0)) {
    				if (hi > (x$3 = w - 1 >> 0, ((x$3 < 0 || x$3 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$3]))) {
  Ҕ					(x$4 = w - 1 >> 0, ((x$4 < 0 || x$4 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$4] = hi));
    				}
  �$				i = i + (2) >> 0;
    				continue;
    			}
  ��			((w < 0 || w >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + w] = lo);
  ��			(x$5 = w + 1 >> 0, ((x$5 < 0 || x$5 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$5] = hi));
  ��			w = w + (2) >> 0;
  �$			i = i + (2) >> 0;
    		}
  ��		$s = -1; return $subslice(r, 0, w);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cleanClass }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.hi = hi; $f.i = i; $f.lo = lo; $f.r = r; $f.rp = rp; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};

cleanClassregexp/syntax.cleanClassregexp/syntax.ranges	sort.Sort regexp/syntax.appendLiteralregexp/syntaxappendLiteral appendLiteral��	appendLiteral = function(r, x, flags) {
		var flags, r, x;
    		if (!((((flags & 1) >>> 0) === 0))) {
  ӫ			return appendFoldedRange(r, x, x);
    		}
  ��		return appendRange(r, x, x);
    	};
appendLiteralregexp/syntax.appendFoldedRangeregexp/syntax.appendLiteralregexp/syntax.appendRange regexp/syntax.appendRangeregexp/syntaxappendRange appendRange�_	appendRange = function(r, lo, hi) {
		var _tmp, _tmp$1, hi, i, lo, n, r, rhi, rlo, x, x$1, x$2, x$3;
  �F		n = r.$length;
  �W		i = 2;
		while (true) {
			if (!(i <= 4)) { break; }
    			if (n >= i) {
  ՚				_tmp = (x = n - i >> 0, ((x < 0 || x >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x]));
				_tmp$1 = (x$1 = (n - i >> 0) + 1 >> 0, ((x$1 < 0 || x$1 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$1]));
				rlo = _tmp;
				rhi = _tmp$1;
    				if (lo <= (rhi + 1 >> 0) && rlo <= (hi + 1 >> 0)) {
    					if (lo < rlo) {
  ��						(x$2 = n - i >> 0, ((x$2 < 0 || x$2 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$2] = lo));
    					}
    					if (hi > rhi) {
  �						(x$3 = (n - i >> 0) + 1 >> 0, ((x$3 < 0 || x$3 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$3] = hi));
    					}
  �2					return r;
    				}
    			}
  �g			i = i + (2) >> 0;
    		}
  �I		return $append(r, lo, hi);
    	};
appendRangeregexp/syntax.appendRange regexp/syntax.appendFoldedRangeregexp/syntaxappendFoldedRange appendFoldedRange��	appendFoldedRange = function(r, lo, hi) {
		var c, f, hi, lo, r;
    		if (lo <= 65 && hi >= 125251) {
  ��			return appendRange(r, lo, hi);
    		}
    		if (hi < 65 || lo > 125251) {
  �o			return appendRange(r, lo, hi);
    		}
    		if (lo < 65) {
  ��			r = appendRange(r, lo, 64);
  ��			lo = 65;
    		}
    		if (hi > 125251) {
  �<			r = appendRange(r, 125252, hi);
  �`			hi = 125251;
    		}
  ټ		c = lo;
		while (true) {
			if (!(c <= hi)) { break; }
  ��			r = appendRange(r, c, c);
  ��			f = unicode.SimpleFold(c);
  �			while (true) {
				if (!(!((f === c)))) { break; }
  �				r = appendRange(r, f, f);
  �:				f = unicode.SimpleFold(f);
    			}
  ��			c = c + (1) >> 0;
    		}
  �\		return r;
    	};
appendFoldedRangeregexp/syntax.appendFoldedRangeregexp/syntax.appendRangeunicode.SimpleFold regexp/syntax.appendClassregexp/syntaxappendClass appendClass��	appendClass = function(r, x) {
		var i, r, x, x$1;
  ��		i = 0;
		while (true) {
			if (!(i < x.$length)) { break; }
  �			r = appendRange(r, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]), (x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])));
  �			i = i + (2) >> 0;
    		}
  �C		return r;
    	};
appendClassregexp/syntax.appendClassregexp/syntax.appendRange regexp/syntax.appendFoldedClassregexp/syntaxappendFoldedClass appendFoldedClass��	appendFoldedClass = function(r, x) {
		var i, r, x, x$1;
  ��		i = 0;
		while (true) {
			if (!(i < x.$length)) { break; }
  �			r = appendFoldedRange(r, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]), (x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])));
  ��			i = i + (2) >> 0;
    		}
  �2		return r;
    	};
appendFoldedClassregexp/syntax.appendFoldedClassregexp/syntax.appendFoldedRange  regexp/syntax.appendNegatedClassregexp/syntaxappendNegatedClass appendNegatedClass��	appendNegatedClass = function(r, x) {
		var _tmp, _tmp$1, hi, i, lo, nextLo, r, x, x$1;
  ��		nextLo = 0;
  �		i = 0;
		while (true) {
			if (!(i < x.$length)) { break; }
  �'			_tmp = ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]);
			_tmp$1 = (x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
			lo = _tmp;
			hi = _tmp$1;
    			if (nextLo <= (lo - 1 >> 0)) {
  �W				r = appendRange(r, nextLo, lo - 1 >> 0);
    			}
  �~			nextLo = hi + 1 >> 0;
  �			i = i + (2) >> 0;
    		}
    		if (nextLo <= 1114111) {
  ݳ			r = appendRange(r, nextLo, 1114111);
    		}
  ��		return r;
    	};
appendNegatedClass regexp/syntax.appendNegatedClassregexp/syntax.appendRange regexp/syntax.appendTableregexp/syntaxappendTable appendTable�	appendTable = function(r, x) {
		var _i, _i$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, c, c$1, hi, hi$1, lo, lo$1, r, stride, stride$1, x, xr, xr$1;
  �l		_ref = x.R16;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			xr = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), unicode.Range16);
  މ			_tmp = ((xr.Lo >> 0));
			_tmp$1 = ((xr.Hi >> 0));
			_tmp$2 = ((xr.Stride >> 0));
			lo = _tmp;
			hi = _tmp$1;
			stride = _tmp$2;
    			if (stride === 1) {
  ��				r = appendRange(r, lo, hi);
  ��				_i++;
				continue;
    			}
  �			c = lo;
			while (true) {
				if (!(c <= hi)) { break; }
  �/				r = appendRange(r, c, c);
  �				c = c + (stride) >> 0;
    			}
    			_i++;
		}
  �P		_ref$1 = x.R32;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			xr$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), unicode.Range32);
  �m			_tmp$3 = ((xr$1.Lo >> 0));
			_tmp$4 = ((xr$1.Hi >> 0));
			_tmp$5 = ((xr$1.Stride >> 0));
			lo$1 = _tmp$3;
			hi$1 = _tmp$4;
			stride$1 = _tmp$5;
    			if (stride$1 === 1) {
  ߿				r = appendRange(r, lo$1, hi$1);
  ��				_i$1++;
				continue;
    			}
  ��			c$1 = lo$1;
			while (true) {
				if (!(c$1 <= hi$1)) { break; }
  �				r = appendRange(r, c$1, c$1);
  �				c$1 = c$1 + (stride$1) >> 0;
    			}
    			_i$1++;
		}
  �4		return r;
    	};
appendTableregexp/syntax.appendRangeregexp/syntax.appendTableunicode.Range16unicode.Range32  regexp/syntax.appendNegatedTableregexp/syntaxappendNegatedTable appendNegatedTable�	appendNegatedTable = function(r, x) {
		var _i, _i$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, c, c$1, hi, hi$1, lo, lo$1, nextLo, r, stride, stride$1, x, xr, xr$1;
  ��		nextLo = 0;
  �		_ref = x.R16;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			xr = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), unicode.Range16);
  �+			_tmp = ((xr.Lo >> 0));
			_tmp$1 = ((xr.Hi >> 0));
			_tmp$2 = ((xr.Stride >> 0));
			lo = _tmp;
			hi = _tmp$1;
			stride = _tmp$2;
    			if (stride === 1) {
    				if (nextLo <= (lo - 1 >> 0)) {
  �					r = appendRange(r, nextLo, lo - 1 >> 0);
    				}
  �				nextLo = hi + 1 >> 0;
  ��				_i++;
				continue;
    			}
  ��			c = lo;
			while (true) {
				if (!(c <= hi)) { break; }
    				if (nextLo <= (c - 1 >> 0)) {
  �					r = appendRange(r, nextLo, c - 1 >> 0);
    				}
  �F				nextLo = c + 1 >> 0;
  ��				c = c + (stride) >> 0;
    			}
    			_i++;
		}
  �]		_ref$1 = x.R32;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			xr$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), unicode.Range32);
  �z			_tmp$3 = ((xr$1.Lo >> 0));
			_tmp$4 = ((xr$1.Hi >> 0));
			_tmp$5 = ((xr$1.Stride >> 0));
			lo$1 = _tmp$3;
			hi$1 = _tmp$4;
			stride$1 = _tmp$5;
    			if (stride$1 === 1) {
    				if (nextLo <= (lo$1 - 1 >> 0)) {
  ��					r = appendRange(r, nextLo, lo$1 - 1 >> 0);
    				}
  �				nextLo = hi$1 + 1 >> 0;
  � 				_i$1++;
				continue;
    			}
  �3			c$1 = lo$1;
			while (true) {
				if (!(c$1 <= hi$1)) { break; }
    				if (nextLo <= (c$1 - 1 >> 0)) {
  �m					r = appendRange(r, nextLo, c$1 - 1 >> 0);
    				}
  �				nextLo = c$1 + 1 >> 0;
  �E				c$1 = c$1 + (stride$1) >> 0;
    			}
    			_i$1++;
		}
    		if (nextLo <= 1114111) {
  ��			r = appendRange(r, nextLo, 1114111);
    		}
  ��		return r;
    	};
appendNegatedTable regexp/syntax.appendNegatedTableregexp/syntax.appendRangeunicode.Range16unicode.Range32 regexp/syntax.negateClassregexp/syntaxnegateClass negateClass�	negateClass = function(r) {
		var _tmp, _tmp$1, hi, i, lo, nextLo, r, w, x, x$1;
  �		nextLo = 0;
  ��		w = 0;
  ��		i = 0;
		while (true) {
			if (!(i < r.$length)) { break; }
  �				_tmp = ((i < 0 || i >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + i]);
			_tmp$1 = (x = i + 1 >> 0, ((x < 0 || x >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x]));
			lo = _tmp;
			hi = _tmp$1;
    			if (nextLo <= (lo - 1 >> 0)) {
  �9				((w < 0 || w >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + w] = nextLo);
  �J				(x$1 = w + 1 >> 0, ((x$1 < 0 || x$1 >= r.$length) ? ($throwRuntimeError("index out of range"), undefined) : r.$array[r.$offset + x$1] = (lo - 1 >> 0)));
  �]				w = w + (2) >> 0;
    			}
  �j			nextLo = hi + 1 >> 0;
  ��			i = i + (2) >> 0;
    		}
  �~		r = $subslice(r, 0, w);
    		if (nextLo <= 1114111) {
  �			r = $append(r, nextLo, 1114111);
    		}
  �J		return r;
    	};
negateClassregexp/syntax.negateClass (regexp/syntax.ranges).Less ��	ranges.ptr.prototype.Less = function(i, j) {
		var i, j, p, ra, x, x$1;
		ra = this;
  �G		p = ra.p.$get();
  �S		i = $imul(i, (2));
  �[		j = $imul(j, (2));
  �c		return ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) < ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]) || (((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) === ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j])) && (x = i + 1 >> 0, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x])) > (x$1 = j + 1 >> 0, ((x$1 < 0 || x$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$1]));
    	};
	ranges.prototype.Less = function(i, j) { return this.$val.Less(i, j); };
rangesregexp/syntax.ranges (regexp/syntax.ranges).Len �	ranges.ptr.prototype.Len = function() {
		var _q, ra;
		ra = this;
  �		return (_q = ra.p.$get().$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    	};
	ranges.prototype.Len = function() { return this.$val.Len(); };
rangesregexp/syntax.ranges (regexp/syntax.ranges).Swap �N	ranges.ptr.prototype.Swap = function(i, j) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, i, j, p, ra, x, x$1, x$2, x$3;
		ra = this;
  ��		p = ra.p.$get();
  �		i = $imul(i, (2));
  �
		j = $imul(j, (2));
  �		_tmp = ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]);
		_tmp$1 = (x = j + 1 >> 0, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x]));
		_tmp$2 = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]);
		_tmp$3 = (x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$1]));
		((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i] = _tmp);
		(x$2 = i + 1 >> 0, ((x$2 < 0 || x$2 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$2] = _tmp$1));
		((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j] = _tmp$2);
		(x$3 = j + 1 >> 0, ((x$3 < 0 || x$3 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$3] = _tmp$3));
    	};
	ranges.prototype.Swap = function(i, j) { return this.$val.Swap(i, j); };
rangesregexp/syntax.ranges regexp/syntax.checkUTF8regexp/syntax	checkUTF8 	checkUTF8��	checkUTF8 = function(s) {
		var _tuple, rune, s, size;
  �o		while (true) {
			if (!(!(s === ""))) { break; }
  �			_tuple = utf8.DecodeRuneInString(s);
			rune = _tuple[0];
			size = _tuple[1];
    			if ((rune === 65533) && (size === 1)) {
  ��				return new Error.ptr("invalid UTF-8", s);
    			}
  �				s = $substring(s, size);
    		}
  �		return $ifaceNil;
    	};
	checkUTF8regexp/syntax.Errorregexp/syntax.checkUTF8unicode/utf8.DecodeRuneInString regexp/syntax.nextRuneregexp/syntaxnextRune nextRune�?	nextRune = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, c, err, s, size, t;
		c = 0;
		t = "";
		err = $ifaceNil;
  �a		_tuple = utf8.DecodeRuneInString(s);
		c = _tuple[0];
		size = _tuple[1];
    		if ((c === 65533) && (size === 1)) {
    			_tmp = 0;
			_tmp$1 = "";
			_tmp$2 = new Error.ptr("invalid UTF-8", s);
			c = _tmp;
			t = _tmp$1;
			err = _tmp$2;
			return [c, t, err];
    		}
    		_tmp$3 = c;
		_tmp$4 = $substring(s, size);
		_tmp$5 = $ifaceNil;
		c = _tmp$3;
		t = _tmp$4;
		err = _tmp$5;
		return [c, t, err];
    	};
nextRuneregexp/syntax.Errorregexp/syntax.nextRuneunicode/utf8.DecodeRuneInString regexp/syntax.isalnumregexp/syntaxisalnum isalnumz	isalnum = function(c) {
		var c;
  � 		return 48 <= c && c <= 57 || 65 <= c && c <= 90 || 97 <= c && c <= 122;
    	};
isalnumregexp/syntax.isalnum regexp/syntax.unhexregexp/syntaxunhex unhex�&	unhex = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  �			return c - 48 >> 0;
    		}
    		if (97 <= c && c <= 102) {
  ��			return (c - 97 >> 0) + 10 >> 0;
    		}
    		if (65 <= c && c <= 70) {
  �				return (c - 65 >> 0) + 10 >> 0;
    		}
  �!		return -1;
    	};
unhexregexp/syntax.unhex (regexp/syntax.InstOp).String ��	InstOp.prototype.String = function() {
		var i;
		i = this.$val;
    		if (((i >>> 0)) >= ((instOpNames.$length >>> 0))) {
  �_			return "";
    		}
  �m		return ((i < 0 || i >= instOpNames.$length) ? ($throwRuntimeError("index out of range"), undefined) : instOpNames.$array[instOpNames.$offset + i]);
    	};
	$ptrType(InstOp).prototype.String = function() { return new InstOp(this.$get()).String(); };
InstOpregexp/syntax.InstOpregexp/syntax.instOpNames regexp/syntax.EmptyOpContextregexp/syntaxEmptyOpContext EmptyOpContext��	EmptyOpContext = function(r1, r2) {
		var boundary, op, r1, r2;
  ��		op = 32;
  ��		boundary = 0;
    		if (IsWordChar(r1)) {
  ��			boundary = 1;
    		} else if ((r1 === 10)) {
  �			op = (op | (1)) >>> 0;
    		} else if (r1 < 0) {
  �=			op = (op | (5)) >>> 0;
    		}
    		if (IsWordChar(r2)) {
  ��			boundary = (boundary ^ (1)) << 24 >>> 24;
    		} else if ((r2 === 10)) {
  ��			op = (op | (2)) >>> 0;
    		} else if (r2 < 0) {
  ��			op = (op | (10)) >>> 0;
    		}
    		if (!((boundary === 0))) {
  �,			op = (op ^ (48)) << 24 >>> 24;
    		}
  �`		return op;
    	};
	$pkg.EmptyOpContext = EmptyOpContext;
EmptyOpContextregexp/syntax.EmptyOpContextregexp/syntax.IsWordChar regexp/syntax.IsWordCharregexp/syntax
IsWordChar 
IsWordChar��	IsWordChar = function(r) {
		var r;
  �Y		return 65 <= r && r <= 90 || 97 <= r && r <= 122 || 48 <= r && r <= 57 || (r === 95);
    	};
	$pkg.IsWordChar = IsWordChar;

IsWordCharregexp/syntax.IsWordChar (*regexp/syntax.Prog).String �	Prog.ptr.prototype.String = function() {
		var b, p;
		p = this;
  ��		b = new strings.Builder.ptr(ptrType$4.nil, sliceType$6.nil);
  ��		dumpProg(b, p);
  ��		return b.String();
    	};
	Prog.prototype.String = function() { return this.$val.String(); };
Progregexp/syntax.Progregexp/syntax.dumpProgregexp/syntax.ptrType$4regexp/syntax.sliceType$6strings.Builder (*regexp/syntax.Prog).skipNop �;	Prog.ptr.prototype.skipNop = function(pc) {
		var i, p, pc, x, x$1, x$2;
		p = this;
  �Y		i = (x = p.Inst, ((pc < 0 || pc >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + pc]));
  �k		while (true) {
			if (!((i.Op === 6) || (i.Op === 2))) { break; }
  ��			i = (x$1 = p.Inst, x$2 = i.Out, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2]));
    		}
  ��		return i;
    	};
	Prog.prototype.skipNop = function(pc) { return this.$val.skipNop(pc); };
ProgskipNop~regexp/syntax.Prog (*regexp/syntax.Inst).op �	Inst.ptr.prototype.op = function() {
		var _1, i, op;
		i = this;
  "		op = i.Op;
    		_1 = op;
    		if ((_1 === (8)) || (_1 === (9)) || (_1 === (10))) {
  l			op = 7;
    		}
  ~		return op;
    	};
	Inst.prototype.op = function() { return this.$val.op(); };
Instop~regexp/syntax.Inst (*regexp/syntax.Prog).Prefix ��	Prog.ptr.prototype.Prefix = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, buf, complete, i, p, prefix, x;
		prefix = "";
		complete = false;
		p = this;
 S		i = p.skipNop(((p.Start >>> 0)));
    		if (!((i.op() === 7)) || !((i.Rune.$length === 1))) {
    			_tmp = "";
			_tmp$1 = i.Op === 4;
			prefix = _tmp;
			complete = _tmp$1;
			return [prefix, complete];
    		}
  		buf = new strings.Builder.ptr(ptrType$4.nil, sliceType$6.nil);
 5		while (true) {
			if (!((i.op() === 7) && (i.Rune.$length === 1) && (((((i.Arg << 16 >>> 16)) & 1) >>> 0) === 0))) { break; }
 �			buf.WriteRune((x = i.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])));
 �			i = p.skipNop(i.Out);
    		}
    		_tmp$2 = buf.String();
		_tmp$3 = i.Op === 4;
		prefix = _tmp$2;
		complete = _tmp$3;
		return [prefix, complete];
    	};
	Prog.prototype.Prefix = function() { return this.$val.Prefix(); };
Progregexp/syntax.Progregexp/syntax.op~regexp/syntax.ptrType$4regexp/syntax.skipNop~regexp/syntax.sliceType$6strings.Builder (*regexp/syntax.Prog).StartCond �K	Prog.ptr.prototype.StartCond = function() {
		var _1, flag, i, p, pc, x, x$1;
		p = this;
 �		flag = 0;
 �		pc = ((p.Start >>> 0));
 �		i = (x = p.Inst, ((pc < 0 || pc >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + pc]));
 �		Loop:
		while (true) {
    			_1 = i.Op;
    			if (_1 === (3)) {
 				flag = (flag | (((i.Arg << 24 >>> 24)))) >>> 0;
    			} else if (_1 === (5)) {
 0				return 255;
    			} else if ((_1 === (2)) || (_1 === (6))) {
    			} else {
 y				break Loop;
    			}
 �			pc = i.Out;
 �			i = (x$1 = p.Inst, ((pc < 0 || pc >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + pc]));
    		}
 �		return flag;
    	};
	Prog.prototype.StartCond = function() { return this.$val.StartCond(); };
Progregexp/syntax.Prog (*regexp/syntax.Inst).MatchRune ��	Inst.ptr.prototype.MatchRune = function(r) {
		var i, r;
		i = this;
 q		return !((i.MatchRunePos(r) === -1));
    	};
	Inst.prototype.MatchRune = function(r) { return this.$val.MatchRune(r); };
Instregexp/syntax.Inst "(*regexp/syntax.Inst).MatchRunePos �
y	Inst.ptr.prototype.MatchRunePos = function(r) {
		var _1, _q, _q$1, _q$2, c, hi, i, j, lo, m, r, r0, r1, rune, x, x$1, x$2;
		i = this;
 �		rune = i.Rune;
    		_1 = rune.$length;
    		if (_1 === (0)) {
 			return -1;
    		} else if (_1 === (1)) {
 w			r0 = (0 >= rune.$length ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + 0]);
    			if (r === r0) {
 �				return 0;
    			}
    			if (!((((((i.Arg << 16 >>> 16)) & 1) >>> 0) === 0))) {
 �				r1 = unicode.SimpleFold(r0);
				while (true) {
					if (!(!((r1 === r0)))) { break; }
    					if (r === r1) {
 )						return 0;
    					}
 �					r1 = unicode.SimpleFold(r1);
				}
    			}
 C			return -1;
    		} else if (_1 === (2)) {
    			if (r >= (0 >= rune.$length ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + 0]) && r <= (1 >= rune.$length ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + 1])) {
 �				return 0;
    			}
 �			return -1;
    		} else if ((_1 === (4)) || (_1 === (6)) || (_1 === (8))) {
 �			j = 0;
			while (true) {
				if (!(j < rune.$length)) { break; }
    				if (r < ((j < 0 || j >= rune.$length) ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + j])) {
 	2					return -1;
    				}
    				if (r <= (x = j + 1 >> 0, ((x < 0 || x >= rune.$length) ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + x]))) {
 	a					return (_q = j / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    				}
 					j = j + (2) >> 0;
    			}
 	y			return -1;
    		}
 	�		lo = 0;
 	�		hi = (_q$1 = rune.$length / 2, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
 	�		while (true) {
			if (!(lo < hi)) { break; }
 	�			m = lo + (_q$2 = ((hi - lo >> 0)) / 2, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
 	�			c = (x$1 = $imul(2, m), ((x$1 < 0 || x$1 >= rune.$length) ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + x$1]));
    			if (c <= r) {
    				if (r <= (x$2 = ($imul(2, m)) + 1 >> 0, ((x$2 < 0 || x$2 >= rune.$length) ? ($throwRuntimeError("index out of range"), undefined) : rune.$array[rune.$offset + x$2]))) {
 
'					return m;
    				}
 
8				lo = m + 1 >> 0;
    			} else {
 
Q				hi = m;
    			}
    		}
 
`		return -1;
    	};
	Inst.prototype.MatchRunePos = function(r) { return this.$val.MatchRunePos(r); };
Instregexp/syntax.Instunicode.SimpleFold %(*regexp/syntax.Inst).MatchEmptyWidth �	Inst.ptr.prototype.MatchEmptyWidth = function(before, after) {
		var _1, after, before, i;
		i = this;
    		_1 = ((i.Arg << 24 >>> 24));
    		if (_1 === (1)) {
 �			return (before === 10) || (before === -1);
    		} else if (_1 === (2)) {
 �			return (after === 10) || (after === -1);
    		} else if (_1 === (4)) {
 			return before === -1;
    		} else if (_1 === (8)) {
 /			return after === -1;
    		} else if (_1 === (16)) {
 ]			return !(IsWordChar(before) === IsWordChar(after));
    		} else if (_1 === (32)) {
 �			return IsWordChar(before) === IsWordChar(after);
    		}
 �		$panic(new $String("unknown empty width arg"));
    	};
	Inst.prototype.MatchEmptyWidth = function(before, after) { return this.$val.MatchEmptyWidth(before, after); };
Instregexp/syntax.Instregexp/syntax.IsWordChar (*regexp/syntax.Inst).String �	Inst.ptr.prototype.String = function() {
		var b, i;
		i = this;
 &		b = new strings.Builder.ptr(ptrType$4.nil, sliceType$6.nil);
 9		dumpInst(b, i);
 J		return b.String();
    	};
	Inst.prototype.String = function() { return this.$val.String(); };
Instregexp/syntax.Instregexp/syntax.dumpInstregexp/syntax.ptrType$4regexp/syntax.sliceType$6strings.Builder regexp/syntax.bwregexp/syntaxbw bw�D	bw = function(b, args) {
		var _i, _ref, args, b, s;
 �		_ref = args;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 �			b.WriteString(s);
    			_i++;
		}
    	};
bwregexp/syntax.bw regexp/syntax.dumpProgregexp/syntaxdumpProg dumpProg�p	dumpProg = function(b, p) {
		var _i, _ref, b, i, j, p, pc, x;
 �		_ref = p.Inst;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			j = _i;
 			i = (x = p.Inst, ((j < 0 || j >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + j]));
 			pc = strconv.Itoa(j);
    			if (pc.length < 3) {
 F				b.WriteString($substring("   ", pc.length));
    			}
    			if (j === p.Start) {
 �				pc = pc + ("*");
    			}
 �			bw(b, new sliceType$3([pc, "\t"]));
 �			dumpInst(b, i);
 �			bw(b, new sliceType$3(["\n"]));
    			_i++;
		}
    	};
dumpProgregexp/syntax.bwregexp/syntax.dumpInstregexp/syntax.dumpProgregexp/syntax.sliceType$3strconv.Itoa regexp/syntax.u32regexp/syntaxu32 u32b	u32 = function(i) {
		var i;
 �		return strconv.FormatUint((new $Uint64(0, i)), 10);
    	};
u32regexp/syntax.u32strconv.FormatUint regexp/syntax.dumpInstregexp/syntaxdumpInst dumpInst��	dumpInst = function(b, i) {
		var _1, b, i;
    		_1 = i.Op;
    		if (_1 === (0)) {
 [			bw(b, new sliceType$3(["alt -> ", u32(i.Out), ", ", u32(i.Arg)]));
    		} else if (_1 === (1)) {
 �			bw(b, new sliceType$3(["altmatch -> ", u32(i.Out), ", ", u32(i.Arg)]));
    		} else if (_1 === (2)) {
 �			bw(b, new sliceType$3(["cap ", u32(i.Arg), " -> ", u32(i.Out)]));
    		} else if (_1 === (3)) {
 /			bw(b, new sliceType$3(["empty ", u32(i.Arg), " -> ", u32(i.Out)]));
    		} else if (_1 === (4)) {
 r			bw(b, new sliceType$3(["match"]));
    		} else if (_1 === (5)) {
 �			bw(b, new sliceType$3(["fail"]));
    		} else if (_1 === (6)) {
 �			bw(b, new sliceType$3(["nop -> ", u32(i.Out)]));
    		} else if (_1 === (7)) {
    			if (i.Rune === sliceType.nil) {
 				bw(b, new sliceType$3(["rune <nil>"]));
    			}
 (			bw(b, new sliceType$3(["rune ", strconv.QuoteToASCII(($runesToString(i.Rune)))]));
    			if (!((((((i.Arg << 16 >>> 16)) & 1) >>> 0) === 0))) {
 �				bw(b, new sliceType$3(["/i"]));
    			}
 �			bw(b, new sliceType$3([" -> ", u32(i.Out)]));
    		} else if (_1 === (8)) {
 �			bw(b, new sliceType$3(["rune1 ", strconv.QuoteToASCII(($runesToString(i.Rune))), " -> ", u32(i.Out)]));
    		} else if (_1 === (9)) {
  			bw(b, new sliceType$3(["any -> ", u32(i.Out)]));
    		} else if (_1 === (10)) {
 W			bw(b, new sliceType$3(["anynotnl -> ", u32(i.Out)]));
    		}
    	};
dumpInstregexp/syntax.bwregexp/syntax.dumpInstregexp/syntax.sliceTyperegexp/syntax.sliceType$3regexp/syntax.u32strconv.QuoteToASCII (*regexp/syntax.Regexp).Equal ��	Regexp.ptr.prototype.Equal = function(y) {
		var _1, _i, _i$1, _ref, _ref$1, i, i$1, r, sub, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, y;
		x = this;
    		if (x === ptrType$1.nil || y === ptrType$1.nil) {
 �			return x === y;
    		}
    		if (!((x.Op === y.Op))) {
 �			return false;
    		}
    		_1 = x.Op;
    		if (_1 === (10)) {
    			if (!((((x.Flags & 256) >>> 0) === ((y.Flags & 256) >>> 0)))) {
 �				return false;
    			}
    		} else if ((_1 === (3)) || (_1 === (4))) {
    			if (!((x.Rune.$length === y.Rune.$length))) {
 �				return false;
    			}
 �			_ref = x.Rune;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (!((r === (x$1 = y.Rune, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]))))) {
 %					return false;
    				}
    				_i++;
			}
    		} else if ((_1 === (19)) || (_1 === (18))) {
    			if (!((x.Sub.$length === y.Sub.$length))) {
 |				return false;
    			}
 �			_ref$1 = x.Sub;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i$1 = _i$1;
				sub = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    				if (!sub.Equal((x$2 = y.Sub, ((i$1 < 0 || i$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i$1])))) {
 �					return false;
    				}
    				_i$1++;
			}
    		} else if ((_1 === (14)) || (_1 === (15)) || (_1 === (16))) {
    			if (!((((x.Flags & 32) >>> 0) === ((y.Flags & 32) >>> 0))) || !(x$3 = x.Sub, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])).Equal((x$4 = y.Sub, (0 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 0])))) {
 P				return false;
    			}
    		} else if (_1 === (17)) {
    			if (!((((x.Flags & 32) >>> 0) === ((y.Flags & 32) >>> 0))) || !((x.Min === y.Min)) || !((x.Max === y.Max)) || !(x$5 = x.Sub, (0 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 0])).Equal((x$6 = y.Sub, (0 >= x$6.$length ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + 0])))) {
 �				return false;
    			}
    		} else if (_1 === (13)) {
    			if (!((x.Cap === y.Cap)) || !(x.Name === y.Name) || !(x$7 = x.Sub, (0 >= x$7.$length ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + 0])).Equal((x$8 = y.Sub, (0 >= x$8.$length ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + 0])))) {
  Q				return false;
    			}
    		}
  f		return true;
    	};
	Regexp.prototype.Equal = function(y) { return this.$val.Equal(y); };
Regexpregexp/syntax.Regexpregexp/syntax.ptrType$1 regexp/syntax.writeRegexpregexp/syntaxwriteRegexp writeRegexp��	writeRegexp = function(b, re) {
		var _1, _2, _i, _i$1, _i$2, _r, _ref, _ref$1, _ref$2, _tmp, _tmp$1, _tmp$2, _tmp$3, b, hi, hi$1, i, i$1, i$2, lo, lo$1, r, re, sub, sub$1, sub$2, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		switch (0) { default:
    			_1 = re.Op;
    			if (_1 === (1)) {
 !_				b.WriteString("[^\\x00-\\x{10FFFF}]");
    			} else if (_1 === (2)) {
 !�				b.WriteString("(?:)");
    			} else if (_1 === (3)) {
    				if (!((((re.Flags & 1) >>> 0) === 0))) {
 !�					b.WriteString("(?i:");
    				}
 !�				_ref = re.Rune;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 "					escape(b, r, false);
    					_i++;
				}
    				if (!((((re.Flags & 1) >>> 0) === 0))) {
 "U					b.WriteString(")");
    				}
    			} else if (_1 === (4)) {
    				if (!(((_r = re.Rune.$length % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
 "�					b.WriteString("[invalid char class]");
 "�					break;
    				}
 "�				b.WriteRune(91);
    				if (re.Rune.$length === 0) {
 "�					b.WriteString("^\\x00-\\x{10FFFF}");
    				} else if (((x = re.Rune, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) === 0) && ((x$1 = re.Rune, x$2 = re.Rune.$length - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2])) === 1114111) && re.Rune.$length > 2) {
 #�					b.WriteRune(94);
 #�					i = 1;
					while (true) {
						if (!(i < (re.Rune.$length - 1 >> 0))) { break; }
 $						_tmp = (x$3 = re.Rune, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i])) + 1 >> 0;
						_tmp$1 = (x$4 = re.Rune, x$5 = i + 1 >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5])) - 1 >> 0;
						lo = _tmp;
						hi = _tmp$1;
 $>						escape(b, lo, lo === 45);
    						if (!((lo === hi))) {
 $n							b.WriteRune(45);
 $�							escape(b, hi, hi === 45);
    						}
 $						i = i + (2) >> 0;
    					}
    				} else {
 $�					i$1 = 0;
					while (true) {
						if (!(i$1 < re.Rune.$length)) { break; }
 $�						_tmp$2 = (x$6 = re.Rune, ((i$1 < 0 || i$1 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + i$1]));
						_tmp$3 = (x$7 = re.Rune, x$8 = i$1 + 1 >> 0, ((x$8 < 0 || x$8 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + x$8]));
						lo$1 = _tmp$2;
						hi$1 = _tmp$3;
 %						escape(b, lo$1, lo$1 === 45);
    						if (!((lo$1 === hi$1))) {
 %8							b.WriteRune(45);
 %N							escape(b, hi$1, hi$1 === 45);
    						}
 $�						i$1 = i$1 + (2) >> 0;
    					}
    				}
 %x				b.WriteRune(93);
    			} else if (_1 === (5)) {
 %�				b.WriteString("(?-s:.)");
    			} else if (_1 === (6)) {
 %�				b.WriteString("(?s:.)");
    			} else if (_1 === (7)) {
 %�				b.WriteString("(?m:^)");
    			} else if (_1 === (8)) {
 &%				b.WriteString("(?m:$)");
    			} else if (_1 === (9)) {
 &R				b.WriteString("\\A");
    			} else if (_1 === (10)) {
    				if (!((((re.Flags & 256) >>> 0) === 0))) {
 &�					b.WriteString("(?-m:$)");
    				} else {
 &�					b.WriteString("\\z");
    				}
    			} else if (_1 === (11)) {
 &�				b.WriteString("\\b");
    			} else if (_1 === (12)) {
 '				b.WriteString("\\B");
    			} else if (_1 === (13)) {
    				if (!(re.Name === "")) {
 '[					b.WriteString("(?P<");
 't					b.WriteString(re.Name);
 '�					b.WriteRune(62);
    				} else {
 '�					b.WriteRune(40);
    				}
    				if (!(((x$9 = re.Sub, (0 >= x$9.$length ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + 0])).Op === 2))) {
 '�					writeRegexp(b, (x$10 = re.Sub, (0 >= x$10.$length ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + 0])));
    				}
 (					b.WriteRune(41);
    			} else if ((_1 === (14)) || (_1 === (15)) || (_1 === (16)) || (_1 === (17))) {
 (H				sub = (x$11 = re.Sub, (0 >= x$11.$length ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + 0]));
    				if (sub.Op > 13 || (sub.Op === 3) && sub.Rune.$length > 1) {
 (�					b.WriteString("(?:");
 (�					writeRegexp(b, sub);
 (�					b.WriteString(")");
    				} else {
 (�					writeRegexp(b, sub);
    				}
    				_2 = re.Op;
    				if (_2 === (14)) {
 ))					b.WriteRune(42);
    				} else if (_2 === (15)) {
 )L					b.WriteRune(43);
    				} else if (_2 === (16)) {
 )p					b.WriteRune(63);
    				} else if (_2 === (17)) {
 )�					b.WriteRune(123);
 )�					b.WriteString(strconv.Itoa(re.Min));
    					if (!((re.Max === re.Min))) {
 )�						b.WriteRune(44);
    						if (re.Max >= 0) {
 *							b.WriteString(strconv.Itoa(re.Max));
    						}
    					}
 *G					b.WriteRune(125);
    				}
    				if (!((((re.Flags & 32) >>> 0) === 0))) {
 *~					b.WriteRune(63);
    				}
    			} else if (_1 === (18)) {
 *�				_ref$1 = re.Sub;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					sub$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    					if (sub$1.Op === 19) {
 *�						b.WriteString("(?:");
 *�						writeRegexp(b, sub$1);
 +						b.WriteString(")");
    					} else {
 +8						writeRegexp(b, sub$1);
    					}
    					_i$1++;
				}
    			} else if (_1 === (19)) {
 +j				_ref$2 = re.Sub;
				_i$2 = 0;
				while (true) {
					if (!(_i$2 < _ref$2.$length)) { break; }
					i$2 = _i$2;
					sub$2 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
    					if (i$2 > 0) {
 +�						b.WriteRune(124);
    					}
 +�					writeRegexp(b, sub$2);
    					_i$2++;
				}
    			} else {
 !				b.WriteString("<invalid op" + strconv.Itoa(((re.Op >> 0))) + ">");
    			}
    		}
    	};
writeRegexpregexp/syntax.escaperegexp/syntax.writeRegexpstrconv.Itoa (*regexp/syntax.Regexp).String �	Regexp.ptr.prototype.String = function() {
		var b, re;
		re = this;
 +�		b = new strings.Builder.ptr(ptrType$4.nil, sliceType$6.nil);
 ,		writeRegexp(b, re);
 ,!		return b.String();
    	};
	Regexp.prototype.String = function() { return this.$val.String(); };
Regexpregexp/syntax.Regexpregexp/syntax.ptrType$4regexp/syntax.sliceType$6regexp/syntax.writeRegexpstrings.Builder regexp/syntax.escaperegexp/syntaxescape escape�=	escape = function(b, r, force) {
		var _1, b, force, r, s;
    		if (unicode.IsPrint(r)) {
    			if (strings.ContainsRune("\\.+*?()|[]{}^$", r) || force) {
 ,�				b.WriteRune(92);
    			}
 ,�			b.WriteRune(r);
 ,�			return;
    		}
 -
		switch (0) { default:
    			_1 = r;
    			if (_1 === (7)) {
 -#				b.WriteString("\\a");
    			} else if (_1 === (12)) {
 -E				b.WriteString("\\f");
    			} else if (_1 === (10)) {
 -g				b.WriteString("\\n");
    			} else if (_1 === (13)) {
 -�				b.WriteString("\\r");
    			} else if (_1 === (9)) {
 -�				b.WriteString("\\t");
    			} else if (_1 === (11)) {
 -�				b.WriteString("\\v");
    			} else {
    				if (r < 256) {
 -�					b.WriteString("\\x");
 .					s = strconv.FormatInt((new $Int64(0, r)), 16);
    					if (s.length === 1) {
 .S						b.WriteRune(48);
    					}
 .l					b.WriteString(s);
 .�					break;
    				}
 .�				b.WriteString("\\x{");
 .�				b.WriteString(strconv.FormatInt((new $Int64(0, r)), 16));
 .�				b.WriteString("}");
    			}
    		}
    	};
escaperegexp/syntax.escapestrconv.FormatIntstrings.ContainsRuneunicode.IsPrint (*regexp/syntax.Regexp).MaxCap �6	Regexp.ptr.prototype.MaxCap = function() {
		var _i, _ref, m, n, re, sub;
		re = this;
 /M		m = 0;
    		if (re.Op === 13) {
 /o			m = re.Cap;
    		}
 /~		_ref = re.Sub;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			sub = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 /�			n = sub.MaxCap();
    			if (m < n) {
 /�				m = n;
    			}
    			_i++;
		}
 /�		return m;
    	};
	Regexp.prototype.MaxCap = function() { return this.$val.MaxCap(); };
Regexpregexp/syntax.Regexp  (*regexp/syntax.Regexp).CapNames �	Regexp.ptr.prototype.CapNames = function() {
		var names, re;
		re = this;
 0E		names = $makeSlice(sliceType$3, (re.MaxCap() + 1 >> 0));
 0m		re.capNames(names);
 0�		return names;
    	};
	Regexp.prototype.CapNames = function() { return this.$val.CapNames(); };
Regexpregexp/syntax.Regexpregexp/syntax.capNames~regexp/syntax.sliceType$3  (*regexp/syntax.Regexp).capNames ��	Regexp.ptr.prototype.capNames = function(names) {
		var _i, _ref, names, re, sub, x;
		re = this;
    		if (re.Op === 13) {
 0�			(x = re.Cap, ((x < 0 || x >= names.$length) ? ($throwRuntimeError("index out of range"), undefined) : names.$array[names.$offset + x] = re.Name));
    		}
 0�		_ref = re.Sub;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			sub = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 1			sub.capNames(names);
    			_i++;
		}
    	};
	Regexp.prototype.capNames = function(names) { return this.$val.capNames(names); };
Regexp	capNames~regexp/syntax.Regexpregexp/syntax.capNames~  (*regexp/syntax.Regexp).Simplify �7	Regexp.ptr.prototype.Simplify = function() {
		var _1, _i, _ref, i, i$1, i$2, i$3, nre, nre$1, nre2, nsub, prefix, re, sub, sub$1, sub$2, suffix, x, x$1;
		re = this;
    		if (re === ptrType$1.nil) {
 4			return ptrType$1.nil;
    		}
    		_1 = re.Op;
    		if ((_1 === (13)) || (_1 === (18)) || (_1 === (19))) {
 4�			nre = re;
 4�			_ref = re.Sub;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				sub = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
 4�				nsub = sub.Simplify();
    				if (nre === re && !(nsub === sub)) {
 5					nre = new Regexp.ptr(0, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
 54					Regexp.copy(nre, re);
 5C					nre.Rune = sliceType.nil;
 5V					nre.Sub = $appendSlice($subslice(new sliceType$5(nre.Sub0), 0, 0), $subslice(re.Sub, 0, i));
    				}
    				if (!(nre === re)) {
 5�					nre.Sub = $append(nre.Sub, nsub);
    				}
    				_i++;
			}
 5�			return nre;
    		} else if ((_1 === (14)) || (_1 === (15)) || (_1 === (16))) {
 5�			sub$1 = (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])).Simplify();
 6			return simplify1(re.Op, re.Flags, sub$1, re);
    		} else if (_1 === (17)) {
    			if ((re.Min === 0) && (re.Max === 0)) {
 6�				return new Regexp.ptr(2, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
    			}
 7			sub$2 = (x$1 = re.Sub, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0])).Simplify();
    			if (re.Max === -1) {
    				if (re.Min === 0) {
 7�					return simplify1(14, re.Flags, sub$2, ptrType$1.nil);
    				}
    				if (re.Min === 1) {
 8					return simplify1(15, re.Flags, sub$2, ptrType$1.nil);
    				}
 8p				nre$1 = new Regexp.ptr(18, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
 8�				nre$1.Sub = $subslice(new sliceType$5(nre$1.Sub0), 0, 0);
 8�				i$1 = 0;
				while (true) {
					if (!(i$1 < (re.Min - 1 >> 0))) { break; }
 8�					nre$1.Sub = $append(nre$1.Sub, sub$2);
 8�					i$1 = i$1 + (1) >> 0;
    				}
 8�				nre$1.Sub = $append(nre$1.Sub, simplify1(15, re.Flags, sub$2, ptrType$1.nil));
 99				return nre$1;
    			}
    			if ((re.Min === 1) && (re.Max === 1)) {
 9�				return sub$2;
    			}
 :�			prefix = ptrType$1.nil;
    			if (re.Min > 0) {
 :�				prefix = new Regexp.ptr(18, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
 :�				prefix.Sub = $subslice(new sliceType$5(prefix.Sub0), 0, 0);
 ; 				i$2 = 0;
				while (true) {
					if (!(i$2 < re.Min)) { break; }
 ;					prefix.Sub = $append(prefix.Sub, sub$2);
 ;					i$2 = i$2 + (1) >> 0;
    				}
    			}
    			if (re.Max > re.Min) {
 ;�				suffix = simplify1(16, re.Flags, sub$2, ptrType$1.nil);
 ;�				i$3 = re.Min + 1 >> 0;
				while (true) {
					if (!(i$3 < re.Max)) { break; }
 ;�					nre2 = new Regexp.ptr(18, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
 <					nre2.Sub = $append($subslice(new sliceType$5(nre2.Sub0), 0, 0), sub$2, suffix);
 <E					suffix = simplify1(16, re.Flags, nre2, ptrType$1.nil);
 ;�					i$3 = i$3 + (1) >> 0;
    				}
    				if (prefix === ptrType$1.nil) {
 <�					return suffix;
    				}
 <�				prefix.Sub = $append(prefix.Sub, suffix);
    			}
    			if (!(prefix === ptrType$1.nil)) {
 <�				return prefix;
    			}
 =`			return new Regexp.ptr(1, 0, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
    		}
 =�		return re;
    	};
	Regexp.prototype.Simplify = function() { return this.$val.Simplify(); };
Regexpregexp/syntax.Regexpregexp/syntax.arrayTyperegexp/syntax.arrayType$1regexp/syntax.ptrType$1regexp/syntax.simplify1regexp/syntax.sliceTyperegexp/syntax.sliceType$5 regexp/syntax.simplify1regexp/syntax	simplify1 	simplify1��	simplify1 = function(op, flags, sub, re) {
		var flags, op, re, sub, x;
    		if (sub.Op === 2) {
 @�			return sub;
    		}
    		if ((op === sub.Op) && (((flags & 32) >>> 0) === ((sub.Flags & 32) >>> 0))) {
 A+			return sub;
    		}
    		if (!(re === ptrType$1.nil) && (re.Op === op) && (((re.Flags & 32) >>> 0) === ((flags & 32) >>> 0)) && sub === (x = re.Sub, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]))) {
 A�			return re;
    		}
 A�		re = new Regexp.ptr(op, flags, sliceType$5.nil, arrayType.zero(), sliceType.nil, arrayType$1.zero(), 0, 0, 0, "");
 A�		re.Sub = $append($subslice(new sliceType$5(re.Sub0), 0, 0), sub);
 A�		return re;
    	};
	simplify1regexp/syntax.Regexpregexp/syntax.arrayTyperegexp/syntax.arrayType$1regexp/syntax.ptrType$1regexp/syntax.simplify1regexp/syntax.sliceTyperegexp/syntax.sliceType$5 �I�{"Base":82426,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/compile.go","Base":1,"Size":6991,"Lines":[0,55,109,159,160,175,176,193,194,280,359,429,496,499,577,642,704,777,854,878,897,899,900,941,965,967,968,1016,1032,1049,1073,1092,1108,1123,1134,1150,1165,1169,1172,1174,1175,1237,1256,1268,1271,1290,1302,1305,1306,1332,1353,1371,1381,1399,1402,1438,1440,1441,1491,1510,1560,1615,1678,1680,1681,1704,1713,1715,1716,1778,1857,1899,1915,1925,1945,1984,2006,2023,2025,2026,2054,2071,2126,2144,2146,2147,2213,2254,2255,2301,2317,2334,2352,2372,2389,2406,2431,2449,2453,2466,2493,2535,2550,2561,2573,2594,2599,2603,2614,2633,2668,2690,2723,2740,2768,2787,2820,2837,2868,2887,2920,2937,2968,2990,3026,3050,3088,3105,3141,3171,3209,3246,3260,3323,3337,3400,3415,3479,3495,3519,3537,3541,3554,3585,3600,3623,3635,3668,3673,3677,3688,3707,3720,3751,3783,3787,3798,3801,3845,3847,3848,3890,3920,3973,4016,4026,4028,4029,4061,4083,4116,4126,4128,4129,4162,4177,4179,4180,4222,4248,4281,4306,4307,4337,4365,4368,4378,4380,4381,4424,4457,4486,4502,4505,4506,4526,4527,4552,4607,4609,4610,4653,4681,4697,4709,4712,4728,4740,4743,4744,4766,4787,4801,4815,4851,4892,4902,4904,4905,4962,4984,5005,5021,5036,5070,5080,5095,5131,5134,5169,5179,5181,5182,5248,5310,5384,5457,5502,5558,5580,5601,5617,5632,5666,5676,5691,5727,5730,5754,5764,5766,5767,5823,5841,5894,5927,5978,5981,6011,6013,6014,6070,6129,6131,6132,6176,6205,6237,6270,6280,6282,6283,6337,6360,6380,6401,6413,6466,6520,6553,6574,6577,6600,6633,6634,6670,6680,6755,6774,6833,6854,6949,6975,6978,6979,6989],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/doc.go","Base":6993,"Size":5475,"Lines":[0,55,109,159,160,240,241,244,316,392,474,475,482,483,587,660,661,662,681,754,787,828,866,912,951,998,1057,1098,1165,1214,1215,1227,1260,1295,1296,1309,1354,1398,1441,1494,1536,1565,1611,1656,1700,1754,1797,1826,1827,1898,1973,2032,2033,2043,2096,2157,2194,2257,2309,2310,2395,2396,2446,2555,2603,2690,2691,2706,2766,2837,2875,2963,3007,3039,3040,3058,3090,3127,3169,3204,3247,3297,3357,3416,3473,3509,3571,3572,3598,3632,3677,3715,3758,3803,3864,3865,3918,3950,3986,4022,4062,4134,4215,4292,4377,4378,4419,4454,4494,4539,4589,4640,4696,4697,4722,4769,4811,4851,4885,4931,4966,5054,5093,5147,5196,5243,5282,5333,5377,5378,5457,5460],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/op_string.go","Base":12469,"Size":663,"Lines":[0,70,71,86,87,104,105,113,281,306,308,309,315,427,429,430,460,470,495,504,557,573,593,603,658,661],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/parse.go","Base":13133,"Size":47072,"Lines":[0,55,109,159,160,175,176,185,193,204,215,231,233,234,296,335,355,371,384,386,387,420,494,496,497,564,586,587,595,616,678,679,696,760,830,894,956,1031,1106,1167,1221,1279,1337,1417,1497,1550,1552,1553,1590,1608,1610,1611,1700,1718,1719,1727,1786,1854,1959,2020,2116,2200,2258,2348,2415,2489,2490,2517,2518,2607,2680,2682,2683,2716,2724,2755,2770,2772,2773,2794,2837,2891,2912,2964,2984,3039,3041,3042,3086,3100,3116,3138,3155,3165,3184,3187,3199,3210,3212,3213,3250,3271,3284,3286,3287,3316,3317,3391,3435,3511,3529,3581,3595,3599,3619,3643,3676,3732,3790,3840,3890,3937,3970,4021,4071,4119,4170,4184,4188,4189,4233,4253,4277,4309,4319,4351,4374,4377,4378,4409,4420,4422,4423,4475,4536,4595,4657,4721,4763,4826,4861,4906,4963,4982,4994,5009,5012,5013,5034,5055,5148,5163,5166,5167,5190,5232,5233,5260,5273,5300,5318,5338,5352,5355,5356,5381,5395,5427,5429,5430,5494,5529,5559,5579,5607,5628,5631,5648,5672,5684,5686,5687,5749,5781,5814,5825,5828,5838,5847,5916,5931,5942,5946,5949,5961,5963,5964,6019,6047,6084,6107,6127,6146,6148,6149,6238,6306,6377,6436,6533,6551,6576,6617,6638,6660,6664,6688,6751,6814,6869,6951,6955,6958,6977,6990,7069,7072,7093,7118,7197,7200,7201,7224,7238,7252,7270,7292,7309,7328,7329,7404,7479,7482,7483,7502,7504,7505,7566,7630,7691,7711,7788,7860,7929,8001,8076,8121,8145,8159,8173,8188,8192,8205,8219,8223,8236,8252,8256,8269,8279,8283,8286,8316,8346,8362,8366,8369,8382,8384,8385,8480,8516,8538,8539,8585,8604,8647,8653,8656,8677,8700,8701,8742,8763,8806,8809,8810,8853,8855,8856,8945,8984,9025,9053,9072,9115,9121,9124,9145,9168,9169,9203,9257,9277,9307,9310,9311,9347,9390,9411,9451,9454,9455,9501,9503,9504,9568,9596,9612,9631,9664,9741,9758,9779,9789,9793,9918,9935,9961,9971,9975,10014,10052,10100,10146,10150,10153,10155,10156,10210,10263,10316,10346,10405,10426,10443,10446,10469,10491,10519,10539,10578,10594,10605,10637,10641,10644,10668,10696,10720,10733,10751,10767,10771,10774,10785,10787,10788,10853,10919,10970,10973,10989,11016,11062,11090,11145,11171,11174,11225,11244,11257,11260,11261,11310,11326,11346,11358,11374,11408,11472,11539,11573,11578,11642,11681,11699,11718,11738,11780,11807,11821,11894,11906,11912,11930,11982,12009,12031,12045,12051,12056,12060,12061,12121,12182,12220,12225,12294,12312,12351,12378,12418,12451,12462,12521,12557,12584,12633,12634,12666,12719,12724,12786,12787,12818,12865,12890,12894,12895,12928,12940,12953,12973,12976,12987,12988,13036,13084,13132,13136,13192,13248,13304,13335,13346,13361,13380,13414,13478,13545,13579,13584,13661,13682,13702,13738,13783,13862,13970,13983,13988,13992,13993,14045,14105,14110,14179,14197,14236,14263,14303,14336,14347,14406,14425,14457,14512,14562,14567,14629,14630,14661,14708,14733,14737,14738,14771,14783,14800,14803,14814,14815,14885,14896,14911,14945,15009,15076,15110,15115,15180,15221,15264,15276,15280,15281,15322,15363,15381,15420,15447,15480,15491,15518,15570,15586,15622,15724,15737,15743,15748,15795,15796,15832,15871,15891,15896,15920,15953,15957,15958,15989,16009,16038,16042,16058,16061,16072,16073,16144,16155,16170,16192,16274,16286,16290,16318,16321,16332,16333,16345,16347,16348,16421,16476,16537,16580,16597,16600,16625,16641,16644,16681,16683,16684,16741,16805,16871,16914,16964,17003,17022,17060,17078,17108,17124,17148,17162,17192,17217,17234,17245,17259,17278,17295,17307,17336,17372,17377,17381,17393,17396,17397,17422,17471,17496,17520,17524,17527,17538,17540,17541,17606,17661,17714,17742,17755,17758,17801,17820,17850,17864,17868,17881,17884,17895,17897,17898,17955,17993,18077,18148,18191,18204,18226,18230,18275,18298,18308,18332,18348,18358,18371,18389,18405,18409,18421,18424,18436,18450,18453,18487,18489,18490,18542,18572,18590,18653,18676,18712,18772,18795,18804,18808,18839,18842,18853,18855,18856,18868,18869,18944,19013,19052,19105,19130,19170,19209,19228,19232,19270,19273,19274,19308,19315,19335,19354,19372,19388,19408,19411,19428,19447,19455,19470,19485,19497,19513,19524,19568,19588,19593,19609,19610,19622,19679,19725,19775,19796,19802,19812,19817,19831,19867,19880,19892,19939,19959,19964,19977,19989,20035,20055,20060,20073,20085,20114,20136,20148,20170,20175,20188,20200,20229,20268,20280,20300,20305,20318,20330,20357,20377,20389,20414,20419,20432,20444,20489,20509,20514,20536,20551,20568,20581,20597,20610,20626,20639,20656,20661,20679,20758,20778,20783,20802,20815,20827,20844,20859,20902,20914,20969,20988,21002,21012,21017,21086,21148,21226,21231,21314,21334,21339,21358,21371,21384,21426,21444,21458,21481,21496,21517,21531,21557,21572,21593,21607,21635,21650,21671,21685,21717,21766,21780,21826,21846,21891,21909,21922,21936,21955,21973,21980,22001,22037,22059,22082,22090,22109,22126,22133,22154,22168,22189,22204,22225,22231,22236,22237,22271,22293,22294,22346,22398,22455,22475,22496,22502,22520,22537,22551,22567,22588,22594,22599,22600,22635,22704,22720,22733,22748,22768,22773,22788,22789,22829,22878,22898,22903,22919,22923,22945,22948,22949,22961,22987,23009,23046,23049,23064,23065,23084,23097,23138,23141,23165,23167,23168,23239,23292,23381,23459,23488,23497,23500,23511,23525,23565,23574,23577,23591,23600,23603,23621,23633,23643,23655,23670,23680,23684,23703,23715,23763,23773,23795,23833,23845,23849,23852,23881,23890,23893,23907,23918,23926,23928,23929,24006,24094,24151,24220,24228,24229,24304,24363,24367,24425,24490,24559,24563,24625,24687,24751,24822,24826,24886,24947,24998,25045,25065,25100,25115,25154,25173,25178,25226,25230,25231,25269,25302,25343,25361,25365,25398,25452,25456,25457,25496,25509,25535,25555,25572,25596,25599,25600,25656,25668,25690,25708,25720,25738,25744,25759,25802,25820,25824,25837,25848,25862,25863,25875,25887,25908,25926,25938,25959,25977,25989,26007,26025,26037,26059,26077,26078,26103,26115,26132,26147,26152,26165,26229,26283,26301,26320,26321,26363,26380,26397,26415,26431,26437,26456,26461,26478,26500,26522,26527,26546,26563,26567,26570,26571,26627,26629,26630,26673,26716,26750,26796,26833,26877,26894,26909,26912,26938,26969,26985,26989,26992,27005,27007,27008,27046,27114,27156,27165,27168,27196,27259,27268,27271,27279,27324,27336,27339,27349,27360,27392,27415,27446,27467,27483,27493,27502,27506,27535,27538,27546,27548,27549,27598,27654,27690,27741,27767,27796,27817,27819,27820,27840,27882,27898,27915,27961,27980,28021,28066,28082,28087,28091,28106,28128,28147,28164,28178,28181,28195,28197,28198,28244,28288,28300,28301,28362,28415,28474,28514,28541,28563,28566,28567,28579,28581,28582,28621,28670,28706,28746,28763,28780,28811,28833,28855,28883,28905,28909,28928,28981,29008,29070,29081,29127,29131,29148,29166,29226,29235,29239,29262,29327,29388,29391,29393,29394,29464,29515,29546,29588,29651,29691,29710,29817,29839,29861,29904,29927,29950,29972,29976,30003,30018,30044,30058,30061,30062,30075,30097,30119,30150,30165,30190,30222,30249,30254,30276,30298,30313,30317,30320,30334,30336,30337,30382,30425,30437,30463,30485,30522,30525,30540,30541,30560,30572,30623,30626,30647,30668,30693,30721,30772,30775,30811,30832,30851,30875,30889,30899,30920,30945,30964,30978,30981,30993,30995,30996,31059,31084,31158,31170,31184,31233,31236,31262,31279,31299,31302,31303,31311,31323,31333,31373,31430,31490,31548,31607,31627,31631,31632,31651,31692,31753,31796,31805,31809,31823,31834,31891,31905,31932,31976,31986,31991,32021,32034,32038,32057,32058,32083,32094,32109,32118,32122,32165,32186,32190,32206,32244,32300,32365,32389,32402,32411,32420,32437,32455,32461,32506,32529,32535,32553,32564,32570,32588,32603,32621,32627,32644,32673,32691,32697,32708,32713,32731,32748,32753,32773,32777,32778,32810,32826,32869,32890,32894,32910,32932,32941,32945,32971,32972,33029,33081,33139,33194,33249,33276,33287,33309,33320,33342,33353,33375,33386,33408,33419,33441,33452,33474,33477,33536,33538,33539,33614,33633,33722,33736,33802,33805,33806,33853,33899,33918,33944,33947,33948,33968,33970,33971,33995,34006,34020,34022,34023,34100,34178,34242,34328,34383,34392,34395,34419,34437,34446,34449,34484,34486,34487,34566,34644,34708,34800,34847,34856,34859,34860,34893,34905,34914,34917,34925,34955,34978,34996,35048,35051,35087,35089,35090,35151,35179,35197,35235,35246,35277,35281,35291,35315,35355,35374,35406,35424,35458,35469,35496,35500,35503,35513,35515,35516,35552,35612,35684,35686,35687,35753,35813,35889,35924,35944,35972,35975,36021,36060,36063,36106,36143,36146,36163,36165,36166,36241,36319,36383,36477,36570,36579,36582,36583,36623,36635,36653,36665,36668,36680,36706,36723,36732,36735,36757,36772,36797,36823,36840,36850,36874,36909,36924,36963,36974,36979,37029,37033,37065,37083,37124,37134,37138,37141,37142,37226,37261,37276,37294,37297,37298,37331,37348,37399,37402,37403,37446,37462,37489,37500,37534,37538,37548,37605,37664,37692,37716,37746,37777,37796,37828,37844,37871,37882,37916,37920,37923,37941,37943,37944,38005,38044,38109,38131,38163,38183,38207,38208,38220,38249,38261,38273,38274,38330,38383,38411,38452,38456,38459,38460,38478,38536,38575,38639,38670,38764,38809,38875,38879,38895,38896,38931,38979,39029,39048,39067,39072,39094,39120,39133,39138,39142,39143,39195,39246,39264,39282,39286,39307,39332,39344,39348,39349,39405,39474,39499,39511,39515,39516,39555,39566,39584,39639,39657,39661,39671,39715,39764,39777,39833,39852,39857,39873,39905,39965,39970,39974,40003,40041,40052,40096,40100,40103,40124,40125,40181,40198,40228,40243,40272,40275,40292,40304,40319,40321,40322,40379,40422,40459,40460,40516,40539,40540,40550,40567,40578,40581,40582,40615,40638,40672,40697,40719,40751,40771,40787,40792,40804,40808,40832,40844,40858,40867,40870,40871,40885,40887,40888,40967,41026,41052,41088,41091,41120,41122,41123,41202,41251,41320,41377,41439,41464,41477,41532,41546,41578,41613,41631,41648,41654,41672,41691,41697,41710,41715,41719,41722,41723,41749,41751,41752,41760,41811,41836,41854,41873,41875,41876,41945,42002,42057,42076,42113,42157,42189,42192,42227,42272,42304,42307,42326,42365,42401,42416,42419,42438,42477,42513,42528,42531,42532,42602,42631,42658,42687,42702,42730,42759,42763,42766,42776,42778,42779,42854,42879,42925,42959,42994,42997,43007,43009,43010,43106,43158,43192,43233,43236,43246,43248,43249,43347,43373,43426,43446,43480,43505,43527,43563,43567,43585,43588,43620,43666,43669,43679,43681,43682,43747,43806,43834,43896,43915,43945,43957,43961,43999,44027,44031,44034,44062,44124,44143,44173,44185,44189,44227,44255,44259,44262,44272,44274,44275,44363,44429,44480,44508,44570,44589,44612,44649,44654,44673,44685,44689,44727,44749,44785,44790,44808,44812,44815,44843,44905,44924,44947,44984,44989,45008,45020,45024,45062,45084,45120,45125,45143,45147,45150,45182,45228,45231,45241,45243,45244,45298,45342,45378,45429,45464,45498,45523,45545,45562,45581,45591,45595,45613,45616,45627,45659,45712,45776,45817,45820,45830,45832,45833,45882,45935,45985,45999,46020,46031,46033,46034,46073,46085,46093,46101,46156,46158,46159,46188,46211,46213,46214,46248,46260,46268,46276,46333,46335,46336,46369,46384,46427,46470,46518,46522,46537,46540,46552,46554,46555,46611,46650,46689,46743,46746,46771,46773,46774,46802,46879,46881,46882,46908,46935,46952,46955,46982,47004,47007,47034,47056,47059,47070],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/perl_groups.go","Base":60206,"Size":2403,"Lines":[0,55,109,159,160,210,249,250,265,266,295,308,310,311,340,351,362,375,377,378,407,420,433,446,459,461,462,500,520,540,560,580,600,620,622,658,671,684,697,699,700,736,749,762,764,765,801,813,815,816,852,863,876,878,879,915,927,940,942,943,979,992,994,995,1032,1045,1047,1048,1085,1098,1100,1101,1138,1151,1153,1154,1191,1204,1217,1230,1243,1245,1246,1283,1294,1307,1309,1310,1347,1360,1362,1363,1399,1412,1425,1438,1451,1453,1454,1492,1505,1518,1531,1533,1534,1573,1602,1631,1660,1689,1718,1747,1776,1805,1834,1863,1892,1921,1951,1981,2011,2041,2071,2101,2131,2161,2191,2221,2251,2281,2311,2341,2371,2401],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/prog.go","Base":62610,"Size":7660,"Lines":[0,55,109,159,160,175,176,185,196,207,218,220,221,242,301,302,354,373,388,430,479,481,482,521,539,540,548,571,585,598,614,625,635,644,654,665,678,696,698,699,727,739,756,772,791,805,818,830,843,857,873,894,896,897,931,971,983,986,1009,1011,1012,1080,1099,1100,1108,1144,1158,1174,1188,1207,1228,1230,1231,1283,1341,1392,1425,1476,1503,1546,1584,1603,1613,1635,1650,1668,1691,1705,1745,1748,1758,1780,1796,1814,1835,1849,1885,1888,1944,1994,1997,2008,2010,2011,2076,2141,2215,2246,2335,2337,2338,2406,2425,2438,2482,2549,2562,2564,2565,2598,2621,2638,2657,2659,2660,2716,2758,2776,2822,2843,2846,2856,2858,2859,2930,2959,2971,2984,3032,3048,3051,3062,3064,3065,3125,3183,3207,3264,3297,3298,3349,3394,3425,3428,3429,3465,3490,3566,3593,3616,3619,3659,3661,3662,3728,3804,3841,3859,3882,3900,3906,3913,3929,3952,3978,3995,4017,4046,4057,4068,4082,4086,4099,4117,4120,4133,4135,4136,4155,4156,4227,4278,4318,4355,4357,4358,4431,4498,4546,4582,4643,4685,4701,4702,4722,4731,4748,4749,4758,4835,4851,4866,4878,4882,4916,4993,5010,5024,5030,5035,5039,5056,5057,5066,5102,5114,5118,5135,5136,5151,5187,5218,5256,5276,5295,5300,5323,5340,5345,5349,5366,5369,5370,5399,5408,5429,5444,5466,5496,5521,5534,5539,5553,5564,5574,5578,5581,5597,5599,5600,5659,5714,5771,5834,5859,5881,5921,5941,5979,6001,6023,6043,6064,6089,6138,6165,6214,6217,6251,6253,6254,6287,6310,6327,6346,6348,6349,6395,6421,6440,6443,6445,6446,6491,6516,6534,6558,6577,6611,6615,6635,6648,6652,6670,6687,6701,6704,6706,6707,6735,6777,6779,6780,6825,6840,6855,6904,6924,6978,6997,7045,7067,7117,7134,7151,7167,7183,7198,7229,7245,7266,7289,7312,7316,7371,7405,7420,7424,7452,7469,7545,7564,7595,7619,7655,7658],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/regexp.go","Base":70271,"Size":7854,"Lines":[0,55,109,159,160,175,176,201,268,269,278,289,300,311,313,314,373,394,419,435,482,528,594,641,687,742,796,798,799,846,847,897,911,912,986,1051,1107,1108,1116,1170,1226,1284,1364,1436,1493,1570,1641,1718,1789,1851,1917,2011,2080,2148,2216,2322,2387,2450,2452,2453,2503,2504,2563,2604,2631,2647,2650,2669,2684,2687,2702,2719,2775,2821,2837,2841,2842,2872,2906,2922,2926,2955,2978,2995,3000,3004,3005,3034,3066,3082,3086,3116,3145,3162,3167,3171,3172,3203,3278,3294,3298,3299,3315,3426,3442,3446,3447,3464,3535,3551,3555,3558,3571,3573,3574,3648,3699,3715,3725,3789,3806,3844,3864,3888,3905,3935,3960,3964,3994,4017,4021,4051,4073,4077,4096,4123,4164,4173,4177,4196,4221,4258,4354,4410,4432,4452,4496,4539,4568,4586,4608,4638,4644,4649,4660,4702,4741,4770,4788,4810,4840,4846,4851,4855,4874,4896,4923,4940,4966,4985,5011,5028,5054,5073,5095,5112,5143,5171,5182,5205,5209,5231,5253,5277,5299,5316,5337,5362,5388,5408,5419,5439,5443,5479,5508,5512,5531,5572,5660,5684,5707,5729,5740,5763,5767,5784,5799,5819,5834,5854,5870,5890,5907,5927,5966,5991,6012,6033,6074,6080,6085,6105,6109,6140,6160,6164,6180,6211,6241,6266,6290,6313,6325,6349,6354,6358,6377,6408,6422,6443,6448,6471,6475,6478,6480,6481,6517,6540,6561,6580,6582,6583,6613,6614,6668,6693,6739,6760,6764,6781,6790,6793,6794,6806,6818,6840,6852,6874,6886,6908,6920,6942,6954,6976,6988,7010,7020,7037,7060,7100,7120,7141,7146,7166,7175,7179,7202,7251,7272,7275,7277,7278,7340,7373,7381,7406,7419,7422,7452,7484,7493,7497,7500,7510,7512,7513,7581,7621,7661,7681,7695,7697,7698,7743,7768,7794,7797,7827,7849,7852],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/regexp/syntax/simplify.go","Base":78126,"Size":4299,"Lines":[0,55,109,159,160,175,176,254,334,411,482,555,622,690,729,745,758,761,777,817,881,893,924,950,983,1004,1026,1041,1060,1110,1115,1133,1169,1174,1178,1191,1192,1223,1253,1298,1299,1315,1372,1414,1448,1484,1488,1489,1510,1540,1541,1583,1603,1636,1656,1705,1710,1711,1744,1764,1813,1818,1819,1855,1887,1913,1948,1983,1988,2056,2070,2074,2075,2113,2114,2149,2183,2197,2201,2202,2267,2333,2370,2371,2402,2423,2441,2475,2507,2540,2581,2586,2590,2591,2634,2657,2709,2751,2785,2835,2888,2893,2915,2933,2938,2981,2985,3006,3023,3027,3028,3087,3120,3152,3155,3156,3167,3169,3170,3225,3288,3305,3308,3352,3355,3411,3469,3531,3554,3557,3625,3683,3746,3770,3832,3885,3932,3961,3974,3977,4030,4091,4104,4107,4199,4211,4214,4215,4251,4286,4297],"Infos":null}]}
 