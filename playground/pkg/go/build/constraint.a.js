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
GoLinkname�� Implementation�� 	Reference��   ��`��go/build/constraint
constrainterrorsstringsunicodeunicode/utf8�li �� XExprYisExprxAndExprEvaloktagStringlineNotExprOrExprOffsetErrErroreSyntaxErrorTagTagExpr
constraint	IsGoBuildIsPlusBuildParsePlusBuildLines             00  #    0T # 
 3    5  7     ' B     #         g     '    
  T rF  .    F  .          3 ��  #    �T � 
 �    �  �     ' �             ; ��  #    �T � 
 �    �  �     ' �   F  .      F     �     B   I   U �T � M S�     a   e ��  #    �T � 
 �    �  �     ' �    m 
$lxo�z3�;�����U�e�> errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  unicode!	unicode = $packages["unicode"];
��    		$r = unicode.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  utf8#	utf8 = $packages["unicode/utf8"];
��    		$r = utf8.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Exprm	Expr = $pkg.Expr = $newType(8, $kindInterface, "constraint.Expr", true, "go/build/constraint", true, null);
�	Expr.init([{prop: "Eval", name: "Eval", pkg: "", typ: $funcType([funcType], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "isExpr", name: "isExpr", pkg: "go/build/constraint", typ: $funcType([], [], false)}]);
Exprgo/build/constraint.Exprgo/build/constraint.funcType  TagExpr��	TagExpr = $pkg.TagExpr = $newType(0, $kindStruct, "constraint.TagExpr", true, "go/build/constraint", true, function(Tag_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Tag = "";
			return;
		}
		this.Tag = Tag_;
	});
�	ptrType$3.methods = [{prop: "isExpr", name: "isExpr", pkg: "go/build/constraint", typ: $funcType([], [], false)}, {prop: "Eval", name: "Eval", pkg: "", typ: $funcType([funcType], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
i	TagExpr.init("", [{prop: "Tag", name: "Tag", embedded: false, exported: true, typ: $String, tag: ""}]);
TagExprgo/build/constraint.TagExprgo/build/constraint.funcTypego/build/constraint.ptrType$3  NotExpr��	NotExpr = $pkg.NotExpr = $newType(0, $kindStruct, "constraint.NotExpr", true, "go/build/constraint", true, function(X_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.X = $ifaceNil;
			return;
		}
		this.X = X_;
	});
�	ptrType$4.methods = [{prop: "isExpr", name: "isExpr", pkg: "go/build/constraint", typ: $funcType([], [], false)}, {prop: "Eval", name: "Eval", pkg: "", typ: $funcType([funcType], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
b	NotExpr.init("", [{prop: "X", name: "X", embedded: false, exported: true, typ: Expr, tag: ""}]);
NotExprgo/build/constraint.Exprgo/build/constraint.NotExprgo/build/constraint.funcTypego/build/constraint.ptrType$4  AndExpr�	AndExpr = $pkg.AndExpr = $newType(0, $kindStruct, "constraint.AndExpr", true, "go/build/constraint", true, function(X_, Y_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.X = $ifaceNil;
			this.Y = $ifaceNil;
			return;
		}
		this.X = X_;
		this.Y = Y_;
	});
�	ptrType.methods = [{prop: "isExpr", name: "isExpr", pkg: "go/build/constraint", typ: $funcType([], [], false)}, {prop: "Eval", name: "Eval", pkg: "", typ: $funcType([funcType], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
��	AndExpr.init("", [{prop: "X", name: "X", embedded: false, exported: true, typ: Expr, tag: ""}, {prop: "Y", name: "Y", embedded: false, exported: true, typ: Expr, tag: ""}]);
AndExprgo/build/constraint.AndExprgo/build/constraint.Exprgo/build/constraint.funcTypego/build/constraint.ptrType  OrExpr�	OrExpr = $pkg.OrExpr = $newType(0, $kindStruct, "constraint.OrExpr", true, "go/build/constraint", true, function(X_, Y_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.X = $ifaceNil;
			this.Y = $ifaceNil;
			return;
		}
		this.X = X_;
		this.Y = Y_;
	});
�	ptrType$1.methods = [{prop: "isExpr", name: "isExpr", pkg: "go/build/constraint", typ: $funcType([], [], false)}, {prop: "Eval", name: "Eval", pkg: "", typ: $funcType([funcType], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}];
��	OrExpr.init("", [{prop: "X", name: "X", embedded: false, exported: true, typ: Expr, tag: ""}, {prop: "Y", name: "Y", embedded: false, exported: true, typ: Expr, tag: ""}]);
OrExprgo/build/constraint.Exprgo/build/constraint.OrExprgo/build/constraint.funcTypego/build/constraint.ptrType$1  SyntaxError�,	SyntaxError = $pkg.SyntaxError = $newType(0, $kindStruct, "constraint.SyntaxError", true, "go/build/constraint", true, function(Offset_, Err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Offset = 0;
			this.Err = "";
			return;
		}
		this.Offset = Offset_;
		this.Err = Err_;
	});
f	ptrType$2.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
��	SyntaxError.init("", [{prop: "Offset", name: "Offset", embedded: false, exported: true, typ: $Int, tag: ""}, {prop: "Err", name: "Err", embedded: false, exported: true, typ: $String, tag: ""}]);
SyntaxErrorgo/build/constraint.SyntaxErrorgo/build/constraint.ptrType$2  
exprParser��	exprParser = $pkg.exprParser = $newType(0, $kindStruct, "constraint.exprParser", true, "go/build/constraint", false, function(s_, i_, tok_, isTag_, pos_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = "";
			this.i = 0;
			this.tok = "";
			this.isTag = false;
			this.pos = 0;
			return;
		}
		this.s = s_;
		this.i = i_;
		this.tok = tok_;
		this.isTag = isTag_;
		this.pos = pos_;
	});
��	ptrType$5.methods = [{prop: "or", name: "or", pkg: "go/build/constraint", typ: $funcType([], [Expr], false)}, {prop: "and", name: "and", pkg: "go/build/constraint", typ: $funcType([], [Expr], false)}, {prop: "not", name: "not", pkg: "go/build/constraint", typ: $funcType([], [Expr], false)}, {prop: "atom", name: "atom", pkg: "go/build/constraint", typ: $funcType([], [Expr], false)}, {prop: "lex", name: "lex", pkg: "go/build/constraint", typ: $funcType([], [], false)}];
��	exprParser.init("go/build/constraint", [{prop: "s", name: "s", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "i", name: "i", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "tok", name: "tok", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "isTag", name: "isTag", embedded: false, exported: false, typ: $Bool, tag: ""}, {prop: "pos", name: "pos", embedded: false, exported: false, typ: $Int, tag: ""}]);

exprParsergo/build/constraint.Exprgo/build/constraint.exprParsergo/build/constraint.ptrType$5  ptrType	ptrType = $ptrType(AndExpr);
ptrTypego/build/constraint.AndExpr  	ptrType$1	ptrType$1 = $ptrType(OrExpr);
	ptrType$1go/build/constraint.OrExpr  	ptrType$2$	ptrType$2 = $ptrType(SyntaxError);
	ptrType$2go/build/constraint.SyntaxError  	sliceType	sliceType = $sliceType(Expr);
	sliceTypego/build/constraint.Expr  sliceType$1&	sliceType$1 = $sliceType(sliceType);
sliceType$1go/build/constraint.sliceType  sliceType$2(	sliceType$2 = $sliceType(sliceType$1);
sliceType$2go/build/constraint.sliceType$1  	ptrType$3 	ptrType$3 = $ptrType(TagExpr);
	ptrType$3go/build/constraint.TagExpr  	ptrType$4 	ptrType$4 = $ptrType(NotExpr);
	ptrType$4go/build/constraint.NotExpr  sliceType$3$	sliceType$3 = $sliceType($String);
sliceType$3  funcType2	funcType = $funcType([$String], [$Bool], false);
funcType  	ptrType$5#	ptrType$5 = $ptrType(exprParser);
	ptrType$5go/build/constraint.exprParser  errNotConstrainterrNotConstraint  
errComplex
errComplex  @  �		errNotConstraint = errors.New("not a build constraint");

errors.New$go/build/constraint.errNotConstraint  N  ,�		errComplex = errors.New("expression too complex for // +build lines");

errors.Newgo/build/constraint.errComplex %(*go/build/constraint.TagExpr).isExpr ��	TagExpr.ptr.prototype.isExpr = function() {
		var x;
		x = this;
    	};
	TagExpr.prototype.isExpr = function() { return this.$val.isExpr(); };
TagExprisExpr~go/build/constraint.TagExpr #(*go/build/constraint.TagExpr).Eval ��	TagExpr.ptr.prototype.Eval = function(ok) {
		var $24r, _r, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r = ok(x.Tag); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: TagExpr.ptr.prototype.Eval }; } $f.$24r = $24r; $f._r = _r; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	TagExpr.prototype.Eval = function(ok) { return this.$val.Eval(ok); };
TagExprgo/build/constraint.TagExpr %(*go/build/constraint.TagExpr).String ��	TagExpr.ptr.prototype.String = function() {
		var x;
		x = this;
  �		return x.Tag;
    	};
	TagExpr.prototype.String = function() { return this.$val.String(); };
TagExprgo/build/constraint.TagExpr go/build/constraint.taggo/build/constrainttag tagU	tag = function(tag$1) {
		var tag$1;
  �		return new TagExpr.ptr(tag$1);
    	};
taggo/build/constraint.TagExprgo/build/constraint.tag %(*go/build/constraint.NotExpr).isExpr ��	NotExpr.ptr.prototype.isExpr = function() {
		var x;
		x = this;
    	};
	NotExpr.prototype.isExpr = function() { return this.$val.isExpr(); };
NotExprisExpr~go/build/constraint.NotExpr #(*go/build/constraint.NotExpr).Eval ��	NotExpr.ptr.prototype.Eval = function(ok) {
		var $24r, _r, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r = x.X.Eval(ok); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = !_r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NotExpr.ptr.prototype.Eval }; } $f.$24r = $24r; $f._r = _r; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	NotExpr.prototype.Eval = function(ok) { return this.$val.Eval(ok); };
NotExprgo/build/constraint.NotExpr %(*go/build/constraint.NotExpr).String �w	NotExpr.ptr.prototype.String = function() {
		var _r, _ref, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _ref = $f._ref; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r = x.X.String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  
		_ref = x.X;
    		if ($assertType(_ref, ptrType, true)[1] || $assertType(_ref, ptrType$1, true)[1]) {
  9			s = "(" + s + ")";
    		}
  O		$s = -1; return "!" + s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NotExpr.ptr.prototype.String }; } $f._r = _r; $f._ref = _ref; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	NotExpr.prototype.String = function() { return this.$val.String(); };
NotExprgo/build/constraint.AndExprgo/build/constraint.NotExprgo/build/constraint.OrExprgo/build/constraint.ptrTypego/build/constraint.ptrType$1 go/build/constraint.notgo/build/constraintnot notI	not = function(x) {
		var x;
  y		return new NotExpr.ptr(x);
    	};
notgo/build/constraint.NotExprgo/build/constraint.not %(*go/build/constraint.AndExpr).isExpr ��	AndExpr.ptr.prototype.isExpr = function() {
		var x;
		x = this;
    	};
	AndExpr.prototype.isExpr = function() { return this.$val.isExpr(); };
AndExprisExpr~go/build/constraint.AndExpr #(*go/build/constraint.AndExpr).Eval ��	AndExpr.ptr.prototype.Eval = function(ok) {
		var _r, _r$1, ok, x, xok, yok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; ok = $f.ok; x = $f.x; xok = $f.xok; yok = $f.yok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  	x		_r = x.X.Eval(ok); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		xok = _r;
  	�		_r$1 = x.Y.Eval(ok); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		yok = _r$1;
  	�		$s = -1; return xok && yok;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: AndExpr.ptr.prototype.Eval }; } $f._r = _r; $f._r$1 = _r$1; $f.ok = ok; $f.x = x; $f.xok = xok; $f.yok = yok; $f.$s = $s; $f.$r = $r; return $f;
	};
	AndExpr.prototype.Eval = function(ok) { return this.$val.Eval(ok); };
AndExprgo/build/constraint.AndExpr %(*go/build/constraint.AndExpr).String ��	AndExpr.ptr.prototype.String = function() {
		var $24r, _r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  	�		_r = andArg(x.X); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = andArg(x.Y); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r + " && " + _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: AndExpr.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	AndExpr.prototype.String = function() { return this.$val.String(); };
AndExprgo/build/constraint.AndExprgo/build/constraint.andArg go/build/constraint.andArggo/build/constraintandArg andArg��	andArg = function(x) {
		var _r, _tuple, ok, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; ok = $f.ok; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
'		_r = x.String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  
;		_tuple = $assertType(x, ptrType$1, true);
		ok = _tuple[1];
    		if (ok) {
  
X			s = "(" + s + ")";
    		}
  
n		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: andArg }; } $f._r = _r; $f._tuple = _tuple; $f.ok = ok; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
andArggo/build/constraint.andArggo/build/constraint.ptrType$1 go/build/constraint.andgo/build/constraintand andR	and = function(x, y) {
		var x, y;
  
�		return new AndExpr.ptr(x, y);
    	};
andgo/build/constraint.AndExprgo/build/constraint.and $(*go/build/constraint.OrExpr).isExpr ��	OrExpr.ptr.prototype.isExpr = function() {
		var x;
		x = this;
    	};
	OrExpr.prototype.isExpr = function() { return this.$val.isExpr(); };
OrExprisExpr~go/build/constraint.OrExpr "(*go/build/constraint.OrExpr).Eval ��	OrExpr.ptr.prototype.Eval = function(ok) {
		var _r, _r$1, ok, x, xok, yok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; ok = $f.ok; x = $f.x; xok = $f.xok; yok = $f.yok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r = x.X.Eval(ok); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		xok = _r;
  �		_r$1 = x.Y.Eval(ok); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		yok = _r$1;
  �		$s = -1; return xok || yok;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: OrExpr.ptr.prototype.Eval }; } $f._r = _r; $f._r$1 = _r$1; $f.ok = ok; $f.x = x; $f.xok = xok; $f.yok = yok; $f.$s = $s; $f.$r = $r; return $f;
	};
	OrExpr.prototype.Eval = function(ok) { return this.$val.Eval(ok); };
OrExprgo/build/constraint.OrExpr $(*go/build/constraint.OrExpr).String ��	OrExpr.ptr.prototype.String = function() {
		var $24r, _r, _r$1, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		x = this;
  �		_r = orArg(x.X); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = orArg(x.Y); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r + " || " + _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: OrExpr.ptr.prototype.String }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	OrExpr.prototype.String = function() { return this.$val.String(); };
OrExprgo/build/constraint.OrExprgo/build/constraint.orArg go/build/constraint.orArggo/build/constraintorArg orArg��	orArg = function(x) {
		var _r, _tuple, ok, s, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; ok = $f.ok; s = $f.s; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ?		_r = x.String(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  S		_tuple = $assertType(x, ptrType, true);
		ok = _tuple[1];
    		if (ok) {
  q			s = "(" + s + ")";
    		}
  �		$s = -1; return s;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: orArg }; } $f._r = _r; $f._tuple = _tuple; $f.ok = ok; $f.s = s; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
orArggo/build/constraint.orArggo/build/constraint.ptrType go/build/constraint.orgo/build/constraintor orP	or = function(x, y) {
		var x, y;
  �		return new OrExpr.ptr(x, y);
    	};
orgo/build/constraint.OrExprgo/build/constraint.or ((*go/build/constraint.SyntaxError).Error ��	SyntaxError.ptr.prototype.Error = function() {
		var e;
		e = this;
  �		return e.Err;
    	};
	SyntaxError.prototype.Error = function() { return this.$val.Error(); };
SyntaxErrorgo/build/constraint.SyntaxError go/build/constraint.Parsego/build/constraintParse Parse��	Parse = function(line) {
		var $24r, $24r$1, _r, _r$1, _r$2, _r$3, _tuple, _tuple$1, line, ok, ok$1, text, text$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; line = $f.line; ok = $f.ok; ok$1 = $f.ok$1; text = $f.text; text$1 = $f.text$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = splitGoBuild(line); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		text = _tuple[0];
		ok = _tuple[1];
  �		/* */ if (ok) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (ok) { */ case 2:
  �			_r$1 = parseExpr(text); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 3:
  		_r$2 = splitPlusBuild(line); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$1 = _r$2;
		text$1 = _tuple$1[0];
		ok$1 = _tuple$1[1];
  		/* */ if (ok$1) { $s = 7; continue; }
		/* */ $s = 8; continue;
    		/* if (ok$1) { */ case 7:
  ;			_r$3 = parsePlusBuildExpr(text$1); /* */ $s = 9; case 9: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
			$24r$1 = [_r$3, $ifaceNil];
			$s = 10; case 10: return $24r$1;
    		/* } */ case 8:
  d		$s = -1; return [$ifaceNil, errNotConstraint];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Parse }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.line = line; $f.ok = ok; $f.ok$1 = ok$1; $f.text = text; $f.text$1 = text$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Parse = Parse;
Parsego/build/constraint.Parse$go/build/constraint.errNotConstraintgo/build/constraint.parseExpr&go/build/constraint.parsePlusBuildExpr go/build/constraint.splitGoBuild"go/build/constraint.splitPlusBuild go/build/constraint.IsGoBuildgo/build/constraint	IsGoBuild 	IsGoBuild��	IsGoBuild = function(line) {
		var _r, _tuple, line, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; line = $f.line; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  I		_r = splitGoBuild(line); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		ok = _tuple[1];
  f		$s = -1; return ok;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: IsGoBuild }; } $f._r = _r; $f._tuple = _tuple; $f.line = line; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.IsGoBuild = IsGoBuild;
	IsGoBuildgo/build/constraint.IsGoBuild go/build/constraint.splitGoBuild  go/build/constraint.splitGoBuildgo/build/constraintsplitGoBuild splitGoBuild�	splitGoBuild = function(line) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, expr, line, ok, trim, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; expr = $f.expr; line = $f.line; ok = $f.ok; trim = $f.trim; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		expr = "";
		ok = false;
    		if (line.length > 0 && (line.charCodeAt((line.length - 1 >> 0)) === 10)) {
  �			line = $substring(line, 0, (line.length - 1 >> 0));
    		}
    		if (strings.Contains(line, "\n")) {
    			_tmp = "";
			_tmp$1 = false;
			expr = _tmp;
			ok = _tmp$1;
			$s = -1; return [expr, ok];
    		}
    		if (!strings.HasPrefix(line, "//go:build")) {
    			_tmp$2 = "";
			_tmp$3 = false;
			expr = _tmp$2;
			ok = _tmp$3;
			$s = -1; return [expr, ok];
    		}
  �		_r = strings.TrimSpace(line); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		line = _r;
  �		line = $substring(line, 10);
  �		_r$1 = strings.TrimSpace(line); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		trim = _r$1;
    		if ((line.length === trim.length) && !(line === "")) {
    			_tmp$4 = "";
			_tmp$5 = false;
			expr = _tmp$4;
			ok = _tmp$5;
			$s = -1; return [expr, ok];
    		}
    		_tmp$6 = trim;
		_tmp$7 = true;
		expr = _tmp$6;
		ok = _tmp$7;
		$s = -1; return [expr, ok];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: splitGoBuild }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f.expr = expr; $f.line = line; $f.ok = ok; $f.trim = trim; $f.$s = $s; $f.$r = $r; return $f;
	};
splitGoBuild go/build/constraint.splitGoBuildstrings.Containsstrings.HasPrefixstrings.TrimSpace go/build/constraint.parseExprgo/build/constraint	parseExpr 	parseExpr� 	parseExpr = function(text) {
		var $24r, _r, _tmp, _tmp$1, err, p, text, x, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; err = $f.err; p = $f.p; text = $f.text; x = $f.x; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		err = [err];
		x = $ifaceNil;
		err[0] = $ifaceNil;
  �		$deferred.push([(function(err) { return function() {
			var _tuple, e, e$1, ok;
  �			e = $recover();
    			if (!($interfaceIsEqual(e, $ifaceNil))) {
  �				_tuple = $assertType(e, ptrType$2, true);
				e$1 = _tuple[0];
				ok = _tuple[1];
    				if (ok) {
  					err[0] = e$1;
  (					return;
    				}
  7				$panic(e);
    			}
    		}; })(err), []]);
  r		p = new exprParser.ptr(text, 0, "", false, 0);
  �		_r = p.or(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
    		if (!(p.tok === "")) {
  �			$panic(new SyntaxError.ptr(p.pos, "unexpected token " + p.tok));
    		}
    		_tmp = x;
		_tmp$1 = $ifaceNil;
		x = _tmp;
		err[0] = _tmp$1;
		$24r = [x, err[0]];
		$s = 2; case 2: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [x, err[0]]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: parseExpr }; } $f.$24r = $24r; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.err = err; $f.p = p; $f.text = text; $f.x = x; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	parseExprgo/build/constraint.SyntaxErrorgo/build/constraint.exprParsergo/build/constraint.or~go/build/constraint.parseExprgo/build/constraint.ptrType$2 $(*go/build/constraint.exprParser).or �3	exprParser.ptr.prototype.or = function() {
		var _arg, _arg$1, _r, _r$1, _r$2, p, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; p = $f.p; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		_r = p.and(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
  �		/* while (true) { */ case 2:
			/* if (!(p.tok === "||")) { break; } */ if(!(p.tok === "||")) { $s = 3; continue; }
  �			_arg = x;
			_r$1 = p.and(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_arg$1 = _r$1;
			_r$2 = or(_arg, _arg$1); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			x = _r$2;
    		$s = 2; continue;
		case 3:
  			$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: exprParser.ptr.prototype.or }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.p = p; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	exprParser.prototype.or = function() { return this.$val.or(); };

exprParseror~go/build/constraint.and~go/build/constraint.exprParsergo/build/constraint.or %(*go/build/constraint.exprParser).and �8	exprParser.ptr.prototype.and = function() {
		var _arg, _arg$1, _r, _r$1, _r$2, p, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; p = $f.p; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		_r = p.not(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		x = _r;
  �		/* while (true) { */ case 2:
			/* if (!(p.tok === "&&")) { break; } */ if(!(p.tok === "&&")) { $s = 3; continue; }
  			_arg = x;
			_r$1 = p.not(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_arg$1 = _r$1;
			_r$2 = and(_arg, _arg$1); /* */ $s = 5; case 5: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			x = _r$2;
    		$s = 2; continue;
		case 3:
  		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: exprParser.ptr.prototype.and }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.p = p; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	exprParser.prototype.and = function() { return this.$val.and(); };

exprParserand~go/build/constraint.andgo/build/constraint.exprParsergo/build/constraint.not~ %(*go/build/constraint.exprParser).not ��	exprParser.ptr.prototype.not = function() {
		var $24r, $24r$1, _r, _r$1, _r$2, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		p.lex();
  �		/* */ if (p.tok === "!") { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.tok === "!") { */ case 1:
   			p.lex();
    			if (p.tok === "!") {
  				$panic(new SyntaxError.ptr(p.pos, "double negation not allowed"));
    			}
  l			_r = p.atom(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r$1 = not(_r); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			$24r = _r$1;
			$s = 5; case 5: return $24r;
    		/* } */ case 2:
  �		_r$2 = p.atom(); /* */ $s = 6; case 6: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		$24r$1 = _r$2;
		$s = 7; case 7: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: exprParser.ptr.prototype.not }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	exprParser.prototype.not = function() { return this.$val.not(); };

exprParsernot~go/build/constraint.SyntaxErrorgo/build/constraint.atom~go/build/constraint.exprParsergo/build/constraint.lex~go/build/constraint.not &(*go/build/constraint.exprParser).atom ��	exprParser.ptr.prototype.atom = function() {
		var $24r, $24r$1, _r, p, pos, tok, x, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; p = $f.p; pos = $f.pos; tok = $f.tok; x = $f.x; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		p = this;
  �		/* */ if (p.tok === "(") { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.tok === "(") { */ case 1:
  �			pos = p.pos;
  �			$deferred.push([(function() {
				var _tuple, e, e$1, ok;
  �				e = $recover();
    				if (!($interfaceIsEqual(e, $ifaceNil))) {
  �					_tuple = $assertType(e, ptrType$2, true);
					e$1 = _tuple[0];
					ok = _tuple[1];
    					if (ok && e$1.Err === "unexpected end of expression") {
  .						e$1.Err = "missing close paren";
    					}
  V					$panic(e);
    				}
    			}), []]);
  l			_r = p.or(); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			x = _r;
    			if (!(p.tok === ")")) {
  �				$panic(new SyntaxError.ptr(pos, "missing close paren"));
    			}
  �			p.lex();
  �			$24r = x;
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
    		if (!p.isTag) {
    			if (p.tok === "") {
  				$panic(new SyntaxError.ptr(p.pos, "unexpected end of expression"));
    			}
  \			$panic(new SyntaxError.ptr(p.pos, "unexpected token " + p.tok));
    		}
  �		tok = p.tok;
  �		p.lex();
  �		$24r$1 = tag(tok);
		$s = 5; case 5: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: exprParser.ptr.prototype.atom }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f.p = p; $f.pos = pos; $f.tok = tok; $f.x = x; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	exprParser.prototype.atom = function() { return this.$val.atom(); };

exprParseratom~go/build/constraint.SyntaxErrorgo/build/constraint.exprParsergo/build/constraint.lex~go/build/constraint.or~go/build/constraint.ptrType$2go/build/constraint.tag %(*go/build/constraint.exprParser).lex �	exprParser.ptr.prototype.lex = function() {
		var _1, _i, _ref, _rune, _tuple, c, c$1, i, p, tag$1;
		p = this;
  e		p.isTag = false;
  v		while (true) {
			if (!(p.i < p.s.length && ((p.s.charCodeAt(p.i) === 32) || (p.s.charCodeAt(p.i) === 9)))) { break; }
  �			p.i = p.i + (1) >> 0;
    		}
    		if (p.i >= p.s.length) {
  �			p.tok = "";
  �			p.pos = p.i;
  �			return;
    		}
    		_1 = p.s.charCodeAt(p.i);
    		if ((_1 === (40)) || (_1 === (41)) || (_1 === (33))) {
   &			p.pos = p.i;
   4			p.i = p.i + (1) >> 0;
   <			p.tok = $substring(p.s, p.pos, p.i);
   U			return;
    		} else if ((_1 === (38)) || (_1 === (124))) {
    			if ((p.i + 1 >> 0) >= p.s.length || !((p.s.charCodeAt((p.i + 1 >> 0)) === p.s.charCodeAt(p.i)))) {
   �				$panic(new SyntaxError.ptr(p.i, "invalid syntax at " + ($encodeRune(((p.s.charCodeAt(p.i) >> 0))))));
    			}
   �			p.pos = p.i;
  !			p.i = p.i + (2) >> 0;
  !			p.tok = $substring(p.s, p.pos, p.i);
  !0			return;
    		}
  !<		tag$1 = $substring(p.s, p.i);
  !N		_ref = tag$1;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			i = _i;
			c = _rune[0];
    			if (!unicode.IsLetter(c) && !unicode.IsDigit(c) && !((c === 95)) && !((c === 46))) {
  !�				tag$1 = $substring(tag$1, 0, i);
  !�				break;
    			}
    			_i += _rune[1];
		}
    		if (tag$1 === "") {
  !�			_tuple = utf8.DecodeRuneInString($substring(p.s, p.i));
			c$1 = _tuple[0];
  "			$panic(new SyntaxError.ptr(p.i, "invalid syntax at " + ($encodeRune(c$1))));
    		}
  "^		p.pos = p.i;
  "k		p.i = p.i + (tag$1.length) >> 0;
  "|		p.tok = $substring(p.s, p.pos, p.i);
  "�		p.isTag = true;
  "�		return;
    	};
	exprParser.prototype.lex = function() { return this.$val.lex(); };

exprParserlex~go/build/constraint.SyntaxErrorgo/build/constraint.exprParserunicode.IsDigitunicode.IsLetterunicode/utf8.DecodeRuneInString go/build/constraint.IsPlusBuildgo/build/constraintIsPlusBuild IsPlusBuild��	IsPlusBuild = function(line) {
		var _r, _tuple, line, ok, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; line = $f.line; ok = $f.ok; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  #v		_r = splitPlusBuild(line); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		ok = _tuple[1];
  #�		$s = -1; return ok;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: IsPlusBuild }; } $f._r = _r; $f._tuple = _tuple; $f.line = line; $f.ok = ok; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.IsPlusBuild = IsPlusBuild;
IsPlusBuildgo/build/constraint.IsPlusBuild"go/build/constraint.splitPlusBuild "go/build/constraint.splitPlusBuildgo/build/constraintsplitPlusBuild splitPlusBuild�	/	splitPlusBuild = function(line) {
		var _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, expr, line, ok, trim, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; expr = $f.expr; line = $f.line; ok = $f.ok; trim = $f.trim; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		expr = "";
		ok = false;
    		if (line.length > 0 && (line.charCodeAt((line.length - 1 >> 0)) === 10)) {
  %"			line = $substring(line, 0, (line.length - 1 >> 0));
    		}
    		if (strings.Contains(line, "\n")) {
    			_tmp = "";
			_tmp$1 = false;
			expr = _tmp;
			ok = _tmp$1;
			$s = -1; return [expr, ok];
    		}
    		if (!strings.HasPrefix(line, "//")) {
    			_tmp$2 = "";
			_tmp$3 = false;
			expr = _tmp$2;
			ok = _tmp$3;
			$s = -1; return [expr, ok];
    		}
  %�		line = $substring(line, 2);
  &		_r = strings.TrimSpace(line); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		line = _r;
    		if (!strings.HasPrefix(line, "+build")) {
    			_tmp$4 = "";
			_tmp$5 = false;
			expr = _tmp$4;
			ok = _tmp$5;
			$s = -1; return [expr, ok];
    		}
  &l		line = $substring(line, 6);
  '�		_r$1 = strings.TrimSpace(line); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		trim = _r$1;
    		if ((line.length === trim.length) && !(line === "")) {
    			_tmp$6 = "";
			_tmp$7 = false;
			expr = _tmp$6;
			ok = _tmp$7;
			$s = -1; return [expr, ok];
    		}
    		_tmp$8 = trim;
		_tmp$9 = true;
		expr = _tmp$8;
		ok = _tmp$9;
		$s = -1; return [expr, ok];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: splitPlusBuild }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f.expr = expr; $f.line = line; $f.ok = ok; $f.trim = trim; $f.$s = $s; $f.$r = $r; return $f;
	};
splitPlusBuild"go/build/constraint.splitPlusBuildstrings.Containsstrings.HasPrefixstrings.TrimSpace &go/build/constraint.parsePlusBuildExprgo/build/constraintparsePlusBuildExpr parsePlusBuildExpr�	0	parsePlusBuildExpr = function(text) {
		var _i, _i$1, _r, _ref, _ref$1, clause, lit, neg, text, x, y, z, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; clause = $f.clause; lit = $f.lit; neg = $f.neg; text = $f.text; x = $f.x; y = $f.y; z = $f.z; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  (�		x = $ifaceNil;
  (�		_r = strings.Fields(text); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_ref = _r;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			clause = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  (�			y = $ifaceNil;
  (�			_ref$1 = strings.Split(clause, ",");
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				lit = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  ) 				z = $ifaceNil;
  ).				neg = false;
    				if (strings.HasPrefix(lit, "!!") || lit === "!") {
  )n					z = tag("ignore");
    				} else {
    					if (strings.HasPrefix(lit, "!")) {
  )�						neg = true;
  )�						lit = $substring(lit, 1);
    					}
    					if (isValidTag(lit)) {
  )�						z = tag(lit);
    					} else {
  *						z = tag("ignore");
    					}
    					if (neg) {
  *H						z = not(z);
    					}
    				}
    				if ($interfaceIsEqual(y, $ifaceNil)) {
  *s					y = z;
    				} else {
  *�					y = and(y, z);
    				}
    				_i$1++;
			}
    			if ($interfaceIsEqual(x, $ifaceNil)) {
  *�				x = y;
    			} else {
  *�				x = or(x, y);
    			}
    			_i++;
		$s = 2; continue;
		case 3:
    		if ($interfaceIsEqual(x, $ifaceNil)) {
  *�			x = tag("ignore");
    		}
  +		$s = -1; return x;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: parsePlusBuildExpr }; } $f._i = _i; $f._i$1 = _i$1; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f.clause = clause; $f.lit = lit; $f.neg = neg; $f.text = text; $f.x = x; $f.y = y; $f.z = z; $f.$s = $s; $f.$r = $r; return $f;
	};
parsePlusBuildExpr	go/build/constraint.andgo/build/constraint.isValidTaggo/build/constraint.notgo/build/constraint.or&go/build/constraint.parsePlusBuildExprgo/build/constraint.tagstrings.Fieldsstrings.HasPrefixstrings.Split go/build/constraint.isValidTaggo/build/constraint
isValidTag 
isValidTag��	isValidTag = function(word) {
		var _i, _ref, _rune, c, word;
    		if (word === "") {
  +�			return false;
    		}
  ,			_ref = word;
		_i = 0;
		while (true) {
			if (!(_i < _ref.length)) { break; }
			_rune = $decodeRune(_ref, _i);
			c = _rune[0];
    			if (!unicode.IsLetter(c) && !unicode.IsDigit(c) && !((c === 95)) && !((c === 46))) {
  ,p				return false;
    			}
    			_i += _rune[1];
		}
  ,�		return true;
    	};

isValidTaggo/build/constraint.isValidTagunicode.IsDigitunicode.IsLetter "go/build/constraint.PlusBuildLinesgo/build/constraintPlusBuildLines PlusBuildLines��	PlusBuildLines = function(x) {
		var _i, _i$1, _i$2, _i$3, _i$4, _i$5, _i$6, _i$7, _r, _ref, _ref$1, _ref$2, _ref$3, _ref$4, _ref$5, _ref$6, _ref$7, _ref$8, and$1, and$2, ands, clause, i, line, lines, lit, lit$1, lits, lits$1, maxOr, or$1, or$2, or$3, or$4, split, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _i$3 = $f._i$3; _i$4 = $f._i$4; _i$5 = $f._i$5; _i$6 = $f._i$6; _i$7 = $f._i$7; _r = $f._r; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _ref$4 = $f._ref$4; _ref$5 = $f._ref$5; _ref$6 = $f._ref$6; _ref$7 = $f._ref$7; _ref$8 = $f._ref$8; and$1 = $f.and$1; and$2 = $f.and$2; ands = $f.ands; clause = $f.clause; i = $f.i; line = $f.line; lines = $f.lines; lit = $f.lit; lit$1 = $f.lit$1; lits = $f.lits; lits$1 = $f.lits$1; maxOr = $f.maxOr; or$1 = $f.or$1; or$2 = $f.or$2; or$3 = $f.or$3; or$4 = $f.or$4; split = $f.split; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  .�		x = pushNot(x, false);
  /M		split = sliceType$2.nil;
  /_		_ref = appendSplitAnd(sliceType.nil, x);
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			or$1 = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  /�			ands = sliceType$1.nil;
  /�			_ref$1 = appendSplitOr(sliceType.nil, or$1);
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < _ref$1.$length)) { break; }
				and$1 = ((_i$1 < 0 || _i$1 >= _ref$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1.$array[_ref$1.$offset + _i$1]);
  /�				lits = sliceType.nil;
  /�				_ref$2 = appendSplitAnd(sliceType.nil, and$1);
				_i$2 = 0;
				while (true) {
					if (!(_i$2 < _ref$2.$length)) { break; }
					lit = ((_i$2 < 0 || _i$2 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$2]);
  0					_ref$3 = lit;
    					if ($assertType(_ref$3, ptrType$3, true)[1] || $assertType(_ref$3, ptrType$4, true)[1]) {
  0M						lits = $append(lits, lit);
    					} else {
  0x						$s = -1; return [sliceType$3.nil, errComplex];
    					}
    					_i$2++;
				}
  0�				ands = $append(ands, lits);
    				_i$1++;
			}
  0�			split = $append(split, ands);
    			_i++;
		}
  1�		maxOr = 0;
  1�		_ref$4 = split;
		_i$3 = 0;
		while (true) {
			if (!(_i$3 < _ref$4.$length)) { break; }
			or$2 = ((_i$3 < 0 || _i$3 >= _ref$4.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$4.$array[_ref$4.$offset + _i$3]);
    			if (maxOr < or$2.$length) {
  1�				maxOr = or$2.$length;
    			}
    			_i$3++;
		}
    		if (maxOr === 1) {
  1�			lits$1 = sliceType.nil;
  2			_ref$5 = split;
			_i$4 = 0;
			while (true) {
				if (!(_i$4 < _ref$5.$length)) { break; }
				or$3 = ((_i$4 < 0 || _i$4 >= _ref$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$5.$array[_ref$5.$offset + _i$4]);
  2				lits$1 = $appendSlice(lits$1, (0 >= or$3.$length ? ($throwRuntimeError("index out of range"), undefined) : or$3.$array[or$3.$offset + 0]));
    				_i$4++;
			}
  2C			split = new sliceType$2([new sliceType$1([lits$1])]);
    		}
  2�		lines = sliceType$3.nil;
  2�		_ref$6 = split;
		_i$5 = 0;
		/* while (true) { */ case 1:
			/* if (!(_i$5 < _ref$6.$length)) { break; } */ if(!(_i$5 < _ref$6.$length)) { $s = 2; continue; }
			or$4 = ((_i$5 < 0 || _i$5 >= _ref$6.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$6.$array[_ref$6.$offset + _i$5]);
  2�			line = "// +build";
  2�			_ref$7 = or$4;
			_i$6 = 0;
			/* while (true) { */ case 3:
				/* if (!(_i$6 < _ref$7.$length)) { break; } */ if(!(_i$6 < _ref$7.$length)) { $s = 4; continue; }
				and$2 = ((_i$6 < 0 || _i$6 >= _ref$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$7.$array[_ref$7.$offset + _i$6]);
  2�				clause = "";
  2�				_ref$8 = and$2;
				_i$7 = 0;
				/* while (true) { */ case 5:
					/* if (!(_i$7 < _ref$8.$length)) { break; } */ if(!(_i$7 < _ref$8.$length)) { $s = 6; continue; }
					i = _i$7;
					lit$1 = ((_i$7 < 0 || _i$7 >= _ref$8.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$8.$array[_ref$8.$offset + _i$7]);
    					if (i > 0) {
  3"						clause = clause + (",");
    					}
  3:					_r = lit$1.String(); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					clause = clause + (_r);
    					_i$7++;
				$s = 5; continue;
				case 6:
  3Y				line = line + (" " + clause);
    				_i$6++;
			$s = 3; continue;
			case 4:
  3t			lines = $append(lines, line);
    			_i$5++;
		$s = 1; continue;
		case 2:
  3�		$s = -1; return [lines, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PlusBuildLines }; } $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._i$3 = _i$3; $f._i$4 = _i$4; $f._i$5 = _i$5; $f._i$6 = _i$6; $f._i$7 = _i$7; $f._r = _r; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._ref$4 = _ref$4; $f._ref$5 = _ref$5; $f._ref$6 = _ref$6; $f._ref$7 = _ref$7; $f._ref$8 = _ref$8; $f.and$1 = and$1; $f.and$2 = and$2; $f.ands = ands; $f.clause = clause; $f.i = i; $f.line = line; $f.lines = lines; $f.lit = lit; $f.lit$1 = lit$1; $f.lits = lits; $f.lits$1 = lits$1; $f.maxOr = maxOr; $f.or$1 = or$1; $f.or$2 = or$2; $f.or$3 = or$3; $f.or$4 = or$4; $f.split = split; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.PlusBuildLines = PlusBuildLines;
PlusBuildLinesgo/build/constraint.Exprgo/build/constraint.NotExpr"go/build/constraint.PlusBuildLinesgo/build/constraint.TagExpr"go/build/constraint.appendSplitAnd!go/build/constraint.appendSplitOrgo/build/constraint.errComplexgo/build/constraint.ptrType$3go/build/constraint.ptrType$4go/build/constraint.pushNotgo/build/constraint.sliceTypego/build/constraint.sliceType$1go/build/constraint.sliceType$2go/build/constraint.sliceType$3 go/build/constraint.pushNotgo/build/constraintpushNot pushNot�9	pushNot = function(x, not$1) {
		var _ref, _tuple, not$1, ok, x, x$1, x$2, x$3, x$4, x$5, x1, x1$1, y1, y1$1;
  4�		_ref = x;
    		if ($assertType(_ref, ptrType$4, true)[1]) {
    			x$2 = _ref.$val;
  4�			_tuple = $assertType(x$2.X, ptrType$3, true);
			ok = _tuple[1];
    			if (ok && !not$1) {
  5				return x$2;
    			}
  5&			return pushNot(x$2.X, !not$1);
    		} else if ($assertType(_ref, ptrType$3, true)[1]) {
    			x$3 = _ref.$val;
    			if (not$1) {
  5^				return new NotExpr.ptr(x$3);
    			}
  5z			return x$3;
    		} else if ($assertType(_ref, ptrType, true)[1]) {
    			x$4 = _ref.$val;
  5�			x1 = pushNot(x$4.X, not$1);
  5�			y1 = pushNot(x$4.Y, not$1);
    			if (not$1) {
  5�				return or(x1, y1);
    			}
    			if ($interfaceIsEqual(x1, x$4.X) && $interfaceIsEqual(y1, x$4.Y)) {
  6				return x$4;
    			}
  6			return and(x1, y1);
    		} else if ($assertType(_ref, ptrType$1, true)[1]) {
    			x$5 = _ref.$val;
  6?			x1$1 = pushNot(x$5.X, not$1);
  6Y			y1$1 = pushNot(x$5.Y, not$1);
    			if (not$1) {
  6				return and(x1$1, y1$1);
    			}
    			if ($interfaceIsEqual(x1$1, x$5.X) && $interfaceIsEqual(y1$1, x$5.Y)) {
  6�				return x$5;
    			}
  6�			return or(x1$1, y1$1);
    		} else {
    			x$1 = _ref;
  4�			return x$1;
    		}
    	};
pushNotgo/build/constraint.NotExprgo/build/constraint.andgo/build/constraint.orgo/build/constraint.ptrTypego/build/constraint.ptrType$1go/build/constraint.ptrType$3go/build/constraint.ptrType$4go/build/constraint.pushNot "go/build/constraint.appendSplitAndgo/build/constraintappendSplitAnd appendSplitAnd�J	appendSplitAnd = function(list, x) {
		var _tuple, list, ok, x, x$1;
  7�		_tuple = $assertType(x, ptrType, true);
		x$1 = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  7�			list = appendSplitAnd(list, x$1.X);
  7�			list = appendSplitAnd(list, x$1.Y);
  8			return list;
    		}
  8!		return $append(list, x);
    	};
appendSplitAnd"go/build/constraint.appendSplitAndgo/build/constraint.ptrType !go/build/constraint.appendSplitOrgo/build/constraintappendSplitOr appendSplitOr�I	appendSplitOr = function(list, x) {
		var _tuple, list, ok, x, x$1;
  9		_tuple = $assertType(x, ptrType$1, true);
		x$1 = _tuple[0];
		ok = _tuple[1];
    		if (ok) {
  9$			list = appendSplitOr(list, x$1.X);
  9F			list = appendSplitOr(list, x$1.Y);
  9h			return list;
    		}
  9x		return $append(list, x);
    	};
appendSplitOr!go/build/constraint.appendSplitOrgo/build/constraint.ptrType$1 ��{"Base":14738,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/go/build/constraint/expr.go","Base":1,"Size":14736,"Lines":[0,55,109,159,160,243,353,356,483,582,632,726,745,746,755,765,776,787,803,805,806,855,932,954,1008,1063,1080,1081,1140,1209,1262,1299,1300,1375,1441,1451,1453,1454,1502,1524,1577,1579,1580,1610,1611,1667,1685,1687,1688,1724,1738,1740,1741,1792,1793,1856,1878,1886,1888,1889,1919,1920,1976,1998,2000,2001,2037,2056,2077,2102,2122,2125,2141,2143,2144,2189,2190,2238,2260,2271,2273,2274,2304,2305,2361,2422,2443,2464,2483,2485,2486,2522,2565,2567,2568,2597,2614,2645,2665,2668,2678,2680,2681,2708,2731,2733,2734,2781,2802,2813,2815,2816,2845,2846,2901,2962,2983,3004,3023,3025,3026,3061,3102,3104,3105,3133,3150,3182,3202,3205,3215,3217,3218,3244,3266,3268,3269,3339,3365,3429,3468,3470,3471,3510,3524,3526,3527,3587,3588,3691,3744,3784,3825,3850,3853,3896,3935,3938,3968,3970,3971,4051,4132,4167,4196,4207,4209,4210,4311,4414,4470,4541,4590,4618,4621,4656,4675,4678,4679,4724,4743,4746,4747,4779,4812,4813,4895,4979,5031,5103,5136,5179,5198,5201,5202,5221,5223,5224,5285,5310,5336,5373,5374,5407,5419,5464,5466,5467,5519,5569,5585,5617,5655,5667,5678,5683,5734,5738,5743,5744,5771,5783,5801,5872,5875,5890,5892,5893,5936,5994,6059,6092,6106,6127,6148,6151,6161,6163,6164,6208,6266,6331,6365,6379,6400,6422,6425,6435,6437,6438,6468,6526,6591,6625,6634,6653,6663,6683,6757,6761,6784,6787,6804,6806,6807,6859,6909,6974,7009,7042,7061,7076,7093,7126,7208,7243,7249,7262,7267,7273,7287,7307,7371,7375,7385,7396,7399,7400,7415,7434,7509,7513,7584,7587,7601,7610,7627,7629,7630,7692,7738,7786,7870,7944,8006,8035,8052,8115,8123,8126,8148,8161,8175,8184,8187,8206,8227,8241,8249,8274,8283,8284,8300,8351,8439,8443,8457,8468,8493,8502,8505,8506,8524,8549,8624,8641,8650,8654,8657,8673,8718,8792,8795,8796,8809,8826,8850,8866,8874,8876,8877,8958,9039,9076,9107,9118,9120,9121,9223,9325,9383,9454,9503,9531,9534,9569,9588,9591,9592,9629,9648,9651,9676,9738,9770,9771,9812,9831,9834,9863,9864,9942,10022,10070,10141,10174,10217,10236,10239,10240,10259,10261,10262,10353,10397,10409,10456,10469,10520,10534,10550,10601,10623,10635,10672,10688,10714,10720,10745,10763,10776,10799,10805,10818,10834,10840,10845,10862,10872,10884,10902,10907,10911,10927,10936,10947,10963,10967,10970,10985,11005,11008,11018,11020,11021,11082,11136,11200,11236,11253,11268,11271,11297,11372,11388,11392,11395,11408,11410,11411,11485,11486,11589,11704,11752,11853,11930,12015,12038,12039,12103,12125,12170,12190,12237,12256,12306,12330,12359,12389,12402,12430,12436,12441,12470,12474,12504,12507,12508,12570,12634,12674,12686,12714,12737,12756,12760,12763,12780,12798,12827,12860,12864,12893,12896,12897,12927,12947,12975,12997,13024,13040,13069,13084,13103,13109,13136,13141,13165,13169,13199,13202,13203,13222,13224,13225,13298,13346,13428,13466,13490,13500,13517,13528,13544,13587,13599,13603,13631,13647,13658,13683,13687,13698,13714,13740,13766,13777,13798,13802,13832,13844,13848,13869,13884,13910,13936,13947,13969,13973,14003,14015,14019,14039,14042,14044,14045,14133,14198,14248,14280,14315,14350,14364,14367,14391,14393,14394,14481,14545,14594,14625,14659,14693,14707,14710,14734],"Infos":null}]}
 