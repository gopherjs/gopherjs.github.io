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
GoLinkname�� Implementation�� 	Reference��   ����internal/abiabi�"i �uf SetbIntArgRegBitmapiGetIntsFloatsPtrsReturnIsPtrabiEffectiveFloatRegSizeFloatArgRegs
FuncPCABI0FuncPCABIInternal
IntArgRegsRegArgsC  C    F   (    F   7    	IIT F  L     N    C    
  q  $t  +w  0I T z < @ Vcn	0�M�q RegArgs��	RegArgs = $pkg.RegArgs = $newType(0, $kindStruct, "abi.RegArgs", true, "internal/abi", true, function(Ints_, Floats_, Ptrs_, ReturnIsPtr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Ints = arrayType.zero();
			this.Floats = arrayType$1.zero();
			this.Ptrs = arrayType$2.zero();
			this.ReturnIsPtr = arrayType$3.zero();
			return;
		}
		this.Ints = Ints_;
		this.Floats = Floats_;
		this.Ptrs = Ptrs_;
		this.ReturnIsPtr = ReturnIsPtr_;
	});
��	RegArgs.init("", [{prop: "Ints", name: "Ints", embedded: false, exported: true, typ: arrayType, tag: ""}, {prop: "Floats", name: "Floats", embedded: false, exported: true, typ: arrayType$1, tag: ""}, {prop: "Ptrs", name: "Ptrs", embedded: false, exported: true, typ: arrayType$2, tag: ""}, {prop: "ReturnIsPtr", name: "ReturnIsPtr", embedded: false, exported: true, typ: IntArgRegBitmap, tag: ""}]);
RegArgsinternal/abi.IntArgRegBitmapinternal/abi.RegArgsinternal/abi.arrayTypeinternal/abi.arrayType$1internal/abi.arrayType$2internal/abi.arrayType$3  IntArgRegBitmap|	IntArgRegBitmap = $pkg.IntArgRegBitmap = $newType(0, $kindArray, "abi.IntArgRegBitmap", true, "internal/abi", true, null);
��	ptrType.methods = [{prop: "Set", name: "Set", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Get", name: "Get", pkg: "", typ: $funcType([$Int], [$Bool], false)}];
"	IntArgRegBitmap.init($Uint8, 0);
IntArgRegBitmapinternal/abi.IntArgRegBitmapinternal/abi.ptrType  	arrayType&	arrayType = $arrayType($Uintptr, 0);
	arrayType  arrayType$1'	arrayType$1 = $arrayType($Uint64, 0);
arrayType$1  arrayType$2.	arrayType$2 = $arrayType($UnsafePointer, 0);
arrayType$2  arrayType$3&	arrayType$3 = $arrayType($Uint8, 0);
arrayType$3  ptrType&	ptrType = $ptrType(IntArgRegBitmap);
ptrTypeinternal/abi.IntArgRegBitmap #(*internal/abi.IntArgRegBitmap).Set ��	IntArgRegBitmap.prototype.Set = function(i) {
		var _index, _q, _r, b, i, x, x$1, y;
		b = this.$val;
    		_index = (_q = i / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  �		(x$1 = b, ((_index < 0 || _index >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[_index] = (((x = b, ((_index < 0 || _index >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_index])) | (((y = ((_r = i % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero"))), y < 32 ? (1 << y) : 0) << 24 >>> 24))) >>> 0)));
    	};
	$ptrType(IntArgRegBitmap).prototype.Set = function(i) { return (new IntArgRegBitmap(this.$get())).Set(i); };
IntArgRegBitmapinternal/abi.IntArgRegBitmap #(*internal/abi.IntArgRegBitmap).Get �X	IntArgRegBitmap.prototype.Get = function(i) {
		var _q, _r, b, i, x, x$1, y;
		b = this.$val;
  �		return !(((((x = b, x$1 = (_q = i / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) & (((y = ((_r = i % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero"))), y < 32 ? (1 << y) : 0) << 24 >>> 24))) >>> 0) === 0));
    	};
	$ptrType(IntArgRegBitmap).prototype.Get = function(i) { return (new IntArgRegBitmap(this.$get())).Get(i); };
IntArgRegBitmapinternal/abi.IntArgRegBitmap internal/abi.FuncPCABI0internal/abi
FuncPCABI0 
FuncPCABI0��	FuncPCABI0 = function() {
		$throwRuntimeError("native function not implemented: internal/abi.FuncPCABI0");
	};
	$pkg.FuncPCABI0 = FuncPCABI0;

FuncPCABI0internal/abi.FuncPCABI0 internal/abi.FuncPCABIInternalinternal/abiFuncPCABIInternal FuncPCABIInternal��	FuncPCABIInternal = function() {
		$throwRuntimeError("native function not implemented: internal/abi.FuncPCABIInternal");
	};
	$pkg.FuncPCABIInternal = FuncPCABIInternal;
FuncPCABIInternalinternal/abi.FuncPCABIInternal �{"Base":4140,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/abi/abi.go","Base":1,"Size":2762,"Lines":[0,55,109,159,160,172,173,189,190,246,304,307,365,380,383,442,502,531,553,611,667,668,719,720,784,843,900,933,934,993,1054,1113,1171,1200,1202,1203,1267,1304,1353,1354,1399,1438,1469,1471,1472,1530,1533,1602,1637,1640,1653,1697,1735,1737,1738,1761,1764,1838,1910,1980,2049,2115,2116,2186,2255,2278,2281,2320,2359,2360,2431,2501,2573,2644,2674,2677,2716],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/abi/abi_generic.go","Base":2764,"Size":1375,"Lines":[0,55,109,159,160,199,237,238,250,251,259,286,290,334,382,383,435,506,571,587,588,642,710,774,789,807,808,872,938,942,1014,1083,1153,1187,1191,1261,1335,1346,1373],"Infos":null}]}
 