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
GoLinkname�� Implementation�� 	Reference��   �����contextcontexterrorsinternal/reflectlitesyncsync/atomictime�	�i �� ContextDeadlinedeadlineTimetimeokDoneErrValuekeyparentctxcancel
CancelFuncdtimeoutDurationvalwallextlocLocationStringtGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundNanosecondsMicrosecondsMillisecondsSecondsMinutesHourszonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixwhenindexisstdisutccontext
BackgroundCanceledDeadlineExceededTODO
WithCancelWithDeadlineWithTimeout	WithValue  F        T * V     8         	  5 %  (   ; -    1 7>  B T FV F      M F  ;  B  Fz F  ;  X5     z  b F  ;  Z�     z    F  ;  7� k�     | �  o
   t   x�  55555�555 �  � ��5555T �6 � �5    � �5    � �5 �    � �5 �� �  �  � ��    � ��    � ��    � �� X   � �� x�   � ��   � �� �   � ��    � �5 �5     � �5 �5     � �5 �5     � �5     � �5   
 � �5  � � �
 � �5  � �� � � �5    � �5   � � �5    � �5   � � �5  � � � �5  � � � � �5    � �5    � �5    � �5    � �5    � �5 X�  5  � �5 �5  �  � �5 � � �  5  � �5 �  � �� � �  � �5   5 � �5   5 � �5 x�  5  | �5   � � �5  � � � �5    � �5    � �5    � �5    � �5   �   � �� ��    � �5   �   � �� ��    � �5   �   � �� ��    � �5   �   � �� ��    � �5     � �5 X�  5  � �5 X�  5 T 	 � X�    � X�    � X�    � X�    � X�    � X�    � X�    � X� ��  �  � X� ��  �  � �	 � �	�	  �   ��	   ��	   �   �   �   ��	  �������T �	 � ��
   �
 � ��
    � ��
 � � � � � �   � ��
    � ��
     � ��
 � � � %  T  � ��   T  � X�     �   �   �   T �   �   �   �    �   T �  � 
�M�M�P�S�]�k���   b�|�
���������E errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflectlite2	reflectlite = $packages["internal/reflectlite"];
��    		$r = reflectlite.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  time	time = $packages["time"];
��    		$r = time.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Contextg	Context = $pkg.Context = $newType(8, $kindInterface, "context.Context", true, "context", true, null);
�o	Context.init([{prop: "Deadline", name: "Deadline", pkg: "", typ: $funcType([], [time.Time, $Bool], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [chanType$1], false)}, {prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Value", name: "Value", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface], false)}]);
Contextcontext.Contextcontext.chanType$1context.structType	time.Time  deadlineExceededError��	deadlineExceededError = $pkg.deadlineExceededError = $newType(0, $kindStruct, "context.deadlineExceededError", true, "context", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
�	deadlineExceededError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Timeout", name: "Timeout", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Temporary", name: "Temporary", pkg: "", typ: $funcType([], [$Bool], false)}];
%	deadlineExceededError.init("", []);
deadlineExceededErrorcontext.deadlineExceededError  emptyCtxe	emptyCtx = $pkg.emptyCtx = $newType(4, $kindInt, "context.emptyCtx", true, "context", false, null);
��	ptrType.methods = [{prop: "Deadline", name: "Deadline", pkg: "", typ: $funcType([], [time.Time, $Bool], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [chanType$1], false)}, {prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Value", name: "Value", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
emptyCtxcontext.chanType$1context.emptyCtxcontext.ptrType	time.Time  
CancelFunck	CancelFunc = $pkg.CancelFunc = $newType(4, $kindFunc, "context.CancelFunc", true, "context", true, null);
!	CancelFunc.init([], [], false);

CancelFunccontext.CancelFunc  cancelerk	canceler = $pkg.canceler = $newType(8, $kindInterface, "context.canceler", true, "context", false, null);
��	canceler.init([{prop: "Done", name: "Done", pkg: "", typ: $funcType([], [chanType$1], false)}, {prop: "cancel", name: "cancel", pkg: "context", typ: $funcType([$Bool, $error], [], false)}]);
cancelercontext.cancelercontext.chanType$1  	cancelCtx��	cancelCtx = $pkg.cancelCtx = $newType(0, $kindStruct, "context.cancelCtx", true, "context", false, function(Context_, mu_, done_, children_, err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Context = $ifaceNil;
			this.mu = new sync.Mutex.ptr(0, 0);
			this.done = new atomic.Value.ptr($ifaceNil);
			this.children = false;
			this.err = $ifaceNil;
			return;
		}
		this.Context = Context_;
		this.mu = mu_;
		this.done = done_;
		this.children = children_;
		this.err = err_;
	});
��	ptrType$3.methods = [{prop: "Value", name: "Value", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [chanType$1], false)}, {prop: "Err", name: "Err", pkg: "", typ: $funcType([], [$error], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "cancel", name: "cancel", pkg: "context", typ: $funcType([$Bool, $error], [], false)}];
��	cancelCtx.init("context", [{prop: "Context", name: "Context", embedded: true, exported: true, typ: Context, tag: ""}, {prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "done", name: "done", embedded: false, exported: false, typ: atomic.Value, tag: ""}, {prop: "children", name: "children", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	cancelCtx	context.Contextcontext.cancelCtxcontext.cancelercontext.chanType$1context.mapTypecontext.ptrType$3context.structType
sync.Mutexsync/atomic.Value  stringerk	stringer = $pkg.stringer = $newType(8, $kindInterface, "context.stringer", true, "context", false, null);
c	stringer.init([{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}]);
stringercontext.stringer  timerCtx�	timerCtx = $pkg.timerCtx = $newType(0, $kindStruct, "context.timerCtx", true, "context", false, function(cancelCtx_, timer_, deadline_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.cancelCtx = new cancelCtx.ptr($ifaceNil, new sync.Mutex.ptr(0, 0), new atomic.Value.ptr($ifaceNil), false, $ifaceNil);
			this.timer = ptrType$5.nil;
			this.deadline = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$1.nil);
			return;
		}
		this.cancelCtx = cancelCtx_;
		this.timer = timer_;
		this.deadline = deadline_;
	});
�$	ptrType$6.methods = [{prop: "Deadline", name: "Deadline", pkg: "", typ: $funcType([], [time.Time, $Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "cancel", name: "cancel", pkg: "context", typ: $funcType([$Bool, $error], [], false)}];
�;	timerCtx.init("context", [{prop: "cancelCtx", name: "cancelCtx", embedded: true, exported: false, typ: cancelCtx, tag: ""}, {prop: "timer", name: "timer", embedded: false, exported: false, typ: ptrType$5, tag: ""}, {prop: "deadline", name: "deadline", embedded: false, exported: false, typ: time.Time, tag: ""}]);
timerCtxcontext.cancelCtxcontext.ptrType$1context.ptrType$5context.ptrType$6context.timerCtx
sync.Mutexsync/atomic.Value	time.Time  valueCtx�Z	valueCtx = $pkg.valueCtx = $newType(0, $kindStruct, "context.valueCtx", true, "context", false, function(Context_, key_, val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Context = $ifaceNil;
			this.key = $ifaceNil;
			this.val = $ifaceNil;
			return;
		}
		this.Context = Context_;
		this.key = key_;
		this.val = val_;
	});
��	ptrType$7.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Value", name: "Value", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface], false)}];
�2	valueCtx.init("context", [{prop: "Context", name: "Context", embedded: true, exported: true, typ: Context, tag: ""}, {prop: "key", name: "key", embedded: false, exported: false, typ: $emptyInterface, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $emptyInterface, tag: ""}]);
valueCtxcontext.Contextcontext.ptrType$7context.valueCtx  ptrType	ptrType = $ptrType(emptyCtx);
ptrTypecontext.emptyCtx  
structType#	structType = $structType("", []);

structType  	ptrType$1&	ptrType$1 = $ptrType(time.Location);
	ptrType$1time.Location  	ptrType$2	ptrType$2 = $ptrType($Int32);
	ptrType$2  	ptrType$3"	ptrType$3 = $ptrType(cancelCtx);
	ptrType$3context.cancelCtx  	ptrType$4	ptrType$4 = $ptrType($Int);
	ptrType$4  chanType1	chanType = $chanType(structType, false, false);
chanTypecontext.structType  	ptrType$5#	ptrType$5 = $ptrType(time.Timer);
	ptrType$5
time.Timer  
chanType$12	chanType$1 = $chanType(structType, false, true);

chanType$1context.structType  mapType+	mapType = $mapType(canceler, structType);
mapTypecontext.cancelercontext.structType  	ptrType$6!	ptrType$6 = $ptrType(timerCtx);
	ptrType$6context.timerCtx  	ptrType$7!	ptrType$7 = $ptrType(valueCtx);
	ptrType$7context.valueCtx  Canceled  DeadlineExceeded  
background
background  todotodo  
goroutinesgoroutines$24ptr		goroutines = 0;

goroutinescontext.goroutines  cancelCtxKeycancelCtxKey$24ptr		cancelCtxKey = 0;
cancelCtxKeycontext.cancelCtxKey  
closedchan
closedchan  7  �		$pkg.Canceled = errors.New("context canceled");
context.Canceled
errors.New  xa  h		$pkg.DeadlineExceeded = (x = new deadlineExceededError.ptr(), new x.constructor.elem(x));
DeadlineExceededcontext.DeadlineExceededcontext.deadlineExceededError  1  �		background = $newDataPointer(0, ptrType);
context.backgroundcontext.emptyCtxcontext.ptrType  +  �		todo = $newDataPointer(0, ptrType);
context.ptrTypecontext.todo  .  *�		closedchan = new $Chan(structType, 0);
context.closedchancontext.structType %(context.deadlineExceededError).Error ��	deadlineExceededError.ptr.prototype.Error = function() {
  �		return "context deadline exceeded";
    	};
	deadlineExceededError.prototype.Error = function() { return this.$val.Error(); };
deadlineExceededErrorcontext.deadlineExceededError '(context.deadlineExceededError).Timeout ��	deadlineExceededError.ptr.prototype.Timeout = function() {
  D		return true;
    	};
	deadlineExceededError.prototype.Timeout = function() { return this.$val.Timeout(); };
deadlineExceededErrorcontext.deadlineExceededError )(context.deadlineExceededError).Temporary ��	deadlineExceededError.ptr.prototype.Temporary = function() {
  �		return true;
    	};
	deadlineExceededError.prototype.Temporary = function() { return this.$val.Temporary(); };
deadlineExceededErrorcontext.deadlineExceededError (*context.emptyCtx).Deadline ��	$ptrType(emptyCtx).prototype.Deadline = function() {
		var deadline, ok;
		deadline = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$1.nil);
		ok = false;
  t		return [deadline, ok];
    	};
emptyCtxcontext.emptyCtxcontext.ptrType$1time.Location	time.Time (*context.emptyCtx).Done S	$ptrType(emptyCtx).prototype.Done = function() {
  �		return $chanNil;
    	};
emptyCtxcontext.emptyCtx (*context.emptyCtx).Err S	$ptrType(emptyCtx).prototype.Err = function() {
  �		return $ifaceNil;
    	};
emptyCtxcontext.emptyCtx (*context.emptyCtx).Value c	$ptrType(emptyCtx).prototype.Value = function(key) {
		var key;
  		return $ifaceNil;
    	};
emptyCtxcontext.emptyCtx (*context.emptyCtx).String �	$ptrType(emptyCtx).prototype.String = function() {
		var _1, e;
		e = this;
    		_1 = e;
    		if (_1 === (background)) {
  o			return "context.Background";
    		} else if (_1 === (todo)) {
  �			return "context.TODO";
    		}
  �		return "unknown empty Context";
    	};
emptyCtxcontext.backgroundcontext.emptyCtxcontext.todo context.Backgroundcontext
Background 
Background]	Background = function() {
   		return background;
    	};
	$pkg.Background = Background;

Backgroundcontext.Backgroundcontext.background context.TODOcontextTODO TODOE	TODO = function() {
  :		return todo;
    	};
	$pkg.TODO = TODO;
TODOcontext.TODOcontext.todo context.WithCancelcontext
WithCancel 
WithCancel�]	WithCancel = function(parent) {
		var _tmp, _tmp$1, c, cancel, ctx, parent, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; c = $f.c; cancel = $f.cancel; ctx = $f.ctx; parent = $f.parent; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = [c];
		ctx = $ifaceNil;
		cancel = $throwNilPointerError;
    		if ($interfaceIsEqual(parent, $ifaceNil)) {
  !=			$panic(new $String("cannot create context from nil parent"));
    		}
  !p		c[0] = $clone(newCancelCtx(parent), cancelCtx);
  !�		$r = propagateCancel(parent, c[0]); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		_tmp = c[0];
		_tmp$1 = (function(c) { return function $b() {
			var $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  !�			$r = c[0].cancel(true, $pkg.Canceled); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$s = $s; $f.$r = $r; return $f;
		}; })(c);
		ctx = _tmp;
		cancel = _tmp$1;
		$s = -1; return [ctx, cancel];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WithCancel }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.c = c; $f.cancel = cancel; $f.ctx = ctx; $f.parent = parent; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.WithCancel = WithCancel;

WithCancelcontext.Canceledcontext.WithCancelcontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancel context.newCancelCtxcontextnewCancelCtx newCancelCtx��	newCancelCtx = function(parent) {
		var parent;
  ";		return new cancelCtx.ptr(parent, new sync.Mutex.ptr(0, 0), new atomic.Value.ptr($ifaceNil), false, $ifaceNil);
    	};
newCancelCtxcontext.cancelCtxcontext.newCancelCtx
sync.Mutexsync/atomic.Value context.propagateCancelcontextpropagateCancel propagateCancel��	propagateCancel = function(parent, child) {
		var _arg, _key, _r, _r$1, _r$2, _selection, _tuple, child, done, ok, p, parent, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _key = $f._key; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _selection = $f._selection; _tuple = $f._tuple; child = $f.child; done = $f.done; ok = $f.ok; p = $f.p; parent = $f.parent; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		child = [child];
		parent = [parent];
  #<		_r = parent[0].Done(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		done = _r;
    		if (done === $chanNil) {
  #f			$s = -1; return;
    		}
  #�		_selection = $select([[done], []]);
		/* */ if (_selection[0] === 0) { $s = 2; continue; }
		/* */ if (_selection[0] === 1) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (_selection[0] === 0) { */ case 2:
  #�			_r$1 = parent[0].Err(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_arg = _r$1;
			$r = child[0].cancel(false, _arg); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  #�			$s = -1; return;
    		/* } else if (_selection[0] === 1) { */ case 3:
    		/* } */ case 4:
  $		_r$2 = parentCancelCtx(parent[0]); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		p = _tuple[0];
		ok = _tuple[1];
  $		/* */ if (ok) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if (ok) { */ case 8:
  $-			$r = p.mu.Lock(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  $;			/* */ if (!($interfaceIsEqual(p.err, $ifaceNil))) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if (!($interfaceIsEqual(p.err, $ifaceNil))) { */ case 12:
  $w				$r = child[0].cancel(false, p.err); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 14; continue;
			/* } else { */ case 13:
    				if (p.children === false) {
  $�					p.children = {};
    				}
  $�				_key = child[0]; (p.children || $throwRuntimeError("assignment to entry in nil map"))[canceler.keyFor(_key)] = { k: _key, v: new structType.ptr() };
    			/* } */ case 14:
  %			$r = p.mu.Unlock(); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 10; continue;
		/* } else { */ case 9:
  %+			atomic.AddInt32((goroutines$24ptr || (goroutines$24ptr = new ptrType$2(function() { return goroutines; }, function($v) { goroutines = $v; }))), 1);
  %N			$go((function(child, parent) { return function $b() {
				var _arg$1, _r$3, _r$4, _r$5, _r$6, _selection$1, $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg$1 = $f._arg$1; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _selection$1 = $f._selection$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  %]				_r$3 = parent[0].Done(); /* */ $s = 1; case 1: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$4 = child[0].Done(); /* */ $s = 2; case 2: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_r$5 = $select([[_r$3], [_r$4]]); /* */ $s = 3; case 3: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_selection$1 = _r$5;
				/* */ if (_selection$1[0] === 0) { $s = 4; continue; }
				/* */ if (_selection$1[0] === 1) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (_selection$1[0] === 0) { */ case 4:
  %�					_r$6 = parent[0].Err(); /* */ $s = 7; case 7: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_arg$1 = _r$6;
					$r = child[0].cancel(false, _arg$1); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 6; continue;
    				/* } else if (_selection$1[0] === 1) { */ case 5:
    				/* } */ case 6:
    				$s = -1; return;
				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._arg$1 = _arg$1; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._selection$1 = _selection$1; $f.$s = $s; $f.$r = $r; return $f;
			}; })(child, parent), []);
    		/* } */ case 10:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: propagateCancel }; } $f._arg = _arg; $f._key = _key; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._selection = _selection; $f._tuple = _tuple; $f.child = child; $f.done = done; $f.ok = ok; $f.p = p; $f.parent = parent; $f.$s = $s; $f.$r = $r; return $f;
	};
propagateCancelcontext.cancelercontext.cancel~context.goroutinescontext.parentCancelCtxcontext.propagateCancelcontext.ptrType$2context.structTypesync/atomic.AddInt32 context.parentCancelCtxcontextparentCancelCtx parentCancelCtx�F	parentCancelCtx = function(parent) {
		var _r, _r$1, _tuple, _tuple$1, done, ok, p, parent, pdone, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; done = $f.done; ok = $f.ok; p = $f.p; parent = $f.parent; pdone = $f.pdone; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  '�		_r = parent.Done(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		done = _r;
    		if (done === closedchan || done === $chanNil) {
  (#			$s = -1; return [ptrType$3.nil, false];
    		}
  (9		_r$1 = parent.Value((cancelCtxKey$24ptr || (cancelCtxKey$24ptr = new ptrType$4(function() { return cancelCtxKey; }, function($v) { cancelCtxKey = $v; })))); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = $assertType(_r$1, ptrType$3, true);
		p = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  (w			$s = -1; return [ptrType$3.nil, false];
    		}
  (�		_tuple$1 = $assertType(p.done.Load(), chanType, true);
		pdone = _tuple$1[0];
    		if (!(pdone === done)) {
  (�			$s = -1; return [ptrType$3.nil, false];
    		}
  (�		$s = -1; return [p, true];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parentCancelCtx }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.done = done; $f.ok = ok; $f.p = p; $f.parent = parent; $f.pdone = pdone; $f.$s = $s; $f.$r = $r; return $f;
	};
parentCancelCtxcontext.cancelCtxcontext.cancelCtxKeycontext.chanTypecontext.closedchancontext.parentCancelCtxcontext.ptrType$3context.ptrType$4context.structType context.removeChildcontextremoveChild removeChild��	removeChild = function(parent, child) {
		var _r, _tuple, child, ok, p, parent, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; child = $f.child; ok = $f.ok; p = $f.p; parent = $f.parent; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  )[		_r = parentCancelCtx(parent); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		p = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  )�			$s = -1; return;
    		}
  )�		$r = p.mu.Lock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!(p.children === false)) {
  )�			delete p.children[canceler.keyFor(child)];
    		}
  )�		$r = p.mu.Unlock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: removeChild }; } $f._r = _r; $f._tuple = _tuple; $f.child = child; $f.ok = ok; $f.p = p; $f.parent = parent; $f.$s = $s; $f.$r = $r; return $f;
	};
removeChildcontext.cancelercontext.parentCancelCtxcontext.removeChild context.initcontextinit init9	init = function() {
  +		$close(closedchan);
    	};
    		init();
context.closedchancontext.init (*context.cancelCtx).Value ��	cancelCtx.ptr.prototype.Value = function(key) {
		var $24r, _r, c, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if ($interfaceIsEqual(key, (cancelCtxKey$24ptr || (cancelCtxKey$24ptr = new ptrType$4(function() { return cancelCtxKey; }, function($v) { cancelCtxKey = $v; }))))) {
  -D			$s = -1; return c;
    		}
  -Q		_r = c.Context.Value(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cancelCtx.ptr.prototype.Value }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	cancelCtx.prototype.Value = function(key) { return this.$val.Value(key); };
	cancelCtxcontext.cancelCtxcontext.cancelCtxKeycontext.ptrType$4 (*context.cancelCtx).Done �	cancelCtx.ptr.prototype.Done = function() {
		var $24r, $24r$1, c, d, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; c = $f.c; d = $f.d; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		c = this;
  -�		d = c.done.Load();
  -�		/* */ if (!($interfaceIsEqual(d, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(d, $ifaceNil))) { */ case 1:
  -�			$24r = $assertType(d, chanType);
			$s = 3; case 3: return $24r;
    		/* } */ case 2:
  -�		$r = c.mu.Lock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  -�		$deferred.push([$methodVal(c.mu, "Unlock"), []]);
  .		d = c.done.Load();
    		if ($interfaceIsEqual(d, $ifaceNil)) {
  .$			d = new chanType(new $Chan(structType, 0));
  .>			c.done.Store(d);
    		}
  .R		$24r$1 = $assertType(d, chanType);
		$s = 5; case 5: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $chanNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: cancelCtx.ptr.prototype.Done }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.c = c; $f.d = d; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	cancelCtx.prototype.Done = function() { return this.$val.Done(); };
	cancelCtxcontext.cancelCtxcontext.chanTypecontext.structType (*context.cancelCtx).Err �2	cancelCtx.ptr.prototype.Err = function() {
		var c, err, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; err = $f.err; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  .�		$r = c.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .�		err = c.err;
  .�		$r = c.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  .�		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cancelCtx.ptr.prototype.Err }; } $f.c = c; $f.err = err; $f.$s = $s; $f.$r = $r; return $f;
	};
	cancelCtx.prototype.Err = function() { return this.$val.Err(); };
	cancelCtxcontext.cancelCtx context.contextNamecontextcontextName contextName��	contextName = function(c) {
		var $24r, $24r$1, _r, _r$1, _tuple, c, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; c = $f.c; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  / 		_tuple = $assertType(c, stringer, true);
		s = _tuple[0];
		ok = _tuple[1];
  /		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
  />			_r = s.String(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  /T		_r$1 = reflectlite.TypeOf(c).String(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: contextName }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.c = c; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
contextNamecontext.contextNamecontext.stringerinternal/reflectlite.TypeOf (*context.cancelCtx).String ��	cancelCtx.ptr.prototype.String = function() {
		var $24r, _r, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  /�		_r = contextName(c.Context); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r + ".WithCancel";
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cancelCtx.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	cancelCtx.prototype.String = function() { return this.$val.String(); };
	cancelCtxcontext.cancelCtxcontext.contextName (*context.cancelCtx).cancel �
�	cancelCtx.ptr.prototype.cancel = function(removeFromParent, err) {
		var _entry, _i, _keys, _ref, _tuple, c, child, d, err, removeFromParent, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _keys = $f._keys; _ref = $f._ref; _tuple = $f._tuple; c = $f.c; child = $f.child; d = $f.d; err = $f.err; removeFromParent = $f.removeFromParent; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  0�			$panic(new $String("context: internal error: missing cancel error"));
    		}
  0�		$r = c.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  0�		/* */ if (!($interfaceIsEqual(c.err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(c.err, $ifaceNil))) { */ case 2:
  1			$r = c.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  1			$s = -1; return;
    		/* } */ case 3:
  14		c.err = err;
  1A		_tuple = $assertType(c.done.Load(), chanType, true);
		d = _tuple[0];
    		if (d === $chanNil) {
  1x			c.done.Store(new chanType(closedchan));
    		} else {
  1�			$close(d);
    		}
  1�		_ref = c.children;
		_i = 0;
		_keys = $keys(_ref);
		/* while (true) { */ case 5:
			/* if (!(_i < _keys.length)) { break; } */ if(!(_i < _keys.length)) { $s = 6; continue; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				/* continue; */ $s = 5; continue;
    			}
			child = _entry.k;
  2			$r = child.cancel(false, err); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 5; continue;
		case 6:
  2,		c.children = false;
  2>		$r = c.mu.Unlock(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  2N		/* */ if (removeFromParent) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if (removeFromParent) { */ case 9:
  2f			$r = removeChild(c.Context, c); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 10:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cancelCtx.ptr.prototype.cancel }; } $f._entry = _entry; $f._i = _i; $f._keys = _keys; $f._ref = _ref; $f._tuple = _tuple; $f.c = c; $f.child = child; $f.d = d; $f.err = err; $f.removeFromParent = removeFromParent; $f.$s = $s; $f.$r = $r; return $f;
	};
	cancelCtx.prototype.cancel = function(removeFromParent, err) { return this.$val.cancel(removeFromParent, err); };
	cancelCtxcancel~context.cancelCtxcontext.cancel~context.chanTypecontext.closedchancontext.removeChild context.WithDeadlinecontextWithDeadline WithDeadline��	WithDeadline = function(parent, d) {
		var $24r, $24r$1, $24r$2, _r, _r$1, _tuple, c, cur, d, dur, ok, parent, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; c = $f.c; cur = $f.cur; d = $f.d; dur = $f.dur; ok = $f.ok; parent = $f.parent; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		c = [c];
    		if ($interfaceIsEqual(parent, $ifaceNil)) {
  5-			$panic(new $String("cannot create context from nil parent"));
    		}
  5c		_r = parent.Deadline(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		cur = $clone(_tuple[0], time.Time);
		ok = _tuple[1];
  5`		/* */ if (ok && $clone(cur, time.Time).Before($clone(d, time.Time))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok && $clone(cur, time.Time).Before($clone(d, time.Time))) { */ case 2:
  5�			_r$1 = WithCancel(parent); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  5�		c[0] = new timerCtx.ptr($clone(newCancelCtx(parent), cancelCtx), ptrType$5.nil, $clone(d, time.Time));
  6<		$r = propagateCancel(parent, c[0]); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  6X		dur = time.Until($clone(d, time.Time));
  6n		/* */ if ((dur.$high < 0 || (dur.$high === 0 && dur.$low <= 0))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if ((dur.$high < 0 || (dur.$high === 0 && dur.$low <= 0))) { */ case 7:
  6~			$r = c[0].cancel(true, $pkg.DeadlineExceeded); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  6�			$24r$1 = [c[0], (function(c) { return function $b() {
				var $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  6�				$r = c[0].cancel(false, $pkg.Canceled); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = -1; return;
				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$s = $s; $f.$r = $r; return $f;
			}; })(c)];
			$s = 10; case 10: return $24r$1;
    		/* } */ case 8:
  6�		$r = c[0].cancelCtx.mu.Lock(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  7 		$deferred.push([$methodVal(c[0].cancelCtx.mu, "Unlock"), []]);
  7		/* */ if ($interfaceIsEqual(c[0].cancelCtx.err, $ifaceNil)) { $s = 12; continue; }
		/* */ $s = 13; continue;
    		/* if ($interfaceIsEqual(c[0].cancelCtx.err, $ifaceNil)) { */ case 12:
  7)			c[0].timer = time.AfterFunc(dur, (function(c) { return function $b() {
				var $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  7S				$r = c[0].cancel(true, $pkg.DeadlineExceeded); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = -1; return;
				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$s = $s; $f.$r = $r; return $f;
			}; })(c));
    		/* } */ case 13:
  7}		$24r$2 = [c[0], (function(c) { return function $b() {
			var $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  7�			$r = c[0].cancel(true, $pkg.Canceled); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$s = $s; $f.$r = $r; return $f;
		}; })(c)];
		$s = 14; case 14: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [$ifaceNil, $throwNilPointerError]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: WithDeadline }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.c = c; $f.cur = cur; $f.d = d; $f.dur = dur; $f.ok = ok; $f.parent = parent; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.WithDeadline = WithDeadline;
WithDeadlinecontext.Canceledcontext.DeadlineExceededcontext.WithCancelcontext.WithDeadlinecontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancelcontext.ptrType$1context.ptrType$5context.timerCtx
sync.Mutexsync/atomic.Valuetime.AfterFunc	time.Time
time.Timer
time.Until (*context.timerCtx).Deadline ��	timerCtx.ptr.prototype.Deadline = function() {
		var _tmp, _tmp$1, c, deadline, ok;
		deadline = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType$1.nil);
		ok = false;
		c = this;
    		_tmp = $clone(c.deadline, time.Time);
		_tmp$1 = true;
		time.Time.copy(deadline, _tmp);
		ok = _tmp$1;
		return [deadline, ok];
    	};
	timerCtx.prototype.Deadline = function() { return this.$val.Deadline(); };
timerCtxcontext.ptrType$1context.timerCtx	time.Time (*context.timerCtx).String �	timerCtx.ptr.prototype.String = function() {
		var $24r, _r, _r$1, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  9G		_r = contextName(c.cancelCtx.Context); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = $clone(c.deadline, time.Time).String(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r + ".WithDeadline(" + _r$1 + " [" + time.Until($clone(c.deadline, time.Time)).String() + "])";
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: timerCtx.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	timerCtx.prototype.String = function() { return this.$val.String(); };
timerCtxcontext.contextNamecontext.timerCtx	time.Time
time.Until (*context.timerCtx).cancel �	timerCtx.ptr.prototype.cancel = function(removeFromParent, err) {
		var c, err, removeFromParent, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; err = $f.err; removeFromParent = $f.removeFromParent; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  :		$r = c.cancelCtx.cancel(false, err); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  :.		/* */ if (removeFromParent) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (removeFromParent) { */ case 2:
  :�			$r = removeChild(c.cancelCtx.Context, c); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
  :�		$r = c.cancelCtx.mu.Lock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!(c.timer === ptrType$5.nil)) {
  :�			c.timer.Stop();
  :�			c.timer = ptrType$5.nil;
    		}
  :�		$r = c.cancelCtx.mu.Unlock(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: timerCtx.ptr.prototype.cancel }; } $f.c = c; $f.err = err; $f.removeFromParent = removeFromParent; $f.$s = $s; $f.$r = $r; return $f;
	};
	timerCtx.prototype.cancel = function(removeFromParent, err) { return this.$val.cancel(removeFromParent, err); };
timerCtxcancel~context.cancel~context.ptrType$5context.removeChildcontext.timerCtx context.WithTimeoutcontextWithTimeout WithTimeout� 	WithTimeout = function(parent, timeout) {
		var $24r, _r, parent, timeout, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; parent = $f.parent; timeout = $f.timeout; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  =K		_r = WithDeadline(parent, $clone($clone(time.Now(), time.Time).Add(timeout), time.Time)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WithTimeout }; } $f.$24r = $24r; $f._r = _r; $f.parent = parent; $f.timeout = timeout; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.WithTimeout = WithTimeout;
WithTimeoutcontext.WithDeadlinecontext.WithTimeouttime.Now	time.Time context.WithValuecontext	WithValue 	WithValue�q	WithValue = function(parent, key, val) {
		var _r, key, parent, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; key = $f.key; parent = $f.parent; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if ($interfaceIsEqual(parent, $ifaceNil)) {
  @g			$panic(new $String("cannot create context from nil parent"));
    		}
    		if ($interfaceIsEqual(key, $ifaceNil)) {
  @�			$panic(new $String("nil key"));
    		}
  @�		_r = reflectlite.TypeOf(key).Comparable(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!_r) { */ case 1:
  @�			$panic(new $String("key is not comparable"));
    		/* } */ case 2:
  A		$s = -1; return new valueCtx.ptr(parent, key, val);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WithValue }; } $f._r = _r; $f.key = key; $f.parent = parent; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.WithValue = WithValue;
	WithValuecontext.WithValuecontext.valueCtxinternal/reflectlite.TypeOf context.stringifycontext	stringify 	stringify��	stringify = function(v) {
		var $24r, _r, _ref, s, s$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _ref = $f._ref; s = $f.s; s$1 = $f.s$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  B�		_ref = v;
		/* */ if ($assertType(_ref, stringer, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, $String, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, stringer, true)[1]) { */ case 1:
    			s = _ref;
  B�			_r = s.String(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 5; case 5: return $24r;
    		/* } else if ($assertType(_ref, $String, true)[1]) { */ case 2:
    			s$1 = _ref.$val;
  C			$s = -1; return s$1;
    		/* } */ case 3:
  C		$s = -1; return "<not Stringer>";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringify }; } $f.$24r = $24r; $f._r = _r; $f._ref = _ref; $f.s = s; $f.s$1 = s$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringifycontext.stringercontext.stringify (*context.valueCtx).String ��	valueCtx.ptr.prototype.String = function() {
		var $24r, _r, _r$1, _r$2, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  C\		_r = contextName(c.Context); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = reflectlite.TypeOf(c.key).String(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = stringify(c.val); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r + ".WithValue(type " + _r$1 + ", val " + _r$2 + ")";
		$s = 4; case 4: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: valueCtx.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	valueCtx.prototype.String = function() { return this.$val.String(); };
valueCtxcontext.contextNamecontext.stringifycontext.valueCtxinternal/reflectlite.TypeOf (*context.valueCtx).Value �U	valueCtx.ptr.prototype.Value = function(key) {
		var $24r, _r, c, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if ($interfaceIsEqual(c.key, key)) {
  D,			$s = -1; return c.val;
    		}
  D=		_r = c.Context.Value(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: valueCtx.ptr.prototype.Value }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	valueCtx.prototype.Value = function(key) { return this.$val.Value(key); };
valueCtxcontext.valueCtx ��{"Base":17500,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/context/context.go","Base":1,"Size":17498,"Lines":[0,55,109,159,160,230,309,335,338,409,476,547,616,678,725,728,794,865,929,997,1064,1132,1198,1221,1224,1299,1379,1395,1398,1469,1547,1582,1585,1644,1668,1674,1677,1756,1805,1808,1887,1946,1949,2029,2095,2098,2177,2190,2206,2207,2216,2226,2250,2258,2273,2281,2283,2284,2364,2383,2386,2460,2485,2556,2627,2690,2732,2733,2807,2879,2950,3011,3050,3054,3123,3189,3262,3275,3279,3330,3334,3405,3471,3535,3547,3581,3604,3623,3632,3648,3674,3699,3721,3730,3738,3745,3749,3823,3860,3884,3885,3933,4000,4041,4099,4185,4198,4199,4272,4343,4385,4389,4455,4528,4543,4547,4619,4687,4759,4824,4887,4903,4907,4981,5023,5027,5095,5113,5117,5139,5143,5201,5229,5233,5301,5371,5389,5393,5460,5529,5573,5594,5598,5661,5730,5778,5785,5789,5855,5914,5956,5975,5982,6018,6020,6021,6100,6146,6147,6223,6243,6296,6297,6333,6334,6419,6481,6543,6544,6624,6691,6709,6710,6770,6778,6780,6781,6823,6835,6837,6838,6869,6881,6883,6884,6938,6950,6952,6953,6990,7002,7020,7050,7062,7086,7089,7121,7123,7124,7130,7158,7186,7188,7189,7266,7341,7413,7426,7454,7473,7475,7476,7552,7629,7699,7714,7736,7749,7751,7752,7808,7860,7929,7999,8022,8023,8100,8180,8261,8264,8344,8419,8486,8506,8555,8558,8585,8614,8662,8664,8665,8715,8761,8796,8798,8799,8872,8893,8894,8963,9018,9041,9059,9096,9099,9100,9110,9124,9156,9192,9201,9211,9214,9215,9258,9272,9292,9331,9361,9372,9398,9443,9448,9482,9486,9502,9512,9547,9561,9573,9598,9636,9660,9665,9671,9674,9676,9677,9742,9763,9764,9829,9895,9959,10025,10084,10151,10209,10232,10272,10292,10295,10346,10356,10376,10379,10422,10442,10462,10465,10481,10483,10484,10534,10585,10619,10629,10638,10641,10654,10678,10706,10709,10724,10726,10727,10794,10843,10869,10911,10935,10937,10938,10982,11019,11020,11034,11053,11055,11056,11132,11160,11184,11193,11194,11255,11352,11423,11498,11500,11501,11558,11585,11596,11599,11628,11630,11631,11676,11696,11711,11738,11741,11754,11775,11794,11809,11835,11853,11856,11882,11884,11885,11919,11932,11946,11961,11973,11975,11976,12002,12019,12021,12022,12059,12091,12111,12114,12153,12155,12156,12194,12241,12243,12244,12307,12374,12437,12454,12511,12514,12527,12546,12562,12591,12594,12607,12646,12661,12688,12698,12709,12712,12745,12812,12839,12842,12860,12875,12876,12899,12927,12930,12932,12933,13013,13091,13169,13250,13325,13361,13364,13444,13519,13590,13610,13659,13662,13718,13780,13808,13811,13828,13863,13879,13882,13910,13932,13947,14013,14062,14065,14078,14099,14118,14159,14195,14200,14203,14250,14252,14253,14324,14399,14434,14457,14468,14510,14511,14531,14533,14534,14596,14621,14623,14624,14661,14723,14754,14795,14797,14798,14860,14892,14915,14979,15017,15020,15033,15054,15071,15087,15090,15105,15107,15108,15178,15181,15261,15336,15339,15412,15479,15572,15603,15609,15689,15743,15745,15746,15826,15834,15837,15916,15975,15978,16043,16108,16178,16238,16292,16359,16401,16464,16484,16533,16536,16553,16572,16575,16619,16652,16655,16691,16693,16694,16771,16825,16848,16857,16879,16881,16882,16957,17027,17050,17089,17113,17129,17149,17163,17174,17177,17202,17204,17205,17242,17296,17335,17371,17373,17374,17430,17449,17464,17467,17496],"Infos":null}]}
 