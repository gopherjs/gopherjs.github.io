ÿÿArchiveÿ 	
ImportPath Name Importsÿ 
ExportData
 Declarationsÿ 	IncJSCode
 FileSet
 Minified GoLinknamesÿ   ÿ[]stringÿ   ÿ[]*compiler.Declÿ ÿ  ÿ´ÿÿ FullName LinkingNameÿ Varsÿ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDepsÿ Blocking   *ÿSymNameÿ PkgPath Name   $ÿ[]compiler.GoLinknameÿ ÿ  ;ÿ
GoLinknameÿ Implementationÿ 	Referenceÿ   þÿ	os/signalsignalcontextossyncsyscallþ
!i ÆsigSignalos cparentContextcontextsignalsctxstop
CancelFuncStringDeadlinedeadlineTimetimeokDoneErrValuekeywallextlocLocationtGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecdsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutcsignalIgnoreIgnoredNotifyNotifyContextResetStop  F   # F         F  8  ;     9 F  H (K 0H 4M F   a  F  k       D  T v ]b           K  T g  j   o   s y  T    T É  bÒb }
    Ö Ò ¸b Ëb bÒÒT Ù6 D          ¥   ¬  ¹î ¥ ð  » ò   À õ   Ä ø   Ì û Ó   Õ þ    Ü    æ  î   ð    õ  û    ý  û      û            
     ¡ 
 ¨   ­ ² ¾ Â    ¸    Ç    Ë    Ó   ­ Û à   æ ë À ï    ô    û              Ó   ¢  û   ¦  ® ´ »   À  Å  ­ ² ¾ Ê  Ï    Ó    Ù         Ü    ¡ á    æ    ð    ú          ¡ ¡¤   ¦   ¦  ° ¨ ¡«   º   ­  Æ ¯ ¡²   Ô   ´  à ¶ ¡¹   î     ô  Ó   ý  Ó   bº	 bÁ	º	b   ¾	  Å	      §  °È	 ÒÒÒÒÒÒÒT Ë	 º ¾û	  þ	 D ¾
   À ¾
 À  ¡ Ç Í Ñ   × ¾
   ç ¾
    õ ¾
   ¡ g  T  D î  T  D Ó  T 	 D Ó    Ó    Ó    Ó   « Ó   ³ Ó   » Ó   ô Ó î   ý Ó î  b   ¡  Ñ  T ¬ b Á  Æ  Ì   Ò  T Æ Ø ßæîõ0CN   9­¥ ebb ð	¸æ
]Ëö
¡Á0 context!	context = $packages["context"];
ÿ    		$r = context.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
ÿ    		$r = os.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
ÿ    		$r = sync.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  syscall!	syscall = $packages["syscall"];
ÿ    		$r = syscall.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  stoppingþ
	stopping = $pkg.stopping = $newType(0, $kindStruct, "signal.stopping", true, "os/signal", false, function(c_, h_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.c = $chanNil;
			this.h = ptrType.nil;
			return;
		}
		this.c = c_;
		this.h = h_;
	});
ÿÂ	stopping.init("os/signal", [{prop: "c", name: "c", embedded: false, exported: false, typ: chanType, tag: ""}, {prop: "h", name: "h", embedded: false, exported: false, typ: ptrType, tag: ""}]);
stoppingos/signal.chanTypeos/signal.ptrTypeos/signal.stopping  handlerÿñ	handler = $pkg.handler = $newType(0, $kindStruct, "signal.handler", true, "os/signal", false, function(mask_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mask = arrayType$1.zero();
			return;
		}
		this.mask = mask_;
	});
þ	ptrType.methods = [{prop: "want", name: "want", pkg: "os/signal", typ: $funcType([$Int], [$Bool], false)}, {prop: "set", name: "set", pkg: "os/signal", typ: $funcType([$Int], [], false)}, {prop: "clear", name: "clear", pkg: "os/signal", typ: $funcType([$Int], [], false)}];
y	handler.init("os/signal", [{prop: "mask", name: "mask", embedded: false, exported: false, typ: arrayType$1, tag: ""}]);
handleros/signal.arrayType$1os/signal.handleros/signal.ptrType  	signalCtxþ¹	signalCtx = $pkg.signalCtx = $newType(0, $kindStruct, "signal.signalCtx", true, "os/signal", false, function(Context_, cancel_, signals_, ch_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Context = $ifaceNil;
			this.cancel = $throwNilPointerError;
			this.signals = sliceType$1.nil;
			this.ch = $chanNil;
			return;
		}
		this.Context = Context_;
		this.cancel = cancel_;
		this.signals = signals_;
		this.ch = ch_;
	});
ÿ·	ptrType$1.methods = [{prop: "stop", name: "stop", pkg: "os/signal", typ: $funcType([], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
þ 	signalCtx.init("os/signal", [{prop: "Context", name: "Context", embedded: true, exported: true, typ: context.Context, tag: ""}, {prop: "cancel", name: "cancel", embedded: false, exported: false, typ: context.CancelFunc, tag: ""}, {prop: "signals", name: "signals", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: chanType$1, tag: ""}]);
	signalCtxcontext.CancelFunccontext.Context	os.Signalos/signal.chanType$1os/signal.ptrType$1os/signal.signalCtxos/signal.sliceType$1  stringerl	stringer = $pkg.stringer = $newType(8, $kindInterface, "signal.stringer", true, "os/signal", false, null);
c	stringer.init([{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}]);
stringeros/signal.stringer  	arrayType%	arrayType = $arrayType($Int64, 65);
	arrayType  	sliceType#	sliceType = $sliceType(stopping);
	sliceTypeos/signal.stopping  chanType/	chanType = $chanType(os.Signal, true, false);
chanType	os.Signal  ptrType	ptrType = $ptrType(handler);
ptrTypeos/signal.handler  mapType(	mapType = $mapType(chanType, ptrType);
mapTypeos/signal.chanTypeos/signal.ptrType  
structTypeþ	structType = $structType("os/signal", [{prop: "Mutex", name: "Mutex", embedded: true, exported: true, typ: sync.Mutex, tag: ""}, {prop: "m", name: "m", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "ref", name: "ref", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "stopping", name: "stopping", embedded: false, exported: false, typ: sliceType, tag: ""}]);

structTypeos/signal.arrayTypeos/signal.mapTypeos/signal.sliceType
sync.Mutex  arrayType$1'	arrayType$1 = $arrayType($Uint32, 3);
arrayType$1  sliceType$1&	sliceType$1 = $sliceType(os.Signal);
sliceType$1	os.Signal  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  	ptrType$1"	ptrType$1 = $ptrType(signalCtx);
	ptrType$1os/signal.signalCtx  
chanType$12	chanType$1 = $chanType(os.Signal, false, false);

chanType$1	os.Signal  handlersc		handlers = new structType.ptr(new sync.Mutex.ptr(0, 0), false, arrayType.zero(), sliceType.nil);
handlers	os.Signalos/signal.arrayTypeos/signal.chanTypeos/signal.handleros/signal.handlersos/signal.mapTypeos/signal.ptrTypeos/signal.sliceTypeos/signal.stoppingos/signal.structType
sync.Mutex  watchSignalLoopOnceH		watchSignalLoopOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
watchSignalLoopOnceos/signal.watchSignalLoopOnce
sync.Mutex	sync.Once  watchSignalLoop+		watchSignalLoop = $throwNilPointerError;
watchSignalLoopos/signal.watchSignalLoop os/signal.signal_disable	os/signalsignal_disable signal_disable:	signal_disable = function(param) {
		var param;
    	};
signal_disableos/signal.signal_disable os/signal.signal_enable	os/signalsignal_enable signal_enable9	signal_enable = function(param) {
		var param;
    	};
signal_enableos/signal.signal_enable os/signal.signal_ignore	os/signalsignal_ignore signal_ignore9	signal_ignore = function(param) {
		var param;
    	};
signal_ignoreos/signal.signal_ignore os/signal.signal_recv	os/signalsignal_recv signal_recv6	signal_recv = function() {
   Ý		return 0;
    	};
signal_recvos/signal.signal_recv os/signal.loop	os/signalloop loop	loop = function() {
    	};
loopos/signal.loop (*os/signal.handler).want þô	handler.ptr.prototype.want = function(sig) {
		var _q, h, sig, x, x$1, y;
		h = this;
  /7		return !(((((((y = (((sig & 31) >>> 0)), y < 32 ? ((x = h.mask, x$1 = (_q = sig / 32, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) >>> y) : 0) >>> 0)) & 1) >>> 0) === 0));
    	};
	handler.prototype.want = function(sig) { return this.$val.want(sig); };
handlerwant~os/signal.handler (*os/signal.handler).set þx	handler.ptr.prototype.set = function(sig) {
		var _index, _q, h, sig, x, x$1, y;
		h = this;
    		_index = (_q = sig / 32, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  /		(x$1 = h.mask, ((_index < 0 || _index >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[_index] = (((x = h.mask, ((_index < 0 || _index >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_index])) | (((y = (((sig & 31) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0)));
    	};
	handler.prototype.set = function(sig) { return this.$val.set(sig); };
handlerset~os/signal.handler (*os/signal.handler).clear þ	handler.ptr.prototype.clear = function(sig) {
		var _index, _q, h, sig, x, x$1, y;
		h = this;
    		_index = (_q = sig / 32, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  /Ô		(x$1 = h.mask, ((_index < 0 || _index >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[_index] = (((x = h.mask, ((_index < 0 || _index >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_index])) & ~(((y = (((sig & 31) >>> 0)), y < 32 ? (1 << y) : 0) >>> 0))) >>> 0)));
    	};
	handler.prototype.clear = function(sig) { return this.$val.clear(sig); };
handlerclear~os/signal.handler os/signal.cancel	os/signalcancel cancelþj	cancel = function(sigs, action) {
		var _i, _ref, action, n, remove, s, sigs, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; action = $f.action; n = $f.n; remove = $f.remove; s = $f.s; sigs = $f.sigs; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		action = [action];
  1		$r = handlers.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  1"		$deferred.push([$methodVal(handlers.Mutex, "Unlock"), []]);
  1<		remove = (function(action) { return function $b(n) {
			var _entry, _i, _keys, _ref, c, h, n, x, x$1, x$2, x$3, zerohandler, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _keys = $f._keys; _ref = $f._ref; c = $f.c; h = $f.h; n = $f.n; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; zerohandler = $f.zerohandler; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  1Z			zerohandler = new handler.ptr(arrayType$1.zero());
  1q			_ref = handlers.m;
			_i = 0;
			_keys = $keys(_ref);
			while (true) {
				if (!(_i < _keys.length)) { break; }
				_entry = _ref[_keys[_i]];
    				if (_entry === undefined) {
    					_i++;
					continue;
    				}
				c = _entry.k;
				h = _entry.v;
    				if (h.want(n)) {
  1¦					(x$3 = handlers.ref, ((n < 0 || n >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[n] = (x = (x$1 = handlers.ref, ((n < 0 || n >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[n])), x$2 = new $Int64(0, 1), new $Int64(x.$high - x$2.$high, x.$low - x$2.$low))));
  1¼					h.clear(n);
    					if ($equal(h.mask, zerohandler.mask, arrayType$1)) {
  1ð						delete handlers.m[chanType.keyFor(c)];
    					}
    				}
    				_i++;
			}
  2			$r = action[0](n); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._entry = _entry; $f._i = _i; $f._keys = _keys; $f._ref = _ref; $f.c = c; $f.h = h; $f.n = n; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.zerohandler = zerohandler; $f.$s = $s; $f.$r = $r; return $f;
		}; })(action);
  2'		/* */ if (sigs.$length === 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (sigs.$length === 0) { */ case 2:
  2A			n = 0;
			/* while (true) { */ case 5:
				/* if (!(n < 65)) { break; } */ if(!(n < 65)) { $s = 6; continue; }
  2^				$r = remove(n); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  2U				n = n + (1) >> 0;
    			$s = 5; continue;
			case 6:
    			$s = 4; continue;
		/* } else { */ case 3:
  2x			_ref = sigs;
			_i = 0;
			/* while (true) { */ case 8:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 9; continue; }
				s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  2				$r = remove(signum(s)); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				_i++;
			$s = 8; continue;
			case 9:
    		/* } */ case 4:
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: cancel }; } $f._i = _i; $f._ref = _ref; $f.action = action; $f.n = n; $f.remove = remove; $f.s = s; $f.sigs = sigs; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
cancelos/signal.arrayType$1os/signal.cancelos/signal.chanTypeos/signal.clear~os/signal.handleros/signal.handlersos/signal.signumos/signal.want~ os/signal.Ignore	os/signalIgnore Ignoreþ'	Ignore = function(sig) {
		var sig, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; sig = $f.sig; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  3Û		$r = cancel(sig, ignoreSignal); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Ignore }; } $f.sig = sig; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Ignore = Ignore;
Ignoreos/signal.Ignoreos/signal.cancelos/signal.ignoreSignal os/signal.Ignored	os/signalIgnored Ignoredÿ	Ignored = function(sig) {
		var sig, sn;
  4Q		sn = signum(sig);
  4d		return sn >= 0 && signalIgnored(sn);
    	};
	$pkg.Ignored = Ignored;
Ignoredos/signal.Ignoredos/signal.signalIgnoredos/signal.signum os/signal.Notify	os/signalNotify Notifyþ$	Notify = function(c, sig) {
		var _entry, _i, _key, _ref, add, c, h, n, s, sig, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _key = $f._key; _ref = $f._ref; add = $f.add; c = $f.c; h = $f.h; n = $f.n; s = $f.s; sig = $f.sig; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		h = [h];
    		if (c === $chanNil) {
  9			$panic(new $String("os/signal: Notify using nil channel"));
    		}
  99		$r = handlers.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  9J		$deferred.push([$methodVal(handlers.Mutex, "Unlock"), []]);
  9d		h[0] = (_entry = handlers.m[chanType.keyFor(c)], _entry !== undefined ? _entry.v : ptrType.nil);
    		if (h[0] === ptrType.nil) {
    			if (handlers.m === false) {
  9¢				handlers.m = {};
    			}
  9Ù			h[0] = new handler.ptr(arrayType$1.zero());
  9ì			_key = c; (handlers.m || $throwRuntimeError("assignment to entry in nil map"))[chanType.keyFor(_key)] = { k: _key, v: h[0] };
    		}
  :		add = (function(h) { return function $b(n) {
			var n, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; n = $f.n; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			if (n < 0) {
  :(				$s = -1; return;
    			}
  :5			/* */ if (!h[0].want(n)) { $s = 1; continue; }
			/* */ $s = 2; continue;
    			/* if (!h[0].want(n)) { */ case 1:
  :H				h[0].set(n);
  :T				/* */ if ((x = (x$1 = handlers.ref, ((n < 0 || n >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[n])), (x.$high === 0 && x.$low === 0))) { $s = 3; continue; }
				/* */ $s = 4; continue;
    				/* if ((x = (x$1 = handlers.ref, ((n < 0 || n >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[n])), (x.$high === 0 && x.$low === 0))) { */ case 3:
  :r					enableSignal(n);
  :ß					$r = watchSignalLoopOnce.Do((function(h) { return function() {
    						if (!(watchSignalLoop === $throwNilPointerError)) {
  ;&							$go(watchSignalLoop, []);
    						}
    					}; })(h)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 4:
  ;Q				(x$5 = handlers.ref, ((n < 0 || n >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[n] = (x$2 = (x$3 = handlers.ref, ((n < 0 || n >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[n])), x$4 = new $Int64(0, 1), new $Int64(x$2.$high + x$4.$high, x$2.$low + x$4.$low))));
    			/* } */ case 2:
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.n = n; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
		}; })(h);
  ;l		/* */ if (sig.$length === 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (sig.$length === 0) { */ case 2:
  ;			n = 0;
			/* while (true) { */ case 5:
				/* if (!(n < 65)) { break; } */ if(!(n < 65)) { $s = 6; continue; }
  ;¢				$r = add(n); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ;				n = n + (1) >> 0;
    			$s = 5; continue;
			case 6:
    			$s = 4; continue;
		/* } else { */ case 3:
  ;¹			_ref = sig;
			_i = 0;
			/* while (true) { */ case 8:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 9; continue; }
				s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ;Ô				$r = add(signum(s)); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				_i++;
			$s = 8; continue;
			case 9:
    		/* } */ case 4:
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Notify }; } $f._entry = _entry; $f._i = _i; $f._key = _key; $f._ref = _ref; $f.add = add; $f.c = c; $f.h = h; $f.n = n; $f.s = s; $f.sig = sig; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.Notify = Notify;
Notifyos/signal.Notifyos/signal.arrayType$1os/signal.chanTypeos/signal.enableSignalos/signal.handleros/signal.handlersos/signal.ptrTypeos/signal.set~os/signal.signumos/signal.want~os/signal.watchSignalLoopos/signal.watchSignalLoopOnce os/signal.Reset	os/signalReset Resetþ$	Reset = function(sig) {
		var sig, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; sig = $f.sig; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  <¤		$r = cancel(sig, disableSignal); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reset }; } $f.sig = sig; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Reset = Reset;
Resetos/signal.Resetos/signal.cancelos/signal.disableSignal os/signal.Stop	os/signalStop Stopþí	Stop = function(c) {
		var _entry, _i, _ref, c, h, i, n, s, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _ref = $f._ref; c = $f.c; h = $f.h; i = $f.i; n = $f.n; s = $f.s; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  =³		$r = handlers.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  =Å		h = (_entry = handlers.m[chanType.keyFor(c)], _entry !== undefined ? _entry.v : ptrType.nil);
  =Ù		/* */ if (h === ptrType.nil) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (h === ptrType.nil) { */ case 2:
  =é			$r = handlers.Mutex.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  =ý			$s = -1; return;
    		/* } */ case 3:
  >		delete handlers.m[chanType.keyFor(c)];
  >$		n = 0;
		while (true) {
			if (!(n < 65)) { break; }
    			if (h.want(n)) {
  >R				(x$3 = handlers.ref, ((n < 0 || n >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[n] = (x = (x$1 = handlers.ref, ((n < 0 || n >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[n])), x$2 = new $Int64(0, 1), new $Int64(x.$high - x$2.$high, x.$low - x$2.$low))));
    				if ((x$4 = (x$5 = handlers.ref, ((n < 0 || n >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[n])), (x$4.$high === 0 && x$4.$low === 0))) {
  >					disableSignal(n);
    				}
    			}
  >8			n = n + (1) >> 0;
    		}
  @à		handlers.stopping = $append(handlers.stopping, new stopping.ptr(c, h));
  A 		$r = handlers.Mutex.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  A4		signalWaitUntilIdle();
  AL		$r = handlers.Mutex.Lock(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  A^		_ref = handlers.stopping;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			s = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), stopping);
    			if (s.c === c) {
  A				handlers.stopping = $appendSlice($subslice(handlers.stopping, 0, i), $subslice(handlers.stopping, (i + 1 >> 0)));
  Aè				break;
    			}
    			_i++;
		}
  A÷		$r = handlers.Mutex.Unlock(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Stop }; } $f._entry = _entry; $f._i = _i; $f._ref = _ref; $f.c = c; $f.h = h; $f.i = i; $f.n = n; $f.s = s; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Stop = Stop;
Stopos/signal.Stopos/signal.chanTypeos/signal.disableSignalos/signal.handlersos/signal.ptrTypeos/signal.signalWaitUntilIdleos/signal.stoppingos/signal.want~ os/signal.signalWaitUntilIdle	os/signalsignalWaitUntilIdle signalWaitUntilIdleÿ	signalWaitUntilIdle = function() {
		$throwRuntimeError("native function not implemented: os/signal.signalWaitUntilIdle");
	};
signalWaitUntilIdleos/signal.signalWaitUntilIdle os/signal.process	os/signalprocess processþ	¯	process = function(sig) {
		var _entry, _i, _i$1, _keys, _ref, _ref$1, _selection, _selection$1, c, d, h, n, sig, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _i$1 = $f._i$1; _keys = $f._keys; _ref = $f._ref; _ref$1 = $f._ref$1; _selection = $f._selection; _selection$1 = $f._selection$1; c = $f.c; d = $f.d; h = $f.h; n = $f.n; sig = $f.sig; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  B«		n = signum(sig);
  B½		/* */ if (n < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n < 0) { */ case 1:
  BÊ			$s = 3; case 3: return;
    		/* } */ case 2:
  BÖ		$r = handlers.Mutex.Lock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Bç		$deferred.push([$methodVal(handlers.Mutex, "Unlock"), []]);
  C		_ref = handlers.m;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			c = _entry.k;
			h = _entry.v;
    			if (h.want(n)) {
  CW				_selection = $select([[c, sig], []]);
    				if (_selection[0] === 0) {
    				} else if (_selection[0] === 1) {
    				}
    			}
    			_i++;
		}
  C²		_ref$1 = handlers.stopping;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			d = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), stopping);
    			if (d.h.want(n)) {
  Cî				_selection$1 = $select([[d.c, sig], []]);
    				if (_selection$1[0] === 0) {
    				} else if (_selection$1[0] === 1) {
    				}
    			}
    			_i$1++;
		}
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: process }; } $f._entry = _entry; $f._i = _i; $f._i$1 = _i$1; $f._keys = _keys; $f._ref = _ref; $f._ref$1 = _ref$1; $f._selection = _selection; $f._selection$1 = _selection$1; $f.c = c; $f.d = d; $f.h = h; $f.n = n; $f.sig = sig; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
processos/signal.handlersos/signal.processos/signal.signumos/signal.stoppingos/signal.want~ os/signal.NotifyContext	os/signalNotifyContext NotifyContextþ.	NotifyContext = function(parent, signals) {
		var _r, _r$1, _tmp, _tmp$1, _tuple, c, cancel$1, ctx, parent, signals, stop, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; c = $f.c; cancel$1 = $f.cancel$1; ctx = $f.ctx; parent = $f.parent; signals = $f.signals; stop = $f.stop; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = [c];
		ctx = $ifaceNil;
		stop = $throwNilPointerError;
  HB		_r = context.WithCancel(parent); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		ctx = _tuple[0];
		cancel$1 = _tuple[1];
  Hm		c[0] = new signalCtx.ptr(ctx, cancel$1, signals, $chanNil);
  H¹		c[0].ch = new $Chan(os.Signal, 1);
  HÙ		$r = Notify(c[0].ch, c[0].signals); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Hõ		_r$1 = ctx.Err(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if ($interfaceIsEqual(_r$1, $ifaceNil)) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($interfaceIsEqual(_r$1, $ifaceNil)) { */ case 3:
  I			$go((function(c) { return function $b() {
				var _r$2, _r$3, _selection, $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$2 = $f._r$2; _r$3 = $f._r$3; _selection = $f._selection; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  I				_r$2 = c[0].Context.Done(); /* */ $s = 1; case 1: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$3 = $select([[c[0].ch], [_r$2]]); /* */ $s = 2; case 2: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_selection = _r$3;
				/* */ if (_selection[0] === 0) { $s = 3; continue; }
				/* */ if (_selection[0] === 1) { $s = 4; continue; }
				/* */ $s = 5; continue;
    				/* if (_selection[0] === 0) { */ case 3:
  I9					$r = c[0].cancel(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					$s = 5; continue;
    				/* } else if (_selection[0] === 1) { */ case 4:
    				/* } */ case 5:
    				$s = -1; return;
				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._r$2 = _r$2; $f._r$3 = _r$3; $f._selection = _selection; $f.$s = $s; $f.$r = $r; return $f;
			}; })(c), []);
    		/* } */ case 4:
    		_tmp = c[0];
		_tmp$1 = $methodVal(c[0], "stop");
		ctx = _tmp;
		stop = _tmp$1;
		$s = -1; return [ctx, stop];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NotifyContext }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.c = c; $f.cancel$1 = cancel$1; $f.ctx = ctx; $f.parent = parent; $f.signals = signals; $f.stop = stop; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NotifyContext = NotifyContext;
NotifyContextcontext.WithCancel	os.Signalos/signal.Notifyos/signal.NotifyContextos/signal.signalCtxos/signal.sliceType$1os/signal.stop~ (*os/signal.signalCtx).stop þô	signalCtx.ptr.prototype.stop = function() {
		var c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  J		$r = c.cancel(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  J		$r = Stop(c.ch); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: signalCtx.ptr.prototype.stop }; } $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	signalCtx.prototype.stop = function() { return this.$val.stop(); };
	signalCtxstop~os/signal.Stopos/signal.signalCtx (*os/signal.signalCtx).String þ]	signalCtx.ptr.prototype.String = function() {
		var _arg, _arg$1, _i, _r, _r$1, _ref, buf, c, i, name, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; buf = $f.buf; c = $f.c; i = $f.i; name = $f.name; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  J		buf = sliceType$2.nil;
  K.		_r = $assertType(c.Context, stringer).String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		name = _r;
  KU		name = $substring(name, 0, (name.length - 11 >> 0));
  K		buf = $appendSlice(buf, "signal.NotifyContext(" + name);
  Kµ		/* */ if (!((c.signals.$length === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((c.signals.$length === 0))) { */ case 2:
  KÐ			buf = $appendSlice(buf, ", [");
  Kî			_ref = c.signals;
			_i = 0;
			/* while (true) { */ case 4:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 5; continue; }
				i = _i;
				s = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  L				_arg = buf;
				_r$1 = s.String(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_arg$1 = _r$1;
				buf = $appendSlice(_arg, _arg$1);
    				if (!((i === (c.signals.$length - 1 >> 0)))) {
  LR					buf = $append(buf, 32);
    				}
    				_i++;
			$s = 4; continue;
			case 5:
  Lt			buf = $append(buf, 93);
    		/* } */ case 3:
  L		buf = $append(buf, 41);
  L§		$s = -1; return ($bytesToString(buf));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: signalCtx.ptr.prototype.String }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.buf = buf; $f.c = c; $f.i = i; $f.name = name; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	signalCtx.prototype.String = function() { return this.$val.String(); };
	signalCtxos/signal.signalCtxos/signal.sliceType$2os/signal.stringer os/signal.signal_ignored	os/signalsignal_ignored signal_ignoredv	signal_ignored = function() {
		$throwRuntimeError("native function not implemented: os/signal.signal_ignored");
	};
signal_ignoredos/signal.signal_ignored os/signal.init	os/signalinit init=	init = function() {
  OX		watchSignalLoop = loop;
    	};
    		init();
os/signal.initos/signal.loopos/signal.watchSignalLoop os/signal.signum	os/signalsignum signumþZ	signum = function(sig) {
		var _ref, i, sig, sig$1, sig$2;
  OÆ		_ref = sig;
    		if ($assertType(_ref, syscall.Signal, true)[1]) {
    			sig$1 = _ref.$val;
  Où			i = ((sig$1 >> 0));
    			if (i < 0 || i >= 65) {
  P&				return -1;
    			}
  P6			return i;
    		} else {
    			sig$2 = _ref;
  PK			return -1;
    		}
    	};
signumos/signal.signumsyscall.Signal os/signal.enableSignal	os/signalenableSignal enableSignalY	enableSignal = function(sig) {
		var sig;
  Py		signal_enable(((sig >>> 0)));
    	};
enableSignalos/signal.enableSignalos/signal.signal_enable os/signal.disableSignal	os/signaldisableSignal disableSignal[	disableSignal = function(sig) {
		var sig;
  P¶		signal_disable(((sig >>> 0)));
    	};
disableSignalos/signal.disableSignalos/signal.signal_disable os/signal.ignoreSignal	os/signalignoreSignal ignoreSignalY	ignoreSignal = function(sig) {
		var sig;
  Pó		signal_ignore(((sig >>> 0)));
    	};
ignoreSignalos/signal.ignoreSignalos/signal.signal_ignore os/signal.signalIgnored	os/signalsignalIgnored signalIgnoredb	signalIgnored = function(sig) {
		var sig;
  Q5		return signal_ignored(((sig >>> 0)));
    	};
signalIgnoredos/signal.signalIgnoredos/signal.signal_ignored þú{"Base":20827,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/os/signal/signal.go","Base":1,"Size":247,"Lines":[0,14,27,28,43,44,96,97,128,159,190,231,232],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/os/signal/doc.go","Base":249,"Size":10919,"Lines":[0,55,109,159,160,163,217,218,287,329,330,347,348,416,462,463,526,592,658,724,787,829,830,891,960,985,986,1056,1123,1189,1257,1328,1393,1461,1495,1496,1539,1540,1611,1675,1746,1815,1882,1948,2014,2066,2067,2133,2192,2193,2262,2332,2403,2460,2529,2593,2615,2616,2664,2665,2732,2757,2758,2827,2889,2955,3021,3085,3155,3218,3283,3354,3425,3494,3510,3511,3580,3648,3714,3782,3846,3910,3974,3984,3985,4054,4123,4187,4255,4318,4319,4327,4328,4395,4411,4412,4482,4547,4615,4684,4754,4819,4820,4890,4952,5023,5030,5031,5099,5165,5229,5230,5263,5264,5328,5398,5467,5534,5605,5670,5740,5809,5860,5861,5932,5998,6007,6008,6073,6141,6211,6278,6285,6286,6346,6415,6476,6547,6617,6682,6717,6718,6778,6849,6918,6988,7022,7023,7088,7156,7207,7208,7277,7340,7404,7465,7534,7547,7548,7618,7689,7744,7808,7877,7943,8001,8002,8036,8037,8106,8172,8241,8312,8383,8440,8508,8534,8535,8606,8672,8731,8732,8803,8866,8937,9002,9011,9012,9080,9145,9213,9284,9352,9417,9484,9507,9508,9579,9647,9715,9786,9852,9879,9880,9888,9889,9958,10030,10102,10173,10228,10229,10300,10369,10441,10499,10571,10644,10708,10709,10716,10717,10787,10854,10900,10901,10904],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/os/signal/signal.go","Base":11169,"Size":8475,"Lines":[0,55,109,159,160,175,176,185,196,202,210,212,213,235,247,307,340,397,416,480,539,611,676,738,759,761,762,785,805,817,819,820,842,875,877,878,917,963,965,966,999,1036,1038,1039,1074,1112,1114,1115,1192,1270,1341,1391,1408,1433,1434,1459,1485,1486,1519,1537,1559,1574,1610,1637,1643,1648,1652,1653,1665,1668,1669,1690,1722,1735,1739,1749,1776,1797,1801,1804,1806,1807,1884,1959,2004,2073,2105,2132,2134,2135,2188,2223,2242,2279,2281,2282,2288,2345,2409,2474,2495,2526,2554,2556,2557,2621,2695,2741,2744,2814,2881,2959,2996,2999,3069,3131,3195,3198,3269,3335,3361,3413,3428,3475,3478,3479,3496,3521,3522,3542,3557,3582,3634,3638,3657,3677,3680,3681,3703,3716,3726,3730,3748,3760,3789,3809,3810,3855,3898,3934,3967,3994,4001,4008,4013,4034,4038,4041,4042,4062,4094,4104,4108,4118,4144,4162,4166,4169,4171,4172,4245,4257,4323,4354,4382,4384,4385,4455,4517,4593,4625,4642,4643,4663,4678,4698,4707,4710,4733,4734,4765,4782,4803,4832,4853,4858,4862,4865,4866,4922,4979,5029,5096,5155,5217,5280,5340,5399,5437,5438,5501,5502,5521,5522,5545,5546,5563,5564,5603,5619,5700,5709,5713,5716,5717,5736,5738,5739,5804,5839,5866,5867,5897,5915,5927,5936,5939,5940,5957,5982,5983,6015,6032,6067,6079,6097,6109,6114,6118,6121,6122,6160,6199,6218,6230,6250,6262,6267,6271,6274,6276,6277,6351,6423,6498,6550,6553,6633,6714,6785,6859,6940,7003,7006,7081,7157,7214,7328,7371,7389,7405,7424,7444,7447,7479,7507,7530,7544,7556,7572,7587,7607,7612,7618,7621,7639,7641,7642,7666,7683,7684,7712,7733,7757,7759,7760,7789,7801,7813,7815,7816,7842,7859,7861,7862,7900,7916,7998,8076,8115,8159,8211,8237,8267,8299,8335,8365,8392,8397,8401,8426,8429,8453,8473],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/os/signal/signal_unix.go","Base":19645,"Size":1181,"Lines":[0,55,109,159,160,277,361,362,377,378,387,393,404,406,407,442,470,497,524,557,583,584,598,605,646,649,651,652,666,690,692,693,701,740,742,743,776,804,826,842,870,883,887,898,908,920,923,925,926,955,983,985,986,1016,1045,1047,1048,1077,1105,1107,1108,1143,1179],"Infos":null}]}
 