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
GoLinkname�� Implementation�� 	Reference��   �����%vendor/golang.org/x/text/unicode/bidibidibytescontainer/listfmtlogsortunicode/utf8�i ��Class outincsetd	DirectionOptionsp
Propertiesszrsizeoptionsrunes
directionsstartposoOrderingNumRunsRunioptstypes	pairTypesbracketType
pairValuesprepareInput	ParagraphnerrSetBytesb	SetStringIsLeftToRightRunAtposOrderLinestartendentrylast	IsBracketIsOpeningBracketreverseBracket	directionStringBytesPos13.0.0defaultDirectionbidiALANAppendReverseBBNCSControlDefaultDirectionENESETFSILLRELRILROLeftToRightLookup
LookupRuneLookupStringMixedNSMNeutralONPDFPDIRRLERLIRLOReverseStringRightToLeftSUnicodeVersionWS  C  C  F  + + - C  C  C   T     I  C     F  a d T  C  C  C  C  C   C  C  C  C a  +F  '� )� 6 F  9 )� ; F  ' )� 6 C aC  C aC  
 @� �  T � �a H�  N�  Y�  d��� uT �  b�  a m b�   u b� y � C  C  d  �� )�  b�  {�  ��  ��  ��  H�  @�  ���d�d�����T � � )�  � � � )� �� {� � � � )� ' {� � � � )�     )�  a � )� � �  � )�  �  � )� � � �   �  � T �   )�    � )�    � )�    � )� 9  C  C  C  C  F  '  C a H�  �a  Y ����T � � 9�   � 9�  �  9�  a � 9�  � �C  C �C  	 �a T � T  � ,�����!�% +�=�GR�V�Z�^�b�f�j�n�r�v������������� �d�������+�������������u���������@��� bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  list%	list = $packages["container/list"];
��    		$r = list.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  log	log = $packages["log"];
��    		$r = log.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	Direction��	Direction = $pkg.Direction = $newType(4, $kindInt, "bidi.Direction", true, "vendor/golang.org/x/text/unicode/bidi", true, null);
	Direction/vendor/golang.org/x/text/unicode/bidi.Direction  options�*	options = $pkg.options = $newType(0, $kindStruct, "bidi.options", true, "vendor/golang.org/x/text/unicode/bidi", false, function(defaultDirection_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.defaultDirection = 0;
			return;
		}
		this.defaultDirection = defaultDirection_;
	});
��	options.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "defaultDirection", name: "defaultDirection", embedded: false, exported: false, typ: Direction, tag: ""}]);
options/vendor/golang.org/x/text/unicode/bidi.Direction-vendor/golang.org/x/text/unicode/bidi.options  Optionz	Option = $pkg.Option = $newType(4, $kindFunc, "bidi.Option", true, "vendor/golang.org/x/text/unicode/bidi", true, null);
&	Option.init([ptrType$4], [], false);
Option,vendor/golang.org/x/text/unicode/bidi.Option-vendor/golang.org/x/text/unicode/bidi.options/vendor/golang.org/x/text/unicode/bidi.ptrType$4  	Paragraph�	Paragraph = $pkg.Paragraph = $newType(0, $kindStruct, "bidi.Paragraph", true, "vendor/golang.org/x/text/unicode/bidi", true, function(p_, o_, opts_, types_, pairTypes_, pairValues_, runes_, options_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = sliceType$3.nil;
			this.o = new Ordering.ptr(sliceType$4.nil, sliceType$5.nil, sliceType$6.nil);
			this.opts = sliceType$11.nil;
			this.types = sliceType$2.nil;
			this.pairTypes = sliceType$1.nil;
			this.pairValues = sliceType.nil;
			this.runes = sliceType.nil;
			this.options = new options.ptr(0);
			return;
		}
		this.p = p_;
		this.o = o_;
		this.opts = opts_;
		this.types = types_;
		this.pairTypes = pairTypes_;
		this.pairValues = pairValues_;
		this.runes = runes_;
		this.options = options_;
	});
�=	ptrType$5.methods = [{prop: "prepareInput", name: "prepareInput", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [$Int, $error], false)}, {prop: "SetBytes", name: "SetBytes", pkg: "", typ: $funcType([sliceType$3, sliceType$11], [$Int, $error], true)}, {prop: "SetString", name: "SetString", pkg: "", typ: $funcType([$String, sliceType$11], [$Int, $error], true)}, {prop: "IsLeftToRight", name: "IsLeftToRight", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Direction", name: "Direction", pkg: "", typ: $funcType([], [Direction], false)}, {prop: "RunAt", name: "RunAt", pkg: "", typ: $funcType([$Int], [Run], false)}, {prop: "Order", name: "Order", pkg: "", typ: $funcType([], [Ordering, $error], false)}, {prop: "Line", name: "Line", pkg: "", typ: $funcType([$Int, $Int], [Ordering, $error], false)}];
�	Paragraph.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "p", name: "p", embedded: false, exported: false, typ: sliceType$3, tag: ""}, {prop: "o", name: "o", embedded: false, exported: false, typ: Ordering, tag: ""}, {prop: "opts", name: "opts", embedded: false, exported: false, typ: sliceType$11, tag: ""}, {prop: "types", name: "types", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "pairTypes", name: "pairTypes", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "pairValues", name: "pairValues", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "runes", name: "runes", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "options", name: "options", embedded: false, exported: false, typ: options, tag: ""}]);
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Direction,vendor/golang.org/x/text/unicode/bidi.Option.vendor/golang.org/x/text/unicode/bidi.Ordering/vendor/golang.org/x/text/unicode/bidi.Paragraph)vendor/golang.org/x/text/unicode/bidi.Run-vendor/golang.org/x/text/unicode/bidi.options/vendor/golang.org/x/text/unicode/bidi.ptrType$5/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$12vendor/golang.org/x/text/unicode/bidi.sliceType$111vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$31vendor/golang.org/x/text/unicode/bidi.sliceType$41vendor/golang.org/x/text/unicode/bidi.sliceType$51vendor/golang.org/x/text/unicode/bidi.sliceType$6  Ordering��	Ordering = $pkg.Ordering = $newType(0, $kindStruct, "bidi.Ordering", true, "vendor/golang.org/x/text/unicode/bidi", true, function(runes_, directions_, startpos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.runes = sliceType$4.nil;
			this.directions = sliceType$5.nil;
			this.startpos = sliceType$6.nil;
			return;
		}
		this.runes = runes_;
		this.directions = directions_;
		this.startpos = startpos_;
	});
�	ptrType$6.methods = [{prop: "Direction", name: "Direction", pkg: "", typ: $funcType([], [Direction], false)}, {prop: "NumRuns", name: "NumRuns", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Run", name: "Run", pkg: "", typ: $funcType([$Int], [Run], false)}];
�b	Ordering.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "runes", name: "runes", embedded: false, exported: false, typ: sliceType$4, tag: ""}, {prop: "directions", name: "directions", embedded: false, exported: false, typ: sliceType$5, tag: ""}, {prop: "startpos", name: "startpos", embedded: false, exported: false, typ: sliceType$6, tag: ""}]);
Ordering/vendor/golang.org/x/text/unicode/bidi.Direction.vendor/golang.org/x/text/unicode/bidi.Ordering)vendor/golang.org/x/text/unicode/bidi.Run/vendor/golang.org/x/text/unicode/bidi.ptrType$61vendor/golang.org/x/text/unicode/bidi.sliceType$41vendor/golang.org/x/text/unicode/bidi.sliceType$51vendor/golang.org/x/text/unicode/bidi.sliceType$6  Run�}	Run = $pkg.Run = $newType(0, $kindStruct, "bidi.Run", true, "vendor/golang.org/x/text/unicode/bidi", true, function(runes_, direction_, startpos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.runes = sliceType.nil;
			this.direction = 0;
			this.startpos = 0;
			return;
		}
		this.runes = runes_;
		this.direction = direction_;
		this.startpos = startpos_;
	});
�b	ptrType$7.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType$3], false)}, {prop: "Direction", name: "Direction", pkg: "", typ: $funcType([], [Direction], false)}, {prop: "Pos", name: "Pos", pkg: "", typ: $funcType([], [$Int, $Int], false)}];
�P	Run.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "runes", name: "runes", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "direction", name: "direction", embedded: false, exported: false, typ: Direction, tag: ""}, {prop: "startpos", name: "startpos", embedded: false, exported: false, typ: $Int, tag: ""}]);
Run/vendor/golang.org/x/text/unicode/bidi.Direction)vendor/golang.org/x/text/unicode/bidi.Run/vendor/golang.org/x/text/unicode/bidi.ptrType$7/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$3  bracketType��	bracketType = $pkg.bracketType = $newType(1, $kindUint8, "bidi.bracketType", true, "vendor/golang.org/x/text/unicode/bidi", false, null);
bracketType1vendor/golang.org/x/text/unicode/bidi.bracketType  bracketPair�D	bracketPair = $pkg.bracketPair = $newType(0, $kindStruct, "bidi.bracketPair", true, "vendor/golang.org/x/text/unicode/bidi", false, function(opener_, closer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.opener = 0;
			this.closer = 0;
			return;
		}
		this.opener = opener_;
		this.closer = closer_;
	});
h	ptrType$8.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
��	bracketPair.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "opener", name: "opener", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "closer", name: "closer", embedded: false, exported: false, typ: $Int, tag: ""}]);
bracketPair1vendor/golang.org/x/text/unicode/bidi.bracketPair/vendor/golang.org/x/text/unicode/bidi.ptrType$8  bracketPairs��	bracketPairs = $pkg.bracketPairs = $newType(12, $kindSlice, "bidi.bracketPairs", true, "vendor/golang.org/x/text/unicode/bidi", false, null);
�	bracketPairs.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Swap", name: "Swap", pkg: "", typ: $funcType([$Int, $Int], [], false)}, {prop: "Less", name: "Less", pkg: "", typ: $funcType([$Int, $Int], [$Bool], false)}];
!	bracketPairs.init(bracketPair);
bracketPairs1vendor/golang.org/x/text/unicode/bidi.bracketPair2vendor/golang.org/x/text/unicode/bidi.bracketPairs  bracketPairer�a	bracketPairer = $pkg.bracketPairer = $newType(0, $kindStruct, "bidi.bracketPairer", true, "vendor/golang.org/x/text/unicode/bidi", false, function(sos_, openers_, pairPositions_, codesIsolatedRun_, indexes_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.sos = 0;
			this.openers = ptrType.nil;
			this.pairPositions = bracketPairs.nil;
			this.codesIsolatedRun = sliceType$2.nil;
			this.indexes = sliceType$6.nil;
			return;
		}
		this.sos = sos_;
		this.openers = openers_;
		this.pairPositions = pairPositions_;
		this.codesIsolatedRun = codesIsolatedRun_;
		this.indexes = indexes_;
	});
��	ptrType$9.methods = [{prop: "matchOpener", name: "matchOpener", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType, $Int, $Int], [$Bool], false)}, {prop: "locateBrackets", name: "locateBrackets", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$1, sliceType], [], false)}, {prop: "getStrongTypeN0", name: "getStrongTypeN0", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$Int], [Class], false)}, {prop: "classifyPairContent", name: "classifyPairContent", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([bracketPair, Class], [Class], false)}, {prop: "classBeforePair", name: "classBeforePair", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([bracketPair], [Class], false)}, {prop: "assignBracketType", name: "assignBracketType", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([bracketPair, Class, sliceType$2], [], false)}, {prop: "setBracketsToType", name: "setBracketsToType", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([bracketPair, Class, sliceType$2], [], false)}, {prop: "resolveBrackets", name: "resolveBrackets", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([Class, sliceType$2], [], false)}];
�2	bracketPairer.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "sos", name: "sos", embedded: false, exported: false, typ: Class, tag: ""}, {prop: "openers", name: "openers", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "pairPositions", name: "pairPositions", embedded: false, exported: false, typ: bracketPairs, tag: ""}, {prop: "codesIsolatedRun", name: "codesIsolatedRun", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "indexes", name: "indexes", embedded: false, exported: false, typ: sliceType$6, tag: ""}]);
bracketPairer
+vendor/golang.org/x/text/unicode/bidi.Class1vendor/golang.org/x/text/unicode/bidi.bracketPair3vendor/golang.org/x/text/unicode/bidi.bracketPairer2vendor/golang.org/x/text/unicode/bidi.bracketPairs-vendor/golang.org/x/text/unicode/bidi.ptrType/vendor/golang.org/x/text/unicode/bidi.ptrType$9/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$11vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$6  levelx	level = $pkg.level = $newType(1, $kindInt8, "bidi.level", true, "vendor/golang.org/x/text/unicode/bidi", false, null);
level+vendor/golang.org/x/text/unicode/bidi.level  	paragraph��	paragraph = $pkg.paragraph = $newType(0, $kindStruct, "bidi.paragraph", true, "vendor/golang.org/x/text/unicode/bidi", false, function(initialTypes_, pairTypes_, pairValues_, embeddingLevel_, resultTypes_, resultLevels_, matchingPDI_, matchingIsolateInitiator_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.initialTypes = sliceType$2.nil;
			this.pairTypes = sliceType$1.nil;
			this.pairValues = sliceType.nil;
			this.embeddingLevel = 0;
			this.resultTypes = sliceType$2.nil;
			this.resultLevels = sliceType$8.nil;
			this.matchingPDI = sliceType$6.nil;
			this.matchingIsolateInitiator = sliceType$6.nil;
			return;
		}
		this.initialTypes = initialTypes_;
		this.pairTypes = pairTypes_;
		this.pairValues = pairValues_;
		this.embeddingLevel = embeddingLevel_;
		this.resultTypes = resultTypes_;
		this.resultLevels = resultLevels_;
		this.matchingPDI = matchingPDI_;
		this.matchingIsolateInitiator = matchingIsolateInitiator_;
	});
�U	ptrType$2.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "run", name: "run", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "determineMatchingIsolates", name: "determineMatchingIsolates", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "determineParagraphEmbeddingLevel", name: "determineParagraphEmbeddingLevel", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$Int, $Int], [level], false)}, {prop: "determineExplicitEmbeddingLevels", name: "determineExplicitEmbeddingLevels", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "isolatingRunSequence", name: "isolatingRunSequence", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$6], [ptrType$3], false)}, {prop: "determineLevelRuns", name: "determineLevelRuns", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [sliceType$9], false)}, {prop: "determineIsolatingRunSequences", name: "determineIsolatingRunSequences", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [sliceType$10], false)}, {prop: "assignLevelsToCharactersRemovedByX9", name: "assignLevelsToCharactersRemovedByX9", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "getLevels", name: "getLevels", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$6], [sliceType$8], false)}, {prop: "getReordering", name: "getReordering", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$6], [sliceType$6], false)}];
��	paragraph.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "initialTypes", name: "initialTypes", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "pairTypes", name: "pairTypes", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "pairValues", name: "pairValues", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "embeddingLevel", name: "embeddingLevel", embedded: false, exported: false, typ: level, tag: ""}, {prop: "resultTypes", name: "resultTypes", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "resultLevels", name: "resultLevels", embedded: false, exported: false, typ: sliceType$8, tag: ""}, {prop: "matchingPDI", name: "matchingPDI", embedded: false, exported: false, typ: sliceType$6, tag: ""}, {prop: "matchingIsolateInitiator", name: "matchingIsolateInitiator", embedded: false, exported: false, typ: sliceType$6, tag: ""}]);
	paragraph+vendor/golang.org/x/text/unicode/bidi.level/vendor/golang.org/x/text/unicode/bidi.paragraph/vendor/golang.org/x/text/unicode/bidi.ptrType$2/vendor/golang.org/x/text/unicode/bidi.ptrType$3/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$12vendor/golang.org/x/text/unicode/bidi.sliceType$101vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$81vendor/golang.org/x/text/unicode/bidi.sliceType$9  directionalStatusStack��	directionalStatusStack = $pkg.directionalStatusStack = $newType(0, $kindStruct, "bidi.directionalStatusStack", true, "vendor/golang.org/x/text/unicode/bidi", false, function(stackCounter_, embeddingLevelStack_, overrideStatusStack_, isolateStatusStack_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.stackCounter = 0;
			this.embeddingLevelStack = arrayType.zero();
			this.overrideStatusStack = arrayType$1.zero();
			this.isolateStatusStack = arrayType$2.zero();
			return;
		}
		this.stackCounter = stackCounter_;
		this.embeddingLevelStack = embeddingLevelStack_;
		this.overrideStatusStack = overrideStatusStack_;
		this.isolateStatusStack = isolateStatusStack_;
	});
��	ptrType$10.methods = [{prop: "empty", name: "empty", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "pop", name: "pop", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "depth", name: "depth", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [$Int], false)}, {prop: "push", name: "push", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([level, Class, $Bool], [], false)}, {prop: "lastEmbeddingLevel", name: "lastEmbeddingLevel", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [level], false)}, {prop: "lastDirectionalOverrideStatus", name: "lastDirectionalOverrideStatus", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [Class], false)}, {prop: "lastDirectionalIsolateStatus", name: "lastDirectionalIsolateStatus", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [$Bool], false)}];
�	directionalStatusStack.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "stackCounter", name: "stackCounter", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "embeddingLevelStack", name: "embeddingLevelStack", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "overrideStatusStack", name: "overrideStatusStack", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "isolateStatusStack", name: "isolateStatusStack", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
directionalStatusStack+vendor/golang.org/x/text/unicode/bidi.Class/vendor/golang.org/x/text/unicode/bidi.arrayType1vendor/golang.org/x/text/unicode/bidi.arrayType$11vendor/golang.org/x/text/unicode/bidi.arrayType$2<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack+vendor/golang.org/x/text/unicode/bidi.level0vendor/golang.org/x/text/unicode/bidi.ptrType$10  isolatingRunSequence��	isolatingRunSequence = $pkg.isolatingRunSequence = $newType(0, $kindStruct, "bidi.isolatingRunSequence", true, "vendor/golang.org/x/text/unicode/bidi", false, function(p_, indexes_, types_, resolvedLevels_, level_, sos_, eos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = ptrType$2.nil;
			this.indexes = sliceType$6.nil;
			this.types = sliceType$2.nil;
			this.resolvedLevels = sliceType$8.nil;
			this.level = 0;
			this.sos = 0;
			this.eos = 0;
			return;
		}
		this.p = p_;
		this.indexes = indexes_;
		this.types = types_;
		this.resolvedLevels = resolvedLevels_;
		this.level = level_;
		this.sos = sos_;
		this.eos = eos_;
	});
��	ptrType$3.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "resolveWeakTypes", name: "resolveWeakTypes", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "resolveNeutralTypes", name: "resolveNeutralTypes", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "resolveImplicitLevels", name: "resolveImplicitLevels", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "applyLevelsAndTypes", name: "applyLevelsAndTypes", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([], [], false)}, {prop: "findRunLimit", name: "findRunLimit", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$Int, sliceType$2], [$Int], true)}, {prop: "assertOnly", name: "assertOnly", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$2], [], true)}];
��	isolatingRunSequence.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "p", name: "p", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "indexes", name: "indexes", embedded: false, exported: false, typ: sliceType$6, tag: ""}, {prop: "types", name: "types", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "resolvedLevels", name: "resolvedLevels", embedded: false, exported: false, typ: sliceType$8, tag: ""}, {prop: "level", name: "level", embedded: false, exported: false, typ: level, tag: ""}, {prop: "sos", name: "sos", embedded: false, exported: false, typ: Class, tag: ""}, {prop: "eos", name: "eos", embedded: false, exported: false, typ: Class, tag: ""}]);
isolatingRunSequence+vendor/golang.org/x/text/unicode/bidi.Class:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence+vendor/golang.org/x/text/unicode/bidi.level/vendor/golang.org/x/text/unicode/bidi.ptrType$2/vendor/golang.org/x/text/unicode/bidi.ptrType$31vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$8  
Properties�4	Properties = $pkg.Properties = $newType(0, $kindStruct, "bidi.Properties", true, "vendor/golang.org/x/text/unicode/bidi", true, function(entry_, last_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.entry = 0;
			this.last = 0;
			return;
		}
		this.entry = entry_;
		this.last = last_;
	});
��	Properties.methods = [{prop: "Class", name: "Class", pkg: "", typ: $funcType([], [Class], false)}, {prop: "IsBracket", name: "IsBracket", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "IsOpeningBracket", name: "IsOpeningBracket", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "reverseBracket", name: "reverseBracket", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$Int32], [$Int32], false)}];
��	Properties.init("vendor/golang.org/x/text/unicode/bidi", [{prop: "entry", name: "entry", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "last", name: "last", embedded: false, exported: false, typ: $Uint8, tag: ""}]);

Properties+vendor/golang.org/x/text/unicode/bidi.Class0vendor/golang.org/x/text/unicode/bidi.Properties  bidiTrie��	bidiTrie = $pkg.bidiTrie = $newType(0, $kindStruct, "bidi.bidiTrie", true, "vendor/golang.org/x/text/unicode/bidi", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	ptrType$11.methods = [{prop: "lookup", name: "lookup", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$3], [$Uint8, $Int], false)}, {prop: "lookupUnsafe", name: "lookupUnsafe", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$3], [$Uint8], false)}, {prop: "lookupString", name: "lookupString", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$String], [$Uint8, $Int], false)}, {prop: "lookupStringUnsafe", name: "lookupStringUnsafe", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$String], [$Uint8], false)}, {prop: "lookupValue", name: "lookupValue", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([$Uint32, $Uint8], [$Uint8], false)}];
	bidiTrie.init("", []);
bidiTrie.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.ptrType$111vendor/golang.org/x/text/unicode/bidi.sliceType$3  Classw	Class = $pkg.Class = $newType(4, $kindUint, "bidi.Class", true, "vendor/golang.org/x/text/unicode/bidi", true, null);
��	Class.methods = [{prop: "in$", name: "in", pkg: "vendor/golang.org/x/text/unicode/bidi", typ: $funcType([sliceType$2], [$Bool], true)}];
Class+vendor/golang.org/x/text/unicode/bidi.Class1vendor/golang.org/x/text/unicode/bidi.sliceType$2  	sliceType!	sliceType = $sliceType($Int32);
	sliceType  sliceType$1(	sliceType$1 = $sliceType(bracketType);
sliceType$11vendor/golang.org/x/text/unicode/bidi.bracketType  sliceType$2"	sliceType$2 = $sliceType(Class);
sliceType$2+vendor/golang.org/x/text/unicode/bidi.Class  sliceType$3#	sliceType$3 = $sliceType($Uint8);
sliceType$3  sliceType$4&	sliceType$4 = $sliceType(sliceType);
sliceType$4/vendor/golang.org/x/text/unicode/bidi.sliceType  sliceType$5&	sliceType$5 = $sliceType(Direction);
sliceType$5/vendor/golang.org/x/text/unicode/bidi.Direction  sliceType$6!	sliceType$6 = $sliceType($Int);
sliceType$6  sliceType$7,	sliceType$7 = $sliceType($emptyInterface);
sliceType$7  ptrType 	ptrType = $ptrType(list.List);
ptrTypecontainer/list.List  	ptrType$1%	ptrType$1 = $ptrType(list.Element);
	ptrType$1container/list.Element  	ptrType$2"	ptrType$2 = $ptrType(paragraph);
	ptrType$2/vendor/golang.org/x/text/unicode/bidi.paragraph  sliceType$8"	sliceType$8 = $sliceType(level);
sliceType$8+vendor/golang.org/x/text/unicode/bidi.level  	arrayType%	arrayType = $arrayType(level, 126);
	arrayType+vendor/golang.org/x/text/unicode/bidi.level  arrayType$1'	arrayType$1 = $arrayType(Class, 126);
arrayType$1+vendor/golang.org/x/text/unicode/bidi.Class  arrayType$2'	arrayType$2 = $arrayType($Bool, 126);
arrayType$2  sliceType$9(	sliceType$9 = $sliceType(sliceType$6);
sliceType$91vendor/golang.org/x/text/unicode/bidi.sliceType$6  	ptrType$3-	ptrType$3 = $ptrType(isolatingRunSequence);
	ptrType$3:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence  sliceType$10'	sliceType$10 = $sliceType(ptrType$3);
sliceType$10/vendor/golang.org/x/text/unicode/bidi.ptrType$3  arrayType$3&	arrayType$3 = $arrayType($Uint8, 4);
arrayType$3  	ptrType$4 	ptrType$4 = $ptrType(options);
	ptrType$4-vendor/golang.org/x/text/unicode/bidi.options  sliceType$11$	sliceType$11 = $sliceType(Option);
sliceType$11,vendor/golang.org/x/text/unicode/bidi.Option  	ptrType$5"	ptrType$5 = $ptrType(Paragraph);
	ptrType$5/vendor/golang.org/x/text/unicode/bidi.Paragraph  	ptrType$6!	ptrType$6 = $ptrType(Ordering);
	ptrType$6.vendor/golang.org/x/text/unicode/bidi.Ordering  	ptrType$7	ptrType$7 = $ptrType(Run);
	ptrType$7)vendor/golang.org/x/text/unicode/bidi.Run  	ptrType$8$	ptrType$8 = $ptrType(bracketPair);
	ptrType$81vendor/golang.org/x/text/unicode/bidi.bracketPair  	ptrType$9&	ptrType$9 = $ptrType(bracketPairer);
	ptrType$93vendor/golang.org/x/text/unicode/bidi.bracketPairer  
ptrType$100	ptrType$10 = $ptrType(directionalStatusStack);

ptrType$10<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack  
ptrType$11"	ptrType$11 = $ptrType(bidiTrie);

ptrType$11.vendor/golang.org/x/text/unicode/bidi.bidiTrie  trietrie  controlByteToClasscontrolByteToClass  xorMasksxorMasks  
bidiValues
bidiValues  	bidiIndex	bidiIndex  controlToClasscontrolToClass    ��		trie = newBidiTrie(0);
1vendor/golang.org/x/text/unicode/bidi.newBidiTrie*vendor/golang.org/x/text/unicode/bidi.trie  >  ��		xorMasks = new sliceType([0, 1, 6, 7, 3, 15, 29, 63]);
xorMasks/vendor/golang.org/x/text/unicode/bidi.sliceType.vendor/golang.org/x/text/unicode/bidi.xorMasks  ���  ��		bidiValues = $toNativeArray($kindUint8, [11, 11, 11, 11, 11, 11, 11, 11, 11, 8, 7, 8, 9, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 7, 7, 7, 8, 9, 10, 10, 4, 4, 4, 10, 10, 58, 42, 10, 3, 6, 3, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 10, 74, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 10, 74, 10, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 7, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 6, 10, 4, 4, 4, 4, 10, 10, 10, 10, 0, 10, 10, 11, 10, 10, 4, 4, 2, 2, 10, 0, 10, 10, 10, 2, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 10, 10, 4, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 12, 1, 12, 12, 1, 12, 12, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 10, 10, 13, 4, 4, 13, 6, 13, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 13, 13, 13, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 5, 10, 12, 12, 12, 12, 12, 12, 13, 13, 12, 12, 10, 12, 12, 12, 12, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 1, 10, 10, 10, 10, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 1, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 12, 12, 12, 1, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 5, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 12, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 12, 12, 0, 0, 12, 12, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 12, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 4, 10, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 12, 12, 12, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 0, 12, 58, 42, 58, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 0, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 122, 106, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 4, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12, 12, 12, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 10, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 0, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 12, 12, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 12, 0, 0, 0, 12, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 11, 11, 11, 0, 1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 7, 14, 14, 14, 14, 14, 6, 4, 4, 4, 4, 4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 154, 138, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 11, 11, 11, 11, 11, 11, 14, 14, 14, 14, 11, 11, 11, 11, 11, 11, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 10, 154, 138, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 10, 154, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 10, 10, 10, 10, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 10, 10, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 10, 0, 10, 0, 10, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 3, 4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 154, 138, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 58, 42, 58, 42, 58, 42, 58, 42, 58, 42, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 154, 138, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 58, 42, 58, 42, 58, 42, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 122, 106, 154, 138, 186, 170, 154, 138, 122, 106, 218, 42, 58, 202, 154, 138, 122, 106, 154, 138, 186, 170, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 58, 42, 58, 42, 58, 42, 58, 42, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 9, 10, 10, 10, 10, 0, 0, 0, 58, 42, 58, 42, 58, 42, 58, 42, 58, 42, 10, 10, 58, 42, 58, 42, 58, 42, 58, 42, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 10, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 10, 10, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 10, 10, 10, 10, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 10, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6, 10, 6, 0, 10, 6, 10, 10, 10, 154, 138, 122, 106, 154, 138, 4, 10, 10, 3, 3, 10, 10, 10, 0, 10, 4, 4, 10, 0, 0, 0, 0, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 11, 0, 10, 10, 4, 4, 4, 10, 10, 58, 42, 10, 3, 6, 3, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 10, 74, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 10, 74, 10, 250, 234, 10, 58, 42, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 10, 10, 10, 4, 4, 0, 10, 10, 10, 10, 10, 10, 10, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 11, 11, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 1, 12, 12, 1, 1, 1, 1, 1, 12, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 1, 1, 1, 1, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10, 10, 10, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 13, 13, 13, 13, 13, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 12, 0, 0, 12, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 0, 0, 0, 12, 0, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 4, 4, 4, 4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 11, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 12, 12, 12, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 12, 12, 12, 12, 12, 12, 12, 0, 12, 12, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 12, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 10, 10, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 10, 10, 10, 10, 10, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11]);

bidiValues0vendor/golang.org/x/text/unicode/bidi.bidiValues  �� ��		bidiIndex = $toNativeArray($kindUint8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 3, 4, 5, 6, 7, 8, 0, 0, 9, 0, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 8, 17, 18, 18, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 28, 30, 31, 32, 33, 34, 35, 36, 26, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 54, 0, 55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 0, 57, 58, 59, 60, 61, 0, 62, 0, 63, 64, 0, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 0, 0, 75, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 86, 86, 86, 88, 89, 90, 86, 91, 92, 93, 94, 86, 86, 86, 86, 86, 86, 95, 86, 86, 96, 86, 97, 0, 0, 0, 0, 86, 86, 98, 99, 86, 86, 86, 86, 86, 100, 101, 86, 0, 0, 0, 102, 0, 103, 0, 104, 105, 106, 107, 108, 86, 86, 86, 109, 110, 0, 111, 112, 0, 0, 0, 113, 114, 115, 116, 117, 0, 118, 0, 119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 121, 0, 0, 0, 0, 122, 123, 124, 125, 126, 0, 127, 0, 128, 129, 0, 130, 131, 132, 133, 134, 135, 136, 137, 138, 0, 139, 0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 142, 14, 14, 14, 14, 14, 14, 143, 14, 14, 144, 145, 146, 14, 147, 148, 149, 0, 150, 0, 0, 0, 0, 151, 86, 152, 153, 0, 0, 0, 154, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 156, 156, 156, 157, 156, 156, 156, 158, 156, 156, 159, 160, 156, 156, 156, 156, 156, 156, 156, 161, 156, 156, 156, 156, 162, 163, 156, 164, 165, 156, 156, 166, 167, 168, 0, 169, 170, 171, 172, 173, 0, 0, 174, 38, 175, 0, 0, 176, 177, 178, 179, 0, 0, 180, 181, 182, 183, 184, 0, 185, 0, 0, 0, 186, 0, 0, 0, 187, 188, 0, 189, 190, 191, 192, 0, 0, 0, 0, 0, 193, 0, 194, 0, 195, 196, 197, 0, 0, 0, 0, 198, 0, 0, 0, 199, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 203, 204, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 207, 0, 86, 208, 0, 0, 86, 209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 211, 212, 213, 214, 0, 0, 0, 0, 0, 0, 0, 0, 215, 216, 217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 0, 0, 0, 201, 0, 0, 0, 0, 0, 0, 219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 156, 156, 156, 220, 156, 221, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 156, 164, 14, 156, 14, 222, 156, 156, 14, 14, 14, 223, 156, 156, 156, 156, 224, 86, 225, 226, 227, 228, 229, 0, 0, 230, 0, 0, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 231, 86, 108, 86, 232, 233, 234, 235, 0, 86, 236, 86, 237, 86, 238, 239, 240, 86, 86, 241, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 11, 0, 0, 0, 0, 12, 0, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 244, 244, 244, 244, 5, 5, 5, 245, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	bidiIndex/vendor/golang.org/x/text/unicode/bidi.bidiIndex  r  ��		controlByteToClass = $toNativeArray($kindUint, [0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 18, 19, 20, 16, 17, 0]);
controlByteToClass8vendor/golang.org/x/text/unicode/bidi.controlByteToClass  �� �|		controlToClass = $makeMap($Int32.keyFor, [{ k: 8237, v: 16 }, { k: 8238, v: 17 }, { k: 8234, v: 18 }, { k: 8235, v: 19 }, { k: 8236, v: 20 }, { k: 8294, v: 21 }, { k: 8295, v: 22 }, { k: 8296, v: 23 }, { k: 8297, v: 24 }]);
controlToClass4vendor/golang.org/x/text/unicode/bidi.controlToClass 6vendor/golang.org/x/text/unicode/bidi.DefaultDirection%vendor/golang.org/x/text/unicode/bidiDefaultDirection DefaultDirection��	DefaultDirection = function(d) {
		var d;
  	}		return (function(opts) {
			var opts;
  	�			opts.defaultDirection = d;
    		});
    	};
	$pkg.DefaultDirection = DefaultDirection;
DefaultDirection6vendor/golang.org/x/text/unicode/bidi.DefaultDirection ?(*vendor/golang.org/x/text/unicode/bidi.Paragraph).prepareInput �3	Paragraph.ptr.prototype.prepareInput = function() {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, bytecount, cls, err, i, n, p, props, r;
		n = 0;
		err = $ifaceNil;
		p = this;
  -		p.runes = bytes.Runes(p.p);
  I		bytecount = 0;
  �		p.pairTypes = sliceType$1.nil;
  �		p.pairValues = sliceType.nil;
  �		p.types = sliceType$2.nil;
  �		_ref = p.runes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_tuple = LookupRune(r);
			props = $clone(_tuple[0], Properties);
			i = _tuple[1];
  �			bytecount = bytecount + (i) >> 0;
  			cls = $clone(props, Properties).Class();
    			if (cls === 7) {
    				_tmp = bytecount;
				_tmp$1 = $ifaceNil;
				n = _tmp;
				err = _tmp$1;
				return [n, err];
    			}
  T			p.types = $append(p.types, cls);
    			if ($clone(props, Properties).IsOpeningBracket()) {
  �				p.pairTypes = $append(p.pairTypes, 1);
  �				p.pairValues = $append(p.pairValues, r);
    			} else if ($clone(props, Properties).IsBracket()) {
  \				p.pairTypes = $append(p.pairTypes, 2);
  �				p.pairValues = $append(p.pairValues, r);
    			} else {
  �				p.pairTypes = $append(p.pairTypes, 0);
  �				p.pairValues = $append(p.pairValues, 0);
    			}
    			_i++;
		}
    		_tmp$2 = bytecount;
		_tmp$3 = $ifaceNil;
		n = _tmp$2;
		err = _tmp$3;
		return [n, err];
    	};
	Paragraph.prototype.prepareInput = function() { return this.$val.prepareInput(); };
	ParagraphprepareInput~	bytes.Runes+vendor/golang.org/x/text/unicode/bidi.Class0vendor/golang.org/x/text/unicode/bidi.LookupRune/vendor/golang.org/x/text/unicode/bidi.Paragraph0vendor/golang.org/x/text/unicode/bidi.Properties1vendor/golang.org/x/text/unicode/bidi.bracketType/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$11vendor/golang.org/x/text/unicode/bidi.sliceType$2 ;(*vendor/golang.org/x/text/unicode/bidi.Paragraph).SetBytes �e	Paragraph.ptr.prototype.SetBytes = function(b, opts) {
		var _tuple, b, err, n, opts, p;
		n = 0;
		err = $ifaceNil;
		p = this;
  �		p.p = b;
  �		p.opts = opts;
    		_tuple = p.prepareInput();
		n = _tuple[0];
		err = _tuple[1];
		return [n, err];
    	};
	Paragraph.prototype.SetBytes = function(b, opts) { return this.$val.SetBytes(b, opts); };
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Paragraph3vendor/golang.org/x/text/unicode/bidi.prepareInput~ <(*vendor/golang.org/x/text/unicode/bidi.Paragraph).SetString ��	Paragraph.ptr.prototype.SetString = function(s, opts) {
		var _tuple, err, n, opts, p, s;
		n = 0;
		err = $ifaceNil;
		p = this;
  		p.p = (new sliceType$3($stringToBytes(s)));
  �		p.opts = opts;
    		_tuple = p.prepareInput();
		n = _tuple[0];
		err = _tuple[1];
		return [n, err];
    	};
	Paragraph.prototype.SetString = function(s, opts) { return this.$val.SetString(s, opts); };
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Paragraph3vendor/golang.org/x/text/unicode/bidi.prepareInput~1vendor/golang.org/x/text/unicode/bidi.sliceType$3 @(*vendor/golang.org/x/text/unicode/bidi.Paragraph).IsLeftToRight ��	Paragraph.ptr.prototype.IsLeftToRight = function() {
		var p;
		p = this;
  �		return p.Direction() === 0;
    	};
	Paragraph.prototype.IsLeftToRight = function() { return this.$val.IsLeftToRight(); };
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Paragraph <(*vendor/golang.org/x/text/unicode/bidi.Paragraph).Direction ��	Paragraph.ptr.prototype.Direction = function() {
		var p;
		p = this;
  �		return p.o.Direction();
    	};
	Paragraph.prototype.Direction = function() { return this.$val.Direction(); };
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Paragraph 8(*vendor/golang.org/x/text/unicode/bidi.Paragraph).RunAt �[	Paragraph.ptr.prototype.RunAt = function(pos) {
		var _i, _ref, c, i, p, pos, r, runNumber;
		p = this;
  �		c = 0;
  �		runNumber = 0;
  �		_ref = p.o.runes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			c = c + (r.$length) >> 0;
    			if (pos < c) {
  �				runNumber = i;
    			}
    			_i++;
		}
  		return p.o.Run(runNumber);
    	};
	Paragraph.prototype.RunAt = function(pos) { return this.$val.RunAt(pos); };
	Paragraph/vendor/golang.org/x/text/unicode/bidi.Paragraph 7vendor/golang.org/x/text/unicode/bidi.calculateOrdering%vendor/golang.org/x/text/unicode/bidicalculateOrdering calculateOrdering��	calculateOrdering = function(levels, runes) {
		var _i, _r, _ref, curDir, i, levels, lvl, o, prevDir, prevI, runes;
  t		curDir = 0;
  �		prevDir = 3;
  �		prevI = 0;
  �		o = new Ordering.ptr(sliceType$4.nil, sliceType$5.nil, sliceType$6.nil);
  �		_ref = levels;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			lvl = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ((_r = lvl % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0) {
  1				curDir = 0;
    			} else {
  T				curDir = 1;
    			}
    			if (!((curDir === prevDir))) {
    				if (i > 0) {
  �					o.runes = $append(o.runes, $subslice(runes, prevI, i));
  �					o.directions = $append(o.directions, prevDir);
  �					o.startpos = $append(o.startpos, prevI);
    				}
  &				prevI = i;
  3				prevDir = curDir;
    			}
    			_i++;
		}
  L		o.runes = $append(o.runes, $subslice(runes, prevI));
  v		o.directions = $append(o.directions, prevDir);
  �		o.startpos = $append(o.startpos, prevI);
  �		return o;
    	};
calculateOrdering/vendor/golang.org/x/text/unicode/bidi.Direction.vendor/golang.org/x/text/unicode/bidi.Ordering7vendor/golang.org/x/text/unicode/bidi.calculateOrdering/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$41vendor/golang.org/x/text/unicode/bidi.sliceType$51vendor/golang.org/x/text/unicode/bidi.sliceType$6 8(*vendor/golang.org/x/text/unicode/bidi.Paragraph).Order ��	Paragraph.ptr.prototype.Order = function() {
		var _i, _r, _r$1, _ref, _tuple, err, fn, levels, lvl, p, para, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tuple = $f._tuple; err = $f.err; fn = $f.fn; levels = $f.levels; lvl = $f.lvl; p = $f.p; para = $f.para; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    		if (p.types.$length === 0) {
  h			$s = -1; return [new Ordering.ptr(sliceType$4.nil, sliceType$5.nil, sliceType$6.nil), $ifaceNil];
    		}
  �		_ref = p.opts;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			fn = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			$r = fn(p.options); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 1; continue;
		case 2:
  �		lvl = -1;
    		if (p.options.defaultDirection === 1) {
  �			lvl = 1;
    		}
  		_r = newParagraph(p.types, p.pairTypes, p.pairValues, lvl); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		para = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  Z			$s = -1; return [new Ordering.ptr(sliceType$4.nil, sliceType$5.nil, sliceType$6.nil), err];
    		}
  v		_r$1 = para.getLevels(new sliceType$6([p.types.$length])); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		levels = _r$1;
  �		Ordering.copy(p.o, calculateOrdering(levels, p.runes));
  �		$s = -1; return [p.o, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Paragraph.ptr.prototype.Order }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tuple = _tuple; $f.err = err; $f.fn = fn; $f.levels = levels; $f.lvl = lvl; $f.p = p; $f.para = para; $f.$s = $s; $f.$r = $r; return $f;
	};
	Paragraph.prototype.Order = function() { return this.$val.Order(); };
	Paragraph.vendor/golang.org/x/text/unicode/bidi.Ordering/vendor/golang.org/x/text/unicode/bidi.Paragraph7vendor/golang.org/x/text/unicode/bidi.calculateOrdering0vendor/golang.org/x/text/unicode/bidi.getLevels~2vendor/golang.org/x/text/unicode/bidi.newParagraph1vendor/golang.org/x/text/unicode/bidi.sliceType$41vendor/golang.org/x/text/unicode/bidi.sliceType$51vendor/golang.org/x/text/unicode/bidi.sliceType$6 7(*vendor/golang.org/x/text/unicode/bidi.Paragraph).Line ��	Paragraph.ptr.prototype.Line = function(start, end) {
		var _r, _r$1, _tuple, end, err, levels, lineTypes, o, p, para, start, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; end = $f.end; err = $f.err; levels = $f.levels; lineTypes = $f.lineTypes; o = $f.o; p = $f.p; para = $f.para; start = $f.start; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		lineTypes = $subslice(p.types, start, end);
  �		_r = newParagraph(lineTypes, $subslice(p.pairTypes, start, end), $subslice(p.pairValues, start, end), -1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		para = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  2			$s = -1; return [new Ordering.ptr(sliceType$4.nil, sliceType$5.nil, sliceType$6.nil), err];
    		}
  M		_r$1 = para.getLevels(new sliceType$6([lineTypes.$length])); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		levels = _r$1;
  ~		o = $clone(calculateOrdering(levels, $subslice(p.runes, start, end)), Ordering);
  �		$s = -1; return [o, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Paragraph.ptr.prototype.Line }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.end = end; $f.err = err; $f.levels = levels; $f.lineTypes = lineTypes; $f.o = o; $f.p = p; $f.para = para; $f.start = start; $f.$s = $s; $f.$r = $r; return $f;
	};
	Paragraph.prototype.Line = function(start, end) { return this.$val.Line(start, end); };
	Paragraph.vendor/golang.org/x/text/unicode/bidi.Ordering/vendor/golang.org/x/text/unicode/bidi.Paragraph7vendor/golang.org/x/text/unicode/bidi.calculateOrdering0vendor/golang.org/x/text/unicode/bidi.getLevels~2vendor/golang.org/x/text/unicode/bidi.newParagraph1vendor/golang.org/x/text/unicode/bidi.sliceType$41vendor/golang.org/x/text/unicode/bidi.sliceType$51vendor/golang.org/x/text/unicode/bidi.sliceType$6 ;(*vendor/golang.org/x/text/unicode/bidi.Ordering).Direction �&	Ordering.ptr.prototype.Direction = function() {
		var o, x;
		o = this;
  �		return (x = o.directions, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
    	};
	Ordering.prototype.Direction = function() { return this.$val.Direction(); };
Ordering.vendor/golang.org/x/text/unicode/bidi.Ordering 9(*vendor/golang.org/x/text/unicode/bidi.Ordering).NumRuns ��	Ordering.ptr.prototype.NumRuns = function() {
		var o;
		o = this;
   		return o.runes.$length;
    	};
	Ordering.prototype.NumRuns = function() { return this.$val.NumRuns(); };
Ordering.vendor/golang.org/x/text/unicode/bidi.Ordering 5(*vendor/golang.org/x/text/unicode/bidi.Ordering).Run �\	Ordering.ptr.prototype.Run = function(i) {
		var i, o, r, x, x$1, x$2;
		o = this;
   �		r = new Run.ptr((x = o.runes, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])), (x$1 = o.directions, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])), (x$2 = o.startpos, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i])));
   �		return r;
    	};
	Ordering.prototype.Run = function(i) { return this.$val.Run(i); };
Ordering.vendor/golang.org/x/text/unicode/bidi.Ordering)vendor/golang.org/x/text/unicode/bidi.Run/vendor/golang.org/x/text/unicode/bidi.sliceType 3(*vendor/golang.org/x/text/unicode/bidi.Run).String ��	Run.ptr.prototype.String = function() {
		var r;
		r = this;
  "�		return ($runesToString(r.runes));
    	};
	Run.prototype.String = function() { return this.$val.String(); };
Run)vendor/golang.org/x/text/unicode/bidi.Run 2(*vendor/golang.org/x/text/unicode/bidi.Run).Bytes ��	Run.ptr.prototype.Bytes = function() {
		var r;
		r = this;
  #F		return (new sliceType$3($stringToBytes(r.String())));
    	};
	Run.prototype.Bytes = function() { return this.$val.Bytes(); };
Run)vendor/golang.org/x/text/unicode/bidi.Run1vendor/golang.org/x/text/unicode/bidi.sliceType$3 6(*vendor/golang.org/x/text/unicode/bidi.Run).Direction ��	Run.ptr.prototype.Direction = function() {
		var r;
		r = this;
  $		return r.direction;
    	};
	Run.prototype.Direction = function() { return this.$val.Direction(); };
Run)vendor/golang.org/x/text/unicode/bidi.Run 0(*vendor/golang.org/x/text/unicode/bidi.Run).Pos �=	Run.ptr.prototype.Pos = function() {
		var _tmp, _tmp$1, end, r, start;
		start = 0;
		end = 0;
		r = this;
    		_tmp = r.startpos;
		_tmp$1 = (r.startpos + r.runes.$length >> 0) - 1 >> 0;
		start = _tmp;
		end = _tmp$1;
		return [start, end];
    	};
	Run.prototype.Pos = function() { return this.$val.Pos(); };
Run)vendor/golang.org/x/text/unicode/bidi.Run 3vendor/golang.org/x/text/unicode/bidi.AppendReverse%vendor/golang.org/x/text/unicode/bidiAppendReverse AppendReverse�		AppendReverse = function(out, in$1) {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, i, i$1, in$1, inRunes, j, out, prop, r, ret;
  & 		ret = $makeSlice(sliceType$3, (in$1.$length + out.$length >> 0));
  &'		$copySlice(ret, out);
  &7		inRunes = bytes.Runes(in$1);
  &T		_ref = inRunes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  &r			_tuple = LookupRune(r);
			prop = $clone(_tuple[0], Properties);
    			if ($clone(prop, Properties).IsBracket()) {
  &�				((i < 0 || i >= inRunes.$length) ? ($throwRuntimeError("index out of range"), undefined) : inRunes.$array[inRunes.$offset + i] = $clone(prop, Properties).reverseBracket(r));
    			}
    			_i++;
		}
  &�		_tmp = 0;
		_tmp$1 = inRunes.$length - 1 >> 0;
		i$1 = _tmp;
		j = _tmp$1;
		while (true) {
			if (!(i$1 < j)) { break; }
  '			_tmp$2 = ((j < 0 || j >= inRunes.$length) ? ($throwRuntimeError("index out of range"), undefined) : inRunes.$array[inRunes.$offset + j]);
			_tmp$3 = ((i$1 < 0 || i$1 >= inRunes.$length) ? ($throwRuntimeError("index out of range"), undefined) : inRunes.$array[inRunes.$offset + i$1]);
			((i$1 < 0 || i$1 >= inRunes.$length) ? ($throwRuntimeError("index out of range"), undefined) : inRunes.$array[inRunes.$offset + i$1] = _tmp$2);
			((j < 0 || j >= inRunes.$length) ? ($throwRuntimeError("index out of range"), undefined) : inRunes.$array[inRunes.$offset + j] = _tmp$3);
  &�			_tmp$4 = i$1 + 1 >> 0;
			_tmp$5 = j - 1 >> 0;
			i$1 = _tmp$4;
			j = _tmp$5;
		}
  'A		$copyString($subslice(ret, out.$length), ($runesToString(inRunes)));
  'i		return ret;
    	};
	$pkg.AppendReverse = AppendReverse;
AppendReversebytes.Runes3vendor/golang.org/x/text/unicode/bidi.AppendReverse0vendor/golang.org/x/text/unicode/bidi.LookupRune0vendor/golang.org/x/text/unicode/bidi.Properties5vendor/golang.org/x/text/unicode/bidi.reverseBracket~1vendor/golang.org/x/text/unicode/bidi.sliceType$3 3vendor/golang.org/x/text/unicode/bidi.ReverseString%vendor/golang.org/x/text/unicode/bidiReverseString ReverseString�'	ReverseString = function(s) {
		var _i, _ref, _tuple, i, input, li, prop, r, ret, s, x, x$1;
  (W		input = (new sliceType($stringToRunes(s)));
  (k		li = input.$length;
  (}		ret = $makeSlice(sliceType, li);
  (�		_ref = input;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			r = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  (�			_tuple = LookupRune(r);
			prop = $clone(_tuple[0], Properties);
    			if ($clone(prop, Properties).IsBracket()) {
  (�				(x = (li - i >> 0) - 1 >> 0, ((x < 0 || x >= ret.$length) ? ($throwRuntimeError("index out of range"), undefined) : ret.$array[ret.$offset + x] = $clone(prop, Properties).reverseBracket(r)));
    			} else {
  )				(x$1 = (li - i >> 0) - 1 >> 0, ((x$1 < 0 || x$1 >= ret.$length) ? ($throwRuntimeError("index out of range"), undefined) : ret.$array[ret.$offset + x$1] = r));
    			}
    			_i++;
		}
  )1		return ($runesToString(ret));
    	};
	$pkg.ReverseString = ReverseString;
ReverseString0vendor/golang.org/x/text/unicode/bidi.LookupRune0vendor/golang.org/x/text/unicode/bidi.Properties3vendor/golang.org/x/text/unicode/bidi.ReverseString5vendor/golang.org/x/text/unicode/bidi.reverseBracket~/vendor/golang.org/x/text/unicode/bidi.sliceType ;(*vendor/golang.org/x/text/unicode/bidi.bracketPair).String �"	bracketPair.ptr.prototype.String = function() {
		var $24r, _r, b, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; b = $f.b; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  0y		_r = fmt.Sprintf("(%v, %v)", new sliceType$7([new $Int(b.opener), new $Int(b.closer)])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: bracketPair.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f.b = b; $f.$s = $s; $f.$r = $r; return $f;
	};
	bracketPair.prototype.String = function() { return this.$val.String(); };
bracketPairfmt.Sprintf1vendor/golang.org/x/text/unicode/bidi.bracketPair1vendor/golang.org/x/text/unicode/bidi.sliceType$7 8(vendor/golang.org/x/text/unicode/bidi.bracketPairs).Len ��	bracketPairs.prototype.Len = function() {
		var b;
		b = this;
  1M		return b.$length;
    	};
	$ptrType(bracketPairs).prototype.Len = function() { return this.$get().Len(); };
bracketPairs2vendor/golang.org/x/text/unicode/bidi.bracketPairs 9(vendor/golang.org/x/text/unicode/bidi.bracketPairs).Swap ��	bracketPairs.prototype.Swap = function(i, j) {
		var _tmp, _tmp$1, b, i, j;
		b = this;
  1�		_tmp = $clone(((j < 0 || j >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + j]), bracketPair);
		_tmp$1 = $clone(((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]), bracketPair);
		bracketPair.copy(((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]), _tmp);
		bracketPair.copy(((j < 0 || j >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + j]), _tmp$1);
    	};
	$ptrType(bracketPairs).prototype.Swap = function(i, j) { return this.$get().Swap(i, j); };
bracketPairs1vendor/golang.org/x/text/unicode/bidi.bracketPair2vendor/golang.org/x/text/unicode/bidi.bracketPairs 9(vendor/golang.org/x/text/unicode/bidi.bracketPairs).Less ��	bracketPairs.prototype.Less = function(i, j) {
		var b, i, j;
		b = this;
  1�		return ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]).opener < ((j < 0 || j >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + j]).opener;
    	};
	$ptrType(bracketPairs).prototype.Less = function(i, j) { return this.$get().Less(i, j); };
bracketPairs2vendor/golang.org/x/text/unicode/bidi.bracketPairs ;vendor/golang.org/x/text/unicode/bidi.resolvePairedBrackets%vendor/golang.org/x/text/unicode/bidiresolvePairedBrackets resolvePairedBrackets�u	resolvePairedBrackets = function(s) {
		var dirEmbed, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dirEmbed = $f.dirEmbed; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  4		p = new bracketPairer.ptr(s.sos, list.New(), bracketPairs.nil, s.types, s.indexes);
  4�		dirEmbed = 0;
    		if (!(((s.level & 1) === 0))) {
  4�			dirEmbed = 1;
    		}
  4�		$r = p.locateBrackets(s.p.pairTypes, s.p.pairValues); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  4�		p.resolveBrackets(dirEmbed, s.p.initialTypes);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: resolvePairedBrackets }; } $f.dirEmbed = dirEmbed; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
resolvePairedBrackets
container/list.Listcontainer/list.New3vendor/golang.org/x/text/unicode/bidi.bracketPairer2vendor/golang.org/x/text/unicode/bidi.bracketPairs5vendor/golang.org/x/text/unicode/bidi.locateBrackets~-vendor/golang.org/x/text/unicode/bidi.ptrType6vendor/golang.org/x/text/unicode/bidi.resolveBrackets~;vendor/golang.org/x/text/unicode/bidi.resolvePairedBrackets1vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$6 B(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).matchOpener ��	bracketPairer.ptr.prototype.matchOpener = function(pairValues, opener, closer) {
		var closer, opener, p, pairValues, x, x$1, x$2, x$3;
		p = this;
  ;�		return (x = (x$1 = p.indexes, ((opener < 0 || opener >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + opener])), ((x < 0 || x >= pairValues.$length) ? ($throwRuntimeError("index out of range"), undefined) : pairValues.$array[pairValues.$offset + x])) === (x$2 = (x$3 = p.indexes, ((closer < 0 || closer >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + closer])), ((x$2 < 0 || x$2 >= pairValues.$length) ? ($throwRuntimeError("index out of range"), undefined) : pairValues.$array[pairValues.$offset + x$2]));
    	};
	bracketPairer.prototype.matchOpener = function(pairValues, opener, closer) { return this.$val.matchOpener(pairValues, opener, closer); };
bracketPairermatchOpener~3vendor/golang.org/x/text/unicode/bidi.bracketPairer E(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).locateBrackets �:	bracketPairer.ptr.prototype.locateBrackets = function(pairTypes, pairValues) {
		var _1, _i, _ref, count, elem, i, index, opener, p, pairTypes, pairValues, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _ref = $f._ref; count = $f.count; elem = $f.elem; i = $f.i; index = $f.index; opener = $f.opener; p = $f.p; pairTypes = $f.pairTypes; pairValues = $f.pairValues; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  >		_ref = p.indexes;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			index = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ((((index < 0 || index >= pairTypes.$length) ? ($throwRuntimeError("index out of range"), undefined) : pairTypes.$array[pairTypes.$offset + index]) === 0) || !(((x = p.codesIsolatedRun, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])) === 10))) {
  >�				_i++;
				/* continue; */ $s = 1; continue;
    			}
    				_1 = ((index < 0 || index >= pairTypes.$length) ? ($throwRuntimeError("index out of range"), undefined) : pairTypes.$array[pairTypes.$offset + index]);
  >�				/* */ if (_1 === (1)) { $s = 4; continue; }
				/* */ if (_1 === (2)) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (_1 === (1)) { */ case 4:
    					if (p.openers.Len() === 63) {
  ?W						p.openers.Init();
  ?l						$s = -1; return;
    					}
  ?�					p.openers.PushFront(new $Int(i));
    					$s = 6; continue;
    				/* } else if (_1 === (2)) { */ case 5:
  ?�					count = 0;
  @					elem = p.openers.Front();
					while (true) {
						if (!(!(elem === ptrType$1.nil))) { break; }
  @I						count = count + (1) >> 0;
  @U						opener = $assertType(elem.Value, $Int);
    						if (p.matchOpener(pairValues, opener, i)) {
  @�							p.pairPositions = $append(p.pairPositions, new bracketPair.ptr(opener, i));
  A_							while (true) {
								if (!(count > 0)) { break; }
  A�								p.openers.Remove(p.openers.Front());
  Ap								count = count - (1) >> 0;
    							}
  A�							break;
    						}
  @0						elem = elem.Next();
					}
  A�					$r = sort.Sort(p.pairPositions); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 6:
    			case 3:
    			_i++;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: bracketPairer.ptr.prototype.locateBrackets }; } $f._1 = _1; $f._i = _i; $f._ref = _ref; $f.count = count; $f.elem = elem; $f.i = i; $f.index = index; $f.opener = opener; $f.p = p; $f.pairTypes = pairTypes; $f.pairValues = pairValues; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	bracketPairer.prototype.locateBrackets = function(pairTypes, pairValues) { return this.$val.locateBrackets(pairTypes, pairValues); };
bracketPairerlocateBrackets~container/list.Element	sort.Sort1vendor/golang.org/x/text/unicode/bidi.bracketPair3vendor/golang.org/x/text/unicode/bidi.bracketPairer2vendor/golang.org/x/text/unicode/bidi.matchOpener~/vendor/golang.org/x/text/unicode/bidi.ptrType$1 F(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).getStrongTypeN0 �3	bracketPairer.ptr.prototype.getStrongTypeN0 = function(index) {
		var _1, index, p, x;
		p = this;
    		_1 = (x = p.codesIsolatedRun, ((index < 0 || index >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + index]));
    		if ((_1 === (2)) || (_1 === (5)) || (_1 === (13)) || (_1 === (1))) {
  J�			return 1;
    		} else if (_1 === (0)) {
  J�			return 0;
    		} else {
  J�			return 10;
    		}
    	};
	bracketPairer.prototype.getStrongTypeN0 = function(index) { return this.$val.getStrongTypeN0(index); };
bracketPairergetStrongTypeN0~3vendor/golang.org/x/text/unicode/bidi.bracketPairer J(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).classifyPairContent ��	bracketPairer.ptr.prototype.classifyPairContent = function(loc, dirEmbed) {
		var dir, dirEmbed, dirOpposite, i, loc, p;
		p = this;
  L�		dirOpposite = 10;
  L�		i = loc.opener + 1 >> 0;
		while (true) {
			if (!(i < loc.closer)) { break; }
  L�			dir = p.getStrongTypeN0(i);
    			if (dir === 10) {
  L�				i = i + (1) >> 0;
    				continue;
    			}
    			if (dir === dirEmbed) {
  MD				return dir;
    			}
  M�			dirOpposite = dir;
  L�			i = i + (1) >> 0;
    		}
  M�		return dirOpposite;
    	};
	bracketPairer.prototype.classifyPairContent = function(loc, dirEmbed) { return this.$val.classifyPairContent(loc, dirEmbed); };
bracketPairerclassifyPairContent~3vendor/golang.org/x/text/unicode/bidi.bracketPairer6vendor/golang.org/x/text/unicode/bidi.getStrongTypeN0~ F(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).classBeforePair ��	bracketPairer.ptr.prototype.classBeforePair = function(loc) {
		var dir, i, loc, p;
		p = this;
  N�		i = loc.opener - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
  N�			dir = p.getStrongTypeN0(i);
    			if (!((dir === 10))) {
  O				return dir;
    			}
  N�			i = i - (1) >> 0;
    		}
  OM		return p.sos;
    	};
	bracketPairer.prototype.classBeforePair = function(loc) { return this.$val.classBeforePair(loc); };
bracketPairerclassBeforePair~3vendor/golang.org/x/text/unicode/bidi.bracketPairer6vendor/golang.org/x/text/unicode/bidi.getStrongTypeN0~ H(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).assignBracketType ��	bracketPairer.ptr.prototype.assignBracketType = function(loc, dirEmbed, initialTypes) {
		var dirEmbed, dirPair, initialTypes, loc, p;
		p = this;
  P/		dirPair = p.classifyPairContent($clone(loc, bracketPair), dirEmbed);
    		if (dirPair === 10) {
  Q-			return;
    		}
    		if (!((dirPair === dirEmbed))) {
  Q�			dirPair = p.classBeforePair($clone(loc, bracketPair));
    			if ((dirPair === dirEmbed) || (dirPair === 10)) {
  RA				dirPair = dirEmbed;
    			}
    		}
  S		p.setBracketsToType($clone(loc, bracketPair), dirPair, initialTypes);
    	};
	bracketPairer.prototype.assignBracketType = function(loc, dirEmbed, initialTypes) { return this.$val.assignBracketType(loc, dirEmbed, initialTypes); };
bracketPairerassignBracketType~1vendor/golang.org/x/text/unicode/bidi.bracketPair3vendor/golang.org/x/text/unicode/bidi.bracketPairer6vendor/golang.org/x/text/unicode/bidi.classBeforePair~:vendor/golang.org/x/text/unicode/bidi.classifyPairContent~8vendor/golang.org/x/text/unicode/bidi.setBracketsToType~ H(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).setBracketsToType ��	bracketPairer.ptr.prototype.setBracketsToType = function(loc, dirPair, initialTypes) {
		var dirPair, i, i$1, index, index$1, initialTypes, loc, p, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		p = this;
  S�		(x = p.codesIsolatedRun, x$1 = loc.opener, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1] = dirPair));
  S�		(x$2 = p.codesIsolatedRun, x$3 = loc.closer, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3] = dirPair));
  T		i = loc.opener + 1 >> 0;
		while (true) {
			if (!(i < loc.closer)) { break; }
  T3			index = (x$4 = p.indexes, ((i < 0 || i >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i]));
    			if (!((((index < 0 || index >= initialTypes.$length) ? ($throwRuntimeError("index out of range"), undefined) : initialTypes.$array[initialTypes.$offset + index]) === 12))) {
  Tn				break;
    			}
  Tz			(x$5 = p.codesIsolatedRun, ((i < 0 || i >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + i] = dirPair));
  T+			i = i + (1) >> 0;
    		}
  T�		i$1 = loc.closer + 1 >> 0;
		while (true) {
			if (!(i$1 < p.indexes.$length)) { break; }
  T�			index$1 = (x$6 = p.indexes, ((i$1 < 0 || i$1 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + i$1]));
    			if (!((((index$1 < 0 || index$1 >= initialTypes.$length) ? ($throwRuntimeError("index out of range"), undefined) : initialTypes.$array[initialTypes.$offset + index$1]) === 12))) {
  U				break;
    			}
  U			(x$7 = p.codesIsolatedRun, ((i$1 < 0 || i$1 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i$1] = dirPair));
  T�			i$1 = i$1 + (1) >> 0;
    		}
    	};
	bracketPairer.prototype.setBracketsToType = function(loc, dirPair, initialTypes) { return this.$val.setBracketsToType(loc, dirPair, initialTypes); };
bracketPairersetBracketsToType~3vendor/golang.org/x/text/unicode/bidi.bracketPairer F(*vendor/golang.org/x/text/unicode/bidi.bracketPairer).resolveBrackets �~	bracketPairer.ptr.prototype.resolveBrackets = function(dirEmbed, initialTypes) {
		var _i, _ref, dirEmbed, initialTypes, loc, p;
		p = this;
  U�		_ref = p.pairPositions;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			loc = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), bracketPair);
  U�			p.assignBracketType($clone(loc, bracketPair), dirEmbed, initialTypes);
    			_i++;
		}
    	};
	bracketPairer.prototype.resolveBrackets = function(dirEmbed, initialTypes) { return this.$val.resolveBrackets(dirEmbed, initialTypes); };
bracketPairerresolveBrackets~8vendor/golang.org/x/text/unicode/bidi.assignBracketType~1vendor/golang.org/x/text/unicode/bidi.bracketPair3vendor/golang.org/x/text/unicode/bidi.bracketPairer 0(vendor/golang.org/x/text/unicode/bidi.Class).in ��	Class.prototype.in$ = function(set) {
		var _i, _ref, c, s, set;
		c = this.$val;
  `		_ref = set;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (c === s) {
  `1				return true;
    			}
    			_i++;
		}
  `E		return false;
    	};
	$ptrType(Class).prototype.in$ = function(set) { return new Class(this.$get()).in$(set); };
Classin~+vendor/golang.org/x/text/unicode/bidi.Class 2vendor/golang.org/x/text/unicode/bidi.newParagraph%vendor/golang.org/x/text/unicode/bidinewParagraph newParagraph��	newParagraph = function(types, pairTypes, pairValues, levels) {
		var _r, _r$1, _r$2, _r$3, err, levels, p, pairTypes, pairValues, types, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; err = $f.err; levels = $f.levels; p = $f.p; pairTypes = $f.pairTypes; pairValues = $f.pairValues; types = $f.types; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  f�		err = $ifaceNil;
  f�		_r = validateTypes(types); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  f�			$s = -1; return [ptrType$2.nil, err];
    		}
  f�		_r$1 = validatePbTypes(pairTypes); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  g				$s = -1; return [ptrType$2.nil, err];
    		}
  g 		_r$2 = validatePbValues(pairValues, pairTypes); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		err = _r$2;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  g^			$s = -1; return [ptrType$2.nil, err];
    		}
  gu		_r$3 = validateParagraphEmbeddingLevel(levels); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		err = _r$3;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  g�			$s = -1; return [ptrType$2.nil, err];
    		}
  g�		p = new paragraph.ptr($appendSlice((sliceType$2.nil), types), pairTypes, pairValues, levels, $appendSlice((sliceType$2.nil), types), sliceType$8.nil, sliceType$6.nil, sliceType$6.nil);
  h�		$r = p.run(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  h�		$s = -1; return [p, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newParagraph }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.err = err; $f.levels = levels; $f.p = p; $f.pairTypes = pairTypes; $f.pairValues = pairValues; $f.types = types; $f.$s = $s; $f.$r = $r; return $f;
	};
newParagraph+vendor/golang.org/x/text/unicode/bidi.level2vendor/golang.org/x/text/unicode/bidi.newParagraph/vendor/golang.org/x/text/unicode/bidi.paragraph/vendor/golang.org/x/text/unicode/bidi.ptrType$2*vendor/golang.org/x/text/unicode/bidi.run~/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$11vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$8Evendor/golang.org/x/text/unicode/bidi.validateParagraphEmbeddingLevel5vendor/golang.org/x/text/unicode/bidi.validatePbTypes6vendor/golang.org/x/text/unicode/bidi.validatePbValues3vendor/golang.org/x/text/unicode/bidi.validateTypes 6(*vendor/golang.org/x/text/unicode/bidi.paragraph).Len ��	paragraph.ptr.prototype.Len = function() {
		var p;
		p = this;
  h�		return p.initialTypes.$length;
    	};
	paragraph.prototype.Len = function() { return this.$val.Len(); };
	paragraph/vendor/golang.org/x/text/unicode/bidi.paragraph 6(*vendor/golang.org/x/text/unicode/bidi.paragraph).run �	
	paragraph.ptr.prototype.run = function() {
		var _i, _r, _ref, p, seq, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; p = $f.p; seq = $f.seq; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  i�		p.determineMatchingIsolates();
  jk		/* */ if (p.embeddingLevel === -1) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.embeddingLevel === -1) { */ case 1:
  j�			_r = p.determineParagraphEmbeddingLevel(0, p.Len()); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			p.embeddingLevel = _r;
    		/* } */ case 2:
  k		p.resultLevels = $makeSlice(sliceType$8, p.Len());
  k?		setLevels(p.resultLevels, p.embeddingLevel);
  k�		$r = p.determineExplicitEmbeddingLevels(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  m		_ref = p.determineIsolatingRunSequences();
		_i = 0;
		/* while (true) { */ case 5:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 6; continue; }
			seq = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  m�			$r = seq.resolveWeakTypes(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  m�			$r = resolvePairedBrackets(seq); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  n			$r = seq.resolveNeutralTypes(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  nz			$r = seq.resolveImplicitLevels(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  n�			seq.applyLevelsAndTypes();
    			_i++;
		$s = 5; continue;
		case 6:
  o�		p.assignLevelsToCharactersRemovedByX9();
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: paragraph.ptr.prototype.run }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.p = p; $f.seq = seq; $f.$s = $s; $f.$r = $r; return $f;
	};
	paragraph.prototype.run = function() { return this.$val.run(); };
	paragraphrun~:vendor/golang.org/x/text/unicode/bidi.applyLevelsAndTypes~Jvendor/golang.org/x/text/unicode/bidi.assignLevelsToCharactersRemovedByX9~Gvendor/golang.org/x/text/unicode/bidi.determineExplicitEmbeddingLevels~Evendor/golang.org/x/text/unicode/bidi.determineIsolatingRunSequences~@vendor/golang.org/x/text/unicode/bidi.determineMatchingIsolates~Gvendor/golang.org/x/text/unicode/bidi.determineParagraphEmbeddingLevel~/vendor/golang.org/x/text/unicode/bidi.paragraph<vendor/golang.org/x/text/unicode/bidi.resolveImplicitLevels~:vendor/golang.org/x/text/unicode/bidi.resolveNeutralTypes~;vendor/golang.org/x/text/unicode/bidi.resolvePairedBrackets7vendor/golang.org/x/text/unicode/bidi.resolveWeakTypes~/vendor/golang.org/x/text/unicode/bidi.setLevels1vendor/golang.org/x/text/unicode/bidi.sliceType$8 L(*vendor/golang.org/x/text/unicode/bidi.paragraph).determineMatchingIsolates �	�	paragraph.ptr.prototype.determineMatchingIsolates = function() {
		var _i, _i$1, _ref, _ref$1, depthCounter, i, i$1, j, p, t, u, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		p = this;
  r�		p.matchingPDI = $makeSlice(sliceType$6, p.Len());
  r�		p.matchingIsolateInitiator = $makeSlice(sliceType$6, p.Len());
  r�		_ref = p.matchingIsolateInitiator;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  s'			(x = p.matchingIsolateInitiator, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = -1));
    			_i++;
		}
  sO		_ref$1 = p.matchingPDI;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i$1 = _i$1;
  sp			(x$1 = p.matchingPDI, ((i$1 < 0 || i$1 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i$1] = -1));
  s�			t = (x$2 = p.resultTypes, ((i$1 < 0 || i$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i$1]));
    			if (new Class(t).in$(new sliceType$2([21, 22, 23]))) {
  s�				depthCounter = 1;
  s�				j = i$1 + 1 >> 0;
				while (true) {
					if (!(j < p.Len())) { break; }
  s�					u = (x$3 = p.resultTypes, ((j < 0 || j >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + j]));
    					if (new Class(u).in$(new sliceType$2([21, 22, 23]))) {
  t-						depthCounter = depthCounter + (1) >> 0;
    					} else if (u === 24) {
  t]						depthCounter = depthCounter - (1) >> 0;
    						if (depthCounter === 0) {
  t�							(x$4 = p.matchingPDI, ((i$1 < 0 || i$1 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i$1] = j));
  t�							(x$5 = p.matchingIsolateInitiator, ((j < 0 || j >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + j] = i$1));
  t�							break;
    						}
    					}
  s�					j = j + (1) >> 0;
    				}
    				if ((x$6 = p.matchingPDI, ((i$1 < 0 || i$1 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + i$1])) === -1) {
  u					(x$7 = p.matchingPDI, ((i$1 < 0 || i$1 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i$1] = p.Len()));
    				}
    			}
    			_i$1++;
		}
    	};
	paragraph.prototype.determineMatchingIsolates = function() { return this.$val.determineMatchingIsolates(); };
	paragraphdetermineMatchingIsolates~+vendor/golang.org/x/text/unicode/bidi.Class)vendor/golang.org/x/text/unicode/bidi.in~/vendor/golang.org/x/text/unicode/bidi.paragraph1vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$6 S(*vendor/golang.org/x/text/unicode/bidi.paragraph).determineParagraphEmbeddingLevel �	t	paragraph.ptr.prototype.determineParagraphEmbeddingLevel = function(start, end) {
		var _1, end, i, p, start, strongType, t, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; end = $f.end; i = $f.i; p = $f.p; start = $f.start; strongType = $f.strongType; t = $f.t; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  v�		strongType = 4294967295;
  v�		i = start;
		/* while (true) { */ case 1:
			/* if (!(i < end)) { break; } */ if(!(i < end)) { $s = 2; continue; }
  v�			t = (x = p.resultTypes, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
  v�			/* */ if (new Class(t).in$(new sliceType$2([0, 13, 1]))) { $s = 3; continue; }
			/* */ if (new Class(t).in$(new sliceType$2([23, 21, 22]))) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (new Class(t).in$(new sliceType$2([0, 13, 1]))) { */ case 3:
  w				strongType = t;
  w(				/* break; */ $s = 2; continue;
    				$s = 5; continue;
    			/* } else if (new Class(t).in$(new sliceType$2([23, 21, 22]))) { */ case 4:
  wS				i = (x$1 = p.matchingPDI, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]));
  w�				/* */ if (i > end) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if (i > end) { */ case 6:
  w�					$r = log.Panic(new sliceType$7([new $String("assert (i <= end)")])); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 7:
    			/* } */ case 5:
  v�			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
    		_1 = strongType;
    		if (_1 === (4294967295)) {
  xL			$s = -1; return 0;
    		} else if (_1 === (0)) {
  x`			$s = -1; return 0;
    		} else {
  x~			$s = -1; return 1;
    		}
    		$s = -1; return 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: paragraph.ptr.prototype.determineParagraphEmbeddingLevel }; } $f._1 = _1; $f.end = end; $f.i = i; $f.p = p; $f.start = start; $f.strongType = strongType; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	paragraph.prototype.determineParagraphEmbeddingLevel = function(start, end) { return this.$val.determineParagraphEmbeddingLevel(start, end); };
	paragraph!determineParagraphEmbeddingLevel~	log.Panic+vendor/golang.org/x/text/unicode/bidi.Class)vendor/golang.org/x/text/unicode/bidi.in~/vendor/golang.org/x/text/unicode/bidi.paragraph1vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$7 E(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).empty ��	directionalStatusStack.ptr.prototype.empty = function() {
		var s;
		s = this;
  y�		s.stackCounter = 0;
    	};
	directionalStatusStack.prototype.empty = function() { return this.$val.empty(); };
directionalStatusStackempty~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack C(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).pop ��	directionalStatusStack.ptr.prototype.pop = function() {
		var s;
		s = this;
  z%		s.stackCounter = s.stackCounter - (1) >> 0;
    	};
	directionalStatusStack.prototype.pop = function() { return this.$val.pop(); };
directionalStatusStackpop~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack E(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).depth ��	directionalStatusStack.ptr.prototype.depth = function() {
		var s;
		s = this;
  zg		return s.stackCounter;
    	};
	directionalStatusStack.prototype.depth = function() { return this.$val.depth(); };
directionalStatusStackdepth~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack D(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).push ��	directionalStatusStack.ptr.prototype.push = function(level$1, overrideStatus, isolateStatus) {
		var isolateStatus, level$1, overrideStatus, s, x, x$1, x$2, x$3, x$4, x$5;
		s = this;
  z�		(x = s.embeddingLevelStack, x$1 = s.stackCounter, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = level$1));
  {		(x$2 = s.overrideStatusStack, x$3 = s.stackCounter, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3] = overrideStatus));
  {G		(x$4 = s.isolateStatusStack, x$5 = s.stackCounter, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5] = isolateStatus));
  {}		s.stackCounter = s.stackCounter + (1) >> 0;
    	};
	directionalStatusStack.prototype.push = function(level$1, overrideStatus, isolateStatus) { return this.$val.push(level$1, overrideStatus, isolateStatus); };
directionalStatusStackpush~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack R(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).lastEmbeddingLevel ��	directionalStatusStack.ptr.prototype.lastEmbeddingLevel = function() {
		var s, x, x$1;
		s = this;
  {�		return (x = s.embeddingLevelStack, x$1 = s.stackCounter - 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
    	};
	directionalStatusStack.prototype.lastEmbeddingLevel = function() { return this.$val.lastEmbeddingLevel(); };
directionalStatusStacklastEmbeddingLevel~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack ](*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).lastDirectionalOverrideStatus ��	directionalStatusStack.ptr.prototype.lastDirectionalOverrideStatus = function() {
		var s, x, x$1;
		s = this;
  |L		return (x = s.overrideStatusStack, x$1 = s.stackCounter - 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
    	};
	directionalStatusStack.prototype.lastDirectionalOverrideStatus = function() { return this.$val.lastDirectionalOverrideStatus(); };
directionalStatusStacklastDirectionalOverrideStatus~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack \(*vendor/golang.org/x/text/unicode/bidi.directionalStatusStack).lastDirectionalIsolateStatus ��	directionalStatusStack.ptr.prototype.lastDirectionalIsolateStatus = function() {
		var s, x, x$1;
		s = this;
  |�		return (x = s.isolateStatusStack, x$1 = s.stackCounter - 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
    	};
	directionalStatusStack.prototype.lastDirectionalIsolateStatus = function() { return this.$val.lastDirectionalIsolateStatus(); };
directionalStatusStacklastDirectionalIsolateStatus~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack S(*vendor/golang.org/x/text/unicode/bidi.paragraph).determineExplicitEmbeddingLevels ��	paragraph.ptr.prototype.determineExplicitEmbeddingLevels = function() {
		var _1, _2, _i, _r, _ref, _tmp, _tmp$1, _tmp$2, i, isIsolate, isRTL, newLevel, overflowEmbeddingCount, overflowIsolateCount, p, stack, t, validIsolateCount, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; i = $f.i; isIsolate = $f.isIsolate; isRTL = $f.isRTL; newLevel = $f.newLevel; overflowEmbeddingCount = $f.overflowEmbeddingCount; overflowIsolateCount = $f.overflowIsolateCount; p = $f.p; stack = $f.stack; t = $f.t; validIsolateCount = $f.validIsolateCount; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  }f		stack = new directionalStatusStack.ptr(0, arrayType.zero(), arrayType$1.zero(), arrayType$2.zero());
  }�		_tmp = 0;
		_tmp$1 = 0;
		_tmp$2 = 0;
		overflowIsolateCount = _tmp;
		overflowEmbeddingCount = _tmp$1;
		validIsolateCount = _tmp$2;
  }�		stack.push(p.embeddingLevel, 10, false);
  ~		_ref = p.resultTypes;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				_1 = t;
  ~_				/* */ if ((_1 === (19)) || (_1 === (18)) || (_1 === (17)) || (_1 === (16)) || (_1 === (22)) || (_1 === (21)) || (_1 === (23))) { $s = 4; continue; }
				/* */ if (_1 === (24)) { $s = 5; continue; }
				/* */ if (_1 === (20)) { $s = 6; continue; }
				/* */ if (_1 === (7)) { $s = 7; continue; }
				/* */ $s = 8; continue;
    				/* if ((_1 === (19)) || (_1 === (18)) || (_1 === (17)) || (_1 === (16)) || (_1 === (22)) || (_1 === (21)) || (_1 === (23))) { */ case 4:
  ~�					isIsolate = new Class(t).in$(new sliceType$2([22, 21, 23]));
  ~�					isRTL = new Class(t).in$(new sliceType$2([19, 17, 22]));
  					/* */ if (t === 23) { $s = 10; continue; }
					/* */ $s = 11; continue;
    					/* if (t === 23) { */ case 10:
  						_r = p.determineParagraphEmbeddingLevel(i + 1 >> 0, (x = p.matchingPDI, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]))); /* */ $s = 12; case 12: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
						isRTL = (_r === 1);
    					/* } */ case 11:
    					if (isIsolate) {
  {						(x$1 = p.resultLevels, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i] = stack.lastEmbeddingLevel()));
    						if (!((stack.lastDirectionalOverrideStatus() === 10))) {
  �							(x$2 = p.resultTypes, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i] = stack.lastDirectionalOverrideStatus()));
    						}
    					}
  �0					newLevel = 0;
    					if (isRTL) {
  �j						newLevel = ((stack.lastEmbeddingLevel() + 1 << 24 >> 24)) | 1;
    					} else {
  ��						newLevel = (((stack.lastEmbeddingLevel() + 2 << 24 >> 24)) & ~1) << 24 >> 24;
    					}
    					if (newLevel <= 125 && (overflowIsolateCount === 0) && (overflowEmbeddingCount === 0)) {
    						if (isIsolate) {
  �l							validIsolateCount = validIsolateCount + (1) >> 0;
    						}
    						_2 = t;
    						if (_2 === (16)) {
  �F							stack.push(newLevel, 0, isIsolate);
    						} else if (_2 === (17)) {
  �|							stack.push(newLevel, 1, isIsolate);
    						} else {
  ��							stack.push(newLevel, 10, isIsolate);
    						}
    						if (!isIsolate) {
  �							(x$3 = p.resultLevels, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i] = newLevel));
    						}
    					} else {
    						if (isIsolate) {
  ��							overflowIsolateCount = overflowIsolateCount + (1) >> 0;
    						} else {
    							if (overflowIsolateCount === 0) {
  �)								overflowEmbeddingCount = overflowEmbeddingCount + (1) >> 0;
    							}
    						}
    					}
    					$s = 9; continue;
    				/* } else if (_1 === (24)) { */ case 5:
    					if (overflowIsolateCount > 0) {
  ��						overflowIsolateCount = overflowIsolateCount - (1) >> 0;
    					} else if (validIsolateCount === 0) {
    					} else {
  ��						overflowEmbeddingCount = 0;
  �						while (true) {
							if (!(!stack.lastDirectionalIsolateStatus())) { break; }
  �C							stack.pop();
    						}
  �Y						stack.pop();
  �i						validIsolateCount = validIsolateCount - (1) >> 0;
    					}
  ��					(x$4 = p.resultLevels, ((i < 0 || i >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i] = stack.lastEmbeddingLevel()));
    					$s = 9; continue;
    				/* } else if (_1 === (20)) { */ case 6:
  ��					(x$5 = p.resultLevels, ((i < 0 || i >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + i] = stack.lastEmbeddingLevel()));
    					if (overflowIsolateCount > 0) {
    					} else if (overflowEmbeddingCount > 0) {
  ��						overflowEmbeddingCount = overflowEmbeddingCount - (1) >> 0;
    					} else if (!stack.lastDirectionalIsolateStatus() && stack.depth() >= 2) {
  ��						stack.pop();
    					}
    					$s = 9; continue;
    				/* } else if (_1 === (7)) { */ case 7:
  ��					stack.empty();
  ��					overflowIsolateCount = 0;
  ��					overflowEmbeddingCount = 0;
  ��					validIsolateCount = 0;
  �					(x$6 = p.resultLevels, ((i < 0 || i >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + i] = p.embeddingLevel));
    					$s = 9; continue;
				/* } else { */ case 8:
  �B					(x$7 = p.resultLevels, ((i < 0 || i >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i] = stack.lastEmbeddingLevel()));
    					if (!((stack.lastDirectionalOverrideStatus() === 10))) {
  ��						(x$8 = p.resultTypes, ((i < 0 || i >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + i] = stack.lastDirectionalOverrideStatus()));
    					}
    				/* } */ case 9:
    			case 3:
    			_i++;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: paragraph.ptr.prototype.determineExplicitEmbeddingLevels }; } $f._1 = _1; $f._2 = _2; $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f.i = i; $f.isIsolate = isIsolate; $f.isRTL = isRTL; $f.newLevel = newLevel; $f.overflowEmbeddingCount = overflowEmbeddingCount; $f.overflowIsolateCount = overflowIsolateCount; $f.p = p; $f.stack = stack; $f.t = t; $f.validIsolateCount = validIsolateCount; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.$s = $s; $f.$r = $r; return $f;
	};
	paragraph.prototype.determineExplicitEmbeddingLevels = function() { return this.$val.determineExplicitEmbeddingLevels(); };
	paragraph!determineExplicitEmbeddingLevels~+vendor/golang.org/x/text/unicode/bidi.Class/vendor/golang.org/x/text/unicode/bidi.arrayType1vendor/golang.org/x/text/unicode/bidi.arrayType$11vendor/golang.org/x/text/unicode/bidi.arrayType$2,vendor/golang.org/x/text/unicode/bidi.depth~Gvendor/golang.org/x/text/unicode/bidi.determineParagraphEmbeddingLevel~<vendor/golang.org/x/text/unicode/bidi.directionalStatusStack,vendor/golang.org/x/text/unicode/bidi.empty~)vendor/golang.org/x/text/unicode/bidi.in~Cvendor/golang.org/x/text/unicode/bidi.lastDirectionalIsolateStatus~Dvendor/golang.org/x/text/unicode/bidi.lastDirectionalOverrideStatus~9vendor/golang.org/x/text/unicode/bidi.lastEmbeddingLevel~+vendor/golang.org/x/text/unicode/bidi.level/vendor/golang.org/x/text/unicode/bidi.paragraph*vendor/golang.org/x/text/unicode/bidi.pop~+vendor/golang.org/x/text/unicode/bidi.push~1vendor/golang.org/x/text/unicode/bidi.sliceType$2 A(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).Len ��	isolatingRunSequence.ptr.prototype.Len = function() {
		var i;
		i = this;
  �7		return i.indexes.$length;
    	};
	isolatingRunSequence.prototype.Len = function() { return this.$val.Len(); };
isolatingRunSequence:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence .vendor/golang.org/x/text/unicode/bidi.maxLevel%vendor/golang.org/x/text/unicode/bidimaxLevel maxLevelr	maxLevel = function(a, b) {
		var a, b;
    		if (a > b) {
  ��			return a;
    		}
  ��		return b;
    	};
maxLevel.vendor/golang.org/x/text/unicode/bidi.maxLevel G(*vendor/golang.org/x/text/unicode/bidi.paragraph).isolatingRunSequence �O	paragraph.ptr.prototype.isolatingRunSequence = function(indexes) {
		var _i, _ref, i, indexes, lastType, length, level$1, limit, p, prevChar, prevLevel, succLevel, types, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		p = this;
  ��		length = indexes.$length;
  ��		types = $makeSlice(sliceType$2, length);
  ��		_ref = indexes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			((i < 0 || i >= types.$length) ? ($throwRuntimeError("index out of range"), undefined) : types.$array[types.$offset + i] = (x$1 = p.resultTypes, ((x < 0 || x >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x])));
    			_i++;
		}
  �		prevChar = (0 >= indexes.$length ? ($throwRuntimeError("index out of range"), undefined) : indexes.$array[indexes.$offset + 0]) - 1 >> 0;
  �5		while (true) {
			if (!(prevChar >= 0 && isRemovedByX9((x$2 = p.initialTypes, ((prevChar < 0 || prevChar >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + prevChar]))))) { break; }
  �v			prevChar = prevChar - (1) >> 0;
    		}
  ��		prevLevel = p.embeddingLevel;
    		if (prevChar >= 0) {
  ��			prevLevel = (x$3 = p.resultLevels, ((prevChar < 0 || prevChar >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + prevChar]));
    		}
  ��		succLevel = 0;
  ��		lastType = (x$4 = length - 1 >> 0, ((x$4 < 0 || x$4 >= types.$length) ? ($throwRuntimeError("index out of range"), undefined) : types.$array[types.$offset + x$4]));
    		if (new Class(lastType).in$(new sliceType$2([21, 22, 23]))) {
  �7			succLevel = p.embeddingLevel;
    		} else {
  ��			limit = (x$5 = length - 1 >> 0, ((x$5 < 0 || x$5 >= indexes.$length) ? ($throwRuntimeError("index out of range"), undefined) : indexes.$array[indexes.$offset + x$5])) + 1 >> 0;
  ��			while (true) {
				if (!(limit < p.Len() && isRemovedByX9((x$6 = p.initialTypes, ((limit < 0 || limit >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + limit]))))) { break; }
  ��				limit = limit + (1) >> 0;
    			}
  �			succLevel = p.embeddingLevel;
    			if (limit < p.Len()) {
  �?				succLevel = (x$7 = p.resultLevels, ((limit < 0 || limit >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + limit]));
    			}
    		}
  �i		level$1 = (x$8 = p.resultLevels, x$9 = (0 >= indexes.$length ? ($throwRuntimeError("index out of range"), undefined) : indexes.$array[indexes.$offset + 0]), ((x$9 < 0 || x$9 >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + x$9]));
  ��		return new isolatingRunSequence.ptr(p, indexes, types, sliceType$8.nil, level$1, typeForLevel(maxLevel(prevLevel, level$1)), typeForLevel(maxLevel(succLevel, level$1)));
    	};
	paragraph.prototype.isolatingRunSequence = function(indexes) { return this.$val.isolatingRunSequence(indexes); };
	paragraphisolatingRunSequence~+vendor/golang.org/x/text/unicode/bidi.Class)vendor/golang.org/x/text/unicode/bidi.in~3vendor/golang.org/x/text/unicode/bidi.isRemovedByX9:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence.vendor/golang.org/x/text/unicode/bidi.maxLevel/vendor/golang.org/x/text/unicode/bidi.paragraph/vendor/golang.org/x/text/unicode/bidi.ptrType$21vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$82vendor/golang.org/x/text/unicode/bidi.typeForLevel N(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).resolveWeakTypes �"	isolatingRunSequence.ptr.prototype.resolveWeakTypes = function() {
		var _i, _i$1, _i$2, _i$3, _i$4, _i$5, _ref, _ref$1, _ref$2, _ref$3, _ref$4, _ref$5, i, i$1, i$2, i$3, i$4, i$5, i$6, j, j$1, precedingCharacterType, prevSepType, prevStrongType, runEnd, runStart, s, succSepType, t, t$1, t$2, t$3, t$4, t$5, t$6, t$7, t$8, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _i$4 = $f._i$4; _i$5 = $f._i$5; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _ref$4 = $f._ref$4; _ref$5 = $f._ref$5; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; i$5 = $f.i$5; i$6 = $f.i$6; j = $f.j; j$1 = $f.j$1; precedingCharacterType = $f.precedingCharacterType; prevSepType = $f.prevSepType; prevStrongType = $f.prevStrongType; runEnd = $f.runEnd; runStart = $f.runStart; s = $f.s; succSepType = $f.succSepType; t = $f.t; t$1 = $f.t$1; t$2 = $f.t$2; t$3 = $f.t$3; t$4 = $f.t$4; t$5 = $f.t$5; t$6 = $f.t$6; t$7 = $f.t$7; t$8 = $f.t$8; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$16 = $f.x$16; x$17 = $f.x$17; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �9		$r = s.assertOnly(new sliceType$2([0, 1, 13, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 21, 22, 23, 24])); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		precedingCharacterType = s.sos;
  ��		_ref = s.types;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (t === 12) {
  � 				(x = s.types, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = precedingCharacterType));
    			} else {
    				if (new Class(t).in$(new sliceType$2([21, 22, 23, 24]))) {
  �T					precedingCharacterType = 10;
    				}
  �x				precedingCharacterType = t;
    			}
    			_i++;
		}
  ��		_ref$1 = s.types;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i$1 = _i$1;
			t$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    			if (t$1 === 2) {
  �				j = i$1 - 1 >> 0;
				while (true) {
					if (!(j >= 0)) { break; }
  �?					t$2 = (x$1 = s.types, ((j < 0 || j >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + j]));
    					if (new Class(t$2).in$(new sliceType$2([0, 1, 13]))) {
    						if (t$2 === 13) {
  �y							(x$2 = s.types, ((i$1 < 0 || i$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i$1] = 5));
    						}
  ��						break;
    					}
  �2					j = j - (1) >> 0;
    				}
    			}
    			_i$1++;
		}
  ��		_ref$2 = s.types;
		_i$2 = 0;
		while (true) {
			if (!(_i$2 < _ref$2.$length)) { break; }
			i$2 = _i$2;
			t$3 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
    			if (t$3 === 13) {
  ��				(x$3 = s.types, ((i$2 < 0 || i$2 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i$2] = 1));
    			}
    			_i$2++;
		}
  ��		i$3 = 1;
		while (true) {
			if (!(i$3 < (s.Len() - 1 >> 0))) { break; }
  ��			t$4 = (x$4 = s.types, ((i$3 < 0 || i$3 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i$3]));
    			if ((t$4 === 3) || (t$4 === 6)) {
  ��				prevSepType = (x$5 = s.types, x$6 = i$3 - 1 >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6]));
  �				succSepType = (x$7 = s.types, x$8 = i$3 + 1 >> 0, ((x$8 < 0 || x$8 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + x$8]));
    				if ((prevSepType === 2) && (succSepType === 2)) {
  �T					(x$10 = s.types, ((i$3 < 0 || i$3 >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + i$3] = 2));
    				} else if (((x$9 = s.types, ((i$3 < 0 || i$3 >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + i$3])) === 6) && (prevSepType === 5) && (succSepType === 5)) {
  ��					(x$11 = s.types, ((i$3 < 0 || i$3 >= x$11.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + i$3] = 5));
    				}
    			}
  ��			i$3 = i$3 + (1) >> 0;
    		}
  ��		_ref$3 = s.types;
		_i$3 = 0;
		while (true) {
			if (!(_i$3 < _ref$3.$length)) { break; }
			i$4 = _i$3;
			t$5 = ((_i$3 < 0 || _i$3 >= _ref$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$3.$array[_ref$3.$offset + _i$3]);
    			if (t$5 === 4) {
  �(				runStart = i$4;
  �9				runEnd = s.findRunLimit(runStart, new sliceType$2([4]));
  ��				t$6 = s.sos;
    				if (runStart > 0) {
  ��					t$6 = (x$12 = s.types, x$13 = runStart - 1 >> 0, ((x$13 < 0 || x$13 >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + x$13]));
    				}
    				if (!((t$6 === 2))) {
  ��					t$6 = s.eos;
    					if (runEnd < s.types.$length) {
  �						t$6 = (x$14 = s.types, ((runEnd < 0 || runEnd >= x$14.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$14.$array[x$14.$offset + runEnd]));
    					}
    				}
    				if (t$6 === 2) {
  �A					setTypes($subslice(s.types, runStart, runEnd), 2);
    				}
  ��				i$4 = runEnd;
    			}
    			_i$3++;
		}
  ��		_ref$4 = s.types;
		_i$4 = 0;
		while (true) {
			if (!(_i$4 < _ref$4.$length)) { break; }
			i$5 = _i$4;
			t$7 = ((_i$4 < 0 || _i$4 >= _ref$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$4.$array[_ref$4.$offset + _i$4]);
    			if (new Class(t$7).in$(new sliceType$2([3, 4, 6]))) {
  ��				(x$15 = s.types, ((i$5 < 0 || i$5 >= x$15.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$15.$array[x$15.$offset + i$5] = 10));
    			}
    			_i$4++;
		}
  �		_ref$5 = s.types;
		_i$5 = 0;
		while (true) {
			if (!(_i$5 < _ref$5.$length)) { break; }
			i$6 = _i$5;
			t$8 = ((_i$5 < 0 || _i$5 >= _ref$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$5.$array[_ref$5.$offset + _i$5]);
    			if (t$8 === 2) {
  �i				prevStrongType = s.sos;
  ��				j$1 = i$6 - 1 >> 0;
				while (true) {
					if (!(j$1 >= 0)) { break; }
  ��					t$8 = (x$16 = s.types, ((j$1 < 0 || j$1 >= x$16.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$16.$array[x$16.$offset + j$1]));
    					if ((t$8 === 0) || (t$8 === 1)) {
  ��						prevStrongType = t$8;
  �						break;
    					}
  ��					j$1 = j$1 - (1) >> 0;
    				}
    				if (prevStrongType === 0) {
  �<					(x$17 = s.types, ((i$6 < 0 || i$6 >= x$17.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$17.$array[x$17.$offset + i$6] = 0));
    				}
    			}
    			_i$5++;
		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: isolatingRunSequence.ptr.prototype.resolveWeakTypes }; } $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._i$4 = _i$4; $f._i$5 = _i$5; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._ref$4 = _ref$4; $f._ref$5 = _ref$5; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.i$5 = i$5; $f.i$6 = i$6; $f.j = j; $f.j$1 = j$1; $f.precedingCharacterType = precedingCharacterType; $f.prevSepType = prevSepType; $f.prevStrongType = prevStrongType; $f.runEnd = runEnd; $f.runStart = runStart; $f.s = s; $f.succSepType = succSepType; $f.t = t; $f.t$1 = t$1; $f.t$2 = t$2; $f.t$3 = t$3; $f.t$4 = t$4; $f.t$5 = t$5; $f.t$6 = t$6; $f.t$7 = t$7; $f.t$8 = t$8; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$16 = x$16; $f.x$17 = x$17; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	isolatingRunSequence.prototype.resolveWeakTypes = function() { return this.$val.resolveWeakTypes(); };
isolatingRunSequenceresolveWeakTypes~+vendor/golang.org/x/text/unicode/bidi.Class1vendor/golang.org/x/text/unicode/bidi.assertOnly~3vendor/golang.org/x/text/unicode/bidi.findRunLimit~)vendor/golang.org/x/text/unicode/bidi.in~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence.vendor/golang.org/x/text/unicode/bidi.setTypes1vendor/golang.org/x/text/unicode/bidi.sliceType$2 Q(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).resolveNeutralTypes ��	isolatingRunSequence.ptr.prototype.resolveNeutralTypes = function() {
		var _1, _i, _ref, _tmp, _tmp$1, i, leadType, resolvedType, runEnd, runStart, s, t, trailType, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; i = $f.i; leadType = $f.leadType; resolvedType = $f.resolvedType; runEnd = $f.runEnd; runStart = $f.runStart; s = $f.s; t = $f.t; trailType = $f.trailType; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  ��		$r = s.assertOnly(new sliceType$2([0, 1, 2, 5, 7, 8, 9, 10, 22, 21, 23, 24])); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �2		_ref = s.types;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			_1 = t;
    			if ((_1 === (9)) || (_1 === (10)) || (_1 === (7)) || (_1 === (8)) || (_1 === (22)) || (_1 === (21)) || (_1 === (23)) || (_1 === (24))) {
  ��				runStart = i;
  ��				runEnd = s.findRunLimit(runStart, new sliceType$2([7, 8, 9, 10, 22, 21, 23, 24]));
  �9				_tmp = 0;
				_tmp$1 = 0;
				leadType = _tmp;
				trailType = _tmp$1;
    				if (runStart === 0) {
  ��					leadType = s.sos;
    				} else {
  ��					leadType = (x = s.types, x$1 = runStart - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
    					if (new Class(leadType).in$(new sliceType$2([5, 2]))) {
  �						leadType = 1;
    					}
    				}
    				if (runEnd === s.types.$length) {
  �R					trailType = s.eos;
    				} else {
  �t					trailType = (x$2 = s.types, ((runEnd < 0 || runEnd >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + runEnd]));
    					if (new Class(trailType).in$(new sliceType$2([5, 2]))) {
  ��						trailType = 1;
    					}
    				}
  ��				resolvedType = 0;
    				if (leadType === trailType) {
  �					resolvedType = leadType;
    				} else {
  ��					resolvedType = typeForLevel(s.level);
    				}
  ��				setTypes($subslice(s.types, runStart, runEnd), resolvedType);
  �=				i = runEnd;
    			}
    			_i++;
		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: isolatingRunSequence.ptr.prototype.resolveNeutralTypes }; } $f._1 = _1; $f._i = _i; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.i = i; $f.leadType = leadType; $f.resolvedType = resolvedType; $f.runEnd = runEnd; $f.runStart = runStart; $f.s = s; $f.t = t; $f.trailType = trailType; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	isolatingRunSequence.prototype.resolveNeutralTypes = function() { return this.$val.resolveNeutralTypes(); };
isolatingRunSequenceresolveNeutralTypes~+vendor/golang.org/x/text/unicode/bidi.Class1vendor/golang.org/x/text/unicode/bidi.assertOnly~3vendor/golang.org/x/text/unicode/bidi.findRunLimit~)vendor/golang.org/x/text/unicode/bidi.in~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence.vendor/golang.org/x/text/unicode/bidi.setTypes1vendor/golang.org/x/text/unicode/bidi.sliceType$22vendor/golang.org/x/text/unicode/bidi.typeForLevel /vendor/golang.org/x/text/unicode/bidi.setLevels%vendor/golang.org/x/text/unicode/bidi	setLevels 	setLevels�_	setLevels = function(levels, newLevel) {
		var _i, _ref, i, levels, newLevel;
  ��		_ref = levels;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  ��			((i < 0 || i >= levels.$length) ? ($throwRuntimeError("index out of range"), undefined) : levels.$array[levels.$offset + i] = newLevel);
    			_i++;
		}
    	};
	setLevels/vendor/golang.org/x/text/unicode/bidi.setLevels .vendor/golang.org/x/text/unicode/bidi.setTypes%vendor/golang.org/x/text/unicode/bidisetTypes setTypes�U	setTypes = function(types, newType) {
		var _i, _ref, i, newType, types;
  ��		_ref = types;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  �			((i < 0 || i >= types.$length) ? ($throwRuntimeError("index out of range"), undefined) : types.$array[types.$offset + i] = newType);
    			_i++;
		}
    	};
setTypes.vendor/golang.org/x/text/unicode/bidi.setTypes S(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).resolveImplicitLevels ��	isolatingRunSequence.ptr.prototype.resolveImplicitLevels = function() {
		var _i, _i$1, _ref, _ref$1, i, i$1, s, t, t$1, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _ref = $f._ref; _ref$1 = $f._ref$1; i = $f.i; i$1 = $f.i$1; s = $f.s; t = $f.t; t$1 = $f.t$1; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  ��		$r = s.assertOnly(new sliceType$2([0, 1, 2, 5])); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		s.resolvedLevels = $makeSlice(sliceType$8, s.types.$length);
  �		setLevels(s.resolvedLevels, s.level);
    		if (((s.level & 1)) === 0) {
  �^			_ref = s.types;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (t === 0) {
    				} else if (t === 1) {
  ��					(x$1 = s.resolvedLevels, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i] = ((x = s.resolvedLevels, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])) + (1) << 24 >> 24)));
    				} else {
  �					(x$3 = s.resolvedLevels, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i] = ((x$2 = s.resolvedLevels, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i])) + (2) << 24 >> 24)));
    				}
    				_i++;
			}
    		} else {
  �=			_ref$1 = s.types;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i$1 = _i$1;
				t$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    				if (t$1 === 1) {
    				} else {
  ��					(x$5 = s.resolvedLevels, ((i$1 < 0 || i$1 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + i$1] = ((x$4 = s.resolvedLevels, ((i$1 < 0 || i$1 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i$1])) + (1) << 24 >> 24)));
    				}
    				_i$1++;
			}
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: isolatingRunSequence.ptr.prototype.resolveImplicitLevels }; } $f._i = _i; $f._i$1 = _i$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f.i = i; $f.i$1 = i$1; $f.s = s; $f.t = t; $f.t$1 = t$1; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	isolatingRunSequence.prototype.resolveImplicitLevels = function() { return this.$val.resolveImplicitLevels(); };
isolatingRunSequenceresolveImplicitLevels~1vendor/golang.org/x/text/unicode/bidi.assertOnly~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence/vendor/golang.org/x/text/unicode/bidi.setLevels1vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$8 Q(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).applyLevelsAndTypes �6	isolatingRunSequence.ptr.prototype.applyLevelsAndTypes = function() {
		var _i, _ref, i, s, x, x$1, x$2, x$3, x$4;
		s = this;
  �n		_ref = s.indexes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			(x$2 = s.p.resultTypes, ((x < 0 || x >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x] = (x$1 = s.types, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]))));
  ��			(x$4 = s.p.resultLevels, ((x < 0 || x >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x] = (x$3 = s.resolvedLevels, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i]))));
    			_i++;
		}
    	};
	isolatingRunSequence.prototype.applyLevelsAndTypes = function() { return this.$val.applyLevelsAndTypes(); };
isolatingRunSequenceapplyLevelsAndTypes~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence J(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).findRunLimit ��	isolatingRunSequence.ptr.prototype.findRunLimit = function(index, validSet) {
		var _i, _ref, index, s, t, valid, validSet, x;
		s = this;
  ��		loop:
		while (true) {
			if (!(index < s.types.$length)) { break; }
  �			t = (x = s.types, ((index < 0 || index >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + index]));
  �.			_ref = validSet;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				valid = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (t === valid) {
  �					index = index + (1) >> 0;
    					continue loop;
    				}
    				_i++;
			}
  �			return index;
    		}
  ��		return s.types.$length;
    	};
	isolatingRunSequence.prototype.findRunLimit = function(index, validSet) { return this.$val.findRunLimit(index, validSet); };
isolatingRunSequencefindRunLimit~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence H(*vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence).assertOnly ��	isolatingRunSequence.ptr.prototype.assertOnly = function(codes) {
		var _i, _i$1, _ref, _ref$1, c, codes, i, s, t, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _ref = $f._ref; _ref$1 = $f._ref$1; c = $f.c; codes = $f.codes; i = $f.i; s = $f.s; t = $f.t; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �b		_ref = s.types;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			_ref$1 = codes;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				c = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    				if (t === c) {
  ��					_i++;
					/* continue loop; */ $s = 1; continue s;
    				}
    				_i$1++;
			}
  ��			$r = log.Panicf("invalid bidi code %v present in assertOnly at position %d", new sliceType$7([new Class(t), new $Int((x = s.indexes, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])))])); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: isolatingRunSequence.ptr.prototype.assertOnly }; } $f._i = _i; $f._i$1 = _i$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f.c = c; $f.codes = codes; $f.i = i; $f.s = s; $f.t = t; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	isolatingRunSequence.prototype.assertOnly = function(codes) { return this.$val.assertOnly(codes); };
isolatingRunSequenceassertOnly~
log.Panicf+vendor/golang.org/x/text/unicode/bidi.Class:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence1vendor/golang.org/x/text/unicode/bidi.sliceType$7 E(*vendor/golang.org/x/text/unicode/bidi.paragraph).determineLevelRuns ��	paragraph.ptr.prototype.determineLevelRuns = function() {
		var _i, _ref, allRuns, currentLevel, i, p, run, x, x$1, x$2;
		p = this;
  ��		run = new sliceType$6([]);
  ��		allRuns = new sliceType$9([]);
  ��		currentLevel = -1;
  ��		_ref = p.initialTypes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
    			if (!isRemovedByX9((x = p.initialTypes, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])))) {
    				if (!(((x$1 = p.resultLevels, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])) === currentLevel))) {
    					if (currentLevel >= 0) {
  ��						allRuns = $append(allRuns, run);
  ��						run = sliceType$6.nil;
    					}
  �					currentLevel = (x$2 = p.resultLevels, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i]));
    				}
  �H				run = $append(run, i);
    			}
    			_i++;
		}
    		if (run.$length > 0) {
  ��			allRuns = $append(allRuns, run);
    		}
  ��		return allRuns;
    	};
	paragraph.prototype.determineLevelRuns = function() { return this.$val.determineLevelRuns(); };
	paragraphdetermineLevelRuns~3vendor/golang.org/x/text/unicode/bidi.isRemovedByX9/vendor/golang.org/x/text/unicode/bidi.paragraph1vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$9 Q(*vendor/golang.org/x/text/unicode/bidi.paragraph).determineIsolatingRunSequences ��	paragraph.ptr.prototype.determineIsolatingRunSequences = function() {
		var _i, _i$1, _i$2, _ref, _ref$1, _ref$2, currentRunSequence, first, i, index, last, lastT, levelRuns, p, run, run$1, runForCharacter, sequences, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		p = this;
  �W		levelRuns = p.determineLevelRuns();
  ��		runForCharacter = $makeSlice(sliceType$6, p.Len());
  ��		_ref = levelRuns;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			run = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			_ref$1 = run;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				index = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  �				((index < 0 || index >= runForCharacter.$length) ? ($throwRuntimeError("index out of range"), undefined) : runForCharacter.$array[runForCharacter.$offset + index] = i);
    				_i$1++;
			}
    			_i++;
		}
  �>		sequences = new sliceType$10([]);
  �k		currentRunSequence = sliceType$6.nil;
  ��		_ref$2 = levelRuns;
		_i$2 = 0;
		while (true) {
			if (!(_i$2 < _ref$2.$length)) { break; }
			run$1 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
  ��			first = (0 >= run$1.$length ? ($throwRuntimeError("index out of range"), undefined) : run$1.$array[run$1.$offset + 0]);
    			if (!(((x = p.initialTypes, ((first < 0 || first >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + first])) === 24)) || ((x$1 = p.matchingIsolateInitiator, ((first < 0 || first >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + first])) === -1)) {
  �
				currentRunSequence = sliceType$6.nil;
  �9				while (true) {
  �v					currentRunSequence = $appendSlice(currentRunSequence, run$1);
  ��					last = (x$2 = currentRunSequence.$length - 1 >> 0, ((x$2 < 0 || x$2 >= currentRunSequence.$length) ? ($throwRuntimeError("index out of range"), undefined) : currentRunSequence.$array[currentRunSequence.$offset + x$2]));
  ��					lastT = (x$3 = p.initialTypes, ((last < 0 || last >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + last]));
    					if (new Class(lastT).in$(new sliceType$2([21, 22, 23])) && !(((x$4 = p.matchingPDI, ((last < 0 || last >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + last])) === p.Len()))) {
  �S						run$1 = (x$5 = (x$6 = (x$7 = p.matchingPDI, ((last < 0 || last >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + last])), ((x$6 < 0 || x$6 >= runForCharacter.$length) ? ($throwRuntimeError("index out of range"), undefined) : runForCharacter.$array[runForCharacter.$offset + x$6])), ((x$5 < 0 || x$5 >= levelRuns.$length) ? ($throwRuntimeError("index out of range"), undefined) : levelRuns.$array[levelRuns.$offset + x$5]));
    					} else {
  ��						break;
    					}
    				}
  ��				sequences = $append(sequences, p.isolatingRunSequence(currentRunSequence));
    			}
    			_i$2++;
		}
  �		return sequences;
    	};
	paragraph.prototype.determineIsolatingRunSequences = function() { return this.$val.determineIsolatingRunSequences(); };
	paragraphdetermineIsolatingRunSequences~
+vendor/golang.org/x/text/unicode/bidi.Class9vendor/golang.org/x/text/unicode/bidi.determineLevelRuns~)vendor/golang.org/x/text/unicode/bidi.in~:vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence;vendor/golang.org/x/text/unicode/bidi.isolatingRunSequence~/vendor/golang.org/x/text/unicode/bidi.paragraph/vendor/golang.org/x/text/unicode/bidi.ptrType$32vendor/golang.org/x/text/unicode/bidi.sliceType$101vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$6 V(*vendor/golang.org/x/text/unicode/bidi.paragraph).assignLevelsToCharactersRemovedByX9 �V	paragraph.ptr.prototype.assignLevelsToCharactersRemovedByX9 = function() {
		var _i, _ref, i, i$1, p, t, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
		p = this;
  �W		_ref = p.initialTypes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (new Class(t).in$(new sliceType$2([18, 19, 16, 17, 20, 11]))) {
  ��				(x = p.resultTypes, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = t));
  ��				(x$1 = p.resultLevels, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i] = -1));
    			}
    			_i++;
		}
    		if ((x$2 = p.resultLevels, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0])) === -1) {
  ��			(x$3 = p.resultLevels, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0] = p.embeddingLevel));
    		}
  ��		i$1 = 1;
		while (true) {
			if (!(i$1 < p.initialTypes.$length)) { break; }
    			if ((x$4 = p.resultLevels, ((i$1 < 0 || i$1 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i$1])) === -1) {
  � 				(x$7 = p.resultLevels, ((i$1 < 0 || i$1 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i$1] = (x$5 = p.resultLevels, x$6 = i$1 - 1 >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6]))));
    			}
  ��			i$1 = i$1 + (1) >> 0;
    		}
    	};
	paragraph.prototype.assignLevelsToCharactersRemovedByX9 = function() { return this.$val.assignLevelsToCharactersRemovedByX9(); };
	paragraph$assignLevelsToCharactersRemovedByX9~+vendor/golang.org/x/text/unicode/bidi.Class)vendor/golang.org/x/text/unicode/bidi.in~/vendor/golang.org/x/text/unicode/bidi.paragraph1vendor/golang.org/x/text/unicode/bidi.sliceType$2 <(*vendor/golang.org/x/text/unicode/bidi.paragraph).getLevels �	paragraph.ptr.prototype.getLevels = function(linebreaks) {
		var _i, _i$1, _r, _ref, _ref$1, i, j, j$1, limit, linebreaks, p, result, start, t, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; i = $f.i; j = $f.j; j$1 = $f.j$1; limit = $f.limit; linebreaks = $f.linebreaks; p = $f.p; result = $f.result; start = $f.start; t = $f.t; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �S		_r = validateLineBreaks(linebreaks, p.Len()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  �}		result = $appendSlice((sliceType$8.nil), p.resultLevels);
  �E		_ref = p.initialTypes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (new Class(t).in$(new sliceType$2([7, 8]))) {
  ��				((i < 0 || i >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + i] = p.embeddingLevel);
  ��				j = i - 1 >> 0;
				while (true) {
					if (!(j >= 0)) { break; }
    					if (isWhitespace((x = p.initialTypes, ((j < 0 || j >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + j])))) {
  �E						((j < 0 || j >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + j] = p.embeddingLevel);
    					} else {
  �t						break;
    					}
  ��					j = j - (1) >> 0;
    				}
    			}
    			_i++;
		}
  ��		start = 0;
  ��		_ref$1 = linebreaks;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			limit = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  ��			j$1 = limit - 1 >> 0;
			while (true) {
				if (!(j$1 >= start)) { break; }
    				if (isWhitespace((x$1 = p.initialTypes, ((j$1 < 0 || j$1 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + j$1])))) {
  �E					((j$1 < 0 || j$1 >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + j$1] = p.embeddingLevel);
    				} else {
  �r					break;
    				}
  ��				j$1 = j$1 - (1) >> 0;
    			}
  ��			start = limit;
    			_i$1++;
		}
  ��		$s = -1; return result;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: paragraph.ptr.prototype.getLevels }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.i = i; $f.j = j; $f.j$1 = j$1; $f.limit = limit; $f.linebreaks = linebreaks; $f.p = p; $f.result = result; $f.start = start; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	paragraph.prototype.getLevels = function(linebreaks) { return this.$val.getLevels(linebreaks); };
	paragraph
getLevels~+vendor/golang.org/x/text/unicode/bidi.Class)vendor/golang.org/x/text/unicode/bidi.in~2vendor/golang.org/x/text/unicode/bidi.isWhitespace/vendor/golang.org/x/text/unicode/bidi.paragraph1vendor/golang.org/x/text/unicode/bidi.sliceType$21vendor/golang.org/x/text/unicode/bidi.sliceType$88vendor/golang.org/x/text/unicode/bidi.validateLineBreaks @(*vendor/golang.org/x/text/unicode/bidi.paragraph).getReordering �	paragraph.ptr.prototype.getReordering = function(linebreaks) {
		var $24r, _r, _r$1, _r$2, linebreaks, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; linebreaks = $f.linebreaks; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  ��		_r = validateLineBreaks(linebreaks, p.Len()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  ��		_r$1 = p.getLevels(linebreaks); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = computeMultilineReordering(_r$1, linebreaks); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 4; case 4: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: paragraph.ptr.prototype.getReordering }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.linebreaks = linebreaks; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	paragraph.prototype.getReordering = function(linebreaks) { return this.$val.getReordering(linebreaks); };
	paragraphgetReordering~@vendor/golang.org/x/text/unicode/bidi.computeMultilineReordering0vendor/golang.org/x/text/unicode/bidi.getLevels~/vendor/golang.org/x/text/unicode/bidi.paragraph8vendor/golang.org/x/text/unicode/bidi.validateLineBreaks @vendor/golang.org/x/text/unicode/bidi.computeMultilineReordering%vendor/golang.org/x/text/unicode/bidicomputeMultilineReordering computeMultilineReordering�y	computeMultilineReordering = function(levels, linebreaks) {
		var _i, _i$1, _ref, _ref$1, j, levels, limit, linebreaks, order, result, start, tempLevels, x;
  ��		result = $makeSlice(sliceType$6, levels.$length);
  �		start = 0;
  �*		_ref = linebreaks;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			limit = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �O			tempLevels = $makeSlice(sliceType$8, (limit - start >> 0));
  �z			$copySlice(tempLevels, $subslice(levels, start));
  ��			_ref$1 = computeReordering(tempLevels);
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				j = _i$1;
				order = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  ��				(x = start + j >> 0, ((x < 0 || x >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + x] = (order + start >> 0)));
    				_i$1++;
			}
  ��			start = limit;
    			_i++;
		}
  �		return result;
    	};
computeMultilineReordering@vendor/golang.org/x/text/unicode/bidi.computeMultilineReordering7vendor/golang.org/x/text/unicode/bidi.computeReordering1vendor/golang.org/x/text/unicode/bidi.sliceType$61vendor/golang.org/x/text/unicode/bidi.sliceType$8 7vendor/golang.org/x/text/unicode/bidi.computeReordering%vendor/golang.org/x/text/unicode/bidicomputeReordering computeReordering�
g	computeReordering = function(levels) {
		var _i, _i$1, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, highestLevel, i, i$1, j, k, level$1, level$2, levels, limit, lowestOddLevel, result, start;
  �		result = $makeSlice(sliceType$6, levels.$length);
  �O		_ref = result;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  �i			((i < 0 || i >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + i] = i);
    			_i++;
		}
  �		highestLevel = 0;
  �)		lowestOddLevel = 127;
  �P		_ref$1 = levels;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			level$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    			if (level$1 > highestLevel) {
  ��				highestLevel = level$1;
    			}
    			if (!(((level$1 & 1) === 0)) && level$1 < lowestOddLevel) {
  ��				lowestOddLevel = level$1;
    			}
    			_i$1++;
		}
  ��		level$2 = highestLevel;
		while (true) {
			if (!(level$2 >= lowestOddLevel)) { break; }
  �<			i$1 = 0;
			while (true) {
				if (!(i$1 < levels.$length)) { break; }
    				if (((i$1 < 0 || i$1 >= levels.$length) ? ($throwRuntimeError("index out of range"), undefined) : levels.$array[levels.$offset + i$1]) >= level$2) {
  «					start = i$1;
  º					limit = i$1 + 1 >> 0;
  ��					while (true) {
						if (!(limit < levels.$length && ((limit < 0 || limit >= levels.$length) ? ($throwRuntimeError("index out of range"), undefined) : levels.$array[levels.$offset + limit]) >= level$2)) { break; }
  �						limit = limit + (1) >> 0;
    					}
  �					_tmp = start;
					_tmp$1 = limit - 1 >> 0;
					j = _tmp;
					k = _tmp$1;
					while (true) {
						if (!(j < k)) { break; }
  �S						_tmp$2 = ((k < 0 || k >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + k]);
						_tmp$3 = ((j < 0 || j >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + j]);
						((j < 0 || j >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + j] = _tmp$2);
						((k < 0 || k >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + k] = _tmp$3);
  �<						_tmp$4 = j + 1 >> 0;
						_tmp$5 = k - 1 >> 0;
						j = _tmp$4;
						k = _tmp$5;
					}
  é					i$1 = limit;
    				}
  �U				i$1 = i$1 + (1) >> 0;
    			}
  �,			level$2 = level$2 - (1) << 24 >> 24;
    		}
  ��		return result;
    	};
computeReordering7vendor/golang.org/x/text/unicode/bidi.computeReordering1vendor/golang.org/x/text/unicode/bidi.sliceType$6 2vendor/golang.org/x/text/unicode/bidi.isWhitespace%vendor/golang.org/x/text/unicode/bidiisWhitespace isWhitespace�;	isWhitespace = function(c) {
		var _1, c;
    		_1 = c;
    		if ((_1 === (18)) || (_1 === (19)) || (_1 === (16)) || (_1 === (17)) || (_1 === (20)) || (_1 === (21)) || (_1 === (22)) || (_1 === (23)) || (_1 === (24)) || (_1 === (11)) || (_1 === (9))) {
  ģ			return true;
    		}
  ĳ		return false;
    	};
isWhitespace2vendor/golang.org/x/text/unicode/bidi.isWhitespace 3vendor/golang.org/x/text/unicode/bidi.isRemovedByX9%vendor/golang.org/x/text/unicode/bidiisRemovedByX9 isRemovedByX9��	isRemovedByX9 = function(c) {
		var _1, c;
    		_1 = c;
    		if ((_1 === (18)) || (_1 === (19)) || (_1 === (16)) || (_1 === (17)) || (_1 === (20)) || (_1 === (11))) {
  �d			return true;
    		}
  �t		return false;
    	};
isRemovedByX93vendor/golang.org/x/text/unicode/bidi.isRemovedByX9 2vendor/golang.org/x/text/unicode/bidi.typeForLevel%vendor/golang.org/x/text/unicode/biditypeForLevel typeForLevel��	typeForLevel = function(level$1) {
		var level$1;
    		if (((level$1 & 1)) === 0) {
  �			return 0;
    		}
  � 		return 1;
    	};
typeForLevel2vendor/golang.org/x/text/unicode/bidi.typeForLevel 3vendor/golang.org/x/text/unicode/bidi.validateTypes%vendor/golang.org/x/text/unicode/bidivalidateTypes validateTypes�?	validateTypes = function(types) {
		var $24r, $24r$1, _i, _r, _r$1, _ref, i, t, types, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; i = $f.i; t = $f.t; types = $f.types; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �W		/* */ if (types.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (types.$length === 0) { */ case 1:
  �n			_r = fmt.Errorf("types is null", new sliceType$7([])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  ƕ		_ref = $subslice(types, 0, (types.$length - 1 >> 0));
		_i = 0;
		/* while (true) { */ case 5:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 6; continue; }
			i = _i;
			t = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			/* */ if (t === 7) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (t === 7) { */ case 7:
  ��				_r$1 = fmt.Errorf("B type before end of paragraph at index: %d", new sliceType$7([new $Int(i)])); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r$1 = _r$1;
				$s = 10; case 10: return $24r$1;
    			/* } */ case 8:
    			_i++;
		$s = 5; continue;
		case 6:
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: validateTypes }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.i = i; $f.t = t; $f.types = types; $f.$s = $s; $f.$r = $r; return $f;
	};
validateTypes
fmt.Errorf1vendor/golang.org/x/text/unicode/bidi.sliceType$73vendor/golang.org/x/text/unicode/bidi.validateTypes Evendor/golang.org/x/text/unicode/bidi.validateParagraphEmbeddingLevel%vendor/golang.org/x/text/unicode/bidivalidateParagraphEmbeddingLevel validateParagraphEmbeddingLevel�k	validateParagraphEmbeddingLevel = function(embeddingLevel) {
		var $24r, _r, embeddingLevel, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; embeddingLevel = $f.embeddingLevel; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �m		/* */ if (!((embeddingLevel === -1)) && !((embeddingLevel === 0)) && !((embeddingLevel === 1))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((embeddingLevel === -1)) && !((embeddingLevel === 0)) && !((embeddingLevel === 1))) { */ case 1:
  ��			_r = fmt.Errorf("illegal paragraph embedding level: %d", new sliceType$7([new level(embeddingLevel)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: validateParagraphEmbeddingLevel }; } $f.$24r = $24r; $f._r = _r; $f.embeddingLevel = embeddingLevel; $f.$s = $s; $f.$r = $r; return $f;
	};
validateParagraphEmbeddingLevel
fmt.Errorf+vendor/golang.org/x/text/unicode/bidi.level1vendor/golang.org/x/text/unicode/bidi.sliceType$7Evendor/golang.org/x/text/unicode/bidi.validateParagraphEmbeddingLevel 8vendor/golang.org/x/text/unicode/bidi.validateLineBreaks%vendor/golang.org/x/text/unicode/bidivalidateLineBreaks validateLineBreaks�>	validateLineBreaks = function(linebreaks, textLength) {
		var $24r, $24r$1, _i, _r, _r$1, _ref, i, linebreaks, next, prev, textLength, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; i = $f.i; linebreaks = $f.linebreaks; next = $f.next; prev = $f.prev; textLength = $f.textLength; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �f		prev = 0;
  �q		_ref = linebreaks;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			next = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ȕ			/* */ if (next <= prev) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (next <= prev) { */ case 3:
  Ȫ				_r = fmt.Errorf("bad linebreak: %d at index: %d", new sliceType$7([new $Int(next), new $Int(i)])); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
  ��			prev = next;
    			_i++;
		$s = 1; continue;
		case 2:
  ��		/* */ if (!((prev === textLength))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!((prev === textLength))) { */ case 7:
  �			_r$1 = fmt.Errorf("last linebreak was %d, want %d", new sliceType$7([new $Int(prev), new $Int(textLength)])); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r$1 = _r$1;
			$s = 10; case 10: return $24r$1;
    		/* } */ case 8:
  �a		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: validateLineBreaks }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.i = i; $f.linebreaks = linebreaks; $f.next = next; $f.prev = prev; $f.textLength = textLength; $f.$s = $s; $f.$r = $r; return $f;
	};
validateLineBreaks
fmt.Errorf1vendor/golang.org/x/text/unicode/bidi.sliceType$78vendor/golang.org/x/text/unicode/bidi.validateLineBreaks 5vendor/golang.org/x/text/unicode/bidi.validatePbTypes%vendor/golang.org/x/text/unicode/bidivalidatePbTypes validatePbTypes��	validatePbTypes = function(pairTypes) {
		var $24r, $24r$1, _1, _i, _r, _r$1, _ref, i, pairTypes, pt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _1 = $f._1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; i = $f.i; pairTypes = $f.pairTypes; pt = $f.pt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ɦ		/* */ if (pairTypes.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (pairTypes.$length === 0) { */ case 1:
  ��			_r = fmt.Errorf("pairTypes is null", new sliceType$7([])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  ��		_ref = pairTypes;
		_i = 0;
		/* while (true) { */ case 5:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 6; continue; }
			i = _i;
			pt = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				_1 = pt;
  �				/* */ if ((_1 === (0)) || (_1 === (1)) || (_1 === (2))) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if ((_1 === (0)) || (_1 === (1)) || (_1 === (2))) { */ case 8:
    					$s = 10; continue;
				/* } else { */ case 9:
  �G					_r$1 = fmt.Errorf("illegal pairType value at %d: %v", new sliceType$7([new $Int(i), new bracketType(((i < 0 || i >= pairTypes.$length) ? ($throwRuntimeError("index out of range"), undefined) : pairTypes.$array[pairTypes.$offset + i]))])); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					$24r$1 = _r$1;
					$s = 12; case 12: return $24r$1;
    				/* } */ case 10:
    			case 7:
    			_i++;
		$s = 5; continue;
		case 6:
  ʖ		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: validatePbTypes }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._1 = _1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.i = i; $f.pairTypes = pairTypes; $f.pt = pt; $f.$s = $s; $f.$r = $r; return $f;
	};
validatePbTypes
fmt.Errorf1vendor/golang.org/x/text/unicode/bidi.bracketType1vendor/golang.org/x/text/unicode/bidi.sliceType$75vendor/golang.org/x/text/unicode/bidi.validatePbTypes 6vendor/golang.org/x/text/unicode/bidi.validatePbValues%vendor/golang.org/x/text/unicode/bidivalidatePbValues validatePbValues�	validatePbValues = function(pairValues, pairTypes) {
		var $24r, $24r$1, _r, _r$1, pairTypes, pairValues, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; pairTypes = $f.pairTypes; pairValues = $f.pairValues; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		/* */ if (pairValues === sliceType.nil) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (pairValues === sliceType.nil) { */ case 1:
  �			_r = fmt.Errorf("pairValues is null", new sliceType$7([])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �4		/* */ if (!((pairTypes.$length === pairValues.$length))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!((pairTypes.$length === pairValues.$length))) { */ case 5:
  �]			_r$1 = fmt.Errorf("pairTypes is different length from pairValues", new sliceType$7([])); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r$1 = _r$1;
			$s = 8; case 8: return $24r$1;
    		/* } */ case 6:
  ˤ		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: validatePbValues }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.pairTypes = pairTypes; $f.pairValues = pairValues; $f.$s = $s; $f.$r = $r; return $f;
	};
validatePbValues
fmt.Errorf/vendor/golang.org/x/text/unicode/bidi.sliceType1vendor/golang.org/x/text/unicode/bidi.sliceType$76vendor/golang.org/x/text/unicode/bidi.validatePbValues 8(vendor/golang.org/x/text/unicode/bidi.Properties).Class ��	Properties.ptr.prototype.Class = function() {
		var c, p, x;
		p = this;
  ��		c = ((((p.entry & 15) >>> 0) >>> 0));
    		if (c === 14) {
  �			c = (x = (p.last & 15) >>> 0, ((x < 0 || x >= controlByteToClass.length) ? ($throwRuntimeError("index out of range"), undefined) : controlByteToClass[x]));
    		}
  �9		return c;
    	};
	Properties.prototype.Class = function() { return this.$val.Class(); };

Properties0vendor/golang.org/x/text/unicode/bidi.Properties8vendor/golang.org/x/text/unicode/bidi.controlByteToClass <(vendor/golang.org/x/text/unicode/bidi.Properties).IsBracket ��	Properties.ptr.prototype.IsBracket = function() {
		var p;
		p = this;
  Ϡ		return !((((p.entry & 240) >>> 0) === 0));
    	};
	Properties.prototype.IsBracket = function() { return this.$val.IsBracket(); };

Properties0vendor/golang.org/x/text/unicode/bidi.Properties C(vendor/golang.org/x/text/unicode/bidi.Properties).IsOpeningBracket ��	Properties.ptr.prototype.IsOpeningBracket = function() {
		var p;
		p = this;
  �M		return !((((p.entry & 16) >>> 0) === 0));
    	};
	Properties.prototype.IsOpeningBracket = function() { return this.$val.IsOpeningBracket(); };

Properties0vendor/golang.org/x/text/unicode/bidi.Properties A(vendor/golang.org/x/text/unicode/bidi.Properties).reverseBracket �x	Properties.ptr.prototype.reverseBracket = function(r) {
		var p, r, x;
		p = this;
  ��		return ((x = p.entry >>> 5 << 24 >>> 24, ((x < 0 || x >= xorMasks.$length) ? ($throwRuntimeError("index out of range"), undefined) : xorMasks.$array[xorMasks.$offset + x])) ^ r) >> 0;
    	};
	Properties.prototype.reverseBracket = function(r) { return this.$val.reverseBracket(r); };

PropertiesreverseBracket~0vendor/golang.org/x/text/unicode/bidi.Properties.vendor/golang.org/x/text/unicode/bidi.xorMasks 0vendor/golang.org/x/text/unicode/bidi.LookupRune%vendor/golang.org/x/text/unicode/bidi
LookupRune 
LookupRune�p	LookupRune = function(r) {
		var _tuple, buf, n, p, r, size;
		p = new Properties.ptr(0, 0);
		size = 0;
  ��		buf = arrayType$3.zero();
  �		n = utf8.EncodeRune(new sliceType$3(buf), r);
    		_tuple = Lookup($subslice(new sliceType$3(buf), 0, n));
		Properties.copy(p, _tuple[0]);
		size = _tuple[1];
		return [p, size];
    	};
	$pkg.LookupRune = LookupRune;

LookupRuneunicode/utf8.EncodeRune,vendor/golang.org/x/text/unicode/bidi.Lookup0vendor/golang.org/x/text/unicode/bidi.LookupRune0vendor/golang.org/x/text/unicode/bidi.Properties1vendor/golang.org/x/text/unicode/bidi.arrayType$31vendor/golang.org/x/text/unicode/bidi.sliceType$3 ,vendor/golang.org/x/text/unicode/bidi.Lookup%vendor/golang.org/x/text/unicode/bidiLookup Lookup�	Lookup = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c0, c1, c1$1, c1$2, c2, c2$1, c3, i, i$1, i$2, o, o$1, p, s, sz;
		p = new Properties.ptr(0, 0);
		sz = 0;
  כ		c0 = (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]);
    		if (c0 < 128) {
    			_tmp = new Properties.ptr(((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]), 0);
			_tmp$1 = 1;
			Properties.copy(p, _tmp);
			sz = _tmp$1;
			return [p, sz];
    		} else if (c0 < 194) {
    			_tmp$2 = new Properties.ptr(0, 0);
			_tmp$3 = 1;
			Properties.copy(p, _tmp$2);
			sz = _tmp$3;
			return [p, sz];
    		} else if (c0 < 224) {
    			if (s.$length < 2) {
    				_tmp$4 = new Properties.ptr(0, 0);
				_tmp$5 = 0;
				Properties.copy(p, _tmp$4);
				sz = _tmp$5;
				return [p, sz];
    			}
  �x			i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  ؍			c1 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1 < 128 || 192 <= c1) {
    				_tmp$6 = new Properties.ptr(0, 0);
				_tmp$7 = 1;
				Properties.copy(p, _tmp$6);
				sz = _tmp$7;
				return [p, sz];
    			}
    			_tmp$8 = new Properties.ptr(trie.lookupValue(((i >>> 0)), c1), 0);
			_tmp$9 = 2;
			Properties.copy(p, _tmp$8);
			sz = _tmp$9;
			return [p, sz];
    		} else if (c0 < 240) {
    			if (s.$length < 3) {
    				_tmp$10 = new Properties.ptr(0, 0);
				_tmp$11 = 0;
				Properties.copy(p, _tmp$10);
				sz = _tmp$11;
				return [p, sz];
    			}
  �g			i$1 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �|			c1$1 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1$1 < 128 || 192 <= c1$1) {
    				_tmp$12 = new Properties.ptr(0, 0);
				_tmp$13 = 1;
				Properties.copy(p, _tmp$12);
				sz = _tmp$13;
				return [p, sz];
    			}
  ��			o = (((i$1 >>> 0)) << 6 >>> 0) + ((c1$1 >>> 0)) >>> 0;
  ��			i$1 = ((o < 0 || o >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o]);
  ��			c2 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
    			if (c2 < 128 || 192 <= c2) {
    				_tmp$14 = new Properties.ptr(0, 0);
				_tmp$15 = 1;
				Properties.copy(p, _tmp$14);
				sz = _tmp$15;
				return [p, sz];
    			}
    			_tmp$16 = new Properties.ptr(trie.lookupValue(((i$1 >>> 0)), c2), c2);
			_tmp$17 = 3;
			Properties.copy(p, _tmp$16);
			sz = _tmp$17;
			return [p, sz];
    		} else if (c0 < 248) {
    			if (s.$length < 4) {
    				_tmp$18 = new Properties.ptr(0, 0);
				_tmp$19 = 0;
				Properties.copy(p, _tmp$18);
				sz = _tmp$19;
				return [p, sz];
    			}
  ��			i$2 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  ��			c1$2 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1$2 < 128 || 192 <= c1$2) {
    				_tmp$20 = new Properties.ptr(0, 0);
				_tmp$21 = 1;
				Properties.copy(p, _tmp$20);
				sz = _tmp$21;
				return [p, sz];
    			}
  �=			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c1$2 >>> 0)) >>> 0;
  �^			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  �q			c2$1 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
    			if (c2$1 < 128 || 192 <= c2$1) {
    				_tmp$22 = new Properties.ptr(0, 0);
				_tmp$23 = 1;
				Properties.copy(p, _tmp$22);
				sz = _tmp$23;
				return [p, sz];
    			}
  ۻ			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c2$1 >>> 0)) >>> 0;
  ��			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  ��			c3 = (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]);
    			if (c3 < 128 || 192 <= c3) {
    				_tmp$24 = new Properties.ptr(0, 0);
				_tmp$25 = 1;
				Properties.copy(p, _tmp$24);
				sz = _tmp$25;
				return [p, sz];
    			}
    			_tmp$26 = new Properties.ptr(trie.lookupValue(((i$2 >>> 0)), c3), 0);
			_tmp$27 = 4;
			Properties.copy(p, _tmp$26);
			sz = _tmp$27;
			return [p, sz];
    		}
    		_tmp$28 = new Properties.ptr(0, 0);
		_tmp$29 = 1;
		Properties.copy(p, _tmp$28);
		sz = _tmp$29;
		return [p, sz];
    	};
	$pkg.Lookup = Lookup;
Lookup,vendor/golang.org/x/text/unicode/bidi.Lookup0vendor/golang.org/x/text/unicode/bidi.Properties/vendor/golang.org/x/text/unicode/bidi.bidiIndex0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~*vendor/golang.org/x/text/unicode/bidi.trie 2vendor/golang.org/x/text/unicode/bidi.LookupString%vendor/golang.org/x/text/unicode/bidiLookupString LookupString��	LookupString = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c0, c1, c1$1, c1$2, c2, c2$1, c3, i, i$1, i$2, o, o$1, p, s, sz;
		p = new Properties.ptr(0, 0);
		sz = 0;
  ݐ		c0 = s.charCodeAt(0);
    		if (c0 < 128) {
    			_tmp = new Properties.ptr(((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]), 0);
			_tmp$1 = 1;
			Properties.copy(p, _tmp);
			sz = _tmp$1;
			return [p, sz];
    		} else if (c0 < 194) {
    			_tmp$2 = new Properties.ptr(0, 0);
			_tmp$3 = 1;
			Properties.copy(p, _tmp$2);
			sz = _tmp$3;
			return [p, sz];
    		} else if (c0 < 224) {
    			if (s.length < 2) {
    				_tmp$4 = new Properties.ptr(0, 0);
				_tmp$5 = 0;
				Properties.copy(p, _tmp$4);
				sz = _tmp$5;
				return [p, sz];
    			}
  �m			i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  ނ			c1 = s.charCodeAt(1);
    			if (c1 < 128 || 192 <= c1) {
    				_tmp$6 = new Properties.ptr(0, 0);
				_tmp$7 = 1;
				Properties.copy(p, _tmp$6);
				sz = _tmp$7;
				return [p, sz];
    			}
    			_tmp$8 = new Properties.ptr(trie.lookupValue(((i >>> 0)), c1), 0);
			_tmp$9 = 2;
			Properties.copy(p, _tmp$8);
			sz = _tmp$9;
			return [p, sz];
    		} else if (c0 < 240) {
    			if (s.length < 3) {
    				_tmp$10 = new Properties.ptr(0, 0);
				_tmp$11 = 0;
				Properties.copy(p, _tmp$10);
				sz = _tmp$11;
				return [p, sz];
    			}
  �\			i$1 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �q			c1$1 = s.charCodeAt(1);
    			if (c1$1 < 128 || 192 <= c1$1) {
    				_tmp$12 = new Properties.ptr(0, 0);
				_tmp$13 = 1;
				Properties.copy(p, _tmp$12);
				sz = _tmp$13;
				return [p, sz];
    			}
  ߻			o = (((i$1 >>> 0)) << 6 >>> 0) + ((c1$1 >>> 0)) >>> 0;
  ��			i$1 = ((o < 0 || o >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o]);
  ��			c2 = s.charCodeAt(2);
    			if (c2 < 128 || 192 <= c2) {
    				_tmp$14 = new Properties.ptr(0, 0);
				_tmp$15 = 1;
				Properties.copy(p, _tmp$14);
				sz = _tmp$15;
				return [p, sz];
    			}
    			_tmp$16 = new Properties.ptr(trie.lookupValue(((i$1 >>> 0)), c2), c2);
			_tmp$17 = 3;
			Properties.copy(p, _tmp$16);
			sz = _tmp$17;
			return [p, sz];
    		} else if (c0 < 248) {
    			if (s.length < 4) {
    				_tmp$18 = new Properties.ptr(0, 0);
				_tmp$19 = 0;
				Properties.copy(p, _tmp$18);
				sz = _tmp$19;
				return [p, sz];
    			}
  ��			i$2 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  ��			c1$2 = s.charCodeAt(1);
    			if (c1$2 < 128 || 192 <= c1$2) {
    				_tmp$20 = new Properties.ptr(0, 0);
				_tmp$21 = 1;
				Properties.copy(p, _tmp$20);
				sz = _tmp$21;
				return [p, sz];
    			}
  �2			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c1$2 >>> 0)) >>> 0;
  �S			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  �f			c2$1 = s.charCodeAt(2);
    			if (c2$1 < 128 || 192 <= c2$1) {
    				_tmp$22 = new Properties.ptr(0, 0);
				_tmp$23 = 1;
				Properties.copy(p, _tmp$22);
				sz = _tmp$23;
				return [p, sz];
    			}
  �			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c2$1 >>> 0)) >>> 0;
  ��			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  ��			c3 = s.charCodeAt(3);
    			if (c3 < 128 || 192 <= c3) {
    				_tmp$24 = new Properties.ptr(0, 0);
				_tmp$25 = 1;
				Properties.copy(p, _tmp$24);
				sz = _tmp$25;
				return [p, sz];
    			}
    			_tmp$26 = new Properties.ptr(trie.lookupValue(((i$2 >>> 0)), c3), 0);
			_tmp$27 = 4;
			Properties.copy(p, _tmp$26);
			sz = _tmp$27;
			return [p, sz];
    		}
    		_tmp$28 = new Properties.ptr(0, 0);
		_tmp$29 = 1;
		Properties.copy(p, _tmp$28);
		sz = _tmp$29;
		return [p, sz];
    	};
	$pkg.LookupString = LookupString;
LookupString2vendor/golang.org/x/text/unicode/bidi.LookupString0vendor/golang.org/x/text/unicode/bidi.Properties/vendor/golang.org/x/text/unicode/bidi.bidiIndex0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~*vendor/golang.org/x/text/unicode/bidi.trie 8(*vendor/golang.org/x/text/unicode/bidi.bidiTrie).lookup ��	bidiTrie.ptr.prototype.lookup = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c0, c1, c1$1, c1$2, c2, c2$1, c3, i, i$1, i$2, o, o$1, s, sz, t, v;
		v = 0;
		sz = 0;
		t = this;
  �Z		c0 = (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]);
    		if (c0 < 128) {
    			_tmp = ((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]);
			_tmp$1 = 1;
			v = _tmp;
			sz = _tmp$1;
			return [v, sz];
    		} else if (c0 < 194) {
    			_tmp$2 = 0;
			_tmp$3 = 1;
			v = _tmp$2;
			sz = _tmp$3;
			return [v, sz];
    		} else if (c0 < 224) {
    			if (s.$length < 2) {
    				_tmp$4 = 0;
				_tmp$5 = 0;
				v = _tmp$4;
				sz = _tmp$5;
				return [v, sz];
    			}
  �:			i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �O			c1 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1 < 128 || 192 <= c1) {
    				_tmp$6 = 0;
				_tmp$7 = 1;
				v = _tmp$6;
				sz = _tmp$7;
				return [v, sz];
    			}
    			_tmp$8 = t.lookupValue(((i >>> 0)), c1);
			_tmp$9 = 2;
			v = _tmp$8;
			sz = _tmp$9;
			return [v, sz];
    		} else if (c0 < 240) {
    			if (s.$length < 3) {
    				_tmp$10 = 0;
				_tmp$11 = 0;
				v = _tmp$10;
				sz = _tmp$11;
				return [v, sz];
    			}
  �(			i$1 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �=			c1$1 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1$1 < 128 || 192 <= c1$1) {
    				_tmp$12 = 0;
				_tmp$13 = 1;
				v = _tmp$12;
				sz = _tmp$13;
				return [v, sz];
    			}
  �			o = (((i$1 >>> 0)) << 6 >>> 0) + ((c1$1 >>> 0)) >>> 0;
  ��			i$1 = ((o < 0 || o >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o]);
  ��			c2 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
    			if (c2 < 128 || 192 <= c2) {
    				_tmp$14 = 0;
				_tmp$15 = 2;
				v = _tmp$14;
				sz = _tmp$15;
				return [v, sz];
    			}
    			_tmp$16 = t.lookupValue(((i$1 >>> 0)), c2);
			_tmp$17 = 3;
			v = _tmp$16;
			sz = _tmp$17;
			return [v, sz];
    		} else if (c0 < 248) {
    			if (s.$length < 4) {
    				_tmp$18 = 0;
				_tmp$19 = 0;
				v = _tmp$18;
				sz = _tmp$19;
				return [v, sz];
    			}
  �			i$2 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  ��			c1$2 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
    			if (c1$2 < 128 || 192 <= c1$2) {
    				_tmp$20 = 0;
				_tmp$21 = 1;
				v = _tmp$20;
				sz = _tmp$21;
				return [v, sz];
    			}
  �3			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c1$2 >>> 0)) >>> 0;
  �T			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  �g			c2$1 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
    			if (c2$1 < 128 || 192 <= c2$1) {
    				_tmp$22 = 0;
				_tmp$23 = 2;
				v = _tmp$22;
				sz = _tmp$23;
				return [v, sz];
    			}
  ��			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c2$1 >>> 0)) >>> 0;
  ��			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  �			c3 = (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]);
    			if (c3 < 128 || 192 <= c3) {
    				_tmp$24 = 0;
				_tmp$25 = 3;
				v = _tmp$24;
				sz = _tmp$25;
				return [v, sz];
    			}
    			_tmp$26 = t.lookupValue(((i$2 >>> 0)), c3);
			_tmp$27 = 4;
			v = _tmp$26;
			sz = _tmp$27;
			return [v, sz];
    		}
    		_tmp$28 = 0;
		_tmp$29 = 1;
		v = _tmp$28;
		sz = _tmp$29;
		return [v, sz];
    	};
	bidiTrie.prototype.lookup = function(s) { return this.$val.lookup(s); };
bidiTrielookup~/vendor/golang.org/x/text/unicode/bidi.bidiIndex.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~ >(*vendor/golang.org/x/text/unicode/bidi.bidiTrie).lookupUnsafe �	bidiTrie.ptr.prototype.lookupUnsafe = function(s) {
		var c0, i, s, t, x, x$1;
		t = this;
  �p		c0 = (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]);
    		if (c0 < 128) {
  �			return ((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]);
    		}
  �		i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
    		if (c0 < 224) {
  ��			return t.lookupValue(((i >>> 0)), (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]));
    		}
  �		i = (x = (((i >>> 0)) << 6 >>> 0) + (((1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]) >>> 0)) >>> 0, ((x < 0 || x >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[x]));
    		if (c0 < 240) {
  �]			return t.lookupValue(((i >>> 0)), (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]));
    		}
  �		i = (x$1 = (((i >>> 0)) << 6 >>> 0) + (((2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]) >>> 0)) >>> 0, ((x$1 < 0 || x$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[x$1]));
    		if (c0 < 248) {
  ��			return t.lookupValue(((i >>> 0)), (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]));
    		}
  ��		return 0;
    	};
	bidiTrie.prototype.lookupUnsafe = function(s) { return this.$val.lookupUnsafe(s); };
bidiTrielookupUnsafe~/vendor/golang.org/x/text/unicode/bidi.bidiIndex.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~ >(*vendor/golang.org/x/text/unicode/bidi.bidiTrie).lookupString ��	bidiTrie.ptr.prototype.lookupString = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c0, c1, c1$1, c1$2, c2, c2$1, c3, i, i$1, i$2, o, o$1, s, sz, t, v;
		v = 0;
		sz = 0;
		t = this;
  �+		c0 = s.charCodeAt(0);
    		if (c0 < 128) {
    			_tmp = ((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]);
			_tmp$1 = 1;
			v = _tmp;
			sz = _tmp$1;
			return [v, sz];
    		} else if (c0 < 194) {
    			_tmp$2 = 0;
			_tmp$3 = 1;
			v = _tmp$2;
			sz = _tmp$3;
			return [v, sz];
    		} else if (c0 < 224) {
    			if (s.length < 2) {
    				_tmp$4 = 0;
				_tmp$5 = 0;
				v = _tmp$4;
				sz = _tmp$5;
				return [v, sz];
    			}
  �			i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  � 			c1 = s.charCodeAt(1);
    			if (c1 < 128 || 192 <= c1) {
    				_tmp$6 = 0;
				_tmp$7 = 1;
				v = _tmp$6;
				sz = _tmp$7;
				return [v, sz];
    			}
    			_tmp$8 = t.lookupValue(((i >>> 0)), c1);
			_tmp$9 = 2;
			v = _tmp$8;
			sz = _tmp$9;
			return [v, sz];
    		} else if (c0 < 240) {
    			if (s.length < 3) {
    				_tmp$10 = 0;
				_tmp$11 = 0;
				v = _tmp$10;
				sz = _tmp$11;
				return [v, sz];
    			}
  ��			i$1 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �			c1$1 = s.charCodeAt(1);
    			if (c1$1 < 128 || 192 <= c1$1) {
    				_tmp$12 = 0;
				_tmp$13 = 1;
				v = _tmp$12;
				sz = _tmp$13;
				return [v, sz];
    			}
  �x			o = (((i$1 >>> 0)) << 6 >>> 0) + ((c1$1 >>> 0)) >>> 0;
  �			i$1 = ((o < 0 || o >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o]);
  �			c2 = s.charCodeAt(2);
    			if (c2 < 128 || 192 <= c2) {
    				_tmp$14 = 0;
				_tmp$15 = 2;
				v = _tmp$14;
				sz = _tmp$15;
				return [v, sz];
    			}
    			_tmp$16 = t.lookupValue(((i$1 >>> 0)), c2);
			_tmp$17 = 3;
			v = _tmp$16;
			sz = _tmp$17;
			return [v, sz];
    		} else if (c0 < 248) {
    			if (s.length < 4) {
    				_tmp$18 = 0;
				_tmp$19 = 0;
				v = _tmp$18;
				sz = _tmp$19;
				return [v, sz];
    			}
  �			i$2 = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
  �			c1$2 = s.charCodeAt(1);
    			if (c1$2 < 128 || 192 <= c1$2) {
    				_tmp$20 = 0;
				_tmp$21 = 1;
				v = _tmp$20;
				sz = _tmp$21;
				return [v, sz];
    			}
  �			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c1$2 >>> 0)) >>> 0;
  �%			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  �8			c2$1 = s.charCodeAt(2);
    			if (c2$1 < 128 || 192 <= c2$1) {
    				_tmp$22 = 0;
				_tmp$23 = 2;
				v = _tmp$22;
				sz = _tmp$23;
				return [v, sz];
    			}
  �			o$1 = (((i$2 >>> 0)) << 6 >>> 0) + ((c2$1 >>> 0)) >>> 0;
  ��			i$2 = ((o$1 < 0 || o$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[o$1]);
  ��			c3 = s.charCodeAt(3);
    			if (c3 < 128 || 192 <= c3) {
    				_tmp$24 = 0;
				_tmp$25 = 3;
				v = _tmp$24;
				sz = _tmp$25;
				return [v, sz];
    			}
    			_tmp$26 = t.lookupValue(((i$2 >>> 0)), c3);
			_tmp$27 = 4;
			v = _tmp$26;
			sz = _tmp$27;
			return [v, sz];
    		}
    		_tmp$28 = 0;
		_tmp$29 = 1;
		v = _tmp$28;
		sz = _tmp$29;
		return [v, sz];
    	};
	bidiTrie.prototype.lookupString = function(s) { return this.$val.lookupString(s); };
bidiTrielookupString~/vendor/golang.org/x/text/unicode/bidi.bidiIndex.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~ D(*vendor/golang.org/x/text/unicode/bidi.bidiTrie).lookupStringUnsafe ��	bidiTrie.ptr.prototype.lookupStringUnsafe = function(s) {
		var c0, i, s, t, x, x$1;
		t = this;
  �M		c0 = s.charCodeAt(0);
    		if (c0 < 128) {
  �v			return ((c0 < 0 || c0 >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[c0]);
    		}
  ��		i = ((c0 < 0 || c0 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[c0]);
    		if (c0 < 224) {
  ��			return t.lookupValue(((i >>> 0)), s.charCodeAt(1));
    		}
  ��		i = (x = (((i >>> 0)) << 6 >>> 0) + ((s.charCodeAt(1) >>> 0)) >>> 0, ((x < 0 || x >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[x]));
    		if (c0 < 240) {
  �:			return t.lookupValue(((i >>> 0)), s.charCodeAt(2));
    		}
  �d		i = (x$1 = (((i >>> 0)) << 6 >>> 0) + ((s.charCodeAt(2) >>> 0)) >>> 0, ((x$1 < 0 || x$1 >= bidiIndex.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiIndex[x$1]));
    		if (c0 < 248) {
  ��			return t.lookupValue(((i >>> 0)), s.charCodeAt(3));
    		}
  ��		return 0;
    	};
	bidiTrie.prototype.lookupStringUnsafe = function(s) { return this.$val.lookupStringUnsafe(s); };
bidiTrielookupStringUnsafe~/vendor/golang.org/x/text/unicode/bidi.bidiIndex.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.bidiValues2vendor/golang.org/x/text/unicode/bidi.lookupValue~ 1vendor/golang.org/x/text/unicode/bidi.newBidiTrie%vendor/golang.org/x/text/unicode/bidinewBidiTrie newBidiTrieQ	newBidiTrie = function(i) {
		var i;
  �p		return new bidiTrie.ptr();
    	};
newBidiTrie.vendor/golang.org/x/text/unicode/bidi.bidiTrie1vendor/golang.org/x/text/unicode/bidi.newBidiTrie =(*vendor/golang.org/x/text/unicode/bidi.bidiTrie).lookupValue �_	bidiTrie.ptr.prototype.lookupValue = function(n, b) {
		var b, n, t, x;
		t = this;
  �!		return ((x = (n << 6 >>> 0) + ((b >>> 0)) >>> 0, ((x < 0 || x >= bidiValues.length) ? ($throwRuntimeError("index out of range"), undefined) : bidiValues[x])));
    	};
	bidiTrie.prototype.lookupValue = function(n, b) { return this.$val.lookupValue(n, b); };
bidiTrielookupValue~.vendor/golang.org/x/text/unicode/bidi.bidiTrie0vendor/golang.org/x/text/unicode/bidi.bidiValues �[�{"Base":183473,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/bidi.go","Base":1,"Size":10565,"Lines":[0,55,109,159,160,217,218,289,292,336,339,419,442,498,499,507,540,592,593,602,611,613,614,695,774,847,879,880,931,950,951,959,1035,1105,1151,1181,1182,1258,1328,1374,1387,1388,1459,1475,1482,1483,1555,1614,1623,1625,1626,1648,1676,1678,1679,1726,1753,1754,1836,1911,1990,2074,2159,2210,2237,2242,2243,2324,2383,2427,2457,2485,2488,2490,2491,2552,2576,2595,2616,2637,2657,2683,2702,2721,2741,2743,2744,2826,2922,2951,2954,3050,3152,3241,3244,3315,3371,3399,3415,3468,3487,3507,3522,3523,3552,3580,3597,3620,3636,3661,3665,3698,3730,3775,3817,3849,3887,3928,3974,4016,4027,4072,4114,4118,4121,4144,4146,4147,4219,4299,4374,4455,4465,4541,4550,4565,4590,4592,4593,4666,4746,4821,4902,4912,4989,5006,5021,5046,5048,5049,5128,5207,5241,5284,5321,5323,5324,5390,5393,5462,5506,5530,5532,5533,5617,5618,5684,5687,5755,5796,5804,5820,5851,5865,5880,5897,5901,5904,5931,5933,5934,5998,6020,6021,6041,6053,6054,6071,6106,6141,6171,6189,6213,6224,6248,6252,6277,6291,6337,6386,6429,6434,6447,6467,6471,6474,6516,6562,6602,6612,6614,6615,6685,6733,6757,6782,6785,6786,6815,6832,6835,6853,6901,6911,6914,6982,6999,7024,7027,7028,7075,7076,7118,7135,7137,7138,7214,7269,7330,7363,7454,7471,7496,7499,7548,7600,7615,7617,7618,7697,7776,7856,7879,7900,7924,7942,7944,7945,7998,8001,8070,8113,8137,8139,8140,8179,8214,8235,8237,8238,8286,8322,8333,8358,8388,8416,8419,8429,8431,8432,8463,8546,8598,8638,8665,8670,8671,8742,8760,8778,8799,8814,8816,8817,8878,8910,8934,8936,8937,8997,9028,9055,9057,9058,9079,9098,9123,9149,9150,9197,9235,9255,9257,9258,9352,9384,9423,9473,9475,9476,9554,9632,9682,9726,9765,9781,9809,9810,9839,9866,9890,9929,9933,9936,9937,9994,10044,10047,10086,10087,10099,10101,10102,10183,10264,10287,10325,10345,10363,10388,10415,10442,10466,10506,10517,10536,10540,10543,10563],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/bracket.go","Base":10567,"Size":11492,"Lines":[0,55,109,159,160,173,174,183,201,208,216,218,219,287,318,401,404,480,493,496,570,584,634,715,794,810,886,960,1034,1037,1118,1191,1260,1315,1316,1344,1400,1452,1455,1510,1563,1585,1586,1594,1621,1629,1638,1640,1641,1717,1748,1774,1786,1798,1800,1801,1841,1893,1895,1896,1977,2009,2010,2070,2140,2219,2220,2296,2299,2378,2458,2537,2540,2619,2697,2751,2772,2799,2831,2860,2891,2894,2909,2930,2945,2948,2997,3044,3046,3047,3075,3134,3135,3211,3215,3283,3345,3417,3459,3532,3600,3686,3771,3844,3845,3917,3990,4068,4145,4220,4256,4257,4319,4320,4385,4413,4414,4486,4562,4563,4565,4566,4643,4660,4742,4813,4815,4816,4843,4844,4912,4915,4992,5072,5148,5233,5254,5323,5358,5359,5408,5473,5497,5509,5513,5541,5556,5601,5644,5665,5676,5681,5731,5757,5758,5774,5804,5818,5886,5898,5929,5975,6042,6113,6163,6195,6237,6244,6255,6261,6266,6296,6357,6380,6384,6387,6389,6390,6466,6543,6566,6569,6643,6717,6791,6819,6822,6890,6966,6985,6988,7063,7080,7083,7159,7235,7249,7252,7278,7281,7307,7310,7338,7341,7412,7480,7555,7631,7707,7783,7811,7814,7840,7843,7875,7878,7904,7907,7933,7936,7980,7983,8059,8133,8209,8220,8223,8251,8252,8332,8347,8350,8407,8466,8502,8556,8577,8588,8597,8608,8618,8630,8633,8635,8636,8717,8760,8763,8842,8913,8916,8972,9057,9076,9124,9154,9171,9183,9187,9210,9267,9271,9291,9294,9363,9383,9385,9386,9464,9523,9588,9628,9674,9688,9692,9695,9733,9747,9749,9750,9817,9916,9959,10008,10009,10062,10063,10134,10192,10212,10249,10252,10253,10279,10343,10378,10422,10487,10509,10513,10516,10574,10644,10658,10659,10703,10752,10754,10755,10853,10895,10937,10938,10986,11010,11044,11053,11057,11091,11094,11095,11147,11171,11205,11214,11218,11252,11255,11257,11258,11317,11397,11436,11487,11490],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/core.go","Base":22060,"Size":30085,"Lines":[0,55,109,159,160,173,174,183,190,197,199,200,281,343,346,404,407,417,496,575,596,599,621,689,692,703,747,750,791,836,865,898,901,970,1042,1115,1191,1270,1339,1342,1422,1496,1576,1652,1723,1775,1778,1857,1937,2014,2091,2170,2171,2250,2330,2378,2394,2395,2426,2427,2484,2523,2548,2562,2577,2581,2584,2598,2600,2601,2651,2675,2697,2698,2766,2830,2920,2921,2972,2973,3001,3023,3045,3046,3116,3188,3266,3288,3307,3308,3378,3456,3504,3536,3538,3539,3618,3695,3775,3852,3928,4008,4070,4183,4198,4243,4261,4264,4315,4333,4336,4400,4418,4421,4485,4503,4506,4507,4525,4575,4601,4602,4627,4653,4654,4701,4704,4713,4728,4730,4731,4792,4793,4866,4935,4963,4994,4995,5034,5094,5112,5182,5222,5290,5293,5294,5353,5394,5439,5440,5478,5495,5533,5534,5547,5621,5696,5761,5785,5786,5800,5868,5926,5955,5973,5998,5999,6034,6047,6076,6077,6110,6128,6156,6157,6201,6220,6250,6251,6292,6320,6323,6324,6398,6471,6504,6545,6547,6548,6622,6651,6654,6673,6676,6708,6711,6785,6864,6940,6975,7049,7129,7209,7232,7282,7320,7371,7372,7417,7454,7457,7458,7490,7514,7515,7565,7586,7624,7676,7696,7721,7765,7792,7832,7844,7851,7857,7862,7893,7924,7929,7933,7936,7938,7939,8019,8077,8080,8155,8218,8295,8332,8333,8346,8378,8423,8441,8450,8484,8541,8557,8592,8597,8601,8604,8617,8638,8672,8734,8745,8754,8765,8784,8795,8798,8800,8801,8822,8823,8895,8907,8944,8969,9010,9051,9091,9093,9094,9162,9228,9299,9300,9395,9442,9498,9552,9570,9572,9573,9635,9683,9685,9686,9759,9807,9809,9810,9881,9928,9930,9931,9980,10037,10071,10144,10145,10158,10199,10200,10235,10276,10289,10331,10367,10399,10400,10454,10471,10548,10553,10571,10622,10675,10737,10743,10748,10749,10771,10785,10810,10862,10874,10900,10953,10958,10959,11048,11067,11092,11098,11161,11176,11239,11256,11271,11285,11325,11339,11379,11392,11433,11439,11474,11494,11528,11534,11546,11603,11657,11676,11704,11731,11767,11798,11805,11811,11816,11817,11831,11843,11876,11903,11941,11959,11971,12002,12050,12067,12073,12089,12113,12118,12168,12169,12182,12194,12228,12278,12279,12312,12330,12372,12401,12476,12492,12497,12498,12532,12547,12548,12615,12667,12684,12712,12742,12767,12807,12808,12819,12869,12921,12982,12987,12991,12994,12996,12997,13032,13046,13047,13096,13097,13163,13233,13255,13277,13279,13280,13347,13348,13382,13394,13405,13408,13418,13420,13421,13520,13575,13655,13679,13711,13740,13770,13773,13774,13804,13832,13896,13909,13912,13943,13963,14002,14005,14006,14027,14056,14089,14120,14130,14185,14218,14293,14294,14298,14329,14352,14389,14393,14396,14433,14464,14478,14498,14516,14534,14587,14640,14643,14645,14646,14683,14686,14756,14769,14821,14822,14860,14943,14944,14957,14979,15012,15041,15057,15096,15107,15140,15172,15177,15207,15211,15214,15215,15228,15295,15324,15339,15372,15413,15431,15453,15460,15471,15477,15482,15486,15489,15490,15503,15532,15547,15565,15569,15572,15573,15586,15656,15709,15713,15780,15845,15914,15982,16050,16114,16184,16232,16233,16267,16285,16311,16342,16373,16420,16440,16514,16534,16539,16543,16546,16547,16560,16589,16604,16633,16650,16692,16693,16732,16746,16767,16795,16800,16816,16830,16861,16886,16892,16897,16913,16956,16961,16995,17009,17013,17016,17017,17030,17059,17083,17102,17106,17109,17110,17123,17152,17167,17210,17237,17270,17289,17346,17370,17381,17387,17392,17420,17439,17444,17448,17451,17453,17454,17497,17552,17553,17606,17668,17669,17698,17711,17752,17789,17806,17878,17879,17926,17959,17960,18021,18031,18053,18074,18086,18121,18150,18168,18174,18179,18210,18232,18244,18276,18306,18325,18331,18336,18337,18363,18393,18409,18437,18449,18465,18523,18561,18602,18607,18608,18660,18661,18702,18716,18720,18723,18725,18726,18775,18800,18823,18826,18828,18829,18875,18899,18920,18923,18925,18926,18982,19039,19040,19093,19121,19122,19170,19208,19209,19248,19278,19293,19308,19325,19347,19376,19410,19439,19444,19448,19471,19501,19516,19531,19548,19592,19621,19626,19630,19633,19635,19636,19699,19722,19777,19808,19842,19886,19889,19891,19892,19964,20034,20077,20157,20163,20202,20224,20259,20278,20296,20301,20305,20355,20358,20379,20381,20382,20450,20467,20527,20533,20562,20590,20605,20623,20628,20632,20723,20726,20728,20729,20801,20860,20863,20936,21011,21052,21103,21119,21141,21172,21173,21206,21247,21289,21344,21409,21445,21460,21466,21487,21524,21529,21553,21557,21560,21594,21613,21646,21649,21665,21667,21668,21723,21802,21839,21840,21891,21932,21965,21995,22025,22029,22032,22033,22073,22074,22104,22105,22138,22156,22235,22263,22282,22291,22342,22402,22403,22461,22495,22562,22621,22634,22645,22651,22656,22733,22737,22740,22758,22760,22761,22835,22910,22986,23022,23082,23118,23159,23183,23209,23213,23216,23277,23345,23389,23390,23420,23459,23462,23506,23537,23580,23584,23587,23663,23677,23679,23680,23683,23693,23696,23697,23773,23785,23788,23864,23940,24011,24069,24129,24194,24258,24316,24320,24389,24450,24508,24568,24613,24614,24655,24656,24707,24708,24774,24834,24856,24892,24910,24946,24978,24979,25008,25041,25108,25142,25155,25166,25172,25177,25181,25184,25185,25211,25223,25259,25299,25365,25398,25410,25420,25425,25429,25445,25448,25449,25464,25466,25467,25541,25596,25599,25671,25719,25722,25772,25775,25848,25923,25983,25986,26062,26138,26209,26269,26310,26311,26383,26385,26386,26459,26498,26572,26608,26609,26621,26657,26700,26735,26736,26792,26827,26831,26847,26850,26865,26867,26868,26943,27012,27066,27113,27149,27170,27195,27211,27214,27215,27255,27324,27362,27388,27427,27459,27487,27511,27515,27561,27587,27591,27594,27595,27658,27695,27722,27771,27786,27805,27861,27874,27880,27881,27938,27987,27993,28025,28039,28044,28048,28051,28052,28067,28069,28070,28151,28172,28206,28218,28277,28291,28294,28308,28310,28311,28388,28423,28435,28470,28484,28487,28501,28503,28504,28581,28620,28645,28656,28659,28669,28671,28672,28714,28736,28773,28776,28818,28832,28903,28907,28910,28922,28924,28925,28992,29031,29056,29080,29157,29160,29172,29174,29175,29241,29252,29287,29307,29371,29375,29389,29392,29417,29489,29492,29504,29506,29507,29561,29587,29628,29631,29663,29677,29709,29720,29794,29798,29801,29813,29815,29816,29890,29914,29956,29959,29999,30068,30071,30083],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/prop.go","Base":52146,"Size":5862,"Lines":[0,55,109,159,160,173,174,196,197,256,281,294,307,309,310,336,337,417,492,503,506,581,655,701,734,739,740,779,815,843,862,899,902,912,914,915,967,1033,1034,1102,1133,1210,1211,1250,1300,1344,1346,1347,1383,1425,1467,1510,1553,1596,1637,1678,1719,1763,1765,1766,1806,1857,1874,1907,1931,1933,1934,2015,2094,2169,2247,2326,2407,2482,2561,2582,2662,2676,2704,2763,2824,2825,2904,2984,3001,3048,3060,3070,3099,3145,3162,3187,3220,3238,3264,3268,3289,3302,3333,3359,3363,3426,3459,3477,3503,3507,3528,3541,3572,3598,3602,3635,3654,3667,3698,3724,3728,3801,3834,3852,3878,3882,3903,3916,3947,3973,3977,4010,4029,4042,4073,4099,4103,4135,4154,4167,4198,4224,4228,4291,4294,4311,4335,4337,4338,4414,4494,4520,4573,4585,4595,4624,4670,4687,4712,4745,4763,4789,4793,4814,4827,4858,4884,4888,4951,4984,5002,5028,5032,5053,5066,5097,5123,5127,5160,5179,5192,5223,5249,5253,5326,5359,5377,5403,5407,5428,5441,5472,5498,5502,5535,5554,5567,5598,5624,5628,5660,5679,5692,5723,5749,5753,5816,5819,5836,5860],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/tables13.0.0.go","Base":58009,"Size":123812,"Lines":[0,78,79,97,114,115,128,129,221,253,254,327,339,377,405,425,426,497,570,648,704,716,726,755,782,799,857,890,908,923,927,948,961,992,1050,1054,1095,1128,1146,1161,1165,1186,1199,1230,1288,1292,1325,1344,1357,1388,1446,1450,1491,1524,1542,1557,1561,1582,1595,1626,1684,1688,1721,1740,1753,1784,1842,1846,1878,1897,1910,1941,1999,2003,2044,2047,2064,2077,2079,2080,2154,2212,2262,2274,2302,2326,2329,2349,2381,2421,2424,2466,2498,2538,2541,2583,2615,2655,2658,2668,2670,2671,2748,2821,2899,2961,2973,2983,3012,3039,3056,3114,3147,3165,3180,3184,3205,3218,3249,3307,3311,3352,3385,3403,3418,3422,3443,3456,3487,3545,3549,3582,3601,3614,3645,3703,3707,3748,3781,3799,3814,3818,3839,3852,3883,3941,3945,3978,3997,4010,4041,4099,4103,4135,4154,4167,4198,4256,4260,4301,4304,4321,4334,4336,4337,4417,4475,4531,4543,4571,4595,4598,4618,4650,4690,4693,4735,4767,4807,4810,4852,4884,4924,4927,4937,4939,4940,5018,5041,5042,5078,5098,5100,5101,5177,5234,5244,5254,5297,5300,5302,5303,5357,5395,5426,5452,5537,5622,5707,5792,5877,5962,6047,6132,6217,6302,6359,6386,6401,6444,6487,6502,6559,6586,6613,6698,6783,6868,6953,7038,7123,7208,7279,7350,7421,7478,7506,7522,7538,7566,7597,7625,7686,7777,7838,7929,8020,8051,8127,8203,8294,8385,8446,8474,8565,8656,8747,8838,8929,9020,9111,9202,9293,9384,9445,9473,9564,9655,9746,9837,9928,10019,10110,10201,10232,10248,10276,10307,10323,10351,10367,10395,10441,10502,10530,10546,10622,10713,10804,10895,10986,11077,11168,11259,11320,11348,11439,11530,11621,11712,11803,11894,11985,12076,12167,12258,12319,12347,12438,12529,12620,12711,12802,12893,12984,13075,13166,13257,13318,13346,13437,13528,13619,13710,13801,13892,13983,14074,14165,14256,14317,14346,14437,14528,14619,14710,14801,14892,14983,15074,15165,15256,15317,15346,15437,15528,15619,15710,15801,15892,15983,16074,16165,16256,16317,16346,16437,16528,16619,16710,16801,16892,16983,17074,17165,17256,17317,17346,17437,17528,17619,17710,17801,17892,17983,18074,18165,18256,18317,18346,18437,18528,18619,18710,18801,18892,18983,19074,19165,19256,19317,19346,19437,19528,19619,19710,19801,19892,19983,20074,20165,20256,20317,20346,20437,20528,20619,20710,20801,20892,20983,21074,21165,21256,21317,21346,21437,21528,21619,21710,21801,21892,21983,22074,22165,22256,22317,22346,22437,22528,22619,22710,22801,22892,22983,23074,23165,23256,23317,23346,23437,23528,23619,23710,23801,23892,23983,24074,24165,24256,24317,24346,24392,24408,24424,24453,24529,24575,24606,24697,24728,24757,24773,24789,24818,24879,24895,24926,24957,24973,24989,25018,25049,25065,25094,25125,25171,25217,25263,25292,25368,25399,25415,25446,25462,25493,25554,25583,25599,25630,25659,25720,25736,25767,25798,25827,25843,25872,25888,25904,25950,26026,26055,26086,26117,26146,26162,26238,26269,26300,26331,26392,26438,26467,26498,26529,26558,26589,26605,26621,26650,26711,26727,26758,26787,26803,26832,26848,26909,26938,26984,27060,27076,27105,27181,27227,27256,27302,27393,27409,27438,27499,27530,27559,27590,27606,27667,27698,27727,27803,27894,27940,27969,28045,28076,28152,28243,28319,28410,28501,28592,28683,28774,28790,28819,28835,28864,28910,28986,29047,29078,29107,29138,29184,29245,29274,29305,29321,29337,29353,29382,29398,29429,29458,29489,29580,29611,29640,29656,29685,29701,29732,29761,29807,29853,29882,29913,29944,29973,30004,30080,30111,30140,30201,30292,30323,30354,30445,30506,30535,30626,30717,30763,30793,30810,30827,30844,30874,30923,30956,30973,31022,31052,31101,31131,31228,31325,31422,31519,31616,31681,31711,31728,31761,31791,31808,31905,31954,32035,32084,32133,32230,32263,32293,32390,32487,32552,32582,32599,32629,32694,32711,32792,32809,32839,32856,32937,33002,33032,33065,33098,33163,33212,33242,33291,33324,33357,33387,33452,33517,33550,33580,33613,33694,33791,33872,33953,33970,33987,34020,34050,34147,34244,34341,34438,34535,34632,34729,34826,34923,35004,35069,35099,35132,35162,35195,35244,35261,35294,35343,35376,35406,35503,35600,35681,35778,35875,35972,36069,36166,36263,36360,36425,36455,36552,36649,36746,36843,36940,37037,37134,37231,37280,37377,37426,37456,37553,37650,37699,37764,37861,37958,38055,38152,38217,38247,38344,38441,38538,38635,38732,38829,38926,39023,39040,39070,39151,39200,39249,39266,39363,39412,39429,39462,39492,39573,39606,39671,39768,39865,39898,39928,39977,40010,40107,40204,40301,40398,40495,40592,40689,40754,40784,40881,40978,41075,41172,41269,41366,41463,41560,41657,41754,41819,41849,41946,42043,42140,42237,42334,42431,42528,42625,42722,42819,42884,42914,43011,43108,43205,43302,43399,43496,43593,43690,43787,43817,43834,43899,43929,44026,44123,44220,44301,44398,44495,44592,44689,44786,44883,44948,44978,45075,45172,45269,45366,45463,45560,45609,45639,45736,45817,45882,45979,46076,46173,46270,46335,46365,46462,46559,46656,46753,46818,46848,46945,47042,47139,47204,47234,47331,47428,47525,47622,47719,47816,47913,47994,48091,48188,48253,48283,48380,48477,48574,48671,48768,48865,48962,49059,49156,49253,49318,49348,49445,49542,49639,49736,49833,49930,50027,50124,50221,50318,50383,50413,50510,50607,50704,50801,50898,50995,51092,51189,51286,51383,51448,51478,51575,51672,51769,51866,51963,52060,52157,52254,52351,52448,52513,52543,52640,52737,52834,52931,53028,53125,53222,53319,53384,53481,53546,53576,53673,53770,53867,53948,54045,54142,54239,54336,54433,54530,54595,54625,54706,54739,54772,54821,54886,54916,54933,54963,55028,55125,55222,55319,55416,55481,55511,55608,55705,55802,55899,55996,56093,56190,56287,56384,56481,56546,56576,56673,56770,56867,56884,56914,57011,57108,57205,57302,57383,57480,57577,57674,57771,57868,57933,57963,58060,58157,58254,58351,58448,58545,58642,58739,58804,58834,58931,59028,59125,59190,59287,59384,59414,59495,59560,59657,59754,59851,59900,59965,59982,60015,60064,60094,60159,60176,60206,60223,60253,60350,60447,60544,60641,60738,60835,60865,60882,60899,60929,60962,61059,61156,61189,61238,61268,61349,61446,61511,61541,61606,61636,61701,61731,61764,61781,61811,61844,61941,62038,62135,62232,62329,62426,62523,62588,62618,62715,62732,62762,62811,62841,62858,62955,63052,63117,63147,63180,63210,63243,63273,63370,63467,63564,63661,63758,63823,63853,63870,63900,63917,63950,64015,64064,64097,64127,64160,64193,64223,64256,64321,64418,64515,64548,64565,64595,64660,64725,64755,64836,64933,64963,65012,65029,65094,65127,65157,65174,65204,65221,65302,65351,65368,65398,65415,65432,65449,65479,65544,65577,65610,65640,65657,65690,65707,65737,65770,65800,65833,65850,65880,65897,65994,66091,66188,66285,66382,66447,66477,66574,66671,66768,66865,66962,67059,67156,67253,67350,67447,67512,67542,67639,67736,67833,67930,68027,68124,68221,68318,68415,68512,68577,68607,68704,68801,68898,68995,69092,69189,69286,69383,69480,69577,69642,69672,69769,69866,69963,70060,70093,70158,70255,70352,70449,70546,70611,70641,70738,70835,70932,71013,71110,71207,71288,71321,71418,71515,71580,71610,71707,71804,71901,71998,72095,72192,72289,72386,72483,72580,72645,72675,72756,72853,72950,73047,73144,73193,73210,73275,73305,73322,73371,73468,73501,73531,73596,73677,73758,73855,73952,74017,74047,74064,74094,74191,74288,74337,74434,74515,74532,74562,74579,74609,74674,74771,74868,74965,75062,75092,75173,75203,75300,75397,75494,75591,75688,75785,75882,75979,76076,76173,76238,76268,76365,76462,76559,76656,76753,76850,76947,77044,77141,77238,77303,77333,77430,77527,77624,77721,77818,77915,78012,78109,78206,78303,78368,78398,78495,78592,78689,78786,78883,78980,79077,79174,79271,79368,79433,79463,79560,79657,79754,79851,79948,80045,80142,80239,80336,80433,80498,80528,80625,80722,80819,80916,81013,81110,81207,81304,81401,81498,81563,81593,81690,81787,81884,81981,82078,82175,82272,82369,82466,82563,82628,82658,82755,82852,82949,83046,83143,83240,83337,83434,83531,83628,83693,83723,83820,83917,84014,84111,84208,84305,84402,84499,84596,84693,84758,84788,84885,84982,85079,85176,85273,85370,85467,85564,85661,85758,85823,85853,85870,85935,86000,86030,86127,86144,86241,86338,86435,86468,86485,86515,86548,86597,86646,86676,86725,86774,86855,86936,86966,86983,87013,87046,87143,87192,87222,87271,87304,87334,87351,87400,87433,87450,87480,87513,87610,87627,87657,87674,87739,87788,87869,87899,87964,88029,88059,88108,88125,88142,88172,88221,88286,88303,88333,88382,88412,88477,88526,88556,88573,88606,88636,88685,88766,88799,88829,88846,88911,89008,89057,89087,89120,89217,89234,89264,89281,89346,89427,89460,89490,89507,89604,89669,89699,89716,89749,89779,89796,89826,89891,89924,89941,89971,90052,90101,90150,90215,90264,90294,90311,90328,90409,90458,90488,90521,90618,90699,90732,90762,90859,90940,90973,91003,91100,91197,91294,91359,91456,91521,91538,91568,91649,91682,91731,91761,91858,91875,91905,91938,91971,92001,92034,92064,92113,92210,92307,92404,92501,92534,92564,92645,92675,92772,92789,92819,92836,92866,92915,92932,92962,92979,92996,93026,93043,93124,93154,93203,93252,93349,93414,93444,93509,93606,93671,93701,93798,93828,93925,94022,94119,94200,94230,94247,94277,94294,94324,94341,94371,94388,94418,94435,94500,94597,94694,94791,94888,94985,95082,95179,95244,95274,95371,95468,95565,95662,95759,95856,95953,96050,96147,96180,96245,96275,96372,96469,96566,96663,96760,96857,96954,97003,97020,97050,97067,97116,97197,97294,97391,97421,97518,97599,97696,97793,97858,97939,98020,98037,98067,98132,98149,98179,98276,98373,98470,98567,98664,98761,98858,98955,99052,99149,99214,99244,99341,99438,99535,99632,99729,99826,99923,100020,100117,100214,100279,100309,100406,100503,100600,100697,100794,100891,100988,101085,101182,101279,101344,101374,101471,101568,101665,101762,101859,101956,102053,102150,102247,102344,102409,102439,102536,102633,102730,102827,102924,103021,103118,103151,103248,103345,103410,103440,103537,103634,103731,103764,103829,103926,104007,104088,104185,104250,104280,104361,104458,104539,104636,104733,104830,104927,105024,105121,105151,105248,105345,105410,105427,105457,105554,105584,105601,105631,105696,105729,105759,105856,105953,106050,106147,106212,106309,106358,106455,106552,106569,106599,106696,106793,106890,106987,107004,107069,107166,107199,107229,107326,107423,107456,107553,107650,107747,107844,107941,108038,108135,108200,108230,108327,108360,108393,108490,108523,108588,108685,108782,108879,108976,109041,109071,109168,109201,109234,109331,109428,109525,109622,109687,109720,109750,109847,109944,110041,110138,110235,110332,110429,110526,110623,110704,110769,110799,110896,110993,111074,111171,111268,111365,111462,111559,111656,111753,111818,111848,111945,112042,112139,112172,112237,112334,112399,112480,112529,112559,112656,112673,112706,112803,112900,112997,113078,113175,113192,113222,113271,113304,113385,113415,113512,113609,113706,113787,113884,113981,114078,114175,114272,114369,114434,114464,114561,114642,114739,114804,114834,114867,114897,114994,115091,115188,115285,115382,115479,115576,115673,115770,115867,115932,115962,116059,116156,116253,116350,116447,116544,116641,116738,116835,116932,116997,116999,117000,117050,117080,117109,117135,117162,117189,117216,117241,117314,117351,117448,117509,117534,117595,117623,117728,117833,117938,118043,118071,118111,118138,118152,118218,118284,118389,118429,118456,118484,118589,118694,118799,118904,118957,119062,119102,119207,119235,119288,119367,119395,119409,119437,119464,119543,119635,119714,119742,119795,119900,119992,120020,120073,120100,120205,120310,120415,120520,120548,120640,120693,120772,120825,120878,120918,120984,121011,121039,121066,121106,121134,121148,121176,121203,121256,121322,121362,121391,121418,121432,121537,121642,121747,121852,121881,121973,122039,122144,122249,122341,122446,122460,122489,122503,122532,122572,122625,122639,122653,122682,122696,122710,122724,122738,122767,122872,122977,123082,123187,123292,123397,123502,123607,123636,123650,123664,123678,123692,123706,123735,123749,123751,123752],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/text/unicode/bidi/trieval.go","Base":181822,"Size":1650,"Lines":[0,78,79,92,93,159,175,176,184,221,258,298,341,385,423,464,508,550,586,624,665,705,743,786,787,797,798,826,854,883,912,941,968,995,1022,1052,1053,1079,1081,1082,1119,1157,1195,1234,1273,1312,1349,1386,1423,1463,1465,1466,1506,1537,1580,1600,1601,1609,1630,1648],"Infos":null}]}
 