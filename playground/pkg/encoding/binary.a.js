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
GoLinkname�� Implementation�� 	Reference��   ����encoding/binarybinaryerrorsiomathreflectsync�(i ��	bigEndian 	PutUint16	PutUint32	PutUint64StringUint16Uint32Uint64littleEndianbufxrReaderioorder	ByteOrderdata
ByteReadervwWriterbGoStringReadpnerrReadByteWritebinary	BigEndianLittleEndianMaxVarintLen16MaxVarintLen32MaxVarintLen64
PutUvarint	PutVarintReadUvarint
ReadVarintSizeUvarintVarint  
V  
   
& 
    
( 
	    
* 

   )  
 0 
, 
  7 
. 
	  > 
0 

 T 2 E
V �C C 
C F  R� V
 
 F  R� V 
  Za j

  F  X� d� t� 
  yaF  X� 

 
 F  X� 
 
 
  F  �� 
 F  R� 

 
 F  R� 
 
  �a
  F  �� d� t� 
 
 T � 0 
  �� 
   
  �� �   7 
  �� 
	   
  �� �	   > 
  �� 

   
  �� �
   ) 
   
 � 
   

 T � 0 
� �� 
   
� �� �   7 
� �� 
	   
� �� �	   > 
� �� 

   
� �� �
   ) 
�  
 � 
�  
a  � �� � � T �a  �  
 
T �a  � �� � � T �
� �j_�e�i�m�q�w���������������� �E�aa y�Z���Z errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	ByteOrdert	ByteOrder = $pkg.ByteOrder = $newType(8, $kindInterface, "binary.ByteOrder", true, "encoding/binary", true, null);
��	ByteOrder.init([{prop: "PutUint16", name: "PutUint16", pkg: "", typ: $funcType([sliceType, $Uint16], [], false)}, {prop: "PutUint32", name: "PutUint32", pkg: "", typ: $funcType([sliceType, $Uint32], [], false)}, {prop: "PutUint64", name: "PutUint64", pkg: "", typ: $funcType([sliceType, $Uint64], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Uint16", name: "Uint16", pkg: "", typ: $funcType([sliceType], [$Uint16], false)}, {prop: "Uint32", name: "Uint32", pkg: "", typ: $funcType([sliceType], [$Uint32], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([sliceType], [$Uint64], false)}]);
	ByteOrderencoding/binary.ByteOrderencoding/binary.sliceType  littleEndian��	littleEndian = $pkg.littleEndian = $newType(0, $kindStruct, "binary.littleEndian", true, "encoding/binary", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	littleEndian.methods = [{prop: "Uint16", name: "Uint16", pkg: "", typ: $funcType([sliceType], [$Uint16], false)}, {prop: "PutUint16", name: "PutUint16", pkg: "", typ: $funcType([sliceType, $Uint16], [], false)}, {prop: "Uint32", name: "Uint32", pkg: "", typ: $funcType([sliceType], [$Uint32], false)}, {prop: "PutUint32", name: "PutUint32", pkg: "", typ: $funcType([sliceType, $Uint32], [], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([sliceType], [$Uint64], false)}, {prop: "PutUint64", name: "PutUint64", pkg: "", typ: $funcType([sliceType, $Uint64], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "GoString", name: "GoString", pkg: "", typ: $funcType([], [$String], false)}];
	littleEndian.init("", []);
littleEndianencoding/binary.littleEndianencoding/binary.sliceType  	bigEndian��	bigEndian = $pkg.bigEndian = $newType(0, $kindStruct, "binary.bigEndian", true, "encoding/binary", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	bigEndian.methods = [{prop: "Uint16", name: "Uint16", pkg: "", typ: $funcType([sliceType], [$Uint16], false)}, {prop: "PutUint16", name: "PutUint16", pkg: "", typ: $funcType([sliceType, $Uint16], [], false)}, {prop: "Uint32", name: "Uint32", pkg: "", typ: $funcType([sliceType], [$Uint32], false)}, {prop: "PutUint32", name: "PutUint32", pkg: "", typ: $funcType([sliceType, $Uint32], [], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([sliceType], [$Uint64], false)}, {prop: "PutUint64", name: "PutUint64", pkg: "", typ: $funcType([sliceType, $Uint64], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "GoString", name: "GoString", pkg: "", typ: $funcType([], [$String], false)}];
	bigEndian.init("", []);
	bigEndianencoding/binary.bigEndianencoding/binary.sliceType  coder�X	coder = $pkg.coder = $newType(0, $kindStruct, "binary.coder", true, "encoding/binary", false, function(order_, buf_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.order = $ifaceNil;
			this.buf = sliceType.nil;
			this.offset = 0;
			return;
		}
		this.order = order_;
		this.buf = buf_;
		this.offset = offset_;
	});
�,	coder.init("encoding/binary", [{prop: "order", name: "order", embedded: false, exported: false, typ: ByteOrder, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}]);
coderencoding/binary.ByteOrderencoding/binary.coderencoding/binary.sliceType  decoder�^	decoder = $pkg.decoder = $newType(0, $kindStruct, "binary.decoder", true, "encoding/binary", false, function(order_, buf_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.order = $ifaceNil;
			this.buf = sliceType.nil;
			this.offset = 0;
			return;
		}
		this.order = order_;
		this.buf = buf_;
		this.offset = offset_;
	});
�&	ptrType$11.methods = [{prop: "bool", name: "bool", pkg: "encoding/binary", typ: $funcType([], [$Bool], false)}, {prop: "uint8", name: "uint8", pkg: "encoding/binary", typ: $funcType([], [$Uint8], false)}, {prop: "uint16", name: "uint16", pkg: "encoding/binary", typ: $funcType([], [$Uint16], false)}, {prop: "uint32", name: "uint32", pkg: "encoding/binary", typ: $funcType([], [$Uint32], false)}, {prop: "uint64", name: "uint64", pkg: "encoding/binary", typ: $funcType([], [$Uint64], false)}, {prop: "int8", name: "int8", pkg: "encoding/binary", typ: $funcType([], [$Int8], false)}, {prop: "int16", name: "int16", pkg: "encoding/binary", typ: $funcType([], [$Int16], false)}, {prop: "int32", name: "int32", pkg: "encoding/binary", typ: $funcType([], [$Int32], false)}, {prop: "int64", name: "int64", pkg: "encoding/binary", typ: $funcType([], [$Int64], false)}, {prop: "value", name: "value", pkg: "encoding/binary", typ: $funcType([reflect.Value], [], false)}, {prop: "skip", name: "skip", pkg: "encoding/binary", typ: $funcType([reflect.Value], [], false)}];
�.	decoder.init("encoding/binary", [{prop: "order", name: "order", embedded: false, exported: false, typ: ByteOrder, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}]);
decoderencoding/binary.ByteOrderencoding/binary.decoderencoding/binary.ptrType$11encoding/binary.sliceTypereflect.Value  encoder�^	encoder = $pkg.encoder = $newType(0, $kindStruct, "binary.encoder", true, "encoding/binary", false, function(order_, buf_, offset_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.order = $ifaceNil;
			this.buf = sliceType.nil;
			this.offset = 0;
			return;
		}
		this.order = order_;
		this.buf = buf_;
		this.offset = offset_;
	});
�&	ptrType$12.methods = [{prop: "bool", name: "bool", pkg: "encoding/binary", typ: $funcType([$Bool], [], false)}, {prop: "uint8", name: "uint8", pkg: "encoding/binary", typ: $funcType([$Uint8], [], false)}, {prop: "uint16", name: "uint16", pkg: "encoding/binary", typ: $funcType([$Uint16], [], false)}, {prop: "uint32", name: "uint32", pkg: "encoding/binary", typ: $funcType([$Uint32], [], false)}, {prop: "uint64", name: "uint64", pkg: "encoding/binary", typ: $funcType([$Uint64], [], false)}, {prop: "int8", name: "int8", pkg: "encoding/binary", typ: $funcType([$Int8], [], false)}, {prop: "int16", name: "int16", pkg: "encoding/binary", typ: $funcType([$Int16], [], false)}, {prop: "int32", name: "int32", pkg: "encoding/binary", typ: $funcType([$Int32], [], false)}, {prop: "int64", name: "int64", pkg: "encoding/binary", typ: $funcType([$Int64], [], false)}, {prop: "value", name: "value", pkg: "encoding/binary", typ: $funcType([reflect.Value], [], false)}, {prop: "skip", name: "skip", pkg: "encoding/binary", typ: $funcType([reflect.Value], [], false)}];
�.	encoder.init("encoding/binary", [{prop: "order", name: "order", embedded: false, exported: false, typ: ByteOrder, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}, {prop: "offset", name: "offset", embedded: false, exported: false, typ: $Int, tag: ""}]);
encoderencoding/binary.ByteOrderencoding/binary.encoderencoding/binary.ptrType$12encoding/binary.sliceTypereflect.Value  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType($Bool);
ptrType  	ptrType$1	ptrType$1 = $ptrType($Int8);
	ptrType$1  	ptrType$2	ptrType$2 = $ptrType($Uint8);
	ptrType$2  	ptrType$3	ptrType$3 = $ptrType($Int16);
	ptrType$3  	ptrType$4 	ptrType$4 = $ptrType($Uint16);
	ptrType$4  	ptrType$5	ptrType$5 = $ptrType($Int32);
	ptrType$5  	ptrType$6 	ptrType$6 = $ptrType($Uint32);
	ptrType$6  	ptrType$7	ptrType$7 = $ptrType($Int64);
	ptrType$7  	ptrType$8 	ptrType$8 = $ptrType($Uint64);
	ptrType$8  	ptrType$9!	ptrType$9 = $ptrType($Float32);
	ptrType$9  
ptrType$10"	ptrType$10 = $ptrType($Float64);

ptrType$10  sliceType$1"	sliceType$1 = $sliceType($Bool);
sliceType$1  sliceType$2"	sliceType$2 = $sliceType($Int8);
sliceType$2  sliceType$3#	sliceType$3 = $sliceType($Int16);
sliceType$3  sliceType$4$	sliceType$4 = $sliceType($Uint16);
sliceType$4  sliceType$5#	sliceType$5 = $sliceType($Int32);
sliceType$5  sliceType$6$	sliceType$6 = $sliceType($Uint32);
sliceType$6  sliceType$7#	sliceType$7 = $sliceType($Int64);
sliceType$7  sliceType$8$	sliceType$8 = $sliceType($Uint64);
sliceType$8  sliceType$9%	sliceType$9 = $sliceType($Float32);
sliceType$9  sliceType$10&	sliceType$10 = $sliceType($Float64);
sliceType$10  
ptrType$11!	ptrType$11 = $ptrType(decoder);

ptrType$11encoding/binary.decoder  
ptrType$12!	ptrType$12 = $ptrType(encoder);

ptrType$12encoding/binary.encoder  .		$pkg.LittleEndian = new littleEndian.ptr();
LittleEndianencoding/binary.LittleEndianencoding/binary.littleEndian  (		$pkg.BigEndian = new bigEndian.ptr();
	BigEndianencoding/binary.BigEndianencoding/binary.bigEndian  
structSizex		structSize = new sync.Map.ptr(new sync.Mutex.ptr(0, 0), new $packages["sync/atomic"].Value.ptr($ifaceNil), false, 0);

structSizeencoding/binary.structSizesync.Map
sync.Mutexsync/atomic.Value  overflowoverflow  K  T			overflow = errors.New("binary: varint overflows a 64-bit integer");
encoding/binary.overflow
errors.New %(encoding/binary.littleEndian).Uint16 �	littleEndian.ptr.prototype.Uint16 = function(b) {
		var b;
  g		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
  �		return ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) << 16 >>> 16)) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) << 16 >>> 16)) << 8 << 16 >>> 16)) >>> 0;
    	};
	littleEndian.prototype.Uint16 = function(b) { return this.$val.Uint16(b); };
littleEndianencoding/binary.littleEndian ((encoding/binary.littleEndian).PutUint16 �1	littleEndian.ptr.prototype.PutUint16 = function(b, v) {
		var b, v;
  		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
  P		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = ((v << 24 >>> 24)));
  `		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (((v >>> 8 << 16 >>> 16) << 24 >>> 24)));
    	};
	littleEndian.prototype.PutUint16 = function(b, v) { return this.$val.PutUint16(b, v); };
littleEndianencoding/binary.littleEndian %(encoding/binary.littleEndian).Uint32 �	littleEndian.ptr.prototype.Uint32 = function(b) {
		var b;
  �		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  �		return ((((((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};
	littleEndian.prototype.Uint32 = function(b) { return this.$val.Uint32(b); };
littleEndianencoding/binary.littleEndian ((encoding/binary.littleEndian).PutUint32 �H	littleEndian.ptr.prototype.PutUint32 = function(b, v) {
		var b, v;
  q		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  �		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = ((v << 24 >>> 24)));
  �		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (((v >>> 8 >>> 0) << 24 >>> 24)));
  �		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (((v >>> 16 >>> 0) << 24 >>> 24)));
  �		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = (((v >>> 24 >>> 0) << 24 >>> 24)));
    	};
	littleEndian.prototype.PutUint32 = function(b, v) { return this.$val.PutUint32(b, v); };
littleEndianencoding/binary.littleEndian %(encoding/binary.littleEndian).Uint64 ��	littleEndian.ptr.prototype.Uint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  	7		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  	~		return (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), x$7 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
    	};
	littleEndian.prototype.Uint64 = function(b) { return this.$val.Uint64(b); };
littleEndianencoding/binary.littleEndian ((encoding/binary.littleEndian).PutUint64 ��	littleEndian.ptr.prototype.PutUint64 = function(b, v) {
		var b, v;
  
P		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  
�		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = ((v.$low << 24 >>> 24)));
  
�		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (($shiftRightUint64(v, 8).$low << 24 >>> 24)));
  
�		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (($shiftRightUint64(v, 16).$low << 24 >>> 24)));
  
�		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = (($shiftRightUint64(v, 24).$low << 24 >>> 24)));
  
�		(4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4] = (($shiftRightUint64(v, 32).$low << 24 >>> 24)));
  
�		(5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5] = (($shiftRightUint64(v, 40).$low << 24 >>> 24)));
  		(6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6] = (($shiftRightUint64(v, 48).$low << 24 >>> 24)));
  '		(7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7] = (($shiftRightUint64(v, 56).$low << 24 >>> 24)));
    	};
	littleEndian.prototype.PutUint64 = function(b, v) { return this.$val.PutUint64(b, v); };
littleEndianencoding/binary.littleEndian %(encoding/binary.littleEndian).String ��	littleEndian.ptr.prototype.String = function() {
  e		return "LittleEndian";
    	};
	littleEndian.prototype.String = function() { return this.$val.String(); };
littleEndianencoding/binary.littleEndian '(encoding/binary.littleEndian).GoString ��	littleEndian.ptr.prototype.GoString = function() {
  �		return "binary.LittleEndian";
    	};
	littleEndian.prototype.GoString = function() { return this.$val.GoString(); };
littleEndianencoding/binary.littleEndian "(encoding/binary.bigEndian).Uint16 �	bigEndian.ptr.prototype.Uint16 = function(b) {
		var b;
  		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
  R		return ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) << 16 >>> 16)) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) << 16 >>> 16)) << 8 << 16 >>> 16)) >>> 0;
    	};
	bigEndian.prototype.Uint16 = function(b) { return this.$val.Uint16(b); };
	bigEndianencoding/binary.bigEndian %(encoding/binary.bigEndian).PutUint16 �+	bigEndian.ptr.prototype.PutUint16 = function(b, v) {
		var b, v;
  �		$unused((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]));
  �		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (((v >>> 8 << 16 >>> 16) << 24 >>> 24)));
  		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = ((v << 24 >>> 24)));
    	};
	bigEndian.prototype.PutUint16 = function(b, v) { return this.$val.PutUint16(b, v); };
	bigEndianencoding/binary.bigEndian "(encoding/binary.bigEndian).Uint32 �	bigEndian.ptr.prototype.Uint32 = function(b) {
		var b;
  D		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  �		return ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};
	bigEndian.prototype.Uint32 = function(b) { return this.$val.Uint32(b); };
	bigEndianencoding/binary.bigEndian %(encoding/binary.bigEndian).PutUint32 �B	bigEndian.ptr.prototype.PutUint32 = function(b, v) {
		var b, v;
  		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  P		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (((v >>> 24 >>> 0) << 24 >>> 24)));
  f		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (((v >>> 16 >>> 0) << 24 >>> 24)));
  |		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (((v >>> 8 >>> 0) << 24 >>> 24)));
  �		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = ((v << 24 >>> 24)));
    	};
	bigEndian.prototype.PutUint32 = function(b, v) { return this.$val.PutUint32(b, v); };
	bigEndianencoding/binary.bigEndian "(encoding/binary.bigEndian).Uint64 ��	bigEndian.ptr.prototype.Uint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  		return (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
    	};
	bigEndian.prototype.Uint64 = function(b) { return this.$val.Uint64(b); };
	bigEndianencoding/binary.bigEndian %(encoding/binary.bigEndian).PutUint64 ��	bigEndian.ptr.prototype.PutUint64 = function(b, v) {
		var b, v;
  �		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  )		(0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0] = (($shiftRightUint64(v, 56).$low << 24 >>> 24)));
  ?		(1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1] = (($shiftRightUint64(v, 48).$low << 24 >>> 24)));
  U		(2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2] = (($shiftRightUint64(v, 40).$low << 24 >>> 24)));
  k		(3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3] = (($shiftRightUint64(v, 32).$low << 24 >>> 24)));
  �		(4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4] = (($shiftRightUint64(v, 24).$low << 24 >>> 24)));
  �		(5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5] = (($shiftRightUint64(v, 16).$low << 24 >>> 24)));
  �		(6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6] = (($shiftRightUint64(v, 8).$low << 24 >>> 24)));
  �		(7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7] = ((v.$low << 24 >>> 24)));
    	};
	bigEndian.prototype.PutUint64 = function(b, v) { return this.$val.PutUint64(b, v); };
	bigEndianencoding/binary.bigEndian "(encoding/binary.bigEndian).String ��	bigEndian.ptr.prototype.String = function() {
  �		return "BigEndian";
    	};
	bigEndian.prototype.String = function() { return this.$val.String(); };
	bigEndianencoding/binary.bigEndian $(encoding/binary.bigEndian).GoString ��	bigEndian.ptr.prototype.GoString = function() {
  2		return "binary.BigEndian";
    	};
	bigEndian.prototype.GoString = function() { return this.$val.GoString(); };
	bigEndianencoding/binary.bigEndian encoding/binary.Readencoding/binaryRead Read�N�	Read = function(r, order, data) {
		var $24r, _1, _i, _i$1, _i$2, _i$3, _i$4, _i$5, _i$6, _i$7, _i$8, _i$9, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$10, _ref$2, _ref$3, _ref$4, _ref$5, _ref$6, _ref$7, _ref$8, _ref$9, _tuple, _tuple$1, bs, d, data, data$1, data$10, data$11, data$12, data$13, data$14, data$15, data$16, data$17, data$18, data$19, data$2, data$20, data$21, data$22, data$23, data$3, data$4, data$5, data$6, data$7, data$8, data$9, err, err$1, i, i$1, i$2, i$3, i$4, i$5, i$6, i$7, i$8, i$9, n, order, r, size, v, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _i$4 = $f._i$4; _i$5 = $f._i$5; _i$6 = $f._i$6; _i$7 = $f._i$7; _i$8 = $f._i$8; _i$9 = $f._i$9; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$10 = $f._ref$10; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _ref$4 = $f._ref$4; _ref$5 = $f._ref$5; _ref$6 = $f._ref$6; _ref$7 = $f._ref$7; _ref$8 = $f._ref$8; _ref$9 = $f._ref$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; bs = $f.bs; d = $f.d; data = $f.data; data$1 = $f.data$1; data$10 = $f.data$10; data$11 = $f.data$11; data$12 = $f.data$12; data$13 = $f.data$13; data$14 = $f.data$14; data$15 = $f.data$15; data$16 = $f.data$16; data$17 = $f.data$17; data$18 = $f.data$18; data$19 = $f.data$19; data$2 = $f.data$2; data$20 = $f.data$20; data$21 = $f.data$21; data$22 = $f.data$22; data$23 = $f.data$23; data$3 = $f.data$3; data$4 = $f.data$4; data$5 = $f.data$5; data$6 = $f.data$6; data$7 = $f.data$7; data$8 = $f.data$8; data$9 = $f.data$9; err = $f.err; err$1 = $f.err$1; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; i$5 = $f.i$5; i$6 = $f.i$6; i$7 = $f.i$7; i$8 = $f.i$8; i$9 = $f.i$9; n = $f.n; order = $f.order; r = $f.r; size = $f.size; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		n = intDataSize(data);
  �		/* */ if (!((n === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((n === 0))) { */ case 1:
  �			bs = $makeSlice(sliceType, n);
  �			_r = io.ReadFull(r, bs); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  !				$s = -1; return err;
    			}
  2			_ref = data;
			/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 4; continue; }
			/* */ if ($assertType(_ref, ptrType$1, true)[1]) { $s = 5; continue; }
			/* */ if ($assertType(_ref, ptrType$2, true)[1]) { $s = 6; continue; }
			/* */ if ($assertType(_ref, ptrType$3, true)[1]) { $s = 7; continue; }
			/* */ if ($assertType(_ref, ptrType$4, true)[1]) { $s = 8; continue; }
			/* */ if ($assertType(_ref, ptrType$5, true)[1]) { $s = 9; continue; }
			/* */ if ($assertType(_ref, ptrType$6, true)[1]) { $s = 10; continue; }
			/* */ if ($assertType(_ref, ptrType$7, true)[1]) { $s = 11; continue; }
			/* */ if ($assertType(_ref, ptrType$8, true)[1]) { $s = 12; continue; }
			/* */ if ($assertType(_ref, ptrType$9, true)[1]) { $s = 13; continue; }
			/* */ if ($assertType(_ref, ptrType$10, true)[1]) { $s = 14; continue; }
			/* */ if ($assertType(_ref, sliceType$1, true)[1]) { $s = 15; continue; }
			/* */ if ($assertType(_ref, sliceType$2, true)[1]) { $s = 16; continue; }
			/* */ if ($assertType(_ref, sliceType, true)[1]) { $s = 17; continue; }
			/* */ if ($assertType(_ref, sliceType$3, true)[1]) { $s = 18; continue; }
			/* */ if ($assertType(_ref, sliceType$4, true)[1]) { $s = 19; continue; }
			/* */ if ($assertType(_ref, sliceType$5, true)[1]) { $s = 20; continue; }
			/* */ if ($assertType(_ref, sliceType$6, true)[1]) { $s = 21; continue; }
			/* */ if ($assertType(_ref, sliceType$7, true)[1]) { $s = 22; continue; }
			/* */ if ($assertType(_ref, sliceType$8, true)[1]) { $s = 23; continue; }
			/* */ if ($assertType(_ref, sliceType$9, true)[1]) { $s = 24; continue; }
			/* */ if ($assertType(_ref, sliceType$10, true)[1]) { $s = 25; continue; }
			/* */ $s = 26; continue;
    			/* if ($assertType(_ref, ptrType, true)[1]) { */ case 4:
    				data$1 = _ref.$val;
  `				data$1.$set(!(((0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0]) === 0)));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$1, true)[1]) { */ case 5:
    				data$2 = _ref.$val;
  �				data$2.$set((((0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0]) << 24 >> 24)));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$2, true)[1]) { */ case 6:
    				data$3 = _ref.$val;
  �				data$3.$set((0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0]));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$3, true)[1]) { */ case 7:
    				data$4 = _ref.$val;
  �				_r$1 = order.Uint16(bs); /* */ $s = 28; case 28: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				data$4.$set(((_r$1 << 16 >> 16)));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$4, true)[1]) { */ case 8:
    				data$5 = _ref.$val;
  �				_r$2 = order.Uint16(bs); /* */ $s = 29; case 29: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				data$5.$set(_r$2);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$5, true)[1]) { */ case 9:
    				data$6 = _ref.$val;
  (				_r$3 = order.Uint32(bs); /* */ $s = 30; case 30: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				data$6.$set(((_r$3 >> 0)));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$6, true)[1]) { */ case 10:
    				data$7 = _ref.$val;
  [				_r$4 = order.Uint32(bs); /* */ $s = 31; case 31: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				data$7.$set(_r$4);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$7, true)[1]) { */ case 11:
    				data$8 = _ref.$val;
  �				_r$5 = order.Uint64(bs); /* */ $s = 32; case 32: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				data$8.$set(((x = _r$5, new $Int64(x.$high, x.$low))));
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$8, true)[1]) { */ case 12:
    				data$9 = _ref.$val;
  �				_r$6 = order.Uint64(bs); /* */ $s = 33; case 33: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				data$9.$set(_r$6);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$9, true)[1]) { */ case 13:
    				data$10 = _ref.$val;
  �				_r$7 = order.Uint32(bs); /* */ $s = 34; case 34: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_r$8 = math.Float32frombits(_r$7); /* */ $s = 35; case 35: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				data$10.$set(_r$8);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, ptrType$10, true)[1]) { */ case 14:
    				data$11 = _ref.$val;
  )				_r$9 = order.Uint64(bs); /* */ $s = 36; case 36: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
				_r$10 = math.Float64frombits(_r$9); /* */ $s = 37; case 37: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
				data$11.$set(_r$10);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$1, true)[1]) { */ case 15:
    				data$12 = _ref.$val;
  j				_ref$1 = bs;
				_i = 0;
				while (true) {
					if (!(_i < _ref$1.$length)) { break; }
					i = _i;
					x$1 = ((_i < 0 || _i >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i]);
  �					((i < 0 || i >= data$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$12.$array[data$12.$offset + i] = !((x$1 === 0)));
    					_i++;
				}
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$2, true)[1]) { */ case 16:
    				data$13 = _ref.$val;
  �				_ref$2 = bs;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$2.$length)) { break; }
					i$1 = _i$1;
					x$2 = ((_i$1 < 0 || _i$1 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$1]);
  �					((i$1 < 0 || i$1 >= data$13.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$13.$array[data$13.$offset + i$1] = ((x$2 << 24 >> 24)));
    					_i$1++;
				}
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType, true)[1]) { */ case 17:
    				data$14 = _ref.$val;
  %				$copySlice(data$14, bs);
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$3, true)[1]) { */ case 18:
    				data$15 = _ref.$val;
  G				_ref$3 = data$15;
				_i$2 = 0;
				/* while (true) { */ case 38:
					/* if (!(_i$2 < _ref$3.$length)) { break; } */ if(!(_i$2 < _ref$3.$length)) { $s = 39; continue; }
					i$2 = _i$2;
  a					_r$11 = order.Uint16($subslice(bs, ($imul(2, i$2)))); /* */ $s = 40; case 40: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					((i$2 < 0 || i$2 >= data$15.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$15.$array[data$15.$offset + i$2] = ((_r$11 << 16 >> 16)));
    					_i$2++;
				$s = 38; continue;
				case 39:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$4, true)[1]) { */ case 19:
    				data$16 = _ref.$val;
  �				_ref$4 = data$16;
				_i$3 = 0;
				/* while (true) { */ case 41:
					/* if (!(_i$3 < _ref$4.$length)) { break; } */ if(!(_i$3 < _ref$4.$length)) { $s = 42; continue; }
					i$3 = _i$3;
  �					_r$12 = order.Uint16($subslice(bs, ($imul(2, i$3)))); /* */ $s = 43; case 43: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
					((i$3 < 0 || i$3 >= data$16.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$16.$array[data$16.$offset + i$3] = _r$12);
    					_i$3++;
				$s = 41; continue;
				case 42:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$5, true)[1]) { */ case 20:
    				data$17 = _ref.$val;
  �				_ref$5 = data$17;
				_i$4 = 0;
				/* while (true) { */ case 44:
					/* if (!(_i$4 < _ref$5.$length)) { break; } */ if(!(_i$4 < _ref$5.$length)) { $s = 45; continue; }
					i$4 = _i$4;
  					_r$13 = order.Uint32($subslice(bs, ($imul(4, i$4)))); /* */ $s = 46; case 46: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
					((i$4 < 0 || i$4 >= data$17.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$17.$array[data$17.$offset + i$4] = ((_r$13 >> 0)));
    					_i$4++;
				$s = 44; continue;
				case 45:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$6, true)[1]) { */ case 21:
    				data$18 = _ref.$val;
  P				_ref$6 = data$18;
				_i$5 = 0;
				/* while (true) { */ case 47:
					/* if (!(_i$5 < _ref$6.$length)) { break; } */ if(!(_i$5 < _ref$6.$length)) { $s = 48; continue; }
					i$5 = _i$5;
  j					_r$14 = order.Uint32($subslice(bs, ($imul(4, i$5)))); /* */ $s = 49; case 49: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
					((i$5 < 0 || i$5 >= data$18.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$18.$array[data$18.$offset + i$5] = _r$14);
    					_i$5++;
				$s = 47; continue;
				case 48:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$7, true)[1]) { */ case 22:
    				data$19 = _ref.$val;
  �				_ref$7 = data$19;
				_i$6 = 0;
				/* while (true) { */ case 50:
					/* if (!(_i$6 < _ref$7.$length)) { break; } */ if(!(_i$6 < _ref$7.$length)) { $s = 51; continue; }
					i$6 = _i$6;
  �					_r$15 = order.Uint64($subslice(bs, ($imul(8, i$6)))); /* */ $s = 52; case 52: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					((i$6 < 0 || i$6 >= data$19.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$19.$array[data$19.$offset + i$6] = ((x$3 = _r$15, new $Int64(x$3.$high, x$3.$low))));
    					_i$6++;
				$s = 50; continue;
				case 51:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$8, true)[1]) { */ case 23:
    				data$20 = _ref.$val;
  �				_ref$8 = data$20;
				_i$7 = 0;
				/* while (true) { */ case 53:
					/* if (!(_i$7 < _ref$8.$length)) { break; } */ if(!(_i$7 < _ref$8.$length)) { $s = 54; continue; }
					i$7 = _i$7;
  					_r$16 = order.Uint64($subslice(bs, ($imul(8, i$7)))); /* */ $s = 55; case 55: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
					((i$7 < 0 || i$7 >= data$20.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$20.$array[data$20.$offset + i$7] = _r$16);
    					_i$7++;
				$s = 53; continue;
				case 54:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$9, true)[1]) { */ case 24:
    				data$21 = _ref.$val;
  S				_ref$9 = data$21;
				_i$8 = 0;
				/* while (true) { */ case 56:
					/* if (!(_i$8 < _ref$9.$length)) { break; } */ if(!(_i$8 < _ref$9.$length)) { $s = 57; continue; }
					i$8 = _i$8;
  m					_r$17 = order.Uint32($subslice(bs, ($imul(4, i$8)))); /* */ $s = 58; case 58: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
					_r$18 = math.Float32frombits(_r$17); /* */ $s = 59; case 59: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
					((i$8 < 0 || i$8 >= data$21.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$21.$array[data$21.$offset + i$8] = _r$18);
    					_i$8++;
				$s = 56; continue;
				case 57:
    				$s = 27; continue;
    			/* } else if ($assertType(_ref, sliceType$10, true)[1]) { */ case 25:
    				data$22 = _ref.$val;
  �				_ref$10 = data$22;
				_i$9 = 0;
				/* while (true) { */ case 60:
					/* if (!(_i$9 < _ref$10.$length)) { break; } */ if(!(_i$9 < _ref$10.$length)) { $s = 61; continue; }
					i$9 = _i$9;
  �					_r$19 = order.Uint64($subslice(bs, ($imul(8, i$9)))); /* */ $s = 62; case 62: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
					_r$20 = math.Float64frombits(_r$19); /* */ $s = 63; case 63: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
					((i$9 < 0 || i$9 >= data$22.$length) ? ($throwRuntimeError("index out of range"), undefined) : data$22.$array[data$22.$offset + i$9] = _r$20);
    					_i$9++;
				$s = 60; continue;
				case 61:
    				$s = 27; continue;
			/* } else { */ case 26:
    				data$23 = _ref;
  "				n = 0;
    			/* } */ case 27:
    			if (!((n === 0))) {
  X				$s = -1; return $ifaceNil;
    			}
    		/* } */ case 2:
  �		_r$21 = reflect.ValueOf(data); /* */ $s = 64; case 64: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
		v = _r$21;
  �		size = -1;
    			_1 = $clone(v, reflect.Value).Kind();
  �			/* */ if (_1 === (22)) { $s = 66; continue; }
			/* */ if (_1 === (23)) { $s = 67; continue; }
			/* */ $s = 68; continue;
    			/* if (_1 === (22)) { */ case 66:
  �				_r$22 = $clone(v, reflect.Value).Elem(); /* */ $s = 69; case 69: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
				v = _r$22;
  �				_r$23 = dataSize($clone(v, reflect.Value)); /* */ $s = 70; case 70: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
				size = _r$23;
    				$s = 68; continue;
    			/* } else if (_1 === (23)) { */ case 67:
  				_r$24 = dataSize($clone(v, reflect.Value)); /* */ $s = 71; case 71: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
				size = _r$24;
    			/* } */ case 68:
    		case 65:
  3		/* */ if (size < 0) { $s = 72; continue; }
		/* */ $s = 73; continue;
    		/* if (size < 0) { */ case 72:
  C			_r$25 = reflect.TypeOf(data).String(); /* */ $s = 74; case 74: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
			_r$26 = errors.New("binary.Read: invalid type " + _r$25); /* */ $s = 75; case 75: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
			$24r = _r$26;
			$s = 76; case 76: return $24r;
    		/* } */ case 73:
  �		d = new decoder.ptr(order, $makeSlice(sliceType, size), 0);
  �		_r$27 = io.ReadFull(r, d.buf); /* */ $s = 77; case 77: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
		_tuple$1 = _r$27;
		err$1 = _tuple$1[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
   			$s = -1; return err$1;
    		}
  		$r = d.value($clone(v, reflect.Value)); /* */ $s = 78; case 78: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Read }; } $f.$24r = $24r; $f._1 = _1; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._i$4 = _i$4; $f._i$5 = _i$5; $f._i$6 = _i$6; $f._i$7 = _i$7; $f._i$8 = _i$8; $f._i$9 = _i$9; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$10 = _ref$10; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._ref$4 = _ref$4; $f._ref$5 = _ref$5; $f._ref$6 = _ref$6; $f._ref$7 = _ref$7; $f._ref$8 = _ref$8; $f._ref$9 = _ref$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.bs = bs; $f.d = d; $f.data = data; $f.data$1 = data$1; $f.data$10 = data$10; $f.data$11 = data$11; $f.data$12 = data$12; $f.data$13 = data$13; $f.data$14 = data$14; $f.data$15 = data$15; $f.data$16 = data$16; $f.data$17 = data$17; $f.data$18 = data$18; $f.data$19 = data$19; $f.data$2 = data$2; $f.data$20 = data$20; $f.data$21 = data$21; $f.data$22 = data$22; $f.data$23 = data$23; $f.data$3 = data$3; $f.data$4 = data$4; $f.data$5 = data$5; $f.data$6 = data$6; $f.data$7 = data$7; $f.data$8 = data$8; $f.data$9 = data$9; $f.err = err; $f.err$1 = err$1; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.i$5 = i$5; $f.i$6 = i$6; $f.i$7 = i$7; $f.i$8 = i$8; $f.i$9 = i$9; $f.n = n; $f.order = order; $f.r = r; $f.size = size; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Read = Read;
Read"encoding/binary.Readencoding/binary.dataSizeencoding/binary.decoderencoding/binary.intDataSizeencoding/binary.ptrTypeencoding/binary.ptrType$1encoding/binary.ptrType$10encoding/binary.ptrType$2encoding/binary.ptrType$3encoding/binary.ptrType$4encoding/binary.ptrType$5encoding/binary.ptrType$6encoding/binary.ptrType$7encoding/binary.ptrType$8encoding/binary.ptrType$9encoding/binary.sliceTypeencoding/binary.sliceType$1encoding/binary.sliceType$10encoding/binary.sliceType$2encoding/binary.sliceType$3encoding/binary.sliceType$4encoding/binary.sliceType$5encoding/binary.sliceType$6encoding/binary.sliceType$7encoding/binary.sliceType$8encoding/binary.sliceType$9encoding/binary.value~
errors.Newio.ReadFullmath.Float32frombitsmath.Float64frombitsreflect.TypeOfreflect.Valuereflect.ValueOf encoding/binary.Writeencoding/binaryWrite Write�V	Write = function(w, order, data) {
		var $24r, _i, _i$1, _i$2, _i$3, _i$4, _i$5, _i$6, _i$7, _i$8, _i$9, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _ref, _ref$1, _ref$10, _ref$2, _ref$3, _ref$4, _ref$5, _ref$6, _ref$7, _ref$8, _ref$9, _tuple, _tuple$1, bs, buf, data, e, err, err$1, i, i$1, i$2, i$3, i$4, i$5, i$6, i$7, i$8, i$9, n, order, size, v, v$1, v$10, v$11, v$12, v$13, v$14, v$15, v$16, v$17, v$18, v$19, v$2, v$20, v$21, v$22, v$23, v$24, v$25, v$26, v$27, v$28, v$29, v$3, v$30, v$31, v$32, v$33, v$4, v$5, v$6, v$7, v$8, v$9, w, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _i$4 = $f._i$4; _i$5 = $f._i$5; _i$6 = $f._i$6; _i$7 = $f._i$7; _i$8 = $f._i$8; _i$9 = $f._i$9; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$10 = $f._ref$10; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _ref$4 = $f._ref$4; _ref$5 = $f._ref$5; _ref$6 = $f._ref$6; _ref$7 = $f._ref$7; _ref$8 = $f._ref$8; _ref$9 = $f._ref$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; bs = $f.bs; buf = $f.buf; data = $f.data; e = $f.e; err = $f.err; err$1 = $f.err$1; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; i$4 = $f.i$4; i$5 = $f.i$5; i$6 = $f.i$6; i$7 = $f.i$7; i$8 = $f.i$8; i$9 = $f.i$9; n = $f.n; order = $f.order; size = $f.size; v = $f.v; v$1 = $f.v$1; v$10 = $f.v$10; v$11 = $f.v$11; v$12 = $f.v$12; v$13 = $f.v$13; v$14 = $f.v$14; v$15 = $f.v$15; v$16 = $f.v$16; v$17 = $f.v$17; v$18 = $f.v$18; v$19 = $f.v$19; v$2 = $f.v$2; v$20 = $f.v$20; v$21 = $f.v$21; v$22 = $f.v$22; v$23 = $f.v$23; v$24 = $f.v$24; v$25 = $f.v$25; v$26 = $f.v$26; v$27 = $f.v$27; v$28 = $f.v$28; v$29 = $f.v$29; v$3 = $f.v$3; v$30 = $f.v$30; v$31 = $f.v$31; v$32 = $f.v$32; v$33 = $f.v$33; v$4 = $f.v$4; v$5 = $f.v$5; v$6 = $f.v$6; v$7 = $f.v$7; v$8 = $f.v$8; v$9 = $f.v$9; w = $f.w; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  E		n = intDataSize(data);
  B		/* */ if (!((n === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((n === 0))) { */ case 1:
  h			bs = $makeSlice(sliceType, n);
  �			_ref = data;
			/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 3; continue; }
			/* */ if ($assertType(_ref, $Bool, true)[1]) { $s = 4; continue; }
			/* */ if ($assertType(_ref, sliceType$1, true)[1]) { $s = 5; continue; }
			/* */ if ($assertType(_ref, ptrType$1, true)[1]) { $s = 6; continue; }
			/* */ if ($assertType(_ref, $Int8, true)[1]) { $s = 7; continue; }
			/* */ if ($assertType(_ref, sliceType$2, true)[1]) { $s = 8; continue; }
			/* */ if ($assertType(_ref, ptrType$2, true)[1]) { $s = 9; continue; }
			/* */ if ($assertType(_ref, $Uint8, true)[1]) { $s = 10; continue; }
			/* */ if ($assertType(_ref, sliceType, true)[1]) { $s = 11; continue; }
			/* */ if ($assertType(_ref, ptrType$3, true)[1]) { $s = 12; continue; }
			/* */ if ($assertType(_ref, $Int16, true)[1]) { $s = 13; continue; }
			/* */ if ($assertType(_ref, sliceType$3, true)[1]) { $s = 14; continue; }
			/* */ if ($assertType(_ref, ptrType$4, true)[1]) { $s = 15; continue; }
			/* */ if ($assertType(_ref, $Uint16, true)[1]) { $s = 16; continue; }
			/* */ if ($assertType(_ref, sliceType$4, true)[1]) { $s = 17; continue; }
			/* */ if ($assertType(_ref, ptrType$5, true)[1]) { $s = 18; continue; }
			/* */ if ($assertType(_ref, $Int32, true)[1]) { $s = 19; continue; }
			/* */ if ($assertType(_ref, sliceType$5, true)[1]) { $s = 20; continue; }
			/* */ if ($assertType(_ref, ptrType$6, true)[1]) { $s = 21; continue; }
			/* */ if ($assertType(_ref, $Uint32, true)[1]) { $s = 22; continue; }
			/* */ if ($assertType(_ref, sliceType$6, true)[1]) { $s = 23; continue; }
			/* */ if ($assertType(_ref, ptrType$7, true)[1]) { $s = 24; continue; }
			/* */ if ($assertType(_ref, $Int64, true)[1]) { $s = 25; continue; }
			/* */ if ($assertType(_ref, sliceType$7, true)[1]) { $s = 26; continue; }
			/* */ if ($assertType(_ref, ptrType$8, true)[1]) { $s = 27; continue; }
			/* */ if ($assertType(_ref, $Uint64, true)[1]) { $s = 28; continue; }
			/* */ if ($assertType(_ref, sliceType$8, true)[1]) { $s = 29; continue; }
			/* */ if ($assertType(_ref, ptrType$9, true)[1]) { $s = 30; continue; }
			/* */ if ($assertType(_ref, $Float32, true)[1]) { $s = 31; continue; }
			/* */ if ($assertType(_ref, sliceType$9, true)[1]) { $s = 32; continue; }
			/* */ if ($assertType(_ref, ptrType$10, true)[1]) { $s = 33; continue; }
			/* */ if ($assertType(_ref, $Float64, true)[1]) { $s = 34; continue; }
			/* */ if ($assertType(_ref, sliceType$10, true)[1]) { $s = 35; continue; }
			/* */ $s = 36; continue;
    			/* if ($assertType(_ref, ptrType, true)[1]) { */ case 3:
    				v = _ref.$val;
    				if (v.$get()) {
  �					(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = 1);
    				} else {
  �					(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = 0);
    				}
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Bool, true)[1]) { */ case 4:
    				v$1 = _ref.$val;
    				if (v$1) {
  �					(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = 1);
    				} else {
   					(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = 0);
    				}
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$1, true)[1]) { */ case 5:
    				v$2 = _ref.$val;
   6				_ref$1 = v$2;
				_i = 0;
				while (true) {
					if (!(_i < _ref$1.$length)) { break; }
					i = _i;
					x = ((_i < 0 || _i >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i]);
    					if (x) {
   \						((i < 0 || i >= bs.$length) ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + i] = 1);
    					} else {
   x						((i < 0 || i >= bs.$length) ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + i] = 0);
    					}
    					_i++;
				}
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$1, true)[1]) { */ case 6:
    				v$3 = _ref.$val;
   �				(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = ((v$3.$get() << 24 >>> 24)));
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Int8, true)[1]) { */ case 7:
    				v$4 = _ref.$val;
   �				(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = ((v$4 << 24 >>> 24)));
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$2, true)[1]) { */ case 8:
    				v$5 = _ref.$val;
   �				_ref$2 = v$5;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$2.$length)) { break; }
					i$1 = _i$1;
					x$1 = ((_i$1 < 0 || _i$1 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$1]);
   �					((i$1 < 0 || i$1 >= bs.$length) ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + i$1] = ((x$1 << 24 >>> 24)));
    					_i$1++;
				}
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$2, true)[1]) { */ case 9:
    				v$6 = _ref.$val;
  !"				(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = v$6.$get());
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Uint8, true)[1]) { */ case 10:
    				v$7 = _ref.$val;
  !>				(0 >= bs.$length ? ($throwRuntimeError("index out of range"), undefined) : bs.$array[bs.$offset + 0] = v$7);
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType, true)[1]) { */ case 11:
    				v$8 = _ref.$val;
  ![				bs = v$8;
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$3, true)[1]) { */ case 12:
    				v$9 = _ref.$val;
  !t				$r = order.PutUint16(bs, ((v$9.$get() << 16 >>> 16))); /* */ $s = 37; case 37: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Int16, true)[1]) { */ case 13:
    				v$10 = _ref.$val;
  !�				$r = order.PutUint16(bs, ((v$10 << 16 >>> 16))); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$3, true)[1]) { */ case 14:
    				v$11 = _ref.$val;
  !�				_ref$3 = v$11;
				_i$2 = 0;
				/* while (true) { */ case 39:
					/* if (!(_i$2 < _ref$3.$length)) { break; } */ if(!(_i$2 < _ref$3.$length)) { $s = 40; continue; }
					i$2 = _i$2;
					x$2 = ((_i$2 < 0 || _i$2 >= _ref$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$3.$array[_ref$3.$offset + _i$2]);
  !�					$r = order.PutUint16($subslice(bs, ($imul(2, i$2))), ((x$2 << 16 >>> 16))); /* */ $s = 41; case 41: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$2++;
				$s = 39; continue;
				case 40:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$4, true)[1]) { */ case 15:
    				v$12 = _ref.$val;
  ".				$r = order.PutUint16(bs, v$12.$get()); /* */ $s = 42; case 42: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Uint16, true)[1]) { */ case 16:
    				v$13 = _ref.$val;
  "X				$r = order.PutUint16(bs, v$13); /* */ $s = 43; case 43: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$4, true)[1]) { */ case 17:
    				v$14 = _ref.$val;
  "�				_ref$4 = v$14;
				_i$3 = 0;
				/* while (true) { */ case 44:
					/* if (!(_i$3 < _ref$4.$length)) { break; } */ if(!(_i$3 < _ref$4.$length)) { $s = 45; continue; }
					i$3 = _i$3;
					x$3 = ((_i$3 < 0 || _i$3 >= _ref$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$4.$array[_ref$4.$offset + _i$3]);
  "�					$r = order.PutUint16($subslice(bs, ($imul(2, i$3))), x$3); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$3++;
				$s = 44; continue;
				case 45:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$5, true)[1]) { */ case 18:
    				v$15 = _ref.$val;
  "�				$r = order.PutUint32(bs, ((v$15.$get() >>> 0))); /* */ $s = 47; case 47: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Int32, true)[1]) { */ case 19:
    				v$16 = _ref.$val;
  #				$r = order.PutUint32(bs, ((v$16 >>> 0))); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$5, true)[1]) { */ case 20:
    				v$17 = _ref.$val;
  #4				_ref$5 = v$17;
				_i$4 = 0;
				/* while (true) { */ case 49:
					/* if (!(_i$4 < _ref$5.$length)) { break; } */ if(!(_i$4 < _ref$5.$length)) { $s = 50; continue; }
					i$4 = _i$4;
					x$4 = ((_i$4 < 0 || _i$4 >= _ref$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$5.$array[_ref$5.$offset + _i$4]);
  #N					$r = order.PutUint32($subslice(bs, ($imul(4, i$4))), ((x$4 >>> 0))); /* */ $s = 51; case 51: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$4++;
				$s = 49; continue;
				case 50:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$6, true)[1]) { */ case 21:
    				v$18 = _ref.$val;
  #�				$r = order.PutUint32(bs, v$18.$get()); /* */ $s = 52; case 52: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Uint32, true)[1]) { */ case 22:
    				v$19 = _ref.$val;
  #�				$r = order.PutUint32(bs, v$19); /* */ $s = 53; case 53: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$6, true)[1]) { */ case 23:
    				v$20 = _ref.$val;
  #�				_ref$6 = v$20;
				_i$5 = 0;
				/* while (true) { */ case 54:
					/* if (!(_i$5 < _ref$6.$length)) { break; } */ if(!(_i$5 < _ref$6.$length)) { $s = 55; continue; }
					i$5 = _i$5;
					x$5 = ((_i$5 < 0 || _i$5 >= _ref$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$6.$array[_ref$6.$offset + _i$5]);
  #�					$r = order.PutUint32($subslice(bs, ($imul(4, i$5))), x$5); /* */ $s = 56; case 56: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$5++;
				$s = 54; continue;
				case 55:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$7, true)[1]) { */ case 24:
    				v$21 = _ref.$val;
  $.				$r = order.PutUint64(bs, ((x$6 = v$21.$get(), new $Uint64(x$6.$high, x$6.$low)))); /* */ $s = 57; case 57: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Int64, true)[1]) { */ case 25:
    				v$22 = _ref.$val;
  $_				$r = order.PutUint64(bs, (new $Uint64(v$22.$high, v$22.$low))); /* */ $s = 58; case 58: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$7, true)[1]) { */ case 26:
    				v$23 = _ref.$val;
  $�				_ref$7 = v$23;
				_i$6 = 0;
				/* while (true) { */ case 59:
					/* if (!(_i$6 < _ref$7.$length)) { break; } */ if(!(_i$6 < _ref$7.$length)) { $s = 60; continue; }
					i$6 = _i$6;
					x$7 = ((_i$6 < 0 || _i$6 >= _ref$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$7.$array[_ref$7.$offset + _i$6]);
  $�					$r = order.PutUint64($subslice(bs, ($imul(8, i$6))), (new $Uint64(x$7.$high, x$7.$low))); /* */ $s = 61; case 61: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$6++;
				$s = 59; continue;
				case 60:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$8, true)[1]) { */ case 27:
    				v$24 = _ref.$val;
  $�				$r = order.PutUint64(bs, v$24.$get()); /* */ $s = 62; case 62: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Uint64, true)[1]) { */ case 28:
    				v$25 = _ref.$val;
  %				$r = order.PutUint64(bs, v$25); /* */ $s = 63; case 63: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$8, true)[1]) { */ case 29:
    				v$26 = _ref.$val;
  %=				_ref$8 = v$26;
				_i$7 = 0;
				/* while (true) { */ case 64:
					/* if (!(_i$7 < _ref$8.$length)) { break; } */ if(!(_i$7 < _ref$8.$length)) { $s = 65; continue; }
					i$7 = _i$7;
					x$8 = ((_i$7 < 0 || _i$7 >= _ref$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$8.$array[_ref$8.$offset + _i$7]);
  %W					$r = order.PutUint64($subslice(bs, ($imul(8, i$7))), x$8); /* */ $s = 66; case 66: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$7++;
				$s = 64; continue;
				case 65:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$9, true)[1]) { */ case 30:
    				v$27 = _ref.$val;
  %�				$r = order.PutUint32(bs, math.Float32bits(v$27.$get())); /* */ $s = 67; case 67: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Float32, true)[1]) { */ case 31:
    				v$28 = _ref.$val;
  %�				$r = order.PutUint32(bs, math.Float32bits(v$28)); /* */ $s = 68; case 68: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$9, true)[1]) { */ case 32:
    				v$29 = _ref.$val;
  &				_ref$9 = v$29;
				_i$8 = 0;
				/* while (true) { */ case 69:
					/* if (!(_i$8 < _ref$9.$length)) { break; } */ if(!(_i$8 < _ref$9.$length)) { $s = 70; continue; }
					i$8 = _i$8;
					x$9 = ((_i$8 < 0 || _i$8 >= _ref$9.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$9.$array[_ref$9.$offset + _i$8]);
  &"					$r = order.PutUint32($subslice(bs, ($imul(4, i$8))), math.Float32bits(x$9)); /* */ $s = 71; case 71: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$8++;
				$s = 69; continue;
				case 70:
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, ptrType$10, true)[1]) { */ case 33:
    				v$30 = _ref.$val;
  &j				$r = order.PutUint64(bs, math.Float64bits(v$30.$get())); /* */ $s = 72; case 72: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, $Float64, true)[1]) { */ case 34:
    				v$31 = _ref.$val;
  &�				$r = order.PutUint64(bs, math.Float64bits(v$31)); /* */ $s = 73; case 73: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 36; continue;
    			/* } else if ($assertType(_ref, sliceType$10, true)[1]) { */ case 35:
    				v$32 = _ref.$val;
  &�				_ref$10 = v$32;
				_i$9 = 0;
				/* while (true) { */ case 74:
					/* if (!(_i$9 < _ref$10.$length)) { break; } */ if(!(_i$9 < _ref$10.$length)) { $s = 75; continue; }
					i$9 = _i$9;
					x$10 = ((_i$9 < 0 || _i$9 >= _ref$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$10.$array[_ref$10.$offset + _i$9]);
  &�					$r = order.PutUint64($subslice(bs, ($imul(8, i$9))), math.Float64bits(x$10)); /* */ $s = 76; case 76: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					_i$9++;
				$s = 74; continue;
				case 75:
    			/* } */ case 36:
  '9			_r = w.Write(bs); /* */ $s = 77; case 77: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			err = _tuple[1];
  'Q			$s = -1; return err;
    		/* } */ case 2:
  '�		_r$1 = reflect.ValueOf(data); /* */ $s = 78; case 78: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = reflect.Indirect($clone(_r$1, reflect.Value)); /* */ $s = 79; case 79: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		v$33 = _r$2;
  '�		_r$3 = dataSize($clone(v$33, reflect.Value)); /* */ $s = 80; case 80: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		size = _r$3;
  '�		/* */ if (size < 0) { $s = 81; continue; }
		/* */ $s = 82; continue;
    		/* if (size < 0) { */ case 81:
  '�			_r$4 = reflect.TypeOf(data).String(); /* */ $s = 83; case 83: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_r$5 = errors.New("binary.Write: invalid type " + _r$4); /* */ $s = 84; case 84: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			$24r = _r$5;
			$s = 85; case 85: return $24r;
    		/* } */ case 82:
  (1		buf = $makeSlice(sliceType, size);
  (L		e = new encoder.ptr(order, buf, 0);
  (s		$r = e.value($clone(v$33, reflect.Value)); /* */ $s = 86; case 86: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  (		_r$6 = w.Write(buf); /* */ $s = 87; case 87: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_tuple$1 = _r$6;
		err$1 = _tuple$1[1];
  (�		$s = -1; return err$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Write }; } $f.$24r = $24r; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._i$4 = _i$4; $f._i$5 = _i$5; $f._i$6 = _i$6; $f._i$7 = _i$7; $f._i$8 = _i$8; $f._i$9 = _i$9; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$10 = _ref$10; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._ref$4 = _ref$4; $f._ref$5 = _ref$5; $f._ref$6 = _ref$6; $f._ref$7 = _ref$7; $f._ref$8 = _ref$8; $f._ref$9 = _ref$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.bs = bs; $f.buf = buf; $f.data = data; $f.e = e; $f.err = err; $f.err$1 = err$1; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.i$4 = i$4; $f.i$5 = i$5; $f.i$6 = i$6; $f.i$7 = i$7; $f.i$8 = i$8; $f.i$9 = i$9; $f.n = n; $f.order = order; $f.size = size; $f.v = v; $f.v$1 = v$1; $f.v$10 = v$10; $f.v$11 = v$11; $f.v$12 = v$12; $f.v$13 = v$13; $f.v$14 = v$14; $f.v$15 = v$15; $f.v$16 = v$16; $f.v$17 = v$17; $f.v$18 = v$18; $f.v$19 = v$19; $f.v$2 = v$2; $f.v$20 = v$20; $f.v$21 = v$21; $f.v$22 = v$22; $f.v$23 = v$23; $f.v$24 = v$24; $f.v$25 = v$25; $f.v$26 = v$26; $f.v$27 = v$27; $f.v$28 = v$28; $f.v$29 = v$29; $f.v$3 = v$3; $f.v$30 = v$30; $f.v$31 = v$31; $f.v$32 = v$32; $f.v$33 = v$33; $f.v$4 = v$4; $f.v$5 = v$5; $f.v$6 = v$6; $f.v$7 = v$7; $f.v$8 = v$8; $f.v$9 = v$9; $f.w = w; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Write = Write;
Write"encoding/binary.Writeencoding/binary.dataSizeencoding/binary.encoderencoding/binary.intDataSizeencoding/binary.ptrTypeencoding/binary.ptrType$1encoding/binary.ptrType$10encoding/binary.ptrType$2encoding/binary.ptrType$3encoding/binary.ptrType$4encoding/binary.ptrType$5encoding/binary.ptrType$6encoding/binary.ptrType$7encoding/binary.ptrType$8encoding/binary.ptrType$9encoding/binary.sliceTypeencoding/binary.sliceType$1encoding/binary.sliceType$10encoding/binary.sliceType$2encoding/binary.sliceType$3encoding/binary.sliceType$4encoding/binary.sliceType$5encoding/binary.sliceType$6encoding/binary.sliceType$7encoding/binary.sliceType$8encoding/binary.sliceType$9encoding/binary.value~
errors.Newmath.Float32bitsmath.Float64bitsreflect.Indirectreflect.TypeOfreflect.Valuereflect.ValueOf encoding/binary.Sizeencoding/binarySize Size�	Size = function(v) {
		var $24r, _r, _r$1, _r$2, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  )�		_r = reflect.ValueOf(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = reflect.Indirect($clone(_r, reflect.Value)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = dataSize($clone(_r$1, reflect.Value)); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 4; case 4: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Size }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Size = Size;
Sizeencoding/binary.Sizeencoding/binary.dataSizereflect.Indirectreflect.Valuereflect.ValueOf encoding/binary.dataSizeencoding/binarydataSize dataSize�	�	dataSize = function(v) {
		var $24r, _1, _r, _r$1, _r$2, _r$3, _r$4, _tuple, ok, s, size, size$1, t, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tuple = $f._tuple; ok = $f.ok; s = $f.s; size = $f.size; size$1 = $f.size$1; t = $f.t; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = $clone(v, reflect.Value).Kind();
  +�			/* */ if (_1 === (23)) { $s = 2; continue; }
			/* */ if (_1 === (25)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_1 === (23)) { */ case 2:
  +�				_r = $clone(v, reflect.Value).Type().Elem(); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_r$1 = sizeof(_r); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				s = _r$1;
    				if (s >= 0) {
  +�					$s = -1; return $imul(s, $clone(v, reflect.Value).Len());
    				}
  ,				$s = -1; return -1;
    			/* } else if (_1 === (25)) { */ case 3:
  ,+				t = $clone(v, reflect.Value).Type();
  ,>				_r$2 = structSize.Load(t); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				size = _tuple[0];
				ok = _tuple[1];
    				if (ok) {
  ,f					$s = -1; return $assertType(size, $Int);
    				}
  ,~				_r$3 = sizeof(t); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				size$1 = _r$3;
  ,�				$r = structSize.Store(t, new $Int(size$1)); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ,�				$s = -1; return size$1;
    			/* } else { */ case 4:
  ,�				_r$4 = sizeof($clone(v, reflect.Value).Type()); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				$24r = _r$4;
				$s = 12; case 12: return $24r;
    			/* } */ case 5:
    		case 1:
    		$s = -1; return 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: dataSize }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tuple = _tuple; $f.ok = ok; $f.s = s; $f.size = size; $f.size$1 = size$1; $f.t = t; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
dataSizeencoding/binary.dataSizeencoding/binary.sizeofencoding/binary.structSizereflect.Value encoding/binary.sizeofencoding/binarysizeof sizeof�'	sizeof = function(t) {
		var $24r, $24r$1, _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _tmp, _tmp$1, i, n, s, s$1, sum, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; i = $f.i; n = $f.n; s = $f.s; s$1 = $f.s$1; sum = $f.sum; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_r = t.Kind(); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_1 = _r;
  -�			/* */ if (_1 === (17)) { $s = 3; continue; }
			/* */ if (_1 === (25)) { $s = 4; continue; }
			/* */ if ((_1 === (1)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6)) || (_1 === (13)) || (_1 === (14)) || (_1 === (15)) || (_1 === (16))) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_1 === (17)) { */ case 3:
  -�				_r$1 = t.Elem(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = sizeof(_r$1); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				s = _r$2;
  -�				/* */ if (s >= 0) { $s = 9; continue; }
				/* */ $s = 10; continue;
    				/* if (s >= 0) { */ case 9:
  -�					_r$3 = t.Len(); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					$24r = $imul(s, _r$3);
					$s = 12; case 12: return $24r;
    				/* } */ case 10:
    				$s = 6; continue;
    			/* } else if (_1 === (25)) { */ case 4:
  -�				sum = 0;
  -�				_tmp = 0;
				_r$4 = t.NumField(); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_tmp$1 = _r$4;
				i = _tmp;
				n = _tmp$1;
				/* while (true) { */ case 14:
					/* if (!(i < n)) { break; } */ if(!(i < n)) { $s = 15; continue; }
  .$					_r$5 = t.Field(i); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					_r$6 = sizeof(_r$5.Type); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					s$1 = _r$6;
    					if (s$1 < 0) {
  .S						$s = -1; return -1;
    					}
  .e					sum = sum + (s$1) >> 0;
  .					i = i + (1) >> 0;
    				$s = 14; continue;
				case 15:
  .t				$s = -1; return sum;
    			/* } else if ((_1 === (1)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6)) || (_1 === (13)) || (_1 === (14)) || (_1 === (15)) || (_1 === (16))) { */ case 5:
  /_				_r$7 = t.Size(); /* */ $s = 18; case 18: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$24r$1 = ((_r$7 >> 0));
				$s = 19; case 19: return $24r$1;
    			/* } */ case 6:
    		case 1:
  /y		$s = -1; return -1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: sizeof }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.i = i; $f.n = n; $f.s = s; $f.s$1 = s$1; $f.sum = sum; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
sizeofencoding/binary.sizeof (*encoding/binary.decoder).bool �}	decoder.ptr.prototype.bool = function() {
		var d, x, x$1, x$2;
		d = this;
  0		x$2 = (x = d.buf, x$1 = d.offset, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  0(		d.offset = d.offset + (1) >> 0;
  04		return !((x$2 === 0));
    	};
	decoder.prototype.bool = function() { return this.$val.bool(); };
decoderbool~encoding/binary.decoder (*encoding/binary.encoder).bool �B	encoder.ptr.prototype.bool = function(x) {
		var e, x, x$1, x$2, x$3, x$4;
		e = this;
    		if (x) {
  0p			(x$1 = e.buf, x$2 = e.offset, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2] = 1));
    		} else {
  0�			(x$3 = e.buf, x$4 = e.offset, ((x$4 < 0 || x$4 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + x$4] = 0));
    		}
  0�		e.offset = e.offset + (1) >> 0;
    	};
	encoder.prototype.bool = function(x) { return this.$val.bool(x); };
encoderbool~encoding/binary.encoder  (*encoding/binary.decoder).uint8 �u	decoder.ptr.prototype.uint8 = function() {
		var d, x, x$1, x$2;
		d = this;
  0�		x$2 = (x = d.buf, x$1 = d.offset, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  0�		d.offset = d.offset + (1) >> 0;
  0�		return x$2;
    	};
	decoder.prototype.uint8 = function() { return this.$val.uint8(); };
decoderuint8~encoding/binary.decoder  (*encoding/binary.encoder).uint8 �k	encoder.ptr.prototype.uint8 = function(x) {
		var e, x, x$1, x$2;
		e = this;
  1+		(x$1 = e.buf, x$2 = e.offset, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2] = x));
  1@		e.offset = e.offset + (1) >> 0;
    	};
	encoder.prototype.uint8 = function(x) { return this.$val.uint8(x); };
encoderuint8~encoding/binary.encoder !(*encoding/binary.decoder).uint16 �	decoder.ptr.prototype.uint16 = function() {
		var _r, d, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  1s		_r = d.order.Uint16($subslice(d.buf, d.offset, (d.offset + 2 >> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
  1�		d.offset = d.offset + (2) >> 0;
  1�		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.uint16 }; } $f._r = _r; $f.d = d; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.uint16 = function() { return this.$val.uint16(); };
decoderuint16~encoding/binary.decoder !(*encoding/binary.encoder).uint16 ��	encoder.ptr.prototype.uint16 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  1�		$r = e.order.PutUint16($subslice(e.buf, e.offset, (e.offset + 2 >> 0)), x); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  2		e.offset = e.offset + (2) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.uint16 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.uint16 = function(x) { return this.$val.uint16(x); };
encoderuint16~encoding/binary.encoder !(*encoding/binary.decoder).uint32 �	decoder.ptr.prototype.uint32 = function() {
		var _r, d, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  2O		_r = d.order.Uint32($subslice(d.buf, d.offset, (d.offset + 4 >> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
  2�		d.offset = d.offset + (4) >> 0;
  2�		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.uint32 }; } $f._r = _r; $f.d = d; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.uint32 = function() { return this.$val.uint32(); };
decoderuint32~encoding/binary.decoder !(*encoding/binary.encoder).uint32 ��	encoder.ptr.prototype.uint32 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  2�		$r = e.order.PutUint32($subslice(e.buf, e.offset, (e.offset + 4 >> 0)), x); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  2�		e.offset = e.offset + (4) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.uint32 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.uint32 = function(x) { return this.$val.uint32(x); };
encoderuint32~encoding/binary.encoder !(*encoding/binary.decoder).uint64 �	decoder.ptr.prototype.uint64 = function() {
		var _r, d, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  3+		_r = d.order.Uint64($subslice(d.buf, d.offset, (d.offset + 8 >> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
  3^		d.offset = d.offset + (8) >> 0;
  3m		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.uint64 }; } $f._r = _r; $f.d = d; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.uint64 = function() { return this.$val.uint64(); };
decoderuint64~encoding/binary.decoder !(*encoding/binary.encoder).uint64 ��	encoder.ptr.prototype.uint64 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  3�		$r = e.order.PutUint64($subslice(e.buf, e.offset, (e.offset + 8 >> 0)), x); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  3�		e.offset = e.offset + (8) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.uint64 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.uint64 = function(x) { return this.$val.uint64(x); };
encoderuint64~encoding/binary.encoder (*encoding/binary.decoder).int8 ��	decoder.ptr.prototype.int8 = function() {
		var d;
		d = this;
  4		return ((d.uint8() << 24 >> 24));
    	};
	decoder.prototype.int8 = function() { return this.$val.int8(); };
decoderint8~encoding/binary.decoderencoding/binary.uint8~ (*encoding/binary.encoder).int8 ��	encoder.ptr.prototype.int8 = function(x) {
		var e, x;
		e = this;
  4=		e.uint8(((x << 24 >>> 24)));
    	};
	encoder.prototype.int8 = function(x) { return this.$val.int8(x); };
encoderint8~encoding/binary.encoderencoding/binary.uint8~  (*encoding/binary.decoder).int16 ��	decoder.ptr.prototype.int16 = function() {
		var $24r, _r, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  4t		_r = d.uint16(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = ((_r << 16 >> 16));
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.int16 }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.int16 = function() { return this.$val.int16(); };
decoderint16~encoding/binary.decoderencoding/binary.uint16~  (*encoding/binary.encoder).int16 ��	encoder.ptr.prototype.int16 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  4�		$r = e.uint16(((x << 16 >>> 16))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.int16 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.int16 = function(x) { return this.$val.int16(x); };
encoderint16~encoding/binary.encoderencoding/binary.uint16~  (*encoding/binary.decoder).int32 ��	decoder.ptr.prototype.int32 = function() {
		var $24r, _r, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  4�		_r = d.uint32(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = ((_r >> 0));
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.int32 }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.int32 = function() { return this.$val.int32(); };
decoderint32~encoding/binary.decoderencoding/binary.uint32~  (*encoding/binary.encoder).int32 ��	encoder.ptr.prototype.int32 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  5+		$r = e.uint32(((x >>> 0))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.int32 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.int32 = function(x) { return this.$val.int32(x); };
encoderint32~encoding/binary.encoderencoding/binary.uint32~  (*encoding/binary.decoder).int64 �	decoder.ptr.prototype.int64 = function() {
		var $24r, _r, d, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  5d		_r = d.uint64(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = ((x = _r, new $Int64(x.$high, x.$low)));
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.int64 }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.int64 = function() { return this.$val.int64(); };
decoderint64~encoding/binary.decoderencoding/binary.uint64~  (*encoding/binary.encoder).int64 ��	encoder.ptr.prototype.int64 = function(x) {
		var e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  5�		$r = e.uint64((new $Uint64(x.$high, x.$low))); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.int64 }; } $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.int64 = function(x) { return this.$val.int64(x); };
encoderint64~encoding/binary.encoderencoding/binary.uint64~  (*encoding/binary.decoder).value �+>	decoder.ptr.prototype.value = function(v) {
		var _1, _arg, _arg$1, _arg$2, _arg$3, _r, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _v, d, i, i$1, i$2, l, l$1, l$2, t, v, v$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _arg$3 = $f._arg$3; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _v = $f._v; d = $f.d; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; l = $f.l; l$1 = $f.l$1; l$2 = $f.l$2; t = $f.t; v = $f.v; v$1 = $f.v$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    			_1 = $clone(v, reflect.Value).Kind();
  5�			/* */ if (_1 === (17)) { $s = 2; continue; }
			/* */ if (_1 === (25)) { $s = 3; continue; }
			/* */ if (_1 === (23)) { $s = 4; continue; }
			/* */ if (_1 === (1)) { $s = 5; continue; }
			/* */ if (_1 === (3)) { $s = 6; continue; }
			/* */ if (_1 === (4)) { $s = 7; continue; }
			/* */ if (_1 === (5)) { $s = 8; continue; }
			/* */ if (_1 === (6)) { $s = 9; continue; }
			/* */ if (_1 === (8)) { $s = 10; continue; }
			/* */ if (_1 === (9)) { $s = 11; continue; }
			/* */ if (_1 === (10)) { $s = 12; continue; }
			/* */ if (_1 === (11)) { $s = 13; continue; }
			/* */ if (_1 === (13)) { $s = 14; continue; }
			/* */ if (_1 === (14)) { $s = 15; continue; }
			/* */ if (_1 === (15)) { $s = 16; continue; }
			/* */ if (_1 === (16)) { $s = 17; continue; }
			/* */ $s = 18; continue;
    			/* if (_1 === (17)) { */ case 2:
  6				l = $clone(v, reflect.Value).Len();
  6"				i = 0;
				/* while (true) { */ case 19:
					/* if (!(i < l)) { break; } */ if(!(i < l)) { $s = 20; continue; }
  6:					_r = $clone(v, reflect.Value).Index(i); /* */ $s = 21; case 21: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					$r = d.value($clone(_r, reflect.Value)); /* */ $s = 22; case 22: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  61					i = i + (1) >> 0;
    				$s = 19; continue;
				case 20:
    				$s = 18; continue;
    			/* } else if (_1 === (25)) { */ case 3:
  6k				t = $clone(v, reflect.Value).Type();
  6{				l$1 = $clone(v, reflect.Value).NumField();
  6�				i$1 = 0;
				/* while (true) { */ case 23:
					/* if (!(i$1 < l$1)) { break; } */ if(!(i$1 < l$1)) { $s = 24; continue; }
  7�					_r$1 = $clone(v, reflect.Value).Field(i$1); /* */ $s = 25; case 25: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					v$1 = _r$1;
  7�					if ($clone(v$1, reflect.Value).CanSet()) { _v = true; $s = 29; continue s; }
					_r$2 = t.Field(i$1); /* */ $s = 30; case 30: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_v = !(_r$2.Name === "_"); case 29:
					/* */ if (_v) { $s = 26; continue; }
					/* */ $s = 27; continue;
    					/* if (_v) { */ case 26:
  7�						$r = d.value($clone(v$1, reflect.Value)); /* */ $s = 31; case 31: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 28; continue;
					/* } else { */ case 27:
  8						$r = d.skip($clone(v$1, reflect.Value)); /* */ $s = 32; case 32: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 28:
  6�					i$1 = i$1 + (1) >> 0;
    				$s = 23; continue;
				case 24:
    				$s = 18; continue;
    			/* } else if (_1 === (23)) { */ case 4:
  8D				l$2 = $clone(v, reflect.Value).Len();
  8W				i$2 = 0;
				/* while (true) { */ case 33:
					/* if (!(i$2 < l$2)) { break; } */ if(!(i$2 < l$2)) { $s = 34; continue; }
  8o					_r$3 = $clone(v, reflect.Value).Index(i$2); /* */ $s = 35; case 35: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					$r = d.value($clone(_r$3, reflect.Value)); /* */ $s = 36; case 36: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  8f					i$2 = i$2 + (1) >> 0;
    				$s = 33; continue;
				case 34:
    				$s = 18; continue;
    			/* } else if (_1 === (1)) { */ case 5:
  8�				$clone(v, reflect.Value).SetBool(d.bool());
    				$s = 18; continue;
    			/* } else if (_1 === (3)) { */ case 6:
  8�				$clone(v, reflect.Value).SetInt((new $Int64(0, d.int8())));
    				$s = 18; continue;
    			/* } else if (_1 === (4)) { */ case 7:
  8�				_r$4 = d.int16(); /* */ $s = 37; case 37: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetInt((new $Int64(0, _r$4))); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (5)) { */ case 8:
  9,				_r$5 = d.int32(); /* */ $s = 39; case 39: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetInt((new $Int64(0, _r$5))); /* */ $s = 40; case 40: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (6)) { */ case 9:
  9^				_r$6 = d.int64(); /* */ $s = 41; case 41: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetInt(_r$6); /* */ $s = 42; case 42: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (8)) { */ case 10:
  9�				$clone(v, reflect.Value).SetUint((new $Uint64(0, d.uint8())));
    				$s = 18; continue;
    			/* } else if (_1 === (9)) { */ case 11:
  9�				_r$7 = d.uint16(); /* */ $s = 43; case 43: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetUint((new $Uint64(0, _r$7))); /* */ $s = 44; case 44: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (10)) { */ case 12:
  9�				_r$8 = d.uint32(); /* */ $s = 45; case 45: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetUint((new $Uint64(0, _r$8))); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (11)) { */ case 13:
  :+				_r$9 = d.uint64(); /* */ $s = 47; case 47: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetUint(_r$9); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (13)) { */ case 14:
  :[				_r$10 = d.uint32(); /* */ $s = 49; case 49: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
				_r$11 = math.Float32frombits(_r$10); /* */ $s = 50; case 50: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetFloat((_r$11)); /* */ $s = 51; case 51: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (14)) { */ case 15:
  :�				_r$12 = d.uint64(); /* */ $s = 52; case 52: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
				_r$13 = math.Float64frombits(_r$12); /* */ $s = 53; case 53: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
				$r = $clone(v, reflect.Value).SetFloat(_r$13); /* */ $s = 54; case 54: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (15)) { */ case 16:
  :�				_r$14 = d.uint32(); /* */ $s = 55; case 55: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
				_r$15 = math.Float32frombits(_r$14); /* */ $s = 56; case 56: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
				_arg = (_r$15);
				_r$16 = d.uint32(); /* */ $s = 57; case 57: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
				_r$17 = math.Float32frombits(_r$16); /* */ $s = 58; case 58: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
				_arg$1 = (_r$17);
				$r = $clone(v, reflect.Value).SetComplex(new $Complex128(_arg, _arg$1)); /* */ $s = 59; case 59: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    				$s = 18; continue;
    			/* } else if (_1 === (16)) { */ case 17:
  ;�				_r$18 = d.uint64(); /* */ $s = 60; case 60: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
				_r$19 = math.Float64frombits(_r$18); /* */ $s = 61; case 61: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
				_arg$2 = _r$19;
				_r$20 = d.uint64(); /* */ $s = 62; case 62: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
				_r$21 = math.Float64frombits(_r$20); /* */ $s = 63; case 63: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
				_arg$3 = _r$21;
				$r = $clone(v, reflect.Value).SetComplex(new $Complex128(_arg$2, _arg$3)); /* */ $s = 64; case 64: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 18:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.value }; } $f._1 = _1; $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._arg$3 = _arg$3; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._v = _v; $f.d = d; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.l = l; $f.l$1 = l$1; $f.l$2 = l$2; $f.t = t; $f.v = v; $f.v$1 = v$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.value = function(v) { return this.$val.value(v); };
decodervalue~encoding/binary.bool~encoding/binary.decoderencoding/binary.int16~encoding/binary.int32~encoding/binary.int64~encoding/binary.int8~encoding/binary.skip~encoding/binary.uint16~encoding/binary.uint32~encoding/binary.uint64~encoding/binary.uint8~encoding/binary.value~math.Float32frombitsmath.Float64frombitsreflect.Value  (*encoding/binary.encoder).value �(C	encoder.ptr.prototype.value = function(v) {
		var _1, _2, _3, _4, _5, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _v, e, i, i$1, i$2, l, l$1, l$2, t, v, v$1, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _5 = $f._5; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _v = $f._v; e = $f.e; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; l = $f.l; l$1 = $f.l$1; l$2 = $f.l$2; t = $f.t; v = $f.v; v$1 = $f.v$1; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
    			_1 = $clone(v, reflect.Value).Kind();
  <0			/* */ if (_1 === (17)) { $s = 2; continue; }
			/* */ if (_1 === (25)) { $s = 3; continue; }
			/* */ if (_1 === (23)) { $s = 4; continue; }
			/* */ if (_1 === (1)) { $s = 5; continue; }
			/* */ if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { $s = 6; continue; }
			/* */ if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { $s = 7; continue; }
			/* */ if ((_1 === (13)) || (_1 === (14))) { $s = 8; continue; }
			/* */ if ((_1 === (15)) || (_1 === (16))) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (_1 === (17)) { */ case 2:
  <F				l = $clone(v, reflect.Value).Len();
  <Y				i = 0;
				/* while (true) { */ case 11:
					/* if (!(i < l)) { break; } */ if(!(i < l)) { $s = 12; continue; }
  <q					_r = $clone(v, reflect.Value).Index(i); /* */ $s = 13; case 13: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					$r = e.value($clone(_r, reflect.Value)); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  <h					i = i + (1) >> 0;
    				$s = 11; continue;
				case 12:
    				$s = 10; continue;
    			/* } else if (_1 === (25)) { */ case 3:
  <�				t = $clone(v, reflect.Value).Type();
  <�				l$1 = $clone(v, reflect.Value).NumField();
  <�				i$1 = 0;
				/* while (true) { */ case 15:
					/* if (!(i$1 < l$1)) { break; } */ if(!(i$1 < l$1)) { $s = 16; continue; }
  =!					_r$1 = $clone(v, reflect.Value).Field(i$1); /* */ $s = 17; case 17: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					v$1 = _r$1;
  =					if ($clone(v$1, reflect.Value).CanSet()) { _v = true; $s = 21; continue s; }
					_r$2 = t.Field(i$1); /* */ $s = 22; case 22: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_v = !(_r$2.Name === "_"); case 21:
					/* */ if (_v) { $s = 18; continue; }
					/* */ $s = 19; continue;
    					/* if (_v) { */ case 18:
  =]						$r = e.value($clone(v$1, reflect.Value)); /* */ $s = 23; case 23: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 20; continue;
					/* } else { */ case 19:
  =x						$r = e.skip($clone(v$1, reflect.Value)); /* */ $s = 24; case 24: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 20:
  <�					i$1 = i$1 + (1) >> 0;
    				$s = 15; continue;
				case 16:
    				$s = 10; continue;
    			/* } else if (_1 === (23)) { */ case 4:
  =�				l$2 = $clone(v, reflect.Value).Len();
  =�				i$2 = 0;
				/* while (true) { */ case 25:
					/* if (!(i$2 < l$2)) { break; } */ if(!(i$2 < l$2)) { $s = 26; continue; }
  =�					_r$3 = $clone(v, reflect.Value).Index(i$2); /* */ $s = 27; case 27: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					$r = e.value($clone(_r$3, reflect.Value)); /* */ $s = 28; case 28: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  =�					i$2 = i$2 + (1) >> 0;
    				$s = 25; continue;
				case 26:
    				$s = 10; continue;
    			/* } else if (_1 === (1)) { */ case 5:
  =�				e.bool($clone(v, reflect.Value).Bool());
    				$s = 10; continue;
    			/* } else if ((_1 === (2)) || (_1 === (3)) || (_1 === (4)) || (_1 === (5)) || (_1 === (6))) { */ case 6:
    					_r$4 = $clone(v, reflect.Value).Type().Kind(); /* */ $s = 30; case 30: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					_2 = _r$4;
  >z					/* */ if (_2 === (3)) { $s = 31; continue; }
					/* */ if (_2 === (4)) { $s = 32; continue; }
					/* */ if (_2 === (5)) { $s = 33; continue; }
					/* */ if (_2 === (6)) { $s = 34; continue; }
					/* */ $s = 35; continue;
    					/* if (_2 === (3)) { */ case 31:
  >�						e.int8((((x = $clone(v, reflect.Value).Int(), x.$low + ((x.$high >> 31) * 4294967296)) << 24 >> 24)));
    						$s = 35; continue;
    					/* } else if (_2 === (4)) { */ case 32:
  >�						$r = e.int16((((x$1 = $clone(v, reflect.Value).Int(), x$1.$low + ((x$1.$high >> 31) * 4294967296)) << 16 >> 16))); /* */ $s = 36; case 36: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 35; continue;
    					/* } else if (_2 === (5)) { */ case 33:
  >�						$r = e.int32((((x$2 = $clone(v, reflect.Value).Int(), x$2.$low + ((x$2.$high >> 31) * 4294967296)) >> 0))); /* */ $s = 37; case 37: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 35; continue;
    					/* } else if (_2 === (6)) { */ case 34:
  ?!						$r = e.int64($clone(v, reflect.Value).Int()); /* */ $s = 38; case 38: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 35:
    				case 29:
    				$s = 10; continue;
    			/* } else if ((_1 === (7)) || (_1 === (8)) || (_1 === (9)) || (_1 === (10)) || (_1 === (11)) || (_1 === (12))) { */ case 7:
    					_r$5 = $clone(v, reflect.Value).Type().Kind(); /* */ $s = 40; case 40: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					_3 = _r$5;
  ?�					/* */ if (_3 === (8)) { $s = 41; continue; }
					/* */ if (_3 === (9)) { $s = 42; continue; }
					/* */ if (_3 === (10)) { $s = 43; continue; }
					/* */ if (_3 === (11)) { $s = 44; continue; }
					/* */ $s = 45; continue;
    					/* if (_3 === (8)) { */ case 41:
  ?�						e.uint8((($clone(v, reflect.Value).Uint().$low << 24 >>> 24)));
    						$s = 45; continue;
    					/* } else if (_3 === (9)) { */ case 42:
  @						$r = e.uint16((($clone(v, reflect.Value).Uint().$low << 16 >>> 16))); /* */ $s = 46; case 46: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 45; continue;
    					/* } else if (_3 === (10)) { */ case 43:
  @7						$r = e.uint32((($clone(v, reflect.Value).Uint().$low >>> 0))); /* */ $s = 47; case 47: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 45; continue;
    					/* } else if (_3 === (11)) { */ case 44:
  @l						$r = e.uint64($clone(v, reflect.Value).Uint()); /* */ $s = 48; case 48: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 45:
    				case 39:
    				$s = 10; continue;
    			/* } else if ((_1 === (13)) || (_1 === (14))) { */ case 8:
    					_r$6 = $clone(v, reflect.Value).Type().Kind(); /* */ $s = 50; case 50: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					_4 = _r$6;
  @�					/* */ if (_4 === (13)) { $s = 51; continue; }
					/* */ if (_4 === (14)) { $s = 52; continue; }
					/* */ $s = 53; continue;
    					/* if (_4 === (13)) { */ case 51:
  @�						$r = e.uint32(math.Float32bits(($fround($clone(v, reflect.Value).Float())))); /* */ $s = 54; case 54: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 53; continue;
    					/* } else if (_4 === (14)) { */ case 52:
  A,						$r = e.uint64(math.Float64bits($clone(v, reflect.Value).Float())); /* */ $s = 55; case 55: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 53:
    				case 49:
    				$s = 10; continue;
    			/* } else if ((_1 === (15)) || (_1 === (16))) { */ case 9:
    					_r$7 = $clone(v, reflect.Value).Type().Kind(); /* */ $s = 57; case 57: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					_5 = _r$7;
  A�					/* */ if (_5 === (15)) { $s = 58; continue; }
					/* */ if (_5 === (16)) { $s = 59; continue; }
					/* */ $s = 60; continue;
    					/* if (_5 === (15)) { */ case 58:
  A�						x$3 = $clone(v, reflect.Value).Complex();
  A�						$r = e.uint32(math.Float32bits(($fround(x$3.$real)))); /* */ $s = 61; case 61: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  B 						$r = e.uint32(math.Float32bits(($fround(x$3.$imag)))); /* */ $s = 62; case 62: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 60; continue;
    					/* } else if (_5 === (16)) { */ case 59:
  BK						x$4 = $clone(v, reflect.Value).Complex();
  B_						$r = e.uint64(math.Float64bits(x$4.$real)); /* */ $s = 63; case 63: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  B�						$r = e.uint64(math.Float64bits(x$4.$imag)); /* */ $s = 64; case 64: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 60:
    				case 56:
    			/* } */ case 10:
    		case 1:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.value }; } $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._5 = _5; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._v = _v; $f.e = e; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.l = l; $f.l$1 = l$1; $f.l$2 = l$2; $f.t = t; $f.v = v; $f.v$1 = v$1; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.value = function(v) { return this.$val.value(v); };
encodervalue~encoding/binary.bool~encoding/binary.encoderencoding/binary.int16~encoding/binary.int32~encoding/binary.int64~encoding/binary.int8~encoding/binary.skip~encoding/binary.uint16~encoding/binary.uint32~encoding/binary.uint64~encoding/binary.uint8~encoding/binary.value~math.Float32bitsmath.Float64bitsreflect.Value (*encoding/binary.decoder).skip ��	decoder.ptr.prototype.skip = function(v) {
		var _r, d, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; d = $f.d; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  B�		_r = dataSize($clone(v, reflect.Value)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		d.offset = d.offset + (_r) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: decoder.ptr.prototype.skip }; } $f._r = _r; $f.d = d; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	decoder.prototype.skip = function(v) { return this.$val.skip(v); };
decoderskip~encoding/binary.dataSizeencoding/binary.decoderreflect.Value (*encoding/binary.encoder).skip ��	encoder.ptr.prototype.skip = function(v) {
		var _i, _r, _ref, e, i, n, v, zero, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; e = $f.e; i = $f.i; n = $f.n; v = $f.v; zero = $f.zero; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  C%		_r = dataSize($clone(v, reflect.Value)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		n = _r;
  C7		zero = $subslice(e.buf, e.offset, (e.offset + n >> 0));
  C]		_ref = zero;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  Cu			((i < 0 || i >= zero.$length) ? ($throwRuntimeError("index out of range"), undefined) : zero.$array[zero.$offset + i] = 0);
    			_i++;
		}
  C�		e.offset = e.offset + (n) >> 0;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: encoder.ptr.prototype.skip }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.e = e; $f.i = i; $f.n = n; $f.v = v; $f.zero = zero; $f.$s = $s; $f.$r = $r; return $f;
	};
	encoder.prototype.skip = function(v) { return this.$val.skip(v); };
encoderskip~encoding/binary.dataSizeencoding/binary.encoderreflect.Value encoding/binary.intDataSizeencoding/binaryintDataSize intDataSize�A	intDataSize = function(data) {
		var _ref, data, data$1, data$10, data$11, data$12, data$13, data$14, data$15, data$16, data$17, data$2, data$3, data$4, data$5, data$6, data$7, data$8, data$9;
  Dq		_ref = data;
    		if ($assertType(_ref, $Bool, true)[1] || $assertType(_ref, $Int8, true)[1] || $assertType(_ref, $Uint8, true)[1] || $assertType(_ref, ptrType, true)[1] || $assertType(_ref, ptrType$1, true)[1] || $assertType(_ref, ptrType$2, true)[1]) {
    			data$1 = _ref;
  D�			return 1;
    		} else if ($assertType(_ref, sliceType$1, true)[1]) {
    			data$2 = _ref.$val;
  D�			return data$2.$length;
    		} else if ($assertType(_ref, sliceType$2, true)[1]) {
    			data$3 = _ref.$val;
  D�			return data$3.$length;
    		} else if ($assertType(_ref, sliceType, true)[1]) {
    			data$4 = _ref.$val;
  E			return data$4.$length;
    		} else if ($assertType(_ref, $Int16, true)[1] || $assertType(_ref, $Uint16, true)[1] || $assertType(_ref, ptrType$3, true)[1] || $assertType(_ref, ptrType$4, true)[1]) {
    			data$5 = _ref;
  ET			return 2;
    		} else if ($assertType(_ref, sliceType$3, true)[1]) {
    			data$6 = _ref.$val;
  En			return $imul(2, data$6.$length);
    		} else if ($assertType(_ref, sliceType$4, true)[1]) {
    			data$7 = _ref.$val;
  E�			return $imul(2, data$7.$length);
    		} else if ($assertType(_ref, $Int32, true)[1] || $assertType(_ref, $Uint32, true)[1] || $assertType(_ref, ptrType$5, true)[1] || $assertType(_ref, ptrType$6, true)[1]) {
    			data$8 = _ref;
  E�			return 4;
    		} else if ($assertType(_ref, sliceType$5, true)[1]) {
    			data$9 = _ref.$val;
  E�			return $imul(4, data$9.$length);
    		} else if ($assertType(_ref, sliceType$6, true)[1]) {
    			data$10 = _ref.$val;
  F			return $imul(4, data$10.$length);
    		} else if ($assertType(_ref, $Int64, true)[1] || $assertType(_ref, $Uint64, true)[1] || $assertType(_ref, ptrType$7, true)[1] || $assertType(_ref, ptrType$8, true)[1]) {
    			data$11 = _ref;
  FP			return 8;
    		} else if ($assertType(_ref, sliceType$7, true)[1]) {
    			data$12 = _ref.$val;
  Fj			return $imul(8, data$12.$length);
    		} else if ($assertType(_ref, sliceType$8, true)[1]) {
    			data$13 = _ref.$val;
  F�			return $imul(8, data$13.$length);
    		} else if ($assertType(_ref, $Float32, true)[1] || $assertType(_ref, ptrType$9, true)[1]) {
    			data$14 = _ref;
  F�			return 4;
    		} else if ($assertType(_ref, $Float64, true)[1] || $assertType(_ref, ptrType$10, true)[1]) {
    			data$15 = _ref;
  F�			return 8;
    		} else if ($assertType(_ref, sliceType$9, true)[1]) {
    			data$16 = _ref.$val;
  G			return $imul(4, data$16.$length);
    		} else if ($assertType(_ref, sliceType$10, true)[1]) {
    			data$17 = _ref.$val;
  G)			return $imul(8, data$17.$length);
    		}
  GB		return 0;
    	};
intDataSizeencoding/binary.intDataSizeencoding/binary.ptrTypeencoding/binary.ptrType$1encoding/binary.ptrType$10encoding/binary.ptrType$2encoding/binary.ptrType$3encoding/binary.ptrType$4encoding/binary.ptrType$5encoding/binary.ptrType$6encoding/binary.ptrType$7encoding/binary.ptrType$8encoding/binary.ptrType$9encoding/binary.sliceTypeencoding/binary.sliceType$1encoding/binary.sliceType$10encoding/binary.sliceType$2encoding/binary.sliceType$3encoding/binary.sliceType$4encoding/binary.sliceType$5encoding/binary.sliceType$6encoding/binary.sliceType$7encoding/binary.sliceType$8encoding/binary.sliceType$9 encoding/binary.PutUvarintencoding/binary
PutUvarint 
PutUvarint�g	PutUvarint = function(buf, x) {
		var buf, i, x;
  M�		i = 0;
  M�		while (true) {
			if (!((x.$high > 0 || (x.$high === 0 && x.$low >= 128)))) { break; }
  M�			((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = ((((x.$low << 24 >>> 24)) | 128) >>> 0));
  M�			x = $shiftRightUint64(x, (7));
  N			i = i + (1) >> 0;
    		}
  N		((i < 0 || i >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + i] = ((x.$low << 24 >>> 24)));
  N		return i + 1 >> 0;
    	};
	$pkg.PutUvarint = PutUvarint;

PutUvarintencoding/binary.PutUvarint encoding/binary.Uvarintencoding/binaryUvarint Uvarint��	Uvarint = function(buf) {
		var _i, _ref, b, buf, i, s, x, x$1, x$2;
  O�		x = new $Uint64(0, 0);
  O�		s = 0;
  O�		_ref = buf;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (i === 10) {
  P:				return [new $Uint64(0, 0), -((i + 1 >> 0))];
    			}
    			if (b < 128) {
    				if ((i === 9) && b > 1) {
  P�					return [new $Uint64(0, 0), -((i + 1 >> 0))];
    				}
  P�				return [(x$1 = $shiftLeft64((new $Uint64(0, b)), s), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0)), i + 1 >> 0];
    			}
  P�			x = (x$2 = $shiftLeft64((new $Uint64(0, ((b & 127) >>> 0))), s), new $Uint64(x.$high | x$2.$high, (x.$low | x$2.$low) >>> 0));
  P�			s = s + (7) >>> 0;
    			_i++;
		}
  Q
		return [new $Uint64(0, 0), 0];
    	};
	$pkg.Uvarint = Uvarint;
Uvarintencoding/binary.Uvarint encoding/binary.PutVarintencoding/binary	PutVarint 	PutVarint�3	PutVarint = function(buf, x) {
		var buf, ux, x;
  Q�		ux = $shiftLeft64((new $Uint64(x.$high, x.$low)), 1);
    		if ((x.$high < 0 || (x.$high === 0 && x.$low < 0))) {
  Q�			ux = new $Uint64(~ux.$high, ~ux.$low >>> 0);
    		}
  Q�		return PutUvarint(buf, ux);
    	};
	$pkg.PutVarint = PutVarint;
	PutVarintencoding/binary.PutUvarintencoding/binary.PutVarint encoding/binary.Varintencoding/binaryVarint Varint��	Varint = function(buf) {
		var _tuple, buf, n, ux, x, x$1, x$2;
  S�		_tuple = Uvarint(buf);
		ux = _tuple[0];
		n = _tuple[1];
  S�		x$1 = ((x = $shiftRightUint64(ux, 1), new $Int64(x.$high, x.$low)));
    		if (!((x$2 = new $Uint64(ux.$high & 0, (ux.$low & 1) >>> 0), (x$2.$high === 0 && x$2.$low === 0)))) {
  S�			x$1 = new $Int64(~x$1.$high, ~x$1.$low >>> 0);
    		}
  S�		return [x$1, n];
    	};
	$pkg.Varint = Varint;
Varintencoding/binary.Uvarintencoding/binary.Varint encoding/binary.ReadUvarintencoding/binaryReadUvarint ReadUvarint�`	ReadUvarint = function(r) {
		var _r, _tuple, b, err, i, r, s, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; i = $f.i; r = $f.r; s = $f.s; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  T�		x = new $Uint64(0, 0);
  T�		s = 0;
  T�		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < 10)) { break; } */ if(!(i < 10)) { $s = 2; continue; }
  U			_r = r.ReadByte(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			b = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  UD				$s = -1; return [x, err];
    			}
    			if (b < 128) {
    				if ((i === 9) && b > 1) {
  U�					$s = -1; return [x, overflow];
    				}
  U�				$s = -1; return [(x$1 = $shiftLeft64((new $Uint64(0, b)), s), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0)), $ifaceNil];
    			}
  U�			x = (x$2 = $shiftLeft64((new $Uint64(0, ((b & 127) >>> 0))), s), new $Uint64(x.$high | x$2.$high, (x.$low | x$2.$low) >>> 0));
  U�			s = s + (7) >>> 0;
  U			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  U�		$s = -1; return [x, overflow];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadUvarint }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.i = i; $f.r = r; $f.s = s; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadUvarint = ReadUvarint;
ReadUvarintencoding/binary.ReadUvarintencoding/binary.overflow encoding/binary.ReadVarintencoding/binary
ReadVarint 
ReadVarint�?	ReadVarint = function(r) {
		var _r, _tuple, err, r, ux, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; r = $f.r; ux = $f.ux; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  V�		_r = ReadUvarint(r); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		ux = _tuple[0];
		err = _tuple[1];
  V�		x$1 = ((x = $shiftRightUint64(ux, 1), new $Int64(x.$high, x.$low)));
    		if (!((x$2 = new $Uint64(ux.$high & 0, (ux.$low & 1) >>> 0), (x$2.$high === 0 && x$2.$low === 0)))) {
  V�			x$1 = new $Int64(~x$1.$high, ~x$1.$low >>> 0);
    		}
  W		$s = -1; return [x$1, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadVarint }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.r = r; $f.ux = ux; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadVarint = ReadVarint;

ReadVarintencoding/binary.ReadUvarintencoding/binary.ReadVarint �v{"Base":22291,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/binary/binary.go","Base":1,"Size":18252,"Lines":[0,55,109,159,160,233,284,287,355,411,471,531,534,604,671,699,764,767,839,912,979,1011,1026,1027,1036,1046,1052,1060,1071,1079,1081,1082,1142,1184,1211,1234,1257,1280,1307,1334,1361,1378,1380,1381,1447,1477,1478,1538,1562,1563,1590,1591,1637,1708,1747,1749,1750,1802,1870,1886,1907,1909,1910,1956,2027,2104,2106,2107,2159,2227,2243,2264,2286,2308,2310,2311,2357,2428,2507,2583,2585,2586,2638,2706,2722,2743,2765,2787,2809,2831,2853,2875,2877,2878,2940,2941,3012,3013,3037,3038,3081,3152,3191,3193,3194,3243,3311,3332,3348,3350,3351,3394,3465,3542,3544,3545,3594,3662,3684,3706,3727,3743,3745,3746,3789,3860,3939,4015,4017,4018,4067,4135,4157,4179,4201,4223,4245,4267,4288,4304,4306,4307,4363,4364,4429,4430,4485,4544,4569,4633,4682,4752,4799,4860,4921,4949,5018,5040,5043,5091,5154,5188,5254,5296,5333,5357,5405,5419,5423,5454,5468,5490,5504,5527,5542,5559,5574,5609,5625,5653,5668,5703,5719,5747,5762,5797,5813,5841,5858,5908,5925,5975,5990,6067,6088,6093,6108,6134,6156,6161,6177,6195,6211,6236,6280,6285,6302,6327,6364,6369,6385,6410,6454,6459,6476,6501,6538,6543,6559,6584,6628,6633,6650,6675,6712,6717,6735,6760,6819,6824,6842,6867,6926,6931,6942,6978,6982,6996,7010,7014,7017,7018,7058,7086,7098,7117,7136,7151,7172,7193,7214,7217,7232,7314,7317,7371,7421,7434,7437,7449,7461,7463,7464,7522,7582,7620,7687,7752,7800,7860,7891,7958,8000,8037,8061,8089,8103,8114,8128,8140,8154,8159,8172,8182,8196,8208,8222,8227,8242,8267,8278,8293,8306,8321,8327,8332,8346,8366,8379,8398,8413,8438,8458,8463,8478,8492,8506,8519,8535,8545,8560,8595,8609,8643,8659,8684,8725,8730,8746,8773,8788,8814,8831,8856,8889,8894,8909,8944,8958,8992,9008,9033,9074,9079,9095,9122,9137,9163,9180,9205,9238,9243,9258,9293,9307,9341,9357,9382,9423,9428,9444,9471,9486,9512,9529,9554,9587,9592,9609,9654,9670,9714,9732,9757,9808,9813,9830,9875,9891,9935,9953,9978,10029,10034,10038,10062,10075,10078,10079,10119,10165,10186,10201,10284,10287,10314,10353,10365,10389,10401,10403,10404,10485,10575,10621,10652,10707,10709,10710,10758,10759,10852,10947,11038,11122,11159,11178,11199,11243,11265,11269,11281,11282,11304,11320,11362,11383,11387,11407,11435,11449,11450,11460,11486,11489,11491,11492,11593,11627,11646,11667,11704,11726,11730,11731,11753,11764,11808,11840,11854,11868,11873,11885,11889,11902,11903,11923,11988,12049,12124,12147,12150,12151,12162,12164,12165,12185,12203,12218,12230,12232,12233,12252,12271,12272,12304,12326,12338,12353,12355,12356,12389,12397,12419,12429,12451,12454,12466,12468,12469,12503,12525,12537,12547,12549,12550,12585,12606,12618,12620,12621,12657,12708,12723,12733,12735,12736,12773,12823,12838,12840,12841,12877,12928,12943,12953,12955,12956,12993,13043,13058,13060,13061,13097,13148,13163,13173,13175,13176,13213,13263,13278,13280,13281,13338,13339,13392,13393,13454,13455,13512,13513,13574,13575,13632,13633,13694,13695,13752,13753,13796,13815,13836,13851,13878,13901,13905,13906,13928,13944,13964,13991,14048,14102,14160,14218,14267,14329,14344,14356,14370,14375,14379,14380,14401,14416,14443,14466,14470,14471,14491,14513,14514,14534,14562,14583,14612,14633,14662,14683,14705,14706,14727,14758,14780,14812,14834,14866,14888,14912,14913,14936,14992,15015,15062,15063,15088,15112,15158,15204,15209,15235,15259,15296,15333,15338,15341,15343,15344,15387,15406,15427,15442,15469,15492,15496,15497,15519,15535,15555,15582,15642,15704,15719,15731,15745,15750,15754,15755,15776,15791,15818,15841,15845,15846,15866,15885,15886,15964,15991,16012,16037,16059,16086,16108,16135,16157,16177,16181,16182,16282,16309,16331,16359,16382,16412,16435,16465,16488,16510,16514,16515,16555,16582,16606,16656,16680,16721,16725,16726,16771,16798,16824,16844,16892,16940,16967,16987,17026,17065,17069,17072,17074,17075,17117,17142,17144,17145,17187,17205,17243,17266,17280,17283,17298,17300,17301,17390,17478,17519,17549,17596,17607,17621,17640,17654,17673,17688,17707,17745,17756,17771,17794,17810,17833,17871,17882,17897,17920,17936,17959,17997,18008,18023,18046,18062,18085,18110,18121,18146,18157,18174,18197,18214,18237,18240,18250],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/binary/varint.go","Base":18254,"Size":4036,"Lines":[0,55,109,159,160,175,176,238,258,332,360,435,473,542,615,690,742,745,761,830,909,988,1064,1143,1221,1301,1302,1311,1321,1327,1329,1330,1404,1412,1432,1452,1473,1475,1476,1557,1611,1655,1663,1680,1706,1716,1722,1725,1743,1757,1759,1760,1828,1896,1942,1945,1971,2020,2067,2070,2111,2125,2137,2162,2189,2233,2281,2315,2319,2335,2374,2409,2414,2448,2452,2479,2488,2491,2504,2506,2507,2587,2640,2682,2704,2716,2727,2730,2758,2760,2761,2828,2896,2961,2964,2990,3039,3086,3089,3128,3190,3211,3227,3236,3239,3252,3254,3255,3326,3327,3411,3463,3477,3489,3528,3553,3571,3588,3592,3608,3647,3670,3675,3707,3711,3738,3747,3750,3770,3772,3773,3854,3904,3970,3991,4007,4016,4019,4034],"Infos":null}]}
 