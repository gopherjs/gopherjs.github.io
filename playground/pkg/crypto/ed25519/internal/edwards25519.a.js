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
GoLinkname�� Implementation�� 	Reference��   ��t��$crypto/ed25519/internal/edwards25519edwards25519*crypto/ed25519/internal/edwards25519/fieldcrypto/subtleencoding/binaryerrorssync�
ai �� PointScalarxElement*crypto/ed25519/internal/edwards25519/fieldyzt_incomparableSetvuBytesbytesbufSetBytes	fromP1xP1p	projP1xP1fromP2projP2AddqSubtractNegateEqualScalarBaseMult
ScalarMultVarTimeDoubleScalarBaseMultaAbsMultiplyAddMultiplySetUniformBytesSetCanonicalBytesSetBytesWithClampingnonAdjacentFormwsignedRadix16l0l1l2l3l4ZeroOnereduceInvertoutSelectcondSwap
IsNegativeAbsoluteSquareMult32Pow22523	SqrtRatiorrr	wasSquarecarryPropagatecarryPropagateGenericXYZT
projCachedSub	AddAffineaffineCached	SubAffineDouble	FromP1xP1FromP3YplusXYminusXT2dCondNegedwards25519NewGeneratorPointNewIdentityPoint	NewScalarfield   F    # F    ,  5F    8  K   A   CA   EA   GA   ID        o    � ~   � �             5  5   5 5 T G X \c ^e  g  ` \i   k f \m lr  t  p \v x  z    y \| ��  �  � \� ��  �  � \� �� ��  �  � \� �� ��  �  � \� ��  �  � \� ^�    � \� �  �  � \� � ��  �  � \� �� �� ��  �    ��  5555555555555555555555555555�5@T � � �� � C� E�  �  � �� � C�  �  � �� � C�  �  � �� �  �  � �� � C�  �  X �� �  �  � �� �  �  � �� �  �    � �� �  �  ` ��   � � �� G�    � �� �  �  � ��   � �
   �
   �
   �
   �
  AAAAAAAAAAAAAAAAAAAAAAAAA �AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT � � \�   � � \�   � � \�   � � \� �� ��  �  � \� �� ��  �  � \� ��  �  � \� E�  �  X \� ��  �  p \� �  �  ` \�   � f \� ��  �  � \� ^�    � \� �� �� �  �  � \� ^� �   � \�    � \� ^�  �  � \� � C�  �  � \� �  �  � \� � C	  �  � \� �  �  � �� ^� \� �� �  � \�   � � \�   �    �
T �
   �A   �A   �A   �A  ~  � �
~~ �
~~  � �~~ �~~�~T �
 � \�
 ��
 ��  �  � \� �� ��  �  � \� �� ��  �  � \� �� ��  �  � \� ��  �   �A   �A   �A  ���~�� �T � � \�   � � \� ��  �  � \� ��  �   �A   �A   �A   �A  �
�
�
 �
�
�
�
�
�
T � � \�   � � \� ��  �  � \� �� �� �  �  � \� �  �   �A   �A   �A  ��� ������T � � \�   � � \� ��  �  � \� �� �� �  �  � \� �  �  � 
�������K�
������� �| fieldB	field = $packages["crypto/ed25519/internal/edwards25519/field"];
��    		$r = field.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  subtle&	subtle = $packages["crypto/subtle"];
��    		$r = subtle.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  binary(	binary = $packages["encoding/binary"];
��    		$r = binary.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	projP1xP1�-	projP1xP1 = $pkg.projP1xP1 = $newType(0, $kindStruct, "edwards25519.projP1xP1", true, "crypto/ed25519/internal/edwards25519", false, function(X_, Y_, Z_, T_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.X = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.Y = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.Z = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.T = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			return;
		}
		this.X = X_;
		this.Y = Y_;
		this.Z = Z_;
		this.T = T_;
	});
�	ptrType$3.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([ptrType, ptrType$2], [ptrType$3], false)}, {prop: "Sub", name: "Sub", pkg: "", typ: $funcType([ptrType, ptrType$2], [ptrType$3], false)}, {prop: "AddAffine", name: "AddAffine", pkg: "", typ: $funcType([ptrType, ptrType$4], [ptrType$3], false)}, {prop: "SubAffine", name: "SubAffine", pkg: "", typ: $funcType([ptrType, ptrType$4], [ptrType$3], false)}, {prop: "Double", name: "Double", pkg: "", typ: $funcType([ptrType$5], [ptrType$3], false)}];
�o	projP1xP1.init("", [{prop: "X", name: "X", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "Y", name: "Y", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "Z", name: "Z", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "T", name: "T", embedded: false, exported: true, typ: field.Element, tag: ""}]);
	projP1xP1
1crypto/ed25519/internal/edwards25519.affineCached/crypto/ed25519/internal/edwards25519.projCached.crypto/ed25519/internal/edwards25519.projP1xP1+crypto/ed25519/internal/edwards25519.projP2,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$2.crypto/ed25519/internal/edwards25519.ptrType$3.crypto/ed25519/internal/edwards25519.ptrType$4.crypto/ed25519/internal/edwards25519.ptrType$52crypto/ed25519/internal/edwards25519/field.Element  projP2��	projP2 = $pkg.projP2 = $newType(0, $kindStruct, "edwards25519.projP2", true, "crypto/ed25519/internal/edwards25519", false, function(X_, Y_, Z_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.X = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.Y = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.Z = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			return;
		}
		this.X = X_;
		this.Y = Y_;
		this.Z = Z_;
	});
�"	ptrType$5.methods = [{prop: "Zero", name: "Zero", pkg: "", typ: $funcType([], [ptrType$5], false)}, {prop: "FromP1xP1", name: "FromP1xP1", pkg: "", typ: $funcType([ptrType$3], [ptrType$5], false)}, {prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [ptrType$5], false)}];
�	projP2.init("", [{prop: "X", name: "X", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "Y", name: "Y", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "Z", name: "Z", embedded: false, exported: true, typ: field.Element, tag: ""}]);
projP2+crypto/ed25519/internal/edwards25519.projP2,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$3.crypto/ed25519/internal/edwards25519.ptrType$52crypto/ed25519/internal/edwards25519/field.Element  Point�[	Point = $pkg.Point = $newType(0, $kindStruct, "edwards25519.Point", true, "crypto/ed25519/internal/edwards25519", true, function(x_, y_, z_, t_, _$4_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.x = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.y = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.z = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.t = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this._$4 = arrayType$3.zero();
			return;
		}
		this.x = x_;
		this.y = y_;
		this.z = z_;
		this.t = t_;
		this._$4 = _$4_;
	});
�v	ptrType.methods = [{prop: "Set", name: "Set", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "bytes", name: "bytes", pkg: "crypto/ed25519/internal/edwards25519", typ: $funcType([ptrType$6], [sliceType], false)}, {prop: "SetBytes", name: "SetBytes", pkg: "", typ: $funcType([sliceType], [ptrType, $error], false)}, {prop: "fromP1xP1", name: "fromP1xP1", pkg: "crypto/ed25519/internal/edwards25519", typ: $funcType([ptrType$3], [ptrType], false)}, {prop: "fromP2", name: "fromP2", pkg: "crypto/ed25519/internal/edwards25519", typ: $funcType([ptrType$5], [ptrType], false)}, {prop: "Add", name: "Add", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType], false)}, {prop: "Subtract", name: "Subtract", pkg: "", typ: $funcType([ptrType, ptrType], [ptrType], false)}, {prop: "Negate", name: "Negate", pkg: "", typ: $funcType([ptrType], [ptrType], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([ptrType], [$Int], false)}, {prop: "ScalarBaseMult", name: "ScalarBaseMult", pkg: "", typ: $funcType([ptrType$1], [ptrType], false)}, {prop: "ScalarMult", name: "ScalarMult", pkg: "", typ: $funcType([ptrType$1, ptrType], [ptrType], false)}, {prop: "VarTimeDoubleScalarBaseMult", name: "VarTimeDoubleScalarBaseMult", pkg: "", typ: $funcType([ptrType$1, ptrType, ptrType$1], [ptrType], false)}];
��	Point.init("crypto/ed25519/internal/edwards25519", [{prop: "x", name: "x", embedded: false, exported: false, typ: field.Element, tag: ""}, {prop: "y", name: "y", embedded: false, exported: false, typ: field.Element, tag: ""}, {prop: "z", name: "z", embedded: false, exported: false, typ: field.Element, tag: ""}, {prop: "t", name: "t", embedded: false, exported: false, typ: field.Element, tag: ""}, {prop: "_$4", name: "_", embedded: false, exported: false, typ: incomparable, tag: ""}]);
Point*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$30crypto/ed25519/internal/edwards25519.arrayType$41crypto/ed25519/internal/edwards25519.incomparable,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$1.crypto/ed25519/internal/edwards25519.ptrType$3.crypto/ed25519/internal/edwards25519.ptrType$5.crypto/ed25519/internal/edwards25519.ptrType$6.crypto/ed25519/internal/edwards25519.sliceType2crypto/ed25519/internal/edwards25519/field.Element  incomparable��	incomparable = $pkg.incomparable = $newType(0, $kindArray, "edwards25519.incomparable", true, "crypto/ed25519/internal/edwards25519", false, null);
!	incomparable.init(funcType, 0);
incomparable-crypto/ed25519/internal/edwards25519.funcType1crypto/ed25519/internal/edwards25519.incomparable  
projCached�d	projCached = $pkg.projCached = $newType(0, $kindStruct, "edwards25519.projCached", true, "crypto/ed25519/internal/edwards25519", false, function(YplusX_, YminusX_, Z_, T2d_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.YplusX = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.YminusX = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.Z = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.T2d = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			return;
		}
		this.YplusX = YplusX_;
		this.YminusX = YminusX_;
		this.Z = Z_;
		this.T2d = T2d_;
	});
��	ptrType$2.methods = [{prop: "Zero", name: "Zero", pkg: "", typ: $funcType([], [ptrType$2], false)}, {prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [ptrType$2], false)}, {prop: "Select", name: "Select", pkg: "", typ: $funcType([ptrType$2, ptrType$2, $Int], [ptrType$2], false)}, {prop: "CondNeg", name: "CondNeg", pkg: "", typ: $funcType([$Int], [ptrType$2], false)}];
��	projCached.init("", [{prop: "YplusX", name: "YplusX", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "YminusX", name: "YminusX", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "Z", name: "Z", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "T2d", name: "T2d", embedded: false, exported: true, typ: field.Element, tag: ""}]);

projCached/crypto/ed25519/internal/edwards25519.projCached,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$22crypto/ed25519/internal/edwards25519/field.Element  affineCached��	affineCached = $pkg.affineCached = $newType(0, $kindStruct, "edwards25519.affineCached", true, "crypto/ed25519/internal/edwards25519", false, function(YplusX_, YminusX_, T2d_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.YplusX = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.YminusX = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			this.T2d = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
			return;
		}
		this.YplusX = YplusX_;
		this.YminusX = YminusX_;
		this.T2d = T2d_;
	});
��	ptrType$4.methods = [{prop: "Zero", name: "Zero", pkg: "", typ: $funcType([], [ptrType$4], false)}, {prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [ptrType$4], false)}, {prop: "Select", name: "Select", pkg: "", typ: $funcType([ptrType$4, ptrType$4, $Int], [ptrType$4], false)}, {prop: "CondNeg", name: "CondNeg", pkg: "", typ: $funcType([$Int], [ptrType$4], false)}];
�6	affineCached.init("", [{prop: "YplusX", name: "YplusX", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "YminusX", name: "YminusX", embedded: false, exported: true, typ: field.Element, tag: ""}, {prop: "T2d", name: "T2d", embedded: false, exported: true, typ: field.Element, tag: ""}]);
affineCached1crypto/ed25519/internal/edwards25519.affineCached,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$42crypto/ed25519/internal/edwards25519/field.Element  Scalar�	Scalar = $pkg.Scalar = $newType(0, $kindStruct, "edwards25519.Scalar", true, "crypto/ed25519/internal/edwards25519", true, function(s_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.s = arrayType$4.zero();
			return;
		}
		this.s = s_;
	});
��	ptrType$1.methods = [{prop: "MultiplyAdd", name: "MultiplyAdd", pkg: "", typ: $funcType([ptrType$1, ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "Add", name: "Add", pkg: "", typ: $funcType([ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "Subtract", name: "Subtract", pkg: "", typ: $funcType([ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "Negate", name: "Negate", pkg: "", typ: $funcType([ptrType$1], [ptrType$1], false)}, {prop: "Multiply", name: "Multiply", pkg: "", typ: $funcType([ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([ptrType$1], [ptrType$1], false)}, {prop: "SetUniformBytes", name: "SetUniformBytes", pkg: "", typ: $funcType([sliceType], [ptrType$1], false)}, {prop: "SetCanonicalBytes", name: "SetCanonicalBytes", pkg: "", typ: $funcType([sliceType], [ptrType$1, $error], false)}, {prop: "SetBytesWithClamping", name: "SetBytesWithClamping", pkg: "", typ: $funcType([sliceType], [ptrType$1], false)}, {prop: "Bytes", name: "Bytes", pkg: "", typ: $funcType([], [sliceType], false)}, {prop: "Equal", name: "Equal", pkg: "", typ: $funcType([ptrType$1], [$Int], false)}, {prop: "nonAdjacentForm", name: "nonAdjacentForm", pkg: "crypto/ed25519/internal/edwards25519", typ: $funcType([$Uint], [arrayType$8], false)}, {prop: "signedRadix16", name: "signedRadix16", pkg: "crypto/ed25519/internal/edwards25519", typ: $funcType([], [arrayType$10], false)}];
��	Scalar.init("crypto/ed25519/internal/edwards25519", [{prop: "s", name: "s", embedded: false, exported: false, typ: arrayType$4, tag: ""}]);
Scalar+crypto/ed25519/internal/edwards25519.Scalar1crypto/ed25519/internal/edwards25519.arrayType$100crypto/ed25519/internal/edwards25519.arrayType$40crypto/ed25519/internal/edwards25519.arrayType$8.crypto/ed25519/internal/edwards25519.ptrType$1.crypto/ed25519/internal/edwards25519.sliceType  projLookupTable�3	projLookupTable = $pkg.projLookupTable = $newType(0, $kindStruct, "edwards25519.projLookupTable", true, "crypto/ed25519/internal/edwards25519", false, function(points_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.points = arrayType$11.zero();
			return;
		}
		this.points = points_;
	});
��	ptrType$7.methods = [{prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [], false)}, {prop: "SelectInto", name: "SelectInto", pkg: "", typ: $funcType([ptrType$2, $Int8], [], false)}];
��	projLookupTable.init("crypto/ed25519/internal/edwards25519", [{prop: "points", name: "points", embedded: false, exported: false, typ: arrayType$11, tag: ""}]);
projLookupTable1crypto/ed25519/internal/edwards25519.arrayType$11/crypto/ed25519/internal/edwards25519.projCached4crypto/ed25519/internal/edwards25519.projLookupTable,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$2.crypto/ed25519/internal/edwards25519.ptrType$72crypto/ed25519/internal/edwards25519/field.Element  affineLookupTable�6	affineLookupTable = $pkg.affineLookupTable = $newType(0, $kindStruct, "edwards25519.affineLookupTable", true, "crypto/ed25519/internal/edwards25519", false, function(points_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.points = arrayType.zero();
			return;
		}
		this.points = points_;
	});
��	ptrType$8.methods = [{prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [], false)}, {prop: "SelectInto", name: "SelectInto", pkg: "", typ: $funcType([ptrType$4, $Int8], [], false)}];
��	affineLookupTable.init("crypto/ed25519/internal/edwards25519", [{prop: "points", name: "points", embedded: false, exported: false, typ: arrayType, tag: ""}]);
affineLookupTable1crypto/ed25519/internal/edwards25519.affineCached6crypto/ed25519/internal/edwards25519.affineLookupTable.crypto/ed25519/internal/edwards25519.arrayType,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$4.crypto/ed25519/internal/edwards25519.ptrType$82crypto/ed25519/internal/edwards25519/field.Element  nafLookupTable5�3	nafLookupTable5 = $pkg.nafLookupTable5 = $newType(0, $kindStruct, "edwards25519.nafLookupTable5", true, "crypto/ed25519/internal/edwards25519", false, function(points_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.points = arrayType$11.zero();
			return;
		}
		this.points = points_;
	});
��	ptrType$9.methods = [{prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [], false)}, {prop: "SelectInto", name: "SelectInto", pkg: "", typ: $funcType([ptrType$2, $Int8], [], false)}];
��	nafLookupTable5.init("crypto/ed25519/internal/edwards25519", [{prop: "points", name: "points", embedded: false, exported: false, typ: arrayType$11, tag: ""}]);
nafLookupTable51crypto/ed25519/internal/edwards25519.arrayType$114crypto/ed25519/internal/edwards25519.nafLookupTable5/crypto/ed25519/internal/edwards25519.projCached,crypto/ed25519/internal/edwards25519.ptrType.crypto/ed25519/internal/edwards25519.ptrType$2.crypto/ed25519/internal/edwards25519.ptrType$92crypto/ed25519/internal/edwards25519/field.Element  nafLookupTable8�2	nafLookupTable8 = $pkg.nafLookupTable8 = $newType(0, $kindStruct, "edwards25519.nafLookupTable8", true, "crypto/ed25519/internal/edwards25519", false, function(points_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.points = arrayType$2.zero();
			return;
		}
		this.points = points_;
	});
��	ptrType$10.methods = [{prop: "FromP3", name: "FromP3", pkg: "", typ: $funcType([ptrType], [], false)}, {prop: "SelectInto", name: "SelectInto", pkg: "", typ: $funcType([ptrType$4, $Int8], [], false)}];
��	nafLookupTable8.init("crypto/ed25519/internal/edwards25519", [{prop: "points", name: "points", embedded: false, exported: false, typ: arrayType$2, tag: ""}]);
nafLookupTable81crypto/ed25519/internal/edwards25519.affineCached0crypto/ed25519/internal/edwards25519.arrayType$24crypto/ed25519/internal/edwards25519.nafLookupTable8,crypto/ed25519/internal/edwards25519.ptrType/crypto/ed25519/internal/edwards25519.ptrType$10.crypto/ed25519/internal/edwards25519.ptrType$42crypto/ed25519/internal/edwards25519/field.Element  	arrayType*	arrayType = $arrayType(affineCached, 8);
	arrayType1crypto/ed25519/internal/edwards25519.affineCached  arrayType$12	arrayType$1 = $arrayType(affineLookupTable, 32);
arrayType$16crypto/ed25519/internal/edwards25519.affineLookupTable  
structType�	structType = $structType("crypto/ed25519/internal/edwards25519", [{prop: "table", name: "table", embedded: false, exported: false, typ: arrayType$1, tag: ""}, {prop: "initOnce", name: "initOnce", embedded: false, exported: false, typ: sync.Once, tag: ""}]);

structType0crypto/ed25519/internal/edwards25519.arrayType$1	sync.Once  arrayType$2-	arrayType$2 = $arrayType(affineCached, 64);
arrayType$21crypto/ed25519/internal/edwards25519.affineCached  structType$1�		structType$1 = $structType("crypto/ed25519/internal/edwards25519", [{prop: "table", name: "table", embedded: false, exported: false, typ: nafLookupTable8, tag: ""}, {prop: "initOnce", name: "initOnce", embedded: false, exported: false, typ: sync.Once, tag: ""}]);
structType$14crypto/ed25519/internal/edwards25519.nafLookupTable8	sync.Once  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  funcType&	funcType = $funcType([], [], false);
funcType  arrayType$3(	arrayType$3 = $arrayType(funcType, 0);
arrayType$3-crypto/ed25519/internal/edwards25519.funcType  arrayType$4'	arrayType$4 = $arrayType($Uint8, 32);
arrayType$4  ptrType	ptrType = $ptrType(Point);
ptrType*crypto/ed25519/internal/edwards25519.Point  sliceType$1$	sliceType$1 = $sliceType(ptrType);
sliceType$1,crypto/ed25519/internal/edwards25519.ptrType  arrayType$5'	arrayType$5 = $arrayType($Uint8, 64);
arrayType$5  	ptrType$1	ptrType$1 = $ptrType(Scalar);
	ptrType$1+crypto/ed25519/internal/edwards25519.Scalar  arrayType$6'	arrayType$6 = $arrayType($Int64, 23);
arrayType$6  arrayType$7'	arrayType$7 = $arrayType($Int64, 17);
arrayType$7  arrayType$8'	arrayType$8 = $arrayType($Int8, 256);
arrayType$8  arrayType$9'	arrayType$9 = $arrayType($Uint64, 5);
arrayType$9  arrayType$10'	arrayType$10 = $arrayType($Int8, 64);
arrayType$10  arrayType$11+	arrayType$11 = $arrayType(projCached, 8);
arrayType$11/crypto/ed25519/internal/edwards25519.projCached  	ptrType$2#	ptrType$2 = $ptrType(projCached);
	ptrType$2/crypto/ed25519/internal/edwards25519.projCached  	ptrType$3"	ptrType$3 = $ptrType(projP1xP1);
	ptrType$3.crypto/ed25519/internal/edwards25519.projP1xP1  	ptrType$4%	ptrType$4 = $ptrType(affineCached);
	ptrType$41crypto/ed25519/internal/edwards25519.affineCached  	ptrType$5	ptrType$5 = $ptrType(projP2);
	ptrType$5+crypto/ed25519/internal/edwards25519.projP2  	ptrType$6$	ptrType$6 = $ptrType(arrayType$4);
	ptrType$60crypto/ed25519/internal/edwards25519.arrayType$4  	ptrType$7(	ptrType$7 = $ptrType(projLookupTable);
	ptrType$74crypto/ed25519/internal/edwards25519.projLookupTable  	ptrType$8*	ptrType$8 = $ptrType(affineLookupTable);
	ptrType$86crypto/ed25519/internal/edwards25519.affineLookupTable  	ptrType$9(	ptrType$9 = $ptrType(nafLookupTable5);
	ptrType$94crypto/ed25519/internal/edwards25519.nafLookupTable5  
ptrType$10)	ptrType$10 = $ptrType(nafLookupTable8);

ptrType$104crypto/ed25519/internal/edwards25519.nafLookupTable8  identityidentity  	generator	generator  feOnefeOne  dd  d2d2  scZeroscZero  scOnescOne  
scMinusOne
scMinusOne  basepointTablePrecompr		basepointTablePrecomp = new structType.ptr(arrayType$1.zero(), new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)));
basepointTablePrecomp	1crypto/ed25519/internal/edwards25519.affineCached6crypto/ed25519/internal/edwards25519.affineLookupTable.crypto/ed25519/internal/edwards25519.arrayType0crypto/ed25519/internal/edwards25519.arrayType$1:crypto/ed25519/internal/edwards25519.basepointTablePrecomp/crypto/ed25519/internal/edwards25519.structType2crypto/ed25519/internal/edwards25519/field.Element
sync.Mutex	sync.Once  basepointNafTablePrecomp��		basepointNafTablePrecomp = new structType$1.ptr(new nafLookupTable8.ptr(arrayType$2.zero()), new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)));
basepointNafTablePrecomp1crypto/ed25519/internal/edwards25519.affineCached0crypto/ed25519/internal/edwards25519.arrayType$2=crypto/ed25519/internal/edwards25519.basepointNafTablePrecomp4crypto/ed25519/internal/edwards25519.nafLookupTable81crypto/ed25519/internal/edwards25519.structType$12crypto/ed25519/internal/edwards25519/field.Element
sync.Mutex	sync.Once  ��  �		feOne = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).One();
*crypto/ed25519/internal/edwards25519.feOne2crypto/ed25519/internal/edwards25519/field.Element  �-  /		d = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).SetBytes(new sliceType([163, 120, 89, 19, 202, 77, 235, 117, 171, 216, 65, 65, 77, 10, 112, 0, 152, 232, 121, 119, 121, 64, 199, 140, 115, 254, 111, 43, 238, 108, 3, 82]));
&crypto/ed25519/internal/edwards25519.d.crypto/ed25519/internal/edwards25519.sliceType2crypto/ed25519/internal/edwards25519/field.Element  _tuple��  	�		_tuple = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero()).SetBytes(new sliceType([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
		identity = _tuple[0];
*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3-crypto/ed25519/internal/edwards25519.funcType-crypto/ed25519/internal/edwards25519.identity.crypto/ed25519/internal/edwards25519.sliceType2crypto/ed25519/internal/edwards25519/field.Element  _tuple$1��  Z		_tuple$1 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero()).SetBytes(new sliceType([88, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102, 102]));
		generator = _tuple$1[0];
*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3.crypto/ed25519/internal/edwards25519.generator.crypto/ed25519/internal/edwards25519.sliceType2crypto/ed25519/internal/edwards25519/field.Element  ��   		d2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Add(d, d);
&crypto/ed25519/internal/edwards25519.d'crypto/ed25519/internal/edwards25519.d22crypto/ed25519/internal/edwards25519/field.Element  ��  0		scZero = new Scalar.ptr($toNativeArray($kindUint8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
scZero+crypto/ed25519/internal/edwards25519.Scalar+crypto/ed25519/internal/edwards25519.scZero  ��  0�		scOne = new Scalar.ptr($toNativeArray($kindUint8, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
scOne+crypto/ed25519/internal/edwards25519.Scalar*crypto/ed25519/internal/edwards25519.scOne  ��  1		scMinusOne = new Scalar.ptr($toNativeArray($kindUint8, [236, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]));

scMinusOne+crypto/ed25519/internal/edwards25519.Scalar/crypto/ed25519/internal/edwards25519.scMinusOne 5crypto/ed25519/internal/edwards25519.checkInitialized$crypto/ed25519/internal/edwards25519checkInitialized checkInitialized��	checkInitialized = function(points) {
		var _i, _ref, p, points;
  		_ref = points;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			p = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
    			if ($equal(p.x, (new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))), field.Element) && $equal(p.y, (new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))), field.Element)) {
  o				$panic(new $String("edwards25519: use of uninitialized Point"));
    			}
    			_i++;
		}
    	};
checkInitialized5crypto/ed25519/internal/edwards25519.checkInitialized2crypto/ed25519/internal/edwards25519/field.Element 3(*crypto/ed25519/internal/edwards25519.projP2).Zero ��	projP2.ptr.prototype.Zero = function() {
		var v;
		v = this;
  	e		v.X.Zero();
  	q		v.Y.One();
  	|		v.Z.One();
  	�		return v;
    	};
	projP2.prototype.Zero = function() { return this.$val.Zero(); };
projP2+crypto/ed25519/internal/edwards25519.projP2 5crypto/ed25519/internal/edwards25519.NewIdentityPoint$crypto/ed25519/internal/edwards25519NewIdentityPoint NewIdentityPoint�l	NewIdentityPoint = function() {
  
�		return new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero()).Set(identity);
    	};
	$pkg.NewIdentityPoint = NewIdentityPoint;
NewIdentityPoint5crypto/ed25519/internal/edwards25519.NewIdentityPoint*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3-crypto/ed25519/internal/edwards25519.identity2crypto/ed25519/internal/edwards25519/field.Element 6crypto/ed25519/internal/edwards25519.NewGeneratorPoint$crypto/ed25519/internal/edwards25519NewGeneratorPoint NewGeneratorPoint�p	NewGeneratorPoint = function() {
  �		return new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero()).Set(generator);
    	};
	$pkg.NewGeneratorPoint = NewGeneratorPoint;
NewGeneratorPoint6crypto/ed25519/internal/edwards25519.NewGeneratorPoint*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3.crypto/ed25519/internal/edwards25519.generator2crypto/ed25519/internal/edwards25519/field.Element 7(*crypto/ed25519/internal/edwards25519.projCached).Zero ��	projCached.ptr.prototype.Zero = function() {
		var v;
		v = this;
  		v.YplusX.One();
  		v.YminusX.One();
  '		v.Z.One();
  2		v.T2d.Zero();
  @		return v;
    	};
	projCached.prototype.Zero = function() { return this.$val.Zero(); };

projCached/crypto/ed25519/internal/edwards25519.projCached 9(*crypto/ed25519/internal/edwards25519.affineCached).Zero ��	affineCached.ptr.prototype.Zero = function() {
		var v;
		v = this;
  {		v.YplusX.One();
  �		v.YminusX.One();
  �		v.T2d.Zero();
  �		return v;
    	};
	affineCached.prototype.Zero = function() { return this.$val.Zero(); };
affineCached1crypto/ed25519/internal/edwards25519.affineCached 1(*crypto/ed25519/internal/edwards25519.Point).Set ��	Point.ptr.prototype.Set = function(u) {
		var u, v;
		v = this;
  		Point.copy(v, u);
  		return v;
    	};
	Point.prototype.Set = function(u) { return this.$val.Set(u); };
Point*crypto/ed25519/internal/edwards25519.Point 3(*crypto/ed25519/internal/edwards25519.Point).Bytes ��	Point.ptr.prototype.Bytes = function() {
		var buf, v;
		v = this;
  (		buf = arrayType$4.zero();
  6		return v.bytes(buf);
    	};
	Point.prototype.Bytes = function() { return this.$val.Bytes(); };
Point*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$4+crypto/ed25519/internal/edwards25519.bytes~ 3(*crypto/ed25519/internal/edwards25519.Point).bytes ��	Point.ptr.prototype.bytes = function(buf) {
		var _tmp, _tmp$1, _tmp$2, buf, out, v, x, y, zInv;
		v = this;
  }		checkInitialized(new sliceType$1([v]));
  �		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		zInv = $clone(_tmp, field.Element);
		x = $clone(_tmp$1, field.Element);
		y = $clone(_tmp$2, field.Element);
  �		zInv.Invert(v.z);
  �		x.Multiply(v.x, zInv);
   		y.Multiply(v.y, zInv);
  '		out = copyFieldElement(buf, y);
  I		(31 >= out.$length ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + 31] = (((31 >= out.$length ? ($throwRuntimeError("index out of range"), undefined) : out.$array[out.$offset + 31]) | ((((x.IsNegative() << 7 >> 0) << 24 >>> 24)))) >>> 0));
  o		return out;
    	};
	Point.prototype.bytes = function(buf) { return this.$val.bytes(buf); };
Pointbytes~*crypto/ed25519/internal/edwards25519.Point5crypto/ed25519/internal/edwards25519.checkInitialized5crypto/ed25519/internal/edwards25519.copyFieldElement,crypto/ed25519/internal/edwards25519.ptrType0crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element 6(*crypto/ed25519/internal/edwards25519.Point).SetBytes ��	Point.ptr.prototype.SetBytes = function(x) {
		var _tuple$2, u, v, vv, wasSquare, x, xx, xxNeg, y, y2;
		v = this;
    		if (!((x.$length === 32))) {
  8			return [ptrType.nil, errors.New("edwards25519: invalid point encoding length")];
    		}
  �		y = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).SetBytes(x);
  #		y2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Square(y);
  G		u = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Subtract(y2, feOne);
  �		vv = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Multiply(y2, d);
  �		vv = vv.Add(vv, feOne);
  �		_tuple$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).SqrtRatio(u, vv);
		xx = _tuple$2[0];
		wasSquare = _tuple$2[1];
    		if (wasSquare === 0) {
  '			return [ptrType.nil, errors.New("edwards25519: invalid point encoding")];
    		}
  �		xxNeg = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Negate(xx);
  �		xx = xx.Select(xxNeg, xx, ((((31 >= x.$length ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + 31]) >>> 7 << 24 >>> 24) >> 0)));
  �		v.x.Set(xx);
  		v.y.Set(y);
  		v.z.One();
  		v.t.Multiply(xx, y);
  B		return [v, $ifaceNil];
    	};
	Point.prototype.SetBytes = function(x) { return this.$val.SetBytes(x); };
Point*crypto/ed25519/internal/edwards25519.Point&crypto/ed25519/internal/edwards25519.d*crypto/ed25519/internal/edwards25519.feOne,crypto/ed25519/internal/edwards25519.ptrType2crypto/ed25519/internal/edwards25519/field.Element
errors.New 5crypto/ed25519/internal/edwards25519.copyFieldElement$crypto/ed25519/internal/edwards25519copyFieldElement copyFieldElement��	copyFieldElement = function(buf, v) {
		var buf, v;
  �		$copySlice(new sliceType(buf), v.Bytes());
  �		return new sliceType(buf);
    	};
copyFieldElement5crypto/ed25519/internal/edwards25519.copyFieldElement.crypto/ed25519/internal/edwards25519.sliceType 8(*crypto/ed25519/internal/edwards25519.projP2).FromP1xP1 �	projP2.ptr.prototype.FromP1xP1 = function(p) {
		var p, v;
		v = this;
  		v.X.Multiply(p.X, p.T);
  		v.Y.Multiply(p.Y, p.Z);
  7		v.Z.Multiply(p.Z, p.T);
  Q		return v;
    	};
	projP2.prototype.FromP1xP1 = function(p) { return this.$val.FromP1xP1(p); };
projP2+crypto/ed25519/internal/edwards25519.projP2 5(*crypto/ed25519/internal/edwards25519.projP2).FromP3 ��	projP2.ptr.prototype.FromP3 = function(p) {
		var p, v;
		v = this;
  �		v.X.Set(p.x);
  �		v.Y.Set(p.y);
  �		v.Z.Set(p.z);
  �		return v;
    	};
	projP2.prototype.FromP3 = function(p) { return this.$val.FromP3(p); };
projP2+crypto/ed25519/internal/edwards25519.projP2 7(*crypto/ed25519/internal/edwards25519.Point).fromP1xP1 �*	Point.ptr.prototype.fromP1xP1 = function(p) {
		var p, v;
		v = this;
  �		v.x.Multiply(p.X, p.T);
  		v.y.Multiply(p.Y, p.Z);
  )		v.z.Multiply(p.Z, p.T);
  C		v.t.Multiply(p.X, p.Y);
  ]		return v;
    	};
	Point.prototype.fromP1xP1 = function(p) { return this.$val.fromP1xP1(p); };
Point
fromP1xP1~*crypto/ed25519/internal/edwards25519.Point 4(*crypto/ed25519/internal/edwards25519.Point).fromP2 �	Point.ptr.prototype.fromP2 = function(p) {
		var p, v;
		v = this;
  �		v.x.Multiply(p.X, p.Z);
  �		v.y.Multiply(p.Y, p.Z);
  �		v.z.Square(p.Z);
  �		v.t.Multiply(p.X, p.Y);
  �		return v;
    	};
	Point.prototype.fromP2 = function(p) { return this.$val.fromP2(p); };
PointfromP2~*crypto/ed25519/internal/edwards25519.Point 9(*crypto/ed25519/internal/edwards25519.projCached).FromP3 �(	projCached.ptr.prototype.FromP3 = function(p) {
		var p, v;
		v = this;
  x		v.YplusX.Add(p.y, p.x);
  �		v.YminusX.Subtract(p.y, p.x);
  �		v.Z.Set(p.z);
  �		v.T2d.Multiply(p.t, d2);
  �		return v;
    	};
	projCached.prototype.FromP3 = function(p) { return this.$val.FromP3(p); };

projCached'crypto/ed25519/internal/edwards25519.d2/crypto/ed25519/internal/edwards25519.projCached ;(*crypto/ed25519/internal/edwards25519.affineCached).FromP3 �4	affineCached.ptr.prototype.FromP3 = function(p) {
		var invZ, p, v;
		v = this;
   		v.YplusX.Add(p.y, p.x);
  :		v.YminusX.Subtract(p.y, p.x);
  Z		v.T2d.Multiply(p.t, d2);
  y		invZ = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
  �		invZ.Invert(p.z);
  �		v.YplusX.Multiply(v.YplusX, invZ);
  �		v.YminusX.Multiply(v.YminusX, invZ);
  �		v.T2d.Multiply(v.T2d, invZ);
  		return v;
    	};
	affineCached.prototype.FromP3 = function(p) { return this.$val.FromP3(p); };
affineCached1crypto/ed25519/internal/edwards25519.affineCached'crypto/ed25519/internal/edwards25519.d22crypto/ed25519/internal/edwards25519/field.Element 1(*crypto/ed25519/internal/edwards25519.Point).Add �	Point.ptr.prototype.Add = function(p, q) {
		var p, q, qCached, result, v;
		v = this;
  �		checkInitialized(new sliceType$1([p, q]));
  �		qCached = new projCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))).FromP3(q);
  �		result = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))).Add(p, qCached);
  �		return v.fromP1xP1(result);
    	};
	Point.prototype.Add = function(p, q) { return this.$val.Add(p, q); };
Point*crypto/ed25519/internal/edwards25519.Point5crypto/ed25519/internal/edwards25519.checkInitialized/crypto/ed25519/internal/edwards25519.fromP1xP1~/crypto/ed25519/internal/edwards25519.projCached.crypto/ed25519/internal/edwards25519.projP1xP10crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element 6(*crypto/ed25519/internal/edwards25519.Point).Subtract �	Point.ptr.prototype.Subtract = function(p, q) {
		var p, q, qCached, result, v;
		v = this;
  k		checkInitialized(new sliceType$1([p, q]));
  �		qCached = new projCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))).FromP3(q);
  �		result = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0))).Sub(p, qCached);
  �		return v.fromP1xP1(result);
    	};
	Point.prototype.Subtract = function(p, q) { return this.$val.Subtract(p, q); };
Point*crypto/ed25519/internal/edwards25519.Point5crypto/ed25519/internal/edwards25519.checkInitialized/crypto/ed25519/internal/edwards25519.fromP1xP1~/crypto/ed25519/internal/edwards25519.projCached.crypto/ed25519/internal/edwards25519.projP1xP10crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element 5(*crypto/ed25519/internal/edwards25519.projP1xP1).Add �R	projP1xP1.ptr.prototype.Add = function(p, q) {
		var MM, PP, TT2d, YminusX, YplusX, ZZ2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, p, q, v;
		v = this;
  4		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$4 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$5 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		YplusX = $clone(_tmp, field.Element);
		YminusX = $clone(_tmp$1, field.Element);
		PP = $clone(_tmp$2, field.Element);
		MM = $clone(_tmp$3, field.Element);
		TT2d = $clone(_tmp$4, field.Element);
		ZZ2 = $clone(_tmp$5, field.Element);
  g		YplusX.Add(p.y, p.x);
  		YminusX.Subtract(p.y, p.x);
  �		PP.Multiply(YplusX, q.YplusX);
  �		MM.Multiply(YminusX, q.YminusX);
  �		TT2d.Multiply(p.t, q.T2d);
  �		ZZ2.Multiply(p.z, q.Z);
   		ZZ2.Add(ZZ2, ZZ2);
   0		v.X.Subtract(PP, MM);
   H		v.Y.Add(PP, MM);
   [		v.Z.Add(ZZ2, TT2d);
   q		v.T.Subtract(ZZ2, TT2d);
   �		return v;
    	};
	projP1xP1.prototype.Add = function(p, q) { return this.$val.Add(p, q); };
	projP1xP1.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element 5(*crypto/ed25519/internal/edwards25519.projP1xP1).Sub �R	projP1xP1.ptr.prototype.Sub = function(p, q) {
		var MM, PP, TT2d, YminusX, YplusX, ZZ2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, p, q, v;
		v = this;
   �		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$4 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$5 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		YplusX = $clone(_tmp, field.Element);
		YminusX = $clone(_tmp$1, field.Element);
		PP = $clone(_tmp$2, field.Element);
		MM = $clone(_tmp$3, field.Element);
		TT2d = $clone(_tmp$4, field.Element);
		ZZ2 = $clone(_tmp$5, field.Element);
  !		YplusX.Add(p.y, p.x);
  !&		YminusX.Subtract(p.y, p.x);
  !E		PP.Multiply(YplusX, q.YminusX);
  !w		MM.Multiply(YminusX, q.YplusX);
  !�		TT2d.Multiply(p.t, q.T2d);
  !�		ZZ2.Multiply(p.z, q.Z);
  !�		ZZ2.Add(ZZ2, ZZ2);
  !�		v.X.Subtract(PP, MM);
  "		v.Y.Add(PP, MM);
  ""		v.Z.Subtract(ZZ2, TT2d);
  "M		v.T.Add(ZZ2, TT2d);
  "x		return v;
    	};
	projP1xP1.prototype.Sub = function(p, q) { return this.$val.Sub(p, q); };
	projP1xP1.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element ;(*crypto/ed25519/internal/edwards25519.projP1xP1).AddAffine �@	projP1xP1.ptr.prototype.AddAffine = function(p, q) {
		var MM, PP, TT2d, YminusX, YplusX, Z2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, p, q, v;
		v = this;
  "�		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$4 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$5 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		YplusX = $clone(_tmp, field.Element);
		YminusX = $clone(_tmp$1, field.Element);
		PP = $clone(_tmp$2, field.Element);
		MM = $clone(_tmp$3, field.Element);
		TT2d = $clone(_tmp$4, field.Element);
		Z2 = $clone(_tmp$5, field.Element);
  #		YplusX.Add(p.y, p.x);
  #		YminusX.Subtract(p.y, p.x);
  #8		PP.Multiply(YplusX, q.YplusX);
  #Y		MM.Multiply(YminusX, q.YminusX);
  #|		TT2d.Multiply(p.t, q.T2d);
  #�		Z2.Add(p.z, p.z);
  #�		v.X.Subtract(PP, MM);
  #�		v.Y.Add(PP, MM);
  #�		v.Z.Add(Z2, TT2d);
  #�		v.T.Subtract(Z2, TT2d);
  $			return v;
    	};
	projP1xP1.prototype.AddAffine = function(p, q) { return this.$val.AddAffine(p, q); };
	projP1xP1.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element ;(*crypto/ed25519/internal/edwards25519.projP1xP1).SubAffine �@	projP1xP1.ptr.prototype.SubAffine = function(p, q) {
		var MM, PP, TT2d, YminusX, YplusX, Z2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, p, q, v;
		v = this;
  $`		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$4 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$5 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		YplusX = $clone(_tmp, field.Element);
		YminusX = $clone(_tmp$1, field.Element);
		PP = $clone(_tmp$2, field.Element);
		MM = $clone(_tmp$3, field.Element);
		TT2d = $clone(_tmp$4, field.Element);
		Z2 = $clone(_tmp$5, field.Element);
  $�		YplusX.Add(p.y, p.x);
  $�		YminusX.Subtract(p.y, p.x);
  $�		PP.Multiply(YplusX, q.YminusX);
  $�		MM.Multiply(YminusX, q.YplusX);
  %-		TT2d.Multiply(p.t, q.T2d);
  %K		Z2.Add(p.z, p.z);
  %`		v.X.Subtract(PP, MM);
  %x		v.Y.Add(PP, MM);
  %�		v.Z.Subtract(Z2, TT2d);
  %�		v.T.Add(Z2, TT2d);
  %�		return v;
    	};
	projP1xP1.prototype.SubAffine = function(p, q) { return this.$val.SubAffine(p, q); };
	projP1xP1.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element 8(*crypto/ed25519/internal/edwards25519.projP1xP1).Double ��	projP1xP1.ptr.prototype.Double = function(p) {
		var XX, XplusYsq, YY, ZZ2, _tmp, _tmp$1, _tmp$2, _tmp$3, p, v;
		v = this;
  &1		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		XX = $clone(_tmp, field.Element);
		YY = $clone(_tmp$1, field.Element);
		ZZ2 = $clone(_tmp$2, field.Element);
		XplusYsq = $clone(_tmp$3, field.Element);
  &W		XX.Square(p.X);
  &h		YY.Square(p.Y);
  &y		ZZ2.Square(p.Z);
  &�		ZZ2.Add(ZZ2, ZZ2);
  &�		XplusYsq.Add(p.X, p.Y);
  &�		XplusYsq.Square(XplusYsq);
  &�		v.Y.Add(YY, XX);
  &�		v.Z.Subtract(YY, XX);
  '		v.X.Subtract(XplusYsq, v.Y);
  '"		v.T.Subtract(ZZ2, v.Z);
  '<		return v;
    	};
	projP1xP1.prototype.Double = function(p) { return this.$val.Double(p); };
	projP1xP1.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element 4(*crypto/ed25519/internal/edwards25519.Point).Negate �.	Point.ptr.prototype.Negate = function(p) {
		var p, v;
		v = this;
  '�		checkInitialized(new sliceType$1([p]));
  '�		v.x.Negate(p.x);
  '�		v.y.Set(p.y);
  '�		v.z.Set(p.z);
  '�		v.t.Negate(p.t);
  '�		return v;
    	};
	Point.prototype.Negate = function(p) { return this.$val.Negate(p); };
Point*crypto/ed25519/internal/edwards25519.Point5crypto/ed25519/internal/edwards25519.checkInitialized0crypto/ed25519/internal/edwards25519.sliceType$1 3(*crypto/ed25519/internal/edwards25519.Point).Equal �1	Point.ptr.prototype.Equal = function(u) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, t1, t2, t3, t4, u, v;
		v = this;
  (n		checkInitialized(new sliceType$1([v, u]));
  (�		_tmp = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$1 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$2 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		_tmp$3 = new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0));
		t1 = $clone(_tmp, field.Element);
		t2 = $clone(_tmp$1, field.Element);
		t3 = $clone(_tmp$2, field.Element);
		t4 = $clone(_tmp$3, field.Element);
  (�		t1.Multiply(v.x, u.z);
  (�		t2.Multiply(u.x, v.z);
  (�		t3.Multiply(v.y, u.z);
  (�		t4.Multiply(u.y, v.z);
  )		return t1.Equal(t2) & t3.Equal(t4);
    	};
	Point.prototype.Equal = function(u) { return this.$val.Equal(u); };
Point*crypto/ed25519/internal/edwards25519.Point5crypto/ed25519/internal/edwards25519.checkInitialized0crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element 9(*crypto/ed25519/internal/edwards25519.projCached).Select ��	projCached.ptr.prototype.Select = function(a, b, cond) {
		var a, b, cond, v;
		v = this;
  )�		v.YplusX.Select(a.YplusX, b.YplusX, cond);
  *		v.YminusX.Select(a.YminusX, b.YminusX, cond);
  *1		v.Z.Select(a.Z, b.Z, cond);
  *O		v.T2d.Select(a.T2d, b.T2d, cond);
  *s		return v;
    	};
	projCached.prototype.Select = function(a, b, cond) { return this.$val.Select(a, b, cond); };

projCached/crypto/ed25519/internal/edwards25519.projCached ;(*crypto/ed25519/internal/edwards25519.affineCached).Select �g	affineCached.ptr.prototype.Select = function(a, b, cond) {
		var a, b, cond, v;
		v = this;
  +		v.YplusX.Select(a.YplusX, b.YplusX, cond);
  +3		v.YminusX.Select(a.YminusX, b.YminusX, cond);
  +c		v.T2d.Select(a.T2d, b.T2d, cond);
  +�		return v;
    	};
	affineCached.prototype.Select = function(a, b, cond) { return this.$val.Select(a, b, cond); };
affineCached1crypto/ed25519/internal/edwards25519.affineCached :(*crypto/ed25519/internal/edwards25519.projCached).CondNeg ��	projCached.ptr.prototype.CondNeg = function(cond) {
		var cond, v;
		v = this;
  ,		v.YplusX.Swap(v.YminusX, cond);
  ,2		v.T2d.Select(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Negate(v.T2d), v.T2d, cond);
  ,q		return v;
    	};
	projCached.prototype.CondNeg = function(cond) { return this.$val.CondNeg(cond); };

projCached/crypto/ed25519/internal/edwards25519.projCached2crypto/ed25519/internal/edwards25519/field.Element <(*crypto/ed25519/internal/edwards25519.affineCached).CondNeg ��	affineCached.ptr.prototype.CondNeg = function(cond) {
		var cond, v;
		v = this;
  ,�		v.YplusX.Swap(v.YminusX, cond);
  - 		v.T2d.Select(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)).Negate(v.T2d), v.T2d, cond);
  -_		return v;
    	};
	affineCached.prototype.CondNeg = function(cond) { return this.$val.CondNeg(cond); };
affineCached1crypto/ed25519/internal/edwards25519.affineCached2crypto/ed25519/internal/edwards25519/field.Element .crypto/ed25519/internal/edwards25519.NewScalar$crypto/ed25519/internal/edwards25519	NewScalar 	NewScalarr	NewScalar = function() {
  1�		return new Scalar.ptr(arrayType$4.zero());
    	};
	$pkg.NewScalar = NewScalar;
	NewScalar.crypto/ed25519/internal/edwards25519.NewScalar+crypto/ed25519/internal/edwards25519.Scalar0crypto/ed25519/internal/edwards25519.arrayType$4 :(*crypto/ed25519/internal/edwards25519.Scalar).MultiplyAdd ��	Scalar.ptr.prototype.MultiplyAdd = function(x, y, z) {
		var s, x, y, z;
		s = this;
  2v		scMulAdd(s.s, x.s, y.s, z.s);
  2�		return s;
    	};
	Scalar.prototype.MultiplyAdd = function(x, y, z) { return this.$val.MultiplyAdd(x, y, z); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar-crypto/ed25519/internal/edwards25519.scMulAdd 2(*crypto/ed25519/internal/edwards25519.Scalar).Add ��	Scalar.ptr.prototype.Add = function(x, y) {
		var s, x, y;
		s = this;
  3		scMulAdd(s.s, scOne.s, x.s, y.s);
  3<		return s;
    	};
	Scalar.prototype.Add = function(x, y) { return this.$val.Add(x, y); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar-crypto/ed25519/internal/edwards25519.scMulAdd*crypto/ed25519/internal/edwards25519.scOne 7(*crypto/ed25519/internal/edwards25519.Scalar).Subtract ��	Scalar.ptr.prototype.Subtract = function(x, y) {
		var s, x, y;
		s = this;
  3�		scMulAdd(s.s, scMinusOne.s, y.s, x.s);
  3�		return s;
    	};
	Scalar.prototype.Subtract = function(x, y) { return this.$val.Subtract(x, y); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar/crypto/ed25519/internal/edwards25519.scMinusOne-crypto/ed25519/internal/edwards25519.scMulAdd 5(*crypto/ed25519/internal/edwards25519.Scalar).Negate ��	Scalar.ptr.prototype.Negate = function(x) {
		var s, x;
		s = this;
  4o		scMulAdd(s.s, scMinusOne.s, x.s, scZero.s);
  4�		return s;
    	};
	Scalar.prototype.Negate = function(x) { return this.$val.Negate(x); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar/crypto/ed25519/internal/edwards25519.scMinusOne-crypto/ed25519/internal/edwards25519.scMulAdd+crypto/ed25519/internal/edwards25519.scZero 7(*crypto/ed25519/internal/edwards25519.Scalar).Multiply ��	Scalar.ptr.prototype.Multiply = function(x, y) {
		var s, x, y;
		s = this;
  5'		scMulAdd(s.s, x.s, y.s, scZero.s);
  5N		return s;
    	};
	Scalar.prototype.Multiply = function(x, y) { return this.$val.Multiply(x, y); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar-crypto/ed25519/internal/edwards25519.scMulAdd+crypto/ed25519/internal/edwards25519.scZero 2(*crypto/ed25519/internal/edwards25519.Scalar).Set ��	Scalar.ptr.prototype.Set = function(x) {
		var s, x;
		s = this;
  5�		Scalar.copy(s, x);
  5�		return s;
    	};
	Scalar.prototype.Set = function(x) { return this.$val.Set(x); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar >(*crypto/ed25519/internal/edwards25519.Scalar).SetUniformBytes ��	Scalar.ptr.prototype.SetUniformBytes = function(x) {
		var s, wideBytes, x;
		s = this;
    		if (!((x.$length === 64))) {
  6r			$panic(new $String("edwards25519: invalid SetUniformBytes input length"));
    		}
  6�		wideBytes = arrayType$5.zero();
  6�		$copySlice(new sliceType(wideBytes), x);
  6�		scReduce(s.s, wideBytes);
  7 		return s;
    	};
	Scalar.prototype.SetUniformBytes = function(x) { return this.$val.SetUniformBytes(x); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar0crypto/ed25519/internal/edwards25519.arrayType$5-crypto/ed25519/internal/edwards25519.scReduce.crypto/ed25519/internal/edwards25519.sliceType @(*crypto/ed25519/internal/edwards25519.Scalar).SetCanonicalBytes �7	Scalar.ptr.prototype.SetCanonicalBytes = function(x) {
		var s, ss, x;
		s = this;
    		if (!((x.$length === 32))) {
  8;			return [ptrType$1.nil, errors.New("invalid scalar length")];
    		}
  8o		ss = new Scalar.ptr(arrayType$4.zero());
  8�		$copySlice(new sliceType(ss.s), x);
    		if (!isReduced(ss)) {
  8�			return [ptrType$1.nil, errors.New("invalid scalar encoding")];
    		}
  8�		arrayType$4.copy(s.s, ss.s);
  8�		return [s, $ifaceNil];
    	};
	Scalar.prototype.SetCanonicalBytes = function(x) { return this.$val.SetCanonicalBytes(x); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar0crypto/ed25519/internal/edwards25519.arrayType$4.crypto/ed25519/internal/edwards25519.isReduced.crypto/ed25519/internal/edwards25519.ptrType$1.crypto/ed25519/internal/edwards25519.sliceType
errors.New .crypto/ed25519/internal/edwards25519.isReduced$crypto/ed25519/internal/edwards25519	isReduced 	isReduced��	isReduced = function(s) {
		var i, s, x, x$1, x$2, x$3;
  9d		i = 31;
		while (true) {
			if (!(i >= 0)) { break; }
    			if ((x = s.s, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) > (x$1 = scMinusOne.s, ((i < 0 || i >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[i]))) {
  9�				return false;
    			} else if ((x$2 = s.s, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) < (x$3 = scMinusOne.s, ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i]))) {
  9�				return true;
    			}
  9			i = i - (1) >> 0;
    		}
  9�		return true;
    	};
	isReduced.crypto/ed25519/internal/edwards25519.isReduced/crypto/ed25519/internal/edwards25519.scMinusOne C(*crypto/ed25519/internal/edwards25519.Scalar).SetBytesWithClamping �}	Scalar.ptr.prototype.SetBytesWithClamping = function(x) {
		var s, wideBytes, x;
		s = this;
    		if (!((x.$length === 32))) {
  >			$panic(new $String("edwards25519: invalid SetBytesWithClamping input length"));
    		}
  >U		wideBytes = arrayType$5.zero();
  >i		$copySlice(new sliceType(wideBytes), x);
  >�		wideBytes[0] = ((wideBytes[0] & (248)) >>> 0);
  >�		wideBytes[31] = ((wideBytes[31] & (63)) >>> 0);
  >�		wideBytes[31] = ((wideBytes[31] | (64)) >>> 0);
  >�		scReduce(s.s, wideBytes);
  >�		return s;
    	};
	Scalar.prototype.SetBytesWithClamping = function(x) { return this.$val.SetBytesWithClamping(x); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar0crypto/ed25519/internal/edwards25519.arrayType$5-crypto/ed25519/internal/edwards25519.scReduce.crypto/ed25519/internal/edwards25519.sliceType 4(*crypto/ed25519/internal/edwards25519.Scalar).Bytes ��	Scalar.ptr.prototype.Bytes = function() {
		var buf, s;
		s = this;
  ?Q		buf = $makeSlice(sliceType, 32);
  ?j		$copySlice(buf, new sliceType(s.s));
  ?}		return buf;
    	};
	Scalar.prototype.Bytes = function() { return this.$val.Bytes(); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar.crypto/ed25519/internal/edwards25519.sliceType 4(*crypto/ed25519/internal/edwards25519.Scalar).Equal ��	Scalar.ptr.prototype.Equal = function(t) {
		var s, t;
		s = this;
  ?�		return subtle.ConstantTimeCompare(new sliceType(s.s), new sliceType(t.s));
    	};
	Scalar.prototype.Equal = function(t) { return this.$val.Equal(t); };
Scalar+crypto/ed25519/internal/edwards25519.Scalar.crypto/ed25519/internal/edwards25519.sliceType!crypto/subtle.ConstantTimeCompare *crypto/ed25519/internal/edwards25519.load3$crypto/ed25519/internal/edwards25519load3 load3��	load3 = function(in$1) {
		var in$1, r, x, x$1;
  @�		r = (new $Int64(0, (0 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 0])));
  @�		r = (x = $shiftLeft64((new $Int64(0, (1 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 1]))), 8), new $Int64(r.$high | x.$high, (r.$low | x.$low) >>> 0));
  @�		r = (x$1 = $shiftLeft64((new $Int64(0, (2 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 2]))), 16), new $Int64(r.$high | x$1.$high, (r.$low | x$1.$low) >>> 0));
  @�		return r;
    	};
load3*crypto/ed25519/internal/edwards25519.load3 *crypto/ed25519/internal/edwards25519.load4$crypto/ed25519/internal/edwards25519load4 load4�o	load4 = function(in$1) {
		var in$1, r, x, x$1, x$2;
  A&		r = (new $Int64(0, (0 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 0])));
  A9		r = (x = $shiftLeft64((new $Int64(0, (1 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 1]))), 8), new $Int64(r.$high | x.$high, (r.$low | x.$low) >>> 0));
  AQ		r = (x$1 = $shiftLeft64((new $Int64(0, (2 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 2]))), 16), new $Int64(r.$high | x$1.$high, (r.$low | x$1.$low) >>> 0));
  Aj		r = (x$2 = $shiftLeft64((new $Int64(0, (3 >= in$1.$length ? ($throwRuntimeError("index out of range"), undefined) : in$1.$array[in$1.$offset + 3]))), 24), new $Int64(r.$high | x$2.$high, (r.$low | x$2.$low) >>> 0));
  A�		return r;
    	};
load4*crypto/ed25519/internal/edwards25519.load4 -crypto/ed25519/internal/edwards25519.scMulAdd$crypto/ed25519/internal/edwards25519scMulAdd scMulAdd���	scMulAdd = function(s, a, b, c) {
		var a, a0, a1, a10, a11, a2, a3, a4, a5, a6, a7, a8, a9, b, b0, b1, b10, b11, b2, b3, b4, b5, b6, b7, b8, b9, c, c0, c1, c10, c11, c2, c3, c4, c5, c6, c7, c8, c9, carry, s, s0, s1, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s2, s20, s21, s22, s23, s3, s4, s5, s6, s7, s8, s9, x, x$1, x$10, x$100, x$101, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$11, x$110, x$111, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119, x$12, x$120, x$121, x$122, x$123, x$124, x$125, x$126, x$127, x$128, x$129, x$13, x$130, x$131, x$132, x$133, x$134, x$135, x$136, x$137, x$138, x$139, x$14, x$140, x$141, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$15, x$150, x$151, x$152, x$153, x$154, x$155, x$156, x$157, x$158, x$159, x$16, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$17, x$170, x$171, x$172, x$173, x$174, x$175, x$176, x$177, x$178, x$179, x$18, x$180, x$181, x$182, x$183, x$184, x$185, x$186, x$187, x$188, x$189, x$19, x$190, x$191, x$192, x$193, x$194, x$195, x$196, x$197, x$198, x$199, x$2, x$20, x$200, x$201, x$202, x$203, x$204, x$205, x$206, x$207, x$208, x$209, x$21, x$210, x$211, x$212, x$213, x$214, x$215, x$216, x$217, x$218, x$219, x$22, x$220, x$221, x$222, x$223, x$224, x$225, x$226, x$227, x$228, x$229, x$23, x$230, x$231, x$232, x$233, x$234, x$235, x$236, x$237, x$238, x$239, x$24, x$240, x$241, x$242, x$243, x$244, x$245, x$246, x$247, x$248, x$249, x$25, x$250, x$251, x$252, x$253, x$254, x$255, x$256, x$257, x$258, x$259, x$26, x$260, x$261, x$262, x$263, x$264, x$265, x$266, x$267, x$268, x$269, x$27, x$270, x$271, x$272, x$273, x$274, x$275, x$276, x$277, x$278, x$279, x$28, x$280, x$281, x$282, x$283, x$284, x$285, x$286, x$287, x$288, x$289, x$29, x$290, x$291, x$292, x$293, x$294, x$295, x$296, x$297, x$298, x$299, x$3, x$30, x$300, x$301, x$302, x$303, x$304, x$305, x$306, x$307, x$308, x$309, x$31, x$310, x$311, x$312, x$313, x$314, x$315, x$316, x$317, x$318, x$319, x$32, x$320, x$321, x$322, x$323, x$324, x$325, x$326, x$327, x$328, x$329, x$33, x$330, x$331, x$332, x$333, x$334, x$335, x$336, x$337, x$338, x$339, x$34, x$340, x$341, x$342, x$343, x$344, x$345, x$346, x$347, x$348, x$349, x$35, x$350, x$351, x$352, x$353, x$354, x$355, x$356, x$357, x$358, x$359, x$36, x$360, x$361, x$362, x$363, x$364, x$365, x$366, x$367, x$368, x$369, x$37, x$370, x$371, x$372, x$373, x$374, x$375, x$376, x$377, x$378, x$379, x$38, x$380, x$381, x$382, x$383, x$384, x$385, x$386, x$387, x$388, x$389, x$39, x$390, x$391, x$392, x$393, x$394, x$395, x$396, x$397, x$398, x$399, x$4, x$40, x$400, x$401, x$402, x$403, x$404, x$405, x$406, x$407, x$408, x$409, x$41, x$410, x$411, x$412, x$413, x$414, x$415, x$416, x$417, x$418, x$419, x$42, x$420, x$421, x$422, x$423, x$424, x$425, x$426, x$427, x$428, x$429, x$43, x$430, x$431, x$432, x$433, x$434, x$435, x$436, x$437, x$438, x$439, x$44, x$440, x$441, x$442, x$443, x$444, x$445, x$446, x$447, x$448, x$449, x$45, x$450, x$451, x$452, x$453, x$454, x$455, x$456, x$457, x$458, x$459, x$46, x$460, x$461, x$462, x$463, x$464, x$465, x$466, x$467, x$468, x$469, x$47, x$470, x$471, x$472, x$473, x$474, x$475, x$476, x$477, x$478, x$479, x$48, x$480, x$481, x$482, x$483, x$484, x$485, x$486, x$487, x$488, x$489, x$49, x$490, x$491, x$492, x$493, x$494, x$495, x$496, x$497, x$498, x$499, x$5, x$50, x$500, x$501, x$502, x$503, x$504, x$505, x$506, x$507, x$508, x$509, x$51, x$510, x$511, x$512, x$513, x$514, x$515, x$516, x$517, x$518, x$519, x$52, x$520, x$521, x$522, x$523, x$524, x$525, x$526, x$527, x$528, x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$6, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$7, x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$8, x$80, x$81, x$82, x$83, x$84, x$85, x$86, x$87, x$88, x$89, x$9, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99;
  B�		a0 = (x = load3(new sliceType(a)), new $Int64(0 & x.$high, (2097151 & x.$low) >>> 0));
  B�		a1 = (x$1 = $shiftRightInt64(load4($subslice(new sliceType(a), 2)), 5), new $Int64(0 & x$1.$high, (2097151 & x$1.$low) >>> 0));
  B�		a2 = (x$2 = $shiftRightInt64(load3($subslice(new sliceType(a), 5)), 2), new $Int64(0 & x$2.$high, (2097151 & x$2.$low) >>> 0));
  C		a3 = (x$3 = $shiftRightInt64(load4($subslice(new sliceType(a), 7)), 7), new $Int64(0 & x$3.$high, (2097151 & x$3.$low) >>> 0));
  CD		a4 = (x$4 = $shiftRightInt64(load4($subslice(new sliceType(a), 10)), 4), new $Int64(0 & x$4.$high, (2097151 & x$4.$low) >>> 0));
  Cj		a5 = (x$5 = $shiftRightInt64(load3($subslice(new sliceType(a), 13)), 1), new $Int64(0 & x$5.$high, (2097151 & x$5.$low) >>> 0));
  C�		a6 = (x$6 = $shiftRightInt64(load4($subslice(new sliceType(a), 15)), 6), new $Int64(0 & x$6.$high, (2097151 & x$6.$low) >>> 0));
  C�		a7 = (x$7 = $shiftRightInt64(load3($subslice(new sliceType(a), 18)), 3), new $Int64(0 & x$7.$high, (2097151 & x$7.$low) >>> 0));
  C�		a8 = (x$8 = load3($subslice(new sliceType(a), 21)), new $Int64(0 & x$8.$high, (2097151 & x$8.$low) >>> 0));
  C�		a9 = (x$9 = $shiftRightInt64(load4($subslice(new sliceType(a), 23)), 5), new $Int64(0 & x$9.$high, (2097151 & x$9.$low) >>> 0));
  D!		a10 = (x$10 = $shiftRightInt64(load3($subslice(new sliceType(a), 26)), 2), new $Int64(0 & x$10.$high, (2097151 & x$10.$low) >>> 0));
  DH		a11 = $shiftRightInt64(load4($subslice(new sliceType(a), 28)), 7);
  De		b0 = (x$11 = load3(new sliceType(b)), new $Int64(0 & x$11.$high, (2097151 & x$11.$low) >>> 0));
  D�		b1 = (x$12 = $shiftRightInt64(load4($subslice(new sliceType(b), 2)), 5), new $Int64(0 & x$12.$high, (2097151 & x$12.$low) >>> 0));
  D�		b2 = (x$13 = $shiftRightInt64(load3($subslice(new sliceType(b), 5)), 2), new $Int64(0 & x$13.$high, (2097151 & x$13.$low) >>> 0));
  D�		b3 = (x$14 = $shiftRightInt64(load4($subslice(new sliceType(b), 7)), 7), new $Int64(0 & x$14.$high, (2097151 & x$14.$low) >>> 0));
  D�		b4 = (x$15 = $shiftRightInt64(load4($subslice(new sliceType(b), 10)), 4), new $Int64(0 & x$15.$high, (2097151 & x$15.$low) >>> 0));
  E		b5 = (x$16 = $shiftRightInt64(load3($subslice(new sliceType(b), 13)), 1), new $Int64(0 & x$16.$high, (2097151 & x$16.$low) >>> 0));
  E=		b6 = (x$17 = $shiftRightInt64(load4($subslice(new sliceType(b), 15)), 6), new $Int64(0 & x$17.$high, (2097151 & x$17.$low) >>> 0));
  Ec		b7 = (x$18 = $shiftRightInt64(load3($subslice(new sliceType(b), 18)), 3), new $Int64(0 & x$18.$high, (2097151 & x$18.$low) >>> 0));
  E�		b8 = (x$19 = load3($subslice(new sliceType(b), 21)), new $Int64(0 & x$19.$high, (2097151 & x$19.$low) >>> 0));
  E�		b9 = (x$20 = $shiftRightInt64(load4($subslice(new sliceType(b), 23)), 5), new $Int64(0 & x$20.$high, (2097151 & x$20.$low) >>> 0));
  E�		b10 = (x$21 = $shiftRightInt64(load3($subslice(new sliceType(b), 26)), 2), new $Int64(0 & x$21.$high, (2097151 & x$21.$low) >>> 0));
  E�		b11 = $shiftRightInt64(load4($subslice(new sliceType(b), 28)), 7);
  F		c0 = (x$22 = load3(new sliceType(c)), new $Int64(0 & x$22.$high, (2097151 & x$22.$low) >>> 0));
  F/		c1 = (x$23 = $shiftRightInt64(load4($subslice(new sliceType(c), 2)), 5), new $Int64(0 & x$23.$high, (2097151 & x$23.$low) >>> 0));
  FT		c2 = (x$24 = $shiftRightInt64(load3($subslice(new sliceType(c), 5)), 2), new $Int64(0 & x$24.$high, (2097151 & x$24.$low) >>> 0));
  Fy		c3 = (x$25 = $shiftRightInt64(load4($subslice(new sliceType(c), 7)), 7), new $Int64(0 & x$25.$high, (2097151 & x$25.$low) >>> 0));
  F�		c4 = (x$26 = $shiftRightInt64(load4($subslice(new sliceType(c), 10)), 4), new $Int64(0 & x$26.$high, (2097151 & x$26.$low) >>> 0));
  F�		c5 = (x$27 = $shiftRightInt64(load3($subslice(new sliceType(c), 13)), 1), new $Int64(0 & x$27.$high, (2097151 & x$27.$low) >>> 0));
  F�		c6 = (x$28 = $shiftRightInt64(load4($subslice(new sliceType(c), 15)), 6), new $Int64(0 & x$28.$high, (2097151 & x$28.$low) >>> 0));
  G		c7 = (x$29 = $shiftRightInt64(load3($subslice(new sliceType(c), 18)), 3), new $Int64(0 & x$29.$high, (2097151 & x$29.$low) >>> 0));
  G6		c8 = (x$30 = load3($subslice(new sliceType(c), 21)), new $Int64(0 & x$30.$high, (2097151 & x$30.$low) >>> 0));
  GU		c9 = (x$31 = $shiftRightInt64(load4($subslice(new sliceType(c), 23)), 5), new $Int64(0 & x$31.$high, (2097151 & x$31.$low) >>> 0));
  G{		c10 = (x$32 = $shiftRightInt64(load3($subslice(new sliceType(c), 26)), 2), new $Int64(0 & x$32.$high, (2097151 & x$32.$low) >>> 0));
  G�		c11 = $shiftRightInt64(load4($subslice(new sliceType(c), 28)), 7);
  G�		carry = arrayType$6.zero();
  G�		s0 = (x$33 = $mul64(a0, b0), new $Int64(c0.$high + x$33.$high, c0.$low + x$33.$low));
  G�		s1 = (x$34 = (x$35 = $mul64(a0, b1), new $Int64(c1.$high + x$35.$high, c1.$low + x$35.$low)), x$36 = $mul64(a1, b0), new $Int64(x$34.$high + x$36.$high, x$34.$low + x$36.$low));
  H		s2 = (x$37 = (x$38 = (x$39 = $mul64(a0, b2), new $Int64(c2.$high + x$39.$high, c2.$low + x$39.$low)), x$40 = $mul64(a1, b1), new $Int64(x$38.$high + x$40.$high, x$38.$low + x$40.$low)), x$41 = $mul64(a2, b0), new $Int64(x$37.$high + x$41.$high, x$37.$low + x$41.$low));
  H#		s3 = (x$42 = (x$43 = (x$44 = (x$45 = $mul64(a0, b3), new $Int64(c3.$high + x$45.$high, c3.$low + x$45.$low)), x$46 = $mul64(a1, b2), new $Int64(x$44.$high + x$46.$high, x$44.$low + x$46.$low)), x$47 = $mul64(a2, b1), new $Int64(x$43.$high + x$47.$high, x$43.$low + x$47.$low)), x$48 = $mul64(a3, b0), new $Int64(x$42.$high + x$48.$high, x$42.$low + x$48.$low));
  HM		s4 = (x$49 = (x$50 = (x$51 = (x$52 = (x$53 = $mul64(a0, b4), new $Int64(c4.$high + x$53.$high, c4.$low + x$53.$low)), x$54 = $mul64(a1, b3), new $Int64(x$52.$high + x$54.$high, x$52.$low + x$54.$low)), x$55 = $mul64(a2, b2), new $Int64(x$51.$high + x$55.$high, x$51.$low + x$55.$low)), x$56 = $mul64(a3, b1), new $Int64(x$50.$high + x$56.$high, x$50.$low + x$56.$low)), x$57 = $mul64(a4, b0), new $Int64(x$49.$high + x$57.$high, x$49.$low + x$57.$low));
  H		s5 = (x$58 = (x$59 = (x$60 = (x$61 = (x$62 = (x$63 = $mul64(a0, b5), new $Int64(c5.$high + x$63.$high, c5.$low + x$63.$low)), x$64 = $mul64(a1, b4), new $Int64(x$62.$high + x$64.$high, x$62.$low + x$64.$low)), x$65 = $mul64(a2, b3), new $Int64(x$61.$high + x$65.$high, x$61.$low + x$65.$low)), x$66 = $mul64(a3, b2), new $Int64(x$60.$high + x$66.$high, x$60.$low + x$66.$low)), x$67 = $mul64(a4, b1), new $Int64(x$59.$high + x$67.$high, x$59.$low + x$67.$low)), x$68 = $mul64(a5, b0), new $Int64(x$58.$high + x$68.$high, x$58.$low + x$68.$low));
  H�		s6 = (x$69 = (x$70 = (x$71 = (x$72 = (x$73 = (x$74 = (x$75 = $mul64(a0, b6), new $Int64(c6.$high + x$75.$high, c6.$low + x$75.$low)), x$76 = $mul64(a1, b5), new $Int64(x$74.$high + x$76.$high, x$74.$low + x$76.$low)), x$77 = $mul64(a2, b4), new $Int64(x$73.$high + x$77.$high, x$73.$low + x$77.$low)), x$78 = $mul64(a3, b3), new $Int64(x$72.$high + x$78.$high, x$72.$low + x$78.$low)), x$79 = $mul64(a4, b2), new $Int64(x$71.$high + x$79.$high, x$71.$low + x$79.$low)), x$80 = $mul64(a5, b1), new $Int64(x$70.$high + x$80.$high, x$70.$low + x$80.$low)), x$81 = $mul64(a6, b0), new $Int64(x$69.$high + x$81.$high, x$69.$low + x$81.$low));
  H�		s7 = (x$82 = (x$83 = (x$84 = (x$85 = (x$86 = (x$87 = (x$88 = (x$89 = $mul64(a0, b7), new $Int64(c7.$high + x$89.$high, c7.$low + x$89.$low)), x$90 = $mul64(a1, b6), new $Int64(x$88.$high + x$90.$high, x$88.$low + x$90.$low)), x$91 = $mul64(a2, b5), new $Int64(x$87.$high + x$91.$high, x$87.$low + x$91.$low)), x$92 = $mul64(a3, b4), new $Int64(x$86.$high + x$92.$high, x$86.$low + x$92.$low)), x$93 = $mul64(a4, b3), new $Int64(x$85.$high + x$93.$high, x$85.$low + x$93.$low)), x$94 = $mul64(a5, b2), new $Int64(x$84.$high + x$94.$high, x$84.$low + x$94.$low)), x$95 = $mul64(a6, b1), new $Int64(x$83.$high + x$95.$high, x$83.$low + x$95.$low)), x$96 = $mul64(a7, b0), new $Int64(x$82.$high + x$96.$high, x$82.$low + x$96.$low));
  IE		s8 = (x$97 = (x$98 = (x$99 = (x$100 = (x$101 = (x$102 = (x$103 = (x$104 = (x$105 = $mul64(a0, b8), new $Int64(c8.$high + x$105.$high, c8.$low + x$105.$low)), x$106 = $mul64(a1, b7), new $Int64(x$104.$high + x$106.$high, x$104.$low + x$106.$low)), x$107 = $mul64(a2, b6), new $Int64(x$103.$high + x$107.$high, x$103.$low + x$107.$low)), x$108 = $mul64(a3, b5), new $Int64(x$102.$high + x$108.$high, x$102.$low + x$108.$low)), x$109 = $mul64(a4, b4), new $Int64(x$101.$high + x$109.$high, x$101.$low + x$109.$low)), x$110 = $mul64(a5, b3), new $Int64(x$100.$high + x$110.$high, x$100.$low + x$110.$low)), x$111 = $mul64(a6, b2), new $Int64(x$99.$high + x$111.$high, x$99.$low + x$111.$low)), x$112 = $mul64(a7, b1), new $Int64(x$98.$high + x$112.$high, x$98.$low + x$112.$low)), x$113 = $mul64(a8, b0), new $Int64(x$97.$high + x$113.$high, x$97.$low + x$113.$low));
  I�		s9 = (x$114 = (x$115 = (x$116 = (x$117 = (x$118 = (x$119 = (x$120 = (x$121 = (x$122 = (x$123 = $mul64(a0, b9), new $Int64(c9.$high + x$123.$high, c9.$low + x$123.$low)), x$124 = $mul64(a1, b8), new $Int64(x$122.$high + x$124.$high, x$122.$low + x$124.$low)), x$125 = $mul64(a2, b7), new $Int64(x$121.$high + x$125.$high, x$121.$low + x$125.$low)), x$126 = $mul64(a3, b6), new $Int64(x$120.$high + x$126.$high, x$120.$low + x$126.$low)), x$127 = $mul64(a4, b5), new $Int64(x$119.$high + x$127.$high, x$119.$low + x$127.$low)), x$128 = $mul64(a5, b4), new $Int64(x$118.$high + x$128.$high, x$118.$low + x$128.$low)), x$129 = $mul64(a6, b3), new $Int64(x$117.$high + x$129.$high, x$117.$low + x$129.$low)), x$130 = $mul64(a7, b2), new $Int64(x$116.$high + x$130.$high, x$116.$low + x$130.$low)), x$131 = $mul64(a8, b1), new $Int64(x$115.$high + x$131.$high, x$115.$low + x$131.$low)), x$132 = $mul64(a9, b0), new $Int64(x$114.$high + x$132.$high, x$114.$low + x$132.$low));
  I�		s10 = (x$133 = (x$134 = (x$135 = (x$136 = (x$137 = (x$138 = (x$139 = (x$140 = (x$141 = (x$142 = (x$143 = $mul64(a0, b10), new $Int64(c10.$high + x$143.$high, c10.$low + x$143.$low)), x$144 = $mul64(a1, b9), new $Int64(x$142.$high + x$144.$high, x$142.$low + x$144.$low)), x$145 = $mul64(a2, b8), new $Int64(x$141.$high + x$145.$high, x$141.$low + x$145.$low)), x$146 = $mul64(a3, b7), new $Int64(x$140.$high + x$146.$high, x$140.$low + x$146.$low)), x$147 = $mul64(a4, b6), new $Int64(x$139.$high + x$147.$high, x$139.$low + x$147.$low)), x$148 = $mul64(a5, b5), new $Int64(x$138.$high + x$148.$high, x$138.$low + x$148.$low)), x$149 = $mul64(a6, b4), new $Int64(x$137.$high + x$149.$high, x$137.$low + x$149.$low)), x$150 = $mul64(a7, b3), new $Int64(x$136.$high + x$150.$high, x$136.$low + x$150.$low)), x$151 = $mul64(a8, b2), new $Int64(x$135.$high + x$151.$high, x$135.$low + x$151.$low)), x$152 = $mul64(a9, b1), new $Int64(x$134.$high + x$152.$high, x$134.$low + x$152.$low)), x$153 = $mul64(a10, b0), new $Int64(x$133.$high + x$153.$high, x$133.$low + x$153.$low));
  JW		s11 = (x$154 = (x$155 = (x$156 = (x$157 = (x$158 = (x$159 = (x$160 = (x$161 = (x$162 = (x$163 = (x$164 = (x$165 = $mul64(a0, b11), new $Int64(c11.$high + x$165.$high, c11.$low + x$165.$low)), x$166 = $mul64(a1, b10), new $Int64(x$164.$high + x$166.$high, x$164.$low + x$166.$low)), x$167 = $mul64(a2, b9), new $Int64(x$163.$high + x$167.$high, x$163.$low + x$167.$low)), x$168 = $mul64(a3, b8), new $Int64(x$162.$high + x$168.$high, x$162.$low + x$168.$low)), x$169 = $mul64(a4, b7), new $Int64(x$161.$high + x$169.$high, x$161.$low + x$169.$low)), x$170 = $mul64(a5, b6), new $Int64(x$160.$high + x$170.$high, x$160.$low + x$170.$low)), x$171 = $mul64(a6, b5), new $Int64(x$159.$high + x$171.$high, x$159.$low + x$171.$low)), x$172 = $mul64(a7, b4), new $Int64(x$158.$high + x$172.$high, x$158.$low + x$172.$low)), x$173 = $mul64(a8, b3), new $Int64(x$157.$high + x$173.$high, x$157.$low + x$173.$low)), x$174 = $mul64(a9, b2), new $Int64(x$156.$high + x$174.$high, x$156.$low + x$174.$low)), x$175 = $mul64(a10, b1), new $Int64(x$155.$high + x$175.$high, x$155.$low + x$175.$low)), x$176 = $mul64(a11, b0), new $Int64(x$154.$high + x$176.$high, x$154.$low + x$176.$low));
  J�		s12 = (x$177 = (x$178 = (x$179 = (x$180 = (x$181 = (x$182 = (x$183 = (x$184 = (x$185 = (x$186 = $mul64(a1, b11), x$187 = $mul64(a2, b10), new $Int64(x$186.$high + x$187.$high, x$186.$low + x$187.$low)), x$188 = $mul64(a3, b9), new $Int64(x$185.$high + x$188.$high, x$185.$low + x$188.$low)), x$189 = $mul64(a4, b8), new $Int64(x$184.$high + x$189.$high, x$184.$low + x$189.$low)), x$190 = $mul64(a5, b7), new $Int64(x$183.$high + x$190.$high, x$183.$low + x$190.$low)), x$191 = $mul64(a6, b6), new $Int64(x$182.$high + x$191.$high, x$182.$low + x$191.$low)), x$192 = $mul64(a7, b5), new $Int64(x$181.$high + x$192.$high, x$181.$low + x$192.$low)), x$193 = $mul64(a8, b4), new $Int64(x$180.$high + x$193.$high, x$180.$low + x$193.$low)), x$194 = $mul64(a9, b3), new $Int64(x$179.$high + x$194.$high, x$179.$low + x$194.$low)), x$195 = $mul64(a10, b2), new $Int64(x$178.$high + x$195.$high, x$178.$low + x$195.$low)), x$196 = $mul64(a11, b1), new $Int64(x$177.$high + x$196.$high, x$177.$low + x$196.$low));
  K)		s13 = (x$197 = (x$198 = (x$199 = (x$200 = (x$201 = (x$202 = (x$203 = (x$204 = (x$205 = $mul64(a2, b11), x$206 = $mul64(a3, b10), new $Int64(x$205.$high + x$206.$high, x$205.$low + x$206.$low)), x$207 = $mul64(a4, b9), new $Int64(x$204.$high + x$207.$high, x$204.$low + x$207.$low)), x$208 = $mul64(a5, b8), new $Int64(x$203.$high + x$208.$high, x$203.$low + x$208.$low)), x$209 = $mul64(a6, b7), new $Int64(x$202.$high + x$209.$high, x$202.$low + x$209.$low)), x$210 = $mul64(a7, b6), new $Int64(x$201.$high + x$210.$high, x$201.$low + x$210.$low)), x$211 = $mul64(a8, b5), new $Int64(x$200.$high + x$211.$high, x$200.$low + x$211.$low)), x$212 = $mul64(a9, b4), new $Int64(x$199.$high + x$212.$high, x$199.$low + x$212.$low)), x$213 = $mul64(a10, b3), new $Int64(x$198.$high + x$213.$high, x$198.$low + x$213.$low)), x$214 = $mul64(a11, b2), new $Int64(x$197.$high + x$214.$high, x$197.$low + x$214.$low));
  K�		s14 = (x$215 = (x$216 = (x$217 = (x$218 = (x$219 = (x$220 = (x$221 = (x$222 = $mul64(a3, b11), x$223 = $mul64(a4, b10), new $Int64(x$222.$high + x$223.$high, x$222.$low + x$223.$low)), x$224 = $mul64(a5, b9), new $Int64(x$221.$high + x$224.$high, x$221.$low + x$224.$low)), x$225 = $mul64(a6, b8), new $Int64(x$220.$high + x$225.$high, x$220.$low + x$225.$low)), x$226 = $mul64(a7, b7), new $Int64(x$219.$high + x$226.$high, x$219.$low + x$226.$low)), x$227 = $mul64(a8, b6), new $Int64(x$218.$high + x$227.$high, x$218.$low + x$227.$low)), x$228 = $mul64(a9, b5), new $Int64(x$217.$high + x$228.$high, x$217.$low + x$228.$low)), x$229 = $mul64(a10, b4), new $Int64(x$216.$high + x$229.$high, x$216.$low + x$229.$low)), x$230 = $mul64(a11, b3), new $Int64(x$215.$high + x$230.$high, x$215.$low + x$230.$low));
  K�		s15 = (x$231 = (x$232 = (x$233 = (x$234 = (x$235 = (x$236 = (x$237 = $mul64(a4, b11), x$238 = $mul64(a5, b10), new $Int64(x$237.$high + x$238.$high, x$237.$low + x$238.$low)), x$239 = $mul64(a6, b9), new $Int64(x$236.$high + x$239.$high, x$236.$low + x$239.$low)), x$240 = $mul64(a7, b8), new $Int64(x$235.$high + x$240.$high, x$235.$low + x$240.$low)), x$241 = $mul64(a8, b7), new $Int64(x$234.$high + x$241.$high, x$234.$low + x$241.$low)), x$242 = $mul64(a9, b6), new $Int64(x$233.$high + x$242.$high, x$233.$low + x$242.$low)), x$243 = $mul64(a10, b5), new $Int64(x$232.$high + x$243.$high, x$232.$low + x$243.$low)), x$244 = $mul64(a11, b4), new $Int64(x$231.$high + x$244.$high, x$231.$low + x$244.$low));
  L		s16 = (x$245 = (x$246 = (x$247 = (x$248 = (x$249 = (x$250 = $mul64(a5, b11), x$251 = $mul64(a6, b10), new $Int64(x$250.$high + x$251.$high, x$250.$low + x$251.$low)), x$252 = $mul64(a7, b9), new $Int64(x$249.$high + x$252.$high, x$249.$low + x$252.$low)), x$253 = $mul64(a8, b8), new $Int64(x$248.$high + x$253.$high, x$248.$low + x$253.$low)), x$254 = $mul64(a9, b7), new $Int64(x$247.$high + x$254.$high, x$247.$low + x$254.$low)), x$255 = $mul64(a10, b6), new $Int64(x$246.$high + x$255.$high, x$246.$low + x$255.$low)), x$256 = $mul64(a11, b5), new $Int64(x$245.$high + x$256.$high, x$245.$low + x$256.$low));
  La		s17 = (x$257 = (x$258 = (x$259 = (x$260 = (x$261 = $mul64(a6, b11), x$262 = $mul64(a7, b10), new $Int64(x$261.$high + x$262.$high, x$261.$low + x$262.$low)), x$263 = $mul64(a8, b9), new $Int64(x$260.$high + x$263.$high, x$260.$low + x$263.$low)), x$264 = $mul64(a9, b8), new $Int64(x$259.$high + x$264.$high, x$259.$low + x$264.$low)), x$265 = $mul64(a10, b7), new $Int64(x$258.$high + x$265.$high, x$258.$low + x$265.$low)), x$266 = $mul64(a11, b6), new $Int64(x$257.$high + x$266.$high, x$257.$low + x$266.$low));
  L�		s18 = (x$267 = (x$268 = (x$269 = (x$270 = $mul64(a7, b11), x$271 = $mul64(a8, b10), new $Int64(x$270.$high + x$271.$high, x$270.$low + x$271.$low)), x$272 = $mul64(a9, b9), new $Int64(x$269.$high + x$272.$high, x$269.$low + x$272.$low)), x$273 = $mul64(a10, b8), new $Int64(x$268.$high + x$273.$high, x$268.$low + x$273.$low)), x$274 = $mul64(a11, b7), new $Int64(x$267.$high + x$274.$high, x$267.$low + x$274.$low));
  L�		s19 = (x$275 = (x$276 = (x$277 = $mul64(a8, b11), x$278 = $mul64(a9, b10), new $Int64(x$277.$high + x$278.$high, x$277.$low + x$278.$low)), x$279 = $mul64(a10, b9), new $Int64(x$276.$high + x$279.$high, x$276.$low + x$279.$low)), x$280 = $mul64(a11, b8), new $Int64(x$275.$high + x$280.$high, x$275.$low + x$280.$low));
  L�		s20 = (x$281 = (x$282 = $mul64(a9, b11), x$283 = $mul64(a10, b10), new $Int64(x$282.$high + x$283.$high, x$282.$low + x$283.$low)), x$284 = $mul64(a11, b9), new $Int64(x$281.$high + x$284.$high, x$281.$low + x$284.$low));
  M		s21 = (x$285 = $mul64(a10, b11), x$286 = $mul64(a11, b10), new $Int64(x$285.$high + x$286.$high, x$285.$low + x$286.$low));
  M3		s22 = $mul64(a11, b11);
  ME		s23 = new $Int64(0, 0);
  MW		carry[0] = $shiftRightInt64((new $Int64(s0.$high + 0, s0.$low + 1048576)), 21);
  Mz		s1 = (x$287 = carry[0], new $Int64(s1.$high + x$287.$high, s1.$low + x$287.$low));
  M�		s0 = (x$288 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$288.$high, s0.$low - x$288.$low));
  M�		carry[2] = $shiftRightInt64((new $Int64(s2.$high + 0, s2.$low + 1048576)), 21);
  M�		s3 = (x$289 = carry[2], new $Int64(s3.$high + x$289.$high, s3.$low + x$289.$low));
  M�		s2 = (x$290 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$290.$high, s2.$low - x$290.$low));
  M�		carry[4] = $shiftRightInt64((new $Int64(s4.$high + 0, s4.$low + 1048576)), 21);
  N		s5 = (x$291 = carry[4], new $Int64(s5.$high + x$291.$high, s5.$low + x$291.$low));
  N		s4 = (x$292 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$292.$high, s4.$low - x$292.$low));
  N2		carry[6] = $shiftRightInt64((new $Int64(s6.$high + 0, s6.$low + 1048576)), 21);
  NU		s7 = (x$293 = carry[6], new $Int64(s7.$high + x$293.$high, s7.$low + x$293.$low));
  Ne		s6 = (x$294 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$294.$high, s6.$low - x$294.$low));
  N{		carry[8] = $shiftRightInt64((new $Int64(s8.$high + 0, s8.$low + 1048576)), 21);
  N�		s9 = (x$295 = carry[8], new $Int64(s9.$high + x$295.$high, s9.$low + x$295.$low));
  N�		s8 = (x$296 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$296.$high, s8.$low - x$296.$low));
  N�		carry[10] = $shiftRightInt64((new $Int64(s10.$high + 0, s10.$low + 1048576)), 21);
  N�		s11 = (x$297 = carry[10], new $Int64(s11.$high + x$297.$high, s11.$low + x$297.$low));
  N�		s10 = (x$298 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$298.$high, s10.$low - x$298.$low));
  O		carry[12] = $shiftRightInt64((new $Int64(s12.$high + 0, s12.$low + 1048576)), 21);
  O8		s13 = (x$299 = carry[12], new $Int64(s13.$high + x$299.$high, s13.$low + x$299.$low));
  OJ		s12 = (x$300 = $shiftLeft64(carry[12], 21), new $Int64(s12.$high - x$300.$high, s12.$low - x$300.$low));
  Ob		carry[14] = $shiftRightInt64((new $Int64(s14.$high + 0, s14.$low + 1048576)), 21);
  O�		s15 = (x$301 = carry[14], new $Int64(s15.$high + x$301.$high, s15.$low + x$301.$low));
  O�		s14 = (x$302 = $shiftLeft64(carry[14], 21), new $Int64(s14.$high - x$302.$high, s14.$low - x$302.$low));
  O�		carry[16] = $shiftRightInt64((new $Int64(s16.$high + 0, s16.$low + 1048576)), 21);
  O�		s17 = (x$303 = carry[16], new $Int64(s17.$high + x$303.$high, s17.$low + x$303.$low));
  O�		s16 = (x$304 = $shiftLeft64(carry[16], 21), new $Int64(s16.$high - x$304.$high, s16.$low - x$304.$low));
  P 		carry[18] = $shiftRightInt64((new $Int64(s18.$high + 0, s18.$low + 1048576)), 21);
  P%		s19 = (x$305 = carry[18], new $Int64(s19.$high + x$305.$high, s19.$low + x$305.$low));
  P7		s18 = (x$306 = $shiftLeft64(carry[18], 21), new $Int64(s18.$high - x$306.$high, s18.$low - x$306.$low));
  PO		carry[20] = $shiftRightInt64((new $Int64(s20.$high + 0, s20.$low + 1048576)), 21);
  Pt		s21 = (x$307 = carry[20], new $Int64(s21.$high + x$307.$high, s21.$low + x$307.$low));
  P�		s20 = (x$308 = $shiftLeft64(carry[20], 21), new $Int64(s20.$high - x$308.$high, s20.$low - x$308.$low));
  P�		carry[22] = $shiftRightInt64((new $Int64(s22.$high + 0, s22.$low + 1048576)), 21);
  P�		s23 = (x$309 = carry[22], new $Int64(s23.$high + x$309.$high, s23.$low + x$309.$low));
  P�		s22 = (x$310 = $shiftLeft64(carry[22], 21), new $Int64(s22.$high - x$310.$high, s22.$low - x$310.$low));
  P�		carry[1] = $shiftRightInt64((new $Int64(s1.$high + 0, s1.$low + 1048576)), 21);
  Q		s2 = (x$311 = carry[1], new $Int64(s2.$high + x$311.$high, s2.$low + x$311.$low));
  Q!		s1 = (x$312 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$312.$high, s1.$low - x$312.$low));
  Q7		carry[3] = $shiftRightInt64((new $Int64(s3.$high + 0, s3.$low + 1048576)), 21);
  QZ		s4 = (x$313 = carry[3], new $Int64(s4.$high + x$313.$high, s4.$low + x$313.$low));
  Qj		s3 = (x$314 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$314.$high, s3.$low - x$314.$low));
  Q�		carry[5] = $shiftRightInt64((new $Int64(s5.$high + 0, s5.$low + 1048576)), 21);
  Q�		s6 = (x$315 = carry[5], new $Int64(s6.$high + x$315.$high, s6.$low + x$315.$low));
  Q�		s5 = (x$316 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$316.$high, s5.$low - x$316.$low));
  Q�		carry[7] = $shiftRightInt64((new $Int64(s7.$high + 0, s7.$low + 1048576)), 21);
  Q�		s8 = (x$317 = carry[7], new $Int64(s8.$high + x$317.$high, s8.$low + x$317.$low));
  Q�		s7 = (x$318 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$318.$high, s7.$low - x$318.$low));
  R		carry[9] = $shiftRightInt64((new $Int64(s9.$high + 0, s9.$low + 1048576)), 21);
  R5		s10 = (x$319 = carry[9], new $Int64(s10.$high + x$319.$high, s10.$low + x$319.$low));
  RF		s9 = (x$320 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$320.$high, s9.$low - x$320.$low));
  R\		carry[11] = $shiftRightInt64((new $Int64(s11.$high + 0, s11.$low + 1048576)), 21);
  R�		s12 = (x$321 = carry[11], new $Int64(s12.$high + x$321.$high, s12.$low + x$321.$low));
  R�		s11 = (x$322 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$322.$high, s11.$low - x$322.$low));
  R�		carry[13] = $shiftRightInt64((new $Int64(s13.$high + 0, s13.$low + 1048576)), 21);
  R�		s14 = (x$323 = carry[13], new $Int64(s14.$high + x$323.$high, s14.$low + x$323.$low));
  R�		s13 = (x$324 = $shiftLeft64(carry[13], 21), new $Int64(s13.$high - x$324.$high, s13.$low - x$324.$low));
  R�		carry[15] = $shiftRightInt64((new $Int64(s15.$high + 0, s15.$low + 1048576)), 21);
  S		s16 = (x$325 = carry[15], new $Int64(s16.$high + x$325.$high, s16.$low + x$325.$low));
  S1		s15 = (x$326 = $shiftLeft64(carry[15], 21), new $Int64(s15.$high - x$326.$high, s15.$low - x$326.$low));
  SI		carry[17] = $shiftRightInt64((new $Int64(s17.$high + 0, s17.$low + 1048576)), 21);
  Sn		s18 = (x$327 = carry[17], new $Int64(s18.$high + x$327.$high, s18.$low + x$327.$low));
  S�		s17 = (x$328 = $shiftLeft64(carry[17], 21), new $Int64(s17.$high - x$328.$high, s17.$low - x$328.$low));
  S�		carry[19] = $shiftRightInt64((new $Int64(s19.$high + 0, s19.$low + 1048576)), 21);
  S�		s20 = (x$329 = carry[19], new $Int64(s20.$high + x$329.$high, s20.$low + x$329.$low));
  S�		s19 = (x$330 = $shiftLeft64(carry[19], 21), new $Int64(s19.$high - x$330.$high, s19.$low - x$330.$low));
  S�		carry[21] = $shiftRightInt64((new $Int64(s21.$high + 0, s21.$low + 1048576)), 21);
  T		s22 = (x$331 = carry[21], new $Int64(s22.$high + x$331.$high, s22.$low + x$331.$low));
  T		s21 = (x$332 = $shiftLeft64(carry[21], 21), new $Int64(s21.$high - x$332.$high, s21.$low - x$332.$low));
  T7		s11 = (x$333 = $mul64(s23, new $Int64(0, 666643)), new $Int64(s11.$high + x$333.$high, s11.$low + x$333.$low));
  TL		s12 = (x$334 = $mul64(s23, new $Int64(0, 470296)), new $Int64(s12.$high + x$334.$high, s12.$low + x$334.$low));
  Ta		s13 = (x$335 = $mul64(s23, new $Int64(0, 654183)), new $Int64(s13.$high + x$335.$high, s13.$low + x$335.$low));
  Tv		s14 = (x$336 = $mul64(s23, new $Int64(0, 997805)), new $Int64(s14.$high - x$336.$high, s14.$low - x$336.$low));
  T�		s15 = (x$337 = $mul64(s23, new $Int64(0, 136657)), new $Int64(s15.$high + x$337.$high, s15.$low + x$337.$low));
  T�		s16 = (x$338 = $mul64(s23, new $Int64(0, 683901)), new $Int64(s16.$high - x$338.$high, s16.$low - x$338.$low));
  T�		s23 = new $Int64(0, 0);
  T�		s10 = (x$339 = $mul64(s22, new $Int64(0, 666643)), new $Int64(s10.$high + x$339.$high, s10.$low + x$339.$low));
  T�		s11 = (x$340 = $mul64(s22, new $Int64(0, 470296)), new $Int64(s11.$high + x$340.$high, s11.$low + x$340.$low));
  T�		s12 = (x$341 = $mul64(s22, new $Int64(0, 654183)), new $Int64(s12.$high + x$341.$high, s12.$low + x$341.$low));
  T�		s13 = (x$342 = $mul64(s22, new $Int64(0, 997805)), new $Int64(s13.$high - x$342.$high, s13.$low - x$342.$low));
  U		s14 = (x$343 = $mul64(s22, new $Int64(0, 136657)), new $Int64(s14.$high + x$343.$high, s14.$low + x$343.$low));
  U(		s15 = (x$344 = $mul64(s22, new $Int64(0, 683901)), new $Int64(s15.$high - x$344.$high, s15.$low - x$344.$low));
  U=		s22 = new $Int64(0, 0);
  UG		s9 = (x$345 = $mul64(s21, new $Int64(0, 666643)), new $Int64(s9.$high + x$345.$high, s9.$low + x$345.$low));
  U[		s10 = (x$346 = $mul64(s21, new $Int64(0, 470296)), new $Int64(s10.$high + x$346.$high, s10.$low + x$346.$low));
  Up		s11 = (x$347 = $mul64(s21, new $Int64(0, 654183)), new $Int64(s11.$high + x$347.$high, s11.$low + x$347.$low));
  U�		s12 = (x$348 = $mul64(s21, new $Int64(0, 997805)), new $Int64(s12.$high - x$348.$high, s12.$low - x$348.$low));
  U�		s13 = (x$349 = $mul64(s21, new $Int64(0, 136657)), new $Int64(s13.$high + x$349.$high, s13.$low + x$349.$low));
  U�		s14 = (x$350 = $mul64(s21, new $Int64(0, 683901)), new $Int64(s14.$high - x$350.$high, s14.$low - x$350.$low));
  U�		s21 = new $Int64(0, 0);
  U�		s8 = (x$351 = $mul64(s20, new $Int64(0, 666643)), new $Int64(s8.$high + x$351.$high, s8.$low + x$351.$low));
  U�		s9 = (x$352 = $mul64(s20, new $Int64(0, 470296)), new $Int64(s9.$high + x$352.$high, s9.$low + x$352.$low));
  U�		s10 = (x$353 = $mul64(s20, new $Int64(0, 654183)), new $Int64(s10.$high + x$353.$high, s10.$low + x$353.$low));
  V		s11 = (x$354 = $mul64(s20, new $Int64(0, 997805)), new $Int64(s11.$high - x$354.$high, s11.$low - x$354.$low));
  V 		s12 = (x$355 = $mul64(s20, new $Int64(0, 136657)), new $Int64(s12.$high + x$355.$high, s12.$low + x$355.$low));
  V5		s13 = (x$356 = $mul64(s20, new $Int64(0, 683901)), new $Int64(s13.$high - x$356.$high, s13.$low - x$356.$low));
  VJ		s20 = new $Int64(0, 0);
  VT		s7 = (x$357 = $mul64(s19, new $Int64(0, 666643)), new $Int64(s7.$high + x$357.$high, s7.$low + x$357.$low));
  Vh		s8 = (x$358 = $mul64(s19, new $Int64(0, 470296)), new $Int64(s8.$high + x$358.$high, s8.$low + x$358.$low));
  V|		s9 = (x$359 = $mul64(s19, new $Int64(0, 654183)), new $Int64(s9.$high + x$359.$high, s9.$low + x$359.$low));
  V�		s10 = (x$360 = $mul64(s19, new $Int64(0, 997805)), new $Int64(s10.$high - x$360.$high, s10.$low - x$360.$low));
  V�		s11 = (x$361 = $mul64(s19, new $Int64(0, 136657)), new $Int64(s11.$high + x$361.$high, s11.$low + x$361.$low));
  V�		s12 = (x$362 = $mul64(s19, new $Int64(0, 683901)), new $Int64(s12.$high - x$362.$high, s12.$low - x$362.$low));
  V�		s19 = new $Int64(0, 0);
  V�		s6 = (x$363 = $mul64(s18, new $Int64(0, 666643)), new $Int64(s6.$high + x$363.$high, s6.$low + x$363.$low));
  V�		s7 = (x$364 = $mul64(s18, new $Int64(0, 470296)), new $Int64(s7.$high + x$364.$high, s7.$low + x$364.$low));
  W		s8 = (x$365 = $mul64(s18, new $Int64(0, 654183)), new $Int64(s8.$high + x$365.$high, s8.$low + x$365.$low));
  W		s9 = (x$366 = $mul64(s18, new $Int64(0, 997805)), new $Int64(s9.$high - x$366.$high, s9.$low - x$366.$low));
  W)		s10 = (x$367 = $mul64(s18, new $Int64(0, 136657)), new $Int64(s10.$high + x$367.$high, s10.$low + x$367.$low));
  W>		s11 = (x$368 = $mul64(s18, new $Int64(0, 683901)), new $Int64(s11.$high - x$368.$high, s11.$low - x$368.$low));
  WS		s18 = new $Int64(0, 0);
  W]		carry[6] = $shiftRightInt64((new $Int64(s6.$high + 0, s6.$low + 1048576)), 21);
  W�		s7 = (x$369 = carry[6], new $Int64(s7.$high + x$369.$high, s7.$low + x$369.$low));
  W�		s6 = (x$370 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$370.$high, s6.$low - x$370.$low));
  W�		carry[8] = $shiftRightInt64((new $Int64(s8.$high + 0, s8.$low + 1048576)), 21);
  W�		s9 = (x$371 = carry[8], new $Int64(s9.$high + x$371.$high, s9.$low + x$371.$low));
  W�		s8 = (x$372 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$372.$high, s8.$low - x$372.$low));
  W�		carry[10] = $shiftRightInt64((new $Int64(s10.$high + 0, s10.$low + 1048576)), 21);
  X		s11 = (x$373 = carry[10], new $Int64(s11.$high + x$373.$high, s11.$low + x$373.$low));
  X&		s10 = (x$374 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$374.$high, s10.$low - x$374.$low));
  X>		carry[12] = $shiftRightInt64((new $Int64(s12.$high + 0, s12.$low + 1048576)), 21);
  Xc		s13 = (x$375 = carry[12], new $Int64(s13.$high + x$375.$high, s13.$low + x$375.$low));
  Xu		s12 = (x$376 = $shiftLeft64(carry[12], 21), new $Int64(s12.$high - x$376.$high, s12.$low - x$376.$low));
  X�		carry[14] = $shiftRightInt64((new $Int64(s14.$high + 0, s14.$low + 1048576)), 21);
  X�		s15 = (x$377 = carry[14], new $Int64(s15.$high + x$377.$high, s15.$low + x$377.$low));
  X�		s14 = (x$378 = $shiftLeft64(carry[14], 21), new $Int64(s14.$high - x$378.$high, s14.$low - x$378.$low));
  X�		carry[16] = $shiftRightInt64((new $Int64(s16.$high + 0, s16.$low + 1048576)), 21);
  Y		s17 = (x$379 = carry[16], new $Int64(s17.$high + x$379.$high, s17.$low + x$379.$low));
  Y		s16 = (x$380 = $shiftLeft64(carry[16], 21), new $Int64(s16.$high - x$380.$high, s16.$low - x$380.$low));
  Y,		carry[7] = $shiftRightInt64((new $Int64(s7.$high + 0, s7.$low + 1048576)), 21);
  YO		s8 = (x$381 = carry[7], new $Int64(s8.$high + x$381.$high, s8.$low + x$381.$low));
  Y_		s7 = (x$382 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$382.$high, s7.$low - x$382.$low));
  Yu		carry[9] = $shiftRightInt64((new $Int64(s9.$high + 0, s9.$low + 1048576)), 21);
  Y�		s10 = (x$383 = carry[9], new $Int64(s10.$high + x$383.$high, s10.$low + x$383.$low));
  Y�		s9 = (x$384 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$384.$high, s9.$low - x$384.$low));
  Y�		carry[11] = $shiftRightInt64((new $Int64(s11.$high + 0, s11.$low + 1048576)), 21);
  Y�		s12 = (x$385 = carry[11], new $Int64(s12.$high + x$385.$high, s12.$low + x$385.$low));
  Y�		s11 = (x$386 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$386.$high, s11.$low - x$386.$low));
  Z		carry[13] = $shiftRightInt64((new $Int64(s13.$high + 0, s13.$low + 1048576)), 21);
  Z3		s14 = (x$387 = carry[13], new $Int64(s14.$high + x$387.$high, s14.$low + x$387.$low));
  ZE		s13 = (x$388 = $shiftLeft64(carry[13], 21), new $Int64(s13.$high - x$388.$high, s13.$low - x$388.$low));
  Z]		carry[15] = $shiftRightInt64((new $Int64(s15.$high + 0, s15.$low + 1048576)), 21);
  Z�		s16 = (x$389 = carry[15], new $Int64(s16.$high + x$389.$high, s16.$low + x$389.$low));
  Z�		s15 = (x$390 = $shiftLeft64(carry[15], 21), new $Int64(s15.$high - x$390.$high, s15.$low - x$390.$low));
  Z�		s5 = (x$391 = $mul64(s17, new $Int64(0, 666643)), new $Int64(s5.$high + x$391.$high, s5.$low + x$391.$low));
  Z�		s6 = (x$392 = $mul64(s17, new $Int64(0, 470296)), new $Int64(s6.$high + x$392.$high, s6.$low + x$392.$low));
  Z�		s7 = (x$393 = $mul64(s17, new $Int64(0, 654183)), new $Int64(s7.$high + x$393.$high, s7.$low + x$393.$low));
  Z�		s8 = (x$394 = $mul64(s17, new $Int64(0, 997805)), new $Int64(s8.$high - x$394.$high, s8.$low - x$394.$low));
  Z�		s9 = (x$395 = $mul64(s17, new $Int64(0, 136657)), new $Int64(s9.$high + x$395.$high, s9.$low + x$395.$low));
  [		s10 = (x$396 = $mul64(s17, new $Int64(0, 683901)), new $Int64(s10.$high - x$396.$high, s10.$low - x$396.$low));
  [&		s17 = new $Int64(0, 0);
  [0		s4 = (x$397 = $mul64(s16, new $Int64(0, 666643)), new $Int64(s4.$high + x$397.$high, s4.$low + x$397.$low));
  [D		s5 = (x$398 = $mul64(s16, new $Int64(0, 470296)), new $Int64(s5.$high + x$398.$high, s5.$low + x$398.$low));
  [X		s6 = (x$399 = $mul64(s16, new $Int64(0, 654183)), new $Int64(s6.$high + x$399.$high, s6.$low + x$399.$low));
  [l		s7 = (x$400 = $mul64(s16, new $Int64(0, 997805)), new $Int64(s7.$high - x$400.$high, s7.$low - x$400.$low));
  [�		s8 = (x$401 = $mul64(s16, new $Int64(0, 136657)), new $Int64(s8.$high + x$401.$high, s8.$low + x$401.$low));
  [�		s9 = (x$402 = $mul64(s16, new $Int64(0, 683901)), new $Int64(s9.$high - x$402.$high, s9.$low - x$402.$low));
  [�		s16 = new $Int64(0, 0);
  [�		s3 = (x$403 = $mul64(s15, new $Int64(0, 666643)), new $Int64(s3.$high + x$403.$high, s3.$low + x$403.$low));
  [�		s4 = (x$404 = $mul64(s15, new $Int64(0, 470296)), new $Int64(s4.$high + x$404.$high, s4.$low + x$404.$low));
  [�		s5 = (x$405 = $mul64(s15, new $Int64(0, 654183)), new $Int64(s5.$high + x$405.$high, s5.$low + x$405.$low));
  [�		s6 = (x$406 = $mul64(s15, new $Int64(0, 997805)), new $Int64(s6.$high - x$406.$high, s6.$low - x$406.$low));
  \		s7 = (x$407 = $mul64(s15, new $Int64(0, 136657)), new $Int64(s7.$high + x$407.$high, s7.$low + x$407.$low));
  \		s8 = (x$408 = $mul64(s15, new $Int64(0, 683901)), new $Int64(s8.$high - x$408.$high, s8.$low - x$408.$low));
  \*		s15 = new $Int64(0, 0);
  \4		s2 = (x$409 = $mul64(s14, new $Int64(0, 666643)), new $Int64(s2.$high + x$409.$high, s2.$low + x$409.$low));
  \H		s3 = (x$410 = $mul64(s14, new $Int64(0, 470296)), new $Int64(s3.$high + x$410.$high, s3.$low + x$410.$low));
  \\		s4 = (x$411 = $mul64(s14, new $Int64(0, 654183)), new $Int64(s4.$high + x$411.$high, s4.$low + x$411.$low));
  \p		s5 = (x$412 = $mul64(s14, new $Int64(0, 997805)), new $Int64(s5.$high - x$412.$high, s5.$low - x$412.$low));
  \�		s6 = (x$413 = $mul64(s14, new $Int64(0, 136657)), new $Int64(s6.$high + x$413.$high, s6.$low + x$413.$low));
  \�		s7 = (x$414 = $mul64(s14, new $Int64(0, 683901)), new $Int64(s7.$high - x$414.$high, s7.$low - x$414.$low));
  \�		s14 = new $Int64(0, 0);
  \�		s1 = (x$415 = $mul64(s13, new $Int64(0, 666643)), new $Int64(s1.$high + x$415.$high, s1.$low + x$415.$low));
  \�		s2 = (x$416 = $mul64(s13, new $Int64(0, 470296)), new $Int64(s2.$high + x$416.$high, s2.$low + x$416.$low));
  \�		s3 = (x$417 = $mul64(s13, new $Int64(0, 654183)), new $Int64(s3.$high + x$417.$high, s3.$low + x$417.$low));
  \�		s4 = (x$418 = $mul64(s13, new $Int64(0, 997805)), new $Int64(s4.$high - x$418.$high, s4.$low - x$418.$low));
  ]		s5 = (x$419 = $mul64(s13, new $Int64(0, 136657)), new $Int64(s5.$high + x$419.$high, s5.$low + x$419.$low));
  ]		s6 = (x$420 = $mul64(s13, new $Int64(0, 683901)), new $Int64(s6.$high - x$420.$high, s6.$low - x$420.$low));
  ].		s13 = new $Int64(0, 0);
  ]8		s0 = (x$421 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$421.$high, s0.$low + x$421.$low));
  ]L		s1 = (x$422 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$422.$high, s1.$low + x$422.$low));
  ]`		s2 = (x$423 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$423.$high, s2.$low + x$423.$low));
  ]t		s3 = (x$424 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$424.$high, s3.$low - x$424.$low));
  ]�		s4 = (x$425 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$425.$high, s4.$low + x$425.$low));
  ]�		s5 = (x$426 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$426.$high, s5.$low - x$426.$low));
  ]�		s12 = new $Int64(0, 0);
  ]�		carry[0] = $shiftRightInt64((new $Int64(s0.$high + 0, s0.$low + 1048576)), 21);
  ]�		s1 = (x$427 = carry[0], new $Int64(s1.$high + x$427.$high, s1.$low + x$427.$low));
  ]�		s0 = (x$428 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$428.$high, s0.$low - x$428.$low));
  ^		carry[2] = $shiftRightInt64((new $Int64(s2.$high + 0, s2.$low + 1048576)), 21);
  ^&		s3 = (x$429 = carry[2], new $Int64(s3.$high + x$429.$high, s3.$low + x$429.$low));
  ^6		s2 = (x$430 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$430.$high, s2.$low - x$430.$low));
  ^L		carry[4] = $shiftRightInt64((new $Int64(s4.$high + 0, s4.$low + 1048576)), 21);
  ^o		s5 = (x$431 = carry[4], new $Int64(s5.$high + x$431.$high, s5.$low + x$431.$low));
  ^		s4 = (x$432 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$432.$high, s4.$low - x$432.$low));
  ^�		carry[6] = $shiftRightInt64((new $Int64(s6.$high + 0, s6.$low + 1048576)), 21);
  ^�		s7 = (x$433 = carry[6], new $Int64(s7.$high + x$433.$high, s7.$low + x$433.$low));
  ^�		s6 = (x$434 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$434.$high, s6.$low - x$434.$low));
  ^�		carry[8] = $shiftRightInt64((new $Int64(s8.$high + 0, s8.$low + 1048576)), 21);
  _		s9 = (x$435 = carry[8], new $Int64(s9.$high + x$435.$high, s9.$low + x$435.$low));
  _		s8 = (x$436 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$436.$high, s8.$low - x$436.$low));
  _'		carry[10] = $shiftRightInt64((new $Int64(s10.$high + 0, s10.$low + 1048576)), 21);
  _L		s11 = (x$437 = carry[10], new $Int64(s11.$high + x$437.$high, s11.$low + x$437.$low));
  _^		s10 = (x$438 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$438.$high, s10.$low - x$438.$low));
  _w		carry[1] = $shiftRightInt64((new $Int64(s1.$high + 0, s1.$low + 1048576)), 21);
  _�		s2 = (x$439 = carry[1], new $Int64(s2.$high + x$439.$high, s2.$low + x$439.$low));
  _�		s1 = (x$440 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$440.$high, s1.$low - x$440.$low));
  _�		carry[3] = $shiftRightInt64((new $Int64(s3.$high + 0, s3.$low + 1048576)), 21);
  _�		s4 = (x$441 = carry[3], new $Int64(s4.$high + x$441.$high, s4.$low + x$441.$low));
  _�		s3 = (x$442 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$442.$high, s3.$low - x$442.$low));
  `			carry[5] = $shiftRightInt64((new $Int64(s5.$high + 0, s5.$low + 1048576)), 21);
  `,		s6 = (x$443 = carry[5], new $Int64(s6.$high + x$443.$high, s6.$low + x$443.$low));
  `<		s5 = (x$444 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$444.$high, s5.$low - x$444.$low));
  `R		carry[7] = $shiftRightInt64((new $Int64(s7.$high + 0, s7.$low + 1048576)), 21);
  `u		s8 = (x$445 = carry[7], new $Int64(s8.$high + x$445.$high, s8.$low + x$445.$low));
  `�		s7 = (x$446 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$446.$high, s7.$low - x$446.$low));
  `�		carry[9] = $shiftRightInt64((new $Int64(s9.$high + 0, s9.$low + 1048576)), 21);
  `�		s10 = (x$447 = carry[9], new $Int64(s10.$high + x$447.$high, s10.$low + x$447.$low));
  `�		s9 = (x$448 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$448.$high, s9.$low - x$448.$low));
  `�		carry[11] = $shiftRightInt64((new $Int64(s11.$high + 0, s11.$low + 1048576)), 21);
  a
		s12 = (x$449 = carry[11], new $Int64(s12.$high + x$449.$high, s12.$low + x$449.$low));
  a		s11 = (x$450 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$450.$high, s11.$low - x$450.$low));
  a5		s0 = (x$451 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$451.$high, s0.$low + x$451.$low));
  aI		s1 = (x$452 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$452.$high, s1.$low + x$452.$low));
  a]		s2 = (x$453 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$453.$high, s2.$low + x$453.$low));
  aq		s3 = (x$454 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$454.$high, s3.$low - x$454.$low));
  a�		s4 = (x$455 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$455.$high, s4.$low + x$455.$low));
  a�		s5 = (x$456 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$456.$high, s5.$low - x$456.$low));
  a�		s12 = new $Int64(0, 0);
  a�		carry[0] = $shiftRightInt64(s0, 21);
  a�		s1 = (x$457 = carry[0], new $Int64(s1.$high + x$457.$high, s1.$low + x$457.$low));
  a�		s0 = (x$458 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$458.$high, s0.$low - x$458.$low));
  a�		carry[1] = $shiftRightInt64(s1, 21);
  b		s2 = (x$459 = carry[1], new $Int64(s2.$high + x$459.$high, s2.$low + x$459.$low));
  b		s1 = (x$460 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$460.$high, s1.$low - x$460.$low));
  b-		carry[2] = $shiftRightInt64(s2, 21);
  bB		s3 = (x$461 = carry[2], new $Int64(s3.$high + x$461.$high, s3.$low + x$461.$low));
  bR		s2 = (x$462 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$462.$high, s2.$low - x$462.$low));
  bh		carry[3] = $shiftRightInt64(s3, 21);
  b}		s4 = (x$463 = carry[3], new $Int64(s4.$high + x$463.$high, s4.$low + x$463.$low));
  b�		s3 = (x$464 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$464.$high, s3.$low - x$464.$low));
  b�		carry[4] = $shiftRightInt64(s4, 21);
  b�		s5 = (x$465 = carry[4], new $Int64(s5.$high + x$465.$high, s5.$low + x$465.$low));
  b�		s4 = (x$466 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$466.$high, s4.$low - x$466.$low));
  b�		carry[5] = $shiftRightInt64(s5, 21);
  b�		s6 = (x$467 = carry[5], new $Int64(s6.$high + x$467.$high, s6.$low + x$467.$low));
  c		s5 = (x$468 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$468.$high, s5.$low - x$468.$low));
  c		carry[6] = $shiftRightInt64(s6, 21);
  c.		s7 = (x$469 = carry[6], new $Int64(s7.$high + x$469.$high, s7.$low + x$469.$low));
  c>		s6 = (x$470 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$470.$high, s6.$low - x$470.$low));
  cT		carry[7] = $shiftRightInt64(s7, 21);
  ci		s8 = (x$471 = carry[7], new $Int64(s8.$high + x$471.$high, s8.$low + x$471.$low));
  cy		s7 = (x$472 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$472.$high, s7.$low - x$472.$low));
  c�		carry[8] = $shiftRightInt64(s8, 21);
  c�		s9 = (x$473 = carry[8], new $Int64(s9.$high + x$473.$high, s9.$low + x$473.$low));
  c�		s8 = (x$474 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$474.$high, s8.$low - x$474.$low));
  c�		carry[9] = $shiftRightInt64(s9, 21);
  c�		s10 = (x$475 = carry[9], new $Int64(s10.$high + x$475.$high, s10.$low + x$475.$low));
  c�		s9 = (x$476 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$476.$high, s9.$low - x$476.$low));
  d		carry[10] = $shiftRightInt64(s10, 21);
  d		s11 = (x$477 = carry[10], new $Int64(s11.$high + x$477.$high, s11.$low + x$477.$low));
  d/		s10 = (x$478 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$478.$high, s10.$low - x$478.$low));
  dG		carry[11] = $shiftRightInt64(s11, 21);
  d^		s12 = (x$479 = carry[11], new $Int64(s12.$high + x$479.$high, s12.$low + x$479.$low));
  dp		s11 = (x$480 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$480.$high, s11.$low - x$480.$low));
  d�		s0 = (x$481 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$481.$high, s0.$low + x$481.$low));
  d�		s1 = (x$482 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$482.$high, s1.$low + x$482.$low));
  d�		s2 = (x$483 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$483.$high, s2.$low + x$483.$low));
  d�		s3 = (x$484 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$484.$high, s3.$low - x$484.$low));
  d�		s4 = (x$485 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$485.$high, s4.$low + x$485.$low));
  d�		s5 = (x$486 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$486.$high, s5.$low - x$486.$low));
  e		s12 = new $Int64(0, 0);
  e		carry[0] = $shiftRightInt64(s0, 21);
  e 		s1 = (x$487 = carry[0], new $Int64(s1.$high + x$487.$high, s1.$low + x$487.$low));
  e0		s0 = (x$488 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$488.$high, s0.$low - x$488.$low));
  eF		carry[1] = $shiftRightInt64(s1, 21);
  e[		s2 = (x$489 = carry[1], new $Int64(s2.$high + x$489.$high, s2.$low + x$489.$low));
  ek		s1 = (x$490 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$490.$high, s1.$low - x$490.$low));
  e�		carry[2] = $shiftRightInt64(s2, 21);
  e�		s3 = (x$491 = carry[2], new $Int64(s3.$high + x$491.$high, s3.$low + x$491.$low));
  e�		s2 = (x$492 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$492.$high, s2.$low - x$492.$low));
  e�		carry[3] = $shiftRightInt64(s3, 21);
  e�		s4 = (x$493 = carry[3], new $Int64(s4.$high + x$493.$high, s4.$low + x$493.$low));
  e�		s3 = (x$494 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$494.$high, s3.$low - x$494.$low));
  e�		carry[4] = $shiftRightInt64(s4, 21);
  f		s5 = (x$495 = carry[4], new $Int64(s5.$high + x$495.$high, s5.$low + x$495.$low));
  f		s4 = (x$496 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$496.$high, s4.$low - x$496.$low));
  f2		carry[5] = $shiftRightInt64(s5, 21);
  fG		s6 = (x$497 = carry[5], new $Int64(s6.$high + x$497.$high, s6.$low + x$497.$low));
  fW		s5 = (x$498 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$498.$high, s5.$low - x$498.$low));
  fm		carry[6] = $shiftRightInt64(s6, 21);
  f�		s7 = (x$499 = carry[6], new $Int64(s7.$high + x$499.$high, s7.$low + x$499.$low));
  f�		s6 = (x$500 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$500.$high, s6.$low - x$500.$low));
  f�		carry[7] = $shiftRightInt64(s7, 21);
  f�		s8 = (x$501 = carry[7], new $Int64(s8.$high + x$501.$high, s8.$low + x$501.$low));
  f�		s7 = (x$502 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$502.$high, s7.$low - x$502.$low));
  f�		carry[8] = $shiftRightInt64(s8, 21);
  f�		s9 = (x$503 = carry[8], new $Int64(s9.$high + x$503.$high, s9.$low + x$503.$low));
  g		s8 = (x$504 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$504.$high, s8.$low - x$504.$low));
  g		carry[9] = $shiftRightInt64(s9, 21);
  g3		s10 = (x$505 = carry[9], new $Int64(s10.$high + x$505.$high, s10.$low + x$505.$low));
  gD		s9 = (x$506 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$506.$high, s9.$low - x$506.$low));
  gZ		carry[10] = $shiftRightInt64(s10, 21);
  gq		s11 = (x$507 = carry[10], new $Int64(s11.$high + x$507.$high, s11.$low + x$507.$low));
  g�		s10 = (x$508 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$508.$high, s10.$low - x$508.$low));
  g�		s.nilCheck, s[0] = (($shiftRightInt64(s0, 0).$low << 24 >>> 24));
  g�		s.nilCheck, s[1] = (($shiftRightInt64(s0, 8).$low << 24 >>> 24));
  g�		s.nilCheck, s[2] = (((x$509 = $shiftRightInt64(s0, 16), x$510 = $shiftLeft64(s1, 5), new $Int64(x$509.$high | x$510.$high, (x$509.$low | x$510.$low) >>> 0)).$low << 24 >>> 24));
  g�		s.nilCheck, s[3] = (($shiftRightInt64(s1, 3).$low << 24 >>> 24));
  h		s.nilCheck, s[4] = (($shiftRightInt64(s1, 11).$low << 24 >>> 24));
  h		s.nilCheck, s[5] = (((x$511 = $shiftRightInt64(s1, 19), x$512 = $shiftLeft64(s2, 2), new $Int64(x$511.$high | x$512.$high, (x$511.$low | x$512.$low) >>> 0)).$low << 24 >>> 24));
  h?		s.nilCheck, s[6] = (($shiftRightInt64(s2, 6).$low << 24 >>> 24));
  hU		s.nilCheck, s[7] = (((x$513 = $shiftRightInt64(s2, 14), x$514 = $shiftLeft64(s3, 7), new $Int64(x$513.$high | x$514.$high, (x$513.$low | x$514.$low) >>> 0)).$low << 24 >>> 24));
  hz		s.nilCheck, s[8] = (($shiftRightInt64(s3, 1).$low << 24 >>> 24));
  h�		s.nilCheck, s[9] = (($shiftRightInt64(s3, 9).$low << 24 >>> 24));
  h�		s.nilCheck, s[10] = (((x$515 = $shiftRightInt64(s3, 17), x$516 = $shiftLeft64(s4, 4), new $Int64(x$515.$high | x$516.$high, (x$515.$low | x$516.$low) >>> 0)).$low << 24 >>> 24));
  h�		s.nilCheck, s[11] = (($shiftRightInt64(s4, 4).$low << 24 >>> 24));
  h�		s.nilCheck, s[12] = (($shiftRightInt64(s4, 12).$low << 24 >>> 24));
  h�		s.nilCheck, s[13] = (((x$517 = $shiftRightInt64(s4, 20), x$518 = $shiftLeft64(s5, 1), new $Int64(x$517.$high | x$518.$high, (x$517.$low | x$518.$low) >>> 0)).$low << 24 >>> 24));
  i!		s.nilCheck, s[14] = (($shiftRightInt64(s5, 7).$low << 24 >>> 24));
  i8		s.nilCheck, s[15] = (((x$519 = $shiftRightInt64(s5, 15), x$520 = $shiftLeft64(s6, 6), new $Int64(x$519.$high | x$520.$high, (x$519.$low | x$520.$low) >>> 0)).$low << 24 >>> 24));
  i^		s.nilCheck, s[16] = (($shiftRightInt64(s6, 2).$low << 24 >>> 24));
  iu		s.nilCheck, s[17] = (($shiftRightInt64(s6, 10).$low << 24 >>> 24));
  i�		s.nilCheck, s[18] = (((x$521 = $shiftRightInt64(s6, 18), x$522 = $shiftLeft64(s7, 3), new $Int64(x$521.$high | x$522.$high, (x$521.$low | x$522.$low) >>> 0)).$low << 24 >>> 24));
  i�		s.nilCheck, s[19] = (($shiftRightInt64(s7, 5).$low << 24 >>> 24));
  i�		s.nilCheck, s[20] = (($shiftRightInt64(s7, 13).$low << 24 >>> 24));
  i�		s.nilCheck, s[21] = (($shiftRightInt64(s8, 0).$low << 24 >>> 24));
  i�		s.nilCheck, s[22] = (($shiftRightInt64(s8, 8).$low << 24 >>> 24));
  j		s.nilCheck, s[23] = (((x$523 = $shiftRightInt64(s8, 16), x$524 = $shiftLeft64(s9, 5), new $Int64(x$523.$high | x$524.$high, (x$523.$low | x$524.$low) >>> 0)).$low << 24 >>> 24));
  j6		s.nilCheck, s[24] = (($shiftRightInt64(s9, 3).$low << 24 >>> 24));
  jM		s.nilCheck, s[25] = (($shiftRightInt64(s9, 11).$low << 24 >>> 24));
  je		s.nilCheck, s[26] = (((x$525 = $shiftRightInt64(s9, 19), x$526 = $shiftLeft64(s10, 2), new $Int64(x$525.$high | x$526.$high, (x$525.$low | x$526.$low) >>> 0)).$low << 24 >>> 24));
  j�		s.nilCheck, s[27] = (($shiftRightInt64(s10, 6).$low << 24 >>> 24));
  j�		s.nilCheck, s[28] = (((x$527 = $shiftRightInt64(s10, 14), x$528 = $shiftLeft64(s11, 7), new $Int64(x$527.$high | x$528.$high, (x$527.$low | x$528.$low) >>> 0)).$low << 24 >>> 24));
  j�		s.nilCheck, s[29] = (($shiftRightInt64(s11, 1).$low << 24 >>> 24));
  j�		s.nilCheck, s[30] = (($shiftRightInt64(s11, 9).$low << 24 >>> 24));
  j�		s.nilCheck, s[31] = (($shiftRightInt64(s11, 17).$low << 24 >>> 24));
    	};
scMulAdd0crypto/ed25519/internal/edwards25519.arrayType$6*crypto/ed25519/internal/edwards25519.load3*crypto/ed25519/internal/edwards25519.load4-crypto/ed25519/internal/edwards25519.scMulAdd.crypto/ed25519/internal/edwards25519.sliceType -crypto/ed25519/internal/edwards25519.scReduce$crypto/ed25519/internal/edwards25519scReduce scReduce�w�	scReduce = function(out, s) {
		var carry, out, s, s0, s1, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s2, s20, s21, s22, s23, s3, s4, s5, s6, s7, s8, s9, x, x$1, x$10, x$100, x$101, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$11, x$110, x$111, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119, x$12, x$120, x$121, x$122, x$123, x$124, x$125, x$126, x$127, x$128, x$129, x$13, x$130, x$131, x$132, x$133, x$134, x$135, x$136, x$137, x$138, x$139, x$14, x$140, x$141, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$15, x$150, x$151, x$152, x$153, x$154, x$155, x$156, x$157, x$158, x$159, x$16, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$17, x$170, x$171, x$172, x$173, x$174, x$175, x$176, x$177, x$178, x$179, x$18, x$180, x$181, x$182, x$183, x$184, x$185, x$186, x$187, x$188, x$189, x$19, x$190, x$191, x$192, x$193, x$194, x$195, x$196, x$197, x$198, x$199, x$2, x$20, x$200, x$201, x$202, x$203, x$204, x$205, x$206, x$207, x$208, x$209, x$21, x$210, x$211, x$212, x$213, x$214, x$215, x$216, x$217, x$218, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$5, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$6, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$7, x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$8, x$80, x$81, x$82, x$83, x$84, x$85, x$86, x$87, x$88, x$89, x$9, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99;
  k�		s0 = (x = load3(new sliceType(s)), new $Int64(0 & x.$high, (2097151 & x.$low) >>> 0));
  l		s1 = (x$1 = $shiftRightInt64(load4($subslice(new sliceType(s), 2)), 5), new $Int64(0 & x$1.$high, (2097151 & x$1.$low) >>> 0));
  l3		s2 = (x$2 = $shiftRightInt64(load3($subslice(new sliceType(s), 5)), 2), new $Int64(0 & x$2.$high, (2097151 & x$2.$low) >>> 0));
  lX		s3 = (x$3 = $shiftRightInt64(load4($subslice(new sliceType(s), 7)), 7), new $Int64(0 & x$3.$high, (2097151 & x$3.$low) >>> 0));
  l}		s4 = (x$4 = $shiftRightInt64(load4($subslice(new sliceType(s), 10)), 4), new $Int64(0 & x$4.$high, (2097151 & x$4.$low) >>> 0));
  l�		s5 = (x$5 = $shiftRightInt64(load3($subslice(new sliceType(s), 13)), 1), new $Int64(0 & x$5.$high, (2097151 & x$5.$low) >>> 0));
  l�		s6 = (x$6 = $shiftRightInt64(load4($subslice(new sliceType(s), 15)), 6), new $Int64(0 & x$6.$high, (2097151 & x$6.$low) >>> 0));
  l�		s7 = (x$7 = $shiftRightInt64(load3($subslice(new sliceType(s), 18)), 3), new $Int64(0 & x$7.$high, (2097151 & x$7.$low) >>> 0));
  m		s8 = (x$8 = load3($subslice(new sliceType(s), 21)), new $Int64(0 & x$8.$high, (2097151 & x$8.$low) >>> 0));
  m4		s9 = (x$9 = $shiftRightInt64(load4($subslice(new sliceType(s), 23)), 5), new $Int64(0 & x$9.$high, (2097151 & x$9.$low) >>> 0));
  mZ		s10 = (x$10 = $shiftRightInt64(load3($subslice(new sliceType(s), 26)), 2), new $Int64(0 & x$10.$high, (2097151 & x$10.$low) >>> 0));
  m�		s11 = (x$11 = $shiftRightInt64(load4($subslice(new sliceType(s), 28)), 7), new $Int64(0 & x$11.$high, (2097151 & x$11.$low) >>> 0));
  m�		s12 = (x$12 = $shiftRightInt64(load4($subslice(new sliceType(s), 31)), 4), new $Int64(0 & x$12.$high, (2097151 & x$12.$low) >>> 0));
  m�		s13 = (x$13 = $shiftRightInt64(load3($subslice(new sliceType(s), 34)), 1), new $Int64(0 & x$13.$high, (2097151 & x$13.$low) >>> 0));
  m�		s14 = (x$14 = $shiftRightInt64(load4($subslice(new sliceType(s), 36)), 6), new $Int64(0 & x$14.$high, (2097151 & x$14.$low) >>> 0));
  n		s15 = (x$15 = $shiftRightInt64(load3($subslice(new sliceType(s), 39)), 3), new $Int64(0 & x$15.$high, (2097151 & x$15.$low) >>> 0));
  nD		s16 = (x$16 = load3($subslice(new sliceType(s), 42)), new $Int64(0 & x$16.$high, (2097151 & x$16.$low) >>> 0));
  nd		s17 = (x$17 = $shiftRightInt64(load4($subslice(new sliceType(s), 44)), 5), new $Int64(0 & x$17.$high, (2097151 & x$17.$low) >>> 0));
  n�		s18 = (x$18 = $shiftRightInt64(load3($subslice(new sliceType(s), 47)), 2), new $Int64(0 & x$18.$high, (2097151 & x$18.$low) >>> 0));
  n�		s19 = (x$19 = $shiftRightInt64(load4($subslice(new sliceType(s), 49)), 7), new $Int64(0 & x$19.$high, (2097151 & x$19.$low) >>> 0));
  n�		s20 = (x$20 = $shiftRightInt64(load4($subslice(new sliceType(s), 52)), 4), new $Int64(0 & x$20.$high, (2097151 & x$20.$low) >>> 0));
  o 		s21 = (x$21 = $shiftRightInt64(load3($subslice(new sliceType(s), 55)), 1), new $Int64(0 & x$21.$high, (2097151 & x$21.$low) >>> 0));
  o'		s22 = (x$22 = $shiftRightInt64(load4($subslice(new sliceType(s), 57)), 6), new $Int64(0 & x$22.$high, (2097151 & x$22.$low) >>> 0));
  oN		s23 = $shiftRightInt64(load4($subslice(new sliceType(s), 60)), 3);
  ol		s11 = (x$23 = $mul64(s23, new $Int64(0, 666643)), new $Int64(s11.$high + x$23.$high, s11.$low + x$23.$low));
  o�		s12 = (x$24 = $mul64(s23, new $Int64(0, 470296)), new $Int64(s12.$high + x$24.$high, s12.$low + x$24.$low));
  o�		s13 = (x$25 = $mul64(s23, new $Int64(0, 654183)), new $Int64(s13.$high + x$25.$high, s13.$low + x$25.$low));
  o�		s14 = (x$26 = $mul64(s23, new $Int64(0, 997805)), new $Int64(s14.$high - x$26.$high, s14.$low - x$26.$low));
  o�		s15 = (x$27 = $mul64(s23, new $Int64(0, 136657)), new $Int64(s15.$high + x$27.$high, s15.$low + x$27.$low));
  o�		s16 = (x$28 = $mul64(s23, new $Int64(0, 683901)), new $Int64(s16.$high - x$28.$high, s16.$low - x$28.$low));
  o�		s23 = new $Int64(0, 0);
  o�		s10 = (x$29 = $mul64(s22, new $Int64(0, 666643)), new $Int64(s10.$high + x$29.$high, s10.$low + x$29.$low));
  p			s11 = (x$30 = $mul64(s22, new $Int64(0, 470296)), new $Int64(s11.$high + x$30.$high, s11.$low + x$30.$low));
  p		s12 = (x$31 = $mul64(s22, new $Int64(0, 654183)), new $Int64(s12.$high + x$31.$high, s12.$low + x$31.$low));
  p3		s13 = (x$32 = $mul64(s22, new $Int64(0, 997805)), new $Int64(s13.$high - x$32.$high, s13.$low - x$32.$low));
  pH		s14 = (x$33 = $mul64(s22, new $Int64(0, 136657)), new $Int64(s14.$high + x$33.$high, s14.$low + x$33.$low));
  p]		s15 = (x$34 = $mul64(s22, new $Int64(0, 683901)), new $Int64(s15.$high - x$34.$high, s15.$low - x$34.$low));
  pr		s22 = new $Int64(0, 0);
  p|		s9 = (x$35 = $mul64(s21, new $Int64(0, 666643)), new $Int64(s9.$high + x$35.$high, s9.$low + x$35.$low));
  p�		s10 = (x$36 = $mul64(s21, new $Int64(0, 470296)), new $Int64(s10.$high + x$36.$high, s10.$low + x$36.$low));
  p�		s11 = (x$37 = $mul64(s21, new $Int64(0, 654183)), new $Int64(s11.$high + x$37.$high, s11.$low + x$37.$low));
  p�		s12 = (x$38 = $mul64(s21, new $Int64(0, 997805)), new $Int64(s12.$high - x$38.$high, s12.$low - x$38.$low));
  p�		s13 = (x$39 = $mul64(s21, new $Int64(0, 136657)), new $Int64(s13.$high + x$39.$high, s13.$low + x$39.$low));
  p�		s14 = (x$40 = $mul64(s21, new $Int64(0, 683901)), new $Int64(s14.$high - x$40.$high, s14.$low - x$40.$low));
  p�		s21 = new $Int64(0, 0);
  q		s8 = (x$41 = $mul64(s20, new $Int64(0, 666643)), new $Int64(s8.$high + x$41.$high, s8.$low + x$41.$low));
  q		s9 = (x$42 = $mul64(s20, new $Int64(0, 470296)), new $Int64(s9.$high + x$42.$high, s9.$low + x$42.$low));
  q+		s10 = (x$43 = $mul64(s20, new $Int64(0, 654183)), new $Int64(s10.$high + x$43.$high, s10.$low + x$43.$low));
  q@		s11 = (x$44 = $mul64(s20, new $Int64(0, 997805)), new $Int64(s11.$high - x$44.$high, s11.$low - x$44.$low));
  qU		s12 = (x$45 = $mul64(s20, new $Int64(0, 136657)), new $Int64(s12.$high + x$45.$high, s12.$low + x$45.$low));
  qj		s13 = (x$46 = $mul64(s20, new $Int64(0, 683901)), new $Int64(s13.$high - x$46.$high, s13.$low - x$46.$low));
  q		s20 = new $Int64(0, 0);
  q�		s7 = (x$47 = $mul64(s19, new $Int64(0, 666643)), new $Int64(s7.$high + x$47.$high, s7.$low + x$47.$low));
  q�		s8 = (x$48 = $mul64(s19, new $Int64(0, 470296)), new $Int64(s8.$high + x$48.$high, s8.$low + x$48.$low));
  q�		s9 = (x$49 = $mul64(s19, new $Int64(0, 654183)), new $Int64(s9.$high + x$49.$high, s9.$low + x$49.$low));
  q�		s10 = (x$50 = $mul64(s19, new $Int64(0, 997805)), new $Int64(s10.$high - x$50.$high, s10.$low - x$50.$low));
  q�		s11 = (x$51 = $mul64(s19, new $Int64(0, 136657)), new $Int64(s11.$high + x$51.$high, s11.$low + x$51.$low));
  q�		s12 = (x$52 = $mul64(s19, new $Int64(0, 683901)), new $Int64(s12.$high - x$52.$high, s12.$low - x$52.$low));
  r		s19 = new $Int64(0, 0);
  r		s6 = (x$53 = $mul64(s18, new $Int64(0, 666643)), new $Int64(s6.$high + x$53.$high, s6.$low + x$53.$low));
  r"		s7 = (x$54 = $mul64(s18, new $Int64(0, 470296)), new $Int64(s7.$high + x$54.$high, s7.$low + x$54.$low));
  r6		s8 = (x$55 = $mul64(s18, new $Int64(0, 654183)), new $Int64(s8.$high + x$55.$high, s8.$low + x$55.$low));
  rJ		s9 = (x$56 = $mul64(s18, new $Int64(0, 997805)), new $Int64(s9.$high - x$56.$high, s9.$low - x$56.$low));
  r^		s10 = (x$57 = $mul64(s18, new $Int64(0, 136657)), new $Int64(s10.$high + x$57.$high, s10.$low + x$57.$low));
  rs		s11 = (x$58 = $mul64(s18, new $Int64(0, 683901)), new $Int64(s11.$high - x$58.$high, s11.$low - x$58.$low));
  r�		s18 = new $Int64(0, 0);
  r�		carry = arrayType$7.zero();
  r�		carry[6] = $shiftRightInt64((new $Int64(s6.$high + 0, s6.$low + 1048576)), 21);
  r�		s7 = (x$59 = carry[6], new $Int64(s7.$high + x$59.$high, s7.$low + x$59.$low));
  r�		s6 = (x$60 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$60.$high, s6.$low - x$60.$low));
  r�		carry[8] = $shiftRightInt64((new $Int64(s8.$high + 0, s8.$low + 1048576)), 21);
  s		s9 = (x$61 = carry[8], new $Int64(s9.$high + x$61.$high, s9.$low + x$61.$low));
  s$		s8 = (x$62 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$62.$high, s8.$low - x$62.$low));
  s:		carry[10] = $shiftRightInt64((new $Int64(s10.$high + 0, s10.$low + 1048576)), 21);
  s_		s11 = (x$63 = carry[10], new $Int64(s11.$high + x$63.$high, s11.$low + x$63.$low));
  sq		s10 = (x$64 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$64.$high, s10.$low - x$64.$low));
  s�		carry[12] = $shiftRightInt64((new $Int64(s12.$high + 0, s12.$low + 1048576)), 21);
  s�		s13 = (x$65 = carry[12], new $Int64(s13.$high + x$65.$high, s13.$low + x$65.$low));
  s�		s12 = (x$66 = $shiftLeft64(carry[12], 21), new $Int64(s12.$high - x$66.$high, s12.$low - x$66.$low));
  s�		carry[14] = $shiftRightInt64((new $Int64(s14.$high + 0, s14.$low + 1048576)), 21);
  s�		s15 = (x$67 = carry[14], new $Int64(s15.$high + x$67.$high, s15.$low + x$67.$low));
  t		s14 = (x$68 = $shiftLeft64(carry[14], 21), new $Int64(s14.$high - x$68.$high, s14.$low - x$68.$low));
  t'		carry[16] = $shiftRightInt64((new $Int64(s16.$high + 0, s16.$low + 1048576)), 21);
  tL		s17 = (x$69 = carry[16], new $Int64(s17.$high + x$69.$high, s17.$low + x$69.$low));
  t^		s16 = (x$70 = $shiftLeft64(carry[16], 21), new $Int64(s16.$high - x$70.$high, s16.$low - x$70.$low));
  tw		carry[7] = $shiftRightInt64((new $Int64(s7.$high + 0, s7.$low + 1048576)), 21);
  t�		s8 = (x$71 = carry[7], new $Int64(s8.$high + x$71.$high, s8.$low + x$71.$low));
  t�		s7 = (x$72 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$72.$high, s7.$low - x$72.$low));
  t�		carry[9] = $shiftRightInt64((new $Int64(s9.$high + 0, s9.$low + 1048576)), 21);
  t�		s10 = (x$73 = carry[9], new $Int64(s10.$high + x$73.$high, s10.$low + x$73.$low));
  t�		s9 = (x$74 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$74.$high, s9.$low - x$74.$low));
  u
		carry[11] = $shiftRightInt64((new $Int64(s11.$high + 0, s11.$low + 1048576)), 21);
  u/		s12 = (x$75 = carry[11], new $Int64(s12.$high + x$75.$high, s12.$low + x$75.$low));
  uA		s11 = (x$76 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$76.$high, s11.$low - x$76.$low));
  uY		carry[13] = $shiftRightInt64((new $Int64(s13.$high + 0, s13.$low + 1048576)), 21);
  u~		s14 = (x$77 = carry[13], new $Int64(s14.$high + x$77.$high, s14.$low + x$77.$low));
  u�		s13 = (x$78 = $shiftLeft64(carry[13], 21), new $Int64(s13.$high - x$78.$high, s13.$low - x$78.$low));
  u�		carry[15] = $shiftRightInt64((new $Int64(s15.$high + 0, s15.$low + 1048576)), 21);
  u�		s16 = (x$79 = carry[15], new $Int64(s16.$high + x$79.$high, s16.$low + x$79.$low));
  u�		s15 = (x$80 = $shiftLeft64(carry[15], 21), new $Int64(s15.$high - x$80.$high, s15.$low - x$80.$low));
  u�		s5 = (x$81 = $mul64(s17, new $Int64(0, 666643)), new $Int64(s5.$high + x$81.$high, s5.$low + x$81.$low));
  v		s6 = (x$82 = $mul64(s17, new $Int64(0, 470296)), new $Int64(s6.$high + x$82.$high, s6.$low + x$82.$low));
  v 		s7 = (x$83 = $mul64(s17, new $Int64(0, 654183)), new $Int64(s7.$high + x$83.$high, s7.$low + x$83.$low));
  v4		s8 = (x$84 = $mul64(s17, new $Int64(0, 997805)), new $Int64(s8.$high - x$84.$high, s8.$low - x$84.$low));
  vH		s9 = (x$85 = $mul64(s17, new $Int64(0, 136657)), new $Int64(s9.$high + x$85.$high, s9.$low + x$85.$low));
  v\		s10 = (x$86 = $mul64(s17, new $Int64(0, 683901)), new $Int64(s10.$high - x$86.$high, s10.$low - x$86.$low));
  vq		s17 = new $Int64(0, 0);
  v{		s4 = (x$87 = $mul64(s16, new $Int64(0, 666643)), new $Int64(s4.$high + x$87.$high, s4.$low + x$87.$low));
  v�		s5 = (x$88 = $mul64(s16, new $Int64(0, 470296)), new $Int64(s5.$high + x$88.$high, s5.$low + x$88.$low));
  v�		s6 = (x$89 = $mul64(s16, new $Int64(0, 654183)), new $Int64(s6.$high + x$89.$high, s6.$low + x$89.$low));
  v�		s7 = (x$90 = $mul64(s16, new $Int64(0, 997805)), new $Int64(s7.$high - x$90.$high, s7.$low - x$90.$low));
  v�		s8 = (x$91 = $mul64(s16, new $Int64(0, 136657)), new $Int64(s8.$high + x$91.$high, s8.$low + x$91.$low));
  v�		s9 = (x$92 = $mul64(s16, new $Int64(0, 683901)), new $Int64(s9.$high - x$92.$high, s9.$low - x$92.$low));
  v�		s16 = new $Int64(0, 0);
  v�		s3 = (x$93 = $mul64(s15, new $Int64(0, 666643)), new $Int64(s3.$high + x$93.$high, s3.$low + x$93.$low));
  w		s4 = (x$94 = $mul64(s15, new $Int64(0, 470296)), new $Int64(s4.$high + x$94.$high, s4.$low + x$94.$low));
  w%		s5 = (x$95 = $mul64(s15, new $Int64(0, 654183)), new $Int64(s5.$high + x$95.$high, s5.$low + x$95.$low));
  w9		s6 = (x$96 = $mul64(s15, new $Int64(0, 997805)), new $Int64(s6.$high - x$96.$high, s6.$low - x$96.$low));
  wM		s7 = (x$97 = $mul64(s15, new $Int64(0, 136657)), new $Int64(s7.$high + x$97.$high, s7.$low + x$97.$low));
  wa		s8 = (x$98 = $mul64(s15, new $Int64(0, 683901)), new $Int64(s8.$high - x$98.$high, s8.$low - x$98.$low));
  wu		s15 = new $Int64(0, 0);
  w		s2 = (x$99 = $mul64(s14, new $Int64(0, 666643)), new $Int64(s2.$high + x$99.$high, s2.$low + x$99.$low));
  w�		s3 = (x$100 = $mul64(s14, new $Int64(0, 470296)), new $Int64(s3.$high + x$100.$high, s3.$low + x$100.$low));
  w�		s4 = (x$101 = $mul64(s14, new $Int64(0, 654183)), new $Int64(s4.$high + x$101.$high, s4.$low + x$101.$low));
  w�		s5 = (x$102 = $mul64(s14, new $Int64(0, 997805)), new $Int64(s5.$high - x$102.$high, s5.$low - x$102.$low));
  w�		s6 = (x$103 = $mul64(s14, new $Int64(0, 136657)), new $Int64(s6.$high + x$103.$high, s6.$low + x$103.$low));
  w�		s7 = (x$104 = $mul64(s14, new $Int64(0, 683901)), new $Int64(s7.$high - x$104.$high, s7.$low - x$104.$low));
  w�		s14 = new $Int64(0, 0);
  x		s1 = (x$105 = $mul64(s13, new $Int64(0, 666643)), new $Int64(s1.$high + x$105.$high, s1.$low + x$105.$low));
  x		s2 = (x$106 = $mul64(s13, new $Int64(0, 470296)), new $Int64(s2.$high + x$106.$high, s2.$low + x$106.$low));
  x)		s3 = (x$107 = $mul64(s13, new $Int64(0, 654183)), new $Int64(s3.$high + x$107.$high, s3.$low + x$107.$low));
  x=		s4 = (x$108 = $mul64(s13, new $Int64(0, 997805)), new $Int64(s4.$high - x$108.$high, s4.$low - x$108.$low));
  xQ		s5 = (x$109 = $mul64(s13, new $Int64(0, 136657)), new $Int64(s5.$high + x$109.$high, s5.$low + x$109.$low));
  xe		s6 = (x$110 = $mul64(s13, new $Int64(0, 683901)), new $Int64(s6.$high - x$110.$high, s6.$low - x$110.$low));
  xy		s13 = new $Int64(0, 0);
  x�		s0 = (x$111 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$111.$high, s0.$low + x$111.$low));
  x�		s1 = (x$112 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$112.$high, s1.$low + x$112.$low));
  x�		s2 = (x$113 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$113.$high, s2.$low + x$113.$low));
  x�		s3 = (x$114 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$114.$high, s3.$low - x$114.$low));
  x�		s4 = (x$115 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$115.$high, s4.$low + x$115.$low));
  x�		s5 = (x$116 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$116.$high, s5.$low - x$116.$low));
  x�		s12 = new $Int64(0, 0);
  y		carry[0] = $shiftRightInt64((new $Int64(s0.$high + 0, s0.$low + 1048576)), 21);
  y(		s1 = (x$117 = carry[0], new $Int64(s1.$high + x$117.$high, s1.$low + x$117.$low));
  y8		s0 = (x$118 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$118.$high, s0.$low - x$118.$low));
  yN		carry[2] = $shiftRightInt64((new $Int64(s2.$high + 0, s2.$low + 1048576)), 21);
  yq		s3 = (x$119 = carry[2], new $Int64(s3.$high + x$119.$high, s3.$low + x$119.$low));
  y�		s2 = (x$120 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$120.$high, s2.$low - x$120.$low));
  y�		carry[4] = $shiftRightInt64((new $Int64(s4.$high + 0, s4.$low + 1048576)), 21);
  y�		s5 = (x$121 = carry[4], new $Int64(s5.$high + x$121.$high, s5.$low + x$121.$low));
  y�		s4 = (x$122 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$122.$high, s4.$low - x$122.$low));
  y�		carry[6] = $shiftRightInt64((new $Int64(s6.$high + 0, s6.$low + 1048576)), 21);
  z		s7 = (x$123 = carry[6], new $Int64(s7.$high + x$123.$high, s7.$low + x$123.$low));
  z		s6 = (x$124 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$124.$high, s6.$low - x$124.$low));
  z)		carry[8] = $shiftRightInt64((new $Int64(s8.$high + 0, s8.$low + 1048576)), 21);
  zL		s9 = (x$125 = carry[8], new $Int64(s9.$high + x$125.$high, s9.$low + x$125.$low));
  z\		s8 = (x$126 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$126.$high, s8.$low - x$126.$low));
  zr		carry[10] = $shiftRightInt64((new $Int64(s10.$high + 0, s10.$low + 1048576)), 21);
  z�		s11 = (x$127 = carry[10], new $Int64(s11.$high + x$127.$high, s11.$low + x$127.$low));
  z�		s10 = (x$128 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$128.$high, s10.$low - x$128.$low));
  z�		carry[1] = $shiftRightInt64((new $Int64(s1.$high + 0, s1.$low + 1048576)), 21);
  z�		s2 = (x$129 = carry[1], new $Int64(s2.$high + x$129.$high, s2.$low + x$129.$low));
  z�		s1 = (x$130 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$130.$high, s1.$low - x$130.$low));
  {		carry[3] = $shiftRightInt64((new $Int64(s3.$high + 0, s3.$low + 1048576)), 21);
  {.		s4 = (x$131 = carry[3], new $Int64(s4.$high + x$131.$high, s4.$low + x$131.$low));
  {>		s3 = (x$132 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$132.$high, s3.$low - x$132.$low));
  {T		carry[5] = $shiftRightInt64((new $Int64(s5.$high + 0, s5.$low + 1048576)), 21);
  {w		s6 = (x$133 = carry[5], new $Int64(s6.$high + x$133.$high, s6.$low + x$133.$low));
  {�		s5 = (x$134 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$134.$high, s5.$low - x$134.$low));
  {�		carry[7] = $shiftRightInt64((new $Int64(s7.$high + 0, s7.$low + 1048576)), 21);
  {�		s8 = (x$135 = carry[7], new $Int64(s8.$high + x$135.$high, s8.$low + x$135.$low));
  {�		s7 = (x$136 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$136.$high, s7.$low - x$136.$low));
  {�		carry[9] = $shiftRightInt64((new $Int64(s9.$high + 0, s9.$low + 1048576)), 21);
  |			s10 = (x$137 = carry[9], new $Int64(s10.$high + x$137.$high, s10.$low + x$137.$low));
  |		s9 = (x$138 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$138.$high, s9.$low - x$138.$low));
  |0		carry[11] = $shiftRightInt64((new $Int64(s11.$high + 0, s11.$low + 1048576)), 21);
  |U		s12 = (x$139 = carry[11], new $Int64(s12.$high + x$139.$high, s12.$low + x$139.$low));
  |g		s11 = (x$140 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$140.$high, s11.$low - x$140.$low));
  |�		s0 = (x$141 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$141.$high, s0.$low + x$141.$low));
  |�		s1 = (x$142 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$142.$high, s1.$low + x$142.$low));
  |�		s2 = (x$143 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$143.$high, s2.$low + x$143.$low));
  |�		s3 = (x$144 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$144.$high, s3.$low - x$144.$low));
  |�		s4 = (x$145 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$145.$high, s4.$low + x$145.$low));
  |�		s5 = (x$146 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$146.$high, s5.$low - x$146.$low));
  |�		s12 = new $Int64(0, 0);
  }		carry[0] = $shiftRightInt64(s0, 21);
  }		s1 = (x$147 = carry[0], new $Int64(s1.$high + x$147.$high, s1.$low + x$147.$low));
  }'		s0 = (x$148 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$148.$high, s0.$low - x$148.$low));
  }=		carry[1] = $shiftRightInt64(s1, 21);
  }R		s2 = (x$149 = carry[1], new $Int64(s2.$high + x$149.$high, s2.$low + x$149.$low));
  }b		s1 = (x$150 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$150.$high, s1.$low - x$150.$low));
  }x		carry[2] = $shiftRightInt64(s2, 21);
  }�		s3 = (x$151 = carry[2], new $Int64(s3.$high + x$151.$high, s3.$low + x$151.$low));
  }�		s2 = (x$152 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$152.$high, s2.$low - x$152.$low));
  }�		carry[3] = $shiftRightInt64(s3, 21);
  }�		s4 = (x$153 = carry[3], new $Int64(s4.$high + x$153.$high, s4.$low + x$153.$low));
  }�		s3 = (x$154 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$154.$high, s3.$low - x$154.$low));
  }�		carry[4] = $shiftRightInt64(s4, 21);
  ~		s5 = (x$155 = carry[4], new $Int64(s5.$high + x$155.$high, s5.$low + x$155.$low));
  ~		s4 = (x$156 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$156.$high, s4.$low - x$156.$low));
  ~)		carry[5] = $shiftRightInt64(s5, 21);
  ~>		s6 = (x$157 = carry[5], new $Int64(s6.$high + x$157.$high, s6.$low + x$157.$low));
  ~N		s5 = (x$158 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$158.$high, s5.$low - x$158.$low));
  ~d		carry[6] = $shiftRightInt64(s6, 21);
  ~y		s7 = (x$159 = carry[6], new $Int64(s7.$high + x$159.$high, s7.$low + x$159.$low));
  ~�		s6 = (x$160 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$160.$high, s6.$low - x$160.$low));
  ~�		carry[7] = $shiftRightInt64(s7, 21);
  ~�		s8 = (x$161 = carry[7], new $Int64(s8.$high + x$161.$high, s8.$low + x$161.$low));
  ~�		s7 = (x$162 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$162.$high, s7.$low - x$162.$low));
  ~�		carry[8] = $shiftRightInt64(s8, 21);
  ~�		s9 = (x$163 = carry[8], new $Int64(s9.$high + x$163.$high, s9.$low + x$163.$low));
  ~�		s8 = (x$164 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$164.$high, s8.$low - x$164.$low));
  		carry[9] = $shiftRightInt64(s9, 21);
  *		s10 = (x$165 = carry[9], new $Int64(s10.$high + x$165.$high, s10.$low + x$165.$low));
  ;		s9 = (x$166 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$166.$high, s9.$low - x$166.$low));
  Q		carry[10] = $shiftRightInt64(s10, 21);
  h		s11 = (x$167 = carry[10], new $Int64(s11.$high + x$167.$high, s11.$low + x$167.$low));
  z		s10 = (x$168 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$168.$high, s10.$low - x$168.$low));
  �		carry[11] = $shiftRightInt64(s11, 21);
  �		s12 = (x$169 = carry[11], new $Int64(s12.$high + x$169.$high, s12.$low + x$169.$low));
  �		s11 = (x$170 = $shiftLeft64(carry[11], 21), new $Int64(s11.$high - x$170.$high, s11.$low - x$170.$low));
  �		s0 = (x$171 = $mul64(s12, new $Int64(0, 666643)), new $Int64(s0.$high + x$171.$high, s0.$low + x$171.$low));
  �		s1 = (x$172 = $mul64(s12, new $Int64(0, 470296)), new $Int64(s1.$high + x$172.$high, s1.$low + x$172.$low));
  �		s2 = (x$173 = $mul64(s12, new $Int64(0, 654183)), new $Int64(s2.$high + x$173.$high, s2.$low + x$173.$low));
  �		s3 = (x$174 = $mul64(s12, new $Int64(0, 997805)), new $Int64(s3.$high - x$174.$high, s3.$low - x$174.$low));
  �$		s4 = (x$175 = $mul64(s12, new $Int64(0, 136657)), new $Int64(s4.$high + x$175.$high, s4.$low + x$175.$low));
  �8		s5 = (x$176 = $mul64(s12, new $Int64(0, 683901)), new $Int64(s5.$high - x$176.$high, s5.$low - x$176.$low));
  �L		s12 = new $Int64(0, 0);
  �V		carry[0] = $shiftRightInt64(s0, 21);
  �k		s1 = (x$177 = carry[0], new $Int64(s1.$high + x$177.$high, s1.$low + x$177.$low));
  �{		s0 = (x$178 = $shiftLeft64(carry[0], 21), new $Int64(s0.$high - x$178.$high, s0.$low - x$178.$low));
  ��		carry[1] = $shiftRightInt64(s1, 21);
  ��		s2 = (x$179 = carry[1], new $Int64(s2.$high + x$179.$high, s2.$low + x$179.$low));
  ��		s1 = (x$180 = $shiftLeft64(carry[1], 21), new $Int64(s1.$high - x$180.$high, s1.$low - x$180.$low));
  ��		carry[2] = $shiftRightInt64(s2, 21);
  ��		s3 = (x$181 = carry[2], new $Int64(s3.$high + x$181.$high, s3.$low + x$181.$low));
  ��		s2 = (x$182 = $shiftLeft64(carry[2], 21), new $Int64(s2.$high - x$182.$high, s2.$low - x$182.$low));
  �		carry[3] = $shiftRightInt64(s3, 21);
  �		s4 = (x$183 = carry[3], new $Int64(s4.$high + x$183.$high, s4.$low + x$183.$low));
  �,		s3 = (x$184 = $shiftLeft64(carry[3], 21), new $Int64(s3.$high - x$184.$high, s3.$low - x$184.$low));
  �B		carry[4] = $shiftRightInt64(s4, 21);
  �W		s5 = (x$185 = carry[4], new $Int64(s5.$high + x$185.$high, s5.$low + x$185.$low));
  �g		s4 = (x$186 = $shiftLeft64(carry[4], 21), new $Int64(s4.$high - x$186.$high, s4.$low - x$186.$low));
  �}		carry[5] = $shiftRightInt64(s5, 21);
  ��		s6 = (x$187 = carry[5], new $Int64(s6.$high + x$187.$high, s6.$low + x$187.$low));
  ��		s5 = (x$188 = $shiftLeft64(carry[5], 21), new $Int64(s5.$high - x$188.$high, s5.$low - x$188.$low));
  ��		carry[6] = $shiftRightInt64(s6, 21);
  ��		s7 = (x$189 = carry[6], new $Int64(s7.$high + x$189.$high, s7.$low + x$189.$low));
  ��		s6 = (x$190 = $shiftLeft64(carry[6], 21), new $Int64(s6.$high - x$190.$high, s6.$low - x$190.$low));
  ��		carry[7] = $shiftRightInt64(s7, 21);
  �		s8 = (x$191 = carry[7], new $Int64(s8.$high + x$191.$high, s8.$low + x$191.$low));
  �		s7 = (x$192 = $shiftLeft64(carry[7], 21), new $Int64(s7.$high - x$192.$high, s7.$low - x$192.$low));
  �.		carry[8] = $shiftRightInt64(s8, 21);
  �C		s9 = (x$193 = carry[8], new $Int64(s9.$high + x$193.$high, s9.$low + x$193.$low));
  �S		s8 = (x$194 = $shiftLeft64(carry[8], 21), new $Int64(s8.$high - x$194.$high, s8.$low - x$194.$low));
  �i		carry[9] = $shiftRightInt64(s9, 21);
  �~		s10 = (x$195 = carry[9], new $Int64(s10.$high + x$195.$high, s10.$low + x$195.$low));
  ��		s9 = (x$196 = $shiftLeft64(carry[9], 21), new $Int64(s9.$high - x$196.$high, s9.$low - x$196.$low));
  ��		carry[10] = $shiftRightInt64(s10, 21);
  ��		s11 = (x$197 = carry[10], new $Int64(s11.$high + x$197.$high, s11.$low + x$197.$low));
  ��		s10 = (x$198 = $shiftLeft64(carry[10], 21), new $Int64(s10.$high - x$198.$high, s10.$low - x$198.$low));
  ��		out.nilCheck, out[0] = (($shiftRightInt64(s0, 0).$low << 24 >>> 24));
  ��		out.nilCheck, out[1] = (($shiftRightInt64(s0, 8).$low << 24 >>> 24));
  �		out.nilCheck, out[2] = (((x$199 = $shiftRightInt64(s0, 16), x$200 = $shiftLeft64(s1, 5), new $Int64(x$199.$high | x$200.$high, (x$199.$low | x$200.$low) >>> 0)).$low << 24 >>> 24));
  �>		out.nilCheck, out[3] = (($shiftRightInt64(s1, 3).$low << 24 >>> 24));
  �V		out.nilCheck, out[4] = (($shiftRightInt64(s1, 11).$low << 24 >>> 24));
  �o		out.nilCheck, out[5] = (((x$201 = $shiftRightInt64(s1, 19), x$202 = $shiftLeft64(s2, 2), new $Int64(x$201.$high | x$202.$high, (x$201.$low | x$202.$low) >>> 0)).$low << 24 >>> 24));
  ��		out.nilCheck, out[6] = (($shiftRightInt64(s2, 6).$low << 24 >>> 24));
  ��		out.nilCheck, out[7] = (((x$203 = $shiftRightInt64(s2, 14), x$204 = $shiftLeft64(s3, 7), new $Int64(x$203.$high | x$204.$high, (x$203.$low | x$204.$low) >>> 0)).$low << 24 >>> 24));
  ��		out.nilCheck, out[8] = (($shiftRightInt64(s3, 1).$low << 24 >>> 24));
  ��		out.nilCheck, out[9] = (($shiftRightInt64(s3, 9).$low << 24 >>> 24));
  �		out.nilCheck, out[10] = (((x$205 = $shiftRightInt64(s3, 17), x$206 = $shiftLeft64(s4, 4), new $Int64(x$205.$high | x$206.$high, (x$205.$low | x$206.$low) >>> 0)).$low << 24 >>> 24));
  �-		out.nilCheck, out[11] = (($shiftRightInt64(s4, 4).$low << 24 >>> 24));
  �F		out.nilCheck, out[12] = (($shiftRightInt64(s4, 12).$low << 24 >>> 24));
  �`		out.nilCheck, out[13] = (((x$207 = $shiftRightInt64(s4, 20), x$208 = $shiftLeft64(s5, 1), new $Int64(x$207.$high | x$208.$high, (x$207.$low | x$208.$low) >>> 0)).$low << 24 >>> 24));
  ��		out.nilCheck, out[14] = (($shiftRightInt64(s5, 7).$low << 24 >>> 24));
  ��		out.nilCheck, out[15] = (((x$209 = $shiftRightInt64(s5, 15), x$210 = $shiftLeft64(s6, 6), new $Int64(x$209.$high | x$210.$high, (x$209.$low | x$210.$low) >>> 0)).$low << 24 >>> 24));
  ��		out.nilCheck, out[16] = (($shiftRightInt64(s6, 2).$low << 24 >>> 24));
  ��		out.nilCheck, out[17] = (($shiftRightInt64(s6, 10).$low << 24 >>> 24));
  ��		out.nilCheck, out[18] = (((x$211 = $shiftRightInt64(s6, 18), x$212 = $shiftLeft64(s7, 3), new $Int64(x$211.$high | x$212.$high, (x$211.$low | x$212.$low) >>> 0)).$low << 24 >>> 24));
  �$		out.nilCheck, out[19] = (($shiftRightInt64(s7, 5).$low << 24 >>> 24));
  �=		out.nilCheck, out[20] = (($shiftRightInt64(s7, 13).$low << 24 >>> 24));
  �W		out.nilCheck, out[21] = (($shiftRightInt64(s8, 0).$low << 24 >>> 24));
  �p		out.nilCheck, out[22] = (($shiftRightInt64(s8, 8).$low << 24 >>> 24));
  ��		out.nilCheck, out[23] = (((x$213 = $shiftRightInt64(s8, 16), x$214 = $shiftLeft64(s9, 5), new $Int64(x$213.$high | x$214.$high, (x$213.$low | x$214.$low) >>> 0)).$low << 24 >>> 24));
  ��		out.nilCheck, out[24] = (($shiftRightInt64(s9, 3).$low << 24 >>> 24));
  ��		out.nilCheck, out[25] = (($shiftRightInt64(s9, 11).$low << 24 >>> 24));
  ��		out.nilCheck, out[26] = (((x$215 = $shiftRightInt64(s9, 19), x$216 = $shiftLeft64(s10, 2), new $Int64(x$215.$high | x$216.$high, (x$215.$low | x$216.$low) >>> 0)).$low << 24 >>> 24));
  �		out.nilCheck, out[27] = (($shiftRightInt64(s10, 6).$low << 24 >>> 24));
  �'		out.nilCheck, out[28] = (((x$217 = $shiftRightInt64(s10, 14), x$218 = $shiftLeft64(s11, 7), new $Int64(x$217.$high | x$218.$high, (x$217.$low | x$218.$low) >>> 0)).$low << 24 >>> 24));
  �Q		out.nilCheck, out[29] = (($shiftRightInt64(s11, 1).$low << 24 >>> 24));
  �k		out.nilCheck, out[30] = (($shiftRightInt64(s11, 9).$low << 24 >>> 24));
  ��		out.nilCheck, out[31] = (($shiftRightInt64(s11, 17).$low << 24 >>> 24));
    	};
scReduce0crypto/ed25519/internal/edwards25519.arrayType$7*crypto/ed25519/internal/edwards25519.load3*crypto/ed25519/internal/edwards25519.load4-crypto/ed25519/internal/edwards25519.scReduce.crypto/ed25519/internal/edwards25519.sliceType >(*crypto/ed25519/internal/edwards25519.Scalar).nonAdjacentForm �	Scalar.ptr.prototype.nonAdjacentForm = function(w) {
		var _q, _r, bitBuf, carry, digits, i, indexBit, indexU64, naf, pos, s, w, width, window, windowMask, x, x$1, x$2, x$3, x$4, x$5;
		s = this;
    		if (s.s[31] > 127) {
  �X			$panic(new $String("scalar has high bit set illegally"));
    		}
    		if (w < 2) {
  ��			$panic(new $String("w must be at least 2 by the definition of NAF"));
    		} else if (w > 8) {
  ��			$panic(new $String("NAF digits must fit in int8"));
    		}
  �		naf = arrayType$8.zero();
  �!		digits = arrayType$9.zero();
  �8		i = 0;
		while (true) {
			if (!(i < 4)) { break; }
  �O			((i < 0 || i >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i] = $clone(binary.LittleEndian, binary.littleEndian).Uint64($subslice(new sliceType(s.s), ($imul(i, 8)))));
  �G			i = i + (1) >> 0;
    		}
  ��		width = ($shiftLeft64(new $Uint64(0, 1), w));
  ��		windowMask = (new $Uint64(width.$high - 0, width.$low - 1));
  ��		pos = 0;
  ��		carry = new $Uint64(0, 0);
  ��		while (true) {
			if (!(pos < 256)) { break; }
  ��			indexU64 = (_q = pos / 64, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  �			indexBit = (_r = pos % 64, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
  �)			bitBuf = new $Uint64(0, 0);
    			if (indexBit < (64 - w >>> 0)) {
  ��				bitBuf = $shiftRightUint64(((indexU64 < 0 || indexU64 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[indexU64]), indexBit);
    			} else {
  ��				bitBuf = (x = $shiftRightUint64(((indexU64 < 0 || indexU64 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[indexU64]), indexBit), x$1 = $shiftLeft64((x$2 = 1 + indexU64 >>> 0, ((x$2 < 0 || x$2 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[x$2])), ((64 - indexBit >>> 0))), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
    			}
  �y			window = (x$3 = new $Uint64(bitBuf.$high & windowMask.$high, (bitBuf.$low & windowMask.$low) >>> 0), new $Uint64(carry.$high + x$3.$high, carry.$low + x$3.$low));
    			if ((x$4 = new $Uint64(window.$high & 0, (window.$low & 1) >>> 0), (x$4.$high === 0 && x$4.$low === 0))) {
  ��				pos = pos + (1) >>> 0;
  ��				continue;
    			}
    			if ((x$5 = $div64(width, new $Uint64(0, 2), false), (window.$high < x$5.$high || (window.$high === x$5.$high && window.$low < x$5.$low)))) {
  �				carry = new $Uint64(0, 0);
  �				((pos < 0 || pos >= naf.length) ? ($throwRuntimeError("index out of range"), undefined) : naf[pos] = ((window.$low << 24 >> 24)));
    			} else {
  �@				carry = new $Uint64(0, 1);
  �M				((pos < 0 || pos >= naf.length) ? ($throwRuntimeError("index out of range"), undefined) : naf[pos] = (((window.$low << 24 >> 24)) - ((width.$low << 24 >> 24)) << 24 >> 24));
    			}
  �z			pos = pos + (w) >>> 0;
    		}
  ��		return naf;
    	};
	Scalar.prototype.nonAdjacentForm = function(w) { return this.$val.nonAdjacentForm(w); };
ScalarnonAdjacentForm~+crypto/ed25519/internal/edwards25519.Scalar0crypto/ed25519/internal/edwards25519.arrayType$80crypto/ed25519/internal/edwards25519.arrayType$9.crypto/ed25519/internal/edwards25519.sliceTypeencoding/binary.LittleEndianencoding/binary.littleEndian <(*crypto/ed25519/internal/edwards25519.Scalar).signedRadix16 �T	Scalar.ptr.prototype.signedRadix16 = function() {
		var _index, carry, digits, i, i$1, s, x, x$1, x$2, x$3;
		s = this;
    		if (s.s[31] > 127) {
  ��			$panic(new $String("scalar has high bit set illegally"));
    		}
  �		digits = arrayType$10.zero();
  �G		i = 0;
		while (true) {
			if (!(i < 32)) { break; }
  �_			(x$1 = $imul(2, i), ((x$1 < 0 || x$1 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[x$1] = (((((x = s.s, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])) & 15) >>> 0) << 24 >> 24))));
  ��			(x$3 = ($imul(2, i)) + 1 >> 0, ((x$3 < 0 || x$3 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[x$3] = (((((((x$2 = s.s, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])) >>> 4 << 24 >>> 24)) & 15) >>> 0) << 24 >> 24))));
  �W			i = i + (1) >> 0;
    		}
  ��		i$1 = 0;
		while (true) {
			if (!(i$1 < 63)) { break; }
  ��			carry = ((((i$1 < 0 || i$1 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i$1]) + 8 << 24 >> 24)) >> 4 << 24 >> 24;
  �			((i$1 < 0 || i$1 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i$1] = (((i$1 < 0 || i$1 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i$1]) - ((carry << 4 << 24 >> 24)) << 24 >> 24));
    			_index = i$1 + 1 >> 0;
  � 			((_index < 0 || _index >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[_index] = (((_index < 0 || _index >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[_index]) + (carry) << 24 >> 24));
  ��			i$1 = i$1 + (1) >> 0;
    		}
  �:		return digits;
    	};
	Scalar.prototype.signedRadix16 = function() { return this.$val.signedRadix16(); };
ScalarsignedRadix16~+crypto/ed25519/internal/edwards25519.Scalar1crypto/ed25519/internal/edwards25519.arrayType$10 3crypto/ed25519/internal/edwards25519.basepointTable$crypto/ed25519/internal/edwards25519basepointTable basepointTable��	basepointTable = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ��		$r = basepointTablePrecomp.initOnce.Do((function() {
			var i, j, p, x;
  �			p = NewGeneratorPoint();
  �&			i = 0;
			while (true) {
				if (!(i < 32)) { break; }
  �?				(x = basepointTablePrecomp.table, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i])).FromP3(p);
  �o				j = 0;
				while (true) {
					if (!(j < 8)) { break; }
  ��					p.Add(p, p);
  �~					j = j + (1) >> 0;
    				}
  �6				i = i + (1) >> 0;
    			}
    		})); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		$s = -1; return basepointTablePrecomp.table;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: basepointTable }; } $f.$s = $s; $f.$r = $r; return $f;
	};
basepointTable6crypto/ed25519/internal/edwards25519.NewGeneratorPoint3crypto/ed25519/internal/edwards25519.basepointTable:crypto/ed25519/internal/edwards25519.basepointTablePrecomp <(*crypto/ed25519/internal/edwards25519.Point).ScalarBaseMult ��	Point.ptr.prototype.ScalarBaseMult = function(x) {
		var _q, _q$1, _r, basepointTable$1, digits, i, i$1, multiple, tmp1, tmp2, v, x, x$1, x$2, x$3, x$4, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _r = $f._r; basepointTable$1 = $f.basepointTable$1; digits = $f.digits; i = $f.i; i$1 = $f.i$1; multiple = $f.multiple; tmp1 = $f.tmp1; tmp2 = $f.tmp2; v = $f.v; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  ��		_r = basepointTable(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		basepointTable$1 = _r;
  ��		digits = $clone(x.signedRadix16(), arrayType$10);
  �		multiple = new affineCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �*		tmp1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �@		tmp2 = new projP2.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �|		v.Set(NewIdentityPoint());
  ��		i = 1;
		while (true) {
			if (!(i < 64)) { break; }
  ��			(x$1 = basepointTable$1, x$2 = (_q = i / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])).SelectInto(multiple, ((i < 0 || i >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i]));
  ��			tmp1.AddAffine(v, multiple);
  �
			v.fromP1xP1(tmp1);
  ��			i = i + (2) >> 0;
    		}
  �4		tmp2.FromP3(v);
  �f		tmp1.Double(tmp2);
  ��		tmp2.FromP1xP1(tmp1);
  ��		tmp1.Double(tmp2);
  �		tmp2.FromP1xP1(tmp1);
  �4		tmp1.Double(tmp2);
  �i		tmp2.FromP1xP1(tmp1);
  ��		tmp1.Double(tmp2);
  ��		v.fromP1xP1(tmp1);
  �-		i$1 = 0;
		while (true) {
			if (!(i$1 < 64)) { break; }
  �H			(x$3 = basepointTable$1, x$4 = (_q$1 = i$1 / 2, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")), ((x$4 < 0 || x$4 >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[x$4])).SelectInto(multiple, ((i$1 < 0 || i$1 >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i$1]));
  �~			tmp1.AddAffine(v, multiple);
  ��			v.fromP1xP1(tmp1);
  �=			i$1 = i$1 + (2) >> 0;
    		}
  ��		$s = -1; return v;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Point.ptr.prototype.ScalarBaseMult }; } $f._q = _q; $f._q$1 = _q$1; $f._r = _r; $f.basepointTable$1 = basepointTable$1; $f.digits = digits; $f.i = i; $f.i$1 = i$1; $f.multiple = multiple; $f.tmp1 = tmp1; $f.tmp2 = tmp2; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.$s = $s; $f.$r = $r; return $f;
	};
	Point.prototype.ScalarBaseMult = function(x) { return this.$val.ScalarBaseMult(x); };
Point
5crypto/ed25519/internal/edwards25519.NewIdentityPoint*crypto/ed25519/internal/edwards25519.Point1crypto/ed25519/internal/edwards25519.affineCached1crypto/ed25519/internal/edwards25519.arrayType$103crypto/ed25519/internal/edwards25519.basepointTable/crypto/ed25519/internal/edwards25519.fromP1xP1~.crypto/ed25519/internal/edwards25519.projP1xP1+crypto/ed25519/internal/edwards25519.projP23crypto/ed25519/internal/edwards25519.signedRadix16~2crypto/ed25519/internal/edwards25519/field.Element 8(*crypto/ed25519/internal/edwards25519.Point).ScalarMult �	�	Point.ptr.prototype.ScalarMult = function(x, q) {
		var digits, i, multiple, q, table, tmp1, tmp2, v, x;
		v = this;
  �`		checkInitialized(new sliceType$1([q]));
  �z		table = new projLookupTable.ptr(arrayType$11.zero());
  ��		table.FromP3(q);
  ��		digits = $clone(x.signedRadix16(), arrayType$10);
  �		multiple = new projCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �&		tmp1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �<		tmp2 = new projP2.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �O		table.SelectInto(multiple, digits[63]);
  �x		v.Set(NewIdentityPoint());
  ��		tmp1.Add(v, multiple);
  ��		i = 62;
		while (true) {
			if (!(i >= 0)) { break; }
  ��			tmp2.FromP1xP1(tmp1);
  � 			tmp1.Double(tmp2);
  �[			tmp2.FromP1xP1(tmp1);
  ��			tmp1.Double(tmp2);
  ��			tmp2.FromP1xP1(tmp1);
  �			tmp1.Double(tmp2);
  �A			tmp2.FromP1xP1(tmp1);
  �y			tmp1.Double(tmp2);
  ��			v.fromP1xP1(tmp1);
  ��			table.SelectInto(multiple, ((i < 0 || i >= digits.length) ? ($throwRuntimeError("index out of range"), undefined) : digits[i]));
  �			tmp1.Add(v, multiple);
  ��			i = i - (1) >> 0;
    		}
  �Z		v.fromP1xP1(tmp1);
  �m		return v;
    	};
	Point.prototype.ScalarMult = function(x, q) { return this.$val.ScalarMult(x, q); };
Point5crypto/ed25519/internal/edwards25519.NewIdentityPoint*crypto/ed25519/internal/edwards25519.Point1crypto/ed25519/internal/edwards25519.arrayType$101crypto/ed25519/internal/edwards25519.arrayType$115crypto/ed25519/internal/edwards25519.checkInitialized/crypto/ed25519/internal/edwards25519.fromP1xP1~/crypto/ed25519/internal/edwards25519.projCached4crypto/ed25519/internal/edwards25519.projLookupTable.crypto/ed25519/internal/edwards25519.projP1xP1+crypto/ed25519/internal/edwards25519.projP23crypto/ed25519/internal/edwards25519.signedRadix16~0crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element 6crypto/ed25519/internal/edwards25519.basepointNafTable$crypto/ed25519/internal/edwards25519basepointNafTable basepointNafTable��	basepointNafTable = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = basepointNafTablePrecomp.initOnce.Do((function() {
  �D			basepointNafTablePrecomp.table.FromP3(NewGeneratorPoint());
    		})); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ��		$s = -1; return basepointNafTablePrecomp.table;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: basepointNafTable }; } $f.$s = $s; $f.$r = $r; return $f;
	};
basepointNafTable6crypto/ed25519/internal/edwards25519.NewGeneratorPoint6crypto/ed25519/internal/edwards25519.basepointNafTable=crypto/ed25519/internal/edwards25519.basepointNafTablePrecomp I(*crypto/ed25519/internal/edwards25519.Point).VarTimeDoubleScalarBaseMult �H	Point.ptr.prototype.VarTimeDoubleScalarBaseMult = function(a, A, b) {
		var A, _r, a, aNaf, aTable, b, bNaf, basepointNafTable$1, i, j, multA, multB, tmp1, tmp2, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; A = $f.A; _r = $f._r; a = $f.a; aNaf = $f.aNaf; aTable = $f.aTable; b = $f.b; bNaf = $f.bNaf; basepointNafTable$1 = $f.basepointNafTable$1; i = $f.i; j = $f.j; multA = $f.multA; multB = $f.multB; tmp1 = $f.tmp1; tmp2 = $f.tmp2; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = this;
  ��		checkInitialized(new sliceType$1([A]));
  ��		_r = basepointNafTable(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		basepointNafTable$1 = _r;
  ��		aTable = new nafLookupTable5.ptr(arrayType$11.zero());
  ��		aTable.FromP3(A);
  �M		aNaf = $clone(a.nonAdjacentForm(5), arrayType$8);
  �k		bNaf = $clone(b.nonAdjacentForm(8), arrayType$8);
  ��		i = 255;
  ��		j = i;
		while (true) {
			if (!(j >= 0)) { break; }
    			if (!((((j < 0 || j >= aNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : aNaf[j]) === 0)) || !((((j < 0 || j >= bNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : bNaf[j]) === 0))) {
  ��				break;
    			}
  ��			j = j - (1) >> 0;
    		}
  �		multA = new projCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �$		multB = new affineCached.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �>		tmp1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �T		tmp2 = new projP2.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �g		tmp2.Zero();
  �		while (true) {
			if (!(i >= 0)) { break; }
  �,			tmp1.Double(tmp2);
    			if (((i < 0 || i >= aNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : aNaf[i]) > 0) {
  ��				v.fromP1xP1(tmp1);
  ��				aTable.SelectInto(multA, ((i < 0 || i >= aNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : aNaf[i]));
  ��				tmp1.Add(v, multA);
    			} else if (((i < 0 || i >= aNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : aNaf[i]) < 0) {
  ��				v.fromP1xP1(tmp1);
  �				aTable.SelectInto(multA, -((i < 0 || i >= aNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : aNaf[i]));
  �3				tmp1.Sub(v, multA);
    			}
    			if (((i < 0 || i >= bNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : bNaf[i]) > 0) {
  �a				v.fromP1xP1(tmp1);
  �v				basepointNafTable$1.SelectInto(multB, ((i < 0 || i >= bNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : bNaf[i]));
  ��				tmp1.AddAffine(v, multB);
    			} else if (((i < 0 || i >= bNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : bNaf[i]) < 0) {
  ��				v.fromP1xP1(tmp1);
  ��				basepointNafTable$1.SelectInto(multB, -((i < 0 || i >= bNaf.length) ? ($throwRuntimeError("index out of range"), undefined) : bNaf[i]));
  �"				tmp1.SubAffine(v, multB);
    			}
  �B			tmp2.FromP1xP1(tmp1);
  �$			i = i - (1) >> 0;
    		}
  �\		v.fromP2(tmp2);
  �l		$s = -1; return v;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Point.ptr.prototype.VarTimeDoubleScalarBaseMult }; } $f.A = A; $f._r = _r; $f.a = a; $f.aNaf = aNaf; $f.aTable = aTable; $f.b = b; $f.bNaf = bNaf; $f.basepointNafTable$1 = basepointNafTable$1; $f.i = i; $f.j = j; $f.multA = multA; $f.multB = multB; $f.tmp1 = tmp1; $f.tmp2 = tmp2; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Point.prototype.VarTimeDoubleScalarBaseMult = function(a, A, b) { return this.$val.VarTimeDoubleScalarBaseMult(a, A, b); };
Point*crypto/ed25519/internal/edwards25519.Point1crypto/ed25519/internal/edwards25519.affineCached1crypto/ed25519/internal/edwards25519.arrayType$110crypto/ed25519/internal/edwards25519.arrayType$86crypto/ed25519/internal/edwards25519.basepointNafTable5crypto/ed25519/internal/edwards25519.checkInitialized/crypto/ed25519/internal/edwards25519.fromP1xP1~,crypto/ed25519/internal/edwards25519.fromP2~4crypto/ed25519/internal/edwards25519.nafLookupTable55crypto/ed25519/internal/edwards25519.nonAdjacentForm~/crypto/ed25519/internal/edwards25519.projCached.crypto/ed25519/internal/edwards25519.projP1xP1+crypto/ed25519/internal/edwards25519.projP20crypto/ed25519/internal/edwards25519.sliceType$12crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519.projLookupTable).FromP3 �q	projLookupTable.ptr.prototype.FromP3 = function(q) {
		var i, q, tmpP1xP1, tmpP3, v, x, x$1, x$2;
		v = this;
  �+		v.points[0].FromP3(q);
  �B		tmpP3 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  �T		tmpP1xP1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  �q		i = 0;
		while (true) {
			if (!(i < 7)) { break; }
  �I			(x = v.points, x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])).FromP3(tmpP3.fromP1xP1(tmpP1xP1.Add(q, (x$2 = v.points, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])))));
  ��			i = i + (1) >> 0;
    		}
    	};
	projLookupTable.prototype.FromP3 = function(q) { return this.$val.FromP3(q); };
projLookupTable*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3/crypto/ed25519/internal/edwards25519.fromP1xP1~4crypto/ed25519/internal/edwards25519.projLookupTable.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element @(*crypto/ed25519/internal/edwards25519.affineLookupTable).FromP3 �{	affineLookupTable.ptr.prototype.FromP3 = function(q) {
		var i, q, tmpP1xP1, tmpP3, v, x, x$1, x$2;
		v = this;
  �}		v.points[0].FromP3(q);
  ��		tmpP3 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  ��		tmpP1xP1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  ��		i = 0;
		while (true) {
			if (!(i < 7)) { break; }
  �			(x = v.points, x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])).FromP3(tmpP3.fromP1xP1(tmpP1xP1.AddAffine(q, (x$2 = v.points, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])))));
  ��			i = i + (1) >> 0;
    		}
    	};
	affineLookupTable.prototype.FromP3 = function(q) { return this.$val.FromP3(q); };
affineLookupTable*crypto/ed25519/internal/edwards25519.Point6crypto/ed25519/internal/edwards25519.affineLookupTable0crypto/ed25519/internal/edwards25519.arrayType$3/crypto/ed25519/internal/edwards25519.fromP1xP1~.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519.nafLookupTable5).FromP3 ��	nafLookupTable5.ptr.prototype.FromP3 = function(q) {
		var i, q, q2, tmpP1xP1, tmpP3, v, x, x$1, x$2;
		v = this;
  �>		v.points[0].FromP3(q);
  �U		q2 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  �d		q2.Add(q, q);
  �r		tmpP3 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  ��		tmpP1xP1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  ��		i = 0;
		while (true) {
			if (!(i < 7)) { break; }
  ��			(x = v.points, x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])).FromP3(tmpP3.fromP1xP1(tmpP1xP1.Add(q2, (x$2 = v.points, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])))));
  ��			i = i + (1) >> 0;
    		}
    	};
	nafLookupTable5.prototype.FromP3 = function(q) { return this.$val.FromP3(q); };
nafLookupTable5*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3/crypto/ed25519/internal/edwards25519.fromP1xP1~4crypto/ed25519/internal/edwards25519.nafLookupTable5.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element >(*crypto/ed25519/internal/edwards25519.nafLookupTable8).FromP3 ��	nafLookupTable8.ptr.prototype.FromP3 = function(q) {
		var i, q, q2, tmpP1xP1, tmpP3, v, x, x$1, x$2;
		v = this;
  ��		v.points[0].FromP3(q);
  ��		q2 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  ��		q2.Add(q, q);
  ��		tmpP3 = new Point.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), arrayType$3.zero());
  ��		tmpP1xP1 = new projP1xP1.ptr(new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)), new field.Element.ptr(new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0), new $Uint64(0, 0)));
  ��		i = 0;
		while (true) {
			if (!(i < 63)) { break; }
  ��			(x = v.points, x$1 = i + 1 >> 0, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])).FromP3(tmpP3.fromP1xP1(tmpP1xP1.AddAffine(q2, (x$2 = v.points, ((i < 0 || i >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[i])))));
  ��			i = i + (1) >> 0;
    		}
    	};
	nafLookupTable8.prototype.FromP3 = function(q) { return this.$val.FromP3(q); };
nafLookupTable8*crypto/ed25519/internal/edwards25519.Point0crypto/ed25519/internal/edwards25519.arrayType$3/crypto/ed25519/internal/edwards25519.fromP1xP1~4crypto/ed25519/internal/edwards25519.nafLookupTable8.crypto/ed25519/internal/edwards25519.projP1xP12crypto/ed25519/internal/edwards25519/field.Element B(*crypto/ed25519/internal/edwards25519.projLookupTable).SelectInto ��	projLookupTable.ptr.prototype.SelectInto = function(dest, x) {
		var cond, dest, j, v, x, x$1, x$2, xabs, xmask;
		v = this;
  ��		xmask = x >> 7 << 24 >> 24;
  �		xabs = ((((((x + xmask << 24 >> 24)) ^ xmask) << 24 >> 24) << 24 >>> 24));
  �&		dest.Zero();
  �7		j = 1;
		while (true) {
			if (!(j <= 8)) { break; }
  �n			cond = subtle.ConstantTimeByteEq(xabs, ((j << 24 >>> 24)));
  ��			dest.Select((x$1 = v.points, x$2 = j - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])), dest, cond);
  �G			j = j + (1) >> 0;
    		}
  �		dest.CondNeg((((xmask & 1) >> 0)));
    	};
	projLookupTable.prototype.SelectInto = function(dest, x) { return this.$val.SelectInto(dest, x); };
projLookupTable4crypto/ed25519/internal/edwards25519.projLookupTable crypto/subtle.ConstantTimeByteEq D(*crypto/ed25519/internal/edwards25519.affineLookupTable).SelectInto ��	affineLookupTable.ptr.prototype.SelectInto = function(dest, x) {
		var cond, dest, j, v, x, x$1, x$2, xabs, xmask;
		v = this;
  ��		xmask = x >> 7 << 24 >> 24;
  ��		xabs = ((((((x + xmask << 24 >> 24)) ^ xmask) << 24 >> 24) << 24 >>> 24));
  ��		dest.Zero();
  �		j = 1;
		while (true) {
			if (!(j <= 8)) { break; }
  �9			cond = subtle.ConstantTimeByteEq(xabs, ((j << 24 >>> 24)));
  �m			dest.Select((x$1 = v.points, x$2 = j - 1 >> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])), dest, cond);
  �			j = j + (1) >> 0;
    		}
  ��		dest.CondNeg((((xmask & 1) >> 0)));
    	};
	affineLookupTable.prototype.SelectInto = function(dest, x) { return this.$val.SelectInto(dest, x); };
affineLookupTable6crypto/ed25519/internal/edwards25519.affineLookupTable crypto/subtle.ConstantTimeByteEq B(*crypto/ed25519/internal/edwards25519.nafLookupTable5).SelectInto ��	nafLookupTable5.ptr.prototype.SelectInto = function(dest, x) {
		var _q, dest, v, x, x$1, x$2;
		v = this;
  �q		projCached.copy(dest, (x$1 = v.points, x$2 = (_q = x / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])));
    	};
	nafLookupTable5.prototype.SelectInto = function(dest, x) { return this.$val.SelectInto(dest, x); };
nafLookupTable54crypto/ed25519/internal/edwards25519.nafLookupTable5/crypto/ed25519/internal/edwards25519.projCached B(*crypto/ed25519/internal/edwards25519.nafLookupTable8).SelectInto ��	nafLookupTable8.ptr.prototype.SelectInto = function(dest, x) {
		var _q, dest, v, x, x$1, x$2;
		v = this;
  �		affineCached.copy(dest, (x$1 = v.points, x$2 = (_q = x / 2, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])));
    	};
	nafLookupTable8.prototype.SelectInto = function(dest, x) { return this.$val.SelectInto(dest, x); };
nafLookupTable81crypto/ed25519/internal/edwards25519.affineCached4crypto/ed25519/internal/edwards25519.nafLookupTable8 �(�{"Base":46887,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/doc.go","Base":1,"Size":1029,"Lines":[0,59,113,163,164,241,244,293,296,374,425,428,509,578,640,643,718,793,840,843,923,1008],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/edwards25519.go","Base":1031,"Size":10595,"Lines":[0,59,113,163,164,185,186,195,241,251,253,254,270,271,295,321,323,324,345,368,370,371,426,429,507,532,535,606,626,703,782,808,809,882,947,963,965,966,994,995,1037,1065,1125,1178,1182,1185,1187,1188,1213,1252,1254,1255,1282,1318,1320,1321,1338,1339,1373,1385,1396,1407,1417,1419,1420,1458,1504,1553,1603,1604,1665,1698,1731,1733,1734,1807,1871,1918,1967,2016,2065,2115,2116,2189,2223,2257,2259,2260,2302,2318,2335,2346,2360,2370,2372,2373,2419,2435,2452,2466,2476,2478,2479,2495,2496,2530,2569,2578,2588,2590,2591,2604,2605,2682,2700,2733,2808,2844,2862,2884,2886,2887,2933,2954,2955,2985,3026,3064,3102,3103,3137,3175,3187,3189,3190,3227,3228,3302,3381,3442,3445,3520,3593,3632,3685,3753,3819,3864,3938,3942,4018,4093,4123,4124,4143,4215,4218,4255,4256,4285,4329,4362,4363,4379,4415,4460,4461,4478,4520,4544,4545,4563,4617,4638,4703,4706,4707,4767,4807,4849,4850,4863,4875,4886,4921,4922,4937,4939,4940,5004,5029,5044,5046,5047,5063,5064,5115,5141,5167,5193,5203,5205,5206,5250,5265,5280,5295,5305,5307,5308,5357,5383,5409,5435,5461,5471,5473,5474,5517,5543,5569,5587,5613,5623,5625,5626,5668,5712,5761,5810,5859,5909,5947,5948,6000,6026,6058,6073,6099,6109,6111,6112,6168,6194,6226,6252,6253,6277,6296,6333,6372,6403,6413,6415,6416,6449,6450,6488,6530,6554,6592,6634,6662,6664,6665,6708,6755,6779,6817,6859,6887,6889,6890,6952,7006,7007,7031,7061,7062,7095,7130,7159,7185,7186,7207,7208,7232,7251,7273,7300,7310,7312,7313,7375,7429,7430,7454,7484,7485,7535,7585,7614,7640,7641,7662,7663,7687,7706,7749,7792,7802,7804,7805,7875,7928,7929,7953,7983,7984,8017,8052,8081,8082,8102,8103,8127,8146,8167,8193,8203,8205,8206,8276,8329,8330,8354,8384,8385,8435,8485,8514,8515,8535,8536,8560,8579,8621,8663,8673,8675,8676,8689,8690,8741,8782,8783,8800,8817,8835,8856,8882,8910,8911,8930,8954,8955,8986,9012,9022,9024,9025,9038,9039,9077,9119,9140,9158,9173,9188,9206,9216,9218,9219,9280,9318,9342,9343,9377,9402,9427,9452,9477,9478,9516,9518,9519,9547,9548,9606,9676,9721,9769,9799,9835,9845,9847,9848,9906,9982,10027,10075,10111,10121,10123,10124,10196,10249,10282,10345,10355,10357,10358,10430,10487,10520,10583,10593],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/scalar.go","Base":11627,"Size":25055,"Lines":[0,59,113,163,164,185,186,195,212,231,241,243,244,277,280,338,341,396,399,467,502,505,548,569,641,665,677,679,680,686,809,810,932,933,1087,1089,1090,1130,1157,1175,1177,1178,1234,1290,1324,1334,1336,1337,1381,1426,1450,1488,1498,1500,1501,1550,1600,1625,1668,1678,1680,1681,1725,1770,1795,1843,1853,1855,1856,1905,1955,1979,2018,2028,2030,2031,2065,2107,2116,2126,2128,2129,2208,2237,2290,2309,2371,2374,2398,2424,2452,2462,2464,2465,2545,2623,2683,2747,2766,2816,2819,2836,2854,2875,2927,2930,2942,2957,2959,2960,3027,3060,3098,3109,3142,3158,3191,3206,3210,3213,3226,3228,3229,3303,3381,3426,3429,3507,3588,3661,3742,3813,3888,3946,4023,4092,4158,4236,4255,4322,4325,4349,4375,4396,4417,4438,4466,4476,4478,4479,4547,4581,4606,4625,4637,4639,4640,4698,4738,4789,4791,4792,4864,4908,4909,4939,4958,4982,5007,5017,5019,5020,5050,5069,5093,5118,5143,5153,5155,5156,5166,5206,5246,5286,5289,5300,5351,5414,5452,5481,5518,5555,5592,5630,5668,5706,5744,5775,5813,5852,5881,5910,5947,5984,6021,6059,6097,6135,6173,6204,6242,6281,6310,6339,6376,6413,6450,6488,6526,6564,6602,6633,6671,6710,6739,6760,6761,6779,6805,6839,6881,6931,6989,7055,7129,7211,7301,7403,7515,7613,7703,7785,7859,7925,7983,8033,8075,8109,8135,8153,8170,8171,8206,8222,8244,8279,8295,8317,8352,8368,8390,8425,8441,8463,8498,8514,8536,8573,8591,8615,8652,8670,8694,8731,8749,8773,8810,8828,8852,8889,8907,8931,8968,8986,9010,9047,9065,9089,9090,9125,9141,9163,9198,9214,9236,9271,9287,9309,9344,9360,9382,9417,9434,9456,9493,9511,9535,9572,9590,9614,9651,9669,9693,9730,9748,9772,9809,9827,9851,9888,9906,9930,9931,9952,9973,9994,10015,10036,10057,10066,10067,10088,10109,10130,10151,10172,10193,10202,10203,10223,10244,10265,10286,10307,10328,10337,10338,10358,10378,10399,10420,10441,10462,10471,10472,10492,10512,10532,10553,10574,10595,10604,10605,10625,10645,10665,10685,10706,10727,10736,10737,10772,10788,10810,10845,10861,10883,10920,10938,10962,10999,11017,11041,11078,11096,11120,11157,11175,11199,11200,11235,11251,11273,11308,11325,11347,11384,11402,11426,11463,11481,11505,11542,11560,11584,11585,11605,11625,11645,11665,11685,11706,11715,11716,11736,11756,11776,11796,11816,11836,11845,11846,11866,11886,11906,11926,11946,11966,11975,11976,11996,12016,12036,12056,12076,12096,12105,12106,12126,12146,12166,12186,12206,12226,12235,12236,12256,12276,12296,12316,12336,12356,12365,12366,12401,12417,12439,12474,12490,12512,12547,12563,12585,12620,12636,12658,12693,12709,12731,12768,12786,12810,12811,12846,12862,12884,12919,12935,12957,12992,13008,13030,13065,13081,13103,13138,13155,13177,13214,13232,13256,13257,13277,13297,13317,13337,13357,13377,13386,13387,13408,13424,13446,13467,13483,13505,13526,13542,13564,13585,13601,13623,13644,13660,13682,13703,13719,13741,13762,13778,13800,13821,13837,13859,13880,13896,13918,13939,13956,13978,14001,14019,14043,14066,14084,14108,14109,14129,14149,14169,14189,14209,14229,14238,14239,14260,14276,14298,14319,14335,14357,14378,14394,14416,14437,14453,14475,14496,14512,14534,14555,14571,14593,14614,14630,14652,14673,14689,14711,14732,14748,14770,14791,14808,14830,14853,14871,14895,14896,14918,14940,14977,14999,15022,15059,15081,15118,15140,15162,15200,15223,15247,15285,15308,15346,15369,15393,15431,15454,15478,15501,15524,15562,15585,15609,15648,15672,15712,15736,15760,15785,15787,15788,15798,15838,15841,15852,15898,15961,16005,16034,16071,16108,16145,16183,16221,16259,16297,16328,16366,16405,16444,16483,16522,16561,16600,16632,16671,16710,16749,16788,16827,16866,16895,16896,16917,16938,16959,16980,17001,17022,17031,17032,17053,17074,17095,17116,17137,17158,17167,17168,17188,17209,17230,17251,17272,17293,17302,17303,17323,17343,17364,17385,17406,17427,17436,17437,17457,17477,17497,17518,17539,17560,17569,17570,17590,17610,17630,17650,17671,17692,17701,17702,17723,17724,17759,17775,17797,17832,17848,17870,17907,17925,17949,17986,18004,18028,18065,18083,18107,18144,18162,18186,18187,18222,18238,18260,18295,18312,18334,18371,18389,18413,18450,18468,18492,18529,18547,18571,18572,18592,18612,18632,18652,18672,18693,18702,18703,18723,18743,18763,18783,18803,18823,18832,18833,18853,18873,18893,18913,18933,18953,18962,18963,18983,19003,19023,19043,19063,19083,19092,19093,19113,19133,19153,19173,19193,19213,19222,19223,19243,19263,19283,19303,19323,19343,19352,19353,19388,19404,19426,19461,19477,19499,19534,19550,19572,19607,19623,19645,19680,19696,19718,19755,19773,19797,19798,19833,19849,19871,19906,19922,19944,19979,19995,20017,20052,20068,20090,20125,20142,20164,20201,20219,20243,20244,20264,20284,20304,20324,20344,20364,20373,20374,20395,20411,20433,20454,20470,20492,20513,20529,20551,20572,20588,20610,20631,20647,20669,20690,20706,20728,20749,20765,20787,20808,20824,20846,20867,20883,20905,20926,20943,20965,20988,21006,21030,21053,21071,21095,21096,21116,21136,21156,21176,21196,21216,21225,21226,21247,21263,21285,21306,21322,21344,21365,21381,21403,21424,21440,21462,21483,21499,21521,21542,21558,21580,21601,21617,21639,21660,21676,21698,21719,21735,21757,21778,21795,21817,21840,21858,21882,21883,21907,21931,21970,21994,22019,22058,22082,22121,22145,22169,22209,22234,22260,22300,22325,22365,22390,22416,22456,22481,22507,22532,22557,22597,22622,22648,22689,22715,22757,22783,22809,22836,22838,22839,22912,22915,22976,23029,23077,23126,23255,23275,23320,23323,23335,23392,23411,23450,23453,23454,23473,23495,23496,23522,23574,23577,23578,23603,23636,23637,23653,23673,23690,23713,23736,23756,23779,23834,23875,23886,23947,24032,24036,24037,24076,24118,24119,24140,24208,24242,24283,24324,24365,24426,24438,24450,24454,24455,24479,24492,24519,24530,24543,24584,24588,24589,24600,24603,24615,24617,24618,24662,24682,24727,24730,24731,24752,24753,24791,24818,24852,24895,24898,24899,24926,24953,24985,25011,25034,25037,25038,25053],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/scalarmult.go","Base":36683,"Size":6444,"Lines":[0,59,113,163,164,185,186,200,201,281,351,398,442,469,497,541,569,585,590,594,598,635,637,638,673,705,725,727,728,802,816,819,874,925,961,962,1020,1058,1062,1098,1157,1216,1275,1335,1339,1398,1443,1472,1473,1502,1524,1543,1544,1584,1611,1641,1695,1725,1745,1748,1749,1768,1818,1871,1921,1974,2024,2077,2127,2180,2233,2234,2269,2299,2353,2383,2403,2406,2407,2417,2419,2420,2465,2468,2523,2580,2601,2602,2629,2646,2647,2677,2709,2768,2817,2821,2873,2915,2944,2945,3007,3034,3056,3075,3115,3116,3143,3199,3227,3283,3342,3398,3457,3513,3572,3628,3687,3743,3783,3851,3854,3873,3883,3885,3886,3949,3996,4040,4087,4148,4152,4192,4194,4195,4233,4259,4279,4281,4282,4362,4391,4394,4435,4520,4541,4542,4605,4668,4728,4782,4800,4804,4865,4928,4990,5052,5111,5170,5192,5193,5235,5263,5281,5340,5377,5407,5437,5438,5478,5488,5515,5551,5560,5564,5567,5568,5592,5618,5640,5659,5672,5673,5730,5792,5834,5855,5875,5876,5933,5952,5973,6010,6032,6058,6079,6117,6139,6143,6144,6163,6184,6232,6260,6286,6307,6356,6384,6388,6389,6412,6415,6416,6432,6442],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/crypto/ed25519/internal/edwards25519/tables.go","Base":43128,"Size":3758,"Lines":[0,59,113,163,164,185,186,195,212,214,215,287,317,339,341,342,415,447,471,473,474,546,576,598,600,601,674,704,729,731,732,749,750,793,838,892,946,969,987,1012,1038,1098,1163,1231,1302,1305,1307,1308,1385,1432,1486,1540,1563,1581,1606,1632,1692,1769,1772,1774,1775,1818,1863,1924,1989,2012,2027,2041,2059,2084,2110,2183,2186,2188,2189,2266,2311,2334,2349,2363,2381,2406,2433,2512,2515,2517,2518,2532,2533,2591,2656,2679,2696,2732,2733,2746,2773,2804,2856,2898,2901,2955,2985,2987,2988,3046,3115,3138,3155,3191,3192,3205,3232,3263,3315,3357,3360,3414,3444,3446,3447,3511,3576,3599,3601,3602,3666,3733,3756],"Infos":null}]}
 