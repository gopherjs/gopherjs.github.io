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
GoLinkname�� Implementation�� 	Reference��   �&���cryptocryptohashiostrconv��i ��Hash DecryptrandReaderiomsgoptsDecrypterOpts	plaintexterrPublic	PublicKeyHashFunchStringSizeNewhash	AvailablefSigndigest
SignerOpts	signatureReadpnWriter	BlockSizeResetSumbWritecryptoBLAKE2b_256BLAKE2b_384BLAKE2b_512BLAKE2s_256	DecrypterMD4MD5MD5SHA1
PrivateKey	RIPEMD160RegisterHashSHA1SHA224SHA256SHA384SHA3_224SHA3_256SHA3_384SHA3_512SHA512
SHA512_224
SHA512_256Signer  C  C  C  C    & I   3 6 !8 4; >  B  =T @  T b  nT  S \     ^ \    e \    j \   i s \    C  C  C    T �  T �C  	  iF  \  }�  C  C  C  C  C  
C  C  C  C  C  C   �  B  =  3 �� !� �� > T �  S   T �  � �� � > T � �n � �   �   e   � �� � T �  � �� � > T �� �����?&F L��������I�������������������������������nn  � ��� hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  HashW	Hash = $pkg.Hash = $newType(4, $kindUint, "crypto.Hash", true, "crypto", true, null);
��	Hash.methods = [{prop: "HashFunc", name: "HashFunc", pkg: "", typ: $funcType([], [Hash], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "New", name: "New", pkg: "", typ: $funcType([], [hash.Hash], false)}, {prop: "Available", name: "Available", pkg: "", typ: $funcType([], [$Bool], false)}];
Hashcrypto.Hash	hash.Hash  	PublicKeyk	PublicKey = $pkg.PublicKey = $newType(8, $kindInterface, "crypto.PublicKey", true, "crypto", true, null);
	PublicKey.init([]);
	PublicKeycrypto.PublicKey  
PrivateKeyn	PrivateKey = $pkg.PrivateKey = $newType(8, $kindInterface, "crypto.PrivateKey", true, "crypto", true, null);
	PrivateKey.init([]);

PrivateKeycrypto.PrivateKey  Signerb	Signer = $pkg.Signer = $newType(8, $kindInterface, "crypto.Signer", true, "crypto", true, null);
��	Signer.init([{prop: "Public", name: "Public", pkg: "", typ: $funcType([], [PublicKey], false)}, {prop: "Sign", name: "Sign", pkg: "", typ: $funcType([io.Reader, sliceType, SignerOpts], [sliceType, $error], false)}]);
Signercrypto.PublicKeycrypto.Signercrypto.SignerOptscrypto.sliceType	io.Reader  
SignerOptsn	SignerOpts = $pkg.SignerOpts = $newType(8, $kindInterface, "crypto.SignerOpts", true, "crypto", true, null);
f	SignerOpts.init([{prop: "HashFunc", name: "HashFunc", pkg: "", typ: $funcType([], [Hash], false)}]);

SignerOptscrypto.Hashcrypto.SignerOpts  	Decrypterk	Decrypter = $pkg.Decrypter = $newType(8, $kindInterface, "crypto.Decrypter", true, "crypto", true, null);
��	Decrypter.init([{prop: "Decrypt", name: "Decrypt", pkg: "", typ: $funcType([io.Reader, sliceType, DecrypterOpts], [sliceType, $error], false)}, {prop: "Public", name: "Public", pkg: "", typ: $funcType([], [PublicKey], false)}]);
	Decryptercrypto.Decryptercrypto.DecrypterOptscrypto.PublicKeycrypto.sliceType	io.Reader  DecrypterOptsw	DecrypterOpts = $pkg.DecrypterOpts = $newType(8, $kindInterface, "crypto.DecrypterOpts", true, "crypto", true, null);
	DecrypterOpts.init([]);
DecrypterOptscrypto.DecrypterOpts  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  funcType/	funcType = $funcType([], [hash.Hash], false);
funcType	hash.Hash  sliceType$1%	sliceType$1 = $sliceType(funcType);
sliceType$1crypto.funcType  digestSizesdigestSizes  hasheshashes  u  	�		digestSizes = new sliceType([0, 16, 16, 20, 28, 32, 48, 64, 36, 20, 28, 32, 48, 64, 28, 32, 32, 32, 48, 64]);
digestSizescrypto.digestSizescrypto.sliceType  -  Z		hashes = $makeSlice(sliceType$1, 20);
crypto.funcTypecrypto.hashescrypto.sliceType$1	hash.Hash (crypto.Hash).HashFunc ��	Hash.prototype.HashFunc = function() {
		var h;
		h = this.$val;
  �		return h;
    	};
	$ptrType(Hash).prototype.HashFunc = function() { return new Hash(this.$get()).HashFunc(); };
Hashcrypto.Hash (crypto.Hash).String �w	Hash.prototype.String = function() {
		var _1, h;
		h = this.$val;
    		_1 = h;
    		if (_1 === (1)) {
  1			return "MD4";
    		} else if (_1 === (2)) {
  K			return "MD5";
    		} else if (_1 === (3)) {
  f			return "SHA-1";
    		} else if (_1 === (4)) {
  �			return "SHA-224";
    		} else if (_1 === (5)) {
  �			return "SHA-256";
    		} else if (_1 === (6)) {
  �			return "SHA-384";
    		} else if (_1 === (7)) {
  �			return "SHA-512";
    		} else if (_1 === (8)) {
  
			return "MD5+SHA1";
    		} else if (_1 === (9)) {
  /			return "RIPEMD-160";
    		} else if (_1 === (10)) {
  U			return "SHA3-224";
    		} else if (_1 === (11)) {
  y			return "SHA3-256";
    		} else if (_1 === (12)) {
  �			return "SHA3-384";
    		} else if (_1 === (13)) {
  �			return "SHA3-512";
    		} else if (_1 === (14)) {
  �			return "SHA-512/224";
    		} else if (_1 === (15)) {
  			return "SHA-512/256";
    		} else if (_1 === (16)) {
  :			return "BLAKE2s-256";
    		} else if (_1 === (17)) {
  d			return "BLAKE2b-256";
    		} else if (_1 === (18)) {
  �			return "BLAKE2b-384";
    		} else if (_1 === (19)) {
  �			return "BLAKE2b-512";
    		} else {
  �			return "unknown hash value " + strconv.Itoa(((h >> 0)));
    		}
    	};
	$ptrType(Hash).prototype.String = function() { return new Hash(this.$get()).String(); };
Hashcrypto.Hashstrconv.Itoa (crypto.Hash).Size ��	Hash.prototype.Size = function() {
		var h;
		h = this.$val;
    		if (h > 0 && h < 20) {
  			return ((((h < 0 || h >= digestSizes.$length) ? ($throwRuntimeError("index out of range"), undefined) : digestSizes.$array[digestSizes.$offset + h]) >> 0));
    		}
  $		$panic(new $String("crypto: Size of unknown hash function"));
    	};
	$ptrType(Hash).prototype.Size = function() { return new Hash(this.$get()).Size(); };
Hashcrypto.Hashcrypto.digestSizes (crypto.Hash).New �E	Hash.prototype.New = function() {
		var $24r, _r, f, h, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; f = $f.f; h = $f.h; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
  -		/* */ if (h > 0 && h < 20) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (h > 0 && h < 20) { */ case 1:
  I			f = ((h < 0 || h >= hashes.$length) ? ($throwRuntimeError("index out of range"), undefined) : hashes.$array[hashes.$offset + h]);
  Z			/* */ if (!(f === $throwNilPointerError)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!(f === $throwNilPointerError)) { */ case 3:
  k				_r = f(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
    		/* } */ case 2:
  ~		$panic(new $String("crypto: requested hash function #" + strconv.Itoa(((h >> 0))) + " is unavailable"));
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Hash.prototype.New }; } $f.$24r = $24r; $f._r = _r; $f.f = f; $f.h = h; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(Hash).prototype.New = function() { return new Hash(this.$get()).New(); };
Hashcrypto.Hashcrypto.hashesstrconv.Itoa (crypto.Hash).Available �_	Hash.prototype.Available = function() {
		var h;
		h = this.$val;
  I		return h < 20 && !(((h < 0 || h >= hashes.$length) ? ($throwRuntimeError("index out of range"), undefined) : hashes.$array[hashes.$offset + h]) === $throwNilPointerError);
    	};
	$ptrType(Hash).prototype.Available = function() { return new Hash(this.$get()).Available(); };
Hashcrypto.Hashcrypto.hashes crypto.RegisterHashcryptoRegisterHash RegisterHash�O	RegisterHash = function(h, f) {
		var f, h;
    		if (h >= 20) {
  {			$panic(new $String("crypto: RegisterHash of unknown hash function"));
    		}
  �		((h < 0 || h >= hashes.$length) ? ($throwRuntimeError("index out of range"), undefined) : hashes.$array[hashes.$offset + h] = f);
    	};
	$pkg.RegisterHash = RegisterHash;
RegisterHashcrypto.RegisterHashcrypto.hashes �O{"Base":6234,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/crypto.go","Base":1,"Size":6232,"Lines":[0,55,109,159,160,219,234,235,244,252,258,269,271,272,352,364,379,380,458,490,500,502,503,535,547,558,573,584,599,611,628,642,661,675,694,708,727,741,760,775,795,812,834,850,870,886,906,922,942,958,978,996,1019,1037,1060,1079,1102,1121,1144,1163,1186,1205,1228,1238,1292,1295,1297,1298,1306,1369,1419,1470,1523,1576,1629,1682,1759,1828,1892,1956,2020,2084,2137,2190,2257,2324,2391,2458,2467,2469,2470,2497,2515,2533,2551,2569,2587,2605,2623,2641,2659,2677,2695,2713,2731,2749,2767,2785,2803,2821,2839,2841,2842,2922,2999,3020,3047,3074,3103,3106,3154,3156,3157,3204,3205,3284,3339,3371,3398,3415,3431,3445,3449,3452,3539,3541,3542,3622,3655,3695,3697,3698,3776,3850,3893,3941,3960,4017,4020,4035,4037,4038,4107,4134,4135,4206,4234,4235,4308,4382,4406,4469,4486,4506,4507,4579,4648,4721,4788,4792,4865,4938,5006,5078,5082,5154,5227,5293,5377,5379,5380,5438,5466,5539,5611,5633,5650,5652,5653,5729,5797,5827,5854,5917,5934,5954,5955,6025,6098,6111,6198,6200,6201],"Infos":null}]}
 