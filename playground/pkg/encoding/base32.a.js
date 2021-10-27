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
GoLinkname�� Implementation�� 	Reference��   ��p��encoding/base32base32iostrconv�i ��ErroreCorruptInputError encode	decodeMappadCharWithPaddingencEncodingpaddingEncodedstsrcEncodeToString
EncodedLenndecodeenderrDecodeDecodeStrings
DecodedLenrReaderiowWriterWriteCloserencoderReadpWriteCloserClosebase32HexEncoding
NewDecoder
NewEncoderNewEncoding	NoPaddingStdEncoding
StdPadding T        � 1  "4  ,  DJJJJJJJJT 8 4 @J M M  U @O \Q `Q   d @S `U   s @W ~   � @Y \[ `[ ~ �  �  � @] \_ `_ ~ �  � @a � c   � @e ~  JV �J ��F  @� �� � J �� ��F  @� �� � F  � � C V �C z�  � �� ~ � T ��  � �� ~ � T � ��� � � T ��  �  T �� 	DG���������������� ��������( io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Encoding��	Encoding = $pkg.Encoding = $newType(0, $kindStruct, "base32.Encoding", true, "encoding/base32", true, function(encode_, decodeMap_, padChar_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.encode = arrayType.zero();
			this.decodeMap = arrayType$1.zero();
			this.padChar = 0;
			return;
		}
		this.encode = encode_;
		this.decodeMap = decodeMap_;
		this.padChar = padChar_;
	});
�`	Encoding.methods = [{prop: "WithPadding", name: "WithPadding", pkg: "", typ: $funcType([$Int32], [ptrType], false)}];
	ptrType.methods = [{prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType, sliceType], [], false)}, {prop: "EncodeToString", name: "EncodeToString", pkg: "", typ: $funcType([sliceType], [$String], false)}, {prop: "EncodedLen", name: "EncodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}, {prop: "decode", name: "decode", pkg: "encoding/base32", typ: $funcType([sliceType, sliceType], [$Int, $Bool, $error], false)}, {prop: "Decode", name: "Decode", pkg: "", typ: $funcType([sliceType, sliceType], [$Int, $error], false)}, {prop: "DecodeString", name: "DecodeString", pkg: "", typ: $funcType([$String], [sliceType, $error], false)}, {prop: "DecodedLen", name: "DecodedLen", pkg: "", typ: $funcType([$Int], [$Int], false)}];
�C	Encoding.init("encoding/base32", [{prop: "encode", name: "encode", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "decodeMap", name: "decodeMap", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "padChar", name: "padChar", embedded: false, exported: false, typ: $Int32, tag: ""}]);
Encodingencoding/base32.Encodingencoding/base32.arrayTypeencoding/base32.arrayType$1encoding/base32.ptrTypeencoding/base32.sliceType  encoder��	encoder = $pkg.encoder = $newType(0, $kindStruct, "base32.encoder", true, "encoding/base32", false, function(err_, enc_, w_, buf_, nbuf_, out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.enc = ptrType.nil;
			this.w = $ifaceNil;
			this.buf = arrayType$3.zero();
			this.nbuf = 0;
			this.out = arrayType$4.zero();
			return;
		}
		this.err = err_;
		this.enc = enc_;
		this.w = w_;
		this.buf = buf_;
		this.nbuf = nbuf_;
		this.out = out_;
	});
��	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
�&	encoder.init("encoding/base32", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$3, tag: ""}, {prop: "nbuf", name: "nbuf", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: arrayType$4, tag: ""}]);
encoderencoding/base32.arrayType$3encoding/base32.arrayType$4encoding/base32.encoderencoding/base32.ptrTypeencoding/base32.ptrType$1encoding/base32.sliceType	io.Writer  CorruptInputError��	CorruptInputError = $pkg.CorruptInputError = $newType(8, $kindInt64, "base32.CorruptInputError", true, "encoding/base32", true, null);
n	CorruptInputError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
CorruptInputError!encoding/base32.CorruptInputError  decoder�\	decoder = $pkg.decoder = $newType(0, $kindStruct, "base32.decoder", true, "encoding/base32", false, function(err_, enc_, r_, end_, buf_, nbuf_, out_, outbuf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.err = $ifaceNil;
			this.enc = ptrType.nil;
			this.r = $ifaceNil;
			this.end = false;
			this.buf = arrayType$4.zero();
			this.nbuf = 0;
			this.out = sliceType.nil;
			this.outbuf = arrayType$5.zero();
			return;
		}
		this.err = err_;
		this.enc = enc_;
		this.r = r_;
		this.end = end_;
		this.buf = buf_;
		this.nbuf = nbuf_;
		this.out = out_;
		this.outbuf = outbuf_;
	});
r	ptrType$2.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	decoder.init("encoding/base32", [{prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}, {prop: "enc", name: "enc", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: io.Reader, tag: ""}, {prop: "end", name: "end", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: arrayType$4, tag: ""}, {prop: "nbuf", name: "nbuf", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "outbuf", name: "outbuf", embedded: false, exported: false, typ: arrayType$5, tag: ""}]);
decoderencoding/base32.arrayType$4encoding/base32.arrayType$5encoding/base32.decoderencoding/base32.ptrTypeencoding/base32.ptrType$2encoding/base32.sliceType	io.Reader  newlineFilteringReader�'	newlineFilteringReader = $pkg.newlineFilteringReader = $newType(0, $kindStruct, "base32.newlineFilteringReader", true, "encoding/base32", false, function(wrapped_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wrapped = $ifaceNil;
			return;
		}
		this.wrapped = wrapped_;
	});
r	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}];
��	newlineFilteringReader.init("encoding/base32", [{prop: "wrapped", name: "wrapped", embedded: false, exported: false, typ: io.Reader, tag: ""}]);
newlineFilteringReader&encoding/base32.newlineFilteringReaderencoding/base32.ptrType$3encoding/base32.sliceType	io.Reader  	arrayType%	arrayType = $arrayType($Uint8, 32);
	arrayType  arrayType$1(	arrayType$1 = $arrayType($Uint8, 256);
arrayType$1  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  arrayType$2&	arrayType$2 = $arrayType($Uint8, 8);
arrayType$2  ptrType	ptrType = $ptrType(Encoding);
ptrTypeencoding/base32.Encoding  arrayType$3&	arrayType$3 = $arrayType($Uint8, 5);
arrayType$3  arrayType$4)	arrayType$4 = $arrayType($Uint8, 1024);
arrayType$4  arrayType$5(	arrayType$5 = $arrayType($Uint8, 640);
arrayType$5  	ptrType$1 	ptrType$1 = $ptrType(encoder);
	ptrType$1encoding/base32.encoder  	ptrType$2 	ptrType$2 = $ptrType(decoder);
	ptrType$2encoding/base32.decoder  	ptrType$3/	ptrType$3 = $ptrType(newlineFilteringReader);
	ptrType$3&encoding/base32.newlineFilteringReader  StdEncoding  HexEncoding  K  b		$pkg.StdEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567");
encoding/base32.NewEncodingencoding/base32.StdEncoding  K  �		$pkg.HexEncoding = NewEncoding("0123456789ABCDEFGHIJKLMNOPQRSTUV");
encoding/base32.HexEncodingencoding/base32.NewEncoding encoding/base32.NewEncodingencoding/base32NewEncoding NewEncoding��	NewEncoding = function(encoder$1) {
		var e, encoder$1, i, i$1, x, x$1, x$2;
    		if (!((encoder$1.length === 32))) {
  �			$panic(new $String("encoding alphabet is not 32-bytes long"));
    		}
  .		e = new Encoding.ptr(arrayType.zero(), arrayType$1.zero(), 0);
  B		$copyString(new sliceType(e.encode), encoder$1);
  ^		e.padChar = 61;
  {		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  �			(x = e.decodeMap, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i] = 255));
  �			i = i + (1) >> 0;
    		}
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < encoder$1.length)) { break; }
  �			(x$1 = e.decodeMap, x$2 = encoder$1.charCodeAt(i$1), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = ((i$1 << 24 >>> 24))));
  �			i$1 = i$1 + (1) >> 0;
    		}
  		return e;
    	};
	$pkg.NewEncoding = NewEncoding;
NewEncodingencoding/base32.Encodingencoding/base32.NewEncodingencoding/base32.arrayTypeencoding/base32.arrayType$1encoding/base32.sliceType &(encoding/base32.Encoding).WithPadding ��	Encoding.ptr.prototype.WithPadding = function(padding) {
		var enc, i, padding, x;
		enc = this;
    		if ((padding === 13) || (padding === 10) || padding > 255) {
  �			$panic(new $String("invalid padding"));
    		}
  �		i = 0;
		while (true) {
			if (!(i < 32)) { break; }
    			if ((((x = enc.encode, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) >> 0)) === padding) {
  				$panic(new $String("padding contained in alphabet"));
    			}
  �			i = i + (1) >> 0;
    		}
  F		enc.padChar = padding;
  ]		return enc;
    	};
	Encoding.prototype.WithPadding = function(padding) { return this.$val.WithPadding(padding); };
Encodingencoding/base32.Encoding "(*encoding/base32.Encoding).Encode �(=	Encoding.ptr.prototype.Encode = function(dst, src) {
		var _1, b, dst, enc, i, size, src, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		enc = this;
  	�		while (true) {
			if (!(src.$length > 0)) { break; }
  	�			b = arrayType$2.zero();
    			_1 = src.$length;
    			if (_1 === (4)) {
  
�				b[6] = ((b[6] | ((((((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) << 3 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  
�				b[5] = (((((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) >>> 2 << 24 >>> 24)) & 31) >>> 0);
  
�				b[4] = ((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) >>> 7 << 24 >>> 24);
  
�				b[4] = ((b[4] | ((((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) << 1 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  				b[3] = (((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) >>> 4 << 24 >>> 24)) & 31) >>> 0);
  W				b[3] = ((b[3] | ((((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) << 4 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  w				b[2] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 1 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 6 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = ((b[1] | ((((((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) << 2 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  �				b[0] = ((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 3 << 24 >>> 24);
    			} else if (_1 === (3)) {
  
�				b[4] = ((b[4] | ((((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) << 1 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  				b[3] = (((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) >>> 4 << 24 >>> 24)) & 31) >>> 0);
  W				b[3] = ((b[3] | ((((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) << 4 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  w				b[2] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 1 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 6 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = ((b[1] | ((((((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) << 2 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  �				b[0] = ((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 3 << 24 >>> 24);
    			} else if (_1 === (2)) {
  W				b[3] = ((b[3] | ((((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) << 4 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  w				b[2] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 1 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 6 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = ((b[1] | ((((((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) << 2 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  �				b[0] = ((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 3 << 24 >>> 24);
    			} else if (_1 === (1)) {
  �				b[1] = ((b[1] | ((((((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) << 2 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  �				b[0] = ((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 3 << 24 >>> 24);
    			} else {
  
J				b[7] = (((4 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 4]) & 31) >>> 0);
  
b				b[6] = ((4 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 4]) >>> 5 << 24 >>> 24);
  
�				b[6] = ((b[6] | ((((((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) << 3 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  
�				b[5] = (((((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) >>> 2 << 24 >>> 24)) & 31) >>> 0);
  
�				b[4] = ((3 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 3]) >>> 7 << 24 >>> 24);
  
�				b[4] = ((b[4] | ((((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) << 1 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  				b[3] = (((((2 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 2]) >>> 4 << 24 >>> 24)) & 31) >>> 0);
  W				b[3] = ((b[3] | ((((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) << 4 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  w				b[2] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 1 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = (((((1 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 1]) >>> 6 << 24 >>> 24)) & 31) >>> 0);
  �				b[1] = ((b[1] | ((((((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) << 2 << 24 >>> 24)) & 31) >>> 0))) >>> 0);
  �				b[0] = ((0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]) >>> 3 << 24 >>> 24);
    			}
  ;			size = dst.$length;
    			if (size >= 8) {
  �				(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = (x = enc.encode, x$1 = (b[0] & 31) >>> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])));
  �				(1 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 1] = (x$2 = enc.encode, x$3 = (b[1] & 31) >>> 0, ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3])));
  �				(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = (x$4 = enc.encode, x$5 = (b[2] & 31) >>> 0, ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5])));
  �				(3 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 3] = (x$6 = enc.encode, x$7 = (b[3] & 31) >>> 0, ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7])));
  				(4 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 4] = (x$8 = enc.encode, x$9 = (b[4] & 31) >>> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9])));
  2				(5 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 5] = (x$10 = enc.encode, x$11 = (b[5] & 31) >>> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11])));
  R				(6 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 6] = (x$12 = enc.encode, x$13 = (b[6] & 31) >>> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13])));
  r				(7 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 7] = (x$14 = enc.encode, x$15 = (b[7] & 31) >>> 0, ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15])));
    			} else {
  �				i = 0;
				while (true) {
					if (!(i < size)) { break; }
  �					((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = (x$16 = enc.encode, x$17 = (((i < 0 || i >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[i]) & 31) >>> 0, ((x$17 < 0 || x$17 >= x$16.length) ? ($throwRuntimeError("index out of range"), undefined) : x$16[x$17])));
  �					i = i + (1) >> 0;
    				}
    			}
    			if (src.$length < 5) {
    				if (enc.padChar === -1) {
  8					break;
    				}
  G				(7 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 7] = ((enc.padChar << 24 >>> 24)));
    				if (src.$length < 4) {
  {					(6 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 6] = ((enc.padChar << 24 >>> 24)));
  �					(5 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 5] = ((enc.padChar << 24 >>> 24)));
    					if (src.$length < 3) {
  �						(4 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 4] = ((enc.padChar << 24 >>> 24)));
    						if (src.$length < 2) {
  							(3 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 3] = ((enc.padChar << 24 >>> 24)));
  )							(2 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 2] = ((enc.padChar << 24 >>> 24)));
    						}
    					}
    				}
  Z				break;
    			}
  g			src = $subslice(src, 5);
  w			dst = $subslice(dst, 8);
    		}
    	};
	Encoding.prototype.Encode = function(dst, src) { return this.$val.Encode(dst, src); };
Encodingencoding/base32.Encodingencoding/base32.arrayType$2 *(*encoding/base32.Encoding).EncodeToString �F	Encoding.ptr.prototype.EncodeToString = function(src) {
		var buf, enc, src;
		enc = this;
  �		buf = $makeSlice(sliceType, enc.EncodedLen(src.$length));
  *		enc.Encode(buf, src);
  @		return ($bytesToString(buf));
    	};
	Encoding.prototype.EncodeToString = function(src) { return this.$val.EncodeToString(src); };
Encodingencoding/base32.Encodingencoding/base32.sliceType  (*encoding/base32.encoder).Write ��	encoder.ptr.prototype.Write = function(p) {
		var _q, _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, e, err, i, i$1, n, nn, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; err = $f.err; i = $f.i; i$1 = $f.i$1; n = $f.n; nn = $f.nn; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		e = this;
    		if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    			_tmp = 0;
			_tmp$1 = e.err;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  �		/* */ if (e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (e.nbuf > 0) { */ case 1:
  �			i = 0;
  �			i = 0;
			while (true) {
				if (!(i < p.$length && e.nbuf < 5)) { break; }
  �				(x = e.buf, x$1 = e.nbuf, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i])));
  �				e.nbuf = e.nbuf + (1) >> 0;
  �				i = i + (1) >> 0;
    			}
  			n = n + (i) >> 0;
  			p = $subslice(p, i);
    			if (e.nbuf < 5) {
  0				$s = -1; return [n, err];
    			}
  =			e.enc.Encode($subslice(new sliceType(e.out), 0), $subslice(new sliceType(e.buf), 0));
  e			_r = e.w.Write($subslice(new sliceType(e.out), 0, 8)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
    			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    				_tmp$2 = n;
				_tmp$3 = e.err;
				n = _tmp$2;
				err = _tmp$3;
				$s = -1; return [n, err];
    			}
  �			e.nbuf = 0;
    		/* } */ case 2:
  �		/* while (true) { */ case 4:
			/* if (!(p.$length >= 5)) { break; } */ if(!(p.$length >= 5)) { $s = 5; continue; }
  �			nn = 640;
    			if (nn > p.$length) {
  				nn = p.$length;
  ,				nn = nn - ((_r$1 = nn % 5, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"))) >> 0;
    			}
  ?			e.enc.Encode($subslice(new sliceType(e.out), 0), $subslice(p, 0, nn));
  e			_r$2 = e.w.Write($subslice(new sliceType(e.out), 0, ($imul((_q = nn / 5, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 8)))); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			e.err = _tuple$1[1];
    			if (!($interfaceIsEqual(e.err, $ifaceNil))) {
    				_tmp$4 = n;
				_tmp$5 = e.err;
				n = _tmp$4;
				err = _tmp$5;
				$s = -1; return [n, err];
    			}
  �			n = n + (nn) >> 0;
  �			p = $subslice(p, nn);
    		$s = 4; continue;
		case 5:
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < p.$length)) { break; }
  			(x$2 = e.buf, ((i$1 < 0 || i$1 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i$1] = ((i$1 < 0 || i$1 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i$1])));
  �			i$1 = i$1 + (1) >> 0;
    		}
  		e.nbuf = p.$length;
  *		n = n + (p.$length) >> 0;
  7		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Write }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.n = n; $f.nn = nn; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Write = function(p) { return this.$val.Write(p); };
encoderencoding/base32.encoderencoding/base32.sliceType  (*encoding/base32.encoder).Close ��	encoder.ptr.prototype.Close = function() {
		var _r, _tuple, e, encodedLen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; e = $f.e; encodedLen = $f.encodedLen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  		/* */ if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ($interfaceIsEqual(e.err, $ifaceNil) && e.nbuf > 0) { */ case 1:
  *			e.enc.Encode($subslice(new sliceType(e.out), 0), $subslice(new sliceType(e.buf), 0, e.nbuf));
  U			encodedLen = e.enc.EncodedLen(e.nbuf);
  ~			e.nbuf = 0;
  �			_r = e.w.Write($subslice(new sliceType(e.out), 0, encodedLen)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			e.err = _tuple[1];
    		/* } */ case 2:
  �		$s = -1; return e.err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.Close }; } $f._r = _r; $f._tuple = _tuple; $f.e = e; $f.encodedLen = encodedLen; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.Close = function() { return this.$val.Close(); };
encoderencoding/base32.encoderencoding/base32.sliceType encoding/base32.NewEncoderencoding/base32
NewEncoder 
NewEncoder��	NewEncoder = function(enc, w) {
		var enc, w;
  /		return new encoder.ptr($ifaceNil, enc, w, arrayType$3.zero(), 0, arrayType$4.zero());
    	};
	$pkg.NewEncoder = NewEncoder;

NewEncoderencoding/base32.Encodingencoding/base32.NewEncoderencoding/base32.arrayType$3encoding/base32.arrayType$4encoding/base32.encoderencoding/base32.ptrType &(*encoding/base32.Encoding).EncodedLen �	Encoding.ptr.prototype.EncodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
    		if (enc.padChar === -1) {
  			return (_q = ((($imul(n, 8)) + 4 >> 0)) / 5, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  		return $imul((_q$1 = ((n + 4 >> 0)) / 5, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 8);
    	};
	Encoding.prototype.EncodedLen = function(n) { return this.$val.EncodedLen(n); };
Encodingencoding/base32.Encoding )(encoding/base32.CorruptInputError).Error �	CorruptInputError.prototype.Error = function() {
		var e;
		e = this;
  �		return "illegal base32 data at input byte " + strconv.FormatInt((new $Int64(e.$high, e.$low)), 10);
    	};
	$ptrType(CorruptInputError).prototype.Error = function() { return this.$get().Error(); };
CorruptInputError!encoding/base32.CorruptInputErrorstrconv.FormatInt "(*encoding/base32.Encoding).decode ��	Encoding.ptr.prototype.decode = function(dst, src) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, dbuf, dlen, dst, dsti, enc, end, err, in$1, j, k, n, olen, src, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		n = 0;
		end = false;
		err = $ifaceNil;
		enc = this;
  h		$unused(enc.decodeMap);
  |		dsti = 0;
  �		olen = src.$length;
  �		while (true) {
			if (!(src.$length > 0 && !end)) { break; }
  �			dbuf = arrayType$2.zero();
  �			dlen = 8;
  				j = 0;
			while (true) {
				if (!(j < 8)) { break; }
    				if (src.$length === 0) {
    					if (!((enc.padChar === -1))) {
    						_tmp = n;
						_tmp$1 = false;
						_tmp$2 = (new CorruptInputError(0, ((olen - src.$length >> 0) - j >> 0)));
						n = _tmp;
						end = _tmp$1;
						err = _tmp$2;
						return [n, end, err];
    					}
  					_tmp$3 = j;
					_tmp$4 = true;
					dlen = _tmp$3;
					end = _tmp$4;
  +					break;
    				}
  9				in$1 = (0 >= src.$length ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + 0]);
  I				src = $subslice(src, 1);
    				if ((in$1 === ((enc.padChar << 24 >>> 24))) && j >= 2 && src.$length < 8) {
    					if ((src.$length + j >> 0) < 7) {
    						_tmp$5 = n;
						_tmp$6 = false;
						_tmp$7 = (new CorruptInputError(0, olen));
						n = _tmp$5;
						end = _tmp$6;
						err = _tmp$7;
						return [n, end, err];
    					}
  3					k = 0;
					while (true) {
						if (!(k < (7 - j >> 0))) { break; }
    						if (src.$length > k && !((((k < 0 || k >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + k]) === ((enc.padChar << 24 >>> 24))))) {
    							_tmp$8 = n;
							_tmp$9 = false;
							_tmp$10 = (new CorruptInputError(0, (((olen - src.$length >> 0) + k >> 0) - 1 >> 0)));
							n = _tmp$8;
							end = _tmp$9;
							err = _tmp$10;
							return [n, end, err];
    						}
  F						k = k + (1) >> 0;
    					}
  �					_tmp$11 = j;
					_tmp$12 = true;
					dlen = _tmp$11;
					end = _tmp$12;
    					if ((dlen === 1) || (dlen === 3) || (dlen === 6)) {
    						_tmp$13 = n;
						_tmp$14 = false;
						_tmp$15 = (new CorruptInputError(0, ((olen - src.$length >> 0) - 1 >> 0)));
						n = _tmp$13;
						end = _tmp$14;
						err = _tmp$15;
						return [n, end, err];
    					}
  �					break;
    				}
  �				((j < 0 || j >= dbuf.length) ? ($throwRuntimeError("index out of range"), undefined) : dbuf[j] = (x = enc.decodeMap, ((in$1 < 0 || in$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[in$1])));
    				if (((j < 0 || j >= dbuf.length) ? ($throwRuntimeError("index out of range"), undefined) : dbuf[j]) === 255) {
    					_tmp$16 = n;
					_tmp$17 = false;
					_tmp$18 = (new CorruptInputError(0, ((olen - src.$length >> 0) - 1 >> 0)));
					n = _tmp$16;
					end = _tmp$17;
					err = _tmp$18;
					return [n, end, err];
    				}
   m				j = j + (1) >> 0;
    			}
    			_1 = dlen;
    			if (_1 === (8)) {
   �				(x$1 = dsti + 4 >> 0, ((x$1 < 0 || x$1 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$1] = (((dbuf[6] << 5 << 24 >>> 24) | dbuf[7]) >>> 0)));
   �				n = n + (1) >> 0;
  !				(x$2 = dsti + 3 >> 0, ((x$2 < 0 || x$2 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$2] = (((((dbuf[4] << 7 << 24 >>> 24) | (dbuf[5] << 2 << 24 >>> 24)) >>> 0) | (dbuf[6] >>> 3 << 24 >>> 24)) >>> 0)));
  !U				n = n + (1) >> 0;
  !u				(x$3 = dsti + 2 >> 0, ((x$3 < 0 || x$3 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$3] = (((dbuf[3] << 4 << 24 >>> 24) | (dbuf[4] >>> 1 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  !�				(x$4 = dsti + 1 >> 0, ((x$4 < 0 || x$4 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$4] = (((((dbuf[1] << 6 << 24 >>> 24) | (dbuf[2] << 1 << 24 >>> 24)) >>> 0) | (dbuf[3] >>> 4 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  "				(x$5 = dsti + 0 >> 0, ((x$5 < 0 || x$5 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$5] = (((dbuf[0] << 3 << 24 >>> 24) | (dbuf[1] >>> 2 << 24 >>> 24)) >>> 0)));
  "=				n = n + (1) >> 0;
    			} else if (_1 === (7)) {
  !				(x$6 = dsti + 3 >> 0, ((x$6 < 0 || x$6 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$6] = (((((dbuf[4] << 7 << 24 >>> 24) | (dbuf[5] << 2 << 24 >>> 24)) >>> 0) | (dbuf[6] >>> 3 << 24 >>> 24)) >>> 0)));
  !U				n = n + (1) >> 0;
  !u				(x$7 = dsti + 2 >> 0, ((x$7 < 0 || x$7 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$7] = (((dbuf[3] << 4 << 24 >>> 24) | (dbuf[4] >>> 1 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  !�				(x$8 = dsti + 1 >> 0, ((x$8 < 0 || x$8 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$8] = (((((dbuf[1] << 6 << 24 >>> 24) | (dbuf[2] << 1 << 24 >>> 24)) >>> 0) | (dbuf[3] >>> 4 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  "				(x$9 = dsti + 0 >> 0, ((x$9 < 0 || x$9 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$9] = (((dbuf[0] << 3 << 24 >>> 24) | (dbuf[1] >>> 2 << 24 >>> 24)) >>> 0)));
  "=				n = n + (1) >> 0;
    			} else if (_1 === (5)) {
  !u				(x$10 = dsti + 2 >> 0, ((x$10 < 0 || x$10 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$10] = (((dbuf[3] << 4 << 24 >>> 24) | (dbuf[4] >>> 1 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  !�				(x$11 = dsti + 1 >> 0, ((x$11 < 0 || x$11 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$11] = (((((dbuf[1] << 6 << 24 >>> 24) | (dbuf[2] << 1 << 24 >>> 24)) >>> 0) | (dbuf[3] >>> 4 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  "				(x$12 = dsti + 0 >> 0, ((x$12 < 0 || x$12 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$12] = (((dbuf[0] << 3 << 24 >>> 24) | (dbuf[1] >>> 2 << 24 >>> 24)) >>> 0)));
  "=				n = n + (1) >> 0;
    			} else if (_1 === (4)) {
  !�				(x$13 = dsti + 1 >> 0, ((x$13 < 0 || x$13 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$13] = (((((dbuf[1] << 6 << 24 >>> 24) | (dbuf[2] << 1 << 24 >>> 24)) >>> 0) | (dbuf[3] >>> 4 << 24 >>> 24)) >>> 0)));
  !�				n = n + (1) >> 0;
  "				(x$14 = dsti + 0 >> 0, ((x$14 < 0 || x$14 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$14] = (((dbuf[0] << 3 << 24 >>> 24) | (dbuf[1] >>> 2 << 24 >>> 24)) >>> 0)));
  "=				n = n + (1) >> 0;
    			} else if (_1 === (2)) {
  "				(x$15 = dsti + 0 >> 0, ((x$15 < 0 || x$15 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + x$15] = (((dbuf[0] << 3 << 24 >>> 24) | (dbuf[1] >>> 2 << 24 >>> 24)) >>> 0)));
  "=				n = n + (1) >> 0;
    			}
  "G			dsti = dsti + (5) >> 0;
    		}
    		_tmp$19 = n;
		_tmp$20 = end;
		_tmp$21 = $ifaceNil;
		n = _tmp$19;
		end = _tmp$20;
		err = _tmp$21;
		return [n, end, err];
    	};
	Encoding.prototype.decode = function(dst, src) { return this.$val.decode(dst, src); };
Encodingdecode~!encoding/base32.CorruptInputErrorencoding/base32.Encodingencoding/base32.arrayType$2 "(*encoding/base32.Encoding).Decode ��	Encoding.ptr.prototype.Decode = function(dst, src) {
		var _tuple, buf, dst, enc, err, l, n, src;
		n = 0;
		err = $ifaceNil;
		enc = this;
  #�		buf = $makeSlice(sliceType, src.$length);
  $		l = stripNewlines(buf, src);
  $#		_tuple = enc.decode(dst, $subslice(buf, 0, l));
		n = _tuple[0];
		err = _tuple[2];
  $I		return [n, err];
    	};
	Encoding.prototype.Decode = function(dst, src) { return this.$val.Decode(dst, src); };
Encodingencoding/base32.Encodingencoding/base32.decode~encoding/base32.sliceTypeencoding/base32.stripNewlines ((*encoding/base32.Encoding).DecodeString ��	Encoding.ptr.prototype.DecodeString = function(s) {
		var _tuple, buf, enc, err, l, n, s;
		enc = this;
  $�		buf = (new sliceType($stringToBytes(s)));
  $�		l = stripNewlines(buf, buf);
  %		_tuple = enc.decode(buf, $subslice(buf, 0, l));
		n = _tuple[0];
		err = _tuple[2];
  %/		return [$subslice(buf, 0, n), err];
    	};
	Encoding.prototype.DecodeString = function(s) { return this.$val.DecodeString(s); };
Encodingencoding/base32.Encodingencoding/base32.decode~encoding/base32.sliceTypeencoding/base32.stripNewlines encoding/base32.readEncodedDataencoding/base32readEncodedData readEncodedData��	readEncodedData = function(r, buf, min, expectsPadding) {
		var _r, _tuple, buf, err, expectsPadding, min, n, nn, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; err = $f.err; expectsPadding = $f.expectsPadding; min = $f.min; n = $f.n; nn = $f.nn; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  &�		/* while (true) { */ case 1:
			/* if (!(n < min && $interfaceIsEqual(err, $ifaceNil))) { break; } */ if(!(n < min && $interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
  &�			nn = 0;
  &�			_r = r.Read($subslice(buf, n)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			nn = _tuple[0];
			err = _tuple[1];
  &�			n = n + (nn) >> 0;
    		$s = 1; continue;
		case 2:
    		if (n < min && n > 0 && $interfaceIsEqual(err, io.EOF)) {
  'C			err = io.ErrUnexpectedEOF;
    		}
    		if (expectsPadding && min < 8 && (n === 0) && $interfaceIsEqual(err, io.EOF)) {
  (4			err = io.ErrUnexpectedEOF;
    		}
  (R		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readEncodedData }; } $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.err = err; $f.expectsPadding = expectsPadding; $f.min = min; $f.n = n; $f.nn = nn; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
readEncodedDataencoding/base32.readEncodedDataio.EOFio.ErrUnexpectedEOF (*encoding/base32.decoder).Read �s	decoder.ptr.prototype.Read = function(p) {
		var _q, _q$1, _r, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, d, err, expectsPadding, i, min, n, nn, nr, nw, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; d = $f.d; err = $f.err; expectsPadding = $f.expectsPadding; i = $f.i; min = $f.min; n = $f.n; nn = $f.nn; nr = $f.nr; nw = $f.nw; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
    		if (d.out.$length > 0) {
  (�			n = $copySlice(p, d.out);
  (�			d.out = $subslice(d.out, n);
    			if (d.out.$length === 0) {
    				_tmp = n;
				_tmp$1 = d.err;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    			_tmp$2 = n;
			_tmp$3 = $ifaceNil;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
    		if (!($interfaceIsEqual(d.err, $ifaceNil))) {
    			_tmp$4 = 0;
			_tmp$5 = d.err;
			n = _tmp$4;
			err = _tmp$5;
			$s = -1; return [n, err];
    		}
  )~		nn = $imul((_q = p.$length / 5, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 8);
    		if (nn < 8) {
  )�			nn = 8;
    		}
    		if (nn > 1024) {
  )�			nn = 1024;
    		}
  *		min = 0;
  *'		expectsPadding = false;
    		if (d.enc.padChar === -1) {
  *^			min = 1;
  *h			expectsPadding = false;
    		} else {
  *�			min = 8 - d.nbuf >> 0;
  *�			expectsPadding = true;
    		}
  *�		_r = readEncodedData(d.r, $subslice(new sliceType(d.buf), d.nbuf, nn), min, expectsPadding); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		nn = _tuple[0];
		d.err = _tuple[1];
  +		d.nbuf = d.nbuf + (nn) >> 0;
    		if (d.nbuf < min) {
    			_tmp$6 = 0;
			_tmp$7 = d.err;
			n = _tmp$6;
			err = _tmp$7;
			$s = -1; return [n, err];
    		}
  +}		nr = 0;
    		if (d.enc.padChar === -1) {
  +�			nr = d.nbuf;
    		} else {
  +�			nr = $imul((_q$1 = d.nbuf / 8, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 8);
    		}
  +�		nw = d.enc.DecodedLen(d.nbuf);
    		if (nw > p.$length) {
  ,			_tuple$1 = d.enc.decode($subslice(new sliceType(d.outbuf), 0), $subslice(new sliceType(d.buf), 0, nr));
			nw = _tuple$1[0];
			d.end = _tuple$1[1];
			err = _tuple$1[2];
  ,F			d.out = $subslice(new sliceType(d.outbuf), 0, nw);
  ,_			n = $copySlice(p, d.out);
  ,t			d.out = $subslice(d.out, n);
    		} else {
  ,�			_tuple$2 = d.enc.decode(p, $subslice(new sliceType(d.buf), 0, nr));
			n = _tuple$2[0];
			d.end = _tuple$2[1];
			err = _tuple$2[2];
    		}
  ,�		d.nbuf = d.nbuf - (nr) >> 0;
  ,�		i = 0;
		while (true) {
			if (!(i < d.nbuf)) { break; }
  ,�			(x$2 = d.buf, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i] = (x = d.buf, x$1 = i + nr >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1]))));
  ,�			i = i + (1) >> 0;
    		}
    		if (!($interfaceIsEqual(err, $ifaceNil)) && ($interfaceIsEqual(d.err, $ifaceNil) || $interfaceIsEqual(d.err, io.EOF))) {
  -D			d.err = err;
    		}
    		if (d.out.$length > 0) {
    			_tmp$8 = n;
			_tmp$9 = $ifaceNil;
			n = _tmp$8;
			err = _tmp$9;
			$s = -1; return [n, err];
    		}
    		_tmp$10 = n;
		_tmp$11 = d.err;
		n = _tmp$10;
		err = _tmp$11;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.Read }; } $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.d = d; $f.err = err; $f.expectsPadding = expectsPadding; $f.i = i; $f.min = min; $f.n = n; $f.nn = nn; $f.nr = nr; $f.nw = nw; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.Read = function(p) { return this.$val.Read(p); };
decoderencoding/base32.decoderencoding/base32.decode~encoding/base32.readEncodedDataencoding/base32.sliceTypeio.EOF encoding/base32.stripNewlinesencoding/base32stripNewlines stripNewlines�j	stripNewlines = function(dst, src) {
		var _i, _ref, b, dst, offset, src;
  /g		offset = 0;
  /t		_ref = src;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ((b === 13) || (b === 10)) {
  /�				_i++;
				continue;
    			}
  /�			((offset < 0 || offset >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + offset] = b);
  /�			offset = offset + (1) >> 0;
    			_i++;
		}
  /�		return offset;
    	};
stripNewlinesencoding/base32.stripNewlines .(*encoding/base32.newlineFilteringReader).Read �>	newlineFilteringReader.ptr.prototype.Read = function(p) {
		var _r, _r$1, _tuple, _tuple$1, err, n, offset, p, r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; n = $f.n; offset = $f.offset; p = $f.p; r = $f.r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  0,		_r = r.wrapped.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  0I		/* while (true) { */ case 2:
			/* if (!(n > 0)) { break; } */ if(!(n > 0)) { $s = 3; continue; }
  0W			s = $subslice(p, 0, n);
  0e			offset = stripNewlines(s, s);
    			if (!($interfaceIsEqual(err, $ifaceNil)) || offset > 0) {
  0�				$s = -1; return [offset, err];
    			}
  0�			_r$1 = r.wrapped.Read(p); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			n = _tuple$1[0];
			err = _tuple$1[1];
    		$s = 2; continue;
		case 3:
  1		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newlineFilteringReader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.n = n; $f.offset = offset; $f.p = p; $f.r = r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	newlineFilteringReader.prototype.Read = function(p) { return this.$val.Read(p); };
newlineFilteringReader&encoding/base32.newlineFilteringReaderencoding/base32.stripNewlines encoding/base32.NewDecoderencoding/base32
NewDecoder 
NewDecoder��	NewDecoder = function(enc, r) {
		var enc, r;
  1�		return new decoder.ptr($ifaceNil, enc, new newlineFilteringReader.ptr(r), false, arrayType$4.zero(), 0, sliceType.nil, arrayType$5.zero());
    	};
	$pkg.NewDecoder = NewDecoder;

NewDecoderencoding/base32.NewDecoderencoding/base32.arrayType$4encoding/base32.arrayType$5encoding/base32.decoder&encoding/base32.newlineFilteringReaderencoding/base32.ptrTypeencoding/base32.sliceType &(*encoding/base32.Encoding).DecodedLen ��	Encoding.ptr.prototype.DecodedLen = function(n) {
		var _q, _q$1, enc, n;
		enc = this;
    		if (enc.padChar === -1) {
  2�			return (_q = ($imul(n, 5)) / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  2�		return $imul((_q$1 = n / 8, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), 5);
    	};
	Encoding.prototype.DecodedLen = function(n) { return this.$val.DecodedLen(n); };
Encodingencoding/base32.Encoding �b{"Base":12993,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/base32/base32.go","Base":1,"Size":12991,"Lines":[0,55,109,159,160,231,246,247,256,262,273,275,276,279,292,296,297,365,432,492,549,572,592,613,629,631,632,640,693,730,732,733,786,839,840,909,944,989,1014,1064,1067,1068,1088,1116,1140,1141,1182,1206,1209,1246,1282,1285,1295,1297,1298,1360,1373,1414,1415,1484,1516,1557,1558,1620,1692,1752,1823,1840,1898,1957,1984,1987,1988,2028,2066,2108,2112,2115,2116,2139,2152,2154,2155,2158,2169,2173,2174,2228,2266,2269,2327,2388,2441,2488,2508,2524,2525,2574,2599,2619,2630,2654,2676,2691,2701,2733,2764,2786,2801,2811,2843,2874,2889,2899,2931,2962,2993,3008,3018,3050,3072,3076,3077,3128,3147,3164,3214,3246,3278,3310,3342,3374,3406,3438,3470,3481,3512,3545,3550,3554,3555,3582,3602,3635,3645,3650,3651,3681,3702,3733,3764,3786,3818,3841,3874,3907,3914,3920,3925,3926,3935,3939,3940,3956,3972,3975,3977,3978,4032,4089,4136,4158,4178,4180,4181,4203,4215,4231,4247,4303,4346,4380,4382,4383,4438,4457,4475,4478,4479,4499,4516,4528,4573,4597,4609,4613,4622,4634,4652,4662,4666,4703,4757,4776,4780,4793,4796,4797,4824,4843,4870,4889,4904,4920,4924,4959,5020,5039,5043,5053,5066,5069,5070,5091,5122,5140,5143,5160,5173,5181,5183,5184,5238,5291,5325,5382,5415,5458,5499,5512,5556,5559,5573,5575,5576,5643,5715,5775,5843,5872,5933,5966,5968,5969,6034,6069,6114,6145,6168,6171,6195,6197,6198,6201,6212,6216,6217,6246,6247,6291,6370,6372,6373,6443,6511,6581,6638,6714,6758,6777,6778,6789,6807,6808,6836,6882,6901,6913,6914,6937,6938,6960,6994,7050,7111,7117,7182,7206,7216,7221,7237,7254,7312,7361,7387,7414,7460,7466,7499,7553,7580,7646,7653,7659,7683,7758,7834,7906,7979,8050,8095,8156,8162,8172,8177,8208,8232,8292,8297,8304,8308,8309,8366,8379,8395,8405,8443,8450,8465,8475,8529,8536,8551,8561,8602,8609,8624,8634,8688,8695,8710,8720,8761,8768,8772,8784,8787,8807,8809,8810,8874,8943,9011,9074,9122,9188,9219,9249,9287,9295,9297,9298,9368,9430,9448,9478,9517,9538,9540,9541,9563,9577,9595,9613,9654,9691,9703,9745,9772,9774,9775,9872,9901,9914,9942,9952,9955,10008,10048,10076,10079,10139,10215,10230,10289,10317,10320,10328,10330,10331,10385,10433,10454,10475,10495,10518,10537,10541,10557,10560,10561,10580,10598,10601,10602,10620,10642,10655,10664,10667,10689,10707,10710,10711,10772,10785,10810,10843,10853,10878,10888,10907,10931,10934,10935,11008,11022,11041,11059,11062,11063,11127,11139,11172,11186,11196,11218,11221,11253,11254,11272,11331,11356,11377,11397,11407,11454,11457,11471,11502,11527,11530,11531,11585,11599,11602,11603,11624,11690,11760,11831,11881,11897,11900,11901,11918,11920,11921,11958,11977,11979,11980,12047,12091,12133,12146,12171,12201,12213,12217,12235,12246,12249,12264,12266,12267,12330,12359,12372,12386,12418,12450,12472,12476,12529,12558,12561,12576,12578,12579,12633,12689,12747,12749,12750,12820,12872,12917,12948,12967,12970,12971,12989],"Infos":null}]}
 