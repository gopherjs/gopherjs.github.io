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
GoLinkname�� Implementation�� 	Reference��   �C���internal/cpucpu�i �� _CacheLinePadHasVFPv4HasIDIVAHasAESHasPMULLHasSHA1HasSHA2HasCRC32
HasATOMICSHasCPUIDIsNeoverseN1IsZeusenvHasMSAHasDARNHasSCVIsPOWER8IsPOWER9HasZARCHHasSTFLEHasLDISPHasEIMMHasDFP	HasETF3EH	HasAESCBC	HasAESCTR	HasAESGCMHasGHASH	HasSHA256	HasSHA512HasSHA3HasVXHasVXEHasKDSAHasECDSAHasEDDSAHasADXHasAVXHasAVX2HasBMI1HasBMI2HasERMSHasFMA
HasOSXSAVEHasPCLMULQDQ	HasPOPCNTHasSSE2HasSSE3HasSSSE3HasSSE41HasSSE42cpuARMARM64CacheLinePadSizeCacheLineSizeDebugOptions
InitializeMIPS64XNamePPC64S390XX86                   V #      "    )    2    :    B    K    V    _    l       V =   z  T } C  C  V  F  s        w       V �F          ~    �    �    �       V �      �    �    �    �    �    �    w    "    �    �    �    �    2    �    �    �    �    �    �    �    �       V �      "    �    �    �    �    �    �    �    �    �    �    �    �    �    �    �       V � � ��We�i�m�q�t���������� CacheLinePad��	CacheLinePad = $pkg.CacheLinePad = $newType(0, $kindStruct, "cpu.CacheLinePad", true, "internal/cpu", true, function(_$0_) {
		this.$val = this;
		if (arguments.length === 0) {
			this._$0 = arrayType.zero();
			return;
		}
		this._$0 = _$0_;
	});
{	CacheLinePad.init("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: arrayType, tag: ""}]);
CacheLinePadinternal/cpu.CacheLinePadinternal/cpu.arrayType  option��	option = $pkg.option = $newType(0, $kindStruct, "cpu.option", true, "internal/cpu", false, function(Name_, Feature_, Specified_, Enable_, Required_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Name = "";
			this.Feature = ptrType.nil;
			this.Specified = false;
			this.Enable = false;
			this.Required = false;
			return;
		}
		this.Name = Name_;
		this.Feature = Feature_;
		this.Specified = Specified_;
		this.Enable = Enable_;
		this.Required = Required_;
	});
��	option.init("", [{prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Feature", name: "Feature", embedded: false, exported: true, typ: ptrType, tag: ""}, {prop: "Specified", name: "Specified", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "Enable", name: "Enable", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "Required", name: "Required", embedded: false, exported: true, typ: $Bool, tag: ""}]);
optioninternal/cpu.optioninternal/cpu.ptrType  	arrayType$	arrayType = $arrayType($Uint8, 0);
	arrayType  
structType��	structType = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasAES", name: "HasAES", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasADX", name: "HasADX", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAVX", name: "HasAVX", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAVX2", name: "HasAVX2", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasBMI1", name: "HasBMI1", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasBMI2", name: "HasBMI2", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasERMS", name: "HasERMS", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasFMA", name: "HasFMA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasOSXSAVE", name: "HasOSXSAVE", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasPCLMULQDQ", name: "HasPCLMULQDQ", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasPOPCNT", name: "HasPOPCNT", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSSE2", name: "HasSSE2", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSSE3", name: "HasSSE3", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSSSE3", name: "HasSSSE3", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSSE41", name: "HasSSE41", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSSE42", name: "HasSSE42", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$17", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);

structTypeinternal/cpu.CacheLinePad  structType$1��	structType$1 = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasVFPv4", name: "HasVFPv4", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasIDIVA", name: "HasIDIVA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$3", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);
structType$1internal/cpu.CacheLinePad  structType$2�	structType$2 = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasAES", name: "HasAES", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasPMULL", name: "HasPMULL", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA1", name: "HasSHA1", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA2", name: "HasSHA2", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasCRC32", name: "HasCRC32", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasATOMICS", name: "HasATOMICS", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasCPUID", name: "HasCPUID", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "IsNeoverseN1", name: "IsNeoverseN1", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "IsZeus", name: "IsZeus", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$10", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);
structType$2internal/cpu.CacheLinePad  structType$3�7	structType$3 = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasMSA", name: "HasMSA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$2", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);
structType$3internal/cpu.CacheLinePad  structType$4�I	structType$4 = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasDARN", name: "HasDARN", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSCV", name: "HasSCV", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "IsPOWER8", name: "IsPOWER8", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "IsPOWER9", name: "IsPOWER9", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$5", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);
structType$4internal/cpu.CacheLinePad  structType$5�Z	structType$5 = $structType("internal/cpu", [{prop: "_$0", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}, {prop: "HasZARCH", name: "HasZARCH", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSTFLE", name: "HasSTFLE", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasLDISP", name: "HasLDISP", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasEIMM", name: "HasEIMM", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasDFP", name: "HasDFP", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasETF3EH", name: "HasETF3EH", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasMSA", name: "HasMSA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAES", name: "HasAES", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAESCBC", name: "HasAESCBC", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAESCTR", name: "HasAESCTR", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasAESGCM", name: "HasAESGCM", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasGHASH", name: "HasGHASH", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA1", name: "HasSHA1", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA256", name: "HasSHA256", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA512", name: "HasSHA512", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasSHA3", name: "HasSHA3", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasVX", name: "HasVX", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasVXE", name: "HasVXE", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasKDSA", name: "HasKDSA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasECDSA", name: "HasECDSA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "HasEDDSA", name: "HasEDDSA", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "_$22", name: "_", embedded: false, exported: false, typ: CacheLinePad, tag: ""}]);
structType$5internal/cpu.CacheLinePad  	sliceType!	sliceType = $sliceType(option);
	sliceTypeinternal/cpu.option  ptrType	ptrType = $ptrType($Bool);
ptrType  		$pkg.DebugOptions = false;
DebugOptionsinternal/cpu.DebugOptions  ��		$pkg.X86 = new structType.ptr(new CacheLinePad.ptr(arrayType.zero()), false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, new CacheLinePad.ptr(arrayType.zero()));
X86internal/cpu.CacheLinePadinternal/cpu.X86internal/cpu.arrayTypeinternal/cpu.structType  ��		$pkg.ARM = new structType$1.ptr(new CacheLinePad.ptr(arrayType.zero()), false, false, new CacheLinePad.ptr(arrayType.zero()));
ARMinternal/cpu.ARMinternal/cpu.CacheLinePadinternal/cpu.arrayTypeinternal/cpu.structType$1  ��		$pkg.ARM64 = new structType$2.ptr(new CacheLinePad.ptr(arrayType.zero()), false, false, false, false, false, false, false, false, false, new CacheLinePad.ptr(arrayType.zero()));
ARM64internal/cpu.ARM64internal/cpu.CacheLinePadinternal/cpu.arrayTypeinternal/cpu.structType$2  ~		$pkg.MIPS64X = new structType$3.ptr(new CacheLinePad.ptr(arrayType.zero()), false, new CacheLinePad.ptr(arrayType.zero()));
MIPS64Xinternal/cpu.CacheLinePadinternal/cpu.MIPS64Xinternal/cpu.arrayTypeinternal/cpu.structType$3  ��		$pkg.PPC64 = new structType$4.ptr(new CacheLinePad.ptr(arrayType.zero()), false, false, false, false, new CacheLinePad.ptr(arrayType.zero()));
PPC64internal/cpu.CacheLinePadinternal/cpu.PPC64internal/cpu.arrayTypeinternal/cpu.structType$4  �		$pkg.S390X = new structType$5.ptr(new CacheLinePad.ptr(arrayType.zero()), false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, new CacheLinePad.ptr(arrayType.zero()));
S390Xinternal/cpu.CacheLinePadinternal/cpu.S390Xinternal/cpu.arrayTypeinternal/cpu.structType$5  options		options = sliceType.nil;
optionsinternal/cpu.optioninternal/cpu.optionsinternal/cpu.sliceType      		$unused(0);
_ internal/cpu.doinitinternal/cpudoinit doinit 	doinit = function() {
    	};
doinitinternal/cpu.doinit internal/cpu.Initializeinternal/cpu
Initialize 
Initialize~	Initialize = function(env) {
		var env;
  �		doinit();
  		processOptions(env);
    	};
	$pkg.Initialize = Initialize;

Initializeinternal/cpu.Initializeinternal/cpu.doinitinternal/cpu.processOptions internal/cpu.processOptionsinternal/cpuprocessOptions processOptions�	processOptions = function(env) {
		var _1, _i, _i$1, _i$2, _ref, _ref$1, _ref$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, enable, env, field, i, i$1, i$2, key, o, value;
  �		field:
		while (true) {
			if (!(!(env === ""))) { break; }
  �			field = "";
  �			i = indexByte(env, 44);
    			if (i < 0) {
  �				_tmp = env;
				_tmp$1 = "";
				field = _tmp;
				env = _tmp$1;
    			} else {
  �				_tmp$2 = $substring(env, 0, i);
				_tmp$3 = $substring(env, (i + 1 >> 0));
				field = _tmp$2;
				env = _tmp$3;
    			}
    			if (field.length < 4 || !($substring(field, 0, 4) === "cpu.")) {
  R				continue;
    			}
  a			i = indexByte(field, 61);
    			if (i < 0) {
  �				$print("GODEBUG: no value specified for \"", field, "\"\n");
  �				continue;
    			}
  �			_tmp$4 = $substring(field, 4, i);
			_tmp$5 = $substring(field, (i + 1 >> 0));
			key = _tmp$4;
			value = _tmp$5;
  			enable = false;
    			_1 = value;
    			if (_1 === ("on")) {
  G				enable = true;
    			} else if (_1 === ("off")) {
  f				enable = false;
    			} else {
  �				$print("GODEBUG: value \"", value, "\" not supported for cpu option \"", key, "\"\n");
  �				continue field;
    			}
    			if (key === "all") {
  				_ref = options;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					i$1 = _i;
  #					((i$1 < 0 || i$1 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$1]).Specified = true;
  C					((i$1 < 0 || i$1 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$1]).Enable = enable || ((i$1 < 0 || i$1 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$1]).Required;
    					_i++;
				}
  }				continue field;
    			}
  �			_ref$1 = options;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				i$2 = _i$1;
    				if (((i$2 < 0 || i$2 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$2]).Name === key) {
  �					((i$2 < 0 || i$2 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$2]).Specified = true;
  �					((i$2 < 0 || i$2 >= options.$length) ? ($throwRuntimeError("index out of range"), undefined) : options.$array[options.$offset + i$2]).Enable = enable;
  					continue field;
    				}
    				_i$1++;
			}
  )			$print("GODEBUG: unknown cpu feature \"", key, "\"\n");
    		}
  d		_ref$2 = options;
		_i$2 = 0;
		while (true) {
			if (!(_i$2 < _ref$2.$length)) { break; }
			o = $clone(((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]), option);
    			if (!o.Specified) {
  �				_i$2++;
				continue;
    			}
    			if (o.Enable && !o.Feature.$get()) {
  �				$print("GODEBUG: can not enable \"", o.Name, "\", missing CPU support\n");
  				_i$2++;
				continue;
    			}
    			if (!o.Enable && o.Required) {
  C				$print("GODEBUG: can not disable \"", o.Name, "\", required CPU feature\n");
  �				_i$2++;
				continue;
    			}
  �			o.Feature.$set(o.Enable);
    			_i$2++;
		}
    	};
processOptionsinternal/cpu.indexByteinternal/cpu.optioninternal/cpu.optionsinternal/cpu.processOptions internal/cpu.indexByteinternal/cpu	indexByte 	indexByte��	indexByte = function(s, c) {
		var c, i, s;
  L		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) === c) {
  z				return i;
    			}
  `			i = i + (1) >> 0;
    		}
  �		return -1;
    	};
	indexByteinternal/cpu.indexByte internal/cpu.Nameinternal/cpuName NameC	Name = function() {
  �		return "";
    	};
	$pkg.Name = Name;
Nameinternal/cpu.Name �I{"Base":7685,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/cpu/cpu.go","Base":1,"Size":113,"Lines":[0,14,27,28,40,41,49,71,93,95,96],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/cpu/cpu.go","Base":115,"Size":6948,"Lines":[0,55,109,159,160,214,250,262,263,336,373,428,450,451,514,567,568,623,694,769,814,815,891,971,1022,1070,1087,1114,1133,1152,1171,1190,1209,1228,1247,1266,1285,1304,1323,1342,1361,1380,1399,1418,1445,1447,1448,1522,1570,1587,1610,1625,1640,1663,1665,1666,1742,1790,1809,1836,1855,1874,1893,1912,1931,1950,1969,1988,2007,2034,2036,2037,2058,2079,2118,2139,2141,2142,2222,2301,2378,2452,2500,2519,2542,2622,2686,2723,2760,2783,2785,2786,2805,2829,2890,2950,3009,3058,3100,3134,3185,3234,3284,3336,3390,3429,3473,3519,3565,3655,3751,3801,3845,3876,3910,3934,3936,3937,4013,4087,4169,4204,4234,4244,4265,4267,4268,4339,4422,4508,4533,4554,4555,4618,4639,4657,4674,4740,4793,4865,4867,4868,4957,5048,5126,5196,5280,5365,5399,5406,5423,5437,5464,5477,5501,5512,5547,5551,5596,5608,5612,5640,5653,5715,5727,5731,5792,5793,5811,5828,5841,5858,5872,5890,5901,5989,6007,6011,6012,6032,6060,6092,6146,6151,6169,6173,6174,6201,6232,6264,6295,6314,6319,6323,6324,6380,6383,6384,6413,6433,6445,6449,6450,6481,6557,6569,6573,6574,6605,6683,6695,6699,6700,6724,6727,6729,6730,6794,6829,6868,6899,6916,6928,6932,6935,6946],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/cpu/cpu_no_name.go","Base":7064,"Size":620,"Lines":[0,55,109,159,160,186,208,209,221,222,271,337,407,410,482,561,582,607,618],"Infos":null}]}
 