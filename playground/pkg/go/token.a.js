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
GoLinkname�� Implementation�� 	Reference��   ��l��go/tokentokenfmt#github.com/gopherjs/gopherjs/nosyncsortstrconvunicodeunicode/utf8��i �	�Token setFileSetnamebasesizemutexMutex#github.com/gopherjs/gopherjs/nosynclinesinfoslineInfoNamefFileBaseSize	LineCountAddLineoffset	MergeLinelineSetLinesSetLinesForContentcontent	LineStartPosAddLineInfofilenameAddLineColumnInfocolumnOffsetpLineunpackadjustedpositionposPositionPositionForRWMutexfileslastsAddFileIteratefileReaddecodeWriteencodeidentIsValidFilenameColumnStringtok
Precedenceop	IsLiteral
IsOperator	IsKeywordlockedLockmUnlockwriteLockedreadLockCounterrwRLockRUnlocktokenADD
ADD_ASSIGNAND
AND_ASSIGNAND_NOTAND_NOT_ASSIGNARROWASSIGNBREAKCASECHANCHARCOLONCOMMACOMMENTCONSTCONTINUEDECDEFAULTDEFERDEFINEELLIPSISELSEEOFEQLFALLTHROUGHFLOATFORFUNCGEQGOGOTOGTRHighestPrecIDENTIFILLEGALIMAGIMPORTINCINT	INTERFACE
IsExportedIsIdentifierLANDLBRACELBRACKLEQLORLPARENLSSLookup
LowestPrecMAPMUL
MUL_ASSIGNNEQNOT
NewFileSetNoPosOR	OR_ASSIGNPACKAGEPERIODQUO
QUO_ASSIGNRANGERBRACERBRACKREM
REM_ASSIGNRETURNRPARENSELECT	SEMICOLONSHL
SHL_ASSIGNSHR
SHR_ASSIGNSTRINGSTRUCTSUB
SUB_ASSIGNSWITCHTYPE	UnaryPrecVARXOR
XOR_ASSIGNnosync  C  C  .C  "C  8C  ,C  BC  HC  TC  zC  |C  ~C  C  tC  hC  C  �C  �C  LC  �C  �C  ^C  `C  �C  C  NC  �C  C  �C  � � (. ^� �        "�  R�  X�  n��������� �������� ���T � g l�   s l�   x l�   } l�   � l� �   � l� �   � l� R�    � l� ��   � l� � �  � l� � � �   � l� � � � �   � l� � �  � l� ��   � l� ��   � l� � �  � � �  � l� �� �  ��  � l� �� �  ��  � l� �� ��  �.��� "�    ��  �� ����� �   �������   �  �   �  T �	 s ��   � �� �   �  � �� l�   � �� �� �  n �� �� l�  � �� �� �  ��  � �� �� ��  � �� ��   � �� ��  C  \C  �C  �C  RC C  C  �C   C  C  �C  JC  
C  �F     F     F     C  DC  fC  dC  ZC  FC  bC  PF  �   C  C  �C  C  2C  XC  V�F   �C � C  $C  :C  �C  jT  � ��    �  �  �  � �T � � ��    � ��  C  C  4C  �C  pC  nC   C  6C  �C  lC  �C  rC  (C  >C  *C  @C  C  �C  C  0C  �C  �T  � �    � �    � �     � �     � �    C C  �C  &C  <. �  ��T �
 � ��
   � ��
   �  �  �  � T �
 . �   � ����T �
 � ��   � ��   � ��   � ��  � `���������#�'�+�/�3�7�;�?�C�G�K�O�S�W�[�_�c�g�k�o�sn����������������������������������������������������������������������������������������	��	��	��	��	��	��	��	��	��	��	��	��	��	��	��	��	 �	��
��
��
��
^�
.�	 (�
��
H fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  nosync<	nosync = $packages["github.com/gopherjs/gopherjs/nosync"];
��    		$r = nosync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Position��	Position = $pkg.Position = $newType(0, $kindStruct, "token.Position", true, "go/token", true, function(Filename_, Offset_, Line_, Column_) {
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
	ptrType$2.methods = [{prop: "IsValid", name: "IsValid", pkg: "", typ: $funcType([], [$Bool], false)}];
�u	Position.init("", [{prop: "Filename", name: "Filename", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Column", name: "Column", embedded: false, exported: true, typ: $Int, tag: ""}]);
Positiongo/token.Positiongo/token.ptrType$2  PosT	Pos = $pkg.Pos = $newType(4, $kindInt, "token.Pos", true, "go/token", true, null);
b	Pos.methods = [{prop: "IsValid", name: "IsValid", pkg: "", typ: $funcType([], [$Bool], false)}];
Posgo/token.Pos  File�3	File = $pkg.File = $newType(0, $kindStruct, "token.File", true, "go/token", true, function(set_, name_, base_, size_, mutex_, lines_, infos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.set = ptrType$1.nil;
			this.name = "";
			this.base = 0;
			this.size = 0;
			this.mutex = new nosync.Mutex.ptr(false);
			this.lines = sliceType$1.nil;
			this.infos = sliceType$3.nil;
			return;
		}
		this.set = set_;
		this.name = name_;
		this.base = base_;
		this.size = size_;
		this.mutex = mutex_;
		this.lines = lines_;
		this.infos = infos_;
	});
�p	ptrType.methods = [{prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Base", name: "Base", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "LineCount", name: "LineCount", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "AddLine", name: "AddLine", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "MergeLine", name: "MergeLine", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "SetLines", name: "SetLines", pkg: "", typ: $funcType([sliceType$1], [$Bool], false)}, {prop: "SetLinesForContent", name: "SetLinesForContent", pkg: "", typ: $funcType([sliceType$5], [], false)}, {prop: "LineStart", name: "LineStart", pkg: "", typ: $funcType([$Int], [Pos], false)}, {prop: "AddLineInfo", name: "AddLineInfo", pkg: "", typ: $funcType([$Int, $String, $Int], [], false)}, {prop: "AddLineColumnInfo", name: "AddLineColumnInfo", pkg: "", typ: $funcType([$Int, $String, $Int, $Int], [], false)}, {prop: "Pos", name: "Pos", pkg: "", typ: $funcType([$Int], [Pos], false)}, {prop: "Offset", name: "Offset", pkg: "", typ: $funcType([Pos], [$Int], false)}, {prop: "Line", name: "Line", pkg: "", typ: $funcType([Pos], [$Int], false)}, {prop: "unpack", name: "unpack", pkg: "go/token", typ: $funcType([$Int, $Bool], [$String, $Int, $Int], false)}, {prop: "position", name: "position", pkg: "go/token", typ: $funcType([Pos, $Bool], [Position], false)}, {prop: "PositionFor", name: "PositionFor", pkg: "", typ: $funcType([Pos, $Bool], [Position], false)}, {prop: "Position", name: "Position", pkg: "", typ: $funcType([Pos], [Position], false)}];
��	File.init("go/token", [{prop: "set", name: "set", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "base", name: "base", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "size", name: "size", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "mutex", name: "mutex", embedded: false, exported: false, typ: nosync.Mutex, tag: ""}, {prop: "lines", name: "lines", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "infos", name: "infos", embedded: false, exported: false, typ: sliceType$3, tag: ""}]);
File	)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.Filego/token.Posgo/token.Positiongo/token.ptrTypego/token.ptrType$1go/token.sliceType$1go/token.sliceType$3go/token.sliceType$5  lineInfo��	lineInfo = $pkg.lineInfo = $newType(0, $kindStruct, "token.lineInfo", true, "go/token", false, function(Offset_, Filename_, Line_, Column_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Offset = 0;
			this.Filename = "";
			this.Line = 0;
			this.Column = 0;
			return;
		}
		this.Offset = Offset_;
		this.Filename = Filename_;
		this.Line = Line_;
		this.Column = Column_;
	});
�u	lineInfo.init("", [{prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Filename", name: "Filename", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Column", name: "Column", embedded: false, exported: true, typ: $Int, tag: ""}]);
lineInfogo/token.lineInfo  FileSet��	FileSet = $pkg.FileSet = $newType(0, $kindStruct, "token.FileSet", true, "go/token", true, function(mutex_, base_, files_, last_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mutex = new nosync.RWMutex.ptr(false, 0);
			this.base = 0;
			this.files = sliceType$2.nil;
			this.last = ptrType.nil;
			return;
		}
		this.mutex = mutex_;
		this.base = base_;
		this.files = files_;
		this.last = last_;
	});
�0	ptrType$1.methods = [{prop: "Base", name: "Base", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "AddFile", name: "AddFile", pkg: "", typ: $funcType([$String, $Int, $Int], [ptrType], false)}, {prop: "Iterate", name: "Iterate", pkg: "", typ: $funcType([funcType], [], false)}, {prop: "file", name: "file", pkg: "go/token", typ: $funcType([Pos], [ptrType], false)}, {prop: "File", name: "File", pkg: "", typ: $funcType([Pos], [ptrType], false)}, {prop: "PositionFor", name: "PositionFor", pkg: "", typ: $funcType([Pos, $Bool], [Position], false)}, {prop: "Position", name: "Position", pkg: "", typ: $funcType([Pos], [Position], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([funcType$1], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([funcType$1], [$error], false)}];
��	FileSet.init("go/token", [{prop: "mutex", name: "mutex", embedded: false, exported: false, typ: nosync.RWMutex, tag: ""}, {prop: "base", name: "base", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "files", name: "files", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "last", name: "last", embedded: false, exported: false, typ: ptrType, tag: ""}]);
FileSet	+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.FileSetgo/token.Posgo/token.Positiongo/token.funcTypego/token.funcType$1go/token.ptrTypego/token.ptrType$1go/token.sliceType$2  serializedFile��	serializedFile = $pkg.serializedFile = $newType(0, $kindStruct, "token.serializedFile", true, "go/token", false, function(Name_, Base_, Size_, Lines_, Infos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Base = 0;
			this.Size = 0;
			this.Lines = sliceType$1.nil;
			this.Infos = sliceType$3.nil;
			return;
		}
		this.Name = Name_;
		this.Base = Base_;
		this.Size = Size_;
		this.Lines = Lines_;
		this.Infos = Infos_;
	});
��	serializedFile.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Base", name: "Base", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Size", name: "Size", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Lines", name: "Lines", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "Infos", name: "Infos", embedded: false, exported: true, typ: sliceType$3, tag: ""}]);
serializedFilego/token.serializedFilego/token.sliceType$1go/token.sliceType$3  serializedFileSet�<	serializedFileSet = $pkg.serializedFileSet = $newType(0, $kindStruct, "token.serializedFileSet", true, "go/token", false, function(Base_, Files_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Base = 0;
			this.Files = sliceType$4.nil;
			return;
		}
		this.Base = Base_;
		this.Files = Files_;
	});
��	serializedFileSet.init("", [{prop: "Base", name: "Base", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Files", name: "Files", embedded: false, exported: true, typ: sliceType$4, tag: ""}]);
serializedFileSetgo/token.serializedFileSetgo/token.sliceType$4  TokenZ	Token = $pkg.Token = $newType(4, $kindInt, "token.Token", true, "go/token", true, null);
��	Token.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Precedence", name: "Precedence", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "IsLiteral", name: "IsLiteral", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "IsOperator", name: "IsOperator", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "IsKeyword", name: "IsKeyword", pkg: "", typ: $funcType([], [$Bool], false)}];
Tokengo/token.Token  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1!	sliceType$1 = $sliceType($Int);
sliceType$1  ptrType	ptrType = $ptrType(File);
ptrTypego/token.File  sliceType$2$	sliceType$2 = $sliceType(ptrType);
sliceType$2go/token.ptrType  	ptrType$1 	ptrType$1 = $ptrType(FileSet);
	ptrType$1go/token.FileSet  sliceType$3%	sliceType$3 = $sliceType(lineInfo);
sliceType$3go/token.lineInfo  sliceType$4+	sliceType$4 = $sliceType(serializedFile);
sliceType$4go/token.serializedFile  	ptrType$2!	ptrType$2 = $ptrType(Position);
	ptrType$2go/token.Position  sliceType$5#	sliceType$5 = $sliceType($Uint8);
sliceType$5  funcType2	funcType = $funcType([ptrType], [$Bool], false);
funcTypego/token.ptrType  
funcType$1=	funcType$1 = $funcType([$emptyInterface], [$error], false);

funcType$1  tokenstokens  keywords		keywords = false;
keywordsgo/token.keywords  ��  Q�		tokens = $toNativeArray($kindString, ["ILLEGAL", "EOF", "COMMENT", "", "IDENT", "INT", "FLOAT", "IMAG", "CHAR", "STRING", "", "", "+", "-", "*", "/", "%", "&", "|", "^", "<<", ">>", "&^", "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=", "<<=", ">>=", "&^=", "&&", "||", "<-", "++", "--", "==", "<", ">", "=", "!", "!=", "<=", ">=", ":=", "...", "(", "[", "{", ",", ".", ")", "]", "}", ";", ":", "", "", "break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"]);
tokensgo/token.tokens (*go/token.Position).IsValid ��	Position.ptr.prototype.IsValid = function() {
		var pos;
		pos = this;
  �		return pos.Line > 0;
    	};
	Position.prototype.IsValid = function() { return this.$val.IsValid(); };
Positiongo/token.Position (go/token.Position).String ��	Position.ptr.prototype.String = function() {
		var _r, _r$1, pos, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; pos = $f.pos; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = this;
  �		s = pos.Filename;
  		/* */ if (pos.IsValid()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (pos.IsValid()) { */ case 1:
    			if (!(s === "")) {
  -				s = s + (":");
    			}
  <			_r = fmt.Sprintf("%d", new sliceType([new $Int(pos.Line)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			s = s + (_r);
  _			/* */ if (!((pos.Column === 0))) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!((pos.Column === 0))) { */ case 4:
  w				_r$1 = fmt.Sprintf(":%d", new sliceType([new $Int(pos.Column)])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				s = s + (_r$1);
    			/* } */ case 5:
    		/* } */ case 2:
    		if (s === "") {
  �			s = "-";
    		}
  �		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Position.ptr.prototype.String }; } $f._r = _r; $f._r$1 = _r$1; $f.pos = pos; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Position.prototype.String = function() { return this.$val.String(); };
Positionfmt.Sprintfgo/token.Positiongo/token.sliceType (go/token.Pos).IsValid ��	Pos.prototype.IsValid = function() {
		var p;
		p = this.$val;
  W		return !((p === 0));
    	};
	$ptrType(Pos).prototype.IsValid = function() { return new Pos(this.$get()).IsValid(); };
Posgo/token.Pos (*go/token.File).Name ��	File.ptr.prototype.Name = function() {
		var f;
		f = this;
  !		return f.name;
    	};
	File.prototype.Name = function() { return this.$val.Name(); };
Filego/token.File (*go/token.File).Base ��	File.ptr.prototype.Base = function() {
		var f;
		f = this;
  �		return f.base;
    	};
	File.prototype.Base = function() { return this.$val.Base(); };
Filego/token.File (*go/token.File).Size ��	File.ptr.prototype.Size = function() {
		var f;
		f = this;
  		return f.size;
    	};
	File.prototype.Size = function() { return this.$val.Size(); };
Filego/token.File (*go/token.File).LineCount ��	File.ptr.prototype.LineCount = function() {
		var f, n;
		f = this;
  i		f.mutex.Lock();
  y		n = f.lines.$length;
  �		f.mutex.Unlock();
  �		return n;
    	};
	File.prototype.LineCount = function() { return this.$val.LineCount(); };
Filego/token.File (*go/token.File).AddLine �	File.ptr.prototype.AddLine = function(offset) {
		var f, i, offset, x, x$1;
		f = this;
  �		f.mutex.Lock();
  �		i = f.lines.$length;
    		if (((i === 0) || (x = f.lines, x$1 = i - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])) < offset) && offset < f.size) {
  �			f.lines = $append(f.lines, offset);
    		}
  		f.mutex.Unlock();
    	};
	File.prototype.AddLine = function(offset) { return this.$val.AddLine(offset); };
Filego/token.File (*go/token.File).MergeLine ��	File.ptr.prototype.MergeLine = function(line) {
		var _r, _r$1, f, line, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; f = $f.f; line = $f.line; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		f = this;
  y		/* */ if (line < 1) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (line < 1) { */ case 1:
  �			_r = fmt.Sprintf("invalid line number %d (should be >= 1)", new sliceType([new $Int(line)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  �		f.mutex.Lock();
  �		$deferred.push([$methodVal(f.mutex, "Unlock"), []]);
  �		/* */ if (line >= f.lines.$length) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (line >= f.lines.$length) { */ case 4:
  			_r$1 = fmt.Sprintf("invalid line number %d (should be < %d)", new sliceType([new $Int(line), new $Int(f.lines.$length)])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
  �		$copySlice($subslice(f.lines, line), $subslice(f.lines, (line + 1 >> 0)));
  �		f.lines = $subslice(f.lines, 0, (f.lines.$length - 1 >> 0));
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: File.ptr.prototype.MergeLine }; } $f._r = _r; $f._r$1 = _r$1; $f.f = f; $f.line = line; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	File.prototype.MergeLine = function(line) { return this.$val.MergeLine(line); };
Filefmt.Sprintfgo/token.Filego/token.sliceType (*go/token.File).SetLines �	File.ptr.prototype.SetLines = function(lines) {
		var _i, _ref, f, i, lines, offset, size, x;
		f = this;
  B		size = f.size;
  R		_ref = lines;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			offset = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (i > 0 && offset <= (x = i - 1 >> 0, ((x < 0 || x >= lines.$length) ? ($throwRuntimeError("index out of range"), undefined) : lines.$array[lines.$offset + x])) || size <= offset) {
  �				return false;
    			}
    			_i++;
		}
  �		f.mutex.Lock();
  �		f.lines = lines;
  �		f.mutex.Unlock();
  		return true;
    	};
	File.prototype.SetLines = function(lines) { return this.$val.SetLines(lines); };
Filego/token.File #(*go/token.File).SetLinesForContent �	File.ptr.prototype.SetLinesForContent = function(content) {
		var _i, _ref, b, content, f, line, lines, offset;
		f = this;
  �		lines = sliceType$1.nil;
  �		line = 0;
  �		_ref = content;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			offset = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (line >= 0) {
  				lines = $append(lines, line);
    			}
  8			line = -1;
    			if (b === 10) {
  V				line = offset + 1 >> 0;
    			}
    			_i++;
		}
  �		f.mutex.Lock();
  �		f.lines = lines;
  �		f.mutex.Unlock();
    	};
	File.prototype.SetLinesForContent = function(content) { return this.$val.SetLinesForContent(content); };
Filego/token.Filego/token.sliceType$1 (*go/token.File).LineStart �K	File.ptr.prototype.LineStart = function(line) {
		var $24r, _r, _r$1, f, line, x, x$1, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; f = $f.f; line = $f.line; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		f = this;
  �		/* */ if (line < 1) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (line < 1) { */ case 1:
  �			_r = fmt.Sprintf("invalid line number %d (should be >= 1)", new sliceType([new $Int(line)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  		f.mutex.Lock();
  		$deferred.push([$methodVal(f.mutex, "Unlock"), []]);
  +		/* */ if (line > f.lines.$length) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (line > f.lines.$length) { */ case 4:
  F			_r$1 = fmt.Sprintf("invalid line number %d (should be < %d)", new sliceType([new $Int(line), new $Int(f.lines.$length)])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
  �		$24r = (((f.base + (x = f.lines, x$1 = line - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])) >> 0) >> 0));
		$s = 7; case 7: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return 0; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: File.ptr.prototype.LineStart }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.f = f; $f.line = line; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	File.prototype.LineStart = function(line) { return this.$val.LineStart(line); };
Filefmt.Sprintfgo/token.Filego/token.sliceType (*go/token.File).AddLineInfo �,	File.ptr.prototype.AddLineInfo = function(offset, filename, line) {
		var f, filename, line, offset;
		f = this;
  �		f.AddLineColumnInfo(offset, filename, line, 1);
    	};
	File.prototype.AddLineInfo = function(offset, filename, line) { return this.$val.AddLineInfo(offset, filename, line); };
Filego/token.File "(*go/token.File).AddLineColumnInfo ��	File.ptr.prototype.AddLineColumnInfo = function(offset, filename, line, column) {
		var column, f, filename, i, line, offset, x, x$1;
		f = this;
   �		f.mutex.Lock();
   �		i = f.infos.$length;
    		if ((i === 0) || (x = f.infos, x$1 = i - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1])).Offset < offset && offset < f.size) {
  !P			f.infos = $append(f.infos, new lineInfo.ptr(offset, filename, line, column));
    		}
  !�		f.mutex.Unlock();
    	};
	File.prototype.AddLineColumnInfo = function(offset, filename, line, column) { return this.$val.AddLineColumnInfo(offset, filename, line, column); };
Filego/token.Filego/token.lineInfo (*go/token.File).Pos ��	File.ptr.prototype.Pos = function(offset) {
		var _r, f, offset, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; offset = $f.offset; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  "L		/* */ if (offset > f.size) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (offset > f.size) { */ case 1:
  "c			_r = fmt.Sprintf("invalid file offset %d (should be <= %d)", new sliceType([new $Int(offset), new $Int(f.size)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  "�		$s = -1; return (((f.base + offset >> 0) >> 0));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Pos }; } $f._r = _r; $f.f = f; $f.offset = offset; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Pos = function(offset) { return this.$val.Pos(offset); };
Filefmt.Sprintfgo/token.Filego/token.sliceType (*go/token.File).Offset �H	File.ptr.prototype.Offset = function(p) {
		var _r, f, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  #�		/* */ if (((p >> 0)) < f.base || ((p >> 0)) > (f.base + f.size >> 0)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (((p >> 0)) < f.base || ((p >> 0)) > (f.base + f.size >> 0)) { */ case 1:
  #�			_r = fmt.Sprintf("invalid Pos value %d (should be in [%d, %d])", new sliceType([new Pos(p), new $Int(f.base), new $Int((f.base + f.size >> 0))])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  $		$s = -1; return ((p >> 0)) - f.base >> 0;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Offset }; } $f._r = _r; $f.f = f; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Offset = function(p) { return this.$val.Offset(p); };
Filefmt.Sprintfgo/token.Filego/token.Posgo/token.sliceType (*go/token.File).Line ��	File.ptr.prototype.Line = function(p) {
		var $24r, _r, f, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  $�		_r = f.Position(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r.Line;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Line }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Line = function(p) { return this.$val.Line(p); };
Filego/token.File go/token.searchLineInfosgo/tokensearchLineInfos searchLineInfos��	searchLineInfos = function(a, x) {
		var $24r, _r, a, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; a = $f.a; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		a = [a];
		x = [x];
  %		_r = sort.Search(a[0].$length, (function(a, x) { return function(i) {
			var i;
  %G			return ((i < 0 || i >= a[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : a[0].$array[a[0].$offset + i]).Offset > x[0];
    		}; })(a, x)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r - 1 >> 0;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: searchLineInfos }; } $f.$24r = $24r; $f._r = _r; $f.a = a; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
searchLineInfosgo/token.searchLineInfossort.Search (*go/token.File).unpack �a	File.ptr.prototype.unpack = function(offset, adjusted) {
		var $24r, _r, _tmp, _tmp$1, adjusted, alt, column, d, f, filename, i, i$1, i$2, line, offset, x, x$1, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; adjusted = $f.adjusted; alt = $f.alt; column = $f.column; d = $f.d; f = $f.f; filename = $f.filename; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; line = $f.line; offset = $f.offset; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		filename = "";
		line = 0;
		column = 0;
		f = this;
  &�		f.mutex.Lock();
  &�		$deferred.push([$methodVal(f.mutex, "Unlock"), []]);
  &�		filename = f.name;
  &�		i = searchInts(f.lines, offset);
    		if (i >= 0) {
  '			_tmp = i + 1 >> 0;
			_tmp$1 = (offset - (x = f.lines, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])) >> 0) + 1 >> 0;
			line = _tmp;
			column = _tmp$1;
    		}
  'B		/* */ if (adjusted && f.infos.$length > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (adjusted && f.infos.$length > 0) { */ case 1:
  '�			_r = searchLineInfos(f.infos, offset); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			i$1 = _r;
    			if (i$1 >= 0) {
  '�				alt = (x$1 = f.infos, ((i$1 < 0 || i$1 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i$1]));
  '�				filename = alt.Filename;
  '�				i$2 = searchInts(f.lines, alt.Offset);
    				if (i$2 >= 0) {
  (n					d = line - ((i$2 + 1 >> 0)) >> 0;
  (�					line = alt.Line + d >> 0;
    					if (alt.Column === 0) {
  )�						column = 0;
    					} else if (d === 0) {
  *i						column = alt.Column + ((offset - alt.Offset >> 0)) >> 0;
    					}
    				}
    			}
    		/* } */ case 2:
  *�		$24r = [filename, line, column];
		$s = 4; case 4: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [filename, line, column]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: File.ptr.prototype.unpack }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.adjusted = adjusted; $f.alt = alt; $f.column = column; $f.d = d; $f.f = f; $f.filename = filename; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.line = line; $f.offset = offset; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	File.prototype.unpack = function(offset, adjusted) { return this.$val.unpack(offset, adjusted); };
Fileunpack~go/token.Filego/token.searchIntsgo/token.searchLineInfos (*go/token.File).position �d	File.ptr.prototype.position = function(p, adjusted) {
		var _r, _tuple, adjusted, f, offset, p, pos, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; adjusted = $f.adjusted; f = $f.f; offset = $f.offset; p = $f.p; pos = $f.pos; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = new Position.ptr("", 0, 0, 0);
		f = this;
  *�		offset = ((p >> 0)) - f.base >> 0;
  +		pos.Offset = offset;
  +"		_r = f.unpack(offset, adjusted); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		pos.Filename = _tuple[0];
		pos.Line = _tuple[1];
		pos.Column = _tuple[2];
  +c		$s = -1; return pos;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.position }; } $f._r = _r; $f._tuple = _tuple; $f.adjusted = adjusted; $f.f = f; $f.offset = offset; $f.p = p; $f.pos = pos; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.position = function(p, adjusted) { return this.$val.position(p, adjusted); };
File	position~go/token.Filego/token.Positiongo/token.unpack~ (*go/token.File).PositionFor �Z	File.ptr.prototype.PositionFor = function(p, adjusted) {
		var _r, _r$1, adjusted, f, p, pos, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; adjusted = $f.adjusted; f = $f.f; p = $f.p; pos = $f.pos; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = new Position.ptr("", 0, 0, 0);
		f = this;
  ,�		/* */ if (!((p === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((p === 0))) { */ case 1:
  ,�			/* */ if (((p >> 0)) < f.base || ((p >> 0)) > (f.base + f.size >> 0)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (((p >> 0)) < f.base || ((p >> 0)) > (f.base + f.size >> 0)) { */ case 3:
  ,�				_r = fmt.Sprintf("invalid Pos value %d (should be in [%d, %d])", new sliceType([new Pos(p), new $Int(f.base), new $Int((f.base + f.size >> 0))])); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$panic(new $String(_r));
    			/* } */ case 4:
  -N			_r$1 = f.position(p, adjusted); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			Position.copy(pos, _r$1);
    		/* } */ case 2:
  -p		$s = -1; return pos;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.PositionFor }; } $f._r = _r; $f._r$1 = _r$1; $f.adjusted = adjusted; $f.f = f; $f.p = p; $f.pos = pos; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.PositionFor = function(p, adjusted) { return this.$val.PositionFor(p, adjusted); };
Filefmt.Sprintfgo/token.Filego/token.Posgo/token.Positiongo/token.position~go/token.sliceType (*go/token.File).Position �V	File.ptr.prototype.Position = function(p) {
		var $24r, _r, f, p, pos, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; p = $f.p; pos = $f.pos; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = new Position.ptr("", 0, 0, 0);
		f = this;
    		_r = f.PositionFor(p, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		Position.copy(pos, _r);
		$24r = pos;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Position }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.p = p; $f.pos = pos; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Position = function(p) { return this.$val.Position(p); };
Filego/token.Filego/token.Position go/token.NewFileSetgo/token
NewFileSet 
NewFileSet��	NewFileSet = function() {
  3�		return new FileSet.ptr(new nosync.RWMutex.ptr(false, 0), 1, sliceType$2.nil, ptrType.nil);
    	};
	$pkg.NewFileSet = NewFileSet;

NewFileSet+github.com/gopherjs/gopherjs/nosync.RWMutexgo/token.Filego/token.FileSetgo/token.NewFileSetgo/token.ptrTypego/token.sliceType$2 (*go/token.FileSet).Base ��	FileSet.ptr.prototype.Base = function() {
		var b, s;
		s = this;
  4�		s.mutex.RLock();
  4�		b = s.base;
  4�		s.mutex.RUnlock();
  4�		return b;
    	};
	FileSet.prototype.Base = function() { return this.$val.Base(); };
FileSetgo/token.FileSet (*go/token.FileSet).AddFile �	�	FileSet.ptr.prototype.AddFile = function(filename, base, size) {
		var $24r, _r, _r$1, base, f, filename, s, size, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; base = $f.base; f = $f.f; filename = $f.filename; s = $f.s; size = $f.size; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		s = this;
  8\		s.mutex.Lock();
  8l		$deferred.push([$methodVal(s.mutex, "Unlock"), []]);
    		if (base < 0) {
  8�			base = s.base;
    		}
  8�		/* */ if (base < s.base) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (base < s.base) { */ case 1:
  8�			_r = fmt.Sprintf("invalid base %d (should be >= %d)", new sliceType([new $Int(base), new $Int(s.base)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  9		/* */ if (size < 0) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (size < 0) { */ case 4:
  9			_r$1 = fmt.Sprintf("invalid size %d (should be >= 0)", new sliceType([new $Int(size)])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
  9v		f = new File.ptr(s, filename, base, size, new nosync.Mutex.ptr(false), new sliceType$1([0]), sliceType$3.nil);
  9�		base = base + ((size + 1 >> 0)) >> 0;
    		if (base < 0) {
  :			$panic(new $String("token.Pos offset overflow (> 2G of source code in file set)"));
    		}
  :u		s.base = base;
  :�		s.files = $append(s.files, f);
  :�		s.last = f;
  :�		$24r = f;
		$s = 7; case 7: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return ptrType.nil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.AddFile }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.base = base; $f.f = f; $f.filename = filename; $f.s = s; $f.size = size; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	FileSet.prototype.AddFile = function(filename, base, size) { return this.$val.AddFile(filename, base, size); };
FileSet
fmt.Sprintf)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.Filego/token.FileSetgo/token.lineInfogo/token.ptrTypego/token.ptrType$1go/token.sliceTypego/token.sliceType$1go/token.sliceType$3 (*go/token.FileSet).Iterate ��	FileSet.ptr.prototype.Iterate = function(f) {
		var _r, _v, f, file, i, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _v = $f._v; f = $f.f; file = $f.file; i = $f.i; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  ;Z		i = 0;
		/* while (true) { */ case 1:
  ;p			file = ptrType.nil;
  ;}			s.mutex.RLock();
    			if (i < s.files.$length) {
  ;�				file = (x = s.files, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    			}
  ;�			s.mutex.RUnlock();
  ;�			if (file === ptrType.nil) { _v = true; $s = 5; continue s; }
			_r = f(file); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_v = !_r; case 5:
			/* */ if (_v) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_v) { */ case 3:
  ;�				/* break; */ $s = 2; continue;
    			/* } */ case 4:
  ;d			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.Iterate }; } $f._r = _r; $f._v = _v; $f.f = f; $f.file = file; $f.i = i; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.Iterate = function(f) { return this.$val.Iterate(f); };
FileSetgo/token.FileSetgo/token.ptrType go/token.searchFilesgo/tokensearchFiles searchFiles�z	searchFiles = function(a, x) {
		var $24r, _r, a, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; a = $f.a; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		a = [a];
		x = [x];
  <.		_r = sort.Search(a[0].$length, (function(a, x) { return function(i) {
			var i;
  <\			return ((i < 0 || i >= a[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : a[0].$array[a[0].$offset + i]).base > x[0];
    		}; })(a, x)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r - 1 >> 0;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: searchFiles }; } $f.$24r = $24r; $f._r = _r; $f.a = a; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
searchFilesgo/token.searchFilessort.Search (*go/token.FileSet).file ��	FileSet.ptr.prototype.file = function(p) {
		var _r, f, f$1, i, p, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; f$1 = $f.f$1; i = $f.i; p = $f.p; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  <�		s.mutex.RLock();
  <�		f = s.last;
    		if (!(f === ptrType.nil) && f.base <= ((p >> 0)) && ((p >> 0)) <= (f.base + f.size >> 0)) {
  ="			s.mutex.RUnlock();
  =6			$s = -1; return f;
    		}
  =s		_r = searchFiles(s.files, ((p >> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i >= 0) {
  =�			f$1 = (x = s.files, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    			if (((p >> 0)) <= (f$1.base + f$1.size >> 0)) {
  >				s.mutex.RUnlock();
  >				s.mutex.Lock();
  >-				s.last = f$1;
  >b				s.mutex.Unlock();
  >v				$s = -1; return f$1;
    			}
    		}
  >�		s.mutex.RUnlock();
  >�		$s = -1; return ptrType.nil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.file }; } $f._r = _r; $f.f = f; $f.f$1 = f$1; $f.i = i; $f.p = p; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.file = function(p) { return this.$val.file(p); };
FileSetfile~go/token.FileSetgo/token.ptrTypego/token.searchFiles (*go/token.FileSet).File �l	FileSet.ptr.prototype.File = function(p) {
		var _r, f, p, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; f = $f.f; p = $f.p; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = ptrType.nil;
		s = this;
  ?^		/* */ if (!((p === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((p === 0))) { */ case 1:
  ?p			_r = s.file(p); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			f = _r;
    		/* } */ case 2:
  ?�		$s = -1; return f;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.File }; } $f._r = _r; $f.f = f; $f.p = p; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.File = function(p) { return this.$val.File(p); };
FileSetgo/token.FileSetgo/token.file~go/token.ptrType (*go/token.FileSet).PositionFor ��	FileSet.ptr.prototype.PositionFor = function(p, adjusted) {
		var $24r, _r, _r$1, adjusted, f, p, pos, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; adjusted = $f.adjusted; f = $f.f; p = $f.p; pos = $f.pos; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = new Position.ptr("", 0, 0, 0);
		s = this;
  @�		/* */ if (!((p === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((p === 0))) { */ case 1:
  @�			_r = s.file(p); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			f = _r;
  @�			/* */ if (!(f === ptrType.nil)) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!(f === ptrType.nil)) { */ case 4:
    				_r$1 = f.position(p, adjusted); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				Position.copy(pos, _r$1);
				$24r = pos;
				$s = 7; case 7: return $24r;
    			/* } */ case 5:
    		/* } */ case 2:
  A 		$s = -1; return pos;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.PositionFor }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.adjusted = adjusted; $f.f = f; $f.p = p; $f.pos = pos; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.PositionFor = function(p, adjusted) { return this.$val.PositionFor(p, adjusted); };
FileSetgo/token.FileSetgo/token.Positiongo/token.file~go/token.position~go/token.ptrType (*go/token.FileSet).Position �_	FileSet.ptr.prototype.Position = function(p) {
		var $24r, _r, p, pos, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; p = $f.p; pos = $f.pos; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pos = new Position.ptr("", 0, 0, 0);
		s = this;
    		_r = s.PositionFor(p, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		Position.copy(pos, _r);
		$24r = pos;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.Position }; } $f.$24r = $24r; $f._r = _r; $f.p = p; $f.pos = pos; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.Position = function(p) { return this.$val.Position(p); };
FileSetgo/token.FileSetgo/token.Position go/token.searchIntsgo/token
searchInts 
searchInts��	searchInts = function(a, x) {
		var _tmp, _tmp$1, a, h, i, j, x;
  Dh		_tmp = 0;
		_tmp$1 = a.$length;
		i = _tmp;
		j = _tmp$1;
  D{		while (true) {
			if (!(i < j)) { break; }
  D�			h = i + (((j - i >> 0)) >> 1 >> 0) >> 0;
    			if (((h < 0 || h >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + h]) <= x) {
  D�				i = h + 1 >> 0;
    			} else {
  D�				j = h;
    			}
    		}
  E			return i - 1 >> 0;
    	};

searchIntsgo/token.searchInts (*go/token.FileSet).Read ��	FileSet.ptr.prototype.Read = function(decode) {
		var _r, decode, err, f, files, i, s, ss, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; decode = $f.decode; err = $f.err; f = $f.f; files = $f.files; i = $f.i; s = $f.s; ss = $f.ss; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ss = [ss];
		s = this;
  GG		ss[0] = new serializedFileSet.ptr(0, sliceType$4.nil);
  G`		_r = decode(ss[0]); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  G�			$s = -1; return err;
    		}
  G�		s.mutex.Lock();
  G�		s.base = ss[0].Base;
  G�		files = $makeSlice(sliceType$2, ss[0].Files.$length);
  G�		i = 0;
		while (true) {
			if (!(i < ss[0].Files.$length)) { break; }
  H			f = (x = ss[0].Files, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
  H			((i < 0 || i >= files.$length) ? ($throwRuntimeError("index out of range"), undefined) : files.$array[files.$offset + i] = new File.ptr(s, f.Name, f.Base, f.Size, new nosync.Mutex.ptr(false), f.Lines, f.Infos));
  G�			i = i + (1) >> 0;
    		}
  H�		s.files = files;
  H�		s.last = ptrType.nil;
  H�		s.mutex.Unlock();
  H�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.Read }; } $f._r = _r; $f.decode = decode; $f.err = err; $f.f = f; $f.files = files; $f.i = i; $f.s = s; $f.ss = ss; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.Read = function(decode) { return this.$val.Read(decode); };
FileSet)github.com/gopherjs/gopherjs/nosync.Mutexgo/token.Filego/token.FileSetgo/token.ptrTypego/token.ptrType$1go/token.serializedFilego/token.serializedFileSetgo/token.sliceType$1go/token.sliceType$2go/token.sliceType$3go/token.sliceType$4 (*go/token.FileSet).Write ��	FileSet.ptr.prototype.Write = function(encode) {
		var $24r, _i, _r, _ref, encode, f, files, i, s, ss, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _ref = $f._ref; encode = $f.encode; f = $f.f; files = $f.files; i = $f.i; s = $f.s; ss = $f.ss; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  IR		ss = new serializedFileSet.ptr(0, sliceType$4.nil);
  Ii		s.mutex.Lock();
  Iy		ss.Base = s.base;
  I�		files = $makeSlice(sliceType$4, s.files.$length);
  I�		_ref = s.files;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			f = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  I�			f.mutex.Lock();
  I�			serializedFile.copy(((i < 0 || i >= files.$length) ? ($throwRuntimeError("index out of range"), undefined) : files.$array[files.$offset + i]), new serializedFile.ptr(f.name, f.base, f.size, $appendSlice((sliceType$1.nil), f.lines), $appendSlice((sliceType$3.nil), f.infos)));
  J�			f.mutex.Unlock();
    			_i++;
		}
  J�		ss.Files = files;
  J�		s.mutex.Unlock();
  J�		_r = encode(new ss.constructor.elem(ss)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FileSet.ptr.prototype.Write }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._ref = _ref; $f.encode = encode; $f.f = f; $f.files = files; $f.i = i; $f.s = s; $f.ss = ss; $f.$s = $s; $f.$r = $r; return $f;
	};
	FileSet.prototype.Write = function(encode) { return this.$val.Write(encode); };
FileSetgo/token.FileSetgo/token.serializedFilego/token.serializedFileSetgo/token.sliceType$1go/token.sliceType$3go/token.sliceType$4 (go/token.Token).String ��	Token.prototype.String = function() {
		var s, tok;
		tok = this.$val;
  Y		s = "";
    		if (0 <= tok && tok < 86) {
  YO			s = ((tok < 0 || tok >= tokens.length) ? ($throwRuntimeError("index out of range"), undefined) : tokens[tok]);
    		}
    		if (s === "") {
  Yr			s = "token(" + strconv.Itoa(((tok >> 0))) + ")";
    		}
  Y�		return s;
    	};
	$ptrType(Token).prototype.String = function() { return new Token(this.$get()).String(); };
Tokengo/token.Tokengo/token.tokensstrconv.Itoa (go/token.Token).Precedence ��	Token.prototype.Precedence = function() {
		var _1, op;
		op = this.$val;
    		_1 = op;
    		if (_1 === (35)) {
  \			return 1;
    		} else if (_1 === (34)) {
  \			return 2;
    		} else if ((_1 === (39)) || (_1 === (44)) || (_1 === (40)) || (_1 === (45)) || (_1 === (41)) || (_1 === (46))) {
  \G			return 3;
    		} else if ((_1 === (12)) || (_1 === (13)) || (_1 === (18)) || (_1 === (19))) {
  \k			return 4;
    		} else if ((_1 === (14)) || (_1 === (15)) || (_1 === (16)) || (_1 === (20)) || (_1 === (21)) || (_1 === (17)) || (_1 === (22))) {
  \�			return 5;
    		}
  \�		return 0;
    	};
	$ptrType(Token).prototype.Precedence = function() { return new Token(this.$get()).Precedence(); };
Tokengo/token.Token go/token.initgo/tokeninit init��	init = function() {
		var _key, i;
  \�		keywords = {};
  ]		i = 61;
		while (true) {
			if (!(i < 86)) { break; }
  ]I			_key = ((i < 0 || i >= tokens.length) ? ($throwRuntimeError("index out of range"), undefined) : tokens[i]); (keywords || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: i };
  ]A			i = i + (1) >> 0;
    		}
    	};
    		init();
go/token.initgo/token.keywordsgo/token.tokens go/token.Lookupgo/tokenLookup Lookup�P	Lookup = function(ident) {
		var _entry, _tuple, ident, is_keyword, tok;
  ]�		_tuple = (_entry = keywords[$String.keyFor(ident)], _entry !== undefined ? [_entry.v, true] : [0, false]);
		tok = _tuple[0];
		is_keyword = _tuple[1];
    		if (is_keyword) {
  ^			return tok;
    		}
  ^!		return 4;
    	};
	$pkg.Lookup = Lookup;
Lookupgo/token.Lookupgo/token.keywords (go/token.Token).IsLiteral ��	Token.prototype.IsLiteral = function() {
		var tok;
		tok = this.$val;
  ^�		return 3 < tok && tok < 10;
    	};
	$ptrType(Token).prototype.IsLiteral = function() { return new Token(this.$get()).IsLiteral(); };
Tokengo/token.Token (go/token.Token).IsOperator ��	Token.prototype.IsOperator = function() {
		var tok;
		tok = this.$val;
  _�		return 11 < tok && tok < 59;
    	};
	$ptrType(Token).prototype.IsOperator = function() { return new Token(this.$get()).IsOperator(); };
Tokengo/token.Token (go/token.Token).IsKeyword ��	Token.prototype.IsKeyword = function() {
		var tok;
		tok = this.$val;
  `c		return 60 < tok && tok < 86;
    	};
	$ptrType(Token).prototype.IsKeyword = function() { return new Token(this.$get()).IsKeyword(); };
Tokengo/token.Token go/token.IsExportedgo/token
IsExported 
IsExported��	IsExported = function(name) {
		var _tuple, ch, name;
  a		_tuple = utf8.DecodeRuneInString(name);
		ch = _tuple[0];
  a)		return unicode.IsUpper(ch);
    	};
	$pkg.IsExported = IsExported;

IsExportedgo/token.IsExportedunicode.IsUpperunicode/utf8.DecodeRuneInString go/token.IsKeywordgo/token	IsKeyword 	IsKeyword��	IsKeyword = function(name) {
		var _entry, _tuple, name, ok;
  b		_tuple = (_entry = keywords[$String.keyFor(name)], _entry !== undefined ? [_entry.v, true] : [0, false]);
		ok = _tuple[1];
  b		return ok;
    	};
	$pkg.IsKeyword = IsKeyword;
	IsKeywordgo/token.IsKeywordgo/token.keywords go/token.IsIdentifiergo/tokenIsIdentifier IsIdentifier��	IsIdentifier = function(name) {
		var _i, _ref, _rune, c, i, name;
  c!		_ref = name;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
    			if (!unicode.IsLetter(c) && !((c === 95)) && ((i === 0) || !unicode.IsDigit(c))) {
  c�				return false;
    			}
    			_i += _rune[1];
		}
  c�		return !(name === "") && !IsKeyword(name);
    	};
	$pkg.IsIdentifier = IsIdentifier;
IsIdentifiergo/token.IsIdentifiergo/token.IsKeywordunicode.IsDigitunicode.IsLetter ��{"Base":25542,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/token/position.go","Base":1,"Size":17687,"Lines":[0,55,109,159,160,174,175,184,191,199,207,209,210,291,304,305,356,406,456,459,482,519,561,608,670,672,673,723,783,784,836,839,892,973,1029,1113,1168,1226,1229,1267,1286,1306,1321,1333,1337,1372,1395,1434,1438,1441,1455,1465,1468,1478,1480,1481,1550,1621,1648,1651,1729,1804,1874,1956,2035,2079,2082,2159,2238,2307,2376,2417,2420,2496,2568,2642,2718,2778,2781,2794,2795,2869,2938,3008,3053,3056,3076,3077,3127,3157,3176,3178,3179,3260,3268,3269,3326,3377,3380,3399,3414,3463,3531,3580,3581,3624,3642,3751,3769,3771,3772,3840,3871,3886,3888,3889,3959,3987,4002,4004,4005,4068,4096,4111,4113,4114,4166,4199,4215,4234,4252,4262,4264,4265,4313,4385,4458,4461,4498,4514,4592,4628,4631,4649,4651,4652,4728,4808,4886,4943,4946,4983,4998,5068,5071,5087,5111,5138,5222,5225,5296,5363,5431,5504,5550,5590,5626,5628,5629,5708,5781,5852,5901,5974,6046,6056,6126,6129,6173,6208,6224,6256,6311,6327,6331,6334,6335,6355,6371,6388,6406,6419,6421,6422,6494,6543,6595,6612,6623,6657,6674,6705,6709,6721,6738,6759,6763,6766,6767,6787,6803,6820,6838,6840,6841,6912,6981,7040,7081,7096,7166,7169,7185,7209,7235,7319,7322,7360,7362,7363,7429,7493,7521,7544,7599,7617,7638,7656,7658,7659,7728,7796,7799,7867,7915,7917,7918,7986,8052,8118,8182,8194,8197,8269,8341,8344,8426,8442,8525,8595,8598,8616,8618,8619,8675,8710,8738,8741,8778,8800,8881,8884,8913,8915,8916,8976,9021,9059,9062,9097,9145,9240,9243,9267,9269,9270,9333,9381,9384,9417,9444,9446,9447,9495,9572,9574,9575,9652,9728,9807,9810,9897,9913,9937,9956,10003,10045,10048,10083,10120,10173,10195,10222,10275,10345,10417,10441,10466,10534,10598,10659,10699,10715,10738,10799,10851,10900,10906,10911,10915,10918,10926,10928,10929,10992,11019,11040,11105,11113,11115,11116,11189,11262,11320,11360,11363,11429,11446,11495,11591,11595,11627,11630,11638,11640,11641,11711,11785,11788,11836,11867,11869,11870,11951,11962,11963,12010,12072,12105,12108,12172,12236,12302,12368,12432,12500,12550,12553,12619,12687,12759,12832,12902,12971,12995,12998,13020,13065,13118,13185,13237,13239,13240,13278,13307,13325,13350,13353,13355,13356,13421,13459,13462,13493,13510,13523,13542,13552,13553,13555,13556,13633,13709,13785,13866,13928,13931,14006,14081,14143,14146,14170,14173,14252,14326,14356,14359,14426,14442,14466,14481,14497,14500,14520,14592,14595,14610,14673,14676,14708,14785,14841,14856,14927,14930,14963,14978,15008,15020,15030,15032,15033,15111,15137,15140,15188,15209,15226,15244,15268,15289,15293,15313,15344,15353,15357,15360,15362,15363,15404,15479,15481,15482,15520,15537,15572,15647,15667,15678,15681,15726,15774,15792,15843,15874,15895,15913,15966,15986,15998,16002,16005,16024,16036,16038,16039,16094,16153,16175,16178,16220,16237,16253,16256,16264,16266,16267,16337,16410,16468,16508,16511,16580,16597,16629,16663,16667,16670,16678,16680,16681,16748,16822,16825,16876,16907,16909,16910,16991,17011,17012,17050,17107,17111,17186,17190,17260,17326,17393,17452,17510,17529,17542,17597,17614,17631,17644,17655,17664,17668,17671,17685],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/token/serialize.go","Base":17689,"Size":1486,"Lines":[0,55,109,159,160,174,175,204,276,290,301,312,325,343,345,346,378,389,413,415,416,490,553,579,616,629,632,633,649,667,706,744,764,784,797,815,833,851,870,889,893,896,913,927,945,946,958,960,961,1012,1076,1102,1103,1119,1137,1184,1213,1230,1259,1277,1295,1313,1355,1402,1406,1425,1428,1446,1464,1465,1484],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/token/token.go","Base":19176,"Size":6365,"Lines":[0,55,109,159,160,237,316,319,333,334,343,354,365,381,383,384,454,469,470,493,501,520,542,547,556,557,570,610,659,675,692,710,729,744,761,774,775,789,818,828,838,848,858,868,869,883,897,911,926,941,956,957,975,993,1011,1029,1047,1048,1070,1092,1114,1137,1160,1183,1184,1197,1210,1223,1236,1249,1250,1264,1277,1290,1303,1316,1317,1333,1349,1365,1381,1398,1399,1412,1425,1438,1451,1464,1465,1481,1497,1513,1529,1545,1559,1560,1573,1586,1593,1599,1605,1612,1622,1623,1632,1639,1645,1658,1663,1664,1670,1674,1680,1684,1692,1693,1704,1709,1718,1725,1733,1734,1742,1750,1758,1764,1769,1782,1784,1785,1811,1832,1833,1850,1871,1872,1890,1906,1924,1941,1958,1977,1978,1989,2000,2011,2022,2033,2034,2049,2064,2079,2095,2111,2127,2128,2147,2166,2185,2204,2223,2224,2247,2270,2293,2317,2341,2365,2366,2380,2394,2408,2422,2436,2437,2452,2466,2480,2494,2508,2509,2526,2543,2560,2577,2595,2596,2610,2624,2638,2652,2666,2667,2684,2701,2718,2735,2752,2753,2773,2792,2811,2831,2854,2855,2880,2903,2925,2954,2975,2976,2993,3008,3025,3040,3059,3060,3085,3104,3127,3148,3170,3171,3190,3209,3228,3245,3261,3263,3264,3325,3393,3461,3527,3595,3598,3633,3642,3685,3703,3706,3720,3766,3769,3779,3781,3782,3845,3908,3973,4034,4088,4091,4099,4133,4150,4167,4169,4170,4230,4289,4313,4316,4351,4364,4375,4386,4398,4409,4445,4456,4481,4492,4537,4548,4551,4570,4572,4573,4603,4604,4618,4653,4703,4729,4732,4734,4735,4814,4817,4851,4904,4917,4920,4934,4936,4937,4951,4952,5018,5074,5077,5161,5162,5231,5274,5277,5364,5365,5429,5460,5463,5547,5548,5617,5620,5656,5696,5724,5726,5727,5806,5809,5844,5912,5937,5948,5950,5951,6029,6110,6159,6162,6200,6226,6301,6317,6321,6324,6363],"Infos":null}]}
 