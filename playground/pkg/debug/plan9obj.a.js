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
GoLinkname�� Implementation�� 	Reference��   �����debug/plan9objplan9objencoding/binaryerrorsfmtioos��i �� 
FileHeaderSectionsSectioncloserCloserioClosefFileSymbolsSymnameMagicBssEntryPtrSizeLoadAddressHdrSizerReaderAtSectionHeadersrSectionReaderDatasOpen
ReadSeekerNameSizeOffsetValueTypeReadAtpoffnerrbaselimitReadSeekoffsetwhenceReaderSeekerplan9objMagic386Magic64
MagicAMD64MagicARMNewFile    #& $+     (   *   6 ?? C F?#T - . 4B    ; 4D   I    4K G  M   L	   R	   V
   \   d
   p
  T x C ��C �� C ���C �G z+?F  x�  �   ?F  G  �    �  �+�  ��  z�  ��  ## �+T � � ��   �   � ��   �  �   �	   �	  T �   �
   �   �  T � +  .   T �+  � �� � � � T �+ x�   �   �   �  ����T � � �� �� � �  � �� � �      � �� �� � � �  � ��    �+ �++ � � T �+  � �� � � T �+  � � �     T � � 6/y�}�������������C�++ $�����z�����$ binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
FileHeader�=	FileHeader = $pkg.FileHeader = $newType(0, $kindStruct, "plan9obj.FileHeader", true, "debug/plan9obj", true, function(Magic_, Bss_, Entry_, PtrSize_, LoadAddress_, HdrSize_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Magic = 0;
			this.Bss = 0;
			this.Entry = new $Uint64(0, 0);
			this.PtrSize = 0;
			this.LoadAddress = new $Uint64(0, 0);
			this.HdrSize = new $Uint64(0, 0);
			return;
		}
		this.Magic = Magic_;
		this.Bss = Bss_;
		this.Entry = Entry_;
		this.PtrSize = PtrSize_;
		this.LoadAddress = LoadAddress_;
		this.HdrSize = HdrSize_;
	});
�5	FileHeader.init("", [{prop: "Magic", name: "Magic", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Bss", name: "Bss", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Entry", name: "Entry", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "PtrSize", name: "PtrSize", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "LoadAddress", name: "LoadAddress", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "HdrSize", name: "HdrSize", embedded: false, exported: true, typ: $Uint64, tag: ""}]);

FileHeaderdebug/plan9obj.FileHeader  File��	File = $pkg.File = $newType(0, $kindStruct, "plan9obj.File", true, "debug/plan9obj", true, function(FileHeader_, Sections_, closer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.FileHeader = new FileHeader.ptr(0, 0, new $Uint64(0, 0), 0, new $Uint64(0, 0), new $Uint64(0, 0));
			this.Sections = sliceType$2.nil;
			this.closer = $ifaceNil;
			return;
		}
		this.FileHeader = FileHeader_;
		this.Sections = Sections_;
		this.closer = closer_;
	});
�	ptrType.methods = [{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Symbols", name: "Symbols", pkg: "", typ: $funcType([], [sliceType$4, $error], false)}, {prop: "Section", name: "Section", pkg: "", typ: $funcType([$String], [ptrType$1], false)}];
�C	File.init("debug/plan9obj", [{prop: "FileHeader", name: "FileHeader", embedded: true, exported: true, typ: FileHeader, tag: ""}, {prop: "Sections", name: "Sections", embedded: false, exported: true, typ: sliceType$2, tag: ""}, {prop: "closer", name: "closer", embedded: false, exported: false, typ: io.Closer, tag: ""}]);
Filedebug/plan9obj.Filedebug/plan9obj.FileHeaderdebug/plan9obj.ptrTypedebug/plan9obj.ptrType$1debug/plan9obj.sliceType$2debug/plan9obj.sliceType$4	io.Closer  SectionHeader�]	SectionHeader = $pkg.SectionHeader = $newType(0, $kindStruct, "plan9obj.SectionHeader", true, "debug/plan9obj", true, function(Name_, Size_, Offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Size = 0;
			this.Offset = 0;
			return;
		}
		this.Name = Name_;
		this.Size = Size_;
		this.Offset = Offset_;
	});
�!	SectionHeader.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Size", name: "Size", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Uint32, tag: ""}]);
SectionHeaderdebug/plan9obj.SectionHeader  Section��	Section = $pkg.Section = $newType(0, $kindStruct, "plan9obj.Section", true, "debug/plan9obj", true, function(SectionHeader_, ReaderAt_, sr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.SectionHeader = new SectionHeader.ptr("", 0, 0);
			this.ReaderAt = $ifaceNil;
			this.sr = ptrType$3.nil;
			return;
		}
		this.SectionHeader = SectionHeader_;
		this.ReaderAt = ReaderAt_;
		this.sr = sr_;
	});
��	ptrType$1.methods = [{prop: "Data", name: "Data", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([], [io.ReadSeeker], false)}];
�F	Section.init("debug/plan9obj", [{prop: "SectionHeader", name: "SectionHeader", embedded: true, exported: true, typ: SectionHeader, tag: ""}, {prop: "ReaderAt", name: "ReaderAt", embedded: true, exported: true, typ: io.ReaderAt, tag: ""}, {prop: "sr", name: "sr", embedded: false, exported: false, typ: ptrType$3, tag: ""}]);
Sectiondebug/plan9obj.Sectiondebug/plan9obj.SectionHeaderdebug/plan9obj.ptrType$1debug/plan9obj.ptrType$3debug/plan9obj.sliceTypeio.ReadSeekerio.ReaderAt  Sym�K	Sym = $pkg.Sym = $newType(0, $kindStruct, "plan9obj.Sym", true, "debug/plan9obj", true, function(Value_, Type_, Name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Value = new $Uint64(0, 0);
			this.Type = 0;
			this.Name = "";
			return;
		}
		this.Value = Value_;
		this.Type = Type_;
		this.Name = Name_;
	});
�	Sym.init("", [{prop: "Value", name: "Value", embedded: false, exported: true, typ: $Uint64, tag: ""}, {prop: "Type", name: "Type", embedded: false, exported: true, typ: $Int32, tag: ""}, {prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}]);
Symdebug/plan9obj.Sym  formatError�L	formatError = $pkg.formatError = $newType(0, $kindStruct, "plan9obj.formatError", true, "debug/plan9obj", false, function(off_, msg_, val_) {
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
f	ptrType$4.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
�+	formatError.init("debug/plan9obj", [{prop: "off", name: "off", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "msg", name: "msg", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $emptyInterface, tag: ""}]);
formatErrordebug/plan9obj.formatErrordebug/plan9obj.ptrType$4  prog�$	prog = $pkg.prog = $newType(0, $kindStruct, "plan9obj.prog", true, "debug/plan9obj", false, function(Magic_, Text_, Data_, Bss_, Syms_, Entry_, Spsz_, Pcsz_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Magic = 0;
			this.Text = 0;
			this.Data = 0;
			this.Bss = 0;
			this.Syms = 0;
			this.Entry = 0;
			this.Spsz = 0;
			this.Pcsz = 0;
			return;
		}
		this.Magic = Magic_;
		this.Text = Text_;
		this.Data = Data_;
		this.Bss = Bss_;
		this.Syms = Syms_;
		this.Entry = Entry_;
		this.Spsz = Spsz_;
		this.Pcsz = Pcsz_;
	});
��	prog.init("", [{prop: "Magic", name: "Magic", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Text", name: "Text", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Data", name: "Data", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Bss", name: "Bss", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Syms", name: "Syms", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Entry", name: "Entry", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Spsz", name: "Spsz", embedded: false, exported: true, typ: $Uint32, tag: ""}, {prop: "Pcsz", name: "Pcsz", embedded: false, exported: true, typ: $Uint32, tag: ""}]);
progdebug/plan9obj.prog  sym�S	sym = $pkg.sym = $newType(0, $kindStruct, "plan9obj.sym", true, "debug/plan9obj", false, function(value_, typ_, name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.value = new $Uint64(0, 0);
			this.typ = 0;
			this.name = sliceType.nil;
			return;
		}
		this.value = value_;
		this.typ = typ_;
		this.name = name_;
	});
�%	sym.init("debug/plan9obj", [{prop: "value", name: "value", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "typ", name: "typ", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "name", name: "name", embedded: false, exported: false, typ: sliceType, tag: ""}]);
symdebug/plan9obj.sliceTypedebug/plan9obj.sym  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  ptrType	ptrType = $ptrType(File);
ptrTypedebug/plan9obj.File  	arrayType$	arrayType = $arrayType($Uint8, 4);
	arrayType  	ptrType$1 	ptrType$1 = $ptrType(Section);
	ptrType$1debug/plan9obj.Section  sliceType$2&	sliceType$2 = $sliceType(ptrType$1);
sliceType$2debug/plan9obj.ptrType$1  	ptrType$2 	ptrType$2 = $ptrType($Uint64);
	ptrType$2  
structType��	structType = $structType("debug/plan9obj", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "size", name: "size", embedded: false, exported: false, typ: $Uint32, tag: ""}]);

structType  sliceType$3'	sliceType$3 = $sliceType(structType);
sliceType$3debug/plan9obj.structType  	ptrType$3)	ptrType$3 = $ptrType(io.SectionReader);
	ptrType$3io.SectionReader  sliceType$4 	sliceType$4 = $sliceType(Sym);
sliceType$4debug/plan9obj.Sym  	ptrType$4$	ptrType$4 = $ptrType(formatError);
	ptrType$4debug/plan9obj.formatError (*debug/plan9obj.Section).Data ��	Section.ptr.prototype.Data = function() {
		var _r, _tuple, dat, err, n, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; dat = $f.dat; err = $f.err; n = $f.n; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  H		dat = $makeSlice(sliceType, $flatten64(s.sr.Size()));
  j		_r = s.sr.ReadAt(dat, new $Int64(0, 0)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (n === dat.$length) {
  �			err = $ifaceNil;
    		}
  �		$s = -1; return [$subslice(dat, 0, n), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Section.ptr.prototype.Data }; } $f._r = _r; $f._tuple = _tuple; $f.dat = dat; $f.err = err; $f.n = n; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Section.prototype.Data = function() { return this.$val.Data(); };
Sectiondebug/plan9obj.Sectiondebug/plan9obj.sliceType (*debug/plan9obj.Section).Open ��	Section.ptr.prototype.Open = function() {
		var s;
		s = this;
  0		return io.NewSectionReader(s.sr, new $Int64(0, 0), new $Int64(2147483647, 4294967295));
    	};
	Section.prototype.Open = function() { return this.$val.Open(); };
Sectiondebug/plan9obj.Sectionio.NewSectionReader #(*debug/plan9obj.formatError).Error ��	formatError.ptr.prototype.Error = function() {
		var _r, _r$1, e, msg, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; e = $f.e; msg = $f.msg; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �		msg = e.msg;
  �		/* */ if (!($interfaceIsEqual(e.val, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(e.val, $ifaceNil))) { */ case 1:
  			_r = fmt.Sprintf(" '%v'", new sliceType$1([e.val])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			msg = msg + (_r);
    		/* } */ case 2:
  *		_r$1 = fmt.Sprintf(" in record at byte %#x", new sliceType$1([new $Int(e.off)])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		msg = msg + (_r$1);
  _		$s = -1; return msg;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: formatError.ptr.prototype.Error }; } $f._r = _r; $f._r$1 = _r$1; $f.e = e; $f.msg = msg; $f.$s = $s; $f.$r = $r; return $f;
	};
	formatError.prototype.Error = function() { return this.$val.Error(); };
formatErrordebug/plan9obj.formatErrordebug/plan9obj.sliceType$1fmt.Sprintf debug/plan9obj.Opendebug/plan9objOpen Open�O	Open = function(name) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, err, f, ff, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; f = $f.f; ff = $f.ff; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = os.Open(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  				$s = -1; return [ptrType.nil, err];
    		}
  	2		_r$1 = NewFile(f); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		ff = _tuple$1[0];
		err = _tuple$1[1];
  	I		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 3:
  	[			_r$2 = f.Close(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
  	g			$s = -1; return [ptrType.nil, err];
    		/* } */ case 4:
  	{		ff.closer = f;
  	�		$s = -1; return [ff, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Open }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.f = f; $f.ff = ff; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Open = Open;
Opendebug/plan9obj.Filedebug/plan9obj.NewFiledebug/plan9obj.Opendebug/plan9obj.ptrTypeos.Open (*debug/plan9obj.File).Close ��	File.ptr.prototype.Close = function() {
		var _r, err, f, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; err = $f.err; f = $f.f; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  
5		err = $ifaceNil;
  
@		/* */ if (!($interfaceIsEqual(f.closer, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(f.closer, $ifaceNil))) { */ case 1:
  
W			_r = f.closer.Close(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
  
p			f.closer = $ifaceNil;
    		/* } */ case 2:
  
�		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Close }; } $f._r = _r; $f.err = err; $f.f = f; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Close = function() { return this.$val.Close(); };
Filedebug/plan9obj.File debug/plan9obj.parseMagicdebug/plan9obj
parseMagic 
parseMagic�C	parseMagic = function(magic) {
		var _1, m, magic;
  
�		m = $clone(binary.BigEndian, binary.bigEndian).Uint32(magic);
    		_1 = m;
    		if ((_1 === (491)) || (_1 === (35479)) || (_1 === (1607))) {
  			return [m, $ifaceNil];
    		}
  ,		return [0, new formatError.ptr(0, "bad magic number", magic)];
    	};

parseMagicdebug/plan9obj.formatErrordebug/plan9obj.parseMagicencoding/binary.BigEndianencoding/binary.bigEndian debug/plan9obj.NewFiledebug/plan9objNewFile NewFile�w	NewFile = function(r) {
		var _i, _r, _r$1, _r$2, _ref, _tuple, _tuple$1, err, err$1, err$2, err$3, f, i, magic, off, ph, r, s, sect, sects, sr, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; f = $f.f; i = $f.i; magic = $f.magic; off = $f.off; ph = $f.ph; r = $f.r; s = $f.s; sect = $f.sect; sects = $f.sects; sr = $f.sr; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  0		sr = io.NewSectionReader(r, new $Int64(0, 0), new $Int64(2147483647, 4294967295));
  		magic = arrayType.zero();
  �		_r = r.ReadAt(new sliceType(magic), new $Int64(0, 0)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [ptrType.nil, err];
    		}
  �		_tuple$1 = parseMagic(new sliceType(magic));
		err$1 = _tuple$1[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  			$s = -1; return [ptrType.nil, err$1];
    		}
  		ph = new prog.ptr(0, 0, 0, 0, 0, 0, 0, 0);
  0		_r$1 = binary.Read(sr, (x = binary.BigEndian, new x.constructor.elem(x)), ph); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err$2 = _r$1;
    		if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  m			$s = -1; return [ptrType.nil, err$2];
    		}
  �		f = new File.ptr(new FileHeader.ptr(ph.Magic, ph.Bss, (new $Uint64(0, ph.Entry)), 4, new $Uint64(0, 4096), new $Uint64(0, 32)), sliceType$2.nil, $ifaceNil);
  ;		/* */ if (!((((ph.Magic & 32768) >>> 0) === 0))) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!((((ph.Magic & 32768) >>> 0) === 0))) { */ case 3:
  [			_r$2 = binary.Read(sr, (x$1 = binary.BigEndian, new x$1.constructor.elem(x$1)), (f.$ptr_Entry || (f.$ptr_Entry = new ptrType$2(function() { return this.$target.FileHeader.Entry; }, function($v) { this.$target.FileHeader.Entry = $v; }, f)))); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err$3 = _r$2;
    			if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  �				$s = -1; return [ptrType.nil, err$3];
    			}
  �			f.FileHeader.PtrSize = 8;
  �			f.FileHeader.LoadAddress = new $Uint64(0, 2097152);
  �			f.FileHeader.HdrSize = (x$2 = f.FileHeader.HdrSize, x$3 = new $Uint64(0, 8), new $Uint64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
    		/* } */ case 4:
  �		sects = new sliceType$3([new structType.ptr("text", ph.Text), new structType.ptr("data", ph.Data), new structType.ptr("syms", ph.Syms), new structType.ptr("spsz", ph.Spsz), new structType.ptr("pcsz", ph.Pcsz)]);
  �		f.Sections = $makeSlice(sliceType$2, 5);
  �		off = ((f.FileHeader.HdrSize.$low >>> 0));
  �		_ref = sects;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			sect = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), structType);
  �			s = new Section.ptr(new SectionHeader.ptr("", 0, 0), $ifaceNil, ptrType$3.nil);
  
			SectionHeader.copy(s.SectionHeader, new SectionHeader.ptr(sect.name, sect.size, off));
  m			off = off + (sect.size) >>> 0;
  �			s.sr = io.NewSectionReader(r, (new $Int64(0, s.SectionHeader.Offset)), (new $Int64(0, s.SectionHeader.Size)));
  �			s.ReaderAt = s.sr;
  �			(x$4 = f.Sections, ((i < 0 || i >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + i] = s));
    			_i++;
		}
  �		$s = -1; return [f, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewFile }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.f = f; $f.i = i; $f.magic = magic; $f.off = off; $f.ph = ph; $f.r = r; $f.s = s; $f.sect = sect; $f.sects = sects; $f.sr = sr; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewFile = NewFile;
NewFiledebug/plan9obj.Filedebug/plan9obj.FileHeaderdebug/plan9obj.NewFiledebug/plan9obj.Sectiondebug/plan9obj.SectionHeaderdebug/plan9obj.arrayTypedebug/plan9obj.parseMagicdebug/plan9obj.progdebug/plan9obj.ptrTypedebug/plan9obj.ptrType$1debug/plan9obj.ptrType$2debug/plan9obj.ptrType$3debug/plan9obj.sliceTypedebug/plan9obj.sliceType$2debug/plan9obj.sliceType$3debug/plan9obj.structTypeencoding/binary.BigEndianencoding/binary.Readio.NewSectionReaderio.SectionReader debug/plan9obj.walksymtabdebug/plan9obj
walksymtab 
walksymtab�[	walksymtab = function(data, ptrsz, fn) {
		var _1, _r, _r$1, _r$2, data, fn, i, nnul, order, p, ptrsz, s, typ, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; data = $f.data; fn = $f.fn; i = $f.i; nnul = $f.nnul; order = $f.order; p = $f.p; ptrsz = $f.ptrsz; s = $f.s; typ = $f.typ; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  E		order = (x = binary.BigEndian, new x.constructor.elem(x));
  t		s = new sym.ptr(new $Uint64(0, 0), 0, sliceType.nil);
  {		p = data;
  �		/* while (true) { */ case 1:
			/* if (!(p.$length >= 4)) { break; } */ if(!(p.$length >= 4)) { $s = 2; continue; }
    			if (p.$length < ptrsz) {
  �				$s = -1; return new formatError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    			}
  			/* */ if (ptrsz === 8) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ptrsz === 8) { */ case 3:
  0				_r = order.Uint64($subslice(p, 0, 8)); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				s.value = _r;
  R				p = $subslice(p, 8);
    				$s = 5; continue;
			/* } else { */ case 4:
  j				_r$1 = order.Uint32($subslice(p, 0, 4)); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				s.value = (new $Uint64(0, _r$1));
  �				p = $subslice(p, 4);
    			/* } */ case 5:
  �			typ = 0;
  �			typ = ((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 127) >>> 0;
  �			s.typ = typ;
  �			p = $subslice(p, 1);
  �			i = 0;
  �			nnul = 0;
  			i = 0;
			while (true) {
				if (!(i < p.$length)) { break; }
    				if (((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) === 0) {
  <					nnul = 1;
  I					break;
    				}
   				i = i + (1) >> 0;
    			}
    			_1 = typ;
    			if ((_1 === (122)) || (_1 === (90))) {
  {				p = $subslice(p, (i + nnul >> 0));
  �				i = 0;
				while (true) {
					if (!((i + 2 >> 0) <= p.$length)) { break; }
    					if ((((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]) === 0) && ((x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$1])) === 0)) {
  �						nnul = 2;
  �						break;
    					}
  �					i = i + (2) >> 0;
    				}
    			}
    			if (p.$length < (i + nnul >> 0)) {
  				$s = -1; return new formatError.ptr(data.$length, "unexpected EOF", $ifaceNil);
    			}
  P			s.name = $subslice(p, 0, i);
  b			i = i + (nnul) >> 0;
  n			p = $subslice(p, i);
  {			_r$2 = fn($clone(s, sym)); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
    		$s = 1; continue;
		case 2:
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: walksymtab }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.data = data; $f.fn = fn; $f.i = i; $f.nnul = nnul; $f.order = order; $f.p = p; $f.ptrsz = ptrsz; $f.s = s; $f.typ = typ; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};

walksymtabdebug/plan9obj.formatErrordebug/plan9obj.sliceTypedebug/plan9obj.symdebug/plan9obj.walksymtabencoding/binary.BigEndian debug/plan9obj.newTabledebug/plan9objnewTable newTable��	newTable = function(symtab, ptrsz) {
		var _r, _r$1, err, fname, n, ptrsz, syms, symtab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; err = $f.err; fname = $f.fname; n = $f.n; ptrsz = $f.ptrsz; syms = $f.syms; symtab = $f.symtab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		fname = [fname];
		n = [n];
		syms = [syms];
  ,		n[0] = 0;
  3		_r = walksymtab(symtab, ptrsz, (function(fname, n, syms) { return function(s) {
			var s;
  j			n[0] = n[0] + (1) >> 0;
  p			return $ifaceNil;
    		}; })(fname, n, syms)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [sliceType$4.nil, err];
    		}
  �		fname[0] = {};
  �		syms[0] = $makeSlice(sliceType$4, 0, n[0]);
  �		_r$1 = walksymtab(symtab, ptrsz, (function(fname, n, syms) { return function(s) {
			var _1, _2, _entry, _key, _tuple, elt, eltIdx, i, n$1, n$2, ok, s, ts;
  			n$1 = syms[0].$length;
  +			syms[0] = $subslice(syms[0], 0, (n$1 + 1 >> 0));
  B			ts = ((n$1 < 0 || n$1 >= syms[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : syms[0].$array[syms[0].$offset + n$1]);
  S			ts.Type = ((s.typ >> 0));
  k			ts.Value = s.value;
    			_1 = s.typ;
    			if ((_1 === (122)) || (_1 === (90))) {
  �				i = 0;
				while (true) {
					if (!(i < s.name.$length)) { break; }
  �					eltIdx = $clone(binary.BigEndian, binary.bigEndian).Uint16($subslice(s.name, i, (i + 2 >> 0)));
  +					_tuple = (_entry = fname[0][$Uint16.keyFor(eltIdx)], _entry !== undefined ? [_entry.v, true] : ["", false]);
					elt = _tuple[0];
					ok = _tuple[1];
    					if (!ok) {
  V						return new formatError.ptr(-1, "bad filename code", new $Uint16(eltIdx));
    					}
  �					n$2 = ts.Name.length;
    					if (n$2 > 0 && !((ts.Name.charCodeAt((n$2 - 1 >> 0)) === 47))) {
  �						ts.Name = ts.Name + ("/");
    					}
  �					ts.Name = ts.Name + (elt);
  �					i = i + (2) >> 0;
    				}
    			} else {
  �				ts.Name = ($bytesToString(s.name));
    			}
    			_2 = s.typ;
    			if (_2 === (102)) {
   				_key = ((s.value.$low << 16 >>> 16)); (fname[0] || $throwRuntimeError("assignment to entry in nil map"))[$Uint16.keyFor(_key)] = { k: _key, v: ts.Name };
    			}
  G			return $ifaceNil;
    		}; })(fname, n, syms)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  i			$s = -1; return [sliceType$4.nil, err];
    		}
  ~		$s = -1; return [syms[0], $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newTable }; } $f._r = _r; $f._r$1 = _r$1; $f.err = err; $f.fname = fname; $f.n = n; $f.ptrsz = ptrsz; $f.syms = syms; $f.symtab = symtab; $f.$s = $s; $f.$r = $r; return $f;
	};
newTabledebug/plan9obj.Symdebug/plan9obj.formatErrordebug/plan9obj.newTabledebug/plan9obj.sliceType$4debug/plan9obj.walksymtabencoding/binary.BigEndianencoding/binary.bigEndian (*debug/plan9obj.File).Symbols ��	File.ptr.prototype.Symbols = function() {
		var $24r, _r, _r$1, _tuple, err, f, symtab, symtabSection, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; f = $f.f; symtab = $f.symtab; symtabSection = $f.symtabSection; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  �		symtabSection = f.Section("syms");
    		if (symtabSection === ptrType$1.nil) {
  (			$s = -1; return [sliceType$4.nil, errors.New("no symbol section")];
    		}
  Y		_r = symtabSection.Data(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		symtab = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [sliceType$4.nil, errors.New("cannot load symbol section")];
    		}
  �		_r$1 = newTable(symtab, f.FileHeader.PtrSize); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: File.ptr.prototype.Symbols }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.f = f; $f.symtab = symtab; $f.symtabSection = symtabSection; $f.$s = $s; $f.$r = $r; return $f;
	};
	File.prototype.Symbols = function() { return this.$val.Symbols(); };
Filedebug/plan9obj.Filedebug/plan9obj.newTabledebug/plan9obj.ptrType$1debug/plan9obj.sliceType$4
errors.New (*debug/plan9obj.File).Section �	File.ptr.prototype.Section = function(name) {
		var _i, _ref, f, name, s;
		f = this;
  w		_ref = f.Sections;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (s.SectionHeader.Name === name) {
  �				return s;
    			}
    			_i++;
		}
  �		return ptrType$1.nil;
    	};
	File.prototype.Section = function(name) { return this.$val.Section(name); };
Filedebug/plan9obj.Filedebug/plan9obj.ptrType$1 ��{"Base":7726,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/debug/plan9obj/file.go","Base":1,"Size":6860,"Lines":[0,55,109,159,160,228,245,246,255,274,284,291,297,303,305,306,361,386,406,426,446,463,483,503,505,506,554,573,585,606,626,628,629,697,759,787,815,830,845,860,862,863,928,950,965,966,1004,1044,1079,1127,1177,1201,1214,1236,1238,1239,1307,1350,1384,1415,1435,1447,1450,1472,1474,1475,1542,1630,1631,1703,1721,1735,1747,1761,1763,1764,1767,1790,1794,1795,1858,1909,1935,1944,1956,1973,1975,1976,2015,2029,2048,2085,2088,2141,2153,2155,2156,2249,2289,2314,2331,2349,2352,2375,2392,2404,2422,2425,2440,2456,2458,2459,2485,2552,2576,2607,2622,2644,2669,2686,2689,2701,2703,2704,2752,2789,2801,2839,2855,2858,2912,2914,2915,3000,3073,3118,3160,3193,3212,3262,3280,3283,3315,3332,3350,3353,3354,3371,3434,3452,3455,3456,3492,3517,3540,3573,3591,3614,3636,3640,3641,3669,3739,3758,3762,3778,3805,3822,3825,3826,3850,3864,3878,3882,3903,3924,3945,3966,3987,3990,3991,4025,4026,4052,4053,4083,4103,4138,4160,4182,4198,4202,4221,4285,4305,4325,4328,4329,4344,4346,4347,4415,4462,4473,4484,4503,4528,4550,4607,4611,4634,4652,4686,4699,4710,4752,4765,4769,4770,4785,4805,4819,4831,4832,4843,4855,4870,4901,4919,4932,4942,4947,4951,4966,4983,5001,5039,5073,5087,5098,5104,5109,5113,5136,5193,5197,5215,5227,5239,5240,5248,5251,5263,5265,5266,5315,5357,5414,5425,5479,5485,5498,5502,5519,5537,5540,5541,5575,5602,5655,5672,5695,5712,5736,5757,5774,5785,5813,5830,5871,5926,5955,5968,6026,6032,6089,6109,6115,6134,6139,6143,6160,6172,6208,6212,6225,6229,6246,6264,6267,6268,6286,6288,6289,6332,6374,6410,6437,6483,6486,6487,6524,6541,6596,6599,6600,6636,6638,6639,6707,6726,6773,6805,6827,6839,6843,6846,6858],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/debug/plan9obj/plan9obj.go","Base":6862,"Size":863,"Lines":[0,55,109,159,160,163,209,213,214,231,232,258,277,310,351,396,443,484,516,563,612,614,615,647,665,679,691,705,707,708,716,760,761,791,831,861],"Infos":null}]}
 