˙˙Archive˙ 	
ImportPath Name Imports˙ 
ExportData
 Declarations˙ 	IncJSCode
 FileSet
 Minified GoLinknames˙   ˙[]string˙   ˙[]*compiler.Decl˙ ˙  ˙´˙˙ FullName LinkingName˙ Vars˙ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps˙ Blocking   *˙SymName˙ PkgPath Name   $˙[]compiler.GoLinkname˙ ˙  ;˙
GoLinkname˙ Implementation˙ 	Reference˙   ū@Ô˙crypto/hmachmaccrypto/subtlehash˙äi ]nmac1mac2 hHashhashkeyWriterio	BlockSizeResetSizeSumbWritepnerrhmacEqualNewF       
   
  
0F  3 : 
0  " J %  
 /   5  
 : >M 
O T Q"  @ Fw H J T y
N SY T"" k subtle&	subtle = $packages["crypto/subtle"];
˙    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
˙    		$r = hash.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  marshalableu	marshalable = $pkg.marshalable = $newType(8, $kindInterface, "hmac.marshalable", true, "crypto/hmac", false, null);
˙é	marshalable.init([{prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}]);
marshalablecrypto/hmac.marshalablecrypto/hmac.sliceType  hmacū×	hmac = $pkg.hmac = $newType(0, $kindStruct, "hmac.hmac", true, "crypto/hmac", false, function(opad_, ipad_, outer_, inner_, marshaled_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.opad = sliceType.nil;
			this.ipad = sliceType.nil;
			this.outer = $ifaceNil;
			this.inner = $ifaceNil;
			this.marshaled = false;
			return;
		}
		this.opad = opad_;
		this.ipad = ipad_;
		this.outer = outer_;
		this.inner = inner_;
		this.marshaled = marshaled_;
	});
ūŽ	ptrType.methods = [{prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}];
ūä	hmac.init("crypto/hmac", [{prop: "opad", name: "opad", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "ipad", name: "ipad", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "outer", name: "outer", embedded: false, exported: false, typ: hash.Hash, tag: ""}, {prop: "inner", name: "inner", embedded: false, exported: false, typ: hash.Hash, tag: ""}, {prop: "marshaled", name: "marshaled", embedded: false, exported: false, typ: $Bool, tag: ""}]);
hmaccrypto/hmac.hmaccrypto/hmac.ptrTypecrypto/hmac.sliceType	hash.Hash  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(hmac);
ptrTypecrypto/hmac.hmac (*crypto/hmac.hmac).Sum ūx	hmac.ptr.prototype.Sum = function(in$1) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, err, h, in$1, origLen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; err = $f.err; h = $f.h; in$1 = $f.in$1; origLen = $f.origLen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this;
  Í		origLen = in$1.$length;
  á		_r = h.inner.Sum(in$1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		in$1 = _r;
  ø		/* */ if (h.marshaled) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (h.marshaled) { */ case 2:
  			_r$1 = $assertType(h.outer, marshalable).UnmarshalBinary(h.opad); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err = _r$1;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  T				$panic(err);
    			}
    			$s = 4; continue;
		/* } else { */ case 3:
  o			$r = h.outer.Reset(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  			_r$2 = h.outer.Write(h.opad); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
    		/* } */ case 4:
  		_r$3 = h.outer.Write($subslice(in$1, origLen)); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$3;
  ¸		_r$4 = h.outer.Sum($subslice(in$1, 0, origLen)); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$24r = _r$4;
		$s = 10; case 10: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: hmac.ptr.prototype.Sum }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.err = err; $f.h = h; $f.in$1 = in$1; $f.origLen = origLen; $f.$s = $s; $f.$r = $r; return $f;
	};
	hmac.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
hmaccrypto/hmac.hmaccrypto/hmac.marshalable (*crypto/hmac.hmac).Write ū	hmac.ptr.prototype.Write = function(p) {
		var $24r, _r, _tuple, err, h, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; err = $f.err; h = $f.h; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		h = this;
    		_r = h.inner.Write(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: hmac.ptr.prototype.Write }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.h = h; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	hmac.prototype.Write = function(p) { return this.$val.Write(p); };
hmaccrypto/hmac.hmac (*crypto/hmac.hmac).Size ūÁ	hmac.ptr.prototype.Size = function() {
		var $24r, _r, h, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; h = $f.h; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this;
  M		_r = h.outer.Size(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: hmac.ptr.prototype.Size }; } $f.$24r = $24r; $f._r = _r; $f.h = h; $f.$s = $s; $f.$r = $r; return $f;
	};
	hmac.prototype.Size = function() { return this.$val.Size(); };
hmaccrypto/hmac.hmac (*crypto/hmac.hmac).BlockSize ūÚ	hmac.ptr.prototype.BlockSize = function() {
		var $24r, _r, h, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; h = $f.h; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this;
  		_r = h.inner.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: hmac.ptr.prototype.BlockSize }; } $f.$24r = $24r; $f._r = _r; $f.h = h; $f.$s = $s; $f.$r = $r; return $f;
	};
	hmac.prototype.BlockSize = function() { return this.$val.BlockSize(); };
hmaccrypto/hmac.hmac (*crypto/hmac.hmac).Reset ū	hmac.ptr.prototype.Reset = function() {
		var _r, _r$1, _r$2, _r$3, _r$4, _tuple, _tuple$1, _tuple$2, _tuple$3, err, err$1, h, imarshal, innerOK, marshalableInner, marshalableOuter, omarshal, outerOK, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; err = $f.err; err$1 = $f.err$1; h = $f.h; imarshal = $f.imarshal; innerOK = $f.innerOK; marshalableInner = $f.marshalableInner; marshalableOuter = $f.marshalableOuter; omarshal = $f.omarshal; outerOK = $f.outerOK; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this;
  ž		/* */ if (h.marshaled) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (h.marshaled) { */ case 1:
  Ô			_r = $assertType(h.inner, marshalable).UnmarshalBinary(h.ipad); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  					$panic(err);
    			}
  	+			$s = -1; return;
    		/* } */ case 2:
  	7		$r = h.inner.Reset(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	H		_r$1 = h.inner.Write(h.ipad); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  
		_tuple = $assertType(h.inner, marshalable, true);
		marshalableInner = _tuple[0];
		innerOK = _tuple[1];
    		if (!innerOK) {
  
Í			$s = -1; return;
    		}
  
Ø		_tuple$1 = $assertType(h.outer, marshalable, true);
		marshalableOuter = _tuple$1[0];
		outerOK = _tuple$1[1];
    		if (!outerOK) {
  			$s = -1; return;
    		}
  (		_r$2 = marshalableInner.MarshalBinary(); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		imarshal = _tuple$2[0];
		err$1 = _tuple$2[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  m			$s = -1; return;
    		}
  y		$r = h.outer.Reset(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		_r$3 = h.outer.Write(h.opad); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$3;
  Ą		_r$4 = marshalableOuter.MarshalBinary(); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_tuple$3 = _r$4;
		omarshal = _tuple$3[0];
		err$1 = _tuple$3[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  æ			$s = -1; return;
    		}
  /		h.ipad = imarshal;
  B		h.opad = omarshal;
  U		h.marshaled = true;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: hmac.ptr.prototype.Reset }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.err = err; $f.err$1 = err$1; $f.h = h; $f.imarshal = imarshal; $f.innerOK = innerOK; $f.marshalableInner = marshalableInner; $f.marshalableOuter = marshalableOuter; $f.omarshal = omarshal; $f.outerOK = outerOK; $f.$s = $s; $f.$r = $r; return $f;
	};
	hmac.prototype.Reset = function() { return this.$val.Reset(); };
hmaccrypto/hmac.hmaccrypto/hmac.marshalable crypto/hmac.Newcrypto/hmacNew Newūs	New = function(h, key) {
		var _i, _i$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _ref, _ref$1, blocksize, h, hm, i, i$1, key, unique, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _ref = $f._ref; _ref$1 = $f._ref$1; blocksize = $f.blocksize; h = $f.h; hm = $f.hm; i = $f.i; i$1 = $f.i$1; key = $f.key; unique = $f.unique; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		hm = [hm];
		unique = [unique];
  		hm[0] = new hmac.ptr(sliceType.nil, sliceType.nil, $ifaceNil, $ifaceNil, false);
  		_r = h(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		hm[0].outer = _r;
  /		_r$1 = h(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		hm[0].inner = _r$1;
  ?		unique[0] = true;
  O		$r = (function(hm, unique) { return function() {
			var $deferred;
			/* */ var $err = null; try { $deferred = []; $curGoroutine.deferStack.push($deferred);
  Z			$deferred.push([(function(hm, unique) { return function() {
  š				$unused($recover());
    			}; })(hm, unique), []]);
    			if ($interfaceIsEqual(hm[0].outer, hm[0].inner)) {
  ė				unique[0] = false;
    			}
    			/* */ } catch(err) { $err = err; } finally { $callDeferred($deferred, $err); }
		}; })(hm, unique)(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!unique[0]) {
  			$panic(new $String("crypto/hmac: hash generation function does not produce unique values"));
    		}
  f		_r$2 = hm[0].inner.BlockSize(); /* */ $s = 4; case 4: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		blocksize = _r$2;
  		hm[0].ipad = $makeSlice(sliceType, blocksize);
  Ŧ		hm[0].opad = $makeSlice(sliceType, blocksize);
  Ī		/* */ if (key.$length > blocksize) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (key.$length > blocksize) { */ case 5:
  			_r$3 = hm[0].outer.Write(key); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$3;
  "			_r$4 = hm[0].outer.Sum(sliceType.nil); /* */ $s = 8; case 8: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			key = _r$4;
    		/* } */ case 6:
  >		$copySlice(hm[0].ipad, key);
  R		$copySlice(hm[0].opad, key);
  f		_ref = hm[0].ipad;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  			(x$1 = hm[0].ipad, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i] = (((x = hm[0].ipad, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i])) ^ (54)) << 24 >>> 24)));
    			_i++;
		}
  		_ref$1 = hm[0].opad;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i$1 = _i$1;
  ŗ			(x$3 = hm[0].opad, ((i$1 < 0 || i$1 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i$1] = (((x$2 = hm[0].opad, ((i$1 < 0 || i$1 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i$1])) ^ (92)) << 24 >>> 24)));
    			_i$1++;
		}
  Ę		_r$5 = hm[0].inner.Write(hm[0].ipad); /* */ $s = 9; case 9: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_r$5;
  ä		$s = -1; return hm[0];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: New }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._ref = _ref; $f._ref$1 = _ref$1; $f.blocksize = blocksize; $f.h = h; $f.hm = hm; $f.i = i; $f.i$1 = i$1; $f.key = key; $f.unique = unique; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.New = New;
Newcrypto/hmac.Newcrypto/hmac.hmaccrypto/hmac.sliceType crypto/hmac.Equalcrypto/hmacEqual Equal˙	Equal = function(mac1, mac2) {
		var mac1, mac2;
  ˙		return subtle.ConstantTimeCompare(mac1, mac2) === 1;
    	};
	$pkg.Equal = Equal;
Equalcrypto/hmac.Equal!crypto/subtle.ConstantTimeCompare ūË{"Base":4661,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/hmac/hmac.go","Base":1,"Size":4659,"Lines":[0,55,109,159,160,163,240,314,381,450,451,526,548,549,622,677,712,733,763,808,811,814,827,828,837,854,862,864,865,880,954,955,1016,1060,1104,1151,1152,1218,1295,1342,1371,1404,1435,1437,1438,1457,1478,1502,1503,1572,1645,1681,1697,1699,1700,1739,1759,1781,1782,1800,1872,1886,1890,1900,1918,1942,1945,1974,2008,2010,2011,2063,2088,2090,2091,2148,2210,2211,2236,2254,2326,2340,2344,2353,2356,2357,2374,2397,2398,2466,2534,2602,2606,2663,2695,2747,2762,2771,2774,2826,2841,2850,2853,2854,2905,2922,2931,2934,2935,2952,2975,3026,3043,3052,3055,3056,3117,3136,3155,3175,3177,3178,3249,3319,3372,3444,3509,3543,3596,3613,3629,3645,3661,3671,3688,3765,3782,3788,3816,3834,3838,3843,3857,3937,3940,3975,4010,4045,4072,4105,4127,4153,4156,4176,4196,4222,4243,4246,4272,4293,4296,4321,4322,4333,4335,4336,4412,4449,4518,4591,4605,4657],"Infos":null}]}
 