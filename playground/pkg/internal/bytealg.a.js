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
GoLinkname�� Implementation�� 	Reference��   �=���internal/bytealgbytealginternal/cpu�i ��ab csnsepsubstrbytealgCompareCountCountStringCutoverEqualHashStrHashStrBytes
HashStrRevHashStrRevBytesIndex	IndexByteIndexByteStringIndexRabinKarpIndexRabinKarpBytesIndexStringMaxBruteForceMaxLenPrimeRKF        F  0   F     F  	  F   Y Y   F   	 	 F  w 	 	 F   	 	 F  � 	 	 F   � �  F  �   F     F     F  � �  F      C  V C � � &, 8.@;FINY[gfwv�|��������������� cpu"	cpu = $packages["internal/cpu"];
��    		$r = cpu.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ptrType	ptrType = $ptrType($Uint8);
ptrType  		$pkg.MaxLen = 0;
MaxLeninternal/bytealg.MaxLen internal/bytealg.Equalinternal/bytealgEqual Equal�N	Equal = function(a, b) {
		var _i, _ref, a, b, c, i;
    		if (!((a.$length === b.$length))) {
   f			return false;
    		}
   w		_ref = a;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!((c === ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i])))) {
   �				return false;
    			}
    			_i++;
		}
   �		return true;
    	};
	$pkg.Equal = Equal;
Equalinternal/bytealg.Equal internal/bytealg.HashStrBytesinternal/bytealgHashStrBytes HashStrBytes��	HashStrBytes = function(sep) {
		var _tmp, _tmp$1, hash, i, i$1, pow, sep, sq;
  �		hash = 0;
  �		i = 0;
		while (true) {
			if (!(i < sep.$length)) { break; }
  �			hash = ($imul(hash, 16777619) >>> 0) + ((((i < 0 || i >= sep.$length) ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + i]) >>> 0)) >>> 0;
  �			i = i + (1) >> 0;
    		}
  		_tmp = 1;
		_tmp$1 = 16777619;
		pow = _tmp;
		sq = _tmp$1;
  1		i$1 = sep.$length;
		while (true) {
			if (!(i$1 > 0)) { break; }
    			if (!(((i$1 & 1) === 0))) {
  d				pow = $imul(pow, (sq)) >>> 0;
    			}
  t			sq = $imul(sq, (sq)) >>> 0;
  G			i$1 = (i$1 >> $min((1), 31)) >> 0;
    		}
  �		return [hash, pow];
    	};
	$pkg.HashStrBytes = HashStrBytes;
HashStrBytesinternal/bytealg.HashStrBytes internal/bytealg.HashStrinternal/bytealgHashStr HashStr��	HashStr = function(sep) {
		var _tmp, _tmp$1, hash, i, i$1, pow, sep, sq;
  ,		hash = 0;
  C		i = 0;
		while (true) {
			if (!(i < sep.length)) { break; }
  a			hash = ($imul(hash, 16777619) >>> 0) + ((sep.charCodeAt(i) >>> 0)) >>> 0;
  Y			i = i + (1) >> 0;
    		}
  �		_tmp = 1;
		_tmp$1 = 16777619;
		pow = _tmp;
		sq = _tmp$1;
  �		i$1 = sep.length;
		while (true) {
			if (!(i$1 > 0)) { break; }
    			if (!(((i$1 & 1) === 0))) {
  �				pow = $imul(pow, (sq)) >>> 0;
    			}
  �			sq = $imul(sq, (sq)) >>> 0;
  �			i$1 = (i$1 >> $min((1), 31)) >> 0;
    		}
  �		return [hash, pow];
    	};
	$pkg.HashStr = HashStr;
HashStrinternal/bytealg.HashStr  internal/bytealg.HashStrRevBytesinternal/bytealgHashStrRevBytes HashStrRevBytes�	HashStrRevBytes = function(sep) {
		var _tmp, _tmp$1, hash, i, i$1, pow, sep, sq;
  �		hash = 0;
  �		i = sep.$length - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
  	
			hash = ($imul(hash, 16777619) >>> 0) + ((((i < 0 || i >= sep.$length) ? ($throwRuntimeError("index out of range"), undefined) : sep.$array[sep.$offset + i]) >>> 0)) >>> 0;
  				i = i - (1) >> 0;
    		}
  	7		_tmp = 1;
		_tmp$1 = 16777619;
		pow = _tmp;
		sq = _tmp$1;
  	X		i$1 = sep.$length;
		while (true) {
			if (!(i$1 > 0)) { break; }
    			if (!(((i$1 & 1) === 0))) {
  	�				pow = $imul(pow, (sq)) >>> 0;
    			}
  	�			sq = $imul(sq, (sq)) >>> 0;
  	n			i$1 = (i$1 >> $min((1), 31)) >> 0;
    		}
  	�		return [hash, pow];
    	};
	$pkg.HashStrRevBytes = HashStrRevBytes;
HashStrRevBytes internal/bytealg.HashStrRevBytes internal/bytealg.HashStrRevinternal/bytealg
HashStrRev 
HashStrRev��	HashStrRev = function(sep) {
		var _tmp, _tmp$1, hash, i, i$1, pow, sep, sq;
  
o		hash = 0;
  
�		i = sep.length - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
  
�			hash = ($imul(hash, 16777619) >>> 0) + ((sep.charCodeAt(i) >>> 0)) >>> 0;
  
�			i = i - (1) >> 0;
    		}
  
�		_tmp = 1;
		_tmp$1 = 16777619;
		pow = _tmp;
		sq = _tmp$1;
  
�		i$1 = sep.length;
		while (true) {
			if (!(i$1 > 0)) { break; }
    			if (!(((i$1 & 1) === 0))) {
  *				pow = $imul(pow, (sq)) >>> 0;
    			}
  :			sq = $imul(sq, (sq)) >>> 0;
  			i$1 = (i$1 >> $min((1), 31)) >> 0;
    		}
  G		return [hash, pow];
    	};
	$pkg.HashStrRev = HashStrRev;

HashStrRevinternal/bytealg.HashStrRev $internal/bytealg.IndexRabinKarpBytesinternal/bytealgIndexRabinKarpBytes IndexRabinKarpBytes��	IndexRabinKarpBytes = function(s, sep) {
		var _tuple, h, hashsep, i, i$1, n, pow, s, sep, x;
  1		_tuple = HashStrBytes(sep);
		hashsep = _tuple[0];
		pow = _tuple[1];
  T		n = sep.$length;
  g		h = 0;
  u		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  �			h = ($imul(h, 16777619) >>> 0) + ((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) >>> 0)) >>> 0;
  �			i = i + (1) >> 0;
    		}
    		if ((h === hashsep) && Equal($subslice(s, 0, n), sep)) {
  �			return 0;
    		}
  �		i$1 = n;
		while (true) {
			if (!(i$1 < s.$length)) { break; }
  �			h = $imul(h, (16777619)) >>> 0;
  			h = h + (((((i$1 < 0 || i$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i$1]) >>> 0))) >>> 0;
  "			h = h - (($imul(pow, (((x = i$1 - n >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) >>> 0))) >>> 0)) >>> 0;
  >			i$1 = i$1 + (1) >> 0;
    			if ((h === hashsep) && Equal($subslice(s, (i$1 - n >> 0), i$1), sep)) {
  q				return i$1 - n >> 0;
    			}
    		}
  �		return -1;
    	};
	$pkg.IndexRabinKarpBytes = IndexRabinKarpBytes;
IndexRabinKarpBytesinternal/bytealg.Equalinternal/bytealg.HashStrBytes$internal/bytealg.IndexRabinKarpBytes internal/bytealg.IndexRabinKarpinternal/bytealgIndexRabinKarp IndexRabinKarp��	IndexRabinKarp = function(s, substr) {
		var _tuple, h, hashss, i, i$1, n, pow, s, substr;
  b		_tuple = HashStr(substr);
		hashss = _tuple[0];
		pow = _tuple[1];
  �		n = substr.length;
  �		h = 0;
  �		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  �			h = ($imul(h, 16777619) >>> 0) + ((s.charCodeAt(i) >>> 0)) >>> 0;
  �			i = i + (1) >> 0;
    		}
    		if ((h === hashss) && $substring(s, 0, n) === substr) {
  			return 0;
    		}
  		i$1 = n;
		while (true) {
			if (!(i$1 < s.length)) { break; }
  -			h = $imul(h, (16777619)) >>> 0;
  <			h = h + (((s.charCodeAt(i$1) >>> 0))) >>> 0;
  P			h = h - (($imul(pow, ((s.charCodeAt((i$1 - n >> 0)) >>> 0))) >>> 0)) >>> 0;
  l			i$1 = i$1 + (1) >> 0;
    			if ((h === hashss) && $substring(s, (i$1 - n >> 0), i$1) === substr) {
  �				return i$1 - n >> 0;
    			}
    		}
  �		return -1;
    	};
	$pkg.IndexRabinKarp = IndexRabinKarp;
IndexRabinKarpinternal/bytealg.HashStrinternal/bytealg.IndexRabinKarp internal/bytealg.Compareinternal/bytealgCompare Compare�9	Compare = function(a, b) {
		var _tmp, _tmp$1, a, b, c1, c2, i, l, $s;
		/* */ $s = 0; s: while (true) { switch ($s) { case 0:
  �		l = a.$length;
    		if (b.$length < l) {
  �			l = b.$length;
    		}
  �		/* */ if ((l === 0) || $indexPtr(a.$array, a.$offset + 0, ptrType) === $indexPtr(b.$array, b.$offset + 0, ptrType)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((l === 0) || $indexPtr(a.$array, a.$offset + 0, ptrType) === $indexPtr(b.$array, b.$offset + 0, ptrType)) { */ case 1:
  �			/* goto samebytes */ $s = 3; continue;
    		/* } */ case 2:
  �		i = 0;
		while (true) {
			if (!(i < l)) { break; }
  			_tmp = ((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i]);
			_tmp$1 = ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]);
			c1 = _tmp;
			c2 = _tmp$1;
    			if (c1 < c2) {
  :				$s = -1; return -1;
    			}
    			if (c1 > c2) {
  Z				$s = -1; return 1;
    			}
  			i = i + (1) >> 0;
    		}
  k		/* samebytes: */ case 3:
    		if (a.$length < b.$length) {
  �			$s = -1; return -1;
    		}
    		if (a.$length > b.$length) {
  �			$s = -1; return 1;
    		}
  �		$s = -1; return 0;
    		/* */ } return; }
	};
	$pkg.Compare = Compare;
Compareinternal/bytealg.Compareinternal/bytealg.ptrType "internal/bytealg.runtime_cmpstringinternal/bytealgruntime_cmpstring runtime_cmpstring�T	runtime_cmpstring = function(a, b) {
		var _tmp, _tmp$1, a, b, c1, c2, i, l;
  *		l = a.length;
    		if (b.length < l) {
  I			l = b.length;
    		}
  \		i = 0;
		while (true) {
			if (!(i < l)) { break; }
  s			_tmp = a.charCodeAt(i);
			_tmp$1 = b.charCodeAt(i);
			c1 = _tmp;
			c2 = _tmp$1;
    			if (c1 < c2) {
  �				return -1;
    			}
    			if (c1 > c2) {
  �				return 1;
    			}
  k			i = i + (1) >> 0;
    		}
    		if (a.length < b.length) {
  �			return -1;
    		}
    		if (a.length > b.length) {
  			return 1;
    		}
  		return 0;
    	};
runtime_cmpstring"internal/bytealg.runtime_cmpstring internal/bytealg.Countinternal/bytealgCount Count��	Count = function(b, c) {
		var _i, _ref, b, c, n, x;
  �		n = 0;
  �		_ref = b;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (x === c) {
  �				n = n + (1) >> 0;
    			}
    			_i++;
		}
  �		return n;
    	};
	$pkg.Count = Count;
Countinternal/bytealg.Count internal/bytealg.CountStringinternal/bytealgCountString CountString�*	CountString = function(s, c) {
		var c, i, n, s;
  �		n = 0;
  		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) === c) {
  0				n = n + (1) >> 0;
    			}
  			i = i + (1) >> 0;
    		}
  <		return n;
    	};
	$pkg.CountString = CountString;
CountStringinternal/bytealg.CountString (internal/bytealg.abigen_runtime_memequalinternal/bytealgabigen_runtime_memequal abigen_runtime_memequal��	abigen_runtime_memequal = function() {
		$throwRuntimeError("native function not implemented: internal/bytealg.abigen_runtime_memequal");
	};
abigen_runtime_memequal(internal/bytealg.abigen_runtime_memequal /internal/bytealg.abigen_runtime_memequal_varleninternal/bytealgabigen_runtime_memequal_varlen abigen_runtime_memequal_varlen��	abigen_runtime_memequal_varlen = function() {
		$throwRuntimeError("native function not implemented: internal/bytealg.abigen_runtime_memequal_varlen");
	};
abigen_runtime_memequal_varlen/internal/bytealg.abigen_runtime_memequal_varlen internal/bytealg.Indexinternal/bytealgIndex Indexq	Index = function(a, b) {
		var a, b;
  �		$panic(new $String("unimplemented"));
    	};
	$pkg.Index = Index;
Indexinternal/bytealg.Index internal/bytealg.IndexStringinternal/bytealgIndexString IndexString��	IndexString = function(a, b) {
		var a, b;
  k		$panic(new $String("unimplemented"));
    	};
	$pkg.IndexString = IndexString;
IndexStringinternal/bytealg.IndexString internal/bytealg.Cutoverinternal/bytealgCutover Cutoverq	Cutover = function(n) {
		var n;
  n		$panic(new $String("unimplemented"));
    	};
	$pkg.Cutover = Cutover;
Cutoverinternal/bytealg.Cutover internal/bytealg.IndexByteinternal/bytealg	IndexByte 	IndexByte��	IndexByte = function(b, c) {
		var _i, _ref, b, c, i, x;
  !W		_ref = b;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (x === c) {
  !~				return i;
    			}
    			_i++;
		}
  !�		return -1;
    	};
	$pkg.IndexByte = IndexByte;
	IndexByteinternal/bytealg.IndexByte  internal/bytealg.IndexByteStringinternal/bytealgIndexByteString IndexByteString�	IndexByteString = function(s, c) {
		var c, i, s;
  !�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) === c) {
  !�				return i;
    			}
  !�			i = i + (1) >> 0;
    		}
  "		return -1;
    	};
	$pkg.IndexByteString = IndexByteString;
IndexByteString internal/bytealg.IndexByteString �
B{"Base":8730,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/bytealg.go","Base":1,"Size":195,"Lines":[0,14,27,28,44,45,76,99,114,117,140,157,173,177,180,193],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/bytealg.go","Base":197,"Size":3832,"Lines":[0,55,109,159,160,176,177,186,202,212,214,215,273,281,336,392,447,504,505,558,559,619,621,622,710,756,771,772,871,965,1010,1011,1070,1095,1096,1164,1207,1256,1275,1308,1347,1350,1383,1420,1436,1449,1453,1464,1467,1485,1487,1488,1551,1594,1638,1657,1690,1729,1732,1765,1802,1818,1831,1835,1846,1849,1867,1869,1870,1936,2006,2058,2077,2115,2154,2157,2190,2227,2243,2256,2260,2271,2274,2292,2294,2295,2356,2426,2473,2492,2530,2569,2572,2605,2642,2658,2671,2675,2686,2689,2707,2709,2710,2797,2855,2901,2923,2958,2973,2987,3013,3044,3047,3087,3098,3101,3128,3143,3163,3191,3197,3241,3257,3261,3264,3275,3277,3278,3360,3418,3462,3484,3516,3534,3548,3574,3605,3608,3645,3656,3659,3686,3701,3721,3749,3755,3796,3812,3816,3819,3830],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/compare_generic.go","Base":4030,"Size":1123,"Lines":[0,55,109,159,160,289,384,385,401,402,439,440,472,485,502,515,518,549,566,569,595,618,633,646,650,665,678,682,685,696,718,730,733,755,767,770,780,782,783,833,875,888,905,918,921,947,970,985,998,1002,1017,1030,1034,1037,1059,1071,1074,1096,1108,1111,1121],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/count_generic.go","Base":5154,"Size":549,"Lines":[0,55,109,159,160,240,301,302,318,319,354,362,385,399,406,410,413,423,425,426,467,475,506,523,530,534,537,547],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/equal_generic.go","Base":5704,"Size":628,"Lines":[0,55,109,159,160,176,177,210,261,312,315,354,394,443,474,548,595,626],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/equal_native.go","Base":6333,"Size":789,"Lines":[0,55,109,159,160,176,177,193,194,256,323,335,336,417,480,532,533,588,657,658,727],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/index_generic.go","Base":7123,"Size":948,"Lines":[0,55,109,159,160,220,267,268,284,285,309,310,402,437,467,491,493,494,592,627,663,687,689,690,764,799,845,896,922,946],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/bytealg/indexbyte_generic.go","Base":8072,"Size":657,"Lines":[0,55,109,159,160,301,405,406,422,423,462,485,499,511,515,518,529,531,532,577,608,625,637,641,644,655],"Infos":null}]}
runtimememequal internal/bytealgabigen_runtime_memequal  runtimememequal_varlen internal/bytealgabigen_runtime_memequal_varlen   