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
GoLinkname’ Implementation’ 	Reference’   ž<?’runtime/metricsmetricsmathruntimež©i Åŗ DescriptionNameKind	ValueKind
CumulativeCountsBucketsmSampleValuekindscalarpointervUint64Float64Float64HistogrammetricsAllKindBadKindFloat64KindFloat64Histogram
KindUint64Read   F    #          ,   !   T / 
  ,J   3L  T N C , C ,C ,C , = oF  ;r   D      D|  T    J,   O
   V   o ¢T   ^|   , ` ^|   
 g ^|    o ^|   „T    &o;?C GµKĄT=lD¶ math	math = $packages["math"];
’    		$r = math.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
’    		$r = runtime.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Descriptionž¶	Description = $pkg.Description = $newType(0, $kindStruct, "metrics.Description", true, "runtime/metrics", true, function(Name_, Description_, Kind_, Cumulative_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Description = "";
			this.Kind = 0;
			this.Cumulative = false;
			return;
		}
		this.Name = Name_;
		this.Description = Description_;
		this.Kind = Kind_;
		this.Cumulative = Cumulative_;
	});
ž	Description.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Description", name: "Description", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Kind", name: "Kind", embedded: false, exported: true, typ: ValueKind, tag: ""}, {prop: "Cumulative", name: "Cumulative", embedded: false, exported: true, typ: $Bool, tag: ""}]);
Descriptionruntime/metrics.Descriptionruntime/metrics.ValueKind  Float64Histogramž_	Float64Histogram = $pkg.Float64Histogram = $newType(0, $kindStruct, "metrics.Float64Histogram", true, "runtime/metrics", true, function(Counts_, Buckets_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Counts = sliceType$1.nil;
			this.Buckets = sliceType$2.nil;
			return;
		}
		this.Counts = Counts_;
		this.Buckets = Buckets_;
	});
’Ü	Float64Histogram.init("", [{prop: "Counts", name: "Counts", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "Buckets", name: "Buckets", embedded: false, exported: true, typ: sliceType$2, tag: ""}]);
Float64Histogram runtime/metrics.Float64Histogramruntime/metrics.sliceType$1runtime/metrics.sliceType$2  Samplež;	Sample = $pkg.Sample = $newType(0, $kindStruct, "metrics.Sample", true, "runtime/metrics", true, function(Name_, Value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Value = new Value.ptr(0, new $Uint64(0, 0), 0);
			return;
		}
		this.Name = Name_;
		this.Value = Value_;
	});
’Ą	Sample.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Value", name: "Value", embedded: false, exported: true, typ: Value, tag: ""}]);
Sampleruntime/metrics.Sampleruntime/metrics.Value  	ValueKindo	ValueKind = $pkg.ValueKind = $newType(4, $kindInt, "metrics.ValueKind", true, "runtime/metrics", true, null);
	ValueKindruntime/metrics.ValueKind  Valuež`	Value = $pkg.Value = $newType(0, $kindStruct, "metrics.Value", true, "runtime/metrics", true, function(kind_, scalar_, pointer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.kind = 0;
			this.scalar = new $Uint64(0, 0);
			this.pointer = 0;
			return;
		}
		this.kind = kind_;
		this.scalar = scalar_;
		this.pointer = pointer_;
	});
žl	Value.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [ValueKind], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float64", name: "Float64", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Float64Histogram", name: "Float64Histogram", pkg: "", typ: $funcType([], [ptrType], false)}];
ž:	Value.init("runtime/metrics", [{prop: "kind", name: "kind", embedded: false, exported: false, typ: ValueKind, tag: ""}, {prop: "scalar", name: "scalar", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "pointer", name: "pointer", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
Valueruntime/metrics.Valueruntime/metrics.ValueKindruntime/metrics.ptrType  	sliceType&	sliceType = $sliceType(Description);
	sliceTyperuntime/metrics.Description  ptrType'	ptrType = $ptrType(Float64Histogram);
ptrType runtime/metrics.Float64Histogram  sliceType$1$	sliceType$1 = $sliceType($Uint64);
sliceType$1  sliceType$2%	sliceType$2 = $sliceType($Float64);
sliceType$2  allDescallDesc  žė  			allDesc = new sliceType([new Description.ptr("/gc/cycles/automatic:gc-cycles", "Count of completed GC cycles generated by the Go runtime.", 1, true), new Description.ptr("/gc/cycles/forced:gc-cycles", "Count of completed GC cycles forced by the application.", 1, true), new Description.ptr("/gc/cycles/total:gc-cycles", "Count of all completed GC cycles.", 1, true), new Description.ptr("/gc/heap/allocs-by-size:bytes", "Distribution of heap allocations by approximate size. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks.", 3, true), new Description.ptr("/gc/heap/allocs:bytes", "Cumulative sum of memory allocated to the heap by the application.", 1, true), new Description.ptr("/gc/heap/allocs:objects", "Cumulative count of heap allocations triggered by the application. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks.", 1, true), new Description.ptr("/gc/heap/frees-by-size:bytes", "Distribution of freed heap allocations by approximate size. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks.", 3, true), new Description.ptr("/gc/heap/frees:bytes", "Cumulative sum of heap memory freed by the garbage collector.", 1, true), new Description.ptr("/gc/heap/frees:objects", "Cumulative count of heap allocations whose storage was freed by the garbage collector. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks.", 1, true), new Description.ptr("/gc/heap/goal:bytes", "Heap size target for the end of the GC cycle.", 1, false), new Description.ptr("/gc/heap/objects:objects", "Number of objects, live or unswept, occupying heap memory.", 1, false), new Description.ptr("/gc/heap/tiny/allocs:objects", "Count of small allocations that are packed together into blocks. These allocations are counted separately from other allocations because each individual allocation is not tracked by the runtime, only their block. Each block is already accounted for in allocs-by-size and frees-by-size.", 1, true), new Description.ptr("/gc/pauses:seconds", "Distribution individual GC-related stop-the-world pause latencies.", 3, true), new Description.ptr("/memory/classes/heap/free:bytes", "Memory that is completely free and eligible to be returned to the underlying system, but has not been. This metric is the runtime's estimate of free address space that is backed by physical memory.", 1, false), new Description.ptr("/memory/classes/heap/objects:bytes", "Memory occupied by live objects and dead objects that have not yet been marked free by the garbage collector.", 1, false), new Description.ptr("/memory/classes/heap/released:bytes", "Memory that is completely free and has been returned to the underlying system. This metric is the runtime's estimate of free address space that is still mapped into the process, but is not backed by physical memory.", 1, false), new Description.ptr("/memory/classes/heap/stacks:bytes", "Memory allocated from the heap that is reserved for stack space, whether or not it is currently in-use.", 1, false), new Description.ptr("/memory/classes/heap/unused:bytes", "Memory that is reserved for heap objects but is not currently used to hold heap objects.", 1, false), new Description.ptr("/memory/classes/metadata/mcache/free:bytes", "Memory that is reserved for runtime mcache structures, but not in-use.", 1, false), new Description.ptr("/memory/classes/metadata/mcache/inuse:bytes", "Memory that is occupied by runtime mcache structures that are currently being used.", 1, false), new Description.ptr("/memory/classes/metadata/mspan/free:bytes", "Memory that is reserved for runtime mspan structures, but not in-use.", 1, false), new Description.ptr("/memory/classes/metadata/mspan/inuse:bytes", "Memory that is occupied by runtime mspan structures that are currently being used.", 1, false), new Description.ptr("/memory/classes/metadata/other:bytes", "Memory that is reserved for or used to hold runtime metadata.", 1, false), new Description.ptr("/memory/classes/os-stacks:bytes", "Stack memory allocated by the underlying operating system.", 1, false), new Description.ptr("/memory/classes/other:bytes", "Memory used by execution trace buffers, structures for debugging the runtime, finalizer and profiler specials, and more.", 1, false), new Description.ptr("/memory/classes/profiling/buckets:bytes", "Memory that is used by the stack trace hash map used for profiling.", 1, false), new Description.ptr("/memory/classes/total:bytes", "All memory mapped by the Go runtime into the current process as read-write. Note that this does not include memory mapped by code called via cgo or via the syscall package. Sum of all metrics in /memory/classes.", 1, false), new Description.ptr("/sched/goroutines:goroutines", "Count of live goroutines.", 1, false), new Description.ptr("/sched/latencies:seconds", "Distribution of the time goroutines have spent in the scheduler in a runnable state before actually running.", 3, false)]);
allDescruntime/metrics.Descriptionruntime/metrics.allDescruntime/metrics.sliceType runtime/metrics.Allruntime/metricsAll AllE	All = function() {
  "		return allDesc;
    	};
	$pkg.All = All;
Allruntime/metrics.Allruntime/metrics.allDesc #runtime/metrics.runtime_readMetricsruntime/metricsruntime_readMetrics runtime_readMetrics’	runtime_readMetrics = function() {
		$throwRuntimeError("native function not implemented: runtime/metrics.runtime_readMetrics");
	};
runtime_readMetrics#runtime/metrics.runtime_readMetrics runtime/metrics.Readruntime/metricsRead Read’	Read = function(m) {
		var m;
  H¢		runtime_readMetrics(($sliceToNativeArray(m)), m.$length, m.$capacity);
    	};
	$pkg.Read = Read;
Readruntime/metrics.Read#runtime/metrics.runtime_readMetrics (runtime/metrics.Value).Kind ’	Value.ptr.prototype.Kind = function() {
		var v;
		v = this;
  LÄ		return v.kind;
    	};
	Value.prototype.Kind = function() { return this.$val.Kind(); };
Valueruntime/metrics.Value (runtime/metrics.Value).Uint64 ž	Value.ptr.prototype.Uint64 = function() {
		var v;
		v = this;
    		if (!((v.kind === 1))) {
  M			$panic(new $String("called Uint64 on non-uint64 metric value"));
    		}
  Mŗ		return v.scalar;
    	};
	Value.prototype.Uint64 = function() { return this.$val.Uint64(); };
Valueruntime/metrics.Value (runtime/metrics.Value).Float64 ž3	Value.ptr.prototype.Float64 = function() {
		var v;
		v = this;
    		if (!((v.kind === 2))) {
  N			$panic(new $String("called Float64 on non-float64 metric value"));
    		}
  Nŗ		return math.Float64frombits(v.scalar);
    	};
	Value.prototype.Float64 = function() { return this.$val.Float64(); };
Valuemath.Float64frombitsruntime/metrics.Value ((runtime/metrics.Value).Float64Histogram žr	Value.ptr.prototype.Float64Histogram = function() {
		var v;
		v = this;
    		if (!((v.kind === 3))) {
  OŠ			$panic(new $String("called Float64Histogram on non-Float64Histogram metric value"));
    		}
  P		return ($pointerOfStructConversion(v.pointer, ptrType));
    	};
	Value.prototype.Float64Histogram = function() { return this.$val.Float64Histogram(); };
Value runtime/metrics.Float64Histogramruntime/metrics.Valueruntime/metrics.ptrType žé{"Base":20547,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/metrics/description.go","Base":1,"Size":8849,"Lines":[0,55,109,159,160,176,177,220,246,311,315,398,402,460,464,558,648,736,820,824,916,1007,1046,1128,1179,1183,1272,1362,1447,1480,1484,1547,1560,1561,1632,1652,1653,1700,1704,1791,1845,1861,1862,1952,2039,2091,2095,2186,2203,2205,2206,2279,2321,2350,2353,2402,2478,2505,2526,2530,2533,2579,2653,2680,2701,2705,2708,2753,2805,2832,2853,2857,2860,2901,2975,3042,3096,3132,3152,3156,3159,3199,3284,3311,3332,3336,3339,3374,3461,3528,3582,3608,3628,3632,3635,3675,3755,3822,3876,3912,3932,3936,3939,3978,4058,4085,4106,4110,4113,4147,4228,4262,4329,4383,4409,4429,4433,4436,4474,4538,4565,4569,4572,4615,4692,4719,4723,4726,4766,4851,4923,4997,5062,5102,5128,5148,5152,5155,5192,5277,5314,5335,5339,5342,5385,5490,5594,5617,5637,5641,5644,5697,5825,5852,5856,5859,5906,6010,6112,6156,6176,6180,6183,6235,6357,6384,6388,6391,6443,6550,6577,6581,6584,6645,6734,6761,6765,6768,6830,6932,6959,6963,6966,7026,7114,7141,7145,7148,7209,7310,7337,7341,7344,7399,7479,7506,7510,7513,7563,7640,7667,7671,7674,7720,7859,7886,7890,7893,7951,8037,8064,8068,8071,8117,8347,8374,8378,8381,8428,8472,8499,8503,8506,8549,8676,8713,8717,8719,8720,8804,8831,8847],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/metrics/doc.go","Base":8851,"Size":6704,"Lines":[0,55,109,159,160,163,240,322,403,404,480,558,589,590,600,601,683,764,844,862,863,945,1030,1107,1189,1271,1324,1325,1408,1493,1578,1611,1612,1630,1631,1719,1800,1882,1970,2016,2017,2107,2170,2171,2191,2192,2276,2359,2408,2409,2427,2428,2500,2501,2533,2593,2594,2623,2681,2682,2710,2746,2747,2778,2834,2925,2945,2946,2969,3038,3039,3064,3133,3224,3244,3245,3275,3337,3428,3448,3449,3471,3535,3536,3560,3649,3740,3760,3761,3782,3830,3831,3857,3918,3919,3949,4016,4082,4150,4209,4245,4246,4266,4335,4336,4369,4433,4495,4556,4575,4576,4612,4673,4726,4727,4764,4822,4888,4952,4988,4989,5024,5084,5132,5133,5168,5232,5261,5262,5306,5367,5381,5382,5427,5487,5515,5516,5559,5619,5633,5634,5678,5741,5765,5766,5804,5858,5870,5871,5904,5965,5966,5995,6052,6114,6122,6123,6164,6223,6236,6237,6266,6329,6392,6445,6486,6487,6517,6545,6546,6572,6638,6685,6688],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/metrics/histogram.go","Base":15556,"Size":1365,"Lines":[0,55,109,159,160,176,177,242,273,332,336,393,439,456,457,540,544,616,696,780,857,905,909,987,1020,1024,1102,1140,1144,1225,1303,1344,1363],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/metrics/sample.go","Base":16922,"Size":1733,"Lines":[0,55,109,159,160,176,177,186,251,261,263,264,307,328,372,376,443,464,477,478,523,536,538,539,570,621,622,695,698,775,856,901,904,980,1061,1140,1220,1290,1293,1372,1450,1511,1514,1595,1647,1671,1731],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/metrics/value.go","Base":18656,"Size":1890,"Lines":[0,55,109,159,160,176,177,186,194,204,206,207,274,293,294,302,375,401,402,467,479,480,547,560,561,647,669,671,672,732,752,771,839,894,896,897,961,995,1010,1012,1013,1073,1076,1126,1159,1186,1238,1241,1258,1260,1261,1323,1326,1377,1412,1440,1494,1497,1536,1538,1539,1620,1623,1683,1737,1774,1846,1849,1888],"Infos":null}]}
 