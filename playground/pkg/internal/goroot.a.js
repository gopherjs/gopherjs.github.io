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
GoLinkname�� Implementation�� 	Reference��   �>���internal/gorootgorootinternal/execabsospath/filepathstringssyncDi (gorootcompilerpath IsStandardPackageF            execabs*	execabs = $packages["internal/execabs"];
��    		$r = execabs.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  filepath(	filepath = $packages["path/filepath"];
��    		$r = filepath.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	gccgoDirs�S	gccgoDirs = $pkg.gccgoDirs = $newType(0, $kindStruct, "goroot.gccgoDirs", true, "internal/goroot", false, function(once_, dirs_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.once = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
			this.dirs = sliceType.nil;
			return;
		}
		this.once = once_;
		this.dirs = dirs_;
	});
��	ptrType.methods = [{prop: "init", name: "init", pkg: "internal/goroot", typ: $funcType([], [], false)}, {prop: "isStandard", name: "isStandard", pkg: "internal/goroot", typ: $funcType([$String], [$Bool], false)}];
��	gccgoDirs.init("internal/goroot", [{prop: "once", name: "once", embedded: false, exported: false, typ: sync.Once, tag: ""}, {prop: "dirs", name: "dirs", embedded: false, exported: false, typ: sliceType, tag: ""}]);
	gccgoDirsinternal/goroot.gccgoDirsinternal/goroot.ptrTypeinternal/goroot.sliceType
sync.Mutex	sync.Once  	sliceType"	sliceType = $sliceType($String);
	sliceType  ptrType 	ptrType = $ptrType(gccgoDirs);
ptrTypeinternal/goroot.gccgoDirs  gccgoSearchb		gccgoSearch = new gccgoDirs.ptr(new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)), sliceType.nil);
gccgoSearchinternal/goroot.gccgoDirsinternal/goroot.gccgoSearchinternal/goroot.sliceType
sync.Mutex	sync.Once !internal/goroot.IsStandardPackageinternal/gorootIsStandardPackage IsStandardPackage��	IsStandardPackage = function(goroot, compiler, path) {
		var $24r, _1, _r, _r$1, _tuple, compiler, dir, err, goroot, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; compiler = $f.compiler; dir = $f.dir; err = $f.err; goroot = $f.goroot; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = compiler;
  �			/* */ if (_1 === ("gc")) { $s = 2; continue; }
			/* */ if (_1 === ("gccgo")) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_1 === ("gc")) { */ case 2:
  �				dir = filepath.Join(new sliceType([goroot, "src", path]));
  				_r = os.Stat(dir); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				err = _tuple[1];
  				$s = -1; return $interfaceIsEqual(err, $ifaceNil);
    			/* } else if (_1 === ("gccgo")) { */ case 3:
  A				_r$1 = gccgoSearch.isStandard(path); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r = _r$1;
				$s = 8; case 8: return $24r;
    			/* } else { */ case 4:
  q				$panic(new $String("unknown compiler " + compiler));
    			/* } */ case 5:
    		case 1:
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: IsStandardPackage }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.compiler = compiler; $f.dir = dir; $f.err = err; $f.goroot = goroot; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.IsStandardPackage = IsStandardPackage;
IsStandardPackage!internal/goroot.IsStandardPackageinternal/goroot.gccgoSearchinternal/goroot.isStandard~internal/goroot.sliceTypeos.Statpath/filepath.Join !(*internal/goroot.gccgoDirs).init ��	gccgoDirs.ptr.prototype.init = function() {
		var _i, _i$1, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _v, _v$1, _v$2, allDirs, bin, dir, dirEntry, dirs, dirsEntries, err, err$1, err$2, fi, fi$1, gccgo, gd, goDir, lastDirs, machine, machineB, version, versionB, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _v = $f._v; _v$1 = $f._v$1; _v$2 = $f._v$2; allDirs = $f.allDirs; bin = $f.bin; dir = $f.dir; dirEntry = $f.dirEntry; dirs = $f.dirs; dirsEntries = $f.dirsEntries; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; fi = $f.fi; fi$1 = $f.fi$1; gccgo = $f.gccgo; gd = $f.gd; goDir = $f.goDir; lastDirs = $f.lastDirs; machine = $f.machine; machineB = $f.machineB; version = $f.version; versionB = $f.versionB; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		gd = this;
  �		_r = os.Getenv("GCCGO"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		gccgo = _r;
    		if (gccgo === "") {
   			gccgo = "gccgo";
    		}
  4		_r$1 = execabs.LookPath(gccgo); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		bin = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  h			$s = -1; return;
    		}
  t		_r$2 = execabs.Command(bin, new sliceType(["-print-search-dirs"])); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = _r$2.Output(); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$1 = _r$3;
		allDirs = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return;
    		}
  �		_r$4 = execabs.Command(bin, new sliceType(["-dumpversion"])); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_r$5 = _r$4.Output(); /* */ $s = 6; case 6: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_tuple$2 = _r$5;
		versionB = _tuple$2[0];
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  "			$s = -1; return;
    		}
  -		_r$6 = strings.TrimSpace(($bytesToString(versionB))); /* */ $s = 7; case 7: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		version = _r$6;
  ]		_r$7 = execabs.Command(bin, new sliceType(["-dumpmachine"])); /* */ $s = 8; case 8: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_r$8 = _r$7.Output(); /* */ $s = 9; case 9: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		_tuple$3 = _r$8;
		machineB = _tuple$3[0];
		err = _tuple$3[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return;
    		}
  �		_r$9 = strings.TrimSpace(($bytesToString(machineB))); /* */ $s = 10; case 10: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		machine = _r$9;
  �		dirsEntries = strings.Split(($bytesToString(allDirs)), "\n");
  @		dirs = sliceType.nil;
  O		_ref = dirsEntries;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			dirEntry = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (strings.HasPrefix(dirEntry, "libraries: =")) {
  �				dirs = filepath.SplitList(strings.TrimPrefix(dirEntry, "libraries: ="));
  �				break;
    			}
    			_i++;
		}
    		if (dirs.$length === 0) {
  			$s = -1; return;
    		}
  		lastDirs = sliceType.nil;
  .		_ref$1 = dirs;
		_i$1 = 0;
		/* while (true) { */ case 11:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 12; continue; }
			dir = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  K			goDir = filepath.Join(new sliceType([dir, "go", version]));
  {			_r$10 = os.Stat(goDir); /* */ $s = 13; case 13: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_tuple$4 = _r$10;
			fi = _tuple$4[0];
			err$1 = _tuple$4[1];
  x			if (!($interfaceIsEqual(err$1, $ifaceNil))) { _v = false; $s = 16; continue s; }
			_r$11 = fi.IsDir(); /* */ $s = 17; case 17: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_v = _r$11; case 16:
			/* */ if (_v) { $s = 14; continue; }
			/* */ $s = 15; continue;
    			/* if (_v) { */ case 14:
  �				gd.dirs = $append(gd.dirs, goDir);
  �				goDir = filepath.Join(new sliceType([goDir, machine]));
  				_r$12 = os.Stat(goDir); /* */ $s = 18; case 18: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
				_tuple$5 = _r$12;
				fi = _tuple$5[0];
				err$1 = _tuple$5[1];
  				if (!($interfaceIsEqual(err$1, $ifaceNil))) { _v$1 = false; $s = 21; continue s; }
				_r$13 = fi.IsDir(); /* */ $s = 22; case 22: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
				_v$1 = _r$13; case 21:
				/* */ if (_v$1) { $s = 19; continue; }
				/* */ $s = 20; continue;
    				/* if (_v$1) { */ case 19:
  =					gd.dirs = $append(gd.dirs, goDir);
    				/* } */ case 20:
    			/* } */ case 15:
  l			_r$14 = os.Stat(dir); /* */ $s = 23; case 23: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
			_tuple$6 = _r$14;
			fi$1 = _tuple$6[0];
			err$2 = _tuple$6[1];
  i			if (!($interfaceIsEqual(err$2, $ifaceNil))) { _v$2 = false; $s = 26; continue s; }
			_r$15 = fi$1.IsDir(); /* */ $s = 27; case 27: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
			_v$2 = _r$15; case 26:
			/* */ if (_v$2) { $s = 24; continue; }
			/* */ $s = 25; continue;
    			/* if (_v$2) { */ case 24:
  �				lastDirs = $append(lastDirs, dir);
    			/* } */ case 25:
    			_i$1++;
		$s = 11; continue;
		case 12:
  �		gd.dirs = $appendSlice(gd.dirs, lastDirs);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: gccgoDirs.ptr.prototype.init }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._v = _v; $f._v$1 = _v$1; $f._v$2 = _v$2; $f.allDirs = allDirs; $f.bin = bin; $f.dir = dir; $f.dirEntry = dirEntry; $f.dirs = dirs; $f.dirsEntries = dirsEntries; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.fi = fi; $f.fi$1 = fi$1; $f.gccgo = gccgo; $f.gd = gd; $f.goDir = goDir; $f.lastDirs = lastDirs; $f.machine = machine; $f.machineB = machineB; $f.version = version; $f.versionB = versionB; $f.$s = $s; $f.$r = $r; return $f;
	};
	gccgoDirs.prototype.init = function() { return this.$val.init(); };
	gccgoDirsinit~internal/execabs.Commandinternal/execabs.LookPathinternal/goroot.gccgoDirsinternal/goroot.sliceType	os.Getenvos.Statpath/filepath.Joinpath/filepath.SplitListstrings.HasPrefixstrings.Splitstrings.TrimPrefixstrings.TrimSpace '(*internal/goroot.gccgoDirs).isStandard �	�	gccgoDirs.ptr.prototype.isStandard = function(path) {
		var _i, _r, _r$1, _ref, _tuple, _v, dir, err, fi, full, gd, i, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tuple = $f._tuple; _v = $f._v; dir = $f.dir; err = $f.err; fi = $f.fi; full = $f.full; gd = $f.gd; i = $f.i; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		gd = this;
  	�		i = strings.Index(path, "/");
    		if (i < 0) {
  
			i = path.length;
    		}
    		if (strings.Contains($substring(path, 0, i), ".")) {
  
V			$s = -1; return false;
    		}
    		if (path === "unsafe") {
  
�			$s = -1; return true;
    		}
  
�		$r = gd.once.Do($methodVal(gd, "init")); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (gd.dirs === sliceType.nil) {
  t			$s = -1; return true;
    		}
  �		_ref = gd.dirs;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			dir = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			full = filepath.Join(new sliceType([dir, path])) + ".gox";
  �			_r = os.Stat(full); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			fi = _tuple[0];
			err = _tuple[1];
  �			if (!($interfaceIsEqual(err, $ifaceNil))) { _v = false; $s = 7; continue s; }
			_r$1 = fi.IsDir(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_v = !_r$1; case 7:
			/* */ if (_v) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_v) { */ case 5:
  				$s = -1; return true;
    			/* } */ case 6:
    			_i++;
		$s = 2; continue;
		case 3:
  "		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gccgoDirs.ptr.prototype.isStandard }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tuple = _tuple; $f._v = _v; $f.dir = dir; $f.err = err; $f.fi = fi; $f.full = full; $f.gd = gd; $f.i = i; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
	gccgoDirs.prototype.isStandard = function(path) { return this.$val.isStandard(path); };
	gccgoDirsisStandard~internal/goroot.gccgoDirsinternal/goroot.init~internal/goroot.sliceTypeos.Statpath/filepath.Joinstrings.Containsstrings.Index ��{"Base":3122,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/goroot/gc.go","Base":1,"Size":3120,"Lines":[0,55,109,159,160,174,187,188,203,204,213,238,244,261,272,280,282,283,348,378,439,458,470,514,539,559,574,612,622,662,665,667,668,719,743,759,774,776,777,847,868,894,895,976,1006,1035,1053,1071,1074,1108,1125,1134,1137,1138,1204,1221,1230,1233,1294,1311,1320,1323,1371,1432,1449,1458,1461,1509,1510,1563,1594,1613,1653,1696,1763,1772,1776,1779,1800,1809,1812,1813,1836,1864,1909,1968,2004,2045,2104,2141,2146,2150,2207,2243,2247,2250,2290,2292,2293,2361,2413,2478,2543,2574,2586,2602,2605,2643,2658,2661,2662,2685,2704,2718,2721,2722,2743,2764,2816,2875,2929,2943,2946,2947,2978,3022,3081,3096,3100,3103,3104,3118],"Infos":null}]}
 