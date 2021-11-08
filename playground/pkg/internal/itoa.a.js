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
GoLinkname�� Implementation�� 	Reference��   ����internal/itoaitoa8i val itoaItoaUitoaF     F      
  	arrayType%	arrayType = $arrayType($Uint8, 20);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType internal/itoa.Itoainternal/itoaItoa Itoa��	Itoa = function(val) {
		var val;
    		if (val < 0) {
  ;			return "-" + Uitoa(((-val >>> 0)));
    		}
  ^		return Uitoa(((val >>> 0)));
    	};
	$pkg.Itoa = Itoa;
Itoainternal/itoa.Itoainternal/itoa.Uitoa internal/itoa.Uitoainternal/itoaUitoa Uitoa�	Uitoa = function(val) {
		var _q, buf, i, q, val;
    		if (val === 0) {
  �			return "0";
    		}
  		buf = arrayType.zero();
  5		i = 19;
  H		while (true) {
			if (!(val >= 10)) { break; }
  Z			q = (_q = val / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  j			((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = ((((48 + val >>> 0) - (q * 10 >>> 0) >>> 0) << 24 >>> 24)));
  �			i = i - (1) >> 0;
  �			val = q;
    		}
  �		((i < 0 || i >= buf.length) ? ($throwRuntimeError("index out of range"), undefined) : buf[i] = (((48 + val >>> 0) << 24 >>> 24)));
  �		return ($bytesToString($subslice(new sliceType(buf), i)));
    	};
	$pkg.Uitoa = Uitoa;
Uitoainternal/itoa.Uitoainternal/itoa.arrayTypeinternal/itoa.sliceType �{"Base":735,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/itoa/itoa.go","Base":1,"Size":733,"Lines":[0,55,109,159,160,213,214,227,228,270,298,312,345,348,373,375,376,419,449,491,504,507,563,582,599,615,649,655,665,668,681,707,731],"Infos":null}]}
 