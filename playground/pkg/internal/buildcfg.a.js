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
GoLinkname�� Implementation�� 	Reference��   ��h��internal/buildcfgbuildcfgfmtinternal/goexperimentospath/filepathreflectruntimestrings�i �� Flagsinternal/goexperimentgowasmFeaturesgoosgoarchgoexpflagsbaselineerrgoexperiment
FieldTrackPreemptibleLoopsStaticLockRankingRegabiWrappersRegabiGRegabiReflectRegabiDefer
RegabiArgsSignExtSatConvStringfbuildcfgAllExperimentsCheckDefaultGOEXPERIMENTEnabledExperimentsError
ExperimentFramePointerEnabledGO386GOARCHGOARMGOEXPERIMENTGOMIPSGOMIPS64GOOSGOPPC64GOROOTGOWASMGO_LDSOGetgoextlinkenabledParseGOEXPERIMENTUpdateExperimentsVersionF     F   C  F    1V  V =V  V V V F    V V V V V   V eV F    F  , 1 8 >= D= M F  , 1 Q  V  ^    i    z    �    �    �    �    �   T �   �    �   T � � �e    � ��	���� �#�&�)�,�/�6�9�<�?�B�H�K�N�U�l�z�Q �8 fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  goexperiment4	goexperiment = $packages["internal/goexperiment"];
��    		$r = goexperiment.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  filepath(	filepath = $packages["path/filepath"];
��    		$r = filepath.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  gowasmFeatures�M	gowasmFeatures = $pkg.gowasmFeatures = $newType(0, $kindStruct, "buildcfg.gowasmFeatures", true, "internal/buildcfg", false, function(SignExt_, SatConv_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.SignExt = false;
			this.SatConv = false;
			return;
		}
		this.SignExt = SignExt_;
		this.SatConv = SatConv_;
	});
m	gowasmFeatures.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
��	gowasmFeatures.init("", [{prop: "SignExt", name: "SignExt", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "SatConv", name: "SatConv", embedded: false, exported: true, typ: $Bool, tag: ""}]);
gowasmFeatures internal/buildcfg.gowasmFeatures  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1  ptrType$	ptrType = $ptrType(reflect.rtype);
ptrTypereflect.rtype  	ptrType$1+	ptrType$1 = $ptrType(goexperiment.Flags);
	ptrType$1internal/goexperiment.Flags  defaultGOROOT		defaultGOROOT = "";
defaultGOROOTinternal/buildcfg.defaultGOROOT  GOROOT  GOARCH  GOOS  GO386  GOARM  GOMIPS  GOMIPS64  GOPPC64  GOWASM  GO_LDSO  Version  		$pkg.Error = $ifaceNil;
Errorinternal/buildcfg.Error  
Experiment  experimentBaselineexperimentBaseline$24ptrexperimentBaseline  FramePointerEnabled  _r��  �		_r = envOr("GOROOT", defaultGOROOT); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$pkg.GOROOT = _r;
internal/buildcfg.GOROOTinternal/buildcfg.defaultGOROOTinternal/buildcfg.envOr  _r$1��  �		_r$1 = gowasm(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$pkg.GOWASM = $clone(_r$1, gowasmFeatures);
internal/buildcfg.GOWASMinternal/buildcfg.gowasm internal/buildcfg.gowasmFeatures  _r$2��  "		_r$2 = envOr("GO386", "sse2"); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$pkg.GO386 = _r$2;
internal/buildcfg.GO386internal/buildcfg.envOr  _r$3��  _		_r$3 = gomips(); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$pkg.GOMIPS = _r$3;
internal/buildcfg.GOMIPSinternal/buildcfg.gomips  _r$4��  t		_r$4 = gomips64(); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$pkg.GOMIPS64 = _r$4;
internal/buildcfg.GOMIPS64internal/buildcfg.gomips64  _r$5��  �		_r$5 = goppc64(); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		$pkg.GOPPC64 = _r$5;
internal/buildcfg.GOPPC64internal/buildcfg.goppc64  5  �		$pkg.GO_LDSO = "/lib64/ld-linux-x86-64.so.2";
GO_LDSOinternal/buildcfg.GO_LDSO  "  �		$pkg.Version = "go1.17.3";
Versioninternal/buildcfg.Version  _r$6��  �		_r$6 = envOr("GOOS", "linux"); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		$pkg.GOOS = _r$6;
internal/buildcfg.GOOSinternal/buildcfg.envOr  _r$7��  �		_r$7 = envOr("GOARCH", "js"); /* */ $s = 15; case 15: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		$pkg.GOARCH = _r$7;
internal/buildcfg.GOARCHinternal/buildcfg.envOr  _r$8��  K		_r$8 = goarm(); /* */ $s = 16; case 16: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		$pkg.GOARM = _r$8;
internal/buildcfg.GOARMinternal/buildcfg.goarm  _tuple�  |		_tuple = (function $b() {
			var _arg, _arg$1, _arg$2, _r$10, _r$9, _tuple$1, baseline, err, flags, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r$10 = $f._r$10; _r$9 = $f._r$9; _tuple$1 = $f._tuple$1; baseline = $f.baseline; err = $f.err; flags = $f.flags; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			_arg = $pkg.GOOS;
			_arg$1 = $pkg.GOARCH;
			_r$9 = envOr("GOEXPERIMENT", ""); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_arg$2 = _r$9;
			_r$10 = ParseGOEXPERIMENT(_arg, _arg$1, _arg$2); /* */ $s = 2; case 2: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_tuple$1 = _r$10;
			flags = $clone(_tuple$1[0], goexperiment.Flags);
			baseline = $clone(_tuple$1[1], goexperiment.Flags);
			err = _tuple$1[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  G				$pkg.Error = err;
    			}
  W			$s = -1; return [flags, baseline];
    			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r$10 = _r$10; $f._r$9 = _r$9; $f._tuple$1 = _tuple$1; $f.baseline = baseline; $f.err = err; $f.flags = flags; $f.$s = $s; $f.$r = $r; return $f;
		})();
		$pkg.Experiment = $clone(_tuple[0], goexperiment.Flags);
		experimentBaseline = $clone(_tuple[1], goexperiment.Flags);
internal/buildcfg.Errorinternal/buildcfg.Experimentinternal/buildcfg.GOARCHinternal/buildcfg.GOOS#internal/buildcfg.ParseGOEXPERIMENTinternal/buildcfg.envOr$internal/buildcfg.experimentBaselineinternal/goexperiment.Flags  V  �		$pkg.FramePointerEnabled = $pkg.GOARCH === "amd64" || $pkg.GOARCH === "arm64";
FramePointerEnabled%internal/buildcfg.FramePointerEnabledinternal/buildcfg.GOARCH internal/buildcfg.Checkinternal/buildcfgCheck Check�V	Check = function() {
		var _r$9, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$9 = $f._r$9; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (!($interfaceIsEqual($pkg.Error, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual($pkg.Error, $ifaceNil))) { */ case 1:
  �			_r$9 = fmt.Fprintf(os.Stderr, "%s: %v\n", new sliceType([new $String(filepath.Base((x = os.Args, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])))), $pkg.Error])); /* */ $s = 3; case 3: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_r$9;
  �			$r = os.Exit(2); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Check }; } $f._r$9 = _r$9; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Check = Check;
Checkfmt.Fprintfinternal/buildcfg.Checkinternal/buildcfg.Errorinternal/buildcfg.sliceTypeos.Argsos.Exit	os.Stderrpath/filepath.Base internal/buildcfg.envOrinternal/buildcfgenvOr envOr��	envOr = function(key, value) {
		var _r$9, key, value, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$9 = $f._r$9; key = $f.key; value = $f.value; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  +		_r$9 = os.Getenv(key); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		x = _r$9;
    		if (!(x === "")) {
  L			$s = -1; return x;
    		}
  Y		$s = -1; return value;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: envOr }; } $f._r$9 = _r$9; $f.key = key; $f.value = value; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
envOrinternal/buildcfg.envOr	os.Getenv internal/buildcfg.goarminternal/buildcfggoarm goarm��	goarm = function() {
		var _1, _r$10, _r$9, def, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r$10 = $f._r$10; _r$9 = $f._r$9; def = $f.def; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  }		def = "5";
    		if ($pkg.GOOS === "android" && $pkg.GOARCH === "arm") {
  �			def = "7";
    		}
  			_r$9 = envOr("GOARM", def); /* */ $s = 2; case 2: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			v = _r$9;
    			_1 = v;
    			if (_1 === ("5")) {
  /				$s = -1; return 5;
    			} else if (_1 === ("6")) {
  E				$s = -1; return 6;
    			} else if (_1 === ("7")) {
  [				$s = -1; return 7;
    			}
    		case 1:
  h		_r$10 = fmt.Errorf("invalid GOARM: must be 5, 6, 7", new sliceType([])); /* */ $s = 3; case 3: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		$pkg.Error = _r$10;
  �		$s = -1; return (((def.charCodeAt(0) - 48 << 24 >>> 24) >> 0));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: goarm }; } $f._1 = _1; $f._r$10 = _r$10; $f._r$9 = _r$9; $f.def = def; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
goarm
fmt.Errorfinternal/buildcfg.Errorinternal/buildcfg.GOARCHinternal/buildcfg.GOOSinternal/buildcfg.envOrinternal/buildcfg.goarminternal/buildcfg.sliceType internal/buildcfg.gomipsinternal/buildcfggomips gomips�	gomips = function() {
		var _1, _r$10, _r$9, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r$10 = $f._r$10; _r$9 = $f._r$9; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			_r$9 = envOr("GOMIPS", "hardfloat"); /* */ $s = 2; case 2: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			v = _r$9;
    			_1 = v;
    			if (_1 === ("hardfloat") || _1 === ("softfloat")) {
  $				$s = -1; return v;
    			}
    		case 1:
  1		_r$10 = fmt.Errorf("invalid GOMIPS: must be hardfloat, softfloat", new sliceType([])); /* */ $s = 3; case 3: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		$pkg.Error = _r$10;
  u		$s = -1; return "hardfloat";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gomips }; } $f._1 = _1; $f._r$10 = _r$10; $f._r$9 = _r$9; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
gomips
fmt.Errorfinternal/buildcfg.Errorinternal/buildcfg.envOrinternal/buildcfg.gomipsinternal/buildcfg.sliceType internal/buildcfg.gomips64internal/buildcfggomips64 gomips64�	gomips64 = function() {
		var _1, _r$10, _r$9, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r$10 = $f._r$10; _r$9 = $f._r$9; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			_r$9 = envOr("GOMIPS64", "hardfloat"); /* */ $s = 2; case 2: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			v = _r$9;
    			_1 = v;
    			if (_1 === ("hardfloat") || _1 === ("softfloat")) {
  �				$s = -1; return v;
    			}
    		case 1:
  
		_r$10 = fmt.Errorf("invalid GOMIPS64: must be hardfloat, softfloat", new sliceType([])); /* */ $s = 3; case 3: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		$pkg.Error = _r$10;
  P		$s = -1; return "hardfloat";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gomips64 }; } $f._1 = _1; $f._r$10 = _r$10; $f._r$9 = _r$9; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
gomips64
fmt.Errorfinternal/buildcfg.Errorinternal/buildcfg.envOrinternal/buildcfg.gomips64internal/buildcfg.sliceType internal/buildcfg.goppc64internal/buildcfggoppc64 goppc64�T	goppc64 = function() {
		var _1, _r$10, _r$9, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r$10 = $f._r$10; _r$9 = $f._r$9; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			_r$9 = envOr("GOPPC64", "power8"); /* */ $s = 2; case 2: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			v = _r$9;
    			_1 = v;
    			if (_1 === ("power8")) {
  �				$s = -1; return 8;
    			} else if (_1 === ("power9")) {
  �				$s = -1; return 9;
    			}
    		case 1:
  �		_r$10 = fmt.Errorf("invalid GOPPC64: must be power8, power9", new sliceType([])); /* */ $s = 3; case 3: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		$pkg.Error = _r$10;
  	+		$s = -1; return ((("power8".charCodeAt(5) - 48 << 24 >>> 24) >> 0));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: goppc64 }; } $f._1 = _1; $f._r$10 = _r$10; $f._r$9 = _r$9; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
goppc64
fmt.Errorfinternal/buildcfg.Errorinternal/buildcfg.envOrinternal/buildcfg.goppc64internal/buildcfg.sliceType )(internal/buildcfg.gowasmFeatures).String ��	gowasmFeatures.ptr.prototype.String = function() {
		var f, flags;
		f = this;
  	�		flags = sliceType$1.nil;
    		if (f.SatConv) {
  	�			flags = $append(flags, "satconv");
    		}
    		if (f.SignExt) {
  
			flags = $append(flags, "signext");
    		}
  
D		return strings.Join(flags, ",");
    	};
	gowasmFeatures.prototype.String = function() { return this.$val.String(); };
gowasmFeatures internal/buildcfg.gowasmFeaturesinternal/buildcfg.sliceType$1strings.Join internal/buildcfg.gowasminternal/buildcfggowasm gowasm�R	gowasm = function() {
		var _1, _i, _r$10, _r$11, _r$9, _ref, f, opt, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$9 = $f._r$9; _ref = $f._ref; f = $f.f; opt = $f.opt; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = new gowasmFeatures.ptr(false, false);
  
�		_r$9 = envOr("GOWASM", ""); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_r$10 = strings.Split(_r$9, ","); /* */ $s = 2; case 2: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		_ref = _r$10;
		_i = 0;
		/* while (true) { */ case 3:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 4; continue; }
			opt = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				_1 = opt;
  
�				/* */ if (_1 === ("satconv")) { $s = 6; continue; }
				/* */ if (_1 === ("signext")) { $s = 7; continue; }
				/* */ if (_1 === ("")) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if (_1 === ("satconv")) { */ case 6:
  
�					f.SatConv = true;
    					$s = 10; continue;
    				/* } else if (_1 === ("signext")) { */ case 7:
  					f.SignExt = true;
    					$s = 10; continue;
    				/* } else if (_1 === ("")) { */ case 8:
    					$s = 10; continue;
				/* } else { */ case 9:
  J					_r$11 = fmt.Errorf("invalid GOWASM: no such feature %q", new sliceType([new $String(opt)])); /* */ $s = 11; case 11: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					$pkg.Error = _r$11;
    				/* } */ case 10:
    			case 5:
    			_i++;
		$s = 3; continue;
		case 4:
  �		$s = -1; return f;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gowasm }; } $f._1 = _1; $f._i = _i; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$9 = _r$9; $f._ref = _ref; $f.f = f; $f.opt = opt; $f.$s = $s; $f.$r = $r; return $f;
	};
gowasm
fmt.Errorfinternal/buildcfg.Errorinternal/buildcfg.envOrinternal/buildcfg.gowasm internal/buildcfg.gowasmFeaturesinternal/buildcfg.sliceTypestrings.Split %internal/buildcfg.Getgoextlinkenabledinternal/buildcfgGetgoextlinkenabled Getgoextlinkenabled��	Getgoextlinkenabled = function() {
		var $24r, _r$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$9 = $f._r$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r$9 = envOr("GO_EXTLINK_ENABLED", ""); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		$24r = _r$9;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Getgoextlinkenabled }; } $f.$24r = $24r; $f._r$9 = _r$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Getgoextlinkenabled = Getgoextlinkenabled;
Getgoextlinkenabled%internal/buildcfg.Getgoextlinkenabledinternal/buildcfg.envOr #internal/buildcfg.ParseGOEXPERIMENTinternal/buildcfgParseGOEXPERIMENT ParseGOEXPERIMENT�O	ParseGOEXPERIMENT = function(goos, goarch, goexp) {
		var _entry, _i, _key, _key$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$9, _ref, _tmp, _tmp$1, _tuple$1, baseline, err, f, field, flags, goarch, goexp, goos, i, names, ok, regabiSupported, rt, rv, set, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _key = $f._key; _key$1 = $f._key$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$9 = $f._r$9; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple$1 = $f._tuple$1; baseline = $f.baseline; err = $f.err; f = $f.f; field = $f.field; flags = $f.flags; goarch = $f.goarch; goexp = $f.goexp; goos = $f.goos; i = $f.i; names = $f.names; ok = $f.ok; regabiSupported = $f.regabiSupported; rt = $f.rt; rv = $f.rv; set = $f.set; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		flags = [flags];
		flags[0] = new goexperiment.Flags.ptr(false, false, false, false, false, false, false, false);
		baseline = new goexperiment.Flags.ptr(false, false, false, false, false, false, false, false);
		err = $ifaceNil;
  
		regabiSupported = goarch === "amd64" && (goos === "android" || goos === "linux" || goos === "darwin" || goos === "windows");
  �		goexperiment.Flags.copy(baseline, new goexperiment.Flags.ptr(false, false, false, regabiSupported, regabiSupported, regabiSupported, regabiSupported, regabiSupported));
  �		goexperiment.Flags.copy(flags[0], baseline);
  E		/* */ if (!(goexp === "")) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(goexp === "")) { */ case 1:
  �			names = {};
  �			_r$9 = reflect.ValueOf(flags[0]); /* */ $s = 3; case 3: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_r$10 = $clone(_r$9, reflect.Value).Elem(); /* */ $s = 4; case 4: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			rv = _r$10;
  �			rt = $clone(rv, reflect.Value).Type();
  �			i = 0;
			/* while (true) { */ case 5:
				_r$11 = rt.NumField(); /* */ $s = 7; case 7: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
				/* if (!(i < _r$11)) { break; } */ if(!(i < _r$11)) { $s = 6; continue; }
  				_r$12 = $clone(rv, reflect.Value).Field(i); /* */ $s = 8; case 8: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
				field = _r$12;
  %				_r$13 = rt.Field(i); /* */ $s = 9; case 9: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
				_r$14 = strings.ToLower(_r$13.Name); /* */ $s = 10; case 10: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
				_key = _r$14; (names || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: $methodVal($clone(field, reflect.Value), "SetBool") };
  				i = i + (1) >> 0;
    			$s = 5; continue;
			case 6:
   			_key$1 = "regabi"; (names || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$1)] = { k: _key$1, v: (function(flags) { return function(v) {
				var v;
  D				flags[0].RegabiWrappers = v;
  `				flags[0].RegabiG = v;
  u				flags[0].RegabiReflect = v;
  �				flags[0].RegabiDefer = v;
  �				flags[0].RegabiArgs = v;
    			}; })(flags) };
  �			_ref = strings.Split(goexp, ",");
			_i = 0;
			/* while (true) { */ case 11:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 12; continue; }
				f = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (f === "") {
  					_i++;
					/* continue; */ $s = 11; continue;
    				}
    				if (f === "none") {
  �					goexperiment.Flags.copy(flags[0], new goexperiment.Flags.ptr(false, false, false, false, false, false, false, false));
  �					_i++;
					/* continue; */ $s = 11; continue;
    				}
  				val = true;
    				if (strings.HasPrefix(f, "no")) {
  ?					_tmp = $substring(f, 2);
					_tmp$1 = false;
					f = _tmp;
					val = _tmp$1;
    				}
  ]				_tuple$1 = (_entry = names[$String.keyFor(f)], _entry !== undefined ? [_entry.v, true] : [$throwNilPointerError, false]);
				set = _tuple$1[0];
				ok = _tuple$1[1];
  t				/* */ if (!ok) { $s = 13; continue; }
				/* */ $s = 14; continue;
    				/* if (!ok) { */ case 13:
  �					_r$15 = fmt.Errorf("unknown GOEXPERIMENT %s", new sliceType([new $String(f)])); /* */ $s = 15; case 15: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					err = _r$15;
  �					$s = -1; return [flags[0], baseline, err];
    				/* } */ case 14:
  �				$r = set(val); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				_i++;
			$s = 11; continue;
			case 12:
    		/* } */ case 2:
    		if (!(goarch === "amd64")) {
  			flags[0].RegabiWrappers = false;
  4			flags[0].RegabiG = false;
  L			flags[0].RegabiReflect = false;
  j			flags[0].RegabiDefer = false;
  �			flags[0].RegabiArgs = false;
    		}
  �		/* */ if (flags[0].RegabiG && !flags[0].RegabiWrappers) { $s = 17; continue; }
		/* */ $s = 18; continue;
    		/* if (flags[0].RegabiG && !flags[0].RegabiWrappers) { */ case 17:
  �			_r$16 = fmt.Errorf("GOEXPERIMENT regabig requires regabiwrappers", new sliceType([])); /* */ $s = 19; case 19: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
			err = _r$16;
    		/* } */ case 18:
  5		/* */ if (flags[0].RegabiArgs && !(flags[0].RegabiWrappers && flags[0].RegabiG && flags[0].RegabiReflect && flags[0].RegabiDefer)) { $s = 20; continue; }
		/* */ $s = 21; continue;
    		/* if (flags[0].RegabiArgs && !(flags[0].RegabiWrappers && flags[0].RegabiG && flags[0].RegabiReflect && flags[0].RegabiDefer)) { */ case 20:
  �			_r$17 = fmt.Errorf("GOEXPERIMENT regabiargs requires regabiwrappers,regabig,regabireflect,regabidefer", new sliceType([])); /* */ $s = 22; case 22: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
			err = _r$17;
    		/* } */ case 21:
  		$s = -1; return [flags[0], baseline, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ParseGOEXPERIMENT }; } $f._entry = _entry; $f._i = _i; $f._key = _key; $f._key$1 = _key$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$9 = _r$9; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple$1 = _tuple$1; $f.baseline = baseline; $f.err = err; $f.f = f; $f.field = field; $f.flags = flags; $f.goarch = goarch; $f.goexp = goexp; $f.goos = goos; $f.i = i; $f.names = names; $f.ok = ok; $f.regabiSupported = regabiSupported; $f.rt = rt; $f.rv = rv; $f.set = set; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ParseGOEXPERIMENT = ParseGOEXPERIMENT;
ParseGOEXPERIMENT	
fmt.Errorf#internal/buildcfg.ParseGOEXPERIMENTinternal/buildcfg.sliceTypeinternal/goexperiment.Flagsreflect.Valuereflect.ValueOfstrings.HasPrefixstrings.Splitstrings.ToLower internal/buildcfg.expListinternal/buildcfgexpList expList��	expList = function(exp, base, all) {
		var _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$9, all, base, baseVal, exp, i, list, name, rBase, rt, rv, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$9 = $f._r$9; all = $f.all; base = $f.base; baseVal = $f.baseVal; exp = $f.exp; i = $f.i; list = $f.list; name = $f.name; rBase = $f.rBase; rt = $f.rt; rv = $f.rv; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  >		list = sliceType$1.nil;
  M		_r$9 = reflect.ValueOf(exp); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_r$10 = $clone(_r$9, reflect.Value).Elem(); /* */ $s = 2; case 2: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		rv = _r$10;
  t		rBase = new reflect.Value.ptr(ptrType.nil, 0, 0);
  �		/* */ if (!(base === ptrType$1.nil)) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!(base === ptrType$1.nil)) { */ case 3:
  �			_r$11 = reflect.ValueOf(base); /* */ $s = 5; case 5: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_r$12 = $clone(_r$11, reflect.Value).Elem(); /* */ $s = 6; case 6: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			rBase = _r$12;
    		/* } */ case 4:
  �		rt = $clone(rv, reflect.Value).Type();
  �		i = 0;
		/* while (true) { */ case 7:
			_r$13 = rt.NumField(); /* */ $s = 9; case 9: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
			/* if (!(i < _r$13)) { break; } */ if(!(i < _r$13)) { $s = 8; continue; }
  �			_r$14 = rt.Field(i); /* */ $s = 10; case 10: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
			_r$15 = strings.ToLower(_r$14.Name); /* */ $s = 11; case 11: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
			name = _r$15;
  )			_r$16 = $clone(rv, reflect.Value).Field(i); /* */ $s = 12; case 12: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
			_r$17 = $clone(_r$16, reflect.Value).Bool(); /* */ $s = 13; case 13: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
			val = _r$17;
  E			baseVal = false;
  X			/* */ if (!(base === ptrType$1.nil)) { $s = 14; continue; }
			/* */ $s = 15; continue;
    			/* if (!(base === ptrType$1.nil)) { */ case 14:
  l				_r$18 = $clone(rBase, reflect.Value).Field(i); /* */ $s = 16; case 16: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				_r$19 = $clone(_r$18, reflect.Value).Bool(); /* */ $s = 17; case 17: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
				baseVal = _r$19;
    			/* } */ case 15:
    			if (all || !(val === baseVal)) {
    				if (val) {
  �					list = $append(list, name);
    				} else {
  �					list = $append(list, "no" + name);
    				}
    			}
  �			i = i + (1) >> 0;
    		$s = 7; continue;
		case 8:
  		$s = -1; return list;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: expList }; } $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$9 = _r$9; $f.all = all; $f.base = base; $f.baseVal = baseVal; $f.exp = exp; $f.i = i; $f.list = list; $f.name = name; $f.rBase = rBase; $f.rt = rt; $f.rv = rv; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
expList	internal/buildcfg.expListinternal/buildcfg.ptrTypeinternal/buildcfg.ptrType$1internal/buildcfg.sliceType$1internal/goexperiment.Flagsreflect.Valuereflect.ValueOfreflect.rtypestrings.ToLower internal/buildcfg.GOEXPERIMENTinternal/buildcfgGOEXPERIMENT GOEXPERIMENT�l	GOEXPERIMENT = function() {
		var $24r, _r$10, _r$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$10 = $f._r$10; _r$9 = $f._r$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  7		_r$9 = expList($pkg.Experiment, experimentBaseline, false); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_r$10 = strings.Join(_r$9, ","); /* */ $s = 2; case 2: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		$24r = _r$10;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: GOEXPERIMENT }; } $f.$24r = $24r; $f._r$10 = _r$10; $f._r$9 = _r$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.GOEXPERIMENT = GOEXPERIMENT;
GOEXPERIMENTinternal/buildcfg.Experimentinternal/buildcfg.GOEXPERIMENTinternal/buildcfg.expList$internal/buildcfg.experimentBaselinestrings.Join $internal/buildcfg.EnabledExperimentsinternal/buildcfgEnabledExperiments EnabledExperiments��	EnabledExperiments = function() {
		var $24r, _r$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$9 = $f._r$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
   		_r$9 = expList($pkg.Experiment, ptrType$1.nil, false); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		$24r = _r$9;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: EnabledExperiments }; } $f.$24r = $24r; $f._r$9 = _r$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.EnabledExperiments = EnabledExperiments;
EnabledExperiments$internal/buildcfg.EnabledExperimentsinternal/buildcfg.Experimentinternal/buildcfg.expListinternal/buildcfg.ptrType$1  internal/buildcfg.AllExperimentsinternal/buildcfgAllExperiments AllExperiments��	AllExperiments = function() {
		var $24r, _r$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$9 = $f._r$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
   �		_r$9 = expList($pkg.Experiment, ptrType$1.nil, true); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		$24r = _r$9;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: AllExperiments }; } $f.$24r = $24r; $f._r$9 = _r$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.AllExperiments = AllExperiments;
AllExperiments internal/buildcfg.AllExperimentsinternal/buildcfg.Experimentinternal/buildcfg.expListinternal/buildcfg.ptrType$1 #internal/buildcfg.UpdateExperimentsinternal/buildcfgUpdateExperiments UpdateExperiments��	UpdateExperiments = function(goos, goarch, goexperiment$1) {
		var _r$9, _tuple$1, err, goarch, goexperiment$1, goos, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$9 = $f._r$9; _tuple$1 = $f._tuple$1; err = $f.err; goarch = $f.goarch; goexperiment$1 = $f.goexperiment$1; goos = $f.goos; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  !�		err = $ifaceNil;
  "
		_r$9 = ParseGOEXPERIMENT(goos, goarch, goexperiment$1); /* */ $s = 1; case 1: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_tuple$1 = _r$9;
		goexperiment.Flags.copy($pkg.Experiment, _tuple$1[0]);
		goexperiment.Flags.copy(experimentBaseline, _tuple$1[1]);
		err = _tuple$1[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  "q			$pkg.Error = err;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: UpdateExperiments }; } $f._r$9 = _r$9; $f._tuple$1 = _tuple$1; $f.err = err; $f.goarch = goarch; $f.goexperiment$1 = goexperiment$1; $f.goos = goos; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.UpdateExperiments = UpdateExperiments;
UpdateExperimentsinternal/buildcfg.Errorinternal/buildcfg.Experiment#internal/buildcfg.ParseGOEXPERIMENT#internal/buildcfg.UpdateExperiments$internal/buildcfg.experimentBaselineinternal/goexperiment.Flags ��{"Base":9294,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/buildcfg/cfg.go","Base":1,"Size":3070,"Lines":[0,55,109,159,160,223,293,373,376,451,521,558,575,576,585,592,598,615,626,628,629,635,674,675,718,761,800,841,861,882,905,927,948,975,995,997,998,1071,1087,1088,1155,1170,1189,1260,1273,1276,1278,1279,1318,1353,1364,1367,1381,1383,1384,1403,1424,1467,1516,1528,1531,1569,1580,1591,1602,1613,1624,1635,1638,1692,1718,1720,1721,1744,1793,1825,1836,1839,1907,1929,1931,1932,1957,2010,2042,2053,2056,2126,2150,2152,2153,2174,2225,2241,2252,2268,2279,2282,2345,2393,2395,2396,2425,2439,2453,2455,2456,2498,2518,2534,2569,2572,2588,2623,2626,2659,2661,2662,2697,2760,2775,2793,2813,2831,2851,2862,2875,2886,2951,2955,2958,2966,2968,2969,3005,3068],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/buildcfg/exp.go","Base":3072,"Size":5762,"Lines":[0,55,109,159,160,177,178,187,194,205,216,217,242,244,245,310,328,331,402,422,425,498,569,632,719,820,837,851,854,878,882,883,931,932,999,1025,1028,1093,1123,1126,1181,1246,1247,1306,1377,1391,1394,1444,1545,1666,1667,1699,1734,1769,1804,1839,1874,1877,1878,1936,1954,1955,2018,2082,2116,2134,2179,2218,2257,2275,2314,2338,2398,2402,2403,2452,2509,2565,2590,2625,2653,2674,2701,2726,2750,2754,2755,2773,2821,2837,2850,2855,2875,2931,2987,3030,3063,3076,3081,3096,3131,3157,3162,3185,3197,3248,3259,3264,3276,3280,3283,3284,3323,3347,3378,3402,3432,3460,3487,3490,3521,3566,3633,3636,3747,3851,3854,3862,3864,3865,3929,3998,4065,4088,4153,4172,4207,4232,4250,4289,4292,4309,4347,4391,4419,4438,4457,4492,4496,4525,4537,4567,4579,4614,4619,4623,4626,4639,4641,4642,4707,4778,4847,4889,4918,4994,4996,4997,5061,5094,5131,5172,5174,5175,5236,5297,5330,5370,5372,5373,5453,5520,5566,5626,5641,5726,5743,5757,5760],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/buildcfg/zbootstrap.go","Base":8835,"Size":458,"Lines":[0,48,49,66,67,84,85,113,138,172,208,240,271,308,361,388,421],"Infos":null}]}
 