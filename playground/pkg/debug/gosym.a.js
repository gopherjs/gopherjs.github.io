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
GoLinkname�� Implementation�� 	Reference��   ����debug/gosymgosymbytesencoding/binaryfmtstrconvstringssync�	�i �� offmsgvalErroreDecodingErrorEntrySymEndParamsLocals	FrameSize	LineTableObjDataPCLinemuMutexsyncversionbinary	ByteOrderencoding/binaryquantumptrsizefuncnametabcutabfuncdatafunctabnfunctabfiletabpctabnfiletab	funcNamesstringsfileMapparsettargetPC
targetLinebpclineslicePCToLineLineToPCmaxpcisGo12uintptrparsePclnTab	go12FuncsFuncfindFunc
readvarintppfuncName
stringFromarrstringsteppfirstpcvalueentrytargetpcfindFileLinelinetabfilenumgo12PCToLinego12PCToFilefilego12LineToPCinitFileMapgo12MapFilesmobjdatatextsymtabpclnTableFuncsPathslineFromAlineoalinealineFromLinepathValueTypeNameGoTypeStaticsPackageNameReceiverNameBaseNameSymsFilesObjsgo12linePCToFuncfnerr	LookupSymname
LookupFunc	SymByAddraddrUnknownFileErrorFileUnknownLineErrorstatesemaLocklockSlowUnlock
unlockSlownew	PutUint16	PutUint32	PutUint64StringUint16Uint32Uint64gosymNewLineTableNewTable           	     6T $  9    ) IINIR I V S [  #
   )L  -
   1P   8T   ?   IY   S^  T `  gm r  ��			  W�   \
   _   d�   r�   z�   �	   �	   ��   ��   ��   ��   �	   ��   ��   �	   ��   ��   ��  VVVVVVVVV � �VV�VVVV�
VVVVVVV[�[T � � �� �
 � �� �
 �  � �� �
  �  � �� �
    � �� � �
  
  � ��     � �� ��  
  � ��   � ��   � � �� �
  �  � �� ��  	  � �� 	    � �� �� 	    � �� 	    � �� �� �� 	� �      � �� 	 �
 �
    � �� �
 �	 �	 � � ��  
  � �� �
 �  � �� �
 �  � �� � � �
  � ��   � �� �� ��  VF  �� �
  � V � �F  �� ��  �   �I  ��   ��  [[T � � �� �      � �� � �     �  �
   �   �   �
   ��  IIIIT � � ��     � ��    � ��    � ��   I�[�[V  ��   ��   ��   ��   ��  �������I���IT � � �� �
  �  � �� �
 � � ��  � �� � � �
 �� �  � �� �  �  � �� �  �  � �� �
  �  � T   �
     �   _   � �
T �
  �
   m �   �	  ����T �
 � ��
   � ��
   � ��
   � ��
 �  T  �  �  �     �  �  	   �  �  
   �    �  �    �  �  	  �  �  
 T � � �kI�����S�)�����	��
r�
�z ��mm g�
R bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  versiond	version = $pkg.version = $newType(4, $kindInt, "gosym.version", true, "debug/gosym", false, null);
versiondebug/gosym.version  	LineTable�e	LineTable = $pkg.LineTable = $newType(0, $kindStruct, "gosym.LineTable", true, "debug/gosym", true, function(Data_, PC_, Line_, mu_, version_, binary_, quantum_, ptrsize_, funcnametab_, cutab_, funcdata_, functab_, nfunctab_, filetab_, pctab_, nfiletab_, funcNames_, strings_, fileMap_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Data = sliceType.nil;
			this.PC = new $Uint64(0, 0);
			this.Line = 0;
			this.mu = new sync.Mutex.ptr(0, 0);
			this.version = 0;
			this.binary = $ifaceNil;
			this.quantum = 0;
			this.ptrsize = 0;
			this.funcnametab = sliceType.nil;
			this.cutab = sliceType.nil;
			this.funcdata = sliceType.nil;
			this.functab = sliceType.nil;
			this.nfunctab = 0;
			this.filetab = sliceType.nil;
			this.pctab = sliceType.nil;
			this.nfiletab = 0;
			this.funcNames = false;
			this.strings = false;
			this.fileMap = false;
			return;
		}
		this.Data = Data_;
		this.PC = PC_;
		this.Line = Line_;
		this.mu = mu_;
		this.version = version_;
		this.binary = binary_;
		this.quantum = quantum_;
		this.ptrsize = ptrsize_;
		this.funcnametab = funcnametab_;
		this.cutab = cutab_;
		this.funcdata = funcdata_;
		this.functab = functab_;
		this.nfunctab = nfunctab_;
		this.filetab = filetab_;
		this.pctab = pctab_;
		this.nfiletab = nfiletab_;
		this.funcNames = funcNames_;
		this.strings = strings_;
		this.fileMap = fileMap_;
	});
��	ptrType$5.methods = [{prop: "parse", name: "parse", pkg: "debug/gosym", typ: $funcType([$Uint64, $Int], [sliceType, $Uint64, $Int], false)}, {prop: "slice", name: "slice", pkg: "debug/gosym", typ: $funcType([$Uint64], [ptrType$5], false)}, {prop: "PCToLine", name: "PCToLine", pkg: "", typ: $funcType([$Uint64], [$Int], false)}, {prop: "LineToPC", name: "LineToPC", pkg: "", typ: $funcType([$Int, $Uint64], [$Uint64], false)}, {prop: "isGo12", name: "isGo12", pkg: "debug/gosym", typ: $funcType([], [$Bool], false)}, {prop: "uintptr", name: "uintptr", pkg: "debug/gosym", typ: $funcType([sliceType], [$Uint64], false)}, {prop: "parsePclnTab", name: "parsePclnTab", pkg: "debug/gosym", typ: $funcType([], [], false)}, {prop: "go12Funcs", name: "go12Funcs", pkg: "debug/gosym", typ: $funcType([], [sliceType$1], false)}, {prop: "findFunc", name: "findFunc", pkg: "debug/gosym", typ: $funcType([$Uint64], [sliceType], false)}, {prop: "readvarint", name: "readvarint", pkg: "debug/gosym", typ: $funcType([ptrType$1], [$Uint32], false)}, {prop: "funcName", name: "funcName", pkg: "debug/gosym", typ: $funcType([$Uint32], [$String], false)}, {prop: "stringFrom", name: "stringFrom", pkg: "debug/gosym", typ: $funcType([sliceType, $Uint32], [$String], false)}, {prop: "string", name: "string", pkg: "debug/gosym", typ: $funcType([$Uint32], [$String], false)}, {prop: "step", name: "step", pkg: "debug/gosym", typ: $funcType([ptrType$1, ptrType$2, ptrType$3, $Bool], [$Bool], false)}, {prop: "pcvalue", name: "pcvalue", pkg: "debug/gosym", typ: $funcType([$Uint32, $Uint64, $Uint64], [$Int32], false)}, {prop: "findFileLine", name: "findFileLine", pkg: "debug/gosym", typ: $funcType([$Uint64, $Uint32, $Uint32, $Int32, $Int32, sliceType], [$Uint64], false)}, {prop: "go12PCToLine", name: "go12PCToLine", pkg: "debug/gosym", typ: $funcType([$Uint64], [$Int], false)}, {prop: "go12PCToFile", name: "go12PCToFile", pkg: "debug/gosym", typ: $funcType([$Uint64], [$String], false)}, {prop: "go12LineToPC", name: "go12LineToPC", pkg: "debug/gosym", typ: $funcType([$String, $Int], [$Uint64], false)}, {prop: "initFileMap", name: "initFileMap", pkg: "debug/gosym", typ: $funcType([], [], false)}, {prop: "go12MapFiles", name: "go12MapFiles", pkg: "debug/gosym", typ: $funcType([mapType, ptrType$6], [], false)}];
�	LineTable.init("debug/gosym", [{prop: "Data", name: "Data", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "PC", name: "PC", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "version", name: "version", embedded: false, exported: false, typ: version, tag: ""}, {prop: "binary", name: "binary", embedded: false, exported: false, typ: binary.ByteOrder, tag: ""}, {prop: "quantum", name: "quantum", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "ptrsize", name: "ptrsize", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "funcnametab", name: "funcnametab", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "cutab", name: "cutab", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "funcdata", name: "funcdata", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "functab", name: "functab", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "nfunctab", name: "nfunctab", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "filetab", name: "filetab", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "pctab", name: "pctab", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "nfiletab", name: "nfiletab", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "funcNames", name: "funcNames", embedded: false, exported: false, typ: mapType$1, tag: ""}, {prop: "strings", name: "strings", embedded: false, exported: false, typ: mapType$1, tag: ""}, {prop: "fileMap", name: "fileMap", embedded: false, exported: false, typ: mapType$2, tag: ""}]);
	LineTabledebug/gosym.LineTabledebug/gosym.mapTypedebug/gosym.mapType$1debug/gosym.mapType$2debug/gosym.ptrType$1debug/gosym.ptrType$2debug/gosym.ptrType$3debug/gosym.ptrType$5debug/gosym.ptrType$6debug/gosym.sliceTypedebug/gosym.sliceType$1debug/gosym.versionencoding/binary.ByteOrder
sync.Mutex  Sym��	Sym = $pkg.Sym = $newType(0, $kindStruct, "gosym.Sym", true, "debug/gosym", true, function(Value_, Type_, Name_, GoType_, Func_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Value = new $Uint64(0, 0);
			this.Type = 0;
			this.Name = "";
			this.GoType = new $Uint64(0, 0);
			this.Func = ptrType.nil;
			return;
		}
		this.Value = Value_;
		this.Type = Type_;
		this.Name = Name_;
		this.GoType = GoType_;
		this.Func = Func_;
	});
�s	ptrType$7.methods = [{prop: "Static", name: "Static", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "PackageName", name: "PackageName", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ReceiverName", name: "ReceiverName", pkg: "", typ: $funcType([], [$String], false)}, {prop: "BaseName", name: "BaseName", pkg: "", typ: $funcType([], [$String], false)}];
��	Sym.init("", [{prop: "Value", name: "Value", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Type", name: "Type", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "GoType", name: "GoType", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Func", name: "Func", embedded: false, exported: true, typ: ptrType, tag: ""}]);
Symdebug/gosym.Symdebug/gosym.ptrTypedebug/gosym.ptrType$7  Func��	Func = $pkg.Func = $newType(0, $kindStruct, "gosym.Func", true, "debug/gosym", true, function(Entry_, Sym_, End_, Params_, Locals_, FrameSize_, LineTable_, Obj_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Entry = new $Uint64(0, 0);
			this.Sym = ptrType$7.nil;
			this.End = new $Uint64(0, 0);
			this.Params = sliceType$4.nil;
			this.Locals = sliceType$4.nil;
			this.FrameSize = 0;
			this.LineTable = ptrType$5.nil;
			this.Obj = ptrType$6.nil;
			return;
		}
		this.Entry = Entry_;
		this.Sym = Sym_;
		this.End = End_;
		this.Params = Params_;
		this.Locals = Locals_;
		this.FrameSize = FrameSize_;
		this.LineTable = LineTable_;
		this.Obj = Obj_;
	});
��	Func.init("", [{prop: "Entry", name: "Entry", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Sym", name: "Sym", embedded: true, exported: true, typ: ptrType$7, tag: ""}, {prop: "End", name: "End", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Params", name: "Params", embedded: false, exported: true, typ: sliceType$4, tag: ""}, {prop: "Locals", name: "Locals", embedded: false, exported: true, typ: sliceType$4, tag: ""}, {prop: "FrameSize", name: "FrameSize", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "LineTable", name: "LineTable", embedded: false, exported: true, typ: ptrType$5, tag: ""}, {prop: "Obj", name: "Obj", embedded: false, exported: true, typ: ptrType$6, tag: ""}]);
Funcdebug/gosym.Funcdebug/gosym.ptrType$5debug/gosym.ptrType$6debug/gosym.ptrType$7debug/gosym.sliceType$4  Obj�&	Obj = $pkg.Obj = $newType(0, $kindStruct, "gosym.Obj", true, "debug/gosym", true, function(Funcs_, Paths_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Funcs = sliceType$1.nil;
			this.Paths = sliceType$2.nil;
			return;
		}
		this.Funcs = Funcs_;
		this.Paths = Paths_;
	});
�	ptrType$6.methods = [{prop: "lineFromAline", name: "lineFromAline", pkg: "debug/gosym", typ: $funcType([$Int], [$String, $Int], false)}, {prop: "alineFromLine", name: "alineFromLine", pkg: "debug/gosym", typ: $funcType([$String, $Int], [$Int, $error], false)}];
��	Obj.init("", [{prop: "Funcs", name: "Funcs", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "Paths", name: "Paths", embedded: false, exported: true, typ: sliceType$2, tag: ""}]);
Objdebug/gosym.Objdebug/gosym.ptrType$6debug/gosym.sliceType$1debug/gosym.sliceType$2  Table��	Table = $pkg.Table = $newType(0, $kindStruct, "gosym.Table", true, "debug/gosym", true, function(Syms_, Funcs_, Files_, Objs_, go12line_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Syms = sliceType$2.nil;
			this.Funcs = sliceType$1.nil;
			this.Files = false;
			this.Objs = sliceType$3.nil;
			this.go12line = ptrType$5.nil;
			return;
		}
		this.Syms = Syms_;
		this.Funcs = Funcs_;
		this.Files = Files_;
		this.Objs = Objs_;
		this.go12line = go12line_;
	});
�q	ptrType$4.methods = [{prop: "PCToFunc", name: "PCToFunc", pkg: "", typ: $funcType([$Uint64], [ptrType], false)}, {prop: "PCToLine", name: "PCToLine", pkg: "", typ: $funcType([$Uint64], [$String, $Int, ptrType], false)}, {prop: "LineToPC", name: "LineToPC", pkg: "", typ: $funcType([$String, $Int], [$Uint64, ptrType, $error], false)}, {prop: "LookupSym", name: "LookupSym", pkg: "", typ: $funcType([$String], [ptrType$7], false)}, {prop: "LookupFunc", name: "LookupFunc", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "SymByAddr", name: "SymByAddr", pkg: "", typ: $funcType([$Uint64], [ptrType$7], false)}];
��	Table.init("debug/gosym", [{prop: "Syms", name: "Syms", embedded: false, exported: true, typ: sliceType$2, tag: ""}, {prop: "Funcs", name: "Funcs", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "Files", name: "Files", embedded: false, exported: true, typ: mapType, tag: ""}, {prop: "Objs", name: "Objs", embedded: false, exported: true, typ: sliceType$3, tag: ""}, {prop: "go12line", name: "go12line", embedded: false, exported: false, typ: ptrType$5, tag: ""}]);
Table	debug/gosym.Tabledebug/gosym.mapTypedebug/gosym.ptrTypedebug/gosym.ptrType$4debug/gosym.ptrType$5debug/gosym.ptrType$7debug/gosym.sliceType$1debug/gosym.sliceType$2debug/gosym.sliceType$3  sym��	sym = $pkg.sym = $newType(0, $kindStruct, "gosym.sym", true, "debug/gosym", false, function(value_, gotype_, typ_, name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.value = new $Uint64(0, 0);
			this.gotype = new $Uint64(0, 0);
			this.typ = 0;
			this.name = sliceType.nil;
			return;
		}
		this.value = value_;
		this.gotype = gotype_;
		this.typ = typ_;
		this.name = name_;
	});
�}	sym.init("debug/gosym", [{prop: "value", name: "value", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "gotype", name: "gotype", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "typ", name: "typ", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "name", name: "name", embedded: false, exported: false, typ: sliceType, tag: ""}]);
symdebug/gosym.sliceTypedebug/gosym.sym  UnknownFileError��	UnknownFileError = $pkg.UnknownFileError = $newType(8, $kindString, "gosym.UnknownFileError", true, "debug/gosym", true, null);
m	UnknownFileError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnknownFileErrordebug/gosym.UnknownFileError  UnknownLineError�*	UnknownLineError = $pkg.UnknownLineError = $newType(0, $kindStruct, "gosym.UnknownLineError", true, "debug/gosym", true, function(File_, Line_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.File = "";
			this.Line = 0;
			return;
		}
		this.File = File_;
		this.Line = Line_;
	});
f	ptrType$9.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	UnknownLineError.init("", [{prop: "File", name: "File", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}]);
UnknownLineErrordebug/gosym.UnknownLineErrordebug/gosym.ptrType$9  DecodingError�K	DecodingError = $pkg.DecodingError = $newType(0, $kindStruct, "gosym.DecodingError", true, "debug/gosym", true, function(off_, msg_, val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.off = 0;
			this.msg = "";
			this.val = $ifaceNil;
			return;
		}
		this.off = off_;
		this.msg = msg_;
		this.val = val_;
	});
g	ptrType$10.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
�*	DecodingError.init("debug/gosym", [{prop: "off", name: "off", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "msg", name: "msg", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $emptyInterface, tag: ""}]);
DecodingErrordebug/gosym.DecodingErrordebug/gosym.ptrType$10  stackEnt�w	stackEnt = $newType(0, $kindStruct, "gosym.stackEnt", true, "debug/gosym", false, function(path_, start_, offset_, prev_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.path = "";
			this.start = 0;
			this.offset = 0;
			this.prev = ptrType$8.nil;
			return;
		}
		this.path = path_;
		this.start = start_;
		this.offset = offset_;
		this.prev = prev_;
	});
�	stackEnt.init("debug/gosym", [{prop: "path", name: "path", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "start", name: "start", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "prev", name: "prev", embedded: false, exported: false, typ: ptrType$8, tag: ""}]);
stackEntdebug/gosym.ptrType$8  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1!	sliceType$1 = $sliceType(Func);
sliceType$1debug/gosym.Func  ptrType	ptrType = $ptrType(Func);
ptrTypedebug/gosym.Func  	ptrType$1"	ptrType$1 = $ptrType(sliceType);
	ptrType$1debug/gosym.sliceType  	ptrType$2 	ptrType$2 = $ptrType($Uint64);
	ptrType$2  	ptrType$3	ptrType$3 = $ptrType($Int32);
	ptrType$3  	ptrType$4	ptrType$4 = $ptrType(Table);
	ptrType$4debug/gosym.Table  sliceType$2 	sliceType$2 = $sliceType(Sym);
sliceType$2debug/gosym.Sym  sliceType$3 	sliceType$3 = $sliceType(Obj);
sliceType$3debug/gosym.Obj  	ptrType$5"	ptrType$5 = $ptrType(LineTable);
	ptrType$5debug/gosym.LineTable  	ptrType$6	ptrType$6 = $ptrType(Obj);
	ptrType$6debug/gosym.Obj  	ptrType$7	ptrType$7 = $ptrType(Sym);
	ptrType$7debug/gosym.Sym  sliceType$4&	sliceType$4 = $sliceType(ptrType$7);
sliceType$4debug/gosym.ptrType$7  	ptrType$8!	ptrType$8 = $ptrType(stackEnt);
	ptrType$8  sliceType$5,	sliceType$5 = $sliceType($emptyInterface);
sliceType$5  mapType)	mapType = $mapType($String, ptrType$6);
mapTypedebug/gosym.ptrType$6  	mapType$1)	mapType$1 = $mapType($Uint32, $String);
	mapType$1  	mapType$2)	mapType$2 = $mapType($String, $Uint32);
	mapType$2  	ptrType$9)	ptrType$9 = $ptrType(UnknownLineError);
	ptrType$9debug/gosym.UnknownLineError  
ptrType$10'	ptrType$10 = $ptrType(DecodingError);

ptrType$10debug/gosym.DecodingError  littleEndianSymtablittleEndianSymtab  bigEndianSymtabbigEndianSymtab  oldLittleEndianSymtaboldLittleEndianSymtab  J  J1		littleEndianSymtab = new sliceType([253, 255, 255, 255, 0, 0, 0]);
littleEndianSymtabdebug/gosym.littleEndianSymtabdebug/gosym.sliceType  G  J{		bigEndianSymtab = new sliceType([255, 255, 255, 253, 0, 0, 0]);
bigEndianSymtabdebug/gosym.bigEndianSymtabdebug/gosym.sliceType  J  J�		oldLittleEndianSymtab = new sliceType([254, 255, 255, 255, 0, 0]);
oldLittleEndianSymtab!debug/gosym.oldLittleEndianSymtabdebug/gosym.sliceType (*debug/gosym.LineTable).parse ��	LineTable.ptr.prototype.parse = function(targetPC, targetLine) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, code, line, pc, t, targetLine, targetPC, val, x, x$1;
		b = sliceType.nil;
		pc = new $Uint64(0, 0);
		line = 0;
		t = this;
  
g		_tmp = t.Data;
		_tmp$1 = t.PC;
		_tmp$2 = t.Line;
		b = _tmp;
		pc = _tmp$1;
		line = _tmp$2;
  
�		while (true) {
			if (!((pc.$high < targetPC.$high || (pc.$high === targetPC.$high && pc.$low <= targetPC.$low)) && !((line === targetLine)) && b.$length > 0)) { break; }
  
�			code = (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]);
  
�			b = $subslice(b, 1);
  
�			switch (0) { default:
    				if ((code === 0)) {
    					if (b.$length < 4) {
  						b = $subslice(b, 0, 0);
  "						break;
    					}
  0					val = $clone(binary.BigEndian, binary.bigEndian).Uint32(b);
  U					b = $subslice(b, 4);
  b					line = line + (((val >> 0))) >> 0;
    				} else if (code <= 64) {
  �					line = line + (((code >> 0))) >> 0;
    				} else if (code <= 128) {
  �					line = line - ((((code - 64 << 24 >>> 24) >> 0))) >> 0;
    				} else {
  �					pc = (x = $mul64(new $Uint64(0, 1), (new $Uint64(0, (code - 128 << 24 >>> 24)))), new $Uint64(pc.$high + x.$high, pc.$low + x.$low));
  �					continue;
    				}
    			}
  			pc = (x$1 = new $Uint64(0, 1), new $Uint64(pc.$high + x$1.$high, pc.$low + x$1.$low));
    		}
    		_tmp$3 = b;
		_tmp$4 = pc;
		_tmp$5 = line;
		b = _tmp$3;
		pc = _tmp$4;
		line = _tmp$5;
		return [b, pc, line];
    	};
	LineTable.prototype.parse = function(targetPC, targetLine) { return this.$val.parse(targetPC, targetLine); };
	LineTableparse~debug/gosym.LineTabledebug/gosym.sliceTypeencoding/binary.BigEndianencoding/binary.bigEndian (*debug/gosym.LineTable).slice ��	LineTable.ptr.prototype.slice = function(pc) {
		var _tuple, data, line, pc, t;
		t = this;
  k		_tuple = t.parse(pc, -1);
		data = _tuple[0];
		pc = _tuple[1];
		line = _tuple[2];
  �		return new LineTable.ptr(data, pc, line, new sync.Mutex.ptr(0, 0), 0, $ifaceNil, 0, 0, sliceType.nil, sliceType.nil, sliceType.nil, sliceType.nil, 0, sliceType.nil, sliceType.nil, 0, false, false, false);
    	};
	LineTable.prototype.slice = function(pc) { return this.$val.slice(pc); };
	LineTableslice~debug/gosym.LineTabledebug/gosym.parse~debug/gosym.sliceType
sync.Mutex !(*debug/gosym.LineTable).PCToLine ��	LineTable.ptr.prototype.PCToLine = function(pc) {
		var $24r, _r, _r$1, _tuple, line, pc, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; line = $f.line; pc = $f.pc; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  l		_r = t.isGo12(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_r) { */ case 1:
  ~			_r$1 = t.go12PCToLine(pc); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 2:
  �		_tuple = t.parse(pc, -1);
		line = _tuple[2];
  �		$s = -1; return line;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.PCToLine }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.line = line; $f.pc = pc; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.PCToLine = function(pc) { return this.$val.PCToLine(pc); };
	LineTabledebug/gosym.LineTabledebug/gosym.go12PCToLine~debug/gosym.isGo12~debug/gosym.parse~ !(*debug/gosym.LineTable).LineToPC ��	LineTable.ptr.prototype.LineToPC = function(line, maxpc) {
		var _r, _tuple, line, line1, maxpc, pc, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; line = $f.line; line1 = $f.line1; maxpc = $f.maxpc; pc = $f.pc; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  �		_r = t.isGo12(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_r) { */ case 1:
  �			$s = -1; return new $Uint64(0, 0);
    		/* } */ case 2:
  �		_tuple = t.parse(maxpc, line);
		pc = _tuple[1];
		line1 = _tuple[2];
    		if (!((line1 === line))) {
  			$s = -1; return new $Uint64(0, 0);
    		}
  ]		$s = -1; return new $Uint64(pc.$high - 0, pc.$low - 1);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.LineToPC }; } $f._r = _r; $f._tuple = _tuple; $f.line = line; $f.line1 = line1; $f.maxpc = maxpc; $f.pc = pc; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.LineToPC = function(line, maxpc) { return this.$val.LineToPC(line, maxpc); };
	LineTabledebug/gosym.LineTabledebug/gosym.isGo12~debug/gosym.parse~ debug/gosym.NewLineTabledebug/gosymNewLineTable NewLineTable�2	NewLineTable = function(data, text) {
		var data, text;
  K		return new LineTable.ptr(data, text, 0, new sync.Mutex.ptr(0, 0), 0, $ifaceNil, 0, 0, sliceType.nil, sliceType.nil, sliceType.nil, sliceType.nil, 0, sliceType.nil, sliceType.nil, 0, {}, {}, false);
    	};
	$pkg.NewLineTable = NewLineTable;
NewLineTabledebug/gosym.LineTabledebug/gosym.NewLineTabledebug/gosym.sliceType
sync.Mutex (*debug/gosym.LineTable).isGo12 ��	LineTable.ptr.prototype.isGo12 = function() {
		var t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  �		$r = t.parsePclnTab(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return t.version >= 2;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.isGo12 }; } $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.isGo12 = function() { return this.$val.isGo12(); };
	LineTableisGo12~debug/gosym.LineTabledebug/gosym.parsePclnTab~  (*debug/gosym.LineTable).uintptr ��	LineTable.ptr.prototype.uintptr = function(b) {
		var $24r, $24r$1, _r, _r$1, b, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; b = $f.b; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  �		/* */ if (t.ptrsize === 4) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (t.ptrsize === 4) { */ case 1:
  �			_r = t.binary.Uint32(b); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = (new $Uint64(0, _r));
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  		_r$1 = t.binary.Uint64(b); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.uintptr }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.uintptr = function(b) { return this.$val.uintptr(b); };
	LineTableuintptr~debug/gosym.LineTable %(*debug/gosym.LineTable).parsePclnTab �(_	LineTable.ptr.prototype.parsePclnTab = function() {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, beMagic, fileoff, functabsize, functabsize$1, leMagic, offset, possibleVersion, t, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; beMagic = $f.beMagic; fileoff = $f.fileoff; functabsize = $f.functabsize; functabsize$1 = $f.functabsize$1; leMagic = $f.leMagic; offset = $f.offset; possibleVersion = $f.possibleVersion; t = $f.t; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		t = this;
  �		$r = t.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$deferred.push([$methodVal(t.mu, "Unlock"), []]);
  �		/* */ if (!((t.version === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((t.version === 0))) { */ case 2:
  �			$s = 4; case 4: return;
    		/* } */ case 3:
  �		t.version = 1;
  		$deferred.push([(function() {
  W			$recover();
    		}), []]);
  �		/* */ if (t.Data.$length < 16 || !(((x = t.Data, (4 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 4])) === 0)) || !(((x$1 = t.Data, (5 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 5])) === 0)) || (!(((x$2 = t.Data, (6 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 6])) === 1)) && !(((x$3 = t.Data, (6 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 6])) === 2)) && !(((x$4 = t.Data, (6 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 6])) === 4))) || (!(((x$5 = t.Data, (7 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 7])) === 4)) && !(((x$6 = t.Data, (7 >= x$6.$length ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + 7])) === 8)))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (t.Data.$length < 16 || !(((x = t.Data, (4 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 4])) === 0)) || !(((x$1 = t.Data, (5 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 5])) === 0)) || (!(((x$2 = t.Data, (6 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 6])) === 1)) && !(((x$3 = t.Data, (6 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 6])) === 2)) && !(((x$4 = t.Data, (6 >= x$4.$length ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + 6])) === 4))) || (!(((x$5 = t.Data, (7 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 7])) === 4)) && !(((x$6 = t.Data, (7 >= x$6.$length ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + 7])) === 8)))) { */ case 5:
  i			$s = 7; case 7: return;
    		/* } */ case 6:
  y		possibleVersion = 0;
  �		leMagic = $clone(binary.LittleEndian, binary.littleEndian).Uint32(t.Data);
  �		beMagic = $clone(binary.BigEndian, binary.bigEndian).Uint32(t.Data);
  �			/* */ if ((leMagic === 4294967291)) { $s = 9; continue; }
			/* */ if ((beMagic === 4294967291)) { $s = 10; continue; }
			/* */ if ((leMagic === 4294967290)) { $s = 11; continue; }
			/* */ if ((beMagic === 4294967290)) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if ((leMagic === 4294967291)) { */ case 9:
  				_tmp = (x$7 = binary.LittleEndian, new x$7.constructor.elem(x$7));
				_tmp$1 = 2;
				t.binary = _tmp;
				possibleVersion = _tmp$1;
    				$s = 14; continue;
    			/* } else if ((beMagic === 4294967291)) { */ case 10:
  i				_tmp$2 = (x$8 = binary.BigEndian, new x$8.constructor.elem(x$8));
				_tmp$3 = 2;
				t.binary = _tmp$2;
				possibleVersion = _tmp$3;
    				$s = 14; continue;
    			/* } else if ((leMagic === 4294967290)) { */ case 11:
  �				_tmp$4 = (x$9 = binary.LittleEndian, new x$9.constructor.elem(x$9));
				_tmp$5 = 3;
				t.binary = _tmp$4;
				possibleVersion = _tmp$5;
    				$s = 14; continue;
    			/* } else if ((beMagic === 4294967290)) { */ case 12:
  				_tmp$6 = (x$10 = binary.BigEndian, new x$10.constructor.elem(x$10));
				_tmp$7 = 3;
				t.binary = _tmp$6;
				possibleVersion = _tmp$7;
    				$s = 14; continue;
			/* } else { */ case 13:
  T				$s = 15; case 15: return;
    			/* } */ case 14:
    		case 8:
  �		t.quantum = (((x$11 = t.Data, (6 >= x$11.$length ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + 6])) >>> 0));
  �		t.ptrsize = (((x$12 = t.Data, (7 >= x$12.$length ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + 7])) >>> 0));
    			_1 = possibleVersion;
  �			/* */ if (_1 === (3)) { $s = 17; continue; }
			/* */ if (_1 === (2)) { $s = 18; continue; }
			/* */ $s = 19; continue;
    			/* if (_1 === (3)) { */ case 17:
  				_r = t.uintptr($subslice(t.Data, 8)); /* */ $s = 21; case 21: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				t.nfunctab = ((_r.$low >>> 0));
  /				_r$1 = t.uintptr($subslice(t.Data, (8 + t.ptrsize >>> 0))); /* */ $s = 22; case 22: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				t.nfiletab = ((_r$1.$low >>> 0));
  f				_r$2 = t.uintptr($subslice(t.Data, (8 + ($imul(2, t.ptrsize) >>> 0) >>> 0))); /* */ $s = 23; case 23: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				offset = _r$2;
  �				t.funcnametab = $subslice(t.Data, $flatten64(offset));
  �				_r$3 = t.uintptr($subslice(t.Data, (8 + ($imul(3, t.ptrsize) >>> 0) >>> 0))); /* */ $s = 24; case 24: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				offset = _r$3;
  �				t.cutab = $subslice(t.Data, $flatten64(offset));
  �				_r$4 = t.uintptr($subslice(t.Data, (8 + ($imul(4, t.ptrsize) >>> 0) >>> 0))); /* */ $s = 25; case 25: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				offset = _r$4;
  ,				t.filetab = $subslice(t.Data, $flatten64(offset));
  J				_r$5 = t.uintptr($subslice(t.Data, (8 + ($imul(5, t.ptrsize) >>> 0) >>> 0))); /* */ $s = 26; case 26: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				offset = _r$5;
  w				t.pctab = $subslice(t.Data, $flatten64(offset));
  �				_r$6 = t.uintptr($subslice(t.Data, (8 + ($imul(6, t.ptrsize) >>> 0) >>> 0))); /* */ $s = 27; case 27: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				offset = _r$6;
  �				t.funcdata = $subslice(t.Data, $flatten64(offset));
  �				t.functab = $subslice(t.Data, $flatten64(offset));
  �				functabsize = ($imul(($imul(t.nfunctab, 2) >>> 0), t.ptrsize) >>> 0) + t.ptrsize >>> 0;
  1				t.functab = $subslice(t.functab, 0, functabsize);
    				$s = 20; continue;
    			/* } else if (_1 === (2)) { */ case 18:
  d				_r$7 = t.uintptr($subslice(t.Data, 8)); /* */ $s = 28; case 28: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				t.nfunctab = ((_r$7.$low >>> 0));
  �				t.funcdata = t.Data;
  �				t.funcnametab = t.Data;
  �				t.functab = $subslice(t.Data, (8 + t.ptrsize >>> 0));
  �				t.pctab = t.Data;
  �				functabsize$1 = ($imul(($imul(t.nfunctab, 2) >>> 0), t.ptrsize) >>> 0) + t.ptrsize >>> 0;
  *				_r$8 = t.binary.Uint32($subslice(t.functab, functabsize$1)); /* */ $s = 29; case 29: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				fileoff = _r$8;
  `				t.functab = $subslice(t.functab, 0, functabsize$1);
  �				t.filetab = $subslice(t.Data, fileoff);
  �				_r$9 = t.binary.Uint32(t.filetab); /* */ $s = 30; case 30: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
				t.nfiletab = _r$9;
  �				t.filetab = $subslice(t.filetab, 0, ($imul(t.nfiletab, 4) >>> 0));
    				$s = 20; continue;
			/* } else { */ case 19:
   				$panic(new $String("unreachable"));
    			/* } */ case 20:
    		case 16:
  		t.version = possibleVersion;
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.parsePclnTab }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f.beMagic = beMagic; $f.fileoff = fileoff; $f.functabsize = functabsize; $f.functabsize$1 = functabsize$1; $f.leMagic = leMagic; $f.offset = offset; $f.possibleVersion = possibleVersion; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.parsePclnTab = function() { return this.$val.parsePclnTab(); };
	LineTableparsePclnTab~debug/gosym.LineTabledebug/gosym.uintptr~encoding/binary.BigEndianencoding/binary.LittleEndianencoding/binary.bigEndianencoding/binary.littleEndian "(*debug/gosym.LineTable).go12Funcs �~	LineTable.ptr.prototype.go12Funcs = function() {
		var $24r, _i, _q, _q$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _ref, f, funcs, i, info, n, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _ref = $f._ref; f = $f.f; funcs = $f.funcs; i = $f.i; info = $f.info; n = $f.n; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		t = this;
  �		$deferred.push([(function() {
  �			$recover();
    		}), []]);
  		n = (_q = (_q$1 = t.functab.$length / ((t.ptrsize >> 0)), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  ,		funcs = $makeSlice(sliceType$1, n);
  F		_ref = funcs;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
  _			f = ((i < 0 || i >= funcs.$length) ? ($throwRuntimeError("index out of range"), undefined) : funcs.$array[funcs.$offset + i]);
  p			_r = t.uintptr($subslice(t.functab, ($imul(($imul(2, i)), ((t.ptrsize >> 0)))))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			f.Entry = _r;
  �			_r$1 = t.uintptr($subslice(t.functab, ($imul(((($imul(2, i)) + 2 >> 0)), ((t.ptrsize >> 0)))))); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			f.End = _r$1;
  �			_r$2 = t.uintptr($subslice(t.functab, ($imul(((($imul(2, i)) + 1 >> 0)), ((t.ptrsize >> 0)))))); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			info = $subslice(t.funcdata, $flatten64(_r$2));
   #			f.LineTable = t;
   5			_r$3 = t.binary.Uint32($subslice(info, (t.ptrsize + 8 >>> 0))); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			f.FrameSize = ((_r$3 >> 0));
   p			_r$4 = t.binary.Uint32($subslice(info, t.ptrsize)); /* */ $s = 7; case 7: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_r$5 = t.funcName(_r$4); /* */ $s = 8; case 8: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			f.Sym = new Sym.ptr(f.Entry, 84, _r$5, new $Uint64(0, 0), f);
    			_i++;
		$s = 1; continue;
		case 2:
  ! 		$24r = funcs;
		$s = 9; case 9: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return sliceType$1.nil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.go12Funcs }; } $f.$24r = $24r; $f._i = _i; $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._ref = _ref; $f.f = f; $f.funcs = funcs; $f.i = i; $f.info = info; $f.n = n; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.go12Funcs = function() { return this.$val.go12Funcs(); };
	LineTable
go12Funcs~debug/gosym.Funcdebug/gosym.LineTabledebug/gosym.Symdebug/gosym.funcName~debug/gosym.ptrTypedebug/gosym.sliceType$1debug/gosym.uintptr~ !(*debug/gosym.LineTable).findFunc ��	LineTable.ptr.prototype.findFunc = function(pc) {
		var $24r, _q, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _v, _v$1, f, fm, m, nf, pc, t, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _v = $f._v; _v$1 = $f._v$1; f = $f.f; fm = $f.fm; m = $f.m; nf = $f.nf; pc = $f.pc; t = $f.t; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  !�		_r = t.uintptr(t.functab); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		if ((x = _r, (pc.$high < x.$high || (pc.$high === x.$high && pc.$low < x.$low)))) { _v = true; $s = 3; continue s; }
		_r$1 = t.uintptr($subslice(t.functab, (t.functab.$length - ((t.ptrsize >> 0)) >> 0))); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v = (x$1 = _r$1, (pc.$high > x$1.$high || (pc.$high === x$1.$high && pc.$low >= x$1.$low))); case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_v) { */ case 1:
  !�			$s = -1; return sliceType.nil;
    		/* } */ case 2:
  "v		f = t.functab;
  "�		nf = t.nfunctab;
  "�		/* while (true) { */ case 6:
			/* if (!(nf > 0)) { break; } */ if(!(nf > 0)) { $s = 7; continue; }
  "�			m = (_q = nf / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  "�			fm = $subslice(f, ($imul(($imul(2, t.ptrsize) >>> 0), m) >>> 0));
  "�			_r$2 = t.uintptr(fm); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			if (!((x$2 = _r$2, (x$2.$high < pc.$high || (x$2.$high === pc.$high && x$2.$low <= pc.$low))))) { _v$1 = false; $s = 12; continue s; }
			_r$3 = t.uintptr($subslice(fm, ($imul(2, t.ptrsize) >>> 0))); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_v$1 = (x$3 = _r$3, (pc.$high < x$3.$high || (pc.$high === x$3.$high && pc.$low < x$3.$low))); case 12:
			/* */ if (_v$1) { $s = 8; continue; }
			_r$4 = t.uintptr(fm); /* */ $s = 15; case 15: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* */ if ((x$4 = _r$4, (pc.$high < x$4.$high || (pc.$high === x$4.$high && pc.$low < x$4.$low)))) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (_v$1) { */ case 8:
  #				_r$5 = t.uintptr($subslice(fm, t.ptrsize)); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				$24r = $subslice(t.funcdata, $flatten64(_r$5));
				$s = 17; case 17: return $24r;
    			/* } else if ((x$4 = _r$4, (pc.$high < x$4.$high || (pc.$high === x$4.$high && pc.$low < x$4.$low)))) { */ case 9:
  #a				nf = m;
    				$s = 11; continue;
			/* } else { */ case 10:
  #v				f = $subslice(f, ($imul(($imul(((m + 1 >>> 0)), 2) >>> 0), t.ptrsize) >>> 0));
  #�				nf = nf - ((m + 1 >>> 0)) >>> 0;
    			/* } */ case 11:
    		$s = 6; continue;
		case 7:
  #�		$s = -1; return sliceType.nil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.findFunc }; } $f.$24r = $24r; $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._v = _v; $f._v$1 = _v$1; $f.f = f; $f.fm = fm; $f.m = m; $f.nf = nf; $f.pc = pc; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.findFunc = function(pc) { return this.$val.findFunc(pc); };
	LineTable	findFunc~debug/gosym.LineTabledebug/gosym.sliceTypedebug/gosym.uintptr~ #(*debug/gosym.LineTable).readvarint ��	LineTable.ptr.prototype.readvarint = function(pp) {
		var _tmp, _tmp$1, b, p, pp, shift, t, v, y;
		t = this;
  $+		_tmp = 0;
		_tmp$1 = 0;
		v = _tmp;
		shift = _tmp$1;
  $<		p = pp.$get();
  $J		shift = 0;
		while (true) {
  $f			b = (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]);
  $r			p = $subslice(p, 1);
  $~			v = (v | (((y = shift, y < 32 ? ((((((b >>> 0)) & 127) >>> 0)) << y) : 0) >>> 0))) >>> 0;
    			if (((b & 128) >>> 0) === 0) {
  $�				break;
    			}
  $W			shift = shift + (7) >>> 0;
    		}
  $�		pp.$set(p);
  $�		return v;
    	};
	LineTable.prototype.readvarint = function(pp) { return this.$val.readvarint(pp); };
	LineTablereadvarint~debug/gosym.LineTable !(*debug/gosym.LineTable).funcName ��	LineTable.ptr.prototype.funcName = function(off) {
		var _entry, _key, _tuple, i, off, ok, s, s$1, t;
		t = this;
  %I		_tuple = (_entry = t.funcNames[$Uint32.keyFor(off)], _entry !== undefined ? [_entry.v, true] : ["", false]);
		s = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  %k			return s;
    		}
  %x		i = bytes.IndexByte($subslice(t.funcnametab, off), 0);
  %�		s$1 = ($bytesToString($subslice(t.funcnametab, off, (off + ((i >>> 0)) >>> 0))));
  %�		_key = off; (t.funcNames || $throwRuntimeError("assignment to entry in nil map"))[$Uint32.keyFor(_key)] = { k: _key, v: s$1 };
  %�		return s$1;
    	};
	LineTable.prototype.funcName = function(off) { return this.$val.funcName(off); };
	LineTable	funcName~bytes.IndexBytedebug/gosym.LineTable #(*debug/gosym.LineTable).stringFrom ��	LineTable.ptr.prototype.stringFrom = function(arr, off) {
		var _entry, _key, _tuple, arr, i, off, ok, s, s$1, t;
		t = this;
  &}		_tuple = (_entry = t.strings[$Uint32.keyFor(off)], _entry !== undefined ? [_entry.v, true] : ["", false]);
		s = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  &�			return s;
    		}
  &�		i = bytes.IndexByte($subslice(arr, off), 0);
  &�		s$1 = ($bytesToString($subslice(arr, off, (off + ((i >>> 0)) >>> 0))));
  &�		_key = off; (t.strings || $throwRuntimeError("assignment to entry in nil map"))[$Uint32.keyFor(_key)] = { k: _key, v: s$1 };
  '			return s$1;
    	};
	LineTable.prototype.stringFrom = function(arr, off) { return this.$val.stringFrom(arr, off); };
	LineTablestringFrom~bytes.IndexBytedebug/gosym.LineTable (*debug/gosym.LineTable).string ��	LineTable.ptr.prototype.string = function(off) {
		var off, t;
		t = this;
  'r		return t.stringFrom(t.funcdata, off);
    	};
	LineTable.prototype.string = function(off) { return this.$val.string(off); };
	LineTablestring~debug/gosym.LineTabledebug/gosym.stringFrom~ (*debug/gosym.LineTable).step �3	LineTable.ptr.prototype.step = function(p, pc, val, first) {
		var first, p, pc, pcdelta, t, uvdelta, val, vdelta, x, x$1, y;
		t = this;
  (,		uvdelta = t.readvarint(p);
    		if ((uvdelta === 0) && !first) {
  (f			return false;
    		}
    		if (!((((uvdelta & 1) >>> 0) === 0))) {
  (�			uvdelta = ~((uvdelta >>> 1 >>> 0)) >>> 0;
    		} else {
  (�			uvdelta = (y = (1), y < 32 ? (uvdelta >>> y) : 0) >>> 0;
    		}
  (�		vdelta = ((uvdelta >> 0));
  (�		pcdelta = $imul(t.readvarint(p), t.quantum) >>> 0;
    		pc.$set((x = pc.$get(), x$1 = (new $Uint64(0, pcdelta)), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low)));
    		val.$set(val.$get() + (vdelta) >> 0);
  )/		return true;
    	};
	LineTable.prototype.step = function(p, pc, val, first) { return this.$val.step(p, pc, val, first); };
	LineTablestep~debug/gosym.LineTabledebug/gosym.readvarint~  (*debug/gosym.LineTable).pcvalue ��	LineTable.ptr.prototype.pcvalue = function(off, entry, targetpc) {
		var entry, off, p, p$24ptr, pc, pc$24ptr, t, targetpc, val, val$24ptr;
		t = this;
  *=		p = $subslice(t.pctab, off);
  *R		val = -1;
  *d		pc = entry;
  *q		while (true) {
			if (!(t.step((p$24ptr || (p$24ptr = new ptrType$1(function() { return p; }, function($v) { p = $convertSliceType($v, sliceType); }))), (pc$24ptr || (pc$24ptr = new ptrType$2(function() { return pc; }, function($v) { pc = $v; }))), (val$24ptr || (val$24ptr = new ptrType$3(function() { return val; }, function($v) { val = $v; }))), (pc.$high === entry.$high && pc.$low === entry.$low)))) { break; }
    			if ((targetpc.$high < pc.$high || (targetpc.$high === pc.$high && targetpc.$low < pc.$low))) {
  *�				return val;
    			}
    		}
  *�		return -1;
    	};
	LineTable.prototype.pcvalue = function(off, entry, targetpc) { return this.$val.pcvalue(off, entry, targetpc); };
	LineTablepcvalue~debug/gosym.LineTabledebug/gosym.ptrType$1debug/gosym.ptrType$2debug/gosym.ptrType$3debug/gosym.sliceTypedebug/gosym.step~ %(*debug/gosym.LineTable).findFileLine �s	LineTable.ptr.prototype.findFileLine = function(entry, filetab, linetab, filenum, line, cutab) {
		var _r, cutab, entry, fileIndex, filePC, fileStartPC, fileVal, filenum, filetab, fl, fp, line, linePC, lineStartPC, lineVal, linetab, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; cutab = $f.cutab; entry = $f.entry; fileIndex = $f.fileIndex; filePC = $f.filePC; fileStartPC = $f.fileStartPC; fileVal = $f.fileVal; filenum = $f.filenum; filetab = $f.filetab; fl = $f.fl; fp = $f.fp; line = $f.line; linePC = $f.linePC; lineStartPC = $f.lineStartPC; lineVal = $f.lineVal; linetab = $f.linetab; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		filePC = [filePC];
		fileVal = [fileVal];
		fl = [fl];
		fp = [fp];
		linePC = [linePC];
		lineVal = [lineVal];
		t = this;
    		if ((filetab === 0) || (linetab === 0)) {
  -			$s = -1; return new $Uint64(0, 0);
    		}
  -		fp[0] = $subslice(t.pctab, filetab);
  --		fl[0] = $subslice(t.pctab, linetab);
  -F		fileVal[0] = -1;
  -\		filePC[0] = entry;
  -m		lineVal[0] = -1;
  -�		linePC[0] = entry;
  -�		fileStartPC = filePC[0];
  -�		/* while (true) { */ case 1:
			/* if (!(t.step((fp.$ptr || (fp.$ptr = new ptrType$1(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, fp))), (filePC.$ptr || (filePC.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, filePC))), (fileVal.$ptr || (fileVal.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, fileVal))), (filePC[0].$high === entry.$high && filePC[0].$low === entry.$low)))) { break; } */ if(!(t.step((fp.$ptr || (fp.$ptr = new ptrType$1(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, fp))), (filePC.$ptr || (filePC.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, filePC))), (fileVal.$ptr || (fileVal.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, fileVal))), (filePC[0].$high === entry.$high && filePC[0].$low === entry.$low)))) { $s = 2; continue; }
  -�			fileIndex = fileVal[0];
  -�			/* */ if (t.version === 3) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (t.version === 3) { */ case 3:
  .				_r = t.binary.Uint32($subslice(cutab, ($imul(fileVal[0], 4)))); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				fileIndex = ((_r >> 0));
    			/* } */ case 4:
    			if ((fileIndex === filenum) && (fileStartPC.$high < filePC[0].$high || (fileStartPC.$high === filePC[0].$high && fileStartPC.$low < filePC[0].$low))) {
  /W				lineStartPC = linePC[0];
  /p				while (true) {
					if (!((linePC[0].$high < filePC[0].$high || (linePC[0].$high === filePC[0].$high && linePC[0].$low < filePC[0].$low)) && t.step((fl.$ptr || (fl.$ptr = new ptrType$1(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, fl))), (linePC.$ptr || (linePC.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, linePC))), (lineVal.$ptr || (lineVal.$ptr = new ptrType$3(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, lineVal))), (linePC[0].$high === entry.$high && linePC[0].$low === entry.$low)))) { break; }
    					if (lineVal[0] === line) {
    						if ((fileStartPC.$high < lineStartPC.$high || (fileStartPC.$high === lineStartPC.$high && fileStartPC.$low <= lineStartPC.$low))) {
  0A							$s = -1; return lineStartPC;
    						}
    						if ((fileStartPC.$high < linePC[0].$high || (fileStartPC.$high === linePC[0].$high && fileStartPC.$low < linePC[0].$low))) {
  0�							$s = -1; return fileStartPC;
    						}
    					}
  0�					lineStartPC = linePC[0];
    				}
    			}
  0�			fileStartPC = filePC[0];
    		$s = 1; continue;
		case 2:
  0�		$s = -1; return new $Uint64(0, 0);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.findFileLine }; } $f._r = _r; $f.cutab = cutab; $f.entry = entry; $f.fileIndex = fileIndex; $f.filePC = filePC; $f.fileStartPC = fileStartPC; $f.fileVal = fileVal; $f.filenum = filenum; $f.filetab = filetab; $f.fl = fl; $f.fp = fp; $f.line = line; $f.linePC = linePC; $f.lineStartPC = lineStartPC; $f.lineVal = lineVal; $f.linetab = linetab; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	LineTable.prototype.findFileLine = function(entry, filetab, linetab, filenum, line, cutab) { return this.$val.findFileLine(entry, filetab, linetab, filenum, line, cutab); };
	LineTablefindFileLine~debug/gosym.LineTabledebug/gosym.ptrType$1debug/gosym.ptrType$2debug/gosym.ptrType$3debug/gosym.step~ %(*debug/gosym.LineTable).go12PCToLine ��	LineTable.ptr.prototype.go12PCToLine = function(pc) {
		var $24r, $24r$1, _r, _r$1, _r$2, entry, f, line, linetab, pc, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; entry = $f.entry; f = $f.f; line = $f.line; linetab = $f.linetab; pc = $f.pc; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		line = [line];
		line[0] = 0;
		t = this;
  1r		$deferred.push([(function(line) { return function() {
    			if (!($interfaceIsEqual($recover(), $ifaceNil))) {
  1�				line[0] = -1;
    			}
    		}; })(line), []]);
  1�		_r = t.findFunc(pc); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		f = _r;
  1�		/* */ if (f === sliceType.nil) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (f === sliceType.nil) { */ case 2:
    			line[0] = -1;
			$24r = line[0];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  1�		_r$1 = t.uintptr(f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		entry = _r$1;
  1�		_r$2 = t.binary.Uint32($subslice(f, (t.ptrsize + 20 >>> 0))); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		linetab = _r$2;
    		line[0] = ((t.pcvalue(linetab, entry, pc) >> 0));
		$24r$1 = line[0];
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  line[0]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.go12PCToLine }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.entry = entry; $f.f = f; $f.line = line; $f.linetab = linetab; $f.pc = pc; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.go12PCToLine = function(pc) { return this.$val.go12PCToLine(pc); };
	LineTablego12PCToLine~debug/gosym.LineTabledebug/gosym.findFunc~debug/gosym.pcvalue~debug/gosym.sliceTypedebug/gosym.uintptr~ %(*debug/gosym.LineTable).go12PCToFile �R	LineTable.ptr.prototype.go12PCToFile = function(pc) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, cuoff, entry, f, file, filetab, fno, fnoff, pc, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; cuoff = $f.cuoff; entry = $f.entry; f = $f.f; file = $f.file; filetab = $f.filetab; fno = $f.fno; fnoff = $f.fnoff; pc = $f.pc; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		file = [file];
		file[0] = "";
		t = this;
  2�		$deferred.push([(function(file) { return function() {
    			if (!($interfaceIsEqual($recover(), $ifaceNil))) {
  3				file[0] = "";
    			}
    		}; })(file), []]);
  3 		_r = t.findFunc(pc); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		f = _r;
  35		/* */ if (f === sliceType.nil) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (f === sliceType.nil) { */ case 2:
    			file[0] = "";
			$24r = file[0];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  3S		_r$1 = t.uintptr(f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		entry = _r$1;
  3j		_r$2 = t.binary.Uint32($subslice(f, (t.ptrsize + 16 >>> 0))); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		filetab = _r$2;
  3�		fno = t.pcvalue(filetab, entry, pc);
  3�		/* */ if (t.version === 2) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (t.version === 2) { */ case 7:
  3�			/* */ if (fno <= 0) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (fno <= 0) { */ case 9:
    				file[0] = "";
				$24r$1 = file[0];
				$s = 11; case 11: return $24r$1;
    			/* } */ case 10:
    			_r$3 = t.binary.Uint32($subslice(t.filetab, ($imul(4, fno)))); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$4 = t.string(_r$3); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			file[0] = _r$4;
			$24r$2 = file[0];
			$s = 14; case 14: return $24r$2;
    		/* } */ case 8:
  4B		/* */ if (fno < 0) { $s = 15; continue; }
		/* */ $s = 16; continue;
    		/* if (fno < 0) { */ case 15:
    			file[0] = "";
			$24r$3 = file[0];
			$s = 17; case 17: return $24r$3;
    		/* } */ case 16:
  4z		_r$5 = t.binary.Uint32($subslice(f, (t.ptrsize + 28 >>> 0))); /* */ $s = 18; case 18: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		cuoff = _r$5;
  4�		_r$6 = t.binary.Uint32($subslice(t.cutab, ($imul(((cuoff + ((fno >>> 0)) >>> 0)), 4) >>> 0))); /* */ $s = 19; case 19: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		fnoff = _r$6;
  4�		/* */ if (!((fnoff === 4294967295))) { $s = 20; continue; }
		/* */ $s = 21; continue;
    		/* if (!((fnoff === 4294967295))) { */ case 20:
    			file[0] = t.stringFrom(t.filetab, fnoff);
			$24r$4 = file[0];
			$s = 22; case 22: return $24r$4;
    		/* } */ case 21:
    		file[0] = "";
		$24r$5 = file[0];
		$s = 23; case 23: return $24r$5;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  file[0]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.go12PCToFile }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f.cuoff = cuoff; $f.entry = entry; $f.f = f; $f.file = file; $f.filetab = filetab; $f.fno = fno; $f.fnoff = fnoff; $f.pc = pc; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.go12PCToFile = function(pc) { return this.$val.go12PCToFile(pc); };
	LineTablego12PCToFile~debug/gosym.LineTabledebug/gosym.findFunc~debug/gosym.pcvalue~debug/gosym.sliceTypedebug/gosym.stringFrom~debug/gosym.string~debug/gosym.uintptr~ %(*debug/gosym.LineTable).go12LineToPC ��	LineTable.ptr.prototype.go12LineToPC = function(file, line) {
		var $24r, $24r$1, $24r$2, _entry, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, cuoff, cutab, entry, f, file, filenum, filetab, i, line, linetab, ok, pc, pc$1, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _entry = $f._entry; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; cuoff = $f.cuoff; cutab = $f.cutab; entry = $f.entry; f = $f.f; file = $f.file; filenum = $f.filenum; filetab = $f.filetab; i = $f.i; line = $f.line; linetab = $f.linetab; ok = $f.ok; pc = $f.pc; pc$1 = $f.pc$1; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		pc = [pc];
		pc[0] = new $Uint64(0, 0);
		t = this;
  5�		$deferred.push([(function(pc) { return function() {
    			if (!($interfaceIsEqual($recover(), $ifaceNil))) {
  6				pc[0] = new $Uint64(0, 0);
    			}
    		}; })(pc), []]);
  6		$r = t.initFileMap(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  6&		_tuple = (_entry = t.fileMap[$String.keyFor(file)], _entry !== undefined ? [_entry.v, true] : [0, false]);
		filenum = _tuple[0];
		ok = _tuple[1];
  6F		/* */ if (!ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!ok) { */ case 2:
    			pc[0] = new $Uint64(0, 0);
			$24r = pc[0];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  7		cutab = sliceType.nil;
  7#		i = 0;
		/* while (true) { */ case 5:
			/* if (!(i < t.nfunctab)) { break; } */ if(!(i < t.nfunctab)) { $s = 6; continue; }
  7K			_r = t.uintptr($subslice(t.functab, (($imul(($imul(2, t.ptrsize) >>> 0), i) >>> 0) + t.ptrsize >>> 0))); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			f = $subslice(t.funcdata, $flatten64(_r));
  7�			_r$1 = t.uintptr(f); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			entry = _r$1;
  7�			_r$2 = t.binary.Uint32($subslice(f, (t.ptrsize + 16 >>> 0))); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			filetab = _r$2;
  7�			_r$3 = t.binary.Uint32($subslice(f, (t.ptrsize + 20 >>> 0))); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			linetab = _r$3;
  8			/* */ if (t.version === 3) { $s = 11; continue; }
			/* */ $s = 12; continue;
    			/* if (t.version === 3) { */ case 11:
  8"				_r$4 = t.binary.Uint32($subslice(f, (t.ptrsize + 28 >>> 0))); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				cuoff = $imul(_r$4, 4) >>> 0;
  8U				cutab = $subslice(t.cutab, cuoff);
    			/* } */ case 12:
  8s			_r$5 = t.findFileLine(entry, filetab, linetab, ((filenum >> 0)), ((line >> 0)), cutab); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			pc$1 = _r$5;
  8�			/* */ if (!((pc$1.$high === 0 && pc$1.$low === 0))) { $s = 15; continue; }
			/* */ $s = 16; continue;
    			/* if (!((pc$1.$high === 0 && pc$1.$low === 0))) { */ case 15:
    				pc[0] = pc$1;
				$24r$1 = pc[0];
				$s = 17; case 17: return $24r$1;
    			/* } */ case 16:
  7C			i = i + (1) >>> 0;
    		$s = 5; continue;
		case 6:
    		pc[0] = new $Uint64(0, 0);
		$24r$2 = pc[0];
		$s = 18; case 18: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  pc[0]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.go12LineToPC }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._entry = _entry; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f.cuoff = cuoff; $f.cutab = cutab; $f.entry = entry; $f.f = f; $f.file = file; $f.filenum = filenum; $f.filetab = filetab; $f.i = i; $f.line = line; $f.linetab = linetab; $f.ok = ok; $f.pc = pc; $f.pc$1 = pc$1; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.go12LineToPC = function(file, line) { return this.$val.go12LineToPC(file, line); };
	LineTablego12LineToPC~debug/gosym.LineTabledebug/gosym.findFileLine~debug/gosym.initFileMap~debug/gosym.sliceTypedebug/gosym.uintptr~ $(*debug/gosym.LineTable).initFileMap �
�	LineTable.ptr.prototype.initFileMap = function() {
		var _key, _key$1, _r, _r$1, i, i$1, m, pos, s, s$1, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _key = $f._key; _key$1 = $f._key$1; _r = $f._r; _r$1 = $f._r$1; i = $f.i; i$1 = $f.i$1; m = $f.m; pos = $f.pos; s = $f.s; s$1 = $f.s$1; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		t = this;
  9\		$r = t.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  9i		$deferred.push([$methodVal(t.mu, "Unlock"), []]);
  9		/* */ if (!(t.fileMap === false)) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!(t.fileMap === false)) { */ case 2:
  9�			$s = 4; case 4: return;
    		/* } */ case 3:
  9�		m = {};
  9�		/* */ if (t.version === 2) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (t.version === 2) { */ case 5:
  9�			i = 1;
			/* while (true) { */ case 8:
				/* if (!(i < t.nfiletab)) { break; } */ if(!(i < t.nfiletab)) { $s = 9; continue; }
  :				_r = t.binary.Uint32($subslice(t.filetab, ($imul(4, i) >>> 0))); /* */ $s = 10; case 10: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r$1 = t.string(_r); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				s = _r$1;
  :;				_key = s; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: i };
  9�				i = i + (1) >>> 0;
    			$s = 8; continue;
			case 9:
    			$s = 7; continue;
		/* } else { */ case 6:
  :X			pos = 0;
  :i			i$1 = 0;
			while (true) {
				if (!(i$1 < t.nfiletab)) { break; }
  :�				s$1 = t.stringFrom(t.filetab, pos);
  :�				_key$1 = s$1; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$1)] = { k: _key$1, v: pos };
  :�				pos = pos + ((((s$1.length + 1 >> 0) >>> 0))) >>> 0;
  :�				i$1 = i$1 + (1) >>> 0;
    			}
    		/* } */ case 7:
  :�		t.fileMap = m;
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.initFileMap }; } $f._key = _key; $f._key$1 = _key$1; $f._r = _r; $f._r$1 = _r$1; $f.i = i; $f.i$1 = i$1; $f.m = m; $f.pos = pos; $f.s = s; $f.s$1 = s$1; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.initFileMap = function() { return this.$val.initFileMap(); };
	LineTableinitFileMap~debug/gosym.LineTabledebug/gosym.stringFrom~debug/gosym.string~ %(*debug/gosym.LineTable).go12MapFiles ��	LineTable.ptr.prototype.go12MapFiles = function(m, obj) {
		var _entry, _i, _key, _keys, _ref, file, m, obj, t, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _key = $f._key; _keys = $f._keys; _ref = $f._ref; file = $f.file; m = $f.m; obj = $f.obj; t = $f.t; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		t = this;
  <		$deferred.push([(function() {
  < 			$recover();
    		}), []]);
  <1		$r = t.initFileMap(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  <B		_ref = t.fileMap;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			file = _entry.k;
  <b			_key = file; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: obj };
    			_i++;
		}
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: LineTable.ptr.prototype.go12MapFiles }; } $f._entry = _entry; $f._i = _i; $f._key = _key; $f._keys = _keys; $f._ref = _ref; $f.file = file; $f.m = m; $f.obj = obj; $f.t = t; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	LineTable.prototype.go12MapFiles = function(m, obj) { return this.$val.go12MapFiles(m, obj); };
	LineTablego12MapFiles~debug/gosym.LineTabledebug/gosym.initFileMap~ (*debug/gosym.Sym).Static ��	Sym.ptr.prototype.Static = function() {
		var s;
		s = this;
  ??		return s.Type >= 97;
    	};
	Sym.prototype.Static = function() { return this.$val.Static(); };
Symdebug/gosym.Sym (*debug/gosym.Sym).PackageName �>	Sym.ptr.prototype.PackageName = function() {
		var i, name, pathend, s;
		s = this;
  ?�		name = s.Name;
    		if (strings.HasPrefix(name, "go.") || strings.HasPrefix(name, "type.")) {
  @�			return "";
    		}
  @�		pathend = strings.LastIndex(name, "/");
    		if (pathend < 0) {
  A1			pathend = 0;
    		}
  AE		i = strings.Index($substring(name, pathend), ".");
    		if (!((i === -1))) {
  Az			return $substring(name, 0, (pathend + i >> 0));
    		}
  A�		return "";
    	};
	Sym.prototype.PackageName = function() { return this.$val.PackageName(); };
Symdebug/gosym.Symstrings.HasPrefixstrings.Indexstrings.LastIndex (*debug/gosym.Sym).ReceiverName �5	Sym.ptr.prototype.ReceiverName = function() {
		var l, pathend, r, s;
		s = this;
  B2		pathend = strings.LastIndex(s.Name, "/");
    		if (pathend < 0) {
  Bp			pathend = 0;
    		}
  B�		l = strings.Index($substring(s.Name, pathend), ".");
  B�		r = strings.LastIndex($substring(s.Name, pathend), ".");
    		if ((l === -1) || (r === -1) || (l === r)) {
  B�			return "";
    		}
  C		return $substring(s.Name, ((pathend + l >> 0) + 1 >> 0), (pathend + r >> 0));
    	};
	Sym.prototype.ReceiverName = function() { return this.$val.ReceiverName(); };
Symdebug/gosym.Symstrings.Indexstrings.LastIndex (*debug/gosym.Sym).BaseName �*	Sym.ptr.prototype.BaseName = function() {
		var i, s;
		s = this;
  C�		i = strings.LastIndex(s.Name, ".");
    		if (!((i === -1))) {
  C�			return $substring(s.Name, (i + 1 >> 0));
    		}
  C�		return s.Name;
    	};
	Sym.prototype.BaseName = function() { return this.$val.BaseName(); };
Symdebug/gosym.Symstrings.LastIndex debug/gosym.walksymtabdebug/gosym
walksymtab 
walksymtab�#�	walksymtab = function(data, fn) {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, data, fn, goType, i, newTable, nnul, order, p, ptrsz, s, shift, typ, wideValue, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; data = $f.data; fn = $f.fn; goType = $f.goType; i = $f.i; newTable = $f.newTable; nnul = $f.nnul; order = $f.order; p = $f.p; ptrsz = $f.ptrsz; s = $f.s; shift = $f.shift; typ = $f.typ; wideValue = $f.wideValue; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (data.$length === 0) {
  Ku			$s = -1; return $ifaceNil;
    		}
  K�		order = (x = binary.BigEndian, new x.constructor.elem(x));
  K�		newTable = false;
    		if (bytes.HasPrefix(data, oldLittleEndianSymtab)) {
  L�			data = $subslice(data, 6);
  L�			order = (x$1 = binary.LittleEndian, new x$1.constructor.elem(x$1));
    		} else if (bytes.HasPrefix(data, bigEndianSymtab)) {
  M
			newTable = true;
    		} else if (bytes.HasPrefix(data, littleEndianSymtab)) {
  MM			newTable = true;
  M_			order = (x$2 = binary.LittleEndian, new x$2.constructor.elem(x$2));
    		}
  M�		ptrsz = 0;
    		if (newTable) {
    			if (data.$length < 8) {
  M�				$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    			}
  M�			ptrsz = (((7 >= data.$length ? ($throwRuntimeError("index out of range"), undefined) : data.$array[data.$offset + 7]) >> 0));
    			if (!((ptrsz === 4)) && !((ptrsz === 8))) {
  N*				$s = -1; return new DecodingError.ptr(7, "invalid pointer size", new $Int(ptrsz));
    			}
  Nh			data = $subslice(data, 8);
    		}
  N�		s = new sym.ptr(new $Uint64(0, 0), new $Uint64(0, 0), 0, sliceType.nil);
  N�		p = data;
  N�		/* while (true) { */ case 1:
			/* if (!(p.$length >= 4)) { break; } */ if(!(p.$length >= 4)) { $s = 2; continue; }
  N�			typ = 0;
  N�			/* */ if (newTable) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (newTable) { */ case 3:
  N�				typ = ((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 63) >>> 0;
  N�				wideValue = !(((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 64) >>> 0) === 0));
  O				goType = !(((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 128) >>> 0) === 0));
    				if (typ < 26) {
  OK					typ = typ + (65) << 24 >>> 24;
    				} else {
  Of					typ = typ + (71) << 24 >>> 24;
    				}
  O~				s.typ = typ;
  O�				p = $subslice(p, 1);
  O�				/* */ if (wideValue) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if (wideValue) { */ case 6:
    					if (p.$length < ptrsz) {
  O�						$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    					}
  P!					/* */ if (ptrsz === 8) { $s = 9; continue; }
					/* */ $s = 10; continue;
    					/* if (ptrsz === 8) { */ case 9:
  P6						_r = order.Uint64($subslice(p, 0, 8)); /* */ $s = 12; case 12: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
						s.value = _r;
  PZ						p = $subslice(p, 8);
    						$s = 11; continue;
					/* } else { */ case 10:
  Pv						_r$1 = order.Uint32($subslice(p, 0, 4)); /* */ $s = 13; case 13: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						s.value = (new $Uint64(0, _r$1));
  P�						p = $subslice(p, 4);
    					/* } */ case 11:
    					$s = 8; continue;
				/* } else { */ case 7:
  P�					s.value = new $Uint64(0, 0);
  P�					shift = 0;
  P�					while (true) {
						if (!(p.$length > 0 && !(((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 128) >>> 0) === 0)))) { break; }
  Q#						s.value = (x$3 = s.value, x$4 = $shiftLeft64((new $Uint64(0, (((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 127) >>> 0))), shift), new $Uint64(x$3.$high | x$4.$high, (x$3.$low | x$4.$low) >>> 0));
  QN						shift = shift + (7) >>> 0;
  Q^						p = $subslice(p, 1);
    					}
    					if (p.$length === 0) {
  Q�						$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    					}
  Q�					s.value = (x$5 = s.value, x$6 = $shiftLeft64((new $Uint64(0, (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]))), shift), new $Uint64(x$5.$high | x$6.$high, (x$5.$low | x$6.$low) >>> 0));
  Q�					p = $subslice(p, 1);
    				/* } */ case 8:
  R				/* */ if (goType) { $s = 14; continue; }
				/* */ $s = 15; continue;
    				/* if (goType) { */ case 14:
    					if (p.$length < ptrsz) {
  R*						$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    					}
  R�					/* */ if (ptrsz === 8) { $s = 16; continue; }
					/* */ $s = 17; continue;
    					/* if (ptrsz === 8) { */ case 16:
  R�						_r$2 = order.Uint64($subslice(p, 0, 8)); /* */ $s = 19; case 19: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						s.gotype = _r$2;
  R�						p = $subslice(p, 8);
    						$s = 18; continue;
					/* } else { */ case 17:
  R�						_r$3 = order.Uint32($subslice(p, 0, 4)); /* */ $s = 20; case 20: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						s.gotype = (new $Uint64(0, _r$3));
  S
						p = $subslice(p, 4);
    					/* } */ case 18:
    				/* } */ case 15:
    				$s = 5; continue;
			/* } else { */ case 4:
  SG				_r$4 = order.Uint32($subslice(p, 0, 4)); /* */ $s = 21; case 21: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				s.value = (new $Uint64(0, _r$4));
    				if (p.$length < 5) {
  S�					$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    				}
  S�				typ = (4 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 4]);
    				if (((typ & 128) >>> 0) === 0) {
  S�					$s = -1; return new DecodingError.ptr((data.$length - p.$length >> 0) + 4 >> 0, "bad symbol type", new $Uint8(typ));
    				}
  T8				typ = (typ & ~(128)) << 24 >>> 24;
  TH				s.typ = typ;
  TW				p = $subslice(p, 5);
    			/* } */ case 5:
  Tw			i = 0;
  T�			nnul = 0;
  T�			i = 0;
			while (true) {
				if (!(i < p.$length)) { break; }
    				if (((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) === 0) {
  T�					nnul = 1;
  T�					break;
    				}
  T�				i = i + (1) >> 0;
    			}
    			_1 = typ;
    			if ((_1 === (122)) || (_1 === (90))) {
  U 				p = $subslice(p, (i + nnul >> 0));
  U				i = 0;
				while (true) {
					if (!((i + 2 >> 0) <= p.$length)) { break; }
    					if ((((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) === 0) && ((x$7 = i + 1 >> 0, ((x$7 < 0 || x$7 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$7])) === 0)) {
  U\						nnul = 2;
  Uj						break;
    					}
  U,					i = i + (2) >> 0;
    				}
    			}
    			if (p.$length < (i + nnul >> 0)) {
  U�				$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    			}
  U�			s.name = $subslice(p, 0, i);
  U�			i = i + (nnul) >> 0;
  U�			p = $subslice(p, i);
  V			/* */ if (!newTable) { $s = 22; continue; }
			/* */ $s = 23; continue;
    			/* if (!newTable) { */ case 22:
    				if (p.$length < 4) {
  V(					$s = -1; return new DecodingError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    				}
  Vw				_r$5 = order.Uint32($subslice(p, 0, 4)); /* */ $s = 24; case 24: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				s.gotype = (new $Uint64(0, _r$5));
  V�				p = $subslice(p, 4);
    			/* } */ case 23:
  V�			_r$6 = fn($clone(s, sym)); /* */ $s = 25; case 25: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_r$6;
    		$s = 1; continue;
		case 2:
  V�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: walksymtab }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f.data = data; $f.fn = fn; $f.goType = goType; $f.i = i; $f.newTable = newTable; $f.nnul = nnul; $f.order = order; $f.p = p; $f.ptrsz = ptrsz; $f.s = s; $f.shift = shift; $f.typ = typ; $f.wideValue = wideValue; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};

walksymtab
bytes.HasPrefixdebug/gosym.DecodingErrordebug/gosym.bigEndianSymtabdebug/gosym.littleEndianSymtab!debug/gosym.oldLittleEndianSymtabdebug/gosym.sliceTypedebug/gosym.symdebug/gosym.walksymtabencoding/binary.BigEndianencoding/binary.LittleEndian debug/gosym.NewTabledebug/gosymNewTable NewTable�1!	NewTable = function(symtab, pcln) {
		var _3, _4, _5, _i, _key, _r, _r$1, _r$2, _r$3, _ref, _tmp, _tmp$1, c, depth, end, end$1, err, fn, fname, i, j, j$1, lastf, lasttyp, n, n$1, n$2, n$3, n$4, n$5, na, nf, np, nz, obj, pcln, s, s$1, sym$1, symtab, t, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _3 = $f._3; _4 = $f._4; _5 = $f._5; _i = $f._i; _key = $f._key; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; c = $f.c; depth = $f.depth; end = $f.end; end$1 = $f.end$1; err = $f.err; fn = $f.fn; fname = $f.fname; i = $f.i; j = $f.j; j$1 = $f.j$1; lastf = $f.lastf; lasttyp = $f.lasttyp; n = $f.n; n$1 = $f.n$1; n$2 = $f.n$2; n$3 = $f.n$3; n$4 = $f.n$4; n$5 = $f.n$5; na = $f.na; nf = $f.nf; np = $f.np; nz = $f.nz; obj = $f.obj; pcln = $f.pcln; s = $f.s; s$1 = $f.s$1; sym$1 = $f.sym$1; symtab = $f.symtab; t = $f.t; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		fname = [fname];
		lasttyp = [lasttyp];
		n = [n];
		nf = [nf];
		nz = [nz];
		t = [t];
  W�		n[0] = 0;
  W�		_r = walksymtab(symtab, (function(fname, lasttyp, n, nf, nz, t) { return function(s) {
			var s;
  X			n[0] = n[0] + (1) >> 0;
  X			return $ifaceNil;
    		}; })(fname, lasttyp, n, nf, nz, t)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  X.			$s = -1; return [ptrType$4.nil, err];
    		}
  XG		t[0] = new Table.ptr(sliceType$2.nil, sliceType$1.nil, false, sliceType$3.nil, ptrType$5.nil);
  XP		_r$1 = pcln.isGo12(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (_r$1) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_r$1) { */ case 2:
  Xe			t[0].go12line = pcln;
    		/* } */ case 3:
  X{		fname[0] = {};
  X�		t[0].Syms = $makeSlice(sliceType$2, 0, n[0]);
  X�		nf[0] = 0;
  X�		nz[0] = 0;
  X�		lasttyp[0] = 0;
  X�		_r$2 = walksymtab(symtab, (function(fname, lasttyp, n, nf, nz, t) { return function(s) {
			var _1, _2, _entry, _key, _tuple, b, elt, eltIdx, i, i$1, n$1, n$2, ok, s, ts, w, x, x$1;
  Y			n$1 = t[0].Syms.$length;
  Y"			t[0].Syms = $subslice(t[0].Syms, 0, (n$1 + 1 >> 0));
  Y=			ts = (x = t[0].Syms, ((n$1 < 0 || n$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + n$1]));
  YP			ts.Type = s.typ;
  Yb			ts.Value = s.value;
  Yw			ts.GoType = s.gotype;
    			_1 = s.typ;
    			if ((_1 === (122)) || (_1 === (90))) {
    				if (!((lasttyp[0] === 122)) && !((lasttyp[0] === 90))) {
  Z�					nz[0] = nz[0] + (1) >> 0;
    				}
  Z�				i = 0;
				while (true) {
					if (!(i < s.name.$length)) { break; }
  [					eltIdx = $clone(binary.BigEndian, binary.bigEndian).Uint16($subslice(s.name, i, (i + 2 >> 0)));
  [U					_tuple = (_entry = fname[0][$Uint16.keyFor(eltIdx)], _entry !== undefined ? [_entry.v, true] : ["", false]);
					elt = _tuple[0];
					ok = _tuple[1];
    					if (!ok) {
  [�						return new DecodingError.ptr(-1, "bad filename code", new $Uint16(eltIdx));
    					}
  [�					n$2 = ts.Name.length;
    					if (n$2 > 0 && !((ts.Name.charCodeAt((n$2 - 1 >> 0)) === 47))) {
  [�						ts.Name = ts.Name + ("/");
    					}
  \					ts.Name = ts.Name + (elt);
  [					i = i + (2) >> 0;
    				}
    			} else {
  Y�				w = 0;
  Y�				b = s.name;
  Y�				i$1 = 0;
				while (true) {
					if (!(i$1 < b.$length)) { break; }
    					if ((((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1]) === 194) && (i$1 + 1 >> 0) < b.$length && ((x$1 = i$1 + 1 >> 0, ((x$1 < 0 || x$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + x$1])) === 183)) {
  ZQ						i$1 = i$1 + (1) >> 0;
  ZZ						((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1] = 46);
    					}
  Zo					((w < 0 || w >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + w] = ((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1]));
  Z					w = w + (1) >> 0;
  Z					i$1 = i$1 + (1) >> 0;
    				}
  Z�				ts.Name = ($bytesToString($subslice(s.name, 0, w)));
    			}
    			_2 = s.typ;
    			if ((_2 === (84)) || (_2 === (116)) || (_2 === (76)) || (_2 === (108))) {
  \[				nf[0] = nf[0] + (1) >> 0;
    			} else if (_2 === (102)) {
  \o				_key = ((s.value.$low << 16 >>> 16)); (fname[0] || $throwRuntimeError("assignment to entry in nil map"))[$Uint16.keyFor(_key)] = { k: _key, v: ts.Name };
    			}
  \�			lasttyp[0] = s.typ;
  \�			return $ifaceNil;
    		}; })(fname, lasttyp, n, nf, nz, t)); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		err = _r$2;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  \�			$s = -1; return [ptrType$4.nil, err];
    		}
  \�		t[0].Funcs = $makeSlice(sliceType$1, 0, nf[0]);
  \�		t[0].Files = {};
  ]$		obj = ptrType$6.nil;
  ].		/* */ if (!(t[0].go12line === ptrType$5.nil)) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (!(t[0].go12line === ptrType$5.nil)) { */ case 6:
  ]l			t[0].Objs = $makeSlice(sliceType$3, 1);
  ]�			obj = (x = t[0].Objs, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
  ]�			$r = t[0].go12line.go12MapFiles(t[0].Files, obj); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 8; continue;
		/* } else { */ case 7:
  ]�			t[0].Objs = $makeSlice(sliceType$3, 0, nz[0]);
    		/* } */ case 8:
  ^b		lastf = 0;
  ^r		i = 0;
		while (true) {
			if (!(i < t[0].Syms.$length)) { break; }
  ^�			sym$1 = (x$1 = t[0].Syms, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]));
  ^�			switch (0) { default:
    				_3 = sym$1.Type;
    				if ((_3 === (90)) || (_3 === (122))) {
    					if (!(t[0].go12line === ptrType$5.nil)) {
  _;						break;
    					}
    					if (!(obj === ptrType$6.nil)) {
  _}						obj.Funcs = $subslice(t[0].Funcs, lastf);
    					}
  _�					lastf = t[0].Funcs.$length;
  _�					n$1 = t[0].Objs.$length;
  _�					t[0].Objs = $subslice(t[0].Objs, 0, (n$1 + 1 >> 0));
  `					obj = (x$2 = t[0].Objs, ((n$1 < 0 || n$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + n$1]));
  `:					end = 0;
  `I					end = i + 1 >> 0;
					while (true) {
						if (!(end < t[0].Syms.$length)) { break; }
  `x						c = (x$3 = t[0].Syms, ((end < 0 || end >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + end])).Type;
    						if (!((c === 90)) && !((c === 122))) {
  `�							break;
    						}
  `i						end = end + (1) >> 0;
    					}
  `�					obj.Paths = $subslice(t[0].Syms, i, end);
  `�					i = end - 1 >> 0;
  a					depth = 0;
  a#					_ref = obj.Paths;
					_i = 0;
					while (true) {
						if (!(_i < _ref.$length)) { break; }
						j = _i;
  aB						s = (x$4 = obj.Paths, ((j < 0 || j >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + j]));
    						if (s.Name === "") {
  ap							depth = depth - (1) >> 0;
    						} else {
    							if (depth === 0) {
  a�								_key = s.Name; (t[0].Files || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: obj };
    							}
  a�							depth = depth + (1) >> 0;
    						}
    						_i++;
					}
    				} else if ((_3 === (84)) || (_3 === (116)) || (_3 === (76)) || (_3 === (108))) {
  b					n$2 = t[0].Funcs.$length;
    					if (n$2 > 0) {
  b%						(x$5 = t[0].Funcs, x$6 = n$2 - 1 >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6])).End = sym$1.Value;
    					}
    					if (sym$1.Name === "runtime.etext" || sym$1.Name === "etext") {
  ^�						i = i + (1) >> 0;
    						continue;
    					}
  b�					_tmp = 0;
					_tmp$1 = 0;
					np = _tmp;
					na = _tmp$1;
  b�					end$1 = 0;
  b�					end$1 = i + 1 >> 0;
					countloop:
					while (true) {
						if (!(end$1 < t[0].Syms.$length)) { break; }
    						_4 = (x$7 = t[0].Syms, ((end$1 < 0 || end$1 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + end$1])).Type;
    						if ((_4 === (84)) || (_4 === (116)) || (_4 === (76)) || (_4 === (108)) || (_4 === (90)) || (_4 === (122))) {
  ch							break countloop;
    						} else if (_4 === (112)) {
  c�							np = np + (1) >> 0;
    						} else if (_4 === (97)) {
  c�							na = na + (1) >> 0;
    						}
  c						end$1 = end$1 + (1) >> 0;
    					}
  c�					n$3 = t[0].Funcs.$length;
  c�					t[0].Funcs = $subslice(t[0].Funcs, 0, (n$3 + 1 >> 0));
  d					fn = (x$8 = t[0].Funcs, ((n$3 < 0 || n$3 >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + n$3]));
  d!					sym$1.Func = fn;
  d2					fn.Params = $makeSlice(sliceType$4, 0, np);
  dU					fn.Locals = $makeSlice(sliceType$4, 0, na);
  dx					fn.Sym = sym$1;
  d�					fn.Entry = sym$1.Value;
  d�					fn.Obj = obj;
    					if (!(t[0].go12line === ptrType$5.nil)) {
  eE						fn.LineTable = t[0].go12line;
    					} else if (!(pcln === ptrType$5.nil)) {
  e~						fn.LineTable = pcln.slice(fn.Entry);
  e�						pcln = fn.LineTable;
    					}
  e�					j$1 = i;
					while (true) {
						if (!(j$1 < end$1)) { break; }
  e�						s$1 = (x$9 = t[0].Syms, ((j$1 < 0 || j$1 >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + j$1]));
    						_5 = s$1.Type;
    						if (_5 === (109)) {
  f							fn.FrameSize = ((s$1.Value.$low >> 0));
    						} else if (_5 === (112)) {
  fG							n$4 = fn.Params.$length;
  f`							fn.Params = $subslice(fn.Params, 0, (n$4 + 1 >> 0));
  f�							(x$10 = fn.Params, ((n$4 < 0 || n$4 >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + n$4] = s$1));
    						} else if (_5 === (97)) {
  f�							n$5 = fn.Locals.$length;
  f�							fn.Locals = $subslice(fn.Locals, 0, (n$5 + 1 >> 0));
  f�							(x$11 = fn.Locals, ((n$5 < 0 || n$5 >= x$11.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + n$5] = s$1));
    						}
  e�						j$1 = j$1 + (1) >> 0;
    					}
  g					i = end$1 - 1 >> 0;
    				}
    			}
  ^�			i = i + (1) >> 0;
    		}
  g*		/* */ if (!(t[0].go12line === ptrType$5.nil) && (nf[0] === 0)) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!(t[0].go12line === ptrType$5.nil) && (nf[0] === 0)) { */ case 10:
  gN			_r$3 = t[0].go12line.go12Funcs(); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			t[0].Funcs = _r$3;
    		/* } */ case 11:
    		if (!(obj === ptrType$6.nil)) {
  g�			obj.Funcs = $subslice(t[0].Funcs, lastf);
    		}
  g�		$s = -1; return [t[0], $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewTable }; } $f._3 = _3; $f._4 = _4; $f._5 = _5; $f._i = _i; $f._key = _key; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.c = c; $f.depth = depth; $f.end = end; $f.end$1 = end$1; $f.err = err; $f.fn = fn; $f.fname = fname; $f.i = i; $f.j = j; $f.j$1 = j$1; $f.lastf = lastf; $f.lasttyp = lasttyp; $f.n = n; $f.n$1 = n$1; $f.n$2 = n$2; $f.n$3 = n$3; $f.n$4 = n$4; $f.n$5 = n$5; $f.na = na; $f.nf = nf; $f.np = np; $f.nz = nz; $f.obj = obj; $f.pcln = pcln; $f.s = s; $f.s$1 = s$1; $f.sym$1 = sym$1; $f.symtab = symtab; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewTable = NewTable;
NewTabledebug/gosym.DecodingErrordebug/gosym.LineTabledebug/gosym.NewTabledebug/gosym.Objdebug/gosym.Symdebug/gosym.Tabledebug/gosym.go12Funcs~debug/gosym.go12MapFiles~debug/gosym.isGo12~debug/gosym.ptrType$4debug/gosym.ptrType$5debug/gosym.ptrType$6debug/gosym.ptrType$7debug/gosym.sliceType$1debug/gosym.sliceType$2debug/gosym.sliceType$3debug/gosym.sliceType$4debug/gosym.slice~debug/gosym.walksymtabencoding/binary.BigEndianencoding/binary.bigEndian (*debug/gosym.Table).PCToFunc �	Table.ptr.prototype.PCToFunc = function(pc) {
		var _q, fn, funcs, m, pc, t, x, x$1, x$2;
		t = this;
  hP		funcs = t.Funcs;
  hb		while (true) {
			if (!(funcs.$length > 0)) { break; }
  hy			m = (_q = funcs.$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  h�			fn = ((m < 0 || m >= funcs.$length) ? ($throwRuntimeError("index out of range"), undefined) : funcs.$array[funcs.$offset + m]);
    			if ((x = fn.Entry, (pc.$high < x.$high || (pc.$high === x.$high && pc.$low < x.$low)))) {
  h�				funcs = $subslice(funcs, 0, m);
    			} else if ((x$1 = fn.Entry, (x$1.$high < pc.$high || (x$1.$high === pc.$high && x$1.$low <= pc.$low))) && (x$2 = fn.End, (pc.$high < x$2.$high || (pc.$high === x$2.$high && pc.$low < x$2.$low)))) {
  h�				return fn;
    			} else {
  i				funcs = $subslice(funcs, (m + 1 >> 0));
    			}
    		}
  i3		return ptrType.nil;
    	};
	Table.prototype.PCToFunc = function(pc) { return this.$val.PCToFunc(pc); };
Tabledebug/gosym.Tabledebug/gosym.ptrType (*debug/gosym.Table).PCToLine ��	Table.ptr.prototype.PCToLine = function(pc) {
		var _r, _r$1, _r$2, _r$3, _tuple, file, fn, line, pc, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; file = $f.file; fn = $f.fn; line = $f.line; pc = $f.pc; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		file = "";
		line = 0;
		fn = ptrType.nil;
		t = this;
  j		fn = t.PCToFunc(pc);
    		if (fn === ptrType.nil) {
  j)			$s = -1; return [file, line, fn];
    		}
  j4		/* */ if (!(t.go12line === ptrType$5.nil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(t.go12line === ptrType$5.nil)) { */ case 1:
  jM			_r = t.go12line.go12PCToFile(pc); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			file = _r;
  jr			_r$1 = t.go12line.go12PCToLine(pc); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			line = _r$1;
    			$s = 3; continue;
		/* } else { */ case 2:
  j�			_r$2 = fn.LineTable.PCToLine(pc); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = fn.Obj.lineFromAline(_r$2); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple = _r$3;
			file = _tuple[0];
			line = _tuple[1];
    		/* } */ case 3:
  j�		$s = -1; return [file, line, fn];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Table.ptr.prototype.PCToLine }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f.file = file; $f.fn = fn; $f.line = line; $f.pc = pc; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Table.prototype.PCToLine = function(pc) { return this.$val.PCToLine(pc); };
Tabledebug/gosym.Tabledebug/gosym.go12PCToFile~debug/gosym.go12PCToLine~debug/gosym.lineFromAline~debug/gosym.ptrTypedebug/gosym.ptrType$5 (*debug/gosym.Table).LineToPC ��	Table.ptr.prototype.LineToPC = function(file, line) {
		var _entry, _i, _r, _r$1, _ref, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, abs, err, f, file, fn, i, line, obj, ok, pc, pc$1, pc$2, t, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; abs = $f.abs; err = $f.err; f = $f.f; file = $f.file; fn = $f.fn; i = $f.i; line = $f.line; obj = $f.obj; ok = $f.ok; pc = $f.pc; pc$1 = $f.pc$1; pc$2 = $f.pc$2; t = $f.t; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		pc = new $Uint64(0, 0);
		fn = ptrType.nil;
		err = $ifaceNil;
		t = this;
  k�		_tuple = (_entry = t.Files[$String.keyFor(file)], _entry !== undefined ? [_entry.v, true] : [ptrType$6.nil, false]);
		obj = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
    			_tmp = new $Uint64(0, 0);
			_tmp$1 = ptrType.nil;
			_tmp$2 = new UnknownFileError((file));
			pc = _tmp;
			fn = _tmp$1;
			err = _tmp$2;
			$s = -1; return [pc, fn, err];
    		}
  lE		/* */ if (!(t.go12line === ptrType$5.nil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(t.go12line === ptrType$5.nil)) { */ case 1:
  l^			_r = t.go12line.go12LineToPC(file, line); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			pc$1 = _r;
    			if ((pc$1.$high === 0 && pc$1.$low === 0)) {
    				_tmp$3 = new $Uint64(0, 0);
				_tmp$4 = ptrType.nil;
				_tmp$5 = new UnknownLineError.ptr(file, line);
				pc = _tmp$3;
				fn = _tmp$4;
				err = _tmp$5;
				$s = -1; return [pc, fn, err];
    			}
    			_tmp$6 = pc$1;
			_tmp$7 = t.PCToFunc(pc$1);
			_tmp$8 = $ifaceNil;
			pc = _tmp$6;
			fn = _tmp$7;
			err = _tmp$8;
			$s = -1; return [pc, fn, err];
    		/* } */ case 2:
  l�		_tuple$1 = obj.alineFromLine(file, line);
		abs = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  m.			$s = -1; return [pc, fn, err];
    		}
  m9		_ref = obj.Funcs;
		_i = 0;
		/* while (true) { */ case 4:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 5; continue; }
			i = _i;
  mV			f = (x = obj.Funcs, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
  mk			_r$1 = f.LineTable.LineToPC(abs, f.End); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			pc$2 = _r$1;
    			if (!((pc$2.$high === 0 && pc$2.$low === 0))) {
    				_tmp$9 = pc$2;
				_tmp$10 = f;
				_tmp$11 = $ifaceNil;
				pc = _tmp$9;
				fn = _tmp$10;
				err = _tmp$11;
				$s = -1; return [pc, fn, err];
    			}
    			_i++;
		$s = 4; continue;
		case 5:
    		_tmp$12 = new $Uint64(0, 0);
		_tmp$13 = ptrType.nil;
		_tmp$14 = new UnknownLineError.ptr(file, line);
		pc = _tmp$12;
		fn = _tmp$13;
		err = _tmp$14;
		$s = -1; return [pc, fn, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Table.ptr.prototype.LineToPC }; } $f._entry = _entry; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.abs = abs; $f.err = err; $f.f = f; $f.file = file; $f.fn = fn; $f.i = i; $f.line = line; $f.obj = obj; $f.ok = ok; $f.pc = pc; $f.pc$1 = pc$1; $f.pc$2 = pc$2; $f.t = t; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Table.prototype.LineToPC = function(file, line) { return this.$val.LineToPC(file, line); };
Tabledebug/gosym.Tabledebug/gosym.UnknownFileErrordebug/gosym.UnknownLineErrordebug/gosym.alineFromLine~debug/gosym.go12LineToPC~debug/gosym.ptrTypedebug/gosym.ptrType$5debug/gosym.ptrType$6 (*debug/gosym.Table).LookupSym ��	Table.ptr.prototype.LookupSym = function(name) {
		var _1, _i, _ref, i, name, s, t, x;
		t = this;
  n�		_ref = t.Syms;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  n�			s = (x = t.Syms, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    			_1 = s.Type;
    			if ((_1 === (84)) || (_1 === (116)) || (_1 === (76)) || (_1 === (108)) || (_1 === (68)) || (_1 === (100)) || (_1 === (66)) || (_1 === (98))) {
    				if (s.Name === name) {
  o3					return s;
    				}
    			}
    			_i++;
		}
  oI		return ptrType$7.nil;
    	};
	Table.prototype.LookupSym = function(name) { return this.$val.LookupSym(name); };
Tabledebug/gosym.Tabledebug/gosym.ptrType$7 (*debug/gosym.Table).LookupFunc �	Table.ptr.prototype.LookupFunc = function(name) {
		var _i, _ref, f, i, name, t, x;
		t = this;
  o�		_ref = t.Funcs;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  p			f = (x = t.Funcs, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    			if (f.Sym.Name === name) {
  p@				return f;
    			}
    			_i++;
		}
  pQ		return ptrType.nil;
    	};
	Table.prototype.LookupFunc = function(name) { return this.$val.LookupFunc(name); };
Tabledebug/gosym.Tabledebug/gosym.ptrType (*debug/gosym.Table).SymByAddr �	Table.ptr.prototype.SymByAddr = function(addr) {
		var _1, _i, _ref, addr, i, s, t, x, x$1;
		t = this;
  p�		_ref = t.Syms;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  p�			s = (x = t.Syms, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    			_1 = s.Type;
    			if ((_1 === (84)) || (_1 === (116)) || (_1 === (76)) || (_1 === (108)) || (_1 === (68)) || (_1 === (100)) || (_1 === (66)) || (_1 === (98))) {
    				if ((x$1 = s.Value, (x$1.$high === addr.$high && x$1.$low === addr.$low))) {
  qg					return s;
    				}
    			}
    			_i++;
		}
  q}		return ptrType$7.nil;
    	};
	Table.prototype.SymByAddr = function(addr) { return this.$val.SymByAddr(addr); };
Tabledebug/gosym.Tabledebug/gosym.ptrType$7  (*debug/gosym.Obj).lineFromAline ��	Obj.ptr.prototype.lineFromAline = function(aline) {
		var _i, _ref, aline, noPath, o, s, tos, val;
		o = this;
  sx		noPath = new stackEnt.ptr("", 0, 0, ptrType$8.nil);
  s�		tos = noPath;
  s�		_ref = o.Paths;
		_i = 0;
		pathloop:
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), Sym);
  s�			val = ((s.Value.$low >> 0));
    			if (val > aline) {
  t
				break pathloop;
    			} else if ((val === 1)) {
  tF				tos = new stackEnt.ptr(s.Name, val, 0, noPath);
    			} else if (s.Name === "") {
    				if (tos === noPath) {
  t�					return ["<malformed symbol table>", 0];
    				}
  t�				tos.prev.offset = tos.prev.offset + ((val - tos.start >> 0)) >> 0;
  t�				tos = tos.prev;
    			} else {
  u$				tos = new stackEnt.ptr(s.Name, val, 0, tos);
    			}
    			_i++;
		}
    		if (tos === noPath) {
  ug			return ["", 0];
    		}
  ux		return [tos.path, ((aline - tos.start >> 0) - tos.offset >> 0) + 1 >> 0];
    	};
	Obj.prototype.lineFromAline = function(aline) { return this.$val.lineFromAline(aline); };
ObjlineFromAline~debug/gosym.Objdebug/gosym.Symdebug/gosym.ptrType$8debug/gosym.stackEnt  (*debug/gosym.Obj).alineFromLine ��	Obj.ptr.prototype.alineFromLine = function(path, line) {
		var _i, _i$1, _ref, _ref$1, depth, i, incstart, line, o, path, s, s$1, val;
		o = this;
    		if (line < 1) {
  v			return [0, new UnknownLineError.ptr(path, line)];
    		}
  v/		_ref = o.Paths;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			s = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), Sym);
    			if (!(s.Name === path)) {
  vx				_i++;
				continue;
    			}
  v�			depth = 0;
  v�			incstart = 0;
  v�			line = line + (((s.Value.$low >> 0))) >> 0;
  v�			_ref$1 = $subslice(o.Paths, i);
			_i$1 = 0;
			pathloop:
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				s$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), Sym);
  w				val = ((s$1.Value.$low >> 0));
    				if ((depth === 1) && val >= line) {
  w\					return [line - 1 >> 0, $ifaceNil];
    				} else if (s$1.Name === "") {
  w�					depth = depth - (1) >> 0;
    					if (depth === 0) {
  w�						break pathloop;
    					} else if (depth === 1) {
  w�						line = line + ((val - incstart >> 0)) >> 0;
    					}
    				} else {
    					if (depth === 1) {
  x						incstart = val;
    					}
  x8					depth = depth + (1) >> 0;
    				}
    				_i$1++;
			}
  xK			return [0, new UnknownLineError.ptr(path, line)];
    		}
  xw		return [0, new UnknownFileError((path))];
    	};
	Obj.prototype.alineFromLine = function(path, line) { return this.$val.alineFromLine(path, line); };
ObjalineFromLine~debug/gosym.Objdebug/gosym.Symdebug/gosym.UnknownFileErrordebug/gosym.UnknownLineError $(debug/gosym.UnknownFileError).Error ��	UnknownFileError.prototype.Error = function() {
		var e;
		e = this.$val;
  yQ		return "unknown file: " + (e);
    	};
	$ptrType(UnknownFileError).prototype.Error = function() { return new UnknownFileError(this.$get()).Error(); };
UnknownFileErrordebug/gosym.UnknownFileError %(*debug/gosym.UnknownLineError).Error ��	UnknownLineError.ptr.prototype.Error = function() {
		var e;
		e = this;
  z�		return "no code at " + e.File + ":" + strconv.Itoa(e.Line);
    	};
	UnknownLineError.prototype.Error = function() { return this.$val.Error(); };
UnknownLineErrordebug/gosym.UnknownLineErrorstrconv.Itoa "(*debug/gosym.DecodingError).Error ��	DecodingError.ptr.prototype.Error = function() {
		var _r, _r$1, e, msg, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; e = $f.e; msg = $f.msg; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  {�		msg = e.msg;
  {�		/* */ if (!($interfaceIsEqual(e.val, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(e.val, $ifaceNil))) { */ case 1:
  {�			_r = fmt.Sprintf(" '%v'", new sliceType$5([e.val])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			msg = msg + (_r);
    		/* } */ case 2:
  {�		_r$1 = fmt.Sprintf(" at byte %#x", new sliceType$5([new $Int(e.off)])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		msg = msg + (_r$1);
  |		$s = -1; return msg;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: DecodingError.ptr.prototype.Error }; } $f._r = _r; $f._r$1 = _r$1; $f.e = e; $f.msg = msg; $f.$s = $s; $f.$r = $r; return $f;
	};
	DecodingError.prototype.Error = function() { return this.$val.Error(); };
DecodingErrordebug/gosym.DecodingErrordebug/gosym.sliceType$5fmt.Sprintf ��{"Base":31769,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/debug/gosym/pclntab.go","Base":1,"Size":15476,"Lines":[0,55,109,159,160,163,178,182,183,197,198,207,216,235,243,245,246,272,289,290,298,325,332,339,347,349,350,427,430,517,595,673,745,748,829,908,961,964,1039,1114,1138,1151,1164,1174,1175,1238,1253,1254,1303,1320,1321,1343,1373,1393,1413,1433,1453,1473,1493,1513,1533,1580,1600,1659,1738,1802,1866,1925,1952,1954,1955,2026,2091,2165,2176,2197,2198,2291,2348,2380,2441,2498,2537,2541,2604,2661,2697,2755,2770,2782,2793,2811,2830,2845,2855,2860,2897,2910,2930,2949,2970,2990,3016,3027,3066,3078,3082,3101,3104,3124,3126,3127,3177,3212,3263,3265,3266,3333,3336,3388,3434,3451,3479,3482,3513,3526,3528,3529,3596,3647,3650,3702,3764,3781,3792,3795,3833,3853,3864,3867,3931,3955,3957,3958,4002,4040,4081,4112,4169,4289,4291,4292,4323,4355,4358,4425,4493,4567,4591,4594,4664,4709,4710,4778,4814,4832,4859,4861,4862,4891,4921,4922,4979,5036,5083,5104,5140,5143,5170,5172,5173,5230,5267,5280,5301,5331,5340,5343,5344,5425,5503,5553,5557,5624,5643,5644,5660,5716,5728,5733,5734,5803,5863,5935,5990,5999,6002,6003,6032,6079,6123,6133,6161,6218,6246,6300,6329,6387,6416,6471,6481,6490,6493,6494,6552,6583,6614,6615,6641,6655,6700,6755,6801,6835,6880,6908,6953,6983,7028,7056,7101,7132,7162,7214,7252,7265,7310,7332,7357,7392,7411,7463,7517,7555,7586,7628,7667,7677,7700,7703,7732,7734,7735,7809,7850,7902,7918,7930,7935,7936,7978,8004,8028,8045,8099,8155,8224,8242,8301,8317,8337,8353,8411,8425,8439,8443,8446,8460,8462,8463,8536,8585,8679,8692,8695,8696,8755,8820,8836,8854,8868,8882,8908,8971,9020,9053,9063,9074,9103,9118,9122,9125,9137,9139,9140,9201,9253,9274,9284,9315,9327,9339,9374,9393,9402,9406,9409,9418,9428,9430,9431,9490,9540,9576,9587,9590,9636,9685,9707,9717,9719,9720,9784,9848,9882,9893,9896,9932,9971,9991,10001,10003,10004,10048,10096,10134,10136,10137,10203,10282,10310,10339,10354,10357,10378,10406,10416,10432,10435,10461,10501,10525,10541,10554,10556,10557,10617,10678,10739,10811,10831,10832,10850,10863,10905,10926,10940,10944,10947,10958,10960,10961,11024,11080,11149,11220,11295,11372,11488,11523,11534,11537,11538,11563,11588,11610,11627,11649,11666,11689,11744,11767,11794,11851,11855,11907,11966,12025,12083,12115,12140,12216,12284,12309,12346,12371,12378,12409,12434,12441,12447,12472,12477,12481,12504,12507,12517,12519,12520,12599,12656,12672,12696,12709,12713,12718,12719,12740,12755,12767,12770,12793,12840,12883,12885,12886,12963,13023,13039,13063,13076,13080,13085,13086,13107,13122,13134,13137,13160,13207,13245,13270,13286,13299,13303,13357,13360,13376,13417,13429,13432,13477,13562,13602,13605,13616,13618,13619,13713,13783,13799,13823,13833,13837,13842,13843,13860,13892,13902,13913,13916,13917,13941,14018,14091,14109,14152,14219,14243,14291,14339,14366,14417,14444,14448,14532,14547,14560,14564,14567,14577,14579,14580,14646,14682,14695,14716,14717,14740,14749,14752,14782,14783,14808,14852,14903,14915,14919,14929,14946,14990,15027,15041,15070,15074,15077,15092,15094,15095,15167,15244,15309,15373,15389,15401,15406,15407,15424,15455,15471,15474],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/debug/gosym/symtab.go","Base":15478,"Size":16290,"Lines":[0,55,109,159,160,212,272,296,310,311,320,329,348,355,366,377,379,380,383,394,398,399,448,466,481,494,509,524,588,600,602,603,683,736,737,797,838,875,891,892,993,1061,1134,1146,1149,1150,1191,1209,1223,1226,1227,1282,1308,1311,1322,1324,1325,1388,1429,1467,1510,1528,1542,1545,1588,1635,1670,1682,1685,1725,1727,1728,1802,1836,1887,1909,1912,1927,1929,1930,1986,2005,2019,2025,2043,2098,2153,2168,2190,2206,2208,2209,2275,2278,2363,2394,2397,2465,2468,2540,2574,2577,2637,2655,2700,2714,2715,2783,2835,2864,2930,2951,2953,2954,2957,2974,2978,2979,3039,3109,3151,3171,3221,3235,3307,3376,3377,3426,3428,3429,3447,3462,3477,3490,3505,3507,3508,3514,3588,3662,3730,3732,3733,3790,3837,3850,3853,3900,3919,3929,3981,4021,4096,4148,4166,4196,4242,4260,4309,4327,4357,4360,4375,4390,4411,4470,4474,4497,4529,4588,4592,4610,4613,4624,4635,4654,4669,4685,4720,4741,4772,4800,4817,4832,4844,4864,4869,4884,4897,4915,4939,5000,5006,5031,5051,5087,5102,5115,5159,5174,5180,5192,5212,5228,5249,5288,5331,5347,5362,5368,5389,5450,5456,5493,5507,5512,5527,5551,5612,5618,5645,5665,5702,5717,5730,5775,5790,5796,5801,5812,5838,5880,5899,5959,5964,5978,6000,6074,6079,6095,6110,6123,6127,6128,6139,6151,6166,6197,6215,6228,6238,6243,6247,6262,6279,6297,6335,6369,6383,6394,6400,6405,6409,6432,6491,6495,6513,6525,6537,6538,6555,6574,6634,6639,6654,6696,6709,6713,6721,6724,6736,6738,6739,6813,6855,6932,6996,7007,7054,7060,7073,7077,7094,7112,7115,7116,7129,7149,7169,7172,7206,7234,7243,7252,7273,7319,7338,7365,7384,7402,7423,7446,7463,7474,7524,7534,7549,7582,7638,7647,7663,7669,7685,7693,7698,7731,7748,7789,7798,7803,7844,7899,7928,7941,8001,8007,8064,8084,8090,8109,8114,8118,8135,8162,8170,8182,8218,8222,8240,8253,8257,8274,8292,8295,8296,8327,8360,8361,8375,8399,8436,8462,8481,8521,8531,8561,8564,8565,8628,8683,8695,8731,8751,8771,8803,8829,8897,8907,8912,8944,8963,8995,9000,9024,9025,9048,9068,9096,9116,9117,9149,9164,9211,9264,9275,9281,9286,9315,9347,9348,9372,9386,9416,9439,9461,9474,9487,9508,9536,9543,9556,9562,9567,9568,9610,9643,9676,9681,9740,9753,9758,9759,9803,9821,9836,9849,9896,9926,9965,9986,10000,10010,10024,10034,10040,10045,10046,10080,10101,10131,10152,10169,10204,10239,10255,10279,10295,10321,10369,10418,10443,10473,10500,10540,10564,10569,10599,10619,10639,10653,10686,10700,10725,10761,10783,10797,10822,10858,10880,10886,10891,10923,10927,10930,10931,10966,11001,11004,11021,11051,11054,11070,11072,11073,11141,11181,11225,11243,11265,11287,11305,11316,11338,11360,11398,11411,11422,11445,11449,11452,11464,11466,11467,11535,11588,11660,11697,11706,11709,11733,11770,11807,11817,11880,11883,11891,11893,11894,11962,12032,12075,12158,12184,12194,12234,12237,12238,12262,12306,12321,12369,12373,12406,12409,12410,12453,12470,12479,12482,12510,12531,12572,12587,12608,12612,12615,12661,12663,12664,12736,12774,12820,12854,12879,12897,12915,12962,12985,12998,13003,13007,13010,13022,13024,13025,13098,13136,13184,13210,13229,13255,13267,13271,13274,13286,13288,13289,13371,13417,13442,13460,13478,13525,13549,13562,13567,13571,13574,13586,13588,13589,13592,13608,13612,13613,13675,13738,13806,13852,13855,13936,13937,13992,14016,14032,14045,14058,14077,14080,14081,14117,14132,14133,14143,14172,14194,14205,14225,14243,14244,14261,14285,14328,14329,14350,14360,14382,14423,14428,14466,14484,14485,14496,14507,14547,14551,14554,14555,14575,14590,14593,14646,14648,14649,14715,14730,14772,14775,14776,14805,14825,14847,14859,14863,14864,14904,14917,14936,14959,14970,15004,15027,15039,15074,15099,15100,15122,15134,15154,15174,15201,15229,15235,15236,15248,15268,15288,15294,15306,15311,15315,15357,15360,15394,15396,15397,15400,15410,15414,15415,15485,15506,15535,15536,15617,15618,15686,15755,15805,15836,15849,15859,15861,15862,15906,15966,15968,15969,16029,16050,16078,16087,16099,16116,16118,16119,16160,16174,16193,16230,16233,16276,16288],"Infos":null}]}
 