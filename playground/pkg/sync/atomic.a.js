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
GoLinkname�� Implementation�� 	Reference��   �DM��sync/atomicatomicgithub.com/gopherjs/gopherjs/js��i ��addrdelta oldnewvalvLoadValuexStoreSwapCompareAndSwapswappedcheckNewopatomicAddInt32AddInt64	AddUint32	AddUint64
AddUintptrCompareAndSwapInt32CompareAndSwapInt64CompareAndSwapPointerCompareAndSwapUint32CompareAndSwapUint64CompareAndSwapUintptr	LoadInt32	LoadInt64LoadPointer
LoadUint32
LoadUint64LoadUintptr
StoreInt32
StoreInt64StorePointerStoreUint32StoreUint64StoreUintptr	SwapInt32	SwapInt64SwapPointer
SwapUint32
SwapUint64SwapUintptrF       F   0   	F   @ 	 	 
F   P 
 
 F   `   F   p     F   �     F   �     	F   � 	 	   
F   � 
 
   F   �     F   �  F   �  F   �  	F   � 	 
F   � 
 F   �  F   �   F   �   F   �   	F   � 	  
F   � 
  F   �   F   �   F   �   F   �   	F   � 	 	 
F   � 
 
 F   �      �  �  �  �    �  �  T �  �  %� ' � �   - � � �  2 � � � A   I � R �  U \en"x2�B�R�e�y�������������������������������������������) js4	js = $packages["github.com/gopherjs/gopherjs/js"];
��    		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Value��	Value = $pkg.Value = $newType(0, $kindStruct, "atomic.Value", true, "sync/atomic", true, function(v_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.v = $ifaceNil;
			return;
		}
		this.v = v_;
	});
�	ptrType.methods = [{prop: "Load", name: "Load", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Store", name: "Store", pkg: "", typ: $funcType([$emptyInterface], [], false)}, {prop: "Swap", name: "Swap", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface], false)}, {prop: "CompareAndSwap", name: "CompareAndSwap", pkg: "", typ: $funcType([$emptyInterface, $emptyInterface], [$Bool], false)}, {prop: "checkNew", name: "checkNew", pkg: "sync/atomic", typ: $funcType([$String, $emptyInterface], [], false)}];
w	Value.init("sync/atomic", [{prop: "v", name: "v", embedded: false, exported: false, typ: $emptyInterface, tag: ""}]);
Valuesync/atomic.Valuesync/atomic.ptrType  
ifaceWords�	ifaceWords = $pkg.ifaceWords = $newType(0, $kindStruct, "atomic.ifaceWords", true, "sync/atomic", false, function(typ_, data_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.typ = 0;
			this.data = 0;
			return;
		}
		this.typ = typ_;
		this.data = data_;
	});
��	ifaceWords.init("sync/atomic", [{prop: "typ", name: "typ", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "data", name: "data", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);

ifaceWordssync/atomic.ifaceWords  ptrType	ptrType = $ptrType(Value);
ptrTypesync/atomic.Value sync/atomic.SwapInt32sync/atomic	SwapInt32 	SwapInt32��	SwapInt32 = function(addr, new$1) {
		var addr, new$1, old;
   �		old = addr.$get();
   �		addr.$set(new$1);
   �		return old;
    	};
	$pkg.SwapInt32 = SwapInt32;
	SwapInt32sync/atomic.SwapInt32 sync/atomic.SwapInt64sync/atomic	SwapInt64 	SwapInt64��	SwapInt64 = function(addr, new$1) {
		var addr, new$1, old;
   �		old = addr.$get();
   �		addr.$set(new$1);
  		return old;
    	};
	$pkg.SwapInt64 = SwapInt64;
	SwapInt64sync/atomic.SwapInt64 sync/atomic.SwapUint32sync/atomic
SwapUint32 
SwapUint32��	SwapUint32 = function(addr, new$1) {
		var addr, new$1, old;
  M		old = addr.$get();
  [		addr.$set(new$1);
  h		return old;
    	};
	$pkg.SwapUint32 = SwapUint32;

SwapUint32sync/atomic.SwapUint32 sync/atomic.SwapUint64sync/atomic
SwapUint64 
SwapUint64��	SwapUint64 = function(addr, new$1) {
		var addr, new$1, old;
  �		old = addr.$get();
  �		addr.$set(new$1);
  �		return old;
    	};
	$pkg.SwapUint64 = SwapUint64;

SwapUint64sync/atomic.SwapUint64 sync/atomic.SwapUintptrsync/atomicSwapUintptr SwapUintptr��	SwapUintptr = function(addr, new$1) {
		var addr, new$1, old;
  		old = addr.$get();
  		addr.$set(new$1);
  &		return old;
    	};
	$pkg.SwapUintptr = SwapUintptr;
SwapUintptrsync/atomic.SwapUintptr sync/atomic.SwapPointersync/atomicSwapPointer SwapPointer��	SwapPointer = function(addr, new$1) {
		var addr, new$1, old;
  �		old = addr.$get();
  �		addr.$set(new$1);
  �		return old;
    	};
	$pkg.SwapPointer = SwapPointer;
SwapPointersync/atomic.SwapPointer sync/atomic.CompareAndSwapInt32sync/atomicCompareAndSwapInt32 CompareAndSwapInt32��	CompareAndSwapInt32 = function(addr, old, new$1) {
		var addr, new$1, old;
    		if (addr.$get() === old) {
  �			addr.$set(new$1);
  
			return true;
    		}
  		return false;
    	};
	$pkg.CompareAndSwapInt32 = CompareAndSwapInt32;
CompareAndSwapInt32sync/atomic.CompareAndSwapInt32 sync/atomic.CompareAndSwapInt64sync/atomicCompareAndSwapInt64 CompareAndSwapInt64�&	CompareAndSwapInt64 = function(addr, old, new$1) {
		var addr, new$1, old, x;
    		if ((x = addr.$get(), (x.$high === old.$high && x.$low === old.$low))) {
  |			addr.$set(new$1);
  �			return true;
    		}
  �		return false;
    	};
	$pkg.CompareAndSwapInt64 = CompareAndSwapInt64;
CompareAndSwapInt64sync/atomic.CompareAndSwapInt64  sync/atomic.CompareAndSwapUint32sync/atomicCompareAndSwapUint32 CompareAndSwapUint32��	CompareAndSwapUint32 = function(addr, old, new$1) {
		var addr, new$1, old;
    		if (addr.$get() === old) {
  �			addr.$set(new$1);
  			return true;
    		}
  		return false;
    	};
	$pkg.CompareAndSwapUint32 = CompareAndSwapUint32;
CompareAndSwapUint32 sync/atomic.CompareAndSwapUint32  sync/atomic.CompareAndSwapUint64sync/atomicCompareAndSwapUint64 CompareAndSwapUint64�)	CompareAndSwapUint64 = function(addr, old, new$1) {
		var addr, new$1, old, x;
    		if ((x = addr.$get(), (x.$high === old.$high && x.$low === old.$low))) {
  �			addr.$set(new$1);
  �			return true;
    		}
  �		return false;
    	};
	$pkg.CompareAndSwapUint64 = CompareAndSwapUint64;
CompareAndSwapUint64 sync/atomic.CompareAndSwapUint64 !sync/atomic.CompareAndSwapUintptrsync/atomicCompareAndSwapUintptr CompareAndSwapUintptr��	CompareAndSwapUintptr = function(addr, old, new$1) {
		var addr, new$1, old;
    		if (addr.$get() === old) {
  			addr.$set(new$1);
  			return true;
    		}
  &		return false;
    	};
	$pkg.CompareAndSwapUintptr = CompareAndSwapUintptr;
CompareAndSwapUintptr!sync/atomic.CompareAndSwapUintptr !sync/atomic.CompareAndSwapPointersync/atomicCompareAndSwapPointer CompareAndSwapPointer��	CompareAndSwapPointer = function(addr, old, new$1) {
		var addr, new$1, old;
    		if (addr.$get() === old) {
  �			addr.$set(new$1);
  �			return true;
    		}
  �		return false;
    	};
	$pkg.CompareAndSwapPointer = CompareAndSwapPointer;
CompareAndSwapPointer!sync/atomic.CompareAndSwapPointer sync/atomic.AddInt32sync/atomicAddInt32 AddInt32��	AddInt32 = function(addr, delta) {
		var addr, delta, new$1;
  �		new$1 = addr.$get() + delta >> 0;
  		addr.$set(new$1);
  		return new$1;
    	};
	$pkg.AddInt32 = AddInt32;
AddInt32sync/atomic.AddInt32 sync/atomic.AddUint32sync/atomic	AddUint32 	AddUint32��	AddUint32 = function(addr, delta) {
		var addr, delta, new$1;
  a		new$1 = addr.$get() + delta >>> 0;
  w		addr.$set(new$1);
  �		return new$1;
    	};
	$pkg.AddUint32 = AddUint32;
	AddUint32sync/atomic.AddUint32 sync/atomic.AddInt64sync/atomicAddInt64 AddInt64��	AddInt64 = function(addr, delta) {
		var addr, delta, new$1, x;
  �		new$1 = (x = addr.$get(), new $Int64(x.$high + delta.$high, x.$low + delta.$low));
  �		addr.$set(new$1);
  �		return new$1;
    	};
	$pkg.AddInt64 = AddInt64;
AddInt64sync/atomic.AddInt64 sync/atomic.AddUint64sync/atomic	AddUint64 	AddUint64��	AddUint64 = function(addr, delta) {
		var addr, delta, new$1, x;
  )		new$1 = (x = addr.$get(), new $Uint64(x.$high + delta.$high, x.$low + delta.$low));
  ?		addr.$set(new$1);
  L		return new$1;
    	};
	$pkg.AddUint64 = AddUint64;
	AddUint64sync/atomic.AddUint64 sync/atomic.AddUintptrsync/atomic
AddUintptr 
AddUintptr��	AddUintptr = function(addr, delta) {
		var addr, delta, new$1;
  �		new$1 = addr.$get() + delta >>> 0;
  �		addr.$set(new$1);
  �		return new$1;
    	};
	$pkg.AddUintptr = AddUintptr;

AddUintptrsync/atomic.AddUintptr sync/atomic.LoadInt32sync/atomic	LoadInt32 	LoadInt32k	LoadInt32 = function(addr) {
		var addr;
  �		return addr.$get();
    	};
	$pkg.LoadInt32 = LoadInt32;
	LoadInt32sync/atomic.LoadInt32 sync/atomic.LoadInt64sync/atomic	LoadInt64 	LoadInt64k	LoadInt64 = function(addr) {
		var addr;
  		return addr.$get();
    	};
	$pkg.LoadInt64 = LoadInt64;
	LoadInt64sync/atomic.LoadInt64 sync/atomic.LoadUint32sync/atomic
LoadUint32 
LoadUint32n	LoadUint32 = function(addr) {
		var addr;
  V		return addr.$get();
    	};
	$pkg.LoadUint32 = LoadUint32;

LoadUint32sync/atomic.LoadUint32 sync/atomic.LoadUint64sync/atomic
LoadUint64 
LoadUint64n	LoadUint64 = function(addr) {
		var addr;
  �		return addr.$get();
    	};
	$pkg.LoadUint64 = LoadUint64;

LoadUint64sync/atomic.LoadUint64 sync/atomic.LoadUintptrsync/atomicLoadUintptr LoadUintptrq	LoadUintptr = function(addr) {
		var addr;
  �		return addr.$get();
    	};
	$pkg.LoadUintptr = LoadUintptr;
LoadUintptrsync/atomic.LoadUintptr sync/atomic.LoadPointersync/atomicLoadPointer LoadPointerq	LoadPointer = function(addr) {
		var addr;
  			return addr.$get();
    	};
	$pkg.LoadPointer = LoadPointer;
LoadPointersync/atomic.LoadPointer sync/atomic.StoreInt32sync/atomic
StoreInt32 
StoreInt32t	StoreInt32 = function(addr, val) {
		var addr, val;
  	M		addr.$set(val);
    	};
	$pkg.StoreInt32 = StoreInt32;

StoreInt32sync/atomic.StoreInt32 sync/atomic.StoreInt64sync/atomic
StoreInt64 
StoreInt64t	StoreInt64 = function(addr, val) {
		var addr, val;
  	�		addr.$set(val);
    	};
	$pkg.StoreInt64 = StoreInt64;

StoreInt64sync/atomic.StoreInt64 sync/atomic.StoreUint32sync/atomicStoreUint32 StoreUint32w	StoreUint32 = function(addr, val) {
		var addr, val;
  	�		addr.$set(val);
    	};
	$pkg.StoreUint32 = StoreUint32;
StoreUint32sync/atomic.StoreUint32 sync/atomic.StoreUint64sync/atomicStoreUint64 StoreUint64w	StoreUint64 = function(addr, val) {
		var addr, val;
  
		addr.$set(val);
    	};
	$pkg.StoreUint64 = StoreUint64;
StoreUint64sync/atomic.StoreUint64 sync/atomic.StoreUintptrsync/atomicStoreUintptr StoreUintptrz	StoreUintptr = function(addr, val) {
		var addr, val;
  
A		addr.$set(val);
    	};
	$pkg.StoreUintptr = StoreUintptr;
StoreUintptrsync/atomic.StoreUintptr sync/atomic.StorePointersync/atomicStorePointer StorePointerz	StorePointer = function(addr, val) {
		var addr, val;
  
�		addr.$set(val);
    	};
	$pkg.StorePointer = StorePointer;
StorePointersync/atomic.StorePointer (*sync/atomic.Value).Load ��	Value.ptr.prototype.Load = function() {
		var v, x;
		x = $ifaceNil;
		v = this;
    		x = v.v;
		return x;
    	};
	Value.prototype.Load = function() { return this.$val.Load(); };
Valuesync/atomic.Value (*sync/atomic.Value).Store ��	Value.ptr.prototype.Store = function(new$1) {
		var new$1, v;
		v = this;
   		v.checkNew("store", new$1);
  		v.v = new$1;
    	};
	Value.prototype.Store = function(new$1) { return this.$val.Store(new$1); };
Valuesync/atomic.Valuesync/atomic.checkNew~ (*sync/atomic.Value).Swap �I	Value.ptr.prototype.Swap = function(new$1) {
		var _tmp, _tmp$1, new$1, old, v;
		old = $ifaceNil;
		v = this;
  b		v.checkNew("swap", new$1);
  {		_tmp = v.v;
		_tmp$1 = new$1;
		old = _tmp;
		v.v = _tmp$1;
    		old = old;
		return old;
    	};
	Value.prototype.Swap = function(new$1) { return this.$val.Swap(new$1); };
Valuesync/atomic.Valuesync/atomic.checkNew~ #(*sync/atomic.Value).CompareAndSwap ��	Value.ptr.prototype.CompareAndSwap = function(old, new$1) {
		var new$1, old, swapped, v;
		swapped = false;
		v = this;
  �		v.checkNew("compare and swap", new$1);
    		if (!($interfaceIsEqual(v.v, $ifaceNil) && $interfaceIsEqual(old, $ifaceNil)) && !sameType(old, new$1)) {
  E			$panic(new $String("sync/atomic: compare and swap of inconsistently typed values into Value"));
    		}
    		if (!($interfaceIsEqual(v.v, old))) {
    			swapped = false;
			return swapped;
    		}
  �		v.v = new$1;
    		swapped = true;
		return swapped;
    	};
	Value.prototype.CompareAndSwap = function(old, new$1) { return this.$val.CompareAndSwap(old, new$1); };
Valuesync/atomic.Valuesync/atomic.checkNew~sync/atomic.sameType (*sync/atomic.Value).checkNew ��	Value.ptr.prototype.checkNew = function(op, new$1) {
		var new$1, op, v;
		v = this;
    		if ($interfaceIsEqual(new$1, $ifaceNil)) {
  $			$panic(new $String("sync/atomic: " + op + " of nil value into Value"));
    		}
    		if (!($interfaceIsEqual(v.v, $ifaceNil)) && !sameType(new$1, v.v)) {
  �			$panic(new $String("sync/atomic: " + op + " of inconsistently typed value into Value"));
    		}
    	};
	Value.prototype.checkNew = function(op, new$1) { return this.$val.checkNew(op, new$1); };
Value	checkNew~sync/atomic.Valuesync/atomic.sameType sync/atomic.sameTypesync/atomicsameType sameTypea	sameType = function(x, y) {
		var x, y;
  a		return x.constructor === y.constructor;
    	};
sameTypesync/atomic.sameType sync/atomic.runtime_procPinsync/atomicruntime_procPin runtime_procPinz	runtime_procPin = function() {
		$throwRuntimeError("native function not implemented: sync/atomic.runtime_procPin");
	};
runtime_procPinsync/atomic.runtime_procPin sync/atomic.runtime_procUnpinsync/atomicruntime_procUnpin runtime_procUnpin~	runtime_procUnpin = function() {
		$throwRuntimeError("native function not implemented: sync/atomic.runtime_procUnpin");
	};
runtime_procUnpinsync/atomic.runtime_procUnpin ��{"Base":15536,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/sync/atomic/atomic.go","Base":1,"Size":4028,"Lines":[0,14,27,28,43,44,53,63,64,99,101,102,149,163,176,188,190,191,238,252,265,277,279,280,331,345,358,370,372,373,424,438,451,463,465,466,521,535,548,560,562,563,639,653,666,678,680,681,742,761,775,789,792,806,808,809,870,889,903,917,920,934,936,937,1001,1020,1034,1048,1051,1065,1067,1068,1132,1151,1165,1179,1182,1196,1198,1199,1266,1285,1299,1313,1316,1330,1332,1333,1414,1433,1447,1461,1464,1478,1480,1481,1529,1551,1564,1576,1578,1579,1631,1653,1666,1678,1680,1681,1729,1751,1764,1776,1778,1779,1831,1853,1866,1878,1880,1881,1937,1959,1972,1984,1986,1987,2023,2037,2039,2040,2076,2090,2092,2093,2132,2146,2148,2149,2188,2202,2204,2205,2247,2261,2263,2264,2320,2334,2336,2337,2379,2392,2394,2395,2437,2450,2452,2453,2498,2511,2513,2514,2559,2572,2574,2575,2623,2636,2638,2639,2701,2714,2716,2717,2758,2770,2772,2773,2814,2840,2851,2853,2854,2912,2937,2958,2970,2972,2973,3043,3080,3081,3138,3221,3224,3225,3242,3257,3260,3261,3272,3273,3286,3288,3289,3344,3361,3420,3423,3424,3464,3540,3543,3545,3546,3618,3657,3732,3809,3887,3935,4026],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/sync/atomic/doc.go","Base":4030,"Size":5513,"Lines":[0,55,109,159,160,222,277,280,340,413,474,508,548,551,624,642,645,660,675,689,692,762,805,808,829,845,861,866,882,885,956,974,977,995,1011,1014,1084,1147,1165,1168,1183,1184,1193,1203,1205,1206,1301,1304,1399,1402,1469,1541,1620,1660,1661,1745,1796,1797,1881,1932,1933,2018,2073,2074,2159,2214,2215,2301,2360,2361,2447,2527,2528,2611,2680,2681,2764,2833,2834,2918,2990,2991,3075,3147,3148,3234,3309,3310,3403,3492,3493,3563,3615,3616,3687,3777,3841,3897,3898,3968,4020,4021,4092,4182,4246,4302,4303,4375,4435,4436,4473,4513,4514,4551,4591,4592,4630,4673,4674,4712,4755,4756,4795,4841,4842,4881,4941,4942,4990,5030,5031,5079,5119,5120,5169,5212,5213,5262,5305,5306,5356,5402,5403,5453],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/sync/atomic/value.go","Base":9544,"Size":5991,"Lines":[0,55,109,159,160,175,176,185,195,197,198,274,327,386,389,436,456,471,473,474,528,553,574,595,597,598,654,723,766,806,835,883,919,932,935,966,1010,1025,1042,1050,1052,1053,1096,1179,1240,1281,1298,1352,1355,1395,1439,1446,1476,1494,1530,1588,1647,1697,1718,1792,1816,1829,1834,1862,1898,1932,1955,1965,1969,2004,2041,2099,2139,2151,2155,2214,2236,2308,2312,2347,2356,2359,2361,2362,2442,2465,2468,2544,2609,2667,2684,2737,2740,2780,2823,2830,2860,2878,2914,2972,3031,3081,3102,3176,3200,3213,3218,3246,3281,3314,3337,3351,3355,3390,3427,3485,3525,3537,3541,3600,3621,3692,3696,3740,3799,3812,3815,3817,3818,3891,3894,3971,4044,4073,4143,4160,4225,4228,4268,4311,4354,4394,4466,4469,4476,4506,4524,4543,4560,4565,4601,4659,4718,4768,4789,4863,4887,4900,4905,4933,4968,5001,5024,5039,5043,5078,5115,5173,5213,5225,5229,5288,5309,5392,5396,5453,5508,5551,5605,5645,5677,5697,5743,5791,5807,5823,5827,5883,5886,5888,5889,5943,5966],"Infos":null}]}
 