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
GoLinkname�� Implementation�� 	Reference��   ��-��encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8�Ti ��
rReaderio wWriter	StartLineLineColumnErrErrore
ParseErrorUnwrapCommaCommentFieldsPerRecord
LazyQuotesTrimLeadingSpaceReuseRecordTrailingCommabufionumLine	rawBufferrecordBufferfieldIndexesfieldPositionsposition
lastRecordReadrecorderrFieldPosfieldlinecolumnReadAllrecordsreadLine
readRecorddstUseCRLFWriteFlushWriteAllfieldNeedsQuotespnbufrdlastBytelastRuneSizeSizebResetresetfillreadErrPeekDiscard	discardedReadByte
UnreadByteReadRunesize
UnreadRuneBuffered	ReadSlicedelimReadLineisPrefixcollectFragmentsfullBuffersfinalFragmenttotalLen	ReadBytes
ReadStringWriteTowriteBufcolwr	Availablenn	WriteBytec	WriteRuneWriteStringsReadFromcsvErrBareQuoteErrFieldCountErrQuoteErrTrailingComma	NewReader	NewWriterV V V V  	 /F   , 2  	 BF  ? E       %  ,  8iiT R 0 6l   C 6n   �� �� J  P  X  h   s   �   �    �  �  ��  ��  ��  ��  �� ///�//T � �  �  �� � �  � � � �  �  �  �� � �  �  �  �  � �� �   �� J  �   � BBBB�BT � � � ��   � �   0 �   � � ��   � � �   	  � �� � � T �	  � �� � � T �� ��  �,       �  �  � ���������������������T � � ��   � ��  ,   � �� ��  ,   � ��   � ��   � �� � �   � �� � � �  � �� �� � �  � ��    � ��   � ��    � � � ��   � ��   � �� � �� �  � ��  �� �  � � �� � �� �� � �  � �� � �   � �� �    � �� ? � �  � �� ?    �  � T � � �  ��  �  �? ����������T �
 � ��   � �� ?   � ��   � ��   � ��   � �� �� � �  � �� �   � ��   � �  � �� �    � ��  , � � � 
� ���	��'8P������ ��		 ��2 bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
ParseError��	ParseError = $pkg.ParseError = $newType(0, $kindStruct, "csv.ParseError", true, "encoding/csv", true, function(StartLine_, Line_, Column_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.StartLine = 0;
			this.Line = 0;
			this.Column = 0;
			this.Err = $ifaceNil;
			return;
		}
		this.StartLine = StartLine_;
		this.Line = Line_;
		this.Column = Column_;
		this.Err = Err_;
	});
��	ptrType$2.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Unwrap", name: "Unwrap", pkg: "", typ: $funcType([], [$error], false)}];
�r	ParseError.init("", [{prop: "StartLine", name: "StartLine", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Line", name: "Line", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Column", name: "Column", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $error, tag: ""}]);

ParseErrorencoding/csv.ParseErrorencoding/csv.ptrType$2  Reader��	Reader = $pkg.Reader = $newType(0, $kindStruct, "csv.Reader", true, "encoding/csv", true, function(Comma_, Comment_, FieldsPerRecord_, LazyQuotes_, TrimLeadingSpace_, ReuseRecord_, TrailingComma_, r_, numLine_, rawBuffer_, recordBuffer_, fieldIndexes_, fieldPositions_, lastRecord_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Comma = 0;
			this.Comment = 0;
			this.FieldsPerRecord = 0;
			this.LazyQuotes = false;
			this.TrimLeadingSpace = false;
			this.ReuseRecord = false;
			this.TrailingComma = false;
			this.r = ptrType.nil;
			this.numLine = 0;
			this.rawBuffer = sliceType$1.nil;
			this.recordBuffer = sliceType$1.nil;
			this.fieldIndexes = sliceType$2.nil;
			this.fieldPositions = sliceType$3.nil;
			this.lastRecord = sliceType$4.nil;
			return;
		}
		this.Comma = Comma_;
		this.Comment = Comment_;
		this.FieldsPerRecord = FieldsPerRecord_;
		this.LazyQuotes = LazyQuotes_;
		this.TrimLeadingSpace = TrimLeadingSpace_;
		this.ReuseRecord = ReuseRecord_;
		this.TrailingComma = TrailingComma_;
		this.r = r_;
		this.numLine = numLine_;
		this.rawBuffer = rawBuffer_;
		this.recordBuffer = recordBuffer_;
		this.fieldIndexes = fieldIndexes_;
		this.fieldPositions = fieldPositions_;
		this.lastRecord = lastRecord_;
	});
�	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([], [sliceType$4, $error], false)}, {prop: "FieldPos", name: "FieldPos", pkg: "", typ: $funcType([$Int], [$Int, $Int], false)}, {prop: "ReadAll", name: "ReadAll", pkg: "", typ: $funcType([], [sliceType$5, $error], false)}, {prop: "readLine", name: "readLine", pkg: "encoding/csv", typ: $funcType([], [sliceType$1, $error], false)}, {prop: "readRecord", name: "readRecord", pkg: "encoding/csv", typ: $funcType([sliceType$4], [sliceType$4, $error], false)}];
��	Reader.init("encoding/csv", [{prop: "Comma", name: "Comma", embedded: false, exported: true, typ: $Int32, tag: ""}, {prop: "Comment", name: "Comment", embedded: false, exported: true, typ: $Int32, tag: ""}, {prop: "FieldsPerRecord", name: "FieldsPerRecord", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "LazyQuotes", name: "LazyQuotes", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "TrimLeadingSpace", name: "TrimLeadingSpace", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "ReuseRecord", name: "ReuseRecord", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "TrailingComma", name: "TrailingComma", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "r", name: "r", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "numLine", name: "numLine", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "rawBuffer", name: "rawBuffer", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "recordBuffer", name: "recordBuffer", embedded: false, exported: false, typ: sliceType$1, tag: ""}, {prop: "fieldIndexes", name: "fieldIndexes", embedded: false, exported: false, typ: sliceType$2, tag: ""}, {prop: "fieldPositions", name: "fieldPositions", embedded: false, exported: false, typ: sliceType$3, tag: ""}, {prop: "lastRecord", name: "lastRecord", embedded: false, exported: false, typ: sliceType$4, tag: ""}]);
Readerencoding/csv.Readerencoding/csv.ptrTypeencoding/csv.ptrType$3encoding/csv.sliceType$1encoding/csv.sliceType$2encoding/csv.sliceType$3encoding/csv.sliceType$4encoding/csv.sliceType$5  position�	position = $pkg.position = $newType(0, $kindStruct, "csv.position", true, "encoding/csv", false, function(line_, col_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.line = 0;
			this.col = 0;
			return;
		}
		this.line = line_;
		this.col = col_;
	});
��	position.init("encoding/csv", [{prop: "line", name: "line", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "col", name: "col", embedded: false, exported: false, typ: $Int, tag: ""}]);
positionencoding/csv.position  Writer�L	Writer = $pkg.Writer = $newType(0, $kindStruct, "csv.Writer", true, "encoding/csv", true, function(Comma_, UseCRLF_, w_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Comma = 0;
			this.UseCRLF = false;
			this.w = ptrType$1.nil;
			return;
		}
		this.Comma = Comma_;
		this.UseCRLF = UseCRLF_;
		this.w = w_;
	});
��	ptrType$4.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$4], [$error], false)}, {prop: "Flush", name: "Flush", pkg: "", typ: $funcType([], [], false)}, {prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$error], false)}, {prop: "WriteAll", name: "WriteAll", pkg: "", typ: $funcType([sliceType$5], [$error], false)}, {prop: "fieldNeedsQuotes", name: "fieldNeedsQuotes", pkg: "encoding/csv", typ: $funcType([$String], [$Bool], false)}];
�$	Writer.init("encoding/csv", [{prop: "Comma", name: "Comma", embedded: false, exported: true, typ: $Int32, tag: ""}, {prop: "UseCRLF", name: "UseCRLF", embedded: false, exported: true, typ: $Bool, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
Writerencoding/csv.Writerencoding/csv.ptrType$1encoding/csv.ptrType$4encoding/csv.sliceType$4encoding/csv.sliceType$5  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  ptrType#	ptrType = $ptrType(bufio.Reader);
ptrTypebufio.Reader  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  sliceType$2!	sliceType$2 = $sliceType($Int);
sliceType$2  sliceType$3%	sliceType$3 = $sliceType(position);
sliceType$3encoding/csv.position  sliceType$4$	sliceType$4 = $sliceType($String);
sliceType$4  sliceType$5(	sliceType$5 = $sliceType(sliceType$4);
sliceType$5encoding/csv.sliceType$4  	ptrType$1%	ptrType$1 = $ptrType(bufio.Writer);
	ptrType$1bufio.Writer  	ptrType$2#	ptrType$2 = $ptrType(ParseError);
	ptrType$2encoding/csv.ParseError  	ptrType$3	ptrType$3 = $ptrType(Reader);
	ptrType$3encoding/csv.Reader  	ptrType$4	ptrType$4 = $ptrType(Writer);
	ptrType$4encoding/csv.Writer  ErrTrailingComma  ErrBareQuote  ErrQuote  ErrFieldCount  errInvalidDelimerrInvalidDelim  M  	u		$pkg.ErrTrailingComma = errors.New("extra delimiter at end of line");
encoding/csv.ErrTrailingComma
errors.New  F  	�		$pkg.ErrBareQuote = errors.New("bare \" in non-quoted-field");
encoding/csv.ErrBareQuote
errors.New  O  
		$pkg.ErrQuote = errors.New("extraneous or missing \" in quoted-field");
encoding/csv.ErrQuote
errors.New  B  
^		$pkg.ErrFieldCount = errors.New("wrong number of fields");
encoding/csv.ErrFieldCount
errors.New  P  
�		errInvalidDelim = errors.New("csv: invalid field or comment delimiter");
encoding/csv.errInvalidDelim
errors.New  (*encoding/csv.ParseError).Error ��	ParseError.ptr.prototype.Error = function() {
		var $24r, $24r$1, $24r$2, _r, _r$1, _r$2, e, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; e = $f.e; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		e = this;
  �		/* */ if ($interfaceIsEqual(e.Err, $pkg.ErrFieldCount)) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ($interfaceIsEqual(e.Err, $pkg.ErrFieldCount)) { */ case 1:
  �			_r = fmt.Sprintf("record on line %d: %v", new sliceType([new $Int(e.Line), e.Err])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = _r;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  
		/* */ if (!((e.StartLine === e.Line))) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (!((e.StartLine === e.Line))) { */ case 5:
  '			_r$1 = fmt.Sprintf("record on line %d; parse error on line %d, column %d: %v", new sliceType([new $Int(e.StartLine), new $Int(e.Line), new $Int(e.Column), e.Err])); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r$1 = _r$1;
			$s = 8; case 8: return $24r$1;
    		/* } */ case 6:
  �		_r$2 = fmt.Sprintf("parse error on line %d, column %d: %v", new sliceType([new $Int(e.Line), new $Int(e.Column), e.Err])); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$2 = _r$2;
		$s = 10; case 10: return $24r$2;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ParseError.ptr.prototype.Error }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.e = e; $f.$s = $s; $f.$r = $r; return $f;
	};
	ParseError.prototype.Error = function() { return this.$val.Error(); };

ParseErrorencoding/csv.ErrFieldCountencoding/csv.ParseErrorencoding/csv.sliceTypefmt.Sprintf !(*encoding/csv.ParseError).Unwrap ��	ParseError.ptr.prototype.Unwrap = function() {
		var e;
		e = this;
  			return e.Err;
    	};
	ParseError.prototype.Unwrap = function() { return this.$val.Unwrap(); };

ParseErrorencoding/csv.ParseError encoding/csv.validDelimencoding/csv
validDelim 
validDelim��	validDelim = function(r) {
		var r;
  		return !((r === 0)) && !((r === 34)) && !((r === 13)) && !((r === 10)) && utf8.ValidRune(r) && !((r === 65533));
    	};

validDelimencoding/csv.validDelimunicode/utf8.ValidRune encoding/csv.NewReaderencoding/csv	NewReader 	NewReader��	NewReader = function(r) {
		var r;
  ]		return new Reader.ptr(44, 0, 0, false, false, false, false, bufio.NewReader(r), 0, sliceType$1.nil, sliceType$1.nil, sliceType$2.nil, sliceType$3.nil, sliceType$4.nil);
    	};
	$pkg.NewReader = NewReader;
	NewReader
bufio.NewReaderbufio.Readerencoding/csv.NewReaderencoding/csv.Readerencoding/csv.positionencoding/csv.ptrTypeencoding/csv.sliceType$1encoding/csv.sliceType$2encoding/csv.sliceType$3encoding/csv.sliceType$4 (*encoding/csv.Reader).Read �R	Reader.ptr.prototype.Read = function() {
		var _r, _r$1, _tmp, _tmp$1, _tuple, _tuple$1, err, r, record, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; r = $f.r; record = $f.record; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		record = sliceType$4.nil;
		err = $ifaceNil;
		r = this;
  �		/* */ if (r.ReuseRecord) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (r.ReuseRecord) { */ case 1:
  �			_r = r.readRecord(r.lastRecord); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			record = _tuple[0];
			err = _tuple[1];
  �			r.lastRecord = record;
    			$s = 3; continue;
		/* } else { */ case 2:
  �			_r$1 = r.readRecord(sliceType$4.nil); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			record = _tuple$1[0];
			err = _tuple$1[1];
    		/* } */ case 3:
    		_tmp = record;
		_tmp$1 = err;
		record = _tmp;
		err = _tmp$1;
		$s = -1; return [record, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.r = r; $f.record = record; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.Read = function() { return this.$val.Read(); };
Readerencoding/csv.Readerencoding/csv.readRecord~encoding/csv.sliceType$4 (*encoding/csv.Reader).FieldPos �u	Reader.ptr.prototype.FieldPos = function(field) {
		var _tmp, _tmp$1, column, field, line, p, r, x;
		line = 0;
		column = 0;
		r = this;
    		if (field < 0 || field >= r.fieldPositions.$length) {
  �			$panic(new $String("out of range index passed to FieldPos"));
    		}
  �		p = (x = r.fieldPositions, ((field < 0 || field >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + field]));
    		_tmp = p.line;
		_tmp$1 = p.col;
		line = _tmp;
		column = _tmp$1;
		return [line, column];
    	};
	Reader.prototype.FieldPos = function(field) { return this.$val.FieldPos(field); };
Readerencoding/csv.Reader (*encoding/csv.Reader).ReadAll ��	Reader.ptr.prototype.ReadAll = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, err, err$1, r, record, records, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; err = $f.err; err$1 = $f.err$1; r = $f.r; record = $f.record; records = $f.records; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		records = sliceType$5.nil;
		err = $ifaceNil;
		r = this;
  �		/* while (true) { */ case 1:
  �			_r = r.readRecord(sliceType$4.nil); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			record = _tuple[0];
			err$1 = _tuple[1];
    			if ($interfaceIsEqual(err$1, io.EOF)) {
    				_tmp = records;
				_tmp$1 = $ifaceNil;
				records = _tmp;
				err = _tmp$1;
				$s = -1; return [records, err];
    			}
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp$2 = sliceType$5.nil;
				_tmp$3 = err$1;
				records = _tmp$2;
				err = _tmp$3;
				$s = -1; return [records, err];
    			}
  U			records = $append(records, record);
    		$s = 1; continue;
		case 2:
    		$s = -1; return [records, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.ReadAll }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f.err = err; $f.err$1 = err$1; $f.r = r; $f.record = record; $f.records = records; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.ReadAll = function() { return this.$val.ReadAll(); };
Readerencoding/csv.Readerencoding/csv.readRecord~encoding/csv.sliceType$4encoding/csv.sliceType$5io.EOF (*encoding/csv.Reader).readLine �'	Reader.ptr.prototype.readLine = function() {
		var _r, _r$1, _tuple, _tuple$1, err, line, n, r, x, x$1, x$2, x$3, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; line = $f.line; n = $f.n; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �		_r = r.r.ReadSlice(10); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		line = _tuple[0];
		err = _tuple[1];
  �		/* */ if ($interfaceIsEqual(err, bufio.ErrBufferFull)) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if ($interfaceIsEqual(err, bufio.ErrBufferFull)) { */ case 2:
  �			r.rawBuffer = $appendSlice($subslice(r.rawBuffer, 0, 0), line);
   			/* while (true) { */ case 4:
				/* if (!($interfaceIsEqual(err, bufio.ErrBufferFull))) { break; } */ if(!($interfaceIsEqual(err, bufio.ErrBufferFull))) { $s = 5; continue; }
   <				_r$1 = r.r.ReadSlice(10); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				line = _tuple$1[0];
				err = _tuple$1[1];
   _				r.rawBuffer = $appendSlice(r.rawBuffer, line);
    			$s = 4; continue;
			case 5:
   �			line = r.rawBuffer;
    		/* } */ case 3:
    		if (line.$length > 0 && $interfaceIsEqual(err, io.EOF)) {
   �			err = $ifaceNil;
    			if ((x = line.$length - 1 >> 0, ((x < 0 || x >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x])) === 13) {
  !:				line = $subslice(line, 0, (line.$length - 1 >> 0));
    			}
    		}
  !\		r.numLine = r.numLine + (1) >> 0;
  !�		n = line.$length;
    		if (n >= 2 && ((x$1 = n - 2 >> 0, ((x$1 < 0 || x$1 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x$1])) === 13) && ((x$2 = n - 1 >> 0, ((x$2 < 0 || x$2 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x$2])) === 10)) {
  !�			(x$3 = n - 2 >> 0, ((x$3 < 0 || x$3 >= line.$length) ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + x$3] = 10));
  !�			line = $subslice(line, 0, (n - 1 >> 0));
    		}
  "		$s = -1; return [line, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readLine }; } $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.line = line; $f.n = n; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readLine = function() { return this.$val.readLine(); };
Reader	readLine~bufio.ErrBufferFullencoding/csv.Readerio.EOF encoding/csv.lengthNLencoding/csvlengthNL lengthNL�	lengthNL = function(b) {
		var b, x;
    		if (b.$length > 0 && ((x = b.$length - 1 >> 0, ((x < 0 || x >= b.$length) ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + x])) === 10)) {
  "�			return 1;
    		}
  "�		return 0;
    	};
lengthNLencoding/csv.lengthNL encoding/csv.nextRuneencoding/csvnextRune nextRune}	nextRune = function(b) {
		var _tuple, b, r;
  #		_tuple = utf8.DecodeRune(b);
		r = _tuple[0];
  #/		return r;
    	};
nextRuneencoding/csv.nextRuneunicode/utf8.DecodeRune !(*encoding/csv.Reader).readRecord �#�	Reader.ptr.prototype.readRecord = function(dst) {
		var _i, _r, _r$1, _r$2, _ref, _tuple, _tuple$1, col, commaLen, dst, err, errRead, field, fieldPos, i, i$1, i$2, i$3, idx, j, line, pos, preIdx, r, recLine, rn, str, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; col = $f.col; commaLen = $f.commaLen; dst = $f.dst; err = $f.err; errRead = $f.errRead; field = $f.field; fieldPos = $f.fieldPos; i = $f.i; i$1 = $f.i$1; i$2 = $f.i$2; i$3 = $f.i$3; idx = $f.idx; j = $f.j; line = $f.line; pos = $f.pos; preIdx = $f.preIdx; r = $f.r; recLine = $f.recLine; rn = $f.rn; str = $f.str; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
    		if ((r.Comma === r.Comment) || !validDelim(r.Comma) || (!((r.Comment === 0)) && !validDelim(r.Comment))) {
  #�			$s = -1; return [sliceType$4.nil, errInvalidDelim];
    		}
  $K		line = sliceType$1.nil;
  $\		errRead = $ifaceNil;
  $k		/* while (true) { */ case 1:
			/* if (!($interfaceIsEqual(errRead, $ifaceNil))) { break; } */ if(!($interfaceIsEqual(errRead, $ifaceNil))) { $s = 2; continue; }
  $�			_r = r.readLine(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			line = _tuple[0];
			errRead = _tuple[1];
    			if (!((r.Comment === 0)) && (nextRune(line) === r.Comment)) {
  $�				line = sliceType$1.nil;
  $�				/* continue; */ $s = 1; continue;
    			}
    			if ($interfaceIsEqual(errRead, $ifaceNil) && (line.$length === lengthNL(line))) {
  %@				line = sliceType$1.nil;
  %N				/* continue; */ $s = 1; continue;
    			}
  %q			/* break; */ $s = 2; continue;
    		case 2:
    		if ($interfaceIsEqual(errRead, io.EOF)) {
  %�			$s = -1; return [sliceType$4.nil, errRead];
    		}
  %�		err = $ifaceNil;
  %�		commaLen = utf8.RuneLen(r.Comma);
  &		recLine = r.numLine;
  &P		r.recordBuffer = $subslice(r.recordBuffer, 0, 0);
  &u		r.fieldIndexes = $subslice(r.fieldIndexes, 0, 0);
  &�		r.fieldPositions = $subslice(r.fieldPositions, 0, 0);
  &�		pos = new position.ptr(r.numLine, 1);
  &�		/* while (true) { */ case 4:
  '			/* */ if (r.TrimLeadingSpace) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (r.TrimLeadingSpace) { */ case 6:
  '				_r$1 = bytes.IndexFunc(line, (function(r$1) {
					var r$1;
  'O					return !unicode.IsSpace(r$1);
    				})); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				i = _r$1;
    				if (i < 0) {
  '�					i = line.$length;
  '�					pos.col = pos.col - (lengthNL(line)) >> 0;
    				}
  '�				line = $subslice(line, i);
  '�				pos.col = pos.col + (i) >> 0;
    			/* } */ case 7:
  '�			/* */ if ((line.$length === 0) || !(((0 >= line.$length ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + 0]) === 34))) { $s = 9; continue; }
			/* */ $s = 10; continue;
    			/* if ((line.$length === 0) || !(((0 >= line.$length ? ($throwRuntimeError("index out of range"), undefined) : line.$array[line.$offset + 0]) === 34))) { */ case 9:
  (#				i$1 = bytes.IndexRune(line, r.Comma);
  (J				field = line;
    				if (i$1 >= 0) {
  (k					field = $subslice(field, 0, i$1);
    				} else {
  (�					field = $subslice(field, 0, (field.$length - lengthNL(field) >> 0));
    				}
    				if (!r.LazyQuotes) {
  )					j = bytes.IndexByte(field, 34);
    					if (j >= 0) {
  )E						col = pos.col + j >> 0;
  )]						err = new ParseError.ptr(recLine, r.numLine, col, $pkg.ErrBareQuote);
  )�						/* break parseField; */ $s = 5; continue s;
    					}
    				}
  )�				r.recordBuffer = $appendSlice(r.recordBuffer, field);
  *				r.fieldIndexes = $append(r.fieldIndexes, r.recordBuffer.$length);
  *M				r.fieldPositions = $append(r.fieldPositions, pos);
    				if (i$1 >= 0) {
  *�					line = $subslice(line, (i$1 + commaLen >> 0));
  *�					pos.col = pos.col + ((i$1 + commaLen >> 0)) >> 0;
  *�					/* continue parseField; */ $s = 4; continue s;
    				}
  *�				/* break parseField; */ $s = 5; continue s;
    				$s = 11; continue;
			/* } else { */ case 10:
  +				fieldPos = $clone(pos, position);
  +2				line = $subslice(line, 1);
  +L				pos.col = pos.col + (1) >> 0;
  +c				/* while (true) { */ case 12:
  +m					i$2 = bytes.IndexByte(line, 34);
  +�					/* */ if (i$2 >= 0) { $s = 14; continue; }
					/* */ if (line.$length > 0) { $s = 15; continue; }
					/* */ $s = 16; continue;
    					/* if (i$2 >= 0) { */ case 14:
  +�						r.recordBuffer = $appendSlice(r.recordBuffer, $subslice(line, 0, i$2));
  +�						line = $subslice(line, (i$2 + 1 >> 0));
  ,						pos.col = pos.col + ((i$2 + 1 >> 0)) >> 0;
  ,6						rn = nextRune(line);
    						if ((rn === 34)) {
  ,�							r.recordBuffer = $append(r.recordBuffer, 34);
  ,�							line = $subslice(line, 1);
  ,�							pos.col = pos.col + (1) >> 0;
    						} else if ((rn === r.Comma)) {
  -:							line = $subslice(line, commaLen);
  -W							pos.col = pos.col + (commaLen) >> 0;
  -q							r.fieldIndexes = $append(r.fieldIndexes, r.recordBuffer.$length);
  -�							r.fieldPositions = $append(r.fieldPositions, fieldPos);
  -�							/* continue parseField; */ $s = 4; continue s;
    						} else if ((lengthNL(line) === line.$length)) {
  .X							r.fieldIndexes = $append(r.fieldIndexes, r.recordBuffer.$length);
  .�							r.fieldPositions = $append(r.fieldPositions, fieldPos);
  .�							/* break parseField; */ $s = 5; continue s;
    						} else if (r.LazyQuotes) {
  /*							r.recordBuffer = $append(r.recordBuffer, 34);
    						} else {
  /�							err = new ParseError.ptr(recLine, r.numLine, pos.col - 1 >> 0, $pkg.ErrQuote);
  0							/* break parseField; */ $s = 5; continue s;
    						}
    						$s = 17; continue;
    					/* } else if (line.$length > 0) { */ case 15:
  0r						r.recordBuffer = $appendSlice(r.recordBuffer, line);
    						if (!($interfaceIsEqual(errRead, $ifaceNil))) {
  0�							/* break parseField; */ $s = 5; continue s;
    						}
  0�						pos.col = pos.col + (line.$length) >> 0;
  0�						_r$2 = r.readLine(); /* */ $s = 18; case 18: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
						_tuple$1 = _r$2;
						line = _tuple$1[0];
						errRead = _tuple$1[1];
    						if (line.$length > 0) {
  14							pos.line = pos.line + (1) >> 0;
  1E							pos.col = 1;
    						}
    						if ($interfaceIsEqual(errRead, io.EOF)) {
  1z							errRead = $ifaceNil;
    						}
    						$s = 17; continue;
					/* } else { */ case 16:
    						if (!r.LazyQuotes && $interfaceIsEqual(errRead, $ifaceNil)) {
  1�							err = new ParseError.ptr(recLine, pos.line, pos.col, $pkg.ErrQuote);
  2S							/* break parseField; */ $s = 5; continue s;
    						}
  2p						r.fieldIndexes = $append(r.fieldIndexes, r.recordBuffer.$length);
  2�						r.fieldPositions = $append(r.fieldPositions, fieldPos);
  2�						/* break parseField; */ $s = 5; continue s;
    					/* } */ case 17:
    				$s = 12; continue;
				case 13:
    			/* } */ case 11:
    		$s = 4; continue;
		case 5:
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  3#			err = errRead;
    		}
  3�		str = ($bytesToString(r.recordBuffer));
  4		dst = $subslice(dst, 0, 0);
    		if (dst.$capacity < r.fieldIndexes.$length) {
  46			dst = $makeSlice(sliceType$4, r.fieldIndexes.$length);
    		}
  4d		dst = $subslice(dst, 0, r.fieldIndexes.$length);
  4�		preIdx = 0;
  4�		_ref = r.fieldIndexes;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			i$3 = _i;
			idx = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  4�			((i$3 < 0 || i$3 >= dst.$length) ? ($throwRuntimeError("index out of range"), undefined) : dst.$array[dst.$offset + i$3] = $substring(str, preIdx, idx));
  4�			preIdx = idx;
    			_i++;
		}
    		if (r.FieldsPerRecord > 0) {
    			if (!((dst.$length === r.FieldsPerRecord)) && $interfaceIsEqual(err, $ifaceNil)) {
  5n				err = new ParseError.ptr(recLine, recLine, 1, $pkg.ErrFieldCount);
    			}
    		} else if (r.FieldsPerRecord === 0) {
  6			r.FieldsPerRecord = dst.$length;
    		}
  61		$s = -1; return [dst, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Reader.ptr.prototype.readRecord }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.col = col; $f.commaLen = commaLen; $f.dst = dst; $f.err = err; $f.errRead = errRead; $f.field = field; $f.fieldPos = fieldPos; $f.i = i; $f.i$1 = i$1; $f.i$2 = i$2; $f.i$3 = i$3; $f.idx = idx; $f.j = j; $f.line = line; $f.pos = pos; $f.preIdx = preIdx; $f.r = r; $f.recLine = recLine; $f.rn = rn; $f.str = str; $f.$s = $s; $f.$r = $r; return $f;
	};
	Reader.prototype.readRecord = function(dst) { return this.$val.readRecord(dst); };
ReaderreadRecord~bytes.IndexBytebytes.IndexFuncbytes.IndexRuneencoding/csv.ErrBareQuoteencoding/csv.ErrFieldCountencoding/csv.ErrQuoteencoding/csv.ParseErrorencoding/csv.Readerencoding/csv.errInvalidDelimencoding/csv.lengthNLencoding/csv.nextRuneencoding/csv.positionencoding/csv.readLine~encoding/csv.sliceType$1encoding/csv.sliceType$4encoding/csv.validDelimio.EOFunicode.IsSpaceunicode/utf8.RuneLen encoding/csv.NewWriterencoding/csv	NewWriter 	NewWriter��	NewWriter = function(w) {
		var w;
  :�		return new Writer.ptr(44, false, bufio.NewWriter(w));
    	};
	$pkg.NewWriter = NewWriter;
	NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Writerencoding/csv.ptrType$1 (*encoding/csv.Writer).Write � 	Writer.ptr.prototype.Write = function(record) {
		var _1, _i, _r, _r$1, _r$10, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, err, err$1, err$2, err$3, err$4, err$5, err$6, field, i, n, record, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _r$10 = $f._r$10; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; err = $f.err; err$1 = $f.err$1; err$2 = $f.err$2; err$3 = $f.err$3; err$4 = $f.err$4; err$5 = $f.err$5; err$6 = $f.err$6; field = $f.field; i = $f.i; n = $f.n; record = $f.record; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
    		if (!validDelim(w.Comma)) {
  <p			$s = -1; return errInvalidDelim;
    		}
  <�		_ref = record;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			n = _i;
			field = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  <�			/* */ if (n > 0) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (n > 0) { */ case 3:
  <�				_r = w.w.WriteRune(w.Comma); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				err = _tuple[1];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
  <�					$s = -1; return err;
    				}
    			/* } */ case 4:
  =x			/* */ if (!w.fieldNeedsQuotes(field)) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!w.fieldNeedsQuotes(field)) { */ case 6:
  =�				_r$1 = w.w.WriteString(field); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				err$1 = _tuple$1[1];
    				if (!($interfaceIsEqual(err$1, $ifaceNil))) {
  =�					$s = -1; return err$1;
    				}
  =�				_i++;
				/* continue; */ $s = 1; continue;
    			/* } */ case 7:
  =�			_r$2 = w.w.WriteByte(34); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			err$2 = _r$2;
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
  >"				$s = -1; return err$2;
    			}
  >3			/* while (true) { */ case 10:
				/* if (!(field.length > 0)) { break; } */ if(!(field.length > 0)) { $s = 11; continue; }
  >p				i = strings.IndexAny(field, "\"\r\n");
    				if (i < 0) {
  >�					i = field.length;
    				}
  ?				_r$3 = w.w.WriteString($substring(field, 0, i)); /* */ $s = 12; case 12: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$2 = _r$3;
				err$3 = _tuple$2[1];
    				if (!($interfaceIsEqual(err$3, $ifaceNil))) {
  ?8					$s = -1; return err$3;
    				}
  ?K				field = $substring(field, i);
  ?�				/* */ if (field.length > 0) { $s = 13; continue; }
				/* */ $s = 14; continue;
    				/* if (field.length > 0) { */ case 13:
  ?�					err$4 = $ifaceNil;
    						_1 = field.charCodeAt(0);
  ?�						/* */ if (_1 === (34)) { $s = 16; continue; }
						/* */ if (_1 === (13)) { $s = 17; continue; }
						/* */ if (_1 === (10)) { $s = 18; continue; }
						/* */ $s = 19; continue;
    						/* if (_1 === (34)) { */ case 16:
  ?�							_r$4 = w.w.WriteString("\"\""); /* */ $s = 20; case 20: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
							_tuple$3 = _r$4;
							err$4 = _tuple$3[1];
    							$s = 19; continue;
    						/* } else if (_1 === (13)) { */ case 17:
  @							/* */ if (!w.UseCRLF) { $s = 21; continue; }
							/* */ $s = 22; continue;
    							/* if (!w.UseCRLF) { */ case 21:
  @								_r$5 = w.w.WriteByte(13); /* */ $s = 23; case 23: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
								err$4 = _r$5;
    							/* } */ case 22:
    							$s = 19; continue;
    						/* } else if (_1 === (10)) { */ case 18:
  @R							/* */ if (w.UseCRLF) { $s = 24; continue; }
							/* */ $s = 25; continue;
    							/* if (w.UseCRLF) { */ case 24:
  @g								_r$6 = w.w.WriteString("\r\n"); /* */ $s = 27; case 27: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
								_tuple$4 = _r$6;
								err$4 = _tuple$4[1];
    								$s = 26; continue;
							/* } else { */ case 25:
  @�								_r$7 = w.w.WriteByte(10); /* */ $s = 28; case 28: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
								err$4 = _r$7;
    							/* } */ case 26:
    						/* } */ case 19:
    					case 15:
  @�					field = $substring(field, 1);
    					if (!($interfaceIsEqual(err$4, $ifaceNil))) {
  @�						$s = -1; return err$4;
    					}
    				/* } */ case 14:
    			$s = 10; continue;
			case 11:
  A			_r$8 = w.w.WriteByte(34); /* */ $s = 29; case 29: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
			err$5 = _r$8;
    			if (!($interfaceIsEqual(err$5, $ifaceNil))) {
  A<				$s = -1; return err$5;
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  AS		err$6 = $ifaceNil;
  A^		/* */ if (w.UseCRLF) { $s = 30; continue; }
		/* */ $s = 31; continue;
    		/* if (w.UseCRLF) { */ case 30:
  Ao			_r$9 = w.w.WriteString("\r\n"); /* */ $s = 33; case 33: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
			_tuple$5 = _r$9;
			err$6 = _tuple$5[1];
    			$s = 32; continue;
		/* } else { */ case 31:
  A�			_r$10 = w.w.WriteByte(10); /* */ $s = 34; case 34: if($c) { $c = false; _r$10 = _r$10.$blk(); } if (_r$10 && _r$10.$blk !== undefined) { break s; }
			err$6 = _r$10;
    		/* } */ case 32:
  A�		$s = -1; return err$6;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Write }; } $f._1 = _1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._r$10 = _r$10; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.err = err; $f.err$1 = err$1; $f.err$2 = err$2; $f.err$3 = err$3; $f.err$4 = err$4; $f.err$5 = err$5; $f.err$6 = err$6; $f.field = field; $f.i = i; $f.n = n; $f.record = record; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Write = function(record) { return this.$val.Write(record); };
Writerencoding/csv.Writerencoding/csv.errInvalidDelimencoding/csv.fieldNeedsQuotes~encoding/csv.validDelimstrings.IndexAny (*encoding/csv.Writer).Flush ��	Writer.ptr.prototype.Flush = function() {
		var _r, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  Bb		_r = w.w.Flush(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Flush }; } $f._r = _r; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Flush = function() { return this.$val.Flush(); };
Writerencoding/csv.Writer (*encoding/csv.Writer).Error �	Writer.ptr.prototype.Error = function() {
		var _r, _tuple, err, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  B�		_r = w.w.Write(sliceType$1.nil); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		err = _tuple[1];
  B�		$s = -1; return err;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.Error }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.Error = function() { return this.$val.Error(); };
Writerencoding/csv.Writerencoding/csv.sliceType$1 (*encoding/csv.Writer).WriteAll �%	Writer.ptr.prototype.WriteAll = function(records) {
		var $24r, _i, _r, _r$1, _ref, err, record, records, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; err = $f.err; record = $f.record; records = $f.records; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  C�		_ref = records;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			record = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  C�			_r = w.Write(record); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			err = _r;
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  D				$s = -1; return err;
    			}
    			_i++;
		$s = 1; continue;
		case 2:
  D		_r$1 = w.w.Flush(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer.ptr.prototype.WriteAll }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.err = err; $f.record = record; $f.records = records; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	Writer.prototype.WriteAll = function(records) { return this.$val.WriteAll(records); };
Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes �o	Writer.ptr.prototype.fieldNeedsQuotes = function(field) {
		var _tuple, c, field, i, r1, w;
		w = this;
    		if (field === "") {
  G�			return false;
    		}
    		if (field === "\\.") {
  G�			return true;
    		}
    		if (w.Comma < 128) {
  G�			i = 0;
			while (true) {
				if (!(i < field.length)) { break; }
  H					c = field.charCodeAt(i);
    				if ((c === 10) || (c === 13) || (c === 34) || (c === ((w.Comma << 24 >>> 24)))) {
  H\					return true;
    				}
  H 				i = i + (1) >> 0;
    			}
    		} else {
    			if (strings.ContainsRune(field, w.Comma) || strings.ContainsAny(field, "\"\r\n")) {
  H�				return true;
    			}
    		}
  H�		_tuple = utf8.DecodeRuneInString(field);
		r1 = _tuple[0];
  I		return unicode.IsSpace(r1);
    	};
	Writer.prototype.fieldNeedsQuotes = function(field) { return this.$val.fieldNeedsQuotes(field); };
WriterfieldNeedsQuotes~encoding/csv.Writerstrings.ContainsAnystrings.ContainsRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString ��{"Base":18734,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/csv/reader.go","Base":1,"Size":13890,"Lines":[0,55,109,159,160,228,299,325,328,406,481,531,534,558,561,607,610,678,681,759,824,827,896,965,975,978,993,996,1028,1031,1056,1059,1096,1099,1169,1212,1215,1262,1265,1279,1282,1328,1331,1388,1391,1406,1429,1432,1446,1449,1465,1490,1502,1503,1512,1521,1530,1540,1547,1553,1564,1580,1582,1583,1631,1688,1713,1762,1812,1885,1922,1924,1925,1963,1992,2053,2056,2084,2203,2206,2292,2294,2295,2348,2349,2413,2419,2515,2577,2652,2709,2711,2712,2788,2789,2820,2917,2919,2920,2971,2974,3050,3124,3158,3161,3229,3300,3366,3387,3421,3464,3519,3570,3582,3583,3657,3721,3791,3836,3893,3944,3984,3998,3999,4064,4129,4207,4281,4356,4415,4436,4437,4510,4562,4579,4580,4656,4725,4748,4749,4823,4900,4986,5004,5005,5056,5057,5074,5075,5135,5148,5149,5214,5232,5233,5297,5366,5441,5501,5522,5523,5583,5650,5670,5671,5729,5763,5790,5791,5864,5885,5887,5888,5941,5979,5996,6010,6039,6042,6044,6045,6098,6151,6214,6276,6320,6386,6446,6481,6536,6556,6599,6623,6633,6667,6670,6690,6692,6693,6750,6824,6889,6933,6936,6997,7055,7105,7154,7157,7188,7210,7212,7213,7271,7294,7309,7311,7312,7363,7400,7479,7557,7570,7631,7638,7673,7694,7717,7721,7739,7758,7762,7798,7801,7803,7804,7865,7930,7990,8051,8097,8131,8164,8213,8248,8283,8329,8333,8354,8357,8394,8406,8469,8502,8531,8535,8538,8551,8596,8667,8686,8706,8709,8727,8729,8730,8791,8821,8861,8872,8875,8885,8887,8888,8946,8977,9005,9015,9017,9018,9080,9177,9207,9210,9211,9285,9302,9321,9343,9374,9427,9441,9475,9479,9532,9546,9578,9582,9590,9593,9617,9639,9642,9643,9679,9694,9721,9756,9806,9843,9880,9921,9963,9975,9982,10008,10058,10089,10095,10109,10127,10157,10162,10181,10197,10201,10241,10271,10310,10327,10342,10364,10376,10423,10428,10487,10509,10559,10583,10675,10697,10703,10708,10761,10825,10877,10892,10921,10949,10973,10978,10998,11009,11035,11054,11080,11103,11112,11148,11164,11188,11246,11276,11305,11341,11362,11401,11452,11481,11507,11532,11571,11600,11626,11693,11753,11779,11818,11857,11924,11984,12007,12031,12067,12118,12132,12184,12288,12311,12318,12348,12396,12450,12475,12498,12505,12531,12565,12589,12606,12624,12631,12659,12679,12686,12699,12742,12784,12876,12899,12906,12972,13031,13053,13059,13064,13068,13071,13088,13104,13107,13108,13164,13233,13311,13326,13363,13407,13410,13443,13459,13497,13524,13539,13542,13543,13595,13623,13674,13696,13720,13744,13762,13792,13797,13801,13837,13868,13871,13888],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/encoding/csv/writer.go","Base":13892,"Size":4841,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,285,288,357,432,512,515,548,551,632,635,685,748,808,870,913,934,993,1050,1073,1075,1076,1128,1166,1183,1197,1226,1229,1231,1232,1307,1375,1444,1503,1551,1578,1603,1606,1607,1639,1652,1705,1720,1725,1729,1730,1785,1842,1876,1929,1944,1949,1961,1965,1966,2011,2025,2029,2052,2089,2131,2145,2164,2169,2170,2231,2288,2303,2308,2329,2330,2366,2389,2407,2429,2443,2479,2494,2515,2547,2554,2569,2589,2628,2642,2674,2681,2687,2709,2729,2745,2751,2756,2760,2805,2819,2823,2826,2841,2857,2892,2902,2930,2933,2945,2947,2948,3011,3074,3101,3114,3116,3117,3196,3229,3255,3267,3269,3270,3349,3388,3442,3476,3501,3519,3533,3537,3540,3560,3562,3563,3637,3697,3760,3833,3909,3982,4054,4123,4178,4253,4293,4350,4405,4423,4438,4441,4442,4462,4476,4479,4480,4510,4546,4563,4628,4644,4649,4653,4663,4747,4762,4766,4769,4770,4811,4839],"Infos":null}]}
 