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
GoLinkname�� Implementation�� 	Reference��   ���crypto/internal/randutilrandutiliosyncdi 1"rReaderioReadpnerr randutilMaybeReadByte 	F      	   +   T - #		  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
structType#	structType = $structType("", []);

structType  	arrayType$	arrayType = $arrayType($Uint8, 1);
	arrayType  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  closedChanOnceC		closedChanOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
closedChanOnce'crypto/internal/randutil.closedChanOnce
sync.Mutex	sync.Once  
closedChan		closedChan = $chanNil;

closedChan#crypto/internal/randutil.closedChan &crypto/internal/randutil.MaybeReadBytecrypto/internal/randutilMaybeReadByte MaybeReadByte��	MaybeReadByte = function(r) {
		var _r, _r$1, _selection, buf, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _selection = $f._selection; buf = $f.buf; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = closedChanOnce.Do((function() {
  			closedChan = new $Chan(structType, 0);
  &			$close(closedChan);
    		})); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  >		_r = $select([[closedChan], [closedChan]]); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_selection = _r;
		/* */ if (_selection[0] === 0) { $s = 3; continue; }
		/* */ if (_selection[0] === 1) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (_selection[0] === 0) { */ case 3:
  ]			$s = -1; return;
    		/* } else if (_selection[0] === 1) { */ case 4:
  ~			buf = arrayType.zero();
  �			_r$1 = r.Read(new sliceType(buf)); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
    		/* } */ case 5:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MaybeReadByte }; } $f._r = _r; $f._r$1 = _r$1; $f._selection = _selection; $f.buf = buf; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MaybeReadByte = MaybeReadByte;
MaybeReadByte&crypto/internal/randutil.MaybeReadByte"crypto/internal/randutil.arrayType#crypto/internal/randutil.closedChan'crypto/internal/randutil.closedChanOnce"crypto/internal/randutil.sliceType#crypto/internal/randutil.structType �6{"Base":929,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/crypto/internal/randutil/randutil.go","Base":1,"Size":927,"Lines":[0,55,109,159,160,231,251,268,269,278,284,292,294,295,301,327,357,359,360,440,514,594,597,675,706,740,768,803,823,827,828,838,858,867,887,905,922,925],"Infos":null}]}
 