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
GoLinkname�� Implementation�� 	Reference��   �"9��net/urlurlerrorsfmtsortstrconvstrings�yi �� OpURLErrUnwrapeErrorTimeout	TemporaryEscapeErrorInvalidHostErrorrawURLqueryValuessSchemeOpaqueUserUserinfoHostPathRawPath
ForceQueryRawQueryFragmentRawFragmentsetPathupEscapedPathsetFragmentfEscapedFragmentStringRedactedIsAbsParserefResolveReferenceQuery
RequestURIHostnamePortMarshalBinarytexterrUnmarshalBinaryusernamepasswordpasswordSetUsernamePasswordGetvkeySetvalueAddDelHasEncodeurl
ParseQueryParseRequestURI
PathEscapePathUnescapeQueryEscapeQueryUnescapeUserPassword            2222T    5     7     9     # ;     - T   i    9 T   z     �F  J  �    W F  Q  �   �F  J  �   F  ^   F  ^     F  ^   F  ^      s � 
 `   g   n�   |   �   �   �    �   �   �  ������������������T � � �� �    � ��    � �� �    � ��    � ��    � ��    � ��     � �� �  �    � �� ��  �  � ��   � � ��    � ��    � ��    � ��  �� � � �� ��   �F  �  � �F  � �  �   �   �   �   ���T � � ��    � ��       � ��   �T � � �� �    � �� � �   � �� � �   � �� �   � �� �     � ��    � -L9]�q�������������n���s�W�N errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Error�*	Error = $pkg.Error = $newType(0, $kindStruct, "url.Error", true, "net/url", true, function(Op_, URL_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Op = "";
			this.URL = "";
			this.Err = $ifaceNil;
			return;
		}
		this.Op = Op_;
		this.URL = URL_;
		this.Err = Err_;
	});
�\	ptrType$3.methods = [{prop: "Unwrap", name: "Unwrap", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Timeout", name: "Timeout", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Temporary", name: "Temporary", pkg: "", typ: $funcType([], [$Bool], false)}];
�	Error.init("", [{prop: "Op", name: "Op", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "URL", name: "URL", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);
Errornet/url.Errornet/url.ptrType$3  encodinga	encoding = $pkg.encoding = $newType(4, $kindInt, "url.encoding", true, "net/url", false, null);
encodingnet/url.encoding  EscapeErrorl	EscapeError = $pkg.EscapeError = $newType(8, $kindString, "url.EscapeError", true, "net/url", true, null);
h	EscapeError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
EscapeErrornet/url.EscapeError  InvalidHostError{	InvalidHostError = $pkg.InvalidHostError = $newType(8, $kindString, "url.InvalidHostError", true, "net/url", true, null);
m	InvalidHostError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
InvalidHostErrornet/url.InvalidHostError  URL��	URL = $pkg.URL = $newType(0, $kindStruct, "url.URL", true, "net/url", true, function(Scheme_, Opaque_, User_, Host_, Path_, RawPath_, ForceQuery_, RawQuery_, Fragment_, RawFragment_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Scheme = "";
			this.Opaque = "";
			this.User = ptrType$1.nil;
			this.Host = "";
			this.Path = "";
			this.RawPath = "";
			this.ForceQuery = false;
			this.RawQuery = "";
			this.Fragment = "";
			this.RawFragment = "";
			return;
		}
		this.Scheme = Scheme_;
		this.Opaque = Opaque_;
		this.User = User_;
		this.Host = Host_;
		this.Path = Path_;
		this.RawPath = RawPath_;
		this.ForceQuery = ForceQuery_;
		this.RawQuery = RawQuery_;
		this.Fragment = Fragment_;
		this.RawFragment = RawFragment_;
	});
��	ptrType$2.methods = [{prop: "setPath", name: "setPath", pkg: "net/url", typ: $funcType([$String], [$error], false)}, {prop: "EscapedPath", name: "EscapedPath", pkg: "", typ: $funcType([], [$String], false)}, {prop: "setFragment", name: "setFragment", pkg: "net/url", typ: $funcType([$String], [$error], false)}, {prop: "EscapedFragment", name: "EscapedFragment", pkg: "", typ: $funcType([], [$String], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Redacted", name: "Redacted", pkg: "", typ: $funcType([], [$String], false)}, {prop: "IsAbs", name: "IsAbs", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Parse", name: "Parse", pkg: "", typ: $funcType([$String], [ptrType$2, $error], false)}, {prop: "ResolveReference", name: "ResolveReference", pkg: "", typ: $funcType([ptrType$2], [ptrType$2], false)}, {prop: "Query", name: "Query", pkg: "", typ: $funcType([], [Values], false)}, {prop: "RequestURI", name: "RequestURI", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Hostname", name: "Hostname", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Port", name: "Port", pkg: "", typ: $funcType([], [$String], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType$1, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType$1], [$error], false)}];
��	URL.init("", [{prop: "Scheme", name: "Scheme", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Opaque", name: "Opaque", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "User", name: "User", embedded: false, exported: true, typ: ptrType$1, tag: ""}, {prop: "Host", name: "Host", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Path", name: "Path", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "RawPath", name: "RawPath", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "ForceQuery", name: "ForceQuery", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "RawQuery", name: "RawQuery", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Fragment", name: "Fragment", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "RawFragment", name: "RawFragment", embedded: false, exported: true, typ: $String, tag: ""}]);
URLnet/url.URLnet/url.Valuesnet/url.ptrType$1net/url.ptrType$2net/url.sliceType$1  Userinfo�{	Userinfo = $pkg.Userinfo = $newType(0, $kindStruct, "url.Userinfo", true, "net/url", true, function(username_, password_, passwordSet_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.username = "";
			this.password = "";
			this.passwordSet = false;
			return;
		}
		this.username = username_;
		this.password = password_;
		this.passwordSet = passwordSet_;
	});
�	ptrType$1.methods = [{prop: "Username", name: "Username", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Password", name: "Password", pkg: "", typ: $funcType([], [$String, $Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
�>	Userinfo.init("net/url", [{prop: "username", name: "username", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "password", name: "password", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "passwordSet", name: "passwordSet", embedded: false, exported: false, typ: $Bool, tag: ""}]);
Userinfonet/url.Userinfonet/url.ptrType$1  ValuesZ	Values = $pkg.Values = $newType(4, $kindMap, "url.Values", true, "net/url", true, null);
��	Values.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $String], [], false)}, {prop: "Add", name: "Add", pkg: "", typ: $funcType([$String, $String], [], false)}, {prop: "Del", name: "Del", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Has", name: "Has", pkg: "", typ: $funcType([$String], [$Bool], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([], [$String], false)}];
$	Values.init($String, sliceType$2);
Valuesnet/url.Valuesnet/url.sliceType$2  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  interfaceTypet	interfaceType = $interfaceType([{prop: "Timeout", name: "Timeout", pkg: "", typ: $funcType([], [$Bool], false)}]);
interfaceType  interfaceType$1z	interfaceType$1 = $interfaceType([{prop: "Temporary", name: "Temporary", pkg: "", typ: $funcType([], [$Bool], false)}]);
interfaceType$1  ptrType&	ptrType = $ptrType(strings.Builder);
ptrTypestrings.Builder  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  	arrayType%	arrayType = $arrayType($Uint8, 64);
	arrayType  	ptrType$1!	ptrType$1 = $ptrType(Userinfo);
	ptrType$1net/url.Userinfo  	ptrType$2	ptrType$2 = $ptrType(URL);
	ptrType$2net/url.URL  sliceType$2$	sliceType$2 = $sliceType($String);
sliceType$2  	ptrType$3	ptrType$3 = $ptrType(Error);
	ptrType$3net/url.Error (*net/url.Error).Unwrap ��	Error.ptr.prototype.Unwrap = function() {
		var e;
		e = this;
  �		return e.Err;
    	};
	Error.prototype.Unwrap = function() { return this.$val.Unwrap(); };
Errornet/url.Error (*net/url.Error).Error �	Error.ptr.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �		_r = fmt.Sprintf("%s %q: %s", new sliceType([new $String(e.Op), new $String(e.URL), e.Err])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Error.ptr.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Errorfmt.Sprintfnet/url.Errornet/url.sliceType (*net/url.Error).Timeout ��	Error.ptr.prototype.Timeout = function() {
		var $24r, _r, _tuple, _v, e, ok, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; _v = $f._v; e = $f.e; ok = $f.ok; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  T		_tuple = $assertType(e.Err, interfaceType, true);
		t = _tuple[0];
		ok = _tuple[1];
  �		if (!(ok)) { _v = false; $s = 1; continue s; }
		_r = t.Timeout(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_v = _r; case 1:
		$24r = _v;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Error.ptr.prototype.Timeout }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f._v = _v; $f.e = e; $f.ok = ok; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Error.prototype.Timeout = function() { return this.$val.Timeout(); };
Errornet/url.Errornet/url.interfaceType (*net/url.Error).Temporary ��	Error.ptr.prototype.Temporary = function() {
		var $24r, _r, _tuple, _v, e, ok, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; _v = $f._v; e = $f.e; ok = $f.ok; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �		_tuple = $assertType(e.Err, interfaceType$1, true);
		t = _tuple[0];
		ok = _tuple[1];
  �		if (!(ok)) { _v = false; $s = 1; continue s; }
		_r = t.Temporary(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_v = _r; case 1:
		$24r = _v;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Error.ptr.prototype.Temporary }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f._v = _v; $f.e = e; $f.ok = ok; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	Error.prototype.Temporary = function() { return this.$val.Temporary(); };
Errornet/url.Errornet/url.interfaceType$1 net/url.ishexnet/urlishex ishex��	ishex = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  			return true;
    		} else if (97 <= c && c <= 102) {
  �			return true;
    		} else if (65 <= c && c <= 70) {
  �			return true;
    		}
  �		return false;
    	};
ishexnet/url.ishex net/url.unhexnet/urlunhex unhex�I	unhex = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  5			return c - 48 << 24 >>> 24;
    		} else if (97 <= c && c <= 102) {
  b			return (c - 97 << 24 >>> 24) + 10 << 24 >>> 24;
    		} else if (65 <= c && c <= 70) {
  �			return (c - 65 << 24 >>> 24) + 10 << 24 >>> 24;
    		}
  �		return 0;
    	};
unhexnet/url.unhex (net/url.EscapeError).Error ��	EscapeError.prototype.Error = function() {
		var e;
		e = this.$val;
  �		return "invalid URL escape " + strconv.Quote((e));
    	};
	$ptrType(EscapeError).prototype.Error = function() { return new EscapeError(this.$get()).Error(); };
EscapeErrornet/url.EscapeErrorstrconv.Quote  (net/url.InvalidHostError).Error �	InvalidHostError.prototype.Error = function() {
		var e;
		e = this.$val;
   		return "invalid character " + strconv.Quote((e)) + " in host name";
    	};
	$ptrType(InvalidHostError).prototype.Error = function() { return new InvalidHostError(this.$get()).Error(); };
InvalidHostErrornet/url.InvalidHostErrorstrconv.Quote net/url.shouldEscapenet/urlshouldEscape shouldEscape��	shouldEscape = function(c, mode) {
		var _1, _2, _3, _4, c, mode;
    		if (97 <= c && c <= 122 || 65 <= c && c <= 90 || 48 <= c && c <= 57) {
  				return false;
    		}
    		if ((mode === 3) || (mode === 4)) {
    			_1 = c;
    			if ((_1 === (33)) || (_1 === (36)) || (_1 === (38)) || (_1 === (39)) || (_1 === (40)) || (_1 === (41)) || (_1 === (42)) || (_1 === (43)) || (_1 === (44)) || (_1 === (59)) || (_1 === (61)) || (_1 === (58)) || (_1 === (91)) || (_1 === (93)) || (_1 === (60)) || (_1 === (62)) || (_1 === (34))) {
  �				return false;
    			}
    		}
    		_2 = c;
    		if ((_2 === (45)) || (_2 === (95)) || (_2 === (46)) || (_2 === (126))) {
  �			return false;
    		} else if ((_2 === (36)) || (_2 === (38)) || (_2 === (43)) || (_2 === (44)) || (_2 === (47)) || (_2 === (58)) || (_2 === (59)) || (_2 === (61)) || (_2 === (63)) || (_2 === (64))) {
    			_3 = mode;
    			if (_3 === (1)) {
  �				return c === 63;
    			} else if (_3 === (2)) {
  r				return (c === 47) || (c === 59) || (c === 44) || (c === 63);
    			} else if (_3 === (5)) {
  �				return (c === 64) || (c === 47) || (c === 63) || (c === 58);
    			} else if (_3 === (6)) {
  3				return true;
    			} else if (_3 === (7)) {
  �				return false;
    			}
    		}
    		if (mode === 7) {
    			_4 = c;
    			if ((_4 === (33)) || (_4 === (40)) || (_4 === (41)) || (_4 === (42))) {
  �				return false;
    			}
    		}
  !		return true;
    	};
shouldEscapenet/url.shouldEscape net/url.QueryUnescapenet/urlQueryUnescape QueryUnescapet	QueryUnescape = function(s) {
		var s;
  P		return unescape(s, 6);
    	};
	$pkg.QueryUnescape = QueryUnescape;
QueryUnescapenet/url.QueryUnescapenet/url.unescape net/url.PathUnescapenet/urlPathUnescape PathUnescapeq	PathUnescape = function(s) {
		var s;
  �		return unescape(s, 2);
    	};
	$pkg.PathUnescape = PathUnescape;
PathUnescapenet/url.PathUnescapenet/url.unescape net/url.unescapenet/urlunescape unescape��	unescape = function(s, mode) {
		var _1, _2, hasPlus, i, i$1, mode, n, s, t, v;
  �		n = 0;
  		hasPlus = false;
  		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			_1 = s.charCodeAt(i);
    			if (_1 === (37)) {
  L				n = n + (1) >> 0;
    				if ((i + 2 >> 0) >= s.length || !ishex(s.charCodeAt((i + 1 >> 0))) || !ishex(s.charCodeAt((i + 2 >> 0)))) {
  �					s = $substring(s, i);
    					if (s.length > 3) {
  �						s = $substring(s, 0, 3);
    					}
  �					return ["", new EscapeError((s))];
    				}
    				if ((mode === 3) && unhex(s.charCodeAt((i + 1 >> 0))) < 8 && !($substring(s, i, (i + 3 >> 0)) === "%25")) {
  V					return ["", new EscapeError(($substring(s, i, (i + 3 >> 0))))];
    				}
    				if (mode === 4) {
  K					v = ((unhex(s.charCodeAt((i + 1 >> 0))) << 4 << 24 >>> 24) | unhex(s.charCodeAt((i + 2 >> 0)))) >>> 0;
    					if (!($substring(s, i, (i + 3 >> 0)) === "%25") && !((v === 32)) && shouldEscape(v, 3)) {
  �						return ["", new EscapeError(($substring(s, i, (i + 3 >> 0))))];
    					}
    				}
  �				i = i + (3) >> 0;
    			} else if (_1 === (43)) {
  				hasPlus = mode === 6;
  -				i = i + (1) >> 0;
    			} else {
    				if (((mode === 3) || (mode === 4)) && s.charCodeAt(i) < 128 && shouldEscape(s.charCodeAt(i), mode)) {
  �					return ["", new InvalidHostError(($substring(s, i, (i + 1 >> 0))))];
    				}
  �				i = i + (1) >> 0;
    			}
    		}
    		if ((n === 0) && !hasPlus) {
  �			return [s, $ifaceNil];
    		}
  		t = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  		t.Grow(s.length - ($imul(2, n)) >> 0);
  9		i$1 = 0;
		while (true) {
			if (!(i$1 < s.length)) { break; }
    			_2 = s.charCodeAt(i$1);
    			if (_2 === (37)) {
  r				t.WriteByte(((unhex(s.charCodeAt((i$1 + 1 >> 0))) << 4 << 24 >>> 24) | unhex(s.charCodeAt((i$1 + 2 >> 0)))) >>> 0);
  �				i$1 = i$1 + (2) >> 0;
    			} else if (_2 === (43)) {
    				if (mode === 6) {
  �					t.WriteByte(32);
    				} else {
   					t.WriteByte(43);
    				}
    			} else {
  $				t.WriteByte(s.charCodeAt(i$1));
    			}
  M			i$1 = i$1 + (1) >> 0;
    		}
  >		return [t.String(), $ifaceNil];
    	};
unescape	net/url.EscapeErrornet/url.InvalidHostErrornet/url.ishexnet/url.ptrTypenet/url.shouldEscapenet/url.sliceType$1net/url.unescapenet/url.unhexstrings.Builder net/url.QueryEscapenet/urlQueryEscape QueryEscapel	QueryEscape = function(s) {
		var s;
  �		return escape(s, 6);
    	};
	$pkg.QueryEscape = QueryEscape;
QueryEscapenet/url.QueryEscapenet/url.escape net/url.PathEscapenet/url
PathEscape 
PathEscapei	PathEscape = function(s) {
		var s;
  �		return escape(s, 2);
    	};
	$pkg.PathEscape = PathEscape;

PathEscapenet/url.PathEscapenet/url.escape net/url.escapenet/urlescape escape�	�	escape = function(s, mode) {
		var _tmp, _tmp$1, buf, c, c$1, hexCount, i, i$1, i$2, j, mode, required, s, spaceCount, t, x, x$1;
   		_tmp = 0;
		_tmp$1 = 0;
		spaceCount = _tmp;
		hexCount = _tmp$1;
   :		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
   V			c = s.charCodeAt(i);
    			if (shouldEscape(c, mode)) {
    				if ((c === 32) && (mode === 6)) {
   �					spaceCount = spaceCount + (1) >> 0;
    				} else {
   �					hexCount = hexCount + (1) >> 0;
    				}
    			}
   N			i = i + (1) >> 0;
    		}
    		if ((spaceCount === 0) && (hexCount === 0)) {
  !			return s;
    		}
  !"		buf = arrayType.zero();
  !4		t = sliceType$1.nil;
  !?		required = s.length + ($imul(2, hexCount)) >> 0;
    		if (required <= 64) {
  !|			t = $subslice(new sliceType$1(buf), 0, required);
    		} else {
  !�			t = $makeSlice(sliceType$1, required);
    		}
    		if (hexCount === 0) {
  !�			$copyString(t, s);
  !�			i$1 = 0;
			while (true) {
				if (!(i$1 < s.length)) { break; }
    				if (s.charCodeAt(i$1) === 32) {
  "					((i$1 < 0 || i$1 >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + i$1] = 43);
    				}
  !�				i$1 = i$1 + (1) >> 0;
    			}
  ")			return ($bytesToString(t));
    		}
  "?		j = 0;
  "K		i$2 = 0;
		while (true) {
			if (!(i$2 < s.length)) { break; }
  "n			c$1 = s.charCodeAt(i$2);
    			if ((c$1 === 32) && (mode === 6)) {
  "�				((j < 0 || j >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + j] = 43);
  "�				j = j + (1) >> 0;
    			} else if (shouldEscape(c$1, mode)) {
  "�				((j < 0 || j >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + j] = 37);
  "�				(x = j + 1 >> 0, ((x < 0 || x >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + x] = "0123456789ABCDEF".charCodeAt((c$1 >>> 4 << 24 >>> 24))));
  #				(x$1 = j + 2 >> 0, ((x$1 < 0 || x$1 >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + x$1] = "0123456789ABCDEF".charCodeAt(((c$1 & 15) >>> 0))));
  #&				j = j + (3) >> 0;
    			} else {
  #;				((j < 0 || j >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + j] = s.charCodeAt(i$2));
  #J				j = j + (1) >> 0;
    			}
  "_			i$2 = i$2 + (1) >> 0;
    		}
  #V		return ($bytesToString(t));
    	};
escapenet/url.arrayTypenet/url.escapenet/url.shouldEscapenet/url.sliceType$1 net/url.Usernet/urlUser User~	User = function(username) {
		var username;
  )X		return new Userinfo.ptr(username, "", false);
    	};
	$pkg.User = User;
Usernet/url.Usernet/url.Userinfo net/url.UserPasswordnet/urlUserPassword UserPassword��	UserPassword = function(username, password) {
		var password, username;
  +G		return new Userinfo.ptr(username, password, true);
    	};
	$pkg.UserPassword = UserPassword;
UserPasswordnet/url.UserPasswordnet/url.Userinfo (*net/url.Userinfo).Username ��	Userinfo.ptr.prototype.Username = function() {
		var u;
		u = this;
    		if (u === ptrType$1.nil) {
  -			return "";
    		}
  -!		return u.username;
    	};
	Userinfo.prototype.Username = function() { return this.$val.Username(); };
Userinfonet/url.Userinfonet/url.ptrType$1 (*net/url.Userinfo).Password �	Userinfo.ptr.prototype.Password = function() {
		var u;
		u = this;
    		if (u === ptrType$1.nil) {
  -�			return ["", false];
    		}
  -�		return [u.password, u.passwordSet];
    	};
	Userinfo.prototype.Password = function() { return this.$val.Password(); };
Userinfonet/url.Userinfonet/url.ptrType$1 (*net/url.Userinfo).String �\	Userinfo.ptr.prototype.String = function() {
		var s, u;
		u = this;
    		if (u === ptrType$1.nil) {
  .�			return "";
    		}
  .�		s = escape(u.username, 5);
    		if (u.passwordSet) {
  .�			s = s + (":" + escape(u.password, 5));
    		}
  /		return s;
    	};
	Userinfo.prototype.String = function() { return this.$val.String(); };
Userinfonet/url.Userinfonet/url.escapenet/url.ptrType$1 net/url.getSchemenet/url	getScheme 	getScheme��	getScheme = function(rawURL) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, c, err, i, path, rawURL, scheme;
		scheme = "";
		path = "";
		err = $ifaceNil;
  /�		i = 0;
		while (true) {
			if (!(i < rawURL.length)) { break; }
  0			c = rawURL.charCodeAt(i);
    			if (97 <= c && c <= 122 || 65 <= c && c <= 90) {
    			} else if (48 <= c && c <= 57 || (c === 43) || (c === 45) || (c === 46)) {
    				if (i === 0) {
    					_tmp = "";
					_tmp$1 = rawURL;
					_tmp$2 = $ifaceNil;
					scheme = _tmp;
					path = _tmp$1;
					err = _tmp$2;
					return [scheme, path, err];
    				}
    			} else if ((c === 58)) {
    				if (i === 0) {
    					_tmp$3 = "";
					_tmp$4 = "";
					_tmp$5 = errors.New("missing protocol scheme");
					scheme = _tmp$3;
					path = _tmp$4;
					err = _tmp$5;
					return [scheme, path, err];
    				}
    				_tmp$6 = $substring(rawURL, 0, i);
				_tmp$7 = $substring(rawURL, (i + 1 >> 0));
				_tmp$8 = $ifaceNil;
				scheme = _tmp$6;
				path = _tmp$7;
				err = _tmp$8;
				return [scheme, path, err];
    			} else {
    				_tmp$9 = "";
				_tmp$10 = rawURL;
				_tmp$11 = $ifaceNil;
				scheme = _tmp$9;
				path = _tmp$10;
				err = _tmp$11;
				return [scheme, path, err];
    			}
  0			i = i + (1) >> 0;
    		}
    		_tmp$12 = "";
		_tmp$13 = rawURL;
		_tmp$14 = $ifaceNil;
		scheme = _tmp$12;
		path = _tmp$13;
		err = _tmp$14;
		return [scheme, path, err];
    	};
	getScheme
errors.Newnet/url.getScheme net/url.splitnet/urlsplit split�3	split = function(s, sep, cutc) {
		var cutc, i, s, sep;
  3#		i = strings.IndexByte(s, sep);
    		if (i < 0) {
  3P			return [s, ""];
    		}
    		if (cutc) {
  3m			return [$substring(s, 0, i), $substring(s, (i + 1 >> 0))];
    		}
  3�		return [$substring(s, 0, i), $substring(s, i)];
    	};
splitnet/url.splitstrings.IndexByte net/url.Parsenet/urlParse Parse�O	Parse = function(rawURL) {
		var _r, _tuple, _tuple$1, err, frag, rawURL, u, url, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; frag = $f.frag; rawURL = $f.rawURL; u = $f.u; url = $f.url; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  4�		_tuple = split(rawURL, 35, true);
		u = _tuple[0];
		frag = _tuple[1];
  5		_r = parse(u, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		url = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  5J			$s = -1; return [ptrType$2.nil, new Error.ptr("parse", u, err)];
    		}
    		if (frag === "") {
  5�			$s = -1; return [url, $ifaceNil];
    		}
  5�		err = url.setFragment(frag);
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  5�			$s = -1; return [ptrType$2.nil, new Error.ptr("parse", rawURL, err)];
    		}
  5�		$s = -1; return [url, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Parse }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.frag = frag; $f.rawURL = rawURL; $f.u = u; $f.url = url; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Parse = Parse;
Parsenet/url.Errornet/url.Parsenet/url.URLnet/url.parsenet/url.ptrType$2net/url.setFragment~net/url.split net/url.ParseRequestURInet/urlParseRequestURI ParseRequestURI��	ParseRequestURI = function(rawURL) {
		var _r, _tuple, err, rawURL, url, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; rawURL = $f.rawURL; url = $f.url; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  7		_r = parse(rawURL, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		url = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  7�			$s = -1; return [ptrType$2.nil, new Error.ptr("parse", rawURL, err)];
    		}
  7�		$s = -1; return [url, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ParseRequestURI }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.rawURL = rawURL; $f.url = url; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ParseRequestURI = ParseRequestURI;
ParseRequestURInet/url.Errornet/url.ParseRequestURInet/url.parsenet/url.ptrType$2 net/url.parsenet/urlparse parse��	parse = function(rawURL, viaRequest) {
		var _r, _r$1, _tuple, _tuple$1, _tuple$2, _tuple$3, authority, colon, err, err$1, rawURL, rest, slash, url, viaRequest, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; authority = $f.authority; colon = $f.colon; err = $f.err; err$1 = $f.err$1; rawURL = $f.rawURL; rest = $f.rest; slash = $f.slash; url = $f.url; viaRequest = $f.viaRequest; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  9S		rest = "";
  9d		err = $ifaceNil;
    		if (stringContainsCTLByte(rawURL)) {
  9�			$s = -1; return [ptrType$2.nil, errors.New("net/url: invalid control character in URL")];
    		}
    		if (rawURL === "" && viaRequest) {
  : 			$s = -1; return [ptrType$2.nil, errors.New("empty url")];
    		}
  :(		url = new URL.ptr("", "", ptrType$1.nil, "", "", "", false, "", "", "");
    		if (rawURL === "*") {
  :O			url.Path = "*";
  :`			$s = -1; return [url, $ifaceNil];
    		}
  :�		_tuple = getScheme(rawURL);
		url.Scheme = _tuple[0];
		rest = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ;			$s = -1; return [ptrType$2.nil, err];
    		}
  ;%		_r = strings.ToLower(url.Scheme); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		url.Scheme = _r;
    		if (strings.HasSuffix(rest, "?") && (strings.Count(rest, "?") === 1)) {
  ;�			url.ForceQuery = true;
  ;�			rest = $substring(rest, 0, (rest.length - 1 >> 0));
    		} else {
  ;�			_tuple$1 = split(rest, 63, true);
			rest = _tuple$1[0];
			url.RawQuery = _tuple$1[1];
    		}
    		if (!strings.HasPrefix(rest, "/")) {
    			if (!(url.Scheme === "")) {
  <{				url.Opaque = rest;
  <�				$s = -1; return [url, $ifaceNil];
    			}
    			if (viaRequest) {
  <�				$s = -1; return [ptrType$2.nil, errors.New("invalid URI for request")];
    			}
  >			colon = strings.Index(rest, ":");
  >>			slash = strings.Index(rest, "/");
    			if (colon >= 0 && (slash < 0 || colon < slash)) {
  >�				$s = -1; return [ptrType$2.nil, errors.New("first path segment in URL cannot contain colon")];
    			}
    		}
  ?(		/* */ if ((!(url.Scheme === "") || !viaRequest && !strings.HasPrefix(rest, "///")) && strings.HasPrefix(rest, "//")) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ((!(url.Scheme === "") || !viaRequest && !strings.HasPrefix(rest, "///")) && strings.HasPrefix(rest, "//")) { */ case 2:
  ?�			authority = "";
  ?�			_tuple$2 = split($substring(rest, 2), 47, false);
			authority = _tuple$2[0];
			rest = _tuple$2[1];
  ?�			_r$1 = parseAuthority(authority); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$3 = _r$1;
			url.User = _tuple$3[0];
			url.Host = _tuple$3[1];
			err = _tuple$3[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  @%				$s = -1; return [ptrType$2.nil, err];
    			}
    		/* } */ case 3:
  A 		err$1 = url.setPath(rest);
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  AI			$s = -1; return [ptrType$2.nil, err$1];
    		}
  A]		$s = -1; return [url, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parse }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.authority = authority; $f.colon = colon; $f.err = err; $f.err$1 = err$1; $f.rawURL = rawURL; $f.rest = rest; $f.slash = slash; $f.url = url; $f.viaRequest = viaRequest; $f.$s = $s; $f.$r = $r; return $f;
	};
parse
errors.Newnet/url.URLnet/url.getSchemenet/url.parsenet/url.parseAuthoritynet/url.ptrType$1net/url.ptrType$2net/url.setPath~net/url.splitnet/url.stringContainsCTLBytestrings.Countstrings.HasPrefixstrings.HasSuffixstrings.Indexstrings.ToLower net/url.parseAuthoritynet/urlparseAuthority parseAuthority�d	parseAuthority = function(authority) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, authority, err, host, i, password, user, userinfo, username, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; authority = $f.authority; err = $f.err; host = $f.host; i = $f.i; password = $f.password; user = $f.user; userinfo = $f.userinfo; username = $f.username; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		user = ptrType$1.nil;
		host = "";
		err = $ifaceNil;
  A�		i = strings.LastIndex(authority, "@");
  A�		/* */ if (i < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (i < 0) { */ case 1:
  A�			_r = parseHost(authority); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			host = _tuple[0];
			err = _tuple[1];
    			$s = 3; continue;
		/* } else { */ case 2:
  B$			_r$1 = parseHost($substring(authority, (i + 1 >> 0))); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			host = _tuple$1[0];
			err = _tuple$1[1];
    		/* } */ case 3:
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp = ptrType$1.nil;
			_tmp$1 = "";
			_tmp$2 = err;
			user = _tmp;
			host = _tmp$1;
			err = _tmp$2;
			$s = -1; return [user, host, err];
    		}
    		if (i < 0) {
    			_tmp$3 = ptrType$1.nil;
			_tmp$4 = host;
			_tmp$5 = $ifaceNil;
			user = _tmp$3;
			host = _tmp$4;
			err = _tmp$5;
			$s = -1; return [user, host, err];
    		}
  B�		userinfo = $substring(authority, 0, i);
    		if (!validUserinfo(userinfo)) {
    			_tmp$6 = ptrType$1.nil;
			_tmp$7 = "";
			_tmp$8 = errors.New("net/url: invalid userinfo");
			user = _tmp$6;
			host = _tmp$7;
			err = _tmp$8;
			$s = -1; return [user, host, err];
    		}
    		if (!strings.Contains(userinfo, ":")) {
  CB			_tuple$2 = unescape(userinfo, 5);
			userinfo = _tuple$2[0];
			err = _tuple$2[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$9 = ptrType$1.nil;
				_tmp$10 = "";
				_tmp$11 = err;
				user = _tmp$9;
				host = _tmp$10;
				err = _tmp$11;
				$s = -1; return [user, host, err];
    			}
  C�			user = User(userinfo);
    		} else {
  C�			_tuple$3 = split(userinfo, 58, true);
			username = _tuple$3[0];
			password = _tuple$3[1];
  C�			_tuple$4 = unescape(username, 5);
			username = _tuple$4[0];
			err = _tuple$4[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$12 = ptrType$1.nil;
				_tmp$13 = "";
				_tmp$14 = err;
				user = _tmp$12;
				host = _tmp$13;
				err = _tmp$14;
				$s = -1; return [user, host, err];
    			}
  Da			_tuple$5 = unescape(password, 5);
			password = _tuple$5[0];
			err = _tuple$5[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$15 = ptrType$1.nil;
				_tmp$16 = "";
				_tmp$17 = err;
				user = _tmp$15;
				host = _tmp$16;
				err = _tmp$17;
				$s = -1; return [user, host, err];
    			}
  D�			user = UserPassword(username, password);
    		}
    		_tmp$18 = user;
		_tmp$19 = host;
		_tmp$20 = $ifaceNil;
		user = _tmp$18;
		host = _tmp$19;
		err = _tmp$20;
		$s = -1; return [user, host, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseAuthority }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.authority = authority; $f.err = err; $f.host = host; $f.i = i; $f.password = password; $f.user = user; $f.userinfo = userinfo; $f.username = username; $f.$s = $s; $f.$r = $r; return $f;
	};
parseAuthority
errors.Newnet/url.Usernet/url.UserPasswordnet/url.parseAuthoritynet/url.parseHostnet/url.ptrType$1net/url.splitnet/url.unescapenet/url.validUserinfostrings.Containsstrings.LastIndex net/url.parseHostnet/url	parseHost 	parseHost��	parseHost = function(host) {
		var $24r, $24r$1, _r, _r$1, _tuple, _tuple$1, _tuple$2, _tuple$3, colonPort, colonPort$1, err, err$1, host, host1, host2, host3, i, i$1, zone, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; colonPort = $f.colonPort; colonPort$1 = $f.colonPort$1; err = $f.err; err$1 = $f.err$1; host = $f.host; host1 = $f.host1; host2 = $f.host2; host3 = $f.host3; i = $f.i; i$1 = $f.i$1; zone = $f.zone; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  E�		/* */ if (strings.HasPrefix(host, "[")) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (strings.HasPrefix(host, "[")) { */ case 1:
  F)			i = strings.LastIndex(host, "]");
    			if (i < 0) {
  F[				$s = -1; return ["", errors.New("missing ']' in host")];
    			}
  F�			colonPort = $substring(host, (i + 1 >> 0));
  F�			/* */ if (!validOptionalPort(colonPort)) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!validOptionalPort(colonPort)) { */ case 4:
  F�				_r = fmt.Errorf("invalid port %q after host", new sliceType([new $String(colonPort)])); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = ["", _r];
				$s = 7; case 7: return $24r;
    			/* } */ case 5:
  HZ			zone = strings.Index($substring(host, 0, i), "%25");
    			if (zone >= 0) {
  H�				_tuple = unescape($substring(host, 0, zone), 3);
				host1 = _tuple[0];
				err = _tuple[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  H�					$s = -1; return ["", err];
    				}
  H�				_tuple$1 = unescape($substring(host, zone, i), 4);
				host2 = _tuple$1[0];
				err = _tuple$1[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  I;					$s = -1; return ["", err];
    				}
  IR				_tuple$2 = unescape($substring(host, i), 3);
				host3 = _tuple$2[0];
				err = _tuple$2[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  I�					$s = -1; return ["", err];
    				}
  I�				$s = -1; return [host1 + host2 + host3, $ifaceNil];
    			}
    			$s = 3; continue;
		/* } else { */ case 2:
  I�			i$1 = strings.LastIndex(host, ":");
  I�			/* */ if (!((i$1 === -1))) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (!((i$1 === -1))) { */ case 8:
  J				colonPort$1 = $substring(host, i$1);
  J%				/* */ if (!validOptionalPort(colonPort$1)) { $s = 10; continue; }
				/* */ $s = 11; continue;
    				/* if (!validOptionalPort(colonPort$1)) { */ case 10:
  JK					_r$1 = fmt.Errorf("invalid port %q after host", new sliceType([new $String(colonPort$1)])); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					$24r$1 = ["", _r$1];
					$s = 13; case 13: return $24r$1;
    				/* } */ case 11:
    			/* } */ case 9:
    		/* } */ case 3:
  J�		err$1 = $ifaceNil;
  J�		_tuple$3 = unescape(host, 3);
		host = _tuple$3[0];
		err$1 = _tuple$3[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  J�			$s = -1; return ["", err$1];
    		}
  J�		$s = -1; return [host, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseHost }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.colonPort = colonPort; $f.colonPort$1 = colonPort$1; $f.err = err; $f.err$1 = err$1; $f.host = host; $f.host1 = host1; $f.host2 = host2; $f.host3 = host3; $f.i = i; $f.i$1 = i$1; $f.zone = zone; $f.$s = $s; $f.$r = $r; return $f;
	};
	parseHost	
errors.New
fmt.Errorfnet/url.parseHostnet/url.sliceTypenet/url.unescapenet/url.validOptionalPortstrings.HasPrefixstrings.Indexstrings.LastIndex (*net/url.URL).setPath ��	URL.ptr.prototype.setPath = function(p) {
		var _tuple, err, escp, p, path, u;
		u = this;
  L�		_tuple = unescape(p, 1);
		path = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  M3			return err;
    		}
  MB		u.Path = path;
  MT		escp = escape(path, 1);
    		if (p === escp) {
  M�			u.RawPath = "";
    		} else {
  M�			u.RawPath = p;
    		}
  M�		return $ifaceNil;
    	};
	URL.prototype.setPath = function(p) { return this.$val.setPath(p); };
URLsetPath~net/url.URLnet/url.escapenet/url.unescape (*net/url.URL).EscapedPath �	URL.ptr.prototype.EscapedPath = function() {
		var _tuple, err, p, u;
		u = this;
    		if (!(u.RawPath === "") && validEncoded(u.RawPath, 1)) {
  P			_tuple = unescape(u.RawPath, 1);
			p = _tuple[0];
			err = _tuple[1];
    			if ($interfaceIsEqual(err, $ifaceNil) && p === u.Path) {
  PQ				return u.RawPath;
    			}
    		}
    		if (u.Path === "*") {
  P			return "*";
    		}
  P�		return escape(u.Path, 1);
    	};
	URL.prototype.EscapedPath = function() { return this.$val.EscapedPath(); };
URLnet/url.URLnet/url.escapenet/url.unescapenet/url.validEncoded net/url.validEncodednet/urlvalidEncoded validEncoded�u	validEncoded = function(s, mode) {
		var _1, i, mode, s;
  Q�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			_1 = s.charCodeAt(i);
    			if ((_1 === (33)) || (_1 === (36)) || (_1 === (38)) || (_1 === (39)) || (_1 === (40)) || (_1 === (41)) || (_1 === (42)) || (_1 === (43)) || (_1 === (44)) || (_1 === (59)) || (_1 === (61)) || (_1 === (58)) || (_1 === (64))) {
    			} else if ((_1 === (91)) || (_1 === (93))) {
    			} else if (_1 === (37)) {
    			} else if (shouldEscape(s.charCodeAt(i), mode)) {
  S�				return false;
    			}
  Q�			i = i + (1) >> 0;
    		}
  S�		return true;
    	};
validEncodednet/url.shouldEscapenet/url.validEncoded (*net/url.URL).setFragment �
	URL.ptr.prototype.setFragment = function(f) {
		var _tuple, err, escf, f, frag, u;
		u = this;
  Ta		_tuple = unescape(f, 7);
		frag = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  T�			return err;
    		}
  T�		u.Fragment = frag;
  T�		escf = escape(frag, 7);
    		if (f === escf) {
  U			u.RawFragment = "";
    		} else {
  U4			u.RawFragment = f;
    		}
  UJ		return $ifaceNil;
    	};
	URL.prototype.setFragment = function(f) { return this.$val.setFragment(f); };
URLsetFragment~net/url.URLnet/url.escapenet/url.unescape (*net/url.URL).EscapedFragment ��	URL.ptr.prototype.EscapedFragment = function() {
		var _tuple, err, f, u;
		u = this;
    		if (!(u.RawFragment === "") && validEncoded(u.RawFragment, 7)) {
  W�			_tuple = unescape(u.RawFragment, 7);
			f = _tuple[0];
			err = _tuple[1];
    			if ($interfaceIsEqual(err, $ifaceNil) && f === u.Fragment) {
  W�				return u.RawFragment;
    			}
    		}
  X		return escape(u.Fragment, 7);
    	};
	URL.prototype.EscapedFragment = function() { return this.$val.EscapedFragment(); };
URLnet/url.URLnet/url.escapenet/url.unescapenet/url.validEncoded net/url.validOptionalPortnet/urlvalidOptionalPort validOptionalPort��	validOptionalPort = function(port) {
		var _i, _ref, _rune, b, port;
    		if (port === "") {
  X�			return true;
    		}
    		if (!((port.charCodeAt(0) === 58))) {
  Y			return false;
    		}
  Y		_ref = $substring(port, 1);
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			b = _rune[0];
    			if (b < 48 || b > 57) {
  YR				return false;
    			}
    			_i += _rune[1];
		}
  Yg		return true;
    	};
validOptionalPortnet/url.validOptionalPort (*net/url.URL).String �	URL.ptr.prototype.String = function() {
		var buf, h, i, path, u, ui;
		u = this;
  ]		buf = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
    		if (!(u.Scheme === "")) {
  ]8			buf.WriteString(u.Scheme);
  ]T			buf.WriteByte(58);
    		}
    		if (!(u.Opaque === "")) {
  ]�			buf.WriteString(u.Opaque);
    		} else {
    			if (!(u.Scheme === "") || !(u.Host === "") || !(u.User === ptrType$1.nil)) {
    				if (!(u.Host === "") || !(u.Path === "") || !(u.User === ptrType$1.nil)) {
  ^					buf.WriteString("//");
    				}
  ^7				ui = u.User;
    				if (!(ui === ptrType$1.nil)) {
  ^U					buf.WriteString(ui.String());
  ^v					buf.WriteByte(64);
    				}
  ^�				h = u.Host;
    				if (!(h === "")) {
  ^�					buf.WriteString(escape(h, 3));
    				}
    			}
  ^�			path = u.EscapedPath();
    			if (!(path === "") && !((path.charCodeAt(0) === 47)) && !(u.Host === "")) {
  _0				buf.WriteByte(47);
    			}
    			if (buf.Len() === 0) {
  `�				i = strings.IndexByte(path, 58);
    				if (i > -1 && (strings.IndexByte($substring(path, 0, i), 47) === -1)) {
  a					buf.WriteString("./");
    				}
    			}
  a,			buf.WriteString(path);
    		}
    		if (u.ForceQuery || !(u.RawQuery === "")) {
  an			buf.WriteByte(63);
  a�			buf.WriteString(u.RawQuery);
    		}
    		if (!(u.Fragment === "")) {
  a�			buf.WriteByte(35);
  a�			buf.WriteString(u.EscapedFragment());
    		}
  a�		return buf.String();
    	};
	URL.prototype.String = function() { return this.$val.String(); };
URLnet/url.URLnet/url.escapenet/url.ptrTypenet/url.ptrType$1net/url.sliceType$1strings.Builderstrings.IndexByte (*net/url.URL).Redacted ��	URL.ptr.prototype.Redacted = function() {
		var _tuple, has, ru, u;
		u = this;
    		if (u === ptrType$2.nil) {
  b�			return "";
    		}
  b�		ru = $clone(u, URL);
  b�		_tuple = ru.User.Password();
		has = _tuple[1];
    		if (has) {
  b�			ru.User = UserPassword(ru.User.Username(), "xxxxx");
    		}
  c+		return ru.String();
    	};
	URL.prototype.Redacted = function() { return this.$val.Redacted(); };
URLnet/url.URLnet/url.UserPasswordnet/url.ptrType$2 (net/url.Values).Get �	Values.prototype.Get = function(key) {
		var _entry, key, v, vs;
		v = this.$val;
    		if (v === false) {
  e 			return "";
    		}
  e.		vs = (_entry = v[$String.keyFor(key)], _entry !== undefined ? _entry.v : sliceType$2.nil);
    		if (vs.$length === 0) {
  eP			return "";
    		}
  e^		return (0 >= vs.$length ? ($throwRuntimeError("index out of range"), undefined) : vs.$array[vs.$offset + 0]);
    	};
	$ptrType(Values).prototype.Get = function(key) { return new Values(this.$get()).Get(key); };
Valuesnet/url.Valuesnet/url.sliceType$2 (net/url.Values).Set �a	Values.prototype.Set = function(key, value) {
		var _key, key, v, value;
		v = this.$val;
  e�		_key = key; (v || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: new sliceType$2([value]) };
    	};
	$ptrType(Values).prototype.Set = function(key, value) { return new Values(this.$get()).Set(key, value); };
Valuesnet/url.Valuesnet/url.sliceType$2 (net/url.Values).Add ��	Values.prototype.Add = function(key, value) {
		var _entry, _key, key, v, value;
		v = this.$val;
  fx		_key = key; (v || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: $append((_entry = v[$String.keyFor(key)], _entry !== undefined ? _entry.v : sliceType$2.nil), value) };
    	};
	$ptrType(Values).prototype.Add = function(key, value) { return new Values(this.$get()).Add(key, value); };
Valuesnet/url.Valuesnet/url.sliceType$2 (net/url.Values).Del ��	Values.prototype.Del = function(key) {
		var key, v;
		v = this.$val;
  f�		delete v[$String.keyFor(key)];
    	};
	$ptrType(Values).prototype.Del = function(key) { return new Values(this.$get()).Del(key); };
Valuesnet/url.Values (net/url.Values).Has �]	Values.prototype.Has = function(key) {
		var _entry, _tuple, key, ok, v;
		v = this.$val;
  gP		_tuple = (_entry = v[$String.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [sliceType$2.nil, false]);
		ok = _tuple[1];
  ga		return ok;
    	};
	$ptrType(Values).prototype.Has = function(key) { return new Values(this.$get()).Has(key); };
Valuesnet/url.Valuesnet/url.sliceType$2 net/url.ParseQuerynet/url
ParseQuery 
ParseQuery��	ParseQuery = function(query) {
		var _r, err, m, query, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; err = $f.err; m = $f.m; query = $f.query; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  i�		m = {};
  i�		_r = parseQuery(m, query); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
  i�		$s = -1; return [m, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ParseQuery }; } $f._r = _r; $f.err = err; $f.m = m; $f.query = query; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ParseQuery = ParseQuery;

ParseQuerynet/url.ParseQuerynet/url.parseQuery net/url.parseQuerynet/url
parseQuery 
parseQuery��	parseQuery = function(m, query) {
		var _entry, _key, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, err, err1, i, i$1, key, m, query, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _key = $f._key; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err1 = $f.err1; i = $f.i; i$1 = $f.i$1; key = $f.key; m = $f.m; query = $f.query; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		err = $ifaceNil;
  j		/* while (true) { */ case 1:
			/* if (!(!(query === ""))) { break; } */ if(!(!(query === ""))) { $s = 2; continue; }
  j0			key = query;
  jB			i = strings.IndexAny(key, "&");
    			if (i >= 0) {
  jo				_tmp = $substring(key, 0, i);
				_tmp$1 = $substring(key, (i + 1 >> 0));
				key = _tmp;
				query = _tmp$1;
    			} else {
  j�				query = "";
    			}
  j�			/* */ if (strings.Contains(key, ";")) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (strings.Contains(key, ";")) { */ case 3:
  j�				_r = fmt.Errorf("invalid semicolon separator in query", new sliceType([])); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				err = _r;
  k				/* continue; */ $s = 1; continue;
    			/* } */ case 4:
    			if (key === "") {
  k.				/* continue; */ $s = 1; continue;
    			}
  k=			value = "";
  kN			i$1 = strings.Index(key, "=");
    			if (i$1 >= 0) {
  kx				_tmp$2 = $substring(key, 0, i$1);
				_tmp$3 = $substring(key, (i$1 + 1 >> 0));
				key = _tmp$2;
				value = _tmp$3;
    			}
  k�			_tuple = QueryUnescape(key);
			key = _tuple[0];
			err1 = _tuple[1];
    			if (!($interfaceIsEqual(err1, $ifaceNil))) {
    				if ($interfaceIsEqual(err, $ifaceNil)) {
  k�					err = err1;
    				}
  k�				/* continue; */ $s = 1; continue;
    			}
  l
			_tuple$1 = QueryUnescape(value);
			value = _tuple$1[0];
			err1 = _tuple$1[1];
    			if (!($interfaceIsEqual(err1, $ifaceNil))) {
    				if ($interfaceIsEqual(err, $ifaceNil)) {
  lW					err = err1;
    				}
  lj				/* continue; */ $s = 1; continue;
    			}
  ly			_key = key; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: $append((_entry = m[$String.keyFor(key)], _entry !== undefined ? _entry.v : sliceType$2.nil), value) };
    		$s = 1; continue;
		case 2:
    		err = err;
		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseQuery }; } $f._entry = _entry; $f._key = _key; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err1 = err1; $f.i = i; $f.i$1 = i$1; $f.key = key; $f.m = m; $f.query = query; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};

parseQuery
fmt.Errorfnet/url.QueryUnescapenet/url.parseQuerynet/url.sliceTypenet/url.sliceType$2strings.Containsstrings.Indexstrings.IndexAny (net/url.Values).Encode �
F	Values.prototype.Encode = function() {
		var _entry, _entry$1, _i, _i$1, _i$2, _keys, _ref, _ref$1, _ref$2, buf, k, k$1, keyEscaped, keys, v, v$1, vs, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _keys = $f._keys; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; buf = $f.buf; k = $f.k; k$1 = $f.k$1; keyEscaped = $f.keyEscaped; keys = $f.keys; v = $f.v; v$1 = $f.v$1; vs = $f.vs; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this.$val;
    		if (v === false) {
  m;			$s = -1; return "";
    		}
  mM		buf = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  mb		keys = $makeSlice(sliceType$2, 0, $keys(v).length);
  m�		_ref = v;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			k = _entry.k;
  m�			keys = $append(keys, k);
    			_i++;
		}
  m�		$r = sort.Strings(keys); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  m�		_ref$1 = keys;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			k$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  m�			vs = (_entry$1 = v[$String.keyFor(k$1)], _entry$1 !== undefined ? _entry$1.v : sliceType$2.nil);
  m�			keyEscaped = QueryEscape(k$1);
  n			_ref$2 = vs;
			_i$2 = 0;
			while (true) {
				if (!(_i$2 < _ref$2.$length)) { break; }
				v$1 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
    				if (buf.Len() > 0) {
  nA					buf.WriteByte(38);
    				}
  n\				buf.WriteString(keyEscaped);
  n{				buf.WriteByte(61);
  n�				buf.WriteString(QueryEscape(v$1));
    				_i$2++;
			}
    			_i$1++;
		}
  n�		$s = -1; return buf.String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Values.prototype.Encode }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._keys = _keys; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f.buf = buf; $f.k = k; $f.k$1 = k$1; $f.keyEscaped = keyEscaped; $f.keys = keys; $f.v = v; $f.v$1 = v$1; $f.vs = vs; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(Values).prototype.Encode = function() { return new Values(this.$get()).Encode(); };
Valuesnet/url.QueryEscapenet/url.Valuesnet/url.ptrTypenet/url.sliceType$1net/url.sliceType$2sort.Stringsstrings.Builder net/url.resolvePathnet/urlresolvePath resolvePath�<	resolvePath = function(base, ref) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, base, dst, elem, first, full, i, i$1, index, last, r, ref, remaining, str;
  oc		full = "";
    		if (ref === "") {
  o�			full = base;
    		} else if (!((ref.charCodeAt(0) === 47))) {
  o�			i = strings.LastIndex(base, "/");
  o�			full = $substring(base, 0, (i + 1 >> 0)) + ref;
    		} else {
  o�			full = ref;
    		}
    		if (full === "") {
  p			return "";
    		}
  p*		last = "";
  p8		elem = "";
  pF		i$1 = 0;
  pQ		dst = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  pj		first = true;
  py		remaining = full;
  p�		dst.WriteByte(47);
  p�		while (true) {
			if (!(i$1 >= 0)) { break; }
  p�			i$1 = strings.IndexByte(remaining, 47);
    			if (i$1 < 0) {
  q				_tmp = remaining;
				_tmp$1 = remaining;
				_tmp$2 = "";
				last = _tmp;
				elem = _tmp$1;
				remaining = _tmp$2;
    			} else {
  qZ				_tmp$3 = $substring(remaining, 0, i$1);
				_tmp$4 = $substring(remaining, (i$1 + 1 >> 0));
				elem = _tmp$3;
				remaining = _tmp$4;
    			}
    			if (elem === ".") {
  q�				first = false;
  q�				continue;
    			}
    			if (elem === "..") {
  r				str = $substring(dst.String(), 1);
  r0				index = strings.LastIndexByte(str, 47);
  r]				dst.Reset();
  rl				dst.WriteByte(47);
    				if (index === -1) {
  r�					first = true;
    				} else {
  r�					dst.WriteString($substring(str, 0, index));
    				}
    			} else {
    				if (!first) {
  r�					dst.WriteByte(47);
    				}
  s				dst.WriteString(elem);
  s(				first = false;
    			}
    		}
    		if (last === "." || last === "..") {
  sb			dst.WriteByte(47);
    		}
  s�		r = dst.String();
    		if (r.length > 1 && (r.charCodeAt(1) === 47)) {
  s�			r = $substring(r, 1);
    		}
  s�		return r;
    	};
resolvePathnet/url.ptrTypenet/url.resolvePathnet/url.sliceType$1strings.Builderstrings.IndexBytestrings.LastIndexstrings.LastIndexByte (*net/url.URL).IsAbs ��	URL.ptr.prototype.IsAbs = function() {
		var u;
		u = this;
  tz		return !(u.Scheme === "");
    	};
	URL.prototype.IsAbs = function() { return this.$val.IsAbs(); };
URLnet/url.URL (*net/url.URL).Parse ��	URL.ptr.prototype.Parse = function(ref) {
		var _r, _tuple, err, ref, refURL, u, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; ref = $f.ref; refURL = $f.refURL; u = $f.u; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		u = this;
  u�		_r = Parse(ref); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		refURL = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  u�			$s = -1; return [ptrType$2.nil, err];
    		}
  u�		$s = -1; return [u.ResolveReference(refURL), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: URL.ptr.prototype.Parse }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.ref = ref; $f.refURL = refURL; $f.u = u; $f.$s = $s; $f.$r = $r; return $f;
	};
	URL.prototype.Parse = function(ref) { return this.$val.Parse(ref); };
URLnet/url.Parsenet/url.URLnet/url.ptrType$2 (*net/url.URL).ResolveReference ��	URL.ptr.prototype.ResolveReference = function(ref) {
		var ref, u, url;
		u = this;
  w�		url = $clone(ref, URL);
    		if (ref.Scheme === "") {
  w�			url.Scheme = u.Scheme;
    		}
    		if (!(ref.Scheme === "") || !(ref.Host === "") || !(ref.User === ptrType$1.nil)) {
  x�			url.setPath(resolvePath(ref.EscapedPath(), ""));
  x�			return url;
    		}
    		if (!(ref.Opaque === "")) {
  y			url.User = ptrType$1.nil;
  y,			url.Host = "";
  y<			url.Path = "";
  yL			return url;
    		}
    		if (ref.Path === "" && ref.RawQuery === "") {
  y�			url.RawQuery = u.RawQuery;
    			if (ref.Fragment === "") {
  y�				url.Fragment = u.Fragment;
  y�				url.RawFragment = u.RawFragment;
    			}
    		}
  z,		url.Host = u.Host;
  z?		url.User = u.User;
  zR		url.setPath(resolvePath(u.EscapedPath(), ref.EscapedPath()));
  z�		return url;
    	};
	URL.prototype.ResolveReference = function(ref) { return this.$val.ResolveReference(ref); };
URLnet/url.URLnet/url.ptrType$1net/url.resolvePathnet/url.setPath~ (*net/url.URL).Query ��	URL.ptr.prototype.Query = function() {
		var _r, _tuple, u, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; u = $f.u; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		u = this;
  {P		_r = ParseQuery(u.RawQuery); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
  {p		$s = -1; return v;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: URL.ptr.prototype.Query }; } $f._r = _r; $f._tuple = _tuple; $f.u = u; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	URL.prototype.Query = function() { return this.$val.Query(); };
URLnet/url.ParseQuerynet/url.URL (*net/url.URL).RequestURI �1	URL.ptr.prototype.RequestURI = function() {
		var result, u;
		u = this;
  |		result = u.Opaque;
    		if (result === "") {
  |=			result = u.EscapedPath();
    			if (result === "") {
  |m				result = "/";
    			}
    		} else {
    			if (strings.HasPrefix(result, "//")) {
  |�				result = u.Scheme + ":" + result;
    			}
    		}
    		if (u.ForceQuery || !(u.RawQuery === "")) {
  }			result = result + ("?" + u.RawQuery);
    		}
  }"		return result;
    	};
	URL.prototype.RequestURI = function() { return this.$val.RequestURI(); };
URLnet/url.URLstrings.HasPrefix (*net/url.URL).Hostname ��	URL.ptr.prototype.Hostname = function() {
		var _tuple, host, u;
		u = this;
  ~%		_tuple = splitHostPort(u.Host);
		host = _tuple[0];
  ~G		return host;
    	};
	URL.prototype.Hostname = function() { return this.$val.Hostname(); };
URLnet/url.URLnet/url.splitHostPort (*net/url.URL).Port ��	URL.ptr.prototype.Port = function() {
		var _tuple, port, u;
		u = this;
  		_tuple = splitHostPort(u.Host);
		port = _tuple[1];
  /		return port;
    	};
	URL.prototype.Port = function() { return this.$val.Port(); };
URLnet/url.URLnet/url.splitHostPort net/url.splitHostPortnet/urlsplitHostPort splitHostPort�B	splitHostPort = function(hostPort) {
		var _tmp, _tmp$1, colon, host, hostPort, port;
		host = "";
		port = "";
  �d		host = hostPort;
  �v		colon = strings.LastIndexByte(host, 58);
    		if (!((colon === -1)) && validOptionalPort($substring(host, colon))) {
  ��			_tmp = $substring(host, 0, colon);
			_tmp$1 = $substring(host, (colon + 1 >> 0));
			host = _tmp;
			port = _tmp$1;
    		}
    		if (strings.HasPrefix(host, "[") && strings.HasSuffix(host, "]")) {
  �J			host = $substring(host, 1, (host.length - 1 >> 0));
    		}
  �l		return [host, port];
    	};
splitHostPortnet/url.splitHostPortnet/url.validOptionalPortstrings.HasPrefixstrings.HasSuffixstrings.LastIndexByte (*net/url.URL).MarshalBinary �m	URL.ptr.prototype.MarshalBinary = function() {
		var _tmp, _tmp$1, err, text, u;
		text = sliceType$1.nil;
		err = $ifaceNil;
		u = this;
    		_tmp = (new sliceType$1($stringToBytes(u.String())));
		_tmp$1 = $ifaceNil;
		text = _tmp;
		err = _tmp$1;
		return [text, err];
    	};
	URL.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
URLnet/url.URLnet/url.sliceType$1 (*net/url.URL).UnmarshalBinary �	URL.ptr.prototype.UnmarshalBinary = function(text) {
		var _r, _tuple, err, text, u, u1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; text = $f.text; u = $f.u; u1 = $f.u1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		u = this;
  ��		_r = Parse(($bytesToString(text))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		u1 = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ��			$s = -1; return err;
    		}
  ��		URL.copy(u, u1);
  ��		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: URL.ptr.prototype.UnmarshalBinary }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.text = text; $f.u = u; $f.u1 = u1; $f.$s = $s; $f.$r = $r; return $f;
	};
	URL.prototype.UnmarshalBinary = function(text) { return this.$val.UnmarshalBinary(text); };
URLnet/url.Parsenet/url.URL net/url.validUserinfonet/urlvalidUserinfo validUserinfo��	validUserinfo = function(s) {
		var _1, _i, _ref, _rune, r, s;
  ��		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			r = _rune[0];
    			if (65 <= r && r <= 90) {
  ��				_i += _rune[1];
				continue;
    			}
    			if (97 <= r && r <= 122) {
  �				_i += _rune[1];
				continue;
    			}
    			if (48 <= r && r <= 57) {
  �=				_i += _rune[1];
				continue;
    			}
    			_1 = r;
    			if ((_1 === (45)) || (_1 === (46)) || (_1 === (95)) || (_1 === (58)) || (_1 === (126)) || (_1 === (33)) || (_1 === (36)) || (_1 === (38)) || (_1 === (39)) || (_1 === (40)) || (_1 === (41)) || (_1 === (42)) || (_1 === (43)) || (_1 === (44)) || (_1 === (59)) || (_1 === (61)) || (_1 === (37)) || (_1 === (64))) {
  ��				_i += _rune[1];
				continue;
    			} else {
  ��				return false;
    			}
    			_i += _rune[1];
		}
  ��		return true;
    	};
validUserinfonet/url.validUserinfo net/url.stringContainsCTLBytenet/urlstringContainsCTLByte stringContainsCTLByte�	stringContainsCTLByte = function(s) {
		var b, i, s;
  �|		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  ��			b = s.charCodeAt(i);
    			if (b < 32 || (b === 127)) {
  ��				return true;
    			}
  ��			i = i + (1) >> 0;
    		}
  ��		return false;
    	};
stringContainsCTLBytenet/url.stringContainsCTLByte �"{"Base":34533,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/net/url/url.go","Base":1,"Size":34531,"Lines":[0,55,109,159,160,218,230,231,302,372,442,495,496,505,515,522,530,541,552,554,555,623,643,655,667,678,680,681,729,816,817,850,879,896,900,926,928,929,964,993,1012,1016,1044,1046,1047,1083,1084,1110,1120,1148,1162,1190,1204,1232,1246,1249,1263,1265,1266,1292,1302,1330,1347,1375,1397,1425,1447,1450,1460,1462,1463,1481,1482,1490,1522,1541,1553,1565,1585,1607,1623,1625,1626,1650,1651,1689,1746,1748,1749,1778,1779,1822,1896,1898,1899,1964,2017,2020,2087,2148,2196,2239,2314,2329,2332,2333,2380,2405,2487,2513,2569,2633,2695,2758,2815,2834,2847,2940,2956,2960,2963,2964,2976,3040,3055,3056,3152,3202,3252,3268,3296,3359,3415,3477,3533,3552,3553,3588,3651,3694,3749,3750,3788,3850,3908,3978,3994,4049,4050,4088,4143,4158,4159,4191,4243,4280,4296,4300,4303,4304,4333,4412,4491,4575,4655,4739,4794,4807,4834,4850,4854,4857,4858,4895,4908,4910,4911,4976,5047,5073,5140,5151,5198,5240,5242,5243,5306,5377,5448,5478,5481,5551,5583,5629,5668,5670,5671,5722,5777,5834,5879,5887,5905,5932,5948,5960,5967,6025,6039,6059,6074,6080,6110,6115,6169,6225,6252,6308,6368,6412,6481,6520,6525,6552,6620,6679,6749,6812,6880,6940,6982,7024,7094,7134,7140,7145,7155,7167,7209,7216,7227,7321,7365,7370,7377,7381,7384,7385,7410,7426,7429,7430,7453,7475,7506,7522,7534,7583,7593,7605,7642,7663,7675,7696,7701,7712,7733,7737,7740,7764,7766,7767,7828,7851,7887,7927,7929,7930,8017,8093,8128,8165,8167,8168,8214,8244,8275,8287,8316,8365,8382,8394,8409,8414,8418,8421,8422,8461,8472,8475,8476,8494,8508,8509,8542,8569,8590,8600,8629,8632,8633,8653,8666,8698,8718,8733,8738,8742,8761,8764,8765,8773,8804,8826,8875,8889,8896,8926,8940,8967,8994,9004,9015,9030,9037,9041,9044,9062,9064,9065,9130,9133,9169,9172,9230,9233,9309,9312,9348,9351,9431,9512,9596,9678,9733,9736,9815,9855,9873,9893,9939,9999,10043,10114,10183,10256,10316,10379,10456,10458,10459,10519,10543,10582,10621,10623,10624,10692,10709,10712,10777,10831,10894,10956,11020,11077,11121,11123,11124,11191,11263,11334,11364,11387,11407,11427,11445,11447,11448,11482,11521,11536,11548,11551,11570,11572,11573,11648,11695,11710,11729,11732,11766,11768,11769,11841,11870,11907,11922,11934,11937,11982,12002,12054,12057,12067,12069,12070,12114,12158,12213,12278,12314,12331,12342,12395,12411,12476,12491,12518,12523,12540,12555,12612,12617,12657,12668,12716,12750,12776,12780,12783,12807,12809,12810,12885,12957,13028,13089,13121,13133,13148,13151,13162,13186,13189,13210,13212,13213,13261,13264,13328,13393,13458,13496,13538,13556,13593,13622,13639,13677,13680,13697,13715,13718,13764,13807,13810,13827,13829,13830,13904,13970,14018,14079,14153,14205,14238,14255,14298,14301,14318,14320,14321,14384,14463,14543,14610,14669,14686,14701,14702,14738,14808,14811,14812,14845,14883,14886,14903,14904,14924,14941,14959,14962,14963,15019,15058,15118,15136,15139,15181,15182,15250,15274,15302,15312,15358,15361,15362,15398,15422,15479,15500,15519,15523,15541,15594,15598,15599,15671,15704,15709,15731,15813,15895,15931,15967,16017,16082,16158,16162,16165,16166,16274,16297,16345,16399,16417,16436,16440,16443,16482,16556,16634,16667,16710,16728,16731,16748,16750,16751,16832,16872,16884,16919,16929,16970,16973,16990,17012,17015,17027,17051,17054,17081,17112,17170,17173,17212,17286,17309,17313,17337,17347,17398,17472,17495,17499,17573,17596,17600,17642,17645,17669,17671,17672,17726,17767,17813,17848,17899,17958,17994,18007,18055,18059,18085,18122,18188,18192,18193,18255,18323,18391,18431,18499,18519,18560,18577,18628,18647,18666,18671,18723,18742,18761,18766,18814,18833,18852,18857,18894,18898,18954,18978,19015,19081,19085,19088,19089,19104,19161,19178,19181,19199,19201,19202,19279,19356,19414,19430,19497,19574,19652,19665,19705,19743,19760,19773,19776,19791,19841,19872,19889,19899,19915,19918,19930,19932,19933,19984,20053,20125,20192,20212,20278,20296,20351,20382,20419,20480,20524,20557,20577,20581,20584,20604,20647,20650,20685,20687,20688,20759,20781,20853,20903,20934,20961,21025,21080,21130,21167,21183,21256,21265,21282,21353,21365,21405,21416,21449,21466,21471,21475,21478,21491,21493,21494,21555,21599,21641,21658,21671,21674,21693,21747,21778,21799,21809,21829,21832,21844,21846,21847,21906,21979,22063,22138,22158,22225,22284,22319,22360,22433,22485,22522,22546,22550,22553,22596,22598,22599,22667,22690,22733,22750,22764,22767,22788,22803,22806,22836,22862,22878,22882,22885,22898,22900,22901,22956,23001,23004,23036,23082,23085,23142,23180,23229,23281,23284,23334,23381,23426,23469,23526,23579,23635,23684,23732,23783,23815,23840,23861,23889,23910,23913,23934,23962,23972,24027,24081,24107,24112,24144,24177,24200,24205,24234,24277,24282,24286,24312,24364,24386,24390,24412,24433,24506,24581,24650,24724,24746,24838,24864,24869,24873,24897,24900,24939,24960,24990,24993,25016,25037,25076,25079,25100,25102,25103,25170,25213,25247,25262,25274,25277,25278,25288,25328,25382,25385,25405,25407,25408,25457,25519,25578,25601,25633,25634,25693,25756,25816,25829,25870,25885,25897,25900,25914,25933,25945,25948,25962,25964,25965,26020,26031,26072,26098,26100,26101,26158,26189,26230,26262,26264,26265,26312,26346,26362,26364,26365,26407,26446,26463,26474,26476,26477,26539,26591,26653,26725,26749,26752,26833,26909,26919,26994,27042,27061,27090,27105,27107,27108,27162,27181,27196,27243,27278,27289,27303,27307,27341,27401,27413,27417,27434,27446,27450,27464,27508,27543,27547,27581,27600,27619,27634,27639,27651,27655,27692,27711,27730,27745,27750,27762,27766,27799,27802,27814,27816,27817,27872,27911,27945,27960,27972,27975,28000,28035,28055,28080,28083,28103,28129,28142,28173,28198,28220,28243,28248,28279,28301,28336,28340,28343,28364,28366,28367,28434,28465,28509,28526,28542,28556,28583,28619,28645,28655,28668,28671,28688,28700,28703,28704,28711,28725,28739,28750,28773,28776,28791,28810,28864,28884,28898,28938,28951,29003,29014,29066,29070,29089,29106,29117,29129,29133,29134,29154,29201,29228,29272,29273,29288,29310,29330,29347,29359,29392,29397,29408,29423,29446,29451,29476,29493,29497,29500,29501,29535,29556,29559,29560,29612,29631,29663,29675,29678,29688,29690,29691,29737,29787,29816,29839,29841,29842,29913,29977,30049,30097,30124,30141,30159,30162,30202,30204,30205,30274,30345,30415,30484,30555,30598,30646,30659,30682,30706,30709,30769,30813,30883,30910,30960,30974,30977,31000,31017,31033,31049,31063,31066,31109,31137,31163,31192,31227,31231,31234,31274,31293,31312,31374,31387,31389,31390,31453,31500,31535,31566,31598,31608,31610,31611,31672,31727,31763,31783,31802,31829,31849,31865,31869,31879,31918,31954,31958,31961,32000,32029,32032,32047,32049,32050,32122,32125,32205,32257,32291,32325,32338,32340,32341,32409,32412,32493,32523,32557,32570,32572,32573,32652,32728,32808,32866,32883,32884,32927,32980,33024,33027,33028,33095,33126,33129,33130,33138,33140,33141,33182,33289,33290,33347,33379,33381,33382,33433,33465,33482,33495,33498,33508,33520,33522,33523,33598,33616,33686,33745,33800,33851,33854,33930,33966,33989,34017,34029,34033,34061,34073,34077,34105,34117,34121,34134,34187,34235,34247,34258,34274,34278,34281,34294,34296,34297,34378,34422,34453,34465,34493,34508,34512,34515,34529],"Infos":null}]}
 