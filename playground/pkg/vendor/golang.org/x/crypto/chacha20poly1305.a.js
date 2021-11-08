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
GoLinkname�� Implementation�� 	Reference��   �v���+vendor/golang.org/x/crypto/chacha20poly1305chacha20poly1305crypto/cipherencoding/binaryerrors#vendor/golang.org/x/crypto/chacha20*vendor/golang.org/x/crypto/internal/subtle#vendor/golang.org/x/crypto/poly1305�+i �wkey AEADcrypto/cipher	NonceSizeOpendstnonce
ciphertextadditionalDataOverheadSeal	plaintextchacha20poly1305KeySizeNewNewX
NonceSizeXcipherC @ 
F   $ &  F   7 &  C C 0
     " 'O +O 1O <O Q   K   T 'S +S YS <S U T Wc t |	�'�+
� t! cipher&	cipher = $packages["crypto/cipher"];
��    		$r = cipher.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  chacha20>	chacha20 = $packages["vendor/golang.org/x/crypto/chacha20"];
��    		$r = chacha20.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  subtleC	subtle = $packages["vendor/golang.org/x/crypto/internal/subtle"];
��    		$r = subtle.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  poly1305>	poly1305 = $packages["vendor/golang.org/x/crypto/poly1305"];
��    		$r = poly1305.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  chacha20poly1305�2	chacha20poly1305 = $pkg.chacha20poly1305 = $newType(0, $kindStruct, "chacha20poly1305.chacha20poly1305", true, "vendor/golang.org/x/crypto/chacha20poly1305", false, function(key_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.key = arrayType.zero();
			return;
		}
		this.key = key_;
	});
�q	ptrType.methods = [{prop: "NonceSize", name: "NonceSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Overhead", name: "Overhead", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Seal", name: "Seal", pkg: "", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType, $error], false)}, {prop: "sealGeneric", name: "sealGeneric", pkg: "vendor/golang.org/x/crypto/chacha20poly1305", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType], false)}, {prop: "openGeneric", name: "openGeneric", pkg: "vendor/golang.org/x/crypto/chacha20poly1305", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType, $error], false)}, {prop: "seal", name: "seal", pkg: "vendor/golang.org/x/crypto/chacha20poly1305", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType], false)}, {prop: "open", name: "open", pkg: "vendor/golang.org/x/crypto/chacha20poly1305", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType, $error], false)}];
��	chacha20poly1305.init("vendor/golang.org/x/crypto/chacha20poly1305", [{prop: "key", name: "key", embedded: false, exported: false, typ: arrayType, tag: ""}]);
chacha20poly13055vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13053vendor/golang.org/x/crypto/chacha20poly1305.ptrType5vendor/golang.org/x/crypto/chacha20poly1305.sliceType  xchacha20poly1305�5	xchacha20poly1305 = $pkg.xchacha20poly1305 = $newType(0, $kindStruct, "chacha20poly1305.xchacha20poly1305", true, "vendor/golang.org/x/crypto/chacha20poly1305", false, function(key_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.key = arrayType.zero();
			return;
		}
		this.key = key_;
	});
��	ptrType$1.methods = [{prop: "NonceSize", name: "NonceSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Overhead", name: "Overhead", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Seal", name: "Seal", pkg: "", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([sliceType, sliceType, sliceType, sliceType], [sliceType, $error], false)}];
��	xchacha20poly1305.init("vendor/golang.org/x/crypto/chacha20poly1305", [{prop: "key", name: "key", embedded: false, exported: false, typ: arrayType, tag: ""}]);
xchacha20poly13055vendor/golang.org/x/crypto/chacha20poly1305.arrayType5vendor/golang.org/x/crypto/chacha20poly1305.ptrType$15vendor/golang.org/x/crypto/chacha20poly1305.sliceType=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305  	arrayType%	arrayType = $arrayType($Uint8, 32);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  arrayType$1'	arrayType$1 = $arrayType($Uint8, 16);
arrayType$1  arrayType$2&	arrayType$2 = $arrayType($Uint8, 8);
arrayType$2  ptrType'	ptrType = $ptrType(chacha20poly1305);
ptrType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305  	ptrType$1*	ptrType$1 = $ptrType(xchacha20poly1305);
	ptrType$1=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305  errOpenerrOpen  P  �		errOpen = errors.New("chacha20poly1305: message authentication failed");

errors.New3vendor/golang.org/x/crypto/chacha20poly1305.errOpen /vendor/golang.org/x/crypto/chacha20poly1305.New+vendor/golang.org/x/crypto/chacha20poly1305New New�E	New = function(key) {
		var key, ret;
    		if (!((key.$length === 32))) {
  R			return [$ifaceNil, errors.New("chacha20poly1305: bad key length")];
    		}
  �		ret = new chacha20poly1305.ptr(arrayType.zero());
  �		$copySlice(new sliceType(ret.key), key);
  �		return [ret, $ifaceNil];
    	};
	$pkg.New = New;
New
errors.New/vendor/golang.org/x/crypto/chacha20poly1305.New5vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13055vendor/golang.org/x/crypto/chacha20poly1305.sliceType I(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).NonceSize ��	chacha20poly1305.ptr.prototype.NonceSize = function() {
		var c;
		c = this;
  		return 12;
    	};
	chacha20poly1305.prototype.NonceSize = function() { return this.$val.NonceSize(); };
chacha20poly1305<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305 H(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).Overhead ��	chacha20poly1305.ptr.prototype.Overhead = function() {
		var c;
		c = this;
  H		return 16;
    	};
	chacha20poly1305.prototype.Overhead = function() { return this.$val.Overhead(); };
chacha20poly1305<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305 D(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).Seal ��	chacha20poly1305.ptr.prototype.Seal = function(dst, nonce, plaintext, additionalData) {
		var $24r, _r, additionalData, c, dst, nonce, plaintext, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; additionalData = $f.additionalData; c = $f.c; dst = $f.dst; nonce = $f.nonce; plaintext = $f.plaintext; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if (!((nonce.$length === 12))) {
  �			$panic(new $String("chacha20poly1305: bad nonce length passed to Seal"));
    		}
    		if ((x = (new $Uint64(0, plaintext.$length)), (x.$high > 63 || (x.$high === 63 && x.$low > 4294967232)))) {
  7			$panic(new $String("chacha20poly1305: plaintext too large"));
    		}
  k		_r = c.seal(dst, nonce, plaintext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.Seal }; } $f.$24r = $24r; $f._r = _r; $f.additionalData = additionalData; $f.c = c; $f.dst = dst; $f.nonce = nonce; $f.plaintext = plaintext; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.Seal = function(dst, nonce, plaintext, additionalData) { return this.$val.Seal(dst, nonce, plaintext, additionalData); };
chacha20poly1305<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13051vendor/golang.org/x/crypto/chacha20poly1305.seal~ D(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).Open �	chacha20poly1305.ptr.prototype.Open = function(dst, nonce, ciphertext, additionalData) {
		var $24r, _r, additionalData, c, ciphertext, dst, nonce, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; additionalData = $f.additionalData; c = $f.c; ciphertext = $f.ciphertext; dst = $f.dst; nonce = $f.nonce; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if (!((nonce.$length === 12))) {
  q			$panic(new $String("chacha20poly1305: bad nonce length passed to Open"));
    		}
    		if (ciphertext.$length < 16) {
  �			$s = -1; return [sliceType.nil, errOpen];
    		}
    		if ((x = (new $Uint64(0, ciphertext.$length)), (x.$high > 63 || (x.$high === 63 && x.$low > 4294967248)))) {
  			$panic(new $String("chacha20poly1305: ciphertext too large"));
    		}
  E		_r = c.open(dst, nonce, ciphertext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.Open }; } $f.$24r = $24r; $f._r = _r; $f.additionalData = additionalData; $f.c = c; $f.ciphertext = ciphertext; $f.dst = dst; $f.nonce = nonce; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.Open = function(dst, nonce, ciphertext, additionalData) { return this.$val.Open(dst, nonce, ciphertext, additionalData); };
chacha20poly1305<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13053vendor/golang.org/x/crypto/chacha20poly1305.errOpen1vendor/golang.org/x/crypto/chacha20poly1305.open~5vendor/golang.org/x/crypto/chacha20poly1305.sliceType :vendor/golang.org/x/crypto/chacha20poly1305.sliceForAppend+vendor/golang.org/x/crypto/chacha20poly1305sliceForAppend sliceForAppend��	sliceForAppend = function(in$1, n) {
		var head, in$1, n, tail, total;
		head = sliceType.nil;
		tail = sliceType.nil;
  	�		total = in$1.$length + n >> 0;
    		if (in$1.$capacity >= total) {
  
!			head = $subslice(in$1, 0, total);
    		} else {
  
?			head = $makeSlice(sliceType, total);
  
\			$copySlice(head, in$1);
    		}
  
o		tail = $subslice(head, in$1.$length);
  
�		return [head, tail];
    	};
sliceForAppend:vendor/golang.org/x/crypto/chacha20poly1305.sliceForAppend5vendor/golang.org/x/crypto/chacha20poly1305.sliceType <vendor/golang.org/x/crypto/chacha20poly1305.writeWithPadding+vendor/golang.org/x/crypto/chacha20poly1305writeWithPadding writeWithPadding�i	writeWithPadding = function(p, b) {
		var _r, b, buf, p, padLen, rem;
  		p.Write(b);
  		rem = (_r = b.$length % 16, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
    		if (!((rem === 0))) {
  9			buf = arrayType$1.zero();
  H			padLen = 16 - rem >> 0;
  ]			p.Write($subslice(new sliceType(buf), 0, padLen));
    		}
    	};
writeWithPadding7vendor/golang.org/x/crypto/chacha20poly1305.arrayType$15vendor/golang.org/x/crypto/chacha20poly1305.sliceType<vendor/golang.org/x/crypto/chacha20poly1305.writeWithPadding 7vendor/golang.org/x/crypto/chacha20poly1305.writeUint64+vendor/golang.org/x/crypto/chacha20poly1305writeUint64 writeUint64��	writeUint64 = function(p, n) {
		var buf, n, p;
  �		buf = arrayType$2.zero();
  �		$clone(binary.LittleEndian, binary.littleEndian).PutUint64(new sliceType(buf), (new $Uint64(0, n)));
  �		p.Write(new sliceType(buf));
    	};
writeUint64encoding/binary.LittleEndianencoding/binary.littleEndian7vendor/golang.org/x/crypto/chacha20poly1305.arrayType$25vendor/golang.org/x/crypto/chacha20poly1305.sliceType7vendor/golang.org/x/crypto/chacha20poly1305.writeUint64 K(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).sealGeneric �
�	chacha20poly1305.ptr.prototype.sealGeneric = function(dst, nonce, plaintext, additionalData) {
		var _r, _tmp, _tmp$1, _tuple, _tuple$1, additionalData, c, ciphertext, dst, nonce, out, p, plaintext, polyKey, ret, s, tag, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; additionalData = $f.additionalData; c = $f.c; ciphertext = $f.ciphertext; dst = $f.dst; nonce = $f.nonce; out = $f.out; p = $f.p; plaintext = $f.plaintext; polyKey = $f.polyKey; ret = $f.ret; s = $f.s; tag = $f.tag; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		polyKey = [polyKey];
		c = this;
  Z		_tuple = sliceForAppend(dst, plaintext.$length + 16 >> 0);
		ret = _tuple[0];
		out = _tuple[1];
  �		_tmp = $subslice(out, 0, plaintext.$length);
		_tmp$1 = $subslice(out, plaintext.$length);
		ciphertext = _tmp;
		tag = _tmp$1;
  �		_r = subtle.InexactOverlap(out, plaintext); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_r) { */ case 1:
  			$panic(new $String("chacha20poly1305: invalid buffer overlap"));
    		/* } */ case 2:
  C		polyKey[0] = arrayType.zero();
  U		_tuple$1 = chacha20.NewUnauthenticatedCipher(new sliceType(c.key), nonce);
		s = _tuple$1[0];
  �		$r = s.XORKeyStream(new sliceType(polyKey[0]), new sliceType(polyKey[0])); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		s.SetCounter(1);
  �		$r = s.XORKeyStream(ciphertext, plaintext); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		p = poly1305.New(polyKey[0]);
  :		writeWithPadding(p, additionalData);
  _		writeWithPadding(p, ciphertext);
  �		writeUint64(p, additionalData.$length);
  �		writeUint64(p, plaintext.$length);
  �		p.Sum($subslice(tag, 0, 0));
  �		$s = -1; return ret;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.sealGeneric }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.additionalData = additionalData; $f.c = c; $f.ciphertext = ciphertext; $f.dst = dst; $f.nonce = nonce; $f.out = out; $f.p = p; $f.plaintext = plaintext; $f.polyKey = polyKey; $f.ret = ret; $f.s = s; $f.tag = tag; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.sealGeneric = function(dst, nonce, plaintext, additionalData) { return this.$val.sealGeneric(dst, nonce, plaintext, additionalData); };
chacha20poly1305sealGeneric~	<vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher5vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305:vendor/golang.org/x/crypto/chacha20poly1305.sliceForAppend5vendor/golang.org/x/crypto/chacha20poly1305.sliceType7vendor/golang.org/x/crypto/chacha20poly1305.writeUint64<vendor/golang.org/x/crypto/chacha20poly1305.writeWithPadding9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap'vendor/golang.org/x/crypto/poly1305.New K(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).openGeneric ��	chacha20poly1305.ptr.prototype.openGeneric = function(dst, nonce, ciphertext, additionalData) {
		var _i, _r, _ref, _tuple, _tuple$1, additionalData, c, ciphertext, dst, i, nonce, out, p, polyKey, ret, s, tag, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; additionalData = $f.additionalData; c = $f.c; ciphertext = $f.ciphertext; dst = $f.dst; i = $f.i; nonce = $f.nonce; out = $f.out; p = $f.p; polyKey = $f.polyKey; ret = $f.ret; s = $f.s; tag = $f.tag; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		polyKey = [polyKey];
		c = this;
  M		tag = $subslice(ciphertext, (ciphertext.$length - 16 >> 0));
  u		ciphertext = $subslice(ciphertext, 0, (ciphertext.$length - 16 >> 0));
  �		polyKey[0] = arrayType.zero();
  �		_tuple = chacha20.NewUnauthenticatedCipher(new sliceType(c.key), nonce);
		s = _tuple[0];
  �		$r = s.XORKeyStream(new sliceType(polyKey[0]), new sliceType(polyKey[0])); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		s.SetCounter(1);
  [		p = poly1305.New(polyKey[0]);
  x		writeWithPadding(p, additionalData);
  �		writeWithPadding(p, ciphertext);
  �		writeUint64(p, additionalData.$length);
  �		writeUint64(p, ciphertext.$length);
  		_tuple$1 = sliceForAppend(dst, ciphertext.$length);
		ret = _tuple$1[0];
		out = _tuple$1[1];
  7		_r = subtle.InexactOverlap(out, ciphertext); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (_r) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_r) { */ case 2:
  e			$panic(new $String("chacha20poly1305: invalid buffer overlap"));
    		/* } */ case 3:
    		if (!p.Verify(tag)) {
  �			_ref = out;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
  �				((i < 0 || i >= out.$length) ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + i] = 0);
    				_i++;
			}
  �			$s = -1; return [sliceType.nil, errOpen];
    		}
  �		$r = s.XORKeyStream(out, ciphertext); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.openGeneric }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.additionalData = additionalData; $f.c = c; $f.ciphertext = ciphertext; $f.dst = dst; $f.i = i; $f.nonce = nonce; $f.out = out; $f.p = p; $f.polyKey = polyKey; $f.ret = ret; $f.s = s; $f.tag = tag; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.openGeneric = function(dst, nonce, ciphertext, additionalData) { return this.$val.openGeneric(dst, nonce, ciphertext, additionalData); };
chacha20poly1305openGeneric~
<vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher5vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13053vendor/golang.org/x/crypto/chacha20poly1305.errOpen:vendor/golang.org/x/crypto/chacha20poly1305.sliceForAppend5vendor/golang.org/x/crypto/chacha20poly1305.sliceType7vendor/golang.org/x/crypto/chacha20poly1305.writeUint64<vendor/golang.org/x/crypto/chacha20poly1305.writeWithPadding9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap'vendor/golang.org/x/crypto/poly1305.New D(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).seal �]	chacha20poly1305.ptr.prototype.seal = function(dst, nonce, plaintext, additionalData) {
		var $24r, _r, additionalData, c, dst, nonce, plaintext, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; additionalData = $f.additionalData; c = $f.c; dst = $f.dst; nonce = $f.nonce; plaintext = $f.plaintext; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  y		_r = c.sealGeneric(dst, nonce, plaintext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.seal }; } $f.$24r = $24r; $f._r = _r; $f.additionalData = additionalData; $f.c = c; $f.dst = dst; $f.nonce = nonce; $f.plaintext = plaintext; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.seal = function(dst, nonce, plaintext, additionalData) { return this.$val.seal(dst, nonce, plaintext, additionalData); };
chacha20poly1305seal~<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13058vendor/golang.org/x/crypto/chacha20poly1305.sealGeneric~ D(*vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly1305).open �f	chacha20poly1305.ptr.prototype.open = function(dst, nonce, ciphertext, additionalData) {
		var $24r, _r, additionalData, c, ciphertext, dst, nonce, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; additionalData = $f.additionalData; c = $f.c; ciphertext = $f.ciphertext; dst = $f.dst; nonce = $f.nonce; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  		_r = c.openGeneric(dst, nonce, ciphertext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: chacha20poly1305.ptr.prototype.open }; } $f.$24r = $24r; $f._r = _r; $f.additionalData = additionalData; $f.c = c; $f.ciphertext = ciphertext; $f.dst = dst; $f.nonce = nonce; $f.$s = $s; $f.$r = $r; return $f;
	};
	chacha20poly1305.prototype.open = function(dst, nonce, ciphertext, additionalData) { return this.$val.open(dst, nonce, ciphertext, additionalData); };
chacha20poly1305open~<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13058vendor/golang.org/x/crypto/chacha20poly1305.openGeneric~ 0vendor/golang.org/x/crypto/chacha20poly1305.NewX+vendor/golang.org/x/crypto/chacha20poly1305NewX NewX�I	NewX = function(key) {
		var key, ret;
    		if (!((key.$length === 32))) {
  5			return [$ifaceNil, errors.New("chacha20poly1305: bad key length")];
    		}
  t		ret = new xchacha20poly1305.ptr(arrayType.zero());
  �		$copySlice(new sliceType(ret.key), key);
  �		return [ret, $ifaceNil];
    	};
	$pkg.NewX = NewX;
NewX
errors.New0vendor/golang.org/x/crypto/chacha20poly1305.NewX5vendor/golang.org/x/crypto/chacha20poly1305.arrayType5vendor/golang.org/x/crypto/chacha20poly1305.sliceType=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305 J(*vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305).NonceSize ��	xchacha20poly1305.ptr.prototype.NonceSize = function() {
  �		return 24;
    	};
	xchacha20poly1305.prototype.NonceSize = function() { return this.$val.NonceSize(); };
xchacha20poly1305=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305 I(*vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305).Overhead ��	xchacha20poly1305.ptr.prototype.Overhead = function() {
  +		return 16;
    	};
	xchacha20poly1305.prototype.Overhead = function() { return this.$val.Overhead(); };
xchacha20poly1305=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305 E(*vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305).Seal ��	xchacha20poly1305.ptr.prototype.Seal = function(dst, nonce, plaintext, additionalData) {
		var $24r, _r, _tuple, additionalData, c, cNonce, dst, hKey, nonce, plaintext, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; additionalData = $f.additionalData; c = $f.c; cNonce = $f.cNonce; dst = $f.dst; hKey = $f.hKey; nonce = $f.nonce; plaintext = $f.plaintext; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (!((nonce.$length === 24))) {
  �			$panic(new $String("chacha20poly1305: bad nonce length passed to Seal"));
    		}
    		if ((x$1 = (new $Uint64(0, plaintext.$length)), (x$1.$high > 63 || (x$1.$high === 63 && x$1.$low > 4294967232)))) {
  �			$panic(new $String("chacha20poly1305: plaintext too large"));
    		}
  �		c = new chacha20poly1305.ptr(arrayType.zero());
  �		_tuple = chacha20.HChaCha20(new sliceType(x.key), $subslice(nonce, 0, 16));
		hKey = _tuple[0];
  		$copySlice(new sliceType(c.key), hKey);
  b		cNonce = $makeSlice(sliceType, 12);
  �		$copySlice($subslice(cNonce, 4, 12), $subslice(nonce, 16, 24));
  �		_r = c.seal(dst, cNonce, plaintext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: xchacha20poly1305.ptr.prototype.Seal }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.additionalData = additionalData; $f.c = c; $f.cNonce = cNonce; $f.dst = dst; $f.hKey = hKey; $f.nonce = nonce; $f.plaintext = plaintext; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	xchacha20poly1305.prototype.Seal = function(dst, nonce, plaintext, additionalData) { return this.$val.Seal(dst, nonce, plaintext, additionalData); };
xchacha20poly1305-vendor/golang.org/x/crypto/chacha20.HChaCha205vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13051vendor/golang.org/x/crypto/chacha20poly1305.seal~5vendor/golang.org/x/crypto/chacha20poly1305.sliceType=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305 E(*vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305).Open �	xchacha20poly1305.ptr.prototype.Open = function(dst, nonce, ciphertext, additionalData) {
		var $24r, _r, _tuple, additionalData, c, cNonce, ciphertext, dst, hKey, nonce, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; additionalData = $f.additionalData; c = $f.c; cNonce = $f.cNonce; ciphertext = $f.ciphertext; dst = $f.dst; hKey = $f.hKey; nonce = $f.nonce; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (!((nonce.$length === 24))) {
  g			$panic(new $String("chacha20poly1305: bad nonce length passed to Open"));
    		}
    		if (ciphertext.$length < 16) {
  �			$s = -1; return [sliceType.nil, errOpen];
    		}
    		if ((x$1 = (new $Uint64(0, ciphertext.$length)), (x$1.$high > 63 || (x$1.$high === 63 && x$1.$low > 4294967248)))) {
  			$panic(new $String("chacha20poly1305: ciphertext too large"));
    		}
  ;		c = new chacha20poly1305.ptr(arrayType.zero());
  W		_tuple = chacha20.HChaCha20(new sliceType(x.key), $subslice(nonce, 0, 16));
		hKey = _tuple[0];
  �		$copySlice(new sliceType(c.key), hKey);
  �		cNonce = $makeSlice(sliceType, 12);
  
		$copySlice($subslice(cNonce, 4, 12), $subslice(nonce, 16, 24));
  -		_r = c.open(dst, cNonce, ciphertext, additionalData); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: xchacha20poly1305.ptr.prototype.Open }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.additionalData = additionalData; $f.c = c; $f.cNonce = cNonce; $f.ciphertext = ciphertext; $f.dst = dst; $f.hKey = hKey; $f.nonce = nonce; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	xchacha20poly1305.prototype.Open = function(dst, nonce, ciphertext, additionalData) { return this.$val.Open(dst, nonce, ciphertext, additionalData); };
xchacha20poly1305-vendor/golang.org/x/crypto/chacha20.HChaCha205vendor/golang.org/x/crypto/chacha20poly1305.arrayType<vendor/golang.org/x/crypto/chacha20poly1305.chacha20poly13053vendor/golang.org/x/crypto/chacha20poly1305.errOpen1vendor/golang.org/x/crypto/chacha20poly1305.open~5vendor/golang.org/x/crypto/chacha20poly1305.sliceType=vendor/golang.org/x/crypto/chacha20poly1305.xchacha20poly1305 ��{"Base":8042,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/crypto/chacha20poly1305/chacha20poly1305.go","Base":1,"Size":2702,"Lines":[0,55,109,159,160,234,309,340,414,415,424,441,451,453,454,462,526,540,541,619,639,643,720,761,777,778,851,887,904,906,907,938,957,959,960,1033,1077,1103,1164,1167,1197,1220,1237,1239,1240,1285,1303,1305,1306,1350,1361,1363,1364,1451,1481,1542,1545,1546,1588,1637,1640,1641,1695,1697,1698,1774,1775,1872,1902,1963,1966,1993,2015,2018,2061,2111,2114,2115,2170,2172,2173,2251,2331,2410,2485,2545,2590,2610,2620,2649,2666,2669,2692,2700],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/crypto/chacha20poly1305/chacha20poly1305_generic.go","Base":2704,"Size":2198,"Lines":[0,55,109,159,160,185,186,195,214,215,247,286,318,320,321,372,384,419,438,459,483,486,488,489,532,549,599,616,618,619,713,779,842,886,938,941,942,964,1024,1064,1124,1163,1164,1193,1230,1263,1300,1332,1348,1349,1361,1363,1364,1468,1508,1554,1555,1577,1637,1677,1737,1738,1767,1804,1837,1874,1907,1908,1958,2003,2055,2058,2079,2102,2116,2120,2142,2145,2146,2179,2196],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/crypto/chacha20poly1305/chacha20poly1305_noasm.go","Base":4903,"Size":562,"Lines":[0,55,109,159,160,195,223,224,249,250,337,398,400,401,498,560],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/crypto/chacha20poly1305/xchacha20poly1305.go","Base":5466,"Size":2575,"Lines":[0,55,109,159,160,185,186,195,212,222,223,255,257,258,290,309,311,312,387,390,470,548,624,658,703,729,790,793,824,847,864,866,867,911,930,932,933,976,987,989,990,1078,1109,1170,1173,1174,1251,1329,1405,1483,1532,1574,1623,1626,1627,1655,1709,1731,1732,1799,1834,1868,1869,1927,1929,1930,2028,2059,2120,2123,2150,2172,2175,2218,2268,2271,2272,2300,2354,2376,2377,2444,2479,2513,2514,2573],"Infos":null}]}
 