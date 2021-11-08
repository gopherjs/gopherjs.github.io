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
GoLinkname�� Implementation�� 	Reference��   ��2��*crypto/ed25519/internal/edwards25519/fieldfieldcrypto/subtleencoding/binary	math/bits�i �� l0l1l2l3l4ZerovElementOnereduceAddabSubtractNegateInvertzSetSetBytesxBytesbytesoutEqualuSelectcondSwap
IsNegativeAbsoluteMultiplyySquareMult32Pow22523	SqrtRatiorrr	wasSquarecarryPropagatecarryPropagateGenericfield  
   
   
   

   
    <<<<<<<<<<<<<<<<<<<<<<<<< u<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<T    ?   A  C   E # G   I * K .M 0M  O  2 Q .S 0S  U  ; W .Y  [  B ] I_  a  K c .e  g  O i Xk  m  Z o   q ` s fx  z  j | p~    r � .� 0� y  �  ~ � p� y   � �    � � p�  �  � � X� ��  �  � � X�  �  � � X� �	  �  � � X�  �  � �� p� � �� �  � �   � � �   � � �0 subtle&	subtle = $packages["crypto/subtle"];
��    		$r = subtle.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Element��	Element = $pkg.Element = $newType(0, $kindStruct, "field.Element", true, "crypto/ed25519/internal/edwards25519/field", true, function(l0_, l1_, l2_, l3_, l4_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.l0 = new $Uint64(0, 0);
			this.l1 = new $Uint64(0, 0);
			this.l2 = new $Uint64(0, 0);
			this.l3 = new $Uint64(0, 0);
			this.l4 = new $Uint64(0, 0);
			return;
		}
		this.l0 = l0_;
		this.l1 = l1_;
		this.l2 = l2_;
		this.l3 = l3_;
		this.l4 = l4_;
	});
��	ptrType.methods = [{prop: "Zero", name: "Zero", pkg: "", typ: $funcType([], [ptrType], false)}, {prop: "One", name: "One", pkg: "", typ: $funcType([], [ptrType], false)}, {prop: "reduce", name: "reduce", pkg: "crypto/ed25519/internal/edwards25519/field", typ: $funcType([], [ptrType], false)}, {prop: "Add", name: "Add", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType], false)}, {prop: "Subtract", name: "Subtract", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType], false)}, {prop: "Negate", name: "Negate", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Invert", name: "Invert", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "SetBytes", name: "SetBytes", pkg: "", typ: $funcType([sliceType], [ptrType], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "bytes", name: "bytes", pkg: "crypto/ed25519/internal/edwards25519/field", typ: $funcType([ptrType$1], [sliceType], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([ptrType], [$Int], false)}, {prop: "Select", name: "Select", pkg: "", typ: $funcType([ptrType, ptrType, $Int], [ptrType], false)}, {prop: "Swap", name: "Swap", pkg: "", typ: $funcType([ptrType, $Int], [], false)}, {prop: "IsNegative", name: "IsNegative", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Absolute", name: "Absolute", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Multiply", name: "Multiply", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType], false)}, {prop: "Square", name: "Square", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Mult32", name: "Mult32", pkg: "", typ: $funcType([ptrType, $Uint32], [ptrType], false)}, {prop: "Pow22523", name: "Pow22523", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "SqrtRatio", name: "SqrtRatio", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType, $Int], false)}, {prop: "carryPropagate", name: "carryPropagate", pkg: "crypto/ed25519/internal/edwards25519/field", typ: $funcType([], [ptrType], false)}, {prop: "carryPropagateGeneric", name: "carryPropagateGeneric", pkg: "crypto/ed25519/internal/edwards25519/field", typ: $funcType([], [ptrType], false)}];
��	Element.init("crypto/ed25519/internal/edwards25519/field", [{prop: "l0", name: "l0", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "l1", name: "l1", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "l2", name: "l2", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "l3", name: "l3", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "l4", name: "l4", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
Element2crypto/ed25519/internal/edwards25519/field.Element4crypto/ed25519/internal/edwards25519/field.arrayType2crypto/ed25519/internal/edwards25519/field.ptrType4crypto/ed25519/internal/edwards25519/field.ptrType$14crypto/ed25519/internal/edwards25519/field.sliceType  uint128�>	uint128 = $pkg.uint128 = $newType(0, $kindStruct, "field.uint128", true, "crypto/ed25519/internal/edwards25519/field", false, function(lo_, hi_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.lo = new $Uint64(0, 0);
			this.hi = new $Uint64(0, 0);
			return;
		}
		this.lo = lo_;
		this.hi = hi_;
	});
��	uint128.init("crypto/ed25519/internal/edwards25519/field", [{prop: "lo", name: "lo", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint64, tag: ""}]);
uint1282crypto/ed25519/internal/edwards25519/field.uint128  	arrayType%	arrayType = $arrayType($Uint8, 32);
	arrayType  arrayType$1&	arrayType$1 = $arrayType($Uint8, 8);
arrayType$1  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  ptrType	ptrType = $ptrType(Element);
ptrType2crypto/ed25519/internal/edwards25519/field.Element  	ptrType$1"	ptrType$1 = $ptrType(arrayType);
	ptrType$14crypto/ed25519/internal/edwards25519/field.arrayType  feZerofeZero  feOnefeOne  sqrtM1sqrtM1  ��  �		feZero = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
feZero2crypto/ed25519/internal/edwards25519/field.Element1crypto/ed25519/internal/edwards25519/field.feZero    C		feOne = new Element.ptr(new $Uint64(0, 1), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
feOne2crypto/ed25519/internal/edwards25519/field.Element0crypto/ed25519/internal/edwards25519/field.feOne  ��  )�		sqrtM1 = new Element.ptr(new $Uint64(400167, 1242472624), new $Uint64(54693, 4237236381), new $Uint64(520030, 2629635168), new $Uint64(492949, 2793426078), new $Uint64(178226, 1208286237));
sqrtM12crypto/ed25519/internal/edwards25519/field.Element1crypto/ed25519/internal/edwards25519/field.sqrtM1 :(*crypto/ed25519/internal/edwards25519/field.Element).Zero ��	Element.ptr.prototype.Zero = function() {
		var v;
		v = this;
  %		Element.copy(v, feZero);
  3		return v;
    	};
	Element.prototype.Zero = function() { return this.$val.Zero(); };
Element2crypto/ed25519/internal/edwards25519/field.Element1crypto/ed25519/internal/edwards25519/field.feZero 9(*crypto/ed25519/internal/edwards25519/field.Element).One ��	Element.ptr.prototype.One = function() {
		var v;
		v = this;
  �		Element.copy(v, feOne);
  �		return v;
    	};
	Element.prototype.One = function() { return this.$val.One(); };
Element2crypto/ed25519/internal/edwards25519/field.Element0crypto/ed25519/internal/edwards25519/field.feOne <(*crypto/ed25519/internal/edwards25519/field.Element).reduce �d	Element.ptr.prototype.reduce = function() {
		var c, v, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
   		v.carryPropagate();
  R		c = $shiftRightUint64(((x = v.l0, new $Uint64(x.$high + 0, x.$low + 19))), 51);
  j		c = $shiftRightUint64(((x$1 = v.l1, new $Uint64(x$1.$high + c.$high, x$1.$low + c.$low))), 51);
  �		c = $shiftRightUint64(((x$2 = v.l2, new $Uint64(x$2.$high + c.$high, x$2.$low + c.$low))), 51);
  �		c = $shiftRightUint64(((x$3 = v.l3, new $Uint64(x$3.$high + c.$high, x$3.$low + c.$low))), 51);
  �		c = $shiftRightUint64(((x$4 = v.l4, new $Uint64(x$4.$high + c.$high, x$4.$low + c.$low))), 51);
  H		v.l0 = (x$5 = v.l0, x$6 = $mul64(new $Uint64(0, 19), c), new $Uint64(x$5.$high + x$6.$high, x$5.$low + x$6.$low));
  Y		v.l1 = (x$7 = v.l1, x$8 = $shiftRightUint64(v.l0, 51), new $Uint64(x$7.$high + x$8.$high, x$7.$low + x$8.$low));
  m		v.l0 = (x$9 = v.l0, new $Uint64(x$9.$high & 524287, (x$9.$low & 4294967295) >>> 0));
  �		v.l2 = (x$10 = v.l2, x$11 = $shiftRightUint64(v.l1, 51), new $Uint64(x$10.$high + x$11.$high, x$10.$low + x$11.$low));
  �		v.l1 = (x$12 = v.l1, new $Uint64(x$12.$high & 524287, (x$12.$low & 4294967295) >>> 0));
  �		v.l3 = (x$13 = v.l3, x$14 = $shiftRightUint64(v.l2, 51), new $Uint64(x$13.$high + x$14.$high, x$13.$low + x$14.$low));
  �		v.l2 = (x$15 = v.l2, new $Uint64(x$15.$high & 524287, (x$15.$low & 4294967295) >>> 0));
  �		v.l4 = (x$16 = v.l4, x$17 = $shiftRightUint64(v.l3, 51), new $Uint64(x$16.$high + x$17.$high, x$16.$low + x$17.$low));
   		v.l3 = (x$18 = v.l3, new $Uint64(x$18.$high & 524287, (x$18.$low & 4294967295) >>> 0));
  5		v.l4 = (x$19 = v.l4, new $Uint64(x$19.$high & 524287, (x$19.$low & 4294967295) >>> 0));
  S		return v;
    	};
	Element.prototype.reduce = function() { return this.$val.reduce(); };
Elementreduce~2crypto/ed25519/internal/edwards25519/field.Element:crypto/ed25519/internal/edwards25519/field.carryPropagate~ 9(*crypto/ed25519/internal/edwards25519/field.Element).Add ��	Element.ptr.prototype.Add = function(a, b) {
		var a, b, v, x, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
  �		v.l0 = (x = a.l0, x$1 = b.l0, new $Uint64(x.$high + x$1.$high, x.$low + x$1.$low));
  �		v.l1 = (x$2 = a.l1, x$3 = b.l1, new $Uint64(x$2.$high + x$3.$high, x$2.$low + x$3.$low));
  �		v.l2 = (x$4 = a.l2, x$5 = b.l2, new $Uint64(x$4.$high + x$5.$high, x$4.$low + x$5.$low));
  �		v.l3 = (x$6 = a.l3, x$7 = b.l3, new $Uint64(x$6.$high + x$7.$high, x$6.$low + x$7.$low));
  			v.l4 = (x$8 = a.l4, x$9 = b.l4, new $Uint64(x$8.$high + x$9.$high, x$8.$low + x$9.$low));
  
		return v.carryPropagateGeneric();
    	};
	Element.prototype.Add = function(a, b) { return this.$val.Add(a, b); };
Element2crypto/ed25519/internal/edwards25519/field.ElementAcrypto/ed25519/internal/edwards25519/field.carryPropagateGeneric~ >(*crypto/ed25519/internal/edwards25519/field.Element).Subtract �M	Element.ptr.prototype.Subtract = function(a, b) {
		var a, b, v, x, x$1, x$10, x$11, x$12, x$13, x$14, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
  		v.l0 = (x = (x$1 = a.l0, new $Uint64(x$1.$high + 1048575, x$1.$low + 4294967258)), x$2 = b.l0, new $Uint64(x.$high - x$2.$high, x.$low - x$2.$low));
  :		v.l1 = (x$3 = (x$4 = a.l1, new $Uint64(x$4.$high + 1048575, x$4.$low + 4294967294)), x$5 = b.l1, new $Uint64(x$3.$high - x$5.$high, x$3.$low - x$5.$low));
  b		v.l2 = (x$6 = (x$7 = a.l2, new $Uint64(x$7.$high + 1048575, x$7.$low + 4294967294)), x$8 = b.l2, new $Uint64(x$6.$high - x$8.$high, x$6.$low - x$8.$low));
  �		v.l3 = (x$9 = (x$10 = a.l3, new $Uint64(x$10.$high + 1048575, x$10.$low + 4294967294)), x$11 = b.l3, new $Uint64(x$9.$high - x$11.$high, x$9.$low - x$11.$low));
  �		v.l4 = (x$12 = (x$13 = a.l4, new $Uint64(x$13.$high + 1048575, x$13.$low + 4294967294)), x$14 = b.l4, new $Uint64(x$12.$high - x$14.$high, x$12.$low - x$14.$low));
  �		return v.carryPropagate();
    	};
	Element.prototype.Subtract = function(a, b) { return this.$val.Subtract(a, b); };
Element2crypto/ed25519/internal/edwards25519/field.Element:crypto/ed25519/internal/edwards25519/field.carryPropagate~ <(*crypto/ed25519/internal/edwards25519/field.Element).Negate ��	Element.ptr.prototype.Negate = function(a) {
		var a, v;
		v = this;
  N		return v.Subtract(feZero, a);
    	};
	Element.prototype.Negate = function(a) { return this.$val.Negate(a); };
Element2crypto/ed25519/internal/edwards25519/field.Element1crypto/ed25519/internal/edwards25519/field.feZero <(*crypto/ed25519/internal/edwards25519/field.Element).Invert ��	Element.ptr.prototype.Invert = function(z) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, i, i$1, i$2, i$3, i$4, i$5, i$6, t, v, z, z11, z2, z2_100_0, z2_10_0, z2_20_0, z2_50_0, z2_5_0, z9;
		v = this;
  �		_tmp = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$4 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$5 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$6 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$7 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$8 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		z2 = $clone(_tmp, Element);
		z9 = $clone(_tmp$1, Element);
		z11 = $clone(_tmp$2, Element);
		z2_5_0 = $clone(_tmp$3, Element);
		z2_10_0 = $clone(_tmp$4, Element);
		z2_20_0 = $clone(_tmp$5, Element);
		z2_50_0 = $clone(_tmp$6, Element);
		z2_100_0 = $clone(_tmp$7, Element);
		t = $clone(_tmp$8, Element);
  �		z2.Square(z);
  �		t.Square(z2);
  		t.Square(t);
  7		z9.Multiply(t, z);
  V		z11.Multiply(z9, z2);
  v		t.Square(z11);
  �		z2_5_0.Multiply(t, z9);
  �		t.Square(z2_5_0);
  �		i = 0;
		while (true) {
			if (!(i < 4)) { break; }
  �			t.Square(t);
  �			i = i + (1) >> 0;
    		}
  		z2_10_0.Multiply(t, z2_5_0);
  K		t.Square(z2_10_0);
  q		i$1 = 0;
		while (true) {
			if (!(i$1 < 9)) { break; }
  �			t.Square(t);
  �			i$1 = i$1 + (1) >> 0;
    		}
  �		z2_20_0.Multiply(t, z2_10_0);
  �		t.Square(z2_20_0);
  �		i$2 = 0;
		while (true) {
			if (!(i$2 < 19)) { break; }
  			t.Square(t);
  			i$2 = i$2 + (1) >> 0;
    		}
  5		t.Multiply(t, z2_20_0);
  ^		t.Square(t);
  ~		i$3 = 0;
		while (true) {
			if (!(i$3 < 9)) { break; }
  �			t.Square(t);
  �			i$3 = i$3 + (1) >> 0;
    		}
  �		z2_50_0.Multiply(t, z2_10_0);
  �		t.Square(z2_50_0);
  
		i$4 = 0;
		while (true) {
			if (!(i$4 < 49)) { break; }
  "			t.Square(t);
  			i$4 = i$4 + (1) >> 0;
    		}
  C		z2_100_0.Multiply(t, z2_50_0);
  t		t.Square(z2_100_0);
  �		i$5 = 0;
		while (true) {
			if (!(i$5 < 99)) { break; }
  �			t.Square(t);
  �			i$5 = i$5 + (1) >> 0;
    		}
  �		t.Multiply(t, z2_100_0);
  		t.Square(t);
  "		i$6 = 0;
		while (true) {
			if (!(i$6 < 49)) { break; }
  :			t.Square(t);
  2			i$6 = i$6 + (1) >> 0;
    		}
  [		t.Multiply(t, z2_50_0);
  �		t.Square(t);
  �		t.Square(t);
  �		t.Square(t);
  �		t.Square(t);
  �		t.Square(t);
  		return v.Multiply(t, z11);
    	};
	Element.prototype.Invert = function(z) { return this.$val.Invert(z); };
Element2crypto/ed25519/internal/edwards25519/field.Element 9(*crypto/ed25519/internal/edwards25519/field.Element).Set ��	Element.ptr.prototype.Set = function(a) {
		var a, v;
		v = this;
  �		Element.copy(v, a);
  �		return v;
    	};
	Element.prototype.Set = function(a) { return this.$val.Set(a); };
Element2crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519/field.Element).SetBytes �	Element.ptr.prototype.SetBytes = function(x) {
		var v, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
    		if (!((x.$length === 32))) {
  			$panic(new $String("edwards25519: invalid field element input size"));
    		}
  �		v.l0 = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(x, 0, 8));
  �		v.l0 = (x$1 = v.l0, x$2 = new $Uint64(524287, 4294967295), new $Uint64(x$1.$high & x$2.$high, (x$1.$low & x$2.$low) >>> 0));
  		v.l1 = $shiftRightUint64($clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(x, 6, 14)), 3);
  =		v.l1 = (x$3 = v.l1, x$4 = new $Uint64(524287, 4294967295), new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0));
  �		v.l2 = $shiftRightUint64($clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(x, 12, 20)), 6);
  �		v.l2 = (x$5 = v.l2, x$6 = new $Uint64(524287, 4294967295), new $Uint64(x$5.$high & x$6.$high, (x$5.$low & x$6.$low) >>> 0));
  		v.l3 = $shiftRightUint64($clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(x, 19, 27)), 1);
  N		v.l3 = (x$7 = v.l3, x$8 = new $Uint64(524287, 4294967295), new $Uint64(x$7.$high & x$8.$high, (x$7.$low & x$8.$low) >>> 0));
  �		v.l4 = $shiftRightUint64($clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(x, 24, 32)), 12);
  		v.l4 = (x$9 = v.l4, x$10 = new $Uint64(524287, 4294967295), new $Uint64(x$9.$high & x$10.$high, (x$9.$low & x$10.$low) >>> 0));
  (		return v;
    	};
	Element.prototype.SetBytes = function(x) { return this.$val.SetBytes(x); };
Element2crypto/ed25519/internal/edwards25519/field.Elementencoding/binary.LittleEndianencoding/binary.littleEndian ;(*crypto/ed25519/internal/edwards25519/field.Element).Bytes ��	Element.ptr.prototype.Bytes = function() {
		var out, v;
		v = this;
  		out = arrayType.zero();
  		return v.bytes(out);
    	};
	Element.prototype.Bytes = function() { return this.$val.Bytes(); };
Element2crypto/ed25519/internal/edwards25519/field.Element4crypto/ed25519/internal/edwards25519/field.arrayType1crypto/ed25519/internal/edwards25519/field.bytes~ ;(*crypto/ed25519/internal/edwards25519/field.Element).bytes �	Element.ptr.prototype.bytes = function(out) {
		var _i, _i$1, _q, _r, _ref, _ref$1, bb, bitsOffset, buf, i, i$1, l, off, out, t, v, x, x$1;
		v = this;
  f		t = $clone(v, Element);
  o		t.reduce();
  �		buf = arrayType$1.zero();
  �		_ref = $toNativeArray($kindUint64, [t.l0, t.l1, t.l2, t.l3, t.l4]);
		_i = 0;
		while (true) {
			if (!(_i < 5)) { break; }
			i = _i;
			l = ((_i < 0 || _i >= _ref.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref[_i]);
  �			bitsOffset = $imul(i, 51);
  �			$clone(binary.LittleEndian, binary.littleEndian).PutUint64(new sliceType(buf), $shiftLeft64(l, (((_r = bitsOffset % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) >>> 0))));
  !			_ref$1 = buf;
			_i$1 = 0;
			while (true) {
				if (!(_i$1 < 8)) { break; }
				i$1 = _i$1;
				bb = ((_i$1 < 0 || _i$1 >= _ref$1.length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$1[_i$1]);
  =				off = (_q = bitsOffset / 8, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) + i$1 >> 0;
    				if (off >= 32) {
  q					break;
    				}
  				(x$1 = out, ((off < 0 || off >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[off] = (((x = out, ((off < 0 || off >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[off])) | (bb)) >>> 0)));
    				_i$1++;
			}
    			_i++;
		}
  �		return new sliceType(out);
    	};
	Element.prototype.bytes = function(out) { return this.$val.bytes(out); };
Elementbytes~2crypto/ed25519/internal/edwards25519/field.Element6crypto/ed25519/internal/edwards25519/field.arrayType$12crypto/ed25519/internal/edwards25519/field.reduce~4crypto/ed25519/internal/edwards25519/field.sliceTypeencoding/binary.LittleEndianencoding/binary.littleEndian ;(*crypto/ed25519/internal/edwards25519/field.Element).Equal �(	Element.ptr.prototype.Equal = function(u) {
		var _tmp, _tmp$1, sa, sv, u, v;
		v = this;
  		_tmp = u.Bytes();
		_tmp$1 = v.Bytes();
		sa = _tmp;
		sv = _tmp$1;
  -		return subtle.ConstantTimeCompare(sa, sv);
    	};
	Element.prototype.Equal = function(u) { return this.$val.Equal(u); };
Element2crypto/ed25519/internal/edwards25519/field.Element!crypto/subtle.ConstantTimeCompare 5crypto/ed25519/internal/edwards25519/field.mask64Bits*crypto/ed25519/internal/edwards25519/field
mask64Bits 
mask64Bits��	mask64Bits = function(cond) {
		var cond, x, x$1;
  �		return (x = (x$1 = (new $Uint64(0, cond)), new $Uint64(x$1.$high - 0, x$1.$low - 1)), new $Uint64(~x.$high, ~x.$low >>> 0));
    	};

mask64Bits5crypto/ed25519/internal/edwards25519/field.mask64Bits <(*crypto/ed25519/internal/edwards25519/field.Element).Select �M	Element.ptr.prototype.Select = function(a, b, cond) {
		var a, b, cond, m, v, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
  T		m = mask64Bits(cond);
  k		v.l0 = (x = (x$1 = a.l0, new $Uint64(m.$high & x$1.$high, (m.$low & x$1.$low) >>> 0)), x$2 = (x$3 = new $Uint64(~m.$high, ~m.$low >>> 0), x$4 = b.l0, new $Uint64(x$3.$high & x$4.$high, (x$3.$low & x$4.$low) >>> 0)), new $Uint64(x.$high | x$2.$high, (x.$low | x$2.$low) >>> 0));
  �		v.l1 = (x$5 = (x$6 = a.l1, new $Uint64(m.$high & x$6.$high, (m.$low & x$6.$low) >>> 0)), x$7 = (x$8 = new $Uint64(~m.$high, ~m.$low >>> 0), x$9 = b.l1, new $Uint64(x$8.$high & x$9.$high, (x$8.$low & x$9.$low) >>> 0)), new $Uint64(x$5.$high | x$7.$high, (x$5.$low | x$7.$low) >>> 0));
  �		v.l2 = (x$10 = (x$11 = a.l2, new $Uint64(m.$high & x$11.$high, (m.$low & x$11.$low) >>> 0)), x$12 = (x$13 = new $Uint64(~m.$high, ~m.$low >>> 0), x$14 = b.l2, new $Uint64(x$13.$high & x$14.$high, (x$13.$low & x$14.$low) >>> 0)), new $Uint64(x$10.$high | x$12.$high, (x$10.$low | x$12.$low) >>> 0));
  �		v.l3 = (x$15 = (x$16 = a.l3, new $Uint64(m.$high & x$16.$high, (m.$low & x$16.$low) >>> 0)), x$17 = (x$18 = new $Uint64(~m.$high, ~m.$low >>> 0), x$19 = b.l3, new $Uint64(x$18.$high & x$19.$high, (x$18.$low & x$19.$low) >>> 0)), new $Uint64(x$15.$high | x$17.$high, (x$15.$low | x$17.$low) >>> 0));
  �		v.l4 = (x$20 = (x$21 = a.l4, new $Uint64(m.$high & x$21.$high, (m.$low & x$21.$low) >>> 0)), x$22 = (x$23 = new $Uint64(~m.$high, ~m.$low >>> 0), x$24 = b.l4, new $Uint64(x$23.$high & x$24.$high, (x$23.$low & x$24.$low) >>> 0)), new $Uint64(x$20.$high | x$22.$high, (x$20.$low | x$22.$low) >>> 0));
  		return v;
    	};
	Element.prototype.Select = function(a, b, cond) { return this.$val.Select(a, b, cond); };
Element2crypto/ed25519/internal/edwards25519/field.Element5crypto/ed25519/internal/edwards25519/field.mask64Bits :(*crypto/ed25519/internal/edwards25519/field.Element).Swap �	+	Element.ptr.prototype.Swap = function(u, cond) {
		var cond, m, t, u, v, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
  �		m = mask64Bits(cond);
  �		t = (x = (x$1 = v.l0, x$2 = u.l0, new $Uint64(x$1.$high ^ x$2.$high, (x$1.$low ^ x$2.$low) >>> 0)), new $Uint64(m.$high & x.$high, (m.$low & x.$low) >>> 0));
  �		v.l0 = (x$3 = v.l0, x$4 = t, new $Uint64(x$3.$high ^ x$4.$high, (x$3.$low ^ x$4.$low) >>> 0));
  �		u.l0 = (x$5 = u.l0, x$6 = t, new $Uint64(x$5.$high ^ x$6.$high, (x$5.$low ^ x$6.$low) >>> 0));
  �		t = (x$7 = (x$8 = v.l1, x$9 = u.l1, new $Uint64(x$8.$high ^ x$9.$high, (x$8.$low ^ x$9.$low) >>> 0)), new $Uint64(m.$high & x$7.$high, (m.$low & x$7.$low) >>> 0));
  		v.l1 = (x$10 = v.l1, x$11 = t, new $Uint64(x$10.$high ^ x$11.$high, (x$10.$low ^ x$11.$low) >>> 0));
  		u.l1 = (x$12 = u.l1, x$13 = t, new $Uint64(x$12.$high ^ x$13.$high, (x$12.$low ^ x$13.$low) >>> 0));
  		t = (x$14 = (x$15 = v.l2, x$16 = u.l2, new $Uint64(x$15.$high ^ x$16.$high, (x$15.$low ^ x$16.$low) >>> 0)), new $Uint64(m.$high & x$14.$high, (m.$low & x$14.$low) >>> 0));
  .		v.l2 = (x$17 = v.l2, x$18 = t, new $Uint64(x$17.$high ^ x$18.$high, (x$17.$low ^ x$18.$low) >>> 0));
  9		u.l2 = (x$19 = u.l2, x$20 = t, new $Uint64(x$19.$high ^ x$20.$high, (x$19.$low ^ x$20.$low) >>> 0));
  D		t = (x$21 = (x$22 = v.l3, x$23 = u.l3, new $Uint64(x$22.$high ^ x$23.$high, (x$22.$low ^ x$23.$low) >>> 0)), new $Uint64(m.$high & x$21.$high, (m.$low & x$21.$low) >>> 0));
  [		v.l3 = (x$24 = v.l3, x$25 = t, new $Uint64(x$24.$high ^ x$25.$high, (x$24.$low ^ x$25.$low) >>> 0));
  f		u.l3 = (x$26 = u.l3, x$27 = t, new $Uint64(x$26.$high ^ x$27.$high, (x$26.$low ^ x$27.$low) >>> 0));
  q		t = (x$28 = (x$29 = v.l4, x$30 = u.l4, new $Uint64(x$29.$high ^ x$30.$high, (x$29.$low ^ x$30.$low) >>> 0)), new $Uint64(m.$high & x$28.$high, (m.$low & x$28.$low) >>> 0));
  �		v.l4 = (x$31 = v.l4, x$32 = t, new $Uint64(x$31.$high ^ x$32.$high, (x$31.$low ^ x$32.$low) >>> 0));
  �		u.l4 = (x$33 = u.l4, x$34 = t, new $Uint64(x$33.$high ^ x$34.$high, (x$33.$low ^ x$34.$low) >>> 0));
    	};
	Element.prototype.Swap = function(u, cond) { return this.$val.Swap(u, cond); };
Element2crypto/ed25519/internal/edwards25519/field.Element5crypto/ed25519/internal/edwards25519/field.mask64Bits @(*crypto/ed25519/internal/edwards25519/field.Element).IsNegative �;	Element.ptr.prototype.IsNegative = function() {
		var v, x;
		v = this;
  		return (((((x = v.Bytes(), (0 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 0])) & 1) >>> 0) >> 0));
    	};
	Element.prototype.IsNegative = function() { return this.$val.IsNegative(); };
Element2crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519/field.Element).Absolute �C	Element.ptr.prototype.Absolute = function(u) {
		var u, v;
		v = this;
  ~		return v.Select(new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Negate(u), u, u.IsNegative());
    	};
	Element.prototype.Absolute = function(u) { return this.$val.Absolute(u); };
Element2crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519/field.Element).Multiply ��	Element.ptr.prototype.Multiply = function(x, y) {
		var v, x, y;
		v = this;
   		feMul(v, x, y);
   -		return v;
    	};
	Element.prototype.Multiply = function(x, y) { return this.$val.Multiply(x, y); };
Element2crypto/ed25519/internal/edwards25519/field.Element0crypto/ed25519/internal/edwards25519/field.feMul <(*crypto/ed25519/internal/edwards25519/field.Element).Square ��	Element.ptr.prototype.Square = function(x) {
		var v, x;
		v = this;
   �		feSquare(v, x);
   �		return v;
    	};
	Element.prototype.Square = function(x) { return this.$val.Square(x); };
Element2crypto/ed25519/internal/edwards25519/field.Element3crypto/ed25519/internal/edwards25519/field.feSquare <(*crypto/ed25519/internal/edwards25519/field.Element).Mult32 �E	Element.ptr.prototype.Mult32 = function(x, y) {
		var _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, v, x, x$1, x0hi, x0lo, x1hi, x1lo, x2hi, x2lo, x3hi, x3lo, x4hi, x4lo, y;
		v = this;
  !		_tuple = mul51(x.l0, y);
		x0lo = _tuple[0];
		x0hi = _tuple[1];
  !1		_tuple$1 = mul51(x.l1, y);
		x1lo = _tuple$1[0];
		x1hi = _tuple$1[1];
  !O		_tuple$2 = mul51(x.l2, y);
		x2lo = _tuple$2[0];
		x2hi = _tuple$2[1];
  !m		_tuple$3 = mul51(x.l3, y);
		x3lo = _tuple$3[0];
		x3hi = _tuple$3[1];
  !�		_tuple$4 = mul51(x.l4, y);
		x4lo = _tuple$4[0];
		x4hi = _tuple$4[1];
  !�		v.l0 = (x$1 = $mul64(new $Uint64(0, 19), x4hi), new $Uint64(x0lo.$high + x$1.$high, x0lo.$low + x$1.$low));
  !�		v.l1 = new $Uint64(x1lo.$high + x0hi.$high, x1lo.$low + x0hi.$low);
  !�		v.l2 = new $Uint64(x2lo.$high + x1hi.$high, x2lo.$low + x1hi.$low);
  "		v.l3 = new $Uint64(x3lo.$high + x2hi.$high, x3lo.$low + x2hi.$low);
  "'		v.l4 = new $Uint64(x4lo.$high + x3hi.$high, x4lo.$low + x3hi.$low);
  "�		return v;
    	};
	Element.prototype.Mult32 = function(x, y) { return this.$val.Mult32(x, y); };
Element2crypto/ed25519/internal/edwards25519/field.Element0crypto/ed25519/internal/edwards25519/field.mul51 0crypto/ed25519/internal/edwards25519/field.mul51*crypto/ed25519/internal/edwards25519/fieldmul51 mul51��	mul51 = function(a, b) {
		var _tuple, a, b, hi, lo, mh, ml, x, x$1;
		lo = new $Uint64(0, 0);
		hi = new $Uint64(0, 0);
  #!		_tuple = bits.Mul64(a, (new $Uint64(0, b)));
		mh = _tuple[0];
		ml = _tuple[1];
  #E		lo = new $Uint64(ml.$high & 524287, (ml.$low & 4294967295) >>> 0);
  #^		hi = (x = $shiftLeft64(mh, 13), x$1 = $shiftRightUint64(ml, 51), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
  #|		return [lo, hi];
    	};
mul510crypto/ed25519/internal/edwards25519/field.mul51math/bits.Mul64 >(*crypto/ed25519/internal/edwards25519/field.Element).Pow22523 �r	Element.ptr.prototype.Pow22523 = function(x) {
		var _tmp, _tmp$1, _tmp$2, i, i$1, i$2, i$3, i$4, i$5, i$6, t0, t1, t2, v, x;
		v = this;
  $		_tmp = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		t0 = $clone(_tmp, Element);
		t1 = $clone(_tmp$1, Element);
		t2 = $clone(_tmp$2, Element);
  $		t0.Square(x);
  $7		t1.Square(t0);
  $X		t1.Square(t1);
  $y		t1.Multiply(x, t1);
  $�		t0.Multiply(t0, t1);
  $�		t0.Square(t0);
  $�		t0.Multiply(t1, t0);
  % 		t1.Square(t0);
  %&		i = 1;
		while (true) {
			if (!(i < 5)) { break; }
  %F			t1.Square(t1);
  %5			i = i + (1) >> 0;
    		}
  %Y		t0.Multiply(t1, t0);
  %�		t1.Square(t0);
  %�		i$1 = 1;
		while (true) {
			if (!(i$1 < 10)) { break; }
  %�			t1.Square(t1);
  %�			i$1 = i$1 + (1) >> 0;
    		}
  %�		t1.Multiply(t1, t0);
  &		t2.Square(t1);
  &H		i$2 = 1;
		while (true) {
			if (!(i$2 < 20)) { break; }
  &o			t2.Square(t2);
  &X			i$2 = i$2 + (1) >> 0;
    		}
  &�		t1.Multiply(t2, t1);
  &�		t1.Square(t1);
  &�		i$3 = 1;
		while (true) {
			if (!(i$3 < 10)) { break; }
  &�			t1.Square(t1);
  &�			i$3 = i$3 + (1) >> 0;
    		}
  '		t0.Multiply(t1, t0);
  '5		t1.Square(t0);
  '`		i$4 = 1;
		while (true) {
			if (!(i$4 < 50)) { break; }
  '�			t1.Square(t1);
  'p			i$4 = i$4 + (1) >> 0;
    		}
  '�		t1.Multiply(t1, t0);
  '�		t2.Square(t1);
  '�		i$5 = 1;
		while (true) {
			if (!(i$5 < 100)) { break; }
  (			t2.Square(t2);
  (			i$5 = i$5 + (1) >> 0;
    		}
  (.		t1.Multiply(t2, t1);
  (V		t1.Square(t1);
  (�		i$6 = 1;
		while (true) {
			if (!(i$6 < 50)) { break; }
  (�			t1.Square(t1);
  (�			i$6 = i$6 + (1) >> 0;
    		}
  (�		t0.Multiply(t1, t0);
  (�		t0.Square(t0);
  )		t0.Square(t0);
  )5		return v.Multiply(t0, x);
    	};
	Element.prototype.Pow22523 = function(x) { return this.$val.Pow22523(x); };
Element2crypto/ed25519/internal/edwards25519/field.Element ?(*crypto/ed25519/internal/edwards25519/field.Element).SqrtRatio �
	Element.ptr.prototype.SqrtRatio = function(u, v) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, check, correctSignSqrt, flippedSignSqrt, flippedSignSqrtI, r, rPrime, rr, u, uNeg, uv3, uv7, v, v2, wasSquare;
		rr = ptrType.nil;
		wasSquare = 0;
		r = this;
  +�		_tmp = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		a = $clone(_tmp, Element);
		b = $clone(_tmp$1, Element);
  +�		v2 = a.Square(v);
  +�		uv3 = b.Multiply(u, b.Multiply(v2, v));
  +�		uv7 = a.Multiply(uv3, a.Square(v2));
  ,		r.Multiply(uv3, r.Pow22523(uv7));
  ,<		check = a.Multiply(v, a.Square(r));
  ,u		uNeg = b.Negate(u);
  ,�		correctSignSqrt = check.Equal(u);
  ,�		flippedSignSqrt = check.Equal(uNeg);
  ,�		flippedSignSqrtI = check.Equal(uNeg.Multiply(uNeg, sqrtM1));
  -		rPrime = b.Multiply(r, sqrtM1);
  -�		r.Select(rPrime, r, flippedSignSqrt | flippedSignSqrtI);
  -�		r.Absolute(r);
    		_tmp$2 = r;
		_tmp$3 = correctSignSqrt | flippedSignSqrt;
		rr = _tmp$2;
		wasSquare = _tmp$3;
		return [rr, wasSquare];
    	};
	Element.prototype.SqrtRatio = function(u, v) { return this.$val.SqrtRatio(u, v); };
Element2crypto/ed25519/internal/edwards25519/field.Element2crypto/ed25519/internal/edwards25519/field.ptrType1crypto/ed25519/internal/edwards25519/field.sqrtM1 0crypto/ed25519/internal/edwards25519/field.feMul*crypto/ed25519/internal/edwards25519/fieldfeMul feMulS	feMul = function(v, x, y) {
		var v, x, y;
  /H		feMulGeneric(v, x, y);
    	};
feMul0crypto/ed25519/internal/edwards25519/field.feMul7crypto/ed25519/internal/edwards25519/field.feMulGeneric 3crypto/ed25519/internal/edwards25519/field.feSquare*crypto/ed25519/internal/edwards25519/fieldfeSquare feSquareP	feSquare = function(v, x) {
		var v, x;
  /�		feSquareGeneric(v, x);
    	};
feSquare3crypto/ed25519/internal/edwards25519/field.feSquare:crypto/ed25519/internal/edwards25519/field.feSquareGeneric D(*crypto/ed25519/internal/edwards25519/field.Element).carryPropagate ��	Element.ptr.prototype.carryPropagate = function() {
		var v;
		v = this;
  0�		return v.carryPropagateGeneric();
    	};
	Element.prototype.carryPropagate = function() { return this.$val.carryPropagate(); };
ElementcarryPropagate~2crypto/ed25519/internal/edwards25519/field.ElementAcrypto/ed25519/internal/edwards25519/field.carryPropagateGeneric~ 0crypto/ed25519/internal/edwards25519/field.mul64*crypto/ed25519/internal/edwards25519/fieldmul64 mul64��	mul64 = function(a, b) {
		var _tuple, a, b, hi, lo;
  2z		_tuple = bits.Mul64(a, b);
		hi = _tuple[0];
		lo = _tuple[1];
  2�		return new uint128.ptr(lo, hi);
    	};
mul640crypto/ed25519/internal/edwards25519/field.mul642crypto/ed25519/internal/edwards25519/field.uint128math/bits.Mul64 3crypto/ed25519/internal/edwards25519/field.addMul64*crypto/ed25519/internal/edwards25519/fieldaddMul64 addMul64�m	addMul64 = function(v, a, b) {
		var _tuple, _tuple$1, _tuple$2, a, b, c, hi, lo, v;
  3 		_tuple = bits.Mul64(a, b);
		hi = _tuple[0];
		lo = _tuple[1];
  3		_tuple$1 = bits.Add64(lo, v.lo, new $Uint64(0, 0));
		lo = _tuple$1[0];
		c = _tuple$1[1];
  3>		_tuple$2 = bits.Add64(hi, v.hi, c);
		hi = _tuple$2[0];
  3_		return new uint128.ptr(lo, hi);
    	};
addMul643crypto/ed25519/internal/edwards25519/field.addMul642crypto/ed25519/internal/edwards25519/field.uint128math/bits.Add64math/bits.Mul64 9crypto/ed25519/internal/edwards25519/field.shiftRightBy51*crypto/ed25519/internal/edwards25519/fieldshiftRightBy51 shiftRightBy51��	shiftRightBy51 = function(a) {
		var a, x, x$1;
  3�		return (x = $shiftLeft64(a.hi, 13), x$1 = $shiftRightUint64(a.lo, 51), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
    	};
shiftRightBy519crypto/ed25519/internal/edwards25519/field.shiftRightBy51 7crypto/ed25519/internal/edwards25519/field.feMulGeneric*crypto/ed25519/internal/edwards25519/fieldfeMulGeneric feMulGeneric��	feMulGeneric = function(v, a, b) {
		var a, a0, a1, a1_19, a2, a2_19, a3, a3_19, a4, a4_19, b, b0, b1, b2, b3, b4, c0, c1, c2, c3, c4, r0, r1, r2, r3, r4, rr0, rr1, rr2, rr3, rr4, v, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  4>		a0 = a.l0;
  4J		a1 = a.l1;
  4V		a2 = a.l2;
  4b		a3 = a.l3;
  4n		a4 = a.l4;
  4{		b0 = b.l0;
  4�		b1 = b.l1;
  4�		b2 = b.l2;
  4�		b3 = b.l3;
  4�		b4 = b.l4;
  :�		a1_19 = $mul64(a1, new $Uint64(0, 19));
  :�		a2_19 = $mul64(a2, new $Uint64(0, 19));
  ; 		a3_19 = $mul64(a3, new $Uint64(0, 19));
  ;		a4_19 = $mul64(a4, new $Uint64(0, 19));
  ;_		r0 = $clone(mul64(a0, b0), uint128);
  ;t		uint128.copy(r0, addMul64($clone(r0, uint128), a1_19, b4));
  ;�		uint128.copy(r0, addMul64($clone(r0, uint128), a2_19, b3));
  ;�		uint128.copy(r0, addMul64($clone(r0, uint128), a3_19, b2));
  ;�		uint128.copy(r0, addMul64($clone(r0, uint128), a4_19, b1));
  <'		r1 = $clone(mul64(a0, b1), uint128);
  <<		uint128.copy(r1, addMul64($clone(r1, uint128), a1, b0));
  <W		uint128.copy(r1, addMul64($clone(r1, uint128), a2_19, b4));
  <u		uint128.copy(r1, addMul64($clone(r1, uint128), a3_19, b3));
  <�		uint128.copy(r1, addMul64($clone(r1, uint128), a4_19, b2));
  <�		r2 = $clone(mul64(a0, b2), uint128);
  =		uint128.copy(r2, addMul64($clone(r2, uint128), a1, b1));
  =		uint128.copy(r2, addMul64($clone(r2, uint128), a2, b0));
  =7		uint128.copy(r2, addMul64($clone(r2, uint128), a3_19, b4));
  =U		uint128.copy(r2, addMul64($clone(r2, uint128), a4_19, b3));
  =�		r3 = $clone(mul64(a0, b3), uint128);
  =�		uint128.copy(r3, addMul64($clone(r3, uint128), a1, b2));
  =�		uint128.copy(r3, addMul64($clone(r3, uint128), a2, b1));
  =�		uint128.copy(r3, addMul64($clone(r3, uint128), a3, b0));
  >		uint128.copy(r3, addMul64($clone(r3, uint128), a4_19, b4));
  >e		r4 = $clone(mul64(a0, b4), uint128);
  >z		uint128.copy(r4, addMul64($clone(r4, uint128), a1, b3));
  >�		uint128.copy(r4, addMul64($clone(r4, uint128), a2, b2));
  >�		uint128.copy(r4, addMul64($clone(r4, uint128), a3, b1));
  >�		uint128.copy(r4, addMul64($clone(r4, uint128), a4, b0));
  C�		c0 = shiftRightBy51($clone(r0, uint128));
  C�		c1 = shiftRightBy51($clone(r1, uint128));
  D		c2 = shiftRightBy51($clone(r2, uint128));
  D'		c3 = shiftRightBy51($clone(r3, uint128));
  DA		c4 = shiftRightBy51($clone(r4, uint128));
  D\		rr0 = (x = (x$1 = r0.lo, new $Uint64(x$1.$high & 524287, (x$1.$low & 4294967295) >>> 0)), x$2 = $mul64(c4, new $Uint64(0, 19)), new $Uint64(x.$high + x$2.$high, x.$low + x$2.$low));
  D�		rr1 = (x$3 = (x$4 = r1.lo, new $Uint64(x$4.$high & 524287, (x$4.$low & 4294967295) >>> 0)), new $Uint64(x$3.$high + c0.$high, x$3.$low + c0.$low));
  D�		rr2 = (x$5 = (x$6 = r2.lo, new $Uint64(x$6.$high & 524287, (x$6.$low & 4294967295) >>> 0)), new $Uint64(x$5.$high + c1.$high, x$5.$low + c1.$low));
  D�		rr3 = (x$7 = (x$8 = r3.lo, new $Uint64(x$8.$high & 524287, (x$8.$low & 4294967295) >>> 0)), new $Uint64(x$7.$high + c2.$high, x$7.$low + c2.$low));
  D�		rr4 = (x$9 = (x$10 = r4.lo, new $Uint64(x$10.$high & 524287, (x$10.$low & 4294967295) >>> 0)), new $Uint64(x$9.$high + c3.$high, x$9.$low + c3.$low));
  E�		Element.copy(v, new Element.ptr(rr0, rr1, rr2, rr3, rr4));
  F		v.carryPropagate();
    	};
feMulGeneric2crypto/ed25519/internal/edwards25519/field.Element3crypto/ed25519/internal/edwards25519/field.addMul64:crypto/ed25519/internal/edwards25519/field.carryPropagate~7crypto/ed25519/internal/edwards25519/field.feMulGeneric0crypto/ed25519/internal/edwards25519/field.mul649crypto/ed25519/internal/edwards25519/field.shiftRightBy512crypto/ed25519/internal/edwards25519/field.uint128 :crypto/ed25519/internal/edwards25519/field.feSquareGeneric*crypto/ed25519/internal/edwards25519/fieldfeSquareGeneric feSquareGeneric�
�	feSquareGeneric = function(v, a) {
		var a, c0, c1, c2, c3, c4, l0, l0_2, l1, l1_2, l1_38, l2, l2_38, l3, l3_19, l3_38, l4, l4_19, r0, r1, r2, r3, r4, rr0, rr1, rr2, rr3, rr4, v, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  FS		l0 = a.l0;
  F_		l1 = a.l1;
  Fk		l2 = a.l2;
  Fw		l3 = a.l3;
  F�		l4 = a.l4;
  KP		l0_2 = $mul64(l0, new $Uint64(0, 2));
  K`		l1_2 = $mul64(l1, new $Uint64(0, 2));
  Kq		l1_38 = $mul64(l1, new $Uint64(0, 38));
  K�		l2_38 = $mul64(l2, new $Uint64(0, 38));
  K�		l3_38 = $mul64(l3, new $Uint64(0, 38));
  K�		l3_19 = $mul64(l3, new $Uint64(0, 19));
  K�		l4_19 = $mul64(l4, new $Uint64(0, 19));
  L+		r0 = $clone(mul64(l0, l0), uint128);
  L@		uint128.copy(r0, addMul64($clone(r0, uint128), l1_38, l4));
  L^		uint128.copy(r0, addMul64($clone(r0, uint128), l2_38, l3));
  L�		r1 = $clone(mul64(l0_2, l1), uint128);
  L�		uint128.copy(r1, addMul64($clone(r1, uint128), l2_38, l4));
  M		uint128.copy(r1, addMul64($clone(r1, uint128), l3_19, l3));
  M�		r2 = $clone(mul64(l0_2, l2), uint128);
  M�		uint128.copy(r2, addMul64($clone(r2, uint128), l1, l1));
  M�		uint128.copy(r2, addMul64($clone(r2, uint128), l3_38, l4));
  NA		r3 = $clone(mul64(l0_2, l3), uint128);
  NX		uint128.copy(r3, addMul64($clone(r3, uint128), l1_2, l2));
  Nu		uint128.copy(r3, addMul64($clone(r3, uint128), l4_19, l4));
  N�		r4 = $clone(mul64(l0_2, l4), uint128);
  O 		uint128.copy(r4, addMul64($clone(r4, uint128), l1_2, l3));
  O		uint128.copy(r4, addMul64($clone(r4, uint128), l2, l2));
  O9		c0 = shiftRightBy51($clone(r0, uint128));
  OS		c1 = shiftRightBy51($clone(r1, uint128));
  Om		c2 = shiftRightBy51($clone(r2, uint128));
  O�		c3 = shiftRightBy51($clone(r3, uint128));
  O�		c4 = shiftRightBy51($clone(r4, uint128));
  O�		rr0 = (x = (x$1 = r0.lo, new $Uint64(x$1.$high & 524287, (x$1.$low & 4294967295) >>> 0)), x$2 = $mul64(c4, new $Uint64(0, 19)), new $Uint64(x.$high + x$2.$high, x.$low + x$2.$low));
  O�		rr1 = (x$3 = (x$4 = r1.lo, new $Uint64(x$4.$high & 524287, (x$4.$low & 4294967295) >>> 0)), new $Uint64(x$3.$high + c0.$high, x$3.$low + c0.$low));
  P		rr2 = (x$5 = (x$6 = r2.lo, new $Uint64(x$6.$high & 524287, (x$6.$low & 4294967295) >>> 0)), new $Uint64(x$5.$high + c1.$high, x$5.$low + c1.$low));
  P"		rr3 = (x$7 = (x$8 = r3.lo, new $Uint64(x$8.$high & 524287, (x$8.$low & 4294967295) >>> 0)), new $Uint64(x$7.$high + c2.$high, x$7.$low + c2.$low));
  PC		rr4 = (x$9 = (x$10 = r4.lo, new $Uint64(x$10.$high & 524287, (x$10.$low & 4294967295) >>> 0)), new $Uint64(x$9.$high + c3.$high, x$9.$low + c3.$low));
  Pe		Element.copy(v, new Element.ptr(rr0, rr1, rr2, rr3, rr4));
  P�		v.carryPropagate();
    	};
feSquareGeneric2crypto/ed25519/internal/edwards25519/field.Element3crypto/ed25519/internal/edwards25519/field.addMul64:crypto/ed25519/internal/edwards25519/field.carryPropagate~:crypto/ed25519/internal/edwards25519/field.feSquareGeneric0crypto/ed25519/internal/edwards25519/field.mul649crypto/ed25519/internal/edwards25519/field.shiftRightBy512crypto/ed25519/internal/edwards25519/field.uint128 K(*crypto/ed25519/internal/edwards25519/field.Element).carryPropagateGeneric �	Element.ptr.prototype.carryPropagateGeneric = function() {
		var c0, c1, c2, c3, c4, v, x, x$1, x$10, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
		v = this;
  Qa		c0 = $shiftRightUint64(v.l0, 51);
  Qs		c1 = $shiftRightUint64(v.l1, 51);
  Q�		c2 = $shiftRightUint64(v.l2, 51);
  Q�		c3 = $shiftRightUint64(v.l3, 51);
  Q�		c4 = $shiftRightUint64(v.l4, 51);
  Q�		v.l0 = (x = (x$1 = v.l0, new $Uint64(x$1.$high & 524287, (x$1.$low & 4294967295) >>> 0)), x$2 = $mul64(c4, new $Uint64(0, 19)), new $Uint64(x.$high + x$2.$high, x.$low + x$2.$low));
  Q�		v.l1 = (x$3 = (x$4 = v.l1, new $Uint64(x$4.$high & 524287, (x$4.$low & 4294967295) >>> 0)), new $Uint64(x$3.$high + c0.$high, x$3.$low + c0.$low));
  Q�		v.l2 = (x$5 = (x$6 = v.l2, new $Uint64(x$6.$high & 524287, (x$6.$low & 4294967295) >>> 0)), new $Uint64(x$5.$high + c1.$high, x$5.$low + c1.$low));
  R		v.l3 = (x$7 = (x$8 = v.l3, new $Uint64(x$8.$high & 524287, (x$8.$low & 4294967295) >>> 0)), new $Uint64(x$7.$high + c2.$high, x$7.$low + c2.$low));
  R?		v.l4 = (x$9 = (x$10 = v.l4, new $Uint64(x$10.$high & 524287, (x$10.$low & 4294967295) >>> 0)), new $Uint64(x$9.$high + c3.$high, x$9.$low + c3.$low));
  R`		return v;
    	};
	Element.prototype.carryPropagateGeneric = function() { return this.$val.carryPropagateGeneric(); };
ElementcarryPropagateGeneric~2crypto/ed25519/internal/edwards25519/field.Element �{"Base":21100,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/field/fe.go","Base":1,"Size":11828,"Lines":[0,59,113,163,164,225,239,240,249,266,285,298,300,301,376,456,496,499,577,602,605,648,670,710,774,778,848,859,870,881,892,903,905,906,949,950,987,988,1023,1059,1073,1083,1085,1086,1122,1123,1157,1192,1205,1215,1217,1218,1272,1310,1330,1331,1404,1456,1457,1535,1616,1640,1662,1684,1706,1728,1729,1800,1862,1878,1879,1899,1928,1948,1977,1997,2026,2046,2075,2099,2128,2129,2139,2141,2142,2180,2228,2248,2268,2288,2308,2328,2398,2473,2548,2565,2599,2601,2602,2645,2698,2772,2832,2872,2912,2952,2992,3032,3059,3061,3062,3100,3148,3178,3180,3181,3226,3229,3265,3313,3395,3470,3543,3544,3575,3606,3637,3668,3700,3732,3776,3777,3809,3835,3864,3867,3912,3913,3947,3973,4003,4006,4052,4053,4087,4114,4144,4147,4187,4188,4216,4242,4272,4275,4321,4322,4356,4383,4414,4417,4465,4466,4502,4529,4561,4564,4606,4607,4636,4663,4694,4697,4738,4739,4768,4797,4826,4855,4884,4885,4928,4930,4931,4965,5010,5019,5029,5031,5032,5105,5108,5183,5261,5330,5378,5397,5455,5458,5459,5515,5558,5581,5642,5691,5714,5777,5827,5850,5914,5964,5987,6052,6107,6158,6181,6182,6192,6194,6195,6263,6298,6373,6409,6427,6449,6451,6452,6500,6509,6521,6522,6539,6600,6623,6686,6713,6740,6764,6774,6779,6797,6801,6804,6805,6820,6822,6823,6881,6923,6955,6998,7000,7001,7065,7129,7130,7189,7250,7273,7306,7339,7372,7405,7438,7448,7450,7451,7540,7587,7610,7634,7645,7656,7679,7690,7701,7724,7735,7746,7769,7780,7791,7814,7825,7836,7838,7839,7898,7935,7965,7967,7968,8010,8060,8120,8122,8123,8166,8219,8235,8245,8247,8248,8289,8337,8353,8363,8365,8366,8407,8465,8495,8525,8555,8585,8615,8681,8701,8721,8741,8761,8837,8879,8889,8891,8892,8935,8991,9027,9052,9082,9090,9092,9093,9161,9211,9235,9236,9269,9302,9335,9368,9402,9436,9470,9504,9539,9556,9559,9615,9654,9696,9713,9716,9755,9794,9836,9853,9856,9895,9934,9976,9993,9996,10035,10074,10117,10134,10137,10178,10219,10264,10281,10284,10324,10364,10407,10424,10427,10467,10507,10547,10602,10604,10605,10682,10739,10793,10794,10871,10874,10954,11034,11058,11132,11150,11151,11189,11208,11249,11287,11321,11322,11378,11379,11400,11435,11473,11535,11536,11594,11671,11726,11727,11781,11826],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/field/fe_amd64_noasm.go","Base":11830,"Size":354,"Lines":[0,59,113,163,164,199,227,228,242,243,298,299],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/field/fe_arm64_noasm.go","Base":12185,"Size":325,"Lines":[0,59,113,163,164,199,227,228,242,243,289,323],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/field/fe_generic.go","Base":12511,"Size":8588,"Lines":[0,59,113,163,164,178,179,198,199,271,312,334,349,351,352,376,410,438,462,464,465,496,544,572,606,639,663,665,666,738,778,821,823,824,862,874,886,898,910,922,923,935,947,959,971,983,984,1062,1103,1107,1162,1217,1270,1325,1380,1435,1490,1545,1598,1650,1654,1733,1816,1866,1870,1941,2016,2093,2097,2152,2208,2265,2323,2382,2435,2487,2491,2555,2556,2574,2592,2610,2628,2629,2687,2708,2738,2768,2798,2828,2829,2887,2908,2935,2965,2995,3025,3026,3084,3105,3132,3159,3189,3219,3220,3276,3297,3324,3351,3378,3408,3409,3461,3482,3509,3536,3563,3590,3591,3669,3749,3787,3791,3864,3942,4020,4090,4094,4170,4247,4251,4313,4415,4462,4500,4521,4525,4602,4680,4734,4738,4794,4829,4852,4856,4857,4883,4909,4935,4961,4987,4988,5024,5057,5090,5123,5156,5157,5235,5308,5391,5430,5450,5452,5453,5491,5503,5515,5527,5539,5551,5552,5626,5677,5681,5736,5791,5844,5899,5954,6009,6064,6119,6172,6224,6228,6283,6339,6396,6454,6513,6566,6618,6622,6703,6767,6768,6784,6800,6801,6819,6837,6855,6856,6874,6892,6893,6987,7008,7038,7068,7069,7168,7191,7221,7251,7252,7347,7370,7397,7427,7428,7521,7544,7573,7603,7604,7689,7712,7741,7768,7769,7795,7821,7847,7873,7899,7900,7936,7969,8002,8035,8068,8069,8108,8128,8130,8131,8206,8268,8321,8339,8357,8375,8393,8411,8412,8447,8479,8511,8543,8575,8576,8586],"Infos":null}]}
 