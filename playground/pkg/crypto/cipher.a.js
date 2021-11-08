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
GoLinkname�� Implementation�� 	Reference��   �JZ��crypto/cipherciphercrypto/internal/subtlecrypto/subtleencoding/binaryerrorsioruntime�i �� 	NonceSizeOpendstnonce
ciphertextadditionalDataOverheadSeal	plaintext	BlockSizeDecryptsrcEncryptCryptBlocksbBlockiv	BlockModeblockStreamcipherAEADsizetagSizeXORKeyStreamSRReaderioReadrStreamReadernerrWWriterErrWritewStreamWriterClosepNewCBCDecrypterNewCBCEncrypterNewCFBDecrypterNewCFBEncrypterNewCTRNewGCMNewGCMWithNonceSizeNewGCMWithTagSizeNewOFB              %   "    4    = $ $ B$ %$  & T (   L    V h ^h   b j ^j  T l   L    j � ^�  T � x  � F  v� ~�  � F  v� ~�  �  � F  �� ~�  � F  �� ~�  � F  �� ~�  �  � F  ��  �   F  �� �  �   F  �� �  �   F  v� ~�  �    � � ^�  T � ��  ��   ��   � T � � �� � � �  ��  ��   ��   �   � T � � �� ^� � �  � ��   �  � �� � � T ��  � �� � � T � � �Exm���������������������������� ����W subtle/	subtle = $packages["crypto/internal/subtle"];
��    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  subtle$1(	subtle$1 = $packages["crypto/subtle"];
��    		$r = subtle$1.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  cbc��	cbc = $pkg.cbc = $newType(0, $kindStruct, "cipher.cbc", true, "crypto/cipher", false, function(b_, blockSize_, iv_, tmp_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.blockSize = 0;
			this.iv = sliceType$1.nil;
			this.tmp = sliceType$1.nil;
			return;
		}
		this.b = b_;
		this.blockSize = blockSize_;
		this.iv = iv_;
		this.tmp = tmp_;
	});
�{	cbc.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "blockSize", name: "blockSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "iv", name: "iv", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "tmp", name: "tmp", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
cbccrypto/cipher.Blockcrypto/cipher.cbccrypto/cipher.sliceType$1  cbcEncrypter��	cbcEncrypter = $pkg.cbcEncrypter = $newType(0, $kindStruct, "cipher.cbcEncrypter", true, "crypto/cipher", false, function(b_, blockSize_, iv_, tmp_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.blockSize = 0;
			this.iv = sliceType$1.nil;
			this.tmp = sliceType$1.nil;
			return;
		}
		this.b = b_;
		this.blockSize = blockSize_;
		this.iv = iv_;
		this.tmp = tmp_;
	});
�(	ptrType.methods = [{prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "CryptBlocks", name: "CryptBlocks", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}, {prop: "SetIV", name: "SetIV", pkg: "", typ: $funcType([sliceType$1], [], false)}];
��	cbcEncrypter.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "blockSize", name: "blockSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "iv", name: "iv", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "tmp", name: "tmp", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
cbcEncryptercrypto/cipher.Blockcrypto/cipher.cbcEncryptercrypto/cipher.ptrTypecrypto/cipher.sliceType$1  
cbcEncAblev	cbcEncAble = $pkg.cbcEncAble = $newType(8, $kindInterface, "cipher.cbcEncAble", true, "crypto/cipher", false, null);
��	cbcEncAble.init([{prop: "NewCBCEncrypter", name: "NewCBCEncrypter", pkg: "", typ: $funcType([sliceType$1], [BlockMode], false)}]);

cbcEncAblecrypto/cipher.BlockModecrypto/cipher.cbcEncAblecrypto/cipher.sliceType$1  cbcDecrypter��	cbcDecrypter = $pkg.cbcDecrypter = $newType(0, $kindStruct, "cipher.cbcDecrypter", true, "crypto/cipher", false, function(b_, blockSize_, iv_, tmp_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.blockSize = 0;
			this.iv = sliceType$1.nil;
			this.tmp = sliceType$1.nil;
			return;
		}
		this.b = b_;
		this.blockSize = blockSize_;
		this.iv = iv_;
		this.tmp = tmp_;
	});
�*	ptrType$1.methods = [{prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "CryptBlocks", name: "CryptBlocks", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}, {prop: "SetIV", name: "SetIV", pkg: "", typ: $funcType([sliceType$1], [], false)}];
��	cbcDecrypter.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "blockSize", name: "blockSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "iv", name: "iv", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "tmp", name: "tmp", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
cbcDecryptercrypto/cipher.Blockcrypto/cipher.cbcDecryptercrypto/cipher.ptrType$1crypto/cipher.sliceType$1  
cbcDecAblev	cbcDecAble = $pkg.cbcDecAble = $newType(8, $kindInterface, "cipher.cbcDecAble", true, "crypto/cipher", false, null);
��	cbcDecAble.init([{prop: "NewCBCDecrypter", name: "NewCBCDecrypter", pkg: "", typ: $funcType([sliceType$1], [BlockMode], false)}]);

cbcDecAblecrypto/cipher.BlockModecrypto/cipher.cbcDecAblecrypto/cipher.sliceType$1  cfb��	cfb = $pkg.cfb = $newType(0, $kindStruct, "cipher.cfb", true, "crypto/cipher", false, function(b_, next_, out_, outUsed_, decrypt_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.next = sliceType$1.nil;
			this.out = sliceType$1.nil;
			this.outUsed = 0;
			this.decrypt = false;
			return;
		}
		this.b = b_;
		this.next = next_;
		this.out = out_;
		this.outUsed = outUsed_;
		this.decrypt = decrypt_;
	});
��	ptrType$2.methods = [{prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}];
��	cfb.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "next", name: "next", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "outUsed", name: "outUsed", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "decrypt", name: "decrypt", embedded: false, exported: false, typ: $Bool, tag: ""}]);
cfbcrypto/cipher.Blockcrypto/cipher.cfbcrypto/cipher.ptrType$2crypto/cipher.sliceType$1  Blockf	Block = $pkg.Block = $newType(8, $kindInterface, "cipher.Block", true, "crypto/cipher", true, null);
�+	Block.init([{prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Decrypt", name: "Decrypt", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}, {prop: "Encrypt", name: "Encrypt", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}]);
Blockcrypto/cipher.Blockcrypto/cipher.sliceType$1  Streami	Stream = $pkg.Stream = $newType(8, $kindInterface, "cipher.Stream", true, "crypto/cipher", true, null);
~	Stream.init([{prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}]);
Streamcrypto/cipher.Streamcrypto/cipher.sliceType$1  	BlockModer	BlockMode = $pkg.BlockMode = $newType(8, $kindInterface, "cipher.BlockMode", true, "crypto/cipher", true, null);
��	BlockMode.init([{prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "CryptBlocks", name: "CryptBlocks", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}]);
	BlockModecrypto/cipher.BlockModecrypto/cipher.sliceType$1  ctr�~	ctr = $pkg.ctr = $newType(0, $kindStruct, "cipher.ctr", true, "crypto/cipher", false, function(b_, ctr_, out_, outUsed_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.ctr = sliceType$1.nil;
			this.out = sliceType$1.nil;
			this.outUsed = 0;
			return;
		}
		this.b = b_;
		this.ctr = ctr_;
		this.out = out_;
		this.outUsed = outUsed_;
	});
��	ptrType$3.methods = [{prop: "refill", name: "refill", pkg: "crypto/cipher", typ: $funcType([], [], false)}, {prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}];
�y	ctr.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "ctr", name: "ctr", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "outUsed", name: "outUsed", embedded: false, exported: false, typ: $Int, tag: ""}]);
ctrcrypto/cipher.Blockcrypto/cipher.ctrcrypto/cipher.ptrType$3crypto/cipher.sliceType$1  ctrAblem	ctrAble = $pkg.ctrAble = $newType(8, $kindInterface, "cipher.ctrAble", true, "crypto/cipher", false, null);
l	ctrAble.init([{prop: "NewCTR", name: "NewCTR", pkg: "", typ: $funcType([sliceType$1], [Stream], false)}]);
ctrAblecrypto/cipher.Streamcrypto/cipher.ctrAblecrypto/cipher.sliceType$1  AEADc	AEAD = $pkg.AEAD = $newType(8, $kindInterface, "cipher.AEAD", true, "crypto/cipher", true, null);
��	AEAD.init([{prop: "NonceSize", name: "NonceSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([sliceType$1, sliceType$1, sliceType$1, sliceType$1], [sliceType$1, $error], false)}, {prop: "Overhead", name: "Overhead", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Seal", name: "Seal", pkg: "", typ: $funcType([sliceType$1, sliceType$1, sliceType$1, sliceType$1], [sliceType$1], false)}]);
AEADcrypto/cipher.AEADcrypto/cipher.sliceType$1  gcmAblem	gcmAble = $pkg.gcmAble = $newType(8, $kindInterface, "cipher.gcmAble", true, "crypto/cipher", false, null);
q	gcmAble.init([{prop: "NewGCM", name: "NewGCM", pkg: "", typ: $funcType([$Int, $Int], [AEAD, $error], false)}]);
gcmAblecrypto/cipher.AEADcrypto/cipher.gcmAble  gcmFieldElement�F	gcmFieldElement = $pkg.gcmFieldElement = $newType(0, $kindStruct, "cipher.gcmFieldElement", true, "crypto/cipher", false, function(low_, high_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.low = new $Uint64(0, 0);
			this.high = new $Uint64(0, 0);
			return;
		}
		this.low = low_;
		this.high = high_;
	});
��	gcmFieldElement.init("crypto/cipher", [{prop: "low", name: "low", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "high", name: "high", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
gcmFieldElementcrypto/cipher.gcmFieldElement  gcm��	gcm = $pkg.gcm = $newType(0, $kindStruct, "cipher.gcm", true, "crypto/cipher", false, function(cipher_, nonceSize_, tagSize_, productTable_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.cipher = $ifaceNil;
			this.nonceSize = 0;
			this.tagSize = 0;
			this.productTable = arrayType$1.zero();
			return;
		}
		this.cipher = cipher_;
		this.nonceSize = nonceSize_;
		this.tagSize = tagSize_;
		this.productTable = productTable_;
	});
��	ptrType$6.methods = [{prop: "NonceSize", name: "NonceSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Overhead", name: "Overhead", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Seal", name: "Seal", pkg: "", typ: $funcType([sliceType$1, sliceType$1, sliceType$1, sliceType$1], [sliceType$1], false)}, {prop: "Open", name: "Open", pkg: "", typ: $funcType([sliceType$1, sliceType$1, sliceType$1, sliceType$1], [sliceType$1, $error], false)}, {prop: "mul", name: "mul", pkg: "crypto/cipher", typ: $funcType([ptrType$4], [], false)}, {prop: "updateBlocks", name: "updateBlocks", pkg: "crypto/cipher", typ: $funcType([ptrType$4, sliceType$1], [], false)}, {prop: "update", name: "update", pkg: "crypto/cipher", typ: $funcType([ptrType$4, sliceType$1], [], false)}, {prop: "counterCrypt", name: "counterCrypt", pkg: "crypto/cipher", typ: $funcType([sliceType$1, sliceType$1, ptrType$5], [], false)}, {prop: "deriveCounter", name: "deriveCounter", pkg: "crypto/cipher", typ: $funcType([ptrType$5, sliceType$1], [], false)}, {prop: "auth", name: "auth", pkg: "crypto/cipher", typ: $funcType([sliceType$1, sliceType$1, sliceType$1, ptrType$5], [], false)}];
��	gcm.init("crypto/cipher", [{prop: "cipher", name: "cipher", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "nonceSize", name: "nonceSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "tagSize", name: "tagSize", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "productTable", name: "productTable", embedded: false, exported: false, typ: arrayType$1, tag: ""}]);
gcm	crypto/cipher.Blockcrypto/cipher.arrayTypecrypto/cipher.arrayType$1crypto/cipher.gcmcrypto/cipher.gcmFieldElementcrypto/cipher.ptrType$4crypto/cipher.ptrType$5crypto/cipher.ptrType$6crypto/cipher.sliceType$1  StreamReader�	StreamReader = $pkg.StreamReader = $newType(0, $kindStruct, "cipher.StreamReader", true, "crypto/cipher", true, function(S_, R_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.S = $ifaceNil;
			this.R = $ifaceNil;
			return;
		}
		this.S = S_;
		this.R = R_;
	});
w	StreamReader.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	StreamReader.init("", [{prop: "S", name: "S", embedded: false, exported: true, typ: Stream, tag: ""}, {prop: "R", name: "R", embedded: false, exported: true, typ: io.Reader, tag: ""}]);
StreamReadercrypto/cipher.Streamcrypto/cipher.StreamReadercrypto/cipher.sliceType$1	io.Reader  StreamWriter�J	StreamWriter = $pkg.StreamWriter = $newType(0, $kindStruct, "cipher.StreamWriter", true, "crypto/cipher", true, function(S_, W_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.S = $ifaceNil;
			this.W = $ifaceNil;
			this.Err = $ifaceNil;
			return;
		}
		this.S = S_;
		this.W = W_;
		this.Err = Err_;
	});
��	StreamWriter.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
�	StreamWriter.init("", [{prop: "S", name: "S", embedded: false, exported: true, typ: Stream, tag: ""}, {prop: "W", name: "W", embedded: false, exported: true, typ: io.Writer, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);
StreamWritercrypto/cipher.Streamcrypto/cipher.StreamWritercrypto/cipher.sliceType$1	io.Writer  ofb��	ofb = $pkg.ofb = $newType(0, $kindStruct, "cipher.ofb", true, "crypto/cipher", false, function(b_, cipher_, out_, outUsed_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.b = $ifaceNil;
			this.cipher = sliceType$1.nil;
			this.out = sliceType$1.nil;
			this.outUsed = 0;
			return;
		}
		this.b = b_;
		this.cipher = cipher_;
		this.out = out_;
		this.outUsed = outUsed_;
	});
��	ptrType$7.methods = [{prop: "refill", name: "refill", pkg: "crypto/cipher", typ: $funcType([], [], false)}, {prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType$1, sliceType$1], [], false)}];
�	ofb.init("crypto/cipher", [{prop: "b", name: "b", embedded: false, exported: false, typ: Block, tag: ""}, {prop: "cipher", name: "cipher", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "outUsed", name: "outUsed", embedded: false, exported: false, typ: $Int, tag: ""}]);
ofbcrypto/cipher.Blockcrypto/cipher.ofbcrypto/cipher.ptrType$7crypto/cipher.sliceType$1  	sliceType"	sliceType = $sliceType($Uint16);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  ptrType#	ptrType = $ptrType(cbcEncrypter);
ptrTypecrypto/cipher.cbcEncrypter  	ptrType$1%	ptrType$1 = $ptrType(cbcDecrypter);
	ptrType$1crypto/cipher.cbcDecrypter  	arrayType%	arrayType = $arrayType($Uint8, 16);
	arrayType  arrayType$10	arrayType$1 = $arrayType(gcmFieldElement, 16);
arrayType$1crypto/cipher.gcmFieldElement  	ptrType$2	ptrType$2 = $ptrType(cfb);
	ptrType$2crypto/cipher.cfb  	ptrType$3	ptrType$3 = $ptrType(ctr);
	ptrType$3crypto/cipher.ctr  	ptrType$4(	ptrType$4 = $ptrType(gcmFieldElement);
	ptrType$4crypto/cipher.gcmFieldElement  	ptrType$5"	ptrType$5 = $ptrType(arrayType);
	ptrType$5crypto/cipher.arrayType  	ptrType$6	ptrType$6 = $ptrType(gcm);
	ptrType$6crypto/cipher.gcm  	ptrType$7	ptrType$7 = $ptrType(ofb);
	ptrType$7crypto/cipher.ofb  errOpenerrOpen  gcmReductionTablegcmReductionTable  F  GH		errOpen = errors.New("cipher: message authentication failed");
crypto/cipher.errOpen
errors.New  ��  R		gcmReductionTable = new sliceType([0, 7200, 14400, 9312, 28800, 27808, 18624, 21728, 57600, 64800, 55616, 50528, 37248, 36256, 43456, 46560]);
gcmReductionTablecrypto/cipher.gcmReductionTablecrypto/cipher.sliceType crypto/cipher.newCBCcrypto/ciphernewCBC newCBC�\	newCBC = function(b, iv) {
		var $24r, _r, _r$1, b, iv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; b = $f.b; iv = $f.iv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  .		_r = b.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = b.BlockSize(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = new cbc.ptr(b, _r, dup(iv), $makeSlice(sliceType$1, _r$1));
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newCBC }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.iv = iv; $f.$s = $s; $f.$r = $r; return $f;
	};
newCBCcrypto/cipher.cbccrypto/cipher.dupcrypto/cipher.newCBCcrypto/cipher.sliceType$1 crypto/cipher.NewCBCEncryptercrypto/cipherNewCBCEncrypter NewCBCEncrypter��	NewCBCEncrypter = function(b, iv) {
		var $24r, $24r$1, _r, _r$1, _r$2, _tuple, b, cbc$1, iv, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; b = $f.b; cbc$1 = $f.cbc$1; iv = $f.iv; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = b.BlockSize(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((iv.$length === _r))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((iv.$length === _r))) { */ case 1:
  �			$panic(new $String("cipher.NewCBCEncrypter: IV length must equal block size"));
    		/* } */ case 2:
  @		_tuple = $assertType(b, cbcEncAble, true);
		cbc$1 = _tuple[0];
		ok = _tuple[1];
  =		/* */ if (ok) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (ok) { */ case 4:
  b			_r$1 = cbc$1.NewCBCEncrypter(iv); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 7; case 7: return $24r;
    		/* } */ case 5:
  �		_r$2 = newCBC(b, iv); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = ($pointerOfStructConversion(_r$2, ptrType));
		$s = 9; case 9: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCBCEncrypter }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.b = b; $f.cbc$1 = cbc$1; $f.iv = iv; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCBCEncrypter = NewCBCEncrypter;
NewCBCEncryptercrypto/cipher.NewCBCEncryptercrypto/cipher.cbcEncAblecrypto/cipher.cbcEncryptercrypto/cipher.newCBCcrypto/cipher.ptrType '(*crypto/cipher.cbcEncrypter).BlockSize ��	cbcEncrypter.ptr.prototype.BlockSize = function() {
		var x;
		x = this;
  �		return x.blockSize;
    	};
	cbcEncrypter.prototype.BlockSize = function() { return this.$val.BlockSize(); };
cbcEncryptercrypto/cipher.cbcEncrypter )(*crypto/cipher.cbcEncrypter).CryptBlocks ��	cbcEncrypter.ptr.prototype.CryptBlocks = function(dst, src) {
		var _r, dst, iv, src, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; dst = $f.dst; iv = $f.iv; src = $f.src; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (!(((_r = src.$length % x.blockSize, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
  E			$panic(new $String("crypto/cipher: input not full blocks"));
    		}
    		if (dst.$length < src.$length) {
  �			$panic(new $String("crypto/cipher: output smaller than input"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  �			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
  .		iv = x.iv;
  ;		/* while (true) { */ case 1:
			/* if (!(src.$length > 0)) { break; } */ if(!(src.$length > 0)) { $s = 2; continue; }
  �			xorBytes($subslice(dst, 0, x.blockSize), $subslice(src, 0, x.blockSize), iv);
  �			$r = x.b.Encrypt($subslice(dst, 0, x.blockSize), $subslice(dst, 0, x.blockSize)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  (			iv = $subslice(dst, 0, x.blockSize);
  A			src = $subslice(src, x.blockSize);
  [			dst = $subslice(dst, x.blockSize);
    		$s = 1; continue;
		case 2:
  �		$copySlice(x.iv, iv);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cbcEncrypter.ptr.prototype.CryptBlocks }; } $f._r = _r; $f.dst = dst; $f.iv = iv; $f.src = src; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cbcEncrypter.prototype.CryptBlocks = function(dst, src) { return this.$val.CryptBlocks(dst, src); };
cbcEncryptercrypto/cipher.cbcEncryptercrypto/cipher.xorBytes%crypto/internal/subtle.InexactOverlap #(*crypto/cipher.cbcEncrypter).SetIV �4	cbcEncrypter.ptr.prototype.SetIV = function(iv) {
		var iv, x;
		x = this;
    		if (!((iv.$length === x.iv.$length))) {
  	 			$panic(new $String("cipher: incorrect length IV"));
    		}
  	)		$copySlice(x.iv, iv);
    	};
	cbcEncrypter.prototype.SetIV = function(iv) { return this.$val.SetIV(iv); };
cbcEncryptercrypto/cipher.cbcEncrypter crypto/cipher.NewCBCDecryptercrypto/cipherNewCBCDecrypter NewCBCDecrypter��	NewCBCDecrypter = function(b, iv) {
		var $24r, $24r$1, _r, _r$1, _r$2, _tuple, b, cbc$1, iv, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; b = $f.b; cbc$1 = $f.cbc$1; iv = $f.iv; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = b.BlockSize(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((iv.$length === _r))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((iv.$length === _r))) { */ case 1:
  �			$panic(new $String("cipher.NewCBCDecrypter: IV length must equal block size"));
    		/* } */ case 2:
  �		_tuple = $assertType(b, cbcDecAble, true);
		cbc$1 = _tuple[0];
		ok = _tuple[1];
  �		/* */ if (ok) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (ok) { */ case 4:
  			_r$1 = cbc$1.NewCBCDecrypter(iv); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 7; case 7: return $24r;
    		/* } */ case 5:
  B		_r$2 = newCBC(b, iv); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = ($pointerOfStructConversion(_r$2, ptrType$1));
		$s = 9; case 9: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCBCDecrypter }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.b = b; $f.cbc$1 = cbc$1; $f.iv = iv; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCBCDecrypter = NewCBCDecrypter;
NewCBCDecryptercrypto/cipher.NewCBCDecryptercrypto/cipher.cbcDecAblecrypto/cipher.cbcDecryptercrypto/cipher.newCBCcrypto/cipher.ptrType$1 '(*crypto/cipher.cbcDecrypter).BlockSize ��	cbcDecrypter.ptr.prototype.BlockSize = function() {
		var x;
		x = this;
  �		return x.blockSize;
    	};
	cbcDecrypter.prototype.BlockSize = function() { return this.$val.BlockSize(); };
cbcDecryptercrypto/cipher.cbcDecrypter )(*crypto/cipher.cbcDecrypter).CryptBlocks �	j	cbcDecrypter.ptr.prototype.CryptBlocks = function(dst, src) {
		var _r, _tmp, _tmp$1, dst, end, prev, src, start, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; dst = $f.dst; end = $f.end; prev = $f.prev; src = $f.src; start = $f.start; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (!(((_r = src.$length % x.blockSize, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
  			$panic(new $String("crypto/cipher: input not full blocks"));
    		}
    		if (dst.$length < src.$length) {
  O			$panic(new $String("crypto/cipher: output smaller than input"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  �			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
    		if (src.$length === 0) {
  �			$s = -1; return;
    		}
  �		end = src.$length;
  �		start = end - x.blockSize >> 0;
  �		prev = start - x.blockSize >> 0;
  H		$copySlice(x.tmp, $subslice(src, start, end));
  �		/* while (true) { */ case 1:
			/* if (!(start > 0)) { break; } */ if(!(start > 0)) { $s = 2; continue; }
  �			$r = x.b.Decrypt($subslice(dst, start, end), $subslice(src, start, end)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			xorBytes($subslice(dst, start, end), $subslice(dst, start, end), $subslice(src, prev, start));
  
			end = start;
  			start = prev;
  '			prev = prev - (x.blockSize) >> 0;
    		$s = 1; continue;
		case 2:
  }		$r = x.b.Decrypt($subslice(dst, start, end), $subslice(src, start, end)); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		xorBytes($subslice(dst, start, end), $subslice(dst, start, end), x.iv);
  		_tmp = x.tmp;
		_tmp$1 = x.iv;
		x.iv = _tmp;
		x.tmp = _tmp$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cbcDecrypter.ptr.prototype.CryptBlocks }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.dst = dst; $f.end = end; $f.prev = prev; $f.src = src; $f.start = start; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cbcDecrypter.prototype.CryptBlocks = function(dst, src) { return this.$val.CryptBlocks(dst, src); };
cbcDecryptercrypto/cipher.cbcDecryptercrypto/cipher.xorBytes%crypto/internal/subtle.InexactOverlap #(*crypto/cipher.cbcDecrypter).SetIV �4	cbcDecrypter.ptr.prototype.SetIV = function(iv) {
		var iv, x;
		x = this;
    		if (!((iv.$length === x.iv.$length))) {
  x			$panic(new $String("cipher: incorrect length IV"));
    		}
  �		$copySlice(x.iv, iv);
    	};
	cbcDecrypter.prototype.SetIV = function(iv) { return this.$val.SetIV(iv); };
cbcDecryptercrypto/cipher.cbcDecrypter !(*crypto/cipher.cfb).XORKeyStream ��	cfb.ptr.prototype.XORKeyStream = function(dst, src) {
		var dst, n, src, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; n = $f.n; src = $f.src; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (dst.$length < src.$length) {
  N			$panic(new $String("crypto/cipher: output smaller than input"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  �			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
  �		/* while (true) { */ case 1:
			/* if (!(src.$length > 0)) { break; } */ if(!(src.$length > 0)) { $s = 2; continue; }
  �			/* */ if (x.outUsed === x.out.$length) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (x.outUsed === x.out.$length) { */ case 3:
  				$r = x.b.Encrypt(x.out, x.next); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  <				x.outUsed = 0;
    			/* } */ case 4:
    			if (x.decrypt) {
  				$copySlice($subslice(x.next, x.outUsed), src);
    			}
  >			n = xorBytes(dst, src, $subslice(x.out, x.outUsed));
    			if (!x.decrypt) {
  ~				$copySlice($subslice(x.next, x.outUsed), dst);
    			}
  �			dst = $subslice(dst, n);
  �			src = $subslice(src, n);
  �			x.outUsed = x.outUsed + (n) >> 0;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cfb.ptr.prototype.XORKeyStream }; } $f.dst = dst; $f.n = n; $f.src = src; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	cfb.prototype.XORKeyStream = function(dst, src) { return this.$val.XORKeyStream(dst, src); };
cfbcrypto/cipher.cfbcrypto/cipher.xorBytes%crypto/internal/subtle.InexactOverlap crypto/cipher.NewCFBEncryptercrypto/cipherNewCFBEncrypter NewCFBEncrypter��	NewCFBEncrypter = function(block, iv) {
		var $24r, _r, block, iv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; block = $f.block; iv = $f.iv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = newCFB(block, iv, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCFBEncrypter }; } $f.$24r = $24r; $f._r = _r; $f.block = block; $f.iv = iv; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCFBEncrypter = NewCFBEncrypter;
NewCFBEncryptercrypto/cipher.NewCFBEncryptercrypto/cipher.newCFB crypto/cipher.NewCFBDecryptercrypto/cipherNewCFBDecrypter NewCFBDecrypter��	NewCFBDecrypter = function(block, iv) {
		var $24r, _r, block, iv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; block = $f.block; iv = $f.iv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = newCFB(block, iv, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCFBDecrypter }; } $f.$24r = $24r; $f._r = _r; $f.block = block; $f.iv = iv; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCFBDecrypter = NewCFBDecrypter;
NewCFBDecryptercrypto/cipher.NewCFBDecryptercrypto/cipher.newCFB crypto/cipher.newCFBcrypto/ciphernewCFB newCFB�	newCFB = function(block, iv, decrypt) {
		var _r, block, blockSize, decrypt, iv, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; block = $f.block; blockSize = $f.blockSize; decrypt = $f.decrypt; iv = $f.iv; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		_r = block.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		blockSize = _r;
    		if (!((iv.$length === blockSize))) {
  �			$panic(new $String("cipher.newCFB: IV length must equal block size"));
    		}
  �		x = new cfb.ptr(block, $makeSlice(sliceType$1, blockSize), $makeSlice(sliceType$1, blockSize), blockSize, decrypt);
  Z		$copySlice(x.next, iv);
  m		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newCFB }; } $f._r = _r; $f.block = block; $f.blockSize = blockSize; $f.decrypt = decrypt; $f.iv = iv; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
newCFBcrypto/cipher.cfbcrypto/cipher.newCFBcrypto/cipher.sliceType$1 crypto/cipher.dupcrypto/cipherdup dup��	dup = function(p) {
		var p, q;
  #A		q = $makeSlice(sliceType$1, p.$length);
  #\		$copySlice(q, p);
  #h		return q;
    	};
dupcrypto/cipher.dupcrypto/cipher.sliceType$1 crypto/cipher.NewCTRcrypto/cipherNewCTR NewCTR�`	NewCTR = function(block, iv) {
		var $24r, _r, _r$1, _r$2, _r$3, _tuple, block, bufSize, ctr$1, iv, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; block = $f.block; bufSize = $f.bufSize; ctr$1 = $f.ctr$1; iv = $f.iv; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  '`		_tuple = $assertType(block, ctrAble, true);
		ctr$1 = _tuple[0];
		ok = _tuple[1];
  ']		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
  '�			_r = ctr$1.NewCTR(iv); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  '�		_r$1 = block.BlockSize(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (!((iv.$length === _r$1))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!((iv.$length === _r$1))) { */ case 5:
  '�			$panic(new $String("cipher.NewCTR: IV length must equal block size"));
    		/* } */ case 6:
  '�		bufSize = 512;
  (		_r$2 = block.BlockSize(); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		/* */ if (bufSize < _r$2) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if (bufSize < _r$2) { */ case 8:
  (=			_r$3 = block.BlockSize(); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			bufSize = _r$3;
    		/* } */ case 9:
  (]		$s = -1; return new ctr.ptr(block, dup(iv), $makeSlice(sliceType$1, 0, bufSize), 0);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewCTR }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f.block = block; $f.bufSize = bufSize; $f.ctr$1 = ctr$1; $f.iv = iv; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewCTR = NewCTR;
NewCTRcrypto/cipher.NewCTRcrypto/cipher.ctrcrypto/cipher.ctrAblecrypto/cipher.dupcrypto/cipher.sliceType$1 (*crypto/cipher.ctr).refill �$	ctr.ptr.prototype.refill = function() {
		var _r, bs, i, remain, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; bs = $f.bs; i = $f.i; remain = $f.remain; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  (�		remain = x.out.$length - x.outUsed >> 0;
  )		$copySlice(x.out, $subslice(x.out, x.outUsed));
  )%		x.out = $subslice(x.out, 0, x.out.$capacity);
  )A		_r = x.b.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		bs = _r;
  )X		/* while (true) { */ case 2:
			/* if (!(remain <= (x.out.$length - bs >> 0))) { break; } */ if(!(remain <= (x.out.$length - bs >> 0))) { $s = 3; continue; }
  )x			$r = x.b.Encrypt($subslice(x.out, remain), x.ctr); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  )�			remain = remain + (bs) >> 0;
  )�			i = x.ctr.$length - 1 >> 0;
			while (true) {
				if (!(i >= 0)) { break; }
  )�				(x$2 = x.ctr, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i] = ((x$1 = x.ctr, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i])) + (1) << 24 >>> 24)));
    				if (!(((x$3 = x.ctr, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i])) === 0))) {
  *					break;
    				}
  )�				i = i - (1) >> 0;
    			}
    		$s = 2; continue;
		case 3:
  *&		x.out = $subslice(x.out, 0, remain);
  *>		x.outUsed = 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ctr.ptr.prototype.refill }; } $f._r = _r; $f.bs = bs; $f.i = i; $f.remain = remain; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	ctr.prototype.refill = function() { return this.$val.refill(); };
ctrrefill~crypto/cipher.ctr !(*crypto/cipher.ctr).XORKeyStream ��	ctr.ptr.prototype.XORKeyStream = function(dst, src) {
		var _r, dst, n, src, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; dst = $f.dst; n = $f.n; src = $f.src; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (dst.$length < src.$length) {
  *�			$panic(new $String("crypto/cipher: output smaller than input"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  +			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
  +4		/* while (true) { */ case 1:
			/* if (!(src.$length > 0)) { break; } */ if(!(src.$length > 0)) { $s = 2; continue; }
  +I			_r = x.b.BlockSize(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (x.outUsed >= (x.out.$length - _r >> 0)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (x.outUsed >= (x.out.$length - _r >> 0)) { */ case 3:
  +y				$r = x.refill(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 4:
  +�			n = xorBytes(dst, src, $subslice(x.out, x.outUsed));
  +�			dst = $subslice(dst, n);
  +�			src = $subslice(src, n);
  +�			x.outUsed = x.outUsed + (n) >> 0;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ctr.ptr.prototype.XORKeyStream }; } $f._r = _r; $f.dst = dst; $f.n = n; $f.src = src; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ctr.prototype.XORKeyStream = function(dst, src) { return this.$val.XORKeyStream(dst, src); };
ctrcrypto/cipher.ctrcrypto/cipher.refill~crypto/cipher.xorBytes%crypto/internal/subtle.InexactOverlap crypto/cipher.NewGCMcrypto/cipherNewGCM NewGCM��	NewGCM = function(cipher) {
		var $24r, _r, cipher, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cipher = $f.cipher; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  9O		_r = newGCMWithNonceAndTagSize(cipher, 12, 16); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewGCM }; } $f.$24r = $24r; $f._r = _r; $f.cipher = cipher; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewGCM = NewGCM;
NewGCMcrypto/cipher.NewGCM'crypto/cipher.newGCMWithNonceAndTagSize !crypto/cipher.NewGCMWithNonceSizecrypto/cipherNewGCMWithNonceSize NewGCMWithNonceSize�	NewGCMWithNonceSize = function(cipher, size) {
		var $24r, _r, cipher, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cipher = $f.cipher; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ;`		_r = newGCMWithNonceAndTagSize(cipher, size, 16); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewGCMWithNonceSize }; } $f.$24r = $24r; $f._r = _r; $f.cipher = cipher; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewGCMWithNonceSize = NewGCMWithNonceSize;
NewGCMWithNonceSize!crypto/cipher.NewGCMWithNonceSize'crypto/cipher.newGCMWithNonceAndTagSize crypto/cipher.NewGCMWithTagSizecrypto/cipherNewGCMWithTagSize NewGCMWithTagSize�	NewGCMWithTagSize = function(cipher, tagSize) {
		var $24r, _r, cipher, tagSize, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; cipher = $f.cipher; tagSize = $f.tagSize; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  =j		_r = newGCMWithNonceAndTagSize(cipher, 12, tagSize); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewGCMWithTagSize }; } $f.$24r = $24r; $f._r = _r; $f.cipher = cipher; $f.tagSize = tagSize; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewGCMWithTagSize = NewGCMWithTagSize;
NewGCMWithTagSizecrypto/cipher.NewGCMWithTagSize'crypto/cipher.newGCMWithNonceAndTagSize 'crypto/cipher.newGCMWithNonceAndTagSizecrypto/ciphernewGCMWithNonceAndTagSize newGCMWithNonceAndTagSize��	newGCMWithNonceAndTagSize = function(cipher, nonceSize, tagSize) {
		var $24r, _q, _r, _r$1, _tuple, cipher, cipher$1, g, i, key, nonceSize, ok, tagSize, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; cipher = $f.cipher; cipher$1 = $f.cipher$1; g = $f.g; i = $f.i; key = $f.key; nonceSize = $f.nonceSize; ok = $f.ok; tagSize = $f.tagSize; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = [x];
    		if (tagSize < 12 || tagSize > 16) {
  >H			$s = -1; return [$ifaceNil, errors.New("cipher: incorrect tag size given to GCM")];
    		}
    		if (nonceSize <= 0) {
  >�			$s = -1; return [$ifaceNil, errors.New("cipher: the nonce can't have zero length, or the security of the key will be immediately compromised")];
    		}
  ?,		_tuple = $assertType(cipher, gcmAble, true);
		cipher$1 = _tuple[0];
		ok = _tuple[1];
  ?)		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
  ?S			_r = cipher$1.NewGCM(nonceSize, tagSize); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  ?�		_r$1 = cipher.BlockSize(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (!((_r$1 === 16))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!((_r$1 === 16))) { */ case 5:
  ?�			$s = -1; return [$ifaceNil, errors.New("cipher: NewGCM requires 128-bit block cipher")];
    		/* } */ case 6:
  ?�		key = arrayType.zero();
  @		$r = cipher.Encrypt(new sliceType$1(key), new sliceType$1(key)); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  @4		g = new gcm.ptr(cipher, nonceSize, tagSize, arrayType$1.zero());
  A�		x[0] = new gcmFieldElement.ptr($clone(binary.BigEndian, binary.bigEndian).Uint64($subslice(new sliceType$1(key), 0, 8)), $clone(binary.BigEndian, binary.bigEndian).Uint64($subslice(new sliceType$1(key), 8)));
  B1		gcmFieldElement.copy((x$1 = g.productTable, x$2 = reverseBits(1), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])), x[0]);
  BZ		i = 2;
		while (true) {
			if (!(i < 16)) { break; }
  Bu			gcmFieldElement.copy((x$5 = g.productTable, x$6 = reverseBits(i), ((x$6 < 0 || x$6 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[x$6])), gcmDouble((x$3 = g.productTable, x$4 = reverseBits((_q = i / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))), ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4]))));
  B�			gcmFieldElement.copy((x$9 = g.productTable, x$10 = reverseBits(i + 1 >> 0), ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10])), gcmAdd((x$7 = g.productTable, x$8 = reverseBits(i), ((x$8 < 0 || x$8 >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[x$8])), x[0]));
  Bj			i = i + (2) >> 0;
    		}
  C		$s = -1; return [g, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newGCMWithNonceAndTagSize }; } $f.$24r = $24r; $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.cipher = cipher; $f.cipher$1 = cipher$1; $f.g = g; $f.i = i; $f.key = key; $f.nonceSize = nonceSize; $f.ok = ok; $f.tagSize = tagSize; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
newGCMWithNonceAndTagSizecrypto/cipher.arrayTypecrypto/cipher.arrayType$1crypto/cipher.gcmcrypto/cipher.gcmAblecrypto/cipher.gcmAddcrypto/cipher.gcmDoublecrypto/cipher.gcmFieldElement'crypto/cipher.newGCMWithNonceAndTagSizecrypto/cipher.reverseBitscrypto/cipher.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian
errors.New (*crypto/cipher.gcm).NonceSize ��	gcm.ptr.prototype.NonceSize = function() {
		var g;
		g = this;
  C�		return g.nonceSize;
    	};
	gcm.prototype.NonceSize = function() { return this.$val.NonceSize(); };
gcmcrypto/cipher.gcm (*crypto/cipher.gcm).Overhead ��	gcm.ptr.prototype.Overhead = function() {
		var g;
		g = this;
  D2		return g.tagSize;
    	};
	gcm.prototype.Overhead = function() { return this.$val.Overhead(); };
gcmcrypto/cipher.gcm (*crypto/cipher.gcm).Seal ��	gcm.ptr.prototype.Seal = function(dst, nonce, plaintext, data) {
		var _r, _tmp, _tmp$1, _tuple, counter, data, dst, g, nonce, out, plaintext, ret, tag, tagMask, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; counter = $f.counter; data = $f.data; dst = $f.dst; g = $f.g; nonce = $f.nonce; out = $f.out; plaintext = $f.plaintext; ret = $f.ret; tag = $f.tag; tagMask = $f.tagMask; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		counter = [counter];
		tagMask = [tagMask];
		g = this;
    		if (!((nonce.$length === g.nonceSize))) {
  D�			$panic(new $String("crypto/cipher: incorrect nonce length given to GCM"));
    		}
  D�		_r = g.cipher.BlockSize(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if ((x = (new $Uint64(0, plaintext.$length)), x$1 = $mul64(new $Uint64(0, 4294967294), (new $Uint64(0, _r))), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low > x$1.$low)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x = (new $Uint64(0, plaintext.$length)), x$1 = $mul64(new $Uint64(0, 4294967294), (new $Uint64(0, _r))), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low > x$1.$low)))) { */ case 1:
  E1			$panic(new $String("crypto/cipher: message too large for GCM"));
    		/* } */ case 2:
  Eh		_tuple = sliceForAppend(dst, plaintext.$length + g.tagSize >> 0);
		ret = _tuple[0];
		out = _tuple[1];
    		if (subtle.InexactOverlap(out, plaintext)) {
  E�			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
  F		_tmp = arrayType.zero();
		_tmp$1 = arrayType.zero();
		counter[0] = $clone(_tmp, arrayType);
		tagMask[0] = $clone(_tmp$1, arrayType);
  F4		g.deriveCounter(counter[0], nonce);
  FW		$r = g.cipher.Encrypt(new sliceType$1(tagMask[0]), new sliceType$1(counter[0])); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  F�		gcmInc32(counter[0]);
  F�		$r = g.counterCrypt(out, plaintext, counter[0]); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  F�		tag = arrayType.zero();
  F�		g.auth(new sliceType$1(tag), $subslice(out, 0, plaintext.$length), data, tagMask[0]);
  G		$copySlice($subslice(out, plaintext.$length), new sliceType$1(tag));
  G6		$s = -1; return ret;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gcm.ptr.prototype.Seal }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.counter = counter; $f.data = data; $f.dst = dst; $f.g = g; $f.nonce = nonce; $f.out = out; $f.plaintext = plaintext; $f.ret = ret; $f.tag = tag; $f.tagMask = tagMask; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	gcm.prototype.Seal = function(dst, nonce, plaintext, data) { return this.$val.Seal(dst, nonce, plaintext, data); };
gcm	crypto/cipher.arrayTypecrypto/cipher.auth~crypto/cipher.counterCrypt~crypto/cipher.deriveCounter~crypto/cipher.gcmcrypto/cipher.gcmInc32crypto/cipher.sliceForAppendcrypto/cipher.sliceType$1%crypto/internal/subtle.InexactOverlap (*crypto/cipher.gcm).Open �S	gcm.ptr.prototype.Open = function(dst, nonce, ciphertext, data) {
		var _i, _r, _ref, _tmp, _tmp$1, _tuple, ciphertext, counter, data, dst, expectedTag, g, i, nonce, out, ret, tag, tagMask, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; ciphertext = $f.ciphertext; counter = $f.counter; data = $f.data; dst = $f.dst; expectedTag = $f.expectedTag; g = $f.g; i = $f.i; nonce = $f.nonce; out = $f.out; ret = $f.ret; tag = $f.tag; tagMask = $f.tagMask; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		counter = [counter];
		tagMask = [tagMask];
		g = this;
    		if (!((nonce.$length === g.nonceSize))) {
  G�			$panic(new $String("crypto/cipher: incorrect nonce length given to GCM"));
    		}
    		if (g.tagSize < 12) {
  H�			$panic(new $String("crypto/cipher: incorrect GCM tag size"));
    		}
    		if (ciphertext.$length < g.tagSize) {
  I9			$s = -1; return [sliceType$1.nil, errOpen];
    		}
  IQ		_r = g.cipher.BlockSize(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if ((x = (new $Uint64(0, ciphertext.$length)), x$1 = (x$2 = $mul64(new $Uint64(0, 4294967294), (new $Uint64(0, _r))), x$3 = (new $Uint64(0, g.tagSize)), new $Uint64(x$2.$high + x$3.$high, x$2.$low + x$3.$low)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low > x$1.$low)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x = (new $Uint64(0, ciphertext.$length)), x$1 = (x$2 = $mul64(new $Uint64(0, 4294967294), (new $Uint64(0, _r))), x$3 = (new $Uint64(0, g.tagSize)), new $Uint64(x$2.$high + x$3.$high, x$2.$low + x$3.$low)), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low > x$1.$low)))) { */ case 1:
  I�			$s = -1; return [sliceType$1.nil, errOpen];
    		/* } */ case 2:
  I�		tag = $subslice(ciphertext, (ciphertext.$length - g.tagSize >> 0));
  I�		ciphertext = $subslice(ciphertext, 0, (ciphertext.$length - g.tagSize >> 0));
  J/		_tmp = arrayType.zero();
		_tmp$1 = arrayType.zero();
		counter[0] = $clone(_tmp, arrayType);
		tagMask[0] = $clone(_tmp$1, arrayType);
  JT		g.deriveCounter(counter[0], nonce);
  Jw		$r = g.cipher.Encrypt(new sliceType$1(tagMask[0]), new sliceType$1(counter[0])); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  J�		gcmInc32(counter[0]);
  J�		expectedTag = arrayType.zero();
  J�		g.auth(new sliceType$1(expectedTag), ciphertext, data, tagMask[0]);
  K		_tuple = sliceForAppend(dst, ciphertext.$length);
		ret = _tuple[0];
		out = _tuple[1];
    		if (subtle.InexactOverlap(out, ciphertext)) {
  Kt			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
    		if (!((subtle$1.ConstantTimeCompare($subslice(new sliceType$1(expectedTag), 0, g.tagSize), tag) === 1))) {
  L�			_ref = out;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
  L�				((i < 0 || i >= out.$length) ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + i] = 0);
    				_i++;
			}
  L�			$s = -1; return [sliceType$1.nil, errOpen];
    		}
  L�		$r = g.counterCrypt(out, ciphertext, counter[0]); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  M(		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gcm.ptr.prototype.Open }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.ciphertext = ciphertext; $f.counter = counter; $f.data = data; $f.dst = dst; $f.expectedTag = expectedTag; $f.g = g; $f.i = i; $f.nonce = nonce; $f.out = out; $f.ret = ret; $f.tag = tag; $f.tagMask = tagMask; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	gcm.prototype.Open = function(dst, nonce, ciphertext, data) { return this.$val.Open(dst, nonce, ciphertext, data); };
gcmcrypto/cipher.arrayTypecrypto/cipher.auth~crypto/cipher.counterCrypt~crypto/cipher.deriveCounter~crypto/cipher.errOpencrypto/cipher.gcmcrypto/cipher.gcmInc32crypto/cipher.sliceForAppendcrypto/cipher.sliceType$1%crypto/internal/subtle.InexactOverlap!crypto/subtle.ConstantTimeCompare crypto/cipher.reverseBitscrypto/cipherreverseBits reverseBits��	reverseBits = function(i) {
		var i;
  M�		i = ((((i << 2 >> 0)) & 12)) | ((((i >> 2 >> 0)) & 3));
  M�		i = ((((i << 1 >> 0)) & 10)) | ((((i >> 1 >> 0)) & 5));
  M�		return i;
    	};
reverseBitscrypto/cipher.reverseBits crypto/cipher.gcmAddcrypto/ciphergcmAdd gcmAdd�'	gcmAdd = function(x, y) {
		var x, x$1, x$2, x$3, x$4, y;
  N�		return new gcmFieldElement.ptr((x$1 = x.low, x$2 = y.low, new $Uint64(x$1.$high ^ x$2.$high, (x$1.$low ^ x$2.$low) >>> 0)), (x$3 = x.high, x$4 = y.high, new $Uint64(x$3.$high ^ x$4.$high, (x$3.$low ^ x$4.$low) >>> 0)));
    	};
gcmAddcrypto/cipher.gcmAddcrypto/cipher.gcmFieldElement crypto/cipher.gcmDoublecrypto/cipher	gcmDouble 	gcmDouble��	gcmDouble = function(x) {
		var double$1, msbSet, x, x$1, x$2, x$3, x$4, x$5, x$6;
		double$1 = new gcmFieldElement.ptr(new $Uint64(0, 0), new $Uint64(0, 0));
  Oj		msbSet = (x$1 = (x$2 = x.high, new $Uint64(x$2.$high & 0, (x$2.$low & 1) >>> 0)), (x$1.$high === 0 && x$1.$low === 1));
  O�		double$1.high = $shiftRightUint64(x.high, 1);
  O�		double$1.high = (x$3 = double$1.high, x$4 = $shiftLeft64(x.low, 63), new $Uint64(x$3.$high | x$4.$high, (x$3.$low | x$4.$low) >>> 0));
  P 		double$1.low = $shiftRightUint64(x.low, 1);
    		if (msbSet) {
  Q�			double$1.low = (x$5 = double$1.low, x$6 = new $Uint64(3774873600, 0), new $Uint64(x$5.$high ^ x$6.$high, (x$5.$low ^ x$6.$low) >>> 0));
    		}
  Q�		return double$1;
    	};
	gcmDoublecrypto/cipher.gcmDoublecrypto/cipher.gcmFieldElement (*crypto/cipher.gcm).mul ��	gcm.ptr.prototype.mul = function(y) {
		var g, i, j, msw, t, word, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, z;
		g = this;
  S!		z = new gcmFieldElement.ptr(new $Uint64(0, 0), new $Uint64(0, 0));
  S9		i = 0;
		while (true) {
			if (!(i < 2)) { break; }
  SP			word = y.high;
    			if (i === 1) {
  Sp				word = y.low;
    			}
  S�			j = 0;
			while (true) {
				if (!(j < 64)) { break; }
  T				msw = (x = z.high, new $Uint64(x.$high & 0, (x.$low & 15) >>> 0));
  T&				z.high = $shiftRightUint64(z.high, (4));
  T6				z.high = (x$1 = z.high, x$2 = $shiftLeft64(z.low, 60), new $Uint64(x$1.$high | x$2.$high, (x$1.$low | x$2.$low) >>> 0));
  TO				z.low = $shiftRightUint64(z.low, (4));
  T^				z.low = (x$3 = z.low, x$4 = $shiftLeft64((new $Uint64(0, (($flatten64(msw) < 0 || $flatten64(msw) >= gcmReductionTable.$length) ? ($throwRuntimeError("index out of range"), undefined) : gcmReductionTable.$array[gcmReductionTable.$offset + $flatten64(msw)]))), 48), new $Uint64(x$3.$high ^ x$4.$high, (x$3.$low ^ x$4.$low) >>> 0));
  U				t = (x$5 = g.productTable, x$6 = new $Uint64(word.$high & 0, (word.$low & 15) >>> 0), (($flatten64(x$6) < 0 || $flatten64(x$6) >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[$flatten64(x$6)]));
  U0				z.low = (x$7 = z.low, x$8 = t.low, new $Uint64(x$7.$high ^ x$8.$high, (x$7.$low ^ x$8.$low) >>> 0));
  UB				z.high = (x$9 = z.high, x$10 = t.high, new $Uint64(x$9.$high ^ x$10.$high, (x$9.$low ^ x$10.$low) >>> 0));
  UV				word = $shiftRightUint64(word, (4));
  T				j = j + (4) >> 0;
    			}
  SH			i = i + (1) >> 0;
    		}
  Uj		gcmFieldElement.copy(y, z);
    	};
	gcm.prototype.mul = function(y) { return this.$val.mul(y); };
gcmmul~crypto/cipher.gcmcrypto/cipher.gcmFieldElementcrypto/cipher.gcmReductionTable !(*crypto/cipher.gcm).updateBlocks ��	gcm.ptr.prototype.updateBlocks = function(y, blocks) {
		var blocks, g, x, x$1, x$2, x$3, y;
		g = this;
  VL		while (true) {
			if (!(blocks.$length > 0)) { break; }
  Vd			y.low = (x = y.low, x$1 = $clone(binary.BigEndian, binary.bigEndian).Uint64(blocks), new $Uint64(x.$high ^ x$1.$high, (x.$low ^ x$1.$low) >>> 0));
  V�			y.high = (x$2 = y.high, x$3 = $clone(binary.BigEndian, binary.bigEndian).Uint64($subslice(blocks, 8)), new $Uint64(x$2.$high ^ x$3.$high, (x$2.$low ^ x$3.$low) >>> 0));
  V�			g.mul(y);
  V�			blocks = $subslice(blocks, 16);
    		}
    	};
	gcm.prototype.updateBlocks = function(y, blocks) { return this.$val.updateBlocks(y, blocks); };
gcmupdateBlocks~crypto/cipher.gcmcrypto/cipher.mul~encoding/binary.BigEndianencoding/binary.bigEndian (*crypto/cipher.gcm).update �!	gcm.ptr.prototype.update = function(y, data) {
		var data, fullBlocks, g, partialBlock, y;
		g = this;
  W�		fullBlocks = ((data.$length >> 4 >> 0)) << 4 >> 0;
  W�		g.updateBlocks(y, $subslice(data, 0, fullBlocks));
    		if (!((data.$length === fullBlocks))) {
  X,			partialBlock = arrayType.zero();
  XN			$copySlice(new sliceType$1(partialBlock), $subslice(data, fullBlocks));
  Xy			g.updateBlocks(y, new sliceType$1(partialBlock));
    		}
    	};
	gcm.prototype.update = function(y, data) { return this.$val.update(y, data); };
gcmupdate~crypto/cipher.arrayTypecrypto/cipher.gcmcrypto/cipher.sliceType$1crypto/cipher.updateBlocks~ crypto/cipher.gcmInc32crypto/ciphergcmInc32 gcmInc32�	gcmInc32 = function(counterBlock) {
		var counterBlock, ctr$1;
  Y/		ctr$1 = $subslice(new sliceType$1(counterBlock), 12);
  YZ		$clone(binary.BigEndian, binary.bigEndian).PutUint32(ctr$1, $clone(binary.BigEndian, binary.bigEndian).Uint32(ctr$1) + 1 >>> 0);
    	};
gcmInc32crypto/cipher.gcmInc32crypto/cipher.sliceType$1encoding/binary.BigEndianencoding/binary.bigEndian crypto/cipher.sliceForAppendcrypto/ciphersliceForAppend sliceForAppend��	sliceForAppend = function(in$1, n) {
		var head, in$1, n, tail, total;
		head = sliceType$1.nil;
		tail = sliceType$1.nil;
  [		total = in$1.$length + n >> 0;
    		if (in$1.$capacity >= total) {
  [@			head = $subslice(in$1, 0, total);
    		} else {
  [^			head = $makeSlice(sliceType$1, total);
  [{			$copySlice(head, in$1);
    		}
  [�		tail = $subslice(head, in$1.$length);
  [�		return [head, tail];
    	};
sliceForAppendcrypto/cipher.sliceForAppendcrypto/cipher.sliceType$1 !(*crypto/cipher.gcm).counterCrypt ��	gcm.ptr.prototype.counterCrypt = function(out, in$1, counter) {
		var counter, g, in$1, mask, out, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; counter = $f.counter; g = $f.g; in$1 = $f.in$1; mask = $f.mask; out = $f.out; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		g = this;
  \?		mask = arrayType.zero();
  \Y		/* while (true) { */ case 1:
			/* if (!(in$1.$length >= 16)) { break; } */ if(!(in$1.$length >= 16)) { $s = 2; continue; }
  \y			$r = g.cipher.Encrypt(new sliceType$1(mask), new sliceType$1(counter)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  \�			gcmInc32(counter);
  \�			xorWords(out, in$1, new sliceType$1(mask));
  \�			out = $subslice(out, 16);
  \�			in$1 = $subslice(in$1, 16);
    		$s = 1; continue;
		case 2:
  ]
		/* */ if (in$1.$length > 0) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (in$1.$length > 0) { */ case 4:
  ]			$r = g.cipher.Encrypt(new sliceType$1(mask), new sliceType$1(counter)); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ]E			gcmInc32(counter);
  ]Y			xorBytes(out, in$1, new sliceType$1(mask));
    		/* } */ case 5:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: gcm.ptr.prototype.counterCrypt }; } $f.counter = counter; $f.g = g; $f.in$1 = in$1; $f.mask = mask; $f.out = out; $f.$s = $s; $f.$r = $r; return $f;
	};
	gcm.prototype.counterCrypt = function(out, in$1, counter) { return this.$val.counterCrypt(out, in$1, counter); };
gcmcounterCrypt~crypto/cipher.arrayTypecrypto/cipher.gcmcrypto/cipher.gcmInc32crypto/cipher.sliceType$1crypto/cipher.xorBytescrypto/cipher.xorWords "(*crypto/cipher.gcm).deriveCounter �u	gcm.ptr.prototype.deriveCounter = function(counter, nonce) {
		var counter, g, nonce, x, x$1, y;
		g = this;
    		if (nonce.$length === 12) {
  `6			$copySlice(new sliceType$1(counter), nonce);
  `P			counter.nilCheck, counter[15] = 1;
    		} else {
  `|			y = new gcmFieldElement.ptr(new $Uint64(0, 0), new $Uint64(0, 0));
  `�			g.update(y, nonce);
  `�			y.high = (x = y.high, x$1 = $mul64((new $Uint64(0, nonce.$length)), new $Uint64(0, 8)), new $Uint64(x.$high ^ x$1.$high, (x.$low ^ x$1.$low) >>> 0));
  `�			g.mul(y);
  `�			$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(counter), 0, 8), y.low);
  a			$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(new sliceType$1(counter), 8), y.high);
    		}
    	};
	gcm.prototype.deriveCounter = function(counter, nonce) { return this.$val.deriveCounter(counter, nonce); };
gcmderiveCounter~crypto/cipher.gcmcrypto/cipher.gcmFieldElementcrypto/cipher.mul~crypto/cipher.sliceType$1crypto/cipher.update~encoding/binary.BigEndianencoding/binary.bigEndian (*crypto/cipher.gcm).auth ��	gcm.ptr.prototype.auth = function(out, ciphertext, additionalData, tagMask) {
		var additionalData, ciphertext, g, out, tagMask, x, x$1, x$2, x$3, y;
		g = this;
  b		y = new gcmFieldElement.ptr(new $Uint64(0, 0), new $Uint64(0, 0));
  b!		g.update(y, additionalData);
  b?		g.update(y, ciphertext);
  bZ		y.low = (x = y.low, x$1 = $mul64((new $Uint64(0, additionalData.$length)), new $Uint64(0, 8)), new $Uint64(x.$high ^ x$1.$high, (x.$low ^ x$1.$low) >>> 0));
  b�		y.high = (x$2 = y.high, x$3 = $mul64((new $Uint64(0, ciphertext.$length)), new $Uint64(0, 8)), new $Uint64(x$2.$high ^ x$3.$high, (x$2.$low ^ x$3.$low) >>> 0));
  b�		g.mul(y);
  b�		$clone(binary.BigEndian, binary.bigEndian).PutUint64(out, y.low);
  b�		$clone(binary.BigEndian, binary.bigEndian).PutUint64($subslice(out, 8), y.high);
  c		xorWords(out, out, new sliceType$1(tagMask));
    	};
	gcm.prototype.auth = function(out, ciphertext, additionalData, tagMask) { return this.$val.auth(out, ciphertext, additionalData, tagMask); };
gcmauth~crypto/cipher.gcmcrypto/cipher.gcmFieldElementcrypto/cipher.mul~crypto/cipher.sliceType$1crypto/cipher.update~crypto/cipher.xorWordsencoding/binary.BigEndianencoding/binary.bigEndian !(crypto/cipher.StreamReader).Read �=	StreamReader.ptr.prototype.Read = function(dst) {
		var _r, _tuple, dst, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; dst = $f.dst; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  eL		_r = r.R.Read(dst); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  ed		$r = r.S.XORKeyStream($subslice(dst, 0, n), $subslice(dst, 0, n)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  e�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: StreamReader.ptr.prototype.Read }; } $f._r = _r; $f._tuple = _tuple; $f.dst = dst; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	StreamReader.prototype.Read = function(dst) { return this.$val.Read(dst); };
StreamReadercrypto/cipher.StreamReader "(crypto/cipher.StreamWriter).Write ��	StreamWriter.ptr.prototype.Write = function(src) {
		var _r, _tuple, c, err, n, src, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; c = $f.c; err = $f.err; n = $f.n; src = $f.src; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		w = this;
  gb		c = $makeSlice(sliceType$1, src.$length);
  g		$r = w.S.XORKeyStream(c, src); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  g�		_r = w.W.Write(c); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (!((n === src.$length)) && $interfaceIsEqual(err, $ifaceNil)) {
  g�			err = io.ErrShortWrite;
    		}
  h		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: StreamWriter.ptr.prototype.Write }; } $f._r = _r; $f._tuple = _tuple; $f.c = c; $f.err = err; $f.n = n; $f.src = src; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	StreamWriter.prototype.Write = function(src) { return this.$val.Write(src); };
StreamWritercrypto/cipher.StreamWritercrypto/cipher.sliceType$1io.ErrShortWrite "(crypto/cipher.StreamWriter).Close �1	StreamWriter.ptr.prototype.Close = function() {
		var $24r, _r, _tuple, c, ok, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; c = $f.c; ok = $f.ok; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  h�		_tuple = $assertType(w.W, io.Closer, true);
		c = _tuple[0];
		ok = _tuple[1];
  h�		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
  h�			_r = c.Close(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  h�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: StreamWriter.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.c = c; $f.ok = ok; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	StreamWriter.prototype.Close = function() { return this.$val.Close(); };
StreamWritercrypto/cipher.StreamWriter	io.Closer crypto/cipher.NewOFBcrypto/cipherNewOFB NewOFB�Y	NewOFB = function(b, iv) {
		var _r, b, blockSize, bufSize, iv, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; blockSize = $f.blockSize; bufSize = $f.bufSize; iv = $f.iv; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  k(		_r = b.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		blockSize = _r;
    		if (!((iv.$length === blockSize))) {
  k`			$panic(new $String("cipher.NewOFB: IV length must equal block size"));
    		}
  k�		bufSize = 512;
    		if (bufSize < blockSize) {
  k�			bufSize = blockSize;
    		}
  k�		x = new ofb.ptr(b, $makeSlice(sliceType$1, blockSize), $makeSlice(sliceType$1, 0, bufSize), 0);
  la		$copySlice(x.cipher, iv);
  lu		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewOFB }; } $f._r = _r; $f.b = b; $f.blockSize = blockSize; $f.bufSize = bufSize; $f.iv = iv; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewOFB = NewOFB;
NewOFBcrypto/cipher.NewOFBcrypto/cipher.ofbcrypto/cipher.sliceType$1 (*crypto/cipher.ofb).refill ��	ofb.ptr.prototype.refill = function() {
		var _r, bs, remain, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; bs = $f.bs; remain = $f.remain; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  l�		_r = x.b.BlockSize(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		bs = _r;
  l�		remain = x.out.$length - x.outUsed >> 0;
    		if (remain > x.outUsed) {
  l�			$s = -1; return;
    		}
  l�		$copySlice(x.out, $subslice(x.out, x.outUsed));
  m		x.out = $subslice(x.out, 0, x.out.$capacity);
  m5		/* while (true) { */ case 2:
			/* if (!(remain < (x.out.$length - bs >> 0))) { break; } */ if(!(remain < (x.out.$length - bs >> 0))) { $s = 3; continue; }
  mT			$r = x.b.Encrypt(x.cipher, x.cipher); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  mv			$copySlice($subslice(x.out, remain), x.cipher);
  m�			remain = remain + (bs) >> 0;
    		$s = 2; continue;
		case 3:
  m�		x.out = $subslice(x.out, 0, remain);
  m�		x.outUsed = 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ofb.ptr.prototype.refill }; } $f._r = _r; $f.bs = bs; $f.remain = remain; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ofb.prototype.refill = function() { return this.$val.refill(); };
ofbrefill~crypto/cipher.ofb !(*crypto/cipher.ofb).XORKeyStream ��	ofb.ptr.prototype.XORKeyStream = function(dst, src) {
		var _r, dst, n, src, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; dst = $f.dst; n = $f.n; src = $f.src; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
    		if (dst.$length < src.$length) {
  n			$panic(new $String("crypto/cipher: output smaller than input"));
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  n�			$panic(new $String("crypto/cipher: invalid buffer overlap"));
    		}
  n�		/* while (true) { */ case 1:
			/* if (!(src.$length > 0)) { break; } */ if(!(src.$length > 0)) { $s = 2; continue; }
  n�			_r = x.b.BlockSize(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (x.outUsed >= (x.out.$length - _r >> 0)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (x.outUsed >= (x.out.$length - _r >> 0)) { */ case 3:
  n�				$r = x.refill(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 4:
  o			n = xorBytes(dst, src, $subslice(x.out, x.outUsed));
  o9			dst = $subslice(dst, n);
  oI			src = $subslice(src, n);
  oY			x.outUsed = x.outUsed + (n) >> 0;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ofb.ptr.prototype.XORKeyStream }; } $f._r = _r; $f.dst = dst; $f.n = n; $f.src = src; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ofb.prototype.XORKeyStream = function(dst, src) { return this.$val.XORKeyStream(dst, src); };
ofbcrypto/cipher.ofbcrypto/cipher.refill~crypto/cipher.xorBytes%crypto/internal/subtle.InexactOverlap crypto/cipher.xorBytescrypto/cipherxorBytes xorBytes�H	xorBytes = function(dst, a, b) {
		var a, b, dst, n;
  qW		n = a.$length;
    		if (b.$length < n) {
  qv			n = b.$length;
    		}
    		if (n === 0) {
  q�			return 0;
    		}
    		if (false) {
  q�			fastXORBytes(dst, a, b, n);
    		} else {
  r�			safeXORBytes(dst, a, b, n);
    		}
  r�		return n;
    	};
xorBytescrypto/cipher.fastXORBytescrypto/cipher.safeXORBytescrypto/cipher.xorBytes crypto/cipher.fastXORBytescrypto/cipherfastXORBytes fastXORBytes��	fastXORBytes = function(dst, a, b, n) {
		var _q, _r, a, aw, b, bw, dst, dw, i, i$1, n, w, x;
  t�		$unused((x = n - 1 >> 0, ((x < 0 || x >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x])));
  t�		w = (_q = n / 4, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		if (w > 0) {
  t�			dw = dst;
  u			aw = a;
  u,			bw = b;
  uZ			i = 0;
			while (true) {
				if (!(i < w)) { break; }
  ur				((i < 0 || i >= dw.$length) ? ($throwRuntimeError("index out of range"), undefined) : dw.$array[dw.$offset + i] = ((((i < 0 || i >= aw.$length) ? ($throwRuntimeError("index out of range"), undefined) : aw.$array[aw.$offset + i]) ^ ((i < 0 || i >= bw.$length) ? ($throwRuntimeError("index out of range"), undefined) : bw.$array[bw.$offset + i])) >>> 0));
  ui				i = i + (1) >> 0;
    			}
    		}
  u�		i$1 = (n - (_r = n % 4, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) >> 0);
		while (true) {
			if (!(i$1 < n)) { break; }
  u�			((i$1 < 0 || i$1 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i$1] = ((((i$1 < 0 || i$1 >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i$1]) ^ ((i$1 < 0 || i$1 >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i$1])) << 24 >>> 24));
  u�			i$1 = i$1 + (1) >> 0;
    		}
    	};
fastXORBytescrypto/cipher.fastXORBytes crypto/cipher.safeXORBytescrypto/ciphersafeXORBytes safeXORBytes�	safeXORBytes = function(dst, a, b, n) {
		var a, b, dst, i, n;
  vF		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  v]			((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = ((((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i]) ^ ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i])) << 24 >>> 24));
  vU			i = i + (1) >> 0;
    		}
    	};
safeXORBytescrypto/cipher.safeXORBytes crypto/cipher.fastXORWordscrypto/cipherfastXORWords fastXORWords��	fastXORWords = function(dst, a, b) {
		var _q, a, aw, b, bw, dst, dw, i, n;
  w		dw = dst;
  wJ		aw = a;
  ws		bw = b;
  w�		n = (_q = b.$length / 4, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  w�		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  w�			((i < 0 || i >= dw.$length) ? ($throwRuntimeError("index out of range"), undefined) : dw.$array[dw.$offset + i] = ((((i < 0 || i >= aw.$length) ? ($throwRuntimeError("index out of range"), undefined) : aw.$array[aw.$offset + i]) ^ ((i < 0 || i >= bw.$length) ? ($throwRuntimeError("index out of range"), undefined) : bw.$array[bw.$offset + i])) >>> 0));
  w�			i = i + (1) >> 0;
    		}
    	};
fastXORWordscrypto/cipher.fastXORWords crypto/cipher.xorWordscrypto/cipherxorWords xorWords��	xorWords = function(dst, a, b) {
		var a, b, dst;
    		if (false) {
  x�			fastXORWords(dst, a, b);
    		} else {
  x�			safeXORBytes(dst, a, b, b.$length);
    		}
    	};
xorWordscrypto/cipher.fastXORWordscrypto/cipher.safeXORBytescrypto/cipher.xorWords ��{"Base":30975,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/cbc.go","Base":1,"Size":4529,"Lines":[0,55,109,159,160,197,198,272,344,345,378,379,394,395,427,428,446,463,478,496,514,516,517,556,570,586,614,636,678,681,683,684,706,707,781,845,918,941,969,1007,1009,1010,1089,1162,1185,1238,1269,1336,1339,1375,1408,1411,1450,1452,1453,1515,1516,1570,1602,1650,1653,1679,1731,1734,1783,1832,1835,1836,1848,1849,1869,1919,1972,2024,2025,2085,2110,2136,2162,2165,2166,2213,2229,2231,2232,2274,2301,2340,2343,2359,2361,2362,2384,2385,2459,2523,2596,2619,2647,2685,2687,2688,2767,2840,2910,2963,2994,3061,3064,3100,3133,3136,3175,3177,3178,3240,3241,3295,3327,3375,3378,3404,3456,3459,3508,3557,3560,3580,3589,3592,3593,3694,3767,3784,3812,3841,3842,3910,3939,3940,3979,3996,4042,4102,4103,4117,4132,4154,4157,4158,4219,4264,4312,4313,4370,4397,4399,4400,4442,4469,4508,4511,4527],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/cfb.go","Base":4531,"Size":1989,"Lines":[0,55,109,159,160,191,192,207,208,240,241,259,274,290,306,319,320,334,336,337,383,409,461,464,513,562,565,585,616,646,663,667,668,685,733,780,827,868,901,905,950,968,1001,1005,1021,1037,1054,1057,1059,1060,1138,1216,1225,1279,1312,1314,1315,1393,1471,1480,1534,1566,1568,1569,1628,1660,1687,1750,1808,1811,1823,1841,1877,1913,1935,1955,1958,1976,1977,1987],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/cipher.go","Base":6521,"Size":2554,"Lines":[0,55,109,159,160,237,287,357,398,413,414,470,530,588,636,659,706,723,724,778,831,857,858,912,965,991,993,994,1034,1058,1130,1204,1208,1280,1351,1418,1422,1491,1555,1621,1652,1654,1655,1732,1745,1772,1817,1834,1835,1906,1977,2005,2009,2080,2150,2217,2221,2289,2356,2421,2451,2453,2454,2474,2475,2503,2530,2542,2552],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/ctr.go","Base":9076,"Size":2167,"Lines":[0,55,109,159,160,183,184,239,292,347,348,381,382,397,398,430,431,449,464,480,496,509,511,512,541,542,623,703,747,772,798,800,801,877,955,1000,1037,1061,1064,1099,1157,1160,1189,1223,1253,1256,1270,1288,1308,1345,1359,1362,1364,1365,1390,1424,1456,1484,1507,1538,1575,1590,1591,1614,1655,1669,1691,1701,1706,1710,1713,1737,1752,1754,1755,1801,1827,1879,1882,1931,1980,1983,2003,2050,2064,2068,2113,2129,2145,2162,2165],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/gcm.go","Base":11244,"Size":14147,"Lines":[0,55,109,159,160,175,176,185,225,242,261,271,273,274,350,401,459,481,553,567,584,585,654,688,704,705,770,843,914,941,945,1022,1103,1162,1163,1229,1301,1372,1438,1464,1468,1547,1628,1632,1705,1729,1798,1800,1801,1882,1962,2004,2029,2075,2077,2078,2161,2241,2294,2355,2416,2481,2545,2575,2593,2595,2596,2661,2757,2775,2792,2807,2822,2888,2958,2992,2994,2995,3076,3111,3114,3211,3285,3384,3426,3502,3504,3505,3586,3665,3677,3680,3752,3833,3890,3955,4015,4017,4018,4097,4158,4161,4211,4214,4286,4365,4411,4477,4550,4552,4553,4638,4698,4766,4769,4770,4791,4920,4923,4924,4965,5008,5011,5012,5053,5126,5129,5130,5158,5190,5191,5258,5259,5328,5393,5462,5532,5602,5625,5661,5697,5700,5736,5737,5767,5847,5928,5931,5932,5947,5949,5950,5958,5985,6012,6097,6124,6126,6127,6159,6179,6181,6182,6213,6231,6233,6234,6298,6330,6392,6395,6467,6519,6522,6523,6582,6633,6682,6685,6686,6727,6761,6762,6804,6824,6825,6867,6868,6894,6948,6984,6985,6997,6999,7000,7066,7067,7141,7173,7235,7238,7329,7376,7412,7461,7464,7465,7499,7521,7524,7615,7637,7640,7641,7688,7741,7742,7783,7817,7818,7860,7880,7881,7915,7967,7968,8018,8070,8119,8122,8123,8191,8256,8316,8380,8396,8419,8433,8437,8459,8462,8463,8506,8507,8524,8526,8527,8595,8625,8666,8707,8717,8719,8720,8785,8838,8892,8948,8950,8951,9023,9085,9110,9111,9180,9207,9235,9260,9261,9326,9394,9458,9531,9602,9673,9682,9695,9730,9733,9734,9742,9744,9745,9779,9844,9909,9911,9912,9992,10032,10055,10056,10082,10099,10113,10129,10133,10134,10197,10241,10272,10295,10311,10336,10351,10400,10401,10445,10496,10526,10560,10561,10579,10599,10613,10617,10620,10621,10629,10631,10632,10707,10783,10847,10870,10913,10961,10972,11005,11008,11010,11011,11086,11160,11216,11253,11291,11292,11322,11360,11403,11440,11443,11445,11446,11524,11546,11586,11629,11694,11696,11697,11775,11855,11934,12009,12069,12114,12134,12144,12173,12190,12193,12216,12224,12226,12227,12292,12366,12395,12396,12427,12467,12487,12488,12517,12544,12569,12572,12573,12591,12631,12651,12680,12683,12685,12686,12764,12842,12861,12934,13005,13077,13147,13212,13285,13343,13384,13410,13440,13450,13474,13496,13531,13543,13592,13642,13645,13647,13648,13724,13765,13853,13876,13906,13932,13933,13975,14014,14015,14026,14027,14067,14112,14113,14145],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/io.go","Base":25392,"Size":1495,"Lines":[0,55,109,159,160,175,176,188,189,267,298,299,371,426,453,463,476,478,479,539,563,599,607,609,610,682,755,832,897,934,961,973,988,1009,1011,1012,1073,1102,1128,1151,1208,1233,1236,1244,1246,1247,1335,1386,1424,1459,1478,1481,1493],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/ofb.go","Base":26888,"Size":1637,"Lines":[0,55,109,159,160,191,192,207,208,240,241,259,274,290,306,319,321,322,400,480,502,543,571,598,656,659,688,714,736,739,751,765,801,838,852,855,856,876,886,888,889,914,937,971,996,1005,1008,1040,1068,1098,1132,1165,1180,1183,1207,1222,1224,1225,1271,1297,1349,1352,1401,1450,1453,1473,1520,1534,1538,1583,1599,1615,1632,1635],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/cipher/xor_generic.go","Base":28526,"Size":2448,"Lines":[0,55,109,159,160,210,250,251,266,267,276,287,297,299,300,374,450,488,501,518,531,534,547,558,561,562,572,597,626,636,692,746,801,846,864,893,896,906,908,909,957,1096,1097,1163,1197,1259,1304,1336,1350,1351,1370,1382,1426,1468,1510,1537,1562,1566,1569,1570,1611,1634,1637,1639,1640,1702,1747,1773,1796,1799,1801,1802,1878,1930,1968,2011,2052,2093,2117,2143,2167,2170,2172,2173,2249,2315,2349,2373,2399,2409,2443,2446],"Infos":null}]}
 