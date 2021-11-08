’’Archive’ 	
ImportPath Name Imports’ 
ExportData
 Declarations’ 	IncJSCode
 FileSet
 Minified GoLinknames’   ’[]string’   ’[]*compiler.Decl’ ’  ’“’’ FullName LinkingName’ Vars’ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps’ Blocking   *’SymName’ PkgPath Name   $’[]compiler.GoLinkname’ ’  ;’
GoLinkname’ Implementation’ 	Reference’   žbQ’crypto/ed25519ed25519bytescrypto$crypto/ed25519/internal/edwards25519crypto/randcrypto/sha512errorsiostrconvžEi ĖØrandReaderio 	PublicKey
PrivateKeyseedPublicprivcryptoEqualxSeedSignmessageopts
SignerOpts	signatureerrpub
privateKey	publicKeysigReadpnHashFuncHashhStringSizeNewhash	AvailableWriter	BlockSizeResetSumbWriteed25519GenerateKeyNewKeyFromSeedPrivateKeySizePublicKeySizeSeedSizeSignatureSizeVerify   F     # &  F  %: &  6 6 \6T G * 1&  I = 1& CL    E 1&  O J 1&    OQ WS gV q C ž@T  = u# CI   C @C @F  y& O· ¹ C ž@F  # OŠ Š      ē  q T é6  T 6  T  ¤66    T  ¤»T   ©   « ©   ² ©   · ©  Ø Ą ©    Ź» ō Ń   Ū   ²   į åų ś T ü  ē ¬  q T ®ķ 
õ	8u|­J¶«Ä²66 ¤ļē\»» ¤ ßŹ¤ bytes	bytes = $packages["bytes"];
’    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  crypto	crypto = $packages["crypto"];
’    		$r = crypto.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  edwards25519C	edwards25519 = $packages["crypto/ed25519/internal/edwards25519"];
’    		$r = edwards25519.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  rand"	rand = $packages["crypto/rand"];
’    		$r = rand.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sha512&	sha512 = $packages["crypto/sha512"];
’    		$r = sha512.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
’    		$r = errors.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
’    		$r = io.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
’    		$r = strconv.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	PublicKeyq	PublicKey = $pkg.PublicKey = $newType(12, $kindSlice, "ed25519.PublicKey", true, "crypto/ed25519", true, null);
t	PublicKey.methods = [{prop: "Equal", name: "Equal", pkg: "", typ: $funcType([crypto.PublicKey], [$Bool], false)}];
	PublicKey.init($Uint8);
	PublicKeycrypto.PublicKeycrypto/ed25519.PublicKey  
PrivateKeyt	PrivateKey = $pkg.PrivateKey = $newType(12, $kindSlice, "ed25519.PrivateKey", true, "crypto/ed25519", true, null);
ž	PrivateKey.methods = [{prop: "Public", name: "Public", pkg: "", typ: $funcType([], [crypto.PublicKey], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([crypto.PrivateKey], [$Bool], false)}, {prop: "Seed", name: "Seed", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "Sign", name: "Sign", pkg: "", typ: $funcType([io.Reader, sliceType, crypto.SignerOpts], [sliceType, $error], false)}];
	PrivateKey.init($Uint8);

PrivateKeycrypto.PrivateKeycrypto.PublicKeycrypto.SignerOptscrypto/ed25519.PrivateKeycrypto/ed25519.sliceType	io.Reader  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType%	arrayType = $arrayType($Uint8, 64);
	arrayType  funcType&	funcType = $funcType([], [], false);
funcType  arrayType$1(	arrayType$1 = $arrayType(funcType, 0);
arrayType$1crypto/ed25519.funcType  (crypto/ed25519.PublicKey).Equal ž	PublicKey.prototype.Equal = function(x) {
		var _tuple, ok, pub, x, xx;
		pub = this;
  $		_tuple = $assertType(x, PublicKey, true);
		xx = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  H			return false;
    		}
  Y		return bytes.Equal($convertSliceType(pub, sliceType), $convertSliceType(xx, sliceType));
    	};
	$ptrType(PublicKey).prototype.Equal = function(x) { return this.$get().Equal(x); };
	PublicKeybytes.Equalcrypto/ed25519.PublicKeycrypto/ed25519.sliceType "(crypto/ed25519.PrivateKey).Public žK	PrivateKey.prototype.Public = function() {
		var priv, publicKey;
		priv = this;
  K		publicKey = $makeSlice(sliceType, 32);
  u		$copySlice(publicKey, $subslice(priv, 32));
  		return ($convertSliceType(publicKey, PublicKey));
    	};
	$ptrType(PrivateKey).prototype.Public = function() { return this.$get().Public(); };

PrivateKeycrypto/ed25519.PrivateKeycrypto/ed25519.PublicKeycrypto/ed25519.sliceType !(crypto/ed25519.PrivateKey).Equal ž”	PrivateKey.prototype.Equal = function(x) {
		var _tuple, ok, priv, x, xx;
		priv = this;
  #		_tuple = $assertType(x, PrivateKey, true);
		xx = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  H			return false;
    		}
  Y		return bytes.Equal($convertSliceType(priv, sliceType), $convertSliceType(xx, sliceType));
    	};
	$ptrType(PrivateKey).prototype.Equal = function(x) { return this.$get().Equal(x); };

PrivateKeybytes.Equalcrypto/ed25519.PrivateKeycrypto/ed25519.sliceType  (crypto/ed25519.PrivateKey).Seed ž	PrivateKey.prototype.Seed = function() {
		var priv, seed;
		priv = this;
  	S		seed = $makeSlice(sliceType, 32);
  	s		$copySlice(seed, $subslice(priv, 0, 32));
  			return seed;
    	};
	$ptrType(PrivateKey).prototype.Seed = function() { return this.$get().Seed(); };

PrivateKeycrypto/ed25519.PrivateKeycrypto/ed25519.sliceType  (crypto/ed25519.PrivateKey).Sign žE	PrivateKey.prototype.Sign = function(rand$1, message, opts) {
		var $24r, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, err, message, opts, priv, rand$1, signature, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; err = $f.err; message = $f.message; opts = $f.opts; priv = $f.priv; rand$1 = $f.rand$1; signature = $f.signature; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		signature = sliceType.nil;
		err = $ifaceNil;
		priv = this;
  E		_r = opts.HashFunc(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((_r === 0))) { */ case 1:
    			_tmp = sliceType.nil;
			_tmp$1 = errors.New("ed25519: cannot sign hashed message");
			signature = _tmp;
			err = _tmp$1;
			$s = -1; return [signature, err];
    		/* } */ case 2:
    		_r$1 = Sign(priv, message); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tmp$2 = _r$1;
		_tmp$3 = $ifaceNil;
		signature = _tmp$2;
		err = _tmp$3;
		$24r = [signature, err];
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PrivateKey.prototype.Sign }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.err = err; $f.message = message; $f.opts = opts; $f.priv = priv; $f.rand$1 = rand$1; $f.signature = signature; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(PrivateKey).prototype.Sign = function(rand$1, message, opts) { return this.$get().Sign(rand$1, message, opts); };

PrivateKeycrypto/ed25519.PrivateKeycrypto/ed25519.Signcrypto/ed25519.sliceType
errors.New crypto/ed25519.GenerateKeycrypto/ed25519GenerateKey GenerateKeyž	GenerateKey = function(rand$1) {
		var _r, _r$1, _tuple, err, privateKey, publicKey, rand$1, seed, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; privateKey = $f.privateKey; publicKey = $f.publicKey; rand$1 = $f.rand$1; seed = $f.seed; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if ($interfaceIsEqual(rand$1, $ifaceNil)) {
  Ŗ			rand$1 = rand.Reader;
    		}
  Č		seed = $makeSlice(sliceType, 32);
  ė		_r = io.ReadFull(rand$1, seed); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  			$s = -1; return [PublicKey.nil, PrivateKey.nil, err];
    		}
  7		_r$1 = NewKeyFromSeed(seed); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		privateKey = _r$1;
  [		publicKey = $makeSlice(sliceType, 32);
  		$copySlice(publicKey, $subslice(privateKey, 32));
  Ø		$s = -1; return [$convertSliceType(publicKey, PublicKey), privateKey, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: GenerateKey }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.privateKey = privateKey; $f.publicKey = publicKey; $f.rand$1 = rand$1; $f.seed = seed; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.GenerateKey = GenerateKey;
GenerateKeycrypto/ed25519.GenerateKeycrypto/ed25519.NewKeyFromSeedcrypto/ed25519.PrivateKeycrypto/ed25519.PublicKeycrypto/ed25519.sliceTypecrypto/rand.Readerio.ReadFull crypto/ed25519.NewKeyFromSeedcrypto/ed25519NewKeyFromSeed NewKeyFromSeedžö	NewKeyFromSeed = function(seed) {
		var privateKey, seed, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; privateKey = $f.privateKey; seed = $f.seed; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  3		privateKey = $makeSlice(sliceType, 64);
  _		$r = newKeyFromSeed(privateKey, seed); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		$s = -1; return $convertSliceType(privateKey, PrivateKey);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewKeyFromSeed }; } $f.privateKey = privateKey; $f.seed = seed; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewKeyFromSeed = NewKeyFromSeed;
NewKeyFromSeedcrypto/ed25519.NewKeyFromSeedcrypto/ed25519.PrivateKeycrypto/ed25519.newKeyFromSeedcrypto/ed25519.sliceType crypto/ed25519.newKeyFromSeedcrypto/ed25519newKeyFromSeed newKeyFromSeedž	newKeyFromSeed = function(privateKey, seed) {
		var A, _r, h, l, privateKey, publicKey, s, seed, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; A = $f.A; _r = $f._r; h = $f.h; l = $f.l; privateKey = $f.privateKey; publicKey = $f.publicKey; s = $f.s; seed = $f.seed; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  É		l = seed.$length;
    		if (!((l === 32))) {
  ė			$panic(new $String("ed25519: bad seed length: " + strconv.Itoa(l)));
    		}
  &		h = $clone(sha512.Sum512(seed), arrayType);
  @		s = edwards25519.NewScalar().SetBytesWithClamping($subslice(new sliceType(h), 0, 32));
  |		_r = (new edwards25519.Point.ptr(new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$1.zero())).ScalarBaseMult(s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		A = _r;
  ­		publicKey = A.Bytes();
  Ę		$copySlice(privateKey, seed);
  Ž		$copySlice($subslice(privateKey, 32), publicKey);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: newKeyFromSeed }; } $f.A = A; $f._r = _r; $f.h = h; $f.l = l; $f.privateKey = privateKey; $f.publicKey = publicKey; $f.s = s; $f.seed = seed; $f.$s = $s; $f.$r = $r; return $f;
	};
newKeyFromSeed
crypto/ed25519.arrayTypecrypto/ed25519.arrayType$1crypto/ed25519.funcTypecrypto/ed25519.newKeyFromSeedcrypto/ed25519.sliceType.crypto/ed25519/internal/edwards25519.NewScalar*crypto/ed25519/internal/edwards25519.Point2crypto/ed25519/internal/edwards25519/field.Elementcrypto/sha512.Sum512strconv.Itoa crypto/ed25519.Signcrypto/ed25519Sign Signž,	Sign = function(privateKey, message) {
		var message, privateKey, signature, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; message = $f.message; privateKey = $f.privateKey; signature = $f.signature; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		signature = $makeSlice(sliceType, 64);
  >		$r = sign(signature, $convertSliceType(privateKey, sliceType), message); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  d		$s = -1; return signature;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Sign }; } $f.message = message; $f.privateKey = privateKey; $f.signature = signature; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sign = Sign;
Signcrypto/ed25519.Signcrypto/ed25519.signcrypto/ed25519.sliceType crypto/ed25519.signcrypto/ed25519sign signž	sign = function(signature, privateKey, message) {
		var R, S, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _tmp, _tmp$1, h, hramDigest, k, kh, l, message, messageDigest, mh, prefix, privateKey, publicKey, r, s, seed, signature, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; R = $f.R; S = $f.S; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; h = $f.h; hramDigest = $f.hramDigest; k = $f.k; kh = $f.kh; l = $f.l; message = $f.message; messageDigest = $f.messageDigest; mh = $f.mh; prefix = $f.prefix; privateKey = $f.privateKey; publicKey = $f.publicKey; r = $f.r; s = $f.s; seed = $f.seed; signature = $f.signature; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Æ		l = privateKey.$length;
    		if (!((l === 64))) {
  Ż			$panic(new $String("ed25519: bad private key length: " + strconv.Itoa(l)));
    		}
  		_tmp = $subslice(privateKey, 0, 32);
		_tmp$1 = $subslice(privateKey, 32);
		seed = _tmp;
		publicKey = _tmp$1;
  `		h = $clone(sha512.Sum512(seed), arrayType);
  z		s = edwards25519.NewScalar().SetBytesWithClamping($subslice(new sliceType(h), 0, 32));
  ¶		prefix = $subslice(new sliceType(h), 32);
  É		mh = sha512.New();
  Ż		_r = mh.Write(prefix); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  ļ		_r$1 = mh.Write(message); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  		messageDigest = $makeSlice(sliceType, 0, 64);
  1		_r$2 = mh.Sum(messageDigest); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		messageDigest = _r$2;
  X		r = edwards25519.NewScalar().SetUniformBytes(messageDigest);
  		_r$3 = (new edwards25519.Point.ptr(new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$1.zero())).ScalarBaseMult(r); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		R = _r$3;
  Č		kh = sha512.New();
  Ü		_r$4 = kh.Write(R.Bytes()); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_r$4;
  ń		_r$5 = kh.Write(publicKey); /* */ $s = 6; case 6: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_r$5;
  		_r$6 = kh.Write(message); /* */ $s = 7; case 7: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_r$6;
  		hramDigest = $makeSlice(sliceType, 0, 64);
  E		_r$7 = kh.Sum(hramDigest); /* */ $s = 8; case 8: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		hramDigest = _r$7;
  f		k = edwards25519.NewScalar().SetUniformBytes(hramDigest);
  ¢		S = edwards25519.NewScalar().MultiplyAdd(k, s, r);
  ×		$copySlice($subslice(signature, 0, 32), R.Bytes());
  ų		$copySlice($subslice(signature, 32), S.Bytes());
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: sign }; } $f.R = R; $f.S = S; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.h = h; $f.hramDigest = hramDigest; $f.k = k; $f.kh = kh; $f.l = l; $f.message = message; $f.messageDigest = messageDigest; $f.mh = mh; $f.prefix = prefix; $f.privateKey = privateKey; $f.publicKey = publicKey; $f.r = r; $f.s = s; $f.seed = seed; $f.signature = signature; $f.$s = $s; $f.$r = $r; return $f;
	};
sign
crypto/ed25519.arrayTypecrypto/ed25519.arrayType$1crypto/ed25519.signcrypto/ed25519.sliceType.crypto/ed25519/internal/edwards25519.NewScalar*crypto/ed25519/internal/edwards25519.Point2crypto/ed25519/internal/edwards25519/field.Elementcrypto/sha512.Newcrypto/sha512.Sum512strconv.Itoa crypto/ed25519.Verifycrypto/ed25519Verify Verifyž		Verify = function(publicKey, message, sig) {
		var A, R, S, _r, _r$1, _r$2, _r$3, _r$4, _tuple, _tuple$1, err, hramDigest, k, kh, l, message, minusA, publicKey, sig, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; A = $f.A; R = $f.R; S = $f.S; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; hramDigest = $f.hramDigest; k = $f.k; kh = $f.kh; l = $f.l; message = $f.message; minusA = $f.minusA; publicKey = $f.publicKey; sig = $f.sig; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  į		l = publicKey.$length;
    		if (!((l === 32))) {
  			$panic(new $String("ed25519: bad public key length: " + strconv.Itoa(l)));
    		}
    		if (!((sig.$length === 64)) || !(((((63 >= sig.$length ? ($throwRuntimeError("index out of range"), undefined) : sig.$array[sig.$offset + 63]) & 224) >>> 0) === 0))) {
  			$s = -1; return false;
    		}
  		_tuple = (new edwards25519.Point.ptr(new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$1.zero())).SetBytes($convertSliceType(publicKey, sliceType));
		A = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  Ž			$s = -1; return false;
    		}
  š		kh = sha512.New();
  		_r = kh.Write($subslice(sig, 0, 32)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  		_r$1 = kh.Write($convertSliceType(publicKey, sliceType)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  -		_r$2 = kh.Write(message); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
  @		hramDigest = $makeSlice(sliceType, 0, 64);
  l		_r$3 = kh.Sum(hramDigest); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		hramDigest = _r$3;
  		k = edwards25519.NewScalar().SetUniformBytes(hramDigest);
  É		_tuple$1 = edwards25519.NewScalar().SetCanonicalBytes($subslice(sig, 32));
		S = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  			$s = -1; return false;
    		}
  X		minusA = (new edwards25519.Point.ptr(new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$1.zero())).Negate(A);
  		_r$4 = (new edwards25519.Point.ptr(new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new $packages["crypto/ed25519/internal/edwards25519/field"].Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$1.zero())).VarTimeDoubleScalarBaseMult(k, minusA, S); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		R = _r$4;
  Ī		$s = -1; return bytes.Equal($subslice(sig, 0, 32), R.Bytes());
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Verify }; } $f.A = A; $f.R = R; $f.S = S; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.hramDigest = hramDigest; $f.k = k; $f.kh = kh; $f.l = l; $f.message = message; $f.minusA = minusA; $f.publicKey = publicKey; $f.sig = sig; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Verify = Verify;
Verify	bytes.Equalcrypto/ed25519.Verifycrypto/ed25519.arrayType$1crypto/ed25519.sliceType.crypto/ed25519/internal/edwards25519.NewScalar*crypto/ed25519/internal/edwards25519.Point2crypto/ed25519/internal/edwards25519/field.Elementcrypto/sha512.Newstrconv.Itoa ž©{"Base":6649,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/ed25519/ed25519.go","Base":1,"Size":6647,"Lines":[0,55,109,159,160,227,257,260,342,422,494,573,612,628,629,638,647,657,697,723,740,750,756,767,769,770,778,859,879,962,983,1078,1098,1216,1231,1233,1234,1283,1305,1306,1383,1459,1460,1516,1570,1595,1605,1620,1623,1652,1654,1655,1735,1758,1759,1814,1865,1907,1935,1964,1966,1967,2024,2081,2107,2117,2132,2135,2165,2167,2168,2247,2326,2346,2385,2417,2440,2453,2455,2456,2499,2578,2650,2726,2767,2883,2923,2987,2990,2991,3024,3026,3027,3103,3155,3221,3239,3266,3269,3270,3302,3354,3377,3380,3381,3417,3459,3493,3494,3529,3531,3532,3605,3682,3752,3764,3810,3889,3933,3967,3986,3988,3989,4036,4072,4128,4131,4132,4158,4218,4266,4267,4291,4292,4316,4350,4352,4353,4428,4479,4537,4605,4626,4668,4706,4724,4726,4727,4778,4826,4889,4892,4957,4958,4984,5044,5062,5063,5083,5101,5120,5167,5206,5268,5269,5317,5318,5338,5359,5380,5399,5443,5476,5535,5536,5588,5589,5622,5655,5657,5658,5737,5791,5852,5898,5960,5963,5964,6016,6031,6034,6035,6090,6107,6122,6125,6126,6146,6166,6187,6206,6250,6283,6342,6343,6407,6424,6439,6442,6443,6486,6531,6603,6604,6645],"Infos":null}]}
 