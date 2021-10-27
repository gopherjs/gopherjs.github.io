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
GoLinkname�� Implementation�� 	Reference��   �����
crypto/desdescrypto/ciphercrypto/internal/subtleencoding/binarystrconvsync��i x`ErrorkKeySizeError keyBlockcrypto/cipher	BlockSizeDecryptdstsrcEncryptdes	NewCipherNewTripleDESCiphercipherC  T    $    F  5 7  F  H 7     .   8 @X DX   H @Z DZ  T \P . T^* q ]8 cipher&	cipher = $packages["crypto/cipher"];
��    		$r = cipher.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  subtle/	subtle = $packages["crypto/internal/subtle"];
��    		$r = subtle.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  KeySizeErroro	KeySizeError = $pkg.KeySizeError = $newType(4, $kindInt, "des.KeySizeError", true, "crypto/des", true, null);
i	KeySizeError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
KeySizeErrorcrypto/des.KeySizeError  	desCipher�	desCipher = $pkg.desCipher = $newType(0, $kindStruct, "des.desCipher", true, "crypto/des", false, function(subkeys_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.subkeys = arrayType$4.zero();
			return;
		}
		this.subkeys = subkeys_;
	});
��	ptrType.methods = [{prop: "generateSubkeys", name: "generateSubkeys", pkg: "crypto/des", typ: $funcType([sliceType], [], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encrypt", name: "Encrypt", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "Decrypt", name: "Decrypt", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}];
��	desCipher.init("crypto/des", [{prop: "subkeys", name: "subkeys", embedded: false, exported: false, typ: arrayType$4, tag: ""}]);
	desCiphercrypto/des.arrayType$4crypto/des.desCiphercrypto/des.ptrTypecrypto/des.sliceType  tripleDESCipher��	tripleDESCipher = $pkg.tripleDESCipher = $newType(0, $kindStruct, "des.tripleDESCipher", true, "crypto/des", false, function(cipher1_, cipher2_, cipher3_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.cipher1 = new desCipher.ptr(arrayType$4.zero());
			this.cipher2 = new desCipher.ptr(arrayType$4.zero());
			this.cipher3 = new desCipher.ptr(arrayType$4.zero());
			return;
		}
		this.cipher1 = cipher1_;
		this.cipher2 = cipher2_;
		this.cipher3 = cipher3_;
	});
�+	ptrType$1.methods = [{prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encrypt", name: "Encrypt", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "Decrypt", name: "Decrypt", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}];
�D	tripleDESCipher.init("crypto/des", [{prop: "cipher1", name: "cipher1", embedded: false, exported: false, typ: desCipher, tag: ""}, {prop: "cipher2", name: "cipher2", embedded: false, exported: false, typ: desCipher, tag: ""}, {prop: "cipher3", name: "cipher3", embedded: false, exported: false, typ: desCipher, tag: ""}]);
tripleDESCiphercrypto/des.arrayType$4crypto/des.desCiphercrypto/des.ptrType$1crypto/des.sliceTypecrypto/des.tripleDESCipher  	arrayType&	arrayType = $arrayType($Uint32, 64);
	arrayType  arrayType$1)	arrayType$1 = $arrayType(arrayType, 8);
arrayType$1crypto/des.arrayType  arrayType$2'	arrayType$2 = $arrayType($Uint8, 16);
arrayType$2  arrayType$3+	arrayType$3 = $arrayType(arrayType$2, 4);
arrayType$3crypto/des.arrayType$2  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1$	sliceType$1 = $sliceType($Uint32);
sliceType$1  arrayType$4(	arrayType$4 = $arrayType($Uint64, 16);
arrayType$4  sliceType$2$	sliceType$2 = $sliceType($Uint64);
sliceType$2  ptrType 	ptrType = $ptrType(desCipher);
ptrTypecrypto/des.desCipher  	ptrType$1(	ptrType$1 = $ptrType(tripleDESCipher);
	ptrType$1crypto/des.tripleDESCipher  
feistelBox#		feistelBox = arrayType$1.zero();

feistelBoxcrypto/des.arrayTypecrypto/des.arrayType$1crypto/des.feistelBox  feistelBoxOnceC		feistelBoxOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
feistelBoxOncecrypto/des.feistelBoxOnce
sync.Mutex	sync.Once  initialPermutationinitialPermutation  finalPermutationfinalPermutation  expansionFunctionexpansionFunction  permutationFunctionpermutationFunction  permutedChoice1permutedChoice1  permutedChoice2permutedChoice2  sBoxessBoxes  ksRotationsksRotations  �0  -�		initialPermutation = $toNativeArray($kindUint8, [6, 14, 22, 30, 38, 46, 54, 62, 4, 12, 20, 28, 36, 44, 52, 60, 2, 10, 18, 26, 34, 42, 50, 58, 0, 8, 16, 24, 32, 40, 48, 56, 7, 15, 23, 31, 39, 47, 55, 63, 5, 13, 21, 29, 37, 45, 53, 61, 3, 11, 19, 27, 35, 43, 51, 59, 1, 9, 17, 25, 33, 41, 49, 57]);
initialPermutationcrypto/des.initialPermutation  �.  /?		finalPermutation = $toNativeArray($kindUint8, [24, 56, 16, 48, 8, 40, 0, 32, 25, 57, 17, 49, 9, 41, 1, 33, 26, 58, 18, 50, 10, 42, 2, 34, 27, 59, 19, 51, 11, 43, 3, 35, 28, 60, 20, 52, 12, 44, 4, 36, 29, 61, 21, 53, 13, 45, 5, 37, 30, 62, 22, 54, 14, 46, 6, 38, 31, 63, 23, 55, 15, 47, 7, 39]);
finalPermutationcrypto/des.finalPermutation  ��  0�		expansionFunction = $toNativeArray($kindUint8, [0, 31, 30, 29, 28, 27, 28, 27, 26, 25, 24, 23, 24, 23, 22, 21, 20, 19, 20, 19, 18, 17, 16, 15, 16, 15, 14, 13, 12, 11, 12, 11, 10, 9, 8, 7, 8, 7, 6, 5, 4, 3, 4, 3, 2, 1, 0, 31]);
expansionFunctioncrypto/des.expansionFunction  ��  1�		permutationFunction = $toNativeArray($kindUint8, [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7]);
permutationFunctioncrypto/des.permutationFunction  �  2�		permutedChoice1 = $toNativeArray($kindUint8, [7, 15, 23, 31, 39, 47, 55, 63, 6, 14, 22, 30, 38, 46, 54, 62, 5, 13, 21, 29, 37, 45, 53, 61, 4, 12, 20, 28, 1, 9, 17, 25, 33, 41, 49, 57, 2, 10, 18, 26, 34, 42, 50, 58, 3, 11, 19, 27, 35, 43, 51, 59, 36, 44, 52, 60]);
permutedChoice1crypto/des.permutedChoice1  ��  4		permutedChoice2 = $toNativeArray($kindUint8, [42, 39, 45, 32, 55, 51, 53, 28, 41, 50, 35, 46, 33, 37, 44, 52, 30, 48, 40, 49, 29, 36, 43, 54, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24]);
permutedChoice2crypto/des.permutedChoice2  ��  5=		sBoxes = $toNativeArray($kindArray, [$toNativeArray($kindArray, [$toNativeArray($kindUint8, [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7]), $toNativeArray($kindUint8, [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8]), $toNativeArray($kindUint8, [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0]), $toNativeArray($kindUint8, [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10]), $toNativeArray($kindUint8, [3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5]), $toNativeArray($kindUint8, [0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15]), $toNativeArray($kindUint8, [13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8]), $toNativeArray($kindUint8, [13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1]), $toNativeArray($kindUint8, [13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7]), $toNativeArray($kindUint8, [1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15]), $toNativeArray($kindUint8, [13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9]), $toNativeArray($kindUint8, [10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4]), $toNativeArray($kindUint8, [3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9]), $toNativeArray($kindUint8, [14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6]), $toNativeArray($kindUint8, [4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14]), $toNativeArray($kindUint8, [11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11]), $toNativeArray($kindUint8, [10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8]), $toNativeArray($kindUint8, [9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6]), $toNativeArray($kindUint8, [4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1]), $toNativeArray($kindUint8, [13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6]), $toNativeArray($kindUint8, [1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2]), $toNativeArray($kindUint8, [6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12])]), $toNativeArray($kindArray, [$toNativeArray($kindUint8, [13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7]), $toNativeArray($kindUint8, [1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2]), $toNativeArray($kindUint8, [7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8]), $toNativeArray($kindUint8, [2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11])])]);
sBoxescrypto/des.arrayType$2crypto/des.arrayType$3crypto/des.sBoxes  c  =z		ksRotations = $toNativeArray($kindUint8, [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1]);
ksRotationscrypto/des.ksRotations crypto/des.cryptBlock
crypto/des
cryptBlock 
cryptBlock��	cryptBlock = function(subkeys, dst, src, decrypt) {
		var _tmp, _tmp$1, _tuple, _tuple$1, b, decrypt, dst, i, i$1, left, preOutput, right, src, subkeys, x, x$1, x$2, x$3, x$4, x$5;
  		b = $clone(binary.BigEndian, binary.bigEndian).Uint64(src);
  <		b = permuteInitialBlock(b);
  X		_tmp = (($shiftRightUint64(b, 32).$low >>> 0));
		_tmp$1 = ((b.$low >>> 0));
		left = _tmp;
		right = _tmp$1;
  �		left = (((left << 1 >>> 0)) | ((left >>> 31 >>> 0))) >>> 0;
  �		right = (((right << 1 >>> 0)) | ((right >>> 31 >>> 0))) >>> 0;
    		if (decrypt) {
  �			i = 0;
			while (true) {
				if (!(i < 8)) { break; }
  �				_tuple = feistel(left, right, (x = 15 - ($imul(2, i)) >> 0, ((x < 0 || x >= subkeys.$length) ? ($throwRuntimeError("index out of range"), undefined) : subkeys.$array[subkeys.$offset + x])), (x$1 = 15 - ((($imul(2, i)) + 1 >> 0)) >> 0, ((x$1 < 0 || x$1 >= subkeys.$length) ? ($throwRuntimeError("index out of range"), undefined) : subkeys.$array[subkeys.$offset + x$1])));
				left = _tuple[0];
				right = _tuple[1];
  �				i = i + (1) >> 0;
    			}
    		} else {
  T			i$1 = 0;
			while (true) {
				if (!(i$1 < 8)) { break; }
  l				_tuple$1 = feistel(left, right, (x$2 = $imul(2, i$1), ((x$2 < 0 || x$2 >= subkeys.$length) ? ($throwRuntimeError("index out of range"), undefined) : subkeys.$array[subkeys.$offset + x$2])), (x$3 = ($imul(2, i$1)) + 1 >> 0, ((x$3 < 0 || x$3 >= subkeys.$length) ? ($throwRuntimeError("index out of range"), undefined) : subkeys.$array[subkeys.$offset + x$3])));
				left = _tuple$1[0];
				right = _tuple$1[1];
  c				i$1 = i$1 + (1) >> 0;
    			}
    		}
  �		left = (((left << 31 >>> 0)) | ((left >>> 1 >>> 0))) >>> 0;
  �		right = (((right << 31 >>> 0)) | ((right >>> 1 >>> 0))) >>> 0;
  6		preOutput = (x$4 = $shiftLeft64((new $Uint64(0, right)), 32), x$5 = (new $Uint64(0, left)), new $Uint64(x$4.$high | x$5.$high, (x$4.$low | x$5.$low) >>> 0));
  i		$clone(binary.BigEndian, binary.bigEndian).PutUint64(dst, permuteFinalBlock(preOutput));
    	};

cryptBlockcrypto/des.cryptBlockcrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockencoding/binary.BigEndianencoding/binary.bigEndian crypto/des.encryptBlock
crypto/desencryptBlock encryptBlock}	encryptBlock = function(subkeys, dst, src) {
		var dst, src, subkeys;
  		cryptBlock(subkeys, dst, src, false);
    	};
encryptBlockcrypto/des.cryptBlockcrypto/des.encryptBlock crypto/des.decryptBlock
crypto/desdecryptBlock decryptBlock|	decryptBlock = function(subkeys, dst, src) {
		var dst, src, subkeys;
  �		cryptBlock(subkeys, dst, src, true);
    	};
decryptBlockcrypto/des.cryptBlockcrypto/des.decryptBlock crypto/des.feistel
crypto/desfeistel feistel��	feistel = function(l, r, k0, k1) {
		var _tmp, _tmp$1, k0, k1, l, lout, r, rout, t, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$4, x$5, x$6, x$7, x$8, x$9;
		lout = 0;
		rout = 0;
  �		t = 0;
  �		t = (r ^ (($shiftRightUint64(k0, 32).$low >>> 0))) >>> 0;
  �		l = (l ^ ((((((((x = feistelBox[7], x$1 = (t & 63) >>> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) ^ (x$2 = feistelBox[5], x$3 = (((t >>> 8 >>> 0)) & 63) >>> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3]))) >>> 0) ^ (x$4 = feistelBox[3], x$5 = (((t >>> 16 >>> 0)) & 63) >>> 0, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5]))) >>> 0) ^ (x$6 = feistelBox[1], x$7 = (((t >>> 24 >>> 0)) & 63) >>> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7]))) >>> 0))) >>> 0;
  *		t = ((((((r << 28 >>> 0)) | ((r >>> 4 >>> 0))) >>> 0)) ^ ((k0.$low >>> 0))) >>> 0;
  S		l = (l ^ ((((((((x$8 = feistelBox[6], x$9 = ((t) & 63) >>> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])) ^ (x$10 = feistelBox[4], x$11 = (((t >>> 8 >>> 0)) & 63) >>> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11]))) >>> 0) ^ (x$12 = feistelBox[2], x$13 = (((t >>> 16 >>> 0)) & 63) >>> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13]))) >>> 0) ^ (x$14 = feistelBox[0], x$15 = (((t >>> 24 >>> 0)) & 63) >>> 0, ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15]))) >>> 0))) >>> 0;
  �		t = (l ^ (($shiftRightUint64(k1, 32).$low >>> 0))) >>> 0;
  �		r = (r ^ ((((((((x$16 = feistelBox[7], x$17 = (t & 63) >>> 0, ((x$17 < 0 || x$17 >= x$16.length) ? ($throwRuntimeError("index out of range"), undefined) : x$16[x$17])) ^ (x$18 = feistelBox[5], x$19 = (((t >>> 8 >>> 0)) & 63) >>> 0, ((x$19 < 0 || x$19 >= x$18.length) ? ($throwRuntimeError("index out of range"), undefined) : x$18[x$19]))) >>> 0) ^ (x$20 = feistelBox[3], x$21 = (((t >>> 16 >>> 0)) & 63) >>> 0, ((x$21 < 0 || x$21 >= x$20.length) ? ($throwRuntimeError("index out of range"), undefined) : x$20[x$21]))) >>> 0) ^ (x$22 = feistelBox[1], x$23 = (((t >>> 24 >>> 0)) & 63) >>> 0, ((x$23 < 0 || x$23 >= x$22.length) ? ($throwRuntimeError("index out of range"), undefined) : x$22[x$23]))) >>> 0))) >>> 0;
  e		t = ((((((l << 28 >>> 0)) | ((l >>> 4 >>> 0))) >>> 0)) ^ ((k1.$low >>> 0))) >>> 0;
  �		r = (r ^ ((((((((x$24 = feistelBox[6], x$25 = ((t) & 63) >>> 0, ((x$25 < 0 || x$25 >= x$24.length) ? ($throwRuntimeError("index out of range"), undefined) : x$24[x$25])) ^ (x$26 = feistelBox[4], x$27 = (((t >>> 8 >>> 0)) & 63) >>> 0, ((x$27 < 0 || x$27 >= x$26.length) ? ($throwRuntimeError("index out of range"), undefined) : x$26[x$27]))) >>> 0) ^ (x$28 = feistelBox[2], x$29 = (((t >>> 16 >>> 0)) & 63) >>> 0, ((x$29 < 0 || x$29 >= x$28.length) ? ($throwRuntimeError("index out of range"), undefined) : x$28[x$29]))) >>> 0) ^ (x$30 = feistelBox[0], x$31 = (((t >>> 24 >>> 0)) & 63) >>> 0, ((x$31 < 0 || x$31 >= x$30.length) ? ($throwRuntimeError("index out of range"), undefined) : x$30[x$31]))) >>> 0))) >>> 0;
    		_tmp = l;
		_tmp$1 = r;
		lout = _tmp;
		rout = _tmp$1;
		return [lout, rout];
    	};
feistelcrypto/des.feistelcrypto/des.feistelBox crypto/des.permuteBlock
crypto/despermuteBlock permuteBlock��	permuteBlock = function(src, permutation) {
		var _i, _ref, bit, block, n, permutation, position, src, x, x$1;
		block = new $Uint64(0, 0);
  	@		_ref = permutation;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			position = _i;
			n = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  	i			bit = (x = $shiftRightUint64(src, n), new $Uint64(x.$high & 0, (x.$low & 1) >>> 0));
  	�			block = (x$1 = $shiftLeft64(bit, (((((permutation.$length - 1 >> 0)) - position >> 0) >>> 0))), new $Uint64(block.$high | x$1.$high, (block.$low | x$1.$low) >>> 0));
    			_i++;
		}
  	�		return block;
    	};
permuteBlockcrypto/des.permuteBlock crypto/des.initFeistelBox
crypto/desinitFeistelBox initFeistelBox�y	initFeistelBox = function() {
		var _i, _ref, col, f, i, j, row, s, t, x, x$1, x$2, x$3, x$4;
  	�		_ref = sBoxes;
		_i = 0;
		while (true) {
			if (!(_i < 8)) { break; }
			s = _i;
  	�			i = 0;
			while (true) {
				if (!(i < 4)) { break; }
  
				j = 0;
				while (true) {
					if (!(j < 16)) { break; }
  
0					f = $shiftLeft64((new $Uint64(0, (x = (x$1 = ((s < 0 || s >= sBoxes.length) ? ($throwRuntimeError("index out of range"), undefined) : sBoxes[s]), ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])), ((j < 0 || j >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[j])))), ((4 * ((7 - ((s >>> 0)) >>> 0)) >>> 0)));
  
h					f = permuteBlock(f, new sliceType(permutationFunction));
  
�					row = (((((((i & 2)) << 4 >> 0)) | (i & 1)) << 24 >>> 24));
  					col = (((j << 1 >> 0) << 24 >>> 24));
  1					t = (row | col) >>> 0;
  �					f = (x$2 = $shiftLeft64(f, 1), x$3 = $shiftRightUint64(f, 31), new $Uint64(x$2.$high | x$3.$high, (x$2.$low | x$3.$low) >>> 0));
  �					(x$4 = ((s < 0 || s >= feistelBox.length) ? ($throwRuntimeError("index out of range"), undefined) : feistelBox[s]), ((t < 0 || t >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[t] = ((f.$low >>> 0))));
  
&					j = j + (1) >> 0;
    				}
  
					i = i + (1) >> 0;
    			}
    			_i++;
		}
    	};
initFeistelBoxcrypto/des.feistelBoxcrypto/des.initFeistelBoxcrypto/des.permutationFunctioncrypto/des.permuteBlockcrypto/des.sBoxescrypto/des.sliceType crypto/des.permuteInitialBlock
crypto/despermuteInitialBlock permuteInitialBlock�
�	permuteInitialBlock = function(block) {
		var b1, b2, block, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		b1 = $shiftRightUint64(block, 48);
  �		b2 = $shiftLeft64(block, 48);
  �		block = (x = (x$1 = (x$2 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$3 = $shiftLeft64(b1, 48), new $Uint64(x$2.$high ^ x$3.$high, (x$2.$low ^ x$3.$low) >>> 0)), x$4 = $shiftRightUint64(b2, 48), new $Uint64(x$1.$high ^ x$4.$high, (x$1.$low ^ x$4.$low) >>> 0)), new $Uint64(block.$high ^ x.$high, (block.$low ^ x.$low) >>> 0));
  &		b1 = (x$5 = $shiftRightUint64(block, 32), new $Uint64(x$5.$high & 0, (x$5.$low & 16711935) >>> 0));
  C		b2 = new $Uint64(block.$high & 0, (block.$low & 4278255360) >>> 0);
  ^		block = (x$6 = (x$7 = (x$8 = (x$9 = $shiftLeft64(b1, 32), new $Uint64(x$9.$high ^ b2.$high, (x$9.$low ^ b2.$low) >>> 0)), x$10 = $shiftLeft64(b1, 8), new $Uint64(x$8.$high ^ x$10.$high, (x$8.$low ^ x$10.$low) >>> 0)), x$11 = $shiftLeft64(b2, 24), new $Uint64(x$7.$high ^ x$11.$high, (x$7.$low ^ x$11.$low) >>> 0)), new $Uint64(block.$high ^ x$6.$high, (block.$low ^ x$6.$low) >>> 0));
  �		b1 = new $Uint64(block.$high & 252641280, (block.$low & 252641280) >>> 0);
  		b2 = new $Uint64(block.$high & 61680, (block.$low & 61680) >>> 0);
  ,		block = (x$12 = (x$13 = (x$14 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$15 = $shiftRightUint64(b1, 12), new $Uint64(x$14.$high ^ x$15.$high, (x$14.$low ^ x$15.$low) >>> 0)), x$16 = $shiftLeft64(b2, 12), new $Uint64(x$13.$high ^ x$16.$high, (x$13.$low ^ x$16.$low) >>> 0)), new $Uint64(block.$high ^ x$12.$high, (block.$low ^ x$12.$low) >>> 0));
   		b1 = new $Uint64(block.$high & 855651072, (block.$low & 855651072) >>> 0);
  !		b2 = new $Uint64(block.$high & 13369548, (block.$low & 13369548) >>> 0);
  B		block = (x$17 = (x$18 = (x$19 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$20 = $shiftRightUint64(b1, 6), new $Uint64(x$19.$high ^ x$20.$high, (x$19.$low ^ x$20.$low) >>> 0)), x$21 = $shiftLeft64(b2, 6), new $Uint64(x$18.$high ^ x$21.$high, (x$18.$low ^ x$21.$low) >>> 0)), new $Uint64(block.$high ^ x$17.$high, (block.$low ^ x$17.$low) >>> 0));
  		b1 = new $Uint64(block.$high & 2863311530, (block.$low & 1431655765) >>> 0);
  -		block = (x$22 = (x$23 = (x$24 = $shiftRightUint64(b1, 33), new $Uint64(b1.$high ^ x$24.$high, (b1.$low ^ x$24.$low) >>> 0)), x$25 = $shiftLeft64(b1, 33), new $Uint64(x$23.$high ^ x$25.$high, (x$23.$low ^ x$25.$low) >>> 0)), new $Uint64(block.$high ^ x$22.$high, (block.$low ^ x$22.$low) >>> 0));
  C		return block;
    	};
permuteInitialBlockcrypto/des.permuteInitialBlock crypto/des.permuteFinalBlock
crypto/despermuteFinalBlock permuteFinalBlock�
�	permuteFinalBlock = function(block) {
		var b1, b2, block, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  .		b1 = new $Uint64(block.$high & 2863311530, (block.$low & 1431655765) >>> 0);
  P		block = (x = (x$1 = (x$2 = $shiftRightUint64(b1, 33), new $Uint64(b1.$high ^ x$2.$high, (b1.$low ^ x$2.$low) >>> 0)), x$3 = $shiftLeft64(b1, 33), new $Uint64(x$1.$high ^ x$3.$high, (x$1.$low ^ x$3.$low) >>> 0)), new $Uint64(block.$high ^ x.$high, (block.$low ^ x.$low) >>> 0));
  p		b1 = new $Uint64(block.$high & 855651072, (block.$low & 855651072) >>> 0);
  �		b2 = new $Uint64(block.$high & 13369548, (block.$low & 13369548) >>> 0);
  �		block = (x$4 = (x$5 = (x$6 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$7 = $shiftRightUint64(b1, 6), new $Uint64(x$6.$high ^ x$7.$high, (x$6.$low ^ x$7.$low) >>> 0)), x$8 = $shiftLeft64(b2, 6), new $Uint64(x$5.$high ^ x$8.$high, (x$5.$low ^ x$8.$low) >>> 0)), new $Uint64(block.$high ^ x$4.$high, (block.$low ^ x$4.$low) >>> 0));
  �		b1 = new $Uint64(block.$high & 252641280, (block.$low & 252641280) >>> 0);
  �		b2 = new $Uint64(block.$high & 61680, (block.$low & 61680) >>> 0);
  		block = (x$9 = (x$10 = (x$11 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$12 = $shiftRightUint64(b1, 12), new $Uint64(x$11.$high ^ x$12.$high, (x$11.$low ^ x$12.$low) >>> 0)), x$13 = $shiftLeft64(b2, 12), new $Uint64(x$10.$high ^ x$13.$high, (x$10.$low ^ x$13.$low) >>> 0)), new $Uint64(block.$high ^ x$9.$high, (block.$low ^ x$9.$low) >>> 0));
  =		b1 = (x$14 = $shiftRightUint64(block, 32), new $Uint64(x$14.$high & 0, (x$14.$low & 16711935) >>> 0));
  Z		b2 = new $Uint64(block.$high & 0, (block.$low & 4278255360) >>> 0);
  u		block = (x$15 = (x$16 = (x$17 = (x$18 = $shiftLeft64(b1, 32), new $Uint64(x$18.$high ^ b2.$high, (x$18.$low ^ b2.$low) >>> 0)), x$19 = $shiftLeft64(b1, 8), new $Uint64(x$17.$high ^ x$19.$high, (x$17.$low ^ x$19.$low) >>> 0)), x$20 = $shiftLeft64(b2, 24), new $Uint64(x$16.$high ^ x$20.$high, (x$16.$low ^ x$20.$low) >>> 0)), new $Uint64(block.$high ^ x$15.$high, (block.$low ^ x$15.$low) >>> 0));
  �		b1 = $shiftRightUint64(block, 48);
  �		b2 = $shiftLeft64(block, 48);
  �		block = (x$21 = (x$22 = (x$23 = new $Uint64(b1.$high ^ b2.$high, (b1.$low ^ b2.$low) >>> 0), x$24 = $shiftLeft64(b1, 48), new $Uint64(x$23.$high ^ x$24.$high, (x$23.$low ^ x$24.$low) >>> 0)), x$25 = $shiftRightUint64(b2, 48), new $Uint64(x$22.$high ^ x$25.$high, (x$22.$low ^ x$25.$low) >>> 0)), new $Uint64(block.$high ^ x$21.$high, (block.$low ^ x$21.$low) >>> 0));
  �		return block;
    	};
permuteFinalBlockcrypto/des.permuteFinalBlock crypto/des.ksRotate
crypto/desksRotate ksRotate��	ksRotate = function(in$1) {
		var i, in$1, last, left, out, right, y, y$1;
		out = sliceType$1.nil;
  j		out = $makeSlice(sliceType$1, 16);
  �		last = in$1;
  �		i = 0;
		while (true) {
			if (!(i < 16)) { break; }
  �			left = (((y = ((4 + ((i < 0 || i >= ksRotations.length) ? ($throwRuntimeError("index out of range"), undefined) : ksRotations[i]) << 24 >>> 24)), y < 32 ? (last << y) : 0) >>> 0)) >>> 4 >>> 0;
  �			right = (y$1 = ((32 - ((i < 0 || i >= ksRotations.length) ? ($throwRuntimeError("index out of range"), undefined) : ksRotations[i]) << 24 >>> 24)), y$1 < 32 ? (((last << 4 >>> 0)) >>> y$1) : 0) >>> 0;
  *			((i < 0 || i >= out.$length) ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + i] = ((left | right) >>> 0));
  B			last = ((i < 0 || i >= out.$length) ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + i]);
  �			i = i + (1) >> 0;
    		}
  T		return out;
    	};
ksRotatecrypto/des.ksRotatecrypto/des.ksRotationscrypto/des.sliceType$1 '(*crypto/des.desCipher).generateSubkeys ��	desCipher.ptr.prototype.generateSubkeys = function(keyBytes) {
		var c, i, key, keyBytes, leftRotations, pc2Input, permutedKey, rightRotations, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; i = $f.i; key = $f.key; keyBytes = $f.keyBytes; leftRotations = $f.leftRotations; pc2Input = $f.pc2Input; permutedKey = $f.permutedKey; rightRotations = $f.rightRotations; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		$r = feistelBoxOnce.Do(initFeistelBox); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		key = $clone(binary.BigEndian, binary.bigEndian).Uint64(keyBytes);
  8		permutedKey = permuteBlock(key, new sliceType(permutedChoice1));
  �		leftRotations = ksRotate((($shiftRightUint64(permutedKey, 28).$low >>> 0)));
  �		rightRotations = ksRotate((($shiftLeft64(permutedKey, 4).$low >>> 0)) >>> 4 >>> 0);
  =		i = 0;
		while (true) {
			if (!(i < 16)) { break; }
  �			pc2Input = (x = $shiftLeft64((new $Uint64(0, ((i < 0 || i >= leftRotations.$length) ? ($throwRuntimeError("index out of range"), undefined) : leftRotations.$array[leftRotations.$offset + i]))), 28), x$1 = (new $Uint64(0, ((i < 0 || i >= rightRotations.$length) ? ($throwRuntimeError("index out of range"), undefined) : rightRotations.$array[rightRotations.$offset + i]))), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
  �			(x$2 = c.subkeys, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i] = unpack(permuteBlock(pc2Input, new sliceType(permutedChoice2)))));
  M			i = i + (1) >> 0;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: desCipher.ptr.prototype.generateSubkeys }; } $f.c = c; $f.i = i; $f.key = key; $f.keyBytes = keyBytes; $f.leftRotations = leftRotations; $f.pc2Input = pc2Input; $f.permutedKey = permutedKey; $f.rightRotations = rightRotations; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	desCipher.prototype.generateSubkeys = function(keyBytes) { return this.$val.generateSubkeys(keyBytes); };
	desCiphergenerateSubkeys~crypto/des.desCiphercrypto/des.feistelBoxOncecrypto/des.initFeistelBoxcrypto/des.ksRotatecrypto/des.permuteBlockcrypto/des.permutedChoice1crypto/des.permutedChoice2crypto/des.sliceTypecrypto/des.unpackencoding/binary.BigEndianencoding/binary.bigEndian crypto/des.unpack
crypto/desunpack unpack��	unpack = function(x) {
		var result, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  a		result = new $Uint64(0, 0);
  q		result = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (x$7 = $shiftLeft64(((x$8 = $shiftRightUint64(x, 6), new $Uint64(x$8.$high & 0, (x$8.$low & 255) >>> 0))), 0), x$9 = $shiftLeft64(((x$10 = $shiftRightUint64(x, 18), new $Uint64(x$10.$high & 0, (x$10.$low & 255) >>> 0))), 8), new $Uint64(x$7.$high | x$9.$high, (x$7.$low | x$9.$low) >>> 0)), x$11 = $shiftLeft64(((x$12 = $shiftRightUint64(x, 30), new $Uint64(x$12.$high & 0, (x$12.$low & 255) >>> 0))), 16), new $Uint64(x$6.$high | x$11.$high, (x$6.$low | x$11.$low) >>> 0)), x$13 = $shiftLeft64(((x$14 = $shiftRightUint64(x, 42), new $Uint64(x$14.$high & 0, (x$14.$low & 255) >>> 0))), 24), new $Uint64(x$5.$high | x$13.$high, (x$5.$low | x$13.$low) >>> 0)), x$15 = $shiftLeft64(((x$16 = $shiftRightUint64(x, 0), new $Uint64(x$16.$high & 0, (x$16.$low & 255) >>> 0))), 32), new $Uint64(x$4.$high | x$15.$high, (x$4.$low | x$15.$low) >>> 0)), x$17 = $shiftLeft64(((x$18 = $shiftRightUint64(x, 12), new $Uint64(x$18.$high & 0, (x$18.$low & 255) >>> 0))), 40), new $Uint64(x$3.$high | x$17.$high, (x$3.$low | x$17.$low) >>> 0)), x$19 = $shiftLeft64(((x$20 = $shiftRightUint64(x, 24), new $Uint64(x$20.$high & 0, (x$20.$low & 255) >>> 0))), 48), new $Uint64(x$2.$high | x$19.$high, (x$2.$low | x$19.$low) >>> 0)), x$21 = $shiftLeft64(((x$22 = $shiftRightUint64(x, 36), new $Uint64(x$22.$high & 0, (x$22.$low & 255) >>> 0))), 56), new $Uint64(x$1.$high | x$21.$high, (x$1.$low | x$21.$low) >>> 0));
  `		return result;
    	};
unpackcrypto/des.unpack (crypto/des.KeySizeError).Error �	KeySizeError.prototype.Error = function() {
		var k;
		k = this.$val;
  �		return "crypto/des: invalid key size " + strconv.Itoa(((k >> 0)));
    	};
	$ptrType(KeySizeError).prototype.Error = function() { return new KeySizeError(this.$get()).Error(); };
KeySizeErrorcrypto/des.KeySizeErrorstrconv.Itoa crypto/des.NewCipher
crypto/des	NewCipher 	NewCipher�	NewCipher = function(key) {
		var c, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (!((key.$length === 8))) {
  			$s = -1; return [$ifaceNil, new KeySizeError(((key.$length >> 0)))];
    		}
  ,		c = new desCipher.ptr(arrayType$4.zero());
  A		$r = c.generateSubkeys(key); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Y		$s = -1; return [c, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCipher }; } $f.c = c; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCipher = NewCipher;
	NewCiphercrypto/des.KeySizeErrorcrypto/des.NewCiphercrypto/des.arrayType$4crypto/des.desCiphercrypto/des.generateSubkeys~ !(*crypto/des.desCipher).BlockSize ��	desCipher.ptr.prototype.BlockSize = function() {
		var c;
		c = this;
  �		return 8;
    	};
	desCipher.prototype.BlockSize = function() { return this.$val.BlockSize(); };
	desCiphercrypto/des.desCipher (*crypto/des.desCipher).Encrypt �c	desCipher.ptr.prototype.Encrypt = function(dst, src) {
		var c, dst, src;
		c = this;
    		if (src.$length < 8) {
  �			$panic(new $String("crypto/des: input not full block"));
    		}
    		if (dst.$length < 8) {
  :			$panic(new $String("crypto/des: output not full block"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, 8), $subslice(src, 0, 8))) {
  �			$panic(new $String("crypto/des: invalid buffer overlap"));
    		}
  �		encryptBlock(new sliceType$2(c.subkeys), dst, src);
    	};
	desCipher.prototype.Encrypt = function(dst, src) { return this.$val.Encrypt(dst, src); };
	desCiphercrypto/des.desCiphercrypto/des.encryptBlockcrypto/des.sliceType$2%crypto/internal/subtle.InexactOverlap (*crypto/des.desCipher).Decrypt �c	desCipher.ptr.prototype.Decrypt = function(dst, src) {
		var c, dst, src;
		c = this;
    		if (src.$length < 8) {
   L			$panic(new $String("crypto/des: input not full block"));
    		}
    		if (dst.$length < 8) {
   �			$panic(new $String("crypto/des: output not full block"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, 8), $subslice(src, 0, 8))) {
  !			$panic(new $String("crypto/des: invalid buffer overlap"));
    		}
  !4		decryptBlock(new sliceType$2(c.subkeys), dst, src);
    	};
	desCipher.prototype.Decrypt = function(dst, src) { return this.$val.Decrypt(dst, src); };
	desCiphercrypto/des.decryptBlockcrypto/des.desCiphercrypto/des.sliceType$2%crypto/internal/subtle.InexactOverlap crypto/des.NewTripleDESCipher
crypto/desNewTripleDESCipher NewTripleDESCipher��	NewTripleDESCipher = function(key) {
		var c, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (!((key.$length === 24))) {
  "p			$s = -1; return [$ifaceNil, new KeySizeError(((key.$length >> 0)))];
    		}
  "�		c = new tripleDESCipher.ptr(new desCipher.ptr(arrayType$4.zero()), new desCipher.ptr(arrayType$4.zero()), new desCipher.ptr(arrayType$4.zero()));
  "�		$r = c.cipher1.generateSubkeys($subslice(key, 0, 8)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  "�		$r = c.cipher2.generateSubkeys($subslice(key, 8, 16)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  "�		$r = c.cipher3.generateSubkeys($subslice(key, 16)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  #"		$s = -1; return [c, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewTripleDESCipher }; } $f.c = c; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewTripleDESCipher = NewTripleDESCipher;
NewTripleDESCiphercrypto/des.KeySizeErrorcrypto/des.NewTripleDESCiphercrypto/des.arrayType$4crypto/des.desCiphercrypto/des.generateSubkeys~crypto/des.tripleDESCipher '(*crypto/des.tripleDESCipher).BlockSize ��	tripleDESCipher.ptr.prototype.BlockSize = function() {
		var c;
		c = this;
  #_		return 8;
    	};
	tripleDESCipher.prototype.BlockSize = function() { return this.$val.BlockSize(); };
tripleDESCiphercrypto/des.tripleDESCipher %(*crypto/des.tripleDESCipher).Encrypt ��	tripleDESCipher.ptr.prototype.Encrypt = function(dst, src) {
		var _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, b, c, dst, i, i$1, i$2, left, preOutput, right, src, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		c = this;
    		if (src.$length < 8) {
  #�			$panic(new $String("crypto/des: input not full block"));
    		}
    		if (dst.$length < 8) {
  $			$panic(new $String("crypto/des: output not full block"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, 8), $subslice(src, 0, 8))) {
  $}			$panic(new $String("crypto/des: invalid buffer overlap"));
    		}
  $�		b = $clone(binary.BigEndian, binary.bigEndian).Uint64(src);
  $�		b = permuteInitialBlock(b);
  $�		_tmp = (($shiftRightUint64(b, 32).$low >>> 0));
		_tmp$1 = ((b.$low >>> 0));
		left = _tmp;
		right = _tmp$1;
  %		left = (((left << 1 >>> 0)) | ((left >>> 31 >>> 0))) >>> 0;
  %:		right = (((right << 1 >>> 0)) | ((right >>> 31 >>> 0))) >>> 0;
  %e		i = 0;
		while (true) {
			if (!(i < 8)) { break; }
  %|			_tuple = feistel(left, right, (x = c.cipher1.subkeys, x$1 = $imul(2, i), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])), (x$2 = c.cipher1.subkeys, x$3 = ($imul(2, i)) + 1 >> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])));
			left = _tuple[0];
			right = _tuple[1];
  %t			i = i + (1) >> 0;
    		}
  %�		i$1 = 0;
		while (true) {
			if (!(i$1 < 8)) { break; }
  %�			_tuple$1 = feistel(right, left, (x$4 = c.cipher2.subkeys, x$5 = 15 - ($imul(2, i$1)) >> 0, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])), (x$6 = c.cipher2.subkeys, x$7 = 15 - ((($imul(2, i$1)) + 1 >> 0)) >> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])));
			right = _tuple$1[0];
			left = _tuple$1[1];
  %�			i$1 = i$1 + (1) >> 0;
    		}
  &U		i$2 = 0;
		while (true) {
			if (!(i$2 < 8)) { break; }
  &l			_tuple$2 = feistel(left, right, (x$8 = c.cipher3.subkeys, x$9 = $imul(2, i$2), ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])), (x$10 = c.cipher3.subkeys, x$11 = ($imul(2, i$2)) + 1 >> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11])));
			left = _tuple$2[0];
			right = _tuple$2[1];
  &d			i$2 = i$2 + (1) >> 0;
    		}
  &�		left = (((left << 31 >>> 0)) | ((left >>> 1 >>> 0))) >>> 0;
  &�		right = (((right << 31 >>> 0)) | ((right >>> 1 >>> 0))) >>> 0;
  '		preOutput = (x$12 = $shiftLeft64((new $Uint64(0, right)), 32), x$13 = (new $Uint64(0, left)), new $Uint64(x$12.$high | x$13.$high, (x$12.$low | x$13.$low) >>> 0));
  'C		$clone(binary.BigEndian, binary.bigEndian).PutUint64(dst, permuteFinalBlock(preOutput));
    	};
	tripleDESCipher.prototype.Encrypt = function(dst, src) { return this.$val.Encrypt(dst, src); };
tripleDESCiphercrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockcrypto/des.tripleDESCipher%crypto/internal/subtle.InexactOverlapencoding/binary.BigEndianencoding/binary.bigEndian %(*crypto/des.tripleDESCipher).Decrypt ��	tripleDESCipher.ptr.prototype.Decrypt = function(dst, src) {
		var _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, b, c, dst, i, i$1, i$2, left, preOutput, right, src, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		c = this;
    		if (src.$length < 8) {
  '�			$panic(new $String("crypto/des: input not full block"));
    		}
    		if (dst.$length < 8) {
  ( 			$panic(new $String("crypto/des: output not full block"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, 8), $subslice(src, 0, 8))) {
  (�			$panic(new $String("crypto/des: invalid buffer overlap"));
    		}
  (�		b = $clone(binary.BigEndian, binary.bigEndian).Uint64(src);
  (�		b = permuteInitialBlock(b);
  (�		_tmp = (($shiftRightUint64(b, 32).$low >>> 0));
		_tmp$1 = ((b.$low >>> 0));
		left = _tmp;
		right = _tmp$1;
  )(		left = (((left << 1 >>> 0)) | ((left >>> 31 >>> 0))) >>> 0;
  )K		right = (((right << 1 >>> 0)) | ((right >>> 31 >>> 0))) >>> 0;
  )v		i = 0;
		while (true) {
			if (!(i < 8)) { break; }
  )�			_tuple = feistel(left, right, (x = c.cipher3.subkeys, x$1 = 15 - ($imul(2, i)) >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])), (x$2 = c.cipher3.subkeys, x$3 = 15 - ((($imul(2, i)) + 1 >> 0)) >> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])));
			left = _tuple[0];
			right = _tuple[1];
  )�			i = i + (1) >> 0;
    		}
  )�		i$1 = 0;
		while (true) {
			if (!(i$1 < 8)) { break; }
  *				_tuple$1 = feistel(right, left, (x$4 = c.cipher2.subkeys, x$5 = $imul(2, i$1), ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])), (x$6 = c.cipher2.subkeys, x$7 = ($imul(2, i$1)) + 1 >> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])));
			right = _tuple$1[0];
			left = _tuple$1[1];
  *			i$1 = i$1 + (1) >> 0;
    		}
  *f		i$2 = 0;
		while (true) {
			if (!(i$2 < 8)) { break; }
  *}			_tuple$2 = feistel(left, right, (x$8 = c.cipher1.subkeys, x$9 = 15 - ($imul(2, i$2)) >> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])), (x$10 = c.cipher1.subkeys, x$11 = 15 - ((($imul(2, i$2)) + 1 >> 0)) >> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11])));
			left = _tuple$2[0];
			right = _tuple$2[1];
  *u			i$2 = i$2 + (1) >> 0;
    		}
  *�		left = (((left << 31 >>> 0)) | ((left >>> 1 >>> 0))) >>> 0;
  +		right = (((right << 31 >>> 0)) | ((right >>> 1 >>> 0))) >>> 0;
  +)		preOutput = (x$12 = $shiftLeft64((new $Uint64(0, right)), 32), x$13 = (new $Uint64(0, left)), new $Uint64(x$12.$high | x$13.$high, (x$12.$low | x$13.$low) >>> 0));
  +\		$clone(binary.BigEndian, binary.bigEndian).PutUint64(dst, permuteFinalBlock(preOutput));
    	};
	tripleDESCipher.prototype.Decrypt = function(dst, src) { return this.$val.Decrypt(dst, src); };
tripleDESCiphercrypto/des.feistelcrypto/des.permuteFinalBlockcrypto/des.permuteInitialBlockcrypto/des.tripleDESCipher%crypto/internal/subtle.InexactOverlapencoding/binary.BigEndianencoding/binary.bigEndian �{"Base":15811,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/des/block.go","Base":1,"Size":7023,"Lines":[0,55,109,159,160,172,173,182,201,209,211,212,279,314,342,383,384,419,457,458,472,499,575,579,589,616,684,688,691,692,727,765,766,820,871,934,936,937,996,1051,1089,1091,1092,1151,1206,1243,1245,1246,1306,1350,1413,1427,1428,1452,1482,1513,1545,1575,1576,1617,1649,1680,1712,1742,1743,1767,1797,1828,1860,1890,1891,1932,1964,1995,2027,2057,2058,2071,2073,2074,2142,2176,2205,2206,2235,2236,2298,2366,2406,2430,2484,2487,2495,2497,2498,2522,2547,2574,2603,2659,2707,2708,2757,2796,2835,2860,2879,2880,2991,3020,3021,3054,3059,3063,3066,3068,3069,3133,3159,3207,3253,3272,3291,3327,3328,3364,3393,3420,3488,3489,3548,3576,3604,3632,3660,3688,3716,3744,3772,3773,3816,3849,3882,3918,3919,3949,3953,3978,3982,3998,4014,4030,4055,4056,4094,4127,4160,4194,4195,4225,4235,4245,4255,4265,4275,4285,4295,4323,4324,4362,4395,4426,4427,4457,4484,4511,4538,4565,4592,4619,4646,4673,4687,4689,4690,4754,4778,4824,4882,4908,4942,4973,4974,5007,5041,5075,5076,5109,5142,5178,5179,5208,5235,5274,5275,5293,5311,5347,5361,5363,5364,5410,5438,5480,5506,5518,5545,5577,5623,5671,5695,5711,5714,5722,5724,5725,5776,5831,5866,5867,5900,5942,5996,5997,6066,6120,6177,6178,6199,6226,6274,6345,6388,6456,6459,6461,6462,6555,6674,6716,6747,6766,6767,6804,6833,6862,6891,6920,6949,6978,7005,7006,7021],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/des/cipher.go","Base":7025,"Size":4139,"Lines":[0,55,109,159,160,172,173,182,199,225,244,255,257,258,290,310,311,333,334,373,436,438,439,486,510,530,532,533,586,637,657,694,697,698,719,743,758,760,761,818,819,866,893,937,940,967,1012,1015,1077,1123,1126,1164,1166,1167,1214,1241,1285,1288,1315,1360,1363,1425,1471,1474,1512,1514,1515,1576,1606,1643,1645,1646,1708,1768,1789,1826,1829,1830,1857,1893,1931,1968,1983,1985,1986,2049,2050,2103,2130,2174,2177,2204,2249,2252,2314,2360,2363,2364,2399,2427,2468,2469,2504,2542,2543,2569,2656,2659,2685,2780,2783,2809,2896,2899,2900,2935,2973,2974,3025,3088,3090,3091,3144,3171,3215,3218,3245,3290,3293,3355,3401,3404,3405,3440,3468,3509,3510,3545,3583,3584,3610,3705,3708,3734,3821,3824,3850,3945,3948,3949,3984,4022,4023,4074,4137],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/crypto/des/const.go","Base":11165,"Size":4645,"Lines":[0,55,109,159,160,229,283,353,356,425,442,454,455,522,557,589,621,653,684,716,748,780,811,813,814,893,926,959,990,1021,1053,1085,1117,1149,1181,1213,1215,1216,1293,1302,1336,1368,1401,1434,1467,1493,1519,1521,1522,1568,1604,1635,1665,1695,1726,1728,1729,1775,1799,1831,1863,1895,1927,1957,1989,2021,2054,2056,2057,2134,2154,2186,2219,2252,2285,2315,2344,2375,2377,2378,2425,2460,2490,2502,2505,2563,2621,2679,2737,2741,2753,2756,2814,2872,2930,2988,2992,3004,3007,3065,3123,3181,3239,3243,3255,3258,3316,3374,3432,3490,3494,3506,3509,3567,3625,3683,3741,3745,3757,3760,3818,3876,3934,3992,3996,4008,4011,4069,4127,4185,4243,4247,4259,4262,4320,4378,4436,4494,4498,4500,4501,4569],"Infos":null}]}
 