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
GoLinkname�� Implementation�� 	Reference��   �����	image/gifgif
bufiobytescompress/lzwerrorsfmtimageimage/colorimage/color/palette
image/drawio�Fi ��
rReaderio ImageimageGIFConfigwWritermoOptionsgPalettedDelay	LoopCountDisposalBackgroundIndex	NumColors	Quantizer
image/drawDrawerReadpnerrAtxyColorimage/colorBounds	Rectangle
ColorModelModelWidthHeightWritePixStrideRectPaletteRGBA64AtRGBA64	PixOffsetSetc	SetRGBA64ColorIndexAtSetColorIndexindexSubImageOpaqueQuantizeDrawdstsrcspPointRGBAbaMinMaxStringDxDySizeAddSubInset	IntersectsUnionEmptyEqOverlapsInCanonConvertIndexRGBAXYqMulkDivModgifDecode	DecodeAllDecodeConfigDisposalBackgroundDisposalNoneDisposalPreviousEncode	EncodeAllcolordraw 	 F     #   4F     7   F     G  C C C  &	 1gF  $d -# /j  4F  $d 9}   ;�� �  D�  J  T�  G  ] T �  w� �� m  w�  �� T � 	  � �� � � T � �� � ��  � � � �  �  � �  �T � ��  �  � T � 	  � �� � � T � �� ��  �  ��  �� ���� ���������T � � ��  � � ��  � � �� � � �  � �� � � �  � �� � �   � �� � � ��   � �� � � ��   � �� � �   � �� � � �   � ��  � #  � ��   �  � �� -# � T � � ��  � ��  � �# ��  T ��  �   	 9	 �	 �	T � ��  �� T � �  �   �  �   �  �   �  �  � �  � �� �  �  � �� �  �  � � �  �  � �� �  �  � �� �  �  �    �  � ��    �  � ��    �  � ��    �  �  � �  � � � �  �  � � � �  �  �  � �  �  ��  � �� � T ��T � � �� �� �  � �� ��  � �  �  �  � T �	 � ��   	 9	 �	 �	� # � � � ��  T �	 �  � T �	 � ��   � �� �� �  � �� �� �  � �� � �  � �� � �  � ��  �    � ��  � �  � �� ��   � 
���*�8�<�@�L�_�1� ��;���	���� ���������� ���	w�		 �&�P bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  lzw"	lzw = $packages["compress/lzw"];
��    		$r = lzw.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  image	image = $packages["image"];
��    		$r = image.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  color#	color = $packages["image/color"];
��    		$r = color.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  palette-	palette = $packages["image/color/palette"];
��    		$r = palette.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  draw!	draw = $packages["image/draw"];
��    		$r = draw.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  readerc	reader = $pkg.reader = $newType(8, $kindInterface, "gif.reader", true, "image/gif", false, null);
��	reader.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}]);
readerimage/gif.readerimage/gif.sliceType$1  decoder�-	decoder = $pkg.decoder = $newType(0, $kindStruct, "gif.decoder", true, "image/gif", false, function(r_, vers_, width_, height_, loopCount_, delayTime_, backgroundIndex_, disposalMethod_, imageFields_, transparentIndex_, hasTransparentIndex_, globalColorTable_, delay_, disposal_, image_, tmp_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.vers = "";
			this.width = 0;
			this.height = 0;
			this.loopCount = 0;
			this.delayTime = 0;
			this.backgroundIndex = 0;
			this.disposalMethod = 0;
			this.imageFields = 0;
			this.transparentIndex = 0;
			this.hasTransparentIndex = false;
			this.globalColorTable = color.Palette.nil;
			this.delay = sliceType$4.nil;
			this.disposal = sliceType$1.nil;
			this.image = sliceType$5.nil;
			this.tmp = arrayType.zero();
			return;
		}
		this.r = r_;
		this.vers = vers_;
		this.width = width_;
		this.height = height_;
		this.loopCount = loopCount_;
		this.delayTime = delayTime_;
		this.backgroundIndex = backgroundIndex_;
		this.disposalMethod = disposalMethod_;
		this.imageFields = imageFields_;
		this.transparentIndex = transparentIndex_;
		this.hasTransparentIndex = hasTransparentIndex_;
		this.globalColorTable = globalColorTable_;
		this.delay = delay_;
		this.disposal = disposal_;
		this.image = image_;
		this.tmp = tmp_;
	});
��	ptrType.methods = [{prop: "decode", name: "decode", pkg: "image/gif", typ: $funcType([io.Reader, $Bool, $Bool], [$error], false)}, {prop: "readHeaderAndScreenDescriptor", name: "readHeaderAndScreenDescriptor", pkg: "image/gif", typ: $funcType([], [$error], false)}, {prop: "readColorTable", name: "readColorTable", pkg: "image/gif", typ: $funcType([$Uint8], [color.Palette, $error], false)}, {prop: "readExtension", name: "readExtension", pkg: "image/gif", typ: $funcType([], [$error], false)}, {prop: "readGraphicControl", name: "readGraphicControl", pkg: "image/gif", typ: $funcType([], [$error], false)}, {prop: "readImageDescriptor", name: "readImageDescriptor", pkg: "image/gif", typ: $funcType([$Bool], [$error], false)}, {prop: "newImageFromDescriptor", name: "newImageFromDescriptor", pkg: "image/gif", typ: $funcType([], [ptrType$1, $error], false)}, {prop: "readBlock", name: "readBlock", pkg: "image/gif", typ: $funcType([], [$Int, $error], false)}];
�3	decoder.init("image/gif", [{prop: "r", name: "r", embedded: false, exported: false, typ: reader, tag: ""}, {prop: "vers", name: "vers", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "width", name: "width", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "height", name: "height", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "loopCount", name: "loopCount", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "delayTime", name: "delayTime", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "backgroundIndex", name: "backgroundIndex", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "disposalMethod", name: "disposalMethod", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "imageFields", name: "imageFields", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "transparentIndex", name: "transparentIndex", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "hasTransparentIndex", name: "hasTransparentIndex", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "globalColorTable", name: "globalColorTable", embedded: false, exported: false, typ: color.Palette, tag: ""}, {prop: "delay", name: "delay", embedded: false, exported: false, typ: sliceType$4, tag: ""}, {prop: "disposal", name: "disposal", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "image", name: "image", embedded: false, exported: false, typ: sliceType$5, tag: ""}, {prop: "tmp", name: "tmp", embedded: false, exported: false, typ: arrayType, tag: ""}]);
decoder
image/color.Paletteimage/gif.arrayTypeimage/gif.decoderimage/gif.ptrTypeimage/gif.ptrType$1image/gif.readerimage/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5	io.Reader  blockReader�]	blockReader = $pkg.blockReader = $newType(0, $kindStruct, "gif.blockReader", true, "image/gif", false, function(d_, i_, j_, err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.d = ptrType.nil;
			this.i = 0;
			this.j = 0;
			this.err = $ifaceNil;
			return;
		}
		this.d = d_;
		this.i = i_;
		this.j = j_;
		this.err = err_;
	});
�v	ptrType$6.methods = [{prop: "fill", name: "fill", pkg: "image/gif", typ: $funcType([], [], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "close", name: "close", pkg: "image/gif", typ: $funcType([], [$error], false)}];
�g	blockReader.init("image/gif", [{prop: "d", name: "d", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "j", name: "j", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
blockReaderimage/gif.blockReaderimage/gif.ptrTypeimage/gif.ptrType$6image/gif.sliceType$1  interlaceScan�!	interlaceScan = $pkg.interlaceScan = $newType(0, $kindStruct, "gif.interlaceScan", true, "image/gif", false, function(skip_, start_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.skip = 0;
			this.start = 0;
			return;
		}
		this.skip = skip_;
		this.start = start_;
	});
��	interlaceScan.init("image/gif", [{prop: "skip", name: "skip", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "start", name: "start", embedded: false, exported: false, typ: $Int, tag: ""}]);
interlaceScanimage/gif.interlaceScan  GIF�d	GIF = $pkg.GIF = $newType(0, $kindStruct, "gif.GIF", true, "image/gif", true, function(Image_, Delay_, LoopCount_, Disposal_, Config_, BackgroundIndex_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Image = sliceType$5.nil;
			this.Delay = sliceType$4.nil;
			this.LoopCount = 0;
			this.Disposal = sliceType$1.nil;
			this.Config = new image.Config.ptr($ifaceNil, 0, 0);
			this.BackgroundIndex = 0;
			return;
		}
		this.Image = Image_;
		this.Delay = Delay_;
		this.LoopCount = LoopCount_;
		this.Disposal = Disposal_;
		this.Config = Config_;
		this.BackgroundIndex = BackgroundIndex_;
	});
�R	GIF.init("", [{prop: "Image", name: "Image", embedded: false, exported: true, typ: sliceType$5, tag: ""}, {prop: "Delay", name: "Delay", embedded: false, exported: true, typ: sliceType$4, tag: ""}, {prop: "LoopCount", name: "LoopCount", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Disposal", name: "Disposal", embedded: false, exported: true, typ: sliceType$1, tag: ""}, {prop: "Config", name: "Config", embedded: false, exported: true, typ: image.Config, tag: ""}, {prop: "BackgroundIndex", name: "BackgroundIndex", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
GIFimage.Configimage/gif.GIFimage/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5  writerc	writer = $pkg.writer = $newType(8, $kindInterface, "gif.writer", true, "image/gif", false, null);
�	writer.init([{prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}]);
writerimage/gif.sliceType$1image/gif.writer  encoder��	encoder = $pkg.encoder = $newType(0, $kindStruct, "gif.encoder", true, "image/gif", false, function(w_, err_, g_, globalCT_, buf_, globalColorTable_, localColorTable_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.err = $ifaceNil;
			this.g = new GIF.ptr(sliceType$5.nil, sliceType$4.nil, 0, sliceType$1.nil, new image.Config.ptr($ifaceNil, 0, 0), 0);
			this.globalCT = 0;
			this.buf = arrayType$1.zero();
			this.globalColorTable = arrayType$2.zero();
			this.localColorTable = arrayType$2.zero();
			return;
		}
		this.w = w_;
		this.err = err_;
		this.g = g_;
		this.globalCT = globalCT_;
		this.buf = buf_;
		this.globalColorTable = globalColorTable_;
		this.localColorTable = localColorTable_;
	});
�r	ptrType$4.methods = [{prop: "flush", name: "flush", pkg: "image/gif", typ: $funcType([], [], false)}, {prop: "write", name: "write", pkg: "image/gif", typ: $funcType([sliceType$1], [], false)}, {prop: "writeByte", name: "writeByte", pkg: "image/gif", typ: $funcType([$Uint8], [], false)}, {prop: "writeHeader", name: "writeHeader", pkg: "image/gif", typ: $funcType([], [], false)}, {prop: "colorTablesMatch", name: "colorTablesMatch", pkg: "image/gif", typ: $funcType([$Int, $Int], [$Bool], false)}, {prop: "writeImageBlock", name: "writeImageBlock", pkg: "image/gif", typ: $funcType([ptrType$1, $Int, $Uint8], [], false)}];
��	encoder.init("image/gif", [{prop: "w", name: "w", embedded: false, exported: false, typ: writer, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "g", name: "g", embedded: false, exported: false, typ: GIF, tag: ""}, {prop: "globalCT", name: "globalCT", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "globalColorTable", name: "globalColorTable", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "localColorTable", name: "localColorTable", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
encoderimage.Configimage/gif.GIFimage/gif.arrayType$1image/gif.arrayType$2image/gif.encoderimage/gif.ptrType$1image/gif.ptrType$4image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5image/gif.writer  blockWriter��	blockWriter = $pkg.blockWriter = $newType(0, $kindStruct, "gif.blockWriter", true, "image/gif", false, function(e_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.e = ptrType$4.nil;
			return;
		}
		this.e = e_;
	});
��	blockWriter.methods = [{prop: "setup", name: "setup", pkg: "image/gif", typ: $funcType([], [], false)}, {prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [$error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "close", name: "close", pkg: "image/gif", typ: $funcType([], [], false)}];
u	blockWriter.init("image/gif", [{prop: "e", name: "e", embedded: false, exported: false, typ: ptrType$4, tag: ""}]);
blockWriterimage/gif.blockWriterimage/gif.ptrType$4image/gif.sliceType$1  Options�x	Options = $pkg.Options = $newType(0, $kindStruct, "gif.Options", true, "image/gif", true, function(NumColors_, Quantizer_, Drawer_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.NumColors = 0;
			this.Quantizer = $ifaceNil;
			this.Drawer = $ifaceNil;
			return;
		}
		this.NumColors = NumColors_;
		this.Quantizer = Quantizer_;
		this.Drawer = Drawer_;
	});
�7	Options.init("", [{prop: "NumColors", name: "NumColors", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Quantizer", name: "Quantizer", embedded: false, exported: true, typ: draw.Quantizer, tag: ""}, {prop: "Drawer", name: "Drawer", embedded: false, exported: true, typ: draw.Drawer, tag: ""}]);
Optionsimage/draw.Drawerimage/draw.Quantizerimage/gif.Options  	sliceType(	sliceType = $sliceType(interlaceScan);
	sliceTypeimage/gif.interlaceScan  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  sliceType$2,	sliceType$2 = $sliceType($emptyInterface);
sliceType$2  sliceType$3(	sliceType$3 = $sliceType(color.Color);
sliceType$3image/color.Color  ptrType	ptrType = $ptrType(decoder);
ptrTypeimage/gif.decoder  	ptrType$1'	ptrType$1 = $ptrType(image.Paletted);
	ptrType$1image.Paletted  sliceType$4!	sliceType$4 = $sliceType($Int);
sliceType$4  sliceType$5&	sliceType$5 = $sliceType(ptrType$1);
sliceType$5image/gif.ptrType$1  	arrayType'	arrayType = $arrayType($Uint8, 1024);
	arrayType  	ptrType$2	ptrType$2 = $ptrType(GIF);
	ptrType$2image/gif.GIF  	ptrType$3$	ptrType$3 = $ptrType(color.Color);
	ptrType$3image/color.Color  	ptrType$4 	ptrType$4 = $ptrType(encoder);
	ptrType$4image/gif.encoder  arrayType$1(	arrayType$1 = $arrayType($Uint8, 256);
arrayType$1  arrayType$2(	arrayType$2 = $arrayType($Uint8, 768);
arrayType$2  	ptrType$5 	ptrType$5 = $ptrType(Options);
	ptrType$5image/gif.Options  	ptrType$6$	ptrType$6 = $ptrType(blockReader);
	ptrType$6image/gif.blockReader  errNotEnougherrNotEnough  
errTooMuch
errTooMuch  errBadPixelerrBadPixel  interlacinginterlacing  
log2Lookup
log2Lookup  @  �		errNotEnough = errors.New("gif: not enough image data");

errors.Newimage/gif.errNotEnough  <  �		errTooMuch = errors.New("gif: too much image data");

errors.Newimage/gif.errTooMuch  =  		errBadPixel = errors.New("gif: invalid pixel value");

errors.Newimage/gif.errBadPixel  ��  7�		interlacing = new sliceType([new interlaceScan.ptr(8, 0), new interlaceScan.ptr(8, 4), new interlaceScan.ptr(4, 2), new interlaceScan.ptr(2, 1)]);
interlacingimage/gif.interlaceScanimage/gif.interlacingimage/gif.sliceType  O  G		log2Lookup = $toNativeArray($kindInt, [2, 4, 8, 16, 32, 64, 128, 256]);

log2Lookupimage/gif.log2Lookup image/gif.readFull	image/gifreadFull readFull�	readFull = function(r, b) {
		var _r, _tuple, b, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  k		_r = io.ReadFull(r, b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if ($interfaceIsEqual(err, io.EOF)) {
  �			err = io.ErrUnexpectedEOF;
    		}
  �		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readFull }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
readFullimage/gif.readFullio.EOFio.ErrUnexpectedEOFio.ReadFull image/gif.readByte	image/gifreadByte readByte�	readByte = function(r) {
		var _r, _tuple, b, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = r.ReadByte(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		b = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, io.EOF)) {
  &			err = io.ErrUnexpectedEOF;
    		}
  D		$s = -1; return [b, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readByte }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
readByteimage/gif.readByteio.EOFio.ErrUnexpectedEOF (*image/gif.blockReader).fill �c	blockReader.ptr.prototype.fill = function() {
		var _r, _r$1, _tuple, b, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; b = $f.b; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  J			$s = -1; return;
    		}
  U		_r = readByte(b.d.r); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		b.j = _tuple[0];
		b.err = _tuple[1];
    		if ((b.j === 0) && $interfaceIsEqual(b.err, $ifaceNil)) {
  �			b.err = io.EOF;
    		}
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  �			$s = -1; return;
    		}
  �		b.i = 0;
  �		_r$1 = readFull(b.d.r, $subslice(new sliceType$1(b.d.tmp), 0, b.j)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		b.err = _r$1;
    		if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  			b.j = 0;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: blockReader.ptr.prototype.fill }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.b = b; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockReader.prototype.fill = function() { return this.$val.fill(); };
blockReaderfill~image/gif.blockReaderimage/gif.readByteimage/gif.readFullimage/gif.sliceType$1io.EOF !(*image/gif.blockReader).ReadByte ��	blockReader.ptr.prototype.ReadByte = function() {
		var b, c, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; c = $f.c; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  K		/* */ if (b.i === b.j) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.i === b.j) { */ case 1:
  ]			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  }				$s = -1; return [0, b.err];
    			}
    		/* } */ case 2:
  �		c = (x = b.d.tmp, x$1 = b.i, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
  �		b.i = b.i + (1) << 24 >>> 24;
  �		$s = -1; return [c, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: blockReader.ptr.prototype.ReadByte }; } $f.b = b; $f.c = c; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockReader.prototype.ReadByte = function() { return this.$val.ReadByte(); };
blockReaderimage/gif.blockReaderimage/gif.fill~ (*image/gif.blockReader).Read ��	blockReader.ptr.prototype.Read = function(p) {
		var b, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if ((p.$length === 0) || !($interfaceIsEqual(b.err, $ifaceNil))) {
  �			$s = -1; return [0, b.err];
    		}
  �		/* */ if (b.i === b.j) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.i === b.j) { */ case 1:
  �			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  �				$s = -1; return [0, b.err];
    			}
    		/* } */ case 2:
  		n = $copySlice(p, $subslice(new sliceType$1(b.d.tmp), b.i, b.j));
  2		b.i = b.i + (((n << 24 >>> 24))) << 24 >>> 24;
  C		$s = -1; return [n, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: blockReader.ptr.prototype.Read }; } $f.b = b; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockReader.prototype.Read = function(p) { return this.$val.Read(p); };
blockReaderimage/gif.blockReaderimage/gif.fill~image/gif.sliceType$1 (*image/gif.blockReader).close �	blockReader.ptr.prototype.close = function() {
		var b, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if ($interfaceIsEqual(b.err, io.EOF)) {
  &			$s = -1; return $ifaceNil;
    		} else if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  �			$s = -1; return b.err;
    		}
  �		/* */ if (b.i === b.j) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.i === b.j) { */ case 1:
  ,			$r = b.fill(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			if ($interfaceIsEqual(b.err, io.EOF)) {
  O				$s = -1; return $ifaceNil;
    			} else if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  x				$s = -1; return b.err;
    			} else if (b.j > 1) {
  �				$s = -1; return errTooMuch;
    			}
    		/* } */ case 2:
  >		$r = b.fill(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if ($interfaceIsEqual(b.err, io.EOF)) {
  _			$s = -1; return $ifaceNil;
    		} else if (!($interfaceIsEqual(b.err, $ifaceNil))) {
  �			$s = -1; return b.err;
    		}
  �		$s = -1; return errTooMuch;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: blockReader.ptr.prototype.close }; } $f.b = b; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockReader.prototype.close = function() { return this.$val.close(); };
blockReaderclose~image/gif.blockReaderimage/gif.errTooMuchimage/gif.fill~io.EOF (*image/gif.decoder).decode �	decoder.ptr.prototype.decode = function(r, configOnly, keepAllFrames) {
		var $24r, $24r$1, $24r$2, _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tuple, _tuple$1, c, configOnly, d, err, err$1, keepAllFrames, ok, r, rr, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; c = $f.c; configOnly = $f.configOnly; d = $f.d; err = $f.err; err$1 = $f.err$1; keepAllFrames = $f.keepAllFrames; ok = $f.ok; r = $f.r; rr = $f.rr; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  p		_tuple = $assertType(r, reader, true);
		rr = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  �			d.r = rr;
    		} else {
  �			d.r = bufio.NewReader(r);
    		}
  �		d.loopCount = -1;
  �		_r = d.readHeaderAndScreenDescriptor(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  			$s = -1; return err;
    		}
    		if (configOnly) {
  0			$s = -1; return $ifaceNil;
    		}
  @		/* while (true) { */ case 2:
  H			_r$1 = readByte(d.r); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			c = _tuple$1[0];
			err$1 = _tuple$1[1];
  b			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 5:
  u				_r$2 = fmt.Errorf("gif: reading frames: %v", new sliceType$2([err$1])); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$24r = _r$2;
				$s = 8; case 8: return $24r;
    			/* } */ case 6:
    				_1 = c;
  �				/* */ if (_1 === (33)) { $s = 10; continue; }
				/* */ if (_1 === (44)) { $s = 11; continue; }
				/* */ if (_1 === (59)) { $s = 12; continue; }
				/* */ $s = 13; continue;
    				/* if (_1 === (33)) { */ case 10:
  �					_r$3 = d.readExtension(); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					err$1 = _r$3;
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �						$s = -1; return err$1;
    					}
    					$s = 14; continue;
    				/* } else if (_1 === (44)) { */ case 11:
  +					_r$4 = d.readImageDescriptor(keepAllFrames); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					err$1 = _r$4;
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  h						$s = -1; return err$1;
    					}
    					$s = 14; continue;
    				/* } else if (_1 === (59)) { */ case 12:
  �					/* */ if (d.image.$length === 0) { $s = 17; continue; }
					/* */ $s = 18; continue;
    					/* if (d.image.$length === 0) { */ case 17:
  �						_r$5 = fmt.Errorf("gif: missing image data", new sliceType$2([])); /* */ $s = 19; case 19: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
						$24r$1 = _r$5;
						$s = 20; case 20: return $24r$1;
    					/* } */ case 18:
  �					$s = -1; return $ifaceNil;
    				/* } else { */ case 13:
  �					_r$6 = fmt.Errorf("gif: unknown block type: 0x%.2x", new sliceType$2([new $Uint8(c)])); /* */ $s = 21; case 21: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					$24r$2 = _r$6;
					$s = 22; case 22: return $24r$2;
    				/* } */ case 14:
    			case 9:
    		$s = 2; continue;
		case 3:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.decode }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.c = c; $f.configOnly = configOnly; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.keepAllFrames = keepAllFrames; $f.ok = ok; $f.r = r; $f.rr = rr; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.decode = function(r, configOnly, keepAllFrames) { return this.$val.decode(r, configOnly, keepAllFrames); };
decoderdecode~	bufio.NewReader
fmt.Errorfimage/gif.decoderimage/gif.readByteimage/gif.readExtension~(image/gif.readHeaderAndScreenDescriptor~image/gif.readImageDescriptor~image/gif.readerimage/gif.sliceType$2 2(*image/gif.decoder).readHeaderAndScreenDescriptor �/	decoder.ptr.prototype.readHeaderAndScreenDescriptor = function() {
		var $24r, $24r$1, _r, _r$1, _r$2, _r$3, _tuple, d, err, fields, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; d = $f.d; err = $f.err; fields = $f.fields; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  t		_r = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, 13)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			_r$1 = fmt.Errorf("gif: reading header: %v", new sliceType$2([err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  �		d.vers = ($bytesToString($subslice(new sliceType$1(d.tmp), 0, 6)));
  �		/* */ if (!(d.vers === "GIF87a") && !(d.vers === "GIF89a")) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (!(d.vers === "GIF87a") && !(d.vers === "GIF89a")) { */ case 6:
  *			_r$2 = fmt.Errorf("gif: can't recognize format %q", new sliceType$2([new $String(d.vers)])); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r$1 = _r$2;
			$s = 9; case 9: return $24r$1;
    		/* } */ case 7:
  j		d.width = ((d.tmp[6] >> 0)) + (((d.tmp[7] >> 0)) << 8 >> 0) >> 0;
  �		d.height = ((d.tmp[8] >> 0)) + (((d.tmp[9] >> 0)) << 8 >> 0) >> 0;
  �		fields = d.tmp[10];
  �		/* */ if (!((((fields & 128) >>> 0) === 0))) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!((((fields & 128) >>> 0) === 0))) { */ case 10:
  �			d.backgroundIndex = d.tmp[11];
  _			_r$3 = d.readColorTable(fields); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple = _r$3;
			d.globalColorTable = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				$s = -1; return err;
    			}
    		/* } */ case 11:
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readHeaderAndScreenDescriptor }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f.d = d; $f.err = err; $f.fields = fields; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readHeaderAndScreenDescriptor = function() { return this.$val.readHeaderAndScreenDescriptor(); };
decoderreadHeaderAndScreenDescriptor~
fmt.Errorfimage/gif.decoderimage/gif.readColorTable~image/gif.readFullimage/gif.sliceType$1image/gif.sliceType$2 #(*image/gif.decoder).readColorTable �
�	decoder.ptr.prototype.readColorTable = function(fields) {
		var $24r, _i, _r, _r$1, _ref, _tmp, _tmp$1, d, err, fields, i, j, n, p, x, x$1, x$2, x$3, x$4, x$5, x$6, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; d = $f.d; err = $f.err; fields = $f.fields; i = $f.i; j = $f.j; n = $f.n; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  G		n = (y = ((1 + ((((fields & 7) >>> 0) >>> 0)) >>> 0)), y < 32 ? (1 << y) : 0) >> 0;
  y		_r = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, ($imul(3, n)))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			_r$1 = fmt.Errorf("gif: reading color table: %s", new sliceType$2([err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = [color.Palette.nil, _r$1];
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  �		_tmp = 0;
		_tmp$1 = $makeSlice(color.Palette, n);
		j = _tmp;
		p = _tmp$1;
  		_ref = p;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  &			((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i] = (x = new color.RGBA.ptr((x$1 = d.tmp, x$2 = j + 0 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])), (x$3 = d.tmp, x$4 = j + 1 >> 0, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])), (x$5 = d.tmp, x$6 = j + 2 >> 0, ((x$6 < 0 || x$6 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[x$6])), 255), new x.constructor.elem(x)));
  d			j = j + (3) >> 0;
    			_i++;
		}
  o		$s = -1; return [p, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readColorTable }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.d = d; $f.err = err; $f.fields = fields; $f.i = i; $f.j = j; $f.n = n; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readColorTable = function(fields) { return this.$val.readColorTable(fields); };
decoderreadColorTable~
fmt.Errorfimage/color.Paletteimage/color.RGBAimage/gif.decoderimage/gif.readFullimage/gif.sliceType$1image/gif.sliceType$2 "(*image/gif.decoder).readExtension �E	decoder.ptr.prototype.readExtension = function() {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, _1, _r, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tuple, _tuple$1, _tuple$2, _tuple$3, b, d, err, err$1, err$2, err$3, err$4, extension, n, n$1, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; b = $f.b; d = $f.d; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; extension = $f.extension; n = $f.n; n$1 = $f.n$1; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		_r = readByte(d.r); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		extension = _tuple[0];
		err = _tuple[1];
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			_r$1 = fmt.Errorf("gif: reading extension: %v", new sliceType$2([err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  		size = 0;
    			_1 = extension;
  6			/* */ if (_1 === (1)) { $s = 7; continue; }
			/* */ if (_1 === (249)) { $s = 8; continue; }
			/* */ if (_1 === (254)) { $s = 9; continue; }
			/* */ if (_1 === (255)) { $s = 10; continue; }
			/* */ $s = 11; continue;
    			/* if (_1 === (1)) { */ case 7:
  D				size = 13;
    				$s = 12; continue;
    			/* } else if (_1 === (249)) { */ case 8:
  g				_r$2 = d.readGraphicControl(); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$24r$1 = _r$2;
				$s = 14; case 14: return $24r$1;
    			/* } else if (_1 === (254)) { */ case 9:
    				$s = 12; continue;
    			/* } else if (_1 === (255)) { */ case 10:
  �				_r$3 = readByte(d.r); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$1 = _r$3;
				b = _tuple$1[0];
				err$1 = _tuple$1[1];
  �				/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 16; continue; }
				/* */ $s = 17; continue;
    				/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 16:
  �					_r$4 = fmt.Errorf("gif: reading extension: %v", new sliceType$2([err$1])); /* */ $s = 18; case 18: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					$24r$2 = _r$4;
					$s = 19; case 19: return $24r$2;
    				/* } */ case 17:
  y				size = ((b >> 0));
    				$s = 12; continue;
			/* } else { */ case 11:
  �				_r$5 = fmt.Errorf("gif: unknown extension 0x%.2x", new sliceType$2([new $Uint8(extension)])); /* */ $s = 20; case 20: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				$24r$3 = _r$5;
				$s = 21; case 21: return $24r$3;
    			/* } */ case 12:
    		case 6:
  �		/* */ if (size > 0) { $s = 22; continue; }
		/* */ $s = 23; continue;
    		/* if (size > 0) { */ case 22:
  �			_r$6 = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, size)); /* */ $s = 24; case 24: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			err$2 = _r$6;
  �			/* */ if (!($interfaceIsEqual(err$2, $ifaceNil))) { $s = 25; continue; }
			/* */ $s = 26; continue;
    			/* if (!($interfaceIsEqual(err$2, $ifaceNil))) { */ case 25:
  				_r$7 = fmt.Errorf("gif: reading extension: %v", new sliceType$2([err$2])); /* */ $s = 27; case 27: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$24r$4 = _r$7;
				$s = 28; case 28: return $24r$4;
    			/* } */ case 26:
    		/* } */ case 23:
  �		/* */ if ((extension === 255) && ($bytesToString($subslice(new sliceType$1(d.tmp), 0, size))) === "NETSCAPE2.0") { $s = 29; continue; }
		/* */ $s = 30; continue;
    		/* if ((extension === 255) && ($bytesToString($subslice(new sliceType$1(d.tmp), 0, size))) === "NETSCAPE2.0") { */ case 29:
  			_r$8 = d.readBlock(); /* */ $s = 31; case 31: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			_tuple$2 = _r$8;
			n = _tuple$2[0];
			err$3 = _tuple$2[1];
  2			/* */ if (!($interfaceIsEqual(err$3, $ifaceNil))) { $s = 32; continue; }
			/* */ $s = 33; continue;
    			/* if (!($interfaceIsEqual(err$3, $ifaceNil))) { */ case 32:
  E				_r$9 = fmt.Errorf("gif: reading extension: %v", new sliceType$2([err$3])); /* */ $s = 34; case 34: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
				$24r$5 = _r$9;
				$s = 35; case 35: return $24r$5;
    			/* } */ case 33:
    			if (n === 0) {
  �				$s = -1; return $ifaceNil;
    			}
    			if ((n === 3) && (d.tmp[0] === 1)) {
  �				d.loopCount = ((d.tmp[1] >> 0)) | (((d.tmp[2] >> 0)) << 8 >> 0);
    			}
    		/* } */ case 30:
  �		/* while (true) { */ case 36:
  �			_r$10 = d.readBlock(); /* */ $s = 38; case 38: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_tuple$3 = _r$10;
			n$1 = _tuple$3[0];
			err$4 = _tuple$3[1];
   			/* */ if (!($interfaceIsEqual(err$4, $ifaceNil))) { $s = 39; continue; }
			/* */ $s = 40; continue;
    			/* if (!($interfaceIsEqual(err$4, $ifaceNil))) { */ case 39:
   ,				_r$11 = fmt.Errorf("gif: reading extension: %v", new sliceType$2([err$4])); /* */ $s = 41; case 41: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
				$24r$6 = _r$11;
				$s = 42; case 42: return $24r$6;
    			/* } */ case 40:
    			if (n$1 === 0) {
   v				$s = -1; return $ifaceNil;
    			}
    		$s = 36; continue;
		case 37:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readExtension }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.b = b; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.extension = extension; $f.n = n; $f.n$1 = n$1; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readExtension = function() { return this.$val.readExtension(); };
decoderreadExtension~
fmt.Errorfimage/gif.decoderimage/gif.readBlock~image/gif.readByteimage/gif.readFullimage/gif.readGraphicControl~image/gif.sliceType$1image/gif.sliceType$2 '(*image/gif.decoder).readGraphicControl �
�	decoder.ptr.prototype.readGraphicControl = function() {
		var $24r, $24r$1, $24r$2, _r, _r$1, _r$2, _r$3, d, err, flags, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; d = $f.d; err = $f.err; flags = $f.flags; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
   �		_r = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, 6)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
   �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
   �			_r$1 = fmt.Errorf("gif: can't read graphic control: %s", new sliceType$2([err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  !0		/* */ if (!((d.tmp[0] === 4))) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (!((d.tmp[0] === 4))) { */ case 6:
  !E			_r$2 = fmt.Errorf("gif: invalid graphic control extension block size: %d", new sliceType$2([new $Uint8(d.tmp[0])])); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r$1 = _r$2;
			$s = 9; case 9: return $24r$1;
    		/* } */ case 7:
  !�		flags = d.tmp[1];
  !�		d.disposalMethod = (((flags & 28) >>> 0)) >>> 2 << 24 >>> 24;
  !�		d.delayTime = ((d.tmp[2] >> 0)) | (((d.tmp[3] >> 0)) << 8 >> 0);
    		if (!((((flags & 1) >>> 0) === 0))) {
  "A			d.transparentIndex = d.tmp[4];
  "a			d.hasTransparentIndex = true;
    		}
  "�		/* */ if (!((d.tmp[5] === 0))) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!((d.tmp[5] === 0))) { */ case 10:
  "�			_r$3 = fmt.Errorf("gif: invalid graphic control extension block terminator: %d", new sliceType$2([new $Uint8(d.tmp[5])])); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$24r$2 = _r$3;
			$s = 13; case 13: return $24r$2;
    		/* } */ case 11:
  "�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readGraphicControl }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.d = d; $f.err = err; $f.flags = flags; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readGraphicControl = function() { return this.$val.readGraphicControl(); };
decoderreadGraphicControl~
fmt.Errorfimage/gif.decoderimage/gif.readFullimage/gif.sliceType$1image/gif.sliceType$2 ((*image/gif.decoder).readImageDescriptor �*�	decoder.ptr.prototype.readImageDescriptor = function(keepAllFrames) {
		var $24r, $24r$1, $24r$10, $24r$11, $24r$12, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, $24r$7, $24r$8, $24r$9, _i, _r, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, _tuple$1, _tuple$2, _tuple$3, br, d, err, err$1, err$2, i, keepAllFrames, litWidth, lzwr, m, n, p, pixel, ti, useLocalColorTable, x, x$1, x$2, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$10 = $f.$24r$10; $24r$11 = $f.$24r$11; $24r$12 = $f.$24r$12; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; $24r$7 = $f.$24r$7; $24r$8 = $f.$24r$8; $24r$9 = $f.$24r$9; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; br = $f.br; d = $f.d; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; i = $f.i; keepAllFrames = $f.keepAllFrames; litWidth = $f.litWidth; lzwr = $f.lzwr; m = $f.m; n = $f.n; p = $f.p; pixel = $f.pixel; ti = $f.ti; useLocalColorTable = $f.useLocalColorTable; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		d = this;
  #G		_r = d.newImageFromDescriptor(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		m = _tuple[0];
		err = _tuple[1];
  #m		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  #			$24r = err;
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  #�		useLocalColorTable = !((((d.imageFields & 128) >>> 0) === 0));
  #�		/* */ if (useLocalColorTable) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (useLocalColorTable) { */ case 5:
  #�			_r$1 = d.readColorTable(d.imageFields); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			m.Palette = _tuple$1[0];
			err = _tuple$1[1];
  $			/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 9:
  $$				$24r$1 = err;
				$s = 11; case 11: return $24r$1;
    			/* } */ case 10:
    			$s = 7; continue;
		/* } else { */ case 6:
  $?			/* */ if (d.globalColorTable === color.Palette.nil) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if (d.globalColorTable === color.Palette.nil) { */ case 12:
  $a				$24r$2 = errors.New("gif: no color table");
				$s = 14; case 14: return $24r$2;
    			/* } */ case 13:
  $�			m.Palette = d.globalColorTable;
    		/* } */ case 7:
    		if (d.hasTransparentIndex) {
    			if (!useLocalColorTable) {
  %				m.Palette = $appendSlice((color.Palette.nil), $convertSliceType(d.globalColorTable, sliceType$3));
    			}
  %W			ti = ((d.transparentIndex >> 0));
    			if (ti < m.Palette.$length) {
  %�				(x$1 = m.Palette, ((ti < 0 || ti >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + ti] = (x = new color.RGBA.ptr(0, 0, 0, 0), new x.constructor.elem(x))));
    			} else {
  &�				p = $makeSlice(color.Palette, (ti + 1 >> 0));
  &�				$copySlice(p, m.Palette);
  &�				i = m.Palette.$length;
				while (true) {
					if (!(i < p.$length)) { break; }
  '					((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i] = (x$2 = new color.RGBA.ptr(0, 0, 0, 0), new x$2.constructor.elem(x$2)));
  &�					i = i + (1) >> 0;
    				}
  '$				m.Palette = p;
    			}
    		}
  ':		_r$2 = readByte(d.r); /* */ $s = 15; case 15: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		litWidth = _tuple$2[0];
		err = _tuple$2[1];
  'Z		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 16; continue; }
		/* */ $s = 17; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 16:
  'l			_r$3 = fmt.Errorf("gif: reading image data: %v", new sliceType$2([err])); /* */ $s = 18; case 18: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$24r$3 = _r$3;
			$s = 19; case 19: return $24r$3;
    		/* } */ case 17:
  '�		/* */ if (litWidth < 2 || litWidth > 8) { $s = 20; continue; }
		/* */ $s = 21; continue;
    		/* if (litWidth < 2 || litWidth > 8) { */ case 20:
  '�			_r$4 = fmt.Errorf("gif: pixel size in decode out of range: %d", new sliceType$2([new $Uint8(litWidth)])); /* */ $s = 22; case 22: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r$4 = _r$4;
			$s = 23; case 23: return $24r$4;
    		/* } */ case 21:
  (B		br = new blockReader.ptr(d, 0, 0, $ifaceNil);
  (\		_r$5 = lzw.NewReader(br, 0, ((litWidth >> 0))); /* */ $s = 24; case 24: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		lzwr = _r$5;
  (�		$deferred.push([$methodVal(lzwr, "Close"), []]);
  (�		_r$6 = readFull(lzwr, m.Pix); /* */ $s = 25; case 25: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		err = _r$6;
  (�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 26; continue; }
		/* */ $s = 27; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 26:
  (�			/* */ if (!($interfaceIsEqual(err, io.ErrUnexpectedEOF))) { $s = 28; continue; }
			/* */ $s = 29; continue;
    			/* if (!($interfaceIsEqual(err, io.ErrUnexpectedEOF))) { */ case 28:
  (�				_r$7 = fmt.Errorf("gif: reading image data: %v", new sliceType$2([err])); /* */ $s = 30; case 30: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$24r$5 = _r$7;
				$s = 31; case 31: return $24r$5;
    			/* } */ case 29:
  )1			$24r$6 = errNotEnough;
			$s = 32; case 32: return $24r$6;
    		/* } */ case 27:
  +�		_r$8 = lzwr.Read($subslice(new sliceType$1(d.tmp), 256, 257)); /* */ $s = 33; case 33: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		_tuple$3 = _r$8;
		n = _tuple$3[0];
		err$1 = _tuple$3[1];
  +�		/* */ if (!((n === 0)) || (!($interfaceIsEqual(err$1, io.EOF)) && !($interfaceIsEqual(err$1, io.ErrUnexpectedEOF)))) { $s = 34; continue; }
		/* */ $s = 35; continue;
    		/* if (!((n === 0)) || (!($interfaceIsEqual(err$1, io.EOF)) && !($interfaceIsEqual(err$1, io.ErrUnexpectedEOF)))) { */ case 34:
  ,"			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 36; continue; }
			/* */ $s = 37; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 36:
  ,5				_r$9 = fmt.Errorf("gif: reading image data: %v", new sliceType$2([err$1])); /* */ $s = 38; case 38: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
				$24r$7 = _r$9;
				$s = 39; case 39: return $24r$7;
    			/* } */ case 37:
  ,q			$24r$8 = errTooMuch;
			$s = 40; case 40: return $24r$8;
    		/* } */ case 35:
  -		_r$10 = br.close(); /* */ $s = 41; case 41: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
		err$2 = _r$10;
  -		/* */ if ($interfaceIsEqual(err$2, errTooMuch)) { $s = 42; continue; }
		/* */ if (!($interfaceIsEqual(err$2, $ifaceNil))) { $s = 43; continue; }
		/* */ $s = 44; continue;
    		/* if ($interfaceIsEqual(err$2, errTooMuch)) { */ case 42:
  -9			$24r$9 = errTooMuch;
			$s = 45; case 45: return $24r$9;
    		/* } else if (!($interfaceIsEqual(err$2, $ifaceNil))) { */ case 43:
  -e			_r$11 = fmt.Errorf("gif: reading image data: %v", new sliceType$2([err$2])); /* */ $s = 46; case 46: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			$24r$10 = _r$11;
			$s = 47; case 47: return $24r$10;
    		/* } */ case 44:
  -�		/* */ if (m.Palette.$length < 256) { $s = 48; continue; }
		/* */ $s = 49; continue;
    		/* if (m.Palette.$length < 256) { */ case 48:
  -�			_ref = m.Pix;
			_i = 0;
			/* while (true) { */ case 50:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 51; continue; }
				pixel = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  .				/* */ if (((pixel >> 0)) >= m.Palette.$length) { $s = 52; continue; }
				/* */ $s = 53; continue;
    				/* if (((pixel >> 0)) >= m.Palette.$length) { */ case 52:
  .<					$24r$11 = errBadPixel;
					$s = 54; case 54: return $24r$11;
    				/* } */ case 53:
    				_i++;
			$s = 50; continue;
			case 51:
    		/* } */ case 49:
    		if (!((((d.imageFields & 64) >>> 0) === 0))) {
  .�			uninterlace(m);
    		}
    		if (keepAllFrames || (d.image.$length === 0)) {
  .�			d.image = $append(d.image, m);
  /			d.delay = $append(d.delay, d.delayTime);
  //			d.disposal = $append(d.disposal, d.disposalMethod);
    		}
  0(		d.delayTime = 0;
  09		d.hasTransparentIndex = false;
  0X		$24r$12 = $ifaceNil;
		$s = 55; case 55: return $24r$12;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readImageDescriptor }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$10 = $24r$10; $f.$24r$11 = $24r$11; $f.$24r$12 = $24r$12; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f.$24r$7 = $24r$7; $f.$24r$8 = $24r$8; $f.$24r$9 = $24r$9; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.br = br; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.i = i; $f.keepAllFrames = keepAllFrames; $f.litWidth = litWidth; $f.lzwr = lzwr; $f.m = m; $f.n = n; $f.p = p; $f.pixel = pixel; $f.ti = ti; $f.useLocalColorTable = useLocalColorTable; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	decoder.prototype.readImageDescriptor = function(keepAllFrames) { return this.$val.readImageDescriptor(keepAllFrames); };
decoderreadImageDescriptor~compress/lzw.NewReader
errors.New
fmt.Errorfimage/color.Colorimage/color.Paletteimage/color.RGBAimage/gif.blockReaderimage/gif.close~image/gif.decoderimage/gif.errBadPixelimage/gif.errNotEnoughimage/gif.errTooMuch!image/gif.newImageFromDescriptor~image/gif.ptrTypeimage/gif.readByteimage/gif.readColorTable~image/gif.readFullimage/gif.sliceType$1image/gif.sliceType$2image/gif.sliceType$3image/gif.uninterlaceio.EOFio.ErrUnexpectedEOF +(*image/gif.decoder).newImageFromDescriptor ��	decoder.ptr.prototype.newImageFromDescriptor = function() {
		var $24r, _r, _r$1, d, err, height, left, top, width, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; d = $f.d; err = $f.err; height = $f.height; left = $f.left; top = $f.top; width = $f.width; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  0�		_r = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, 9)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
  0�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  0�			_r$1 = fmt.Errorf("gif: can't read image descriptor: %s", new sliceType$2([err])); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = [ptrType$1.nil, _r$1];
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  1(		left = ((d.tmp[0] >> 0)) + (((d.tmp[1] >> 0)) << 8 >> 0) >> 0;
  1R		top = ((d.tmp[2] >> 0)) + (((d.tmp[3] >> 0)) << 8 >> 0) >> 0;
  1{		width = ((d.tmp[4] >> 0)) + (((d.tmp[5] >> 0)) << 8 >> 0) >> 0;
  1�		height = ((d.tmp[6] >> 0)) + (((d.tmp[7] >> 0)) << 8 >> 0) >> 0;
  1�		d.imageFields = d.tmp[8];
    		if ((left + width >> 0) > d.width || (top + height >> 0) > d.height) {
  5a			$s = -1; return [ptrType$1.nil, errors.New("gif: frame bounds larger than image bounds")];
    		}
  5�		$s = -1; return [image.NewPaletted(new image.Rectangle.ptr(new image.Point.ptr(left, top), new image.Point.ptr(left + width >> 0, top + height >> 0)), color.Palette.nil), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.newImageFromDescriptor }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.d = d; $f.err = err; $f.height = height; $f.left = left; $f.top = top; $f.width = width; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.newImageFromDescriptor = function() { return this.$val.newImageFromDescriptor(); };
decodernewImageFromDescriptor~
errors.New
fmt.Errorfimage.NewPalettedimage.Palettedimage.Pointimage.Rectangleimage/color.Paletteimage/gif.decoderimage/gif.ptrType$1image/gif.readFullimage/gif.sliceType$1image/gif.sliceType$2 (*image/gif.decoder).readBlock �=	decoder.ptr.prototype.readBlock = function() {
		var _r, _r$1, _tuple, d, err, err$1, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; d = $f.d; err = $f.err; err$1 = $f.err$1; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  6b		_r = readByte(d.r); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if ((n === 0) || !($interfaceIsEqual(err, $ifaceNil))) {
  6�			$s = -1; return [0, err];
    		}
  6�		_r$1 = readFull(d.r, $subslice(new sliceType$1(d.tmp), 0, n)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err$1 = _r$1;
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  6�			$s = -1; return [0, err$1];
    		}
  6�		$s = -1; return [((n >> 0)), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readBlock }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readBlock = function() { return this.$val.readBlock(); };
decoder
readBlock~image/gif.decoderimage/gif.readByteimage/gif.readFullimage/gif.sliceType$1 image/gif.uninterlace	image/gifuninterlace uninterlace��	uninterlace = function(m) {
		var _i, _ref, dx, dy, m, nOffset, nPix, offset, pass, y;
  9P		nPix = sliceType$1.nil;
  9^		dx = $clone(m.Bounds(), image.Rectangle).Dx();
  9u		dy = $clone(m.Bounds(), image.Rectangle).Dy();
  9�		nPix = $makeSlice(sliceType$1, ($imul(dx, dy)));
  9�		offset = 0;
  9�		_ref = interlacing;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			pass = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), interlaceScan);
  :			nOffset = $imul(pass.start, dx);
  :a			y = pass.start;
			while (true) {
				if (!(y < dy)) { break; }
  :�				$copySlice($subslice(nPix, nOffset, (nOffset + dx >> 0)), $subslice(m.Pix, offset, (offset + dx >> 0)));
  :�				offset = offset + (dx) >> 0;
  :�				nOffset = nOffset + (($imul(dx, pass.skip))) >> 0;
  :z				y = y + (pass.skip) >> 0;
    			}
    			_i++;
		}
  :�		m.Pix = nPix;
    	};
uninterlaceimage.Rectangleimage/gif.interlaceScanimage/gif.interlacingimage/gif.sliceType$1image/gif.uninterlace image/gif.Decode	image/gifDecode Decode�	Decode = function(r) {
		var _r, d, err, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ;�		d = new decoder.ptr($ifaceNil, "", 0, 0, 0, 0, 0, 0, 0, 0, false, color.Palette.nil, sliceType$4.nil, sliceType$1.nil, sliceType$5.nil, arrayType.zero());
  ;�		_r = d.decode(r, false, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ;�			$s = -1; return [$ifaceNil, err];
    		}
  ;�		$s = -1; return [(x = d.image, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decode }; } $f._r = _r; $f.d = d; $f.err = err; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Decode = Decode;
Decode	image/color.Paletteimage/gif.Decodeimage/gif.arrayTypeimage/gif.decoderimage/gif.decode~image/gif.ptrType$1image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5 image/gif.DecodeAll	image/gif	DecodeAll 	DecodeAll�^	DecodeAll = function(r) {
		var _r, d, err, gif, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; gif = $f.gif; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  BI		d = new decoder.ptr($ifaceNil, "", 0, 0, 0, 0, 0, 0, 0, 0, false, color.Palette.nil, sliceType$4.nil, sliceType$1.nil, sliceType$5.nil, arrayType.zero());
  BW		_r = d.decode(r, false, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  B�			$s = -1; return [ptrType$2.nil, err];
    		}
  B�		gif = new GIF.ptr(d.image, d.delay, d.loopCount, d.disposal, new image.Config.ptr(d.globalColorTable, d.width, d.height), d.backgroundIndex);
  C�		$s = -1; return [gif, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: DecodeAll }; } $f._r = _r; $f.d = d; $f.err = err; $f.gif = gif; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.DecodeAll = DecodeAll;
	DecodeAllimage.Configimage/color.Paletteimage/gif.DecodeAllimage/gif.GIFimage/gif.arrayTypeimage/gif.decoderimage/gif.decode~image/gif.ptrType$2image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5 image/gif.DecodeConfig	image/gifDecodeConfig DecodeConfig�	DecodeConfig = function(r) {
		var _r, d, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Dd		d = new decoder.ptr($ifaceNil, "", 0, 0, 0, 0, 0, 0, 0, 0, false, color.Palette.nil, sliceType$4.nil, sliceType$1.nil, sliceType$5.nil, arrayType.zero());
  Dr		_r = d.decode(r, true, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  D�			$s = -1; return [new image.Config.ptr($ifaceNil, 0, 0), err];
    		}
  D�		$s = -1; return [new image.Config.ptr(d.globalColorTable, d.width, d.height), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: DecodeConfig }; } $f._r = _r; $f.d = d; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.DecodeConfig = DecodeConfig;
DecodeConfig	image.Configimage/color.Paletteimage/gif.DecodeConfigimage/gif.arrayTypeimage/gif.decoderimage/gif.decode~image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5 image/gif.init	image/gifinit init�
	init = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  EA		$r = image.RegisterFormat("gif", "GIF8?a", Decode, DecodeConfig); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: init }; } $f.$s = $s; $f.$r = $r; return $f;
	};
��    		$r = init(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
image.RegisterFormatimage/gif.Decodeimage/gif.DecodeConfigimage/gif.init image/gif.log2	image/giflog2 log2�W	log2 = function(x) {
		var _i, _ref, i, v, x;
  GP		_ref = log2Lookup;
		_i = 0;
		while (true) {
			if (!(_i < 8)) { break; }
			i = _i;
			v = ((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]);
    			if (x <= v) {
  G�				return i;
    			}
    			_i++;
		}
  G�		return -1;
    	};
log2image/gif.log2image/gif.log2Lookup image/gif.writeUint16	image/gifwriteUint16 writeUint16�J	writeUint16 = function(b, u) {
		var b, u;
  G�		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = ((u << 24 >>> 24)));
  G�		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (((u >>> 8 << 16 >>> 16) << 24 >>> 24)));
    	};
writeUint16image/gif.writeUint16 (image/gif.blockWriter).setup ��	blockWriter.ptr.prototype.setup = function() {
		var b;
		b = this;
  K�		b.e.buf[0] = 0;
    	};
	blockWriter.prototype.setup = function() { return this.$val.setup(); };
blockWritersetup~image/gif.blockWriter (image/gif.blockWriter).Flush ��	blockWriter.ptr.prototype.Flush = function() {
		var b;
		b = this;
  K�		return b.e.err;
    	};
	blockWriter.prototype.Flush = function() { return this.$val.Flush(); };
blockWriterimage/gif.blockWriter !(image/gif.blockWriter).WriteByte ��	blockWriter.ptr.prototype.WriteByte = function(c) {
		var b, c, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; c = $f.c; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
    		if (!($interfaceIsEqual(b.e.err, $ifaceNil))) {
  L2			$s = -1; return b.e.err;
    		}
  Lj		b.e.buf[0] = (b.e.buf[0] + (1) << 24 >>> 24);
  Lx		(x = b.e.buf, x$1 = b.e.buf[0], ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = c));
    		if (b.e.buf[0] < 255) {
  L�			$s = -1; return $ifaceNil;
    		}
  L�		$r = b.e.write($subslice(new sliceType$1(b.e.buf), 0, 256)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  L�		b.e.buf[0] = 0;
  L�		$s = -1; return b.e.err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: blockWriter.ptr.prototype.WriteByte }; } $f.b = b; $f.c = c; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockWriter.prototype.WriteByte = function(c) { return this.$val.WriteByte(c); };
blockWriterimage/gif.blockWriterimage/gif.sliceType$1image/gif.write~ (image/gif.blockWriter).Write �T	blockWriter.ptr.prototype.Write = function(data) {
		var _i, _r, _ref, b, c, data, err, i, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; b = $f.b; c = $f.c; data = $f.data; err = $f.err; i = $f.i; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  M�		_ref = data;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  M�			_r = $clone(b, blockWriter).WriteByte(c); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  M�				$s = -1; return [i, err];
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  M�		$s = -1; return [data.$length, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: blockWriter.ptr.prototype.Write }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.b = b; $f.c = c; $f.data = data; $f.err = err; $f.i = i; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockWriter.prototype.Write = function(data) { return this.$val.Write(data); };
blockWriterimage/gif.blockWriter (image/gif.blockWriter).close ��	blockWriter.ptr.prototype.close = function() {
		var b, n, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; b = $f.b; n = $f.n; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = this;
  N�		/* */ if (b.e.buf[0] === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (b.e.buf[0] === 0) { */ case 1:
  N�			$r = b.e.writeByte(0); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 3; continue;
		/* } else { */ case 2:
  N�			n = ((b.e.buf[0] >>> 0));
  N�			(x = b.e.buf, x$1 = n + 1 >>> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = 0));
  N�			$r = b.e.write($subslice(new sliceType$1(b.e.buf), 0, (n + 2 >>> 0))); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
  O
		$r = b.e.flush(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: blockWriter.ptr.prototype.close }; } $f.b = b; $f.n = n; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	blockWriter.prototype.close = function() { return this.$val.close(); };
blockWriterclose~image/gif.blockWriterimage/gif.flush~image/gif.sliceType$1image/gif.writeByte~image/gif.write~ (*image/gif.encoder).flush ��	encoder.ptr.prototype.flush = function() {
		var _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  OJ			$s = -1; return;
    		}
  OU		_r = e.w.Flush(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		e.err = _r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.flush }; } $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.flush = function() { return this.$val.flush(); };
encoderflush~image/gif.encoder (*image/gif.encoder).write �R	encoder.ptr.prototype.write = function(p) {
		var _r, _tuple, e, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; e = $f.e; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  O�			$s = -1; return;
    		}
  O�		_r = e.w.Write(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		e.err = _tuple[1];
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.write }; } $f._r = _r; $f._tuple = _tuple; $f.e = e; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.write = function(p) { return this.$val.write(p); };
encoderwrite~image/gif.encoder (*image/gif.encoder).writeByte � 	encoder.ptr.prototype.writeByte = function(b) {
		var _r, b, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  P			$s = -1; return;
    		}
  P		_r = e.w.WriteByte(b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		e.err = _r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeByte }; } $f._r = _r; $f.b = b; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeByte = function(b) { return this.$val.writeByte(b); };
encoder
writeByte~image/gif.encoder  (*image/gif.encoder).writeHeader �T	encoder.ptr.prototype.writeHeader = function() {
		var _r, _r$1, _r$2, _tuple, _tuple$1, _tuple$2, _tuple$3, e, err, err$1, ok, p, paddedSize, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; e = $f.e; err = $f.err; err$1 = $f.err$1; ok = $f.ok; p = $f.p; paddedSize = $f.paddedSize; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  Pd			$s = -1; return;
    		}
  Po		_r = io.WriteString(e.w, "GIF89a"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		e.err = _tuple[1];
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  P�			$s = -1; return;
    		}
  P�		writeUint16($subslice(new sliceType$1(e.buf), 0, 2), ((e.g.Config.Width << 16 >>> 16)));
  Q		writeUint16($subslice(new sliceType$1(e.buf), 2, 4), ((e.g.Config.Height << 16 >>> 16)));
  QE		$r = e.write($subslice(new sliceType$1(e.buf), 0, 4)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Q]		_tuple$1 = $assertType(e.g.Config.ColorModel, color.Palette, true);
		p = _tuple$1[0];
		ok = _tuple$1[1];
  QZ		/* */ if (ok && p.$length > 0) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (ok && p.$length > 0) { */ case 3:
  Q�			paddedSize = log2(p.$length);
  Q�			e.buf[0] = ((128 | ((paddedSize << 24 >>> 24))) >>> 0);
  R			e.buf[1] = e.g.BackgroundIndex;
  R5			e.buf[2] = 0;
  R^			$r = e.write($subslice(new sliceType$1(e.buf), 0, 3)); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Rw			err = $ifaceNil;
  R�			_r$1 = encodeColorTable(new sliceType$1(e.globalColorTable), p, paddedSize); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$2 = _r$1;
			e.globalCT = _tuple$2[0];
			err = _tuple$2[1];
    			if (!($interfaceIsEqual(err, $ifaceNil)) && $interfaceIsEqual(e.err, $ifaceNil)) {
  R�				e.err = err;
  S 				$s = -1; return;
    			}
  S			$r = e.write($subslice(new sliceType$1(e.globalColorTable), 0, e.globalCT)); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 5; continue;
		/* } else { */ case 4:
  S�			e.buf[0] = 0;
  S�			e.buf[1] = 0;
  S�			e.buf[2] = 0;
  T 			$r = e.write($subslice(new sliceType$1(e.buf), 0, 3)); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 5:
  T=		/* */ if (e.g.Image.$length > 1 && e.g.LoopCount >= 0) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (e.g.Image.$length > 1 && e.g.LoopCount >= 0) { */ case 10:
  Tm			e.buf[0] = 33;
  T�			e.buf[1] = 255;
  T�			e.buf[2] = 11;
  T�			$r = e.write($subslice(new sliceType$1(e.buf), 0, 3)); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  T�			_r$2 = io.WriteString(e.w, "NETSCAPE2.0"); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$3 = _r$2;
			err$1 = _tuple$3[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil)) && $interfaceIsEqual(e.err, $ifaceNil)) {
  Uc				e.err = err$1;
  Ur				$s = -1; return;
    			}
  U			e.buf[0] = 3;
  U�			e.buf[1] = 1;
  U�			writeUint16($subslice(new sliceType$1(e.buf), 2, 4), ((e.g.LoopCount << 16 >>> 16)));
  U�			e.buf[4] = 0;
  V			$r = e.write($subslice(new sliceType$1(e.buf), 0, 5)); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 11:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeHeader }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.e = e; $f.err = err; $f.err$1 = err$1; $f.ok = ok; $f.p = p; $f.paddedSize = paddedSize; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeHeader = function() { return this.$val.writeHeader(); };
encoderwriteHeader~image/color.Paletteimage/gif.encodeColorTableimage/gif.encoderimage/gif.log2image/gif.sliceType$1image/gif.writeUint16image/gif.write~io.WriteString image/gif.encodeColorTable	image/gifencodeColorTable encodeColorTable�l	encodeColorTable = function(dst, p, size) {
		var _i, _i$1, _r, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, _tuple$1, b, bb, c, dst, fill, g, gg, i, i$1, n, ok, p, r, rgba, rr, size, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; bb = $f.bb; c = $f.c; dst = $f.dst; fill = $f.fill; g = $f.g; gg = $f.gg; i = $f.i; i$1 = $f.i$1; n = $f.n; ok = $f.ok; p = $f.p; r = $f.r; rgba = $f.rgba; rr = $f.rr; size = $f.size; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (((size >>> 0)) >= 8) {
  V�			$s = -1; return [0, errors.New("gif: cannot encode color table with more than 256 entries")];
    		}
  W		_ref = p;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ($interfaceIsEqual(c, $ifaceNil)) {
  W.				$s = -1; return [0, errors.New("gif: cannot encode color table with nil entries")];
    			}
  W�			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = 0;
			r = _tmp;
			g = _tmp$1;
			b = _tmp$2;
  W�			_tuple = $assertType(c, color.RGBA, true);
			rgba = $clone(_tuple[0], color.RGBA);
			ok = _tuple[1];
  W�			/* */ if (ok) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ok) { */ case 3:
  X				_tmp$3 = rgba.R;
				_tmp$4 = rgba.G;
				_tmp$5 = rgba.B;
				r = _tmp$3;
				g = _tmp$4;
				b = _tmp$5;
    				$s = 5; continue;
			/* } else { */ case 4:
  XD				_r = c.RGBA(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				rr = _tuple$1[0];
				gg = _tuple$1[1];
				bb = _tuple$1[2];
  Xa				_tmp$6 = (((rr >>> 8 >>> 0) << 24 >>> 24));
				_tmp$7 = (((gg >>> 8 >>> 0) << 24 >>> 24));
				_tmp$8 = (((bb >>> 8 >>> 0) << 24 >>> 24));
				r = _tmp$6;
				g = _tmp$7;
				b = _tmp$8;
    			/* } */ case 5:
  X�			(x = ($imul(3, i)) + 0 >> 0, ((x < 0 || x >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x] = r));
  X�			(x$1 = ($imul(3, i)) + 1 >> 0, ((x$1 < 0 || x$1 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$1] = g));
  X�			(x$2 = ($imul(3, i)) + 2 >> 0, ((x$2 < 0 || x$2 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$2] = b));
    			_i++;
		$s = 1; continue;
		case 2:
  X�		n = ((size < 0 || size >= log2Lookup.length) ? ($throwRuntimeError("index out of range"), undefined) : log2Lookup[size]);
    		if (n > p.$length) {
  Y			fill = $subslice(dst, ($imul(3, p.$length)), ($imul(3, n)));
  Y+			_ref$1 = fill;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i$1 = _i$1;
  YD				((i$1 < 0 || i$1 >= fill.$length) ? ($throwRuntimeError("index out of range"), undefined) : fill.$array[fill.$offset + i$1] = 0);
    				_i$1++;
			}
    		}
  YX		$s = -1; return [$imul(3, n), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encodeColorTable }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.bb = bb; $f.c = c; $f.dst = dst; $f.fill = fill; $f.g = g; $f.gg = gg; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.ok = ok; $f.p = p; $f.r = r; $f.rgba = rgba; $f.rr = rr; $f.size = size; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
encodeColorTable
errors.Newimage/color.RGBAimage/gif.encodeColorTableimage/gif.log2Lookup %(*image/gif.encoder).colorTablesMatch �y	encoder.ptr.prototype.colorTablesMatch = function(localLen, transparentIndex) {
		var e, localLen, localSize, trOff, transparentIndex;
		e = this;
  Y�		localSize = $imul(3, localLen);
    		if (transparentIndex >= 0) {
  Y�			trOff = $imul(3, transparentIndex);
  Z			return bytes.Equal($subslice(new sliceType$1(e.globalColorTable), 0, trOff), $subslice(new sliceType$1(e.localColorTable), 0, trOff)) && bytes.Equal($subslice(new sliceType$1(e.globalColorTable), (trOff + 3 >> 0), localSize), $subslice(new sliceType$1(e.localColorTable), (trOff + 3 >> 0), localSize));
    		}
  Z�		return bytes.Equal($subslice(new sliceType$1(e.globalColorTable), 0, localSize), $subslice(new sliceType$1(e.localColorTable), 0, localSize));
    	};
	encoder.prototype.colorTablesMatch = function(localLen, transparentIndex) { return this.$val.colorTablesMatch(localLen, transparentIndex); };
encodercolorTablesMatch~bytes.Equalimage/gif.encoderimage/gif.sliceType$1 $(*image/gif.encoder).writeImageBlock �&�	encoder.ptr.prototype.writeImageBlock = function(pm, delay, disposal) {
		var _i, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, a, b, bw, c, ct, delay, disposal, dx, e, err, gp, i, i$1, litWidth, lzww, ok, paddedSize, pm, transparentIndex, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; a = $f.a; b = $f.b; bw = $f.bw; c = $f.c; ct = $f.ct; delay = $f.delay; disposal = $f.disposal; dx = $f.dx; e = $f.e; err = $f.err; gp = $f.gp; i = $f.i; i$1 = $f.i$1; litWidth = $f.litWidth; lzww = $f.lzww; ok = $f.ok; paddedSize = $f.paddedSize; pm = $f.pm; transparentIndex = $f.transparentIndex; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  [y			$s = -1; return;
    		}
    		if (pm.Palette.$length === 0) {
  [�			e.err = errors.New("gif: cannot encode image block with empty palette");
  [�			$s = -1; return;
    		}
  [�		b = $clone(pm.Bounds(), image.Rectangle);
    		if (b.Min.X < 0 || b.Max.X >= 65536 || b.Min.Y < 0 || b.Max.Y >= 65536) {
  \S			e.err = errors.New("gif: image block is too large to encode");
  \�			$s = -1; return;
    		}
    		if (!$clone(b, image.Rectangle).In(new image.Rectangle.ptr(new image.Point.ptr(0, 0), new image.Point.ptr(e.g.Config.Width, e.g.Config.Height)))) {
  \�			e.err = errors.New("gif: image block is out of bounds");
  ]-			$s = -1; return;
    		}
  ]9		transparentIndex = -1;
  ]Q		_ref = pm.Palette;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ($interfaceIsEqual(c, $ifaceNil)) {
  ]�				e.err = errors.New("gif: cannot encode color table with nil entries");
  ]�				$s = -1; return;
    			}
  ]�			_r = c.RGBA(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			a = _tuple[3];
    			if (a === 0) {
  ^ 				transparentIndex = i;
  ^				/* break; */ $s = 2; continue;
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  ^'		/* */ if (delay > 0 || !((disposal === 0)) || !((transparentIndex === -1))) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (delay > 0 || !((disposal === 0)) || !((transparentIndex === -1))) { */ case 4:
  ^c			e.buf[0] = 33;
  ^�			e.buf[1] = 249;
  ^�			e.buf[2] = 4;
    			if (!((transparentIndex === -1))) {
  _				e.buf[3] = ((1 | (disposal << 2 << 24 >>> 24)) >>> 0);
    			} else {
  _;				e.buf[3] = ((0 | (disposal << 2 << 24 >>> 24)) >>> 0);
    			}
  __			writeUint16($subslice(new sliceType$1(e.buf), 4, 6), ((delay << 16 >>> 16)));
    			if (!((transparentIndex === -1))) {
  _�				e.buf[6] = ((transparentIndex << 24 >>> 24));
    			} else {
  `				e.buf[6] = 0;
    			}
  `2			e.buf[7] = 0;
  `Y			$r = e.write($subslice(new sliceType$1(e.buf), 0, 8)); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 5:
  `p		e.buf[0] = 44;
  `�		writeUint16($subslice(new sliceType$1(e.buf), 1, 3), ((b.Min.X << 16 >>> 16)));
  `�		writeUint16($subslice(new sliceType$1(e.buf), 3, 5), ((b.Min.Y << 16 >>> 16)));
  `�		writeUint16($subslice(new sliceType$1(e.buf), 5, 7), (($clone(b, image.Rectangle).Dx() << 16 >>> 16)));
  a
		writeUint16($subslice(new sliceType$1(e.buf), 7, 9), (($clone(b, image.Rectangle).Dy() << 16 >>> 16)));
  a3		$r = e.write($subslice(new sliceType$1(e.buf), 0, 9)); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ba		paddedSize = log2(pm.Palette.$length);
  b�		_tuple$1 = $assertType(e.g.Config.ColorModel, color.Palette, true);
		gp = _tuple$1[0];
		ok = _tuple$1[1];
  b�		/* */ if (ok && pm.Palette.$length <= gp.$length && $indexPtr(gp.$array, gp.$offset + 0, ptrType$3) === (x = pm.Palette, $indexPtr(x.$array, x.$offset + 0, ptrType$3))) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if (ok && pm.Palette.$length <= gp.$length && $indexPtr(gp.$array, gp.$offset + 0, ptrType$3) === (x = pm.Palette, $indexPtr(x.$array, x.$offset + 0, ptrType$3))) { */ case 8:
  c"			$r = e.writeByte(0); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 10; continue;
		/* } else { */ case 9:
  c\			_r$1 = encodeColorTable(new sliceType$1(e.localColorTable), pm.Palette, paddedSize); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$2 = _r$1;
			ct = _tuple$2[0];
			err = _tuple$2[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(e.err, $ifaceNil)) {
  c�					e.err = err;
    				}
  c�				$s = -1; return;
    			}
  d�			/* */ if (ct <= e.globalCT && e.colorTablesMatch(pm.Palette.$length, transparentIndex)) { $s = 13; continue; }
			/* */ $s = 14; continue;
    			/* if (ct <= e.globalCT && e.colorTablesMatch(pm.Palette.$length, transparentIndex)) { */ case 13:
  d�				$r = e.writeByte(0); /* */ $s = 16; case 16: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 15; continue;
			/* } else { */ case 14:
  eL				$r = e.writeByte((128 | ((paddedSize << 24 >>> 24))) >>> 0); /* */ $s = 17; case 17: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  e|				$r = e.write($subslice(new sliceType$1(e.localColorTable), 0, ct)); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 15:
    		/* } */ case 10:
  e�		litWidth = paddedSize + 1 >> 0;
    		if (litWidth < 2) {
  e�			litWidth = 2;
    		}
  e�		$r = e.writeByte(((litWidth << 24 >>> 24))); /* */ $s = 19; case 19: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  f		bw = new blockWriter.ptr(e);
  f8		$clone(bw, blockWriter).setup();
  fD		_r$2 = lzw.NewWriter(new bw.constructor.elem(bw), 0, litWidth); /* */ $s = 20; case 20: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		lzww = _r$2;
  fu		dx = $clone(b, image.Rectangle).Dx();
  fr		/* */ if (dx === pm.Stride) { $s = 21; continue; }
		/* */ $s = 22; continue;
    		/* if (dx === pm.Stride) { */ case 21:
  f�			_r$3 = lzww.Write($subslice(pm.Pix, 0, ($imul(dx, $clone(b, image.Rectangle).Dy())))); /* */ $s = 24; case 24: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$3 = _r$3;
			e.err = _tuple$3[1];
  f�			/* */ if (!($interfaceIsEqual(e.err, $ifaceNil))) { $s = 25; continue; }
			/* */ $s = 26; continue;
    			/* if (!($interfaceIsEqual(e.err, $ifaceNil))) { */ case 25:
  f�				_r$4 = lzww.Close(); /* */ $s = 27; case 27: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_r$4;
  f�				$s = -1; return;
    			/* } */ case 26:
    			$s = 23; continue;
		/* } else { */ case 22:
  g			_tmp = 0;
			_tmp$1 = b.Min.Y;
			i$1 = _tmp;
			y = _tmp$1;
			/* while (true) { */ case 28:
				/* if (!(y < b.Max.Y)) { break; } */ if(!(y < b.Max.Y)) { $s = 29; continue; }
  gA				_r$5 = lzww.Write($subslice(pm.Pix, i$1, (i$1 + dx >> 0))); /* */ $s = 30; case 30: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_tuple$4 = _r$5;
				e.err = _tuple$4[1];
  gl				/* */ if (!($interfaceIsEqual(e.err, $ifaceNil))) { $s = 31; continue; }
				/* */ $s = 32; continue;
    				/* if (!($interfaceIsEqual(e.err, $ifaceNil))) { */ case 31:
  g�					_r$6 = lzww.Close(); /* */ $s = 33; case 33: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_r$6;
  g�					$s = -1; return;
    				/* } */ case 32:
  g$				_tmp$2 = i$1 + pm.Stride >> 0;
				_tmp$3 = y + 1 >> 0;
				i$1 = _tmp$2;
				y = _tmp$3;
			$s = 28; continue;
			case 29:
    		/* } */ case 23:
  g�		_r$7 = lzww.Close(); /* */ $s = 34; case 34: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_r$7;
  g�		$r = $clone(bw, blockWriter).close(); /* */ $s = 35; case 35: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeImageBlock }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f.a = a; $f.b = b; $f.bw = bw; $f.c = c; $f.ct = ct; $f.delay = delay; $f.disposal = disposal; $f.dx = dx; $f.e = e; $f.err = err; $f.gp = gp; $f.i = i; $f.i$1 = i$1; $f.litWidth = litWidth; $f.lzww = lzww; $f.ok = ok; $f.paddedSize = paddedSize; $f.pm = pm; $f.transparentIndex = transparentIndex; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeImageBlock = function(pm, delay, disposal) { return this.$val.writeImageBlock(pm, delay, disposal); };
encoderwriteImageBlock~compress/lzw.NewWriter
errors.Newimage.Pointimage.Rectangleimage/color.Colorimage/color.Paletteimage/gif.blockWriterimage/gif.close~image/gif.colorTablesMatch~image/gif.encodeColorTableimage/gif.encoderimage/gif.log2image/gif.ptrType$3image/gif.ptrType$4image/gif.setup~image/gif.sliceType$1image/gif.writeByte~image/gif.writeUint16image/gif.write~ image/gif.EncodeAll	image/gif	EncodeAll 	EncodeAll�	EncodeAll = function(w, g) {
		var _i, _ref, _tuple, _tuple$1, disposal, e, g, i, ok, ok$1, p, pm, w, ww, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; disposal = $f.disposal; e = $f.e; g = $f.g; i = $f.i; ok = $f.ok; ok$1 = $f.ok$1; p = $f.p; pm = $f.pm; w = $f.w; ww = $f.ww; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (g.Image.$length === 0) {
  jn			$s = -1; return errors.New("gif: must provide at least one image");
    		}
    		if (!((g.Image.$length === g.Delay.$length))) {
  j�			$s = -1; return errors.New("gif: mismatched image and delay lengths");
    		}
  k		e = new encoder.ptr($ifaceNil, $ifaceNil, $clone(g, GIF), 0, arrayType$1.zero(), arrayType$2.zero(), arrayType$2.zero());
    		if (!(e.g.Disposal === sliceType$1.nil) && !((e.g.Image.$length === e.g.Disposal.$length))) {
  l@			$s = -1; return errors.New("gif: mismatched image and disposal lengths");
    		}
    		if ($equal(e.g.Config, (new image.Config.ptr($ifaceNil, 0, 0)), image.Config)) {
  l�			p = $clone((x = g.Image, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])).Bounds().Max, image.Point);
  l�			e.g.Config.Width = p.X;
  l�			e.g.Config.Height = p.Y;
    		} else if (!($interfaceIsEqual(e.g.Config.ColorModel, $ifaceNil))) {
  m)			_tuple = $assertType(e.g.Config.ColorModel, color.Palette, true);
			ok = _tuple[1];
    			if (!ok) {
  mb				$s = -1; return errors.New("gif: GIF color model must be a color.Palette");
    			}
    		}
  m�		_tuple$1 = $assertType(w, writer, true);
		ww = _tuple$1[0];
		ok$1 = _tuple$1[1];
    		if (ok$1) {
  m�			e.w = ww;
    		} else {
  m�			e.w = bufio.NewWriter(w);
    		}
  n 		$r = e.writeHeader(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  n		_ref = g.Image;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			i = _i;
			pm = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  n0			disposal = 0;
    			if (!(g.Disposal === sliceType$1.nil)) {
  na				disposal = (x$1 = g.Disposal, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i]));
    			}
  n�			$r = e.writeImageBlock(pm, (x$2 = g.Delay, ((i < 0 || i >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + i])), disposal); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 2; continue;
		case 3:
  n�		$r = e.writeByte(59); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  n�		$r = e.flush(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  n�		$s = -1; return e.err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: EncodeAll }; } $f._i = _i; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.disposal = disposal; $f.e = e; $f.g = g; $f.i = i; $f.ok = ok; $f.ok$1 = ok$1; $f.p = p; $f.pm = pm; $f.w = w; $f.ww = ww; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.EncodeAll = EncodeAll;
	EncodeAllbufio.NewWriter
errors.Newimage.Configimage.Pointimage/color.Paletteimage/gif.EncodeAllimage/gif.GIFimage/gif.arrayType$1image/gif.arrayType$2image/gif.encoderimage/gif.flush~image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5image/gif.writeByte~image/gif.writeHeader~image/gif.writeImageBlock~image/gif.writer image/gif.Encode	image/gifEncode Encode��	Encode = function(w, m, o) {
		var $24r, _arg, _arg$1, _arg$2, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, b, cp, dup, m, o, ok, opts, pm, w, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; cp = $f.cp; dup = $f.dup; m = $f.m; o = $f.o; ok = $f.ok; opts = $f.opts; pm = $f.pm; w = $f.w; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dup = [dup];
  o|		_r = m.Bounds(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		b = $clone(_r, image.Rectangle);
    		if ($clone(b, image.Rectangle).Dx() >= 65536 || $clone(b, image.Rectangle).Dy() >= 65536) {
  o�			$s = -1; return errors.New("gif: image is too large to encode");
    		}
  o�		opts = new Options.ptr(0, $ifaceNil, $ifaceNil);
    		if (!(o === ptrType$5.nil)) {
  p			Options.copy(opts, o);
    		}
    		if (opts.NumColors < 1 || 256 < opts.NumColors) {
  pV			opts.NumColors = 256;
    		}
    		if ($interfaceIsEqual(opts.Drawer, $ifaceNil)) {
  p�			opts.Drawer = draw.FloydSteinberg;
    		}
  p�		_tuple = $assertType(m, ptrType$1, true);
		pm = _tuple[0];
  p�		/* */ if (pm === ptrType$1.nil) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (pm === ptrType$1.nil) { */ case 2:
  p�			_r$1 = m.ColorModel(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = $assertType(_r$1, color.Palette, true);
			cp = _tuple$1[0];
			ok = _tuple$1[1];
  p�			/* */ if (ok) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (ok) { */ case 5:
  q				pm = image.NewPaletted($clone(b, image.Rectangle), cp);
  q9				y = b.Min.Y;
				/* while (true) { */ case 7:
					/* if (!(y < b.Max.Y)) { break; } */ if(!(y < b.Max.Y)) { $s = 8; continue; }
  qb					x = b.Min.X;
					/* while (true) { */ case 9:
						/* if (!(x < b.Max.X)) { break; } */ if(!(x < b.Max.X)) { $s = 10; continue; }
  q�						_arg = x;
						_arg$1 = y;
						_r$2 = m.At(x, y); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						_r$3 = cp.Convert(_r$2); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						_arg$2 = _r$3;
						$r = pm.Set(_arg, _arg$1, _arg$2); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  q}						x = x + (1) >> 0;
    					$s = 9; continue;
					case 10:
  qT					y = y + (1) >> 0;
    				$s = 7; continue;
				case 8:
    			/* } */ case 6:
    		/* } */ case 3:
  q�		/* */ if (pm === ptrType$1.nil || pm.Palette.$length > opts.NumColors) { $s = 14; continue; }
		/* */ $s = 15; continue;
    		/* if (pm === ptrType$1.nil || pm.Palette.$length > opts.NumColors) { */ case 14:
  r�			pm = image.NewPaletted($clone(b, image.Rectangle), $convertSliceType($subslice(palette.Plan9, 0, opts.NumColors), color.Palette));
  r�			/* */ if (!($interfaceIsEqual(opts.Quantizer, $ifaceNil))) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (!($interfaceIsEqual(opts.Quantizer, $ifaceNil))) { */ case 16:
  r�				_r$4 = opts.Quantizer.Quantize($makeSlice(color.Palette, 0, opts.NumColors), m); /* */ $s = 18; case 18: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				pm.Palette = _r$4;
    			/* } */ case 17:
  sM			$r = opts.Drawer.Draw(pm, $clone(b, image.Rectangle), m, $clone(b.Min, image.Point)); /* */ $s = 19; case 19: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 15:
    		if (!($equal(pm.Rect.Min, (new image.Point.ptr(0, 0)), image.Point))) {
  tb			dup[0] = $clone(pm, image.Paletted);
  to			image.Rectangle.copy(dup[0].Rect, $clone(dup[0].Rect, image.Rectangle).Sub($clone(dup[0].Rect.Min, image.Point)));
  t�			pm = dup[0];
    		}
  t�		_r$5 = EncodeAll(w, new GIF.ptr(new sliceType$5([pm]), new sliceType$4([0]), 0, sliceType$1.nil, new image.Config.ptr(pm.Palette, $clone(b, image.Rectangle).Dx(), $clone(b, image.Rectangle).Dy()), 0)); /* */ $s = 20; case 20: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		$24r = _r$5;
		$s = 21; case 21: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Encode }; } $f.$24r = $24r; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.cp = cp; $f.dup = dup; $f.m = m; $f.o = o; $f.ok = ok; $f.opts = opts; $f.pm = pm; $f.w = w; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Encode = Encode;
Encode
errors.Newimage.Configimage.NewPalettedimage.Palettedimage.Pointimage.Rectangleimage/color.Paletteimage/color/palette.Plan9image/draw.FloydSteinbergimage/gif.Encodeimage/gif.EncodeAllimage/gif.GIFimage/gif.Optionsimage/gif.ptrType$1image/gif.ptrType$5image/gif.sliceType$1image/gif.sliceType$4image/gif.sliceType$5 ��{"Base":30048,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/gif/reader.go","Base":1,"Size":17790,"Lines":[0,55,109,159,160,219,222,302,314,315,324,333,349,359,366,375,390,396,398,399,405,462,517,572,574,575,670,694,705,720,722,723,737,745,757,787,817,842,843,870,902,934,936,937,958,966,993,1020,1047,1049,1050,1073,1081,1106,1131,1156,1158,1159,1174,1182,1220,1263,1298,1337,1339,1340,1385,1414,1434,1462,1465,1477,1479,1480,1527,1551,1571,1599,1602,1617,1619,1620,1670,1692,1702,1703,1720,1744,1765,1786,1807,1828,1850,1872,1873,1900,1918,1919,1946,1972,1998,1999,2013,2045,2046,2070,2086,2103,2131,2203,2205,2206,2283,2359,2435,2506,2567,2570,2647,2727,2753,2768,2822,2834,2836,2837,2868,2887,2896,2899,2929,2960,2977,2980,2999,3008,3011,3012,3021,3061,3080,3090,3093,3095,3096,3145,3162,3173,3193,3212,3216,3219,3220,3239,3246,3261,3263,3264,3342,3418,3470,3504,3522,3525,3542,3553,3573,3592,3596,3599,3600,3632,3649,3664,3666,3667,3744,3823,3904,3980,4058,4136,4218,4257,4295,4317,4387,4400,4426,4479,4494,4497,4498,4515,4587,4649,4660,4683,4697,4724,4740,4762,4783,4787,4790,4791,4868,4924,4934,4956,4969,4995,5010,5013,5014,5033,5035,5036,5099,5177,5227,5258,5269,5279,5306,5309,5310,5328,5329,5371,5388,5401,5404,5421,5434,5437,5438,5445,5471,5489,5542,5546,5559,5578,5622,5637,5642,5643,5668,5731,5746,5751,5752,5769,5795,5844,5849,5863,5864,5875,5934,5938,5941,5943,5944,6002,6036,6053,6105,6108,6136,6183,6245,6248,6292,6337,6388,6420,6489,6559,6573,6577,6580,6639,6651,6653,6654,6725,6775,6810,6827,6889,6892,6927,6947,7009,7018,7021,7036,7038,7039,7081,7114,7131,7186,7189,7200,7220,7233,7245,7268,7300,7316,7354,7374,7400,7418,7474,7478,7542,7558,7568,7632,7635,7650,7704,7760,7764,7767,7768,7843,7884,7957,7983,8001,8057,8061,8075,8089,8093,8124,8174,8178,8181,8188,8214,8232,8288,8292,8306,8320,8324,8327,8329,8330,8377,8427,8491,8494,8514,8601,8604,8623,8679,8727,8766,8798,8829,8832,8852,8945,8948,8960,8962,8963,9029,9067,9084,9097,9100,9154,9179,9230,9248,9262,9266,9276,9309,9353,9357,9390,9393,9421,9448,9484,9549,9553,9611,9643,9654,9716,9775,9831,9885,9919,9941,9987,10011,10016,10033,10037,10040,10072,10089,10145,10148,10183,10259,10262,10304,10330,10381,10401,10447,10481,10538,10542,10564,10567,10638,10668,10672,10734,10802,10866,10935,11003,11071,11138,11196,11295,11313,11370,11374,11394,11397,11398,11466,11531,11574,11594,11618,11674,11677,11678,11735,11762,11794,11831,11854,11859,11863,11866,11867,11906,11942,11959,11962,11963,12004,12035,12076,12128,12131,12197,12267,12326,12343,12374,12386,12388,12389,12459,12509,12579,12582,12624,12665,12708,12752,12778,12779,12853,12924,12956,12960,13004,13069,13124,13168,13245,13319,13348,13352,13426,13498,13574,13610,13662,13733,13736,13779,13810,13858,13872,13874,13875,13920,13945,13972,13988,13991,14041,14057,14060,14080,14082,14083,14160,14188,14205,14207,14208,14279,14314,14373,14432,14491,14550,14552,14553,14628,14666,14684,14707,14730,14759,14825,14861,14938,14986,15045,15061,15090,15094,15097,15111,15113,15114,15180,15208,15256,15271,15322,15340,15343,15367,15369,15370,15439,15457,15508,15602,15666,15696,15740,15798,15856,15871,15939,16014,16082,16098,16115,16190,16266,16343,16408,16443,16447,16521,16595,16646,16667,16742,16795,16817,16819,16820,16892,16919,16963,16978,17028,17046,17049,17063,17085,17111,17133,17158,17182,17217,17241,17266,17271,17309,17312,17329,17331,17332,17409,17447,17502,17517,17567,17596,17599,17621,17655,17678,17702,17710,17712,17713,17727,17788],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/gif/writer.go","Base":17792,"Size":12255,"Lines":[0,55,109,159,160,172,173,182,191,200,216,226,235,250,273,287,293,295,296,333,341,361,381,383,384,439,440,463,495,509,521,525,528,539,541,542,560,600,617,639,641,642,674,698,713,724,739,741,742,789,811,886,957,969,980,1036,1043,1104,1118,1192,1220,1252,1284,1286,1287,1354,1420,1484,1497,1523,1535,1537,1538,1569,1585,1587,1588,1625,1641,1643,1644,1691,1712,1729,1732,1733,1769,1783,1808,1831,1844,1847,1848,1864,1890,1906,1922,1924,1925,1998,2018,2073,2099,2140,2157,2161,2164,2187,2189,2190,2221,2294,2317,2339,2358,2368,2392,2411,2438,2441,2454,2456,2457,2485,2504,2513,2516,2537,2539,2540,2576,2595,2604,2607,2632,2634,2635,2673,2692,2701,2704,2730,2732,2733,2767,2786,2795,2798,2840,2859,2868,2871,2872,2909,2960,3012,3032,3033,3104,3173,3218,3251,3292,3313,3329,3404,3438,3453,3463,3467,3510,3520,3586,3606,3624,3669,3710,3731,3734,3735,3772,3819,3862,3902,3935,3956,4030,4064,4079,4089,4093,4126,4164,4213,4252,4273,4276,4278,4279,4355,4397,4481,4484,4507,4523,4598,4602,4622,4694,4716,4754,4790,4801,4830,4884,4888,4905,4922,4939,4942,4965,4982,5003,5033,5057,5072,5076,5079,5098,5100,5101,5175,5202,5230,5262,5341,5433,5436,5519,5521,5522,5604,5623,5632,5635,5636,5663,5737,5746,5749,5750,5768,5841,5905,5914,5917,6001,6059,6068,6071,6072,6096,6128,6144,6217,6227,6231,6269,6293,6302,6306,6309,6310,6369,6419,6470,6510,6540,6573,6584,6617,6621,6699,6700,6730,6760,6798,6809,6828,6832,6871,6892,6895,6924,6966,7008,7049,7090,7110,7111,7183,7257,7331,7392,7468,7584,7632,7642,7718,7736,7757,7773,7778,7788,7792,7859,7933,7965,8046,8095,8106,8137,8185,8220,8224,8227,8228,8256,8275,8290,8293,8349,8350,8375,8387,8433,8469,8513,8533,8549,8559,8563,8573,8638,8681,8702,8719,8730,8735,8739,8742,8771,8801,8803,8804,8844,8866,8931,8960,8975,8976,9040,9095,9121,9122,9193,9251,9271,9273,9274,9338,9384,9428,9452,9512,9515,9516,9551,9614,9617,9618,9639,9714,9791,9853,9918,9984,9987,10024,10055,10080,10106,10148,10207,10276,10280,10283,10284,10315,10326,10336,10363,10366,10367,10384,10414,10437,10462,10490,10494,10540,10543,10566,10577,10591,10593,10594,10643,10703,10747,10764,10805,10862,10865,10866,10885,10900,10912,10915,10964,10987,10990,11015,11051,11054,11055,11085,11101,11153,11186,11226,11267,11309,11315,11320,11324,11327,11379,11451,11483,11488,11547,11607,11636,11719,11723,11759,11762,11763,11835,11910,11963,12000,12013,12053,12065,12068,12069,12096,12128,12147,12171,12198,12221,12244,12249,12253],"Infos":null}]}
 