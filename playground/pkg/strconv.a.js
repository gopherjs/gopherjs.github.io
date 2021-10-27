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
GoLinkname�� Implementation�� 	Reference��   ����strconvstrconverrorsinternal/bytealgmath	math/bitsunicode/utf8�8i ��dstb ffmtprecbitSizeibasesrcFuncNumErrErroreNumErrorUnwrapstrerrquotevalue	multibytetailstrconv
AppendBoolAppendFloat	AppendIntAppendQuoteAppendQuoteRuneAppendQuoteRuneToASCIIAppendQuoteRuneToGraphicAppendQuoteToASCIIAppendQuoteToGraphic
AppendUintAtoiCanBackquoteErrRange	ErrSyntax
FormatBoolFormatComplexFormatFloat	FormatInt
FormatUintIntSize	IsGraphicIsPrintItoa	ParseBoolParseComplex
ParseFloatParseInt	ParseUintQuote	QuoteRuneQuoteRuneToASCIIQuoteRuneToGraphicQuoteToASCIIQuoteToGraphicQuotedPrefixUnquoteUnquoteCharF       " F   2  	   4 F   M   O F   b ! d F   t # v F   � # � F   � # � F   � ! � F   � ! � F   � 
  � F  !   F  !   V V F     F  % 	    F   	    F     F  
   C @F  #   F  #   F     '  ,  0  <��T � 4 :�   E :�  F  L    F  !    F  !    F  !    P F  !   
  F  !  F  #  F  #  F  #  F  !  F  !  F  !   F  !   F  ! T Z `  j P o &w��1�F�X�j�~��������������������������������<������������������������������� errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytealg*	bytealg = $packages["internal/bytealg"];
��    		$r = bytealg.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  NumError�?	NumError = $pkg.NumError = $newType(0, $kindStruct, "strconv.NumError", true, "strconv", true, function(Func_, Num_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Func = "";
			this.Num = "";
			this.Err = $ifaceNil;
			return;
		}
		this.Func = Func_;
		this.Num = Num_;
		this.Err = Err_;
	});
��	ptrType.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Unwrap", name: "Unwrap", pkg: "", typ: $funcType([], [$error], false)}];
�	NumError.init("", [{prop: "Func", name: "Func", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Num", name: "Num", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);
NumErrorstrconv.NumErrorstrconv.ptrType  decimal��	decimal = $pkg.decimal = $newType(0, $kindStruct, "strconv.decimal", true, "strconv", false, function(d_, nd_, dp_, neg_, trunc_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.d = arrayType$1.zero();
			this.nd = 0;
			this.dp = 0;
			this.neg = false;
			this.trunc = false;
			return;
		}
		this.d = d_;
		this.nd = nd_;
		this.dp = dp_;
		this.neg = neg_;
		this.trunc = trunc_;
	});
�	ptrType$2.methods = [{prop: "set", name: "set", pkg: "strconv", typ: $funcType([$String], [$Bool], false)}, {prop: "floatBits", name: "floatBits", pkg: "strconv", typ: $funcType([ptrType$1], [$Uint64, $Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Assign", name: "Assign", pkg: "", typ: $funcType([$Uint64], [], false)}, {prop: "Shift", name: "Shift", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Round", name: "Round", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundDown", name: "RoundDown", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundUp", name: "RoundUp", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "RoundedInteger", name: "RoundedInteger", pkg: "", typ: $funcType([], [$Uint64], false)}];
��	decimal.init("strconv", [{prop: "d", name: "d", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "nd", name: "nd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "dp", name: "dp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "neg", name: "neg", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "trunc", name: "trunc", embedded: false, exported: false, typ: $Bool, tag: ""}]);
decimalstrconv.arrayType$1strconv.decimalstrconv.ptrType$1strconv.ptrType$2  	leftCheat� 	leftCheat = $pkg.leftCheat = $newType(0, $kindStruct, "strconv.leftCheat", true, "strconv", false, function(delta_, cutoff_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.delta = 0;
			this.cutoff = "";
			return;
		}
		this.delta = delta_;
		this.cutoff = cutoff_;
	});
��	leftCheat.init("strconv", [{prop: "delta", name: "delta", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "cutoff", name: "cutoff", embedded: false, exported: false, typ: $String, tag: ""}]);
	leftCheatstrconv.leftCheat  	floatInfo�]	floatInfo = $pkg.floatInfo = $newType(0, $kindStruct, "strconv.floatInfo", true, "strconv", false, function(mantbits_, expbits_, bias_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mantbits = 0;
			this.expbits = 0;
			this.bias = 0;
			return;
		}
		this.mantbits = mantbits_;
		this.expbits = expbits_;
		this.bias = bias_;
	});
�*	floatInfo.init("strconv", [{prop: "mantbits", name: "mantbits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "expbits", name: "expbits", embedded: false, exported: false, typ: $Uint, tag: ""}, {prop: "bias", name: "bias", embedded: false, exported: false, typ: $Int, tag: ""}]);
	floatInfostrconv.floatInfo  decimalSlice�j	decimalSlice = $pkg.decimalSlice = $newType(0, $kindStruct, "strconv.decimalSlice", true, "strconv", false, function(d_, nd_, dp_, neg_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.d = sliceType$6.nil;
			this.nd = 0;
			this.dp = 0;
			this.neg = false;
			return;
		}
		this.d = d_;
		this.nd = nd_;
		this.dp = dp_;
		this.neg = neg_;
	});
�i	decimalSlice.init("strconv", [{prop: "d", name: "d", embedded: false, exported: false, typ: sliceType$6, tag: ""}, {prop: "nd", name: "nd", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "dp", name: "dp", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "neg", name: "neg", embedded: false, exported: false, typ: $Bool, tag: ""}]);
decimalSlicestrconv.decimalSlicestrconv.sliceType$6  	sliceType	sliceType = $sliceType($Int);
	sliceType  sliceType$1%	sliceType$1 = $sliceType($Float64);
sliceType$1  sliceType$2%	sliceType$2 = $sliceType($Float32);
sliceType$2  sliceType$3&	sliceType$3 = $sliceType(leftCheat);
sliceType$3strconv.leftCheat  	arrayType%	arrayType = $arrayType($Uint64, 2);
	arrayType  sliceType$4$	sliceType$4 = $sliceType($Uint16);
sliceType$4  sliceType$5$	sliceType$5 = $sliceType($Uint32);
sliceType$5  ptrType	ptrType = $ptrType(NumError);
ptrTypestrconv.NumError  arrayType$1(	arrayType$1 = $arrayType($Uint8, 800);
arrayType$1  sliceType$6#	sliceType$6 = $sliceType($Uint8);
sliceType$6  arrayType$2'	arrayType$2 = $arrayType($Uint8, 24);
arrayType$2  	ptrType$1"	ptrType$1 = $ptrType(floatInfo);
	ptrType$1strconv.floatInfo  arrayType$3'	arrayType$3 = $arrayType($Uint8, 32);
arrayType$3  arrayType$4'	arrayType$4 = $arrayType($Uint8, 65);
arrayType$4  arrayType$5&	arrayType$5 = $arrayType($Uint8, 4);
arrayType$5  	ptrType$2 	ptrType$2 = $ptrType(decimal);
	ptrType$2strconv.decimal  optimizeoptimize  powtabpowtab  float64pow10float64pow10  float32pow10float32pow10  ErrRange  	ErrSyntax  
leftcheats
leftcheats  detailedPowersOfTendetailedPowersOfTen  float32infofloat32info$24ptrfloat32info  float64infofloat64info$24ptrfloat64info  uint64pow10uint64pow10  	isPrint16	isPrint16  isNotPrint16isNotPrint16  	isPrint32	isPrint32  isNotPrint32isNotPrint32  	isGraphic	isGraphic    �		optimize = true;
optimizestrconv.optimize  A  '"		powtab = new sliceType([1, 3, 6, 9, 13, 16, 19, 23, 26]);
powtabstrconv.powtabstrconv.sliceType  ��  .\		float64pow10 = new sliceType$1([1, 10, 100, 1000, 10000, 100000, 1e+06, 1e+07, 1e+08, 1e+09, 1e+10, 1e+11, 1e+12, 1e+13, 1e+14, 1e+15, 1e+16, 1e+17, 1e+18, 1e+19, 1e+20, 1e+21, 1e+22]);
float64pow10strconv.float64pow10strconv.sliceType$1  m  .�		float32pow10 = new sliceType$2([1, 10, 100, 1000, 10000, 100000, 1e+06, 1e+07, 1e+08, 1e+09, 1e+10]);
float32pow10strconv.float32pow10strconv.sliceType$2  9  Q@		$pkg.ErrRange = errors.New("value out of range");

errors.Newstrconv.ErrRange  6  Q�		$pkg.ErrSyntax = errors.New("invalid syntax");

errors.Newstrconv.ErrSyntax  ��  ��		leftcheats = new sliceType$3([new leftCheat.ptr(0, ""), new leftCheat.ptr(1, "5"), new leftCheat.ptr(1, "25"), new leftCheat.ptr(1, "125"), new leftCheat.ptr(2, "625"), new leftCheat.ptr(2, "3125"), new leftCheat.ptr(2, "15625"), new leftCheat.ptr(3, "78125"), new leftCheat.ptr(3, "390625"), new leftCheat.ptr(3, "1953125"), new leftCheat.ptr(4, "9765625"), new leftCheat.ptr(4, "48828125"), new leftCheat.ptr(4, "244140625"), new leftCheat.ptr(4, "1220703125"), new leftCheat.ptr(5, "6103515625"), new leftCheat.ptr(5, "30517578125"), new leftCheat.ptr(5, "152587890625"), new leftCheat.ptr(6, "762939453125"), new leftCheat.ptr(6, "3814697265625"), new leftCheat.ptr(6, "19073486328125"), new leftCheat.ptr(7, "95367431640625"), new leftCheat.ptr(7, "476837158203125"), new leftCheat.ptr(7, "2384185791015625"), new leftCheat.ptr(7, "11920928955078125"), new leftCheat.ptr(8, "59604644775390625"), new leftCheat.ptr(8, "298023223876953125"), new leftCheat.ptr(8, "1490116119384765625"), new leftCheat.ptr(9, "7450580596923828125"), new leftCheat.ptr(9, "37252902984619140625"), new leftCheat.ptr(9, "186264514923095703125"), new leftCheat.ptr(10, "931322574615478515625"), new leftCheat.ptr(10, "4656612873077392578125"), new leftCheat.ptr(10, "23283064365386962890625"), new leftCheat.ptr(10, "116415321826934814453125"), new leftCheat.ptr(11, "582076609134674072265625"), new leftCheat.ptr(11, "2910383045673370361328125"), new leftCheat.ptr(11, "14551915228366851806640625"), new leftCheat.ptr(12, "72759576141834259033203125"), new leftCheat.ptr(12, "363797880709171295166015625"), new leftCheat.ptr(12, "1818989403545856475830078125"), new leftCheat.ptr(13, "9094947017729282379150390625"), new leftCheat.ptr(13, "45474735088646411895751953125"), new leftCheat.ptr(13, "227373675443232059478759765625"), new leftCheat.ptr(13, "1136868377216160297393798828125"), new leftCheat.ptr(14, "5684341886080801486968994140625"), new leftCheat.ptr(14, "28421709430404007434844970703125"), new leftCheat.ptr(14, "142108547152020037174224853515625"), new leftCheat.ptr(15, "710542735760100185871124267578125"), new leftCheat.ptr(15, "3552713678800500929355621337890625"), new leftCheat.ptr(15, "17763568394002504646778106689453125"), new leftCheat.ptr(16, "88817841970012523233890533447265625"), new leftCheat.ptr(16, "444089209850062616169452667236328125"), new leftCheat.ptr(16, "2220446049250313080847263336181640625"), new leftCheat.ptr(16, "11102230246251565404236316680908203125"), new leftCheat.ptr(17, "55511151231257827021181583404541015625"), new leftCheat.ptr(17, "277555756156289135105907917022705078125"), new leftCheat.ptr(17, "1387778780781445675529539585113525390625"), new leftCheat.ptr(18, "6938893903907228377647697925567626953125"), new leftCheat.ptr(18, "34694469519536141888238489627838134765625"), new leftCheat.ptr(18, "173472347597680709441192448139190673828125"), new leftCheat.ptr(19, "867361737988403547205962240695953369140625")]);

leftcheatsstrconv.leftCheatstrconv.leftcheatsstrconv.sliceType$3  ��  �9		detailedPowersOfTen = $toNativeArray($kindArray, [$toNativeArray($kindUint64, [new $Uint64(389204073, 3445679187), new $Uint64(4203730336, 136053384)]), $toNativeArray($kindUint64, [new $Uint64(243252546, 542936756), new $Uint64(2627331460, 85033365)]), $toNativeArray($kindUint64, [new $Uint64(1377807506, 2826154593), new $Uint64(3284164325, 106291706)]), $toNativeArray($kindUint64, [new $Uint64(3869743031, 1385209593), new $Uint64(4105205406, 1206606456)]), $toNativeArray($kindUint64, [new $Uint64(2418589394, 2476368732), new $Uint64(2565753378, 3975354507)]), $toNativeArray($kindUint64, [new $Uint64(1949494919, 947977267), new $Uint64(3207191723, 2821709486)]), $toNativeArray($kindUint64, [new $Uint64(289385001, 111229759), new $Uint64(4008989654, 2453395034)]), $toNativeArray($kindUint64, [new $Uint64(1254607449, 2753873159), new $Uint64(2505618534, 459630072)]), $toNativeArray($kindUint64, [new $Uint64(1568259312, 221115977), new $Uint64(3132023167, 2722021238)]), $toNativeArray($kindUint64, [new $Uint64(4107807788, 276394972), new $Uint64(3915028959, 2328784723)]), $toNativeArray($kindUint64, [new $Uint64(2030508955, 2320230505), new $Uint64(2446893099, 3066103188)]), $toNativeArray($kindUint64, [new $Uint64(2538136194, 1826546308), new $Uint64(3058616374, 2758887161)]), $toNativeArray($kindUint64, [new $Uint64(4246412067, 135699237), new $Uint64(3823270468, 1301125303)]), $toNativeArray($kindUint64, [new $Uint64(4264620277, 3842908407), new $Uint64(2389544042, 2960686962)]), $toNativeArray($kindUint64, [new $Uint64(3183291699, 1582410037), new $Uint64(2986930053, 1553375055)]), $toNativeArray($kindUint64, [new $Uint64(2905372800, 904270722), new $Uint64(3733662566, 3015460643)]), $toNativeArray($kindUint64, [new $Uint64(1278987088, 565169201), new $Uint64(2333539104, 810921078)]), $toNativeArray($kindUint64, [new $Uint64(3746217508, 706461501), new $Uint64(2916923880, 1013651347)]), $toNativeArray($kindUint64, [new $Uint64(3609030061, 883076877), new $Uint64(3646154850, 1267064184)]), $toNativeArray($kindUint64, [new $Uint64(2255643788, 1088793960), new $Uint64(2278846781, 1865656939)]), $toNativeArray($kindUint64, [new $Uint64(1745812911, 1360992450), new $Uint64(2848558476, 3405812998)]), $toNativeArray($kindUint64, [new $Uint64(34782491, 627498738), new $Uint64(3560698095, 4257266248)]), $toNativeArray($kindUint64, [new $Uint64(21739056, 4150283095), new $Uint64(2225436309, 4271404141)]), $toNativeArray($kindUint64, [new $Uint64(1100915645, 892886573), new $Uint64(2781795387, 2118029704)]), $toNativeArray($kindUint64, [new $Uint64(1376144556, 2189850041), new $Uint64(3477244234, 1573795306)]), $toNativeArray($kindUint64, [new $Uint64(1933832171, 3516139923), new $Uint64(2173277646, 2057363890)]), $toNativeArray($kindUint64, [new $Uint64(269806566, 3321433080), new $Uint64(2716597058, 424221215)]), $toNativeArray($kindUint64, [new $Uint64(3558483680, 2004307702), new $Uint64(3395746322, 2677760166)]), $toNativeArray($kindUint64, [new $Uint64(2300620952, 2505384628), new $Uint64(4244682903, 1199716560)]), $toNativeArray($kindUint64, [new $Uint64(1437888095, 1565865392), new $Uint64(2652926814, 2360435586)]), $toNativeArray($kindUint64, [new $Uint64(3944843767, 883589917), new $Uint64(3316158518, 803060834)]), $toNativeArray($kindUint64, [new $Uint64(2783571061, 30745572), new $Uint64(4145198147, 3151309691)]), $toNativeArray($kindUint64, [new $Uint64(1202861001, 556086894), new $Uint64(2590748842, 1432697645)]), $toNativeArray($kindUint64, [new $Uint64(2577318075, 1768850442), new $Uint64(3238436052, 3938355704)]), $toNativeArray($kindUint64, [new $Uint64(3221647594, 1137321229), new $Uint64(4048045066, 627977334)]), $toNativeArray($kindUint64, [new $Uint64(939787922, 1784567592), new $Uint64(2530028166, 1466227658)]), $toNativeArray($kindUint64, [new $Uint64(3322218551, 83225842), new $Uint64(3162535207, 3980268220)]), $toNativeArray($kindUint64, [new $Uint64(4152773188, 3325257774), new $Uint64(3953169009, 3901593451)]), $toNativeArray($kindUint64, [new $Uint64(2058612330, 4225769757), new $Uint64(2470730631, 827883171)]), $toNativeArray($kindUint64, [new $Uint64(1499523589, 3134728548), new $Uint64(3088413288, 4256079436)]), $toNativeArray($kindUint64, [new $Uint64(1874404487, 697185213), new $Uint64(3860516611, 1025131999)]), $toNativeArray($kindUint64, [new $Uint64(2782115540, 2046353494), new $Uint64(2412822882, 103836587)]), $toNativeArray($kindUint64, [new $Uint64(2403902601, 2557941868), new $Uint64(3016028602, 2277279382)]), $toNativeArray($kindUint64, [new $Uint64(857394603, 4271169159), new $Uint64(3770035753, 699115580)]), $toNativeArray($kindUint64, [new $Uint64(2683355275, 2132609812), new $Uint64(2356272345, 3121301797)]), $toNativeArray($kindUint64, [new $Uint64(132968622, 1592020441), new $Uint64(2945340432, 680401775)]), $toNativeArray($kindUint64, [new $Uint64(3387436249, 4137509200), new $Uint64(3681675540, 850502218)]), $toNativeArray($kindUint64, [new $Uint64(3190889480, 975330514), new $Uint64(2301047212, 2679047534)]), $toNativeArray($kindUint64, [new $Uint64(1841128202, 1219163142), new $Uint64(2876309015, 3348809418)]), $toNativeArray($kindUint64, [new $Uint64(153926604, 3671437576), new $Uint64(3595386269, 3112269949)]), $toNativeArray($kindUint64, [new $Uint64(633075040, 147164837), new $Uint64(2247116418, 2482039630)]), $toNativeArray($kindUint64, [new $Uint64(2938827448, 183956046), new $Uint64(2808895523, 955065889)]), $toNativeArray($kindUint64, [new $Uint64(452308838, 229945057), new $Uint64(3511119404, 120090538)]), $toNativeArray($kindUint64, [new $Uint64(1356434847, 3364941133), new $Uint64(2194449627, 2222540234)]), $toNativeArray($kindUint64, [new $Uint64(3843027207, 3132434592), new $Uint64(2743062034, 1704433468)]), $toNativeArray($kindUint64, [new $Uint64(508816713, 2841801416), new $Uint64(3428827542, 4278025484)]), $toNativeArray($kindUint64, [new $Uint64(636020892, 331026298), new $Uint64(4286034428, 3200048207)]), $toNativeArray($kindUint64, [new $Uint64(2008125793, 2354375084), new $Uint64(2678771517, 4147513777)]), $toNativeArray($kindUint64, [new $Uint64(3583899065, 4016710679), new $Uint64(3348464397, 1963166749)]), $toNativeArray($kindUint64, [new $Uint64(1258648360, 1799662877), new $Uint64(4185580496, 3527700261)]), $toNativeArray($kindUint64, [new $Uint64(1323526137, 1124789298), new $Uint64(2615987810, 2204812663)]), $toNativeArray($kindUint64, [new $Uint64(580665847, 2479728447), new $Uint64(3269984763, 608532181)]), $toNativeArray($kindUint64, [new $Uint64(1799574133, 2025918735), new $Uint64(4087480953, 3981890698)]), $toNativeArray($kindUint64, [new $Uint64(2198475657, 1803070121), new $Uint64(2554675596, 878068950)]), $toNativeArray($kindUint64, [new $Uint64(600610923, 3327579475), new $Uint64(3193344495, 1097586188)]), $toNativeArray($kindUint64, [new $Uint64(750763654, 3085732520), new $Uint64(3991680619, 298240911)]), $toNativeArray($kindUint64, [new $Uint64(2079840020, 854841001), new $Uint64(2494800386, 3944496953)]), $toNativeArray($kindUint64, [new $Uint64(3673541849, 1068551251), new $Uint64(3118500483, 2783137543)]), $toNativeArray($kindUint64, [new $Uint64(3518185487, 2409430888), new $Uint64(3898125604, 2405180105)]), $toNativeArray($kindUint64, [new $Uint64(588253193, 3116507041), new $Uint64(2436328502, 3650721214)]), $toNativeArray($kindUint64, [new $Uint64(2882800140, 674408330), new $Uint64(3045410628, 2415917869)]), $toNativeArray($kindUint64, [new $Uint64(382274703, 843010412), new $Uint64(3806763285, 3019897337)]), $toNativeArray($kindUint64, [new $Uint64(2923276249, 2137494243), new $Uint64(2379227053, 2424306747)]), $toNativeArray($kindUint64, [new $Uint64(2580353487, 3745609628), new $Uint64(2974033816, 4104125258)]), $toNativeArray($kindUint64, [new $Uint64(1077958211, 3608270211), new $Uint64(3717542271, 835189277)]), $toNativeArray($kindUint64, [new $Uint64(1210594794, 1718297970), new $Uint64(2323463919, 2132606034)]), $toNativeArray($kindUint64, [new $Uint64(3660727141, 388815), new $Uint64(2904329899, 1592015718)]), $toNativeArray($kindUint64, [new $Uint64(2428425278, 1074227842), new $Uint64(3630412374, 916277824)]), $toNativeArray($kindUint64, [new $Uint64(1517765798, 3892617873), new $Uint64(2269007733, 3793899112)]), $toNativeArray($kindUint64, [new $Uint64(1897207248, 2718288694), new $Uint64(2836259667, 1521148418)]), $toNativeArray($kindUint64, [new $Uint64(224025412, 3397860867), new $Uint64(3545324584, 827693699)]), $toNativeArray($kindUint64, [new $Uint64(3898112266, 4271146690), new $Uint64(2215827865, 517308561)]), $toNativeArray($kindUint64, [new $Uint64(1651414861, 3191449714), new $Uint64(2769784831, 1720377526)]), $toNativeArray($kindUint64, [new $Uint64(4211752225, 768086671), new $Uint64(3462231039, 1076730083)]), $toNativeArray($kindUint64, [new $Uint64(2095474228, 3164408729), new $Uint64(2163894399, 2283569038)]), $toNativeArray($kindUint64, [new $Uint64(471859137, 3955510912), new $Uint64(2704867999, 1780719474)]), $toNativeArray($kindUint64, [new $Uint64(2737307570, 1723163168), new $Uint64(3381084999, 1152157518)]), $toNativeArray($kindUint64, [new $Uint64(1274150815, 6470312), new $Uint64(4226356249, 366455074)]), $toNativeArray($kindUint64, [new $Uint64(1870086083, 1614656681), new $Uint64(2641472655, 2913388981)]), $toNativeArray($kindUint64, [new $Uint64(3411349428, 944579027), new $Uint64(3301840819, 2567994402)]), $toNativeArray($kindUint64, [new $Uint64(2116703137, 1180723784), new $Uint64(4127301024, 2136251179)]), $toNativeArray($kindUint64, [new $Uint64(786068548, 3422306925), new $Uint64(2579563140, 1335156987)]), $toNativeArray($kindUint64, [new $Uint64(4203811157, 4277883656), new $Uint64(3224453925, 1668946233)]), $toNativeArray($kindUint64, [new $Uint64(2033538475, 2126129098), new $Uint64(4030567406, 3159924616)]), $toNativeArray($kindUint64, [new $Uint64(1270961547, 791959774), new $Uint64(2519104629, 901211061)]), $toNativeArray($kindUint64, [new $Uint64(2662443757, 4211175190), new $Uint64(3148880786, 2200255650)]), $toNativeArray($kindUint64, [new $Uint64(1180571049, 2042743516), new $Uint64(3936100983, 602835915)]), $toNativeArray($kindUint64, [new $Uint64(200985993, 3961069257), new $Uint64(2460063114, 1987385183)]), $toNativeArray($kindUint64, [new $Uint64(3472457964, 1730111099), new $Uint64(3075078893, 336747830)]), $toNativeArray($kindUint64, [new $Uint64(2193088807, 2162638874), new $Uint64(3843848616, 1494676612)]), $toNativeArray($kindUint64, [new $Uint64(3518164152, 2962262032), new $Uint64(2402405385, 934172882)]), $toNativeArray($kindUint64, [new $Uint64(2250221542, 3702827541), new $Uint64(3003006731, 2241457927)]), $toNativeArray($kindUint64, [new $Uint64(1739035104, 2481050778), new $Uint64(3753758414, 1728080585)]), $toNativeArray($kindUint64, [new $Uint64(3771251500, 1550656736), new $Uint64(2346099009, 6308541)]), $toNativeArray($kindUint64, [new $Uint64(1492838903, 1938320920), new $Uint64(2932623761, 1081627501)]), $toNativeArray($kindUint64, [new $Uint64(2939790453, 1349159326), new $Uint64(3665779701, 2425776200)]), $toNativeArray($kindUint64, [new $Uint64(1837369033, 1380095491), new $Uint64(2291112313, 2052981037)]), $toNativeArray($kindUint64, [new $Uint64(3370453115, 2798861187), new $Uint64(2863890391, 3639968120)]), $toNativeArray($kindUint64, [new $Uint64(4213066394, 2424834660), new $Uint64(3579862989, 3476218326)]), $toNativeArray($kindUint64, [new $Uint64(1559424672, 2589263487), new $Uint64(2237414368, 2709507366)]), $toNativeArray($kindUint64, [new $Uint64(4096764488, 3236579358), new $Uint64(2796767960, 3386884207)]), $toNativeArray($kindUint64, [new $Uint64(4047213786, 4045724198), new $Uint64(3495959950, 4233605259)]), $toNativeArray($kindUint64, [new $Uint64(1992637704, 3602319448), new $Uint64(2184974969, 1572261463)]), $toNativeArray($kindUint64, [new $Uint64(1417055307, 207932014), new $Uint64(2731218711, 3039068653)]), $toNativeArray($kindUint64, [new $Uint64(2845060957, 3481140489), new $Uint64(3414023389, 2725093992)]), $toNativeArray($kindUint64, [new $Uint64(3556326197, 1130200140), new $Uint64(4267529237, 185142018)]), $toNativeArray($kindUint64, [new $Uint64(3296445697, 1243245999), new $Uint64(2667205773, 652584673)]), $toNativeArray($kindUint64, [new $Uint64(899331649, 2627799323), new $Uint64(3334007216, 1889472666)]), $toNativeArray($kindUint64, [new $Uint64(3271648210, 63523682), new $Uint64(4167509020, 2361840832)]), $toNativeArray($kindUint64, [new $Uint64(2044780131, 1113444125), new $Uint64(2604693137, 3623634168)]), $toNativeArray($kindUint64, [new $Uint64(2555975164, 318063332), new $Uint64(3255866422, 1308317238)]), $toNativeArray($kindUint64, [new $Uint64(1047485307, 397579165), new $Uint64(4069833027, 3782880196)]), $toNativeArray($kindUint64, [new $Uint64(2802161964, 4006583362), new $Uint64(2543645642, 1827429210)]), $toNativeArray($kindUint64, [new $Uint64(1355218808, 713261907), new $Uint64(3179557053, 136802865)]), $toNativeArray($kindUint64, [new $Uint64(2767765334, 891577384), new $Uint64(3974446316, 1244745405)]), $toNativeArray($kindUint64, [new $Uint64(2266724245, 3778461337), new $Uint64(2484028947, 2925449526)]), $toNativeArray($kindUint64, [new $Uint64(685921659, 1501851199), new $Uint64(3105036184, 2583070084)]), $toNativeArray($kindUint64, [new $Uint64(857402074, 803572175), new $Uint64(3881295230, 3228837605)]), $toNativeArray($kindUint64, [new $Uint64(1072747208, 1575974433), new $Uint64(2425809519, 944281679)]), $toNativeArray($kindUint64, [new $Uint64(267192186, 1969968041), new $Uint64(3032261899, 106610275)]), $toNativeArray($kindUint64, [new $Uint64(3555215705, 314976404), new $Uint64(3790327373, 3354488315)]), $toNativeArray($kindUint64, [new $Uint64(1685138903, 2881214812), new $Uint64(2368954608, 2633426109)]), $toNativeArray($kindUint64, [new $Uint64(3180165453, 2527776691), new $Uint64(2961193260, 3291782636)]), $toNativeArray($kindUint64, [new $Uint64(3975206816, 4233462688), new $Uint64(3701491575, 4114728295)]), $toNativeArray($kindUint64, [new $Uint64(4095116996, 2645914180), new $Uint64(2313432234, 4182317920)]), $toNativeArray($kindUint64, [new $Uint64(823928949, 3307392725), new $Uint64(2891790293, 3080413753)]), $toNativeArray($kindUint64, [new $Uint64(2103653011, 913015435), new $Uint64(3614737867, 629291719)]), $toNativeArray($kindUint64, [new $Uint64(2925395868, 33763735), new $Uint64(2259211166, 4151403708)]), $toNativeArray($kindUint64, [new $Uint64(3656744835, 42204668), new $Uint64(2824013958, 3041770987)]), $toNativeArray($kindUint64, [new $Uint64(3497189219, 3273981307), new $Uint64(3530017448, 1654730086)]), $toNativeArray($kindUint64, [new $Uint64(1112001438, 1509367405), new $Uint64(2206260905, 1034206304)]), $toNativeArray($kindUint64, [new $Uint64(1390001797, 4034192904), new $Uint64(2757826131, 2366499704)]), $toNativeArray($kindUint64, [new $Uint64(1737502247, 1821515659), new $Uint64(3447282664, 1884382806)]), $toNativeArray($kindUint64, [new $Uint64(12197080, 2749060022), new $Uint64(2154551665, 1177739254)]), $toNativeArray($kindUint64, [new $Uint64(2162729998, 3436325028), new $Uint64(2693189581, 2545915891)]), $toNativeArray($kindUint64, [new $Uint64(1629670674, 2147922637), new $Uint64(3366486976, 4256136688)]), $toNativeArray($kindUint64, [new $Uint64(2037088343, 537419649), new $Uint64(4208108721, 1025203564)]), $toNativeArray($kindUint64, [new $Uint64(3420663862, 1946500016), new $Uint64(2630067950, 3325106787)]), $toNativeArray($kindUint64, [new $Uint64(3202088004, 285641372), new $Uint64(3287584938, 2008899836)]), $toNativeArray($kindUint64, [new $Uint64(4002610005, 357051716), new $Uint64(4109481173, 363641147)]), $toNativeArray($kindUint64, [new $Uint64(1964760341, 760028234), new $Uint64(2568425733, 764146629)]), $toNativeArray($kindUint64, [new $Uint64(3529692250, 2023777117), new $Uint64(3210532166, 2028925110)]), $toNativeArray($kindUint64, [new $Uint64(2264631665, 382237748), new $Uint64(4013165208, 388672740)]), $toNativeArray($kindUint64, [new $Uint64(3562878438, 2923253152), new $Uint64(2508228255, 242920462)]), $toNativeArray($kindUint64, [new $Uint64(2306114400, 1506582793), new $Uint64(3135285318, 3524876050)]), $toNativeArray($kindUint64, [new $Uint64(735159352, 1883228491), new $Uint64(3919106648, 2258611415)]), $toNativeArray($kindUint64, [new $Uint64(2070087331, 1177017807), new $Uint64(2449441655, 1411632134)]), $toNativeArray($kindUint64, [new $Uint64(440125516, 397530434), new $Uint64(3061802069, 690798344)]), $toNativeArray($kindUint64, [new $Uint64(550156895, 496913043), new $Uint64(3827252586, 1937239754)]), $toNativeArray($kindUint64, [new $Uint64(1417589883, 1921183388), new $Uint64(2392032866, 2284516670)]), $toNativeArray($kindUint64, [new $Uint64(3919471002, 1327737411), new $Uint64(2990041083, 708162189)]), $toNativeArray($kindUint64, [new $Uint64(1678113280, 3807155412), new $Uint64(3737551353, 4106428209)]), $toNativeArray($kindUint64, [new $Uint64(3733175360, 2379472132), new $Uint64(2335969596, 955904894)]), $toNativeArray($kindUint64, [new $Uint64(2518985552, 2974340165), new $Uint64(2919961995, 1194881118)]), $toNativeArray($kindUint64, [new $Uint64(1001248292, 3717925207), new $Uint64(3649952494, 419859574)]), $toNativeArray($kindUint64, [new $Uint64(3847005655, 176219606), new $Uint64(2281220308, 3483637705)]), $toNativeArray($kindUint64, [new $Uint64(1587531596, 3441499980), new $Uint64(2851525386, 59579836)]), $toNativeArray($kindUint64, [new $Uint64(1984414496, 6907679), new $Uint64(3564406732, 2221958443)]), $toNativeArray($kindUint64, [new $Uint64(703388148, 4317299), new $Uint64(2227754207, 3536207675)]), $toNativeArray($kindUint64, [new $Uint64(4100460657, 5396624), new $Uint64(2784692759, 3346517769)]), $toNativeArray($kindUint64, [new $Uint64(1904350349, 1080487604), new $Uint64(3480865949, 3109405388)]), $toNativeArray($kindUint64, [new $Uint64(3337702616, 1212175664), new $Uint64(2175541218, 2480249279)]), $toNativeArray($kindUint64, [new $Uint64(3098386446, 1515219580), new $Uint64(2719426523, 952827951)]), $toNativeArray($kindUint64, [new $Uint64(2799241233, 4041508124), new $Uint64(3399283154, 117293115)]), $toNativeArray($kindUint64, [new $Uint64(2425309718, 1830659683), new $Uint64(4249103942, 2294100042)]), $toNativeArray($kindUint64, [new $Uint64(2589560398, 70420478), new $Uint64(2655689964, 360070702)]), $toNativeArray($kindUint64, [new $Uint64(1089466849, 2235509245), new $Uint64(3319612455, 450088378)]), $toNativeArray($kindUint64, [new $Uint64(3509317209, 3868128380), new $Uint64(4149515568, 3783835944)]), $toNativeArray($kindUint64, [new $Uint64(2193323256, 806967502), new $Uint64(2593447230, 2364897465)]), $toNativeArray($kindUint64, [new $Uint64(3815395894, 1008709377), new $Uint64(3241809038, 808638183)]), $toNativeArray($kindUint64, [new $Uint64(3695503043, 3408370369), new $Uint64(4052261297, 3158281377)]), $toNativeArray($kindUint64, [new $Uint64(699076666, 1593360569), new $Uint64(2532663311, 363313125)]), $toNativeArray($kindUint64, [new $Uint64(1947587656, 4139184359), new $Uint64(3165829138, 3675366878)]), $toNativeArray($kindUint64, [new $Uint64(287000923, 879013153), new $Uint64(3957286423, 2446724950)]), $toNativeArray($kindUint64, [new $Uint64(3400601049, 12512308), new $Uint64(2473304014, 3139815829)]), $toNativeArray($kindUint64, [new $Uint64(1029525839, 1089382210), new $Uint64(3091630018, 1777286139)]), $toNativeArray($kindUint64, [new $Uint64(213165475, 287985938), new $Uint64(3864537523, 74124026)]), $toNativeArray($kindUint64, [new $Uint64(1206970245, 3938087595), new $Uint64(2415335951, 3804423900)]), $toNativeArray($kindUint64, [new $Uint64(1508712807, 1701384022), new $Uint64(3019169939, 3681788051)]), $toNativeArray($kindUint64, [new $Uint64(812149185, 1052988204), new $Uint64(3773962424, 3528493240)]), $toNativeArray($kindUint64, [new $Uint64(507593240, 3342472187), new $Uint64(2358726515, 2205308275)]), $toNativeArray($kindUint64, [new $Uint64(3855717022, 4178090234), new $Uint64(2948408144, 1682893519)]), $toNativeArray($kindUint64, [new $Uint64(3745904454, 3075129145), new $Uint64(3685510180, 2103616899)]), $toNativeArray($kindUint64, [new $Uint64(1804319372, 848213891), new $Uint64(2303443862, 3462244210)]), $toNativeArray($kindUint64, [new $Uint64(107915567, 1060267364), new $Uint64(2879304828, 2180321615)]), $toNativeArray($kindUint64, [new $Uint64(3356119931, 251592381), new $Uint64(3599131035, 2725402018)]), $toNativeArray($kindUint64, [new $Uint64(3171316780, 3915341622), new $Uint64(2249456897, 1166505349)]), $toNativeArray($kindUint64, [new $Uint64(742920504, 599209732), new $Uint64(2811821121, 2531873511)]), $toNativeArray($kindUint64, [new $Uint64(4149876102, 749012165), new $Uint64(3514776401, 4238583712)]), $toNativeArray($kindUint64, [new $Uint64(2593672563, 3689358075), new $Uint64(2196735251, 1038502084)]), $toNativeArray($kindUint64, [new $Uint64(3242090704, 3537955770), new $Uint64(2745919064, 224385781)]), $toNativeArray($kindUint64, [new $Uint64(831387909, 127477416), new $Uint64(3432398830, 280482227)]), $toNativeArray($kindUint64, [new $Uint64(4260460358, 1233088594), new $Uint64(4290498537, 2498086431)]), $toNativeArray($kindUint64, [new $Uint64(4273400459, 3991905843), new $Uint64(2681561585, 4245658579)]), $toNativeArray($kindUint64, [new $Uint64(4268008750, 3916140480), new $Uint64(3351951982, 2085847752)]), $toNativeArray($kindUint64, [new $Uint64(1040043642, 2747691952), new $Uint64(4189939978, 459826043)]), $toNativeArray($kindUint64, [new $Uint64(113156364, 2791049294), new $Uint64(2618712486, 1361133101)]), $toNativeArray($kindUint64, [new $Uint64(1215187279, 3488811618), new $Uint64(3273390607, 3848900024)]), $toNativeArray($kindUint64, [new $Uint64(1518984099, 3287272698), new $Uint64(4091738259, 3737383206)]), $toNativeArray($kindUint64, [new $Uint64(4170590534, 1517674524), new $Uint64(2557336412, 1798993591)]), $toNativeArray($kindUint64, [new $Uint64(4139496343, 4044576803), new $Uint64(3196670515, 2248741989)]), $toNativeArray($kindUint64, [new $Uint64(1953144957, 3981979180), new $Uint64(3995838144, 1737185663)]), $toNativeArray($kindUint64, [new $Uint64(2831328334, 3025607900), new $Uint64(2497398840, 1085741039)]), $toNativeArray($kindUint64, [new $Uint64(2465418594, 1634526227), new $Uint64(3121748550, 1357176299)]), $toNativeArray($kindUint64, [new $Uint64(2008031418, 4190641431), new $Uint64(3902185687, 3843954022)]), $toNativeArray($kindUint64, [new $Uint64(181277812, 3692892718), new $Uint64(2438866054, 4013084000)]), $toNativeArray($kindUint64, [new $Uint64(226597266, 321148602), new $Uint64(3048582568, 2868871352)]), $toNativeArray($kindUint64, [new $Uint64(283246582, 2548919401), new $Uint64(3810728210, 3586089190)]), $toNativeArray($kindUint64, [new $Uint64(3398254586, 519332801), new $Uint64(2381705131, 3315047567)]), $toNativeArray($kindUint64, [new $Uint64(3174076408, 2796649650), new $Uint64(2977131414, 3070067635)]), $toNativeArray($kindUint64, [new $Uint64(2893853686, 3495812062), new $Uint64(3721414268, 1690100896)]), $toNativeArray($kindUint64, [new $Uint64(1808658554, 1111140715), new $Uint64(2325883917, 3203796708)]), $toNativeArray($kindUint64, [new $Uint64(2260823192, 3536409542), new $Uint64(2907354897, 783520413)]), $toNativeArray($kindUint64, [new $Uint64(3899770815, 125544631), new $Uint64(3634193621, 2053142340)]), $toNativeArray($kindUint64, [new $Uint64(289873111, 1689078130), new $Uint64(2271371013, 1820084875)]), $toNativeArray($kindUint64, [new $Uint64(3583566861, 1037605839), new $Uint64(2839213766, 3348847917)]), $toNativeArray($kindUint64, [new $Uint64(1258233104, 2370749123), new $Uint64(3549017208, 2038576249)]), $toNativeArray($kindUint64, [new $Uint64(3470750250, 1481718202), new $Uint64(2218135755, 1274110155)]), $toNativeArray($kindUint64, [new $Uint64(3264695988, 3999631400), new $Uint64(2772669694, 518895870)]), $toNativeArray($kindUint64, [new $Uint64(1933386338, 704571954), new $Uint64(3465837117, 2796103486)]), $toNativeArray($kindUint64, [new $Uint64(134624637, 1514099295), new $Uint64(2166148198, 2284435591)]), $toNativeArray($kindUint64, [new $Uint64(3389506268, 2966365943), new $Uint64(2707685248, 708060840)]), $toNativeArray($kindUint64, [new $Uint64(4236882835, 3707957429), new $Uint64(3384606560, 885076050)]), $toNativeArray($kindUint64, [new $Uint64(3148619896, 3561204962), new $Uint64(4230758200, 1106345063)]), $toNativeArray($kindUint64, [new $Uint64(3578500171, 2225753101), new $Uint64(2644223875, 691465664)]), $toNativeArray($kindUint64, [new $Uint64(178157918, 1708449553), new $Uint64(3305279843, 4085557553)]), $toNativeArray($kindUint64, [new $Uint64(1296439221, 4283045589), new $Uint64(4131599804, 4033205117)]), $toNativeArray($kindUint64, [new $Uint64(1347145425, 3213774405), new $Uint64(2582249878, 373269550)]), $toNativeArray($kindUint64, [new $Uint64(3831415430, 795992534), new $Uint64(3227812347, 2614070585)]), $toNativeArray($kindUint64, [new $Uint64(1568043815, 3142474316), new $Uint64(4034765434, 2193846408)]), $toNativeArray($kindUint64, [new $Uint64(980027384, 3574659183), new $Uint64(2521728396, 2444895829)]), $toNativeArray($kindUint64, [new $Uint64(2298776055, 173356683), new $Uint64(3152160495, 3056119786)]), $toNativeArray($kindUint64, [new $Uint64(725986420, 3437921326), new $Uint64(3940200619, 2746407909)]), $toNativeArray($kindUint64, [new $Uint64(990612425, 1217181), new $Uint64(2462625387, 1179634031)]), $toNativeArray($kindUint64, [new $Uint64(164523707, 1075263300), new $Uint64(3078281734, 400800715)]), $toNativeArray($kindUint64, [new $Uint64(3426880106, 270337301), new $Uint64(3847852167, 2648484541)]), $toNativeArray($kindUint64, [new $Uint64(2678670978, 1242702637), new $Uint64(2404907604, 3265915574)]), $toNativeArray($kindUint64, [new $Uint64(1200855074, 3700861945), new $Uint64(3006134505, 4082394468)]), $toNativeArray($kindUint64, [new $Uint64(1501068843, 2478593783), new $Uint64(3757668132, 1881767613)]), $toNativeArray($kindUint64, [new $Uint64(1475038939, 1012250202), new $Uint64(2348542582, 3323588406)]), $toNativeArray($kindUint64, [new $Uint64(3991282322, 191570929), new $Uint64(2935678228, 2007001859)]), $toNativeArray($kindUint64, [new $Uint64(3915361078, 2386947309), new $Uint64(3669597785, 2508752324)]), $toNativeArray($kindUint64, [new $Uint64(299617026, 418100244), new $Uint64(2293498615, 4252324763)]), $toNativeArray($kindUint64, [new $Uint64(3595746754, 2670108953), new $Uint64(2866873269, 4241664129)]), $toNativeArray($kindUint64, [new $Uint64(1273457971, 1190152543), new $Uint64(3583591587, 2080854690)]), $toNativeArray($kindUint64, [new $Uint64(1869653056, 206974427), new $Uint64(2239744742, 763663269)]), $toNativeArray($kindUint64, [new $Uint64(3410808144, 258718034), new $Uint64(2799680927, 3102062734)]), $toNativeArray($kindUint64, [new $Uint64(2116026532, 323397543), new $Uint64(3499601159, 2803836594)]), $toNativeArray($kindUint64, [new $Uint64(2396258406, 2349607112), new $Uint64(2187250724, 3363010607)]), $toNativeArray($kindUint64, [new $Uint64(1921581184, 789525242), new $Uint64(2734063405, 4203763259)]), $toNativeArray($kindUint64, [new $Uint64(1328234656, 986906553), new $Uint64(3417579257, 2033478602)]), $toNativeArray($kindUint64, [new $Uint64(3807776968, 1233633192), new $Uint64(4271974071, 3615590076)]), $toNativeArray($kindUint64, [new $Uint64(232376957, 771020745), new $Uint64(2669983794, 3870356534)]), $toNativeArray($kindUint64, [new $Uint64(2437954844, 2037517755), new $Uint64(3337479743, 2690462019)]), $toNativeArray($kindUint64, [new $Uint64(1973701731, 2546897194), new $Uint64(4171849679, 2289335700)]), $toNativeArray($kindUint64, [new $Uint64(3381047230, 1054939834), new $Uint64(2607406049, 3041447548)]), $toNativeArray($kindUint64, [new $Uint64(4226309037, 3466158440), new $Uint64(3259257562, 580583963)]), $toNativeArray($kindUint64, [new $Uint64(4209144473, 1111472579), new $Uint64(4074071952, 2873213602)]), $toNativeArray($kindUint64, [new $Uint64(3704457119, 3379024922), new $Uint64(2546294970, 1795758501)]), $toNativeArray($kindUint64, [new $Uint64(1409345927, 3150039328), new $Uint64(3182868713, 97214479)]), $toNativeArray($kindUint64, [new $Uint64(687940585, 2863807336), new $Uint64(3978585891, 1195259923)]), $toNativeArray($kindUint64, [new $Uint64(4188059250, 179266849), new $Uint64(2486616182, 210166539)]), $toNativeArray($kindUint64, [new $Uint64(4161332238, 2371567209), new $Uint64(3108270227, 2410191822)]), $toNativeArray($kindUint64, [new $Uint64(3054181650, 816975364), new $Uint64(3885337784, 1938997954)]), $toNativeArray($kindUint64, [new $Uint64(2982605355, 1584351426), new $Uint64(2428336115, 1211873721)]), $toNativeArray($kindUint64, [new $Uint64(507031222, 906697459), new $Uint64(3035420144, 441100328)]), $toNativeArray($kindUint64, [new $Uint64(633789027, 3280855472), new $Uint64(3794275180, 551375410)]), $toNativeArray($kindUint64, [new $Uint64(1469859966, 1513663758), new $Uint64(2371421987, 2492093279)]), $toNativeArray($kindUint64, [new $Uint64(763583133, 4039563345), new $Uint64(2964277484, 2041374775)]), $toNativeArray($kindUint64, [new $Uint64(4175704389, 1828228709), new $Uint64(3705346855, 2551718468)]), $toNativeArray($kindUint64, [new $Uint64(462331595, 1679513855), new $Uint64(2315841784, 3205436779)]), $toNativeArray($kindUint64, [new $Uint64(3799139966, 1025650495), new $Uint64(2894802230, 4006795973)]), $toNativeArray($kindUint64, [new $Uint64(1527699485, 3429546767), new $Uint64(3618502788, 2861011319)]), $toNativeArray($kindUint64, [new $Uint64(2565424914, 2680337641), new $Uint64(2261564242, 3935615722)]), $toNativeArray($kindUint64, [new $Uint64(1059297495, 1202938404), new $Uint64(2826955303, 2772036005)]), $toNativeArray($kindUint64, [new $Uint64(2397863693, 429931181), new $Uint64(3533694129, 2391303182)]), $toNativeArray($kindUint64, [new $Uint64(424922984, 805577900), new $Uint64(2208558830, 4178919049)]), $toNativeArray($kindUint64, [new $Uint64(1604895554, 1006972375), new $Uint64(2760698538, 3076165163)]), $toNativeArray($kindUint64, [new $Uint64(932377618, 3406199117), new $Uint64(3450873173, 1697722806)]), $toNativeArray($kindUint64, [new $Uint64(3803961483, 3202616272), new $Uint64(2156795733, 1597947665)]), $toNativeArray($kindUint64, [new $Uint64(1533726382, 2929528516), new $Uint64(2695994666, 3071176406)]), $toNativeArray($kindUint64, [new $Uint64(4064641626, 1514426997), new $Uint64(3369993333, 1691486859)]), $toNativeArray($kindUint64, [new $Uint64(4007060208, 4040517394), new $Uint64(4212491666, 3188100398)]), $toNativeArray($kindUint64, [new $Uint64(1430670806, 2525323371), new $Uint64(2632807291, 3066304573)]), $toNativeArray($kindUint64, [new $Uint64(2862080332, 1009170566), new $Uint64(3291009114, 2759138892)]), $toNativeArray($kindUint64, [new $Uint64(3577600415, 1261463208), new $Uint64(4113761393, 1301439967)]), $toNativeArray($kindUint64, [new $Uint64(3846612995, 2399027241), new $Uint64(2571100870, 3497754539)]), $toNativeArray($kindUint64, [new $Uint64(3734524420, 1925042227), new $Uint64(3213876088, 2224709526)]), $toNativeArray($kindUint64, [new $Uint64(2520671877, 2406302784), new $Uint64(4017345110, 2780886908)]), $toNativeArray($kindUint64, [new $Uint64(3722903571, 2040810152), new $Uint64(2510840694, 664312493)]), $toNativeArray($kindUint64, [new $Uint64(1432403992, 1477270866), new $Uint64(3138550867, 2977874265)]), $toNativeArray($kindUint64, [new $Uint64(2864246814, 1846588582), new $Uint64(3923188584, 2648601007)]), $toNativeArray($kindUint64, [new $Uint64(3400766995, 80376040), new $Uint64(2451992865, 1655375629)]), $toNativeArray($kindUint64, [new $Uint64(1029733271, 3321695522), new $Uint64(3064991081, 3142961361)]), $toNativeArray($kindUint64, [new $Uint64(2360908413, 3078377578), new $Uint64(3831238852, 707476229)]), $toNativeArray($kindUint64, [new $Uint64(2012438670, 2460856898), new $Uint64(2394524282, 2589656291)]), $toNativeArray($kindUint64, [new $Uint64(1441806514, 928587475), new $Uint64(2993155353, 1089586716)]), $toNativeArray($kindUint64, [new $Uint64(1802258142, 3308217992), new $Uint64(3741444191, 2435725219)]), $toNativeArray($kindUint64, [new $Uint64(589540427, 993894421), new $Uint64(2338402619, 3132940998)]), $toNativeArray($kindUint64, [new $Uint64(2884409182, 168626202), new $Uint64(2923003274, 2842434423)]), $toNativeArray($kindUint64, [new $Uint64(2531769653, 2358266401), new $Uint64(3653754093, 1405559381)]), $toNativeArray($kindUint64, [new $Uint64(2119226945, 2010787412), new $Uint64(2283596308, 1415345525)]), $toNativeArray($kindUint64, [new $Uint64(3722775505, 3587226089), new $Uint64(2854495385, 1769181906)]), $toNativeArray($kindUint64, [new $Uint64(2505985734, 1262807140), new $Uint64(3568119231, 3285219207)]), $toNativeArray($kindUint64, [new $Uint64(3176853819, 4010479934), new $Uint64(2230074519, 3663874740)]), $toNativeArray($kindUint64, [new $Uint64(3971067274, 3939358094), new $Uint64(2787593149, 3506101601)]), $toNativeArray($kindUint64, [new $Uint64(1742608621, 2776713970), new $Uint64(3484491437, 1161401530)]), $toNativeArray($kindUint64, [new $Uint64(2162872212, 2272317143), new $Uint64(2177807148, 1262746868)]), $toNativeArray($kindUint64, [new $Uint64(2703590265, 2840396429), new $Uint64(2722258935, 1578433585)]), $toNativeArray($kindUint64, [new $Uint64(158262360, 329270064), new $Uint64(3402823669, 899300158)]), $toNativeArray($kindUint64, [new $Uint64(2345311598, 411587580), new $Uint64(4253529586, 2197867021)]), $toNativeArray($kindUint64, [new $Uint64(2002690660, 3478467709), new $Uint64(2658455991, 2447408712)]), $toNativeArray($kindUint64, [new $Uint64(2503363326, 53117341), new $Uint64(3323069989, 1985519066)]), $toNativeArray($kindUint64, [new $Uint64(981720509, 2213880324), new $Uint64(4153837486, 3555640657)]), $toNativeArray($kindUint64, [new $Uint64(3297929878, 1920546114), new $Uint64(2596148429, 1148533586)]), $toNativeArray($kindUint64, [new $Uint64(1974928700, 253198995), new $Uint64(3245185536, 2509408807)]), $toNativeArray($kindUint64, [new $Uint64(1394919051, 316498744), new $Uint64(4056481920, 3136761009)]), $toNativeArray($kindUint64, [new $Uint64(3556178966, 3955908099), new $Uint64(2535301200, 1960475630)]), $toNativeArray($kindUint64, [new $Uint64(2297740060, 2797401476), new $Uint64(3169126500, 2450594538)]), $toNativeArray($kindUint64, [new $Uint64(724691427, 3496751845), new $Uint64(3961408125, 3063243173)]), $toNativeArray($kindUint64, [new $Uint64(989803054, 1648598991), new $Uint64(2475880078, 2451397895)]), $toNativeArray($kindUint64, [new $Uint64(163511993, 4208232386), new $Uint64(3094850098, 916763721)]), $toNativeArray($kindUint64, [new $Uint64(1278131816, 2039065011), new $Uint64(3868562622, 3293438299)]), $toNativeArray($kindUint64, [new $Uint64(261961473, 1274415632), new $Uint64(2417851639, 984657113)]), $toNativeArray($kindUint64, [new $Uint64(1401193665, 2666761364), new $Uint64(3022314549, 157079567)]), $toNativeArray($kindUint64, [new $Uint64(677750258, 112226233), new $Uint64(3777893186, 1270091283)]), $toNativeArray($kindUint64, [new $Uint64(4181690295, 1143883219), new $Uint64(2361183241, 1867548875)]), $toNativeArray($kindUint64, [new $Uint64(4153371045, 356112200), new $Uint64(2951479051, 3408177918)]), $toNativeArray($kindUint64, [new $Uint64(3044230158, 1518882075), new $Uint64(3689348814, 3186480574)]), $toNativeArray($kindUint64, [new $Uint64(828902024, 4170526768), new $Uint64(2305843009, 917808535)]), $toNativeArray($kindUint64, [new $Uint64(4257353003, 918191165), new $Uint64(2882303761, 2221002492)]), $toNativeArray($kindUint64, [new $Uint64(1026723958, 73997132), new $Uint64(3602879701, 3849994940)]), $toNativeArray($kindUint64, [new $Uint64(2789186121, 3267473679), new $Uint64(2251799813, 2943117749)]), $toNativeArray($kindUint64, [new $Uint64(265257180, 863116627), new $Uint64(2814749767, 457671715)]), $toNativeArray($kindUint64, [new $Uint64(3552796947, 1078895784), new $Uint64(3518437208, 3793315115)]), $toNativeArray($kindUint64, [new $Uint64(1683627180, 137438953), new $Uint64(2199023255, 2370821947)]), $toNativeArray($kindUint64, [new $Uint64(1030792151, 171798691), new $Uint64(2748779069, 1889785610)]), $toNativeArray($kindUint64, [new $Uint64(3435973836, 3435973836), new $Uint64(3435973836, 3435973836)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2147483648, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2684354560, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3355443200, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(4194304000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2621440000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3276800000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(4096000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2560000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3200000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(4000000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2500000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3125000000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3906250000, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2441406250, 0)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3051757812, 2147483648)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3814697265, 2684354560)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2384185791, 67108864)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2980232238, 3305111552)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3725290298, 1983905792)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2328306436, 2313682944)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2910383045, 2892103680)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3637978807, 393904128)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2273736754, 1856802816)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2842170943, 173519872)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3552713678, 3438125312)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2220446049, 1075086496)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(2775557561, 2417599944)]), $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(3469446951, 4095741754)]), $toNativeArray($kindUint64, [new $Uint64(1073741824, 0), new $Uint64(2168404344, 4170451332)]), $toNativeArray($kindUint64, [new $Uint64(1342177280, 0), new $Uint64(2710505431, 918096869)]), $toNativeArray($kindUint64, [new $Uint64(2751463424, 0), new $Uint64(3388131789, 73879262)]), $toNativeArray($kindUint64, [new $Uint64(1291845632, 0), new $Uint64(4235164736, 1166090902)]), $toNativeArray($kindUint64, [new $Uint64(4028628992, 0), new $Uint64(2646977960, 728806813)]), $toNativeArray($kindUint64, [new $Uint64(1814560768, 0), new $Uint64(3308722450, 911008517)]), $toNativeArray($kindUint64, [new $Uint64(3341942784, 0), new $Uint64(4135903062, 3286244294)]), $toNativeArray($kindUint64, [new $Uint64(1014972416, 0), new $Uint64(2584939414, 980160860)]), $toNativeArray($kindUint64, [new $Uint64(1268715520, 0), new $Uint64(3231174267, 3372684723)]), $toNativeArray($kindUint64, [new $Uint64(512152576, 0), new $Uint64(4038967834, 3142114080)]), $toNativeArray($kindUint64, [new $Uint64(320095360, 0), new $Uint64(2524354896, 3037563124)]), $toNativeArray($kindUint64, [new $Uint64(400119200, 0), new $Uint64(3155443620, 3796953905)]), $toNativeArray($kindUint64, [new $Uint64(1573890824, 0), new $Uint64(3944304526, 451225085)]), $toNativeArray($kindUint64, [new $Uint64(1520552677, 0), new $Uint64(2465190328, 3503241150)]), $toNativeArray($kindUint64, [new $Uint64(4048174494, 1073741824), new $Uint64(3081487911, 84084141)]), $toNativeArray($kindUint64, [new $Uint64(1838992645, 3489660928), new $Uint64(3851859888, 3326330649)]), $toNativeArray($kindUint64, [new $Uint64(3833724963, 2717908992), new $Uint64(2407412430, 2078956655)]), $toNativeArray($kindUint64, [new $Uint64(3718414380, 2323644416), new $Uint64(3009265538, 451212171)]), $toNativeArray($kindUint64, [new $Uint64(3574276151, 2904555520), new $Uint64(3761581922, 2711498862)]), $toNativeArray($kindUint64, [new $Uint64(1160180770, 3425959936), new $Uint64(2350988701, 2768428613)]), $toNativeArray($kindUint64, [new $Uint64(2523967787, 2134966272), new $Uint64(2938735877, 239310294)]), $toNativeArray($kindUint64, [new $Uint64(1007476086, 1594966016), new $Uint64(3673419846, 1372879692)]), $toNativeArray($kindUint64, [new $Uint64(2777156201, 4218079232), new $Uint64(2295887403, 4079275279)]), $toNativeArray($kindUint64, [new $Uint64(2397703428, 2051373568), new $Uint64(2869859254, 4025352275)]), $toNativeArray($kindUint64, [new $Uint64(1923387461, 2564216960), new $Uint64(3587324068, 2884206696)]), $toNativeArray($kindUint64, [new $Uint64(1202117163, 2139506512), new $Uint64(2242077542, 3950112833)]), $toNativeArray($kindUint64, [new $Uint64(2576388278, 1600641316), new $Uint64(2802596928, 2790157393)]), $toNativeArray($kindUint64, [new $Uint64(4294227171, 4148285293), new $Uint64(3503246160, 3487696741)]), $toNativeArray($kindUint64, [new $Uint64(3220762894, 2055807396), new $Uint64(2189528850, 2179810463)]), $toNativeArray($kindUint64, [new $Uint64(2952211794, 422275597), new $Uint64(2736911063, 577279431)]), $toNativeArray($kindUint64, [new $Uint64(2616522918, 2675328144), new $Uint64(3421138828, 3942824761)]), $toNativeArray($kindUint64, [new $Uint64(49428176, 1196676532), new $Uint64(4276423536, 633563656)]), $toNativeArray($kindUint64, [new $Uint64(30892610, 747922832), new $Uint64(2672764710, 395977285)]), $toNativeArray($kindUint64, [new $Uint64(1112357586, 3082387189), new $Uint64(3340955887, 2642455254)]), $toNativeArray($kindUint64, [new $Uint64(3537930631, 1705500338), new $Uint64(4176194859, 2229327243)]), $toNativeArray($kindUint64, [new $Uint64(1674335732, 2676550447), new $Uint64(2610121787, 856458615)]), $toNativeArray($kindUint64, [new $Uint64(1019177841, 3345688059), new $Uint64(3262652233, 4291798741)]), $toNativeArray($kindUint64, [new $Uint64(2347714126, 960884602), new $Uint64(4078315292, 2143522954)]), $toNativeArray($kindUint64, [new $Uint64(2541063152, 3821778348), new $Uint64(2548947057, 3487185494)]), $toNativeArray($kindUint64, [new $Uint64(1028845293, 482255639), new $Uint64(3186183822, 1137756396)]), $toNativeArray($kindUint64, [new $Uint64(1286056616, 1676561373), new $Uint64(3982729777, 3569679143)]), $toNativeArray($kindUint64, [new $Uint64(2414398121, 1047850858), new $Uint64(2489206111, 620436728)]), $toNativeArray($kindUint64, [new $Uint64(3017997651, 2383555396), new $Uint64(3111507638, 3996771382)]), $toNativeArray($kindUint64, [new $Uint64(1625013416, 1905702422), new $Uint64(3889384548, 2848480580)]), $toNativeArray($kindUint64, [new $Uint64(3163117033, 1191064013), new $Uint64(2430865342, 3927784010)]), $toNativeArray($kindUint64, [new $Uint64(1806412643, 2562571841), new $Uint64(3038581678, 2762246365)]), $toNativeArray($kindUint64, [new $Uint64(3331757628, 2129472977), new $Uint64(3798227098, 1305324308)]), $toNativeArray($kindUint64, [new $Uint64(4229832165, 3478404258), new $Uint64(2373891936, 1889569516)]), $toNativeArray($kindUint64, [new $Uint64(992322911, 1126779851), new $Uint64(2967364920, 2361961896)]), $toNativeArray($kindUint64, [new $Uint64(1240403639, 334732990), new $Uint64(3709206150, 2952452370)]), $toNativeArray($kindUint64, [new $Uint64(1848994098, 1819820855), new $Uint64(2318253844, 771540907)]), $toNativeArray($kindUint64, [new $Uint64(1237500799, 127292420), new $Uint64(2897817305, 964426134)]), $toNativeArray($kindUint64, [new $Uint64(3694359646, 3380340998), new $Uint64(3622271631, 2279274491)]), $toNativeArray($kindUint64, [new $Uint64(1772103867, 1038971299), new $Uint64(2263919769, 3035159293)]), $toNativeArray($kindUint64, [new $Uint64(3288871658, 224972300), new $Uint64(2829899712, 572723644)]), $toNativeArray($kindUint64, [new $Uint64(4111089572, 2428699024), new $Uint64(3537374640, 715904555)]), $toNativeArray($kindUint64, [new $Uint64(2032560070, 3665420538), new $Uint64(2210859150, 447440347)]), $toNativeArray($kindUint64, [new $Uint64(1466958264, 2434292024), new $Uint64(2763573937, 2706784082)]), $toNativeArray($kindUint64, [new $Uint64(3981181478, 3042865030), new $Uint64(3454467422, 162254630)]), $toNativeArray($kindUint64, [new $Uint64(1414496600, 828048820), new $Uint64(2159042138, 3322634616)]), $toNativeArray($kindUint64, [new $Uint64(1768120750, 1035061025), new $Uint64(2698802673, 2005809622)]), $toNativeArray($kindUint64, [new $Uint64(62667289, 3441309929), new $Uint64(3373503341, 3581003852)]), $toNativeArray($kindUint64, [new $Uint64(78334112, 1080411939), new $Uint64(4216879177, 1255029343)]), $toNativeArray($kindUint64, [new $Uint64(1659571556, 675257462), new $Uint64(2635549485, 3468747899)]), $toNativeArray($kindUint64, [new $Uint64(1000722621, 844071828), new $Uint64(3294436857, 1114709402)]), $toNativeArray($kindUint64, [new $Uint64(3398386924, 2128831609), new $Uint64(4118046071, 2467128576)]), $toNativeArray($kindUint64, [new $Uint64(2123991827, 3478003403), new $Uint64(2573778794, 3152568096)]), $toNativeArray($kindUint64, [new $Uint64(2654989784, 3273762430), new $Uint64(3217223493, 1793226472)]), $toNativeArray($kindUint64, [new $Uint64(3318737230, 4092203038), new $Uint64(4021529366, 3315274914)]), $toNativeArray($kindUint64, [new $Uint64(3147952593, 1483885074), new $Uint64(2513455854, 998304997)]), $toNativeArray($kindUint64, [new $Uint64(713715269, 2928598167), new $Uint64(3141819817, 3395364895)]), $toNativeArray($kindUint64, [new $Uint64(4113369559, 439522237), new $Uint64(3927274772, 1022980646)]), $toNativeArray($kindUint64, [new $Uint64(1497114150, 1885314134), new $Uint64(2454546732, 2786846552)]), $toNativeArray($kindUint64, [new $Uint64(1871392688, 209159020), new $Uint64(3068183415, 3483558190)]), $toNativeArray($kindUint64, [new $Uint64(191757212, 261448775), new $Uint64(3835229269, 3280705914)]), $toNativeArray($kindUint64, [new $Uint64(1193590081, 2310889132), new $Uint64(2397018293, 2587312108)]), $toNativeArray($kindUint64, [new $Uint64(1491987601, 3962353239), new $Uint64(2996272867, 12914663)]), $toNativeArray($kindUint64, [new $Uint64(791242678, 1731716077), new $Uint64(3745341083, 3237368801)]), $toNativeArray($kindUint64, [new $Uint64(3178881234, 8580724), new $Uint64(2340838177, 1486484588)]), $toNativeArray($kindUint64, [new $Uint64(3973601542, 2158209553), new $Uint64(2926047721, 2931847559)]), $toNativeArray($kindUint64, [new $Uint64(3893260104, 550278293), new $Uint64(3657559652, 443583977)]), $toNativeArray($kindUint64, [new $Uint64(822674829, 343923933), new $Uint64(2285974782, 2424723634)]), $toNativeArray($kindUint64, [new $Uint64(3175827184, 1503646741), new $Uint64(2857468478, 883420894)]), $toNativeArray($kindUint64, [new $Uint64(1822300332, 1879558426), new $Uint64(3571835597, 3251759766)]), $toNativeArray($kindUint64, [new $Uint64(65195883, 3322207664), new $Uint64(2232397248, 2569220766)]), $toNativeArray($kindUint64, [new $Uint64(2228978502, 3079017756), new $Uint64(2790496560, 3211525957)]), $toNativeArray($kindUint64, [new $Uint64(3859964952, 1701288547), new $Uint64(3488120700, 4014407446)]), $toNativeArray($kindUint64, [new $Uint64(1338736271, 1063305342), new $Uint64(2180075438, 361521006)]), $toNativeArray($kindUint64, [new $Uint64(3820903987, 255389853), new $Uint64(2725094297, 2599384905)]), $toNativeArray($kindUint64, [new $Uint64(1554904511, 3540462789), new $Uint64(3406367872, 28005660)]), $toNativeArray($kindUint64, [new $Uint64(1943630639, 3351836662), new $Uint64(4257959840, 35007075)]), $toNativeArray($kindUint64, [new $Uint64(677898237, 3705510650), new $Uint64(2661224900, 21879422)]), $toNativeArray($kindUint64, [new $Uint64(2994856445, 1410662840), new $Uint64(3326531125, 27349277)]), $toNativeArray($kindUint64, [new $Uint64(522345084, 2837070374), new $Uint64(4158163906, 1107928421)]), $toNativeArray($kindUint64, [new $Uint64(863336589, 3920652632), new $Uint64(2598852441, 1766197087)]), $toNativeArray($kindUint64, [new $Uint64(5428913, 1679590318), new $Uint64(3248565551, 3281488183)]), $toNativeArray($kindUint64, [new $Uint64(3228011613, 3173229722), new $Uint64(4060706939, 3028118404)]), $toNativeArray($kindUint64, [new $Uint64(4164990906, 2520139488), new $Uint64(2537941837, 1355703090)]), $toNativeArray($kindUint64, [new $Uint64(3058754985, 1002690712), new $Uint64(3172427296, 2768370687)]), $toNativeArray($kindUint64, [new $Uint64(2749701907, 2327105214), new $Uint64(3965534120, 3460463359)]), $toNativeArray($kindUint64, [new $Uint64(3329176428, 917569847), new $Uint64(2478458825, 2162789599)]), $toNativeArray($kindUint64, [new $Uint64(3087728711, 1146962308), new $Uint64(3098073531, 3777228823)]), $toNativeArray($kindUint64, [new $Uint64(2785919065, 359961061), new $Uint64(3872591914, 3647794205)]), $toNativeArray($kindUint64, [new $Uint64(2278070327, 2909330223), new $Uint64(2420369946, 3353613202)]), $toNativeArray($kindUint64, [new $Uint64(700104261, 2562920955), new $Uint64(3025462433, 2044532855)]), $toNativeArray($kindUint64, [new $Uint64(4096355798, 4277393018), new $Uint64(3781828041, 3629407892)]), $toNativeArray($kindUint64, [new $Uint64(412738726, 1599628812), new $Uint64(2363642526, 657767197)]), $toNativeArray($kindUint64, [new $Uint64(1589665231, 4147019663), new $Uint64(2954553157, 2969692644)]), $toNativeArray($kindUint64, [new $Uint64(1987081539, 4110032755), new $Uint64(3693191447, 490890333)]), $toNativeArray($kindUint64, [new $Uint64(1778796874, 2031899560), new $Uint64(2308244654, 1917419194)]), $toNativeArray($kindUint64, [new $Uint64(76012445, 392390802), new $Uint64(2885305818, 249290345)]), $toNativeArray($kindUint64, [new $Uint64(1168757380, 1564230326), new $Uint64(3606632272, 2459096579)]), $toNativeArray($kindUint64, [new $Uint64(193602450, 3125127602), new $Uint64(2254145170, 1536935362)]), $toNativeArray($kindUint64, [new $Uint64(2389486711, 1758925854), new $Uint64(2817681462, 4068652850)]), $toNativeArray($kindUint64, [new $Uint64(839374741, 1124915494), new $Uint64(3522101828, 2938332415)]), $toNativeArray($kindUint64, [new $Uint64(2135221949, 1239943096), new $Uint64(2201313642, 3983941407)]), $toNativeArray($kindUint64, [new $Uint64(1595285612, 2623670694), new $Uint64(2751642053, 2832443111)]), $toNativeArray($kindUint64, [new $Uint64(920365191, 3279588367), new $Uint64(3439552567, 319328417)]), $toNativeArray($kindUint64, [new $Uint64(3259582804, 3660355465), new $Uint64(2149720354, 1810192996)]), $toNativeArray($kindUint64, [new $Uint64(4074478506, 280477036), new $Uint64(2687150443, 115257597)]), $toNativeArray($kindUint64, [new $Uint64(1871872660, 2498079943), new $Uint64(3358938053, 3365297469)]), $toNativeArray($kindUint64, [new $Uint64(3413582649, 3122599929), new $Uint64(4198672567, 985396364)]), $toNativeArray($kindUint64, [new $Uint64(4280972804, 341012219), new $Uint64(2624170354, 2226485463)]), $toNativeArray($kindUint64, [new $Uint64(4277474181, 426265274), new $Uint64(3280212943, 635623181)]), $toNativeArray($kindUint64, [new $Uint64(2125617254, 1606573417), new $Uint64(4100266178, 4015754449)]), $toNativeArray($kindUint64, [new $Uint64(4012865343, 4225333857), new $Uint64(2562666361, 3583588354)]), $toNativeArray($kindUint64, [new $Uint64(2868598031, 4207925498), new $Uint64(3203332952, 1258259971)]), $toNativeArray($kindUint64, [new $Uint64(2512005715, 4186165048), new $Uint64(4004166190, 1572824964)]), $toNativeArray($kindUint64, [new $Uint64(3717487220, 2079482243), new $Uint64(2502603868, 4204241074)]), $toNativeArray($kindUint64, [new $Uint64(2499375377, 2599352804), new $Uint64(3128254836, 960334047)]), $toNativeArray($kindUint64, [new $Uint64(2050477398, 27965533), new $Uint64(3910318545, 1200417559)]), $toNativeArray($kindUint64, [new $Uint64(2892161109, 3238703930), new $Uint64(2443949090, 3434615534)]), $toNativeArray($kindUint64, [new $Uint64(1467717739, 827154441), new $Uint64(3054936363, 2145785770)]), $toNativeArray($kindUint64, [new $Uint64(3982130821, 4255168523), new $Uint64(3818670454, 1608490388)]), $toNativeArray($kindUint64, [new $Uint64(341348115, 3196351239), new $Uint64(2386669033, 4226531965)]), $toNativeArray($kindUint64, [new $Uint64(1500426968, 2921697224), new $Uint64(2983336292, 2061939484)]), $toNativeArray($kindUint64, [new $Uint64(1875533710, 3652121531), new $Uint64(3729170365, 2577424355)]), $toNativeArray($kindUint64, [new $Uint64(635337657, 1208834132), new $Uint64(2330731478, 2147761134)]), $toNativeArray($kindUint64, [new $Uint64(2941655719, 2584784490), new $Uint64(2913414348, 537217769)]), $toNativeArray($kindUint64, [new $Uint64(455844177, 2157238788), new $Uint64(3641767935, 671522212)]), $toNativeArray($kindUint64, [new $Uint64(2432386258, 4032628802), new $Uint64(2276104959, 2030314118)]), $toNativeArray($kindUint64, [new $Uint64(892999175, 2893302355), new $Uint64(2845131199, 1464150824)]), $toNativeArray($kindUint64, [new $Uint64(1116248969, 2542886120), new $Uint64(3556413999, 756446706)]), $toNativeArray($kindUint64, [new $Uint64(1771397429, 4273658385), new $Uint64(2222758749, 2083391927)]), $toNativeArray($kindUint64, [new $Uint64(1140504963, 2120847509), new $Uint64(2778448436, 3677981733)]), $toNativeArray($kindUint64, [new $Uint64(2499373028, 1577317563), new $Uint64(3473060546, 302509870)]), $toNativeArray($kindUint64, [new $Uint64(488366318, 3133307125), new $Uint64(2170662841, 1262810493)]), $toNativeArray($kindUint64, [new $Uint64(1684199722, 1769150258), new $Uint64(2713328551, 2652254940)]), $toNativeArray($kindUint64, [new $Uint64(2105249653, 63954174), new $Uint64(3391660689, 2241576851)]), $toNativeArray($kindUint64, [new $Uint64(1557820242, 1153684542), new $Uint64(4239575861, 3875712888)]), $toNativeArray($kindUint64, [new $Uint64(973637651, 1794794663), new $Uint64(2649734913, 2959191467)]), $toNativeArray($kindUint64, [new $Uint64(143305240, 1169751504), new $Uint64(3312168642, 477763862)]), $toNativeArray($kindUint64, [new $Uint64(2326615198, 1462189381), new $Uint64(4140210802, 2744688475)]), $toNativeArray($kindUint64, [new $Uint64(917263586, 4135093835), new $Uint64(2587631751, 2789172121)]), $toNativeArray($kindUint64, [new $Uint64(2220321307, 3021383645), new $Uint64(3234539689, 2412723327)]), $toNativeArray($kindUint64, [new $Uint64(1701659810, 2702987733), new $Uint64(4043174611, 4089645983)]), $toNativeArray($kindUint64, [new $Uint64(2674150117, 2763109157), new $Uint64(2526984132, 2019157827)]), $toNativeArray($kindUint64, [new $Uint64(2268945823, 232660974), new $Uint64(3158730165, 2523947284)]), $toNativeArray($kindUint64, [new $Uint64(2836182278, 3512051690), new $Uint64(3948412706, 4228675929)]), $toNativeArray($kindUint64, [new $Uint64(162001188, 1121290482), new $Uint64(2467757941, 3716664280)]), $toNativeArray($kindUint64, [new $Uint64(202501485, 1401613103), new $Uint64(3084697427, 1424604878)]), $toNativeArray($kindUint64, [new $Uint64(2400610504, 2825758202), new $Uint64(3855871784, 707014273)]), $toNativeArray($kindUint64, [new $Uint64(4184736125, 1766098876), new $Uint64(2409919865, 441883920)]), $toNativeArray($kindUint64, [new $Uint64(935952860, 3281365420), new $Uint64(3012399831, 1626096725)]), $toNativeArray($kindUint64, [new $Uint64(2243682899, 4101706775), new $Uint64(3765499789, 958879082)]), $toNativeArray($kindUint64, [new $Uint64(2476043636, 2026695822), new $Uint64(2353437368, 1136170338)]), $toNativeArray($kindUint64, [new $Uint64(947570897, 2533369778), new $Uint64(2941796710, 1420212923)]), $toNativeArray($kindUint64, [new $Uint64(110721797, 4240454046), new $Uint64(3677245887, 3922749802)]), $toNativeArray($kindUint64, [new $Uint64(1142942947, 3187154691), new $Uint64(2298278679, 4062331362)]), $toNativeArray($kindUint64, [new $Uint64(3576162332, 2910201539), new $Uint64(2872848349, 4004172378)]), $toNativeArray($kindUint64, [new $Uint64(2322719267, 3637751924), new $Uint64(3591060437, 1783990001)]), $toNativeArray($kindUint64, [new $Uint64(4136054102, 1736724041), new $Uint64(2244412773, 1651864662)]), $toNativeArray($kindUint64, [new $Uint64(3022583980, 23421403), new $Uint64(2805515966, 3138572652)]), $toNativeArray($kindUint64, [new $Uint64(3778229975, 29276754), new $Uint64(3506894958, 1775732167)]), $toNativeArray($kindUint64, [new $Uint64(3972006470, 1628910707), new $Uint64(2191809349, 36090780)]), $toNativeArray($kindUint64, [new $Uint64(670040791, 4183622032), new $Uint64(2739761686, 1118855300)]), $toNativeArray($kindUint64, [new $Uint64(837550989, 4155785716), new $Uint64(3424702107, 3546052773)]), $toNativeArray($kindUint64, [new $Uint64(2120680561, 1973506673), new $Uint64(4280877634, 3358824142)]), $toNativeArray($kindUint64, [new $Uint64(251683526, 3917796230), new $Uint64(2675548521, 3173006913)]), $toNativeArray($kindUint64, [new $Uint64(1388346232, 2749761640), new $Uint64(3344435652, 745033169)]), $toNativeArray($kindUint64, [new $Uint64(2809174614, 3437202050), new $Uint64(4180544565, 931291461)]), $toNativeArray($kindUint64, [new $Uint64(2292605046, 1074509457), new $Uint64(2612840353, 1118928075)]), $toNativeArray($kindUint64, [new $Uint64(1792014483, 3490620469), new $Uint64(3266050441, 2472401918)]), $toNativeArray($kindUint64, [new $Uint64(92534456, 3289533763), new $Uint64(4082563051, 4164244222)]), $toNativeArray($kindUint64, [new $Uint64(3279059507, 2055958602), new $Uint64(2551601907, 2065781726)]), $toNativeArray($kindUint64, [new $Uint64(1951340736, 1496206428), new $Uint64(3189502384, 1508485334)]), $toNativeArray($kindUint64, [new $Uint64(291692272, 1870258035), new $Uint64(3986877980, 1885606668)]), $toNativeArray($kindUint64, [new $Uint64(2329791318, 1168911272), new $Uint64(2491798737, 3325987815)]), $toNativeArray($kindUint64, [new $Uint64(1838497323, 3608622738), new $Uint64(3114748422, 936259297)]), $toNativeArray($kindUint64, [new $Uint64(3371863478, 3437036599), new $Uint64(3893435527, 3317807769)]), $toNativeArray($kindUint64, [new $Uint64(496801938, 1074406050), new $Uint64(2433397204, 3684242592)]), $toNativeArray($kindUint64, [new $Uint64(621002422, 3490491211), new $Uint64(3041746506, 310335944)]), $toNativeArray($kindUint64, [new $Uint64(776253028, 2215630365), new $Uint64(3802183132, 2535403578)]), $toNativeArray($kindUint64, [new $Uint64(1558899966, 3532252626), new $Uint64(2376364457, 3732110884)]), $toNativeArray($kindUint64, [new $Uint64(1948624958, 2267832135), new $Uint64(2970455572, 1443913133)]), $toNativeArray($kindUint64, [new $Uint64(3509523022, 687306521), new $Uint64(3713069465, 1804891416)]), $toNativeArray($kindUint64, [new $Uint64(2193451888, 3650792047), new $Uint64(2320668415, 3812411695)]), $toNativeArray($kindUint64, [new $Uint64(1668073037, 268522763), new $Uint64(2900835519, 3691772795)]), $toNativeArray($kindUint64, [new $Uint64(1011349472, 1409395278), new $Uint64(3626044399, 3540974170)]), $toNativeArray($kindUint64, [new $Uint64(1705835244, 880872049), new $Uint64(2266277749, 3823721592)]), $toNativeArray($kindUint64, [new $Uint64(2132294055, 1101090061), new $Uint64(2832847187, 1558426518)]), $toNativeArray($kindUint64, [new $Uint64(517883921, 302620752), new $Uint64(3541058984, 874291324)]), $toNativeArray($kindUint64, [new $Uint64(2471161098, 2873492530), new $Uint64(2213161865, 546432077)]), $toNativeArray($kindUint64, [new $Uint64(4162693197, 1444382015), new $Uint64(2766452331, 1756781920)]), $toNativeArray($kindUint64, [new $Uint64(908399200, 2879219342), new $Uint64(3458065414, 1122235577)]), $toNativeArray($kindUint64, [new $Uint64(3252104060, 1799512089), new $Uint64(2161290883, 3922622707)]), $toNativeArray($kindUint64, [new $Uint64(2991388251, 2249390111), new $Uint64(2701613604, 3829536560)]), $toNativeArray($kindUint64, [new $Uint64(3739235314, 1737995815), new $Uint64(3377017006, 491953404)]), $toNativeArray($kindUint64, [new $Uint64(379076847, 25011121), new $Uint64(4221271257, 2762425404)]), $toNativeArray($kindUint64, [new $Uint64(2384406677, 1626244686), new $Uint64(2638294536, 115903141)]), $toNativeArray($kindUint64, [new $Uint64(4054250170, 3106547682), new $Uint64(3297868170, 144878926)]), $toNativeArray($kindUint64, [new $Uint64(2920329065, 1735700955), new $Uint64(4122335212, 2328582306)]), $toNativeArray($kindUint64, [new $Uint64(2898947489, 3769167657), new $Uint64(2576459507, 3602847589)]), $toNativeArray($kindUint64, [new $Uint64(402458890, 1490234099), new $Uint64(3220574384, 3429817663)]), $toNativeArray($kindUint64, [new $Uint64(3724299084, 4010276272), new $Uint64(4025717980, 4287272078)]), $toNativeArray($kindUint64, [new $Uint64(1253945104, 358939022), new $Uint64(2516073738, 532061401)]), $toNativeArray($kindUint64, [new $Uint64(2641173204, 448673777), new $Uint64(3145092172, 2812560399)]), $toNativeArray($kindUint64, [new $Uint64(2227724681, 560842221), new $Uint64(3931365215, 3515700499)]), $toNativeArray($kindUint64, [new $Uint64(855457013, 3034880948), new $Uint64(2457103259, 3807925548)]), $toNativeArray($kindUint64, [new $Uint64(1069321267, 572375713), new $Uint64(3071379074, 3686165111)]), $toNativeArray($kindUint64, [new $Uint64(262909759, 3936695114), new $Uint64(3839223843, 2460222741)]), $toNativeArray($kindUint64, [new $Uint64(701189511, 4071047182), new $Uint64(2399514902, 1000768301)]), $toNativeArray($kindUint64, [new $Uint64(1950228713, 4015067154), new $Uint64(2999393627, 3398444024)]), $toNativeArray($kindUint64, [new $Uint64(2437785892, 1797608470), new $Uint64(3749242034, 3174313206)]), $toNativeArray($kindUint64, [new $Uint64(449874358, 3270988942), new $Uint64(2343276271, 3057687578)]), $toNativeArray($kindUint64, [new $Uint64(2709826596, 1941252529), new $Uint64(2929095339, 2748367648)]), $toNativeArray($kindUint64, [new $Uint64(3387283245, 2426565662), new $Uint64(3661369174, 2361717736)]), $toNativeArray($kindUint64, [new $Uint64(2117052028, 2053474450), new $Uint64(2288355734, 402331761)]), $toNativeArray($kindUint64, [new $Uint64(3720056859, 2566843063), new $Uint64(2860444667, 2650398349)]), $toNativeArray($kindUint64, [new $Uint64(1428845602, 2134812005), new $Uint64(3575555834, 2239256113)]), $toNativeArray($kindUint64, [new $Uint64(3577383061, 2407999327), new $Uint64(2234722396, 2473276894)]), $toNativeArray($kindUint64, [new $Uint64(2324245178, 4083740983), new $Uint64(2793402995, 3091596118)]), $toNativeArray($kindUint64, [new $Uint64(757822825, 2957192581), new $Uint64(3491753744, 2790753324)]), $toNativeArray($kindUint64, [new $Uint64(2621122914, 237632627), new $Uint64(2182346090, 1744220827)]), $toNativeArray($kindUint64, [new $Uint64(2202661818, 2444524431), new $Uint64(2727932613, 32792386)]), $toNativeArray($kindUint64, [new $Uint64(605843625, 908171891), new $Uint64(3409915766, 1114732307)]), $toNativeArray($kindUint64, [new $Uint64(3978530003, 2208956688), new $Uint64(4262394707, 3540899031)]), $toNativeArray($kindUint64, [new $Uint64(4097193988, 843727018), new $Uint64(2663996692, 1676190982)]), $toNativeArray($kindUint64, [new $Uint64(2974008837, 1054658773), new $Uint64(3329995865, 2095238728)]), $toNativeArray($kindUint64, [new $Uint64(3717511046, 2392065290), new $Uint64(4162494831, 3692790234)]), $toNativeArray($kindUint64, [new $Uint64(3397186228, 421298982), new $Uint64(2601559269, 3918606632)]), $toNativeArray($kindUint64, [new $Uint64(4246482785, 526623728), new $Uint64(3251949087, 1677032818)]), $toNativeArray($kindUint64, [new $Uint64(3160619833, 1732021484), new $Uint64(4064936359, 1022549199)]), $toNativeArray($kindUint64, [new $Uint64(3586000131, 3766867987), new $Uint64(2540585224, 2249705985)]), $toNativeArray($kindUint64, [new $Uint64(1261274692, 3634843160), new $Uint64(3175731530, 2812132482)]), $toNativeArray($kindUint64, [new $Uint64(3724077014, 248586654), new $Uint64(3969664413, 1367681954)]), $toNativeArray($kindUint64, [new $Uint64(3401289957, 3376592131), new $Uint64(2481040258, 1391672133)]), $toNativeArray($kindUint64, [new $Uint64(1030386975, 999514691), new $Uint64(3101300322, 3887073815)]), $toNativeArray($kindUint64, [new $Uint64(214241895, 175651540), new $Uint64(3876625403, 2711358621)]), $toNativeArray($kindUint64, [new $Uint64(670772096, 1720394949), new $Uint64(2422890877, 1157728226)]), $toNativeArray($kindUint64, [new $Uint64(2985948768, 2150493686), new $Uint64(3028613596, 2520902106)]), $toNativeArray($kindUint64, [new $Uint64(1584952312, 2688117107), new $Uint64(3785766995, 3151127633)]), $toNativeArray($kindUint64, [new $Uint64(3674949755, 1680073192), new $Uint64(2366104372, 1432583858)]), $toNativeArray($kindUint64, [new $Uint64(2446203546, 1026349666), new $Uint64(2957630465, 1790729823)]), $toNativeArray($kindUint64, [new $Uint64(1984012608, 3430420731), new $Uint64(3697038081, 3312154103)]), $toNativeArray($kindUint64, [new $Uint64(2850620616, 2144012957), new $Uint64(2310648801, 459483578)]), $toNativeArray($kindUint64, [new $Uint64(1415792122, 2680016196), new $Uint64(2888311001, 1648096297)]), $toNativeArray($kindUint64, [new $Uint64(2843481977, 1202536597), new $Uint64(3610388751, 3133862195)]), $toNativeArray($kindUint64, [new $Uint64(1240305323, 3435939933), new $Uint64(2256492969, 3569276608)]), $toNativeArray($kindUint64, [new $Uint64(1550381654, 3221183092), new $Uint64(2820616212, 1240370288)]), $toNativeArray($kindUint64, [new $Uint64(1937977068, 1878995217), new $Uint64(3525770265, 1550462860)]), $toNativeArray($kindUint64, [new $Uint64(3358719315, 3321855659), new $Uint64(2203606415, 3653393847)]), $toNativeArray($kindUint64, [new $Uint64(3124657320, 3078577749), new $Uint64(2754508019, 3493000485)]), $toNativeArray($kindUint64, [new $Uint64(684596178, 3848222187), new $Uint64(3443135024, 3292508783)]), $toNativeArray($kindUint64, [new $Uint64(2038485347, 3478880691), new $Uint64(2151959390, 2057817989)]), $toNativeArray($kindUint64, [new $Uint64(3621848508, 3274859039), new $Uint64(2689949238, 424788838)]), $toNativeArray($kindUint64, [new $Uint64(2379826987, 4093573799), new $Uint64(3362436547, 2678469696)]), $toNativeArray($kindUint64, [new $Uint64(2974783734, 4043225425), new $Uint64(4203045684, 2274345296)]), $toNativeArray($kindUint64, [new $Uint64(1859239834, 1453274067), new $Uint64(2626903552, 3568949458)]), $toNativeArray($kindUint64, [new $Uint64(176566144, 3964076232), new $Uint64(3283629441, 166219527)]), $toNativeArray($kindUint64, [new $Uint64(3441933153, 660127994), new $Uint64(4104536801, 1281516232)]), $toNativeArray($kindUint64, [new $Uint64(2151208220, 3096934556), new $Uint64(2565335500, 3485302205)]), $toNativeArray($kindUint64, [new $Uint64(3762752099, 3871168195), new $Uint64(3206669376, 61660460)]), $toNativeArray($kindUint64, [new $Uint64(408472828, 3765218420), new $Uint64(4008336720, 77075576)]), $toNativeArray($kindUint64, [new $Uint64(255295518, 205777864), new $Uint64(2505210450, 48172235)]), $toNativeArray($kindUint64, [new $Uint64(3540344869, 2404705978), new $Uint64(3131513062, 2207698941)]), $toNativeArray($kindUint64, [new $Uint64(1204205614, 4079624297), new $Uint64(3914391328, 612140029)]), $toNativeArray($kindUint64, [new $Uint64(1289499421, 1476023361), new $Uint64(2446494580, 382587518)]), $toNativeArray($kindUint64, [new $Uint64(3759357924, 2918771026), new $Uint64(3058118225, 478234397)]), $toNativeArray($kindUint64, [new $Uint64(1477971933, 3648463782), new $Uint64(3822647781, 1671534821)]), $toNativeArray($kindUint64, [new $Uint64(1460603370, 2817160776), new $Uint64(2389154863, 1581580175)]), $toNativeArray($kindUint64, [new $Uint64(752012389, 1373967322), new $Uint64(2986443579, 903233395)]), $toNativeArray($kindUint64, [new $Uint64(4161240958, 2791200977), new $Uint64(3733054474, 55299919)]), $toNativeArray($kindUint64, [new $Uint64(4211388335, 670758786), new $Uint64(2333159046, 1108304273)]), $toNativeArray($kindUint64, [new $Uint64(2043009946, 4059673955), new $Uint64(2916448807, 3532863990)]), $toNativeArray($kindUint64, [new $Uint64(406278785, 2927108796), new $Uint64(3645561009, 3342338164)]), $toNativeArray($kindUint64, [new $Uint64(2401407889, 218830261), new $Uint64(2278475631, 478348616)]), $toNativeArray($kindUint64, [new $Uint64(3001759861, 1347279650), new $Uint64(2848094538, 3819161242)]), $toNativeArray($kindUint64, [new $Uint64(1604716178, 2757841387), new $Uint64(3560118173, 2626467905)]), $toNativeArray($kindUint64, [new $Uint64(3687302171, 2797392691), new $Uint64(2225073858, 2178413352)]), $toNativeArray($kindUint64, [new $Uint64(314160418, 2422999040), new $Uint64(2781342323, 575533043)]), $toNativeArray($kindUint64, [new $Uint64(3613925995, 881265152), new $Uint64(3476677903, 3940641775)]), $toNativeArray($kindUint64, [new $Uint64(3869316483, 13919808), new $Uint64(2172923689, 4073513845)]), $toNativeArray($kindUint64, [new $Uint64(1615420131, 3238625232), new $Uint64(2716154612, 1870666835)]), $toNativeArray($kindUint64, [new $Uint64(945533340, 2974539716), new $Uint64(3395193265, 2338333544)]), $toNativeArray($kindUint64, [new $Uint64(1181916675, 3718174645), new $Uint64(4243991581, 3996658754)]), $toNativeArray($kindUint64, [new $Uint64(1812439746, 1786988241), new $Uint64(2652494738, 3034782633)]), $toNativeArray($kindUint64, [new $Uint64(3339291507, 86251653), new $Uint64(3315618423, 1645994643)]), $toNativeArray($kindUint64, [new $Uint64(3100372559, 3329040039), new $Uint64(4144523029, 983751480)]), $toNativeArray($kindUint64, [new $Uint64(1937732849, 3691262760), new $Uint64(2590326893, 1151715587)]), $toNativeArray($kindUint64, [new $Uint64(1348424238, 1392852978), new $Uint64(3237908616, 2513386308)]), $toNativeArray($kindUint64, [new $Uint64(1685530297, 3888549871), new $Uint64(4047385770, 3141732885)]), $toNativeArray($kindUint64, [new $Uint64(1590327348, 819730933), new $Uint64(2529616106, 3037324877)]), $toNativeArray($kindUint64, [new $Uint64(3061651009, 1024663666), new $Uint64(3162020133, 1649172448)]), $toNativeArray($kindUint64, [new $Uint64(3827063761, 2354571407), new $Uint64(3952525166, 3135207384)]), $toNativeArray($kindUint64, [new $Uint64(2391914850, 4155961689), new $Uint64(2470328229, 885762791)]), $toNativeArray($kindUint64, [new $Uint64(1916151739, 3047468464), new $Uint64(3087910286, 2180945313)]), $toNativeArray($kindUint64, [new $Uint64(3468931498, 2735593756), new $Uint64(3859887858, 578697993)]), $toNativeArray($kindUint64, [new $Uint64(557469450, 2783487921), new $Uint64(2412429911, 1435428070)]), $toNativeArray($kindUint64, [new $Uint64(2844320461, 1331876253), new $Uint64(3015537389, 720543263)]), $toNativeArray($kindUint64, [new $Uint64(2481658752, 2738587141), new $Uint64(3769421736, 1974420903)]), $toNativeArray($kindUint64, [new $Uint64(3161649456, 1711616963), new $Uint64(2355888585, 1234013064)]), $toNativeArray($kindUint64, [new $Uint64(3952061820, 2139521204), new $Uint64(2944860731, 2616258154)]), $toNativeArray($kindUint64, [new $Uint64(2792593627, 2674401505), new $Uint64(3681075914, 2196580869)]), $toNativeArray($kindUint64, [new $Uint64(2282241929, 1134630028), new $Uint64(2300672446, 2446604867)]), $toNativeArray($kindUint64, [new $Uint64(1779060587, 2492029360), new $Uint64(2875840558, 910772436)]), $toNativeArray($kindUint64, [new $Uint64(2223825734, 2041294876), new $Uint64(3594800697, 3285949193)]), $toNativeArray($kindUint64, [new $Uint64(4074245644, 202067473), new $Uint64(2246750436, 443105509)]), $toNativeArray($kindUint64, [new $Uint64(1871581583, 252584341), new $Uint64(2808438045, 553881887)]), $toNativeArray($kindUint64, [new $Uint64(1265735154, 3536955899), new $Uint64(3510547556, 1766094183)])]);
detailedPowersOfTenstrconv.arrayTypestrconv.detailedPowersOfTen  5 N		float32info = new floatInfo.ptr(23, 8, -127);
float32infostrconv.float32infostrconv.floatInfo  7 ND		float64info = new floatInfo.ptr(52, 11, -1023);
float64infostrconv.float64infostrconv.floatInfo  �c ��		uint64pow10 = $toNativeArray($kindUint64, [new $Uint64(0, 1), new $Uint64(0, 10), new $Uint64(0, 100), new $Uint64(0, 1000), new $Uint64(0, 10000), new $Uint64(0, 100000), new $Uint64(0, 1000000), new $Uint64(0, 10000000), new $Uint64(0, 100000000), new $Uint64(0, 1000000000), new $Uint64(2, 1410065408), new $Uint64(23, 1215752192), new $Uint64(232, 3567587328), new $Uint64(2328, 1316134912), new $Uint64(23283, 276447232), new $Uint64(232830, 2764472320), new $Uint64(2328306, 1874919424), new $Uint64(23283064, 1569325056), new $Uint64(232830643, 2808348672), new $Uint64(2328306436, 2313682944)]);
uint64pow10strconv.uint64pow10  �
� �		isPrint16 = new sliceType$4([32, 126, 161, 887, 890, 895, 900, 1366, 1369, 1418, 1421, 1479, 1488, 1514, 1519, 1524, 1542, 1563, 1566, 1805, 1808, 1866, 1869, 1969, 1984, 2042, 2045, 2093, 2096, 2139, 2142, 2154, 2208, 2247, 2259, 2444, 2447, 2448, 2451, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2531, 2534, 2558, 2561, 2570, 2575, 2576, 2579, 2617, 2620, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2654, 2662, 2678, 2689, 2745, 2748, 2765, 2768, 2768, 2784, 2787, 2790, 2801, 2809, 2828, 2831, 2832, 2835, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2901, 2903, 2908, 2915, 2918, 2935, 2946, 2954, 2958, 2965, 2969, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3021, 3024, 3024, 3031, 3031, 3046, 3066, 3072, 3129, 3133, 3149, 3157, 3162, 3168, 3171, 3174, 3183, 3191, 3257, 3260, 3277, 3285, 3286, 3294, 3299, 3302, 3314, 3328, 3407, 3412, 3427, 3430, 3478, 3482, 3517, 3520, 3526, 3530, 3530, 3535, 3551, 3558, 3567, 3570, 3572, 3585, 3642, 3647, 3675, 3713, 3773, 3776, 3789, 3792, 3801, 3804, 3807, 3840, 3948, 3953, 4058, 4096, 4295, 4301, 4301, 4304, 4685, 4688, 4701, 4704, 4749, 4752, 4789, 4792, 4805, 4808, 4885, 4888, 4954, 4957, 4988, 4992, 5017, 5024, 5109, 5112, 5117, 5120, 5788, 5792, 5880, 5888, 5908, 5920, 5942, 5952, 5971, 5984, 6003, 6016, 6109, 6112, 6121, 6128, 6137, 6144, 6157, 6160, 6169, 6176, 6264, 6272, 6314, 6320, 6389, 6400, 6443, 6448, 6459, 6464, 6464, 6468, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6618, 6622, 6683, 6686, 6780, 6783, 6793, 6800, 6809, 6816, 6829, 6832, 6848, 6912, 6987, 6992, 7036, 7040, 7155, 7164, 7223, 7227, 7241, 7245, 7304, 7312, 7354, 7357, 7367, 7376, 7418, 7424, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8061, 8064, 8147, 8150, 8175, 8178, 8190, 8208, 8231, 8240, 8286, 8304, 8305, 8308, 8348, 8352, 8383, 8400, 8432, 8448, 8587, 8592, 9254, 9280, 9290, 9312, 11123, 11126, 11507, 11513, 11559, 11565, 11565, 11568, 11623, 11631, 11632, 11647, 11670, 11680, 11858, 11904, 12019, 12032, 12245, 12272, 12283, 12289, 12438, 12441, 12543, 12549, 12771, 12784, 40956, 40960, 42124, 42128, 42182, 42192, 42539, 42560, 42743, 42752, 42943, 42946, 42954, 42997, 43052, 43056, 43065, 43072, 43127, 43136, 43205, 43214, 43225, 43232, 43347, 43359, 43388, 43392, 43481, 43486, 43574, 43584, 43597, 43600, 43609, 43612, 43714, 43739, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43883, 43888, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64449, 64467, 64831, 64848, 64911, 64914, 64967, 65008, 65021, 65024, 65049, 65056, 65131, 65136, 65276, 65281, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65504, 65518, 65532, 65533]);
	isPrint16strconv.isPrint16strconv.sliceType$4  �[ қ		isNotPrint16 = new sliceType$4([173, 907, 909, 930, 1328, 1424, 1757, 2111, 2143, 2229, 2274, 2436, 2473, 2481, 2526, 2564, 2601, 2609, 2612, 2615, 2621, 2653, 2692, 2702, 2706, 2729, 2737, 2740, 2758, 2762, 2816, 2820, 2857, 2865, 2868, 2910, 2948, 2961, 2971, 2973, 3017, 3085, 3089, 3113, 3141, 3145, 3159, 3213, 3217, 3241, 3252, 3269, 3273, 3295, 3312, 3341, 3345, 3397, 3401, 3456, 3460, 3506, 3516, 3541, 3543, 3715, 3717, 3723, 3748, 3750, 3781, 3783, 3912, 3992, 4029, 4045, 4294, 4681, 4695, 4697, 4745, 4785, 4799, 4801, 4823, 4881, 5760, 5901, 5997, 6001, 6431, 6751, 7674, 8024, 8026, 8028, 8030, 8117, 8133, 8156, 8181, 8335, 11158, 11311, 11359, 11558, 11687, 11695, 11703, 11711, 11719, 11727, 11735, 11743, 11930, 12352, 12592, 12687, 12831, 43470, 43519, 43815, 43823, 64311, 64317, 64319, 64322, 64325, 65107, 65127, 65141, 65511]);
isNotPrint16strconv.isNotPrint16strconv.sliceType$4  �� �_		isPrint32 = new sliceType$5([65536, 65613, 65616, 65629, 65664, 65786, 65792, 65794, 65799, 65843, 65847, 65948, 65952, 65952, 66000, 66045, 66176, 66204, 66208, 66256, 66272, 66299, 66304, 66339, 66349, 66378, 66384, 66426, 66432, 66499, 66504, 66517, 66560, 66717, 66720, 66729, 66736, 66771, 66776, 66811, 66816, 66855, 66864, 66915, 66927, 66927, 67072, 67382, 67392, 67413, 67424, 67431, 67584, 67589, 67592, 67640, 67644, 67644, 67647, 67742, 67751, 67759, 67808, 67829, 67835, 67867, 67871, 67897, 67903, 67903, 67968, 68023, 68028, 68047, 68050, 68102, 68108, 68149, 68152, 68154, 68159, 68168, 68176, 68184, 68192, 68255, 68288, 68326, 68331, 68342, 68352, 68405, 68409, 68437, 68440, 68466, 68472, 68497, 68505, 68508, 68521, 68527, 68608, 68680, 68736, 68786, 68800, 68850, 68858, 68903, 68912, 68921, 69216, 69293, 69296, 69297, 69376, 69415, 69424, 69465, 69552, 69579, 69600, 69622, 69632, 69709, 69714, 69743, 69759, 69825, 69840, 69864, 69872, 69881, 69888, 69959, 69968, 70006, 70016, 70132, 70144, 70206, 70272, 70313, 70320, 70378, 70384, 70393, 70400, 70412, 70415, 70416, 70419, 70468, 70471, 70472, 70475, 70477, 70480, 70480, 70487, 70487, 70493, 70499, 70502, 70508, 70512, 70516, 70656, 70753, 70784, 70855, 70864, 70873, 71040, 71093, 71096, 71133, 71168, 71236, 71248, 71257, 71264, 71276, 71296, 71352, 71360, 71369, 71424, 71450, 71453, 71467, 71472, 71487, 71680, 71739, 71840, 71922, 71935, 71942, 71945, 71945, 71948, 71992, 71995, 72006, 72016, 72025, 72096, 72103, 72106, 72151, 72154, 72164, 72192, 72263, 72272, 72354, 72384, 72440, 72704, 72773, 72784, 72812, 72816, 72847, 72850, 72886, 72960, 73014, 73018, 73031, 73040, 73049, 73056, 73112, 73120, 73129, 73440, 73464, 73648, 73648, 73664, 73713, 73727, 74649, 74752, 74868, 74880, 75075, 77824, 78894, 82944, 83526, 92160, 92728, 92736, 92777, 92782, 92783, 92880, 92909, 92912, 92917, 92928, 92997, 93008, 93047, 93053, 93071, 93760, 93850, 93952, 94026, 94031, 94087, 94095, 94111, 94176, 94180, 94192, 94193, 94208, 100343, 100352, 101589, 101632, 101640, 110592, 110878, 110928, 110930, 110948, 110951, 110960, 111355, 113664, 113770, 113776, 113788, 113792, 113800, 113808, 113817, 113820, 113823, 118784, 119029, 119040, 119078, 119081, 119154, 119163, 119272, 119296, 119365, 119520, 119539, 119552, 119638, 119648, 119672, 119808, 119967, 119970, 119970, 119973, 119974, 119977, 120074, 120077, 120134, 120138, 120485, 120488, 120779, 120782, 121483, 121499, 121519, 122880, 122904, 122907, 122922, 123136, 123180, 123184, 123197, 123200, 123209, 123214, 123215, 123584, 123641, 123647, 123647, 124928, 125124, 125127, 125142, 125184, 125259, 125264, 125273, 125278, 125279, 126065, 126132, 126209, 126269, 126464, 126500, 126503, 126523, 126530, 126530, 126535, 126548, 126551, 126564, 126567, 126619, 126625, 126651, 126704, 126705, 126976, 127019, 127024, 127123, 127136, 127150, 127153, 127221, 127232, 127405, 127462, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 128727, 128736, 128748, 128752, 128764, 128768, 128883, 128896, 128984, 128992, 129003, 129024, 129035, 129040, 129095, 129104, 129113, 129120, 129159, 129168, 129197, 129200, 129201, 129280, 129619, 129632, 129645, 129648, 129652, 129656, 129658, 129664, 129670, 129680, 129704, 129712, 129718, 129728, 129730, 129744, 129750, 129792, 129994, 130032, 130041, 131072, 173789, 173824, 177972, 177984, 178205, 178208, 183969, 183984, 191456, 194560, 195101, 196608, 201546, 917760, 917999]);
	isPrint32strconv.isPrint32strconv.sliceType$5  �� �		isNotPrint32 = new sliceType$4([12, 39, 59, 62, 399, 926, 2057, 2102, 2134, 2291, 2564, 2580, 2584, 3711, 3754, 4285, 4405, 4576, 4626, 4743, 4745, 4750, 4766, 4868, 4905, 4913, 4916, 4922, 5212, 6420, 6423, 6454, 7177, 7223, 7336, 7431, 7434, 7483, 7486, 7526, 7529, 7567, 7570, 9327, 27231, 27482, 27490, 54357, 54429, 54445, 54458, 54460, 54468, 54534, 54549, 54557, 54586, 54591, 54597, 54609, 55968, 57351, 57378, 57381, 60932, 60960, 60963, 60968, 60979, 60984, 60986, 61000, 61002, 61004, 61008, 61011, 61016, 61018, 61020, 61022, 61024, 61027, 61035, 61043, 61048, 61053, 61055, 61066, 61092, 61098, 61632, 61648, 63865, 63948, 64403]);
isNotPrint32strconv.isNotPrint32strconv.sliceType$4  �� �		isGraphic = new sliceType$4([160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288]);
	isGraphicstrconv.isGraphicstrconv.sliceType$4 strconv.ParseBoolstrconv	ParseBool 	ParseBool��	ParseBool = function(str) {
		var _1, str;
    		_1 = str;
    		if (_1 === ("1") || _1 === ("t") || _1 === ("T") || _1 === ("true") || _1 === ("TRUE") || _1 === ("True")) {
  �			return [true, $ifaceNil];
    		} else if (_1 === ("0") || _1 === ("f") || _1 === ("F") || _1 === ("false") || _1 === ("FALSE") || _1 === ("False")) {
  			return [false, $ifaceNil];
    		}
  !		return [false, syntaxError("ParseBool", str)];
    	};
	$pkg.ParseBool = ParseBool;
	ParseBoolstrconv.ParseBoolstrconv.syntaxError strconv.FormatBoolstrconv
FormatBool 
FormatBool��	FormatBool = function(b) {
		var b;
    		if (b) {
  �			return "true";
    		}
  �		return "false";
    	};
	$pkg.FormatBool = FormatBool;

FormatBoolstrconv.FormatBool strconv.AppendBoolstrconv
AppendBool 
AppendBool��	AppendBool = function(dst, b) {
		var b, dst;
    		if (b) {
  �			return $appendSlice(dst, "true");
    		}
  �		return $appendSlice(dst, "false");
    	};
	$pkg.AppendBool = AppendBool;

AppendBoolstrconv.AppendBool strconv.convErrstrconvconvErr convErr�]	convErr = function(err, s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, err, ok, range_, s, syntax, x;
		syntax = $ifaceNil;
		range_ = $ifaceNil;
  Q		_tuple = $assertType(err, ptrType, true);
		x = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  r			x.Func = "ParseComplex";
  �			x.Num = s;
    			if ($interfaceIsEqual(x.Err, $pkg.ErrRange)) {
    				_tmp = $ifaceNil;
				_tmp$1 = x;
				syntax = _tmp;
				range_ = _tmp$1;
				return [syntax, range_];
    			}
    		}
    		_tmp$2 = err;
		_tmp$3 = $ifaceNil;
		syntax = _tmp$2;
		range_ = _tmp$3;
		return [syntax, range_];
    	};
convErrstrconv.ErrRangestrconv.NumErrorstrconv.convErrstrconv.ptrType strconv.ParseComplexstrconvParseComplex ParseComplex��	ParseComplex = function(s, bitSize) {
		var _1, _tuple, _tuple$1, _tuple$2, _tuple$3, bitSize, err, im, n, orig, pending, re, s, size;
  
�		size = 64;
    		if (bitSize === 64) {
  
�			size = 32;
    		}
  		orig = s;
    		if (s.length >= 2 && (s.charCodeAt(0) === 40) && (s.charCodeAt((s.length - 1 >> 0)) === 41)) {
  {			s = $substring(s, 1, (s.length - 1 >> 0));
    		}
  �		pending = $ifaceNil;
  		_tuple = parseFloatPrefix(s, size);
		re = _tuple[0];
		n = _tuple[1];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  C			_tuple$1 = convErr(err, orig);
			err = _tuple$1[0];
			pending = _tuple$1[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  z				return [new $Complex128(0, 0), err];
    			}
    		}
  �		s = $substring(s, n);
    		if (s.length === 0) {
  �			return [new $Complex128(re, 0), pending];
    		}
    		_1 = s.charCodeAt(0);
    		if (_1 === (43)) {
    			if (s.length > 1 && !((s.charCodeAt(1) === 43))) {
  �				s = $substring(s, 1);
    			}
    		} else if (_1 === (45)) {
    		} else if (_1 === (105)) {
    			if (s.length === 1) {
  k				return [new $Complex128(0, re), pending];
    			}
  �			return [new $Complex128(0, 0), syntaxError("ParseComplex", orig)];
    		} else {
  �			return [new $Complex128(0, 0), syntaxError("ParseComplex", orig)];
    		}
  �		_tuple$2 = parseFloatPrefix(s, size);
		im = _tuple$2[0];
		n = _tuple$2[1];
		err = _tuple$2[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  -			_tuple$3 = convErr(err, orig);
			err = _tuple$3[0];
			pending = _tuple$3[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  d				return [new $Complex128(0, 0), err];
    			}
    		}
  z		s = $substring(s, n);
    		if (!(s === "i")) {
  �			return [new $Complex128(0, 0), syntaxError("ParseComplex", orig)];
    		}
  �		return [new $Complex128(re, im), pending];
    	};
	$pkg.ParseComplex = ParseComplex;
ParseComplexstrconv.ParseComplexstrconv.convErrstrconv.parseFloatPrefixstrconv.syntaxError !strconv.commonPrefixLenIgnoreCasestrconvcommonPrefixLenIgnoreCase commonPrefixLenIgnoreCase��	commonPrefixLenIgnoreCase = function(s, prefix) {
		var c, i, n, prefix, s;
  �		n = prefix.length;
    		if (n > s.length) {
  �			n = s.length;
    		}
  		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  			c = s.charCodeAt(i);
    			if (65 <= c && c <= 90) {
  G				c = c + (32) << 24 >>> 24;
    			}
    			if (!((c === prefix.charCodeAt(i)))) {
  s				return i;
    			}
  			i = i + (1) >> 0;
    		}
  �		return n;
    	};
commonPrefixLenIgnoreCase!strconv.commonPrefixLenIgnoreCase strconv.specialstrconvspecial special��	special = function(s) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, f, n, n$1, nsign, ok, s, sign;
		f = 0;
		n = 0;
		ok = false;
    		if (s.length === 0) {
    			_tmp = 0;
			_tmp$1 = 0;
			_tmp$2 = false;
			f = _tmp;
			n = _tmp$1;
			ok = _tmp$2;
			return [f, n, ok];
    		}
  		sign = 1;
  		nsign = 0;
    		_1 = s.charCodeAt(0);
    		if ((_1 === (43)) || (_1 === (45))) {
    			if (s.charCodeAt(0) === 45) {
  V				sign = -1;
    			}
  f			nsign = 1;
  r			s = $substring(s, 1);
  �			n$1 = commonPrefixLenIgnoreCase(s, "infinity");
    			if (3 < n$1 && n$1 < 8) {
  D				n$1 = 3;
    			}
    			if ((n$1 === 3) || (n$1 === 8)) {
    				_tmp$3 = math.Inf(sign);
				_tmp$4 = nsign + n$1 >> 0;
				_tmp$5 = true;
				f = _tmp$3;
				n = _tmp$4;
				ok = _tmp$5;
				return [f, n, ok];
    			}
    		} else if ((_1 === (105)) || (_1 === (73))) {
  �			n$1 = commonPrefixLenIgnoreCase(s, "infinity");
    			if (3 < n$1 && n$1 < 8) {
  D				n$1 = 3;
    			}
    			if ((n$1 === 3) || (n$1 === 8)) {
    				_tmp$6 = math.Inf(sign);
				_tmp$7 = nsign + n$1 >> 0;
				_tmp$8 = true;
				f = _tmp$6;
				n = _tmp$7;
				ok = _tmp$8;
				return [f, n, ok];
    			}
    		} else if ((_1 === (110)) || (_1 === (78))) {
    			if (commonPrefixLenIgnoreCase(s, "nan") === 3) {
    				_tmp$9 = math.NaN();
				_tmp$10 = 3;
				_tmp$11 = true;
				f = _tmp$9;
				n = _tmp$10;
				ok = _tmp$11;
				return [f, n, ok];
    			}
    		}
    		_tmp$12 = 0;
		_tmp$13 = 0;
		_tmp$14 = false;
		f = _tmp$12;
		n = _tmp$13;
		ok = _tmp$14;
		return [f, n, ok];
    	};
specialmath.Infmath.NaN!strconv.commonPrefixLenIgnoreCasestrconv.special (*strconv.decimal).set �
$	decimal.ptr.prototype.set = function(s) {
		var b, e, esign, i, ok, s, sawdigits, sawdot, x, x$1;
		ok = false;
		b = this;
  =		i = 0;
  E		b.neg = false;
  T		b.trunc = false;
    		if (i >= s.length) {
  �			return ok;
    		}
    		if ((s.charCodeAt(i) === 43)) {
  �			i = i + (1) >> 0;
    		} else if ((s.charCodeAt(i) === 45)) {
  �			b.neg = true;
  �			i = i + (1) >> 0;
    		}
  �		sawdot = false;
  		sawdigits = false;
  		while (true) {
			if (!(i < s.length)) { break; }
    			if ((s.charCodeAt(i) === 95)) {
  '				i = i + (1) >> 0;
    				continue;
    			} else if ((s.charCodeAt(i) === 46)) {
    				if (sawdot) {
  �					return ok;
    				}
  �				sawdot = true;
  �				b.dp = b.nd;
  '				i = i + (1) >> 0;
    				continue;
    			} else if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57) {
  
				sawdigits = true;
    				if ((s.charCodeAt(i) === 48) && (b.nd === 0)) {
  X					b.dp = b.dp - (1) >> 0;
  '					i = i + (1) >> 0;
    					continue;
    				}
    				if (b.nd < 800) {
  �					(x = b.d, x$1 = b.nd, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1] = s.charCodeAt(i)));
  �					b.nd = b.nd + (1) >> 0;
    				} else if (!((s.charCodeAt(i) === 48))) {
  �					b.trunc = true;
    				}
  '				i = i + (1) >> 0;
    				continue;
    			}
  �			break;
    		}
    		if (!sawdigits) {
  
			return ok;
    		}
    		if (!sawdot) {
  $			b.dp = b.nd;
    		}
    		if (i < s.length && (lower(s.charCodeAt(i)) === 101)) {
  3			i = i + (1) >> 0;
    			if (i >= s.length) {
  M				return ok;
    			}
  Z			esign = 1;
    			if (s.charCodeAt(i) === 43) {
  {				i = i + (1) >> 0;
    			} else if (s.charCodeAt(i) === 45) {
  �				i = i + (1) >> 0;
  �				esign = -1;
    			}
    			if (i >= s.length || s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
  �				return ok;
    			}
  �			e = 0;
  �			while (true) {
				if (!(i < s.length && (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57 || (s.charCodeAt(i) === 95)))) { break; }
    				if (s.charCodeAt(i) === 95) {
  ;					i = i + (1) >> 0;
    					continue;
    				}
    				if (e < 10000) {
  �					e = (($imul(e, 10)) + ((s.charCodeAt(i) >> 0)) >> 0) - 48 >> 0;
    				}
  ;				i = i + (1) >> 0;
    			}
  �			b.dp = b.dp + (($imul(e, esign))) >> 0;
    		}
    		if (!((i === s.length))) {
  �			return ok;
    		}
  		ok = true;
  		return ok;
    	};
	decimal.prototype.set = function(s) { return this.$val.set(s); };
decimalset~strconv.decimalstrconv.lower strconv.readFloatstrconv	readFloat 	readFloat��	readFloat = function(s) {
		var _1, base, c, dp, e, esign, exp, expChar, hex, i, mantissa, maxMantDigits, nd, ndMant, neg, ok, s, sawdigits, sawdot, trunc, underscores, x, x$1;
		mantissa = new $Uint64(0, 0);
		exp = 0;
		neg = false;
		trunc = false;
		hex = false;
		i = 0;
		ok = false;
  v		underscores = false;
    		if (i >= s.length) {
  �			return [mantissa, exp, neg, trunc, hex, i, ok];
    		}
    		if ((s.charCodeAt(i) === 43)) {
  �			i = i + (1) >> 0;
    		} else if ((s.charCodeAt(i) === 45)) {
  �			neg = true;
  			i = i + (1) >> 0;
    		}
  		base = new $Uint64(0, 10);
  )		maxMantDigits = 19;
  V		expChar = 101;
    		if ((i + 2 >> 0) < s.length && (s.charCodeAt(i) === 48) && (lower(s.charCodeAt((i + 1 >> 0))) === 120)) {
  �			base = new $Uint64(0, 16);
  �			maxMantDigits = 16;
  �			i = i + (2) >> 0;
  �			expChar = 112;
  �			hex = true;
    		}
   		sawdot = false;
   		sawdigits = false;
   -		nd = 0;
   6		ndMant = 0;
   C		dp = 0;
   R		loop:
		while (true) {
			if (!(i < s.length)) { break; }
   s			c = s.charCodeAt(i);
    			_1 = true;
    			if (_1 === ((c === 95))) {
   �				underscores = true;
   d				i = i + (1) >> 0;
    				continue;
    			} else if (_1 === ((c === 46))) {
    				if (sawdot) {
   �					break loop;
    				}
   �				sawdot = true;
  !				dp = nd;
   d				i = i + (1) >> 0;
    				continue;
    			} else if (_1 === (48 <= c && c <= 57)) {
  !6				sawdigits = true;
    				if ((c === 48) && (nd === 0)) {
  !					dp = dp - (1) >> 0;
   d					i = i + (1) >> 0;
    					continue;
    				}
  !�				nd = nd + (1) >> 0;
    				if (ndMant < maxMantDigits) {
  !�					mantissa = $mul64(mantissa, (base));
  !�					mantissa = (x = (new $Uint64(0, (c - 48 << 24 >>> 24))), new $Uint64(mantissa.$high + x.$high, mantissa.$low + x.$low));
  !�					ndMant = ndMant + (1) >> 0;
    				} else if (!((c === 48))) {
  "					trunc = true;
    				}
   d				i = i + (1) >> 0;
    				continue;
    			} else if (_1 === ((base.$high === 0 && base.$low === 16) && 97 <= lower(c) && lower(c) <= 102)) {
  "v				sawdigits = true;
  "�				nd = nd + (1) >> 0;
    				if (ndMant < maxMantDigits) {
  "�					mantissa = $mul64(mantissa, (new $Uint64(0, 16)));
  "�					mantissa = (x$1 = (new $Uint64(0, ((lower(c) - 97 << 24 >>> 24) + 10 << 24 >>> 24))), new $Uint64(mantissa.$high + x$1.$high, mantissa.$low + x$1.$low));
  "�					ndMant = ndMant + (1) >> 0;
    				} else {
  #
					trunc = true;
    				}
   d				i = i + (1) >> 0;
    				continue;
    			}
  #.			break;
    		}
    		if (!sawdigits) {
  #J			return [mantissa, exp, neg, trunc, hex, i, ok];
    		}
    		if (!sawdot) {
  #d			dp = nd;
    		}
    		if ((base.$high === 0 && base.$low === 16)) {
  #�			dp = $imul(dp, (4));
  #�			ndMant = $imul(ndMant, (4));
    		}
    		if (i < s.length && (lower(s.charCodeAt(i)) === expChar)) {
  $�			i = i + (1) >> 0;
    			if (i >= s.length) {
  $�				return [mantissa, exp, neg, trunc, hex, i, ok];
    			}
  $�			esign = 1;
    			if (s.charCodeAt(i) === 43) {
  $�				i = i + (1) >> 0;
    			} else if (s.charCodeAt(i) === 45) {
  %					i = i + (1) >> 0;
  %				esign = -1;
    			}
    			if (i >= s.length || s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
  %Q				return [mantissa, exp, neg, trunc, hex, i, ok];
    			}
  %^			e = 0;
  %g			while (true) {
				if (!(i < s.length && (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57 || (s.charCodeAt(i) === 95)))) { break; }
    				if (s.charCodeAt(i) === 95) {
  %�					underscores = true;
  %�					i = i + (1) >> 0;
    					continue;
    				}
    				if (e < 10000) {
  &					e = (($imul(e, 10)) + ((s.charCodeAt(i) >> 0)) >> 0) - 48 >> 0;
    				}
  %�				i = i + (1) >> 0;
    			}
  &'			dp = dp + (($imul(e, esign))) >> 0;
    		} else if ((base.$high === 0 && base.$low === 16)) {
  &j			return [mantissa, exp, neg, trunc, hex, i, ok];
    		}
    		if (!((mantissa.$high === 0 && mantissa.$low === 0))) {
  &�			exp = dp - ndMant >> 0;
    		}
    		if (underscores && !underscoreOK($substring(s, 0, i))) {
  &�			return [mantissa, exp, neg, trunc, hex, i, ok];
    		}
  &�		ok = true;
  &�		return [mantissa, exp, neg, trunc, hex, i, ok];
    	};
	readFloatstrconv.lowerstrconv.readFloatstrconv.underscoreOK (*strconv.decimal).floatBits �v	decimal.ptr.prototype.floatBits = function(flt) {
		var _tmp, _tmp$1, b, bits$1, d, exp, flt, mant, n, n$1, n$2, overflow, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, y, y$1, y$2, y$3, $s;
		/* */ $s = 0; s: while (true) { switch ($s) { case 0:
		b = new $Uint64(0, 0);
		overflow = false;
		d = this;
  '�		exp = 0;
  '�		mant = new $Uint64(0, 0);
  '�		/* */ if (d.nd === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (d.nd === 0) { */ case 1:
  '�			mant = new $Uint64(0, 0);
  '�			exp = flt.bias;
  (
			/* goto out */ $s = 3; continue;
    		/* } */ case 2:
  (�		/* */ if (d.dp > 310) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (d.dp > 310) { */ case 4:
  (�			/* goto overflow */ $s = 6; continue;
    		/* } */ case 5:
  (�		/* */ if (d.dp < -330) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (d.dp < -330) { */ case 7:
  (�			mant = new $Uint64(0, 0);
  (�			exp = flt.bias;
  )			/* goto out */ $s = 3; continue;
    		/* } */ case 8:
  )K		exp = 0;
  )T		while (true) {
			if (!(d.dp > 0)) { break; }
  )i			n = 0;
    			if (d.dp >= powtab.$length) {
  )�				n = 27;
    			} else {
  )�				n = (x = d.dp, ((x < 0 || x >= powtab.$length) ? ($throwRuntimeError("index out of range"), undefined) : powtab.$array[powtab.$offset + x]));
    			}
  )�			d.Shift(-n);
  )�			exp = exp + (n) >> 0;
    		}
  )�		while (true) {
			if (!(d.dp < 0 || (d.dp === 0) && d.d[0] < 53)) { break; }
  *			n$1 = 0;
    			if (-d.dp >= powtab.$length) {
  *+				n$1 = 27;
    			} else {
  *@				n$1 = (x$1 = -d.dp, ((x$1 < 0 || x$1 >= powtab.$length) ? ($throwRuntimeError("index out of range"), undefined) : powtab.$array[powtab.$offset + x$1]));
    			}
  *X			d.Shift(n$1);
  *e			exp = exp - (n$1) >> 0;
    		}
  *�		exp = exp - (1) >> 0;
    		if (exp < (flt.bias + 1 >> 0)) {
  +J			n$2 = (flt.bias + 1 >> 0) - exp >> 0;
  +d			d.Shift(-n$2);
  +r			exp = exp + (n$2) >> 0;
    		}
  +�		/* */ if ((exp - flt.bias >> 0) >= (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0)) { $s = 9; continue; }
		/* */ $s = 10; continue;
    		/* if ((exp - flt.bias >> 0) >= (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0)) { */ case 9:
  +�			/* goto overflow */ $s = 6; continue;
    		/* } */ case 10:
  +�		d.Shift((((1 + flt.mantbits >>> 0) >> 0)));
  +�		mant = d.RoundedInteger();
  ,I		/* */ if ((x$2 = $shiftLeft64(new $Uint64(0, 2), flt.mantbits), (mant.$high === x$2.$high && mant.$low === x$2.$low))) { $s = 11; continue; }
		/* */ $s = 12; continue;
    		/* if ((x$2 = $shiftLeft64(new $Uint64(0, 2), flt.mantbits), (mant.$high === x$2.$high && mant.$low === x$2.$low))) { */ case 11:
  ,h			mant = $shiftRightUint64(mant, (1));
  ,u			exp = exp + (1) >> 0;
  ,}			/* */ if ((exp - flt.bias >> 0) >= (((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0)) { $s = 13; continue; }
			/* */ $s = 14; continue;
    			/* if ((exp - flt.bias >> 0) >= (((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0)) { */ case 13:
  ,�				/* goto overflow */ $s = 6; continue;
    			/* } */ case 14:
    		/* } */ case 12:
    		if ((x$3 = (x$4 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(mant.$high & x$4.$high, (mant.$low & x$4.$low) >>> 0)), (x$3.$high === 0 && x$3.$low === 0))) {
  ,�			exp = flt.bias;
    		}
  -		/* goto out */ $s = 3; continue;
  -		/* overflow: */ case 6:
  -$		mant = new $Uint64(0, 0);
  -.		exp = (((y$2 = flt.expbits, y$2 < 32 ? (1 << y$2) : 0) >> 0) - 1 >> 0) + flt.bias >> 0;
  -S		overflow = true;
  -d		/* out: */ case 3:
  -}		bits$1 = (x$5 = (x$6 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$6.$high - 0, x$6.$low - 1)), new $Uint64(mant.$high & x$5.$high, (mant.$low & x$5.$low) >>> 0));
  -�		bits$1 = (x$7 = $shiftLeft64((new $Uint64(0, (((exp - flt.bias >> 0)) & ((((y$3 = flt.expbits, y$3 < 32 ? (1 << y$3) : 0) >> 0) - 1 >> 0))))), flt.mantbits), new $Uint64(bits$1.$high | x$7.$high, (bits$1.$low | x$7.$low) >>> 0));
    		if (d.neg) {
  -�			bits$1 = (x$8 = $shiftLeft64($shiftLeft64(new $Uint64(0, 1), flt.mantbits), flt.expbits), new $Uint64(bits$1.$high | x$8.$high, (bits$1.$low | x$8.$low) >>> 0));
    		}
    		_tmp = bits$1;
		_tmp$1 = overflow;
		b = _tmp;
		overflow = _tmp$1;
		$s = -1; return [b, overflow];
    		/* */ } return; }
	};
	decimal.prototype.floatBits = function(flt) { return this.$val.floatBits(flt); };
decimal
floatBits~strconv.decimalstrconv.powtab strconv.atof64exactstrconvatof64exact atof64exact��	atof64exact = function(mantissa, exp, neg) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, exp, f, mantissa, neg, ok, x, x$1, x$2;
		f = 0;
		ok = false;
    		if (!((x = $shiftRightUint64(mantissa, float64info.mantbits), (x.$high === 0 && x.$low === 0)))) {
  1C			return [f, ok];
    		}
  1N		f = ($flatten64(mantissa));
    		if (neg) {
  1p			f = -f;
    		}
    		if ((exp === 0)) {
    			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
    		} else if (exp > 0 && exp <= 37) {
    			if (exp > 22) {
  2�				f = f * ((x$1 = exp - 22 >> 0, ((x$1 < 0 || x$1 >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + x$1])));
  2�				exp = 22;
    			}
    			if (f > 1e+15 || f < -1e+15) {
  3				return [f, ok];
    			}
    			_tmp$2 = f * ((exp < 0 || exp >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + exp]);
			_tmp$3 = true;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
    		} else if (exp < 0 && exp >= -22) {
    			_tmp$4 = f / (x$2 = -exp, ((x$2 < 0 || x$2 >= float64pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float64pow10.$array[float64pow10.$offset + x$2]));
			_tmp$5 = true;
			f = _tmp$4;
			ok = _tmp$5;
			return [f, ok];
    		}
  3�		return [f, ok];
    	};
atof64exactstrconv.atof64exactstrconv.float64infostrconv.float64pow10 strconv.atof32exactstrconvatof32exact atof32exact��	atof32exact = function(mantissa, exp, neg) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, exp, f, mantissa, neg, ok, x, x$1, x$2;
		f = 0;
		ok = false;
    		if (!((x = $shiftRightUint64(mantissa, float32info.mantbits), (x.$high === 0 && x.$low === 0)))) {
  4�			return [f, ok];
    		}
  4�		f = ($flatten64(mantissa));
    		if (neg) {
  4�			f = -f;
    		}
    		if ((exp === 0)) {
    			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
    		} else if (exp > 0 && exp <= 17) {
    			if (exp > 10) {
  5�				f = $fround(f * ((x$1 = exp - 10 >> 0, ((x$1 < 0 || x$1 >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + x$1]))));
  6				exp = 10;
    			}
    			if (f > 1e+07 || f < -1e+07) {
  6i				return [f, ok];
    			}
    			_tmp$2 = $fround(f * ((exp < 0 || exp >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + exp]));
			_tmp$3 = true;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
    		} else if (exp < 0 && exp >= -10) {
    			_tmp$4 = $fround(f / (x$2 = -exp, ((x$2 < 0 || x$2 >= float32pow10.$length) ? ($throwRuntimeError("index out of range"), undefined) : float32pow10.$array[float32pow10.$offset + x$2])));
			_tmp$5 = true;
			f = _tmp$4;
			ok = _tmp$5;
			return [f, ok];
    		}
  6�		return [f, ok];
    	};
atof32exactstrconv.atof32exactstrconv.float32infostrconv.float32pow10 strconv.atofHexstrconvatofHex atofHex��	atofHex = function(s, flt, mantissa, exp, neg, trunc) {
		var bits$1, err, exp, flt, mantissa, maxExp, minExp, neg, round, s, trunc, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, y, y$1;
  8�		maxExp = (((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) + flt.bias >> 0) - 2 >> 0;
  8�		minExp = flt.bias + 1 >> 0;
  9			exp = exp + (((flt.mantbits >> 0))) >> 0;
  :�		while (true) {
			if (!(!((mantissa.$high === 0 && mantissa.$low === 0)) && (x = $shiftRightUint64(mantissa, ((flt.mantbits + 2 >>> 0))), (x.$high === 0 && x.$low === 0)))) { break; }
  ;,			mantissa = $shiftLeft64(mantissa, (1));
  ;=			exp = exp - (1) >> 0;
    		}
    		if (trunc) {
  ;T			mantissa = (x$1 = new $Uint64(0, 1), new $Uint64(mantissa.$high | x$1.$high, (mantissa.$low | x$1.$low) >>> 0));
    		}
  ;f		while (true) {
			if (!(!((x$2 = $shiftRightUint64(mantissa, (((1 + flt.mantbits >>> 0) + 2 >>> 0))), (x$2.$high === 0 && x$2.$low === 0))))) { break; }
  ;�			mantissa = (x$3 = $shiftRightUint64(mantissa, 1), x$4 = new $Uint64(mantissa.$high & 0, (mantissa.$low & 1) >>> 0), new $Uint64(x$3.$high | x$4.$high, (x$3.$low | x$4.$low) >>> 0));
  ;�			exp = exp + (1) >> 0;
    		}
  <>		while (true) {
			if (!((mantissa.$high > 0 || (mantissa.$high === 0 && mantissa.$low > 1)) && exp < (minExp - 2 >> 0))) { break; }
  <e			mantissa = (x$5 = $shiftRightUint64(mantissa, 1), x$6 = new $Uint64(mantissa.$high & 0, (mantissa.$low & 1) >>> 0), new $Uint64(x$5.$high | x$6.$high, (x$5.$low | x$6.$low) >>> 0));
  <�			exp = exp + (1) >> 0;
    		}
  <�		round = new $Uint64(mantissa.$high & 0, (mantissa.$low & 3) >>> 0);
  <�		mantissa = $shiftRightUint64(mantissa, (2));
  <�		round = (x$7 = new $Uint64(mantissa.$high & 0, (mantissa.$low & 1) >>> 0), new $Uint64(round.$high | x$7.$high, (round.$low | x$7.$low) >>> 0));
  =$		exp = exp + (2) >> 0;
    		if ((round.$high === 0 && round.$low === 3)) {
  =@			mantissa = (x$8 = new $Uint64(0, 1), new $Uint64(mantissa.$high + x$8.$high, mantissa.$low + x$8.$low));
    			if ((x$9 = $shiftLeft64(new $Uint64(0, 1), ((1 + flt.mantbits >>> 0))), (mantissa.$high === x$9.$high && mantissa.$low === x$9.$low))) {
  =u				mantissa = $shiftRightUint64(mantissa, (1));
  =�				exp = exp + (1) >> 0;
    			}
    		}
    		if ((x$10 = $shiftRightUint64(mantissa, flt.mantbits), (x$10.$high === 0 && x$10.$low === 0))) {
  =�			exp = flt.bias;
    		}
  =�		err = $ifaceNil;
    		if (exp > maxExp) {
  > 			mantissa = $shiftLeft64(new $Uint64(0, 1), flt.mantbits);
  >?			exp = maxExp + 1 >> 0;
  >R			err = rangeError("ParseFloat", s);
    		}
  >y		bits$1 = (x$11 = (x$12 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$12.$high - 0, x$12.$low - 1)), new $Uint64(mantissa.$high & x$11.$high, (mantissa.$low & x$11.$low) >>> 0));
  >�		bits$1 = (x$13 = $shiftLeft64((new $Uint64(0, (((exp - flt.bias >> 0)) & ((((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0))))), flt.mantbits), new $Uint64(bits$1.$high | x$13.$high, (bits$1.$low | x$13.$low) >>> 0));
    		if (neg) {
  >�			bits$1 = (x$14 = $shiftLeft64($shiftLeft64(new $Uint64(0, 1), flt.mantbits), flt.expbits), new $Uint64(bits$1.$high | x$14.$high, (bits$1.$low | x$14.$low) >>> 0));
    		}
    		if (flt === float32info) {
  ?9			return [(math.Float32frombits(((bits$1.$low >>> 0)))), err];
    		}
  ?u		return [math.Float64frombits(bits$1), err];
    	};
atofHexmath.Float32frombitsmath.Float64frombitsstrconv.atofHexstrconv.float32infostrconv.rangeError strconv.atof32strconvatof32 atof32��	atof32 = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, b, d, err, err$1, exp, f, f$1, f$2, f$3, fUp, hex, mantissa, n, n$1, neg, ok, ok$1, ok$2, ok$3, ok$4, ovf, s, trunc, val;
		f = 0;
		n = 0;
		err = $ifaceNil;
  ?�		_tuple = special(s);
		val = _tuple[0];
		n$1 = _tuple[1];
		ok = _tuple[2];
    		if (ok) {
    			_tmp = ($fround(val));
			_tmp$1 = n$1;
			_tmp$2 = $ifaceNil;
			f = _tmp;
			n = _tmp$1;
			err = _tmp$2;
			return [f, n, err];
    		}
  @>		_tuple$1 = readFloat(s);
		mantissa = _tuple$1[0];
		exp = _tuple$1[1];
		neg = _tuple$1[2];
		trunc = _tuple$1[3];
		hex = _tuple$1[4];
		n = _tuple$1[5];
		ok$1 = _tuple$1[6];
    		if (!ok$1) {
    			_tmp$3 = 0;
			_tmp$4 = n;
			_tmp$5 = syntaxError("ParseFloat", s);
			f = _tmp$3;
			n = _tmp$4;
			err = _tmp$5;
			return [f, n, err];
    		}
    		if (hex) {
  @�			_tuple$2 = atofHex($substring(s, 0, n), float32info, mantissa, exp, neg, trunc);
			f$1 = _tuple$2[0];
			err$1 = _tuple$2[1];
    			_tmp$6 = ($fround(f$1));
			_tmp$7 = n;
			_tmp$8 = err$1;
			f = _tmp$6;
			n = _tmp$7;
			err = _tmp$8;
			return [f, n, err];
    		}
    		if (optimize) {
    			if (!trunc) {
  A�				_tuple$3 = atof32exact(mantissa, exp, neg);
				f$2 = _tuple$3[0];
				ok$2 = _tuple$3[1];
    				if (ok$2) {
    					_tmp$9 = f$2;
					_tmp$10 = n;
					_tmp$11 = $ifaceNil;
					f = _tmp$9;
					n = _tmp$10;
					err = _tmp$11;
					return [f, n, err];
    				}
    			}
  A�			_tuple$4 = eiselLemire32(mantissa, exp, neg);
			f$3 = _tuple$4[0];
			ok$3 = _tuple$4[1];
    			if (ok$3) {
    				if (!trunc) {
    					_tmp$12 = f$3;
					_tmp$13 = n;
					_tmp$14 = $ifaceNil;
					f = _tmp$12;
					n = _tmp$13;
					err = _tmp$14;
					return [f, n, err];
    				}
  B�				_tuple$5 = eiselLemire32(new $Uint64(mantissa.$high + 0, mantissa.$low + 1), exp, neg);
				fUp = _tuple$5[0];
				ok$4 = _tuple$5[1];
    				if (ok$4 && (f$3 === fUp)) {
    					_tmp$15 = f$3;
					_tmp$16 = n;
					_tmp$17 = $ifaceNil;
					f = _tmp$15;
					n = _tmp$16;
					err = _tmp$17;
					return [f, n, err];
    				}
    			}
    		}
  Cc		d = new decimal.ptr(arrayType$1.zero(), 0, 0, false, false);
    		if (!d.set($substring(s, 0, n))) {
    			_tmp$18 = 0;
			_tmp$19 = n;
			_tmp$20 = syntaxError("ParseFloat", s);
			f = _tmp$18;
			n = _tmp$19;
			err = _tmp$20;
			return [f, n, err];
    		}
  C�		_tuple$6 = d.floatBits(float32info);
		b = _tuple$6[0];
		ovf = _tuple$6[1];
  C�		f = math.Float32frombits(((b.$low >>> 0)));
    		if (ovf) {
  D			err = rangeError("ParseFloat", s);
    		}
    		_tmp$21 = f;
		_tmp$22 = n;
		_tmp$23 = err;
		f = _tmp$21;
		n = _tmp$22;
		err = _tmp$23;
		return [f, n, err];
    	};
atof32math.Float32frombitsstrconv.arrayType$1strconv.atof32strconv.atof32exactstrconv.atofHexstrconv.decimalstrconv.eiselLemire32strconv.float32infostrconv.floatBits~strconv.optimizestrconv.rangeErrorstrconv.readFloatstrconv.set~strconv.specialstrconv.syntaxError strconv.atof64strconvatof64 atof64�|	atof64 = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, b, d, err, err$1, exp, f, f$1, f$2, f$3, fUp, hex, mantissa, n, n$1, neg, ok, ok$1, ok$2, ok$3, ok$4, ovf, s, trunc, val;
		f = 0;
		n = 0;
		err = $ifaceNil;
  Dz		_tuple = special(s);
		val = _tuple[0];
		n$1 = _tuple[1];
		ok = _tuple[2];
    		if (ok) {
    			_tmp = val;
			_tmp$1 = n$1;
			_tmp$2 = $ifaceNil;
			f = _tmp;
			n = _tmp$1;
			err = _tmp$2;
			return [f, n, err];
    		}
  D�		_tuple$1 = readFloat(s);
		mantissa = _tuple$1[0];
		exp = _tuple$1[1];
		neg = _tuple$1[2];
		trunc = _tuple$1[3];
		hex = _tuple$1[4];
		n = _tuple$1[5];
		ok$1 = _tuple$1[6];
    		if (!ok$1) {
    			_tmp$3 = 0;
			_tmp$4 = n;
			_tmp$5 = syntaxError("ParseFloat", s);
			f = _tmp$3;
			n = _tmp$4;
			err = _tmp$5;
			return [f, n, err];
    		}
    		if (hex) {
  E/			_tuple$2 = atofHex($substring(s, 0, n), float64info, mantissa, exp, neg, trunc);
			f$1 = _tuple$2[0];
			err$1 = _tuple$2[1];
    			_tmp$6 = f$1;
			_tmp$7 = n;
			_tmp$8 = err$1;
			f = _tmp$6;
			n = _tmp$7;
			err = _tmp$8;
			return [f, n, err];
    		}
    		if (optimize) {
    			if (!trunc) {
  F				_tuple$3 = atof64exact(mantissa, exp, neg);
				f$2 = _tuple$3[0];
				ok$2 = _tuple$3[1];
    				if (ok$2) {
    					_tmp$9 = f$2;
					_tmp$10 = n;
					_tmp$11 = $ifaceNil;
					f = _tmp$9;
					n = _tmp$10;
					err = _tmp$11;
					return [f, n, err];
    				}
    			}
  Fb			_tuple$4 = eiselLemire64(mantissa, exp, neg);
			f$3 = _tuple$4[0];
			ok$3 = _tuple$4[1];
    			if (ok$3) {
    				if (!trunc) {
    					_tmp$12 = f$3;
					_tmp$13 = n;
					_tmp$14 = $ifaceNil;
					f = _tmp$12;
					n = _tmp$13;
					err = _tmp$14;
					return [f, n, err];
    				}
  GO				_tuple$5 = eiselLemire64(new $Uint64(mantissa.$high + 0, mantissa.$low + 1), exp, neg);
				fUp = _tuple$5[0];
				ok$4 = _tuple$5[1];
    				if (ok$4 && (f$3 === fUp)) {
    					_tmp$15 = f$3;
					_tmp$16 = n;
					_tmp$17 = $ifaceNil;
					f = _tmp$15;
					n = _tmp$16;
					err = _tmp$17;
					return [f, n, err];
    				}
    			}
    		}
  G�		d = new decimal.ptr(arrayType$1.zero(), 0, 0, false, false);
    		if (!d.set($substring(s, 0, n))) {
    			_tmp$18 = 0;
			_tmp$19 = n;
			_tmp$20 = syntaxError("ParseFloat", s);
			f = _tmp$18;
			n = _tmp$19;
			err = _tmp$20;
			return [f, n, err];
    		}
  H		_tuple$6 = d.floatBits(float64info);
		b = _tuple$6[0];
		ovf = _tuple$6[1];
  HB		f = math.Float64frombits(b);
    		if (ovf) {
  Hj			err = rangeError("ParseFloat", s);
    		}
    		_tmp$21 = f;
		_tmp$22 = n;
		_tmp$23 = err;
		f = _tmp$21;
		n = _tmp$22;
		err = _tmp$23;
		return [f, n, err];
    	};
atof64math.Float64frombitsstrconv.arrayType$1strconv.atof64strconv.atof64exactstrconv.atofHexstrconv.decimalstrconv.eiselLemire64strconv.float64infostrconv.floatBits~strconv.optimizestrconv.rangeErrorstrconv.readFloatstrconv.set~strconv.specialstrconv.syntaxError strconv.ParseFloatstrconv
ParseFloat 
ParseFloat��	ParseFloat = function(s, bitSize) {
		var _tuple, bitSize, err, f, n, s;
  M�		_tuple = parseFloatPrefix(s, bitSize);
		f = _tuple[0];
		n = _tuple[1];
		err = _tuple[2];
    		if (!((n === s.length)) && ($interfaceIsEqual(err, $ifaceNil) || !($interfaceIsEqual($assertType(err, ptrType).Err, $pkg.ErrSyntax)))) {
  N			return [0, syntaxError("ParseFloat", s)];
    		}
  N>		return [f, err];
    	};
	$pkg.ParseFloat = ParseFloat;

ParseFloatstrconv.ErrSyntaxstrconv.ParseFloatstrconv.parseFloatPrefixstrconv.ptrTypestrconv.syntaxError strconv.parseFloatPrefixstrconvparseFloatPrefix parseFloatPrefix�
	parseFloatPrefix = function(s, bitSize) {
		var _tuple, bitSize, err, f, n, s;
    		if (bitSize === 32) {
  N�			_tuple = atof32(s);
			f = _tuple[0];
			n = _tuple[1];
			err = _tuple[2];
  N�			return [(f), n, err];
    		}
  N�		return atof64(s);
    	};
parseFloatPrefixstrconv.atof32strconv.atof64strconv.parseFloatPrefix strconv.lowerstrconvlower lowerG	lower = function(c) {
		var c;
  P�		return (c | 32) >>> 0;
    	};
lowerstrconv.lower (*strconv.NumError).Error �	NumError.ptr.prototype.Error = function() {
		var $24r, _r, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  S)		_r = e.Err.Error(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = "strconv." + e.Func + ": " + "parsing " + Quote(e.Num) + ": " + _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NumError.ptr.prototype.Error }; } $f.$24r = $24r; $f._r = _r; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	NumError.prototype.Error = function() { return this.$val.Error(); };
NumErrorstrconv.NumErrorstrconv.Quote (*strconv.NumError).Unwrap ��	NumError.ptr.prototype.Unwrap = function() {
		var e;
		e = this;
  S�		return e.Err;
    	};
	NumError.prototype.Unwrap = function() { return this.$val.Unwrap(); };
NumErrorstrconv.NumError strconv.syntaxErrorstrconvsyntaxError syntaxErrort	syntaxError = function(fn, str) {
		var fn, str;
  S�		return new NumError.ptr(fn, str, $pkg.ErrSyntax);
    	};
syntaxErrorstrconv.ErrSyntaxstrconv.NumErrorstrconv.syntaxError strconv.rangeErrorstrconv
rangeError 
rangeErrorr	rangeError = function(fn, str) {
		var fn, str;
  T8		return new NumError.ptr(fn, str, $pkg.ErrRange);
    	};

rangeErrorstrconv.ErrRangestrconv.NumErrorstrconv.rangeError strconv.baseErrorstrconv	baseError 	baseError��	baseError = function(fn, str, base) {
		var base, fn, str;
  T�		return new NumError.ptr(fn, str, errors.New("invalid base " + Itoa(base)));
    	};
	baseError
errors.Newstrconv.Itoastrconv.NumErrorstrconv.baseError strconv.bitSizeErrorstrconvbitSizeError bitSizeError��	bitSizeError = function(fn, str, bitSize) {
		var bitSize, fn, str;
  U		return new NumError.ptr(fn, str, errors.New("invalid bit size " + Itoa(bitSize)));
    	};
bitSizeError
errors.Newstrconv.Itoastrconv.NumErrorstrconv.bitSizeError strconv.ParseUintstrconv	ParseUint 	ParseUint��	ParseUint = function(s, base, bitSize) {
		var _1, _i, _ref, base, base0, bitSize, c, cutoff, d, maxVal, n, n1, s, s0, underscores, x, x$1, x$2;
    		if (s === "") {
  V�			return [new $Uint64(0, 0), syntaxError("ParseUint", s)];
    		}
  V�		base0 = base === 0;
  W		s0 = s;
    		if (2 <= base && base <= 36) {
    		} else if ((base === 0)) {
  W�			base = 10;
    			if (s.charCodeAt(0) === 48) {
    				if (s.length >= 3 && (lower(s.charCodeAt(1)) === 98)) {
  W�					base = 2;
  W�					s = $substring(s, 2);
    				} else if (s.length >= 3 && (lower(s.charCodeAt(1)) === 111)) {
  X1					base = 8;
  X>					s = $substring(s, 2);
    				} else if (s.length >= 3 && (lower(s.charCodeAt(1)) === 120)) {
  Xw					base = 16;
  X�					s = $substring(s, 2);
    				} else {
  X�					base = 8;
  X�					s = $substring(s, 1);
    				}
    			}
    		} else {
  X�			return [new $Uint64(0, 0), baseError("ParseUint", s0, base)];
    		}
    		if (bitSize === 0) {
  Y			bitSize = 32;
    		} else if (bitSize < 0 || bitSize > 64) {
  YM			return [new $Uint64(0, 0), bitSizeError("ParseUint", s0, bitSize)];
    		}
  Y�		cutoff = new $Uint64(0, 0);
    		_1 = base;
    		if (_1 === (10)) {
  Z&			cutoff = new $Uint64(429496729, 2576980378);
    		} else if (_1 === (16)) {
  ZL			cutoff = new $Uint64(268435456, 0);
    		} else {
  Zr			cutoff = (x = $div64(new $Uint64(4294967295, 4294967295), (new $Uint64(0, base)), false), new $Uint64(x.$high + 0, x.$low + 1));
    		}
  Z�		maxVal = (x$1 = $shiftLeft64(new $Uint64(0, 1), ((bitSize >>> 0))), new $Uint64(x$1.$high - 0, x$1.$low - 1));
  Z�		underscores = false;
  Z�		n = new $Uint64(0, 0);
  Z�		_ref = (new sliceType$6($stringToBytes(s)));
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  [			d = 0;
    			if ((c === 95) && base0) {
  [;				underscores = true;
  [Q				_i++;
				continue;
    			} else if (48 <= c && c <= 57) {
  [z				d = c - 48 << 24 >>> 24;
    			} else if (97 <= lower(c) && lower(c) <= 122) {
  [�				d = (lower(c) - 97 << 24 >>> 24) + 10 << 24 >>> 24;
    			} else {
  [�				return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
    			}
    			if (d >= ((base << 24 >>> 24))) {
  \ 				return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
    			}
    			if ((n.$high > cutoff.$high || (n.$high === cutoff.$high && n.$low >= cutoff.$low))) {
  \y				return [maxVal, rangeError("ParseUint", s0)];
    			}
  \�			n = $mul64(n, ((new $Uint64(0, base))));
  \�			n1 = (x$2 = (new $Uint64(0, d)), new $Uint64(n.$high + x$2.$high, n.$low + x$2.$low));
    			if ((n1.$high < n.$high || (n1.$high === n.$high && n1.$low < n.$low)) || (n1.$high > maxVal.$high || (n1.$high === maxVal.$high && n1.$low > maxVal.$low))) {
  ]				return [maxVal, rangeError("ParseUint", s0)];
    			}
  ]8			n = n1;
    			_i++;
		}
    		if (underscores && !underscoreOK(s0)) {
  ]l			return [new $Uint64(0, 0), syntaxError("ParseUint", s0)];
    		}
  ]�		return [n, $ifaceNil];
    	};
	$pkg.ParseUint = ParseUint;
	ParseUintstrconv.ParseUintstrconv.baseErrorstrconv.bitSizeErrorstrconv.lowerstrconv.rangeErrorstrconv.sliceType$6strconv.syntaxErrorstrconv.underscoreOK strconv.ParseIntstrconvParseInt ParseInt��	ParseInt = function(s, base, bitSize) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, base, bitSize, cutoff, err, i, n, neg, s, s0, un, x, x$1;
		i = new $Int64(0, 0);
		err = $ifaceNil;
    		if (s === "") {
    			_tmp = new $Int64(0, 0);
			_tmp$1 = syntaxError("ParseInt", s);
			i = _tmp;
			err = _tmp$1;
			return [i, err];
    		}
  b�		s0 = s;
  b�		neg = false;
    		if (s.charCodeAt(0) === 43) {
  b�			s = $substring(s, 1);
    		} else if (s.charCodeAt(0) === 45) {
  c"			neg = true;
  c/			s = $substring(s, 1);
    		}
  ch		un = new $Uint64(0, 0);
  cs		_tuple = ParseUint(s, base, bitSize);
		un = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil)) && !($interfaceIsEqual($assertType(err, ptrType).Err, $pkg.ErrRange))) {
  c�			$assertType(err, ptrType).Func = "ParseInt";
  c�			$assertType(err, ptrType).Num = s0;
    			_tmp$2 = new $Int64(0, 0);
			_tmp$3 = err;
			i = _tmp$2;
			err = _tmp$3;
			return [i, err];
    		}
    		if (bitSize === 0) {
  d5			bitSize = 32;
    		}
  dL		cutoff = ($shiftLeft64(new $Uint64(0, 1), (((bitSize - 1 >> 0) >>> 0))));
    		if (!neg && (un.$high > cutoff.$high || (un.$high === cutoff.$high && un.$low >= cutoff.$low))) {
    			_tmp$4 = ((x = new $Uint64(cutoff.$high - 0, cutoff.$low - 1), new $Int64(x.$high, x.$low)));
			_tmp$5 = rangeError("ParseInt", s0);
			i = _tmp$4;
			err = _tmp$5;
			return [i, err];
    		}
    		if (neg && (un.$high > cutoff.$high || (un.$high === cutoff.$high && un.$low > cutoff.$low))) {
    			_tmp$6 = (x$1 = (new $Int64(cutoff.$high, cutoff.$low)), new $Int64(-x$1.$high, -x$1.$low));
			_tmp$7 = rangeError("ParseInt", s0);
			i = _tmp$6;
			err = _tmp$7;
			return [i, err];
    		}
  e		n = (new $Int64(un.$high, un.$low));
    		if (neg) {
  e4			n = new $Int64(-n.$high, -n.$low);
    		}
    		_tmp$8 = n;
		_tmp$9 = $ifaceNil;
		i = _tmp$8;
		err = _tmp$9;
		return [i, err];
    	};
	$pkg.ParseInt = ParseInt;
ParseIntstrconv.ErrRangestrconv.ParseIntstrconv.ParseUintstrconv.ptrTypestrconv.rangeErrorstrconv.syntaxError strconv.AtoistrconvAtoi Atoi�A	Atoi = function(s) {
		var _i, _ref, _tuple, _tuple$1, ch, err, i64, n, nerr, ok, s, s0, sLen;
  e�		sLen = s.length;
    		if (true && (0 < sLen && sLen < 10) || false && (0 < sLen && sLen < 19)) {
  fs			s0 = s;
    			if ((s.charCodeAt(0) === 45) || (s.charCodeAt(0) === 43)) {
  f�				s = $substring(s, 1);
    				if (s.length < 1) {
  f�					return [0, new NumError.ptr("Atoi", s0, $pkg.ErrSyntax)];
    				}
    			}
  f�			n = 0;
  g			_ref = (new sliceType$6($stringToBytes(s)));
			_i = 0;
			while (true) {
				if (!(_i < _ref.$length)) { break; }
				ch = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  g#				ch = ch - (48) << 24 >>> 24;
    				if (ch > 9) {
  g@					return [0, new NumError.ptr("Atoi", s0, $pkg.ErrSyntax)];
    				}
  gs				n = ($imul(n, 10)) + ((ch >> 0)) >> 0;
    				_i++;
			}
    			if (s0.charCodeAt(0) === 45) {
  g�				n = -n;
    			}
  g�			return [n, $ifaceNil];
    		}
  g�		_tuple = ParseInt(s, 10, 0);
		i64 = _tuple[0];
		err = _tuple[1];
  h		_tuple$1 = $assertType(err, ptrType, true);
		nerr = _tuple$1[0];
		ok = _tuple$1[1];
    		if (ok) {
  hA			nerr.Func = "Atoi";
    		}
  hX		return [(((i64.$low + ((i64.$high >> 31) * 4294967296)) >> 0)), err];
    	};
	$pkg.Atoi = Atoi;
Atoistrconv.Atoistrconv.ErrSyntaxstrconv.NumErrorstrconv.ParseIntstrconv.ptrTypestrconv.sliceType$6 strconv.underscoreOKstrconvunderscoreOK underscoreOK�7	underscoreOK = function(s) {
		var hex, i, s, saw;
  j%		saw = 94;
  j1		i = 0;
    		if (s.length >= 1 && ((s.charCodeAt(0) === 45) || (s.charCodeAt(0) === 43))) {
  j�			s = $substring(s, 1);
    		}
  j�		hex = false;
    		if (s.length >= 2 && (s.charCodeAt(0) === 48) && ((lower(s.charCodeAt(1)) === 98) || (lower(s.charCodeAt(1)) === 111) || (lower(s.charCodeAt(1)) === 120))) {
  k			i = 2;
  k%			saw = 48;
  kv			hex = lower(s.charCodeAt(1)) === 120;
    		}
  k�		while (true) {
			if (!(i < s.length)) { break; }
    			if (48 <= s.charCodeAt(i) && s.charCodeAt(i) <= 57 || hex && 97 <= lower(s.charCodeAt(i)) && lower(s.charCodeAt(i)) <= 102) {
  l4				saw = 48;
  k�				i = i + (1) >> 0;
    				continue;
    			}
    			if (s.charCodeAt(i) === 95) {
    				if (!((saw === 48))) {
  l�					return false;
    				}
  l�				saw = 95;
  k�				i = i + (1) >> 0;
    				continue;
    			}
    			if (saw === 95) {
  m				return false;
    			}
  mF			saw = 33;
  k�			i = i + (1) >> 0;
    		}
  mT		return !((saw === 95));
    	};
underscoreOKstrconv.lowerstrconv.underscoreOK strconv.indexstrconvindex index\	index = function(s, c) {
		var c, s;
  n�		return bytealg.IndexByteString(s, c);
    	};
index internal/bytealg.IndexByteStringstrconv.index strconv.FormatComplexstrconvFormatComplex FormatComplex�	FormatComplex = function(c, fmt, prec, bitSize) {
		var bitSize, c, fmt, im, prec;
    		if (!((bitSize === 64)) && !((bitSize === 128))) {
  q�			$panic(new $String("invalid bitSize"));
    		}
  q�		bitSize = (bitSize >> $min((1), 31)) >> 0;
  rg		im = FormatFloat(c.$imag, fmt, prec, bitSize);
    		if (!((im.charCodeAt(0) === 43)) && !((im.charCodeAt(0) === 45))) {
  r�			im = "+" + im;
    		}
  r�		return "(" + FormatFloat(c.$real, fmt, prec, bitSize) + im + "i)";
    	};
	$pkg.FormatComplex = FormatComplex;
FormatComplexstrconv.FormatComplexstrconv.FormatFloat (*strconv.decimal).String �	decimal.ptr.prototype.String = function() {
		var a, buf, n, w;
		a = this;
  v#		n = 10 + a.nd >> 0;
    		if (a.dp > 0) {
  vC			n = n + (a.dp) >> 0;
    		}
    		if (a.dp < 0) {
  va			n = n + (-a.dp) >> 0;
    		}
  vq		buf = $makeSlice(sliceType$6, n);
  v�		w = 0;
    		if ((a.nd === 0)) {
  v�			return "0";
    		} else if (a.dp <= 0) {
  w			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 48);
  w			w = w + (1) >> 0;
  w			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 46);
  w'			w = w + (1) >> 0;
  w-			w = w + (digitZero($subslice(buf, w, (w + -a.dp >> 0)))) >> 0;
  wP			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.nd))) >> 0;
    		} else if (a.dp < a.nd) {
  w�			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.dp))) >> 0;
  w�			((w < 0 || w >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + w] = 46);
  w�			w = w + (1) >> 0;
  w�			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), a.dp, a.nd))) >> 0;
    		} else {
  xK			w = w + ($copySlice($subslice(buf, w), $subslice(new sliceType$6(a.d), 0, a.nd))) >> 0;
  xm			w = w + (digitZero($subslice(buf, w, ((w + a.dp >> 0) - a.nd >> 0)))) >> 0;
    		}
  x�		return ($bytesToString($subslice(buf, 0, w)));
    	};
	decimal.prototype.String = function() { return this.$val.String(); };
decimalstrconv.decimalstrconv.digitZerostrconv.sliceType$6 strconv.digitZerostrconv	digitZero 	digitZero�N	digitZero = function(dst) {
		var _i, _ref, dst, i;
  x�		_ref = dst;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
  x�			((i < 0 || i >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i] = 48);
    			_i++;
		}
  x�		return dst.$length;
    	};
	digitZerostrconv.digitZero strconv.trimstrconvtrim trim�N	trim = function(a) {
		var a, x, x$1;
  y�		while (true) {
			if (!(a.nd > 0 && ((x = a.d, x$1 = a.nd - 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) === 48))) { break; }
  y�			a.nd = a.nd - (1) >> 0;
    		}
    		if (a.nd === 0) {
  y�			a.dp = 0;
    		}
    	};
trimstrconv.trim (*strconv.decimal).Assign �S	decimal.ptr.prototype.Assign = function(v) {
		var a, buf, n, v, v1, x, x$1, x$2;
		a = this;
  z9		buf = arrayType$2.zero();
  zk		n = 0;
  zs		while (true) {
			if (!((v.$high > 0 || (v.$high === 0 && v.$low > 0)))) { break; }
  z�			v1 = $div64(v, new $Uint64(0, 10), false);
  z�			v = (x = $mul64(new $Uint64(0, 10), v1), new $Uint64(v.$high - x.$high, v.$low - x.$low));
  z�			((n < 0 || n >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[n] = ((new $Uint64(v.$high + 0, v.$low + 48).$low << 24 >>> 24)));
  z�			n = n + (1) >> 0;
  z�			v = v1;
    		}
  z�		a.nd = 0;
  {		n = n - (1) >> 0;
    		while (true) {
			if (!(n >= 0)) { break; }
  {"			(x$1 = a.d, x$2 = a.nd, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2] = ((n < 0 || n >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[n])));
  {7			a.nd = a.nd + (1) >> 0;
  {			n = n - (1) >> 0;
    		}
  {B		a.dp = a.nd;
  {O		trim(a);
    	};
	decimal.prototype.Assign = function(v) { return this.$val.Assign(v); };
decimalstrconv.arrayType$2strconv.decimalstrconv.trim strconv.rightShiftstrconv
rightShift 
rightShift�l	rightShift = function(a, k) {
		var a, c, c$1, dig, dig$1, k, mask, n, r, w, x, x$1, x$2, x$3, y, y$1, y$2, y$3, y$4;
  |�		r = 0;
  |�		w = 0;
  }		n = 0;
  }		while (true) {
			if (!(((y = k, y < 32 ? (n >>> y) : 0) >>> 0) === 0)) { break; }
    			if (r >= a.nd) {
    				if (n === 0) {
  }					a.nd = 0;
  }�					return;
    				}
  }�				while (true) {
					if (!(((y$1 = k, y$1 < 32 ? (n >>> y$1) : 0) >>> 0) === 0)) { break; }
  }�					n = n * 10 >>> 0;
  }�					r = r + (1) >> 0;
    				}
  }�				break;
    			}
  }�			c = (((x = a.d, ((r < 0 || r >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[r])) >>> 0));
  }�			n = ((n * 10 >>> 0) + c >>> 0) - 48 >>> 0;
  }			r = r + (1) >> 0;
    		}
  ~		a.dp = a.dp - ((r - 1 >> 0)) >> 0;
  ~		mask = (((y$2 = k, y$2 < 32 ? (1 << y$2) : 0) >>> 0)) - 1 >>> 0;
  ~W		while (true) {
			if (!(r < a.nd)) { break; }
  ~o			c$1 = (((x$1 = a.d, ((r < 0 || r >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[r])) >>> 0));
  ~�			dig = (y$3 = k, y$3 < 32 ? (n >>> y$3) : 0) >>> 0;
  ~�			n = (n & (mask)) >>> 0;
  ~�			(x$2 = a.d, ((w < 0 || w >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[w] = (((dig + 48 >>> 0) << 24 >>> 24))));
  ~�			w = w + (1) >> 0;
  ~�			n = ((n * 10 >>> 0) + c$1 >>> 0) - 48 >>> 0;
  ~g			r = r + (1) >> 0;
    		}
  ~�		while (true) {
			if (!(n > 0)) { break; }
  			dig$1 = (y$4 = k, y$4 < 32 ? (n >>> y$4) : 0) >>> 0;
  			n = (n & (mask)) >>> 0;
    			if (w < 800) {
  2				(x$3 = a.d, ((w < 0 || w >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[w] = (((dig$1 + 48 >>> 0) << 24 >>> 24))));
  N				w = w + (1) >> 0;
    			} else if (dig$1 > 0) {
  k				a.trunc = true;
    			}
  �			n = n * 10 >>> 0;
    		}
  �		a.nd = w;
  �		trim(a);
    	};

rightShiftstrconv.rightShiftstrconv.trim strconv.prefixIsLessThanstrconvprefixIsLessThan prefixIsLessThan�&	prefixIsLessThan = function(b, s) {
		var b, i, s;
  ��		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (i >= b.$length) {
  �#				return true;
    			}
    			if (!((((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]) === s.charCodeAt(i)))) {
  �J				return ((i < 0 || i >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + i]) < s.charCodeAt(i);
    			}
  �			i = i + (1) >> 0;
    		}
  �e		return false;
    	};
prefixIsLessThanstrconv.prefixIsLessThan strconv.leftShiftstrconv	leftShift 	leftShift��	leftShift = function(a, k) {
		var _q, _q$1, a, delta, k, n, quo, quo$1, r, rem, rem$1, w, x, x$1, x$2, y;
  ��		delta = ((k < 0 || k >= leftcheats.$length) ? ($throwRuntimeError("index out of range"), undefined) : leftcheats.$array[leftcheats.$offset + k]).delta;
    		if (prefixIsLessThan($subslice(new sliceType$6(a.d), 0, a.nd), ((k < 0 || k >= leftcheats.$length) ? ($throwRuntimeError("index out of range"), undefined) : leftcheats.$array[leftcheats.$offset + k]).cutoff)) {
  �<			delta = delta - (1) >> 0;
    		}
  �I		r = a.nd;
  �j		w = a.nd + delta >> 0;
  ��		n = 0;
  ��		r = r - (1) >> 0;
    		while (true) {
			if (!(r >= 0)) { break; }
  ��			n = n + (((y = k, y < 32 ? ((((((x = a.d, ((r < 0 || r >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[r])) >>> 0)) - 48 >>> 0)) << y) : 0) >>> 0)) >>> 0;
  ��			quo = (_q = n / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  �
			rem = n - (10 * quo >>> 0) >>> 0;
  �			w = w - (1) >> 0;
    			if (w < 800) {
  �9				(x$1 = a.d, ((w < 0 || w >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[w] = (((rem + 48 >>> 0) << 24 >>> 24))));
    			} else if (!((rem === 0))) {
  �l				a.trunc = true;
    			}
  ��			n = quo;
  ��			r = r - (1) >> 0;
    		}
  ��		while (true) {
			if (!(n > 0)) { break; }
  ��			quo$1 = (_q$1 = n / 10, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  ��			rem$1 = n - (10 * quo$1 >>> 0) >>> 0;
  ��			w = w - (1) >> 0;
    			if (w < 800) {
  ��				(x$2 = a.d, ((w < 0 || w >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[w] = (((rem$1 + 48 >>> 0) << 24 >>> 24))));
    			} else if (!((rem$1 === 0))) {
  �)				a.trunc = true;
    			}
  �>			n = quo$1;
    		}
  �K		a.nd = a.nd + (delta) >> 0;
    		if (a.nd >= 800) {
  �r			a.nd = 800;
    		}
  ��		a.dp = a.dp + (delta) >> 0;
  ��		trim(a);
    	};
	leftShiftstrconv.leftShiftstrconv.leftcheatsstrconv.prefixIsLessThanstrconv.sliceType$6strconv.trim (*strconv.decimal).Shift �%	decimal.ptr.prototype.Shift = function(k) {
		var a, k;
		a = this;
    		if ((a.nd === 0)) {
    		} else if (k > 0) {
  �5			while (true) {
				if (!(k > 28)) { break; }
  �K				leftShift(a, 28);
  �e				k = k - (28) >> 0;
    			}
  �y			leftShift(a, ((k >>> 0)));
    		} else if (k < 0) {
  ��			while (true) {
				if (!(k < -28)) { break; }
  ��				rightShift(a, 28);
  ��				k = k + (28) >> 0;
    			}
  ��			rightShift(a, ((-k >>> 0)));
    		}
    	};
	decimal.prototype.Shift = function(k) { return this.$val.Shift(k); };
decimalstrconv.decimalstrconv.leftShiftstrconv.rightShift strconv.shouldRoundUpstrconvshouldRoundUp shouldRoundUp��	shouldRoundUp = function(a, nd) {
		var _r, a, nd, x, x$1, x$2, x$3;
    		if (nd < 0 || nd >= a.nd) {
  �			return false;
    		}
    		if (((x = a.d, ((nd < 0 || nd >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[nd])) === 53) && ((nd + 1 >> 0) === a.nd)) {
    			if (a.trunc) {
  �6				return true;
    			}
  �H			return nd > 0 && !(((_r = (((x$1 = a.d, x$2 = nd - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])) - 48 << 24 >>> 24)) % 2, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0));
    		}
  ��		return (x$3 = a.d, ((nd < 0 || nd >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[nd])) >= 53;
    	};
shouldRoundUpstrconv.shouldRoundUp (*strconv.decimal).Round �A	decimal.ptr.prototype.Round = function(nd) {
		var a, nd;
		a = this;
    		if (nd < 0 || nd >= a.nd) {
  �u			return;
    		}
    		if (shouldRoundUp(a, nd)) {
  ��			a.RoundUp(nd);
    		} else {
  ��			a.RoundDown(nd);
    		}
    	};
	decimal.prototype.Round = function(nd) { return this.$val.Round(nd); };
decimalstrconv.decimalstrconv.shouldRoundUp (*strconv.decimal).RoundDown �	decimal.ptr.prototype.RoundDown = function(nd) {
		var a, nd;
		a = this;
    		if (nd < 0 || nd >= a.nd) {
  �8			return;
    		}
  �C		a.nd = nd;
  �N		trim(a);
    	};
	decimal.prototype.RoundDown = function(nd) { return this.$val.RoundDown(nd); };
decimalstrconv.decimalstrconv.trim (*strconv.decimal).RoundUp �Q	decimal.ptr.prototype.RoundUp = function(nd) {
		var a, c, i, nd, x, x$1, x$2;
		a = this;
    		if (nd < 0 || nd >= a.nd) {
  ��			return;
    		}
  ��		i = nd - 1 >> 0;
		while (true) {
			if (!(i >= 0)) { break; }
  ��			c = (x = a.d, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i]));
    			if (c < 57) {
  �6				(x$2 = a.d, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i] = ((x$1 = a.d, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i])) + (1) << 24 >>> 24)));
  �B				a.nd = i + 1 >> 0;
  �R				return;
    			}
  ��			i = i - (1) >> 0;
    		}
  ��		a.d[0] = 49;
  ��		a.nd = 1;
  ��		a.dp = a.dp + (1) >> 0;
    	};
	decimal.prototype.RoundUp = function(nd) { return this.$val.RoundUp(nd); };
decimalstrconv.decimal !(*strconv.decimal).RoundedInteger ��	decimal.ptr.prototype.RoundedInteger = function() {
		var a, i, n, x, x$1, x$2, x$3;
		a = this;
    		if (a.dp > 20) {
  �]			return new $Uint64(4294967295, 4294967295);
    		}
  �		i = 0;
  ��		n = new $Uint64(0, 0);
  ��		i = 0;
		while (true) {
			if (!(i < a.dp && i < a.nd)) { break; }
  ��			n = (x = $mul64(n, new $Uint64(0, 10)), x$1 = (new $Uint64(0, ((x$2 = a.d, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) - 48 << 24 >>> 24))), new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
  ��			i = i + (1) >> 0;
    		}
  ��		while (true) {
			if (!(i < a.dp)) { break; }
  ��			n = $mul64(n, (new $Uint64(0, 10)));
  ��			i = i + (1) >> 0;
    		}
    		if (shouldRoundUp(a, a.dp)) {
  �#			n = (x$3 = new $Uint64(0, 1), new $Uint64(n.$high + x$3.$high, n.$low + x$3.$low));
    		}
  �+		return n;
    	};
	decimal.prototype.RoundedInteger = function() { return this.$val.RoundedInteger(); };
decimalstrconv.decimalstrconv.shouldRoundUp strconv.eiselLemire64strconveiselLemire64 eiselLemire64�,	eiselLemire64 = function(man, exp10, neg) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, clz, exp10, f, man, mergedHi, mergedLo, msb, neg, ok, retBits, retExp2, retMantissa, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, xHi, xLo, yHi, yLo;
		f = 0;
		ok = false;
    		if ((man.$high === 0 && man.$low === 0)) {
    			if (neg) {
  ��				f = math.Float64frombits(new $Uint64(2147483648, 0));
    			}
    			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
    		}
    		if (exp10 < -348 || 347 < exp10) {
    			_tmp$2 = 0;
			_tmp$3 = false;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
    		}
  �R		clz = bits.LeadingZeros64(man);
  �s		man = $shiftLeft64(man, (((clz >>> 0))));
  ��		retExp2 = (x = (new $Uint64(0, (((($imul(217706, exp10)) >> 16 >> 0) + 64 >> 0) + 1023 >> 0))), x$1 = (new $Uint64(0, clz)), new $Uint64(x.$high - x$1.$high, x.$low - x$1.$low));
  �		_tuple = bits.Mul64(man, (x$2 = exp10 - -348 >> 0, ((x$2 < 0 || x$2 >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x$2]))[1]);
		xHi = _tuple[0];
		xLo = _tuple[1];
    		if ((x$3 = new $Uint64(xHi.$high & 0, (xHi.$low & 511) >>> 0), (x$3.$high === 0 && x$3.$low === 511)) && (x$4 = new $Uint64(xLo.$high + man.$high, xLo.$low + man.$low), (x$4.$high < man.$high || (x$4.$high === man.$high && x$4.$low < man.$low)))) {
  ��			_tuple$1 = bits.Mul64(man, (x$5 = exp10 - -348 >> 0, ((x$5 < 0 || x$5 >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x$5]))[0]);
			yHi = _tuple$1[0];
			yLo = _tuple$1[1];
  ��			_tmp$4 = xHi;
			_tmp$5 = new $Uint64(xLo.$high + yHi.$high, xLo.$low + yHi.$low);
			mergedHi = _tmp$4;
			mergedLo = _tmp$5;
    			if ((mergedLo.$high < xLo.$high || (mergedLo.$high === xLo.$high && mergedLo.$low < xLo.$low))) {
  �9				mergedHi = (x$6 = new $Uint64(0, 1), new $Uint64(mergedHi.$high + x$6.$high, mergedHi.$low + x$6.$low));
    			}
    			if ((x$7 = new $Uint64(mergedHi.$high & 0, (mergedHi.$low & 511) >>> 0), (x$7.$high === 0 && x$7.$low === 511)) && (x$8 = new $Uint64(mergedLo.$high + 0, mergedLo.$low + 1), (x$8.$high === 0 && x$8.$low === 0)) && (x$9 = new $Uint64(yLo.$high + man.$high, yLo.$low + man.$low), (x$9.$high < man.$high || (x$9.$high === man.$high && x$9.$low < man.$low)))) {
    				_tmp$6 = 0;
				_tmp$7 = false;
				f = _tmp$6;
				ok = _tmp$7;
				return [f, ok];
    			}
  ��			_tmp$8 = mergedHi;
			_tmp$9 = mergedLo;
			xHi = _tmp$8;
			xLo = _tmp$9;
    		}
  ��		msb = $shiftRightUint64(xHi, 63);
  ��		retMantissa = $shiftRightUint64(xHi, $flatten64((new $Uint64(msb.$high + 0, msb.$low + 9))));
  �		retExp2 = (x$10 = new $Uint64(0 ^ msb.$high, (1 ^ msb.$low) >>> 0), new $Uint64(retExp2.$high - x$10.$high, retExp2.$low - x$10.$low));
    		if ((xLo.$high === 0 && xLo.$low === 0) && (x$11 = new $Uint64(xHi.$high & 0, (xHi.$low & 511) >>> 0), (x$11.$high === 0 && x$11.$low === 0)) && (x$12 = new $Uint64(retMantissa.$high & 0, (retMantissa.$low & 3) >>> 0), (x$12.$high === 0 && x$12.$low === 1))) {
    			_tmp$10 = 0;
			_tmp$11 = false;
			f = _tmp$10;
			ok = _tmp$11;
			return [f, ok];
    		}
  ��		retMantissa = (x$13 = new $Uint64(retMantissa.$high & 0, (retMantissa.$low & 1) >>> 0), new $Uint64(retMantissa.$high + x$13.$high, retMantissa.$low + x$13.$low));
  ��		retMantissa = $shiftRightUint64(retMantissa, (1));
    		if ((x$14 = $shiftRightUint64(retMantissa, 53), (x$14.$high > 0 || (x$14.$high === 0 && x$14.$low > 0)))) {
  ��			retMantissa = $shiftRightUint64(retMantissa, (1));
  �			retExp2 = (x$15 = new $Uint64(0, 1), new $Uint64(retExp2.$high + x$15.$high, retExp2.$low + x$15.$low));
    		}
    		if ((x$16 = new $Uint64(retExp2.$high - 0, retExp2.$low - 1), (x$16.$high > 0 || (x$16.$high === 0 && x$16.$low >= 2046)))) {
    			_tmp$12 = 0;
			_tmp$13 = false;
			f = _tmp$12;
			ok = _tmp$13;
			return [f, ok];
    		}
  �U		retBits = (x$17 = $shiftLeft64(retExp2, 52), x$18 = new $Uint64(retMantissa.$high & 1048575, (retMantissa.$low & 4294967295) >>> 0), new $Uint64(x$17.$high | x$18.$high, (x$17.$low | x$18.$low) >>> 0));
    		if (neg) {
  ��			retBits = (x$19 = new $Uint64(2147483648, 0), new $Uint64(retBits.$high | x$19.$high, (retBits.$low | x$19.$low) >>> 0));
    		}
    		_tmp$14 = math.Float64frombits(retBits);
		_tmp$15 = true;
		f = _tmp$14;
		ok = _tmp$15;
		return [f, ok];
    	};
eiselLemire64math.Float64frombitsmath/bits.LeadingZeros64math/bits.Mul64strconv.detailedPowersOfTenstrconv.eiselLemire64 strconv.eiselLemire32strconveiselLemire32 eiselLemire32�I	eiselLemire32 = function(man, exp10, neg) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, clz, exp10, f, man, mergedHi, mergedLo, msb, neg, ok, retBits, retExp2, retMantissa, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, xHi, xLo, yHi, yLo;
		f = 0;
		ok = false;
    		if ((man.$high === 0 && man.$low === 0)) {
    			if (neg) {
  �`				f = math.Float32frombits(2147483648);
    			}
    			_tmp = f;
			_tmp$1 = true;
			f = _tmp;
			ok = _tmp$1;
			return [f, ok];
    		}
    		if (exp10 < -348 || 347 < exp10) {
    			_tmp$2 = 0;
			_tmp$3 = false;
			f = _tmp$2;
			ok = _tmp$3;
			return [f, ok];
    		}
  �*		clz = bits.LeadingZeros64(man);
  �K		man = $shiftLeft64(man, (((clz >>> 0))));
  �		retExp2 = (x = (new $Uint64(0, (((($imul(217706, exp10)) >> 16 >> 0) + 64 >> 0) + 127 >> 0))), x$1 = (new $Uint64(0, clz)), new $Uint64(x.$high - x$1.$high, x.$low - x$1.$low));
  ��		_tuple = bits.Mul64(man, (x$2 = exp10 - -348 >> 0, ((x$2 < 0 || x$2 >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x$2]))[1]);
		xHi = _tuple[0];
		xLo = _tuple[1];
    		if ((x$3 = new $Uint64(xHi.$high & 63, (xHi.$low & 4294967295) >>> 0), (x$3.$high === 63 && x$3.$low === 4294967295)) && (x$4 = new $Uint64(xLo.$high + man.$high, xLo.$low + man.$low), (x$4.$high < man.$high || (x$4.$high === man.$high && x$4.$low < man.$low)))) {
  ��			_tuple$1 = bits.Mul64(man, (x$5 = exp10 - -348 >> 0, ((x$5 < 0 || x$5 >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x$5]))[0]);
			yHi = _tuple$1[0];
			yLo = _tuple$1[1];
  ��			_tmp$4 = xHi;
			_tmp$5 = new $Uint64(xLo.$high + yHi.$high, xLo.$low + yHi.$low);
			mergedHi = _tmp$4;
			mergedLo = _tmp$5;
    			if ((mergedLo.$high < xLo.$high || (mergedLo.$high === xLo.$high && mergedLo.$low < xLo.$low))) {
  �				mergedHi = (x$6 = new $Uint64(0, 1), new $Uint64(mergedHi.$high + x$6.$high, mergedHi.$low + x$6.$low));
    			}
    			if ((x$7 = new $Uint64(mergedHi.$high & 63, (mergedHi.$low & 4294967295) >>> 0), (x$7.$high === 63 && x$7.$low === 4294967295)) && (x$8 = new $Uint64(mergedLo.$high + 0, mergedLo.$low + 1), (x$8.$high === 0 && x$8.$low === 0)) && (x$9 = new $Uint64(yLo.$high + man.$high, yLo.$low + man.$low), (x$9.$high < man.$high || (x$9.$high === man.$high && x$9.$low < man.$low)))) {
    				_tmp$6 = 0;
				_tmp$7 = false;
				f = _tmp$6;
				ok = _tmp$7;
				return [f, ok];
    			}
  ��			_tmp$8 = mergedHi;
			_tmp$9 = mergedLo;
			xHi = _tmp$8;
			xLo = _tmp$9;
    		}
  ��		msb = $shiftRightUint64(xHi, 63);
  �		retMantissa = $shiftRightUint64(xHi, $flatten64((new $Uint64(msb.$high + 0, msb.$low + 38))));
  �3		retExp2 = (x$10 = new $Uint64(0 ^ msb.$high, (1 ^ msb.$low) >>> 0), new $Uint64(retExp2.$high - x$10.$high, retExp2.$low - x$10.$low));
    		if ((xLo.$high === 0 && xLo.$low === 0) && (x$11 = new $Uint64(xHi.$high & 63, (xHi.$low & 4294967295) >>> 0), (x$11.$high === 0 && x$11.$low === 0)) && (x$12 = new $Uint64(retMantissa.$high & 0, (retMantissa.$low & 3) >>> 0), (x$12.$high === 0 && x$12.$low === 1))) {
    			_tmp$10 = 0;
			_tmp$11 = false;
			f = _tmp$10;
			ok = _tmp$11;
			return [f, ok];
    		}
  ��		retMantissa = (x$13 = new $Uint64(retMantissa.$high & 0, (retMantissa.$low & 1) >>> 0), new $Uint64(retMantissa.$high + x$13.$high, retMantissa.$low + x$13.$low));
  �		retMantissa = $shiftRightUint64(retMantissa, (1));
    		if ((x$14 = $shiftRightUint64(retMantissa, 24), (x$14.$high > 0 || (x$14.$high === 0 && x$14.$low > 0)))) {
  �E			retMantissa = $shiftRightUint64(retMantissa, (1));
  �Y			retExp2 = (x$15 = new $Uint64(0, 1), new $Uint64(retExp2.$high + x$15.$high, retExp2.$low + x$15.$low));
    		}
    		if ((x$16 = new $Uint64(retExp2.$high - 0, retExp2.$low - 1), (x$16.$high > 0 || (x$16.$high === 0 && x$16.$low >= 254)))) {
    			_tmp$12 = 0;
			_tmp$13 = false;
			f = _tmp$12;
			ok = _tmp$13;
			return [f, ok];
    		}
  ��		retBits = (x$17 = $shiftLeft64(retExp2, 23), x$18 = new $Uint64(retMantissa.$high & 0, (retMantissa.$low & 8388607) >>> 0), new $Uint64(x$17.$high | x$18.$high, (x$17.$low | x$18.$low) >>> 0));
    		if (neg) {
  ��			retBits = (x$19 = new $Uint64(0, 2147483648), new $Uint64(retBits.$high | x$19.$high, (retBits.$low | x$19.$low) >>> 0));
    		}
    		_tmp$14 = math.Float32frombits(((retBits.$low >>> 0)));
		_tmp$15 = true;
		f = _tmp$14;
		ok = _tmp$15;
		return [f, ok];
    	};
eiselLemire32math.Float32frombitsmath/bits.LeadingZeros64math/bits.Mul64strconv.detailedPowersOfTenstrconv.eiselLemire32 strconv.FormatFloatstrconvFormatFloat FormatFloat��	FormatFloat = function(f, fmt, prec, bitSize) {
		var bitSize, f, fmt, prec;
 S(		return ($bytesToString(genericFtoa($makeSlice(sliceType$6, 0, max(prec + 4 >> 0, 24)), f, fmt, prec, bitSize)));
    	};
	$pkg.FormatFloat = FormatFloat;
FormatFloatstrconv.FormatFloatstrconv.genericFtoastrconv.maxstrconv.sliceType$6 strconv.AppendFloatstrconvAppendFloat AppendFloat��	AppendFloat = function(dst, f, fmt, prec, bitSize) {
		var bitSize, dst, f, fmt, prec;
 T]		return genericFtoa(dst, f, fmt, prec, bitSize);
    	};
	$pkg.AppendFloat = AppendFloat;
AppendFloatstrconv.AppendFloatstrconv.genericFtoa strconv.genericFtoastrconvgenericFtoa genericFtoa�t	genericFtoa = function(dst, val, fmt, prec, bitSize) {
		var _1, _2, _3, _4, bitSize, bits$1, buf, buf$1, digits, digs, dst, exp, flt, fmt, mant, neg, ok, prec, s, shortest, val, x, x$1, x$2, x$3, y, y$1;
 T�		bits$1 = new $Uint64(0, 0);
 T�		flt = ptrType$1.nil;
    		_1 = bitSize;
    		if (_1 === (32)) {
 U"			bits$1 = (new $Uint64(0, math.Float32bits(($fround(val)))));
 UR			flt = float32info;
    		} else if (_1 === (64)) {
 Uq			bits$1 = math.Float64bits(val);
 U�			flt = float64info;
    		} else {
 U�			$panic(new $String("strconv: illegal AppendFloat/FormatFloat bitSize"));
    		}
 U�		neg = !((x = $shiftRightUint64(bits$1, ((flt.expbits + flt.mantbits >>> 0))), (x.$high === 0 && x.$low === 0)));
 V		exp = (($shiftRightUint64(bits$1, flt.mantbits).$low >> 0)) & ((((y = flt.expbits, y < 32 ? (1 << y) : 0) >> 0) - 1 >> 0));
 VS		mant = (x$1 = (x$2 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(x$2.$high - 0, x$2.$low - 1)), new $Uint64(bits$1.$high & x$1.$high, (bits$1.$low & x$1.$low) >>> 0));
    		_2 = exp;
    		if (_2 === ((((y$1 = flt.expbits, y$1 < 32 ? (1 << y$1) : 0) >> 0) - 1 >> 0))) {
 V�			s = "";
    			if (!((mant.$high === 0 && mant.$low === 0))) {
 V�				s = "NaN";
    			} else if (neg) {
 V�				s = "-Inf";
    			} else {
 W				s = "+Inf";
    			}
 W)			return $appendSlice(dst, s);
    		} else if (_2 === (0)) {
 W`			exp = exp + (1) >> 0;
    		} else {
 W�			mant = (x$3 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), new $Uint64(mant.$high | x$3.$high, (mant.$low | x$3.$low) >>> 0));
    		}
 W�		exp = exp + (flt.bias) >> 0;
    		if (fmt === 98) {
 W�			return fmtB(dst, neg, mant, exp, flt);
    		}
    		if ((fmt === 120) || (fmt === 88)) {
 XH			return fmtX(dst, prec, fmt, neg, mant, exp, flt);
    		}
    		if (!optimize) {
 X�			return bigFtoa(dst, prec, fmt, neg, mant, exp, flt);
    		}
 X�		digs = new decimalSlice.ptr(sliceType$6.nil, 0, 0, false);
 X�		ok = false;
 Y/		shortest = prec < 0;
    		if (shortest) {
 Yq			buf = arrayType$3.zero();
 Y�			digs.d = new sliceType$6(buf);
 Y�			ryuFtoaShortest(digs, mant, exp - ((flt.mantbits >> 0)) >> 0, flt);
 Y�			ok = true;
    			_3 = fmt;
    			if ((_3 === (101)) || (_3 === (69))) {
 Z+				prec = max(digs.nd - 1 >> 0, 0);
    			} else if (_3 === (102)) {
 ZS				prec = max(digs.nd - digs.dp >> 0, 0);
    			} else if ((_3 === (103)) || (_3 === (71))) {
 Z�				prec = digs.nd;
    			}
    		} else if (!((fmt === 102))) {
 Z�			digits = prec;
    			_4 = fmt;
    			if ((_4 === (101)) || (_4 === (69))) {
 [				digits = digits + (1) >> 0;
    			} else if ((_4 === (103)) || (_4 === (71))) {
    				if (prec === 0) {
 [2					prec = 1;
    				}
 [C				digits = prec;
    			}
 [[			buf$1 = arrayType$2.zero();
    			if ((bitSize === 32) && digits <= 9) {
 [�				digs.d = new sliceType$6(buf$1);
 [�				ryuFtoaFixed32(digs, ((mant.$low >>> 0)), exp - ((flt.mantbits >> 0)) >> 0, digits);
 [�				ok = true;
    			} else if (digits <= 18) {
 \				digs.d = new sliceType$6(buf$1);
 \#				ryuFtoaFixed64(digs, mant, exp - ((flt.mantbits >> 0)) >> 0, digits);
 \a				ok = true;
    			}
    		}
    		if (!ok) {
 \~			return bigFtoa(dst, prec, fmt, neg, mant, exp, flt);
    		}
 \�		return formatDigits(dst, shortest, neg, $clone(digs, decimalSlice), prec, fmt);
    	};
genericFtoamath.Float32bitsmath.Float64bitsstrconv.arrayType$2strconv.arrayType$3strconv.bigFtoastrconv.decimalSlicestrconv.float32infostrconv.float64infostrconv.floatInfostrconv.fmtBstrconv.fmtXstrconv.formatDigitsstrconv.genericFtoastrconv.maxstrconv.optimizestrconv.ptrType$1strconv.ryuFtoaFixed32strconv.ryuFtoaFixed64strconv.ryuFtoaShorteststrconv.sliceType$6 strconv.bigFtoastrconvbigFtoa bigFtoa�0	bigFtoa = function(dst, prec, fmt, neg, mant, exp, flt) {
		var _1, _2, d, digs, dst, exp, flt, fmt, mant, neg, prec, shortest;
 ]�		d = new decimal.ptr(arrayType$1.zero(), 0, 0, false, false);
 ]�		d.Assign(mant);
 ]�		d.Shift(exp - ((flt.mantbits >> 0)) >> 0);
 ]�		digs = new decimalSlice.ptr(sliceType$6.nil, 0, 0, false);
 ]�		shortest = prec < 0;
    		if (shortest) {
 ^			roundShortest(d, mant, exp, flt);
 ^=			decimalSlice.copy(digs, new decimalSlice.ptr(new sliceType$6(d.d), d.nd, d.dp, false));
    			_1 = fmt;
    			if ((_1 === (101)) || (_1 === (69))) {
 ^�				prec = digs.nd - 1 >> 0;
    			} else if (_1 === (102)) {
 ^�				prec = max(digs.nd - digs.dp >> 0, 0);
    			} else if ((_1 === (103)) || (_1 === (71))) {
 _				prec = digs.nd;
    			}
    		} else {
    			_2 = fmt;
    			if ((_2 === (101)) || (_2 === (69))) {
 _s				d.Round(prec + 1 >> 0);
    			} else if (_2 === (102)) {
 _�				d.Round(d.dp + prec >> 0);
    			} else if ((_2 === (103)) || (_2 === (71))) {
    				if (prec === 0) {
 _�					prec = 1;
    				}
 _�				d.Round(prec);
    			}
 _�			decimalSlice.copy(digs, new decimalSlice.ptr(new sliceType$6(d.d), d.nd, d.dp, false));
    		}
 `,		return formatDigits(dst, shortest, neg, $clone(digs, decimalSlice), prec, fmt);
    	};
bigFtoastrconv.arrayType$1strconv.bigFtoastrconv.decimalstrconv.decimalSlicestrconv.formatDigitsstrconv.maxstrconv.roundShorteststrconv.sliceType$6 strconv.formatDigitsstrconvformatDigits formatDigits�	formatDigits = function(dst, shortest, neg, digs, prec, fmt) {
		var _1, digs, dst, eprec, exp, fmt, neg, prec, shortest;
    		_1 = fmt;
    		if ((_1 === (101)) || (_1 === (69))) {
 `�			return fmtE(dst, neg, $clone(digs, decimalSlice), prec, fmt);
    		} else if (_1 === (102)) {
 a#			return fmtF(dst, neg, $clone(digs, decimalSlice), prec);
    		} else if ((_1 === (103)) || (_1 === (71))) {
 a�			eprec = prec;
    			if (eprec > digs.nd && digs.nd >= digs.dp) {
 a�				eprec = digs.nd;
    			}
    			if (shortest) {
 b�				eprec = 6;
    			}
 b�			exp = digs.dp - 1 >> 0;
    			if (exp < -4 || exp >= eprec) {
    				if (prec > digs.nd) {
 c					prec = digs.nd;
    				}
 c1				return fmtE(dst, neg, $clone(digs, decimalSlice), prec - 1 >> 0, (fmt + 101 << 24 >>> 24) - 103 << 24 >>> 24);
    			}
    			if (prec > digs.dp) {
 c				prec = digs.nd;
    			}
 c�			return fmtF(dst, neg, $clone(digs, decimalSlice), max(prec - digs.dp >> 0, 0));
    		}
 c�		return $append(dst, 37, fmt);
    	};
formatDigitsstrconv.decimalSlicestrconv.fmtEstrconv.fmtFstrconv.formatDigitsstrconv.max strconv.roundShorteststrconvroundShortest roundShortest��	roundShortest = function(d, mant, exp, flt) {
		var d, exp, explo, flt, inclusive, l, li, lower$1, m, mant, mantlo, mi, minexp, okdown, okup, u, ui, upper, upperdelta, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7;
    		if ((mant.$high === 0 && mant.$low === 0)) {
 e)			d.nd = 0;
 e4			return;
    		}
 g�		minexp = flt.bias + 1 >> 0;
    		if (exp > minexp && ($imul(332, ((d.dp - d.nd >> 0)))) >= ($imul(100, ((exp - ((flt.mantbits >> 0)) >> 0))))) {
 hV			return;
    		}
 i			upper = new decimal.ptr(arrayType$1.zero(), 0, 0, false, false);
 i 		upper.Assign((x = $mul64(mant, new $Uint64(0, 2)), new $Uint64(x.$high + 0, x.$low + 1)));
 i:		upper.Shift((exp - ((flt.mantbits >> 0)) >> 0) - 1 >> 0);
 j�		mantlo = new $Uint64(0, 0);
 j�		explo = 0;
    		if ((x$1 = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), (mant.$high > x$1.$high || (mant.$high === x$1.$high && mant.$low > x$1.$low))) || (exp === minexp)) {
 k			mantlo = new $Uint64(mant.$high - 0, mant.$low - 1);
 k3			explo = exp;
    		} else {
 kK			mantlo = (x$2 = $mul64(mant, new $Uint64(0, 2)), new $Uint64(x$2.$high - 0, x$2.$low - 1));
 ka			explo = exp - 1 >> 0;
    		}
 ku		lower$1 = new decimal.ptr(arrayType$1.zero(), 0, 0, false, false);
 k�		lower$1.Assign((x$3 = $mul64(mantlo, new $Uint64(0, 2)), new $Uint64(x$3.$high + 0, x$3.$low + 1)));
 k�		lower$1.Shift((explo - ((flt.mantbits >> 0)) >> 0) - 1 >> 0);
 l�		inclusive = (x$4 = $div64(mant, new $Uint64(0, 2), true), (x$4.$high === 0 && x$4.$low === 0));
 n�		upperdelta = 0;
 oo		ui = 0;
		while (true) {
 p9			mi = (ui - upper.dp >> 0) + d.dp >> 0;
    			if (mi >= d.nd) {
 pi				break;
    			}
 pu			li = (ui - upper.dp >> 0) + lower$1.dp >> 0;
 p�			l = 48;
    			if (li >= 0 && li < lower$1.nd) {
 p�				l = (x$5 = lower$1.d, ((li < 0 || li >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[li]));
    			}
 p�			m = 48;
    			if (mi >= 0) {
 q				m = (x$6 = d.d, ((mi < 0 || mi >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[mi]));
    			}
 q0			u = 48;
    			if (ui < upper.nd) {
 qf				u = (x$7 = upper.d, ((ui < 0 || ui >= x$7.length) ? ($throwRuntimeError("index out of range"), undefined) : x$7[ui]));
    			}
 rC			okdown = !((l === m)) || inclusive && ((li + 1 >> 0) === lower$1.nd);
    			if ((upperdelta === 0) && (m + 1 << 24 >>> 24) < u) {
 r�				upperdelta = 2;
    			} else if ((upperdelta === 0) && !((m === u))) {
 sE				upperdelta = 1;
    			} else if ((upperdelta === 1) && (!((m === 57)) || !((u === 48)))) {
 s�				upperdelta = 2;
    			}
 t^			okup = upperdelta > 0 && (inclusive || upperdelta > 1 || (ui + 1 >> 0) < upper.nd);
    			if (okdown && okup) {
 u7				d.Round(mi + 1 >> 0);
 uJ				return;
    			} else if (okdown) {
 uc				d.RoundDown(mi + 1 >> 0);
 uz				return;
    			} else if (okup) {
 u�				d.RoundUp(mi + 1 >> 0);
 u�				return;
    			}
 oz			ui = ui + (1) >> 0;
    		}
    	};
roundShorteststrconv.arrayType$1strconv.decimalstrconv.roundShortest strconv.fmtEstrconvfmtE fmtE��	fmtE = function(dst, neg, d, prec, fmt) {
		var _q, _q$1, _q$2, _r, _r$1, _r$2, ch, d, dst, exp, fmt, i, m, neg, prec, x;
    		if (neg) {
 vt			dst = $append(dst, 45);
    		}
 v�		ch = 48;
    		if (!((d.nd === 0))) {
 v�			ch = (x = d.d, (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0]));
    		}
 v�		dst = $append(dst, ch);
    		if (prec > 0) {
 w
			dst = $append(dst, 46);
 w#			i = 1;
 w,			m = min(d.nd, prec + 1 >> 0);
    			if (i < m) {
 wS				dst = $appendSlice(dst, $subslice(d.d, i, m));
 wu				i = m;
    			}
 w�			while (true) {
				if (!(i <= prec)) { break; }
 w�				dst = $append(dst, 48);
 w�				i = i + (1) >> 0;
    			}
    		}
 w�		dst = $append(dst, fmt);
 w�		exp = d.dp - 1 >> 0;
    		if (d.nd === 0) {
 x			exp = 0;
    		}
    		if (exp < 0) {
 x:			ch = 45;
 xE			exp = -exp;
    		} else {
 x\			ch = 43;
    		}
 xi		dst = $append(dst, ch);
    		if (exp < 10) {
 x�			dst = $append(dst, 48, ((exp << 24 >>> 24)) + 48 << 24 >>> 24);
    		} else if (exp < 100) {
 x�			dst = $append(dst, (((_q = exp / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r = exp % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
    		} else {
 y%			dst = $append(dst, (((_q$1 = exp / 100, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (_r$1 = (((_q$2 = exp / 10, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) % 10, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) + 48 << 24 >>> 24, (((_r$2 = exp % 10, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
    		}
 yv		return dst;
    	};
fmtEstrconv.fmtEstrconv.min strconv.fmtFstrconvfmtF fmtF�s	fmtF = function(dst, neg, d, prec) {
		var ch, d, dst, i, j, m, neg, prec, x;
    		if (neg) {
 y�			dst = $append(dst, 45);
    		}
    		if (d.dp > 0) {
 zH			m = min(d.nd, d.dp);
 z_			dst = $appendSlice(dst, $subslice(d.d, 0, m));
 z			while (true) {
				if (!(m < d.dp)) { break; }
 z�				dst = $append(dst, 48);
 z�				m = m + (1) >> 0;
    			}
    		} else {
 z�			dst = $append(dst, 48);
    		}
    		if (prec > 0) {
 z�			dst = $append(dst, 46);
 {			i = 0;
			while (true) {
				if (!(i < prec)) { break; }
 {0				ch = 48;
 {F				j = d.dp + i >> 0;
    				if (0 <= j && j < d.nd) {
 {n					ch = (x = d.d, ((j < 0 || j >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + j]));
    				}
 {�				dst = $append(dst, ch);
 {'				i = i + (1) >> 0;
    			}
    		}
 {�		return dst;
    	};
fmtFstrconv.fmtFstrconv.min strconv.fmtBstrconvfmtB fmtB��	fmtB = function(dst, neg, mant, exp, flt) {
		var _tuple, _tuple$1, dst, exp, flt, mant, neg;
    		if (neg) {
 |*			dst = $append(dst, 45);
    		}
 |S		_tuple = formatBits(dst, mant, 10, false, true);
		dst = _tuple[0];
 |�		dst = $append(dst, 112);
 |�		exp = exp - (((flt.mantbits >> 0))) >> 0;
    		if (exp >= 0) {
 |�			dst = $append(dst, 43);
    		}
 |�		_tuple$1 = formatBits(dst, (new $Uint64(0, exp)), 10, exp < 0, true);
		dst = _tuple$1[0];
 }3		return dst;
    	};
fmtBstrconv.fmtBstrconv.formatBits strconv.fmtXstrconvfmtX fmtX�	fmtX = function(dst, prec, fmt, neg, mant, exp, flt) {
		var _q, _q$1, _q$2, _q$3, _q$4, _q$5, _r, _r$1, _r$2, _r$3, _r$4, _r$5, ch, dst, exp, extra, flt, fmt, hex, i, mant, neg, prec, shift, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8;
    		if ((mant.$high === 0 && mant.$low === 0)) {
 ~			exp = 0;
    		}
 ~G		mant = $shiftLeft64(mant, ((60 - flt.mantbits >>> 0)));
 ~c		while (true) {
			if (!(!((mant.$high === 0 && mant.$low === 0)) && (x = new $Uint64(mant.$high & 268435456, (mant.$low & 0) >>> 0), (x.$high === 0 && x.$low === 0)))) { break; }
 ~�			mant = $shiftLeft64(mant, (1));
 ~�			exp = exp - (1) >> 0;
    		}
    		if (prec >= 0 && prec < 15) {
 ~�			shift = ((($imul(prec, 4)) >>> 0));
 ~�			extra = (x$1 = $shiftLeft64(mant, shift), new $Uint64(x$1.$high & 268435455, (x$1.$low & 4294967295) >>> 0));
 			mant = $shiftRightUint64(mant, ((60 - shift >>> 0)));
    			if ((x$2 = (x$3 = new $Uint64(mant.$high & 0, (mant.$low & 1) >>> 0), new $Uint64(extra.$high | x$3.$high, (extra.$low | x$3.$low) >>> 0)), (x$2.$high > 134217728 || (x$2.$high === 134217728 && x$2.$low > 0)))) {
 P				mant = (x$4 = new $Uint64(0, 1), new $Uint64(mant.$high + x$4.$high, mant.$low + x$4.$low));
    			}
 ]			mant = $shiftLeft64(mant, ((60 - shift >>> 0)));
    			if (!((x$5 = new $Uint64(mant.$high & 536870912, (mant.$low & 0) >>> 0), (x$5.$high === 0 && x$5.$low === 0)))) {
 �				mant = $shiftRightUint64(mant, (1));
 �				exp = exp + (1) >> 0;
    			}
    		}
 �		hex = "0123456789abcdef";
    		if (fmt === 88) {
 �			hex = "0123456789ABCDEF";
    		}
    		if (neg) {
 �			dst = $append(dst, 45);
    		}
 �9		dst = $append(dst, 48, fmt, 48 + (((x$6 = $shiftRightUint64(mant, 60), new $Uint64(x$6.$high & 0, (x$6.$low & 1) >>> 0)).$low << 24 >>> 24)) << 24 >>> 24);
 �}		mant = $shiftLeft64(mant, (4));
    		if (prec < 0 && !((mant.$high === 0 && mant.$low === 0))) {
 ��			dst = $append(dst, 46);
 ��			while (true) {
				if (!(!((mant.$high === 0 && mant.$low === 0)))) { break; }
 ��				dst = $append(dst, hex.charCodeAt($flatten64((x$7 = $shiftRightUint64(mant, 60), new $Uint64(x$7.$high & 0, (x$7.$low & 15) >>> 0)))));
 �				mant = $shiftLeft64(mant, (4));
    			}
    		} else if (prec > 0) {
 �;			dst = $append(dst, 46);
 �X			i = 0;
			while (true) {
				if (!(i < prec)) { break; }
 �s				dst = $append(dst, hex.charCodeAt($flatten64((x$8 = $shiftRightUint64(mant, 60), new $Uint64(x$8.$high & 0, (x$8.$low & 15) >>> 0)))));
 ��				mant = $shiftLeft64(mant, (4));
 �j				i = i + (1) >> 0;
    			}
    		}
 ��		ch = 80;
    		if (fmt === lower(fmt)) {
 ��			ch = 112;
    		}
 ��		dst = $append(dst, ch);
    		if (exp < 0) {
 �			ch = 45;
 � 			exp = -exp;
    		} else {
 �7			ch = 43;
    		}
 �D		dst = $append(dst, ch);
    		if (exp < 100) {
 ��			dst = $append(dst, (((_q = exp / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r = exp % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
    		} else if (exp < 1000) {
 ��			dst = $append(dst, (((_q$1 = exp / 100, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r$1 = ((_q$2 = exp / 10, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero"))) % 10, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r$2 = exp % 10, _r$2 === _r$2 ? _r$2 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
    		} else {
 �2			dst = $append(dst, (((_q$3 = exp / 1000, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (_r$3 = (((_q$4 = exp / 100, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >> 0 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) % 10, _r$3 === _r$3 ? _r$3 : $throwRuntimeError("integer divide by zero")) + 48 << 24 >>> 24, (((_r$4 = ((_q$5 = exp / 10, (_q$5 === _q$5 && _q$5 !== 1/0 && _q$5 !== -1/0) ? _q$5 >> 0 : $throwRuntimeError("integer divide by zero"))) % 10, _r$4 === _r$4 ? _r$4 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24, (((_r$5 = exp % 10, _r$5 === _r$5 ? _r$5 : $throwRuntimeError("integer divide by zero")) << 24 >>> 24)) + 48 << 24 >>> 24);
    		}
 ��		return dst;
    	};
fmtXstrconv.fmtXstrconv.lower strconv.minstrconvmin minm	min = function(a, b) {
		var a, b;
    		if (a < b) {
 ��			return a;
    		}
 ��		return b;
    	};
minstrconv.min strconv.maxstrconvmax maxm	max = function(a, b) {
		var a, b;
    		if (a > b) {
 �			return a;
    		}
 �		return b;
    	};
maxstrconv.max strconv.ryuFtoaFixed32strconvryuFtoaFixed32 ryuFtoaFixed32�	ryuFtoaFixed32 = function(d, mant, exp, prec) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, d, d0, dexp2, dfrac, di, e2, exact, exp, extra, extraMask, mant, prec, q, roundUp, y, y$1, y$2, y$3, y$4, y$5, y$6;
    		if (prec < 0) {
 ��			$panic(new $String("ryuFtoaFixed32 called with negative prec"));
    		}
    		if (prec > 9) {
 �			$panic(new $String("ryuFtoaFixed32 called with prec > 9"));
    		}
    		if (mant === 0) {
 �k			_tmp = 0;
			_tmp$1 = 0;
			d.nd = _tmp;
			d.dp = _tmp$1;
 �			return;
    		}
 ��		e2 = exp;
 ��		b = bits.Len32(mant);
    		if (b < 25) {
 ��			mant = (y = ((((25 - b >> 0) >>> 0))), y < 32 ? (mant << y) : 0) >>> 0;
 ��			e2 = e2 + (((b) - 25 >> 0)) >> 0;
    		}
 �!		q = (-mulByLog2Log10(e2 + 24 >> 0) + prec >> 0) - 1 >> 0;
 ��		exact = q <= 27 && q >= 0;
 ��		_tuple = mult64bitPow10(mant, e2, q);
		di = _tuple[0];
		dexp2 = _tuple[1];
		d0 = _tuple[2];
    		if (dexp2 >= 0) {
 �.			$panic(new $String("not enough significant bits after mult64bitPow10"));
    		}
    		if (q < 0 && q >= -10 && divisibleByPower5((new $Uint64(0, mant)), -q)) {
 ��			exact = true;
 ��			d0 = true;
    		}
 ��		extra = ((-dexp2 >>> 0));
 �		extraMask = ((((y$1 = extra, y$1 < 32 ? (1 << y$1) : 0) >>> 0) - 1 >>> 0));
 �1		_tmp$2 = (y$2 = extra, y$2 < 32 ? (di >>> y$2) : 0) >>> 0;
		_tmp$3 = (di & extraMask) >>> 0;
		di = _tmp$2;
		dfrac = _tmp$3;
 �W		roundUp = false;
    		if (exact) {
 ��			roundUp = dfrac > ((y$3 = ((extra - 1 >>> 0)), y$3 < 32 ? (1 << y$3) : 0) >>> 0) || ((dfrac === ((y$4 = ((extra - 1 >>> 0)), y$4 < 32 ? (1 << y$4) : 0) >>> 0)) && !d0) || ((dfrac === ((y$5 = ((extra - 1 >>> 0)), y$5 < 32 ? (1 << y$5) : 0) >>> 0)) && d0 && (((di & 1) >>> 0) === 1));
    		} else {
 ��			roundUp = ((y$6 = ((extra - 1 >>> 0)), y$6 < 32 ? (dfrac >>> y$6) : 0) >>> 0) === 1;
    		}
    		if (!((dfrac === 0))) {
 ��			d0 = false;
    		}
 �		formatDecimal(d, (new $Uint64(0, di)), !d0, roundUp, prec);
 �N		d.dp = d.dp - (q) >> 0;
    	};
ryuFtoaFixed32math/bits.Len32strconv.divisibleByPower5strconv.formatDecimalstrconv.mulByLog2Log10strconv.mult64bitPow10strconv.ryuFtoaFixed32 strconv.ryuFtoaFixed64strconvryuFtoaFixed64 ryuFtoaFixed64��	ryuFtoaFixed64 = function(d, mant, exp, prec) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, d, d0, dexp2, dfrac, di, e2, exact, exp, extra, extraMask, mant, prec, q, roundUp, x, x$1, x$2, x$3, x$4, x$5;
    		if (prec > 18) {
 ��			$panic(new $String("ryuFtoaFixed64 called with prec > 18"));
    		}
    		if ((mant.$high === 0 && mant.$low === 0)) {
 �H			_tmp = 0;
			_tmp$1 = 0;
			d.nd = _tmp;
			d.dp = _tmp$1;
 �\			return;
    		}
 ��		e2 = exp;
 ��		b = bits.Len64(mant);
    		if (b < 55) {
 ��			mant = $shiftLeft64(mant, (((55 - b >> 0) >>> 0)));
 ��			e2 = e2 + (((b) - 55 >> 0)) >> 0;
    		}
 ��		q = (-mulByLog2Log10(e2 + 54 >> 0) + prec >> 0) - 1 >> 0;
 �?		exact = q <= 55 && q >= 0;
 �\		_tuple = mult128bitPow10(mant, e2, q);
		di = _tuple[0];
		dexp2 = _tuple[1];
		d0 = _tuple[2];
    		if (dexp2 >= 0) {
 ��			$panic(new $String("not enough significant bits after mult128bitPow10"));
    		}
    		if (q < 0 && q >= -22 && divisibleByPower5(mant, -q)) {
 �			exact = true;
 �			d0 = true;
    		}
 �^		extra = ((-dexp2 >>> 0));
 �u		extraMask = ((x = $shiftLeft64(new $Uint64(0, 1), extra), new $Uint64(x.$high - 0, x.$low - 1)));
 ��		_tmp$2 = $shiftRightUint64(di, extra);
		_tmp$3 = new $Uint64(di.$high & extraMask.$high, (di.$low & extraMask.$low) >>> 0);
		di = _tmp$2;
		dfrac = _tmp$3;
 ��		roundUp = false;
    		if (exact) {
 �4			roundUp = (x$1 = $shiftLeft64(new $Uint64(0, 1), ((extra - 1 >>> 0))), (dfrac.$high > x$1.$high || (dfrac.$high === x$1.$high && dfrac.$low > x$1.$low))) || ((x$2 = $shiftLeft64(new $Uint64(0, 1), ((extra - 1 >>> 0))), (dfrac.$high === x$2.$high && dfrac.$low === x$2.$low)) && !d0) || ((x$3 = $shiftLeft64(new $Uint64(0, 1), ((extra - 1 >>> 0))), (dfrac.$high === x$3.$high && dfrac.$low === x$3.$low)) && d0 && (x$4 = new $Uint64(di.$high & 0, (di.$low & 1) >>> 0), (x$4.$high === 0 && x$4.$low === 1)));
    		} else {
 ��			roundUp = (x$5 = $shiftRightUint64(dfrac, ((extra - 1 >>> 0))), (x$5.$high === 0 && x$5.$low === 1));
    		}
    		if (!((dfrac.$high === 0 && dfrac.$low === 0))) {
 �3			d0 = false;
    		}
 �p		formatDecimal(d, di, !d0, roundUp, prec);
 ��		d.dp = d.dp - (q) >> 0;
    	};
ryuFtoaFixed64math/bits.Len64strconv.divisibleByPower5strconv.formatDecimalstrconv.mulByLog2Log10strconv.mult128bitPow10strconv.ryuFtoaFixed64 strconv.formatDecimalstrconvformatDecimal formatDecimal�>	formatDecimal = function(d, m, trunc, roundUp, prec) {
		var _q, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, a, b, d, m, max$1, n, prec, roundUp, trimmed, trunc, v, v1, v2, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
 �S		max$1 = ((prec < 0 || prec >= uint64pow10.length) ? ($throwRuntimeError("index out of range"), undefined) : uint64pow10[prec]);
 �m		trimmed = 0;
 �{		while (true) {
			if (!((m.$high > max$1.$high || (m.$high === max$1.$high && m.$low >= max$1.$low)))) { break; }
 ��			_tmp = $div64(m, new $Uint64(0, 10), false);
			_tmp$1 = $div64(m, new $Uint64(0, 10), true);
			a = _tmp;
			b = _tmp$1;
 ��			m = a;
 ��			trimmed = trimmed + (1) >> 0;
    			if ((b.$high > 0 || (b.$high === 0 && b.$low > 5))) {
 ��				roundUp = true;
    			} else if ((b.$high < 0 || (b.$high === 0 && b.$low < 5))) {
 ��				roundUp = false;
    			} else {
 �				roundUp = trunc || (x = new $Uint64(m.$high & 0, (m.$low & 1) >>> 0), (x.$high === 0 && x.$low === 1));
    			}
    			if (!((b.$high === 0 && b.$low === 0))) {
 ��				trunc = true;
    			}
    		}
    		if (roundUp) {
 ��			m = (x$1 = new $Uint64(0, 1), new $Uint64(m.$high + x$1.$high, m.$low + x$1.$low));
    		}
    		if ((m.$high > max$1.$high || (m.$high === max$1.$high && m.$low >= max$1.$low))) {
 �			m = $div64(m, (new $Uint64(0, 10)), false);
 �$			trimmed = trimmed + (1) >> 0;
    		}
 �\		n = ((prec >>> 0));
 �m		d.nd = (prec);
 �		v = m;
 ��		while (true) {
			if (!((v.$high > 0 || (v.$high === 0 && v.$low >= 100)))) { break; }
 ��			_tmp$2 = new $Uint64(0, 0);
			_tmp$3 = new $Uint64(0, 0);
			v1 = _tmp$2;
			v2 = _tmp$3;
    			if ((x$2 = $shiftRightUint64(v, 32), (x$2.$high === 0 && x$2.$low === 0))) {
 ��				_tmp$4 = (new $Uint64(0, (_q = ((v.$low >>> 0)) / 100, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"))));
				_tmp$5 = (new $Uint64(0, (_r = ((v.$low >>> 0)) % 100, _r === _r ? _r : $throwRuntimeError("integer divide by zero"))));
				v1 = _tmp$4;
				v2 = _tmp$5;
    			} else {
 �				_tmp$6 = $div64(v, new $Uint64(0, 100), false);
				_tmp$7 = $div64(v, new $Uint64(0, 100), true);
				v1 = _tmp$6;
				v2 = _tmp$7;
    			}
 �			n = n - (2) >>> 0;
 �(			(x$4 = d.d, x$5 = n + 1 >>> 0, ((x$5 < 0 || x$5 >= x$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$4.$array[x$4.$offset + x$5] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt($flatten64((x$3 = $mul64(new $Uint64(0, 2), v2), new $Uint64(x$3.$high + 0, x$3.$low + 1))))));
 �J			(x$7 = d.d, x$8 = n + 0 >>> 0, ((x$8 < 0 || x$8 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + x$8] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt($flatten64((x$6 = $mul64(new $Uint64(0, 2), v2), new $Uint64(x$6.$high + 0, x$6.$low + 0))))));
 �l			v = v1;
    		}
    		if ((v.$high > 0 || (v.$high === 0 && v.$low > 0))) {
 ��			n = n - (1) >>> 0;
 ��			(x$10 = d.d, ((n < 0 || n >= x$10.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$10.$array[x$10.$offset + n] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt($flatten64((x$9 = $mul64(new $Uint64(0, 2), v), new $Uint64(x$9.$high + 0, x$9.$low + 1))))));
    		}
    		if ((v.$high > 0 || (v.$high === 0 && v.$low >= 10))) {
 ��			n = n - (1) >>> 0;
 ��			(x$11 = d.d, ((n < 0 || n >= x$11.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$11.$array[x$11.$offset + n] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt($flatten64($mul64(new $Uint64(0, 2), v)))));
    		}
 ��		while (true) {
			if (!((x$12 = d.d, x$13 = d.nd - 1 >> 0, ((x$13 < 0 || x$13 >= x$12.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$12.$array[x$12.$offset + x$13])) === 48)) { break; }
 ��			d.nd = d.nd - (1) >> 0;
 �			trimmed = trimmed + (1) >> 0;
    		}
 �		d.dp = d.nd + trimmed >> 0;
    	};
formatDecimalstrconv.formatDecimalstrconv.uint64pow10 strconv.ryuFtoaShorteststrconvryuFtoaShortest ryuFtoaShortest��	ryuFtoaShortest = function(d, mant, exp, flt) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, c0, cup, d, dc, dc0, dc32, dl, dl0, dl32, du, du0, du32, e2, exp, extra, extraMask, flt, fracc, fracl, fracu, lok, mant, mc, ml, mu, q, uok, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8;
    		if ((mant.$high === 0 && mant.$low === 0)) {
 ��			_tmp = 0;
			_tmp$1 = 0;
			d.nd = _tmp;
			d.dp = _tmp$1;
 ��			return;
    		}
    		if (exp <= 0 && bits.TrailingZeros64(mant) >= -exp) {
 ��			mant = $shiftRightUint64(mant, (((-exp >>> 0))));
 ��			ryuDigits(d, mant, mant, mant, true, false);
 ��			return;
    		}
 ��		_tuple = computeBounds(mant, exp, flt);
		ml = _tuple[0];
		mc = _tuple[1];
		mu = _tuple[2];
		e2 = _tuple[3];
    		if (e2 === 0) {
 �8			ryuDigits(d, ml, mc, mu, true, false);
 �`			return;
    		}
 ��		q = mulByLog2Log10(-e2) + 1 >> 0;
 �		_tmp$2 = new $Uint64(0, 0);
		_tmp$3 = new $Uint64(0, 0);
		_tmp$4 = new $Uint64(0, 0);
		dl = _tmp$2;
		dc = _tmp$3;
		du = _tmp$4;
 �6		_tmp$5 = false;
		_tmp$6 = false;
		_tmp$7 = false;
		dl0 = _tmp$5;
		dc0 = _tmp$6;
		du0 = _tmp$7;
    		if (flt === float32info) {
 �i			_tmp$8 = 0;
			_tmp$9 = 0;
			_tmp$10 = 0;
			dl32 = _tmp$8;
			dc32 = _tmp$9;
			du32 = _tmp$10;
 ��			_tuple$1 = mult64bitPow10(((ml.$low >>> 0)), e2, q);
			dl32 = _tuple$1[0];
			dl0 = _tuple$1[2];
 ��			_tuple$2 = mult64bitPow10(((mc.$low >>> 0)), e2, q);
			dc32 = _tuple$2[0];
			dc0 = _tuple$2[2];
 ��			_tuple$3 = mult64bitPow10(((mu.$low >>> 0)), e2, q);
			du32 = _tuple$3[0];
			e2 = _tuple$3[1];
			du0 = _tuple$3[2];
 �			_tmp$11 = (new $Uint64(0, dl32));
			_tmp$12 = (new $Uint64(0, dc32));
			_tmp$13 = (new $Uint64(0, du32));
			dl = _tmp$11;
			dc = _tmp$12;
			du = _tmp$13;
    		} else {
 �_			_tuple$4 = mult128bitPow10(ml, e2, q);
			dl = _tuple$4[0];
			dl0 = _tuple$4[2];
 ��			_tuple$5 = mult128bitPow10(mc, e2, q);
			dc = _tuple$5[0];
			dc0 = _tuple$5[2];
 ��			_tuple$6 = mult128bitPow10(mu, e2, q);
			du = _tuple$6[0];
			e2 = _tuple$6[1];
			du0 = _tuple$6[2];
    		}
    		if (e2 >= 0) {
 ��			$panic(new $String("not enough significant bits after mult128bitPow10"));
    		}
    		if (q > 55) {
 ��			_tmp$14 = false;
			_tmp$15 = false;
			_tmp$16 = false;
			dl0 = _tmp$14;
			dc0 = _tmp$15;
			du0 = _tmp$16;
    		}
    		if (q < 0 && q >= -24) {
    			if (divisibleByPower5(ml, -q)) {
 �j				dl0 = true;
    			}
    			if (divisibleByPower5(mc, -q)) {
 ��				dc0 = true;
    			}
    			if (divisibleByPower5(mu, -q)) {
 ��				du0 = true;
    			}
    		}
 �V		extra = ((-e2 >>> 0));
 �j		extraMask = ((x = $shiftLeft64(new $Uint64(0, 1), extra), new $Uint64(x.$high - 0, x.$low - 1)));
 ��		_tmp$17 = $shiftRightUint64(dl, extra);
		_tmp$18 = new $Uint64(dl.$high & extraMask.$high, (dl.$low & extraMask.$low) >>> 0);
		dl = _tmp$17;
		fracl = _tmp$18;
 ��		_tmp$19 = $shiftRightUint64(dc, extra);
		_tmp$20 = new $Uint64(dc.$high & extraMask.$high, (dc.$low & extraMask.$low) >>> 0);
		dc = _tmp$19;
		fracc = _tmp$20;
 �		_tmp$21 = $shiftRightUint64(du, extra);
		_tmp$22 = new $Uint64(du.$high & extraMask.$high, (du.$low & extraMask.$low) >>> 0);
		du = _tmp$21;
		fracu = _tmp$22;
 � 		uok = !du0 || (fracu.$high > 0 || (fracu.$high === 0 && fracu.$low > 0));
    		if (du0 && (fracu.$high === 0 && fracu.$low === 0)) {
 �3			uok = (x$1 = new $Uint64(mant.$high & 0, (mant.$low & 1) >>> 0), (x$1.$high === 0 && x$1.$low === 0));
    		}
    		if (!uok) {
 �U			du = (x$2 = new $Uint64(0, 1), new $Uint64(du.$high - x$2.$high, du.$low - x$2.$low));
    		}
 ��		cup = false;
    		if (dc0) {
 �U			cup = (x$3 = $shiftLeft64(new $Uint64(0, 1), ((extra - 1 >>> 0))), (fracc.$high > x$3.$high || (fracc.$high === x$3.$high && fracc.$low > x$3.$low))) || ((x$4 = $shiftLeft64(new $Uint64(0, 1), ((extra - 1 >>> 0))), (fracc.$high === x$4.$high && fracc.$low === x$4.$low)) && (x$5 = new $Uint64(dc.$high & 0, (dc.$low & 1) >>> 0), (x$5.$high === 0 && x$5.$low === 1)));
    		} else {
 ��			cup = (x$6 = $shiftRightUint64(fracc, ((extra - 1 >>> 0))), (x$6.$high === 0 && x$6.$low === 1));
    		}
 ��		lok = dl0 && (fracl.$high === 0 && fracl.$low === 0) && ((x$7 = new $Uint64(mant.$high & 0, (mant.$low & 1) >>> 0), (x$7.$high === 0 && x$7.$low === 0)));
    		if (!lok) {
 ��			dl = (x$8 = new $Uint64(0, 1), new $Uint64(dl.$high + x$8.$high, dl.$low + x$8.$low));
    		}
 �		c0 = dc0 && (fracc.$high === 0 && fracc.$low === 0);
 �=		ryuDigits(d, dl, dc, du, c0, cup);
 �`		d.dp = d.dp - (q) >> 0;
    	};
ryuFtoaShortest	math/bits.TrailingZeros64strconv.computeBoundsstrconv.divisibleByPower5strconv.float32infostrconv.mulByLog2Log10strconv.mult128bitPow10strconv.mult64bitPow10strconv.ryuDigitsstrconv.ryuFtoaShortest strconv.mulByLog2Log10strconvmulByLog2Log10 mulByLog2Log10`	mulByLog2Log10 = function(x) {
		var x;
 ��		return (($imul(x, 78913))) >> 18 >> 0;
    	};
mulByLog2Log10strconv.mulByLog2Log10 strconv.mulByLog10Log2strconvmulByLog10Log2 mulByLog10Log2a	mulByLog10Log2 = function(x) {
		var x;
 �Z		return (($imul(x, 108853))) >> 15 >> 0;
    	};
mulByLog10Log2strconv.mulByLog10Log2 strconv.computeBoundsstrconvcomputeBounds computeBounds��	computeBounds = function(mant, exp, flt) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, central, e2, exp, flt, lower$1, mant, upper, x, x$1, x$2, x$3, x$4;
		lower$1 = new $Uint64(0, 0);
		central = new $Uint64(0, 0);
		upper = new $Uint64(0, 0);
		e2 = 0;
    		if (!((x = $shiftLeft64(new $Uint64(0, 1), flt.mantbits), (mant.$high === x.$high && mant.$low === x.$low))) || (exp === ((flt.bias + 1 >> 0) - ((flt.mantbits >> 0)) >> 0))) {
 �			_tmp = (x$1 = $mul64(new $Uint64(0, 2), mant), new $Uint64(x$1.$high - 0, x$1.$low - 1));
			_tmp$1 = $mul64(new $Uint64(0, 2), mant);
			_tmp$2 = (x$2 = $mul64(new $Uint64(0, 2), mant), new $Uint64(x$2.$high + 0, x$2.$low + 1));
			lower$1 = _tmp;
			central = _tmp$1;
			upper = _tmp$2;
 �7			e2 = exp - 1 >> 0;
 �F			return [lower$1, central, upper, e2];
    		} else {
 �t			_tmp$3 = (x$3 = $mul64(new $Uint64(0, 4), mant), new $Uint64(x$3.$high - 0, x$3.$low - 1));
			_tmp$4 = $mul64(new $Uint64(0, 4), mant);
			_tmp$5 = (x$4 = $mul64(new $Uint64(0, 4), mant), new $Uint64(x$4.$high + 0, x$4.$low + 2));
			lower$1 = _tmp$3;
			central = _tmp$4;
			upper = _tmp$5;
 ��			e2 = exp - 2 >> 0;
 ��			return [lower$1, central, upper, e2];
    		}
    	};
computeBoundsstrconv.computeBounds strconv.ryuDigitsstrconv	ryuDigits 	ryuDigits�2	ryuDigits = function(d, lower$1, central, upper, c0, cup) {
		var _q, _r, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, c0, central, chi, clo, cup, d, lhi, llo, lower$1, n, uhi, ulo, upper, v, v1, v2, x, x$1, x$2, x$3;
 �		_tuple = divmod1e9(lower$1);
		lhi = _tuple[0];
		llo = _tuple[1];
 �3		_tuple$1 = divmod1e9(central);
		chi = _tuple$1[0];
		clo = _tuple$1[1];
 �S		_tuple$2 = divmod1e9(upper);
		uhi = _tuple$2[0];
		ulo = _tuple$2[1];
    		if (uhi === 0) {
 ��			ryuDigits32(d, llo, clo, ulo, c0, cup, 8);
    		} else if (lhi < uhi) {
    			if (!((llo === 0))) {
 �				lhi = lhi + (1) >>> 0;
    			}
 �&			c0 = c0 && (clo === 0);
 �<			cup = (clo > 500000000) || ((clo === 500000000) && cup);
 �g			ryuDigits32(d, lhi, chi, uhi, c0, cup, 8);
 ��			d.dp = d.dp + (9) >> 0;
    		} else {
 ��			d.nd = 0;
 ��			n = 9;
 ��			v = chi;
			while (true) {
				if (!(v > 0)) { break; }
 ��				_tmp = (_q = v / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
				_tmp$1 = (_r = v % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
				v1 = _tmp;
				v2 = _tmp$1;
 �					v = v1;
 �				n = n - (1) >>> 0;
 �				(x = d.d, ((n < 0 || n >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + n] = (((v2 + 48 >>> 0) << 24 >>> 24))));
    			}
 �8			d.d = $subslice(d.d, n);
 �H			d.nd = (((9 - n >>> 0) >> 0));
 �o			ryuDigits32(d, llo, clo, ulo, c0, cup, d.nd + 8 >> 0);
    		}
 ��		while (true) {
			if (!(d.nd > 0 && ((x$1 = d.d, x$2 = d.nd - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2])) === 48))) { break; }
 ��			d.nd = d.nd - (1) >> 0;
    		}
 �		while (true) {
			if (!(d.nd > 0 && ((x$3 = d.d, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])) === 48))) { break; }
 �(			d.nd = d.nd - (1) >> 0;
 �1			d.dp = d.dp - (1) >> 0;
 �:			d.d = $subslice(d.d, 1);
    		}
    	};
	ryuDigitsstrconv.divmod1e9strconv.ryuDigitsstrconv.ryuDigits32 strconv.ryuDigits32strconvryuDigits32 ryuDigits32��	ryuDigits32 = function(d, lower$1, central, upper, c0, cup, endindex) {
		var _q, _q$1, _q$2, _q$3, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, c, c0, cNextDigit, cdigit, central, cup, d, endindex, l, lower$1, n, trimmed, u, upper, v, v1, v2, x, x$1, x$2, x$3;
    		if (upper === 0) {
 � 			d.dp = endindex + 1 >> 0;
 �			return;
    		}
 �!		trimmed = 0;
 ��		cNextDigit = 0;
 ��		while (true) {
			if (!(upper > 0)) { break; }
 �n			l = (_q = ((lower$1 + 9 >>> 0)) / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
 ��			_tmp = (_q$1 = central / 10, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
			_tmp$1 = (_r = central % 10, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
			c = _tmp;
			cdigit = _tmp$1;
 ��			u = (_q$2 = upper / 10, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
    			if (l > u) {
 �-				break;
    			}
    			if ((l === (c + 1 >>> 0)) && c < u) {
 ��				c = c + (1) >>> 0;
 ��				cdigit = 0;
 ��				cup = false;
    			}
 ��			trimmed = trimmed + (1) >> 0;
 �			c0 = c0 && (cNextDigit === 0);
 �3			cNextDigit = ((cdigit >> 0));
 �N			_tmp$2 = l;
			_tmp$3 = c;
			_tmp$4 = u;
			lower$1 = _tmp$2;
			central = _tmp$3;
			upper = _tmp$4;
    		}
    		if (trimmed > 0) {
 ��			cup = cNextDigit > 5 || ((cNextDigit === 5) && !c0) || ((cNextDigit === 5) && c0 && (((central & 1) >>> 0) === 1));
    		}
    		if (central < upper && cup) {
 �#			central = central + (1) >>> 0;
    		}
 �b		endindex = endindex - (trimmed) >> 0;
 �w		v = central;
 ��		n = endindex;
 ��		while (true) {
			if (!(n > d.nd)) { break; }
 ��			_tmp$5 = (_q$3 = v / 100, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero"));
			_tmp$6 = (_r$1 = v % 100, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero"));
			v1 = _tmp$5;
			v2 = _tmp$6;
 ��			(x = d.d, ((n < 0 || n >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + n] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((($imul(2, v2) >>> 0) + 1 >>> 0))));
 ��			(x$1 = d.d, x$2 = n - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((($imul(2, v2) >>> 0) + 0 >>> 0))));
 � 			n = n - (2) >> 0;
 �				v = v1;
    		}
    		if (n === d.nd) {
 �%			(x$3 = d.d, ((n < 0 || n >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + n] = (((v + 48 >>> 0) << 24 >>> 24))));
    		}
 �@		d.nd = endindex + 1 >> 0;
 �U		d.dp = d.nd + trimmed >> 0;
    	};
ryuDigits32strconv.ryuDigits32 strconv.mult64bitPow10strconvmult64bitPow10 mult64bitPow10�	mult64bitPow10 = function(m, e2, q) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, e2, exact, hi, lo, m, pow, q, resE, resM, x, x$1, x$2, x$3, x$4;
		resM = 0;
		resE = 0;
		exact = false;
    		if (q === 0) {
    			_tmp = m << 6 >>> 0;
			_tmp$1 = e2 - 6 >> 0;
			_tmp$2 = true;
			resM = _tmp;
			resE = _tmp$1;
			exact = _tmp$2;
			return [resM, resE, exact];
    		}
    		if (q < -348 || 347 < q) {
 �			$panic(new $String("mult64bitPow10: power of 10 is out of range"));
    		}
 �L		pow = (x = q - -348 >> 0, ((x < 0 || x >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x]))[1];
    		if (q < 0) {
 ��			pow = (x$1 = new $Uint64(0, 1), new $Uint64(pow.$high + x$1.$high, pow.$low + x$1.$low));
    		}
 ��		_tuple = bits.Mul64((new $Uint64(0, m)), pow);
		hi = _tuple[0];
		lo = _tuple[1];
 ��		e2 = e2 + (((mulByLog10Log2(q) - 63 >> 0) + 57 >> 0)) >> 0;
    		_tmp$3 = (((x$2 = $shiftLeft64(hi, 7), x$3 = $shiftRightUint64(lo, 57), new $Uint64(x$2.$high | x$3.$high, (x$2.$low | x$3.$low) >>> 0)).$low >>> 0));
		_tmp$4 = e2;
		_tmp$5 = (x$4 = $shiftLeft64(lo, 7), (x$4.$high === 0 && x$4.$low === 0));
		resM = _tmp$3;
		resE = _tmp$4;
		exact = _tmp$5;
		return [resM, resE, exact];
    	};
mult64bitPow10math/bits.Mul64strconv.detailedPowersOfTenstrconv.mulByLog10Log2strconv.mult64bitPow10 strconv.mult128bitPow10strconvmult128bitPow10 mult128bitPow10��	mult128bitPow10 = function(m, e2, q) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, _tuple$2, carry, e2, exact, h0, h1, l0, l1, m, mid, pow, q, resE, resM, x, x$1, x$2, x$3, x$4, x$5, x$6;
		resM = new $Uint64(0, 0);
		resE = 0;
		exact = false;
    		if (q === 0) {
    			_tmp = $shiftLeft64(m, 8);
			_tmp$1 = e2 - 8 >> 0;
			_tmp$2 = true;
			resM = _tmp;
			resE = _tmp$1;
			exact = _tmp$2;
			return [resM, resE, exact];
    		}
    		if (q < -348 || 347 < q) {
 ��			$panic(new $String("mult128bitPow10: power of 10 is out of range"));
    		}
 �1		pow = $clone((x = q - -348 >> 0, ((x < 0 || x >= detailedPowersOfTen.length) ? ($throwRuntimeError("index out of range"), undefined) : detailedPowersOfTen[x])), arrayType);
    		if (q < 0) {
 ��			pow[0] = (x$1 = pow[0], x$2 = new $Uint64(0, 1), new $Uint64(x$1.$high + x$2.$high, x$1.$low + x$2.$low));
    		}
 ��		e2 = e2 + (((mulByLog10Log2(q) - 127 >> 0) + 119 >> 0)) >> 0;
 ��		_tuple = bits.Mul64(m, pow[0]);
		l1 = _tuple[0];
		l0 = _tuple[1];
 �		_tuple$1 = bits.Mul64(m, pow[1]);
		h1 = _tuple$1[0];
		h0 = _tuple$1[1];
 �8		_tuple$2 = bits.Add64(l1, h0, new $Uint64(0, 0));
		mid = _tuple$2[0];
		carry = _tuple$2[1];
 �]		h1 = (x$3 = carry, new $Uint64(h1.$high + x$3.$high, h1.$low + x$3.$low));
    		_tmp$3 = (x$4 = $shiftLeft64(h1, 9), x$5 = $shiftRightUint64(mid, 55), new $Uint64(x$4.$high | x$5.$high, (x$4.$low | x$5.$low) >>> 0));
		_tmp$4 = e2;
		_tmp$5 = (x$6 = $shiftLeft64(mid, 9), (x$6.$high === 0 && x$6.$low === 0)) && (l0.$high === 0 && l0.$low === 0);
		resM = _tmp$3;
		resE = _tmp$4;
		exact = _tmp$5;
		return [resM, resE, exact];
    	};
mult128bitPow10math/bits.Add64math/bits.Mul64strconv.arrayTypestrconv.detailedPowersOfTenstrconv.mulByLog10Log2strconv.mult128bitPow10 strconv.divisibleByPower5strconvdivisibleByPower5 divisibleByPower5��	divisibleByPower5 = function(m, k) {
		var i, k, m, x;
    		if ((m.$high === 0 && m.$low === 0)) {
 ��			return true;
    		}
 ��		i = 0;
		while (true) {
			if (!(i < k)) { break; }
    			if (!((x = $div64(m, new $Uint64(0, 5), true), (x.$high === 0 && x.$low === 0)))) {
 �				return false;
    			}
 �-			m = $div64(m, (new $Uint64(0, 5)), false);
 �			i = i + (1) >> 0;
    		}
 �8		return true;
    	};
divisibleByPower5strconv.divisibleByPower5 strconv.divmod1e9strconv	divmod1e9 	divmod1e9�	divmod1e9 = function(x) {
		var _tuple, hi, q, x, x$1;
    		if (false) {
 � 			return [(($div64(x, new $Uint64(0, 1000000000), false).$low >>> 0)), (($div64(x, new $Uint64(0, 1000000000), true).$low >>> 0))];
    		}
 �k		_tuple = bits.Mul64($shiftRightUint64(x, 1), new $Uint64(2305843009, 917808536));
		hi = _tuple[0];
 ³		q = $shiftRightUint64(hi, 28);
 ��		return [((q.$low >>> 0)), (((x$1 = $mul64(q, new $Uint64(0, 1000000000)), new $Uint64(x.$high - x$1.$high, x.$low - x$1.$low)).$low >>> 0))];
    	};
	divmod1e9math/bits.Mul64strconv.divmod1e9 strconv.FormatUintstrconv
FormatUint 
FormatUint�R	FormatUint = function(i, base) {
		var _tuple, base, i, s;
    		if (true && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
 �7			return small(((i.$low >> 0)));
    		}
 �P		_tuple = formatBits(sliceType$6.nil, i, base, false, false);
		s = _tuple[1];
 �		return s;
    	};
	$pkg.FormatUint = FormatUint;

FormatUintstrconv.FormatUintstrconv.formatBitsstrconv.sliceType$6strconv.small strconv.FormatIntstrconv	FormatInt 	FormatInt��	FormatInt = function(i, base) {
		var _tuple, base, i, s;
    		if (true && (0 < i.$high || (0 === i.$high && 0 <= i.$low)) && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
 �			return small((((i.$low + ((i.$high >> 31) * 4294967296)) >> 0)));
    		}
 �		_tuple = formatBits(sliceType$6.nil, (new $Uint64(i.$high, i.$low)), base, (i.$high < 0 || (i.$high === 0 && i.$low < 0)), false);
		s = _tuple[1];
 ��		return s;
    	};
	$pkg.FormatInt = FormatInt;
	FormatIntstrconv.FormatIntstrconv.formatBitsstrconv.sliceType$6strconv.small strconv.ItoastrconvItoa Itoal	Itoa = function(i) {
		var i;
 �G		return FormatInt((new $Int64(0, i)), 10);
    	};
	$pkg.Itoa = Itoa;
Itoastrconv.FormatIntstrconv.Itoa strconv.AppendIntstrconv	AppendInt 	AppendInt��	AppendInt = function(dst, i, base) {
		var _tuple, base, dst, i;
    		if (true && (0 < i.$high || (0 === i.$high && 0 <= i.$low)) && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
 �W			return $appendSlice(dst, small((((i.$low + ((i.$high >> 31) * 4294967296)) >> 0))));
    		}
 �		_tuple = formatBits(dst, (new $Uint64(i.$high, i.$low)), base, (i.$high < 0 || (i.$high === 0 && i.$low < 0)), true);
		dst = _tuple[0];
 ��		return dst;
    	};
	$pkg.AppendInt = AppendInt;
	AppendIntstrconv.AppendIntstrconv.formatBitsstrconv.small strconv.AppendUintstrconv
AppendUint 
AppendUint�c	AppendUint = function(dst, i, base) {
		var _tuple, base, dst, i;
    		if (true && (i.$high < 0 || (i.$high === 0 && i.$low < 100)) && (base === 10)) {
 ��			return $appendSlice(dst, small(((i.$low >> 0))));
    		}
 ��		_tuple = formatBits(dst, i, base, false, true);
		dst = _tuple[0];
 �		return dst;
    	};
	$pkg.AppendUint = AppendUint;

AppendUintstrconv.AppendUintstrconv.formatBitsstrconv.small strconv.smallstrconvsmall small��	small = function(i) {
		var i;
    		if (i < 10) {
 ��			return $substring("0123456789abcdefghijklmnopqrstuvwxyz", i, (i + 1 >> 0));
    		}
 ��		return $substring("00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899", ($imul(i, 2)), (($imul(i, 2)) + 2 >> 0));
    	};
smallstrconv.small strconv.formatBitsstrconv
formatBits 
formatBits��	formatBits = function(dst, u, base, neg, append_) {
		var _q, _q$1, _r, _r$1, a, append_, b, b$1, base, d, dst, i, is, is$1, is$2, j, m, neg, q, q$1, s, shift, u, us, us$1, x, x$1, x$2, x$3, x$4, x$5;
		d = sliceType$6.nil;
		s = "";
    		if (base < 2 || base > 36) {
 �			$panic(new $String("strconv: illegal AppendInt/FormatInt base"));
    		}
 �l		a = arrayType$4.zero();
 ��		i = 65;
    		if (neg) {
 ��			u = new $Uint64(-u.$high, -u.$low);
    		}
    		if (base === 10) {
    			if (true) {
 �
				while (true) {
					if (!((u.$high > 0 || (u.$high === 0 && u.$low >= 1000000000)))) { break; }
 ��					q = $div64(u, new $Uint64(0, 1000000000), false);
 ��					us = (((x = $mul64(q, new $Uint64(0, 1000000000)), new $Uint64(u.$high - x.$high, u.$low - x.$low)).$low >>> 0));
 �
					j = 4;
					while (true) {
						if (!(j > 0)) { break; }
 �$						is = (_r = us % 100, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) * 2 >>> 0;
 �<						us = (_q = us / (100), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
 �K						i = i - (2) >> 0;
 �W						(x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$1] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is + 1 >>> 0))));
 �x						(x$2 = i + 0 >> 0, ((x$2 < 0 || x$2 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$2] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is + 0 >>> 0))));
 �						j = j - (1) >> 0;
    					}
 ��					i = i - (1) >> 0;
 ��					((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt(((us * 2 >>> 0) + 1 >>> 0)));
 �					u = q;
    				}
    			}
 �b			us$1 = ((u.$low >>> 0));
 �r			while (true) {
				if (!(us$1 >= 100)) { break; }
 ��				is$1 = (_r$1 = us$1 % 100, _r$1 === _r$1 ? _r$1 : $throwRuntimeError("integer divide by zero")) * 2 >>> 0;
 ��				us$1 = (_q$1 = us$1 / (100), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
 ��				i = i - (2) >> 0;
 ��				(x$3 = i + 1 >> 0, ((x$3 < 0 || x$3 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$3] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$1 + 1 >>> 0))));
 ��				(x$4 = i + 0 >> 0, ((x$4 < 0 || x$4 >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[x$4] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$1 + 0 >>> 0))));
    			}
 �			is$2 = us$1 * 2 >>> 0;
 �			i = i - (1) >> 0;
 �			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt((is$2 + 1 >>> 0)));
    			if (us$1 >= 10) {
 �D				i = i - (1) >> 0;
 �K				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899".charCodeAt(is$2));
    			}
    		} else if (isPowerOfTwo(base)) {
 n			shift = (((bits.TrailingZeros(((base >>> 0))) >>> 0)) & 7) >>> 0;
 �			b = (new $Uint64(0, base));
 �			m = ((base >>> 0)) - 1 >>> 0;
 �			while (true) {
				if (!((u.$high > b.$high || (u.$high === b.$high && u.$low >= b.$low)))) { break; }
 �				i = i - (1) >> 0;
 �				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((((u.$low >>> 0)) & m) >>> 0)));
 				u = $shiftRightUint64(u, (shift));
    			}
 2			i = i - (1) >> 0;
 8			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((u.$low >>> 0))));
    		} else {
 m			b$1 = (new $Uint64(0, base));
 �			while (true) {
				if (!((u.$high > b$1.$high || (u.$high === b$1.$high && u.$low >= b$1.$low)))) { break; }
 �				i = i - (1) >> 0;
 7				q$1 = $div64(u, b$1, false);
 E				((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt((((x$5 = $mul64(q$1, b$1), new $Uint64(u.$high - x$5.$high, u.$low - x$5.$low)).$low >>> 0))));
 c				u = q$1;
    			}
 }			i = i - (1) >> 0;
 �			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = "0123456789abcdefghijklmnopqrstuvwxyz".charCodeAt(((u.$low >>> 0))));
    		}
    		if (neg) {
 �			i = i - (1) >> 0;
 �			((i < 0 || i >= a.length) ? ($throwRuntimeError("index out of range"), undefined) : a[i] = 45);
    		}
    		if (append_) {
 �			d = $appendSlice(dst, $subslice(new sliceType$6(a), i));
  			return [d, s];
    		}
 		s = ($bytesToString($subslice(new sliceType$6(a), i)));
 		return [d, s];
    	};

formatBitsmath/bits.TrailingZerosstrconv.arrayType$4strconv.formatBitsstrconv.isPowerOfTwostrconv.sliceType$6 strconv.isPowerOfTwostrconvisPowerOfTwo isPowerOfTwoZ	isPowerOfTwo = function(x) {
		var x;
 I		return (x & ((x - 1 >> 0))) === 0;
    	};
isPowerOfTwostrconv.isPowerOfTwo strconv.containsstrconvcontains containsY	contains = function(s, c) {
		var c, s;
 		return !((index(s, c) === -1));
    	};
containsstrconv.containsstrconv.index strconv.quoteWithstrconv	quoteWith 	quoteWith�c	quoteWith = function(s, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _q, graphicOnly, quote, s;
 z		return ($bytesToString(appendQuotedWith($makeSlice(sliceType$6, 0, (_q = ($imul(3, s.length)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"))), s, quote, ASCIIonly, graphicOnly)));
    	};
	quoteWithstrconv.appendQuotedWithstrconv.quoteWithstrconv.sliceType$6 strconv.quoteRuneWithstrconvquoteRuneWith quoteRuneWith��	quoteRuneWith = function(r, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, graphicOnly, quote, r;
 *		return ($bytesToString(appendQuotedRuneWith(sliceType$6.nil, r, quote, ASCIIonly, graphicOnly)));
    	};
quoteRuneWithstrconv.appendQuotedRuneWithstrconv.quoteRuneWithstrconv.sliceType$6 strconv.appendQuotedWithstrconvappendQuotedWith appendQuotedWith��	appendQuotedWith = function(buf, s, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _tuple, buf, graphicOnly, nBuf, quote, r, s, width;
    		if ((buf.$capacity - buf.$length >> 0) < s.length) {
 p			nBuf = $makeSlice(sliceType$6, buf.$length, (((buf.$length + 1 >> 0) + s.length >> 0) + 1 >> 0));
 �			$copySlice(nBuf, buf);
 �			buf = nBuf;
    		}
 �		buf = $append(buf, quote);
 �		width = 0;
		while (true) {
			if (!(s.length > 0)) { break; }
 				r = ((s.charCodeAt(0) >> 0));
 	!			width = 1;
    			if (r >= 128) {
 	H				_tuple = utf8.DecodeRuneInString(s);
				r = _tuple[0];
				width = _tuple[1];
    			}
    			if ((width === 1) && (r === 65533)) {
 	�				buf = $appendSlice(buf, "\\x");
 	�				buf = $append(buf, "0123456789abcdef".charCodeAt((s.charCodeAt(0) >>> 4 << 24 >>> 24)));
 	�				buf = $append(buf, "0123456789abcdef".charCodeAt(((s.charCodeAt(0) & 15) >>> 0)));
 �				s = $substring(s, width);
				continue;
    			}
 
			buf = appendEscapedRune(buf, r, quote, ASCIIonly, graphicOnly);
 �			s = $substring(s, width);
		}
 
_		buf = $append(buf, quote);
 
y		return buf;
    	};
appendQuotedWithstrconv.appendEscapedRunestrconv.appendQuotedWithstrconv.sliceType$6unicode/utf8.DecodeRuneInString strconv.appendQuotedRuneWithstrconvappendQuotedRuneWith appendQuotedRuneWith�[	appendQuotedRuneWith = function(buf, r, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, buf, graphicOnly, quote, r;
 
�		buf = $append(buf, quote);
    		if (!utf8.ValidRune(r)) {
 			r = 65533;
    		}
 3		buf = appendEscapedRune(buf, r, quote, ASCIIonly, graphicOnly);
 s		buf = $append(buf, quote);
 �		return buf;
    	};
appendQuotedRuneWithstrconv.appendEscapedRunestrconv.appendQuotedRuneWithunicode/utf8.ValidRune strconv.appendEscapedRunestrconvappendEscapedRune appendEscapedRune�	q	appendEscapedRune = function(buf, r, quote, ASCIIonly, graphicOnly) {
		var ASCIIonly, _1, buf, graphicOnly, n, quote, r, runeTmp, s, s$1;
 �		runeTmp = arrayType$5.zero();
    		if ((r === ((quote >> 0))) || (r === 92)) {
 S			buf = $append(buf, 92);
 m			buf = $append(buf, ((r << 24 >>> 24)));
 �			return buf;
    		}
    		if (ASCIIonly) {
    			if (r < 128 && IsPrint(r)) {
 �				buf = $append(buf, ((r << 24 >>> 24)));
 �				return buf;
    			}
    		} else if (IsPrint(r) || graphicOnly && isInGraphicList(r)) {
 >			n = utf8.EncodeRune(new sliceType$6(runeTmp), r);
 d			buf = $appendSlice(buf, $subslice(new sliceType$6(runeTmp), 0, n));
 �			return buf;
    		}
    		_1 = r;
    		if (_1 === (7)) {
 �			buf = $appendSlice(buf, "\\a");
    		} else if (_1 === (8)) {
 �			buf = $appendSlice(buf, "\\b");
    		} else if (_1 === (12)) {
 			buf = $appendSlice(buf, "\\f");
    		} else if (_1 === (10)) {
 +			buf = $appendSlice(buf, "\\n");
    		} else if (_1 === (13)) {
 T			buf = $appendSlice(buf, "\\r");
    		} else if (_1 === (9)) {
 }			buf = $appendSlice(buf, "\\t");
    		} else if (_1 === (11)) {
 �			buf = $appendSlice(buf, "\\v");
    		} else {
    			if (r < 32) {
 �				buf = $appendSlice(buf, "\\x");
 				buf = $append(buf, "0123456789abcdef".charCodeAt((((r << 24 >>> 24)) >>> 4 << 24 >>> 24)));
 2				buf = $append(buf, "0123456789abcdef".charCodeAt(((((r << 24 >>> 24)) & 15) >>> 0)));
    			} else if (r > 1114111) {
 w				r = 65533;
 �				buf = $appendSlice(buf, "\\u");
 �				s = 12;
				while (true) {
					if (!(s >= 0)) { break; }
 �					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s >>> 0)), 31)) >> 0) & 15)));
 �					s = s - (4) >> 0;
    				}
    			} else if (r < 65536) {
 �				buf = $appendSlice(buf, "\\u");
 �				s = 12;
				while (true) {
					if (!(s >= 0)) { break; }
 �					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s >>> 0)), 31)) >> 0) & 15)));
 �					s = s - (4) >> 0;
    				}
    			} else {
 '				buf = $appendSlice(buf, "\\U");
 I				s$1 = 28;
				while (true) {
					if (!(s$1 >= 0)) { break; }
 g					buf = $append(buf, "0123456789abcdef".charCodeAt((((r >> $min(((s$1 >>> 0)), 31)) >> 0) & 15)));
 Z					s$1 = s$1 - (4) >> 0;
    				}
    			}
    		}
 �		return buf;
    	};
appendEscapedRunestrconv.IsPrintstrconv.appendEscapedRunestrconv.arrayType$5strconv.isInGraphicListstrconv.sliceType$6unicode/utf8.EncodeRune strconv.QuotestrconvQuote Quotel	Quote = function(s) {
		var s;
 �		return quoteWith(s, 34, false, false);
    	};
	$pkg.Quote = Quote;
Quotestrconv.Quotestrconv.quoteWith strconv.AppendQuotestrconvAppendQuote AppendQuote��	AppendQuote = function(dst, s) {
		var dst, s;
 �		return appendQuotedWith(dst, s, 34, false, false);
    	};
	$pkg.AppendQuote = AppendQuote;
AppendQuotestrconv.AppendQuotestrconv.appendQuotedWith strconv.QuoteToASCIIstrconvQuoteToASCII QuoteToASCII��	QuoteToASCII = function(s) {
		var s;
 �		return quoteWith(s, 34, true, false);
    	};
	$pkg.QuoteToASCII = QuoteToASCII;
QuoteToASCIIstrconv.QuoteToASCIIstrconv.quoteWith strconv.AppendQuoteToASCIIstrconvAppendQuoteToASCII AppendQuoteToASCII��	AppendQuoteToASCII = function(dst, s) {
		var dst, s;
 �		return appendQuotedWith(dst, s, 34, true, false);
    	};
	$pkg.AppendQuoteToASCII = AppendQuoteToASCII;
AppendQuoteToASCIIstrconv.AppendQuoteToASCIIstrconv.appendQuotedWith strconv.QuoteToGraphicstrconvQuoteToGraphic QuoteToGraphic��	QuoteToGraphic = function(s) {
		var s;
 !		return quoteWith(s, 34, false, true);
    	};
	$pkg.QuoteToGraphic = QuoteToGraphic;
QuoteToGraphicstrconv.QuoteToGraphicstrconv.quoteWith strconv.AppendQuoteToGraphicstrconvAppendQuoteToGraphic AppendQuoteToGraphic��	AppendQuoteToGraphic = function(dst, s) {
		var dst, s;
 !		return appendQuotedWith(dst, s, 34, false, true);
    	};
	$pkg.AppendQuoteToGraphic = AppendQuoteToGraphic;
AppendQuoteToGraphicstrconv.AppendQuoteToGraphicstrconv.appendQuotedWith strconv.QuoteRunestrconv	QuoteRune 	QuoteRune|	QuoteRune = function(r) {
		var r;
 ]		return quoteRuneWith(r, 39, false, false);
    	};
	$pkg.QuoteRune = QuoteRune;
	QuoteRunestrconv.QuoteRunestrconv.quoteRuneWith strconv.AppendQuoteRunestrconvAppendQuoteRune AppendQuoteRune��	AppendQuoteRune = function(dst, r) {
		var dst, r;
 \		return appendQuotedRuneWith(dst, r, 39, false, false);
    	};
	$pkg.AppendQuoteRune = AppendQuoteRune;
AppendQuoteRunestrconv.AppendQuoteRunestrconv.appendQuotedRuneWith strconv.QuoteRuneToASCIIstrconvQuoteRuneToASCII QuoteRuneToASCII��	QuoteRuneToASCII = function(r) {
		var r;
 �		return quoteRuneWith(r, 39, true, false);
    	};
	$pkg.QuoteRuneToASCII = QuoteRuneToASCII;
QuoteRuneToASCIIstrconv.QuoteRuneToASCIIstrconv.quoteRuneWith strconv.AppendQuoteRuneToASCIIstrconvAppendQuoteRuneToASCII AppendQuoteRuneToASCII��	AppendQuoteRuneToASCII = function(dst, r) {
		var dst, r;
 �		return appendQuotedRuneWith(dst, r, 39, true, false);
    	};
	$pkg.AppendQuoteRuneToASCII = AppendQuoteRuneToASCII;
AppendQuoteRuneToASCIIstrconv.AppendQuoteRuneToASCIIstrconv.appendQuotedRuneWith strconv.QuoteRuneToGraphicstrconvQuoteRuneToGraphic QuoteRuneToGraphic��	QuoteRuneToGraphic = function(r) {
		var r;
 		return quoteRuneWith(r, 39, false, true);
    	};
	$pkg.QuoteRuneToGraphic = QuoteRuneToGraphic;
QuoteRuneToGraphicstrconv.QuoteRuneToGraphicstrconv.quoteRuneWith  strconv.AppendQuoteRuneToGraphicstrconvAppendQuoteRuneToGraphic AppendQuoteRuneToGraphic��	AppendQuoteRuneToGraphic = function(dst, r) {
		var dst, r;
 7		return appendQuotedRuneWith(dst, r, 39, false, true);
    	};
	$pkg.AppendQuoteRuneToGraphic = AppendQuoteRuneToGraphic;
AppendQuoteRuneToGraphic strconv.AppendQuoteRuneToGraphicstrconv.appendQuotedRuneWith strconv.CanBackquotestrconvCanBackquote CanBackquote�A	CanBackquote = function(s) {
		var _tuple, r, s, wid;
 3		while (true) {
			if (!(s.length > 0)) { break; }
 F			_tuple = utf8.DecodeRuneInString(s);
			r = _tuple[0];
			wid = _tuple[1];
 m			s = $substring(s, wid);
    			if (wid > 1) {
    				if (r === 65279) {
 �					return false;
    				}
 �				continue;
    			}
    			if (r === 65533) {
  \				return false;
    			}
    			if ((r < 32 && !((r === 9))) || (r === 96) || (r === 127)) {
  �				return false;
    			}
    		}
  �		return true;
    	};
	$pkg.CanBackquote = CanBackquote;
CanBackquotestrconv.CanBackquoteunicode/utf8.DecodeRuneInString strconv.unhexstrconvunhex unhex�[	unhex = function(b) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, c, ok, v;
		v = 0;
		ok = false;
  �		c = ((b >> 0));
    		if (48 <= c && c <= 57) {
    			_tmp = c - 48 >> 0;
			_tmp$1 = true;
			v = _tmp;
			ok = _tmp$1;
			return [v, ok];
    		} else if (97 <= c && c <= 102) {
    			_tmp$2 = (c - 97 >> 0) + 10 >> 0;
			_tmp$3 = true;
			v = _tmp$2;
			ok = _tmp$3;
			return [v, ok];
    		} else if (65 <= c && c <= 70) {
    			_tmp$4 = (c - 65 >> 0) + 10 >> 0;
			_tmp$5 = true;
			v = _tmp$4;
			ok = _tmp$5;
			return [v, ok];
    		}
 !�		return [v, ok];
    	};
unhexstrconv.unhex strconv.UnquoteCharstrconvUnquoteChar UnquoteChar��	UnquoteChar = function(s, quote) {
		var _1, _2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, c, c$1, err, j, j$1, multibyte, n, ok, quote, r, s, size, tail, v, v$1, value, x, x$1;
		value = 0;
		multibyte = false;
		tail = "";
		err = $ifaceNil;
    		if (s.length === 0) {
 %�			err = $pkg.ErrSyntax;
 %�			return [value, multibyte, tail, err];
    		}
 %�		c = s.charCodeAt(0);
    		if ((c === quote) && ((quote === 39) || (quote === 34))) {
 &			err = $pkg.ErrSyntax;
 &			return [value, multibyte, tail, err];
    		} else if (c >= 128) {
 &:			_tuple = utf8.DecodeRuneInString(s);
			r = _tuple[0];
			size = _tuple[1];
    			_tmp = r;
			_tmp$1 = true;
			_tmp$2 = $substring(s, size);
			_tmp$3 = $ifaceNil;
			value = _tmp;
			multibyte = _tmp$1;
			tail = _tmp$2;
			err = _tmp$3;
			return [value, multibyte, tail, err];
    		} else if (!((c === 92))) {
    			_tmp$4 = ((s.charCodeAt(0) >> 0));
			_tmp$5 = false;
			_tmp$6 = $substring(s, 1);
			_tmp$7 = $ifaceNil;
			value = _tmp$4;
			multibyte = _tmp$5;
			tail = _tmp$6;
			err = _tmp$7;
			return [value, multibyte, tail, err];
    		}
    		if (s.length <= 1) {
 &�			err = $pkg.ErrSyntax;
 ' 			return [value, multibyte, tail, err];
    		}
 '		c$1 = s.charCodeAt(1);
 '		s = $substring(s, 2);
 '"		switch (0) { default:
    			_1 = c$1;
    			if (_1 === (97)) {
 ':				value = 7;
    			} else if (_1 === (98)) {
 'T				value = 8;
    			} else if (_1 === (102)) {
 'n				value = 12;
    			} else if (_1 === (110)) {
 '�				value = 10;
    			} else if (_1 === (114)) {
 '�				value = 13;
    			} else if (_1 === (116)) {
 '�				value = 9;
    			} else if (_1 === (118)) {
 '�				value = 11;
    			} else if ((_1 === (120)) || (_1 === (117)) || (_1 === (85))) {
 '�				n = 0;
    				_2 = c$1;
    				if (_2 === (120)) {
 (					n = 2;
    				} else if (_2 === (117)) {
 (2					n = 4;
    				} else if (_2 === (85)) {
 (G					n = 8;
    				}
 (W				v = 0;
    				if (s.length < n) {
 (s					err = $pkg.ErrSyntax;
 (�					return [value, multibyte, tail, err];
    				}
 (�				j = 0;
				while (true) {
					if (!(j < n)) { break; }
 (�					_tuple$1 = unhex(s.charCodeAt(j));
					x = _tuple$1[0];
					ok = _tuple$1[1];
    					if (!ok) {
 (�						err = $pkg.ErrSyntax;
 (�						return [value, multibyte, tail, err];
    					}
 (�					v = (v << 4 >> 0) | x;
 (�					j = j + (1) >> 0;
    				}
 )
				s = $substring(s, n);
    				if (c$1 === 120) {
 )T					value = v;
 )a					break;
    				}
    				if (v > 1114111) {
 )�					err = $pkg.ErrSyntax;
 )�					return [value, multibyte, tail, err];
    				}
 )�				value = v;
 )�				multibyte = true;
    			} else if ((_1 === (48)) || (_1 === (49)) || (_1 === (50)) || (_1 === (51)) || (_1 === (52)) || (_1 === (53)) || (_1 === (54)) || (_1 === (55))) {
 )�				v$1 = ((c$1 >> 0)) - 48 >> 0;
    				if (s.length < 2) {
 *					err = $pkg.ErrSyntax;
 *.					return [value, multibyte, tail, err];
    				}
 *?				j$1 = 0;
				while (true) {
					if (!(j$1 < 2)) { break; }
 *v					x$1 = ((s.charCodeAt(j$1) >> 0)) - 48 >> 0;
    					if (x$1 < 0 || x$1 > 7) {
 *�						err = $pkg.ErrSyntax;
 *�						return [value, multibyte, tail, err];
    					}
 *�					v$1 = ((v$1 << 3 >> 0)) | x$1;
 *N					j$1 = j$1 + (1) >> 0;
    				}
 *�				s = $substring(s, 2);
    				if (v$1 > 255) {
 *�					err = $pkg.ErrSyntax;
 +					return [value, multibyte, tail, err];
    				}
 +				value = v$1;
    			} else if (_1 === (92)) {
 +5				value = 92;
    			} else if ((_1 === (39)) || (_1 === (34))) {
    				if (!((c$1 === quote))) {
 +h					err = $pkg.ErrSyntax;
 +{					return [value, multibyte, tail, err];
    				}
 +�				value = ((c$1 >> 0));
    			} else {
 +�				err = $pkg.ErrSyntax;
 +�				return [value, multibyte, tail, err];
    			}
    		}
 +�		tail = s;
 +�		return [value, multibyte, tail, err];
    	};
	$pkg.UnquoteChar = UnquoteChar;
UnquoteCharstrconv.ErrSyntaxstrconv.UnquoteCharstrconv.unhexunicode/utf8.DecodeRuneInString strconv.QuotedPrefixstrconvQuotedPrefix QuotedPrefix��	QuotedPrefix = function(s) {
		var _tuple, err, out, s;
 ,�		_tuple = unquote(s, false);
		out = _tuple[0];
		err = _tuple[2];
 ,�		return [out, err];
    	};
	$pkg.QuotedPrefix = QuotedPrefix;
QuotedPrefixstrconv.QuotedPrefixstrconv.unquote strconv.UnquotestrconvUnquote Unquote�	Unquote = function(s) {
		var _tuple, err, out, rem, s;
 .		_tuple = unquote(s, true);
		out = _tuple[0];
		rem = _tuple[1];
		err = _tuple[2];
    		if (rem.length > 0) {
 .M			return ["", $pkg.ErrSyntax];
    		}
 .f		return [out, err];
    	};
	$pkg.Unquote = Unquote;
Unquotestrconv.ErrSyntaxstrconv.Unquotestrconv.unquote strconv.unquotestrconvunquote unquote�S	unquote = function(in$1, unescape) {
		var _1, _2, _q, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$21, _tmp$22, _tmp$23, _tmp$24, _tmp$25, _tmp$26, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, arr, buf, buf$1, end, err, err$1, i, in$1, in0, multibyte, n, n$1, out, quote, r, r$1, rem, rem$1, unescape, valid;
		out = "";
		rem = "";
		err = $ifaceNil;
    		if (in$1.length < 2) {
    			_tmp = "";
			_tmp$1 = in$1;
			_tmp$2 = $pkg.ErrSyntax;
			out = _tmp;
			rem = _tmp$1;
			err = _tmp$2;
			return [out, rem, err];
    		}
 01		quote = in$1.charCodeAt(0);
 0A		end = index($substring(in$1, 1), quote);
    		if (end < 0) {
    			_tmp$3 = "";
			_tmp$4 = in$1;
			_tmp$5 = $pkg.ErrSyntax;
			out = _tmp$3;
			rem = _tmp$4;
			err = _tmp$5;
			return [out, rem, err];
    		}
 0�		end = end + (2) >> 0;
    		_1 = quote;
    		if (_1 === (96)) {
    			if (!unescape) {
 1!				out = $substring(in$1, 0, end);
    			} else if (!contains($substring(in$1, 0, end), 13)) {
 1g				out = $substring(in$1, 1, (end - 1 >> 0));
    			} else {
 2				buf = $makeSlice(sliceType$6, 0, (((end - 1 >> 0) - 1 >> 0) - 1 >> 0));
 2Z				i = 1;
				while (true) {
					if (!(i < (end - 1 >> 0))) { break; }
    					if (!((in$1.charCodeAt(i) === 13))) {
 2�						buf = $append(buf, in$1.charCodeAt(i));
    					}
 2{					i = i + (1) >> 0;
    				}
 2�				out = ($bytesToString(buf));
    			}
    			_tmp$6 = out;
			_tmp$7 = $substring(in$1, end);
			_tmp$8 = $ifaceNil;
			out = _tmp$6;
			rem = _tmp$7;
			err = _tmp$8;
			return [out, rem, err];
    		} else if ((_1 === (34)) || (_1 === (39))) {
    			if (!contains($substring(in$1, 0, end), 92) && !contains($substring(in$1, 0, end), 10)) {
 4�				valid = false;
    				_2 = quote;
    				if (_2 === (34)) {
 4�					valid = utf8.ValidString($substring(in$1, 1, (end - 1 >> 0)));
    				} else if (_2 === (39)) {
 57					_tuple = utf8.DecodeRuneInString($substring(in$1, 1, (end - 1 >> 0)));
					r = _tuple[0];
					n = _tuple[1];
 5x					valid = (((1 + n >> 0) + 1 >> 0) === end) && (!((r === 65533)) || !((n === 1)));
    				}
    				if (valid) {
 5�					out = $substring(in$1, 0, end);
    					if (unescape) {
 5�						out = $substring(out, 1, (end - 1 >> 0));
    					}
    					_tmp$9 = out;
					_tmp$10 = $substring(in$1, end);
					_tmp$11 = $ifaceNil;
					out = _tmp$9;
					rem = _tmp$10;
					err = _tmp$11;
					return [out, rem, err];
    				}
    			}
 6�			buf$1 = sliceType$6.nil;
 6�			in0 = in$1;
 6�			in$1 = $substring(in$1, 1);
    			if (unescape) {
 6�				buf$1 = $makeSlice(sliceType$6, 0, (_q = ($imul(3, end)) / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")));
    			}
 7			while (true) {
				if (!(in$1.length > 0 && !((in$1.charCodeAt(0) === quote)))) { break; }
 7�				_tuple$1 = UnquoteChar(in$1, quote);
				r$1 = _tuple$1[0];
				multibyte = _tuple$1[1];
				rem$1 = _tuple$1[2];
				err$1 = _tuple$1[3];
    				if ((in$1.charCodeAt(0) === 10) || !($interfaceIsEqual(err$1, $ifaceNil))) {
    					_tmp$12 = "";
					_tmp$13 = in0;
					_tmp$14 = $pkg.ErrSyntax;
					out = _tmp$12;
					rem = _tmp$13;
					err = _tmp$14;
					return [out, rem, err];
    				}
 8%				in$1 = rem$1;
    				if (unescape) {
    					if (r$1 < 128 || !multibyte) {
 8�						buf$1 = $append(buf$1, ((r$1 << 24 >>> 24)));
    					} else {
 8�						arr = arrayType$5.zero();
 8�						n$1 = utf8.EncodeRune(new sliceType$6(arr), r$1);
 9						buf$1 = $appendSlice(buf$1, $subslice(new sliceType$6(arr), 0, n$1));
    					}
    				}
    				if (quote === 39) {
 9�					break;
    				}
    			}
    			if (!(in$1.length > 0 && (in$1.charCodeAt(0) === quote))) {
    				_tmp$15 = "";
				_tmp$16 = in0;
				_tmp$17 = $pkg.ErrSyntax;
				out = _tmp$15;
				rem = _tmp$16;
				err = _tmp$17;
				return [out, rem, err];
    			}
 :%			in$1 = $substring(in$1, 1);
    			if (unescape) {
    				_tmp$18 = ($bytesToString(buf$1));
				_tmp$19 = in$1;
				_tmp$20 = $ifaceNil;
				out = _tmp$18;
				rem = _tmp$19;
				err = _tmp$20;
				return [out, rem, err];
    			}
    			_tmp$21 = $substring(in0, 0, (in0.length - in$1.length >> 0));
			_tmp$22 = in$1;
			_tmp$23 = $ifaceNil;
			out = _tmp$21;
			rem = _tmp$22;
			err = _tmp$23;
			return [out, rem, err];
    		} else {
    			_tmp$24 = "";
			_tmp$25 = in$1;
			_tmp$26 = $pkg.ErrSyntax;
			out = _tmp$24;
			rem = _tmp$25;
			err = _tmp$26;
			return [out, rem, err];
    		}
    	};
unquote
strconv.ErrSyntaxstrconv.UnquoteCharstrconv.arrayType$5strconv.containsstrconv.indexstrconv.sliceType$6strconv.unquoteunicode/utf8.DecodeRuneInStringunicode/utf8.EncodeRuneunicode/utf8.ValidString strconv.bsearch16strconv	bsearch16 	bsearch16��	bsearch16 = function(a, x) {
		var _tmp, _tmp$1, a, h, i, j, x;
 ;l		_tmp = 0;
		_tmp$1 = a.$length;
		i = _tmp;
		j = _tmp$1;
 ;		while (true) {
			if (!(i < j)) { break; }
 ;�			h = i + (((j - i >> 0)) >> 1 >> 0) >> 0;
    			if (((h < 0 || h >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + h]) < x) {
 ;�				i = h + 1 >> 0;
    			} else {
 ;�				j = h;
    			}
    		}
 ;�		return i;
    	};
	bsearch16strconv.bsearch16 strconv.bsearch32strconv	bsearch32 	bsearch32��	bsearch32 = function(a, x) {
		var _tmp, _tmp$1, a, h, i, j, x;
 <}		_tmp = 0;
		_tmp$1 = a.$length;
		i = _tmp;
		j = _tmp$1;
 <�		while (true) {
			if (!(i < j)) { break; }
 <�			h = i + (((j - i >> 0)) >> 1 >> 0) >> 0;
    			if (((h < 0 || h >= a.$length) ? ($throwRuntimeError("index out of range"), undefined) : a.$array[a.$offset + h]) < x) {
 <�				i = h + 1 >> 0;
    			} else {
 <�				j = h;
    			}
    		}
 <�		return i;
    	};
	bsearch32strconv.bsearch32 strconv.IsPrintstrconvIsPrint IsPrint��	IsPrint = function(r) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, i, i$1, isNotPrint, isNotPrint$1, isPrint, isPrint$1, j, j$1, r, rr, rr$1, x, x$1, x$2, x$3;
    		if (r <= 255) {
    			if (32 <= r && r <= 126) {
 ?�				return true;
    			}
    			if (161 <= r && r <= 255) {
 ?�				return !((r === 173));
    			}
 @,			return false;
    		}
    		if (0 <= r && r < 65536) {
 A�			_tmp = ((r << 16 >>> 16));
			_tmp$1 = isPrint16;
			_tmp$2 = isNotPrint16;
			rr = _tmp;
			isPrint = _tmp$1;
			isNotPrint = _tmp$2;
 A�			i = bsearch16(isPrint, rr);
    			if (i >= isPrint.$length || rr < (x = (i & ~1) >> 0, ((x < 0 || x >= isPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint.$array[isPrint.$offset + x])) || (x$1 = i | 1, ((x$1 < 0 || x$1 >= isPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint.$array[isPrint.$offset + x$1])) < rr) {
 BA				return false;
    			}
 BT			j = bsearch16(isNotPrint, rr);
 Bu			return j >= isNotPrint.$length || !((((j < 0 || j >= isNotPrint.$length) ? ($throwRuntimeError("index out of range"), undefined) : isNotPrint.$array[isNotPrint.$offset + j]) === rr));
    		}
 B�		_tmp$3 = ((r >>> 0));
		_tmp$4 = isPrint32;
		_tmp$5 = isNotPrint32;
		rr$1 = _tmp$3;
		isPrint$1 = _tmp$4;
		isNotPrint$1 = _tmp$5;
 B�		i$1 = bsearch32(isPrint$1, rr$1);
    		if (i$1 >= isPrint$1.$length || rr$1 < (x$2 = (i$1 & ~1) >> 0, ((x$2 < 0 || x$2 >= isPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint$1.$array[isPrint$1.$offset + x$2])) || (x$3 = i$1 | 1, ((x$3 < 0 || x$3 >= isPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isPrint$1.$array[isPrint$1.$offset + x$3])) < rr$1) {
 CM			return false;
    		}
    		if (r >= 131072) {
 Cr			return true;
    		}
 C�		r = r - (65536) >> 0;
 C�		j$1 = bsearch16(isNotPrint$1, ((r << 16 >>> 16)));
 C�		return j$1 >= isNotPrint$1.$length || !((((j$1 < 0 || j$1 >= isNotPrint$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : isNotPrint$1.$array[isNotPrint$1.$offset + j$1]) === ((r << 16 >>> 16))));
    	};
	$pkg.IsPrint = IsPrint;
IsPrintstrconv.IsPrintstrconv.bsearch16strconv.bsearch32strconv.isNotPrint16strconv.isNotPrint32strconv.isPrint16strconv.isPrint32 strconv.IsGraphicstrconv	IsGraphic 	IsGraphic��	IsGraphic = function(r) {
		var r;
    		if (IsPrint(r)) {
 D�			return true;
    		}
 D�		return isInGraphicList(r);
    	};
	$pkg.IsGraphic = IsGraphic;
	IsGraphicstrconv.IsGraphicstrconv.IsPrintstrconv.isInGraphicList strconv.isInGraphicListstrconvisInGraphicList isInGraphicList�m	isInGraphicList = function(r) {
		var i, r, rr;
    		if (r > 65535) {
 FN			return false;
    		}
 F_		rr = ((r << 16 >>> 16));
 Fp		i = bsearch16(isGraphic, rr);
 F�		return i < isGraphic.$length && (rr === ((i < 0 || i >= isGraphic.$length) ? ($throwRuntimeError("index out of range"), undefined) : isGraphic.$array[isGraphic.$offset + i]));
    	};
isInGraphicListstrconv.bsearch16strconv.isGraphicstrconv.isInGraphicList �q�{"Base":149186,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/atob.go","Base":1,"Size":974,"Lines":[0,55,109,159,160,176,177,243,314,351,394,408,453,472,520,540,543,588,590,591,660,693,701,717,720,736,738,739,809,852,897,905,937,940,972],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/atoc.go","Base":976,"Size":3095,"Lines":[0,55,109,159,160,176,177,215,216,272,322,381,416,442,454,479,496,500,503,520,522,523,581,666,739,795,798,881,964,1055,1133,1197,1285,1288,1357,1385,1388,1472,1475,1554,1632,1719,1782,1794,1814,1858,1861,1862,1873,1874,1906,1961,1983,1986,1987,2037,2038,2103,2144,2161,2197,2215,2232,2236,2239,2250,2251,2292,2310,2343,2346,2347,2390,2405,2416,2479,2546,2579,2592,2596,2607,2615,2626,2693,2712,2746,2750,2764,2774,2820,2823,2824,2849,2890,2907,2943,2961,2978,2982,2985,2996,3011,3057,3060,3093],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/atof.go","Base":4072,"Size":16140,"Lines":[0,55,109,159,160,176,177,225,239,286,359,418,419,433,434,513,514,576,641,688,743,761,778,791,794,820,832,860,878,882,904,916,920,923,933,935,936,997,1062,1121,1185,1219,1272,1290,1311,1314,1325,1337,1352,1368,1387,1400,1404,1416,1428,1442,1458,1506,1555,1603,1625,1634,1638,1662,1704,1708,1724,1772,1802,1806,1809,1829,1831,1832,1876,1884,1899,1916,1917,1935,1953,1962,1965,1975,1994,2000,2019,2034,2040,2043,2044,2055,2072,2092,2117,2128,2148,2192,2204,2224,2239,2250,2255,2272,2287,2299,2300,2335,2355,2412,2423,2436,2441,2465,2486,2497,2524,2543,2548,2560,2564,2572,2575,2592,2601,2604,2618,2632,2635,2636,2679,2726,2772,2824,2850,2889,2895,2914,2924,2928,2941,2960,2967,2993,3000,3014,3018,3065,3075,3079,3088,3161,3181,3226,3239,3244,3262,3293,3298,3302,3322,3325,3326,3344,3353,3356,3357,3368,3376,3378,3379,3458,3537,3615,3633,3725,3747,3748,3766,3784,3793,3796,3806,3825,3831,3850,3863,3869,3872,3873,3884,3904,3949,3971,4029,4041,4086,4095,4111,4124,4127,4144,4164,4173,4186,4195,4201,4226,4253,4270,4292,4304,4305,4322,4337,4352,4357,4374,4385,4397,4398,4427,4447,4499,4508,4521,4526,4534,4565,4586,4618,4631,4655,4672,4677,4689,4690,4747,4767,4775,4806,4825,4869,4882,4894,4911,4916,4928,4932,4940,4943,4960,4969,4972,4986,4996,4999,5000,5017,5027,5041,5044,5045,5088,5135,5181,5233,5259,5302,5308,5327,5337,5341,5354,5373,5380,5406,5413,5427,5431,5478,5488,5492,5501,5574,5594,5617,5630,5635,5653,5684,5689,5693,5711,5735,5760,5769,5772,5773,5793,5813,5816,5817,5859,5868,5871,5872,5883,5891,5893,5894,5942,5993,5994,6066,6079,6096,6097,6132,6148,6159,6176,6187,6190,6191,6223,6263,6338,6355,6371,6374,6392,6402,6413,6430,6441,6444,6445,6498,6507,6523,6535,6562,6572,6583,6603,6607,6621,6632,6635,6680,6692,6720,6730,6741,6762,6766,6779,6790,6793,6794,6854,6861,6862,6912,6959,6985,7008,7034,7048,7059,7062,7063,7102,7118,7121,7122,7155,7187,7214,7215,7264,7294,7307,7315,7355,7372,7376,7379,7380,7398,7432,7449,7452,7462,7463,7473,7483,7493,7530,7547,7548,7553,7572,7618,7685,7697,7740,7743,7766,7768,7769,7792,7822,7873,7934,7953,7955,8040,8041,8117,8204,8227,8253,8300,8347,8419,8495,8537,8546,8549,8572,8582,8591,8594,8604,8620,8637,8654,8687,8725,8770,8823,8872,8888,8917,8929,8933,8962,9003,9013,9017,9054,9097,9135,9138,9146,9148,9149,9218,9291,9367,9409,9418,9421,9444,9454,9463,9466,9476,9492,9509,9541,9579,9623,9676,9725,9741,9770,9782,9786,9813,9854,9864,9868,9905,9948,9986,9989,9997,9999,10000,10052,10147,10179,10281,10362,10463,10504,10528,10604,10605,10679,10767,10835,10887,10955,11018,11074,11091,11099,11102,11114,11130,11133,11174,11212,11220,11223,11224,11257,11310,11349,11387,11425,11433,11436,11437,11470,11493,11509,11579,11589,11606,11619,11658,11676,11685,11689,11692,11693,11748,11765,11768,11783,11830,11861,11880,11916,11919,11920,11962,12029,12039,12082,12085,12111,12169,12172,12212,12214,12215,12249,12250,12304,12339,12369,12372,12373,12428,12438,12482,12485,12486,12496,12564,12592,12595,12596,12611,12682,12715,12729,12782,12803,12808,12812,12857,12867,12882,12903,12908,12957,13005,13048,13098,13121,13142,13147,13151,13154,13155,13174,13189,13209,13253,13256,13293,13330,13340,13376,13379,13397,13399,13400,13454,13489,13510,13513,13514,13569,13579,13623,13626,13627,13637,13705,13724,13727,13728,13743,13814,13847,13861,13914,13935,13940,13944,13989,13999,14014,14035,14040,14089,14137,14180,14230,14253,14274,14279,14283,14286,14287,14306,14321,14341,14385,14388,14425,14454,14464,14500,14503,14521,14523,14524,14587,14666,14736,14790,14793,14869,14932,14996,15032,15096,15158,15188,15191,15258,15286,15289,15371,15374,15436,15502,15555,15558,15657,15742,15800,15843,15913,15954,15957,15972,15974,15975,16044,16064,16089,16117,16120,16138],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/atoi.go","Base":20213,"Size":7795,"Lines":[0,55,109,159,160,176,177,193,194,244,319,393,458,484,508,510,511,583,631,632,720,765,766,809,832,928,954,1036,1038,1039,1075,1161,1163,1164,1215,1216,1261,1299,1301,1302,1346,1383,1385,1386,1439,1508,1510,1511,1570,1646,1648,1649,1688,1689,1745,1769,1770,1798,1799,1855,1858,1893,1959,1992,1993,2007,2047,2050,2051,2071,2072,2081,2091,2122,2153,2154,2171,2204,2216,2235,2247,2290,2303,2317,2360,2373,2387,2430,2444,2458,2470,2483,2497,2502,2506,2507,2517,2562,2565,2566,2585,2605,2646,2697,2700,2701,2770,2819,2838,2853,2863,2891,2901,2929,2939,2977,2980,2981,3021,3022,3044,3058,3089,3102,3113,3139,3161,3173,3202,3217,3260,3287,3298,3340,3344,3345,3368,3410,3414,3415,3434,3457,3503,3507,3527,3528,3550,3579,3599,3645,3649,3658,3661,3662,3701,3742,3745,3746,3761,3763,3764,3833,3894,3897,3954,3957,4028,4102,4168,4239,4260,4263,4314,4379,4432,4492,4495,4560,4622,4682,4744,4808,4866,4899,4969,5000,5001,5015,5054,5057,5058,5085,5094,5108,5126,5138,5163,5176,5188,5191,5192,5230,5245,5284,5336,5372,5399,5415,5418,5419,5438,5458,5461,5462,5502,5529,5584,5587,5612,5664,5667,5683,5693,5702,5705,5720,5722,5723,5791,5826,5849,5850,5866,5914,5959,6012,6022,6056,6069,6088,6135,6140,6144,6145,6154,6187,6200,6215,6262,6267,6289,6293,6313,6323,6327,6343,6346,6347,6404,6436,6474,6495,6498,6520,6522,6523,6589,6671,6755,6790,6840,6871,6905,6930,6959,6971,6979,6980,6999,7049,7061,7064,7065,7091,7105,7206,7214,7295,7322,7325,7326,7345,7370,7399,7484,7497,7509,7513,7548,7567,7586,7603,7608,7621,7633,7637,7685,7703,7719,7723,7759,7771,7774,7793],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/bytealg.go","Base":28009,"Size":419,"Lines":[0,55,109,159,160,191,221,222,238,239,265,266,344,379,417],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/ctoa.go","Base":28429,"Size":1029,"Lines":[0,55,109,159,160,176,177,243,306,367,370,448,527,608,679,717,744,747,799,800,857,905,940,956,959,960,1027],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/decimal.go","Base":29459,"Size":11299,"Lines":[0,55,109,159,160,195,255,316,384,442,481,482,498,499,521,575,617,651,685,744,746,747,783,799,814,826,829,844,857,860,861,885,893,903,920,933,934,951,1006,1021,1027,1042,1048,1083,1117,1118,1137,1176,1210,1225,1231,1268,1269,1279,1334,1368,1407,1410,1435,1437,1438,1471,1493,1508,1511,1528,1530,1531,1567,1622,1663,1687,1725,1734,1737,1753,1764,1767,1769,1770,1788,1825,1843,1844,1879,1887,1900,1915,1930,1955,1961,1970,1973,1974,2027,2037,2061,2082,2091,2094,2107,2116,2118,2119,2181,2254,2294,2324,2325,2398,2436,2460,2485,2486,2542,2554,2578,2595,2610,2664,2677,2688,2693,2712,2727,2735,2740,2749,2753,2773,2794,2797,2812,2813,2843,2844,2883,2906,2926,2942,2954,2981,2987,3008,3011,3012,3039,3052,3068,3080,3100,3128,3135,3157,3175,3179,3192,3195,3196,3206,3215,3217,3218,3285,3348,3351,3412,3481,3551,3599,3602,3640,3641,3665,3704,3755,3757,3758,3788,3823,3878,3914,3980,3984,4016,4055,4059,4084,4126,4157,4162,4166,4176,4236,4296,4356,4417,4478,4539,4601,4663,4725,4788,4851,4914,4977,5041,5105,5169,5234,5299,5364,5430,5496,5562,5628,5695,5762,5829,5897,5965,6033,6102,6171,6240,6309,6379,6449,6519,6590,6661,6732,6804,6876,6948,7020,7093,7166,7239,7313,7387,7461,7536,7611,7686,7761,7837,7913,7989,8066,8143,8220,8298,8300,8301,8362,8411,8442,8461,8476,8480,8500,8522,8526,8529,8543,8545,8546,8618,8655,8685,8743,8753,8756,8757,8790,8824,8825,8864,8876,8900,8933,8949,8969,8975,8995,9023,9046,9064,9068,9078,9081,9082,9109,9122,9138,9158,9164,9184,9212,9235,9253,9257,9267,9270,9271,9286,9309,9327,9330,9345,9354,9356,9357,9404,9437,9447,9464,9491,9504,9525,9551,9568,9572,9596,9609,9631,9658,9675,9679,9705,9708,9710,9711,9761,9807,9834,9849,9852,9924,10001,10016,10031,10035,10077,10080,10114,10137,10139,10140,10176,10218,10259,10275,10309,10336,10345,10348,10375,10391,10401,10419,10422,10424,10425,10466,10504,10531,10540,10543,10554,10563,10565,10566,10605,10641,10668,10677,10680,10681,10694,10726,10740,10784,10796,10812,10822,10826,10829,10830,10852,10904,10918,10928,10936,10938,10939,10987,11020,11064,11080,11108,11111,11122,11138,11178,11210,11213,11236,11246,11249,11278,11284,11287,11297],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/doc.go","Base":40759,"Size":1916,"Lines":[0,55,109,159,160,237,261,264,287,290,380,383,416,442,445,490,493,570,573,612,658,703,748,751,827,900,954,957,995,1038,1045,1064,1067,1148,1151,1184,1233,1268,1303,1306,1376,1430,1433,1455,1458,1530,1603,1637,1640,1679,1725,1728,1795,1830,1833,1897,1900],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/eisel_lemire.go","Base":42676,"Size":42383,"Lines":[0,55,109,159,160,176,177,253,290,348,351,392,520,523,595,727,730,802,932,933,942,950,963,965,966,1041,1111,1181,1182,1199,1214,1225,1291,1295,1312,1315,1396,1414,1417,1418,1437,1470,1489,1523,1597,1598,1618,1706,1707,1732,1774,1863,1900,1922,1936,1940,2007,2026,2030,2062,2065,2066,2091,2109,2142,2162,2163,2187,2242,2260,2263,2264,2288,2320,2339,2365,2385,2400,2403,2476,2553,2557,2622,2672,2699,2717,2720,2777,2787,2819,2822,2866,2868,2869,2944,3014,3084,3088,3161,3235,3307,3381,3453,3454,3471,3486,3497,3555,3559,3576,3579,3660,3678,3681,3682,3701,3734,3753,3786,3860,3861,3881,3969,3970,3995,4051,4140,4177,4199,4213,4217,4298,4317,4321,4353,4356,4357,4426,4444,4478,4498,4499,4523,4585,4603,4606,4607,4674,4706,4725,4751,4771,4786,4789,4862,4938,4942,5007,5056,5082,5100,5103,5152,5162,5186,5189,5241,5243,5244,5319,5393,5401,5437,5473,5475,5476,5555,5592,5595,5662,5727,5730,5808,5870,5873,5903,6017,6059,6112,6165,6218,6271,6324,6377,6430,6483,6536,6589,6642,6695,6748,6801,6854,6907,6960,7013,7066,7119,7172,7225,7278,7331,7384,7437,7490,7543,7596,7649,7702,7755,7808,7861,7914,7967,8020,8073,8126,8179,8232,8285,8338,8391,8444,8497,8550,8603,8656,8709,8762,8815,8868,8921,8974,9027,9080,9133,9186,9239,9292,9345,9398,9451,9504,9557,9610,9663,9716,9769,9822,9875,9928,9981,10034,10087,10140,10193,10246,10299,10352,10405,10458,10511,10564,10617,10670,10723,10776,10829,10882,10935,10988,11041,11094,11147,11200,11253,11306,11359,11412,11465,11518,11571,11624,11677,11730,11783,11836,11889,11942,11995,12048,12101,12154,12207,12260,12313,12366,12419,12472,12525,12578,12631,12684,12737,12790,12843,12896,12949,13002,13055,13108,13161,13214,13267,13320,13373,13426,13479,13532,13585,13638,13691,13744,13797,13850,13903,13956,14009,14062,14115,14168,14221,14274,14327,14380,14433,14486,14539,14592,14645,14698,14751,14804,14857,14910,14963,15016,15069,15122,15175,15228,15281,15334,15387,15440,15493,15546,15599,15652,15705,15758,15811,15864,15917,15970,16023,16076,16129,16182,16235,16288,16341,16394,16447,16500,16553,16606,16659,16712,16765,16818,16871,16924,16977,17030,17083,17136,17189,17242,17295,17348,17401,17454,17507,17560,17613,17666,17719,17772,17825,17878,17931,17984,18037,18090,18143,18196,18249,18302,18355,18408,18461,18514,18567,18620,18673,18726,18779,18832,18885,18938,18991,19044,19097,19150,19203,19256,19308,19360,19412,19464,19516,19568,19620,19672,19724,19776,19828,19880,19932,19984,20036,20088,20140,20192,20244,20296,20348,20400,20452,20504,20556,20608,20660,20712,20764,20816,20868,20920,20972,21024,21076,21128,21180,21232,21284,21336,21388,21440,21492,21544,21596,21648,21700,21752,21804,21856,21908,21960,22012,22064,22116,22168,22220,22272,22324,22376,22428,22480,22532,22584,22636,22688,22740,22792,22844,22896,22948,23000,23052,23104,23156,23208,23260,23312,23364,23416,23468,23520,23572,23624,23676,23728,23780,23832,23884,23936,23987,24038,24089,24140,24191,24242,24293,24344,24395,24445,24495,24545,24595,24645,24695,24745,24795,24845,24895,24946,24997,25048,25099,25150,25201,25252,25303,25354,25405,25456,25507,25558,25609,25660,25711,25762,25813,25864,25915,25966,26017,26068,26119,26170,26221,26272,26323,26374,26425,26476,26527,26578,26629,26680,26731,26782,26833,26884,26935,26986,27037,27088,27139,27190,27241,27292,27343,27394,27445,27496,27547,27598,27649,27700,27751,27802,27853,27904,27955,28006,28057,28108,28159,28210,28261,28312,28363,28414,28465,28516,28567,28618,28669,28720,28771,28822,28873,28924,28975,29026,29077,29128,29179,29230,29281,29332,29383,29434,29485,29537,29589,29641,29693,29745,29797,29849,29901,29953,30005,30057,30109,30161,30213,30265,30317,30369,30421,30473,30525,30577,30629,30681,30733,30785,30837,30889,30941,30993,31045,31097,31149,31201,31253,31305,31357,31409,31461,31513,31565,31617,31669,31721,31773,31825,31877,31929,31981,32033,32085,32137,32189,32241,32293,32345,32397,32449,32501,32553,32605,32657,32709,32761,32813,32865,32917,32969,33021,33073,33125,33177,33229,33281,33333,33385,33437,33489,33541,33593,33645,33697,33749,33801,33853,33905,33957,34009,34061,34113,34165,34217,34269,34321,34373,34425,34477,34529,34581,34633,34685,34737,34789,34841,34893,34945,34997,35049,35101,35153,35205,35257,35309,35361,35413,35465,35517,35569,35621,35673,35725,35777,35829,35881,35933,35985,36037,36089,36141,36193,36245,36297,36349,36401,36453,36505,36557,36609,36661,36713,36765,36817,36869,36921,36973,37025,37077,37129,37181,37233,37285,37337,37389,37441,37493,37545,37597,37649,37701,37753,37805,37857,37909,37961,38013,38065,38117,38169,38221,38273,38325,38377,38429,38481,38533,38585,38637,38689,38741,38793,38845,38897,38949,39001,39053,39105,39157,39209,39261,39313,39365,39417,39469,39521,39573,39625,39677,39729,39781,39833,39885,39937,39989,40041,40093,40145,40197,40249,40301,40353,40405,40457,40509,40561,40613,40665,40717,40769,40821,40873,40925,40977,41029,41081,41133,41185,41237,41289,41341,41393,41445,41497,41549,41601,41653,41705,41757,41809,41861,41913,41965,42017,42069,42121,42173,42225,42277,42329,42381],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/ftoa.go","Base":85060,"Size":14309,"Lines":[0,55,109,159,160,208,222,271,305,338,339,355,356,370,371,396,420,435,450,464,466,467,508,551,552,617,682,754,813,816,844,885,928,971,1004,1053,1102,1175,1245,1248,1325,1390,1478,1554,1577,1640,1697,1763,1848,1850,1851,1922,1994,2072,2120,2122,2123,2203,2220,2240,2258,2268,2316,2337,2347,2378,2399,2409,2469,2472,2473,2519,2574,2620,2621,2635,2661,2675,2690,2701,2719,2732,2744,2758,2769,2783,2787,2814,2815,2824,2842,2850,2851,2861,2887,2923,2926,2943,2944,2983,3000,3040,3043,3074,3125,3128,3129,3145,3199,3202,3203,3226,3239,3306,3328,3343,3367,3386,3404,3463,3475,3524,3539,3556,3584,3596,3630,3647,3665,3669,3693,3722,3739,3754,3771,3783,3800,3818,3831,3836,3853,3857,3876,3912,3931,4001,4014,4041,4060,4122,4135,4139,4142,4152,4206,4209,4267,4269,4270,4333,4435,4454,4470,4504,4527,4549,4564,4599,4652,4701,4716,4733,4755,4767,4801,4818,4836,4840,4850,4876,4891,4908,4929,4941,4965,4982,5000,5013,5018,5035,5039,5092,5095,5153,5155,5156,5259,5273,5289,5330,5341,5377,5393,5453,5469,5514,5533,5537,5589,5653,5733,5749,5762,5766,5787,5819,5842,5861,5866,5918,5922,5944,5962,5966,6018,6021,6022,6041,6071,6073,6074,6150,6229,6300,6355,6371,6382,6391,6394,6395,6452,6501,6555,6556,6616,6620,6679,6739,6797,6827,6831,6903,6956,7025,7078,7147,7184,7193,7196,7197,7230,7296,7364,7387,7413,7455,7456,7489,7554,7630,7695,7745,7817,7836,7851,7897,7917,7931,7941,7963,7981,7984,8007,8035,8079,8080,8140,8202,8266,8292,8293,8366,8425,8429,8500,8504,8578,8646,8717,8721,8783,8840,8862,8863,8928,8998,9021,9087,9154,9203,9232,9250,9259,9263,9296,9328,9360,9379,9383,9416,9431,9446,9450,9482,9503,9522,9526,9527,9593,9661,9725,9777,9778,9789,9824,9839,9858,9877,9895,9929,9944,9963,9982,10000,10050,10065,10084,10103,10121,10125,10195,10264,10341,10342,10405,10446,10457,10480,10499,10509,10524,10547,10557,10570,10591,10601,10605,10608,10610,10611,10638,10653,10665,10678,10680,10681,10702,10779,10788,10798,10823,10826,10827,10843,10860,10876,10890,10893,10916,10917,10933,10948,10973,10982,11007,11020,11054,11063,11067,11092,11118,11122,11125,11126,11134,11158,11175,11225,11235,11238,11252,11263,11276,11286,11297,11300,11323,11324,11338,11348,11364,11404,11421,11477,11487,11565,11568,11569,11581,11583,11584,11606,11673,11682,11692,11717,11720,11721,11763,11778,11801,11833,11857,11883,11887,11897,11922,11925,11926,11939,11954,11979,12009,12028,12070,12086,12091,12116,12120,12123,12124,12136,12138,12139,12162,12241,12250,12260,12285,12288,12289,12302,12351,12352,12358,12382,12383,12398,12424,12439,12464,12467,12525,12526,12538,12540,12541,12617,12716,12732,12742,12745,12746,12802,12830,12868,12881,12889,12892,12893,12917,12946,12972,13013,13035,13065,13075,13079,13101,13126,13148,13162,13171,13175,13178,13179,13196,13213,13230,13233,13234,13262,13272,13297,13300,13353,13354,13368,13405,13433,13458,13476,13517,13531,13535,13557,13582,13612,13653,13667,13671,13674,13675,13683,13700,13724,13735,13738,13761,13775,13786,13799,13809,13820,13823,13846,13847,13869,13879,13896,13952,13970,14050,14060,14163,14166,14167,14179,14181,14182,14207,14219,14230,14233,14243,14245,14246,14271,14283,14294,14297,14307],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/ftoaryu.go","Base":99370,"Size":16062,"Lines":[0,55,109,159,160,176,177,186,199,201,202,260,263,351,354,421,486,527,528,593,664,679,731,734,749,796,799,815,831,851,860,863,901,912,948,972,992,995,1059,1097,1139,1189,1225,1270,1310,1311,1347,1379,1446,1474,1475,1521,1538,1598,1601,1670,1737,1781,1850,1913,1928,1940,1943,1995,2018,2053,2054,2092,2110,2122,2168,2208,2244,2281,2327,2337,2384,2409,2443,2446,2463,2476,2479,2525,2575,2595,2606,2608,2609,2674,2745,2761,2809,2812,2828,2844,2864,2873,2876,2914,2925,2961,2989,3009,3012,3076,3114,3156,3206,3242,3287,3291,3360,3427,3467,3468,3504,3536,3604,3632,3633,3680,3697,3758,3761,3830,3897,3941,4010,4065,4080,4092,4095,4147,4170,4205,4206,4244,4262,4274,4320,4360,4396,4433,4479,4489,4536,4561,4595,4598,4615,4628,4631,4677,4719,4739,4750,4752,4753,4784,4833,4894,4896,4897,4955,5011,5076,5160,5186,5200,5216,5237,5245,5257,5270,5288,5308,5327,5348,5393,5458,5489,5493,5507,5523,5527,5530,5544,5550,5553,5568,5614,5624,5636,5639,5681,5698,5716,5724,5740,5760,5778,5835,5846,5871,5875,5884,5918,5952,5961,5964,5976,5982,6013,6016,6030,6036,6065,6068,6094,6103,6115,6118,6141,6143,6144,6208,6286,6302,6322,6331,6334,6402,6472,6525,6547,6593,6602,6605,6654,6668,6708,6717,6720,6754,6784,6785,6848,6896,6919,6943,6969,6999,7050,7101,7153,7209,7219,7261,7303,7346,7349,7363,7424,7427,7459,7472,7520,7558,7561,7585,7631,7708,7741,7755,7759,7792,7806,7810,7843,7857,7861,7864,7919,7979,7999,8034,8091,8129,8167,8205,8248,8304,8364,8405,8431,8455,8475,8478,8489,8496,8499,8551,8590,8623,8633,8688,8745,8777,8817,8827,8889,8902,8932,8935,8974,9044,9058,9101,9112,9119,9122,9191,9216,9234,9269,9280,9282,9283,9360,9399,9402,9480,9556,9589,9643,9669,9671,9672,9749,9786,9789,9867,9943,9976,10031,10058,10060,10061,10126,10206,10254,10352,10421,10454,10507,10522,10531,10541,10568,10621,10636,10645,10648,10650,10651,10713,10730,10760,10792,10822,10837,10874,10918,10941,10973,10989,10998,11002,11024,11067,11111,11123,11133,11144,11164,11179,11204,11228,11238,11245,11272,11276,11292,11312,11331,11363,11383,11386,11410,11448,11457,11460,11483,11516,11525,11534,11550,11553,11555,11556,11620,11684,11715,11732,11754,11763,11766,11780,11835,11897,11914,11931,11956,11984,12015,12044,12098,12122,12160,12178,12191,12256,12288,12297,12301,12353,12419,12443,12466,12489,12512,12570,12622,12667,12692,12699,12713,12728,12732,12744,12778,12807,12834,12868,12871,12895,12913,12939,12970,13015,13018,13047,13059,13062,13111,13132,13146,13161,13177,13202,13234,13268,13277,13286,13289,13305,13330,13333,13354,13377,13379,13380,13441,13505,13584,13622,13685,13688,13700,13749,13772,13851,13864,13880,13910,13913,13986,14055,14110,14113,14175,14187,14234,14245,14248,14286,14321,14368,14370,14371,14433,14497,14578,14616,14679,14682,14694,14743,14766,14846,14859,14876,14906,14909,14982,15051,15107,15110,15169,15181,15228,15242,15245,15282,15283,15307,15340,15373,15410,15423,15475,15477,15478,15525,15538,15552,15555,15581,15597,15613,15617,15626,15629,15642,15644,15645,15710,15767,15811,15828,15870,15873,15936,16008,16023,16060],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/isprint.go","Base":115433,"Size":11326,"Lines":[0,55,109,159,160,236,237,253,254,295,296,322,339,356,373,390,407,424,441,458,475,492,509,526,543,560,577,594,611,628,645,662,679,696,713,730,747,764,781,798,815,832,849,866,883,900,917,934,951,968,985,1002,1019,1036,1053,1070,1087,1104,1121,1138,1155,1172,1189,1206,1223,1240,1257,1274,1291,1308,1325,1342,1359,1376,1393,1410,1427,1444,1461,1478,1495,1512,1529,1546,1563,1580,1597,1614,1631,1648,1665,1682,1699,1716,1733,1750,1767,1784,1801,1818,1835,1852,1869,1886,1903,1920,1937,1954,1971,1988,2005,2022,2039,2056,2073,2090,2107,2124,2141,2158,2175,2192,2209,2226,2243,2260,2277,2294,2311,2328,2345,2362,2379,2396,2413,2430,2447,2464,2481,2498,2515,2532,2549,2566,2583,2600,2617,2634,2651,2668,2685,2702,2719,2736,2753,2770,2787,2804,2821,2838,2855,2872,2889,2906,2923,2940,2957,2974,2991,3008,3025,3042,3059,3076,3093,3110,3127,3144,3161,3178,3195,3212,3229,3246,3263,3280,3297,3314,3331,3348,3365,3382,3399,3416,3433,3450,3467,3484,3501,3518,3535,3552,3569,3586,3603,3620,3637,3654,3671,3688,3705,3722,3739,3756,3773,3790,3807,3824,3841,3858,3875,3892,3909,3926,3943,3960,3977,3994,4011,4013,4014,4043,4052,4061,4070,4079,4088,4097,4106,4115,4124,4133,4142,4151,4160,4169,4178,4187,4196,4205,4214,4223,4232,4241,4250,4259,4268,4277,4286,4295,4304,4313,4322,4331,4340,4349,4358,4367,4376,4385,4394,4403,4412,4421,4430,4439,4448,4457,4466,4475,4484,4493,4502,4511,4520,4529,4538,4547,4556,4565,4574,4583,4592,4601,4610,4619,4628,4637,4646,4655,4664,4673,4682,4691,4700,4709,4718,4727,4736,4745,4754,4763,4772,4781,4790,4799,4808,4817,4826,4835,4844,4853,4862,4871,4880,4889,4898,4907,4916,4925,4934,4943,4952,4961,4970,4979,4988,4997,5006,5015,5024,5033,5042,5051,5060,5069,5078,5087,5096,5105,5114,5123,5132,5141,5150,5159,5168,5177,5186,5195,5204,5213,5222,5231,5233,5234,5260,5281,5302,5323,5344,5365,5386,5407,5428,5449,5470,5491,5512,5533,5554,5575,5596,5617,5638,5659,5680,5701,5722,5743,5764,5785,5806,5827,5848,5869,5890,5911,5932,5953,5974,5995,6016,6037,6058,6079,6100,6121,6142,6163,6184,6205,6226,6247,6268,6289,6310,6331,6352,6373,6394,6415,6436,6457,6478,6499,6520,6541,6562,6583,6604,6625,6646,6667,6688,6709,6730,6751,6772,6793,6814,6835,6856,6877,6898,6919,6940,6961,6982,7003,7024,7045,7066,7087,7108,7129,7150,7171,7192,7213,7234,7255,7276,7297,7318,7339,7360,7381,7402,7423,7444,7465,7486,7507,7528,7549,7570,7591,7612,7633,7654,7675,7696,7717,7738,7759,7780,7801,7822,7843,7864,7885,7906,7927,7948,7969,7990,8011,8032,8053,8074,8095,8116,8137,8158,8179,8200,8221,8242,8263,8284,8305,8326,8347,8368,8389,8410,8431,8452,8473,8494,8515,8536,8557,8578,8599,8620,8641,8662,8683,8704,8725,8746,8767,8788,8809,8830,8851,8872,8893,8914,8935,8956,8977,8998,9019,9040,9061,9082,9103,9124,9145,9166,9187,9208,9229,9250,9271,9292,9313,9334,9355,9376,9397,9418,9439,9460,9481,9502,9523,9544,9565,9586,9607,9628,9649,9670,9691,9712,9733,9754,9775,9796,9817,9838,9859,9880,9901,9922,9943,9964,9985,10006,10027,10048,10069,10090,10111,10132,10153,10174,10176,10177,10235,10244,10253,10262,10271,10280,10289,10298,10307,10316,10325,10334,10343,10352,10361,10370,10379,10388,10397,10406,10415,10424,10433,10442,10451,10460,10469,10478,10487,10496,10505,10514,10523,10532,10541,10550,10559,10568,10577,10586,10595,10604,10613,10622,10631,10640,10649,10658,10667,10676,10685,10694,10703,10712,10721,10730,10739,10748,10757,10766,10775,10784,10793,10802,10811,10820,10829,10838,10847,10856,10865,10874,10883,10892,10901,10910,10919,10928,10937,10946,10955,10964,10973,10982,10991,11000,11009,11018,11027,11036,11045,11054,11063,11072,11081,11090,11092,11093,11154,11180,11189,11198,11207,11216,11225,11234,11243,11252,11261,11270,11279,11288,11297,11306,11315,11324],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/itoa.go","Base":126760,"Size":5431,"Lines":[0,55,109,159,160,176,177,196,197,260,261,333,407,434,479,525,548,551,599,609,611,612,683,757,784,827,883,906,909,965,975,977,978,1028,1054,1086,1088,1089,1144,1214,1269,1325,1364,1367,1423,1435,1437,1438,1503,1574,1631,1677,1716,1719,1767,1779,1781,1782,1842,1869,1882,1907,1910,1944,1946,1947,1967,1968,2014,2040,2066,2092,2118,2144,2170,2196,2222,2246,2247,2283,2284,2338,2339,2412,2482,2552,2624,2655,2658,2748,2785,2838,2841,2878,2879,2939,2952,2953,2963,2972,2975,2976,2993,3048,3104,3121,3167,3223,3224,3241,3295,3313,3363,3413,3475,3492,3546,3575,3599,3614,3626,3659,3692,3698,3699,3748,3784,3792,3824,3825,3835,3840,3854,3858,3859,3896,3912,3930,3952,3965,3975,4006,4037,4041,4042,4056,4071,4077,4105,4121,4128,4155,4159,4160,4192,4238,4318,4391,4466,4538,4609,4676,4728,4748,4789,4804,4811,4839,4854,4858,4872,4878,4903,4913,4931,4951,4966,4973,5022,5071,5132,5146,5176,5185,5189,5203,5209,5234,5237,5238,5259,5269,5275,5288,5291,5292,5306,5334,5343,5346,5365,5373,5375,5376,5408,5429],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/strconv/quote.go","Base":132192,"Size":16993,"Lines":[0,55,109,159,160,215,216,232,233,242,258,260,261,269,300,331,333,334,394,433,459,461,462,537,633,635,636,713,789,791,792,886,957,1005,1038,1092,1110,1123,1126,1152,1197,1215,1227,1253,1294,1298,1339,1369,1409,1450,1462,1466,1531,1534,1560,1572,1574,1575,1671,1697,1722,1743,1746,1810,1836,1848,1850,1851,1944,1975,2033,2059,2088,2101,2104,2120,2159,2189,2203,2207,2268,2306,2342,2355,2358,2370,2382,2411,2423,2452,2464,2493,2505,2534,2546,2575,2587,2616,2628,2657,2667,2678,2694,2724,2767,2811,2836,2850,2865,2885,2915,2948,2996,3001,3012,3042,3075,3123,3128,3132,3135,3147,3149,3150,3221,3292,3357,3369,3399,3439,3441,3442,3515,3581,3629,3681,3683,3684,3758,3833,3909,3946,3985,3987,3988,4068,4141,4196,4247,4249,4250,4326,4398,4474,4505,4544,4583,4585,4586,4668,4743,4800,4851,4853,4854,4929,5006,5084,5116,5161,5163,5164,5251,5321,5371,5428,5430,5431,5509,5582,5658,5673,5712,5756,5758,5759,5853,5930,5987,6043,6045,6046,6126,6187,6265,6292,6333,6377,6379,6380,6476,6555,6614,6670,6672,6673,6737,6801,6831,6866,6884,6923,6937,6952,6974,7039,7044,7130,7134,7161,7177,7181,7240,7256,7260,7263,7276,7278,7279,7318,7332,7342,7370,7393,7421,7449,7477,7505,7508,7516,7518,7519,7592,7645,7672,7675,7734,7845,7910,7983,7986,8060,8121,8204,8274,8380,8474,8489,8507,8525,8534,8537,8558,8611,8629,8638,8664,8704,8736,8753,8792,8795,8796,8826,8844,8862,8871,8874,8885,8896,8897,8909,8920,8935,8946,8961,8972,8987,8998,9013,9024,9039,9050,9065,9076,9091,9112,9121,9134,9146,9155,9167,9176,9188,9197,9201,9214,9232,9251,9261,9265,9292,9316,9328,9348,9359,9364,9380,9384,9396,9412,9457,9470,9479,9483,9507,9526,9536,9540,9552,9571,9617,9638,9656,9675,9685,9689,9747,9772,9795,9815,9826,9831,9851,9855,9867,9882,9901,9911,9915,9927,9939,9954,9971,9989,10008,10018,10022,10040,10050,10068,10077,10080,10090,10098,10100,10101,10190,10272,10318,10352,10369,10371,10372,10431,10494,10554,10610,10636,10677,10712,10731,10754,10757,10774,10776,10777,10838,10914,10970,11022,11092,11168,11186,11213,11216,11232,11261,11275,11302,11305,11397,11398,11414,11425,11436,11454,11490,11524,11579,11590,11657,11704,11763,11809,11832,11862,11868,11873,11894,11898,11971,12044,12111,12180,12214,12242,12259,12316,12378,12396,12414,12427,12485,12499,12564,12638,12643,12657,12676,12694,12738,12744,12774,12779,12783,12784,12834,12851,12863,12900,12916,12983,12987,13025,13059,13127,13179,13215,13245,13250,13262,13263,13315,13332,13373,13405,13418,13449,13486,13521,13527,13532,13533,13589,13611,13621,13626,13630,13631,13690,13730,13759,13763,13803,13804,13820,13851,13855,13896,13906,13933,13936,13938,13939,13996,14048,14091,14110,14123,14143,14159,14172,14183,14192,14196,14199,14209,14211,14212,14269,14321,14364,14383,14396,14416,14432,14445,14456,14465,14469,14472,14482,14484,14485,14570,14647,14726,14796,14819,14820,14892,14966,14994,15022,15049,15065,15095,15154,15169,15173,15203,15240,15302,15306,15321,15324,15325,15379,15430,15508,15581,15649,15650,15676,15740,15770,15838,15854,15858,15891,15944,15947,15948,16011,16040,16107,16122,16125,16144,16158,16161,16175,16214,16273,16275,16276,16355,16428,16478,16508,16525,16539,16542,16569,16571,16572,16658,16724,16767,16803,16859,16876,16891,16894,16911,16942,16991],"Infos":null}]}
 