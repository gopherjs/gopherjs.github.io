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
GoLinkname�� Implementation�� 	Reference��   �g���#vendor/golang.org/x/crypto/poly1305poly1305crypto/subtleencoding/binary	math/bits��i �� mac	finalizedSizehMACWritepnerrSumbVerifyexpectedkeyoutm
macGenericmacStatebufferoffsetrspoly1305NewTagSize            0000T #  3     5  7 " $  ( 9 ,;  =  . ? 5A     ~0F  >�  � � �F  B� F� >�  C  � �F  � F� >�     H   H� T �  S   S�  \�   c  ���T �  �  �      ( � B�  


  �   j�   l�  T �  n #we(�{�.��H�S�$ subtle&	subtle = $packages["crypto/subtle"];
��    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  mac�|	mac = $pkg.mac = $newType(0, $kindStruct, "poly1305.mac", true, "vendor/golang.org/x/crypto/poly1305", false, function(macGeneric_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.macGeneric = new macGeneric.ptr(new macState.ptr(arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero()), arrayType.zero(), 0);
			return;
		}
		this.macGeneric = macGeneric_;
	});
��	mac.init("vendor/golang.org/x/crypto/poly1305", [{prop: "macGeneric", name: "macGeneric", embedded: true, exported: false, typ: macGeneric, tag: ""}]);
mac-vendor/golang.org/x/crypto/poly1305.arrayType/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2'vendor/golang.org/x/crypto/poly1305.mac.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState  MAC��	MAC = $pkg.MAC = $newType(0, $kindStruct, "poly1305.MAC", true, "vendor/golang.org/x/crypto/poly1305", true, function(mac_, finalized_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mac = new mac.ptr(new macGeneric.ptr(new macState.ptr(arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero()), arrayType.zero(), 0));
			this.finalized = false;
			return;
		}
		this.mac = mac_;
		this.finalized = finalized_;
	});
�j	ptrType.methods = [{prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "Verify", name: "Verify", pkg: "", typ: $funcType([sliceType], [$Bool], false)}];
��	MAC.init("vendor/golang.org/x/crypto/poly1305", [{prop: "mac", name: "mac", embedded: true, exported: false, typ: mac, tag: ""}, {prop: "finalized", name: "finalized", embedded: false, exported: false, typ: $Bool, tag: ""}]);
MAC	'vendor/golang.org/x/crypto/poly1305.MAC-vendor/golang.org/x/crypto/poly1305.arrayType/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2'vendor/golang.org/x/crypto/poly1305.mac.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState+vendor/golang.org/x/crypto/poly1305.ptrType-vendor/golang.org/x/crypto/poly1305.sliceType  macState�j	macState = $pkg.macState = $newType(0, $kindStruct, "poly1305.macState", true, "vendor/golang.org/x/crypto/poly1305", false, function(h_, r_, s_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.h = arrayType$1.zero();
			this.r = arrayType$2.zero();
			this.s = arrayType$2.zero();
			return;
		}
		this.h = h_;
		this.r = r_;
		this.s = s_;
	});
�8	macState.init("vendor/golang.org/x/crypto/poly1305", [{prop: "h", name: "h", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "s", name: "s", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
macState/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2,vendor/golang.org/x/crypto/poly1305.macState  
macGeneric��	macGeneric = $pkg.macGeneric = $newType(0, $kindStruct, "poly1305.macGeneric", true, "vendor/golang.org/x/crypto/poly1305", false, function(macState_, buffer_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.macState = new macState.ptr(arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero());
			this.buffer = arrayType.zero();
			this.offset = 0;
			return;
		}
		this.macState = macState_;
		this.buffer = buffer_;
		this.offset = offset_;
	});
��	ptrType$2.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([ptrType$1], [], false)}];
�O	macGeneric.init("vendor/golang.org/x/crypto/poly1305", [{prop: "macState", name: "macState", embedded: true, exported: false, typ: macState, tag: ""}, {prop: "buffer", name: "buffer", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}]);

macGeneric-vendor/golang.org/x/crypto/poly1305.arrayType/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState-vendor/golang.org/x/crypto/poly1305.ptrType$1-vendor/golang.org/x/crypto/poly1305.ptrType$2-vendor/golang.org/x/crypto/poly1305.sliceType  uint128�:	uint128 = $pkg.uint128 = $newType(0, $kindStruct, "poly1305.uint128", true, "vendor/golang.org/x/crypto/poly1305", false, function(lo_, hi_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.lo = new $Uint64(0, 0);
			this.hi = new $Uint64(0, 0);
			return;
		}
		this.lo = lo_;
		this.hi = hi_;
	});
��	uint128.init("vendor/golang.org/x/crypto/poly1305", [{prop: "lo", name: "lo", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
uint128+vendor/golang.org/x/crypto/poly1305.uint128  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType%	arrayType = $arrayType($Uint8, 16);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint64, 3);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint64, 2);
arrayType$2  ptrType	ptrType = $ptrType(MAC);
ptrType'vendor/golang.org/x/crypto/poly1305.MAC  	ptrType$1"	ptrType$1 = $ptrType(arrayType);
	ptrType$1-vendor/golang.org/x/crypto/poly1305.arrayType  	ptrType$2#	ptrType$2 = $ptrType(macGeneric);
	ptrType$2.vendor/golang.org/x/crypto/poly1305.macGeneric -vendor/golang.org/x/crypto/poly1305.bitsAdd64#vendor/golang.org/x/crypto/poly1305	bitsAdd64 	bitsAdd64�	bitsAdd64 = function(x, y, carry) {
		var _tuple, carry, carryOut, sum, x, y;
		sum = new $Uint64(0, 0);
		carryOut = new $Uint64(0, 0);
    		_tuple = bits.Add64(x, y, carry);
		sum = _tuple[0];
		carryOut = _tuple[1];
		return [sum, carryOut];
    	};
	bitsAdd64math/bits.Add64-vendor/golang.org/x/crypto/poly1305.bitsAdd64 -vendor/golang.org/x/crypto/poly1305.bitsSub64#vendor/golang.org/x/crypto/poly1305	bitsSub64 	bitsSub64�	bitsSub64 = function(x, y, borrow) {
		var _tuple, borrow, borrowOut, diff, x, y;
		diff = new $Uint64(0, 0);
		borrowOut = new $Uint64(0, 0);
    		_tuple = bits.Sub64(x, y, borrow);
		diff = _tuple[0];
		borrowOut = _tuple[1];
		return [diff, borrowOut];
    	};
	bitsSub64math/bits.Sub64-vendor/golang.org/x/crypto/poly1305.bitsSub64 -vendor/golang.org/x/crypto/poly1305.bitsMul64#vendor/golang.org/x/crypto/poly1305	bitsMul64 	bitsMul64��	bitsMul64 = function(x, y) {
		var _tuple, hi, lo, x, y;
		hi = new $Uint64(0, 0);
		lo = new $Uint64(0, 0);
    		_tuple = bits.Mul64(x, y);
		hi = _tuple[0];
		lo = _tuple[1];
		return [hi, lo];
    	};
	bitsMul64math/bits.Mul64-vendor/golang.org/x/crypto/poly1305.bitsMul64 'vendor/golang.org/x/crypto/poly1305.Sum#vendor/golang.org/x/crypto/poly1305Sum Sum��	Sum = function(out, m, key) {
		var h, key, m, out;
  g		h = New(key);
  v		h.Write(m);
  �		h.Sum($subslice(new sliceType(out), 0, 0));
    	};
	$pkg.Sum = Sum;
Sum'vendor/golang.org/x/crypto/poly1305.New'vendor/golang.org/x/crypto/poly1305.Sum-vendor/golang.org/x/crypto/poly1305.sliceType *vendor/golang.org/x/crypto/poly1305.Verify#vendor/golang.org/x/crypto/poly1305Verify Verify��	Verify = function(mac$1, m, key) {
		var key, m, mac$1, tmp;
  	%		tmp = arrayType.zero();
  	3		Sum(tmp, m, key);
  	F		return subtle.ConstantTimeCompare(new sliceType(tmp), new sliceType(mac$1)) === 1;
    	};
	$pkg.Verify = Verify;
Verify!crypto/subtle.ConstantTimeCompare'vendor/golang.org/x/crypto/poly1305.Sum*vendor/golang.org/x/crypto/poly1305.Verify-vendor/golang.org/x/crypto/poly1305.arrayType-vendor/golang.org/x/crypto/poly1305.sliceType 'vendor/golang.org/x/crypto/poly1305.New#vendor/golang.org/x/crypto/poly1305New New�&	New = function(key) {
		var key, m;
  :		m = new MAC.ptr(new mac.ptr(new macGeneric.ptr(new macState.ptr(arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero()), arrayType.zero(), 0)), false);
  G		initialize(key, m.mac.macGeneric.macState);
  e		return m;
    	};
	$pkg.New = New;
New	'vendor/golang.org/x/crypto/poly1305.MAC'vendor/golang.org/x/crypto/poly1305.New-vendor/golang.org/x/crypto/poly1305.arrayType/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2.vendor/golang.org/x/crypto/poly1305.initialize'vendor/golang.org/x/crypto/poly1305.mac.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState /(*vendor/golang.org/x/crypto/poly1305.MAC).Size ��	MAC.ptr.prototype.Size = function() {
		var h;
		h = this;
  ?		return 16;
    	};
	MAC.prototype.Size = function() { return this.$val.Size(); };
MAC'vendor/golang.org/x/crypto/poly1305.MAC 0(*vendor/golang.org/x/crypto/poly1305.MAC).Write ��	MAC.ptr.prototype.Write = function(p) {
		var _tuple, err, h, n, p;
		n = 0;
		err = $ifaceNil;
		h = this;
    		if (h.finalized) {
  =			$panic(new $String("poly1305: write to MAC after Sum or Verify"));
    		}
    		_tuple = h.mac.macGeneric.Write(p);
		n = _tuple[0];
		err = _tuple[1];
		return [n, err];
    	};
	MAC.prototype.Write = function(p) { return this.$val.Write(p); };
MAC'vendor/golang.org/x/crypto/poly1305.MAC .(*vendor/golang.org/x/crypto/poly1305.MAC).Sum �#	MAC.ptr.prototype.Sum = function(b) {
		var b, h, mac$1;
		h = this;
  		mac$1 = arrayType.zero();
  (		h.mac.macGeneric.Sum(mac$1);
  9		h.finalized = true;
  M		return $appendSlice(b, new sliceType(mac$1));
    	};
	MAC.prototype.Sum = function(b) { return this.$val.Sum(b); };
MAC'vendor/golang.org/x/crypto/poly1305.MAC-vendor/golang.org/x/crypto/poly1305.arrayType-vendor/golang.org/x/crypto/poly1305.sliceType 1(*vendor/golang.org/x/crypto/poly1305.MAC).Verify �c	MAC.ptr.prototype.Verify = function(expected) {
		var expected, h, mac$1;
		h = this;
   		mac$1 = arrayType.zero();
  3		h.mac.macGeneric.Sum(mac$1);
  D		h.finalized = true;
  X		return subtle.ConstantTimeCompare(expected, new sliceType(mac$1)) === 1;
    	};
	MAC.prototype.Verify = function(expected) { return this.$val.Verify(expected); };
MAC!crypto/subtle.ConstantTimeCompare'vendor/golang.org/x/crypto/poly1305.MAC-vendor/golang.org/x/crypto/poly1305.arrayType-vendor/golang.org/x/crypto/poly1305.sliceType .vendor/golang.org/x/crypto/poly1305.sumGeneric#vendor/golang.org/x/crypto/poly1305
sumGeneric 
sumGeneric��	sumGeneric = function(out, msg, key) {
		var h, key, msg, out;
  T		h = $clone(newMACGeneric(key), macGeneric);
  m		h.Write(msg);
  {		h.Sum(out);
    	};

sumGeneric.vendor/golang.org/x/crypto/poly1305.macGeneric1vendor/golang.org/x/crypto/poly1305.newMACGeneric.vendor/golang.org/x/crypto/poly1305.sumGeneric 1vendor/golang.org/x/crypto/poly1305.newMACGeneric#vendor/golang.org/x/crypto/poly1305newMACGeneric newMACGeneric��	newMACGeneric = function(key) {
		var key, m;
  �		m = new macGeneric.ptr(new macState.ptr(arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero()), arrayType.zero(), 0);
  �		initialize(key, m.macState);
  �		return m;
    	};
newMACGeneric-vendor/golang.org/x/crypto/poly1305.arrayType/vendor/golang.org/x/crypto/poly1305.arrayType$1/vendor/golang.org/x/crypto/poly1305.arrayType$2.vendor/golang.org/x/crypto/poly1305.initialize.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState1vendor/golang.org/x/crypto/poly1305.newMACGeneric 7(*vendor/golang.org/x/crypto/poly1305.macGeneric).Write ��	macGeneric.ptr.prototype.Write = function(p) {
		var _r, h, n, n$1, nn, p;
		h = this;
  �		nn = p.$length;
    		if (h.offset > 0) {
  �			n = $copySlice($subslice(new sliceType(h.buffer), h.offset), p);
    			if ((h.offset + n >> 0) < 16) {
  				h.offset = h.offset + (n) >> 0;
  				return [nn, $ifaceNil];
    			}
  )			p = $subslice(p, n);
  5			h.offset = 0;
  D			updateGeneric(h.macState, new sliceType(h.buffer));
    		}
  s		n$1 = p.$length - ((_r = p.$length % 16, _r === _r ? _r : $throwRuntimeError("integer divide by zero"))) >> 0;
    		if (n$1 > 0) {
  �			updateGeneric(h.macState, $subslice(p, 0, n$1));
  �			p = $subslice(p, n$1);
    		}
    		if (p.$length > 0) {
  �			h.offset = h.offset + ($copySlice($subslice(new sliceType(h.buffer), h.offset), p)) >> 0;
    		}
  		return [nn, $ifaceNil];
    	};
	macGeneric.prototype.Write = function(p) { return this.$val.Write(p); };

macGeneric.vendor/golang.org/x/crypto/poly1305.macGeneric-vendor/golang.org/x/crypto/poly1305.sliceType1vendor/golang.org/x/crypto/poly1305.updateGeneric 5(*vendor/golang.org/x/crypto/poly1305.macGeneric).Sum �l	macGeneric.ptr.prototype.Sum = function(out) {
		var h, out, state;
		h = this;
  *		state = $clone(h.macState, macState);
    		if (h.offset > 0) {
  S			updateGeneric(state, $subslice(new sliceType(h.buffer), 0, h.offset));
    		}
  �		finalize(out, state.h, state.s);
    	};
	macGeneric.prototype.Sum = function(out) { return this.$val.Sum(out); };

macGeneric,vendor/golang.org/x/crypto/poly1305.finalize.vendor/golang.org/x/crypto/poly1305.macGeneric,vendor/golang.org/x/crypto/poly1305.macState-vendor/golang.org/x/crypto/poly1305.sliceType1vendor/golang.org/x/crypto/poly1305.updateGeneric .vendor/golang.org/x/crypto/poly1305.initialize#vendor/golang.org/x/crypto/poly1305
initialize 
initialize��	initialize = function(key, m) {
		var key, m, x, x$1;
  /		m.r[0] = (x = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(key), 0, 8)), new $Uint64(x.$high & 268435452, (x.$low & 268435455) >>> 0));
  g		m.r[1] = (x$1 = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(key), 8, 16)), new $Uint64(x$1.$high & 268435452, (x$1.$low & 268435452) >>> 0));
  �		m.s[0] = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(key), 16, 24));
  �		m.s[1] = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(key), 24, 32));
    	};

initializeencoding/binary.LittleEndianencoding/binary.littleEndian.vendor/golang.org/x/crypto/poly1305.initialize-vendor/golang.org/x/crypto/poly1305.sliceType )vendor/golang.org/x/crypto/poly1305.mul64#vendor/golang.org/x/crypto/poly1305mul64 mul64��	mul64 = function(a, b) {
		var _tuple, a, b, hi, lo;
  �		_tuple = bitsMul64(a, b);
		hi = _tuple[0];
		lo = _tuple[1];
  �		return new uint128.ptr(lo, hi);
    	};
mul64-vendor/golang.org/x/crypto/poly1305.bitsMul64)vendor/golang.org/x/crypto/poly1305.mul64+vendor/golang.org/x/crypto/poly1305.uint128 *vendor/golang.org/x/crypto/poly1305.add128#vendor/golang.org/x/crypto/poly1305add128 add128��	add128 = function(a, b) {
		var _tuple, _tuple$1, a, b, c, hi, lo;
  		_tuple = bitsAdd64(a.lo, b.lo, new $Uint64(0, 0));
		lo = _tuple[0];
		c = _tuple[1];
  =		_tuple$1 = bitsAdd64(a.hi, b.hi, c);
		hi = _tuple$1[0];
		c = _tuple$1[1];
    		if (!((c.$high === 0 && c.$low === 0))) {
  n			$panic(new $String("poly1305: unexpected overflow"));
    		}
  �		return new uint128.ptr(lo, hi);
    	};
add128*vendor/golang.org/x/crypto/poly1305.add128-vendor/golang.org/x/crypto/poly1305.bitsAdd64+vendor/golang.org/x/crypto/poly1305.uint128 1vendor/golang.org/x/crypto/poly1305.shiftRightBy2#vendor/golang.org/x/crypto/poly1305shiftRightBy2 shiftRightBy2�@	shiftRightBy2 = function(a) {
		var a, x, x$1, x$2;
  �		a.lo = (x = $shiftRightUint64(a.lo, 2), x$1 = $shiftLeft64(((x$2 = a.hi, new $Uint64(x$2.$high & 0, (x$2.$low & 3) >>> 0))), 62), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
  �		a.hi = $shiftRightUint64(a.hi, 2);
  		return a;
    	};
shiftRightBy21vendor/golang.org/x/crypto/poly1305.shiftRightBy2 1vendor/golang.org/x/crypto/poly1305.updateGeneric#vendor/golang.org/x/crypto/poly1305updateGeneric updateGeneric��	updateGeneric = function(state, msg) {
		var _tmp, _tmp$1, _tmp$10, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$10, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, buf, c, cc, h0, h0r0, h0r1, h1, h1r0, h1r1, h2, h2r0, h2r1, m0, m1, m2, m3, msg, r0, r1, state, t0, t1, t2, t3, x, x$1, x$2, x$3, x$4, x$5, x$6;
   _		_tmp = state.h[0];
		_tmp$1 = state.h[1];
		_tmp$2 = state.h[2];
		h0 = _tmp;
		h1 = _tmp$1;
		h2 = _tmp$2;
   �		_tmp$3 = state.r[0];
		_tmp$4 = state.r[1];
		r0 = _tmp$3;
		r1 = _tmp$4;
   �		while (true) {
			if (!(msg.$length > 0)) { break; }
   �			c = new $Uint64(0, 0);
    			if (msg.$length >= 16) {
  "�				_tuple = bitsAdd64(h0, $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(msg, 0, 8)), new $Uint64(0, 0));
				h0 = _tuple[0];
				c = _tuple[1];
  "�				_tuple$1 = bitsAdd64(h1, $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(msg, 8, 16)), c);
				h1 = _tuple$1[0];
				c = _tuple$1[1];
  #				h2 = (x = new $Uint64(c.$high + 0, c.$low + 1), new $Uint64(h2.$high + x.$high, h2.$low + x.$low));
  #*				msg = $subslice(msg, 16);
    			} else {
  #P				buf = arrayType.zero();
  #e				$copySlice(new sliceType(buf), msg);
  #z				(x$1 = msg.$length, ((x$1 < 0 || x$1 >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[x$1] = 1));
  #�				_tuple$2 = bitsAdd64(h0, $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(buf), 0, 8)), new $Uint64(0, 0));
				h0 = _tuple$2[0];
				c = _tuple$2[1];
  #�				_tuple$3 = bitsAdd64(h1, $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(buf), 8, 16)), c);
				h1 = _tuple$3[0];
				c = _tuple$3[1];
  $				h2 = (x$2 = c, new $Uint64(h2.$high + x$2.$high, h2.$low + x$2.$low));
  $!				msg = sliceType.nil;
    			}
  (�			h0r0 = $clone(mul64(h0, r0), uint128);
  (�			h1r0 = $clone(mul64(h1, r0), uint128);
  (�			h2r0 = $clone(mul64(h2, r0), uint128);
  (�			h0r1 = $clone(mul64(h0, r1), uint128);
  (�			h1r1 = $clone(mul64(h1, r1), uint128);
  )			h2r1 = $clone(mul64(h2, r1), uint128);
    			if (!((x$3 = h2r0.hi, (x$3.$high === 0 && x$3.$low === 0)))) {
  *b				$panic(new $String("poly1305: unexpected overflow"));
    			}
    			if (!((x$4 = h2r1.hi, (x$4.$high === 0 && x$4.$low === 0)))) {
  *�				$panic(new $String("poly1305: unexpected overflow"));
    			}
  *�			m0 = $clone(h0r0, uint128);
  *�			m1 = $clone(add128($clone(h1r0, uint128), $clone(h0r1, uint128)), uint128);
  +-			m2 = $clone(add128($clone(h2r0, uint128), $clone(h1r1, uint128)), uint128);
  +y			m3 = $clone(h2r1, uint128);
  +�			t0 = m0.lo;
  +�			_tuple$4 = bitsAdd64(m1.lo, m0.hi, new $Uint64(0, 0));
			t1 = _tuple$4[0];
			c = _tuple$4[1];
  +�			_tuple$5 = bitsAdd64(m2.lo, m1.hi, c);
			t2 = _tuple$5[0];
			c = _tuple$5[1];
  +�			_tuple$6 = bitsAdd64(m3.lo, m2.hi, c);
			t3 = _tuple$6[0];
  /)			_tmp$5 = t0;
			_tmp$6 = t1;
			_tmp$7 = new $Uint64(t2.$high & 0, (t2.$low & 3) >>> 0);
			h0 = _tmp$5;
			h1 = _tmp$6;
			h2 = _tmp$7;
  /P			cc = new uint128.ptr(new $Uint64(t2.$high & 4294967295, (t2.$low & 4294967292) >>> 0), t3);
  /�			_tuple$7 = bitsAdd64(h0, cc.lo, new $Uint64(0, 0));
			h0 = _tuple$7[0];
			c = _tuple$7[1];
  /�			_tuple$8 = bitsAdd64(h1, cc.hi, c);
			h1 = _tuple$8[0];
			c = _tuple$8[1];
  0			h2 = (x$5 = c, new $Uint64(h2.$high + x$5.$high, h2.$low + x$5.$low));
  0			uint128.copy(cc, shiftRightBy2($clone(cc, uint128)));
  02			_tuple$9 = bitsAdd64(h0, cc.lo, new $Uint64(0, 0));
			h0 = _tuple$9[0];
			c = _tuple$9[1];
  0T			_tuple$10 = bitsAdd64(h1, cc.hi, c);
			h1 = _tuple$10[0];
			c = _tuple$10[1];
  0v			h2 = (x$6 = c, new $Uint64(h2.$high + x$6.$high, h2.$low + x$6.$low));
    		}
  1		_tmp$8 = h0;
		_tmp$9 = h1;
		_tmp$10 = h2;
		state.h[0] = _tmp$8;
		state.h[1] = _tmp$9;
		state.h[2] = _tmp$10;
    	};
updateGeneric
encoding/binary.LittleEndianencoding/binary.littleEndian*vendor/golang.org/x/crypto/poly1305.add128-vendor/golang.org/x/crypto/poly1305.arrayType-vendor/golang.org/x/crypto/poly1305.bitsAdd64)vendor/golang.org/x/crypto/poly1305.mul641vendor/golang.org/x/crypto/poly1305.shiftRightBy2-vendor/golang.org/x/crypto/poly1305.sliceType+vendor/golang.org/x/crypto/poly1305.uint1281vendor/golang.org/x/crypto/poly1305.updateGeneric ,vendor/golang.org/x/crypto/poly1305.select64#vendor/golang.org/x/crypto/poly1305select64 select64��	select64 = function(v, x, y) {
		var v, x, x$1, x$2, x$3, x$4, x$5, y;
  2 		return (x$1 = (x$2 = (x$3 = new $Uint64(v.$high - 0, v.$low - 1), new $Uint64(~x$3.$high, ~x$3.$low >>> 0)), new $Uint64(x$2.$high & x.$high, (x$2.$low & x.$low) >>> 0)), x$4 = (x$5 = new $Uint64(v.$high - 0, v.$low - 1), new $Uint64(x$5.$high & y.$high, (x$5.$low & y.$low) >>> 0)), new $Uint64(x$1.$high | x$4.$high, (x$1.$low | x$4.$low) >>> 0));
    	};
select64,vendor/golang.org/x/crypto/poly1305.select64 ,vendor/golang.org/x/crypto/poly1305.finalize#vendor/golang.org/x/crypto/poly1305finalize finalize�	finalize = function(out, h, s) {
		var _tmp, _tmp$1, _tmp$2, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, b, c, h, h0, h1, h2, hMinusP0, hMinusP1, out, s;
  3R		_tmp = h[0];
		_tmp$1 = h[1];
		_tmp$2 = h[2];
		h0 = _tmp;
		h1 = _tmp$1;
		h2 = _tmp$2;
  4�		_tuple = bitsSub64(h0, new $Uint64(4294967295, 4294967291), new $Uint64(0, 0));
		hMinusP0 = _tuple[0];
		b = _tuple[1];
  4�		_tuple$1 = bitsSub64(h1, new $Uint64(4294967295, 4294967295), b);
		hMinusP1 = _tuple$1[0];
		b = _tuple$1[1];
  4�		_tuple$2 = bitsSub64(h2, new $Uint64(0, 3), b);
		b = _tuple$2[1];
  5		h0 = select64(b, h0, hMinusP0);
  5?		h1 = select64(b, h1, hMinusP1);
  6		_tuple$3 = bitsAdd64(h0, s[0], new $Uint64(0, 0));
		h0 = _tuple$3[0];
		c = _tuple$3[1];
  69		_tuple$4 = bitsAdd64(h1, s[1], c);
		h1 = _tuple$4[0];
  6Z		$clone(binary.LittleEndian, binary.littleEndian).PutUint64($subslice(new sliceType(out), 0, 8), h0);
  6�		$clone(binary.LittleEndian, binary.littleEndian).PutUint64($subslice(new sliceType(out), 8, 16), h1);
    	};
finalizeencoding/binary.LittleEndianencoding/binary.littleEndian-vendor/golang.org/x/crypto/poly1305.bitsAdd64-vendor/golang.org/x/crypto/poly1305.bitsSub64,vendor/golang.org/x/crypto/poly1305.finalize,vendor/golang.org/x/crypto/poly1305.select64-vendor/golang.org/x/crypto/poly1305.sliceType �
�{"Base":14007,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/crypto/poly1305/bits_go1.13.go","Base":1,"Size":501,"Lines":[0,55,109,159,160,178,195,196,213,214,233,234,294,326,328,329,392,425,427,428,474,499],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/crypto/poly1305/mac_noasm.go","Base":503,"Size":312,"Lines":[0,55,109,159,160,219,263,264,281,282],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/crypto/poly1305/poly1305.go","Base":816,"Size":3427,"Lines":[0,55,109,159,160,240,300,303,384,467,543,626,657,660,743,818,895,908,966,967,990,991,1054,1073,1074,1150,1230,1283,1334,1349,1361,1377,1379,1380,1461,1520,1538,1557,1613,1615,1616,1669,1722,1779,1839,1868,1871,1933,1996,2026,2057,2070,2100,2110,2112,2113,2168,2198,2201,2262,2321,2378,2415,2433,2475,2476,2492,2494,2495,2548,2592,2593,2661,2691,2694,2758,2809,2827,2881,2884,2907,2909,2910,2971,3003,3040,3063,3080,3100,3129,3131,3132,3199,3262,3307,3330,3347,3367,3425],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/crypto/poly1305/sum_generic.go","Base":4244,"Size":9762,"Lines":[0,55,109,159,160,237,311,312,329,330,355,356,436,479,482,576,579,644,647,672,702,720,749,769,772,850,893,894,959,984,998,1010,1012,1013,1060,1079,1109,1119,1121,1122,1198,1271,1294,1374,1450,1474,1487,1531,1544,1557,1559,1560,1585,1595,1596,1618,1630,1632,1633,1710,1751,1803,1817,1836,1872,1900,1917,1935,1939,1951,1966,2008,2011,2057,2093,2105,2108,2125,2168,2171,2187,2189,2190,2270,2350,2406,2453,2474,2493,2538,2541,2576,2578,2579,2660,2739,2775,2783,2812,2841,2843,2844,2924,2970,3026,3083,3132,3181,3183,3184,3256,3297,3319,3334,3336,3337,3371,3398,3422,3424,3425,3461,3496,3531,3544,3585,3588,3612,3614,3615,3655,3686,3704,3714,3716,3717,3796,3832,3835,3880,3883,3954,3992,4042,4092,4126,4127,4147,4162,4163,4236,4315,4368,4373,4448,4523,4579,4606,4672,4739,4754,4755,4778,4789,4814,4835,4856,4857,4923,4990,5001,5002,5015,5019,5020,5092,5165,5170,5239,5244,5290,5336,5380,5459,5496,5540,5627,5671,5740,5783,5827,5907,5912,5985,6058,6132,6133,6157,6181,6205,6229,6253,6277,6278,6355,6434,6508,6513,6583,6603,6645,6649,6669,6711,6715,6716,6729,6807,6883,6896,6897,6911,6949,6987,7025,7026,7098,7176,7243,7248,7307,7312,7394,7472,7530,7535,7614,7615,7693,7767,7827,7866,7908,7909,7986,7987,8021,8055,8065,8066,8091,8092,8126,8160,8170,8171,8235,8240,8298,8301,8302,8351,8353,8354,8362,8407,8447,8449,8450,8517,8584,8585,8641,8649,8674,8699,8724,8726,8727,8789,8792,8826,8829,8893,8925,8926,8997,9083,9160,9219,9220,9257,9294,9323,9324,9354,9386,9418,9419,9466,9470,9505,9509,9585,9603,9636,9668,9669,9714,9760],"Infos":null}]}
 