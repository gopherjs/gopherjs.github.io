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
GoLinkname�� Implementation�� 	Reference��   �W���runtime/tracetracecontextfmtioruntimesyncsync/atomic�
�i �� ctxContextcontextcategorymessageformatargspctxtaskTypetaskTaskid
regionTypeEndrRegionwWriteriotfnDeadlinedeadlineTimetimeokDoneErrValuekeyWritepnerrwallextlocLocationStringGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecdsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutctrace	IsEnabledLogLogfNewTaskStartStartRegionStop
WithRegionF      F  '       8F  '  & -<  E OF  2' 7 ' @R   J
   M   ^ rT e X \u   gnF  e�   rF  ' M  � F     J
  OT � X q�     F  ' M s�   �� �      v  � �  �   � �    � ��  � T �n  � �� � � T � ���� �
   �   ��  ��������� �� �� ��������T �6 � q�    � q�    � q� �    � q� �� �  �  � q�    � q�    � q�    � q� �   � q� ��   � q�   � q� �   � q�    � q� ��     � q� ��     � q� ��     � q�     � q�   
 � q�  � � �
 � q�  � �� � � q�    � q�   � � q�    � q�   � � q�  � � � q�  � � � � q�    � q�    � q�    � q�    � q�    � q� ��  �  � q� ��  �  � q� � � �  �  � q� �  � �� � �  � q�   � � q�   � � q� ��  �  � q�   � � q�  � � � q�    � q�    � q�    � q�    � q�   �   � q� ��    � q�   �   � q� ��    � q�   �   � q� ��    � q�   �   � q� ��    � q�     � q� ��  �  � q� ��  �  ���	 ���	�	� �   ��	   ��	   �   �   �   ��	  �������T �
 � ��
   �
 � ��
    � ��
 � � � � � �   � ��
    � ��
     � ��
 � � � �  T  � ��   T  � ��   T 	 � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �� ��  �  � �� ��  � � �   �   �   T � � �   �   �    �   T �  � 
� �
��4^W�e�s��E��� �nn g��� ����
����������& context!	context = $packages["context"];
��    		$r = context.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  traceContextKey��	traceContextKey = $pkg.traceContextKey = $newType(0, $kindStruct, "trace.traceContextKey", true, "runtime/trace", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
	traceContextKey.init("", []);
traceContextKeyruntime/trace.traceContextKey  Task��	Task = $pkg.Task = $newType(0, $kindStruct, "trace.Task", true, "runtime/trace", true, function(id_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.id = new $Uint64(0, 0);
			return;
		}
		this.id = id_;
	});
Y	ptrType.methods = [{prop: "End", name: "End", pkg: "", typ: $funcType([], [], false)}];
r	Task.init("runtime/trace", [{prop: "id", name: "id", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
Taskruntime/trace.Taskruntime/trace.ptrType  Region�.	Region = $pkg.Region = $newType(0, $kindStruct, "trace.Region", true, "runtime/trace", true, function(id_, regionType_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.id = new $Uint64(0, 0);
			this.regionType = "";
			return;
		}
		this.id = id_;
		this.regionType = regionType_;
	});
[	ptrType$3.methods = [{prop: "End", name: "End", pkg: "", typ: $funcType([], [], false)}];
��	Region.init("runtime/trace", [{prop: "id", name: "id", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "regionType", name: "regionType", embedded: false, exported: false, typ: $String, tag: ""}]);
Regionruntime/trace.Regionruntime/trace.ptrType$3  
structType��	structType = $structType("runtime/trace", [{prop: "Mutex", name: "Mutex", embedded: true, exported: true, typ: sync.Mutex, tag: ""}, {prop: "enabled", name: "enabled", embedded: false, exported: false, typ: $Int32, tag: ""}]);

structType
sync.Mutex  ptrType	ptrType = $ptrType(Task);
ptrTyperuntime/trace.Task  	ptrType$1 	ptrType$1 = $ptrType($Uint64);
	ptrType$1  	ptrType$2	ptrType$2 = $ptrType($Int32);
	ptrType$2  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	ptrType$3	ptrType$3 = $ptrType(Region);
	ptrType$3runtime/trace.Region  
lastTaskIDlastTaskID$24ptr
lastTaskID  bgTaskbgTask$24ptrbgTask  
noopRegion
noopRegion  tracing=		tracing = new structType.ptr(new sync.Mutex.ptr(0, 0), 0);
tracingruntime/trace.structTyperuntime/trace.tracing
sync.Mutex  '  
g		lastTaskID = new $Uint64(0, 0);

lastTaskIDruntime/trace.lastTaskID  1  		bgTask = new Task.ptr(new $Uint64(0, 0));
bgTaskruntime/trace.Taskruntime/trace.bgTask  ;  �		noopRegion = new Region.ptr(new $Uint64(0, 0), "");

noopRegionruntime/trace.Regionruntime/trace.noopRegion runtime/trace.NewTaskruntime/traceNewTask NewTask��	NewTask = function(pctx, taskType) {
		var $24r, _r, _r$1, _tmp, _tmp$1, ctx, id, pctx, pid, s, task, taskType, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; ctx = $f.ctx; id = $f.id; pctx = $f.pctx; pid = $f.pid; s = $f.s; task = $f.task; taskType = $f.taskType; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ctx = $ifaceNil;
		task = ptrType.nil;
  e		_r = fromContext(pctx); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		pid = _r.id;
  �		id = newID();
  �		userTaskCreate(id, pid, taskType);
  �		s = new Task.ptr(id);
    		_r$1 = context.WithValue(pctx, (x = new traceContextKey.ptr(), new x.constructor.elem(x)), s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tmp = _r$1;
		_tmp$1 = s;
		ctx = _tmp;
		task = _tmp$1;
		$24r = [ctx, task];
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewTask }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.ctx = ctx; $f.id = id; $f.pctx = pctx; $f.pid = pid; $f.s = s; $f.task = task; $f.taskType = taskType; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewTask = NewTask;
NewTaskcontext.WithValueruntime/trace.NewTaskruntime/trace.Taskruntime/trace.fromContextruntime/trace.newIDruntime/trace.ptrTyperuntime/trace.traceContextKeyruntime/trace.userTaskCreate runtime/trace.fromContextruntime/tracefromContext fromContext�k	fromContext = function(ctx) {
		var _r, _tuple, ctx, ok, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; ctx = $f.ctx; ok = $f.ok; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  			_r = ctx.Value((x = new traceContextKey.ptr(), new x.constructor.elem(x))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = $assertType(_r, ptrType, true);
		s = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  	L			$s = -1; return s;
    		}
  	Y		$s = -1; return bgTask;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: fromContext }; } $f._r = _r; $f._tuple = _tuple; $f.ctx = ctx; $f.ok = ok; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
fromContextruntime/trace.bgTaskruntime/trace.fromContextruntime/trace.ptrTyperuntime/trace.traceContextKey (*runtime/trace.Task).End ��	Task.ptr.prototype.End = function() {
		var t;
		t = this;
  
N		userTaskEnd(t.id);
    	};
	Task.prototype.End = function() { return this.$val.End(); };
Taskruntime/trace.Taskruntime/trace.userTaskEnd runtime/trace.newIDruntime/tracenewID newID��	newID = function() {
  
�		return atomic.AddUint64((lastTaskID$24ptr || (lastTaskID$24ptr = new ptrType$1(function() { return lastTaskID; }, function($v) { lastTaskID = $v; }))), new $Uint64(0, 1));
    	};
newIDruntime/trace.lastTaskIDruntime/trace.newIDruntime/trace.ptrType$1sync/atomic.AddUint64 runtime/trace.Logruntime/traceLog Log�	Log = function(ctx, category, message) {
		var _r, category, ctx, id, message, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; category = $f.category; ctx = $f.ctx; id = $f.id; message = $f.message; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		_r = fromContext(ctx); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r.id;
  &		userLog(id, category, message);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Log }; } $f._r = _r; $f.category = category; $f.ctx = ctx; $f.id = id; $f.message = message; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Log = Log;
Logruntime/trace.Logruntime/trace.fromContextruntime/trace.userLog runtime/trace.Logfruntime/traceLogf Logf��	Logf = function(ctx, category, format, args) {
		var _arg, _arg$1, _arg$2, _r, _r$1, args, category, ctx, format, id, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; args = $f.args; category = $f.category; ctx = $f.ctx; format = $f.format; id = $f.id; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (IsEnabled()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (IsEnabled()) { */ case 1:
  \			_r = fromContext(ctx); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			id = _r.id;
  x			_arg = id;
			_arg$1 = category;
			_r$1 = fmt.Sprintf(format, args); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_arg$2 = _r$1;
			$r = userLog(_arg, _arg$1, _arg$2); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logf }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f.args = args; $f.category = category; $f.ctx = ctx; $f.format = format; $f.id = id; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Logf = Logf;
Logffmt.Sprintfruntime/trace.IsEnabledruntime/trace.Logfruntime/trace.fromContextruntime/trace.userLog runtime/trace.WithRegionruntime/trace
WithRegion 
WithRegion��	WithRegion = function(ctx, regionType, fn) {
		var _r, ctx, fn, id, regionType, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; ctx = $f.ctx; fn = $f.fn; id = $f.id; regionType = $f.regionType; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  7		_r = fromContext(ctx); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r.id;
  R		userRegion(id, new $Uint64(0, 0), regionType);
  		$deferred.push([userRegion, [id, new $Uint64(0, 1), regionType]]);
  �		$r = fn(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: WithRegion }; } $f._r = _r; $f.ctx = ctx; $f.fn = fn; $f.id = id; $f.regionType = regionType; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.WithRegion = WithRegion;

WithRegionruntime/trace.WithRegionruntime/trace.fromContextruntime/trace.userRegion runtime/trace.StartRegionruntime/traceStartRegion StartRegion�j	StartRegion = function(ctx, regionType) {
		var _r, ctx, id, regionType, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; ctx = $f.ctx; id = $f.id; regionType = $f.regionType; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (!IsEnabled()) {
  �			$s = -1; return noopRegion;
    		}
  �		_r = fromContext(ctx); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r.id;
  �		userRegion(id, new $Uint64(0, 0), regionType);
  		$s = -1; return new Region.ptr(id, regionType);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: StartRegion }; } $f._r = _r; $f.ctx = ctx; $f.id = id; $f.regionType = regionType; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.StartRegion = StartRegion;
StartRegionruntime/trace.IsEnabledruntime/trace.Regionruntime/trace.StartRegionruntime/trace.fromContextruntime/trace.noopRegionruntime/trace.userRegion (*runtime/trace.Region).End ��	Region.ptr.prototype.End = function() {
		var r;
		r = this;
    		if (r === noopRegion) {
  =			return;
    		}
  H		userRegion(r.id, new $Uint64(0, 1), r.regionType);
    	};
	Region.prototype.End = function() { return this.$val.End(); };
Regionruntime/trace.Regionruntime/trace.noopRegionruntime/trace.userRegion runtime/trace.IsEnabledruntime/trace	IsEnabled 	IsEnabled�4	IsEnabled = function() {
		var enabled;
  2		enabled = atomic.LoadInt32((tracing.$ptr_enabled || (tracing.$ptr_enabled = new ptrType$2(function() { return this.$target.enabled; }, function($v) { this.$target.enabled = $v; }, tracing))));
  a		return enabled === 1;
    	};
	$pkg.IsEnabled = IsEnabled;
	IsEnabledruntime/trace.IsEnabledruntime/trace.ptrType$2runtime/trace.tracingsync/atomic.LoadInt32 runtime/trace.userTaskCreateruntime/traceuserTaskCreate userTaskCreatez	userTaskCreate = function() {
		$throwRuntimeError("native function not implemented: runtime/trace.userTaskCreate");
	};
userTaskCreateruntime/trace.userTaskCreate runtime/trace.userTaskEndruntime/traceuserTaskEnd userTaskEndt	userTaskEnd = function() {
		$throwRuntimeError("native function not implemented: runtime/trace.userTaskEnd");
	};
userTaskEndruntime/trace.userTaskEnd runtime/trace.userRegionruntime/trace
userRegion 
userRegionr	userRegion = function() {
		$throwRuntimeError("native function not implemented: runtime/trace.userRegion");
	};

userRegionruntime/trace.userRegion runtime/trace.userLogruntime/traceuserLog userLogl	userLog = function() {
		$throwRuntimeError("native function not implemented: runtime/trace.userLog");
	};
userLogruntime/trace.userLog runtime/trace.Startruntime/traceStart Start�		Start = function(w) {
		var $24r, $24r$1, err, w, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; err = $f.err; w = $f.w; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		w = [w];
  *�		$r = tracing.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  *�		$deferred.push([$methodVal(tracing.Mutex, "Unlock"), []]);
  +		err = runtime.StartTrace();
  +		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  +4			$24r = err;
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  +C		$go((function(w) { return function $b() {
			var _r, data, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; data = $f.data; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  +Q			/* while (true) { */ case 1:
  +Z				data = runtime.ReadTrace();
    				if (data === sliceType.nil) {
  +�					/* break; */ $s = 2; continue;
    				}
  +�				_r = w[0].Write(data); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r;
    			$s = 1; continue;
			case 2:
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._r = _r; $f.data = data; $f.$s = $s; $f.$r = $r; return $f;
		}; })(w), []);
  +�		atomic.StoreInt32((tracing.$ptr_enabled || (tracing.$ptr_enabled = new ptrType$2(function() { return this.$target.enabled; }, function($v) { this.$target.enabled = $v; }, tracing))), 1);
  +�		$24r$1 = $ifaceNil;
		$s = 5; case 5: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Start }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.err = err; $f.w = w; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.Start = Start;
Startruntime.ReadTraceruntime.StartTraceruntime/trace.Startruntime/trace.ptrType$2runtime/trace.sliceTyperuntime/trace.tracingsync/atomic.StoreInt32 runtime/trace.Stopruntime/traceStop Stop�	Stop = function() {
		var $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  ,l		$r = tracing.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ,|		$deferred.push([$methodVal(tracing.Mutex, "Unlock"), []]);
  ,�		atomic.StoreInt32((tracing.$ptr_enabled || (tracing.$ptr_enabled = new ptrType$2(function() { return this.$target.enabled; }, function($v) { this.$target.enabled = $v; }, tracing))), 0);
  ,�		runtime.StopTrace();
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Stop }; } $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.Stop = Stop;
Stopruntime.StopTraceruntime/trace.Stopruntime/trace.ptrType$2runtime/trace.tracingsync/atomic.StoreInt32 ��{"Base":11590,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/runtime/trace/annotation.go","Base":1,"Size":6366,"Lines":[0,55,109,159,160,174,175,184,195,202,217,229,231,232,262,263,333,383,453,456,523,591,637,640,701,775,840,871,935,979,982,1034,1086,1118,1193,1219,1282,1291,1379,1408,1423,1458,1478,1535,1536,1594,1657,1722,1757,1761,1811,1837,1894,1932,1959,1991,2056,2082,2086,2139,2197,2253,2272,2274,2275,2321,2377,2388,2391,2407,2409,2410,2480,2499,2510,2547,2549,2550,2613,2636,2655,2657,2658,2712,2713,2735,2770,2811,2813,2814,2847,2848,2914,2987,3023,3081,3108,3140,3142,3143,3224,3303,3321,3373,3417,3445,3499,3502,3504,3505,3513,3542,3571,3573,3574,3652,3726,3807,3816,3819,3892,3927,3996,4006,4071,4101,4162,4204,4271,4316,4377,4420,4480,4548,4562,4626,4660,4661,4688,4733,4782,4788,4790,4791,4861,4933,4990,5060,5128,5152,5155,5215,5218,5285,5304,5324,5327,5354,5399,5431,5433,5434,5505,5526,5545,5564,5566,5567,5594,5595,5643,5668,5690,5699,5702,5749,5751,5752,5801,5857,5912,5936,5983,6004,6006,6007,6010,6061,6064,6065,6096,6154,6155,6183,6211,6212,6239,6291,6292,6316],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/runtime/trace/trace.go","Base":6368,"Size":5221,"Lines":[0,55,109,159,160,229,261,264,294,297,370,439,510,575,643,669,672,740,811,882,903,906,937,940,1010,1080,1122,1125,1194,1268,1297,1300,1333,1336,1404,1449,1452,1471,1474,1541,1585,1588,1657,1671,1674,1743,1809,1884,1956,1967,1970,2045,2111,2163,2236,2311,2325,2328,2382,2385,2440,2495,2538,2541,2595,2657,2719,2727,2730,2797,2858,2927,2993,3059,3127,3196,3237,3240,3310,3374,3443,3464,3467,3525,3568,3571,3603,3639,3642,3662,3724,3753,3765,3785,3855,3888,3900,3920,4002,4029,4052,4122,4134,4137,4140,4206,4270,4334,4348,4349,4358,4364,4375,4383,4398,4400,4401,4451,4514,4571,4603,4619,4643,4644,4690,4703,4706,4719,4727,4758,4778,4788,4793,4810,4814,4819,4859,4871,4873,4874,4917,4989,5003,5019,5043,5083,5084,5105,5107,5108,5129,5178,5219],"Infos":null}]}
 