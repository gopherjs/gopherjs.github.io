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
GoLinkname�� Implementation�� 	Reference��   �t��embedembederrorsioio/fstime�\i �� filesfilelookupfFSnamereadDirdirOpenFileio/fsReadDirDirEntryReadFiledatahashNameSizeModTimeTimetimeIsDirSysTypeFileModeInfoFileInfoModeCloseReadStatwallextlocLocationStringtGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecdsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinary	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRound	IsRegularPermzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetlstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixokNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutcembedfs   #  %       .3 A39T '  /   2   / %  4  ) /   6    9 /   <    J /   >        S   X�      ot       �3  �3 T � ] �    b �    g �   � y �      �   � � �   � � �   �   � �   �3  �    �  �      �   �  T �3  �   �   y     ]    �   �T � �t�t �
   �   ��  ��������� �t �t �t������T �6 � ��    � ��    � �� �    � �� �� �  �  � ��    � ��    � ��    � �� �   � �� ��   � ��   � �� �   � ��    � �� ��     � �� ��     � �� ��     � ��     � ��   
 � ��   � �
 � ��  � �� � � ��    � ��   � � ��    � ��   � � ��  � � � ��  � � � � ��    � ��    � ��    � ��    � ��    � �� ��  �  � �� ��  �  � �� � � �  �  � �� �  � �� � �  � ��   � � ��   � � �� ��  �  � ��   � � ��   � � ��    � ��    � ��    � ��    � ��   �   � �� S�    � ��   �   � �� S�    � ��   �   � �� S�    � ��   �   � �� S�    � ��     � �� ��  �  � �� ��  � T 	 � ��    y ��     � ��     � ��   � � ��   �3  3  y     g   � �   � ]    b       �T � �t� �t��t    ��   ��   �   �   �   ��  �������T � � ��   � � ��     �� �  � � � �   � ��    � ��     � ��  � � �  T  � ��   T  � ��   T 	 � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �� ��  �  � �� ��  � t    �   �   T � t �   �   �    �   T �  �  �3� A�.�����
tt ������o�������/ errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fs	fs = $packages["io/fs"];
��    		$r = fs.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  time	time = $packages["time"];
��    		$r = time.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  FS��	FS = $pkg.FS = $newType(0, $kindStruct, "embed.FS", true, "embed", true, function(files_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.files = ptrType.nil;
			return;
		}
		this.files = files_;
	});
��	FS.methods = [{prop: "lookup", name: "lookup", pkg: "embed", typ: $funcType([$String], [ptrType$1], false)}, {prop: "readDir", name: "readDir", pkg: "embed", typ: $funcType([$String], [sliceType], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([$String], [fs.File, $error], false)}, {prop: "ReadDir", name: "ReadDir", pkg: "", typ: $funcType([$String], [sliceType$1, $error], false)}, {prop: "ReadFile", name: "ReadFile", pkg: "", typ: $funcType([$String], [sliceType$2, $error], false)}];
n	FS.init("embed", [{prop: "files", name: "files", embedded: false, exported: false, typ: ptrType, tag: ""}]);
FSembed.FSembed.ptrTypeembed.ptrType$1embed.sliceTypeembed.sliceType$1embed.sliceType$2
io/fs.File  file�?	file = $pkg.file = $newType(0, $kindStruct, "embed.file", true, "embed", false, function(name_, data_, hash_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = "";
			this.data = "";
			this.hash = arrayType.zero();
			return;
		}
		this.name = name_;
		this.data = data_;
		this.hash = hash_;
	});
��	ptrType$1.methods = [{prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "ModTime", name: "ModTime", pkg: "", typ: $funcType([], [time.Time], false)}, {prop: "IsDir", name: "IsDir", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Sys", name: "Sys", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Type", name: "Type", pkg: "", typ: $funcType([], [fs.FileMode], false)}, {prop: "Info", name: "Info", pkg: "", typ: $funcType([], [fs.FileInfo, $error], false)}, {prop: "Mode", name: "Mode", pkg: "", typ: $funcType([], [fs.FileMode], false)}];
�	file.init("embed", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "data", name: "data", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "hash", name: "hash", embedded: false, exported: false, typ: arrayType, tag: ""}]);
fileembed.arrayType
embed.fileembed.ptrType$1io/fs.FileInfoio/fs.FileMode	time.Time  openFile�#	openFile = $pkg.openFile = $newType(0, $kindStruct, "embed.openFile", true, "embed", false, function(f_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.f = ptrType$1.nil;
			this.offset = new $Int64(0, 0);
			return;
		}
		this.f = f_;
		this.offset = offset_;
	});
�{	ptrType$4.methods = [{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Stat", name: "Stat", pkg: "", typ: $funcType([], [fs.FileInfo, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}];
��	openFile.init("embed", [{prop: "f", name: "f", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int64, tag: ""}]);
openFileembed.openFileembed.ptrType$1embed.ptrType$4embed.sliceType$2io/fs.FileInfo  openDir�O	openDir = $pkg.openDir = $newType(0, $kindStruct, "embed.openDir", true, "embed", false, function(f_, files_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.f = ptrType$1.nil;
			this.files = sliceType.nil;
			this.offset = 0;
			return;
		}
		this.f = f_;
		this.files = files_;
		this.offset = offset_;
	});
�~	ptrType$3.methods = [{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Stat", name: "Stat", pkg: "", typ: $funcType([], [fs.FileInfo, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$2], [$Int, $error], false)}, {prop: "ReadDir", name: "ReadDir", pkg: "", typ: $funcType([$Int], [sliceType$1, $error], false)}];
� 	openDir.init("embed", [{prop: "f", name: "f", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "files", name: "files", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}]);
openDirembed.openDirembed.ptrType$1embed.ptrType$3embed.sliceTypeembed.sliceType$1embed.sliceType$2io/fs.FileInfo  	sliceType	sliceType = $sliceType(file);
	sliceType
embed.file  ptrType 	ptrType = $ptrType(sliceType);
ptrTypeembed.sliceType  	ptrType$1	ptrType$1 = $ptrType(file);
	ptrType$1
embed.file  	arrayType%	arrayType = $arrayType($Uint8, 16);
	arrayType  	ptrType$2&	ptrType$2 = $ptrType(time.Location);
	ptrType$2time.Location  sliceType$1(	sliceType$1 = $sliceType(fs.DirEntry);
sliceType$1io/fs.DirEntry  	ptrType$3 	ptrType$3 = $ptrType(openDir);
	ptrType$3embed.openDir  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  	ptrType$4!	ptrType$4 = $ptrType(openFile);
	ptrType$4embed.openFile  dotFiledotFile  xJ  �		$unused((x = new FS.ptr(ptrType.nil), new x.constructor.elem(x)));
_embed.FS
embed.fileembed.ptrTypeembed.sliceType  x$1P  �		$unused((x$1 = new FS.ptr(ptrType.nil), new x$1.constructor.elem(x$1)));
_embed.FSembed.ptrType  !  �		$unused((ptrType$1.nil));
_
embed.fileembed.ptrType$1  !  �		$unused((ptrType$1.nil));
_embed.ptrType$1  ;   �		dotFile = new file.ptr("./", "", arrayType.zero());
dotFileembed.arrayTypeembed.dotFile
embed.file embed.splitembedsplit split�*	split = function(name) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, dir, elem, i, isDir, name;
		dir = "";
		elem = "";
		isDir = false;
    		if (name.charCodeAt((name.length - 1 >> 0)) === 47) {
  �			isDir = true;
  �			name = $substring(name, 0, (name.length - 1 >> 0));
    		}
  			i = name.length - 1 >> 0;
  		while (true) {
			if (!(i >= 0 && !((name.charCodeAt(i) === 47)))) { break; }
  >			i = i - (1) >> 0;
    		}
    		if (i < 0) {
    			_tmp = ".";
			_tmp$1 = name;
			_tmp$2 = isDir;
			dir = _tmp;
			elem = _tmp$1;
			isDir = _tmp$2;
			return [dir, elem, isDir];
    		}
    		_tmp$3 = $substring(name, 0, i);
		_tmp$4 = $substring(name, (i + 1 >> 0));
		_tmp$5 = isDir;
		dir = _tmp$3;
		elem = _tmp$4;
		isDir = _tmp$5;
		return [dir, elem, isDir];
    	};
splitembed.split embed.trimSlashembed	trimSlash 	trimSlash��	trimSlash = function(name) {
		var name;
    		if (name.length > 0 && (name.charCodeAt((name.length - 1 >> 0)) === 47)) {
  Q			return $substring(name, 0, (name.length - 1 >> 0));
    		}
  o		return name;
    	};
	trimSlashembed.trimSlash (*embed.file).Name ��	file.ptr.prototype.Name = function() {
		var _tuple, elem, f;
		f = this;
  =		_tuple = split(f.name);
		elem = _tuple[1];
  Z		return elem;
    	};
	file.prototype.Name = function() { return this.$val.Name(); };
file
embed.fileembed.split (*embed.file).Size ��	file.ptr.prototype.Size = function() {
		var f;
		f = this;
  �		return (new $Int64(0, f.data.length));
    	};
	file.prototype.Size = function() { return this.$val.Size(); };
file
embed.file (*embed.file).ModTime ��	file.ptr.prototype.ModTime = function() {
		var f;
		f = this;
  �		return new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$2.nil);
    	};
	file.prototype.ModTime = function() { return this.$val.ModTime(); };
file
embed.fileembed.ptrType$2time.Location	time.Time (*embed.file).IsDir ��	file.ptr.prototype.IsDir = function() {
		var _tuple, f, isDir;
		f = this;
   		_tuple = split(f.name);
		isDir = _tuple[2];
  >		return isDir;
    	};
	file.prototype.IsDir = function() { return this.$val.IsDir(); };
file
embed.fileembed.split (*embed.file).Sys ��	file.ptr.prototype.Sys = function() {
		var f;
		f = this;
  z		return $ifaceNil;
    	};
	file.prototype.Sys = function() { return this.$val.Sys(); };
file
embed.file (*embed.file).Type ��	file.ptr.prototype.Type = function() {
		var f;
		f = this;
  �		return new fs.FileMode(f.Mode()).Type();
    	};
	file.prototype.Type = function() { return this.$val.Type(); };
file
embed.fileio/fs.FileMode (*embed.file).Info ��	file.ptr.prototype.Info = function() {
		var f;
		f = this;
  �		return [f, $ifaceNil];
    	};
	file.prototype.Info = function() { return this.$val.Info(); };
file
embed.file (*embed.file).Mode ��	file.ptr.prototype.Mode = function() {
		var f;
		f = this;
    		if (f.IsDir()) {
   A			return 2147484013;
    		}
   ^		return 292;
    	};
	file.prototype.Mode = function() { return this.$val.Mode(); };
file
embed.file (embed.FS).lookup �	FS.ptr.prototype.lookup = function(name) {
		var _r, _tuple, dir, elem, f, files, i, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; dir = $f.dir; elem = $f.elem; f = $f.f; files = $f.files; i = $f.i; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dir = [dir];
		elem = [elem];
		files = [files];
		f = this;
    		if (!fs.ValidPath(name)) {
  ":			$s = -1; return ptrType$1.nil;
    		}
    		if (name === ".") {
  "\			$s = -1; return dotFile;
    		}
    		if (f.files === ptrType.nil) {
  "�			$s = -1; return ptrType$1.nil;
    		}
  # 		_tuple = split(name);
		dir[0] = _tuple[0];
		elem[0] = _tuple[1];
  #		files[0] = f.files.$get();
  #0		_r = sortSearch(files[0].$length, (function(dir, elem, files) { return function(i) {
			var _tuple$1, i, idir, ielem;
  #a			_tuple$1 = split(((i < 0 || i >= files[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : files[0].$array[files[0].$offset + i]).name);
			idir = _tuple$1[0];
			ielem = _tuple$1[1];
  #�			return idir > dir[0] || idir === dir[0] && ielem >= elem[0];
    		}; })(dir, elem, files)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
    		if (i < files[0].$length && trimSlash(((i < 0 || i >= files[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : files[0].$array[files[0].$offset + i]).name) === name) {
  #�			$s = -1; return ((i < 0 || i >= files[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : files[0].$array[files[0].$offset + i]);
    		}
  $		$s = -1; return ptrType$1.nil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FS.ptr.prototype.lookup }; } $f._r = _r; $f._tuple = _tuple; $f.dir = dir; $f.elem = elem; $f.f = f; $f.files = files; $f.i = i; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	FS.prototype.lookup = function(name) { return this.$val.lookup(name); };
FSlookup~embed.FSembed.dotFileembed.ptrTypeembed.ptrType$1embed.sortSearchembed.splitembed.trimSlashio/fs.ValidPath (embed.FS).readDir �	FS.ptr.prototype.readDir = function(dir) {
		var _r, _r$1, dir, f, files, i, j, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; dir = $f.dir; f = $f.f; files = $f.files; i = $f.i; j = $f.j; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dir = [dir];
		files = [files];
		f = this;
    		if (f.files === ptrType.nil) {
  $�			$s = -1; return sliceType.nil;
    		}
  %"		files[0] = f.files.$get();
  %5		_r = sortSearch(files[0].$length, (function(dir, files) { return function(i) {
			var _tuple, i, idir;
  %f			_tuple = split(((i < 0 || i >= files[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : files[0].$array[files[0].$offset + i]).name);
			idir = _tuple[0];
  %�			return idir >= dir[0];
    		}; })(dir, files)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		i = _r;
  %�		_r$1 = sortSearch(files[0].$length, (function(dir, files) { return function(j) {
			var _tuple, j, jdir;
  %�			_tuple = split(((j < 0 || j >= files[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : files[0].$array[files[0].$offset + j]).name);
			jdir = _tuple[0];
  %�			return jdir > dir[0];
    		}; })(dir, files)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		j = _r$1;
  &		$s = -1; return $subslice(files[0], i, j);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FS.ptr.prototype.readDir }; } $f._r = _r; $f._r$1 = _r$1; $f.dir = dir; $f.f = f; $f.files = files; $f.i = i; $f.j = j; $f.$s = $s; $f.$r = $r; return $f;
	};
	FS.prototype.readDir = function(dir) { return this.$val.readDir(dir); };
FSreadDir~embed.FSembed.ptrTypeembed.sliceTypeembed.sortSearchembed.split (embed.FS).Open ��	FS.ptr.prototype.Open = function(name) {
		var $24r, _r, _r$1, f, file$1, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; f = $f.f; file$1 = $f.file$1; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  &�		_r = $clone(f, FS).lookup(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		file$1 = _r;
    		if (file$1 === ptrType$1.nil) {
  &�			$s = -1; return [$ifaceNil, new fs.PathError.ptr("open", name, fs.ErrNotExist)];
    		}
  '		/* */ if (file$1.IsDir()) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (file$1.IsDir()) { */ case 2:
  '(			_r$1 = $clone(f, FS).readDir(name); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = [new openDir.ptr(file$1, _r$1, 0), $ifaceNil];
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  '[		$s = -1; return [new openFile.ptr(file$1, new $Int64(0, 0)), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FS.ptr.prototype.Open }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.f = f; $f.file$1 = file$1; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	FS.prototype.Open = function(name) { return this.$val.Open(name); };
FSembed.FSembed.lookup~embed.openDirembed.openFileembed.ptrType$1embed.readDir~io/fs.ErrNotExistio/fs.PathError (embed.FS).ReadDir ��	FS.ptr.prototype.ReadDir = function(name) {
		var _i, _r, _ref, _tuple, _tuple$1, dir, err, f, file$1, i, list, name, ok, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dir = $f.dir; err = $f.err; f = $f.f; file$1 = $f.file$1; i = $f.i; list = $f.list; name = $f.name; ok = $f.ok; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  '�		_r = $clone(f, FS).Open(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		file$1 = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  (			$s = -1; return [sliceType$1.nil, err];
    		}
  (2		_tuple$1 = $assertType(file$1, ptrType$3, true);
		dir = _tuple$1[0];
		ok = _tuple$1[1];
    		if (!ok) {
  (Y			$s = -1; return [sliceType$1.nil, new fs.PathError.ptr("read", name, errors.New("not a directory"))];
    		}
  (�		list = $makeSlice(sliceType$1, dir.files.$length);
  (�		_ref = list;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  (�			((i < 0 || i >= list.$length) ? ($throwRuntimeError("index out of range"), undefined) : list.$array[list.$offset + i] = (x$2 = dir.files, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i])));
    			_i++;
		}
  )		$s = -1; return [list, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FS.ptr.prototype.ReadDir }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dir = dir; $f.err = err; $f.f = f; $f.file$1 = file$1; $f.i = i; $f.list = list; $f.name = name; $f.ok = ok; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	FS.prototype.ReadDir = function(name) { return this.$val.ReadDir(name); };
FSembed.FSembed.openDirembed.ptrType$3embed.sliceType$1
errors.Newio/fs.DirEntryio/fs.PathError (embed.FS).ReadFile ��	FS.ptr.prototype.ReadFile = function(name) {
		var _r, _tuple, _tuple$1, err, f, file$1, name, ofile, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; f = $f.f; file$1 = $f.file$1; name = $f.name; ofile = $f.ofile; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  )�		_r = $clone(f, FS).Open(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		file$1 = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  )�			$s = -1; return [sliceType$2.nil, err];
    		}
  )�		_tuple$1 = $assertType(file$1, ptrType$4, true);
		ofile = _tuple$1[0];
		ok = _tuple$1[1];
    		if (!ok) {
  *			$s = -1; return [sliceType$2.nil, new fs.PathError.ptr("read", name, errors.New("is a directory"))];
    		}
  *^		$s = -1; return [(new sliceType$2($stringToBytes(ofile.f.data))), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FS.ptr.prototype.ReadFile }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.f = f; $f.file$1 = file$1; $f.name = name; $f.ofile = ofile; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	FS.prototype.ReadFile = function(name) { return this.$val.ReadFile(name); };
FSembed.FSembed.openFileembed.ptrType$4embed.sliceType$2
errors.Newio/fs.PathError (*embed.openFile).Close ��	openFile.ptr.prototype.Close = function() {
		var f;
		f = this;
  +F		return $ifaceNil;
    	};
	openFile.prototype.Close = function() { return this.$val.Close(); };
openFileembed.openFile (*embed.openFile).Stat ��	openFile.ptr.prototype.Stat = function() {
		var f;
		f = this;
  +�		return [f.f, $ifaceNil];
    	};
	openFile.prototype.Stat = function() { return this.$val.Stat(); };
openFileembed.openFile (*embed.openFile).Read ��	openFile.ptr.prototype.Read = function(b) {
		var b, f, n, x$2, x$3, x$4, x$5, x$6;
		f = this;
    		if ((x$2 = f.offset, x$3 = (new $Int64(0, f.f.data.length)), (x$2.$high > x$3.$high || (x$2.$high === x$3.$high && x$2.$low >= x$3.$low)))) {
  +�			return [0, io.EOF];
    		}
    		if ((x$4 = f.offset, (x$4.$high < 0 || (x$4.$high === 0 && x$4.$low < 0)))) {
  ,			return [0, new fs.PathError.ptr("read", f.f.name, fs.ErrInvalid)];
    		}
  ,f		n = $copyString(b, $substring(f.f.data, $flatten64(f.offset)));
  ,�		f.offset = (x$5 = f.offset, x$6 = (new $Int64(0, n)), new $Int64(x$5.$high + x$6.$high, x$5.$low + x$6.$low));
  ,�		return [n, $ifaceNil];
    	};
	openFile.prototype.Read = function(b) { return this.$val.Read(b); };
openFileembed.openFileio.EOFio/fs.ErrInvalidio/fs.PathError (*embed.openFile).Seek ��	openFile.ptr.prototype.Seek = function(offset, whence) {
		var _1, f, offset, whence, x$2, x$3, x$4;
		f = this;
    		_1 = whence;
    		if (_1 === (0)) {
    		} else if (_1 === (1)) {
  -)			offset = (x$2 = f.offset, new $Int64(offset.$high + x$2.$high, offset.$low + x$2.$low));
    		} else if (_1 === (2)) {
  -G			offset = (x$3 = (new $Int64(0, f.f.data.length)), new $Int64(offset.$high + x$3.$high, offset.$low + x$3.$low));
    		}
    		if ((offset.$high < 0 || (offset.$high === 0 && offset.$low < 0)) || (x$4 = (new $Int64(0, f.f.data.length)), (offset.$high > x$4.$high || (offset.$high === x$4.$high && offset.$low > x$4.$low)))) {
  -�			return [new $Int64(0, 0), new fs.PathError.ptr("seek", f.f.name, fs.ErrInvalid)];
    		}
  -�		f.offset = offset;
  -�		return [offset, $ifaceNil];
    	};
	openFile.prototype.Seek = function(offset, whence) { return this.$val.Seek(offset, whence); };
openFileembed.openFileio/fs.ErrInvalidio/fs.PathError (*embed.openDir).Close ��	openDir.ptr.prototype.Close = function() {
		var d;
		d = this;
  / 		return $ifaceNil;
    	};
	openDir.prototype.Close = function() { return this.$val.Close(); };
openDirembed.openDir (*embed.openDir).Stat ��	openDir.ptr.prototype.Stat = function() {
		var d;
		d = this;
  /]		return [d.f, $ifaceNil];
    	};
	openDir.prototype.Stat = function() { return this.$val.Stat(); };
openDirembed.openDir (*embed.openDir).Read ��	openDir.ptr.prototype.Read = function(param) {
		var d, param;
		d = this;
  /�		return [0, new fs.PathError.ptr("read", d.f.name, errors.New("is a directory"))];
    	};
	openDir.prototype.Read = function(param) { return this.$val.Read(param); };
openDirembed.openDir
errors.Newio/fs.PathError (*embed.openDir).ReadDir ��	openDir.ptr.prototype.ReadDir = function(count) {
		var _i, _ref, count, d, i, list, n, x$2, x$3;
		d = this;
  08		n = d.files.$length - d.offset >> 0;
    		if (n === 0) {
    			if (count <= 0) {
  0w				return [sliceType$1.nil, $ifaceNil];
    			}
  0�			return [sliceType$1.nil, io.EOF];
    		}
    		if (count > 0 && n > count) {
  0�			n = count;
    		}
  0�		list = $makeSlice(sliceType$1, n);
  0�		_ref = list;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  1			((i < 0 || i >= list.$length) ? ($throwRuntimeError("index out of range"), undefined) : list.$array[list.$offset + i] = (x$2 = d.files, x$3 = d.offset + i >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3])));
    			_i++;
		}
  1+		d.offset = d.offset + (n) >> 0;
  1:		return [list, $ifaceNil];
    	};
	openDir.prototype.ReadDir = function(count) { return this.$val.ReadDir(count); };
openDirembed.openDirembed.sliceType$1io.EOF embed.sortSearchembed
sortSearch 
sortSearch��	sortSearch = function(n, f) {
		var _r, _tmp, _tmp$1, f, h, i, j, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; f = $f.f; h = $f.h; i = $f.i; j = $f.j; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  2		_tmp = 0;
		_tmp$1 = n;
		i = _tmp;
		j = _tmp$1;
  2		/* while (true) { */ case 1:
			/* if (!(i < j)) { break; } */ if(!(i < j)) { $s = 2; continue; }
  2+			h = ((((((i + j >> 0) >>> 0)) >>> 1 >>> 0) >> 0));
  2z			_r = f(h); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!_r) { */ case 3:
  2�				i = h + 1 >> 0;
    				$s = 5; continue;
			/* } else { */ case 4:
  2�				j = h;
    			/* } */ case 5:
    		$s = 1; continue;
		case 2:
  3.		$s = -1; return i;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: sortSearch }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.f = f; $f.h = h; $f.i = i; $f.j = j; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};

sortSearchembed.sortSearch �	 {"Base":13114,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/embed/embed.go","Base":1,"Size":13112,"Lines":[0,55,109,159,160,238,241,313,392,468,471,539,583,586,623,626,646,649,673,689,701,704,749,752,772,775,799,815,835,838,888,891,909,912,936,954,992,1015,1018,1032,1035,1122,1164,1167,1265,1369,1372,1450,1480,1483,1499,1502,1520,1523,1541,1544,1595,1628,1658,1682,1685,1776,1873,1876,1950,2031,2112,2190,2279,2357,2444,2519,2539,2542,2631,2721,2800,2803,2851,2896,2920,2923,3020,3023,3108,3196,3259,3288,3291,3394,3486,3542,3545,3622,3625,3646,3649,3744,3835,3865,3868,3960,4048,4051,4067,4070,4153,4233,4281,4284,4375,4458,4461,4540,4543,4635,4638,4677,4680,4689,4692,4777,4861,4928,4931,4945,4946,4955,4965,4971,4980,4988,4990,4991,5085,5165,5168,5245,5320,5323,5399,5480,5483,5559,5576,5626,5680,5684,5758,5830,5909,5994,6039,6043,6049,6056,6064,6073,6083,6093,6101,6107,6111,6138,6142,6172,6202,6232,6262,6292,6322,6352,6382,6386,6459,6531,6569,6584,6586,6587,6650,6711,6785,6842,6873,6888,6916,6919,6939,6971,6977,6980,6992,7018,7021,7057,7059,7060,7119,7161,7198,7246,7274,7277,7290,7292,7293,7299,7323,7347,7349,7350,7388,7434,7453,7503,7557,7570,7583,7623,7625,7626,7632,7662,7692,7694,7695,7783,7856,7922,8012,8070,8140,8201,8202,8238,8254,8281,8284,8297,8299,8300,8345,8394,8426,8427,8490,8530,8556,8621,8687,8759,8772,8775,8793,8810,8813,8834,8847,8850,8851,8910,8958,8987,9006,9054,9095,9147,9151,9208,9227,9230,9242,9244,9245,9318,9359,9380,9393,9396,9460,9504,9523,9571,9608,9629,9633,9681,9718,9738,9742,9761,9763,9764,9835,9884,9908,9926,9999,10002,10021,10070,10073,10105,10107,10108,10165,10223,10250,10267,10285,10288,10316,10326,10414,10417,10462,10485,10511,10514,10532,10534,10535,10596,10648,10675,10692,10710,10713,10744,10754,10841,10844,10878,10880,10881,10932,10955,10988,11025,11027,11028,11090,11157,11158,11207,11246,11265,11268,11287,11361,11364,11399,11421,11436,11438,11439,11506,11523,11532,11549,11558,11579,11588,11621,11624,11674,11748,11751,11770,11790,11792,11793,11840,11862,11906,11947,12012,12014,12015,12076,12142,12143,12189,12277,12279,12280,12342,12372,12385,12403,12422,12426,12447,12450,12479,12491,12494,12526,12549,12582,12585,12600,12618,12620,12621,12676,12723,12767,12813,12827,12840,12902,12919,12932,12974,12985,13020,13024,13027,13100,13110],"Infos":null}]}
 