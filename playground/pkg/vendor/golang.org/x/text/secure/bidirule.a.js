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
GoLinkname�� Implementation�� 	Reference��   �P���(vendor/golang.org/x/text/secure/bidirulebidiruleerrorsunicode/utf8"vendor/golang.org/x/text/transform%vendor/golang.org/x/text/unicode/bidi�i ��b 	Direction%vendor/golang.org/x/text/unicode/bidisTransformerstate	ruleStatehasRTLseenisRTLtReset	TransformdstsrcatEOFnDstnSrcerrSpannadvanceokadvanceStringisFinalbidiruleDirectionString
ErrInvalidNewValidValidStringbidi F     " F  3 " V  5>F   A G AJ  Q   X >>>>>>>T M ] c_    e ca   k cc ue ye }  � � �  � cg yi }  � �  � ck 3m � �   � co 3 � �   � cq   F   �   F  3   T  T  � ���#5S����G�� � errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	transform>	transform = $packages["vendor/golang.org/x/text/transform"];
��    		$r = transform.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bidi<	bidi = $packages["vendor/golang.org/x/text/unicode/bidi"];
��    		$r = bidi.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	ruleState��	ruleState = $pkg.ruleState = $newType(1, $kindUint8, "bidirule.ruleState", true, "vendor/golang.org/x/text/secure/bidirule", false, null);
	ruleState2vendor/golang.org/x/text/secure/bidirule.ruleState  ruleTransition�D	ruleTransition = $pkg.ruleTransition = $newType(0, $kindStruct, "bidirule.ruleTransition", true, "vendor/golang.org/x/text/secure/bidirule", false, function(next_, mask_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.next = 0;
			this.mask = 0;
			return;
		}
		this.next = next_;
		this.mask = mask_;
	});
��	ruleTransition.init("vendor/golang.org/x/text/secure/bidirule", [{prop: "next", name: "next", embedded: false, exported: false, typ: ruleState, tag: ""}, {prop: "mask", name: "mask", embedded: false, exported: false, typ: $Uint16, tag: ""}]);
ruleTransition2vendor/golang.org/x/text/secure/bidirule.ruleState7vendor/golang.org/x/text/secure/bidirule.ruleTransition  Transformer�x	Transformer = $pkg.Transformer = $newType(0, $kindStruct, "bidirule.Transformer", true, "vendor/golang.org/x/text/secure/bidirule", true, function(state_, hasRTL_, seen_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.state = 0;
			this.hasRTL = false;
			this.seen = 0;
			return;
		}
		this.state = state_;
		this.hasRTL = hasRTL_;
		this.seen = seen_;
	});
�D	ptrType.methods = [{prop: "isRTL", name: "isRTL", pkg: "vendor/golang.org/x/text/secure/bidirule", typ: $funcType([], [$Bool], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Transform", name: "Transform", pkg: "", typ: $funcType([sliceType, sliceType, $Bool], [$Int, $Int, $error], false)}, {prop: "Span", name: "Span", pkg: "", typ: $funcType([sliceType, $Bool], [$Int, $error], false)}, {prop: "advance", name: "advance", pkg: "vendor/golang.org/x/text/secure/bidirule", typ: $funcType([sliceType], [$Int, $Bool], false)}, {prop: "advanceString", name: "advanceString", pkg: "vendor/golang.org/x/text/secure/bidirule", typ: $funcType([$String], [$Int, $Bool], false)}, {prop: "isFinal", name: "isFinal", pkg: "vendor/golang.org/x/text/secure/bidirule", typ: $funcType([], [$Bool], false)}];
�L	Transformer.init("vendor/golang.org/x/text/secure/bidirule", [{prop: "state", name: "state", embedded: false, exported: false, typ: ruleState, tag: ""}, {prop: "hasRTL", name: "hasRTL", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "seen", name: "seen", embedded: false, exported: false, typ: $Uint16, tag: ""}]);
Transformer4vendor/golang.org/x/text/secure/bidirule.Transformer0vendor/golang.org/x/text/secure/bidirule.ptrType2vendor/golang.org/x/text/secure/bidirule.ruleState2vendor/golang.org/x/text/secure/bidirule.sliceType  	arrayType/	arrayType = $arrayType(bidi.Properties, 128);
	arrayType0vendor/golang.org/x/text/unicode/bidi.Properties  arrayType$1.	arrayType$1 = $arrayType(ruleTransition, 2);
arrayType$17vendor/golang.org/x/text/secure/bidirule.ruleTransition  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType"	ptrType = $ptrType(Transformer);
ptrType4vendor/golang.org/x/text/secure/bidirule.Transformer  
ErrInvalid  transitionstransitions  
asciiTable!		asciiTable = arrayType.zero();

asciiTable2vendor/golang.org/x/text/secure/bidirule.arrayType3vendor/golang.org/x/text/secure/bidirule.asciiTable0vendor/golang.org/x/text/unicode/bidi.Properties  C  �		$pkg.ErrInvalid = errors.New("bidirule: failed Bidi Rule");

errors.New3vendor/golang.org/x/text/secure/bidirule.ErrInvalid  �n  �		transitions = $toNativeArray($kindArray, [$toNativeArray($kindStruct, [new ruleTransition.ptr(2, 1), new ruleTransition.ptr(4, 8194)]), $toNativeArray($kindStruct, [new ruleTransition.ptr(2, 5), new ruleTransition.ptr(1, 7256)]), $toNativeArray($kindStruct, [new ruleTransition.ptr(2, 4101), new ruleTransition.ptr(1, 3160)]), $toNativeArray($kindStruct, [new ruleTransition.ptr(4, 8230), new ruleTransition.ptr(3, 7256)]), $toNativeArray($kindStruct, [new ruleTransition.ptr(4, 12326), new ruleTransition.ptr(3, 3160)]), $toNativeArray($kindStruct, [new ruleTransition.ptr(5, 0), new ruleTransition.ptr(5, 0)])]);
transitions4vendor/golang.org/x/text/secure/bidirule.arrayType$17vendor/golang.org/x/text/secure/bidirule.ruleTransition4vendor/golang.org/x/text/secure/bidirule.transitions 2vendor/golang.org/x/text/secure/bidirule.Direction(vendor/golang.org/x/text/secure/bidirule	Direction 	Direction�	Direction = function(b) {
		var _tuple, b, c, e, i, sz;
  3		i = 0;
		while (true) {
			if (!(i < b.$length)) { break; }
  K			_tuple = bidi.Lookup($subslice(b, i));
			e = $clone(_tuple[0], bidi.Properties);
			sz = _tuple[1];
    			if (sz === 0) {
  y				i = i + (1) >> 0;
    			}
  �			c = $clone(e, bidi.Properties).Class();
    			if ((c === 1) || (c === 13) || (c === 5)) {
  �				return 1;
    			}
  �			i = i + (sz) >> 0;
    		}
  �		return 0;
    	};
	$pkg.Direction = Direction;
	Direction2vendor/golang.org/x/text/secure/bidirule.Direction,vendor/golang.org/x/text/unicode/bidi.Lookup0vendor/golang.org/x/text/unicode/bidi.Properties 8vendor/golang.org/x/text/secure/bidirule.DirectionString(vendor/golang.org/x/text/secure/bidiruleDirectionString DirectionString�-	DirectionString = function(s) {
		var _tuple, c, e, i, s, sz;
  �		i = 0;
		while (true) {
			if (!(i < s.length)) { break; }
  			_tuple = bidi.LookupString($substring(s, i));
			e = $clone(_tuple[0], bidi.Properties);
			sz = _tuple[1];
    			if (sz === 0) {
  9				i = i + (1) >> 0;
  @				continue;
    			}
  O			c = $clone(e, bidi.Properties).Class();
    			if ((c === 1) || (c === 13) || (c === 5)) {
  �				return 1;
    			}
  �			i = i + (sz) >> 0;
    		}
  �		return 0;
    	};
	$pkg.DirectionString = DirectionString;
DirectionString8vendor/golang.org/x/text/secure/bidirule.DirectionString2vendor/golang.org/x/text/unicode/bidi.LookupString0vendor/golang.org/x/text/unicode/bidi.Properties .vendor/golang.org/x/text/secure/bidirule.Valid(vendor/golang.org/x/text/secure/bidiruleValid Valid�	Valid = function(b) {
		var _tuple, b, n, ok, t;
  0		t = new Transformer.ptr(0, false, 0);
  B		_tuple = t.advance(b);
		n = _tuple[0];
		ok = _tuple[1];
    		if (!ok || n < b.$length) {
  o			return false;
    		}
  �		return t.isFinal();
    	};
	$pkg.Valid = Valid;
Valid4vendor/golang.org/x/text/secure/bidirule.Transformer.vendor/golang.org/x/text/secure/bidirule.Valid1vendor/golang.org/x/text/secure/bidirule.advance~1vendor/golang.org/x/text/secure/bidirule.isFinal~ 4vendor/golang.org/x/text/secure/bidirule.ValidString(vendor/golang.org/x/text/secure/bidiruleValidString ValidString�2	ValidString = function(s) {
		var _tuple, n, ok, s, t;
  �		t = new Transformer.ptr(0, false, 0);
  		_tuple = t.advanceString(s);
		n = _tuple[0];
		ok = _tuple[1];
    		if (!ok || n < s.length) {
  >			return false;
    		}
  O		return t.isFinal();
    	};
	$pkg.ValidString = ValidString;
ValidString4vendor/golang.org/x/text/secure/bidirule.Transformer4vendor/golang.org/x/text/secure/bidirule.ValidString7vendor/golang.org/x/text/secure/bidirule.advanceString~1vendor/golang.org/x/text/secure/bidirule.isFinal~ ,vendor/golang.org/x/text/secure/bidirule.New(vendor/golang.org/x/text/secure/bidiruleNew New^	New = function() {
  �		return new Transformer.ptr(0, false, 0);
    	};
	$pkg.New = New;
New,vendor/golang.org/x/text/secure/bidirule.New4vendor/golang.org/x/text/secure/bidirule.Transformer =(*vendor/golang.org/x/text/secure/bidirule.Transformer).isRTL ��	Transformer.ptr.prototype.isRTL = function() {
		var t;
		t = this;
  5		return !((((t.seen & 8226) >>> 0) === 0));
    	};
	Transformer.prototype.isRTL = function() { return this.$val.isRTL(); };
TransformerisRTL~4vendor/golang.org/x/text/secure/bidirule.Transformer =(*vendor/golang.org/x/text/secure/bidirule.Transformer).Reset ��	Transformer.ptr.prototype.Reset = function() {
		var t;
		t = this;
  �		Transformer.copy(t, new Transformer.ptr(0, false, 0));
    	};
	Transformer.prototype.Reset = function() { return this.$val.Reset(); };
Transformer4vendor/golang.org/x/text/secure/bidirule.Transformer A(*vendor/golang.org/x/text/secure/bidirule.Transformer).Transform �|	Transformer.ptr.prototype.Transform = function(dst, src, atEOF) {
		var _tmp, _tmp$1, _tmp$2, _tuple, atEOF, dst, err, err1, n, nDst, nSrc, src, t;
		nDst = 0;
		nSrc = 0;
		err = $ifaceNil;
		t = this;
    		if (dst.$length < src.$length) {
  �			src = $subslice(src, 0, dst.$length);
  �			atEOF = false;
  �			err = transform.ErrShortDst;
    		}
  �		_tuple = t.Span(src, atEOF);
		n = _tuple[0];
		err1 = _tuple[1];
   		$copySlice(dst, $subslice(src, 0, n));
    		if ($interfaceIsEqual(err, $ifaceNil) || !($interfaceIsEqual(err1, $ifaceNil)) && !($interfaceIsEqual(err1, transform.ErrShortSrc))) {
  V			err = err1;
    		}
    		_tmp = n;
		_tmp$1 = n;
		_tmp$2 = err;
		nDst = _tmp;
		nSrc = _tmp$1;
		err = _tmp$2;
		return [nDst, nSrc, err];
    	};
	Transformer.prototype.Transform = function(dst, src, atEOF) { return this.$val.Transform(dst, src, atEOF); };
Transformer4vendor/golang.org/x/text/secure/bidirule.Transformer.vendor/golang.org/x/text/transform.ErrShortDst.vendor/golang.org/x/text/transform.ErrShortSrc <(*vendor/golang.org/x/text/secure/bidirule.Transformer).Span �~	Transformer.ptr.prototype.Span = function(src, atEOF) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, atEOF, err, n, ok, src, t;
		n = 0;
		err = $ifaceNil;
		t = this;
    		if ((t.state === 5) && t.isRTL()) {
    			_tmp = 0;
			_tmp$1 = $pkg.ErrInvalid;
			n = _tmp;
			err = _tmp$1;
			return [n, err];
    		}
  N		_tuple = t.advance(src);
		n = _tuple[0];
		ok = _tuple[1];
  g		switch (0) { default:
    			if (!ok) {
  }				err = $pkg.ErrInvalid;
    			} else if (n < src.$length) {
    				if (!atEOF) {
  �					err = transform.ErrShortSrc;
  �					break;
    				}
  �				err = $pkg.ErrInvalid;
    			} else if (!t.isFinal()) {
  				err = $pkg.ErrInvalid;
    			}
    		}
    		_tmp$2 = n;
		_tmp$3 = err;
		n = _tmp$2;
		err = _tmp$3;
		return [n, err];
    	};
	Transformer.prototype.Span = function(src, atEOF) { return this.$val.Span(src, atEOF); };
Transformer3vendor/golang.org/x/text/secure/bidirule.ErrInvalid4vendor/golang.org/x/text/secure/bidirule.Transformer1vendor/golang.org/x/text/secure/bidirule.advance~1vendor/golang.org/x/text/secure/bidirule.isFinal~/vendor/golang.org/x/text/secure/bidirule.isRTL~.vendor/golang.org/x/text/transform.ErrShortSrc -vendor/golang.org/x/text/secure/bidirule.init(vendor/golang.org/x/text/secure/bidiruleinit init��	init = function() {
		var _i, _ref, _tuple, i, p;
  �		_ref = asciiTable;
		_i = 0;
		while (true) {
			if (!(_i < 128)) { break; }
			i = _i;
  �			_tuple = bidi.LookupRune(((i >> 0)));
			p = $clone(_tuple[0], bidi.Properties);
  			bidi.Properties.copy(((i < 0 || i >= asciiTable.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiTable[i]), p);
    			_i++;
		}
    	};
    		init();
3vendor/golang.org/x/text/secure/bidirule.asciiTable-vendor/golang.org/x/text/secure/bidirule.init0vendor/golang.org/x/text/unicode/bidi.LookupRune0vendor/golang.org/x/text/unicode/bidi.Properties ?(*vendor/golang.org/x/text/secure/bidirule.Transformer).advance ��	Transformer.ptr.prototype.advance = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, c, e, n, ok, s, sz, t, tr, x, x$1, y;
		n = 0;
		ok = false;
		t = this;
  Y		e = new bidi.Properties.ptr(0, 0);
  p		sz = 0;
  x		while (true) {
			if (!(n < s.$length)) { break; }
    			if (((n < 0 || n >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + n]) < 128) {
  �				_tmp = $clone((x = ((n < 0 || n >= s.$length) ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + n]), ((x < 0 || x >= asciiTable.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiTable[x])), bidi.Properties);
				_tmp$1 = 1;
				bidi.Properties.copy(e, _tmp);
				sz = _tmp$1;
    			} else {
  �				_tuple = bidi.Lookup($subslice(s, n));
				bidi.Properties.copy(e, _tuple[0]);
				sz = _tuple[1];
    				if (sz <= 1) {
    					if (sz === 1) {
    						_tmp$2 = n;
						_tmp$3 = false;
						n = _tmp$2;
						ok = _tmp$3;
						return [n, ok];
    					}
    					_tmp$4 = n;
					_tmp$5 = true;
					n = _tmp$4;
					ok = _tmp$5;
					return [n, ok];
    				}
    			}
   v			c = (((y = $clone(e, bidi.Properties).Class(), y < 32 ? (1 << y) : 0) << 16 >>> 16));
   �			t.seen = (t.seen | (c)) >>> 0;
    			if (((t.seen & 36) >>> 0) === 36) {
   �				t.state = 5;
    				_tmp$6 = n;
				_tmp$7 = false;
				n = _tmp$6;
				ok = _tmp$7;
				return [n, ok];
    			}
  !			tr = $clone((x$1 = t.state, ((x$1 < 0 || x$1 >= transitions.length) ? ($throwRuntimeError("index out of range"), undefined) : transitions[x$1])), arrayType$1);
    			if (!((((tr[0].mask & c) >>> 0) === 0))) {
  !?				t.state = tr[0].next;
    			} else if (!((((tr[1].mask & c) >>> 0) === 0))) {
  !q				t.state = tr[1].next;
    			} else {
  !�				t.state = 5;
    				if (t.isRTL()) {
    					_tmp$8 = n;
					_tmp$9 = false;
					n = _tmp$8;
					ok = _tmp$9;
					return [n, ok];
    				}
    			}
  !�			n = n + (sz) >> 0;
    		}
    		_tmp$10 = n;
		_tmp$11 = true;
		n = _tmp$10;
		ok = _tmp$11;
		return [n, ok];
    	};
	Transformer.prototype.advance = function(s) { return this.$val.advance(s); };
Transformeradvance~4vendor/golang.org/x/text/secure/bidirule.Transformer4vendor/golang.org/x/text/secure/bidirule.arrayType$13vendor/golang.org/x/text/secure/bidirule.asciiTable/vendor/golang.org/x/text/secure/bidirule.isRTL~4vendor/golang.org/x/text/secure/bidirule.transitions,vendor/golang.org/x/text/unicode/bidi.Lookup0vendor/golang.org/x/text/unicode/bidi.Properties E(*vendor/golang.org/x/text/secure/bidirule.Transformer).advanceString �3	Transformer.ptr.prototype.advanceString = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, c, e, n, ok, s, sz, t, tr, x, x$1, y;
		n = 0;
		ok = false;
		t = this;
  "?		e = new bidi.Properties.ptr(0, 0);
  "V		sz = 0;
  "^		while (true) {
			if (!(n < s.length)) { break; }
    			if (s.charCodeAt(n) < 128) {
  "�				_tmp = $clone((x = s.charCodeAt(n), ((x < 0 || x >= asciiTable.length) ? ($throwRuntimeError("index out of range"), undefined) : asciiTable[x])), bidi.Properties);
				_tmp$1 = 1;
				bidi.Properties.copy(e, _tmp);
				sz = _tmp$1;
    			} else {
  "�				_tuple = bidi.LookupString($substring(s, n));
				bidi.Properties.copy(e, _tuple[0]);
				sz = _tuple[1];
    				if (sz <= 1) {
    					if (sz === 1) {
    						_tmp$2 = n;
						_tmp$3 = false;
						n = _tmp$2;
						ok = _tmp$3;
						return [n, ok];
    					}
    					_tmp$4 = n;
					_tmp$5 = true;
					n = _tmp$4;
					ok = _tmp$5;
					return [n, ok];
    				}
    			}
  #�			c = (((y = $clone(e, bidi.Properties).Class(), y < 32 ? (1 << y) : 0) << 16 >>> 16));
  #�			t.seen = (t.seen | (c)) >>> 0;
    			if (((t.seen & 36) >>> 0) === 36) {
  $-				t.state = 5;
    				_tmp$6 = n;
				_tmp$7 = false;
				n = _tmp$6;
				ok = _tmp$7;
				return [n, ok];
    			}
  $c			tr = $clone((x$1 = t.state, ((x$1 < 0 || x$1 >= transitions.length) ? ($throwRuntimeError("index out of range"), undefined) : transitions[x$1])), arrayType$1);
    			if (!((((tr[0].mask & c) >>> 0) === 0))) {
  $�				t.state = tr[0].next;
    			} else if (!((((tr[1].mask & c) >>> 0) === 0))) {
  $�				t.state = tr[1].next;
    			} else {
  $�				t.state = 5;
    				if (t.isRTL()) {
    					_tmp$8 = n;
					_tmp$9 = false;
					n = _tmp$8;
					ok = _tmp$9;
					return [n, ok];
    				}
    			}
  %:			n = n + (sz) >> 0;
    		}
    		_tmp$10 = n;
		_tmp$11 = true;
		n = _tmp$10;
		ok = _tmp$11;
		return [n, ok];
    	};
	Transformer.prototype.advanceString = function(s) { return this.$val.advanceString(s); };
TransformeradvanceString~4vendor/golang.org/x/text/secure/bidirule.Transformer4vendor/golang.org/x/text/secure/bidirule.arrayType$13vendor/golang.org/x/text/secure/bidirule.asciiTable/vendor/golang.org/x/text/secure/bidirule.isRTL~4vendor/golang.org/x/text/secure/bidirule.transitions2vendor/golang.org/x/text/unicode/bidi.LookupString0vendor/golang.org/x/text/unicode/bidi.Properties ?(*vendor/golang.org/x/text/secure/bidirule.Transformer).isFinal ��	Transformer.ptr.prototype.isFinal = function() {
		var t;
		t = this;
  &V		return (t.state === 2) || (t.state === 4) || (t.state === 0);
    	};
	Transformer.prototype.isFinal = function() { return this.$val.isFinal(); };
TransformerisFinal~4vendor/golang.org/x/text/secure/bidirule.Transformer ��{"Base":9901,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/text/secure/bidirule/bidirule.go","Base":1,"Size":9558,"Lines":[0,55,109,159,160,226,229,305,351,368,369,378,388,404,405,436,470,472,473,552,610,613,689,767,825,828,908,970,973,1052,1055,1116,1119,1192,1264,1319,1322,1395,1468,1538,1599,1627,1630,1680,1681,1752,1810,1811,1832,1833,1841,1871,1880,1894,1903,1917,1930,1932,1933,1962,1978,1991,1993,1994,2036,2114,2190,2224,2240,2271,2313,2317,2329,2403,2476,2505,2573,2574,2646,2703,2742,2833,2837,2854,2928,3001,3030,3112,3113,3185,3242,3290,3367,3371,3383,3457,3531,3550,3592,3593,3665,3714,3754,3845,3849,3866,3940,4014,4033,4089,4090,4162,4211,4251,4328,4332,4348,4368,4388,4392,4394,4395,4468,4483,4536,4537,4554,4626,4643,4646,4701,4702,4780,4851,4867,4909,4936,4966,4981,4988,4992,5009,5060,5087,5091,5101,5104,5129,5131,5132,5210,5287,5303,5351,5378,5414,5429,5436,5448,5452,5469,5520,5547,5551,5561,5564,5589,5591,5592,5646,5674,5693,5740,5755,5758,5778,5780,5781,5841,5875,5894,5947,5962,5965,5985,5987,5988,6068,6094,6117,6119,6120,6167,6193,6211,6224,6239,6241,6242,6320,6363,6400,6451,6477,6479,6480,6523,6576,6577,6655,6690,6781,6807,6830,6846,6876,6879,6910,6930,6995,7008,7011,7029,7031,7032,7104,7176,7218,7241,7244,7269,7279,7290,7309,7329,7343,7374,7383,7387,7406,7426,7445,7448,7463,7465,7466,7546,7563,7599,7600,7614,7643,7678,7698,7701,7703,7704,7763,7786,7798,7816,7844,7875,7886,7916,7932,7949,8013,8071,8102,8123,8129,8177,8182,8186,8252,8307,8337,8351,8394,8419,8438,8442,8481,8507,8531,8557,8581,8592,8617,8635,8655,8660,8664,8674,8677,8693,8695,8696,8761,8784,8796,8814,8842,8873,8884,8920,8936,8953,8991,8997,9045,9050,9054,9115,9170,9200,9214,9257,9282,9301,9305,9344,9370,9394,9420,9444,9455,9480,9498,9518,9523,9527,9537,9540,9556],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/vendor/golang.org/x/text/secure/bidirule/bidirule10.0.0.go","Base":9560,"Size":340,"Lines":[0,55,109,159,160,178,195,196,213,214,253,338],"Infos":null}]}
 