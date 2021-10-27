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
GoLinkname�� Implementation�� 	Reference��   �(]��vendor/golang.org/x/crypto/hkdfhkdfcrypto/hmacerrorshashio�^i ��hash HashpseudorandomKeyinfoReaderiosecretsaltWriter	BlockSizeResetSizeSumbReadpnerrWritehkdfExpandExtractNew       'F   # * * ,    F   @ *G 1G I    F   \ *c 1c c ,  6'  y =   G   M   R V| ~ T �'  X ]� _ a T �'  e ]� _ a T �k pw+E   �''  �6� hmac"	hmac = $packages["crypto/hmac"];
��    		$r = hmac.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hkdf�	hkdf = $pkg.hkdf = $newType(0, $kindStruct, "hkdf.hkdf", true, "vendor/golang.org/x/crypto/hkdf", false, function(expander_, size_, info_, counter_, prev_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.expander = $ifaceNil;
			this.size = 0;
			this.info = sliceType.nil;
			this.counter = 0;
			this.prev = sliceType.nil;
			this.buf = sliceType.nil;
			return;
		}
		this.expander = expander_;
		this.size = size_;
		this.info = info_;
		this.counter = counter_;
		this.prev = prev_;
		this.buf = buf_;
	});
p	ptrType.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
�K	hkdf.init("vendor/golang.org/x/crypto/hkdf", [{prop: "expander", name: "expander", embedded: false, exported: false, typ: hash.Hash, tag: ""}, {prop: "size", name: "size", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "info", name: "info", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "counter", name: "counter", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "prev", name: "prev", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}]);
hkdf	hash.Hash$vendor/golang.org/x/crypto/hkdf.hkdf'vendor/golang.org/x/crypto/hkdf.ptrType)vendor/golang.org/x/crypto/hkdf.sliceType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(hkdf);
ptrType$vendor/golang.org/x/crypto/hkdf.hkdf 'vendor/golang.org/x/crypto/hkdf.Extractvendor/golang.org/x/crypto/hkdfExtract Extract�	Extract = function(hash$1, secret, salt) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, extractor, hash$1, salt, secret, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; extractor = $f.extractor; hash$1 = $f.hash$1; salt = $f.salt; secret = $f.secret; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (salt === sliceType.nil) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (salt === sliceType.nil) { */ case 1:
  �			_r = hash$1(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r$1 = _r.Size(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			salt = $makeSlice(sliceType, _r$1);
    		/* } */ case 2:
  		_r$2 = hmac.New(hash$1, salt); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		extractor = _r$2;
  )		_r$3 = extractor.Write(secret); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$3;
  B		_r$4 = extractor.Sum(sliceType.nil); /* */ $s = 7; case 7: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		$24r = _r$4;
		$s = 8; case 8: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Extract }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.extractor = extractor; $f.hash$1 = hash$1; $f.salt = salt; $f.secret = secret; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Extract = Extract;
Extractcrypto/hmac.New'vendor/golang.org/x/crypto/hkdf.Extract)vendor/golang.org/x/crypto/hkdf.sliceType ,(*vendor/golang.org/x/crypto/hkdf.hkdf).Read ��	hkdf.ptr.prototype.Read = function(p) {
		var _r, _r$1, _r$2, _r$3, f, n, need, p, remains, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; f = $f.f; n = $f.n; need = $f.need; p = $f.p; remains = $f.remains; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		f = this;
  .		need = p.$length;
  >		remains = f.buf.$length + ($imul(((((255 - f.counter << 24 >>> 24) + 1 << 24 >>> 24) >> 0)), f.size)) >> 0;
    		if (remains < need) {
  �			$s = -1; return [0, errors.New("hkdf: entropy limit reached")];
    		}
  �		n = $copySlice(p, f.buf);
  �		p = $subslice(p, n);
  (		/* while (true) { */ case 1:
			/* if (!(p.$length > 0)) { break; } */ if(!(p.$length > 0)) { $s = 2; continue; }
  ;			$r = f.expander.Reset(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  P			_r = f.expander.Write(f.prev); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
  k			_r$1 = f.expander.Write(f.info); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
  �			_r$2 = f.expander.Write(new sliceType([f.counter])); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
  �			_r$3 = f.expander.Sum($subslice(f.prev, 0, 0)); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			f.prev = _r$3;
  �			f.counter = f.counter + (1) << 24 >>> 24;
   			f.buf = f.prev;
  			n = $copySlice(p, f.buf);
  &			p = $subslice(p, n);
    		$s = 1; continue;
		case 2:
  T		f.buf = $subslice(f.buf, n);
  h		$s = -1; return [need, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: hkdf.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.f = f; $f.n = n; $f.need = need; $f.p = p; $f.remains = remains; $f.$s = $s; $f.$r = $r; return $f;
	};
	hkdf.prototype.Read = function(p) { return this.$val.Read(p); };
hkdf
errors.New$vendor/golang.org/x/crypto/hkdf.hkdf)vendor/golang.org/x/crypto/hkdf.sliceType &vendor/golang.org/x/crypto/hkdf.Expandvendor/golang.org/x/crypto/hkdfExpand Expand�z	Expand = function(hash$1, pseudorandomKey, info) {
		var $24r, _r, _r$1, expander, hash$1, info, pseudorandomKey, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; expander = $f.expander; hash$1 = $f.hash$1; info = $f.info; pseudorandomKey = $f.pseudorandomKey; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  	=		_r = hmac.New(hash$1, pseudorandomKey); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		expander = _r;
  	j		_r$1 = expander.Size(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = new hkdf.ptr(expander, _r$1, info, 1, sliceType.nil, sliceType.nil);
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Expand }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.expander = expander; $f.hash$1 = hash$1; $f.info = info; $f.pseudorandomKey = pseudorandomKey; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Expand = Expand;
Expandcrypto/hmac.New&vendor/golang.org/x/crypto/hkdf.Expand$vendor/golang.org/x/crypto/hkdf.hkdf)vendor/golang.org/x/crypto/hkdf.sliceType #vendor/golang.org/x/crypto/hkdf.Newvendor/golang.org/x/crypto/hkdfNew New�	New = function(hash$1, secret, salt, info) {
		var $24r, _r, _r$1, hash$1, info, prk, salt, secret, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; hash$1 = $f.hash$1; info = $f.info; prk = $f.prk; salt = $f.salt; secret = $f.secret; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
x		_r = Extract(hash$1, secret, salt); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		prk = _r;
  
�		_r$1 = Expand(hash$1, prk, info); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: New }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.hash$1 = hash$1; $f.info = info; $f.prk = prk; $f.salt = salt; $f.secret = secret; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.New = New;
New&vendor/golang.org/x/crypto/hkdf.Expand'vendor/golang.org/x/crypto/hkdf.Extract#vendor/golang.org/x/crypto/hkdf.New �X{"Base":2750,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/crypto/hkdf/hkdf.go","Base":1,"Size":2748,"Lines":[0,55,109,159,160,236,279,282,356,434,457,507,508,517,532,542,550,556,558,559,640,677,680,759,834,904,970,988,1025,1028,1063,1088,1115,1117,1118,1137,1157,1171,1172,1188,1202,1203,1216,1229,1231,1232,1277,1324,1340,1393,1414,1468,1471,1509,1530,1541,1542,1574,1592,1613,1640,1667,1705,1743,1757,1758,1789,1806,1827,1839,1842,1874,1893,1894,1912,1914,1915,1988,2065,2068,2148,2226,2286,2363,2408,2468,2470,2471,2547,2607,2678,2714,2746],"Infos":null}]}
 