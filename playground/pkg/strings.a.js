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
GoLinkname�� Implementation�� 	Reference��   ����stringsstringserrorsgithub.com/gopherjs/gopherjs/jsinternal/bytealgiosyncunicodeunicode/utf8�Vi �� addrBuilderbufStringb	copyCheckLenCapResetgrownGrowWritep	WriteBytec	WriteRunerWriteStringsasubstrcharsseptfprefixsuffixelemsmappingReaderoldnewReplaceriprevRuneSizeReaderrReadAtoffReadByte
UnreadByteReadRunechsize
UnreadRuneSeekoffsetwhenceWriteTowWriteriocountoldnewonceOncesyncreplacer	buildOncebuildReplaceSpecialCaseunicodereplacementcutsetdonemMutexDoodoSlow	CaseRangeToUpperspecialToTitleToLowerstatesemaLocklockSlowUnlock
unlockSlowLoHiDeltadstringsCompareContainsContainsAnyContainsRuneCount	EqualFoldFields
FieldsFunc	HasPrefix	HasSuffixIndexIndexAny	IndexByte	IndexFunc	IndexRuneJoin	LastIndexLastIndexAnyLastIndexByteLastIndexFuncMap	NewReaderNewReplacerRepeat
ReplaceAllSplit
SplitAfterSplitAfterNSplitNTitleToLowerSpecialToTitleSpecialToUpperSpecialToValidUTF8TrimTrimFuncTrimLeftTrimLeftFunc
TrimPrefix	TrimRightTrimRightFunc	TrimSpace
TrimSuffix     #   %             T '  4     6   % 8    ) :    - <   3 > 8   : @ 8   ? B ED      G F Q    S H ]      _ J k     F  m    F  k o    F  k v    F  k ]    F  k |   F  k �    F  k  �        F  k ��  � F  k �    F  k �    F  k |   F  k v   F  k Q          F  k ��   F  k ]   F  �� |   F  k |   F  k v   F  k Q          F  k ��         F  �� k    � �F  k  �  � �F  ��  �  k   �   �  ���������� ���T � % ]�    � ]�    � ]� � 8 �  � ]� � � 8 �  � ]�      � ]�    � ]�  � � � � ]�    � ]� � �      � ]� �� 8 �  - ]� k  F  k �   F  k � � 8   F  k � �    �� �   ��   ]�   ��  ����T � � ]�   � �   � � ]� k    _ ]� �� k 8 � F  k |  � F  k |  � F  k | 8  � F  k | 8  � F  k   F  k    ��F  Q� k   F  k   F  Q� k   F  k   F  Q� k   F  k �   F  k �          F  k ��	   F  k �          F  k ��	   F  k �   F  k �          F  k ��
   F  k   F  k �   �  ? E�
 8 � T �
 ��� �	   ��  ��  ��  T � � �� ��   � �� ��     � k    _ �� k 8 � T � ���T � � �� ]    � �� ]    � �� ]   � �   �	  ����T � � ��   � ��   � ��   � �� �   ��� �	   �	   ��  T � T �  � 3,������������������������������������������������������������������������������	��	��	��	��	��	��	��
��
��
��
���� ��
�� ������ �������� errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  js4	js = $packages["github.com/gopherjs/gopherjs/js"];
��    		$r = js.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytealg*	bytealg = $packages["internal/bytealg"];
��    		$r = bytealg.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Builder�	Builder = $pkg.Builder = $newType(0, $kindStruct, "strings.Builder", true, "strings", true, function(addr_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.addr = ptrType.nil;
			this.buf = sliceType.nil;
			return;
		}
		this.addr = addr_;
		this.buf = buf_;
	});
��	ptrType.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "copyCheck", name: "copyCheck", pkg: "strings", typ: $funcType([], [], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Cap", name: "Cap", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "grow", name: "grow", pkg: "strings", typ: $funcType([$Int], [], false)}, {prop: "Grow", name: "Grow", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "WriteRune", name: "WriteRune", pkg: "", typ: $funcType([$Int32], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}];
��	Builder.init("strings", [{prop: "addr", name: "addr", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}]);
Builderstrings.Builderstrings.ptrTypestrings.sliceType  Reader�?	Reader = $pkg.Reader = $newType(0, $kindStruct, "strings.Reader", true, "strings", true, function(s_, i_, prevRune_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = "";
			this.i = new $Int64(0, 0);
			this.prevRune = 0;
			return;
		}
		this.s = s_;
		this.i = i_;
		this.prevRune = prevRune_;
	});
��	ptrType$6.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "ReadAt", name: "ReadAt", pkg: "", typ: $funcType([sliceType, $Int64], [$Int, $error], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}, {prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}, {prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([io.Writer], [$Int64, $error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([$String], [], false)}];
�	Reader.init("strings", [{prop: "s", name: "s", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "prevRune", name: "prevRune", embedded: false, exported: false, typ: $Int, tag: ""}]);
Reader	io.Writerstrings.Readerstrings.ptrType$6strings.sliceType  Replacer�|	Replacer = $pkg.Replacer = $newType(0, $kindStruct, "strings.Replacer", true, "strings", true, function(once_, r_, oldnew_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.once = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
			this.r = $ifaceNil;
			this.oldnew = sliceType$1.nil;
			return;
		}
		this.once = once_;
		this.r = r_;
		this.oldnew = oldnew_;
	});
��	ptrType$7.methods = [{prop: "buildOnce", name: "buildOnce", pkg: "strings", typ: $funcType([], [], false)}, {prop: "build", name: "build", pkg: "strings", typ: $funcType([], [replacer], false)}, {prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}];
�'	Replacer.init("strings", [{prop: "once", name: "once", embedded: false, exported: false, typ: sync.Once, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: replacer, tag: ""}, {prop: "oldnew", name: "oldnew", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
Replacer	io.Writerstrings.Replacerstrings.ptrType$7strings.replacerstrings.sliceType$1
sync.Mutex	sync.Once  replacerk	replacer = $pkg.replacer = $newType(8, $kindInterface, "strings.replacer", true, "strings", false, null);
��	replacer.init([{prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}]);
replacer	io.Writerstrings.replacer  trieNode��	trieNode = $pkg.trieNode = $newType(0, $kindStruct, "strings.trieNode", true, "strings", false, function(value_, priority_, prefix_, next_, table_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.value = "";
			this.priority = 0;
			this.prefix = "";
			this.next = ptrType$2.nil;
			this.table = sliceType$2.nil;
			return;
		}
		this.value = value_;
		this.priority = priority_;
		this.prefix = prefix_;
		this.next = next_;
		this.table = table_;
	});
��	ptrType$2.methods = [{prop: "add", name: "add", pkg: "strings", typ: $funcType([$String, $String, $Int, ptrType$8], [], false)}];
��	trieNode.init("strings", [{prop: "value", name: "value", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "priority", name: "priority", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "prefix", name: "prefix", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "next", name: "next", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "table", name: "table", embedded: false, exported: false, typ: sliceType$2, tag: ""}]);
trieNodestrings.genericReplacerstrings.ptrType$2strings.ptrType$8strings.sliceType$2strings.trieNode  genericReplacer��	genericReplacer = $pkg.genericReplacer = $newType(0, $kindStruct, "strings.genericReplacer", true, "strings", false, function(root_, tableSize_, mapping_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.root = new trieNode.ptr("", 0, "", ptrType$2.nil, sliceType$2.nil);
			this.tableSize = 0;
			this.mapping = arrayType.zero();
			return;
		}
		this.root = root_;
		this.tableSize = tableSize_;
		this.mapping = mapping_;
	});
�V	ptrType$8.methods = [{prop: "lookup", name: "lookup", pkg: "strings", typ: $funcType([$String, $Bool], [$String, $Int, $Bool], false)}, {prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}];
�9	genericReplacer.init("strings", [{prop: "root", name: "root", embedded: false, exported: false, typ: trieNode, tag: ""}, {prop: "tableSize", name: "tableSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "mapping", name: "mapping", embedded: false, exported: false, typ: arrayType, tag: ""}]);
genericReplacer	io.Writerstrings.arrayTypestrings.genericReplacerstrings.ptrType$2strings.ptrType$8strings.sliceType$2strings.trieNode  appendSliceWriter��	appendSliceWriter = $pkg.appendSliceWriter = $newType(12, $kindSlice, "strings.appendSliceWriter", true, "strings", false, null);
��	ptrType$3.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}];
!	appendSliceWriter.init($Uint8);
appendSliceWriterstrings.appendSliceWriterstrings.ptrType$3strings.sliceType  stringWriter��	stringWriter = $pkg.stringWriter = $newType(0, $kindStruct, "strings.stringWriter", true, "strings", false, function(w_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			return;
		}
		this.w = w_;
	});
��	stringWriter.methods = [{prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}];
t	stringWriter.init("strings", [{prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}]);
stringWriter	io.Writerstrings.stringWriter  singleStringReplacer�M	singleStringReplacer = $pkg.singleStringReplacer = $newType(0, $kindStruct, "strings.singleStringReplacer", true, "strings", false, function(finder_, value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.finder = ptrType$4.nil;
			this.value = "";
			return;
		}
		this.finder = finder_;
		this.value = value_;
	});
��	ptrType$9.methods = [{prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}];
��	singleStringReplacer.init("strings", [{prop: "finder", name: "finder", embedded: false, exported: false, typ: ptrType$4, tag: ""}, {prop: "value", name: "value", embedded: false, exported: false, typ: $String, tag: ""}]);
singleStringReplacer	io.Writerstrings.ptrType$4strings.ptrType$9strings.singleStringReplacer  byteReplaceru	byteReplacer = $pkg.byteReplacer = $newType(256, $kindArray, "strings.byteReplacer", true, "strings", false, null);
��	ptrType$1.methods = [{prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}];
!	byteReplacer.init($Uint8, 256);
byteReplacer	io.Writerstrings.byteReplacerstrings.ptrType$1  byteStringReplacer��	byteStringReplacer = $pkg.byteStringReplacer = $newType(0, $kindStruct, "strings.byteStringReplacer", true, "strings", false, function(replacements_, toReplace_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.replacements = arrayType$1.zero();
			this.toReplace = sliceType$1.nil;
			return;
		}
		this.replacements = replacements_;
		this.toReplace = toReplace_;
	});
��	ptrType$10.methods = [{prop: "Replace", name: "Replace", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([io.Writer, $String], [$Int, $error], false)}];
��	byteStringReplacer.init("strings", [{prop: "replacements", name: "replacements", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "toReplace", name: "toReplace", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
byteStringReplacer	io.Writerstrings.arrayType$1strings.byteStringReplacerstrings.ptrType$10strings.sliceTypestrings.sliceType$1  stringFinder��	stringFinder = $pkg.stringFinder = $newType(0, $kindStruct, "strings.stringFinder", true, "strings", false, function(pattern_, badCharSkip_, goodSuffixSkip_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.pattern = "";
			this.badCharSkip = arrayType$2.zero();
			this.goodSuffixSkip = sliceType$3.nil;
			return;
		}
		this.pattern = pattern_;
		this.badCharSkip = badCharSkip_;
		this.goodSuffixSkip = goodSuffixSkip_;
	});
o	ptrType$4.methods = [{prop: "next", name: "next", pkg: "strings", typ: $funcType([$String], [$Int], false)}];
�V	stringFinder.init("strings", [{prop: "pattern", name: "pattern", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "badCharSkip", name: "badCharSkip", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "goodSuffixSkip", name: "goodSuffixSkip", embedded: false, exported: false, typ: sliceType$3, tag: ""}]);
stringFinderstrings.arrayType$2strings.ptrType$4strings.sliceType$3strings.stringFinder  asciiSeth	asciiSet = $pkg.asciiSet = $newType(32, $kindArray, "strings.asciiSet", true, "strings", false, null);
w	ptrType$5.methods = [{prop: "contains", name: "contains", pkg: "strings", typ: $funcType([$Uint8], [$Bool], false)}];
	asciiSet.init($Uint32, 8);
asciiSetstrings.asciiSetstrings.ptrType$5  span��	span = $newType(0, $kindStruct, "strings.span", true, "strings", false, function(start_, end_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.start = 0;
			this.end = 0;
			return;
		}
		this.start = start_;
		this.end = end_;
	});
��	span.init("strings", [{prop: "start", name: "start", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "end", name: "end", embedded: false, exported: false, typ: $Int, tag: ""}]);
span  ptrType	ptrType = $ptrType(Builder);
ptrTypestrings.Builder  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1  	arrayType&	arrayType = $arrayType($Uint8, 256);
	arrayType  	ptrType$1%	ptrType$1 = $ptrType(byteReplacer);
	ptrType$1strings.byteReplacer  arrayType$1+	arrayType$1 = $arrayType(sliceType, 256);
arrayType$1strings.sliceType  	ptrType$2!	ptrType$2 = $ptrType(trieNode);
	ptrType$2strings.trieNode  sliceType$2&	sliceType$2 = $sliceType(ptrType$2);
sliceType$2strings.ptrType$2  	ptrType$3*	ptrType$3 = $ptrType(appendSliceWriter);
	ptrType$3strings.appendSliceWriter  	ptrType$4%	ptrType$4 = $ptrType(stringFinder);
	ptrType$4strings.stringFinder  arrayType$2&	arrayType$2 = $arrayType($Int, 256);
arrayType$2  sliceType$3!	sliceType$3 = $sliceType($Int);
sliceType$3  	ptrType$5!	ptrType$5 = $ptrType(asciiSet);
	ptrType$5strings.asciiSet  sliceType$4!	sliceType$4 = $sliceType(span);
sliceType$4  arrayType$3'	arrayType$3 = $arrayType($Uint32, 8);
arrayType$3  	ptrType$6	ptrType$6 = $ptrType(Reader);
	ptrType$6strings.Reader  	ptrType$7!	ptrType$7 = $ptrType(Replacer);
	ptrType$7strings.Replacer  	ptrType$8(	ptrType$8 = $ptrType(genericReplacer);
	ptrType$8strings.genericReplacer  	ptrType$9-	ptrType$9 = $ptrType(singleStringReplacer);
	ptrType$9strings.singleStringReplacer  
ptrType$10,	ptrType$10 = $ptrType(byteStringReplacer);

ptrType$10strings.byteStringReplacer  
asciiSpace
asciiSpace  �2  ��		asciiSpace = $toNativeArray($kindUint8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

asciiSpacestrings.asciiSpace strings.IndexBytestrings	IndexByte 	IndexByte��	IndexByte = function(s, c) {
		var c, s;
   �		return $parseInt(s.indexOf($global.String.fromCharCode(c))) >> 0;
    	};
	$pkg.IndexByte = IndexByte;
	IndexBytestrings.IndexByte strings.IndexstringsIndex Indexv	Index = function(s, sep) {
		var s, sep;
  		return $parseInt(s.indexOf(sep)) >> 0;
    	};
	$pkg.Index = Index;
Indexstrings.Index strings.LastIndexstrings	LastIndex 	LastIndex��	LastIndex = function(s, sep) {
		var s, sep;
  �		return $parseInt(s.lastIndexOf(sep)) >> 0;
    	};
	$pkg.LastIndex = LastIndex;
	LastIndexstrings.LastIndex strings.CountstringsCount Count�>	Count = function(s, sep) {
		var n, pos, s, sep;
  		n = 0;
    		if ((sep.length === 0)) {
  ;			return utf8.RuneCountInString(s) + 1 >> 0;
    		} else if (sep.length > s.length) {
  {			return 0;
    		} else if ((sep.length === s.length)) {
    			if (sep === s) {
  �				return 1;
    			}
  �			return 0;
    		}
  �		while (true) {
  �			pos = Index(s, sep);
    			if (pos === -1) {
  �				break;
    			}
  			n = n + (1) >> 0;
  			s = $substring(s, (pos + sep.length >> 0));
    		}
  *		return n;
    	};
	$pkg.Count = Count;
Countstrings.Countstrings.Indexunicode/utf8.RuneCountInString (*strings.Builder).String ��	Builder.ptr.prototype.String = function() {
		var b;
		b = this;
  k		return ($bytesToString(b.buf));
    	};
	Builder.prototype.String = function() { return this.$val.String(); };
Builderstrings.Builder (*strings.Builder).copyCheck �[	Builder.ptr.prototype.copyCheck = function() {
		var b;
		b = this;
    		if (b.addr === ptrType.nil) {
  �			b.addr = b;
    		} else if (!(b.addr === b)) {
  �			$panic(new $String("strings: illegal use of non-zero Builder copied by value"));
    		}
    	};
	Builder.prototype.copyCheck = function() { return this.$val.copyCheck(); };
Builder
copyCheck~strings.Builderstrings.ptrType strings.noescapestringsnoescape noescape`	noescape = function(p) {
		var p, x;
  
X		x = (p);
  
i		return (((x ^ 0) >>> 0));
    	};
noescapestrings.noescape (*strings.Builder).Len ��	Builder.ptr.prototype.Len = function() {
		var b;
		b = this;
  		return b.buf.$length;
    	};
	Builder.prototype.Len = function() { return this.$val.Len(); };
Builderstrings.Builder (*strings.Builder).Cap ��	Builder.ptr.prototype.Cap = function() {
		var b;
		b = this;
  �		return b.buf.$capacity;
    	};
	Builder.prototype.Cap = function() { return this.$val.Cap(); };
Builderstrings.Builder (*strings.Builder).Reset ��	Builder.ptr.prototype.Reset = function() {
		var b;
		b = this;
  Y		b.addr = ptrType.nil;
  g		b.buf = sliceType.nil;
    	};
	Builder.prototype.Reset = function() { return this.$val.Reset(); };
Builderstrings.Builderstrings.ptrTypestrings.sliceType (*strings.Builder).grow �%	Builder.ptr.prototype.grow = function(n) {
		var b, buf, n;
		b = this;
  		buf = $makeSlice(sliceType, b.buf.$length, (($imul(2, b.buf.$capacity)) + n >> 0));
  ?		$copySlice(buf, b.buf);
  Q		b.buf = buf;
    	};
	Builder.prototype.grow = function(n) { return this.$val.grow(n); };
Buildergrow~strings.Builderstrings.sliceType (*strings.Builder).Grow �_	Builder.ptr.prototype.Grow = function(n) {
		var b, n;
		b = this;
  H		b.copyCheck();
    		if (n < 0) {
  d			$panic(new $String("strings.Builder.Grow: negative count"));
    		}
    		if ((b.buf.$capacity - b.buf.$length >> 0) < n) {
  �			b.grow(n);
    		}
    	};
	Builder.prototype.Grow = function(n) { return this.$val.Grow(n); };
Builderstrings.Builderstrings.copyCheck~strings.grow~ (*strings.Builder).Write ��	Builder.ptr.prototype.Write = function(p) {
		var b, p;
		b = this;
  P		b.copyCheck();
  _		b.buf = $appendSlice(b.buf, p);
  |		return [p.$length, $ifaceNil];
    	};
	Builder.prototype.Write = function(p) { return this.$val.Write(p); };
Builderstrings.Builderstrings.copyCheck~ (*strings.Builder).WriteByte ��	Builder.ptr.prototype.WriteByte = function(c) {
		var b, c;
		b = this;
  		b.copyCheck();
  "		b.buf = $append(b.buf, c);
  <		return $ifaceNil;
    	};
	Builder.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
Builderstrings.Builderstrings.copyCheck~ (*strings.Builder).WriteRune �.	Builder.ptr.prototype.WriteRune = function(r) {
		var b, l, n, r;
		b = this;
  �		b.copyCheck();
    		if (((r >>> 0)) < 128) {
  f			b.buf = $append(b.buf, ((r << 24 >>> 24)));
  �			return [1, $ifaceNil];
    		}
  �		l = b.buf.$length;
    		if ((b.buf.$capacity - l >> 0) < 4) {
  �			b.grow(4);
    		}
  �		n = utf8.EncodeRune($subslice(b.buf, l, (l + 4 >> 0)), r);
  		b.buf = $subslice(b.buf, 0, (l + n >> 0));
  *		return [n, $ifaceNil];
    	};
	Builder.prototype.WriteRune = function(r) { return this.$val.WriteRune(r); };
Builderstrings.Builderstrings.copyCheck~strings.grow~unicode/utf8.EncodeRune (*strings.Builder).WriteString �		Builder.ptr.prototype.WriteString = function(s) {
		var b, s;
		b = this;
  �		b.copyCheck();
  �		b.buf = $appendSlice(b.buf, s);
  		return [s.length, $ifaceNil];
    	};
	Builder.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
Builderstrings.Builderstrings.copyCheck~ strings.ComparestringsCompare Compare��	Compare = function(a, b) {
		var a, b;
    		if (a === b) {
  !			return 0;
    		}
    		if (a < b) {
  ;			return -1;
    		}
  I		return 1;
    	};
	$pkg.Compare = Compare;
Comparestrings.Compare (*strings.Reader).Len ��	Reader.ptr.prototype.Len = function() {
		var r, x, x$1, x$2, x$3, x$4;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
  =			return 0;
    		}
  J		return (((x$2 = (x$3 = (new $Int64(0, r.s.length)), x$4 = r.i, new $Int64(x$3.$high - x$4.$high, x$3.$low - x$4.$low)), x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0));
    	};
	Reader.prototype.Len = function() { return this.$val.Len(); };
Readerstrings.Reader (*strings.Reader).Size ��	Reader.ptr.prototype.Size = function() {
		var r;
		r = this;
  l		return (new $Int64(0, r.s.length));
    	};
	Reader.prototype.Size = function() { return this.$val.Size(); };
Readerstrings.Reader (*strings.Reader).Read ��	Reader.ptr.prototype.Read = function(b) {
		var _tmp, _tmp$1, b, err, n, r, x, x$1, x$2, x$3;
		n = 0;
		err = $ifaceNil;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
    			_tmp = 0;
			_tmp$1 = io.EOF;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
  		r.prevRune = -1;
  ,		n = $copyString(b, $substring(r.s, $flatten64(r.i)));
  D		r.i = (x$2 = r.i, x$3 = (new $Int64(0, n)), new $Int64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
  U		return [n, err];
    	};
	Reader.prototype.Read = function(b) { return this.$val.Read(b); };
Readerio.EOFstrings.Reader (*strings.Reader).ReadAt �.	Reader.ptr.prototype.ReadAt = function(b, off) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, b, err, n, off, r, x;
		n = 0;
		err = $ifaceNil;
		r = this;
    		if ((off.$high < 0 || (off.$high === 0 && off.$low < 0))) {
    			_tmp = 0;
			_tmp$1 = errors.New("strings.Reader.ReadAt: negative offset");
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
    		if ((x = (new $Int64(0, r.s.length)), (off.$high > x.$high || (off.$high === x.$high && off.$low >= x.$low)))) {
    			_tmp$2 = 0;
			_tmp$3 = io.EOF;
			n = _tmp$2;
			err = _tmp$3;
			return [n, err];
    		}
  �		n = $copyString(b, $substring(r.s, $flatten64(off)));
    		if (n < b.$length) {
  �			err = io.EOF;
    		}
  �		return [n, err];
    	};
	Reader.prototype.ReadAt = function(b, off) { return this.$val.ReadAt(b, off); };
Reader
errors.Newio.EOFstrings.Reader (*strings.Reader).ReadByte �	Reader.ptr.prototype.ReadByte = function() {
		var b, r, x, x$1, x$2, x$3;
		r = this;
   '		r.prevRune = -1;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
   V			return [0, io.EOF];
    		}
   k		b = r.s.charCodeAt($flatten64(r.i));
   z		r.i = (x$2 = r.i, x$3 = new $Int64(0, 1), new $Int64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
   �		return [b, $ifaceNil];
    	};
	Reader.prototype.ReadByte = function() { return this.$val.ReadByte(); };
Readerio.EOFstrings.Reader (*strings.Reader).UnreadByte ��	Reader.ptr.prototype.UnreadByte = function() {
		var r, x, x$1, x$2;
		r = this;
    		if ((x = r.i, (x.$high < 0 || (x.$high === 0 && x.$low <= 0)))) {
  ! 			return errors.New("strings.Reader.UnreadByte: at beginning of string");
    		}
  !K		r.prevRune = -1;
  !\		r.i = (x$1 = r.i, x$2 = new $Int64(0, 1), new $Int64(x$1.$high - x$2.$high, x$1.$low - x$2.$low));
  !c		return $ifaceNil;
    	};
	Reader.prototype.UnreadByte = function() { return this.$val.UnreadByte(); };
Reader
errors.Newstrings.Reader (*strings.Reader).ReadRune ��	Reader.ptr.prototype.ReadRune = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, c, ch, err, r, size, x, x$1, x$2, x$3, x$4, x$5, x$6;
		ch = 0;
		size = 0;
		err = $ifaceNil;
		r = this;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
  "			r.prevRune = -1;
    			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = io.EOF;
			ch = _tmp;
			size = _tmp$1;
			err = _tmp$2;
			return [ch, size, err];
    		}
  "+		r.prevRune = (((x$2 = r.i, x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0));
  "E		c = r.s.charCodeAt($flatten64(r.i));
    		if (c < 128) {
  "j			r.i = (x$3 = r.i, x$4 = new $Int64(0, 1), new $Int64(x$3.$high + x$4.$high, x$3.$low + x$4.$low));
    			_tmp$3 = ((c >> 0));
			_tmp$4 = 1;
			_tmp$5 = $ifaceNil;
			ch = _tmp$3;
			size = _tmp$4;
			err = _tmp$5;
			return [ch, size, err];
    		}
  "�		_tuple = utf8.DecodeRuneInString($substring(r.s, $flatten64(r.i)));
		ch = _tuple[0];
		size = _tuple[1];
  "�		r.i = (x$5 = r.i, x$6 = (new $Int64(0, size)), new $Int64(x$5.$high + x$6.$high, x$5.$low + x$6.$low));
  "�		return [ch, size, err];
    	};
	Reader.prototype.ReadRune = function() { return this.$val.ReadRune(); };
Readerio.EOFstrings.Readerunicode/utf8.DecodeRuneInString (*strings.Reader).UnreadRune �	Reader.ptr.prototype.UnreadRune = function() {
		var r, x;
		r = this;
    		if ((x = r.i, (x.$high < 0 || (x.$high === 0 && x.$low <= 0)))) {
  #H			return errors.New("strings.Reader.UnreadRune: at beginning of string");
    		}
    		if (r.prevRune < 0) {
  #�			return errors.New("strings.Reader.UnreadRune: previous operation was not ReadRune");
    		}
  $		r.i = (new $Int64(0, r.prevRune));
  $		r.prevRune = -1;
  $+		return $ifaceNil;
    	};
	Reader.prototype.UnreadRune = function() { return this.$val.UnreadRune(); };
Reader
errors.Newstrings.Reader (*strings.Reader).Seek ��	Reader.ptr.prototype.Seek = function(offset, whence) {
		var _1, abs, offset, r, whence, x, x$1;
		r = this;
  $�		r.prevRune = -1;
  $�		abs = new $Int64(0, 0);
    		_1 = whence;
    		if (_1 === (0)) {
  $�			abs = offset;
    		} else if (_1 === (1)) {
  %			abs = (x = r.i, new $Int64(x.$high + offset.$high, x.$low + offset.$low));
    		} else if (_1 === (2)) {
  %9			abs = (x$1 = (new $Int64(0, r.s.length)), new $Int64(x$1.$high + offset.$high, x$1.$low + offset.$low));
    		} else {
  %d			return [new $Int64(0, 0), errors.New("strings.Reader.Seek: invalid whence")];
    		}
    		if ((abs.$high < 0 || (abs.$high === 0 && abs.$low < 0))) {
  %�			return [new $Int64(0, 0), errors.New("strings.Reader.Seek: negative position")];
    		}
  %�		r.i = abs;
  &		return [abs, $ifaceNil];
    	};
	Reader.prototype.Seek = function(offset, whence) { return this.$val.Seek(offset, whence); };
Reader
errors.Newstrings.Reader (*strings.Reader).WriteTo �;	Reader.ptr.prototype.WriteTo = function(w) {
		var _r, _tmp, _tmp$1, _tuple, err, m, n, r, s, w, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; err = $f.err; m = $f.m; n = $f.n; r = $f.r; s = $f.s; w = $f.w; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
		r = this;
  &�		r.prevRune = -1;
    		if ((x = r.i, x$1 = (new $Int64(0, r.s.length)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low >= x$1.$low)))) {
    			_tmp = new $Int64(0, 0);
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  &�		s = $substring(r.s, $flatten64(r.i));
  &�		_r = io.WriteString(w, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		m = _tuple[0];
		err = _tuple[1];
    		if (m > s.length) {
  '			$panic(new $String("strings.Reader.WriteTo: invalid WriteString count"));
    		}
  'E		r.i = (x$2 = r.i, x$3 = (new $Int64(0, m)), new $Int64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
  'V		n = (new $Int64(0, m));
    		if (!((m === s.length)) && $interfaceIsEqual(err, $ifaceNil)) {
  '�			err = io.ErrShortWrite;
    		}
  '�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.WriteTo }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.err = err; $f.m = m; $f.n = n; $f.r = r; $f.s = s; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.WriteTo = function(w) { return this.$val.WriteTo(w); };
Readerio.ErrShortWriteio.WriteStringstrings.Reader (*strings.Reader).Reset ��	Reader.ptr.prototype.Reset = function(s) {
		var r, s;
		r = this;
  '�		Reader.copy(r, new Reader.ptr(s, new $Int64(0, 0), -1));
    	};
	Reader.prototype.Reset = function(s) { return this.$val.Reset(s); };
Readerstrings.Reader strings.NewReaderstrings	NewReader 	NewReader��	NewReader = function(s) {
		var s;
  (�		return new Reader.ptr(s, new $Int64(0, 0), -1);
    	};
	$pkg.NewReader = NewReader;
	NewReaderstrings.NewReaderstrings.Reader strings.NewReplacerstringsNewReplacer NewReplacer��	NewReplacer = function(oldnew) {
		var _r, oldnew;
    		if ((_r = oldnew.$length % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 1) {
  ,�			$panic(new $String("strings.NewReplacer: odd argument count"));
    		}
  ,�		return new Replacer.ptr(new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)), $ifaceNil, $appendSlice((sliceType$1.nil), oldnew));
    	};
	$pkg.NewReplacer = NewReplacer;
NewReplacerstrings.NewReplacerstrings.Replacerstrings.sliceType$1
sync.Mutex	sync.Once (*strings.Replacer).buildOnce ��	Replacer.ptr.prototype.buildOnce = function() {
		var r;
		r = this;
  -G		r.r = r.build();
  -X		r.oldnew = sliceType$1.nil;
    	};
	Replacer.prototype.buildOnce = function() { return this.$val.buildOnce(); };
Replacer
buildOnce~strings.Replacerstrings.build~strings.sliceType$1 (*strings.Replacer).build ��	Replacer.ptr.prototype.build = function() {
		var _i, _q, _ref, allNewBytes, b, i, i$1, i$2, i$3, n, n$1, o, o$1, oldnew, r, r$1, x, x$1, x$2, x$3, x$4;
		b = this;
  -�		oldnew = b.oldnew;
    		if ((oldnew.$length === 2) && (0 >= oldnew.$length ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + 0]).length > 1) {
  -�			return makeSingleStringReplacer((0 >= oldnew.$length ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + 0]), (1 >= oldnew.$length ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + 1]));
    		}
  .		allNewBytes = true;
  .'		i = 0;
		while (true) {
			if (!(i < oldnew.$length)) { break; }
    			if (!((((i < 0 || i >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + i]).length === 1))) {
  .g				return makeGenericReplacer(oldnew);
    			}
    			if (!(((x = i + 1 >> 0, ((x < 0 || x >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + x])).length === 1))) {
  .�				allNewBytes = false;
    			}
  .@			i = i + (2) >> 0;
    		}
    		if (allNewBytes) {
  .�			r = arrayType.zero();
  .�			_ref = r;
			_i = 0;
			while (true) {
				if (!(_i < 256)) { break; }
				i$1 = _i;
  /
				((i$1 < 0 || i$1 >= r.length) ? ($throwRuntimeError("index out of range"), undefined) : r[i$1] = ((i$1 << 24 >>> 24)));
    				_i++;
			}
  /�			i$2 = oldnew.$length - 2 >> 0;
			while (true) {
				if (!(i$2 >= 0)) { break; }
  /�				o = ((i$2 < 0 || i$2 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + i$2]).charCodeAt(0);
  /�				n = (x$1 = i$2 + 1 >> 0, ((x$1 < 0 || x$1 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + x$1])).charCodeAt(0);
  /�				((o < 0 || o >= r.length) ? ($throwRuntimeError("index out of range"), undefined) : r[o] = n);
  /�				i$2 = i$2 - (2) >> 0;
    			}
  /�			return new ptrType$1(r);
    		}
  0		r$1 = new byteStringReplacer.ptr(arrayType$1.zero(), $makeSlice(sliceType$1, 0, (_q = oldnew.$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))));
  0�		i$3 = oldnew.$length - 2 >> 0;
		while (true) {
			if (!(i$3 >= 0)) { break; }
  0�			o$1 = ((i$3 < 0 || i$3 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + i$3]).charCodeAt(0);
  0�			n$1 = (x$2 = i$3 + 1 >> 0, ((x$2 < 0 || x$2 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + x$2]));
    			if ((x$3 = r$1.replacements, ((o$1 < 0 || o$1 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[o$1])) === sliceType.nil) {
  1�				r$1.toReplace = $append(r$1.toReplace, ($bytesToString(new sliceType([o$1]))));
    			}
  2%			(x$4 = r$1.replacements, ((o$1 < 0 || o$1 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[o$1] = (new sliceType($stringToBytes(n$1)))));
  0�			i$3 = i$3 - (2) >> 0;
    		}
  2H		return r$1;
    	};
	Replacer.prototype.build = function() { return this.$val.build(); };
Replacerbuild~
strings.Replacerstrings.arrayTypestrings.arrayType$1strings.byteReplacerstrings.byteStringReplacerstrings.makeGenericReplacer strings.makeSingleStringReplacerstrings.ptrType$1strings.sliceTypestrings.sliceType$1 (*strings.Replacer).Replace ��	Replacer.ptr.prototype.Replace = function(s) {
		var $24r, _r, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  2�		$r = r.once.Do($methodVal(r, "buildOnce")); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  2�		_r = r.r.Replace(s); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Replacer.ptr.prototype.Replace }; } $f.$24r = $24r; $f._r = _r; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Replacer.prototype.Replace = function(s) { return this.$val.Replace(s); };
Replacerstrings.Replacerstrings.buildOnce~ (*strings.Replacer).WriteString ��	Replacer.ptr.prototype.WriteString = function(w, s) {
		var $24r, _r, _tuple, err, n, r, s, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; err = $f.err; n = $f.n; r = $f.r; s = $f.s; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  3		$r = r.once.Do($methodVal(r, "buildOnce")); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		_r = r.r.WriteString(w, s); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Replacer.ptr.prototype.WriteString }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.n = n; $f.r = r; $f.s = s; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Replacer.prototype.WriteString = function(w, s) { return this.$val.WriteString(w, s); };
Replacerstrings.Replacerstrings.buildOnce~ (*strings.trieNode).add �b	trieNode.ptr.prototype.add = function(key, val, priority, r) {
		var key, keyNode, m, n, next, prefixNode, priority, r, t, val, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		t = this;
    		if (key === "") {
    			if (t.priority === 0) {
  <�				t.value = val;
  <�				t.priority = priority;
    			}
  <�			return;
    		}
    		if (!(t.prefix === "")) {
  =B			n = 0;
  =q			while (true) {
				if (!(n < t.prefix.length && n < key.length)) { break; }
    				if (!((t.prefix.charCodeAt(n) === key.charCodeAt(n)))) {
  =�					break;
    				}
  =�				n = n + (1) >> 0;
    			}
    			if (n === t.prefix.length) {
  =�				t.next.add($substring(key, n), val, priority, r);
    			} else if (n === 0) {
  >�				prefixNode = ptrType$2.nil;
    				if (t.prefix.length === 1) {
  ?					prefixNode = t.next;
    				} else {
  ?;					prefixNode = new trieNode.ptr("", 0, $substring(t.prefix, 1), t.next, sliceType$2.nil);
    				}
  ?�				keyNode = new trieNode.ptr("", 0, "", ptrType$2.nil, sliceType$2.nil);
  ?�				t.table = $makeSlice(sliceType$2, r.tableSize);
  ?�				(x = t.table, x$1 = (x$2 = r.mapping, x$3 = t.prefix.charCodeAt(0), ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])), ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1] = prefixNode));
  @					(x$4 = t.table, x$5 = (x$6 = r.mapping, x$7 = key.charCodeAt(0), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])), ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5] = keyNode));
  @1				t.prefix = "";
  @B				t.next = ptrType$2.nil;
  @R				keyNode.add($substring(key, 1), val, priority, r);
    			} else {
  @�				next = new trieNode.ptr("", 0, $substring(t.prefix, n), t.next, sliceType$2.nil);
  A				t.prefix = $substring(t.prefix, 0, n);
  A)				t.next = next;
  A:				next.add($substring(key, n), val, priority, r);
    			}
    		} else if (!(t.table === sliceType$2.nil)) {
  A�			m = (x$8 = r.mapping, x$9 = key.charCodeAt(0), ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9]));
    			if ((x$10 = t.table, ((m < 0 || m >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + m])) === ptrType$2.nil) {
  A�				(x$11 = t.table, ((m < 0 || m >= x$11.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + m] = new trieNode.ptr("", 0, "", ptrType$2.nil, sliceType$2.nil)));
    			}
  A�			(x$12 = t.table, ((m < 0 || m >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + m])).add($substring(key, 1), val, priority, r);
    		} else {
  B+			t.prefix = key;
  B<			t.next = new trieNode.ptr("", 0, "", ptrType$2.nil, sliceType$2.nil);
  BU			t.next.add("", val, priority, r);
    		}
    	};
	trieNode.prototype.add = function(key, val, priority, r) { return this.$val.add(key, val, priority, r); };
trieNodeadd~strings.add~strings.ptrType$2strings.sliceType$2strings.trieNode !(*strings.genericReplacer).lookup ��	genericReplacer.ptr.prototype.lookup = function(s, ignoreRoot) {
		var bestPriority, found, ignoreRoot, index, keylen, n, node, r, s, val, x, x$1, x$2;
		val = "";
		keylen = 0;
		found = false;
		r = this;
  CC		bestPriority = 0;
  CV		node = r.root;
  Cg		n = 0;
  Co		while (true) {
			if (!(!(node === ptrType$2.nil))) { break; }
    			if (node.priority > bestPriority && !(ignoreRoot && node === r.root)) {
  C�				bestPriority = node.priority;
  C�				val = node.value;
  D 				keylen = n;
  D				found = true;
    			}
    			if (s === "") {
  D2				break;
    			}
    			if (!(node.table === sliceType$2.nil)) {
  DX				index = (x = r.mapping, x$1 = s.charCodeAt(0), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
    				if (((index >> 0)) === r.tableSize) {
  D�					break;
    				}
  D�				node = (x$2 = node.table, ((index < 0 || index >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + index]));
  D�				s = $substring(s, 1);
  D�				n = n + (1) >> 0;
    			} else if (!(node.prefix === "") && HasPrefix(s, node.prefix)) {
  E				n = n + (node.prefix.length) >> 0;
  E+				s = $substring(s, node.prefix.length);
  EG				node = node.next;
    			} else {
  Ef				break;
    			}
    		}
  Et		return [val, keylen, found];
    	};
	genericReplacer.prototype.lookup = function(s, ignoreRoot) { return this.$val.lookup(s, ignoreRoot); };
genericReplacerlookup~strings.HasPrefixstrings.genericReplacerstrings.ptrType$2strings.sliceType$2 strings.makeGenericReplacerstringsmakeGenericReplacer makeGenericReplacer��	makeGenericReplacer = function(oldnew) {
		var _i, _i$1, _ref, _ref$1, b, b$1, i, i$1, i$2, index, j, key, oldnew, r, x, x$1, x$2, x$3, x$4;
  G%		r = new genericReplacer.ptr(new trieNode.ptr("", 0, "", ptrType$2.nil, sliceType$2.nil), 0, arrayType.zero());
  G}		i = 0;
		while (true) {
			if (!(i < oldnew.$length)) { break; }
  G�			key = ((i < 0 || i >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + i]);
  G�			j = 0;
			while (true) {
				if (!(j < key.length)) { break; }
  G�				(x = r.mapping, x$1 = key.charCodeAt(j), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = 1));
  G�				j = j + (1) >> 0;
    			}
  G�			i = i + (2) >> 0;
    		}
  G�		_ref = r.mapping;
		_i = 0;
		while (true) {
			if (!(_i < 256)) { break; }
			b = ((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]);
  H			r.tableSize = r.tableSize + (((b >> 0))) >> 0;
    			_i++;
		}
  H5		index = 0;
  HA		_ref$1 = r.mapping;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < 256)) { break; }
			i$1 = _i$1;
			b$1 = ((_i$1 < 0 || _i$1 >= _ref$1.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1[_i$1]);
    			if (b$1 === 0) {
  Hp				(x$2 = r.mapping, ((i$1 < 0 || i$1 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$1] = ((r.tableSize << 24 >>> 24))));
    			} else {
  H�				(x$3 = r.mapping, ((i$1 < 0 || i$1 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i$1] = index));
  H�				index = index + (1) << 24 >>> 24;
    			}
    			_i$1++;
		}
  I		r.root.table = $makeSlice(sliceType$2, r.tableSize);
  I7		i$2 = 0;
		while (true) {
			if (!(i$2 < oldnew.$length)) { break; }
  I[			r.root.add(((i$2 < 0 || i$2 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + i$2]), (x$4 = i$2 + 1 >> 0, ((x$4 < 0 || x$4 >= oldnew.$length) ? ($throwRuntimeError("index out of range"), undefined) : oldnew.$array[oldnew.$offset + x$4])), oldnew.$length - i$2 >> 0, r);
  IP			i$2 = i$2 + (2) >> 0;
    		}
  I�		return r;
    	};
makeGenericReplacerstrings.add~strings.arrayTypestrings.genericReplacerstrings.makeGenericReplacerstrings.ptrType$2strings.sliceType$2strings.trieNode "(*strings.appendSliceWriter).Write ��	$ptrType(appendSliceWriter).prototype.Write = function(p) {
		var p, w;
		w = this;
  J/		w.$set($appendSlice(w.$get(), p));
  JF		return [p.$length, $ifaceNil];
    	};
appendSliceWriterstrings.appendSliceWriter ((*strings.appendSliceWriter).WriteString ��	$ptrType(appendSliceWriter).prototype.WriteString = function(s) {
		var s, w;
		w = this;
  J�		w.$set($appendSlice(w.$get(), s));
  K		return [s.length, $ifaceNil];
    	};
appendSliceWriterstrings.appendSliceWriter "(strings.stringWriter).WriteString �.	stringWriter.ptr.prototype.WriteString = function(s) {
		var $24r, _r, s, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; s = $f.s; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  K�		_r = w.w.Write((new sliceType($stringToBytes(s)))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringWriter.ptr.prototype.WriteString }; } $f.$24r = $24r; $f._r = _r; $f.s = s; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringWriter.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
stringWriterstrings.sliceTypestrings.stringWriter strings.getStringWriterstringsgetStringWriter getStringWriter�	getStringWriter = function(w) {
		var _tuple, ok, sw, w, x;
  K�		_tuple = $assertType(w, io.StringWriter, true);
		sw = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  L 			sw = (x = new stringWriter.ptr(w), new x.constructor.elem(x));
    		}
  L		return sw;
    	};
getStringWriterio.StringWriterstrings.getStringWriterstrings.stringWriter "(*strings.genericReplacer).Replace ��	genericReplacer.ptr.prototype.Replace = function(s) {
		var _r, buf, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; buf = $f.buf; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
		r = this;
  L\		buf[0] = $makeSlice(appendSliceWriter, 0, s.length);
  L�		_r = r.WriteString((buf.$ptr || (buf.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, buf))), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  L�		$s = -1; return ($bytesToString(buf[0]));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: genericReplacer.ptr.prototype.Replace }; } $f._r = _r; $f.buf = buf; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	genericReplacer.prototype.Replace = function(s) { return this.$val.Replace(s); };
genericReplacerstrings.appendSliceWriterstrings.genericReplacerstrings.ptrType$3 &(*strings.genericReplacer).WriteString �_	genericReplacer.ptr.prototype.WriteString = function(w, s) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, err, i, index, keylen, last, match, n, prevMatchEmpty, r, s, sw, val, w, wn, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; err = $f.err; i = $f.i; index = $f.index; keylen = $f.keylen; last = $f.last; match = $f.match; n = $f.n; prevMatchEmpty = $f.prevMatchEmpty; r = $f.r; s = $f.s; sw = $f.sw; val = $f.val; w = $f.w; wn = $f.wn; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  M		sw = getStringWriter(w);
  M&		_tmp = 0;
		_tmp$1 = 0;
		last = _tmp;
		wn = _tmp$1;
  M8		prevMatchEmpty = false;
  MQ		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i <= s.length)) { break; } */ if(!(i <= s.length)) { $s = 2; continue; }
    			if (!((i === s.length)) && (r.root.priority === 0)) {
  M�				index = (((x = r.mapping, x$1 = s.charCodeAt(i), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) >> 0));
    				if ((index === r.tableSize) || (x$2 = r.root.table, ((index < 0 || index >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + index])) === ptrType$2.nil) {
  N(					i = i + (1) >> 0;
  N0					/* continue; */ $s = 1; continue;
    				}
    			}
  N�			_tuple = r.lookup($substring(s, i), prevMatchEmpty);
			val = _tuple[0];
			keylen = _tuple[1];
			match = _tuple[2];
  N�			prevMatchEmpty = match && (keylen === 0);
  N�			/* */ if (match) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (match) { */ case 3:
  N�				_r = sw.WriteString($substring(s, last, i)); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				wn = _tuple$1[0];
				err = _tuple$1[1];
  O#				n = n + (wn) >> 0;
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  OB					$s = -1; return [n, err];
    				}
  OQ				_r$1 = sw.WriteString(val); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$2 = _r$1;
				wn = _tuple$2[0];
				err = _tuple$2[1];
  Or				n = n + (wn) >> 0;
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  O�					$s = -1; return [n, err];
    				}
  O�				i = i + (keylen) >> 0;
  O�				last = i;
  O�				/* continue; */ $s = 1; continue;
    			/* } */ case 4:
  O�			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  O�		/* */ if (!((last === s.length))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!((last === s.length))) { */ case 7:
  O�			_r$2 = sw.WriteString($substring(s, last)); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$3 = _r$2;
			wn = _tuple$3[0];
			err = _tuple$3[1];
  P			n = n + (wn) >> 0;
    		/* } */ case 8:
  P		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: genericReplacer.ptr.prototype.WriteString }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.err = err; $f.i = i; $f.index = index; $f.keylen = keylen; $f.last = last; $f.match = match; $f.n = n; $f.prevMatchEmpty = prevMatchEmpty; $f.r = r; $f.s = s; $f.sw = sw; $f.val = val; $f.w = w; $f.wn = wn; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	genericReplacer.prototype.WriteString = function(w, s) { return this.$val.WriteString(w, s); };
genericReplacerstrings.genericReplacerstrings.getStringWriterstrings.lookup~strings.ptrType$2  strings.makeSingleStringReplacerstringsmakeSingleStringReplacer makeSingleStringReplacer��	makeSingleStringReplacer = function(pattern, value) {
		var pattern, value;
  Q�		return new singleStringReplacer.ptr(makeStringFinder(pattern), value);
    	};
makeSingleStringReplacer strings.makeSingleStringReplacerstrings.makeStringFinderstrings.ptrType$4strings.singleStringReplacerstrings.stringFinder '(*strings.singleStringReplacer).Replace �	singleStringReplacer.ptr.prototype.Replace = function(s) {
		var _tmp, _tmp$1, buf, i, match, matched, r, s;
		r = this;
  R*		buf = sliceType.nil;
  R6		_tmp = 0;
		_tmp$1 = false;
		i = _tmp;
		matched = _tmp$1;
  RN		while (true) {
  RV			match = r.finder.next($substring(s, i));
    			if (match === -1) {
  R�				break;
    			}
  R�			matched = true;
  R�			buf = $appendSlice(buf, $substring(s, i, (i + match >> 0)));
  R�			buf = $appendSlice(buf, r.value);
  R�			i = i + ((match + r.finder.pattern.length >> 0)) >> 0;
    		}
    		if (!matched) {
  S#			return s;
    		}
  S0		buf = $appendSlice(buf, $substring(s, i));
  SM		return ($bytesToString(buf));
    	};
	singleStringReplacer.prototype.Replace = function(s) { return this.$val.Replace(s); };
singleStringReplacerstrings.next~strings.singleStringReplacerstrings.sliceType +(*strings.singleStringReplacer).WriteString �	�	singleStringReplacer.ptr.prototype.WriteString = function(w, s) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, err, i, match, n, r, s, sw, w, wn, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; i = $f.i; match = $f.match; n = $f.n; r = $f.r; s = $f.s; sw = $f.sw; w = $f.w; wn = $f.wn; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  S�		sw = getStringWriter(w);
  S�		_tmp = 0;
		_tmp$1 = 0;
		i = _tmp;
		wn = _tmp$1;
  S�		/* while (true) { */ case 1:
  S�			match = r.finder.next($substring(s, i));
    			if (match === -1) {
  T 				/* break; */ $s = 2; continue;
    			}
  T,			_r = sw.WriteString($substring(s, i, (i + match >> 0))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			wn = _tuple[0];
			err = _tuple[1];
  TW			n = n + (wn) >> 0;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  Tt				$s = -1; return [n, err];
    			}
  T�			_r$1 = sw.WriteString(r.value); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			wn = _tuple$1[0];
			err = _tuple$1[1];
  T�			n = n + (wn) >> 0;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  T�				$s = -1; return [n, err];
    			}
  T�			i = i + ((match + r.finder.pattern.length >> 0)) >> 0;
    		$s = 1; continue;
		case 2:
  T�		_r$2 = sw.WriteString($substring(s, i)); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		wn = _tuple$2[0];
		err = _tuple$2[1];
  U		n = n + (wn) >> 0;
  U 		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: singleStringReplacer.ptr.prototype.WriteString }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.i = i; $f.match = match; $f.n = n; $f.r = r; $f.s = s; $f.sw = sw; $f.w = w; $f.wn = wn; $f.$s = $s; $f.$r = $r; return $f;
	};
	singleStringReplacer.prototype.WriteString = function(w, s) { return this.$val.WriteString(w, s); };
singleStringReplacerstrings.getStringWriterstrings.next~strings.singleStringReplacer (*strings.byteReplacer).Replace ��	byteReplacer.prototype.Replace = function(s) {
		var b, buf, i, r, s, x, x$1;
		r = this.$val;
  V,		buf = sliceType.nil;
  VP		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  Vl			b = s.charCodeAt(i);
    			if (!(((x = r, ((b < 0 || b >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[b])) === b))) {
    				if (buf === sliceType.nil) {
  V�					buf = (new sliceType($stringToBytes(s)));
    				}
  V�				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = (x$1 = r, ((b < 0 || b >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[b])));
    			}
  Vd			i = i + (1) >> 0;
    		}
    		if (buf === sliceType.nil) {
  V�			return s;
    		}
  V�		return ($bytesToString(buf));
    	};
	$ptrType(byteReplacer).prototype.Replace = function(s) { return (new byteReplacer(this.$get())).Replace(s); };
byteReplacerstrings.byteReplacerstrings.sliceType #(*strings.byteReplacer).WriteString �
T	byteReplacer.prototype.WriteString = function(w, s) {
		var _i, _r, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, buf, bufsize, err, err$1, i, n, ncopy, r, s, w, wn, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; b = $f.b; buf = $f.buf; bufsize = $f.bufsize; err = $f.err; err$1 = $f.err$1; i = $f.i; n = $f.n; ncopy = $f.ncopy; r = $f.r; s = $f.s; w = $f.w; wn = $f.wn; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this.$val;
  W�		bufsize = 32768;
    		if (s.length < bufsize) {
  W�			bufsize = s.length;
    		}
  W�		buf = $makeSlice(sliceType, bufsize);
  X 		/* while (true) { */ case 1:
			/* if (!(s.length > 0)) { break; } */ if(!(s.length > 0)) { $s = 2; continue; }
  X			ncopy = $copyString(buf, s);
  X+			s = $substring(s, ncopy);
  X;			_ref = $subslice(buf, 0, ncopy);
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  X^				((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = (x = r, ((b < 0 || b >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[b])));
    				_i++;
			}
  Xr			_r = w.Write($subslice(buf, 0, ncopy)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			wn = _tuple[0];
			err$1 = _tuple[1];
  X�			n = n + (wn) >> 0;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp = n;
				_tmp$1 = err$1;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    		$s = 1; continue;
		case 2:
    		_tmp$2 = n;
		_tmp$3 = $ifaceNil;
		n = _tmp$2;
		err = _tmp$3;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: byteReplacer.prototype.WriteString }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.b = b; $f.buf = buf; $f.bufsize = bufsize; $f.err = err; $f.err$1 = err$1; $f.i = i; $f.n = n; $f.ncopy = ncopy; $f.r = r; $f.s = s; $f.w = w; $f.wn = wn; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(byteReplacer).prototype.WriteString = function(w, s) { return (new byteReplacer(this.$get())).WriteString(w, s); };
byteReplacerstrings.byteReplacerstrings.sliceType %(*strings.byteStringReplacer).Replace ��	byteStringReplacer.ptr.prototype.Replace = function(s) {
		var _i, _ref, anyChanges, b, b$1, buf, c, i, i$1, j, newSize, r, s, x, x$1, x$2, x$3, x$4, x$5, x$6;
		r = this;
  ]j		newSize = s.length;
  ]}		anyChanges = false;
    		if (($imul(r.toReplace.$length, 8)) <= s.length) {
  ]�			_ref = r.toReplace;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ^				c = Count(s, x);
    				if (!((c === 0))) {
  ^v					newSize = newSize + (($imul(c, (((x$1 = r.replacements, x$2 = x.charCodeAt(0), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])).$length - 1 >> 0))))) >> 0;
  ^�					anyChanges = true;
    				}
    				_i++;
			}
    		} else {
  ^�			i = 0;
			while (true) {
				if (!(i < s.length)) { break; }
  ^�				b = s.charCodeAt(i);
    				if (!((x$3 = r.replacements, ((b < 0 || b >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[b])) === sliceType.nil)) {
  _H					newSize = newSize + (((x$4 = r.replacements, ((b < 0 || b >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[b])).$length - 1 >> 0)) >> 0;
  _r					anyChanges = true;
    				}
  ^�				i = i + (1) >> 0;
    			}
    		}
    		if (!anyChanges) {
  _�			return s;
    		}
  _�		buf = $makeSlice(sliceType, newSize);
  _�		j = 0;
  _�		i$1 = 0;
		while (true) {
			if (!(i$1 < s.length)) { break; }
  _�			b$1 = s.charCodeAt(i$1);
    			if (!((x$5 = r.replacements, ((b$1 < 0 || b$1 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[b$1])) === sliceType.nil)) {
  `$				j = j + ($copySlice($subslice(buf, j), (x$6 = r.replacements, ((b$1 < 0 || b$1 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[b$1])))) >> 0;
    			} else {
  `X				((j < 0 || j >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + j] = b$1);
  `f				j = j + (1) >> 0;
    			}
  _�			i$1 = i$1 + (1) >> 0;
    		}
  `r		return ($bytesToString(buf));
    	};
	byteStringReplacer.prototype.Replace = function(s) { return this.$val.Replace(s); };
byteStringReplacerstrings.Countstrings.byteStringReplacerstrings.sliceType )(*strings.byteStringReplacer).WriteString ��	byteStringReplacer.ptr.prototype.WriteString = function(w, s) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, b, err, err$1, err$2, i, last, n, nw, nw$1, nw$2, r, s, sw, w, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; b = $f.b; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; i = $f.i; last = $f.last; n = $f.n; nw = $f.nw; nw$1 = $f.nw$1; nw$2 = $f.nw$2; r = $f.r; s = $f.s; sw = $f.sw; w = $f.w; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  `�		sw = getStringWriter(w);
  `�		last = 0;
  a		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < s.length)) { break; } */ if(!(i < s.length)) { $s = 2; continue; }
  a#			b = s.charCodeAt(i);
    			if ((x = r.replacements, ((b < 0 || b >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[b])) === sliceType.nil) {
  a				i = i + (1) >> 0;
    				/* continue; */ $s = 1; continue;
    			}
  a_			/* */ if (!((last === i))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!((last === i))) { */ case 3:
  aq				_r = sw.WriteString($substring(s, last, i)); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				nw = _tuple[0];
				err$1 = _tuple[1];
  a�				n = n + (nw) >> 0;
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    					_tmp = n;
					_tmp$1 = err$1;
					n = _tmp;
					err = _tmp$1;
					$s = -1; return [n, err];
    				}
    			/* } */ case 4:
  a�			last = i + 1 >> 0;
  a�			_r$1 = w.Write((x$1 = r.replacements, ((b < 0 || b >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[b]))); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			nw$1 = _tuple$1[0];
			err$2 = _tuple$1[1];
  b			n = n + (nw$1) >> 0;
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    				_tmp$2 = n;
				_tmp$3 = err$2;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
  a			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  b;		/* */ if (!((last === s.length))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!((last === s.length))) { */ case 7:
  bU			nw$2 = 0;
  b^			_r$2 = sw.WriteString($substring(s, last)); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$2 = _r$2;
			nw$2 = _tuple$2[0];
			err = _tuple$2[1];
  b�			n = n + (nw$2) >> 0;
    		/* } */ case 8:
  b�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: byteStringReplacer.ptr.prototype.WriteString }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.b = b; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.i = i; $f.last = last; $f.n = n; $f.nw = nw; $f.nw$1 = nw$1; $f.nw$2 = nw$2; $f.r = r; $f.s = s; $f.sw = sw; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	byteStringReplacer.prototype.WriteString = function(w, s) { return this.$val.WriteString(w, s); };
byteStringReplacerstrings.byteStringReplacerstrings.getStringWriterstrings.sliceType strings.makeStringFinderstringsmakeStringFinder makeStringFinder�0	makeStringFinder = function(pattern) {
		var _i, _ref, f, i, i$1, i$2, i$3, last, lastPrefix, lenSuffix, pattern, x, x$1, x$2, x$3, x$4, x$5;
  k�		f = new stringFinder.ptr(pattern, arrayType$2.zero(), $makeSlice(sliceType$3, pattern.length));
  l"		last = pattern.length - 1 >> 0;
  l�		_ref = f.badCharSkip;
		_i = 0;
		while (true) {
			if (!(_i < 256)) { break; }
			i = _i;
  l�			(x = f.badCharSkip, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i] = pattern.length));
    			_i++;
		}
  m�		i$1 = 0;
		while (true) {
			if (!(i$1 < last)) { break; }
  m�			(x$1 = f.badCharSkip, x$2 = pattern.charCodeAt(i$1), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = (last - i$1 >> 0)));
  m�			i$1 = i$1 + (1) >> 0;
    		}
  nV		lastPrefix = last;
  nn		i$2 = last;
		while (true) {
			if (!(i$2 >= 0)) { break; }
    			if (HasPrefix(pattern, $substring(pattern, (i$2 + 1 >> 0)))) {
  n�				lastPrefix = i$2 + 1 >> 0;
    			}
  o			(x$3 = f.goodSuffixSkip, ((i$2 < 0 || i$2 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i$2] = ((lastPrefix + last >> 0) - i$2 >> 0)));
  n�			i$2 = i$2 - (1) >> 0;
    		}
  o�		i$3 = 0;
		while (true) {
			if (!(i$3 < last)) { break; }
  o�			lenSuffix = longestCommonSuffix(pattern, $substring(pattern, 1, (i$3 + 1 >> 0)));
    			if (!((pattern.charCodeAt((i$3 - lenSuffix >> 0)) === pattern.charCodeAt((last - lenSuffix >> 0))))) {
  pO				(x$4 = f.goodSuffixSkip, x$5 = last - lenSuffix >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5] = ((lenSuffix + last >> 0) - i$3 >> 0)));
    			}
  o�			i$3 = i$3 + (1) >> 0;
    		}
  p�		return f;
    	};
makeStringFinderstrings.HasPrefixstrings.arrayType$2strings.longestCommonSuffixstrings.makeStringFinderstrings.sliceType$3strings.stringFinder strings.longestCommonSuffixstringslongestCommonSuffix longestCommonSuffix�R	longestCommonSuffix = function(a, b) {
		var a, b, i;
		i = 0;
  p�		while (true) {
			if (!(i < a.length && i < b.length)) { break; }
    			if (!((a.charCodeAt(((a.length - 1 >> 0) - i >> 0)) === b.charCodeAt(((b.length - 1 >> 0) - i >> 0))))) {
  q				break;
    			}
  p�			i = i + (1) >> 0;
    		}
  q*		return i;
    	};
longestCommonSuffixstrings.longestCommonSuffix (*strings.stringFinder).next �~	stringFinder.ptr.prototype.next = function(text) {
		var f, i, j, text, x, x$1, x$2;
		f = this;
  q�		i = f.pattern.length - 1 >> 0;
  q�		while (true) {
			if (!(i < text.length)) { break; }
  rV			j = f.pattern.length - 1 >> 0;
  rp			while (true) {
				if (!(j >= 0 && (text.charCodeAt(i) === f.pattern.charCodeAt(j)))) { break; }
  r�				i = i - (1) >> 0;
  r�				j = j - (1) >> 0;
    			}
    			if (j < 0) {
  r�				return i + 1 >> 0;
    			}
  r�			i = i + (max((x = f.badCharSkip, x$1 = text.charCodeAt(i), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])), (x$2 = f.goodSuffixSkip, ((j < 0 || j >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + j])))) >> 0;
    		}
  s		return -1;
    	};
	stringFinder.prototype.next = function(text) { return this.$val.next(text); };
stringFindernext~strings.maxstrings.stringFinder strings.maxstringsmax maxm	max = function(a, b) {
		var a, b;
    		if (a > b) {
  sD			return a;
    		}
  sQ		return b;
    	};
maxstrings.max strings.explodestringsexplode explode��	explode = function(s, n) {
		var _tuple, a, ch, i, l, n, s, size, x;
  u�		l = utf8.RuneCountInString(s);
    		if (n < 0 || n > l) {
  v			n = l;
    		}
  v 		a = $makeSlice(sliceType$1, n);
  v<		i = 0;
		while (true) {
			if (!(i < (n - 1 >> 0))) { break; }
  vU			_tuple = utf8.DecodeRuneInString(s);
			ch = _tuple[0];
			size = _tuple[1];
  v~			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = $substring(s, 0, size));
  v�			s = $substring(s, size);
    			if (ch === 65533) {
  v�				((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = "\xEF\xBF\xBD");
    			}
  vM			i = i + (1) >> 0;
    		}
    		if (n > 0) {
  v�			(x = n - 1 >> 0, ((x < 0 || x >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + x] = s));
    		}
  v�		return a;
    	};
explodestrings.explodestrings.sliceType$1unicode/utf8.DecodeRuneInStringunicode/utf8.RuneCountInString strings.ContainsstringsContains Contains|	Contains = function(s, substr) {
		var s, substr;
  y)		return Index(s, substr) >= 0;
    	};
	$pkg.Contains = Contains;
Containsstrings.Containsstrings.Index strings.ContainsAnystringsContainsAny ContainsAny��	ContainsAny = function(s, chars) {
		var chars, s;
  y�		return IndexAny(s, chars) >= 0;
    	};
	$pkg.ContainsAny = ContainsAny;
ContainsAnystrings.ContainsAnystrings.IndexAny strings.ContainsRunestringsContainsRune ContainsRune}	ContainsRune = function(s, r) {
		var r, s;
  zU		return IndexRune(s, r) >= 0;
    	};
	$pkg.ContainsRune = ContainsRune;
ContainsRunestrings.ContainsRunestrings.IndexRune strings.IndexRunestrings	IndexRune 	IndexRune�d	IndexRune = function(s, r) {
		var _i, _ref, _rune, i, r, r$1, s;
    		if (0 <= r && r < 128) {
  m			return IndexByte(s, ((r << 24 >>> 24)));
    		} else if ((r === 65533)) {
  �			_ref = s;
			_i = 0;
			while (true) {
				if (!(_i < _ref.length)) { break; }
				_rune = $decodeRune(_ref, _i);
				i = _i;
				r$1 = _rune[0];
    				if (r$1 === 65533) {
  �					return i;
    				}
    				_i += _rune[1];
			}
  �			return -1;
    		} else if (!utf8.ValidRune(r)) {
  �			return -1;
    		} else {
  �-			return Index(s, ($encodeRune(r)));
    		}
    	};
	$pkg.IndexRune = IndexRune;
	IndexRunestrings.Indexstrings.IndexBytestrings.IndexRuneunicode/utf8.ValidRune strings.IndexAnystringsIndexAny IndexAny��	IndexAny = function(s, chars) {
		var _i, _ref, _rune, _tuple, as, c, chars, i, i$1, isASCII, r, s;
    		if (chars === "") {
  �B			return -1;
    		}
    		if (chars.length === 1) {
  ��			r = ((chars.charCodeAt(0) >> 0));
    			if (r >= 128) {
  ��				r = 65533;
    			}
  ��			return IndexRune(s, r);
    		}
    		if (s.length > 8) {
  ��			_tuple = makeASCIISet(chars);
			as = $clone(_tuple[0], asciiSet);
			isASCII = _tuple[1];
    			if (isASCII) {
  �4				i = 0;
				while (true) {
					if (!(i < s.length)) { break; }
    					if (new ptrType$5(as).contains(s.charCodeAt(i))) {
  �n						return i;
    					}
  �H					i = i + (1) >> 0;
    				}
  ��				return -1;
    			}
    		}
  ��		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i$1 = _i;
			c = _rune[0];
    			if (IndexRune(chars, c) >= 0) {
  ��				return i$1;
    			}
    			_i += _rune[1];
		}
  ��		return -1;
    	};
	$pkg.IndexAny = IndexAny;
IndexAnystrings.IndexAnystrings.IndexRunestrings.asciiSetstrings.contains~strings.makeASCIISetstrings.ptrType$5 strings.LastIndexAnystringsLastIndexAny LastIndexAny�n	LastIndexAny = function(s, chars) {
		var _tuple, _tuple$1, _tuple$2, as, chars, i, i$1, i$2, isASCII, r, r$1, rc, rc$1, s, size, size$1;
    		if (chars === "") {
  ��			return -1;
    		}
    		if (s.length === 1) {
  �			rc = ((s.charCodeAt(0) >> 0));
    			if (rc >= 128) {
  �<				rc = 65533;
    			}
    			if (IndexRune(chars, rc) >= 0) {
  �x				return 0;
    			}
  ��			return -1;
    		}
    		if (s.length > 8) {
  ��			_tuple = makeASCIISet(chars);
			as = $clone(_tuple[0], asciiSet);
			isASCII = _tuple[1];
    			if (isASCII) {
  ��				i = s.length - 1 >> 0;
				while (true) {
					if (!(i >= 0)) { break; }
    					if (new ptrType$5(as).contains(s.charCodeAt(i))) {
  �						return i;
    					}
  ��					i = i - (1) >> 0;
    				}
  �5				return -1;
    			}
    		}
    		if (chars.length === 1) {
  �^			rc$1 = ((chars.charCodeAt(0) >> 0));
    			if (rc$1 >= 128) {
  ��				rc$1 = 65533;
    			}
  ��			i$1 = s.length;
			while (true) {
				if (!(i$1 > 0)) { break; }
  ��				_tuple$1 = utf8.DecodeLastRuneInString($substring(s, 0, i$1));
				r = _tuple$1[0];
				size = _tuple$1[1];
  ��				i$1 = i$1 - (size) >> 0;
    				if (rc$1 === r) {
  �					return i$1;
    				}
    			}
  �+			return -1;
    		}
  �=		i$2 = s.length;
		while (true) {
			if (!(i$2 > 0)) { break; }
  �U			_tuple$2 = utf8.DecodeLastRuneInString($substring(s, 0, i$2));
			r$1 = _tuple$2[0];
			size$1 = _tuple$2[1];
  ��			i$2 = i$2 - (size$1) >> 0;
    			if (IndexRune(chars, r$1) >= 0) {
  ��				return i$2;
    			}
    		}
  ��		return -1;
    	};
	$pkg.LastIndexAny = LastIndexAny;
LastIndexAnystrings.IndexRunestrings.LastIndexAnystrings.asciiSetstrings.contains~strings.makeASCIISetstrings.ptrType$5#unicode/utf8.DecodeLastRuneInString strings.LastIndexBytestringsLastIndexByte LastIndexByte�"	LastIndexByte = function(s, c) {
		var c, i, s;
  �c		i = s.length - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
    			if (s.charCodeAt(i) === c) {
  ��				return i;
    			}
  �|			i = i - (1) >> 0;
    		}
  ��		return -1;
    	};
	$pkg.LastIndexByte = LastIndexByte;
LastIndexBytestrings.LastIndexByte strings.genSplitstringsgenSplit genSplit�{	genSplit = function(s, sep, sepSave, n) {
		var a, i, m, n, s, sep, sepSave;
    		if (n === 0) {
  �d			return sliceType$1.nil;
    		}
    		if (sep === "") {
  ��			return explode(s, n);
    		}
    		if (n < 0) {
  ��			n = Count(s, sep) + 1 >> 0;
    		}
  ��		a = $makeSlice(sliceType$1, n);
  ��		n = n - (1) >> 0;
  ��		i = 0;
  ��		while (true) {
			if (!(i < n)) { break; }
  ��			m = Index(s, sep);
    			if (m < 0) {
  �				break;
    			}
  �'			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = $substring(s, 0, (m + sepSave >> 0)));
  �>			s = $substring(s, (m + sep.length >> 0));
  �S			i = i + (1) >> 0;
    		}
  �[		((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = s);
  �e		return $subslice(a, 0, (i + 1 >> 0));
    	};
genSplitstrings.Countstrings.Indexstrings.explodestrings.genSplitstrings.sliceType$1 strings.SplitNstringsSplitN SplitNw	SplitN = function(s, sep, n) {
		var n, s, sep;
  �r		return genSplit(s, sep, 0, n);
    	};
	$pkg.SplitN = SplitN;
SplitNstrings.SplitNstrings.genSplit strings.SplitAfterNstringsSplitAfterN SplitAfterN��	SplitAfterN = function(s, sep, n) {
		var n, s, sep;
  ��		return genSplit(s, sep, sep.length, n);
    	};
	$pkg.SplitAfterN = SplitAfterN;
SplitAfterNstrings.SplitAfterNstrings.genSplit strings.SplitstringsSplit Splito	Split = function(s, sep) {
		var s, sep;
  �~		return genSplit(s, sep, 0, -1);
    	};
	$pkg.Split = Split;
Splitstrings.Splitstrings.genSplit strings.SplitAfterstrings
SplitAfter 
SplitAfter��	SplitAfter = function(s, sep) {
		var s, sep;
  �w		return genSplit(s, sep, sep.length, -1);
    	};
	$pkg.SplitAfter = SplitAfter;

SplitAfterstrings.SplitAfterstrings.genSplit strings.FieldsstringsFields Fields� 	Fields = function(s) {
		var $24r, _r, a, fieldStart, i, i$1, isSpace, n, na, r, s, setBits, wasSpace, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; a = $f.a; fieldStart = $f.fieldStart; i = $f.i; i$1 = $f.i$1; isSpace = $f.isSpace; n = $f.n; na = $f.na; r = $f.r; s = $f.s; setBits = $f.setBits; wasSpace = $f.wasSpace; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �^		n = 0;
  �f		wasSpace = 1;
  ��		setBits = 0;
  ��		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  ��			r = s.charCodeAt(i);
  ��			setBits = (setBits | (r)) >>> 0;
  �			isSpace = ((((r < 0 || r >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[r]) >> 0));
  �(			n = n + ((wasSpace & (~isSpace >> 0))) >> 0;
  �C			wasSpace = isSpace;
  ��			i = i + (1) >> 0;
    		}
  �[		/* */ if (setBits >= 128) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (setBits >= 128) { */ case 1:
  ��			_r = FieldsFunc(s, unicode.IsSpace); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  ��		a = $makeSlice(sliceType$1, n);
  �		na = 0;
  �		fieldStart = 0;
  �		i$1 = 0;
  �Q		while (true) {
			if (!(i$1 < s.length && !(((x = s.charCodeAt(i$1), ((x < 0 || x >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x])) === 0)))) { break; }
  �}			i$1 = i$1 + (1) >> 0;
    		}
  ��		fieldStart = i$1;
  ��		while (true) {
			if (!(i$1 < s.length)) { break; }
    			if ((x$1 = s.charCodeAt(i$1), ((x$1 < 0 || x$1 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x$1])) === 0) {
  ��				i$1 = i$1 + (1) >> 0;
  ��				continue;
    			}
  ��			((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = $substring(s, fieldStart, i$1));
  ��			na = na + (1) >> 0;
  ��			i$1 = i$1 + (1) >> 0;
  �'			while (true) {
				if (!(i$1 < s.length && !(((x$2 = s.charCodeAt(i$1), ((x$2 < 0 || x$2 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[x$2])) === 0)))) { break; }
  �T				i$1 = i$1 + (1) >> 0;
    			}
  �^			fieldStart = i$1;
    		}
    		if (fieldStart < s.length) {
  ��			((na < 0 || na >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + na] = $substring(s, fieldStart));
    		}
  ��		$s = -1; return a;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fields }; } $f.$24r = $24r; $f._r = _r; $f.a = a; $f.fieldStart = fieldStart; $f.i = i; $f.i$1 = i$1; $f.isSpace = isSpace; $f.n = n; $f.na = na; $f.r = r; $f.s = s; $f.setBits = setBits; $f.wasSpace = wasSpace; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fields = Fields;
Fieldsstrings.Fieldsstrings.FieldsFuncstrings.asciiSpacestrings.sliceType$1unicode.IsSpace strings.FieldsFuncstrings
FieldsFunc 
FieldsFunc�	(	FieldsFunc = function(s, f) {
		var _i, _i$1, _r, _ref, _ref$1, _rune, a, end, f, i, rune, s, span$1, spans, start, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; _rune = $f._rune; a = $f.a; end = $f.end; f = $f.f; i = $f.i; rune = $f.rune; s = $f.s; span$1 = $f.span$1; spans = $f.spans; start = $f.start; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �*		spans = $makeSlice(sliceType$4, 0, 32);
  �0		start = -1;
  �Y		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.length)) { break; } */ if(!(_i < _ref.length)) { $s = 2; continue; }
			_rune = $decodeRune(_ref, _i);
			end = _i;
			rune = _rune[0];
  �v			_r = f(rune); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r) { */ case 3:
    				if (start >= 0) {
  ��					spans = $append(spans, new span.ptr(start, end));
  �`					start = ~start >> 0;
    				}
    				$s = 5; continue;
			/* } else { */ case 4:
    				if (start < 0) {
  ��					start = end;
    				}
    			/* } */ case 5:
    			_i += _rune[1];
		$s = 1; continue;
		case 2:
    		if (start >= 0) {
  ��			spans = $append(spans, new span.ptr(start, s.length));
    		}
  �B		a = $makeSlice(sliceType$1, spans.$length);
  �c		_ref$1 = spans;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i = _i$1;
			span$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), span);
  ��			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = $substring(s, span$1.start, span$1.end));
    			_i$1++;
		}
  ��		$s = -1; return a;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FieldsFunc }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f._rune = _rune; $f.a = a; $f.end = end; $f.f = f; $f.i = i; $f.rune = rune; $f.s = s; $f.span$1 = span$1; $f.spans = spans; $f.start = start; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.FieldsFunc = FieldsFunc;

FieldsFuncstrings.FieldsFuncstrings.sliceType$1strings.sliceType$4strings.span strings.JoinstringsJoin Join��	Join = function(elems, sep) {
		var _1, _i, _ref, b, elems, i, n, s, sep;
    		_1 = elems.$length;
    		if (_1 === (0)) {
  ��			return "";
    		} else if (_1 === (1)) {
  ��			return (0 >= elems.$length ? ($throwRuntimeError("index out of range"), undefined) : elems.$array[elems.$offset + 0]);
    		}
  ��		n = $imul(sep.length, ((elems.$length - 1 >> 0)));
  ��		i = 0;
		while (true) {
			if (!(i < elems.$length)) { break; }
  �			n = n + (((i < 0 || i >= elems.$length) ? ($throwRuntimeError("index out of range"), undefined) : elems.$array[elems.$offset + i]).length) >> 0;
  �
			i = i + (1) >> 0;
    		}
  �.		b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �9		b.Grow(n);
  �D		b.WriteString((0 >= elems.$length ? ($throwRuntimeError("index out of range"), undefined) : elems.$array[elems.$offset + 0]));
  �]		_ref = $subslice(elems, 1);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �}			b.WriteString(sep);
  ��			b.WriteString(s);
    			_i++;
		}
  ��		return b.String();
    	};
	$pkg.Join = Join;
Joinstrings.Builderstrings.Joinstrings.ptrTypestrings.sliceType strings.HasPrefixstrings	HasPrefix 	HasPrefix��	HasPrefix = function(s, prefix) {
		var prefix, s;
  �!		return s.length >= prefix.length && $substring(s, 0, prefix.length) === prefix;
    	};
	$pkg.HasPrefix = HasPrefix;
	HasPrefixstrings.HasPrefix strings.HasSuffixstrings	HasSuffix 	HasSuffix��	HasSuffix = function(s, suffix) {
		var s, suffix;
  ��		return s.length >= suffix.length && $substring(s, (s.length - suffix.length >> 0)) === suffix;
    	};
	$pkg.HasSuffix = HasSuffix;
	HasSuffixstrings.HasSuffix strings.MapstringsMap Map�
�	Map = function(mapping, s) {
		var _i, _i$1, _r, _r$1, _ref, _ref$1, _rune, _rune$1, _tuple, b, c, c$1, i, mapping, r, r$1, s, width, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _rune = $f._rune; _rune$1 = $f._rune$1; _tuple = $f._tuple; b = $f.b; c = $f.c; c$1 = $f.c$1; i = $f.i; mapping = $f.mapping; r = $f.r; r$1 = $f.r$1; s = $f.s; width = $f.width; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �,		b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �8		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.length)) { break; } */ if(!(_i < _ref.length)) { $s = 2; continue; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
  �P			_r = mapping(c); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			r = _r;
    			if ((r === c) && !((c === 65533))) {
  ��				_i += _rune[1];
				/* continue; */ $s = 1; continue;
    			}
  ��			width = 0;
    			if (c === 65533) {
  ��				_tuple = utf8.DecodeRuneInString($substring(s, i));
				c = _tuple[0];
				width = _tuple[1];
    				if (!((width === 1)) && (r === c)) {
  �					_i += _rune[1];
					/* continue; */ $s = 1; continue;
    				}
    			} else {
  �+				width = utf8.RuneLen(c);
    			}
  �J			b.Grow(s.length + 4 >> 0);
  �i			b.WriteString($substring(s, 0, i));
    			if (r >= 0) {
  ��				b.WriteRune(r);
    			}
  ��			s = $substring(s, (i + width >> 0));
  ��			/* break; */ $s = 2; continue;
    		case 2:
    		if (b.Cap() === 0) {
  �			$s = -1; return s;
    		}
  �"		_ref$1 = s;
		_i$1 = 0;
		/* while (true) { */ case 4:
			/* if (!(_i$1 < _ref$1.length)) { break; } */ if(!(_i$1 < _ref$1.length)) { $s = 5; continue; }
			_rune$1 = $decodeRune(_ref$1, _i$1);
			c$1 = _rune$1[0];
  �:			_r$1 = mapping(c$1); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			r$1 = _r$1;
    			if (r$1 >= 0) {
    				if (r$1 < 128) {
  �
					b.WriteByte(((r$1 << 24 >>> 24)));
    				} else {
  �M					b.WriteRune(r$1);
    				}
    			}
    			_i$1 += _rune$1[1];
		$s = 4; continue;
		case 5:
  �j		$s = -1; return b.String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Map }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._rune = _rune; $f._rune$1 = _rune$1; $f._tuple = _tuple; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.i = i; $f.mapping = mapping; $f.r = r; $f.r$1 = r$1; $f.s = s; $f.width = width; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Map = Map;
Mapstrings.Builderstrings.Mapstrings.ptrTypestrings.sliceTypeunicode/utf8.DecodeRuneInStringunicode/utf8.RuneLen strings.RepeatstringsRepeat Repeat��	Repeat = function(s, count) {
		var _q, _q$1, b, count, n, s;
    		if (count === 0) {
  �_			return "";
    		}
    		if (count < 0) {
  �			$panic(new $String("strings: negative Repeat count"));
    		} else if (!(((_q = ($imul(s.length, count)) / count, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) === s.length))) {
  �j			$panic(new $String("strings: Repeat count causes overflow"));
    		}
  ��		n = $imul(s.length, count);
  ��		b = new Builder.ptr(ptrType.nil, sliceType.nil);
  ��		b.Grow(n);
  ��		b.WriteString(s);
  ��		while (true) {
			if (!(b.Len() < n)) { break; }
    			if (b.Len() <= (_q$1 = n / 2, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"))) {
  �
				b.WriteString(b.String());
    			} else {
  �2				b.WriteString($substring(b.String(), 0, (n - b.Len() >> 0)));
  �[				break;
    			}
    		}
  �i		return b.String();
    	};
	$pkg.Repeat = Repeat;
Repeatstrings.Builderstrings.Repeatstrings.ptrTypestrings.sliceType strings.ToUpperstringsToUpper ToUpper��	ToUpper = function(s) {
		var $24r, _r, _tmp, _tmp$1, b, c, c$1, hasLower, i, i$1, isASCII, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; c = $f.c; c$1 = $f.c$1; hasLower = $f.hasLower; i = $f.i; i$1 = $f.i$1; isASCII = $f.isASCII; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_tmp = true;
		_tmp$1 = false;
		isASCII = _tmp;
		hasLower = _tmp$1;
  �		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  �+			c = s.charCodeAt(i);
    			if (c >= 128) {
  �R				isASCII = false;
  �e				break;
    			}
  �q			hasLower = hasLower || (97 <= c && c <= 122);
  �#			i = i + (1) >> 0;
    		}
    		if (isASCII) {
    			if (!hasLower) {
  ��				$s = -1; return s;
    			}
  ��			b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �			b.Grow(s.length);
  �			i$1 = 0;
			while (true) {
				if (!(i$1 < s.length)) { break; }
  �:				c$1 = s.charCodeAt(i$1);
    				if (97 <= c$1 && c$1 <= 122) {
  �e					c$1 = c$1 - (32) << 24 >>> 24;
    				}
  �|				b.WriteByte(c$1);
  �1				i$1 = i$1 + (1) >> 0;
    			}
  ��			$s = -1; return b.String();
    		}
  ��		_r = Map(unicode.ToUpper, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToUpper }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.hasLower = hasLower; $f.i = i; $f.i$1 = i$1; $f.isASCII = isASCII; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToUpper = ToUpper;
ToUpperstrings.Builderstrings.Mapstrings.ToUpperstrings.ptrTypestrings.sliceTypeunicode.ToUpper strings.ToLowerstringsToLower ToLower��	ToLower = function(s) {
		var $24r, _r, _tmp, _tmp$1, b, c, c$1, hasUpper, i, i$1, isASCII, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; c = $f.c; c$1 = $f.c$1; hasUpper = $f.hasUpper; i = $f.i; i$1 = $f.i$1; isASCII = $f.isASCII; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �4		_tmp = true;
		_tmp$1 = false;
		isASCII = _tmp;
		hasUpper = _tmp$1;
  �Z		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  �v			c = s.charCodeAt(i);
    			if (c >= 128) {
  ��				isASCII = false;
  ��				break;
    			}
  ��			hasUpper = hasUpper || (65 <= c && c <= 90);
  �n			i = i + (1) >> 0;
    		}
    		if (isASCII) {
    			if (!hasUpper) {
  �4				$s = -1; return s;
    			}
  �G			b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �S			b.Grow(s.length);
  �h			i$1 = 0;
			while (true) {
				if (!(i$1 < s.length)) { break; }
  ��				c$1 = s.charCodeAt(i$1);
    				if (65 <= c$1 && c$1 <= 90) {
  ��					c$1 = c$1 + (32) << 24 >>> 24;
    				}
  ��				b.WriteByte(c$1);
  �|				i$1 = i$1 + (1) >> 0;
    			}
  ��			$s = -1; return b.String();
    		}
  ��		_r = Map(unicode.ToLower, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToLower }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.hasUpper = hasUpper; $f.i = i; $f.i$1 = i$1; $f.isASCII = isASCII; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToLower = ToLower;
ToLowerstrings.Builderstrings.Mapstrings.ToLowerstrings.ptrTypestrings.sliceTypeunicode.ToLower strings.ToTitlestringsToTitle ToTitle�x	ToTitle = function(s) {
		var $24r, _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = Map(unicode.ToTitle, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToTitle }; } $f.$24r = $24r; $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToTitle = ToTitle;
ToTitlestrings.Mapstrings.ToTitleunicode.ToTitle strings.ToUpperSpecialstringsToUpperSpecial ToUpperSpecial��	ToUpperSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = Map($methodVal(c, "ToUpper"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToUpperSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToUpperSpecial = ToUpperSpecial;
ToUpperSpecialstrings.Mapstrings.ToUpperSpecial strings.ToLowerSpecialstringsToLowerSpecial ToLowerSpecial��	ToLowerSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �x		_r = Map($methodVal(c, "ToLower"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToLowerSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToLowerSpecial = ToLowerSpecial;
ToLowerSpecialstrings.Mapstrings.ToLowerSpecial strings.ToTitleSpecialstringsToTitleSpecial ToTitleSpecial��	ToTitleSpecial = function(c, s) {
		var $24r, _r, c, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �q		_r = Map($methodVal(c, "ToTitle"), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToTitleSpecial }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToTitleSpecial = ToTitleSpecial;
ToTitleSpecialstrings.Mapstrings.ToTitleSpecial strings.ToValidUTF8stringsToValidUTF8 ToValidUTF8��	ToValidUTF8 = function(s, replacement) {
		var _i, _ref, _rune, _tuple, _tuple$1, b, c, c$1, i, i$1, invalid, replacement, s, wid, wid$1;
  �Z		b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �f		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
    			if (!((c === 65533))) {
  ��				_i += _rune[1];
				continue;
    			}
  ��			_tuple = utf8.DecodeRuneInString($substring(s, i));
			wid = _tuple[1];
    			if (wid === 1) {
  ��				b.Grow(s.length + replacement.length >> 0);
  �				b.WriteString($substring(s, 0, i));
  �#				s = $substring(s, i);
  �0				break;
    			}
    			_i += _rune[1];
		}
    		if (b.Cap() === 0) {
  ��			return s;
    		}
  ��		invalid = false;
  ��		i$1 = 0;
		while (true) {
			if (!(i$1 < s.length)) { break; }
  �			c$1 = s.charCodeAt(i$1);
    			if (c$1 < 128) {
  �'				i$1 = i$1 + (1) >> 0;
  �.				invalid = false;
  �A				b.WriteByte(c$1);
  �S				continue;
    			}
  �b			_tuple$1 = utf8.DecodeRuneInString($substring(s, i$1));
			wid$1 = _tuple$1[1];
    			if (wid$1 === 1) {
  ��				i$1 = i$1 + (1) >> 0;
    				if (!invalid) {
  ��					invalid = true;
  ��					b.WriteString(replacement);
    				}
  ��				continue;
    			}
  ��			invalid = false;
  �			b.WriteString($substring(s, i$1, (i$1 + wid$1 >> 0)));
  �,			i$1 = i$1 + (wid$1) >> 0;
    		}
  �:		return b.String();
    	};
	$pkg.ToValidUTF8 = ToValidUTF8;
ToValidUTF8strings.Builderstrings.ToValidUTF8strings.ptrTypestrings.sliceTypeunicode/utf8.DecodeRuneInString strings.isSeparatorstringsisSeparator isSeparator��	isSeparator = function(r) {
		var r;
    		if (r <= 127) {
    			if (48 <= r && r <= 57) {
  �n				return false;
    			} else if (97 <= r && r <= 122) {
  ��				return false;
    			} else if (65 <= r && r <= 90) {
  ��				return false;
    			} else if ((r === 95)) {
  ��				return false;
    			}
  ��			return true;
    		}
    		if (unicode.IsLetter(r) || unicode.IsDigit(r)) {
  �g			return false;
    		}
  ��		return unicode.IsSpace(r);
    	};
isSeparatorstrings.isSeparatorunicode.IsDigitunicode.IsLetterunicode.IsSpace strings.TitlestringsTitle Title�	Title = function(s) {
		var $24r, _r, prev, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; prev = $f.prev; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		prev = [prev];
  �h		prev[0] = 32;
  �u		_r = Map((function(prev) { return function(r) {
			var r;
    			if (isSeparator(prev[0])) {
  ��				prev[0] = r;
  ��				return unicode.ToTitle(r);
    			}
  ��			prev[0] = r;
  ��			return r;
    		}; })(prev), s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Title }; } $f.$24r = $24r; $f._r = _r; $f.prev = prev; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Title = Title;
Titlestrings.Mapstrings.Titlestrings.isSeparatorunicode.ToTitle strings.TrimLeftFuncstringsTrimLeftFunc TrimLeftFunc��	TrimLeftFunc = function(s, f) {
		var _r, f, i, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; i = $f.i; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = indexFunc(s, f, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i === -1) {
  ��			$s = -1; return "";
    		}
  ��		$s = -1; return $substring(s, i);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimLeftFunc }; } $f._r = _r; $f.f = f; $f.i = i; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimLeftFunc = TrimLeftFunc;
TrimLeftFuncstrings.TrimLeftFuncstrings.indexFunc strings.TrimRightFuncstringsTrimRightFunc TrimRightFunc��	TrimRightFunc = function(s, f) {
		var _r, _tuple, f, i, s, wid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; f = $f.f; i = $f.i; s = $f.s; wid = $f.wid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = lastIndexFunc(s, f, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i >= 0 && s.charCodeAt(i) >= 128) {
  ��			_tuple = utf8.DecodeRuneInString($substring(s, i));
			wid = _tuple[1];
  �			i = i + (wid) >> 0;
    		} else {
  �3			i = i + (1) >> 0;
    		}
  �;		$s = -1; return $substring(s, 0, i);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimRightFunc }; } $f._r = _r; $f._tuple = _tuple; $f.f = f; $f.i = i; $f.s = s; $f.wid = wid; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimRightFunc = TrimRightFunc;
TrimRightFuncstrings.TrimRightFuncstrings.lastIndexFuncunicode/utf8.DecodeRuneInString strings.TrimFuncstringsTrimFunc TrimFunc�K	TrimFunc = function(s, f) {
		var $24r, _r, _r$1, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = TrimLeftFunc(s, f); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = TrimRightFunc(_r, f); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimFunc }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimFunc = TrimFunc;
TrimFuncstrings.TrimFuncstrings.TrimLeftFuncstrings.TrimRightFunc strings.IndexFuncstrings	IndexFunc 	IndexFunc��	IndexFunc = function(s, f) {
		var $24r, _r, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = indexFunc(s, f, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: IndexFunc }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.IndexFunc = IndexFunc;
	IndexFuncstrings.IndexFuncstrings.indexFunc strings.LastIndexFuncstringsLastIndexFunc LastIndexFunc��	LastIndexFunc = function(s, f) {
		var $24r, _r, f, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r = lastIndexFunc(s, f, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LastIndexFunc }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.LastIndexFunc = LastIndexFunc;
LastIndexFuncstrings.LastIndexFuncstrings.lastIndexFunc strings.indexFuncstrings	indexFunc 	indexFunc��	indexFunc = function(s, f, truth) {
		var _i, _r, _ref, _rune, f, i, r, s, truth, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _rune = $f._rune; f = $f.f; i = $f.i; r = $f.r; s = $f.s; truth = $f.truth; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �n		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.length)) { break; } */ if(!(_i < _ref.length)) { $s = 2; continue; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			r = _rune[0];
  ��			_r = f(r); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r === truth) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r === truth) { */ case 3:
  ��				$s = -1; return i;
    			/* } */ case 4:
    			_i += _rune[1];
		$s = 1; continue;
		case 2:
  ��		$s = -1; return -1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: indexFunc }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._rune = _rune; $f.f = f; $f.i = i; $f.r = r; $f.s = s; $f.truth = truth; $f.$s = $s; $f.$r = $r; return $f;
	};
	indexFuncstrings.indexFunc strings.lastIndexFuncstringslastIndexFunc lastIndexFunc��	lastIndexFunc = function(s, f, truth) {
		var _r, _tuple, f, i, r, s, size, truth, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; f = $f.f; i = $f.i; r = $f.r; s = $f.s; size = $f.size; truth = $f.truth; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		i = s.length;
		/* while (true) { */ case 1:
			/* if (!(i > 0)) { break; } */ if(!(i > 0)) { $s = 2; continue; }
  ��			_tuple = utf8.DecodeLastRuneInString($substring(s, 0, i));
			r = _tuple[0];
			size = _tuple[1];
  ��			i = i - (size) >> 0;
  ��			_r = f(r); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (_r === truth) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_r === truth) { */ case 3:
  ��				$s = -1; return i;
    			/* } */ case 4:
    		$s = 1; continue;
		case 2:
  ��		$s = -1; return -1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: lastIndexFunc }; } $f._r = _r; $f._tuple = _tuple; $f.f = f; $f.i = i; $f.r = r; $f.s = s; $f.size = size; $f.truth = truth; $f.$s = $s; $f.$r = $r; return $f;
	};
lastIndexFuncstrings.lastIndexFunc#unicode/utf8.DecodeLastRuneInString strings.makeASCIISetstringsmakeASCIISet makeASCIISet��	makeASCIISet = function(chars) {
		var _index, _tmp, _tmp$1, _tmp$2, _tmp$3, as, c, chars, i, ok, y;
		as = arrayType$3.zero();
		ok = false;
  		i = 0;
		while (true) {
			if (!(i < chars.length)) { break; }
  ¬			c = chars.charCodeAt(i);
    			if (c >= 128) {
    				_tmp = $clone(as, asciiSet);
				_tmp$1 = false;
				asciiSet.copy(as, _tmp);
				ok = _tmp$1;
				return [as, ok];
    			}
    			_index = c >>> 5 << 24 >>> 24;
  ��			((_index < 0 || _index >= as.length) ? ($throwRuntimeError("index out of range"), undefined) : as[_index] = ((((_index < 0 || _index >= as.length) ? ($throwRuntimeError("index out of range"), undefined) : as[_index]) | (((y = ((((c & 31) >>> 0) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0));
  ¤			i = i + (1) >> 0;
    		}
    		_tmp$2 = $clone(as, asciiSet);
		_tmp$3 = true;
		asciiSet.copy(as, _tmp$2);
		ok = _tmp$3;
		return [as, ok];
    	};
makeASCIISetstrings.arrayType$3strings.asciiSetstrings.makeASCIISet (*strings.asciiSet).contains ��	asciiSet.prototype.contains = function(c) {
		var as, c, x, x$1, y;
		as = this.$val;
  �		return !((((((x = as, x$1 = c >>> 5 << 24 >>> 24, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) & (((y = ((((c & 31) >>> 0) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0)) === 0));
    	};
	$ptrType(asciiSet).prototype.contains = function(c) { return (new asciiSet(this.$get())).contains(c); };
asciiSet	contains~strings.asciiSet strings.makeCutsetFuncstringsmakeCutsetFunc makeCutsetFunc�b	makeCutsetFunc = function(cutset) {
		var _tuple, as, cutset, isASCII;
    		if ((cutset.length === 1) && cutset.charCodeAt(0) < 128) {
  �			return (function(r) {
				var r;
  �6				return r === ((cutset.charCodeAt(0) >> 0));
    			});
    		}
  �]		_tuple = makeASCIISet(cutset);
		as = $clone(_tuple[0], asciiSet);
		isASCII = _tuple[1];
    		if (isASCII) {
  Ď			return (function(r) {
				var r;
  Ĭ				return r < 128 && new ptrType$5(as).contains(((r << 24 >>> 24)));
    			});
    		}
  ��		return (function(r) {
			var r;
  � 			return IndexRune(cutset, r) >= 0;
    		});
    	};
makeCutsetFuncstrings.IndexRunestrings.asciiSetstrings.contains~strings.makeASCIISetstrings.makeCutsetFuncstrings.ptrType$5 strings.TrimstringsTrim Trim��	Trim = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (s === "" || cutset === "") {
  ��			$s = -1; return s;
    		}
  ��		_r = TrimFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Trim }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Trim = Trim;
Trimstrings.Trimstrings.TrimFuncstrings.makeCutsetFunc strings.TrimLeftstringsTrimLeft TrimLeft�	TrimLeft = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (s === "" || cutset === "") {
  �			$s = -1; return s;
    		}
  �		_r = TrimLeftFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimLeft }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimLeft = TrimLeft;
TrimLeftstrings.TrimLeftstrings.TrimLeftFuncstrings.makeCutsetFunc strings.TrimRightstrings	TrimRight 	TrimRight�	TrimRight = function(s, cutset) {
		var $24r, _r, cutset, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cutset = $f.cutset; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (s === "" || cutset === "") {
  �;			$s = -1; return s;
    		}
  �H		_r = TrimRightFunc(s, makeCutsetFunc(cutset)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimRight }; } $f.$24r = $24r; $f._r = _r; $f.cutset = cutset; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimRight = TrimRight;
	TrimRightstrings.TrimRightstrings.TrimRightFuncstrings.makeCutsetFunc strings.TrimSpacestrings	TrimSpace 	TrimSpace�	"	TrimSpace = function(s) {
		var $24r, $24r$1, _r, _r$1, c, c$1, s, start, stop, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; c = $f.c; c$1 = $f.c$1; s = $f.s; start = $f.start; stop = $f.stop; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �Z		start = 0;
  �f		/* while (true) { */ case 1:
			/* if (!(start < s.length)) { break; } */ if(!(start < s.length)) { $s = 2; continue; }
  Ɉ			c = s.charCodeAt(start);
  ɘ			/* */ if (c >= 128) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (c >= 128) { */ case 3:
  �$				_r = TrimFunc($substring(s, start), unicode.IsSpace); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
    			if (((c < 0 || c >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[c]) === 0) {
  �q				/* break; */ $s = 2; continue;
    			}
  �|			start = start + (1) >> 0;
    		$s = 1; continue;
		case 2:
  ʽ		stop = s.length;
  ��		/* while (true) { */ case 7:
			/* if (!(stop > start)) { break; } */ if(!(stop > start)) { $s = 8; continue; }
  ��			c$1 = s.charCodeAt((stop - 1 >> 0));
  ��			/* */ if (c$1 >= 128) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (c$1 >= 128) { */ case 9:
  �				_r$1 = TrimFunc($substring(s, start, stop), unicode.IsSpace); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r$1 = _r$1;
				$s = 12; case 12: return $24r$1;
    			/* } */ case 10:
    			if (((c$1 < 0 || c$1 >= asciiSpace.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiSpace[c$1]) === 0) {
  �i				/* break; */ $s = 8; continue;
    			}
  ��			stop = stop - (1) >> 0;
    		$s = 7; continue;
		case 8:
  �		$s = -1; return $substring(s, start, stop);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TrimSpace }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.c = c; $f.c$1 = c$1; $f.s = s; $f.start = start; $f.stop = stop; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TrimSpace = TrimSpace;
	TrimSpacestrings.TrimFuncstrings.TrimSpacestrings.asciiSpaceunicode.IsSpace strings.TrimPrefixstrings
TrimPrefix 
TrimPrefix��	TrimPrefix = function(s, prefix) {
		var prefix, s;
    		if (HasPrefix(s, prefix)) {
  ��			return $substring(s, prefix.length);
    		}
  �
		return s;
    	};
	$pkg.TrimPrefix = TrimPrefix;

TrimPrefixstrings.HasPrefixstrings.TrimPrefix strings.TrimSuffixstrings
TrimSuffix 
TrimSuffix��	TrimSuffix = function(s, suffix) {
		var s, suffix;
    		if (HasSuffix(s, suffix)) {
  ��			return $substring(s, 0, (s.length - suffix.length >> 0));
    		}
  ��		return s;
    	};
	$pkg.TrimSuffix = TrimSuffix;

TrimSuffixstrings.HasSuffixstrings.TrimSuffix strings.ReplacestringsReplace Replace�	Replace = function(s, old, new$1, n) {
		var _tuple, b, i, j, m, n, new$1, old, s, start, wid;
    		if (old === new$1 || (n === 0)) {
  ϟ			return s;
    		}
  ��		m = Count(s, old);
    		if (m === 0) {
  �			return s;
    		} else if (n < 0 || m < n) {
  �B			n = m;
    		}
  �s		b = new Builder.ptr(ptrType.nil, sliceType.nil);
  �~		b.Grow(s.length + ($imul(n, ((new$1.length - old.length >> 0)))) >> 0);
  Ц		start = 0;
  ж		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  ��			j = start;
    			if (old.length === 0) {
    				if (i > 0) {
  ��					_tuple = utf8.DecodeRuneInString($substring(s, start));
					wid = _tuple[1];
  �0					j = j + (wid) >> 0;
    				}
    			} else {
  �L				j = j + (Index($substring(s, start), old)) >> 0;
    			}
  �m			b.WriteString($substring(s, start, j));
  щ			b.WriteString(new$1);
  ў			start = j + old.length >> 0;
  ��			i = i + (1) >> 0;
    		}
  ѷ		b.WriteString($substring(s, start));
  ��		return b.String();
    	};
	$pkg.Replace = Replace;
Replacestrings.Builderstrings.Countstrings.Indexstrings.Replacestrings.ptrTypestrings.sliceTypeunicode/utf8.DecodeRuneInString strings.ReplaceAllstrings
ReplaceAll 
ReplaceAll��	ReplaceAll = function(s, old, new$1) {
		var new$1, old, s;
  �		return Replace(s, old, new$1, -1);
    	};
	$pkg.ReplaceAll = ReplaceAll;

ReplaceAllstrings.Replacestrings.ReplaceAll strings.EqualFoldstrings	EqualFold 	EqualFold��	EqualFold = function(s, t) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, r, r$1, r$2, s, size, size$1, sr, t, tr;
  �		while (true) {
			if (!(!(s === "") && !(t === ""))) { break; }
  �K			_tmp = 0;
			_tmp$1 = 0;
			sr = _tmp;
			tr = _tmp$1;
    			if (s.charCodeAt(0) < 128) {
  �v				_tmp$2 = ((s.charCodeAt(0) >> 0));
				_tmp$3 = $substring(s, 1);
				sr = _tmp$2;
				s = _tmp$3;
    			} else {
  Ԟ				_tuple = utf8.DecodeRuneInString(s);
				r = _tuple[0];
				size = _tuple[1];
  ��				_tmp$4 = r;
				_tmp$5 = $substring(s, size);
				sr = _tmp$4;
				s = _tmp$5;
    			}
    			if (t.charCodeAt(0) < 128) {
  ��				_tmp$6 = ((t.charCodeAt(0) >> 0));
				_tmp$7 = $substring(t, 1);
				tr = _tmp$6;
				t = _tmp$7;
    			} else {
  �&				_tuple$1 = utf8.DecodeRuneInString(t);
				r$1 = _tuple$1[0];
				size$1 = _tuple$1[1];
  �O				_tmp$8 = r$1;
				_tmp$9 = $substring(t, size$1);
				tr = _tmp$8;
				t = _tmp$9;
    			}
    			if (tr === sr) {
  ��				continue;
    			}
    			if (tr < sr) {
  �				_tmp$10 = sr;
				_tmp$11 = tr;
				tr = _tmp$10;
				sr = _tmp$11;
    			}
    			if (tr < 128) {
    				if (65 <= sr && sr <= 90 && (tr === ((sr + 97 >> 0) - 65 >> 0))) {
  ֿ					continue;
    				}
  ��				return false;
    			}
  �R			r$2 = unicode.SimpleFold(sr);
  �p			while (true) {
				if (!(!((r$2 === sr)) && r$2 < tr)) { break; }
  ׋				r$2 = unicode.SimpleFold(r$2);
    			}
    			if (r$2 === tr) {
  ׻				continue;
    			}
  ��			return false;
    		}
  ��		return s === t;
    	};
	$pkg.EqualFold = EqualFold;
	EqualFoldstrings.EqualFoldunicode.SimpleFoldunicode/utf8.DecodeRuneInString �0�{"Base":56909,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/strings.go","Base":1,"Size":1773,"Lines":[0,14,27,28,44,45,54,70,71,106,108,109,148,248,250,251,283,358,360,361,397,476,478,479,511,519,537,547,568,607,632,643,669,685,697,701,712,715,716,723,746,763,772,776,782,805,808,818,820,821,857,929,1008,1091,1178,1268,1385,1407,1409,1410,1442,1462,1545,1662,1675,1700,1768,1771],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/builder.go","Base":1775,"Size":3628,"Lines":[0,55,109,159,160,176,177,186,202,212,214,215,287,351,386,408,465,478,480,481,544,607,673,712,730,794,807,823,872,889,919,921,922,954,974,1036,1093,1115,1179,1203,1254,1279,1347,1350,1352,1353,1395,1431,1474,1476,1477,1553,1603,1604,1682,1757,1777,1827,1828,1869,1897,1911,1924,1926,1927,2006,2046,2078,2127,2145,2158,2160,2161,2226,2298,2360,2392,2407,2419,2467,2470,2502,2514,2517,2519,2520,2570,2607,2656,2671,2700,2720,2722,2723,2770,2807,2851,2866,2892,2904,2906,2907,2986,3033,3084,3099,3157,3189,3222,3238,3241,3258,3291,3313,3316,3365,3386,3401,3403,3404,3460,3507,3562,3577,3606,3626],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/compare.go","Base":5404,"Size":1081,"Lines":[0,55,109,159,160,176,177,248,311,314,375,438,490,522,597,669,741,821,898,974,1014,1027,1038,1041,1053,1065,1068,1079],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/reader.go","Base":6486,"Size":3965,"Lines":[0,55,109,159,160,176,177,186,196,202,218,220,221,303,386,404,476,497,514,555,605,607,608,672,683,712,741,752,755,790,792,793,855,920,990,1014,1071,1072,1116,1169,1198,1217,1220,1237,1261,1278,1286,1288,1289,1337,1403,1445,1459,1524,1527,1556,1575,1578,1602,1619,1634,1637,1645,1647,1648,1700,1744,1761,1790,1809,1812,1827,1834,1849,1851,1852,1907,1945,1960,2033,2036,2053,2060,2072,2074,2075,2127,2188,2217,2235,2257,2260,2283,2322,2330,2355,2358,2405,2425,2433,2435,2436,2491,2529,2544,2617,2620,2641,2727,2730,2755,2772,2784,2786,2787,2831,2896,2913,2928,2945,2965,2980,3002,3023,3041,3074,3084,3146,3149,3163,3228,3231,3242,3259,3261,3262,3311,3372,3389,3418,3434,3437,3453,3485,3502,3563,3566,3583,3597,3629,3654,3657,3665,3667,3668,3717,3776,3777,3827,3903],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/replace.go","Base":10452,"Size":14788,"Lines":[0,55,109,159,160,176,177,186,192,200,202,203,261,318,341,386,403,420,422,423,501,527,553,608,610,611,680,749,811,854,857,916,963,988,1039,1042,1102,1104,1105,1138,1155,1171,1173,1174,1212,1232,1277,1333,1336,1337,1358,1397,1424,1462,1466,1495,1518,1522,1525,1526,1544,1566,1587,1605,1609,1668,1715,1760,1781,1804,1816,1820,1832,1835,1836,1906,1964,2010,2054,2074,2093,2144,2176,2237,2272,2323,2379,2383,2415,2416,2419,2430,2432,2433,2497,2543,2567,2590,2592,2593,2655,2730,2754,2784,2786,2787,2864,2942,2990,2993,3003,3014,3026,3038,3049,3063,3074,3086,3089,3167,3245,3319,3370,3393,3466,3503,3517,3592,3667,3740,3813,3845,3859,3860,3916,3980,4048,4106,4110,4182,4239,4240,4314,4391,4466,4481,4499,4500,4571,4645,4719,4793,4858,4933,4955,4974,4976,4977,5053,5069,5092,5109,5134,5138,5147,5150,5151,5172,5224,5275,5324,5354,5364,5369,5373,5399,5440,5461,5529,5594,5640,5668,5695,5719,5731,5759,5786,5807,5813,5818,5846,5890,5938,5978,5995,6011,6053,6064,6126,6148,6174,6194,6199,6226,6243,6282,6286,6314,6347,6372,6397,6427,6431,6475,6485,6502,6527,6562,6565,6567,6568,6667,6740,6766,6785,6802,6810,6829,6901,6933,6953,6967,6983,6987,6988,7003,7012,7016,7041,7069,7103,7113,7118,7146,7159,7166,7227,7252,7280,7300,7311,7320,7324,7327,7335,7337,7338,7389,7449,7479,7494,7568,7593,7608,7677,7696,7698,7699,7760,7787,7844,7883,7902,7936,7961,7965,7968,7969,8000,8024,8027,8028,8044,8075,8089,8125,8136,8160,8171,8175,8178,8238,8285,8286,8325,8380,8383,8393,8395,8396,8426,8427,8479,8538,8561,8581,8583,8584,8664,8729,8752,8772,8774,8775,8802,8815,8817,8818,8877,8906,8908,8909,8961,8992,9002,9025,9028,9039,9041,9042,9095,9138,9162,9182,9184,9185,9267,9293,9311,9336,9364,9417,9460,9493,9552,9560,9573,9578,9582,9583,9656,9712,9752,9765,9804,9815,9834,9845,9850,9883,9894,9913,9924,9929,9944,9956,9968,9972,9978,9981,10002,10039,10049,10052,10060,10062,10063,10140,10207,10242,10264,10336,10350,10352,10353,10437,10516,10518,10519,10577,10593,10617,10624,10656,10675,10684,10688,10705,10742,10774,10811,10814,10829,10840,10843,10872,10892,10894,10895,10982,11008,11023,11030,11062,11081,11090,11094,11137,11147,11165,11175,11179,11215,11225,11243,11253,11257,11294,11297,11330,11339,11347,11349,11350,11419,11463,11524,11552,11553,11603,11639,11670,11682,11699,11718,11738,11743,11760,11764,11767,11784,11795,11798,11818,11820,11821,11900,11978,11999,12022,12041,12044,12074,12075,12093,12117,12133,12167,12184,12188,12222,12232,12250,12267,12271,12274,12289,12291,12292,12361,12435,12468,12539,12604,12630,12711,12791,12859,12879,12881,12882,12963,13026,13103,13158,13240,13305,13382,13404,13405,13461,13480,13501,13532,13577,13611,13644,13726,13777,13799,13804,13805,13809,13819,13851,13864,13897,13936,13978,14000,14005,14009,14012,14030,14041,14044,14074,14082,14113,14125,14157,14198,14209,14223,14230,14234,14237,14257,14259,14260,14345,14371,14382,14413,14425,14457,14469,14473,14490,14530,14541,14560,14578,14583,14587,14602,14642,14652,14670,14687,14691,14694,14715,14728,14765,14775,14778,14786],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/search.go","Base":25241,"Size":4291,"Lines":[0,55,109,159,160,176,177,254,304,373,451,486,513,578,594,595,669,743,779,783,855,928,973,995,996,1072,1144,1186,1190,1262,1336,1406,1479,1544,1579,1583,1658,1726,1800,1866,1934,2004,2075,2148,2205,2227,2229,2230,2284,2305,2332,2377,2380,2440,2466,2467,2498,2558,2590,2624,2627,2700,2775,2816,2845,2884,2887,2888,2917,2991,3004,3024,3054,3095,3117,3121,3180,3226,3229,3304,3333,3393,3448,3507,3566,3570,3573,3574,3584,3586,3587,3635,3674,3712,3721,3725,3728,3736,3738,3739,3816,3860,3907,3932,3953,4027,4053,4095,4102,4109,4113,4126,4151,4155,4211,4214,4225,4227,4228,4253,4265,4276,4279,4289],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/strings/strings.go","Base":29533,"Size":27375,"Lines":[0,55,109,159,160,244,247,330,346,347,356,376,387,403,405,406,457,538,601,642,674,695,703,706,730,758,799,817,832,860,893,897,900,912,925,928,938,940,941,1013,1104,1139,1156,1179,1218,1221,1244,1287,1290,1298,1305,1329,1344,1356,1360,1366,1390,1393,1395,1396,1444,1483,1513,1515,1516,1594,1635,1667,1669,1670,1740,1783,1812,1814,1815,1920,1959,1977,1987,2001,2017,2031,2068,2087,2106,2118,2122,2134,2152,2164,2167,2216,2259,2279,2293,2332,2371,2374,2414,2428,2431,2465,2488,2508,2536,2577,2589,2593,2596,2607,2609,2610,2706,2745,2783,2785,2786,2865,2906,2970,3002,3041,3051,3086,3117,3144,3168,3196,3209,3214,3218,3230,3256,3268,3278,3307,3310,3312,3313,3391,3470,3507,3525,3555,3567,3570,3592,3622,3644,3670,3692,3696,3721,3724,3741,3792,3825,3852,3866,3872,3877,3890,3894,3897,3920,3952,3964,3968,3971,3982,3984,3985,4060,4131,4148,4189,4207,4237,4249,4252,4270,4289,4316,4339,4343,4376,4388,4392,4404,4407,4424,4475,4513,4540,4554,4560,4565,4578,4582,4585,4607,4630,4657,4680,4684,4712,4761,4774,4790,4803,4808,4812,4824,4827,4854,4902,4914,4946,4958,4962,4965,4976,4978,4979,5078,5121,5157,5174,5186,5190,5193,5204,5206,5207,5260,5312,5368,5381,5394,5397,5413,5436,5439,5451,5475,5478,5479,5503,5508,5516,5529,5550,5563,5572,5576,5599,5620,5626,5629,5639,5655,5657,5658,5733,5777,5780,5840,5924,5973,6000,6003,6072,6120,6197,6198,6269,6309,6312,6372,6456,6505,6532,6535,6604,6657,6707,6745,6747,6748,6826,6870,6873,6940,6986,6989,7059,7111,7114,7164,7234,7235,7309,7349,7352,7422,7470,7473,7541,7605,7608,7663,7705,7744,7746,7747,7828,7829,7919,8008,8055,8088,8116,8192,8200,8215,8282,8303,8334,8346,8361,8393,8420,8441,8444,8445,8476,8527,8567,8570,8590,8614,8623,8640,8648,8691,8734,8740,8743,8759,8777,8806,8813,8825,8829,8855,8862,8868,8904,8948,8955,8959,8976,8979,9037,9062,9065,9075,9077,9078,9165,9249,9297,9300,9373,9440,9496,9564,9629,9649,9661,9673,9676,9706,9707,9749,9817,9887,9938,9979,10007,10022,10041,10085,10123,10180,10239,10258,10263,10274,10292,10308,10313,10317,10320,10321,10354,10371,10416,10419,10420,10468,10501,10531,10563,10566,10567,10577,10579,10580,10677,10743,10790,10811,10820,10832,10841,10859,10862,10896,10931,10952,10955,10956,10971,10982,11007,11038,11059,11078,11081,11100,11102,11103,11163,11203,11263,11265,11266,11324,11364,11430,11432,11433,11504,11596,11644,11697,11760,11826,11887,11888,11948,11978,11993,11994,12017,12035,12072,12084,12088,12089,12105,12132,12177,12206,12219,12224,12235,12262,12266,12267,12298,12321,12335,12353,12357,12358,12376,12384,12387,12388,12422,12469,12480,12483,12484,12507,12525,12526,12540,12558,12639,12687,12713,12738,12750,12780,12799,12804,12808,12811,12812,12831,12833,12834,12909,12912,12952,12997,13039,13056,13068,13071,13072,13121,13169,13186,13223,13239,13281,13323,13372,13375,13376,13397,13412,13423,13441,13460,13482,13511,13522,13563,13572,13576,13579,13598,13600,13601,13675,13707,13741,13772,13784,13810,13829,13838,13842,13890,13893,13894,13944,13961,13973,13977,13993,14010,14042,14055,14084,14103,14108,14126,14130,14150,14153,14185,14187,14188,14262,14294,14328,14359,14371,14397,14416,14425,14429,14477,14480,14481,14531,14548,14560,14564,14580,14597,14629,14642,14671,14690,14695,14713,14717,14737,14740,14772,14774,14775,14852,14881,14946,14947,15037,15090,15152,15178,15180,15181,15271,15324,15386,15412,15414,15415,15505,15573,15635,15661,15663,15664,15756,15815,15864,15879,15880,15903,15930,15942,15946,15947,15990,16006,16043,16067,16080,16089,16093,16096,16097,16131,16178,16189,16192,16193,16263,16290,16302,16327,16334,16353,16371,16383,16387,16430,16446,16453,16470,16489,16520,16525,16537,16541,16559,16589,16600,16603,16604,16623,16625,16626,16694,16764,16796,16854,16870,16881,16910,16926,16955,16971,17000,17016,17033,17049,17053,17067,17070,17112,17160,17175,17178,17246,17273,17275,17276,17358,17397,17400,17499,17529,17571,17643,17674,17687,17700,17722,17748,17761,17791,17796,17808,17820,17825,17830,17832,17833,17898,17948,18004,18033,18047,18059,18062,18076,18078,18079,18146,18196,18253,18286,18324,18367,18378,18388,18394,18397,18412,18414,18415,18476,18539,18591,18636,18638,18639,18698,18747,18797,18827,18829,18830,18884,18941,18995,19029,19031,19032,19085,19141,19154,19216,19239,19260,19272,19276,19279,19290,19292,19293,19354,19410,19423,19489,19516,19565,19577,19598,19610,19614,19617,19628,19630,19631,19707,19780,19849,19923,19999,20076,20100,20101,20175,20209,20266,20301,20317,20343,20363,20367,20397,20400,20417,20419,20420,20469,20513,20557,20559,20560,20613,20665,20694,20725,20729,20732,20783,20812,20864,20868,20871,20934,20936,20937,20998,21059,21096,21126,21137,21140,21184,21186,21187,21248,21300,21303,21350,21391,21421,21432,21435,21483,21485,21486,21550,21602,21605,21652,21694,21724,21735,21738,21787,21789,21790,21853,21913,21947,22012,22024,22057,22073,22099,22155,22212,22259,22263,22289,22298,22302,22305,22306,22367,22383,22413,22430,22456,22507,22511,22537,22546,22550,22553,22554,22616,22681,22705,22727,22729,22730,22798,22858,22901,22928,22953,22956,22966,22968,22969,23038,23096,23139,23166,23198,23201,23211,23213,23214,23273,23326,23388,23454,23478,23540,23589,23616,23647,23650,23651,23687,23720,23751,23779,23787,23790,23791,23825,23840,23880,23892,23918,23931,23952,23966,24015,24028,24033,24044,24074,24078,24106,24127,24150,24153,24179,24198,24200,24201,24255,24308,24370,24436,24460,24505,24538,24540,24541,24609,24674,24705,24740,24766,24808,24826,24854,24883,24894,24935,24958,24962,24990,25019,25030,25071,25094,25098,25099,25153,25154,25170,25186,25198,25202,25203,25247,25262,25281,25285,25312,25338,25387,25438,25451,25456,25472,25476,25477,25547,25587,25617,25643,25672,25676,25691,25703,25707,25722,25725,25726,25761,25776,25778,25779,25881,25916,25934,25944,25958,25969,25983,26016,26035,26054,26066,26070,26082,26100,26112,26139,26193,26232,26273,26277,26295,26313,26322,26344,26357,26371,26390,26464,26514,26547,26562,26577,26583,26598,26603,26646,26659,26664,26675,26682,26768,26803,26847,26863,26881,26887,26901,26906,26910,26922,26925,26942,26959,26967,26988,27000,27013,27031,27063,27077,27091,27096,27110,27114,27156,27168,27172,27178,27188,27220,27260,27306,27320,27334,27339,27355,27359,27362,27373],"Infos":null}]}
 