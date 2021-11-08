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
GoLinkname�� Implementation�� 	Reference��   �z��#vendor/golang.org/x/crypto/chacha20chacha20crypto/cipherencoding/binaryerrors	math/bitsruntime*vendor/golang.org/x/crypto/internal/subtle�i �� keycounternoncebuflenoverflowprecompDonep1p5p9p13p2p6p10p14p3p7p11p15
SetCountersCipherXORKeyStreamdstsrcxorKeyStreamBlocksGenericxorKeyStreamBlockschacha20	HChaCha20KeySizeNewUnauthenticatedCipher	NonceSize
NonceSizeX		@      	   #   &          $    0	   3	   6	   9	   =	   @	   C	   G	   K	   N	   Q	   U	   f ����T ) Y d� 	   m d� z� ~�   � d� z� ~�   � d� z� ~�  F  � �  �   C @�F  � �  �   C C 0 � f����������� cipher&	cipher = $packages["crypto/cipher"];
��    		$r = cipher.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  subtleC	subtle = $packages["vendor/golang.org/x/crypto/internal/subtle"];
��    		$r = subtle.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Cipher�Q	Cipher = $pkg.Cipher = $newType(0, $kindStruct, "chacha20.Cipher", true, "vendor/golang.org/x/crypto/chacha20", true, function(key_, counter_, nonce_, buf_, len_, overflow_, precompDone_, p1_, p5_, p9_, p13_, p2_, p6_, p10_, p14_, p3_, p7_, p11_, p15_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.key = arrayType.zero();
			this.counter = 0;
			this.nonce = arrayType$1.zero();
			this.buf = arrayType$2.zero();
			this.len = 0;
			this.overflow = false;
			this.precompDone = false;
			this.p1 = 0;
			this.p5 = 0;
			this.p9 = 0;
			this.p13 = 0;
			this.p2 = 0;
			this.p6 = 0;
			this.p10 = 0;
			this.p14 = 0;
			this.p3 = 0;
			this.p7 = 0;
			this.p11 = 0;
			this.p15 = 0;
			return;
		}
		this.key = key_;
		this.counter = counter_;
		this.nonce = nonce_;
		this.buf = buf_;
		this.len = len_;
		this.overflow = overflow_;
		this.precompDone = precompDone_;
		this.p1 = p1_;
		this.p5 = p5_;
		this.p9 = p9_;
		this.p13 = p13_;
		this.p2 = p2_;
		this.p6 = p6_;
		this.p10 = p10_;
		this.p14 = p14_;
		this.p3 = p3_;
		this.p7 = p7_;
		this.p11 = p11_;
		this.p15 = p15_;
	});
�	ptrType.methods = [{prop: "SetCounter", name: "SetCounter", pkg: "", typ: $funcType([$Uint32], [], false)}, {prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "xorKeyStreamBlocksGeneric", name: "xorKeyStreamBlocksGeneric", pkg: "vendor/golang.org/x/crypto/chacha20", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "xorKeyStreamBlocks", name: "xorKeyStreamBlocks", pkg: "vendor/golang.org/x/crypto/chacha20", typ: $funcType([sliceType, sliceType], [], false)}];
��	Cipher.init("vendor/golang.org/x/crypto/chacha20", [{prop: "key", name: "key", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "counter", name: "counter", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "nonce", name: "nonce", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "overflow", name: "overflow", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "precompDone", name: "precompDone", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "p1", name: "p1", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p5", name: "p5", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p9", name: "p9", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p13", name: "p13", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p2", name: "p2", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p6", name: "p6", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p10", name: "p10", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p14", name: "p14", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p3", name: "p3", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p7", name: "p7", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p11", name: "p11", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "p15", name: "p15", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
Cipher*vendor/golang.org/x/crypto/chacha20.Cipher-vendor/golang.org/x/crypto/chacha20.arrayType/vendor/golang.org/x/crypto/chacha20.arrayType$1/vendor/golang.org/x/crypto/chacha20.arrayType$2+vendor/golang.org/x/crypto/chacha20.ptrType-vendor/golang.org/x/crypto/chacha20.sliceType  ptrType	ptrType = $ptrType(Cipher);
ptrType*vendor/golang.org/x/crypto/chacha20.Cipher  	arrayType%	arrayType = $arrayType($Uint32, 8);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint32, 3);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint8, 64);
arrayType$2  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType    		$unused((ptrType.nil));
_*vendor/golang.org/x/crypto/chacha20.Cipher+vendor/golang.org/x/crypto/chacha20.ptrType <vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher#vendor/golang.org/x/crypto/chacha20NewUnauthenticatedCipher NewUnauthenticatedCipher�P	NewUnauthenticatedCipher = function(key, nonce) {
		var c, key, nonce;
  
t		c = new Cipher.ptr(arrayType.zero(), 0, arrayType$1.zero(), arrayType$2.zero(), 0, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  
�		return newUnauthenticatedCipher(c, key, nonce);
    	};
	$pkg.NewUnauthenticatedCipher = NewUnauthenticatedCipher;
NewUnauthenticatedCipher*vendor/golang.org/x/crypto/chacha20.Cipher<vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher-vendor/golang.org/x/crypto/chacha20.arrayType/vendor/golang.org/x/crypto/chacha20.arrayType$1/vendor/golang.org/x/crypto/chacha20.arrayType$2<vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher <vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher#vendor/golang.org/x/crypto/chacha20newUnauthenticatedCipher newUnauthenticatedCipher��	newUnauthenticatedCipher = function(c, key, nonce) {
		var _tmp, _tmp$1, _tuple, c, cNonce, key, nonce;
    		if (!((key.$length === 32))) {
  !			return [ptrType.nil, errors.New("chacha20: wrong key size")];
    		}
    		if (nonce.$length === 24) {
  5			_tuple = HChaCha20(key, $subslice(nonce, 0, 16));
			key = _tuple[0];
  \			cNonce = $makeSlice(sliceType, 12);
  �			$copySlice($subslice(cNonce, 4, 12), $subslice(nonce, 16, 24));
  �			nonce = cNonce;
    		} else if (!((nonce.$length === 12))) {
  �			return [ptrType.nil, errors.New("chacha20: wrong nonce size")];
    		}
  		_tmp = $subslice(key, 0, 32);
		_tmp$1 = $subslice(nonce, 0, 12);
		key = _tmp;
		nonce = _tmp$1;
  c		arrayType.copy(c.key, $toNativeArray($kindUint32, [$clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 0, 4)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 4, 8)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 8, 12)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 12, 16)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 16, 20)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 20, 24)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 24, 28)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 28, 32))]));
  �		arrayType$1.copy(c.nonce, $toNativeArray($kindUint32, [$clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 0, 4)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 4, 8)), $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 8, 12))]));
  ]		return [c, $ifaceNil];
    	};
newUnauthenticatedCipher	encoding/binary.LittleEndianencoding/binary.littleEndian
errors.New-vendor/golang.org/x/crypto/chacha20.HChaCha20-vendor/golang.org/x/crypto/chacha20.arrayType/vendor/golang.org/x/crypto/chacha20.arrayType$1<vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher+vendor/golang.org/x/crypto/chacha20.ptrType-vendor/golang.org/x/crypto/chacha20.sliceType 0vendor/golang.org/x/crypto/chacha20.quarterRound#vendor/golang.org/x/crypto/chacha20quarterRound quarterRound��	quarterRound = function(a, b, c, d) {
		var a, b, c, d;
  r		a = a + (b) >>> 0;
  z		d = (d ^ (a)) >>> 0;
  �		d = bits.RotateLeft32(d, 16);
  �		c = c + (d) >>> 0;
  �		b = (b ^ (c)) >>> 0;
  �		b = bits.RotateLeft32(b, 12);
  �		a = a + (b) >>> 0;
  �		d = (d ^ (a)) >>> 0;
  �		d = bits.RotateLeft32(d, 8);
  �		c = c + (d) >>> 0;
  		b = (b ^ (c)) >>> 0;
  		b = bits.RotateLeft32(b, 7);
  (		return [a, b, c, d];
    	};
quarterRoundmath/bits.RotateLeft320vendor/golang.org/x/crypto/chacha20.quarterRound 8(*vendor/golang.org/x/crypto/chacha20.Cipher).SetCounter ��	Cipher.ptr.prototype.SetCounter = function(counter) {
		var _q, counter, outputCounter, s;
		s = this;
  �		outputCounter = s.counter - (_q = ((s.len >>> 0)) / 64, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 0;
    		if (s.overflow || counter < outputCounter) {
   			$panic(new $String("chacha20: SetCounter attempted to rollback counter"));
    		}
    		if (counter < s.counter) {
  r			s.len = $imul((((s.counter - counter >>> 0) >> 0)), 64);
    		} else {
  �			s.counter = counter;
  �			s.len = 0;
    		}
    	};
	Cipher.prototype.SetCounter = function(counter) { return this.$val.SetCounter(counter); };
Cipher*vendor/golang.org/x/crypto/chacha20.Cipher :(*vendor/golang.org/x/crypto/chacha20.Cipher).XORKeyStream �>	Cipher.ptr.prototype.XORKeyStream = function(dst, src) {
		var _i, _q, _r, _r$1, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, b, buf, dst, full, i, keyStream, numBlocks, numBlocks$1, s, src, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; b = $f.b; buf = $f.buf; dst = $f.dst; full = $f.full; i = $f.i; keyStream = $f.keyStream; numBlocks = $f.numBlocks; numBlocks$1 = $f.numBlocks$1; s = $f.s; src = $f.src; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
    		if (src.$length === 0) {
  =			$s = -1; return;
    		}
    		if (dst.$length < src.$length) {
  c			$panic(new $String("chacha20: output smaller than input"));
    		}
  �		dst = $subslice(dst, 0, src.$length);
  �		_r = subtle.InexactOverlap(dst, src); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_r) { */ case 1:
  �			$panic(new $String("chacha20: invalid buffer overlap"));
    		/* } */ case 2:
    		if (!((s.len === 0))) {
  Z			keyStream = $subslice(new sliceType(s.buf), (64 - s.len >> 0));
    			if (src.$length < keyStream.$length) {
  �				keyStream = $subslice(keyStream, 0, src.$length);
    			}
  �			$unused((x = keyStream.$length - 1 >> 0, ((x < 0 || x >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x])));
  			_ref = keyStream;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  &				((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = ((((i < 0 || i >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + i]) ^ b) << 24 >>> 24));
    				_i++;
			}
  @			s.len = s.len - (keyStream.$length) >> 0;
  Z			_tmp = $subslice(dst, keyStream.$length);
			_tmp$1 = $subslice(src, keyStream.$length);
			dst = _tmp;
			src = _tmp$1;
    		}
    		if (src.$length === 0) {
  �			$s = -1; return;
    		}
  �		numBlocks = $div64(((x$1 = (x$2 = (new $Uint64(0, src.$length)), new $Uint64(x$2.$high + 0, x$2.$low + 64)), new $Uint64(x$1.$high - 0, x$1.$low - 1))), new $Uint64(0, 64), false);
    		if (s.overflow || (x$3 = (x$4 = (new $Uint64(0, s.counter)), new $Uint64(x$4.$high + numBlocks.$high, x$4.$low + numBlocks.$low)), (x$3.$high > 1 || (x$3.$high === 1 && x$3.$low > 0)))) {
   			$panic(new $String("chacha20: counter overflow"));
    		} else if ((x$5 = (x$6 = (new $Uint64(0, s.counter)), new $Uint64(x$6.$high + numBlocks.$high, x$6.$low + numBlocks.$low)), (x$5.$high === 1 && x$5.$low === 0))) {
  X			s.overflow = true;
    		}
  A		full = src.$length - (_r$1 = src.$length % 64, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) >> 0;
    		if (full > 0) {
  v			s.xorKeyStreamBlocks($subslice(dst, 0, full), $subslice(src, 0, full));
    		}
  �		_tmp$2 = $subslice(dst, full);
		_tmp$3 = $subslice(src, full);
		dst = _tmp$2;
		src = _tmp$3;
    		if ((x$7 = (x$8 = (new $Uint64(0, s.counter)), new $Uint64(x$8.$high + 0, x$8.$low + 1)), (x$7.$high > 1 || (x$7.$high === 1 && x$7.$low > 0)))) {
  �			arrayType$2.copy(s.buf, arrayType$2.zero());
  �			numBlocks$1 = (_q = (((src.$length + 64 >> 0) - 1 >> 0)) / 64, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  �			buf = $subslice(new sliceType(s.buf), (64 - ($imul(numBlocks$1, 64)) >> 0));
   			$copySlice(buf, src);
   &			s.xorKeyStreamBlocksGeneric(buf, buf);
   N			s.len = buf.$length - $copySlice(dst, buf) >> 0;
   r			$s = -1; return;
    		}
    		if (src.$length > 0) {
  !#			arrayType$2.copy(s.buf, arrayType$2.zero());
  !=			$copySlice(new sliceType(s.buf), src);
  !S			s.xorKeyStreamBlocks(new sliceType(s.buf), new sliceType(s.buf));
  !~			s.len = 64 - $copySlice(dst, new sliceType(s.buf)) >> 0;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Cipher.ptr.prototype.XORKeyStream }; } $f._i = _i; $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.b = b; $f.buf = buf; $f.dst = dst; $f.full = full; $f.i = i; $f.keyStream = keyStream; $f.numBlocks = numBlocks; $f.numBlocks$1 = numBlocks$1; $f.s = s; $f.src = src; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.$s = $s; $f.$r = $r; return $f;
	};
	Cipher.prototype.XORKeyStream = function(dst, src) { return this.$val.XORKeyStream(dst, src); };
Cipher*vendor/golang.org/x/crypto/chacha20.Cipher/vendor/golang.org/x/crypto/chacha20.arrayType$2-vendor/golang.org/x/crypto/chacha20.sliceType>vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocksGeneric~7vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocks~9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap G(*vendor/golang.org/x/crypto/chacha20.Cipher).xorKeyStreamBlocksGeneric �@	Cipher.ptr.prototype.xorKeyStreamBlocksGeneric = function(dst, src) {
		var _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$10, _tuple$11, _tuple$12, _tuple$13, _tuple$14, _tuple$15, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, c0, c1, c10, c11, c13, c14, c15, c2, c3, c4, c5, c6, c7, c8, c9, dst, fcr0, fcr12, fcr4, fcr8, i, s, src, x0, x1, x10, x11, x12, x13, x14, x15, x2, x3, x4, x5, x6, x7, x8, x9;
		s = this;
    		if (!((dst.$length === src.$length)) || !(((_r = dst.$length % 64, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
  " 			$panic(new $String("chacha20: internal error: wrong dst and/or src length"));
    		}
  $�		_tmp = 1634760805;
		_tmp$1 = 857760878;
		_tmp$2 = 2036477234;
		_tmp$3 = 1797285236;
		c0 = _tmp;
		c1 = _tmp$1;
		c2 = _tmp$2;
		c3 = _tmp$3;
  $�		_tmp$4 = s.key[0];
		_tmp$5 = s.key[1];
		_tmp$6 = s.key[2];
		_tmp$7 = s.key[3];
		c4 = _tmp$4;
		c5 = _tmp$5;
		c6 = _tmp$6;
		c7 = _tmp$7;
  $�		_tmp$8 = s.key[4];
		_tmp$9 = s.key[5];
		_tmp$10 = s.key[6];
		_tmp$11 = s.key[7];
		c8 = _tmp$8;
		c9 = _tmp$9;
		c10 = _tmp$10;
		c11 = _tmp$11;
  %&		$unused(s.counter);
		_tmp$13 = s.nonce[0];
		_tmp$14 = s.nonce[1];
		_tmp$15 = s.nonce[2];
		c13 = _tmp$13;
		c14 = _tmp$14;
		c15 = _tmp$15;
    		if (!s.precompDone) {
  &E			_tuple = quarterRound(c1, c5, c9, c13);
			s.p1 = _tuple[0];
			s.p5 = _tuple[1];
			s.p9 = _tuple[2];
			s.p13 = _tuple[3];
  &			_tuple$1 = quarterRound(c2, c6, c10, c14);
			s.p2 = _tuple$1[0];
			s.p6 = _tuple$1[1];
			s.p10 = _tuple$1[2];
			s.p14 = _tuple$1[3];
  &�			_tuple$2 = quarterRound(c3, c7, c11, c15);
			s.p3 = _tuple$2[0];
			s.p7 = _tuple$2[1];
			s.p11 = _tuple$2[2];
			s.p15 = _tuple$2[3];
  &�			s.precompDone = true;
    		}
  '�		while (true) {
			if (!(src.$length >= 64 && dst.$length >= 64)) { break; }
  '�			_tuple$3 = quarterRound(c0, c4, c8, s.counter);
			fcr0 = _tuple$3[0];
			fcr4 = _tuple$3[1];
			fcr8 = _tuple$3[2];
			fcr12 = _tuple$3[3];
  (:			_tuple$4 = quarterRound(fcr0, s.p5, s.p10, s.p15);
			x0 = _tuple$4[0];
			x5 = _tuple$4[1];
			x10 = _tuple$4[2];
			x15 = _tuple$4[3];
  (w			_tuple$5 = quarterRound(s.p1, s.p6, s.p11, fcr12);
			x1 = _tuple$5[0];
			x6 = _tuple$5[1];
			x11 = _tuple$5[2];
			x12 = _tuple$5[3];
  (�			_tuple$6 = quarterRound(s.p2, s.p7, fcr8, s.p13);
			x2 = _tuple$6[0];
			x7 = _tuple$6[1];
			x8 = _tuple$6[2];
			x13 = _tuple$6[3];
  (�			_tuple$7 = quarterRound(s.p3, fcr4, s.p9, s.p14);
			x3 = _tuple$7[0];
			x4 = _tuple$7[1];
			x9 = _tuple$7[2];
			x14 = _tuple$7[3];
  )M			i = 0;
			while (true) {
				if (!(i < 9)) { break; }
  )y				_tuple$8 = quarterRound(x0, x4, x8, x12);
				x0 = _tuple$8[0];
				x4 = _tuple$8[1];
				x8 = _tuple$8[2];
				x12 = _tuple$8[3];
  )�				_tuple$9 = quarterRound(x1, x5, x9, x13);
				x1 = _tuple$9[0];
				x5 = _tuple$9[1];
				x9 = _tuple$9[2];
				x13 = _tuple$9[3];
  )�				_tuple$10 = quarterRound(x2, x6, x10, x14);
				x2 = _tuple$10[0];
				x6 = _tuple$10[1];
				x10 = _tuple$10[2];
				x14 = _tuple$10[3];
  *				_tuple$11 = quarterRound(x3, x7, x11, x15);
				x3 = _tuple$11[0];
				x7 = _tuple$11[1];
				x11 = _tuple$11[2];
				x15 = _tuple$11[3];
  *`				_tuple$12 = quarterRound(x0, x5, x10, x15);
				x0 = _tuple$12[0];
				x5 = _tuple$12[1];
				x10 = _tuple$12[2];
				x15 = _tuple$12[3];
  *�				_tuple$13 = quarterRound(x1, x6, x11, x12);
				x1 = _tuple$13[0];
				x6 = _tuple$13[1];
				x11 = _tuple$13[2];
				x12 = _tuple$13[3];
  *�				_tuple$14 = quarterRound(x2, x7, x8, x13);
				x2 = _tuple$14[0];
				x7 = _tuple$14[1];
				x8 = _tuple$14[2];
				x13 = _tuple$14[3];
  *�				_tuple$15 = quarterRound(x3, x4, x9, x14);
				x3 = _tuple$15[0];
				x4 = _tuple$15[1];
				x9 = _tuple$15[2];
				x14 = _tuple$15[3];
  )\				i = i + (1) >> 0;
    			}
  +�			addXor($subslice(dst, 0, 4), $subslice(src, 0, 4), x0, c0);
  +�			addXor($subslice(dst, 4, 8), $subslice(src, 4, 8), x1, c1);
  ,			addXor($subslice(dst, 8, 12), $subslice(src, 8, 12), x2, c2);
  ,(			addXor($subslice(dst, 12, 16), $subslice(src, 12, 16), x3, c3);
  ,Q			addXor($subslice(dst, 16, 20), $subslice(src, 16, 20), x4, c4);
  ,z			addXor($subslice(dst, 20, 24), $subslice(src, 20, 24), x5, c5);
  ,�			addXor($subslice(dst, 24, 28), $subslice(src, 24, 28), x6, c6);
  ,�			addXor($subslice(dst, 28, 32), $subslice(src, 28, 32), x7, c7);
  ,�			addXor($subslice(dst, 32, 36), $subslice(src, 32, 36), x8, c8);
  -			addXor($subslice(dst, 36, 40), $subslice(src, 36, 40), x9, c9);
  -G			addXor($subslice(dst, 40, 44), $subslice(src, 40, 44), x10, c10);
  -r			addXor($subslice(dst, 44, 48), $subslice(src, 44, 48), x11, c11);
  -�			addXor($subslice(dst, 48, 52), $subslice(src, 48, 52), x12, s.counter);
  -�			addXor($subslice(dst, 52, 56), $subslice(src, 52, 56), x13, c13);
  -�			addXor($subslice(dst, 56, 60), $subslice(src, 56, 60), x14, c14);
  .$			addXor($subslice(dst, 60, 64), $subslice(src, 60, 64), x15, c15);
  .P			s.counter = s.counter + (1) >>> 0;
  .b			_tmp$16 = $subslice(src, 64);
			_tmp$17 = $subslice(dst, 64);
			src = _tmp$16;
			dst = _tmp$17;
    		}
    	};
	Cipher.prototype.xorKeyStreamBlocksGeneric = function(dst, src) { return this.$val.xorKeyStreamBlocksGeneric(dst, src); };
CipherxorKeyStreamBlocksGeneric~*vendor/golang.org/x/crypto/chacha20.Cipher*vendor/golang.org/x/crypto/chacha20.addXor0vendor/golang.org/x/crypto/chacha20.quarterRound -vendor/golang.org/x/crypto/chacha20.HChaCha20#vendor/golang.org/x/crypto/chacha20	HChaCha20 	HChaCha20��	HChaCha20 = function(key, nonce) {
		var key, nonce, out;
  0U		out = $makeSlice(sliceType, 32);
  0n		return hChaCha20(out, key, nonce);
    	};
	$pkg.HChaCha20 = HChaCha20;
	HChaCha20-vendor/golang.org/x/crypto/chacha20.HChaCha20-vendor/golang.org/x/crypto/chacha20.hChaCha20-vendor/golang.org/x/crypto/chacha20.sliceType -vendor/golang.org/x/crypto/chacha20.hChaCha20#vendor/golang.org/x/crypto/chacha20	hChaCha20 	hChaCha20�$	hChaCha20 = function(out, key, nonce) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, i, key, nonce, out, x0, x1, x10, x11, x12, x13, x14, x15, x2, x3, x4, x5, x6, x7, x8, x9;
    		if (!((key.$length === 32))) {
  0�			return [sliceType.nil, errors.New("chacha20: wrong HChaCha20 key size")];
    		}
    		if (!((nonce.$length === 16))) {
  1A			return [sliceType.nil, errors.New("chacha20: wrong HChaCha20 nonce size")];
    		}
  1�		_tmp = 1634760805;
		_tmp$1 = 857760878;
		_tmp$2 = 2036477234;
		_tmp$3 = 1797285236;
		x0 = _tmp;
		x1 = _tmp$1;
		x2 = _tmp$2;
		x3 = _tmp$3;
  1�		x4 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 0, 4));
  1�		x5 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 4, 8));
  1�		x6 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 8, 12));
  2,		x7 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 12, 16));
  2Z		x8 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 16, 20));
  2�		x9 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 20, 24));
  2�		x10 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 24, 28));
  2�		x11 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(key, 28, 32));
  3		x12 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 0, 4));
  3C		x13 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 4, 8));
  3r		x14 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 8, 12));
  3�		x15 = $clone(binary.LittleEndian, binary.littleEndian).Uint32($subslice(nonce, 12, 16));
  3�		i = 0;
		while (true) {
			if (!(i < 10)) { break; }
  4			_tuple = quarterRound(x0, x4, x8, x12);
			x0 = _tuple[0];
			x4 = _tuple[1];
			x8 = _tuple[2];
			x12 = _tuple[3];
  47			_tuple$1 = quarterRound(x1, x5, x9, x13);
			x1 = _tuple$1[0];
			x5 = _tuple$1[1];
			x9 = _tuple$1[2];
			x13 = _tuple$1[3];
  4i			_tuple$2 = quarterRound(x2, x6, x10, x14);
			x2 = _tuple$2[0];
			x6 = _tuple$2[1];
			x10 = _tuple$2[2];
			x14 = _tuple$2[3];
  4�			_tuple$3 = quarterRound(x3, x7, x11, x15);
			x3 = _tuple$3[0];
			x7 = _tuple$3[1];
			x11 = _tuple$3[2];
			x15 = _tuple$3[3];
  4�			_tuple$4 = quarterRound(x0, x5, x10, x15);
			x0 = _tuple$4[0];
			x5 = _tuple$4[1];
			x10 = _tuple$4[2];
			x15 = _tuple$4[3];
  5			_tuple$5 = quarterRound(x1, x6, x11, x12);
			x1 = _tuple$5[0];
			x6 = _tuple$5[1];
			x11 = _tuple$5[2];
			x12 = _tuple$5[3];
  5M			_tuple$6 = quarterRound(x2, x7, x8, x13);
			x2 = _tuple$6[0];
			x7 = _tuple$6[1];
			x8 = _tuple$6[2];
			x13 = _tuple$6[3];
  5			_tuple$7 = quarterRound(x3, x4, x9, x14);
			x3 = _tuple$7[0];
			x4 = _tuple$7[1];
			x9 = _tuple$7[2];
			x14 = _tuple$7[3];
  3�			i = i + (1) >> 0;
    		}
  5�		$unused((31 >= out.$length ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + 31]));
  5�		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 0, 4), x0);
  6		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 4, 8), x1);
  6<		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 8, 12), x2);
  6j		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 12, 16), x3);
  6�		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 16, 20), x12);
  6�		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 20, 24), x13);
  6�		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 24, 28), x14);
  7)		$clone(binary.LittleEndian, binary.littleEndian).PutUint32($subslice(out, 28, 32), x15);
  7Y		return [out, $ifaceNil];
    	};
	hChaCha20encoding/binary.LittleEndianencoding/binary.littleEndian
errors.New-vendor/golang.org/x/crypto/chacha20.hChaCha200vendor/golang.org/x/crypto/chacha20.quarterRound-vendor/golang.org/x/crypto/chacha20.sliceType @(*vendor/golang.org/x/crypto/chacha20.Cipher).xorKeyStreamBlocks �	Cipher.ptr.prototype.xorKeyStreamBlocks = function(dst, src) {
		var dst, s, src;
		s = this;
  8�		s.xorKeyStreamBlocksGeneric(dst, src);
    	};
	Cipher.prototype.xorKeyStreamBlocks = function(dst, src) { return this.$val.xorKeyStreamBlocks(dst, src); };
CipherxorKeyStreamBlocks~*vendor/golang.org/x/crypto/chacha20.Cipher>vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocksGeneric~ *vendor/golang.org/x/crypto/chacha20.addXor#vendor/golang.org/x/crypto/chacha20addXor addXor�
�	addXor = function(dst, src, a, b) {
		var _tmp, _tmp$1, a, b, dst, src, v;
  ;�		$unused((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]));
		$unused((3 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 3]));
    		if (false) {
  <�			v = (((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 0));
  <�			v = (v | (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 0)) << 8 >>> 0))) >>> 0;
  <�			v = (v | (((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) >>> 0)) << 16 >>> 0))) >>> 0;
  =				v = (v | (((((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) >>> 0)) << 24 >>> 0))) >>> 0;
  =%			v = (v ^ ((a + b >>> 0))) >>> 0;
  =2			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = ((v << 24 >>> 24)));
  =E			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = (((v >>> 8 >>> 0) << 24 >>> 24)));
  =]			(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = (((v >>> 16 >>> 0) << 24 >>> 24)));
  =v			(3 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 3] = (((v >>> 24 >>> 0) << 24 >>> 24)));
    		} else {
  =�			a = a + (b) >>> 0;
  =�			(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = (((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) ^ ((a << 24 >>> 24))) << 24 >>> 24));
  =�			(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = (((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) ^ (((a >>> 8 >>> 0) << 24 >>> 24))) << 24 >>> 24));
  =�			(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = (((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) ^ (((a >>> 16 >>> 0) << 24 >>> 24))) << 24 >>> 24));
  =�			(3 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 3] = (((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) ^ (((a >>> 24 >>> 0) << 24 >>> 24))) << 24 >>> 24));
    		}
    	};
addXor*vendor/golang.org/x/crypto/chacha20.addXor �
�{"Base":15905,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/chacha20/chacha_generic.go","Base":1,"Size":14186,"Lines":[0,55,109,159,160,240,300,317,318,327,344,363,373,386,387,426,428,429,437,503,517,518,596,618,622,699,740,756,757,832,859,876,878,879,960,1024,1045,1116,1168,1187,1203,1222,1223,1301,1377,1423,1442,1451,1452,1523,1583,1598,1599,1676,1709,1732,1757,1782,1807,1809,1810,1847,1848,1928,2008,2088,2114,2117,2197,2277,2355,2428,2496,2573,2650,2674,2690,2738,2740,2741,2820,2846,2899,2902,2933,3007,3076,3122,3161,3197,3232,3249,3286,3341,3344,3345,3425,3445,3485,3525,3566,3608,3650,3692,3734,3776,3779,3801,3843,3885,3928,3931,3946,3948,3949,4002,4010,4042,4074,4106,4138,4140,4141,4162,4163,4243,4324,4392,4464,4472,4480,4510,4518,4526,4556,4564,4572,4601,4609,4617,4646,4665,4667,4668,4748,4812,4815,4892,4919,4922,4996,5014,5060,5129,5203,5279,5307,5361,5405,5467,5470,5471,5547,5623,5698,5717,5743,5788,5798,5820,5832,5835,5837,5838,5909,5982,5985,6054,6124,6190,6193,6261,6324,6389,6438,6458,6467,6470,6496,6543,6546,6568,6606,6650,6653,6654,6726,6743,6780,6813,6849,6853,6914,6946,6969,6973,6999,7055,7058,7078,7087,7090,7091,7164,7239,7304,7365,7421,7459,7509,7529,7532,7533,7604,7681,7742,7743,7780,7795,7842,7845,7880,7881,7959,7998,8040,8085,8111,8165,8210,8227,8267,8303,8312,8315,8316,8391,8461,8480,8506,8528,8571,8611,8614,8616,8617,8679,8733,8798,8801,8802,8869,8935,9006,9047,9051,9110,9169,9228,9287,9291,9344,9351,9387,9447,9507,9574,9577,9578,9655,9732,9773,9794,9852,9912,9972,9995,9998,9999,10066,10111,10151,10197,10262,10263,10295,10356,10417,10476,10535,10536,10566,10593,10613,10664,10715,10768,10821,10822,10844,10897,10950,11001,11052,11056,11057,11122,11188,11225,11262,11301,11342,11383,11424,11465,11506,11547,11588,11631,11674,11723,11766,11809,11852,11853,11870,11871,11917,11920,11922,11923,12001,12081,12142,12194,12270,12347,12371,12396,12431,12433,12434,12491,12517,12580,12583,12606,12671,12674,12675,12709,12753,12797,12842,12888,12934,12980,13027,13074,13121,13168,13216,13265,13266,13293,13314,13364,13414,13466,13518,13519,13538,13590,13642,13692,13742,13745,13746,13792,13837,13882,13928,13975,14023,14071,14119,14167,14184],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/chacha20/chacha_noasm.go","Base":14188,"Size":441,"Lines":[0,55,109,159,160,241,299,300,317,318,344,345,400,439],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/chacha20/xor.go","Base":14630,"Size":1274,"Lines":[0,55,109,160,161,178,179,196,197,266,311,341,371,403,430,431,505,562,606,662,678,727,781,833,876,916,938,965,993,1021,1034,1053,1077,1102,1127,1137,1146,1174,1205,1237,1269,1272],"Infos":null}]}
 