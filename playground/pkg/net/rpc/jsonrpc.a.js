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
GoLinkname�� Implementation�� 	Reference��   �u	��net/rpc/jsonrpcjsonrpcencoding/jsonerrorsfmtionetnet/rpcsync�>i ��networkaddress Clientnet/rpcconnReadWriteCloserioClientCodecServerCodeccodecreqMutexMutexsyncrequestRequestmutexseqpendingCallclosingshutdownsendclientcallinputCloseGoserviceMethodargsreplydoneCloserReaderWriterReadResponseBodyReadResponseHeaderResponseWriteRequestReadRequestBodyReadRequestHeaderWriteResponsestatesemaLockmlockSlowUnlock
unlockSlownewServiceMethodSeqnextArgsReplyErrorDoneReadpnerrWritejsonrpcDial	NewClientNewClientCodecNewServerCodec	ServeConnrpc  F     #   %5 F   6 9  8F   6 F  DF   6 T F   6   _e r �p
t PF  Vj  jm  zj  �
  �v  �   �   p       p�p     T y � �� ��   � ��   � ��   � �� � �� �� �� �  � �� � �� ��   �5 �5 �55 � � � T �   ��m    �   � �   � �   � � �  T �  m�    �   � �   � �   � � �  T �e �  �	 jjjjT � � ��   � ��   � ��   � �� �  m �  �
  �� T �     p� �  ��  ��  �  �� pT � � ��  5  �  T �5  � �� � � T �5  � �� � � T �� �  �
  �  �� T � � ���)�7�B55 ��%������ ���8�r���D�ee _�0 json$	json = $packages["encoding/json"];
��    		$r = json.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  net	net = $packages["net"];
��    		$r = net.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  rpc	rpc = $packages["net/rpc"];
��    		$r = rpc.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  clientCodec��	clientCodec = $pkg.clientCodec = $newType(0, $kindStruct, "jsonrpc.clientCodec", true, "net/rpc/jsonrpc", false, function(dec_, enc_, c_, req_, resp_, mutex_, pending_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.dec = ptrType.nil;
			this.enc = ptrType$1.nil;
			this.c = $ifaceNil;
			this.req = new clientRequest.ptr("", arrayType.zero(), new $Uint64(0, 0));
			this.resp = new clientResponse.ptr(new $Uint64(0, 0), ptrType$2.nil, $ifaceNil);
			this.mutex = new sync.Mutex.ptr(0, 0);
			this.pending = false;
			return;
		}
		this.dec = dec_;
		this.enc = enc_;
		this.c = c_;
		this.req = req_;
		this.resp = resp_;
		this.mutex = mutex_;
		this.pending = pending_;
	});
��	ptrType$7.methods = [{prop: "WriteRequest", name: "WriteRequest", pkg: "", typ: $funcType([ptrType$5, $emptyInterface], [$error], false)}, {prop: "ReadResponseHeader", name: "ReadResponseHeader", pkg: "", typ: $funcType([ptrType$6], [$error], false)}, {prop: "ReadResponseBody", name: "ReadResponseBody", pkg: "", typ: $funcType([$emptyInterface], [$error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
��	clientCodec.init("net/rpc/jsonrpc", [{prop: "dec", name: "dec", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "c", name: "c", embedded: false, exported: false, typ: io.Closer, tag: ""}, {prop: "req", name: "req", embedded: false, exported: false, typ: clientRequest, tag: ""}, {prop: "resp", name: "resp", embedded: false, exported: false, typ: clientResponse, tag: ""}, {prop: "mutex", name: "mutex", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "pending", name: "pending", embedded: false, exported: false, typ: mapType, tag: ""}]);
clientCodec	io.Closernet/rpc.Requestnet/rpc.Responsenet/rpc/jsonrpc.arrayTypenet/rpc/jsonrpc.clientCodecnet/rpc/jsonrpc.clientRequestnet/rpc/jsonrpc.clientResponsenet/rpc/jsonrpc.mapTypenet/rpc/jsonrpc.ptrTypenet/rpc/jsonrpc.ptrType$1net/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.ptrType$5net/rpc/jsonrpc.ptrType$6net/rpc/jsonrpc.ptrType$7
sync.Mutex  clientRequest�}	clientRequest = $pkg.clientRequest = $newType(0, $kindStruct, "jsonrpc.clientRequest", true, "net/rpc/jsonrpc", false, function(Method_, Params_, Id_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Method = "";
			this.Params = arrayType.zero();
			this.Id = new $Uint64(0, 0);
			return;
		}
		this.Method = Method_;
		this.Params = Params_;
		this.Id = Id_;
	});
�L	clientRequest.init("", [{prop: "Method", name: "Method", embedded: false, exported: true, typ: $String, tag: "json:\"method\""}, {prop: "Params", name: "Params", embedded: false, exported: true, typ: arrayType, tag: "json:\"params\""}, {prop: "Id", name: "Id", embedded: false, exported: true, typ: $Uint64, tag: "json:\"id\""}]);
clientRequestnet/rpc/jsonrpc.arrayTypenet/rpc/jsonrpc.clientRequest  clientResponse��	clientResponse = $pkg.clientResponse = $newType(0, $kindStruct, "jsonrpc.clientResponse", true, "net/rpc/jsonrpc", false, function(Id_, Result_, Error_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Id = new $Uint64(0, 0);
			this.Result = ptrType$2.nil;
			this.Error = $ifaceNil;
			return;
		}
		this.Id = Id_;
		this.Result = Result_;
		this.Error = Error_;
	});
n	ptrType$8.methods = [{prop: "reset", name: "reset", pkg: "net/rpc/jsonrpc", typ: $funcType([], [], false)}];
�R	clientResponse.init("", [{prop: "Id", name: "Id", embedded: false, exported: true, typ: $Uint64, tag: "json:\"id\""}, {prop: "Result", name: "Result", embedded: false, exported: true, typ: ptrType$2, tag: "json:\"result\""}, {prop: "Error", name: "Error", embedded: false, exported: true, typ: $emptyInterface, tag: "json:\"error\""}]);
clientResponsenet/rpc/jsonrpc.clientResponsenet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.ptrType$8  serverCodec�z	serverCodec = $pkg.serverCodec = $newType(0, $kindStruct, "jsonrpc.serverCodec", true, "net/rpc/jsonrpc", false, function(dec_, enc_, c_, req_, mutex_, seq_, pending_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.dec = ptrType.nil;
			this.enc = ptrType$1.nil;
			this.c = $ifaceNil;
			this.req = new serverRequest.ptr("", ptrType$2.nil, ptrType$2.nil);
			this.mutex = new sync.Mutex.ptr(0, 0);
			this.seq = new $Uint64(0, 0);
			this.pending = false;
			return;
		}
		this.dec = dec_;
		this.enc = enc_;
		this.c = c_;
		this.req = req_;
		this.mutex = mutex_;
		this.seq = seq_;
		this.pending = pending_;
	});
��	ptrType$9.methods = [{prop: "ReadRequestHeader", name: "ReadRequestHeader", pkg: "", typ: $funcType([ptrType$5], [$error], false)}, {prop: "ReadRequestBody", name: "ReadRequestBody", pkg: "", typ: $funcType([$emptyInterface], [$error], false)}, {prop: "WriteResponse", name: "WriteResponse", pkg: "", typ: $funcType([ptrType$6, $emptyInterface], [$error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
��	serverCodec.init("net/rpc/jsonrpc", [{prop: "dec", name: "dec", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "c", name: "c", embedded: false, exported: false, typ: io.Closer, tag: ""}, {prop: "req", name: "req", embedded: false, exported: false, typ: serverRequest, tag: ""}, {prop: "mutex", name: "mutex", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "seq", name: "seq", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "pending", name: "pending", embedded: false, exported: false, typ: mapType$1, tag: ""}]);
serverCodec	io.Closernet/rpc/jsonrpc.mapType$1net/rpc/jsonrpc.ptrTypenet/rpc/jsonrpc.ptrType$1net/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.ptrType$5net/rpc/jsonrpc.ptrType$6net/rpc/jsonrpc.ptrType$9net/rpc/jsonrpc.serverCodecnet/rpc/jsonrpc.serverRequest
sync.Mutex  serverRequest�v	serverRequest = $pkg.serverRequest = $newType(0, $kindStruct, "jsonrpc.serverRequest", true, "net/rpc/jsonrpc", false, function(Method_, Params_, Id_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Method = "";
			this.Params = ptrType$2.nil;
			this.Id = ptrType$2.nil;
			return;
		}
		this.Method = Method_;
		this.Params = Params_;
		this.Id = Id_;
	});
o	ptrType$10.methods = [{prop: "reset", name: "reset", pkg: "net/rpc/jsonrpc", typ: $funcType([], [], false)}];
�N	serverRequest.init("", [{prop: "Method", name: "Method", embedded: false, exported: true, typ: $String, tag: "json:\"method\""}, {prop: "Params", name: "Params", embedded: false, exported: true, typ: ptrType$2, tag: "json:\"params\""}, {prop: "Id", name: "Id", embedded: false, exported: true, typ: ptrType$2, tag: "json:\"id\""}]);
serverRequestnet/rpc/jsonrpc.ptrType$10net/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.serverRequest  serverResponse�x	serverResponse = $pkg.serverResponse = $newType(0, $kindStruct, "jsonrpc.serverResponse", true, "net/rpc/jsonrpc", false, function(Id_, Result_, Error_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Id = ptrType$2.nil;
			this.Result = $ifaceNil;
			this.Error = $ifaceNil;
			return;
		}
		this.Id = Id_;
		this.Result = Result_;
		this.Error = Error_;
	});
�Z	serverResponse.init("", [{prop: "Id", name: "Id", embedded: false, exported: true, typ: ptrType$2, tag: "json:\"id\""}, {prop: "Result", name: "Result", embedded: false, exported: true, typ: $emptyInterface, tag: "json:\"result\""}, {prop: "Error", name: "Error", embedded: false, exported: true, typ: $emptyInterface, tag: "json:\"error\""}]);
serverResponsenet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.serverResponse  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType#	ptrType = $ptrType(json.Decoder);
ptrTypeencoding/json.Decoder  	ptrType$1%	ptrType$1 = $ptrType(json.Encoder);
	ptrType$1encoding/json.Encoder  	arrayType-	arrayType = $arrayType($emptyInterface, 1);
	arrayType  	ptrType$2(	ptrType$2 = $ptrType(json.RawMessage);
	ptrType$2encoding/json.RawMessage  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  	ptrType$3#	ptrType$3 = $ptrType(rpc.Client);
	ptrType$3net/rpc.Client  	ptrType$4"	ptrType$4 = $ptrType(arrayType);
	ptrType$4net/rpc/jsonrpc.arrayType  	ptrType$5$	ptrType$5 = $ptrType(rpc.Request);
	ptrType$5net/rpc.Request  	ptrType$6%	ptrType$6 = $ptrType(rpc.Response);
	ptrType$6net/rpc.Response  	ptrType$7$	ptrType$7 = $ptrType(clientCodec);
	ptrType$7net/rpc/jsonrpc.clientCodec  mapType'	mapType = $mapType($Uint64, $String);
mapType  	ptrType$8'	ptrType$8 = $ptrType(clientResponse);
	ptrType$8net/rpc/jsonrpc.clientResponse  	ptrType$9$	ptrType$9 = $ptrType(serverCodec);
	ptrType$9net/rpc/jsonrpc.serverCodec  	mapType$1+	mapType$1 = $mapType($Uint64, ptrType$2);
	mapType$1net/rpc/jsonrpc.ptrType$2  
ptrType$10'	ptrType$10 = $ptrType(serverRequest);

ptrType$10net/rpc/jsonrpc.serverRequest  errMissingParamserrMissingParams  null$1
null$24ptrnull  N  �		errMissingParams = errors.New("jsonrpc: request body missing params");

errors.New net/rpc/jsonrpc.errMissingParams  _  q		null$1 = ($convertSliceType((new sliceType($stringToBytes("null"))), json.RawMessage));
nullencoding/json.RawMessagenet/rpc/jsonrpc.nullnet/rpc/jsonrpc.sliceType net/rpc/jsonrpc.NewClientCodecnet/rpc/jsonrpcNewClientCodec NewClientCodec�Y	NewClientCodec = function(conn) {
		var conn;
  K		return new clientCodec.ptr(json.NewDecoder(conn), json.NewEncoder(conn), conn, new clientRequest.ptr("", arrayType.zero(), new $Uint64(0, 0)), new clientResponse.ptr(new $Uint64(0, 0), ptrType$2.nil, $ifaceNil), new sync.Mutex.ptr(0, 0), {});
    	};
	$pkg.NewClientCodec = NewClientCodec;
NewClientCodecencoding/json.Decoderencoding/json.Encoderencoding/json.NewDecoderencoding/json.NewEncoderencoding/json.RawMessagenet/rpc/jsonrpc.NewClientCodecnet/rpc/jsonrpc.arrayTypenet/rpc/jsonrpc.clientCodecnet/rpc/jsonrpc.clientRequestnet/rpc/jsonrpc.clientResponsenet/rpc/jsonrpc.ptrTypenet/rpc/jsonrpc.ptrType$1net/rpc/jsonrpc.ptrType$2
sync.Mutex +(*net/rpc/jsonrpc.clientCodec).WriteRequest �}	clientCodec.ptr.prototype.WriteRequest = function(r, param) {
		var $24r, _key, _r, c, param, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _key = $f._key; _r = $f._r; c = $f.c; param = $f.param; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		$r = c.mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		_key = r.Seq; (c.pending || $throwRuntimeError("assignment to entry in nil map"))[$Uint64.keyFor(_key)] = { k: _key, v: r.ServiceMethod };
  �		$r = c.mutex.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		c.req.Method = r.ServiceMethod;
  $		c.req.Params[0] = param;
  =		c.req.Id = r.Seq;
  O		_r = c.enc.Encode(c.req); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 4; case 4: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: clientCodec.ptr.prototype.WriteRequest }; } $f.$24r = $24r; $f._key = _key; $f._r = _r; $f.c = c; $f.param = param; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	clientCodec.prototype.WriteRequest = function(r, param) { return this.$val.WriteRequest(r, param); };
clientCodecnet/rpc/jsonrpc.clientCodec '(*net/rpc/jsonrpc.clientResponse).reset ��	clientResponse.ptr.prototype.reset = function() {
		var r;
		r = this;
  (		r.Id = new $Uint64(0, 0);
  2		r.Result = ptrType$2.nil;
  B		r.Error = $ifaceNil;
    	};
	clientResponse.prototype.reset = function() { return this.$val.reset(); };
clientResponsereset~net/rpc/jsonrpc.clientResponsenet/rpc/jsonrpc.ptrType$2 1(*net/rpc/jsonrpc.clientCodec).ReadResponseHeader �	�	clientCodec.ptr.prototype.ReadResponseHeader = function(r) {
		var $24r, _entry, _r, _r$1, _tuple, c, err, ok, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; c = $f.c; err = $f.err; ok = $f.ok; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		c.resp.reset();
  �		_r = c.dec.Decode(c.resp); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return err;
    		}
  �		$r = c.mutex.Lock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		r.ServiceMethod = (_entry = c.pending[$Uint64.keyFor(c.resp.Id)], _entry !== undefined ? _entry.v : "");
  		delete c.pending[$Uint64.keyFor(c.resp.Id)];
  <		$r = c.mutex.Unlock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  O		r.Error = "";
  ]		r.Seq = c.resp.Id;
  p		/* */ if (!($interfaceIsEqual(c.resp.Error, $ifaceNil)) || c.resp.Result === ptrType$2.nil) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (!($interfaceIsEqual(c.resp.Error, $ifaceNil)) || c.resp.Result === ptrType$2.nil) { */ case 4:
  �			_tuple = $assertType(c.resp.Error, $String, true);
			x = _tuple[0];
			ok = _tuple[1];
  �			/* */ if (!ok) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!ok) { */ case 6:
  �				_r$1 = fmt.Errorf("invalid error %v", new sliceType$1([c.resp.Error])); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r = _r$1;
				$s = 9; case 9: return $24r;
    			/* } */ case 7:
    			if (x === "") {
  					x = "unspecified error";
    			}
  	8			r.Error = x;
    		/* } */ case 5:
  	H		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: clientCodec.ptr.prototype.ReadResponseHeader }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.c = c; $f.err = err; $f.ok = ok; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	clientCodec.prototype.ReadResponseHeader = function(r) { return this.$val.ReadResponseHeader(r); };
clientCodec
fmt.Errorfnet/rpc/jsonrpc.clientCodecnet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.reset~net/rpc/jsonrpc.sliceType$1 /(*net/rpc/jsonrpc.clientCodec).ReadResponseBody ��	clientCodec.ptr.prototype.ReadResponseBody = function(x) {
		var $24r, _r, c, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if ($interfaceIsEqual(x, $ifaceNil)) {
  	�			$s = -1; return $ifaceNil;
    		}
  	�		_r = json.Unmarshal($convertSliceType(c.resp.Result.$get(), sliceType), x); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: clientCodec.ptr.prototype.ReadResponseBody }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	clientCodec.prototype.ReadResponseBody = function(x) { return this.$val.ReadResponseBody(x); };
clientCodecencoding/json.Unmarshalnet/rpc/jsonrpc.clientCodecnet/rpc/jsonrpc.sliceType $(*net/rpc/jsonrpc.clientCodec).Close ��	clientCodec.ptr.prototype.Close = function() {
		var $24r, _r, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  
		_r = c.c.Close(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: clientCodec.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	clientCodec.prototype.Close = function() { return this.$val.Close(); };
clientCodecnet/rpc/jsonrpc.clientCodec net/rpc/jsonrpc.NewClientnet/rpc/jsonrpc	NewClient 	NewClient��	NewClient = function(conn) {
		var conn;
  
�		return rpc.NewClientWithCodec(NewClientCodec(conn));
    	};
	$pkg.NewClient = NewClient;
	NewClientnet/rpc.NewClientWithCodecnet/rpc/jsonrpc.NewClientnet/rpc/jsonrpc.NewClientCodec net/rpc/jsonrpc.Dialnet/rpc/jsonrpcDial Dial�F	Dial = function(network, address) {
		var _tuple, address, conn, err, network;
  �		_tuple = net.Dial(network, address);
		conn = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			return [ptrType$3.nil, err];
    		}
  �		return [NewClient(conn), err];
    	};
	$pkg.Dial = Dial;
Dialnet.Dialnet/rpc.Clientnet/rpc/jsonrpc.Dialnet/rpc/jsonrpc.NewClientnet/rpc/jsonrpc.ptrType$3 net/rpc/jsonrpc.NewServerCodecnet/rpc/jsonrpcNewServerCodec NewServerCodec� 	NewServerCodec = function(conn) {
		var conn;
  		return new serverCodec.ptr(json.NewDecoder(conn), json.NewEncoder(conn), conn, new serverRequest.ptr("", ptrType$2.nil, ptrType$2.nil), new sync.Mutex.ptr(0, 0), new $Uint64(0, 0), {});
    	};
	$pkg.NewServerCodec = NewServerCodec;
NewServerCodec	encoding/json.NewDecoderencoding/json.NewEncodernet/rpc/jsonrpc.NewServerCodecnet/rpc/jsonrpc.ptrTypenet/rpc/jsonrpc.ptrType$1net/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.serverCodecnet/rpc/jsonrpc.serverRequest
sync.Mutex &(*net/rpc/jsonrpc.serverRequest).reset ��	serverRequest.ptr.prototype.reset = function() {
		var r;
		r = this;
  p		r.Method = "";
  		r.Params = ptrType$2.nil;
  �		r.Id = ptrType$2.nil;
    	};
	serverRequest.prototype.reset = function() { return this.$val.reset(); };
serverRequestreset~net/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.serverRequest 0(*net/rpc/jsonrpc.serverCodec).ReadRequestHeader �V	serverCodec.ptr.prototype.ReadRequestHeader = function(r) {
		var _key, _r, c, err, r, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _key = $f._key; _r = $f._r; c = $f.c; err = $f.err; r = $f.r; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  t		c.req.reset();
  �		_r = c.dec.Decode(c.req); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return err;
    		}
  �		r.ServiceMethod = c.req.Method;
  j		$r = c.mutex.Lock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  z		c.seq = (x = c.seq, x$1 = new $Uint64(0, 1), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
  �		_key = c.seq; (c.pending || $throwRuntimeError("assignment to entry in nil map"))[$Uint64.keyFor(_key)] = { k: _key, v: c.req.Id };
  �		c.req.Id = ptrType$2.nil;
  �		r.Seq = c.seq;
  �		$r = c.mutex.Unlock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: serverCodec.ptr.prototype.ReadRequestHeader }; } $f._key = _key; $f._r = _r; $f.c = c; $f.err = err; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	serverCodec.prototype.ReadRequestHeader = function(r) { return this.$val.ReadRequestHeader(r); };
serverCodecnet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.reset~net/rpc/jsonrpc.serverCodec .(*net/rpc/jsonrpc.serverCodec).ReadRequestBody ��	serverCodec.ptr.prototype.ReadRequestBody = function(x) {
		var $24r, _r, c, params, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; params = $f.params; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		params = [params];
		c = this;
    		if ($interfaceIsEqual(x, $ifaceNil)) {
  .			$s = -1; return $ifaceNil;
    		}
    		if (c.req.Params === ptrType$2.nil) {
  X			$s = -1; return errMissingParams;
    		}
  		params[0] = arrayType.zero();
  -		params[0][0] = x;
  <		_r = json.Unmarshal($convertSliceType(c.req.Params.$get(), sliceType), new ptrType$4(params[0])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: serverCodec.ptr.prototype.ReadRequestBody }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.params = params; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	serverCodec.prototype.ReadRequestBody = function(x) { return this.$val.ReadRequestBody(x); };
serverCodecencoding/json.Unmarshalnet/rpc/jsonrpc.arrayType net/rpc/jsonrpc.errMissingParamsnet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.ptrType$4net/rpc/jsonrpc.serverCodecnet/rpc/jsonrpc.sliceType ,(*net/rpc/jsonrpc.serverCodec).WriteResponse ��	serverCodec.ptr.prototype.WriteResponse = function(r, x) {
		var $24r, _entry, _r, _tuple, b, c, ok, r, resp, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; _tuple = $f._tuple; b = $f.b; c = $f.c; ok = $f.ok; r = $f.r; resp = $f.resp; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		$r = c.mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		_tuple = (_entry = c.pending[$Uint64.keyFor(r.Seq)], _entry !== undefined ? [_entry.v, true] : [ptrType$2.nil, false]);
		b = _tuple[0];
		ok = _tuple[1];
  		/* */ if (!ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!ok) { */ case 2:
  			$r = c.mutex.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  /			$s = -1; return errors.New("invalid sequence number in response");
    		/* } */ case 3:
  l		delete c.pending[$Uint64.keyFor(r.Seq)];
  �		$r = c.mutex.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (b === ptrType$2.nil) {
  �			b = (null$24ptr || (null$24ptr = new ptrType$2(function() { return null$1; }, function($v) { null$1 = $convertSliceType($v, json.RawMessage); })));
    		}
  �		resp = new serverResponse.ptr(b, $ifaceNil, $ifaceNil);
    		if (r.Error === "") {
  			resp.Result = x;
    		} else {
  5			resp.Error = new $String(r.Error);
    		}
  N		_r = c.enc.Encode(new resp.constructor.elem(resp)); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 7; case 7: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: serverCodec.ptr.prototype.WriteResponse }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.c = c; $f.ok = ok; $f.r = r; $f.resp = resp; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	serverCodec.prototype.WriteResponse = function(r, x) { return this.$val.WriteResponse(r, x); };
serverCodecencoding/json.RawMessage
errors.Newnet/rpc/jsonrpc.nullnet/rpc/jsonrpc.ptrType$2net/rpc/jsonrpc.serverCodecnet/rpc/jsonrpc.serverResponse $(*net/rpc/jsonrpc.serverCodec).Close ��	serverCodec.ptr.prototype.Close = function() {
		var $24r, _r, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		_r = c.c.Close(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: serverCodec.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	serverCodec.prototype.Close = function() { return this.$val.Close(); };
serverCodecnet/rpc/jsonrpc.serverCodec net/rpc/jsonrpc.ServeConnnet/rpc/jsonrpc	ServeConn 	ServeConn�D	ServeConn = function(conn) {
		var conn, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; conn = $f.conn; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = rpc.ServeCodec(NewServerCodec(conn)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: ServeConn }; } $f.conn = conn; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ServeConn = ServeConn;
	ServeConnnet/rpc.ServeCodecnet/rpc/jsonrpc.NewServerCodecnet/rpc/jsonrpc.ServeConn ��{"Base":6333,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/rpc/jsonrpc/client.go","Base":1,"Size":3057,"Lines":[0,55,109,159,160,233,257,324,340,341,350,367,374,380,387,398,406,408,409,435,481,527,542,543,568,588,609,610,684,714,779,852,899,959,961,962,1034,1097,1119,1153,1187,1204,1240,1243,1245,1246,1274,1313,1352,1387,1389,1390,1468,1484,1520,1538,1570,1595,1613,1642,1644,1645,1674,1711,1752,1792,1794,1795,1830,1840,1856,1871,1873,1874,1940,1956,2003,2016,2019,2020,2036,2076,2106,2124,2125,2139,2158,2208,2241,2252,2307,2311,2326,2353,2357,2371,2374,2386,2388,2389,2451,2466,2479,2482,2524,2526,2527,2565,2585,2587,2588,2652,2707,2761,2814,2816,2817,2889,2947,2988,3005,3023,3026,3055],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/rpc/jsonrpc/server.go","Base":3059,"Size":3273,"Lines":[0,55,109,159,160,176,177,186,203,213,219,230,238,240,241,315,316,342,388,434,449,450,475,494,495,562,606,665,722,775,825,870,886,923,925,926,998,1061,1083,1117,1151,1168,1214,1217,1219,1220,1248,1289,1330,1367,1369,1370,1404,1419,1435,1447,1449,1450,1479,1516,1557,1597,1599,1600,1664,1679,1725,1738,1741,1773,1774,1817,1863,1910,1926,1935,1964,1980,1995,2013,2014,2026,2028,2029,2090,2105,2118,2121,2147,2173,2176,2208,2234,2286,2334,2361,2376,2423,2425,2426,2469,2470,2546,2562,2589,2599,2618,2677,2680,2706,2724,2725,2740,2786,2798,2801,2832,2852,2870,2880,2903,2906,2933,2935,2936,2974,2994,2996,2997,3059,3130,3191,3233,3271],"Infos":null}]}
 