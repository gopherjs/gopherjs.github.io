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
GoLinkname�� Implementation�� 	Reference��   �,2��path/filepathfilepatherrorsio/fsosruntimesortstringssyscallunicode/utf8��i ��path patternmatcheserrpprefixelemnamematchedbasepathtargpathdirfilerootfnWalkFuncWalkDirFuncio/fsinfoFileInfodDirEntryIsDirModTimeTimetimeModeFileModeNameSizeSysInfoTypewallextlocLocationStringtGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRound	IsRegularPermzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixokNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutcfilepathAbsBaseCleanDirErrBadPatternEvalSymlinksExt	FromSlashGlob	HasPrefixIsAbsJoinListSeparatorMatchRel	SeparatorSkipDirSplit	SplitListToSlash
VolumeNameWalkWalkDirfsF      F     F     F     V F      F     F     F   v  F      F      F  #� C tF   ( -   F  5 >   C ^V F    G K F    � F     F      XF  P U�   amF  P U�   xm   s�   T �  �mm   ��   T �  �� �mm  m  �    �  � �  � �   �   �  �T �m  �  �  �    �   �  �T � ���� �
  �  �� ��������� �� �� ��������T �6 � ��   � ��   � �� �   � �� �� � �  � ��   � ��   � ��   � �� �   � �� ��   � ��   � �� �   � ��   � �� ��    � �� ��    � �� ��    � ��    � ��  
 � ��  ( � �
 � ��  � �� � � ��   � ��  � � ��   � ��  � � ��  � � � ��  � � � � ��   � ��   � ��   � ��   � ��   � �� �� �  � �� �� �  � �� � � � �  � �� �  � �� � �  � ��  � � ��  � � �� �� �  � ��  � � ��  ( � � ��   � ��   � ��   � ��   � ��  �  � �� ��   � ��  �  � �� ��   � ��  �  � �� ��   � ��  �  � �� ��   � ��    � �� �� �  � �� �� � T 	 � ��   � ��    � ��    � ��  � � ��  � ��� ����� (  ��  ��  �  �  �  �� �������T � � ��  � � ��   � �� � ( � � � �   � ��   � ��    � �� ( � � �  T  � ��  T  � ��  T 	 � ��   � ��   � ��   � ��   � ��   � ��   � ��   � �� �� �  � �� �� � � (  �  �  T � � �  �  �   �  T � � � ���$�/�2�@�K�X�f�t������������������������X�m� ��x���a��� ��������������C errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fs	fs = $packages["io/fs"];
��    		$r = fs.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  syscall!	syscall = $packages["syscall"];
��    		$r = syscall.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  lazybuf��	lazybuf = $pkg.lazybuf = $newType(0, $kindStruct, "filepath.lazybuf", true, "path/filepath", false, function(path_, buf_, w_, volAndPath_, volLen_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.path = "";
			this.buf = sliceType$1.nil;
			this.w = 0;
			this.volAndPath = "";
			this.volLen = 0;
			return;
		}
		this.path = path_;
		this.buf = buf_;
		this.w = w_;
		this.volAndPath = volAndPath_;
		this.volLen = volLen_;
	});
�/	ptrType.methods = [{prop: "index", name: "index", pkg: "path/filepath", typ: $funcType([$Int], [$Uint8], false)}, {prop: "append", name: "append", pkg: "path/filepath", typ: $funcType([$Uint8], [], false)}, {prop: "string", name: "string", pkg: "path/filepath", typ: $funcType([], [$String], false)}];
��	lazybuf.init("path/filepath", [{prop: "path", name: "path", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "volAndPath", name: "volAndPath", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "volLen", name: "volLen", embedded: false, exported: false, typ: $Int, tag: ""}]);
lazybufpath/filepath.lazybufpath/filepath.ptrTypepath/filepath.sliceType$1  WalkFuncl	WalkFunc = $pkg.WalkFunc = $newType(4, $kindFunc, "filepath.WalkFunc", true, "path/filepath", true, null);
A	WalkFunc.init([$String, fs.FileInfo, $error], [$error], false);
WalkFuncio/fs.FileInfopath/filepath.WalkFunc  statDirEntry��	statDirEntry = $pkg.statDirEntry = $newType(0, $kindStruct, "filepath.statDirEntry", true, "path/filepath", false, function(info_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.info = $ifaceNil;
			return;
		}
		this.info = info_;
	});
�[	ptrType$1.methods = [{prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}, {prop: "IsDir", name: "IsDir", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "Type", name: "Type", pkg: "", typ: $funcType([], [fs.FileMode], false)}, {prop: "Info", name: "Info", pkg: "", typ: $funcType([], [fs.FileInfo, $error], false)}];
��	statDirEntry.init("path/filepath", [{prop: "info", name: "info", embedded: false, exported: false, typ: fs.FileInfo, tag: ""}]);
statDirEntryio/fs.FileInfoio/fs.FileModepath/filepath.ptrType$1path/filepath.statDirEntry  	sliceType"	sliceType = $sliceType($String);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  sliceType$2(	sliceType$2 = $sliceType(fs.DirEntry);
sliceType$2io/fs.DirEntry  ptrType	ptrType = $ptrType(lazybuf);
ptrTypepath/filepath.lazybuf  	ptrType$1%	ptrType$1 = $ptrType(statDirEntry);
	ptrType$1path/filepath.statDirEntry  ErrBadPattern  SkipDir  lstatlstat  C  5		$pkg.ErrBadPattern = errors.New("syntax error in pattern");

errors.Newpath/filepath.ErrBadPattern  "  GS		$pkg.SkipDir = fs.SkipDir;
SkipDirio/fs.SkipDirpath/filepath.SkipDir    N�		lstat = os.Lstat;
lstatos.Lstatpath/filepath.lstat path/filepath.Matchpath/filepathMatch Match�	Match = function(pattern, name) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, chunk, err, err$1, err$2, i, matched, name, ok, ok$1, pattern, star, t, t$1;
		matched = false;
		err = $ifaceNil;
  		Pattern:
		while (true) {
			if (!(pattern.length > 0)) { break; }
  /			star = false;
  ?			chunk = "";
  N			_tuple = scanChunk(pattern);
			star = _tuple[0];
			chunk = _tuple[1];
			pattern = _tuple[2];
    			if (star && chunk === "") {
    				_tmp = !strings.Contains(name, "/");
				_tmp$1 = $ifaceNil;
				matched = _tmp;
				err = _tmp$1;
				return [matched, err];
    			}
  7			_tuple$1 = matchChunk(chunk, name);
			t = _tuple$1[0];
			ok = _tuple$1[1];
			err$1 = _tuple$1[2];
    			if (ok && ((t.length === 0) || pattern.length > 0)) {
  *				name = t;
  6				continue;
    			}
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp$2 = false;
				_tmp$3 = err$1;
				matched = _tmp$2;
				err = _tmp$3;
				return [matched, err];
    			}
    			if (star) {
  �				i = 0;
				while (true) {
					if (!(i < name.length && !((name.charCodeAt(i) === 47)))) { break; }
  �					_tuple$2 = matchChunk(chunk, $substring(name, (i + 1 >> 0)));
					t$1 = _tuple$2[0];
					ok$1 = _tuple$2[1];
					err$2 = _tuple$2[2];
    					if (ok$1) {
    						if ((pattern.length === 0) && t$1.length > 0) {
  �							i = i + (1) >> 0;
    							continue;
    						}
  �						name = t$1;
  �						continue Pattern;
    					}
    					if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    						_tmp$4 = false;
						_tmp$5 = err$2;
						matched = _tmp$4;
						err = _tmp$5;
						return [matched, err];
    					}
  �					i = i + (1) >> 0;
    				}
    			}
    			_tmp$6 = false;
			_tmp$7 = $ifaceNil;
			matched = _tmp$6;
			err = _tmp$7;
			return [matched, err];
    		}
    		_tmp$8 = name.length === 0;
		_tmp$9 = $ifaceNil;
		matched = _tmp$8;
		err = _tmp$9;
		return [matched, err];
    	};
	$pkg.Match = Match;
Matchpath/filepath.Matchpath/filepath.matchChunkpath/filepath.scanChunkstrings.Contains path/filepath.scanChunkpath/filepath	scanChunk 	scanChunk� 	scanChunk = function(pattern) {
		var _1, _tmp, _tmp$1, _tmp$2, chunk, i, inrange, pattern, rest, star;
		star = false;
		chunk = "";
		rest = "";
  	�		while (true) {
			if (!(pattern.length > 0 && (pattern.charCodeAt(0) === 42))) { break; }
  
%			pattern = $substring(pattern, 1);
  
=			star = true;
    		}
  
M		inrange = false;
  
c		i = 0;
  
t		i = 0;
		Scan:
		while (true) {
			if (!(i < pattern.length)) { break; }
    			_1 = pattern.charCodeAt(i);
    			if (_1 === (92)) {
    				if (true) {
    					if ((i + 1 >> 0) < pattern.length) {
  0						i = i + (1) >> 0;
    					}
    				}
    			} else if (_1 === (91)) {
  N				inrange = true;
    			} else if (_1 === (93)) {
  l				inrange = false;
    			} else if (_1 === (42)) {
    				if (!inrange) {
  �					break Scan;
    				}
    			}
  
�			i = i + (1) >> 0;
    		}
    		_tmp = star;
		_tmp$1 = $substring(pattern, 0, i);
		_tmp$2 = $substring(pattern, i);
		star = _tmp;
		chunk = _tmp$1;
		rest = _tmp$2;
		return [star, chunk, rest];
    	};
	scanChunkpath/filepath.scanChunk path/filepath.matchChunkpath/filepath
matchChunk 
matchChunk�	matchChunk = function(chunk, s) {
		var _1, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, chunk, err, failed, hi, lo, match, n, n$1, negated, nrange, ok, r, rest, s;
		rest = "";
		ok = false;
		err = $ifaceNil;
  �		failed = false;
  �		while (true) {
			if (!(chunk.length > 0)) { break; }
    			if (!failed && (s.length === 0)) {
  �				failed = true;
    			}
    			_1 = chunk.charCodeAt(0);
    			if (_1 === (91)) {
  :				r = 0;
    				if (!failed) {
  Y					n = 0;
  c					_tuple = utf8.DecodeRuneInString(s);
					r = _tuple[0];
					n = _tuple[1];
  �					s = $substring(s, n);
    				}
  �				chunk = $substring(chunk, 1);
  �				negated = false;
    				if (chunk.length > 0 && (chunk.charCodeAt(0) === 94)) {
  					negated = true;
  					chunk = $substring(chunk, 1);
    				}
  J				match = false;
  \				nrange = 0;
  k				while (true) {
    					if (chunk.length > 0 && (chunk.charCodeAt(0) === 93) && nrange > 0) {
  �						chunk = $substring(chunk, 1);
  �						break;
    					}
  �					_tmp = 0;
					_tmp$1 = 0;
					lo = _tmp;
					hi = _tmp$1;
  �					_tuple$1 = getEsc(chunk);
					lo = _tuple$1[0];
					chunk = _tuple$1[1];
					err = _tuple$1[2];
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
    						_tmp$2 = "";
						_tmp$3 = false;
						_tmp$4 = err;
						rest = _tmp$2;
						ok = _tmp$3;
						err = _tmp$4;
						return [rest, ok, err];
    					}
  ?					hi = lo;
    					if (chunk.charCodeAt(0) === 45) {
  h						_tuple$2 = getEsc($substring(chunk, 1));
						hi = _tuple$2[0];
						chunk = _tuple$2[1];
						err = _tuple$2[2];
    						if (!($interfaceIsEqual(err, $ifaceNil))) {
    							_tmp$5 = "";
							_tmp$6 = false;
							_tmp$7 = err;
							rest = _tmp$5;
							ok = _tmp$6;
							err = _tmp$7;
							return [rest, ok, err];
    						}
    					}
    					if (lo <= r && r <= hi) {
  �						match = true;
    					}
  �					nrange = nrange + (1) >> 0;
    				}
    				if (match === negated) {
  %					failed = true;
    				}
    			} else if (_1 === (63)) {
    				if (!failed) {
    					if (s.charCodeAt(0) === 47) {
  u						failed = true;
    					}
  �					_tuple$3 = utf8.DecodeRuneInString(s);
					n$1 = _tuple$3[1];
  �					s = $substring(s, n$1);
    				}
  �				chunk = $substring(chunk, 1);
    			} else if (_1 === (92)) {
    				if (true) {
  					chunk = $substring(chunk, 1);
    					if (chunk.length === 0) {
    						_tmp$8 = "";
						_tmp$9 = false;
						_tmp$10 = $pkg.ErrBadPattern;
						rest = _tmp$8;
						ok = _tmp$9;
						err = _tmp$10;
						return [rest, ok, err];
    					}
    				}
    				if (!failed) {
    					if (!((chunk.charCodeAt(0) === s.charCodeAt(0)))) {
  �						failed = true;
    					}
  �					s = $substring(s, 1);
    				}
  �				chunk = $substring(chunk, 1);
    			} else {
    				if (!failed) {
    					if (!((chunk.charCodeAt(0) === s.charCodeAt(0)))) {
  �						failed = true;
    					}
  �					s = $substring(s, 1);
    				}
  �				chunk = $substring(chunk, 1);
    			}
    		}
    		if (failed) {
    			_tmp$11 = "";
			_tmp$12 = false;
			_tmp$13 = $ifaceNil;
			rest = _tmp$11;
			ok = _tmp$12;
			err = _tmp$13;
			return [rest, ok, err];
    		}
    		_tmp$14 = s;
		_tmp$15 = true;
		_tmp$16 = $ifaceNil;
		rest = _tmp$14;
		ok = _tmp$15;
		err = _tmp$16;
		return [rest, ok, err];
    	};

matchChunkpath/filepath.ErrBadPatternpath/filepath.getEscpath/filepath.matchChunkunicode/utf8.DecodeRuneInString path/filepath.getEscpath/filepathgetEsc getEsc�3	getEsc = function(chunk) {
		var _tuple, chunk, err, n, nchunk, r;
		r = 0;
		nchunk = "";
		err = $ifaceNil;
    		if ((chunk.length === 0) || (chunk.charCodeAt(0) === 45) || (chunk.charCodeAt(0) === 93)) {
   			err = $pkg.ErrBadPattern;
  			return [r, nchunk, err];
    		}
    		if ((chunk.charCodeAt(0) === 92) && true) {
  V			chunk = $substring(chunk, 1);
    			if (chunk.length === 0) {
  �				err = $pkg.ErrBadPattern;
  �				return [r, nchunk, err];
    			}
    		}
  �		_tuple = utf8.DecodeRuneInString(chunk);
		r = _tuple[0];
		n = _tuple[1];
    		if ((r === 65533) && (n === 1)) {
  �			err = $pkg.ErrBadPattern;
    		}
  		nchunk = $substring(chunk, n);
    		if (nchunk.length === 0) {
  9			err = $pkg.ErrBadPattern;
    		}
  Q		return [r, nchunk, err];
    	};
getEscpath/filepath.ErrBadPatternpath/filepath.getEscunicode/utf8.DecodeRuneInString path/filepath.Globpath/filepathGlob Glob�	Glob = function(pattern) {
		var $24r, _i, _r, _r$1, _r$2, _r$3, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, d, dir, err, err$1, file, m, matches, pattern, volumeLen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; d = $f.d; dir = $f.dir; err = $f.err; err$1 = $f.err$1; file = $f.file; m = $f.m; matches = $f.matches; pattern = $f.pattern; volumeLen = $f.volumeLen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		matches = sliceType.nil;
		err = $ifaceNil;
  V		_tuple = Match(pattern, "");
		err$1 = _tuple[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    			_tmp = sliceType.nil;
			_tmp$1 = err$1;
			matches = _tmp;
			err = _tmp$1;
			$s = -1; return [matches, err];
    		}
  �		/* */ if (!hasMeta(pattern)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!hasMeta(pattern)) { */ case 1:
  �			_r = os.Lstat(pattern); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple$1 = _r;
			err = _tuple$1[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				_tmp$2 = sliceType.nil;
				_tmp$3 = $ifaceNil;
				matches = _tmp$2;
				err = _tmp$3;
				$s = -1; return [matches, err];
    			}
    			_tmp$4 = new sliceType([pattern]);
			_tmp$5 = $ifaceNil;
			matches = _tmp$4;
			err = _tmp$5;
			$s = -1; return [matches, err];
    		/* } */ case 2:
  		_tuple$2 = Split(pattern);
		dir = _tuple$2[0];
		file = _tuple$2[1];
  5		volumeLen = 0;
    		if (false) {
  f			_tuple$3 = cleanGlobPathWindows(dir);
			volumeLen = _tuple$3[0];
			dir = _tuple$3[1];
    		} else {
  �			dir = cleanGlobPath(dir);
    		}
  �		/* */ if (!hasMeta($substring(dir, volumeLen))) { $s = 4; continue; }
		/* */ $s = 5; continue;
    		/* if (!hasMeta($substring(dir, volumeLen))) { */ case 4:
    			_r$1 = glob(dir, file, sliceType.nil); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$4 = _r$1;
			matches = _tuple$4[0];
			err = _tuple$4[1];
			$24r = [matches, err];
			$s = 7; case 7: return $24r;
    		/* } */ case 5:
    		if (dir === pattern) {
    			_tmp$6 = sliceType.nil;
			_tmp$7 = $pkg.ErrBadPattern;
			matches = _tmp$6;
			err = _tmp$7;
			$s = -1; return [matches, err];
    		}
  g		m = sliceType.nil;
  s		_r$2 = Glob(dir); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$5 = _r$2;
		m = _tuple$5[0];
		err = _tuple$5[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [matches, err];
    		}
  �		_ref = m;
		_i = 0;
		/* while (true) { */ case 9:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 10; continue; }
			d = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_r$3 = glob(d, file, matches); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_tuple$6 = _r$3;
			matches = _tuple$6[0];
			err = _tuple$6[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				$s = -1; return [matches, err];
    			}
    			_i++;
		$s = 9; continue;
		case 10:
  		$s = -1; return [matches, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Glob }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f.d = d; $f.dir = dir; $f.err = err; $f.err$1 = err$1; $f.file = file; $f.m = m; $f.matches = matches; $f.pattern = pattern; $f.volumeLen = volumeLen; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Glob = Glob;
Glob
os.Lstatpath/filepath.ErrBadPatternpath/filepath.Globpath/filepath.Matchpath/filepath.Splitpath/filepath.cleanGlobPath"path/filepath.cleanGlobPathWindowspath/filepath.globpath/filepath.hasMetapath/filepath.sliceType path/filepath.cleanGlobPathpath/filepathcleanGlobPath cleanGlobPath�	cleanGlobPath = function(path) {
		var _1, path;
    		_1 = path;
    		if (_1 === ("")) {
  �			return ".";
    		} else if (_1 === ("/")) {
  �			return path;
    		} else {
  �			return $substring(path, 0, (path.length - 1 >> 0));
    		}
    	};
cleanGlobPathpath/filepath.cleanGlobPath "path/filepath.cleanGlobPathWindowspath/filepathcleanGlobPathWindows cleanGlobPathWindows�-	cleanGlobPathWindows = function(path) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, cleaned, path, prefixLen, vollen;
		prefixLen = 0;
		cleaned = "";
  �		vollen = volumeNameLen(path);
    		if (path === "") {
    			_tmp = 0;
			_tmp$1 = ".";
			prefixLen = _tmp;
			cleaned = _tmp$1;
			return [prefixLen, cleaned];
    		} else if (((vollen + 1 >> 0) === path.length) && os.IsPathSeparator(path.charCodeAt((path.length - 1 >> 0)))) {
    			_tmp$2 = vollen + 1 >> 0;
			_tmp$3 = path;
			prefixLen = _tmp$2;
			cleaned = _tmp$3;
			return [prefixLen, cleaned];
    		} else if ((vollen === path.length) && (path.length === 2)) {
    			_tmp$4 = vollen;
			_tmp$5 = path + ".";
			prefixLen = _tmp$4;
			cleaned = _tmp$5;
			return [prefixLen, cleaned];
    		} else {
    			if (vollen >= path.length) {
  				vollen = path.length - 1 >> 0;
    			}
    			_tmp$6 = vollen;
			_tmp$7 = $substring(path, 0, (path.length - 1 >> 0));
			prefixLen = _tmp$6;
			cleaned = _tmp$7;
			return [prefixLen, cleaned];
    		}
    	};
cleanGlobPathWindowsos.IsPathSeparator"path/filepath.cleanGlobPathWindowspath/filepath.volumeNameLen path/filepath.globpath/filepathglob glob�	glob = function(dir, pattern, matches) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, _i, _r, _r$1, _r$2, _r$3, _ref, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, d, dir, e, err, err$1, fi, m, matched, matches, n, names, pattern, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; d = $f.d; dir = $f.dir; e = $f.e; err = $f.err; err$1 = $f.err$1; fi = $f.fi; m = $f.m; matched = $f.matched; matches = $f.matches; n = $f.n; names = $f.names; pattern = $f.pattern; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		m = sliceType.nil;
		e = $ifaceNil;
  �		m = matches;
  �		_r = os.Stat(dir); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		fi = _tuple[0];
		err = _tuple[1];
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  �			$24r = [m, e];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  �		_r$1 = fi.IsDir(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		/* */ if (!_r$1) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!_r$1) { */ case 5:
  			$24r$1 = [m, e];
			$s = 8; case 8: return $24r$1;
    		/* } */ case 6:
  '		_r$2 = os.Open(dir); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$1 = _r$2;
		d = _tuple$1[0];
		err = _tuple$1[1];
  ?		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 10; continue; }
		/* */ $s = 11; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 10:
  Q			$24r$2 = [m, e];
			$s = 12; case 12: return $24r$2;
    		/* } */ case 11:
  p		$deferred.push([$methodVal(d, "Close"), []]);
  �		_r$3 = d.Readdirnames(-1); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$2 = _r$3;
		names = _tuple$2[0];
  �		$r = sort.Strings(names); /* */ $s = 14; case 14: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		_ref = names;
		_i = 0;
		/* while (true) { */ case 15:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 16; continue; }
			n = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_tuple$3 = Match(pattern, n);
			matched = _tuple$3[0];
			err$1 = _tuple$3[1];
  �			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 17; continue; }
			/* */ $s = 18; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 17:
    				_tmp = m;
				_tmp$1 = err$1;
				m = _tmp;
				e = _tmp$1;
				$24r$3 = [m, e];
				$s = 19; case 19: return $24r$3;
    			/* } */ case 18:
    			if (matched) {
   /				m = $append(m, Join(new sliceType([dir, n])));
    			}
    			_i++;
		$s = 15; continue;
		case 16:
   S		$24r$4 = [m, e];
		$s = 20; case 20: return $24r$4;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [m, e]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: glob }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.d = d; $f.dir = dir; $f.e = e; $f.err = err; $f.err$1 = err$1; $f.fi = fi; $f.m = m; $f.matched = matched; $f.matches = matches; $f.n = n; $f.names = names; $f.pattern = pattern; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
globos.Openos.Statpath/filepath.Joinpath/filepath.Matchpath/filepath.globpath/filepath.sliceTypesort.Strings path/filepath.hasMetapath/filepathhasMeta hasMeta��	hasMeta = function(path) {
		var magicChars, path;
   �		magicChars = "*?[";
    		if (true) {
  !			magicChars = "*?[\\";
    		}
  !*		return strings.ContainsAny(path, magicChars);
    	};
hasMetapath/filepath.hasMetastrings.ContainsAny (*path/filepath.lazybuf).index �{	lazybuf.ptr.prototype.index = function(i) {
		var b, i, x;
		b = this;
    		if (!(b.buf === sliceType$1.nil)) {
  %_			return (x = b.buf, ((i < 0 || i >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + i]));
    		}
  %s		return b.path.charCodeAt(i);
    	};
	lazybuf.prototype.index = function(i) { return this.$val.index(i); };
lazybufindex~path/filepath.lazybufpath/filepath.sliceType$1 (*path/filepath.lazybuf).append �u	lazybuf.ptr.prototype.append = function(c) {
		var b, c, x, x$1;
		b = this;
    		if (b.buf === sliceType$1.nil) {
    			if (b.w < b.path.length && (b.path.charCodeAt(b.w) === c)) {
  %�				b.w = b.w + (1) >> 0;
  %�				return;
    			}
  &			b.buf = $makeSlice(sliceType$1, b.path.length);
  &'			$copyString(b.buf, $substring(b.path, 0, b.w));
    		}
  &E		(x = b.buf, x$1 = b.w, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1] = c));
  &U		b.w = b.w + (1) >> 0;
    	};
	lazybuf.prototype.append = function(c) { return this.$val.append(c); };
lazybufappend~path/filepath.lazybufpath/filepath.sliceType$1 (*path/filepath.lazybuf).string �h	lazybuf.ptr.prototype.string = function() {
		var b;
		b = this;
    		if (b.buf === sliceType$1.nil) {
  &�			return $substring(b.volAndPath, 0, (b.volLen + b.w >> 0));
    		}
  &�		return $substring(b.volAndPath, 0, b.volLen) + ($bytesToString($subslice(b.buf, 0, b.w)));
    	};
	lazybuf.prototype.string = function() { return this.$val.string(); };
lazybufstring~path/filepath.lazybufpath/filepath.sliceType$1 path/filepath.Cleanpath/filepathClean Clean�5	Clean = function(path) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, dotdot, n, originalPath, out, path, r, rooted, volLen;
  +J		originalPath = path;
  +`		volLen = volumeNameLen(path);
  +		path = $substring(path, volLen);
    		if (path === "") {
    			if (volLen > 1 && !((originalPath.charCodeAt(1) === 58))) {
  +�				return FromSlash(originalPath);
    			}
  ,			return originalPath + ".";
    		}
  ,+		rooted = os.IsPathSeparator(path.charCodeAt(0));
  -S		n = path.length;
  -c		out = new lazybuf.ptr(path, sliceType$1.nil, 0, originalPath, volLen);
  -�		_tmp = 0;
		_tmp$1 = 0;
		r = _tmp;
		dotdot = _tmp$1;
    		if (rooted) {
  -�			out.append(47);
  -�			_tmp$2 = 1;
			_tmp$3 = 1;
			r = _tmp$2;
			dotdot = _tmp$3;
    		}
  -�		while (true) {
			if (!(r < n)) { break; }
    			if (os.IsPathSeparator(path.charCodeAt(r))) {
  .O				r = r + (1) >> 0;
    			} else if ((path.charCodeAt(r) === 46) && (((r + 1 >> 0) === n) || os.IsPathSeparator(path.charCodeAt((r + 1 >> 0))))) {
  .�				r = r + (1) >> 0;
    			} else if ((path.charCodeAt(r) === 46) && (path.charCodeAt((r + 1 >> 0)) === 46) && (((r + 2 >> 0) === n) || os.IsPathSeparator(path.charCodeAt((r + 2 >> 0))))) {
  /8				r = r + (2) >> 0;
    				if (out.w > dotdot) {
  /|					out.w = out.w - (1) >> 0;
  /�					while (true) {
						if (!(out.w > dotdot && !os.IsPathSeparator(out.index(out.w)))) { break; }
  /�						out.w = out.w - (1) >> 0;
    					}
    				} else if (!rooted) {
    					if (out.w > 0) {
  0A						out.append(47);
    					}
  0a					out.append(46);
  0u					out.append(46);
  0�					dotdot = out.w;
    				}
    			} else {
    				if (rooted && !((out.w === 1)) || !rooted && !((out.w === 0))) {
  1					out.append(47);
    				}
  1F				while (true) {
					if (!(r < n && !os.IsPathSeparator(path.charCodeAt(r)))) { break; }
  1}					out.append(path.charCodeAt(r));
  1s					r = r + (1) >> 0;
    				}
    			}
    		}
    		if (out.w === 0) {
  1�			out.append(46);
    		}
  1�		return FromSlash(out.string());
    	};
	$pkg.Clean = Clean;
Clean	os.IsPathSeparatorpath/filepath.Cleanpath/filepath.FromSlashpath/filepath.append~path/filepath.index~path/filepath.lazybufpath/filepath.sliceType$1path/filepath.string~path/filepath.volumeNameLen path/filepath.ToSlashpath/filepathToSlash ToSlash��	ToSlash = function(path) {
		var path;
    		if (true) {
  2�			return path;
    		}
  2�		return strings.ReplaceAll(path, "/", "/");
    	};
	$pkg.ToSlash = ToSlash;
ToSlashpath/filepath.ToSlashstrings.ReplaceAll path/filepath.FromSlashpath/filepath	FromSlash 	FromSlash��	FromSlash = function(path) {
		var path;
    		if (true) {
  4			return path;
    		}
  4*		return strings.ReplaceAll(path, "/", "/");
    	};
	$pkg.FromSlash = FromSlash;
	FromSlashpath/filepath.FromSlashstrings.ReplaceAll path/filepath.SplitListpath/filepath	SplitList 	SplitListo	SplitList = function(path) {
		var path;
  5n		return splitList(path);
    	};
	$pkg.SplitList = SplitList;
	SplitListpath/filepath.SplitListpath/filepath.splitList path/filepath.Splitpath/filepathSplit Split��	Split = function(path) {
		var _tmp, _tmp$1, dir, file, i, path, vol;
		dir = "";
		file = "";
  6�		vol = VolumeName(path);
  6�		i = path.length - 1 >> 0;
  6�		while (true) {
			if (!(i >= vol.length && !os.IsPathSeparator(path.charCodeAt(i)))) { break; }
  7,			i = i - (1) >> 0;
    		}
    		_tmp = $substring(path, 0, (i + 1 >> 0));
		_tmp$1 = $substring(path, (i + 1 >> 0));
		dir = _tmp;
		file = _tmp$1;
		return [dir, file];
    	};
	$pkg.Split = Split;
Splitos.IsPathSeparatorpath/filepath.Splitpath/filepath.VolumeName path/filepath.Joinpath/filepathJoin Join[	Join = function(elem) {
		var elem;
  8�		return join(elem);
    	};
	$pkg.Join = Join;
Joinpath/filepath.Joinpath/filepath.join path/filepath.Extpath/filepathExt Ext�H	Ext = function(path) {
		var i, path;
  9�		i = path.length - 1 >> 0;
		while (true) {
			if (!(i >= 0 && !os.IsPathSeparator(path.charCodeAt(i)))) { break; }
    			if (path.charCodeAt(i) === 46) {
  :3				return $substring(path, i);
    			}
  :			i = i - (1) >> 0;
    		}
  :K		return "";
    	};
	$pkg.Ext = Ext;
Extos.IsPathSeparatorpath/filepath.Ext path/filepath.EvalSymlinkspath/filepathEvalSymlinks EvalSymlinks��	EvalSymlinks = function(path) {
		var $24r, _r, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ;�		_r = evalSymlinks(path); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: EvalSymlinks }; } $f.$24r = $24r; $f._r = _r; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.EvalSymlinks = EvalSymlinks;
EvalSymlinkspath/filepath.EvalSymlinkspath/filepath.evalSymlinks path/filepath.Abspath/filepathAbs Abs�l	Abs = function(path) {
		var $24r, _r, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  <�		_r = abs(path); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Abs }; } $f.$24r = $24r; $f._r = _r; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Abs = Abs;
Abspath/filepath.Abspath/filepath.abs path/filepath.unixAbspath/filepathunixAbs unixAbs��	unixAbs = function(path) {
		var _r, _tuple, err, path, wd, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; path = $f.path; wd = $f.wd; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (IsAbs(path)) {
  =H			$s = -1; return [Clean(path), $ifaceNil];
    		}
  =d		_r = os.Getwd(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		wd = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  =�			$s = -1; return ["", err];
    		}
  =�		$s = -1; return [Join(new sliceType([wd, path])), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: unixAbs }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.path = path; $f.wd = wd; $f.$s = $s; $f.$r = $r; return $f;
	};
unixAbsos.Getwdpath/filepath.Cleanpath/filepath.IsAbspath/filepath.Joinpath/filepath.sliceTypepath/filepath.unixAbs path/filepath.Relpath/filepathRel Rel�	Rel = function(basepath, targpath) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, b0, base, baseSlashed, baseVol, basepath, bi, bl, buf, i, n, seps, size, t0, targ, targSlashed, targVol, targpath, ti, tl;
  @		baseVol = VolumeName(basepath);
  @"		targVol = VolumeName(targpath);
  @C		base = Clean(basepath);
  @\		targ = Clean(targpath);
    		if (sameWord(targ, base)) {
  @�			return [".", $ifaceNil];
    		}
  @�		base = $substring(base, baseVol.length);
  @�		targ = $substring(targ, targVol.length);
    		if (base === ".") {
  @�			base = "";
    		} else if (base === "" && volumeNameLen(baseVol) > 2) {
  A�			base = "/";
    		}
  A�		baseSlashed = base.length > 0 && (base.charCodeAt(0) === 47);
  B 		targSlashed = targ.length > 0 && (targ.charCodeAt(0) === 47);
    		if (!(baseSlashed === targSlashed) || !sameWord(baseVol, targVol)) {
  B�			return ["", errors.New("Rel: can't make " + targpath + " relative to " + basepath)];
    		}
  C7		bl = base.length;
  CH		tl = targ.length;
  C]		_tmp = 0;
		_tmp$1 = 0;
		_tmp$2 = 0;
		_tmp$3 = 0;
		b0 = _tmp;
		bi = _tmp$1;
		t0 = _tmp$2;
		ti = _tmp$3;
  Cq		while (true) {
  Cy			while (true) {
				if (!(bi < bl && !((base.charCodeAt(bi) === 47)))) { break; }
  C�				bi = bi + (1) >> 0;
    			}
  C�			while (true) {
				if (!(ti < tl && !((targ.charCodeAt(ti) === 47)))) { break; }
  C�				ti = ti + (1) >> 0;
    			}
    			if (!sameWord($substring(targ, t0, ti), $substring(base, b0, bi))) {
  D				break;
    			}
    			if (bi < bl) {
  D+				bi = bi + (1) >> 0;
    			}
    			if (ti < tl) {
  DF				ti = ti + (1) >> 0;
    			}
  DQ			b0 = bi;
  D[			t0 = ti;
    		}
    		if ($substring(base, b0, bi) === "..") {
  D�			return ["", errors.New("Rel: can't make " + targpath + " relative to " + basepath)];
    		}
    		if (!((b0 === bl))) {
  E			seps = strings.Count($substring(base, b0, bl), "/");
  EW			size = 2 + ($imul(seps, 3)) >> 0;
    			if (!((tl === t0))) {
  E}				size = size + (((1 + tl >> 0) - t0 >> 0)) >> 0;
    			}
  E�			buf = $makeSlice(sliceType$1, size);
  E�			n = $copyString(buf, "..");
  E�			i = 0;
			while (true) {
				if (!(i < seps)) { break; }
  E�				((n < 0 || n >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + n] = 47);
  E�				$copyString($subslice(buf, (n + 1 >> 0)), "..");
  F				n = n + (3) >> 0;
  E�				i = i + (1) >> 0;
    			}
    			if (!((t0 === tl))) {
  F6				((n < 0 || n >= buf.$length) ? ($throwRuntimeError("index out of range"), undefined) : buf.$array[buf.$offset + n] = 47);
  FL				$copyString($subslice(buf, (n + 1 >> 0)), $substring(targ, t0));
    			}
  Fm			return [($bytesToString(buf)), $ifaceNil];
    		}
  F�		return [$substring(targ, t0), $ifaceNil];
    	};
	$pkg.Rel = Rel;
Rel
errors.Newpath/filepath.Cleanpath/filepath.Relpath/filepath.VolumeNamepath/filepath.sameWordpath/filepath.sliceType$1path/filepath.volumeNameLenstrings.Count path/filepath.walkDirpath/filepathwalkDir walkDir��	walkDir = function(path, d, walkDirFn) {
		var _arg, _arg$1, _i, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _ref, _tuple, _v, _v$1, d, d1, dirs, err, err$1, err$2, path, path1, walkDirFn, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _ref = $f._ref; _tuple = $f._tuple; _v = $f._v; _v$1 = $f._v$1; d = $f.d; d1 = $f.d1; dirs = $f.dirs; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; path = $f.path; path1 = $f.path1; walkDirFn = $f.walkDirFn; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  OV		_r = walkDirFn(path, d, $ifaceNil); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
  OS		if (!($interfaceIsEqual(err, $ifaceNil))) { _v = true; $s = 4; continue s; }
		_r$1 = d.IsDir(); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_v = !_r$1; case 4:
		/* */ if (_v) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_v) { */ case 2:
  O�			if (!($interfaceIsEqual(err, $pkg.SkipDir))) { _v$1 = false; $s = 8; continue s; }
			_r$2 = d.IsDir(); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_v$1 = _r$2; case 8:
			/* */ if (_v$1) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (_v$1) { */ case 6:
  O�				err = $ifaceNil;
    			/* } */ case 7:
  O�			$s = -1; return err;
    		/* } */ case 3:
  O�		_r$3 = readDir(path); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple = _r$3;
		dirs = _tuple[0];
		err$1 = _tuple[1];
  P		/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 11; continue; }
		/* */ $s = 12; continue;
    		/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 11:
  PV			_r$4 = walkDirFn(path, d, err$1); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			err$1 = _r$4;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  P�				$s = -1; return err$1;
    			}
    		/* } */ case 12:
  P�		_ref = dirs;
		_i = 0;
		/* while (true) { */ case 14:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 15; continue; }
			d1 = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  P�			_arg = path;
			_r$5 = d1.Name(); /* */ $s = 16; case 16: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_arg$1 = _r$5;
			_r$6 = Join(new sliceType([_arg, _arg$1])); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			path1 = _r$6;
  P�			_r$7 = walkDir(path1, d1, walkDirFn); /* */ $s = 18; case 18: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			err$2 = _r$7;
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    				if ($interfaceIsEqual(err$2, $pkg.SkipDir)) {
  Q+					/* break; */ $s = 15; continue;
    				}
  Q9				$s = -1; return err$2;
    			}
    			_i++;
		$s = 14; continue;
		case 15:
  QL		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: walkDir }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._ref = _ref; $f._tuple = _tuple; $f._v = _v; $f._v$1 = _v$1; $f.d = d; $f.d1 = d1; $f.dirs = dirs; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.path = path; $f.path1 = path1; $f.walkDirFn = walkDirFn; $f.$s = $s; $f.$r = $r; return $f;
	};
walkDirpath/filepath.Joinpath/filepath.SkipDirpath/filepath.readDirpath/filepath.sliceTypepath/filepath.walkDir path/filepath.walkpath/filepathwalk walk��	walk = function(path, info, walkFn) {
		var $24r, _i, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _ref, _tuple, _tuple$1, err, err$1, err$2, err1, fileInfo, filename, info, name, names, path, walkFn, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err1 = $f.err1; fileInfo = $f.fileInfo; filename = $f.filename; info = $f.info; name = $f.name; names = $f.names; path = $f.path; walkFn = $f.walkFn; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Q�		_r = info.IsDir(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!_r) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!_r) { */ case 1:
  Q�			_r$1 = walkFn(path, info, $ifaceNil); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 2:
  R			_r$2 = readDirNames(path); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		names = _tuple[0];
		err = _tuple[1];
  R+		_r$3 = walkFn(path, info, err); /* */ $s = 7; case 7: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		err1 = _r$3;
    		if (!($interfaceIsEqual(err, $ifaceNil)) || !($interfaceIsEqual(err1, $ifaceNil))) {
  T2			$s = -1; return err1;
    		}
  TC		_ref = names;
		_i = 0;
		/* while (true) { */ case 8:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 9; continue; }
			name = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  Tb			filename = Join(new sliceType([path, name]));
  T�			_r$4 = lstat(filename); /* */ $s = 10; case 10: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple$1 = _r$4;
			fileInfo = _tuple$1[0];
			err$1 = _tuple$1[1];
  T�			/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 11; continue; }
			/* */ $s = 12; continue;
    			/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 11:
  T�				_r$5 = walkFn(filename, fileInfo, err$1); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				err$2 = _r$5;
    				if (!($interfaceIsEqual(err$2, $ifaceNil)) && !($interfaceIsEqual(err$2, $pkg.SkipDir))) {
  U					$s = -1; return err$2;
    				}
    				$s = 13; continue;
			/* } else { */ case 12:
  U#				_r$6 = walk(filename, fileInfo, walkFn); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				err$1 = _r$6;
  UM				/* */ if (!($interfaceIsEqual(err$1, $ifaceNil))) { $s = 16; continue; }
				/* */ $s = 17; continue;
    				/* if (!($interfaceIsEqual(err$1, $ifaceNil))) { */ case 16:
  Ua					_r$7 = fileInfo.IsDir(); /* */ $s = 20; case 20: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
					/* */ if (!_r$7 || !($interfaceIsEqual(err$1, $pkg.SkipDir))) { $s = 18; continue; }
					/* */ $s = 19; continue;
    					/* if (!_r$7 || !($interfaceIsEqual(err$1, $pkg.SkipDir))) { */ case 18:
  U�						$s = -1; return err$1;
    					/* } */ case 19:
    				/* } */ case 17:
    			/* } */ case 13:
    			_i++;
		$s = 8; continue;
		case 9:
  U�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: walk }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err1 = err1; $f.fileInfo = fileInfo; $f.filename = filename; $f.info = info; $f.name = name; $f.names = names; $f.path = path; $f.walkFn = walkFn; $f.$s = $s; $f.$r = $r; return $f;
	};
walkpath/filepath.Joinpath/filepath.SkipDirpath/filepath.lstatpath/filepath.readDirNamespath/filepath.sliceTypepath/filepath.walk path/filepath.WalkDirpath/filepathWalkDir WalkDir� 	WalkDir = function(root, fn) {
		var _r, _r$1, _r$2, _tuple, err, fn, info, root, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; err = $f.err; fn = $f.fn; info = $f.info; root = $f.root; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  W�		_r = os.Lstat(root); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		info = _tuple[0];
		err = _tuple[1];
  W�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  X			_r$1 = fn(root, $ifaceNil, err); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err = _r$1;
    			$s = 4; continue;
		/* } else { */ case 3:
  X+			_r$2 = walkDir(root, new statDirEntry.ptr(info), fn); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err = _r$2;
    		/* } */ case 4:
    		if ($interfaceIsEqual(err, $pkg.SkipDir)) {
  Xr			$s = -1; return $ifaceNil;
    		}
  X�		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WalkDir }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.err = err; $f.fn = fn; $f.info = info; $f.root = root; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.WalkDir = WalkDir;
WalkDiros.Lstatpath/filepath.SkipDirpath/filepath.WalkDirpath/filepath.statDirEntrypath/filepath.walkDir "(*path/filepath.statDirEntry).Name ��	statDirEntry.ptr.prototype.Name = function() {
		var $24r, _r, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  X�		_r = d.info.Name(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: statDirEntry.ptr.prototype.Name }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	statDirEntry.prototype.Name = function() { return this.$val.Name(); };
statDirEntrypath/filepath.statDirEntry #(*path/filepath.statDirEntry).IsDir ��	statDirEntry.ptr.prototype.IsDir = function() {
		var $24r, _r, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  Y@		_r = d.info.IsDir(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: statDirEntry.ptr.prototype.IsDir }; } $f.$24r = $24r; $f._r = _r; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	statDirEntry.prototype.IsDir = function() { return this.$val.IsDir(); };
statDirEntrypath/filepath.statDirEntry "(*path/filepath.statDirEntry).Type ��	statDirEntry.ptr.prototype.Type = function() {
		var $24r, _r, _r$1, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  Y�		_r = d.info.Mode(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = new fs.FileMode(_r).Type(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: statDirEntry.ptr.prototype.Type }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	statDirEntry.prototype.Type = function() { return this.$val.Type(); };
statDirEntryio/fs.FileModepath/filepath.statDirEntry "(*path/filepath.statDirEntry).Info ��	statDirEntry.ptr.prototype.Info = function() {
		var d;
		d = this;
  Y�		return [d.info, $ifaceNil];
    	};
	statDirEntry.prototype.Info = function() { return this.$val.Info(); };
statDirEntrypath/filepath.statDirEntry path/filepath.Walkpath/filepathWalk Walk��	Walk = function(root, fn) {
		var _r, _r$1, _r$2, _tuple, err, fn, info, root, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; err = $f.err; fn = $f.fn; info = $f.info; root = $f.root; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  \�		_r = os.Lstat(root); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		info = _tuple[0];
		err = _tuple[1];
  \�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  \�			_r$1 = fn(root, $ifaceNil, err); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err = _r$1;
    			$s = 4; continue;
		/* } else { */ case 3:
  \�			_r$2 = walk(root, info, fn); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err = _r$2;
    		/* } */ case 4:
    		if ($interfaceIsEqual(err, $pkg.SkipDir)) {
  ]
			$s = -1; return $ifaceNil;
    		}
  ]		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Walk }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f.err = err; $f.fn = fn; $f.info = info; $f.root = root; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Walk = Walk;
Walkos.Lstatpath/filepath.SkipDirpath/filepath.Walkpath/filepath.walk path/filepath.readDirpath/filepathreadDir readDir�
�	readDir = function(dirname) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, dirname, dirs, err, f, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dirname = $f.dirname; dirs = $f.dirs; err = $f.err; f = $f.f; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		dirs = [dirs];
  ]�		_r = os.Open(dirname); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ]�			$s = -1; return [sliceType$2.nil, err];
    		}
  ^		_r$1 = f.ReadDir(-1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		dirs[0] = _tuple$1[0];
		err = _tuple$1[1];
  ^		_r$2 = f.Close(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  ^<			$s = -1; return [sliceType$2.nil, err];
    		}
  ^P		$r = sort.Slice(dirs[0], (function(dirs) { return function $b(i, j) {
			var $24r, _r$3, _r$4, i, j, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$3 = $f._r$3; _r$4 = $f._r$4; i = $f.i; j = $f.j; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ^w			_r$3 = ((i < 0 || i >= dirs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : dirs[0].$array[dirs[0].$offset + i]).Name(); /* */ $s = 1; case 1: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$4 = ((j < 0 || j >= dirs[0].$length) ? ($throwRuntimeError("index out of range"), undefined) : dirs[0].$array[dirs[0].$offset + j]).Name(); /* */ $s = 2; case 2: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			$24r = _r$3 < _r$4;
			$s = 3; case 3: return $24r;
    			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$24r = $24r; $f._r$3 = _r$3; $f._r$4 = _r$4; $f.i = i; $f.j = j; $f.$s = $s; $f.$r = $r; return $f;
		}; })(dirs)); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ^�		$s = -1; return [dirs[0], $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readDir }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dirname = dirname; $f.dirs = dirs; $f.err = err; $f.f = f; $f.$s = $s; $f.$r = $r; return $f;
	};
readDirio/fs.DirEntryos.Openpath/filepath.readDirpath/filepath.sliceType$2
sort.Slice path/filepath.readDirNamespath/filepathreadDirNames readDirNames�s	readDirNames = function(dirname) {
		var _r, _r$1, _r$2, _tuple, _tuple$1, dirname, err, f, names, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dirname = $f.dirname; err = $f.err; f = $f.f; names = $f.names; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  _Y		_r = os.Open(dirname); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  _�			$s = -1; return [sliceType.nil, err];
    		}
  _�		_r$1 = f.Readdirnames(-1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		names = _tuple$1[0];
		err = _tuple$1[1];
  _�		_r$2 = f.Close(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$2;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  _�			$s = -1; return [sliceType.nil, err];
    		}
  _�		$r = sort.Strings(names); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  `		$s = -1; return [names, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readDirNames }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dirname = dirname; $f.err = err; $f.f = f; $f.names = names; $f.$s = $s; $f.$r = $r; return $f;
	};
readDirNamesos.Openpath/filepath.readDirNamespath/filepath.sliceTypesort.Strings path/filepath.Basepath/filepathBase Base��	Base = function(path) {
		var i, path;
    		if (path === "") {
  a=			return ".";
    		}
  ah		while (true) {
			if (!(path.length > 0 && os.IsPathSeparator(path.charCodeAt((path.length - 1 >> 0))))) { break; }
  a�			path = $substring(path, 0, (path.length - 1 >> 0));
    		}
  a�		path = $substring(path, VolumeName(path).length);
  b"		i = path.length - 1 >> 0;
  b6		while (true) {
			if (!(i >= 0 && !os.IsPathSeparator(path.charCodeAt(i)))) { break; }
  be			i = i - (1) >> 0;
    		}
    		if (i >= 0) {
  b{			path = $substring(path, (i + 1 >> 0));
    		}
    		if (path === "") {
  b�			return "/";
    		}
  b�		return path;
    	};
	$pkg.Base = Base;
Baseos.IsPathSeparatorpath/filepath.Basepath/filepath.VolumeName path/filepath.Dirpath/filepathDir Dir��	Dir = function(path) {
		var dir, i, path, vol;
  d�		vol = VolumeName(path);
  d�		i = path.length - 1 >> 0;
  d�		while (true) {
			if (!(i >= vol.length && !os.IsPathSeparator(path.charCodeAt(i)))) { break; }
  d�			i = i - (1) >> 0;
    		}
  e		dir = Clean($substring(path, vol.length, (i + 1 >> 0)));
    		if (dir === "." && vol.length > 2) {
  e[			return vol;
    		}
  ej		return vol + dir;
    	};
	$pkg.Dir = Dir;
Diros.IsPathSeparatorpath/filepath.Cleanpath/filepath.Dirpath/filepath.VolumeName path/filepath.VolumeNamepath/filepath
VolumeName 
VolumeName��	VolumeName = function(path) {
		var path;
  f^		return $substring(path, 0, volumeNameLen(path));
    	};
	$pkg.VolumeName = VolumeName;

VolumeNamepath/filepath.VolumeNamepath/filepath.volumeNameLen path/filepath.IsAbspath/filepathIsAbs IsAbsp	IsAbs = function(path) {
		var path;
  hM		return strings.HasPrefix(path, "/");
    	};
	$pkg.IsAbs = IsAbs;
IsAbspath/filepath.IsAbsstrings.HasPrefix path/filepath.volumeNameLenpath/filepathvolumeNameLen volumeNameLenH	volumeNameLen = function(path) {
		var path;
  h�		return 0;
    	};
volumeNameLenpath/filepath.volumeNameLen path/filepath.HasPrefixpath/filepath	HasPrefix 	HasPrefix��	HasPrefix = function(p, prefix) {
		var p, prefix;
  i�		return strings.HasPrefix(p, prefix);
    	};
	$pkg.HasPrefix = HasPrefix;
	HasPrefixpath/filepath.HasPrefixstrings.HasPrefix path/filepath.splitListpath/filepath	splitList 	splitList��	splitList = function(path) {
		var path;
    		if (path === "") {
  jD			return new sliceType([]);
    		}
  jZ		return strings.Split(path, ":");
    	};
	splitListpath/filepath.sliceTypepath/filepath.splitListstrings.Split path/filepath.abspath/filepathabs abs�_	abs = function(path) {
		var $24r, _r, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  j�		_r = unixAbs(path); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: abs }; } $f.$24r = $24r; $f._r = _r; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
abspath/filepath.abspath/filepath.unixAbs path/filepath.joinpath/filepathjoin join��	join = function(elem) {
		var _i, _ref, e, elem, i;
  k4		_ref = elem;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i = _i;
			e = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if (!(e === "")) {
  k_				return Clean(strings.Join($subslice(elem, i), "/"));
    			}
    			_i++;
		}
  k�		return "";
    	};
joinpath/filepath.Cleanpath/filepath.joinstrings.Join path/filepath.sameWordpath/filepathsameWord sameWordI	sameWord = function(a, b) {
		var a, b;
  k�		return a === b;
    	};
sameWordpath/filepath.sameWord path/filepath.walkSymlinkspath/filepathwalkSymlinks walkSymlinks�~	walkSymlinks = function(path) {
		var _r, _r$1, _r$2, _r$3, _r$4, _tmp, _tmp$1, _tuple, _tuple$1, dest, end, err, fi, isWindowsDot, link, linksWalked, path, pathSeparator, r, r$1, start, v, vol, volLen, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dest = $f.dest; end = $f.end; err = $f.err; fi = $f.fi; isWindowsDot = $f.isWindowsDot; link = $f.link; linksWalked = $f.linksWalked; path = $f.path; pathSeparator = $f.pathSeparator; r = $f.r; r$1 = $f.r$1; start = $f.start; v = $f.v; vol = $f.vol; volLen = $f.volLen; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  l�		volLen = volumeNameLen(path);
  m		pathSeparator = "/";
    		if (volLen < path.length && os.IsPathSeparator(path.charCodeAt(volLen))) {
  m�			volLen = volLen + (1) >> 0;
    		}
  m�		vol = $substring(path, 0, volLen);
  m�		dest = vol;
  m�		linksWalked = 0;
  m�		_tmp = volLen;
		_tmp$1 = volLen;
		start = _tmp;
		end = _tmp$1;
		/* while (true) { */ case 1:
			/* if (!(start < path.length)) { break; } */ if(!(start < path.length)) { $s = 2; continue; }
  n			while (true) {
				if (!(start < path.length && os.IsPathSeparator(path.charCodeAt(start)))) { break; }
  nM				start = start + (1) >> 0;
    			}
  n[			end = start;
  ni			while (true) {
				if (!(end < path.length && !os.IsPathSeparator(path.charCodeAt(end)))) { break; }
  n�				end = end + (1) >> 0;
    			}
  o2			isWindowsDot = false && $substring(path, volumeNameLen(path)) === ".";
    			if (end === start) {
  o�				/* break; */ $s = 2; continue;
    			} else if ($substring(path, start, end) === "." && !isWindowsDot) {
  m�				start = end;
				/* continue; */ $s = 1; continue;
    			} else if ($substring(path, start, end) === "..") {
  q3				r = 0;
  q@				r = dest.length - 1 >> 0;
				while (true) {
					if (!(r >= volLen)) { break; }
    					if (os.IsPathSeparator(dest.charCodeAt(r))) {
  q�						break;
    					}
  q`					r = r - (1) >> 0;
    				}
    				if (r < volLen || $substring(dest, (r + 1 >> 0)) === "..") {
    					if (dest.length > volLen) {
  r}						dest = dest + (pathSeparator);
    					}
  r�					dest = dest + ("..");
    				} else {
  r�					dest = $substring(dest, 0, r);
    				}
  m�				start = end;
				/* continue; */ $s = 1; continue;
    			}
    			if (dest.length > volumeNameLen(dest) && !os.IsPathSeparator(dest.charCodeAt((dest.length - 1 >> 0)))) {
  s�				dest = dest + (pathSeparator);
    			}
  s�			dest = dest + ($substring(path, start, end));
  s�			_r = os.Lstat(dest); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			fi = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  t				$s = -1; return ["", err];
    			}
  t)			_r$1 = fi.Mode(); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* */ if (((_r$1 & 134217728) >>> 0) === 0) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (((_r$1 & 134217728) >>> 0) === 0) { */ case 4:
  tO				_r$2 = fi.Mode(); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$3 = new fs.FileMode(_r$2).IsDir(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				/* */ if (!_r$3 && end < path.length) { $s = 7; continue; }
				/* */ $s = 8; continue;
    				/* if (!_r$3 && end < path.length) { */ case 7:
  t~					$s = -1; return ["", new syscall.Errno(20)];
    				/* } */ case 8:
  m�				start = end;
				/* continue; */ $s = 1; continue;
    			/* } */ case 5:
  t�			linksWalked = linksWalked + (1) >> 0;
    			if (linksWalked > 255) {
  t�				$s = -1; return ["", errors.New("EvalSymlinks: too many links")];
    			}
  u-			_r$4 = os.Readlink(dest); /* */ $s = 11; case 11: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple$1 = _r$4;
			link = _tuple$1[0];
			err = _tuple$1[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  ua				$s = -1; return ["", err];
    			}
    			if (isWindowsDot && !IsAbs(link)) {
  u�				/* break; */ $s = 2; continue;
    			}
  u�			path = link + $substring(path, end);
  v			v = volumeNameLen(link);
    			if (v > 0) {
    				if (v < link.length && os.IsPathSeparator(link.charCodeAt(v))) {
  v�					v = v + (1) >> 0;
    				}
  v�				vol = $substring(link, 0, v);
  v�				dest = vol;
  v�				end = vol.length;
    			} else if (link.length > 0 && os.IsPathSeparator(link.charCodeAt(0))) {
  w5				dest = $substring(link, 0, 1);
  wH				end = 1;
    			} else {
  w�				r$1 = 0;
  w�				r$1 = dest.length - 1 >> 0;
				while (true) {
					if (!(r$1 >= volLen)) { break; }
    					if (os.IsPathSeparator(dest.charCodeAt(r$1))) {
  x
						break;
    					}
  w�					r$1 = r$1 - (1) >> 0;
    				}
    				if (r$1 < volLen) {
  x2					dest = vol;
    				} else {
  xM					dest = $substring(dest, 0, r$1);
    				}
  xe				end = 0;
    			}
  m�			start = end;
		$s = 1; continue;
		case 2:
  xu		$s = -1; return [Clean(dest), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: walkSymlinks }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dest = dest; $f.end = end; $f.err = err; $f.fi = fi; $f.isWindowsDot = isWindowsDot; $f.link = link; $f.linksWalked = linksWalked; $f.path = path; $f.pathSeparator = pathSeparator; $f.r = r; $f.r$1 = r$1; $f.start = start; $f.v = v; $f.vol = vol; $f.volLen = volLen; $f.$s = $s; $f.$r = $r; return $f;
	};
walkSymlinks

errors.Newio/fs.FileModeos.IsPathSeparatoros.Lstatos.Readlinkpath/filepath.Cleanpath/filepath.IsAbspath/filepath.volumeNameLenpath/filepath.walkSymlinkssyscall.Errno path/filepath.evalSymlinkspath/filepathevalSymlinks evalSymlinks�v	evalSymlinks = function(path) {
		var $24r, _r, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  x�		_r = walkSymlinks(path); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: evalSymlinks }; } $f.$24r = $24r; $f._r = _r; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
evalSymlinkspath/filepath.evalSymlinkspath/filepath.walkSymlinks ��{"Base":31001,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/path/filepath/match.go","Base":1,"Size":8536,"Lines":[0,55,109,159,160,177,178,187,197,203,214,222,233,249,251,252,304,362,363,430,456,459,471,484,493,558,617,657,709,772,808,811,831,889,925,979,982,1052,1119,1136,1139,1204,1223,1226,1287,1296,1320,1336,1355,1399,1426,1485,1543,1547,1588,1628,1693,1763,1783,1830,1842,1854,1858,1876,1897,1901,1913,1954,1975,2035,2083,2095,2160,2202,2217,2224,2238,2260,2266,2286,2309,2315,2320,2324,2344,2347,2375,2377,2378,2452,2484,2549,2594,2618,2632,2635,2653,2664,2670,2706,2728,2741,2775,2830,2858,2867,2873,2878,2890,2908,2920,2939,2951,2968,2983,2988,2992,2995,3035,3037,3038,3101,3160,3235,3304,3353,3420,3490,3507,3529,3559,3576,3580,3600,3612,3634,3648,3664,3678,3716,3730,3735,3756,3779,3799,3841,3860,3882,3887,3910,3928,3943,3952,4009,4032,4043,4049,4069,4121,4148,4154,4166,4191,4248,4276,4283,4289,4317,4335,4341,4354,4359,4384,4402,4407,4408,4420,4436,4463,4482,4488,4527,4541,4546,4567,4568,4581,4615,4637,4662,4699,4705,4710,4725,4726,4737,4753,4779,4798,4804,4818,4823,4844,4848,4851,4864,4888,4891,4912,4914,4915,4994,5057,5117,5139,5148,5151,5203,5223,5246,5269,5279,5283,5286,5326,5362,5384,5387,5407,5430,5452,5455,5463,5465,5466,5529,5597,5665,5715,5718,5793,5860,5877,5935,5969,6016,6034,6037,6061,6107,6126,6130,6162,6165,6166,6195,6211,6243,6288,6298,6325,6328,6329,6361,6391,6394,6395,6444,6465,6493,6496,6497,6513,6533,6550,6559,6562,6585,6625,6643,6653,6657,6660,6668,6670,6671,6721,6762,6777,6787,6800,6825,6853,6867,6877,6939,6942,6944,6945,7006,7079,7110,7120,7138,7154,7245,7273,7299,7350,7401,7411,7438,7464,7468,7538,7541,7543,7544,7609,7668,7728,7763,7836,7849,7874,7891,7920,7923,7941,7970,7973,7997,8014,8043,8046,8063,8064,8096,8117,8118,8145,8181,8199,8216,8220,8235,8266,8270,8273,8281,8283,8284,8353,8377,8410,8431,8463,8485,8488,8534],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/path/filepath/path.go","Base":8538,"Size":17704,"Lines":[0,55,109,159,160,240,316,319,387,455,518,551,568,569,578,588,597,603,611,622,624,625,675,733,799,856,878,897,916,932,951,967,969,970,1008,1027,1045,1048,1066,1068,1069,1104,1123,1168,1177,1187,1191,1227,1255,1258,1274,1281,1283,1284,1320,1339,1376,1379,1433,1435,1436,1444,1478,1516,1518,1519,1578,1642,1698,1701,1762,1828,1899,1953,2007,2071,2104,2107,2184,2228,2231,2295,2298,2357,2384,2387,2443,2471,2510,2543,2565,2596,2618,2635,2679,2699,2733,2737,2765,2768,2807,2808,2824,2883,2937,2999,3064,3080,3150,3169,3182,3206,3225,3228,3229,3242,3253,3289,3314,3321,3391,3407,3414,3504,3547,3557,3569,3593,3614,3626,3692,3705,3711,3728,3791,3810,3837,3843,3863,3883,3902,3907,3918,3943,3969,4023,4049,4054,4073,4127,4151,4156,4160,4163,4164,4195,4212,4230,4233,4234,4266,4268,4269,4337,4402,4435,4470,4493,4507,4510,4567,4569,4570,4642,4711,4738,4775,4798,4812,4815,4872,4874,4875,4952,5010,5089,5100,5139,5163,5165,5166,5230,5289,5353,5378,5441,5486,5511,5531,5584,5590,5593,5624,5626,5627,5689,5754,5818,5879,5899,5962,5998,6033,6052,6054,6055,6108,6166,6223,6234,6265,6336,6358,6377,6381,6384,6395,6397,6398,6473,6483,6560,6622,6665,6714,6741,6743,6744,6795,6861,6929,6991,7025,7065,7083,7085,7086,7130,7148,7174,7177,7200,7217,7234,7237,7265,7267,7268,7345,7407,7484,7554,7606,7683,7758,7792,7846,7879,7912,7937,7962,7989,8007,8010,8038,8066,8084,8096,8162,8239,8266,8269,8270,8335,8389,8443,8507,8591,8594,8668,8685,8702,8726,8733,8774,8782,8786,8827,8835,8839,8882,8891,8895,8910,8918,8922,8937,8945,8949,8959,8969,8972,8998,9082,9085,9100,9155,9211,9232,9248,9271,9275,9303,9326,9356,9378,9403,9413,9417,9433,9455,9485,9489,9515,9518,9541,9543,9544,9613,9685,9717,9748,9749,9818,9840,9843,9907,9979,10049,10070,10073,10141,10212,10284,10338,10341,10401,10404,10478,10547,10616,10690,10737,10740,10814,10883,10952,10999,11002,11071,11074,11146,11214,11285,11303,11306,11376,11443,11514,11531,11598,11599,11635,11636,11693,11768,11831,11866,11904,11917,11921,11934,11937,11938,11966,11983,12026,12058,12076,12090,12094,12097,12098,12125,12158,12214,12237,12247,12252,12266,12270,12273,12285,12287,12288,12339,12405,12425,12458,12461,12462,12496,12529,12585,12664,12731,12763,12842,12896,12962,13014,13028,13031,13032,13062,13093,13128,13146,13223,13238,13243,13254,13296,13315,13360,13376,13382,13387,13391,13394,13406,13408,13409,13484,13526,13529,13605,13658,13661,13740,13822,13849,13852,13895,13948,13977,13994,14021,14031,14078,14081,14102,14115,14118,14130,14132,14133,14160,14178,14180,14181,14257,14334,14417,14491,14492,14564,14606,14609,14685,14732,14735,14814,14893,14920,14923,14963,14966,15029,15098,15142,15171,15188,15215,15225,15254,15257,15278,15291,15294,15306,15308,15309,15369,15408,15462,15490,15507,15525,15528,15556,15567,15584,15602,15605,15687,15705,15707,15708,15773,15816,15870,15898,15915,15933,15936,15970,15981,15998,16016,16019,16040,16059,16061,16062,16104,16180,16223,16304,16336,16353,16366,16369,16397,16459,16490,16493,16520,16557,16583,16603,16649,16655,16658,16671,16691,16694,16733,16750,16777,16780,16793,16795,16796,16877,16955,16979,17021,17101,17183,17214,17239,17259,17312,17318,17321,17357,17390,17407,17420,17423,17441,17443,17444,17487,17537,17592,17629,17667,17702],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/path/filepath/path_unix.go","Base":26243,"Size":1372,"Lines":[0,55,109,159,160,266,342,343,360,361,378,379,426,457,494,496,497,568,595,633,643,645,646,719,722,784,823,863,900,902,903,942,959,979,982,1033,1035,1036,1076,1098,1100,1101,1135,1200,1226,1241,1300,1304,1307,1318,1320,1321,1355,1370],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/path/filepath/symlink.go","Base":27616,"Size":3247,"Lines":[0,55,109,159,160,177,178,187,197,206,212,223,234,236,237,286,317,360,361,422,433,436,458,471,489,557,618,629,633,647,705,714,718,719,758,815,848,929,930,982,1002,1033,1042,1096,1129,1141,1179,1228,1279,1280,1332,1356,1369,1414,1451,1462,1468,1473,1514,1548,1581,1625,1660,1688,1715,1721,1738,1750,1798,1818,1823,1835,1839,1840,1888,1889,1970,1995,1999,2000,2026,2027,2049,2050,2078,2096,2114,2118,2119,2156,2202,2233,2238,2250,2254,2255,2275,2276,2292,2317,2374,2378,2379,2412,2430,2448,2452,2453,2489,2537,2560,2569,2573,2574,2601,2602,2629,2642,2691,2744,2752,2757,2775,2789,2807,2866,2898,2917,2928,2939,2984,3014,3027,3072,3109,3120,3126,3131,3150,3165,3177,3197,3202,3213,3217,3220,3245],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/path/filepath/symlink_unix.go","Base":30864,"Size":136,"Lines":[0,20,39,40,57,58,107,134],"Infos":null}]}
 