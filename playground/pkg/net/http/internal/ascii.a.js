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
GoLinkname�� Implementation�� 	Reference��   � ��net/http/internal/asciiasciistringsunicodeti 12st lowerokascii	EqualFoldIsIsPrintToLowerF       F      F      F         !)$ strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 !net/http/internal/ascii.EqualFoldnet/http/internal/ascii	EqualFold 	EqualFold�{	EqualFold = function(s, t) {
		var i, s, t;
    		if (!((s.length === t.length))) {
  �			return false;
    		}
  �		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (!((lower(s.charCodeAt(i)) === lower(t.charCodeAt(i))))) {
  �				return false;
    			}
  �			i = i + (1) >> 0;
    		}
  �		return true;
    	};
	$pkg.EqualFold = EqualFold;
	EqualFold!net/http/internal/ascii.EqualFoldnet/http/internal/ascii.lower net/http/internal/ascii.lowernet/http/internal/asciilower lower��	lower = function(b) {
		var b;
    		if (65 <= b && b <= 90) {
  b			return b + 32 << 24 >>> 24;
    		}
  }		return b;
    	};
lowernet/http/internal/ascii.lower net/http/internal/ascii.IsPrintnet/http/internal/asciiIsPrint IsPrint�	IsPrint = function(s) {
		var i, s;
  		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) < 32 || s.charCodeAt(i) > 126) {
  \				return false;
    			}
  3			i = i + (1) >> 0;
    		}
  q		return true;
    	};
	$pkg.IsPrint = IsPrint;
IsPrintnet/http/internal/ascii.IsPrint net/http/internal/ascii.Isnet/http/internal/asciiIs Is��	Is = function(s) {
		var i, s;
  �		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
    			if (s.charCodeAt(i) > 127) {
  �				return false;
    			}
  �			i = i + (1) >> 0;
    		}
  		return true;
    	};
	$pkg.Is = Is;
Isnet/http/internal/ascii.Is net/http/internal/ascii.ToLowernet/http/internal/asciiToLower ToLower�t	ToLower = function(s) {
		var $24r, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, lower$1, ok, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; lower$1 = $f.lower$1; ok = $f.ok; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		lower$1 = "";
		ok = false;
    		if (!IsPrint(s)) {
    			_tmp = "";
			_tmp$1 = false;
			lower$1 = _tmp;
			ok = _tmp$1;
			$s = -1; return [lower$1, ok];
    		}
    		_r = strings.ToLower(s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tmp$2 = _r;
		_tmp$3 = true;
		lower$1 = _tmp$2;
		ok = _tmp$3;
		$24r = [lower$1, ok];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ToLower }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f.lower$1 = lower$1; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ToLower = ToLower;
ToLowernet/http/internal/ascii.IsPrintnet/http/internal/ascii.ToLowerstrings.ToLower ��{"Base":1256,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/net/http/internal/ascii/print.go","Base":1,"Size":1254,"Lines":[0,55,109,159,160,174,175,184,195,206,208,209,283,323,358,381,396,399,430,464,480,484,487,500,502,503,554,580,607,632,635,645,647,648,713,763,793,824,856,872,876,879,892,894,895,929,954,985,1016,1032,1036,1039,1052,1054,1055,1130,1179,1197,1216,1219,1252],"Infos":null}]}
 