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
GoLinkname�� Implementation�� 	Reference��   �C���
image/jpegjpegbufioerrorsimageimage/colorimage/internal/imageutilio�Vi ��rReaderio ImageimageConfigwWritermoOptionsErroreFormatErrorQuality
ByteReaderUnsupportedErrorReadpnerrAtxyColorimage/colorBounds	Rectangle
ColorModelModelWidthHeightWriteReadByteRGBAgbaMinPointMaxStringDxDySizeAddSubInset	IntersectsUnionEmptyEqOverlapsInCanonRGBA64AtRGBA64ConvertcXYqMulkDivModRGBAjpegDecodeDecodeConfigDefaultQualityEncodecolor 	 F     #   F     4  C �K "	 -MF   J )# +P   =T  5 ;c   I T t  Q	 �   T � \T  5 ;�  	  m r� t v T � �� � ��  z }  �  �  � �  �T � ��  �  � T � 	  � r� t v T �	  �   T ��  �   	 �	 �	 �	T � � ��  ��  ��T � �  �   �  �   �  �   �  �  � �  � r� �  �  � r� �  �  � t �  �  � �� �  �  � �� �  �  �    �  � ��    �  � ��    �  � ��    �  �  � z  � }  �  �  � }  �  �  �  � �  �  ��  � �� � T � �  � T � � r�   � r� �� �  � r� �� �  � r� � �  � r� � �  � r�  �    � r�  � �  � r� ��   � �  �  �  � T � � ��   	 �	 �	 �	� ���%�2=F-\l\s �������� ������		 Q��"��� bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  image	image = $packages["image"];
��    		$r = image.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  color#	color = $packages["image/color"];
��    		$r = color.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	imageutil4	imageutil = $packages["image/internal/imageutil"];
��    		$r = imageutil.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  huffman�Z	huffman = $pkg.huffman = $newType(0, $kindStruct, "jpeg.huffman", true, "image/jpeg", false, function(nCodes_, lut_, vals_, minCodes_, maxCodes_, valsIndices_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.nCodes = 0;
			this.lut = arrayType$7.zero();
			this.vals = arrayType$8.zero();
			this.minCodes = arrayType$3.zero();
			this.maxCodes = arrayType$3.zero();
			this.valsIndices = arrayType$3.zero();
			return;
		}
		this.nCodes = nCodes_;
		this.lut = lut_;
		this.vals = vals_;
		this.minCodes = minCodes_;
		this.maxCodes = maxCodes_;
		this.valsIndices = valsIndices_;
	});
�\	huffman.init("image/jpeg", [{prop: "nCodes", name: "nCodes", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "lut", name: "lut", embedded: false, exported: false, typ: arrayType$7, tag: ""}, {prop: "vals", name: "vals", embedded: false, exported: false, typ: arrayType$8, tag: ""}, {prop: "minCodes", name: "minCodes", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "maxCodes", name: "maxCodes", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "valsIndices", name: "valsIndices", embedded: false, exported: false, typ: arrayType$3, tag: ""}]);
huffmanimage/jpeg.arrayType$3image/jpeg.arrayType$7image/jpeg.arrayType$8image/jpeg.huffman  block`	block = $pkg.block = $newType(256, $kindArray, "jpeg.block", true, "image/jpeg", false, null);
	block.init($Int32, 64);
blockimage/jpeg.block  FormatErrorp	FormatError = $pkg.FormatError = $newType(8, $kindString, "jpeg.FormatError", true, "image/jpeg", true, null);
h	FormatError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
FormatErrorimage/jpeg.FormatError  UnsupportedError	UnsupportedError = $pkg.UnsupportedError = $newType(8, $kindString, "jpeg.UnsupportedError", true, "image/jpeg", true, null);
m	UnsupportedError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnsupportedErrorimage/jpeg.UnsupportedError  	component�C	component = $pkg.component = $newType(0, $kindStruct, "jpeg.component", true, "image/jpeg", false, function(h_, v_, c_, tq_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.h = 0;
			this.v = 0;
			this.c = 0;
			this.tq = 0;
			return;
		}
		this.h = h_;
		this.v = v_;
		this.c = c_;
		this.tq = tq_;
	});
�_	component.init("image/jpeg", [{prop: "h", name: "h", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "v", name: "v", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "c", name: "c", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "tq", name: "tq", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
	componentimage/jpeg.component  Readerd	Reader = $pkg.Reader = $newType(8, $kindInterface, "jpeg.Reader", true, "image/jpeg", true, null);
��	Reader.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}]);
Readerimage/jpeg.Readerimage/jpeg.sliceType  bits�	bits = $pkg.bits = $newType(0, $kindStruct, "jpeg.bits", true, "image/jpeg", false, function(a_, m_, n_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.a = 0;
			this.m = 0;
			this.n = 0;
			return;
		}
		this.a = a_;
		this.m = m_;
		this.n = n_;
	});
�	bits.init("image/jpeg", [{prop: "a", name: "a", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "m", name: "m", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int32, tag: ""}]);
bitsimage/jpeg.bits  decoder�W	decoder = $pkg.decoder = $newType(0, $kindStruct, "jpeg.decoder", true, "image/jpeg", false, function(r_, bits_, bytes_, width_, height_, img1_, img3_, blackPix_, blackStride_, ri_, nComp_, baseline_, progressive_, jfif_, adobeTransformValid_, adobeTransform_, eobRun_, comp_, progCoeffs_, huff_, quant_, tmp_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.bits = new bits.ptr(0, 0, 0);
			this.bytes = new structType$1.ptr(arrayType$4.zero(), 0, 0, 0);
			this.width = 0;
			this.height = 0;
			this.img1 = ptrType.nil;
			this.img3 = ptrType$1.nil;
			this.blackPix = sliceType.nil;
			this.blackStride = 0;
			this.ri = 0;
			this.nComp = 0;
			this.baseline = false;
			this.progressive = false;
			this.jfif = false;
			this.adobeTransformValid = false;
			this.adobeTransform = 0;
			this.eobRun = 0;
			this.comp = arrayType$5.zero();
			this.progCoeffs = arrayType$6.zero();
			this.huff = arrayType$10.zero();
			this.quant = arrayType$12.zero();
			this.tmp = arrayType$13.zero();
			return;
		}
		this.r = r_;
		this.bits = bits_;
		this.bytes = bytes_;
		this.width = width_;
		this.height = height_;
		this.img1 = img1_;
		this.img3 = img3_;
		this.blackPix = blackPix_;
		this.blackStride = blackStride_;
		this.ri = ri_;
		this.nComp = nComp_;
		this.baseline = baseline_;
		this.progressive = progressive_;
		this.jfif = jfif_;
		this.adobeTransformValid = adobeTransformValid_;
		this.adobeTransform = adobeTransform_;
		this.eobRun = eobRun_;
		this.comp = comp_;
		this.progCoeffs = progCoeffs_;
		this.huff = huff_;
		this.quant = quant_;
		this.tmp = tmp_;
	});
��	ptrType$7.methods = [{prop: "ensureNBits", name: "ensureNBits", pkg: "image/jpeg", typ: $funcType([$Int32], [$error], false)}, {prop: "receiveExtend", name: "receiveExtend", pkg: "image/jpeg", typ: $funcType([$Uint8], [$Int32, $error], false)}, {prop: "processDHT", name: "processDHT", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "decodeHuffman", name: "decodeHuffman", pkg: "image/jpeg", typ: $funcType([ptrType$5], [$Uint8, $error], false)}, {prop: "decodeBit", name: "decodeBit", pkg: "image/jpeg", typ: $funcType([], [$Bool, $error], false)}, {prop: "decodeBits", name: "decodeBits", pkg: "image/jpeg", typ: $funcType([$Int32], [$Uint32, $error], false)}, {prop: "fill", name: "fill", pkg: "image/jpeg", typ: $funcType([], [$error], false)}, {prop: "unreadByteStuffedByte", name: "unreadByteStuffedByte", pkg: "image/jpeg", typ: $funcType([], [], false)}, {prop: "readByte", name: "readByte", pkg: "image/jpeg", typ: $funcType([], [$Uint8, $error], false)}, {prop: "readByteStuffedByte", name: "readByteStuffedByte", pkg: "image/jpeg", typ: $funcType([], [$Uint8, $error], false)}, {prop: "readFull", name: "readFull", pkg: "image/jpeg", typ: $funcType([sliceType], [$error], false)}, {prop: "ignore", name: "ignore", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "processSOF", name: "processSOF", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "processDQT", name: "processDQT", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "processDRI", name: "processDRI", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "processApp0Marker", name: "processApp0Marker", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "processApp14Marker", name: "processApp14Marker", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "decode", name: "decode", pkg: "image/jpeg", typ: $funcType([io.Reader, $Bool], [image.Image, $error], false)}, {prop: "applyBlack", name: "applyBlack", pkg: "image/jpeg", typ: $funcType([], [image.Image, $error], false)}, {prop: "isRGB", name: "isRGB", pkg: "image/jpeg", typ: $funcType([], [$Bool], false)}, {prop: "convertToRGB", name: "convertToRGB", pkg: "image/jpeg", typ: $funcType([], [image.Image, $error], false)}, {prop: "makeImg", name: "makeImg", pkg: "image/jpeg", typ: $funcType([$Int, $Int], [], false)}, {prop: "processSOS", name: "processSOS", pkg: "image/jpeg", typ: $funcType([$Int], [$error], false)}, {prop: "refine", name: "refine", pkg: "image/jpeg", typ: $funcType([ptrType$6, ptrType$5, $Int32, $Int32, $Int32], [$error], false)}, {prop: "refineNonZeroes", name: "refineNonZeroes", pkg: "image/jpeg", typ: $funcType([ptrType$6, $Int32, $Int32, $Int32, $Int32], [$Int32, $error], false)}, {prop: "reconstructProgressiveImage", name: "reconstructProgressiveImage", pkg: "image/jpeg", typ: $funcType([], [$error], false)}, {prop: "reconstructBlock", name: "reconstructBlock", pkg: "image/jpeg", typ: $funcType([ptrType$6, $Int, $Int, $Int], [$error], false)}];
�	decoder.init("image/jpeg", [{prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "bits", name: "bits", embedded: false, exported: false, typ: bits, tag: ""}, {prop: "bytes", name: "bytes", embedded: false, exported: false, typ: structType$1, tag: ""}, {prop: "width", name: "width", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "height", name: "height", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "img1", name: "img1", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "img3", name: "img3", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "blackPix", name: "blackPix", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "blackStride", name: "blackStride", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "ri", name: "ri", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "nComp", name: "nComp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "baseline", name: "baseline", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "progressive", name: "progressive", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "jfif", name: "jfif", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "adobeTransformValid", name: "adobeTransformValid", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "adobeTransform", name: "adobeTransform", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "eobRun", name: "eobRun", embedded: false, exported: false, typ: $Uint16, tag: ""}, {prop: "comp", name: "comp", embedded: false, exported: false, typ: arrayType$5, tag: ""}, {prop: "progCoeffs", name: "progCoeffs", embedded: false, exported: false, typ: arrayType$6, tag: ""}, {prop: "huff", name: "huff", embedded: false, exported: false, typ: arrayType$10, tag: ""}, {prop: "quant", name: "quant", embedded: false, exported: false, typ: arrayType$12, tag: ""}, {prop: "tmp", name: "tmp", embedded: false, exported: false, typ: arrayType$13, tag: ""}]);
decoderimage.Imageimage/jpeg.arrayType$10image/jpeg.arrayType$11image/jpeg.arrayType$12image/jpeg.arrayType$13image/jpeg.arrayType$3image/jpeg.arrayType$4image/jpeg.arrayType$5image/jpeg.arrayType$6image/jpeg.arrayType$7image/jpeg.arrayType$8image/jpeg.arrayType$9image/jpeg.bitsimage/jpeg.blockimage/jpeg.componentimage/jpeg.decoderimage/jpeg.huffmanimage/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.ptrType$5image/jpeg.ptrType$6image/jpeg.ptrType$7image/jpeg.sliceTypeimage/jpeg.sliceType$2image/jpeg.structType$1	io.Reader  
quantIndexk	quantIndex = $pkg.quantIndex = $newType(4, $kindInt, "jpeg.quantIndex", true, "image/jpeg", false, null);

quantIndeximage/jpeg.quantIndex  	huffIndexh	huffIndex = $pkg.huffIndex = $newType(4, $kindInt, "jpeg.huffIndex", true, "image/jpeg", false, null);
	huffIndeximage/jpeg.huffIndex  huffmanSpec�>	huffmanSpec = $pkg.huffmanSpec = $newType(0, $kindStruct, "jpeg.huffmanSpec", true, "image/jpeg", false, function(count_, value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.count = arrayType$2.zero();
			this.value = sliceType.nil;
			return;
		}
		this.count = count_;
		this.value = value_;
	});
��	huffmanSpec.init("image/jpeg", [{prop: "count", name: "count", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "value", name: "value", embedded: false, exported: false, typ: sliceType, tag: ""}]);
huffmanSpecimage/jpeg.arrayType$2image/jpeg.huffmanSpecimage/jpeg.sliceType  
huffmanLUTn	huffmanLUT = $pkg.huffmanLUT = $newType(12, $kindSlice, "jpeg.huffmanLUT", true, "image/jpeg", false, null);
r	ptrType$2.methods = [{prop: "init", name: "init", pkg: "image/jpeg", typ: $funcType([huffmanSpec], [], false)}];
	huffmanLUT.init($Uint32);

huffmanLUTimage/jpeg.huffmanLUTimage/jpeg.huffmanSpecimage/jpeg.ptrType$2  writere	writer = $pkg.writer = $newType(8, $kindInterface, "jpeg.writer", true, "image/jpeg", false, null);
�	writer.init([{prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}]);
writerimage/jpeg.sliceTypeimage/jpeg.writer  encoder��	encoder = $pkg.encoder = $newType(0, $kindStruct, "jpeg.encoder", true, "image/jpeg", false, function(w_, err_, buf_, bits_, nBits_, quant_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = $ifaceNil;
			this.err = $ifaceNil;
			this.buf = arrayType$2.zero();
			this.bits = 0;
			this.nBits = 0;
			this.quant = arrayType$16.zero();
			return;
		}
		this.w = w_;
		this.err = err_;
		this.buf = buf_;
		this.bits = bits_;
		this.nBits = nBits_;
		this.quant = quant_;
	});
��	ptrType$8.methods = [{prop: "flush", name: "flush", pkg: "image/jpeg", typ: $funcType([], [], false)}, {prop: "write", name: "write", pkg: "image/jpeg", typ: $funcType([sliceType], [], false)}, {prop: "writeByte", name: "writeByte", pkg: "image/jpeg", typ: $funcType([$Uint8], [], false)}, {prop: "emit", name: "emit", pkg: "image/jpeg", typ: $funcType([$Uint32, $Uint32], [], false)}, {prop: "emitHuff", name: "emitHuff", pkg: "image/jpeg", typ: $funcType([huffIndex, $Int32], [], false)}, {prop: "emitHuffRLE", name: "emitHuffRLE", pkg: "image/jpeg", typ: $funcType([huffIndex, $Int32, $Int32], [], false)}, {prop: "writeMarkerHeader", name: "writeMarkerHeader", pkg: "image/jpeg", typ: $funcType([$Uint8, $Int], [], false)}, {prop: "writeDQT", name: "writeDQT", pkg: "image/jpeg", typ: $funcType([], [], false)}, {prop: "writeSOF0", name: "writeSOF0", pkg: "image/jpeg", typ: $funcType([image.Point, $Int], [], false)}, {prop: "writeDHT", name: "writeDHT", pkg: "image/jpeg", typ: $funcType([$Int], [], false)}, {prop: "writeBlock", name: "writeBlock", pkg: "image/jpeg", typ: $funcType([ptrType$6, quantIndex, $Int32], [$Int32], false)}, {prop: "writeSOS", name: "writeSOS", pkg: "image/jpeg", typ: $funcType([image.Image], [], false)}];
�*	encoder.init("image/jpeg", [{prop: "w", name: "w", embedded: false, exported: false, typ: writer, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$2, tag: ""}, {prop: "bits", name: "bits", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "nBits", name: "nBits", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "quant", name: "quant", embedded: false, exported: false, typ: arrayType$16, tag: ""}]);
encoderimage.Imageimage.Pointimage/jpeg.arrayType$1image/jpeg.arrayType$16image/jpeg.arrayType$2image/jpeg.encoderimage/jpeg.huffIndeximage/jpeg.ptrType$6image/jpeg.ptrType$8image/jpeg.quantIndeximage/jpeg.sliceTypeimage/jpeg.writer  Options��	Options = $pkg.Options = $newType(0, $kindStruct, "jpeg.Options", true, "image/jpeg", true, function(Quality_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Quality = 0;
			return;
		}
		this.Quality = Quality_;
	});
n	Options.init("", [{prop: "Quality", name: "Quality", embedded: false, exported: true, typ: $Int, tag: ""}]);
Optionsimage/jpeg.Options  	arrayType(	arrayType = $arrayType(huffmanLUT, 4);
	arrayTypeimage/jpeg.huffmanLUT  arrayType$1'	arrayType$1 = $arrayType($Uint8, 64);
arrayType$1  arrayType$2'	arrayType$2 = $arrayType($Uint8, 16);
arrayType$2  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Int32);
sliceType$1  arrayType$3'	arrayType$3 = $arrayType($Int32, 16);
arrayType$3  ptrType!	ptrType = $ptrType(image.Gray);
ptrType
image.Gray  	ptrType$1$	ptrType$1 = $ptrType(image.YCbCr);
	ptrType$1image.YCbCr  
structType��	structType = $structType("image/jpeg", [{prop: "src", name: "src", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "stride", name: "stride", embedded: false, exported: false, typ: $Int, tag: ""}]);

structTypeimage/jpeg.sliceType  arrayType$4)	arrayType$4 = $arrayType($Uint8, 4096);
arrayType$4  structType$1��	structType$1 = $structType("image/jpeg", [{prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$4, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "j", name: "j", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "nUnreadable", name: "nUnreadable", embedded: false, exported: false, typ: $Int, tag: ""}]);
structType$1image/jpeg.arrayType$4  arrayType$5)	arrayType$5 = $arrayType(component, 4);
arrayType$5image/jpeg.component  sliceType$2"	sliceType$2 = $sliceType(block);
sliceType$2image/jpeg.block  arrayType$6+	arrayType$6 = $arrayType(sliceType$2, 4);
arrayType$6image/jpeg.sliceType$2  arrayType$7)	arrayType$7 = $arrayType($Uint16, 256);
arrayType$7  arrayType$8(	arrayType$8 = $arrayType($Uint8, 256);
arrayType$8  arrayType$9'	arrayType$9 = $arrayType(huffman, 4);
arrayType$9image/jpeg.huffman  arrayType$10,	arrayType$10 = $arrayType(arrayType$9, 2);
arrayType$10image/jpeg.arrayType$9  arrayType$11(	arrayType$11 = $arrayType($Int32, 64);
arrayType$11  arrayType$12&	arrayType$12 = $arrayType(block, 4);
arrayType$12image/jpeg.block  arrayType$13)	arrayType$13 = $arrayType($Uint8, 128);
arrayType$13  structType$2�1	structType$2 = $structType("image/jpeg", [{prop: "compIndex", name: "compIndex", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "td", name: "td", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "ta", name: "ta", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
structType$2  arrayType$14-	arrayType$14 = $arrayType(structType$2, 4);
arrayType$14image/jpeg.structType$2  sliceType$3&	sliceType$3 = $sliceType(component);
sliceType$3image/jpeg.component  arrayType$15'	arrayType$15 = $arrayType($Int32, 4);
arrayType$15  sliceType$4$	sliceType$4 = $sliceType($Uint32);
sliceType$4  	ptrType$2#	ptrType$2 = $ptrType(huffmanLUT);
	ptrType$2image/jpeg.huffmanLUT  sliceType$5(	sliceType$5 = $sliceType(huffmanSpec);
sliceType$5image/jpeg.huffmanSpec  	ptrType$3#	ptrType$3 = $ptrType(image.RGBA);
	ptrType$3
image.RGBA  arrayType$16,	arrayType$16 = $arrayType(arrayType$1, 2);
arrayType$16image/jpeg.arrayType$1  	ptrType$4 	ptrType$4 = $ptrType(Options);
	ptrType$4image/jpeg.Options  	ptrType$5 	ptrType$5 = $ptrType(huffman);
	ptrType$5image/jpeg.huffman  	ptrType$6	ptrType$6 = $ptrType(block);
	ptrType$6image/jpeg.block  	ptrType$7 	ptrType$7 = $ptrType(decoder);
	ptrType$7image/jpeg.decoder  	ptrType$8 	ptrType$8 = $ptrType(encoder);
	ptrType$8image/jpeg.encoder  errShortHuffmanDataerrShortHuffmanData  errUnsupportedSubsamplingRatioerrUnsupportedSubsamplingRatio  unzigunzig  errMissingFF00errMissingFF00  bitCountbitCount  unscaledQuantunscaledQuant  theHuffmanSpectheHuffmanSpec  theHuffmanLUT$		theHuffmanLUT = arrayType.zero();
theHuffmanLUTimage/jpeg.arrayTypeimage/jpeg.huffmanLUTimage/jpeg.theHuffmanLUT  
sosHeaderY
sosHeaderY  sosHeaderYCbCrsosHeaderYCbCr  3  q		errShortHuffmanData = "short Huffman data";
errShortHuffmanDataimage/jpeg.errShortHuffmanData  I  H		errUnsupportedSubsamplingRatio = "luma/chroma subsampling ratio";
errUnsupportedSubsamplingRatio)image/jpeg.errUnsupportedSubsamplingRatio  �!  N\		unzig = $toNativeArray($kindInt, [0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
unzigimage/jpeg.unzig  3  ]�		errMissingFF00 = "missing 0xff00 sequence";
errMissingFF00image/jpeg.errMissingFF00  �0  ��		bitCount = $toNativeArray($kindUint8, [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]);
bitCountimage/jpeg.bitCount  �|  �		unscaledQuant = $toNativeArray($kindArray, [$toNativeArray($kindUint8, [16, 11, 12, 14, 12, 10, 16, 14, 13, 14, 18, 17, 16, 19, 24, 40, 26, 24, 22, 22, 24, 49, 35, 37, 29, 40, 58, 51, 61, 60, 57, 51, 56, 55, 64, 72, 92, 78, 64, 68, 87, 69, 55, 56, 80, 109, 81, 87, 95, 98, 103, 104, 103, 62, 77, 113, 121, 112, 100, 120, 92, 101, 103, 99]), $toNativeArray($kindUint8, [17, 18, 18, 24, 21, 24, 47, 26, 26, 47, 99, 66, 56, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99])]);
unscaledQuantimage/jpeg.arrayType$1image/jpeg.unscaledQuant  �  �		theHuffmanSpec = $toNativeArray($kindStruct, [new huffmanSpec.ptr($toNativeArray($kindUint8, [0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]), new sliceType([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])), new huffmanSpec.ptr($toNativeArray($kindUint8, [0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]), new sliceType([1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250])), new huffmanSpec.ptr($toNativeArray($kindUint8, [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]), new sliceType([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])), new huffmanSpec.ptr($toNativeArray($kindUint8, [0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]), new sliceType([0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250]))]);
theHuffmanSpecimage/jpeg.arrayType$2image/jpeg.huffmanSpecimage/jpeg.sliceTypeimage/jpeg.theHuffmanSpec  H z		sosHeaderY = new sliceType([255, 218, 0, 8, 1, 1, 0, 0, 63, 0]);

sosHeaderYimage/jpeg.sliceTypeimage/jpeg.sosHeaderY  [ �		sosHeaderYCbCr = new sliceType([255, 218, 0, 12, 3, 1, 0, 2, 17, 3, 17, 0, 63, 0]);
sosHeaderYCbCrimage/jpeg.sliceTypeimage/jpeg.sosHeaderYCbCr image/jpeg.fdct
image/jpegfdct fdct�"W	fdct = function(b) {
		var b, s, tmp0, tmp0$1, tmp1, tmp1$1, tmp10, tmp10$1, tmp11, tmp11$1, tmp12, tmp12$1, tmp13, tmp13$1, tmp2, tmp2$1, tmp3, tmp3$1, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$5, x$6, x$7, x$8, x$9, x0, x1, x2, x3, x4, x5, x6, x7, y, y8, z1, z1$1;
  �		y = 0;
		while (true) {
			if (!(y < 8)) { break; }
  �			y8 = $imul(y, 8);
  �			s = $subslice(new sliceType$1(b), y8, (y8 + 8 >> 0), (y8 + 8 >> 0));
  			x0 = (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]);
  "			x1 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
  /			x2 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
  <			x3 = (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]);
  I			x4 = (4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4]);
  V			x5 = (5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5]);
  c			x6 = (6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6]);
  p			x7 = (7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7]);
  ~			tmp0 = x0 + x7 >> 0;
  �			tmp1 = x1 + x6 >> 0;
  �			tmp2 = x2 + x5 >> 0;
  �			tmp3 = x3 + x4 >> 0;
  �			tmp10 = tmp0 + tmp3 >> 0;
  �			tmp12 = tmp0 - tmp3 >> 0;
  �			tmp11 = tmp1 + tmp2 >> 0;
  			tmp13 = tmp1 - tmp2 >> 0;
  $			tmp0 = x0 - x7 >> 0;
  5			tmp1 = x1 - x6 >> 0;
  F			tmp2 = x2 - x5 >> 0;
  W			tmp3 = x3 - x4 >> 0;
  i			(0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0] = ((((tmp10 + tmp11 >> 0) - 1024 >> 0)) << 2 >> 0));
  �			(4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4] = (((tmp10 - tmp11 >> 0)) << 2 >> 0));
  �			z1 = $imul(((tmp12 + tmp13 >> 0)), 4433);
  �			z1 = z1 + (1024) >> 0;
  			(2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2] = (((z1 + ($imul(tmp12, 6270)) >> 0)) >> 11 >> 0));
  [			(6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6] = (((z1 - ($imul(tmp13, 15137)) >> 0)) >> 11 >> 0));
  �			tmp10 = tmp0 + tmp3 >> 0;
  �			tmp11 = tmp1 + tmp2 >> 0;
  �			tmp12 = tmp0 + tmp2 >> 0;
  �			tmp13 = tmp1 + tmp3 >> 0;
  �			z1 = $imul(((tmp12 + tmp13 >> 0)), 9633);
  			z1 = z1 + (1024) >> 0;
  G			tmp0 = $imul(tmp0, (12299));
  a			tmp1 = $imul(tmp1, (25172));
  {			tmp2 = $imul(tmp2, (16819));
  �			tmp3 = $imul(tmp3, (2446));
  �			tmp10 = $imul(tmp10, (-7373));
  �			tmp11 = $imul(tmp11, (-20995));
  �			tmp12 = $imul(tmp12, (-3196));
  			tmp13 = $imul(tmp13, (-16069));
   			tmp12 = tmp12 + (z1) >> 0;
  .			tmp13 = tmp13 + (z1) >> 0;
  <			(1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1] = ((((tmp0 + tmp10 >> 0) + tmp12 >> 0)) >> 11 >> 0));
  w			(3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3] = ((((tmp1 + tmp11 >> 0) + tmp13 >> 0)) >> 11 >> 0));
  �			(5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5] = ((((tmp2 + tmp11 >> 0) + tmp12 >> 0)) >> 11 >> 0));
  �			(7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7] = ((((tmp3 + tmp10 >> 0) + tmp13 >> 0)) >> 11 >> 0));
  �			y = y + (1) >> 0;
    		}
  �		x = 0;
		while (true) {
			if (!(x < 8)) { break; }
  �			tmp0$1 = (x$1 = b, x$2 = 0 + x >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])) + (x$3 = b, x$4 = 56 + x >> 0, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])) >> 0;
  �			tmp1$1 = (x$5 = b, x$6 = 8 + x >> 0, ((x$6 < 0 || x$6 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[x$6])) + (x$7 = b, x$8 = 48 + x >> 0, ((x$8 < 0 || x$8 >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[x$8])) >> 0;
  �			tmp2$1 = (x$9 = b, x$10 = 16 + x >> 0, ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10])) + (x$11 = b, x$12 = 40 + x >> 0, ((x$12 < 0 || x$12 >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[x$12])) >> 0;
  			tmp3$1 = (x$13 = b, x$14 = 24 + x >> 0, ((x$14 < 0 || x$14 >= x$13.length) ? ($throwRuntimeError("index out of range"), undefined) : x$13[x$14])) + (x$15 = b, x$16 = 32 + x >> 0, ((x$16 < 0 || x$16 >= x$15.length) ? ($throwRuntimeError("index out of range"), undefined) : x$15[x$16])) >> 0;
  3			tmp10$1 = (tmp0$1 + tmp3$1 >> 0) + 2 >> 0;
  ]			tmp12$1 = tmp0$1 - tmp3$1 >> 0;
  t			tmp11$1 = tmp1$1 + tmp2$1 >> 0;
  �			tmp13$1 = tmp1$1 - tmp2$1 >> 0;
  �			tmp0$1 = (x$17 = b, x$18 = 0 + x >> 0, ((x$18 < 0 || x$18 >= x$17.length) ? ($throwRuntimeError("index out of range"), undefined) : x$17[x$18])) - (x$19 = b, x$20 = 56 + x >> 0, ((x$20 < 0 || x$20 >= x$19.length) ? ($throwRuntimeError("index out of range"), undefined) : x$19[x$20])) >> 0;
  �			tmp1$1 = (x$21 = b, x$22 = 8 + x >> 0, ((x$22 < 0 || x$22 >= x$21.length) ? ($throwRuntimeError("index out of range"), undefined) : x$21[x$22])) - (x$23 = b, x$24 = 48 + x >> 0, ((x$24 < 0 || x$24 >= x$23.length) ? ($throwRuntimeError("index out of range"), undefined) : x$23[x$24])) >> 0;
  �			tmp2$1 = (x$25 = b, x$26 = 16 + x >> 0, ((x$26 < 0 || x$26 >= x$25.length) ? ($throwRuntimeError("index out of range"), undefined) : x$25[x$26])) - (x$27 = b, x$28 = 40 + x >> 0, ((x$28 < 0 || x$28 >= x$27.length) ? ($throwRuntimeError("index out of range"), undefined) : x$27[x$28])) >> 0;
  �			tmp3$1 = (x$29 = b, x$30 = 24 + x >> 0, ((x$30 < 0 || x$30 >= x$29.length) ? ($throwRuntimeError("index out of range"), undefined) : x$29[x$30])) - (x$31 = b, x$32 = 32 + x >> 0, ((x$32 < 0 || x$32 >= x$31.length) ? ($throwRuntimeError("index out of range"), undefined) : x$31[x$32])) >> 0;
  			(x$33 = 0 + x >> 0, b.nilCheck, ((x$33 < 0 || x$33 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$33] = (((tmp10$1 + tmp11$1 >> 0)) >> 2 >> 0)));
  B			(x$34 = 32 + x >> 0, b.nilCheck, ((x$34 < 0 || x$34 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$34] = (((tmp10$1 - tmp11$1 >> 0)) >> 2 >> 0)));
  m			z1$1 = $imul(((tmp12$1 + tmp13$1 >> 0)), 4433);
  �			z1$1 = z1$1 + (16384) >> 0;
  �			(x$35 = 16 + x >> 0, b.nilCheck, ((x$35 < 0 || x$35 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$35] = (((z1$1 + ($imul(tmp12$1, 6270)) >> 0)) >> 15 >> 0)));
  			(x$36 = 48 + x >> 0, b.nilCheck, ((x$36 < 0 || x$36 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$36] = (((z1$1 - ($imul(tmp13$1, 15137)) >> 0)) >> 15 >> 0)));
  K			tmp10$1 = tmp0$1 + tmp3$1 >> 0;
  a			tmp11$1 = tmp1$1 + tmp2$1 >> 0;
  w			tmp12$1 = tmp0$1 + tmp2$1 >> 0;
  �			tmp13$1 = tmp1$1 + tmp3$1 >> 0;
  �			z1$1 = $imul(((tmp12$1 + tmp13$1 >> 0)), 9633);
  �			z1$1 = z1$1 + (16384) >> 0;
  �			tmp0$1 = $imul(tmp0$1, (12299));
  			tmp1$1 = $imul(tmp1$1, (25172));
  )			tmp2$1 = $imul(tmp2$1, (16819));
  C			tmp3$1 = $imul(tmp3$1, (2446));
  ]			tmp10$1 = $imul(tmp10$1, (-7373));
  y			tmp11$1 = $imul(tmp11$1, (-20995));
  �			tmp12$1 = $imul(tmp12$1, (-3196));
  �			tmp13$1 = $imul(tmp13$1, (-16069));
  �			tmp12$1 = tmp12$1 + (z1$1) >> 0;
  �			tmp13$1 = tmp13$1 + (z1$1) >> 0;
  �			(x$37 = 8 + x >> 0, b.nilCheck, ((x$37 < 0 || x$37 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$37] = ((((tmp0$1 + tmp10$1 >> 0) + tmp12$1 >> 0)) >> 15 >> 0)));
  )			(x$38 = 24 + x >> 0, b.nilCheck, ((x$38 < 0 || x$38 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$38] = ((((tmp1$1 + tmp11$1 >> 0) + tmp13$1 >> 0)) >> 15 >> 0)));
  h			(x$39 = 40 + x >> 0, b.nilCheck, ((x$39 < 0 || x$39 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$39] = ((((tmp2$1 + tmp11$1 >> 0) + tmp12$1 >> 0)) >> 15 >> 0)));
  �			(x$40 = 56 + x >> 0, b.nilCheck, ((x$40 < 0 || x$40 >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x$40] = ((((tmp3$1 + tmp10$1 >> 0) + tmp13$1 >> 0)) >> 15 >> 0)));
  �			x = x + (1) >> 0;
    		}
    	};
fdctimage/jpeg.fdctimage/jpeg.sliceType$1 !(*image/jpeg.decoder).ensureNBits ��	decoder.ptr.prototype.ensureNBits = function(n) {
		var _r, _tuple, c, d, err, n, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; c = $f.c; d = $f.d; err = $f.err; n = $f.n; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		/* while (true) { */ case 1:
  �			_r = d.readByteStuffedByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			c = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  					$s = -1; return new FormatError(errShortHuffmanData);
    				}
  9				$s = -1; return err;
    			}
  J			d.bits.a = ((d.bits.a << 8 >>> 0) | ((c >>> 0))) >>> 0;
  o			d.bits.n = d.bits.n + (8) >> 0;
    			if (d.bits.m === 0) {
  �				d.bits.m = 128;
    			} else {
  �				d.bits.m = (y = (8), y < 32 ? (d.bits.m << y) : 0) >>> 0;
    			}
    			if (d.bits.n >= n) {
  �				/* break; */ $s = 2; continue;
    			}
    		$s = 1; continue;
		case 2:
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.ensureNBits }; } $f._r = _r; $f._tuple = _tuple; $f.c = c; $f.d = d; $f.err = err; $f.n = n; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.ensureNBits = function(n) { return this.$val.ensureNBits(n); };
decoderensureNBits~image/jpeg.FormatErrorimage/jpeg.decoderimage/jpeg.errShortHuffmanDataimage/jpeg.readByteStuffedByte~io.EOF #(*image/jpeg.decoder).receiveExtend �W	decoder.ptr.prototype.receiveExtend = function(t) {
		var _r, d, err, s, t, x, y, y$1, y$2, y$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; s = $f.s; t = $f.t; x = $f.x; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
   �		/* */ if (d.bits.n < ((t >> 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.bits.n < ((t >> 0))) { */ case 1:
   �			_r = d.ensureNBits(((t >> 0))); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
   �				$s = -1; return [0, err];
    			}
    		/* } */ case 2:
   �		d.bits.n = d.bits.n - (((t >> 0))) >> 0;
  !		d.bits.m = (y = (t), y < 32 ? (d.bits.m >>> y) : 0) >>> 0;
  !		s = (y$1 = t, y$1 < 32 ? (1 << y$1) : 0) >> 0;
  !1		x = ((((y$2 = ((d.bits.n << 24 >>> 24)), y$2 < 32 ? (d.bits.a >>> y$2) : 0) >>> 0) >> 0)) & ((s - 1 >> 0));
    		if (x < (s >> 1 >> 0)) {
  !r			x = x + (((((y$3 = t, y$3 < 32 ? (-1 << y$3) : 0) >> 0)) + 1 >> 0)) >> 0;
    		}
  !�		$s = -1; return [x, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.receiveExtend }; } $f._r = _r; $f.d = d; $f.err = err; $f.s = s; $f.t = t; $f.x = x; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.receiveExtend = function(t) { return this.$val.receiveExtend(t); };
decoderreceiveExtend~image/jpeg.decoderimage/jpeg.ensureNBits~  (*image/jpeg.decoder).processDHT ��	decoder.ptr.prototype.processDHT = function(n) {
		var _i, _i$1, _i$2, _r, _r$1, _ref, _ref$1, _ref$2, _tmp, _tmp$1, _tmp$2, _tmp$3, base, c, code, d, err, err$1, h, i, i$1, i$2, i$3, index, j, k, lutValue, n, n$1, nCodes, tc, th, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1, y$2, y$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; base = $f.base; c = $f.c; code = $f.code; d = $f.d; err = $f.err; err$1 = $f.err$1; h = $f.h; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; index = $f.index; j = $f.j; k = $f.k; lutValue = $f.lutValue; n = $f.n; n$1 = $f.n$1; nCodes = $f.nCodes; tc = $f.tc; th = $f.th; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  "U		/* while (true) { */ case 1:
			/* if (!(n > 0)) { break; } */ if(!(n > 0)) { $s = 2; continue; }
    			if (n < 17) {
  "r				$s = -1; return new FormatError("DHT has wrong length");
    			}
  "�			_r = d.readFull($subslice(new sliceType(d.tmp), 0, 17)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  "�				$s = -1; return err;
    			}
  "�			tc = d.tmp[0] >>> 4 << 24 >>> 24;
    			if (tc > 1) {
  #				$s = -1; return new FormatError("bad Tc value");
    			}
  #8			th = (d.tmp[0] & 15) >>> 0;
    			if (th > 3 || (d.baseline && th > 1)) {
  #�				$s = -1; return new FormatError("bad Th value");
    			}
  #�			h = (x = (x$1 = d.huff, ((tc < 0 || tc >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[tc])), ((th < 0 || th >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[th]));
  $�			h.nCodes = 0;
  $�			nCodes = arrayType$3.zero();
  $�			_ref = nCodes;
			_i = 0;
			while (true) {
				if (!(_i < 16)) { break; }
				i = _i;
  $�				((i < 0 || i >= nCodes.length) ? ($throwRuntimeError("index out of range"), undefined) : nCodes[i] = (((x$2 = d.tmp, x$3 = i + 1 >> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])) >> 0)));
  %				h.nCodes = h.nCodes + (((i < 0 || i >= nCodes.length) ? ($throwRuntimeError("index out of range"), undefined) : nCodes[i])) >> 0;
    				_i++;
			}
    			if (h.nCodes === 0) {
  %7				$s = -1; return new FormatError("Huffman table has zero length");
    			}
    			if (h.nCodes > 256) {
  %�				$s = -1; return new FormatError("Huffman table has excessive length");
    			}
  %�			n = n - ((((h.nCodes >> 0)) + 17 >> 0)) >> 0;
    			if (n < 0) {
  %�				$s = -1; return new FormatError("DHT has wrong length");
    			}
  &)			_r$1 = d.readFull($subslice(new sliceType(h.vals), 0, h.nCodes)); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err$1 = _r$1;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  &_				$s = -1; return err$1;
    			}
  &�			_ref$1 = h.lut;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < 256)) { break; }
				i$1 = _i$1;
  &�				(x$4 = h.lut, ((i$1 < 0 || i$1 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i$1] = 0));
    				_i$1++;
			}
  &�			_tmp = 0;
			_tmp$1 = 0;
			x$5 = _tmp;
			code = _tmp$1;
  &�			i$2 = 0;
			while (true) {
				if (!(i$2 < 8)) { break; }
  &�				code = (y = (1), y < 32 ? (code << y) : 0) >>> 0;
  '				j = 0;
				while (true) {
					if (!(j < ((i$2 < 0 || i$2 >= nCodes.length) ? ($throwRuntimeError("index out of range"), undefined) : nCodes[i$2]))) { break; }
  (E					base = ((((y$1 = ((7 - i$2 >>> 0)), y$1 < 32 ? (code << y$1) : 0) >>> 0) << 24 >>> 24));
  (h					lutValue = (((((x$6 = h.vals, ((x$5 < 0 || x$5 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$5])) << 16 >>> 16)) << 8 << 16 >>> 16) | (((2 + i$2 >>> 0) << 16 >>> 16))) >>> 0;
  (�					k = 0;
					while (true) {
						if (!(k < ((y$2 = ((7 - i$2 >>> 0)), y$2 < 32 ? (1 << y$2) : 0) << 24 >>> 24))) { break; }
  (�						(x$7 = h.lut, x$8 = (base | k) >>> 0, ((x$8 < 0 || x$8 >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[x$8] = lutValue));
  (�						k = k + (1) << 24 >>> 24;
    					}
  (�					code = code + (1) >>> 0;
  (�					x$5 = x$5 + (1) >>> 0;
  ',					j = j + (1) >> 0;
    				}
  &�				i$2 = i$2 + (1) >>> 0;
    			}
  ):			_tmp$2 = 0;
			_tmp$3 = 0;
			c = _tmp$2;
			index = _tmp$3;
  )K			_ref$2 = nCodes;
			_i$2 = 0;
			while (true) {
				if (!(_i$2 < 16)) { break; }
				i$3 = _i$2;
				n$1 = ((_i$2 < 0 || _i$2 >= _ref$2.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2[_i$2]);
    				if (n$1 === 0) {
  )y					(x$9 = h.minCodes, ((i$3 < 0 || i$3 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[i$3] = -1));
  )�					(x$10 = h.maxCodes, ((i$3 < 0 || i$3 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[i$3] = -1));
  )�					(x$11 = h.valsIndices, ((i$3 < 0 || i$3 >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[i$3] = -1));
    				} else {
  )�					(x$12 = h.minCodes, ((i$3 < 0 || i$3 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[i$3] = c));
  )�					(x$13 = h.maxCodes, ((i$3 < 0 || i$3 >= x$13.length) ? ($throwRuntimeError("index out of range"), undefined) : x$13[i$3] = ((c + n$1 >> 0) - 1 >> 0)));
  *					(x$14 = h.valsIndices, ((i$3 < 0 || i$3 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[i$3] = index));
  *					c = c + (n$1) >> 0;
  *)					index = index + (n$1) >> 0;
    				}
  *<				c = (y$3 = (1), y$3 < 32 ? (c << y$3) : 0) >> 0;
    				_i$2++;
			}
    		$s = 1; continue;
		case 2:
  *L		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processDHT }; } $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.base = base; $f.c = c; $f.code = code; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.h = h; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.index = index; $f.j = j; $f.k = k; $f.lutValue = lutValue; $f.n = n; $f.n$1 = n$1; $f.nCodes = nCodes; $f.tc = tc; $f.th = th; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processDHT = function(n) { return this.$val.processDHT(n); };
decoderprocessDHT~image/jpeg.FormatErrorimage/jpeg.arrayType$3image/jpeg.decoderimage/jpeg.readFull~image/jpeg.sliceType #(*image/jpeg.decoder).decodeHuffman ��	decoder.ptr.prototype.decodeHuffman = function(h) {
		var _r, _r$1, _tmp, _tmp$1, code, d, err, err$1, h, i, n, v, x, x$1, x$2, x$3, x$4, x$5, x$6, y, y$1, y$2, y$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; code = $f.code; d = $f.d; err = $f.err; err$1 = $f.err$1; h = $f.h; i = $f.i; n = $f.n; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (h.nCodes === 0) {
  +			$s = -1; return [0, new FormatError("uninitialized Huffman table")];
    		}
  +M		/* */ if (d.bits.n < 8) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.bits.n < 8) { */ case 1:
  +d			_r = d.ensureNBits(8); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
  +a			/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 4:
    				if (!($interfaceIsEqual(err, new FormatError(errMissingFF00))) && !($interfaceIsEqual(err, new FormatError(errShortHuffmanData)))) {
  +�					$s = -1; return [0, err];
    				}
    				if (!((d.bytes.nUnreadable === 0))) {
  ,�					d.unreadByteStuffedByte();
    				}
  ,�				/* goto slowPath */ $s = 6; continue;
    			/* } */ case 5:
    		/* } */ case 2:
  -		v = (x = h.lut, x$1 = ((((y = (((d.bits.n - 8 >> 0) >>> 0)), y < 32 ? (d.bits.a >>> y) : 0) >>> 0)) & 255) >>> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
    		if (!((v === 0))) {
  -M			n = (((v & 255) >>> 0)) - 1 << 16 >>> 16;
  -c			d.bits.n = d.bits.n - (((n >> 0))) >> 0;
  -z			d.bits.m = (y$1 = (n), y$1 < 32 ? (d.bits.m >>> y$1) : 0) >>> 0;
  -�			$s = -1; return [(((v >>> 8 << 16 >>> 16) << 24 >>> 24)), $ifaceNil];
    		}
  -�		/* slowPath: */ case 6:
  -�		_tmp = 0;
		_tmp$1 = 0;
		i = _tmp;
		code = _tmp$1;
		/* while (true) { */ case 7:
			/* if (!(i < 16)) { break; } */ if(!(i < 16)) { $s = 8; continue; }
  -�			/* */ if (d.bits.n === 0) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (d.bits.n === 0) { */ case 9:
  .				_r$1 = d.ensureNBits(1); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				err$1 = _r$1;
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ..					$s = -1; return [0, err$1];
    				}
    			/* } */ case 10:
    			if (!((((d.bits.a & d.bits.m) >>> 0) === 0))) {
  .f				code = code | (1);
    			}
  .v			d.bits.n = d.bits.n - (1) >> 0;
  .�			d.bits.m = (y$2 = (1), y$2 < 32 ? (d.bits.m >>> y$2) : 0) >>> 0;
    			if (code <= (x$2 = h.maxCodes, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i]))) {
  .�				$s = -1; return [(x$3 = h.vals, x$4 = ((x$5 = h.valsIndices, ((i < 0 || i >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i])) + code >> 0) - (x$6 = h.minCodes, ((i < 0 || i >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[i])) >> 0, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])), $ifaceNil];
    			}
  .�			code = (y$3 = (1), y$3 < 32 ? (code << y$3) : 0) >> 0;
  -�			i = i + (1) >> 0;
    		$s = 7; continue;
		case 8:
  .�		$s = -1; return [0, new FormatError("bad Huffman code")];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.decodeHuffman }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.code = code; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.h = h; $f.i = i; $f.n = n; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.decodeHuffman = function(h) { return this.$val.decodeHuffman(h); };
decoderdecodeHuffman~image/jpeg.FormatErrorimage/jpeg.decoderimage/jpeg.ensureNBits~image/jpeg.errMissingFF00image/jpeg.errShortHuffmanData!image/jpeg.unreadByteStuffedByte~ (*image/jpeg.decoder).decodeBit ��	decoder.ptr.prototype.decodeBit = function() {
		var _r, d, err, ret, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; ret = $f.ret; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  /[		/* */ if (d.bits.n === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.bits.n === 0) { */ case 1:
  /s			_r = d.ensureNBits(1); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  /�				$s = -1; return [false, err];
    			}
    		/* } */ case 2:
  /�		ret = !((((d.bits.a & d.bits.m) >>> 0) === 0));
  /�		d.bits.n = d.bits.n - (1) >> 0;
  /�		d.bits.m = (y = (1), y < 32 ? (d.bits.m >>> y) : 0) >>> 0;
  /�		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.decodeBit }; } $f._r = _r; $f.d = d; $f.err = err; $f.ret = ret; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.decodeBit = function() { return this.$val.decodeBit(); };
decoder
decodeBit~image/jpeg.decoderimage/jpeg.ensureNBits~  (*image/jpeg.decoder).decodeBits ��	decoder.ptr.prototype.decodeBits = function(n) {
		var _r, d, err, n, ret, y, y$1, y$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; n = $f.n; ret = $f.ret; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  0=		/* */ if (d.bits.n < n) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.bits.n < n) { */ case 1:
  0T			_r = d.ensureNBits(n); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  0}				$s = -1; return [0, err];
    			}
    		/* } */ case 2:
  0�		ret = (y = (((d.bits.n - n >> 0) >>> 0)), y < 32 ? (d.bits.a >>> y) : 0) >>> 0;
  0�		ret = (ret & (((((y$1 = ((n >>> 0)), y$1 < 32 ? (1 << y$1) : 0) >>> 0)) - 1 >>> 0))) >>> 0;
  0�		d.bits.n = d.bits.n - (n) >> 0;
  0�		d.bits.m = (y$2 = (((n >>> 0))), y$2 < 32 ? (d.bits.m >>> y$2) : 0) >>> 0;
  0�		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.decodeBits }; } $f._r = _r; $f.d = d; $f.err = err; $f.n = n; $f.ret = ret; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.decodeBits = function(n) { return this.$val.decodeBits(n); };
decoderdecodeBits~image/jpeg.decoderimage/jpeg.ensureNBits~ image/jpeg.idct
image/jpegidct idct� �	idct = function(src) {
		var dc, s, s$1, src, x, x0, x1, x2, x3, x4, x5, x6, x7, x8, y, y0, y1, y2, y3, y4, y5, y6, y7, y8, y8$1;
  ;=		y = 0;
		while (true) {
			if (!(y < 8)) { break; }
  ;T			y8 = $imul(y, 8);
  ;b			s = $subslice(new sliceType$1(src), y8, (y8 + 8 >> 0), (y8 + 8 >> 0));
    			if (((1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]) === 0) && ((2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]) === 0) && ((3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]) === 0) && ((4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4]) === 0) && ((5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5]) === 0) && ((6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6]) === 0) && ((7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7]) === 0)) {
  <j				dc = (0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) << 3 >> 0;
  <}				(0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0] = dc);
  <�				(1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1] = dc);
  <�				(2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2] = dc);
  <�				(3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3] = dc);
  <�				(4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4] = dc);
  <�				(5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5] = dc);
  <�				(6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6] = dc);
  <�				(7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7] = dc);
  ;L				y = y + (1) >> 0;
    				continue;
    			}
  =			x0 = (((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) << 11 >> 0)) + 128 >> 0;
  =			x1 = (4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4]) << 11 >> 0;
  =2			x2 = (6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6]);
  =?			x3 = (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]);
  =L			x4 = (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]);
  =Y			x5 = (7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7]);
  =f			x6 = (5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5]);
  =s			x7 = (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]);
  =�			x8 = $imul(565, ((x4 + x5 >> 0)));
  =�			x4 = x8 + ($imul(2276, x4)) >> 0;
  =�			x5 = x8 - ($imul(3406, x5)) >> 0;
  =�			x8 = $imul(2408, ((x6 + x7 >> 0)));
  =�			x6 = x8 - ($imul(799, x6)) >> 0;
  =�			x7 = x8 - ($imul(4017, x7)) >> 0;
  >			x8 = x0 + x1 >> 0;
  >.			x0 = x0 - (x1) >> 0;
  >9			x1 = $imul(1108, ((x3 + x2 >> 0)));
  >O			x2 = x1 - ($imul(3784, x2)) >> 0;
  >d			x3 = x1 + ($imul(1568, x3)) >> 0;
  >y			x1 = x4 + x6 >> 0;
  >�			x4 = x4 - (x6) >> 0;
  >�			x6 = x5 + x7 >> 0;
  >�			x5 = x5 - (x7) >> 0;
  >�			x7 = x8 + x3 >> 0;
  >�			x8 = x8 - (x3) >> 0;
  >�			x3 = x0 + x2 >> 0;
  >�			x0 = x0 - (x2) >> 0;
  >�			x2 = ((($imul(181, ((x4 + x5 >> 0)))) + 128 >> 0)) >> 8 >> 0;
  ?			x4 = ((($imul(181, ((x4 - x5 >> 0)))) + 128 >> 0)) >> 8 >> 0;
  ?=			(0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0] = (((x7 + x1 >> 0)) >> 8 >> 0));
  ?U			(1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1] = (((x3 + x2 >> 0)) >> 8 >> 0));
  ?m			(2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2] = (((x0 + x4 >> 0)) >> 8 >> 0));
  ?�			(3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3] = (((x8 + x6 >> 0)) >> 8 >> 0));
  ?�			(4 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 4] = (((x8 - x6 >> 0)) >> 8 >> 0));
  ?�			(5 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 5] = (((x0 - x4 >> 0)) >> 8 >> 0));
  ?�			(6 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 6] = (((x3 - x2 >> 0)) >> 8 >> 0));
  ?�			(7 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 7] = (((x7 - x1 >> 0)) >> 8 >> 0));
  ;L			y = y + (1) >> 0;
    		}
  @		x = 0;
		while (true) {
			if (!(x < 8)) { break; }
  A:			s$1 = $subslice(new sliceType$1(src), x, (x + 57 >> 0), (x + 57 >> 0));
  A�			y0 = (((0 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 0]) << 8 >> 0)) + 8192 >> 0;
  A�			y1 = (32 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 32]) << 8 >> 0;
  A�			y2 = (48 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 48]);
  A�			y3 = (16 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 16]);
  A�			y4 = (8 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 8]);
  B
			y5 = (56 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 56]);
  B			y6 = (40 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 40]);
  B(			y7 = (24 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 24]);
  BF			y8$1 = ($imul(565, ((y4 + y5 >> 0)))) + 4 >> 0;
  B]			y4 = ((y8$1 + ($imul(2276, y4)) >> 0)) >> 3 >> 0;
  By			y5 = ((y8$1 - ($imul(3406, y5)) >> 0)) >> 3 >> 0;
  B�			y8$1 = ($imul(2408, ((y6 + y7 >> 0)))) + 4 >> 0;
  B�			y6 = ((y8$1 - ($imul(799, y6)) >> 0)) >> 3 >> 0;
  B�			y7 = ((y8$1 - ($imul(4017, y7)) >> 0)) >> 3 >> 0;
  B�			y8$1 = y0 + y1 >> 0;
  C			y0 = y0 - (y1) >> 0;
  C			y1 = ($imul(1108, ((y3 + y2 >> 0)))) + 4 >> 0;
  C"			y2 = ((y1 - ($imul(3784, y2)) >> 0)) >> 3 >> 0;
  C>			y3 = ((y1 + ($imul(1568, y3)) >> 0)) >> 3 >> 0;
  CZ			y1 = y4 + y6 >> 0;
  Ci			y4 = y4 - (y6) >> 0;
  Ct			y6 = y5 + y7 >> 0;
  C�			y5 = y5 - (y7) >> 0;
  C�			y7 = y8$1 + y3 >> 0;
  C�			y8$1 = y8$1 - (y3) >> 0;
  C�			y3 = y0 + y2 >> 0;
  C�			y0 = y0 - (y2) >> 0;
  C�			y2 = ((($imul(181, ((y4 + y5 >> 0)))) + 128 >> 0)) >> 8 >> 0;
  C�			y4 = ((($imul(181, ((y4 - y5 >> 0)))) + 128 >> 0)) >> 8 >> 0;
  D			(0 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 0] = (((y7 + y1 >> 0)) >> 14 >> 0));
  D9			(8 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 8] = (((y3 + y2 >> 0)) >> 14 >> 0));
  DT			(16 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 16] = (((y0 + y4 >> 0)) >> 14 >> 0));
  Do			(24 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 24] = (((y8$1 + y6 >> 0)) >> 14 >> 0));
  D�			(32 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 32] = (((y8$1 - y6 >> 0)) >> 14 >> 0));
  D�			(40 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 40] = (((y0 - y4 >> 0)) >> 14 >> 0));
  D�			(48 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 48] = (((y3 - y2 >> 0)) >> 14 >> 0));
  D�			(56 >= s$1.$length ? ($throwRuntimeError("index out of range"), undefined) : s$1.$array[s$1.$offset + 56] = (((y7 - y1 >> 0)) >> 14 >> 0));
  @*			x = x + (1) >> 0;
    		}
    	};
idctimage/jpeg.idctimage/jpeg.sliceType$1 (image/jpeg.FormatError).Error ��	FormatError.prototype.Error = function() {
		var e;
		e = this.$val;
  F�		return "invalid JPEG format: " + (e);
    	};
	$ptrType(FormatError).prototype.Error = function() { return new FormatError(this.$get()).Error(); };
FormatErrorimage/jpeg.FormatError #(image/jpeg.UnsupportedError).Error ��	UnsupportedError.prototype.Error = function() {
		var e;
		e = this.$val;
  G�		return "unsupported JPEG feature: " + (e);
    	};
	$ptrType(UnsupportedError).prototype.Error = function() { return new UnsupportedError(this.$get()).Error(); };
UnsupportedErrorimage/jpeg.UnsupportedError (*image/jpeg.decoder).fill ��	decoder.ptr.prototype.fill = function() {
		var _r, _tmp, _tmp$1, _tuple, d, err, n, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; d = $f.d; err = $f.err; n = $f.n; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((d.bytes.i === d.bytes.j))) {
  W�			$panic(new $String("jpeg: fill called when unread bytes exist"));
    		}
    		if (d.bytes.j > 2) {
  X�			d.bytes.buf[0] = (x = d.bytes.buf, x$1 = d.bytes.j - 2 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
  X�			d.bytes.buf[1] = (x$2 = d.bytes.buf, x$3 = d.bytes.j - 1 >> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3]));
  X�			_tmp = 2;
			_tmp$1 = 2;
			d.bytes.i = _tmp;
			d.bytes.j = _tmp$1;
    		}
  YC		_r = d.r.Read($subslice(new sliceType(d.bytes.buf), d.bytes.j)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  Yp		d.bytes.j = d.bytes.j + (n) >> 0;
    		if (n > 0) {
  Y�			err = $ifaceNil;
    		}
  Y�		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.fill }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.d = d; $f.err = err; $f.n = n; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.fill = function() { return this.$val.fill(); };
decoderfill~image/jpeg.decoderimage/jpeg.sliceType +(*image/jpeg.decoder).unreadByteStuffedByte ��	decoder.ptr.prototype.unreadByteStuffedByte = function() {
		var d, y, y$1;
		d = this;
  [Q		d.bytes.i = d.bytes.i - (d.bytes.nUnreadable) >> 0;
  [s		d.bytes.nUnreadable = 0;
    		if (d.bits.n >= 8) {
  [�			d.bits.a = (y = (8), y < 32 ? (d.bits.a >>> y) : 0) >>> 0;
  [�			d.bits.n = d.bits.n - (8) >> 0;
  [�			d.bits.m = (y$1 = (8), y$1 < 32 ? (d.bits.m >>> y$1) : 0) >>> 0;
    		}
    	};
	decoder.prototype.unreadByteStuffedByte = function() { return this.$val.unreadByteStuffedByte(); };
decoderunreadByteStuffedByte~image/jpeg.decoder (*image/jpeg.decoder).readByte �o	decoder.ptr.prototype.readByte = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, d, err, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; d = $f.d; err = $f.err; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = 0;
		err = $ifaceNil;
		d = this;
  \y		/* while (true) { */ case 1:
			/* if (!(d.bytes.i === d.bytes.j)) { break; } */ if(!(d.bytes.i === d.bytes.j)) { $s = 2; continue; }
  \�			_r = d.fill(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp = 0;
				_tmp$1 = err;
				x = _tmp;
				err = _tmp$1;
				$s = -1; return [x, err];
    			}
    		$s = 1; continue;
		case 2:
  \�		x = (x$1 = d.bytes.buf, x$2 = d.bytes.i, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2]));
  \�		d.bytes.i = d.bytes.i + (1) >> 0;
  \�		d.bytes.nUnreadable = 0;
    		_tmp$2 = x;
		_tmp$3 = $ifaceNil;
		x = _tmp$2;
		err = _tmp$3;
		$s = -1; return [x, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readByte }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.d = d; $f.err = err; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readByte = function() { return this.$val.readByte(); };
decoder	readByte~image/jpeg.decoderimage/jpeg.fill~ )(*image/jpeg.decoder).readByteStuffedByte ��	decoder.ptr.prototype.readByteStuffedByte = function() {
		var _r, _r$1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, d, err, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; d = $f.d; err = $f.err; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = 0;
		err = $ifaceNil;
		d = this;
    		if ((d.bytes.i + 2 >> 0) <= d.bytes.j) {
  ^�			x = (x$1 = d.bytes.buf, x$2 = d.bytes.i, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2]));
  _			d.bytes.i = d.bytes.i + (1) >> 0;
  _			d.bytes.nUnreadable = 1;
    			if (!((x === 255))) {
    				_tmp = x;
				_tmp$1 = err;
				x = _tmp;
				err = _tmp$1;
				$s = -1; return [x, err];
    			}
    			if (!(((x$3 = d.bytes.buf, x$4 = d.bytes.i, ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])) === 0))) {
    				_tmp$2 = 0;
				_tmp$3 = new FormatError(errMissingFF00);
				x = _tmp$2;
				err = _tmp$3;
				$s = -1; return [x, err];
    			}
  _�			d.bytes.i = d.bytes.i + (1) >> 0;
  _�			d.bytes.nUnreadable = 2;
    			_tmp$4 = 255;
			_tmp$5 = $ifaceNil;
			x = _tmp$4;
			err = _tmp$5;
			$s = -1; return [x, err];
    		}
  _�		d.bytes.nUnreadable = 0;
  _�		_r = d.readByte(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		x = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$6 = 0;
			_tmp$7 = err;
			x = _tmp$6;
			err = _tmp$7;
			$s = -1; return [x, err];
    		}
  `-		d.bytes.nUnreadable = 1;
    		if (!((x === 255))) {
    			_tmp$8 = x;
			_tmp$9 = $ifaceNil;
			x = _tmp$8;
			err = _tmp$9;
			$s = -1; return [x, err];
    		}
  `j		_r$1 = d.readByte(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		x = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$10 = 0;
			_tmp$11 = err;
			x = _tmp$10;
			err = _tmp$11;
			$s = -1; return [x, err];
    		}
  `�		d.bytes.nUnreadable = 2;
    		if (!((x === 0))) {
    			_tmp$12 = 0;
			_tmp$13 = new FormatError(errMissingFF00);
			x = _tmp$12;
			err = _tmp$13;
			$s = -1; return [x, err];
    		}
    		_tmp$14 = 255;
		_tmp$15 = $ifaceNil;
		x = _tmp$14;
		err = _tmp$15;
		$s = -1; return [x, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readByteStuffedByte }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.d = d; $f.err = err; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readByteStuffedByte = function() { return this.$val.readByteStuffedByte(); };
decoderreadByteStuffedByte~image/jpeg.FormatErrorimage/jpeg.decoderimage/jpeg.errMissingFF00image/jpeg.readByte~ (*image/jpeg.decoder).readFull ��	decoder.ptr.prototype.readFull = function(p) {
		var _r, d, err, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((d.bytes.nUnreadable === 0))) {
    			if (d.bits.n >= 8) {
  a�				d.unreadByteStuffedByte();
    			}
  b			d.bytes.nUnreadable = 0;
    		}
  b 		/* while (true) { */ case 1:
  b(			n = $copySlice(p, $subslice(new sliceType(d.bytes.buf), d.bytes.i, d.bytes.j));
  bY			p = $subslice(p, n);
  be			d.bytes.i = d.bytes.i + (n) >> 0;
    			if (p.$length === 0) {
  b�				/* break; */ $s = 2; continue;
    			}
  b�			_r = d.fill(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  b�					err = io.ErrUnexpectedEOF;
    				}
  b�				$s = -1; return err;
    			}
    		$s = 1; continue;
		case 2:
  c		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.readFull }; } $f._r = _r; $f.d = d; $f.err = err; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.readFull = function(p) { return this.$val.readFull(p); };
decoder	readFull~image/jpeg.decoderimage/jpeg.fill~image/jpeg.sliceType!image/jpeg.unreadByteStuffedByte~io.EOFio.ErrUnexpectedEOF (*image/jpeg.decoder).ignore ��	decoder.ptr.prototype.ignore = function(n) {
		var _r, d, err, m, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; m = $f.m; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((d.bytes.nUnreadable === 0))) {
    			if (d.bits.n >= 8) {
  c�				d.unreadByteStuffedByte();
    			}
  c�			d.bytes.nUnreadable = 0;
    		}
  c�		/* while (true) { */ case 1:
  d			m = d.bytes.j - d.bytes.i >> 0;
    			if (m > n) {
  d.				m = n;
    			}
  d:			d.bytes.i = d.bytes.i + (m) >> 0;
  dK			n = n - (m) >> 0;
    			if (n === 0) {
  dc				/* break; */ $s = 2; continue;
    			}
  dr			_r = d.fill(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, io.EOF)) {
  d�					err = io.ErrUnexpectedEOF;
    				}
  d�				$s = -1; return err;
    			}
    		$s = 1; continue;
		case 2:
  d�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.ignore }; } $f._r = _r; $f.d = d; $f.err = err; $f.m = m; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.ignore = function(n) { return this.$val.ignore(n); };
decoderignore~image/jpeg.decoderimage/jpeg.fill~!image/jpeg.unreadByteStuffedByte~io.EOFio.ErrUnexpectedEOF  (*image/jpeg.decoder).processSOF ��	decoder.ptr.prototype.processSOF = function(n) {
		var _1, _2, _3, _4, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, d, err, h, hv, i, j, n, v, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; d = $f.d; err = $f.err; h = $f.h; hv = $f.hv; i = $f.i; j = $f.j; n = $f.n; v = $f.v; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((d.nComp === 0))) {
  eM			$s = -1; return new FormatError("multiple SOF markers");
    		}
    		_1 = n;
    		if (_1 === (9)) {
  e�			d.nComp = 1;
    		} else if (_1 === (15)) {
  e�			d.nComp = 3;
    		} else if (_1 === (18)) {
  f			d.nComp = 4;
    		} else {
  f.			$s = -1; return new UnsupportedError("number of components");
    		}
  fe		_r = d.readFull($subslice(new sliceType(d.tmp), 0, n)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  f�			$s = -1; return err;
    		}
    		if (!((d.tmp[0] === 8))) {
  f�			$s = -1; return new UnsupportedError("precision");
    		}
  g		d.height = (((d.tmp[1] >> 0)) << 8 >> 0) + ((d.tmp[2] >> 0)) >> 0;
  g1		d.width = (((d.tmp[3] >> 0)) << 8 >> 0) + ((d.tmp[4] >> 0)) >> 0;
    		if (!((((d.tmp[5] >> 0)) === d.nComp))) {
  g}			$s = -1; return new FormatError("SOF has wrong length");
    		}
  g�		i = 0;
		while (true) {
			if (!(i < d.nComp)) { break; }
  g�			(x$2 = d.comp, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])).c = (x = d.tmp, x$1 = 6 + ($imul(3, i)) >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
  ha			j = 0;
			while (true) {
				if (!(j < i)) { break; }
    				if ((x$3 = d.comp, ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i])).c === (x$4 = d.comp, ((j < 0 || j >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[j])).c) {
  h�					$s = -1; return new FormatError("repeated component identifier");
    				}
  hp				j = j + (1) >> 0;
    			}
  h�			(x$7 = d.comp, ((i < 0 || i >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[i])).tq = (x$5 = d.tmp, x$6 = 8 + ($imul(3, i)) >> 0, ((x$6 < 0 || x$6 >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[x$6]));
    			if ((x$8 = d.comp, ((i < 0 || i >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[i])).tq > 3) {
  i				$s = -1; return new FormatError("bad Tq value");
    			}
  iB			hv = (x$9 = d.tmp, x$10 = 7 + ($imul(3, i)) >> 0, ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10]));
  iW			_tmp = (((hv >>> 4 << 24 >>> 24) >> 0));
			_tmp$1 = ((((hv & 15) >>> 0) >> 0));
			h = _tmp;
			v = _tmp$1;
    			if (h < 1 || 4 < h || v < 1 || 4 < v) {
  i�				$s = -1; return new FormatError("luma/chroma subsampling ratio");
    			}
    			if ((h === 3) || (v === 3)) {
  i�				$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    			}
    			_2 = d.nComp;
    			if (_2 === (1)) {
  mR				_tmp$2 = 1;
				_tmp$3 = 1;
				h = _tmp$2;
				v = _tmp$3;
    			} else if (_2 === (3)) {
    				_3 = i;
    				if (_3 === (0)) {
    					if (v === 4) {
  o�						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				} else if (_3 === (1)) {
    					if (!(((_r$1 = d.comp[0].h % h, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) === 0)) || !(((_r$2 = d.comp[0].v % v, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) === 0))) {
  pQ						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				} else if (_3 === (2)) {
    					if (!((d.comp[1].h === h)) || !((d.comp[1].v === v))) {
  p�						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				}
    			} else if (_2 === (4)) {
    				_4 = i;
    				if (_4 === (0)) {
    					if (!((hv === 17)) && !((hv === 34))) {
  s�						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				} else if ((_4 === (1)) || (_4 === (2))) {
    					if (!((hv === 17))) {
  s�						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				} else if (_4 === (3)) {
    					if (!((d.comp[0].h === h)) || !((d.comp[0].v === v))) {
  tB						$s = -1; return new UnsupportedError(errUnsupportedSubsamplingRatio);
    					}
    				}
    			}
  tz			(x$11 = d.comp, ((i < 0 || i >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[i])).h = h;
  t�			(x$12 = d.comp, ((i < 0 || i >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[i])).v = v;
  g�			i = i + (1) >> 0;
    		}
  t�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processSOF }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.d = d; $f.err = err; $f.h = h; $f.hv = hv; $f.i = i; $f.j = j; $f.n = n; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processSOF = function(n) { return this.$val.processSOF(n); };
decoderprocessSOF~image/jpeg.FormatErrorimage/jpeg.UnsupportedErrorimage/jpeg.decoder)image/jpeg.errUnsupportedSubsamplingRatioimage/jpeg.readFull~image/jpeg.sliceType  (*image/jpeg.decoder).processDQT ��	decoder.ptr.prototype.processDQT = function(n) {
		var _1, _i, _i$1, _r, _r$1, _r$2, _ref, _ref$1, _tuple, d, err, err$1, err$2, i, i$1, n, tq, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _ref$1 = $f._ref$1; _tuple = $f._tuple; d = $f.d; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; i = $f.i; i$1 = $f.i$1; n = $f.n; tq = $f.tq; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  u		/* while (true) { */ case 1:
			/* if (!(n > 0)) { break; } */ if(!(n > 0)) { $s = 2; continue; }
  u			n = n - (1) >> 0;
  u			_r = d.readByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			x = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  uB				$s = -1; return err;
    			}
  uS			tq = (x & 15) >>> 0;
    			if (tq > 3) {
  uw				$s = -1; return new FormatError("bad Tq value");
    			}
    				_1 = x >>> 4 << 24 >>> 24;
  u�				/* */ if (_1 === (0)) { $s = 5; continue; }
				/* */ if (_1 === (1)) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if (_1 === (0)) { */ case 5:
    					if (n < 64) {
  v						/* break loop; */ $s = 2; continue s;
    					}
  v					n = n - (64) >> 0;
  v-					_r$1 = d.readFull($subslice(new sliceType(d.tmp), 0, 64)); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					err$1 = _r$1;
    					if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  vd						$s = -1; return err$1;
    					}
  vw					_ref = (x$1 = d.quant, ((tq < 0 || tq >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[tq]));
					_i = 0;
					while (true) {
						if (!(_i < 64)) { break; }
						i = _i;
  v�						(x$3 = (x$4 = d.quant, ((tq < 0 || tq >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[tq])), ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i] = (((x$2 = d.tmp, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) >> 0))));
    						_i++;
					}
    					$s = 8; continue;
    				/* } else if (_1 === (1)) { */ case 6:
    					if (n < 128) {
  v�						/* break loop; */ $s = 2; continue s;
    					}
  v�					n = n - (128) >> 0;
  w					_r$2 = d.readFull($subslice(new sliceType(d.tmp), 0, 128)); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					err$2 = _r$2;
    					if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  wI						$s = -1; return err$2;
    					}
  w\					_ref$1 = (x$5 = d.quant, ((tq < 0 || tq >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[tq]));
					_i$1 = 0;
					while (true) {
						if (!(_i$1 < 64)) { break; }
						i$1 = _i$1;
  w}						(x$10 = (x$11 = d.quant, ((tq < 0 || tq >= x$11.length) ? ($throwRuntimeError("index out of range"), undefined) : x$11[tq])), ((i$1 < 0 || i$1 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[i$1] = (((((x$6 = d.tmp, x$7 = $imul(2, i$1), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])) >> 0)) << 8 >> 0) | (((x$8 = d.tmp, x$9 = ($imul(2, i$1)) + 1 >> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])) >> 0)))));
    						_i$1++;
					}
    					$s = 8; continue;
				/* } else { */ case 7:
  u�					$s = -1; return new FormatError("bad Pq value");
    				/* } */ case 8:
    			case 4:
    		$s = 1; continue;
		case 2:
    		if (!((n === 0))) {
  w�			$s = -1; return new FormatError("DQT has wrong length");
    		}
  x		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processDQT }; } $f._1 = _1; $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tuple = _tuple; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.tq = tq; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processDQT = function(n) { return this.$val.processDQT(n); };
decoderprocessDQT~image/jpeg.FormatErrorimage/jpeg.decoderimage/jpeg.readByte~image/jpeg.readFull~image/jpeg.sliceType  (*image/jpeg.decoder).processDRI � 	decoder.ptr.prototype.processDRI = function(n) {
		var _r, d, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (!((n === 2))) {
  xm			$s = -1; return new FormatError("DRI has wrong length");
    		}
  x�		_r = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  x�			$s = -1; return err;
    		}
  x�		d.ri = (((d.tmp[0] >> 0)) << 8 >> 0) + ((d.tmp[1] >> 0)) >> 0;
  y		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processDRI }; } $f._r = _r; $f.d = d; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processDRI = function(n) { return this.$val.processDRI(n); };
decoderprocessDRI~image/jpeg.FormatErrorimage/jpeg.decoderimage/jpeg.readFull~image/jpeg.sliceType '(*image/jpeg.decoder).processApp0Marker �F	decoder.ptr.prototype.processApp0Marker = function(n) {
		var $24r, $24r$1, _r, _r$1, _r$2, d, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; d = $f.d; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  yF		/* */ if (n < 5) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n < 5) { */ case 1:
  yS			_r = d.ignore(n); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  ym		_r$1 = d.readFull($subslice(new sliceType(d.tmp), 0, 5)); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  y�			$s = -1; return err;
    		}
  y�		n = n - (5) >> 0;
  y�		d.jfif = (d.tmp[0] === 74) && (d.tmp[1] === 70) && (d.tmp[2] === 73) && (d.tmp[3] === 70) && (d.tmp[4] === 0);
  z		/* */ if (n > 0) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (n > 0) { */ case 6:
  z)			_r$2 = d.ignore(n); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r$1 = _r$2;
			$s = 9; case 9: return $24r$1;
    		/* } */ case 7:
  z@		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processApp0Marker }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.d = d; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processApp0Marker = function(n) { return this.$val.processApp0Marker(n); };
decoderprocessApp0Marker~image/jpeg.decoderimage/jpeg.ignore~image/jpeg.readFull~image/jpeg.sliceType ((*image/jpeg.decoder).processApp14Marker ��	decoder.ptr.prototype.processApp14Marker = function(n) {
		var $24r, $24r$1, _r, _r$1, _r$2, d, err, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; d = $f.d; err = $f.err; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  z�		/* */ if (n < 12) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (n < 12) { */ case 1:
  z�			_r = d.ignore(n); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  z�		_r$1 = d.readFull($subslice(new sliceType(d.tmp), 0, 12)); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  z�			$s = -1; return err;
    		}
  z�		n = n - (12) >> 0;
    		if ((d.tmp[0] === 65) && (d.tmp[1] === 100) && (d.tmp[2] === 111) && (d.tmp[3] === 98) && (d.tmp[4] === 101)) {
  {U			d.adobeTransformValid = true;
  {t			d.adobeTransform = d.tmp[11];
    		}
  {�		/* */ if (n > 0) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (n > 0) { */ case 6:
  {�			_r$2 = d.ignore(n); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r$1 = _r$2;
			$s = 9; case 9: return $24r$1;
    		/* } */ case 7:
  {�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processApp14Marker }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.d = d; $f.err = err; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processApp14Marker = function(n) { return this.$val.processApp14Marker(n); };
decoderprocessApp14Marker~image/jpeg.decoderimage/jpeg.ignore~image/jpeg.readFull~image/jpeg.sliceType (*image/jpeg.decoder).decode �$l	decoder.ptr.prototype.decode = function(r, configOnly) {
		var _1, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tuple, _tuple$1, configOnly, d, err, err$1, err$2, marker, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; configOnly = $f.configOnly; d = $f.d; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; marker = $f.marker; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  |]		d.r = r;
  |�		_r = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  |�			$s = -1; return [$ifaceNil, err];
    		}
    		if (!((d.tmp[0] === 255)) || !((d.tmp[1] === 216))) {
  }			$s = -1; return [$ifaceNil, new FormatError("missing SOI marker")];
    		}
  }z		/* while (true) { */ case 2:
  }�			_r$1 = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err$1 = _r$1;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  }�				$s = -1; return [$ifaceNil, err$1];
    			}
  }�			/* while (true) { */ case 5:
				/* if (!(!((d.tmp[0] === 255)))) { break; } */ if(!(!((d.tmp[0] === 255)))) { $s = 6; continue; }
  �!				d.tmp[0] = d.tmp[1];
  �8				_r$2 = d.readByte(); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				d.tmp[1] = _tuple[0];
				err$1 = _tuple[1];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �l					$s = -1; return [$ifaceNil, err$1];
    				}
    			$s = 5; continue;
			case 6:
  ��			marker = d.tmp[1];
    			if (marker === 0) {
  ��				/* continue; */ $s = 2; continue;
    			}
  ��			/* while (true) { */ case 8:
				/* if (!(marker === 255)) { break; } */ if(!(marker === 255)) { $s = 9; continue; }
  ��				_r$3 = d.readByte(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$1 = _r$3;
				marker = _tuple$1[0];
				err$1 = _tuple$1[1];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��					$s = -1; return [$ifaceNil, err$1];
    				}
    			$s = 8; continue;
			case 9:
    			if (marker === 217) {
  �				/* break; */ $s = 3; continue;
    			}
    			if (208 <= marker && marker <= 215) {
  �0				/* continue; */ $s = 2; continue;
    			}
  ��			_r$4 = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			err$1 = _r$4;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �				$s = -1; return [$ifaceNil, err$1];
    			}
  �$			n = ((((d.tmp[0] >> 0)) << 8 >> 0) + ((d.tmp[1] >> 0)) >> 0) - 2 >> 0;
    			if (n < 0) {
  �^				$s = -1; return [$ifaceNil, new FormatError("short segment length")];
    			}
    				_1 = marker;
  ��				/* */ if ((_1 === (192)) || (_1 === (193)) || (_1 === (194))) { $s = 13; continue; }
				/* */ if (_1 === (196)) { $s = 14; continue; }
				/* */ if (_1 === (219)) { $s = 15; continue; }
				/* */ if (_1 === (218)) { $s = 16; continue; }
				/* */ if (_1 === (221)) { $s = 17; continue; }
				/* */ if (_1 === (224)) { $s = 18; continue; }
				/* */ if (_1 === (238)) { $s = 19; continue; }
				/* */ if (224 <= marker && marker <= 239 || (marker === 254)) { $s = 20; continue; }
				/* */ if (marker < 192) { $s = 21; continue; }
				/* */ $s = 22; continue;
    				/* if ((_1 === (192)) || (_1 === (193)) || (_1 === (194))) { */ case 13:
  ��					d.baseline = marker === 192;
  ��					d.progressive = marker === 194;
  � 					_r$5 = d.processSOF(n); /* */ $s = 24; case 24: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					err$1 = _r$5;
    					if (configOnly && d.jfif) {
  �W						$s = -1; return [$ifaceNil, err$1];
    					}
    					$s = 23; continue;
    				/* } else if (_1 === (196)) { */ case 14:
  ��					/* */ if (configOnly) { $s = 25; continue; }
					/* */ $s = 26; continue;
    					/* if (configOnly) { */ case 25:
  ��						_r$6 = d.ignore(n); /* */ $s = 28; case 28: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
						err$1 = _r$6;
    						$s = 27; continue;
					/* } else { */ case 26:
  ��						_r$7 = d.processDHT(n); /* */ $s = 29; case 29: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
						err$1 = _r$7;
    					/* } */ case 27:
    					$s = 23; continue;
    				/* } else if (_1 === (219)) { */ case 15:
  ��					/* */ if (configOnly) { $s = 30; continue; }
					/* */ $s = 31; continue;
    					/* if (configOnly) { */ case 30:
  ��						_r$8 = d.ignore(n); /* */ $s = 33; case 33: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
						err$1 = _r$8;
    						$s = 32; continue;
					/* } else { */ case 31:
  �						_r$9 = d.processDQT(n); /* */ $s = 34; case 34: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
						err$1 = _r$9;
    					/* } */ case 32:
    					$s = 23; continue;
    				/* } else if (_1 === (218)) { */ case 16:
    					if (configOnly) {
  �a						$s = -1; return [$ifaceNil, $ifaceNil];
    					}
  �y					_r$10 = d.processSOS(n); /* */ $s = 35; case 35: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
					err$1 = _r$10;
    					$s = 23; continue;
    				/* } else if (_1 === (221)) { */ case 17:
  ��					/* */ if (configOnly) { $s = 36; continue; }
					/* */ $s = 37; continue;
    					/* if (configOnly) { */ case 36:
  ��						_r$11 = d.ignore(n); /* */ $s = 39; case 39: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
						err$1 = _r$11;
    						$s = 38; continue;
					/* } else { */ case 37:
  ��						_r$12 = d.processDRI(n); /* */ $s = 40; case 40: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
						err$1 = _r$12;
    					/* } */ case 38:
    					$s = 23; continue;
    				/* } else if (_1 === (224)) { */ case 18:
  �					_r$13 = d.processApp0Marker(n); /* */ $s = 41; case 41: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
					err$1 = _r$13;
    					$s = 23; continue;
    				/* } else if (_1 === (238)) { */ case 19:
  �?					_r$14 = d.processApp14Marker(n); /* */ $s = 42; case 42: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
					err$1 = _r$14;
    					$s = 23; continue;
    				/* } else if (224 <= marker && marker <= 239 || (marker === 254)) { */ case 20:
  ��					_r$15 = d.ignore(n); /* */ $s = 43; case 43: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					err$1 = _r$15;
    					$s = 23; continue;
    				/* } else if (marker < 192) { */ case 21:
  �					err$1 = new FormatError("unknown marker");
    					$s = 23; continue;
				/* } else { */ case 22:
  �L					err$1 = new UnsupportedError("unknown marker");
    				/* } */ case 23:
    			case 12:
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  ��				$s = -1; return [$ifaceNil, err$1];
    			}
    		$s = 2; continue;
		case 3:
    		if (d.progressive) {
  ��			err$2 = d.reconstructProgressiveImage();
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  ��				$s = -1; return [$ifaceNil, err$2];
    			}
    		}
    		if (!(d.img1 === ptrType.nil)) {
  �)			$s = -1; return [d.img1, $ifaceNil];
    		}
    		if (!(d.img3 === ptrType$1.nil)) {
    			if (!(d.blackPix === sliceType.nil)) {
  �o				$s = -1; return d.applyBlack();
    			} else if (d.isRGB()) {
  ��				$s = -1; return d.convertToRGB();
    			}
  ��			$s = -1; return [d.img3, $ifaceNil];
    		}
  ��		$s = -1; return [$ifaceNil, new FormatError("missing SOS marker")];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.decode }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.configOnly = configOnly; $f.d = d; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.marker = marker; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.decode = function(r, configOnly) { return this.$val.decode(r, configOnly); };
decoderdecode~
image.Grayimage.YCbCrimage/jpeg.FormatErrorimage/jpeg.UnsupportedErrorimage/jpeg.applyBlack~image/jpeg.convertToRGB~image/jpeg.decoderimage/jpeg.ignore~image/jpeg.isRGB~image/jpeg.processApp0Marker~image/jpeg.processApp14Marker~image/jpeg.processDHT~image/jpeg.processDQT~image/jpeg.processDRI~image/jpeg.processSOF~image/jpeg.processSOS~image/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.readByte~image/jpeg.readFull~'image/jpeg.reconstructProgressiveImage~image/jpeg.sliceType  (*image/jpeg.decoder).applyBlack �q	decoder.ptr.prototype.applyBlack = function() {
		var _i, _q, _q$1, _ref, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, bounds, bounds$1, d, i, i$1, iBase, iBase$1, img, img$1, subsample, sx, sy, t, translation, translations, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1;
		d = this;
    		if (!d.adobeTransformValid) {
  � 			return [$ifaceNil, new UnsupportedError("unknown color model: 4-component JPEG doesn't have Adobe APP14 metadata")];
    		}
    		if (!((d.adobeTransform === 0))) {
  ��			bounds = $clone(d.img3.Bounds(), image.Rectangle);
  ��			img = image.NewRGBA($clone(bounds, image.Rectangle));
  ��			imageutil.DrawYCbCr(img, $clone(bounds, image.Rectangle), d.img3, $clone(bounds.Min, image.Point));
  �#			_tmp = 0;
			_tmp$1 = bounds.Min.Y;
			iBase = _tmp;
			y = _tmp$1;
			while (true) {
				if (!(y < bounds.Max.Y)) { break; }
  �|				_tmp$2 = iBase + 3 >> 0;
				_tmp$3 = bounds.Min.X;
				i = _tmp$2;
				x = _tmp$3;
				while (true) {
					if (!(x < bounds.Max.X)) { break; }
  ��					(x$3 = img.Pix, ((i < 0 || i >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + i] = (255 - (x$1 = d.blackPix, x$2 = ($imul(((y - bounds.Min.Y >> 0)), d.blackStride)) + ((x - bounds.Min.X >> 0)) >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2])) << 24 >>> 24)));
  ��					_tmp$4 = i + 4 >> 0;
					_tmp$5 = x + 1 >> 0;
					i = _tmp$4;
					x = _tmp$5;
				}
  �R				_tmp$6 = iBase + img.Stride >> 0;
				_tmp$7 = y + 1 >> 0;
				iBase = _tmp$6;
				y = _tmp$7;
			}
  �			return [new image.CMYK.ptr(img.Pix, img.Stride, $clone(img.Rect, image.Rectangle)), $ifaceNil];
    		}
  ��		bounds$1 = $clone(d.img3.Bounds(), image.Rectangle);
  ��		img$1 = image.NewCMYK($clone(bounds$1, image.Rectangle));
  ��		translations = $toNativeArray($kindStruct, [new structType.ptr(d.img3.Y, d.img3.YStride), new structType.ptr(d.img3.Cb, d.img3.CStride), new structType.ptr(d.img3.Cr, d.img3.CStride), new structType.ptr(d.blackPix, d.blackStride)]);
  ��		_ref = translations;
		_i = 0;
		while (true) {
			if (!(_i < 4)) { break; }
			t = _i;
			translation = $clone(((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]), structType);
  ��			subsample = !(((x$4 = d.comp, ((t < 0 || t >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[t])).h === d.comp[0].h)) || !(((x$5 = d.comp, ((t < 0 || t >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[t])).v === d.comp[0].v));
  �/			_tmp$8 = 0;
			_tmp$9 = bounds$1.Min.Y;
			iBase$1 = _tmp$8;
			y$1 = _tmp$9;
			while (true) {
				if (!(y$1 < bounds$1.Max.Y)) { break; }
  ��				sy = y$1 - bounds$1.Min.Y >> 0;
    				if (subsample) {
  ��					sy = (_q = sy / (2), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    				}
  ��				_tmp$10 = iBase$1 + t >> 0;
				_tmp$11 = bounds$1.Min.X;
				i$1 = _tmp$10;
				x$6 = _tmp$11;
				while (true) {
					if (!(x$6 < bounds$1.Max.X)) { break; }
  �					sx = x$6 - bounds$1.Min.X >> 0;
    					if (subsample) {
  �;						sx = (_q$1 = sx / (2), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
    					}
  �M					(x$9 = img$1.Pix, ((i$1 < 0 || i$1 >= x$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$9.$array[x$9.$offset + i$1] = (255 - (x$7 = translation.src, x$8 = ($imul(sy, translation.stride)) + sx >> 0, ((x$8 < 0 || x$8 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + x$8])) << 24 >>> 24)));
  ��					_tmp$12 = i$1 + 4 >> 0;
					_tmp$13 = x$6 + 1 >> 0;
					i$1 = _tmp$12;
					x$6 = _tmp$13;
				}
  �^				_tmp$14 = iBase$1 + img$1.Stride >> 0;
				_tmp$15 = y$1 + 1 >> 0;
				iBase$1 = _tmp$14;
				y$1 = _tmp$15;
			}
    			_i++;
		}
  ��		return [img$1, $ifaceNil];
    	};
	decoder.prototype.applyBlack = function() { return this.$val.applyBlack(); };
decoderapplyBlack~

image.CMYKimage.NewCMYKimage.NewRGBAimage.Pointimage.Rectangle"image/internal/imageutil.DrawYCbCrimage/jpeg.UnsupportedErrorimage/jpeg.decoderimage/jpeg.sliceTypeimage/jpeg.structType (*image/jpeg.decoder).isRGB �u	decoder.ptr.prototype.isRGB = function() {
		var d;
		d = this;
    		if (d.jfif) {
  ��			return false;
    		}
    		if (d.adobeTransformValid && (d.adobeTransform === 0)) {
  ��			return true;
    		}
  ��		return (d.comp[0].c === 82) && (d.comp[1].c === 71) && (d.comp[2].c === 66);
    	};
	decoder.prototype.isRGB = function() { return this.$val.isRGB(); };
decoderisRGB~image/jpeg.decoder "(*image/jpeg.decoder).convertToRGB �
	decoder.ptr.prototype.convertToRGB = function() {
		var _q, _q$1, _q$2, _tmp, _tmp$1, bounds, cScale, co, d, i, iMax, img, po, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, yo;
		d = this;
  �[		cScale = (_q = d.comp[0].h / d.comp[1].h, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  ��		bounds = $clone(d.img3.Bounds(), image.Rectangle);
  ��		img = image.NewRGBA($clone(bounds, image.Rectangle));
  ��		y = bounds.Min.Y;
		while (true) {
			if (!(y < bounds.Max.Y)) { break; }
  ��			po = img.PixOffset(bounds.Min.X, y);
  �			yo = d.img3.YOffset(bounds.Min.X, y);
  �9			co = d.img3.COffset(bounds.Min.X, y);
  �e			_tmp = 0;
			_tmp$1 = bounds.Max.X - bounds.Min.X >> 0;
			i = _tmp;
			iMax = _tmp$1;
			while (true) {
				if (!(i < iMax)) { break; }
  ��				(x$2 = img.Pix, x$3 = (po + ($imul(4, i)) >> 0) + 0 >> 0, ((x$3 < 0 || x$3 >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + x$3] = (x = d.img3.Y, x$1 = yo + i >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]))));
  ��				(x$6 = img.Pix, x$7 = (po + ($imul(4, i)) >> 0) + 1 >> 0, ((x$7 < 0 || x$7 >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + x$7] = (x$4 = d.img3.Cb, x$5 = co + (_q$1 = i / cScale, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5]))));
  ��				(x$10 = img.Pix, x$11 = (po + ($imul(4, i)) >> 0) + 2 >> 0, ((x$11 < 0 || x$11 >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + x$11] = (x$8 = d.img3.Cr, x$9 = co + (_q$2 = i / cScale, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0, ((x$9 < 0 || x$9 >= x$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$8.$array[x$8.$offset + x$9]))));
  �#				(x$12 = img.Pix, x$13 = (po + ($imul(4, i)) >> 0) + 3 >> 0, ((x$13 < 0 || x$13 >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + x$13] = 255));
  ��				i = i + (1) >> 0;
    			}
  ��			y = y + (1) >> 0;
    		}
  �C		return [img, $ifaceNil];
    	};
	decoder.prototype.convertToRGB = function() { return this.$val.convertToRGB(); };
decoderconvertToRGB~image.NewRGBAimage.Rectangleimage/jpeg.decoder image/jpeg.Decode
image/jpegDecode Decode��	Decode = function(r) {
		var $24r, _r, d, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		d = new decoder.ptr($ifaceNil, new bits.ptr(0, 0, 0), new structType$1.ptr(arrayType$4.zero(), 0, 0, 0), 0, 0, ptrType.nil, ptrType$1.nil, sliceType.nil, 0, 0, 0, false, false, false, false, 0, 0, arrayType$5.zero(), arrayType$6.zero(), arrayType$10.zero(), arrayType$12.zero(), arrayType$13.zero());
  ��		_r = d.decode(r, false); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decode }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Decode = Decode;
Decodeimage/jpeg.Decodeimage/jpeg.arrayType$10image/jpeg.arrayType$11image/jpeg.arrayType$12image/jpeg.arrayType$13image/jpeg.arrayType$3image/jpeg.arrayType$4image/jpeg.arrayType$5image/jpeg.arrayType$6image/jpeg.arrayType$7image/jpeg.arrayType$8image/jpeg.arrayType$9image/jpeg.bitsimage/jpeg.blockimage/jpeg.componentimage/jpeg.decoderimage/jpeg.decode~image/jpeg.huffmanimage/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.sliceTypeimage/jpeg.sliceType$2image/jpeg.structType$1 image/jpeg.DecodeConfig
image/jpegDecodeConfig DecodeConfig��	DecodeConfig = function(r) {
		var _1, _r, _tuple, cm, d, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _tuple = $f._tuple; cm = $f.cm; d = $f.d; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		d = new decoder.ptr($ifaceNil, new bits.ptr(0, 0, 0), new structType$1.ptr(arrayType$4.zero(), 0, 0, 0), 0, 0, ptrType.nil, ptrType$1.nil, sliceType.nil, 0, 0, 0, false, false, false, false, 0, 0, arrayType$5.zero(), arrayType$6.zero(), arrayType$10.zero(), arrayType$12.zero(), arrayType$13.zero());
  ��		_r = d.decode(r, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ��			$s = -1; return [new image.Config.ptr($ifaceNil, 0, 0), err];
    		}
    		_1 = d.nComp;
    		if (_1 === (1)) {
  �			$s = -1; return [new image.Config.ptr(color.GrayModel, d.width, d.height), $ifaceNil];
    		} else if (_1 === (3)) {
  ��			cm = color.YCbCrModel;
    			if (d.isRGB()) {
  ��				cm = color.RGBAModel;
    			}
  ��			$s = -1; return [new image.Config.ptr(cm, d.width, d.height), $ifaceNil];
    		} else if (_1 === (4)) {
  �D			$s = -1; return [new image.Config.ptr(color.CMYKModel, d.width, d.height), $ifaceNil];
    		}
  ��		$s = -1; return [new image.Config.ptr($ifaceNil, 0, 0), new FormatError("missing SOF marker")];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: DecodeConfig }; } $f._1 = _1; $f._r = _r; $f._tuple = _tuple; $f.cm = cm; $f.d = d; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.DecodeConfig = DecodeConfig;
DecodeConfigimage.Configimage/color.CMYKModelimage/color.GrayModelimage/color.RGBAModelimage/color.YCbCrModelimage/jpeg.DecodeConfigimage/jpeg.FormatErrorimage/jpeg.arrayType$10image/jpeg.arrayType$11image/jpeg.arrayType$12image/jpeg.arrayType$13image/jpeg.arrayType$3image/jpeg.arrayType$4image/jpeg.arrayType$5image/jpeg.arrayType$6image/jpeg.arrayType$7image/jpeg.arrayType$8image/jpeg.arrayType$9image/jpeg.bitsimage/jpeg.componentimage/jpeg.decoderimage/jpeg.decode~image/jpeg.huffmanimage/jpeg.isRGB~image/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.sliceTypeimage/jpeg.sliceType$2image/jpeg.structType$1 image/jpeg.init
image/jpeginit init�	init = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = image.RegisterFormat("jpeg", "\xFF\xD8", Decode, DecodeConfig); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: init }; } $f.$s = $s; $f.$r = $r; return $f;
	};
    		$r = init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
image.RegisterFormatimage/jpeg.Decodeimage/jpeg.DecodeConfigimage/jpeg.init (*image/jpeg.decoder).makeImg �|	decoder.ptr.prototype.makeImg = function(mxx, myy) {
		var _1, _q, _q$1, _tmp, _tmp$1, d, h0, h3, hRatio, m, m$1, mxx, myy, subsampleRatio, v0, v3, vRatio;
		d = this;
    		if (d.nComp === 1) {
  ��			m = image.NewGray($clone(image.Rect(0, 0, $imul(8, mxx), $imul(8, myy)), image.Rectangle));
  ��			d.img1 = $assertType(m.SubImage($clone(image.Rect(0, 0, d.width, d.height), image.Rectangle)), ptrType);
  � 			return;
    		}
  �		h0 = d.comp[0].h;
  �		v0 = d.comp[0].v;
  �2		hRatio = (_q = h0 / d.comp[1].h, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  �N		vRatio = (_q$1 = v0 / d.comp[1].v, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
  �n		subsampleRatio = 0;
    		_1 = (hRatio << 4 >> 0) | vRatio;
    		if (_1 === (17)) {
  ��			subsampleRatio = 0;
    		} else if (_1 === (18)) {
  ��			subsampleRatio = 3;
    		} else if (_1 === (33)) {
  �:			subsampleRatio = 1;
    		} else if (_1 === (34)) {
  �v			subsampleRatio = 2;
    		} else if (_1 === (65)) {
  ��			subsampleRatio = 4;
    		} else if (_1 === (66)) {
  ��			subsampleRatio = 5;
    		} else {
  �(			$panic(new $String("unreachable"));
    		}
  �A		m$1 = image.NewYCbCr($clone(image.Rect(0, 0, $imul(($imul(8, h0)), mxx), $imul(($imul(8, v0)), myy)), image.Rectangle), subsampleRatio);
  ��		d.img3 = $assertType(m$1.SubImage($clone(image.Rect(0, 0, d.width, d.height), image.Rectangle)), ptrType$1);
    		if (d.nComp === 4) {
  ��			_tmp = d.comp[3].h;
			_tmp$1 = d.comp[3].v;
			h3 = _tmp;
			v3 = _tmp$1;
  �			d.blackPix = $makeSlice(sliceType, ($imul(($imul(($imul(($imul(($imul(8, h3)), mxx)), 8)), v3)), myy)));
  �>			d.blackStride = $imul(($imul(8, h3)), mxx);
    		}
    	};
	decoder.prototype.makeImg = function(mxx, myy) { return this.$val.makeImg(mxx, myy); };
decodermakeImg~image.NewGrayimage.NewYCbCr
image.Rectimage.Rectangleimage/jpeg.decoderimage/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.sliceType  (*image/jpeg.decoder).processSOS �[	decoder.ptr.prototype.processSOS = function(n) {
		var _i, _q, _q$1, _q$2, _q$3, _r, _r$1, _r$10, _r$11, _r$12, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, ac, ah, al, b, bits$1, blockCount, bx, by, comp, compIndex, compIndex$1, compIndex$2, cs, d, dc, dcDelta, err, err$1, err$2, err$3, err$4, err$5, err$6, err$7, err$8, expectedRST, h0, hi, huff, i, i$1, i$2, j, j$1, j$2, mcu, mx, mxx, my, myy, n, nComp, q, scan, t, t$1, totalHV, v0, val0, val1, value, value$1, vi, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1, y$2, y$3, zig, zigEnd, zigStart, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; ac = $f.ac; ah = $f.ah; al = $f.al; b = $f.b; bits$1 = $f.bits$1; blockCount = $f.blockCount; bx = $f.bx; by = $f.by; comp = $f.comp; compIndex = $f.compIndex; compIndex$1 = $f.compIndex$1; compIndex$2 = $f.compIndex$2; cs = $f.cs; d = $f.d; dc = $f.dc; dcDelta = $f.dcDelta; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; err$5 = $f.err$5; err$6 = $f.err$6; err$7 = $f.err$7; err$8 = $f.err$8; expectedRST = $f.expectedRST; h0 = $f.h0; hi = $f.hi; huff = $f.huff; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; j = $f.j; j$1 = $f.j$1; j$2 = $f.j$2; mcu = $f.mcu; mx = $f.mx; mxx = $f.mxx; my = $f.my; myy = $f.myy; n = $f.n; nComp = $f.nComp; q = $f.q; scan = $f.scan; t = $f.t; t$1 = $f.t$1; totalHV = $f.totalHV; v0 = $f.v0; val0 = $f.val0; val1 = $f.val1; value = $f.value; value$1 = $f.value$1; vi = $f.vi; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$16 = $f.x$16; x$17 = $f.x$17; x$18 = $f.x$18; x$19 = $f.x$19; x$2 = $f.x$2; x$20 = $f.x$20; x$21 = $f.x$21; x$22 = $f.x$22; x$23 = $f.x$23; x$24 = $f.x$24; x$25 = $f.x$25; x$26 = $f.x$26; x$27 = $f.x$27; x$28 = $f.x$28; x$29 = $f.x$29; x$3 = $f.x$3; x$30 = $f.x$30; x$31 = $f.x$31; x$32 = $f.x$32; x$33 = $f.x$33; x$34 = $f.x$34; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; zig = $f.zig; zigEnd = $f.zigEnd; zigStart = $f.zigStart; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = [b];
		d = this;
    		if (d.nComp === 0) {
  ��			$s = -1; return new FormatError("missing SOF marker");
    		}
    		if (n < 6 || (4 + ($imul(2, d.nComp)) >> 0) < n || !(((_r = n % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
  �			$s = -1; return new FormatError("SOS has wrong length");
    		}
  �L		_r$1 = d.readFull($subslice(new sliceType(d.tmp), 0, n)); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err = _r$1;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �y			$s = -1; return err;
    		}
  ��		nComp = ((d.tmp[0] >> 0));
    		if (!((n === (4 + ($imul(2, nComp)) >> 0)))) {
  ��			$s = -1; return new FormatError("SOS length inconsistent with number of components");
    		}
  �		scan = arrayType$14.zero();
  ��		totalHV = 0;
  ��		i = 0;
		while (true) {
			if (!(i < nComp)) { break; }
  ��			cs = (x = d.tmp, x$1 = 1 + ($imul(2, i)) >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
  ��			compIndex = -1;
  ��			_ref = $subslice(new sliceType$3(d.comp), 0, d.nComp);
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				j = _i;
				comp = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), component);
    				if (cs === comp.c) {
  �5					compIndex = j;
    				}
    				_i++;
			}
    			if (compIndex < 0) {
  �d				$s = -1; return new FormatError("unknown component selector");
    			}
  ��			((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).compIndex = ((compIndex << 24 >>> 24));
  �			j$1 = 0;
			while (true) {
				if (!(j$1 < i)) { break; }
    				if (((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).compIndex === ((j$1 < 0 || j$1 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[j$1]).compIndex) {
  �J					$s = -1; return new FormatError("repeated component selector");
    				}
  �				j$1 = j$1 + (1) >> 0;
    			}
  ��			totalHV = totalHV + (($imul((x$2 = d.comp, ((compIndex < 0 || compIndex >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[compIndex])).h, (x$3 = d.comp, ((compIndex < 0 || compIndex >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[compIndex])).v))) >> 0;
  ��			((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).td = (x$4 = d.tmp, x$5 = 2 + ($imul(2, i)) >> 0, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])) >>> 4 << 24 >>> 24;
  �#			t = ((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).td;
    			if (t > 3 || (d.baseline && t > 1)) {
  �\				$s = -1; return new FormatError("bad Td value");
    			}
  ��			((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).ta = ((x$6 = d.tmp, x$7 = 2 + ($imul(2, i)) >> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])) & 15) >>> 0;
  ��			t$1 = ((i < 0 || i >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i]).ta;
    			if (t$1 > 3 || (d.baseline && t$1 > 1)) {
  ��				$s = -1; return new FormatError("bad Ta value");
    			}
  ��			i = i + (1) >> 0;
    		}
    		if (d.nComp > 1 && totalHV > 10) {
  ��			$s = -1; return new FormatError("total sampling factors too large");
    		}
  �z		_tmp = 0;
		_tmp$1 = 63;
		_tmp$2 = 0;
		_tmp$3 = 0;
		zigStart = _tmp;
		zigEnd = _tmp$1;
		ah = _tmp$2;
		al = _tmp$3;
    		if (d.progressive) {
  ��			zigStart = (((x$8 = d.tmp, x$9 = 1 + ($imul(2, nComp)) >> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])) >> 0));
  �			zigEnd = (((x$10 = d.tmp, x$11 = 2 + ($imul(2, nComp)) >> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11])) >> 0));
  �'			ah = ((((x$12 = d.tmp, x$13 = 3 + ($imul(2, nComp)) >> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13])) >>> 4 << 24 >>> 24) >>> 0));
  �L			al = (((((x$14 = d.tmp, x$15 = 3 + ($imul(2, nComp)) >> 0, ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15])) & 15) >>> 0) >>> 0));
    			if (((zigStart === 0) && !((zigEnd === 0))) || zigStart > zigEnd || 64 <= zigEnd) {
  ��				$s = -1; return new FormatError("bad spectral selection bounds");
    			}
    			if (!((zigStart === 0)) && !((nComp === 1))) {
  �$				$s = -1; return new FormatError("progressive AC coefficients for more than one component");
    			}
    			if (!((ah === 0)) && !((ah === (al + 1 >>> 0)))) {
  ��				$s = -1; return new FormatError("bad successive approximation values");
    			}
    		}
  �$		_tmp$4 = d.comp[0].h;
		_tmp$5 = d.comp[0].v;
		h0 = _tmp$4;
		v0 = _tmp$5;
  �u		mxx = (_q = (((d.width + ($imul(8, h0)) >> 0) - 1 >> 0)) / (($imul(8, h0))), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  ��		myy = (_q$1 = (((d.height + ($imul(8, v0)) >> 0) - 1 >> 0)) / (($imul(8, v0))), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
    		if (d.img1 === ptrType.nil && d.img3 === ptrType$1.nil) {
  ��			d.makeImg(mxx, myy);
    		}
    		if (d.progressive) {
  �			i$1 = 0;
			while (true) {
				if (!(i$1 < nComp)) { break; }
  �9				compIndex$1 = ((i$1 < 0 || i$1 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i$1]).compIndex;
    				if ((x$16 = d.progCoeffs, ((compIndex$1 < 0 || compIndex$1 >= x$16.length) ? ($throwRuntimeError("index out of range"), undefined) : x$16[compIndex$1])) === sliceType$2.nil) {
  ��					(x$19 = d.progCoeffs, ((compIndex$1 < 0 || compIndex$1 >= x$19.length) ? ($throwRuntimeError("index out of range"), undefined) : x$19[compIndex$1] = $makeSlice(sliceType$2, ($imul(($imul(($imul(mxx, myy)), (x$17 = d.comp, ((compIndex$1 < 0 || compIndex$1 >= x$17.length) ? ($throwRuntimeError("index out of range"), undefined) : x$17[compIndex$1])).h)), (x$18 = d.comp, ((compIndex$1 < 0 || compIndex$1 >= x$18.length) ? ($throwRuntimeError("index out of range"), undefined) : x$18[compIndex$1])).v)))));
    				}
  �0				i$1 = i$1 + (1) >> 0;
    			}
    		}
  ��		bits.copy(d.bits, new bits.ptr(0, 0, 0));
  ��		_tmp$6 = 0;
		_tmp$7 = 208;
		mcu = _tmp$6;
		expectedRST = _tmp$7;
  �q		b[0] = arrayType$11.zero();
  �|		dc = arrayType$15.zero();
  �!		_tmp$8 = 0;
		_tmp$9 = 0;
		bx = _tmp$8;
		by = _tmp$9;
  �2		blockCount = 0;
  �I		my = 0;
		/* while (true) { */ case 2:
			/* if (!(my < myy)) { break; } */ if(!(my < myy)) { $s = 3; continue; }
  �i			mx = 0;
			/* while (true) { */ case 4:
				/* if (!(mx < mxx)) { break; } */ if(!(mx < mxx)) { $s = 5; continue; }
  ��				i$2 = 0;
				/* while (true) { */ case 6:
					/* if (!(i$2 < nComp)) { break; } */ if(!(i$2 < nComp)) { $s = 7; continue; }
  ��					compIndex$2 = ((i$2 < 0 || i$2 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i$2]).compIndex;
  ��					hi = (x$20 = d.comp, ((compIndex$2 < 0 || compIndex$2 >= x$20.length) ? ($throwRuntimeError("index out of range"), undefined) : x$20[compIndex$2])).h;
  ��					vi = (x$21 = d.comp, ((compIndex$2 < 0 || compIndex$2 >= x$21.length) ? ($throwRuntimeError("index out of range"), undefined) : x$21[compIndex$2])).v;
  �
					j$2 = 0;
					/* while (true) { */ case 8:
						/* if (!(j$2 < ($imul(hi, vi)))) { break; } */ if(!(j$2 < ($imul(hi, vi)))) { $s = 9; continue; }
    						if (!((nComp === 1))) {
  �a							bx = ($imul(hi, mx)) + (_r$2 = j$2 % hi, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) >> 0;
  �y							by = ($imul(vi, my)) + (_q$2 = j$2 / hi, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0;
    						} else {
  ��							q = $imul(mxx, hi);
  ��							bx = (_r$3 = blockCount % q, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero"));
  ��							by = (_q$3 = blockCount / q, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >> 0 : $throwRuntimeError("integer divide by zero"));
  ��							blockCount = blockCount + (1) >> 0;
    							if (($imul(bx, 8)) >= d.width || ($imul(by, 8)) >= d.height) {
  �								j$2 = j$2 + (1) >> 0;
    								/* continue; */ $s = 8; continue;
    							}
    						}
    						if (d.progressive) {
  ��							block.copy(b[0], (x$22 = (x$23 = d.progCoeffs, ((compIndex$2 < 0 || compIndex$2 >= x$23.length) ? ($throwRuntimeError("index out of range"), undefined) : x$23[compIndex$2])), x$24 = ($imul(($imul(by, mxx)), hi)) + bx >> 0, ((x$24 < 0 || x$24 >= x$22.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$22.$array[x$22.$offset + x$24])));
    						} else {
  ��							block.copy(b[0], arrayType$11.zero());
    						}
  �						/* */ if (!((ah === 0))) { $s = 10; continue; }
						/* */ $s = 11; continue;
    						/* if (!((ah === 0))) { */ case 10:
  �							_r$4 = d.refine(b[0], (x$25 = d.huff[1], x$26 = ((i$2 < 0 || i$2 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i$2]).ta, ((x$26 < 0 || x$26 >= x$25.length) ? ($throwRuntimeError("index out of range"), undefined) : x$25[x$26])), zigStart, zigEnd, (y = al, y < 32 ? (1 << y) : 0) >> 0); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
							err$1 = _r$4;
    							if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �w								$s = -1; return err$1;
    							}
    							$s = 12; continue;
						/* } else { */ case 11:
  ��							zig = zigStart;
  ��							/* */ if (zig === 0) { $s = 14; continue; }
							/* */ $s = 15; continue;
    							/* if (zig === 0) { */ case 14:
  ��								zig = zig + (1) >> 0;
  �								_r$5 = d.decodeHuffman((x$27 = d.huff[0], x$28 = ((i$2 < 0 || i$2 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i$2]).td, ((x$28 < 0 || x$28 >= x$27.length) ? ($throwRuntimeError("index out of range"), undefined) : x$27[x$28]))); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
								_tuple = _r$5;
								value = _tuple[0];
								err$2 = _tuple[1];
    								if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  �w									$s = -1; return err$2;
    								}
    								if (value > 16) {
  ��									$s = -1; return new UnsupportedError("excessive DC component");
    								}
  ��								_r$6 = d.receiveExtend(value); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
								_tuple$1 = _r$6;
								dcDelta = _tuple$1[0];
								err$2 = _tuple$1[1];
    								if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  �2									$s = -1; return err$2;
    								}
  �M								((compIndex$2 < 0 || compIndex$2 >= dc.length) ? ($throwRuntimeError("index out of range"), undefined) : dc[compIndex$2] = (((compIndex$2 < 0 || compIndex$2 >= dc.length) ? ($throwRuntimeError("index out of range"), undefined) : dc[compIndex$2]) + (dcDelta) >> 0));
  �m								b[0][0] = ((y$1 = al, y$1 < 32 ? (((compIndex$2 < 0 || compIndex$2 >= dc.length) ? ($throwRuntimeError("index out of range"), undefined) : dc[compIndex$2]) << y$1) : 0) >> 0);
    							/* } */ case 15:
  ��							/* */ if (zig <= zigEnd && d.eobRun > 0) { $s = 18; continue; }
							/* */ $s = 19; continue;
    							/* if (zig <= zigEnd && d.eobRun > 0) { */ case 18:
  ��								d.eobRun = d.eobRun - (1) << 16 >>> 16;
    								$s = 20; continue;
							/* } else { */ case 19:
  �)								huff = (x$29 = d.huff[1], x$30 = ((i$2 < 0 || i$2 >= scan.length) ? ($throwRuntimeError("index out of range"), undefined) : scan[i$2]).ta, ((x$30 < 0 || x$30 >= x$29.length) ? ($throwRuntimeError("index out of range"), undefined) : x$29[x$30]));
  �U								/* while (true) { */ case 21:
									/* if (!(zig <= zigEnd)) { break; } */ if(!(zig <= zigEnd)) { $s = 22; continue; }
  �z									_r$7 = d.decodeHuffman(huff); /* */ $s = 23; case 23: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
									_tuple$2 = _r$7;
									value$1 = _tuple$2[0];
									err$3 = _tuple$2[1];
    									if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  ��										$s = -1; return err$3;
    									}
  ��									val0 = value$1 >>> 4 << 24 >>> 24;
  ��									val1 = (value$1 & 15) >>> 0;
  �									/* */ if (!((val1 === 0))) { $s = 24; continue; }
									/* */ $s = 25; continue;
    									/* if (!((val1 === 0))) { */ case 24:
  �,										zig = zig + (((val0 >> 0))) >> 0;
    										if (zig > zigEnd) {
  �d											/* break; */ $s = 22; continue;
    										}
  �~										_r$8 = d.receiveExtend(val1); /* */ $s = 27; case 27: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
										_tuple$3 = _r$8;
										ac = _tuple$3[0];
										err$4 = _tuple$3[1];
    										if (!($interfaceIsEqual(err$4, $ifaceNil))) {
  ��											$s = -1; return err$4;
    										}
  ��										(x$31 = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]), ((x$31 < 0 || x$31 >= b[0].length) ? ($throwRuntimeError("index out of range"), undefined) : b[0][x$31] = ((y$2 = al, y$2 < 32 ? (ac << y$2) : 0) >> 0)));
    										$s = 26; continue;
									/* } else { */ case 25:
  �										/* */ if (!((val0 === 15))) { $s = 28; continue; }
										/* */ $s = 29; continue;
    										/* if (!((val0 === 15))) { */ case 28:
  �0											d.eobRun = (((y$3 = val0, y$3 < 32 ? (1 << y$3) : 0) << 16 >>> 16));
  �W											/* */ if (!((val0 === 0))) { $s = 30; continue; }
											/* */ $s = 31; continue;
    											/* if (!((val0 === 0))) { */ case 30:
  �q												_r$9 = d.decodeBits(((val0 >> 0))); /* */ $s = 32; case 32: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
												_tuple$4 = _r$9;
												bits$1 = _tuple$4[0];
												err$5 = _tuple$4[1];
    												if (!($interfaceIsEqual(err$5, $ifaceNil))) {
  ��													$s = -1; return err$5;
    												}
  ��												d.eobRun = (d.eobRun | (((bits$1 << 16 >>> 16)))) >>> 0;
    											/* } */ case 31:
  �											d.eobRun = d.eobRun - (1) << 16 >>> 16;
  �&											/* break; */ $s = 22; continue;
    										/* } */ case 29:
  �@										zig = zig + (15) >> 0;
    									/* } */ case 26:
  �j									zig = zig + (1) >> 0;
    								$s = 21; continue;
								case 22:
    							/* } */ case 20:
    						/* } */ case 12:
    						if (d.progressive) {
  ­							block.copy((x$32 = (x$33 = d.progCoeffs, ((compIndex$2 < 0 || compIndex$2 >= x$33.length) ? ($throwRuntimeError("index out of range"), undefined) : x$33[compIndex$2])), x$34 = ($imul(($imul(by, mxx)), hi)) + bx >> 0, ((x$34 < 0 || x$34 >= x$32.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$32.$array[x$32.$offset + x$34])), b[0]);
  �							j$2 = j$2 + (1) >> 0;
    							/* continue; */ $s = 8; continue;
    						}
  �						err$6 = d.reconstructBlock(b[0], bx, by, ((compIndex$2 >> 0)));
    						if (!($interfaceIsEqual(err$6, $ifaceNil))) {
  �h							$s = -1; return err$6;
    						}
  �						j$2 = j$2 + (1) >> 0;
    					$s = 8; continue;
					case 9:
  ��					i$2 = i$2 + (1) >> 0;
    				$s = 6; continue;
				case 7:
  Ś				mcu = mcu + (1) >> 0;
  ţ				/* */ if (d.ri > 0 && ((_r$10 = mcu % d.ri, _r$10 === _r$10 ? _r$10 : $throwRuntimeError("integer divide by zero")) === 0) && mcu < ($imul(mxx, myy))) { $s = 33; continue; }
				/* */ $s = 34; continue;
    				/* if (d.ri > 0 && ((_r$10 = mcu % d.ri, _r$10 === _r$10 ? _r$10 : $throwRuntimeError("integer divide by zero")) === 0) && mcu < ($imul(mxx, myy))) { */ case 33:
  Ɵ					_r$11 = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 35; case 35: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					err$7 = _r$11;
    					if (!($interfaceIsEqual(err$7, $ifaceNil))) {
  ��						$s = -1; return err$7;
    					}
  ɋ					/* */ if ((d.tmp[0] === 255) && (d.tmp[1] === 0)) { $s = 36; continue; }
					/* */ $s = 37; continue;
    					/* if ((d.tmp[0] === 255) && (d.tmp[1] === 0)) { */ case 36:
  ɽ						_r$12 = d.readFull($subslice(new sliceType(d.tmp), 0, 2)); /* */ $s = 38; case 38: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
						err$8 = _r$12;
    						if (!($interfaceIsEqual(err$8, $ifaceNil))) {
  ��							$s = -1; return err$8;
    						}
    					/* } */ case 37:
    					if (!((d.tmp[0] === 255)) || !((d.tmp[1] === expectedRST))) {
  �A						$s = -1; return new FormatError("bad RST marker");
    					}
  �p					expectedRST = expectedRST + (1) << 24 >>> 24;
    					if (expectedRST === 216) {
  ʨ						expectedRST = 208;
    					}
  ��					bits.copy(d.bits, new bits.ptr(0, 0, 0));
  �;					arrayType$15.copy(dc, arrayType$15.zero());
  ˟					d.eobRun = 0;
    				/* } */ case 34:
  �|				mx = mx + (1) >> 0;
    			$s = 4; continue;
			case 5:
  �\			my = my + (1) >> 0;
    		$s = 2; continue;
		case 3:
  ��		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.processSOS }; } $f._i = _i; $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f.ac = ac; $f.ah = ah; $f.al = al; $f.b = b; $f.bits$1 = bits$1; $f.blockCount = blockCount; $f.bx = bx; $f.by = by; $f.comp = comp; $f.compIndex = compIndex; $f.compIndex$1 = compIndex$1; $f.compIndex$2 = compIndex$2; $f.cs = cs; $f.d = d; $f.dc = dc; $f.dcDelta = dcDelta; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.err$5 = err$5; $f.err$6 = err$6; $f.err$7 = err$7; $f.err$8 = err$8; $f.expectedRST = expectedRST; $f.h0 = h0; $f.hi = hi; $f.huff = huff; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.j = j; $f.j$1 = j$1; $f.j$2 = j$2; $f.mcu = mcu; $f.mx = mx; $f.mxx = mxx; $f.my = my; $f.myy = myy; $f.n = n; $f.nComp = nComp; $f.q = q; $f.scan = scan; $f.t = t; $f.t$1 = t$1; $f.totalHV = totalHV; $f.v0 = v0; $f.val0 = val0; $f.val1 = val1; $f.value = value; $f.value$1 = value$1; $f.vi = vi; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$16 = x$16; $f.x$17 = x$17; $f.x$18 = x$18; $f.x$19 = x$19; $f.x$2 = x$2; $f.x$20 = x$20; $f.x$21 = x$21; $f.x$22 = x$22; $f.x$23 = x$23; $f.x$24 = x$24; $f.x$25 = x$25; $f.x$26 = x$26; $f.x$27 = x$27; $f.x$28 = x$28; $f.x$29 = x$29; $f.x$3 = x$3; $f.x$30 = x$30; $f.x$31 = x$31; $f.x$32 = x$32; $f.x$33 = x$33; $f.x$34 = x$34; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.zig = zig; $f.zigEnd = zigEnd; $f.zigStart = zigStart; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.processSOS = function(n) { return this.$val.processSOS(n); };
decoderprocessSOS~image/jpeg.FormatErrorimage/jpeg.UnsupportedErrorimage/jpeg.arrayType$11image/jpeg.arrayType$14image/jpeg.arrayType$15image/jpeg.bitsimage/jpeg.blockimage/jpeg.componentimage/jpeg.decodeBits~image/jpeg.decodeHuffman~image/jpeg.decoderimage/jpeg.makeImg~image/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.readFull~image/jpeg.receiveExtend~image/jpeg.reconstructBlock~image/jpeg.refine~image/jpeg.sliceTypeimage/jpeg.sliceType$2image/jpeg.sliceType$3image/jpeg.structType$2image/jpeg.unzig (*image/jpeg.decoder).refine ��	decoder.ptr.prototype.refine = function(b, h, zigStart, zigEnd, delta) {
		var _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, b, bit, bit$1, bits$1, d, delta, err, err$1, err$2, err$3, err$4, h, val0, val1, value, x, y, z, zig, zigEnd, zigStart, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; b = $f.b; bit = $f.bit; bit$1 = $f.bit$1; bits$1 = $f.bits$1; d = $f.d; delta = $f.delta; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; h = $f.h; val0 = $f.val0; val1 = $f.val1; value = $f.value; x = $f.x; y = $f.y; z = $f.z; zig = $f.zig; zigEnd = $f.zigEnd; zigStart = $f.zigStart; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  ̼		/* */ if (zigStart === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (zigStart === 0) { */ case 1:
    			if (!((zigEnd === 0))) {
  ��				$panic(new $String("unreachable"));
    			}
  � 			_r = d.decodeBit(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			bit = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �/				$s = -1; return err;
    			}
    			if (bit) {
  �L				b[0] = (b[0] | (delta));
    			}
  �`			$s = -1; return $ifaceNil;
    		/* } */ case 2:
  ��		zig = zigStart;
  ��		/* */ if (d.eobRun === 0) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (d.eobRun === 0) { */ case 4:
  ��			/* while (true) { */ case 6:
				/* if (!(zig <= zigEnd)) { break; } */ if(!(zig <= zigEnd)) { $s = 7; continue; }
  �				z = 0;
  � 				_r$1 = d.decodeHuffman(h); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				value = _tuple$1[0];
				err$1 = _tuple$1[1];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �X					$s = -1; return err$1;
    				}
  �k				val0 = value >>> 4 << 24 >>> 24;
  ΁				val1 = (value & 15) >>> 0;
    					_1 = val1;
  Ϋ					/* */ if (_1 === (0)) { $s = 10; continue; }
					/* */ if (_1 === (1)) { $s = 11; continue; }
					/* */ $s = 12; continue;
    					/* if (_1 === (0)) { */ case 10:
  η						/* */ if (!((val0 === 15))) { $s = 14; continue; }
						/* */ $s = 15; continue;
    						/* if (!((val0 === 15))) { */ case 14:
  ��							d.eobRun = (((y = val0, y < 32 ? (1 << y) : 0) << 16 >>> 16));
  ��							/* */ if (!((val0 === 0))) { $s = 16; continue; }
							/* */ $s = 17; continue;
    							/* if (!((val0 === 0))) { */ case 16:
  �								_r$2 = d.decodeBits(((val0 >> 0))); /* */ $s = 18; case 18: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
								_tuple$2 = _r$2;
								bits$1 = _tuple$2[0];
								err$2 = _tuple$2[1];
    								if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  �I									$s = -1; return err$2;
    								}
  �b								d.eobRun = (d.eobRun | (((bits$1 << 16 >>> 16)))) >>> 0;
    							/* } */ case 17:
  χ							/* break loop; */ $s = 7; continue s;
    						/* } */ case 15:
    						$s = 13; continue;
    					/* } else if (_1 === (1)) { */ case 11:
  ϧ						z = delta;
  ϵ						_r$3 = d.decodeBit(); /* */ $s = 19; case 19: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						_tuple$3 = _r$3;
						bit$1 = _tuple$3[0];
						err$3 = _tuple$3[1];
    						if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  ��							$s = -1; return err$3;
    						}
    						if (!bit$1) {
  �							z = -z;
    						}
    						$s = 13; continue;
					/* } else { */ case 12:
  �)						$s = -1; return new FormatError("unexpected Huffman code");
    					/* } */ case 13:
    				case 9:
  �`				_r$4 = d.refineNonZeroes(b, zig, zigEnd, ((val0 >> 0)), delta); /* */ $s = 20; case 20: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_tuple$4 = _r$4;
				zig = _tuple$4[0];
				err$1 = _tuple$4[1];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  и					$s = -1; return err$1;
    				}
    				if (zig > zigEnd) {
  ��					$s = -1; return new FormatError("too many coefficients");
    				}
    				if (!((z === 0))) {
  �%					(x = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]), b.nilCheck, ((x < 0 || x >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[x] = z));
    				}
  �				zig = zig + (1) >> 0;
    			$s = 6; continue;
			case 7:
    		/* } */ case 5:
  �D		/* */ if (d.eobRun > 0) { $s = 21; continue; }
		/* */ $s = 22; continue;
    		/* if (d.eobRun > 0) { */ case 21:
  �X			d.eobRun = d.eobRun - (1) << 16 >>> 16;
  �h			_r$5 = d.refineNonZeroes(b, zig, zigEnd, -1, delta); /* */ $s = 23; case 23: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_tuple$5 = _r$5;
			err$4 = _tuple$5[1];
    			if (!($interfaceIsEqual(err$4, $ifaceNil))) {
  Ѱ				$s = -1; return err$4;
    			}
    		/* } */ case 22:
  ��		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.refine }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.b = b; $f.bit = bit; $f.bit$1 = bit$1; $f.bits$1 = bits$1; $f.d = d; $f.delta = delta; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.h = h; $f.val0 = val0; $f.val1 = val1; $f.value = value; $f.x = x; $f.y = y; $f.z = z; $f.zig = zig; $f.zigEnd = zigEnd; $f.zigStart = zigStart; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.refine = function(b, h, zigStart, zigEnd, delta) { return this.$val.refine(b, h, zigStart, zigEnd, delta); };
decoderrefine~image/jpeg.FormatErrorimage/jpeg.decodeBits~image/jpeg.decodeBit~image/jpeg.decodeHuffman~image/jpeg.decoderimage/jpeg.refineNonZeroes~image/jpeg.unzig %(*image/jpeg.decoder).refineNonZeroes �
�	decoder.ptr.prototype.refineNonZeroes = function(b, zig, zigEnd, nz, delta) {
		var _r, _tuple, b, bit, d, delta, err, nz, u, x, x$1, x$2, x$3, x$4, x$5, zig, zigEnd, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; bit = $f.bit; d = $f.d; delta = $f.delta; err = $f.err; nz = $f.nz; u = $f.u; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; zig = $f.zig; zigEnd = $f.zigEnd; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  ҫ		/* while (true) { */ case 1:
			/* if (!(zig <= zigEnd)) { break; } */ if(!(zig <= zigEnd)) { $s = 2; continue; }
  ��			u = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]);
    			if ((x = b, ((u < 0 || u >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[u])) === 0) {
    				if (nz === 0) {
  ��					/* break; */ $s = 2; continue;
    				}
  �				nz = nz - (1) >> 0;
  ��				zig = zig + (1) >> 0;
    				/* continue; */ $s = 1; continue;
    			}
  �$			_r = d.decodeBit(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			bit = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �S				$s = -1; return [0, err];
    			}
    			if (!bit) {
  ��				zig = zig + (1) >> 0;
    				/* continue; */ $s = 1; continue;
    			}
    			if ((x$1 = b, ((u < 0 || u >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[u])) >= 0) {
  ӕ				(x$3 = b, ((u < 0 || u >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[u] = ((x$2 = b, ((u < 0 || u >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[u])) + (delta) >> 0)));
    			} else {
  ӱ				(x$5 = b, ((u < 0 || u >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[u] = ((x$4 = b, ((u < 0 || u >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[u])) - (delta) >> 0)));
    			}
  ��			zig = zig + (1) >> 0;
    		$s = 1; continue;
		case 2:
  ��		$s = -1; return [zig, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.refineNonZeroes }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.bit = bit; $f.d = d; $f.delta = delta; $f.err = err; $f.nz = nz; $f.u = u; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.zig = zig; $f.zigEnd = zigEnd; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.refineNonZeroes = function(b, zig, zigEnd, nz, delta) { return this.$val.refineNonZeroes(b, zig, zigEnd, nz, delta); };
decoderrefineNonZeroes~image/jpeg.decodeBit~image/jpeg.decoderimage/jpeg.unzig 1(*image/jpeg.decoder).reconstructProgressiveImage ��	decoder.ptr.prototype.reconstructProgressiveImage = function() {
		var _q, _q$1, _q$2, bx, by, d, err, h, h0, i, mxx, stride, v, x, x$1, x$2, x$3, x$4, x$5, x$6;
		d = this;
  �o		h0 = d.comp[0].h;
  Ԃ		mxx = (_q = (((d.width + ($imul(8, h0)) >> 0) - 1 >> 0)) / (($imul(8, h0))), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  Ԯ		i = 0;
		while (true) {
			if (!(i < d.nComp)) { break; }
    			if ((x = d.progCoeffs, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) === sliceType$2.nil) {
  ��				i = i + (1) >> 0;
    				continue;
    			}
  ��			v = (_q$1 = ($imul(8, d.comp[0].v)) / (x$1 = d.comp, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])).v, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
  �			h = (_q$2 = ($imul(8, d.comp[0].h)) / (x$2 = d.comp, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])).h, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero"));
  �C			stride = $imul(mxx, (x$3 = d.comp, ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i])).h);
  �e			by = 0;
			while (true) {
				if (!(($imul(by, v)) < d.height)) { break; }
  Ս				bx = 0;
				while (true) {
					if (!(($imul(bx, h)) < d.width)) { break; }
  մ					err = d.reconstructBlock((x$4 = (x$5 = d.progCoeffs, ((i < 0 || i >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i])), x$6 = ($imul(by, stride)) + bx >> 0, ((x$6 < 0 || x$6 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$6])), bx, by, i);
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
  �						return err;
    					}
  զ					bx = bx + (1) >> 0;
    				}
  �				by = by + (1) >> 0;
    			}
  ��			i = i + (1) >> 0;
    		}
  �*		return $ifaceNil;
    	};
	decoder.prototype.reconstructProgressiveImage = function() { return this.$val.reconstructProgressiveImage(); };
decoderreconstructProgressiveImage~image/jpeg.decoderimage/jpeg.reconstructBlock~image/jpeg.sliceType$2 &(*image/jpeg.decoder).reconstructBlock �3	decoder.ptr.prototype.reconstructBlock = function(b, bx, by, compIndex) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, b, bx, by, c, compIndex, d, dst, qt, stride, x, x$1, x$10, x$11, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y8, yStride, zig;
		d = this;
  ��		qt = (x = d.quant, x$1 = (x$2 = d.comp, ((compIndex < 0 || compIndex >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[compIndex])).tq, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]));
  �		zig = 0;
		while (true) {
			if (!(zig < 64)) { break; }
  �4			(x$6 = b, x$7 = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7] = ($imul((x$3 = b, x$4 = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]), ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])), ((x$5 = qt, ((zig < 0 || zig >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[zig])))))));
  �*			zig = zig + (1) >> 0;
    		}
  �Q		idct(b);
  �Z		_tmp = (sliceType.nil);
		_tmp$1 = 0;
		dst = _tmp;
		stride = _tmp$1;
    		if (d.nComp === 1) {
  ׍			_tmp$2 = $subslice(d.img1.Pix, ($imul(8, ((($imul(by, d.img1.Stride)) + bx >> 0)))));
			_tmp$3 = d.img1.Stride;
			dst = _tmp$2;
			stride = _tmp$3;
    		} else {
    			_1 = compIndex;
    			if (_1 === (0)) {
  ��				_tmp$4 = $subslice(d.img3.Y, ($imul(8, ((($imul(by, d.img3.YStride)) + bx >> 0)))));
				_tmp$5 = d.img3.YStride;
				dst = _tmp$4;
				stride = _tmp$5;
    			} else if (_1 === (1)) {
  �J				_tmp$6 = $subslice(d.img3.Cb, ($imul(8, ((($imul(by, d.img3.CStride)) + bx >> 0)))));
				_tmp$7 = d.img3.CStride;
				dst = _tmp$6;
				stride = _tmp$7;
    			} else if (_1 === (2)) {
  ؚ				_tmp$8 = $subslice(d.img3.Cr, ($imul(8, ((($imul(by, d.img3.CStride)) + bx >> 0)))));
				_tmp$9 = d.img3.CStride;
				dst = _tmp$8;
				stride = _tmp$9;
    			} else if (_1 === (3)) {
  ��				_tmp$10 = $subslice(d.blackPix, ($imul(8, ((($imul(by, d.blackStride)) + bx >> 0)))));
				_tmp$11 = d.blackStride;
				dst = _tmp$10;
				stride = _tmp$11;
    			} else {
  �:				return new UnsupportedError("too many components");
    			}
    		}
  ٲ		y = 0;
		while (true) {
			if (!(y < 8)) { break; }
  ��			y8 = $imul(y, 8);
  ��			yStride = $imul(y, stride);
  ��			x$8 = 0;
			while (true) {
				if (!(x$8 < 8)) { break; }
  �				c = (x$9 = b, x$10 = y8 + x$8 >> 0, ((x$10 < 0 || x$10 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$10]));
    				if (c < -128) {
  �-					c = 0;
    				} else if (c > 127) {
  �N					c = 255;
    				} else {
  �f					c = c + (128) >> 0;
    				}
  �w				(x$11 = yStride + x$8 >> 0, ((x$11 < 0 || x$11 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$11] = ((c << 24 >>> 24))));
  �				x$8 = x$8 + (1) >> 0;
    			}
  ��			y = y + (1) >> 0;
    		}
  ڙ		return $ifaceNil;
    	};
	decoder.prototype.reconstructBlock = function(b, bx, by, compIndex) { return this.$val.reconstructBlock(b, bx, by, compIndex); };
decoderreconstructBlock~image/jpeg.UnsupportedErrorimage/jpeg.decoderimage/jpeg.idctimage/jpeg.sliceTypeimage/jpeg.unzig image/jpeg.min
image/jpegmin minm	min = function(x, y) {
		var x, y;
    		if (x < y) {
  ��			return x;
    		}
  ��		return y;
    	};
minimage/jpeg.min image/jpeg.div
image/jpegdiv div��	div = function(a, b) {
		var _q, _q$1, a, b;
    		if (a >= 0) {
  �y			return (_q = ((a + ((b >> 1 >> 0)) >> 0)) / b, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  ܗ		return -((_q$1 = ((-a + ((b >> 1 >> 0)) >> 0)) / b, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")));
    	};
divimage/jpeg.div (*image/jpeg.huffmanLUT).init ��	$ptrType(huffmanLUT).prototype.init = function(s) {
		var _i, _ref, _tmp, _tmp$1, code, h, i, j, k, maxValue, nBits, s, v, x, x$1, x$2, x$3, y;
		h = this;
  �s		maxValue = 0;
  �		_ref = s.value;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (((v >> 0)) > maxValue) {
  �				maxValue = ((v >> 0));
    			}
    			_i++;
		}
  ��		h.$set($convertSliceType($makeSlice(sliceType$4, (maxValue + 1 >> 0)), huffmanLUT));
  ��		_tmp = 0;
		_tmp$1 = 0;
		code = _tmp;
		k = _tmp$1;
  �		i = 0;
		while (true) {
			if (!(i < 16)) { break; }
  �4			nBits = (((i + 1 >> 0) >>> 0)) << 24 >>> 0;
  �U			j = 0;
			while (true) {
				if (!(j < (x = s.count, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])))) { break; }
  �}				(x$1 = h.$get(), x$2 = (x$3 = s.value, ((k < 0 || k >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + k])), ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2] = ((nBits | code) >>> 0)));
  �				code = code + (1) >>> 0;
  �				k = k + (1) >> 0;
  �t				j = j + (1) << 24 >>> 24;
    			}
  �			code = (y = (1), y < 32 ? (code << y) : 0) >>> 0;
  �,			i = i + (1) >> 0;
    		}
    	};

huffmanLUTinit~image/jpeg.huffmanLUTimage/jpeg.sliceType$4 image/jpeg.init
image/jpeginit init$1�v	init$1 = function() {
		var _i, _ref, i, s;
  �6		_ref = theHuffmanSpec;
		_i = 0;
		while (true) {
			if (!(_i < 4)) { break; }
			i = _i;
			s = $clone(((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]), huffmanSpec);
  �[			$indexPtr(theHuffmanLUT, i, ptrType$2).init($clone(s, huffmanSpec));
    			_i++;
		}
    	};
    		init$1();
image/jpeg.huffmanLUTimage/jpeg.huffmanSpecimage/jpeg.initimage/jpeg.init~image/jpeg.ptrType$2image/jpeg.theHuffmanLUTimage/jpeg.theHuffmanSpec (*image/jpeg.encoder).flush ��	encoder.ptr.prototype.flush = function() {
		var _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  ��			$s = -1; return;
    		}
  ��		_r = e.w.Flush(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		e.err = _r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.flush }; } $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.flush = function() { return this.$val.flush(); };
encoderflush~image/jpeg.encoder (*image/jpeg.encoder).write �R	encoder.ptr.prototype.write = function(p) {
		var _r, _tuple, e, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; e = $f.e; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  �5			$s = -1; return;
    		}
  �@		_r = e.w.Write(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		e.err = _tuple[1];
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.write }; } $f._r = _r; $f._tuple = _tuple; $f.e = e; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.write = function(p) { return this.$val.write(p); };
encoderwrite~image/jpeg.encoder (*image/jpeg.encoder).writeByte � 	encoder.ptr.prototype.writeByte = function(b) {
		var _r, b, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
  ��			$s = -1; return;
    		}
  ��		_r = e.w.WriteByte(b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		e.err = _r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeByte }; } $f._r = _r; $f.b = b; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeByte = function(b) { return this.$val.writeByte(b); };
encoder
writeByte~image/jpeg.encoder (*image/jpeg.encoder).emit ��	encoder.ptr.prototype.emit = function(bits$1, nBits) {
		var _tmp, _tmp$1, b, bits$1, e, nBits, y, y$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; bits$1 = $f.bits$1; e = $f.e; nBits = $f.nBits; y = $f.y; y$1 = $f.y$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �l		nBits = nBits + (e.nBits) >>> 0;
  �~		bits$1 = (y = ((32 - nBits >>> 0)), y < 32 ? (bits$1 << y) : 0) >>> 0;
  ��		bits$1 = (bits$1 | (e.bits)) >>> 0;
  ��		/* while (true) { */ case 1:
			/* if (!(nBits >= 8)) { break; } */ if(!(nBits >= 8)) { $s = 2; continue; }
  ��			b = (((bits$1 >>> 24 >>> 0) << 24 >>> 24));
  ��			$r = e.writeByte(b); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��			/* */ if (b === 255) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (b === 255) { */ case 4:
  ��				$r = e.writeByte(0); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 5:
  �
			bits$1 = (y$1 = (8), y$1 < 32 ? (bits$1 << y$1) : 0) >>> 0;
  �			nBits = nBits - (8) >>> 0;
    		$s = 1; continue;
		case 2:
  �&		_tmp = bits$1;
		_tmp$1 = nBits;
		e.bits = _tmp;
		e.nBits = _tmp$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.emit }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.bits$1 = bits$1; $f.e = e; $f.nBits = nBits; $f.y = y; $f.y$1 = y$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.emit = function(bits$1, nBits) { return this.$val.emit(bits$1, nBits); };
encoderemit~image/jpeg.encoderimage/jpeg.writeByte~ (*image/jpeg.encoder).emitHuff �4	encoder.ptr.prototype.emitHuff = function(h, value) {
		var e, h, value, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; h = $f.h; value = $f.value; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  ��		x$1 = (x = ((h < 0 || h >= theHuffmanLUT.length) ? ($throwRuntimeError("index out of range"), undefined) : theHuffmanLUT[h]), ((value < 0 || value >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + value]));
  ��		$r = e.emit((x$1 & 16777215) >>> 0, x$1 >>> 24 >>> 0); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.emitHuff }; } $f.e = e; $f.h = h; $f.value = value; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.emitHuff = function(h, value) { return this.$val.emitHuff(h, value); };
encoder	emitHuff~image/jpeg.emit~image/jpeg.encoderimage/jpeg.theHuffmanLUT !(*image/jpeg.encoder).emitHuffRLE �	encoder.ptr.prototype.emitHuffRLE = function(h, runLength, value) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, e, h, nBits, runLength, value, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; a = $f.a; b = $f.b; e = $f.e; h = $f.h; nBits = $f.nBits; runLength = $f.runLength; value = $f.value; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  ��		_tmp = value;
		_tmp$1 = value;
		a = _tmp;
		b = _tmp$1;
    		if (a < 0) {
  ��			_tmp$2 = -value;
			_tmp$3 = value - 1 >> 0;
			a = _tmp$2;
			b = _tmp$3;
    		}
  ��		nBits = 0;
    		if (a < 256) {
  �			nBits = ((((a < 0 || a >= bitCount.length) ? ($throwRuntimeError("index out of range"), undefined) : bitCount[a]) >>> 0));
    		} else {
  �/			nBits = 8 + (((x = a >> 8 >> 0, ((x < 0 || x >= bitCount.length) ? ($throwRuntimeError("index out of range"), undefined) : bitCount[x])) >>> 0)) >>> 0;
    		}
  �V		$r = e.emitHuff(h, (runLength << 4 >> 0) | ((nBits >> 0))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		/* */ if (nBits > 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (nBits > 0) { */ case 2:
  ��			$r = e.emit((((b >>> 0)) & ((((y = nBits, y < 32 ? (1 << y) : 0) >>> 0) - 1 >>> 0))) >>> 0, nBits); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.emitHuffRLE }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.a = a; $f.b = b; $f.e = e; $f.h = h; $f.nBits = nBits; $f.runLength = runLength; $f.value = value; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.emitHuffRLE = function(h, runLength, value) { return this.$val.emitHuffRLE(h, runLength, value); };
encoderemitHuffRLE~image/jpeg.bitCountimage/jpeg.emitHuff~image/jpeg.emit~image/jpeg.encoder '(*image/jpeg.encoder).writeMarkerHeader �	encoder.ptr.prototype.writeMarkerHeader = function(marker, markerlen) {
		var e, marker, markerlen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; marker = $f.marker; markerlen = $f.markerlen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �L		e.buf[0] = 255;
  �]		e.buf[1] = marker;
  �p		e.buf[2] = (((markerlen >> 8 >> 0) << 24 >>> 24));
  ��		e.buf[3] = (((markerlen & 255) << 24 >>> 24));
  ��		$r = e.write($subslice(new sliceType(e.buf), 0, 4)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeMarkerHeader }; } $f.e = e; $f.marker = marker; $f.markerlen = markerlen; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeMarkerHeader = function(marker, markerlen) { return this.$val.writeMarkerHeader(marker, markerlen); };
encoderwriteMarkerHeader~image/jpeg.encoderimage/jpeg.sliceTypeimage/jpeg.write~ (*image/jpeg.encoder).writeDQT �O	encoder.ptr.prototype.writeDQT = function() {
		var _i, _ref, e, i, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; e = $f.e; i = $f.i; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �[		$r = e.writeMarkerHeader(219, 132); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		_ref = e.quant;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < 2)) { break; } */ if(!(_i < 2)) { $s = 3; continue; }
			i = _i;
  ��			$r = e.writeByte(((i << 24 >>> 24))); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��			$r = e.write(new sliceType((x = e.quant, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])))); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 2; continue;
		case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeDQT }; } $f._i = _i; $f._ref = _ref; $f.e = e; $f.i = i; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeDQT = function() { return this.$val.writeDQT(); };
encoder	writeDQT~image/jpeg.encoderimage/jpeg.sliceTypeimage/jpeg.writeByte~image/jpeg.writeMarkerHeader~image/jpeg.write~ (*image/jpeg.encoder).writeSOF0 �	r	encoder.ptr.prototype.writeSOF0 = function(size, nComponent) {
		var e, i, markerlen, nComponent, size, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; i = $f.i; markerlen = $f.markerlen; nComponent = $f.nComponent; size = $f.size; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �\		markerlen = 8 + ($imul(3, nComponent)) >> 0;
  �{		$r = e.writeMarkerHeader(192, markerlen); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		e.buf[0] = 8;
  ��		e.buf[1] = (((size.Y >> 8 >> 0) << 24 >>> 24));
  ��		e.buf[2] = (((size.Y & 255) << 24 >>> 24));
  �		e.buf[3] = (((size.X >> 8 >> 0) << 24 >>> 24));
  �$		e.buf[4] = (((size.X & 255) << 24 >>> 24));
  �E		e.buf[5] = ((nComponent << 24 >>> 24));
    		if (nComponent === 1) {
  �z			e.buf[6] = 1;
  ��			e.buf[7] = 17;
  ��			e.buf[8] = 0;
    		} else {
  ��			i = 0;
			while (true) {
				if (!(i < nComponent)) { break; }
  �				(x = e.buf, x$1 = ($imul(3, i)) + 6 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = (((i + 1 >> 0) << 24 >>> 24))));
  �K				(x$2 = e.buf, x$3 = ($imul(3, i)) + 7 >> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3] = "\"\x11\x11".charCodeAt(i)));
  �o				(x$4 = e.buf, x$5 = ($imul(3, i)) + 8 >> 0, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5] = "\x00\x01\x01".charCodeAt(i)));
  ��				i = i + (1) >> 0;
    			}
    		}
  ��		$r = e.write($subslice(new sliceType(e.buf), 0, (($imul(3, ((nComponent - 1 >> 0)))) + 9 >> 0))); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeSOF0 }; } $f.e = e; $f.i = i; $f.markerlen = markerlen; $f.nComponent = nComponent; $f.size = size; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeSOF0 = function(size, nComponent) { return this.$val.writeSOF0(size, nComponent); };
encoder
writeSOF0~image/jpeg.encoderimage/jpeg.sliceTypeimage/jpeg.writeMarkerHeader~image/jpeg.write~ (*image/jpeg.encoder).writeDHT �	w	encoder.ptr.prototype.writeDHT = function(nComponent) {
		var _i, _i$1, _ref, _ref$1, e, i, markerlen, nComponent, s, s$1, specs, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _ref = $f._ref; _ref$1 = $f._ref$1; e = $f.e; i = $f.i; markerlen = $f.markerlen; nComponent = $f.nComponent; s = $f.s; s$1 = $f.s$1; specs = $f.specs; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  !		markerlen = 2;
  1		specs = new sliceType$5(theHuffmanSpec);
    		if (nComponent === 1) {
  �			specs = $subslice(specs, 0, 2);
    		}
  �		_ref = specs;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			s = $clone(((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]), huffmanSpec);
  �			markerlen = markerlen + ((17 + s.value.$length >> 0)) >> 0;
    			_i++;
		}
  �		$r = e.writeMarkerHeader(196, markerlen); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 
		_ref$1 = specs;
		_i$1 = 0;
		/* while (true) { */ case 2:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 3; continue; }
			i = _i$1;
			s$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]), huffmanSpec);
 &			$r = e.writeByte("\x00\x10\x01\x11".charCodeAt(i)); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 K			$r = e.write(new sliceType(s$1.count)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 a			$r = e.write(s$1.value); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i$1++;
		$s = 2; continue;
		case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeDHT }; } $f._i = _i; $f._i$1 = _i$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f.e = e; $f.i = i; $f.markerlen = markerlen; $f.nComponent = nComponent; $f.s = s; $f.s$1 = s$1; $f.specs = specs; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeDHT = function(nComponent) { return this.$val.writeDHT(nComponent); };
encoder	writeDHT~image/jpeg.encoderimage/jpeg.huffmanSpecimage/jpeg.sliceTypeimage/jpeg.sliceType$5image/jpeg.theHuffmanSpecimage/jpeg.writeByte~image/jpeg.writeMarkerHeader~image/jpeg.write~  (*image/jpeg.encoder).writeBlock ��	encoder.ptr.prototype.writeBlock = function(b, q, prevDC) {
		var _tmp, _tmp$1, ac, b, dc, e, h, prevDC, q, runLength, x, x$1, x$2, x$3, x$4, zig, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; ac = $f.ac; b = $f.b; dc = $f.dc; e = $f.e; h = $f.h; prevDC = $f.prevDC; q = $f.q; runLength = $f.runLength; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; zig = $f.zig; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
 �		fdct(b);
 �		dc = div(b[0], $imul(8, (((x = e.quant, ((q < 0 || q >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[q]))[0] >> 0))));
 �		$r = e.emitHuffRLE((((($imul(2, q)) + 0 >> 0) >> 0)), 0, dc - prevDC >> 0); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 		_tmp = (((($imul(2, q)) + 1 >> 0) >> 0));
		_tmp$1 = 0;
		h = _tmp;
		runLength = _tmp$1;
 F		zig = 1;
		/* while (true) { */ case 2:
			/* if (!(zig < 64)) { break; } */ if(!(zig < 64)) { $s = 3; continue; }
 k			ac = div((x$1 = b, x$2 = ((zig < 0 || zig >= unzig.length) ? ($throwRuntimeError("index out of range"), undefined) : unzig[zig]), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])), $imul(8, (((x$3 = (x$4 = e.quant, ((q < 0 || q >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[q])), ((zig < 0 || zig >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[zig])) >> 0))));
 �			/* */ if (ac === 0) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (ac === 0) { */ case 4:
 �				runLength = runLength + (1) >> 0;
    				$s = 6; continue;
			/* } else { */ case 5:
 �				/* while (true) { */ case 7:
					/* if (!(runLength > 15)) { break; } */ if(!(runLength > 15)) { $s = 8; continue; }
 �					$r = e.emitHuff(h, 240); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 �					runLength = runLength - (16) >> 0;
    				$s = 7; continue;
				case 8:
 				$r = e.emitHuffRLE(h, runLength, ac); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 6				runLength = 0;
    			/* } */ case 6:
 a			zig = zig + (1) >> 0;
    		$s = 2; continue;
		case 3:
 L		/* */ if (runLength > 0) { $s = 11; continue; }
		/* */ $s = 12; continue;
    		/* if (runLength > 0) { */ case 11:
 a			$r = e.emitHuff(h, 0); /* */ $s = 13; case 13: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 12:
 y		$s = -1; return dc;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeBlock }; } $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.ac = ac; $f.b = b; $f.dc = dc; $f.e = e; $f.h = h; $f.prevDC = prevDC; $f.q = q; $f.runLength = runLength; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.zig = zig; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeBlock = function(b, q, prevDC) { return this.$val.writeBlock(b, q, prevDC); };
encoderwriteBlock~image/jpeg.divimage/jpeg.emitHuffRLE~image/jpeg.emitHuff~image/jpeg.encoderimage/jpeg.fdctimage/jpeg.unzig image/jpeg.toYCbCr
image/jpegtoYCbCr toYCbCr�f	toYCbCr = function(m, p, yBlock, cbBlock, crBlock) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, b, b$1, cb, cbBlock, cr, crBlock, g, i, j, m, p, r, x, x$1, x$2, xmax, yBlock, ymax, yy, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; b$1 = $f.b$1; cb = $f.cb; cbBlock = $f.cbBlock; cr = $f.cr; crBlock = $f.crBlock; g = $f.g; i = $f.i; j = $f.j; m = $f.m; p = $f.p; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; xmax = $f.xmax; yBlock = $f.yBlock; ymax = $f.ymax; yy = $f.yy; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
 0		_r = m.Bounds(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		b = $clone(_r, image.Rectangle);
 A		xmax = b.Max.X - 1 >> 0;
 V		ymax = b.Max.Y - 1 >> 0;
 o		j = 0;
		/* while (true) { */ case 2:
			/* if (!(j < 8)) { break; } */ if(!(j < 8)) { $s = 3; continue; }
 �			i = 0;
			/* while (true) { */ case 4:
				/* if (!(i < 8)) { break; } */ if(!(i < 8)) { $s = 5; continue; }
 �				_r$1 = m.At(min(p.X + i >> 0, xmax), min(p.Y + j >> 0, ymax)); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = _r$1.RGBA(); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				r = _tuple[0];
				g = _tuple[1];
				b$1 = _tuple[2];
 �				_tuple$1 = color.RGBToYCbCr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b$1 >>> 8 >>> 0) << 24 >>> 24)));
				yy = _tuple$1[0];
				cb = _tuple$1[1];
				cr = _tuple$1[2];
 ,				(x = ($imul(8, j)) + i >> 0, yBlock.nilCheck, ((x < 0 || x >= yBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : yBlock[x] = ((yy >> 0))));
 I				(x$1 = ($imul(8, j)) + i >> 0, cbBlock.nilCheck, ((x$1 < 0 || x$1 >= cbBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : cbBlock[x$1] = ((cb >> 0))));
 g				(x$2 = ($imul(8, j)) + i >> 0, crBlock.nilCheck, ((x$2 < 0 || x$2 >= crBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : crBlock[x$2] = ((cr >> 0))));
 �				i = i + (1) >> 0;
    			$s = 4; continue;
			case 5:
 ~			j = j + (1) >> 0;
    		$s = 2; continue;
		case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: toYCbCr }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.b$1 = b$1; $f.cb = cb; $f.cbBlock = cbBlock; $f.cr = cr; $f.crBlock = crBlock; $f.g = g; $f.i = i; $f.j = j; $f.m = m; $f.p = p; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.xmax = xmax; $f.yBlock = yBlock; $f.ymax = ymax; $f.yy = yy; $f.$s = $s; $f.$r = $r; return $f;
	};
toYCbCrimage.Rectangleimage/color.RGBToYCbCrimage/jpeg.minimage/jpeg.toYCbCr image/jpeg.grayToY
image/jpeggrayToY grayToY�	grayToY = function(m, p, yBlock) {
		var b, i, idx, j, m, p, pix, x, xmax, yBlock, ymax;
 		b = $clone(m.Bounds(), image.Rectangle);
 &		xmax = b.Max.X - 1 >> 0;
 ;		ymax = b.Max.Y - 1 >> 0;
 P		pix = m.Pix;
 b		j = 0;
		while (true) {
			if (!(j < 8)) { break; }
 }			i = 0;
			while (true) {
				if (!(i < 8)) { break; }
 �				idx = m.PixOffset(min(p.X + i >> 0, xmax), min(p.Y + j >> 0, ymax));
 �				(x = ($imul(8, j)) + i >> 0, yBlock.nilCheck, ((x < 0 || x >= yBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : yBlock[x] = ((((idx < 0 || idx >= pix.$length) ? ($throwRuntimeError("index out of range"), undefined) : pix.$array[pix.$offset + idx]) >> 0))));
 �				i = i + (1) >> 0;
    			}
 q			j = j + (1) >> 0;
    		}
    	};
grayToYimage.Rectangleimage/jpeg.grayToYimage/jpeg.min image/jpeg.rgbaToYCbCr
image/jpegrgbaToYCbCr rgbaToYCbCr��	rgbaToYCbCr = function(m, p, yBlock, cbBlock, crBlock) {
		var _tuple, b, cb, cbBlock, cr, crBlock, i, j, m, offset, p, pix, sj, sx, x, x$1, x$2, xmax, yBlock, ymax, yy;
 �		b = $clone(m.Bounds(), image.Rectangle);
 �		xmax = b.Max.X - 1 >> 0;
 �		ymax = b.Max.Y - 1 >> 0;
 �		j = 0;
		while (true) {
			if (!(j < 8)) { break; }
 �			sj = p.Y + j >> 0;
    			if (sj > ymax) {
 					sj = ymax;
    			}
 				offset = ($imul(((sj - b.Min.Y >> 0)), m.Stride)) - ($imul(b.Min.X, 4)) >> 0;
 	P			i = 0;
			while (true) {
				if (!(i < 8)) { break; }
 	h				sx = p.X + i >> 0;
    				if (sx > xmax) {
 	�					sx = xmax;
    				}
 	�				pix = $subslice(m.Pix, (offset + ($imul(sx, 4)) >> 0));
 	�				_tuple = color.RGBToYCbCr((0 >= pix.$length ? ($throwRuntimeError("index out of range"), undefined) : pix.$array[pix.$offset + 0]), (1 >= pix.$length ? ($throwRuntimeError("index out of range"), undefined) : pix.$array[pix.$offset + 1]), (2 >= pix.$length ? ($throwRuntimeError("index out of range"), undefined) : pix.$array[pix.$offset + 2]));
				yy = _tuple[0];
				cb = _tuple[1];
				cr = _tuple[2];
 	�				(x = ($imul(8, j)) + i >> 0, yBlock.nilCheck, ((x < 0 || x >= yBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : yBlock[x] = ((yy >> 0))));
 
				(x$1 = ($imul(8, j)) + i >> 0, cbBlock.nilCheck, ((x$1 < 0 || x$1 >= cbBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : cbBlock[x$1] = ((cb >> 0))));
 
1				(x$2 = ($imul(8, j)) + i >> 0, crBlock.nilCheck, ((x$2 < 0 || x$2 >= crBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : crBlock[x$2] = ((cr >> 0))));
 	_				i = i + (1) >> 0;
    			}
 �			j = j + (1) >> 0;
    		}
    	};
rgbaToYCbCrimage.Rectangleimage/color.RGBToYCbCrimage/jpeg.rgbaToYCbCr image/jpeg.yCbCrToYCbCr
image/jpegyCbCrToYCbCr yCbCrToYCbCr�b	yCbCrToYCbCr = function(m, p, yBlock, cbBlock, crBlock) {
		var b, cbBlock, ci, crBlock, i, j, m, p, sx, sy, x, x$1, x$2, x$3, x$4, x$5, xmax, yBlock, yi, ymax;
 
�		b = $clone(m.Bounds(), image.Rectangle);
 		xmax = b.Max.X - 1 >> 0;
 		ymax = b.Max.Y - 1 >> 0;
 6		j = 0;
		while (true) {
			if (!(j < 8)) { break; }
 M			sy = p.Y + j >> 0;
    			if (sy > ymax) {
 o				sy = ymax;
    			}
 �			i = 0;
			while (true) {
				if (!(i < 8)) { break; }
 �				sx = p.X + i >> 0;
    				if (sx > xmax) {
 �					sx = xmax;
    				}
 �				yi = m.YOffset(sx, sy);
 �				ci = m.COffset(sx, sy);
 				(x$1 = ($imul(8, j)) + i >> 0, yBlock.nilCheck, ((x$1 < 0 || x$1 >= yBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : yBlock[x$1] = (((x = m.Y, ((yi < 0 || yi >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + yi])) >> 0))));
 )				(x$3 = ($imul(8, j)) + i >> 0, cbBlock.nilCheck, ((x$3 < 0 || x$3 >= cbBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : cbBlock[x$3] = (((x$2 = m.Cb, ((ci < 0 || ci >= x$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + ci])) >> 0))));
 M				(x$5 = ($imul(8, j)) + i >> 0, crBlock.nilCheck, ((x$5 < 0 || x$5 >= crBlock.length) ? ($throwRuntimeError("index out of range"), undefined) : crBlock[x$5] = (((x$4 = m.Cr, ((ci < 0 || ci >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + ci])) >> 0))));
 �				i = i + (1) >> 0;
    			}
 E			j = j + (1) >> 0;
    		}
    	};
yCbCrToYCbCrimage.Rectangleimage/jpeg.yCbCrToYCbCr image/jpeg.scale
image/jpegscale scale��	scale = function(dst, src) {
		var dst, dstOff, i, j, src, sum, x, x$1, x$10, x$11, x$12, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y;
 �		i = 0;
		while (true) {
			if (!(i < 4)) { break; }
 			dstOff = (((i & 2)) << 4 >> 0) | (((i & 1)) << 2 >> 0);
 :			y = 0;
			while (true) {
				if (!(y < 4)) { break; }
 V				x = 0;
				while (true) {
					if (!(x < 4)) { break; }
 o					j = ($imul(16, y)) + ($imul(2, x)) >> 0;
 �					sum = (((x$1 = (x$2 = src, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])), ((j < 0 || j >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[j])) + (x$3 = (x$4 = src, ((i < 0 || i >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i])), x$5 = j + 1 >> 0, ((x$5 < 0 || x$5 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$5])) >> 0) + (x$6 = (x$7 = src, ((i < 0 || i >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[i])), x$8 = j + 8 >> 0, ((x$8 < 0 || x$8 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$8])) >> 0) + (x$9 = (x$10 = src, ((i < 0 || i >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[i])), x$11 = j + 9 >> 0, ((x$11 < 0 || x$11 >= x$9.length) ? ($throwRuntimeError("index out of range"), undefined) : x$9[x$11])) >> 0;
 �					(x$12 = (($imul(8, y)) + x >> 0) + dstOff >> 0, dst.nilCheck, ((x$12 < 0 || x$12 >= dst.length) ? ($throwRuntimeError("index out of range"), undefined) : dst[x$12] = (((sum + 2 >> 0)) >> 2 >> 0)));
 e					x = x + (1) >> 0;
    				}
 I				y = y + (1) >> 0;
    			}
 			i = i + (1) >> 0;
    		}
    	};
scaleimage/jpeg.scale (*image/jpeg.encoder).writeSOS �3	encoder.ptr.prototype.writeSOS = function(m) {
		var _r, _r$1, _r$2, _r$3, _r$4, _ref, _ref$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tuple, _tuple$1, b, bounds, cb, cr, e, i, m, m$1, m$2, p, p$1, prevDCCb, prevDCCr, prevDCY, rgba, x, x$1, xOff, y, y$1, yOff, ycbcr, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; bounds = $f.bounds; cb = $f.cb; cr = $f.cr; e = $f.e; i = $f.i; m = $f.m; m$1 = $f.m$1; m$2 = $f.m$2; p = $f.p; p$1 = $f.p$1; prevDCCb = $f.prevDCCb; prevDCCr = $f.prevDCCr; prevDCY = $f.prevDCY; rgba = $f.rgba; x = $f.x; x$1 = $f.x$1; xOff = $f.xOff; y = $f.y; y$1 = $f.y$1; yOff = $f.yOff; ycbcr = $f.ycbcr; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		b = [b];
		cb = [cb];
		cr = [cr];
		e = this;
 �		_ref = m;
		/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ($assertType(_ref, ptrType, true)[1]) { */ case 1:
 �			$r = e.write(sosHeaderY); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 3; continue;
		/* } else { */ case 2:
 �			$r = e.write(sosHeaderYCbCr); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
 j		b[0] = arrayType$11.zero();
 y		_tmp = arrayType$12.zero();
		_tmp$1 = arrayType$12.zero();
		cb[0] = $clone(_tmp, arrayType$12);
		cr[0] = $clone(_tmp$1, arrayType$12);
 �		_tmp$2 = 0;
		_tmp$3 = 0;
		_tmp$4 = 0;
		prevDCY = _tmp$2;
		prevDCCb = _tmp$3;
		prevDCCr = _tmp$4;
 �		_r = m.Bounds(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		bounds = $clone(_r, image.Rectangle);
 �		_ref$1 = m;
		/* */ if ($assertType(_ref$1, ptrType, true)[1]) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if ($assertType(_ref$1, ptrType, true)[1]) { */ case 7:
    			m$1 = _ref$1.$val;
 [			y = bounds.Min.Y;
			/* while (true) { */ case 10:
				/* if (!(y < bounds.Max.Y)) { break; } */ if(!(y < bounds.Max.Y)) { $s = 11; continue; }
 �				x = bounds.Min.X;
				/* while (true) { */ case 12:
					/* if (!(x < bounds.Max.X)) { break; } */ if(!(x < bounds.Max.X)) { $s = 13; continue; }
 �					p = $clone(image.Pt(x, y), image.Point);
 �					grayToY(m$1, $clone(p, image.Point), b[0]);
 �					_r$1 = e.writeBlock(b[0], 0, prevDCY); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					prevDCY = _r$1;
 �					x = x + (8) >> 0;
    				$s = 12; continue;
				case 13:
 �				y = y + (8) >> 0;
    			$s = 10; continue;
			case 11:
    			$s = 9; continue;
		/* } else { */ case 8:
    			m$2 = _ref$1;
 ,			_tuple = $assertType(m$2, ptrType$3, true);
			rgba = _tuple[0];
 I			_tuple$1 = $assertType(m$2, ptrType$1, true);
			ycbcr = _tuple$1[0];
 l			y$1 = bounds.Min.Y;
			/* while (true) { */ case 15:
				/* if (!(y$1 < bounds.Max.Y)) { break; } */ if(!(y$1 < bounds.Max.Y)) { $s = 16; continue; }
 �				x$1 = bounds.Min.X;
				/* while (true) { */ case 17:
					/* if (!(x$1 < bounds.Max.X)) { break; } */ if(!(x$1 < bounds.Max.X)) { $s = 18; continue; }
 �					i = 0;
					/* while (true) { */ case 19:
						/* if (!(i < 4)) { break; } */ if(!(i < 4)) { $s = 20; continue; }
 �						xOff = $imul(((i & 1)), 8);
 						yOff = $imul(((i & 2)), 4);
 %						p$1 = $clone(image.Pt(x$1 + xOff >> 0, y$1 + yOff >> 0), image.Point);
 H						/* */ if (!(rgba === ptrType$3.nil)) { $s = 21; continue; }
						/* */ if (!(ycbcr === ptrType$1.nil)) { $s = 22; continue; }
						/* */ $s = 23; continue;
    						/* if (!(rgba === ptrType$3.nil)) { */ case 21:
 _							rgbaToYCbCr(rgba, $clone(p$1, image.Point), b[0], ((i < 0 || i >= cb[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cb[0][i]), ((i < 0 || i >= cr[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cr[0][i]));
    							$s = 24; continue;
    						/* } else if (!(ycbcr === ptrType$1.nil)) { */ case 22:
 �							yCbCrToYCbCr(ycbcr, $clone(p$1, image.Point), b[0], ((i < 0 || i >= cb[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cb[0][i]), ((i < 0 || i >= cr[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cr[0][i]));
    							$s = 24; continue;
						/* } else { */ case 23:
 �							$r = toYCbCr(m$2, $clone(p$1, image.Point), b[0], ((i < 0 || i >= cb[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cb[0][i]), ((i < 0 || i >= cr[0].length) ? ($throwRuntimeError("index out of range"), undefined) : cr[0][i])); /* */ $s = 25; case 25: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						/* } */ case 24:
 						_r$2 = e.writeBlock(b[0], 0, prevDCY); /* */ $s = 26; case 26: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						prevDCY = _r$2;
 �						i = i + (1) >> 0;
    					$s = 19; continue;
					case 20:
 J					scale(b[0], cb[0]);
 ]					_r$3 = e.writeBlock(b[0], 1, prevDCCb); /* */ $s = 27; case 27: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					prevDCCb = _r$3;
 �					scale(b[0], cr[0]);
 �					_r$4 = e.writeBlock(b[0], 1, prevDCCr); /* */ $s = 28; case 28: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					prevDCCr = _r$4;
 �					x$1 = x$1 + (16) >> 0;
    				$s = 17; continue;
				case 18:
 �				y$1 = y$1 + (16) >> 0;
    			$s = 15; continue;
			case 16:
    		/* } */ case 9:
 �		$r = e.emit(127, 7); /* */ $s = 29; case 29: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.writeSOS }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.bounds = bounds; $f.cb = cb; $f.cr = cr; $f.e = e; $f.i = i; $f.m = m; $f.m$1 = m$1; $f.m$2 = m$2; $f.p = p; $f.p$1 = p$1; $f.prevDCCb = prevDCCb; $f.prevDCCr = prevDCCr; $f.prevDCY = prevDCY; $f.rgba = rgba; $f.x = x; $f.x$1 = x$1; $f.xOff = xOff; $f.y = y; $f.y$1 = y$1; $f.yOff = yOff; $f.ycbcr = ycbcr; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.writeSOS = function(m) { return this.$val.writeSOS(m); };
encoder	writeSOS~image.Pointimage.Pt
image.RGBAimage.Rectangleimage/jpeg.arrayType$11image/jpeg.arrayType$12image/jpeg.emit~image/jpeg.encoderimage/jpeg.grayToYimage/jpeg.ptrTypeimage/jpeg.ptrType$1image/jpeg.ptrType$3image/jpeg.rgbaToYCbCrimage/jpeg.scaleimage/jpeg.sosHeaderYimage/jpeg.sosHeaderYCbCrimage/jpeg.toYCbCrimage/jpeg.writeBlock~image/jpeg.write~image/jpeg.yCbCrToYCbCr image/jpeg.Encode
image/jpegEncode Encode��	Encode = function(w, m, o) {
		var _i, _i$1, _q, _q$1, _r, _ref, _ref$1, _ref$2, _tuple, b, e, i, j, m, nComponent, o, ok, quality, scale$1, w, ww, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _tuple = $f._tuple; b = $f.b; e = $f.e; i = $f.i; j = $f.j; m = $f.m; nComponent = $f.nComponent; o = $f.o; ok = $f.ok; quality = $f.quality; scale$1 = $f.scale$1; w = $f.w; ww = $f.ww; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
 �		_r = m.Bounds(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		b = $clone(_r, image.Rectangle);
    		if ($clone(b, image.Rectangle).Dx() >= 65536 || $clone(b, image.Rectangle).Dy() >= 65536) {
 �			$s = -1; return errors.New("jpeg: image is too large to encode");
    		}
 5		e = new encoder.ptr($ifaceNil, $ifaceNil, arrayType$2.zero(), 0, 0, arrayType$16.zero());
 C		_tuple = $assertType(w, writer, true);
		ww = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
 `			e.w = ww;
    		} else {
 u			e.w = bufio.NewWriter(w);
    		}
 �		quality = 75;
    		if (!(o === ptrType$4.nil)) {
 �			quality = o.Quality;
    			if (quality < 1) {
 				quality = 1;
    			} else if (quality > 100) {
 0				quality = 100;
    			}
    		}
 �		scale$1 = 0;
    		if (quality < 50) {
 �			scale$1 = (_q = 5000 / quality, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		} else {
 �			scale$1 = 200 - ($imul(quality, 2)) >> 0;
    		}
 		_ref = e.quant;
		_i = 0;
		while (true) {
			if (!(_i < 2)) { break; }
			i = _i;
 "			_ref$1 = (x = e.quant, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i]));
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < 64)) { break; }
				j = _i$1;
 A				x$2 = (((x$1 = ((i < 0 || i >= unscaledQuant.length) ? ($throwRuntimeError("index out of range"), undefined) : unscaledQuant[i]), ((j < 0 || j >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[j])) >> 0));
 b				x$2 = (_q$1 = ((($imul(x$2, scale$1)) + 50 >> 0)) / 100, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
    				if (x$2 < 1) {
 �					x$2 = 1;
    				} else if (x$2 > 255) {
 �					x$2 = 255;
    				}
 �				(x$3 = (x$4 = e.quant, ((i < 0 || i >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[i])), ((j < 0 || j >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[j] = ((x$2 << 24 >>> 24))));
    				_i$1++;
			}
    			_i++;
		}
 		nComponent = 3;
 ,		_ref$2 = m;
    		if ($assertType(_ref$2, ptrType, true)[1]) {
 �			nComponent = 1;
    		}
 �		e.buf[0] = 255;
 �		e.buf[1] = 216;
 �		$r = e.write($subslice(new sliceType(e.buf), 0, 2)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 "		$r = e.writeDQT(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 P		$r = e.writeSOF0($clone($clone(b, image.Rectangle).Size(), image.Point), nComponent); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 �		$r = e.writeDHT(nComponent); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 �		$r = e.writeSOS(m); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 �		e.buf[0] = 255;
 		e.buf[1] = 217;
 		$r = e.write($subslice(new sliceType(e.buf), 0, 2)); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 +		$r = e.flush(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 6		$s = -1; return e.err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Encode }; } $f._i = _i; $f._i$1 = _i$1; $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.i = i; $f.j = j; $f.m = m; $f.nComponent = nComponent; $f.o = o; $f.ok = ok; $f.quality = quality; $f.scale$1 = scale$1; $f.w = w; $f.ww = ww; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Encode = Encode;
Encodebufio.NewWriter
errors.Newimage.Pointimage.Rectangleimage/jpeg.Encodeimage/jpeg.Optionsimage/jpeg.arrayType$1image/jpeg.arrayType$16image/jpeg.arrayType$2image/jpeg.encoderimage/jpeg.flush~image/jpeg.ptrTypeimage/jpeg.ptrType$4image/jpeg.sliceTypeimage/jpeg.unscaledQuantimage/jpeg.writeDHT~image/jpeg.writeDQT~image/jpeg.writeSOF0~image/jpeg.writeSOS~image/jpeg.writerimage/jpeg.write~ �8�{"Base":73542,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/fdct.go","Base":1,"Size":6120,"Lines":[0,55,109,159,160,173,174,240,241,244,315,369,370,433,434,452,453,527,551,630,703,773,802,803,816,817,892,966,1045,1110,1111,1187,1234,1235,1306,1384,1396,1475,1548,1622,1679,1745,1822,1851,1927,2000,2038,2039,2117,2188,2204,2205,2284,2363,2439,2450,2451,2529,2601,2632,2635,2636,2693,2701,2725,2749,2773,2797,2821,2845,2870,2895,2920,2945,2970,2995,2997,2998,3006,3026,3045,3066,3068,3069,3145,3161,3183,3209,3235,3249,3346,3359,3372,3385,3398,3411,3424,3437,3450,3451,3469,3487,3505,3523,3524,3547,3570,3593,3616,3617,3634,3651,3668,3685,3686,3742,3780,3822,3863,3928,3993,3994,4016,4038,4060,4082,4123,4164,4190,4216,4242,4268,4296,4324,4352,4380,4381,4395,4409,4468,4527,4586,4645,4648,4677,4765,4791,4821,4851,4881,4911,4912,4954,4977,5000,5023,5024,5053,5082,5111,5140,5141,5183,5225,5226,5268,5309,5378,5447,5448,5470,5492,5514,5536,5577,5618,5644,5670,5696,5722,5750,5778,5806,5834,5835,5849,5863,5926,5989,6052,6115,6118],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/huffman.go","Base":6122,"Size":6438,"Lines":[0,55,109,159,160,173,174,183,189,191,192,270,295,296,371,393,394,463,481,482,539,561,608,622,696,768,841,859,885,944,967,1038,1064,1095,1166,1192,1223,1281,1315,1317,1318,1394,1411,1471,1472,1550,1627,1702,1749,1756,1792,1810,1832,1863,1868,1882,1886,1923,1939,1960,1981,1992,2010,2014,2035,2044,2048,2051,2063,2065,2066,2146,2158,2216,2242,2292,2309,2313,2316,2338,2354,2374,2423,2438,2461,2464,2479,2481,2482,2563,2622,2666,2679,2693,2739,2743,2792,2806,2810,2832,2850,2888,2892,2916,2981,3025,3063,3067,3090,3091,3142,3200,3244,3259,3293,3319,3352,3377,3381,3402,3457,3461,3489,3549,3553,3579,3592,3638,3642,3698,3712,3716,3717,3748,3773,3789,3793,3814,3855,3869,3912,3970,4026,4076,4134,4183,4218,4269,4312,4342,4348,4359,4367,4372,4376,4377,4426,4447,4476,4491,4514,4537,4563,4575,4597,4627,4656,4667,4682,4687,4698,4702,4705,4717,4719,4720,4795,4822,4883,4903,4958,4961,4962,4981,5024,5084,5102,5107,5179,5250,5313,5346,5376,5381,5398,5402,5405,5473,5495,5518,5535,5563,5566,5567,5577,5631,5652,5696,5714,5719,5723,5753,5766,5770,5783,5800,5829,5888,5892,5905,5908,5951,5953,5954,6000,6020,6063,6084,6088,6091,6122,6134,6150,6167,6169,6170,6226,6245,6288,6305,6309,6312,6351,6380,6395,6419,6436],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/idct.go","Base":12561,"Size":5096,"Lines":[0,55,109,159,160,173,174,217,220,362,365,404,405,484,485,488,514,517,597,675,755,827,897,970,1013,1016,1096,1167,1170,1247,1323,1335,1338,1417,1494,1572,1583,1586,1590,1591,1635,1636,1664,1665,1673,1713,1753,1793,1833,1873,1913,1914,1931,1948,1965,1982,1999,2016,2017,2042,2044,2045,2108,2111,2180,2256,2333,2344,2347,2422,2502,2550,2574,2599,2625,2639,2738,2804,2848,2902,2921,2934,2947,2960,2973,2986,2999,3012,3025,3037,3041,3042,3057,3084,3103,3116,3129,3142,3155,3168,3181,3182,3196,3219,3240,3261,3283,3304,3325,3326,3340,3355,3366,3388,3409,3430,3445,3456,3471,3482,3483,3497,3512,3523,3538,3549,3580,3611,3612,3626,3650,3674,3698,3722,3746,3770,3794,3818,3821,3822,3845,3871,3978,4081,4135,4233,4234,4249,4278,4298,4313,4328,4343,4358,4373,4388,4389,4403,4426,4454,4482,4504,4532,4560,4561,4575,4590,4601,4623,4651,4679,4694,4705,4720,4731,4732,4746,4761,4772,4787,4798,4829,4860,4861,4875,4902,4929,4956,4983,5010,5037,5064,5091,5094],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/reader.go","Base":17658,"Size":23113,"Lines":[0,55,109,159,160,221,224,304,317,318,327,336,351,379,385,387,388,449,473,474,557,558,649,678,679,772,773,860,861,917,941,982,1021,1056,1110,1112,1113,1121,1134,1147,1160,1173,1186,1187,1206,1208,1209,1217,1277,1337,1389,1433,1468,1503,1541,1577,1614,1663,1710,1741,1813,1860,1929,1949,1969,1989,1991,1992,2070,2078,2105,2132,2159,2161,2162,2240,2318,2398,2426,2453,2484,2517,2548,2581,2614,2647,2680,2682,2683,2754,2810,2834,2849,2860,2862,2863,2941,3021,3035,3054,3080,3142,3187,3189,3190,3212,3228,3239,3309,3378,3429,3445,3507,3563,3581,3592,3651,3691,3709,3712,3731,3732,3757,3783,3803,3820,3821,3853,3864,3865,3940,4005,4080,4153,4188,4206,4224,4225,4251,4277,4304,4382,4383,4420,4502,4544,4615,4647,4649,4650,4724,4792,4825,4854,4907,4910,4980,5015,5035,5079,5123,5153,5156,5192,5237,5253,5265,5277,5280,5292,5294,5295,5369,5449,5528,5606,5674,5718,5752,5777,5797,5814,5830,5847,5850,5852,5853,5930,5963,6014,6044,6078,6095,6099,6102,6130,6143,6168,6183,6185,6186,6263,6338,6398,6399,6477,6539,6606,6637,6666,6680,6706,6723,6740,6744,6782,6810,6814,6828,6854,6873,6876,6877,6902,6903,6926,6943,6959,6962,6987,7003,7019,7022,7023,7046,7063,7079,7082,7107,7123,7150,7153,7171,7173,7174,7249,7262,7307,7346,7377,7398,7427,7431,7457,7460,7461,7468,7517,7529,7546,7565,7574,7578,7613,7635,7665,7670,7684,7688,7691,7703,7705,7706,7742,7782,7821,7852,7873,7902,7906,7932,7935,7936,7943,7972,7985,7994,7998,8015,8024,8038,8047,8051,8086,8108,8138,8143,8157,8161,8164,8176,8178,8179,8210,8254,8273,8318,8321,8333,8368,8382,8420,8434,8474,8488,8498,8548,8551,8598,8611,8614,8651,8671,8710,8713,8758,8802,8833,8878,8881,8882,8914,8943,9016,9057,9084,9119,9175,9180,9184,9185,9215,9243,9281,9285,9286,9307,9342,9382,9437,9441,9465,9506,9510,9529,9539,9613,9686,9762,9839,9915,9992,10068,10144,10221,10294,10325,10340,10341,10351,10419,10489,10556,10625,10695,10765,10778,10792,10809,10871,10937,10957,10973,11016,11022,11040,11090,11133,11139,11157,11203,11246,11252,11257,11258,11268,11342,11409,11484,11556,11629,11700,11771,11791,11851,11865,11876,11910,11953,11959,11973,11993,12036,12042,12053,12099,12142,12148,12153,12157,12158,12176,12194,12197,12209,12211,12212,12245,12289,12295,12308,12314,12339,12357,12371,12375,12392,12410,12448,12452,12470,12481,12519,12529,12551,12566,12571,12589,12646,12661,12666,12698,12735,12740,12750,12774,12789,12794,12816,12875,12890,12895,12927,12991,12996,13000,13003,13016,13061,13064,13076,13078,13079,13112,13156,13169,13214,13217,13264,13277,13280,13321,13333,13335,13336,13387,13399,13420,13423,13470,13483,13486,13494,13495,13600,13601,13613,13634,13637,13649,13651,13652,13704,13717,13738,13741,13789,13802,13805,13814,13815,13913,13944,13975,13978,13979,13991,14012,14015,14027,14029,14030,14100,14178,14187,14188,14229,14276,14294,14297,14345,14393,14396,14397,14463,14470,14501,14519,14538,14542,14567,14636,14702,14771,14838,14908,14974,15043,15115,15182,15254,15278,15284,15355,15382,15388,15455,15509,15515,15585,15652,15675,15707,15726,15746,15751,15755,15776,15795,15838,15850,15854,15877,15951,16017,16047,16066,16086,16091,16095,16139,16148,16152,16204,16288,16365,16444,16529,16615,16691,16703,16707,16708,16791,16866,16913,16932,16936,16980,16993,17044,17048,17049,17067,17110,17147,17187,17212,17241,17261,17266,17284,17303,17325,17337,17363,17368,17386,17405,17427,17439,17465,17470,17488,17507,17527,17532,17557,17575,17594,17616,17628,17654,17659,17678,17710,17730,17763,17774,17851,17873,17946,17986,17998,18043,18048,18052,18070,18089,18093,18096,18097,18117,18175,18194,18198,18201,18221,18242,18245,18265,18290,18315,18339,18366,18370,18391,18394,18441,18443,18444,18520,18591,18635,18638,18717,18789,18865,18919,18948,19054,19057,19058,19133,19154,19229,19297,19345,19417,19489,19560,19633,19661,19692,19747,19835,19909,19992,19997,20001,20023,20043,20066,20087,20096,20099,20100,20165,20240,20313,20389,20421,20448,20478,20479,20508,20524,20537,20541,20571,20602,20633,20664,20667,20711,20783,20871,20897,20915,20927,20932,21006,21033,21052,21065,21071,21136,21141,21145,21148,21165,21167,21168,21201,21214,21229,21232,21305,21381,21453,21467,21470,21541,21543,21544,21600,21637,21664,21694,21742,21781,21821,21861,21924,21962,22008,22054,22081,22085,22088,22105,22107,22108,22178,22226,22241,22268,22270,22271,22350,22380,22435,22450,22496,22525,22528,22546,22555,22578,22610,22634,22659,22668,22677,22702,22719,22743,22747,22770,22789,22813,22838,22847,22856,22879,22911,22935,22960,22969,22972,23030,23032,23033,23047,23111],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/scan.go","Base":40772,"Size":15202,"Lines":[0,55,109,159,160,173,174,183,192,194,195,255,297,316,369,442,451,454,455,474,493,521,549,595,624,636,684,696,744,756,804,816,864,876,924,936,984,994,1017,1020,1095,1168,1169,1188,1225,1272,1303,1306,1308,1309,1340,1384,1403,1446,1449,1492,1537,1540,1587,1600,1603,1627,1648,1722,1725,1759,1777,1817,1857,1860,1874,1904,1948,1966,2008,2029,2047,2052,2056,2077,2129,2133,2172,2246,2314,2388,2459,2488,2515,2562,2616,2621,2625,2680,2681,2745,2778,2837,2875,2879,2914,2973,3011,3015,3018,3093,3139,3173,3230,3233,3234,3293,3361,3412,3416,3486,3557,3627,3694,3762,3831,3898,3968,4031,4052,4056,4130,4149,4229,4249,4286,4321,4358,4397,4479,4534,4538,4573,4654,4658,4687,4748,4752,4755,4756,4831,4912,4952,4993,5030,5052,5055,5075,5106,5140,5179,5272,5277,5281,5284,5285,5302,5344,5351,5419,5430,5456,5526,5595,5612,5629,5632,5663,5695,5727,5762,5792,5822,5855,5924,5993,6001,6077,6093,6109,6117,6194,6271,6304,6320,6336,6413,6441,6449,6527,6602,6681,6757,6790,6806,6822,6886,6900,6914,6935,6959,6983,6997,7017,7043,7069,7088,7135,7151,7159,7166,7167,7240,7264,7312,7326,7344,7351,7352,7370,7468,7486,7494,7508,7530,7550,7563,7633,7700,7723,7742,7751,7774,7832,7841,7887,7910,7929,7938,7970,8004,8012,8013,8054,8072,8087,8158,8202,8238,8282,8306,8326,8336,8363,8392,8415,8443,8470,8486,8497,8539,8564,8585,8596,8630,8647,8674,8713,8738,8788,8815,8838,8851,8887,8899,8920,8936,8947,8968,8978,8987,8995,9002,9003,9027,9059,9107,9192,9278,9365,9451,9538,9624,9660,9675,9682,9758,9775,9782,9797,9811,9820,9871,9971,10068,10118,10134,10140,10141,10204,10272,10341,10375,10382,10449,10517,10585,10640,10647,10708,10819,10865,10916,10933,10940,10946,10947,11000,11042,11048,11066,11103,11133,11139,11173,11193,11251,11283,11351,11368,11373,11387,11400,11401,11413,11415,11416,11495,11513,11599,11639,11659,11678,11702,11706,11734,11752,11766,11770,11781,11798,11802,11815,11818,11819,11901,11918,11938,11945,11976,11993,12029,12048,12063,12068,12090,12114,12115,12132,12143,12165,12199,12219,12264,12286,12304,12312,12343,12350,12366,12372,12383,12397,12427,12447,12463,12469,12483,12495,12501,12513,12563,12568,12569,12637,12656,12671,12676,12697,12745,12750,12765,12787,12792,12796,12799,12818,12831,12905,12919,12923,12926,12938,12940,12941,13020,13067,13158,13188,13206,13223,13239,13249,13254,13262,13274,13278,13306,13324,13341,13345,13357,13369,13373,13390,13407,13418,13435,13439,13442,13459,13461,13462,13518,13587,13610,13629,13669,13701,13731,13743,13747,13784,13821,13851,13890,13929,14019,14035,14041,14046,14050,14053,14065,14067,14068,14147,14164,14240,14278,14318,14345,14348,14357,14388,14407,14475,14485,14506,14516,14585,14595,14665,14675,14745,14755,14824,14835,14885,14889,14892,14953,14979,14993,15017,15044,15060,15077,15087,15110,15122,15134,15147,15152,15181,15185,15188,15200],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/image/jpeg/writer.go","Base":55975,"Size":17566,"Lines":[0,55,109,159,160,173,174,183,192,202,211,226,232,234,235,279,304,316,327,330,340,342,343,422,451,464,492,495,526,528,529,594,620,669,718,767,816,865,914,963,1012,1061,1110,1159,1208,1257,1306,1355,1404,1406,1407,1427,1428,1436,1475,1498,1511,1513,1514,1591,1667,1743,1761,1811,1826,1829,1863,1897,1931,1965,1999,2034,2072,2112,2116,2133,2136,2170,2204,2238,2272,2306,2340,2374,2408,2412,2414,2415,2434,2435,2443,2482,2504,2528,2552,2564,2566,2567,2612,2638,2692,2708,2764,2778,2780,2781,2839,2902,2948,2966,2969,3029,3077,3081,3099,3102,3164,3174,3225,3276,3327,3378,3429,3480,3531,3582,3633,3684,3735,3786,3837,3888,3939,3990,4041,4092,4143,4194,4209,4214,4218,4238,4241,4301,4349,4353,4373,4376,4438,4448,4499,4550,4601,4652,4703,4754,4805,4856,4907,4958,5009,5060,5111,5162,5213,5264,5315,5366,5417,5468,5483,5488,5492,5494,5495,5570,5647,5725,5766,5791,5792,5835,5850,5879,5904,5925,5929,5932,5965,5990,6027,6056,6099,6134,6144,6151,6155,6168,6171,6173,6174,6239,6271,6272,6286,6322,6349,6352,6354,6355,6387,6411,6426,6437,6452,6454,6455,6503,6525,6600,6671,6683,6694,6723,6737,6792,6812,6875,6911,6913,6914,6942,6961,6970,6973,6994,6996,6997,7033,7052,7061,7064,7089,7091,7092,7130,7149,7158,7161,7187,7189,7190,7264,7319,7364,7382,7403,7419,7437,7462,7479,7496,7517,7521,7534,7547,7550,7581,7583,7584,7650,7705,7735,7763,7765,7766,7845,7865,7934,7956,7968,7993,7996,8014,8030,8060,8070,8107,8110,8152,8168,8208,8211,8213,8214,8289,8356,8373,8392,8426,8462,8482,8484,8485,8542,8573,8627,8670,8696,8720,8745,8748,8750,8751,8820,8884,8915,8959,8989,9020,9053,9084,9117,9147,9169,9184,9225,9243,9261,9271,9307,9338,9377,9413,9449,9453,9456,9493,9495,9496,9548,9593,9609,9637,9659,9693,9713,9716,9743,9780,9783,9826,9853,9890,9912,9931,9934,9936,9937,10016,10095,10127,10202,10211,10234,10275,10322,10350,10394,10434,10487,10502,10517,10528,10552,10576,10596,10601,10636,10653,10657,10660,10680,10702,10705,10716,10718,10719,10793,10810,10888,10905,10926,10947,10973,11000,11065,11138,11167,11197,11227,11231,11234,11236,11237,11313,11373,11390,11411,11432,11446,11472,11499,11557,11592,11596,11599,11601,11602,11676,11758,11775,11796,11817,11843,11859,11876,11889,11893,11939,11966,11983,12001,12015,12020,12050,12108,12137,12167,12197,12201,12204,12206,12207,12283,12367,12384,12405,12426,12452,12468,12485,12498,12502,12529,12546,12564,12578,12583,12610,12637,12671,12707,12743,12747,12750,12752,12753,12829,12843,12883,12909,12941,12968,12996,13016,13079,13118,13123,13127,13130,13132,13133,13197,13232,13270,13330,13401,13476,13519,13544,13605,13607,13608,13677,13712,13750,13810,13870,13930,14001,14076,14119,14148,14197,14234,14236,14237,14280,14324,14343,14362,14384,14394,14420,14423,14430,14477,14529,14544,14562,14600,14636,14639,14661,14685,14747,14766,14818,14871,14895,14917,14960,14965,14969,14979,15008,15039,15092,15146,15175,15200,15225,15260,15282,15329,15359,15408,15422,15462,15469,15513,15519,15538,15583,15602,15647,15652,15656,15659,15691,15708,15710,15711,15772,15798,15799,15839,15900,15922,15935,15937,15938,16017,16086,16146,16163,16204,16262,16265,16280,16311,16322,16332,16359,16362,16392,16419,16434,16456,16475,16490,16518,16535,16539,16542,16597,16612,16631,16656,16666,16692,16695,16735,16761,16791,16824,16852,16866,16876,16899,16911,16916,16944,16948,16951,17011,17028,17047,17109,17128,17145,17148,17185,17202,17219,17239,17274,17288,17320,17355,17385,17409,17435,17450,17485,17502,17519,17539,17550,17564],"Infos":null}]}
 