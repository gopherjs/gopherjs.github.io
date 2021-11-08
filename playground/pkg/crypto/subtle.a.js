’’Archive’ 	
ImportPath Name Imports’ 
ExportData
 Declarations’ 	IncJSCode
 FileSet
 Minified GoLinknames’   ’[]string’   ’[]*compiler.Decl’ ’  ’“’’ FullName LinkingName’ Vars’ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps’ Blocking   *’SymName’ PkgPath Name   $’[]compiler.GoLinkname’ ’  ;’
GoLinkname’ Implementation’ 	Reference’   žd’crypto/subtlesubtle’ķi }[xy vsubtleConstantTimeByteEqConstantTimeCompareConstantTimeCopyConstantTimeEqConstantTimeLessOrEqConstantTimeSelectF      F   . .  F    > >  F      F      F         !5 F.U<jJ!crypto/subtle.ConstantTimeComparecrypto/subtleConstantTimeCompare ConstantTimeComparež`	ConstantTimeCompare = function(x, y) {
		var i, v, x, y;
    		if (!((x.$length === y.$length))) {
  ?			return 0;
    		}
  Q		v = 0;
  ^		i = 0;
		while (true) {
			if (!(i < x.$length)) { break; }
  z			v = (v | (((((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]) ^ ((i < 0 || i >= y.$length) ? ($throwRuntimeError("index out of range"), undefined) : y.$array[y.$offset + i])) << 24 >>> 24))) >>> 0;
  r			i = i + (1) >> 0;
    		}
  		return ConstantTimeByteEq(v, 0);
    	};
	$pkg.ConstantTimeCompare = ConstantTimeCompare;
ConstantTimeCompare crypto/subtle.ConstantTimeByteEq!crypto/subtle.ConstantTimeCompare  crypto/subtle.ConstantTimeSelectcrypto/subtleConstantTimeSelect ConstantTimeSelect’“	ConstantTimeSelect = function(v, x, y) {
		var v, x, y;
  R		return ((~((v - 1 >> 0)) >> 0) & x) | (((v - 1 >> 0)) & y);
    	};
	$pkg.ConstantTimeSelect = ConstantTimeSelect;
ConstantTimeSelect crypto/subtle.ConstantTimeSelect  crypto/subtle.ConstantTimeByteEqcrypto/subtleConstantTimeByteEq ConstantTimeByteEq’Į	ConstantTimeByteEq = function(x, y) {
		var x, y;
  Õ		return (((((((((x ^ y) << 24 >>> 24) >>> 0)) - 1 >>> 0)) >>> 31 >>> 0) >> 0));
    	};
	$pkg.ConstantTimeByteEq = ConstantTimeByteEq;
ConstantTimeByteEq crypto/subtle.ConstantTimeByteEq crypto/subtle.ConstantTimeEqcrypto/subtleConstantTimeEq ConstantTimeEq’÷	ConstantTimeEq = function(x, y) {
		var x, x$1, y;
  Z		return (($shiftRightUint64(((x$1 = (new $Uint64(0, ((((x ^ y) >> 0) >>> 0)))), new $Uint64(x$1.$high - 0, x$1.$low - 1))), 63).$low >> 0));
    	};
	$pkg.ConstantTimeEq = ConstantTimeEq;
ConstantTimeEqcrypto/subtle.ConstantTimeEq crypto/subtle.ConstantTimeCopycrypto/subtleConstantTimeCopy ConstantTimeCopyžG	ConstantTimeCopy = function(v, x, y) {
		var i, v, x, xmask, y, ymask;
    		if (!((x.$length === y.$length))) {
  			$panic(new $String("subtle: slices have different lengths"));
    		}
  ·		xmask = (((v - 1 >> 0) << 24 >>> 24));
  Ķ		ymask = (((~((v - 1 >> 0)) >> 0) << 24 >>> 24));
  ź		i = 0;
		while (true) {
			if (!(i < x.$length)) { break; }
  			((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = ((((((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]) & xmask) >>> 0) | ((((i < 0 || i >= y.$length) ? ($throwRuntimeError("index out of range"), undefined) : y.$array[y.$offset + i]) & ymask) >>> 0)) >>> 0));
  ž			i = i + (1) >> 0;
    		}
    	};
	$pkg.ConstantTimeCopy = ConstantTimeCopy;
ConstantTimeCopycrypto/subtle.ConstantTimeCopy "crypto/subtle.ConstantTimeLessOrEqcrypto/subtleConstantTimeLessOrEq ConstantTimeLessOrEq’ų	ConstantTimeLessOrEq = function(x, y) {
		var x, x32, y, y32;
  ×		x32 = ((x >> 0));
  č		y32 = ((y >> 0));
  ł		return ((((((((x32 - y32 >> 0) - 1 >> 0)) >> 31 >> 0)) & 1) >> 0));
    	};
	$pkg.ConstantTimeLessOrEq = ConstantTimeLessOrEq;
ConstantTimeLessOrEq"crypto/subtle.ConstantTimeLessOrEq ž«{"Base":1828,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/subtle/constant_time.go","Base":1,"Size":1826,"Lines":[0,55,109,159,160,238,292,307,308,389,470,505,549,572,583,586,587,599,600,631,650,653,654,687,689,690,749,806,877,878,937,979,1016,1018,1019,1074,1112,1157,1159,1160,1238,1315,1341,1385,1408,1457,1460,1461,1483,1508,1539,1572,1575,1577,1578,1639,1707,1749,1766,1783,1824],"Infos":null}]}
 