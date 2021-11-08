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
GoLinkname�� Implementation�� 	Reference��   �����	math/bitsbits��i ��xycarrysumcarryOuthiloquorem nkborrowdiff	borrowOutbitsAddAdd32Add64DivDiv32Div64LeadingZerosLeadingZeros16LeadingZeros32LeadingZeros64LeadingZeros8LenLen16Len32Len64Len8MulMul32Mul64	OnesCountOnesCount16OnesCount32OnesCount64
OnesCount8RemRem32Rem64Reverse	Reverse16	Reverse32	Reverse64Reverse8ReverseBytesReverseBytes16ReverseBytes32ReverseBytes64
RotateLeftRotateLeft16RotateLeft32RotateLeft64RotateLeft8SubSub32Sub64TrailingZerosTrailingZeros16TrailingZeros32TrailingZeros64TrailingZeros8UintSizeF      
  F   	 	 	 
	 	 F   
 
 
 

 
 F      ! F  	 	 	 	 !	 F  
 
 
 
 !
 F    % F    % F   	 % F   
 % F    % F    % F    & F   	 & F   
 & F    % F       F   	 	 	 	 F   
 
 
 
 F    % F    % F   	 % F   
 % F    % F     % F  	 	 	 %	 F  
 
 
 %
 F    % F    % F   	 %	 F   
 %
 F    % F    % F    % F   	 %	 F   
 %
 F    ( % F    ( % F   	 ( %	 F   
 ( %
 F    ( % F     * 1 6 F   	 	 *	 1	 6	 F   
 
 *
 1
 6
 F    % F    % F   	 % F   
 % F    % C @%@ 2E IO(U<YP_dexr�������������������������������������������������������������������������������������< _err[	_err = $pkg._err = $newType(8, $kindString, "bits._err", true, "math/bits", false, null);
��	_err.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "RuntimeError", name: "RuntimeError", pkg: "", typ: $funcType([], [], false)}];
_errmath/bits._err  overflowErroroverflowError  divideErrordivideError  deBruijn32tabdeBruijn32tab  deBruijn64tabdeBruijn64tab  D   �		overflowError = new _err("runtime error: integer overflow");
overflowErrormath/bits._errmath/bits.overflowError  H  		divideError = new _err("runtime error: integer divide by zero");
divideErrormath/bits._errmath/bits.divideError  ��  %		deBruijn32tab = $toNativeArray($kindUint8, [0, 1, 28, 2, 29, 14, 24, 3, 30, 22, 20, 15, 25, 17, 4, 8, 31, 27, 13, 23, 21, 19, 16, 7, 26, 12, 18, 6, 11, 5, 10, 9]);
deBruijn32tabmath/bits.deBruijn32tab  �+  �		deBruijn64tab = $toNativeArray($kindUint8, [0, 1, 56, 2, 57, 49, 28, 3, 61, 58, 42, 50, 38, 29, 17, 4, 62, 47, 59, 36, 45, 43, 51, 22, 53, 39, 33, 30, 24, 18, 12, 5, 63, 55, 48, 27, 60, 41, 37, 16, 46, 35, 44, 21, 52, 32, 23, 11, 54, 26, 40, 15, 34, 20, 31, 10, 25, 14, 19, 9, 13, 8, 7, 6]);
deBruijn64tabmath/bits.deBruijn64tab (math/bits._err).Error ��	_err.prototype.Error = function() {
		var e;
		e = this.$val;
   ]		return (e);
    	};
	$ptrType(_err).prototype.Error = function() { return new _err(this.$get()).Error(); };
_errmath/bits._err (math/bits._err).RuntimeError ��	_err.prototype.RuntimeError = function() {
		var e;
		e = this.$val;
    	};
	$ptrType(_err).prototype.RuntimeError = function() { return new _err(this.$get()).RuntimeError(); };
_errmath/bits._err math/bits.Mul32	math/bitsMul32 Mul32�>	Mul32 = function(x, y) {
		var hi, lo, t, w0, w1, w2, x, x0, x1, y, y0, y1;
		hi = 0;
		lo = 0;
  �		x0 = (x & 65535) >>> 0;
  �		x1 = x >>> 16 >>> 0;
  �		y0 = (y & 65535) >>> 0;
  		y1 = y >>> 16 >>> 0;
  		w0 = $imul(x0, y0) >>> 0;
  -		t = ($imul(x1, y0) >>> 0) + (w0 >>> 16 >>> 0) >>> 0;
  B		w1 = (t & 65535) >>> 0;
  T		w2 = t >>> 16 >>> 0;
  c		w1 = w1 + (($imul(x0, y1) >>> 0)) >>> 0;
  r		hi = (($imul(x1, y1) >>> 0) + w2 >>> 0) + (w1 >>> 16 >>> 0) >>> 0;
  �		lo = $imul(x, y) >>> 0;
  �		return [hi, lo];
    	};
	$pkg.Mul32 = Mul32;
Mul32math/bits.Mul32 math/bits.Add32	math/bitsAdd32 Add32�*	Add32 = function(x, y, carry) {
		var carry, carryOut, sum, x, y;
		sum = 0;
		carryOut = 0;
  (		sum = (x + y >>> 0) + carry >>> 0;
  =		carryOut = ((((((x & y) >>> 0)) | ((((((x | y) >>> 0)) & ~sum) >>> 0))) >>> 0)) >>> 31 >>> 0;
  l		return [sum, carryOut];
    	};
	$pkg.Add32 = Add32;
Add32math/bits.Add32 math/bits.Div32	math/bitsDiv32 Div32��	Div32 = function(hi, lo, y) {
		var _q, _q$1, _tmp, _tmp$1, hi, lo, q0, q1, quo, rem, rhat, s, un0, un1, un10, un16, un21, y, y$1, y$2, y$3, y$4, y$5, yn0, yn1;
		quo = 0;
		rem = 0;
    		if (y === 0) {
  7			$panic(divideError);
    		}
    		if (y <= hi) {
  ]			$panic(overflowError);
    		}
  w		s = ((LeadingZeros32(y) >>> 0));
  �		y = (y$1 = (s), y$1 < 32 ? (y << y$1) : 0) >>> 0;
  �		yn1 = y >>> 16 >>> 0;
  �		yn0 = (y & 65535) >>> 0;
  �		un16 = (((y$2 = s, y$2 < 32 ? (hi << y$2) : 0) >>> 0) | ((y$3 = ((32 - s >>> 0)), y$3 < 32 ? (lo >>> y$3) : 0) >>> 0)) >>> 0;
  �		un10 = (y$4 = s, y$4 < 32 ? (lo << y$4) : 0) >>> 0;
  �		un1 = un10 >>> 16 >>> 0;
  		un0 = (un10 & 65535) >>> 0;
  		q1 = (_q = un16 / yn1, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  *		rhat = un16 - ($imul(q1, yn1) >>> 0) >>> 0;
  B		while (true) {
			if (!(q1 >= 65536 || ($imul(q1, yn0) >>> 0) > (($imul(65536, rhat) >>> 0) + un1 >>> 0))) { break; }
  q			q1 = q1 - (1) >>> 0;
  x			rhat = rhat + (yn1) >>> 0;
    			if (rhat >= 65536) {
  �				break;
    			}
    		}
  �		un21 = (($imul(un16, 65536) >>> 0) + un1 >>> 0) - ($imul(q1, y) >>> 0) >>> 0;
  �		q0 = (_q$1 = un21 / yn1, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		rhat = un21 - ($imul(q0, yn1) >>> 0) >>> 0;
  �		while (true) {
			if (!(q0 >= 65536 || ($imul(q0, yn0) >>> 0) > (($imul(65536, rhat) >>> 0) + un0 >>> 0))) { break; }
  $			q0 = q0 - (1) >>> 0;
  +			rhat = rhat + (yn1) >>> 0;
    			if (rhat >= 65536) {
  O				break;
    			}
    		}
    		_tmp = ($imul(q1, 65536) >>> 0) + q0 >>> 0;
		_tmp$1 = (y$5 = s, y$5 < 32 ? ((((($imul(un21, 65536) >>> 0) + un0 >>> 0) - ($imul(q0, y) >>> 0) >>> 0)) >>> y$5) : 0) >>> 0;
		quo = _tmp;
		rem = _tmp$1;
		return [quo, rem];
    	};
	$pkg.Div32 = Div32;
Div32math/bits.Div32math/bits.LeadingZeros32math/bits.divideErrormath/bits.overflowError math/bits.Rem32	math/bitsRem32 Rem32��	Rem32 = function(hi, lo, y) {
		var _r, _tuple, hi, lo, rem, y;
  �		_tuple = Div32((_r = hi % y, _r === _r ? _r : $throwRuntimeError("integer divide by zero")), lo, y);
		rem = _tuple[1];
  �		return rem;
    	};
	$pkg.Rem32 = Rem32;
Rem32math/bits.Div32math/bits.Rem32 math/bits.LeadingZeros	math/bitsLeadingZeros LeadingZeross	LeadingZeros = function(x) {
		var x;
  
4		return 32 - Len(x) >> 0;
    	};
	$pkg.LeadingZeros = LeadingZeros;
LeadingZerosmath/bits.LeadingZerosmath/bits.Len math/bits.LeadingZeros8	math/bitsLeadingZeros8 LeadingZeros8v	LeadingZeros8 = function(x) {
		var x;
  
�		return 8 - Len8(x) >> 0;
    	};
	$pkg.LeadingZeros8 = LeadingZeros8;
LeadingZeros8math/bits.LeadingZeros8math/bits.Len8 math/bits.LeadingZeros16	math/bitsLeadingZeros16 LeadingZeros16{	LeadingZeros16 = function(x) {
		var x;
  d		return 16 - Len16(x) >> 0;
    	};
	$pkg.LeadingZeros16 = LeadingZeros16;
LeadingZeros16math/bits.LeadingZeros16math/bits.Len16 math/bits.LeadingZeros32	math/bitsLeadingZeros32 LeadingZeros32{	LeadingZeros32 = function(x) {
		var x;
  �		return 32 - Len32(x) >> 0;
    	};
	$pkg.LeadingZeros32 = LeadingZeros32;
LeadingZeros32math/bits.LeadingZeros32math/bits.Len32 math/bits.LeadingZeros64	math/bitsLeadingZeros64 LeadingZeros64{	LeadingZeros64 = function(x) {
		var x;
  �		return 64 - Len64(x) >> 0;
    	};
	$pkg.LeadingZeros64 = LeadingZeros64;
LeadingZeros64math/bits.LeadingZeros64math/bits.Len64 math/bits.TrailingZeros	math/bitsTrailingZeros TrailingZeros��	TrailingZeros = function(x) {
		var x;
    		if (true) {
  �			return TrailingZeros32(((x >>> 0)));
    		}
  �		return TrailingZeros64((new $Uint64(0, x)));
    	};
	$pkg.TrailingZeros = TrailingZeros;
TrailingZerosmath/bits.TrailingZerosmath/bits.TrailingZeros32math/bits.TrailingZeros64 math/bits.TrailingZeros8	math/bitsTrailingZeros8 TrailingZeros8��	TrailingZeros8 = function(x) {
		var x;
  c		return (("\b\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x05\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x06\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x05\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x07\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x05\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x06\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x05\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00\x04\x00\x01\x00\x02\x00\x01\x00\x03\x00\x01\x00\x02\x00\x01\x00".charCodeAt(x) >> 0));
    	};
	$pkg.TrailingZeros8 = TrailingZeros8;
TrailingZeros8math/bits.TrailingZeros8 math/bits.TrailingZeros16	math/bitsTrailingZeros16 TrailingZeros16�}	TrailingZeros16 = function(x) {
		var x, x$1;
    		if (x === 0) {
  			return 16;
    		}
  A		return (((x$1 = ($imul(((((x & (-x << 16 >>> 16)) >>> 0) >>> 0)), 125613361) >>> 0) >>> 27 >>> 0, ((x$1 < 0 || x$1 >= deBruijn32tab.length) ? ($throwRuntimeError("index out of range"), undefined) : deBruijn32tab[x$1])) >> 0));
    	};
	$pkg.TrailingZeros16 = TrailingZeros16;
TrailingZeros16math/bits.TrailingZeros16math/bits.deBruijn32tab math/bits.TrailingZeros32	math/bitsTrailingZeros32 TrailingZeros32�n	TrailingZeros32 = function(x) {
		var x, x$1;
    		if (x === 0) {
  			return 32;
    		}
  C		return (((x$1 = ($imul((((x & (-x >>> 0)) >>> 0)), 125613361) >>> 0) >>> 27 >>> 0, ((x$1 < 0 || x$1 >= deBruijn32tab.length) ? ($throwRuntimeError("index out of range"), undefined) : deBruijn32tab[x$1])) >> 0));
    	};
	$pkg.TrailingZeros32 = TrailingZeros32;
TrailingZeros32math/bits.TrailingZeros32math/bits.deBruijn32tab math/bits.TrailingZeros64	math/bitsTrailingZeros64 TrailingZeros64�	TrailingZeros64 = function(x) {
		var x, x$1, x$2;
    		if ((x.$high === 0 && x.$low === 0)) {
  			return 64;
    		}
  �		return (((x$1 = $shiftRightUint64($mul64(((x$2 = new $Uint64(-x.$high, -x.$low), new $Uint64(x.$high & x$2.$high, (x.$low & x$2.$low) >>> 0))), new $Uint64(66559345, 3033172745)), 58), (($flatten64(x$1) < 0 || $flatten64(x$1) >= deBruijn64tab.length) ? ($throwRuntimeError("index out of range"), undefined) : deBruijn64tab[$flatten64(x$1)])) >> 0));
    	};
	$pkg.TrailingZeros64 = TrailingZeros64;
TrailingZeros64math/bits.TrailingZeros64math/bits.deBruijn64tab math/bits.OnesCount	math/bits	OnesCount 	OnesCount��	OnesCount = function(x) {
		var x;
    		if (true) {
  N			return OnesCount32(((x >>> 0)));
    		}
  p		return OnesCount64((new $Uint64(0, x)));
    	};
	$pkg.OnesCount = OnesCount;
	OnesCountmath/bits.OnesCountmath/bits.OnesCount32math/bits.OnesCount64 math/bits.OnesCount8	math/bits
OnesCount8 
OnesCount8�t	OnesCount8 = function(x) {
		var x;
  �		return (("\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt(x) >> 0));
    	};
	$pkg.OnesCount8 = OnesCount8;

OnesCount8math/bits.OnesCount8 math/bits.OnesCount16	math/bitsOnesCount16 OnesCount16��	OnesCount16 = function(x) {
		var x;
  ~		return ((("\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt((x >>> 8 << 16 >>> 16)) + "\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt(((x & 255) >>> 0)) << 24 >>> 24) >> 0));
    	};
	$pkg.OnesCount16 = OnesCount16;
OnesCount16math/bits.OnesCount16 math/bits.OnesCount32	math/bitsOnesCount32 OnesCount32�3	OnesCount32 = function(x) {
		var x;
  		return ((((("\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt((x >>> 24 >>> 0)) + "\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt((((x >>> 16 >>> 0) & 255) >>> 0)) << 24 >>> 24) + "\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt((((x >>> 8 >>> 0) & 255) >>> 0)) << 24 >>> 24) + "\x00\x01\x01\x02\x01\x02\x02\x03\x01\x02\x02\x03\x02\x03\x03\x04\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x01\x02\x02\x03\x02\x03\x03\x04\x02\x03\x03\x04\x03\x04\x04\x05\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x02\x03\x03\x04\x03\x04\x04\x05\x03\x04\x04\x05\x04\x05\x05\x06\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x03\x04\x04\x05\x04\x05\x05\x06\x04\x05\x05\x06\x05\x06\x06\x07\x04\x05\x05\x06\x05\x06\x06\x07\x05\x06\x06\x07\x06\x07\x07\b".charCodeAt(((x & 255) >>> 0)) << 24 >>> 24) >> 0));
    	};
	$pkg.OnesCount32 = OnesCount32;
OnesCount32math/bits.OnesCount32 math/bits.OnesCount64	math/bitsOnesCount64 OnesCount64�n	OnesCount64 = function(x) {
		var x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		x = (x$1 = (x$2 = $shiftRightUint64(x, 1), new $Uint64(x$2.$high & 1431655765, (x$2.$low & 1431655765) >>> 0)), x$3 = new $Uint64(x.$high & 1431655765, (x.$low & 1431655765) >>> 0), new $Uint64(x$1.$high + x$3.$high, x$1.$low + x$3.$low));
  		x = (x$4 = (x$5 = $shiftRightUint64(x, 2), new $Uint64(x$5.$high & 858993459, (x$5.$low & 858993459) >>> 0)), x$6 = new $Uint64(x.$high & 858993459, (x.$low & 858993459) >>> 0), new $Uint64(x$4.$high + x$6.$high, x$4.$low + x$6.$low));
  4		x = (x$7 = (x$8 = $shiftRightUint64(x, 4), new $Uint64(x$8.$high + x.$high, x$8.$low + x.$low)), new $Uint64(x$7.$high & 252645135, (x$7.$low & 252645135) >>> 0));
  O		x = (x$9 = $shiftRightUint64(x, 8), new $Uint64(x.$high + x$9.$high, x.$low + x$9.$low));
  \		x = (x$10 = $shiftRightUint64(x, 16), new $Uint64(x.$high + x$10.$high, x.$low + x$10.$low));
  j		x = (x$11 = $shiftRightUint64(x, 32), new $Uint64(x.$high + x$11.$high, x.$low + x$11.$low));
  x		return ((x.$low >> 0)) & 127;
    	};
	$pkg.OnesCount64 = OnesCount64;
OnesCount64math/bits.OnesCount64 math/bits.RotateLeft	math/bits
RotateLeft 
RotateLeft��	RotateLeft = function(x, k) {
		var k, x;
    		if (true) {
  �			return ((RotateLeft32(((x >>> 0)), k) >>> 0));
    		}
  �		return ((RotateLeft64((new $Uint64(0, x)), k).$low >>> 0));
    	};
	$pkg.RotateLeft = RotateLeft;

RotateLeftmath/bits.RotateLeftmath/bits.RotateLeft32math/bits.RotateLeft64 math/bits.RotateLeft8	math/bitsRotateLeft8 RotateLeft8�	RotateLeft8 = function(x, k) {
		var k, s, x, y, y$1;
   		s = (((k >>> 0)) & 7) >>> 0;
   		return (((y = s, y < 32 ? (x << y) : 0) << 24 >>> 24) | ((y$1 = ((8 - s >>> 0)), y$1 < 32 ? (x >>> y$1) : 0) << 24 >>> 24)) >>> 0;
    	};
	$pkg.RotateLeft8 = RotateLeft8;
RotateLeft8math/bits.RotateLeft8 math/bits.RotateLeft16	math/bitsRotateLeft16 RotateLeft16�	RotateLeft16 = function(x, k) {
		var k, s, x, y, y$1;
  !6		s = (((k >>> 0)) & 15) >>> 0;
  !N		return (((y = s, y < 32 ? (x << y) : 0) << 16 >>> 16) | ((y$1 = ((16 - s >>> 0)), y$1 < 32 ? (x >>> y$1) : 0) << 16 >>> 16)) >>> 0;
    	};
	$pkg.RotateLeft16 = RotateLeft16;
RotateLeft16math/bits.RotateLeft16 math/bits.RotateLeft32	math/bitsRotateLeft32 RotateLeft32�	RotateLeft32 = function(x, k) {
		var k, s, x, y, y$1;
  "i		s = (((k >>> 0)) & 31) >>> 0;
  "�		return (((y = s, y < 32 ? (x << y) : 0) >>> 0) | ((y$1 = ((32 - s >>> 0)), y$1 < 32 ? (x >>> y$1) : 0) >>> 0)) >>> 0;
    	};
	$pkg.RotateLeft32 = RotateLeft32;
RotateLeft32math/bits.RotateLeft32 math/bits.RotateLeft64	math/bitsRotateLeft64 RotateLeft64�$	RotateLeft64 = function(x, k) {
		var k, s, x, x$1, x$2;
  #�		s = (((k >>> 0)) & 63) >>> 0;
  #�		return (x$1 = $shiftLeft64(x, s), x$2 = $shiftRightUint64(x, ((64 - s >>> 0))), new $Uint64(x$1.$high | x$2.$high, (x$1.$low | x$2.$low) >>> 0));
    	};
	$pkg.RotateLeft64 = RotateLeft64;
RotateLeft64math/bits.RotateLeft64 math/bits.Reverse	math/bitsReverse Reverse��	Reverse = function(x) {
		var x;
    		if (true) {
  $X			return ((Reverse32(((x >>> 0))) >>> 0));
    		}
  $~		return ((Reverse64((new $Uint64(0, x))).$low >>> 0));
    	};
	$pkg.Reverse = Reverse;
Reversemath/bits.Reversemath/bits.Reverse32math/bits.Reverse64 math/bits.Reverse8	math/bitsReverse8 Reverse8�@	Reverse8 = function(x) {
		var x;
  %		return "\x00\x80@\xC0 \xA0`\xE0\x10\x90P\xD00\xB0p\xF0\b\x88H\xC8(\xA8h\xE8\x18\x98X\xD88\xB8x\xF8\x04\x84D\xC4$\xA4d\xE4\x14\x94T\xD44\xB4t\xF4\f\x8CL\xCC,\xACl\xEC\x1C\x9C\\\xDC<\xBC|\xFC\x02\x82B\xC2\"\xA2b\xE2\x12\x92R\xD22\xB2r\xF2\n\x8AJ\xCA*\xAAj\xEA\x1A\x9AZ\xDA:\xBAz\xFA\x06\x86F\xC6&\xA6f\xE6\x16\x96V\xD66\xB6v\xF6\x0E\x8EN\xCE.\xAEn\xEE\x1E\x9E^\xDE>\xBE~\xFE\x01\x81A\xC1!\xA1a\xE1\x11\x91Q\xD11\xB1q\xF1\t\x89I\xC9)\xA9i\xE9\x19\x99Y\xD99\xB9y\xF9\x05\x85E\xC5%\xA5e\xE5\x15\x95U\xD55\xB5u\xF5\r\x8DM\xCD-\xADm\xED\x1D\x9D]\xDD=\xBD}\xFD\x03\x83C\xC3#\xA3c\xE3\x13\x93S\xD33\xB3s\xF3\v\x8BK\xCB+\xABk\xEB\x1B\x9B[\xDB;\xBB{\xFB\x07\x87G\xC7'\xA7g\xE7\x17\x97W\xD77\xB7w\xF7\x0F\x8FO\xCF/\xAFo\xEF\x1F\x9F_\xDF?\xBF\x7F\xFF".charCodeAt(x);
    	};
	$pkg.Reverse8 = Reverse8;
Reverse8math/bits.Reverse8 math/bits.Reverse16	math/bits	Reverse16 	Reverse16��	Reverse16 = function(x) {
		var x;
  %�		return ((("\x00\x80@\xC0 \xA0`\xE0\x10\x90P\xD00\xB0p\xF0\b\x88H\xC8(\xA8h\xE8\x18\x98X\xD88\xB8x\xF8\x04\x84D\xC4$\xA4d\xE4\x14\x94T\xD44\xB4t\xF4\f\x8CL\xCC,\xACl\xEC\x1C\x9C\\\xDC<\xBC|\xFC\x02\x82B\xC2\"\xA2b\xE2\x12\x92R\xD22\xB2r\xF2\n\x8AJ\xCA*\xAAj\xEA\x1A\x9AZ\xDA:\xBAz\xFA\x06\x86F\xC6&\xA6f\xE6\x16\x96V\xD66\xB6v\xF6\x0E\x8EN\xCE.\xAEn\xEE\x1E\x9E^\xDE>\xBE~\xFE\x01\x81A\xC1!\xA1a\xE1\x11\x91Q\xD11\xB1q\xF1\t\x89I\xC9)\xA9i\xE9\x19\x99Y\xD99\xB9y\xF9\x05\x85E\xC5%\xA5e\xE5\x15\x95U\xD55\xB5u\xF5\r\x8DM\xCD-\xADm\xED\x1D\x9D]\xDD=\xBD}\xFD\x03\x83C\xC3#\xA3c\xE3\x13\x93S\xD33\xB3s\xF3\v\x8BK\xCB+\xABk\xEB\x1B\x9B[\xDB;\xBB{\xFB\x07\x87G\xC7'\xA7g\xE7\x17\x97W\xD77\xB7w\xF7\x0F\x8FO\xCF/\xAFo\xEF\x1F\x9F_\xDF?\xBF\x7F\xFF".charCodeAt((x >>> 8 << 16 >>> 16)) << 16 >>> 16)) | ((("\x00\x80@\xC0 \xA0`\xE0\x10\x90P\xD00\xB0p\xF0\b\x88H\xC8(\xA8h\xE8\x18\x98X\xD88\xB8x\xF8\x04\x84D\xC4$\xA4d\xE4\x14\x94T\xD44\xB4t\xF4\f\x8CL\xCC,\xACl\xEC\x1C\x9C\\\xDC<\xBC|\xFC\x02\x82B\xC2\"\xA2b\xE2\x12\x92R\xD22\xB2r\xF2\n\x8AJ\xCA*\xAAj\xEA\x1A\x9AZ\xDA:\xBAz\xFA\x06\x86F\xC6&\xA6f\xE6\x16\x96V\xD66\xB6v\xF6\x0E\x8EN\xCE.\xAEn\xEE\x1E\x9E^\xDE>\xBE~\xFE\x01\x81A\xC1!\xA1a\xE1\x11\x91Q\xD11\xB1q\xF1\t\x89I\xC9)\xA9i\xE9\x19\x99Y\xD99\xB9y\xF9\x05\x85E\xC5%\xA5e\xE5\x15\x95U\xD55\xB5u\xF5\r\x8DM\xCD-\xADm\xED\x1D\x9D]\xDD=\xBD}\xFD\x03\x83C\xC3#\xA3c\xE3\x13\x93S\xD33\xB3s\xF3\v\x8BK\xCB+\xABk\xEB\x1B\x9B[\xDB;\xBB{\xFB\x07\x87G\xC7'\xA7g\xE7\x17\x97W\xD77\xB7w\xF7\x0F\x8FO\xCF/\xAFo\xEF\x1F\x9F_\xDF?\xBF\x7F\xFF".charCodeAt(((x & 255) >>> 0)) << 16 >>> 16)) << 8 << 16 >>> 16)) >>> 0;
    	};
	$pkg.Reverse16 = Reverse16;
	Reverse16math/bits.Reverse16 math/bits.Reverse32	math/bits	Reverse32 	Reverse32��	Reverse32 = function(x) {
		var x;
  &>		x = ((((x >>> 1 >>> 0) & 1431655765) >>> 0) | (((x & 1431655765) >>> 0) << 1 >>> 0)) >>> 0;
  &]		x = ((((x >>> 2 >>> 0) & 858993459) >>> 0) | (((x & 858993459) >>> 0) << 2 >>> 0)) >>> 0;
  &|		x = ((((x >>> 4 >>> 0) & 252645135) >>> 0) | (((x & 252645135) >>> 0) << 4 >>> 0)) >>> 0;
  &�		return ReverseBytes32(x);
    	};
	$pkg.Reverse32 = Reverse32;
	Reverse32math/bits.Reverse32math/bits.ReverseBytes32 math/bits.Reverse64	math/bits	Reverse64 	Reverse64��	Reverse64 = function(x) {
		var x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  '4		x = (x$1 = (x$2 = $shiftRightUint64(x, 1), new $Uint64(x$2.$high & 1431655765, (x$2.$low & 1431655765) >>> 0)), x$3 = $shiftLeft64(new $Uint64(x.$high & 1431655765, (x.$low & 1431655765) >>> 0), 1), new $Uint64(x$1.$high | x$3.$high, (x$1.$low | x$3.$low) >>> 0));
  'S		x = (x$4 = (x$5 = $shiftRightUint64(x, 2), new $Uint64(x$5.$high & 858993459, (x$5.$low & 858993459) >>> 0)), x$6 = $shiftLeft64(new $Uint64(x.$high & 858993459, (x.$low & 858993459) >>> 0), 2), new $Uint64(x$4.$high | x$6.$high, (x$4.$low | x$6.$low) >>> 0));
  'r		x = (x$7 = (x$8 = $shiftRightUint64(x, 4), new $Uint64(x$8.$high & 252645135, (x$8.$low & 252645135) >>> 0)), x$9 = $shiftLeft64(new $Uint64(x.$high & 252645135, (x.$low & 252645135) >>> 0), 4), new $Uint64(x$7.$high | x$9.$high, (x$7.$low | x$9.$low) >>> 0));
  '�		return ReverseBytes64(x);
    	};
	$pkg.Reverse64 = Reverse64;
	Reverse64math/bits.Reverse64math/bits.ReverseBytes64 math/bits.ReverseBytes	math/bitsReverseBytes ReverseBytes��	ReverseBytes = function(x) {
		var x;
    		if (true) {
  (�			return ((ReverseBytes32(((x >>> 0))) >>> 0));
    		}
  (�		return ((ReverseBytes64((new $Uint64(0, x))).$low >>> 0));
    	};
	$pkg.ReverseBytes = ReverseBytes;
ReverseBytesmath/bits.ReverseBytesmath/bits.ReverseBytes32math/bits.ReverseBytes64 math/bits.ReverseBytes16	math/bitsReverseBytes16 ReverseBytes16��	ReverseBytes16 = function(x) {
		var x;
  )�		return ((x >>> 8 << 16 >>> 16) | (x << 8 << 16 >>> 16)) >>> 0;
    	};
	$pkg.ReverseBytes16 = ReverseBytes16;
ReverseBytes16math/bits.ReverseBytes16 math/bits.ReverseBytes32	math/bitsReverseBytes32 ReverseBytes32��	ReverseBytes32 = function(x) {
		var x;
  *y		x = ((((x >>> 8 >>> 0) & 16711935) >>> 0) | (((x & 16711935) >>> 0) << 8 >>> 0)) >>> 0;
  *�		return ((x >>> 16 >>> 0) | (x << 16 >>> 0)) >>> 0;
    	};
	$pkg.ReverseBytes32 = ReverseBytes32;
ReverseBytes32math/bits.ReverseBytes32 math/bits.ReverseBytes64	math/bitsReverseBytes64 ReverseBytes64�	ReverseBytes64 = function(x) {
		var x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8;
  +|		x = (x$1 = (x$2 = $shiftRightUint64(x, 8), new $Uint64(x$2.$high & 16711935, (x$2.$low & 16711935) >>> 0)), x$3 = $shiftLeft64(new $Uint64(x.$high & 16711935, (x.$low & 16711935) >>> 0), 8), new $Uint64(x$1.$high | x$3.$high, (x$1.$low | x$3.$low) >>> 0));
  +�		x = (x$4 = (x$5 = $shiftRightUint64(x, 16), new $Uint64(x$5.$high & 65535, (x$5.$low & 65535) >>> 0)), x$6 = $shiftLeft64(new $Uint64(x.$high & 65535, (x.$low & 65535) >>> 0), 16), new $Uint64(x$4.$high | x$6.$high, (x$4.$low | x$6.$low) >>> 0));
  +�		return (x$7 = $shiftRightUint64(x, 32), x$8 = $shiftLeft64(x, 32), new $Uint64(x$7.$high | x$8.$high, (x$7.$low | x$8.$low) >>> 0));
    	};
	$pkg.ReverseBytes64 = ReverseBytes64;
ReverseBytes64math/bits.ReverseBytes64 math/bits.Len	math/bitsLen Len��	Len = function(x) {
		var x;
    		if (true) {
  ,q			return Len32(((x >>> 0)));
    		}
  ,�		return Len64((new $Uint64(0, x)));
    	};
	$pkg.Len = Len;
Lenmath/bits.Lenmath/bits.Len32math/bits.Len64 math/bits.Len8	math/bitsLen8 Len8�d	Len8 = function(x) {
		var x;
  -"		return (("\x00\x01\x02\x02\x03\x03\x03\x03\x04\x04\x04\x04\x04\x04\x04\x04\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b".charCodeAt(x) >> 0));
    	};
	$pkg.Len8 = Len8;
Len8math/bits.Len8 math/bits.Len16	math/bitsLen16 Len16��	Len16 = function(x) {
		var n, x, y;
		n = 0;
    		if (x >= 256) {
  -�			x = (y = (8), y < 32 ? (x >>> y) : 0) << 16 >>> 16;
  -�			n = 8;
    		}
    		n = n + (("\x00\x01\x02\x02\x03\x03\x03\x03\x04\x04\x04\x04\x04\x04\x04\x04\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b".charCodeAt(x) >> 0)) >> 0;
		return n;
    	};
	$pkg.Len16 = Len16;
Len16math/bits.Len16 math/bits.Len32	math/bitsLen32 Len32�j	Len32 = function(x) {
		var n, x, y, y$1;
		n = 0;
    		if (x >= 65536) {
  .�			x = (y = (16), y < 32 ? (x >>> y) : 0) >>> 0;
  .�			n = 16;
    		}
    		if (x >= 256) {
  .�			x = (y$1 = (8), y$1 < 32 ? (x >>> y$1) : 0) >>> 0;
  .�			n = n + (8) >> 0;
    		}
    		n = n + (("\x00\x01\x02\x02\x03\x03\x03\x03\x04\x04\x04\x04\x04\x04\x04\x04\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b".charCodeAt(x) >> 0)) >> 0;
		return n;
    	};
	$pkg.Len32 = Len32;
Len32math/bits.Len32 math/bits.Len64	math/bitsLen64 Len64�(	Len64 = function(x) {
		var n, x;
		n = 0;
    		if ((x.$high > 1 || (x.$high === 1 && x.$low >= 0))) {
  /�			x = $shiftRightUint64(x, (32));
  /�			n = 32;
    		}
    		if ((x.$high > 0 || (x.$high === 0 && x.$low >= 65536))) {
  /�			x = $shiftRightUint64(x, (16));
  /�			n = n + (16) >> 0;
    		}
    		if ((x.$high > 0 || (x.$high === 0 && x.$low >= 256))) {
  /�			x = $shiftRightUint64(x, (8));
  /�			n = n + (8) >> 0;
    		}
    		n = n + (("\x00\x01\x02\x02\x03\x03\x03\x03\x04\x04\x04\x04\x04\x04\x04\x04\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x06\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b".charCodeAt($flatten64(x)) >> 0)) >> 0;
		return n;
    	};
	$pkg.Len64 = Len64;
Len64math/bits.Len64 math/bits.Add	math/bitsAdd Add��	Add = function(x, y, carry) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, c32, c64, carry, carryOut, s32, s64, sum, x, y;
		sum = 0;
		carryOut = 0;
    		if (true) {
  1p			_tuple = Add32(((x >>> 0)), ((y >>> 0)), ((carry >>> 0)));
			s32 = _tuple[0];
			c32 = _tuple[1];
    			_tmp = ((s32 >>> 0));
			_tmp$1 = ((c32 >>> 0));
			sum = _tmp;
			carryOut = _tmp$1;
			return [sum, carryOut];
    		}
  1�		_tuple$1 = Add64((new $Uint64(0, x)), (new $Uint64(0, y)), (new $Uint64(0, carry)));
		s64 = _tuple$1[0];
		c64 = _tuple$1[1];
    		_tmp$2 = ((s64.$low >>> 0));
		_tmp$3 = ((c64.$low >>> 0));
		sum = _tmp$2;
		carryOut = _tmp$3;
		return [sum, carryOut];
    	};
	$pkg.Add = Add;
Addmath/bits.Addmath/bits.Add32math/bits.Add64 math/bits.Add64	math/bitsAdd64 Add64��	Add64 = function(x, y, carry) {
		var carry, carryOut, sum, x, x$1, x$2, x$3, x$4, y;
		sum = new $Uint64(0, 0);
		carryOut = new $Uint64(0, 0);
  5		sum = (x$1 = new $Uint64(x.$high + y.$high, x.$low + y.$low), new $Uint64(x$1.$high + carry.$high, x$1.$low + carry.$low));
  5�		carryOut = $shiftRightUint64(((x$2 = new $Uint64(x.$high & y.$high, (x.$low & y.$low) >>> 0), x$3 = (x$4 = new $Uint64(x.$high | y.$high, (x.$low | y.$low) >>> 0), new $Uint64(x$4.$high & ~sum.$high, (x$4.$low & ~sum.$low) >>> 0)), new $Uint64(x$2.$high | x$3.$high, (x$2.$low | x$3.$low) >>> 0))), 63);
  6,		return [sum, carryOut];
    	};
	$pkg.Add64 = Add64;
Add64math/bits.Add64 math/bits.Sub	math/bitsSub Sub��	Sub = function(x, y, borrow) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, b32, b64, borrow, borrowOut, d32, d64, diff, x, y;
		diff = 0;
		borrowOut = 0;
    		if (true) {
  7�			_tuple = Sub32(((x >>> 0)), ((y >>> 0)), ((borrow >>> 0)));
			d32 = _tuple[0];
			b32 = _tuple[1];
    			_tmp = ((d32 >>> 0));
			_tmp$1 = ((b32 >>> 0));
			diff = _tmp;
			borrowOut = _tmp$1;
			return [diff, borrowOut];
    		}
  8		_tuple$1 = Sub64((new $Uint64(0, x)), (new $Uint64(0, y)), (new $Uint64(0, borrow)));
		d64 = _tuple$1[0];
		b64 = _tuple$1[1];
    		_tmp$2 = ((d64.$low >>> 0));
		_tmp$3 = ((b64.$low >>> 0));
		diff = _tmp$2;
		borrowOut = _tmp$3;
		return [diff, borrowOut];
    	};
	$pkg.Sub = Sub;
Submath/bits.Submath/bits.Sub32math/bits.Sub64 math/bits.Sub32	math/bitsSub32 Sub32�G	Sub32 = function(x, y, borrow) {
		var borrow, borrowOut, diff, x, y;
		diff = 0;
		borrowOut = 0;
  9�		diff = (x - y >>> 0) - borrow >>> 0;
  :�		borrowOut = (((((((~x >>> 0) & y) >>> 0)) | ((((~(((x ^ y) >>> 0)) >>> 0) & diff) >>> 0))) >>> 0)) >>> 31 >>> 0;
  :�		return [diff, borrowOut];
    	};
	$pkg.Sub32 = Sub32;
Sub32math/bits.Sub32 math/bits.Sub64	math/bitsSub64 Sub64�	Sub64 = function(x, y, borrow) {
		var borrow, borrowOut, diff, x, x$1, x$2, x$3, x$4, x$5, x$6, y;
		diff = new $Uint64(0, 0);
		borrowOut = new $Uint64(0, 0);
  <Q		diff = (x$1 = new $Uint64(x.$high - y.$high, x.$low - y.$low), new $Uint64(x$1.$high - borrow.$high, x$1.$low - borrow.$low));
  <�		borrowOut = $shiftRightUint64(((x$2 = (x$3 = new $Uint64(~x.$high, ~x.$low >>> 0), new $Uint64(x$3.$high & y.$high, (x$3.$low & y.$low) >>> 0)), x$4 = (x$5 = (x$6 = new $Uint64(x.$high ^ y.$high, (x.$low ^ y.$low) >>> 0), new $Uint64(~x$6.$high, ~x$6.$low >>> 0)), new $Uint64(x$5.$high & diff.$high, (x$5.$low & diff.$low) >>> 0)), new $Uint64(x$2.$high | x$4.$high, (x$2.$low | x$4.$low) >>> 0))), 63);
  <�		return [diff, borrowOut];
    	};
	$pkg.Sub64 = Sub64;
Sub64math/bits.Sub64 math/bits.Mul	math/bitsMul Mul�T	Mul = function(x, y) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, h, h$1, hi, l, l$1, lo, x, y;
		hi = 0;
		lo = 0;
    		if (true) {
  >			_tuple = Mul32(((x >>> 0)), ((y >>> 0)));
			h = _tuple[0];
			l = _tuple[1];
    			_tmp = ((h >>> 0));
			_tmp$1 = ((l >>> 0));
			hi = _tmp;
			lo = _tmp$1;
			return [hi, lo];
    		}
  >C		_tuple$1 = Mul64((new $Uint64(0, x)), (new $Uint64(0, y)));
		h$1 = _tuple$1[0];
		l$1 = _tuple$1[1];
    		_tmp$2 = ((h$1.$low >>> 0));
		_tmp$3 = ((l$1.$low >>> 0));
		hi = _tmp$2;
		lo = _tmp$3;
		return [hi, lo];
    	};
	$pkg.Mul = Mul;
Mulmath/bits.Mulmath/bits.Mul32math/bits.Mul64 math/bits.Mul64	math/bitsMul64 Mul64��	Mul64 = function(x, y) {
		var hi, lo, t, w0, w1, w2, x, x$1, x$2, x$3, x$4, x$5, x$6, x0, x1, y, y0, y1;
		hi = new $Uint64(0, 0);
		lo = new $Uint64(0, 0);
  A		x0 = new $Uint64(x.$high & 0, (x.$low & 4294967295) >>> 0);
  A		x1 = $shiftRightUint64(x, 32);
  A"		y0 = new $Uint64(y.$high & 0, (y.$low & 4294967295) >>> 0);
  A4		y1 = $shiftRightUint64(y, 32);
  AC		w0 = $mul64(x0, y0);
  AR		t = (x$1 = $mul64(x1, y0), x$2 = $shiftRightUint64(w0, 32), new $Uint64(x$1.$high + x$2.$high, x$1.$low + x$2.$low));
  Ag		w1 = new $Uint64(t.$high & 0, (t.$low & 4294967295) >>> 0);
  Ay		w2 = $shiftRightUint64(t, 32);
  A�		w1 = (x$3 = $mul64(x0, y1), new $Uint64(w1.$high + x$3.$high, w1.$low + x$3.$low));
  A�		hi = (x$4 = (x$5 = $mul64(x1, y1), new $Uint64(x$5.$high + w2.$high, x$5.$low + w2.$low)), x$6 = $shiftRightUint64(w1, 32), new $Uint64(x$4.$high + x$6.$high, x$4.$low + x$6.$low));
  A�		lo = $mul64(x, y);
  A�		return [hi, lo];
    	};
	$pkg.Mul64 = Mul64;
Mul64math/bits.Mul64 math/bits.Div	math/bitsDiv Div��	Div = function(hi, lo, y) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, hi, lo, q, q$1, quo, r, r$1, rem, y;
		quo = 0;
		rem = 0;
    		if (true) {
  C7			_tuple = Div32(((hi >>> 0)), ((lo >>> 0)), ((y >>> 0)));
			q = _tuple[0];
			r = _tuple[1];
    			_tmp = ((q >>> 0));
			_tmp$1 = ((r >>> 0));
			quo = _tmp;
			rem = _tmp$1;
			return [quo, rem];
    		}
  C�		_tuple$1 = Div64((new $Uint64(0, hi)), (new $Uint64(0, lo)), (new $Uint64(0, y)));
		q$1 = _tuple$1[0];
		r$1 = _tuple$1[1];
    		_tmp$2 = ((q$1.$low >>> 0));
		_tmp$3 = ((r$1.$low >>> 0));
		quo = _tmp$2;
		rem = _tmp$3;
		return [quo, rem];
    	};
	$pkg.Div = Div;
Divmath/bits.Divmath/bits.Div32math/bits.Div64 math/bits.Div64	math/bitsDiv64 Div64�	Div64 = function(hi, lo, y) {
		var _tmp, _tmp$1, hi, lo, q0, q1, quo, rem, rhat, s, un0, un1, un10, un21, un32, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, yn0, yn1;
		quo = new $Uint64(0, 0);
		rem = new $Uint64(0, 0);
    		if ((y.$high === 0 && y.$low === 0)) {
  G4			$panic(divideError);
    		}
    		if ((y.$high < hi.$high || (y.$high === hi.$high && y.$low <= hi.$low))) {
  GZ			$panic(overflowError);
    		}
  Gt		s = ((LeadingZeros64(y) >>> 0));
  G�		y = $shiftLeft64(y, (s));
  G�		yn1 = $shiftRightUint64(y, 32);
  G�		yn0 = new $Uint64(y.$high & 0, (y.$low & 4294967295) >>> 0);
  G�		un32 = (x = $shiftLeft64(hi, s), x$1 = $shiftRightUint64(lo, ((64 - s >>> 0))), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
  G�		un10 = $shiftLeft64(lo, s);
  G�		un1 = $shiftRightUint64(un10, 32);
  G�		un0 = new $Uint64(un10.$high & 0, (un10.$low & 4294967295) >>> 0);
  H		q1 = $div64(un32, yn1, false);
  H'		rhat = (x$2 = $mul64(q1, yn1), new $Uint64(un32.$high - x$2.$high, un32.$low - x$2.$low));
  H?		while (true) {
			if (!((q1.$high > 1 || (q1.$high === 1 && q1.$low >= 0)) || (x$3 = $mul64(q1, yn0), x$4 = (x$5 = $mul64(new $Uint64(1, 0), rhat), new $Uint64(x$5.$high + un1.$high, x$5.$low + un1.$low)), (x$3.$high > x$4.$high || (x$3.$high === x$4.$high && x$3.$low > x$4.$low))))) { break; }
  Hn			q1 = (x$6 = new $Uint64(0, 1), new $Uint64(q1.$high - x$6.$high, q1.$low - x$6.$low));
  Hu			rhat = (x$7 = yn1, new $Uint64(rhat.$high + x$7.$high, rhat.$low + x$7.$low));
    			if ((rhat.$high > 1 || (rhat.$high === 1 && rhat.$low >= 0))) {
  H�				break;
    			}
    		}
  H�		un21 = (x$8 = (x$9 = $mul64(un32, new $Uint64(1, 0)), new $Uint64(x$9.$high + un1.$high, x$9.$low + un1.$low)), x$10 = $mul64(q1, y), new $Uint64(x$8.$high - x$10.$high, x$8.$low - x$10.$low));
  H�		q0 = $div64(un21, yn1, false);
  H�		rhat = (x$11 = $mul64(q0, yn1), new $Uint64(un21.$high - x$11.$high, un21.$low - x$11.$low));
  H�		while (true) {
			if (!((q0.$high > 1 || (q0.$high === 1 && q0.$low >= 0)) || (x$12 = $mul64(q0, yn0), x$13 = (x$14 = $mul64(new $Uint64(1, 0), rhat), new $Uint64(x$14.$high + un0.$high, x$14.$low + un0.$low)), (x$12.$high > x$13.$high || (x$12.$high === x$13.$high && x$12.$low > x$13.$low))))) { break; }
  I!			q0 = (x$15 = new $Uint64(0, 1), new $Uint64(q0.$high - x$15.$high, q0.$low - x$15.$low));
  I(			rhat = (x$16 = yn1, new $Uint64(rhat.$high + x$16.$high, rhat.$low + x$16.$low));
    			if ((rhat.$high > 1 || (rhat.$high === 1 && rhat.$low >= 0))) {
  IL				break;
    			}
    		}
    		_tmp = (x$17 = $mul64(q1, new $Uint64(1, 0)), new $Uint64(x$17.$high + q0.$high, x$17.$low + q0.$low));
		_tmp$1 = $shiftRightUint64(((x$18 = (x$19 = $mul64(un21, new $Uint64(1, 0)), new $Uint64(x$19.$high + un0.$high, x$19.$low + un0.$low)), x$20 = $mul64(q0, y), new $Uint64(x$18.$high - x$20.$high, x$18.$low - x$20.$low))), s);
		quo = _tmp;
		rem = _tmp$1;
		return [quo, rem];
    	};
	$pkg.Div64 = Div64;
Div64math/bits.Div64math/bits.LeadingZeros64math/bits.divideErrormath/bits.overflowError math/bits.Rem	math/bitsRem Rem�	Rem = function(hi, lo, y) {
		var hi, lo, y;
    		if (true) {
  Jj			return ((Rem32(((hi >>> 0)), ((lo >>> 0)), ((y >>> 0))) >>> 0));
    		}
  J�		return ((Rem64((new $Uint64(0, hi)), (new $Uint64(0, lo)), (new $Uint64(0, y))).$low >>> 0));
    	};
	$pkg.Rem = Rem;
Remmath/bits.Remmath/bits.Rem32math/bits.Rem64 math/bits.Rem64	math/bitsRem64 Rem64��	Rem64 = function(hi, lo, y) {
		var _tuple, hi, lo, rem, y;
  M�		_tuple = Div64($div64(hi, y, true), lo, y);
		rem = _tuple[1];
  M�		return rem;
    	};
	$pkg.Rem64 = Rem64;
Rem64math/bits.Div64math/bits.Rem64 ��{"Base":25111,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/math/bits/bits.go","Base":1,"Size":2008,"Lines":[0,14,27,28,41,42,59,60,91,109,111,112,154,185,187,188,194,257,326,328,329,371,448,474,492,507,525,540,555,576,594,609,624,650,662,670,672,673,729,806,827,874,882,884,885,934,1011,1020,1039,1060,1063,1076,1097,1100,1114,1137,1140,1141,1171,1180,1181,1197,1216,1244,1261,1280,1302,1320,1343,1344,1390,1397,1411,1432,1441,1445,1448,1449,1482,1500,1522,1523,1569,1576,1590,1611,1620,1624,1627,1628,1682,1684,1685,1723,1790,1859,1874,1903,1915,1964,1994,2006],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/math/bits/bits.go","Base":2010,"Size":17909,"Lines":[0,55,109,159,160,196,197,254,311,324,325,377,378,421,447,448,472,473,570,629,630,721,776,777,870,929,930,1023,1082,1083,1176,1235,1236,1261,1262,1320,1350,1351,1381,1440,1501,1503,1504,1542,1543,1573,1633,1697,1762,1823,1825,1826,1925,1958,1979,2015,2018,2053,2055,2056,2149,2184,2208,2210,2211,2306,2343,2356,2368,2371,2406,2466,2468,2469,2564,2601,2614,2626,2629,2664,2718,2720,2721,2816,2853,2866,2878,2881,2961,2965,3037,3109,3179,3254,3321,3394,3463,3510,3547,3601,3603,3604,3625,3626,3672,3718,3764,3802,3832,3833,3904,3933,3954,3986,3989,4020,4022,4023,4095,4126,4150,4152,4153,4226,4259,4304,4306,4307,4380,4413,4502,4504,4505,4578,4611,4666,4718,4772,4776,4809,4842,4875,4908,4942,4976,4996,5000,5060,5120,5181,5241,5302,5362,5388,5409,5437,5465,5492,5505,5519,5533,5561,5563,5564,5586,5587,5663,5719,5722,5787,5825,5846,5888,5891,5932,5934,5935,6005,6062,6065,6130,6171,6184,6208,6232,6234,6235,6307,6365,6368,6433,6477,6491,6515,6539,6541,6542,6614,6672,6675,6740,6784,6798,6822,6846,6848,6849,6921,6979,6982,7047,7091,7105,7129,7153,7155,7156,7175,7176,7243,7271,7292,7328,7331,7366,7368,7369,7437,7468,7487,7489,7490,7559,7593,7652,7654,7655,7724,7758,7779,7810,7841,7872,7898,7900,7901,7970,8004,8025,8056,8087,8118,8144,8146,8147,8171,8172,8245,8248,8313,8346,8367,8408,8411,8451,8453,8454,8529,8532,8597,8636,8656,8658,8659,8734,8737,8802,8841,8862,8893,8915,8917,8918,8993,8996,9061,9100,9121,9152,9185,9207,9209,9210,9225,9226,9321,9344,9365,9391,9394,9419,9421,9422,9518,9543,9567,9569,9570,9667,9698,9714,9724,9732,9735,9763,9765,9766,9863,9894,9911,9922,9931,9934,9950,9960,9969,9972,10000,10002,10003,10100,10131,10148,10159,10168,10171,10188,10199,10209,10212,10228,10238,10247,10250,10278,10280,10281,10307,10308,10382,10454,10505,10508,10573,10623,10644,10701,10731,10734,10790,10819,10821,10822,10898,10970,11021,11024,11089,11145,11193,11214,11246,11254,11256,11257,11333,11405,11456,11459,11524,11580,11601,11678,11753,11810,11857,11865,11867,11868,11900,11901,11974,12047,12099,12102,12167,12220,12241,12299,12329,12332,12389,12418,12420,12421,12496,12569,12621,12624,12689,12748,12771,12848,12925,13002,13042,13092,13100,13102,13103,13178,13251,13303,13306,13371,13430,13453,13486,13536,13544,13546,13547,13578,13579,13646,13712,13736,13739,13804,13840,13861,13899,13925,13928,13965,13990,13992,13993,14058,14124,14148,14151,14216,14258,14288,14327,14335,14337,14338,14404,14470,14494,14497,14562,14604,14630,14648,14663,14681,14696,14711,14732,14750,14765,14780,14806,14818,14826,14828,14829,14858,14859,14927,14995,15055,15131,15174,15195,15246,15272,15275,15325,15350,15352,15353,15423,15491,15551,15629,15678,15702,15725,15728,15762,15815,15823,15825,15826,15896,15964,16024,16102,16151,16160,16179,16200,16203,16216,16237,16240,16254,16277,16280,16281,16311,16320,16321,16337,16356,16384,16401,16420,16442,16460,16483,16484,16530,16537,16551,16572,16581,16585,16588,16589,16622,16640,16662,16663,16709,16716,16730,16751,16760,16764,16767,16768,16822,16824,16825,16895,16963,16985,17017,17038,17094,17097,17152,17154,17155,17225,17294,17321,17359,17417,17419,17420,17490,17559,17586,17624,17691,17760,17775,17804,17816,17865,17895,17907],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/math/bits/bits_errors.go","Base":19920,"Size":398,"Lines":[0,55,109,159,160,191,221,222,235,236,254,255,305,329,330,376],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/math/bits/bits_tables.go","Base":20319,"Size":4791,"Lines":[0,55,109,159,160,217,218,231,232,253,323,393,463,533,603,673,743,813,883,953,1023,1093,1163,1233,1303,1371,1372,1393,1463,1533,1603,1673,1743,1813,1883,1953,2023,2093,2163,2233,2303,2373,2443,2511,2512,2533,2603,2673,2743,2813,2883,2953,3023,3093,3163,3233,3303,3373,3443,3513,3583,3651,3652,3673,3743,3813,3883,3953,4023,4093,4163,4233,4303,4373,4443,4513,4583,4653,4723],"Infos":null}]}
 