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
GoLinkname�� Implementation�� 	Reference��   ����encoding/pempembytesencoding/base64errorsiosortstrings��i ck TypeHeadersBytesdatapBlockrestoutWriteriobWritenerrpemDecodeEncodeEncodeToMemory         #  T %   =F  ; @ !B  *1=F  &R 4U   =F  4e  g 1  6 t < > T v B F$M7TI11 *h bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  base64(	base64 = $packages["encoding/base64"];
��    		$r = base64.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Block�V	Block = $pkg.Block = $newType(0, $kindStruct, "pem.Block", true, "encoding/pem", true, function(Type_, Headers_, Bytes_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Type = "";
			this.Headers = false;
			this.Bytes = sliceType.nil;
			return;
		}
		this.Type = Type_;
		this.Headers = Headers_;
		this.Bytes = Bytes_;
	});
�	Block.init("", [{prop: "Type", name: "Type", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Headers", name: "Headers", embedded: false, exported: true, typ: mapType, tag: ""}, {prop: "Bytes", name: "Bytes", embedded: false, exported: true, typ: sliceType, tag: ""}]);
Blockencoding/pem.Blockencoding/pem.mapTypeencoding/pem.sliceType  lineBreaker�[	lineBreaker = $pkg.lineBreaker = $newType(0, $kindStruct, "pem.lineBreaker", true, "encoding/pem", false, function(line_, used_, out_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.line = arrayType.zero();
			this.used = 0;
			this.out = $ifaceNil;
			return;
		}
		this.line = line_;
		this.used = used_;
		this.out = out_;
	});
��	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
�)	lineBreaker.init("encoding/pem", [{prop: "line", name: "line", embedded: false, exported: false, typ: arrayType, tag: ""}, {prop: "used", name: "used", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: io.Writer, tag: ""}]);
lineBreakerencoding/pem.arrayTypeencoding/pem.lineBreakerencoding/pem.ptrType$1encoding/pem.sliceType	io.Writer  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(Block);
ptrTypeencoding/pem.Block  sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1  	arrayType%	arrayType = $arrayType($Uint8, 64);
	arrayType  mapType'	mapType = $mapType($String, $String);
mapType  	ptrType$1$	ptrType$1 = $ptrType(lineBreaker);
	ptrType$1encoding/pem.lineBreaker  pemStartpemStart  pemEndpemEnd  pemEndOfLinepemEndOfLine  nlnl  D  q		pemStart = (new sliceType($stringToBytes("\n-----BEGIN ")));
pemStartencoding/pem.pemStartencoding/pem.sliceType  @  �		pemEnd = (new sliceType($stringToBytes("\n-----END ")));
pemEndencoding/pem.pemEndencoding/pem.sliceType  @  �		pemEndOfLine = (new sliceType($stringToBytes("-----")));
pemEndOfLineencoding/pem.pemEndOfLineencoding/pem.sliceType  !  		nl = new sliceType([10]);
nlencoding/pem.nlencoding/pem.sliceType encoding/pem.getLineencoding/pemgetLine getLine�e	getLine = function(data) {
		var $24r, _r, _tmp, _tmp$1, data, i, j, line, rest, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; data = $f.data; i = $f.i; j = $f.j; line = $f.line; rest = $f.rest; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		line = sliceType.nil;
		rest = sliceType.nil;
  		i = bytes.IndexByte(data, 10);
  B		j = 0;
    		if (i < 0) {
  V			i = data.$length;
  f			j = i;
    		} else {
  x			j = i + 1 >> 0;
    			if (i > 0 && ((x = i - 1 >> 0, ((x < 0 || x >= data.$length) ? ($throwRuntimeError("index out of range"), undefined) : data.$array[data.$offset + x])) === 13)) {
  �				i = i - (1) >> 0;
    			}
    		}
    		_r = bytes.TrimRight($subslice(data, 0, i), " \t"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tmp = _r;
		_tmp$1 = $subslice(data, j);
		line = _tmp;
		rest = _tmp$1;
		$24r = [line, rest];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: getLine }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.data = data; $f.i = i; $f.j = j; $f.line = line; $f.rest = rest; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
getLinebytes.IndexBytebytes.TrimRightencoding/pem.getLineencoding/pem.sliceType  encoding/pem.removeSpacesAndTabsencoding/pemremoveSpacesAndTabs removeSpacesAndTabs��	removeSpacesAndTabs = function(data) {
		var _i, _ref, b, data, n, result;
    		if (!bytes.ContainsAny(data, " \t")) {
  �			return data;
    		}
  �		result = $makeSlice(sliceType, data.$length);
  �		n = 0;
  �		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			b = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ((b === 32) || (b === 9)) {
  /				_i++;
				continue;
    			}
  >			((n < 0 || n >= result.$length) ? ($throwRuntimeError("index out of range"), undefined) : result.$array[result.$offset + n] = b);
  N			n = n + (1) >> 0;
    			_i++;
		}
  W		return $subslice(result, 0, n);
    	};
removeSpacesAndTabsbytes.ContainsAny encoding/pem.removeSpacesAndTabsencoding/pem.sliceType encoding/pem.Decodeencoding/pemDecode Decode�$�	Decode = function(data) {
		var $24r, $24r$1, $24r$2, $24r$3, $24r$4, $24r$5, _key, _r, _r$1, _r$10, _r$11, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, _tuple$1, _tuple$10, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, _tuple$9, base64Data, data, endIndex, endTrailer, endTrailerIndex, endTrailerLen, err, i, i$1, key, line, n, next, p, rest, restOfEndLine, s, typeLine, val, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; $24r$3 = $f.$24r$3; $24r$4 = $f.$24r$4; $24r$5 = $f.$24r$5; _key = $f._key; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$10 = $f._tuple$10; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; _tuple$9 = $f._tuple$9; base64Data = $f.base64Data; data = $f.data; endIndex = $f.endIndex; endTrailer = $f.endTrailer; endTrailerIndex = $f.endTrailerIndex; endTrailerLen = $f.endTrailerLen; err = $f.err; i = $f.i; i$1 = $f.i$1; key = $f.key; line = $f.line; n = $f.n; next = $f.next; p = $f.p; rest = $f.rest; restOfEndLine = $f.restOfEndLine; s = $f.s; typeLine = $f.typeLine; val = $f.val; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = ptrType.nil;
		rest = sliceType.nil;
  
�		rest = data;
    		if (bytes.HasPrefix(data, $subslice(pemStart, 1))) {
  
�			rest = $subslice(rest, (pemStart.$length - 1 >> 0), data.$length);
    		} else {
  
�			i = bytes.Index(data, pemStart);
    			if (i >= 0) {
  				rest = $subslice(rest, (i + pemStart.$length >> 0), data.$length);
    			} else {
    				_tmp = ptrType.nil;
				_tmp$1 = data;
				p = _tmp;
				rest = _tmp$1;
				$s = -1; return [p, rest];
    			}
    		}
  f		_r = getLine(rest); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		typeLine = _tuple[0];
		rest = _tuple[1];
  �		/* */ if (!bytes.HasSuffix(typeLine, pemEndOfLine)) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!bytes.HasSuffix(typeLine, pemEndOfLine)) { */ case 2:
    			_r$1 = decodeError(data, rest); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			p = _tuple$1[0];
			rest = _tuple$1[1];
			$24r = [p, rest];
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  �		typeLine = $subslice(typeLine, 0, (typeLine.$length - pemEndOfLine.$length >> 0));
  		p = new Block.ptr(($bytesToString(typeLine)), {}, sliceType.nil);
  g		/* while (true) { */ case 6:
    			if (rest.$length === 0) {
    				_tmp$2 = ptrType.nil;
				_tmp$3 = data;
				p = _tmp$2;
				rest = _tmp$3;
				$s = -1; return [p, rest];
    			}
  			_r$2 = getLine(rest); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$2 = _r$2;
			line = _tuple$2[0];
			next = _tuple$2[1];
   			i$1 = bytes.IndexByte(line, 58);
    			if (i$1 === -1) {
  R				/* break; */ $s = 7; continue;
    			}
  �			_tmp$4 = $subslice(line, 0, i$1);
			_tmp$5 = $subslice(line, (i$1 + 1 >> 0));
			key = _tmp$4;
			val = _tmp$5;
  �			_r$3 = bytes.TrimSpace(key); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			key = _r$3;
  �			_r$4 = bytes.TrimSpace(val); /* */ $s = 10; case 10: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			val = _r$4;
  �			_key = ($bytesToString(key)); (p.Headers || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: ($bytesToString(val)) };
  &			rest = next;
    		$s = 6; continue;
		case 7:
  ;		_tmp$6 = 0;
		_tmp$7 = 0;
		endIndex = _tmp$6;
		endTrailerIndex = _tmp$7;
    		if (($keys(p.Headers).length === 0) && bytes.HasPrefix(rest, $subslice(pemEnd, 1))) {
  �			endIndex = 0;
  			endTrailerIndex = pemEnd.$length - 1 >> 0;
    		} else {
  ;			endIndex = bytes.Index(rest, pemEnd);
  b			endTrailerIndex = endIndex + pemEnd.$length >> 0;
    		}
  �		/* */ if (endIndex < 0) { $s = 11; continue; }
		/* */ $s = 12; continue;
    		/* if (endIndex < 0) { */ case 11:
    			_r$5 = decodeError(data, rest); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_tuple$3 = _r$5;
			p = _tuple$3[0];
			rest = _tuple$3[1];
			$24r$1 = [p, rest];
			$s = 14; case 14: return $24r$1;
    		/* } */ case 12:
  2		endTrailer = $subslice(rest, endTrailerIndex);
  X		endTrailerLen = typeLine.$length + pemEndOfLine.$length >> 0;
  �		/* */ if (endTrailer.$length < endTrailerLen) { $s = 15; continue; }
		/* */ $s = 16; continue;
    		/* if (endTrailer.$length < endTrailerLen) { */ case 15:
    			_r$6 = decodeError(data, rest); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_tuple$4 = _r$6;
			p = _tuple$4[0];
			rest = _tuple$4[1];
			$24r$2 = [p, rest];
			$s = 18; case 18: return $24r$2;
    		/* } */ case 16:
  �		restOfEndLine = $subslice(endTrailer, endTrailerLen);
  		endTrailer = $subslice(endTrailer, 0, endTrailerLen);
  -		/* */ if (!bytes.HasPrefix(endTrailer, typeLine) || !bytes.HasSuffix(endTrailer, pemEndOfLine)) { $s = 19; continue; }
		/* */ $s = 20; continue;
    		/* if (!bytes.HasPrefix(endTrailer, typeLine) || !bytes.HasSuffix(endTrailer, pemEndOfLine)) { */ case 19:
    			_r$7 = decodeError(data, rest); /* */ $s = 21; case 21: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			_tuple$5 = _r$7;
			p = _tuple$5[0];
			rest = _tuple$5[1];
			$24r$3 = [p, rest];
			$s = 22; case 22: return $24r$3;
    		/* } */ case 20:
  �		_r$8 = getLine(restOfEndLine); /* */ $s = 23; case 23: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		_tuple$6 = _r$8;
		s = _tuple$6[0];
  �		/* */ if (!((s.$length === 0))) { $s = 24; continue; }
		/* */ $s = 25; continue;
    		/* if (!((s.$length === 0))) { */ case 24:
    			_r$9 = decodeError(data, rest); /* */ $s = 26; case 26: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_tuple$7 = _r$9;
			p = _tuple$7[0];
			rest = _tuple$7[1];
			$24r$4 = [p, rest];
			$s = 27; case 27: return $24r$4;
    		/* } */ case 25:
  2		base64Data = removeSpacesAndTabs($subslice(rest, 0, endIndex));
  f		p.Bytes = $makeSlice(sliceType, base64.StdEncoding.DecodedLen(base64Data.$length));
  �		_tuple$8 = base64.StdEncoding.Decode(p.Bytes, base64Data);
		n = _tuple$8[0];
		err = _tuple$8[1];
  �		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 28; continue; }
		/* */ $s = 29; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 28:
    			_r$10 = decodeError(data, rest); /* */ $s = 30; case 30: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_tuple$9 = _r$10;
			p = _tuple$9[0];
			rest = _tuple$9[1];
			$24r$5 = [p, rest];
			$s = 31; case 31: return $24r$5;
    		/* } */ case 29:
  		p.Bytes = $subslice(p.Bytes, 0, n);
  �		_r$11 = getLine($subslice(rest, ((endIndex + pemEnd.$length >> 0) - 1 >> 0))); /* */ $s = 32; case 32: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
		_tuple$10 = _r$11;
		rest = _tuple$10[1];
  �		$s = -1; return [p, rest];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Decode }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f.$24r$3 = $24r$3; $f.$24r$4 = $24r$4; $f.$24r$5 = $24r$5; $f._key = _key; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$10 = _tuple$10; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f._tuple$9 = _tuple$9; $f.base64Data = base64Data; $f.data = data; $f.endIndex = endIndex; $f.endTrailer = endTrailer; $f.endTrailerIndex = endTrailerIndex; $f.endTrailerLen = endTrailerLen; $f.err = err; $f.i = i; $f.i$1 = i$1; $f.key = key; $f.line = line; $f.n = n; $f.next = next; $f.p = p; $f.rest = rest; $f.restOfEndLine = restOfEndLine; $f.s = s; $f.typeLine = typeLine; $f.val = val; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Decode = Decode;
Decodebytes.HasPrefixbytes.HasSuffixbytes.Indexbytes.IndexBytebytes.TrimSpaceencoding/base64.StdEncodingencoding/pem.Blockencoding/pem.Decodeencoding/pem.decodeErrorencoding/pem.getLineencoding/pem.pemEndencoding/pem.pemEndOfLineencoding/pem.pemStartencoding/pem.ptrType encoding/pem.removeSpacesAndTabsencoding/pem.sliceType encoding/pem.decodeErrorencoding/pemdecodeError decodeError�#	decodeError = function(data, rest) {
		var _r, _tuple, data, p, rest, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; data = $f.data; p = $f.p; rest = $f.rest; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  e		_r = Decode(rest); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		p = _tuple[0];
		rest = _tuple[1];
    		if (p === ptrType.nil) {
  �			rest = data;
    		}
  �		$s = -1; return [p, rest];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decodeError }; } $f._r = _r; $f._tuple = _tuple; $f.data = data; $f.p = p; $f.rest = rest; $f.$s = $s; $f.$r = $r; return $f;
	};
decodeErrorencoding/pem.Decodeencoding/pem.decodeErrorencoding/pem.ptrType !(*encoding/pem.lineBreaker).Write �
i	lineBreaker.ptr.prototype.Write = function(b) {
		var $24r, _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, b, err, excess, l, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; b = $f.b; err = $f.err; excess = $f.excess; l = $f.l; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		l = this;
    		if ((l.used + b.$length >> 0) < 64) {
  �			$copySlice($subslice(new sliceType(l.line), l.used), b);
  �			l.used = l.used + (b.$length) >> 0;
    			_tmp = b.$length;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  �		_r = l.out.Write($subslice(new sliceType(l.line), 0, l.used)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  			$s = -1; return [n, err];
    		}
  		excess = 64 - l.used >> 0;
  @		l.used = 0;
  M		_r$1 = l.out.Write($subslice(b, 0, excess)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [n, err];
    		}
  �		_r$2 = l.out.Write(nl); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$2 = _r$2;
		n = _tuple$2[0];
		err = _tuple$2[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [n, err];
    		}
    		_r$3 = l.Write($subslice(b, excess)); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$3 = _r$3;
		n = _tuple$3[0];
		err = _tuple$3[1];
		$24r = [n, err];
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: lineBreaker.ptr.prototype.Write }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.b = b; $f.err = err; $f.excess = excess; $f.l = l; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	lineBreaker.prototype.Write = function(b) { return this.$val.Write(b); };
lineBreakerencoding/pem.lineBreakerencoding/pem.nlencoding/pem.sliceType !(*encoding/pem.lineBreaker).Close �[	lineBreaker.ptr.prototype.Close = function() {
		var _r, _r$1, _tuple, _tuple$1, err, l, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; l = $f.l; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		err = $ifaceNil;
		l = this;
  		/* */ if (l.used > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (l.used > 0) { */ case 1:
  #			_r = l.out.Write($subslice(new sliceType(l.line), 0, l.used)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  _				$s = -1; return err;
    			}
  l			_r$1 = l.out.Write(nl); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			err = _tuple$1[1];
    		/* } */ case 2:
  �		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: lineBreaker.ptr.prototype.Close }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.l = l; $f.$s = $s; $f.$r = $r; return $f;
	};
	lineBreaker.prototype.Close = function() { return this.$val.Close(); };
lineBreakerencoding/pem.lineBreakerencoding/pem.nlencoding/pem.sliceType encoding/pem.writeHeaderencoding/pemwriteHeader writeHeader�	writeHeader = function(out, k, v) {
		var _r, _tuple, err, k, out, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; k = $f.k; out = $f.out; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = out.Write((new sliceType($stringToBytes(k + ": " + v + "\n")))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
  �		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: writeHeader }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.k = k; $f.out = out; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
writeHeaderencoding/pem.sliceTypeencoding/pem.writeHeader encoding/pem.Encodeencoding/pemEncode Encode�^	Encode = function(out, b) {
		var _entry, _entry$1, _entry$2, _entry$3, _i, _i$1, _i$2, _keys, _keys$1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, b, b64, breaker, err, err$1, err$2, err$3, err$4, err$5, err$6, err$7, h, hasProcType, k, k$1, k$2, out, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _entry$3 = $f._entry$3; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _keys = $f._keys; _keys$1 = $f._keys$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; b = $f.b; b64 = $f.b64; breaker = $f.breaker; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; err$5 = $f.err$5; err$6 = $f.err$6; err$7 = $f.err$7; h = $f.h; hasProcType = $f.hasProcType; k = $f.k; k$1 = $f.k$1; k$2 = $f.k$2; out = $f.out; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		breaker = [breaker];
  �		_ref = b.Headers;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			k = _entry.k;
    			if (strings.Contains(k, ":")) {
  �				$s = -1; return errors.New("pem: cannot encode a header key that contains a colon");
    			}
    			_i++;
		}
  �		_r = out.Write($subslice(pemStart, 1)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return err;
    		}
  �		_r$1 = out.Write((new sliceType($stringToBytes(b.Type + "-----\n")))); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		err$1 = _tuple$1[1];
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  			$s = -1; return err$1;
    		}
  )		/* */ if ($keys(b.Headers).length > 0) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($keys(b.Headers).length > 0) { */ case 3:
  b			h = $makeSlice(sliceType$1, 0, $keys(b.Headers).length);
  �			hasProcType = false;
  �			_ref$1 = b.Headers;
			_i$1 = 0;
			_keys$1 = $keys(_ref$1);
			while (true) {
				if (!(_i$1 < _keys$1.length)) { break; }
				_entry$1 = _ref$1[_keys$1[_i$1]];
    				if (_entry$1 === undefined) {
    					_i$1++;
					continue;
    				}
				k$1 = _entry$1.k;
    				if (k$1 === "Proc-Type") {
  �					hasProcType = true;
  �					_i$1++;
					continue;
    				}
  �				h = $append(h, k$1);
    				_i$1++;
			}
  j			/* */ if (hasProcType) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (hasProcType) { */ case 5:
  �				_r$2 = writeHeader(out, "Proc-Type", (_entry$2 = b.Headers[$String.keyFor("Proc-Type")], _entry$2 !== undefined ? _entry$2.v : "")); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				err$2 = _r$2;
    				if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  �					$s = -1; return err$2;
    				}
    			/* } */ case 6:
  #			$r = sort.Strings(h); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  5			_ref$2 = h;
			_i$2 = 0;
			/* while (true) { */ case 9:
				/* if (!(_i$2 < _ref$2.$length)) { break; } */ if(!(_i$2 < _ref$2.$length)) { $s = 10; continue; }
				k$2 = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
  Q				_r$3 = writeHeader(out, k$2, (_entry$3 = b.Headers[$String.keyFor(k$2)], _entry$3 !== undefined ? _entry$3.v : "")); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				err$3 = _r$3;
    				if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  �					$s = -1; return err$3;
    				}
    				_i$2++;
			$s = 9; continue;
			case 10:
  �			_r$4 = out.Write(nl); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple$2 = _r$4;
			err$4 = _tuple$2[1];
    			if (!($interfaceIsEqual(err$4, $ifaceNil))) {
  �				$s = -1; return err$4;
    			}
    		/* } */ case 4:
  �		breaker[0] = new lineBreaker.ptr(arrayType.zero(), 0, $ifaceNil);
  �		breaker[0].out = out;
   		b64 = base64.NewEncoder(base64.StdEncoding, breaker[0]);
   J		_r$5 = b64.Write(b.Bytes); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_tuple$3 = _r$5;
		err$5 = _tuple$3[1];
    		if (!($interfaceIsEqual(err$5, $ifaceNil))) {
   w			$s = -1; return err$5;
    		}
   �		_r$6 = b64.Close(); /* */ $s = 14; case 14: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_r$6;
   �		_r$7 = breaker[0].Close(); /* */ $s = 15; case 15: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
		_r$7;
   �		_r$8 = out.Write($subslice(pemEnd, 1)); /* */ $s = 16; case 16: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
		_tuple$4 = _r$8;
		err$6 = _tuple$4[1];
    		if (!($interfaceIsEqual(err$6, $ifaceNil))) {
   �			$s = -1; return err$6;
    		}
   �		_r$9 = out.Write((new sliceType($stringToBytes(b.Type + "-----\n")))); /* */ $s = 17; case 17: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
		_tuple$5 = _r$9;
		err$7 = _tuple$5[1];
  !		$s = -1; return err$7;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Encode }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._entry$3 = _entry$3; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._keys = _keys; $f._keys$1 = _keys$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.b = b; $f.b64 = b64; $f.breaker = breaker; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.err$5 = err$5; $f.err$6 = err$6; $f.err$7 = err$7; $f.h = h; $f.hasProcType = hasProcType; $f.k = k; $f.k$1 = k$1; $f.k$2 = k$2; $f.out = out; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Encode = Encode;
Encodeencoding/base64.NewEncoderencoding/base64.StdEncodingencoding/pem.Encodeencoding/pem.arrayTypeencoding/pem.lineBreakerencoding/pem.nlencoding/pem.pemEndencoding/pem.pemStartencoding/pem.sliceTypeencoding/pem.sliceType$1encoding/pem.writeHeader
errors.Newsort.Stringsstrings.Contains encoding/pem.EncodeToMemoryencoding/pemEncodeToMemory EncodeToMemory�^	EncodeToMemory = function(b) {
		var _r, b, buf, err, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; buf = $f.buf; err = $f.err; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
  "+		buf[0] = new bytes.Buffer.ptr(sliceType.nil, 0, 0);
  "@		_r = Encode(buf[0], b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		err = _r;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  "g			$s = -1; return sliceType.nil;
    		}
  "v		$s = -1; return buf[0].Bytes();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: EncodeToMemory }; } $f._r = _r; $f.b = b; $f.buf = buf; $f.err = err; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.EncodeToMemory = EncodeToMemory;
EncodeToMemorybytes.Bufferencoding/pem.Encodeencoding/pem.EncodeToMemoryencoding/pem.sliceType �{"Base":8844,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/encoding/pem/pem.go","Base":1,"Size":8842,"Lines":[0,55,109,159,160,237,316,347,359,360,369,378,397,407,413,421,432,434,435,482,485,509,536,550,577,602,669,689,779,827,933,935,936,1012,1088,1168,1245,1258,1306,1340,1351,1363,1379,1387,1397,1409,1443,1450,1454,1457,1509,1511,1512,1588,1663,1666,1742,1767,1814,1852,1919,1975,1989,1992,2027,2035,2036,2062,2091,2103,2107,2123,2129,2132,2133,2153,2155,2156,2195,2230,2265,2266,2341,2420,2496,2505,2556,2626,2688,2701,2743,2786,2840,2883,2893,2912,2915,2916,2949,2996,3029,3032,3090,3091,3104,3140,3169,3172,3173,3180,3241,3280,3302,3322,3326,3356,3357,3391,3406,3415,3419,3420,3487,3522,3551,3580,3619,3633,3636,3637,3672,3673,3728,3772,3835,3850,3886,3896,3935,3978,3981,3982,4001,4034,4037,4038,4110,4144,4182,4234,4272,4305,4308,4309,4354,4395,4441,4488,4521,4524,4525,4569,4619,4652,4655,4656,4708,4780,4838,4855,4888,4891,4914,4915,4983,5031,5081,5082,5090,5092,5093,5148,5211,5278,5350,5419,5490,5563,5622,5626,5659,5663,5702,5746,5783,5787,5823,5839,5873,5877,5930,5987,6012,6027,6041,6044,6060,6062,6063,6088,6089,6115,6141,6151,6167,6169,6170,6192,6193,6252,6288,6315,6334,6355,6358,6359,6399,6416,6425,6428,6462,6474,6475,6510,6527,6536,6539,6540,6566,6583,6592,6595,6596,6624,6626,6627,6671,6688,6729,6747,6757,6761,6788,6791,6792,6800,6802,6803,6856,6906,6918,6920,6921,6968,7013,7068,7096,7128,7206,7210,7213,7214,7274,7311,7312,7364,7377,7380,7446,7459,7462,7463,7488,7519,7560,7583,7612,7634,7657,7670,7675,7695,7699,7748,7783,7802,7877,7892,7897,7901,7968,7986,8010,8071,8086,8091,8095,8138,8152,8156,8159,8160,8185,8204,8205,8261,8308,8321,8324,8337,8354,8355,8405,8418,8421,8470,8482,8484,8485,8534,8537,8588,8641,8702,8741,8763,8804,8817,8820,8840],"Infos":null}]}
 