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
GoLinkname�� Implementation�� 	Reference��   �f���runtime/debugdebugosruntimesortstringstime�
�i �� PathMainModuleDepsLastGCTimetimeNumGC
PauseTotalDurationPausePauseEndPauseQuantilesVersionSumReplaceinfo	BuildInfookstatsGCStatspercentbytesthreadsenabledlevelfdwallextlocLocationStringtGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecdsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundNanosecondsMicrosecondsMillisecondsSecondsMinutesHourszonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixwhenindexisstdisutcdebugFreeOSMemory
PrintStackReadBuildInfoReadGCStatsSetGCPercentSetMaxStackSetMaxThreadsSetPanicOnFaultSetTracebackStackWriteHeapDump   #         %  T ' F    # 9#DAD  A   (   .D   BG   HI   QK  T M       `   h   lr  T t F    y �F   t� �  � �F  ��  F  �   F  �   F  �   F  �     F  �  F    �F  �   �#�# �
   �   ��  AAAAA�AAA �# �#��AAAAT �6 � �A    � �A    � �A �    � �A �� �  �  � ��    � ��    � ��    � �� �   � �� ��   � ��   � �� �   � ��    � �A �A     � �A �A     � �A �A     � �A     � �A   
 � �A  � � �
 � �A  � �� � � �A    � �A   � � �A    � �A   � � �A  � � � �A  � � � � �A    � �A    � �A    � �A    � �A    � �A �D  A  � �A �A  D  � �A � � �  A  � �A �  � �� � �  � �A   A � �A   A � �A ��  A  � �A   � � �A  � � � �A    � �A    � �A    � �A    � �A   �   � �� ��    � �A   �   � �� ��    � �A   �   � �� ��    � �A   �   � �� ��    � �A     � �A �D  A  � �A �D  A T 	 � �D    � �D    � �D    � �D    � �D    � �D    � �D    � �D �D  D  � �D �D  D  �#�
 �#�
�
# �   ��
   ��
   �   �   �   ��
  �������T �
 � ��
   �
 � ��
    � ��
 � � � � � �   � ��
    � ��
     � ��
 � � � �  T  � ��   T  � ��   # �   �   �   T � # �   �   �    �   T �  � y��Nk�o�y����������������## 9�	��
���������# os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  time	time = $packages["time"];
��    		$r = time.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  GCStats��	GCStats = $pkg.GCStats = $newType(0, $kindStruct, "debug.GCStats", true, "runtime/debug", true, function(LastGC_, NumGC_, PauseTotal_, Pause_, PauseEnd_, PauseQuantiles_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.LastGC = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$3.nil);
			this.NumGC = new $Int64(0, 0);
			this.PauseTotal = new time.Duration(0, 0);
			this.Pause = sliceType.nil;
			this.PauseEnd = sliceType$1.nil;
			this.PauseQuantiles = sliceType.nil;
			return;
		}
		this.LastGC = LastGC_;
		this.NumGC = NumGC_;
		this.PauseTotal = PauseTotal_;
		this.Pause = Pause_;
		this.PauseEnd = PauseEnd_;
		this.PauseQuantiles = PauseQuantiles_;
	});
�X	GCStats.init("", [{prop: "LastGC", name: "LastGC", embedded: false, exported: true, typ: time.Time, tag: ""}, {prop: "NumGC", name: "NumGC", embedded: false, exported: true, typ: $Int64, tag: ""}, {prop: "PauseTotal", name: "PauseTotal", embedded: false, exported: true, typ: time.Duration, tag: ""}, {prop: "Pause", name: "Pause", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "PauseEnd", name: "PauseEnd", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "PauseQuantiles", name: "PauseQuantiles", embedded: false, exported: true, typ: sliceType, tag: ""}]);
GCStatsruntime/debug.GCStatsruntime/debug.ptrType$3runtime/debug.sliceTyperuntime/debug.sliceType$1time.Durationtime.Location	time.Time  	BuildInfo�{	BuildInfo = $pkg.BuildInfo = $newType(0, $kindStruct, "debug.BuildInfo", true, "runtime/debug", true, function(Path_, Main_, Deps_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Path = "";
			this.Main = new Module.ptr("", "", "", ptrType$2.nil);
			this.Deps = sliceType$2.nil;
			return;
		}
		this.Path = Path_;
		this.Main = Main_;
		this.Deps = Deps_;
	});
�	BuildInfo.init("", [{prop: "Path", name: "Path", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Main", name: "Main", embedded: false, exported: true, typ: Module, tag: ""}, {prop: "Deps", name: "Deps", embedded: false, exported: true, typ: sliceType$2, tag: ""}]);
	BuildInforuntime/debug.BuildInforuntime/debug.Moduleruntime/debug.ptrType$2runtime/debug.sliceType$2  Module��	Module = $pkg.Module = $newType(0, $kindStruct, "debug.Module", true, "runtime/debug", true, function(Path_, Version_, Sum_, Replace_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Path = "";
			this.Version = "";
			this.Sum = "";
			this.Replace = ptrType$2.nil;
			return;
		}
		this.Path = Path_;
		this.Version = Version_;
		this.Sum = Sum_;
		this.Replace = Replace_;
	});
�x	Module.init("", [{prop: "Path", name: "Path", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Version", name: "Version", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Sum", name: "Sum", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Replace", name: "Replace", embedded: false, exported: true, typ: ptrType$2, tag: ""}]);
Moduleruntime/debug.Moduleruntime/debug.ptrType$2  	sliceType(	sliceType = $sliceType(time.Duration);
	sliceTypetime.Duration  ptrType 	ptrType = $ptrType(sliceType);
ptrTyperuntime/debug.sliceType  sliceType$1&	sliceType$1 = $sliceType(time.Time);
sliceType$1	time.Time  	ptrType$1"	ptrType$1 = $ptrType(BuildInfo);
	ptrType$1runtime/debug.BuildInfo  	ptrType$2	ptrType$2 = $ptrType(Module);
	ptrType$2runtime/debug.Module  sliceType$2&	sliceType$2 = $sliceType(ptrType$2);
sliceType$2runtime/debug.ptrType$2  sliceType$3#	sliceType$3 = $sliceType($Uint8);
sliceType$3  	ptrType$3&	ptrType$3 = $ptrType(time.Location);
	ptrType$3time.Location runtime/debug.setGCPercentruntime/debugsetGCPercent setGCPercentK	setGCPercent = function(param) {
		var param;
   {		return 100;
    	};
setGCPercentruntime/debug.setGCPercent runtime/debug.setMaxStackruntime/debugsetMaxStack setMaxStackP	setMaxStack = function(bytes) {
		var bytes;
  &		return 250000000;
    	};
setMaxStackruntime/debug.setMaxStack runtime/debug.ReadGCStatsruntime/debugReadGCStats ReadGCStats� 	ReadGCStats = function(stats) {
		var _i, _i$1, _q, _q$1, _ref, _ref$1, i, i$1, n, nq, ns, sorted, stats, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _q = $f._q; _q$1 = $f._q$1; _ref = $f._ref; _ref$1 = $f._ref$1; i = $f.i; i$1 = $f.i$1; n = $f.n; nq = $f.nq; ns = $f.ns; sorted = $f.sorted; stats = $f.stats; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		sorted = [sorted];
    		if (stats.Pause.$capacity < 515) {
  �			stats.Pause = $makeSlice(sliceType, 515);
    		}
  			readGCStats((stats.$ptr_Pause || (stats.$ptr_Pause = new ptrType(function() { return this.$target.Pause; }, function($v) { this.$target.Pause = $v; }, stats))));
  	-		n = stats.Pause.$length - 3 >> 0;
  	H		time.Time.copy(stats.LastGC, time.Unix(new $Int64(0, 0), ((x = (x$1 = stats.Pause, ((n < 0 || n >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + n])), new $Int64(x.$high, x.$low)))));
  	|		stats.NumGC = ((x$2 = (x$3 = stats.Pause, x$4 = n + 1 >> 0, ((x$4 < 0 || x$4 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + x$4])), new $Int64(x$2.$high, x$2.$low)));
  	�		stats.PauseTotal = (x$5 = stats.Pause, x$6 = n + 2 >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6]));
  	�		n = (_q = n / (2), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  	�		stats.Pause = $subslice(stats.Pause, 0, n);
    		if (stats.PauseEnd.$capacity < 256) {
  
;			stats.PauseEnd = $makeSlice(sliceType$1, 0, 256);
    		}
  
o		stats.PauseEnd = $subslice(stats.PauseEnd, 0, 0);
  
�		_ref = $subslice(stats.Pause, n, (n + n >> 0));
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			ns = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  
�			stats.PauseEnd = $append(stats.PauseEnd, time.Unix(new $Int64(0, 0), (new $Int64(ns.$high, ns.$low))));
    			_i++;
		}
  		/* */ if (stats.PauseQuantiles.$length > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (stats.PauseQuantiles.$length > 0) { */ case 1:
  +			/* */ if (n === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (n === 0) { */ case 3:
  :				_ref$1 = stats.PauseQuantiles;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					i = _i$1;
  d					(x$7 = stats.PauseQuantiles, ((i < 0 || i >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + i] = new time.Duration(0, 0)));
    					_i$1++;
				}
    				$s = 5; continue;
			/* } else { */ case 4:
  					sorted[0] = $subslice(stats.Pause, n, (n + n >> 0));
  +				$copySlice(sorted[0], stats.Pause);
  H				$r = sort.Slice(sorted[0], (function(sorted) { return function(i$1, j) {
					var i$1, j, x$8, x$9;
  q					return (x$8 = ((i$1 < 0 || i$1 >= sorted[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : sorted[0].$array[sorted[0].$offset + i$1]), x$9 = ((j < 0 || j >= sorted[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : sorted[0].$array[sorted[0].$offset + j]), (x$8.$high < x$9.$high || (x$8.$high === x$9.$high && x$8.$low < x$9.$low)));
    				}; })(sorted)); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �				nq = stats.PauseQuantiles.$length - 1 >> 0;
  �				i$1 = 0;
				while (true) {
					if (!(i$1 < nq)) { break; }
  �					(x$9 = stats.PauseQuantiles, ((i$1 < 0 || i$1 >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + i$1] = (x$8 = (_q$1 = ($imul(sorted[0].$length, i$1)) / nq, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), ((x$8 < 0 || x$8 >= sorted[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : sorted[0].$array[sorted[0].$offset + x$8]))));
  �					i$1 = i$1 + (1) >> 0;
    				}
  				(x$11 = stats.PauseQuantiles, ((nq < 0 || nq >= x$11.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + nq] = (x$10 = sorted[0].$length - 1 >> 0, ((x$10 < 0 || x$10 >= sorted[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : sorted[0].$array[sorted[0].$offset + x$10]))));
    			/* } */ case 5:
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadGCStats }; } $f._i = _i; $f._i$1 = _i$1; $f._q = _q; $f._q$1 = _q$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.nq = nq; $f.ns = ns; $f.sorted = sorted; $f.stats = stats; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadGCStats = ReadGCStats;
ReadGCStats	runtime/debug.ReadGCStatsruntime/debug.ptrTyperuntime/debug.readGCStatsruntime/debug.sliceTyperuntime/debug.sliceType$1
sort.Slicetime.Duration	time.Time	time.Unix runtime/debug.SetGCPercentruntime/debugSetGCPercent SetGCPercent��	SetGCPercent = function(percent) {
		var percent;
  &		return ((setGCPercent(((percent >> 0))) >> 0));
    	};
	$pkg.SetGCPercent = SetGCPercent;
SetGCPercentruntime/debug.SetGCPercentruntime/debug.setGCPercent runtime/debug.FreeOSMemoryruntime/debugFreeOSMemory FreeOSMemory`	FreeOSMemory = function() {
  d		freeOSMemory();
    	};
	$pkg.FreeOSMemory = FreeOSMemory;
FreeOSMemoryruntime/debug.FreeOSMemoryruntime/debug.freeOSMemory runtime/debug.SetMaxStackruntime/debugSetMaxStack SetMaxStackz	SetMaxStack = function(bytes) {
		var bytes;
  �		return setMaxStack(bytes);
    	};
	$pkg.SetMaxStack = SetMaxStack;
SetMaxStackruntime/debug.SetMaxStackruntime/debug.setMaxStack runtime/debug.SetMaxThreadsruntime/debugSetMaxThreads SetMaxThreads��	SetMaxThreads = function(threads) {
		var threads;
  		return setMaxThreads(threads);
    	};
	$pkg.SetMaxThreads = SetMaxThreads;
SetMaxThreadsruntime/debug.SetMaxThreadsruntime/debug.setMaxThreads runtime/debug.SetPanicOnFaultruntime/debugSetPanicOnFault SetPanicOnFault��	SetPanicOnFault = function(enabled) {
		var enabled;
  �		return setPanicOnFault(enabled);
    	};
	$pkg.SetPanicOnFault = SetPanicOnFault;
SetPanicOnFaultruntime/debug.SetPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.WriteHeapDumpruntime/debugWriteHeapDump WriteHeapDump��	WriteHeapDump = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.WriteHeapDump");
	};
	$pkg.WriteHeapDump = WriteHeapDump;
WriteHeapDumpruntime/debug.WriteHeapDump runtime/debug.SetTracebackruntime/debugSetTraceback SetTraceback��	SetTraceback = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.SetTraceback");
	};
	$pkg.SetTraceback = SetTraceback;
SetTracebackruntime/debug.SetTraceback runtime/debug.modinforuntime/debugmodinfo modinfol	modinfo = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.modinfo");
	};
modinforuntime/debug.modinfo runtime/debug.ReadBuildInforuntime/debugReadBuildInfo ReadBuildInfo�N	ReadBuildInfo = function() {
		var $24r, _r, _tuple, info, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; info = $f.info; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		info = ptrType$1.nil;
		ok = false;
    		_r = readBuildInfo(modinfo()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		info = _tuple[0];
		ok = _tuple[1];
		$24r = [info, ok];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadBuildInfo }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.info = info; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadBuildInfo = ReadBuildInfo;
ReadBuildInforuntime/debug.BuildInforuntime/debug.ReadBuildInforuntime/debug.modinforuntime/debug.ptrType$1runtime/debug.readBuildInfo runtime/debug.readBuildInforuntime/debugreadBuildInfo readBuildInfo�	readBuildInfo = function(data) {
		var _r, _r$1, _tmp, _tmp$1, _tuple, _tuple$1, data, elem, elem$1, elem$2, elem$3, i, info, last, line, ok, readEntryFirstLine, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; data = $f.data; elem = $f.elem; elem$1 = $f.elem$1; elem$2 = $f.elem$2; elem$3 = $f.elem$3; i = $f.i; info = $f.info; last = $f.last; line = $f.line; ok = $f.ok; readEntryFirstLine = $f.readEntryFirstLine; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (data.length < 32) {
  !�			$s = -1; return [ptrType$1.nil, false];
    		}
  "		data = $substring(data, 16, (data.length - 16 >> 0));
  "�		readEntryFirstLine = (function(elem) {
			var elem, sum;
    			if (!((elem.$length === 2)) && !((elem.$length === 3))) {
  "�				return [new Module.ptr("", "", "", ptrType$2.nil), false];
    			}
  #			sum = "";
    			if (elem.$length === 3) {
  #7				sum = (2 >= elem.$length ? ($throwRuntimeError("index out of range"), undefined) : elem.$array[elem.$offset + 2]);
    			}
  #K			return [new Module.ptr((0 >= elem.$length ? ($throwRuntimeError("index out of range"), undefined) : elem.$array[elem.$offset + 0]), (1 >= elem.$length ? ($throwRuntimeError("index out of range"), undefined) : elem.$array[elem.$offset + 1]), sum, ptrType$2.nil), true];
    		});
  #�		info = new BuildInfo.ptr("", new Module.ptr("", "", "", ptrType$2.nil), sliceType$2.nil);
  #�		last = ptrType$2.nil;
  #�		line = "";
  #�		ok = false;
  $%		/* while (true) { */ case 1:
			/* if (!(data.length > 0)) { break; } */ if(!(data.length > 0)) { $s = 2; continue; }
  $;			i = strings.IndexByte(data, 10);
    			if (i < 0) {
  $n				/* break; */ $s = 2; continue;
    			}
  $z			_tmp = $substring(data, 0, i);
			_tmp$1 = $substring(data, (i + 1 >> 0));
			line = _tmp;
			data = _tmp$1;
  $�				/* */ if (strings.HasPrefix(line, "path\t")) { $s = 4; continue; }
				/* */ if (strings.HasPrefix(line, "mod\t")) { $s = 5; continue; }
				/* */ if (strings.HasPrefix(line, "dep\t")) { $s = 6; continue; }
				/* */ if (strings.HasPrefix(line, "=>\t")) { $s = 7; continue; }
				/* */ $s = 8; continue;
    				/* if (strings.HasPrefix(line, "path\t")) { */ case 4:
  $�					elem = $substring(line, 5);
  $�					info.Path = elem;
    					$s = 8; continue;
    				/* } else if (strings.HasPrefix(line, "mod\t")) { */ case 5:
  %1					elem$1 = strings.Split($substring(line, 4), "\t");
  %e					last = info.Main;
  %z					_r = readEntryFirstLine(elem$1); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					_tuple = _r;
					Module.copy(last, _tuple[0]);
					ok = _tuple[1];
    					if (!ok) {
  %�						$s = -1; return [ptrType$1.nil, false];
    					}
    					$s = 8; continue;
    				/* } else if (strings.HasPrefix(line, "dep\t")) { */ case 6:
  %�					elem$2 = strings.Split($substring(line, 4), "\t");
  &&					last = new Module.ptr("", "", "", ptrType$2.nil);
  &<					info.Deps = $append(info.Deps, last);
  &c					_r$1 = readEntryFirstLine(elem$2); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_tuple$1 = _r$1;
					Module.copy(last, _tuple$1[0]);
					ok = _tuple$1[1];
    					if (!ok) {
  &�						$s = -1; return [ptrType$1.nil, false];
    					}
    					$s = 8; continue;
    				/* } else if (strings.HasPrefix(line, "=>\t")) { */ case 7:
  &�					elem$3 = strings.Split($substring(line, 3), "\t");
    					if (!((elem$3.$length === 3))) {
  ''						$s = -1; return [ptrType$1.nil, false];
    					}
    					if (last === ptrType$2.nil) {
  'V						$s = -1; return [ptrType$1.nil, false];
    					}
  'p					last.Replace = new Module.ptr((0 >= elem$3.$length ? ($throwRuntimeError("index out of range"), undefined) : elem$3.$array[elem$3.$offset + 0]), (1 >= elem$3.$length ? ($throwRuntimeError("index out of range"), undefined) : elem$3.$array[elem$3.$offset + 1]), (2 >= elem$3.$length ? ($throwRuntimeError("index out of range"), undefined) : elem$3.$array[elem$3.$offset + 2]), ptrType$2.nil);
  '�					last = ptrType$2.nil;
    				/* } */ case 8:
    			case 3:
    		$s = 1; continue;
		case 2:
  '�		$s = -1; return [info, true];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readBuildInfo }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.data = data; $f.elem = elem; $f.elem$1 = elem$1; $f.elem$2 = elem$2; $f.elem$3 = elem$3; $f.i = i; $f.info = info; $f.last = last; $f.line = line; $f.ok = ok; $f.readEntryFirstLine = readEntryFirstLine; $f.$s = $s; $f.$r = $r; return $f;
	};
readBuildInfo	runtime/debug.BuildInforuntime/debug.Moduleruntime/debug.ptrType$1runtime/debug.ptrType$2runtime/debug.readBuildInforuntime/debug.sliceType$2strings.HasPrefixstrings.IndexBytestrings.Split runtime/debug.PrintStackruntime/debug
PrintStack 
PrintStack�4	PrintStack = function() {
		var _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  )�		_r = os.Stderr.Write(Stack()); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: PrintStack }; } $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.PrintStack = PrintStack;

PrintStack	os.Stderrruntime/debug.PrintStackruntime/debug.Stack runtime/debug.Stackruntime/debugStack Stack�C	Stack = function() {
		var buf, n;
  *\		buf = $makeSlice(sliceType$3, 1024);
  *w		while (true) {
  *			n = runtime.Stack(buf, false);
    			if (n < buf.$length) {
  *�				return $subslice(buf, 0, n);
    			}
  *�			buf = $makeSlice(sliceType$3, ($imul(2, buf.$length)));
    		}
    	};
	$pkg.Stack = Stack;
Stackruntime.Stackruntime/debug.Stackruntime/debug.sliceType$3 runtime/debug.readGCStatsruntime/debugreadGCStats readGCStatst	readGCStats = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.readGCStats");
	};
readGCStatsruntime/debug.readGCStats runtime/debug.freeOSMemoryruntime/debugfreeOSMemory freeOSMemoryv	freeOSMemory = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.freeOSMemory");
	};
freeOSMemoryruntime/debug.freeOSMemory runtime/debug.setPanicOnFaultruntime/debugsetPanicOnFault setPanicOnFault|	setPanicOnFault = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.setPanicOnFault");
	};
setPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.setMaxThreadsruntime/debugsetMaxThreads setMaxThreadsx	setMaxThreads = function() {
		$throwRuntimeError("native function not implemented: runtime/debug.setMaxThreads");
	};
setMaxThreadsruntime/debug.setMaxThreads ��{"Base":11394,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/debug/debug.go","Base":1,"Size":312,"Lines":[0,14,27,28,42,43,76,121,133,135,136,170,215,292,310],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/debug/garbage.go","Base":314,"Size":7377,"Lines":[0,55,109,159,160,174,175,184,195,203,211,213,214,279,301,360,425,492,560,638,670,672,673,742,809,885,952,1029,1092,1163,1206,1241,1303,1366,1430,1486,1511,1569,1607,1659,1662,1663,1729,1797,1860,1919,1987,2007,2034,2061,2113,2152,2189,2234,2265,2266,2303,2353,2356,2393,2436,2503,2506,2507,2543,2557,2598,2630,2635,2646,2711,2764,2798,2827,2903,2942,2971,3026,3031,3083,3087,3090,3092,3093,3156,3226,3307,3353,3422,3472,3526,3563,3605,3607,3608,3667,3727,3794,3859,3881,3897,3899,3900,3954,3998,4062,4086,4131,4207,4271,4312,4315,4379,4449,4466,4500,4527,4529,4530,4591,4663,4698,4745,4787,4790,4867,4941,5029,5102,5105,5171,5239,5310,5348,5379,5381,5382,5455,5530,5609,5677,5749,5821,5876,5957,5979,6062,6132,6163,6221,6257,6299,6332,6334,6335,6404,6440,6443,6516,6586,6653,6714,6717,6790,6821,6822,6890,6960,6993,7056,7121,7180,7234,7299,7345],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/debug/mod.go","Base":7692,"Size":2541,"Lines":[0,55,109,159,160,174,175,184,195,197,198,223,245,246,302,362,404,454,487,489,490,546,569,593,634,692,731,733,734,765,786,818,853,882,926,928,929,982,1003,1023,1026,1058,1059,1068,1090,1111,1132,1152,1155,1156,1216,1256,1282,1286,1298,1320,1337,1341,1358,1379,1400,1417,1427,1430,1431,1438,1460,1475,1489,1501,1504,1560,1581,1618,1631,1640,1644,1680,1691,1733,1765,1785,1826,1878,1899,1939,1951,1973,1978,2019,2071,2093,2132,2172,2184,2206,2211,2252,2304,2327,2349,2354,2374,2396,2401,2428,2450,2472,2494,2499,2513,2517,2520,2539],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/debug/stack.go","Base":10234,"Size":756,"Lines":[0,55,109,159,160,236,257,271,272,281,287,298,300,301,383,403,429,431,432,505,587,609,636,643,676,696,714,718,751,754],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/runtime/debug/stubs.go","Base":10991,"Size":402,"Lines":[0,55,109,159,160,174,175,184,192,194,195,230,265,285,311,342,374],"Infos":null}]}
 