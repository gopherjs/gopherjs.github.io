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
GoLinkname�� Implementation�� 	Reference��   �Q��*vendor/golang.org/x/crypto/internal/subtlesubtlereflectSi & xy subtle
AnyOverlapInexactOverlapF         F   0 0     reflect!	reflect = $packages["reflect"];
��    		$r = reflect.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ptrType	ptrType = $ptrType($Uint8);
ptrType 5vendor/golang.org/x/crypto/internal/subtle.AnyOverlap*vendor/golang.org/x/crypto/internal/subtle
AnyOverlap 
AnyOverlap�	�	AnyOverlap = function(x, y) {
		var $24r, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _v, _v$1, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _v = $f._v; _v$1 = $f._v$1; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		if (!(x.$length > 0 && y.$length > 0)) { _v$1 = false; $s = 2; continue s; }
		_r = reflect.ValueOf($indexPtr(x.$array, x.$offset + 0, ptrType)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = $clone(_r, reflect.Value).Pointer(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = reflect.ValueOf($indexPtr(y.$array, y.$offset + (y.$length - 1 >> 0), ptrType)); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = $clone(_r$2, reflect.Value).Pointer(); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_v$1 = _r$1 <= _r$3; case 2:
		if (!(_v$1)) { _v = false; $s = 1; continue s; }
		_r$4 = reflect.ValueOf($indexPtr(y.$array, y.$offset + 0, ptrType)); /* */ $s = 7; case 7: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_r$5 = $clone(_r$4, reflect.Value).Pointer(); /* */ $s = 8; case 8: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_r$6 = reflect.ValueOf($indexPtr(x.$array, x.$offset + (x.$length - 1 >> 0), ptrType)); /* */ $s = 9; case 9: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_r$7 = $clone(_r$6, reflect.Value).Pointer(); /* */ $s = 10; case 10: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_v = _r$5 <= _r$7; case 1:
		$24r = _v;
		$s = 11; case 11: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: AnyOverlap }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._v = _v; $f._v$1 = _v$1; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.AnyOverlap = AnyOverlap;

AnyOverlapreflect.Valuereflect.ValueOf5vendor/golang.org/x/crypto/internal/subtle.AnyOverlap2vendor/golang.org/x/crypto/internal/subtle.ptrType 9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap*vendor/golang.org/x/crypto/internal/subtleInexactOverlap InexactOverlap�c	InexactOverlap = function(x, y) {
		var $24r, _r, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if ((x.$length === 0) || (y.$length === 0) || $indexPtr(x.$array, x.$offset + 0, ptrType) === $indexPtr(y.$array, y.$offset + 0, ptrType)) {
  U			$s = -1; return false;
    		}
  f		_r = AnyOverlap(x, y); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: InexactOverlap }; } $f.$24r = $24r; $f._r = _r; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.InexactOverlap = InexactOverlap;
InexactOverlap5vendor/golang.org/x/crypto/internal/subtle.AnyOverlap9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap2vendor/golang.org/x/crypto/internal/subtle.ptrType �S{"Base":1409,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/vendor/golang.org/x/crypto/internal/subtle/aliasing_purego.go","Base":1,"Size":1407,"Lines":[0,55,109,159,160,178,195,196,274,328,391,392,459,513,514,531,532,607,679,715,751,832,910,912,913,993,1072,1138,1141,1222,1271,1311,1362,1377,1380,1405],"Infos":null}]}
 