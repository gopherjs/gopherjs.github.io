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
GoLinkname�� Implementation�� 	Reference��   ��X��crypto/sha512sha512cryptoencoding/binaryerrorshash	math/bits��i �� Hashhashdatasum384sum224sum256Writerio	BlockSizeResetSizeSumbWritepnerrsha512NewNew384
New512_224
New512_256Size224Size256Size384Sum384Sum512
Sum512_224
Sum512_256C �� F    %F    %F    %F    %C �@C 8C @C `0F  U W @F  e  g F  u w  F  � �  %, � /    9   ?    D H�  � T �,  J P� R T T � X / _cju?$�)�-�1�:�J�Z�j �,, %�( crypto	crypto = $packages["crypto"];
��    		$r = crypto.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  digest��	digest = $pkg.digest = $newType(0, $kindStruct, "sha512.digest", true, "crypto/sha512", false, function(h_, x_, nx_, len_, function$4_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.h = arrayType$1.zero();
			this.x = arrayType$2.zero();
			this.nx = 0;
			this.len = new $Uint64(0, 0);
			this.function$4 = 0;
			return;
		}
		this.h = h_;
		this.x = x_;
		this.nx = nx_;
		this.len = len_;
		this.function$4 = function$4_;
	});
��	ptrType.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType$1, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType$1], [$error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType$1], [sliceType$1], false)}, {prop: "checkSum", name: "checkSum", pkg: "crypto/sha512", typ: $funcType([], [arrayType$3], false)}];
��	digest.init("crypto/sha512", [{prop: "h", name: "h", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "x", name: "x", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "nx", name: "nx", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "function$4", name: "function", embedded: false, exported: false, typ: crypto.Hash, tag: ""}]);
digestcrypto.Hashcrypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.digestcrypto/sha512.ptrTypecrypto/sha512.sliceType$1  	sliceType"	sliceType = $sliceType($Uint64);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  	arrayType$	arrayType = $arrayType($Uint8, 8);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint64, 8);
arrayType$1  arrayType$2(	arrayType$2 = $arrayType($Uint8, 128);
arrayType$2  arrayType$3'	arrayType$3 = $arrayType($Uint8, 64);
arrayType$3  arrayType$4'	arrayType$4 = $arrayType($Uint8, 48);
arrayType$4  arrayType$5'	arrayType$5 = $arrayType($Uint8, 28);
arrayType$5  arrayType$6'	arrayType$6 = $arrayType($Uint8, 32);
arrayType$6  arrayType$7(	arrayType$7 = $arrayType($Uint64, 80);
arrayType$7  ptrType	ptrType = $ptrType(digest);
ptrTypecrypto/sha512.digest  _K_K  ��  $�		_K = new sliceType([new $Uint64(1116352408, 3609767458), new $Uint64(1899447441, 602891725), new $Uint64(3049323471, 3964484399), new $Uint64(3921009573, 2173295548), new $Uint64(961987163, 4081628472), new $Uint64(1508970993, 3053834265), new $Uint64(2453635748, 2937671579), new $Uint64(2870763221, 3664609560), new $Uint64(3624381080, 2734883394), new $Uint64(310598401, 1164996542), new $Uint64(607225278, 1323610764), new $Uint64(1426881987, 3590304994), new $Uint64(1925078388, 4068182383), new $Uint64(2162078206, 991336113), new $Uint64(2614888103, 633803317), new $Uint64(3248222580, 3479774868), new $Uint64(3835390401, 2666613458), new $Uint64(4022224774, 944711139), new $Uint64(264347078, 2341262773), new $Uint64(604807628, 2007800933), new $Uint64(770255983, 1495990901), new $Uint64(1249150122, 1856431235), new $Uint64(1555081692, 3175218132), new $Uint64(1996064986, 2198950837), new $Uint64(2554220882, 3999719339), new $Uint64(2821834349, 766784016), new $Uint64(2952996808, 2566594879), new $Uint64(3210313671, 3203337956), new $Uint64(3336571891, 1034457026), new $Uint64(3584528711, 2466948901), new $Uint64(113926993, 3758326383), new $Uint64(338241895, 168717936), new $Uint64(666307205, 1188179964), new $Uint64(773529912, 1546045734), new $Uint64(1294757372, 1522805485), new $Uint64(1396182291, 2643833823), new $Uint64(1695183700, 2343527390), new $Uint64(1986661051, 1014477480), new $Uint64(2177026350, 1206759142), new $Uint64(2456956037, 344077627), new $Uint64(2730485921, 1290863460), new $Uint64(2820302411, 3158454273), new $Uint64(3259730800, 3505952657), new $Uint64(3345764771, 106217008), new $Uint64(3516065817, 3606008344), new $Uint64(3600352804, 1432725776), new $Uint64(4094571909, 1467031594), new $Uint64(275423344, 851169720), new $Uint64(430227734, 3100823752), new $Uint64(506948616, 1363258195), new $Uint64(659060556, 3750685593), new $Uint64(883997877, 3785050280), new $Uint64(958139571, 3318307427), new $Uint64(1322822218, 3812723403), new $Uint64(1537002063, 2003034995), new $Uint64(1747873779, 3602036899), new $Uint64(1955562222, 1575990012), new $Uint64(2024104815, 1125592928), new $Uint64(2227730452, 2716904306), new $Uint64(2361852424, 442776044), new $Uint64(2428436474, 593698344), new $Uint64(2756734187, 3733110249), new $Uint64(3204031479, 2999351573), new $Uint64(3329325298, 3815920427), new $Uint64(3391569614, 3928383900), new $Uint64(3515267271, 566280711), new $Uint64(3940187606, 3454069534), new $Uint64(4118630271, 4000239992), new $Uint64(116418474, 1914138554), new $Uint64(174292421, 2731055270), new $Uint64(289380356, 3203993006), new $Uint64(460393269, 320620315), new $Uint64(685471733, 587496836), new $Uint64(852142971, 1086792851), new $Uint64(1017036298, 365543100), new $Uint64(1126000580, 2618297676), new $Uint64(1288033470, 3409855158), new $Uint64(1501505948, 4234509866), new $Uint64(1607167915, 987167468), new $Uint64(1816402316, 1246189591)]);
_Kcrypto/sha512._Kcrypto/sha512.sliceType crypto/sha512.initcrypto/sha512init init��	init = function() {
  ?		crypto.RegisterHash(6, New384);
  k		crypto.RegisterHash(7, New);
  �		crypto.RegisterHash(14, New512_224);
  �		crypto.RegisterHash(15, New512_256);
    	};
    		init();
crypto.RegisterHashcrypto/sha512.Newcrypto/sha512.New384crypto/sha512.New512_224crypto/sha512.New512_256crypto/sha512.init (*crypto/sha512.digest).Reset � 	digest.ptr.prototype.Reset = function() {
		var _1, d;
		d = this;
    		_1 = d.function$4;
    		if (_1 === (6)) {
  	�			d.h[0] = new $Uint64(3418070365, 3238371032);
  	�			d.h[1] = new $Uint64(1654270250, 914150663);
  	�			d.h[2] = new $Uint64(2438529370, 812702999);
  
			d.h[3] = new $Uint64(355462360, 4144912697);
  
			d.h[4] = new $Uint64(1731405415, 4290775857);
  
2			d.h[5] = new $Uint64(2394180231, 1750603025);
  
G			d.h[6] = new $Uint64(3675008525, 1694076839);
  
\			d.h[7] = new $Uint64(1203062813, 3204075428);
    		} else if (_1 === (14)) {
  
�			d.h[0] = new $Uint64(2352822216, 424955298);
  
�			d.h[1] = new $Uint64(1944164710, 2312950998);
  
�			d.h[2] = new $Uint64(502970286, 855612546);
  
�			d.h[3] = new $Uint64(1738396948, 1479516111);
  
�			d.h[4] = new $Uint64(258812777, 2077511080);
  
�			d.h[5] = new $Uint64(2011393907, 79989058);
  			d.h[6] = new $Uint64(1067287976, 1780299464);
  			d.h[7] = new $Uint64(286451373, 2446758561);
    		} else if (_1 === (15)) {
  K			d.h[0] = new $Uint64(573645204, 4230739756);
  `			d.h[1] = new $Uint64(2673172387, 3360449730);
  u			d.h[2] = new $Uint64(596883563, 1867755857);
  �			d.h[3] = new $Uint64(2520282905, 1497426621);
  �			d.h[4] = new $Uint64(2519219938, 2827943907);
  �			d.h[5] = new $Uint64(3193839141, 1401305490);
  �			d.h[6] = new $Uint64(721525244, 746961066);
  �			d.h[7] = new $Uint64(246885852, 2177182882);
    		} else {
  �			d.h[0] = new $Uint64(1779033703, 4089235720);
  			d.h[1] = new $Uint64(3144134277, 2227873595);
  			d.h[2] = new $Uint64(1013904242, 4271175723);
  0			d.h[3] = new $Uint64(2773480762, 1595750129);
  A			d.h[4] = new $Uint64(1359893119, 2917565137);
  R			d.h[5] = new $Uint64(2600822924, 725511199);
  c			d.h[6] = new $Uint64(528734635, 4215389547);
  t			d.h[7] = new $Uint64(1541459225, 327033209);
    		}
  �		d.nx = 0;
  �		d.len = new $Uint64(0, 0);
    	};
	digest.prototype.Reset = function() { return this.$val.Reset(); };
digestcrypto/sha512.digest %(*crypto/sha512.digest).MarshalBinary �g	digest.ptr.prototype.MarshalBinary = function() {
		var _1, b, d;
		d = this;
  z		b = $makeSlice(sliceType$1, 0, 204);
    		_1 = d.function$4;
    		if (_1 === (6)) {
  �			b = $appendSlice(b, "sha\x04");
    		} else if (_1 === (14)) {
   			b = $appendSlice(b, "sha\x05");
    		} else if (_1 === (15)) {
  :			b = $appendSlice(b, "sha\x06");
    		} else if (_1 === (7)) {
  p			b = $appendSlice(b, "sha\x07");
    		} else {
  �			return [sliceType$1.nil, errors.New("crypto/sha512: invalid hash function")];
    		}
  �		b = appendUint64(b, d.h[0]);
  �		b = appendUint64(b, d.h[1]);
  		b = appendUint64(b, d.h[2]);
  1		b = appendUint64(b, d.h[3]);
  N		b = appendUint64(b, d.h[4]);
  k		b = appendUint64(b, d.h[5]);
  �		b = appendUint64(b, d.h[6]);
  �		b = appendUint64(b, d.h[7]);
  �		b = $appendSlice(b, $subslice(new sliceType$1(d.x), 0, d.nx));
  �		b = $subslice(b, 0, ((b.$length + 128 >> 0) - (d.nx) >> 0));
  		b = appendUint64(b, d.len);
  /		return [b, $ifaceNil];
    	};
	digest.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
digestcrypto/sha512.appendUint64crypto/sha512.digestcrypto/sha512.sliceType$1
errors.New '(*crypto/sha512.digest).UnmarshalBinary �D	digest.ptr.prototype.UnmarshalBinary = function(b) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, b, d;
		d = this;
    		if (b.$length < 4) {
  �			return errors.New("crypto/sha512: invalid hash state identifier");
    		}
    		if ((d.function$4 === 6) && ($bytesToString($subslice(b, 0, 4))) === "sha\x04") {
    		} else if ((d.function$4 === 14) && ($bytesToString($subslice(b, 0, 4))) === "sha\x05") {
    		} else if ((d.function$4 === 15) && ($bytesToString($subslice(b, 0, 4))) === "sha\x06") {
    		} else if ((d.function$4 === 7) && ($bytesToString($subslice(b, 0, 4))) === "sha\x07") {
    		} else {
  5			return errors.New("crypto/sha512: invalid hash state identifier");
    		}
    		if (!((b.$length === 204))) {
  �			return errors.New("crypto/sha512: invalid hash state size");
    		}
  �		b = $subslice(b, 4);
  �		_tuple = consumeUint64(b);
		b = _tuple[0];
		d.h[0] = _tuple[1];
  		_tuple$1 = consumeUint64(b);
		b = _tuple$1[0];
		d.h[1] = _tuple$1[1];
  -		_tuple$2 = consumeUint64(b);
		b = _tuple$2[0];
		d.h[2] = _tuple$2[1];
  K		_tuple$3 = consumeUint64(b);
		b = _tuple$3[0];
		d.h[3] = _tuple$3[1];
  i		_tuple$4 = consumeUint64(b);
		b = _tuple$4[0];
		d.h[4] = _tuple$4[1];
  �		_tuple$5 = consumeUint64(b);
		b = _tuple$5[0];
		d.h[5] = _tuple$5[1];
  �		_tuple$6 = consumeUint64(b);
		b = _tuple$6[0];
		d.h[6] = _tuple$6[1];
  �		_tuple$7 = consumeUint64(b);
		b = _tuple$7[0];
		d.h[7] = _tuple$7[1];
  �		b = $subslice(b, $copySlice(new sliceType$1(d.x), b));
  �		_tuple$8 = consumeUint64(b);
		b = _tuple$8[0];
		d.len = _tuple$8[1];
  		d.nx = (($div64(d.len, new $Uint64(0, 128), true).$low >> 0));
  2		return $ifaceNil;
    	};
	digest.prototype.UnmarshalBinary = function(b) { return this.$val.UnmarshalBinary(b); };
digestcrypto/sha512.consumeUint64crypto/sha512.digestcrypto/sha512.sliceType$1
errors.New crypto/sha512.appendUint64crypto/sha512appendUint64 appendUint64��	appendUint64 = function(b, x) {
		var a, b, x;
  t		a = arrayType.zero();
  		$clone(binary.BigEndian, binary.bigEndian).PutUint64(new sliceType$1(a), x);
  �		return $appendSlice(b, new sliceType$1(a));
    	};
appendUint64crypto/sha512.appendUint64crypto/sha512.arrayTypecrypto/sha512.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/sha512.consumeUint64crypto/sha512consumeUint64 consumeUint64��	consumeUint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  �		x$14 = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
  �		return [$subslice(b, 8), x$14];
    	};
consumeUint64crypto/sha512.consumeUint64 crypto/sha512.Newcrypto/sha512New New��	New = function() {
		var d;
  �		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 7);
  &		d.Reset();
  1		return d;
    	};
	$pkg.New = New;
Newcrypto/sha512.Newcrypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.digest crypto/sha512.New512_224crypto/sha512
New512_224 
New512_224��	New512_224 = function() {
		var d;
  �		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 14);
  �		d.Reset();
  �		return d;
    	};
	$pkg.New512_224 = New512_224;

New512_224crypto/sha512.New512_224crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.digest crypto/sha512.New512_256crypto/sha512
New512_256 
New512_256��	New512_256 = function() {
		var d;
  Q		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 15);
  |		d.Reset();
  �		return d;
    	};
	$pkg.New512_256 = New512_256;

New512_256crypto/sha512.New512_256crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.digest crypto/sha512.New384crypto/sha512New384 New384��	New384 = function() {
		var d;
  �		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 6);
  		d.Reset();
  "		return d;
    	};
	$pkg.New384 = New384;
New384crypto/sha512.New384crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.digest (*crypto/sha512.digest).Size �h	digest.ptr.prototype.Size = function() {
		var _1, d;
		d = this;
    		_1 = d.function$4;
    		if (_1 === (14)) {
  |			return 28;
    		} else if (_1 === (15)) {
  �			return 32;
    		} else if (_1 === (6)) {
  �			return 48;
    		} else {
  �			return 64;
    		}
    	};
	digest.prototype.Size = function() { return this.$val.Size(); };
digestcrypto/sha512.digest !(*crypto/sha512.digest).BlockSize ��	digest.ptr.prototype.BlockSize = function() {
		var d;
		d = this;
  		return 128;
    	};
	digest.prototype.BlockSize = function() { return this.$val.BlockSize(); };
digestcrypto/sha512.digest (*crypto/sha512.digest).Write �V	digest.ptr.prototype.Write = function(p) {
		var d, err, n, n$1, nn, p, x, x$1;
		nn = 0;
		err = $ifaceNil;
		d = this;
  h		nn = p.$length;
  u		d.len = (x = d.len, x$1 = (new $Uint64(0, nn)), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
    		if (d.nx > 0) {
  �			n = $copySlice($subslice(new sliceType$1(d.x), d.nx), p);
  �			d.nx = d.nx + (n) >> 0;
    			if (d.nx === 128) {
  �				block(d, new sliceType$1(d.x));
  �				d.nx = 0;
    			}
  �			p = $subslice(p, n);
    		}
    		if (p.$length >= 128) {
  			n$1 = (p.$length & ~127) >> 0;
  <			block(d, $subslice(p, 0, n$1));
  N			p = $subslice(p, n$1);
    		}
    		if (p.$length > 0) {
  n			d.nx = $copySlice(new sliceType$1(d.x), p);
    		}
  �		return [nn, err];
    	};
	digest.prototype.Write = function(p) { return this.$val.Write(p); };
digestcrypto/sha512.blockcrypto/sha512.digestcrypto/sha512.sliceType$1 (*crypto/sha512.digest).Sum �
	digest.ptr.prototype.Sum = function(in$1) {
		var _1, d, d0, hash$1, in$1;
		d = this;
  �		d0 = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 0);
  		digest.copy(d0, d);
  		hash$1 = $clone(d0.checkSum(), arrayType$3);
    		_1 = d0.function$4;
    		if (_1 === (6)) {
  _			return $appendSlice(in$1, $subslice(new sliceType$1(hash$1), 0, 48));
    		} else if (_1 === (14)) {
  �			return $appendSlice(in$1, $subslice(new sliceType$1(hash$1), 0, 28));
    		} else if (_1 === (15)) {
  �			return $appendSlice(in$1, $subslice(new sliceType$1(hash$1), 0, 32));
    		} else {
  			return $appendSlice(in$1, new sliceType$1(hash$1));
    		}
    	};
	digest.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
digestcrypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512.sliceType$1  (*crypto/sha512.digest).checkSum �.	digest.ptr.prototype.checkSum = function() {
		var d, digest$1, len, tmp, x, x$1, x$2;
		d = this;
  �		len = d.len;
  �		tmp = arrayType$2.zero();
  �		tmp[0] = 128;
    		if ((x = $div64(len, new $Uint64(0, 128), true), (x.$high < 0 || (x.$high === 0 && x.$low < 112)))) {
  �			d.Write($subslice(new sliceType$1(tmp), 0, $flatten64((x$1 = $div64(len, new $Uint64(0, 128), true), new $Uint64(0 - x$1.$high, 112 - x$1.$low)))));
    		} else {
  
			d.Write($subslice(new sliceType$1(tmp), 0, $flatten64((x$2 = $div64(len, new $Uint64(0, 128), true), new $Uint64(0 - x$2.$high, 240 - x$2.$low)))));
    		}
  E		len = $shiftLeft64(len, (3));
  P		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(tmp), 0), new $Uint64(0, 0));
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(tmp), 8), len);
  �		d.Write($subslice(new sliceType$1(tmp), 0, 16));
    		if (!((d.nx === 0))) {
  			$panic(new $String("d.nx != 0"));
    		}
  +		digest$1 = arrayType$3.zero();
  >		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 0), d.h[0]);
  n		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 8), d.h[1]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 16), d.h[2]);
  �		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 24), d.h[3]);
   		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 32), d.h[4]);
  1		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 40), d.h[5]);
    		if (!((d.function$4 === 6))) {
  �			$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 48), d.h[6]);
  �			$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(digest$1), 56), d.h[7]);
    		}
  �		return digest$1;
    	};
	digest.prototype.checkSum = function() { return this.$val.checkSum(); };
digest	checkSum~crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.digestcrypto/sha512.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/sha512.Sum512crypto/sha512Sum512 Sum512��	Sum512 = function(data) {
		var d, data;
   W		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 7);
   }		d.Reset();
   �		d.Write(data);
   �		return d.checkSum();
    	};
	$pkg.Sum512 = Sum512;
Sum512crypto/sha512.Sum512crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.checkSum~crypto/sha512.digest crypto/sha512.Sum384crypto/sha512Sum384 Sum384��	Sum384 = function(data) {
		var d, data, sum, sum384;
		sum384 = arrayType$4.zero();
  !		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 6);
  !:		d.Reset();
  !E		d.Write(data);
  !T		sum = $clone(d.checkSum(), arrayType$3);
  !i		$copySlice(new sliceType$1(sum384), $subslice(new sliceType$1(sum), 0, 48));
  !�		return sum384;
    	};
	$pkg.Sum384 = Sum384;
Sum384crypto/sha512.Sum384crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.arrayType$4crypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512.sliceType$1 crypto/sha512.Sum512_224crypto/sha512
Sum512_224 
Sum512_224��	Sum512_224 = function(data) {
		var d, data, sum, sum224;
		sum224 = arrayType$5.zero();
  "		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 14);
  "/		d.Reset();
  ":		d.Write(data);
  "I		sum = $clone(d.checkSum(), arrayType$3);
  "^		$copySlice(new sliceType$1(sum224), $subslice(new sliceType$1(sum), 0, 28));
  "~		return sum224;
    	};
	$pkg.Sum512_224 = Sum512_224;

Sum512_224crypto/sha512.Sum512_224crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.arrayType$5crypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512.sliceType$1 crypto/sha512.Sum512_256crypto/sha512
Sum512_256 
Sum512_256��	Sum512_256 = function(data) {
		var d, data, sum, sum256;
		sum256 = arrayType$6.zero();
  "�		d = new digest.ptr(arrayType$1.zero(), arrayType$2.zero(), 0, new $Uint64(0, 0), 15);
  #$		d.Reset();
  #/		d.Write(data);
  #>		sum = $clone(d.checkSum(), arrayType$3);
  #S		$copySlice(new sliceType$1(sum256), $subslice(new sliceType$1(sum), 0, 32));
  #s		return sum256;
    	};
	$pkg.Sum512_256 = Sum512_256;

Sum512_256crypto/sha512.Sum512_256crypto/sha512.arrayType$1crypto/sha512.arrayType$2crypto/sha512.arrayType$3crypto/sha512.arrayType$6crypto/sha512.checkSum~crypto/sha512.digestcrypto/sha512.sliceType$1 crypto/sha512.blockGenericcrypto/sha512blockGeneric blockGeneric��	blockGeneric = function(dig, p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, a, b, c, d, dig, e, f, g, h, h0, h1, h2, h3, h4, h5, h6, h7, i, i$1, i$2, j, p, t1, t1$1, t2, t2$1, v1, v2, w, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$5, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$6, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$7, x$8, x$9;
  +�		w = arrayType$7.zero();
  +�		_tmp = dig.h[0];
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
  ,		while (true) {
			if (!(p.$length >= 128)) { break; }
  ,"			i = 0;
			while (true) {
				if (!(i < 16)) { break; }
  ,;				j = $imul(i, 8);
  ,I				((i < 0 || i >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i] = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = $shiftLeft64((new $Uint64(0, ((j < 0 || j >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + j]))), 56), x$7 = $shiftLeft64((new $Uint64(0, (x$8 = j + 1 >> 0, ((x$8 < 0 || x$8 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$8])))), 48), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (x$10 = j + 2 >> 0, ((x$10 < 0 || x$10 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$10])))), 40), new $Uint64(x$5.$high | x$9.$high, (x$5.$low | x$9.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (x$12 = j + 3 >> 0, ((x$12 < 0 || x$12 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$12])))), 32), new $Uint64(x$4.$high | x$11.$high, (x$4.$low | x$11.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (x$14 = j + 4 >> 0, ((x$14 < 0 || x$14 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$14])))), 24), new $Uint64(x$3.$high | x$13.$high, (x$3.$low | x$13.$low) >>> 0)), x$15 = $shiftLeft64((new $Uint64(0, (x$16 = j + 5 >> 0, ((x$16 < 0 || x$16 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$16])))), 16), new $Uint64(x$2.$high | x$15.$high, (x$2.$low | x$15.$low) >>> 0)), x$17 = $shiftLeft64((new $Uint64(0, (x$18 = j + 6 >> 0, ((x$18 < 0 || x$18 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$18])))), 8), new $Uint64(x$1.$high | x$17.$high, (x$1.$low | x$17.$low) >>> 0)), x$19 = (new $Uint64(0, (x$20 = j + 7 >> 0, ((x$20 < 0 || x$20 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$20])))), new $Uint64(x.$high | x$19.$high, (x.$low | x$19.$low) >>> 0)));
  ,2				i = i + (1) >> 0;
    			}
  ,�			i$1 = 16;
			while (true) {
				if (!(i$1 < 80)) { break; }
  -				v1 = (x$21 = i$1 - 2 >> 0, ((x$21 < 0 || x$21 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$21]));
  -'				t1 = (x$22 = (x$23 = bits.RotateLeft64(v1, -19), x$24 = bits.RotateLeft64(v1, -61), new $Uint64(x$23.$high ^ x$24.$high, (x$23.$low ^ x$24.$low) >>> 0)), x$25 = $shiftRightUint64(v1, 6), new $Uint64(x$22.$high ^ x$25.$high, (x$22.$low ^ x$25.$low) >>> 0));
  -t				v2 = (x$26 = i$1 - 15 >> 0, ((x$26 < 0 || x$26 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$26]));
  -�				t2 = (x$27 = (x$28 = bits.RotateLeft64(v2, -1), x$29 = bits.RotateLeft64(v2, -8), new $Uint64(x$28.$high ^ x$29.$high, (x$28.$low ^ x$29.$low) >>> 0)), x$30 = $shiftRightUint64(v2, 7), new $Uint64(x$27.$high ^ x$30.$high, (x$27.$low ^ x$30.$low) >>> 0));
  -�				((i$1 < 0 || i$1 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i$1] = (x$31 = (x$32 = (x$33 = (x$34 = i$1 - 7 >> 0, ((x$34 < 0 || x$34 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$34])), new $Uint64(t1.$high + x$33.$high, t1.$low + x$33.$low)), new $Uint64(x$32.$high + t2.$high, x$32.$low + t2.$low)), x$35 = (x$36 = i$1 - 16 >> 0, ((x$36 < 0 || x$36 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[x$36])), new $Uint64(x$31.$high + x$35.$high, x$31.$low + x$35.$low)));
  -				i$1 = i$1 + (1) >> 0;
    			}
  -�			_tmp$8 = h0;
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
  .:			i$2 = 0;
			while (true) {
				if (!(i$2 < 80)) { break; }
  .S				t1$1 = (x$37 = (x$38 = (x$39 = (x$40 = (x$41 = (x$42 = bits.RotateLeft64(e, -14), x$43 = bits.RotateLeft64(e, -18), new $Uint64(x$42.$high ^ x$43.$high, (x$42.$low ^ x$43.$low) >>> 0)), x$44 = bits.RotateLeft64(e, -41), new $Uint64(x$41.$high ^ x$44.$high, (x$41.$low ^ x$44.$low) >>> 0)), new $Uint64(h.$high + x$40.$high, h.$low + x$40.$low)), x$45 = (x$46 = new $Uint64(e.$high & f.$high, (e.$low & f.$low) >>> 0), x$47 = (x$48 = new $Uint64(~e.$high, ~e.$low >>> 0), new $Uint64(x$48.$high & g.$high, (x$48.$low & g.$low) >>> 0)), new $Uint64(x$46.$high ^ x$47.$high, (x$46.$low ^ x$47.$low) >>> 0)), new $Uint64(x$39.$high + x$45.$high, x$39.$low + x$45.$low)), x$49 = ((i$2 < 0 || i$2 >= _K.$length) ? ($throwRuntimeError("index out of range"), undefined) : _K.$array[_K.$offset + i$2]), new $Uint64(x$38.$high + x$49.$high, x$38.$low + x$49.$low)), x$50 = ((i$2 < 0 || i$2 >= w.length) ? ($throwRuntimeError("index out of range"), undefined) : w[i$2]), new $Uint64(x$37.$high + x$50.$high, x$37.$low + x$50.$low));
  .�				t2$1 = (x$51 = (x$52 = (x$53 = bits.RotateLeft64(a, -28), x$54 = bits.RotateLeft64(a, -34), new $Uint64(x$53.$high ^ x$54.$high, (x$53.$low ^ x$54.$low) >>> 0)), x$55 = bits.RotateLeft64(a, -39), new $Uint64(x$52.$high ^ x$55.$high, (x$52.$low ^ x$55.$low) >>> 0)), x$56 = (x$57 = (x$58 = new $Uint64(a.$high & b.$high, (a.$low & b.$low) >>> 0), x$59 = new $Uint64(a.$high & c.$high, (a.$low & c.$low) >>> 0), new $Uint64(x$58.$high ^ x$59.$high, (x$58.$low ^ x$59.$low) >>> 0)), x$60 = new $Uint64(b.$high & c.$high, (b.$low & c.$low) >>> 0), new $Uint64(x$57.$high ^ x$60.$high, (x$57.$low ^ x$60.$low) >>> 0)), new $Uint64(x$51.$high + x$56.$high, x$51.$low + x$56.$low));
  /Y				h = g;
  /b				g = f;
  /k				f = e;
  /t				e = new $Uint64(d.$high + t1$1.$high, d.$low + t1$1.$low);
  /�				d = c;
  /�				c = b;
  /�				b = a;
  /�				a = new $Uint64(t1$1.$high + t2$1.$high, t1$1.$low + t2$1.$low);
  .J				i$2 = i$2 + (1) >> 0;
    			}
  /�			h0 = (x$61 = a, new $Uint64(h0.$high + x$61.$high, h0.$low + x$61.$low));
  /�			h1 = (x$62 = b, new $Uint64(h1.$high + x$62.$high, h1.$low + x$62.$low));
  /�			h2 = (x$63 = c, new $Uint64(h2.$high + x$63.$high, h2.$low + x$63.$low));
  /�			h3 = (x$64 = d, new $Uint64(h3.$high + x$64.$high, h3.$low + x$64.$low));
  /�			h4 = (x$65 = e, new $Uint64(h4.$high + x$65.$high, h4.$low + x$65.$low));
  /�			h5 = (x$66 = f, new $Uint64(h5.$high + x$66.$high, h5.$low + x$66.$low));
  /�			h6 = (x$67 = g, new $Uint64(h6.$high + x$67.$high, h6.$low + x$67.$low));
  /�			h7 = (x$68 = h, new $Uint64(h7.$high + x$68.$high, h7.$low + x$68.$low));
  0			p = $subslice(p, 128);
    		}
  0		_tmp$16 = h0;
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
blockGenericcrypto/sha512._Kcrypto/sha512.arrayType$7crypto/sha512.blockGenericmath/bits.RotateLeft64 crypto/sha512.blockcrypto/sha512block blockP	block = function(dig, p) {
		var dig, p;
  1�		blockGeneric(dig, p);
    	};
blockcrypto/sha512.blockcrypto/sha512.blockGeneric �z{"Base":12734,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha512/sha512.go","Base":1,"Size":9083,"Lines":[0,55,109,159,160,240,285,288,355,427,484,499,500,509,519,538,548,556,558,559,573,617,658,710,762,764,765,773,828,839,840,902,916,917,979,993,994,1052,1066,1067,1130,1183,1200,1202,1203,1211,1228,1260,1292,1324,1356,1388,1420,1452,1484,1516,1548,1580,1612,1644,1676,1708,1740,1772,1804,1836,1868,1900,1932,1964,1996,2028,2060,2092,2124,2156,2188,2220,2252,2254,2255,2314,2335,2355,2377,2391,2408,2430,2432,2433,2460,2481,2502,2523,2544,2565,2586,2607,2628,2649,2670,2695,2716,2737,2758,2779,2800,2821,2842,2863,2888,2909,2930,2951,2972,2993,3014,3035,3056,3066,3083,3100,3117,3134,3151,3168,3185,3202,3205,3215,3226,3228,3229,3237,3264,3291,3318,3345,3394,3396,3397,3448,3485,3506,3527,3556,3581,3614,3639,3672,3693,3722,3732,3797,3800,3829,3858,3887,3916,3945,3974,4003,4032,4062,4113,4141,4156,4158,4159,4210,4239,4307,4310,4320,4396,4484,4572,4648,4658,4726,4729,4759,4821,4824,4847,4877,4907,4937,4967,4997,5027,5057,5087,5112,5141,5168,5180,5182,5183,5230,5245,5282,5309,5311,5312,5360,5370,5447,5523,5540,5542,5543,5606,5629,5668,5679,5689,5691,5692,5766,5796,5839,5850,5860,5862,5863,5937,5967,6010,6021,6031,6033,6034,6100,6126,6165,6176,6186,6188,6189,6219,6240,6265,6282,6307,6324,6345,6362,6372,6386,6389,6391,6392,6446,6447,6502,6515,6536,6551,6578,6590,6611,6631,6643,6647,6659,6662,6684,6713,6731,6743,6746,6763,6788,6791,6799,6801,6802,6843,6909,6928,6938,6961,6983,7004,7043,7068,7107,7132,7171,7181,7213,7216,7218,7219,7260,7321,7335,7354,7369,7389,7421,7431,7467,7470,7471,7491,7502,7613,7655,7675,7676,7692,7713,7716,7717,7740,7788,7836,7885,7934,7983,8032,8066,8116,8166,8169,8170,8185,8187,8188,8239,8277,8315,8326,8341,8362,8364,8365,8416,8466,8504,8515,8530,8551,8583,8591,8593,8594,8653,8707,8749,8760,8775,8796,8828,8836,8838,8839,8898,8952,8994,9005,9020,9041,9073,9081],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha512/sha512block.go","Base":9085,"Size":3337,"Lines":[0,55,109,159,160,182,240,270,271,286,287,306,307,326,347,368,389,410,431,452,473,494,515,536,557,578,599,620,641,662,683,704,725,746,767,788,809,830,851,872,893,914,935,956,977,998,1019,1040,1061,1082,1103,1124,1145,1166,1187,1208,1229,1250,1271,1292,1313,1334,1355,1376,1397,1418,1439,1460,1481,1502,1523,1544,1565,1586,1607,1628,1649,1670,1691,1712,1733,1754,1775,1796,1817,1838,1859,1880,1901,1922,1943,1964,1985,2006,2008,2009,2052,2070,2184,2207,2235,2249,2341,2422,2426,2455,2471,2548,2565,2640,2641,2678,2682,2683,2742,2743,2771,2906,2907,3032,3033,3042,3051,3060,3074,3083,3092,3101,3116,3120,3121,3131,3141,3151,3161,3171,3181,3191,3201,3202,3218,3221,3222,3335],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/sha512/sha512block_generic.go","Base":12423,"Size":310,"Lines":[0,55,109,159,160,200,233,234,249,250,286,308],"Infos":null}]}
 