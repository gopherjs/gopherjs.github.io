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
GoLinkname�� Implementation�� 	Reference��   �9���internal/singleflightsingleflightsync��i �� muMutexsyncmcallDogGroupkeyfnverrsharedDoChanResultdoCallcForgetUnsharedValErrSharedstatesemaLocklockSlowUnlock
unlockSlownewwg	WaitGroupvaldupschanscounterchstate1AdddeltaWaitstatepsemapDonesingleflight 
  #&      (    8       =     8       Q   < _8#       i  8T +  ; ! %A (K * .   5 O ! %U  b     C e Jg ! %m   L w !         [�   _   c   T � 
 j   p	      T � u �   z �   � �   � � �   �
   _�  ��   ��   *   �   ��  T � 
 �	
 �   ��   ��  ���
	�T � � �� �   � ��   j ��  �� �� � ��   � Y<��

 ��� sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  call��	call = $pkg.call = $newType(0, $kindStruct, "singleflight.call", true, "internal/singleflight", false, function(wg_, val_, err_, dups_, chans_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wg = new sync.WaitGroup.ptr(0, $chanNil, arrayType.zero());
			this.val = $ifaceNil;
			this.err = $ifaceNil;
			this.dups = 0;
			this.chans = sliceType.nil;
			return;
		}
		this.wg = wg_;
		this.val = val_;
		this.err = err_;
		this.dups = dups_;
		this.chans = chans_;
	});
��	call.init("internal/singleflight", [{prop: "wg", name: "wg", embedded: false, exported: false, typ: sync.WaitGroup, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $emptyInterface, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "dups", name: "dups", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "chans", name: "chans", embedded: false, exported: false, typ: sliceType, tag: ""}]);
callinternal/singleflight.arrayTypeinternal/singleflight.callinternal/singleflight.sliceTypesync.WaitGroup  Group� 	Group = $pkg.Group = $newType(0, $kindStruct, "singleflight.Group", true, "internal/singleflight", true, function(mu_, m_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new sync.Mutex.ptr(0, 0);
			this.m = false;
			return;
		}
		this.mu = mu_;
		this.m = m_;
	});
��	ptrType$1.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([$String, funcType], [$emptyInterface, $error, $Bool], false)}, {prop: "DoChan", name: "DoChan", pkg: "", typ: $funcType([$String, funcType], [chanType$1, $Bool], false)}, {prop: "doCall", name: "doCall", pkg: "internal/singleflight", typ: $funcType([ptrType, $String, funcType], [], false)}, {prop: "ForgetUnshared", name: "ForgetUnshared", pkg: "", typ: $funcType([$String], [$Bool], false)}];
��	Group.init("internal/singleflight", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "m", name: "m", embedded: false, exported: false, typ: mapType, tag: ""}]);
Groupinternal/singleflight.Groupinternal/singleflight.Result internal/singleflight.chanType$1internal/singleflight.funcTypeinternal/singleflight.mapTypeinternal/singleflight.ptrTypeinternal/singleflight.ptrType$1
sync.Mutex  Result�^	Result = $pkg.Result = $newType(0, $kindStruct, "singleflight.Result", true, "internal/singleflight", true, function(Val_, Err_, Shared_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Val = $ifaceNil;
			this.Err = $ifaceNil;
			this.Shared = false;
			return;
		}
		this.Val = Val_;
		this.Err = Err_;
		this.Shared = Shared_;
	});
�	Result.init("", [{prop: "Val", name: "Val", embedded: false, exported: true, typ: $emptyInterface, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}, {prop: "Shared", name: "Shared", embedded: false, exported: true, typ: $Bool, tag: ""}]);
Resultinternal/singleflight.Result  ptrType	ptrType = $ptrType(call);
ptrTypeinternal/singleflight.call  	arrayType%	arrayType = $arrayType($Uint32, 3);
	arrayType  chanType,	chanType = $chanType(Result, true, false);
chanTypeinternal/singleflight.Result  	sliceType#	sliceType = $sliceType(chanType);
	sliceTypeinternal/singleflight.chanType  funcType=	funcType = $funcType([], [$emptyInterface, $error], false);
funcType  
chanType$1.	chanType$1 = $chanType(Result, false, true);

chanType$1internal/singleflight.Result  	ptrType$1	ptrType$1 = $ptrType(Group);
	ptrType$1internal/singleflight.Group  mapType'	mapType = $mapType($String, ptrType);
mapTypeinternal/singleflight.ptrType !(*internal/singleflight.Group).Do �
�	Group.ptr.prototype.Do = function(key, fn) {
		var _entry, _key, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, c, c$1, err, fn, g, key, ok, shared, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _key = $f._key; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; c = $f.c; c$1 = $f.c$1; err = $f.err; fn = $f.fn; g = $f.g; key = $f.key; ok = $f.ok; shared = $f.shared; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = $ifaceNil;
		err = $ifaceNil;
		shared = false;
		g = this;
  		$r = g.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (g.m === false) {
  '			g.m = {};
    		}
  K		_tuple = (_entry = g.m[$String.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType.nil, false]);
		c = _tuple[0];
		ok = _tuple[1];
  H		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok) { */ case 2:
  e			c.dups = c.dups + (1) >> 0;
  p			$r = g.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			$r = c.wg.Wait(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_tmp = c.val;
			_tmp$1 = c.err;
			_tmp$2 = true;
			v = _tmp;
			err = _tmp$1;
			shared = _tmp$2;
			$s = -1; return [v, err, shared];
    		/* } */ case 3:
  �		c$1 = new call.ptr(new sync.WaitGroup.ptr(0, $chanNil, arrayType.zero()), $ifaceNil, $ifaceNil, 0, sliceType.nil);
  �		c$1.wg.Add(1);
  �		_key = key; (g.m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: c$1 };
  �		$r = g.mu.Unlock(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$r = g.doCall(c$1, key, fn); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		_tmp$3 = c$1.val;
		_tmp$4 = c$1.err;
		_tmp$5 = c$1.dups > 0;
		v = _tmp$3;
		err = _tmp$4;
		shared = _tmp$5;
		$s = -1; return [v, err, shared];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Group.ptr.prototype.Do }; } $f._entry = _entry; $f._key = _key; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.c = c; $f.c$1 = c$1; $f.err = err; $f.fn = fn; $f.g = g; $f.key = key; $f.ok = ok; $f.shared = shared; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Group.prototype.Do = function(key, fn) { return this.$val.Do(key, fn); };
Group	internal/singleflight.Groupinternal/singleflight.Resultinternal/singleflight.arrayTypeinternal/singleflight.callinternal/singleflight.chanTypeinternal/singleflight.doCall~internal/singleflight.ptrTypeinternal/singleflight.sliceTypesync.WaitGroup %(*internal/singleflight.Group).DoChan ��	Group.ptr.prototype.DoChan = function(key, fn) {
		var _entry, _key, _tuple, c, c$1, ch, fn, g, key, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _key = $f._key; _tuple = $f._tuple; c = $f.c; c$1 = $f.c$1; ch = $f.ch; fn = $f.fn; g = $f.g; key = $f.key; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		g = this;
  q		ch = new $Chan(Result, 1);
  �		$r = g.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (g.m === false) {
  �			g.m = {};
    		}
  �		_tuple = (_entry = g.m[$String.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType.nil, false]);
		c = _tuple[0];
		ok = _tuple[1];
  �		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok) { */ case 2:
  �			c.dups = c.dups + (1) >> 0;
  �			c.chans = $append(c.chans, ch);
  				$r = g.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	%			$s = -1; return [ch, false];
    		/* } */ case 3:
  	:		c$1 = new call.ptr(new sync.WaitGroup.ptr(0, $chanNil, arrayType.zero()), $ifaceNil, $ifaceNil, 0, new sliceType([ch]));
  	b		c$1.wg.Add(1);
  	o		_key = key; (g.m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: c$1 };
  	}		$r = g.mu.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	�		$go($methodVal(g, "doCall"), [c$1, key, fn]);
  	�		$s = -1; return [ch, true];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Group.ptr.prototype.DoChan }; } $f._entry = _entry; $f._key = _key; $f._tuple = _tuple; $f.c = c; $f.c$1 = c$1; $f.ch = ch; $f.fn = fn; $f.g = g; $f.key = key; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	Group.prototype.DoChan = function(key, fn) { return this.$val.DoChan(key, fn); };
Groupinternal/singleflight.Groupinternal/singleflight.Resultinternal/singleflight.arrayTypeinternal/singleflight.callinternal/singleflight.doCall~internal/singleflight.ptrTypeinternal/singleflight.sliceTypesync.WaitGroup %(*internal/singleflight.Group).doCall �	Group.ptr.prototype.doCall = function(c, key, fn) {
		var _i, _r, _ref, _tuple, c, ch, fn, g, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; c = $f.c; ch = $f.ch; fn = $f.fn; g = $f.g; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		g = this;
  
6		_r = fn(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		c.val = _tuple[0];
		c.err = _tuple[1];
  
K		c.wg.Done();
  
Y		$r = g.mu.Lock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
f		delete g.m[$String.keyFor(key)];
  
x		_ref = c.chans;
		_i = 0;
		/* while (true) { */ case 3:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 4; continue; }
			ch = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			$r = $send(ch, $clone(new Result.ptr(c.val, c.err, c.dups > 0), Result)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 3; continue;
		case 4:
  
�		$r = g.mu.Unlock(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Group.ptr.prototype.doCall }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f.c = c; $f.ch = ch; $f.fn = fn; $f.g = g; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	Group.prototype.doCall = function(c, key, fn) { return this.$val.doCall(c, key, fn); };
GroupdoCall~internal/singleflight.Groupinternal/singleflight.Result -(*internal/singleflight.Group).ForgetUnshared ��	Group.ptr.prototype.ForgetUnshared = function(key) {
		var $24r, $24r$1, $24r$2, _entry, _tuple, c, g, key, ok, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _entry = $f._entry; _tuple = $f._tuple; c = $f.c; g = $f.g; key = $f.key; ok = $f.ok; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		g = this;
  f		$r = g.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  s		$deferred.push([$methodVal(g.mu, "Unlock"), []]);
  �		_tuple = (_entry = g.m[$String.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType.nil, false]);
		c = _tuple[0];
		ok = _tuple[1];
  �		/* */ if (!ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!ok) { */ case 2:
  �			$24r = true;
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  �		/* */ if (c.dups === 0) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (c.dups === 0) { */ case 5:
  �			delete g.m[$String.keyFor(key)];
  �			$24r$1 = true;
			$s = 7; case 7: return $24r$1;
    		/* } */ case 6:
  �		$24r$2 = false;
		$s = 8; case 8: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return false; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Group.ptr.prototype.ForgetUnshared }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._entry = _entry; $f._tuple = _tuple; $f.c = c; $f.g = g; $f.key = key; $f.ok = ok; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Group.prototype.ForgetUnshared = function(key) { return this.$val.ForgetUnshared(key); };
Groupinternal/singleflight.Groupinternal/singleflight.ptrType ��{"Base":3324,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/singleflight/singleflight.go","Base":1,"Size":3322,"Lines":[0,55,109,159,160,231,245,266,267,281,282,340,359,378,379,442,493,510,521,522,582,644,689,700,723,725,726,787,854,874,909,952,954,955,1012,1029,1050,1070,1084,1097,1099,1100,1169,1235,1304,1359,1437,1542,1555,1572,1603,1606,1634,1645,1661,1675,1703,1706,1722,1735,1749,1764,1765,1787,1820,1822,1823,1888,1962,2031,2068,2159,2187,2200,2217,2248,2251,2279,2290,2322,2338,2357,2360,2400,2413,2427,2442,2443,2468,2469,2486,2488,2489,2534,2612,2633,2646,2647,2660,2678,2708,2749,2752,2767,2769,2770,2846,2922,3001,3074,3122,3172,3185,3206,3225,3235,3249,3252,3270,3289,3303,3306,3320],"Infos":null}]}
 