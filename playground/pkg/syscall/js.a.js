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
GoLinkname�� Implementation�� 	Reference��   ��*��
syscall/jsjsgithub.com/gopherjs/gopherjs/jsreflect�Ii ��dstsrcValue ErroreReleasefFuncfnthisargsStringtTypeisObjectvObjectgithub.com/gopherjs/gopherjs/jsinited_internalBoolCallmFloatGetpIndexiInt
InstanceOfInvokeJSValueLengthNewSetxSetIndexTruthyIsNullIsUndefinedIsNaNDeleteEqualwMethod
ValueErrorobjectokeyvaluenameInt64Uint64	InterfaceUnsafejsCopyBytesToGoCopyBytesToJSFuncOfGlobalNullTypeBooleanTypeFunctionTypeNull
TypeNumber
TypeObject
TypeString
TypeSymbolTypeUndefined	UndefinedValueOfWrapper F     "  F   " 3   " T C  K   " !T \  d  "   )" .r t F  &x d F   "F   " <T  3 :�   A :�   C �C �C �C �C �C �C �
C � F   " LS�   � J�  s   z� �  �  �  �    T � | J"  � � J"    � J" � .� " � J"   � J" � "  � J" � "  � J"   � J" :"    � J" .� " � J"  " � J"   � J" .� " � J" � ��   � J" � ��   3 J"   � J"    < J"  � � J"    � J"    � J"    � J" �   � J" �"    �  <�  ��T �  �    F  �� "   �  "T ��S �� ���S  ����������������������T � � �� � �  � �� � ��   � �� �   � ��   � �� � �  � �� � ��   � �� � .� � � �� .� � � �� .� � � ��    3 ��   � ��   � ��   � ��  
 � ��   � ��  � � ��  � ��.!G�f�q�x<��������������������������S� L�9 js4	js = $packages["github.com/gopherjs/gopherjs/js"];
��    		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  TypeV	Type = $pkg.Type = $newType(4, $kindInt, "js.Type", true, "syscall/js", true, null);
��	Type.methods = [{prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "isObject", name: "isObject", pkg: "syscall/js", typ: $funcType([], [$Bool], false)}];
Typesyscall/js.Type  Func�	Func = $pkg.Func = $newType(0, $kindStruct, "js.Func", true, "syscall/js", true, function(Value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Value = new Value.ptr(null, false, arrayType.zero());
			return;
		}
		this.Value = Value_;
	});
^	Func.methods = [{prop: "Release", name: "Release", pkg: "", typ: $funcType([], [], false)}];
g	Func.init("", [{prop: "Value", name: "Value", embedded: true, exported: true, typ: Value, tag: ""}]);
Funcsyscall/js.Funcsyscall/js.Valuesyscall/js.arrayType  Error�	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", true, "syscall/js", true, function(Value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Value = new Value.ptr(null, false, arrayType.zero());
			return;
		}
		this.Value = Value_;
	});
b	Error.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
h	Error.init("", [{prop: "Value", name: "Value", embedded: true, exported: true, typ: Value, tag: ""}]);
Errorsyscall/js.Errorsyscall/js.Valuesyscall/js.arrayType  Value�@	Value = $pkg.Value = $newType(0, $kindStruct, "js.Value", true, "syscall/js", true, function(v_, inited_, _$2_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.v = null;
			this.inited = false;
			this._$2 = arrayType.zero();
			return;
		}
		this.v = v_;
		this.inited = inited_;
		this._$2 = _$2_;
	});
�>	Value.methods = [{prop: "internal", name: "internal", pkg: "syscall/js", typ: $funcType([], [ptrType$1], false)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType$1], [Value], true)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [Value], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [Value], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "InstanceOf", name: "InstanceOf", pkg: "", typ: $funcType([Value], [$Bool], false)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType$1], [Value], true)}, {prop: "JSValue", name: "JSValue", pkg: "", typ: $funcType([], [Value], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType$1], [Value], true)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Truthy", name: "Truthy", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Type", name: "Type", pkg: "", typ: $funcType([], [Type], false)}, {prop: "IsNull", name: "IsNull", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "IsUndefined", name: "IsUndefined", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "IsNaN", name: "IsNaN", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([Value], [$Bool], false)}];
�	Value.init("syscall/js", [{prop: "v", name: "v", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "inited", name: "inited", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "_$2", name: "_", embedded: false, exported: false, typ: arrayType, tag: ""}]);
Value&github.com/gopherjs/gopherjs/js.Objectsyscall/js.Typesyscall/js.Valuesyscall/js.arrayTypesyscall/js.ptrType$1syscall/js.sliceType$1  
ValueError�	ValueError = $pkg.ValueError = $newType(0, $kindStruct, "js.ValueError", true, "syscall/js", true, function(Method_, Type_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Method = "";
			this.Type = 0;
			return;
		}
		this.Method = Method_;
		this.Type = Type_;
	});
f	ptrType$2.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	ValueError.init("", [{prop: "Method", name: "Method", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Type", name: "Type", embedded: false, exported: true, typ: Type, tag: ""}]);

ValueErrorsyscall/js.Typesyscall/js.ValueErrorsyscall/js.ptrType$2  Wrappere	Wrapper = $pkg.Wrapper = $newType(8, $kindInterface, "js.Wrapper", true, "syscall/js", true, null);
b	Wrapper.init([{prop: "JSValue", name: "JSValue", pkg: "", typ: $funcType([], [Value], false)}]);
Wrappersyscall/js.Valuesyscall/js.Wrapper  funcType&	funcType = $funcType([], [], false);
funcType  	arrayType&	arrayType = $arrayType(funcType, 0);
	arrayTypesyscall/js.funcType  	sliceType 	sliceType = $sliceType(Value);
	sliceTypesyscall/js.Value  mapType/	mapType = $mapType($String, $emptyInterface);
mapType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  ptrType	ptrType = $ptrType(js.Error);
ptrType%github.com/gopherjs/gopherjs/js.Error  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  	ptrType$1"	ptrType$1 = $ptrType(js.Object);
	ptrType$1&github.com/gopherjs/gopherjs/js.Object  	ptrType$2#	ptrType$2 = $ptrType(ValueError);
	ptrType$2syscall/js.ValueError  id		id = null;
idsyscall/js.id  
instanceOf		instanceOf = null;

instanceOfsyscall/js.instanceOf  getValueType		getValueType = null;
getValueTypesyscall/js.getValueType (syscall/js.Type).String ��	Type.prototype.String = function() {
		var _1, t;
		t = this.$val;
    		_1 = t;
    		if (_1 === (0)) {
  ;			return "undefined";
    		} else if (_1 === (1)) {
  `			return "null";
    		} else if (_1 === (2)) {
  �			return "boolean";
    		} else if (_1 === (3)) {
  �			return "number";
    		} else if (_1 === (4)) {
  �			return "string";
    		} else if (_1 === (5)) {
  �			return "symbol";
    		} else if (_1 === (6)) {
  			return "object";
    		} else if (_1 === (7)) {
  :			return "function";
    		} else {
  X			$panic(new $String("bad type"));
    		}
    	};
	$ptrType(Type).prototype.String = function() { return new Type(this.$get()).String(); };
Typesyscall/js.Type (syscall/js.Type).isObject ��	Type.prototype.isObject = function() {
		var t;
		t = this.$val;
  �		return (t === 6) || (t === 7);
    	};
	$ptrType(Type).prototype.isObject = function() { return new Type(this.$get()).isObject(); };
Type	isObject~syscall/js.Type syscall/js.Global
syscall/jsGlobal Global]	Global = function() {
  �		return objectToValue($global);
    	};
	$pkg.Global = Global;
Globalsyscall/js.Globalsyscall/js.objectToValue syscall/js.Null
syscall/jsNull NullT	Null = function() {
  		return objectToValue(null);
    	};
	$pkg.Null = Null;
Nullsyscall/js.Nullsyscall/js.objectToValue syscall/js.Undefined
syscall/js	Undefined 	Undefinedh	Undefined = function() {
  F		return objectToValue(undefined);
    	};
	$pkg.Undefined = Undefined;
	Undefinedsyscall/js.Undefinedsyscall/js.objectToValue (syscall/js.Func).Release ��	Func.ptr.prototype.Release = function() {
		var f;
		f = this;
  �		$exportedFunctions = ($parseInt($exportedFunctions) >> 0) - 1 >> 0;
  �		Value.copy(f.Value, Null());
    	};
	Func.prototype.Release = function() { return this.$val.Release(); };
Funcsyscall/js.Funcsyscall/js.Nullsyscall/js.Value syscall/js.FuncOf
syscall/jsFuncOf FuncOf�	FuncOf = function(fn) {
		var fn;
  �		$exportedFunctions = ($parseInt($exportedFunctions) >> 0) + 1 >> 0;
  '		return new Func.ptr($clone(objectToValue(js.MakeFunc((function $b(this$1, args) {
			var $24r, _i, _r, _ref, a, args, i, this$1, vargs, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _ref = $f._ref; a = $f.a; args = $f.args; i = $f.i; this$1 = $f.this$1; vargs = $f.vargs; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			vargs = $makeSlice(sliceType, args.$length);
  �			_ref = args;
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				i = _i;
				a = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �				Value.copy(((i < 0 || i >= vargs.$length) ? ($throwRuntimeError("index out of range"), undefined) : vargs.$array[vargs.$offset + i]), objectToValue(a));
    				_i++;
			}
  �			_r = fn($clone(objectToValue(this$1), Value), vargs); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 2; case 2: return $24r;
    			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._ref = _ref; $f.a = a; $f.args = args; $f.i = i; $f.this$1 = this$1; $f.vargs = vargs; $f.$s = $s; $f.$r = $r; return $f;
		}))), Value));
    	};
	$pkg.FuncOf = FuncOf;
FuncOf(github.com/gopherjs/gopherjs/js.MakeFuncsyscall/js.Funcsyscall/js.FuncOfsyscall/js.Valuesyscall/js.arrayTypesyscall/js.funcTypesyscall/js.objectToValuesyscall/js.sliceType (syscall/js.Error).Error ��	Error.ptr.prototype.Error = function() {
		var e;
		e = this;
  i		return "JavaScript error: " + $clone($clone(e.Value, Value).Get("message"), Value).String();
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Errorsyscall/js.Errorsyscall/js.Value syscall/js.objectToValue
syscall/jsobjectToValue objectToValue��	objectToValue = function(obj) {
		var obj;
    		if (obj === undefined) {
  �			return new Value.ptr(null, false, arrayType.zero());
    		}
  �		return new Value.ptr(obj, true, arrayType.zero());
    	};
objectToValuesyscall/js.Valuesyscall/js.arrayTypesyscall/js.objectToValue syscall/js.init
syscall/jsinit init�O	init = function() {
    		if (!($global === null)) {
  m			id = $global.eval($externalize("(function(x) { return x; })", $String));
  �			instanceOf = $global.eval($externalize("(function(x, y) { return x instanceof y; })", $String));
  �			getValueType = $global.eval($externalize("(function(x) {\n  if (typeof(x) === \"undefined\") {\n    return 0; // TypeUndefined\n  }\n  if (x === null) {\n    return 1; // TypeNull\n  }\n  if (typeof(x) === \"boolean\") {\n    return 2; // TypeBoolean\n  }\n  if (typeof(x) === \"number\") {\n    return 3; // TypeNumber\n  }\n  if (typeof(x) === \"string\") {\n    return 4; // TypeString\n  }\n  if (typeof(x) === \"symbol\") {\n    return 5; // TypeSymbol\n  }\n  if (typeof(x) === \"function\") {\n    return 7; // TypeFunction\n  }\n  return 6; // TypeObject\n})", $String));
    		}
    	};
    		init();
syscall/js.getValueTypesyscall/js.idsyscall/js.initsyscall/js.instanceOf syscall/js.ValueOf
syscall/jsValueOf ValueOf��	ValueOf = function(x) {
		var $24r, _r, _r$1, _ref, x, x$1, x$2, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  =		_ref = x;
		/* */ if ($assertType(_ref, Wrapper, true)[1]) { $s = 1; continue; }
		/* */ if ($assertType(_ref, Value, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, Func, true)[1]) { $s = 3; continue; }
		/* */ if (_ref === $ifaceNil) { $s = 4; continue; }
		/* */ if ($assertType(_ref, $Bool, true)[1] || $assertType(_ref, $Int, true)[1] || $assertType(_ref, $Int8, true)[1] || $assertType(_ref, $Int16, true)[1] || $assertType(_ref, $Int32, true)[1] || $assertType(_ref, $Int64, true)[1] || $assertType(_ref, $Uint, true)[1] || $assertType(_ref, $Uint8, true)[1] || $assertType(_ref, $Uint16, true)[1] || $assertType(_ref, $Uint32, true)[1] || $assertType(_ref, $Uint64, true)[1] || $assertType(_ref, $Float32, true)[1] || $assertType(_ref, $Float64, true)[1] || $assertType(_ref, $UnsafePointer, true)[1] || $assertType(_ref, $String, true)[1] || $assertType(_ref, mapType, true)[1] || $assertType(_ref, sliceType$1, true)[1]) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if ($assertType(_ref, Wrapper, true)[1]) { */ case 1:
    			x$1 = _ref;
  e			_r = x$1.JSValue(); /* */ $s = 8; case 8: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 9; case 9: return $24r;
    		/* } else if ($assertType(_ref, Value, true)[1]) { */ case 2:
    			x$2 = $clone(_ref.$val, Value);
  �			$s = -1; return x$2;
    		/* } else if ($assertType(_ref, Func, true)[1]) { */ case 3:
    			x$3 = $clone(_ref.$val, Func);
  �			$s = -1; return x$3.Value;
    		/* } else if (_ref === $ifaceNil) { */ case 4:
    			x$4 = _ref;
  �			$s = -1; return Null();
    		/* } else if ($assertType(_ref, $Bool, true)[1] || $assertType(_ref, $Int, true)[1] || $assertType(_ref, $Int8, true)[1] || $assertType(_ref, $Int16, true)[1] || $assertType(_ref, $Int32, true)[1] || $assertType(_ref, $Int64, true)[1] || $assertType(_ref, $Uint, true)[1] || $assertType(_ref, $Uint8, true)[1] || $assertType(_ref, $Uint16, true)[1] || $assertType(_ref, $Uint32, true)[1] || $assertType(_ref, $Uint64, true)[1] || $assertType(_ref, $Float32, true)[1] || $assertType(_ref, $Float64, true)[1] || $assertType(_ref, $UnsafePointer, true)[1] || $assertType(_ref, $String, true)[1] || $assertType(_ref, mapType, true)[1] || $assertType(_ref, sliceType$1, true)[1]) { */ case 5:
    			x$5 = _ref;
  l			$s = -1; return objectToValue(id($externalize(x$5, $emptyInterface)));
    		/* } else { */ case 6:
    			x$6 = _ref;
  �			_r$1 = reflect.TypeOf(x$6).String(); /* */ $s = 10; case 10: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$panic(new $String("invalid arg: " + _r$1));
    		/* } */ case 7:
    		$s = -1; return new Value.ptr(null, false, arrayType.zero());
		/* */ } return; } if ($f === undefined) { $f = { $blk: ValueOf }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ValueOf = ValueOf;
ValueOfreflect.TypeOfsyscall/js.Funcsyscall/js.Nullsyscall/js.Valuesyscall/js.ValueOfsyscall/js.Wrappersyscall/js.arrayTypesyscall/js.idsyscall/js.mapTypesyscall/js.objectToValuesyscall/js.sliceType$1 (syscall/js.Value).internal ��	Value.ptr.prototype.internal = function() {
		var v;
		v = this;
    		if (!v.inited) {
  			return undefined;
    		}
  &		return v.v;
    	};
	Value.prototype.internal = function() { return this.$val.internal(); };
Value	internal~syscall/js.Value (syscall/js.Value).Bool �G	Value.ptr.prototype.Bool = function() {
		var v, vType;
		v = this;
  U		vType = $clone(v, Value).Type();
    		if (!((vType === 2))) {
  �			$panic(new ValueError.ptr("Value.Bool", vType));
    		}
  �		return !!($clone(v, Value).internal());
    	};
	Value.prototype.Bool = function() { return this.$val.Bool(); };
Valuesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~ syscall/js.convertArgs
syscall/jsconvertArgs convertArgs��	convertArgs = function(args) {
		var _i, _r, _ref, arg, args, newArgs, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; arg = $f.arg; args = $f.args; newArgs = $f.newArgs; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  H		newArgs = new sliceType$1([]);
  d		_ref = args;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			arg = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_r = ValueOf(arg); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			v = $clone(_r, Value);
  �			newArgs = $append(newArgs, new $jsObjectPtr($clone(v, Value).internal()));
    			_i++;
		$s = 1; continue;
		case 2:
  �		$s = -1; return newArgs;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: convertArgs }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f.arg = arg; $f.args = args; $f.newArgs = newArgs; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
convertArgssyscall/js.Valuesyscall/js.ValueOfsyscall/js.convertArgssyscall/js.internal~syscall/js.sliceType$1 (syscall/js.Value).Call �B	Value.ptr.prototype.Call = function(m, args) {
		var $24r, _r, _r$1, args, m, obj, propType, v, vType, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; args = $f.args; m = $f.m; obj = $f.obj; propType = $f.propType; v = $f.v; vType = $f.vType; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  		vType = $clone(v, Value).Type();
    		if (!((vType === 6)) && !((vType === 7))) {
  V			$panic(new ValueError.ptr("Value.Call", vType));
    		}
  �		propType = $clone($clone(v, Value).Get(m), Value).Type();
    		if (!((propType === 7))) {
  �			$panic(new $String("js: Value.Call: property " + m + " is not a function, got " + new Type(propType).String()));
    		}
  		_r = convertArgs(args); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = objectToValue((obj = $clone(v, Value).internal(), obj[$externalize(m, $String)].apply(obj, $externalize(_r, sliceType$1)))); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Call }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.args = args; $f.m = m; $f.obj = obj; $f.propType = propType; $f.v = v; $f.vType = vType; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Call = function(m, args) { return this.$val.Call(m, args); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.convertArgssyscall/js.internal~syscall/js.objectToValuesyscall/js.sliceType$1 (syscall/js.Value).Float �T	Value.ptr.prototype.Float = function() {
		var v, vType;
		v = this;
  �		vType = $clone(v, Value).Type();
    		if (!((vType === 3))) {
  �			$panic(new ValueError.ptr("Value.Float", vType));
    		}
  �		return $parseFloat($clone(v, Value).internal());
    	};
	Value.prototype.Float = function() { return this.$val.Float(); };
Valuesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~ (syscall/js.Value).Get �y	Value.ptr.prototype.Get = function(p) {
		var p, v, vType;
		v = this;
  '		vType = $clone(v, Value).Type();
    		if (!new Type(vType).isObject()) {
  P			$panic(new ValueError.ptr("Value.Get", vType));
    		}
  {		return objectToValue($clone(v, Value).internal()[$externalize(p, $String)]);
    	};
	Value.prototype.Get = function(p) { return this.$val.Get(p); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~syscall/js.isObject~syscall/js.objectToValue (syscall/js.Value).Index �j	Value.ptr.prototype.Index = function(i) {
		var i, v, vType;
		v = this;
  �		vType = $clone(v, Value).Type();
    		if (!new Type(vType).isObject()) {
  �			$panic(new ValueError.ptr("Value.Index", vType));
    		}
  &		return objectToValue($clone(v, Value).internal()[i]);
    	};
	Value.prototype.Index = function(i) { return this.$val.Index(i); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~syscall/js.isObject~syscall/js.objectToValue (syscall/js.Value).Int �O	Value.ptr.prototype.Int = function() {
		var v, vType;
		v = this;
  t		vType = $clone(v, Value).Type();
    		if (!((vType === 3))) {
  �			$panic(new ValueError.ptr("Value.Int", vType));
    		}
  �		return $parseInt($clone(v, Value).internal()) >> 0;
    	};
	Value.prototype.Int = function() { return this.$val.Int(); };
Valuesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~ (syscall/js.Value).InstanceOf ��	Value.ptr.prototype.InstanceOf = function(t) {
		var t, v;
		v = this;
  		return !!(instanceOf($clone(v, Value).internal(), $clone(t, Value).internal()));
    	};
	Value.prototype.InstanceOf = function(t) { return this.$val.InstanceOf(t); };
Valuesyscall/js.Valuesyscall/js.instanceOfsyscall/js.internal~ (syscall/js.Value).Invoke ��	Value.ptr.prototype.Invoke = function(args) {
		var $24r, _r, _r$1, args, v, vType, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; args = $f.args; v = $f.v; vType = $f.vType; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  �		vType = $clone(v, Value).Type();
    		if (!((vType === 7))) {
  �			$panic(new ValueError.ptr("Value.Invoke", vType));
    		}
  �		_r = convertArgs(args); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = objectToValue($clone(v, Value).internal().apply(undefined, $externalize(_r, sliceType$1))); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Invoke }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.args = args; $f.v = v; $f.vType = vType; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
Valuesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.convertArgssyscall/js.internal~syscall/js.objectToValuesyscall/js.sliceType$1 (syscall/js.Value).JSValue ��	Value.ptr.prototype.JSValue = function() {
		var v;
		v = this;
  K		return v;
    	};
	Value.prototype.JSValue = function() { return this.$val.JSValue(); };
Valuesyscall/js.Value (syscall/js.Value).Length ��	Value.ptr.prototype.Length = function() {
		var v;
		v = this;
  v		return $parseInt($clone(v, Value).internal().length);
    	};
	Value.prototype.Length = function() { return this.$val.Length(); };
Valuesyscall/js.Valuesyscall/js.internal~ (syscall/js.Value).New ��	Value.ptr.prototype.New = function(args) {
		var $24r, _r, _r$1, args, v, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; args = $f.args; v = $f.v; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		v = [v];
		v[0] = this;
  �		$deferred.push([(function(v) { return function() {
			var _tuple, err, jsErr, ok, vType, x;
  �			err = $recover();
    			if ($interfaceIsEqual(err, $ifaceNil)) {
  �				return;
    			}
  			vType = $clone(v[0], Value).Type();
    			if (!((vType === 7))) {
  l				$panic(new ValueError.ptr("Value.New", vType));
    			}
  �			_tuple = $assertType(err, ptrType, true);
			jsErr = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  �				$panic((x = new Error.ptr($clone(objectToValue(jsErr.Object), Value)), new x.constructor.elem(x)));
    			}
  �			$panic(err);
    		}; })(v), []]);
  		_r = convertArgs(args); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = objectToValue(new ($global.Function.prototype.bind.apply($clone(v[0], Value).internal(), [undefined].concat($externalize(_r, sliceType$1))))); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return new Value.ptr(null, false, arrayType.zero()); } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Value.ptr.prototype.New }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.args = args; $f.v = v; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Value.prototype.New = function(args) { return this.$val.New(args); };
Value
%github.com/gopherjs/gopherjs/js.Errorsyscall/js.Errorsyscall/js.Valuesyscall/js.ValueErrorsyscall/js.arrayTypesyscall/js.convertArgssyscall/js.internal~syscall/js.objectToValuesyscall/js.ptrTypesyscall/js.sliceType$1 (syscall/js.Value).Set �|	Value.ptr.prototype.Set = function(p, x) {
		var _r, p, v, vType, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; p = $f.p; v = $f.v; vType = $f.vType; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  x		vType = $clone(v, Value).Type();
    		if (!new Type(vType).isObject()) {
  �			$panic(new ValueError.ptr("Value.Set", vType));
    		}
  �		_r = convertArgs(new sliceType$1([x])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$clone(v, Value).internal()[$externalize(p, $String)] = $externalize((x$1 = _r, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0])), $emptyInterface);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.Set }; } $f._r = _r; $f.p = p; $f.v = v; $f.vType = vType; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.Set = function(p, x) { return this.$val.Set(p, x); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.convertArgssyscall/js.internal~syscall/js.isObject~syscall/js.sliceType$1 (syscall/js.Value).SetIndex �~	Value.ptr.prototype.SetIndex = function(i, x) {
		var _r, i, v, vType, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; i = $f.i; v = $f.v; vType = $f.vType; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  *		vType = $clone(v, Value).Type();
    		if (!new Type(vType).isObject()) {
  S			$panic(new ValueError.ptr("Value.SetIndex", vType));
    		}
  �		_r = convertArgs(new sliceType$1([x])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$clone(v, Value).internal()[i] = $externalize((x$1 = _r, (0 >= x$1.$length ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + 0])), $emptyInterface);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Value.ptr.prototype.SetIndex }; } $f._r = _r; $f.i = i; $f.v = v; $f.vType = vType; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Value.prototype.SetIndex = function(i, x) { return this.$val.SetIndex(i, x); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.convertArgssyscall/js.internal~syscall/js.isObject~syscall/js.sliceType$1 (syscall/js.Value).String �n	Value.ptr.prototype.String = function() {
		var _1, v;
		v = this;
    		_1 = $clone(v, Value).Type();
    		if (_1 === (4)) {
  :			return $internalize($clone(v, Value).internal(), $String);
    		} else if (_1 === (0)) {
  n			return "<undefined>";
    		} else if (_1 === (1)) {
  �			return "<null>";
    		} else if (_1 === (2)) {
  �			return "<boolean: " + $internalize($clone(v, Value).internal(), $String) + ">";
    		} else if (_1 === (3)) {
   			return "<number: " + $internalize($clone(v, Value).internal(), $String) + ">";
    		} else if (_1 === (5)) {
  E			return "<symbol>";
    		} else if (_1 === (6)) {
  k			return "<object>";
    		} else if (_1 === (7)) {
  �			return "<function>";
    		} else {
  �			$panic(new $String("bad type"));
    		}
    	};
	Value.prototype.String = function() { return this.$val.String(); };
Valuesyscall/js.Valuesyscall/js.internal~ (syscall/js.Value).Truthy ��	Value.ptr.prototype.Truthy = function() {
		var v;
		v = this;
  �		return !!($clone(v, Value).internal());
    	};
	Value.prototype.Truthy = function() { return this.$val.Truthy(); };
Valuesyscall/js.Valuesyscall/js.internal~ (syscall/js.Value).Type ��	Value.ptr.prototype.Type = function() {
		var v;
		v = this;
  '		return ((($parseInt(getValueType($clone(v, Value).internal())) >> 0) >> 0));
    	};
	Value.prototype.Type = function() { return this.$val.Type(); };
Valuesyscall/js.Valuesyscall/js.getValueTypesyscall/js.internal~ (syscall/js.Value).IsNull ��	Value.ptr.prototype.IsNull = function() {
		var v;
		v = this;
  		return $clone(v, Value).Type() === 1;
    	};
	Value.prototype.IsNull = function() { return this.$val.IsNull(); };
Valuesyscall/js.Value (syscall/js.Value).IsUndefined ��	Value.ptr.prototype.IsUndefined = function() {
		var v;
		v = this;
  �		return !v.inited;
    	};
	Value.prototype.IsUndefined = function() { return this.$val.IsUndefined(); };
Valuesyscall/js.Value (syscall/js.Value).IsNaN ��	Value.ptr.prototype.IsNaN = function() {
		var v;
		v = this;
  �		return !!($global.isNaN($clone(v, Value).internal()));
    	};
	Value.prototype.IsNaN = function() { return this.$val.IsNaN(); };
Valuesyscall/js.Valuesyscall/js.internal~ (syscall/js.Value).Delete �v	Value.ptr.prototype.Delete = function(p) {
		var p, v, vType;
		v = this;
  �		vType = $clone(v, Value).Type();
    		if (!new Type(vType).isObject()) {
  �			$panic(new ValueError.ptr("Value.Delete", vType));
    		}
  		delete $clone(v, Value).internal()[$externalize(p, $String)];
    	};
	Value.prototype.Delete = function(p) { return this.$val.Delete(p); };
Valuesyscall/js.Typesyscall/js.Valuesyscall/js.ValueErrorsyscall/js.internal~syscall/js.isObject~ (syscall/js.Value).Equal ��	Value.ptr.prototype.Equal = function(w) {
		var v, w;
		v = this;
  P		return $clone(v, Value).internal() === $clone(w, Value).internal();
    	};
	Value.prototype.Equal = function(w) { return this.$val.Equal(w); };
Valuesyscall/js.Valuesyscall/js.internal~ (*syscall/js.ValueError).Error ��	ValueError.ptr.prototype.Error = function() {
		var e;
		e = this;
  �		return "syscall/js: call of " + e.Method + " on " + new Type(e.Type).String();
    	};
	ValueError.prototype.Error = function() { return this.$val.Error(); };

ValueErrorsyscall/js.Typesyscall/js.ValueError syscall/js.CopyBytesToGo
syscall/jsCopyBytesToGo CopyBytesToGo�V	CopyBytesToGo = function(dst, src) {
		var dlen, dst, src, vlen;
  Q		vlen = $parseInt(src.v.length);
  l		dlen = dst.$length;
    		if (dlen < vlen) {
  �			vlen = dlen;
    		}
  �		$copySlice(dst, $assertType($internalize(src.v, $emptyInterface), sliceType$2));
  �		return vlen;
    	};
	$pkg.CopyBytesToGo = CopyBytesToGo;
CopyBytesToGosyscall/js.CopyBytesToGosyscall/js.sliceType$2 syscall/js.CopyBytesToJS
syscall/jsCopyBytesToJS CopyBytesToJS��	CopyBytesToJS = function(dst, src) {
		var _tuple, dst, dt, ok, src;
   �		_tuple = $assertType($internalize(dst.v, $emptyInterface), sliceType$2, true);
		dt = _tuple[0];
		ok = _tuple[1];
    		if (!ok) {
  !			$panic(new $String("syscall/js: CopyBytesToJS: expected dst to be an Uint8Array"));
    		}
  !U		return $copySlice(dt, src);
    	};
	$pkg.CopyBytesToJS = CopyBytesToJS;
CopyBytesToJSsyscall/js.CopyBytesToJSsyscall/js.sliceType$2 ��{"Base":8557,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/syscall/js/js.go","Base":1,"Size":8555,"Lines":[0,14,27,28,39,40,49,60,70,71,106,108,109,123,124,132,159,169,182,194,206,218,230,244,246,247,279,291,312,333,349,365,384,403,421,439,457,475,493,511,529,547,567,587,597,617,620,622,623,655,700,702,703,725,758,760,761,781,808,810,811,836,872,874,875,894,901,903,904,930,1012,1030,1032,1033,1099,1179,1235,1317,1331,1421,1458,1486,1518,1523,1564,1571,1574,1576,1577,1597,1604,1606,1607,1639,1696,1698,1699,1719,1733,1734,1835,1848,1849,1902,1904,1905,1948,1974,1991,1994,2030,2032,2033,2039,2064,2089,2114,2116,2117,2131,2154,2215,2300,2356,2391,2422,2426,2446,2472,2476,2509,2538,2542,2574,2602,2606,2638,2666,2670,2702,2730,2734,2768,2798,2802,2828,2833,2836,2838,2839,2875,2899,2914,2935,2948,2959,2971,2988,2999,3015,3177,3214,3224,3278,3281,3283,3284,3323,3339,3361,3364,3376,3378,3379,3408,3454,3496,3499,3527,3529,3530,3600,3654,3682,3710,3730,3772,3775,3791,3793,3794,3853,3923,3965,3968,4028,4118,4121,4190,4192,4193,4226,4271,4314,4317,4346,4348,4349,4386,4429,4470,4473,4516,4518,4519,4555,4598,4641,4644,4689,4691,4692,4719,4764,4805,4808,4835,4837,4838,4880,4941,4943,4944,4995,5042,5086,5089,5157,5159,5160,5193,5203,5205,5206,5236,5266,5268,5269,5317,5333,5352,5370,5380,5384,5480,5522,5526,5566,5611,5615,5628,5633,5698,5700,5701,5747,5790,5831,5834,5874,5876,5877,5925,5968,6014,6017,6062,6064,6065,6108,6204,6303,6385,6418,6437,6455,6486,6507,6530,6546,6564,6583,6635,6653,6704,6722,6742,6760,6780,6800,6822,6832,6852,6855,6857,6858,6889,6917,6919,6920,6949,7003,7005,7006,7037,7066,7068,7069,7105,7123,7125,7126,7156,7209,7211,7212,7268,7314,7348,7391,7435,7438,7462,7464,7465,7502,7539,7541,7542,7567,7582,7595,7597,7598,7636,7705,7707,7708,7733,7750,7752,7753,7815,7914,7967,8015,8039,8075,8089,8092,8131,8144,8146,8147,8209,8308,8361,8409,8447,8457,8528,8531,8553],"Infos":null}]}
 