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
GoLinkname�� Implementation�� 	Reference��   � ���hash/adler32adler32errorshash��i erdata Hash32hashHashSum32Writerio	BlockSizeResetSizeSumbWritepnerradler32ChecksumNewF     	  F   -C   ;   	T > $ N '   1   7   < @Q S T U$  B H{ J L T }P Xa7 X+$$ o errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  digestg	digest = $pkg.digest = $newType(4, $kindUint32, "adler32.digest", true, "hash/adler32", false, null);
��	ptrType.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum32", name: "Sum32", pkg: "", typ: $funcType([], [$Uint32], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}];
digesthash/adler32.digesthash/adler32.ptrTypehash/adler32.sliceType  ptrType	ptrType = $ptrType(digest);
ptrTypehash/adler32.digest  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType (*hash/adler32.digest).Reset a	$ptrType(digest).prototype.Reset = function() {
		var d;
		d = this;
  		d.$set(1);
    	};
digesthash/adler32.digest hash/adler32.Newhash/adler32New New��	New = function() {
		var d;
  \		d = $newDataPointer(0, ptrType);
  n		d.Reset();
  y		return d;
    	};
	$pkg.New = New;
Newhash/adler32.Newhash/adler32.digesthash/adler32.ptrType (*hash/adler32.digest).Size _	$ptrType(digest).prototype.Size = function() {
		var d;
		d = this;
  �		return 4;
    	};
digesthash/adler32.digest  (*hash/adler32.digest).BlockSize d	$ptrType(digest).prototype.BlockSize = function() {
		var d;
		d = this;
  �		return 4;
    	};
digesthash/adler32.digest $(*hash/adler32.digest).MarshalBinary ��	$ptrType(digest).prototype.MarshalBinary = function() {
		var b, d;
		d = this;
  [		b = $makeSlice(sliceType, 0, 8);
  �		b = $appendSlice(b, "adl\x01");
  �		b = appendUint32(b, ((d.$get() >>> 0)));
  �		return [b, $ifaceNil];
    	};
digesthash/adler32.appendUint32hash/adler32.digesthash/adler32.sliceType &(*hash/adler32.digest).UnmarshalBinary ��	$ptrType(digest).prototype.UnmarshalBinary = function(b) {
		var b, d;
		d = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "adl\x01")) {
  =			return errors.New("hash/adler32: invalid hash state identifier");
    		}
    		if (!((b.$length === 8))) {
  �			return errors.New("hash/adler32: invalid hash state size");
    		}
  �		d.$set(((readUint32($subslice(b, 4)) >>> 0)));
  			return $ifaceNil;
    	};
digest
errors.Newhash/adler32.digesthash/adler32.readUint32 hash/adler32.appendUint32hash/adler32appendUint32 appendUint32�	appendUint32 = function(b, x) {
		var a, b, x;
  G		a = $toNativeArray($kindUint8, [(((x >>> 24 >>> 0) << 24 >>> 24)), (((x >>> 16 >>> 0) << 24 >>> 24)), (((x >>> 8 >>> 0) << 24 >>> 24)), ((x << 24 >>> 24))]);
  �		return $appendSlice(b, new sliceType(a));
    	};
appendUint32hash/adler32.appendUint32hash/adler32.sliceType hash/adler32.readUint32hash/adler32
readUint32 
readUint32��	readUint32 = function(b) {
		var b;
  �		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  �		return ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};

readUint32hash/adler32.readUint32 hash/adler32.updatehash/adler32update update�	update = function(d, p) {
		var _i, _r, _r$1, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, d, p, q, s1, s2, x;
  	~		_tmp = ((((d & 65535) >>> 0) >>> 0));
		_tmp$1 = (((d >>> 16 >>> 0) >>> 0));
		s1 = _tmp;
		s2 = _tmp$1;
  	�		while (true) {
			if (!(p.$length > 0)) { break; }
  	�			q = sliceType.nil;
    			if (p.$length > 5552) {
  	�				_tmp$2 = $subslice(p, 0, 5552);
				_tmp$3 = $subslice(p, 5552);
				p = _tmp$2;
				q = _tmp$3;
    			}
  
			while (true) {
				if (!(p.$length >= 4)) { break; }
  
				s1 = s1 + ((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0))) >>> 0;
  
,				s2 = s2 + (s1) >>> 0;
  
8				s1 = s1 + ((((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]) >>> 0))) >>> 0;
  
N				s2 = s2 + (s1) >>> 0;
  
Z				s1 = s1 + ((((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]) >>> 0))) >>> 0;
  
p				s2 = s2 + (s1) >>> 0;
  
|				s1 = s1 + ((((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]) >>> 0))) >>> 0;
  
�				s2 = s2 + (s1) >>> 0;
  
�				p = $subslice(p, 4);
    			}
  
�			_ref = p;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				x = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  
�				s1 = s1 + (((x >>> 0))) >>> 0;
  
�				s2 = s2 + (s1) >>> 0;
    				_i++;
			}
  
�			s1 = (_r = s1 % (65521), _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
  
�			s2 = (_r$1 = s2 % (65521), _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"));
  			p = q;
    		}
  		return (((((s2 << 16 >>> 0) | s1) >>> 0) >>> 0));
    	};
updatehash/adler32.sliceTypehash/adler32.update (*hash/adler32.digest).Write �	$ptrType(digest).prototype.Write = function(p) {
		var _tmp, _tmp$1, d, err, nn, p;
		nn = 0;
		err = $ifaceNil;
		d = this;
  a		d.$set(update(d.$get(), p));
    		_tmp = p.$length;
		_tmp$1 = $ifaceNil;
		nn = _tmp;
		err = _tmp$1;
		return [nn, err];
    	};
digesthash/adler32.digesthash/adler32.update (*hash/adler32.digest).Sum32 q	$ptrType(digest).prototype.Sum32 = function() {
		var d;
		d = this;
  �		return ((d.$get() >>> 0));
    	};
digesthash/adler32.digest (*hash/adler32.digest).Sum �	$ptrType(digest).prototype.Sum = function(in$1) {
		var d, in$1, s;
		d = this;
  �		s = ((d.$get() >>> 0));
  �		return $append(in$1, (((s >>> 24 >>> 0) << 24 >>> 24)), (((s >>> 16 >>> 0) << 24 >>> 24)), (((s >>> 8 >>> 0) << 24 >>> 24)), ((s << 24 >>> 24)));
    	};
digesthash/adler32.digest hash/adler32.Checksumhash/adler32Checksum Checksumv	Checksum = function(data) {
		var data;
  �		return ((update(1, data) >>> 0));
    	};
	$pkg.Checksum = Checksum;
Checksumhash/adler32.Checksumhash/adler32.update �{"Base":3258,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/hash/adler32/adler32.go","Base":1,"Size":3256,"Lines":[0,55,109,159,160,213,216,246,310,377,444,501,544,560,561,570,580,588,590,591,599,653,666,702,755,808,821,823,824,870,885,886,945,997,1016,1017,1053,1054,1124,1191,1255,1323,1345,1370,1388,1399,1409,1411,1412,1456,1457,1503,1504,1512,1539,1571,1573,1574,1625,1662,1687,1720,1735,1737,1738,1789,1850,1917,1920,1950,2011,2014,2055,2067,2069,2070,2117,2132,2149,2166,2182,2193,2196,2223,2225,2226,2261,2271,2348,2350,2351,2387,2428,2471,2489,2504,2525,2554,2558,2578,2600,2612,2634,2646,2668,2680,2702,2714,2727,2731,2755,2774,2786,2790,2802,2814,2822,2825,2853,2855,2856,2911,2931,2951,2953,2954,3008,3009,3050,3067,3133,3135,3136,3187],"Infos":null}]}
 