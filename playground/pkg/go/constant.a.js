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
GoLinkname�� Implementation�� 	Reference��   �����go/constantconstant	fmtgo/tokenmathmath/big	math/bitsstrconvstringssyncunicode/utf8�qi ��x_Value opTokengo/tokeny_xKindbbyteslittokzerosyprecExactStringStringimplementsValue
Precedence	IsLiteral
IsOperator	IsKeywordconstantBinaryOpBitLenBoolBoolValBytesCompareComplexDenomFloat
Float32Val
Float64ValImagIntInt64ValMakeMakeBoolMakeFloat64MakeFromBytesMakeFromLiteralMakeImag	MakeInt64
MakeString
MakeUint64MakeUnknownNumRealShiftSign	StringVal	ToComplexToFloatToInt	Uint64ValUnaryOpUnknownValtoken 	 F     
#   	  F    	  !	C BF    	  F    	T F     
#   	  C B
F    	  C BF    	 	  F    	 	  F    	  C BF    	 	  T  	  F  � 	  F  &  	  F   	  F  (� 	  F  . 2# 6 	  F    	  F   	  F  ; 	  F  
 	  F   	 F    	  F    	  F    
# ; 	  F    	 C BF    	 F    	  F    	  F    	  F    	
 	  F  
# =  ? 	  C B 	  F    	� 	  D  	 !  	B P  	 W  T �T  P 2#  	 g 
#  	 r 2#  	  | 2#  	  � 2#  	 	� '���%�)�6�A�R�V�a�e�s������!�����������������������������P������������������� �{ fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  token 	token = $packages["go/token"];
��    		$r = token.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  big	big = $packages["math/big"];
��    		$r = big.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Kind]	Kind = $pkg.Kind = $newType(4, $kindInt, "constant.Kind", true, "go/constant", true, null);
Kindgo/constant.Kind  Valuef	Value = $pkg.Value = $newType(8, $kindInterface, "constant.Value", true, "go/constant", true, null);
�l	Value.init([{prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}]);
Valuego/constant.Kindgo/constant.Value  
unknownVal��	unknownVal = $pkg.unknownVal = $newType(0, $kindStruct, "constant.unknownVal", true, "go/constant", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
�u	unknownVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
	unknownVal.init("", []);

unknownValgo/constant.Kindgo/constant.unknownVal  boolValh	boolVal = $pkg.boolVal = $newType(1, $kindBool, "constant.boolVal", true, "go/constant", false, null);
�r	boolVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
boolValgo/constant.Kindgo/constant.boolVal  	stringVal�t	stringVal = $pkg.stringVal = $newType(0, $kindStruct, "constant.stringVal", true, "go/constant", false, function(mu_, s_, l_, r_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new sync.Mutex.ptr(0, 0);
			this.s = "";
			this.l = ptrType.nil;
			this.r = ptrType.nil;
			return;
		}
		this.mu = mu_;
		this.s = s_;
		this.l = l_;
		this.r = r_;
	});
�C	ptrType.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "string", name: "string", pkg: "go/constant", typ: $funcType([], [$String], false)}, {prop: "appendReverse", name: "appendReverse", pkg: "go/constant", typ: $funcType([sliceType], [sliceType], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
�k	stringVal.init("go/constant", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "s", name: "s", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "l", name: "l", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: ptrType, tag: ""}]);
	stringValgo/constant.Kindgo/constant.ptrTypego/constant.sliceTypego/constant.stringVal
sync.Mutex  int64Vall	int64Val = $pkg.int64Val = $newType(8, $kindInt64, "constant.int64Val", true, "go/constant", false, null);
�s	int64Val.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
int64Valgo/constant.Kindgo/constant.int64Val  intVal��	intVal = $pkg.intVal = $newType(0, $kindStruct, "constant.intVal", true, "go/constant", false, function(val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.val = ptrType$2.nil;
			return;
		}
		this.val = val_;
	});
�q	intVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
v	intVal.init("go/constant", [{prop: "val", name: "val", embedded: false, exported: false, typ: ptrType$2, tag: ""}]);
intValgo/constant.Kindgo/constant.intValgo/constant.ptrType$2  ratVal��	ratVal = $pkg.ratVal = $newType(0, $kindStruct, "constant.ratVal", true, "go/constant", false, function(val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.val = ptrType$3.nil;
			return;
		}
		this.val = val_;
	});
�q	ratVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
v	ratVal.init("go/constant", [{prop: "val", name: "val", embedded: false, exported: false, typ: ptrType$3, tag: ""}]);
ratValgo/constant.Kindgo/constant.ptrType$3go/constant.ratVal  floatVal��	floatVal = $pkg.floatVal = $newType(0, $kindStruct, "constant.floatVal", true, "go/constant", false, function(val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.val = ptrType$1.nil;
			return;
		}
		this.val = val_;
	});
�s	floatVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
x	floatVal.init("go/constant", [{prop: "val", name: "val", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
floatValgo/constant.Kindgo/constant.floatValgo/constant.ptrType$1  
complexVal�	complexVal = $pkg.complexVal = $newType(0, $kindStruct, "constant.complexVal", true, "go/constant", false, function(re_, im_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.re = $ifaceNil;
			this.im = $ifaceNil;
			return;
		}
		this.re = re_;
		this.im = im_;
	});
�u	complexVal.methods = [{prop: "Kind", name: "Kind", pkg: "", typ: $funcType([], [Kind], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "ExactString", name: "ExactString", pkg: "", typ: $funcType([], [$String], false)}, {prop: "implementsValue", name: "implementsValue", pkg: "go/constant", typ: $funcType([], [], false)}];
��	complexVal.init("go/constant", [{prop: "re", name: "re", embedded: false, exported: false, typ: Value, tag: ""}, {prop: "im", name: "im", embedded: false, exported: false, typ: Value, tag: ""}]);

complexValgo/constant.Kindgo/constant.Valuego/constant.complexVal  ptrType 	ptrType = $ptrType(stringVal);
ptrTypego/constant.stringVal  	sliceType"	sliceType = $sliceType($String);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  	ptrType$1"	ptrType$1 = $ptrType(big.Float);
	ptrType$1math/big.Float  	ptrType$2 	ptrType$2 = $ptrType(big.Int);
	ptrType$2math/big.Int  	ptrType$3 	ptrType$3 = $ptrType(big.Rat);
	ptrType$3math/big.Rat  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  sliceType$3%	sliceType$3 = $sliceType(big.Word);
sliceType$3math/big.Word  	floatVal0	floatVal0  _r��  #�		_r = newFloat(); /* */ $s = 10; case 10: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		floatVal0 = new floatVal.ptr(_r);
go/constant.floatValgo/constant.floatVal0go/constant.newFloat (go/constant.unknownVal).Kind ��	unknownVal.ptr.prototype.Kind = function() {
  �		return 0;
    	};
	unknownVal.prototype.Kind = function() { return this.$val.Kind(); };

unknownValgo/constant.unknownVal (go/constant.boolVal).Kind ��	boolVal.prototype.Kind = function() {
  �		return 1;
    	};
	$ptrType(boolVal).prototype.Kind = function() { return new boolVal(this.$get()).Kind(); };
boolValgo/constant.boolVal (*go/constant.stringVal).Kind ��	stringVal.ptr.prototype.Kind = function() {
  �		return 2;
    	};
	stringVal.prototype.Kind = function() { return this.$val.Kind(); };
	stringValgo/constant.stringVal (go/constant.int64Val).Kind ��	int64Val.prototype.Kind = function() {
  		return 3;
    	};
	$ptrType(int64Val).prototype.Kind = function() { return this.$get().Kind(); };
int64Valgo/constant.int64Val (go/constant.intVal).Kind ��	intVal.ptr.prototype.Kind = function() {
  K		return 3;
    	};
	intVal.prototype.Kind = function() { return this.$val.Kind(); };
intValgo/constant.intVal (go/constant.ratVal).Kind ��	ratVal.ptr.prototype.Kind = function() {
  x		return 4;
    	};
	ratVal.prototype.Kind = function() { return this.$val.Kind(); };
ratValgo/constant.ratVal (go/constant.floatVal).Kind ��	floatVal.ptr.prototype.Kind = function() {
  �		return 4;
    	};
	floatVal.prototype.Kind = function() { return this.$val.Kind(); };
floatValgo/constant.floatVal (go/constant.complexVal).Kind ��	complexVal.ptr.prototype.Kind = function() {
  �		return 5;
    	};
	complexVal.prototype.Kind = function() { return this.$val.Kind(); };

complexValgo/constant.complexVal (go/constant.unknownVal).String ��	unknownVal.ptr.prototype.String = function() {
  		return "unknown";
    	};
	unknownVal.prototype.String = function() { return this.$val.String(); };

unknownValgo/constant.unknownVal (go/constant.boolVal).String ��	boolVal.prototype.String = function() {
		var x;
		x = this.$val;
  C		return strconv.FormatBool((x));
    	};
	$ptrType(boolVal).prototype.String = function() { return new boolVal(this.$get()).String(); };
boolValgo/constant.boolValstrconv.FormatBool (*go/constant.stringVal).String �Q	stringVal.ptr.prototype.String = function() {
		var _r$1, _r$2, _tuple, i, n, s, size, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; i = $f.i; n = $f.n; s = $f.s; size = $f.size; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  		_r$1 = x.string(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = strconv.Quote(_r$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		s = _r$2;
    		if (utf8.RuneCountInString(s) > 72) {
  			i = 0;
  #			n = 0;
			while (true) {
				if (!(n < 69)) { break; }
  B				_tuple = utf8.DecodeRuneInString($substring(s, i));
				size = _tuple[1];
  o				i = i + (size) >> 0;
  9				n = n + (1) >> 0;
    			}
  			s = $substring(s, 0, i) + "...";
    		}
  �		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringVal.ptr.prototype.String }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.i = i; $f.n = n; $f.s = s; $f.size = size; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringVal.prototype.String = function() { return this.$val.String(); };
	stringValgo/constant.stringValgo/constant.string~strconv.Quoteunicode/utf8.DecodeRuneInStringunicode/utf8.RuneCountInString (*go/constant.stringVal).string �K	stringVal.ptr.prototype.string = function() {
		var _r$1, _r$2, _r$3, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		$r = x.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  		/* */ if (!(x.l === ptrType.nil)) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!(x.l === ptrType.nil)) { */ case 2:
  			_r$1 = x.appendReverse(sliceType.nil); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = reverse(_r$1); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = strings.Join(_r$2, ""); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			x.s = _r$3;
  R			x.l = ptrType.nil;
  ^			x.r = ptrType.nil;
    		/* } */ case 3:
  l		s = x.s;
  v		$r = x.mu.Unlock(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringVal.ptr.prototype.string }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringVal.prototype.string = function() { return this.$val.string(); };
	stringValstring~go/constant.appendReverse~go/constant.ptrTypego/constant.reversego/constant.sliceTypego/constant.stringValstrings.Join go/constant.reversego/constantreverse reverse�	reverse = function(x) {
		var _tmp, _tmp$1, i, n, x, x$1, x$2;
  �		n = x.$length;
  �		i = 0;
		while (true) {
			if (!((i + i >> 0) < n)) { break; }
  			_tmp = (x$1 = (n - 1 >> 0) - i >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
			_tmp$1 = ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]);
			((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i] = _tmp);
			(x$2 = (n - 1 >> 0) - i >> 0, ((x$2 < 0 || x$2 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$2] = _tmp$1));
  			i = i + (1) >> 0;
    		}
  4		return x;
    	};
reversego/constant.reverse &(*go/constant.stringVal).appendReverse � 	stringVal.ptr.prototype.appendReverse = function(list) {
		var _r$1, l, list, s, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; l = $f.l; list = $f.list; s = $f.s; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		y = x;
  �		/* while (true) { */ case 1:
			/* if (!(!(y.r === ptrType.nil))) { break; } */ if(!(!(y.r === ptrType.nil))) { $s = 2; continue; }
  			$r = y.r.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  			_r$1 = y.r.appendReverse(list); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			list = _r$1;
  9			$r = y.r.mu.Unlock(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  L			l = y.l;
  W			/* */ if (!(y === x)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!(y === x)) { */ case 6:
  f				$r = y.mu.Unlock(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			/* } */ case 7:
  z			$r = l.mu.Lock(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			y = l;
    		$s = 1; continue;
		case 2:
  �		s = y.s;
  �		/* */ if (!(y === x)) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!(y === x)) { */ case 10:
  �			$r = y.mu.Unlock(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 11:
  �		$s = -1; return $append(list, s);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringVal.ptr.prototype.appendReverse }; } $f._r$1 = _r$1; $f.l = l; $f.list = list; $f.s = s; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringVal.prototype.appendReverse = function(list) { return this.$val.appendReverse(list); };
	stringValappendReverse~go/constant.appendReverse~go/constant.ptrTypego/constant.stringVal (go/constant.int64Val).String ��	int64Val.prototype.String = function() {
		var x;
		x = this;
  �		return strconv.FormatInt((new $Int64(x.$high, x.$low)), 10);
    	};
	$ptrType(int64Val).prototype.String = function() { return this.$get().String(); };
int64Valgo/constant.int64Valstrconv.FormatInt (go/constant.intVal).String ��	intVal.ptr.prototype.String = function() {
		var $24r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  G		_r$1 = x.val.String(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: intVal.ptr.prototype.String }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	intVal.prototype.String = function() { return this.$val.String(); };
intValgo/constant.intVal (go/constant.ratVal).String ��	ratVal.ptr.prototype.String = function() {
		var $24r, _r$1, _r$2, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r$1 = rtof($clone(x, ratVal)); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = $clone(_r$1, floatVal).String(); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ratVal.ptr.prototype.String }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ratVal.prototype.String = function() { return this.$val.String(); };
ratValgo/constant.floatValgo/constant.ratValgo/constant.rtof (go/constant.floatVal).String ��	floatVal.ptr.prototype.String = function() {
		var $24r, $24r$1, $24r$2, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _tuple, _tuple$1, am, d, e, exp, f, m, mant, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; am = $f.am; d = $f.d; e = $f.e; exp = $f.exp; f = $f.f; m = $f.m; mant = $f.mant; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		mant = [mant];
		x = this;
  		f = x.val;
  H		/* */ if (f.IsInf()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (f.IsInf()) { */ case 1:
  Y			_r$1 = f.String(); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �		_r$2 = f.Float64(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		x$1 = _tuple[0];
  �		_r$3 = f.Sign(); /* */ $s = 8; case 8: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		/* */ if ((_r$3 === 0) === ((x$1 === 0)) && !math.IsInf(x$1, 0)) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if ((_r$3 === 0) === ((x$1 === 0)) && !math.IsInf(x$1, 0)) { */ case 6:
  7			_r$4 = fmt.Sprintf("%.6g", new sliceType$1([new $Float64(x$1)])); /* */ $s = 9; case 9: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r$1 = _r$4;
			$s = 10; case 10: return $24r$1;
    		/* } */ case 7:
  �		mant[0] = new big.Float.ptr(0, 0, 0, 0, false, big.nat.nil, 0);
  		_r$5 = f.MantExp(mant[0]); /* */ $s = 11; case 11: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		exp = _r$5;
  �		_r$6 = mant[0].Float64(); /* */ $s = 12; case 12: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_tuple$1 = _r$6;
		m = _tuple$1[0];
  �		d = (exp) * 0.3010299956639812;
  6		e = (new $Int64(0, d));
  E		m = m * (math.Pow(10, d - ($flatten64(e))));
  �		am = math.Abs(m);
    		if (am < 0.9999995) {
  \			m = m * (10);
  f			e = (x$2 = new $Int64(0, 1), new $Int64(e.$high - x$2.$high, e.$low - x$2.$low));
    		} else if (am >= 10) {
  |			m = m / (10);
  �			e = (x$3 = new $Int64(0, 1), new $Int64(e.$high + x$3.$high, e.$low + x$3.$low));
    		}
  �		_r$7 = fmt.Sprintf("%.6ge%+d", new sliceType$1([new $Float64(m), e])); /* */ $s = 13; case 13: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		$24r$2 = _r$7;
		$s = 14; case 14: return $24r$2;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: floatVal.ptr.prototype.String }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.am = am; $f.d = d; $f.e = e; $f.exp = exp; $f.f = f; $f.m = m; $f.mant = mant; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	floatVal.prototype.String = function() { return this.$val.String(); };
floatValfmt.Sprintfgo/constant.floatValgo/constant.sliceType$1math.Abs
math.IsInfmath.Powmath/big.Floatmath/big.nat (go/constant.complexVal).String �	complexVal.ptr.prototype.String = function() {
		var $24r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r$1 = fmt.Sprintf("(%s + %si)", new sliceType$1([x.re, x.im])); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: complexVal.ptr.prototype.String }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	complexVal.prototype.String = function() { return this.$val.String(); };

complexValfmt.Sprintfgo/constant.complexValgo/constant.sliceType$1 $(go/constant.unknownVal).ExactString ��	unknownVal.ptr.prototype.ExactString = function() {
		var x;
		x = this;
  8		return $clone(x, unknownVal).String();
    	};
	unknownVal.prototype.ExactString = function() { return this.$val.ExactString(); };

unknownValgo/constant.unknownVal !(go/constant.boolVal).ExactString ��	boolVal.prototype.ExactString = function() {
		var x;
		x = this.$val;
  w		return new boolVal(x).String();
    	};
	$ptrType(boolVal).prototype.ExactString = function() { return new boolVal(this.$get()).ExactString(); };
boolValgo/constant.boolVal $(*go/constant.stringVal).ExactString ��	stringVal.ptr.prototype.ExactString = function() {
		var $24r, _r$1, _r$2, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r$1 = x.string(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = strconv.Quote(_r$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = _r$2;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: stringVal.ptr.prototype.ExactString }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	stringVal.prototype.ExactString = function() { return this.$val.ExactString(); };
	stringValgo/constant.stringValgo/constant.string~strconv.Quote "(go/constant.int64Val).ExactString ��	int64Val.prototype.ExactString = function() {
		var x;
		x = this;
  		return x.String();
    	};
	$ptrType(int64Val).prototype.ExactString = function() { return this.$get().ExactString(); };
int64Valgo/constant.int64Val  (go/constant.intVal).ExactString �	intVal.ptr.prototype.ExactString = function() {
		var $24r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  C		_r$1 = $clone(x, intVal).String(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: intVal.ptr.prototype.ExactString }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	intVal.prototype.ExactString = function() { return this.$val.ExactString(); };
intValgo/constant.intVal  (go/constant.ratVal).ExactString ��	ratVal.ptr.prototype.ExactString = function() {
		var $24r, $24r$1, _r$1, _r$2, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r$1 = $f._r$1; _r$2 = $f._r$2; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		r = x.val;
  �		/* */ if (r.IsInt()) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (r.IsInt()) { */ case 1:
  �			_r$1 = r.Num().String(); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  �		_r$2 = r.String(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = _r$2;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ratVal.ptr.prototype.ExactString }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	ratVal.prototype.ExactString = function() { return this.$val.ExactString(); };
ratValgo/constant.ratVal "(go/constant.floatVal).ExactString �	floatVal.ptr.prototype.ExactString = function() {
		var $24r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r$1 = x.val.Text(112, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: floatVal.ptr.prototype.ExactString }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	floatVal.prototype.ExactString = function() { return this.$val.ExactString(); };
floatValgo/constant.floatVal $(go/constant.complexVal).ExactString �-	complexVal.ptr.prototype.ExactString = function() {
		var $24r, _arg, _arg$1, _r$1, _r$2, _r$3, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _arg = $f._arg; _arg$1 = $f._arg$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  @		_r$1 = x.re.ExactString(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_arg = new $String(_r$1);
		_r$2 = x.im.ExactString(); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_arg$1 = new $String(_r$2);
		_r$3 = fmt.Sprintf("(%s + %si)", new sliceType$1([_arg, _arg$1])); /* */ $s = 3; case 3: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$24r = _r$3;
		$s = 4; case 4: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: complexVal.ptr.prototype.ExactString }; } $f.$24r = $24r; $f._arg = _arg; $f._arg$1 = _arg$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	complexVal.prototype.ExactString = function() { return this.$val.ExactString(); };

complexValfmt.Sprintfgo/constant.complexValgo/constant.sliceType$1 ((go/constant.unknownVal).implementsValue ��	unknownVal.ptr.prototype.implementsValue = function() {
    	};
	unknownVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };

unknownValimplementsValue~go/constant.unknownVal %(go/constant.boolVal).implementsValue ��	boolVal.prototype.implementsValue = function() {
    	};
	$ptrType(boolVal).prototype.implementsValue = function() { return new boolVal(this.$get()).implementsValue(); };
boolValimplementsValue~go/constant.boolVal ((*go/constant.stringVal).implementsValue ��	stringVal.ptr.prototype.implementsValue = function() {
    	};
	stringVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };
	stringValimplementsValue~go/constant.stringVal &(go/constant.int64Val).implementsValue ��	int64Val.prototype.implementsValue = function() {
    	};
	$ptrType(int64Val).prototype.implementsValue = function() { return this.$get().implementsValue(); };
int64ValimplementsValue~go/constant.int64Val $(go/constant.ratVal).implementsValue ��	ratVal.ptr.prototype.implementsValue = function() {
    	};
	ratVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };
ratValimplementsValue~go/constant.ratVal $(go/constant.intVal).implementsValue ��	intVal.ptr.prototype.implementsValue = function() {
    	};
	intVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };
intValimplementsValue~go/constant.intVal &(go/constant.floatVal).implementsValue ��	floatVal.ptr.prototype.implementsValue = function() {
    	};
	floatVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };
floatValimplementsValue~go/constant.floatVal ((go/constant.complexVal).implementsValue ��	complexVal.ptr.prototype.implementsValue = function() {
    	};
	complexVal.prototype.implementsValue = function() { return this.$val.implementsValue(); };

complexValimplementsValue~go/constant.complexVal go/constant.newIntgo/constantnewInt newIntS	newInt = function() {
  �		return new big.Int.ptr(false, big.nat.nil);
    	};
newIntgo/constant.newIntmath/big.Intmath/big.nat go/constant.newRatgo/constantnewRat newRat��	newRat = function() {
   		return new big.Rat.ptr(new big.Int.ptr(false, big.nat.nil), new big.Int.ptr(false, big.nat.nil));
    	};
newRatgo/constant.newRatmath/big.Intmath/big.Ratmath/big.nat go/constant.newFloatgo/constantnewFloat newFloat��	newFloat = function() {
		var $24r, _r$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
   H		_r$1 = new big.Float.ptr(0, 0, 0, 0, false, big.nat.nil, 0).SetPrec(512); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: newFloat }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.$s = $s; $f.$r = $r; return $f;
	};
newFloatgo/constant.newFloatmath/big.Floatmath/big.nat go/constant.i64toigo/constanti64toi i64toiz	i64toi = function(x) {
		var x;
   �		return new intVal.ptr(newInt().SetInt64((new $Int64(x.$high, x.$low))));
    	};
i64toigo/constant.i64toigo/constant.intValgo/constant.newInt go/constant.i64torgo/constanti64tor i64torz	i64tor = function(x) {
		var x;
   �		return new ratVal.ptr(newRat().SetInt64((new $Int64(x.$high, x.$low))));
    	};
i64torgo/constant.i64torgo/constant.newRatgo/constant.ratVal go/constant.i64tofgo/constanti64tof i64tof�H	i64tof = function(x) {
		var $24r, _r$1, _r$2, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  !2		_r$1 = newFloat(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = _r$1.SetInt64((new $Int64(x.$high, x.$low))); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = new floatVal.ptr(_r$2);
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: i64tof }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
i64tofgo/constant.floatValgo/constant.i64tofgo/constant.newFloat go/constant.itorgo/constantitor itor^	itor = function(x) {
		var x;
  !�		return new ratVal.ptr(newRat().SetInt(x.val));
    	};
itorgo/constant.itorgo/constant.newRatgo/constant.ratVal go/constant.itofgo/constantitof itof�*	itof = function(x) {
		var $24r, _r$1, _r$2, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  !�		_r$1 = newFloat(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = _r$1.SetInt(x.val); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = new floatVal.ptr(_r$2);
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: itof }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
itofgo/constant.floatValgo/constant.itofgo/constant.newFloat go/constant.rtofgo/constantrtof rtof�*	rtof = function(x) {
		var $24r, _r$1, _r$2, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  " 		_r$1 = newFloat(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = _r$1.SetRat(x.val); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = new floatVal.ptr(_r$2);
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: rtof }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
rtofgo/constant.floatValgo/constant.newFloatgo/constant.rtof go/constant.vtocgo/constantvtoc vtoca	vtoc = function(x) {
		var x;
  "o		return new complexVal.ptr(x, new int64Val(0, 0));
    	};
vtocgo/constant.complexValgo/constant.int64Valgo/constant.vtoc go/constant.makeIntgo/constantmakeInt makeInt��	makeInt = function(x) {
		var x, x$1, x$2;
    		if (x.IsInt64()) {
  "�			return ((x$1 = x.Int64(), new int64Val(x$1.$high, x$1.$low)));
    		}
  "�		return (x$2 = new intVal.ptr(x), new x$2.constructor.elem(x$2));
    	};
makeIntgo/constant.int64Valgo/constant.intValgo/constant.makeInt go/constant.makeRatgo/constantmakeRat makeRat�q	makeRat = function(x) {
		var $24r, _r$1, _r$2, a, b, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; a = $f.a; b = $f.b; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  #		a = x.Num();
  #,		b = x.Denom();
    		if (smallInt(a) && smallInt(b)) {
  #y			$s = -1; return (x$1 = new ratVal.ptr(x), new x$1.constructor.elem(x$1));
    		}
  #�		_r$1 = newFloat(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = _r$1.SetRat(x); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r = (x$2 = new floatVal.ptr(_r$2), new x$2.constructor.elem(x$2));
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeRat }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.a = a; $f.b = b; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
makeRatgo/constant.floatValgo/constant.makeRatgo/constant.newFloatgo/constant.ratValgo/constant.smallInt go/constant.makeFloatgo/constant	makeFloat 	makeFloat��	makeFloat = function(x) {
		var _r$1, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  $>		_r$1 = x.Sign(); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (_r$1 === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_r$1 === 0) { */ case 1:
  $S			$s = -1; return new floatVal0.constructor.elem(floatVal0);
    		/* } */ case 2:
    		if (x.IsInf()) {
  $y			$s = -1; return (x$1 = new unknownVal.ptr(), new x$1.constructor.elem(x$1));
    		}
  %$		$s = -1; return (x$2 = new floatVal.ptr(x), new x$2.constructor.elem(x$2));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeFloat }; } $f._r$1 = _r$1; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	makeFloatgo/constant.floatValgo/constant.floatVal0go/constant.makeFloatgo/constant.unknownVal go/constant.makeComplexgo/constantmakeComplex makeComplex��	makeComplex = function(re, im) {
		var _r$1, _r$2, _v, im, re, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _v = $f._v; im = $f.im; re = $f.re; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  %b		_r$1 = re.Kind(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		if (_r$1 === 0) { _v = true; $s = 3; continue s; }
		_r$2 = im.Kind(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_v = _r$2 === 0; case 3:
		/* */ if (_v) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (_v) { */ case 1:
  %�			$s = -1; return (x = new unknownVal.ptr(), new x.constructor.elem(x));
    		/* } */ case 2:
  %�		$s = -1; return (x$1 = new complexVal.ptr(re, im), new x$1.constructor.elem(x$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeComplex }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._v = _v; $f.im = im; $f.re = re; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
makeComplexgo/constant.complexValgo/constant.makeComplexgo/constant.unknownVal  go/constant.makeFloatFromLiteralgo/constantmakeFloatFromLiteral makeFloatFromLiteral�	�	makeFloatFromLiteral = function(lit) {
		var $24r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tuple, _tuple$1, f, lit, ok, ok$1, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; f = $f.f; lit = $f.lit; ok = $f.ok; ok$1 = $f.ok$1; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  %�		_r$1 = newFloat(); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = _r$1.SetString(lit); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		f = _tuple[0];
		ok = _tuple[1];
  %�		/* */ if (ok) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if (ok) { */ case 3:
  &(			_r$3 = smallFloat(f); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			/* */ if (_r$3) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_r$3) { */ case 5:
  &X				_r$4 = f.Sign(); /* */ $s = 10; case 10: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				/* */ if (_r$4 === 0) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if (_r$4 === 0) { */ case 8:
  'w					lit = "0";
    				/* } */ case 9:
  '�				_r$5 = newRat().SetString(lit); /* */ $s = 11; case 11: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_tuple$1 = _r$5;
				r = _tuple$1[0];
				ok$1 = _tuple$1[1];
    				if (ok$1) {
  '�					$s = -1; return (x = new ratVal.ptr(r), new x.constructor.elem(x));
    				}
    			/* } */ case 6:
  '�			_r$6 = makeFloat(f); /* */ $s = 12; case 12: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			$24r = _r$6;
			$s = 13; case 13: return $24r;
    		/* } */ case 4:
  (		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: makeFloatFromLiteral }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.f = f; $f.lit = lit; $f.ok = ok; $f.ok$1 = ok$1; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
makeFloatFromLiteralgo/constant.makeFloat go/constant.makeFloatFromLiteralgo/constant.newFloatgo/constant.newRatgo/constant.ratValgo/constant.smallFloat go/constant.smallIntgo/constantsmallInt smallIntM	smallInt = function(x) {
		var x;
  )		return x.BitLen() < 4096;
    	};
smallIntgo/constant.smallInt go/constant.smallFloat64go/constantsmallFloat64 smallFloat64��	smallFloat64 = function(x) {
		var _tuple, e, x;
    		if (math.IsInf(x, 0)) {
  )�			return false;
    		}
  )�		_tuple = math.Frexp(x);
		e = _tuple[1];
  *		return -4096 < e && e < 4096;
    	};
smallFloat64go/constant.smallFloat64
math.Frexp
math.IsInf go/constant.smallFloatgo/constant
smallFloat 
smallFloat��	smallFloat = function(x) {
		var _r$1, e, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; e = $f.e; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (x.IsInf()) {
  *�			$s = -1; return false;
    		}
  *�		_r$1 = x.MantExp(ptrType$1.nil); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		e = _r$1;
  *�		$s = -1; return -4096 < e && e < 4096;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: smallFloat }; } $f._r$1 = _r$1; $f.e = e; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};

smallFloatgo/constant.ptrType$1go/constant.smallFloatmath/big.Float go/constant.MakeUnknowngo/constantMakeUnknown MakeUnknown��	MakeUnknown = function() {
		var x;
  +�		return (x = new unknownVal.ptr(), new x.constructor.elem(x));
    	};
	$pkg.MakeUnknown = MakeUnknown;
MakeUnknowngo/constant.MakeUnknowngo/constant.unknownVal go/constant.MakeBoolgo/constantMakeBool MakeBoolg	MakeBool = function(b) {
		var b;
  ,		return new boolVal((b));
    	};
	$pkg.MakeBool = MakeBool;
MakeBoolgo/constant.MakeBoolgo/constant.boolVal go/constant.MakeStringgo/constant
MakeString 
MakeString��	MakeString = function(s) {
		var s;
  ,�		return new stringVal.ptr(new sync.Mutex.ptr(0, 0), s, ptrType.nil, ptrType.nil);
    	};
	$pkg.MakeString = MakeString;

MakeStringgo/constant.MakeStringgo/constant.ptrTypego/constant.stringVal
sync.Mutex go/constant.MakeInt64go/constant	MakeInt64 	MakeInt64y	MakeInt64 = function(x) {
		var x;
  ,�		return (new int64Val(x.$high, x.$low));
    	};
	$pkg.MakeInt64 = MakeInt64;
	MakeInt64go/constant.MakeInt64go/constant.int64Val go/constant.MakeUint64go/constant
MakeUint64 
MakeUint64�f	MakeUint64 = function(x) {
		var x, x$1, x$2;
    		if ((x.$high < 2147483648 || (x.$high === 2147483648 && x.$low < 0))) {
  -\			return ((x$1 = (new $Int64(x.$high, x.$low)), new int64Val(x$1.$high, x$1.$low)));
    		}
  -z		return (x$2 = new intVal.ptr(newInt().SetUint64(x)), new x$2.constructor.elem(x$2));
    	};
	$pkg.MakeUint64 = MakeUint64;

MakeUint64go/constant.MakeUint64go/constant.int64Valgo/constant.intValgo/constant.newInt go/constant.MakeFloat64go/constantMakeFloat64 MakeFloat64�i	MakeFloat64 = function(x) {
		var $24r, $24r$1, _r$1, _r$2, _r$3, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (math.IsInf(x, 0) || math.IsNaN(x)) {
  .s			$s = -1; return (x$1 = new unknownVal.ptr(), new x$1.constructor.elem(x$1));
    		}
  .�		/* */ if (smallFloat64(x)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (smallFloat64(x)) { */ case 1:
  .�			_r$1 = newRat().SetFloat64(x + 0); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = (x$2 = new ratVal.ptr(_r$1), new x$2.constructor.elem(x$2));
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  .�		_r$2 = newFloat(); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = _r$2.SetFloat64(x + 0); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$24r$1 = (x$3 = new floatVal.ptr(_r$3), new x$3.constructor.elem(x$3));
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeFloat64 }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeFloat64 = MakeFloat64;
MakeFloat64	go/constant.MakeFloat64go/constant.floatValgo/constant.newFloatgo/constant.newRatgo/constant.ratValgo/constant.smallFloat64go/constant.unknownVal
math.IsInf
math.IsNaN go/constant.MakeFromLiteralgo/constantMakeFromLiteral MakeFromLiteral��	MakeFromLiteral = function(lit, tok, zero) {
		var $24r, _1, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, _tuple$2, _tuple$3, code, err, err$1, err$2, im, lit, n, n$1, ok, s, tok, x, x$1, x$2, x$3, x$4, zero, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; code = $f.code; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; im = $f.im; lit = $f.lit; n = $f.n; n$1 = $f.n$1; ok = $f.ok; s = $f.s; tok = $f.tok; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; zero = $f.zero; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (!((zero === 0))) {
  0�			$panic(new $String("MakeFromLiteral called with non-zero last argument"));
    		}
    			_1 = tok;
  1			/* */ if (_1 === (5)) { $s = 2; continue; }
			/* */ if (_1 === (6)) { $s = 3; continue; }
			/* */ if (_1 === (7)) { $s = 4; continue; }
			/* */ if (_1 === (8)) { $s = 5; continue; }
			/* */ if (_1 === (9)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (_1 === (5)) { */ case 2:
  1"				_tuple = strconv.ParseInt(lit, 0, 64);
				x = _tuple[0];
				err = _tuple[1];
    				if ($interfaceIsEqual(err, $ifaceNil)) {
  1Z					$s = -1; return (new int64Val(x.$high, x.$low));
    				}
  1v				_r$1 = newInt().SetString(lit, 0); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				x$1 = _tuple$1[0];
				ok = _tuple$1[1];
    				if (ok) {
  1�					$s = -1; return (x$2 = new intVal.ptr(x$1), new x$2.constructor.elem(x$2));
    				}
    				$s = 8; continue;
    			/* } else if (_1 === (6)) { */ case 3:
  1�				_r$2 = makeFloatFromLiteral(lit); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				x$3 = _r$2;
    				if (!($interfaceIsEqual(x$3, $ifaceNil))) {
  1�					$s = -1; return x$3;
    				}
    				$s = 8; continue;
    			/* } else if (_1 === (7)) { */ case 4:
  2$				n = lit.length;
  2!				/* */ if (n > 0 && (lit.charCodeAt((n - 1 >> 0)) === 105)) { $s = 11; continue; }
				/* */ $s = 12; continue;
    				/* if (n > 0 && (lit.charCodeAt((n - 1 >> 0)) === 105)) { */ case 11:
  2T					_r$3 = makeFloatFromLiteral($substring(lit, 0, (n - 1 >> 0))); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					im = _r$3;
  2Q					/* */ if (!($interfaceIsEqual(im, $ifaceNil))) { $s = 14; continue; }
					/* */ $s = 15; continue;
    					/* if (!($interfaceIsEqual(im, $ifaceNil))) { */ case 14:
  2�						_r$4 = makeComplex(new int64Val(0, 0), im); /* */ $s = 16; case 16: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
						$24r = _r$4;
						$s = 17; case 17: return $24r;
    					/* } */ case 15:
    				/* } */ case 12:
    				$s = 8; continue;
    			/* } else if (_1 === (8)) { */ case 5:
  2�				n$1 = lit.length;
    				if (n$1 >= 2) {
  2�					_tuple$2 = strconv.UnquoteChar($substring(lit, 1, (n$1 - 1 >> 0)), 39);
					code = _tuple$2[0];
					err$1 = _tuple$2[3];
    					if ($interfaceIsEqual(err$1, $ifaceNil)) {
  39						$s = -1; return MakeInt64((new $Int64(0, code)));
    					}
    				}
    				$s = 8; continue;
    			/* } else if (_1 === (9)) { */ case 6:
  3z				_tuple$3 = strconv.Unquote(lit);
				s = _tuple$3[0];
				err$2 = _tuple$3[1];
    				if ($interfaceIsEqual(err$2, $ifaceNil)) {
  3�					$s = -1; return MakeString(s);
    				}
    				$s = 8; continue;
			/* } else { */ case 7:
  3�				_r$5 = fmt.Sprintf("%v is not a valid token", new sliceType$1([new token.Token(tok)])); /* */ $s = 18; case 18: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				$panic(new $String(_r$5));
    			/* } */ case 8:
    		case 1:
  4		$s = -1; return (x$4 = new unknownVal.ptr(), new x$4.constructor.elem(x$4));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeFromLiteral }; } $f.$24r = $24r; $f._1 = _1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.code = code; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.im = im; $f.lit = lit; $f.n = n; $f.n$1 = n$1; $f.ok = ok; $f.s = s; $f.tok = tok; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.zero = zero; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeFromLiteral = MakeFromLiteral;
MakeFromLiteralfmt.Sprintfgo/constant.MakeFromLiteralgo/constant.MakeInt64go/constant.MakeStringgo/constant.int64Valgo/constant.intValgo/constant.makeComplex go/constant.makeFloatFromLiteralgo/constant.newIntgo/constant.sliceType$1go/constant.unknownValgo/token.Tokenstrconv.ParseIntstrconv.Unquotestrconv.UnquoteChar go/constant.BoolValgo/constantBoolVal BoolVal�+	BoolVal = function(x) {
		var _r$1, _ref, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  5�		_ref = x;
		/* */ if ($assertType(_ref, boolVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, boolVal, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  5�			$s = -1; return (x$1);
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, unknownVal);
  5�			$s = -1; return false;
    		/* } else { */ case 3:
    			x$3 = _ref;
  6 			_r$1 = fmt.Sprintf("%v not a Bool", new sliceType$1([x$3])); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 4:
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: BoolVal }; } $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.BoolVal = BoolVal;
BoolValfmt.Sprintfgo/constant.BoolValgo/constant.boolValgo/constant.sliceType$1go/constant.unknownVal go/constant.StringValgo/constant	StringVal 	StringVal�	StringVal = function(x) {
		var $24r, _r$1, _r$2, _ref, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  6�		_ref = x;
		/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, ptrType, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  6�			_r$1 = x$1.string(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 6; case 6: return $24r;
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, unknownVal);
  7			$s = -1; return "";
    		/* } else { */ case 3:
    			x$3 = _ref;
  71			_r$2 = fmt.Sprintf("%v not a String", new sliceType$1([x$3])); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$panic(new $String(_r$2));
    		/* } */ case 4:
    		$s = -1; return "";
		/* */ } return; } if ($f === undefined) { $f = { $blk: StringVal }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.StringVal = StringVal;
	StringValfmt.Sprintfgo/constant.StringValgo/constant.ptrTypego/constant.sliceType$1go/constant.string~go/constant.unknownVal go/constant.Int64Valgo/constantInt64Val Int64Val��	Int64Val = function(x) {
		var _r$1, _ref, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  8Z		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  8�			$s = -1; return [(new $Int64(x$1.$high, x$1.$low)), true];
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  8�			$s = -1; return [x$2.val.Int64(), false];
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, unknownVal);
  8�			$s = -1; return [new $Int64(0, 0), false];
    		/* } else { */ case 4:
    			x$4 = _ref;
  9			_r$1 = fmt.Sprintf("%v not an Int", new sliceType$1([x$4])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
    		$s = -1; return [new $Int64(0, 0), false];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Int64Val }; } $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Int64Val = Int64Val;
Int64Valfmt.Sprintfgo/constant.Int64Valgo/constant.int64Valgo/constant.intValgo/constant.sliceType$1go/constant.unknownVal go/constant.Uint64Valgo/constant	Uint64Val 	Uint64Val��	Uint64Val = function(x) {
		var _r$1, _ref, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  :F		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  :o			$s = -1; return [(new $Uint64(x$1.$high, x$1.$low)), (x$1.$high > 0 || (x$1.$high === 0 && x$1.$low >= 0))];
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  :�			$s = -1; return [x$2.val.Uint64(), x$2.val.IsUint64()];
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, unknownVal);
  :�			$s = -1; return [new $Uint64(0, 0), false];
    		/* } else { */ case 4:
    			x$4 = _ref;
  :�			_r$1 = fmt.Sprintf("%v not an Int", new sliceType$1([x$4])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
    		$s = -1; return [new $Uint64(0, 0), false];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Uint64Val }; } $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Uint64Val = Uint64Val;
	Uint64Valfmt.Sprintfgo/constant.Uint64Valgo/constant.int64Valgo/constant.intValgo/constant.sliceType$1go/constant.unknownVal go/constant.Float32Valgo/constant
Float32Val 
Float32Val�3	Float32Val = function(x) {
		var $24r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _ref, _tuple, _tuple$1, acc, acc$1, f, f$1, f$2, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; acc = $f.acc; acc$1 = $f.acc$1; f = $f.f; f$1 = $f.f$1; f$2 = $f.f$2; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ;�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  ;�			f = ($flatten64(x$1));
  ;�			$s = -1; return [f, (x$7 = (new int64Val(0, f)), (x$7.$high === x$1.$high && x$7.$low === x$1.$low))];
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  ;�			_r$1 = newFloat(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = _r$1.SetInt(x$2.val); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = _r$2.Float32(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple = _r$3;
			f$1 = _tuple[0];
			acc = _tuple[1];
  <#			$s = -1; return [f$1, acc === 0];
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, ratVal);
  <N			_r$4 = x$3.val.Float32(); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r = _r$4;
			$s = 12; case 12: return $24r;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, floatVal);
  <w			_r$5 = x$4.val.Float32(); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_tuple$1 = _r$5;
			f$2 = _tuple$1[0];
			acc$1 = _tuple$1[1];
  <�			$s = -1; return [f$2, acc$1 === 0];
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 5:
    			x$5 = $clone(_ref.$val, unknownVal);
  <�			$s = -1; return [0, false];
    		/* } else { */ case 6:
    			x$6 = _ref;
  <�			_r$6 = fmt.Sprintf("%v not a Float", new sliceType$1([x$6])); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			$panic(new $String(_r$6));
    		/* } */ case 7:
    		$s = -1; return [0, false];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Float32Val }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.acc = acc; $f.acc$1 = acc$1; $f.f = f; $f.f$1 = f$1; $f.f$2 = f$2; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Float32Val = Float32Val;

Float32Val	fmt.Sprintfgo/constant.Float32Valgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.newFloatgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.Float64Valgo/constant
Float64Val 
Float64Val�Q	Float64Val = function(x) {
		var $24r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _ref, _tuple, _tuple$1, acc, acc$1, f, f$1, f$2, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; acc = $f.acc; acc$1 = $f.acc$1; f = $f.f; f$1 = $f.f$1; f$2 = $f.f$2; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  >�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  >�			f = ($flatten64((new $Int64(x$1.$high, x$1.$low))));
  >�			$s = -1; return [f, (x$7 = (new int64Val(0, f)), (x$7.$high === x$1.$high && x$7.$low === x$1.$low))];
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  ?			_r$1 = newFloat(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = _r$1.SetInt(x$2.val); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = _r$2.Float64(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple = _r$3;
			f$1 = _tuple[0];
			acc = _tuple[1];
  ?4			$s = -1; return [f$1, acc === 0];
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, ratVal);
  ?_			_r$4 = x$3.val.Float64(); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r = _r$4;
			$s = 12; case 12: return $24r;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, floatVal);
  ?�			_r$5 = x$4.val.Float64(); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_tuple$1 = _r$5;
			f$2 = _tuple$1[0];
			acc$1 = _tuple$1[1];
  ?�			$s = -1; return [f$2, acc$1 === 0];
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 5:
    			x$5 = $clone(_ref.$val, unknownVal);
  ?�			$s = -1; return [0, false];
    		/* } else { */ case 6:
    			x$6 = _ref;
  ?�			_r$6 = fmt.Sprintf("%v not a Float", new sliceType$1([x$6])); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			$panic(new $String(_r$6));
    		/* } */ case 7:
    		$s = -1; return [0, false];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Float64Val }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.acc = acc; $f.acc$1 = acc$1; $f.f = f; $f.f$1 = f$1; $f.f$2 = f$2; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Float64Val = Float64Val;

Float64Val	fmt.Sprintfgo/constant.Float64Valgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.newFloatgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.Valgo/constantVal Val�	#	Val = function(x) {
		var $24r, _r$1, _ref, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  B		_ref = x;
		/* */ if ($assertType(_ref, boolVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if ($assertType(_ref, boolVal, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  BG			$s = -1; return new $Bool((x$1));
    		/* } else if ($assertType(_ref, ptrType, true)[1]) { */ case 2:
    			x$2 = _ref.$val;
  Bj			_r$1 = x$2.string(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = new $String(_r$1);
			$s = 10; case 10: return $24r;
    		/* } else if ($assertType(_ref, int64Val, true)[1]) { */ case 3:
    			x$3 = _ref.$val;
  B�			$s = -1; return (new $Int64(x$3.$high, x$3.$low));
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, intVal);
  B�			$s = -1; return x$4.val;
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 5:
    			x$5 = $clone(_ref.$val, ratVal);
  B�			$s = -1; return x$5.val;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 6:
    			x$6 = $clone(_ref.$val, floatVal);
  B�			$s = -1; return x$6.val;
    		/* } else { */ case 7:
    			x$7 = _ref;
  C			$s = -1; return $ifaceNil;
    		/* } */ case 8:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Val }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Val = Val;
Valgo/constant.Valgo/constant.boolValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ptrTypego/constant.ratValgo/constant.string~ go/constant.Makego/constantMake Make�
�	Make = function(x) {
		var $24r, $24r$1, _r$1, _r$2, _ref, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Dl		_ref = x;
		/* */ if ($assertType(_ref, $Bool, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, $String, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, $Int64, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, ptrType$2, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, ptrType$3, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, ptrType$1, true)[1]) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if ($assertType(_ref, $Bool, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  D�			$s = -1; return new boolVal((x$1));
    		/* } else if ($assertType(_ref, $String, true)[1]) { */ case 2:
    			x$2 = _ref.$val;
  D�			$s = -1; return new stringVal.ptr(new sync.Mutex.ptr(0, 0), x$2, ptrType.nil, ptrType.nil);
    		/* } else if ($assertType(_ref, $Int64, true)[1]) { */ case 3:
    			x$3 = _ref.$val;
  D�			$s = -1; return (new int64Val(x$3.$high, x$3.$low));
    		/* } else if ($assertType(_ref, ptrType$2, true)[1]) { */ case 4:
    			x$4 = _ref.$val;
  D�			$s = -1; return makeInt(x$4);
    		/* } else if ($assertType(_ref, ptrType$3, true)[1]) { */ case 5:
    			x$5 = _ref.$val;
  E#			_r$1 = makeRat(x$5); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 10; case 10: return $24r;
    		/* } else if ($assertType(_ref, ptrType$1, true)[1]) { */ case 6:
    			x$6 = _ref.$val;
  EI			_r$2 = makeFloat(x$6); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r$1 = _r$2;
			$s = 12; case 12: return $24r$1;
    		/* } else { */ case 7:
    			x$7 = _ref;
  Ei			$s = -1; return (x$8 = new unknownVal.ptr(), new x$8.constructor.elem(x$8));
    		/* } */ case 8:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Make }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Make = Make;
Makego/constant.Makego/constant.boolValgo/constant.int64Valgo/constant.makeFloatgo/constant.makeIntgo/constant.makeRatgo/constant.ptrTypego/constant.ptrType$1go/constant.ptrType$2go/constant.ptrType$3go/constant.stringValgo/constant.unknownValmath/big.Intmath/big.Rat
sync.Mutex go/constant.BitLengo/constantBitLen BitLen�P	BitLen = function(x) {
		var _r$1, _ref, u, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; u = $f.u; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  FQ		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  Fz			u = (new $Uint64(x$1.$high, x$1.$low));
    			if ((x$1.$high < 0 || (x$1.$high === 0 && x$1.$low < 0))) {
  F�				u = ((x$5 = new int64Val(-x$1.$high, -x$1.$low), new $Uint64(x$5.$high, x$5.$low)));
    			}
  F�			$s = -1; return 64 - bits.LeadingZeros64(u) >> 0;
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  F�			$s = -1; return x$2.val.BitLen();
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, unknownVal);
  G			$s = -1; return 0;
    		/* } else { */ case 4:
    			x$4 = _ref;
  G 			_r$1 = fmt.Sprintf("%v not an Int", new sliceType$1([x$4])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
    		$s = -1; return 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: BitLen }; } $f._r$1 = _r$1; $f._ref = _ref; $f.u = u; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.BitLen = BitLen;
BitLenfmt.Sprintfgo/constant.BitLengo/constant.int64Valgo/constant.intValgo/constant.sliceType$1go/constant.unknownValmath/bits.LeadingZeros64 go/constant.Signgo/constantSign Sign��	Sign = function(x) {
		var $24r, $24r$1, _r$1, _r$2, _r$3, _r$4, _ref, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  H<		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
    			if ((x$1.$high < 0 || (x$1.$high === 0 && x$1.$low < 0))) {
  H				$s = -1; return -1;
    			} else if ((x$1.$high > 0 || (x$1.$high === 0 && x$1.$low > 0))) {
  H�				$s = -1; return 1;
    			}
  H�			$s = -1; return 0;
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  H�			$s = -1; return x$2.val.Sign();
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, ratVal);
  H�			$s = -1; return x$3.val.Sign();
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, floatVal);
  I			_r$1 = x$4.val.Sign(); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 10; case 10: return $24r;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 5:
    			x$5 = $clone(_ref.$val, complexVal);
  I4			_r$2 = Sign(x$5.re); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$3 = Sign(x$5.im); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$24r$1 = _r$2 | _r$3;
			$s = 13; case 13: return $24r$1;
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 6:
    			x$6 = $clone(_ref.$val, unknownVal);
  Ig			$s = -1; return 1;
    		/* } else { */ case 7:
    			x$7 = _ref;
  I�			_r$4 = fmt.Sprintf("%v not numeric", new sliceType$1([x$7])); /* */ $s = 14; case 14: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$panic(new $String(_r$4));
    		/* } */ case 8:
    		$s = -1; return 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Sign }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Sign = Sign;
Sign	fmt.Sprintfgo/constant.Signgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.Bytesgo/constantBytes Bytes�
g	Bytes = function(x) {
		var _i, _r$1, _ref, _ref$1, bytes, i, j, t, w, words, x, x$1, x$2, x$3, x$4, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; bytes = $f.bytes; i = $f.i; j = $f.j; t = $f.t; w = $f.w; words = $f.words; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  K�		t = new intVal.ptr(ptrType$2.nil);
  K�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  K�			intVal.copy(t, i64toi(x$1));
    			$s = 4; continue;
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
  K�			intVal.copy(t, x$2);
    			$s = 4; continue;
		/* } else { */ case 3:
    			x$3 = _ref;
  K�			_r$1 = fmt.Sprintf("%v not an Int", new sliceType$1([x$3])); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 4:
  L		words = t.val.Bits();
  L&		bytes = $makeSlice(sliceType$2, ($imul(words.$length, 4)));
  LS		i = 0;
  L[		_ref$1 = words;
		_i = 0;
		while (true) {
			if (!(_i < _ref$1.$length)) { break; }
			w = ((_i < 0 || _i >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i]);
  L{			j = 0;
			while (true) {
				if (!(j < 4)) { break; }
  L�				((i < 0 || i >= bytes.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes.$array[bytes.$offset + i] = ((w << 24 >>> 24)));
  L�				w = (y = (8), y < 32 ? (w >>> y) : 0) >>> 0;
  L�				i = i + (1) >> 0;
  L�				j = j + (1) >> 0;
    			}
    			_i++;
		}
  L�		while (true) {
			if (!(i > 0 && ((x$4 = i - 1 >> 0, ((x$4 < 0 || x$4 >= bytes.$length) ? ($throwRuntimeError("index out of range"), undefined) : bytes.$array[bytes.$offset + x$4])) === 0))) { break; }
  L�			i = i - (1) >> 0;
    		}
  M		$s = -1; return $subslice(bytes, 0, i);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Bytes }; } $f._i = _i; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f.bytes = bytes; $f.i = i; $f.j = j; $f.t = t; $f.w = w; $f.words = words; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Bytes = Bytes;
Bytesfmt.Sprintfgo/constant.Bytesgo/constant.i64toigo/constant.int64Valgo/constant.intValgo/constant.ptrType$2go/constant.sliceType$1go/constant.sliceType$2 go/constant.MakeFromBytesgo/constantMakeFromBytes MakeFromBytes��	MakeFromBytes = function(bytes) {
		var _i, _q, _ref, b, bytes, i, s, w, words, x, y;
  M�		words = $makeSlice(sliceType$3, (_q = ((bytes.$length + 3 >> 0)) / 4, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
  N		i = 0;
  N#		w = 0;
  N3		s = 0;
  N;		_ref = bytes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  NW			w = (w | (((y = s, y < 32 ? (((b >>> 0)) << y) : 0) >>> 0))) >>> 0;
  Nr			s = s + (8) >>> 0;
    			if (s === 32) {
  N�				((i < 0 || i >= words.$length) ? ($throwRuntimeError("index out of range"), undefined) : words.$array[words.$offset + i] = w);
  N�				i = i + (1) >> 0;
  N�				w = 0;
  N�				s = 0;
    			}
    			_i++;
		}
    		if (i < words.$length) {
  N�			((i < 0 || i >= words.$length) ? ($throwRuntimeError("index out of range"), undefined) : words.$array[words.$offset + i] = w);
  N�			i = i + (1) >> 0;
    		}
  O		while (true) {
			if (!(i > 0 && ((x = i - 1 >> 0, ((x < 0 || x >= words.$length) ? ($throwRuntimeError("index out of range"), undefined) : words.$array[words.$offset + x])) === 0))) { break; }
  O6			i = i - (1) >> 0;
    		}
  O?		return makeInt(newInt().SetBits($subslice(words, 0, i)));
    	};
	$pkg.MakeFromBytes = MakeFromBytes;
MakeFromBytesgo/constant.MakeFromBytesgo/constant.makeIntgo/constant.newIntgo/constant.sliceType$3math/big.Word go/constant.Numgo/constantNum Num�
�	Num = function(x) {
		var _r$1, _r$2, _r$3, _ref, _tuple, r, x, x$1, x$2, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tuple = $f._tuple; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Pr		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* switch (0) { default: if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { */ case 1:
    			x$1 = _ref;
  P�			$s = -1; return x$1;
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, ratVal);
  P�			$s = -1; return makeInt(x$2.val.Num());
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, floatVal);
  P�			_r$1 = smallFloat(x$3.val); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (_r$1) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (_r$1) { */ case 7:
  Q				_r$2 = x$3.val.Rat(ptrType$3.nil); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				r = _tuple[0];
  Q				$s = -1; return makeInt(r.Num());
    			/* } */ case 8:
    			$s = 6; continue;
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, unknownVal);
  QN			/* break; */ $s = 6; continue;
    			$s = 6; continue;
		/* } else { */ case 5:
    			x$5 = _ref;
  Q`			_r$3 = fmt.Sprintf("%v not Int or Float", new sliceType$1([x$5])); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$panic(new $String(_r$3));
    		/* } } */ case 6:
  Q�		$s = -1; return (x$6 = new unknownVal.ptr(), new x$6.constructor.elem(x$6));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Num }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tuple = _tuple; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Num = Num;
Numfmt.Sprintfgo/constant.Numgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.makeIntgo/constant.ptrType$3go/constant.ratValgo/constant.sliceType$1go/constant.smallFloatgo/constant.unknownVal go/constant.Denomgo/constantDenom Denom�
�	Denom = function(x) {
		var _r$1, _r$2, _r$3, _ref, _tuple, r, x, x$1, x$2, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tuple = $f._tuple; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  R�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* switch (0) { default: if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { */ case 1:
    			x$1 = _ref;
  R�			$s = -1; return new int64Val(0, 1);
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, ratVal);
  R�			$s = -1; return makeInt(x$2.val.Denom());
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, floatVal);
  S 			_r$1 = smallFloat(x$3.val); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (_r$1) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (_r$1) { */ case 7:
  S:				_r$2 = x$3.val.Rat(ptrType$3.nil); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				r = _tuple[0];
  ST				$s = -1; return makeInt(r.Denom());
    			/* } */ case 8:
    			$s = 6; continue;
    		/* } else if ($assertType(_ref, unknownVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, unknownVal);
  S�			/* break; */ $s = 6; continue;
    			$s = 6; continue;
		/* } else { */ case 5:
    			x$5 = _ref;
  S�			_r$3 = fmt.Sprintf("%v not Int or Float", new sliceType$1([x$5])); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$panic(new $String(_r$3));
    		/* } } */ case 6:
  S�		$s = -1; return (x$6 = new unknownVal.ptr(), new x$6.constructor.elem(x$6));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Denom }; } $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tuple = _tuple; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Denom = Denom;
Denomfmt.Sprintfgo/constant.Denomgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.makeIntgo/constant.ptrType$3go/constant.ratValgo/constant.sliceType$1go/constant.smallFloatgo/constant.unknownVal go/constant.MakeImaggo/constantMakeImag MakeImag�c	MakeImag = function(x) {
		var $24r, _r$1, _r$2, _ref, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  T{		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1]) { */ case 1:
  T�			$s = -1; return x;
    		/* } else if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { */ case 2:
  T�			_r$1 = makeComplex(new int64Val(0, 0), x); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 6; case 6: return $24r;
    		/* } else { */ case 3:
  U			_r$2 = fmt.Sprintf("%v not Int or Float", new sliceType$1([x])); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$panic(new $String(_r$2));
    		/* } */ case 4:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeImag }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeImag = MakeImag;
MakeImag	fmt.Sprintfgo/constant.MakeImaggo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.makeComplexgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.Realgo/constantReal Real�\	Real = function(x) {
		var _r$1, _ref, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  U�		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1] || $assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1] || $assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { */ case 1:
    			x$1 = _ref;
  V			$s = -1; return x$1;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, complexVal);
  V9			$s = -1; return x$2.re;
    		/* } else { */ case 3:
    			x$3 = _ref;
  VQ			_r$1 = fmt.Sprintf("%v not numeric", new sliceType$1([x$3])); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 4:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Real }; } $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Real = Real;
Real	fmt.Sprintfgo/constant.Realgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.Imaggo/constantImag Imag�0	Imag = function(x) {
		var _r$1, _ref, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  W		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1]) { */ case 1:
    			x$1 = $clone(_ref.$val, unknownVal);
  WD			$s = -1; return new x$1.constructor.elem(x$1);
    		/* } else if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { */ case 2:
    			x$2 = _ref;
  Wy			$s = -1; return new int64Val(0, 0);
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, complexVal);
  W�			$s = -1; return x$3.im;
    		/* } else { */ case 4:
    			x$4 = _ref;
  W�			_r$1 = fmt.Sprintf("%v not numeric", new sliceType$1([x$4])); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String(_r$1));
    		/* } */ case 5:
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Imag }; } $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Imag = Imag;
Imag	fmt.Sprintfgo/constant.Imaggo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ratValgo/constant.sliceType$1go/constant.unknownVal go/constant.ToIntgo/constantToInt ToInt��	ToInt = function(x) {
		var $24r, _r$1, _r$10, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, _tuple$1, _tuple$2, acc, acc$1, acc$2, i, re, t, x, x$1, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; acc = $f.acc; acc$1 = $f.acc$1; acc$2 = $f.acc$2; i = $f.i; re = $f.re; t = $f.t; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  X�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1]) { */ case 1:
    			x$1 = _ref;
  Y			$s = -1; return x$1;
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, ratVal);
    			if (x$2.val.IsInt()) {
  Y5				$s = -1; return makeInt(x$2.val.Num());
    			}
    			$s = 5; continue;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, floatVal);
  Z			_r$1 = smallFloat(x$3.val); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (_r$1) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (_r$1) { */ case 6:
  Z/				i = newInt();
  ZC				_r$2 = x$3.val.Int(i); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				acc = _tuple[1];
    				if (acc === 0) {
  Zr					$s = -1; return makeInt(i);
    				}
  [S				t = new big.Float.ptr(0, 0, 0, 0, false, big.nat.nil, 0);
  [b				_r$3 = t.SetPrec(508); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$3;
  [�				t.SetMode(2);
  [�				_r$4 = t.Set(x$3.val); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				_r$4;
  [�				_r$5 = t.Int(i); /* */ $s = 12; case 12: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				_tuple$1 = _r$5;
				acc$1 = _tuple$1[1];
    				if (acc$1 === 0) {
  [�					$s = -1; return makeInt(i);
    				}
  \0				t.SetMode(3);
  \O				_r$6 = t.Set(x$3.val); /* */ $s = 13; case 13: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_r$6;
  \b				_r$7 = t.Int(i); /* */ $s = 14; case 14: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				_tuple$2 = _r$7;
				acc$2 = _tuple$2[1];
    				if (acc$2 === 0) {
  \�					$s = -1; return makeInt(i);
    				}
    			/* } */ case 7:
    			$s = 5; continue;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, complexVal);
  \�			_r$8 = ToFloat(new x$4.constructor.elem(x$4)); /* */ $s = 15; case 15: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			re = _r$8;
  \�			_r$9 = re.Kind(); /* */ $s = 18; case 18: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			/* */ if (_r$9 === 4) { $s = 16; continue; }
			/* */ $s = 17; continue;
    			/* if (_r$9 === 4) { */ case 16:
  \�				_r$10 = ToInt(re); /* */ $s = 19; case 19: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
				$24r = _r$10;
				$s = 20; case 20: return $24r;
    			/* } */ case 17:
    		/* } */ case 5:
  ]		$s = -1; return (x$5 = new unknownVal.ptr(), new x$5.constructor.elem(x$5));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToInt }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.acc = acc; $f.acc$1 = acc$1; $f.acc$2 = acc$2; $f.i = i; $f.re = re; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToInt = ToInt;
ToIntgo/constant.ToFloatgo/constant.ToIntgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.makeIntgo/constant.newIntgo/constant.ratValgo/constant.smallFloatgo/constant.unknownValmath/big.Floatmath/big.nat go/constant.ToFloatgo/constantToFloat ToFloat�
�	ToFloat = function(x) {
		var $24r, $24r$1, _r$1, _r$2, _r$3, _ref, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ]�		_ref = x;
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if ($assertType(_ref, int64Val, true)[1]) { */ case 1:
    			x$1 = _ref.$val;
  ]�			$s = -1; return (x$5 = i64tor(x$1), new x$5.constructor.elem(x$5));
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, intVal);
    			if (smallInt(x$2.val)) {
  ^$				$s = -1; return (x$6 = itor($clone(x$2, intVal)), new x$6.constructor.elem(x$6));
    			}
  ^9			_r$1 = itof($clone(x$2, intVal)); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = (x$7 = _r$1, new x$7.constructor.elem(x$7));
			$s = 7; case 7: return $24r;
    		/* } else if ($assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) { */ case 3:
    			x$3 = _ref;
  ^b			$s = -1; return x$3;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 4:
    			x$4 = $clone(_ref.$val, complexVal);
  ^			_r$2 = Sign(x$4.im); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			/* */ if (_r$2 === 0) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (_r$2 === 0) { */ case 8:
  ^�				_r$3 = ToFloat(x$4.re); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				$24r$1 = _r$3;
				$s = 12; case 12: return $24r$1;
    			/* } */ case 9:
    		/* } */ case 5:
  ^�		$s = -1; return (x$8 = new unknownVal.ptr(), new x$8.constructor.elem(x$8));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToFloat }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToFloat = ToFloat;
ToFloatgo/constant.Signgo/constant.ToFloatgo/constant.complexValgo/constant.floatValgo/constant.i64torgo/constant.int64Valgo/constant.intValgo/constant.itofgo/constant.itorgo/constant.ratValgo/constant.smallIntgo/constant.unknownVal go/constant.ToComplexgo/constant	ToComplex 	ToComplex�\	ToComplex = function(x) {
		var _ref, x, x$1, x$2, x$3, x$4;
  __		_ref = x;
    		if ($assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1]) {
    			x$1 = _ref;
  _�			return (x$3 = vtoc(x$1), new x$3.constructor.elem(x$3));
    		} else if ($assertType(_ref, complexVal, true)[1]) {
    			x$2 = $clone(_ref.$val, complexVal);
  _�			return new x$2.constructor.elem(x$2);
    		}
  _�		return (x$4 = new unknownVal.ptr(), new x$4.constructor.elem(x$4));
    	};
	$pkg.ToComplex = ToComplex;
	ToComplexgo/constant.ToComplexgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ratValgo/constant.unknownValgo/constant.vtoc go/constant.is32bitgo/constantis32bit is32bit��	is32bit = function(x) {
		var x;
  `�		return (-1 < x.$high || (-1 === x.$high && 2147483648 <= x.$low)) && (x.$high < 0 || (x.$high === 0 && x.$low <= 2147483647));
    	};
is32bitgo/constant.is32bit go/constant.is63bitgo/constantis63bit is63bit��	is63bit = function(x) {
		var x;
  aJ		return (-1073741824 < x.$high || (-1073741824 === x.$high && 0 <= x.$low)) && (x.$high < 1073741823 || (x.$high === 1073741823 && x.$low <= 4294967295));
    	};
is63bitgo/constant.is63bit go/constant.UnaryOpgo/constantUnaryOp UnaryOp�w	UnaryOp = function(op, y, prec) {
		var $24r, $24r$1, $24r$2, _1, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _ref$3, im, op, prec, re, y, y$1, y$10, y$11, y$12, y$2, y$3, y$4, y$5, y$6, y$7, y$8, y$9, z, z$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _1 = $f._1; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; im = $f.im; op = $f.op; prec = $f.prec; re = $f.re; y = $f.y; y$1 = $f.y$1; y$10 = $f.y$10; y$11 = $f.y$11; y$12 = $f.y$12; y$2 = $f.y$2; y$3 = $f.y$3; y$4 = $f.y$4; y$5 = $f.y$5; y$6 = $f.y$6; y$7 = $f.y$7; y$8 = $f.y$8; y$9 = $f.y$9; z = $f.z; z$1 = $f.z$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = op;
  b�			/* */ if (_1 === (12)) { $s = 2; continue; }
			/* */ if (_1 === (13)) { $s = 3; continue; }
			/* */ if (_1 === (19)) { $s = 4; continue; }
			/* */ if (_1 === (43)) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (_1 === (12)) { */ case 2:
  b�				_ref = y;
    				if ($assertType(_ref, unknownVal, true)[1] || $assertType(_ref, int64Val, true)[1] || $assertType(_ref, intVal, true)[1] || $assertType(_ref, ratVal, true)[1] || $assertType(_ref, floatVal, true)[1] || $assertType(_ref, complexVal, true)[1]) {
  c 					$s = -1; return y;
    				}
    				$s = 6; continue;
    			/* } else if (_1 === (13)) { */ case 3:
  c!				_ref$1 = y;
				/* */ if ($assertType(_ref$1, unknownVal, true)[1]) { $s = 7; continue; }
				/* */ if ($assertType(_ref$1, int64Val, true)[1]) { $s = 8; continue; }
				/* */ if ($assertType(_ref$1, intVal, true)[1]) { $s = 9; continue; }
				/* */ if ($assertType(_ref$1, ratVal, true)[1]) { $s = 10; continue; }
				/* */ if ($assertType(_ref$1, floatVal, true)[1]) { $s = 11; continue; }
				/* */ if ($assertType(_ref$1, complexVal, true)[1]) { $s = 12; continue; }
				/* */ $s = 13; continue;
    				/* if ($assertType(_ref$1, unknownVal, true)[1]) { */ case 7:
    					y$1 = $clone(_ref$1.$val, unknownVal);
  cN					$s = -1; return new y$1.constructor.elem(y$1);
    				/* } else if ($assertType(_ref$1, int64Val, true)[1]) { */ case 8:
    					y$2 = _ref$1.$val;
  cn					z = new int64Val(-y$2.$high, -y$2.$low);
    					if (!((z.$high === y$2.$high && z.$low === y$2.$low))) {
  c�						$s = -1; return z;
    					}
  c�					$s = -1; return makeInt(newInt().Neg(big.NewInt((new $Int64(y$2.$high, y$2.$low)))));
    				/* } else if ($assertType(_ref$1, intVal, true)[1]) { */ case 9:
    					y$3 = $clone(_ref$1.$val, intVal);
  c�					$s = -1; return makeInt(newInt().Neg(y$3.val));
    				/* } else if ($assertType(_ref$1, ratVal, true)[1]) { */ case 10:
    					y$4 = $clone(_ref$1.$val, ratVal);
  d					_r$1 = makeRat(newRat().Neg(y$4.val)); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					$24r = _r$1;
					$s = 15; case 15: return $24r;
    				/* } else if ($assertType(_ref$1, floatVal, true)[1]) { */ case 11:
    					y$5 = $clone(_ref$1.$val, floatVal);
  dW					_r$2 = newFloat(); /* */ $s = 16; case 16: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_r$3 = _r$2.Neg(y$5.val); /* */ $s = 17; case 17: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					_r$4 = makeFloat(_r$3); /* */ $s = 18; case 18: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					$24r$1 = _r$4;
					$s = 19; case 19: return $24r$1;
    				/* } else if ($assertType(_ref$1, complexVal, true)[1]) { */ case 12:
    					y$6 = $clone(_ref$1.$val, complexVal);
  d�					_r$5 = UnaryOp(13, y$6.re, 0); /* */ $s = 20; case 20: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
					re = _r$5;
  d�					_r$6 = UnaryOp(13, y$6.im, 0); /* */ $s = 21; case 21: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
					im = _r$6;
  d�					_r$7 = makeComplex(re, im); /* */ $s = 22; case 22: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					$24r$2 = _r$7;
					$s = 23; case 23: return $24r$2;
    				/* } */ case 13:
    				$s = 6; continue;
    			/* } else if (_1 === (19)) { */ case 4:
  e				z$1 = newInt();
  e"				_ref$2 = y;
				/* */ if ($assertType(_ref$2, unknownVal, true)[1]) { $s = 24; continue; }
				/* */ if ($assertType(_ref$2, int64Val, true)[1]) { $s = 25; continue; }
				/* */ if ($assertType(_ref$2, intVal, true)[1]) { $s = 26; continue; }
				/* */ $s = 27; continue;
    				/* if ($assertType(_ref$2, unknownVal, true)[1]) { */ case 24:
    					y$7 = $clone(_ref$2.$val, unknownVal);
  eO					$s = -1; return new y$7.constructor.elem(y$7);
    				/* } else if ($assertType(_ref$2, int64Val, true)[1]) { */ case 25:
    					y$8 = _ref$2.$val;
  el					_r$8 = z$1.Not(big.NewInt((new $Int64(y$8.$high, y$8.$low)))); /* */ $s = 29; case 29: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
					_r$8;
    					$s = 28; continue;
    				/* } else if ($assertType(_ref$2, intVal, true)[1]) { */ case 26:
    					y$9 = $clone(_ref$2.$val, intVal);
  e�					_r$9 = z$1.Not(y$9.val); /* */ $s = 30; case 30: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					_r$9;
    					$s = 28; continue;
				/* } else { */ case 27:
    					y$10 = _ref$2;
  e�					/* goto Error */ $s = 31; continue;
    				/* } */ case 28:
  fW				/* */ if (prec > 0) { $s = 32; continue; }
				/* */ $s = 33; continue;
    				/* if (prec > 0) { */ case 32:
  fh					_r$10 = z$1.AndNot(z$1, newInt().Lsh(big.NewInt(new $Int64(-1, 4294967295)), prec)); /* */ $s = 34; case 34: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
					_r$10;
    				/* } */ case 33:
  f�				$s = -1; return makeInt(z$1);
    			/* } else if (_1 === (43)) { */ case 5:
  f�				_ref$3 = y;
    				if ($assertType(_ref$3, unknownVal, true)[1]) {
    					y$11 = $clone(_ref$3.$val, unknownVal);
  g					$s = -1; return new y$11.constructor.elem(y$11);
    				} else if ($assertType(_ref$3, boolVal, true)[1]) {
    					y$12 = _ref$3.$val;
  g!					$s = -1; return new boolVal(!y$12);
    				}
    			/* } */ case 6:
    		case 1:
  g3		/* Error: */ case 31:
  g;		_r$11 = fmt.Sprintf("invalid unary operation %s%v", new sliceType$1([new token.Token(op), y])); /* */ $s = 35; case 35: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
		$panic(new $String(_r$11));
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: UnaryOp }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._1 = _1; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f.im = im; $f.op = op; $f.prec = prec; $f.re = re; $f.y = y; $f.y$1 = y$1; $f.y$10 = y$10; $f.y$11 = y$11; $f.y$12 = y$12; $f.y$2 = y$2; $f.y$3 = y$3; $f.y$4 = y$4; $f.y$5 = y$5; $f.y$6 = y$6; $f.y$7 = y$7; $f.y$8 = y$8; $f.y$9 = y$9; $f.z = z; $f.z$1 = z$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.UnaryOp = UnaryOp;
UnaryOpfmt.Sprintfgo/constant.UnaryOpgo/constant.boolValgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.makeComplexgo/constant.makeFloatgo/constant.makeIntgo/constant.makeRatgo/constant.newFloatgo/constant.newIntgo/constant.newRatgo/constant.ratValgo/constant.sliceType$1go/constant.unknownValgo/token.Tokenmath/big.NewInt go/constant.ordgo/constantord ord��	ord = function(x) {
		var _ref, x;
  g�		_ref = x;
    		if ($assertType(_ref, unknownVal, true)[1]) {
  hL			return 0;
    		} else if ($assertType(_ref, boolVal, true)[1] || $assertType(_ref, ptrType, true)[1]) {
  hr			return 1;
    		} else if ($assertType(_ref, int64Val, true)[1]) {
  h�			return 2;
    		} else if ($assertType(_ref, intVal, true)[1]) {
  h�			return 3;
    		} else if ($assertType(_ref, ratVal, true)[1]) {
  h�			return 4;
    		} else if ($assertType(_ref, floatVal, true)[1]) {
  h�			return 5;
    		} else if ($assertType(_ref, complexVal, true)[1]) {
  h�			return 6;
    		} else {
  h.			return -1;
    		}
    	};
ord	go/constant.boolValgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.ordgo/constant.ptrTypego/constant.ratValgo/constant.unknownVal go/constant.matchgo/constantmatch match��	match = function(x, y) {
		var _, _$1, _r$1, _r$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, ox, oy, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _ = $f._; _$1 = $f._$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; ox = $f.ox; oy = $f.oy; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_ = $ifaceNil;
		_$1 = $ifaceNil;
  j4			_tmp = ord(x);
			_tmp$1 = ord(y);
			ox = _tmp;
			oy = _tmp$1;
  jQ			/* */ if (ox < oy) { $s = 2; continue; }
			/* */ if (ox > oy) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ox < oy) { */ case 2:
  ja				_r$1 = match0(x, y); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple = _r$1;
				x = _tuple[0];
				y = _tuple[1];
    				$s = 4; continue;
    			/* } else if (ox > oy) { */ case 3:
  j�				_r$2 = match0(y, x); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple$1 = _r$2;
				y = _tuple$1[0];
				x = _tuple$1[1];
    			/* } */ case 4:
    		case 1:
    		_tmp$2 = x;
		_tmp$3 = y;
		_ = _tmp$2;
		_$1 = _tmp$3;
		$s = -1; return [_, _$1];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: match }; } $f._ = _; $f._$1 = _$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.ox = ox; $f.oy = oy; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
matchgo/constant.matchgo/constant.match0go/constant.ord go/constant.match0go/constantmatch0 match0�`	match0 = function(x, y) {
		var $24r, $24r$1, $24r$2, _, _$1, _r$1, _r$2, _r$3, _ref, _ref$1, _ref$2, _ref$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x1, x1$1, x1$2, x1$3, x1$4, x1$5, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _ = $f._; _$1 = $f._$1; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x1 = $f.x1; x1$1 = $f.x1$1; x1$2 = $f.x1$2; x1$3 = $f.x1$3; x1$4 = $f.x1$4; x1$5 = $f.x1$5; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		_ = $ifaceNil;
		_$1 = $ifaceNil;
  k�		_ref = y;
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if ($assertType(_ref, intVal, true)[1]) { */ case 1:
  k�			_ref$1 = x;
    			if ($assertType(_ref$1, int64Val, true)[1]) {
    				x1 = _ref$1.$val;
    				_tmp = (x$1 = i64toi(x1), new x$1.constructor.elem(x$1));
				_tmp$1 = y;
				_ = _tmp;
				_$1 = _tmp$1;
				$s = -1; return [_, _$1];
    			}
    			$s = 5; continue;
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 2:
  l			_ref$2 = x;
    			if ($assertType(_ref$2, int64Val, true)[1]) {
    				x1$1 = _ref$2.$val;
    				_tmp$2 = (x$2 = i64tor(x1$1), new x$2.constructor.elem(x$2));
				_tmp$3 = y;
				_ = _tmp$2;
				_$1 = _tmp$3;
				$s = -1; return [_, _$1];
    			} else if ($assertType(_ref$2, intVal, true)[1]) {
    				x1$2 = $clone(_ref$2.$val, intVal);
    				_tmp$4 = (x$3 = itor($clone(x1$2, intVal)), new x$3.constructor.elem(x$3));
				_tmp$5 = y;
				_ = _tmp$4;
				_$1 = _tmp$5;
				$s = -1; return [_, _$1];
    			}
    			$s = 5; continue;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 3:
  l}			_ref$3 = x;
			/* */ if ($assertType(_ref$3, int64Val, true)[1]) { $s = 6; continue; }
			/* */ if ($assertType(_ref$3, intVal, true)[1]) { $s = 7; continue; }
			/* */ if ($assertType(_ref$3, ratVal, true)[1]) { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if ($assertType(_ref$3, int64Val, true)[1]) { */ case 6:
    				x1$3 = _ref$3.$val;
    				_r$1 = i64tof(x1$3); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tmp$6 = (x$4 = _r$1, new x$4.constructor.elem(x$4));
				_tmp$7 = y;
				_ = _tmp$6;
				_$1 = _tmp$7;
				$24r = [_, _$1];
				$s = 11; case 11: return $24r;
    			/* } else if ($assertType(_ref$3, intVal, true)[1]) { */ case 7:
    				x1$4 = $clone(_ref$3.$val, intVal);
    				_r$2 = itof($clone(x1$4, intVal)); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tmp$8 = (x$5 = _r$2, new x$5.constructor.elem(x$5));
				_tmp$9 = y;
				_ = _tmp$8;
				_$1 = _tmp$9;
				$24r$1 = [_, _$1];
				$s = 13; case 13: return $24r$1;
    			/* } else if ($assertType(_ref$3, ratVal, true)[1]) { */ case 8:
    				x1$5 = $clone(_ref$3.$val, ratVal);
    				_r$3 = rtof($clone(x1$5, ratVal)); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tmp$10 = (x$6 = _r$3, new x$6.constructor.elem(x$6));
				_tmp$11 = y;
				_ = _tmp$10;
				_$1 = _tmp$11;
				$24r$2 = [_, _$1];
				$s = 15; case 15: return $24r$2;
    			/* } */ case 9:
    			$s = 5; continue;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 4:
    			_tmp$12 = (x$7 = vtoc(x), new x$7.constructor.elem(x$7));
			_tmp$13 = y;
			_ = _tmp$12;
			_$1 = _tmp$13;
			$s = -1; return [_, _$1];
    		/* } */ case 5:
    		_tmp$14 = x;
		_tmp$15 = x;
		_ = _tmp$14;
		_$1 = _tmp$15;
		$s = -1; return [_, _$1];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: match0 }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._ = _; $f._$1 = _$1; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x1 = x1; $f.x1$1 = x1$1; $f.x1$2 = x1$2; $f.x1$3 = x1$3; $f.x1$4 = x1$4; $f.x1$5 = x1$5; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
match0go/constant.complexValgo/constant.floatValgo/constant.i64tofgo/constant.i64toigo/constant.i64torgo/constant.int64Valgo/constant.intValgo/constant.itofgo/constant.itorgo/constant.match0go/constant.ratValgo/constant.rtofgo/constant.vtoc go/constant.BinaryOpgo/constantBinaryOp BinaryOp�[	BinaryOp = function(x_, op, y_) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, $24r$6, $24r$7, _1, _2, _3, _4, _5, _6, _r$1, _r$10, _r$11, _r$12, _r$13, _r$14, _r$15, _r$16, _r$17, _r$18, _r$19, _r$2, _r$20, _r$21, _r$22, _r$23, _r$24, _r$25, _r$26, _r$27, _r$28, _r$29, _r$3, _r$30, _r$31, _r$32, _r$33, _r$34, _r$35, _r$36, _r$37, _r$38, _r$39, _r$4, _r$40, _r$41, _r$42, _r$43, _r$44, _r$45, _r$46, _r$47, _r$48, _r$49, _r$5, _r$50, _r$51, _r$52, _r$53, _r$54, _r$6, _r$7, _r$8, _r$9, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, a, a$1, a$2, a$3, a$4, ac, ac$1, ad, ad$1, b, b$1, b$2, b$3, b$4, bc, bc$1, bd, bd$1, c, c$1, c$2, c$3, c$4, cc, d, dd, im, op, re, s, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, x_, y, y$1, y$2, y_, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; $24r$6 = $f.$24r$6; $24r$7 = $f.$24r$7; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _5 = $f._5; _6 = $f._6; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$13 = $f._r$13; _r$14 = $f._r$14; _r$15 = $f._r$15; _r$16 = $f._r$16; _r$17 = $f._r$17; _r$18 = $f._r$18; _r$19 = $f._r$19; _r$2 = $f._r$2; _r$20 = $f._r$20; _r$21 = $f._r$21; _r$22 = $f._r$22; _r$23 = $f._r$23; _r$24 = $f._r$24; _r$25 = $f._r$25; _r$26 = $f._r$26; _r$27 = $f._r$27; _r$28 = $f._r$28; _r$29 = $f._r$29; _r$3 = $f._r$3; _r$30 = $f._r$30; _r$31 = $f._r$31; _r$32 = $f._r$32; _r$33 = $f._r$33; _r$34 = $f._r$34; _r$35 = $f._r$35; _r$36 = $f._r$36; _r$37 = $f._r$37; _r$38 = $f._r$38; _r$39 = $f._r$39; _r$4 = $f._r$4; _r$40 = $f._r$40; _r$41 = $f._r$41; _r$42 = $f._r$42; _r$43 = $f._r$43; _r$44 = $f._r$44; _r$45 = $f._r$45; _r$46 = $f._r$46; _r$47 = $f._r$47; _r$48 = $f._r$48; _r$49 = $f._r$49; _r$5 = $f._r$5; _r$50 = $f._r$50; _r$51 = $f._r$51; _r$52 = $f._r$52; _r$53 = $f._r$53; _r$54 = $f._r$54; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; a = $f.a; a$1 = $f.a$1; a$2 = $f.a$2; a$3 = $f.a$3; a$4 = $f.a$4; ac = $f.ac; ac$1 = $f.ac$1; ad = $f.ad; ad$1 = $f.ad$1; b = $f.b; b$1 = $f.b$1; b$2 = $f.b$2; b$3 = $f.b$3; b$4 = $f.b$4; bc = $f.bc; bc$1 = $f.bc$1; bd = $f.bd; bd$1 = $f.bd$1; c = $f.c; c$1 = $f.c$1; c$2 = $f.c$2; c$3 = $f.c$3; c$4 = $f.c$4; cc = $f.cc; d = $f.d; dd = $f.dd; im = $f.im; op = $f.op; re = $f.re; s = $f.s; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; x_ = $f.x_; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y_ = $f.y_; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  o�		_r$1 = match(x_, y_); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		x = _tuple[0];
		y = _tuple[1];
  o�		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, boolVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 6; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 7; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 8; continue; }
		/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1]) { */ case 2:
    			x$1 = $clone(_ref.$val, unknownVal);
  p$			$s = -1; return new x$1.constructor.elem(x$1);
    		/* } else if ($assertType(_ref, boolVal, true)[1]) { */ case 3:
    			x$2 = _ref.$val;
  p?			y$1 = $assertType(y, boolVal);
    			_1 = op;
    			if (_1 === (34)) {
  pt				$s = -1; return new boolVal(x$2 && y$1);
    			} else if (_1 === (35)) {
  p�				$s = -1; return new boolVal(x$2 || y$1);
    			}
    			$s = 10; continue;
    		/* } else if ($assertType(_ref, int64Val, true)[1]) { */ case 4:
    			x$3 = _ref.$val;
  p�			a = (new $Int64(x$3.$high, x$3.$low));
  p�			b = ((x$9 = $assertType(y, int64Val), new $Int64(x$9.$high, x$9.$low)));
  p�			c = new $Int64(0, 0);
    				_2 = op;
  q				/* */ if (_2 === (12)) { $s = 12; continue; }
				/* */ if (_2 === (13)) { $s = 13; continue; }
				/* */ if (_2 === (14)) { $s = 14; continue; }
				/* */ if (_2 === (15)) { $s = 15; continue; }
				/* */ if (_2 === (26)) { $s = 16; continue; }
				/* */ if (_2 === (16)) { $s = 17; continue; }
				/* */ if (_2 === (17)) { $s = 18; continue; }
				/* */ if (_2 === (18)) { $s = 19; continue; }
				/* */ if (_2 === (19)) { $s = 20; continue; }
				/* */ if (_2 === (22)) { $s = 21; continue; }
				/* */ $s = 22; continue;
    				/* if (_2 === (12)) { */ case 12:
  q					/* */ if (!is63bit(a) || !is63bit(b)) { $s = 24; continue; }
					/* */ $s = 25; continue;
    					/* if (!is63bit(a) || !is63bit(b)) { */ case 24:
  q:						_r$2 = newInt().Add(big.NewInt(a), big.NewInt(b)); /* */ $s = 26; case 26: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						_r$3 = makeInt(_r$2); /* */ $s = 27; case 27: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
						$24r = _r$3;
						$s = 28; case 28: return $24r;
    					/* } */ case 25:
  q}					c = new $Int64(a.$high + b.$high, a.$low + b.$low);
    					$s = 23; continue;
    				/* } else if (_2 === (13)) { */ case 13:
  q�					/* */ if (!is63bit(a) || !is63bit(b)) { $s = 29; continue; }
					/* */ $s = 30; continue;
    					/* if (!is63bit(a) || !is63bit(b)) { */ case 29:
  q�						_r$4 = newInt().Sub(big.NewInt(a), big.NewInt(b)); /* */ $s = 31; case 31: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
						_r$5 = makeInt(_r$4); /* */ $s = 32; case 32: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
						$24r$1 = _r$5;
						$s = 33; case 33: return $24r$1;
    					/* } */ case 30:
  r					c = new $Int64(a.$high - b.$high, a.$low - b.$low);
    					$s = 23; continue;
    				/* } else if (_2 === (14)) { */ case 14:
  r"					/* */ if (!is32bit(a) || !is32bit(b)) { $s = 34; continue; }
					/* */ $s = 35; continue;
    					/* if (!is32bit(a) || !is32bit(b)) { */ case 34:
  rF						_r$6 = newInt().Mul(big.NewInt(a), big.NewInt(b)); /* */ $s = 36; case 36: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
						_r$7 = makeInt(_r$6); /* */ $s = 37; case 37: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
						$24r$2 = _r$7;
						$s = 38; case 38: return $24r$2;
    					/* } */ case 35:
  r�					c = $mul64(a, b);
    					$s = 23; continue;
    				/* } else if (_2 === (15)) { */ case 15:
  r�					_r$8 = big.NewRat(a, b); /* */ $s = 39; case 39: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
					_r$9 = makeRat(_r$8); /* */ $s = 40; case 40: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					$24r$3 = _r$9;
					$s = 41; case 41: return $24r$3;
    				/* } else if (_2 === (26)) { */ case 16:
  r�					c = $div64(a, b, false);
    					$s = 23; continue;
    				/* } else if (_2 === (16)) { */ case 17:
  s					c = $div64(a, b, true);
    					$s = 23; continue;
    				/* } else if (_2 === (17)) { */ case 18:
  s=					c = new $Int64(a.$high & b.$high, (a.$low & b.$low) >>> 0);
    					$s = 23; continue;
    				/* } else if (_2 === (18)) { */ case 19:
  s[					c = new $Int64(a.$high | b.$high, (a.$low | b.$low) >>> 0);
    					$s = 23; continue;
    				/* } else if (_2 === (19)) { */ case 20:
  sz					c = new $Int64(a.$high ^ b.$high, (a.$low ^ b.$low) >>> 0);
    					$s = 23; continue;
    				/* } else if (_2 === (22)) { */ case 21:
  s�					c = new $Int64(a.$high & ~b.$high, (a.$low & ~b.$low) >>> 0);
    					$s = 23; continue;
				/* } else { */ case 22:
  s�					/* goto Error */ $s = 42; continue;
    				/* } */ case 23:
    			case 11:
  s�			$s = -1; return (new int64Val(c.$high, c.$low));
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 5:
    			x$4 = $clone(_ref.$val, intVal);
  s�			a$1 = x$4.val;
  s�			b$1 = $assertType(y, intVal).val;
  t			c$1 = newInt();
    				_3 = op;
  t,				/* */ if (_3 === (12)) { $s = 44; continue; }
				/* */ if (_3 === (13)) { $s = 45; continue; }
				/* */ if (_3 === (14)) { $s = 46; continue; }
				/* */ if (_3 === (15)) { $s = 47; continue; }
				/* */ if (_3 === (26)) { $s = 48; continue; }
				/* */ if (_3 === (16)) { $s = 49; continue; }
				/* */ if (_3 === (17)) { $s = 50; continue; }
				/* */ if (_3 === (18)) { $s = 51; continue; }
				/* */ if (_3 === (19)) { $s = 52; continue; }
				/* */ if (_3 === (22)) { $s = 53; continue; }
				/* */ $s = 54; continue;
    				/* if (_3 === (12)) { */ case 44:
  t?					_r$10 = c$1.Add(a$1, b$1); /* */ $s = 56; case 56: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
					_r$10;
    					$s = 55; continue;
    				/* } else if (_3 === (13)) { */ case 45:
  t`					_r$11 = c$1.Sub(a$1, b$1); /* */ $s = 57; case 57: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
					_r$11;
    					$s = 55; continue;
    				/* } else if (_3 === (14)) { */ case 46:
  t�					_r$12 = c$1.Mul(a$1, b$1); /* */ $s = 58; case 58: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
					_r$12;
    					$s = 55; continue;
    				/* } else if (_3 === (15)) { */ case 47:
  t�					_r$13 = newRat().SetFrac(a$1, b$1); /* */ $s = 59; case 59: if($c) { $c = false; _r$13 = _r$13.$blk(); } if (_r$13 && _r$13.$blk !== undefined) { break s; }
					_r$14 = makeRat(_r$13); /* */ $s = 60; case 60: if($c) { $c = false; _r$14 = _r$14.$blk(); } if (_r$14 && _r$14.$blk !== undefined) { break s; }
					$24r$4 = _r$14;
					$s = 61; case 61: return $24r$4;
    				/* } else if (_3 === (26)) { */ case 48:
  t�					_r$15 = c$1.Quo(a$1, b$1); /* */ $s = 62; case 62: if($c) { $c = false; _r$15 = _r$15.$blk(); } if (_r$15 && _r$15.$blk !== undefined) { break s; }
					_r$15;
    					$s = 55; continue;
    				/* } else if (_3 === (16)) { */ case 49:
  u 					_r$16 = c$1.Rem(a$1, b$1); /* */ $s = 63; case 63: if($c) { $c = false; _r$16 = _r$16.$blk(); } if (_r$16 && _r$16.$blk !== undefined) { break s; }
					_r$16;
    					$s = 55; continue;
    				/* } else if (_3 === (17)) { */ case 50:
  uA					_r$17 = c$1.And(a$1, b$1); /* */ $s = 64; case 64: if($c) { $c = false; _r$17 = _r$17.$blk(); } if (_r$17 && _r$17.$blk !== undefined) { break s; }
					_r$17;
    					$s = 55; continue;
    				/* } else if (_3 === (18)) { */ case 51:
  ua					_r$18 = c$1.Or(a$1, b$1); /* */ $s = 65; case 65: if($c) { $c = false; _r$18 = _r$18.$blk(); } if (_r$18 && _r$18.$blk !== undefined) { break s; }
					_r$18;
    					$s = 55; continue;
    				/* } else if (_3 === (19)) { */ case 52:
  u�					_r$19 = c$1.Xor(a$1, b$1); /* */ $s = 66; case 66: if($c) { $c = false; _r$19 = _r$19.$blk(); } if (_r$19 && _r$19.$blk !== undefined) { break s; }
					_r$19;
    					$s = 55; continue;
    				/* } else if (_3 === (22)) { */ case 53:
  u�					_r$20 = c$1.AndNot(a$1, b$1); /* */ $s = 67; case 67: if($c) { $c = false; _r$20 = _r$20.$blk(); } if (_r$20 && _r$20.$blk !== undefined) { break s; }
					_r$20;
    					$s = 55; continue;
				/* } else { */ case 54:
  u�					/* goto Error */ $s = 42; continue;
    				/* } */ case 55:
    			case 43:
  u�			$s = -1; return makeInt(c$1);
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 6:
    			x$5 = $clone(_ref.$val, ratVal);
  u�			a$2 = x$5.val;
  v			b$2 = $assertType(y, ratVal).val;
  v			c$2 = newRat();
    				_4 = op;
  v8				/* */ if (_4 === (12)) { $s = 69; continue; }
				/* */ if (_4 === (13)) { $s = 70; continue; }
				/* */ if (_4 === (14)) { $s = 71; continue; }
				/* */ if (_4 === (15)) { $s = 72; continue; }
				/* */ $s = 73; continue;
    				/* if (_4 === (12)) { */ case 69:
  vK					_r$21 = c$2.Add(a$2, b$2); /* */ $s = 75; case 75: if($c) { $c = false; _r$21 = _r$21.$blk(); } if (_r$21 && _r$21.$blk !== undefined) { break s; }
					_r$21;
    					$s = 74; continue;
    				/* } else if (_4 === (13)) { */ case 70:
  vl					_r$22 = c$2.Sub(a$2, b$2); /* */ $s = 76; case 76: if($c) { $c = false; _r$22 = _r$22.$blk(); } if (_r$22 && _r$22.$blk !== undefined) { break s; }
					_r$22;
    					$s = 74; continue;
    				/* } else if (_4 === (14)) { */ case 71:
  v�					_r$23 = c$2.Mul(a$2, b$2); /* */ $s = 77; case 77: if($c) { $c = false; _r$23 = _r$23.$blk(); } if (_r$23 && _r$23.$blk !== undefined) { break s; }
					_r$23;
    					$s = 74; continue;
    				/* } else if (_4 === (15)) { */ case 72:
  v�					_r$24 = c$2.Quo(a$2, b$2); /* */ $s = 78; case 78: if($c) { $c = false; _r$24 = _r$24.$blk(); } if (_r$24 && _r$24.$blk !== undefined) { break s; }
					_r$24;
    					$s = 74; continue;
				/* } else { */ case 73:
  v�					/* goto Error */ $s = 42; continue;
    				/* } */ case 74:
    			case 68:
  v�			_r$25 = makeRat(c$2); /* */ $s = 79; case 79: if($c) { $c = false; _r$25 = _r$25.$blk(); } if (_r$25 && _r$25.$blk !== undefined) { break s; }
			$24r$5 = _r$25;
			$s = 80; case 80: return $24r$5;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 7:
    			x$6 = $clone(_ref.$val, floatVal);
  v�			a$3 = x$6.val;
  w			b$3 = $assertType(y, floatVal).val;
  w#			_r$26 = newFloat(); /* */ $s = 81; case 81: if($c) { $c = false; _r$26 = _r$26.$blk(); } if (_r$26 && _r$26.$blk !== undefined) { break s; }
			c$3 = _r$26;
    				_5 = op;
  wC				/* */ if (_5 === (12)) { $s = 83; continue; }
				/* */ if (_5 === (13)) { $s = 84; continue; }
				/* */ if (_5 === (14)) { $s = 85; continue; }
				/* */ if (_5 === (15)) { $s = 86; continue; }
				/* */ $s = 87; continue;
    				/* if (_5 === (12)) { */ case 83:
  wV					_r$27 = c$3.Add(a$3, b$3); /* */ $s = 89; case 89: if($c) { $c = false; _r$27 = _r$27.$blk(); } if (_r$27 && _r$27.$blk !== undefined) { break s; }
					_r$27;
    					$s = 88; continue;
    				/* } else if (_5 === (13)) { */ case 84:
  ww					_r$28 = c$3.Sub(a$3, b$3); /* */ $s = 90; case 90: if($c) { $c = false; _r$28 = _r$28.$blk(); } if (_r$28 && _r$28.$blk !== undefined) { break s; }
					_r$28;
    					$s = 88; continue;
    				/* } else if (_5 === (14)) { */ case 85:
  w�					_r$29 = c$3.Mul(a$3, b$3); /* */ $s = 91; case 91: if($c) { $c = false; _r$29 = _r$29.$blk(); } if (_r$29 && _r$29.$blk !== undefined) { break s; }
					_r$29;
    					$s = 88; continue;
    				/* } else if (_5 === (15)) { */ case 86:
  w�					_r$30 = c$3.Quo(a$3, b$3); /* */ $s = 92; case 92: if($c) { $c = false; _r$30 = _r$30.$blk(); } if (_r$30 && _r$30.$blk !== undefined) { break s; }
					_r$30;
    					$s = 88; continue;
				/* } else { */ case 87:
  w�					/* goto Error */ $s = 42; continue;
    				/* } */ case 88:
    			case 82:
  w�			_r$31 = makeFloat(c$3); /* */ $s = 93; case 93: if($c) { $c = false; _r$31 = _r$31.$blk(); } if (_r$31 && _r$31.$blk !== undefined) { break s; }
			$24r$6 = _r$31;
			$s = 94; case 94: return $24r$6;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 8:
    			x$7 = $clone(_ref.$val, complexVal);
  x			y$2 = $clone($assertType(y, complexVal), complexVal);
  x#			_tmp = x$7.re;
			_tmp$1 = x$7.im;
			a$4 = _tmp;
			b$4 = _tmp$1;
  x8			_tmp$2 = y$2.re;
			_tmp$3 = y$2.im;
			c$4 = _tmp$2;
			d = _tmp$3;
  xQ			_tmp$4 = $ifaceNil;
			_tmp$5 = $ifaceNil;
			re = _tmp$4;
			im = _tmp$5;
    				_6 = op;
  xn				/* */ if (_6 === (12)) { $s = 96; continue; }
				/* */ if (_6 === (13)) { $s = 97; continue; }
				/* */ if (_6 === (14)) { $s = 98; continue; }
				/* */ if (_6 === (15)) { $s = 99; continue; }
				/* */ $s = 100; continue;
    				/* if (_6 === (12)) { */ case 96:
  x�					_r$32 = add(a$4, c$4); /* */ $s = 102; case 102: if($c) { $c = false; _r$32 = _r$32.$blk(); } if (_r$32 && _r$32.$blk !== undefined) { break s; }
					re = _r$32;
  x�					_r$33 = add(b$4, d); /* */ $s = 103; case 103: if($c) { $c = false; _r$33 = _r$33.$blk(); } if (_r$33 && _r$33.$blk !== undefined) { break s; }
					im = _r$33;
    					$s = 101; continue;
    				/* } else if (_6 === (13)) { */ case 97:
  x�					_r$34 = sub(a$4, c$4); /* */ $s = 104; case 104: if($c) { $c = false; _r$34 = _r$34.$blk(); } if (_r$34 && _r$34.$blk !== undefined) { break s; }
					re = _r$34;
  x�					_r$35 = sub(b$4, d); /* */ $s = 105; case 105: if($c) { $c = false; _r$35 = _r$35.$blk(); } if (_r$35 && _r$35.$blk !== undefined) { break s; }
					im = _r$35;
    					$s = 101; continue;
    				/* } else if (_6 === (14)) { */ case 98:
  y0					_r$36 = mul(a$4, c$4); /* */ $s = 106; case 106: if($c) { $c = false; _r$36 = _r$36.$blk(); } if (_r$36 && _r$36.$blk !== undefined) { break s; }
					ac = _r$36;
  yC					_r$37 = mul(b$4, d); /* */ $s = 107; case 107: if($c) { $c = false; _r$37 = _r$37.$blk(); } if (_r$37 && _r$37.$blk !== undefined) { break s; }
					bd = _r$37;
  yV					_r$38 = mul(b$4, c$4); /* */ $s = 108; case 108: if($c) { $c = false; _r$38 = _r$38.$blk(); } if (_r$38 && _r$38.$blk !== undefined) { break s; }
					bc = _r$38;
  yi					_r$39 = mul(a$4, d); /* */ $s = 109; case 109: if($c) { $c = false; _r$39 = _r$39.$blk(); } if (_r$39 && _r$39.$blk !== undefined) { break s; }
					ad = _r$39;
  y|					_r$40 = sub(ac, bd); /* */ $s = 110; case 110: if($c) { $c = false; _r$40 = _r$40.$blk(); } if (_r$40 && _r$40.$blk !== undefined) { break s; }
					re = _r$40;
  y�					_r$41 = add(bc, ad); /* */ $s = 111; case 111: if($c) { $c = false; _r$41 = _r$41.$blk(); } if (_r$41 && _r$41.$blk !== undefined) { break s; }
					im = _r$41;
    					$s = 101; continue;
    				/* } else if (_6 === (15)) { */ case 99:
  y�					_r$42 = mul(a$4, c$4); /* */ $s = 112; case 112: if($c) { $c = false; _r$42 = _r$42.$blk(); } if (_r$42 && _r$42.$blk !== undefined) { break s; }
					ac$1 = _r$42;
  y�					_r$43 = mul(b$4, d); /* */ $s = 113; case 113: if($c) { $c = false; _r$43 = _r$43.$blk(); } if (_r$43 && _r$43.$blk !== undefined) { break s; }
					bd$1 = _r$43;
  z					_r$44 = mul(b$4, c$4); /* */ $s = 114; case 114: if($c) { $c = false; _r$44 = _r$44.$blk(); } if (_r$44 && _r$44.$blk !== undefined) { break s; }
					bc$1 = _r$44;
  z					_r$45 = mul(a$4, d); /* */ $s = 115; case 115: if($c) { $c = false; _r$45 = _r$45.$blk(); } if (_r$45 && _r$45.$blk !== undefined) { break s; }
					ad$1 = _r$45;
  z1					_r$46 = mul(c$4, c$4); /* */ $s = 116; case 116: if($c) { $c = false; _r$46 = _r$46.$blk(); } if (_r$46 && _r$46.$blk !== undefined) { break s; }
					cc = _r$46;
  zD					_r$47 = mul(d, d); /* */ $s = 117; case 117: if($c) { $c = false; _r$47 = _r$47.$blk(); } if (_r$47 && _r$47.$blk !== undefined) { break s; }
					dd = _r$47;
  zW					_r$48 = add(cc, dd); /* */ $s = 118; case 118: if($c) { $c = false; _r$48 = _r$48.$blk(); } if (_r$48 && _r$48.$blk !== undefined) { break s; }
					s = _r$48;
  zk					_r$49 = add(ac$1, bd$1); /* */ $s = 119; case 119: if($c) { $c = false; _r$49 = _r$49.$blk(); } if (_r$49 && _r$49.$blk !== undefined) { break s; }
					re = _r$49;
  z					_r$50 = quo(re, s); /* */ $s = 120; case 120: if($c) { $c = false; _r$50 = _r$50.$blk(); } if (_r$50 && _r$50.$blk !== undefined) { break s; }
					re = _r$50;
  z�					_r$51 = sub(bc$1, ad$1); /* */ $s = 121; case 121: if($c) { $c = false; _r$51 = _r$51.$blk(); } if (_r$51 && _r$51.$blk !== undefined) { break s; }
					im = _r$51;
  z�					_r$52 = quo(im, s); /* */ $s = 122; case 122: if($c) { $c = false; _r$52 = _r$52.$blk(); } if (_r$52 && _r$52.$blk !== undefined) { break s; }
					im = _r$52;
    					$s = 101; continue;
				/* } else { */ case 100:
  z�					/* goto Error */ $s = 42; continue;
    				/* } */ case 101:
    			case 95:
  z�			_r$53 = makeComplex(re, im); /* */ $s = 123; case 123: if($c) { $c = false; _r$53 = _r$53.$blk(); } if (_r$53 && _r$53.$blk !== undefined) { break s; }
			$24r$7 = _r$53;
			$s = 124; case 124: return $24r$7;
    		/* } else if ($assertType(_ref, ptrType, true)[1]) { */ case 9:
    			x$8 = _ref.$val;
    			if (op === 12) {
  {				$s = -1; return new stringVal.ptr(new sync.Mutex.ptr(0, 0), "", x$8, $assertType(y, ptrType));
    			}
    		/* } */ case 10:
  {P		/* Error: */ case 42:
  {X		_r$54 = fmt.Sprintf("invalid binary operation %v %s %v", new sliceType$1([x_, new token.Token(op), y_])); /* */ $s = 125; case 125: if($c) { $c = false; _r$54 = _r$54.$blk(); } if (_r$54 && _r$54.$blk !== undefined) { break s; }
		$panic(new $String(_r$54));
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: BinaryOp }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f.$24r$6 = $24r$6; $f.$24r$7 = $24r$7; $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._5 = _5; $f._6 = _6; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$13 = _r$13; $f._r$14 = _r$14; $f._r$15 = _r$15; $f._r$16 = _r$16; $f._r$17 = _r$17; $f._r$18 = _r$18; $f._r$19 = _r$19; $f._r$2 = _r$2; $f._r$20 = _r$20; $f._r$21 = _r$21; $f._r$22 = _r$22; $f._r$23 = _r$23; $f._r$24 = _r$24; $f._r$25 = _r$25; $f._r$26 = _r$26; $f._r$27 = _r$27; $f._r$28 = _r$28; $f._r$29 = _r$29; $f._r$3 = _r$3; $f._r$30 = _r$30; $f._r$31 = _r$31; $f._r$32 = _r$32; $f._r$33 = _r$33; $f._r$34 = _r$34; $f._r$35 = _r$35; $f._r$36 = _r$36; $f._r$37 = _r$37; $f._r$38 = _r$38; $f._r$39 = _r$39; $f._r$4 = _r$4; $f._r$40 = _r$40; $f._r$41 = _r$41; $f._r$42 = _r$42; $f._r$43 = _r$43; $f._r$44 = _r$44; $f._r$45 = _r$45; $f._r$46 = _r$46; $f._r$47 = _r$47; $f._r$48 = _r$48; $f._r$49 = _r$49; $f._r$5 = _r$5; $f._r$50 = _r$50; $f._r$51 = _r$51; $f._r$52 = _r$52; $f._r$53 = _r$53; $f._r$54 = _r$54; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.a = a; $f.a$1 = a$1; $f.a$2 = a$2; $f.a$3 = a$3; $f.a$4 = a$4; $f.ac = ac; $f.ac$1 = ac$1; $f.ad = ad; $f.ad$1 = ad$1; $f.b = b; $f.b$1 = b$1; $f.b$2 = b$2; $f.b$3 = b$3; $f.b$4 = b$4; $f.bc = bc; $f.bc$1 = bc$1; $f.bd = bd; $f.bd$1 = bd$1; $f.c = c; $f.c$1 = c$1; $f.c$2 = c$2; $f.c$3 = c$3; $f.c$4 = c$4; $f.cc = cc; $f.d = d; $f.dd = dd; $f.im = im; $f.op = op; $f.re = re; $f.s = s; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.x_ = x_; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y_ = y_; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.BinaryOp = BinaryOp;
BinaryOpfmt.Sprintfgo/constant.BinaryOpgo/constant.addgo/constant.boolValgo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.is32bitgo/constant.is63bitgo/constant.makeComplexgo/constant.makeFloatgo/constant.makeIntgo/constant.makeRatgo/constant.matchgo/constant.mulgo/constant.newFloatgo/constant.newIntgo/constant.newRatgo/constant.ptrTypego/constant.quogo/constant.ratValgo/constant.sliceType$1go/constant.stringValgo/constant.subgo/constant.unknownValgo/token.Tokenmath/big.NewIntmath/big.NewRat
sync.Mutex go/constant.addgo/constantadd add��	add = function(x, y) {
		var $24r, _r$1, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  {�		_r$1 = BinaryOp(x, 12, y); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: add }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
addgo/constant.BinaryOpgo/constant.add go/constant.subgo/constantsub sub��	sub = function(x, y) {
		var $24r, _r$1, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  {�		_r$1 = BinaryOp(x, 13, y); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: sub }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
subgo/constant.BinaryOpgo/constant.sub go/constant.mulgo/constantmul mul��	mul = function(x, y) {
		var $24r, _r$1, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  |<		_r$1 = BinaryOp(x, 14, y); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: mul }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
mulgo/constant.BinaryOpgo/constant.mul go/constant.quogo/constantquo quo��	quo = function(x, y) {
		var $24r, _r$1, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ||		_r$1 = BinaryOp(x, 15, y); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: quo }; } $f.$24r = $24r; $f._r$1 = _r$1; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
quogo/constant.BinaryOpgo/constant.quo go/constant.Shiftgo/constantShift Shift�=	Shift = function(x, op, s) {
		var $24r, _1, _2, _r$1, _r$2, _r$3, _ref, op, s, x, x$1, x$2, x$3, z, z$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _2 = $f._2; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; op = $f.op; s = $f.s; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; z = $f.z; z$1 = $f.z$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  }�		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1]) { */ case 1:
    			x$1 = $clone(_ref.$val, unknownVal);
  }�			$s = -1; return new x$1.constructor.elem(x$1);
    		/* } else if ($assertType(_ref, int64Val, true)[1]) { */ case 2:
    			x$2 = _ref.$val;
    			if (s === 0) {
  }�				$s = -1; return x$2;
    			}
    			_1 = op;
    			if (_1 === (20)) {
  ~				z = i64toi(x$2).val;
  ~%				$s = -1; return makeInt(z.Lsh(z, s));
    			} else if (_1 === (21)) {
  ~V				$s = -1; return $shiftRightInt64(x$2, s);
    			}
    			$s = 4; continue;
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, intVal);
    			if (s === 0) {
  ~�				$s = -1; return new x$3.constructor.elem(x$3);
    			}
  ~�			z$1 = newInt();
    				_2 = op;
  ~�				/* */ if (_2 === (20)) { $s = 6; continue; }
				/* */ if (_2 === (21)) { $s = 7; continue; }
				/* */ $s = 8; continue;
    				/* if (_2 === (20)) { */ case 6:
  ~�					$s = -1; return makeInt(z$1.Lsh(x$3.val, s));
    				/* } else if (_2 === (21)) { */ case 7:
  ~�					_r$1 = z$1.Rsh(x$3.val, s); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_r$2 = makeInt(_r$1); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					$24r = _r$2;
					$s = 11; case 11: return $24r;
    				/* } */ case 8:
    			case 5:
    		/* } */ case 4:
  &		_r$3 = fmt.Sprintf("invalid shift %v %s %d", new sliceType$1([x, new token.Token(op), new $Uint(s)])); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$panic(new $String(_r$3));
    		$s = -1; return $ifaceNil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Shift }; } $f.$24r = $24r; $f._1 = _1; $f._2 = _2; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f.op = op; $f.s = s; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.z = z; $f.z$1 = z$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Shift = Shift;
Shift
fmt.Sprintfgo/constant.Shiftgo/constant.i64toigo/constant.int64Valgo/constant.intValgo/constant.makeIntgo/constant.newIntgo/constant.sliceType$1go/constant.unknownValgo/token.Token go/constant.cmpZerogo/constantcmpZero cmpZero�w	cmpZero = function(x, op) {
		var _1, _r$1, op, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _r$1 = $f._r$1; op = $f.op; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		_1 = op;
    		if (_1 === (39)) {
  �			$s = -1; return x === 0;
    		} else if (_1 === (44)) {
  �			$s = -1; return !((x === 0));
    		} else if (_1 === (40)) {
  �			$s = -1; return x < 0;
    		} else if (_1 === (45)) {
  �			$s = -1; return x <= 0;
    		} else if (_1 === (41)) {
  �.			$s = -1; return x > 0;
    		} else if (_1 === (46)) {
  �N			$s = -1; return x >= 0;
    		}
  �`		_r$1 = fmt.Sprintf("invalid comparison %v %s 0", new sliceType$1([new $Int(x), new token.Token(op)])); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$panic(new $String(_r$1));
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: cmpZero }; } $f._1 = _1; $f._r$1 = _r$1; $f.op = op; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
cmpZerofmt.Sprintfgo/constant.cmpZerogo/constant.sliceType$1go/token.Token go/constant.Comparego/constantCompare Compare�	Compare = function(x_, op, y_) {
		var $24r, $24r$1, $24r$2, _1, _2, _3, _4, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, im, op, re, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x_, xs, y, y$1, y$2, y$3, y_, ys, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _1 = $f._1; _2 = $f._2; _3 = $f._3; _4 = $f._4; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; im = $f.im; op = $f.op; re = $f.re; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x_ = $f.x_; xs = $f.xs; y = $f.y; y$1 = $f.y$1; y$2 = $f.y$2; y$3 = $f.y$3; y_ = $f.y_; ys = $f.ys; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		_r$1 = match(x_, y_); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		x = _tuple[0];
		y = _tuple[1];
  ��		_ref = x;
		/* */ if ($assertType(_ref, unknownVal, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, boolVal, true)[1]) { $s = 3; continue; }
		/* */ if ($assertType(_ref, int64Val, true)[1]) { $s = 4; continue; }
		/* */ if ($assertType(_ref, intVal, true)[1]) { $s = 5; continue; }
		/* */ if ($assertType(_ref, ratVal, true)[1]) { $s = 6; continue; }
		/* */ if ($assertType(_ref, floatVal, true)[1]) { $s = 7; continue; }
		/* */ if ($assertType(_ref, complexVal, true)[1]) { $s = 8; continue; }
		/* */ if ($assertType(_ref, ptrType, true)[1]) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if ($assertType(_ref, unknownVal, true)[1]) { */ case 2:
    			x$1 = $clone(_ref.$val, unknownVal);
  ��			$s = -1; return false;
    		/* } else if ($assertType(_ref, boolVal, true)[1]) { */ case 3:
    			x$2 = _ref.$val;
  ��			y$1 = $assertType(y, boolVal);
    			_1 = op;
    			if (_1 === (39)) {
  �				$s = -1; return x$2 === y$1;
    			} else if (_1 === (44)) {
  �:				$s = -1; return !(x$2 === y$1);
    			}
    			$s = 10; continue;
    		/* } else if ($assertType(_ref, int64Val, true)[1]) { */ case 4:
    			x$3 = _ref.$val;
  �_			y$2 = $assertType(y, int64Val);
    			_2 = op;
    			if (_2 === (39)) {
  ��				$s = -1; return (x$3.$high === y$2.$high && x$3.$low === y$2.$low);
    			} else if (_2 === (44)) {
  ��				$s = -1; return !((x$3.$high === y$2.$high && x$3.$low === y$2.$low));
    			} else if (_2 === (40)) {
  ��				$s = -1; return (x$3.$high < y$2.$high || (x$3.$high === y$2.$high && x$3.$low < y$2.$low));
    			} else if (_2 === (45)) {
  ��				$s = -1; return (x$3.$high < y$2.$high || (x$3.$high === y$2.$high && x$3.$low <= y$2.$low));
    			} else if (_2 === (41)) {
  �				$s = -1; return (x$3.$high > y$2.$high || (x$3.$high === y$2.$high && x$3.$low > y$2.$low));
    			} else if (_2 === (46)) {
  �A				$s = -1; return (x$3.$high > y$2.$high || (x$3.$high === y$2.$high && x$3.$low >= y$2.$low));
    			}
    			$s = 10; continue;
    		/* } else if ($assertType(_ref, intVal, true)[1]) { */ case 5:
    			x$4 = $clone(_ref.$val, intVal);
  �d			_r$2 = cmpZero(x$4.val.Cmp($assertType(y, intVal).val), op); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			$24r = _r$2;
			$s = 12; case 12: return $24r;
    		/* } else if ($assertType(_ref, ratVal, true)[1]) { */ case 6:
    			x$5 = $clone(_ref.$val, ratVal);
  ��			_r$3 = x$5.val.Cmp($assertType(y, ratVal).val); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$4 = cmpZero(_r$3, op); /* */ $s = 14; case 14: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r$1 = _r$4;
			$s = 15; case 15: return $24r$1;
    		/* } else if ($assertType(_ref, floatVal, true)[1]) { */ case 7:
    			x$6 = $clone(_ref.$val, floatVal);
  ��			_r$5 = x$6.val.Cmp($assertType(y, floatVal).val); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_r$6 = cmpZero(_r$5, op); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			$24r$2 = _r$6;
			$s = 18; case 18: return $24r$2;
    		/* } else if ($assertType(_ref, complexVal, true)[1]) { */ case 8:
    			x$7 = $clone(_ref.$val, complexVal);
  �)			y$3 = $clone($assertType(y, complexVal), complexVal);
  �?			_r$7 = Compare(x$7.re, 39, y$3.re); /* */ $s = 19; case 19: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			re = _r$7;
  �f			_r$8 = Compare(x$7.im, 39, y$3.im); /* */ $s = 20; case 20: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			im = _r$8;
    			_3 = op;
    			if (_3 === (39)) {
  ��				$s = -1; return re && im;
    			} else if (_3 === (44)) {
  ��				$s = -1; return !re || !im;
    			}
    			$s = 10; continue;
    		/* } else if ($assertType(_ref, ptrType, true)[1]) { */ case 9:
    			x$8 = _ref.$val;
  ��			_r$9 = x$8.string(); /* */ $s = 21; case 21: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			xs = _r$9;
  �			_r$10 = $assertType(y, ptrType).string(); /* */ $s = 22; case 22: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			ys = _r$10;
    			_4 = op;
    			if (_4 === (39)) {
  �R				$s = -1; return xs === ys;
    			} else if (_4 === (44)) {
  �w				$s = -1; return !(xs === ys);
    			} else if (_4 === (40)) {
  ��				$s = -1; return xs < ys;
    			} else if (_4 === (45)) {
  ��				$s = -1; return xs <= ys;
    			} else if (_4 === (41)) {
  ��				$s = -1; return xs > ys;
    			} else if (_4 === (46)) {
  �					$s = -1; return xs >= ys;
    			}
    		/* } */ case 10:
  �"		_r$11 = fmt.Sprintf("invalid comparison %v %s %v", new sliceType$1([x_, new token.Token(op), y_])); /* */ $s = 23; case 23: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
		$panic(new $String(_r$11));
    		$s = -1; return false;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Compare }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._1 = _1; $f._2 = _2; $f._3 = _3; $f._4 = _4; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f.im = im; $f.op = op; $f.re = re; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x_ = x_; $f.xs = xs; $f.y = y; $f.y$1 = y$1; $f.y$2 = y$2; $f.y$3 = y$3; $f.y_ = y_; $f.ys = ys; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Compare = Compare;
Comparefmt.Sprintfgo/constant.Comparego/constant.boolValgo/constant.cmpZerogo/constant.complexValgo/constant.floatValgo/constant.int64Valgo/constant.intValgo/constant.matchgo/constant.ptrTypego/constant.ratValgo/constant.sliceType$1go/constant.string~go/constant.unknownValgo/token.Token ��{"Base":34403,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/constant/value.go","Base":1,"Size":34401,"Lines":[0,55,109,159,160,219,271,274,326,379,429,443,446,463,464,473,480,492,500,512,525,536,547,555,571,573,574,634,648,649,657,676,697,698,721,727,735,736,755,760,767,776,778,779,829,852,885,898,899,970,1030,1090,1153,1170,1171,1248,1329,1351,1352,1390,1409,1411,1412,1492,1511,1512,1553,1631,1648,1649,1727,1804,1883,1938,1939,1968,1971,2053,2136,2219,2300,2383,2470,2552,2629,2630,2637,2658,2675,2696,2767,2785,2799,2817,2820,2897,2978,3059,3144,3179,3181,3182,3231,3277,3325,3370,3415,3462,3509,3558,3559,3614,3687,3688,3760,3798,3840,3872,3913,3989,4063,4115,4124,4158,4203,4216,4220,4240,4243,4253,4255,4256,4322,4388,4452,4517,4563,4601,4614,4631,4687,4699,4711,4714,4724,4739,4740,4750,4752,4753,4800,4836,4849,4877,4911,4914,4924,4926,4927,4998,5066,5133,5199,5274,5295,5355,5363,5381,5397,5430,5448,5449,5460,5474,5491,5495,5509,5517,5520,5530,5543,5559,5562,5586,5588,5589,5666,5726,5788,5789,5851,5887,5899,5900,5958,5974,5994,5997,5998,6062,6122,6196,6228,6231,6232,6291,6347,6363,6385,6405,6453,6454,6512,6530,6594,6651,6652,6708,6723,6756,6757,6782,6811,6832,6890,6946,7001,7011,7017,7033,7043,7049,7052,7053,7091,7093,7094,7179,7180,7243,7306,7384,7447,7510,7511,7550,7562,7578,7604,7607,7626,7628,7629,7698,7699,7742,7816,7818,7819,7858,7897,7936,7975,8014,8053,8092,8131,8132,8183,8234,8301,8302,8382,8462,8546,8621,8700,8779,8850,8851,8884,8902,8931,8934,8952,8954,8955,8988,9002,9018,9051,9078,9097,9100,9144,9183,9185,9186,9223,9224,9261,9276,9296,9315,9318,9334,9356,9359,9424,9486,9506,9526,9528,9529,9568,9619,9641,9644,9671,9673,9674,9720,9765,9786,9812,9834,9904,9980,10049,10098,10112,10117,10162,10183,10188,10192,10218,10240,10243,10255,10257,10258,10312,10365,10388,10389,10461,10492,10525,10553,10555,10556,10632,10663,10699,10722,10737,10740,10763,10797,10799,10800,10874,10905,10942,10958,10973,10976,10997,11031,11033,11034,11114,11127,11128,11170,11219,11220,11262,11312,11313,11359,11419,11420,11462,11515,11516,11559,11593,11609,11637,11640,11678,11680,11681,11727,11763,11812,11848,11888,11910,11913,11935,11998,12001,12048,12050,12051,12121,12191,12255,12320,12390,12459,12475,12537,12540,12541,12555,12572,12630,12652,12656,12703,12723,12727,12728,12747,12795,12807,12811,12812,12830,12877,12934,12974,12979,12983,12984,13002,13031,13108,13142,13147,13151,13152,13172,13222,13246,13250,13251,13261,13314,13317,13318,13339,13341,13342,13422,13435,13438,13511,13569,13570,13652,13693,13722,13746,13761,13778,13796,13811,13821,13862,13865,13867,13868,13953,13991,14024,14048,14066,14086,14104,14116,14126,14169,14172,14174,14175,14252,14339,14385,14424,14448,14464,14488,14502,14570,14588,14606,14616,14657,14660,14662,14663,14742,14829,14875,14916,14940,14956,14983,14997,15039,15057,15075,15085,15126,15129,15131,15132,15201,15244,15268,15284,15302,15331,15345,15392,15421,15435,15460,15476,15504,15533,15551,15569,15579,15621,15624,15626,15627,15716,15807,15895,15933,15979,16022,16046,16062,16087,16116,16130,16177,16206,16220,16245,16261,16289,16318,16336,16354,16364,16406,16409,16411,16412,16490,16569,16617,16620,16660,16708,16738,16770,16813,16861,16890,16893,16925,16949,16964,16981,16999,17019,17035,17053,17067,17082,17096,17111,17127,17142,17152,17165,17168,17170,17171,17204,17207,17242,17277,17305,17335,17362,17389,17418,17447,17478,17481,17514,17538,17550,17570,17584,17610,17623,17644,17660,17680,17696,17716,17734,17756,17766,17788,17791,17793,17794,17853,17935,17972,17999,18023,18039,18056,18069,18087,18091,18128,18142,18166,18184,18195,18205,18246,18249,18251,18252,18326,18406,18465,18490,18514,18530,18541,18555,18568,18582,18594,18598,18609,18623,18645,18659,18681,18697,18719,18737,18770,18788,18841,18851,18893,18896,18898,18899,18979,19034,19035,19043,19084,19109,19151,19173,19175,19176,19242,19293,19322,19336,19360,19376,19392,19406,19414,19424,19465,19468,19469,19492,19536,19537,19545,19572,19606,19628,19639,19646,19650,19653,19676,19708,19714,19717,19718,19736,19738,19739,19815,19884,19925,19988,19989,19997,20013,20025,20052,20076,20107,20123,20130,20139,20148,20152,20155,20175,20196,20211,20217,20220,20243,20275,20281,20284,20285,20330,20332,20333,20402,20471,20538,20566,20592,20616,20640,20651,20665,20695,20711,20736,20762,20789,20793,20811,20819,20829,20876,20879,20900,20902,20903,20976,21045,21118,21146,21170,21194,21215,21229,21261,21277,21302,21328,21357,21361,21379,21387,21397,21444,21447,21468,21470,21471,21514,21551,21594,21625,21644,21662,21673,21715,21752,21762,21809,21812,21814,21815,21893,21936,21963,21987,22041,22052,22070,22084,22094,22136,22139,22141,22142,22225,22268,22295,22319,22337,22348,22390,22411,22429,22443,22453,22495,22498,22500,22501,22581,22604,22605,22674,22710,22738,22762,22786,22797,22798,22812,22833,22864,22868,22869,22885,22922,22990,23058,23083,23100,23149,23171,23176,23177,23232,23285,23321,23322,23371,23390,23417,23418,23451,23476,23492,23537,23559,23564,23565,23596,23627,23643,23688,23710,23715,23719,23720,23738,23782,23802,23806,23809,23810,23831,23833,23834,23907,23943,23973,23997,24013,24059,24073,24096,24114,24118,24135,24159,24170,24188,24211,24235,24239,24242,24263,24265,24266,24345,24381,24413,24437,24479,24496,24514,24525,24528,24549,24551,24552,24632,24646,24647,24710,24739,24753,24795,24797,24798,24861,24890,24904,24946,24948,24949,25009,25059,25120,25163,25166,25223,25236,25253,25273,25340,25352,25356,25357,25374,25399,25418,25430,25447,25471,25499,25504,25558,25573,25612,25627,25666,25683,25726,25745,25782,25819,25849,25853,25854,25871,25887,25912,25931,25943,25960,25991,26006,26022,26033,26047,26051,26108,26166,26196,26212,26283,26287,26307,26308,26325,26350,26369,26381,26397,26410,26414,26417,26418,26425,26484,26486,26487,26511,26530,26540,26592,26667,26679,26697,26708,26735,26746,26762,26773,26787,26798,26812,26823,26839,26850,26868,26879,26882,26884,26885,26951,27016,27084,27138,27141,27179,27215,27230,27252,27267,27289,27292,27305,27307,27308,27348,27378,27417,27484,27527,27528,27547,27561,27587,27604,27628,27632,27646,27672,27689,27713,27728,27750,27754,27770,27796,27813,27837,27852,27874,27889,27911,27915,27933,27953,27956,27957,28032,28106,28119,28121,28122,28186,28251,28298,28360,28381,28384,28457,28531,28578,28581,28639,28662,28663,28687,28705,28716,28717,28732,28751,28765,28784,28801,28819,28836,28840,28841,28857,28873,28900,28914,28928,28946,28981,29044,29049,29062,29080,29115,29178,29183,29196,29214,29249,29312,29317,29330,29348,29384,29435,29448,29466,29479,29497,29510,29527,29540,29558,29571,29593,29607,29618,29632,29636,29657,29658,29672,29685,29707,29723,29737,29755,29770,29788,29803,29821,29836,29854,29896,29947,29962,29980,29995,30013,30028,30045,30059,30077,30092,30114,30132,30143,30157,30161,30181,30182,30196,30209,30231,30247,30261,30279,30294,30312,30327,30345,30360,30378,30393,30404,30418,30422,30442,30443,30459,30472,30496,30514,30528,30546,30561,30579,30594,30612,30627,30645,30660,30671,30685,30689,30711,30712,30730,30752,30773,30794,30813,30827,30845,30866,30884,30902,30920,30941,30959,30977,30995,31020,31039,31058,31077,31096,31116,31136,31154,31201,31220,31239,31258,31277,31296,31315,31335,31355,31374,31394,31413,31424,31438,31442,31471,31472,31490,31513,31559,31563,31566,31567,31574,31643,31645,31646,31710,31774,31838,31902,31903,31962,32021,32080,32083,32135,32159,32177,32188,32189,32205,32219,32231,32235,32249,32267,32289,32320,32338,32355,32359,32360,32374,32388,32400,32404,32420,32434,32452,32487,32505,32540,32544,32547,32548,32604,32606,32607,32650,32663,32680,32696,32713,32729,32746,32761,32778,32794,32811,32826,32843,32859,32862,32919,32921,32922,32978,33030,33082,33092,33095,33151,33174,33175,33199,33217,33232,33233,33248,33267,33281,33299,33316,33334,33351,33355,33356,33372,33392,33406,33424,33441,33459,33476,33494,33510,33528,33545,33563,33579,33597,33614,33618,33619,33633,33681,33682,33696,33744,33745,33761,33811,33812,33830,33852,33891,33930,33944,33962,33981,33999,34020,34024,34025,34043,34062,34094,34108,34126,34145,34163,34182,34200,34218,34236,34255,34273,34291,34309,34328,34332,34335,34336,34399],"Infos":null}]}
 