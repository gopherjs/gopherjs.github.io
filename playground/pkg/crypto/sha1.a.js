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
GoLinkname�� Implementation�� 	Reference��   �����crypto/sha1sha1cryptoencoding/binaryerrorshash	math/bits��i Lg HashhashdataWriterio	BlockSizeResetSizeSumbWritepnerrsha1NewC �@ F    %C (F  3  5   C     $   *    / 3F  H T J  5 ;p = ? T r C  H*/ M d" crypto	crypto = $packages["crypto"];
��    		$r = crypto.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  digest�u	digest = $pkg.digest = $newType(0, $kindStruct, "sha1.digest", true, "crypto/sha1", false, function(h_, x_, nx_, len_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.h = arrayType$2.zero();
			this.x = arrayType$3.zero();
			this.nx = 0;
			this.len = new $Uint64(0, 0);
			return;
		}
		this.h = h_;
		this.x = x_;
		this.nx = nx_;
		this.len = len_;
	});
��	ptrType.methods = [{prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "checkSum", name: "checkSum", pkg: "crypto/sha1", typ: $funcType([], [arrayType$4], false)}, {prop: "ConstantTimeSum", name: "ConstantTimeSum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "constSum", name: "constSum", pkg: "crypto/sha1", typ: $funcType([], [arrayType$4], false)}];
�n	digest.init("crypto/sha1", [{prop: "h", name: "h", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "x", name: "x", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "nx", name: "nx", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
digestcrypto/sha1.arrayType$2crypto/sha1.arrayType$3crypto/sha1.arrayType$4crypto/sha1.digestcrypto/sha1.ptrTypecrypto/sha1.sliceType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType$	arrayType = $arrayType($Uint8, 8);
	arrayType  arrayType$1&	arrayType$1 = $arrayType($Uint8, 4);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint32, 5);
arrayType$2  arrayType$3'	arrayType$3 = $arrayType($Uint8, 64);
arrayType$3  arrayType$4'	arrayType$4 = $arrayType($Uint8, 20);
arrayType$4  arrayType$5(	arrayType$5 = $arrayType($Uint32, 16);
arrayType$5  ptrType	ptrType = $ptrType(digest);
ptrTypecrypto/sha1.digest  blockblock    !�		block = blockGeneric;
blockcrypto/sha1.blockcrypto/sha1.blockGeneric crypto/sha1.initcrypto/sha1init initB	init = function() {
  �		crypto.RegisterHash(3, New);
    	};
    		init();
crypto.RegisterHashcrypto/sha1.Newcrypto/sha1.init #(*crypto/sha1.digest).MarshalBinary �t	digest.ptr.prototype.MarshalBinary = function() {
		var b, d;
		d = this;
  �		b = $makeSlice(sliceType, 0, 96);
  �		b = $appendSlice(b, "sha\x01");
  		b = appendUint32(b, d.h[0]);
  $		b = appendUint32(b, d.h[1]);
  A		b = appendUint32(b, d.h[2]);
  ^		b = appendUint32(b, d.h[3]);
  {		b = appendUint32(b, d.h[4]);
  �		b = $appendSlice(b, $subslice(new sliceType(d.x), 0, d.nx));
  �		b = $subslice(b, 0, ((b.$length + 64 >> 0) - (d.nx) >> 0));
  �		b = appendUint64(b, d.len);
  		return [b, $ifaceNil];
    	};
	digest.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
digestcrypto/sha1.appendUint32crypto/sha1.appendUint64crypto/sha1.digestcrypto/sha1.sliceType %(*crypto/sha1.digest).UnmarshalBinary ��	digest.ptr.prototype.UnmarshalBinary = function(b) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, b, d;
		d = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "sha\x01")) {
  �			return errors.New("crypto/sha1: invalid hash state identifier");
    		}
    		if (!((b.$length === 96))) {
  �			return errors.New("crypto/sha1: invalid hash state size");
    		}
  )		b = $subslice(b, 4);
  =		_tuple = consumeUint32(b);
		b = _tuple[0];
		d.h[0] = _tuple[1];
  [		_tuple$1 = consumeUint32(b);
		b = _tuple$1[0];
		d.h[1] = _tuple$1[1];
  y		_tuple$2 = consumeUint32(b);
		b = _tuple$2[0];
		d.h[2] = _tuple$2[1];
  �		_tuple$3 = consumeUint32(b);
		b = _tuple$3[0];
		d.h[3] = _tuple$3[1];
  �		_tuple$4 = consumeUint32(b);
		b = _tuple$4[0];
		d.h[4] = _tuple$4[1];
  �		b = $subslice(b, $copySlice(new sliceType(d.x), b));
  �		_tuple$5 = consumeUint64(b);
		b = _tuple$5[0];
		d.len = _tuple$5[1];
  			d.nx = (($div64(d.len, new $Uint64(0, 64), true).$low >> 0));
  $		return $ifaceNil;
    	};
	digest.prototype.UnmarshalBinary = function(b) { return this.$val.UnmarshalBinary(b); };
digestcrypto/sha1.consumeUint32crypto/sha1.consumeUint64crypto/sha1.digestcrypto/sha1.sliceType
errors.New crypto/sha1.appendUint64crypto/sha1appendUint64 appendUint64��	appendUint64 = function(b, x) {
		var a, b, x;
  f		a = arrayType.zero();
  q		$clone(binary.BigEndian, binary.bigEndian).PutUint64(new sliceType(a), x);
  �		return $appendSlice(b, new sliceType(a));
    	};
appendUint64crypto/sha1.appendUint64crypto/sha1.arrayTypecrypto/sha1.sliceTypeencoding/binary.BigEndianencoding/binary.bigEndian crypto/sha1.appendUint32crypto/sha1appendUint32 appendUint32��	appendUint32 = function(b, x) {
		var a, b, x;
  �		a = arrayType$1.zero();
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32(new sliceType(a), x);
  		return $appendSlice(b, new sliceType(a));
    	};
appendUint32crypto/sha1.appendUint32crypto/sha1.arrayType$1crypto/sha1.sliceTypeencoding/binary.BigEndianencoding/binary.bigEndian crypto/sha1.consumeUint64crypto/sha1consumeUint64 consumeUint64��	consumeUint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  e		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  o		x$14 = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
  			return [$subslice(b, 8), x$14];
    	};
consumeUint64crypto/sha1.consumeUint64 crypto/sha1.consumeUint32crypto/sha1consumeUint32 consumeUint32��	consumeUint32 = function(b) {
		var b, x;
  	L		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  	V		x = ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
  	�		return [$subslice(b, 4), x];
    	};
consumeUint32crypto/sha1.consumeUint32 (*crypto/sha1.digest).Reset �K	digest.ptr.prototype.Reset = function() {
		var d;
		d = this;
  	�		d.h[0] = 1732584193;
  	�		d.h[1] = 4023233417;
  	�		d.h[2] = 2562383102;
  
 		d.h[3] = 271733878;
  
		d.h[4] = 3285377520;
  
 		d.nx = 0;
  
*		d.len = new $Uint64(0, 0);
    	};
	digest.prototype.Reset = function() { return this.$val.Reset(); };
digestcrypto/sha1.digest crypto/sha1.Newcrypto/sha1New New��	New = function() {
		var d;
  		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0));
  -		d.Reset();
  8		return d;
    	};
	$pkg.New = New;
Newcrypto/sha1.Newcrypto/sha1.arrayType$2crypto/sha1.arrayType$3crypto/sha1.digest (*crypto/sha1.digest).Size ��	digest.ptr.prototype.Size = function() {
		var d;
		d = this;
  b		return 20;
    	};
	digest.prototype.Size = function() { return this.$val.Size(); };
digestcrypto/sha1.digest (*crypto/sha1.digest).BlockSize ��	digest.ptr.prototype.BlockSize = function() {
		var d;
		d = this;
  �		return 64;
    	};
	digest.prototype.BlockSize = function() { return this.$val.BlockSize(); };
digestcrypto/sha1.digest (*crypto/sha1.digest).Write �h	digest.ptr.prototype.Write = function(p) {
		var d, err, n, n$1, nn, p, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; d = $f.d; err = $f.err; n = $f.n; n$1 = $f.n$1; nn = $f.nn; p = $f.p; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		nn = 0;
		err = $ifaceNil;
		d = this;
  �		nn = p.$length;
  �		d.len = (x = d.len, x$1 = (new $Uint64(0, nn)), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
  		/* */ if (d.nx > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.nx > 0) { */ case 1:
  			n = $copySlice($subslice(new sliceType(d.x), d.nx), p);
  -			d.nx = d.nx + (n) >> 0;
  9			/* */ if (d.nx === 64) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (d.nx === 64) { */ case 3:
  O				$r = block(d, new sliceType(d.x)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c				d.nx = 0;
    			/* } */ case 4:
  r			p = $subslice(p, n);
    		/* } */ case 2:
  �		/* */ if (p.$length >= 64) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (p.$length >= 64) { */ case 6:
  �			n$1 = (p.$length & ~63) >> 0;
  �			$r = block(d, $subslice(p, 0, n$1)); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			p = $subslice(p, n$1);
    		/* } */ case 7:
    		if (p.$length > 0) {
  �			d.nx = $copySlice(new sliceType(d.x), p);
    		}
  		$s = -1; return [nn, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Write }; } $f.d = d; $f.err = err; $f.n = n; $f.n$1 = n$1; $f.nn = nn; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Write = function(p) { return this.$val.Write(p); };
digestcrypto/sha1.blockcrypto/sha1.digestcrypto/sha1.sliceType (*crypto/sha1.digest).Sum �s	digest.ptr.prototype.Sum = function(in$1) {
		var _r, d, d0, hash$1, in$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; d0 = $f.d0; hash$1 = $f.hash$1; in$1 = $f.in$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  w		d0 = $clone(d, digest);
  �		_r = d0.checkSum(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		hash$1 = $clone(_r, arrayType$4);
  �		$s = -1; return $appendSlice(in$1, new sliceType(hash$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Sum }; } $f._r = _r; $f.d = d; $f.d0 = d0; $f.hash$1 = hash$1; $f.in$1 = in$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
digestcrypto/sha1.arrayType$4crypto/sha1.checkSum~crypto/sha1.digestcrypto/sha1.sliceType (*crypto/sha1.digest).checkSum �
�	digest.ptr.prototype.checkSum = function() {
		var _r, _r$1, _r$2, d, digest$1, len, tmp, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; d = $f.d; digest$1 = $f.digest$1; len = $f.len; tmp = $f.tmp; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		len = d.len;
  1		tmp = arrayType$3.zero();
  ?		tmp[0] = 128;
  N		/* */ if ((x = $div64(len, new $Uint64(0, 64), true), (x.$high < 0 || (x.$high === 0 && x.$low < 56)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x = $div64(len, new $Uint64(0, 64), true), (x.$high < 0 || (x.$high === 0 && x.$low < 56)))) { */ case 1:
  a			_r = d.Write($subslice(new sliceType(tmp), 0, $flatten64((x$1 = $div64(len, new $Uint64(0, 64), true), new $Uint64(0 - x$1.$high, 56 - x$1.$low))))); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    			$s = 3; continue;
		/* } else { */ case 2:
  �			_r$1 = d.Write($subslice(new sliceType(tmp), 0, $flatten64((x$2 = $div64(len, new $Uint64(0, 64), true), new $Uint64(0 - x$2.$high, 120 - x$2.$low))))); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 3:
  �		len = $shiftLeft64(len, (3));
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint64(new sliceType(tmp), len);
  �		_r$2 = d.Write($subslice(new sliceType(tmp), 0, 8)); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
    		if (!((d.nx === 0))) {
  			$panic(new $String("d.nx != 0"));
    		}
  6		digest$1 = arrayType$4.zero();
  J		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType(digest$1), 0), d.h[0]);
  z		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType(digest$1), 4), d.h[1]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType(digest$1), 8), d.h[2]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType(digest$1), 12), d.h[3]);
  		$clone(binary.BigEndian, binary.bigEndian).PutUint32($subslice(new sliceType(digest$1), 16), d.h[4]);
  =		$s = -1; return digest$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.checkSum }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.d = d; $f.digest$1 = digest$1; $f.len = len; $f.tmp = tmp; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.checkSum = function() { return this.$val.checkSum(); };
digest	checkSum~crypto/sha1.arrayType$3crypto/sha1.arrayType$4crypto/sha1.digestcrypto/sha1.sliceTypeencoding/binary.BigEndianencoding/binary.bigEndian %(*crypto/sha1.digest).ConstantTimeSum ��	digest.ptr.prototype.ConstantTimeSum = function(in$1) {
		var _r, d, d0, hash$1, in$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; d0 = $f.d0; hash$1 = $f.hash$1; in$1 = $f.in$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		d0 = $clone(d, digest);
  �		_r = d0.constSum(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		hash$1 = $clone(_r, arrayType$4);
  �		$s = -1; return $appendSlice(in$1, new sliceType(hash$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.ConstantTimeSum }; } $f._r = _r; $f.d = d; $f.d0 = d0; $f.hash$1 = hash$1; $f.in$1 = in$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.ConstantTimeSum = function(in$1) { return this.$val.ConstantTimeSum(in$1); };
digestcrypto/sha1.arrayType$4crypto/sha1.constSum~crypto/sha1.digestcrypto/sha1.sliceType (*crypto/sha1.digest).constSum �	digest.ptr.prototype.constSum = function() {
		var _i, _i$1, _index, _index$1, _index$2, _index$3, _ref, _ref$1, d, digest$1, i, i$1, i$2, i$3, i$4, l, length, mask, mask1b, nx, s, s$1, separator, t, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _index = $f._index; _index$1 = $f._index$1; _index$2 = $f._index$2; _index$3 = $f._index$3; _ref = $f._ref; _ref$1 = $f._ref$1; d = $f.d; digest$1 = $f.digest$1; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; l = $f.l; length = $f.length; mask = $f.mask; mask1b = $f.mask1b; nx = $f.nx; s = $f.s; s$1 = $f.s$1; separator = $f.separator; t = $f.t; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  >		length = arrayType.zero();
  N		l = $shiftLeft64(d.len, 3);
  c		i = 0;
		while (true) {
			if (!(i < 8)) { break; }
  �			((i < 0 || i >= length.length) ? ($throwRuntimeError("index out of range"), undefined) : length[i] = (($shiftRightUint64(l, ((56 - (8 * i >>> 0) >>> 0))).$low << 24 >>> 24)));
  x			i = i + (1) >>> 0;
    		}
  �		nx = ((d.nx << 24 >>> 24));
  �		t = nx - 56 << 24 >>> 24;
  �		mask1b = (((((t << 24 >> 24)) >> 7 << 24 >> 24) << 24 >>> 24));
  G		separator = 128;
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < 64)) { break; }
  �			mask = ((((((i$1 - nx << 24 >>> 24) << 24 >> 24)) >> 7 << 24 >> 24) << 24 >>> 24));
  &			(x$1 = d.x, ((i$1 < 0 || i$1 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i$1] = ((((((~mask << 24 >>> 24) & separator) >>> 0)) | (((mask & (x = d.x, ((i$1 < 0 || i$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i$1]))) >>> 0))) >>> 0)));
  z			separator = (separator & (mask)) >>> 0;
    			if (i$1 >= 56) {
  �				(x$4 = d.x, ((i$1 < 0 || i$1 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i$1] = (((x$2 = d.x, ((i$1 < 0 || i$1 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$1])) | (((mask1b & (x$3 = i$1 - 56 << 24 >>> 24, ((x$3 < 0 || x$3 >= length.length) ? ($throwRuntimeError("index out of range"), undefined) : length[x$3]))) >>> 0))) >>> 0)));
    			}
  �			i$1 = i$1 + (1) << 24 >>> 24;
    		}
  L		$r = block(d, new sliceType(d.x)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c		digest$1 = arrayType$4.zero();
  v		_ref = d.h;
		_i = 0;
		while (true) {
			if (!(_i < 5)) { break; }
			i$2 = _i;
			s = ((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]);
  �			(x$5 = $imul(i$2, 4), ((x$5 < 0 || x$5 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[x$5] = ((mask1b & (((s >>> 24 >>> 0) << 24 >>> 24))) >>> 0)));
  �			(x$6 = ($imul(i$2, 4)) + 1 >> 0, ((x$6 < 0 || x$6 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[x$6] = ((mask1b & (((s >>> 16 >>> 0) << 24 >>> 24))) >>> 0)));
  �			(x$7 = ($imul(i$2, 4)) + 2 >> 0, ((x$7 < 0 || x$7 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[x$7] = ((mask1b & (((s >>> 8 >>> 0) << 24 >>> 24))) >>> 0)));
  			(x$8 = ($imul(i$2, 4)) + 3 >> 0, ((x$8 < 0 || x$8 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[x$8] = ((mask1b & ((s << 24 >>> 24))) >>> 0)));
    			_i++;
		}
  ,		i$3 = 0;
		while (true) {
			if (!(i$3 < 64)) { break; }
    			if (i$3 < 56) {
  �				(x$9 = d.x, ((i$3 < 0 || i$3 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[i$3] = separator));
  �				separator = 0;
    			} else {
  �				(x$11 = d.x, ((i$3 < 0 || i$3 >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[i$3] = (x$10 = i$3 - 56 << 24 >>> 24, ((x$10 < 0 || x$10 >= length.length) ? ($throwRuntimeError("index out of range"), undefined) : length[x$10]))));
    			}
  E			i$3 = i$3 + (1) << 24 >>> 24;
    		}
  F		$r = block(d, new sliceType(d.x)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Y		_ref$1 = d.h;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < 5)) { break; }
			i$4 = _i$1;
			s$1 = ((_i$1 < 0 || _i$1 >= _ref$1.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1[_i$1]);
    			_index = $imul(i$4, 4);
  s			((_index < 0 || _index >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index] = ((((_index < 0 || _index >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index]) | ((((~mask1b << 24 >>> 24) & (((s$1 >>> 24 >>> 0) << 24 >>> 24))) >>> 0))) >>> 0));
    			_index$1 = ($imul(i$4, 4)) + 1 >> 0;
  �			((_index$1 < 0 || _index$1 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$1] = ((((_index$1 < 0 || _index$1 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$1]) | ((((~mask1b << 24 >>> 24) & (((s$1 >>> 16 >>> 0) << 24 >>> 24))) >>> 0))) >>> 0));
    			_index$2 = ($imul(i$4, 4)) + 2 >> 0;
  �			((_index$2 < 0 || _index$2 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$2] = ((((_index$2 < 0 || _index$2 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$2]) | ((((~mask1b << 24 >>> 24) & (((s$1 >>> 8 >>> 0) << 24 >>> 24))) >>> 0))) >>> 0));
    			_index$3 = ($imul(i$4, 4)) + 3 >> 0;
  �			((_index$3 < 0 || _index$3 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$3] = ((((_index$3 < 0 || _index$3 >= digest$1.length) ? ($throwRuntimeError("index out of range"), undefined) : digest$1[_index$3]) | ((((~mask1b << 24 >>> 24) & ((s$1 << 24 >>> 24))) >>> 0))) >>> 0));
    			_i$1++;
		}
  		$s = -1; return digest$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.constSum }; } $f._i = _i; $f._i$1 = _i$1; $f._index = _index; $f._index$1 = _index$1; $f._index$2 = _index$2; $f._index$3 = _index$3; $f._ref = _ref; $f._ref$1 = _ref$1; $f.d = d; $f.digest$1 = digest$1; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.l = l; $f.length = length; $f.mask = mask; $f.mask1b = mask1b; $f.nx = nx; $f.s = s; $f.s$1 = s$1; $f.separator = separator; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.constSum = function() { return this.$val.constSum(); };
digest	constSum~crypto/sha1.arrayTypecrypto/sha1.arrayType$4crypto/sha1.blockcrypto/sha1.digestcrypto/sha1.sliceType crypto/sha1.Sumcrypto/sha1Sum Sum��	Sum = function(data) {
		var $24r, _r, _r$1, d, data, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; d = $f.d; data = $f.data; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  {		d = new digest.ptr(arrayType$2.zero(), arrayType$3.zero(), 0, new $Uint64(0, 0));
  �		d.Reset();
  �		_r = d.Write(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  �		_r$1 = d.checkSum(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sum }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.d = d; $f.data = data; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sum = Sum;
Sumcrypto/sha1.Sumcrypto/sha1.arrayType$2crypto/sha1.arrayType$3crypto/sha1.checkSum~crypto/sha1.digest crypto/sha1.blockGenericcrypto/sha1blockGeneric blockGeneric��	blockGeneric = function(dig, p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, a, b, c, d, dig, e, f, f$1, f$2, f$3, f$4, h0, h1, h2, h3, h4, i, i$1, j, p, t, t$1, t$2, t$3, t$4, tmp, tmp$1, tmp$2, tmp$3, w, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  x		w = arrayType$5.zero();
  �		_tmp = dig.h[0];
		_tmp$1 = dig.h[1];
		_tmp$2 = dig.h[2];
		_tmp$3 = dig.h[3];
		_tmp$4 = dig.h[4];
		h0 = _tmp;
		h1 = _tmp$1;
		h2 = _tmp$2;
		h3 = _tmp$3;
		h4 = _tmp$4;
  �		while (true) {
			if (!(p.$length >= 64)) { break; }
  C			i = 0;
			while (true) {
				if (!(i < 16)) { break; }
  \				j = $imul(i, 4);
  j				((i < 0 || i >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i] = (((((((((((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]) >>> 0)) << 24 >>> 0) | ((((x = j + 1 >> 0, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x])) >>> 0)) << 16 >>> 0)) >>> 0) | ((((x$1 = j + 2 >> 0, ((x$1 < 0 || x$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$1])) >>> 0)) << 8 >>> 0)) >>> 0) | (((x$2 = j + 3 >> 0, ((x$2 < 0 || x$2 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$2])) >>> 0))) >>> 0));
  S				i = i + (1) >> 0;
    			}
  �			_tmp$5 = h0;
			_tmp$6 = h1;
			_tmp$7 = h2;
			_tmp$8 = h3;
			_tmp$9 = h4;
			a = _tmp$5;
			b = _tmp$6;
			c = _tmp$7;
			d = _tmp$8;
			e = _tmp$9;
  h			i$1 = 0;
  q			while (true) {
				if (!(i$1 < 16)) { break; }
  �				f = (((b & c) >>> 0) | ((((~b >>> 0)) & d) >>> 0)) >>> 0;
  �				t = (((bits.RotateLeft32(a, 5) + f >>> 0) + e >>> 0) + (x$3 = i$1 & 15, ((x$3 < 0 || x$3 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$3])) >>> 0) + 1518500249 >>> 0;
  �				_tmp$10 = t;
				_tmp$11 = a;
				_tmp$12 = bits.RotateLeft32(b, 30);
				_tmp$13 = c;
				_tmp$14 = d;
				a = _tmp$10;
				b = _tmp$11;
				c = _tmp$12;
				d = _tmp$13;
				e = _tmp$14;
  				i$1 = i$1 + (1) >> 0;
    			}
  			while (true) {
				if (!(i$1 < 20)) { break; }
  (				tmp = ((((((x$4 = ((i$1 - 3 >> 0)) & 15, ((x$4 < 0 || x$4 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$4])) ^ (x$5 = ((i$1 - 8 >> 0)) & 15, ((x$5 < 0 || x$5 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$5]))) >>> 0) ^ (x$6 = ((i$1 - 14 >> 0)) & 15, ((x$6 < 0 || x$6 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$6]))) >>> 0) ^ (x$7 = (i$1) & 15, ((x$7 < 0 || x$7 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$7]))) >>> 0;
  k				(x$8 = i$1 & 15, ((x$8 < 0 || x$8 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$8] = (((tmp << 1 >>> 0) | (tmp >>> 31 >>> 0)) >>> 0)));
  �				f$1 = (((b & c) >>> 0) | ((((~b >>> 0)) & d) >>> 0)) >>> 0;
  �				t$1 = (((bits.RotateLeft32(a, 5) + f$1 >>> 0) + e >>> 0) + (x$9 = i$1 & 15, ((x$9 < 0 || x$9 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$9])) >>> 0) + 1518500249 >>> 0;
  �				_tmp$15 = t$1;
				_tmp$16 = a;
				_tmp$17 = bits.RotateLeft32(b, 30);
				_tmp$18 = c;
				_tmp$19 = d;
				a = _tmp$15;
				b = _tmp$16;
				c = _tmp$17;
				d = _tmp$18;
				e = _tmp$19;
  				i$1 = i$1 + (1) >> 0;
    			}
  			while (true) {
				if (!(i$1 < 40)) { break; }
  /				tmp$1 = ((((((x$10 = ((i$1 - 3 >> 0)) & 15, ((x$10 < 0 || x$10 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$10])) ^ (x$11 = ((i$1 - 8 >> 0)) & 15, ((x$11 < 0 || x$11 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$11]))) >>> 0) ^ (x$12 = ((i$1 - 14 >> 0)) & 15, ((x$12 < 0 || x$12 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$12]))) >>> 0) ^ (x$13 = (i$1) & 15, ((x$13 < 0 || x$13 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$13]))) >>> 0;
  r				(x$14 = i$1 & 15, ((x$14 < 0 || x$14 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$14] = (((tmp$1 << 1 >>> 0) | (tmp$1 >>> 31 >>> 0)) >>> 0)));
  �				f$2 = (((b ^ c) >>> 0) ^ d) >>> 0;
  �				t$2 = (((bits.RotateLeft32(a, 5) + f$2 >>> 0) + e >>> 0) + (x$15 = i$1 & 15, ((x$15 < 0 || x$15 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$15])) >>> 0) + 1859775393 >>> 0;
  �				_tmp$20 = t$2;
				_tmp$21 = a;
				_tmp$22 = bits.RotateLeft32(b, 30);
				_tmp$23 = c;
				_tmp$24 = d;
				a = _tmp$20;
				b = _tmp$21;
				c = _tmp$22;
				d = _tmp$23;
				e = _tmp$24;
  &				i$1 = i$1 + (1) >> 0;
    			}
  			while (true) {
				if (!(i$1 < 60)) { break; }
  2				tmp$2 = ((((((x$16 = ((i$1 - 3 >> 0)) & 15, ((x$16 < 0 || x$16 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$16])) ^ (x$17 = ((i$1 - 8 >> 0)) & 15, ((x$17 < 0 || x$17 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$17]))) >>> 0) ^ (x$18 = ((i$1 - 14 >> 0)) & 15, ((x$18 < 0 || x$18 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$18]))) >>> 0) ^ (x$19 = (i$1) & 15, ((x$19 < 0 || x$19 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$19]))) >>> 0;
  u				(x$20 = i$1 & 15, ((x$20 < 0 || x$20 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$20] = (((tmp$2 << 1 >>> 0) | (tmp$2 >>> 31 >>> 0)) >>> 0)));
  �				f$3 = (((((((b | c) >>> 0)) & d) >>> 0)) | (((b & c) >>> 0))) >>> 0;
  �				t$3 = (((bits.RotateLeft32(a, 5) + f$3 >>> 0) + e >>> 0) + (x$21 = i$1 & 15, ((x$21 < 0 || x$21 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$21])) >>> 0) + 2400959708 >>> 0;
  �				_tmp$25 = t$3;
				_tmp$26 = a;
				_tmp$27 = bits.RotateLeft32(b, 30);
				_tmp$28 = c;
				_tmp$29 = d;
				a = _tmp$25;
				b = _tmp$26;
				c = _tmp$27;
				d = _tmp$28;
				e = _tmp$29;
  )				i$1 = i$1 + (1) >> 0;
    			}
  ,			while (true) {
				if (!(i$1 < 80)) { break; }
  C				tmp$3 = ((((((x$22 = ((i$1 - 3 >> 0)) & 15, ((x$22 < 0 || x$22 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$22])) ^ (x$23 = ((i$1 - 8 >> 0)) & 15, ((x$23 < 0 || x$23 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$23]))) >>> 0) ^ (x$24 = ((i$1 - 14 >> 0)) & 15, ((x$24 < 0 || x$24 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$24]))) >>> 0) ^ (x$25 = (i$1) & 15, ((x$25 < 0 || x$25 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$25]))) >>> 0;
  �				(x$26 = i$1 & 15, ((x$26 < 0 || x$26 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$26] = (((tmp$3 << 1 >>> 0) | (tmp$3 >>> 31 >>> 0)) >>> 0)));
  �				f$4 = (((b ^ c) >>> 0) ^ d) >>> 0;
  �				t$4 = (((bits.RotateLeft32(a, 5) + f$4 >>> 0) + e >>> 0) + (x$27 = i$1 & 15, ((x$27 < 0 || x$27 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$27])) >>> 0) + 3395469782 >>> 0;
  �				_tmp$30 = t$4;
				_tmp$31 = a;
				_tmp$32 = bits.RotateLeft32(b, 30);
				_tmp$33 = c;
				_tmp$34 = d;
				a = _tmp$30;
				b = _tmp$31;
				c = _tmp$32;
				d = _tmp$33;
				e = _tmp$34;
  :				i$1 = i$1 + (1) >> 0;
    			}
   0			h0 = h0 + (a) >>> 0;
   :			h1 = h1 + (b) >>> 0;
   D			h2 = h2 + (c) >>> 0;
   N			h3 = h3 + (d) >>> 0;
   X			h4 = h4 + (e) >>> 0;
   c			p = $subslice(p, 64);
    		}
   v		_tmp$35 = h0;
		_tmp$36 = h1;
		_tmp$37 = h2;
		_tmp$38 = h3;
		_tmp$39 = h4;
		dig.h[0] = _tmp$35;
		dig.h[1] = _tmp$36;
		dig.h[2] = _tmp$37;
		dig.h[3] = _tmp$38;
		dig.h[4] = _tmp$39;
    	};
blockGenericcrypto/sha1.arrayType$5crypto/sha1.blockGenericmath/bits.RotateLeft32 �2{"Base":8679,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha1/sha1.go","Base":1,"Size":6068,"Lines":[0,55,109,159,160,236,239,310,327,340,341,350,360,379,389,397,399,400,414,453,455,456,498,514,515,551,572,573,581,593,613,633,653,673,693,695,696,755,776,791,808,817,829,831,832,840,867,913,915,916,967,1004,1029,1058,1087,1116,1145,1174,1204,1255,1283,1298,1300,1301,1352,1413,1479,1482,1512,1572,1575,1595,1625,1655,1685,1715,1745,1770,1799,1826,1838,1840,1841,1888,1903,1940,1967,1969,1970,2017,2032,2069,2096,2098,2099,2147,2157,2234,2310,2327,2329,2330,2378,2388,2463,2480,2482,2483,2510,2526,2542,2558,2574,2590,2600,2611,2613,2614,2688,2761,2818,2841,2859,2870,2880,2882,2883,2927,2928,2982,2983,3038,3051,3072,3087,3114,3126,3147,3167,3179,3183,3195,3198,3220,3249,3267,3279,3282,3299,3324,3327,3335,3337,3338,3379,3445,3455,3478,3509,3511,3512,3553,3567,3627,3645,3660,3678,3708,3718,3751,3754,3755,3775,3786,3827,3846,3847,3863,3884,3887,3888,3911,3912,3960,4008,4056,4105,4154,4155,4170,4172,4173,4247,4300,4310,4333,4364,4366,4367,4408,4428,4445,4477,4513,4516,4517,4535,4604,4676,4677,4734,4770,4832,4833,4899,4948,4949,4983,5003,5004,5019,5088,5123,5127,5130,5131,5194,5212,5213,5236,5261,5298,5337,5375,5410,5413,5414,5450,5525,5539,5561,5578,5589,5614,5618,5621,5622,5700,5718,5719,5744,5783,5824,5864,5901,5904,5905,5920,5922,5923,5970,6005,6019,6030,6045,6066],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha1/sha1block.go","Base":6070,"Size":2312,"Lines":[0,55,109,159,160,173,174,183,196,198,199,207,225,243,261,279,281,282,354,402,445,463,464,536,559,608,647,675,689,774,778,779,817,818,860,906,944,953,975,996,1053,1109,1113,1135,1202,1237,1238,1259,1316,1372,1376,1398,1465,1500,1518,1575,1631,1635,1657,1724,1759,1791,1848,1904,1908,1930,1997,2032,2050,2107,2163,2167,2168,2178,2188,2198,2208,2218,2219,2235,2238,2239,2310],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha1/sha1block_generic.go","Base":8383,"Size":295,"Lines":[0,55,109,159,160,214,255,256,269,270],"Infos":null}]}
 