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
GoLinkname�� Implementation�� 	Reference��   ����%vendor/golang.org/x/crypto/curve25519
curve25519crypto/subtleencoding/binaryfmt��i ]Edstscalarpoint 
curve25519	Basepoint	PointSizeScalarBaseMult
ScalarMult
ScalarSizeX25519V  C @ )F   , ,   9F   < < <  C @F  P P R   '1@K,V4# subtle&	subtle = $packages["crypto/subtle"];
��    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fieldElement��	fieldElement = $pkg.fieldElement = $newType(40, $kindArray, "curve25519.fieldElement", true, "vendor/golang.org/x/crypto/curve25519", false, null);
 	fieldElement.init($Int32, 10);
fieldElement2vendor/golang.org/x/crypto/curve25519.fieldElement  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType%	arrayType = $arrayType($Uint8, 32);
	arrayType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  ptrType	ptrType = $ptrType($Uint8);
ptrType  arrayType$1'	arrayType$1 = $arrayType($Int64, 10);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Int32, 10);
arrayType$2  "		$pkg.Basepoint = sliceType.nil;
	Basepoint/vendor/golang.org/x/crypto/curve25519.Basepoint/vendor/golang.org/x/crypto/curve25519.sliceType  	basePointbasePoint$24ptr	basePoint  ��  #		basePoint = $toNativeArray($kindUint8, [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	basePoint/vendor/golang.org/x/crypto/curve25519.basePoint 0vendor/golang.org/x/crypto/curve25519.ScalarMult%vendor/golang.org/x/crypto/curve25519
ScalarMult 
ScalarMult��	ScalarMult = function(dst, scalar, point) {
		var dst, point, scalar;
  �		scalarMult(dst, scalar, point);
    	};
	$pkg.ScalarMult = ScalarMult;

ScalarMult0vendor/golang.org/x/crypto/curve25519.ScalarMult0vendor/golang.org/x/crypto/curve25519.scalarMult 4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult%vendor/golang.org/x/crypto/curve25519ScalarBaseMult ScalarBaseMult��	ScalarBaseMult = function(dst, scalar) {
		var dst, scalar;
  		ScalarMult(dst, scalar, basePoint);
    	};
	$pkg.ScalarBaseMult = ScalarBaseMult;
ScalarBaseMult4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult0vendor/golang.org/x/crypto/curve25519.ScalarMult/vendor/golang.org/x/crypto/curve25519.basePoint *vendor/golang.org/x/crypto/curve25519.init%vendor/golang.org/x/crypto/curve25519init initP	init = function() {
  �		$pkg.Basepoint = new sliceType(basePoint);
    	};
    		init();
/vendor/golang.org/x/crypto/curve25519.Basepoint/vendor/golang.org/x/crypto/curve25519.basePoint*vendor/golang.org/x/crypto/curve25519.init/vendor/golang.org/x/crypto/curve25519.sliceType 4vendor/golang.org/x/crypto/curve25519.checkBasepoint%vendor/golang.org/x/crypto/curve25519checkBasepoint checkBasepoint�6	checkBasepoint = function() {
    		if (!((subtle.ConstantTimeCompare($pkg.Basepoint, new sliceType([9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])) === 1))) {
  �			$panic(new $String("curve25519: global Basepoint value was modified"));
    		}
    	};
checkBasepoint!crypto/subtle.ConstantTimeCompare/vendor/golang.org/x/crypto/curve25519.Basepoint4vendor/golang.org/x/crypto/curve25519.checkBasepoint/vendor/golang.org/x/crypto/curve25519.sliceType ,vendor/golang.org/x/crypto/curve25519.X25519%vendor/golang.org/x/crypto/curve25519X25519 X25519�	X25519 = function(scalar, point) {
		var $24r, _r, dst, point, scalar, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; dst = $f.dst; point = $f.point; scalar = $f.scalar; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dst = [dst];
  	�		dst[0] = arrayType.zero();
  	�		_r = x25519(dst[0], scalar, point); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: X25519 }; } $f.$24r = $24r; $f._r = _r; $f.dst = dst; $f.point = point; $f.scalar = scalar; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.X25519 = X25519;
X25519,vendor/golang.org/x/crypto/curve25519.X25519/vendor/golang.org/x/crypto/curve25519.arrayType,vendor/golang.org/x/crypto/curve25519.x25519 ,vendor/golang.org/x/crypto/curve25519.x25519%vendor/golang.org/x/crypto/curve25519x25519 x25519�	x25519 = function(dst, scalar, point) {
		var $24r, $24r$1, $24r$2, _r, _r$1, _r$2, _tmp, _tmp$1, base, dst, in$1, l, l$1, point, scalar, zero, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; base = $f.base; dst = $f.dst; in$1 = $f.in$1; l = $f.l; l$1 = $f.l$1; point = $f.point; scalar = $f.scalar; zero = $f.zero; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		base = [base];
		in$1 = [in$1];
  
+		in$1[0] = arrayType.zero();
  
;		l = scalar.$length;
  
8		/* */ if (!((l === 32))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((l === 32))) { */ case 1:
  
Y			_r = fmt.Errorf("bad scalar length: %d, expected %d", new sliceType$1([new $Int(l), new $Int(32)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = [sliceType.nil, _r];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  
�		l$1 = point.$length;
  
�		/* */ if (!((l$1 === 32))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!((l$1 === 32))) { */ case 5:
  
�			_r$1 = fmt.Errorf("bad point length: %d, expected %d", new sliceType$1([new $Int(l$1), new $Int(32)])); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r$1 = [sliceType.nil, _r$1];
			$s = 8; case 8: return $24r$1;
    		/* } */ case 6:
  		$copySlice(new sliceType(in$1[0]), scalar);
  		/* */ if ($indexPtr(point.$array, point.$offset + 0, ptrType) === $indexPtr($pkg.Basepoint.$array, $pkg.Basepoint.$offset + 0, ptrType)) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if ($indexPtr(point.$array, point.$offset + 0, ptrType) === $indexPtr($pkg.Basepoint.$array, $pkg.Basepoint.$offset + 0, ptrType)) { */ case 9:
  ?			checkBasepoint();
  R			ScalarBaseMult(dst, in$1[0]);
    			$s = 11; continue;
		/* } else { */ case 10:
  {			_tmp = arrayType.zero();
			_tmp$1 = arrayType.zero();
			base[0] = $clone(_tmp, arrayType);
			zero = $clone(_tmp$1, arrayType);
  �			$copySlice(new sliceType(base[0]), point);
  �			ScalarMult(dst, in$1[0], base[0]);
  �			/* */ if (subtle.ConstantTimeCompare(new sliceType(dst), new sliceType(zero)) === 1) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if (subtle.ConstantTimeCompare(new sliceType(dst), new sliceType(zero)) === 1) { */ case 12:
  �				_r$2 = fmt.Errorf("bad input point: low order point", new sliceType$1([])); /* */ $s = 14; case 14: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$24r$2 = [sliceType.nil, _r$2];
				$s = 15; case 15: return $24r$2;
    			/* } */ case 13:
    		/* } */ case 11:
  B		$s = -1; return [new sliceType(dst), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: x25519 }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.base = base; $f.dst = dst; $f.in$1 = in$1; $f.l = l; $f.l$1 = l$1; $f.point = point; $f.scalar = scalar; $f.zero = zero; $f.$s = $s; $f.$r = $r; return $f;
	};
x25519!crypto/subtle.ConstantTimeCompare
fmt.Errorf/vendor/golang.org/x/crypto/curve25519.Basepoint4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult0vendor/golang.org/x/crypto/curve25519.ScalarMult/vendor/golang.org/x/crypto/curve25519.arrayType4vendor/golang.org/x/crypto/curve25519.checkBasepoint-vendor/golang.org/x/crypto/curve25519.ptrType/vendor/golang.org/x/crypto/curve25519.sliceType1vendor/golang.org/x/crypto/curve25519.sliceType$1,vendor/golang.org/x/crypto/curve25519.x25519 ,vendor/golang.org/x/crypto/curve25519.feZero%vendor/golang.org/x/crypto/curve25519feZero feZero�	feZero = function(fe) {
		var _i, _ref, fe, i;
  �		_ref = fe;
		_i = 0;
		while (true) {
			if (!(_i < 10)) { break; }
			i = _i;
  �			fe.nilCheck, ((i < 0 || i >= fe.length) ? ($throwRuntimeError("index out of range"), undefined) : fe[i] = 0);
    			_i++;
		}
    	};
feZero,vendor/golang.org/x/crypto/curve25519.feZero +vendor/golang.org/x/crypto/curve25519.feOne%vendor/golang.org/x/crypto/curve25519feOne feOne]	feOne = function(fe) {
		var fe;
  		feZero(fe);
  *		fe.nilCheck, fe[0] = 1;
    	};
feOne+vendor/golang.org/x/crypto/curve25519.feOne,vendor/golang.org/x/crypto/curve25519.feZero +vendor/golang.org/x/crypto/curve25519.feAdd%vendor/golang.org/x/crypto/curve25519feAdd feAdd�	feAdd = function(dst, a, b) {
		var _i, _ref, a, b, dst, i, x, x$1;
  ^		_ref = dst;
		_i = 0;
		while (true) {
			if (!(_i < 10)) { break; }
			i = _i;
  u			dst.nilCheck, ((i < 0 || i >= dst.length) ? ($throwRuntimeError("index out of range"), undefined) : dst[i] = ((x = a, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) + (x$1 = b, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])) >> 0));
    			_i++;
		}
    	};
feAdd+vendor/golang.org/x/crypto/curve25519.feAdd +vendor/golang.org/x/crypto/curve25519.feSub%vendor/golang.org/x/crypto/curve25519feSub feSub�	feSub = function(dst, a, b) {
		var _i, _ref, a, b, dst, i, x, x$1;
  �		_ref = dst;
		_i = 0;
		while (true) {
			if (!(_i < 10)) { break; }
			i = _i;
  �			dst.nilCheck, ((i < 0 || i >= dst.length) ? ($throwRuntimeError("index out of range"), undefined) : dst[i] = ((x = a, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) - (x$1 = b, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])) >> 0));
    			_i++;
		}
    	};
feSub+vendor/golang.org/x/crypto/curve25519.feSub ,vendor/golang.org/x/crypto/curve25519.feCopy%vendor/golang.org/x/crypto/curve25519feCopy feCopy��	feCopy = function(dst, src) {
		var _i, _ref, dst, i, src, x;
  		_ref = dst;
		_i = 0;
		while (true) {
			if (!(_i < 10)) { break; }
			i = _i;
  '			dst.nilCheck, ((i < 0 || i >= dst.length) ? ($throwRuntimeError("index out of range"), undefined) : dst[i] = (x = src, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])));
    			_i++;
		}
    	};
feCopy,vendor/golang.org/x/crypto/curve25519.feCopy -vendor/golang.org/x/crypto/curve25519.feCSwap%vendor/golang.org/x/crypto/curve25519feCSwap feCSwap��	feCSwap = function(f, g, b) {
		var _i, _ref, b, f, g, i, t, x, x$1, x$2, x$3, x$4, x$5;
  �		b = -b;
  �		_ref = f;
		_i = 0;
		while (true) {
			if (!(_i < 10)) { break; }
			i = _i;
  �			t = b & ((((x = f, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) ^ (x$1 = g, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i]))) >> 0));
  			(x$3 = f, ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i] = (((x$2 = f, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) ^ (t)) >> 0)));
  "			(x$5 = g, ((i < 0 || i >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i] = (((x$4 = g, ((i < 0 || i >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i])) ^ (t)) >> 0)));
    			_i++;
		}
    	};
feCSwap-vendor/golang.org/x/crypto/curve25519.feCSwap +vendor/golang.org/x/crypto/curve25519.load3%vendor/golang.org/x/crypto/curve25519load3 load3��	load3 = function(in$1) {
		var in$1, r, x, x$1;
  �		r = new $Int64(0, 0);
  �		r = (new $Int64(0, (0 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 0])));
  �		r = (x = $shiftLeft64((new $Int64(0, (1 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 1]))), 8), new $Int64(r.$high | x.$high, (r.$low | x.$low) >>> 0));
  �		r = (x$1 = $shiftLeft64((new $Int64(0, (2 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 2]))), 16), new $Int64(r.$high | x$1.$high, (r.$low | x$1.$low) >>> 0));
  �		return r;
    	};
load3+vendor/golang.org/x/crypto/curve25519.load3 +vendor/golang.org/x/crypto/curve25519.load4%vendor/golang.org/x/crypto/curve25519load4 load4��	load4 = function(in$1) {
		var in$1;
  8		return (new $Int64(0, $clone(binary.LittleEndian, binary.littleEndian).Uint32(in$1)));
    	};
load4encoding/binary.LittleEndianencoding/binary.littleEndian+vendor/golang.org/x/crypto/curve25519.load4 1vendor/golang.org/x/crypto/curve25519.feFromBytes%vendor/golang.org/x/crypto/curve25519feFromBytes feFromBytes�	feFromBytes = function(dst, src) {
		var carry, dst, h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, src, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		h0 = load4(new sliceType(src));
  �		h1 = $shiftLeft64(load3($subslice(new sliceType(src), 4)), 6);
  �		h2 = $shiftLeft64(load3($subslice(new sliceType(src), 7)), 5);
  �		h3 = $shiftLeft64(load3($subslice(new sliceType(src), 10)), 3);
  		h4 = $shiftLeft64(load3($subslice(new sliceType(src), 13)), 2);
  !		h5 = load4($subslice(new sliceType(src), 16));
  8		h6 = $shiftLeft64(load3($subslice(new sliceType(src), 20)), 7);
  T		h7 = $shiftLeft64(load3($subslice(new sliceType(src), 23)), 5);
  p		h8 = $shiftLeft64(load3($subslice(new sliceType(src), 26)), 4);
  �		h9 = $shiftLeft64(((x = load3($subslice(new sliceType(src), 29)), new $Int64(x.$high & 0, (x.$low & 8388607) >>> 0))), 2);
  �		carry = arrayType$1.zero();
  �		carry[9] = $shiftRightInt64((new $Int64(h9.$high + 0, h9.$low + 16777216)), 25);
  �		h0 = (x$1 = $mul64(carry[9], new $Int64(0, 19)), new $Int64(h0.$high + x$1.$high, h0.$low + x$1.$low));
  �		h9 = (x$2 = $shiftLeft64(carry[9], 25), new $Int64(h9.$high - x$2.$high, h9.$low - x$2.$low));
  		carry[1] = $shiftRightInt64((new $Int64(h1.$high + 0, h1.$low + 16777216)), 25);
  4		h2 = (x$3 = carry[1], new $Int64(h2.$high + x$3.$high, h2.$low + x$3.$low));
  D		h1 = (x$4 = $shiftLeft64(carry[1], 25), new $Int64(h1.$high - x$4.$high, h1.$low - x$4.$low));
  Z		carry[3] = $shiftRightInt64((new $Int64(h3.$high + 0, h3.$low + 16777216)), 25);
  y		h4 = (x$5 = carry[3], new $Int64(h4.$high + x$5.$high, h4.$low + x$5.$low));
  �		h3 = (x$6 = $shiftLeft64(carry[3], 25), new $Int64(h3.$high - x$6.$high, h3.$low - x$6.$low));
  �		carry[5] = $shiftRightInt64((new $Int64(h5.$high + 0, h5.$low + 16777216)), 25);
  �		h6 = (x$7 = carry[5], new $Int64(h6.$high + x$7.$high, h6.$low + x$7.$low));
  �		h5 = (x$8 = $shiftLeft64(carry[5], 25), new $Int64(h5.$high - x$8.$high, h5.$low - x$8.$low));
  �		carry[7] = $shiftRightInt64((new $Int64(h7.$high + 0, h7.$low + 16777216)), 25);
  		h8 = (x$9 = carry[7], new $Int64(h8.$high + x$9.$high, h8.$low + x$9.$low));
  		h7 = (x$10 = $shiftLeft64(carry[7], 25), new $Int64(h7.$high - x$10.$high, h7.$low - x$10.$low));
  *		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  I		h1 = (x$11 = carry[0], new $Int64(h1.$high + x$11.$high, h1.$low + x$11.$low));
  Y		h0 = (x$12 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$12.$high, h0.$low - x$12.$low));
  o		carry[2] = $shiftRightInt64((new $Int64(h2.$high + 0, h2.$low + 33554432)), 26);
  �		h3 = (x$13 = carry[2], new $Int64(h3.$high + x$13.$high, h3.$low + x$13.$low));
  �		h2 = (x$14 = $shiftLeft64(carry[2], 26), new $Int64(h2.$high - x$14.$high, h2.$low - x$14.$low));
  �		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  �		h5 = (x$15 = carry[4], new $Int64(h5.$high + x$15.$high, h5.$low + x$15.$low));
  �		h4 = (x$16 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$16.$high, h4.$low - x$16.$low));
  �		carry[6] = $shiftRightInt64((new $Int64(h6.$high + 0, h6.$low + 33554432)), 26);
  		h7 = (x$17 = carry[6], new $Int64(h7.$high + x$17.$high, h7.$low + x$17.$low));
  (		h6 = (x$18 = $shiftLeft64(carry[6], 26), new $Int64(h6.$high - x$18.$high, h6.$low - x$18.$low));
  >		carry[8] = $shiftRightInt64((new $Int64(h8.$high + 0, h8.$low + 33554432)), 26);
  ]		h9 = (x$19 = carry[8], new $Int64(h9.$high + x$19.$high, h9.$low + x$19.$low));
  m		h8 = (x$20 = $shiftLeft64(carry[8], 26), new $Int64(h8.$high - x$20.$high, h8.$low - x$20.$low));
  �		dst.nilCheck, dst[0] = (((h0.$low + ((h0.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[1] = (((h1.$low + ((h1.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[2] = (((h2.$low + ((h2.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[3] = (((h3.$low + ((h3.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[4] = (((h4.$low + ((h4.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[5] = (((h5.$low + ((h5.$high >> 31) * 4294967296)) >> 0));
  �		dst.nilCheck, dst[6] = (((h6.$low + ((h6.$high >> 31) * 4294967296)) >> 0));
  		dst.nilCheck, dst[7] = (((h7.$low + ((h7.$high >> 31) * 4294967296)) >> 0));
  $		dst.nilCheck, dst[8] = (((h8.$low + ((h8.$high >> 31) * 4294967296)) >> 0));
  8		dst.nilCheck, dst[9] = (((h9.$low + ((h9.$high >> 31) * 4294967296)) >> 0));
    	};
feFromBytes1vendor/golang.org/x/crypto/curve25519.arrayType$11vendor/golang.org/x/crypto/curve25519.feFromBytes+vendor/golang.org/x/crypto/curve25519.load3+vendor/golang.org/x/crypto/curve25519.load4/vendor/golang.org/x/crypto/curve25519.sliceType /vendor/golang.org/x/crypto/curve25519.feToBytes%vendor/golang.org/x/crypto/curve25519	feToBytes 	feToBytes��	feToBytes = function(s, h) {
		var carry, h, q, s;
  w		carry = arrayType$2.zero();
  �		q = ((($imul(19, h[9])) + 16777216 >> 0)) >> 25 >> 0;
  �		q = ((h[0] + q >> 0)) >> 26 >> 0;
  �		q = ((h[1] + q >> 0)) >> 25 >> 0;
  �		q = ((h[2] + q >> 0)) >> 26 >> 0;
  �		q = ((h[3] + q >> 0)) >> 25 >> 0;
  		q = ((h[4] + q >> 0)) >> 26 >> 0;
  		q = ((h[5] + q >> 0)) >> 25 >> 0;
  /		q = ((h[6] + q >> 0)) >> 26 >> 0;
  E		q = ((h[7] + q >> 0)) >> 25 >> 0;
  [		q = ((h[8] + q >> 0)) >> 26 >> 0;
  q		q = ((h[9] + q >> 0)) >> 25 >> 0;
  �		h[0] = (h[0] + (($imul(19, q))) >> 0);
  		carry[0] = (h[0] >> 26 >> 0);
  .		h[1] = (h[1] + (carry[0]) >> 0);
  @		h[0] = (h[0] - ((carry[0] << 26 >> 0)) >> 0);
  X		carry[1] = (h[1] >> 25 >> 0);
  o		h[2] = (h[2] + (carry[1]) >> 0);
  �		h[1] = (h[1] - ((carry[1] << 25 >> 0)) >> 0);
  �		carry[2] = (h[2] >> 26 >> 0);
  �		h[3] = (h[3] + (carry[2]) >> 0);
  �		h[2] = (h[2] - ((carry[2] << 26 >> 0)) >> 0);
  �		carry[3] = (h[3] >> 25 >> 0);
  �		h[4] = (h[4] + (carry[3]) >> 0);
  		h[3] = (h[3] - ((carry[3] << 25 >> 0)) >> 0);
  		carry[4] = (h[4] >> 26 >> 0);
  2		h[5] = (h[5] + (carry[4]) >> 0);
  D		h[4] = (h[4] - ((carry[4] << 26 >> 0)) >> 0);
  \		carry[5] = (h[5] >> 25 >> 0);
  s		h[6] = (h[6] + (carry[5]) >> 0);
  �		h[5] = (h[5] - ((carry[5] << 25 >> 0)) >> 0);
  �		carry[6] = (h[6] >> 26 >> 0);
  �		h[7] = (h[7] + (carry[6]) >> 0);
  �		h[6] = (h[6] - ((carry[6] << 26 >> 0)) >> 0);
  �		carry[7] = (h[7] >> 25 >> 0);
  �		h[8] = (h[8] + (carry[7]) >> 0);
  		h[7] = (h[7] - ((carry[7] << 25 >> 0)) >> 0);
  		carry[8] = (h[8] >> 26 >> 0);
  6		h[9] = (h[9] + (carry[8]) >> 0);
  H		h[8] = (h[8] - ((carry[8] << 26 >> 0)) >> 0);
  `		carry[9] = (h[9] >> 25 >> 0);
  w		h[9] = (h[9] - ((carry[9] << 25 >> 0)) >> 0);
  o		s.nilCheck, s[0] = (((h[0] >> 0 >> 0) << 24 >>> 24));
  �		s.nilCheck, s[1] = (((h[0] >> 8 >> 0) << 24 >>> 24));
  �		s.nilCheck, s[2] = (((h[0] >> 16 >> 0) << 24 >>> 24));
  �		s.nilCheck, s[3] = (((((h[0] >> 24 >> 0)) | ((h[1] << 2 >> 0))) << 24 >>> 24));
  �		s.nilCheck, s[4] = (((h[1] >> 6 >> 0) << 24 >>> 24));
  �		s.nilCheck, s[5] = (((h[1] >> 14 >> 0) << 24 >>> 24));
   		s.nilCheck, s[6] = (((((h[1] >> 22 >> 0)) | ((h[2] << 3 >> 0))) << 24 >>> 24));
   ;		s.nilCheck, s[7] = (((h[2] >> 5 >> 0) << 24 >>> 24));
   S		s.nilCheck, s[8] = (((h[2] >> 13 >> 0) << 24 >>> 24));
   l		s.nilCheck, s[9] = (((((h[2] >> 21 >> 0)) | ((h[3] << 5 >> 0))) << 24 >>> 24));
   �		s.nilCheck, s[10] = (((h[3] >> 3 >> 0) << 24 >>> 24));
   �		s.nilCheck, s[11] = (((h[3] >> 11 >> 0) << 24 >>> 24));
   �		s.nilCheck, s[12] = (((((h[3] >> 19 >> 0)) | ((h[4] << 6 >> 0))) << 24 >>> 24));
   �		s.nilCheck, s[13] = (((h[4] >> 2 >> 0) << 24 >>> 24));
  !		s.nilCheck, s[14] = (((h[4] >> 10 >> 0) << 24 >>> 24));
  !%		s.nilCheck, s[15] = (((h[4] >> 18 >> 0) << 24 >>> 24));
  !?		s.nilCheck, s[16] = (((h[5] >> 0 >> 0) << 24 >>> 24));
  !X		s.nilCheck, s[17] = (((h[5] >> 8 >> 0) << 24 >>> 24));
  !q		s.nilCheck, s[18] = (((h[5] >> 16 >> 0) << 24 >>> 24));
  !�		s.nilCheck, s[19] = (((((h[5] >> 24 >> 0)) | ((h[6] << 1 >> 0))) << 24 >>> 24));
  !�		s.nilCheck, s[20] = (((h[6] >> 7 >> 0) << 24 >>> 24));
  !�		s.nilCheck, s[21] = (((h[6] >> 15 >> 0) << 24 >>> 24));
  !�		s.nilCheck, s[22] = (((((h[6] >> 23 >> 0)) | ((h[7] << 3 >> 0))) << 24 >>> 24));
  "		s.nilCheck, s[23] = (((h[7] >> 5 >> 0) << 24 >>> 24));
  "+		s.nilCheck, s[24] = (((h[7] >> 13 >> 0) << 24 >>> 24));
  "E		s.nilCheck, s[25] = (((((h[7] >> 21 >> 0)) | ((h[8] << 4 >> 0))) << 24 >>> 24));
  "o		s.nilCheck, s[26] = (((h[8] >> 4 >> 0) << 24 >>> 24));
  "�		s.nilCheck, s[27] = (((h[8] >> 12 >> 0) << 24 >>> 24));
  "�		s.nilCheck, s[28] = (((((h[8] >> 20 >> 0)) | ((h[9] << 6 >> 0))) << 24 >>> 24));
  "�		s.nilCheck, s[29] = (((h[9] >> 2 >> 0) << 24 >>> 24));
  "�		s.nilCheck, s[30] = (((h[9] >> 10 >> 0) << 24 >>> 24));
  "�		s.nilCheck, s[31] = (((h[9] >> 18 >> 0) << 24 >>> 24));
    	};
	feToBytes1vendor/golang.org/x/crypto/curve25519.arrayType$2/vendor/golang.org/x/crypto/curve25519.feToBytes +vendor/golang.org/x/crypto/curve25519.feMul%vendor/golang.org/x/crypto/curve25519feMul feMul�M�	feMul = function(h, f, g) {
		var carry, f, f0, f0g0, f0g1, f0g2, f0g3, f0g4, f0g5, f0g6, f0g7, f0g8, f0g9, f1, f1_2, f1g0, f1g1_2, f1g2, f1g3_2, f1g4, f1g5_2, f1g6, f1g7_2, f1g8, f1g9_38, f2, f2g0, f2g1, f2g2, f2g3, f2g4, f2g5, f2g6, f2g7, f2g8_19, f2g9_19, f3, f3_2, f3g0, f3g1_2, f3g2, f3g3_2, f3g4, f3g5_2, f3g6, f3g7_38, f3g8_19, f3g9_38, f4, f4g0, f4g1, f4g2, f4g3, f4g4, f4g5, f4g6_19, f4g7_19, f4g8_19, f4g9_19, f5, f5_2, f5g0, f5g1_2, f5g2, f5g3_2, f5g4, f5g5_38, f5g6_19, f5g7_38, f5g8_19, f5g9_38, f6, f6g0, f6g1, f6g2, f6g3, f6g4_19, f6g5_19, f6g6_19, f6g7_19, f6g8_19, f6g9_19, f7, f7_2, f7g0, f7g1_2, f7g2, f7g3_38, f7g4_19, f7g5_38, f7g6_19, f7g7_38, f7g8_19, f7g9_38, f8, f8g0, f8g1, f8g2_19, f8g3_19, f8g4_19, f8g5_19, f8g6_19, f8g7_19, f8g8_19, f8g9_19, f9, f9_2, f9g0, f9g1_38, f9g2_19, f9g3_38, f9g4_19, f9g5_38, f9g6_19, f9g7_38, f9g8_19, f9g9_38, g, g0, g1, g1_19, g2, g2_19, g3, g3_19, g4, g4_19, g5, g5_19, g6, g6_19, g7, g7_19, g8, g8_19, g9, g9_19, h, h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, x, x$1, x$10, x$100, x$101, x$102, x$103, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$5, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$6, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$7, x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$8, x$80, x$81, x$82, x$83, x$84, x$85, x$86, x$87, x$88, x$89, x$9, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99;
  &�		f0 = f[0];
  &�		f1 = f[1];
  '		f2 = f[2];
  '		f3 = f[3];
  '		f4 = f[4];
  '*		f5 = f[5];
  '6		f6 = f[6];
  'B		f7 = f[7];
  'N		f8 = f[8];
  'Z		f9 = f[9];
  'f		g0 = g[0];
  'r		g1 = g[1];
  '~		g2 = g[2];
  '�		g3 = g[3];
  '�		g4 = g[4];
  '�		g5 = g[5];
  '�		g6 = g[6];
  '�		g7 = g[7];
  '�		g8 = g[8];
  '�		g9 = g[9];
  '�		g1_19 = $imul(19, g1);
  '�		g2_19 = $imul(19, g2);
  ($		g3_19 = $imul(19, g3);
  (6		g4_19 = $imul(19, g4);
  (H		g5_19 = $imul(19, g5);
  (Z		g6_19 = $imul(19, g6);
  (l		g7_19 = $imul(19, g7);
  (~		g8_19 = $imul(19, g8);
  (�		g9_19 = $imul(19, g9);
  (�		f1_2 = $imul(2, f1);
  (�		f3_2 = $imul(2, f3);
  (�		f5_2 = $imul(2, f5);
  (�		f7_2 = $imul(2, f7);
  (�		f9_2 = $imul(2, f9);
  (�		f0g0 = $mul64((new $Int64(0, f0)), (new $Int64(0, g0)));
  )		f0g1 = $mul64((new $Int64(0, f0)), (new $Int64(0, g1)));
  )0		f0g2 = $mul64((new $Int64(0, f0)), (new $Int64(0, g2)));
  )O		f0g3 = $mul64((new $Int64(0, f0)), (new $Int64(0, g3)));
  )n		f0g4 = $mul64((new $Int64(0, f0)), (new $Int64(0, g4)));
  )�		f0g5 = $mul64((new $Int64(0, f0)), (new $Int64(0, g5)));
  )�		f0g6 = $mul64((new $Int64(0, f0)), (new $Int64(0, g6)));
  )�		f0g7 = $mul64((new $Int64(0, f0)), (new $Int64(0, g7)));
  )�		f0g8 = $mul64((new $Int64(0, f0)), (new $Int64(0, g8)));
  *			f0g9 = $mul64((new $Int64(0, f0)), (new $Int64(0, g9)));
  *(		f1g0 = $mul64((new $Int64(0, f1)), (new $Int64(0, g0)));
  *G		f1g1_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, g1)));
  *j		f1g2 = $mul64((new $Int64(0, f1)), (new $Int64(0, g2)));
  *�		f1g3_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, g3)));
  *�		f1g4 = $mul64((new $Int64(0, f1)), (new $Int64(0, g4)));
  *�		f1g5_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, g5)));
  *�		f1g6 = $mul64((new $Int64(0, f1)), (new $Int64(0, g6)));
  +		f1g7_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, g7)));
  +0		f1g8 = $mul64((new $Int64(0, f1)), (new $Int64(0, g8)));
  +O		f1g9_38 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, g9_19)));
  +v		f2g0 = $mul64((new $Int64(0, f2)), (new $Int64(0, g0)));
  +�		f2g1 = $mul64((new $Int64(0, f2)), (new $Int64(0, g1)));
  +�		f2g2 = $mul64((new $Int64(0, f2)), (new $Int64(0, g2)));
  +�		f2g3 = $mul64((new $Int64(0, f2)), (new $Int64(0, g3)));
  +�		f2g4 = $mul64((new $Int64(0, f2)), (new $Int64(0, g4)));
  ,		f2g5 = $mul64((new $Int64(0, f2)), (new $Int64(0, g5)));
  ,0		f2g6 = $mul64((new $Int64(0, f2)), (new $Int64(0, g6)));
  ,O		f2g7 = $mul64((new $Int64(0, f2)), (new $Int64(0, g7)));
  ,n		f2g8_19 = $mul64((new $Int64(0, f2)), (new $Int64(0, g8_19)));
  ,�		f2g9_19 = $mul64((new $Int64(0, f2)), (new $Int64(0, g9_19)));
  ,�		f3g0 = $mul64((new $Int64(0, f3)), (new $Int64(0, g0)));
  ,�		f3g1_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, g1)));
  ,�		f3g2 = $mul64((new $Int64(0, f3)), (new $Int64(0, g2)));
  -		f3g3_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, g3)));
  -<		f3g4 = $mul64((new $Int64(0, f3)), (new $Int64(0, g4)));
  -[		f3g5_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, g5)));
  -~		f3g6 = $mul64((new $Int64(0, f3)), (new $Int64(0, g6)));
  -�		f3g7_38 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, g7_19)));
  -�		f3g8_19 = $mul64((new $Int64(0, f3)), (new $Int64(0, g8_19)));
  -�		f3g9_38 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, g9_19)));
  .		f4g0 = $mul64((new $Int64(0, f4)), (new $Int64(0, g0)));
  ./		f4g1 = $mul64((new $Int64(0, f4)), (new $Int64(0, g1)));
  .N		f4g2 = $mul64((new $Int64(0, f4)), (new $Int64(0, g2)));
  .m		f4g3 = $mul64((new $Int64(0, f4)), (new $Int64(0, g3)));
  .�		f4g4 = $mul64((new $Int64(0, f4)), (new $Int64(0, g4)));
  .�		f4g5 = $mul64((new $Int64(0, f4)), (new $Int64(0, g5)));
  .�		f4g6_19 = $mul64((new $Int64(0, f4)), (new $Int64(0, g6_19)));
  .�		f4g7_19 = $mul64((new $Int64(0, f4)), (new $Int64(0, g7_19)));
  /		f4g8_19 = $mul64((new $Int64(0, f4)), (new $Int64(0, g8_19)));
  /9		f4g9_19 = $mul64((new $Int64(0, f4)), (new $Int64(0, g9_19)));
  /^		f5g0 = $mul64((new $Int64(0, f5)), (new $Int64(0, g0)));
  /}		f5g1_2 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, g1)));
  /�		f5g2 = $mul64((new $Int64(0, f5)), (new $Int64(0, g2)));
  /�		f5g3_2 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, g3)));
  /�		f5g4 = $mul64((new $Int64(0, f5)), (new $Int64(0, g4)));
  0		f5g5_38 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, g5_19)));
  0(		f5g6_19 = $mul64((new $Int64(0, f5)), (new $Int64(0, g6_19)));
  0M		f5g7_38 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, g7_19)));
  0t		f5g8_19 = $mul64((new $Int64(0, f5)), (new $Int64(0, g8_19)));
  0�		f5g9_38 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, g9_19)));
  0�		f6g0 = $mul64((new $Int64(0, f6)), (new $Int64(0, g0)));
  0�		f6g1 = $mul64((new $Int64(0, f6)), (new $Int64(0, g1)));
  0�		f6g2 = $mul64((new $Int64(0, f6)), (new $Int64(0, g2)));
  1		f6g3 = $mul64((new $Int64(0, f6)), (new $Int64(0, g3)));
  1<		f6g4_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g4_19)));
  1a		f6g5_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g5_19)));
  1�		f6g6_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g6_19)));
  1�		f6g7_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g7_19)));
  1�		f6g8_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g8_19)));
  1�		f6g9_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, g9_19)));
  2		f7g0 = $mul64((new $Int64(0, f7)), (new $Int64(0, g0)));
  29		f7g1_2 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, g1)));
  2\		f7g2 = $mul64((new $Int64(0, f7)), (new $Int64(0, g2)));
  2{		f7g3_38 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, g3_19)));
  2�		f7g4_19 = $mul64((new $Int64(0, f7)), (new $Int64(0, g4_19)));
  2�		f7g5_38 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, g5_19)));
  2�		f7g6_19 = $mul64((new $Int64(0, f7)), (new $Int64(0, g6_19)));
  3		f7g7_38 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, g7_19)));
  3:		f7g8_19 = $mul64((new $Int64(0, f7)), (new $Int64(0, g8_19)));
  3_		f7g9_38 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, g9_19)));
  3�		f8g0 = $mul64((new $Int64(0, f8)), (new $Int64(0, g0)));
  3�		f8g1 = $mul64((new $Int64(0, f8)), (new $Int64(0, g1)));
  3�		f8g2_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g2_19)));
  3�		f8g3_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g3_19)));
  4		f8g4_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g4_19)));
  43		f8g5_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g5_19)));
  4X		f8g6_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g6_19)));
  4}		f8g7_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g7_19)));
  4�		f8g8_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g8_19)));
  4�		f8g9_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, g9_19)));
  4�		f9g0 = $mul64((new $Int64(0, f9)), (new $Int64(0, g0)));
  5		f9g1_38 = $mul64((new $Int64(0, f9_2)), (new $Int64(0, g1_19)));
  52		f9g2_19 = $mul64((new $Int64(0, f9)), (new $Int64(0, g2_19)));
  5W		f9g3_38 = $mul64((new $Int64(0, f9_2)), (new $Int64(0, g3_19)));
  5~		f9g4_19 = $mul64((new $Int64(0, f9)), (new $Int64(0, g4_19)));
  5�		f9g5_38 = $mul64((new $Int64(0, f9_2)), (new $Int64(0, g5_19)));
  5�		f9g6_19 = $mul64((new $Int64(0, f9)), (new $Int64(0, g6_19)));
  5�		f9g7_38 = $mul64((new $Int64(0, f9_2)), (new $Int64(0, g7_19)));
  6		f9g8_19 = $mul64((new $Int64(0, f9)), (new $Int64(0, g8_19)));
  6;		f9g9_38 = $mul64((new $Int64(0, f9_2)), (new $Int64(0, g9_19)));
  6b		h0 = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (x$7 = new $Int64(f0g0.$high + f1g9_38.$high, f0g0.$low + f1g9_38.$low), new $Int64(x$7.$high + f2g8_19.$high, x$7.$low + f2g8_19.$low)), new $Int64(x$6.$high + f3g7_38.$high, x$6.$low + f3g7_38.$low)), new $Int64(x$5.$high + f4g6_19.$high, x$5.$low + f4g6_19.$low)), new $Int64(x$4.$high + f5g5_38.$high, x$4.$low + f5g5_38.$low)), new $Int64(x$3.$high + f6g4_19.$high, x$3.$low + f6g4_19.$low)), new $Int64(x$2.$high + f7g3_38.$high, x$2.$low + f7g3_38.$low)), new $Int64(x$1.$high + f8g2_19.$high, x$1.$low + f8g2_19.$low)), new $Int64(x.$high + f9g1_38.$high, x.$low + f9g1_38.$low));
  6�		h1 = (x$8 = (x$9 = (x$10 = (x$11 = (x$12 = (x$13 = (x$14 = (x$15 = new $Int64(f0g1.$high + f1g0.$high, f0g1.$low + f1g0.$low), new $Int64(x$15.$high + f2g9_19.$high, x$15.$low + f2g9_19.$low)), new $Int64(x$14.$high + f3g8_19.$high, x$14.$low + f3g8_19.$low)), new $Int64(x$13.$high + f4g7_19.$high, x$13.$low + f4g7_19.$low)), new $Int64(x$12.$high + f5g6_19.$high, x$12.$low + f5g6_19.$low)), new $Int64(x$11.$high + f6g5_19.$high, x$11.$low + f6g5_19.$low)), new $Int64(x$10.$high + f7g4_19.$high, x$10.$low + f7g4_19.$low)), new $Int64(x$9.$high + f8g3_19.$high, x$9.$low + f8g3_19.$low)), new $Int64(x$8.$high + f9g2_19.$high, x$8.$low + f9g2_19.$low));
  7+		h2 = (x$16 = (x$17 = (x$18 = (x$19 = (x$20 = (x$21 = (x$22 = (x$23 = new $Int64(f0g2.$high + f1g1_2.$high, f0g2.$low + f1g1_2.$low), new $Int64(x$23.$high + f2g0.$high, x$23.$low + f2g0.$low)), new $Int64(x$22.$high + f3g9_38.$high, x$22.$low + f3g9_38.$low)), new $Int64(x$21.$high + f4g8_19.$high, x$21.$low + f4g8_19.$low)), new $Int64(x$20.$high + f5g7_38.$high, x$20.$low + f5g7_38.$low)), new $Int64(x$19.$high + f6g6_19.$high, x$19.$low + f6g6_19.$low)), new $Int64(x$18.$high + f7g5_38.$high, x$18.$low + f7g5_38.$low)), new $Int64(x$17.$high + f8g4_19.$high, x$17.$low + f8g4_19.$low)), new $Int64(x$16.$high + f9g3_38.$high, x$16.$low + f9g3_38.$low));
  7�		h3 = (x$24 = (x$25 = (x$26 = (x$27 = (x$28 = (x$29 = (x$30 = (x$31 = new $Int64(f0g3.$high + f1g2.$high, f0g3.$low + f1g2.$low), new $Int64(x$31.$high + f2g1.$high, x$31.$low + f2g1.$low)), new $Int64(x$30.$high + f3g0.$high, x$30.$low + f3g0.$low)), new $Int64(x$29.$high + f4g9_19.$high, x$29.$low + f4g9_19.$low)), new $Int64(x$28.$high + f5g8_19.$high, x$28.$low + f5g8_19.$low)), new $Int64(x$27.$high + f6g7_19.$high, x$27.$low + f6g7_19.$low)), new $Int64(x$26.$high + f7g6_19.$high, x$26.$low + f7g6_19.$low)), new $Int64(x$25.$high + f8g5_19.$high, x$25.$low + f8g5_19.$low)), new $Int64(x$24.$high + f9g4_19.$high, x$24.$low + f9g4_19.$low));
  7�		h4 = (x$32 = (x$33 = (x$34 = (x$35 = (x$36 = (x$37 = (x$38 = (x$39 = new $Int64(f0g4.$high + f1g3_2.$high, f0g4.$low + f1g3_2.$low), new $Int64(x$39.$high + f2g2.$high, x$39.$low + f2g2.$low)), new $Int64(x$38.$high + f3g1_2.$high, x$38.$low + f3g1_2.$low)), new $Int64(x$37.$high + f4g0.$high, x$37.$low + f4g0.$low)), new $Int64(x$36.$high + f5g9_38.$high, x$36.$low + f5g9_38.$low)), new $Int64(x$35.$high + f6g8_19.$high, x$35.$low + f6g8_19.$low)), new $Int64(x$34.$high + f7g7_38.$high, x$34.$low + f7g7_38.$low)), new $Int64(x$33.$high + f8g6_19.$high, x$33.$low + f8g6_19.$low)), new $Int64(x$32.$high + f9g5_38.$high, x$32.$low + f9g5_38.$low));
  8H		h5 = (x$40 = (x$41 = (x$42 = (x$43 = (x$44 = (x$45 = (x$46 = (x$47 = new $Int64(f0g5.$high + f1g4.$high, f0g5.$low + f1g4.$low), new $Int64(x$47.$high + f2g3.$high, x$47.$low + f2g3.$low)), new $Int64(x$46.$high + f3g2.$high, x$46.$low + f3g2.$low)), new $Int64(x$45.$high + f4g1.$high, x$45.$low + f4g1.$low)), new $Int64(x$44.$high + f5g0.$high, x$44.$low + f5g0.$low)), new $Int64(x$43.$high + f6g9_19.$high, x$43.$low + f6g9_19.$low)), new $Int64(x$42.$high + f7g8_19.$high, x$42.$low + f7g8_19.$low)), new $Int64(x$41.$high + f8g7_19.$high, x$41.$low + f8g7_19.$low)), new $Int64(x$40.$high + f9g6_19.$high, x$40.$low + f9g6_19.$low));
  8�		h6 = (x$48 = (x$49 = (x$50 = (x$51 = (x$52 = (x$53 = (x$54 = (x$55 = new $Int64(f0g6.$high + f1g5_2.$high, f0g6.$low + f1g5_2.$low), new $Int64(x$55.$high + f2g4.$high, x$55.$low + f2g4.$low)), new $Int64(x$54.$high + f3g3_2.$high, x$54.$low + f3g3_2.$low)), new $Int64(x$53.$high + f4g2.$high, x$53.$low + f4g2.$low)), new $Int64(x$52.$high + f5g1_2.$high, x$52.$low + f5g1_2.$low)), new $Int64(x$51.$high + f6g0.$high, x$51.$low + f6g0.$low)), new $Int64(x$50.$high + f7g9_38.$high, x$50.$low + f7g9_38.$low)), new $Int64(x$49.$high + f8g8_19.$high, x$49.$low + f8g8_19.$low)), new $Int64(x$48.$high + f9g7_38.$high, x$48.$low + f9g7_38.$low));
  8�		h7 = (x$56 = (x$57 = (x$58 = (x$59 = (x$60 = (x$61 = (x$62 = (x$63 = new $Int64(f0g7.$high + f1g6.$high, f0g7.$low + f1g6.$low), new $Int64(x$63.$high + f2g5.$high, x$63.$low + f2g5.$low)), new $Int64(x$62.$high + f3g4.$high, x$62.$low + f3g4.$low)), new $Int64(x$61.$high + f4g3.$high, x$61.$low + f4g3.$low)), new $Int64(x$60.$high + f5g2.$high, x$60.$low + f5g2.$low)), new $Int64(x$59.$high + f6g1.$high, x$59.$low + f6g1.$low)), new $Int64(x$58.$high + f7g0.$high, x$58.$low + f7g0.$low)), new $Int64(x$57.$high + f8g9_19.$high, x$57.$low + f8g9_19.$low)), new $Int64(x$56.$high + f9g8_19.$high, x$56.$low + f9g8_19.$low));
  9J		h8 = (x$64 = (x$65 = (x$66 = (x$67 = (x$68 = (x$69 = (x$70 = (x$71 = new $Int64(f0g8.$high + f1g7_2.$high, f0g8.$low + f1g7_2.$low), new $Int64(x$71.$high + f2g6.$high, x$71.$low + f2g6.$low)), new $Int64(x$70.$high + f3g5_2.$high, x$70.$low + f3g5_2.$low)), new $Int64(x$69.$high + f4g4.$high, x$69.$low + f4g4.$low)), new $Int64(x$68.$high + f5g3_2.$high, x$68.$low + f5g3_2.$low)), new $Int64(x$67.$high + f6g2.$high, x$67.$low + f6g2.$low)), new $Int64(x$66.$high + f7g1_2.$high, x$66.$low + f7g1_2.$low)), new $Int64(x$65.$high + f8g0.$high, x$65.$low + f8g0.$low)), new $Int64(x$64.$high + f9g9_38.$high, x$64.$low + f9g9_38.$low));
  9�		h9 = (x$72 = (x$73 = (x$74 = (x$75 = (x$76 = (x$77 = (x$78 = (x$79 = new $Int64(f0g9.$high + f1g8.$high, f0g9.$low + f1g8.$low), new $Int64(x$79.$high + f2g7.$high, x$79.$low + f2g7.$low)), new $Int64(x$78.$high + f3g6.$high, x$78.$low + f3g6.$low)), new $Int64(x$77.$high + f4g5.$high, x$77.$low + f4g5.$low)), new $Int64(x$76.$high + f5g4.$high, x$76.$low + f5g4.$low)), new $Int64(x$75.$high + f6g3.$high, x$75.$low + f6g3.$low)), new $Int64(x$74.$high + f7g2.$high, x$74.$low + f7g2.$low)), new $Int64(x$73.$high + f8g1.$high, x$73.$low + f8g1.$low)), new $Int64(x$72.$high + f9g0.$high, x$72.$low + f9g0.$low));
  9�		carry = arrayType$1.zero();
  ;		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  ;'		h1 = (x$80 = carry[0], new $Int64(h1.$high + x$80.$high, h1.$low + x$80.$low));
  ;7		h0 = (x$81 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$81.$high, h0.$low - x$81.$low));
  ;M		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  ;p		h5 = (x$82 = carry[4], new $Int64(h5.$high + x$82.$high, h5.$low + x$82.$low));
  ;�		h4 = (x$83 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$83.$high, h4.$low - x$83.$low));
  ;�		carry[1] = $shiftRightInt64((new $Int64(h1.$high + 0, h1.$low + 16777216)), 25);
  <		h2 = (x$84 = carry[1], new $Int64(h2.$high + x$84.$high, h2.$low + x$84.$low));
  <		h1 = (x$85 = $shiftLeft64(carry[1], 25), new $Int64(h1.$high - x$85.$high, h1.$low - x$85.$low));
  <.		carry[5] = $shiftRightInt64((new $Int64(h5.$high + 0, h5.$low + 16777216)), 25);
  <Q		h6 = (x$86 = carry[5], new $Int64(h6.$high + x$86.$high, h6.$low + x$86.$low));
  <a		h5 = (x$87 = $shiftLeft64(carry[5], 25), new $Int64(h5.$high - x$87.$high, h5.$low - x$87.$low));
  = 		carry[2] = $shiftRightInt64((new $Int64(h2.$high + 0, h2.$low + 33554432)), 26);
  =#		h3 = (x$88 = carry[2], new $Int64(h3.$high + x$88.$high, h3.$low + x$88.$low));
  =3		h2 = (x$89 = $shiftLeft64(carry[2], 26), new $Int64(h2.$high - x$89.$high, h2.$low - x$89.$low));
  =I		carry[6] = $shiftRightInt64((new $Int64(h6.$high + 0, h6.$low + 33554432)), 26);
  =l		h7 = (x$90 = carry[6], new $Int64(h7.$high + x$90.$high, h7.$low + x$90.$low));
  =|		h6 = (x$91 = $shiftLeft64(carry[6], 26), new $Int64(h6.$high - x$91.$high, h6.$low - x$91.$low));
  >/		carry[3] = $shiftRightInt64((new $Int64(h3.$high + 0, h3.$low + 16777216)), 25);
  >R		h4 = (x$92 = carry[3], new $Int64(h4.$high + x$92.$high, h4.$low + x$92.$low));
  >b		h3 = (x$93 = $shiftLeft64(carry[3], 25), new $Int64(h3.$high - x$93.$high, h3.$low - x$93.$low));
  >x		carry[7] = $shiftRightInt64((new $Int64(h7.$high + 0, h7.$low + 16777216)), 25);
  >�		h8 = (x$94 = carry[7], new $Int64(h8.$high + x$94.$high, h8.$low + x$94.$low));
  >�		h7 = (x$95 = $shiftLeft64(carry[7], 25), new $Int64(h7.$high - x$95.$high, h7.$low - x$95.$low));
  ?^		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  ?�		h5 = (x$96 = carry[4], new $Int64(h5.$high + x$96.$high, h5.$low + x$96.$low));
  ?�		h4 = (x$97 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$97.$high, h4.$low - x$97.$low));
  ?�		carry[8] = $shiftRightInt64((new $Int64(h8.$high + 0, h8.$low + 33554432)), 26);
  ?�		h9 = (x$98 = carry[8], new $Int64(h9.$high + x$98.$high, h9.$low + x$98.$low));
  ?�		h8 = (x$99 = $shiftLeft64(carry[8], 26), new $Int64(h8.$high - x$99.$high, h8.$low - x$99.$low));
  @�		carry[9] = $shiftRightInt64((new $Int64(h9.$high + 0, h9.$low + 16777216)), 25);
  @�		h0 = (x$100 = $mul64(carry[9], new $Int64(0, 19)), new $Int64(h0.$high + x$100.$high, h0.$low + x$100.$low));
  @�		h9 = (x$101 = $shiftLeft64(carry[9], 25), new $Int64(h9.$high - x$101.$high, h9.$low - x$101.$low));
  A)		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  AL		h1 = (x$102 = carry[0], new $Int64(h1.$high + x$102.$high, h1.$low + x$102.$low));
  A\		h0 = (x$103 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$103.$high, h0.$low - x$103.$low));
  A�		h.nilCheck, h[0] = (((h0.$low + ((h0.$high >> 31) * 4294967296)) >> 0));
  A�		h.nilCheck, h[1] = (((h1.$low + ((h1.$high >> 31) * 4294967296)) >> 0));
  A�		h.nilCheck, h[2] = (((h2.$low + ((h2.$high >> 31) * 4294967296)) >> 0));
  A�		h.nilCheck, h[3] = (((h3.$low + ((h3.$high >> 31) * 4294967296)) >> 0));
  B			h.nilCheck, h[4] = (((h4.$low + ((h4.$high >> 31) * 4294967296)) >> 0));
  B		h.nilCheck, h[5] = (((h5.$low + ((h5.$high >> 31) * 4294967296)) >> 0));
  B-		h.nilCheck, h[6] = (((h6.$low + ((h6.$high >> 31) * 4294967296)) >> 0));
  B?		h.nilCheck, h[7] = (((h7.$low + ((h7.$high >> 31) * 4294967296)) >> 0));
  BQ		h.nilCheck, h[8] = (((h8.$low + ((h8.$high >> 31) * 4294967296)) >> 0));
  Bc		h.nilCheck, h[9] = (((h9.$low + ((h9.$high >> 31) * 4294967296)) >> 0));
    	};
feMul1vendor/golang.org/x/crypto/curve25519.arrayType$1+vendor/golang.org/x/crypto/curve25519.feMul .vendor/golang.org/x/crypto/curve25519.feSquare%vendor/golang.org/x/crypto/curve25519feSquare feSquare�2�	feSquare = function(h, f) {
		var carry, f, f0, f0_2, f0f0, f0f1_2, f0f2_2, f0f3_2, f0f4_2, f0f5_2, f0f6_2, f0f7_2, f0f8_2, f0f9_2, f1, f1_2, f1f1_2, f1f2_2, f1f3_4, f1f4_2, f1f5_4, f1f6_2, f1f7_4, f1f8_2, f1f9_76, f2, f2_2, f2f2, f2f3_2, f2f4_2, f2f5_2, f2f6_2, f2f7_2, f2f8_38, f2f9_38, f3, f3_2, f3f3_2, f3f4_2, f3f5_4, f3f6_2, f3f7_76, f3f8_38, f3f9_76, f4, f4_2, f4f4, f4f5_2, f4f6_38, f4f7_38, f4f8_38, f4f9_38, f5, f5_2, f5_38, f5f5_38, f5f6_38, f5f7_76, f5f8_38, f5f9_76, f6, f6_19, f6_2, f6f6_19, f6f7_38, f6f8_38, f6f9_38, f7, f7_2, f7_38, f7f7_38, f7f8_38, f7f9_76, f8, f8_19, f8f8_19, f8f9_38, f9, f9_38, f9f9_38, h, h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$5, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$57, x$58, x$6, x$7, x$8, x$9;
  Cy		f0 = f[0];
  C�		f1 = f[1];
  C�		f2 = f[2];
  C�		f3 = f[3];
  C�		f4 = f[4];
  C�		f5 = f[5];
  C�		f6 = f[6];
  C�		f7 = f[7];
  C�		f8 = f[8];
  C�		f9 = f[9];
  C�		f0_2 = $imul(2, f0);
  D		f1_2 = $imul(2, f1);
  D		f2_2 = $imul(2, f2);
  D!		f3_2 = $imul(2, f3);
  D1		f4_2 = $imul(2, f4);
  DA		f5_2 = $imul(2, f5);
  DQ		f6_2 = $imul(2, f6);
  Da		f7_2 = $imul(2, f7);
  Dq		f5_38 = $imul(38, f5);
  D�		f6_19 = $imul(19, f6);
  D�		f7_38 = $imul(38, f7);
  D�		f8_19 = $imul(19, f8);
  D�		f9_38 = $imul(38, f9);
  E		f0f0 = $mul64((new $Int64(0, f0)), (new $Int64(0, f0)));
  E+		f0f1_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f1)));
  EN		f0f2_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f2)));
  Eq		f0f3_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f3)));
  E�		f0f4_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f4)));
  E�		f0f5_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f5)));
  E�		f0f6_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f6)));
  E�		f0f7_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f7)));
  F 		f0f8_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f8)));
  FC		f0f9_2 = $mul64((new $Int64(0, f0_2)), (new $Int64(0, f9)));
  Ff		f1f1_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f1)));
  F�		f1f2_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f2)));
  F�		f1f3_4 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f3_2)));
  F�		f1f4_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f4)));
  F�		f1f5_4 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f5_2)));
  G		f1f6_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f6)));
  G<		f1f7_4 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f7_2)));
  Ga		f1f8_2 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f8)));
  G�		f1f9_76 = $mul64((new $Int64(0, f1_2)), (new $Int64(0, f9_38)));
  G�		f2f2 = $mul64((new $Int64(0, f2)), (new $Int64(0, f2)));
  G�		f2f3_2 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f3)));
  G�		f2f4_2 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f4)));
  H		f2f5_2 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f5)));
  H3		f2f6_2 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f6)));
  HV		f2f7_2 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f7)));
  Hy		f2f8_38 = $mul64((new $Int64(0, f2_2)), (new $Int64(0, f8_19)));
  H�		f2f9_38 = $mul64((new $Int64(0, f2)), (new $Int64(0, f9_38)));
  H�		f3f3_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f3)));
  H�		f3f4_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f4)));
  I		f3f5_4 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f5_2)));
  I0		f3f6_2 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f6)));
  IS		f3f7_76 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f7_38)));
  Iz		f3f8_38 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f8_19)));
  I�		f3f9_76 = $mul64((new $Int64(0, f3_2)), (new $Int64(0, f9_38)));
  I�		f4f4 = $mul64((new $Int64(0, f4)), (new $Int64(0, f4)));
  I�		f4f5_2 = $mul64((new $Int64(0, f4_2)), (new $Int64(0, f5)));
  J
		f4f6_38 = $mul64((new $Int64(0, f4_2)), (new $Int64(0, f6_19)));
  J1		f4f7_38 = $mul64((new $Int64(0, f4)), (new $Int64(0, f7_38)));
  JV		f4f8_38 = $mul64((new $Int64(0, f4_2)), (new $Int64(0, f8_19)));
  J}		f4f9_38 = $mul64((new $Int64(0, f4)), (new $Int64(0, f9_38)));
  J�		f5f5_38 = $mul64((new $Int64(0, f5)), (new $Int64(0, f5_38)));
  J�		f5f6_38 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, f6_19)));
  J�		f5f7_76 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, f7_38)));
  K		f5f8_38 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, f8_19)));
  K<		f5f9_76 = $mul64((new $Int64(0, f5_2)), (new $Int64(0, f9_38)));
  Kc		f6f6_19 = $mul64((new $Int64(0, f6)), (new $Int64(0, f6_19)));
  K�		f6f7_38 = $mul64((new $Int64(0, f6)), (new $Int64(0, f7_38)));
  K�		f6f8_38 = $mul64((new $Int64(0, f6_2)), (new $Int64(0, f8_19)));
  K�		f6f9_38 = $mul64((new $Int64(0, f6)), (new $Int64(0, f9_38)));
  K�		f7f7_38 = $mul64((new $Int64(0, f7)), (new $Int64(0, f7_38)));
  L		f7f8_38 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, f8_19)));
  LE		f7f9_76 = $mul64((new $Int64(0, f7_2)), (new $Int64(0, f9_38)));
  Ll		f8f8_19 = $mul64((new $Int64(0, f8)), (new $Int64(0, f8_19)));
  L�		f8f9_38 = $mul64((new $Int64(0, f8)), (new $Int64(0, f9_38)));
  L�		f9f9_38 = $mul64((new $Int64(0, f9)), (new $Int64(0, f9_38)));
  L�		h0 = (x = (x$1 = (x$2 = (x$3 = new $Int64(f0f0.$high + f1f9_76.$high, f0f0.$low + f1f9_76.$low), new $Int64(x$3.$high + f2f8_38.$high, x$3.$low + f2f8_38.$low)), new $Int64(x$2.$high + f3f7_76.$high, x$2.$low + f3f7_76.$low)), new $Int64(x$1.$high + f4f6_38.$high, x$1.$low + f4f6_38.$low)), new $Int64(x.$high + f5f5_38.$high, x.$low + f5f5_38.$low));
  M		h1 = (x$4 = (x$5 = (x$6 = new $Int64(f0f1_2.$high + f2f9_38.$high, f0f1_2.$low + f2f9_38.$low), new $Int64(x$6.$high + f3f8_38.$high, x$6.$low + f3f8_38.$low)), new $Int64(x$5.$high + f4f7_38.$high, x$5.$low + f4f7_38.$low)), new $Int64(x$4.$high + f5f6_38.$high, x$4.$low + f5f6_38.$low));
  MO		h2 = (x$7 = (x$8 = (x$9 = (x$10 = new $Int64(f0f2_2.$high + f1f1_2.$high, f0f2_2.$low + f1f1_2.$low), new $Int64(x$10.$high + f3f9_76.$high, x$10.$low + f3f9_76.$low)), new $Int64(x$9.$high + f4f8_38.$high, x$9.$low + f4f8_38.$low)), new $Int64(x$8.$high + f5f7_76.$high, x$8.$low + f5f7_76.$low)), new $Int64(x$7.$high + f6f6_19.$high, x$7.$low + f6f6_19.$low));
  M�		h3 = (x$11 = (x$12 = (x$13 = new $Int64(f0f3_2.$high + f1f2_2.$high, f0f3_2.$low + f1f2_2.$low), new $Int64(x$13.$high + f4f9_38.$high, x$13.$low + f4f9_38.$low)), new $Int64(x$12.$high + f5f8_38.$high, x$12.$low + f5f8_38.$low)), new $Int64(x$11.$high + f6f7_38.$high, x$11.$low + f6f7_38.$low));
  M�		h4 = (x$14 = (x$15 = (x$16 = (x$17 = new $Int64(f0f4_2.$high + f1f3_4.$high, f0f4_2.$low + f1f3_4.$low), new $Int64(x$17.$high + f2f2.$high, x$17.$low + f2f2.$low)), new $Int64(x$16.$high + f5f9_76.$high, x$16.$low + f5f9_76.$low)), new $Int64(x$15.$high + f6f8_38.$high, x$15.$low + f6f8_38.$low)), new $Int64(x$14.$high + f7f7_38.$high, x$14.$low + f7f7_38.$low));
  M�		h5 = (x$18 = (x$19 = (x$20 = new $Int64(f0f5_2.$high + f1f4_2.$high, f0f5_2.$low + f1f4_2.$low), new $Int64(x$20.$high + f2f3_2.$high, x$20.$low + f2f3_2.$low)), new $Int64(x$19.$high + f6f9_38.$high, x$19.$low + f6f9_38.$low)), new $Int64(x$18.$high + f7f8_38.$high, x$18.$low + f7f8_38.$low));
  N3		h6 = (x$21 = (x$22 = (x$23 = (x$24 = new $Int64(f0f6_2.$high + f1f5_4.$high, f0f6_2.$low + f1f5_4.$low), new $Int64(x$24.$high + f2f4_2.$high, x$24.$low + f2f4_2.$low)), new $Int64(x$23.$high + f3f3_2.$high, x$23.$low + f3f3_2.$low)), new $Int64(x$22.$high + f7f9_76.$high, x$22.$low + f7f9_76.$low)), new $Int64(x$21.$high + f8f8_19.$high, x$21.$low + f8f8_19.$low));
  Np		h7 = (x$25 = (x$26 = (x$27 = new $Int64(f0f7_2.$high + f1f6_2.$high, f0f7_2.$low + f1f6_2.$low), new $Int64(x$27.$high + f2f5_2.$high, x$27.$low + f2f5_2.$low)), new $Int64(x$26.$high + f3f4_2.$high, x$26.$low + f3f4_2.$low)), new $Int64(x$25.$high + f8f9_38.$high, x$25.$low + f8f9_38.$low));
  N�		h8 = (x$28 = (x$29 = (x$30 = (x$31 = new $Int64(f0f8_2.$high + f1f7_4.$high, f0f8_2.$low + f1f7_4.$low), new $Int64(x$31.$high + f2f6_2.$high, x$31.$low + f2f6_2.$low)), new $Int64(x$30.$high + f3f5_4.$high, x$30.$low + f3f5_4.$low)), new $Int64(x$29.$high + f4f4.$high, x$29.$low + f4f4.$low)), new $Int64(x$28.$high + f9f9_38.$high, x$28.$low + f9f9_38.$low));
  N�		h9 = (x$32 = (x$33 = (x$34 = new $Int64(f0f9_2.$high + f1f8_2.$high, f0f9_2.$low + f1f8_2.$low), new $Int64(x$34.$high + f2f7_2.$high, x$34.$low + f2f7_2.$low)), new $Int64(x$33.$high + f3f6_2.$high, x$33.$low + f3f6_2.$low)), new $Int64(x$32.$high + f4f5_2.$high, x$32.$low + f4f5_2.$low));
  O		carry = arrayType$1.zero();
  O%		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  OH		h1 = (x$35 = carry[0], new $Int64(h1.$high + x$35.$high, h1.$low + x$35.$low));
  OX		h0 = (x$36 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$36.$high, h0.$low - x$36.$low));
  On		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  O�		h5 = (x$37 = carry[4], new $Int64(h5.$high + x$37.$high, h5.$low + x$37.$low));
  O�		h4 = (x$38 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$38.$high, h4.$low - x$38.$low));
  O�		carry[1] = $shiftRightInt64((new $Int64(h1.$high + 0, h1.$low + 16777216)), 25);
  O�		h2 = (x$39 = carry[1], new $Int64(h2.$high + x$39.$high, h2.$low + x$39.$low));
  O�		h1 = (x$40 = $shiftLeft64(carry[1], 25), new $Int64(h1.$high - x$40.$high, h1.$low - x$40.$low));
  P		carry[5] = $shiftRightInt64((new $Int64(h5.$high + 0, h5.$low + 16777216)), 25);
  P$		h6 = (x$41 = carry[5], new $Int64(h6.$high + x$41.$high, h6.$low + x$41.$low));
  P4		h5 = (x$42 = $shiftLeft64(carry[5], 25), new $Int64(h5.$high - x$42.$high, h5.$low - x$42.$low));
  PK		carry[2] = $shiftRightInt64((new $Int64(h2.$high + 0, h2.$low + 33554432)), 26);
  Pn		h3 = (x$43 = carry[2], new $Int64(h3.$high + x$43.$high, h3.$low + x$43.$low));
  P~		h2 = (x$44 = $shiftLeft64(carry[2], 26), new $Int64(h2.$high - x$44.$high, h2.$low - x$44.$low));
  P�		carry[6] = $shiftRightInt64((new $Int64(h6.$high + 0, h6.$low + 33554432)), 26);
  P�		h7 = (x$45 = carry[6], new $Int64(h7.$high + x$45.$high, h7.$low + x$45.$low));
  P�		h6 = (x$46 = $shiftLeft64(carry[6], 26), new $Int64(h6.$high - x$46.$high, h6.$low - x$46.$low));
  P�		carry[3] = $shiftRightInt64((new $Int64(h3.$high + 0, h3.$low + 16777216)), 25);
  Q		h4 = (x$47 = carry[3], new $Int64(h4.$high + x$47.$high, h4.$low + x$47.$low));
  Q		h3 = (x$48 = $shiftLeft64(carry[3], 25), new $Int64(h3.$high - x$48.$high, h3.$low - x$48.$low));
  Q'		carry[7] = $shiftRightInt64((new $Int64(h7.$high + 0, h7.$low + 16777216)), 25);
  QJ		h8 = (x$49 = carry[7], new $Int64(h8.$high + x$49.$high, h8.$low + x$49.$low));
  QZ		h7 = (x$50 = $shiftLeft64(carry[7], 25), new $Int64(h7.$high - x$50.$high, h7.$low - x$50.$low));
  Qq		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  Q�		h5 = (x$51 = carry[4], new $Int64(h5.$high + x$51.$high, h5.$low + x$51.$low));
  Q�		h4 = (x$52 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$52.$high, h4.$low - x$52.$low));
  Q�		carry[8] = $shiftRightInt64((new $Int64(h8.$high + 0, h8.$low + 33554432)), 26);
  Q�		h9 = (x$53 = carry[8], new $Int64(h9.$high + x$53.$high, h9.$low + x$53.$low));
  Q�		h8 = (x$54 = $shiftLeft64(carry[8], 26), new $Int64(h8.$high - x$54.$high, h8.$low - x$54.$low));
  R		carry[9] = $shiftRightInt64((new $Int64(h9.$high + 0, h9.$low + 16777216)), 25);
  R'		h0 = (x$55 = $mul64(carry[9], new $Int64(0, 19)), new $Int64(h0.$high + x$55.$high, h0.$low + x$55.$low));
  R<		h9 = (x$56 = $shiftLeft64(carry[9], 25), new $Int64(h9.$high - x$56.$high, h9.$low - x$56.$low));
  RS		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  Rv		h1 = (x$57 = carry[0], new $Int64(h1.$high + x$57.$high, h1.$low + x$57.$low));
  R�		h0 = (x$58 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$58.$high, h0.$low - x$58.$low));
  R�		h.nilCheck, h[0] = (((h0.$low + ((h0.$high >> 31) * 4294967296)) >> 0));
  R�		h.nilCheck, h[1] = (((h1.$low + ((h1.$high >> 31) * 4294967296)) >> 0));
  R�		h.nilCheck, h[2] = (((h2.$low + ((h2.$high >> 31) * 4294967296)) >> 0));
  R�		h.nilCheck, h[3] = (((h3.$low + ((h3.$high >> 31) * 4294967296)) >> 0));
  R�		h.nilCheck, h[4] = (((h4.$low + ((h4.$high >> 31) * 4294967296)) >> 0));
  R�		h.nilCheck, h[5] = (((h5.$low + ((h5.$high >> 31) * 4294967296)) >> 0));
  S			h.nilCheck, h[6] = (((h6.$low + ((h6.$high >> 31) * 4294967296)) >> 0));
  S		h.nilCheck, h[7] = (((h7.$low + ((h7.$high >> 31) * 4294967296)) >> 0));
  S-		h.nilCheck, h[8] = (((h8.$low + ((h8.$high >> 31) * 4294967296)) >> 0));
  S?		h.nilCheck, h[9] = (((h9.$low + ((h9.$high >> 31) * 4294967296)) >> 0));
    	};
feSquare1vendor/golang.org/x/crypto/curve25519.arrayType$1.vendor/golang.org/x/crypto/curve25519.feSquare 1vendor/golang.org/x/crypto/curve25519.feMul121666%vendor/golang.org/x/crypto/curve25519feMul121666 feMul121666��	feMul121666 = function(h, f) {
		var carry, f, h, h0, h1, h2, h3, h4, h5, h6, h7, h8, h9, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  Tb		h0 = $mul64((new $Int64(0, f[0])), new $Int64(0, 121666));
  T~		h1 = $mul64((new $Int64(0, f[1])), new $Int64(0, 121666));
  T�		h2 = $mul64((new $Int64(0, f[2])), new $Int64(0, 121666));
  T�		h3 = $mul64((new $Int64(0, f[3])), new $Int64(0, 121666));
  T�		h4 = $mul64((new $Int64(0, f[4])), new $Int64(0, 121666));
  T�		h5 = $mul64((new $Int64(0, f[5])), new $Int64(0, 121666));
  U
		h6 = $mul64((new $Int64(0, f[6])), new $Int64(0, 121666));
  U&		h7 = $mul64((new $Int64(0, f[7])), new $Int64(0, 121666));
  UB		h8 = $mul64((new $Int64(0, f[8])), new $Int64(0, 121666));
  U^		h9 = $mul64((new $Int64(0, f[9])), new $Int64(0, 121666));
  U~		carry = arrayType$1.zero();
  U�		carry[9] = $shiftRightInt64((new $Int64(h9.$high + 0, h9.$low + 16777216)), 25);
  U�		h0 = (x = $mul64(carry[9], new $Int64(0, 19)), new $Int64(h0.$high + x.$high, h0.$low + x.$low));
  U�		h9 = (x$1 = $shiftLeft64(carry[9], 25), new $Int64(h9.$high - x$1.$high, h9.$low - x$1.$low));
  U�		carry[1] = $shiftRightInt64((new $Int64(h1.$high + 0, h1.$low + 16777216)), 25);
  V		h2 = (x$2 = carry[1], new $Int64(h2.$high + x$2.$high, h2.$low + x$2.$low));
  V		h1 = (x$3 = $shiftLeft64(carry[1], 25), new $Int64(h1.$high - x$3.$high, h1.$low - x$3.$low));
  V'		carry[3] = $shiftRightInt64((new $Int64(h3.$high + 0, h3.$low + 16777216)), 25);
  VJ		h4 = (x$4 = carry[3], new $Int64(h4.$high + x$4.$high, h4.$low + x$4.$low));
  VZ		h3 = (x$5 = $shiftLeft64(carry[3], 25), new $Int64(h3.$high - x$5.$high, h3.$low - x$5.$low));
  Vp		carry[5] = $shiftRightInt64((new $Int64(h5.$high + 0, h5.$low + 16777216)), 25);
  V�		h6 = (x$6 = carry[5], new $Int64(h6.$high + x$6.$high, h6.$low + x$6.$low));
  V�		h5 = (x$7 = $shiftLeft64(carry[5], 25), new $Int64(h5.$high - x$7.$high, h5.$low - x$7.$low));
  V�		carry[7] = $shiftRightInt64((new $Int64(h7.$high + 0, h7.$low + 16777216)), 25);
  V�		h8 = (x$8 = carry[7], new $Int64(h8.$high + x$8.$high, h8.$low + x$8.$low));
  V�		h7 = (x$9 = $shiftLeft64(carry[7], 25), new $Int64(h7.$high - x$9.$high, h7.$low - x$9.$low));
  W		carry[0] = $shiftRightInt64((new $Int64(h0.$high + 0, h0.$low + 33554432)), 26);
  W&		h1 = (x$10 = carry[0], new $Int64(h1.$high + x$10.$high, h1.$low + x$10.$low));
  W6		h0 = (x$11 = $shiftLeft64(carry[0], 26), new $Int64(h0.$high - x$11.$high, h0.$low - x$11.$low));
  WL		carry[2] = $shiftRightInt64((new $Int64(h2.$high + 0, h2.$low + 33554432)), 26);
  Wo		h3 = (x$12 = carry[2], new $Int64(h3.$high + x$12.$high, h3.$low + x$12.$low));
  W		h2 = (x$13 = $shiftLeft64(carry[2], 26), new $Int64(h2.$high - x$13.$high, h2.$low - x$13.$low));
  W�		carry[4] = $shiftRightInt64((new $Int64(h4.$high + 0, h4.$low + 33554432)), 26);
  W�		h5 = (x$14 = carry[4], new $Int64(h5.$high + x$14.$high, h5.$low + x$14.$low));
  W�		h4 = (x$15 = $shiftLeft64(carry[4], 26), new $Int64(h4.$high - x$15.$high, h4.$low - x$15.$low));
  W�		carry[6] = $shiftRightInt64((new $Int64(h6.$high + 0, h6.$low + 33554432)), 26);
  X		h7 = (x$16 = carry[6], new $Int64(h7.$high + x$16.$high, h7.$low + x$16.$low));
  X		h6 = (x$17 = $shiftLeft64(carry[6], 26), new $Int64(h6.$high - x$17.$high, h6.$low - x$17.$low));
  X'		carry[8] = $shiftRightInt64((new $Int64(h8.$high + 0, h8.$low + 33554432)), 26);
  XJ		h9 = (x$18 = carry[8], new $Int64(h9.$high + x$18.$high, h9.$low + x$18.$low));
  XZ		h8 = (x$19 = $shiftLeft64(carry[8], 26), new $Int64(h8.$high - x$19.$high, h8.$low - x$19.$low));
  Xq		h.nilCheck, h[0] = (((h0.$low + ((h0.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[1] = (((h1.$low + ((h1.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[2] = (((h2.$low + ((h2.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[3] = (((h3.$low + ((h3.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[4] = (((h4.$low + ((h4.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[5] = (((h5.$low + ((h5.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[6] = (((h6.$low + ((h6.$high >> 31) * 4294967296)) >> 0));
  X�		h.nilCheck, h[7] = (((h7.$low + ((h7.$high >> 31) * 4294967296)) >> 0));
  Y		h.nilCheck, h[8] = (((h8.$low + ((h8.$high >> 31) * 4294967296)) >> 0));
  Y		h.nilCheck, h[9] = (((h9.$low + ((h9.$high >> 31) * 4294967296)) >> 0));
    	};
feMul1216661vendor/golang.org/x/crypto/curve25519.arrayType$11vendor/golang.org/x/crypto/curve25519.feMul121666 .vendor/golang.org/x/crypto/curve25519.feInvert%vendor/golang.org/x/crypto/curve25519feInvert feInvert��	feInvert = function(out, z) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, i, out, t0, t1, t2, t3, z;
  Yo		_tmp = arrayType$2.zero();
		_tmp$1 = arrayType$2.zero();
		_tmp$2 = arrayType$2.zero();
		_tmp$3 = arrayType$2.zero();
		t0 = $clone(_tmp, fieldElement);
		t1 = $clone(_tmp$1, fieldElement);
		t2 = $clone(_tmp$2, fieldElement);
		t3 = $clone(_tmp$3, fieldElement);
  Y�		i = 0;
  Y�		feSquare(t0, z);
  Y�		i = 1;
		while (true) {
			if (!(i < 1)) { break; }
  Y�			feSquare(t0, t0);
  Y�			i = i + (1) >> 0;
    		}
  Y�		feSquare(t1, t0);
  Y�		i = 1;
		while (true) {
			if (!(i < 2)) { break; }
  Z				feSquare(t1, t1);
  Z			i = i + (1) >> 0;
    		}
  Z 		feMul(t1, z, t1);
  Z4		feMul(t0, t0, t1);
  ZJ		feSquare(t2, t0);
  Zb		i = 1;
		while (true) {
			if (!(i < 1)) { break; }
  Zx			feSquare(t2, t2);
  Zp			i = i + (1) >> 0;
    		}
  Z�		feMul(t1, t1, t2);
  Z�		feSquare(t2, t1);
  Z�		i = 1;
		while (true) {
			if (!(i < 5)) { break; }
  Z�			feSquare(t2, t2);
  Z�			i = i + (1) >> 0;
    		}
  Z�		feMul(t1, t2, t1);
  [ 		feSquare(t2, t1);
  [		i = 1;
		while (true) {
			if (!(i < 10)) { break; }
  [/			feSquare(t2, t2);
  ['			i = i + (1) >> 0;
    		}
  [F		feMul(t2, t2, t1);
  [\		feSquare(t3, t2);
  [t		i = 1;
		while (true) {
			if (!(i < 20)) { break; }
  [�			feSquare(t3, t3);
  [�			i = i + (1) >> 0;
    		}
  [�		feMul(t2, t3, t2);
  [�		feSquare(t2, t2);
  [�		i = 1;
		while (true) {
			if (!(i < 10)) { break; }
  [�			feSquare(t2, t2);
  [�			i = i + (1) >> 0;
    		}
  [�		feMul(t1, t2, t1);
  \		feSquare(t2, t1);
  \,		i = 1;
		while (true) {
			if (!(i < 50)) { break; }
  \C			feSquare(t2, t2);
  \;			i = i + (1) >> 0;
    		}
  \Z		feMul(t2, t2, t1);
  \p		feSquare(t3, t2);
  \�		i = 1;
		while (true) {
			if (!(i < 100)) { break; }
  \�			feSquare(t3, t3);
  \�			i = i + (1) >> 0;
    		}
  \�		feMul(t2, t3, t2);
  \�		feSquare(t2, t2);
  \�		i = 1;
		while (true) {
			if (!(i < 50)) { break; }
  \�			feSquare(t2, t2);
  \�			i = i + (1) >> 0;
    		}
  ]		feMul(t1, t2, t1);
  ])		feSquare(t1, t1);
  ]A		i = 1;
		while (true) {
			if (!(i < 5)) { break; }
  ]W			feSquare(t1, t1);
  ]O			i = i + (1) >> 0;
    		}
  ]n		feMul(out, t1, t0);
    	};
feInvert1vendor/golang.org/x/crypto/curve25519.arrayType$2.vendor/golang.org/x/crypto/curve25519.feInvert+vendor/golang.org/x/crypto/curve25519.feMul.vendor/golang.org/x/crypto/curve25519.feSquare2vendor/golang.org/x/crypto/curve25519.fieldElement 7vendor/golang.org/x/crypto/curve25519.scalarMultGeneric%vendor/golang.org/x/crypto/curve25519scalarMultGeneric scalarMultGeneric��	scalarMultGeneric = function(out, in$1, base) {
		var _q, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, b, base, e, in$1, out, pos, swap, tmp0, tmp1, x, x1, x2, x3, y, z2, z3;
  ]�		e = arrayType.zero();
  ]�		$copySlice(new sliceType(e), new sliceType(in$1));
  ]�		e[0] = ((e[0] & (248)) >>> 0);
  ]�		e[31] = ((e[31] & (127)) >>> 0);
  ]�		e[31] = ((e[31] | (64)) >>> 0);
  ^
		_tmp = arrayType$2.zero();
		_tmp$1 = arrayType$2.zero();
		_tmp$2 = arrayType$2.zero();
		_tmp$3 = arrayType$2.zero();
		_tmp$4 = arrayType$2.zero();
		_tmp$5 = arrayType$2.zero();
		_tmp$6 = arrayType$2.zero();
		x1 = $clone(_tmp, fieldElement);
		x2 = $clone(_tmp$1, fieldElement);
		z2 = $clone(_tmp$2, fieldElement);
		x3 = $clone(_tmp$3, fieldElement);
		z3 = $clone(_tmp$4, fieldElement);
		tmp0 = $clone(_tmp$5, fieldElement);
		tmp1 = $clone(_tmp$6, fieldElement);
  ^7		feFromBytes(x1, base);
  ^O		feOne(x2);
  ^[		feCopy(x3, x1);
  ^m		feOne(z3);
  ^z		swap = 0;
  ^�		pos = 254;
		while (true) {
			if (!(pos >= 0)) { break; }
  ^�			b = (y = (((pos & 7) >>> 0)), y < 32 ? ((x = (_q = pos / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x < 0 || x >= e.length) ? ($throwRuntimeError("index out of range"), undefined) : e[x])) >>> y) : 0) << 24 >>> 24;
  ^�			b = (b & (1)) >>> 0;
  ^�			swap = (swap ^ (((b >> 0)))) >> 0;
  ^�			feCSwap(x2, x3, swap);
  _			feCSwap(z2, z3, swap);
  _			swap = ((b >> 0));
  _2			feSub(tmp0, x3, z3);
  _K			feSub(tmp1, x2, z2);
  _d			feAdd(x2, x2, z2);
  _{			feAdd(z2, x3, z3);
  _�			feMul(z3, tmp0, x2);
  _�			feMul(z2, z2, tmp1);
  _�			feSquare(tmp0, tmp1);
  _�			feSquare(tmp1, x2);
  _�			feAdd(x3, z3, z2);
  `			feSub(z2, z3, z2);
  `"			feMul(x2, tmp1, tmp0);
  `=			feSub(tmp1, tmp1, tmp0);
  `Z			feSquare(z2, z2);
  `o			feMul121666(z3, tmp1);
  `�			feSquare(x3, x3);
  `�			feAdd(tmp0, tmp0, z3);
  `�			feMul(z3, x1, z2);
  `�			feMul(z2, tmp1, tmp0);
  ^�			pos = pos - (1) >> 0;
    		}
  `�		feCSwap(x2, x3, swap);
  a		feCSwap(z2, z3, swap);
  a!		feInvert(z2, z2);
  a5		feMul(x2, x2, z2);
  aK		feToBytes(out, x2);
    	};
scalarMultGeneric/vendor/golang.org/x/crypto/curve25519.arrayType1vendor/golang.org/x/crypto/curve25519.arrayType$2+vendor/golang.org/x/crypto/curve25519.feAdd-vendor/golang.org/x/crypto/curve25519.feCSwap,vendor/golang.org/x/crypto/curve25519.feCopy1vendor/golang.org/x/crypto/curve25519.feFromBytes.vendor/golang.org/x/crypto/curve25519.feInvert+vendor/golang.org/x/crypto/curve25519.feMul1vendor/golang.org/x/crypto/curve25519.feMul121666+vendor/golang.org/x/crypto/curve25519.feOne.vendor/golang.org/x/crypto/curve25519.feSquare+vendor/golang.org/x/crypto/curve25519.feSub/vendor/golang.org/x/crypto/curve25519.feToBytes2vendor/golang.org/x/crypto/curve25519.fieldElement7vendor/golang.org/x/crypto/curve25519.scalarMultGeneric/vendor/golang.org/x/crypto/curve25519.sliceType 0vendor/golang.org/x/crypto/curve25519.scalarMult%vendor/golang.org/x/crypto/curve25519
scalarMult 
scalarMultu	scalarMult = function(out, in$1, base) {
		var base, in$1, out;
  b�		scalarMultGeneric(out, in$1, base);
    	};

scalarMult0vendor/golang.org/x/crypto/curve25519.scalarMult7vendor/golang.org/x/crypto/curve25519.scalarMultGeneric ��{"Base":25254,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/curve25519/curve25519.go","Base":1,"Size":3158,"Lines":[0,55,109,159,160,239,316,333,395,396,405,422,429,431,432,486,489,568,647,672,720,752,754,755,829,852,855,930,993,1038,1075,1077,1078,1086,1144,1161,1217,1233,1235,1236,1288,1309,1310,1431,1432,1473,1474,1498,1548,1598,1648,1698,1748,1759,1818,1821,1823,1824,1900,1976,1999,2002,2083,2144,2147,2221,2294,2346,2420,2473,2491,2527,2529,2530,2597,2614,2646,2716,2719,2750,2819,2822,2843,2876,2895,2922,2932,2958,2981,3011,3067,3129,3133,3136,3156],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/curve25519/curve25519_generic.go","Base":3160,"Size":21769,"Lines":[0,55,109,159,160,179,180,205,206,277,334,335,413,493,566,578,606,607,639,660,672,675,677,678,709,721,732,734,735,773,795,818,821,823,824,862,884,907,910,912,913,951,973,991,994,996,997,1082,1085,1115,1159,1167,1187,1212,1224,1236,1239,1241,1242,1296,1326,1339,1357,1381,1406,1416,1418,1419,1473,1503,1549,1551,1552,1605,1626,1653,1680,1708,1736,1759,1787,1815,1843,1884,1885,1906,1937,1958,1980,2011,2027,2049,2080,2096,2118,2149,2165,2187,2218,2234,2256,2257,2288,2304,2326,2357,2373,2395,2426,2442,2464,2495,2511,2533,2564,2580,2602,2603,2623,2643,2663,2683,2703,2723,2743,2763,2783,2803,2805,2806,2836,2854,2915,2918,2953,3017,3020,3030,3083,3151,3154,3214,3231,3234,3253,3283,3338,3341,3371,3442,3445,3506,3563,3610,3631,3632,3666,3688,3710,3732,3754,3776,3798,3820,3842,3864,3886,3887,3952,3968,4029,4030,4053,4071,4095,4118,4136,4160,4183,4201,4225,4248,4266,4290,4313,4331,4355,4378,4396,4420,4443,4461,4485,4508,4526,4550,4573,4591,4615,4638,4662,4679,4680,4758,4810,4847,4885,4886,4910,4934,4959,5000,5024,5049,5090,5114,5139,5180,5205,5231,5273,5298,5324,5350,5375,5400,5426,5468,5493,5519,5561,5586,5612,5654,5679,5705,5747,5772,5798,5824,5826,5827,5857,5887,5890,5908,5970,6032,6035,6054,6116,6119,6156,6159,6195,6249,6252,6316,6357,6360,6427,6478,6537,6540,6571,6628,6696,6699,6769,6805,6817,6829,6841,6853,6865,6877,6889,6901,6913,6925,6937,6949,6961,6973,6985,6997,7009,7021,7033,7045,7075,7115,7133,7151,7169,7187,7205,7223,7241,7257,7273,7289,7305,7321,7352,7383,7414,7445,7476,7507,7538,7569,7600,7631,7662,7697,7728,7763,7794,7829,7860,7895,7926,7965,7996,8027,8058,8089,8120,8151,8182,8213,8250,8287,8318,8353,8384,8419,8450,8485,8516,8555,8592,8631,8662,8693,8724,8755,8786,8817,8854,8891,8928,8965,8996,9031,9062,9097,9128,9167,9204,9243,9280,9319,9350,9381,9412,9443,9480,9517,9554,9591,9628,9665,9696,9731,9762,9801,9838,9877,9914,9953,9990,10029,10060,10091,10128,10165,10202,10239,10276,10313,10350,10387,10418,10457,10494,10533,10570,10609,10646,10685,10722,10761,10863,10962,11060,11153,11247,11334,11424,11505,11591,11666,11687,11688,11761,11825,11882,11946,11947,11982,11998,12020,12055,12071,12093,12110,12127,12149,12171,12172,12207,12223,12245,12280,12296,12318,12364,12410,12432,12454,12455,12490,12506,12528,12563,12579,12601,12657,12713,12735,12757,12758,12793,12809,12831,12866,12882,12904,12960,13016,13038,13060,13061,13096,13112,13134,13169,13185,13207,13263,13319,13341,13363,13364,13399,13420,13442,13498,13519,13520,13555,13571,13593,13649,13671,13672,13690,13708,13726,13744,13762,13780,13798,13816,13834,13852,13854,13855,13909,13912,13930,13992,13995,14014,14076,14112,14124,14136,14148,14160,14172,14184,14196,14208,14220,14232,14248,14264,14280,14296,14312,14328,14344,14360,14391,14422,14453,14484,14515,14546,14581,14616,14651,14686,14721,14756,14791,14826,14861,14896,14931,14968,15003,15040,15075,15112,15147,15186,15217,15252,15287,15322,15357,15392,15431,15468,15503,15538,15575,15610,15649,15688,15727,15758,15793,15832,15869,15908,15945,15982,16021,16060,16099,16138,16175,16212,16251,16288,16325,16364,16403,16440,16477,16514,16576,16630,16693,16746,16806,16858,16919,16970,17028,17078,17099,17100,17135,17151,17173,17208,17224,17246,17247,17282,17298,17320,17355,17371,17393,17394,17429,17445,17467,17502,17518,17540,17541,17576,17592,17614,17649,17665,17687,17688,17723,17739,17761,17796,17812,17834,17835,17870,17891,17913,17914,17949,17965,17987,17988,18006,18024,18042,18060,18078,18096,18114,18132,18150,18168,18170,18171,18235,18238,18256,18318,18321,18340,18402,18441,18469,18497,18525,18553,18581,18609,18637,18665,18693,18721,18742,18743,18778,18799,18821,18856,18872,18894,18929,18945,18967,19002,19018,19040,19075,19091,19113,19114,19149,19165,19187,19222,19238,19260,19295,19311,19333,19368,19384,19406,19441,19457,19479,19480,19498,19516,19534,19552,19570,19588,19606,19624,19642,19660,19662,19663,19692,19730,19763,19774,19775,19793,19818,19839,19842,19862,19887,19908,19911,19931,19953,19973,19998,20019,20022,20044,20064,20089,20110,20113,20135,20155,20181,20202,20205,20227,20247,20273,20294,20297,20319,20339,20365,20386,20389,20411,20431,20457,20478,20481,20503,20523,20550,20571,20574,20596,20616,20642,20663,20666,20688,20708,20733,20754,20757,20779,20781,20782,20832,20848,20849,20868,20881,20895,20908,20909,20958,20982,20994,21012,21024,21025,21043,21078,21109,21118,21137,21163,21189,21207,21208,21233,21258,21281,21304,21329,21354,21379,21402,21425,21448,21475,21504,21525,21551,21572,21599,21622,21649,21652,21653,21678,21703,21704,21724,21746,21767],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/curve25519/curve25519_noasm.go","Base":24930,"Size":323,"Lines":[0,55,109,159,160,195,223,224,243,244,287,321],"Infos":null}]}
 