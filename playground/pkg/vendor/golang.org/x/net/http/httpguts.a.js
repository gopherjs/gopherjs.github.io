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
GoLinkname’ Implementation’ 	Reference’   žD>’%vendor/golang.org/x/net/http/httpgutshttpgutsnetnet/textprotostringsunicode/utf8vendor/golang.org/x/net/idnaži §Uvaluestoken rvhnamehttpgutsHeaderValuesContainsTokenIsTokenRunePunycodeHostPortValidHeaderFieldNameValidHeaderFieldValueValidHostHeaderValidTrailerHeaderF        F     F     F     F     F     F      "<HY)n4?J net	net = $packages["net"];
’    		$r = net.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	textproto)	textproto = $packages["net/textproto"];
’    		$r = textproto.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
’    		$r = strings.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
’    		$r = utf8.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  idna3	idna = $packages["vendor/golang.org/x/net/idna"];
’    		$r = idna.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
badTrailer
badTrailer  isTokenTableisTokenTable  validHostBytevalidHostByte  ž¾  ü		badTrailer = $makeMap($String.keyFor, [{ k: "Authorization", v: true }, { k: "Cache-Control", v: true }, { k: "Connection", v: true }, { k: "Content-Encoding", v: true }, { k: "Content-Length", v: true }, { k: "Content-Range", v: true }, { k: "Content-Type", v: true }, { k: "Expect", v: true }, { k: "Host", v: true }, { k: "Keep-Alive", v: true }, { k: "Max-Forwards", v: true }, { k: "Pragma", v: true }, { k: "Proxy-Authenticate", v: true }, { k: "Proxy-Authorization", v: true }, { k: "Proxy-Connection", v: true }, { k: "Range", v: true }, { k: "Realm", v: true }, { k: "Te", v: true }, { k: "Trailer", v: true }, { k: "Transfer-Encoding", v: true }, { k: "Www-Authenticate", v: true }]);

badTrailer0vendor/golang.org/x/net/http/httpguts.badTrailer  ž_  		isTokenTable = $toNativeArray($kindBool, [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, true, false, false, true, true, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true]);
isTokenTable2vendor/golang.org/x/net/http/httpguts.isTokenTable  žć  p		validHostByte = $toNativeArray($kindBool, [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
validHostByte3vendor/golang.org/x/net/http/httpguts.validHostByte 8vendor/golang.org/x/net/http/httpguts.ValidTrailerHeader%vendor/golang.org/x/net/http/httpgutsValidTrailerHeader ValidTrailerHeaderžz	ValidTrailerHeader = function(name) {
		var _entry, _r, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _r = $f._r; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  o		_r = textproto.CanonicalMIMEHeaderKey(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		name = _r;
    		if (strings.HasPrefix(name, "If-") || (_entry = badTrailer[$String.keyFor(name)], _entry !== undefined ? _entry.v : false)) {
  Ų			$s = -1; return false;
    		}
  é		$s = -1; return true;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ValidTrailerHeader }; } $f._entry = _entry; $f._r = _r; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ValidTrailerHeader = ValidTrailerHeader;
ValidTrailerHeader$net/textproto.CanonicalMIMEHeaderKeystrings.HasPrefix8vendor/golang.org/x/net/http/httpguts.ValidTrailerHeader0vendor/golang.org/x/net/http/httpguts.badTrailer 1vendor/golang.org/x/net/http/httpguts.IsTokenRune%vendor/golang.org/x/net/http/httpgutsIsTokenRune IsTokenRune’ō	IsTokenRune = function(r) {
		var i, r;
  
ø		i = ((r >> 0));
  
Å		return i < 127 && ((i < 0 || i >= isTokenTable.length) ? ($throwRuntimeError("index out of range"), undefined) : isTokenTable[i]);
    	};
	$pkg.IsTokenRune = IsTokenRune;
IsTokenRune1vendor/golang.org/x/net/http/httpguts.IsTokenRune2vendor/golang.org/x/net/http/httpguts.isTokenTable 0vendor/golang.org/x/net/http/httpguts.isNotToken%vendor/golang.org/x/net/http/httpguts
isNotToken 
isNotTokenM	isNotToken = function(r) {
		var r;
  		return !IsTokenRune(r);
    	};

isNotToken1vendor/golang.org/x/net/http/httpguts.IsTokenRune0vendor/golang.org/x/net/http/httpguts.isNotToken ?vendor/golang.org/x/net/http/httpguts.HeaderValuesContainsToken%vendor/golang.org/x/net/http/httpgutsHeaderValuesContainsToken HeaderValuesContainsTokenžó	HeaderValuesContainsToken = function(values, token) {
		var _i, _ref, token, v, values;
  ō		_ref = values;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (headerValueContainsToken(v, token)) {
  <				return true;
    			}
    			_i++;
		}
  P		return false;
    	};
	$pkg.HeaderValuesContainsToken = HeaderValuesContainsToken;
HeaderValuesContainsToken?vendor/golang.org/x/net/http/httpguts.HeaderValuesContainsToken>vendor/golang.org/x/net/http/httpguts.headerValueContainsToken +vendor/golang.org/x/net/http/httpguts.isOWS%vendor/golang.org/x/net/http/httpgutsisOWS isOWSP	isOWS = function(b) {
		var b;
  Ž		return (b === 32) || (b === 9);
    	};
isOWS+vendor/golang.org/x/net/http/httpguts.isOWS -vendor/golang.org/x/net/http/httpguts.trimOWS%vendor/golang.org/x/net/http/httpgutstrimOWS trimOWSžW	trimOWS = function(x) {
		var x;
  1		while (true) {
			if (!(x.length > 0 && isOWS(x.charCodeAt(0)))) { break; }
  S			x = $substring(x, 1);
    		}
  a		while (true) {
			if (!(x.length > 0 && isOWS(x.charCodeAt((x.length - 1 >> 0))))) { break; }
  			x = $substring(x, 0, (x.length - 1 >> 0));
    		}
  		return x;
    	};
trimOWS+vendor/golang.org/x/net/http/httpguts.isOWS-vendor/golang.org/x/net/http/httpguts.trimOWS >vendor/golang.org/x/net/http/httpguts.headerValueContainsToken%vendor/golang.org/x/net/http/httpgutsheaderValueContainsToken headerValueContainsTokenž	headerValueContainsToken = function(v, token) {
		var comma, token, v;
  Ä		comma = strings.IndexByte(v, 44);
		while (true) {
			if (!(!((comma === -1)))) { break; }
    			if (tokenEqual(trimOWS($substring(v, 0, comma)), token)) {
  I				return true;
    			}
  [			v = $substring(v, (comma + 1 >> 0));
  õ			comma = strings.IndexByte(v, 44);
		}
  o		return tokenEqual(trimOWS(v), token);
    	};
headerValueContainsTokenstrings.IndexByte>vendor/golang.org/x/net/http/httpguts.headerValueContainsToken0vendor/golang.org/x/net/http/httpguts.tokenEqual-vendor/golang.org/x/net/http/httpguts.trimOWS 0vendor/golang.org/x/net/http/httpguts.lowerASCII%vendor/golang.org/x/net/http/httpguts
lowerASCII 
lowerASCII’	lowerASCII = function(b) {
		var b;
    		if (65 <= b && b <= 90) {
  			return b + 32 << 24 >>> 24;
    		}
  &		return b;
    	};

lowerASCII0vendor/golang.org/x/net/http/httpguts.lowerASCII 0vendor/golang.org/x/net/http/httpguts.tokenEqual%vendor/golang.org/x/net/http/httpguts
tokenEqual 
tokenEqualž		tokenEqual = function(t1, t2) {
		var _i, _ref, _rune, b, i, t1, t2;
    		if (!((t1.length === t2.length))) {
  Ą			return false;
    		}
  Ń		_ref = t1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			b = _rune[0];
    			if (b >= 128) {
  4				return false;
    			}
    			if (!((lowerASCII(((b << 24 >>> 24))) === lowerASCII(t2.charCodeAt(i))))) {
  x				return false;
    			}
    			_i += _rune[1];
		}
  		return true;
    	};

tokenEqual0vendor/golang.org/x/net/http/httpguts.lowerASCII0vendor/golang.org/x/net/http/httpguts.tokenEqual +vendor/golang.org/x/net/http/httpguts.isLWS%vendor/golang.org/x/net/http/httpgutsisLWS isLWSP	isLWS = function(b) {
		var b;
  c		return (b === 32) || (b === 9);
    	};
isLWS+vendor/golang.org/x/net/http/httpguts.isLWS +vendor/golang.org/x/net/http/httpguts.isCTL%vendor/golang.org/x/net/http/httpgutsisCTL isCTLN	isCTL = function(b) {
		var b;
  „		return b < 32 || (b === 127);
    	};
isCTL+vendor/golang.org/x/net/http/httpguts.isCTL :vendor/golang.org/x/net/http/httpguts.ValidHeaderFieldName%vendor/golang.org/x/net/http/httpgutsValidHeaderFieldName ValidHeaderFieldNamež±	ValidHeaderFieldName = function(v) {
		var _i, _ref, _rune, r, v;
    		if (v.length === 0) {
  ¶			return false;
    		}
  Ē		_ref = v;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			r = _rune[0];
    			if (!IsTokenRune(r)) {
  ÷				return false;
    			}
    			_i += _rune[1];
		}
  		return true;
    	};
	$pkg.ValidHeaderFieldName = ValidHeaderFieldName;
ValidHeaderFieldName1vendor/golang.org/x/net/http/httpguts.IsTokenRune:vendor/golang.org/x/net/http/httpguts.ValidHeaderFieldName 5vendor/golang.org/x/net/http/httpguts.ValidHostHeader%vendor/golang.org/x/net/http/httpgutsValidHostHeader ValidHostHeaderž	ValidHostHeader = function(h) {
		var h, i, x;
  ė		i = 0;
		while (true) {
			if (!(i < h.length)) { break; }
    			if (!(x = h.charCodeAt(i), ((x < 0 || x >= validHostByte.length) ? ($throwRuntimeError("index out of range"), undefined) : validHostByte[x]))) {
  $				return false;
    			}
  ’			i = i + (1) >> 0;
    		}
  9		return true;
    	};
	$pkg.ValidHostHeader = ValidHostHeader;
ValidHostHeader5vendor/golang.org/x/net/http/httpguts.ValidHostHeader3vendor/golang.org/x/net/http/httpguts.validHostByte ;vendor/golang.org/x/net/http/httpguts.ValidHeaderFieldValue%vendor/golang.org/x/net/http/httpgutsValidHeaderFieldValue ValidHeaderFieldValuežP	ValidHeaderFieldValue = function(v) {
		var b, i, v;
  %²		i = 0;
		while (true) {
			if (!(i < v.length)) { break; }
  %Ī			b = v.charCodeAt(i);
    			if (isCTL(b) && !isLWS(b)) {
  %ų				return false;
    			}
  %Ę			i = i + (1) >> 0;
    		}
  &		return true;
    	};
	$pkg.ValidHeaderFieldValue = ValidHeaderFieldValue;
ValidHeaderFieldValue;vendor/golang.org/x/net/http/httpguts.ValidHeaderFieldValue+vendor/golang.org/x/net/http/httpguts.isCTL+vendor/golang.org/x/net/http/httpguts.isLWS -vendor/golang.org/x/net/http/httpguts.isASCII%vendor/golang.org/x/net/http/httpgutsisASCII isASCII’ī	isASCII = function(s) {
		var i, s;
  &?		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) >= 128) {
  &y				return false;
    			}
  &S			i = i + (1) >> 0;
    		}
  &		return true;
    	};
isASCII-vendor/golang.org/x/net/http/httpguts.isASCII 6vendor/golang.org/x/net/http/httpguts.PunycodeHostPort%vendor/golang.org/x/net/http/httpgutsPunycodeHostPort PunycodeHostPortžū	PunycodeHostPort = function(v) {
		var _r, _r$1, _tuple, _tuple$1, err, host, port, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; host = $f.host; port = $f.port; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (isASCII(v)) {
  'I			$s = -1; return [v, $ifaceNil];
    		}
  '\		_r = net.SplitHostPort(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		host = _tuple[0];
		port = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  (			host = v;
  (%			port = "";
    		}
  (3		_r$1 = idna.ToASCII(host); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		host = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  (¦			$s = -1; return ["", err];
    		}
    		if (port === "") {
  (Ė			$s = -1; return [host, $ifaceNil];
    		}
  (ą		$s = -1; return [net.JoinHostPort(host, port), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PunycodeHostPort }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.host = host; $f.port = port; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.PunycodeHostPort = PunycodeHostPort;
PunycodeHostPortnet.JoinHostPortnet.SplitHostPort6vendor/golang.org/x/net/http/httpguts.PunycodeHostPort-vendor/golang.org/x/net/http/httpguts.isASCII$vendor/golang.org/x/net/idna.ToASCII ž{"Base":10508,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/net/http/httpguts/guts.go","Base":1,"Size":1425,"Lines":[0,55,109,159,160,228,258,261,330,390,407,408,417,434,445,447,448,530,546,577,621,668,725,740,743,756,758,759,793,823,853,883,913,943,973,1003,1033,1063,1093,1123,1153,1183,1213,1243,1273,1303,1333,1363,1393,1423],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/net/http/httpguts/httplex.go","Base":1427,"Size":9080,"Lines":[0,55,109,159,160,177,178,187,194,205,221,222,247,249,250,280,293,306,319,332,345,358,371,384,397,410,423,436,449,462,475,488,501,514,527,540,553,566,579,592,605,618,631,644,657,670,683,696,709,722,735,748,761,774,787,800,813,826,839,852,865,878,891,904,917,930,943,956,969,982,995,1008,1021,1034,1047,1060,1073,1086,1099,1112,1125,1138,1151,1164,1177,1190,1203,1216,1229,1242,1255,1268,1281,1283,1284,1316,1329,1378,1380,1381,1412,1436,1438,1439,1505,1563,1632,1660,1702,1717,1721,1724,1738,1740,1741,1811,1841,1898,1899,1966,1988,2020,2077,2128,2189,2205,2238,2250,2253,2293,2312,2315,2325,2327,2328,2391,2460,2520,2543,2604,2694,2739,2754,2758,2776,2779,2817,2819,2820,2876,2907,2934,2959,2962,2972,2974,2975,3052,3090,3115,3130,3133,3157,3183,3230,3246,3250,3298,3314,3318,3321,3334,3336,3337,3397,3464,3510,3567,3568,3624,3691,3748,3804,3830,3857,3885,3887,3888,3963,4029,4057,4060,4079,4136,4164,4194,4267,4324,4367,4385,4400,4403,4426,4449,4465,4469,4472,4485,4487,4488,4549,4587,4625,4629,4680,4717,4721,4744,4801,4805,4866,4930,4947,4978,5006,5022,5026,5029,5042,5044,5045,5081,5112,5201,5224,5225,5314,5403,5492,5515,5516,5605,5694,5783,5806,5807,5834,5861,5914,5941,5968,5995,6022,6049,6076,6103,6130,6192,6219,6246,6259,6286,6299,6326,6353,6355,6356,6437,6503,6506,6564,6616,6681,6755,6823,6826,6892,6895,6946,6993,7041,7100,7158,7161,7179,7230,7281,7346,7384,7413,7468,7471,7540,7608,7675,7746,7811,7878,7944,8002,8059,8062,8128,8174,8218,8249,8261,8290,8306,8310,8313,8326,8328,8329,8359,8390,8419,8435,8439,8442,8455,8457,8458,8512,8561,8611,8628,8644,8647,8648,8689,8706,8762,8817,8837,8848,8860,8863,8895,8912,8966,8977,8994,8997,9014,9033,9036,9078],"Infos":null}]}
 