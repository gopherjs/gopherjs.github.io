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
GoLinkname�� Implementation�� 	Reference��   �Vz��	go/formatformatbytesfmtgo/ast	go/parser
go/printergo/tokeniostrings�ji ��dstWriteriofsetFileSetgo/tokennode srcWritepnerrmutexRWMutex#github.com/gopherjs/gopherjs/nosyncbasefilesFilelastBasesAddFilefilenamesizeIterateffilePosPositionForadjustedposPositionReaddecodeencodewriteLockedreadLockCounterLockrwUnlockRLockRUnlocksetnameMutexlinesinfoslineInfoNameSize	LineCountAddLineoffset	MergeLinelineSetLinesSetLinesForContentcontent	LineStartAddLineInfoAddLineColumnInfocolumnOffsetLineunpackpositionIsValidFilenameColumnStringlockedmformatNodeSourcenosynctoken  #)  F     & $( ) F  *= )? )   . 4O 6 8 T Q BJ yili <f ) n ) sn ) ~p )##i#i )� )  # �i#i# �##   )� ) #   )� ) T r	 � ��  ) � �� � n � )�  � �� ��   � �� 4� )�  y �� 4� ��  � �� 4� �  ��  � �� 4� ��  � �� �� )  . �� �� ) J �  ) � )ffffT � � ��   � ��   � ��   � ��  # �J �� �� ) � ) n ) � ) <� ) �� ) �� )iiiiiiiiiiiiiiiiiiT � � ��  ) � ��  ) � ��  ) � ��  ) � �� �   � �� �   � �� �� )   � �� ��   � �� � )�  � �� � � �   � �� � � � �   � �� � )�  � �� 4� )  � �� 4� )  � �� � �  � � �  � �� 4� �  ��  � �� 4� �  ��  � �� 4� �� T  � 4�  )  � ) � ) � ) � )�T � � ��  )  � ��  )J �  )��T � � ��   � ��   � ) � ) � ) � )T � )� ��!J� ��B�� y�������� C bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ast	ast = $packages["go/ast"];
��    		$r = ast.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  parser"	parser = $packages["go/parser"];
��    		$r = parser.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  printer$	printer = $packages["go/printer"];
��    		$r = printer.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  token 	token = $packages["go/token"];
��    		$r = token.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ptrType	ptrType = $ptrType(ast.File);
ptrTypego/ast.File  	ptrType$1.	ptrType$1 = $ptrType(printer.CommentedNode);
	ptrType$1go/printer.CommentedNode  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  	ptrType$2)	ptrType$2 = $ptrType(ast.CommentGroup);
	ptrType$2go/ast.CommentGroup  sliceType$2&	sliceType$2 = $sliceType(ptrType$2);
sliceType$2go/format.ptrType$2  	ptrType$3$	ptrType$3 = $ptrType(ast.GenDecl);
	ptrType$3go/ast.GenDecl  configconfig  :  �		config = new printer.Config.ptr(1073741830, 8, 0);
configgo/format.configgo/printer.Config go/format.Node	go/formatNode Node��	Node = function(dst, fset, node) {
		var $24r, $24r$1, _r, _r$1, _r$2, _r$3, _ref, _tuple, _tuple$1, buf, cnode, dst, err, f, file, fset, n, n$1, node, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; buf = $f.buf; cnode = $f.cnode; dst = $f.dst; err = $f.err; f = $f.f; file = $f.file; fset = $f.fset; n = $f.n; n$1 = $f.n$1; node = $f.node; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
  *		file = ptrType.nil;
  >		cnode = ptrType$1.nil;
  \		_ref = node;
    		if ($assertType(_ref, ptrType, true)[1]) {
    			n = _ref.$val;
  �			file = n;
    		} else if ($assertType(_ref, ptrType$1, true)[1]) {
    			n$1 = _ref.$val;
  �			_tuple = $assertType(n$1.Node, ptrType, true);
			f = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  �				file = f;
  �				cnode = n$1;
    			}
    		}
  			/* */ if (!(file === ptrType.nil) && hasUnsortedImports(file)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(file === ptrType.nil) && hasUnsortedImports(file)) { */ case 1:
  	�			buf[0] = new bytes.Buffer.ptr(sliceType.nil, 0, 0);
  	�			_r = config.Fprint(buf[0], fset, file); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  
				$s = -1; return err;
    			}
  
			_r$1 = parser.ParseFile(fset, "", buf[0].Bytes(), 4); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			file = _tuple$1[0];
			err = _tuple$1[1];
  
Z			/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 5:
  
�				_r$2 = fmt.Errorf("format.Node internal error (%s)", new sliceType$1([err])); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				$24r = _r$2;
				$s = 8; case 8: return $24r;
    			/* } */ case 6:
  
�			$r = ast.SortImports(fset, file); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  6			node = file;
    			if (!(cnode === ptrType$1.nil)) {
  Y				node = new printer.CommentedNode.ptr(file, cnode.Comments);
    			}
    		/* } */ case 2:
  �		_r$3 = config.Fprint(dst, fset, node); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		$24r$1 = _r$3;
		$s = 11; case 11: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Node }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.buf = buf; $f.cnode = cnode; $f.dst = dst; $f.err = err; $f.f = f; $f.file = file; $f.fset = fset; $f.n = n; $f.n$1 = n$1; $f.node = node; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Node = Node;
Nodebytes.Buffer
fmt.Errorfgo/ast.CommentGroupgo/ast.Filego/ast.SortImportsgo/format.Nodego/format.configgo/format.hasUnsortedImportsgo/format.ptrTypego/format.ptrType$1go/format.ptrType$2go/format.sliceTypego/format.sliceType$1go/format.sliceType$2go/parser.ParseFilego/printer.CommentedNode go/format.Source	go/formatSource Source��	Source = function(src) {
		var $24r, _r, _r$1, _tuple, err, file, fset, indentAdj, sourceAdj, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; file = $f.file; fset = $f.fset; indentAdj = $f.indentAdj; sourceAdj = $f.sourceAdj; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		fset = token.NewFileSet();
  #		_r = parse(fset, "", src, true); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		file = _tuple[0];
		sourceAdj = _tuple[1];
		indentAdj = _tuple[2];
		err = _tuple[3];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  t			$s = -1; return [sliceType.nil, err];
    		}
  �		/* */ if (sourceAdj === $throwNilPointerError) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (sourceAdj === $throwNilPointerError) { */ case 2:
  �			$r = ast.SortImports(fset, file); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
  		_r$1 = format(fset, file, sourceAdj, indentAdj, src, $clone(config, printer.Config)); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 6; case 6: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Source }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.file = file; $f.fset = fset; $f.indentAdj = indentAdj; $f.sourceAdj = sourceAdj; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Source = Source;
Sourcego/ast.SortImportsgo/format.Sourcego/format.configgo/format.formatgo/format.parsego/format.sliceTypego/printer.Configgo/token.NewFileSet go/format.hasUnsortedImports	go/formathasUnsortedImports hasUnsortedImports�W	hasUnsortedImports = function(file) {
		var _i, _ref, _tuple, d, d$1, file, ok;
  x		_ref = file.Decls;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			d = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_tuple = $assertType(d, ptrType$3, true);
			d$1 = _tuple[0];
			ok = _tuple[1];
    			if (!ok || !((d$1.Tok === 75))) {
  *				return false;
    			}
    			if (new token.Pos(d$1.Lparen).IsValid()) {
  �				return true;
    			}
    			_i++;
		}
  
		return false;
    	};
hasUnsortedImportsgo/ast.GenDeclgo/format.hasUnsortedImportsgo/format.ptrType$3go/token.Pos go/format.parse	go/formatparse parse�E	parse = function(fset, filename, src, fragmentOk) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tuple, _tuple$1, _tuple$2, _v, err, file, filename, fragmentOk, fset, fsrc, indentAdj, psrc, sourceAdj, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _v = $f._v; err = $f.err; file = $f.file; filename = $f.filename; fragmentOk = $f.fragmentOk; fset = $f.fset; fsrc = $f.fsrc; indentAdj = $f.indentAdj; psrc = $f.psrc; sourceAdj = $f.sourceAdj; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		file = ptrType.nil;
		sourceAdj = $throwNilPointerError;
		indentAdj = 0;
		err = $ifaceNil;
  _		_r = parser.ParseFile(fset, filename, src, 4); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		file = _tuple[0];
		err = _tuple[1];
  x		if ($interfaceIsEqual(err, $ifaceNil) || !fragmentOk) { _v = true; $s = 4; continue s; }
		_r$1 = err.Error(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$2 = strings.Contains(_r$1, "expected 'package'"); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_v = !_r$2; case 4:
		/* */ if (_v) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_v) { */ case 2:
  �			$s = -1; return [file, sourceAdj, indentAdj, err];
    		/* } */ case 3:
  �		psrc = $appendSlice((new sliceType($stringToBytes("package p;"))), src);
  �		_r$3 = parser.ParseFile(fset, filename, psrc, 4); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$1 = _r$3;
		file = _tuple$1[0];
		err = _tuple$1[1];
  
		/* */ if ($interfaceIsEqual(err, $ifaceNil)) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if ($interfaceIsEqual(err, $ifaceNil)) { */ case 8:
  			sourceAdj = (function $b(src$1, indent) {
				var $24r, _r$4, indent, src$1, $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$4 = $f._r$4; indent = $f.indent; src$1 = $f.src$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �				src$1 = $subslice(src$1, (indent + 10 >> 0));
  �				_r$4 = bytes.TrimSpace(src$1); /* */ $s = 1; case 1: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
				$24r = _r$4;
				$s = 2; case 2: return $24r;
    				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$24r = $24r; $f._r$4 = _r$4; $f.indent = indent; $f.src$1 = src$1; $f.$s = $s; $f.$r = $r; return $f;
			});
  �			$s = -1; return [file, sourceAdj, indentAdj, err];
    		/* } */ case 9:
  �		_r$4 = err.Error(); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_r$5 = strings.Contains(_r$4, "expected declaration"); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		/* */ if (!_r$5) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!_r$5) { */ case 10:
  �			$s = -1; return [file, sourceAdj, indentAdj, err];
    		/* } */ case 11:
  =		fsrc = $append($appendSlice((new sliceType($stringToBytes("package p; func _() {"))), src), 10, 10, 125);
  �		_r$6 = parser.ParseFile(fset, filename, fsrc, 4); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_tuple$2 = _r$6;
		file = _tuple$2[0];
		err = _tuple$2[1];
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  �			sourceAdj = (function $b(src$1, indent) {
				var $24r, _r$7, indent, src$1, $s, $r;
				/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$7 = $f._r$7; indent = $f.indent; src$1 = $f.src$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    				if (indent < 0) {
  M					indent = 0;
    				}
  �				src$1 = $subslice(src$1, (($imul(2, indent)) + 21 >> 0));
  w				src$1 = $subslice(src$1, 0, (src$1.$length - 2 >> 0));
  �				_r$7 = bytes.TrimSpace(src$1); /* */ $s = 1; case 1: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				$24r = _r$7;
				$s = 2; case 2: return $24r;
    				/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$24r = $24r; $f._r$7 = _r$7; $f.indent = indent; $f.src$1 = src$1; $f.$s = $s; $f.$r = $r; return $f;
			});
  			indentAdj = -1;
    		}
  M		$s = -1; return [file, sourceAdj, indentAdj, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parse }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._v = _v; $f.err = err; $f.file = file; $f.filename = filename; $f.fragmentOk = fragmentOk; $f.fset = fset; $f.fsrc = fsrc; $f.indentAdj = indentAdj; $f.psrc = psrc; $f.sourceAdj = sourceAdj; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
parsebytes.TrimSpacego/format.parsego/format.ptrTypego/format.sliceTypego/parser.ParseFilestrings.Contains go/format.format	go/formatformat format�c	format = function(fset, file, sourceAdj, indentAdj, src, cfg) {
		var _1, _i, _r, _r$1, _r$2, _ref, _tmp, _tmp$1, b, buf, buf$1, cfg, err, err$1, file, fset, hasSpace, i, i$1, indent, indentAdj, j, out, res, sourceAdj, src, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; b = $f.b; buf = $f.buf; buf$1 = $f.buf$1; cfg = $f.cfg; err = $f.err; err$1 = $f.err$1; file = $f.file; fset = $f.fset; hasSpace = $f.hasSpace; i = $f.i; i$1 = $f.i$1; indent = $f.indent; indentAdj = $f.indentAdj; j = $f.j; out = $f.out; res = $f.res; sourceAdj = $f.sourceAdj; src = $f.src; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
		buf$1 = [buf$1];
  �		/* */ if (sourceAdj === $throwNilPointerError) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (sourceAdj === $throwNilPointerError) { */ case 1:
  �			buf[0] = new bytes.Buffer.ptr(sliceType.nil, 0, 0);
  �			_r = cfg.Fprint(buf[0], fset, file); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  "				$s = -1; return [sliceType.nil, err];
    			}
  8			$s = -1; return [buf[0].Bytes(), $ifaceNil];
    		/* } */ case 2:
  �		_tmp = 0;
		_tmp$1 = 0;
		i = _tmp;
		j = _tmp$1;
  �		while (true) {
			if (!(j < src.$length && isSpace(((j < 0 || j >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + j])))) { break; }
    			if (((j < 0 || j >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + j]) === 10) {
  �				i = j + 1 >> 0;
    			}
   !			j = j + (1) >> 0;
    		}
   -		res = sliceType.nil;
   9		res = $appendSlice(res, $subslice(src, 0, i));
   �		indent = 0;
   �		hasSpace = false;
  !		_ref = $subslice(src, i, j);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			_1 = b;
    			if (_1 === (32)) {
  !H				hasSpace = true;
    			} else if (_1 === (9)) {
  !h				indent = indent + (1) >> 0;
    			}
    			_i++;
		}
    		if ((indent === 0) && hasSpace) {
  !�			indent = 1;
    		}
  !�		i$1 = 0;
		while (true) {
			if (!(i$1 < indent)) { break; }
  !�			res = $append(res, 9);
  !�			i$1 = i$1 + (1) >> 0;
    		}
  "0		cfg.Indent = indent + indentAdj >> 0;
  "U		buf$1[0] = new bytes.Buffer.ptr(sliceType.nil, 0, 0);
  "g		_r$1 = cfg.Fprint(buf$1[0], fset, file); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err$1 = _r$1;
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  "�			$s = -1; return [sliceType.nil, err$1];
    		}
  "�		_r$2 = sourceAdj(buf$1[0].Bytes(), cfg.Indent); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		out = _r$2;
    		if (out.$length === 0) {
  #x			$s = -1; return [src, $ifaceNil];
    		}
  #�		res = $appendSlice(res, out);
  $		i = src.$length;
  $		while (true) {
			if (!(i > 0 && isSpace((x = i - 1 >> 0, ((x < 0 || x >= src.$length) ? ($throwRuntimeError("index out of range"), undefined) : src.$array[src.$offset + x]))))) { break; }
  $2			i = i - (1) >> 0;
    		}
  $:		$s = -1; return [$appendSlice(res, $subslice(src, i)), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: format }; } $f._1 = _1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.b = b; $f.buf = buf; $f.buf$1 = buf$1; $f.cfg = cfg; $f.err = err; $f.err$1 = err$1; $f.file = file; $f.fset = fset; $f.hasSpace = hasSpace; $f.i = i; $f.i$1 = i$1; $f.indent = indent; $f.indentAdj = indentAdj; $f.j = j; $f.out = out; $f.res = res; $f.sourceAdj = sourceAdj; $f.src = src; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
formatbytes.Buffergo/format.formatgo/format.isSpacego/format.sliceType go/format.isSpace	go/formatisSpace isSpacen	isSpace = function(b) {
		var b;
  %		return (b === 32) || (b === 9) || (b === 10) || (b === 13);
    	};
isSpacego/format.isSpace ��{"Base":9547,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/format/format.go","Base":1,"Size":4376,"Lines":[0,55,109,159,160,223,226,307,386,465,531,534,612,689,724,739,740,749,758,765,775,788,802,814,820,822,823,870,878,895,974,975,1049,1124,1128,1210,1245,1247,1248,1315,1316,1356,1357,1433,1436,1508,1581,1651,1724,1800,1803,1874,1946,1949,2021,2084,2104,2138,2165,2182,2193,2223,2262,2274,2287,2291,2294,2295,2326,2372,2440,2481,2504,2545,2563,2577,2581,2647,2665,2732,2793,2797,2827,2828,2867,2881,2901,2972,2976,2979,2980,3019,3021,3022,3092,3162,3233,3236,3310,3386,3463,3544,3547,3589,3617,3680,3697,3715,3718,3719,3742,3769,3812,3842,3845,3846,3908,3910,3911,3958,3990,4018,4054,4102,4134,4150,4154,4180,4235,4292,4307,4311,4357,4360,4374],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/format/internal.go","Base":4378,"Size":5168,"Lines":[0,55,109,159,160,227,298,369,418,419,434,435,444,453,463,476,490,502,513,515,516,573,629,709,726,774,790,802,806,836,899,989,1051,1117,1205,1214,1217,1218,1275,1310,1374,1409,1455,1519,1536,1588,1621,1665,1706,1737,1741,1750,1753,1814,1872,1912,1973,1982,1985,1986,2041,2096,2152,2216,2284,2338,2420,2484,2501,2553,2588,2607,2622,2627,2654,2701,2770,2825,2906,2941,2972,2976,3034,3067,3084,3087,3088,3122,3130,3132,3133,3203,3272,3290,3303,3325,3342,3390,3406,3419,3440,3460,3483,3510,3533,3571,3589,3608,3612,3638,3641,3642,3667,3708,3722,3761,3783,3841,3845,3851,3854,3870,3901,3902,3960,4009,4052,4065,4084,4114,4127,4139,4158,4171,4183,4187,4190,4220,4233,4236,4267,4293,4296,4297,4320,4373,4406,4428,4465,4482,4500,4503,4546,4547,4595,4641,4680,4700,4718,4721,4722,4769,4796,4797,4838,4852,4886,4892,4895,4932,4934,4935,4993,5082,5110,5166],"Infos":null}]}
 