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
GoLinkname�� Implementation�� 	Reference��   �|���net/textproto	textprotobufiobytesfmtionetstrconvstringssync�i ��s ReaderWriterPipelineconnReadWriteCloserioClosecConnCmdformatargsiderrnetworkaddrCodeMsgErroreAddh
MIMEHeaderkeyvalueSetGetValuesDelrbufiowmuMutexsyncrequest	sequencerresponseNextpStartRequest
EndRequestStartResponseEndResponseProtocolErrorRdot	dotReaderbufReadLineReadLineBytesreadLineSliceReadContinuedLineReadContinuedLineBytesreadContinuedLineSlicevalidateFirstLine	skipSpacereadCodeLine
expectCodecode	continuedmessageReadCodeLineReadResponse	DotReadercloseDotReadDotBytesReadDotLinesReadMIMEHeaderupcomingHeaderNewlinesnbW	dotWriter
PrintfLine	DotWriterWriteCloserCloserrdlastBytelastRuneSizeSizeResetresetfillreadErrPeekDiscard	discardedReadReadByte
UnreadByteReadRunesize
UnreadRuneBuffered	ReadSlicedelimlineisPrefixcollectFragmentsfullBuffersfinalFragmenttotalLen	ReadBytes
ReadStringWriteTowriteBufwrFlush	AvailableWritenn	WriteByte	WriteRuneWriteStringReadFromstatesemaLockmlockSlowUnlock
unlockSlownewwaitStartEndd	textprotoCanonicalMIMEHeaderKeyDialNewConn	NewReader	NewWriter	TrimBytes
TrimStringF       
  / + 
. 1 4  :NN  UT 7 2 8Q   ? 8S C JY O RNF  V ^ }   c  h  l�T � l r�  � zT � t x� � �   � x� � �   � x� �   � x� � �  � x� �  NF  4 �  ��+F  �� �  
��.F  �� �  �� � ��  O  ��  �� 11111T � � ��   � �� O   � �� O   � �� O   � �� O   �T  l ��  � �� ��  ��  �� ++++++ �  +++++ /+++++T � � ��    � ��  �  � ��  �  � ��    � ��  �  � �� �� �   � ��   � �� � � �  � R  � �� � � � R  � �� � � � R  � ��  � � ��   � ��  �  � ��  �  � ��  �  � ��  �F  �� � F     � �� ��  �� .  �. �/.T � � �� C J�  � ��  � � ��   �/ 
// � � � T �� ��  ��  �  �  R  �  � ���������������������T � � ��   � �� ��   � �� �� ��   � ��   � ��   � �� � �   � �� � � R  � �� �� � R  � ��    � ��   � ��  � � R � ��   � ��   � �� � �� R  � ��  �� �  R � �� � �� �� � R  � �� � �   � �� �    � �� �� � R  � �� ��   � R  ��  �  �� ����������T �
 � ��   � �� ��   � ��   � ��   � ��   � �� �� � R  � �� 8   � �� � � R  � ��      � �� �� � R � �  �	 ����T � � ��   � ��   � ��   � �� �   �� ��  O  �� ��T � �  � O   �  � O  + ��  � �T � � �� �� � R /  � �� � R T �. ��  � ��T � � �� �� � R  2 ��  / � � T �/  2  T �/  � �� � R T �� � :;�_l�z���������������
��������� �
�// ������
��� ��a bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  net	net = $packages["net"];
��    		$r = net.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
MIMEHeaderr	MIMEHeader = $pkg.MIMEHeader = $newType(4, $kindMap, "textproto.MIMEHeader", true, "net/textproto", true, null);
��	MIMEHeader.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$String, $String], [], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $String], [], false)}, {prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [$String], false)}, {prop: "Values", name: "Values", pkg: "", typ: $funcType([$String], [sliceType$1], false)}, {prop: "Del", name: "Del", pkg: "", typ: $funcType([$String], [], false)}];
(	MIMEHeader.init($String, sliceType$1);

MIMEHeadernet/textproto.MIMEHeadernet/textproto.sliceType$1  Pipeline��	Pipeline = $pkg.Pipeline = $newType(0, $kindStruct, "textproto.Pipeline", true, "net/textproto", true, function(mu_, id_, request_, response_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new sync.Mutex.ptr(0, 0);
			this.id = 0;
			this.request = new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false);
			this.response = new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false);
			return;
		}
		this.mu = mu_;
		this.id = id_;
		this.request = request_;
		this.response = response_;
	});
��	ptrType$7.methods = [{prop: "Next", name: "Next", pkg: "", typ: $funcType([], [$Uint], false)}, {prop: "StartRequest", name: "StartRequest", pkg: "", typ: $funcType([$Uint], [], false)}, {prop: "EndRequest", name: "EndRequest", pkg: "", typ: $funcType([$Uint], [], false)}, {prop: "StartResponse", name: "StartResponse", pkg: "", typ: $funcType([$Uint], [], false)}, {prop: "EndResponse", name: "EndResponse", pkg: "", typ: $funcType([$Uint], [], false)}];
��	Pipeline.init("net/textproto", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "id", name: "id", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "request", name: "request", embedded: false, exported: false, typ: sequencer, tag: ""}, {prop: "response", name: "response", embedded: false, exported: false, typ: sequencer, tag: ""}]);
Pipelinenet/textproto.Pipelinenet/textproto.ptrType$7net/textproto.sequencer
sync.Mutex  	sequencer�T	sequencer = $pkg.sequencer = $newType(0, $kindStruct, "textproto.sequencer", true, "net/textproto", false, function(mu_, id_, wait_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new sync.Mutex.ptr(0, 0);
			this.id = 0;
			this.wait = false;
			return;
		}
		this.mu = mu_;
		this.id = id_;
		this.wait = wait_;
	});
��	ptrType$8.methods = [{prop: "Start", name: "Start", pkg: "", typ: $funcType([$Uint], [], false)}, {prop: "End", name: "End", pkg: "", typ: $funcType([$Uint], [], false)}];
�"	sequencer.init("net/textproto", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "id", name: "id", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "wait", name: "wait", embedded: false, exported: false, typ: mapType, tag: ""}]);
	sequencernet/textproto.chanTypenet/textproto.mapTypenet/textproto.ptrType$8net/textproto.sequencernet/textproto.structType
sync.Mutex  Reader�M	Reader = $pkg.Reader = $newType(0, $kindStruct, "textproto.Reader", true, "net/textproto", true, function(R_, dot_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = ptrType.nil;
			this.dot = ptrType$1.nil;
			this.buf = sliceType.nil;
			return;
		}
		this.R = R_;
		this.dot = dot_;
		this.buf = buf_;
	});
��	ptrType$2.methods = [{prop: "ReadLine", name: "ReadLine", pkg: "", typ: $funcType([], [$String, $error], false)}, {prop: "ReadLineBytes", name: "ReadLineBytes", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "readLineSlice", name: "readLineSlice", pkg: "net/textproto", typ: $funcType([], [sliceType, $error], false)}, {prop: "ReadContinuedLine", name: "ReadContinuedLine", pkg: "", typ: $funcType([], [$String, $error], false)}, {prop: "ReadContinuedLineBytes", name: "ReadContinuedLineBytes", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "readContinuedLineSlice", name: "readContinuedLineSlice", pkg: "net/textproto", typ: $funcType([funcType], [sliceType, $error], false)}, {prop: "skipSpace", name: "skipSpace", pkg: "net/textproto", typ: $funcType([], [$Int], false)}, {prop: "readCodeLine", name: "readCodeLine", pkg: "net/textproto", typ: $funcType([$Int], [$Int, $Bool, $String, $error], false)}, {prop: "ReadCodeLine", name: "ReadCodeLine", pkg: "", typ: $funcType([$Int], [$Int, $String, $error], false)}, {prop: "ReadResponse", name: "ReadResponse", pkg: "", typ: $funcType([$Int], [$Int, $String, $error], false)}, {prop: "DotReader", name: "DotReader", pkg: "", typ: $funcType([], [io.Reader], false)}, {prop: "closeDot", name: "closeDot", pkg: "net/textproto", typ: $funcType([], [], false)}, {prop: "ReadDotBytes", name: "ReadDotBytes", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "ReadDotLines", name: "ReadDotLines", pkg: "", typ: $funcType([], [sliceType$1, $error], false)}, {prop: "ReadMIMEHeader", name: "ReadMIMEHeader", pkg: "", typ: $funcType([], [MIMEHeader, $error], false)}, {prop: "upcomingHeaderNewlines", name: "upcomingHeaderNewlines", pkg: "net/textproto", typ: $funcType([], [$Int], false)}];
�	Reader.init("net/textproto", [{prop: "R", name: "R", embedded: false, exported: true, typ: ptrType, tag: ""}, {prop: "dot", name: "dot", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}]);
Reader		io.Readernet/textproto.MIMEHeadernet/textproto.Readernet/textproto.funcTypenet/textproto.ptrTypenet/textproto.ptrType$1net/textproto.ptrType$2net/textproto.sliceTypenet/textproto.sliceType$1  	dotReader�	dotReader = $pkg.dotReader = $newType(0, $kindStruct, "textproto.dotReader", true, "net/textproto", false, function(r_, state_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = ptrType$2.nil;
			this.state = 0;
			return;
		}
		this.r = r_;
		this.state = state_;
	});
r	ptrType$1.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	dotReader.init("net/textproto", [{prop: "r", name: "r", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "state", name: "state", embedded: false, exported: false, typ: $Int, tag: ""}]);
	dotReadernet/textproto.dotReadernet/textproto.ptrType$1net/textproto.ptrType$2net/textproto.sliceType  Error�	Error = $pkg.Error = $newType(0, $kindStruct, "textproto.Error", true, "net/textproto", true, function(Code_, Msg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Code = 0;
			this.Msg = "";
			return;
		}
		this.Code = Code_;
		this.Msg = Msg_;
	});
f	ptrType$9.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	Error.init("", [{prop: "Code", name: "Code", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Msg", name: "Msg", embedded: false, exported: true, typ: $String, tag: ""}]);
Errornet/textproto.Errornet/textproto.ptrType$9  ProtocolError~	ProtocolError = $pkg.ProtocolError = $newType(8, $kindString, "textproto.ProtocolError", true, "net/textproto", true, null);
j	ProtocolError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
ProtocolErrornet/textproto.ProtocolError  Conn��	Conn = $pkg.Conn = $newType(0, $kindStruct, "textproto.Conn", true, "net/textproto", true, function(Reader_, Writer_, Pipeline_, conn_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Reader = new Reader.ptr(ptrType.nil, ptrType$1.nil, sliceType.nil);
			this.Writer = new Writer.ptr(ptrType$3.nil, ptrType$4.nil);
			this.Pipeline = new Pipeline.ptr(new sync.Mutex.ptr(0, 0), 0, new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false), new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false));
			this.conn = $ifaceNil;
			return;
		}
		this.Reader = Reader_;
		this.Writer = Writer_;
		this.Pipeline = Pipeline_;
		this.conn = conn_;
	});
��	ptrType$5.methods = [{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Cmd", name: "Cmd", pkg: "", typ: $funcType([$String, sliceType$2], [$Uint, $error], true)}];
��	Conn.init("net/textproto", [{prop: "Reader", name: "Reader", embedded: true, exported: true, typ: Reader, tag: ""}, {prop: "Writer", name: "Writer", embedded: true, exported: true, typ: Writer, tag: ""}, {prop: "Pipeline", name: "Pipeline", embedded: true, exported: true, typ: Pipeline, tag: ""}, {prop: "conn", name: "conn", embedded: false, exported: false, typ: io.ReadWriteCloser, tag: ""}]);
Connio.ReadWriteClosernet/textproto.Connnet/textproto.Pipelinenet/textproto.Readernet/textproto.Writernet/textproto.ptrTypenet/textproto.ptrType$1net/textproto.ptrType$3net/textproto.ptrType$4net/textproto.ptrType$5net/textproto.sequencernet/textproto.sliceTypenet/textproto.sliceType$2
sync.Mutex  Writer�	Writer = $pkg.Writer = $newType(0, $kindStruct, "textproto.Writer", true, "net/textproto", true, function(W_, dot_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.W = ptrType$3.nil;
			this.dot = ptrType$4.nil;
			return;
		}
		this.W = W_;
		this.dot = dot_;
	});
�;	ptrType$6.methods = [{prop: "PrintfLine", name: "PrintfLine", pkg: "", typ: $funcType([$String, sliceType$2], [$error], true)}, {prop: "DotWriter", name: "DotWriter", pkg: "", typ: $funcType([], [io.WriteCloser], false)}, {prop: "closeDot", name: "closeDot", pkg: "net/textproto", typ: $funcType([], [], false)}];
��	Writer.init("net/textproto", [{prop: "W", name: "W", embedded: false, exported: true, typ: ptrType$3, tag: ""}, {prop: "dot", name: "dot", embedded: false, exported: false, typ: ptrType$4, tag: ""}]);
Writerio.WriteClosernet/textproto.Writernet/textproto.ptrType$3net/textproto.ptrType$4net/textproto.ptrType$6net/textproto.sliceType$2  	dotWriter�	dotWriter = $pkg.dotWriter = $newType(0, $kindStruct, "textproto.dotWriter", true, "net/textproto", false, function(w_, state_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = ptrType$6.nil;
			this.state = 0;
			return;
		}
		this.w = w_;
		this.state = state_;
	});
��	ptrType$4.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
��	dotWriter.init("net/textproto", [{prop: "w", name: "w", embedded: false, exported: false, typ: ptrType$6, tag: ""}, {prop: "state", name: "state", embedded: false, exported: false, typ: $Int, tag: ""}]);
	dotWriternet/textproto.dotWriternet/textproto.ptrType$4net/textproto.ptrType$6net/textproto.sliceType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1  
structType#	structType = $structType("", []);

structType  ptrType#	ptrType = $ptrType(bufio.Reader);
ptrTypebufio.Reader  	ptrType$1"	ptrType$1 = $ptrType(dotReader);
	ptrType$1net/textproto.dotReader  sliceType$2,	sliceType$2 = $sliceType($emptyInterface);
sliceType$2  	ptrType$2	ptrType$2 = $ptrType(Reader);
	ptrType$2net/textproto.Reader  	ptrType$3%	ptrType$3 = $ptrType(bufio.Writer);
	ptrType$3bufio.Writer  	ptrType$4"	ptrType$4 = $ptrType(dotWriter);
	ptrType$4net/textproto.dotWriter  	ptrType$5	ptrType$5 = $ptrType(Conn);
	ptrType$5net/textproto.Conn  	ptrType$6	ptrType$6 = $ptrType(Writer);
	ptrType$6net/textproto.Writer  	ptrType$7!	ptrType$7 = $ptrType(Pipeline);
	ptrType$7net/textproto.Pipeline  	ptrType$8"	ptrType$8 = $ptrType(sequencer);
	ptrType$8net/textproto.sequencer  chanType1	chanType = $chanType(structType, false, false);
chanTypenet/textproto.structType  mapType&	mapType = $mapType($Uint, chanType);
mapTypenet/textproto.chanType  funcType5	funcType = $funcType([sliceType], [$error], false);
funcTypenet/textproto.sliceType  	ptrType$9	ptrType$9 = $ptrType(Error);
	ptrType$9net/textproto.Error  commonHeader		commonHeader = false;
commonHeadernet/textproto.commonHeader  commonHeaderOnceE		commonHeaderOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
commonHeaderOncenet/textproto.commonHeaderOnce
sync.Mutex	sync.Once  isTokenTableisTokenTable  crnlcrnl  dotcrnldotcrnl  �_  ]		isTokenTable = $toNativeArray($kindBool, [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, true, false, false, true, true, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true]);
isTokenTablenet/textproto.isTokenTable  '  q�		crnl = new sliceType([13, 10]);
crnlnet/textproto.crnlnet/textproto.sliceType  .  q�		dotcrnl = new sliceType([46, 13, 10]);
dotcrnlnet/textproto.dotcrnlnet/textproto.sliceType (net/textproto.MIMEHeader).Add �_	MIMEHeader.prototype.Add = function(key, value) {
		var _entry, _key, _r, h, key, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _key = $f._key; _r = $f._r; h = $f.h; key = $f.key; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
  �		_r = CanonicalMIMEHeaderKey(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		key = _r;
  �		_key = key; (h || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: $append((_entry = h[$String.keyFor(key)], _entry !== undefined ? _entry.v : sliceType$1.nil), value) };
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MIMEHeader.prototype.Add }; } $f._entry = _entry; $f._key = _key; $f._r = _r; $f.h = h; $f.key = key; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(MIMEHeader).prototype.Add = function(key, value) { return new MIMEHeader(this.$get()).Add(key, value); };

MIMEHeader$net/textproto.CanonicalMIMEHeaderKeynet/textproto.MIMEHeadernet/textproto.sliceType$1 (net/textproto.MIMEHeader).Set ��	MIMEHeader.prototype.Set = function(key, value) {
		var _key, _r, h, key, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _key = $f._key; _r = $f._r; h = $f.h; key = $f.key; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
  �		_r = CanonicalMIMEHeaderKey(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_key = _r; (h || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: new sliceType$1([value]) };
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MIMEHeader.prototype.Set }; } $f._key = _key; $f._r = _r; $f.h = h; $f.key = key; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(MIMEHeader).prototype.Set = function(key, value) { return new MIMEHeader(this.$get()).Set(key, value); };

MIMEHeader$net/textproto.CanonicalMIMEHeaderKeynet/textproto.MIMEHeadernet/textproto.sliceType$1 (net/textproto.MIMEHeader).Get �l	MIMEHeader.prototype.Get = function(key) {
		var _entry, _r, h, key, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _r = $f._r; h = $f.h; key = $f.key; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
    		if (h === false) {
  F			$s = -1; return "";
    		}
  T		_r = CanonicalMIMEHeaderKey(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		v = (_entry = h[$String.keyFor(_r)], _entry !== undefined ? _entry.v : sliceType$1.nil);
    		if (v.$length === 0) {
  �			$s = -1; return "";
    		}
  �		$s = -1; return (0 >= v.$length ? ($throwRuntimeError("index out of range"), undefined) : v.$array[v.$offset + 0]);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MIMEHeader.prototype.Get }; } $f._entry = _entry; $f._r = _r; $f.h = h; $f.key = key; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(MIMEHeader).prototype.Get = function(key) { return new MIMEHeader(this.$get()).Get(key); };

MIMEHeader$net/textproto.CanonicalMIMEHeaderKeynet/textproto.MIMEHeadernet/textproto.sliceType$1 !(net/textproto.MIMEHeader).Values ��	MIMEHeader.prototype.Values = function(key) {
		var $24r, _entry, _r, h, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _entry = $f._entry; _r = $f._r; h = $f.h; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
    		if (h === false) {
  �			$s = -1; return sliceType$1.nil;
    		}
  �		_r = CanonicalMIMEHeaderKey(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = (_entry = h[$String.keyFor(_r)], _entry !== undefined ? _entry.v : sliceType$1.nil);
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MIMEHeader.prototype.Values }; } $f.$24r = $24r; $f._entry = _entry; $f._r = _r; $f.h = h; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(MIMEHeader).prototype.Values = function(key) { return new MIMEHeader(this.$get()).Values(key); };

MIMEHeader$net/textproto.CanonicalMIMEHeaderKeynet/textproto.MIMEHeadernet/textproto.sliceType$1 (net/textproto.MIMEHeader).Del � 	MIMEHeader.prototype.Del = function(key) {
		var _r, h, key, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; h = $f.h; key = $f.key; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		h = this.$val;
  q		_r = CanonicalMIMEHeaderKey(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		delete h[$String.keyFor(_r)];
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MIMEHeader.prototype.Del }; } $f._r = _r; $f.h = h; $f.key = key; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(MIMEHeader).prototype.Del = function(key) { return new MIMEHeader(this.$get()).Del(key); };

MIMEHeader$net/textproto.CanonicalMIMEHeaderKeynet/textproto.MIMEHeader (*net/textproto.Pipeline).Next �K	Pipeline.ptr.prototype.Next = function() {
		var id, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; id = $f.id; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  
�		$r = p.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
�		id = p.id;
  
�		p.id = p.id + (1) >>> 0;
  
�		$r = p.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
�		$s = -1; return id;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Pipeline.ptr.prototype.Next }; } $f.id = id; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pipeline.prototype.Next = function() { return this.$val.Next(); };
Pipelinenet/textproto.Pipeline &(*net/textproto.Pipeline).StartRequest ��	Pipeline.ptr.prototype.StartRequest = function(id) {
		var id, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; id = $f.id; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  j		$r = p.request.Start(id); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Pipeline.ptr.prototype.StartRequest }; } $f.id = id; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pipeline.prototype.StartRequest = function(id) { return this.$val.StartRequest(id); };
Pipelinenet/textproto.Pipeline $(*net/textproto.Pipeline).EndRequest ��	Pipeline.ptr.prototype.EndRequest = function(id) {
		var id, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; id = $f.id; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  		$r = p.request.End(id); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Pipeline.ptr.prototype.EndRequest }; } $f.id = id; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pipeline.prototype.EndRequest = function(id) { return this.$val.EndRequest(id); };
Pipelinenet/textproto.Pipeline '(*net/textproto.Pipeline).StartResponse ��	Pipeline.ptr.prototype.StartResponse = function(id) {
		var id, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; id = $f.id; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		$r = p.response.Start(id); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Pipeline.ptr.prototype.StartResponse }; } $f.id = id; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pipeline.prototype.StartResponse = function(id) { return this.$val.StartResponse(id); };
Pipelinenet/textproto.Pipeline %(*net/textproto.Pipeline).EndResponse ��	Pipeline.ptr.prototype.EndResponse = function(id) {
		var id, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; id = $f.id; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		$r = p.response.End(id); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Pipeline.ptr.prototype.EndResponse }; } $f.id = id; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pipeline.prototype.EndResponse = function(id) { return this.$val.EndResponse(id); };
Pipelinenet/textproto.Pipeline  (*net/textproto.sequencer).Start �	sequencer.ptr.prototype.Start = function(id) {
		var _key, _r, c, id, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _key = $f._key; _r = $f._r; c = $f.c; id = $f.id; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �		$r = s.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		/* */ if (s.id === id) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (s.id === id) { */ case 2:
  �			$r = s.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			$s = -1; return;
    		/* } */ case 3:
  		c = new $Chan(structType, 0);
    		if (s.wait === false) {
  2			s.wait = {};
    		}
  \		_key = id; (s.wait || $throwRuntimeError("assignment to entry in nil map"))[$Uint.keyFor(_key)] = { k: _key, v: c };
  l		$r = s.mu.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  {		_r = $recv(c); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r[0];
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: sequencer.ptr.prototype.Start }; } $f._key = _key; $f._r = _r; $f.c = c; $f.id = id; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	sequencer.prototype.Start = function(id) { return this.$val.Start(id); };
	sequencernet/textproto.sequencernet/textproto.structType (*net/textproto.sequencer).End �c	sequencer.ptr.prototype.End = function(id) {
		var _entry, _tuple, c, id, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _tuple = $f._tuple; c = $f.c; id = $f.id; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �		$r = s.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		/* */ if (!((s.id === id))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((s.id === id))) { */ case 2:
  �			$r = s.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			$panic(new $String("out of sync"));
    		/* } */ case 3:
  �		id = id + (1) >>> 0;
  �		s.id = id;
    		if (s.wait === false) {
  �			s.wait = {};
    		}
  		_tuple = (_entry = s.wait[$Uint.keyFor(id)], _entry !== undefined ? [_entry.v, true] : [$chanNil, false]);
		c = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  7			delete s.wait[$Uint.keyFor(id)];
    		}
  N		$r = s.mu.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (ok) {
  g			$close(c);
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: sequencer.ptr.prototype.End }; } $f._entry = _entry; $f._tuple = _tuple; $f.c = c; $f.id = id; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	sequencer.prototype.End = function(id) { return this.$val.End(id); };
	sequencernet/textproto.sequencer net/textproto.NewReadernet/textproto	NewReader 	NewReader�h	NewReader = function(r) {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  e		$r = commonHeaderOnce.Do(initCommonHeader); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return new Reader.ptr(r, ptrType$1.nil, sliceType.nil);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewReader }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewReader = NewReader;
	NewReader	bufio.Readernet/textproto.NewReadernet/textproto.Readernet/textproto.commonHeaderOncenet/textproto.dotReadernet/textproto.initCommonHeadernet/textproto.ptrTypenet/textproto.ptrType$1net/textproto.sliceType  (*net/textproto.Reader).ReadLine �k	Reader.ptr.prototype.ReadLine = function() {
		var _r, _tuple, err, line, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; line = $f.line; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  5		_r = r.readLineSlice(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
  U		$s = -1; return [($bytesToString(line)), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadLine }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.line = line; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadLine = function() { return this.$val.ReadLine(); };
Readernet/textproto.Readernet/textproto.readLineSlice~ %(*net/textproto.Reader).ReadLineBytes �%	Reader.ptr.prototype.ReadLineBytes = function() {
		var _r, _tuple, buf, err, line, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; err = $f.err; line = $f.line; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		_r = r.readLineSlice(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
    		if (!(line === sliceType.nil)) {
  $			buf = $makeSlice(sliceType, line.$length);
  E			$copySlice(buf, line);
  W			line = buf;
    		}
  f		$s = -1; return [line, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadLineBytes }; } $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.err = err; $f.line = line; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadLineBytes = function() { return this.$val.ReadLineBytes(); };
Readernet/textproto.Readernet/textproto.readLineSlice~net/textproto.sliceType %(*net/textproto.Reader).readLineSlice ��	Reader.ptr.prototype.readLineSlice = function() {
		var _r, _tuple, err, l, line, more, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; l = $f.l; line = $f.line; more = $f.more; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		$r = r.closeDot(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		line = sliceType.nil;
  �		/* while (true) { */ case 2:
  �			_r = r.R.ReadLine(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			l = _tuple[0];
			more = _tuple[1];
			err = _tuple[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  					$s = -1; return [sliceType.nil, err];
    			}
    			if (line === sliceType.nil && !more) {
  x				$s = -1; return [l, $ifaceNil];
    			}
  �			line = $appendSlice(line, l);
    			if (!more) {
  �				/* break; */ $s = 3; continue;
    			}
    		$s = 2; continue;
		case 3:
  �		$s = -1; return [line, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readLineSlice }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.l = l; $f.line = line; $f.more = more; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readLineSlice = function() { return this.$val.readLineSlice(); };
ReaderreadLineSlice~net/textproto.Readernet/textproto.closeDot~net/textproto.sliceType )(*net/textproto.Reader).ReadContinuedLine ��	Reader.ptr.prototype.ReadContinuedLine = function() {
		var _r, _tuple, err, line, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; line = $f.line; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  s		_r = r.readContinuedLineSlice(noValidation); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
  �		$s = -1; return [($bytesToString(line)), err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadContinuedLine }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.line = line; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadContinuedLine = function() { return this.$val.ReadContinuedLine(); };
Readernet/textproto.Readernet/textproto.noValidation%net/textproto.readContinuedLineSlice~ net/textproto.trimnet/textprototrim trim�D	trim = function(s) {
		var i, n, s, x, x$1;
  O		i = 0;
  W		while (true) {
			if (!(i < s.$length && ((((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) === 32) || (((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i]) === 9)))) { break; }
  �			i = i + (1) >> 0;
    		}
  �		n = s.$length;
  �		while (true) {
			if (!(n > i && (((x = n - 1 >> 0, ((x < 0 || x >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x])) === 32) || ((x$1 = n - 1 >> 0, ((x$1 < 0 || x$1 >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + x$1])) === 9)))) { break; }
  �			n = n - (1) >> 0;
    		}
  �		return $subslice(s, i, n);
    	};
trimnet/textproto.trim .(*net/textproto.Reader).ReadContinuedLineBytes �^	Reader.ptr.prototype.ReadContinuedLineBytes = function() {
		var _r, _tuple, buf, err, line, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; err = $f.err; line = $f.line; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		_r = r.readContinuedLineSlice(noValidation); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
    		if (!(line === sliceType.nil)) {
  �			buf = $makeSlice(sliceType, line.$length);
  �			$copySlice(buf, line);
  			line = buf;
    		}
  		$s = -1; return [line, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadContinuedLineBytes }; } $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.err = err; $f.line = line; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadContinuedLineBytes = function() { return this.$val.ReadContinuedLineBytes(); };
Readernet/textproto.Readernet/textproto.noValidation%net/textproto.readContinuedLineSlice~net/textproto.sliceType .(*net/textproto.Reader).readContinuedLineSlice ��	Reader.ptr.prototype.readContinuedLineSlice = function(validateFirstLine) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, _tuple$2, err, err$1, err$2, line, line$1, peek, r, validateFirstLine, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; line = $f.line; line$1 = $f.line$1; peek = $f.peek; r = $f.r; validateFirstLine = $f.validateFirstLine; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		/* */ if (validateFirstLine === $throwNilPointerError) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (validateFirstLine === $throwNilPointerError) { */ case 1:
  �			_r = fmt.Errorf("missing validateFirstLine func", new sliceType$2([])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = [sliceType.nil, _r];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
   
		_r$1 = r.readLineSlice(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		line = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
   <			$s = -1; return [sliceType.nil, err];
    		}
    		if (line.$length === 0) {
   �			$s = -1; return [line, $ifaceNil];
    		}
   �		_r$2 = validateFirstLine(line); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		err$1 = _r$2;
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
   �			$s = -1; return [sliceType.nil, err$1];
    		}
  !�		/* */ if (r.R.Buffered() > 1) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (r.R.Buffered() > 1) { */ case 7:
  "			_r$3 = r.R.Peek(2); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$1 = _r$3;
			peek = _tuple$1[0];
    			if (peek.$length > 0 && (isASCIILetter((0 >= peek.$length ? ($throwRuntimeError("index out of range"), undefined) : peek.$array[peek.$offset + 0])) || ((0 >= peek.$length ? ($throwRuntimeError("index out of range"), undefined) : peek.$array[peek.$offset + 0]) === 10)) || (peek.$length === 2) && ((0 >= peek.$length ? ($throwRuntimeError("index out of range"), undefined) : peek.$array[peek.$offset + 0]) === 13) && ((1 >= peek.$length ? ($throwRuntimeError("index out of range"), undefined) : peek.$array[peek.$offset + 1]) === 10)) {
  "�				$s = -1; return [trim(line), $ifaceNil];
    			}
    		/* } */ case 8:
  #		r.buf = $appendSlice($subslice(r.buf, 0, 0), trim(line));
  #c		/* while (true) { */ case 10:
			_r$4 = r.skipSpace(); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			/* if (!(_r$4 > 0)) { break; } */ if(!(_r$4 > 0)) { $s = 11; continue; }
  #}			_r$5 = r.readLineSlice(); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_tuple$2 = _r$5;
			line$1 = _tuple$2[0];
			err$2 = _tuple$2[1];
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  #�				/* break; */ $s = 11; continue;
    			}
  #�			r.buf = $append(r.buf, 32);
  #�			r.buf = $appendSlice(r.buf, trim(line$1));
    		$s = 10; continue;
		case 11:
  $		$s = -1; return [r.buf, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readContinuedLineSlice }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.line = line; $f.line$1 = line$1; $f.peek = peek; $f.r = r; $f.validateFirstLine = validateFirstLine; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readContinuedLineSlice = function(validateFirstLine) { return this.$val.readContinuedLineSlice(validateFirstLine); };
ReaderreadContinuedLineSlice~
fmt.Errorfnet/textproto.Readernet/textproto.isASCIILetternet/textproto.readLineSlice~net/textproto.skipSpace~net/textproto.sliceTypenet/textproto.sliceType$2net/textproto.trim !(*net/textproto.Reader).skipSpace ��	Reader.ptr.prototype.skipSpace = function() {
		var _r, _tuple, c, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; c = $f.c; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  $�		n = 0;
  $�		/* while (true) { */ case 1:
  $�			_r = r.R.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			c = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  $�				/* break; */ $s = 2; continue;
    			}
    			if (!((c === 32)) && !((c === 9))) {
  %				r.R.UnreadByte();
  %1				/* break; */ $s = 2; continue;
    			}
  %=			n = n + (1) >> 0;
    		$s = 1; continue;
		case 2:
  %E		$s = -1; return n;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.skipSpace }; } $f._r = _r; $f._tuple = _tuple; $f.c = c; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.skipSpace = function() { return this.$val.skipSpace(); };
Reader
skipSpace~net/textproto.Reader $(*net/textproto.Reader).readCodeLine ��	Reader.ptr.prototype.readCodeLine = function(expectCode) {
		var _r, _tuple, _tuple$1, code, continued, err, expectCode, line, message, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; code = $f.code; continued = $f.continued; err = $f.err; expectCode = $f.expectCode; line = $f.line; message = $f.message; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		code = 0;
		continued = false;
		message = "";
		err = $ifaceNil;
		r = this;
  %�		_r = r.ReadLine(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  %�			$s = -1; return [code, continued, message, err];
    		}
    		_tuple$1 = parseCodeLine(line, expectCode);
		code = _tuple$1[0];
		continued = _tuple$1[1];
		message = _tuple$1[2];
		err = _tuple$1[3];
		$s = -1; return [code, continued, message, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readCodeLine }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.code = code; $f.continued = continued; $f.err = err; $f.expectCode = expectCode; $f.line = line; $f.message = message; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readCodeLine = function(expectCode) { return this.$val.readCodeLine(expectCode); };
ReaderreadCodeLine~net/textproto.Readernet/textproto.parseCodeLine net/textproto.parseCodeLinenet/textprotoparseCodeLine parseCodeLine�3	parseCodeLine = function(line, expectCode) {
		var _q, _q$1, _tuple, code, continued, err, expectCode, line, message;
		code = 0;
		continued = false;
		message = "";
		err = $ifaceNil;
    		if (line.length < 4 || !((line.charCodeAt(3) === 32)) && !((line.charCodeAt(3) === 45))) {
  &�			err = new ProtocolError(("short response: " + line));
  &�			return [code, continued, message, err];
    		}
  &�		continued = line.charCodeAt(3) === 45;
  '		_tuple = strconv.Atoi($substring(line, 0, 3));
		code = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil)) || code < 100) {
  'Y			err = new ProtocolError(("invalid response code: " + line));
  '�			return [code, continued, message, err];
    		}
  '�		message = $substring(line, 4);
    		if (1 <= expectCode && expectCode < 10 && !(((_q = code / 100, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) === expectCode)) || 10 <= expectCode && expectCode < 100 && !(((_q$1 = code / 10, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) === expectCode)) || 100 <= expectCode && expectCode < 1000 && !((code === expectCode))) {
  (y			err = new Error.ptr(code, message);
    		}
  (�		return [code, continued, message, err];
    	};
parseCodeLinenet/textproto.Errornet/textproto.ProtocolErrornet/textproto.parseCodeLinestrconv.Atoi $(*net/textproto.Reader).ReadCodeLine �G	Reader.ptr.prototype.ReadCodeLine = function(expectCode) {
		var _r, _tuple, code, continued, err, expectCode, message, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; code = $f.code; continued = $f.continued; err = $f.err; expectCode = $f.expectCode; message = $f.message; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		code = 0;
		message = "";
		err = $ifaceNil;
		r = this;
  +_		_r = r.readCodeLine(expectCode); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		code = _tuple[0];
		continued = _tuple[1];
		message = _tuple[2];
		err = _tuple[3];
    		if ($interfaceIsEqual(err, $ifaceNil) && continued) {
  +�			err = new ProtocolError(("unexpected multi-line response: " + message));
    		}
  ,		$s = -1; return [code, message, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadCodeLine }; } $f._r = _r; $f._tuple = _tuple; $f.code = code; $f.continued = continued; $f.err = err; $f.expectCode = expectCode; $f.message = message; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadCodeLine = function(expectCode) { return this.$val.ReadCodeLine(expectCode); };
Readernet/textproto.ProtocolErrornet/textproto.Readernet/textproto.readCodeLine~ $(*net/textproto.Reader).ReadResponse ��	Reader.ptr.prototype.ReadResponse = function(expectCode) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tuple, _tuple$1, _tuple$2, code, code2, continued, err, err$1, expectCode, line, message, moreMessage, multi, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; code = $f.code; code2 = $f.code2; continued = $f.continued; err = $f.err; err$1 = $f.err$1; expectCode = $f.expectCode; line = $f.line; message = $f.message; moreMessage = $f.moreMessage; multi = $f.multi; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		code = 0;
		message = "";
		err = $ifaceNil;
		r = this;
  /�		_r = r.readCodeLine(expectCode); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		code = _tuple[0];
		continued = _tuple[1];
		message = _tuple[2];
		err = _tuple[3];
  0!		multi = continued;
  05		/* while (true) { */ case 2:
			/* if (!(continued)) { break; } */ if(!(continued)) { $s = 3; continue; }
  0G			_r$1 = r.ReadLine(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			line = _tuple$1[0];
			err$1 = _tuple$1[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp = 0;
				_tmp$1 = "";
				_tmp$2 = err$1;
				code = _tmp;
				message = _tmp$1;
				err = _tmp$2;
				$s = -1; return [code, message, err];
    			}
  0�			code2 = 0;
  0�			moreMessage = "";
  0�			_tuple$2 = parseCodeLine(line, 0);
			code2 = _tuple$2[0];
			continued = _tuple$2[1];
			moreMessage = _tuple$2[2];
			err$1 = _tuple$2[3];
  0�			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil)) || !((code2 === code))) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil)) || !((code2 === code))) { */ case 5:
  1				_r$2 = strings.TrimRight(line, "\r\n"); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				message = message + ("\n" + _r$2);
  1O				continued = true;
  1c				/* continue; */ $s = 2; continue;
    			/* } */ case 6:
  1r			message = message + ("\n" + moreMessage);
    		$s = 2; continue;
		case 3:
    		if (!($interfaceIsEqual(err, $ifaceNil)) && multi && !(message === "")) {
  2			err = new Error.ptr(code, message);
    		}
  2"		$s = -1; return [code, message, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadResponse }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.code = code; $f.code2 = code2; $f.continued = continued; $f.err = err; $f.err$1 = err$1; $f.expectCode = expectCode; $f.line = line; $f.message = message; $f.moreMessage = moreMessage; $f.multi = multi; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadResponse = function(expectCode) { return this.$val.ReadResponse(expectCode); };
Readernet/textproto.Errornet/textproto.Readernet/textproto.parseCodeLinenet/textproto.readCodeLine~strings.TrimRight !(*net/textproto.Reader).DotReader ��	Reader.ptr.prototype.DotReader = function() {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  5{		$r = r.closeDot(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  5�		r.dot = new dotReader.ptr(r, 0);
  5�		$s = -1; return r.dot;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.DotReader }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.DotReader = function() { return this.$val.DotReader(); };
Readernet/textproto.Readernet/textproto.closeDot~net/textproto.dotReadernet/textproto.ptrType$2 (*net/textproto.dotReader).Read ��	dotReader.ptr.prototype.Read = function(b) {
		var _1, _r, _tuple, b, br, c, d, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tuple = $f._tuple; b = $f.b; br = $f.br; c = $f.c; d = $f.d; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
  8c		br = d.r.R;
  8p		/* while (true) { */ case 1:
			/* if (!(n < b.$length && !((d.state === 5)))) { break; } */ if(!(n < b.$length && !((d.state === 5)))) { $s = 2; continue; }
  8�			c = 0;
  8�			_r = br.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			c = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  8�					err = io.ErrUnexpectedEOF;
    				}
  9				/* break; */ $s = 2; continue;
    			}
  9			switch (0) { default:
    				_1 = d.state;
    				if (_1 === (0)) {
    					if (c === 46) {
  9U						d.state = 1;
  9l						/* continue; */ $s = 1; continue;
    					}
    					if (c === 13) {
  9�						d.state = 3;
  9�						/* continue; */ $s = 1; continue;
    					}
  9�					d.state = 4;
    				} else if (_1 === (1)) {
    					if (c === 13) {
  9�						d.state = 2;
  :						/* continue; */ $s = 1; continue;
    					}
    					if (c === 10) {
  :0						d.state = 5;
  :G						/* continue; */ $s = 1; continue;
    					}
  :X					d.state = 4;
    				} else if (_1 === (2)) {
    					if (c === 10) {
  :�						d.state = 5;
  :�						/* continue; */ $s = 1; continue;
    					}
  ;					br.UnreadByte();
  ;					c = 13;
  ;#					d.state = 4;
    				} else if (_1 === (3)) {
    					if (c === 10) {
  ;^						d.state = 0;
  ;{						break;
    					}
  ;�					br.UnreadByte();
  ;�					c = 13;
  ;�					d.state = 4;
    				} else if (_1 === (4)) {
    					if (c === 13) {
  <						d.state = 3;
  <!						/* continue; */ $s = 1; continue;
    					}
    					if (c === 10) {
  <E						d.state = 0;
    					}
    				}
    			}
  <i			((n < 0 || n >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + n] = c);
  <t			n = n + (1) >> 0;
    		$s = 1; continue;
		case 2:
    		if ($interfaceIsEqual(err, $ifaceNil) && (d.state === 5)) {
  <�			err = io.EOF;
    		}
    		if (!($interfaceIsEqual(err, $ifaceNil)) && d.r.dot === d) {
  <�			d.r.dot = ptrType$1.nil;
    		}
  <�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dotReader.ptr.prototype.Read }; } $f._1 = _1; $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.br = br; $f.c = c; $f.d = d; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	dotReader.prototype.Read = function(b) { return this.$val.Read(b); };
	dotReaderio.EOFio.ErrUnexpectedEOFnet/textproto.dotReadernet/textproto.ptrType$1  (*net/textproto.Reader).closeDot ��	Reader.ptr.prototype.closeDot = function() {
		var _r, buf, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; buf = $f.buf; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
    		if (r.dot === ptrType$1.nil) {
  =�			$s = -1; return;
    		}
  =�		buf = $makeSlice(sliceType, 128);
  =�		/* while (true) { */ case 1:
			/* if (!(!(r.dot === ptrType$1.nil))) { break; } */ if(!(!(r.dot === ptrType$1.nil))) { $s = 2; continue; }
  >			_r = r.dot.Read(buf); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.closeDot }; } $f._r = _r; $f.buf = buf; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.closeDot = function() { return this.$val.closeDot(); };
Reader	closeDot~net/textproto.Readernet/textproto.ptrType$1net/textproto.sliceType $(*net/textproto.Reader).ReadDotBytes ��	Reader.ptr.prototype.ReadDotBytes = function() {
		var $24r, _r, _r$1, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  >�		_r = r.DotReader(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = io.ReadAll(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadDotBytes }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadDotBytes = function() { return this.$val.ReadDotBytes(); };
Reader
io.ReadAllnet/textproto.Reader $(*net/textproto.Reader).ReadDotLines ��	Reader.ptr.prototype.ReadDotLines = function() {
		var _r, _tuple, err, line, r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; line = $f.line; r = $f.r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  @�		v = sliceType$1.nil;
  @�		err = $ifaceNil;
  @�		/* while (true) { */ case 1:
  @�			line = "";
  @�			_r = r.ReadLine(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			line = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  A<					err = io.ErrUnexpectedEOF;
    				}
  A^				/* break; */ $s = 2; continue;
    			}
    			if (line.length > 0 && (line.charCodeAt(0) === 46)) {
    				if (line.length === 1) {
  A�					/* break; */ $s = 2; continue;
    				}
  A�				line = $substring(line, 1);
    			}
  B			v = $append(v, line);
    		$s = 1; continue;
		case 2:
  B		$s = -1; return [v, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadDotLines }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.line = line; $f.r = r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadDotLines = function() { return this.$val.ReadDotLines(); };
Readerio.EOFio.ErrUnexpectedEOFnet/textproto.Readernet/textproto.sliceType$1 &(*net/textproto.Reader).ReadMIMEHeader ��	Reader.ptr.prototype.ReadMIMEHeader = function() {
		var _entry, _key, _key$1, _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, buf, err, err$1, err$2, hint, i, key, kv, line, m, r, strs, value, vv, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _key = $f._key; _key$1 = $f._key$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; buf = $f.buf; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; hint = $f.hint; i = $f.i; key = $f.key; kv = $f.kv; line = $f.line; m = $f.m; r = $f.r; strs = $f.strs; value = $f.value; vv = $f.vv; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  E^		strs = sliceType$1.nil;
  Em		_r = r.upcomingHeaderNewlines(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		hint = _r;
    		if (hint > 0) {
  E�			strs = $makeSlice(sliceType$1, hint);
    		}
  E�		m = ((hint < 0 || hint > 2147483647) ? $throwRuntimeError("makemap: size out of range") : {});
  F		_r$1 = r.R.Peek(1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		buf = _tuple[0];
		err = _tuple[1];
  F		/* */ if ($interfaceIsEqual(err, $ifaceNil) && (((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) === 32) || ((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) === 9))) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($interfaceIsEqual(err, $ifaceNil) && (((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) === 32) || ((0 >= buf.$length ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + 0]) === 9))) { */ case 3:
  Ff			_r$2 = r.readLineSlice(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			line = _tuple$1[0];
			err$1 = _tuple$1[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  F�				$s = -1; return [m, err$1];
    			}
  F�			$s = -1; return [m, new ProtocolError(("malformed MIME header initial line: " + ($bytesToString(line))))];
    		/* } */ case 4:
  G		/* while (true) { */ case 6:
  G
			_r$3 = r.readContinuedLineSlice(mustHaveFieldNameColon); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$2 = _r$3;
			kv = _tuple$2[0];
			err$2 = _tuple$2[1];
    			if (kv.$length === 0) {
  G]				$s = -1; return [m, err$2];
    			}
  G�			i = bytes.IndexByte(kv, 58);
    			if (i < 0) {
  G�				$s = -1; return [m, new ProtocolError(("malformed MIME header line: " + ($bytesToString(kv))))];
    			}
  H				key = canonicalMIMEHeaderKey($subslice(kv, 0, i));
    			if (key === "") {
  I				/* continue; */ $s = 6; continue;
    			}
  IH			i = i + (1) >> 0;
  I\			while (true) {
				if (!(i < kv.$length && ((((i < 0 || i >= kv.$length) ? ($throwRuntimeError("index out of range"), undefined) : kv.$array[kv.$offset + i]) === 32) || (((i < 0 || i >= kv.$length) ? ($throwRuntimeError("index out of range"), undefined) : kv.$array[kv.$offset + i]) === 9)))) { break; }
  I�				i = i + (1) >> 0;
    			}
  I�			value = ($bytesToString($subslice(kv, i)));
  I�			vv = (_entry = m[$String.keyFor(key)], _entry !== undefined ? _entry.v : sliceType$1.nil);
    			if (vv === sliceType$1.nil && strs.$length > 0) {
  J�				_tmp = $subslice(strs, 0, 1, 1);
				_tmp$1 = $subslice(strs, 1);
				vv = _tmp;
				strs = _tmp$1;
  J�				(0 >= vv.$length ? ($throwRuntimeError("index out of range"), undefined) : vv.$array[vv.$offset + 0] = value);
  J�				_key = key; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: vv };
    			} else {
  K				_key$1 = key; (m || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$1)] = { k: _key$1, v: $append(vv, value) };
    			}
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  KB				$s = -1; return [m, err$2];
    			}
    		$s = 6; continue;
		case 7:
    		$s = -1; return [false, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadMIMEHeader }; } $f._entry = _entry; $f._key = _key; $f._key$1 = _key$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.buf = buf; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.hint = hint; $f.i = i; $f.key = key; $f.kv = kv; $f.line = line; $f.m = m; $f.r = r; $f.strs = strs; $f.value = value; $f.vv = vv; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadMIMEHeader = function() { return this.$val.ReadMIMEHeader(); };
Reader	bytes.IndexBytenet/textproto.ProtocolErrornet/textproto.Reader$net/textproto.canonicalMIMEHeaderKey$net/textproto.mustHaveFieldNameColon%net/textproto.readContinuedLineSlice~net/textproto.readLineSlice~net/textproto.sliceType$1%net/textproto.upcomingHeaderNewlines~ net/textproto.noValidationnet/textprotonoValidation noValidationQ	noValidation = function(param) {
		var param;
  K�		return $ifaceNil;
    	};
noValidationnet/textproto.noValidation $net/textproto.mustHaveFieldNameColonnet/textprotomustHaveFieldNameColon mustHaveFieldNameColon��	mustHaveFieldNameColon = function(line) {
		var $24r, _r, line, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; line = $f.line; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  L�		/* */ if (bytes.IndexByte(line, 58) < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (bytes.IndexByte(line, 58) < 0) { */ case 1:
  L�			_r = fmt.Sprintf("malformed MIME header: missing colon: %q", new sliceType$2([line])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = new ProtocolError((_r));
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  M%		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: mustHaveFieldNameColon }; } $f.$24r = $24r; $f._r = _r; $f.line = line; $f.$s = $s; $f.$r = $r; return $f;
	};
mustHaveFieldNameColonbytes.IndexBytefmt.Sprintfnet/textproto.ProtocolError$net/textproto.mustHaveFieldNameColonnet/textproto.sliceType$2 .(*net/textproto.Reader).upcomingHeaderNewlines ��	Reader.ptr.prototype.upcomingHeaderNewlines = function() {
		var _r, _r$1, _tuple, i, n, peek, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; i = $f.i; n = $f.n; peek = $f.peek; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		r = this;
  N		_r = r.R.Peek(1); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  NK		s = r.R.Buffered();
    		if (s === 0) {
  Nn			$s = -1; return n;
    		}
  Ny		_r$1 = r.R.Peek(s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		peek = _tuple[0];
  N�		while (true) {
			if (!(peek.$length > 0)) { break; }
  N�			i = bytes.IndexByte(peek, 10);
    			if (i < 3) {
  OJ				$s = -1; return n;
    			}
  OW			n = n + (1) >> 0;
  O]			peek = $subslice(peek, (i + 1 >> 0));
    		}
  Os		$s = -1; return n;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.upcomingHeaderNewlines }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.i = i; $f.n = n; $f.peek = peek; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.upcomingHeaderNewlines = function() { return this.$val.upcomingHeaderNewlines(); };
ReaderupcomingHeaderNewlines~bytes.IndexBytenet/textproto.Reader $net/textproto.CanonicalMIMEHeaderKeynet/textprotoCanonicalMIMEHeaderKey CanonicalMIMEHeaderKey��	CanonicalMIMEHeaderKey = function(s) {
		var c, i, s, upper, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; i = $f.i; s = $f.s; upper = $f.upper; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Qm		$r = commonHeaderOnce.Do(initCommonHeader); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Q�		upper = true;
  Q�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  Q�			c = s.charCodeAt(i);
    			if (!validHeaderFieldByte(c)) {
  R				$s = -1; return s;
    			}
    			if (upper && 97 <= c && c <= 122) {
  RN				$s = -1; return canonicalMIMEHeaderKey((new sliceType($stringToBytes(s))));
    			}
    			if (!upper && 65 <= c && c <= 90) {
  R�				$s = -1; return canonicalMIMEHeaderKey((new sliceType($stringToBytes(s))));
    			}
  R�			upper = c === 45;
  Q�			i = i + (1) >> 0;
    		}
  R�		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: CanonicalMIMEHeaderKey }; } $f.c = c; $f.i = i; $f.s = s; $f.upper = upper; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.CanonicalMIMEHeaderKey = CanonicalMIMEHeaderKey;
CanonicalMIMEHeaderKey$net/textproto.CanonicalMIMEHeaderKey$net/textproto.canonicalMIMEHeaderKeynet/textproto.commonHeaderOncenet/textproto.initCommonHeadernet/textproto.sliceType"net/textproto.validHeaderFieldByte "net/textproto.validHeaderFieldBytenet/textprotovalidHeaderFieldByte validHeaderFieldByte��	validHeaderFieldByte = function(b) {
		var b;
  T�		return ((b >> 0)) < 127 && ((b < 0 || b >= isTokenTable.length) ? ($throwRuntimeError("index out of range"), undefined) : isTokenTable[b]);
    	};
validHeaderFieldBytenet/textproto.isTokenTable"net/textproto.validHeaderFieldByte $net/textproto.canonicalMIMEHeaderKeynet/textprotocanonicalMIMEHeaderKey canonicalMIMEHeaderKey�	canonicalMIMEHeaderKey = function(a) {
		var _entry, _i, _i$1, _ref, _ref$1, a, c, c$1, i, upper, v;
  V6		_ref = a;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (validHeaderFieldByte(c)) {
  Vn				_i++;
				continue;
    			}
  V�			return ($bytesToString(a));
    		}
  V�		upper = true;
  V�		_ref$1 = a;
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			i = _i$1;
			c$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    			if (upper && 97 <= c$1 && c$1 <= 122) {
  W�				c$1 = c$1 - (32) << 24 >>> 24;
    			} else if (!upper && 65 <= c$1 && c$1 <= 90) {
  W�				c$1 = c$1 + (32) << 24 >>> 24;
    			}
  W�			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = c$1);
  X			upper = c$1 === 45;
    			_i$1++;
		}
  X�		v = (_entry = commonHeader[$String.keyFor(($bytesToString(a)))], _entry !== undefined ? _entry.v : "");
    		if (!(v === "")) {
  X�			return v;
    		}
  Y		return ($bytesToString(a));
    	};
canonicalMIMEHeaderKey$net/textproto.canonicalMIMEHeaderKeynet/textproto.commonHeader"net/textproto.validHeaderFieldByte net/textproto.initCommonHeadernet/textprotoinitCommonHeader initCommonHeader��	initCommonHeader = function() {
		var _i, _key, _ref, v;
  Y�		commonHeader = {};
  Y�		_ref = new sliceType$1(["Accept", "Accept-Charset", "Accept-Encoding", "Accept-Language", "Accept-Ranges", "Cache-Control", "Cc", "Connection", "Content-Id", "Content-Language", "Content-Length", "Content-Transfer-Encoding", "Content-Type", "Cookie", "Date", "Dkim-Signature", "Etag", "Expires", "From", "Host", "If-Modified-Since", "If-None-Match", "In-Reply-To", "Last-Modified", "Location", "Message-Id", "Mime-Version", "Pragma", "Received", "Return-Path", "Server", "Set-Cookie", "Subject", "To", "User-Agent", "Via", "X-Forwarded-For", "X-Imforwards", "X-Powered-By"]);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  \b			_key = v; (commonHeader || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: v };
    			_i++;
		}
    	};
initCommonHeadernet/textproto.commonHeadernet/textproto.initCommonHeadernet/textproto.sliceType$1 (*net/textproto.Error).Error �		Error.ptr.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  e		_r = fmt.Sprintf("%03d %s", new sliceType$2([new $Int(e.Code), new $String(e.Msg)])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Error.ptr.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Errorfmt.Sprintfnet/textproto.Errornet/textproto.sliceType$2 #(net/textproto.ProtocolError).Error ��	ProtocolError.prototype.Error = function() {
		var p;
		p = this.$val;
  e�		return (p);
    	};
	$ptrType(ProtocolError).prototype.Error = function() { return new ProtocolError(this.$get()).Error(); };
ProtocolErrornet/textproto.ProtocolError net/textproto.NewConnnet/textprotoNewConn NewConn��	NewConn = function(conn) {
		var conn;
  g�		return new Conn.ptr(new Reader.ptr(bufio.NewReader(conn), ptrType$1.nil, sliceType.nil), new Writer.ptr(bufio.NewWriter(conn), ptrType$4.nil), new Pipeline.ptr(new sync.Mutex.ptr(0, 0), 0, new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false), new sequencer.ptr(new sync.Mutex.ptr(0, 0), 0, false)), conn);
    	};
	$pkg.NewConn = NewConn;
NewConnbufio.NewReaderbufio.NewWriterbufio.Writernet/textproto.Connnet/textproto.NewConnnet/textproto.Pipelinenet/textproto.Readernet/textproto.Writernet/textproto.dotWriternet/textproto.ptrTypenet/textproto.ptrType$1net/textproto.ptrType$3net/textproto.ptrType$4net/textproto.sequencernet/textproto.sliceType
sync.Mutex (*net/textproto.Conn).Close ��	Conn.ptr.prototype.Close = function() {
		var $24r, _r, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  h�		_r = c.conn.Close(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Conn.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	Conn.prototype.Close = function() { return this.$val.Close(); };
Connnet/textproto.Conn net/textproto.Dialnet/textprotoDial Dial�8	Dial = function(network, addr) {
		var _tuple, addr, c, err, network;
  iN		_tuple = net.Dial(network, addr);
		c = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  i�			return [ptrType$5.nil, err];
    		}
  i�		return [NewConn(c), $ifaceNil];
    	};
	$pkg.Dial = Dial;
Dialnet.Dialnet/textproto.Connnet/textproto.Dialnet/textproto.NewConnnet/textproto.ptrType$5 (*net/textproto.Conn).Cmd �	Conn.ptr.prototype.Cmd = function(format, args) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, args, c, err, format, id, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; args = $f.args; c = $f.c; err = $f.err; format = $f.format; id = $f.id; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		id = 0;
		err = $ifaceNil;
		c = this;
  l�		_r = c.Pipeline.Next(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r;
  l�		$r = c.Pipeline.StartRequest(id); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  l�		_r$1 = c.Writer.PrintfLine(format, args); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
  l�		$r = c.Pipeline.EndRequest(id); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp = 0;
			_tmp$1 = err;
			id = _tmp;
			err = _tmp$1;
			$s = -1; return [id, err];
    		}
    		_tmp$2 = id;
		_tmp$3 = $ifaceNil;
		id = _tmp$2;
		err = _tmp$3;
		$s = -1; return [id, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Conn.ptr.prototype.Cmd }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.args = args; $f.c = c; $f.err = err; $f.format = format; $f.id = id; $f.$s = $s; $f.$r = $r; return $f;
	};
	Conn.prototype.Cmd = function(format, args) { return this.$val.Cmd(format, args); };
Connnet/textproto.Conn net/textproto.TrimStringnet/textproto
TrimString 
TrimString��	TrimString = function(s) {
		var s;
  m�		while (true) {
			if (!(s.length > 0 && isASCIISpace(s.charCodeAt(0)))) { break; }
  m�			s = $substring(s, 1);
    		}
  m�		while (true) {
			if (!(s.length > 0 && isASCIISpace(s.charCodeAt((s.length - 1 >> 0))))) { break; }
  m�			s = $substring(s, 0, (s.length - 1 >> 0));
    		}
  n		return s;
    	};
	$pkg.TrimString = TrimString;

TrimStringnet/textproto.TrimStringnet/textproto.isASCIISpace net/textproto.TrimBytesnet/textproto	TrimBytes 	TrimBytes�A	TrimBytes = function(b) {
		var b, x;
  n�		while (true) {
			if (!(b.$length > 0 && isASCIISpace((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0])))) { break; }
  n�			b = $subslice(b, 1);
    		}
  n�		while (true) {
			if (!(b.$length > 0 && isASCIISpace((x = b.$length - 1 >> 0, ((x < 0 || x >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + x]))))) { break; }
  n�			b = $subslice(b, 0, (b.$length - 1 >> 0));
    		}
  n�		return b;
    	};
	$pkg.TrimBytes = TrimBytes;
	TrimBytesnet/textproto.TrimBytesnet/textproto.isASCIISpace net/textproto.isASCIISpacenet/textprotoisASCIISpace isASCIISpaces	isASCIISpace = function(b) {
		var b;
  o*		return (b === 32) || (b === 9) || (b === 10) || (b === 13);
    	};
isASCIISpacenet/textproto.isASCIISpace net/textproto.isASCIILetternet/textprotoisASCIILetter isASCIILetterq	isASCIILetter = function(b) {
		var b;
  o�		b = (b | (32)) >>> 0;
  o�		return 97 <= b && b <= 122;
    	};
isASCIILetternet/textproto.isASCIILetter net/textproto.NewWriternet/textproto	NewWriter 	NewWriterz	NewWriter = function(w) {
		var w;
  q�		return new Writer.ptr(w, ptrType$4.nil);
    	};
	$pkg.NewWriter = NewWriter;
	NewWriternet/textproto.NewWriternet/textproto.Writernet/textproto.ptrType$3net/textproto.ptrType$4 "(*net/textproto.Writer).PrintfLine �j	Writer.ptr.prototype.PrintfLine = function(format, args) {
		var $24r, _r, _r$1, _r$2, args, format, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; args = $f.args; format = $f.format; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  r�		$r = w.closeDot(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  r�		_r = fmt.Fprintf(w.W, format, args); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
  r�		_r$1 = w.W.Write(crnl); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  r�		_r$2 = w.W.Flush(); /* */ $s = 4; case 4: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.PrintfLine }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.args = args; $f.format = format; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.PrintfLine = function(format, args) { return this.$val.PrintfLine(format, args); };
Writerfmt.Fprintfnet/textproto.Writernet/textproto.closeDot~net/textproto.crnl !(*net/textproto.Writer).DotWriter ��	Writer.ptr.prototype.DotWriter = function() {
		var w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  t�		$r = w.closeDot(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  t�		w.dot = new dotWriter.ptr(w, 0);
  t�		$s = -1; return w.dot;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.DotWriter }; } $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.DotWriter = function() { return this.$val.DotWriter(); };
Writernet/textproto.Writernet/textproto.closeDot~net/textproto.dotWriternet/textproto.ptrType$6  (*net/textproto.Writer).closeDot �J	Writer.ptr.prototype.closeDot = function() {
		var _r, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  u		/* */ if (!(w.dot === ptrType$4.nil)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(w.dot === ptrType$4.nil)) { */ case 1:
  u			_r = w.dot.Close(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.closeDot }; } $f._r = _r; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.closeDot = function() { return this.$val.closeDot(); };
Writer	closeDot~net/textproto.Writernet/textproto.ptrType$4  (*net/textproto.dotWriter).Write �+	dotWriter.ptr.prototype.Write = function(b) {
		var _1, _r, _r$1, _r$2, _r$3, b, bw, c, d, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; b = $f.b; bw = $f.bw; c = $f.c; d = $f.d; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
  v�		bw = d.w.W;
  v�		/* while (true) { */ case 1:
			/* if (!(n < b.$length)) { break; } */ if(!(n < b.$length)) { $s = 2; continue; }
  v�			c = ((n < 0 || n >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + n]);
    				_1 = d.state;
  v�				/* */ if ((_1 === (0)) || (_1 === (1))) { $s = 4; continue; }
				/* */ if (_1 === (3)) { $s = 5; continue; }
				/* */ if (_1 === (2)) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if ((_1 === (0)) || (_1 === (1))) { */ case 4:
  v�					d.state = 3;
  w					/* */ if (c === 46) { $s = 8; continue; }
					/* */ $s = 9; continue;
    					/* if (c === 46) { */ case 8:
  w=						_r = bw.WriteByte(46); /* */ $s = 10; case 10: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
						_r;
    					/* } */ case 9:
    					if (c === 13) {
  w�						d.state = 2;
    					}
  w�					/* */ if (c === 10) { $s = 11; continue; }
					/* */ $s = 12; continue;
    					/* if (c === 10) { */ case 11:
  w�						_r$1 = bw.WriteByte(13); /* */ $s = 13; case 13: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						_r$1;
  w�						d.state = 1;
    					/* } */ case 12:
    					$s = 7; continue;
    				/* } else if (_1 === (3)) { */ case 5:
    					if (c === 13) {
  w�						d.state = 2;
    					}
  w�					/* */ if (c === 10) { $s = 14; continue; }
					/* */ $s = 15; continue;
    					/* if (c === 10) { */ case 14:
  w�						_r$2 = bw.WriteByte(13); /* */ $s = 16; case 16: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						_r$2;
  w�						d.state = 1;
    					/* } */ case 15:
    					$s = 7; continue;
    				/* } else if (_1 === (2)) { */ case 6:
  x					d.state = 3;
    					if (c === 10) {
  x1						d.state = 1;
    					}
    				/* } */ case 7:
    			case 3:
  xY			_r$3 = bw.WriteByte(c); /* */ $s = 17; case 17: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			err = _r$3;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  x�				/* break; */ $s = 2; continue;
    			}
  x�			n = n + (1) >> 0;
    		$s = 1; continue;
		case 2:
  x�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dotWriter.ptr.prototype.Write }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.b = b; $f.bw = bw; $f.c = c; $f.d = d; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	dotWriter.prototype.Write = function(b) { return this.$val.Write(b); };
	dotWriternet/textproto.dotWriter  (*net/textproto.dotWriter).Close �	l	dotWriter.ptr.prototype.Close = function() {
		var $24r, _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, bw, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; bw = $f.bw; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (d.w.dot === d) {
  x�			d.w.dot = ptrType$4.nil;
    		}
  x�		bw = d.w.W;
    			_1 = d.state;
  y5			/* */ if (_1 === (2)) { $s = 2; continue; }
			/* */ if (_1 === (1)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_1 === (2)) { */ case 2:
  yF				_r = bw.WriteByte(10); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r;
  y�				_r$1 = bw.Write(dotcrnl); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$1;
    				$s = 5; continue;
    			/* } else if (_1 === (1)) { */ case 3:
  y�				_r$2 = bw.Write(dotcrnl); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$2;
    				$s = 5; continue;
			/* } else { */ case 4:
  y				_r$3 = bw.WriteByte(13); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$3;
  yF				_r$4 = bw.WriteByte(10); /* */ $s = 10; case 10: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_r$4;
  y�				_r$5 = bw.Write(dotcrnl); /* */ $s = 11; case 11: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_r$5;
    			/* } */ case 5:
    		case 1:
  y�		_r$6 = bw.Flush(); /* */ $s = 12; case 12: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		$24r = _r$6;
		$s = 13; case 13: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: dotWriter.ptr.prototype.Close }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f.bw = bw; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	dotWriter.prototype.Close = function() { return this.$val.Close(); };
	dotWriternet/textproto.dotWriternet/textproto.dotcrnlnet/textproto.ptrType$4 ��{"Base":31147,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/textproto/header.go","Base":1,"Size":1689,"Lines":[0,55,109,159,160,178,179,234,261,297,298,345,403,448,483,515,517,518,572,626,657,702,752,754,755,814,872,909,976,1031,1076,1091,1103,1106,1143,1161,1173,1176,1189,1191,1192,1252,1305,1368,1402,1439,1489,1504,1517,1520,1559,1561,1562,1609,1647,1687],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/textproto/pipeline.go","Base":1691,"Size":3034,"Lines":[0,55,109,159,160,178,179,188,196,198,199,269,272,339,366,369,404,407,462,482,542,545,602,623,685,688,748,816,839,860,875,895,915,917,918,975,1008,1021,1033,1041,1056,1067,1069,1070,1153,1187,1230,1251,1253,1254,1328,1368,1409,1428,1430,1431,1515,1549,1593,1615,1617,1618,1698,1734,1776,1796,1798,1799,1864,1936,2006,2075,2099,2116,2127,2156,2158,2159,2227,2296,2312,2349,2362,2379,2395,2404,2407,2433,2453,2493,2496,2512,2527,2532,2534,2535,2607,2683,2753,2788,2801,2818,2834,2857,2860,2866,2877,2897,2937,2940,2961,2970,2991,2994,3009,3018,3029,3032],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/textproto/reader.go","Base":4726,"Size":20117,"Lines":[0,55,109,159,160,178,179,188,197,206,213,219,230,241,249,251,252,316,373,394,413,429,490,492,493,543,546,611,682,708,750,789,811,813,814,854,912,958,990,1016,1018,1019,1095,1146,1178,1196,1229,1247,1260,1263,1281,1283,1284,1335,1349,1366,1373,1406,1424,1443,1447,1507,1535,1552,1556,1584,1597,1606,1610,1613,1631,1633,1634,1695,1744,1806,1868,1927,1990,2006,2009,2046,2049,2059,2077,2087,2090,2163,2203,2206,2242,2245,2300,2353,2379,2381,2382,2451,2491,2520,2528,2579,2585,2588,2601,2651,2657,2660,2675,2677,2678,2734,2775,2835,2888,2906,2939,2957,2970,2973,2991,2993,2994,3066,3139,3210,3260,3356,3387,3446,3449,3450,3475,3507,3524,3542,3545,3598,3617,3620,3621,3670,3688,3691,3692,3763,3836,3906,3953,3978,4003,4072,4130,4156,4160,4163,4164,4231,4260,4302,4303,4332,4357,4390,4408,4417,4421,4450,4489,4492,4511,4513,4514,4592,4627,4635,4642,4669,4687,4730,4739,4743,4772,4792,4801,4805,4811,4814,4824,4826,4827,4929,4956,4973,4982,4985,5025,5027,5028,5132,5188,5237,5246,5249,5277,5314,5345,5401,5410,5413,5433,5501,5568,5633,5663,5666,5674,5676,5677,5732,5748,5807,5873,5906,5909,5981,6044,6110,6155,6158,6223,6226,6287,6290,6376,6437,6467,6535,6538,6546,6548,6549,6606,6609,6632,6655,6662,6685,6688,6763,6834,6901,6933,6936,7004,7053,7056,7080,7099,7107,7131,7134,7206,7269,7335,7380,7383,7444,7447,7533,7594,7614,7631,7659,7677,7698,7702,7703,7719,7744,7806,7841,7894,7914,7926,7930,7962,7965,8008,8074,8104,8107,8115,8117,8118,8183,8235,8292,8313,8316,8373,8441,8505,8572,8630,8671,8674,8731,8790,8861,8923,8964,8978,9004,9018,9020,9021,9045,9060,9071,9073,9074,9142,9198,9245,9300,9334,9343,9417,9472,9529,9590,9648,9705,9708,9721,9762,9775,9800,9818,9840,9870,9875,9884,9888,9907,9930,9947,9970,9983,9988,10006,10028,10041,10046,10069,10070,10087,10105,10130,10143,10148,10166,10189,10202,10207,10230,10231,10250,10268,10291,10304,10309,10334,10379,10398,10410,10433,10434,10450,10468,10497,10507,10512,10550,10569,10581,10604,10605,10623,10641,10663,10676,10681,10699,10728,10733,10737,10748,10754,10757,10797,10812,10815,10848,10864,10867,10875,10877,10878,10927,10983,11013,11032,11041,11044,11070,11090,11130,11161,11179,11182,11184,11185,11252,11255,11337,11387,11421,11423,11424,11481,11558,11561,11643,11695,11744,11794,11847,11863,11878,11885,11903,11930,11948,11970,12000,12005,12014,12018,12019,12072,12111,12134,12144,12149,12168,12172,12194,12197,12212,12214,12215,12267,12334,12361,12421,12487,12490,12527,12530,12549,12567,12590,12609,12612,12665,12668,12692,12730,12769,12774,12777,12833,12899,12959,13027,13046,13082,13097,13127,13130,13131,13160,13161,13215,13294,13327,13345,13362,13366,13447,13450,13451,13458,13520,13540,13557,13561,13562,13592,13624,13637,13709,13713,13753,13754,13835,13914,13963,13980,13992,13996,13997,14032,14052,14107,14114,14118,14144,14145,14160,14194,14252,14292,14353,14406,14441,14458,14473,14484,14514,14518,14519,14537,14554,14558,14561,14563,14564,14634,14661,14710,14711,14769,14827,14847,14896,14933,15019,15022,15034,15036,15037,15114,15181,15233,15271,15316,15337,15350,15359,15362,15386,15407,15442,15455,15514,15569,15579,15583,15589,15609,15612,15620,15622,15623,15685,15747,15806,15863,15924,15974,16036,16071,16118,16157,16158,16198,16213,16244,16256,16288,16300,16304,16341,16385,16389,16427,16471,16475,16494,16497,16507,16509,16510,16536,16537,16607,16637,16694,16722,16795,16852,16873,16914,16968,16970,16971,17035,17101,17112,17115,17182,17229,17276,17343,17366,17397,17409,17413,17438,17457,17460,17461,17476,17499,17542,17579,17623,17679,17716,17732,17777,17793,17797,17808,17844,17847,17909,17969,18000,18044,18055,18058,18076,18078,18079,18126,18161,18162,18193,18194,18220,18260,18289,18301,18321,18342,18363,18382,18401,18409,18425,18441,18463,18483,18514,18532,18544,18554,18574,18584,18597,18607,18617,18640,18659,18676,18695,18709,18725,18743,18755,18769,18786,18798,18814,18827,18835,18851,18860,18881,18899,18917,18922,18944,18947,18949,18950,19011,19084,19114,19127,19140,19153,19166,19179,19192,19205,19218,19231,19244,19257,19270,19283,19296,19309,19322,19335,19348,19361,19374,19387,19400,19413,19426,19439,19452,19465,19478,19491,19504,19517,19530,19543,19556,19569,19582,19595,19608,19621,19634,19647,19660,19673,19686,19699,19712,19725,19738,19751,19764,19777,19790,19803,19816,19829,19842,19855,19868,19881,19894,19907,19920,19933,19946,19959,19972,19985,19998,20011,20024,20037,20050,20063,20076,20089,20102,20115],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/textproto/textproto.go","Base":24844,"Size":3767,"Lines":[0,55,109,159,160,240,291,294,319,322,379,392,395,451,467,470,518,575,630,665,668,713,716,788,825,828,846,847,856,865,872,878,885,887,888,951,971,981,994,996,997,1030,1076,1078,1079,1134,1185,1211,1212,1252,1270,1272,1273,1333,1385,1454,1503,1556,1575,1583,1591,1601,1626,1628,1629,1679,1725,1740,1784,1828,1844,1847,1849,1850,1882,1913,1936,1938,1939,2013,2064,2113,2148,2165,2183,2186,2210,2212,2213,2271,2332,2393,2475,2478,2552,2565,2568,2596,2615,2635,2640,2643,2666,2693,2696,2748,2768,2773,2806,2825,2845,2850,2880,2883,2961,2976,2996,3033,3051,3068,3084,3087,3103,3105,3106,3172,3207,3247,3259,3262,3309,3328,3331,3341,3343,3344,3409,3443,3483,3495,3498,3545,3564,3567,3577,3579,3580,3613,3669,3671,3672,3706,3736,3765],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/net/textproto/writer.go","Base":28612,"Size":2534,"Lines":[0,55,109,159,160,178,179,188,197,204,210,212,213,268,332,353,372,388,390,391,439,481,503,505,506,536,574,575,635,707,721,756,773,793,795,796,873,932,1005,1066,1118,1121,1208,1254,1268,1294,1308,1310,1311,1341,1360,1396,1399,1401,1402,1426,1441,1452,1454,1455,1463,1518,1563,1625,1683,1685,1686,1743,1756,1774,1786,1805,1842,1866,1883,1909,1931,1936,1951,1952,1971,1989,2012,2017,2035,2058,2088,2093,2094,2111,2135,2153,2183,2188,2192,2233,2242,2246,2252,2255,2263,2265,2266,2302,2321,2337,2340,2353,2371,2381,2402,2416,2432,2453,2467,2490,2510,2513,2532],"Infos":null}]}
 