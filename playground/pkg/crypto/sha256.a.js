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
GoLinkname�� Implementation�� 	Reference��   �sV��crypto/sha256sha256cryptoencoding/binaryerrorshash	math/bits�i r� Hashhashdatasum224Writerio	BlockSizeResetSizeSumbWritepnerrsha256NewNew224Size224Sum224Sum256C �@ F    %F    %C @C 8F  > @  F  N  P   ^ !    +   1    6 :a  c T e  < B� D F T � J ! QU1\d#k3 h �& crypto	crypto = $packages["crypto"];
��    		$r = crypto.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  digest��	digest = $pkg.digest = $newType(0, $kindStruct, "sha256.digest", true, "crypto/sha256", false, function(h_, x_, nx_, len_, is224_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.h = arrayType$2.zero();
			this.x = arrayType$3.zero();
			this.nx = 0;
			this.len = new $Uint64(0, 0);
			this.is224 = false;
			return;
		}
		this.h = h_;
		this.x = x_;
		this.nx = nx_;
		this.len = len_;
		this.is224 = is224_;
	});
��	ptrType.methods = [{prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType$1, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType$1], [$error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType$1], [sliceType$1], false)}, {prop: "checkSum", name: "checkSum", pkg: "crypto/sha256", typ: $funcType([], [arrayType$4], false)}];
��	digest.init("crypto/sha256", [{prop: "h", name: "h", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "x", name: "x", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "nx", name: "nx", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "is224", name: "is224", embedded: false, exported: false, typ: $Bool, tag: ""}]);
digestcrypto/sha256.arrayType$2crypto/sha256.arrayType$3crypto/sha256.arrayType$4crypto/sha256.digestcrypto/sha256.ptrTypecrypto/sha256.sliceType$1  	sliceType"	sliceType = $sliceType($Uint32);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  	arrayType$	arrayType = $arrayType($Uint8, 8);
	arrayType  arrayType$1&	arrayType$1 = $arrayType($Uint8, 4);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint32, 8);
arrayType$2  arrayType$3'	arrayType$3 = $arrayType($Uint8, 64);
arrayType$3  arrayType$4'	arrayType$4 = $arrayType($Uint8, 32);
arrayType$4  arrayType$5'	arrayType$5 = $arrayType($Uint8, 28);
arrayType$5  arrayType$6(	arrayType$6 = $arrayType($Uint32, 64);
arrayType$6  ptrType	ptrType = $ptrType(digest);
ptrTypecrypto/sha256.digest  _K_K  blockblock  �  }		_K = new sliceType([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
_Kcrypto/sha256._Kcrypto/sha256.sliceType    "/		block = blockGeneric;
blockcrypto/sha256.blockcrypto/sha256.blockGeneric crypto/sha256.initcrypto/sha256init initi	init = function() {
  [		crypto.RegisterHash(4, New224);
  �		crypto.RegisterHash(5, New);
    	};
    		init();
crypto.RegisterHashcrypto/sha256.Newcrypto/sha256.New224crypto/sha256.init %(*crypto/sha256.digest).MarshalBinary �=	digest.ptr.prototype.MarshalBinary = function() {
		var b, d;
		d = this;
  r		b = $makeSlice(sliceType$1, 0, 108);
    		if (d.is224) {
  �			b = $appendSlice(b, "sha\x02");
    		} else {
  �			b = $appendSlice(b, "sha\x03");
    		}
  �		b = appendUint32(b, d.h[0]);
  			b = appendUint32(b, d.h[1]);
  &		b = appendUint32(b, d.h[2]);
  C		b = appendUint32(b, d.h[3]);
  `		b = appendUint32(b, d.h[4]);
  }		b = appendUint32(b, d.h[5]);
  �		b = appendUint32(b, d.h[6]);
  �		b = appendUint32(b, d.h[7]);
  �		b = $appendSlice(b, $subslice(new sliceType$1(d.x), 0, d.nx));
  �		b = $subslice(b, 0, ((b.$length + 64 >> 0) - (d.nx) >> 0));
  %		b = appendUint64(b, d.len);
  A		return [b, $ifaceNil];
    	};
	digest.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
digestcrypto/sha256.appendUint32crypto/sha256.appendUint64crypto/sha256.digestcrypto/sha256.sliceType$1 '(*crypto/sha256.digest).UnmarshalBinary ��	digest.ptr.prototype.UnmarshalBinary = function(b) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, b, d;
		d = this;
    		if (b.$length < 4 || (d.is224 && !(($bytesToString($subslice(b, 0, 4))) === "sha\x02")) || (!d.is224 && !(($bytesToString($subslice(b, 0, 4))) === "sha\x03"))) {
  			return errors.New("crypto/sha256: invalid hash state identifier");
    		}
    		if (!((b.$length === 108))) {
  v			return errors.New("crypto/sha256: invalid hash state size");
    		}
  �		b = $subslice(b, 4);
  �		_tuple = consumeUint32(b);
		b = _tuple[0];
		d.h[0] = _tuple[1];
  �		_tuple$1 = consumeUint32(b);
		b = _tuple$1[0];
		d.h[1] = _tuple$1[1];
  				_tuple$2 = consumeUint32(b);
		b = _tuple$2[0];
		d.h[2] = _tuple$2[1];
  	'		_tuple$3 = consumeUint32(b);
		b = _tuple$3[0];
		d.h[3] = _tuple$3[1];
  	E		_tuple$4 = consumeUint32(b);
		b = _tuple$4[0];
		d.h[4] = _tuple$4[1];
  	c		_tuple$5 = consumeUint32(b);
		b = _tuple$5[0];
		d.h[5] = _tuple$5[1];
  	�		_tuple$6 = consumeUint32(b);
		b = _tuple$6[0];
		d.h[6] = _tuple$6[1];
  	�		_tuple$7 = consumeUint32(b);
		b = _tuple$7[0];
		d.h[7] = _tuple$7[1];
  	�		b = $subslice(b, $copySlice(new sliceType$1(d.x), b));
  	�		_tuple$8 = consumeUint64(b);
		b = _tuple$8[0];
		d.len = _tuple$8[1];
  	�		d.nx = (($div64(d.len, new $Uint64(0, 64), true).$low >> 0));
  
		return $ifaceNil;
    	};
	digest.prototype.UnmarshalBinary = function(b) { return this.$val.UnmarshalBinary(b); };
digestcrypto/sha256.consumeUint32crypto/sha256.consumeUint64crypto/sha256.digestcrypto/sha256.sliceType$1
errors.New crypto/sha256.appendUint64crypto/sha256appendUint64 appendUint64��	appendUint64 = function(b, x) {
		var a, b, x;
  
P		a = arrayType.zero();
  
[		$clone(binary.BigEndian, binary.bigEndian).PutUint64(new sliceType$1(a), x);
  
�		return $appendSlice(b, new sliceType$1(a));
    	};
appendUint64crypto/sha256.appendUint64crypto/sha256.arrayTypecrypto/sha256.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/sha256.appendUint32crypto/sha256appendUint32 appendUint32��	appendUint32 = function(b, x) {
		var a, b, x;
  
�		a = arrayType$1.zero();
  
�		$clone(binary.BigEndian, binary.bigEndian).PutUint32(new sliceType$1(a), x);
  		return $appendSlice(b, new sliceType$1(a));
    	};
appendUint32crypto/sha256.appendUint32crypto/sha256.arrayType$1crypto/sha256.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/sha256.consumeUint64crypto/sha256consumeUint64 consumeUint64��	consumeUint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  O		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  Y		x$14 = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
  �		return [$subslice(b, 8), x$14];
    	};
consumeUint64crypto/sha256.consumeUint64 crypto/sha256.consumeUint32crypto/sha256consumeUint32 consumeUint32��	consumeUint32 = function(b) {
		var b, x;
  6		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  @		x = ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
  �		return [$subslice(b, 4), x];
    	};
consumeUint32crypto/sha256.consumeUint32 (*crypto/sha256.digest).Reset ��	digest.ptr.prototype.Reset = function() {
		var d;
		d = this;
    		if (!d.is224) {
  �			d.h[0] = 1779033703;
  �			d.h[1] = 3144134277;
  �			d.h[2] = 1013904242;
  �			d.h[3] = 2773480762;
  			d.h[4] = 1359893119;
  			d.h[5] = 2600822924;
  0			d.h[6] = 528734635;
  A			d.h[7] = 1541459225;
    		} else {
  \			d.h[0] = 3238371032;
  q			d.h[1] = 914150663;
  �			d.h[2] = 812702999;
  �			d.h[3] = 4144912697;
  �			d.h[4] = 4290775857;
  �			d.h[5] = 1750603025;
  �			d.h[6] = 1694076839;
  �			d.h[7] = 3204075428;
    		}
  		d.nx = 0;
  		d.len = new $Uint64(0, 0);
    	};
	digest.prototype.Reset = function() { return this.$val.Reset(); };
digestcrypto/sha256.digest crypto/sha256.Newcrypto/sha256New New��	New = function() {
		var d;
  		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0), false);
  		d.Reset();
  #		return d;
    	};
	$pkg.New = New;
Newcrypto/sha256.Newcrypto/sha256.arrayType$2crypto/sha256.arrayType$3crypto/sha256.digest crypto/sha256.New224crypto/sha256New224 New224��	New224 = function() {
		var d;
  �		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0), false);
  �		d.is224 = true;
  �		d.Reset();
  �		return d;
    	};
	$pkg.New224 = New224;
New224crypto/sha256.New224crypto/sha256.arrayType$2crypto/sha256.arrayType$3crypto/sha256.digest (*crypto/sha256.digest).Size ��	digest.ptr.prototype.Size = function() {
		var d;
		d = this;
    		if (!d.is224) {
  �			return 32;
    		}
  		return 28;
    	};
	digest.prototype.Size = function() { return this.$val.Size(); };
digestcrypto/sha256.digest !(*crypto/sha256.digest).BlockSize ��	digest.ptr.prototype.BlockSize = function() {
		var d;
		d = this;
  8		return 64;
    	};
	digest.prototype.BlockSize = function() { return this.$val.BlockSize(); };
digestcrypto/sha256.digest (*crypto/sha256.digest).Write �n	digest.ptr.prototype.Write = function(p) {
		var d, err, n, n$1, nn, p, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; d = $f.d; err = $f.err; n = $f.n; n$1 = $f.n$1; nn = $f.nn; p = $f.p; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		nn = 0;
		err = $ifaceNil;
		d = this;
  �		nn = p.$length;
  �		d.len = (x = d.len, x$1 = (new $Uint64(0, nn)), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
  �		/* */ if (d.nx > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.nx > 0) { */ case 1:
  �			n = $copySlice($subslice(new sliceType$1(d.x), d.nx), p);
  �			d.nx = d.nx + (n) >> 0;
  �			/* */ if (d.nx === 64) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (d.nx === 64) { */ case 3:
  �				$r = block(d, new sliceType$1(d.x)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  				d.nx = 0;
    			/* } */ case 4:
  			p = $subslice(p, n);
    		/* } */ case 2:
  $		/* */ if (p.$length >= 64) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (p.$length >= 64) { */ case 6:
  ;			n$1 = (p.$length & ~63) >> 0;
  X			$r = block(d, $subslice(p, 0, n$1)); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  j			p = $subslice(p, n$1);
    		/* } */ case 7:
    		if (p.$length > 0) {
  �			d.nx = $copySlice(new sliceType$1(d.x), p);
    		}
  �		$s = -1; return [nn, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Write }; } $f.d = d; $f.err = err; $f.n = n; $f.n$1 = n$1; $f.nn = nn; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Write = function(p) { return this.$val.Write(p); };
digestcrypto/sha256.blockcrypto/sha256.digestcrypto/sha256.sliceType$1 (*crypto/sha256.digest).Sum ��	digest.ptr.prototype.Sum = function(in$1) {
		var _r, d, d0, hash$1, in$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; d0 = $f.d0; hash$1 = $f.hash$1; in$1 = $f.in$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  		d0 = $clone(d, digest);
  %		_r = d0.checkSum(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		hash$1 = $clone(_r, arrayType$4);
    		if (d0.is224) {
  L			$s = -1; return $appendSlice(in$1, $subslice(new sliceType$1(hash$1), 0, 28));
    		}
  u		$s = -1; return $appendSlice(in$1, new sliceType$1(hash$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Sum }; } $f._r = _r; $f.d = d; $f.d0 = d0; $f.hash$1 = hash$1; $f.in$1 = in$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
digestcrypto/sha256.arrayType$4crypto/sha256.checkSum~crypto/sha256.digestcrypto/sha256.sliceType$1  (*crypto/sha256.digest).checkSum �`	digest.ptr.prototype.checkSum = function() {
		var _r, _r$1, _r$2, d, digest$1, len, tmp, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; d = $f.d; digest$1 = $f.digest$1; len = $f.len; tmp = $f.tmp; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		len = d.len;
  		tmp = arrayType$3.zero();
  		tmp[0] = 128;
  *		/* */ if ((x = $div64(len, new $Uint64(0, 64), true), (x.$high < 0 || (x.$high === 0 && x.$low < 56)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x = $div64(len, new $Uint64(0, 64), true), (x.$high < 0 || (x.$high === 0 && x.$low < 56)))) { */ case 1:
  =			_r = d.Write($subslice(new sliceType$1(tmp), 0, $flatten64((x$1 = $div64(len, new $Uint64(0, 64), true), new $Uint64(0 - x$1.$high, 56 - x$1.$low))))); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    			$s = 3; continue;
		/* } else { */ case 2:
  e			_r$1 = d.Write($subslice(new sliceType$1(tmp), 0, $flatten64((x$2 = $div64(len, new $Uint64(0, 64), true), new $Uint64(0 - x$2.$high, 120 - x$2.$low))))); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 3:
  �		len = $shiftLeft64(len, (3));
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint64(new sliceType$1(tmp), len);
  �		_r$2 = d.Write($subslice(new sliceType$1(tmp), 0, 8)); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
    		if (!((d.nx === 0))) {
  �			$panic(new $String("d.nx != 0"));
    		}
  		digest$1 = arrayType$4.zero();
  &		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 0), d.h[0]);
  V		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 4), d.h[1]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 8), d.h[2]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 12), d.h[3]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 16), d.h[4]);
  		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 20), d.h[5]);
  I		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 24), d.h[6]);
    		if (!d.is224) {
  �			$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType$1(digest$1), 28), d.h[7]);
    		}
  �		$s = -1; return digest$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.checkSum }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.d = d; $f.digest$1 = digest$1; $f.len = len; $f.tmp = tmp; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.checkSum = function() { return this.$val.checkSum(); };
digest	checkSum~crypto/sha256.arrayType$3crypto/sha256.arrayType$4crypto/sha256.digestcrypto/sha256.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/sha256.Sum256crypto/sha256Sum256 Sum256��	Sum256 = function(data) {
		var $24r, _r, _r$1, d, data, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; d = $f.d; data = $f.data; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  .		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0), false);
  8		d.Reset();
  C		_r = d.Write(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  R		_r$1 = d.checkSum(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sum256 }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.d = d; $f.data = data; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sum256 = Sum256;
Sum256crypto/sha256.Sum256crypto/sha256.arrayType$2crypto/sha256.arrayType$3crypto/sha256.checkSum~crypto/sha256.digest crypto/sha256.Sum224crypto/sha256Sum224 Sum224��	Sum224 = function(data) {
		var _r, _r$1, d, data, sum, sum224, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; d = $f.d; data = $f.data; sum = $f.sum; sum224 = $f.sum224; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		sum224 = arrayType$5.zero();
  �		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0), false);
  �		d.is224 = true;
  �		d.Reset();
  �		_r = d.Write(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  		_r$1 = d.checkSum(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		sum = $clone(_r$1, arrayType$4);
  		$copySlice(new sliceType$1(sum224), $subslice(new sliceType$1(sum), 0, 28));
  <		$s = -1; return sum224;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sum224 }; } $f._r = _r; $f._r$1 = _r$1; $f.d = d; $f.data = data; $f.sum = sum; $f.sum224 = sum224; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sum224 = Sum224;
Sum224crypto/sha256.Sum224crypto/sha256.arrayType$2crypto/sha256.arrayType$3crypto/sha256.arrayType$4crypto/sha256.arrayType$5crypto/sha256.checkSum~crypto/sha256.digestcrypto/sha256.sliceType$1 crypto/sha256.blockGenericcrypto/sha256blockGeneric blockGeneric�	blockGeneric = function(dig, p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, a, b, c, d, dig, e, f, g, h, h0, h1, h2, h3, h4, h5, h6, h7, i, i$1, i$2, j, p, t1, t1$1, t2, t2$1, v1, v2, w, x, x$1, x$2, x$3, x$4, x$5, x$6;
  �		w = arrayType$6.zero();
  		_tmp = dig.h[0];
		_tmp$1 = dig.h[1];
		_tmp$2 = dig.h[2];
		_tmp$3 = dig.h[3];
		_tmp$4 = dig.h[4];
		_tmp$5 = dig.h[5];
		_tmp$6 = dig.h[6];
		_tmp$7 = dig.h[7];
		h0 = _tmp;
		h1 = _tmp$1;
		h2 = _tmp$2;
		h3 = _tmp$3;
		h4 = _tmp$4;
		h5 = _tmp$5;
		h6 = _tmp$6;
		h7 = _tmp$7;
  		while (true) {
			if (!(p.$length >= 64)) { break; }
  �			i = 0;
			while (true) {
				if (!(i < 16)) { break; }
  				j = $imul(i, 4);
  				((i < 0 || i >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i] = (((((((((((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]) >>> 0)) << 24 >>> 0) | ((((x = j + 1 >> 0, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x])) >>> 0)) << 16 >>> 0)) >>> 0) | ((((x$1 = j + 2 >> 0, ((x$1 < 0 || x$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$1])) >>> 0)) << 8 >>> 0)) >>> 0) | (((x$2 = j + 3 >> 0, ((x$2 < 0 || x$2 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$2])) >>> 0))) >>> 0));
  				i = i + (1) >> 0;
    			}
  v			i$1 = 16;
			while (true) {
				if (!(i$1 < 64)) { break; }
  �				v1 = (x$3 = i$1 - 2 >> 0, ((x$3 < 0 || x$3 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$3]));
  �				t1 = ((((bits.RotateLeft32(v1, -17)) ^ (bits.RotateLeft32(v1, -19))) >>> 0) ^ ((v1 >>> 10 >>> 0))) >>> 0;
  �				v2 = (x$4 = i$1 - 15 >> 0, ((x$4 < 0 || x$4 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$4]));
  				t2 = ((((bits.RotateLeft32(v2, -7)) ^ (bits.RotateLeft32(v2, -18))) >>> 0) ^ ((v2 >>> 3 >>> 0))) >>> 0;
  S				((i$1 < 0 || i$1 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i$1] = (((t1 + (x$5 = i$1 - 7 >> 0, ((x$5 < 0 || x$5 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$5])) >>> 0) + t2 >>> 0) + (x$6 = i$1 - 16 >> 0, ((x$6 < 0 || x$6 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$6])) >>> 0));
  �				i$1 = i$1 + (1) >> 0;
    			}
  |			_tmp$8 = h0;
			_tmp$9 = h1;
			_tmp$10 = h2;
			_tmp$11 = h3;
			_tmp$12 = h4;
			_tmp$13 = h5;
			_tmp$14 = h6;
			_tmp$15 = h7;
			a = _tmp$8;
			b = _tmp$9;
			c = _tmp$10;
			d = _tmp$11;
			e = _tmp$12;
			f = _tmp$13;
			g = _tmp$14;
			h = _tmp$15;
  �			i$2 = 0;
			while (true) {
				if (!(i$2 < 64)) { break; }
  �				t1$1 = (((h + ((((((bits.RotateLeft32(e, -6)) ^ (bits.RotateLeft32(e, -11))) >>> 0) ^ (bits.RotateLeft32(e, -25))) >>> 0)) >>> 0) + ((((((e & f) >>> 0)) ^ ((((~e >>> 0) & g) >>> 0))) >>> 0)) >>> 0) + ((i$2 < 0 || i$2 >= _K.$length) ? ($throwRuntimeError("index out of range"), undefined) : _K.$array[_K.$offset + i$2]) >>> 0) + ((i$2 < 0 || i$2 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i$2]) >>> 0;
  b				t2$1 = ((((((bits.RotateLeft32(a, -2)) ^ (bits.RotateLeft32(a, -13))) >>> 0) ^ (bits.RotateLeft32(a, -22))) >>> 0)) + ((((((((a & b) >>> 0)) ^ (((a & c) >>> 0))) >>> 0) ^ (((b & c) >>> 0))) >>> 0)) >>> 0;
  �				h = g;
  �				g = f;
  �				f = e;
    				e = d + t1$1 >>> 0;
   				d = c;
   				c = b;
    				b = a;
   )				a = t1$1 + t2$1 >>> 0;
  �				i$2 = i$2 + (1) >> 0;
    			}
   <			h0 = h0 + (a) >>> 0;
   F			h1 = h1 + (b) >>> 0;
   P			h2 = h2 + (c) >>> 0;
   Z			h3 = h3 + (d) >>> 0;
   d			h4 = h4 + (e) >>> 0;
   n			h5 = h5 + (f) >>> 0;
   x			h6 = h6 + (g) >>> 0;
   �			h7 = h7 + (h) >>> 0;
   �			p = $subslice(p, 64);
    		}
   �		_tmp$16 = h0;
		_tmp$17 = h1;
		_tmp$18 = h2;
		_tmp$19 = h3;
		_tmp$20 = h4;
		_tmp$21 = h5;
		_tmp$22 = h6;
		_tmp$23 = h7;
		dig.h[0] = _tmp$16;
		dig.h[1] = _tmp$17;
		dig.h[2] = _tmp$18;
		dig.h[3] = _tmp$19;
		dig.h[4] = _tmp$20;
		dig.h[5] = _tmp$21;
		dig.h[6] = _tmp$22;
		dig.h[7] = _tmp$23;
    	};
blockGenericcrypto/sha256._Kcrypto/sha256.arrayType$6crypto/sha256.blockGenericmath/bits.RotateLeft32 �	{"Base":8773,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/sha256/sha256.go","Base":1,"Size":5956,"Lines":[0,55,109,159,160,238,256,271,272,281,291,310,320,328,330,331,345,389,430,432,433,476,492,493,536,555,556,604,625,626,634,650,674,698,722,746,770,794,818,842,866,890,914,938,962,986,1010,1034,1036,1037,1096,1117,1134,1153,1164,1178,1224,1226,1227,1235,1262,1289,1338,1340,1341,1392,1429,1443,1472,1482,1511,1514,1543,1572,1601,1630,1659,1688,1717,1746,1776,1827,1855,1870,1872,1873,1924,2062,2130,2133,2163,2225,2228,2251,2281,2311,2341,2371,2401,2431,2461,2491,2516,2545,2572,2584,2586,2587,2634,2649,2686,2713,2715,2716,2763,2778,2815,2842,2844,2845,2893,2903,2980,3056,3073,3075,3076,3124,3134,3209,3226,3228,3229,3256,3271,3288,3305,3322,3339,3356,3373,3390,3407,3417,3438,3459,3480,3501,3522,3543,3564,3585,3588,3598,3609,3611,3612,3683,3731,3799,3821,3844,3862,3873,3883,3885,3886,3951,3977,3995,4011,4022,4032,4034,4035,4065,4080,4094,4097,4113,4115,4116,4170,4171,4226,4239,4260,4275,4302,4314,4335,4355,4367,4371,4383,4386,4408,4437,4455,4467,4470,4487,4512,4515,4523,4525,4526,4567,4633,4643,4666,4681,4720,4723,4754,4756,4757,4798,4812,4871,4889,4904,4922,4952,4962,4995,4998,4999,5019,5030,5071,5090,5091,5107,5128,5131,5132,5155,5156,5204,5252,5300,5349,5398,5447,5496,5511,5561,5564,5565,5580,5582,5583,5634,5672,5686,5697,5712,5733,5735,5736,5787,5837,5851,5867,5878,5893,5914,5946,5954],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/sha256/sha256block.go","Base":5958,"Size":2508,"Lines":[0,55,109,159,160,182,240,270,271,286,287,306,307,326,339,352,365,378,391,404,417,430,443,456,469,482,495,508,521,534,547,560,573,586,599,612,625,638,651,664,677,690,703,716,729,742,755,768,781,794,807,820,833,846,859,872,885,898,911,924,937,950,963,976,989,1002,1015,1028,1041,1054,1067,1080,1093,1106,1119,1132,1145,1158,1160,1161,1204,1222,1336,1359,1408,1447,1475,1489,1574,1578,1607,1623,1705,1722,1802,1839,1843,1844,1903,1904,1932,2072,2073,2203,2204,2213,2222,2231,2245,2254,2263,2272,2287,2291,2292,2302,2312,2322,2332,2342,2352,2362,2372,2373,2389,2392,2393,2506],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/sha256/sha256block_generic.go","Base":8467,"Size":305,"Lines":[0,55,109,159,160,218,263,264,279,280],"Infos":null}]}
 