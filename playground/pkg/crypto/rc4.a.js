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
GoLinkname�� Implementation�� 	Reference��   �8��
crypto/rc4rc4crypto/internal/subtlestrconv��i R[ sijResetcCipherXORKeyStreamdstsrcErrorkKeySizeErrorkeyrc4	NewCipher�	             66T $  9    ; #= '=   3 T  + 1X   6F  @i  k    D 3;HM subtle/	subtle = $packages["crypto/internal/subtle"];
��    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Cipher�!	Cipher = $pkg.Cipher = $newType(0, $kindStruct, "rc4.Cipher", true, "crypto/rc4", true, function(s_, i_, j_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = arrayType.zero();
			this.i = 0;
			this.j = 0;
			return;
		}
		this.s = s_;
		this.i = i_;
		this.j = j_;
	});
��	ptrType.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "XORKeyStream", name: "XORKeyStream", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}];
�	Cipher.init("crypto/rc4", [{prop: "s", name: "s", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "j", name: "j", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
Ciphercrypto/rc4.Ciphercrypto/rc4.arrayTypecrypto/rc4.ptrTypecrypto/rc4.sliceType  KeySizeErroro	KeySizeError = $pkg.KeySizeError = $newType(4, $kindInt, "rc4.KeySizeError", true, "crypto/rc4", true, null);
i	KeySizeError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
KeySizeErrorcrypto/rc4.KeySizeError  ptrType	ptrType = $ptrType(Cipher);
ptrTypecrypto/rc4.Cipher  	arrayType'	arrayType = $arrayType($Uint32, 256);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType (crypto/rc4.KeySizeError).Error �	KeySizeError.prototype.Error = function() {
		var k;
		k = this.$val;
  I		return "crypto/rc4: invalid key size " + strconv.Itoa(((k >> 0)));
    	};
	$ptrType(KeySizeError).prototype.Error = function() { return new KeySizeError(this.$get()).Error(); };
KeySizeErrorcrypto/rc4.KeySizeErrorstrconv.Itoa crypto/rc4.NewCipher
crypto/rc4	NewCipher 	NewCipher�"	NewCipher = function(key) {
		var _r, _tmp, _tmp$1, c, i, i$1, j, k, key, x, x$1, x$2, x$3, x$4, x$5, x$6;
  :		k = key.$length;
    		if (k < 1 || k > 256) {
  a			return [ptrType.nil, new KeySizeError(((k >> 0)))];
    		}
  �		c = new Cipher.ptr(arrayType.zero(), 0, 0);
  �		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  �			(x = c.s, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i] = ((i >>> 0))));
  �			i = i + (1) >> 0;
    		}
  �		j = 0;
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < 256)) { break; }
  �			j = j + (((((x$1 = c.s, ((i$1 < 0 || i$1 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i$1])) << 24 >>> 24)) + (x$2 = (_r = i$1 % k, _r === _r ? _r : $throwRuntimeError("integer divide by zero")), ((x$2 < 0 || x$2 >= key.$length) ? ($throwRuntimeError("index out of range"), undefined) : key.$array[key.$offset + x$2])) << 24 >>> 24)) << 24 >>> 24;
  			_tmp = (x$3 = c.s, ((j < 0 || j >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[j]));
			_tmp$1 = (x$4 = c.s, ((i$1 < 0 || i$1 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i$1]));
			(x$5 = c.s, ((i$1 < 0 || i$1 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i$1] = _tmp));
			(x$6 = c.s, ((j < 0 || j >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[j] = _tmp$1));
  �			i$1 = i$1 + (1) >> 0;
    		}
  5		return [c, $ifaceNil];
    	};
	$pkg.NewCipher = NewCipher;
	NewCiphercrypto/rc4.Ciphercrypto/rc4.KeySizeErrorcrypto/rc4.NewCiphercrypto/rc4.arrayTypecrypto/rc4.ptrType (*crypto/rc4.Cipher).Reset ��	Cipher.ptr.prototype.Reset = function() {
		var _i, _ref, _tmp, _tmp$1, c, i, x;
		c = this;
  
		_ref = c.s;
		_i = 0;
		while (true) {
			if (!(_i < 256)) { break; }
			i = _i;
  !			(x = c.s, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i] = 0));
    			_i++;
		}
  0		_tmp = 0;
		_tmp$1 = 0;
		c.i = _tmp;
		c.j = _tmp$1;
    	};
	Cipher.prototype.Reset = function() { return this.$val.Reset(); };
Ciphercrypto/rc4.Cipher !(*crypto/rc4.Cipher).XORKeyStream ��	Cipher.ptr.prototype.XORKeyStream = function(dst, src) {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, c, dst, i, j, k, src, v, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, y;
		c = this;
    		if (src.$length === 0) {
  			return;
    		}
    		if (subtle.InexactOverlap($subslice(dst, 0, src.$length), src)) {
  E			$panic(new $String("crypto/rc4: invalid buffer overlap"));
    		}
  u		_tmp = c.i;
		_tmp$1 = c.j;
		i = _tmp;
		j = _tmp$1;
  �		$unused((x = src.$length - 1 >> 0, ((x < 0 || x >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x])));
  �		dst = $subslice(dst, 0, src.$length);
  �		_ref = src;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			k = _i;
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			i = i + (1) << 24 >>> 24;
  �			x$2 = (x$1 = c.s, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i]));
  			j = j + (((x$2 << 24 >>> 24))) << 24 >>> 24;
  			y = (x$3 = c.s, ((j < 0 || j >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[j]));
  %			_tmp$2 = y;
			_tmp$3 = x$2;
			(x$4 = c.s, ((i < 0 || i >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i] = _tmp$2));
			(x$5 = c.s, ((j < 0 || j >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[j] = _tmp$3));
  =			((k < 0 || k >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + k] = ((v ^ (((x$6 = c.s, x$7 = (((x$2 + y >>> 0) << 24 >>> 24)), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])) << 24 >>> 24))) << 24 >>> 24));
    			_i++;
		}
  e		_tmp$4 = i;
		_tmp$5 = j;
		c.i = _tmp$4;
		c.j = _tmp$5;
    	};
	Cipher.prototype.XORKeyStream = function(dst, src) { return this.$val.XORKeyStream(dst, src); };
Cipher%crypto/internal/subtle.InexactOverlapcrypto/rc4.Cipher ��{"Base":1912,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/rc4/rc4.go","Base":1,"Size":1910,"Lines":[0,55,109,159,160,233,258,261,330,347,359,360,369,395,406,408,409,467,488,506,518,520,521,543,544,583,646,648,649,727,778,824,839,862,892,895,909,937,958,961,978,1006,1038,1072,1075,1091,1093,1094,1153,1156,1236,1261,1288,1310,1323,1326,1343,1345,1346,1420,1472,1521,1541,1550,1553,1602,1648,1651,1669,1690,1748,1773,1782,1796,1812,1826,1850,1888,1891,1908],"Infos":null}]}
 