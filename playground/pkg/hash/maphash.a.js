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
GoLinkname�� Implementation�� 	Reference��   �C-��hash/maphashmaphashinternal/unsafeheader��i �� _seedSeedstatebufnWritehHashbWriteStringsflushSum64initSeed	WriteByteSetSeedResetSumSize	BlockSizemaphashMakeSeed       �  $   '   '   *      ! JJJJJJJJJJJJT .  M &O      ( Q 4      6 S   < U   
 B W   K Y &     [   ' U ] '   ] _   c a &c  e  g g    l i   F    '  4
  T �  v !K~��  unsafeheader4	unsafeheader = $packages["internal/unsafeheader"];
��    		$r = unsafeheader.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Seed��	Seed = $pkg.Seed = $newType(0, $kindStruct, "maphash.Seed", true, "hash/maphash", true, function(s_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = new $Uint64(0, 0);
			return;
		}
		this.s = s_;
	});
o	Seed.init("hash/maphash", [{prop: "s", name: "s", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
Seedhash/maphash.Seed  Hash��	Hash = $pkg.Hash = $newType(0, $kindStruct, "maphash.Hash", true, "hash/maphash", true, function(_$0_, seed_, state_, buf_, n_) {
		this.$val = this;
		if (arguments.length === 0) {
			this._$0 = arrayType$1.zero();
			this.seed = new Seed.ptr(new $Uint64(0, 0));
			this.state = new Seed.ptr(new $Uint64(0, 0));
			this.buf = arrayType$2.zero();
			this.n = 0;
			return;
		}
		this._$0 = _$0_;
		this.seed = seed_;
		this.state = state_;
		this.buf = buf_;
		this.n = n_;
	});
�	ptrType.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "flush", name: "flush", pkg: "hash/maphash", typ: $funcType([], [], false)}, {prop: "Sum64", name: "Sum64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "initSeed", name: "initSeed", pkg: "hash/maphash", typ: $funcType([], [], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "Seed", name: "Seed", pkg: "", typ: $funcType([], [Seed], false)}, {prop: "SetSeed", name: "SetSeed", pkg: "", typ: $funcType([Seed], [], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}];
��	Hash.init("hash/maphash", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "seed", name: "seed", embedded: false, exported: false, typ: Seed, tag: ""}, {prop: "state", name: "state", embedded: false, exported: false, typ: Seed, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int, tag: ""}]);
Hashhash/maphash.Hashhash/maphash.Seedhash/maphash.arrayType$1hash/maphash.arrayType$2hash/maphash.funcTypehash/maphash.ptrTypehash/maphash.sliceType  	arrayType%	arrayType = $arrayType($Uint32, 4);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  funcType&	funcType = $funcType([], [], false);
funcType  arrayType$1(	arrayType$1 = $arrayType(funcType, 0);
arrayType$1hash/maphash.funcType  arrayType$2(	arrayType$2 = $arrayType($Uint8, 128);
arrayType$2  ptrType	ptrType = $ptrType(Hash);
ptrTypehash/maphash.Hash  hashkey		hashkey = arrayType.zero();
hashkeyhash/maphash.arrayTypehash/maphash.hashkey hash/maphash.inithash/maphashinit init��	init = function() {
		var _i, _ref, i;
   �		_ref = hashkey;
		_i = 0;
		while (true) {
			if (!(_i < 4)) { break; }
			i = _i;
   �			((i < 0 || i >= hashkey.length) ? ($throwRuntimeError("index out of range"), undefined) : hashkey[i] = runtime_fastrand());
    			_i++;
		}
   �		hashkey[0] = ((hashkey[0] | (1)) >>> 0);
   �		hashkey[1] = ((hashkey[1] | (1)) >>> 0);
  		hashkey[2] = ((hashkey[2] | (1)) >>> 0);
  		hashkey[3] = ((hashkey[3] | (1)) >>> 0);
    	};
    		init();
hash/maphash.hashkeyhash/maphash.inithash/maphash.runtime_fastrand hash/maphash._rthashhash/maphash_rthash _rthash��	_rthash = function(b, seed) {
		var b, hi, lo, seed, x, x$1;
    		if (b.$length === 0) {
  q			return seed;
    		}
  #		lo = memhash(b, ((seed.$low >>> 0)), ((b.$length >>> 0)));
  S		hi = memhash(b, (($shiftRightUint64(seed, 32).$low >>> 0)), ((b.$length >>> 0)));
  �		return (x = $shiftLeft64((new $Uint64(0, hi.constructor === Number ? hi : 1)), 32), x$1 = (new $Uint64(0, lo.constructor === Number ? lo : 1)), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
    	};
_rthashhash/maphash._rthashhash/maphash.memhash hash/maphash.memhashhash/maphashmemhash memhash��	memhash = function(p, seed, s) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, a, b, p, s, seed, t, x, x$1;
  #		_tuple = mix32((seed), (((s ^ hashkey[0]) >>> 0)));
		a = _tuple[0];
		b = _tuple[1];
    		if (s === 0) {
  d			return ((((a ^ b) >>> 0) >>> 0));
    		}
  ~		while (true) {
			if (!(s > 8)) { break; }
  �			a = (a ^ (readUnaligned32(p))) >>> 0;
  �			b = (b ^ (readUnaligned32(add(p, 4)))) >>> 0;
  �			_tuple$1 = mix32(a, b);
			a = _tuple$1[0];
			b = _tuple$1[1];
  �			p = add(p, 8);
  �			s = s - (8) >>> 0;
    		}
    		if (s >= 4) {
  			a = (a ^ (readUnaligned32(p))) >>> 0;
  !			b = (b ^ (readUnaligned32(add(p, s - 4 >>> 0)))) >>> 0;
    		} else {
  O			t = (((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0));
  c			t = (t | (((((x = add(p, s >>> 1 >>> 0), (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) >>> 0)) << 8 >>> 0))) >>> 0;
  �			t = (t | (((((x$1 = add(p, s - 1 >>> 0), (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0])) >>> 0)) << 16 >>> 0))) >>> 0;
  �			b = (b ^ (t)) >>> 0;
    		}
  �		_tuple$2 = mix32(a, b);
		a = _tuple$2[0];
		b = _tuple$2[1];
  �		_tuple$3 = mix32(a, b);
		a = _tuple$3[0];
		b = _tuple$3[1];
  �		return ((((a ^ b) >>> 0) >>> 0));
    	};
memhashhash/maphash.addhash/maphash.hashkeyhash/maphash.memhashhash/maphash.mix32hash/maphash.readUnaligned32 hash/maphash.addhash/maphashadd addL	add = function(p, x) {
		var p, x;
  		return $subslice(p, x);
    	};
addhash/maphash.add hash/maphash.readUnaligned32hash/maphashreadUnaligned32 readUnaligned32�A	readUnaligned32 = function(p) {
		var p;
  �		return ((((((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0)) | ((((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};
readUnaligned32hash/maphash.readUnaligned32 hash/maphash.mix32hash/maphashmix32 mix32��	mix32 = function(a, b) {
		var a, b, c;
  		c = $mul64((new $Uint64(0, ((a ^ (hashkey[1])) >>> 0))), (new $Uint64(0, ((b ^ (hashkey[2])) >>> 0))));
  O		return [((c.$low >>> 0)), (($shiftRightUint64(c, 32).$low >>> 0))];
    	};
mix32hash/maphash.hashkeyhash/maphash.mix32 (*hash/maphash.Hash).Write ��	Hash.ptr.prototype.Write = function(b) {
		var b, h, k, size;
		h = this;
  
l		size = b.$length;
  
|		while (true) {
			if (!((h.n + b.$length >> 0) > 128)) { break; }
  
�			k = $copySlice($subslice(new sliceType(h.buf), h.n), b);
  
�			h.n = 128;
  
�			b = $subslice(b, k);
  
�			h.flush();
    		}
  
�		h.n = h.n + ($copySlice($subslice(new sliceType(h.buf), h.n), b)) >> 0;
  		return [size, $ifaceNil];
    	};
	Hash.prototype.Write = function(b) { return this.$val.Write(b); };
Hashhash/maphash.Hashhash/maphash.flush~hash/maphash.sliceType  (*hash/maphash.Hash).WriteString �
	Hash.ptr.prototype.WriteString = function(s) {
		var h, k, s, size;
		h = this;
  t		size = s.length;
  �		while (true) {
			if (!((h.n + s.length >> 0) > 128)) { break; }
  �			k = $copyString($subslice(new sliceType(h.buf), h.n), s);
  �			h.n = 128;
  �			s = $substring(s, k);
  �			h.flush();
    		}
  �		h.n = h.n + ($copyString($subslice(new sliceType(h.buf), h.n), s)) >> 0;
  
		return [size, $ifaceNil];
    	};
	Hash.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
Hashhash/maphash.Hashhash/maphash.flush~hash/maphash.sliceType (*hash/maphash.Hash).flush �[	Hash.ptr.prototype.flush = function() {
		var h;
		h = this;
    		if (!((h.n === 128))) {
  Q			$panic(new $String("maphash: flush of partially full buffer"));
    		}
  �		h.initSeed();
  �		h.state.s = _rthash(new sliceType(h.buf), h.state.s);
  �		h.n = 0;
    	};
	Hash.prototype.flush = function() { return this.$val.flush(); };
Hashflush~hash/maphash.Hashhash/maphash._rthashhash/maphash.initSeed~hash/maphash.sliceType (*hash/maphash.Hash).Sum64 ��	Hash.ptr.prototype.Sum64 = function() {
		var h;
		h = this;
  		h.initSeed();
  		return _rthash($subslice(new sliceType(h.buf), 0, h.n), h.state.s);
    	};
	Hash.prototype.Sum64 = function() { return this.$val.Sum64(); };
Hashhash/maphash.Hashhash/maphash._rthashhash/maphash.initSeed~hash/maphash.sliceType (*hash/maphash.Hash).initSeed �N	Hash.ptr.prototype.initSeed = function() {
		var h, seed, x;
		h = this;
    		if ((x = h.seed.s, (x.$high === 0 && x.$low === 0))) {
  �			seed = $clone(MakeSeed(), Seed);
  �			Seed.copy(h.seed, seed);
  �			Seed.copy(h.state, seed);
    		}
    	};
	Hash.prototype.initSeed = function() { return this.$val.initSeed(); };
Hash	initSeed~hash/maphash.Hashhash/maphash.MakeSeedhash/maphash.Seed (*hash/maphash.Hash).WriteByte ��	Hash.ptr.prototype.WriteByte = function(b) {
		var b, h, x, x$1;
		h = this;
    		if (h.n === 128) {
  �			h.flush();
    		}
  �		(x = h.buf, x$1 = h.n, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = b));
  �		h.n = h.n + (1) >> 0;
  �		return $ifaceNil;
    	};
	Hash.prototype.WriteByte = function(b) { return this.$val.WriteByte(b); };
Hashhash/maphash.Hashhash/maphash.flush~ (*hash/maphash.Hash).Seed ��	Hash.ptr.prototype.Seed = function() {
		var h;
		h = this;
  !�		h.initSeed();
  !�		return h.seed;
    	};
	Hash.prototype.Seed = function() { return this.$val.Seed(); };
Hashhash/maphash.Hashhash/maphash.initSeed~ (*hash/maphash.Hash).SetSeed �}	Hash.ptr.prototype.SetSeed = function(seed) {
		var h, seed, x;
		h = this;
    		if ((x = seed.s, (x.$high === 0 && x.$low === 0))) {
  #			$panic(new $String("maphash: use of uninitialized Seed"));
    		}
  #@		Seed.copy(h.seed, seed);
  #O		Seed.copy(h.state, seed);
  #_		h.n = 0;
    	};
	Hash.prototype.SetSeed = function(seed) { return this.$val.SetSeed(seed); };
Hashhash/maphash.Hashhash/maphash.Seed (*hash/maphash.Hash).Reset ��	Hash.ptr.prototype.Reset = function() {
		var h;
		h = this;
  #�		h.initSeed();
  #�		Seed.copy(h.state, h.seed);
  #�		h.n = 0;
    	};
	Hash.prototype.Reset = function() { return this.$val.Reset(); };
Hashhash/maphash.Hashhash/maphash.Seedhash/maphash.initSeed~ hash/maphash.MakeSeedhash/maphashMakeSeed MakeSeed�A	MakeSeed = function() {
		var _tmp, _tmp$1, s1, s2, x, x$1;
  &�		_tmp = new $Uint64(0, 0);
		_tmp$1 = new $Uint64(0, 0);
		s1 = _tmp;
		s2 = _tmp$1;
  &�		while (true) {
  &�			s1 = (new $Uint64(0, runtime_fastrand()));
  &�			s2 = (new $Uint64(0, runtime_fastrand()));
    			if (!((x = new $Uint64(s1.$high | s2.$high, (s1.$low | s2.$low) >>> 0), (x.$high === 0 && x.$low === 0)))) {
  '�				break;
    			}
    		}
  '�		return new Seed.ptr((x$1 = $shiftLeft64(s1, 32), new $Uint64(x$1.$high + s2.$high, x$1.$low + s2.$low)));
    	};
	$pkg.MakeSeed = MakeSeed;
MakeSeedhash/maphash.MakeSeedhash/maphash.Seedhash/maphash.runtime_fastrand hash/maphash.runtime_fastrandhash/maphashruntime_fastrand runtime_fastrand}	runtime_fastrand = function() {
		$throwRuntimeError("native function not implemented: hash/maphash.runtime_fastrand");
	};
runtime_fastrandhash/maphash.runtime_fastrand hash/maphash.rthashhash/maphashrthash rthash��	rthash = function(ptr, len, seed) {
		var hi, len, lo, ptr, seed, x, x$1, x$2;
    		if (len === 0) {
  (P			return seed;
    		}
    		if (false) {
  )9			return ((x = runtime_memhash((ptr), ((seed.$low >>> 0)), ((len >>> 0))), new $Uint64(0, x.constructor === Number ? x : 1)));
    		}
  )�		lo = runtime_memhash((ptr), ((seed.$low >>> 0)), ((len >>> 0)));
  )�		hi = runtime_memhash((ptr), (($shiftRightUint64(seed, 32).$low >>> 0)), ((len >>> 0)));
  *$		return (x$1 = $shiftLeft64((new $Uint64(0, hi.constructor === Number ? hi : 1)), 32), x$2 = (new $Uint64(0, lo.constructor === Number ? lo : 1)), new $Uint64(x$1.$high | x$2.$high, (x$1.$low | x$2.$low) >>> 0));
    	};
rthashhash/maphash.rthashhash/maphash.runtime_memhash hash/maphash.runtime_memhashhash/maphashruntime_memhash runtime_memhash{	runtime_memhash = function() {
		$throwRuntimeError("native function not implemented: hash/maphash.runtime_memhash");
	};
runtime_memhashhash/maphash.runtime_memhash (*hash/maphash.Hash).Sum �:	Hash.ptr.prototype.Sum = function(b) {
		var b, h, x;
		h = this;
  +�		x = h.Sum64();
  +�		return $append(b, (($shiftRightUint64(x, 0).$low << 24 >>> 24)), (($shiftRightUint64(x, 8).$low << 24 >>> 24)), (($shiftRightUint64(x, 16).$low << 24 >>> 24)), (($shiftRightUint64(x, 24).$low << 24 >>> 24)), (($shiftRightUint64(x, 32).$low << 24 >>> 24)), (($shiftRightUint64(x, 40).$low << 24 >>> 24)), (($shiftRightUint64(x, 48).$low << 24 >>> 24)), (($shiftRightUint64(x, 56).$low << 24 >>> 24)));
    	};
	Hash.prototype.Sum = function(b) { return this.$val.Sum(b); };
Hashhash/maphash.Hash (*hash/maphash.Hash).Size ��	Hash.ptr.prototype.Size = function() {
		var h;
		h = this;
  ,h		return 8;
    	};
	Hash.prototype.Size = function() { return this.$val.Size(); };
Hashhash/maphash.Hash (*hash/maphash.Hash).BlockSize ��	Hash.ptr.prototype.BlockSize = function() {
		var h;
		h = this;
  ,�		return 128;
    	};
	Hash.prototype.BlockSize = function() { return this.$val.BlockSize(); };
Hashhash/maphash.Hash �}{"Base":11471,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/maphash/maphash.go","Base":1,"Size":3395,"Lines":[0,14,27,28,44,45,97,119,120,134,160,194,197,249,266,283,300,302,303,348,366,380,383,457,535,545,593,645,681,683,684,759,837,859,862,942,1020,1034,1037,1078,1257,1313,1364,1377,1401,1404,1427,1453,1487,1508,1524,1527,1540,1566,1602,1612,1632,1668,1704,1713,1716,1736,1756,1779,1781,1782,1820,1834,1836,1837,1896,1936,2013,2015,2016,2059,2125,2160,2162,2163,2166,2240,2314,2389,2399,2400,2475,2545,2581,2584,2585,2620,2666,2682,2713,2741,2760,2772,2784,2787,2816,2834,2836,2837,2878,2930,2946,2977,3005,3024,3036,3048,3051,3080,3098,3100,3101,3126,3150,3201,3204,3218,3260,3269,3271,3272,3307,3339,3353,3393],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/maphash/maphash.go","Base":3397,"Size":8073,"Lines":[0,55,109,159,160,222,298,366,434,520,523,579,643,646,662,663,672,697,707,709,710,778,840,898,968,1013,1016,1067,1151,1154,1227,1277,1296,1306,1308,1309,1362,1365,1412,1467,1527,1570,1573,1637,1706,1775,1778,1814,1874,1902,1905,1934,1937,2007,2071,2074,2154,2215,2285,2304,2343,2399,2457,2503,2553,2555,2556,2605,2677,2735,2805,2825,2826,2867,2952,3027,3104,3136,3164,3184,3205,3221,3238,3241,3243,3244,3302,3373,3414,3438,3450,3453,3469,3476,3488,3490,3491,3545,3650,3696,3712,3752,3787,3863,3895,3923,3934,3955,3996,4016,4020,4032,4044,4107,4110,4205,4228,4243,4268,4317,4336,4340,4343,4362,4381,4395,4413,4415,4416,4489,4600,4652,4707,4723,4755,4783,4794,4815,4835,4839,4851,4863,4866,4889,4904,4929,4996,5043,5062,5066,5069,5088,5102,5120,5122,5123,5155,5184,5198,5213,5215,5216,5289,5326,5385,5463,5523,5559,5577,5623,5626,5641,5657,5666,5668,5669,5709,5741,5766,5780,5798,5807,5809,5810,5843,5868,5892,5943,5946,5960,6007,6016,6018,6019,6079,6138,6172,6175,6234,6292,6350,6382,6396,6438,6440,6441,6480,6503,6522,6529,6563,6597,6656,6706,6724,6733,6737,6740,6769,6771,6772,6820,6851,6852,6906,6921,6935,6938,6995,7053,7117,7154,7237,7240,7313,7390,7426,7428,7429,7475,7489,7553,7554,7607,7648,7704,7742,7758,7776,7790,7804,7819,7834,7849,7864,7879,7894,7896,7897,7943,7982,7983,8020],"Infos":null}]}
runtimefastrand hash/maphashruntime_fastrand  runtimememhash hash/maphashruntime_memhash   