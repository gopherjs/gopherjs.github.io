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
GoLinkname�� Implementation�� 	Reference��   ����encoding/asn1asn1byteserrorsfmtmathmath/bigreflectsortstrconvstringstimeunicode/utf16unicode/utf8�ti �� Bytes	BitLengthAtb	BitStringi
RightAlignvalparamsRawValueEqualoiObjectIdentifierotherStringClassTag
IsCompound	FullBytesMsgErroreStructuralErrorSyntaxErrorresterrasn1ClassApplicationClassContextSpecificClassPrivateClassUniversal
EnumeratedFlagMarshalMarshalWithParams	NullBytesNullRawValue
RawContentTagBMPStringTagBitString
TagBooleanTagEnumTagGeneralStringTagGeneralizedTimeTagIA5String
TagIntegerTagNullTagNumericStringTagOIDTagOctetStringTagPrintableStringTagSequenceTagSetTagT61String
TagUTCTimeTagUTF8String	UnmarshalUnmarshalWithParams          T "  /      " /   2C C C C  T  T      F  -h  l      F  -| 1  �   V � 8 V � J T � A G� [�     a G�   T �   h   n   r    �   }�  T �   �   � T � � ��     �   � T � � ��   C <C C C C 6C 0C ,C C 
C $C C C &C  C "C (C .C    F  � -� �� �    F  � -� 1 �� �  � $�0�4�8�<�@�D�N�b�v�}J���8����������������������������������������������� bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  big	big = $packages["math/big"];
��    		$r = big.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  time	time = $packages["time"];
��    		$r = time.$init(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf16%	utf16 = $packages["unicode/utf16"];
��    		$r = utf16.$init(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  StructuralError��	StructuralError = $pkg.StructuralError = $newType(0, $kindStruct, "asn1.StructuralError", true, "encoding/asn1", true, function(Msg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Msg = "";
			return;
		}
		this.Msg = Msg_;
	});
l	StructuralError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
q	StructuralError.init("", [{prop: "Msg", name: "Msg", embedded: false, exported: true, typ: $String, tag: ""}]);
StructuralErrorencoding/asn1.StructuralError  SyntaxError��	SyntaxError = $pkg.SyntaxError = $newType(0, $kindStruct, "asn1.SyntaxError", true, "encoding/asn1", true, function(Msg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Msg = "";
			return;
		}
		this.Msg = Msg_;
	});
h	SyntaxError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
m	SyntaxError.init("", [{prop: "Msg", name: "Msg", embedded: false, exported: true, typ: $String, tag: ""}]);
SyntaxErrorencoding/asn1.SyntaxError  	BitString�9	BitString = $pkg.BitString = $newType(0, $kindStruct, "asn1.BitString", true, "encoding/asn1", true, function(Bytes_, BitLength_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Bytes = sliceType.nil;
			this.BitLength = 0;
			return;
		}
		this.Bytes = Bytes_;
		this.BitLength = BitLength_;
	});
��	BitString.methods = [{prop: "At", name: "At", pkg: "", typ: $funcType([$Int], [$Int], false)}, {prop: "RightAlign", name: "RightAlign", pkg: "", typ: $funcType([], [sliceType], false)}];
��	BitString.init("", [{prop: "Bytes", name: "Bytes", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "BitLength", name: "BitLength", embedded: false, exported: true, typ: $Int, tag: ""}]);
	BitStringencoding/asn1.BitStringencoding/asn1.sliceType  ObjectIdentifier��	ObjectIdentifier = $pkg.ObjectIdentifier = $newType(12, $kindSlice, "asn1.ObjectIdentifier", true, "encoding/asn1", true, null);
��	ObjectIdentifier.methods = [{prop: "Equal", name: "Equal", pkg: "", typ: $funcType([ObjectIdentifier], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
	ObjectIdentifier.init($Int);
ObjectIdentifierencoding/asn1.ObjectIdentifier  
Enumeratedm	Enumerated = $pkg.Enumerated = $newType(4, $kindInt, "asn1.Enumerated", true, "encoding/asn1", true, null);

Enumeratedencoding/asn1.Enumerated  Flag\	Flag = $pkg.Flag = $newType(1, $kindBool, "asn1.Flag", true, "encoding/asn1", true, null);
Flagencoding/asn1.Flag  asteriskFlagu	asteriskFlag = $pkg.asteriskFlag = $newType(1, $kindBool, "asn1.asteriskFlag", true, "encoding/asn1", false, null);
asteriskFlagencoding/asn1.asteriskFlag  ampersandFlagx	ampersandFlag = $pkg.ampersandFlag = $newType(1, $kindBool, "asn1.ampersandFlag", true, "encoding/asn1", false, null);
ampersandFlagencoding/asn1.ampersandFlag  RawValue��	RawValue = $pkg.RawValue = $newType(0, $kindStruct, "asn1.RawValue", true, "encoding/asn1", true, function(Class_, Tag_, IsCompound_, Bytes_, FullBytes_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Class = 0;
			this.Tag = 0;
			this.IsCompound = false;
			this.Bytes = sliceType.nil;
			this.FullBytes = sliceType.nil;
			return;
		}
		this.Class = Class_;
		this.Tag = Tag_;
		this.IsCompound = IsCompound_;
		this.Bytes = Bytes_;
		this.FullBytes = FullBytes_;
	});
��	RawValue.init("", [{prop: "Class", name: "Class", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Tag", name: "Tag", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "IsCompound", name: "IsCompound", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "Bytes", name: "Bytes", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "FullBytes", name: "FullBytes", embedded: false, exported: true, typ: sliceType, tag: ""}]);
RawValueencoding/asn1.RawValueencoding/asn1.sliceType  
RawContentp	RawContent = $pkg.RawContent = $newType(12, $kindSlice, "asn1.RawContent", true, "encoding/asn1", true, null);
	RawContent.init($Uint8);

RawContentencoding/asn1.RawContent  invalidUnmarshalError�	invalidUnmarshalError = $pkg.invalidUnmarshalError = $newType(0, $kindStruct, "asn1.invalidUnmarshalError", true, "encoding/asn1", false, function(Type_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Type = $ifaceNil;
			return;
		}
		this.Type = Type_;
	});
g	ptrType$12.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
~	invalidUnmarshalError.init("", [{prop: "Type", name: "Type", embedded: false, exported: true, typ: reflect.Type, tag: ""}]);
invalidUnmarshalError#encoding/asn1.invalidUnmarshalErrorencoding/asn1.ptrType$12reflect.Type  tagAndLength��	tagAndLength = $pkg.tagAndLength = $newType(0, $kindStruct, "asn1.tagAndLength", true, "encoding/asn1", false, function(class$0_, tag_, length_, isCompound_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.class$0 = 0;
			this.tag = 0;
			this.length = 0;
			this.isCompound = false;
			return;
		}
		this.class$0 = class$0_;
		this.tag = tag_;
		this.length = length_;
		this.isCompound = isCompound_;
	});
��	tagAndLength.init("encoding/asn1", [{prop: "class$0", name: "class", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "tag", name: "tag", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "length", name: "length", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "isCompound", name: "isCompound", embedded: false, exported: false, typ: $Bool, tag: ""}]);
tagAndLengthencoding/asn1.tagAndLength  fieldParameters�l	fieldParameters = $pkg.fieldParameters = $newType(0, $kindStruct, "asn1.fieldParameters", true, "encoding/asn1", false, function(optional_, explicit_, application_, private$3_, defaultValue_, tag_, stringType_, timeType_, set_, omitEmpty_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.optional = false;
			this.explicit = false;
			this.application = false;
			this.private$3 = false;
			this.defaultValue = ptrType$3.nil;
			this.tag = ptrType$4.nil;
			this.stringType = 0;
			this.timeType = 0;
			this.set = false;
			this.omitEmpty = false;
			return;
		}
		this.optional = optional_;
		this.explicit = explicit_;
		this.application = application_;
		this.private$3 = private$3_;
		this.defaultValue = defaultValue_;
		this.tag = tag_;
		this.stringType = stringType_;
		this.timeType = timeType_;
		this.set = set_;
		this.omitEmpty = omitEmpty_;
	});
��	fieldParameters.init("encoding/asn1", [{prop: "optional", name: "optional", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "explicit", name: "explicit", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "application", name: "application", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "private$3", name: "private", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "defaultValue", name: "defaultValue", embedded: false, exported: false, typ: ptrType$3, tag: ""}, {prop: "tag", name: "tag", embedded: false, exported: false, typ: ptrType$4, tag: ""}, {prop: "stringType", name: "stringType", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "timeType", name: "timeType", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "set", name: "set", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "omitEmpty", name: "omitEmpty", embedded: false, exported: false, typ: $Bool, tag: ""}]);
fieldParametersencoding/asn1.fieldParametersencoding/asn1.ptrType$3encoding/asn1.ptrType$4  encoderk	encoder = $pkg.encoder = $newType(8, $kindInterface, "asn1.encoder", true, "encoding/asn1", false, null);
��	encoder.init([{prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}]);
encoderencoding/asn1.encoderencoding/asn1.sliceType  byteEncoders	byteEncoder = $pkg.byteEncoder = $newType(1, $kindUint8, "asn1.byteEncoder", true, "encoding/asn1", false, null);
��	byteEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
byteEncoderencoding/asn1.byteEncoderencoding/asn1.sliceType  bytesEncoderw	bytesEncoder = $pkg.bytesEncoder = $newType(12, $kindSlice, "asn1.bytesEncoder", true, "encoding/asn1", false, null);
��	bytesEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
	bytesEncoder.init($Uint8);
bytesEncoderencoding/asn1.bytesEncoderencoding/asn1.sliceType  stringEncoderz	stringEncoder = $pkg.stringEncoder = $newType(8, $kindString, "asn1.stringEncoder", true, "encoding/asn1", false, null);
��	stringEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
stringEncoderencoding/asn1.sliceTypeencoding/asn1.stringEncoder  multiEncoderw	multiEncoder = $pkg.multiEncoder = $newType(12, $kindSlice, "asn1.multiEncoder", true, "encoding/asn1", false, null);
��	multiEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
	multiEncoder.init(encoder);
multiEncoderencoding/asn1.encoderencoding/asn1.multiEncoderencoding/asn1.sliceType  
setEncoderq	setEncoder = $pkg.setEncoder = $newType(12, $kindSlice, "asn1.setEncoder", true, "encoding/asn1", false, null);
��	setEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
	setEncoder.init(encoder);

setEncoderencoding/asn1.encoderencoding/asn1.setEncoderencoding/asn1.sliceType  taggedEncoder�y	taggedEncoder = $pkg.taggedEncoder = $newType(0, $kindStruct, "asn1.taggedEncoder", true, "encoding/asn1", false, function(scratch_, tag_, body_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.scratch = arrayType$1.zero();
			this.tag = $ifaceNil;
			this.body = $ifaceNil;
			return;
		}
		this.scratch = scratch_;
		this.tag = tag_;
		this.body = body_;
	});
��	ptrType$13.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
�5	taggedEncoder.init("encoding/asn1", [{prop: "scratch", name: "scratch", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "tag", name: "tag", embedded: false, exported: false, typ: encoder, tag: ""}, {prop: "body", name: "body", embedded: false, exported: false, typ: encoder, tag: ""}]);
taggedEncoderencoding/asn1.arrayType$1encoding/asn1.encoderencoding/asn1.ptrType$13encoding/asn1.sliceTypeencoding/asn1.taggedEncoder  int64Encoderv	int64Encoder = $pkg.int64Encoder = $newType(8, $kindInt64, "asn1.int64Encoder", true, "encoding/asn1", false, null);
��	int64Encoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
int64Encoderencoding/asn1.int64Encoderencoding/asn1.sliceType  bitStringEncoder�O	bitStringEncoder = $pkg.bitStringEncoder = $newType(0, $kindStruct, "asn1.bitStringEncoder", true, "encoding/asn1", false, function(Bytes_, BitLength_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Bytes = sliceType.nil;
			this.BitLength = 0;
			return;
		}
		this.Bytes = Bytes_;
		this.BitLength = BitLength_;
	});
��	bitStringEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
��	bitStringEncoder.init("", [{prop: "Bytes", name: "Bytes", embedded: false, exported: true, typ: sliceType, tag: ""}, {prop: "BitLength", name: "BitLength", embedded: false, exported: true, typ: $Int, tag: ""}]);
bitStringEncoderencoding/asn1.bitStringEncoderencoding/asn1.sliceType  
oidEncoderq	oidEncoder = $pkg.oidEncoder = $newType(12, $kindSlice, "asn1.oidEncoder", true, "encoding/asn1", false, null);
��	oidEncoder.methods = [{prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Encode", name: "Encode", pkg: "", typ: $funcType([sliceType], [], false)}];
	oidEncoder.init($Int);

oidEncoderencoding/asn1.oidEncoderencoding/asn1.sliceType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType$	ptrType = $ptrType(time.Location);
ptrTypetime.Location  	ptrType$1 	ptrType$1 = $ptrType(big.Int);
	ptrType$1math/big.Int  sliceType$1!	sliceType$1 = $sliceType($Int);
sliceType$1  sliceType$2,	sliceType$2 = $sliceType($emptyInterface);
sliceType$2  sliceType$3$	sliceType$3 = $sliceType($Uint16);
sliceType$3  	ptrType$2&	ptrType$2 = $ptrType(reflect.rtype);
	ptrType$2reflect.rtype  	ptrType$3	ptrType$3 = $ptrType($Int64);
	ptrType$3  	ptrType$4	ptrType$4 = $ptrType($Int);
	ptrType$4  	ptrType$5!	ptrType$5 = $ptrType(RawValue);
	ptrType$5encoding/asn1.RawValue  	ptrType$6)	ptrType$6 = $ptrType(ObjectIdentifier);
	ptrType$6encoding/asn1.ObjectIdentifier  	ptrType$7"	ptrType$7 = $ptrType(BitString);
	ptrType$7encoding/asn1.BitString  	ptrType$8"	ptrType$8 = $ptrType(time.Time);
	ptrType$8	time.Time  	ptrType$9#	ptrType$9 = $ptrType(Enumerated);
	ptrType$9encoding/asn1.Enumerated  
ptrType$10	ptrType$10 = $ptrType(Flag);

ptrType$10encoding/asn1.Flag  
ptrType$11#	ptrType$11 = $ptrType(ptrType$1);

ptrType$11encoding/asn1.ptrType$1  sliceType$4&	sliceType$4 = $sliceType(sliceType);
sliceType$4encoding/asn1.sliceType  sliceType$5$	sliceType$5 = $sliceType(encoder);
sliceType$5encoding/asn1.encoder  	arrayType$	arrayType = $arrayType($Uint8, 4);
	arrayType  arrayType$1&	arrayType$1 = $arrayType($Uint8, 8);
arrayType$1  
ptrType$12/	ptrType$12 = $ptrType(invalidUnmarshalError);

ptrType$12#encoding/asn1.invalidUnmarshalError  
ptrType$13'	ptrType$13 = $ptrType(taggedEncoder);

ptrType$13encoding/asn1.taggedEncoder  bigOnebigOne  NullRawValue  	NullBytes  bitStringTypebitStringType  objectIdentifierTypeobjectIdentifierType  enumeratedTypeenumeratedType  flagTypeflagType  timeTypetimeType  rawValueTyperawValueType  rawContentsTyperawContentsType  
bigIntType
bigIntType  byte00Encoderbyte00Encoder  byteFFEncoderbyteFFEncoder  .  e		bigOne = big.NewInt(new $Int64(0, 1));
encoding/asn1.bigOnemath/big.NewInt  xm  EC		bitStringType = reflect.TypeOf((x = new BitString.ptr(sliceType.nil, 0), new x.constructor.elem(x)));
encoding/asn1.BitStringencoding/asn1.bitStringTypeencoding/asn1.sliceTypereflect.TypeOf  H  Ew		objectIdentifierType = reflect.TypeOf(new ObjectIdentifier([]));
encoding/asn1.ObjectIdentifier"encoding/asn1.objectIdentifierTypereflect.TypeOf  ;  E�		enumeratedType = reflect.TypeOf(new Enumerated(0));
encoding/asn1.Enumeratedencoding/asn1.enumeratedTypereflect.TypeOf  3  E�		flagType = reflect.TypeOf(new Flag(false));
encoding/asn1.Flagencoding/asn1.flagTypereflect.TypeOf  x$1��  F		timeType = reflect.TypeOf((x$1 = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType.nil), new x$1.constructor.elem(x$1)));
encoding/asn1.ptrTypeencoding/asn1.timeTypereflect.TypeOftime.Location	time.Time  x$2��  FP		rawValueType = reflect.TypeOf((x$2 = new RawValue.ptr(0, 0, false, sliceType.nil, sliceType.nil), new x$2.constructor.elem(x$2)));
encoding/asn1.RawValueencoding/asn1.rawValueTypeencoding/asn1.sliceTypereflect.TypeOf  ;  F�		rawContentsType = reflect.TypeOf((RawContent.nil));
encoding/asn1.RawContentencoding/asn1.rawContentsTypereflect.TypeOf  I  F�		bigIntType = reflect.TypeOf(new big.Int.ptr(false, big.nat.nil));
encoding/asn1.bigIntTypemath/big.Intmath/big.natreflect.TypeOf  X  �		$pkg.NullRawValue = new RawValue.ptr(0, 5, false, sliceType.nil, sliceType.nil);
NullRawValueencoding/asn1.NullRawValueencoding/asn1.RawValueencoding/asn1.sliceType  /  h		$pkg.NullBytes = new sliceType([5, 0]);
	NullBytesencoding/asn1.NullBytesencoding/asn1.sliceType  +  �p		byte00Encoder = new byteEncoder(0);
byte00Encoderencoding/asn1.byte00Encoderencoding/asn1.byteEncoder  -  ��		byteFFEncoder = new byteEncoder(255);
byteFFEncoderencoding/asn1.byteEncoderencoding/asn1.byteFFEncoder %(encoding/asn1.StructuralError).Error ��	StructuralError.ptr.prototype.Error = function() {
		var e;
		e = this;
  		return "asn1: structure error: " + e.Msg;
    	};
	StructuralError.prototype.Error = function() { return this.$val.Error(); };
StructuralErrorencoding/asn1.StructuralError !(encoding/asn1.SyntaxError).Error ��	SyntaxError.ptr.prototype.Error = function() {
		var e;
		e = this;
  �		return "asn1: syntax error: " + e.Msg;
    	};
	SyntaxError.prototype.Error = function() { return this.$val.Error(); };
SyntaxErrorencoding/asn1.SyntaxError encoding/asn1.parseBoolencoding/asn1	parseBool 	parseBool��	parseBool = function(bytes$1) {
		var _1, bytes$1, err, ret, x$3, x$4;
		ret = false;
		err = $ifaceNil;
    		if (!((bytes$1.$length === 1))) {
  {			err = (x$3 = new SyntaxError.ptr("invalid boolean"), new x$3.constructor.elem(x$3));
  �			return [ret, err];
    		}
    		_1 = (0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]);
    		if (_1 === (0)) {
  �			ret = false;
    		} else if (_1 === (255)) {
  �			ret = true;
    		} else {
  �			err = (x$4 = new SyntaxError.ptr("invalid boolean"), new x$4.constructor.elem(x$4));
    		}
  �		return [ret, err];
    	};
	parseBoolencoding/asn1.SyntaxErrorencoding/asn1.parseBool encoding/asn1.checkIntegerencoding/asn1checkInteger checkInteger��	checkInteger = function(bytes$1) {
		var bytes$1, x$3, x$4;
    		if (bytes$1.$length === 0) {
  �			return (x$3 = new StructuralError.ptr("empty integer"), new x$3.constructor.elem(x$3));
    		}
    		if (bytes$1.$length === 1) {
  �			return $ifaceNil;
    		}
    		if ((((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) === 0) && ((((1 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 1]) & 128) >>> 0) === 0)) || (((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) === 255) && ((((1 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 1]) & 128) >>> 0) === 128))) {
  	T			return (x$4 = new StructuralError.ptr("integer not minimally-encoded"), new x$4.constructor.elem(x$4));
    		}
  	�		return $ifaceNil;
    	};
checkIntegerencoding/asn1.StructuralErrorencoding/asn1.checkInteger encoding/asn1.parseInt64encoding/asn1
parseInt64 
parseInt64�P	parseInt64 = function(bytes$1) {
		var bytes$1, bytesRead, err, ret, x$3, x$4;
		ret = new $Int64(0, 0);
		err = $ifaceNil;
  
6		err = checkInteger(bytes$1);
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  
c			return [ret, err];
    		}
    		if (bytes$1.$length > 8) {
  
�			err = (x$3 = new StructuralError.ptr("integer too large"), new x$3.constructor.elem(x$3));
  
�			return [ret, err];
    		}
  
�		bytesRead = 0;
		while (true) {
			if (!(bytesRead < bytes$1.$length)) { break; }
  #			ret = $shiftLeft64(ret, (8));
  /			ret = (x$4 = (new $Int64(0, ((bytesRead < 0 || bytesRead >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + bytesRead]))), new $Int64(ret.$high | x$4.$high, (ret.$low | x$4.$low) >>> 0));
  			bytesRead = bytesRead + (1) >> 0;
    		}
  �		ret = $shiftLeft64(ret, ((64 - (((bytes$1.$length << 24 >>> 24)) * 8 << 24 >>> 24) << 24 >>> 24)));
  �		ret = $shiftRightInt64(ret, ((64 - (((bytes$1.$length << 24 >>> 24)) * 8 << 24 >>> 24) << 24 >>> 24)));
  �		return [ret, err];
    	};

parseInt64encoding/asn1.StructuralErrorencoding/asn1.checkIntegerencoding/asn1.parseInt64 encoding/asn1.parseInt32encoding/asn1
parseInt32 
parseInt32��	parseInt32 = function(bytes$1) {
		var _tuple, bytes$1, err, err$1, ret64, x$3, x$4;
  l		err = checkInteger(bytes$1);
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			return [0, err];
    		}
  �		_tuple = parseInt64(bytes$1);
		ret64 = _tuple[0];
		err$1 = _tuple[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �			return [0, err$1];
    		}
    		if (!((x$3 = (new $Int64(0, (((ret64.$low + ((ret64.$high >> 31) * 4294967296)) >> 0)))), (ret64.$high === x$3.$high && ret64.$low === x$3.$low)))) {
  			return [0, (x$4 = new StructuralError.ptr("integer too large"), new x$4.constructor.elem(x$4))];
    		}
  E		return [(((ret64.$low + ((ret64.$high >> 31) * 4294967296)) >> 0)), $ifaceNil];
    	};

parseInt32encoding/asn1.StructuralErrorencoding/asn1.checkIntegerencoding/asn1.parseInt32encoding/asn1.parseInt64 encoding/asn1.parseBigIntencoding/asn1parseBigInt parseBigInt�	parseBigInt = function(bytes$1) {
		var _i, _r, _ref, bytes$1, err, i, notBytes, ret, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; bytes$1 = $f.bytes$1; err = $f.err; i = $f.i; notBytes = $f.notBytes; ret = $f.ret; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		err = checkInteger(bytes$1);
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  @			$s = -1; return [ptrType$1.nil, err];
    		}
  T		ret = new big.Int.ptr(false, big.nat.nil);
  i		/* */ if (bytes$1.$length > 0 && ((((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) & 128) >>> 0) === 128)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (bytes$1.$length > 0 && ((((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) & 128) >>> 0) === 128)) { */ case 1:
  �			notBytes = $makeSlice(sliceType, bytes$1.$length);
  �			_ref = notBytes;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
  �				((i < 0 || i >= notBytes.$length) ? ($throwRuntimeError("index out of range"), undefined) : notBytes.$array[notBytes.$offset + i] = (~((i < 0 || i >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + i]) << 24 >>> 24));
    				_i++;
			}
  			ret.SetBytes(notBytes);
  3			_r = ret.Add(ret, bigOne); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
  J			ret.Neg(ret);
  Y			$s = -1; return [ret, $ifaceNil];
    		/* } */ case 2:
  m		ret.SetBytes(bytes$1);
  �		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseBigInt }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.bytes$1 = bytes$1; $f.err = err; $f.i = i; $f.notBytes = notBytes; $f.ret = ret; $f.$s = $s; $f.$r = $r; return $f;
	};
parseBigIntencoding/asn1.bigOneencoding/asn1.checkIntegerencoding/asn1.parseBigIntencoding/asn1.ptrType$1encoding/asn1.sliceTypemath/big.Intmath/big.nat (encoding/asn1.BitString).At ��	BitString.ptr.prototype.At = function(i) {
		var _q, _r, b, i, x$3, x$4, y, y$1;
		b = this;
    		if (i < 0 || i >= b.BitLength) {
  �			return 0;
    		}
  �		x$3 = (_q = i / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  �		y = 7 - (((_r = i % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) >>> 0)) >>> 0;
  �		return ((((y$1 = y, y$1 < 32 ? ((x$4 = b.Bytes, ((x$3 < 0 || x$3 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$3])) >>> y$1) : 0) << 24 >>> 24) >> 0)) & 1;
    	};
	BitString.prototype.At = function(i) { return this.$val.At(i); };
	BitStringencoding/asn1.BitString $(encoding/asn1.BitString).RightAlign �|	BitString.ptr.prototype.RightAlign = function() {
		var _r, a, b, i, shift, x$3, x$4, x$5, x$6, y, y$1, y$2;
		b = this;
  w		shift = (((8 - ((_r = b.BitLength % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero"))) >> 0) >>> 0));
    		if ((shift === 8) || (b.Bytes.$length === 0)) {
  �			return b.Bytes;
    		}
  �		a = $makeSlice(sliceType, b.Bytes.$length);
  �		(0 >= a.$length ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + 0] = ((y = shift, y < 32 ? ((x$3 = b.Bytes, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])) >>> y) : 0) << 24 >>> 24));
  		i = 1;
		while (true) {
			if (!(i < b.Bytes.$length)) { break; }
  ;			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = ((y$1 = ((8 - shift >>> 0)), y$1 < 32 ? ((x$4 = b.Bytes, x$5 = i - 1 >> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5])) << y$1) : 0) << 24 >>> 24));
  `			((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i] = ((((i < 0 || i >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + i]) | (((y$2 = shift, y$2 < 32 ? ((x$6 = b.Bytes, ((i < 0 || i >= x$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$6.$array[x$6.$offset + i])) >>> y$2) : 0) << 24 >>> 24))) >>> 0));
  3			i = i + (1) >> 0;
    		}
  �		return a;
    	};
	BitString.prototype.RightAlign = function() { return this.$val.RightAlign(); };
	BitStringencoding/asn1.BitStringencoding/asn1.sliceType encoding/asn1.parseBitStringencoding/asn1parseBitString parseBitString��	parseBitString = function(bytes$1) {
		var bytes$1, err, paddingBits, ret, x$3, x$4, x$5, y;
		ret = new BitString.ptr(sliceType.nil, 0);
		err = $ifaceNil;
    		if (bytes$1.$length === 0) {
  ;			err = (x$3 = new SyntaxError.ptr("zero length BIT STRING"), new x$3.constructor.elem(x$3));
  i			return [ret, err];
    		}
  t		paddingBits = (((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) >> 0));
    		if (paddingBits > 7 || (bytes$1.$length === 1) && paddingBits > 0 || !(((((x$4 = bytes$1.$length - 1 >> 0, ((x$4 < 0 || x$4 >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + x$4])) & (((((y = (0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]), y < 32 ? (1 << y) : 0) << 24 >>> 24)) - 1 << 24 >>> 24))) >>> 0) === 0))) {
  			err = (x$5 = new SyntaxError.ptr("invalid padding bits in BIT STRING"), new x$5.constructor.elem(x$5));
  ;			return [ret, err];
    		}
  F		ret.BitLength = ($imul(((bytes$1.$length - 1 >> 0)), 8)) - paddingBits >> 0;
  v		ret.Bytes = $subslice(bytes$1, 1);
  �		return [ret, err];
    	};
parseBitStringencoding/asn1.BitStringencoding/asn1.SyntaxErrorencoding/asn1.parseBitStringencoding/asn1.sliceType &(encoding/asn1.ObjectIdentifier).Equal ��	ObjectIdentifier.prototype.Equal = function(other) {
		var i, oi, other;
		oi = this;
    		if (!((oi.$length === other.$length))) {
  �			return false;
    		}
  �		i = 0;
		while (true) {
			if (!(i < oi.$length)) { break; }
    			if (!((((i < 0 || i >= oi.$length) ? ($throwRuntimeError("index out of range"), undefined) : oi.$array[oi.$offset + i]) === ((i < 0 || i >= other.$length) ? ($throwRuntimeError("index out of range"), undefined) : other.$array[other.$offset + i])))) {
  �				return false;
    			}
  �			i = i + (1) >> 0;
    		}
  �		return true;
    	};
	$ptrType(ObjectIdentifier).prototype.Equal = function(other) { return this.$get().Equal(other); };
ObjectIdentifierencoding/asn1.ObjectIdentifier '(encoding/asn1.ObjectIdentifier).String �/	ObjectIdentifier.prototype.String = function() {
		var _i, _ref, i, oi, s, v;
		oi = this;
  ?		s = "";
  J		_ref = oi;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (i > 0) {
  q				s = s + (".");
    			}
  �			s = s + (strconv.Itoa(v));
    			_i++;
		}
  �		return s;
    	};
	$ptrType(ObjectIdentifier).prototype.String = function() { return this.$get().String(); };
ObjectIdentifierencoding/asn1.ObjectIdentifierstrconv.Itoa #encoding/asn1.parseObjectIdentifierencoding/asn1parseObjectIdentifier parseObjectIdentifier�'	parseObjectIdentifier = function(bytes$1) {
		var _q, _r, _tuple, _tuple$1, bytes$1, err, i, offset, s, v, x$3;
		s = ObjectIdentifier.nil;
		err = $ifaceNil;
    		if (bytes$1.$length === 0) {
  �			err = (x$3 = new SyntaxError.ptr("zero length OBJECT IDENTIFIER"), new x$3.constructor.elem(x$3));
  �			return [s, err];
    		}
  �		s = $convertSliceType($makeSlice(sliceType$1, (bytes$1.$length + 1 >> 0)), ObjectIdentifier);
  �		_tuple = parseBase128Int(bytes$1, 0);
		v = _tuple[0];
		offset = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			return [s, err];
    		}
    		if (v < 80) {
  			(0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0] = (_q = v / 40, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
  			(1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1] = (_r = v % 40, _r === _r ? _r : $throwRuntimeError("integer divide by zero")));
    		} else {
  +			(0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0] = 2);
  6			(1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1] = (v - 80 >> 0));
    		}
  I		i = 2;
  Q		while (true) {
			if (!(offset < bytes$1.$length)) { break; }
  t			_tuple$1 = parseBase128Int(bytes$1, offset);
			v = _tuple$1[0];
			offset = _tuple$1[1];
			err = _tuple$1[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				return [s, err];
    			}
  �			((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i] = v);
  l			i = i + (1) >> 0;
    		}
  �		s = $subslice(s, 0, i);
  �		return [s, err];
    	};
parseObjectIdentifierencoding/asn1.ObjectIdentifierencoding/asn1.SyntaxErrorencoding/asn1.parseBase128Int#encoding/asn1.parseObjectIdentifierencoding/asn1.sliceType$1 encoding/asn1.parseBase128Intencoding/asn1parseBase128Int parseBase128Int�d	parseBase128Int = function(bytes$1, initOffset) {
		var b, bytes$1, err, initOffset, offset, ret, ret64, shifted, x$3, x$4, x$5, x$6, x$7;
		ret = 0;
		offset = 0;
		err = $ifaceNil;
  o		offset = initOffset;
  �		ret64 = new $Int64(0, 0);
  �		shifted = 0;
		while (true) {
			if (!(offset < bytes$1.$length)) { break; }
    			if (shifted === 5) {
  X				err = (x$3 = new StructuralError.ptr("base 128 integer too large"), new x$3.constructor.elem(x$3));
  �				return [ret, offset, err];
    			}
  �			ret64 = $shiftLeft64(ret64, (7));
  �			b = ((offset < 0 || offset >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + offset]);
    			if ((shifted === 0) && (b === 128)) {
   ;				err = (x$4 = new SyntaxError.ptr("integer is not minimally encoded"), new x$4.constructor.elem(x$4));
   t				return [ret, offset, err];
    			}
   �			ret64 = (x$5 = (new $Int64(0, ((b & 127) >>> 0))), new $Int64(ret64.$high | x$5.$high, (ret64.$low | x$5.$low) >>> 0));
   �			offset = offset + (1) >> 0;
    			if (((b & 128) >>> 0) === 0) {
   �				ret = (((ret64.$low + ((ret64.$high >> 31) * 4294967296)) >> 0));
    				if ((ret64.$high > 0 || (ret64.$high === 0 && ret64.$low > 2147483647))) {
  !3					err = (x$6 = new StructuralError.ptr("base 128 integer too large"), new x$6.constructor.elem(x$6));
    				}
  !o				return [ret, offset, err];
    			}
  �			shifted = shifted + (1) >> 0;
    		}
  !~		err = (x$7 = new SyntaxError.ptr("truncated base 128 integer"), new x$7.constructor.elem(x$7));
  !�		return [ret, offset, err];
    	};
parseBase128Intencoding/asn1.StructuralErrorencoding/asn1.SyntaxErrorencoding/asn1.parseBase128Int encoding/asn1.parseUTCTimeencoding/asn1parseUTCTime parseUTCTime�J	parseUTCTime = function(bytes$1) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, bytes$1, err, formatStr, ret, s, serialized, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; bytes$1 = $f.bytes$1; err = $f.err; formatStr = $f.formatStr; ret = $f.ret; s = $f.s; serialized = $f.serialized; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ret = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType.nil);
		err = $ifaceNil;
  "		s = ($bytesToString(bytes$1));
  "		formatStr = "0601021504Z0700";
  "8		_r = time.Parse(formatStr, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		time.Time.copy(ret, _tuple[0]);
		err = _tuple[1];
  "]		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  "o			formatStr = "060102150405Z0700";
  "�			_r$1 = time.Parse(formatStr, s); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			time.Time.copy(ret, _tuple$1[0]);
			err = _tuple$1[1];
    		/* } */ case 3:
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  "�			$s = -1; return [ret, err];
    		}
  "�		_r$2 = $clone(ret, time.Time).Format(formatStr); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		serialized = _r$2;
  "�		/* */ if (!(serialized === s)) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (!(serialized === s)) { */ case 6:
  #			_r$3 = fmt.Errorf("asn1: time did not serialize back to the original value and may be invalid: given %q, but serialized as %q", new sliceType$2([new $String(s), new $String(serialized)])); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			err = _r$3;
  #�			$s = -1; return [ret, err];
    		/* } */ case 7:
  #�		_r$4 = $clone(ret, time.Time).Year(); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		/* */ if (_r$4 >= 2050) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if (_r$4 >= 2050) { */ case 9:
  $2			_r$5 = $clone(ret, time.Time).AddDate(-100, 0, 0); /* */ $s = 12; case 12: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			time.Time.copy(ret, _r$5);
    		/* } */ case 10:
  $U		$s = -1; return [ret, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseUTCTime }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.bytes$1 = bytes$1; $f.err = err; $f.formatStr = formatStr; $f.ret = ret; $f.s = s; $f.serialized = serialized; $f.$s = $s; $f.$r = $r; return $f;
	};
parseUTCTimeencoding/asn1.parseUTCTimeencoding/asn1.ptrTypeencoding/asn1.sliceType$2
fmt.Errorf
time.Parse	time.Time "encoding/asn1.parseGeneralizedTimeencoding/asn1parseGeneralizedTime parseGeneralizedTime�n	parseGeneralizedTime = function(bytes$1) {
		var _r, _r$1, _r$2, _tuple, bytes$1, err, ret, s, serialized, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; bytes$1 = $f.bytes$1; err = $f.err; ret = $f.ret; s = $f.s; serialized = $f.serialized; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ret = new time.Time.ptr(new $Uint64(0, 0), new $Int64(0, 0), ptrType.nil);
		err = $ifaceNil;
  %>		s = ($bytesToString(bytes$1));
  %V		_r = time.Parse("20060102150405Z0700", s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		time.Time.copy(ret, _tuple[0]);
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  %�			$s = -1; return [ret, err];
    		}
  %�		_r$1 = $clone(ret, time.Time).Format("20060102150405Z0700"); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		serialized = _r$1;
  %�		/* */ if (!(serialized === s)) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (!(serialized === s)) { */ case 3:
  %�			_r$2 = fmt.Errorf("asn1: time did not serialize back to the original value and may be invalid: given %q, but serialized as %q", new sliceType$2([new $String(s), new $String(serialized)])); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err = _r$2;
    		/* } */ case 4:
  &e		$s = -1; return [ret, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseGeneralizedTime }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.bytes$1 = bytes$1; $f.err = err; $f.ret = ret; $f.s = s; $f.serialized = serialized; $f.$s = $s; $f.$r = $r; return $f;
	};
parseGeneralizedTime"encoding/asn1.parseGeneralizedTimeencoding/asn1.ptrTypeencoding/asn1.sliceType$2
fmt.Errorf
time.Parse	time.Time  encoding/asn1.parseNumericStringencoding/asn1parseNumericString parseNumericString��	parseNumericString = function(bytes$1) {
		var _i, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, b, bytes$1, err, ret, x$3;
		ret = "";
		err = $ifaceNil;
  '#		_ref = bytes$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!isNumeric(b)) {
    				_tmp = "";
				_tmp$1 = (x$3 = new SyntaxError.ptr("NumericString contains invalid character"), new x$3.constructor.elem(x$3));
				ret = _tmp;
				err = _tmp$1;
				return [ret, err];
    			}
    			_i++;
		}
    		_tmp$2 = ($bytesToString(bytes$1));
		_tmp$3 = $ifaceNil;
		ret = _tmp$2;
		err = _tmp$3;
		return [ret, err];
    	};
parseNumericStringencoding/asn1.SyntaxErrorencoding/asn1.isNumeric encoding/asn1.parseNumericString encoding/asn1.isNumericencoding/asn1	isNumeric 	isNumeric]	isNumeric = function(b) {
		var b;
  ((		return 48 <= b && b <= 57 || (b === 32);
    	};
	isNumericencoding/asn1.isNumeric "encoding/asn1.parsePrintableStringencoding/asn1parsePrintableString parsePrintableString�y	parsePrintableString = function(bytes$1) {
		var _i, _ref, b, bytes$1, err, ret, x$3;
		ret = "";
		err = $ifaceNil;
  )		_ref = bytes$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!isPrintable(b, true, true)) {
  )d				err = (x$3 = new SyntaxError.ptr("PrintableString contains invalid character"), new x$3.constructor.elem(x$3));
  )�				return [ret, err];
    			}
    			_i++;
		}
  )�		ret = ($bytesToString(bytes$1));
  )�		return [ret, err];
    	};
parsePrintableStringencoding/asn1.SyntaxErrorencoding/asn1.isPrintable"encoding/asn1.parsePrintableString encoding/asn1.isPrintableencoding/asn1isPrintable isPrintable�I	isPrintable = function(b, asterisk, ampersand) {
		var ampersand, asterisk, b;
  +�		return 97 <= b && b <= 122 || 65 <= b && b <= 90 || 48 <= b && b <= 57 || 39 <= b && b <= 41 || 43 <= b && b <= 47 || (b === 32) || (b === 58) || (b === 61) || (b === 63) || ((asterisk) && (b === 42)) || ((ampersand) && (b === 38));
    	};
isPrintableencoding/asn1.isPrintable encoding/asn1.parseIA5Stringencoding/asn1parseIA5String parseIA5String�Z	parseIA5String = function(bytes$1) {
		var _i, _ref, b, bytes$1, err, ret, x$3;
		ret = "";
		err = $ifaceNil;
  /!		_ref = bytes$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (b >= 128) {
  /X				err = (x$3 = new SyntaxError.ptr("IA5String contains invalid character"), new x$3.constructor.elem(x$3));
  /�				return [ret, err];
    			}
    			_i++;
		}
  /�		ret = ($bytesToString(bytes$1));
  /�		return [ret, err];
    	};
parseIA5Stringencoding/asn1.SyntaxErrorencoding/asn1.parseIA5String encoding/asn1.parseT61Stringencoding/asn1parseT61String parseT61String��	parseT61String = function(bytes$1) {
		var _tmp, _tmp$1, bytes$1, err, ret;
		ret = "";
		err = $ifaceNil;
    		_tmp = ($bytesToString(bytes$1));
		_tmp$1 = $ifaceNil;
		ret = _tmp;
		err = _tmp$1;
		return [ret, err];
    	};
parseT61Stringencoding/asn1.parseT61String encoding/asn1.parseUTF8Stringencoding/asn1parseUTF8String parseUTF8String��	parseUTF8String = function(bytes$1) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, bytes$1, err, ret;
		ret = "";
		err = $ifaceNil;
    		if (!utf8.Valid(bytes$1)) {
    			_tmp = "";
			_tmp$1 = errors.New("asn1: invalid UTF-8 string");
			ret = _tmp;
			err = _tmp$1;
			return [ret, err];
    		}
    		_tmp$2 = ($bytesToString(bytes$1));
		_tmp$3 = $ifaceNil;
		ret = _tmp$2;
		err = _tmp$3;
		return [ret, err];
    	};
parseUTF8Stringencoding/asn1.parseUTF8String
errors.Newunicode/utf8.Valid encoding/asn1.parseBMPStringencoding/asn1parseBMPString parseBMPString��	parseBMPString = function(bmpString) {
		var _q, _r, bmpString, l, s, x$3, x$4;
    		if (!(((_r = bmpString.$length % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0))) {
  2�			return ["", errors.New("pkcs12: odd-length BMP string")];
    		}
  3		l = bmpString.$length;
    		if (l >= 2 && ((x$3 = l - 1 >> 0, ((x$3 < 0 || x$3 >= bmpString.$length) ? ($throwRuntimeError("index out of range"), undefined) : bmpString.$array[bmpString.$offset + x$3])) === 0) && ((x$4 = l - 2 >> 0, ((x$4 < 0 || x$4 >= bmpString.$length) ? ($throwRuntimeError("index out of range"), undefined) : bmpString.$array[bmpString.$offset + x$4])) === 0)) {
  3Y			bmpString = $subslice(bmpString, 0, (l - 2 >> 0));
    		}
  3z		s = $makeSlice(sliceType$3, 0, (_q = bmpString.$length / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
  3�		while (true) {
			if (!(bmpString.$length > 0)) { break; }
  3�			s = $append(s, ((((0 >= bmpString.$length ? ($throwRuntimeError("index out of range"), undefined) : bmpString.$array[bmpString.$offset + 0]) << 16 >>> 16)) << 8 << 16 >>> 16) + (((1 >= bmpString.$length ? ($throwRuntimeError("index out of range"), undefined) : bmpString.$array[bmpString.$offset + 1]) << 16 >>> 16)) << 16 >>> 16);
  3�			bmpString = $subslice(bmpString, 2);
    		}
  4		return [($runesToString(utf16.Decode(s))), $ifaceNil];
    	};
parseBMPStringencoding/asn1.parseBMPStringencoding/asn1.sliceType$3
errors.Newunicode/utf16.Decode encoding/asn1.parseTagAndLengthencoding/asn1parseTagAndLength parseTagAndLength�K	parseTagAndLength = function(bytes$1, initOffset) {
		var _tuple, b, bytes$1, err, i, initOffset, numBytes, offset, ret, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y;
		ret = new tagAndLength.ptr(0, 0, 0, false);
		offset = 0;
		err = $ifaceNil;
  7�		offset = initOffset;
    		if (offset >= bytes$1.$length) {
  8;			err = errors.New("asn1: internal error in parseTagAndLength");
  8{			return [ret, offset, err];
    		}
  8�		b = ((offset < 0 || offset >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + offset]);
  8�		offset = offset + (1) >> 0;
  8�		ret.class$0 = (((b >>> 6 << 24 >>> 24) >> 0));
  8�		ret.isCompound = ((b & 32) >>> 0) === 32;
  8�		ret.tag = ((((b & 31) >>> 0) >> 0));
    		if (ret.tag === 31) {
  9t			_tuple = parseBase128Int(bytes$1, offset);
			ret.tag = _tuple[0];
			offset = _tuple[1];
			err = _tuple[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  9�				return [ret, offset, err];
    			}
    			if (ret.tag < 31) {
  :				err = (x$3 = new SyntaxError.ptr("non-minimal tag"), new x$3.constructor.elem(x$3));
  :8				return [ret, offset, err];
    			}
    		}
    		if (offset >= bytes$1.$length) {
  :c			err = (x$4 = new SyntaxError.ptr("truncated tag or length"), new x$4.constructor.elem(x$4));
  :�			return [ret, offset, err];
    		}
  :�		b = ((offset < 0 || offset >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + offset]);
  :�		offset = offset + (1) >> 0;
    		if (((b & 128) >>> 0) === 0) {
  :�			ret.length = ((((b & 127) >>> 0) >> 0));
    		} else {
  ;c			numBytes = ((((b & 127) >>> 0) >> 0));
    			if (numBytes === 0) {
  ;�				err = (x$5 = new SyntaxError.ptr("indefinite length found (not DER)"), new x$5.constructor.elem(x$5));
  ;�				return [ret, offset, err];
    			}
  ;�			ret.length = 0;
  ;�			i = 0;
			while (true) {
				if (!(i < numBytes)) { break; }
    				if (offset >= bytes$1.$length) {
  <.					err = (x$6 = new SyntaxError.ptr("truncated tag or length"), new x$6.constructor.elem(x$6));
  <_					return [ret, offset, err];
    				}
  <n				b = ((offset < 0 || offset >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + offset]);
  <�				offset = offset + (1) >> 0;
    				if (ret.length >= 8388608) {
  <�					err = (x$7 = new StructuralError.ptr("length too large"), new x$7.constructor.elem(x$7));
  =					return [ret, offset, err];
    				}
  =)				ret.length = (y = (8), y < 32 ? (ret.length << y) : 0) >> 0;
  ==				ret.length = ret.length | (((b >> 0)));
    				if (ret.length === 0) {
  =�					err = (x$8 = new StructuralError.ptr("superfluous leading zeros in length"), new x$8.constructor.elem(x$8));
  =�					return [ret, offset, err];
    				}
  <				i = i + (1) >> 0;
    			}
    			if (ret.length < 128) {
  >:				err = (x$9 = new StructuralError.ptr("non-minimal length"), new x$9.constructor.elem(x$9));
  >i				return [ret, offset, err];
    			}
    		}
  >y		return [ret, offset, err];
    	};
parseTagAndLengthencoding/asn1.StructuralErrorencoding/asn1.SyntaxErrorencoding/asn1.parseBase128Intencoding/asn1.parseTagAndLengthencoding/asn1.tagAndLength
errors.New encoding/asn1.parseSequenceOfencoding/asn1parseSequenceOf parseSequenceOf�1	parseSequenceOf = function(bytes$1, sliceType$4, elemType) {
		var _1, _r, _r$1, _r$2, _r$3, _tuple, _tuple$1, _tuple$2, bytes$1, compoundType, elemType, err, expectedTag, i, matchAny, numElements, offset, offset$1, ok, params, ret, sliceType$4, t, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; bytes$1 = $f.bytes$1; compoundType = $f.compoundType; elemType = $f.elemType; err = $f.err; expectedTag = $f.expectedTag; i = $f.i; matchAny = $f.matchAny; numElements = $f.numElements; offset = $f.offset; offset$1 = $f.offset$1; ok = $f.ok; params = $f.params; ret = $f.ret; sliceType$4 = $f.sliceType$4; t = $f.t; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ret = new reflect.Value.ptr(ptrType$2.nil, 0, 0);
		err = $ifaceNil;
  ?�		_r = getUniversalType(elemType); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		matchAny = _tuple[0];
		expectedTag = _tuple[1];
		compoundType = _tuple[2];
		ok = _tuple[3];
    		if (!ok) {
  @			err = (x$3 = new StructuralError.ptr("unknown Go type for slice"), new x$3.constructor.elem(x$3));
  @C			$s = -1; return [ret, err];
    		}
  @�		numElements = 0;
  @�		offset = 0;
		while (true) {
			if (!(offset < bytes$1.$length)) { break; }
  A			t = new tagAndLength.ptr(0, 0, 0, false);
  A			_tuple$1 = parseTagAndLength(bytes$1, offset);
			tagAndLength.copy(t, _tuple$1[0]);
			offset = _tuple$1[1];
			err = _tuple$1[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  Ac				$s = -1; return [ret, err];
    			}
    			_1 = t.tag;
    			if ((_1 === (22)) || (_1 === (27)) || (_1 === (20)) || (_1 === (12)) || (_1 === (18)) || (_1 === (30))) {
  Bs				t.tag = 19;
    			} else if ((_1 === (24)) || (_1 === (23))) {
  B�				t.tag = 23;
    			}
    			if (!matchAny && (!((t.class$0 === 0)) || !(t.isCompound === compoundType) || !((t.tag === expectedTag)))) {
  Cq				err = (x$4 = new StructuralError.ptr("sequence tag mismatch"), new x$4.constructor.elem(x$4));
  C�				$s = -1; return [ret, err];
    			}
    			if (invalidLength(offset, t.length, bytes$1.$length)) {
  C�				err = (x$5 = new SyntaxError.ptr("truncated sequence"), new x$5.constructor.elem(x$5));
  D				$s = -1; return [ret, err];
    			}
  D			offset = offset + (t.length) >> 0;
  D1			numElements = numElements + (1) >> 0;
    		}
  DC		_r$1 = reflect.MakeSlice(sliceType$4, numElements, numElements); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		ret = _r$1;
  D�		params = new fieldParameters.ptr(false, false, false, false, ptrType$3.nil, ptrType$4.nil, 0, 0, false, false);
  D�		offset$1 = 0;
  D�		i = 0;
		/* while (true) { */ case 3:
			/* if (!(i < numElements)) { break; } */ if(!(i < numElements)) { $s = 4; continue; }
  D�			_r$2 = $clone(ret, reflect.Value).Index(i); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = parseField($clone(_r$2, reflect.Value), bytes$1, offset$1, $clone(params, fieldParameters)); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$2 = _r$3;
			offset$1 = _tuple$2[0];
			err = _tuple$2[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  E#				$s = -1; return [ret, err];
    			}
  D�			i = i + (1) >> 0;
    		$s = 3; continue;
		case 4:
  E2		$s = -1; return [ret, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseSequenceOf }; } $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.bytes$1 = bytes$1; $f.compoundType = compoundType; $f.elemType = elemType; $f.err = err; $f.expectedTag = expectedTag; $f.i = i; $f.matchAny = matchAny; $f.numElements = numElements; $f.offset = offset; $f.offset$1 = offset$1; $f.ok = ok; $f.params = params; $f.ret = ret; $f.sliceType$4 = sliceType$4; $f.t = t; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
parseSequenceOfencoding/asn1.StructuralErrorencoding/asn1.SyntaxErrorencoding/asn1.fieldParametersencoding/asn1.getUniversalTypeencoding/asn1.invalidLengthencoding/asn1.parseFieldencoding/asn1.parseSequenceOfencoding/asn1.parseTagAndLengthencoding/asn1.ptrType$2encoding/asn1.ptrType$3encoding/asn1.ptrType$4encoding/asn1.tagAndLengthreflect.MakeSlicereflect.Valuereflect.rtype encoding/asn1.invalidLengthencoding/asn1invalidLength invalidLength��	invalidLength = function(offset, length, sliceLength) {
		var length, offset, sliceLength;
  G�		return (offset + length >> 0) < offset || (offset + length >> 0) > sliceLength;
    	};
invalidLengthencoding/asn1.invalidLength encoding/asn1.parseFieldencoding/asn1
parseField 
parseField��	parseField = function(v, bytes$1, initOffset, params) {
		var _1, _2, _3, _4, _arg, _arg$1, _arg$2, _arg$3, _arg$4, _arg$5, _arg$6, _arg$7, _arg$8, _arg$9, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$28, _r$29, _r$3, _r$30, _r$31, _r$32, _r$33, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, _tuple$1, _tuple$10, _tuple$11, _tuple$12, _tuple$13, _tuple$14, _tuple$15, _tuple$16, _tuple$17, _tuple$18, _tuple$19, _tuple$2, _tuple$20, _tuple$21, _tuple$22, _tuple$23, _tuple$24, _tuple$25, _tuple$26, _tuple$27, _tuple$28, _tuple$29, _tuple$3, _tuple$30, _tuple$31, _tuple$32, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, _v, _v$1, bytes$1, bytes$2, compoundType, err, err1, err1$1, err1$2, err1$3, err1$4, err1$5, expectedClass, expectedClass$1, expectedTag, field, fieldType, i, i$1, ifaceType, initOffset, innerBytes, innerBytes$1, innerOffset, matchAny, matchAnyClassAndTag, newSlice, offset, ok, ok$1, ok1, params, parsedBool, parsedInt, parsedInt$1, parsedInt$2, parsedInt$3, result, sliceType$4, structType, t, t$1, universalTag, v, v$1, v$2, v$3, v$4, v$5, v$6, v$7, v$8, val, x$10, x$11, x$12, x$13, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _arg$4 = $f._arg$4; _arg$5 = $f._arg$5; _arg$6 = $f._arg$6; _arg$7 = $f._arg$7; _arg$8 = $f._arg$8; _arg$9 = $f._arg$9; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$28 = $f._r$28; _r$29 = $f._r$29; _r$3 = $f._r$3; _r$30 = $f._r$30; _r$31 = $f._r$31; _r$32 = $f._r$32; _r$33 = $f._r$33; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$10 = $f._tuple$10; _tuple$11 = $f._tuple$11; _tuple$12 = $f._tuple$12; _tuple$13 = $f._tuple$13; _tuple$14 = $f._tuple$14; _tuple$15 = $f._tuple$15; _tuple$16 = $f._tuple$16; _tuple$17 = $f._tuple$17; _tuple$18 = $f._tuple$18; _tuple$19 = $f._tuple$19; _tuple$2 = $f._tuple$2; _tuple$20 = $f._tuple$20; _tuple$21 = $f._tuple$21; _tuple$22 = $f._tuple$22; _tuple$23 = $f._tuple$23; _tuple$24 = $f._tuple$24; _tuple$25 = $f._tuple$25; _tuple$26 = $f._tuple$26; _tuple$27 = $f._tuple$27; _tuple$28 = $f._tuple$28; _tuple$29 = $f._tuple$29; _tuple$3 = $f._tuple$3; _tuple$30 = $f._tuple$30; _tuple$31 = $f._tuple$31; _tuple$32 = $f._tuple$32; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; _v = $f._v; _v$1 = $f._v$1; bytes$1 = $f.bytes$1; bytes$2 = $f.bytes$2; compoundType = $f.compoundType; err = $f.err; err1 = $f.err1; err1$1 = $f.err1$1; err1$2 = $f.err1$2; err1$3 = $f.err1$3; err1$4 = $f.err1$4; err1$5 = $f.err1$5; expectedClass = $f.expectedClass; expectedClass$1 = $f.expectedClass$1; expectedTag = $f.expectedTag; field = $f.field; fieldType = $f.fieldType; i = $f.i; i$1 = $f.i$1; ifaceType = $f.ifaceType; initOffset = $f.initOffset; innerBytes = $f.innerBytes; innerBytes$1 = $f.innerBytes$1; innerOffset = $f.innerOffset; matchAny = $f.matchAny; matchAnyClassAndTag = $f.matchAnyClassAndTag; newSlice = $f.newSlice; offset = $f.offset; ok = $f.ok; ok$1 = $f.ok$1; ok1 = $f.ok1; params = $f.params; parsedBool = $f.parsedBool; parsedInt = $f.parsedInt; parsedInt$1 = $f.parsedInt$1; parsedInt$2 = $f.parsedInt$2; parsedInt$3 = $f.parsedInt$3; result = $f.result; sliceType$4 = $f.sliceType$4; structType = $f.structType; t = $f.t; t$1 = $f.t$1; universalTag = $f.universalTag; v = $f.v; v$1 = $f.v$1; v$2 = $f.v$2; v$3 = $f.v$3; v$4 = $f.v$4; v$5 = $f.v$5; v$6 = $f.v$6; v$7 = $f.v$7; v$8 = $f.v$8; val = $f.val; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		offset = 0;
		err = $ifaceNil;
  H�		offset = initOffset;
  I		fieldType = $clone(v, reflect.Value).Type();
    		if (offset === bytes$1.$length) {
    			if (!setDefaultValue($clone(v, reflect.Value), $clone(params, fieldParameters))) {
  I�				err = (x$3 = new SyntaxError.ptr("sequence truncated"), new x$3.constructor.elem(x$3));
    			}
  I�			$s = -1; return [offset, err];
    		}
  J		ifaceType = fieldType;
  J		_r = ifaceType.Kind(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		if (!(_r === 20)) { _v = false; $s = 3; continue s; }
		_r$1 = ifaceType.NumMethod(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v = _r$1 === 0; case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_v) { */ case 1:
  J{			t = new tagAndLength.ptr(0, 0, 0, false);
  J�			_tuple = parseTagAndLength(bytes$1, offset);
			tagAndLength.copy(t, _tuple[0]);
			offset = _tuple[1];
			err = _tuple[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  J�				$s = -1; return [offset, err];
    			}
    			if (invalidLength(offset, t.length, bytes$1.$length)) {
  K				err = (x$4 = new SyntaxError.ptr("data truncated"), new x$4.constructor.elem(x$4));
  K;				$s = -1; return [offset, err];
    			}
  KL			result = $ifaceNil;
  Ka			/* */ if (!t.isCompound && (t.class$0 === 0)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!t.isCompound && (t.class$0 === 0)) { */ case 6:
  K�				innerBytes = $subslice(bytes$1, offset, (offset + t.length >> 0));
    					_1 = t.tag;
  K�					/* */ if (_1 === (19)) { $s = 9; continue; }
					/* */ if (_1 === (18)) { $s = 10; continue; }
					/* */ if (_1 === (22)) { $s = 11; continue; }
					/* */ if (_1 === (20)) { $s = 12; continue; }
					/* */ if (_1 === (12)) { $s = 13; continue; }
					/* */ if (_1 === (2)) { $s = 14; continue; }
					/* */ if (_1 === (3)) { $s = 15; continue; }
					/* */ if (_1 === (6)) { $s = 16; continue; }
					/* */ if (_1 === (23)) { $s = 17; continue; }
					/* */ if (_1 === (24)) { $s = 18; continue; }
					/* */ if (_1 === (4)) { $s = 19; continue; }
					/* */ if (_1 === (30)) { $s = 20; continue; }
					/* */ $s = 21; continue;
    					/* if (_1 === (19)) { */ case 9:
  K�						_tuple$1 = parsePrintableString(innerBytes);
						result = new $String(_tuple$1[0]);
						err = _tuple$1[1];
    						$s = 21; continue;
    					/* } else if (_1 === (18)) { */ case 10:
  LA						_tuple$2 = parseNumericString(innerBytes);
						result = new $String(_tuple$2[0]);
						err = _tuple$2[1];
    						$s = 21; continue;
    					/* } else if (_1 === (22)) { */ case 11:
  L�						_tuple$3 = parseIA5String(innerBytes);
						result = new $String(_tuple$3[0]);
						err = _tuple$3[1];
    						$s = 21; continue;
    					/* } else if (_1 === (20)) { */ case 12:
  L�						_tuple$4 = parseT61String(innerBytes);
						result = new $String(_tuple$4[0]);
						err = _tuple$4[1];
    						$s = 21; continue;
    					/* } else if (_1 === (12)) { */ case 13:
  M						_tuple$5 = parseUTF8String(innerBytes);
						result = new $String(_tuple$5[0]);
						err = _tuple$5[1];
    						$s = 21; continue;
    					/* } else if (_1 === (2)) { */ case 14:
  MQ						_tuple$6 = parseInt64(innerBytes);
						result = _tuple$6[0];
						err = _tuple$6[1];
    						$s = 21; continue;
    					/* } else if (_1 === (3)) { */ case 15:
  M�						_tuple$7 = parseBitString(innerBytes);
						result = new _tuple$7[0].constructor.elem(_tuple$7[0]);
						err = _tuple$7[1];
    						$s = 21; continue;
    					/* } else if (_1 === (6)) { */ case 16:
  M�						_tuple$8 = parseObjectIdentifier(innerBytes);
						result = _tuple$8[0];
						err = _tuple$8[1];
    						$s = 21; continue;
    					/* } else if (_1 === (23)) { */ case 17:
  N						_r$2 = parseUTCTime(innerBytes); /* */ $s = 22; case 22: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						_tuple$9 = _r$2;
						result = new _tuple$9[0].constructor.elem(_tuple$9[0]);
						err = _tuple$9[1];
    						$s = 21; continue;
    					/* } else if (_1 === (24)) { */ case 18:
  N\						_r$3 = parseGeneralizedTime(innerBytes); /* */ $s = 23; case 23: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						_tuple$10 = _r$3;
						result = new _tuple$10[0].constructor.elem(_tuple$10[0]);
						err = _tuple$10[1];
    						$s = 21; continue;
    					/* } else if (_1 === (4)) { */ case 19:
  N�						result = innerBytes;
    						$s = 21; continue;
    					/* } else if (_1 === (30)) { */ case 20:
  N�						_tuple$11 = parseBMPString(innerBytes);
						result = new $String(_tuple$11[0]);
						err = _tuple$11[1];
    					/* } */ case 21:
    				case 8:
    			/* } */ case 7:
  Oa			offset = offset + (t.length) >> 0;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  O�				$s = -1; return [offset, err];
    			}
  O�			/* */ if (!($interfaceIsEqual(result, $ifaceNil))) { $s = 24; continue; }
			/* */ $s = 25; continue;
    			/* if (!($interfaceIsEqual(result, $ifaceNil))) { */ case 24:
  O�				_r$4 = reflect.ValueOf(result); /* */ $s = 26; case 26: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).Set($clone(_r$4, reflect.Value)); /* */ $s = 27; case 27: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 25:
  O�			$s = -1; return [offset, err];
    		/* } */ case 2:
  O�		_tuple$12 = parseTagAndLength(bytes$1, offset);
		t$1 = $clone(_tuple$12[0], tagAndLength);
		offset = _tuple$12[1];
		err = _tuple$12[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  P#			$s = -1; return [offset, err];
    		}
    		if (params.explicit) {
  PE			expectedClass = 2;
    			if (params.application) {
  P�				expectedClass = 1;
    			}
    			if (offset === bytes$1.$length) {
  P�				err = (x$5 = new StructuralError.ptr("explicit tag has no child"), new x$5.constructor.elem(x$5));
  Q				$s = -1; return [offset, err];
    			}
    			if ((t$1.class$0 === expectedClass) && (t$1.tag === params.tag.$get()) && ((t$1.length === 0) || t$1.isCompound)) {
    				if ($interfaceIsEqual(fieldType, rawValueType)) {
    				} else if (t$1.length > 0) {
  Q�					_tuple$13 = parseTagAndLength(bytes$1, offset);
					tagAndLength.copy(t$1, _tuple$13[0]);
					offset = _tuple$13[1];
					err = _tuple$13[2];
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
  R2						$s = -1; return [offset, err];
    					}
    				} else {
    					if (!($interfaceIsEqual(fieldType, flagType))) {
  Ro						err = (x$6 = new StructuralError.ptr("zero length explicit tag was not an asn1.Flag"), new x$6.constructor.elem(x$6));
  R�						$s = -1; return [offset, err];
    					}
  R�					$clone(v, reflect.Value).SetBool(true);
  R�					$s = -1; return [offset, err];
    				}
    			} else {
  S8				ok = setDefaultValue($clone(v, reflect.Value), $clone(params, fieldParameters));
    				if (ok) {
  Sh					offset = initOffset;
    				} else {
  S�					err = (x$7 = new StructuralError.ptr("explicitly tagged member didn't match"), new x$7.constructor.elem(x$7));
    				}
  S�				$s = -1; return [offset, err];
    			}
    		}
  S�		_r$5 = getUniversalType(fieldType); /* */ $s = 28; case 28: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_tuple$14 = _r$5;
		matchAny = _tuple$14[0];
		universalTag = _tuple$14[1];
		compoundType = _tuple$14[2];
		ok1 = _tuple$14[3];
  T-		/* */ if (!ok1) { $s = 29; continue; }
		/* */ $s = 30; continue;
    		/* if (!ok1) { */ case 29:
  T9			_r$6 = fmt.Sprintf("unknown Go type: %v", new sliceType$2([fieldType])); /* */ $s = 31; case 31: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			err = (x$8 = new StructuralError.ptr(_r$6), new x$8.constructor.elem(x$8));
  T�			$s = -1; return [offset, err];
    		/* } */ case 30:
    		if (universalTag === 19) {
    			if (t$1.class$0 === 0) {
    				_2 = t$1.tag;
    				if ((_2 === (22)) || (_2 === (27)) || (_2 === (20)) || (_2 === (12)) || (_2 === (18)) || (_2 === (30))) {
  VU					universalTag = t$1.tag;
    				}
    			} else if (!((params.stringType === 0))) {
  V�				universalTag = params.stringType;
    			}
    		}
    		if ((universalTag === 23) && (t$1.tag === 24) && (t$1.class$0 === 0)) {
  W}			universalTag = 24;
    		}
    		if (params.set) {
  W�			universalTag = 17;
    		}
  W�		matchAnyClassAndTag = matchAny;
  W�		expectedClass$1 = 0;
  X		expectedTag = universalTag;
    		if (!params.explicit && !(params.tag === ptrType$4.nil)) {
  X^			expectedClass$1 = 2;
  X�			expectedTag = params.tag.$get();
  X�			matchAnyClassAndTag = false;
    		}
    		if (!params.explicit && params.application && !(params.tag === ptrType$4.nil)) {
  Y			expectedClass$1 = 1;
  Y(			expectedTag = params.tag.$get();
  YD			matchAnyClassAndTag = false;
    		}
    		if (!params.explicit && params.private$3 && !(params.tag === ptrType$4.nil)) {
  Y�			expectedClass$1 = 3;
  Y�			expectedTag = params.tag.$get();
  Y�			matchAnyClassAndTag = false;
    		}
  Z:		/* */ if (!matchAnyClassAndTag && (!((t$1.class$0 === expectedClass$1)) || !((t$1.tag === expectedTag))) || (!matchAny && !(t$1.isCompound === compoundType))) { $s = 32; continue; }
		/* */ $s = 33; continue;
    		/* if (!matchAnyClassAndTag && (!((t$1.class$0 === expectedClass$1)) || !((t$1.tag === expectedTag))) || (!matchAny && !(t$1.isCompound === compoundType))) { */ case 32:
  Z�			ok$1 = setDefaultValue($clone(v, reflect.Value), $clone(params, fieldParameters));
  [			/* */ if (ok$1) { $s = 34; continue; }
			/* */ $s = 35; continue;
    			/* if (ok$1) { */ case 34:
  [*				offset = initOffset;
    				$s = 36; continue;
			/* } else { */ case 35:
  [L				_arg = new $Int(expectedTag);
				_arg$1 = new t$1.constructor.elem(t$1);
				_arg$2 = new params.constructor.elem(params);
				_r$7 = fieldType.Name(); /* */ $s = 37; case 37: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_arg$3 = new $String(_r$7);
				_arg$4 = new $Int(offset);
				_r$8 = fmt.Sprintf("tags don't match (%d vs %+v) %+v %s @%d", new sliceType$2([_arg, _arg$1, _arg$2, _arg$3, _arg$4])); /* */ $s = 38; case 38: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				err = (x$9 = new StructuralError.ptr(_r$8), new x$9.constructor.elem(x$9));
    			/* } */ case 36:
  [�			$s = -1; return [offset, err];
    		/* } */ case 33:
    		if (invalidLength(offset, t$1.length, bytes$1.$length)) {
  \			err = (x$10 = new SyntaxError.ptr("data truncated"), new x$10.constructor.elem(x$10));
  \6			$s = -1; return [offset, err];
    		}
  \A		innerBytes$1 = $subslice(bytes$1, offset, (offset + t$1.length >> 0));
  \p		offset = offset + (t$1.length) >> 0;
  \�		_r$9 = $clone($clone(v, reflect.Value).Addr(), reflect.Value).Interface(); /* */ $s = 39; case 39: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_ref = _r$9;
		/* */ if ($assertType(_ref, ptrType$5, true)[1]) { $s = 40; continue; }
		/* */ if ($assertType(_ref, ptrType$6, true)[1]) { $s = 41; continue; }
		/* */ if ($assertType(_ref, ptrType$7, true)[1]) { $s = 42; continue; }
		/* */ if ($assertType(_ref, ptrType$8, true)[1]) { $s = 43; continue; }
		/* */ if ($assertType(_ref, ptrType$9, true)[1]) { $s = 44; continue; }
		/* */ if ($assertType(_ref, ptrType$10, true)[1]) { $s = 45; continue; }
		/* */ if ($assertType(_ref, ptrType$11, true)[1]) { $s = 46; continue; }
		/* */ $s = 47; continue;
    		/* if ($assertType(_ref, ptrType$5, true)[1]) { */ case 40:
    			v$1 = _ref.$val;
  ]			RawValue.copy(v$1, new RawValue.ptr(t$1.class$0, t$1.tag, t$1.isCompound, innerBytes$1, $subslice(bytes$1, initOffset, offset)));
  ]U			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$6, true)[1]) { */ case 41:
    			v$2 = _ref.$val;
  ]w			_tuple$15 = parseObjectIdentifier(innerBytes$1);
			v$2.$set(_tuple$15[0]);
			err = _tuple$15[1];
  ]�			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$7, true)[1]) { */ case 42:
    			v$3 = _ref.$val;
  ]�			_tuple$16 = parseBitString(innerBytes$1);
			BitString.copy(v$3, _tuple$16[0]);
			err = _tuple$16[1];
  ]�			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$8, true)[1]) { */ case 43:
    			v$4 = _ref.$val;
  ^			/* */ if (universalTag === 23) { $s = 48; continue; }
			/* */ $s = 49; continue;
    			/* if (universalTag === 23) { */ case 48:
  ^%				_r$10 = parseUTCTime(innerBytes$1); /* */ $s = 50; case 50: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
				_tuple$17 = _r$10;
				time.Time.copy(v$4, _tuple$17[0]);
				err = _tuple$17[1];
  ^K				$s = -1; return [offset, err];
    			/* } */ case 49:
  ^X			_r$11 = parseGeneralizedTime(innerBytes$1); /* */ $s = 51; case 51: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_tuple$18 = _r$11;
			time.Time.copy(v$4, _tuple$18[0]);
			err = _tuple$18[1];
  ^�			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$9, true)[1]) { */ case 44:
    			v$5 = _ref.$val;
  ^�			_tuple$19 = parseInt32(innerBytes$1);
			parsedInt = _tuple$19[0];
			err1 = _tuple$19[1];
    			if ($interfaceIsEqual(err1, $ifaceNil)) {
  ^�				v$5.$set(((parsedInt >> 0)));
    			}
  _			err = err1;
  _			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$10, true)[1]) { */ case 45:
    			v$6 = _ref.$val;
  _%			v$6.$set(true);
  _1			$s = -1; return [offset, err];
    		/* } else if ($assertType(_ref, ptrType$11, true)[1]) { */ case 46:
    			v$7 = _ref.$val;
  _K			_r$12 = parseBigInt(innerBytes$1); /* */ $s = 52; case 52: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			_tuple$20 = _r$12;
			parsedInt$1 = _tuple$20[0];
			err1$1 = _tuple$20[1];
    			if ($interfaceIsEqual(err1$1, $ifaceNil)) {
  _�				v$7.$set(parsedInt$1);
    			}
  _�			err = err1$1;
  _�			$s = -1; return [offset, err];
    		/* } */ case 47:
  _�			val = v;
    			_3 = $clone(val, reflect.Value).Kind();
  _�			/* */ if (_3 === (1)) { $s = 54; continue; }
			/* */ if ((_3 === (2)) || (_3 === (5)) || (_3 === (6))) { $s = 55; continue; }
			/* */ if (_3 === (25)) { $s = 56; continue; }
			/* */ if (_3 === (23)) { $s = 57; continue; }
			/* */ if (_3 === (24)) { $s = 58; continue; }
			/* */ $s = 59; continue;
    			/* if (_3 === (1)) { */ case 54:
  _�				_tuple$21 = parseBool(innerBytes$1);
				parsedBool = _tuple$21[0];
				err1$2 = _tuple$21[1];
    				if ($interfaceIsEqual(err1$2, $ifaceNil)) {
  `-					$clone(val, reflect.Value).SetBool(parsedBool);
    				}
  `K				err = err1$2;
  `X				$s = -1; return [offset, err];
    			/* } else if ((_3 === (2)) || (_3 === (5)) || (_3 === (6))) { */ case 55:
  `�				_r$13 = $clone(val, reflect.Value).Type().Size(); /* */ $s = 63; case 63: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
				/* */ if (_r$13 === 4) { $s = 60; continue; }
				/* */ $s = 61; continue;
    				/* if (_r$13 === 4) { */ case 60:
  `�					_tuple$22 = parseInt32(innerBytes$1);
					parsedInt$2 = _tuple$22[0];
					err1$3 = _tuple$22[1];
    					if ($interfaceIsEqual(err1$3, $ifaceNil)) {
  `�						$clone(val, reflect.Value).SetInt((new $Int64(0, parsedInt$2)));
    					}
  a					err = err1$3;
    					$s = 62; continue;
				/* } else { */ case 61:
  a1					_tuple$23 = parseInt64(innerBytes$1);
					parsedInt$3 = _tuple$23[0];
					err1$4 = _tuple$23[1];
    					if ($interfaceIsEqual(err1$4, $ifaceNil)) {
  as						$clone(val, reflect.Value).SetInt(parsedInt$3);
    					}
  a�					err = err1$4;
    				/* } */ case 62:
  a�				$s = -1; return [offset, err];
    			/* } else if (_3 === (25)) { */ case 56:
  a�				structType = fieldType;
  b				i = 0;
				/* while (true) { */ case 64:
					_r$14 = structType.NumField(); /* */ $s = 66; case 66: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
					/* if (!(i < _r$14)) { break; } */ if(!(i < _r$14)) { $s = 65; continue; }
  bF					_r$15 = structType.Field(i); /* */ $s = 69; case 69: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					_r$16 = $clone(_r$15, reflect.StructField).IsExported(); /* */ $s = 70; case 70: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
					/* */ if (!_r$16) { $s = 67; continue; }
					/* */ $s = 68; continue;
    					/* if (!_r$16) { */ case 67:
  bq						err = (x$11 = new StructuralError.ptr("struct contains unexported fields"), new x$11.constructor.elem(x$11));
  b�						$s = -1; return [offset, err];
    					/* } */ case 68:
  b=					i = i + (1) >> 0;
    				$s = 64; continue;
				case 65:
  b�				_r$17 = structType.NumField(); /* */ $s = 74; case 74: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
				if (!(_r$17 > 0)) { _v$1 = false; $s = 73; continue s; }
				_r$18 = structType.Field(0); /* */ $s = 75; case 75: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				_v$1 = $interfaceIsEqual(_r$18.Type, rawContentsType); case 73:
				/* */ if (_v$1) { $s = 71; continue; }
				/* */ $s = 72; continue;
    				/* if (_v$1) { */ case 71:
  c					bytes$2 = $subslice(bytes$1, initOffset, offset);
  c<					_r$19 = $clone(val, reflect.Value).Field(0); /* */ $s = 76; case 76: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
					_r$20 = reflect.ValueOf(($convertSliceType(bytes$2, RawContent))); /* */ $s = 77; case 77: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
					$r = $clone(_r$19, reflect.Value).Set($clone(_r$20, reflect.Value)); /* */ $s = 78; case 78: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 72:
  cx				innerOffset = 0;
  c�				i$1 = 0;
				/* while (true) { */ case 79:
					_r$21 = structType.NumField(); /* */ $s = 81; case 81: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
					/* if (!(i$1 < _r$21)) { break; } */ if(!(i$1 < _r$21)) { $s = 80; continue; }
  c�					_r$22 = structType.Field(i$1); /* */ $s = 82; case 82: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
					field = $clone(_r$22, reflect.StructField);
    					if ((i$1 === 0) && $interfaceIsEqual(field.Type, rawContentsType)) {
  c�						i$1 = i$1 + (1) >> 0;
    						/* continue; */ $s = 79; continue;
    					}
  d					_r$23 = $clone(val, reflect.Value).Field(i$1); /* */ $s = 83; case 83: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
					_r$24 = parseField($clone(_r$23, reflect.Value), innerBytes$1, innerOffset, $clone(parseFieldParameters(new reflect.StructTag(field.Tag).Get("asn1")), fieldParameters)); /* */ $s = 84; case 84: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
					_tuple$24 = _r$24;
					innerOffset = _tuple$24[0];
					err = _tuple$24[1];
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
  d�						$s = -1; return [offset, err];
    					}
  c�					i$1 = i$1 + (1) >> 0;
    				$s = 79; continue;
				case 80:
  eX				$s = -1; return [offset, err];
    			/* } else if (_3 === (23)) { */ case 57:
  ev				sliceType$4 = fieldType;
  e�				_r$25 = sliceType$4.Elem(); /* */ $s = 87; case 87: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
				_r$26 = _r$25.Kind(); /* */ $s = 88; case 88: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
				/* */ if (_r$26 === 8) { $s = 85; continue; }
				/* */ $s = 86; continue;
    				/* if (_r$26 === 8) { */ case 85:
  e�					_r$27 = reflect.MakeSlice(sliceType$4, innerBytes$1.$length, innerBytes$1.$length); /* */ $s = 89; case 89: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
					$r = $clone(val, reflect.Value).Set($clone(_r$27, reflect.Value)); /* */ $s = 90; case 90: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  f					_arg$5 = $clone(val, reflect.Value);
					_r$28 = reflect.ValueOf(innerBytes$1); /* */ $s = 91; case 91: if($c) { $c = false; _r$28 = _r$28.$blk(); } if (_r$28 && _r$28.$blk !== undefined) { break s; }
					_arg$6 = $clone(_r$28, reflect.Value);
					_r$29 = reflect.Copy(_arg$5, _arg$6); /* */ $s = 92; case 92: if($c) { $c = false; _r$29 = _r$29.$blk(); } if (_r$29 && _r$29.$blk !== undefined) { break s; }
					_r$29;
  f=					$s = -1; return [offset, err];
    				/* } */ case 86:
  fJ				_arg$7 = innerBytes$1;
				_arg$8 = sliceType$4;
				_r$30 = sliceType$4.Elem(); /* */ $s = 93; case 93: if($c) { $c = false; _r$30 = _r$30.$blk(); } if (_r$30 && _r$30.$blk !== undefined) { break s; }
				_arg$9 = _r$30;
				_r$31 = parseSequenceOf(_arg$7, _arg$8, _arg$9); /* */ $s = 94; case 94: if($c) { $c = false; _r$31 = _r$31.$blk(); } if (_r$31 && _r$31.$blk !== undefined) { break s; }
				_tuple$25 = _r$31;
				newSlice = _tuple$25[0];
				err1$5 = _tuple$25[1];
  f�				/* */ if ($interfaceIsEqual(err1$5, $ifaceNil)) { $s = 95; continue; }
				/* */ $s = 96; continue;
    				/* if ($interfaceIsEqual(err1$5, $ifaceNil)) { */ case 95:
  f�					$r = $clone(val, reflect.Value).Set($clone(newSlice, reflect.Value)); /* */ $s = 97; case 97: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				/* } */ case 96:
  f�				err = err1$5;
  f�				$s = -1; return [offset, err];
    			/* } else if (_3 === (24)) { */ case 58:
  f�				v$8 = "";
    					_4 = universalTag;
  g					/* */ if (_4 === (19)) { $s = 99; continue; }
					/* */ if (_4 === (18)) { $s = 100; continue; }
					/* */ if (_4 === (22)) { $s = 101; continue; }
					/* */ if (_4 === (20)) { $s = 102; continue; }
					/* */ if (_4 === (12)) { $s = 103; continue; }
					/* */ if (_4 === (27)) { $s = 104; continue; }
					/* */ if (_4 === (30)) { $s = 105; continue; }
					/* */ $s = 106; continue;
    					/* if (_4 === (19)) { */ case 99:
  g2						_tuple$26 = parsePrintableString(innerBytes$1);
						v$8 = _tuple$26[0];
						err = _tuple$26[1];
    						$s = 107; continue;
    					/* } else if (_4 === (18)) { */ case 100:
  gx						_tuple$27 = parseNumericString(innerBytes$1);
						v$8 = _tuple$27[0];
						err = _tuple$27[1];
    						$s = 107; continue;
    					/* } else if (_4 === (22)) { */ case 101:
  g�						_tuple$28 = parseIA5String(innerBytes$1);
						v$8 = _tuple$28[0];
						err = _tuple$28[1];
    						$s = 107; continue;
    					/* } else if (_4 === (20)) { */ case 102:
  g�						_tuple$29 = parseT61String(innerBytes$1);
						v$8 = _tuple$29[0];
						err = _tuple$29[1];
    						$s = 107; continue;
    					/* } else if (_4 === (12)) { */ case 103:
  h1						_tuple$30 = parseUTF8String(innerBytes$1);
						v$8 = _tuple$30[0];
						err = _tuple$30[1];
    						$s = 107; continue;
    					/* } else if (_4 === (27)) { */ case 104:
  iO						_tuple$31 = parseT61String(innerBytes$1);
						v$8 = _tuple$31[0];
						err = _tuple$31[1];
    						$s = 107; continue;
    					/* } else if (_4 === (30)) { */ case 105:
  i�						_tuple$32 = parseBMPString(innerBytes$1);
						v$8 = _tuple$32[0];
						err = _tuple$32[1];
    						$s = 107; continue;
					/* } else { */ case 106:
  i�						_r$32 = fmt.Sprintf("internal error: unknown string type %d", new sliceType$2([new $Int(universalTag)])); /* */ $s = 108; case 108: if($c) { $c = false; _r$32 = _r$32.$blk(); } if (_r$32 && _r$32.$blk !== undefined) { break s; }
						err = (x$12 = new SyntaxError.ptr(_r$32), new x$12.constructor.elem(x$12));
    					/* } */ case 107:
    				case 98:
    				if ($interfaceIsEqual(err, $ifaceNil)) {
  j.					$clone(val, reflect.Value).SetString(v$8);
    				}
  jE				$s = -1; return [offset, err];
    			/* } */ case 59:
    		case 53:
  jP		_r$33 = $clone(v, reflect.Value).Type().String(); /* */ $s = 109; case 109: if($c) { $c = false; _r$33 = _r$33.$blk(); } if (_r$33 && _r$33.$blk !== undefined) { break s; }
		err = (x$13 = new StructuralError.ptr("unsupported: " + _r$33), new x$13.constructor.elem(x$13));
  j�		$s = -1; return [offset, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parseField }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._arg$4 = _arg$4; $f._arg$5 = _arg$5; $f._arg$6 = _arg$6; $f._arg$7 = _arg$7; $f._arg$8 = _arg$8; $f._arg$9 = _arg$9; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$28 = _r$28; $f._r$29 = _r$29; $f._r$3 = _r$3; $f._r$30 = _r$30; $f._r$31 = _r$31; $f._r$32 = _r$32; $f._r$33 = _r$33; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$10 = _tuple$10; $f._tuple$11 = _tuple$11; $f._tuple$12 = _tuple$12; $f._tuple$13 = _tuple$13; $f._tuple$14 = _tuple$14; $f._tuple$15 = _tuple$15; $f._tuple$16 = _tuple$16; $f._tuple$17 = _tuple$17; $f._tuple$18 = _tuple$18; $f._tuple$19 = _tuple$19; $f._tuple$2 = _tuple$2; $f._tuple$20 = _tuple$20; $f._tuple$21 = _tuple$21; $f._tuple$22 = _tuple$22; $f._tuple$23 = _tuple$23; $f._tuple$24 = _tuple$24; $f._tuple$25 = _tuple$25; $f._tuple$26 = _tuple$26; $f._tuple$27 = _tuple$27; $f._tuple$28 = _tuple$28; $f._tuple$29 = _tuple$29; $f._tuple$3 = _tuple$3; $f._tuple$30 = _tuple$30; $f._tuple$31 = _tuple$31; $f._tuple$32 = _tuple$32; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f._v = _v; $f._v$1 = _v$1; $f.bytes$1 = bytes$1; $f.bytes$2 = bytes$2; $f.compoundType = compoundType; $f.err = err; $f.err1 = err1; $f.err1$1 = err1$1; $f.err1$2 = err1$2; $f.err1$3 = err1$3; $f.err1$4 = err1$4; $f.err1$5 = err1$5; $f.expectedClass = expectedClass; $f.expectedClass$1 = expectedClass$1; $f.expectedTag = expectedTag; $f.field = field; $f.fieldType = fieldType; $f.i = i; $f.i$1 = i$1; $f.ifaceType = ifaceType; $f.initOffset = initOffset; $f.innerBytes = innerBytes; $f.innerBytes$1 = innerBytes$1; $f.innerOffset = innerOffset; $f.matchAny = matchAny; $f.matchAnyClassAndTag = matchAnyClassAndTag; $f.newSlice = newSlice; $f.offset = offset; $f.ok = ok; $f.ok$1 = ok$1; $f.ok1 = ok1; $f.params = params; $f.parsedBool = parsedBool; $f.parsedInt = parsedInt; $f.parsedInt$1 = parsedInt$1; $f.parsedInt$2 = parsedInt$2; $f.parsedInt$3 = parsedInt$3; $f.result = result; $f.sliceType$4 = sliceType$4; $f.structType = structType; $f.t = t; $f.t$1 = t$1; $f.universalTag = universalTag; $f.v = v; $f.v$1 = v$1; $f.v$2 = v$2; $f.v$3 = v$3; $f.v$4 = v$4; $f.v$5 = v$5; $f.v$6 = v$6; $f.v$7 = v$7; $f.v$8 = v$8; $f.val = val; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};

parseField4encoding/asn1.BitStringencoding/asn1.Enumeratedencoding/asn1.Flagencoding/asn1.ObjectIdentifierencoding/asn1.RawContentencoding/asn1.RawValueencoding/asn1.StructuralErrorencoding/asn1.SyntaxErrorencoding/asn1.fieldParametersencoding/asn1.flagTypeencoding/asn1.getUniversalTypeencoding/asn1.invalidLengthencoding/asn1.parseBMPStringencoding/asn1.parseBigIntencoding/asn1.parseBitStringencoding/asn1.parseBoolencoding/asn1.parseField"encoding/asn1.parseFieldParameters"encoding/asn1.parseGeneralizedTimeencoding/asn1.parseIA5Stringencoding/asn1.parseInt32encoding/asn1.parseInt64 encoding/asn1.parseNumericString#encoding/asn1.parseObjectIdentifier"encoding/asn1.parsePrintableStringencoding/asn1.parseSequenceOfencoding/asn1.parseT61Stringencoding/asn1.parseTagAndLengthencoding/asn1.parseUTCTimeencoding/asn1.parseUTF8Stringencoding/asn1.ptrType$1encoding/asn1.ptrType$10encoding/asn1.ptrType$11encoding/asn1.ptrType$4encoding/asn1.ptrType$5encoding/asn1.ptrType$6encoding/asn1.ptrType$7encoding/asn1.ptrType$8encoding/asn1.ptrType$9encoding/asn1.rawContentsTypeencoding/asn1.rawValueTypeencoding/asn1.setDefaultValueencoding/asn1.sliceType$2encoding/asn1.tagAndLengthfmt.Sprintfreflect.Copyreflect.MakeSlicereflect.StructFieldreflect.StructTagreflect.Valuereflect.ValueOf	time.Time !encoding/asn1.canHaveDefaultValueencoding/asn1canHaveDefaultValue canHaveDefaultValue��	canHaveDefaultValue = function(k) {
		var _1, k;
    		_1 = k;
    		if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) {
  k�			return true;
    		}
  k�		return false;
    	};
canHaveDefaultValue!encoding/asn1.canHaveDefaultValue encoding/asn1.setDefaultValueencoding/asn1setDefaultValue setDefaultValue��	setDefaultValue = function(v, params) {
		var ok, params, v;
		ok = false;
    		if (!params.optional) {
  m 			return ok;
    		}
  m		ok = true;
    		if (params.defaultValue === ptrType$3.nil) {
  m8			return ok;
    		}
    		if (canHaveDefaultValue($clone(v, reflect.Value).Kind())) {
  mh			$clone(v, reflect.Value).SetInt(params.defaultValue.$get());
    		}
  m�		return ok;
    	};
setDefaultValue!encoding/asn1.canHaveDefaultValueencoding/asn1.ptrType$3encoding/asn1.setDefaultValuereflect.Value encoding/asn1.Unmarshalencoding/asn1	Unmarshal 	Unmarshal��	Unmarshal = function(b, val) {
		var $24r, _r, _tuple, b, err, rest, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; rest = $f.rest; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rest = sliceType.nil;
		err = $ifaceNil;
    		_r = UnmarshalWithParams(b, val, ""); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		rest = _tuple[0];
		err = _tuple[1];
		$24r = [rest, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Unmarshal }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.rest = rest; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Unmarshal = Unmarshal;
	Unmarshalencoding/asn1.Unmarshal!encoding/asn1.UnmarshalWithParamsencoding/asn1.sliceType ,(*encoding/asn1.invalidUnmarshalError).Error �:	invalidUnmarshalError.ptr.prototype.Error = function() {
		var $24r, $24r$1, _r, _r$1, _r$2, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    		if ($interfaceIsEqual(e.Type, $ifaceNil)) {
  {�			$s = -1; return "asn1: Unmarshal recipient value is nil";
    		}
  {�		_r = e.Type.Kind(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === 22))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((_r === 22))) { */ case 1:
  |			_r$1 = e.Type.String(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = "asn1: Unmarshal recipient value is non-pointer " + _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 2:
  |e		_r$2 = e.Type.String(); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = "asn1: Unmarshal recipient value is nil " + _r$2;
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: invalidUnmarshalError.ptr.prototype.Error }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	invalidUnmarshalError.prototype.Error = function() { return this.$val.Error(); };
invalidUnmarshalError#encoding/asn1.invalidUnmarshalError !encoding/asn1.UnmarshalWithParamsencoding/asn1UnmarshalWithParams UnmarshalWithParams��	UnmarshalWithParams = function(b, val, params) {
		var _r, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, b, err, offset, params, rest, v, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; b = $f.b; err = $f.err; offset = $f.offset; params = $f.params; rest = $f.rest; v = $f.v; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rest = sliceType.nil;
		err = $ifaceNil;
  }�		_r = reflect.ValueOf(val); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		v = _r;
    		if (!(($clone(v, reflect.Value).Kind() === 22)) || $clone(v, reflect.Value).IsNil()) {
    			_tmp = sliceType.nil;
			_tmp$1 = new invalidUnmarshalError.ptr(reflect.TypeOf(val));
			rest = _tmp;
			err = _tmp$1;
			$s = -1; return [rest, err];
    		}
  ~ 		_r$1 = $clone(v, reflect.Value).Elem(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = parseField($clone(_r$1, reflect.Value), b, 0, $clone(parseFieldParameters(params), fieldParameters)); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		offset = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$2 = sliceType.nil;
			_tmp$3 = err;
			rest = _tmp$2;
			err = _tmp$3;
			$s = -1; return [rest, err];
    		}
    		_tmp$4 = $subslice(b, offset);
		_tmp$5 = $ifaceNil;
		rest = _tmp$4;
		err = _tmp$5;
		$s = -1; return [rest, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: UnmarshalWithParams }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.offset = offset; $f.params = params; $f.rest = rest; $f.v = v; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.UnmarshalWithParams = UnmarshalWithParams;
UnmarshalWithParams	!encoding/asn1.UnmarshalWithParamsencoding/asn1.fieldParameters#encoding/asn1.invalidUnmarshalErrorencoding/asn1.parseField"encoding/asn1.parseFieldParametersencoding/asn1.sliceTypereflect.TypeOfreflect.Valuereflect.ValueOf "encoding/asn1.parseFieldParametersencoding/asn1parseFieldParameters parseFieldParameters�	�	parseFieldParameters = function(str) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, err, err$1, i, i$1, i$2, part, ret, str;
		ret = new fieldParameters.ptr(false, false, false, false, ptrType$3.nil, ptrType$4.nil, 0, 0, false, false);
  �E		part = "";
  �R		while (true) {
			if (!(str.length > 0)) { break; }
  ��			i = strings.IndexByte(str, 44);
    			if (i < 0) {
  �
				_tmp = str;
				_tmp$1 = "";
				part = _tmp;
				str = _tmp$1;
    			} else {
  �,				_tmp$2 = $substring(str, 0, i);
				_tmp$3 = $substring(str, (i + 1 >> 0));
				part = _tmp$2;
				str = _tmp$3;
    			}
    			if (part === "optional") {
  �x				ret.optional = true;
    			} else if (part === "explicit") {
  ��				ret.explicit = true;
    				if (ret.tag === ptrType$4.nil) {
  ��					ret.tag = $newDataPointer(0, ptrType$4);
    				}
    			} else if (part === "generalized") {
  �				ret.timeType = 24;
    			} else if (part === "utc") {
  �M				ret.timeType = 23;
    			} else if (part === "ia5") {
  ��				ret.stringType = 22;
    			} else if (part === "printable") {
  ��				ret.stringType = 19;
    			} else if (part === "numeric") {
  ��				ret.stringType = 18;
    			} else if (part === "utf8") {
  �:				ret.stringType = 12;
    			} else if (strings.HasPrefix(part, "default:")) {
  ��				_tuple = strconv.ParseInt($substring(part, 8), 10, 64);
				i$1 = _tuple[0];
				err = _tuple[1];
    				if ($interfaceIsEqual(err, $ifaceNil)) {
  ��					ret.defaultValue = $newDataPointer(new $Int64(0, 0), ptrType$3);
  ��					ret.defaultValue.$set(i$1);
    				}
    			} else if (strings.HasPrefix(part, "tag:")) {
  �4				_tuple$1 = strconv.Atoi($substring(part, 4));
				i$2 = _tuple$1[0];
				err$1 = _tuple$1[1];
    				if ($interfaceIsEqual(err$1, $ifaceNil)) {
  �l					ret.tag = $newDataPointer(0, ptrType$4);
  ��					ret.tag.$set(i$2);
    				}
    			} else if (part === "set") {
  ��				ret.set = true;
    			} else if (part === "application") {
  ��				ret.application = true;
    				if (ret.tag === ptrType$4.nil) {
  �					ret.tag = $newDataPointer(0, ptrType$4);
    				}
    			} else if (part === "private") {
  �E				ret.private$3 = true;
    				if (ret.tag === ptrType$4.nil) {
  �s					ret.tag = $newDataPointer(0, ptrType$4);
    				}
    			} else if (part === "omitempty") {
  ��				ret.omitEmpty = true;
    			}
    		}
  ��		return ret;
    	};
parseFieldParametersencoding/asn1.fieldParameters"encoding/asn1.parseFieldParametersencoding/asn1.ptrType$3encoding/asn1.ptrType$4strconv.Atoistrconv.ParseIntstrings.HasPrefixstrings.IndexByte encoding/asn1.getUniversalTypeencoding/asn1getUniversalType getUniversalType�#�	getUniversalType = function(t) {
		var _1, _2, _r, _r$1, _r$2, _r$3, _r$4, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$36, _tmp$37, _tmp$38, _tmp$39, _tmp$4, _tmp$40, _tmp$41, _tmp$42, _tmp$43, _tmp$44, _tmp$45, _tmp$46, _tmp$47, _tmp$48, _tmp$49, _tmp$5, _tmp$50, _tmp$51, _tmp$52, _tmp$53, _tmp$54, _tmp$55, _tmp$6, _tmp$7, _tmp$8, _tmp$9, isCompound, matchAny, ok, t, tagNumber, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$21 = $f._tmp$21; _tmp$22 = $f._tmp$22; _tmp$23 = $f._tmp$23; _tmp$24 = $f._tmp$24; _tmp$25 = $f._tmp$25; _tmp$26 = $f._tmp$26; _tmp$27 = $f._tmp$27; _tmp$28 = $f._tmp$28; _tmp$29 = $f._tmp$29; _tmp$3 = $f._tmp$3; _tmp$30 = $f._tmp$30; _tmp$31 = $f._tmp$31; _tmp$32 = $f._tmp$32; _tmp$33 = $f._tmp$33; _tmp$34 = $f._tmp$34; _tmp$35 = $f._tmp$35; _tmp$36 = $f._tmp$36; _tmp$37 = $f._tmp$37; _tmp$38 = $f._tmp$38; _tmp$39 = $f._tmp$39; _tmp$4 = $f._tmp$4; _tmp$40 = $f._tmp$40; _tmp$41 = $f._tmp$41; _tmp$42 = $f._tmp$42; _tmp$43 = $f._tmp$43; _tmp$44 = $f._tmp$44; _tmp$45 = $f._tmp$45; _tmp$46 = $f._tmp$46; _tmp$47 = $f._tmp$47; _tmp$48 = $f._tmp$48; _tmp$49 = $f._tmp$49; _tmp$5 = $f._tmp$5; _tmp$50 = $f._tmp$50; _tmp$51 = $f._tmp$51; _tmp$52 = $f._tmp$52; _tmp$53 = $f._tmp$53; _tmp$54 = $f._tmp$54; _tmp$55 = $f._tmp$55; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; isCompound = $f.isCompound; matchAny = $f.matchAny; ok = $f.ok; t = $f.t; tagNumber = $f.tagNumber; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		matchAny = false;
		tagNumber = 0;
		isCompound = false;
		ok = false;
    		_1 = t;
    		if ($interfaceIsEqual(_1, (rawValueType))) {
    			_tmp = true;
			_tmp$1 = -1;
			_tmp$2 = false;
			_tmp$3 = true;
			matchAny = _tmp;
			tagNumber = _tmp$1;
			isCompound = _tmp$2;
			ok = _tmp$3;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		} else if ($interfaceIsEqual(_1, (objectIdentifierType))) {
    			_tmp$4 = false;
			_tmp$5 = 6;
			_tmp$6 = false;
			_tmp$7 = true;
			matchAny = _tmp$4;
			tagNumber = _tmp$5;
			isCompound = _tmp$6;
			ok = _tmp$7;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		} else if ($interfaceIsEqual(_1, (bitStringType))) {
    			_tmp$8 = false;
			_tmp$9 = 3;
			_tmp$10 = false;
			_tmp$11 = true;
			matchAny = _tmp$8;
			tagNumber = _tmp$9;
			isCompound = _tmp$10;
			ok = _tmp$11;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		} else if ($interfaceIsEqual(_1, (timeType))) {
    			_tmp$12 = false;
			_tmp$13 = 23;
			_tmp$14 = false;
			_tmp$15 = true;
			matchAny = _tmp$12;
			tagNumber = _tmp$13;
			isCompound = _tmp$14;
			ok = _tmp$15;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		} else if ($interfaceIsEqual(_1, (enumeratedType))) {
    			_tmp$16 = false;
			_tmp$17 = 10;
			_tmp$18 = false;
			_tmp$19 = true;
			matchAny = _tmp$16;
			tagNumber = _tmp$17;
			isCompound = _tmp$18;
			ok = _tmp$19;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		} else if ($interfaceIsEqual(_1, (bigIntType))) {
    			_tmp$20 = false;
			_tmp$21 = 2;
			_tmp$22 = false;
			_tmp$23 = true;
			matchAny = _tmp$20;
			tagNumber = _tmp$21;
			isCompound = _tmp$22;
			ok = _tmp$23;
			$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		}
    			_r = t.Kind(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_2 = _r;
  �			/* */ if (_2 === (1)) { $s = 3; continue; }
			/* */ if ((_2 === (2)) || (_2 === (3)) || (_2 === (4)) || (_2 === (5)) || (_2 === (6))) { $s = 4; continue; }
			/* */ if (_2 === (25)) { $s = 5; continue; }
			/* */ if (_2 === (23)) { $s = 6; continue; }
			/* */ if (_2 === (24)) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (_2 === (1)) { */ case 3:
    				_tmp$24 = false;
				_tmp$25 = 1;
				_tmp$26 = false;
				_tmp$27 = true;
				matchAny = _tmp$24;
				tagNumber = _tmp$25;
				isCompound = _tmp$26;
				ok = _tmp$27;
				$s = -1; return [matchAny, tagNumber, isCompound, ok];
    			/* } else if ((_2 === (2)) || (_2 === (3)) || (_2 === (4)) || (_2 === (5)) || (_2 === (6))) { */ case 4:
    				_tmp$28 = false;
				_tmp$29 = 2;
				_tmp$30 = false;
				_tmp$31 = true;
				matchAny = _tmp$28;
				tagNumber = _tmp$29;
				isCompound = _tmp$30;
				ok = _tmp$31;
				$s = -1; return [matchAny, tagNumber, isCompound, ok];
    			/* } else if (_2 === (25)) { */ case 5:
    				_tmp$32 = false;
				_tmp$33 = 16;
				_tmp$34 = true;
				_tmp$35 = true;
				matchAny = _tmp$32;
				tagNumber = _tmp$33;
				isCompound = _tmp$34;
				ok = _tmp$35;
				$s = -1; return [matchAny, tagNumber, isCompound, ok];
    			/* } else if (_2 === (23)) { */ case 6:
  �"				_r$1 = t.Elem(); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = _r$1.Kind(); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				/* */ if (_r$2 === 8) { $s = 9; continue; }
				/* */ $s = 10; continue;
    				/* if (_r$2 === 8) { */ case 9:
    					_tmp$36 = false;
					_tmp$37 = 4;
					_tmp$38 = false;
					_tmp$39 = true;
					matchAny = _tmp$36;
					tagNumber = _tmp$37;
					isCompound = _tmp$38;
					ok = _tmp$39;
					$s = -1; return [matchAny, tagNumber, isCompound, ok];
    				/* } */ case 10:
  �{				_r$3 = t.Name(); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$4 = strings.HasSuffix(_r$3, "SET"); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				/* */ if (_r$4) { $s = 13; continue; }
				/* */ $s = 14; continue;
    				/* if (_r$4) { */ case 13:
    					_tmp$40 = false;
					_tmp$41 = 17;
					_tmp$42 = true;
					_tmp$43 = true;
					matchAny = _tmp$40;
					tagNumber = _tmp$41;
					isCompound = _tmp$42;
					ok = _tmp$43;
					$s = -1; return [matchAny, tagNumber, isCompound, ok];
    				/* } */ case 14:
    				_tmp$44 = false;
				_tmp$45 = 16;
				_tmp$46 = true;
				_tmp$47 = true;
				matchAny = _tmp$44;
				tagNumber = _tmp$45;
				isCompound = _tmp$46;
				ok = _tmp$47;
				$s = -1; return [matchAny, tagNumber, isCompound, ok];
    			/* } else if (_2 === (24)) { */ case 7:
    				_tmp$48 = false;
				_tmp$49 = 19;
				_tmp$50 = false;
				_tmp$51 = true;
				matchAny = _tmp$48;
				tagNumber = _tmp$49;
				isCompound = _tmp$50;
				ok = _tmp$51;
				$s = -1; return [matchAny, tagNumber, isCompound, ok];
    			/* } */ case 8:
    		case 1:
    		_tmp$52 = false;
		_tmp$53 = 0;
		_tmp$54 = false;
		_tmp$55 = false;
		matchAny = _tmp$52;
		tagNumber = _tmp$53;
		isCompound = _tmp$54;
		ok = _tmp$55;
		$s = -1; return [matchAny, tagNumber, isCompound, ok];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: getUniversalType }; } $f._1 = _1; $f._2 = _2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$21 = _tmp$21; $f._tmp$22 = _tmp$22; $f._tmp$23 = _tmp$23; $f._tmp$24 = _tmp$24; $f._tmp$25 = _tmp$25; $f._tmp$26 = _tmp$26; $f._tmp$27 = _tmp$27; $f._tmp$28 = _tmp$28; $f._tmp$29 = _tmp$29; $f._tmp$3 = _tmp$3; $f._tmp$30 = _tmp$30; $f._tmp$31 = _tmp$31; $f._tmp$32 = _tmp$32; $f._tmp$33 = _tmp$33; $f._tmp$34 = _tmp$34; $f._tmp$35 = _tmp$35; $f._tmp$36 = _tmp$36; $f._tmp$37 = _tmp$37; $f._tmp$38 = _tmp$38; $f._tmp$39 = _tmp$39; $f._tmp$4 = _tmp$4; $f._tmp$40 = _tmp$40; $f._tmp$41 = _tmp$41; $f._tmp$42 = _tmp$42; $f._tmp$43 = _tmp$43; $f._tmp$44 = _tmp$44; $f._tmp$45 = _tmp$45; $f._tmp$46 = _tmp$46; $f._tmp$47 = _tmp$47; $f._tmp$48 = _tmp$48; $f._tmp$49 = _tmp$49; $f._tmp$5 = _tmp$5; $f._tmp$50 = _tmp$50; $f._tmp$51 = _tmp$51; $f._tmp$52 = _tmp$52; $f._tmp$53 = _tmp$53; $f._tmp$54 = _tmp$54; $f._tmp$55 = _tmp$55; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.isCompound = isCompound; $f.matchAny = matchAny; $f.ok = ok; $f.t = t; $f.tagNumber = tagNumber; $f.$s = $s; $f.$r = $r; return $f;
	};
getUniversalTypeencoding/asn1.bigIntTypeencoding/asn1.bitStringTypeencoding/asn1.enumeratedTypeencoding/asn1.getUniversalType"encoding/asn1.objectIdentifierTypeencoding/asn1.rawValueTypeencoding/asn1.timeTypestrings.HasSuffix (encoding/asn1.byteEncoder).Len ��	byteEncoder.prototype.Len = function() {
		var c;
		c = this.$val;
  �		return 1;
    	};
	$ptrType(byteEncoder).prototype.Len = function() { return new byteEncoder(this.$get()).Len(); };
byteEncoderencoding/asn1.byteEncoder "(encoding/asn1.byteEncoder).Encode �L	byteEncoder.prototype.Encode = function(dst) {
		var c, dst;
		c = this.$val;
  �>		(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = ((c << 24 >>> 24)));
    	};
	$ptrType(byteEncoder).prototype.Encode = function(dst) { return new byteEncoder(this.$get()).Encode(dst); };
byteEncoderencoding/asn1.byteEncoder  (encoding/asn1.bytesEncoder).Len ��	bytesEncoder.prototype.Len = function() {
		var b;
		b = this;
  ��		return b.$length;
    	};
	$ptrType(bytesEncoder).prototype.Len = function() { return this.$get().Len(); };
bytesEncoderencoding/asn1.bytesEncoder #(encoding/asn1.bytesEncoder).Encode �	bytesEncoder.prototype.Encode = function(dst) {
		var b, dst;
		b = this;
    		if (!(($copySlice(dst, b) === b.$length))) {
  ��			$panic(new $String("internal error"));
    		}
    	};
	$ptrType(bytesEncoder).prototype.Encode = function(dst) { return this.$get().Encode(dst); };
bytesEncoderencoding/asn1.bytesEncoder !(encoding/asn1.stringEncoder).Len ��	stringEncoder.prototype.Len = function() {
		var s;
		s = this.$val;
  �G		return s.length;
    	};
	$ptrType(stringEncoder).prototype.Len = function() { return new stringEncoder(this.$get()).Len(); };
stringEncoderencoding/asn1.stringEncoder $(encoding/asn1.stringEncoder).Encode �8	stringEncoder.prototype.Encode = function(dst) {
		var dst, s;
		s = this.$val;
    		if (!(($copyString(dst, s) === s.length))) {
  ��			$panic(new $String("internal error"));
    		}
    	};
	$ptrType(stringEncoder).prototype.Encode = function(dst) { return new stringEncoder(this.$get()).Encode(dst); };
stringEncoderencoding/asn1.stringEncoder  (encoding/asn1.multiEncoder).Len ��	multiEncoder.prototype.Len = function() {
		var _i, _r, _ref, e, m, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; e = $f.e; m = $f.m; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  �		size = 0;
  �		_ref = m;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �'			_r = e.Len(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			size = size + (_r) >> 0;
    			_i++;
		$s = 1; continue;
		case 2:
  �;		$s = -1; return size;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: multiEncoder.prototype.Len }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.e = e; $f.m = m; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(multiEncoder).prototype.Len = function() { return this.$get().Len(); };
multiEncoderencoding/asn1.multiEncoder #(encoding/asn1.multiEncoder).Encode �J	multiEncoder.prototype.Encode = function(dst) {
		var _i, _r, _ref, dst, e, m, off, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; dst = $f.dst; e = $f.e; m = $f.m; off = $f.off; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  �z		off = 0;
  ��		_ref = m;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  ��			$r = e.Encode($subslice(dst, off)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��			_r = e.Len(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			off = off + (_r) >> 0;
    			_i++;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: multiEncoder.prototype.Encode }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.dst = dst; $f.e = e; $f.m = m; $f.off = off; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(multiEncoder).prototype.Encode = function(dst) { return this.$get().Encode(dst); };
multiEncoderencoding/asn1.multiEncoder (encoding/asn1.setEncoder).Len ��	setEncoder.prototype.Len = function() {
		var _i, _r, _ref, e, s, size, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; e = $f.e; s = $f.s; size = $f.size; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		s = this;
  �		size = 0;
  �		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �(			_r = e.Len(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			size = size + (_r) >> 0;
    			_i++;
		$s = 1; continue;
		case 2:
  �<		$s = -1; return size;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: setEncoder.prototype.Len }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.e = e; $f.s = s; $f.size = size; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(setEncoder).prototype.Len = function() { return this.$get().Len(); };

setEncoderencoding/asn1.setEncoder !(encoding/asn1.setEncoder).Encode �
D	setEncoder.prototype.Encode = function(dst) {
		var _i, _i$1, _r, _ref, _ref$1, b, dst, e, i, l, off, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; b = $f.b; dst = $f.dst; e = $f.e; i = $f.i; l = $f.l; off = $f.off; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = [l];
		s = this;
  �(		l[0] = $makeSlice(sliceType$4, s.$length);
  �E		_ref = s;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			i = _i;
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �]			_r = e.Len(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			((i < 0 || i >= l[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : l[0].$array[l[0].$offset + i] = $makeSlice(sliceType, _r));
  �|			$r = e.Encode(((i < 0 || i >= l[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : l[0].$array[l[0].$offset + i])); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 1; continue;
		case 2:
  ��		$r = sort.Slice(l[0], (function(l) { return function(i$1, j) {
			var i$1, j;
  �			return bytes.Compare(((i$1 < 0 || i$1 >= l[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : l[0].$array[l[0].$offset + i$1]), ((j < 0 || j >= l[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : l[0].$array[l[0].$offset + j])) < 0;
    		}; })(l)); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �E		off = 0;
  �N		_ref$1 = l[0];
		_i$1 = 0;
		while (true) {
			if (!(_i$1 < _ref$1.$length)) { break; }
			b = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  �f			$copySlice($subslice(dst, off), b);
  �{			off = off + (b.$length) >> 0;
    			_i$1++;
		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: setEncoder.prototype.Encode }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.b = b; $f.dst = dst; $f.e = e; $f.i = i; $f.l = l; $f.off = off; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(setEncoder).prototype.Encode = function(dst) { return this.$get().Encode(dst); };

setEncoderbytes.Compareencoding/asn1.setEncoderencoding/asn1.sliceTypeencoding/asn1.sliceType$4
sort.Slice "(*encoding/asn1.taggedEncoder).Len ��	taggedEncoder.ptr.prototype.Len = function() {
		var $24r, _r, _r$1, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  ��		_r = t.tag.Len(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = t.body.Len(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r + _r$1 >> 0;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: taggedEncoder.ptr.prototype.Len }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	taggedEncoder.prototype.Len = function() { return this.$val.Len(); };
taggedEncoderencoding/asn1.taggedEncoder %(*encoding/asn1.taggedEncoder).Encode ��	taggedEncoder.ptr.prototype.Encode = function(dst) {
		var _r, dst, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; dst = $f.dst; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		t = this;
  ��		$r = t.tag.Encode(dst); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		_r = t.tag.Len(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$r = t.body.Encode($subslice(dst, _r)); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: taggedEncoder.ptr.prototype.Encode }; } $f._r = _r; $f.dst = dst; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	taggedEncoder.prototype.Encode = function(dst) { return this.$val.Encode(dst); };
taggedEncoderencoding/asn1.taggedEncoder  (encoding/asn1.int64Encoder).Len �	int64Encoder.prototype.Len = function() {
		var i, n;
		i = this;
  �H		n = 1;
  �Q		while (true) {
			if (!((i.$high > 0 || (i.$high === 0 && i.$low > 127)))) { break; }
  �a			n = n + (1) >> 0;
  �g			i = $shiftRightInt64(i, (8));
    		}
  �t		while (true) {
			if (!((i.$high < -1 || (i.$high === -1 && i.$low < 4294967168)))) { break; }
  ��			n = n + (1) >> 0;
  ��			i = $shiftRightInt64(i, (8));
    		}
  ��		return n;
    	};
	$ptrType(int64Encoder).prototype.Len = function() { return this.$get().Len(); };
int64Encoderencoding/asn1.int64Encoder #(encoding/asn1.int64Encoder).Encode �	int64Encoder.prototype.Encode = function(dst) {
		var dst, i, j, n;
		i = this;
  ��		n = i.Len();
  ��		j = 0;
		while (true) {
			if (!(j < n)) { break; }
  ��			((j < 0 || j >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + j] = (($shiftRightInt64(i, ((($imul((((n - 1 >> 0) - j >> 0)), 8)) >>> 0))).$low << 24 >>> 24)));
  ��			j = j + (1) >> 0;
    		}
    	};
	$ptrType(int64Encoder).prototype.Encode = function(dst) { return this.$get().Encode(dst); };
int64Encoderencoding/asn1.int64Encoder encoding/asn1.base128IntLengthencoding/asn1base128IntLength base128IntLength�O	base128IntLength = function(n) {
		var i, l, n;
    		if ((n.$high === 0 && n.$low === 0)) {
  �X			return 1;
    		}
  �f		l = 0;
  �r		i = n;
		while (true) {
			if (!((i.$high > 0 || (i.$high === 0 && i.$low > 0)))) { break; }
  ��			l = l + (1) >> 0;
  ��			i = $shiftRightInt64(i, (7));
    		}
  ��		return l;
    	};
base128IntLengthencoding/asn1.base128IntLength encoding/asn1.appendBase128Intencoding/asn1appendBase128Int appendBase128Int��	appendBase128Int = function(dst, n) {
		var dst, i, l, n, o;
  ��		l = base128IntLength(n);
  ��		i = l - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
  �			o = (($shiftRightInt64(n, ((($imul(i, 7)) >>> 0))).$low << 24 >>> 24));
  �.			o = (o & (127)) >>> 0;
    			if (!((i === 0))) {
  �I				o = (o | (128)) >>> 0;
    			}
  �Z			dst = $append(dst, o);
  �
			i = i - (1) >> 0;
    		}
  �t		return dst;
    	};
appendBase128Intencoding/asn1.appendBase128Intencoding/asn1.base128IntLength encoding/asn1.makeBigIntencoding/asn1
makeBigInt 
makeBigInt�
�	makeBigInt = function(n) {
		var _i, _r, _ref, bytes$1, bytes$2, i, n, nMinus1, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; bytes$1 = $f.bytes$1; bytes$2 = $f.bytes$2; i = $f.i; n = $f.n; nMinus1 = $f.nMinus1; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (n === ptrType$1.nil) {
  ��			$s = -1; return [$ifaceNil, (x$3 = new StructuralError.ptr("empty integer"), new x$3.constructor.elem(x$3))];
    		}
  ��		/* */ if (n.Sign() < 0) { $s = 1; continue; }
		/* */ if (n.Sign() === 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (n.Sign() < 0) { */ case 1:
  ��			nMinus1 = new big.Int.ptr(false, big.nat.nil).Neg(n);
  �			_r = nMinus1.Sub(nMinus1, bigOne); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
  �7			bytes$1 = nMinus1.Bytes();
  �R			_ref = bytes$1;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
  �l				((i < 0 || i >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + i] = ((((i < 0 || i >= bytes$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + i]) ^ (255)) << 24 >>> 24));
    				_i++;
			}
    			if ((bytes$1.$length === 0) || ((((0 >= bytes$1.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$1.$array[bytes$1.$offset + 0]) & 128) >>> 0) === 0)) {
  ��				$s = -1; return [($convertSliceType(new sliceType$5([byteFFEncoder, ($convertSliceType(bytes$1, bytesEncoder))]), multiEncoder)), $ifaceNil];
    			}
  ��			$s = -1; return [($convertSliceType(bytes$1, bytesEncoder)), $ifaceNil];
    		/* } else if (n.Sign() === 0) { */ case 2:
  �z			$s = -1; return [byte00Encoder, $ifaceNil];
    		/* } else { */ case 3:
  ��			bytes$2 = n.Bytes();
    			if (bytes$2.$length > 0 && !(((((0 >= bytes$2.$length ? ($throwRuntimeError("index out of range"), undefined) : bytes$2.$array[bytes$2.$offset + 0]) & 128) >>> 0) === 0))) {
  �C				$s = -1; return [($convertSliceType(new sliceType$5([byte00Encoder, ($convertSliceType(bytes$2, bytesEncoder))]), multiEncoder)), $ifaceNil];
    			}
  ��			$s = -1; return [($convertSliceType(bytes$2, bytesEncoder)), $ifaceNil];
    		/* } */ case 4:
    		$s = -1; return [$ifaceNil, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: makeBigInt }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.bytes$1 = bytes$1; $f.bytes$2 = bytes$2; $f.i = i; $f.n = n; $f.nMinus1 = nMinus1; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};

makeBigIntencoding/asn1.StructuralErrorencoding/asn1.bigOneencoding/asn1.byte00Encoderencoding/asn1.byteFFEncoderencoding/asn1.bytesEncoderencoding/asn1.encoderencoding/asn1.makeBigIntencoding/asn1.multiEncoderencoding/asn1.ptrType$1encoding/asn1.sliceType$5math/big.Intmath/big.nat encoding/asn1.appendLengthencoding/asn1appendLength appendLength�,	appendLength = function(dst, i) {
		var dst, i, n;
  ��		n = lengthLength(i);
  ��		while (true) {
			if (!(n > 0)) { break; }
  �			dst = $append(dst, ((((i >> $min(((($imul(((n - 1 >> 0)), 8)) >>> 0)), 31)) >> 0) << 24 >>> 24)));
  �
			n = n - (1) >> 0;
    		}
  �A		return dst;
    	};
appendLengthencoding/asn1.appendLengthencoding/asn1.lengthLength encoding/asn1.lengthLengthencoding/asn1lengthLength lengthLength�	lengthLength = function(i) {
		var i, numBytes;
		numBytes = 0;
  �z		numBytes = 1;
  ��		while (true) {
			if (!(i > 255)) { break; }
  ��			numBytes = numBytes + (1) >> 0;
  ��			i = (i >> $min((8), 31)) >> 0;
    		}
  ��		return numBytes;
    	};
lengthLengthencoding/asn1.lengthLength  encoding/asn1.appendTagAndLengthencoding/asn1appendTagAndLength appendTagAndLength��	appendTagAndLength = function(dst, t) {
		var b, dst, l, t;
  ��		b = ((t.class$0 << 24 >>> 24)) << 6 << 24 >>> 24;
    		if (t.isCompound) {
  �'			b = (b | (32)) >>> 0;
    		}
    		if (t.tag >= 31) {
  �H			b = (b | (31)) >>> 0;
  �T			dst = $append(dst, b);
  �k			dst = appendBase128Int(dst, (new $Int64(0, t.tag)));
    		} else {
  ��			b = (b | (((t.tag << 24 >>> 24)))) >>> 0;
  ��			dst = $append(dst, b);
    		}
    		if (t.length >= 128) {
  ��			l = lengthLength(t.length);
  �			dst = $append(dst, (128 | ((l << 24 >>> 24))) >>> 0);
  �&			dst = appendLength(dst, t.length);
    		} else {
  �T			dst = $append(dst, ((t.length << 24 >>> 24)));
    		}
  �{		return dst;
    	};
appendTagAndLengthencoding/asn1.appendBase128Intencoding/asn1.appendLength encoding/asn1.appendTagAndLengthencoding/asn1.lengthLength $(encoding/asn1.bitStringEncoder).Len ��	bitStringEncoder.ptr.prototype.Len = function() {
		var b;
		b = this;
  ��		return b.Bytes.$length + 1 >> 0;
    	};
	bitStringEncoder.prototype.Len = function() { return this.$val.Len(); };
bitStringEncoderencoding/asn1.bitStringEncoder '(encoding/asn1.bitStringEncoder).Encode �{	bitStringEncoder.ptr.prototype.Encode = function(dst) {
		var _r, _r$1, b, dst;
		b = this;
  �		(0 >= dst.$length ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + 0] = (((_r = ((8 - (_r$1 = b.BitLength % 8, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) >> 0)) % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)));
    		if (!(($copySlice($subslice(dst, 1), b.Bytes) === b.Bytes.$length))) {
  �r			$panic(new $String("internal error"));
    		}
    	};
	bitStringEncoder.prototype.Encode = function(dst) { return this.$val.Encode(dst); };
bitStringEncoderencoding/asn1.bitStringEncoder (encoding/asn1.oidEncoder).Len ��	oidEncoder.prototype.Len = function() {
		var i, l, oid;
		oid = this;
  ��		l = base128IntLength((new $Int64(0, (($imul((0 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 0]), 40)) + (1 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 1]) >> 0))));
  � 		i = 2;
		while (true) {
			if (!(i < oid.$length)) { break; }
  �			l = l + (base128IntLength((new $Int64(0, ((i < 0 || i >= oid.$length) ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + i]))))) >> 0;
  �			i = i + (1) >> 0;
    		}
  �G		return l;
    	};
	$ptrType(oidEncoder).prototype.Len = function() { return this.$get().Len(); };

oidEncoderencoding/asn1.base128IntLengthencoding/asn1.oidEncoder !(encoding/asn1.oidEncoder).Encode ��	oidEncoder.prototype.Encode = function(dst) {
		var dst, i, oid;
		oid = this;
  �		dst = appendBase128Int($subslice(dst, 0, 0), (new $Int64(0, (($imul((0 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 0]), 40)) + (1 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 1]) >> 0))));
  ��		i = 2;
		while (true) {
			if (!(i < oid.$length)) { break; }
  ��			dst = appendBase128Int(dst, (new $Int64(0, ((i < 0 || i >= oid.$length) ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + i]))));
  ��			i = i + (1) >> 0;
    		}
    	};
	$ptrType(oidEncoder).prototype.Encode = function(dst) { return this.$get().Encode(dst); };

oidEncoderencoding/asn1.appendBase128Intencoding/asn1.oidEncoder "encoding/asn1.makeObjectIdentifierencoding/asn1makeObjectIdentifier makeObjectIdentifier�8	makeObjectIdentifier = function(oid) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, err, oid, x$3;
		e = $ifaceNil;
		err = $ifaceNil;
    		if (oid.$length < 2 || (0 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 0]) > 2 || ((0 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 0]) < 2 && (1 >= oid.$length ? ($throwRuntimeError("index out of range"), undefined) : oid.$array[oid.$offset + 1]) >= 40)) {
    			_tmp = $ifaceNil;
			_tmp$1 = (x$3 = new StructuralError.ptr("invalid object identifier"), new x$3.constructor.elem(x$3));
			e = _tmp;
			err = _tmp$1;
			return [e, err];
    		}
    		_tmp$2 = ($convertSliceType(oid, oidEncoder));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		return [e, err];
    	};
makeObjectIdentifierencoding/asn1.StructuralError"encoding/asn1.makeObjectIdentifierencoding/asn1.oidEncoder !encoding/asn1.makePrintableStringencoding/asn1makePrintableString makePrintableString�l	makePrintableString = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, err, i, s, x$3;
		e = $ifaceNil;
		err = $ifaceNil;
  �+		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (!isPrintable(s.charCodeAt(i), true, false)) {
    				_tmp = $ifaceNil;
				_tmp$1 = (x$3 = new StructuralError.ptr("PrintableString contains invalid character"), new x$3.constructor.elem(x$3));
				e = _tmp;
				err = _tmp$1;
				return [e, err];
    			}
  �?			i = i + (1) >> 0;
    		}
    		_tmp$2 = new stringEncoder((s));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		return [e, err];
    	};
makePrintableStringencoding/asn1.StructuralErrorencoding/asn1.isPrintable!encoding/asn1.makePrintableStringencoding/asn1.stringEncoder encoding/asn1.makeIA5Stringencoding/asn1makeIA5String makeIA5String�K	makeIA5String = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, err, i, s, x$3;
		e = $ifaceNil;
		err = $ifaceNil;
  �l		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) > 127) {
    				_tmp = $ifaceNil;
				_tmp$1 = (x$3 = new StructuralError.ptr("IA5String contains invalid character"), new x$3.constructor.elem(x$3));
				e = _tmp;
				err = _tmp$1;
				return [e, err];
    			}
  ��			i = i + (1) >> 0;
    		}
    		_tmp$2 = new stringEncoder((s));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		return [e, err];
    	};
makeIA5Stringencoding/asn1.StructuralErrorencoding/asn1.makeIA5Stringencoding/asn1.stringEncoder encoding/asn1.makeNumericStringencoding/asn1makeNumericString makeNumericString�Y	makeNumericString = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, err, i, s, x$3;
		e = $ifaceNil;
		err = $ifaceNil;
  �G		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (!isNumeric(s.charCodeAt(i))) {
    				_tmp = $ifaceNil;
				_tmp$1 = (x$3 = new StructuralError.ptr("NumericString contains invalid character"), new x$3.constructor.elem(x$3));
				e = _tmp;
				err = _tmp$1;
				return [e, err];
    			}
  �[			i = i + (1) >> 0;
    		}
    		_tmp$2 = new stringEncoder((s));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		return [e, err];
    	};
makeNumericStringencoding/asn1.StructuralErrorencoding/asn1.isNumericencoding/asn1.makeNumericStringencoding/asn1.stringEncoder encoding/asn1.makeUTF8Stringencoding/asn1makeUTF8String makeUTF8StringX	makeUTF8String = function(s) {
		var s;
  �		return new stringEncoder((s));
    	};
makeUTF8Stringencoding/asn1.makeUTF8Stringencoding/asn1.stringEncoder encoding/asn1.appendTwoDigitsencoding/asn1appendTwoDigits appendTwoDigits��	appendTwoDigits = function(dst, v) {
		var _q, _r, _r$1, dst, v;
  �c		return $append(dst, (((48 + (_r = ((_q = v / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))) % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) >> 0) << 24 >>> 24)), (((48 + (_r$1 = v % 10, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) >> 0) << 24 >>> 24)));
    	};
appendTwoDigitsencoding/asn1.appendTwoDigits encoding/asn1.appendFourDigitsencoding/asn1appendFourDigits appendFourDigits��	appendFourDigits = function(dst, v) {
		var _i, _q, _r, _ref, bytes$1, dst, i, v, x$3;
  ��		bytes$1 = arrayType.zero();
  ��		_ref = bytes$1;
		_i = 0;
		while (true) {
			if (!(_i < 4)) { break; }
			i = _i;
  ��			(x$3 = 3 - i >> 0, ((x$3 < 0 || x$3 >= bytes$1.length) ? ($throwRuntimeError("index out of range"), undefined) : bytes$1[x$3] = (48 + (((_r = v % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) << 24 >>> 24)));
  �			v = (_q = v / (10), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
    			_i++;
		}
  �)		return $appendSlice(dst, new sliceType(bytes$1));
    	};
appendFourDigitsencoding/asn1.appendFourDigitsencoding/asn1.arrayTypeencoding/asn1.sliceType encoding/asn1.outsideUTCRangeencoding/asn1outsideUTCRange outsideUTCRange��	outsideUTCRange = function(t) {
		var _r, t, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; t = $f.t; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �v		_r = $clone(t, time.Time).Year(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		year = _r;
  ��		$s = -1; return year < 1950 || year >= 2050;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: outsideUTCRange }; } $f._r = _r; $f.t = t; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
outsideUTCRangeencoding/asn1.outsideUTCRange	time.Time encoding/asn1.makeUTCTimeencoding/asn1makeUTCTime makeUTCTime�	makeUTCTime = function(t) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, dst, e, err, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; dst = $f.dst; e = $f.e; err = $f.err; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = $ifaceNil;
		err = $ifaceNil;
  ��		dst = $makeSlice(sliceType, 0, 18);
  �		_r = appendUTCTime(dst, $clone(t, time.Time)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		dst = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp = $ifaceNil;
			_tmp$1 = err;
			e = _tmp;
			err = _tmp$1;
			$s = -1; return [e, err];
    		}
    		_tmp$2 = ($convertSliceType(dst, bytesEncoder));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		$s = -1; return [e, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeUTCTime }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.dst = dst; $f.e = e; $f.err = err; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
makeUTCTimeencoding/asn1.appendUTCTimeencoding/asn1.bytesEncoderencoding/asn1.makeUTCTimeencoding/asn1.sliceType	time.Time !encoding/asn1.makeGeneralizedTimeencoding/asn1makeGeneralizedTime makeGeneralizedTime�+	makeGeneralizedTime = function(t) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, dst, e, err, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; dst = $f.dst; e = $f.e; err = $f.err; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = $ifaceNil;
		err = $ifaceNil;
  ��		dst = $makeSlice(sliceType, 0, 20);
  ��		_r = appendGeneralizedTime(dst, $clone(t, time.Time)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		dst = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp = $ifaceNil;
			_tmp$1 = err;
			e = _tmp;
			err = _tmp$1;
			$s = -1; return [e, err];
    		}
    		_tmp$2 = ($convertSliceType(dst, bytesEncoder));
		_tmp$3 = $ifaceNil;
		e = _tmp$2;
		err = _tmp$3;
		$s = -1; return [e, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeGeneralizedTime }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.dst = dst; $f.e = e; $f.err = err; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
makeGeneralizedTime#encoding/asn1.appendGeneralizedTimeencoding/asn1.bytesEncoder!encoding/asn1.makeGeneralizedTimeencoding/asn1.sliceType	time.Time encoding/asn1.appendUTCTimeencoding/asn1appendUTCTime appendUTCTime��	appendUTCTime = function(dst, t) {
		var $24r, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, dst, err, ret, t, x$3, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; dst = $f.dst; err = $f.err; ret = $f.ret; t = $f.t; x$3 = $f.x$3; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ret = sliceType.nil;
		err = $ifaceNil;
  ��		_r = $clone(t, time.Time).Year(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		year = _r;
    		if (1950 <= year && year < 2000) {
  ��			dst = appendTwoDigits(dst, year - 1900 >> 0);
    		} else if (2000 <= year && year < 2050) {
  �			dst = appendTwoDigits(dst, year - 2000 >> 0);
    		} else {
    			_tmp = sliceType.nil;
			_tmp$1 = (x$3 = new StructuralError.ptr("cannot represent time as UTCTime"), new x$3.constructor.elem(x$3));
			ret = _tmp;
			err = _tmp$1;
			$s = -1; return [ret, err];
    		}
    		_r$1 = appendTimeCommon(dst, $clone(t, time.Time)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tmp$2 = _r$1;
		_tmp$3 = $ifaceNil;
		ret = _tmp$2;
		err = _tmp$3;
		$24r = [ret, err];
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: appendUTCTime }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.dst = dst; $f.err = err; $f.ret = ret; $f.t = t; $f.x$3 = x$3; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
appendUTCTimeencoding/asn1.StructuralErrorencoding/asn1.appendTimeCommonencoding/asn1.appendTwoDigitsencoding/asn1.appendUTCTimeencoding/asn1.sliceType	time.Time #encoding/asn1.appendGeneralizedTimeencoding/asn1appendGeneralizedTime appendGeneralizedTime�l	appendGeneralizedTime = function(dst, t) {
		var $24r, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, dst, err, ret, t, x$3, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; dst = $f.dst; err = $f.err; ret = $f.ret; t = $f.t; x$3 = $f.x$3; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		ret = sliceType.nil;
		err = $ifaceNil;
  ��		_r = $clone(t, time.Time).Year(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		year = _r;
    		if (year < 0 || year > 9999) {
    			_tmp = sliceType.nil;
			_tmp$1 = (x$3 = new StructuralError.ptr("cannot represent time as GeneralizedTime"), new x$3.constructor.elem(x$3));
			ret = _tmp;
			err = _tmp$1;
			$s = -1; return [ret, err];
    		}
  �{		dst = appendFourDigits(dst, year);
    		_r$1 = appendTimeCommon(dst, $clone(t, time.Time)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tmp$2 = _r$1;
		_tmp$3 = $ifaceNil;
		ret = _tmp$2;
		err = _tmp$3;
		$24r = [ret, err];
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: appendGeneralizedTime }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.dst = dst; $f.err = err; $f.ret = ret; $f.t = t; $f.x$3 = x$3; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
appendGeneralizedTimeencoding/asn1.StructuralErrorencoding/asn1.appendFourDigits#encoding/asn1.appendGeneralizedTimeencoding/asn1.appendTimeCommonencoding/asn1.sliceType	time.Time encoding/asn1.appendTimeCommonencoding/asn1appendTimeCommon appendTimeCommon�<	appendTimeCommon = function(dst, t) {
		var _q, _q$1, _q$2, _r, _r$1, _r$2, _r$3, _tuple, _tuple$1, _tuple$2, day, dst, hour, min, month, offset, offsetMinutes, sec, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; day = $f.day; dst = $f.dst; hour = $f.hour; min = $f.min; month = $f.month; offset = $f.offset; offsetMinutes = $f.offsetMinutes; sec = $f.sec; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  � 		_r = $clone(t, time.Time).Date(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		month = _tuple[1];
		day = _tuple[2];
  �		dst = appendTwoDigits(dst, ((month >> 0)));
  �D		dst = appendTwoDigits(dst, day);
  �f		_r$1 = $clone(t, time.Time).Clock(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		hour = _tuple$1[0];
		min = _tuple$1[1];
		sec = _tuple$1[2];
  ��		dst = appendTwoDigits(dst, hour);
  ��		dst = appendTwoDigits(dst, min);
  ��		dst = appendTwoDigits(dst, sec);
  ��		_r$2 = $clone(t, time.Time).Zone(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		offset = _tuple$2[1];
    		if (((_q = offset / 60, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) === 0)) {
  �"			$s = -1; return $append(dst, 90);
    		} else if (offset > 0) {
  �N			dst = $append(dst, 43);
    		} else if (offset < 0) {
  �y			dst = $append(dst, 45);
    		}
  ��		offsetMinutes = (_q$1 = offset / 60, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero"));
    		if (offsetMinutes < 0) {
  ��			offsetMinutes = -offsetMinutes;
    		}
  ��		dst = appendTwoDigits(dst, (_q$2 = offsetMinutes / 60, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")));
  �		dst = appendTwoDigits(dst, (_r$3 = offsetMinutes % 60, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero")));
  �M		$s = -1; return dst;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: appendTimeCommon }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.day = day; $f.dst = dst; $f.hour = hour; $f.min = min; $f.month = month; $f.offset = offset; $f.offsetMinutes = offsetMinutes; $f.sec = sec; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
appendTimeCommonencoding/asn1.appendTimeCommonencoding/asn1.appendTwoDigits	time.Time encoding/asn1.stripTagAndLengthencoding/asn1stripTagAndLength stripTagAndLength�	stripTagAndLength = function(in$1) {
		var _tuple, err, in$1, offset;
  ��		_tuple = parseTagAndLength(in$1, 0);
		offset = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ��			return in$1;
    		}
  ��		return $subslice(in$1, offset);
    	};
stripTagAndLengthencoding/asn1.parseTagAndLengthencoding/asn1.stripTagAndLength encoding/asn1.makeBodyencoding/asn1makeBody makeBody�Zk	makeBody = function(value, params) {
		var $24r, $24r$1, $24r$10, $24r$11, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, $24r$7, $24r$8, $24r$9, _1, _2, _3, _4, _5, _arg, _arg$1, _arg$2, _arg$3, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$28, _r$29, _r$3, _r$30, _r$31, _r$32, _r$33, _r$34, _r$35, _r$36, _r$37, _r$38, _r$39, _r$4, _r$40, _r$5, _r$6, _r$7, _r$8, _r$9, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$28, _tmp$29, _tmp$3, _tmp$30, _tmp$31, _tmp$32, _tmp$33, _tmp$34, _tmp$35, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$10, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, _v, bytes$1, e, err, fp, i, i$1, i$2, l, m, m$1, n, n1, params, s, sliceType$6, startingField, t, t$1, v, value, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$10 = $f.$24r$10; $24r$11 = $f.$24r$11; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; $24r$7 = $f.$24r$7; $24r$8 = $f.$24r$8; $24r$9 = $f.$24r$9; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _5 = $f._5; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$28 = $f._r$28; _r$29 = $f._r$29; _r$3 = $f._r$3; _r$30 = $f._r$30; _r$31 = $f._r$31; _r$32 = $f._r$32; _r$33 = $f._r$33; _r$34 = $f._r$34; _r$35 = $f._r$35; _r$36 = $f._r$36; _r$37 = $f._r$37; _r$38 = $f._r$38; _r$39 = $f._r$39; _r$4 = $f._r$4; _r$40 = $f._r$40; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$21 = $f._tmp$21; _tmp$22 = $f._tmp$22; _tmp$23 = $f._tmp$23; _tmp$24 = $f._tmp$24; _tmp$25 = $f._tmp$25; _tmp$26 = $f._tmp$26; _tmp$27 = $f._tmp$27; _tmp$28 = $f._tmp$28; _tmp$29 = $f._tmp$29; _tmp$3 = $f._tmp$3; _tmp$30 = $f._tmp$30; _tmp$31 = $f._tmp$31; _tmp$32 = $f._tmp$32; _tmp$33 = $f._tmp$33; _tmp$34 = $f._tmp$34; _tmp$35 = $f._tmp$35; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$10 = $f._tuple$10; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; _v = $f._v; bytes$1 = $f.bytes$1; e = $f.e; err = $f.err; fp = $f.fp; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; l = $f.l; m = $f.m; m$1 = $f.m$1; n = $f.n; n1 = $f.n1; params = $f.params; s = $f.s; sliceType$6 = $f.sliceType$6; startingField = $f.startingField; t = $f.t; t$1 = $f.t$1; v = $f.v; value = $f.value; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = $ifaceNil;
		err = $ifaceNil;
    			_1 = $clone(value, reflect.Value).Type();
  �U			/* */ if ($interfaceIsEqual(_1, (flagType))) { $s = 2; continue; }
			/* */ if ($interfaceIsEqual(_1, (timeType))) { $s = 3; continue; }
			/* */ if ($interfaceIsEqual(_1, (bitStringType))) { $s = 4; continue; }
			/* */ if ($interfaceIsEqual(_1, (objectIdentifierType))) { $s = 5; continue; }
			/* */ if ($interfaceIsEqual(_1, (bigIntType))) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if ($interfaceIsEqual(_1, (flagType))) { */ case 2:
    				_tmp = (bytesEncoder.nil);
				_tmp$1 = $ifaceNil;
				e = _tmp;
				err = _tmp$1;
				$s = -1; return [e, err];
    			/* } else if ($interfaceIsEqual(_1, (timeType))) { */ case 3:
  ��				_r = $clone(value, reflect.Value).Interface(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				t = $clone($assertType(_r, time.Time), time.Time);
  ��				if (params.timeType === 24) { _v = true; $s = 11; continue s; }
				_r$1 = outsideUTCRange($clone(t, time.Time)); /* */ $s = 12; case 12: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_v = _r$1; case 11:
				/* */ if (_v) { $s = 9; continue; }
				/* */ $s = 10; continue;
    				/* if (_v) { */ case 9:
    					_r$2 = makeGeneralizedTime($clone(t, time.Time)); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_tuple = _r$2;
					e = _tuple[0];
					err = _tuple[1];
					$24r = [e, err];
					$s = 14; case 14: return $24r;
    				/* } */ case 10:
    				_r$3 = makeUTCTime($clone(t, time.Time)); /* */ $s = 15; case 15: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$1 = _r$3;
				e = _tuple$1[0];
				err = _tuple$1[1];
				$24r$1 = [e, err];
				$s = 16; case 16: return $24r$1;
    			/* } else if ($interfaceIsEqual(_1, (bitStringType))) { */ case 4:
    				_r$4 = $clone(value, reflect.Value).Interface(); /* */ $s = 17; case 17: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_tmp$2 = (x$3 = ($clone($assertType(_r$4, BitString), bitStringEncoder)), new x$3.constructor.elem(x$3));
				_tmp$3 = $ifaceNil;
				e = _tmp$2;
				err = _tmp$3;
				$24r$2 = [e, err];
				$s = 18; case 18: return $24r$2;
    			/* } else if ($interfaceIsEqual(_1, (objectIdentifierType))) { */ case 5:
    				_r$5 = $clone(value, reflect.Value).Interface(); /* */ $s = 19; case 19: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_r$6 = makeObjectIdentifier($convertSliceType($assertType(_r$5, ObjectIdentifier), sliceType$1)); /* */ $s = 20; case 20: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_tuple$2 = _r$6;
				e = _tuple$2[0];
				err = _tuple$2[1];
				$24r$3 = [e, err];
				$s = 21; case 21: return $24r$3;
    			/* } else if ($interfaceIsEqual(_1, (bigIntType))) { */ case 6:
    				_r$7 = $clone(value, reflect.Value).Interface(); /* */ $s = 22; case 22: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_r$8 = makeBigInt($assertType(_r$7, ptrType$1)); /* */ $s = 23; case 23: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				_tuple$3 = _r$8;
				e = _tuple$3[0];
				err = _tuple$3[1];
				$24r$4 = [e, err];
				$s = 24; case 24: return $24r$4;
    			/* } */ case 7:
    		case 1:
  �<			v = value;
    			_2 = $clone(v, reflect.Value).Kind();
  �T			/* */ if (_2 === (1)) { $s = 26; continue; }
			/* */ if ((_2 === (2)) || (_2 === (3)) || (_2 === (4)) || (_2 === (5)) || (_2 === (6))) { $s = 27; continue; }
			/* */ if (_2 === (25)) { $s = 28; continue; }
			/* */ if (_2 === (23)) { $s = 29; continue; }
			/* */ if (_2 === (24)) { $s = 30; continue; }
			/* */ $s = 31; continue;
    			/* if (_2 === (1)) { */ case 26:
    				if ($clone(v, reflect.Value).Bool()) {
    					_tmp$4 = byteFFEncoder;
					_tmp$5 = $ifaceNil;
					e = _tmp$4;
					err = _tmp$5;
					$s = -1; return [e, err];
    				}
    				_tmp$6 = byte00Encoder;
				_tmp$7 = $ifaceNil;
				e = _tmp$6;
				err = _tmp$7;
				$s = -1; return [e, err];
    			/* } else if ((_2 === (2)) || (_2 === (3)) || (_2 === (4)) || (_2 === (5)) || (_2 === (6))) { */ case 27:
    				_tmp$8 = ((x$4 = $clone(v, reflect.Value).Int(), new int64Encoder(x$4.$high, x$4.$low)));
				_tmp$9 = $ifaceNil;
				e = _tmp$8;
				err = _tmp$9;
				$s = -1; return [e, err];
    			/* } else if (_2 === (25)) { */ case 28:
  �>				t$1 = $clone(v, reflect.Value).Type();
  �S				i = 0;
				/* while (true) { */ case 32:
					_r$9 = t$1.NumField(); /* */ $s = 34; case 34: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					/* if (!(i < _r$9)) { break; } */ if(!(i < _r$9)) { $s = 33; continue; }
  �v					_r$10 = t$1.Field(i); /* */ $s = 37; case 37: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
					_r$11 = $clone(_r$10, reflect.StructField).IsExported(); /* */ $s = 38; case 38: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					/* */ if (!_r$11) { $s = 35; continue; }
					/* */ $s = 36; continue;
    					/* if (!_r$11) { */ case 35:
    						_tmp$10 = $ifaceNil;
						_tmp$11 = (x$5 = new StructuralError.ptr("struct contains unexported fields"), new x$5.constructor.elem(x$5));
						e = _tmp$10;
						err = _tmp$11;
						$s = -1; return [e, err];
    					/* } */ case 36:
  �m					i = i + (1) >> 0;
    				$s = 32; continue;
				case 33:
  ��				startingField = 0;
  ��				_r$12 = t$1.NumField(); /* */ $s = 39; case 39: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
				n = _r$12;
    				if (n === 0) {
    					_tmp$12 = (bytesEncoder.nil);
					_tmp$13 = $ifaceNil;
					e = _tmp$12;
					err = _tmp$13;
					$s = -1; return [e, err];
    				}
  ��				_r$13 = t$1.Field(0); /* */ $s = 42; case 42: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
				/* */ if ($interfaceIsEqual(_r$13.Type, rawContentsType)) { $s = 40; continue; }
				/* */ $s = 41; continue;
    				/* if ($interfaceIsEqual(_r$13.Type, rawContentsType)) { */ case 40:
  ��					_r$14 = $clone(v, reflect.Value).Field(0); /* */ $s = 43; case 43: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
					s = _r$14;
  ��					/* */ if ($clone(s, reflect.Value).Len() > 0) { $s = 44; continue; }
					/* */ $s = 45; continue;
    					/* if ($clone(s, reflect.Value).Len() > 0) { */ case 44:
  �						_r$15 = $clone(s, reflect.Value).Bytes(); /* */ $s = 46; case 46: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
						bytes$1 = _r$15;
    						_tmp$14 = ($convertSliceType(stripTagAndLength(bytes$1), bytesEncoder));
						_tmp$15 = $ifaceNil;
						e = _tmp$14;
						err = _tmp$15;
						$s = -1; return [e, err];
    					/* } */ case 45:
  ��					startingField = 1;
    				/* } */ case 41:
  �					n1 = n - startingField >> 0;
    					_3 = n1;
  �?					/* */ if (_3 === (0)) { $s = 48; continue; }
					/* */ if (_3 === (1)) { $s = 49; continue; }
					/* */ $s = 50; continue;
    					/* if (_3 === (0)) { */ case 48:
    						_tmp$16 = (bytesEncoder.nil);
						_tmp$17 = $ifaceNil;
						e = _tmp$16;
						err = _tmp$17;
						$s = -1; return [e, err];
    					/* } else if (_3 === (1)) { */ case 49:
    						_r$16 = $clone(v, reflect.Value).Field(startingField); /* */ $s = 52; case 52: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
						_arg = $clone(_r$16, reflect.Value);
						_r$17 = t$1.Field(startingField); /* */ $s = 53; case 53: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
						_r$18 = new reflect.StructTag(_r$17.Tag).Get("asn1"); /* */ $s = 54; case 54: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
						_r$19 = parseFieldParameters(_r$18); /* */ $s = 55; case 55: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
						_arg$1 = $clone(_r$19, fieldParameters);
						_r$20 = makeField(_arg, _arg$1); /* */ $s = 56; case 56: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
						_tuple$4 = _r$20;
						e = _tuple$4[0];
						err = _tuple$4[1];
						$24r$5 = [e, err];
						$s = 57; case 57: return $24r$5;
    					/* } else { */ case 50:
  ��						m = $makeSlice(sliceType$5, n1);
  �
						i$1 = 0;
						/* while (true) { */ case 58:
							/* if (!(i$1 < n1)) { break; } */ if(!(i$1 < n1)) { $s = 59; continue; }
  �$							_r$21 = $clone(v, reflect.Value).Field(i$1 + startingField >> 0); /* */ $s = 60; case 60: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
							_arg$2 = $clone(_r$21, reflect.Value);
							_r$22 = t$1.Field(i$1 + startingField >> 0); /* */ $s = 61; case 61: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
							_r$23 = new reflect.StructTag(_r$22.Tag).Get("asn1"); /* */ $s = 62; case 62: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
							_r$24 = parseFieldParameters(_r$23); /* */ $s = 63; case 63: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
							_arg$3 = $clone(_r$24, fieldParameters);
							_r$25 = makeField(_arg$2, _arg$3); /* */ $s = 64; case 64: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
							_tuple$5 = _r$25;
							((i$1 < 0 || i$1 >= m.$length) ? ($throwRuntimeError("index out of range"), undefined) : m.$array[m.$offset + i$1] = _tuple$5[0]);
							err = _tuple$5[1];
    							if (!($interfaceIsEqual(err, $ifaceNil))) {
    								_tmp$18 = $ifaceNil;
								_tmp$19 = err;
								e = _tmp$18;
								err = _tmp$19;
								$s = -1; return [e, err];
    							}
  �							i$1 = i$1 + (1) >> 0;
    						$s = 58; continue;
						case 59:
    						_tmp$20 = ($convertSliceType(m, multiEncoder));
						_tmp$21 = $ifaceNil;
						e = _tmp$20;
						err = _tmp$21;
						$s = -1; return [e, err];
    					/* } */ case 51:
    				case 47:
    				$s = 31; continue;
    			/* } else if (_2 === (23)) { */ case 29:
  �				sliceType$6 = $clone(v, reflect.Value).Type();
  �				_r$26 = sliceType$6.Elem(); /* */ $s = 67; case 67: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
				_r$27 = _r$26.Kind(); /* */ $s = 68; case 68: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
				/* */ if (_r$27 === 8) { $s = 65; continue; }
				/* */ $s = 66; continue;
    				/* if (_r$27 === 8) { */ case 65:
    					_r$28 = $clone(v, reflect.Value).Bytes(); /* */ $s = 69; case 69: if($c) { $c = false; _r$28 = _r$28.$blk(); } if (_r$28 && _r$28.$blk !== undefined) { break s; }
					_tmp$22 = ($convertSliceType(_r$28, bytesEncoder));
					_tmp$23 = $ifaceNil;
					e = _tmp$22;
					err = _tmp$23;
					$24r$6 = [e, err];
					$s = 70; case 70: return $24r$6;
    				/* } */ case 66:
  �{				fp = new fieldParameters.ptr(false, false, false, false, ptrType$3.nil, ptrType$4.nil, 0, 0, false, false);
  Ø					l = $clone(v, reflect.Value).Len();
    					_4 = l;
  ì					/* */ if (_4 === (0)) { $s = 72; continue; }
					/* */ if (_4 === (1)) { $s = 73; continue; }
					/* */ $s = 74; continue;
    					/* if (_4 === (0)) { */ case 72:
    						_tmp$24 = (bytesEncoder.nil);
						_tmp$25 = $ifaceNil;
						e = _tmp$24;
						err = _tmp$25;
						$s = -1; return [e, err];
    					/* } else if (_4 === (1)) { */ case 73:
    						_r$29 = $clone(v, reflect.Value).Index(0); /* */ $s = 76; case 76: if($c) { $c = false; _r$29 = _r$29.$blk(); } if (_r$29 && _r$29.$blk !== undefined) { break s; }
						_r$30 = makeField($clone(_r$29, reflect.Value), $clone(fp, fieldParameters)); /* */ $s = 77; case 77: if($c) { $c = false; _r$30 = _r$30.$blk(); } if (_r$30 && _r$30.$blk !== undefined) { break s; }
						_tuple$6 = _r$30;
						e = _tuple$6[0];
						err = _tuple$6[1];
						$24r$7 = [e, err];
						$s = 78; case 78: return $24r$7;
    					/* } else { */ case 74:
  �						m$1 = $makeSlice(sliceType$5, l);
  �1						i$2 = 0;
						/* while (true) { */ case 79:
							/* if (!(i$2 < l)) { break; } */ if(!(i$2 < l)) { $s = 80; continue; }
  �J							_r$31 = $clone(v, reflect.Value).Index(i$2); /* */ $s = 81; case 81: if($c) { $c = false; _r$31 = _r$31.$blk(); } if (_r$31 && _r$31.$blk !== undefined) { break s; }
							_r$32 = makeField($clone(_r$31, reflect.Value), $clone(fp, fieldParameters)); /* */ $s = 82; case 82: if($c) { $c = false; _r$32 = _r$32.$blk(); } if (_r$32 && _r$32.$blk !== undefined) { break s; }
							_tuple$7 = _r$32;
							((i$2 < 0 || i$2 >= m$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : m$1.$array[m$1.$offset + i$2] = _tuple$7[0]);
							err = _tuple$7[1];
    							if (!($interfaceIsEqual(err, $ifaceNil))) {
    								_tmp$26 = $ifaceNil;
								_tmp$27 = err;
								e = _tmp$26;
								err = _tmp$27;
								$s = -1; return [e, err];
    							}
  �@							i$2 = i$2 + (1) >> 0;
    						$s = 79; continue;
						case 80:
    						if (params.set) {
    							_tmp$28 = ($convertSliceType(m$1, setEncoder));
							_tmp$29 = $ifaceNil;
							e = _tmp$28;
							err = _tmp$29;
							$s = -1; return [e, err];
    						}
    						_tmp$30 = ($convertSliceType(m$1, multiEncoder));
						_tmp$31 = $ifaceNil;
						e = _tmp$30;
						err = _tmp$31;
						$s = -1; return [e, err];
    					/* } */ case 75:
    				case 71:
    				$s = 31; continue;
    			/* } else if (_2 === (24)) { */ case 30:
    					_5 = params.stringType;
  �3					/* */ if (_5 === (22)) { $s = 84; continue; }
					/* */ if (_5 === (19)) { $s = 85; continue; }
					/* */ if (_5 === (18)) { $s = 86; continue; }
					/* */ $s = 87; continue;
    					/* if (_5 === (22)) { */ case 84:
    						_r$33 = $clone(v, reflect.Value).String(); /* */ $s = 89; case 89: if($c) { $c = false; _r$33 = _r$33.$blk(); } if (_r$33 && _r$33.$blk !== undefined) { break s; }
						_r$34 = makeIA5String(_r$33); /* */ $s = 90; case 90: if($c) { $c = false; _r$34 = _r$34.$blk(); } if (_r$34 && _r$34.$blk !== undefined) { break s; }
						_tuple$8 = _r$34;
						e = _tuple$8[0];
						err = _tuple$8[1];
						$24r$8 = [e, err];
						$s = 91; case 91: return $24r$8;
    					/* } else if (_5 === (19)) { */ case 85:
    						_r$35 = $clone(v, reflect.Value).String(); /* */ $s = 92; case 92: if($c) { $c = false; _r$35 = _r$35.$blk(); } if (_r$35 && _r$35.$blk !== undefined) { break s; }
						_r$36 = makePrintableString(_r$35); /* */ $s = 93; case 93: if($c) { $c = false; _r$36 = _r$36.$blk(); } if (_r$36 && _r$36.$blk !== undefined) { break s; }
						_tuple$9 = _r$36;
						e = _tuple$9[0];
						err = _tuple$9[1];
						$24r$9 = [e, err];
						$s = 94; case 94: return $24r$9;
    					/* } else if (_5 === (18)) { */ case 86:
    						_r$37 = $clone(v, reflect.Value).String(); /* */ $s = 95; case 95: if($c) { $c = false; _r$37 = _r$37.$blk(); } if (_r$37 && _r$37.$blk !== undefined) { break s; }
						_r$38 = makeNumericString(_r$37); /* */ $s = 96; case 96: if($c) { $c = false; _r$38 = _r$38.$blk(); } if (_r$38 && _r$38.$blk !== undefined) { break s; }
						_tuple$10 = _r$38;
						e = _tuple$10[0];
						err = _tuple$10[1];
						$24r$10 = [e, err];
						$s = 97; case 97: return $24r$10;
    					/* } else { */ case 87:
    						_r$39 = $clone(v, reflect.Value).String(); /* */ $s = 98; case 98: if($c) { $c = false; _r$39 = _r$39.$blk(); } if (_r$39 && _r$39.$blk !== undefined) { break s; }
						_r$40 = makeUTF8String(_r$39); /* */ $s = 99; case 99: if($c) { $c = false; _r$40 = _r$40.$blk(); } if (_r$40 && _r$40.$blk !== undefined) { break s; }
						_tmp$32 = _r$40;
						_tmp$33 = $ifaceNil;
						e = _tmp$32;
						err = _tmp$33;
						$24r$11 = [e, err];
						$s = 100; case 100: return $24r$11;
    					/* } */ case 88:
    				case 83:
    			/* } */ case 31:
    		case 25:
    		_tmp$34 = $ifaceNil;
		_tmp$35 = (x$6 = new StructuralError.ptr("unknown Go type"), new x$6.constructor.elem(x$6));
		e = _tmp$34;
		err = _tmp$35;
		$s = -1; return [e, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeBody }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$10 = $24r$10; $f.$24r$11 = $24r$11; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f.$24r$7 = $24r$7; $f.$24r$8 = $24r$8; $f.$24r$9 = $24r$9; $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._5 = _5; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$28 = _r$28; $f._r$29 = _r$29; $f._r$3 = _r$3; $f._r$30 = _r$30; $f._r$31 = _r$31; $f._r$32 = _r$32; $f._r$33 = _r$33; $f._r$34 = _r$34; $f._r$35 = _r$35; $f._r$36 = _r$36; $f._r$37 = _r$37; $f._r$38 = _r$38; $f._r$39 = _r$39; $f._r$4 = _r$4; $f._r$40 = _r$40; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$21 = _tmp$21; $f._tmp$22 = _tmp$22; $f._tmp$23 = _tmp$23; $f._tmp$24 = _tmp$24; $f._tmp$25 = _tmp$25; $f._tmp$26 = _tmp$26; $f._tmp$27 = _tmp$27; $f._tmp$28 = _tmp$28; $f._tmp$29 = _tmp$29; $f._tmp$3 = _tmp$3; $f._tmp$30 = _tmp$30; $f._tmp$31 = _tmp$31; $f._tmp$32 = _tmp$32; $f._tmp$33 = _tmp$33; $f._tmp$34 = _tmp$34; $f._tmp$35 = _tmp$35; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$10 = _tuple$10; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f._v = _v; $f.bytes$1 = bytes$1; $f.e = e; $f.err = err; $f.fp = fp; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.l = l; $f.m = m; $f.m$1 = m$1; $f.n = n; $f.n1 = n1; $f.params = params; $f.s = s; $f.sliceType$6 = sliceType$6; $f.startingField = startingField; $f.t = t; $f.t$1 = t$1; $f.v = v; $f.value = value; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
makeBody'encoding/asn1.BitStringencoding/asn1.ObjectIdentifierencoding/asn1.StructuralErrorencoding/asn1.bigIntTypeencoding/asn1.bitStringEncoderencoding/asn1.bitStringTypeencoding/asn1.byte00Encoderencoding/asn1.byteFFEncoderencoding/asn1.bytesEncoderencoding/asn1.fieldParametersencoding/asn1.flagTypeencoding/asn1.int64Encoderencoding/asn1.makeBigIntencoding/asn1.makeBodyencoding/asn1.makeField!encoding/asn1.makeGeneralizedTimeencoding/asn1.makeIA5Stringencoding/asn1.makeNumericString"encoding/asn1.makeObjectIdentifier!encoding/asn1.makePrintableStringencoding/asn1.makeUTCTimeencoding/asn1.makeUTF8Stringencoding/asn1.multiEncoder"encoding/asn1.objectIdentifierTypeencoding/asn1.outsideUTCRange"encoding/asn1.parseFieldParametersencoding/asn1.ptrType$1encoding/asn1.ptrType$3encoding/asn1.ptrType$4encoding/asn1.rawContentsTypeencoding/asn1.setEncoderencoding/asn1.sliceType$1encoding/asn1.sliceType$5encoding/asn1.stripTagAndLengthencoding/asn1.timeTypereflect.StructFieldreflect.StructTagreflect.Value	time.Time encoding/asn1.makeFieldencoding/asn1	makeField 	makeField�A	makeField = function(v, params) {
		var $24r, $24r$1, $24r$2, _1, _arg, _arg$1, _arg$2, _arg$3, _arg$4, _arg$5, _i, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _rune, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$27, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _v, _v$1, bodyLen, class$1, defaultValue, e, err, isCompound, matchAny, ok, params, r, rv, t, t$1, tag, tt, v, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _1 = $f._1; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _arg$4 = $f._arg$4; _arg$5 = $f._arg$5; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _rune = $f._rune; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$21 = $f._tmp$21; _tmp$22 = $f._tmp$22; _tmp$23 = $f._tmp$23; _tmp$24 = $f._tmp$24; _tmp$25 = $f._tmp$25; _tmp$26 = $f._tmp$26; _tmp$27 = $f._tmp$27; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _v = $f._v; _v$1 = $f._v$1; bodyLen = $f.bodyLen; class$1 = $f.class$1; defaultValue = $f.defaultValue; e = $f.e; err = $f.err; isCompound = $f.isCompound; matchAny = $f.matchAny; ok = $f.ok; params = $f.params; r = $f.r; rv = $f.rv; t = $f.t; t$1 = $f.t$1; tag = $f.tag; tt = $f.tt; v = $f.v; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = $ifaceNil;
		err = $ifaceNil;
  Ʋ		/* */ if (!$clone(v, reflect.Value).IsValid()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!$clone(v, reflect.Value).IsValid()) { */ case 1:
    			_tmp = $ifaceNil;
			_r = fmt.Errorf("asn1: cannot marshal nil value", new sliceType$2([])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tmp$1 = _r;
			e = _tmp;
			err = _tmp$1;
			$24r = [e, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �<		if (!($clone(v, reflect.Value).Kind() === 20)) { _v = false; $s = 7; continue s; }
		_r$1 = $clone(v, reflect.Value).Type().NumMethod(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v = _r$1 === 0; case 7:
		/* */ if (_v) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (_v) { */ case 5:
    			_r$2 = $clone(v, reflect.Value).Elem(); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = makeField($clone(_r$2, reflect.Value), $clone(params, fieldParameters)); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple = _r$3;
			e = _tuple[0];
			err = _tuple[1];
			$24r$1 = [e, err];
			$s = 11; case 11: return $24r$1;
    		/* } */ case 6:
    		if (($clone(v, reflect.Value).Kind() === 23) && ($clone(v, reflect.Value).Len() === 0) && params.omitEmpty) {
    			_tmp$2 = (bytesEncoder.nil);
			_tmp$3 = $ifaceNil;
			e = _tmp$2;
			err = _tmp$3;
			$s = -1; return [e, err];
    		}
  �		/* */ if (params.optional && !(params.defaultValue === ptrType$3.nil) && canHaveDefaultValue($clone(v, reflect.Value).Kind())) { $s = 12; continue; }
		/* */ $s = 13; continue;
    		/* if (params.optional && !(params.defaultValue === ptrType$3.nil) && canHaveDefaultValue($clone(v, reflect.Value).Kind())) { */ case 12:
  �d			_r$4 = $clone(reflect.New($clone(v, reflect.Value).Type()), reflect.Value).Elem(); /* */ $s = 14; case 14: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			defaultValue = _r$4;
  ȓ			$clone(defaultValue, reflect.Value).SetInt(params.defaultValue.$get());
  ��			_r$5 = $clone(v, reflect.Value).Interface(); /* */ $s = 17; case 17: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_arg = _r$5;
			_r$6 = $clone(defaultValue, reflect.Value).Interface(); /* */ $s = 18; case 18: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_arg$1 = _r$6;
			_r$7 = reflect.DeepEqual(_arg, _arg$1); /* */ $s = 19; case 19: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			/* */ if (_r$7) { $s = 15; continue; }
			/* */ $s = 16; continue;
    			/* if (_r$7) { */ case 15:
    				_tmp$4 = (bytesEncoder.nil);
				_tmp$5 = $ifaceNil;
				e = _tmp$4;
				err = _tmp$5;
				$s = -1; return [e, err];
    			/* } */ case 16:
    		/* } */ case 13:
  ��		/* */ if (params.optional && params.defaultValue === ptrType$3.nil) { $s = 20; continue; }
		/* */ $s = 21; continue;
    		/* if (params.optional && params.defaultValue === ptrType$3.nil) { */ case 20:
  �!			_r$8 = $clone(v, reflect.Value).Interface(); /* */ $s = 24; case 24: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			_arg$2 = _r$8;
			_r$9 = reflect.Zero($clone(v, reflect.Value).Type()); /* */ $s = 25; case 25: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_r$10 = $clone(_r$9, reflect.Value).Interface(); /* */ $s = 26; case 26: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_arg$3 = _r$10;
			_r$11 = reflect.DeepEqual(_arg$2, _arg$3); /* */ $s = 27; case 27: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			/* */ if (_r$11) { $s = 22; continue; }
			/* */ $s = 23; continue;
    			/* if (_r$11) { */ case 22:
    				_tmp$6 = (bytesEncoder.nil);
				_tmp$7 = $ifaceNil;
				e = _tmp$6;
				err = _tmp$7;
				$s = -1; return [e, err];
    			/* } */ case 23:
    		/* } */ case 21:
  ʕ		/* */ if ($interfaceIsEqual($clone(v, reflect.Value).Type(), rawValueType)) { $s = 28; continue; }
		/* */ $s = 29; continue;
    		/* if ($interfaceIsEqual($clone(v, reflect.Value).Type(), rawValueType)) { */ case 28:
  ʵ			_r$12 = $clone(v, reflect.Value).Interface(); /* */ $s = 30; case 30: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			rv = $clone($assertType(_r$12, RawValue), RawValue);
    			if (!((rv.FullBytes.$length === 0))) {
    				_tmp$8 = ($convertSliceType(rv.FullBytes, bytesEncoder));
				_tmp$9 = $ifaceNil;
				e = _tmp$8;
				err = _tmp$9;
				$s = -1; return [e, err];
    			}
  �#			t = new taggedEncoder.ptr(arrayType$1.zero(), $ifaceNil, $ifaceNil);
  �>			t.tag = ($convertSliceType(appendTagAndLength($subslice(new sliceType(t.scratch), 0, 0), new tagAndLength.ptr(rv.Class, rv.Tag, rv.Bytes.$length, rv.IsCompound)), bytesEncoder));
  ˶			t.body = ($convertSliceType(rv.Bytes, bytesEncoder));
    			_tmp$10 = t;
			_tmp$11 = $ifaceNil;
			e = _tmp$10;
			err = _tmp$11;
			$s = -1; return [e, err];
    		/* } */ case 29:
  ��		_r$13 = getUniversalType($clone(v, reflect.Value).Type()); /* */ $s = 31; case 31: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
		_tuple$1 = _r$13;
		matchAny = _tuple$1[0];
		tag = _tuple$1[1];
		isCompound = _tuple$1[2];
		ok = _tuple$1[3];
  �)		/* */ if (!ok || matchAny) { $s = 32; continue; }
		/* */ $s = 33; continue;
    		/* if (!ok || matchAny) { */ case 32:
    			_tmp$12 = $ifaceNil;
			_r$14 = fmt.Sprintf("unknown Go type: %v", new sliceType$2([$clone(v, reflect.Value).Type()])); /* */ $s = 34; case 34: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
			_tmp$13 = (x$3 = new StructuralError.ptr(_r$14), new x$3.constructor.elem(x$3));
			e = _tmp$12;
			err = _tmp$13;
			$24r$2 = [e, err];
			$s = 35; case 35: return $24r$2;
    		/* } */ case 33:
    		if (!((params.timeType === 0)) && !((tag === 23))) {
    			_tmp$14 = $ifaceNil;
			_tmp$15 = (x$4 = new StructuralError.ptr("explicit time type given to non-time member"), new x$4.constructor.elem(x$4));
			e = _tmp$14;
			err = _tmp$15;
			$s = -1; return [e, err];
    		}
    		if (!((params.stringType === 0)) && !((tag === 19))) {
    			_tmp$16 = $ifaceNil;
			_tmp$17 = (x$5 = new StructuralError.ptr("explicit string type given to non-string member"), new x$5.constructor.elem(x$5));
			e = _tmp$16;
			err = _tmp$17;
			$s = -1; return [e, err];
    		}
    			_1 = tag;
  ͭ			/* */ if (_1 === (19)) { $s = 37; continue; }
			/* */ if (_1 === (23)) { $s = 38; continue; }
			/* */ $s = 39; continue;
    			/* if (_1 === (19)) { */ case 37:
  ��				/* */ if (params.stringType === 0) { $s = 40; continue; }
				/* */ $s = 41; continue;
    				/* if (params.stringType === 0) { */ case 40:
  Υ					_r$15 = $clone(v, reflect.Value).String(); /* */ $s = 43; case 43: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					_ref = _r$15;
					_i = 0;
					/* while (true) { */ case 44:
						/* if (!(_i < _ref.length)) { break; } */ if(!(_i < _ref.length)) { $s = 45; continue; }
						_rune = $decodeRune(_ref, _i);
						r = _rune[0];
  ��						/* */ if (r >= 128 || !isPrintable(((r << 24 >>> 24)), false, false)) { $s = 46; continue; }
						/* */ $s = 47; continue;
    						/* if (r >= 128 || !isPrintable(((r << 24 >>> 24)), false, false)) { */ case 46:
  �							_r$16 = $clone(v, reflect.Value).String(); /* */ $s = 50; case 50: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
							_r$17 = utf8.ValidString(_r$16); /* */ $s = 51; case 51: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
							/* */ if (!_r$17) { $s = 48; continue; }
							/* */ $s = 49; continue;
    							/* if (!_r$17) { */ case 48:
    								_tmp$18 = $ifaceNil;
								_tmp$19 = errors.New("asn1: string not valid UTF-8");
								e = _tmp$18;
								err = _tmp$19;
								$s = -1; return [e, err];
    							/* } */ case 49:
  ϋ							tag = 12;
  Ϥ							/* break; */ $s = 45; continue;
    						/* } */ case 47:
    						_i += _rune[1];
					$s = 44; continue;
					case 45:
    					$s = 42; continue;
				/* } else { */ case 41:
  ��					tag = params.stringType;
    				/* } */ case 42:
    				$s = 39; continue;
    			/* } else if (_1 === (23)) { */ case 38:
  ��				if (params.timeType === 24) { _v$1 = true; $s = 54; continue s; }
				_r$18 = $clone(v, reflect.Value).Interface(); /* */ $s = 55; case 55: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				_r$19 = outsideUTCRange($clone($assertType(_r$18, time.Time), time.Time)); /* */ $s = 56; case 56: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
				_v$1 = _r$19; case 54:
				/* */ if (_v$1) { $s = 52; continue; }
				/* */ $s = 53; continue;
    				/* if (_v$1) { */ case 52:
  �O					tag = 24;
    				/* } */ case 53:
    			/* } */ case 39:
    		case 36:
    		if (params.set) {
    			if (!((tag === 16))) {
    				_tmp$20 = $ifaceNil;
				_tmp$21 = (x$6 = new StructuralError.ptr("non sequence tagged as set"), new x$6.constructor.elem(x$6));
				e = _tmp$20;
				err = _tmp$21;
				$s = -1; return [e, err];
    			}
  ��			tag = 17;
    		}
    		if ((tag === 17) && !params.set) {
  �m			params.set = true;
    		}
  ҄		t$1 = new taggedEncoder.ptr(arrayType$1.zero(), $ifaceNil, $ifaceNil);
  Ҟ		_r$20 = makeBody($clone(v, reflect.Value), $clone(params, fieldParameters)); /* */ $s = 57; case 57: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
		_tuple$2 = _r$20;
		t$1.body = _tuple$2[0];
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp$22 = $ifaceNil;
			_tmp$23 = err;
			e = _tmp$22;
			err = _tmp$23;
			$s = -1; return [e, err];
    		}
  ��		_r$21 = t$1.body.Len(); /* */ $s = 58; case 58: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
		bodyLen = _r$21;
  �		class$1 = 0;
  �		/* */ if (!(params.tag === ptrType$4.nil)) { $s = 59; continue; }
		/* */ $s = 60; continue;
    		/* if (!(params.tag === ptrType$4.nil)) { */ case 59:
    			if (params.application) {
  �O				class$1 = 1;
    			} else if (params.private$3) {
  ӈ				class$1 = 3;
    			} else {
  ӫ				class$1 = 2;
    			}
  ��			/* */ if (params.explicit) { $s = 61; continue; }
			/* */ $s = 62; continue;
    			/* if (params.explicit) { */ case 61:
  ��				t$1.tag = ($convertSliceType(appendTagAndLength($subslice(new sliceType(t$1.scratch), 0, 0), new tagAndLength.ptr(0, tag, bodyLen, isCompound)), bytesEncoder));
  �[				tt = new taggedEncoder.ptr(arrayType$1.zero(), $ifaceNil, $ifaceNil);
  �x				tt.body = t$1;
  Ԉ				_arg$4 = $subslice(new sliceType(tt.scratch), 0, 0);
				_r$22 = t$1.tag.Len(); /* */ $s = 63; case 63: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
				_arg$5 = new tagAndLength.ptr(class$1, params.tag.$get(), bodyLen + _r$22 >> 0, true);
				_r$23 = appendTagAndLength(_arg$4, _arg$5); /* */ $s = 64; case 64: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
				tt.tag = ($convertSliceType(_r$23, bytesEncoder));
    				_tmp$24 = tt;
				_tmp$25 = $ifaceNil;
				e = _tmp$24;
				err = _tmp$25;
				$s = -1; return [e, err];
    			/* } */ case 62:
  �t			tag = params.tag.$get();
    		/* } */ case 60:
  Ջ		t$1.tag = ($convertSliceType(appendTagAndLength($subslice(new sliceType(t$1.scratch), 0, 0), new tagAndLength.ptr(class$1, tag, bodyLen, isCompound)), bytesEncoder));
    		_tmp$26 = t$1;
		_tmp$27 = $ifaceNil;
		e = _tmp$26;
		err = _tmp$27;
		$s = -1; return [e, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeField }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._1 = _1; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._arg$4 = _arg$4; $f._arg$5 = _arg$5; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._rune = _rune; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$21 = _tmp$21; $f._tmp$22 = _tmp$22; $f._tmp$23 = _tmp$23; $f._tmp$24 = _tmp$24; $f._tmp$25 = _tmp$25; $f._tmp$26 = _tmp$26; $f._tmp$27 = _tmp$27; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._v = _v; $f._v$1 = _v$1; $f.bodyLen = bodyLen; $f.class$1 = class$1; $f.defaultValue = defaultValue; $f.e = e; $f.err = err; $f.isCompound = isCompound; $f.matchAny = matchAny; $f.ok = ok; $f.params = params; $f.r = r; $f.rv = rv; $f.t = t; $f.t$1 = t$1; $f.tag = tag; $f.tt = tt; $f.v = v; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeFieldencoding/asn1.RawValueencoding/asn1.StructuralError encoding/asn1.appendTagAndLengthencoding/asn1.arrayType$1encoding/asn1.bytesEncoder!encoding/asn1.canHaveDefaultValueencoding/asn1.fieldParametersencoding/asn1.getUniversalTypeencoding/asn1.isPrintableencoding/asn1.makeBodyencoding/asn1.makeFieldencoding/asn1.outsideUTCRangeencoding/asn1.ptrType$3encoding/asn1.ptrType$4encoding/asn1.rawValueTypeencoding/asn1.sliceTypeencoding/asn1.sliceType$2encoding/asn1.tagAndLengthencoding/asn1.taggedEncoder
errors.New
fmt.Errorffmt.Sprintfreflect.DeepEqualreflect.Newreflect.Valuereflect.Zero	time.Timeunicode/utf8.ValidString encoding/asn1.Marshalencoding/asn1Marshal Marshal��	Marshal = function(val) {
		var $24r, _r, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �v		_r = MarshalWithParams(val, ""); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Marshal }; } $f.$24r = $24r; $f._r = _r; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Marshal = Marshal;
Marshalencoding/asn1.Marshalencoding/asn1.MarshalWithParams encoding/asn1.MarshalWithParamsencoding/asn1MarshalWithParams MarshalWithParams�*	MarshalWithParams = function(val, params) {
		var _r, _r$1, _r$2, _tuple, b, e, err, params, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; b = $f.b; e = $f.e; err = $f.err; params = $f.params; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �v		_r = reflect.ValueOf(val); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = makeField($clone(_r, reflect.Value), $clone(parseFieldParameters(params), fieldParameters)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		e = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ��			$s = -1; return [sliceType.nil, err];
    		}
  ��		_r$2 = e.Len(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		b = $makeSlice(sliceType, _r$2);
  �		$r = e.Encode(b); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return [b, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MarshalWithParams }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.b = b; $f.e = e; $f.err = err; $f.params = params; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MarshalWithParams = MarshalWithParams;
MarshalWithParamsencoding/asn1.MarshalWithParamsencoding/asn1.fieldParametersencoding/asn1.makeField"encoding/asn1.parseFieldParametersencoding/asn1.sliceTypereflect.Valuereflect.ValueOf �-N{"Base":55839,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/asn1/asn1.go","Base":1,"Size":32423,"Lines":[0,55,109,159,160,233,267,270,339,391,404,405,485,561,637,716,791,863,866,937,965,966,975,985,992,1000,1012,1023,1034,1042,1059,1075,1077,1078,1154,1194,1224,1236,1238,1239,1324,1325,1383,1409,1421,1423,1424,1502,1503,1568,1569,1580,1581,1634,1656,1695,1704,1707,1708,1781,1850,1900,1919,1928,1942,1954,1967,1977,2016,2019,2020,2028,2030,2031,2042,2043,2114,2149,2189,2211,2253,2256,2278,2291,2294,2385,2443,2446,2458,2460,2461,2534,2557,2612,2639,2656,2665,2668,2689,2732,2777,2786,2789,2848,2860,2893,2896,2897,2955,2989,3023,3031,3033,3034,3113,3128,3175,3220,3236,3239,3272,3289,3305,3308,3343,3392,3395,3421,3423,3424,3451,3452,3534,3549,3600,3645,3663,3666,3687,3733,3765,3804,3832,3859,3863,3888,3911,3926,3944,3947,3968,3985,3987,3988,4002,4003,4082,4157,4211,4235,4280,4317,4319,4320,4394,4412,4447,4479,4490,4493,4505,4525,4556,4558,4559,4638,4684,4725,4763,4801,4818,4821,4822,4855,4883,4920,4957,4987,4990,4991,5001,5003,5004,5091,5154,5176,5222,5231,5234,5264,5287,5327,5374,5432,5441,5444,5492,5515,5523,5525,5526,5534,5535,5614,5656,5657,5731,5766,5767,5788,5789,5851,5879,5880,5949,6013,6041,6056,6059,6091,6116,6132,6136,6139,6140,6153,6155,6156,6201,6215,6216,6240,6253,6265,6269,6292,6295,6296,6306,6308,6309,6387,6465,6502,6577,6599,6652,6661,6664,6665,6738,6808,6839,6840,6884,6959,7033,7079,7124,7141,7150,7153,7166,7182,7198,7208,7219,7235,7238,7239,7247,7281,7331,7349,7359,7363,7374,7377,7389,7397,7399,7400,7414,7415,7463,7483,7484,7492,7493,7551,7566,7567,7645,7707,7789,7810,7827,7879,7923,8000,8020,8075,8085,8089,8103,8124,8195,8214,8247,8304,8314,8318,8345,8356,8375,8395,8464,8494,8550,8555,8565,8569,8572,8621,8629,8631,8632,8643,8644,8705,8725,8726,8758,8795,8812,8846,8884,8887,8904,8913,8916,8917,8976,9120,9129,9132,9133,9158,9263,9295,9298,9299,9307,9309,9310,9387,9422,9491,9532,9552,9553,9607,9616,9619,9620,9679,9823,9826,9827,9835,9837,9838,9855,9856,9934,9953,10017,10044,10065,10135,10139,10142,10169,10171,10172,10248,10278,10310,10321,10323,10324,10343,10344,10420,10445,10511,10538,10592,10659,10669,10673,10676,10697,10705,10707,10708,10731,10755,10756,10764,10800,10837,10838,10876,10915,10917,10918,10998,11076,11149,11229,11261,11287,11313,11340,11366,11380,11394,11408,11422,11481,11541,11598,11632,11690,11746,11804,11850,11882,11884,11885,11898,11899,11973,12003,12063,12090,12116,12177,12187,12191,12194,12215,12223,12225,12226,12239,12240,12320,12350,12410,12437,12439,12440,12454,12455,12533,12558,12619,12644,12698,12701,12728,12730,12731,12744,12745,12818,12884,12940,12968,13025,13028,13029,13062,13142,13172,13175,13176,13218,13244,13306,13334,13337,13338,13375,13377,13378,13430,13453,13469,13486,13505,13555,13557,13558,13631,13709,13784,13807,13808,13819,13820,13899,13976,14052,14125,14222,14243,14312,14365,14392,14456,14465,14468,14488,14498,14523,14556,14581,14582,14660,14683,14705,14761,14779,14789,14793,14838,14860,14900,14910,14914,14917,14944,14991,15000,15003,15022,15032,15050,15099,15128,15138,15200,15228,15249,15307,15317,15321,15338,15372,15401,15450,15461,15466,15487,15499,15527,15571,15591,15637,15648,15653,15673,15697,15721,15766,15831,15842,15847,15851,15901,15926,15973,15983,15987,15990,15991,15999,16001,16002,16082,16158,16199,16314,16385,16395,16448,16457,16460,16461,16531,16585,16603,16644,16665,16717,16735,16745,16749,16766,16866,16919,16977,17007,17037,17076,17130,17152,17156,17157,17261,17311,17321,17325,17376,17419,17429,17433,17454,17470,17473,17535,17564,17577,17613,17677,17695,17705,17709,17712,17720,17722,17723,17729,17781,17840,17894,17946,17998,18049,18105,18158,18160,18161,18235,18263,18322,18384,18386,18387,18464,18544,18567,18680,18701,18724,18725,18812,18839,18874,18917,18921,18930,18933,18934,18962,19060,19081,19133,19151,19161,19165,19216,19255,19265,19269,19294,19344,19393,19411,19439,19490,19516,19565,19587,19632,19654,19699,19722,19768,19788,19829,19851,19896,19912,19964,19984,20027,20055,20106,20130,20154,20176,20221,20233,20309,20314,20318,20339,20357,20367,20371,20392,20426,20430,20439,20442,20443,20495,20512,20521,20524,20546,20586,20612,20648,20652,20680,20734,20744,20748,20839,20873,20934,20962,21016,21036,21048,21054,21066,21097,21173,21185,21191,21211,21222,21227,21238,21300,21336,21347,21371,21383,21450,21455,21465,21469,21472,21473,21547,21558,21629,21638,21641,21642,21713,21783,21854,21903,21944,21977,21995,22096,22121,22126,22163,22199,22203,22206,22207,22278,22301,22394,22430,22433,22434,22451,22475,22478,22479,22512,22545,22574,22575,22619,22658,22686,22716,22719,22720,22786,22821,22849,22879,22882,22883,22945,22976,23004,23034,23037,23038,23096,23178,23226,23289,23324,23334,23357,23368,23499,23503,23512,23515,23565,23603,23612,23615,23662,23682,23683,23746,23789,23806,23890,23899,23924,23970,23979,23997,24036,24045,24063,24097,24135,24145,24149,24194,24203,24222,24266,24285,24315,24319,24332,24341,24354,24366,24375,24392,24437,24456,24474,24478,24491,24500,24503,24534,24554,24598,24617,24644,24648,24661,24670,24719,24749,24794,24814,24847,24852,24866,24877,24922,24942,24968,24973,24987,24991,25000,25058,25080,25106,25107,25154,25196,25259,25270,25275,25279,25280,25314,25363,25400,25456,25460,25461,25480,25527,25559,25607,25620,25625,25742,25761,25772,25777,25781,25842,25904,25941,25950,25971,25996,26044,26119,26169,26179,26183,26260,26279,26300,26304,26317,26326,26348,26363,26387,26414,26459,26484,26527,26548,26587,26608,26647,26669,26709,26734,26788,26846,26900,26955,26994,27015,27054,27055,27066,27156,27160,27178,27198,27202,27211,27214,27274,27282,27284,27285,27363,27410,27458,27470,27548,27562,27565,27566,27580,27582,27583,27662,27742,27804,27878,27901,27910,27913,27924,27957,27966,27969,28005,28038,28041,28049,28051,28052,28111,28192,28251,28311,28367,28370,28440,28512,28579,28650,28707,28710,28770,28814,28867,28903,28906,28960,28963,29016,29019,29070,29091,29094,29150,29153,29223,29226,29311,29314,29381,29449,29486,29489,29542,29608,29611,29666,29716,29771,29774,29848,29851,29908,29960,30066,30147,30196,30268,30346,30349,30423,30493,30572,30581,30584,30654,30728,30799,30802,30878,30931,30934,31005,31080,31157,31196,31199,31262,31298,31367,31407,31409,31410,31489,31547,31583,31602,31604,31605,31654,31674,31724,31727,31728,31763,31840,31843,31911,31913,31914,31985,32061,32155,32182,32225,32283,32286,32359,32376,32394,32397,32421],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/asn1/common.go","Base":32425,"Size":5812,"Lines":[0,55,109,159,160,173,174,183,194,205,216,218,219,266,303,358,404,444,445,488,489,547,555,579,603,627,651,675,699,724,749,774,799,824,849,874,899,924,949,974,999,1001,1002,1059,1067,1093,1119,1145,1171,1173,1174,1201,1225,1250,1252,1253,1330,1406,1445,1448,1528,1604,1677,1680,1753,1833,1855,1858,1929,1932,2010,2088,2146,2147,2233,2263,2318,2378,2441,2499,2577,2643,2706,2767,2832,2914,2915,2931,2973,2975,2976,3048,3120,3161,3223,3240,3260,3311,3374,3409,3422,3445,3456,3490,3494,3505,3532,3555,3582,3605,3628,3651,3656,3686,3723,3745,3774,3796,3829,3857,3896,3922,3959,3982,4016,4060,4108,4127,4161,4187,4192,4232,4268,4287,4310,4327,4332,4354,4372,4402,4428,4451,4474,4479,4505,4527,4550,4573,4578,4606,4630,4634,4637,4645,4647,4648,4726,4757,4849,4861,4881,4912,4940,4976,4997,5039,5055,5095,5117,5154,5172,5212,5215,5234,5254,5294,5372,5412,5434,5474,5495,5535,5580,5584,5626,5662,5666,5706,5728,5776,5779,5810],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/asn1/marshal.go","Base":38238,"Size":17600,"Lines":[0,55,109,159,160,173,174,183,192,202,209,221,232,240,248,264,266,267,273,316,359,361,362,434,459,527,538,601,621,623,624,646,647,680,690,692,693,735,753,755,756,781,782,816,831,833,834,877,906,932,935,937,938,964,965,1000,1015,1017,1018,1062,1091,1117,1120,1122,1123,1151,1152,1186,1200,1223,1241,1244,1257,1259,1260,1303,1316,1339,1361,1378,1381,1383,1384,1410,1411,1443,1457,1480,1498,1501,1514,1516,1517,1558,1628,1698,1769,1810,1814,1880,1948,1993,2022,2045,2076,2093,2096,2097,2134,2200,2265,2334,2401,2467,2486,2525,2529,2530,2543,2566,2587,2603,2606,2608,2609,2637,2709,2761,2778,2795,2812,2814,2815,2851,2886,2888,2889,2934,2953,2987,2989,2990,3014,3015,3049,3057,3058,3073,3079,3089,3092,3093,3109,3115,3125,3128,3129,3139,3141,3142,3185,3199,3200,3226,3264,3267,3269,3270,3307,3320,3331,3334,3335,3343,3373,3379,3382,3383,3393,3395,3396,3448,3474,3475,3506,3534,3546,3560,3573,3577,3578,3601,3604,3605,3617,3619,3620,3667,3682,3729,3732,3733,3752,3815,3865,3928,3991,4024,4055,4082,4107,4127,4131,4176,4251,4255,4289,4316,4378,4406,4416,4437,4481,4540,4578,4653,4657,4691,4694,4696,4697,4743,4765,4766,4786,4830,4833,4834,4846,4848,4849,4891,4905,4920,4933,4943,4946,4954,4956,4957,5018,5044,5063,5075,5078,5096,5108,5131,5175,5185,5205,5228,5231,5232,5254,5284,5318,5354,5364,5400,5403,5404,5416,5418,5419,5451,5452,5490,5515,5517,5518,5565,5605,5650,5676,5679,5681,5682,5704,5705,5739,5789,5822,5861,5864,5874,5876,5877,5920,5978,6011,6056,6059,6061,6062,6124,6189,6248,6251,6252,6281,6283,6284,6344,6375,6439,6497,6557,6614,6670,6691,6749,6826,6830,6833,6834,6864,6866,6867,6921,6952,6970,7041,7045,7048,7049,7079,7081,7082,7140,7171,7195,7270,7274,7277,7278,7308,7310,7311,7351,7376,7378,7379,7428,7485,7487,7488,7538,7557,7581,7613,7623,7626,7659,7661,7662,7703,7721,7757,7759,7760,7815,7843,7844,7878,7895,7913,7916,7917,7948,7950,7951,8014,8042,8043,8085,8102,8120,8123,8124,8155,8157,8158,8228,8246,8247,8257,8292,8332,8367,8407,8417,8483,8486,8487,8525,8527,8528,8606,8624,8654,8728,8731,8732,8767,8768,8806,8808,8809,8865,8892,8893,8933,8966,8967,8996,8997,9031,9064,9097,9098,9121,9122,9132,9154,9180,9198,9223,9241,9266,9269,9270,9300,9324,9357,9360,9361,9407,9453,9454,9466,9468,9469,9512,9556,9573,9585,9588,9608,9610,9611,9695,9718,9734,9766,9782,9819,9886,9919,9923,9947,9968,10030,10058,10126,10144,10194,10197,10198,10229,10249,10265,10294,10298,10326,10404,10440,10462,10478,10479,10517,10550,10619,10624,10628,10629,10650,10651,10671,10685,10718,10722,10723,10781,10842,10884,10903,10923,10946,10994,11041,11089,11105,11160,11165,11166,11187,11191,11192,11231,11241,11274,11284,11390,11401,11429,11458,11574,11594,11615,11621,11626,11627,11658,11662,11683,11707,11755,11794,11798,11799,11824,11825,11852,11862,11895,11905,11941,11952,11979,11980,12008,12050,12070,12091,12097,12102,12103,12122,12152,12157,12188,12192,12214,12243,12264,12300,12327,12369,12394,12434,12445,12487,12491,12494,12495,12543,12545,12546,12627,12646,12705,12708,12765,12830,12867,12870,12871,12939,12971,12974,12975,13060,13107,13151,13152,13218,13251,13255,13258,13259,13328,13398,13453,13505,13581,13614,13618,13621,13622,13653,13686,13716,13758,13762,13763,13789,13790,13910,13944,13945,13961,13964,13965,14026,14048,14124,14127,14128,14176,14253,14256,14257,14315,14396,14399,14400,14414,14440,14470,14536,14598,14660,14694,14780,14820,14881,14888,14913,14924,14930,14935,14946,14973,14977,14995,15086,15114,15118,15121,15122,15139,15165,15226,15230,15245,15248,15249,15321,15390,15463,15536,15594,15629,15649,15652,15653,15678,15679,15714,15731,15749,15752,15753,15778,15779,15804,15828,15854,15882,15911,15935,15946,15978,15982,15983,16006,16121,16122,16150,16151,16166,16167,16241,16264,16293,16332,16354,16361,16362,16380,16384,16385,16404,16424,16427,16428,16532,16533,16548,16550,16551,16597,16600,16680,16689,16692,16766,16816,16896,16971,17045,17127,17175,17210,17212,17213,17282,17358,17431,17504,17521,17539,17542,17570,17583,17598],"Infos":null}]}
 