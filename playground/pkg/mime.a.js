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
GoLinkname�� Implementation�� 	Reference��   �����mimemimebufiobytesencoding/base64errorsfmtioossortstringssyncunicodeunicode/utf8�fi ��exttyp WordEncodertparamv	mediatypeparamserrCharsetReadercharsetinputReaderioDecodedWordDecoderwordDecodeHeaderheaderconvertbufBuilderstringscontentEncodees
encodeWordbEncodeqEncodeopenWord	splitWordReadpnaddrStringb	copyCheckLenCapResetgrowGrowWrite	WriteBytec	WriteRunerWriteStringmimeAddExtensionType	BEncodingErrInvalidMediaParameterExtensionsByTypeFormatMediaTypeParseMediaType	QEncodingTypeByExtensionF       	C .bV F   8  F   H  F    )Y 0 C .qF      PW B J| |   4  c��� ���T � Z a� o    t a� �    � a� �� B ��  ����T  � �. B �   � �. B �   � �. �� B �   � �. �� B �   � �. �� B   � �. �� B  W  � �� � 0 T ��� ��  �� �����������T � � ��   � ��   � ��   � ��   � ��   � �� �   � �� �   � �� ��    � �� �   � �� �    � �� �   � 
� ����+�<�M�Qc�	�WW P��� ��T bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  base64(	base64 = $packages["encoding/base64"];
��    		$r = base64.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sort	sort = $packages["sort"];
��    		$r = sort.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 12; case 12: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  WordEncoderi	WordEncoder = $pkg.WordEncoder = $newType(1, $kindUint8, "mime.WordEncoder", true, "mime", true, null);
�	WordEncoder.methods = [{prop: "Encode", name: "Encode", pkg: "", typ: $funcType([$String, $String], [$String], false)}, {prop: "encodeWord", name: "encodeWord", pkg: "mime", typ: $funcType([$String, $String], [$String], false)}, {prop: "bEncode", name: "bEncode", pkg: "mime", typ: $funcType([ptrType, $String, $String], [], false)}, {prop: "qEncode", name: "qEncode", pkg: "mime", typ: $funcType([ptrType, $String, $String], [], false)}, {prop: "openWord", name: "openWord", pkg: "mime", typ: $funcType([ptrType, $String], [], false)}, {prop: "splitWord", name: "splitWord", pkg: "mime", typ: $funcType([ptrType, $String], [], false)}];
WordEncodermime.WordEncodermime.ptrType  WordDecoder�	WordDecoder = $pkg.WordDecoder = $newType(0, $kindStruct, "mime.WordDecoder", true, "mime", true, function(CharsetReader_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.CharsetReader = $throwNilPointerError;
			return;
		}
		this.CharsetReader = CharsetReader_;
	});
�V	ptrType$1.methods = [{prop: "Decode", name: "Decode", pkg: "", typ: $funcType([$String], [$String, $error], false)}, {prop: "DecodeHeader", name: "DecodeHeader", pkg: "", typ: $funcType([$String], [$String, $error], false)}, {prop: "convert", name: "convert", pkg: "mime", typ: $funcType([ptrType, $String, sliceType$1], [$error], false)}];
��	WordDecoder.init("", [{prop: "CharsetReader", name: "CharsetReader", embedded: false, exported: true, typ: funcType, tag: ""}]);
WordDecoder	io.Readermime.WordDecodermime.funcTypemime.ptrTypemime.ptrType$1mime.sliceType$1  	sliceType"	sliceType = $sliceType($String);
	sliceType  ptrType&	ptrType = $ptrType(strings.Builder);
ptrTypestrings.Builder  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  sliceType$2,	sliceType$2 = $sliceType($emptyInterface);
sliceType$2  	arrayType%	arrayType = $arrayType($Uint8, 10);
	arrayType  	ptrType$1$	ptrType$1 = $ptrType(WordDecoder);
	ptrType$1mime.WordDecoder  funcTypeI	funcType = $funcType([$String, io.Reader], [io.Reader, $error], false);
funcType	io.Reader  errInvalidWorderrInvalidWord  maxBase64LenmaxBase64Len  ErrInvalidMediaParameter  	mimeTypesmimeTypes$24ptrw		mimeTypes = new sync.Map.ptr(new sync.Mutex.ptr(0, 0), new $packages["sync/atomic"].Value.ptr($ifaceNil), false, 0);
	mimeTypesmime.mimeTypessync.Map
sync.Mutexsync/atomic.Value  mimeTypesLowermimeTypesLower$24ptr|		mimeTypesLower = new sync.Map.ptr(new sync.Mutex.ptr(0, 0), new $packages["sync/atomic"].Value.ptr($ifaceNil), false, 0);
mimeTypesLowermime.mimeTypesLowersync.Map
sync.Mutexsync/atomic.Value  extensionsMu+		extensionsMu = new sync.Mutex.ptr(0, 0);
extensionsMumime.extensionsMu
sync.Mutex  
extensionsextensions$24ptrx		extensions = new sync.Map.ptr(new sync.Mutex.ptr(0, 0), new $packages["sync/atomic"].Value.ptr($ifaceNil), false, 0);

extensionsmime.extensionssync.Map
sync.Mutexsync/atomic.Value  builtinTypesLowerbuiltinTypesLower  once9		once = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
once	mime.once
sync.Mutex	sync.Once  testInitMime(		testInitMime = $throwNilPointerError;
testInitMimemime.testInitMime  
osInitMime&		osInitMime = $throwNilPointerError;

osInitMimemime.osInitMime  	mimeGlobs	mimeGlobs  	typeFiles	typeFiles  K  >		errInvalidWord = errors.New("mime: invalid RFC 2047 encoded-word");

errors.Newmime.errInvalidWord  9  }		maxBase64Len = base64.StdEncoding.DecodedLen(63);
encoding/base64.StdEncodingmime.maxBase64Len  T  7�		$pkg.ErrInvalidMediaParameter = errors.New("mime: invalid media parameter");

errors.Newmime.ErrInvalidMediaParameter  ��  X�		builtinTypesLower = $makeMap($String.keyFor, [{ k: ".avif", v: "image/avif" }, { k: ".css", v: "text/css; charset=utf-8" }, { k: ".gif", v: "image/gif" }, { k: ".htm", v: "text/html; charset=utf-8" }, { k: ".html", v: "text/html; charset=utf-8" }, { k: ".jpeg", v: "image/jpeg" }, { k: ".jpg", v: "image/jpeg" }, { k: ".js", v: "text/javascript; charset=utf-8" }, { k: ".json", v: "application/json" }, { k: ".mjs", v: "text/javascript; charset=utf-8" }, { k: ".pdf", v: "application/pdf" }, { k: ".png", v: "image/png" }, { k: ".svg", v: "image/svg+xml" }, { k: ".wasm", v: "application/wasm" }, { k: ".webp", v: "image/webp" }, { k: ".xml", v: "text/xml; charset=utf-8" }]);
builtinTypesLowermime.builtinTypesLower  ^  j		mimeGlobs = new sliceType(["/usr/local/share/mime/globs2", "/usr/share/mime/globs2"]);
	mimeGlobsmime.mimeGlobsmime.sliceType  ��  j�		typeFiles = new sliceType(["/etc/mime.types", "/etc/apache2/mime.types", "/etc/apache/mime.types", "/etc/httpd/conf/mime.types"]);
	typeFilesmime.sliceTypemime.typeFiles (mime.WordEncoder).Encode ��	WordEncoder.prototype.Encode = function(charset, s) {
		var $24r, _r, charset, e, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; charset = $f.charset; e = $f.e; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this.$val;
    		if (!needsEncoding(s)) {
  �			$s = -1; return s;
    		}
  �		_r = new WordEncoder(e).encodeWord(charset, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WordEncoder.prototype.Encode }; } $f.$24r = $24r; $f._r = _r; $f.charset = charset; $f.e = e; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(WordEncoder).prototype.Encode = function(charset, s) { return new WordEncoder(this.$get()).Encode(charset, s); };
WordEncodermime.WordEncodermime.encodeWord~mime.needsEncoding mime.needsEncodingmimeneedsEncoding needsEncoding�O	needsEncoding = function(s) {
		var _i, _ref, _rune, b, s;
  �		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			b = _rune[0];
    			if ((b < 32 || b > 126) && !((b === 9))) {
  1				return true;
    			}
    			_i += _rune[1];
		}
  E		return false;
    	};
needsEncodingmime.needsEncoding (mime.WordEncoder).encodeWord �	WordEncoder.prototype.encodeWord = function(charset, s) {
		var buf, charset, e, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; buf = $f.buf; charset = $f.charset; e = $f.e; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
		e = this.$val;
  �		buf[0] = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  �		buf[0].Grow(48);
  �		new WordEncoder(e).openWord(buf[0], charset);
  �		/* */ if (e === 98) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (e === 98) { */ case 1:
  �			$r = new WordEncoder(e).bEncode(buf[0], charset, s); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 3; continue;
		/* } else { */ case 2:
  			new WordEncoder(e).qEncode(buf[0], charset, s);
    		/* } */ case 3:
  0		closeWord(buf[0]);
  B		$s = -1; return buf[0].String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WordEncoder.prototype.encodeWord }; } $f.buf = buf; $f.charset = charset; $f.e = e; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(WordEncoder).prototype.encodeWord = function(charset, s) { return new WordEncoder(this.$get()).encodeWord(charset, s); };
WordEncoderencodeWord~mime.WordEncodermime.bEncode~mime.closeWordmime.openWord~mime.ptrTypemime.qEncode~mime.sliceType$1strings.Builder (mime.WordEncoder).bEncode �@	WordEncoder.prototype.bEncode = function(buf, charset, s) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tmp, _tmp$1, _tmp$2, _tuple, buf, charset, currentLen, e, i, last, runeLen, s, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tuple = $f._tuple; buf = $f.buf; charset = $f.charset; currentLen = $f.currentLen; e = $f.e; i = $f.i; last = $f.last; runeLen = $f.runeLen; s = $f.s; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this.$val;
  D		w = base64.NewEncoder(base64.StdEncoding, buf);
  �		/* */ if (!isUTF8(charset) || base64.StdEncoding.EncodedLen(s.length) <= 63) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!isUTF8(charset) || base64.StdEncoding.EncodedLen(s.length) <= 63) { */ case 1:
  	1			_r = io.WriteString(w, s); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r;
  	H			_r$1 = w.Close(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$1;
  	T			$s = -1; return;
    		/* } */ case 2:
  	d		_tmp = 0;
		_tmp$1 = 0;
		_tmp$2 = 0;
		currentLen = _tmp;
		last = _tmp$1;
		runeLen = _tmp$2;
  	�		i = 0;
		/* while (true) { */ case 5:
			/* if (!(i < s.length)) { break; } */ if(!(i < s.length)) { $s = 6; continue; }
  
			_tuple = utf8.DecodeRuneInString($substring(s, i));
			runeLen = _tuple[1];
  
>			/* */ if ((currentLen + runeLen >> 0) <= maxBase64Len) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if ((currentLen + runeLen >> 0) <= maxBase64Len) { */ case 7:
  
i				currentLen = currentLen + (runeLen) >> 0;
    				$s = 9; continue;
			/* } else { */ case 8:
  
�				_r$2 = io.WriteString(w, $substring(s, last, i)); /* */ $s = 10; case 10: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$2;
  
�				_r$3 = w.Close(); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$3;
  
�				new WordEncoder(e).splitWord(buf, charset);
  
�				last = i;
  
�				currentLen = runeLen;
    			/* } */ case 9:
  	�			i = i + (runeLen) >> 0;
    		$s = 5; continue;
		case 6:
   		_r$4 = io.WriteString(w, $substring(s, last)); /* */ $s = 12; case 12: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		_r$4;
  		_r$5 = w.Close(); /* */ $s = 13; case 13: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		_r$5;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: WordEncoder.prototype.bEncode }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tuple = _tuple; $f.buf = buf; $f.charset = charset; $f.currentLen = currentLen; $f.e = e; $f.i = i; $f.last = last; $f.runeLen = runeLen; $f.s = s; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(WordEncoder).prototype.bEncode = function(buf, charset, s) { return new WordEncoder(this.$get()).bEncode(buf, charset, s); };
WordEncoderbEncode~encoding/base64.NewEncoderencoding/base64.StdEncodingio.WriteStringmime.WordEncodermime.isUTF8mime.maxBase64Lenmime.splitWord~unicode/utf8.DecodeRuneInString (mime.WordEncoder).qEncode ��	WordEncoder.prototype.qEncode = function(buf, charset, s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, b, buf, charset, currentLen, e, encLen, i, runeLen, s;
		e = this.$val;
    		if (!isUTF8(charset)) {
  1			writeQString(buf, s);
  H			return;
    		}
  X		_tmp = 0;
		_tmp$1 = 0;
		currentLen = _tmp;
		runeLen = _tmp$1;
  u		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  �			b = s.charCodeAt(i);
  			encLen = 0;
    			if (b >= 32 && b <= 126 && !((b === 61)) && !((b === 63)) && !((b === 95))) {
  [				_tmp$2 = 1;
				_tmp$3 = 1;
				runeLen = _tmp$2;
				encLen = _tmp$3;
    			} else {
  �				_tuple = utf8.DecodeRuneInString($substring(s, i));
				runeLen = _tuple[1];
  �				encLen = $imul(3, runeLen);
    			}
    			if ((currentLen + encLen >> 0) > 63) {
  �				new WordEncoder(e).splitWord(buf, charset);
  				currentLen = 0;
    			}
  '			writeQString(buf, $substring(s, i, (i + runeLen >> 0)));
  K			currentLen = currentLen + (encLen) >> 0;
  �			i = i + (runeLen) >> 0;
    		}
    	};
	$ptrType(WordEncoder).prototype.qEncode = function(buf, charset, s) { return new WordEncoder(this.$get()).qEncode(buf, charset, s); };
WordEncoderqEncode~mime.WordEncodermime.isUTF8mime.splitWord~mime.writeQStringunicode/utf8.DecodeRuneInString mime.writeQStringmimewriteQString writeQString�?	writeQString = function(buf, s) {
		var b, buf, i, s;
  �		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  			b = s.charCodeAt(i);
    			if ((b === 32)) {
  $				buf.WriteByte(95);
    			} else if (b >= 33 && b <= 126 && !((b === 61)) && !((b === 63)) && !((b === 95))) {
  {				buf.WriteByte(b);
    			} else {
  �				buf.WriteByte(61);
  �				buf.WriteByte("0123456789ABCDEF".charCodeAt((b >>> 4 << 24 >>> 24)));
  �				buf.WriteByte("0123456789ABCDEF".charCodeAt(((b & 15) >>> 0)));
    			}
  �			i = i + (1) >> 0;
    		}
    	};
writeQStringmime.writeQString (mime.WordEncoder).openWord ��	WordEncoder.prototype.openWord = function(buf, charset) {
		var buf, charset, e;
		e = this.$val;
  �		buf.WriteString("=?");
  �		buf.WriteString(charset);
  �		buf.WriteByte(63);
  �		buf.WriteByte(((e << 24 >>> 24)));
  �		buf.WriteByte(63);
    	};
	$ptrType(WordEncoder).prototype.openWord = function(buf, charset) { return new WordEncoder(this.$get()).openWord(buf, charset); };
WordEncoder	openWord~mime.WordEncoder mime.closeWordmime	closeWord 	closeWordO	closeWord = function(buf) {
		var buf;
  T		buf.WriteString("?=");
    	};
	closeWordmime.closeWord (mime.WordEncoder).splitWord �V	WordEncoder.prototype.splitWord = function(buf, charset) {
		var buf, charset, e;
		e = this.$val;
  �		closeWord(buf);
  		buf.WriteByte(32);
  		new WordEncoder(e).openWord(buf, charset);
    	};
	$ptrType(WordEncoder).prototype.splitWord = function(buf, charset) { return new WordEncoder(this.$get()).splitWord(buf, charset); };
WordEncoder
splitWord~mime.WordEncodermime.closeWordmime.openWord~ mime.isUTF8mimeisUTF8 isUTF8i	isUTF8 = function(charset) {
		var charset;
  [		return strings.EqualFold(charset, "UTF-8");
    	};
isUTF8mime.isUTF8strings.EqualFold (*mime.WordDecoder).Decode �	�	WordDecoder.ptr.prototype.Decode = function(word) {
		var _r, _r$1, _tuple, buf, charset, content, d, encoding, err, err$1, split, text, word, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; buf = $f.buf; charset = $f.charset; content = $f.content; d = $f.d; encoding = $f.encoding; err = $f.err; err$1 = $f.err$1; split = $f.split; text = $f.text; word = $f.word; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
		d = this;
    		if (word.length < 8 || !strings.HasPrefix(word, "=?") || !strings.HasSuffix(word, "?=") || !((strings.Count(word, "?") === 4))) {
  �			$s = -1; return ["", errInvalidWord];
    		}
  		word = $substring(word, 2, (word.length - 2 >> 0));
  [		split = strings.IndexByte(word, 63);
  �		charset = $substring(word, 0, split);
    		if (charset.length === 0) {
  �			$s = -1; return ["", errInvalidWord];
    		}
    		if (word.length < (split + 3 >> 0)) {
  ,			$s = -1; return ["", errInvalidWord];
    		}
  J		encoding = word.charCodeAt((split + 1 >> 0));
    		if (!((word.charCodeAt((split + 2 >> 0)) === 63))) {
  �			$s = -1; return ["", errInvalidWord];
    		}
  �		text = $substring(word, (split + 3 >> 0));
  �		_r = decode(encoding, text); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		content = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  "			$s = -1; return ["", err];
    		}
  :		buf[0] = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  S		_r$1 = d.convert(buf[0], charset, content); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		err$1 = _r$1;
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  �			$s = -1; return ["", err$1];
    		}
  �		$s = -1; return [buf[0].String(), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WordDecoder.ptr.prototype.Decode }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.buf = buf; $f.charset = charset; $f.content = content; $f.d = d; $f.encoding = encoding; $f.err = err; $f.err$1 = err$1; $f.split = split; $f.text = text; $f.word = word; $f.$s = $s; $f.$r = $r; return $f;
	};
	WordDecoder.prototype.Decode = function(word) { return this.$val.Decode(word); };
WordDecodermime.WordDecodermime.convert~mime.decodemime.errInvalidWordmime.ptrTypemime.sliceType$1strings.Builderstrings.Countstrings.HasPrefixstrings.HasSuffixstrings.IndexByte  (*mime.WordDecoder).DecodeHeader �s	WordDecoder.ptr.prototype.DecodeHeader = function(header) {
		var _r, _r$1, _tuple, betweenWords, buf, charset, content, cur, d, encoding, end, err, err$1, header, i, i$1, j, start, text, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; betweenWords = $f.betweenWords; buf = $f.buf; charset = $f.charset; content = $f.content; cur = $f.cur; d = $f.d; encoding = $f.encoding; end = $f.end; err = $f.err; err$1 = $f.err$1; header = $f.header; i = $f.i; i$1 = $f.i$1; j = $f.j; start = $f.start; text = $f.text; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		buf = [buf];
		d = this;
  �		i = strings.Index(header, "=?");
    		if (i === -1) {
  �			$s = -1; return [header, $ifaceNil];
    		}
  		buf[0] = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  1		buf[0].WriteString($substring(header, 0, i));
  N		header = $substring(header, i);
  d		betweenWords = false;
  {		/* while (true) { */ case 1:
  �			start = strings.Index(header, "=?");
    			if (start === -1) {
  �				/* break; */ $s = 2; continue;
    			}
  �			cur = start + 2 >> 0;
  �			i$1 = strings.Index($substring(header, cur), "?");
    			if (i$1 === -1) {
  				/* break; */ $s = 2; continue;
    			}
  *			charset = $substring(header, cur, (cur + i$1 >> 0));
  K			cur = cur + ((i$1 + 1 >> 0)) >> 0;
    			if (header.length < (cur + 4 >> 0)) {
  �				/* break; */ $s = 2; continue;
    			}
  �			encoding = header.charCodeAt(cur);
  �			cur = cur + (1) >> 0;
    			if (!((header.charCodeAt(cur) === 63))) {
  �				/* break; */ $s = 2; continue;
    			}
  �			cur = cur + (1) >> 0;
  �			j = strings.Index($substring(header, cur), "?=");
    			if (j === -1) {
   				/* break; */ $s = 2; continue;
    			}
  ,			text = $substring(header, cur, (cur + j >> 0));
  J			end = (cur + j >> 0) + 2 >> 0;
  h			_r = decode(encoding, text); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			content = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  �				betweenWords = false;
  �				buf[0].WriteString($substring(header, 0, (start + 2 >> 0)));
  �				header = $substring(header, (start + 2 >> 0));
  �				/* continue; */ $s = 1; continue;
    			}
    			if (start > 0 && (!betweenWords || hasNonWhitespace($substring(header, 0, start)))) {
  �				buf[0].WriteString($substring(header, 0, start));
    			}
  			_r$1 = d.convert(buf[0], charset, content); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			err$1 = _r$1;
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  @				$s = -1; return ["", err$1];
    			}
  V			header = $substring(header, end);
  n			betweenWords = true;
    		$s = 1; continue;
		case 2:
    		if (header.length > 0) {
  �			buf[0].WriteString(header);
    		}
  �		$s = -1; return [buf[0].String(), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WordDecoder.ptr.prototype.DecodeHeader }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.betweenWords = betweenWords; $f.buf = buf; $f.charset = charset; $f.content = content; $f.cur = cur; $f.d = d; $f.encoding = encoding; $f.end = end; $f.err = err; $f.err$1 = err$1; $f.header = header; $f.i = i; $f.i$1 = i$1; $f.j = j; $f.start = start; $f.text = text; $f.$s = $s; $f.$r = $r; return $f;
	};
	WordDecoder.prototype.DecodeHeader = function(header) { return this.$val.DecodeHeader(header); };
WordDecodermime.WordDecodermime.convert~mime.decodemime.hasNonWhitespacemime.ptrTypemime.sliceType$1strings.Builderstrings.Index mime.decodemimedecode decode��	decode = function(encoding, text) {
		var $24r, _1, _r, encoding, text, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; encoding = $f.encoding; text = $f.text; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = encoding;
  %			/* */ if ((_1 === (66)) || (_1 === (98))) { $s = 2; continue; }
			/* */ if ((_1 === (81)) || (_1 === (113))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if ((_1 === (66)) || (_1 === (98))) { */ case 2:
  6				$s = -1; return base64.StdEncoding.DecodeString(text);
    			/* } else if ((_1 === (81)) || (_1 === (113))) { */ case 3:
  u				_r = qDecode(text); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 7; case 7: return $24r;
    			/* } else { */ case 4:
  �				$s = -1; return [sliceType$1.nil, errInvalidWord];
    			/* } */ case 5:
    		case 1:
    		$s = -1; return [sliceType$1.nil, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: decode }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f.encoding = encoding; $f.text = text; $f.$s = $s; $f.$r = $r; return $f;
	};
decodeencoding/base64.StdEncodingmime.decodemime.errInvalidWordmime.qDecodemime.sliceType$1 (*mime.WordDecoder).convert �	WordDecoder.ptr.prototype.convert = function(buf, charset, content) {
		var $24r, _i, _i$1, _r, _r$1, _r$2, _r$3, _ref, _ref$1, _tuple, _tuple$1, buf, c, c$1, charset, content, d, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _ref$1 = $f._ref$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; buf = $f.buf; c = $f.c; c$1 = $f.c$1; charset = $f.charset; content = $f.content; d = $f.d; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
   			/* */ if (strings.EqualFold("utf-8", charset)) { $s = 2; continue; }
			/* */ if (strings.EqualFold("iso-8859-1", charset)) { $s = 3; continue; }
			/* */ if (strings.EqualFold("us-ascii", charset)) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (strings.EqualFold("utf-8", charset)) { */ case 2:
   J				buf.Write(content);
    				$s = 6; continue;
    			/* } else if (strings.EqualFold("iso-8859-1", charset)) { */ case 3:
   �				_ref = content;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
   �					buf.WriteRune(((c >> 0)));
    					_i++;
				}
    				$s = 6; continue;
    			/* } else if (strings.EqualFold("us-ascii", charset)) { */ case 4:
   �				_ref$1 = content;
				_i$1 = 0;
				while (true) {
					if (!(_i$1 < _ref$1.$length)) { break; }
					c$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
    					if (c$1 >= 128) {
  !4						buf.WriteRune(65533);
    					} else {
  !k						buf.WriteByte(c$1);
    					}
    					_i$1++;
				}
    				$s = 6; continue;
			/* } else { */ case 5:
  !�				/* */ if (d.CharsetReader === $throwNilPointerError) { $s = 7; continue; }
				/* */ $s = 8; continue;
    				/* if (d.CharsetReader === $throwNilPointerError) { */ case 7:
  !�					_r = fmt.Errorf("mime: unhandled charset %q", new sliceType$2([new $String(charset)])); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					$24r = _r;
					$s = 10; case 10: return $24r;
    				/* } */ case 8:
  !�				_r$1 = strings.ToLower(charset); /* */ $s = 11; case 11: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = d.CharsetReader(_r$1, bytes.NewReader(content)); /* */ $s = 12; case 12: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple = _r$2;
				r = _tuple[0];
				err = _tuple[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  "R					$s = -1; return err;
    				}
  "f				_r$3 = io.Copy(buf, r); /* */ $s = 13; case 13: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$1 = _r$3;
				err = _tuple$1[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  "�					$s = -1; return err;
    				}
    			/* } */ case 6:
    		case 1:
  "�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WordDecoder.ptr.prototype.convert }; } $f.$24r = $24r; $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.buf = buf; $f.c = c; $f.c$1 = c$1; $f.charset = charset; $f.content = content; $f.d = d; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	WordDecoder.prototype.convert = function(buf, charset, content) { return this.$val.convert(buf, charset, content); };
WordDecoderconvert~bytes.NewReader
fmt.Errorfio.Copymime.WordDecodermime.sliceType$2strings.EqualFoldstrings.ToLower mime.hasNonWhitespacemimehasNonWhitespace hasNonWhitespace��	hasNonWhitespace = function(s) {
		var _1, _i, _ref, _rune, b, s;
  #F		_ref = s;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			b = _rune[0];
    			_1 = b;
    			if ((_1 === (32)) || (_1 === (9)) || (_1 === (10)) || (_1 === (13))) {
    			} else {
  $				return true;
    			}
    			_i += _rune[1];
		}
  $		return false;
    	};
hasNonWhitespacemime.hasNonWhitespace mime.qDecodemimeqDecode qDecode�	�	qDecode = function(s) {
		var _r, _tuple, b, c, dec, err, i, n, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; c = $f.c; dec = $f.dec; err = $f.err; i = $f.i; n = $f.n; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  $z		dec = $makeSlice(sliceType$1, s.length);
  $�		n = 0;
  $�		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < s.length)) { break; } */ if(!(i < s.length)) { $s = 2; continue; }
  $�				c = s.charCodeAt(i);
  $�				/* */ if ((c === 95)) { $s = 4; continue; }
				/* */ if ((c === 61)) { $s = 5; continue; }
				/* */ if ((c <= 126 && c >= 32) || (c === 10) || (c === 13) || (c === 9)) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if ((c === 95)) { */ case 4:
  $�					((n < 0 || n >= dec.$length) ? ($throwRuntimeError("index out of range"), undefined) : dec.$array[dec.$offset + n] = 32);
    					$s = 8; continue;
    				/* } else if ((c === 61)) { */ case 5:
    					if ((i + 2 >> 0) >= s.length) {
  %						$s = -1; return [sliceType$1.nil, errInvalidWord];
    					}
  %B					_r = readHexByte(s.charCodeAt((i + 1 >> 0)), s.charCodeAt((i + 2 >> 0))); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					_tuple = _r;
					b = _tuple[0];
					err = _tuple[1];
    					if (!($interfaceIsEqual(err, $ifaceNil))) {
  %						$s = -1; return [sliceType$1.nil, err];
    					}
  %�					((n < 0 || n >= dec.$length) ? ($throwRuntimeError("index out of range"), undefined) : dec.$array[dec.$offset + n] = b);
  %�					i = i + (2) >> 0;
    					$s = 8; continue;
    				/* } else if ((c <= 126 && c >= 32) || (c === 10) || (c === 13) || (c === 9)) { */ case 6:
  %�					((n < 0 || n >= dec.$length) ? ($throwRuntimeError("index out of range"), undefined) : dec.$array[dec.$offset + n] = c);
    					$s = 8; continue;
				/* } else { */ case 7:
  &					$s = -1; return [sliceType$1.nil, errInvalidWord];
    				/* } */ case 8:
    			case 3:
  &/			n = n + (1) >> 0;
  $�			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  &8		$s = -1; return [$subslice(dec, 0, n), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: qDecode }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.c = c; $f.dec = dec; $f.err = err; $f.i = i; $f.n = n; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
qDecodemime.errInvalidWordmime.qDecodemime.readHexBytemime.sliceType$1 mime.readHexBytemimereadHexByte readHexByte��	readHexByte = function(a, b) {
		var _r, _r$1, _tmp, _tmp$1, _tuple, _tuple$1, a, b, err, hb, lb, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; err = $f.err; hb = $f.hb; lb = $f.lb; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  &�		_tmp = 0;
		_tmp$1 = 0;
		hb = _tmp;
		lb = _tmp$1;
  &�		err = $ifaceNil;
  &�		_r = fromHex(a); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		hb = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  '			$s = -1; return [0, err];
    		}
  '#		_r$1 = fromHex(b); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		lb = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  'H			$s = -1; return [0, err];
    		}
  'Z		$s = -1; return [((hb << 4 << 24 >>> 24) | lb) >>> 0, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: readHexByte }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.err = err; $f.hb = hb; $f.lb = lb; $f.$s = $s; $f.$r = $r; return $f;
	};
readHexBytemime.fromHexmime.readHexByte mime.fromHexmimefromHex fromHex��	fromHex = function(b) {
		var $24r, _r, b, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; b = $f.b; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (b >= 48 && b <= 57) {
  '�			$s = -1; return [b - 48 << 24 >>> 24, $ifaceNil];
    		} else if (b >= 65 && b <= 70) {
  '�			$s = -1; return [(b - 65 << 24 >>> 24) + 10 << 24 >>> 24, $ifaceNil];
    		} else if (b >= 97 && b <= 102) {
  (J			$s = -1; return [(b - 97 << 24 >>> 24) + 10 << 24 >>> 24, $ifaceNil];
    		}
  (g		_r = fmt.Errorf("mime: invalid hex byte %#02x", new sliceType$2([new $Uint8(b)])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = [0, _r];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: fromHex }; } $f.$24r = $24r; $f._r = _r; $f.b = b; $f.$s = $s; $f.$r = $r; return $f;
	};
fromHex
fmt.Errorfmime.fromHexmime.sliceType$2 mime.isTSpecialmime
isTSpecial 
isTSpecialj	isTSpecial = function(r) {
		var r;
  )�		return strings.ContainsRune("()<>@,;:\\\"/[]?=", r);
    	};

isTSpecialmime.isTSpecialstrings.ContainsRune mime.isTokenCharmimeisTokenChar isTokenCharb	isTokenChar = function(r) {
		var r;
  *�		return r > 32 && r < 127 && !isTSpecial(r);
    	};
isTokenCharmime.isTSpecialmime.isTokenChar mime.isTokenmimeisToken isToken��	isToken = function(s) {
		var $24r, _r, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		if (s === "") {
  +�			$s = -1; return false;
    		}
  +�		_r = strings.IndexFunc(s, isNotTokenChar); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r < 0;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: isToken }; } $f.$24r = $24r; $f._r = _r; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
isTokenmime.isNotTokenCharmime.isTokenstrings.IndexFunc mime.FormatMediaTypemimeFormatMediaType FormatMediaType��	FormatMediaType = function(t, param) {
		var _entry, _entry$1, _i, _i$1, _keys, _r, _r$1, _r$10, _r$11, _r$12, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _tmp, _tmp$1, _v, a, attribute, attrs, b, ch, character, index, index$1, major, needEnc, offset, offset$1, param, slash, sub, t, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _i = $f._i; _i$1 = $f._i$1; _keys = $f._keys; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$11 = $f._r$11; _r$12 = $f._r$12; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _v = $f._v; a = $f.a; attribute = $f.attribute; attrs = $f.attrs; b = $f.b; ch = $f.ch; character = $f.character; index = $f.index; index$1 = $f.index$1; major = $f.major; needEnc = $f.needEnc; offset = $f.offset; offset$1 = $f.offset$1; param = $f.param; slash = $f.slash; sub = $f.sub; t = $f.t; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  .2		b = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  .H		slash = strings.IndexByte(t, 47);
  .E		/* */ if (slash === -1) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (slash === -1) { */ case 1:
  .|			_r = isToken(t); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 4; continue; }
			/* */ $s = 5; continue;
    			/* if (!_r) { */ case 4:
  .�				$s = -1; return "";
    			/* } */ case 5:
  .�			_r$1 = strings.ToLower(t); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = b.WriteString(_r$1); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_r$2;
    			$s = 3; continue;
		/* } else { */ case 2:
  .�			_tmp = $substring(t, 0, slash);
			_tmp$1 = $substring(t, (slash + 1 >> 0));
			major = _tmp;
			sub = _tmp$1;
  .�			_r$3 = isToken(major); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			if (!_r$3) { _v = true; $s = 11; continue s; }
			_r$4 = isToken(sub); /* */ $s = 13; case 13: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_v = !_r$4; case 11:
			/* */ if (_v) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if (_v) { */ case 9:
  /				$s = -1; return "";
    			/* } */ case 10:
  /.			_r$5 = strings.ToLower(major); /* */ $s = 14; case 14: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_r$6 = b.WriteString(_r$5); /* */ $s = 15; case 15: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_r$6;
  /V			b.WriteByte(47);
  /i			_r$7 = strings.ToLower(sub); /* */ $s = 16; case 16: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			_r$8 = b.WriteString(_r$7); /* */ $s = 17; case 17: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			_r$8;
    		/* } */ case 3:
  /�		attrs = $makeSlice(sliceType, 0, $keys(param).length);
  /�		_ref = param;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			a = _entry.k;
  /�			attrs = $append(attrs, a);
    			_i++;
		}
  /�		$r = sort.Strings(attrs); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  0		_ref$1 = attrs;
		_i$1 = 0;
		/* while (true) { */ case 19:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 20; continue; }
			attribute = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  0*			value = (_entry$1 = param[$String.keyFor(attribute)], _entry$1 !== undefined ? _entry$1.v : "");
  0F			b.WriteByte(59);
  0Y			b.WriteByte(32);
  0l			_r$9 = isToken(attribute); /* */ $s = 23; case 23: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			/* */ if (!_r$9) { $s = 21; continue; }
			/* */ $s = 22; continue;
    			/* if (!_r$9) { */ case 21:
  0�				$s = -1; return "";
    			/* } */ case 22:
  0�			_r$10 = strings.ToLower(attribute); /* */ $s = 24; case 24: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			_r$11 = b.WriteString(_r$10); /* */ $s = 25; case 25: if($c) { $c = false; _r$11 = _r$11.$blk(); } if (_r$11 && _r$11.$blk !== undefined) { break s; }
			_r$11;
  0�			needEnc = needsEncoding(value);
    			if (needEnc) {
  1				b.WriteByte(42);
    			}
  1'			b.WriteByte(61);
    			if (needEnc) {
  1K				b.WriteString("utf-8''");
  1h				offset = 0;
  1{				index = 0;
				while (true) {
					if (!(index < value.length)) { break; }
  1�					ch = value.charCodeAt(index);
    					if (ch <= 32 || ch >= 127 || (ch === 42) || (ch === 39) || (ch === 37) || isTSpecial(((ch >> 0)))) {
  2�						b.WriteString($substring(value, offset, index));
  2�						offset = index + 1 >> 0;
  2�						b.WriteByte(37);
  2�						b.WriteByte("0123456789ABCDEF".charCodeAt((ch >>> 4 << 24 >>> 24)));
  3!						b.WriteByte("0123456789ABCDEF".charCodeAt(((ch & 15) >>> 0)));
    					}
  1�					index = index + (1) >> 0;
    				}
  3N				b.WriteString($substring(value, offset));
  3o				_i$1++;
				/* continue; */ $s = 19; continue;
    			}
  3			_r$12 = isToken(value); /* */ $s = 28; case 28: if($c) { $c = false; _r$12 = _r$12.$blk(); } if (_r$12 && _r$12.$blk !== undefined) { break s; }
			/* */ if (_r$12) { $s = 26; continue; }
			/* */ $s = 27; continue;
    			/* if (_r$12) { */ case 26:
  3�				b.WriteString(value);
  3�				_i$1++;
				/* continue; */ $s = 19; continue;
    			/* } */ case 27:
  3�			b.WriteByte(34);
  3�			offset$1 = 0;
  3�			index$1 = 0;
			while (true) {
				if (!(index$1 < value.length)) { break; }
  4				character = value.charCodeAt(index$1);
    				if ((character === 34) || (character === 92)) {
  4\					b.WriteString($substring(value, offset$1, index$1));
  4�					offset$1 = index$1;
  4�					b.WriteByte(92);
    				}
  4				index$1 = index$1 + (1) >> 0;
    			}
  4�			b.WriteString($substring(value, offset$1));
  4�			b.WriteByte(34);
    			_i$1++;
		$s = 19; continue;
		case 20:
  4�		$s = -1; return b.String();
    		/* */ } return; } if ($f === undefined) { $f = { $blk: FormatMediaType }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._i = _i; $f._i$1 = _i$1; $f._keys = _keys; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$11 = _r$11; $f._r$12 = _r$12; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._v = _v; $f.a = a; $f.attribute = attribute; $f.attrs = attrs; $f.b = b; $f.ch = ch; $f.character = character; $f.index = index; $f.index$1 = index$1; $f.major = major; $f.needEnc = needEnc; $f.offset = offset; $f.offset$1 = offset$1; $f.param = param; $f.slash = slash; $f.sub = sub; $f.t = t; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.FormatMediaType = FormatMediaType;
FormatMediaTypemime.FormatMediaTypemime.isTSpecialmime.isTokenmime.needsEncodingmime.ptrTypemime.sliceTypemime.sliceType$1sort.Stringsstrings.Builderstrings.IndexBytestrings.ToLower mime.checkMediaTypeDispositionmimecheckMediaTypeDisposition checkMediaTypeDisposition��	checkMediaTypeDisposition = function(s) {
		var _r, _r$1, _tuple, _tuple$1, rest, s, subtype, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; rest = $f.rest; s = $f.s; subtype = $f.subtype; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  5/		_r = consumeToken(s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		typ = _tuple[0];
		rest = _tuple[1];
    		if (typ === "") {
  5^			$s = -1; return errors.New("mime: no media type");
    		}
    		if (rest === "") {
  5�			$s = -1; return $ifaceNil;
    		}
    		if (!strings.HasPrefix(rest, "/")) {
  5�			$s = -1; return errors.New("mime: expected slash after first token");
    		}
  6		_r$1 = consumeToken($substring(rest, 1)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		subtype = _tuple$1[0];
		rest = _tuple$1[1];
    		if (subtype === "") {
  6O			$s = -1; return errors.New("mime: expected token after slash");
    		}
    		if (!(rest === "")) {
  6�			$s = -1; return errors.New("mime: unexpected content after media subtype");
    		}
  6�		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: checkMediaTypeDisposition }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.rest = rest; $f.s = s; $f.subtype = subtype; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
checkMediaTypeDisposition
errors.Newmime.checkMediaTypeDispositionmime.consumeTokenstrings.HasPrefix mime.ParseMediaTypemimeParseMediaType ParseMediaType�)�	ParseMediaType = function(v) {
		var _entry, _entry$1, _entry$2, _entry$3, _entry$4, _entry$5, _entry$6, _i, _key, _key$1, _key$2, _key$3, _keys, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, _tuple$8, baseName, buf, continuation, decv, decv$1, decv$2, encodedPart, err, exists, i, idx, key, key$1, mediatype, n, ok, ok$1, ok$2, ok$3, ok$4, ok$5, params, pieceMap, pmap, rest, simplePart, singlePartKey, v, v$1, v$2, v$3, valid, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _entry$3 = $f._entry$3; _entry$4 = $f._entry$4; _entry$5 = $f._entry$5; _entry$6 = $f._entry$6; _i = $f._i; _key = $f._key; _key$1 = $f._key$1; _key$2 = $f._key$2; _key$3 = $f._key$3; _keys = $f._keys; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; _tuple$8 = $f._tuple$8; baseName = $f.baseName; buf = $f.buf; continuation = $f.continuation; decv = $f.decv; decv$1 = $f.decv$1; decv$2 = $f.decv$2; encodedPart = $f.encodedPart; err = $f.err; exists = $f.exists; i = $f.i; idx = $f.idx; key = $f.key; key$1 = $f.key$1; mediatype = $f.mediatype; n = $f.n; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; ok$3 = $f.ok$3; ok$4 = $f.ok$4; ok$5 = $f.ok$5; params = $f.params; pieceMap = $f.pieceMap; pmap = $f.pmap; rest = $f.rest; simplePart = $f.simplePart; singlePartKey = $f.singlePartKey; v = $f.v; v$1 = $f.v$1; v$2 = $f.v$2; v$3 = $f.v$3; valid = $f.valid; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		mediatype = "";
		params = false;
		err = $ifaceNil;
  :^		i = strings.Index(v, ";");
    		if (i === -1) {
  :�			i = v.length;
    		}
  :�		_r = strings.ToLower($substring(v, 0, i)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = strings.TrimSpace(_r); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		mediatype = _r$1;
  :�		_r$2 = checkMediaTypeDisposition(mediatype); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		err = _r$2;
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
    			_tmp = "";
			_tmp$1 = false;
			_tmp$2 = err;
			mediatype = _tmp;
			params = _tmp$1;
			err = _tmp$2;
			$s = -1; return [mediatype, params, err];
    		}
  ;(		params = {};
  ;�		continuation = false;
  ;�		v = $substring(v, i);
  <		/* while (true) { */ case 4:
			/* if (!(v.length > 0)) { break; } */ if(!(v.length > 0)) { $s = 5; continue; }
  <			_r$3 = strings.TrimLeftFunc(v, unicode.IsSpace); /* */ $s = 6; case 6: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			v = _r$3;
    			if (v.length === 0) {
  <]				/* break; */ $s = 5; continue;
    			}
  <i			_r$4 = consumeMediaParam(v); /* */ $s = 7; case 7: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
			_tuple = _r$4;
			key = _tuple[0];
			value = _tuple[1];
			rest = _tuple[2];
  <�			/* */ if (key === "") { $s = 8; continue; }
			/* */ $s = 9; continue;
    			/* if (key === "") { */ case 8:
  <�				_r$5 = strings.TrimSpace(rest); /* */ $s = 12; case 12: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
				/* */ if (_r$5 === ";") { $s = 10; continue; }
				/* */ $s = 11; continue;
    				/* if (_r$5 === ";") { */ case 10:
  =					$s = -1; return [mediatype, params, err];
    				/* } */ case 11:
    				_tmp$3 = mediatype;
				_tmp$4 = false;
				_tmp$5 = $pkg.ErrInvalidMediaParameter;
				mediatype = _tmp$3;
				params = _tmp$4;
				err = _tmp$5;
				$s = -1; return [mediatype, params, err];
    			/* } */ case 9:
  =_			pmap = params;
  =s			idx = strings.Index(key, "*");
    			if (!((idx === -1))) {
  =�				baseName = $substring(key, 0, idx);
    				if (continuation === false) {
  =�					continuation = {};
    				}
  >				ok = false;
  >$				_tuple$1 = (_entry = continuation[$String.keyFor(baseName)], _entry !== undefined ? [_entry.v, true] : [false, false]);
				pmap = _tuple$1[0];
				ok = _tuple$1[1];
    				if (!ok) {
  >Q					_key = baseName; (continuation || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: {} };
  >�					pmap = (_entry$1 = continuation[$String.keyFor(baseName)], _entry$1 !== undefined ? _entry$1.v : false);
    				}
    			}
  >�			_tuple$2 = (_entry$2 = pmap[$String.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : ["", false]);
			exists = _tuple$2[1];
    			if (exists) {
    				_tmp$6 = "";
				_tmp$7 = false;
				_tmp$8 = errors.New("mime: duplicate parameter name");
				mediatype = _tmp$6;
				params = _tmp$7;
				err = _tmp$8;
				$s = -1; return [mediatype, params, err];
    			}
  ?B			_key$1 = key; (pmap || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$1)] = { k: _key$1, v: value };
  ?V			v = rest;
    		$s = 4; continue;
		case 5:
  ?�		buf = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  ?�		_ref = continuation;
		_i = 0;
		_keys = $keys(_ref);
		/* while (true) { */ case 13:
			/* if (!(_i < _keys.length)) { break; } */ if(!(_i < _keys.length)) { $s = 14; continue; }
			_entry$3 = _ref[_keys[_i]];
    			if (_entry$3 === undefined) {
    				_i++;
				/* continue; */ $s = 13; continue;
    			}
			key$1 = _entry$3.k;
			pieceMap = _entry$3.v;
  @			singlePartKey = key$1 + "*";
  @=			_tuple$3 = (_entry$4 = pieceMap[$String.keyFor(singlePartKey)], _entry$4 !== undefined ? [_entry$4.v, true] : ["", false]);
			v$1 = _tuple$3[0];
			ok$1 = _tuple$3[1];
  @:			/* */ if (ok$1) { $s = 15; continue; }
			/* */ $s = 16; continue;
    			/* if (ok$1) { */ case 15:
  @j				_r$6 = decode2231Enc(v$1); /* */ $s = 17; case 17: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
				_tuple$4 = _r$6;
				decv = _tuple$4[0];
				ok$2 = _tuple$4[1];
    				if (ok$2) {
  @�					_key$2 = key$1; (params || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$2)] = { k: _key$2, v: decv };
    				}
  @�				_i++;
				/* continue; */ $s = 13; continue;
    			/* } */ case 16:
  @�			buf.Reset();
  @�			valid = false;
  @�			n = 0;
			/* while (true) { */ case 18:
  @�				_r$7 = fmt.Sprintf("%s*%d", new sliceType$2([new $String(key$1), new $Int(n)])); /* */ $s = 20; case 20: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
				simplePart = _r$7;
  A#				_tuple$5 = (_entry$5 = pieceMap[$String.keyFor(simplePart)], _entry$5 !== undefined ? [_entry$5.v, true] : ["", false]);
				v$2 = _tuple$5[0];
				ok$3 = _tuple$5[1];
    				if (ok$3) {
  AK					valid = true;
  A\					buf.WriteString(v$2);
  @�					n = n + (1) >> 0;
    					/* continue; */ $s = 18; continue;
    				}
  A�				encodedPart = simplePart + "*";
  A�				_tuple$6 = (_entry$6 = pieceMap[$String.keyFor(encodedPart)], _entry$6 !== undefined ? [_entry$6.v, true] : ["", false]);
				v$3 = _tuple$6[0];
				ok$4 = _tuple$6[1];
    				if (!ok$4) {
  A�					/* break; */ $s = 19; continue;
    				}
  A�				valid = true;
  A�				/* */ if (n === 0) { $s = 21; continue; }
				/* */ $s = 22; continue;
    				/* if (n === 0) { */ case 21:
  B					_r$8 = decode2231Enc(v$3); /* */ $s = 24; case 24: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
					_tuple$7 = _r$8;
					decv$1 = _tuple$7[0];
					ok$5 = _tuple$7[1];
    					if (ok$5) {
  B/						buf.WriteString(decv$1);
    					}
    					$s = 23; continue;
				/* } else { */ case 22:
  B[					_r$9 = percentHexUnescape(v$3); /* */ $s = 25; case 25: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
					_tuple$8 = _r$9;
					decv$2 = _tuple$8[0];
  B�					buf.WriteString(decv$2);
    				/* } */ case 23:
  @�				n = n + (1) >> 0;
    			$s = 18; continue;
			case 19:
    			if (valid) {
  B�				_key$3 = key$1; (params || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key$3)] = { k: _key$3, v: buf.String() };
    			}
    			_i++;
		$s = 13; continue;
		case 14:
  B�		$s = -1; return [mediatype, params, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ParseMediaType }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._entry$3 = _entry$3; $f._entry$4 = _entry$4; $f._entry$5 = _entry$5; $f._entry$6 = _entry$6; $f._i = _i; $f._key = _key; $f._key$1 = _key$1; $f._key$2 = _key$2; $f._key$3 = _key$3; $f._keys = _keys; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f._tuple$8 = _tuple$8; $f.baseName = baseName; $f.buf = buf; $f.continuation = continuation; $f.decv = decv; $f.decv$1 = decv$1; $f.decv$2 = decv$2; $f.encodedPart = encodedPart; $f.err = err; $f.exists = exists; $f.i = i; $f.idx = idx; $f.key = key; $f.key$1 = key$1; $f.mediatype = mediatype; $f.n = n; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.ok$3 = ok$3; $f.ok$4 = ok$4; $f.ok$5 = ok$5; $f.params = params; $f.pieceMap = pieceMap; $f.pmap = pmap; $f.rest = rest; $f.simplePart = simplePart; $f.singlePartKey = singlePartKey; $f.v = v; $f.v$1 = v$1; $f.v$2 = v$2; $f.v$3 = v$3; $f.valid = valid; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ParseMediaType = ParseMediaType;
ParseMediaType
errors.Newfmt.Sprintfmime.ErrInvalidMediaParametermime.ParseMediaTypemime.checkMediaTypeDispositionmime.consumeMediaParammime.decode2231Encmime.percentHexUnescapemime.ptrTypemime.sliceType$1mime.sliceType$2strings.Builderstrings.Indexstrings.ToLowerstrings.TrimLeftFuncstrings.TrimSpaceunicode.IsSpace mime.decode2231Encmimedecode2231Enc decode2231Enc�j	decode2231Enc = function(v) {
		var _r, _r$1, _tuple, charset, encv, err, sv, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; charset = $f.charset; encv = $f.encv; err = $f.err; sv = $f.sv; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  C		sv = strings.SplitN(v, "'", 3);
    		if (!((sv.$length === 3))) {
  CA			$s = -1; return ["", false];
    		}
  C�		_r = strings.ToLower((0 >= sv.$length ? ($throwRuntimeError("index out of range"), undefined) : sv.$array[sv.$offset + 0])); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		charset = _r;
    		if (charset.length === 0) {
  D8			$s = -1; return ["", false];
    		}
    		if (!(charset === "us-ascii") && !(charset === "utf-8")) {
  D�			$s = -1; return ["", false];
    		}
  D�		_r$1 = percentHexUnescape((2 >= sv.$length ? ($throwRuntimeError("index out of range"), undefined) : sv.$array[sv.$offset + 2])); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		encv = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  D�			$s = -1; return ["", false];
    		}
  E		$s = -1; return [encv, true];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: decode2231Enc }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.charset = charset; $f.encv = encv; $f.err = err; $f.sv = sv; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
decode2231Encmime.decode2231Encmime.percentHexUnescapestrings.SplitNstrings.ToLower mime.isNotTokenCharmimeisNotTokenChar isNotTokenCharQ	isNotTokenChar = function(r) {
		var r;
  E=		return !isTokenChar(r);
    	};
isNotTokenCharmime.isNotTokenCharmime.isTokenChar mime.consumeTokenmimeconsumeToken consumeToken��	consumeToken = function(v) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, notPos, rest, token, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; notPos = $f.notPos; rest = $f.rest; token = $f.token; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		token = "";
		rest = "";
  F�		_r = strings.IndexFunc(v, isNotTokenChar); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		notPos = _r;
    		if (notPos === -1) {
    			_tmp = v;
			_tmp$1 = "";
			token = _tmp;
			rest = _tmp$1;
			$s = -1; return [token, rest];
    		}
    		if (notPos === 0) {
    			_tmp$2 = "";
			_tmp$3 = v;
			token = _tmp$2;
			rest = _tmp$3;
			$s = -1; return [token, rest];
    		}
    		_tmp$4 = $substring(v, 0, notPos);
		_tmp$5 = $substring(v, notPos);
		token = _tmp$4;
		rest = _tmp$5;
		$s = -1; return [token, rest];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: consumeToken }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.notPos = notPos; $f.rest = rest; $f.token = token; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
consumeTokenmime.consumeTokenmime.isNotTokenCharstrings.IndexFunc mime.consumeValuemimeconsumeValue consumeValue�	Q	consumeValue = function(v) {
		var $24r, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, buffer, i, r, rest, v, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; buffer = $f.buffer; i = $f.i; r = $f.r; rest = $f.rest; v = $f.v; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = "";
		rest = "";
    		if (v === "") {
  Hr			$s = -1; return [value, rest];
    		}
  H}		/* */ if (!((v.charCodeAt(0) === 34))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((v.charCodeAt(0) === 34))) { */ case 1:
    			_r = consumeToken(v); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			value = _tuple[0];
			rest = _tuple[1];
			$24r = [value, rest];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  H�		buffer = new strings.Builder.ptr(ptrType.nil, sliceType$1.nil);
  H�		i = 1;
		while (true) {
			if (!(i < v.length)) { break; }
  I			r = v.charCodeAt(i);
    			if (r === 34) {
    				_tmp = buffer.String();
				_tmp$1 = $substring(v, (i + 1 >> 0));
				value = _tmp;
				rest = _tmp$1;
				$s = -1; return [value, rest];
    			}
    			if ((r === 92) && (i + 1 >> 0) < v.length && isTSpecial(((v.charCodeAt((i + 1 >> 0)) >> 0)))) {
  K�				buffer.WriteByte(v.charCodeAt((i + 1 >> 0)));
  K�				i = i + (1) >> 0;
  H�				i = i + (1) >> 0;
    				continue;
    			}
    			if ((r === 13) || (r === 10)) {
    				_tmp$2 = "";
				_tmp$3 = v;
				value = _tmp$2;
				rest = _tmp$3;
				$s = -1; return [value, rest];
    			}
  K�			buffer.WriteByte(v.charCodeAt(i));
  H�			i = i + (1) >> 0;
    		}
    		_tmp$4 = "";
		_tmp$5 = v;
		value = _tmp$4;
		rest = _tmp$5;
		$s = -1; return [value, rest];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: consumeValue }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f.buffer = buffer; $f.i = i; $f.r = r; $f.rest = rest; $f.v = v; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
consumeValuemime.consumeTokenmime.consumeValuemime.isTSpecialmime.ptrTypemime.sliceType$1strings.Builder mime.consumeMediaParammimeconsumeMediaParam consumeMediaParam��	consumeMediaParam = function(v) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, param, rest, rest2, v, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; param = $f.param; rest = $f.rest; rest2 = $f.rest2; v = $f.v; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		param = "";
		value = "";
		rest = "";
  Ls		_r = strings.TrimLeftFunc(v, unicode.IsSpace); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		rest = _r;
    		if (!strings.HasPrefix(rest, ";")) {
    			_tmp = "";
			_tmp$1 = "";
			_tmp$2 = v;
			param = _tmp;
			value = _tmp$1;
			rest = _tmp$2;
			$s = -1; return [param, value, rest];
    		}
  L�		rest = $substring(rest, 1);
  M		_r$1 = strings.TrimLeftFunc(rest, unicode.IsSpace); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		rest = _r$1;
  M9		_r$2 = consumeToken(rest); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple = _r$2;
		param = _tuple[0];
		rest = _tuple[1];
  M[		_r$3 = strings.ToLower(param); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		param = _r$3;
    		if (param === "") {
    			_tmp$3 = "";
			_tmp$4 = "";
			_tmp$5 = v;
			param = _tmp$3;
			value = _tmp$4;
			rest = _tmp$5;
			$s = -1; return [param, value, rest];
    		}
  M�		_r$4 = strings.TrimLeftFunc(rest, unicode.IsSpace); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		rest = _r$4;
    		if (!strings.HasPrefix(rest, "=")) {
    			_tmp$6 = "";
			_tmp$7 = "";
			_tmp$8 = v;
			param = _tmp$6;
			value = _tmp$7;
			rest = _tmp$8;
			$s = -1; return [param, value, rest];
    		}
  N		rest = $substring(rest, 1);
  N:		_r$5 = strings.TrimLeftFunc(rest, unicode.IsSpace); /* */ $s = 6; case 6: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		rest = _r$5;
  Nn		_r$6 = consumeValue(rest); /* */ $s = 7; case 7: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
		_tuple$1 = _r$6;
		value = _tuple$1[0];
		rest2 = _tuple$1[1];
    		if (value === "" && rest2 === rest) {
    			_tmp$9 = "";
			_tmp$10 = "";
			_tmp$11 = v;
			param = _tmp$9;
			value = _tmp$10;
			rest = _tmp$11;
			$s = -1; return [param, value, rest];
    		}
  N�		rest = rest2;
    		_tmp$12 = param;
		_tmp$13 = value;
		_tmp$14 = rest;
		param = _tmp$12;
		value = _tmp$13;
		rest = _tmp$14;
		$s = -1; return [param, value, rest];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: consumeMediaParam }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.param = param; $f.rest = rest; $f.rest2 = rest2; $f.v = v; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
consumeMediaParammime.consumeMediaParammime.consumeTokenmime.consumeValuestrings.HasPrefixstrings.ToLowerstrings.TrimLeftFuncunicode.IsSpace mime.percentHexUnescapemimepercentHexUnescape percentHexUnescape�
	percentHexUnescape = function(s) {
		var $24r, _1, _r, i, i$1, j, percents, s, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; i = $f.i; i$1 = $f.i$1; j = $f.j; percents = $f.percents; s = $f.s; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  OX		percents = 0;
  Ok		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < s.length)) { break; } */ if(!(i < s.length)) { $s = 2; continue; }
    			if (!((s.charCodeAt(i) === 37))) {
  O�				i = i + (1) >> 0;
  O�				/* continue; */ $s = 1; continue;
    			}
  O�			percents = percents + (1) >> 0;
  O�			/* */ if ((i + 2 >> 0) >= s.length || !ishex(s.charCodeAt((i + 1 >> 0))) || !ishex(s.charCodeAt((i + 2 >> 0)))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if ((i + 2 >> 0) >= s.length || !ishex(s.charCodeAt((i + 1 >> 0))) || !ishex(s.charCodeAt((i + 2 >> 0)))) { */ case 3:
  O�				s = $substring(s, i);
    				if (s.length > 3) {
  P					s = $substring(s, 0, 3);
    				}
  P(				_r = fmt.Errorf("mime: bogus characters after %%: %q", new sliceType$2([new $String(s)])); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = ["", _r];
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
  Pn			i = i + (3) >> 0;
    		$s = 1; continue;
		case 2:
    		if (percents === 0) {
  P�			$s = -1; return [s, $ifaceNil];
    		}
  P�		t = $makeSlice(sliceType$1, (s.length - ($imul(2, percents)) >> 0));
  P�		j = 0;
  P�		i$1 = 0;
		while (true) {
			if (!(i$1 < s.length)) { break; }
    			_1 = s.charCodeAt(i$1);
    			if (_1 === (37)) {
  Q				((j < 0 || j >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + j] = (((unhex(s.charCodeAt((i$1 + 1 >> 0))) << 4 << 24 >>> 24) | unhex(s.charCodeAt((i$1 + 2 >> 0)))) >>> 0));
  Q3				j = j + (1) >> 0;
  Q:				i$1 = i$1 + (3) >> 0;
    			} else {
  QO				((j < 0 || j >= t.$length) ? ($throwRuntimeError("index out of range"), undefined) : t.$array[t.$offset + j] = s.charCodeAt(i$1));
  Q^				j = j + (1) >> 0;
  Qe				i$1 = i$1 + (1) >> 0;
    			}
    		}
  Qq		$s = -1; return [($bytesToString(t)), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: percentHexUnescape }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f.i = i; $f.i$1 = i$1; $f.j = j; $f.percents = percents; $f.s = s; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
percentHexUnescape
fmt.Errorf
mime.ishexmime.percentHexUnescapemime.sliceType$1mime.sliceType$2
mime.unhex 
mime.ishexmimeishex ishex��	ishex = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  Q�			return true;
    		} else if (97 <= c && c <= 102) {
  Q�			return true;
    		} else if (65 <= c && c <= 70) {
  R 			return true;
    		}
  R0		return false;
    	};
ishex
mime.ishex 
mime.unhexmimeunhex unhex�I	unhex = function(c) {
		var c;
    		if (48 <= c && c <= 57) {
  R�			return c - 48 << 24 >>> 24;
    		} else if (97 <= c && c <= 102) {
  R�			return (c - 97 << 24 >>> 24) + 10 << 24 >>> 24;
    		} else if (65 <= c && c <= 70) {
  R�			return (c - 65 << 24 >>> 24) + 10 << 24 >>> 24;
    		}
  R�		return 0;
    	};
unhex
mime.unhex mime.clearSyncMapmimeclearSyncMap clearSyncMap�Y	clearSyncMap = function(m) {
		var m, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; m = $f.m; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = [m];
  U�		$r = m[0].Range((function(m) { return function $b(k, param) {
			var k, param, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; k = $f.k; param = $f.param; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  V			$r = m[0].Delete(k); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  V			$s = -1; return true;
    			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.k = k; $f.param = param; $f.$s = $s; $f.$r = $r; return $f;
		}; })(m)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: clearSyncMap }; } $f.m = m; $f.$s = $s; $f.$r = $r; return $f;
	};
clearSyncMapmime.clearSyncMap mime.setMimeTypesmimesetMimeTypes setMimeTypes�/	setMimeTypes = function(lowerExt, mixExt) {
		var _entry, _entry$1, _entry$2, _i, _i$1, _i$2, _keys, _keys$1, _keys$2, _r, _r$1, _ref, _ref$1, _ref$2, _tuple, _tuple$1, ei, err, exts, justType, k, k$1, k$2, lowerExt, mixExt, ok, v, v$1, v$2, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _keys = $f._keys; _keys$1 = $f._keys$1; _keys$2 = $f._keys$2; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; ei = $f.ei; err = $f.err; exts = $f.exts; justType = $f.justType; k = $f.k; k$1 = $f.k$1; k$2 = $f.k$2; lowerExt = $f.lowerExt; mixExt = $f.mixExt; ok = $f.ok; v = $f.v; v$1 = $f.v$1; v$2 = $f.v$2; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  V�		$r = clearSyncMap(mimeTypes); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  V�		$r = clearSyncMap(mimeTypesLower); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  V�		$r = clearSyncMap(extensions); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  W		_ref = lowerExt;
		_i = 0;
		_keys = $keys(_ref);
		/* while (true) { */ case 4:
			/* if (!(_i < _keys.length)) { break; } */ if(!(_i < _keys.length)) { $s = 5; continue; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				/* continue; */ $s = 4; continue;
    			}
			k = _entry.k;
			v = _entry.v;
  W 			$r = mimeTypesLower.Store(new $String(k), new $String(v)); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i++;
		$s = 4; continue;
		case 5:
  W?		_ref$1 = mixExt;
		_i$1 = 0;
		_keys$1 = $keys(_ref$1);
		/* while (true) { */ case 7:
			/* if (!(_i$1 < _keys$1.length)) { break; } */ if(!(_i$1 < _keys$1.length)) { $s = 8; continue; }
			_entry$1 = _ref$1[_keys$1[_i$1]];
    			if (_entry$1 === undefined) {
    				_i$1++;
				/* continue; */ $s = 7; continue;
    			}
			k$1 = _entry$1.k;
			v$1 = _entry$1.v;
  W\			$r = mimeTypes.Store(new $String(k$1), new $String(v$1)); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i$1++;
		$s = 7; continue;
		case 8:
  Ww		$r = extensionsMu.Lock(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  W�		$deferred.push([$methodVal(extensionsMu, "Unlock"), []]);
  W�		_ref$2 = lowerExt;
		_i$2 = 0;
		_keys$2 = $keys(_ref$2);
		/* while (true) { */ case 11:
			/* if (!(_i$2 < _keys$2.length)) { break; } */ if(!(_i$2 < _keys$2.length)) { $s = 12; continue; }
			_entry$2 = _ref$2[_keys$2[_i$2]];
    			if (_entry$2 === undefined) {
    				_i$2++;
				/* continue; */ $s = 11; continue;
    			}
			k$2 = _entry$2.k;
			v$2 = _entry$2.v;
  W�			_r = ParseMediaType(v$2); /* */ $s = 13; case 13: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			justType = _tuple[0];
			err = _tuple[2];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  X				$panic(err);
    			}
  X			exts = sliceType.nil;
  X+			_r$1 = extensions.Load(new $String(justType)); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			ei = _tuple$1[0];
			ok = _tuple$1[1];
    			if (ok) {
  XX				exts = $assertType(ei, sliceType);
    			}
  Xs			$r = extensions.Store(new $String(justType), $append(exts, k$2)); /* */ $s = 15; case 15: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i$2++;
		$s = 11; continue;
		case 12:
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: setMimeTypes }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._keys = _keys; $f._keys$1 = _keys$1; $f._keys$2 = _keys$2; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.ei = ei; $f.err = err; $f.exts = exts; $f.justType = justType; $f.k = k; $f.k$1 = k$1; $f.k$2 = k$2; $f.lowerExt = lowerExt; $f.mixExt = mixExt; $f.ok = ok; $f.v = v; $f.v$1 = v$1; $f.v$2 = v$2; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
setMimeTypesmime.ParseMediaTypemime.clearSyncMapmime.extensionsmime.extensionsMumime.mimeTypesmime.mimeTypesLowermime.setMimeTypesmime.sliceType mime.initMimemimeinitMime initMime�,	initMime = function() {
		var fn, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; fn = $f.fn; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  [%		fn = testInitMime;
  ["		/* */ if (!(fn === $throwNilPointerError)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(fn === $throwNilPointerError)) { */ case 1:
  [G			$r = fn(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			$s = 3; continue;
		/* } else { */ case 2:
  [X			$r = setMimeTypes(builtinTypesLower, builtinTypesLower); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  [�			$r = osInitMime(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: initMime }; } $f.fn = fn; $f.$s = $s; $f.$r = $r; return $f;
	};
initMimemime.builtinTypesLowermime.initMimemime.osInitMimemime.setMimeTypesmime.testInitMime mime.TypeByExtensionmimeTypeByExtension TypeByExtension��	TypeByExtension = function(ext) {
		var _r, _r$1, _r$2, _r$3, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, buf, c, ext, i, lower, ok, s, s$1, si, si$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; buf = $f.buf; c = $f.c; ext = $f.ext; i = $f.i; lower = $f.lower; ok = $f.ok; s = $f.s; s$1 = $f.s$1; si = $f.si; si$1 = $f.si$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ^�		$r = once.Do(initMime); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ^�		_r = mimeTypes.Load(new $String(ext)); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  _			$s = -1; return $assertType(v, $String);
    		}
  _�		buf = arrayType.zero();
  _�		lower = $subslice(new sliceType$1(buf), 0, 0);
  `		i = 0;
		/* while (true) { */ case 3:
			/* if (!(i < ext.length)) { break; } */ if(!(i < ext.length)) { $s = 4; continue; }
  `*			c = ext.charCodeAt(i);
  `8			/* */ if (c >= 128) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (c >= 128) { */ case 5:
  `c				_r$1 = strings.ToLower(ext); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_r$2 = mimeTypesLower.Load(new $String(_r$1)); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_tuple$1 = _r$2;
				si = _tuple$1[0];
  `�				_tuple$2 = $assertType(si, $String, true);
				s = _tuple$2[0];
  `�				$s = -1; return s;
    			/* } */ case 6:
    			if (65 <= c && c <= 90) {
  `�				lower = $append(lower, c + 32 << 24 >>> 24);
    			} else {
  a				lower = $append(lower, c);
    			}
  `"			i = i + (1) >> 0;
    		$s = 3; continue;
		case 4:
  a.		_r$3 = mimeTypesLower.Load(new $String(($bytesToString(lower)))); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$3 = _r$3;
		si$1 = _tuple$3[0];
  a[		_tuple$4 = $assertType(si$1, $String, true);
		s$1 = _tuple$4[0];
  ap		$s = -1; return s$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TypeByExtension }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f.buf = buf; $f.c = c; $f.ext = ext; $f.i = i; $f.lower = lower; $f.ok = ok; $f.s = s; $f.s$1 = s$1; $f.si = si; $f.si$1 = si$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.TypeByExtension = TypeByExtension;
TypeByExtensionmime.TypeByExtensionmime.arrayTypemime.initMimemime.mimeTypesmime.mimeTypesLower	mime.oncemime.sliceType$1strings.ToLower mime.ExtensionsByTypemimeExtensionsByType ExtensionsByType��	ExtensionsByType = function(typ) {
		var _r, _r$1, _tuple, _tuple$1, err, justType, ok, ret, s, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; justType = $f.justType; ok = $f.ok; ret = $f.ret; s = $f.s; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  b�		_r = ParseMediaType(typ); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		justType = _tuple[0];
		err = _tuple[2];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  b�			$s = -1; return [sliceType.nil, err];
    		}
  b�		$r = once.Do(initMime); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c		_r$1 = extensions.Load(new $String(justType)); /* */ $s = 3; case 3: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		s = _tuple$1[0];
		ok = _tuple$1[1];
    		if (!ok) {
  cA			$s = -1; return [sliceType.nil, $ifaceNil];
    		}
  cU		ret = $appendSlice((sliceType.nil), $assertType(s, sliceType));
  c�		$r = sort.Strings(ret); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  c�		$s = -1; return [ret, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ExtensionsByType }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.justType = justType; $f.ok = ok; $f.ret = ret; $f.s = s; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ExtensionsByType = ExtensionsByType;
ExtensionsByTypemime.ExtensionsByTypemime.ParseMediaTypemime.extensionsmime.initMime	mime.oncemime.sliceTypesort.Strings mime.AddExtensionTypemimeAddExtensionType AddExtensionType�q	AddExtensionType = function(ext, typ) {
		var $24r, $24r$1, _r, _r$1, ext, typ, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; ext = $f.ext; typ = $f.typ; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  do		/* */ if (!strings.HasPrefix(ext, ".")) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!strings.HasPrefix(ext, ".")) { */ case 1:
  d�			_r = fmt.Errorf("mime: extension %q missing leading dot", new sliceType$2([new $String(ext)])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  d�		$r = once.Do(initMime); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  d�		_r$1 = setExtensionType(ext, typ); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: AddExtensionType }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.ext = ext; $f.typ = typ; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.AddExtensionType = AddExtensionType;
AddExtensionType
fmt.Errorfmime.AddExtensionTypemime.initMime	mime.oncemime.setExtensionTypemime.sliceType$2strings.HasPrefix mime.setExtensionTypemimesetExtensionType setExtensionType�`	setExtensionType = function(extension, mimeType) {
		var $24r, $24r$1, $24r$2, _entry, _i, _key, _r, _r$1, _r$2, _r$3, _ref, _tuple, _tuple$1, ei, err, extLower, extension, exts, justType, mimeType, ok, param, v, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _entry = $f._entry; _i = $f._i; _key = $f._key; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; ei = $f.ei; err = $f.err; extLower = $f.extLower; extension = $f.extension; exts = $f.exts; justType = $f.justType; mimeType = $f.mimeType; ok = $f.ok; param = $f.param; v = $f.v; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  eK		_r = ParseMediaType(mimeType); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		justType = _tuple[0];
		param = _tuple[1];
		err = _tuple[2];
  e}		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  e�			$24r = err;
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  e�		/* */ if (strings.HasPrefix(mimeType, "text/") && (_entry = param[$String.keyFor("charset")], _entry !== undefined ? _entry.v : "") === "") { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (strings.HasPrefix(mimeType, "text/") && (_entry = param[$String.keyFor("charset")], _entry !== undefined ? _entry.v : "") === "") { */ case 5:
  e�			_key = "charset"; (param || $throwRuntimeError("assignment to entry in nil map"))[$String.keyFor(_key)] = { k: _key, v: "utf-8" };
  f			_r$1 = FormatMediaType(mimeType, param); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			mimeType = _r$1;
    		/* } */ case 6:
  f1		_r$2 = strings.ToLower(extension); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		extLower = _r$2;
  fZ		$r = mimeTypes.Store(new $String(extension), new $String(mimeType)); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  f�		$r = mimeTypesLower.Store(new $String(extLower), new $String(mimeType)); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  f�		$r = extensionsMu.Lock(); /* */ $s = 11; case 11: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  f�		$deferred.push([$methodVal(extensionsMu, "Unlock"), []]);
  f�		exts = sliceType.nil;
  f�		_r$3 = extensions.Load(new $String(justType)); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_tuple$1 = _r$3;
		ei = _tuple$1[0];
		ok = _tuple$1[1];
    		if (ok) {
  g			exts = $assertType(ei, sliceType);
    		}
  g8		_ref = exts;
		_i = 0;
		/* while (true) { */ case 13:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 14; continue; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  gS			/* */ if (v === extLower) { $s = 15; continue; }
			/* */ $s = 16; continue;
    			/* if (v === extLower) { */ case 15:
  gi				$24r$1 = $ifaceNil;
				$s = 17; case 17: return $24r$1;
    			/* } */ case 16:
    			_i++;
		$s = 13; continue;
		case 14:
  g|		$r = extensions.Store(new $String(justType), $append(exts, extLower)); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  g�		$24r$2 = $ifaceNil;
		$s = 19; case 19: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: setExtensionType }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._entry = _entry; $f._i = _i; $f._key = _key; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.ei = ei; $f.err = err; $f.extLower = extLower; $f.extension = extension; $f.exts = exts; $f.justType = justType; $f.mimeType = mimeType; $f.ok = ok; $f.param = param; $f.v = v; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
setExtensionType
mime.FormatMediaTypemime.ParseMediaTypemime.extensionsmime.extensionsMumime.mimeTypesmime.mimeTypesLowermime.setExtensionTypemime.sliceTypestrings.HasPrefixstrings.ToLower 	mime.initmimeinit init@	init = function() {
  iX		osInitMime = initMimeUnix;
    	};
    		init();
	mime.initmime.initMimeUnixmime.osInitMime mime.loadMimeGlobsFilemimeloadMimeGlobsFile loadMimeGlobsFile��	loadMimeGlobsFile = function(filename) {
		var $24r, $24r$1, _r, _r$1, _r$2, _r$3, _tuple, _tuple$1, err, err$1, extension, f, fields, filename, ok, scanner, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err$1 = $f.err$1; extension = $f.extension; f = $f.f; fields = $f.fields; filename = $f.filename; ok = $f.ok; scanner = $f.scanner; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  k\		_r = os.Open(filename); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  ky		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  k�			$24r = err;
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  k�		$deferred.push([$methodVal(f, "Close"), []]);
  k�		scanner = bufio.NewScanner(f);
  k�		/* while (true) { */ case 5:
			_r$1 = scanner.Scan(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* if (!(_r$1)) { break; } */ if(!(_r$1)) { $s = 6; continue; }
  l			fields = strings.Split(scanner.Text(), ":");
    			if (fields.$length < 3 || (0 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 0]).length < 1 || (2 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 2]).length < 2) {
  l�				/* continue; */ $s = 5; continue;
    			} else if (((0 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 0]).charCodeAt(0) === 35) || !(((2 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 2]).charCodeAt(0) === 42))) {
  l�				/* continue; */ $s = 5; continue;
    			}
  l�			extension = $substring((2 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 2]), 1);
  m			_r$2 = mimeTypes.Load(new $String(extension)); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			ok = _tuple$1[1];
    			if (ok) {
  m�				/* continue; */ $s = 5; continue;
    			}
  m�			_r$3 = setExtensionType(extension, (1 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 1])); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			_r$3;
    		$s = 5; continue;
		case 6:
  m�		err$1 = scanner.Err();
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  n			$panic(err$1);
    		}
  n		$24r$1 = $ifaceNil;
		$s = 10; case 10: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: loadMimeGlobsFile }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err$1 = err$1; $f.extension = extension; $f.f = f; $f.fields = fields; $f.filename = filename; $f.ok = ok; $f.scanner = scanner; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
loadMimeGlobsFilebufio.NewScannermime.loadMimeGlobsFilemime.mimeTypesmime.setExtensionTypeos.Openstrings.Split mime.loadMimeFilemimeloadMimeFile loadMimeFile�	loadMimeFile = function(filename) {
		var _i, _r, _r$1, _r$2, _r$3, _ref, _tuple, err, err$1, ext, f, fields, filename, mimeType, scanner, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _tuple = $f._tuple; err = $f.err; err$1 = $f.err$1; ext = $f.ext; f = $f.f; fields = $f.fields; filename = $f.filename; mimeType = $f.mimeType; scanner = $f.scanner; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
  nQ		_r = os.Open(filename); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  nn		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  n�			$s = 4; case 4: return;
    		/* } */ case 3:
  n�		$deferred.push([$methodVal(f, "Close"), []]);
  n�		scanner = bufio.NewScanner(f);
  n�		/* while (true) { */ case 5:
			_r$1 = scanner.Scan(); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			/* if (!(_r$1)) { break; } */ if(!(_r$1)) { $s = 6; continue; }
  n�			_r$2 = strings.Fields(scanner.Text()); /* */ $s = 8; case 8: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			fields = _r$2;
    			if (fields.$length <= 1 || ((0 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 0]).charCodeAt(0) === 35)) {
  o/				/* continue; */ $s = 5; continue;
    			}
  o>			mimeType = (0 >= fields.$length ? ($throwRuntimeError("index out of range"), undefined) : fields.$array[fields.$offset + 0]);
  oV			_ref = $subslice(fields, 1);
			_i = 0;
			/* while (true) { */ case 9:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 10; continue; }
				ext = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    				if (ext.charCodeAt(0) === 35) {
  o�					/* break; */ $s = 10; continue;
    				}
  o�				_r$3 = setExtensionType("." + ext, mimeType); /* */ $s = 11; case 11: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_r$3;
    				_i++;
			$s = 9; continue;
			case 10:
    		$s = 5; continue;
		case 6:
  o�		err$1 = scanner.Err();
    		if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  o�			$panic(err$1);
    		}
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: loadMimeFile }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._tuple = _tuple; $f.err = err; $f.err$1 = err$1; $f.ext = ext; $f.f = f; $f.fields = fields; $f.filename = filename; $f.mimeType = mimeType; $f.scanner = scanner; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
loadMimeFilebufio.NewScannermime.loadMimeFilemime.setExtensionTypeos.Openstrings.Fields mime.initMimeUnixmimeinitMimeUnix initMimeUnix�	initMimeUnix = function() {
		var _i, _i$1, _r, _ref, _ref$1, err, filename, filename$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; err = $f.err; filename = $f.filename; filename$1 = $f.filename$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  p		_ref = mimeGlobs;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			filename = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  pE			_r = loadMimeGlobsFile(filename); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if ($interfaceIsEqual(err, $ifaceNil)) {
  py				$s = -1; return;
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  q		_ref$1 = typeFiles;
		_i$1 = 0;
		/* while (true) { */ case 4:
			/* if (!(_i$1 < _ref$1.$length)) { break; } */ if(!(_i$1 < _ref$1.$length)) { $s = 5; continue; }
			filename$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  q)			$r = loadMimeFile(filename$1); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_i$1++;
		$s = 4; continue;
		case 5:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: initMimeUnix }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.err = err; $f.filename = filename; $f.filename$1 = filename$1; $f.$s = $s; $f.$r = $r; return $f;
	};
initMimeUnixmime.initMimeUnixmime.loadMimeFilemime.loadMimeGlobsFilemime.mimeGlobsmime.typeFiles mime.initMimeForTestsmimeinitMimeForTests initMimeForTests�(	initMimeForTests = function() {
  qs		mimeGlobs = new sliceType([""]);
  q�		typeFiles = new sliceType(["testdata/test.types"]);
  q�		return $makeMap($String.keyFor, [{ k: ".T1", v: "application/test" }, { k: ".t2", v: "text/test; charset=utf-8" }, { k: ".png", v: "image/png" }]);
    	};
initMimeForTestsmime.initMimeForTestsmime.mimeGlobsmime.sliceTypemime.typeFiles ��{"Base":29237,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/mime/encodedword.go","Base":1,"Size":10400,"Lines":[0,55,109,159,160,173,174,183,192,211,221,228,234,245,256,272,274,275,329,351,352,360,432,462,533,563,565,566,572,640,642,643,719,793,839,895,919,930,933,966,968,969,1005,1028,1069,1084,1088,1091,1105,1107,1108,1161,1221,1246,1314,1368,1446,1460,1461,1488,1509,1539,1549,1579,1582,1599,1600,1621,1623,1624,1632,1692,1721,1745,1823,1842,1909,1911,1912,1976,1977,2042,2114,2163,2237,2269,2350,2373,2385,2394,2397,2398,2433,2473,2540,2572,2618,2619,2661,2686,2697,2729,2742,2771,2783,2807,2811,2814,2843,2854,2856,2857,2931,2964,3036,3095,3118,3141,3150,3153,3154,3183,3223,3235,3302,3334,3351,3415,3441,3452,3499,3523,3527,3528,3569,3598,3616,3620,3656,3679,3682,3684,3685,3750,3802,3833,3855,3872,3894,3959,3979,3990,4012,4045,4080,4084,4087,4089,4090,4152,4222,4245,4271,4291,4315,4335,4337,4338,4395,4434,4457,4459,4460,4526,4597,4613,4633,4659,4661,4662,4697,4741,4743,4744,4780,4781,4854,4880,4942,5003,5027,5103,5131,5193,5265,5267,5268,5312,5372,5439,5500,5621,5649,5652,5682,5683,5721,5760,5761,5823,5848,5872,5900,5903,5929,5957,5960,5987,6035,6062,6090,6093,6117,6118,6158,6175,6192,6195,6196,6221,6222,6281,6298,6301,6302,6328,6330,6331,6408,6469,6537,6604,6638,6652,6673,6676,6677,6702,6703,6732,6753,6754,6777,6784,6823,6842,6851,6855,6882,6883,6923,6938,6947,6951,6984,7006,7007,7044,7053,7057,7083,7091,7092,7118,7127,7131,7139,7140,7181,7196,7205,7209,7239,7268,7269,7310,7328,7352,7389,7418,7430,7434,7435,7506,7568,7640,7675,7679,7680,7740,7758,7762,7763,7787,7809,7812,7813,7835,7861,7864,7865,7891,7893,7894,7952,7971,7987,8034,8050,8073,8083,8112,8115,8117,8118,8210,8220,8263,8284,8332,8362,8388,8392,8438,8468,8495,8538,8550,8571,8576,8580,8590,8620,8680,8684,8764,8782,8796,8800,8844,8858,8862,8865,8877,8879,8880,8958,8989,9028,9051,9064,9139,9176,9206,9217,9232,9236,9239,9253,9255,9256,9295,9336,9365,9373,9404,9426,9443,9459,9476,9498,9529,9534,9575,9594,9614,9619,9633,9643,9713,9727,9738,9768,9772,9778,9781,9782,9803,9805,9806,9880,9924,9941,9956,9995,10011,10014,10053,10069,10072,10096,10098,10099,10136,10146,10174,10196,10224,10251,10283,10311,10338,10341,10398],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/mime/grammar.go","Base":10402,"Size":828,"Lines":[0,55,109,159,160,173,174,183,194,196,197,268,290,321,372,374,375,443,465,497,553,583,630,632,633,698,715,745,759,774,777,826],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/mime/mediatype.go","Base":11231,"Size":10021,"Lines":[0,55,109,159,160,173,174,183,193,200,208,219,230,232,233,294,356,415,480,525,590,613,667,686,699,703,739,749,788,828,841,845,885,904,942,945,946,986,1010,1037,1040,1061,1062,1097,1125,1144,1163,1190,1203,1207,1251,1252,1286,1301,1326,1346,1350,1369,1370,1385,1413,1414,1429,1478,1501,1529,1624,1658,1703,1731,1732,1772,1796,1797,1819,1853,1889,1895,1900,1933,1945,1949,1950,1972,1996,2008,2012,2013,2032,2046,2094,2123,2169,2208,2227,2249,2254,2258,2290,2309,2312,2331,2333,2334,2383,2413,2429,2472,2475,2492,2505,2508,2544,2606,2609,2650,2670,2726,2729,2746,2814,2817,2829,2831,2832,2893,2958,2985,3060,3061,3122,3182,3242,3305,3367,3423,3479,3508,3561,3622,3710,3738,3752,3765,3768,3824,3825,3869,3886,3908,3911,3912,3946,3947,4005,4052,4076,4123,4124,4135,4153,4200,4219,4228,4232,4275,4292,4331,4366,4387,4398,4403,4422,4473,4477,4478,4495,4544,4569,4597,4651,4656,4671,4718,4771,4805,4810,4814,4852,4893,4957,4961,4981,4992,4995,4996,5055,5112,5137,5180,5209,5253,5294,5317,5322,5334,5338,5339,5353,5370,5392,5438,5480,5497,5520,5533,5538,5573,5607,5619,5629,5634,5650,5665,5707,5734,5740,5752,5789,5815,5820,5824,5837,5867,5871,5874,5875,5883,5885,5886,5932,5965,5984,6003,6006,6074,6139,6172,6207,6231,6250,6253,6303,6335,6354,6357,6397,6414,6433,6436,6455,6457,6458,6493,6517,6519,6520,6584,6655,6724,6770,6821,6869,6888,6903,6906,6924,6939,6942,6974,6976,6977,7043,7111,7170,7236,7248,7299,7313,7322,7325,7343,7368,7371,7372,7398,7430,7461,7473,7489,7524,7528,7600,7674,7679,7744,7803,7808,7879,7955,8024,8041,8102,8130,8137,8149,8153,8183,8199,8203,8228,8231,8259,8273,8275,8276,8339,8388,8424,8443,8446,8447,8485,8537,8571,8603,8621,8640,8643,8644,8696,8732,8751,8754,8794,8846,8882,8917,8936,8939,8953,8980,8982,8983,9035,9080,9095,9122,9141,9148,9160,9164,9177,9234,9247,9266,9281,9286,9353,9357,9366,9369,9389,9405,9408,9409,9447,9455,9482,9498,9510,9553,9560,9570,9581,9596,9603,9610,9614,9617,9640,9642,9643,9669,9679,9707,9721,9749,9763,9791,9805,9808,9822,9824,9825,9851,9861,9889,9906,9934,9956,9984,10006,10009,10019],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/mime/type.go","Base":21253,"Size":5304,"Lines":[0,55,109,159,160,211,224,225,234,241,249,260,268,270,271,277,357,437,438,499,549,622,701,703,704,737,776,790,804,808,810,811,878,934,960,991,1018,1019,1049,1078,1081,1109,1133,1136,1137,1158,1187,1217,1257,1275,1289,1293,1313,1360,1384,1388,1434,1437,1439,1440,1483,1507,1544,1567,1605,1643,1667,1691,1735,1765,1809,1838,1861,1888,1918,1942,1979,1981,1982,2020,2021,2057,2058,2076,2112,2119,2129,2182,2197,2200,2202,2203,2284,2353,2417,2420,2497,2500,2572,2651,2675,2678,2712,2740,2761,2790,2818,2821,2880,2883,2951,2993,3012,3013,3040,3079,3099,3102,3103,3132,3189,3223,3241,3259,3330,3363,3377,3402,3419,3473,3496,3508,3512,3540,3578,3589,3617,3621,3624,3669,3690,3700,3702,3703,3783,3862,3941,3955,4009,4050,4067,4085,4088,4089,4108,4144,4154,4172,4175,4222,4241,4258,4260,4261,4316,4377,4410,4457,4492,4559,4562,4581,4616,4618,4619,4677,4727,4744,4757,4760,4829,4858,4904,4907,4947,4948,4986,5028,5029,5050,5079,5098,5144,5167,5170,5196,5217,5231,5235,5238,5290,5302],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/mime/type_unix.go","Base":26558,"Size":2678,"Lines":[0,55,109,159,160,266,342,343,356,357,366,375,381,392,394,395,409,436,438,439,539,603,629,662,689,691,692,742,768,788,816,843,874,876,877,925,954,971,984,987,1004,1005,1037,1059,1117,1164,1231,1243,1300,1312,1316,1317,1346,1392,1433,1479,1514,1526,1530,1531,1572,1575,1614,1627,1630,1642,1644,1645,1682,1711,1728,1737,1740,1757,1758,1790,1812,1855,1902,1914,1918,1942,1977,1999,2009,2014,2053,2057,2060,2099,2112,2115,2117,2118,2140,2178,2232,2301,2305,2308,2309,2371,2409,2434,2437,2439,2440,2484,2510,2555,2582,2612,2650,2673,2676],"Infos":null}]}
 