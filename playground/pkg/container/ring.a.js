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
GoLinkname�� Implementation�� 	Reference��   ���container/ringring�i N�n RingnextprevValueinitrNextPrevMoveLinksUnlinkLenDofringNew  F    #     0  0  2                   f  T 6  H  J  L  N $ P  R ) T   V  . X 3Z \  5 ^   `  < b   @ d Cj  E JR Ring�U	Ring = $pkg.Ring = $newType(0, $kindStruct, "ring.Ring", true, "container/ring", true, function(next_, prev_, Value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.next = ptrType.nil;
			this.prev = ptrType.nil;
			this.Value = $ifaceNil;
			return;
		}
		this.next = next_;
		this.prev = prev_;
		this.Value = Value_;
	});
��	ptrType.methods = [{prop: "init", name: "init", pkg: "container/ring", typ: $funcType([], [ptrType], false)}, {prop: "Next", name: "Next", pkg: "", typ: $funcType([], [ptrType], false)}, {prop: "Prev", name: "Prev", pkg: "", typ: $funcType([], [ptrType], false)}, {prop: "Move", name: "Move", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "Link", name: "Link", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Unlink", name: "Unlink", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType], [], false)}];
�.	Ring.init("container/ring", [{prop: "next", name: "next", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "prev", name: "prev", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "Value", name: "Value", embedded: false, exported: true, typ: $emptyInterface, tag: ""}]);
Ringcontainer/ring.Ringcontainer/ring.funcTypecontainer/ring.ptrType  ptrType	ptrType = $ptrType(Ring);
ptrTypecontainer/ring.Ring  funcType5	funcType = $funcType([$emptyInterface], [], false);
funcType (*container/ring.Ring).init ��	Ring.ptr.prototype.init = function() {
		var r;
		r = this;
  �		r.next = r;
  �		r.prev = r;
  �		return r;
    	};
	Ring.prototype.init = function() { return this.$val.init(); };
Ringinit~container/ring.Ring (*container/ring.Ring).Next ��	Ring.ptr.prototype.Next = function() {
		var r;
		r = this;
    		if (r.next === ptrType.nil) {
  /			return r.init();
    		}
  C		return r.next;
    	};
	Ring.prototype.Next = function() { return this.$val.Next(); };
Ringcontainer/ring.Ringcontainer/ring.init~container/ring.ptrType (*container/ring.Ring).Prev ��	Ring.ptr.prototype.Prev = function() {
		var r;
		r = this;
    		if (r.next === ptrType.nil) {
  �			return r.init();
    		}
  �		return r.prev;
    	};
	Ring.prototype.Prev = function() { return this.$val.Prev(); };
Ringcontainer/ring.Ringcontainer/ring.init~container/ring.ptrType (*container/ring.Ring).Move ��	Ring.ptr.prototype.Move = function(n) {
		var n, r;
		r = this;
    		if (r.next === ptrType.nil) {
  �			return r.init();
    		}
    		if (n < 0) {
  �			while (true) {
				if (!(n < 0)) { break; }
  �				r = r.prev;
  �				n = n + (1) >> 0;
    			}
    		} else if (n > 0) {
  			while (true) {
				if (!(n > 0)) { break; }
  *				r = r.next;
  !				n = n - (1) >> 0;
    			}
    		}
  =		return r;
    	};
	Ring.prototype.Move = function(n) { return this.$val.Move(n); };
Ringcontainer/ring.Ringcontainer/ring.init~container/ring.ptrType container/ring.Newcontainer/ringNew New��	New = function(n) {
		var i, n, p, r;
    		if (n <= 0) {
  �			return ptrType.nil;
    		}
  �		r = new Ring.ptr(ptrType.nil, ptrType.nil, $ifaceNil);
  �		p = r;
  �		i = 1;
		while (true) {
			if (!(i < n)) { break; }
  �			p.next = new Ring.ptr(ptrType.nil, p, $ifaceNil);
  �			p = p.next;
  �			i = i + (1) >> 0;
    		}
   		p.next = r;
  		r.prev = p;
  		return r;
    	};
	$pkg.New = New;
Newcontainer/ring.Newcontainer/ring.Ringcontainer/ring.ptrType (*container/ring.Ring).Link �J	Ring.ptr.prototype.Link = function(s) {
		var n, p, r, s;
		r = this;
  �		n = r.Next();
    		if (!(s === ptrType.nil)) {
  �			p = s.Prev();
  	d			r.next = s;
  	q			s.prev = r;
  	~			n.prev = p;
  	�			p.next = n;
    		}
  	�		return n;
    	};
	Ring.prototype.Link = function(s) { return this.$val.Link(s); };
Ringcontainer/ring.Ringcontainer/ring.ptrType (*container/ring.Ring).Unlink ��	Ring.ptr.prototype.Unlink = function(n) {
		var n, r;
		r = this;
    		if (n <= 0) {
  
�			return ptrType.nil;
    		}
  
�		return r.Link(r.Move(n + 1 >> 0));
    	};
	Ring.prototype.Unlink = function(n) { return this.$val.Unlink(n); };
Ringcontainer/ring.Ringcontainer/ring.ptrType (*container/ring.Ring).Len �b	Ring.ptr.prototype.Len = function() {
		var n, p, r;
		r = this;
  R		n = 0;
    		if (!(r === ptrType.nil)) {
  j			n = 1;
  v			p = r.Next();
			while (true) {
				if (!(!(p === r))) { break; }
  �				n = n + (1) >> 0;
  �				p = p.next;
			}
    		}
  �		return n;
    	};
	Ring.prototype.Len = function() { return this.$val.Len(); };
Ringcontainer/ring.Ringcontainer/ring.ptrType (*container/ring.Ring).Do �k	Ring.ptr.prototype.Do = function(f) {
		var f, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; f = $f.f; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  Y		/* */ if (!(r === ptrType.nil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(r === ptrType.nil)) { */ case 1:
  i			$r = f(r.Value); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  z			p = r.Next();
			/* while (true) { */ case 4:
				/* if (!(!(p === r))) { break; } */ if(!(!(p === r))) { $s = 5; continue; }
  �				$r = f(p.Value); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �				p = p.next;
			$s = 4; continue;
			case 5:
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Ring.ptr.prototype.Do }; } $f.f = f; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Ring.prototype.Do = function(f) { return this.$val.Do(f); };
Ringcontainer/ring.Ringcontainer/ring.ptrType �-{"Base":3254,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/container/ring/ring.go","Base":1,"Size":3252,"Lines":[0,55,109,159,160,217,230,231,284,355,426,494,520,523,542,560,632,634,635,665,677,689,699,701,702,762,792,812,830,833,848,850,851,915,945,965,983,986,1001,1003,1004,1076,1143,1146,1181,1201,1219,1222,1232,1245,1266,1280,1284,1297,1318,1332,1336,1339,1349,1351,1352,1389,1413,1426,1439,1442,1458,1466,1492,1518,1531,1534,1546,1558,1568,1570,1571,1626,1684,1708,1711,1757,1817,1876,1935,1991,2008,2011,2059,2121,2180,2218,2221,2258,2273,2288,2304,2354,2401,2414,2427,2440,2453,2456,2466,2468,2469,2534,2592,2651,2654,2691,2704,2717,2720,2750,2752,2753,2803,2866,2869,2896,2904,2919,2927,2969,2976,2980,2983,2993,2995,2996,3066,3118,3159,3174,3187,3229,3243,3247,3250],"Infos":null}]}
 