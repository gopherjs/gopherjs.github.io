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
GoLinkname�� Implementation�� 	Reference��   ��2��&vendor/golang.org/x/net/http/httpproxy	httpproxyerrorsfmtnetnet/urlosstringsunicode/utf8vendor/golang.org/x/net/idna�Di �� 	HTTPProxy
HTTPSProxyNoProxyCGI	ProxyFunccfgConfigreqURLURLnet/urlSchemeOpaqueUserUserinfoHostPathRawPath
ForceQueryRawQueryFragmentRawFragmentsetPathupEscapedPathsetFragmentfEscapedFragmentStringRedactedIsAbsParserefResolveReferenceQueryValues
RequestURIHostnamePortMarshalBinarytexterrUnmarshalBinaryusernamepasswordpasswordSetUsernamePasswordGetvkeySetvalueAddDelHasEncode	httpproxyFromEnvironmenturl               0 7 >B<<  7?  A   T   " ,:   C7F    _ ]BhB
 J   Q   Xk   f   k   p   x    �   �   �  <<<<<<<<<<<<< �B<<<<<T m � �� �    � ��    � �� �    � ��    � ��    � ��    � ��     � �� �  �    � �� ��  �  � ��   � � ��    � ��    � ��    � ��  �� � � �� ��   B �   �   �   hhhT � � ��    � ��       � ��   �T � � �� �    � �� � �   � �� � �   � �� �   � �� �     � ��    � 01�AB� >�]���( errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  net	net = $packages["net"];
��    		$r = net.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  url	url = $packages["net/url"];
��    		$r = url.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  idna3	idna = $packages["vendor/golang.org/x/net/idna"];
��    		$r = idna.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Config��	Config = $pkg.Config = $newType(0, $kindStruct, "httpproxy.Config", true, "vendor/golang.org/x/net/http/httpproxy", true, function(HTTPProxy_, HTTPSProxy_, NoProxy_, CGI_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.HTTPProxy = "";
			this.HTTPSProxy = "";
			this.NoProxy = "";
			this.CGI = false;
			return;
		}
		this.HTTPProxy = HTTPProxy_;
		this.HTTPSProxy = HTTPSProxy_;
		this.NoProxy = NoProxy_;
		this.CGI = CGI_;
	});
o	ptrType$2.methods = [{prop: "ProxyFunc", name: "ProxyFunc", pkg: "", typ: $funcType([], [funcType], false)}];
��	Config.init("", [{prop: "HTTPProxy", name: "HTTPProxy", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "HTTPSProxy", name: "HTTPSProxy", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "NoProxy", name: "NoProxy", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "CGI", name: "CGI", embedded: false, exported: true, typ: $Bool, tag: ""}]);
Config-vendor/golang.org/x/net/http/httpproxy.Config/vendor/golang.org/x/net/http/httpproxy.funcType.vendor/golang.org/x/net/http/httpproxy.ptrType0vendor/golang.org/x/net/http/httpproxy.ptrType$2  config�y	config = $pkg.config = $newType(0, $kindStruct, "httpproxy.config", true, "vendor/golang.org/x/net/http/httpproxy", false, function(Config_, httpsProxy_, httpProxy_, ipMatchers_, domainMatchers_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Config = new Config.ptr("", "", "", false);
			this.httpsProxy = ptrType.nil;
			this.httpProxy = ptrType.nil;
			this.ipMatchers = sliceType$1.nil;
			this.domainMatchers = sliceType$1.nil;
			return;
		}
		this.Config = Config_;
		this.httpsProxy = httpsProxy_;
		this.httpProxy = httpProxy_;
		this.ipMatchers = ipMatchers_;
		this.domainMatchers = domainMatchers_;
	});
��	ptrType$3.methods = [{prop: "proxyForURL", name: "proxyForURL", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([ptrType], [ptrType, $error], false)}, {prop: "useProxy", name: "useProxy", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String], [$Bool], false)}, {prop: "init", name: "init", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([], [], false)}];
�,	config.init("vendor/golang.org/x/net/http/httpproxy", [{prop: "Config", name: "Config", embedded: true, exported: true, typ: Config, tag: ""}, {prop: "httpsProxy", name: "httpsProxy", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "httpProxy", name: "httpProxy", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "ipMatchers", name: "ipMatchers", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "domainMatchers", name: "domainMatchers", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
config-vendor/golang.org/x/net/http/httpproxy.Config-vendor/golang.org/x/net/http/httpproxy.config.vendor/golang.org/x/net/http/httpproxy.ptrType0vendor/golang.org/x/net/http/httpproxy.ptrType$32vendor/golang.org/x/net/http/httpproxy.sliceType$1  matcher��	matcher = $pkg.matcher = $newType(8, $kindInterface, "httpproxy.matcher", true, "vendor/golang.org/x/net/http/httpproxy", false, null);
��	matcher.init([{prop: "match", name: "match", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String, $String, net.IP], [$Bool], false)}]);
matchernet.IP.vendor/golang.org/x/net/http/httpproxy.matcher  allMatch��	allMatch = $pkg.allMatch = $newType(0, $kindStruct, "httpproxy.allMatch", true, "vendor/golang.org/x/net/http/httpproxy", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	allMatch.methods = [{prop: "match", name: "match", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String, $String, net.IP], [$Bool], false)}];
	allMatch.init("", []);
allMatchnet.IP/vendor/golang.org/x/net/http/httpproxy.allMatch  	cidrMatch�	cidrMatch = $pkg.cidrMatch = $newType(0, $kindStruct, "httpproxy.cidrMatch", true, "vendor/golang.org/x/net/http/httpproxy", false, function(cidr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.cidr = ptrType$1.nil;
			return;
		}
		this.cidr = cidr_;
	});
��	cidrMatch.methods = [{prop: "match", name: "match", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String, $String, net.IP], [$Bool], false)}];
��	cidrMatch.init("vendor/golang.org/x/net/http/httpproxy", [{prop: "cidr", name: "cidr", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
	cidrMatchnet.IP0vendor/golang.org/x/net/http/httpproxy.cidrMatch0vendor/golang.org/x/net/http/httpproxy.ptrType$1  ipMatch�0	ipMatch = $pkg.ipMatch = $newType(0, $kindStruct, "httpproxy.ipMatch", true, "vendor/golang.org/x/net/http/httpproxy", false, function(ip_, port_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.ip = net.IP.nil;
			this.port = "";
			return;
		}
		this.ip = ip_;
		this.port = port_;
	});
��	ipMatch.methods = [{prop: "match", name: "match", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String, $String, net.IP], [$Bool], false)}];
��	ipMatch.init("vendor/golang.org/x/net/http/httpproxy", [{prop: "ip", name: "ip", embedded: false, exported: false, typ: net.IP, tag: ""}, {prop: "port", name: "port", embedded: false, exported: false, typ: $String, tag: ""}]);
ipMatchnet.IP.vendor/golang.org/x/net/http/httpproxy.ipMatch  domainMatch��	domainMatch = $pkg.domainMatch = $newType(0, $kindStruct, "httpproxy.domainMatch", true, "vendor/golang.org/x/net/http/httpproxy", false, function(host_, port_, matchHost_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.host = "";
			this.port = "";
			this.matchHost = false;
			return;
		}
		this.host = host_;
		this.port = port_;
		this.matchHost = matchHost_;
	});
��	domainMatch.methods = [{prop: "match", name: "match", pkg: "vendor/golang.org/x/net/http/httpproxy", typ: $funcType([$String, $String, net.IP], [$Bool], false)}];
�L	domainMatch.init("vendor/golang.org/x/net/http/httpproxy", [{prop: "host", name: "host", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "port", name: "port", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "matchHost", name: "matchHost", embedded: false, exported: false, typ: $Bool, tag: ""}]);
domainMatchnet.IP2vendor/golang.org/x/net/http/httpproxy.domainMatch  	sliceType"	sliceType = $sliceType($String);
	sliceType  ptrType	ptrType = $ptrType(url.URL);
ptrTypenet/url.URL  sliceType$1$	sliceType$1 = $sliceType(matcher);
sliceType$1.vendor/golang.org/x/net/http/httpproxy.matcher  sliceType$2,	sliceType$2 = $sliceType($emptyInterface);
sliceType$2  	ptrType$1"	ptrType$1 = $ptrType(net.IPNet);
	ptrType$1	net.IPNet  funcType<	funcType = $funcType([ptrType], [ptrType, $error], false);
funcType.vendor/golang.org/x/net/http/httpproxy.ptrType  	ptrType$2	ptrType$2 = $ptrType(Config);
	ptrType$2-vendor/golang.org/x/net/http/httpproxy.Config  	ptrType$3	ptrType$3 = $ptrType(config);
	ptrType$3-vendor/golang.org/x/net/http/httpproxy.config  portMapportMap  {  �		portMap = $makeMap($String.keyFor, [{ k: "http", v: "80" }, { k: "https", v: "443" }, { k: "socks5", v: "1080" }]);
portMap.vendor/golang.org/x/net/http/httpproxy.portMap 6vendor/golang.org/x/net/http/httpproxy.FromEnvironment&vendor/golang.org/x/net/http/httpproxyFromEnvironment FromEnvironment�<	FromEnvironment = function() {
		var $24r, _r, _r$1, _r$2, _r$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = getEnvAny(new sliceType(["HTTP_PROXY", "http_proxy"])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = getEnvAny(new sliceType(["HTTPS_PROXY", "https_proxy"])); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = getEnvAny(new sliceType(["NO_PROXY", "no_proxy"])); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = os.Getenv("REQUEST_METHOD"); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$24r = new Config.ptr(_r, _r$1, _r$2, !(_r$3 === ""));
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FromEnvironment }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.FromEnvironment = FromEnvironment;
FromEnvironment	os.Getenv-vendor/golang.org/x/net/http/httpproxy.Config6vendor/golang.org/x/net/http/httpproxy.FromEnvironment0vendor/golang.org/x/net/http/httpproxy.getEnvAny0vendor/golang.org/x/net/http/httpproxy.sliceType 0vendor/golang.org/x/net/http/httpproxy.getEnvAny&vendor/golang.org/x/net/http/httpproxy	getEnvAny 	getEnvAny�O	getEnvAny = function(names) {
		var _i, _r, _ref, n, names, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; n = $f.n; names = $f.names; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_ref = names;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			n = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  			_r = os.Getenv(n); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			val = _r;
    			if (!(val === "")) {
  9				$s = -1; return val;
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  L		$s = -1; return "";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: getEnvAny }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.n = n; $f.names = names; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	getEnvAny	os.Getenv0vendor/golang.org/x/net/http/httpproxy.getEnvAny :(*vendor/golang.org/x/net/http/httpproxy.Config).ProxyFunc �C	Config.ptr.prototype.ProxyFunc = function() {
		var cfg, cfg1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; cfg = $f.cfg; cfg1 = $f.cfg1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cfg = this;
  �		cfg1 = new config.ptr($clone(cfg, Config), ptrType.nil, ptrType.nil, sliceType$1.nil, sliceType$1.nil);
  �		$r = cfg1.init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return $methodVal(cfg1, "proxyForURL");
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Config.ptr.prototype.ProxyFunc }; } $f.cfg = cfg; $f.cfg1 = cfg1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Config.prototype.ProxyFunc = function() { return this.$val.ProxyFunc(); };
Confignet/url.URL-vendor/golang.org/x/net/http/httpproxy.Config-vendor/golang.org/x/net/http/httpproxy.config,vendor/golang.org/x/net/http/httpproxy.init~.vendor/golang.org/x/net/http/httpproxy.matcher3vendor/golang.org/x/net/http/httpproxy.proxyForURL~.vendor/golang.org/x/net/http/httpproxy.ptrType2vendor/golang.org/x/net/http/httpproxy.sliceType$1 <(*vendor/golang.org/x/net/http/httpproxy.config).proxyForURL ��	config.ptr.prototype.proxyForURL = function(reqURL) {
		var _r, _r$1, cfg, proxy, reqURL, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; cfg = $f.cfg; proxy = $f.proxy; reqURL = $f.reqURL; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cfg = this;
  a		proxy = ptrType.nil;
    		if (reqURL.Scheme === "https") {
  �			proxy = cfg.httpsProxy;
    		} else if (reqURL.Scheme === "http") {
  �			proxy = cfg.httpProxy;
    			if (!(proxy === ptrType.nil) && cfg.Config.CGI) {
  				$s = -1; return [ptrType.nil, errors.New("refusing to use HTTP_PROXY value in CGI environment; see golang.org/s/cgihttpproxy")];
    			}
    		}
    		if (proxy === ptrType.nil) {
  �			$s = -1; return [ptrType.nil, $ifaceNil];
    		}
  �		_r = canonicalAddr(reqURL); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = cfg.useProxy(_r); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (!_r$1) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!_r$1) { */ case 1:
  �			$s = -1; return [ptrType.nil, $ifaceNil];
    		/* } */ case 2:
  �		$s = -1; return [proxy, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: config.ptr.prototype.proxyForURL }; } $f._r = _r; $f._r$1 = _r$1; $f.cfg = cfg; $f.proxy = proxy; $f.reqURL = reqURL; $f.$s = $s; $f.$r = $r; return $f;
	};
	config.prototype.proxyForURL = function(reqURL) { return this.$val.proxyForURL(reqURL); };
configproxyForURL~
errors.New4vendor/golang.org/x/net/http/httpproxy.canonicalAddr-vendor/golang.org/x/net/http/httpproxy.config.vendor/golang.org/x/net/http/httpproxy.ptrType0vendor/golang.org/x/net/http/httpproxy.useProxy~ 1vendor/golang.org/x/net/http/httpproxy.parseProxy&vendor/golang.org/x/net/http/httpproxy
parseProxy 
parseProxy�	G	parseProxy = function(proxy) {
		var $24r, _r, _r$1, _r$2, _tuple, _tuple$1, err, err$1, proxy, proxyURL, proxyURL$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err$1 = $f.err$1; proxy = $f.proxy; proxyURL = $f.proxyURL; proxyURL$1 = $f.proxyURL$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (proxy === "") {
  @			$s = -1; return [ptrType.nil, $ifaceNil];
    		}
  U		_r = url.Parse(proxy); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		proxyURL = _tuple[0];
		err = _tuple[1];
  x		/* */ if (!($interfaceIsEqual(err, $ifaceNil)) || (!(proxyURL.Scheme === "http") && !(proxyURL.Scheme === "https") && !(proxyURL.Scheme === "socks5"))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil)) || (!(proxyURL.Scheme === "http") && !(proxyURL.Scheme === "https") && !(proxyURL.Scheme === "socks5"))) { */ case 2:
  �			_r$1 = url.Parse("http://" + proxy); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			proxyURL$1 = _tuple$1[0];
			err$1 = _tuple$1[1];
    			if ($interfaceIsEqual(err$1, $ifaceNil)) {
  �				$s = -1; return [proxyURL$1, $ifaceNil];
    			}
    		/* } */ case 3:
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 5:
  �			_r$2 = fmt.Errorf("invalid proxy address %q: %v", new sliceType$2([new $String(proxy), err])); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r = [ptrType.nil, _r$2];
			$s = 8; case 8: return $24r;
    		/* } */ case 6:
  D		$s = -1; return [proxyURL, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseProxy }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err$1 = err$1; $f.proxy = proxy; $f.proxyURL = proxyURL; $f.proxyURL$1 = proxyURL$1; $f.$s = $s; $f.$r = $r; return $f;
	};

parseProxy
fmt.Errorfnet/url.Parse1vendor/golang.org/x/net/http/httpproxy.parseProxy.vendor/golang.org/x/net/http/httpproxy.ptrType2vendor/golang.org/x/net/http/httpproxy.sliceType$2 9(*vendor/golang.org/x/net/http/httpproxy.config).useProxy �	config.ptr.prototype.useProxy = function(addr) {
		var _i, _i$1, _r, _r$1, _r$2, _r$3, _r$4, _ref, _ref$1, _tuple, addr, cfg, err, host, ip, m, m$1, port, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _ref = $f._ref; _ref$1 = $f._ref$1; _tuple = $f._tuple; addr = $f.addr; cfg = $f.cfg; err = $f.err; host = $f.host; ip = $f.ip; m = $f.m; m$1 = $f.m$1; port = $f.port; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cfg = this;
    		if (addr.length === 0) {
  [			$s = -1; return true;
    		}
  k		_r = net.SplitHostPort(addr); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		host = _tuple[0];
		port = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return false;
    		}
    		if (host === "localhost") {
  �			$s = -1; return false;
    		}
  �		ip = net.ParseIP(host);
    		if (!(ip === net.IP.nil)) {
    			if (ip.IsLoopback()) {
  (				$s = -1; return false;
    			}
    		}
  >		_r$1 = strings.TrimSpace(host); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = strings.ToLower(_r$1); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		addr = _r$2;
  p		/* */ if (!(ip === net.IP.nil)) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (!(ip === net.IP.nil)) { */ case 4:
  �			_ref = cfg.ipMatchers;
			_i = 0;
			/* while (true) { */ case 6:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 7; continue; }
				m = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �				_r$3 = m.match(addr, port, ip); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				/* */ if (_r$3) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if (_r$3) { */ case 8:
  �					$s = -1; return false;
    				/* } */ case 9:
    				_i++;
			$s = 6; continue;
			case 7:
    		/* } */ case 5:
  �		_ref$1 = cfg.domainMatchers;
		_i$1 = 0;
		/* while (true) { */ case 11:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 12; continue; }
			m$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  			_r$4 = m$1.match(addr, port, ip); /* */ $s = 15; case 15: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* */ if (_r$4) { $s = 13; continue; }
			/* */ $s = 14; continue;
    			/* if (_r$4) { */ case 13:
  +				$s = -1; return false;
    			/* } */ case 14:
    			_i$1++;
		$s = 11; continue;
		case 12:
  @		$s = -1; return true;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: config.ptr.prototype.useProxy }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tuple = _tuple; $f.addr = addr; $f.cfg = cfg; $f.err = err; $f.host = host; $f.ip = ip; $f.m = m; $f.m$1 = m$1; $f.port = port; $f.$s = $s; $f.$r = $r; return $f;
	};
	config.prototype.useProxy = function(addr) { return this.$val.useProxy(addr); };
config	useProxy~net.IPnet.ParseIPnet.SplitHostPortstrings.ToLowerstrings.TrimSpace-vendor/golang.org/x/net/http/httpproxy.config-vendor/golang.org/x/net/http/httpproxy.match~ 5(*vendor/golang.org/x/net/http/httpproxy.config).init �0	config.ptr.prototype.init = function() {
		var _i, _r, _r$1, _r$2, _r$3, _r$4, _ref, _tuple, _tuple$1, _tuple$2, _tuple$3, c, err, err$1, err$2, err$3, matchHost, p, parsed, parsed$1, phost, pip, pnet, pport, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; c = $f.c; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; matchHost = $f.matchHost; p = $f.p; parsed = $f.parsed; parsed$1 = $f.parsed$1; phost = $f.phost; pip = $f.pip; pnet = $f.pnet; pport = $f.pport; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  m		_r = parseProxy(c.Config.HTTPProxy); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		parsed = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  �			c.httpProxy = parsed;
    		}
  �		_r$1 = parseProxy(c.Config.HTTPSProxy); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		parsed$1 = _tuple$1[0];
		err$1 = _tuple$1[1];
    		if ($interfaceIsEqual(err$1, $ifaceNil)) {
  �			c.httpsProxy = parsed$1;
    		}
  		_ref = strings.Split(c.Config.NoProxy, ",");
		_i = 0;
		/* while (true) { */ case 3:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 4; continue; }
			p = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  G			_r$2 = strings.TrimSpace(p); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = strings.ToLower(_r$2); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			p = _r$3;
    			if (p.length === 0) {
  �				_i++;
				/* continue; */ $s = 3; continue;
    			}
    			if (p === "*") {
  �				c.ipMatchers = new sliceType$1([(x = new allMatch.ptr(), new x.constructor.elem(x))]);
  �				c.domainMatchers = new sliceType$1([(x$1 = new allMatch.ptr(), new x$1.constructor.elem(x$1))]);
  �				$s = -1; return;
    			}
  '			_tuple$2 = net.ParseCIDR(p);
			pnet = _tuple$2[1];
			err$2 = _tuple$2[2];
    			if ($interfaceIsEqual(err$2, $ifaceNil)) {
  Y				c.ipMatchers = $append(c.ipMatchers, (x$2 = new cidrMatch.ptr(pnet), new x$2.constructor.elem(x$2)));
  �				_i++;
				/* continue; */ $s = 3; continue;
    			}
  �			_r$4 = net.SplitHostPort(p); /* */ $s = 7; case 7: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple$3 = _r$4;
			phost = _tuple$3[0];
			pport = _tuple$3[1];
			err$3 = _tuple$3[2];
    			if ($interfaceIsEqual(err$3, $ifaceNil)) {
    				if (phost.length === 0) {
  `					_i++;
					/* continue; */ $s = 3; continue;
    				}
    				if ((phost.charCodeAt(0) === 91) && (phost.charCodeAt((phost.length - 1 >> 0)) === 93)) {
  �					phost = $substring(phost, 1, (phost.length - 1 >> 0));
    				}
    			} else {
  �				phost = p;
    			}
  �			pip = net.ParseIP(phost);
    			if (!(pip === net.IP.nil)) {
  )				c.ipMatchers = $append(c.ipMatchers, (x$3 = new ipMatch.ptr(pip, pport), new x$3.constructor.elem(x$3)));
  o				_i++;
				/* continue; */ $s = 3; continue;
    			}
    			if (phost.length === 0) {
  �				_i++;
				/* continue; */ $s = 3; continue;
    			}
    			if (strings.HasPrefix(phost, "*.")) {
  �				phost = $substring(phost, 1);
    			}
  �			matchHost = false;
    			if (!((phost.charCodeAt(0) === 46))) {
  �				matchHost = true;
  �				phost = "." + phost;
    			}
  			c.domainMatchers = $append(c.domainMatchers, (x$4 = new domainMatch.ptr(phost, pport, matchHost), new x$4.constructor.elem(x$4)));
    			_i++;
		$s = 3; continue;
		case 4:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: config.ptr.prototype.init }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.c = c; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.matchHost = matchHost; $f.p = p; $f.parsed = parsed; $f.parsed$1 = parsed$1; $f.phost = phost; $f.pip = pip; $f.pnet = pnet; $f.pport = pport; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	config.prototype.init = function() { return this.$val.init(); };
configinit~net.IP	net.IPNetnet.ParseCIDRnet.ParseIPnet.SplitHostPortstrings.HasPrefixstrings.Splitstrings.ToLowerstrings.TrimSpace/vendor/golang.org/x/net/http/httpproxy.allMatch0vendor/golang.org/x/net/http/httpproxy.cidrMatch-vendor/golang.org/x/net/http/httpproxy.config2vendor/golang.org/x/net/http/httpproxy.domainMatch.vendor/golang.org/x/net/http/httpproxy.ipMatch1vendor/golang.org/x/net/http/httpproxy.parseProxy0vendor/golang.org/x/net/http/httpproxy.ptrType$12vendor/golang.org/x/net/http/httpproxy.sliceType$1 4vendor/golang.org/x/net/http/httpproxy.canonicalAddr&vendor/golang.org/x/net/http/httpproxycanonicalAddr canonicalAddr��	canonicalAddr = function(url$1) {
		var _entry, _r, _tuple, addr, err, port, url$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _r = $f._r; _tuple = $f._tuple; addr = $f.addr; err = $f.err; port = $f.port; url$1 = $f.url$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  J		addr = url$1.Hostname();
  e		_r = idnaASCII(addr); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  �			addr = v;
    		}
  �		port = url$1.Port();
    		if (port === "") {
  �			port = (_entry = portMap[$String.keyFor(url$1.Scheme)], _entry !== undefined ? _entry.v : "");
    		}
  �		$s = -1; return net.JoinHostPort(addr, port);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: canonicalAddr }; } $f._entry = _entry; $f._r = _r; $f._tuple = _tuple; $f.addr = addr; $f.err = err; $f.port = port; $f.url$1 = url$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
canonicalAddrnet.JoinHostPort4vendor/golang.org/x/net/http/httpproxy.canonicalAddr0vendor/golang.org/x/net/http/httpproxy.idnaASCII.vendor/golang.org/x/net/http/httpproxy.portMap .vendor/golang.org/x/net/http/httpproxy.hasPort&vendor/golang.org/x/net/http/httpproxyhasPort hasPortp	hasPort = function(s) {
		var s;
   �		return strings.LastIndex(s, ":") > strings.LastIndex(s, "]");
    	};
hasPortstrings.LastIndex.vendor/golang.org/x/net/http/httpproxy.hasPort 0vendor/golang.org/x/net/http/httpproxy.idnaASCII&vendor/golang.org/x/net/http/httpproxy	idnaASCII 	idnaASCII��	idnaASCII = function(v) {
		var $24r, _r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (isASCII(v)) {
  #v			$s = -1; return [v, $ifaceNil];
    		}
  #�		_r = idna.Lookup.ToASCII(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: idnaASCII }; } $f.$24r = $24r; $f._r = _r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	idnaASCII0vendor/golang.org/x/net/http/httpproxy.idnaASCII.vendor/golang.org/x/net/http/httpproxy.isASCII#vendor/golang.org/x/net/idna.Lookup .vendor/golang.org/x/net/http/httpproxy.isASCII&vendor/golang.org/x/net/http/httpproxyisASCII isASCII��	isASCII = function(s) {
		var i, s;
  #�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) >= 128) {
  $				return false;
    			}
  #�			i = i + (1) >> 0;
    		}
  $		return true;
    	};
isASCII.vendor/golang.org/x/net/http/httpproxy.isASCII 7(vendor/golang.org/x/net/http/httpproxy.allMatch).match ��	allMatch.ptr.prototype.match = function(host, port, ip) {
		var a, host, ip, port;
		a = this;
  %�		return true;
    	};
	allMatch.prototype.match = function(host, port, ip) { return this.$val.match(host, port, ip); };
allMatchmatch~/vendor/golang.org/x/net/http/httpproxy.allMatch 8(vendor/golang.org/x/net/http/httpproxy.cidrMatch).match ��	cidrMatch.ptr.prototype.match = function(host, port, ip) {
		var host, ip, m, port;
		m = this;
  &		return m.cidr.Contains(ip);
    	};
	cidrMatch.prototype.match = function(host, port, ip) { return this.$val.match(host, port, ip); };
	cidrMatchmatch~0vendor/golang.org/x/net/http/httpproxy.cidrMatch 6(vendor/golang.org/x/net/http/httpproxy.ipMatch).match �5	ipMatch.ptr.prototype.match = function(host, port, ip) {
		var host, ip, m, port;
		m = this;
    		if (m.ip.Equal(ip)) {
  &�			return m.port === "" || m.port === port;
    		}
  &�		return false;
    	};
	ipMatch.prototype.match = function(host, port, ip) { return this.$val.match(host, port, ip); };
ipMatchmatch~.vendor/golang.org/x/net/http/httpproxy.ipMatch :(vendor/golang.org/x/net/http/httpproxy.domainMatch).match ��	domainMatch.ptr.prototype.match = function(host, port, ip) {
		var host, ip, m, port;
		m = this;
    		if (strings.HasSuffix(host, m.host) || (m.matchHost && host === $substring(m.host, 1))) {
  '�			return m.port === "" || m.port === port;
    		}
  '�		return false;
    	};
	domainMatch.prototype.match = function(host, port, ip) { return this.$val.match(host, port, ip); };
domainMatchmatch~strings.HasSuffix2vendor/golang.org/x/net/http/httpproxy.domainMatch ��{"Base":10246,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/vendor/golang.org/x/net/http/httpproxy/proxy.go","Base":1,"Size":10244,"Lines":[0,55,109,159,160,227,288,322,325,403,416,434,435,444,454,461,468,479,485,496,512,513,538,540,541,600,632,653,709,775,831,849,850,907,970,1019,1038,1039,1099,1172,1246,1321,1395,1468,1493,1568,1641,1718,1787,1848,1861,1877,1878,1931,1990,2046,2101,2155,2230,2240,2242,2243,2309,2330,2397,2405,2406,2469,2490,2491,2552,2572,2573,2644,2692,2714,2715,2788,2823,2849,2851,2852,2916,2986,3052,3086,3089,3149,3220,3269,3302,3319,3372,3427,3476,3525,3528,3530,3531,3572,3599,3637,3651,3655,3658,3669,3671,3672,3745,3814,3850,3853,3923,3995,4019,4022,4094,4158,4231,4297,4315,4331,4334,4347,4372,4374,4375,4443,4463,4494,4519,4556,4580,4611,4723,4727,4730,4749,4767,4770,4813,4831,4834,4835,4854,4856,4857,4907,4925,4943,4946,4947,4982,5000,5032,5065,5099,5156,5207,5257,5322,5346,5350,5353,5370,5439,5442,5464,5466,5467,5532,5595,5651,5699,5720,5734,5737,5781,5798,5813,5816,5842,5857,5860,5885,5901,5924,5940,5944,5947,5948,5997,5998,6014,6051,6083,6100,6105,6109,6112,6152,6183,6199,6203,6206,6219,6221,6222,6248,6305,6328,6331,6389,6413,6416,6417,6468,6512,6531,6543,6547,6548,6564,6604,6648,6658,6662,6663,6689,6741,6803,6815,6819,6820,6848,6892,6910,6934,7003,7016,7021,7075,7111,7116,7127,7140,7144,7160,7205,7275,7287,7291,7292,7315,7383,7395,7399,7400,7433,7466,7503,7542,7580,7601,7605,7626,7649,7669,7692,7696,7803,7806,7808,7809,7842,7859,7877,7896,7898,7899,7966,8008,8032,8076,8087,8090,8110,8127,8156,8159,8196,8198,8199,8277,8323,8416,8417,8460,8536,8612,8690,8767,8841,8913,8935,9011,9058,9075,9091,9094,9125,9127,9128,9158,9189,9218,9234,9238,9241,9254,9256,9257,9336,9361,9438,9454,9496,9498,9499,9542,9565,9566,9627,9640,9642,9643,9667,9684,9686,9687,9749,9777,9779,9780,9802,9815,9828,9830,9831,9891,9912,9952,9955,9969,9971,9972,9998,10011,10024,10025,10041,10043,10044,10108,10185,10225,10228,10242],"Infos":null}]}
 