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
GoLinkname�� Implementation�� 	Reference��   �����testing/iotestiotestbyteserrorsfmtiolog��i ��rReaderio errprefixwWritercontentnReadpWriteiotestDataErrReader	ErrReader
ErrTimeout
HalfReaderNewReadLoggerNewWriteLoggerOneByteReader
TestReaderTimeoutReaderTruncateWriter 	F       F     V F       F         	F   U U F       F     !q  F       F  U ) U 	  + 0� )  T �	  2 0� )  T �8 
?MWbm'{8�F�S�a�l		 ��- bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  log	log = $packages["log"];
��    		$r = log.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  writeLogger�$	writeLogger = $pkg.writeLogger = $newType(0, $kindStruct, "iotest.writeLogger", true, "testing/iotest", false, function(prefix_, w_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.prefix = "";
			this.w = $ifaceNil;
			return;
		}
		this.prefix = prefix_;
		this.w = w_;
	});
t	ptrType.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	writeLogger.init("testing/iotest", [{prop: "prefix", name: "prefix", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}]);
writeLogger	io.Writertesting/iotest.ptrTypetesting/iotest.sliceType$1testing/iotest.writeLogger  
readLogger�!	readLogger = $pkg.readLogger = $newType(0, $kindStruct, "iotest.readLogger", true, "testing/iotest", false, function(prefix_, r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.prefix = "";
			this.r = $ifaceNil;
			return;
		}
		this.prefix = prefix_;
		this.r = r_;
	});
t	ptrType$1.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	readLogger.init("testing/iotest", [{prop: "prefix", name: "prefix", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}]);

readLogger	io.Readertesting/iotest.ptrType$1testing/iotest.readLoggertesting/iotest.sliceType$1  oneByteReader��	oneByteReader = $pkg.oneByteReader = $newType(0, $kindStruct, "iotest.oneByteReader", true, "testing/iotest", false, function(r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			return;
		}
		this.r = r_;
	});
t	ptrType$2.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
|	oneByteReader.init("testing/iotest", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}]);
oneByteReader	io.Readertesting/iotest.oneByteReadertesting/iotest.ptrType$2testing/iotest.sliceType$1  
halfReader��	halfReader = $pkg.halfReader = $newType(0, $kindStruct, "iotest.halfReader", true, "testing/iotest", false, function(r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			return;
		}
		this.r = r_;
	});
t	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
y	halfReader.init("testing/iotest", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}]);

halfReader	io.Readertesting/iotest.halfReadertesting/iotest.ptrType$3testing/iotest.sliceType$1  dataErrReader�s	dataErrReader = $pkg.dataErrReader = $newType(0, $kindStruct, "iotest.dataErrReader", true, "testing/iotest", false, function(r_, unread_, data_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.unread = sliceType$1.nil;
			this.data = sliceType$1.nil;
			return;
		}
		this.r = r_;
		this.unread = unread_;
		this.data = data_;
	});
t	ptrType$4.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
�6	dataErrReader.init("testing/iotest", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "unread", name: "unread", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "data", name: "data", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
dataErrReader	io.Readertesting/iotest.dataErrReadertesting/iotest.ptrType$4testing/iotest.sliceType$1  timeoutReader�%	timeoutReader = $pkg.timeoutReader = $newType(0, $kindStruct, "iotest.timeoutReader", true, "testing/iotest", false, function(r_, count_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.count = 0;
			return;
		}
		this.r = r_;
		this.count = count_;
	});
t	ptrType$5.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	timeoutReader.init("testing/iotest", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "count", name: "count", embedded: false, exported: false, typ: $Int, tag: ""}]);
timeoutReader	io.Readertesting/iotest.ptrType$5testing/iotest.sliceType$1testing/iotest.timeoutReader  	errReader��	errReader = $pkg.errReader = $newType(0, $kindStruct, "iotest.errReader", true, "testing/iotest", false, function(err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			return;
		}
		this.err = err_;
	});
t	ptrType$6.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
y	errReader.init("testing/iotest", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	errReadertesting/iotest.errReadertesting/iotest.ptrType$6testing/iotest.sliceType$1  smallByteReader�E	smallByteReader = $pkg.smallByteReader = $newType(0, $kindStruct, "iotest.smallByteReader", true, "testing/iotest", false, function(r_, off_, n_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.off = 0;
			this.n = 0;
			return;
		}
		this.r = r_;
		this.off = off_;
		this.n = n_;
	});
t	ptrType$7.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
�	smallByteReader.init("testing/iotest", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "off", name: "off", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int, tag: ""}]);
smallByteReader	io.Readertesting/iotest.ptrType$7testing/iotest.sliceType$1testing/iotest.smallByteReader  truncateWriter�'	truncateWriter = $pkg.truncateWriter = $newType(0, $kindStruct, "iotest.truncateWriter", true, "testing/iotest", false, function(w_, n_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.n = new $Int64(0, 0);
			return;
		}
		this.w = w_;
		this.n = n_;
	});
v	ptrType$8.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	truncateWriter.init("testing/iotest", [{prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int64, tag: ""}]);
truncateWriter	io.Writertesting/iotest.ptrType$8testing/iotest.sliceType$1testing/iotest.truncateWriter  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  ptrType"	ptrType = $ptrType(writeLogger);
ptrTypetesting/iotest.writeLogger  	ptrType$1#	ptrType$1 = $ptrType(readLogger);
	ptrType$1testing/iotest.readLogger  	ptrType$2&	ptrType$2 = $ptrType(oneByteReader);
	ptrType$2testing/iotest.oneByteReader  	ptrType$3#	ptrType$3 = $ptrType(halfReader);
	ptrType$3testing/iotest.halfReader  	ptrType$4&	ptrType$4 = $ptrType(dataErrReader);
	ptrType$4testing/iotest.dataErrReader  	ptrType$5&	ptrType$5 = $ptrType(timeoutReader);
	ptrType$5testing/iotest.timeoutReader  	ptrType$6"	ptrType$6 = $ptrType(errReader);
	ptrType$6testing/iotest.errReader  	ptrType$7(	ptrType$7 = $ptrType(smallByteReader);
	ptrType$7testing/iotest.smallByteReader  	ptrType$8'	ptrType$8 = $ptrType(truncateWriter);
	ptrType$8testing/iotest.truncateWriter  
ErrTimeout  0  k		$pkg.ErrTimeout = errors.New("timeout");

errors.Newtesting/iotest.ErrTimeout #(*testing/iotest.writeLogger).Write �	writeLogger.ptr.prototype.Write = function(p) {
		var _r, _tuple, err, l, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; l = $f.l; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		l = this;
  D		_r = l.w.Write(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  [		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  m			$r = log.Printf("%s %x: %v", new sliceType([new $String(l.prefix), $subslice(p, 0, n), err])); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 4; continue;
		/* } else { */ case 3:
  �			$r = log.Printf("%s %x", new sliceType([new $String(l.prefix), $subslice(p, 0, n)])); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 4:
  �		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: writeLogger.ptr.prototype.Write }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.l = l; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	writeLogger.prototype.Write = function(p) { return this.$val.Write(p); };
writeLogger
log.Printftesting/iotest.sliceTypetesting/iotest.writeLogger testing/iotest.NewWriteLoggertesting/iotestNewWriteLogger NewWriteLogger��	NewWriteLogger = function(prefix, w) {
		var prefix, w;
  �		return new writeLogger.ptr(prefix, w);
    	};
	$pkg.NewWriteLogger = NewWriteLogger;
NewWriteLoggertesting/iotest.NewWriteLoggertesting/iotest.writeLogger !(*testing/iotest.readLogger).Read ��	readLogger.ptr.prototype.Read = function(p) {
		var _r, _tuple, err, l, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; l = $f.l; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		l = this;
  j		_r = l.r.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			$r = log.Printf("%s %x: %v", new sliceType([new $String(l.prefix), $subslice(p, 0, n), err])); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 4; continue;
		/* } else { */ case 3:
  �			$r = log.Printf("%s %x", new sliceType([new $String(l.prefix), $subslice(p, 0, n)])); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 4:
  �		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readLogger.ptr.prototype.Read }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.l = l; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	readLogger.prototype.Read = function(p) { return this.$val.Read(p); };

readLogger
log.Printftesting/iotest.readLoggertesting/iotest.sliceType testing/iotest.NewReadLoggertesting/iotestNewReadLogger NewReadLogger��	NewReadLogger = function(prefix, r) {
		var prefix, r;
  �		return new readLogger.ptr(prefix, r);
    	};
	$pkg.NewReadLogger = NewReadLogger;
NewReadLoggertesting/iotest.NewReadLoggertesting/iotest.readLogger testing/iotest.OneByteReadertesting/iotestOneByteReader OneByteReader~	OneByteReader = function(r) {
		var r;
  �		return new oneByteReader.ptr(r);
    	};
	$pkg.OneByteReader = OneByteReader;
OneByteReadertesting/iotest.OneByteReadertesting/iotest.oneByteReader $(*testing/iotest.oneByteReader).Read �S	oneByteReader.ptr.prototype.Read = function(p) {
		var $24r, _r, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
    		if (p.$length === 0) {
  \			$s = -1; return [0, $ifaceNil];
    		}
  n		_r = r.r.Read($subslice(p, 0, 1)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: oneByteReader.ptr.prototype.Read }; } $f.$24r = $24r; $f._r = _r; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	oneByteReader.prototype.Read = function(p) { return this.$val.Read(p); };
oneByteReadertesting/iotest.oneByteReader testing/iotest.HalfReadertesting/iotest
HalfReader 
HalfReaderr	HalfReader = function(r) {
		var r;
  		return new halfReader.ptr(r);
    	};
	$pkg.HalfReader = HalfReader;

HalfReadertesting/iotest.HalfReadertesting/iotest.halfReader !(*testing/iotest.halfReader).Read ��	halfReader.ptr.prototype.Read = function(p) {
		var $24r, _q, _r, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _q = $f._q; _r = $f._r; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		_r = r.r.Read($subslice(p, 0, (_q = ((p.$length + 1 >> 0)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: halfReader.ptr.prototype.Read }; } $f.$24r = $24r; $f._q = _q; $f._r = _r; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	halfReader.prototype.Read = function(p) { return this.$val.Read(p); };

halfReadertesting/iotest.halfReader testing/iotest.DataErrReadertesting/iotestDataErrReader DataErrReader��	DataErrReader = function(r) {
		var r;
  
F		return new dataErrReader.ptr(r, sliceType$1.nil, $makeSlice(sliceType$1, 1024));
    	};
	$pkg.DataErrReader = DataErrReader;
DataErrReadertesting/iotest.DataErrReadertesting/iotest.dataErrReadertesting/iotest.sliceType$1 $(*testing/iotest.dataErrReader).Read ��	dataErrReader.ptr.prototype.Read = function(p) {
		var _r, _tuple, err, err1, n, n1, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; err1 = $f.err1; n = $f.n; n1 = $f.n1; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
  k		/* while (true) { */ case 1:
  s			/* */ if (r.unread.$length === 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (r.unread.$length === 0) { */ case 3:
  �				_r = r.r.Read(r.data); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				n1 = _tuple[0];
				err1 = _tuple[1];
  �				r.unread = $subslice(r.data, 0, n1);
  �				err = err1;
    			/* } */ case 4:
    			if (n > 0 || !($interfaceIsEqual(err, $ifaceNil))) {
  �				/* break; */ $s = 2; continue;
    			}
  			n = $copySlice(p, r.unread);
  			r.unread = $subslice(r.unread, n);
    		$s = 1; continue;
		case 2:
  6		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dataErrReader.ptr.prototype.Read }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.err1 = err1; $f.n = n; $f.n1 = n1; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	dataErrReader.prototype.Read = function(p) { return this.$val.Read(p); };
dataErrReadertesting/iotest.dataErrReader testing/iotest.TimeoutReadertesting/iotestTimeoutReader TimeoutReader��	TimeoutReader = function(r) {
		var r;
  %		return new timeoutReader.ptr(r, 0);
    	};
	$pkg.TimeoutReader = TimeoutReader;
TimeoutReadertesting/iotest.TimeoutReadertesting/iotest.timeoutReader $(*testing/iotest.timeoutReader).Read �k	timeoutReader.ptr.prototype.Read = function(p) {
		var $24r, _r, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		r.count = r.count + (1) >> 0;
    		if (r.count === 2) {
  �			$s = -1; return [0, $pkg.ErrTimeout];
    		}
  �		_r = r.r.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: timeoutReader.ptr.prototype.Read }; } $f.$24r = $24r; $f._r = _r; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	timeoutReader.prototype.Read = function(p) { return this.$val.Read(p); };
timeoutReadertesting/iotest.ErrTimeouttesting/iotest.timeoutReader testing/iotest.ErrReadertesting/iotest	ErrReader 	ErrReadert	ErrReader = function(err) {
		var err;
  v		return new errReader.ptr(err);
    	};
	$pkg.ErrReader = ErrReader;
	ErrReadertesting/iotest.ErrReadertesting/iotest.errReader  (*testing/iotest.errReader).Read ��	errReader.ptr.prototype.Read = function(p) {
		var p, r;
		r = this;
  �		return [0, r.err];
    	};
	errReader.prototype.Read = function(p) { return this.$val.Read(p); };
	errReadertesting/iotest.errReader &(*testing/iotest.smallByteReader).Read ��	smallByteReader.ptr.prototype.Read = function(p) {
		var _r, _r$1, _r$2, _tuple, err, n, p, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; err = $f.err; n = $f.n; p = $f.p; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
    		if (p.$length === 0) {
  �			$s = -1; return [0, $ifaceNil];
    		}
  �		r.n = (_r = r.n % 3, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) + 1 >> 0;
  �		n = r.n;
    		if (n > p.$length) {
  �			n = p.$length;
    		}
  �		_r$1 = r.r.Read($subslice(p, 0, n)); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		n = _tuple[0];
		err = _tuple[1];
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil)) && !($interfaceIsEqual(err, io.EOF))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil)) && !($interfaceIsEqual(err, io.EOF))) { */ case 2:
  			_r$2 = fmt.Errorf("Read(%d bytes at offset %d): %v", new sliceType([new $Int(n), new $Int(r.off), err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err = _r$2;
    		/* } */ case 3:
  c		r.off = r.off + (n) >> 0;
  o		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: smallByteReader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.err = err; $f.n = n; $f.p = p; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	smallByteReader.prototype.Read = function(p) { return this.$val.Read(p); };
smallByteReader
fmt.Errorfio.EOFtesting/iotest.sliceTypetesting/iotest.smallByteReader testing/iotest.TestReadertesting/iotest
TestReader 
TestReader�{�	TestReader = function(r, content) {
		var $24r, $24r$1, $24r$10, $24r$11, $24r$12, $24r$13, $24r$14, $24r$15, $24r$16, $24r$17, $24r$18, $24r$19, $24r$2, $24r$20, $24r$21, $24r$22, $24r$23, $24r$3, $24r$4, $24r$5, $24r$6, $24r$7, $24r$8, $24r$9, _i, _i$1, _i$2, _i$3, _q, _q$1, _q$10, _q$11, _q$12, _q$13, _q$14, _q$15, _q$16, _q$17, _q$2, _q$3, _q$4, _q$5, _q$6, _q$7, _q$8, _q$9, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$28, _r$29, _r$3, _r$30, _r$31, _r$32, _r$33, _r$34, _r$35, _r$36, _r$37, _r$38, _r$39, _r$4, _r$40, _r$41, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _ref$3, _tuple, _tuple$1, _tuple$10, _tuple$11, _tuple$12, _tuple$13, _tuple$14, _tuple$15, _tuple$16, _tuple$17, _tuple$18, _tuple$19, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, content, data, data$1, data$2, err, err$1, err$10, err$11, err$2, err$3, err$4, err$5, err$6, err$7, err$8, err$9, i, i$1, i$2, i$3, middle, n, n$1, n$2, off, off$1, off$2, off$3, off$4, off$5, off$6, off$7, ok, ok$1, r, r$1, r$2, want, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$10 = $f.$24r$10; $24r$11 = $f.$24r$11; $24r$12 = $f.$24r$12; $24r$13 = $f.$24r$13; $24r$14 = $f.$24r$14; $24r$15 = $f.$24r$15; $24r$16 = $f.$24r$16; $24r$17 = $f.$24r$17; $24r$18 = $f.$24r$18; $24r$19 = $f.$24r$19; $24r$2 = $f.$24r$2; $24r$20 = $f.$24r$20; $24r$21 = $f.$24r$21; $24r$22 = $f.$24r$22; $24r$23 = $f.$24r$23; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; $24r$7 = $f.$24r$7; $24r$8 = $f.$24r$8; $24r$9 = $f.$24r$9; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _q = $f._q; _q$1 = $f._q$1; _q$10 = $f._q$10; _q$11 = $f._q$11; _q$12 = $f._q$12; _q$13 = $f._q$13; _q$14 = $f._q$14; _q$15 = $f._q$15; _q$16 = $f._q$16; _q$17 = $f._q$17; _q$2 = $f._q$2; _q$3 = $f._q$3; _q$4 = $f._q$4; _q$5 = $f._q$5; _q$6 = $f._q$6; _q$7 = $f._q$7; _q$8 = $f._q$8; _q$9 = $f._q$9; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$28 = $f._r$28; _r$29 = $f._r$29; _r$3 = $f._r$3; _r$30 = $f._r$30; _r$31 = $f._r$31; _r$32 = $f._r$32; _r$33 = $f._r$33; _r$34 = $f._r$34; _r$35 = $f._r$35; _r$36 = $f._r$36; _r$37 = $f._r$37; _r$38 = $f._r$38; _r$39 = $f._r$39; _r$4 = $f._r$4; _r$40 = $f._r$40; _r$41 = $f._r$41; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$10 = $f._tuple$10; _tuple$11 = $f._tuple$11; _tuple$12 = $f._tuple$12; _tuple$13 = $f._tuple$13; _tuple$14 = $f._tuple$14; _tuple$15 = $f._tuple$15; _tuple$16 = $f._tuple$16; _tuple$17 = $f._tuple$17; _tuple$18 = $f._tuple$18; _tuple$19 = $f._tuple$19; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; content = $f.content; data = $f.data; data$1 = $f.data$1; data$2 = $f.data$2; err = $f.err; err$1 = $f.err$1; err$10 = $f.err$10; err$11 = $f.err$11; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; err$5 = $f.err$5; err$6 = $f.err$6; err$7 = $f.err$7; err$8 = $f.err$8; err$9 = $f.err$9; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; middle = $f.middle; n = $f.n; n$1 = $f.n$1; n$2 = $f.n$2; off = $f.off; off$1 = $f.off$1; off$2 = $f.off$2; off$3 = $f.off$3; off$4 = $f.off$4; off$5 = $f.off$5; off$6 = $f.off$6; off$7 = $f.off$7; ok = $f.ok; ok$1 = $f.ok$1; r = $f.r; r$1 = $f.r$1; r$2 = $f.r$2; want = $f.want; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
   		/* */ if (content.$length > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (content.$length > 0) { */ case 1:
  8			_r = r.Read(sliceType$1.nil); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			n = _tuple[0];
			err = _tuple[1];
  P			/* */ if (!((n === 0)) || !($interfaceIsEqual(err, $ifaceNil))) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!((n === 0)) || !($interfaceIsEqual(err, $ifaceNil))) { */ case 4:
  m				_r$1 = fmt.Errorf("Read(0) = %d, %v, want 0, nil", new sliceType([new $Int(n), err])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r = _r$1;
				$s = 7; case 7: return $24r;
    			/* } */ case 5:
    		/* } */ case 2:
  �		_r$2 = io.ReadAll(new smallByteReader.ptr(r, 0, 0)); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$1 = _r$2;
		data = _tuple$1[0];
		err$1 = _tuple$1[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �			$s = -1; return err$1;
    		}
  		/* */ if (!bytes.Equal(data, content)) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if (!bytes.Equal(data, content)) { */ case 9:
  &			_r$3 = fmt.Errorf("ReadAll(small amounts) = %q\n\twant %q", new sliceType([data, content])); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$24r$1 = _r$3;
			$s = 12; case 12: return $24r$1;
    		/* } */ case 10:
  u		_r$4 = r.Read($makeSlice(sliceType$1, 10)); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_tuple$2 = _r$4;
		n$1 = _tuple$2[0];
		err$1 = _tuple$2[1];
  �		/* */ if (!((n$1 === 0)) || !($interfaceIsEqual(err$1, io.EOF))) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if (!((n$1 === 0)) || !($interfaceIsEqual(err$1, io.EOF))) { */ case 14:
  �			_r$5 = fmt.Errorf("Read(10) at EOF = %v, %v, want 0, EOF", new sliceType([new $Int(n$1), err$1])); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			$24r$2 = _r$5;
			$s = 17; case 17: return $24r$2;
    		/* } */ case 15:
  		_tuple$3 = $assertType(r, io.ReadSeeker, true);
		r$1 = _tuple$3[0];
		ok = _tuple$3[1];
   		/* */ if (ok) { $s = 18; continue; }
		/* */ $s = 19; continue;
    		/* if (ok) { */ case 18:
  h			_r$6 = r$1.Seek(new $Int64(0, 0), 1); /* */ $s = 20; case 20: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_tuple$4 = _r$6;
			off = _tuple$4[0];
			err$2 = _tuple$4[1];
  e			/* */ if (!((x = (new $Int64(0, content.$length)), (off.$high === x.$high && off.$low === x.$low))) || !($interfaceIsEqual(err$2, $ifaceNil))) { $s = 21; continue; }
			/* */ $s = 22; continue;
    			/* if (!((x = (new $Int64(0, content.$length)), (off.$high === x.$high && off.$low === x.$low))) || !($interfaceIsEqual(err$2, $ifaceNil))) { */ case 21:
  �				_r$7 = fmt.Errorf("Seek(0, 1) from EOF = %d, %v, want %d, nil", new sliceType([off, err$2, new $Int(content.$length)])); /* */ $s = 23; case 23: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$24r$3 = _r$7;
				$s = 24; case 24: return $24r$3;
    			/* } */ case 22:
  �			middle = content.$length - (_q = content.$length / 3, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
  �			/* */ if (middle > 0) { $s = 25; continue; }
			/* */ $s = 26; continue;
    			/* if (middle > 0) { */ case 25:
  �				_r$8 = r$1.Seek(new $Int64(-1, 4294967295), 1); /* */ $s = 27; case 27: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				_tuple$5 = _r$8;
				off$1 = _tuple$5[0];
				err$3 = _tuple$5[1];
  �				/* */ if (!((x$1 = (new $Int64(0, (content.$length - 1 >> 0))), (off$1.$high === x$1.$high && off$1.$low === x$1.$low))) || !($interfaceIsEqual(err$3, $ifaceNil))) { $s = 28; continue; }
				/* */ $s = 29; continue;
    				/* if (!((x$1 = (new $Int64(0, (content.$length - 1 >> 0))), (off$1.$high === x$1.$high && off$1.$low === x$1.$low))) || !($interfaceIsEqual(err$3, $ifaceNil))) { */ case 28:
  					_r$9 = fmt.Errorf("Seek(-1, 1) from EOF = %d, %v, want %d, nil", new sliceType([new $Int64(-off$1.$high, -off$1.$low), err$3, new $Int((content.$length - 1 >> 0))])); /* */ $s = 30; case 30: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					$24r$4 = _r$9;
					$s = 31; case 31: return $24r$4;
    				/* } */ case 29:
  �				_r$10 = r$1.Seek((new $Int64(0, (_q$1 = -content.$length / 3, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")))), 1); /* */ $s = 32; case 32: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
				_tuple$6 = _r$10;
				off$2 = _tuple$6[0];
				err$4 = _tuple$6[1];
  }				/* */ if (!((x$2 = (new $Int64(0, (middle - 1 >> 0))), (off$2.$high === x$2.$high && off$2.$low === x$2.$low))) || !($interfaceIsEqual(err$4, $ifaceNil))) { $s = 33; continue; }
				/* */ $s = 34; continue;
    				/* if (!((x$2 = (new $Int64(0, (middle - 1 >> 0))), (off$2.$high === x$2.$high && off$2.$low === x$2.$low))) || !($interfaceIsEqual(err$4, $ifaceNil))) { */ case 33:
  �					_r$11 = fmt.Errorf("Seek(%d, 1) from %d = %d, %v, want %d, nil", new sliceType([new $Int((_q$2 = -content.$length / 3, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero"))), new $Int((content.$length - 1 >> 0)), off$2, err$4, new $Int((middle - 1 >> 0))])); /* */ $s = 35; case 35: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					$24r$5 = _r$11;
					$s = 36; case 36: return $24r$5;
    				/* } */ case 34:
  Z				_r$12 = r$1.Seek(new $Int64(0, 1), 1); /* */ $s = 37; case 37: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
				_tuple$7 = _r$12;
				off$3 = _tuple$7[0];
				err$5 = _tuple$7[1];
  W				/* */ if (!((x$3 = (new $Int64(0, middle)), (off$3.$high === x$3.$high && off$3.$low === x$3.$low))) || !($interfaceIsEqual(err$5, $ifaceNil))) { $s = 38; continue; }
				/* */ $s = 39; continue;
    				/* if (!((x$3 = (new $Int64(0, middle)), (off$3.$high === x$3.$high && off$3.$low === x$3.$low))) || !($interfaceIsEqual(err$5, $ifaceNil))) { */ case 38:
  �					_r$13 = fmt.Errorf("Seek(+1, 1) from %d = %d, %v, want %d, nil", new sliceType([new $Int((middle - 1 >> 0)), off$3, err$5, new $Int(middle)])); /* */ $s = 40; case 40: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
					$24r$6 = _r$13;
					$s = 41; case 41: return $24r$6;
    				/* } */ case 39:
    			/* } */ case 26:
  K			_r$14 = r$1.Seek(new $Int64(0, 0), 1); /* */ $s = 42; case 42: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
			_tuple$8 = _r$14;
			off$4 = _tuple$8[0];
			err$6 = _tuple$8[1];
  H			/* */ if (!((x$4 = (new $Int64(0, middle)), (off$4.$high === x$4.$high && off$4.$low === x$4.$low))) || !($interfaceIsEqual(err$6, $ifaceNil))) { $s = 43; continue; }
			/* */ $s = 44; continue;
    			/* if (!((x$4 = (new $Int64(0, middle)), (off$4.$high === x$4.$high && off$4.$low === x$4.$low))) || !($interfaceIsEqual(err$6, $ifaceNil))) { */ case 43:
  �				_r$15 = fmt.Errorf("Seek(0, 1) from %d = %d, %v, want %d, nil", new sliceType([new $Int(middle), off$4, err$6, new $Int(middle)])); /* */ $s = 45; case 45: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
				$24r$7 = _r$15;
				$s = 46; case 46: return $24r$7;
    			/* } */ case 44:
  +			_r$16 = io.ReadAll(new smallByteReader.ptr(r$1, 0, 0)); /* */ $s = 47; case 47: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
			_tuple$9 = _r$16;
			data$1 = _tuple$9[0];
			err$7 = _tuple$9[1];
  ]			/* */ if (!($interfaceIsEqual(err$7, $ifaceNil))) { $s = 48; continue; }
			/* */ $s = 49; continue;
    			/* if (!($interfaceIsEqual(err$7, $ifaceNil))) { */ case 48:
  p				_r$17 = fmt.Errorf("ReadAll from offset %d: %v", new sliceType([new $Int(middle), err$7])); /* */ $s = 50; case 50: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
				$24r$8 = _r$17;
				$s = 51; case 51: return $24r$8;
    			/* } */ case 49:
  �			/* */ if (!bytes.Equal(data$1, $subslice(content, middle))) { $s = 52; continue; }
			/* */ $s = 53; continue;
    			/* if (!bytes.Equal(data$1, $subslice(content, middle))) { */ case 52:
  �				_r$18 = fmt.Errorf("ReadAll from offset %d = %q\n\twant %q", new sliceType([new $Int(middle), data$1, $subslice(content, middle)])); /* */ $s = 54; case 54: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				$24r$9 = _r$18;
				$s = 55; case 55: return $24r$9;
    			/* } */ case 53:
  ~			_r$19 = r$1.Seek((new $Int64(0, (_q$3 = middle / 2, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >> 0 : $throwRuntimeError("integer divide by zero")))), 0); /* */ $s = 56; case 56: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
			_tuple$10 = _r$19;
			off$5 = _tuple$10[0];
			err$8 = _tuple$10[1];
  {			/* */ if (!((x$5 = (new $Int64(0, (_q$4 = middle / 2, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >> 0 : $throwRuntimeError("integer divide by zero")))), (off$5.$high === x$5.$high && off$5.$low === x$5.$low))) || !($interfaceIsEqual(err$8, $ifaceNil))) { $s = 57; continue; }
			/* */ $s = 58; continue;
    			/* if (!((x$5 = (new $Int64(0, (_q$4 = middle / 2, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >> 0 : $throwRuntimeError("integer divide by zero")))), (off$5.$high === x$5.$high && off$5.$low === x$5.$low))) || !($interfaceIsEqual(err$8, $ifaceNil))) { */ case 57:
  �				_r$20 = fmt.Errorf("Seek(%d, 0) from EOF = %d, %v, want %d, nil", new sliceType([new $Int((_q$5 = middle / 2, (_q$5 === _q$5 && _q$5 !== 1/0 && _q$5 !== -1/0) ? _q$5 >> 0 : $throwRuntimeError("integer divide by zero"))), off$5, err$8, new $Int((_q$6 = middle / 2, (_q$6 === _q$6 && _q$6 !== 1/0 && _q$6 !== -1/0) ? _q$6 >> 0 : $throwRuntimeError("integer divide by zero")))])); /* */ $s = 59; case 59: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
				$24r$10 = _r$20;
				$s = 60; case 60: return $24r$10;
    			/* } */ case 58:
  8			_r$21 = r$1.Seek((new $Int64(0, (_q$7 = -content.$length / 3, (_q$7 === _q$7 && _q$7 !== 1/0 && _q$7 !== -1/0) ? _q$7 >> 0 : $throwRuntimeError("integer divide by zero")))), 2); /* */ $s = 61; case 61: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
			_tuple$11 = _r$21;
			off$6 = _tuple$11[0];
			err$9 = _tuple$11[1];
  5			/* */ if (!((x$6 = (new $Int64(0, middle)), (off$6.$high === x$6.$high && off$6.$low === x$6.$low))) || !($interfaceIsEqual(err$9, $ifaceNil))) { $s = 62; continue; }
			/* */ $s = 63; continue;
    			/* if (!((x$6 = (new $Int64(0, middle)), (off$6.$high === x$6.$high && off$6.$low === x$6.$low))) || !($interfaceIsEqual(err$9, $ifaceNil))) { */ case 62:
  �				_r$22 = fmt.Errorf("Seek(%d, 2) from %d = %d, %v, want %d, nil", new sliceType([new $Int((_q$8 = -content.$length / 3, (_q$8 === _q$8 && _q$8 !== 1/0 && _q$8 !== -1/0) ? _q$8 >> 0 : $throwRuntimeError("integer divide by zero"))), new $Int((_q$9 = middle / 2, (_q$9 === _q$9 && _q$9 !== 1/0 && _q$9 !== -1/0) ? _q$9 >> 0 : $throwRuntimeError("integer divide by zero"))), off$6, err$9, new $Int(middle)])); /* */ $s = 64; case 64: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
				$24r$11 = _r$22;
				$s = 65; case 65: return $24r$11;
    			/* } */ case 63:
  I			_r$23 = io.ReadAll(new smallByteReader.ptr(r$1, 0, 0)); /* */ $s = 66; case 66: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
			_tuple$12 = _r$23;
			data$1 = _tuple$12[0];
			err$7 = _tuple$12[1];
  z			/* */ if (!($interfaceIsEqual(err$7, $ifaceNil))) { $s = 67; continue; }
			/* */ $s = 68; continue;
    			/* if (!($interfaceIsEqual(err$7, $ifaceNil))) { */ case 67:
  �				_r$24 = fmt.Errorf("ReadAll from offset %d: %v", new sliceType([new $Int(middle), err$7])); /* */ $s = 69; case 69: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
				$24r$12 = _r$24;
				$s = 70; case 70: return $24r$12;
    			/* } */ case 68:
  �			/* */ if (!bytes.Equal(data$1, $subslice(content, middle))) { $s = 71; continue; }
			/* */ $s = 72; continue;
    			/* if (!bytes.Equal(data$1, $subslice(content, middle))) { */ case 71:
  �				_r$25 = fmt.Errorf("ReadAll from offset %d = %q\n\twant %q", new sliceType([new $Int(middle), data$1, $subslice(content, middle)])); /* */ $s = 73; case 73: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
				$24r$13 = _r$25;
				$s = 74; case 74: return $24r$13;
    			/* } */ case 72:
  �			_r$26 = r$1.Seek((new $Int64(0, (_q$10 = middle / 2, (_q$10 === _q$10 && _q$10 !== 1/0 && _q$10 !== -1/0) ? _q$10 >> 0 : $throwRuntimeError("integer divide by zero")))), 0); /* */ $s = 75; case 75: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
			_tuple$13 = _r$26;
			off$7 = _tuple$13[0];
			err$10 = _tuple$13[1];
  �			/* */ if (!((x$7 = (new $Int64(0, (_q$11 = middle / 2, (_q$11 === _q$11 && _q$11 !== 1/0 && _q$11 !== -1/0) ? _q$11 >> 0 : $throwRuntimeError("integer divide by zero")))), (off$7.$high === x$7.$high && off$7.$low === x$7.$low))) || !($interfaceIsEqual(err$10, $ifaceNil))) { $s = 76; continue; }
			/* */ $s = 77; continue;
    			/* if (!((x$7 = (new $Int64(0, (_q$11 = middle / 2, (_q$11 === _q$11 && _q$11 !== 1/0 && _q$11 !== -1/0) ? _q$11 >> 0 : $throwRuntimeError("integer divide by zero")))), (off$7.$high === x$7.$high && off$7.$low === x$7.$low))) || !($interfaceIsEqual(err$10, $ifaceNil))) { */ case 76:
  �				_r$27 = fmt.Errorf("Seek(%d, 0) from EOF = %d, %v, want %d, nil", new sliceType([new $Int((_q$12 = middle / 2, (_q$12 === _q$12 && _q$12 !== 1/0 && _q$12 !== -1/0) ? _q$12 >> 0 : $throwRuntimeError("integer divide by zero"))), off$7, err$10, new $Int((_q$13 = middle / 2, (_q$13 === _q$13 && _q$13 !== 1/0 && _q$13 !== -1/0) ? _q$13 >> 0 : $throwRuntimeError("integer divide by zero")))])); /* */ $s = 78; case 78: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
				$24r$14 = _r$27;
				$s = 79; case 79: return $24r$14;
    			/* } */ case 77:
  =			_r$28 = io.ReadAll(r$1); /* */ $s = 80; case 80: if($c) { $c = false; _r$28 = _r$28.$blk(); } if (_r$28 && _r$28.$blk !== undefined) { break s; }
			_tuple$14 = _r$28;
			data$1 = _tuple$14[0];
			err$7 = _tuple$14[1];
  Y			/* */ if (!($interfaceIsEqual(err$7, $ifaceNil))) { $s = 81; continue; }
			/* */ $s = 82; continue;
    			/* if (!($interfaceIsEqual(err$7, $ifaceNil))) { */ case 81:
  l				_r$29 = fmt.Errorf("ReadAll from offset %d: %v", new sliceType([new $Int((_q$14 = middle / 2, (_q$14 === _q$14 && _q$14 !== 1/0 && _q$14 !== -1/0) ? _q$14 >> 0 : $throwRuntimeError("integer divide by zero"))), err$7])); /* */ $s = 83; case 83: if($c) { $c = false; _r$29 = _r$29.$blk(); } if (_r$29 && _r$29.$blk !== undefined) { break s; }
				$24r$15 = _r$29;
				$s = 84; case 84: return $24r$15;
    			/* } */ case 82:
  �			/* */ if (!bytes.Equal(data$1, $subslice(content, (_q$15 = middle / 2, (_q$15 === _q$15 && _q$15 !== 1/0 && _q$15 !== -1/0) ? _q$15 >> 0 : $throwRuntimeError("integer divide by zero"))))) { $s = 85; continue; }
			/* */ $s = 86; continue;
    			/* if (!bytes.Equal(data$1, $subslice(content, (_q$15 = middle / 2, (_q$15 === _q$15 && _q$15 !== 1/0 && _q$15 !== -1/0) ? _q$15 >> 0 : $throwRuntimeError("integer divide by zero"))))) { */ case 85:
  �				_r$30 = fmt.Errorf("ReadAll from offset %d = %q\n\twant %q", new sliceType([new $Int((_q$16 = middle / 2, (_q$16 === _q$16 && _q$16 !== 1/0 && _q$16 !== -1/0) ? _q$16 >> 0 : $throwRuntimeError("integer divide by zero"))), data$1, $subslice(content, (_q$17 = middle / 2, (_q$17 === _q$17 && _q$17 !== 1/0 && _q$17 !== -1/0) ? _q$17 >> 0 : $throwRuntimeError("integer divide by zero")))])); /* */ $s = 87; case 87: if($c) { $c = false; _r$30 = _r$30.$blk(); } if (_r$30 && _r$30.$blk !== undefined) { break s; }
				$24r$16 = _r$30;
				$s = 88; case 88: return $24r$16;
    			/* } */ case 86:
    		/* } */ case 19:
  L		_tuple$15 = $assertType(r, io.ReaderAt, true);
		r$2 = _tuple$15[0];
		ok$1 = _tuple$15[1];
  I		/* */ if (ok$1) { $s = 89; continue; }
		/* */ $s = 90; continue;
    		/* if (ok$1) { */ case 89:
  m			data$2 = $makeSlice(sliceType$1, content.$length, (content.$length + 1 >> 0));
  �			_ref = data$2;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
  �				((i < 0 || i >= data$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$2.$array[data$2.$offset + i] = 254);
    				_i++;
			}
  �			_r$31 = r$2.ReadAt(data$2, new $Int64(0, 0)); /* */ $s = 91; case 91: if($c) { $c = false; _r$31 = _r$31.$blk(); } if (_r$31 && _r$31.$blk !== undefined) { break s; }
			_tuple$16 = _r$31;
			n$2 = _tuple$16[0];
			err$11 = _tuple$16[1];
  �			/* */ if (!((n$2 === data$2.$length)) || !($interfaceIsEqual(err$11, $ifaceNil)) && !($interfaceIsEqual(err$11, io.EOF))) { $s = 92; continue; }
			/* */ $s = 93; continue;
    			/* if (!((n$2 === data$2.$length)) || !($interfaceIsEqual(err$11, $ifaceNil)) && !($interfaceIsEqual(err$11, io.EOF))) { */ case 92:
   $				_r$32 = fmt.Errorf("ReadAt(%d, 0) = %v, %v, want %d, nil or EOF", new sliceType([new $Int(data$2.$length), new $Int(n$2), err$11, new $Int(data$2.$length)])); /* */ $s = 94; case 94: if($c) { $c = false; _r$32 = _r$32.$blk(); } if (_r$32 && _r$32.$blk !== undefined) { break s; }
				$24r$17 = _r$32;
				$s = 95; case 95: return $24r$17;
    			/* } */ case 93:
   �			/* */ if (!bytes.Equal(data$2, content)) { $s = 96; continue; }
			/* */ $s = 97; continue;
    			/* if (!bytes.Equal(data$2, content)) { */ case 96:
   �				_r$33 = fmt.Errorf("ReadAt(%d, 0) = %q\n\twant %q", new sliceType([new $Int(data$2.$length), data$2, content])); /* */ $s = 98; case 98: if($c) { $c = false; _r$33 = _r$33.$blk(); } if (_r$33 && _r$33.$blk !== undefined) { break s; }
				$24r$18 = _r$33;
				$s = 99; case 99: return $24r$18;
    			/* } */ case 97:
  !			_r$34 = r$2.ReadAt($subslice(data$2, 0, 1), (new $Int64(0, data$2.$length))); /* */ $s = 100; case 100: if($c) { $c = false; _r$34 = _r$34.$blk(); } if (_r$34 && _r$34.$blk !== undefined) { break s; }
			_tuple$17 = _r$34;
			n$2 = _tuple$17[0];
			err$11 = _tuple$17[1];
  !1			/* */ if (!((n$2 === 0)) || !($interfaceIsEqual(err$11, io.EOF))) { $s = 101; continue; }
			/* */ $s = 102; continue;
    			/* if (!((n$2 === 0)) || !($interfaceIsEqual(err$11, io.EOF))) { */ case 101:
  !Q				_r$35 = fmt.Errorf("ReadAt(1, %d) = %v, %v, want 0, EOF", new sliceType([new $Int(data$2.$length), new $Int(n$2), err$11])); /* */ $s = 103; case 103: if($c) { $c = false; _r$35 = _r$35.$blk(); } if (_r$35 && _r$35.$blk !== undefined) { break s; }
				$24r$19 = _r$35;
				$s = 104; case 104: return $24r$19;
    			/* } */ case 102:
  !�			_ref$1 = data$2;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i$1 = _i$1;
  !�				((i$1 < 0 || i$1 >= data$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$2.$array[data$2.$offset + i$1] = 254);
    				_i$1++;
			}
  !�			_r$36 = r$2.ReadAt($subslice(data$2, 0, data$2.$capacity), new $Int64(0, 0)); /* */ $s = 105; case 105: if($c) { $c = false; _r$36 = _r$36.$blk(); } if (_r$36 && _r$36.$blk !== undefined) { break s; }
			_tuple$18 = _r$36;
			n$2 = _tuple$18[0];
			err$11 = _tuple$18[1];
  !�			/* */ if (!((n$2 === data$2.$length)) || !($interfaceIsEqual(err$11, io.EOF))) { $s = 106; continue; }
			/* */ $s = 107; continue;
    			/* if (!((n$2 === data$2.$length)) || !($interfaceIsEqual(err$11, io.EOF))) { */ case 106:
  "#				_r$37 = fmt.Errorf("ReadAt(%d, 0) = %v, %v, want %d, EOF", new sliceType([new $Int(data$2.$capacity), new $Int(n$2), err$11, new $Int(data$2.$length)])); /* */ $s = 108; case 108: if($c) { $c = false; _r$37 = _r$37.$blk(); } if (_r$37 && _r$37.$blk !== undefined) { break s; }
				$24r$20 = _r$37;
				$s = 109; case 109: return $24r$20;
    			/* } */ case 107:
  "�			/* */ if (!bytes.Equal(data$2, content)) { $s = 110; continue; }
			/* */ $s = 111; continue;
    			/* if (!bytes.Equal(data$2, content)) { */ case 110:
  "�				_r$38 = fmt.Errorf("ReadAt(%d, 0) = %q\n\twant %q", new sliceType([new $Int(data$2.$length), data$2, content])); /* */ $s = 112; case 112: if($c) { $c = false; _r$38 = _r$38.$blk(); } if (_r$38 && _r$38.$blk !== undefined) { break s; }
				$24r$21 = _r$38;
				$s = 113; case 113: return $24r$21;
    			/* } */ case 111:
  "�			_ref$2 = data$2;
			_i$2 = 0;
			while (true) {
				if (!(_i$2 < _ref$2.$length)) { break; }
				i$2 = _i$2;
  #				((i$2 < 0 || i$2 >= data$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$2.$array[data$2.$offset + i$2] = 254);
    				_i$2++;
			}
  #'			_ref$3 = data$2;
			_i$3 = 0;
			/* while (true) { */ case 114:
				/* if (!(_i$3 < _ref$3.$length)) { break; } */ if(!(_i$3 < _ref$3.$length)) { $s = 115; continue; }
				i$3 = _i$3;
  #@				_r$39 = r$2.ReadAt($subslice(data$2, i$3, (i$3 + 1 >> 0)), (new $Int64(0, i$3))); /* */ $s = 116; case 116: if($c) { $c = false; _r$39 = _r$39.$blk(); } if (_r$39 && _r$39.$blk !== undefined) { break s; }
				_tuple$19 = _r$39;
				n$2 = _tuple$19[0];
				err$11 = _tuple$19[1];
  #l				/* */ if (!((n$2 === 1)) || !($interfaceIsEqual(err$11, $ifaceNil)) && (!((i$3 === (data$2.$length - 1 >> 0))) || !($interfaceIsEqual(err$11, io.EOF)))) { $s = 117; continue; }
				/* */ $s = 118; continue;
    				/* if (!((n$2 === 1)) || !($interfaceIsEqual(err$11, $ifaceNil)) && (!((i$3 === (data$2.$length - 1 >> 0))) || !($interfaceIsEqual(err$11, io.EOF)))) { */ case 117:
  #�					want = "nil";
    					if (i$3 === (data$2.$length - 1 >> 0)) {
  #�						want = "nil or EOF";
    					}
  #�					_r$40 = fmt.Errorf("ReadAt(1, %d) = %v, %v, want 1, %s", new sliceType([new $Int(i$3), new $Int(n$2), err$11, new $String(want)])); /* */ $s = 119; case 119: if($c) { $c = false; _r$40 = _r$40.$blk(); } if (_r$40 && _r$40.$blk !== undefined) { break s; }
					$24r$22 = _r$40;
					$s = 120; case 120: return $24r$22;
    				/* } */ case 118:
  $M				/* */ if (!((((i$3 < 0 || i$3 >= data$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$2.$array[data$2.$offset + i$3]) === ((i$3 < 0 || i$3 >= content.$length) ? ($throwRuntimeError("index out of range"), undefined) : content.$array[content.$offset + i$3])))) { $s = 121; continue; }
				/* */ $s = 122; continue;
    				/* if (!((((i$3 < 0 || i$3 >= data$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$2.$array[data$2.$offset + i$3]) === ((i$3 < 0 || i$3 >= content.$length) ? ($throwRuntimeError("index out of range"), undefined) : content.$array[content.$offset + i$3])))) { */ case 121:
  $l					_r$41 = fmt.Errorf("ReadAt(1, %d) = %q want %q", new sliceType([new $Int(i$3), $subslice(data$2, i$3, (i$3 + 1 >> 0)), $subslice(content, i$3, (i$3 + 1 >> 0))])); /* */ $s = 123; case 123: if($c) { $c = false; _r$41 = _r$41.$blk(); } if (_r$41 && _r$41.$blk !== undefined) { break s; }
					$24r$23 = _r$41;
					$s = 124; case 124: return $24r$23;
    				/* } */ case 122:
    				_i$3++;
			$s = 114; continue;
			case 115:
    		/* } */ case 90:
  $�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TestReader }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$10 = $24r$10; $f.$24r$11 = $24r$11; $f.$24r$12 = $24r$12; $f.$24r$13 = $24r$13; $f.$24r$14 = $24r$14; $f.$24r$15 = $24r$15; $f.$24r$16 = $24r$16; $f.$24r$17 = $24r$17; $f.$24r$18 = $24r$18; $f.$24r$19 = $24r$19; $f.$24r$2 = $24r$2; $f.$24r$20 = $24r$20; $f.$24r$21 = $24r$21; $f.$24r$22 = $24r$22; $f.$24r$23 = $24r$23; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f.$24r$7 = $24r$7; $f.$24r$8 = $24r$8; $f.$24r$9 = $24r$9; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._q = _q; $f._q$1 = _q$1; $f._q$10 = _q$10; $f._q$11 = _q$11; $f._q$12 = _q$12; $f._q$13 = _q$13; $f._q$14 = _q$14; $f._q$15 = _q$15; $f._q$16 = _q$16; $f._q$17 = _q$17; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._q$4 = _q$4; $f._q$5 = _q$5; $f._q$6 = _q$6; $f._q$7 = _q$7; $f._q$8 = _q$8; $f._q$9 = _q$9; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$28 = _r$28; $f._r$29 = _r$29; $f._r$3 = _r$3; $f._r$30 = _r$30; $f._r$31 = _r$31; $f._r$32 = _r$32; $f._r$33 = _r$33; $f._r$34 = _r$34; $f._r$35 = _r$35; $f._r$36 = _r$36; $f._r$37 = _r$37; $f._r$38 = _r$38; $f._r$39 = _r$39; $f._r$4 = _r$4; $f._r$40 = _r$40; $f._r$41 = _r$41; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$10 = _tuple$10; $f._tuple$11 = _tuple$11; $f._tuple$12 = _tuple$12; $f._tuple$13 = _tuple$13; $f._tuple$14 = _tuple$14; $f._tuple$15 = _tuple$15; $f._tuple$16 = _tuple$16; $f._tuple$17 = _tuple$17; $f._tuple$18 = _tuple$18; $f._tuple$19 = _tuple$19; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f.content = content; $f.data = data; $f.data$1 = data$1; $f.data$2 = data$2; $f.err = err; $f.err$1 = err$1; $f.err$10 = err$10; $f.err$11 = err$11; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.err$5 = err$5; $f.err$6 = err$6; $f.err$7 = err$7; $f.err$8 = err$8; $f.err$9 = err$9; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.middle = middle; $f.n = n; $f.n$1 = n$1; $f.n$2 = n$2; $f.off = off; $f.off$1 = off$1; $f.off$2 = off$2; $f.off$3 = off$3; $f.off$4 = off$4; $f.off$5 = off$5; $f.off$6 = off$6; $f.off$7 = off$7; $f.ok = ok; $f.ok$1 = ok$1; $f.r = r; $f.r$1 = r$1; $f.r$2 = r$2; $f.want = want; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TestReader = TestReader;

TestReader
bytes.Equal
fmt.Errorfio.EOF
io.ReadAllio.ReadSeekerio.ReaderAttesting/iotest.TestReadertesting/iotest.sliceTypetesting/iotest.sliceType$1testing/iotest.smallByteReader testing/iotest.TruncateWritertesting/iotestTruncateWriter TruncateWriter��	TruncateWriter = function(w, n) {
		var n, w;
  &$		return new truncateWriter.ptr(w, n);
    	};
	$pkg.TruncateWriter = TruncateWriter;
TruncateWritertesting/iotest.TruncateWritertesting/iotest.truncateWriter &(*testing/iotest.truncateWriter).Write �	truncateWriter.ptr.prototype.Write = function(p) {
		var _r, _tmp, _tmp$1, _tuple, err, n, p, t, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; err = $f.err; n = $f.n; p = $f.p; t = $f.t; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		t = this;
    		if ((x = t.n, (x.$high < 0 || (x.$high === 0 && x.$low <= 0)))) {
    			_tmp = p.$length;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  &�		n = p.$length;
    		if ((x$1 = (new $Int64(0, n)), x$2 = t.n, (x$1.$high > x$2.$high || (x$1.$high === x$2.$high && x$1.$low > x$2.$low)))) {
  '			n = (((x$3 = t.n, x$3.$low + ((x$3.$high >> 31) * 4294967296)) >> 0));
    		}
  '"		_r = t.w.Write($subslice(p, 0, n)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  '>		t.n = (x$4 = t.n, x$5 = (new $Int64(0, n)), new $Int64(x$4.$high - x$5.$high, x$4.$low - x$5.$low));
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  'a			n = p.$length;
    		}
  'p		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: truncateWriter.ptr.prototype.Write }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.err = err; $f.n = n; $f.p = p; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	truncateWriter.prototype.Write = function(p) { return this.$val.Write(p); };
truncateWritertesting/iotest.truncateWriter �{"Base":10106,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/testing/iotest/logger.go","Base":1,"Size":1295,"Lines":[0,55,109,159,160,175,176,185,191,198,200,201,227,242,260,262,263,322,345,362,411,421,461,464,472,474,475,537,602,659,719,751,753,754,779,794,812,814,815,872,894,911,960,970,1010,1013,1021,1023,1024,1085,1149,1203,1262,1293],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/testing/iotest/reader.go","Base":1297,"Size":8133,"Lines":[0,55,109,159,160,236,251,252,261,270,280,287,293,295,296,346,397,468,469,497,510,512,513,567,585,601,604,629,631,632,684,735,800,801,826,839,841,842,893,931,933,934,1011,1089,1165,1243,1289,1385,1386,1414,1432,1447,1462,1464,1465,1525,1570,1625,1632,1658,1690,1717,1731,1735,1762,1771,1775,1799,1825,1828,1836,1838,1839,1878,1917,1918,1973,2024,2098,2099,2127,2144,2155,2157,2158,2212,2223,2242,2265,2268,2288,2290,2291,2366,2404,2433,2435,2436,2460,2471,2473,2474,2524,2541,2543,2544,2574,2589,2598,2607,2609,2610,2666,2684,2700,2703,2720,2730,2747,2760,2763,2791,2825,2894,2897,2909,2924,2926,2927,3002,3050,3118,3166,3169,3246,3289,3342,3365,3389,3417,3479,3483,3486,3487,3536,3553,3566,3569,3603,3680,3683,3719,3749,3818,3821,3822,3859,3922,3996,4087,4091,4092,4147,4218,4260,4278,4356,4452,4457,4549,4670,4675,4745,4841,4846,4850,4851,4917,4985,5077,5081,5082,5144,5194,5212,5276,5280,5324,5419,5423,5424,5480,5564,5662,5666,5755,5867,5871,5872,5942,5991,6009,6073,6077,6121,6216,6220,6221,6256,6340,6438,6442,6470,6488,6554,6558,6604,6703,6707,6710,6711,6746,6799,6823,6841,6845,6875,6928,7026,7030,7065,7145,7149,7150,7198,7229,7308,7312,7313,7337,7355,7359,7400,7439,7530,7534,7569,7649,7653,7654,7678,7696,7700,7724,7768,7836,7854,7880,7905,7911,7988,7993,8023,8107,8112,8116,8119,8131],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/testing/iotest/writer.go","Base":9431,"Size":674,"Lines":[0,55,109,159,160,175,176,188,189,241,278,332,362,364,365,394,407,416,418,419,481,496,517,520,535,547,568,583,586,614,631,648,661,664,672],"Infos":null}]}
 