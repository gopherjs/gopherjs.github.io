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
GoLinkname�� Implementation�� 	Reference��   �*���errorserrorsinternal/reflectlitepi )6errtarget texterrorsAsIsNewUnwrap  F        F       F    F       "+ reflectlite2	reflectlite = $packages["internal/reflectlite"];
��    		$r = reflectlite.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errorString��	errorString = $pkg.errorString = $newType(0, $kindStruct, "errors.errorString", true, "errors", false, function(s_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = "";
			return;
		}
		this.s = s_;
	});
f	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
p	errorString.init("errors", [{prop: "s", name: "s", embedded: false, exported: false, typ: $String, tag: ""}]);
errorStringerrors.errorStringerrors.ptrType$1  ptrType	ptrType = $ptrType($error);
ptrType  interfaceTypes	interfaceType = $interfaceType([{prop: "Unwrap", name: "Unwrap", pkg: "", typ: $funcType([], [$error], false)}]);
interfaceType  interfaceType$1r	interfaceType$1 = $interfaceType([{prop: "Is", name: "Is", pkg: "", typ: $funcType([$error], [$Bool], false)}]);
interfaceType$1  interfaceType$2{	interfaceType$2 = $interfaceType([{prop: "As", name: "As", pkg: "", typ: $funcType([$emptyInterface], [$Bool], false)}]);
interfaceType$2  	ptrType$1$	ptrType$1 = $ptrType(errorString);
	ptrType$1errors.errorString  	errorType	errorType  _r��  �		_r = reflectlite.TypeOf((ptrType.nil)).Elem(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		errorType = _r;
errors.errorTypeerrors.ptrTypeinternal/reflectlite.TypeOf 
errors.NewerrorsNew Newg	New = function(text) {
		var text;
  s		return new errorString.ptr(text);
    	};
	$pkg.New = New;
New
errors.Newerrors.errorString (*errors.errorString).Error ��	errorString.ptr.prototype.Error = function() {
		var e;
		e = this;
  		return e.s;
    	};
	errorString.prototype.Error = function() { return this.$val.Error(); };
errorStringerrors.errorString errors.UnwraperrorsUnwrap Unwrap��	Unwrap = function(err) {
		var $24r, _r$1, _tuple, err, ok, u, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; ok = $f.ok; u = $f.u; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  	�		_tuple = $assertType(err, interfaceType, true);
		u = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  	�			$s = -1; return $ifaceNil;
    		}
  
 		_r$1 = u.Unwrap(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Unwrap }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.ok = ok; $f.u = u; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Unwrap = Unwrap;
Unwraperrors.Unwraperrors.interfaceType 	errors.IserrorsIs Is��	Is = function(err, target) {
		var _r$1, _r$2, _r$3, _tuple, _v, err, isComparable, ok, target, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _v = $f._v; err = $f.err; isComparable = $f.isComparable; ok = $f.ok; target = $f.target; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if ($interfaceIsEqual(target, $ifaceNil)) {
  �			$s = -1; return $interfaceIsEqual(err, target);
    		}
  		_r$1 = reflectlite.TypeOf(target).Comparable(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		isComparable = _r$1;
  ?		/* while (true) { */ case 2:
    			if (isComparable && $interfaceIsEqual(err, target)) {
  m				$s = -1; return true;
    			}
  �			_tuple = $assertType(err, interfaceType$1, true);
			x = _tuple[0];
			ok = _tuple[1];
  			if (!(ok)) { _v = false; $s = 6; continue s; }
			_r$2 = x.Is(target); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_v = _r$2; case 6:
			/* */ if (_v) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (_v) { */ case 4:
  �				$s = -1; return true;
    			/* } */ case 5:
  �			_r$3 = Unwrap(err); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			err = _r$3;
    			if ($interfaceIsEqual(err, $ifaceNil)) {
  �				$s = -1; return false;
    			}
    		$s = 2; continue;
		case 3:
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Is }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._v = _v; $f.err = err; $f.isComparable = isComparable; $f.ok = ok; $f.target = target; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Is = Is;
Is	errors.Iserrors.Unwraperrors.interfaceType$1internal/reflectlite.TypeOf 	errors.AserrorsAs As�G	As = function(err, target) {
		var _r$1, _r$10, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tuple, _v, _v$1, err, ok, target, targetType, typ, val, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tuple = $f._tuple; _v = $f._v; _v$1 = $f._v$1; err = $f.err; ok = $f.ok; target = $f.target; targetType = $f.targetType; typ = $f.typ; val = $f.val; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if ($interfaceIsEqual(target, $ifaceNil)) {
  $			$panic(new $String("errors: target cannot be nil"));
    		}
  N		_r$1 = reflectlite.ValueOf(target); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		val = $clone(_r$1, reflectlite.Value);
  r		typ = $clone(val, reflectlite.Value).Type();
  �		_r$2 = typ.Kind(); /* */ $s = 4; case 4: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		/* */ if (!((_r$2 === 22)) || $clone(val, reflectlite.Value).IsNil()) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((_r$2 === 22)) || $clone(val, reflectlite.Value).IsNil()) { */ case 2:
  �			$panic(new $String("errors: target must be a non-nil pointer"));
    		/* } */ case 3:
  �		_r$3 = typ.Elem(); /* */ $s = 5; case 5: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		targetType = _r$3;
  			_r$4 = targetType.Kind(); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		if (!(!((_r$4 === 20)))) { _v = false; $s = 8; continue s; }
		_r$5 = targetType.Implements(errorType); /* */ $s = 10; case 10: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_v = !_r$5; case 8:
		/* */ if (_v) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (_v) { */ case 6:
  `			$panic(new $String("errors: *target must be interface or implement error"));
    		/* } */ case 7:
  �		/* while (true) { */ case 11:
			/* if (!(!($interfaceIsEqual(err, $ifaceNil)))) { break; } */ if(!(!($interfaceIsEqual(err, $ifaceNil)))) { $s = 12; continue; }
  �			_r$6 = reflectlite.TypeOf(err).AssignableTo(targetType); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			/* */ if (_r$6) { $s = 13; continue; }
			/* */ $s = 14; continue;
    			/* if (_r$6) { */ case 13:
  �				_r$7 = $clone(val, reflectlite.Value).Elem(); /* */ $s = 16; case 16: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_r$8 = reflectlite.ValueOf(err); /* */ $s = 17; case 17: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				$r = $clone(_r$7, reflectlite.Value).Set($clone(_r$8, reflectlite.Value)); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  				$s = -1; return true;
    			/* } */ case 14:
  /			_tuple = $assertType(err, interfaceType$2, true);
			x = _tuple[0];
			ok = _tuple[1];
  ,			if (!(ok)) { _v$1 = false; $s = 21; continue s; }
			_r$9 = x.As(target); /* */ $s = 22; case 22: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_v$1 = _r$9; case 21:
			/* */ if (_v$1) { $s = 19; continue; }
			/* */ $s = 20; continue;
    			/* if (_v$1) { */ case 19:
  y				$s = -1; return true;
    			/* } */ case 20:
  �			_r$10 = Unwrap(err); /* */ $s = 23; case 23: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			err = _r$10;
    		$s = 11; continue;
		case 12:
  �		$s = -1; return false;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: As }; } $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tuple = _tuple; $f._v = _v; $f._v$1 = _v$1; $f.err = err; $f.ok = ok; $f.target = target; $f.targetType = targetType; $f.typ = typ; $f.val = val; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.As = As;
As	errors.Aserrors.Unwraperrors.errorTypeerrors.interfaceType$2internal/reflectlite.TypeOfinternal/reflectlite.Valueinternal/reflectlite.ValueOf �{"Base":5355,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/errors/errors.go","Base":1,"Size":2080,"Lines":[0,55,109,159,160,221,224,297,300,378,437,440,458,461,533,536,600,671,674,759,785,788,846,849,865,868,952,1035,1062,1065,1099,1102,1122,1125,1150,1153,1214,1217,1296,1376,1459,1462,1488,1518,1545,1550,1553,1573,1576,1620,1647,1652,1655,1721,1736,1737,1793,1875,1905,1932,1934,1935,1988,2014,2024,2026,2027,2066,2078],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/errors/wrap.go","Base":2082,"Size":3272,"Lines":[0,55,109,159,160,175,176,185,209,211,212,287,338,372,403,430,447,451,461,474,477,496,498,499,562,565,648,678,681,761,837,840,919,976,979,1054,1057,1131,1170,1204,1224,1247,1250,1251,1308,1315,1352,1367,1371,1441,1456,1460,1524,1598,1657,1694,1710,1714,1717,1719,1720,1800,1877,1880,1963,1993,1996,2080,2165,2246,2265,2268,2349,2374,2377,2458,2494,2540,2560,2600,2603,2639,2658,2709,2761,2764,2790,2876,2940,2943,2961,3017,3061,3076,3080,3156,3171,3175,3195,3198,3212,3214,3215],"Infos":null}]}
 