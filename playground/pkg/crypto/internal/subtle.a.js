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
GoLinkname�� Implementation�� 	Reference��   ����crypto/internal/subtlesubtlegithub.com/gopherjs/gopherjs/jsSi & xy subtle
AnyOverlapInexactOverlapF         F   0 0     js4	js = $packages["github.com/gopherjs/gopherjs/js"];
��    		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ptrType	ptrType = $ptrType($Uint8);
ptrType !crypto/internal/subtle.AnyOverlapcrypto/internal/subtle
AnyOverlap 
AnyOverlap�R	AnyOverlap = function(x, y) {
		var x, y;
  �		return x.$length > 0 && y.$length > 0 && x.$array === y.$array && ($parseInt(x.$offset) >> 0) <= ((($parseInt(y.$offset) >> 0) + y.$length >> 0) - 1 >> 0) && ($parseInt(y.$offset) >> 0) <= ((($parseInt(x.$offset) >> 0) + x.$length >> 0) - 1 >> 0);
    	};
	$pkg.AnyOverlap = AnyOverlap;

AnyOverlap!crypto/internal/subtle.AnyOverlap %crypto/internal/subtle.InexactOverlapcrypto/internal/subtleInexactOverlap InexactOverlap�2	InexactOverlap = function(x, y) {
		var x, y;
    		if ((x.$length === 0) || (y.$length === 0) || $indexPtr(x.$array, x.$offset + 0, ptrType) === $indexPtr(y.$array, y.$offset + 0, ptrType)) {
  )			return false;
    		}
  :		return AnyOverlap(x, y);
    	};
	$pkg.InexactOverlap = InexactOverlap;
InexactOverlap!crypto/internal/subtle.AnyOverlap%crypto/internal/subtle.InexactOverlapcrypto/internal/subtle.ptrType �{"Base":2133,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/internal/subtle/aliasing.go","Base":1,"Size":796,"Lines":[0,14,27,28,43,44,92,125,171,172,213,214,289,361,397,481,517,595,696,794],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/internal/subtle/aliasing.go","Base":798,"Size":1334,"Lines":[0,55,109,159,160,182,203,204,282,336,339,399,449,450,466,467,542,614,650,686,763,837,839,840,920,999,1065,1068,1149,1198,1238,1289,1304,1307,1332],"Infos":null}]}
 