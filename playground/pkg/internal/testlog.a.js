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
GoLinkname�� Implementation�� 	Reference��   �!6��internal/testlogtestlogsyncsync/atomic��i q`name ChdirdirGetenvkeyOpenfileStat	InterfaceimplvtestlogLoggerPanicOnExit0	SetLoggerSetPanicOnExit0F                    %    T ( *F   OF     F    F  4O  F  9   F     ;  *,C29JAWHaP%X sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	Interfacev	Interface = $pkg.Interface = $newType(8, $kindInterface, "testlog.Interface", true, "internal/testlog", true, null);
�M	Interface.init([{prop: "Chdir", name: "Chdir", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Getenv", name: "Getenv", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Stat", name: "Stat", pkg: "", typ: $funcType([$String], [], false)}]);
	Interfaceinternal/testlog.Interface  
structType��	structType = $structType("internal/testlog", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $Bool, tag: ""}]);

structType
sync.Mutex  ptrType 	ptrType = $ptrType(Interface);
ptrTypeinternal/testlog.Interface  panicOnExit0F		panicOnExit0 = new structType.ptr(new sync.Mutex.ptr(0, 0), false);
panicOnExit0internal/testlog.panicOnExit0internal/testlog.structType
sync.Mutex  logger,		logger = new atomic.Value.ptr($ifaceNil);
loggerinternal/testlog.loggersync/atomic.Value internal/testlog.PanicOnExit0internal/testlogPanicOnExit0 PanicOnExit0��	PanicOnExit0 = function() {
		var $24r, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  		$r = panicOnExit0.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  *		$deferred.push([$methodVal(panicOnExit0.mu, "Unlock"), []]);
  J		$24r = panicOnExit0.val;
		$s = 2; case 2: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return false; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: PanicOnExit0 }; } $f.$24r = $24r; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.PanicOnExit0 = PanicOnExit0;
PanicOnExit0internal/testlog.PanicOnExit0internal/testlog.panicOnExit0  internal/testlog.SetPanicOnExit0internal/testlogSetPanicOnExit0 SetPanicOnExit0��	SetPanicOnExit0 = function(v) {
		var v, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; v = $f.v; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  �		$r = panicOnExit0.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$deferred.push([$methodVal(panicOnExit0.mu, "Unlock"), []]);
  �		panicOnExit0.val = v;
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: SetPanicOnExit0 }; } $f.v = v; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.SetPanicOnExit0 = SetPanicOnExit0;
SetPanicOnExit0 internal/testlog.SetPanicOnExit0internal/testlog.panicOnExit0 internal/testlog.SetLoggerinternal/testlog	SetLogger 	SetLogger�i	SetLogger = function(impl) {
		var impl, impl$24ptr;
    		if (!($interfaceIsEqual(logger.Load(), $ifaceNil))) {
  �			$panic(new $String("testlog: SetLogger must be called only once"));
    		}
  �		logger.Store((impl$24ptr || (impl$24ptr = new ptrType(function() { return impl; }, function($v) { impl = $v; }))));
    	};
	$pkg.SetLogger = SetLogger;
	SetLoggerinternal/testlog.Interfaceinternal/testlog.SetLoggerinternal/testlog.loggerinternal/testlog.ptrType internal/testlog.Loggerinternal/testlogLogger Logger��	Logger = function() {
		var impl;
  	t		impl = logger.Load();
    		if ($interfaceIsEqual(impl, $ifaceNil)) {
  	�			return $ifaceNil;
    		}
  	�		return $assertType(impl, ptrType).$get();
    	};
	$pkg.Logger = Logger;
Loggerinternal/testlog.Loggerinternal/testlog.loggerinternal/testlog.ptrType internal/testlog.Getenvinternal/testlogGetenv Getenv�	Getenv = function(name) {
		var log, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; log = $f.log; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
$		log = Logger();
  
!		/* */ if (!($interfaceIsEqual(log, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(log, $ifaceNil))) { */ case 1:
  
D			$r = log.Getenv(name); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Getenv }; } $f.log = log; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Getenv = Getenv;
Getenvinternal/testlog.Getenvinternal/testlog.Logger internal/testlog.Openinternal/testlogOpen Open�	Open = function(name) {
		var log, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; log = $f.log; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
�		log = Logger();
  
�		/* */ if (!($interfaceIsEqual(log, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(log, $ifaceNil))) { */ case 1:
  
�			$r = log.Open(name); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Open }; } $f.log = log; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Open = Open;
Openinternal/testlog.Loggerinternal/testlog.Open internal/testlog.Statinternal/testlogStat Stat�	Stat = function(name) {
		var log, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; log = $f.log; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  8		log = Logger();
  5		/* */ if (!($interfaceIsEqual(log, $ifaceNil))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!($interfaceIsEqual(log, $ifaceNil))) { */ case 1:
  X			$r = log.Stat(name); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Stat }; } $f.log = log; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Stat = Stat;
Statinternal/testlog.Loggerinternal/testlog.Stat ��{"Base":2925,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/testlog/exit.go","Base":1,"Size":981,"Lines":[0,55,109,159,160,176,177,191,192,258,327,396,467,501,528,552,584,609,611,612,680,747,772,798,814,824,826,827,870,901,925,957,979],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/testlog/log.go","Base":983,"Size":1941,"Lines":[0,55,109,159,160,222,284,336,352,353,374,375,431,502,564,626,653,673,692,711,730,732,733,776,823,873,921,976,1018,1042,1043,1117,1169,1202,1229,1284,1287,1308,1310,1311,1369,1410,1436,1459,1477,1490,1493,1520,1522,1523,1582,1609,1643,1662,1665,1667,1668,1723,1748,1782,1799,1802,1804,1805,1860,1885,1919,1936,1939],"Infos":null}]}
 