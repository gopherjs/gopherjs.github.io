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
GoLinkname�� Implementation�� 	Reference��   ��U��#vendor/golang.org/x/net/http2/hpackhpackbyteserrorsfmtiosync��i �	�dsts dynTabdynamicTableemitfHeaderFieldemitEnabled	maxStrLenbufsaveBufBufferbytes
firstFieldSetMaxStringLengthdDecodernSetEmitFuncemitFuncSetEmitEnabledvEmitEnabledSetMaxDynamicTableSizeSetAllowedMaxDynamicTableSizemaxTableIndexatihfok
DecodeFullpCloseWriteerrparseHeaderFieldReprparseFieldIndexedparseFieldLiteralit	indexTypecallEmitparseDynamicTableSizeUpdate
readStringwantStrremainErrErrordeDecodingErrorminSizemaxSizeLimittableSizeUpdatewWriterio
WriteFieldeEncodersearchTablenameValueMatchSetMaxDynamicTableSizeLimitshouldIndexNameValue	SensitiveIsPseudoStringSizeInvalidIndexErrormaxDynamicTableSizetableheaderFieldTablesizemaxSizeallowedMaxSize
setMaxSizedtaddevictofflastReadreadOpBytesbemptyLenCapTruncateResettryGrowByReslicegrowGrowWriteStringReadFromrReaderWriteTo	WriteBytec	WriteRuneReadNextReadByteReadRune
UnreadRune
UnreadByte	ReadBytesdelimline	readSlice
ReadStringindexed	sensitiveents
evictCountbyNamebyNameValuepairNameValueinittlenaddEntryevictOldestsearch	idToIndexidnamevaluehpackAppendHuffmanStringErrInvalidHuffmanErrStringLengthHuffmanDecodeHuffmanDecodeToStringHuffmanEncodeLength
NewDecoder
NewEncoderF      "   "  5   PW 2  8  .   :  D@  HB  ]   }kk  5  kkkkkkk5kkkkk �kkkT E h {n �   � {p �r   � {z �    � {|    � {~ �	   � {� �	   � {�   � {� �
 �5 �   � {� �� �   � {�   � {� �� � �  � {�   � {�   � {� � ��   � {� �5   � {�   � {� �� �   �� �  �  �T � � ��   �� 2  �	  �	  �   ��  D�  ������T � � ��  5   � ��  5 �
 �   � �� �	   � �� �	   � ��  5   V V  �  �  �  T � � �5    � �5   � �5  	F  �� ��   F  ��   F   
  �T  � ��    5  kF  �	 �� � �F  �� �  � ��  �	  �	  �	 222T � � �� �	   � ��  5   � ��   �WW D�  �  �� BBBBBBBBBBBBB ��BBBBBBBBBBBBT � � ��  � � ��   � ��    � ��   � ��   � �� �   � ��   � �� �     � �� �   � �� �   � �� �� � �  � ��  � �  � �� �� � �  � �� �� � �  � �� �   � �� � � �  � �� �� � �  � �� � �  � ��    � ��  � � � � ��   � ��   � �� � �� �  � �� � �� �  � �� � � � T  � ��    � ��   �  � �� � � T �5
 ��
 ��  �
  ��  �� ������T � � ��   � ��   � ��  5   � �� �   � ��  5 �
 �   � �� �
 
 T  �  � �� � � T � �  � T � � �}��������	�"��	��	��	����	��	��������WW P����� ����o bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Encoder��	Encoder = $pkg.Encoder = $newType(0, $kindStruct, "hpack.Encoder", true, "vendor/golang.org/x/net/http2/hpack", true, function(dynTab_, minSize_, maxSizeLimit_, tableSizeUpdate_, w_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.dynTab = new dynamicTable.ptr(new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false), 0, 0, 0);
			this.minSize = 0;
			this.maxSizeLimit = 0;
			this.tableSizeUpdate = false;
			this.w = $ifaceNil;
			this.buf = sliceType$1.nil;
			return;
		}
		this.dynTab = dynTab_;
		this.minSize = minSize_;
		this.maxSizeLimit = maxSizeLimit_;
		this.tableSizeUpdate = tableSizeUpdate_;
		this.w = w_;
		this.buf = buf_;
	});
�}	ptrType$3.methods = [{prop: "WriteField", name: "WriteField", pkg: "", typ: $funcType([HeaderField], [$error], false)}, {prop: "searchTable", name: "searchTable", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [$Uint64, $Bool], false)}, {prop: "SetMaxDynamicTableSize", name: "SetMaxDynamicTableSize", pkg: "", typ: $funcType([$Uint32], [], false)}, {prop: "SetMaxDynamicTableSizeLimit", name: "SetMaxDynamicTableSizeLimit", pkg: "", typ: $funcType([$Uint32], [], false)}, {prop: "shouldIndex", name: "shouldIndex", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [$Bool], false)}];
�s	Encoder.init("vendor/golang.org/x/net/http2/hpack", [{prop: "dynTab", name: "dynTab", embedded: false, exported: false, typ: dynamicTable, tag: ""}, {prop: "minSize", name: "minSize", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "maxSizeLimit", name: "maxSizeLimit", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "tableSizeUpdate", name: "tableSizeUpdate", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
Encoder	io.Writer+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.HeaderField0vendor/golang.org/x/net/http2/hpack.dynamicTable4vendor/golang.org/x/net/http2/hpack.headerFieldTable-vendor/golang.org/x/net/http2/hpack.ptrType$3/vendor/golang.org/x/net/http2/hpack.sliceType$1/vendor/golang.org/x/net/http2/hpack.sliceType$2  DecodingError�	DecodingError = $pkg.DecodingError = $newType(0, $kindStruct, "hpack.DecodingError", true, "vendor/golang.org/x/net/http2/hpack", true, function(Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Err = $ifaceNil;
			return;
		}
		this.Err = Err_;
	});
j	DecodingError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
n	DecodingError.init("", [{prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);
DecodingError1vendor/golang.org/x/net/http2/hpack.DecodingError  InvalidIndexError��	InvalidIndexError = $pkg.InvalidIndexError = $newType(4, $kindInt, "hpack.InvalidIndexError", true, "vendor/golang.org/x/net/http2/hpack", true, null);
n	InvalidIndexError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
InvalidIndexError5vendor/golang.org/x/net/http2/hpack.InvalidIndexError  HeaderField�~	HeaderField = $pkg.HeaderField = $newType(0, $kindStruct, "hpack.HeaderField", true, "vendor/golang.org/x/net/http2/hpack", true, function(Name_, Value_, Sensitive_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Value = "";
			this.Sensitive = false;
			return;
		}
		this.Name = Name_;
		this.Value = Value_;
		this.Sensitive = Sensitive_;
	});
�
	HeaderField.methods = [{prop: "IsPseudo", name: "IsPseudo", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Uint32], false)}];
�%	HeaderField.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Value", name: "Value", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Sensitive", name: "Sensitive", embedded: false, exported: true, typ: $Bool, tag: ""}]);
HeaderField/vendor/golang.org/x/net/http2/hpack.HeaderField  Decoder� 	Decoder = $pkg.Decoder = $newType(0, $kindStruct, "hpack.Decoder", true, "vendor/golang.org/x/net/http2/hpack", true, function(dynTab_, emit_, emitEnabled_, maxStrLen_, buf_, saveBuf_, firstField_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.dynTab = new dynamicTable.ptr(new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false), 0, 0, 0);
			this.emit = $throwNilPointerError;
			this.emitEnabled = false;
			this.maxStrLen = 0;
			this.buf = sliceType$1.nil;
			this.saveBuf = new bytes.Buffer.ptr(sliceType$1.nil, 0, 0);
			this.firstField = false;
			return;
		}
		this.dynTab = dynTab_;
		this.emit = emit_;
		this.emitEnabled = emitEnabled_;
		this.maxStrLen = maxStrLen_;
		this.buf = buf_;
		this.saveBuf = saveBuf_;
		this.firstField = firstField_;
	});
�	ptrType$4.methods = [{prop: "SetMaxStringLength", name: "SetMaxStringLength", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "SetEmitFunc", name: "SetEmitFunc", pkg: "", typ: $funcType([funcType$1], [], false)}, {prop: "SetEmitEnabled", name: "SetEmitEnabled", pkg: "", typ: $funcType([$Bool], [], false)}, {prop: "EmitEnabled", name: "EmitEnabled", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "SetMaxDynamicTableSize", name: "SetMaxDynamicTableSize", pkg: "", typ: $funcType([$Uint32], [], false)}, {prop: "SetAllowedMaxDynamicTableSize", name: "SetAllowedMaxDynamicTableSize", pkg: "", typ: $funcType([$Uint32], [], false)}, {prop: "maxTableIndex", name: "maxTableIndex", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$Int], false)}, {prop: "at", name: "at", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([$Uint64], [HeaderField, $Bool], false)}, {prop: "DecodeFull", name: "DecodeFull", pkg: "", typ: $funcType([sliceType$1], [sliceType$2, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "parseHeaderFieldRepr", name: "parseHeaderFieldRepr", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$error], false)}, {prop: "parseFieldIndexed", name: "parseFieldIndexed", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$error], false)}, {prop: "parseFieldLiteral", name: "parseFieldLiteral", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([$Uint8, indexType], [$error], false)}, {prop: "callEmit", name: "callEmit", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [$error], false)}, {prop: "parseDynamicTableSizeUpdate", name: "parseDynamicTableSizeUpdate", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$error], false)}, {prop: "readString", name: "readString", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([sliceType$1, $Bool], [$String, sliceType$1, $error], false)}];
��	Decoder.init("vendor/golang.org/x/net/http2/hpack", [{prop: "dynTab", name: "dynTab", embedded: false, exported: false, typ: dynamicTable, tag: ""}, {prop: "emit", name: "emit", embedded: false, exported: false, typ: funcType$1, tag: ""}, {prop: "emitEnabled", name: "emitEnabled", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "maxStrLen", name: "maxStrLen", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "saveBuf", name: "saveBuf", embedded: false, exported: false, typ: bytes.Buffer, tag: ""}, {prop: "firstField", name: "firstField", embedded: false, exported: false, typ: $Bool, tag: ""}]);
Decoder
bytes.Buffer+vendor/golang.org/x/net/http2/hpack.Decoder/vendor/golang.org/x/net/http2/hpack.HeaderField0vendor/golang.org/x/net/http2/hpack.dynamicTable.vendor/golang.org/x/net/http2/hpack.funcType$14vendor/golang.org/x/net/http2/hpack.headerFieldTable-vendor/golang.org/x/net/http2/hpack.indexType-vendor/golang.org/x/net/http2/hpack.ptrType$4/vendor/golang.org/x/net/http2/hpack.sliceType$1/vendor/golang.org/x/net/http2/hpack.sliceType$2  dynamicTable�	dynamicTable = $pkg.dynamicTable = $newType(0, $kindStruct, "hpack.dynamicTable", true, "vendor/golang.org/x/net/http2/hpack", false, function(table_, size_, maxSize_, allowedMaxSize_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.table = new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false);
			this.size = 0;
			this.maxSize = 0;
			this.allowedMaxSize = 0;
			return;
		}
		this.table = table_;
		this.size = size_;
		this.maxSize = maxSize_;
		this.allowedMaxSize = allowedMaxSize_;
	});
�p	ptrType$5.methods = [{prop: "setMaxSize", name: "setMaxSize", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([$Uint32], [], false)}, {prop: "add", name: "add", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [], false)}, {prop: "evict", name: "evict", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [], false)}];
��	dynamicTable.init("vendor/golang.org/x/net/http2/hpack", [{prop: "table", name: "table", embedded: false, exported: false, typ: headerFieldTable, tag: ""}, {prop: "size", name: "size", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "maxSize", name: "maxSize", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "allowedMaxSize", name: "allowedMaxSize", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
dynamicTable/vendor/golang.org/x/net/http2/hpack.HeaderField0vendor/golang.org/x/net/http2/hpack.dynamicTable4vendor/golang.org/x/net/http2/hpack.headerFieldTable-vendor/golang.org/x/net/http2/hpack.ptrType$5/vendor/golang.org/x/net/http2/hpack.sliceType$2  	indexType��	indexType = $pkg.indexType = $newType(4, $kindInt, "hpack.indexType", true, "vendor/golang.org/x/net/http2/hpack", false, null);
�	indexType.methods = [{prop: "indexed", name: "indexed", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$Bool], false)}, {prop: "sensitive", name: "sensitive", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$Bool], false)}];
	indexType-vendor/golang.org/x/net/http2/hpack.indexType  incomparable��	incomparable = $pkg.incomparable = $newType(0, $kindArray, "hpack.incomparable", true, "vendor/golang.org/x/net/http2/hpack", false, null);
!	incomparable.init(funcType, 0);
incomparable,vendor/golang.org/x/net/http2/hpack.funcType0vendor/golang.org/x/net/http2/hpack.incomparable  node��	node = $pkg.node = $newType(0, $kindStruct, "hpack.node", true, "vendor/golang.org/x/net/http2/hpack", false, function(_$0_, children_, codeLen_, sym_) {
		this.$val = this;
		if (arguments.length === 0) {
			this._$0 = arrayType$1.zero();
			this.children = ptrType$2.nil;
			this.codeLen = 0;
			this.sym = 0;
			return;
		}
		this._$0 = _$0_;
		this.children = children_;
		this.codeLen = codeLen_;
		this.sym = sym_;
	});
��	node.init("vendor/golang.org/x/net/http2/hpack", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: incomparable, tag: ""}, {prop: "children", name: "children", embedded: false, exported: false, typ: ptrType$2, tag: ""}, {prop: "codeLen", name: "codeLen", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "sym", name: "sym", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
node/vendor/golang.org/x/net/http2/hpack.arrayType$10vendor/golang.org/x/net/http2/hpack.incomparable(vendor/golang.org/x/net/http2/hpack.node-vendor/golang.org/x/net/http2/hpack.ptrType$2  headerFieldTable� 	headerFieldTable = $pkg.headerFieldTable = $newType(0, $kindStruct, "hpack.headerFieldTable", true, "vendor/golang.org/x/net/http2/hpack", false, function(ents_, evictCount_, byName_, byNameValue_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.ents = sliceType$2.nil;
			this.evictCount = new $Uint64(0, 0);
			this.byName = false;
			this.byNameValue = false;
			return;
		}
		this.ents = ents_;
		this.evictCount = evictCount_;
		this.byName = byName_;
		this.byNameValue = byNameValue_;
	});
��	ptrType$6.methods = [{prop: "init", name: "init", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [], false)}, {prop: "len", name: "len", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([], [$Int], false)}, {prop: "addEntry", name: "addEntry", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [], false)}, {prop: "evictOldest", name: "evictOldest", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([$Int], [], false)}, {prop: "search", name: "search", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([HeaderField], [$Uint64, $Bool], false)}, {prop: "idToIndex", name: "idToIndex", pkg: "vendor/golang.org/x/net/http2/hpack", typ: $funcType([$Uint64], [$Uint64], false)}];
��	headerFieldTable.init("vendor/golang.org/x/net/http2/hpack", [{prop: "ents", name: "ents", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "evictCount", name: "evictCount", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "byName", name: "byName", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "byNameValue", name: "byNameValue", embedded: false, exported: false, typ: mapType$1, tag: ""}]);
headerFieldTable/vendor/golang.org/x/net/http2/hpack.HeaderField4vendor/golang.org/x/net/http2/hpack.headerFieldTable+vendor/golang.org/x/net/http2/hpack.mapType-vendor/golang.org/x/net/http2/hpack.mapType$11vendor/golang.org/x/net/http2/hpack.pairNameValue-vendor/golang.org/x/net/http2/hpack.ptrType$6/vendor/golang.org/x/net/http2/hpack.sliceType$2  pairNameValue�?	pairNameValue = $pkg.pairNameValue = $newType(0, $kindStruct, "hpack.pairNameValue", true, "vendor/golang.org/x/net/http2/hpack", false, function(name_, value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.name = "";
			this.value = "";
			return;
		}
		this.name = name_;
		this.value = value_;
	});
��	pairNameValue.init("vendor/golang.org/x/net/http2/hpack", [{prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "value", name: "value", embedded: false, exported: false, typ: $String, tag: ""}]);
pairNameValue1vendor/golang.org/x/net/http2/hpack.pairNameValue  ptrType	ptrType = $ptrType(node);
ptrType(vendor/golang.org/x/net/http2/hpack.node  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  sliceType$2(	sliceType$2 = $sliceType(HeaderField);
sliceType$2/vendor/golang.org/x/net/http2/hpack.HeaderField  	ptrType$1%	ptrType$1 = $ptrType(bytes.Buffer);
	ptrType$1bytes.Buffer  	arrayType'	arrayType = $arrayType(ptrType, 256);
	arrayType+vendor/golang.org/x/net/http2/hpack.ptrType  	ptrType$2"	ptrType$2 = $ptrType(arrayType);
	ptrType$2-vendor/golang.org/x/net/http2/hpack.arrayType  funcType&	funcType = $funcType([], [], false);
funcType  arrayType$1(	arrayType$1 = $arrayType(funcType, 0);
arrayType$1,vendor/golang.org/x/net/http2/hpack.funcType  	ptrType$3 	ptrType$3 = $ptrType(Encoder);
	ptrType$3+vendor/golang.org/x/net/http2/hpack.Encoder  
funcType$13	funcType$1 = $funcType([HeaderField], [], false);

funcType$1/vendor/golang.org/x/net/http2/hpack.HeaderField  	ptrType$4 	ptrType$4 = $ptrType(Decoder);
	ptrType$4+vendor/golang.org/x/net/http2/hpack.Decoder  	ptrType$5%	ptrType$5 = $ptrType(dynamicTable);
	ptrType$50vendor/golang.org/x/net/http2/hpack.dynamicTable  	ptrType$6)	ptrType$6 = $ptrType(headerFieldTable);
	ptrType$64vendor/golang.org/x/net/http2/hpack.headerFieldTable  mapType'	mapType = $mapType($String, $Uint64);
mapType  	mapType$1/	mapType$1 = $mapType(pairNameValue, $Uint64);
	mapType$11vendor/golang.org/x/net/http2/hpack.pairNameValue  ErrStringLength  errNeedMoreerrNeedMore  errVarintOverflowerrVarintOverflow  bufPoolbufPool  ErrInvalidHuffman  buildRootOnceB		buildRootOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
buildRootOnce
sync.Mutex	sync.Once1vendor/golang.org/x/net/http2/hpack.buildRootOnce  lazyRootHuffmanNode%		lazyRootHuffmanNode = ptrType.nil;
lazyRootHuffmanNode7vendor/golang.org/x/net/http2/hpack.lazyRootHuffmanNode(vendor/golang.org/x/net/http2/hpack.node+vendor/golang.org/x/net/http2/hpack.ptrType  staticTablestaticTable  staticTableEntriesstaticTableEntries  huffmanCodeshuffmanCodes  huffmanCodeLenhuffmanCodeLen  D  *�		$pkg.ErrStringLength = errors.New("hpack: string too long");

errors.New3vendor/golang.org/x/net/http2/hpack.ErrStringLength  3  >�		errNeedMore = errors.New("need more data");

errors.New/vendor/golang.org/x/net/http2/hpack.errNeedMore  Y  L�		errVarintOverflow = new DecodingError.ptr(errors.New("varint integer overflow"));

errors.New1vendor/golang.org/x/net/http2/hpack.DecodingError5vendor/golang.org/x/net/http2/hpack.errVarintOverflow  ��  V�		bufPool = new sync.Pool.ptr(sliceType.nil, (function() {
  V�			return new bytes.Buffer.ptr(sliceType$1.nil, 0, 0);
    		}));
bytes.Buffer	sync.Pool+vendor/golang.org/x/net/http2/hpack.bufPool-vendor/golang.org/x/net/http2/hpack.sliceType/vendor/golang.org/x/net/http2/hpack.sliceType$1  S  Y�		$pkg.ErrInvalidHuffman = errors.New("hpack: invalid Huffman-encoded data");

errors.New5vendor/golang.org/x/net/http2/hpack.ErrInvalidHuffman  �{  |r		staticTableEntries = $toNativeArray($kindStruct, [new HeaderField.ptr(":authority", "", false), new HeaderField.ptr(":method", "GET", false), new HeaderField.ptr(":method", "POST", false), new HeaderField.ptr(":path", "/", false), new HeaderField.ptr(":path", "/index.html", false), new HeaderField.ptr(":scheme", "http", false), new HeaderField.ptr(":scheme", "https", false), new HeaderField.ptr(":status", "200", false), new HeaderField.ptr(":status", "204", false), new HeaderField.ptr(":status", "206", false), new HeaderField.ptr(":status", "304", false), new HeaderField.ptr(":status", "400", false), new HeaderField.ptr(":status", "404", false), new HeaderField.ptr(":status", "500", false), new HeaderField.ptr("accept-charset", "", false), new HeaderField.ptr("accept-encoding", "gzip, deflate", false), new HeaderField.ptr("accept-language", "", false), new HeaderField.ptr("accept-ranges", "", false), new HeaderField.ptr("accept", "", false), new HeaderField.ptr("access-control-allow-origin", "", false), new HeaderField.ptr("age", "", false), new HeaderField.ptr("allow", "", false), new HeaderField.ptr("authorization", "", false), new HeaderField.ptr("cache-control", "", false), new HeaderField.ptr("content-disposition", "", false), new HeaderField.ptr("content-encoding", "", false), new HeaderField.ptr("content-language", "", false), new HeaderField.ptr("content-length", "", false), new HeaderField.ptr("content-location", "", false), new HeaderField.ptr("content-range", "", false), new HeaderField.ptr("content-type", "", false), new HeaderField.ptr("cookie", "", false), new HeaderField.ptr("date", "", false), new HeaderField.ptr("etag", "", false), new HeaderField.ptr("expect", "", false), new HeaderField.ptr("expires", "", false), new HeaderField.ptr("from", "", false), new HeaderField.ptr("host", "", false), new HeaderField.ptr("if-match", "", false), new HeaderField.ptr("if-modified-since", "", false), new HeaderField.ptr("if-none-match", "", false), new HeaderField.ptr("if-range", "", false), new HeaderField.ptr("if-unmodified-since", "", false), new HeaderField.ptr("last-modified", "", false), new HeaderField.ptr("link", "", false), new HeaderField.ptr("location", "", false), new HeaderField.ptr("max-forwards", "", false), new HeaderField.ptr("proxy-authenticate", "", false), new HeaderField.ptr("proxy-authorization", "", false), new HeaderField.ptr("range", "", false), new HeaderField.ptr("referer", "", false), new HeaderField.ptr("refresh", "", false), new HeaderField.ptr("retry-after", "", false), new HeaderField.ptr("server", "", false), new HeaderField.ptr("set-cookie", "", false), new HeaderField.ptr("strict-transport-security", "", false), new HeaderField.ptr("transfer-encoding", "", false), new HeaderField.ptr("user-agent", "", false), new HeaderField.ptr("vary", "", false), new HeaderField.ptr("via", "", false), new HeaderField.ptr("www-authenticate", "", false)]);
staticTableEntries/vendor/golang.org/x/net/http2/hpack.HeaderField6vendor/golang.org/x/net/http2/hpack.staticTableEntries  '  |O		staticTable = newStaticTable();
2vendor/golang.org/x/net/http2/hpack.newStaticTable/vendor/golang.org/x/net/http2/hpack.staticTable  �"  ��		huffmanCodes = $toNativeArray($kindUint32, [8184, 8388568, 268435426, 268435427, 268435428, 268435429, 268435430, 268435431, 268435432, 16777194, 1073741820, 268435433, 268435434, 1073741821, 268435435, 268435436, 268435437, 268435438, 268435439, 268435440, 268435441, 268435442, 1073741822, 268435443, 268435444, 268435445, 268435446, 268435447, 268435448, 268435449, 268435450, 268435451, 20, 1016, 1017, 4090, 8185, 21, 248, 2042, 1018, 1019, 249, 2043, 250, 22, 23, 24, 0, 1, 2, 25, 26, 27, 28, 29, 30, 31, 92, 251, 32764, 32, 4091, 1020, 8186, 33, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 252, 115, 253, 8187, 524272, 8188, 16380, 34, 32765, 3, 35, 4, 36, 5, 37, 38, 39, 6, 116, 117, 40, 41, 42, 7, 43, 118, 44, 8, 9, 45, 119, 120, 121, 122, 123, 32766, 2044, 16381, 8189, 268435452, 1048550, 4194258, 1048551, 1048552, 4194259, 4194260, 4194261, 8388569, 4194262, 8388570, 8388571, 8388572, 8388573, 8388574, 16777195, 8388575, 16777196, 16777197, 4194263, 8388576, 16777198, 8388577, 8388578, 8388579, 8388580, 2097116, 4194264, 8388581, 4194265, 8388582, 8388583, 16777199, 4194266, 2097117, 1048553, 4194267, 4194268, 8388584, 8388585, 2097118, 8388586, 4194269, 4194270, 16777200, 2097119, 4194271, 8388587, 8388588, 2097120, 2097121, 4194272, 2097122, 8388589, 4194273, 8388590, 8388591, 1048554, 4194274, 4194275, 4194276, 8388592, 4194277, 4194278, 8388593, 67108832, 67108833, 1048555, 524273, 4194279, 8388594, 4194280, 33554412, 67108834, 67108835, 67108836, 134217694, 134217695, 67108837, 16777201, 33554413, 524274, 2097123, 67108838, 134217696, 134217697, 67108839, 134217698, 16777202, 2097124, 2097125, 67108840, 67108841, 268435453, 134217699, 134217700, 134217701, 1048556, 16777203, 1048557, 2097126, 4194281, 2097127, 2097128, 8388595, 4194282, 4194283, 33554414, 33554415, 16777204, 16777205, 67108842, 8388596, 67108843, 134217702, 67108844, 67108845, 134217703, 134217704, 134217705, 134217706, 134217707, 268435454, 134217708, 134217709, 134217710, 134217711, 134217712, 67108846]);
huffmanCodes0vendor/golang.org/x/net/http2/hpack.huffmanCodes  ��  ��		huffmanCodeLen = $toNativeArray($kindUint8, [13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28, 6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10, 13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6, 15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5, 6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28, 20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23, 24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24, 22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23, 21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23, 26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25, 19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27, 20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23, 26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26]);
huffmanCodeLen2vendor/golang.org/x/net/http2/hpack.huffmanCodeLen .vendor/golang.org/x/net/http2/hpack.NewEncoder#vendor/golang.org/x/net/http2/hpack
NewEncoder 
NewEncoder�	NewEncoder = function(w) {
		var e, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		e = new Encoder.ptr(new dynamicTable.ptr(new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false), 0, 0, 0), 4294967295, 4096, false, w, sliceType$1.nil);
  		e.dynTab.table.init();
  (		$r = e.dynTab.setMaxSize(4096); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  U		$s = -1; return e;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewEncoder }; } $f.e = e; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewEncoder = NewEncoder;

NewEncoder	+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.HeaderField.vendor/golang.org/x/net/http2/hpack.NewEncoder0vendor/golang.org/x/net/http2/hpack.dynamicTable4vendor/golang.org/x/net/http2/hpack.headerFieldTable)vendor/golang.org/x/net/http2/hpack.init~/vendor/golang.org/x/net/http2/hpack.setMaxSize~/vendor/golang.org/x/net/http2/hpack.sliceType$1/vendor/golang.org/x/net/http2/hpack.sliceType$2 9(*vendor/golang.org/x/net/http2/hpack.Encoder).WriteField �
P	Encoder.ptr.prototype.WriteField = function(f) {
		var _r, _r$1, _tuple, _tuple$1, e, err, f, idx, indexing, n, nameValueMatch, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; err = $f.err; f = $f.f; idx = $f.idx; indexing = $f.indexing; n = $f.n; nameValueMatch = $f.nameValueMatch; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  _		e.buf = $subslice(e.buf, 0, 0);
    		if (e.tableSizeUpdate) {
  �			e.tableSizeUpdate = false;
    			if (e.minSize < e.dynTab.maxSize) {
  �				e.buf = appendTableSize(e.buf, e.minSize);
    			}
  �			e.minSize = 4294967295;
  			e.buf = appendTableSize(e.buf, e.dynTab.maxSize);
    		}
  K		_r = e.searchTable($clone(f, HeaderField)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		idx = _tuple[0];
		nameValueMatch = _tuple[1];
  t		/* */ if (nameValueMatch) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (nameValueMatch) { */ case 2:
  �			e.buf = appendIndexed(e.buf, idx);
    			$s = 4; continue;
		/* } else { */ case 3:
  �			indexing = e.shouldIndex($clone(f, HeaderField));
  �			/* */ if (indexing) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (indexing) { */ case 5:
  �				$r = e.dynTab.add($clone(f, HeaderField)); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 6:
    			if ((idx.$high === 0 && idx.$low === 0)) {
  				e.buf = appendNewName(e.buf, $clone(f, HeaderField), indexing);
    			} else {
  H				e.buf = appendIndexedName(e.buf, $clone(f, HeaderField), idx, indexing);
    			}
    		/* } */ case 4:
  �		_r$1 = e.w.Write(e.buf); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
    		if ($interfaceIsEqual(err, $ifaceNil) && !((n === e.buf.$length))) {
  �			err = io.ErrShortWrite;
    		}
  �		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Encoder.ptr.prototype.WriteField }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.err = err; $f.f = f; $f.idx = idx; $f.indexing = indexing; $f.n = n; $f.nameValueMatch = nameValueMatch; $f.$s = $s; $f.$r = $r; return $f;
	};
	Encoder.prototype.WriteField = function(f) { return this.$val.WriteField(f); };
Encoder
io.ErrShortWrite+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.HeaderField(vendor/golang.org/x/net/http2/hpack.add~1vendor/golang.org/x/net/http2/hpack.appendIndexed5vendor/golang.org/x/net/http2/hpack.appendIndexedName1vendor/golang.org/x/net/http2/hpack.appendNewName3vendor/golang.org/x/net/http2/hpack.appendTableSize0vendor/golang.org/x/net/http2/hpack.searchTable~0vendor/golang.org/x/net/http2/hpack.shouldIndex~ :(*vendor/golang.org/x/net/http2/hpack.Encoder).searchTable ��	Encoder.ptr.prototype.searchTable = function(f) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, e, f, i, j, nameValueMatch, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; f = $f.f; i = $f.i; j = $f.j; nameValueMatch = $f.nameValueMatch; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		i = new $Uint64(0, 0);
		nameValueMatch = false;
		e = this;
  	�		_r = staticTable.search($clone(f, HeaderField)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		i = _tuple[0];
		nameValueMatch = _tuple[1];
    		if (nameValueMatch) {
    			_tmp = i;
			_tmp$1 = true;
			i = _tmp;
			nameValueMatch = _tmp$1;
			$s = -1; return [i, nameValueMatch];
    		}
  
<		_r$1 = e.dynTab.table.search($clone(f, HeaderField)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		j = _tuple$1[0];
		nameValueMatch = _tuple$1[1];
    		if (nameValueMatch || ((i.$high === 0 && i.$low === 0) && !((j.$high === 0 && j.$low === 0)))) {
    			_tmp$2 = (x = (new $Uint64(0, staticTable.len())), new $Uint64(j.$high + x.$high, j.$low + x.$low));
			_tmp$3 = nameValueMatch;
			i = _tmp$2;
			nameValueMatch = _tmp$3;
			$s = -1; return [i, nameValueMatch];
    		}
    		_tmp$4 = i;
		_tmp$5 = false;
		i = _tmp$4;
		nameValueMatch = _tmp$5;
		$s = -1; return [i, nameValueMatch];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Encoder.ptr.prototype.searchTable }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.f = f; $f.i = i; $f.j = j; $f.nameValueMatch = nameValueMatch; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Encoder.prototype.searchTable = function(f) { return this.$val.searchTable(f); };
EncodersearchTable~+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.HeaderField(vendor/golang.org/x/net/http2/hpack.len~+vendor/golang.org/x/net/http2/hpack.search~/vendor/golang.org/x/net/http2/hpack.staticTable E(*vendor/golang.org/x/net/http2/hpack.Encoder).SetMaxDynamicTableSize �|	Encoder.ptr.prototype.SetMaxDynamicTableSize = function(v) {
		var e, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (v > e.maxSizeLimit) {
  �			v = e.maxSizeLimit;
    		}
    		if (v < e.minSize) {
  �			e.minSize = v;
    		}
  		e.tableSizeUpdate = true;
  '		$r = e.dynTab.setMaxSize(v); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Encoder.ptr.prototype.SetMaxDynamicTableSize }; } $f.e = e; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Encoder.prototype.SetMaxDynamicTableSize = function(v) { return this.$val.SetMaxDynamicTableSize(v); };
Encoder+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.setMaxSize~ J(*vendor/golang.org/x/net/http2/hpack.Encoder).SetMaxDynamicTableSizeLimit ��	Encoder.ptr.prototype.SetMaxDynamicTableSizeLimit = function(v) {
		var e, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  L		e.maxSizeLimit = v;
  `		/* */ if (e.dynTab.maxSize > v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (e.dynTab.maxSize > v) { */ case 1:
  |			e.tableSizeUpdate = true;
  �			$r = e.dynTab.setMaxSize(v); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Encoder.ptr.prototype.SetMaxDynamicTableSizeLimit }; } $f.e = e; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Encoder.prototype.SetMaxDynamicTableSizeLimit = function(v) { return this.$val.SetMaxDynamicTableSizeLimit(v); };
Encoder+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.setMaxSize~ :(*vendor/golang.org/x/net/http2/hpack.Encoder).shouldIndex ��	Encoder.ptr.prototype.shouldIndex = function(f) {
		var e, f;
		e = this;
  		return !f.Sensitive && $clone(f, HeaderField).Size() <= e.dynTab.maxSize;
    	};
	Encoder.prototype.shouldIndex = function(f) { return this.$val.shouldIndex(f); };
EncodershouldIndex~+vendor/golang.org/x/net/http2/hpack.Encoder/vendor/golang.org/x/net/http2/hpack.HeaderField 1vendor/golang.org/x/net/http2/hpack.appendIndexed#vendor/golang.org/x/net/http2/hpackappendIndexed appendIndexed��	appendIndexed = function(dst, i) {
		var dst, first, i;
  			first = dst.$length;
  		dst = appendVarInt(dst, 7, i);
  ;		((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first] = ((((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first]) | (128)) >>> 0));
  O		return dst;
    	};
appendIndexed1vendor/golang.org/x/net/http2/hpack.appendIndexed0vendor/golang.org/x/net/http2/hpack.appendVarInt 1vendor/golang.org/x/net/http2/hpack.appendNewName#vendor/golang.org/x/net/http2/hpackappendNewName appendNewName��	appendNewName = function(dst, f, indexing) {
		var dst, f, indexing;
  �		dst = $append(dst, encodeTypeByte(indexing, f.Sensitive));
  !		dst = appendHpackString(dst, f.Name);
  G		return appendHpackString(dst, f.Value);
    	};
appendNewName5vendor/golang.org/x/net/http2/hpack.appendHpackString1vendor/golang.org/x/net/http2/hpack.appendNewName2vendor/golang.org/x/net/http2/hpack.encodeTypeByte 5vendor/golang.org/x/net/http2/hpack.appendIndexedName#vendor/golang.org/x/net/http2/hpackappendIndexedName appendIndexedName�n	appendIndexedName = function(dst, f, i, indexing) {
		var dst, f, first, i, indexing, n;
  :		first = dst.$length;
  Q		n = 0;
    		if (indexing) {
  i			n = 6;
    		} else {
  {			n = 4;
    		}
  �		dst = appendVarInt(dst, n, i);
  �		((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first] = ((((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first]) | (encodeTypeByte(indexing, f.Sensitive))) >>> 0));
  �		return appendHpackString(dst, f.Value);
    	};
appendIndexedName5vendor/golang.org/x/net/http2/hpack.appendHpackString5vendor/golang.org/x/net/http2/hpack.appendIndexedName0vendor/golang.org/x/net/http2/hpack.appendVarInt2vendor/golang.org/x/net/http2/hpack.encodeTypeByte 3vendor/golang.org/x/net/http2/hpack.appendTableSize#vendor/golang.org/x/net/http2/hpackappendTableSize appendTableSize��	appendTableSize = function(dst, v) {
		var dst, first, v;
  �		first = dst.$length;
  �		dst = appendVarInt(dst, 5, (new $Uint64(0, v)));
  �		((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first] = ((((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first]) | (32)) >>> 0));
  		return dst;
    	};
appendTableSize3vendor/golang.org/x/net/http2/hpack.appendTableSize0vendor/golang.org/x/net/http2/hpack.appendVarInt 0vendor/golang.org/x/net/http2/hpack.appendVarInt#vendor/golang.org/x/net/http2/hpackappendVarInt appendVarInt�	appendVarInt = function(dst, n, i) {
		var dst, i, k, n, x, x$1, x$2;
  %		k = ((x = $shiftLeft64(new $Uint64(0, 1), n), new $Uint64(x.$high - 0, x.$low - 1)));
    		if ((i.$high < k.$high || (i.$high === k.$high && i.$low < k.$low))) {
  M			return $append(dst, ((i.$low << 24 >>> 24)));
    		}
  m		dst = $append(dst, ((k.$low << 24 >>> 24)));
  �		i = (x$1 = k, new $Uint64(i.$high - x$1.$high, i.$low - x$1.$low));
  �		while (true) {
			if (!((i.$high > 0 || (i.$high === 0 && i.$low >= 128)))) { break; }
  �			dst = $append(dst, (((x$2 = new $Uint64(i.$high & 0, (i.$low & 127) >>> 0), new $Uint64(0 | x$2.$high, (128 | x$2.$low) >>> 0)).$low << 24 >>> 24)));
  �			i = $shiftRightUint64(i, (7));
    		}
  �		return $append(dst, ((i.$low << 24 >>> 24)));
    	};
appendVarInt0vendor/golang.org/x/net/http2/hpack.appendVarInt 5vendor/golang.org/x/net/http2/hpack.appendHpackString#vendor/golang.org/x/net/http2/hpackappendHpackString appendHpackString�C	appendHpackString = function(dst, s) {
		var dst, first, huffmanLength, s, x;
  		huffmanLength = HuffmanEncodeLength(s);
    		if ((x = (new $Uint64(0, s.length)), (huffmanLength.$high < x.$high || (huffmanLength.$high === x.$high && huffmanLength.$low < x.$low)))) {
  W			first = dst.$length;
  k			dst = appendVarInt(dst, 7, huffmanLength);
  �			dst = AppendHuffmanString(dst, s);
  �			((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first] = ((((first < 0 || first >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + first]) | (128)) >>> 0));
    		} else {
  �			dst = appendVarInt(dst, 7, (new $Uint64(0, s.length)));
  			dst = $appendSlice(dst, s);
    		}
  #		return dst;
    	};
appendHpackString7vendor/golang.org/x/net/http2/hpack.AppendHuffmanString7vendor/golang.org/x/net/http2/hpack.HuffmanEncodeLength5vendor/golang.org/x/net/http2/hpack.appendHpackString0vendor/golang.org/x/net/http2/hpack.appendVarInt 2vendor/golang.org/x/net/http2/hpack.encodeTypeByte#vendor/golang.org/x/net/http2/hpackencodeTypeByte encodeTypeByte��	encodeTypeByte = function(indexing, sensitive) {
		var indexing, sensitive;
    		if (sensitive) {
  �			return 16;
    		}
    		if (indexing) {
  �			return 64;
    		}
  �		return 0;
    	};
encodeTypeByte2vendor/golang.org/x/net/http2/hpack.encodeTypeByte 9(vendor/golang.org/x/net/http2/hpack.DecodingError).Error �	DecodingError.ptr.prototype.Error = function() {
		var $24r, _r, de, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; de = $f.de; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		de = this;
  		_r = fmt.Sprintf("decoding error: %v", new sliceType([de.Err])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: DecodingError.ptr.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.de = de; $f.$s = $s; $f.$r = $r; return $f;
	};
	DecodingError.prototype.Error = function() { return this.$val.Error(); };
DecodingErrorfmt.Sprintf1vendor/golang.org/x/net/http2/hpack.DecodingError-vendor/golang.org/x/net/http2/hpack.sliceType =(vendor/golang.org/x/net/http2/hpack.InvalidIndexError).Error �[	InvalidIndexError.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this.$val;
  )		_r = fmt.Sprintf("invalid indexed representation index %d", new sliceType([new $Int(((e >> 0)))])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: InvalidIndexError.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(InvalidIndexError).prototype.Error = function() { return new InvalidIndexError(this.$get()).Error(); };
InvalidIndexErrorfmt.Sprintf5vendor/golang.org/x/net/http2/hpack.InvalidIndexError-vendor/golang.org/x/net/http2/hpack.sliceType :(vendor/golang.org/x/net/http2/hpack.HeaderField).IsPseudo ��	HeaderField.ptr.prototype.IsPseudo = function() {
		var hf;
		hf = this;
  !a		return !((hf.Name.length === 0)) && (hf.Name.charCodeAt(0) === 58);
    	};
	HeaderField.prototype.IsPseudo = function() { return this.$val.IsPseudo(); };
HeaderField/vendor/golang.org/x/net/http2/hpack.HeaderField 8(vendor/golang.org/x/net/http2/hpack.HeaderField).String ��	HeaderField.ptr.prototype.String = function() {
		var $24r, _r, hf, suffix, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; hf = $f.hf; suffix = $f.suffix; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		hf = this;
  !�		suffix = "";
    		if (hf.Sensitive) {
  !�			suffix = " (sensitive)";
    		}
  !�		_r = fmt.Sprintf("header field %q = %q%s", new sliceType([new $String(hf.Name), new $String(hf.Value), new $String(suffix)])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: HeaderField.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f.hf = hf; $f.suffix = suffix; $f.$s = $s; $f.$r = $r; return $f;
	};
	HeaderField.prototype.String = function() { return this.$val.String(); };
HeaderFieldfmt.Sprintf/vendor/golang.org/x/net/http2/hpack.HeaderField-vendor/golang.org/x/net/http2/hpack.sliceType 6(vendor/golang.org/x/net/http2/hpack.HeaderField).Size ��	HeaderField.ptr.prototype.Size = function() {
		var hf;
		hf = this;
  %		return ((((hf.Name.length + hf.Value.length >> 0) + 32 >> 0) >>> 0));
    	};
	HeaderField.prototype.Size = function() { return this.$val.Size(); };
HeaderField/vendor/golang.org/x/net/http2/hpack.HeaderField .vendor/golang.org/x/net/http2/hpack.NewDecoder#vendor/golang.org/x/net/http2/hpack
NewDecoder 
NewDecoder�:	NewDecoder = function(maxDynamicTableSize, emitFunc) {
		var d, emitFunc, maxDynamicTableSize, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; d = $f.d; emitFunc = $f.emitFunc; maxDynamicTableSize = $f.maxDynamicTableSize; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  )C		d = new Decoder.ptr(new dynamicTable.ptr(new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false), 0, 0, 0), emitFunc, true, 0, sliceType$1.nil, new bytes.Buffer.ptr(sliceType$1.nil, 0, 0), true);
  )�		d.dynTab.table.init();
  )�		d.dynTab.allowedMaxSize = maxDynamicTableSize;
  )�		$r = d.dynTab.setMaxSize(maxDynamicTableSize); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  *			$s = -1; return d;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewDecoder }; } $f.d = d; $f.emitFunc = emitFunc; $f.maxDynamicTableSize = maxDynamicTableSize; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewDecoder = NewDecoder;

NewDecoder	bytes.Buffer+vendor/golang.org/x/net/http2/hpack.Decoder.vendor/golang.org/x/net/http2/hpack.NewDecoder0vendor/golang.org/x/net/http2/hpack.dynamicTable4vendor/golang.org/x/net/http2/hpack.headerFieldTable)vendor/golang.org/x/net/http2/hpack.init~/vendor/golang.org/x/net/http2/hpack.setMaxSize~/vendor/golang.org/x/net/http2/hpack.sliceType$1/vendor/golang.org/x/net/http2/hpack.sliceType$2 A(*vendor/golang.org/x/net/http2/hpack.Decoder).SetMaxStringLength ��	Decoder.ptr.prototype.SetMaxStringLength = function(n) {
		var d, n;
		d = this;
  ,		d.maxStrLen = n;
    	};
	Decoder.prototype.SetMaxStringLength = function(n) { return this.$val.SetMaxStringLength(n); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder :(*vendor/golang.org/x/net/http2/hpack.Decoder).SetEmitFunc ��	Decoder.ptr.prototype.SetEmitFunc = function(emitFunc) {
		var d, emitFunc;
		d = this;
  ,�		d.emit = emitFunc;
    	};
	Decoder.prototype.SetEmitFunc = function(emitFunc) { return this.$val.SetEmitFunc(emitFunc); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder =(*vendor/golang.org/x/net/http2/hpack.Decoder).SetEmitEnabled ��	Decoder.ptr.prototype.SetEmitEnabled = function(v) {
		var d, v;
		d = this;
  .�		d.emitEnabled = v;
    	};
	Decoder.prototype.SetEmitEnabled = function(v) { return this.$val.SetEmitEnabled(v); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder :(*vendor/golang.org/x/net/http2/hpack.Decoder).EmitEnabled ��	Decoder.ptr.prototype.EmitEnabled = function() {
		var d;
		d = this;
  /M		return d.emitEnabled;
    	};
	Decoder.prototype.EmitEnabled = function() { return this.$val.EmitEnabled(); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder E(*vendor/golang.org/x/net/http2/hpack.Decoder).SetMaxDynamicTableSize ��	Decoder.ptr.prototype.SetMaxDynamicTableSize = function(v) {
		var d, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; d = $f.d; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  0&		$r = d.dynTab.setMaxSize(v); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.SetMaxDynamicTableSize }; } $f.d = d; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.SetMaxDynamicTableSize = function(v) { return this.$val.SetMaxDynamicTableSize(v); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder/vendor/golang.org/x/net/http2/hpack.setMaxSize~ L(*vendor/golang.org/x/net/http2/hpack.Decoder).SetAllowedMaxDynamicTableSize �	Decoder.ptr.prototype.SetAllowedMaxDynamicTableSize = function(v) {
		var d, v;
		d = this;
  1		d.dynTab.allowedMaxSize = v;
    	};
	Decoder.prototype.SetAllowedMaxDynamicTableSize = function(v) { return this.$val.SetAllowedMaxDynamicTableSize(v); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder >(*vendor/golang.org/x/net/http2/hpack.dynamicTable).setMaxSize ��	dynamicTable.ptr.prototype.setMaxSize = function(v) {
		var dt, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dt = $f.dt; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dt = this;
  2r		dt.maxSize = v;
  2�		$r = dt.evict(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: dynamicTable.ptr.prototype.setMaxSize }; } $f.dt = dt; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	dynamicTable.prototype.setMaxSize = function(v) { return this.$val.setMaxSize(v); };
dynamicTablesetMaxSize~0vendor/golang.org/x/net/http2/hpack.dynamicTable*vendor/golang.org/x/net/http2/hpack.evict~ 7(*vendor/golang.org/x/net/http2/hpack.dynamicTable).add �
	dynamicTable.ptr.prototype.add = function(f) {
		var dt, f, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dt = $f.dt; f = $f.f; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dt = this;
  2�		dt.table.addEntry($clone(f, HeaderField));
  2�		dt.size = dt.size + ($clone(f, HeaderField).Size()) >>> 0;
  2�		$r = dt.evict(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: dynamicTable.ptr.prototype.add }; } $f.dt = dt; $f.f = f; $f.$s = $s; $f.$r = $r; return $f;
	};
	dynamicTable.prototype.add = function(f) { return this.$val.add(f); };
dynamicTableadd~/vendor/golang.org/x/net/http2/hpack.HeaderField-vendor/golang.org/x/net/http2/hpack.addEntry~0vendor/golang.org/x/net/http2/hpack.dynamicTable*vendor/golang.org/x/net/http2/hpack.evict~ 9(*vendor/golang.org/x/net/http2/hpack.dynamicTable).evict �	dynamicTable.ptr.prototype.evict = function() {
		var dt, n, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dt = $f.dt; n = $f.n; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dt = this;
  3D		n = 0;
  3K		while (true) {
			if (!(dt.size > dt.maxSize && n < dt.table.len())) { break; }
  3~			dt.size = dt.size - ($clone((x = dt.table.ents, ((n < 0 || n >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + n])), HeaderField).Size()) >>> 0;
  3�			n = n + (1) >> 0;
    		}
  3�		$r = dt.table.evictOldest(n); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: dynamicTable.ptr.prototype.evict }; } $f.dt = dt; $f.n = n; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	dynamicTable.prototype.evict = function() { return this.$val.evict(); };
dynamicTableevict~/vendor/golang.org/x/net/http2/hpack.HeaderField0vendor/golang.org/x/net/http2/hpack.dynamicTable0vendor/golang.org/x/net/http2/hpack.evictOldest~(vendor/golang.org/x/net/http2/hpack.len~ <(*vendor/golang.org/x/net/http2/hpack.Decoder).maxTableIndex ��	Decoder.ptr.prototype.maxTableIndex = function() {
		var d;
		d = this;
  4�		return d.dynTab.table.len() + staticTable.len() >> 0;
    	};
	Decoder.prototype.maxTableIndex = function() { return this.$val.maxTableIndex(); };
DecodermaxTableIndex~+vendor/golang.org/x/net/http2/hpack.Decoder(vendor/golang.org/x/net/http2/hpack.len~/vendor/golang.org/x/net/http2/hpack.staticTable 1(*vendor/golang.org/x/net/http2/hpack.Decoder).at �]	Decoder.ptr.prototype.at = function(i) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, d, dt, hf, i, ok, x, x$1, x$2, x$3, x$4, x$5;
		hf = new HeaderField.ptr("", "", false);
		ok = false;
		d = this;
    		if ((i.$high === 0 && i.$low === 0)) {
  5[			return [hf, ok];
    		}
    		if ((x = (new $Uint64(0, staticTable.len())), (i.$high < x.$high || (i.$high === x.$high && i.$low <= x.$low)))) {
    			_tmp = $clone((x$1 = staticTable.ents, x$2 = new $Uint64(i.$high - 0, i.$low - 1), (($flatten64(x$2) < 0 || $flatten64(x$2) >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + $flatten64(x$2)])), HeaderField);
			_tmp$1 = true;
			HeaderField.copy(hf, _tmp);
			ok = _tmp$1;
			return [hf, ok];
    		}
    		if ((x$3 = (new $Uint64(0, d.maxTableIndex())), (i.$high > x$3.$high || (i.$high === x$3.$high && i.$low > x$3.$low)))) {
  5�			return [hf, ok];
    		}
  6~		dt = $clone(d.dynTab.table, headerFieldTable);
    		_tmp$2 = $clone((x$4 = dt.ents, x$5 = dt.len() - ((((i.$low >> 0)) - staticTable.len() >> 0)) >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5])), HeaderField);
		_tmp$3 = true;
		HeaderField.copy(hf, _tmp$2);
		ok = _tmp$3;
		return [hf, ok];
    	};
	Decoder.prototype.at = function(i) { return this.$val.at(i); };
Decoderat~+vendor/golang.org/x/net/http2/hpack.Decoder/vendor/golang.org/x/net/http2/hpack.HeaderField4vendor/golang.org/x/net/http2/hpack.headerFieldTable(vendor/golang.org/x/net/http2/hpack.len~2vendor/golang.org/x/net/http2/hpack.maxTableIndex~/vendor/golang.org/x/net/http2/hpack.staticTable 9(*vendor/golang.org/x/net/http2/hpack.Decoder).DecodeFull �	R	Decoder.ptr.prototype.DecodeFull = function(p) {
		var $24r, $24r$1, $24r$2, _r, _tuple, d, err, err$1, hf, p, saveFunc, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _tuple = $f._tuple; d = $f.d; err = $f.err; err$1 = $f.err$1; hf = $f.hf; p = $f.p; saveFunc = $f.saveFunc; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		d = [d];
		hf = [hf];
		saveFunc = [saveFunc];
		d[0] = this;
  7�		hf[0] = sliceType$2.nil;
  7�		saveFunc[0] = d[0].emit;
  7�		$deferred.push([(function(d, hf, saveFunc) { return function() {
  7�			d[0].emit = saveFunc[0];
    		}; })(d, hf, saveFunc), []]);
  7�		d[0].emit = (function(d, hf, saveFunc) { return function(f) {
			var f;
  8			hf[0] = $append(hf[0], f);
    		}; })(d, hf, saveFunc);
  8 		_r = d[0].Write(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
  8		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  8E			$24r = [sliceType$2.nil, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  8\		err$1 = d[0].Close();
  8Y		/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 5:
  8}			$24r$1 = [sliceType$2.nil, err$1];
			$s = 7; case 7: return $24r$1;
    		/* } */ case 6:
  8�		$24r$2 = [hf[0], $ifaceNil];
		$s = 8; case 8: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [sliceType$2.nil, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.DecodeFull }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._tuple = _tuple; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.hf = hf; $f.p = p; $f.saveFunc = saveFunc; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Decoder.prototype.DecodeFull = function(p) { return this.$val.DecodeFull(p); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder/vendor/golang.org/x/net/http2/hpack.sliceType$2 4(*vendor/golang.org/x/net/http2/hpack.Decoder).Close �u	Decoder.ptr.prototype.Close = function() {
		var d, x;
		d = this;
    		if (d.saveBuf.Len() > 0) {
  9�			d.saveBuf.Reset();
  9�			return (x = new DecodingError.ptr(errors.New("truncated headers")), new x.constructor.elem(x));
    		}
  9�		d.firstField = true;
  :		return $ifaceNil;
    	};
	Decoder.prototype.Close = function() { return this.$val.Close(); };
Decoder
errors.New+vendor/golang.org/x/net/http2/hpack.Decoder1vendor/golang.org/x/net/http2/hpack.DecodingError 4(*vendor/golang.org/x/net/http2/hpack.Decoder).Write ��	Decoder.ptr.prototype.Write = function(p) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, d, err, n, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; d = $f.d; err = $f.err; n = $f.n; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
    		if (p.$length === 0) {
  :�			$s = -1; return [n, err];
    		}
  ;]		/* */ if (d.saveBuf.Len() === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.saveBuf.Len() === 0) { */ case 1:
  ;y			d.buf = p;
    			$s = 3; continue;
		/* } else { */ case 2:
  ;�			_r = d.saveBuf.Write(p); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
  ;�			d.buf = d.saveBuf.Bytes();
  ;�			d.saveBuf.Reset();
    		/* } */ case 3:
  ;�		/* while (true) { */ case 5:
			/* if (!(d.buf.$length > 0)) { break; } */ if(!(d.buf.$length > 0)) { $s = 6; continue; }
  ;�			_r$1 = d.parseHeaderFieldRepr(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err = _r$1;
  <			/* */ if ($interfaceIsEqual(err, errNeedMore)) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if ($interfaceIsEqual(err, errNeedMore)) { */ case 8:
    				if (!((d.maxStrLen === 0)) && (x = (new $Int64(0, d.buf.$length)), x$1 = $mul64(new $Int64(0, 2), ((x$2 = (new $Int64(0, d.maxStrLen)), new $Int64(x$2.$high + 0, x$2.$low + 8)))), (x.$high > x$1.$high || (x.$high === x$1.$high && x.$low > x$1.$low)))) {
    					_tmp = 0;
					_tmp$1 = $pkg.ErrStringLength;
					n = _tmp;
					err = _tmp$1;
					$s = -1; return [n, err];
    				}
  =�				_r$2 = d.saveBuf.Write(d.buf); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$2;
    				_tmp$2 = p.$length;
				_tmp$3 = $ifaceNil;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			/* } */ case 9:
  =�			d.firstField = false;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  >				/* break; */ $s = 6; continue;
    			}
    		$s = 5; continue;
		case 6:
    		_tmp$4 = p.$length;
		_tmp$5 = err;
		n = _tmp$4;
		err = _tmp$5;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.Write }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.d = d; $f.err = err; $f.n = n; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.Write = function(p) { return this.$val.Write(p); };
Decoder+vendor/golang.org/x/net/http2/hpack.Decoder3vendor/golang.org/x/net/http2/hpack.ErrStringLength/vendor/golang.org/x/net/http2/hpack.errNeedMore9vendor/golang.org/x/net/http2/hpack.parseHeaderFieldRepr~ 7(vendor/golang.org/x/net/http2/hpack.indexType).indexed ��	indexType.prototype.indexed = function() {
		var v;
		v = this.$val;
  ?�		return v === 0;
    	};
	$ptrType(indexType).prototype.indexed = function() { return new indexType(this.$get()).indexed(); };
	indexTypeindexed~-vendor/golang.org/x/net/http2/hpack.indexType 9(vendor/golang.org/x/net/http2/hpack.indexType).sensitive ��	indexType.prototype.sensitive = function() {
		var v;
		v = this.$val;
  ?�		return v === 2;
    	};
	$ptrType(indexType).prototype.sensitive = function() { return new indexType(this.$get()).sensitive(); };
	indexType
sensitive~-vendor/golang.org/x/net/http2/hpack.indexType C(*vendor/golang.org/x/net/http2/hpack.Decoder).parseHeaderFieldRepr ��	Decoder.ptr.prototype.parseHeaderFieldRepr = function() {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, _r, _r$1, _r$2, _r$3, _r$4, b, d, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; b = $f.b; d = $f.d; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  @�		b = (x = d.buf, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
  @�			/* */ if (!((((b & 128) >>> 0) === 0))) { $s = 2; continue; }
			/* */ if ((((b & 192) >>> 0) === 64)) { $s = 3; continue; }
			/* */ if ((((b & 240) >>> 0) === 0)) { $s = 4; continue; }
			/* */ if ((((b & 240) >>> 0) === 16)) { $s = 5; continue; }
			/* */ if ((((b & 224) >>> 0) === 32)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!((((b & 128) >>> 0) === 0))) { */ case 2:
  Af				_r = d.parseFieldIndexed(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 9; case 9: return $24r;
    			/* } else if ((((b & 192) >>> 0) === 64)) { */ case 3:
  BA				_r$1 = d.parseFieldLiteral(6, 0); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r$1 = _r$1;
				$s = 11; case 11: return $24r$1;
    			/* } else if ((((b & 240) >>> 0) === 0)) { */ case 4:
  C#				_r$2 = d.parseFieldLiteral(4, 1); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$24r$2 = _r$2;
				$s = 13; case 13: return $24r$2;
    			/* } else if ((((b & 240) >>> 0) === 16)) { */ case 5:
  D				_r$3 = d.parseFieldLiteral(4, 2); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				$24r$3 = _r$3;
				$s = 15; case 15: return $24r$3;
    			/* } else if ((((b & 224) >>> 0) === 32)) { */ case 6:
  D�				_r$4 = d.parseDynamicTableSizeUpdate(); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				$24r$4 = _r$4;
				$s = 17; case 17: return $24r$4;
    			/* } */ case 7:
    		case 1:
  D�		$s = -1; return (x$1 = new DecodingError.ptr(errors.New("invalid encoding")), new x$1.constructor.elem(x$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.parseHeaderFieldRepr }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.b = b; $f.d = d; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.parseHeaderFieldRepr = function() { return this.$val.parseHeaderFieldRepr(); };
DecoderparseHeaderFieldRepr~
errors.New+vendor/golang.org/x/net/http2/hpack.Decoder1vendor/golang.org/x/net/http2/hpack.DecodingError@vendor/golang.org/x/net/http2/hpack.parseDynamicTableSizeUpdate~6vendor/golang.org/x/net/http2/hpack.parseFieldIndexed~6vendor/golang.org/x/net/http2/hpack.parseFieldLiteral~ @(*vendor/golang.org/x/net/http2/hpack.Decoder).parseFieldIndexed �	Decoder.ptr.prototype.parseFieldIndexed = function() {
		var $24r, _r, _tuple, _tuple$1, buf, d, err, hf, idx, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; buf = $f.buf; d = $f.d; err = $f.err; hf = $f.hf; idx = $f.idx; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  E�		buf = d.buf;
  E�		_tuple = readVarInt(7, buf);
		idx = _tuple[0];
		buf = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  E�			$s = -1; return err;
    		}
  E�		_tuple$1 = d.at(idx);
		hf = $clone(_tuple$1[0], HeaderField);
		ok = _tuple$1[1];
    		if (!ok) {
  F			$s = -1; return (x = new DecodingError.ptr(new InvalidIndexError(((idx.$low >> 0)))), new x.constructor.elem(x));
    		}
  FA		d.buf = buf;
  FN		_r = d.callEmit(new HeaderField.ptr(hf.Name, hf.Value, false)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.parseFieldIndexed }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.buf = buf; $f.d = d; $f.err = err; $f.hf = hf; $f.idx = idx; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.parseFieldIndexed = function() { return this.$val.parseFieldIndexed(); };
DecoderparseFieldIndexed~+vendor/golang.org/x/net/http2/hpack.Decoder1vendor/golang.org/x/net/http2/hpack.DecodingError/vendor/golang.org/x/net/http2/hpack.HeaderField5vendor/golang.org/x/net/http2/hpack.InvalidIndexError'vendor/golang.org/x/net/http2/hpack.at~-vendor/golang.org/x/net/http2/hpack.callEmit~.vendor/golang.org/x/net/http2/hpack.readVarInt @(*vendor/golang.org/x/net/http2/hpack.Decoder).parseFieldLiteral �T	Decoder.ptr.prototype.parseFieldLiteral = function(n, it) {
		var $24r, _r, _r$1, _r$2, _tuple, _tuple$1, _tuple$2, _tuple$3, buf, d, err, hf, ihf, it, n, nameIdx, ok, wantStr, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; buf = $f.buf; d = $f.d; err = $f.err; hf = $f.hf; ihf = $f.ihf; it = $f.it; n = $f.n; nameIdx = $f.nameIdx; ok = $f.ok; wantStr = $f.wantStr; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  G		buf = d.buf;
  G		_tuple = readVarInt(n, buf);
		nameIdx = _tuple[0];
		buf = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  GW			$s = -1; return err;
    		}
  Gk		hf = new HeaderField.ptr("", "", false);
  G{		wantStr = d.emitEnabled || new indexType(it).indexed();
  G�		/* */ if ((nameIdx.$high > 0 || (nameIdx.$high === 0 && nameIdx.$low > 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((nameIdx.$high > 0 || (nameIdx.$high === 0 && nameIdx.$low > 0))) { */ case 1:
  G�			_tuple$1 = d.at(nameIdx);
			ihf = $clone(_tuple$1[0], HeaderField);
			ok = _tuple$1[1];
    			if (!ok) {
  G�				$s = -1; return (x = new DecodingError.ptr(new InvalidIndexError(((nameIdx.$low >> 0)))), new x.constructor.elem(x));
    			}
  H			hf.Name = ihf.Name;
    			$s = 3; continue;
		/* } else { */ case 2:
  H5			_r = d.readString(buf, wantStr); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple$2 = _r;
			hf.Name = _tuple$2[0];
			buf = _tuple$2[1];
			err = _tuple$2[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  Hy				$s = -1; return err;
    			}
    		/* } */ case 3:
  H�		_r$1 = d.readString(buf, wantStr); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$3 = _r$1;
		hf.Value = _tuple$3[0];
		buf = _tuple$3[1];
		err = _tuple$3[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  H�			$s = -1; return err;
    		}
  H�		d.buf = buf;
  H�		/* */ if (new indexType(it).indexed()) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (new indexType(it).indexed()) { */ case 6:
  H�			$r = d.dynTab.add($clone(hf, HeaderField)); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 7:
  I		hf.Sensitive = new indexType(it).sensitive();
  I3		_r$2 = d.callEmit($clone(hf, HeaderField)); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 10; case 10: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.parseFieldLiteral }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.buf = buf; $f.d = d; $f.err = err; $f.hf = hf; $f.ihf = ihf; $f.it = it; $f.n = n; $f.nameIdx = nameIdx; $f.ok = ok; $f.wantStr = wantStr; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.parseFieldLiteral = function(n, it) { return this.$val.parseFieldLiteral(n, it); };
DecoderparseFieldLiteral~+vendor/golang.org/x/net/http2/hpack.Decoder1vendor/golang.org/x/net/http2/hpack.DecodingError/vendor/golang.org/x/net/http2/hpack.HeaderField5vendor/golang.org/x/net/http2/hpack.InvalidIndexError(vendor/golang.org/x/net/http2/hpack.add~'vendor/golang.org/x/net/http2/hpack.at~-vendor/golang.org/x/net/http2/hpack.callEmit~-vendor/golang.org/x/net/http2/hpack.indexType,vendor/golang.org/x/net/http2/hpack.indexed~/vendor/golang.org/x/net/http2/hpack.readString~.vendor/golang.org/x/net/http2/hpack.readVarInt.vendor/golang.org/x/net/http2/hpack.sensitive~ 7(*vendor/golang.org/x/net/http2/hpack.Decoder).callEmit �	Decoder.ptr.prototype.callEmit = function(hf) {
		var d, hf, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; d = $f.d; hf = $f.hf; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((d.maxStrLen === 0))) {
    			if (hf.Name.length > d.maxStrLen || hf.Value.length > d.maxStrLen) {
  I�				$s = -1; return $pkg.ErrStringLength;
    			}
    		}
  I�		/* */ if (d.emitEnabled) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.emitEnabled) { */ case 1:
  J			$r = d.emit($clone(hf, HeaderField)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
  J		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.callEmit }; } $f.d = d; $f.hf = hf; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.callEmit = function(hf) { return this.$val.callEmit(hf); };
Decoder	callEmit~+vendor/golang.org/x/net/http2/hpack.Decoder3vendor/golang.org/x/net/http2/hpack.ErrStringLength/vendor/golang.org/x/net/http2/hpack.HeaderField J(*vendor/golang.org/x/net/http2/hpack.Decoder).parseDynamicTableSizeUpdate ��	Decoder.ptr.prototype.parseDynamicTableSizeUpdate = function() {
		var _tuple, buf, d, err, size, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tuple = $f._tuple; buf = $f.buf; d = $f.d; err = $f.err; size = $f.size; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!d.firstField && d.dynTab.size > 0) {
  Kh			$s = -1; return (x = new DecodingError.ptr(errors.New("dynamic table size update MUST occur at the beginning of a header block")), new x.constructor.elem(x));
    		}
  K�		buf = d.buf;
  K�		_tuple = readVarInt(5, buf);
		size = _tuple[0];
		buf = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  L			$s = -1; return err;
    		}
    		if ((x$1 = (new $Uint64(0, d.dynTab.allowedMaxSize)), (size.$high > x$1.$high || (size.$high === x$1.$high && size.$low > x$1.$low)))) {
  L\			$s = -1; return (x$2 = new DecodingError.ptr(errors.New("dynamic table size update too large")), new x$2.constructor.elem(x$2));
    		}
  L�		$r = d.dynTab.setMaxSize(((size.$low >>> 0))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  L�		d.buf = buf;
  L�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.parseDynamicTableSizeUpdate }; } $f._tuple = _tuple; $f.buf = buf; $f.d = d; $f.err = err; $f.size = size; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Decoder.prototype.parseDynamicTableSizeUpdate = function() { return this.$val.parseDynamicTableSizeUpdate(); };
DecoderparseDynamicTableSizeUpdate~
errors.New+vendor/golang.org/x/net/http2/hpack.Decoder1vendor/golang.org/x/net/http2/hpack.DecodingError.vendor/golang.org/x/net/http2/hpack.readVarInt/vendor/golang.org/x/net/http2/hpack.setMaxSize~ .vendor/golang.org/x/net/http2/hpack.readVarInt#vendor/golang.org/x/net/http2/hpack
readVarInt 
readVarInt�	�	readVarInt = function(n, p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, b, err, i, m, n, origP, p, remain, x, x$1, x$2, x$3, x$4, x$5;
		i = new $Uint64(0, 0);
		remain = sliceType$1.nil;
		err = $ifaceNil;
    		if (n < 1 || n > 8) {
  O			$panic(new $String("bad n"));
    		}
    		if (p.$length === 0) {
    			_tmp = new $Uint64(0, 0);
			_tmp$1 = p;
			_tmp$2 = errNeedMore;
			i = _tmp;
			remain = _tmp$1;
			err = _tmp$2;
			return [i, remain, err];
    		}
  OR		i = (new $Uint64(0, (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0])));
    		if (n < 8) {
  Oq			i = (x = (x$1 = $shiftLeft64(new $Uint64(0, 1), $flatten64((new $Uint64(0, n)))), new $Uint64(x$1.$high - 0, x$1.$low - 1)), new $Uint64(i.$high & x.$high, (i.$low & x.$low) >>> 0));
    		}
    		if ((x$2 = (x$3 = $shiftLeft64(new $Uint64(0, 1), $flatten64((new $Uint64(0, n)))), new $Uint64(x$3.$high - 0, x$3.$low - 1)), (i.$high < x$2.$high || (i.$high === x$2.$high && i.$low < x$2.$low)))) {
    			_tmp$3 = i;
			_tmp$4 = $subslice(p, 1);
			_tmp$5 = $ifaceNil;
			i = _tmp$3;
			remain = _tmp$4;
			err = _tmp$5;
			return [i, remain, err];
    		}
  O�		origP = p;
  O�		p = $subslice(p, 1);
  O�		m = new $Uint64(0, 0);
  O�		while (true) {
			if (!(p.$length > 0)) { break; }
  O�			b = (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]);
  P				p = $subslice(p, 1);
  P			i = (x$4 = $shiftLeft64((new $Uint64(0, ((b & 127) >>> 0))), $flatten64(m)), new $Uint64(i.$high + x$4.$high, i.$low + x$4.$low));
    			if (((b & 128) >>> 0) === 0) {
    				_tmp$6 = i;
				_tmp$7 = p;
				_tmp$8 = $ifaceNil;
				i = _tmp$6;
				remain = _tmp$7;
				err = _tmp$8;
				return [i, remain, err];
    			}
  PY			m = (x$5 = new $Uint64(0, 7), new $Uint64(m.$high + x$5.$high, m.$low + x$5.$low));
    			if ((m.$high > 0 || (m.$high === 0 && m.$low >= 63))) {
    				_tmp$9 = new $Uint64(0, 0);
				_tmp$10 = origP;
				_tmp$11 = new errVarintOverflow.constructor.elem(errVarintOverflow);
				i = _tmp$9;
				remain = _tmp$10;
				err = _tmp$11;
				return [i, remain, err];
    			}
    		}
    		_tmp$12 = new $Uint64(0, 0);
		_tmp$13 = origP;
		_tmp$14 = errNeedMore;
		i = _tmp$12;
		remain = _tmp$13;
		err = _tmp$14;
		return [i, remain, err];
    	};

readVarInt/vendor/golang.org/x/net/http2/hpack.errNeedMore5vendor/golang.org/x/net/http2/hpack.errVarintOverflow.vendor/golang.org/x/net/http2/hpack.readVarInt/vendor/golang.org/x/net/http2/hpack.sliceType$1 9(*vendor/golang.org/x/net/http2/hpack.Decoder).readString ��	Decoder.ptr.prototype.readString = function(p, wantStr) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, _r, _r$1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, buf, d, err, err$1, isHuff, p, remain, s, strLen, wantStr, x, x$1, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; buf = $f.buf; d = $f.d; err = $f.err; err$1 = $f.err$1; isHuff = $f.isHuff; p = $f.p; remain = $f.remain; s = $f.s; strLen = $f.strLen; wantStr = $f.wantStr; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		s = "";
		remain = sliceType$1.nil;
		err = $ifaceNil;
		d = this;
  R�		/* */ if (p.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.$length === 0) { */ case 1:
    			_tmp = "";
			_tmp$1 = p;
			_tmp$2 = errNeedMore;
			s = _tmp;
			remain = _tmp$1;
			err = _tmp$2;
			$24r = [s, remain, err];
			$s = 3; case 3: return $24r;
    		/* } */ case 2:
  S%		isHuff = !(((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) & 128) >>> 0) === 0));
  S>		_tuple = readVarInt(7, p);
		strLen = _tuple[0];
		p = _tuple[1];
		err = _tuple[2];
  Sb		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 4:
    			_tmp$3 = "";
			_tmp$4 = p;
			_tmp$5 = err;
			s = _tmp$3;
			remain = _tmp$4;
			err = _tmp$5;
			$24r$1 = [s, remain, err];
			$s = 6; case 6: return $24r$1;
    		/* } */ case 5:
  S�		/* */ if (!((d.maxStrLen === 0)) && (x = (new $Uint64(0, d.maxStrLen)), (strLen.$high > x.$high || (strLen.$high === x.$high && strLen.$low > x.$low)))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!((d.maxStrLen === 0)) && (x = (new $Uint64(0, d.maxStrLen)), (strLen.$high > x.$high || (strLen.$high === x.$high && strLen.$low > x.$low)))) { */ case 7:
    			_tmp$6 = "";
			_tmp$7 = sliceType$1.nil;
			_tmp$8 = $pkg.ErrStringLength;
			s = _tmp$6;
			remain = _tmp$7;
			err = _tmp$8;
			$24r$2 = [s, remain, err];
			$s = 9; case 9: return $24r$2;
    		/* } */ case 8:
  S�		/* */ if ((x$1 = (new $Uint64(0, p.$length)), (x$1.$high < strLen.$high || (x$1.$high === strLen.$high && x$1.$low < strLen.$low)))) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if ((x$1 = (new $Uint64(0, p.$length)), (x$1.$high < strLen.$high || (x$1.$high === strLen.$high && x$1.$low < strLen.$low)))) { */ case 10:
    			_tmp$9 = "";
			_tmp$10 = p;
			_tmp$11 = errNeedMore;
			s = _tmp$9;
			remain = _tmp$10;
			err = _tmp$11;
			$24r$3 = [s, remain, err];
			$s = 12; case 12: return $24r$3;
    		/* } */ case 11:
  T#		/* */ if (!isHuff) { $s = 13; continue; }
		/* */ $s = 14; continue;
    		/* if (!isHuff) { */ case 13:
    			if (wantStr) {
  TB				s = ($bytesToString($subslice(p, 0, $flatten64(strLen))));
    			}
    			_tmp$12 = s;
			_tmp$13 = $subslice(p, $flatten64(strLen));
			_tmp$14 = $ifaceNil;
			s = _tmp$12;
			remain = _tmp$13;
			err = _tmp$14;
			$24r$4 = [s, remain, err];
			$s = 15; case 15: return $24r$4;
    		/* } */ case 14:
  T~		/* */ if (wantStr) { $s = 16; continue; }
		/* */ $s = 17; continue;
    		/* if (wantStr) { */ case 16:
  T�			_r = bufPool.Get(); /* */ $s = 18; case 18: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			buf = $assertType(_r, ptrType$1);
  T�			buf.Reset();
  T�			$deferred.push([$methodVal(bufPool, "Put"), [buf]]);
  T�			_r$1 = huffmanDecode(buf, d.maxStrLen, $subslice(p, 0, $flatten64(strLen))); /* */ $s = 19; case 19: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err$1 = _r$1;
  T�			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 20; continue; }
			/* */ $s = 21; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 20:
  U8				buf.Reset();
    				_tmp$15 = "";
				_tmp$16 = sliceType$1.nil;
				_tmp$17 = err$1;
				s = _tmp$15;
				remain = _tmp$16;
				err = _tmp$17;
				$24r$5 = [s, remain, err];
				$s = 22; case 22: return $24r$5;
    			/* } */ case 21:
  Ua			s = buf.String();
  Ut			buf.Reset();
    		/* } */ case 17:
    		_tmp$18 = s;
		_tmp$19 = $subslice(p, $flatten64(strLen));
		_tmp$20 = $ifaceNil;
		s = _tmp$18;
		remain = _tmp$19;
		err = _tmp$20;
		$24r$6 = [s, remain, err];
		$s = 23; case 23: return $24r$6;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [s, remain, err]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Decoder.ptr.prototype.readString }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f.buf = buf; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.isHuff = isHuff; $f.p = p; $f.remain = remain; $f.s = s; $f.strLen = strLen; $f.wantStr = wantStr; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Decoder.prototype.readString = function(p, wantStr) { return this.$val.readString(p, wantStr); };
DecoderreadString~	bytes.Buffer+vendor/golang.org/x/net/http2/hpack.Decoder3vendor/golang.org/x/net/http2/hpack.ErrStringLength+vendor/golang.org/x/net/http2/hpack.bufPool/vendor/golang.org/x/net/http2/hpack.errNeedMore1vendor/golang.org/x/net/http2/hpack.huffmanDecode-vendor/golang.org/x/net/http2/hpack.ptrType$1.vendor/golang.org/x/net/http2/hpack.readVarInt/vendor/golang.org/x/net/http2/hpack.sliceType$1 1vendor/golang.org/x/net/http2/hpack.HuffmanDecode#vendor/golang.org/x/net/http2/hpackHuffmanDecode HuffmanDecode�&	HuffmanDecode = function(w, v) {
		var $24r, $24r$1, _r, _r$1, _r$2, buf, err, v, w, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; buf = $f.buf; err = $f.err; v = $f.v; w = $f.w; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  W�		_r = bufPool.Get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		buf = $assertType(_r, ptrType$1);
  X		buf.Reset();
  X		$deferred.push([$methodVal(bufPool, "Put"), [buf]]);
  X+		_r$1 = huffmanDecode(buf, 0, v); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
  X(		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 3:
  X[			$24r = [0, err];
			$s = 5; case 5: return $24r;
    		/* } */ case 4:
  Xm		_r$2 = w.Write(buf.Bytes()); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = _r$2;
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [0, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: HuffmanDecode }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.buf = buf; $f.err = err; $f.v = v; $f.w = w; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.HuffmanDecode = HuffmanDecode;
HuffmanDecode1vendor/golang.org/x/net/http2/hpack.HuffmanDecode+vendor/golang.org/x/net/http2/hpack.bufPool1vendor/golang.org/x/net/http2/hpack.huffmanDecode-vendor/golang.org/x/net/http2/hpack.ptrType$1 9vendor/golang.org/x/net/http2/hpack.HuffmanDecodeToString#vendor/golang.org/x/net/http2/hpackHuffmanDecodeToString HuffmanDecodeToString��	HuffmanDecodeToString = function(v) {
		var $24r, $24r$1, _r, _r$1, buf, err, v, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; buf = $f.buf; err = $f.err; v = $f.v; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  X�		_r = bufPool.Get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		buf = $assertType(_r, ptrType$1);
  Y		buf.Reset();
  Y)		$deferred.push([$methodVal(bufPool, "Put"), [buf]]);
  YD		_r$1 = huffmanDecode(buf, 0, v); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
  YA		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 3:
  Yt			$24r = ["", err];
			$s = 5; case 5: return $24r;
    		/* } */ case 4:
  Y�		$24r$1 = [buf.String(), $ifaceNil];
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return ["", $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: HuffmanDecodeToString }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.buf = buf; $f.err = err; $f.v = v; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	$pkg.HuffmanDecodeToString = HuffmanDecodeToString;
HuffmanDecodeToString9vendor/golang.org/x/net/http2/hpack.HuffmanDecodeToString+vendor/golang.org/x/net/http2/hpack.bufPool1vendor/golang.org/x/net/http2/hpack.huffmanDecode-vendor/golang.org/x/net/http2/hpack.ptrType$1 1vendor/golang.org/x/net/http2/hpack.huffmanDecode#vendor/golang.org/x/net/http2/hpackhuffmanDecode huffmanDecode�_	huffmanDecode = function(buf, maxLen, v) {
		var _i, _r, _r$1, _r$2, _ref, _tmp, _tmp$1, _tmp$2, b, buf, cbits, cur, idx, mask, maxLen, n, rootHuffmanNode, sbits, v, x, x$1, x$2, y, y$1, y$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; b = $f.b; buf = $f.buf; cbits = $f.cbits; cur = $f.cur; idx = $f.idx; mask = $f.mask; maxLen = $f.maxLen; n = $f.n; rootHuffmanNode = $f.rootHuffmanNode; sbits = $f.sbits; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  [		_r = getRootHuffmanNode(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		rootHuffmanNode = _r;
  [F		n = rootHuffmanNode;
  \		_tmp = 0;
		_tmp$1 = 0;
		_tmp$2 = 0;
		cur = _tmp;
		cbits = _tmp$1;
		sbits = _tmp$2;
  \K		_ref = v;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  \c			cur = ((cur << 8 >>> 0) | ((b >>> 0))) >>> 0;
  \|			cbits = cbits + (8) << 24 >>> 24;
  \�			sbits = sbits + (8) << 24 >>> 24;
  \�			/* while (true) { */ case 4:
				/* if (!(cbits >= 8)) { break; } */ if(!(cbits >= 8)) { $s = 5; continue; }
  \�				idx = ((((y = ((cbits - 8 << 24 >>> 24)), y < 32 ? (cur >>> y) : 0) >>> 0) << 24 >>> 24));
  \�				n = (x = n.children, ((idx < 0 || idx >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[idx]));
    				if (n === ptrType.nil) {
  \�					$s = -1; return $pkg.ErrInvalidHuffman;
    				}
  ]				/* */ if (n.children === ptrType$2.nil) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if (n.children === ptrType$2.nil) { */ case 6:
    					if (!((maxLen === 0)) && (buf.Len() === maxLen)) {
  ]_						$s = -1; return $pkg.ErrStringLength;
    					}
  ]�					_r$1 = buf.WriteByte(n.sym); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_r$1;
  ]�					cbits = cbits - (n.codeLen) << 24 >>> 24;
  ]�					n = rootHuffmanNode;
  ]�					sbits = cbits;
    					$s = 8; continue;
				/* } else { */ case 7:
  ]�					cbits = cbits - (8) << 24 >>> 24;
    				/* } */ case 8:
    			$s = 4; continue;
			case 5:
    			_i++;
		$s = 2; continue;
		case 3:
  ]�		/* while (true) { */ case 10:
			/* if (!(cbits > 0)) { break; } */ if(!(cbits > 0)) { $s = 11; continue; }
  ^			n = (x$1 = n.children, x$2 = ((((y$1 = ((8 - cbits << 24 >>> 24)), y$1 < 32 ? (cur << y$1) : 0) >>> 0) << 24 >>> 24)), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2]));
    			if (n === ptrType.nil) {
  ^H				$s = -1; return $pkg.ErrInvalidHuffman;
    			}
    			if (!(n.children === ptrType$2.nil) || n.codeLen > cbits) {
  ^�				/* break; */ $s = 11; continue;
    			}
    			if (!((maxLen === 0)) && (buf.Len() === maxLen)) {
  ^�				$s = -1; return $pkg.ErrStringLength;
    			}
  ^�			_r$2 = buf.WriteByte(n.sym); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
  _			cbits = cbits - (n.codeLen) << 24 >>> 24;
  _			n = rootHuffmanNode;
  _,			sbits = cbits;
    		$s = 10; continue;
		case 11:
    		if (sbits > 7) {
  _�			$s = -1; return $pkg.ErrInvalidHuffman;
    		}
  _�		mask = ((((y$2 = cbits, y$2 < 32 ? (1 << y$2) : 0) >>> 0) - 1 >>> 0));
    		if (!((((cur & mask) >>> 0) === mask))) {
  `^			$s = -1; return $pkg.ErrInvalidHuffman;
    		}
  `|		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: huffmanDecode }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f.b = b; $f.buf = buf; $f.cbits = cbits; $f.cur = cur; $f.idx = idx; $f.mask = mask; $f.maxLen = maxLen; $f.n = n; $f.rootHuffmanNode = rootHuffmanNode; $f.sbits = sbits; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.$s = $s; $f.$r = $r; return $f;
	};
huffmanDecode5vendor/golang.org/x/net/http2/hpack.ErrInvalidHuffman3vendor/golang.org/x/net/http2/hpack.ErrStringLength-vendor/golang.org/x/net/http2/hpack.arrayType6vendor/golang.org/x/net/http2/hpack.getRootHuffmanNode1vendor/golang.org/x/net/http2/hpack.huffmanDecode+vendor/golang.org/x/net/http2/hpack.ptrType-vendor/golang.org/x/net/http2/hpack.ptrType$2 3vendor/golang.org/x/net/http2/hpack.newInternalNode#vendor/golang.org/x/net/http2/hpacknewInternalNode newInternalNodeq	newInternalNode = function() {
  by		return new node.ptr(arrayType$1.zero(), arrayType.zero(), 0, 0);
    	};
newInternalNode-vendor/golang.org/x/net/http2/hpack.arrayType/vendor/golang.org/x/net/http2/hpack.arrayType$1,vendor/golang.org/x/net/http2/hpack.funcType3vendor/golang.org/x/net/http2/hpack.newInternalNode(vendor/golang.org/x/net/http2/hpack.node+vendor/golang.org/x/net/http2/hpack.ptrType-vendor/golang.org/x/net/http2/hpack.ptrType$2 6vendor/golang.org/x/net/http2/hpack.getRootHuffmanNode#vendor/golang.org/x/net/http2/hpackgetRootHuffmanNode getRootHuffmanNode�*	getRootHuffmanNode = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  c
		$r = buildRootOnce.Do(buildRootHuffmanNode); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c2		$s = -1; return lazyRootHuffmanNode;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: getRootHuffmanNode }; } $f.$s = $s; $f.$r = $r; return $f;
	};
getRootHuffmanNode8vendor/golang.org/x/net/http2/hpack.buildRootHuffmanNode1vendor/golang.org/x/net/http2/hpack.buildRootOnce6vendor/golang.org/x/net/http2/hpack.getRootHuffmanNode7vendor/golang.org/x/net/http2/hpack.lazyRootHuffmanNode 8vendor/golang.org/x/net/http2/hpack.buildRootHuffmanNode#vendor/golang.org/x/net/http2/hpackbuildRootHuffmanNode buildRootHuffmanNode�L	buildRootHuffmanNode = function() {
		var _i, _ref, code, i;
    		if (false) {
  c�			$panic(new $String("unexpected size"));
    		}
  c�		lazyRootHuffmanNode = newInternalNode();
  c�		_ref = huffmanCodes;
		_i = 0;
		while (true) {
			if (!(_i < 256)) { break; }
			i = _i;
			code = ((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]);
  c�			addDecoderNode(((i << 24 >>> 24)), code, ((i < 0 || i >= huffmanCodeLen.length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanCodeLen[i]));
    			_i++;
		}
    	};
buildRootHuffmanNode2vendor/golang.org/x/net/http2/hpack.addDecoderNode8vendor/golang.org/x/net/http2/hpack.buildRootHuffmanNode2vendor/golang.org/x/net/http2/hpack.huffmanCodeLen0vendor/golang.org/x/net/http2/hpack.huffmanCodes7vendor/golang.org/x/net/http2/hpack.lazyRootHuffmanNode3vendor/golang.org/x/net/http2/hpack.newInternalNode 2vendor/golang.org/x/net/http2/hpack.addDecoderNode#vendor/golang.org/x/net/http2/hpackaddDecoderNode addDecoderNode�k	addDecoderNode = function(sym, code, codeLen) {
		var _tmp, _tmp$1, code, codeLen, cur, end, i, i$1, shift, start, sym, x, x$1, x$2, x$3, y, y$1, y$2;
  do		cur = lazyRootHuffmanNode;
  d�		while (true) {
			if (!(codeLen > 8)) { break; }
  d�			codeLen = codeLen - (8) << 24 >>> 24;
  d�			i = ((((y = codeLen, y < 32 ? (code >>> y) : 0) >>> 0) << 24 >>> 24));
    			if ((x = cur.children, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) === ptrType.nil) {
  d�				(x$1 = cur.children, x$1.nilCheck, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i] = newInternalNode()));
    			}
  e			cur = (x$2 = cur.children, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i]));
    		}
  e/		shift = 8 - codeLen << 24 >>> 24;
  eE		_tmp = ((((((y$1 = shift, y$1 < 32 ? (code << y$1) : 0) >>> 0) << 24 >>> 24)) >> 0));
		_tmp$1 = (((y$2 = shift, y$2 < 32 ? (1 << y$2) : 0) >> 0));
		start = _tmp;
		end = _tmp$1;
  e		i$1 = start;
		while (true) {
			if (!(i$1 < (start + end >> 0))) { break; }
  e�			(x$3 = cur.children, x$3.nilCheck, ((i$1 < 0 || i$1 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i$1] = new node.ptr(arrayType$1.zero(), ptrType$2.nil, codeLen, sym)));
  e�			i$1 = i$1 + (1) >> 0;
    		}
    	};
addDecoderNode2vendor/golang.org/x/net/http2/hpack.addDecoderNode/vendor/golang.org/x/net/http2/hpack.arrayType$17vendor/golang.org/x/net/http2/hpack.lazyRootHuffmanNode3vendor/golang.org/x/net/http2/hpack.newInternalNode(vendor/golang.org/x/net/http2/hpack.node+vendor/golang.org/x/net/http2/hpack.ptrType-vendor/golang.org/x/net/http2/hpack.ptrType$2 7vendor/golang.org/x/net/http2/hpack.AppendHuffmanString#vendor/golang.org/x/net/http2/hpackAppendHuffmanString AppendHuffmanString��	AppendHuffmanString = function(dst, s) {
		var _index, _tuple, code, dst, i, nbits, rembits, s, t, y;
  f		rembits = 8;
  f�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (rembits === 8) {
  f�				dst = $append(dst, 0);
    			}
  f�			_tuple = appendByteToHuffmanCode(dst, rembits, s.charCodeAt(i));
			dst = _tuple[0];
			rembits = _tuple[1];
  f�			i = i + (1) >> 0;
    		}
    		if (rembits < 8) {
  gP			code = 1073741823;
  gm			nbits = 30;
  g�			t = ((((y = ((nbits - rembits << 24 >>> 24)), y < 32 ? (code >>> y) : 0) >>> 0) << 24 >>> 24));
    			_index = dst.$length - 1 >> 0;
  g�			((_index < 0 || _index >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index] = ((((_index < 0 || _index >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index]) | (t)) >>> 0));
    		}
  g�		return dst;
    	};
	$pkg.AppendHuffmanString = AppendHuffmanString;
AppendHuffmanString7vendor/golang.org/x/net/http2/hpack.AppendHuffmanString;vendor/golang.org/x/net/http2/hpack.appendByteToHuffmanCode 7vendor/golang.org/x/net/http2/hpack.HuffmanEncodeLength#vendor/golang.org/x/net/http2/hpackHuffmanEncodeLength HuffmanEncodeLength�:	HuffmanEncodeLength = function(s) {
		var i, n, s, x, x$1;
  h�		n = new $Uint64(0, 0);
  h�		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  h�			n = (x = (new $Uint64(0, (x$1 = s.charCodeAt(i), ((x$1 < 0 || x$1 >= huffmanCodeLen.length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanCodeLen[x$1])))), new $Uint64(n.$high + x.$high, n.$low + x.$low));
  h�			i = i + (1) >> 0;
    		}
  h�		return $div64((new $Uint64(n.$high + 0, n.$low + 7)), new $Uint64(0, 8), false);
    	};
	$pkg.HuffmanEncodeLength = HuffmanEncodeLength;
HuffmanEncodeLength7vendor/golang.org/x/net/http2/hpack.HuffmanEncodeLength2vendor/golang.org/x/net/http2/hpack.huffmanCodeLen ;vendor/golang.org/x/net/http2/hpack.appendByteToHuffmanCode#vendor/golang.org/x/net/http2/hpackappendByteToHuffmanCode appendByteToHuffmanCode�E	appendByteToHuffmanCode = function(dst, rembits, c) {
		var _index, _index$1, c, code, dst, nbits, rembits, t, t$1, y, y$1;
  j@		code = ((c < 0 || c >= huffmanCodes.length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanCodes[c]);
  jY		nbits = ((c < 0 || c >= huffmanCodeLen.length) ? ($throwRuntimeError("index out of range"), undefined) : huffmanCodeLen[c]);
  jv		while (true) {
    			if (rembits > nbits) {
  j�				t = ((((y = ((rembits - nbits << 24 >>> 24)), y < 32 ? (code << y) : 0) >>> 0) << 24 >>> 24));
    				_index = dst.$length - 1 >> 0;
  j�				((_index < 0 || _index >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index] = ((((_index < 0 || _index >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index]) | (t)) >>> 0));
  j�				rembits = rembits - (nbits) << 24 >>> 24;
  j�				break;
    			}
  j�			t$1 = ((((y$1 = ((nbits - rembits << 24 >>> 24)), y$1 < 32 ? (code >>> y$1) : 0) >>> 0) << 24 >>> 24));
    			_index$1 = dst.$length - 1 >> 0;
  k 			((_index$1 < 0 || _index$1 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index$1] = ((((_index$1 < 0 || _index$1 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + _index$1]) | (t$1)) >>> 0));
  k8			nbits = nbits - (rembits) << 24 >>> 24;
  kK			rembits = 8;
    			if (nbits === 0) {
  km				break;
    			}
  kz			dst = $append(dst, 0);
    		}
  k�		return [dst, rembits];
    	};
appendByteToHuffmanCode;vendor/golang.org/x/net/http2/hpack.appendByteToHuffmanCode2vendor/golang.org/x/net/http2/hpack.huffmanCodeLen0vendor/golang.org/x/net/http2/hpack.huffmanCodes <(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).init ��	headerFieldTable.ptr.prototype.init = function() {
		var t;
		t = this;
  r)		t.byName = {};
  rM		t.byNameValue = {};
    	};
	headerFieldTable.prototype.init = function() { return this.$val.init(); };
headerFieldTableinit~4vendor/golang.org/x/net/http2/hpack.headerFieldTable ;(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).len ��	headerFieldTable.ptr.prototype.len = function() {
		var t;
		t = this;
  r�		return t.ents.$length;
    	};
	headerFieldTable.prototype.len = function() { return this.$val.len(); };
headerFieldTablelen~4vendor/golang.org/x/net/http2/hpack.headerFieldTable @(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).addEntry ��	headerFieldTable.ptr.prototype.addEntry = function(f) {
		var _key, _key$1, f, id, t, x, x$1, x$2;
		t = this;
  sD		id = (x = (x$1 = (new $Uint64(0, t.len())), x$2 = t.evictCount, new $Uint64(x$1.$high + x$2.$high, x$1.$low + x$2.$low)), new $Uint64(x.$high + 0, x.$low + 1));
  sn		_key = f.Name; (t.byName || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: id };
  s�		_key$1 = new pairNameValue.ptr(f.Name, f.Value); (t.byNameValue || $throwRuntimeError("assignment to entry in nil map"))[pairNameValue.keyFor(_key$1)] = { k: _key$1, v: id };
  s�		t.ents = $append(t.ents, f);
    	};
	headerFieldTable.prototype.addEntry = function(f) { return this.$val.addEntry(f); };
headerFieldTable	addEntry~4vendor/golang.org/x/net/http2/hpack.headerFieldTable(vendor/golang.org/x/net/http2/hpack.len~1vendor/golang.org/x/net/http2/hpack.pairNameValue C(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).evictOldest ��	headerFieldTable.ptr.prototype.evictOldest = function(n) {
		var _entry, _entry$1, _r, f, id, k, k$1, n, p, t, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _r = $f._r; f = $f.f; id = $f.id; k = $f.k; k$1 = $f.k$1; n = $f.n; p = $f.p; t = $f.t; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  tA		/* */ if (n > t.len()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n > t.len()) { */ case 1:
  tT			_r = fmt.Sprintf("evictOldest(%v) on table with %v entries", new sliceType([new $Int(n), new $Int(t.len())])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  t�		k = 0;
		while (true) {
			if (!(k < n)) { break; }
  t�			f = $clone((x = t.ents, ((k < 0 || k >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + k])), HeaderField);
  t�			id = (x$1 = (x$2 = t.evictCount, x$3 = (new $Uint64(0, k)), new $Uint64(x$2.$high + x$3.$high, x$2.$low + x$3.$low)), new $Uint64(x$1.$high + 0, x$1.$low + 1));
    			if ((x$4 = (_entry = t.byName[$String.keyFor(f.Name)], _entry !== undefined ? _entry.v : new $Uint64(0, 0)), (x$4.$high === id.$high && x$4.$low === id.$low))) {
  u				delete t.byName[$String.keyFor(f.Name)];
    			}
  u5			p = $clone(new pairNameValue.ptr(f.Name, f.Value), pairNameValue);
    			if ((x$5 = (_entry$1 = t.byNameValue[pairNameValue.keyFor(p)], _entry$1 !== undefined ? _entry$1.v : new $Uint64(0, 0)), (x$5.$high === id.$high && x$5.$low === id.$low))) {
  ux				delete t.byNameValue[pairNameValue.keyFor(p)];
    			}
  t�			k = k + (1) >> 0;
    		}
  u�		$copySlice(t.ents, $subslice(t.ents, n));
  u�		k$1 = t.len() - n >> 0;
		while (true) {
			if (!(k$1 < t.len())) { break; }
  u�			HeaderField.copy((x$6 = t.ents, ((k$1 < 0 || k$1 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + k$1])), new HeaderField.ptr("", "", false));
  u�			k$1 = k$1 + (1) >> 0;
    		}
  v#		t.ents = $subslice(t.ents, 0, (t.len() - n >> 0));
    		if ((x$7 = (x$8 = t.evictCount, x$9 = (new $Uint64(0, n)), new $Uint64(x$8.$high + x$9.$high, x$8.$low + x$9.$low)), x$10 = t.evictCount, (x$7.$high < x$10.$high || (x$7.$high === x$10.$high && x$7.$low < x$10.$low)))) {
  vm			$panic(new $String("evictCount overflow"));
    		}
  v�		t.evictCount = (x$11 = t.evictCount, x$12 = (new $Uint64(0, n)), new $Uint64(x$11.$high + x$12.$high, x$11.$low + x$12.$low));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: headerFieldTable.ptr.prototype.evictOldest }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._r = _r; $f.f = f; $f.id = id; $f.k = k; $f.k$1 = k$1; $f.n = n; $f.p = p; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	headerFieldTable.prototype.evictOldest = function(n) { return this.$val.evictOldest(n); };
headerFieldTableevictOldest~fmt.Sprintf/vendor/golang.org/x/net/http2/hpack.HeaderField4vendor/golang.org/x/net/http2/hpack.headerFieldTable(vendor/golang.org/x/net/http2/hpack.len~1vendor/golang.org/x/net/http2/hpack.pairNameValue-vendor/golang.org/x/net/http2/hpack.sliceType >(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).search �
�	headerFieldTable.ptr.prototype.search = function(f) {
		var $24r, $24r$1, _entry, _entry$1, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, f, i, id, id$1, nameValueMatch, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _entry = $f._entry; _entry$1 = $f._entry$1; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; f = $f.f; i = $f.i; id = $f.id; id$1 = $f.id$1; nameValueMatch = $f.nameValueMatch; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		i = new $Uint64(0, 0);
		nameValueMatch = false;
		t = this;
  y�		/* */ if (!f.Sensitive) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!f.Sensitive) { */ case 1:
  y�			id = (_entry = t.byNameValue[pairNameValue.keyFor(new pairNameValue.ptr(f.Name, f.Value))], _entry !== undefined ? _entry.v : new $Uint64(0, 0));
  y�			/* */ if (!((id.$high === 0 && id.$low === 0))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!((id.$high === 0 && id.$low === 0))) { */ case 3:
    				_r = t.idToIndex(id); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tmp = _r;
				_tmp$1 = true;
				i = _tmp;
				nameValueMatch = _tmp$1;
				$24r = [i, nameValueMatch];
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
    		/* } */ case 2:
  z"		id$1 = (_entry$1 = t.byName[$String.keyFor(f.Name)], _entry$1 !== undefined ? _entry$1.v : new $Uint64(0, 0));
  z		/* */ if (!((id$1.$high === 0 && id$1.$low === 0))) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (!((id$1.$high === 0 && id$1.$low === 0))) { */ case 7:
    			_r$1 = t.idToIndex(id$1); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tmp$2 = _r$1;
			_tmp$3 = false;
			i = _tmp$2;
			nameValueMatch = _tmp$3;
			$24r$1 = [i, nameValueMatch];
			$s = 10; case 10: return $24r$1;
    		/* } */ case 8:
    		_tmp$4 = new $Uint64(0, 0);
		_tmp$5 = false;
		i = _tmp$4;
		nameValueMatch = _tmp$5;
		$s = -1; return [i, nameValueMatch];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: headerFieldTable.ptr.prototype.search }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._entry = _entry; $f._entry$1 = _entry$1; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.f = f; $f.i = i; $f.id = id; $f.id$1 = id$1; $f.nameValueMatch = nameValueMatch; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	headerFieldTable.prototype.search = function(f) { return this.$val.search(f); };
headerFieldTablesearch~4vendor/golang.org/x/net/http2/hpack.headerFieldTable.vendor/golang.org/x/net/http2/hpack.idToIndex~1vendor/golang.org/x/net/http2/hpack.pairNameValue A(*vendor/golang.org/x/net/http2/hpack.headerFieldTable).idToIndex �=	headerFieldTable.ptr.prototype.idToIndex = function(id) {
		var _r, id, k, t, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; id = $f.id; k = $f.k; t = $f.t; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  { 		/* */ if ((x = t.evictCount, (id.$high < x.$high || (id.$high === x.$high && id.$low <= x.$low)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x = t.evictCount, (id.$high < x.$high || (id.$high === x.$high && id.$low <= x.$low)))) { */ case 1:
  {			_r = fmt.Sprintf("id (%v) <= evictCount (%v)", new sliceType([id, t.evictCount])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$panic(new $String(_r));
    		/* } */ case 2:
  {a		k = (x$1 = (x$2 = t.evictCount, new $Uint64(id.$high - x$2.$high, id.$low - x$2.$low)), new $Uint64(x$1.$high - 0, x$1.$low - 1));
    		if (!(t === staticTable)) {
  {�			$s = -1; return (x$3 = (new $Uint64(0, t.len())), new $Uint64(x$3.$high - k.$high, x$3.$low - k.$low));
    		}
  {�		$s = -1; return new $Uint64(k.$high + 0, k.$low + 1);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: headerFieldTable.ptr.prototype.idToIndex }; } $f._r = _r; $f.id = id; $f.k = k; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	headerFieldTable.prototype.idToIndex = function(id) { return this.$val.idToIndex(id); };
headerFieldTable
idToIndex~fmt.Sprintf4vendor/golang.org/x/net/http2/hpack.headerFieldTable(vendor/golang.org/x/net/http2/hpack.len~-vendor/golang.org/x/net/http2/hpack.sliceType/vendor/golang.org/x/net/http2/hpack.staticTable 2vendor/golang.org/x/net/http2/hpack.newStaticTable#vendor/golang.org/x/net/http2/hpacknewStaticTable newStaticTable�	newStaticTable = function() {
		var _i, _ref, e, t;
  �&		t = new headerFieldTable.ptr(sliceType$2.nil, new $Uint64(0, 0), false, false);
  �@		t.init();
  �J		_ref = new sliceType$2(staticTableEntries);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			e = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), HeaderField);
  �v			t.addEntry($clone(e, HeaderField));
    			_i++;
		}
  ��		return t;
    	};
newStaticTable/vendor/golang.org/x/net/http2/hpack.HeaderField-vendor/golang.org/x/net/http2/hpack.addEntry~4vendor/golang.org/x/net/http2/hpack.headerFieldTable)vendor/golang.org/x/net/http2/hpack.init~2vendor/golang.org/x/net/http2/hpack.newStaticTable/vendor/golang.org/x/net/http2/hpack.sliceType$26vendor/golang.org/x/net/http2/hpack.staticTableEntries ��{"Base":37241,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/net/http2/hpack/encode.go","Base":1,"Size":7129,"Lines":[0,55,109,159,160,174,175,184,190,192,193,201,238,269,271,272,294,315,360,424,436,452,508,567,577,598,655,680,702,729,753,755,756,826,859,899,915,945,988,1014,1036,1039,1062,1107,1117,1119,1120,1190,1261,1321,1373,1392,1393,1417,1445,1481,1526,1530,1554,1605,1608,1609,1650,1671,1707,1717,1748,1764,1783,1787,1788,1804,1849,1860,1914,1918,1921,1949,1985,2010,2013,2025,2027,2028,2096,2164,2232,2303,2372,2436,2454,2533,2576,2597,2614,2617,2618,2665,2708,2763,2766,2767,2784,2786,2787,2857,2910,2942,2995,3020,3041,3044,3064,3080,3083,3109,3133,3135,3136,3205,3275,3343,3408,3479,3544,3600,3658,3678,3705,3732,3757,3760,3762,3763,3815,3867,3920,3922,3923,3994,4053,4103,4122,4153,4173,4185,4187,4188,4259,4322,4342,4345,4415,4484,4511,4581,4639,4677,4717,4719,4720,4786,4855,4923,4926,4996,5065,5092,5176,5195,5207,5222,5230,5240,5248,5251,5282,5335,5375,5377,5378,5449,5508,5560,5579,5618,5638,5650,5652,5653,5724,5779,5782,5789,5866,5923,5950,5962,5992,5995,6023,6031,6058,6099,6102,6131,6133,6134,6197,6256,6259,6328,6352,6406,6447,6484,6504,6548,6584,6605,6615,6660,6686,6689,6701,6703,6704,6773,6840,6908,6973,6999,7052,7068,7082,7085,7100,7114,7117,7127],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/net/http2/hpack/hpack.go","Base":7131,"Size":14806,"Lines":[0,55,109,159,160,220,293,296,371,385,386,395,404,414,421,423,424,494,522,533,535,536,577,627,629,630,701,773,800,801,845,916,918,919,986,1028,1054,1074,1075,1134,1147,1163,1165,1166,1238,1293,1362,1373,1413,1460,1462,1463,1503,1522,1541,1567,1570,1643,1645,1646,1709,1747,1818,1879,1942,2004,2066,2126,2175,2176,2236,2299,2363,2371,2421,2423,2424,2491,2509,2531,2552,2580,2581,2636,2675,2676,2729,2787,2842,2870,2920,2921,2988,3045,3067,3068,3135,3137,3138,3208,3272,3346,3431,3447,3472,3493,3514,3517,3540,3587,3629,3639,3641,3642,3717,3785,3844,3845,3914,3979,4033,4101,4147,4164,4166,4167,4231,4247,4302,4364,4383,4385,4386,4457,4499,4502,4570,4638,4707,4752,4815,4816,4892,4939,5001,5002,5097,5140,5141,5194,5218,5220,5221,5292,5360,5367,5427,5456,5458,5459,5486,5559,5592,5627,5669,5732,5734,5735,5782,5798,5810,5812,5813,5858,5880,5901,5913,5915,5916,5954,5988,5999,6049,6086,6092,6095,6120,6122,6123,6163,6237,6313,6379,6428,6430,6431,6490,6513,6526,6535,6538,6575,6612,6615,6651,6660,6663,6723,6786,6818,6840,6899,6901,6902,6937,6940,7007,7036,7100,7122,7142,7180,7233,7272,7290,7293,7328,7346,7349,7365,7367,7368,7439,7511,7568,7602,7628,7648,7704,7707,7728,7740,7742,7743,7798,7816,7871,7926,7944,7953,7956,8016,8065,8092,8104,8114,8135,8163,8183,8186,8187,8209,8242,8268,8316,8363,8411,8461,8499,8543,8629,8659,8664,8690,8712,8716,8739,8757,8766,8770,8773,8793,8795,8796,8862,8929,8950,8997,8998,9017,9018,9026,9056,9070,9084,9086,9087,9151,9216,9217,9278,9307,9345,9397,9446,9461,9471,9489,9518,9537,9609,9640,9659,9717,9754,9828,9873,9891,9940,9980,10054,10100,10119,10165,10205,10279,10325,10344,10379,10410,10482,10523,10526,10527,10581,10583,10584,10642,10688,10702,10739,10756,10769,10772,10793,10803,10850,10853,10866,10930,10932,10933,10991,11058,11072,11113,11130,11143,11146,11147,11167,11209,11227,11254,11265,11317,11321,11342,11352,11401,11419,11433,11437,11440,11489,11506,11519,11522,11535,11554,11573,11576,11607,11630,11632,11633,11684,11707,11772,11798,11802,11805,11825,11838,11841,11853,11855,11856,11914,11970,12042,12130,12171,12281,12284,12285,12299,12337,12354,12367,12370,12415,12489,12492,12527,12540,12552,12554,12555,12632,12633,12697,12751,12822,12825,12862,12865,12943,13012,13085,13106,13123,13126,13144,13171,13174,13192,13204,13232,13235,13262,13285,13288,13289,13301,13312,13326,13344,13356,13368,13394,13412,13432,13436,13445,13508,13546,13550,13553,13583,13585,13586,13632,13635,13701,13760,13831,13900,13976,14012,14104,14122,14150,14153,14178,14214,14231,14251,14254,14309,14343,14346,14376,14404,14407,14421,14436,14462,14466,14494,14497,14498,14512,14551,14587,14612,14682,14697,14720,14724,14743,14774,14777,14804],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/net/http2/hpack/huffman.go","Base":21938,"Size":5624,"Lines":[0,55,109,159,160,174,175,184,193,203,209,217,219,220,245,300,302,303,368,435,497,554,592,605,629,679,695,698,727,729,730,780,835,873,886,910,960,977,980,1006,1008,1009,1068,1096,1170,1171,1206,1273,1318,1386,1427,1449,1505,1570,1638,1688,1711,1736,1749,1762,1781,1816,1839,1856,1885,1890,1916,1960,1988,1994,2019,2042,2066,2084,2096,2111,2116,2120,2123,2140,2179,2195,2223,2227,2273,2282,2286,2328,2354,2358,2381,2402,2424,2440,2443,2459,2524,2580,2607,2610,2661,2730,2757,2760,2761,2773,2775,2776,2852,2920,2957,2985,2986,3005,3021,3022,3065,3087,3088,3141,3204,3236,3238,3239,3270,3311,3313,3314,3320,3351,3378,3380,3381,3415,3455,3483,3485,3486,3516,3547,3574,3577,3618,3655,3706,3709,3711,3712,3772,3800,3819,3834,3864,3894,3933,3937,3961,3964,3986,4040,4078,4132,4135,4137,4138,4208,4244,4300,4321,4322,4353,4373,4397,4401,4462,4465,4466,4484,4508,4537,4558,4559,4599,4622,4625,4626,4638,4640,4641,4711,4775,4819,4835,4866,4902,4905,4925,4927,4928,4993,5059,5128,5179,5261,5286,5314,5315,5322,5345,5386,5410,5430,5439,5443,5444,5484,5507,5508,5527,5541,5542,5560,5569,5573,5574,5597,5600,5601,5622],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/net/http2/hpack/tables.go","Base":27563,"Size":9677,"Lines":[0,55,109,159,160,174,175,184,191,193,194,249,309,340,390,394,473,547,623,700,766,770,805,809,884,958,1036,1115,1156,1182,1201,1202,1279,1341,1367,1368,1450,1533,1571,1573,1574,1602,1622,1624,1625,1661,1697,1745,1747,1748,1799,1838,1858,1860,1861,1891,1944,1986,2009,2061,2089,2091,2092,2149,2197,2215,2292,2295,2321,2338,2375,2405,2433,2437,2506,2534,2538,2541,2567,2609,2676,2679,2708,2752,2783,2786,2813,2815,2816,2878,2953,3019,3052,3055,3134,3213,3290,3367,3370,3441,3465,3468,3490,3573,3592,3660,3692,3696,3699,3737,3769,3772,3789,3791,3792,3845,3867,3924,3949,4018,4021,4085,4108,4154,4157,4171,4173,4174,4256,4291,4334,4357,4391,4426,4456,4496,4531,4567,4601,4635,4669,4703,4737,4771,4805,4832,4884,4912,4938,4957,4997,5013,5031,5057,5083,5115,5144,5173,5200,5229,5255,5280,5299,5316,5333,5352,5372,5389,5406,5427,5457,5483,5504,5536,5562,5579,5600,5625,5656,5688,5706,5726,5746,5770,5789,5812,5850,5880,5903,5920,5936,5965,5967,5968,6010,6036,6046,6089,6105,6108,6118,6120,6121,6153,6162,6173,6185,6197,6209,6221,6233,6245,6257,6268,6281,6293,6305,6318,6330,6342,6354,6366,6378,6390,6402,6414,6427,6439,6451,6463,6475,6487,6499,6511,6523,6535,6542,6550,6558,6566,6575,6582,6589,6597,6605,6613,6620,6628,6635,6642,6649,6656,6662,6668,6674,6681,6688,6695,6702,6709,6716,6723,6730,6737,6746,6753,6761,6769,6778,6785,6792,6799,6806,6813,6820,6827,6834,6841,6848,6855,6862,6869,6876,6883,6890,6897,6904,6911,6918,6925,6932,6939,6946,6953,6960,6969,6979,6988,6997,7004,7013,7019,7026,7032,7039,7045,7052,7059,7066,7072,7079,7086,7093,7100,7107,7113,7120,7127,7134,7140,7146,7153,7160,7167,7174,7181,7188,7197,7205,7214,7223,7235,7245,7256,7266,7276,7287,7298,7309,7320,7331,7342,7353,7364,7375,7386,7397,7408,7419,7430,7441,7452,7463,7474,7485,7496,7507,7518,7529,7540,7551,7562,7573,7584,7595,7606,7616,7627,7638,7649,7660,7671,7682,7693,7704,7715,7726,7737,7748,7759,7770,7781,7792,7803,7814,7825,7836,7847,7857,7868,7879,7890,7901,7912,7923,7934,7946,7958,7968,7978,7989,8000,8011,8023,8035,8047,8059,8071,8083,8095,8106,8118,8128,8139,8151,8163,8175,8187,8199,8210,8221,8232,8244,8256,8268,8280,8292,8304,8314,8325,8335,8346,8357,8368,8379,8390,8401,8412,8424,8436,8447,8458,8470,8481,8493,8505,8517,8529,8541,8553,8565,8577,8589,8601,8613,8625,8637,8649,8661,8673,8675,8676,8709,8774,8839,8896,8948,8998,9051,9101,9155,9220,9285,9350,9415,9480,9545,9610,9675],"Infos":null}]}
 