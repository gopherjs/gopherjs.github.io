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
GoLinkname�� Implementation�� 	Reference��   �;���github.com/gopherjs/gopherjs/jsjs�]i �� ObjectErrorerrStackiofnthis	argumentsbobjectGetkeySetvalueDeleteLengthIndexSetIndexCallnameargsInvokeNewBoolStringIntInt64Uint64Float	InterfaceUnsafejsDebuggerGlobalInternalObjectKeysMMakeFuncMakeWrapperModuleNewArrayBufferS	UndefinedF     $  '   11T )  4     6   $V P   $F  U  Y $F  f  h    uT y $$�     � $�  � $F  �  �    $F  �  � $V �$F  .�  � $  0�  $$$   $$$$$   $   �$$   �$$   �$$$$$$$$   $T � 7 � ;  �  ? � ; C�   I � ;   P �    W �   �  ] �  C�   f � k p�  � u � p�  � | � p�  � � �     � �    � �    � �    � �   
 � �    � �   � � �      �T � $V � � � �2�;�J�\�~�����������' Object��	Object = $pkg.Object = $newType(0, $kindStruct, "js.Object", true, "github.com/gopherjs/gopherjs/js", true, function(object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.object = null;
			return;
		}
		this.object = object_;
	});
��	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
��	Object.init("github.com/gopherjs/gopherjs/js", [{prop: "object", name: "object", embedded: false, exported: false, typ: ptrType, tag: ""}]);
Object&github.com/gopherjs/gopherjs/js.Object'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.sliceType  Error��	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", true, "github.com/gopherjs/gopherjs/js", true, function(Object_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Object = null;
			return;
		}
		this.Object = Object_;
	});
��	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
l	Error.init("", [{prop: "Object", name: "Object", embedded: true, exported: true, typ: ptrType, tag: ""}]);
Error%github.com/gopherjs/gopherjs/js.Error'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.ptrType$1  Mb	M = $pkg.M = $newType(4, $kindMap, "js.M", true, "github.com/gopherjs/gopherjs/js", true, null);
#	M.init($String, $emptyInterface);
M!github.com/gopherjs/gopherjs/js.M  Se	S = $pkg.S = $newType(12, $kindSlice, "js.S", true, "github.com/gopherjs/gopherjs/js", true, null);
	S.init($emptyInterface);
S!github.com/gopherjs/gopherjs/js.S  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1  ptrType	ptrType = $ptrType(Object);
ptrType&github.com/gopherjs/gopherjs/js.Object  sliceType$2$	sliceType$2 = $sliceType(ptrType);
sliceType$2'github.com/gopherjs/gopherjs/js.ptrType  funcType7	funcType = $funcType([sliceType$2], [ptrType], true);
funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2  	ptrType$1	ptrType$1 = $ptrType(Error);
	ptrType$1%github.com/gopherjs/gopherjs/js.Error  		$pkg.Global = null;
Global&github.com/gopherjs/gopherjs/js.Global  		$pkg.Module = null;
Module&github.com/gopherjs/gopherjs/js.Module  		$pkg.Undefined = null;
	Undefined)github.com/gopherjs/gopherjs/js.Undefined -(*github.com/gopherjs/gopherjs/js.Object).Get ��	Object.ptr.prototype.Get = function(key) {
		var key, o;
		o = this;
  	�		return o.object[$externalize(key, $String)];
    	};
	Object.prototype.Get = function(key) { return this.$val.Get(key); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Set �	Object.ptr.prototype.Set = function(key, value) {
		var key, o, value;
		o = this;
  
�		o.object[$externalize(key, $String)] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.Set = function(key, value) { return this.$val.Set(key, value); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Delete ��	Object.ptr.prototype.Delete = function(key) {
		var key, o;
		o = this;
  		delete o.object[$externalize(key, $String)];
    	};
	Object.prototype.Delete = function(key) { return this.$val.Delete(key); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Length ��	Object.ptr.prototype.Length = function() {
		var o;
		o = this;
  �		return $parseInt(o.object.length);
    	};
	Object.prototype.Length = function() { return this.$val.Length(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Index ��	Object.ptr.prototype.Index = function(i) {
		var i, o;
		o = this;
  		return o.object[i];
    	};
	Object.prototype.Index = function(i) { return this.$val.Index(i); };
Object&github.com/gopherjs/gopherjs/js.Object 2(*github.com/gopherjs/gopherjs/js.Object).SetIndex ��	Object.ptr.prototype.SetIndex = function(i, value) {
		var i, o, value;
		o = this;
  �		o.object[i] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.SetIndex = function(i, value) { return this.$val.SetIndex(i, value); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Object).Call �%	Object.ptr.prototype.Call = function(name, args) {
		var args, name, o, obj;
		o = this;
  		return (obj = o.object, obj[$externalize(name, $String)].apply(obj, $externalize(args, sliceType)));
    	};
	Object.prototype.Call = function(name, args) { return this.$val.Call(name, args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType 0(*github.com/gopherjs/gopherjs/js.Object).Invoke ��	Object.ptr.prototype.Invoke = function(args) {
		var args, o;
		o = this;
  �		return o.object.apply(undefined, $externalize(args, sliceType));
    	};
	Object.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType -(*github.com/gopherjs/gopherjs/js.Object).New �	Object.ptr.prototype.New = function(args) {
		var args, o;
		o = this;
  �		return new ($global.Function.prototype.bind.apply(o.object, [undefined].concat($externalize(args, sliceType))));
    	};
	Object.prototype.New = function(args) { return this.$val.New(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType .(*github.com/gopherjs/gopherjs/js.Object).Bool ��	Object.ptr.prototype.Bool = function() {
		var o;
		o = this;
  		return !!(o.object);
    	};
	Object.prototype.Bool = function() { return this.$val.Bool(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).String ��	Object.ptr.prototype.String = function() {
		var o;
		o = this;
  �		return $internalize(o.object, $String);
    	};
	Object.prototype.String = function() { return this.$val.String(); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Int ��	Object.ptr.prototype.Int = function() {
		var o;
		o = this;
  H		return $parseInt(o.object) >> 0;
    	};
	Object.prototype.Int = function() { return this.$val.Int(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Int64 ��	Object.ptr.prototype.Int64 = function() {
		var o;
		o = this;
  �		return $internalize(o.object, $Int64);
    	};
	Object.prototype.Int64 = function() { return this.$val.Int64(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Uint64 ��	Object.ptr.prototype.Uint64 = function() {
		var o;
		o = this;
  �		return $internalize(o.object, $Uint64);
    	};
	Object.prototype.Uint64 = function() { return this.$val.Uint64(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Float ��	Object.ptr.prototype.Float = function() {
		var o;
		o = this;
  1		return $parseFloat(o.object);
    	};
	Object.prototype.Float = function() { return this.$val.Float(); };
Object&github.com/gopherjs/gopherjs/js.Object 3(*github.com/gopherjs/gopherjs/js.Object).Interface ��	Object.ptr.prototype.Interface = function() {
		var o;
		o = this;
  �		return $internalize(o.object, $emptyInterface);
    	};
	Object.prototype.Interface = function() { return this.$val.Interface(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Unsafe ��	Object.ptr.prototype.Unsafe = function() {
		var o;
		o = this;
  �		return o.object;
    	};
	Object.prototype.Unsafe = function() { return this.$val.Unsafe(); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Error).Error ��	Error.ptr.prototype.Error = function() {
		var err;
		err = this;
  �		return "JavaScript error: " + $internalize(err.Object.message, $String);
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Error%github.com/gopherjs/gopherjs/js.Error .(*github.com/gopherjs/gopherjs/js.Error).Stack ��	Error.ptr.prototype.Stack = function() {
		var err;
		err = this;
  �		return $internalize(err.Object.stack, $String);
    	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
Error%github.com/gopherjs/gopherjs/js.Error (github.com/gopherjs/gopherjs/js.Debuggergithub.com/gopherjs/gopherjs/jsDebugger Debugger=	Debugger = function() {
    	};
	$pkg.Debugger = Debugger;
Debugger(github.com/gopherjs/gopherjs/js.Debugger .github.com/gopherjs/gopherjs/js.InternalObjectgithub.com/gopherjs/gopherjs/jsInternalObject InternalObjectm	InternalObject = function(i) {
		var i;
  �		return null;
    	};
	$pkg.InternalObject = InternalObject;
InternalObject.github.com/gopherjs/gopherjs/js.InternalObject (github.com/gopherjs/gopherjs/js.MakeFuncgithub.com/gopherjs/gopherjs/jsMakeFunc MakeFuncf	MakeFunc = function(fn) {
		var fn;
  �		return $makeFunc(fn);
    	};
	$pkg.MakeFunc = MakeFunc;
MakeFunc(github.com/gopherjs/gopherjs/js.MakeFunc $github.com/gopherjs/gopherjs/js.Keysgithub.com/gopherjs/gopherjs/jsKeys Keys�	Keys = function(o) {
		var a, i, o, s;
    		if (o === null || o === undefined) {
  |			return sliceType$1.nil;
    		}
  �		a = $global.Object.keys(o);
  �		s = $makeSlice(sliceType$1, $parseInt(a.length));
  �		i = 0;
		while (true) {
			if (!(i < $parseInt(a.length))) { break; }
  �			((i < 0 || i >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + i] = $internalize(a[i], $String));
  �			i = i + (1) >> 0;
    		}
  		return s;
    	};
	$pkg.Keys = Keys;
Keys$github.com/gopherjs/gopherjs/js.Keys+github.com/gopherjs/gopherjs/js.sliceType$1 +github.com/gopherjs/gopherjs/js.MakeWrappergithub.com/gopherjs/gopherjs/jsMakeWrapper MakeWrapper�d	MakeWrapper = function(i) {
		var i, i$1, m, methods, o, v;
  �		v = i;
  		o = new ($global.Object)();
  5		o.__internal_object__ = v;
  V		methods = v.constructor.methods;
  �		i$1 = 0;
		while (true) {
			if (!(i$1 < $parseInt(methods.length))) { break; }
			m = [m];
  �			m[0] = methods[i$1];
    			if (!($internalize(m[0].pkg, $String) === "")) {
  �				i$1 = i$1 + (1) >> 0;
    				continue;
    			}
  			o[$externalize($internalize(m[0].name, $String), $String)] = $externalize((function(m) { return function(args) {
				var args;
  L				return $externalizeFunction(v[$externalize($internalize(m[0].prop, $String), $String)], m[0].typ, $externalize(true, $Bool)).apply(v, $externalize(args, sliceType$2));
    			}; })(m), funcType);
  �			i$1 = i$1 + (1) >> 0;
    		}
  �		return o;
    	};
	$pkg.MakeWrapper = MakeWrapper;
MakeWrapper+github.com/gopherjs/gopherjs/js.MakeWrapper&github.com/gopherjs/gopherjs/js.Object(github.com/gopherjs/gopherjs/js.funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 .github.com/gopherjs/gopherjs/js.NewArrayBuffergithub.com/gopherjs/gopherjs/jsNewArrayBuffer NewArrayBuffer�'	NewArrayBuffer = function(b) {
		var b, length, offset, slice;
  E		slice = b;
  a		offset = $parseInt(slice.$offset) >> 0;
  �		length = $parseInt(slice.$length) >> 0;
  �		return slice.$array.buffer.slice(offset, offset + length >> 0);
    	};
	$pkg.NewArrayBuffer = NewArrayBuffer;
NewArrayBuffer.github.com/gopherjs/gopherjs/js.NewArrayBuffer $github.com/gopherjs/gopherjs/js.initgithub.com/gopherjs/gopherjs/jsinit initZ	init = function() {
		var e;
  -		e = new Error.ptr(null);
  ;		$unused(e);
    	};
    		init();
%github.com/gopherjs/gopherjs/js.Error$github.com/gopherjs/gopherjs/js.init ��{"Base":8004,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":8002,"Lines":[0,203,206,334,337,425,513,601,689,777,865,953,1041,1129,1217,1305,1393,1481,1569,1657,1745,1833,1921,2009,2012,2148,2159,2160,2418,2455,2456,2513,2583,2584,2654,2735,2736,2796,2857,2858,2926,2985,2986,3033,3100,3101,3148,3232,3233,3288,3392,3393,3468,3557,3558,3660,3743,3744,3831,3887,3888,3979,4041,4042,4138,4191,4192,4292,4351,4352,4454,4516,4517,4621,4682,4683,4783,4856,4857,4973,5036,5037,5190,5210,5219,5221,5222,5296,5331,5390,5392,5393,5474,5509,5543,5545,5546,5639,5658,5659,5808,5827,5828,5881,5903,5904,5969,5988,5989,6094,6139,6151,6153,6154,6263,6343,6396,6398,6399,6456,6488,6521,6534,6537,6580,6613,6648,6677,6680,6690,6692,6693,6864,6906,6930,6963,6996,7044,7085,7109,7160,7172,7176,7240,7360,7365,7368,7378,7380,7381,7451,7491,7519,7557,7595,7674,7676,7677,7778,7808,7809,7911,7932,7933,7947,7979,7993,8000],"Infos":null}]}
 