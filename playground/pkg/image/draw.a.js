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
GoLinkname�� Implementation�� 	Reference��   �t2��
image/drawdrawimageimage/colorimage/internal/imageutil�i ��dstImage r	RectangleimagesrcspPointopOpmaskmpDrawDrawerSetxycColorimage/colorQuantizepPalettemRGBA64Image	SetRGBA64RGBA64MinMaxStringDxDySizeAddSubInsetn	IntersectsUnionEmptyEqOverlapsInCanonAtRGBA64AtBounds
ColorModelModelXYqMulkDivModRGBAgbaConvertIndexRGBAdrawDrawMaskFloydSteinbergOver	QuantizerSrccolor 
   $ -
F     # & !) *,  F     # & !) 0& 5) *,  
  8    # & !)  T ] =
V u NT
 & D H J L{  T ~T  8 *,    # & !)  C ,  kT
  ` i� s& 
� T � u �T
 � D H J L{   � H J L�  T �C , �) 
 �) 
 �TT � � #  
 � #  
 � #  
 � #  
) � # i) 
#  � # i) 
#  � # � 
#  � # �# 
#  � # �# 
#  � #  
  � # �# 
   � # �# 
   � # �# 
   � #  
# � # H J 
{  � # H J 
�  � #  
# � #  
�  � H J 
{  �  
# �  
�T � � 
 � 
T � � i)  
 � i) �) 
)  � i) �) 
)  � i) � 
)  � i) � 
)  � i) # 
   � i) # 
)  � i) �) 
  T  �  	 �	 �	 �	T �{T � � i� L{ 
{  � i� L{ 
  & � H J 
� T �T � 
 � 
 � 
 � 
T � � L�  	 �	 �	 �	T  � L{ 
{ T �
� 
8�#=R�Xr-u����u��� �$�u��T� N���k���+ image	image = $packages["image"];
��    		$r = image.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  color#	color = $packages["image/color"];
��    		$r = color.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	imageutil4	imageutil = $packages["image/internal/imageutil"];
��    		$r = imageutil.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Imagea	Image = $pkg.Image = $newType(8, $kindInterface, "draw.Image", true, "image/draw", true, null);
�w	Image.init([{prop: "At", name: "At", pkg: "", typ: $funcType([$Int, $Int], [color.Color], false)}, {prop: "Bounds", name: "Bounds", pkg: "", typ: $funcType([], [image.Rectangle], false)}, {prop: "ColorModel", name: "ColorModel", pkg: "", typ: $funcType([], [color.Model], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$Int, $Int, color.Color], [], false)}]);
Imageimage.Rectangleimage/color.Colorimage/color.Modelimage/draw.Image  RGBA64Images	RGBA64Image = $pkg.RGBA64Image = $newType(8, $kindInterface, "draw.RGBA64Image", true, "image/draw", true, null);
�I	RGBA64Image.init([{prop: "At", name: "At", pkg: "", typ: $funcType([$Int, $Int], [color.Color], false)}, {prop: "Bounds", name: "Bounds", pkg: "", typ: $funcType([], [image.Rectangle], false)}, {prop: "ColorModel", name: "ColorModel", pkg: "", typ: $funcType([], [color.Model], false)}, {prop: "RGBA64At", name: "RGBA64At", pkg: "", typ: $funcType([$Int, $Int], [color.RGBA64], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$Int, $Int, color.Color], [], false)}, {prop: "SetRGBA64", name: "SetRGBA64", pkg: "", typ: $funcType([$Int, $Int, color.RGBA64], [], false)}]);
RGBA64Imageimage.Rectangleimage/color.Colorimage/color.Modelimage/color.RGBA64image/draw.RGBA64Image  	Quantizerm	Quantizer = $pkg.Quantizer = $newType(8, $kindInterface, "draw.Quantizer", true, "image/draw", true, null);
��	Quantizer.init([{prop: "Quantize", name: "Quantize", pkg: "", typ: $funcType([color.Palette, image.Image], [color.Palette], false)}]);
	Quantizerimage.Imageimage/color.Paletteimage/draw.Quantizer  OpR	Op = $pkg.Op = $newType(4, $kindInt, "draw.Op", true, "image/draw", true, null);
��	Op.methods = [{prop: "Draw", name: "Draw", pkg: "", typ: $funcType([Image, image.Rectangle, image.Image, image.Point], [], false)}];
Opimage.Imageimage.Pointimage.Rectangleimage/draw.Imageimage/draw.Op  Drawerd	Drawer = $pkg.Drawer = $newType(8, $kindInterface, "draw.Drawer", true, "image/draw", true, null);
��	Drawer.init([{prop: "Draw", name: "Draw", pkg: "", typ: $funcType([Image, image.Rectangle, image.Image, image.Point], [], false)}]);
Drawerimage.Imageimage.Pointimage.Rectangleimage/draw.Drawerimage/draw.Image  floydSteinberg��	floydSteinberg = $pkg.floydSteinberg = $newType(0, $kindStruct, "draw.floydSteinberg", true, "image/draw", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	floydSteinberg.methods = [{prop: "Draw", name: "Draw", pkg: "", typ: $funcType([Image, image.Rectangle, image.Image, image.Point], [], false)}];
	floydSteinberg.init("", []);
floydSteinbergimage.Imageimage.Pointimage.Rectangleimage/draw.Imageimage/draw.floydSteinberg  ptrType"	ptrType = $ptrType(image.Point);
ptrTypeimage.Point  	ptrType$1#	ptrType$1 = $ptrType(image.RGBA);
	ptrType$1
image.RGBA  	ptrType$2'	ptrType$2 = $ptrType(image.Paletted);
	ptrType$2image.Paletted  	ptrType$3&	ptrType$3 = $ptrType(image.Uniform);
	ptrType$3image.Uniform  	ptrType$4$	ptrType$4 = $ptrType(image.NRGBA);
	ptrType$4image.NRGBA  	ptrType$5$	ptrType$5 = $ptrType(image.YCbCr);
	ptrType$5image.YCbCr  	ptrType$6#	ptrType$6 = $ptrType(image.Gray);
	ptrType$6
image.Gray  	ptrType$7#	ptrType$7 = $ptrType(image.CMYK);
	ptrType$7
image.CMYK  	ptrType$8$	ptrType$8 = $ptrType(image.Alpha);
	ptrType$8image.Alpha  	ptrType$9	ptrType$9 = $ptrType($Uint8);
	ptrType$9  	arrayType$	arrayType = $arrayType($Int32, 4);
	arrayType  	sliceType$	sliceType = $sliceType(arrayType);
	sliceTypeimage/draw.arrayType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  FloydSteinberg  xX  		$pkg.FloydSteinberg = (x = new floydSteinberg.ptr(), new x.constructor.elem(x));
FloydSteinbergimage/draw.FloydSteinbergimage/draw.floydSteinberg (image/draw.Op).Draw �|	Op.prototype.Draw = function(dst, r, src, sp) {
		var dst, op, r, sp, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; op = $f.op; r = $f.r; sp = $f.sp; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		op = this.$val;
  k		$r = DrawMask(dst, $clone(r, image.Rectangle), src, $clone(sp, image.Point), $ifaceNil, new image.Point.ptr(0, 0), op); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Op.prototype.Draw }; } $f.dst = dst; $f.op = op; $f.r = r; $f.sp = sp; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(Op).prototype.Draw = function(dst, r, src, sp) { return new Op(this.$get()).Draw(dst, r, src, sp); };
Opimage.Pointimage.Rectangleimage/draw.DrawMaskimage/draw.Op  (image/draw.floydSteinberg).Draw �f	floydSteinberg.ptr.prototype.Draw = function(dst, r, src, sp) {
		var dst, r, sp, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; r = $f.r; sp = $f.sp; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = [r];
		sp = [sp];
  �		$r = clip(dst, r[0], src, sp[0], $ifaceNil, ptrType.nil); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if ($clone(r[0], image.Rectangle).Empty()) {
  �			$s = -1; return;
    		}
  �		$r = drawPaletted(dst, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point), true); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: floydSteinberg.ptr.prototype.Draw }; } $f.dst = dst; $f.r = r; $f.sp = sp; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	floydSteinberg.prototype.Draw = function(dst, r, src, sp) { return this.$val.Draw(dst, r, src, sp); };
floydSteinbergimage.Pointimage.Rectangleimage/draw.clipimage/draw.drawPalettedimage/draw.floydSteinbergimage/draw.ptrType image/draw.clip
image/drawclip clip��	clip = function(dst, r, src, sp, mask, mp) {
		var _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, dst, dx, dy, mask, mp, orig, r, sp, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; dst = $f.dst; dx = $f.dx; dy = $f.dy; mask = $f.mask; mp = $f.mp; orig = $f.orig; r = $f.r; sp = $f.sp; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
=		orig = $clone(r.Min, image.Point);
  
L		_r = dst.Bounds(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r$1 = $clone(r, image.Rectangle).Intersect($clone(_r, image.Rectangle)); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		image.Rectangle.copy(r, _r$1);
  
l		_r$2 = src.Bounds(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_r$3 = $clone(_r$2, image.Rectangle).Add($clone($clone(orig, image.Point).Sub($clone(sp, image.Point)), image.Point)); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$4 = $clone(r, image.Rectangle).Intersect($clone(_r$3, image.Rectangle)); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		image.Rectangle.copy(r, _r$4);
  
�		/* */ if (!($interfaceIsEqual(mask, $ifaceNil))) { $s = 6; continue; }
		/* */ $s = 7; continue;
    		/* if (!($interfaceIsEqual(mask, $ifaceNil))) { */ case 6:
  
�			_r$5 = mask.Bounds(); /* */ $s = 8; case 8: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
			_r$6 = $clone(_r$5, image.Rectangle).Add($clone($clone(orig, image.Point).Sub($clone(mp, image.Point)), image.Point)); /* */ $s = 9; case 9: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
			_r$7 = $clone(r, image.Rectangle).Intersect($clone(_r$6, image.Rectangle)); /* */ $s = 10; case 10: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
			image.Rectangle.copy(r, _r$7);
    		/* } */ case 7:
  
�		dx = r.Min.X - orig.X >> 0;
  		dy = r.Min.Y - orig.Y >> 0;
    		if ((dx === 0) && (dy === 0)) {
  3			$s = -1; return;
    		}
  >		sp.X = sp.X + (dx) >> 0;
  J		sp.Y = sp.Y + (dy) >> 0;
    		if (!(mp === ptrType.nil)) {
  g			mp.X = mp.X + (dx) >> 0;
  t			mp.Y = mp.Y + (dy) >> 0;
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: clip }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f.dst = dst; $f.dx = dx; $f.dy = dy; $f.mask = mask; $f.mp = mp; $f.orig = orig; $f.r = r; $f.sp = sp; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
clipimage.Pointimage.Rectangleimage/draw.clipimage/draw.ptrType image/draw.processBackward
image/drawprocessBackward processBackward�f	processBackward = function(dst, r, src, sp) {
		var dst, r, sp, src;
  �		return $interfaceIsEqual(dst, src) && $clone(r, image.Rectangle).Overlaps($clone($clone(r, image.Rectangle).Add($clone($clone(sp, image.Point).Sub($clone(r.Min, image.Point)), image.Point)), image.Rectangle)) && (sp.Y < r.Min.Y || ((sp.Y === r.Min.Y) && sp.X < r.Min.X));
    	};
processBackwardimage.Pointimage.Rectangleimage/draw.processBackward image/draw.Draw
image/drawDraw Draw��	Draw = function(dst, r, src, sp, op) {
		var dst, op, r, sp, src, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; dst = $f.dst; op = $f.op; r = $f.r; sp = $f.sp; src = $f.src; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = DrawMask(dst, $clone(r, image.Rectangle), src, $clone(sp, image.Point), $ifaceNil, new image.Point.ptr(0, 0), op); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Draw }; } $f.dst = dst; $f.op = op; $f.r = r; $f.sp = sp; $f.src = src; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Draw = Draw;
Drawimage.Pointimage.Rectangleimage/draw.Drawimage/draw.DrawMask image/draw.DrawMask
image/drawDrawMask DrawMask�OA	DrawMask = function(dst, r, src, sp, mask, mp, op) {
		var _arg, _arg$1, _arg$2, _q, _q$1, _q$2, _q$3, _q$4, _q$5, _q$6, _q$7, _q$8, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _r$6, _r$7, _r$8, _r$9, _ref, _ref$1, _ref$2, _ref$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, a, colorIndex, da, db, dg, dr, dst, dst0, dst0$1, dx, dy, firstRow, i, i0, i1, ma, mask, mask0, mp, mx, my, ok, ok$1, op, out, r, sa, sa$1, sa$2, sb, sb$1, sb$2, sg, sg$1, sg$2, sp, sr, sr$1, sr$2, src, src0, src0$1, src0$10, src0$11, src0$12, src0$13, src0$2, src0$3, src0$4, src0$5, src0$6, src0$7, src0$8, src0$9, sx, sy, x$1, x$2, x$3, x0, x1, y, y$1, y0, y1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _arg$2 = $f._arg$2; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _q$4 = $f._q$4; _q$5 = $f._q$5; _q$6 = $f._q$6; _q$7 = $f._q$7; _q$8 = $f._q$8; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _r$6 = $f._r$6; _r$7 = $f._r$7; _r$8 = $f._r$8; _r$9 = $f._r$9; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; a = $f.a; colorIndex = $f.colorIndex; da = $f.da; db = $f.db; dg = $f.dg; dr = $f.dr; dst = $f.dst; dst0 = $f.dst0; dst0$1 = $f.dst0$1; dx = $f.dx; dy = $f.dy; firstRow = $f.firstRow; i = $f.i; i0 = $f.i0; i1 = $f.i1; ma = $f.ma; mask = $f.mask; mask0 = $f.mask0; mp = $f.mp; mx = $f.mx; my = $f.my; ok = $f.ok; ok$1 = $f.ok$1; op = $f.op; out = $f.out; r = $f.r; sa = $f.sa; sa$1 = $f.sa$1; sa$2 = $f.sa$2; sb = $f.sb; sb$1 = $f.sb$1; sb$2 = $f.sb$2; sg = $f.sg; sg$1 = $f.sg$1; sg$2 = $f.sg$2; sp = $f.sp; sr = $f.sr; sr$1 = $f.sr$1; sr$2 = $f.sr$2; src = $f.src; src0 = $f.src0; src0$1 = $f.src0$1; src0$10 = $f.src0$10; src0$11 = $f.src0$11; src0$12 = $f.src0$12; src0$13 = $f.src0$13; src0$2 = $f.src0$2; src0$3 = $f.src0$3; src0$4 = $f.src0$4; src0$5 = $f.src0$5; src0$6 = $f.src0$6; src0$7 = $f.src0$7; src0$8 = $f.src0$8; src0$9 = $f.src0$9; sx = $f.sx; sy = $f.sy; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x0 = $f.x0; x1 = $f.x1; y = $f.y; y$1 = $f.y$1; y0 = $f.y0; y1 = $f.y1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		mp = [mp];
		out = [out];
		r = [r];
		sp = [sp];
  A		$r = clip(dst, r[0], src, sp[0], mask, mp[0]); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if ($clone(r[0], image.Rectangle).Empty()) {
  v			$s = -1; return;
    		}
  �		_ref = dst;
		/* */ if ($assertType(_ref, ptrType$1, true)[1]) { $s = 2; continue; }
		/* */ if ($assertType(_ref, ptrType$2, true)[1]) { $s = 3; continue; }
		/* */ $s = 4; continue;
    		/* if ($assertType(_ref, ptrType$1, true)[1]) { */ case 2:
    			dst0 = _ref.$val;
  $			/* */ if (op === 0) { $s = 5; continue; }
			/* */ $s = 6; continue;
    			/* if (op === 0) { */ case 5:
  7				/* */ if ($interfaceIsEqual(mask, $ifaceNil)) { $s = 8; continue; }
				/* */ $s = 9; continue;
    				/* if ($interfaceIsEqual(mask, $ifaceNil)) { */ case 8:
  L					_ref$1 = src;
					/* */ if ($assertType(_ref$1, ptrType$3, true)[1]) { $s = 11; continue; }
					/* */ if ($assertType(_ref$1, ptrType$1, true)[1]) { $s = 12; continue; }
					/* */ if ($assertType(_ref$1, ptrType$4, true)[1]) { $s = 13; continue; }
					/* */ if ($assertType(_ref$1, ptrType$5, true)[1]) { $s = 14; continue; }
					/* */ if ($assertType(_ref$1, ptrType$6, true)[1]) { $s = 15; continue; }
					/* */ if ($assertType(_ref$1, ptrType$7, true)[1]) { $s = 16; continue; }
					/* */ $s = 17; continue;
    					/* if ($assertType(_ref$1, ptrType$3, true)[1]) { */ case 11:
    						src0 = _ref$1.$val;
  �						_r = src0.RGBA(); /* */ $s = 18; case 18: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
						_tuple = _r;
						sr = _tuple[0];
						sg = _tuple[1];
						sb = _tuple[2];
						sa = _tuple[3];
    						if (sa === 65535) {
  �							drawFillSrc(dst0, $clone(r[0], image.Rectangle), sr, sg, sb, sa);
    						} else {
  �							drawFillOver(dst0, $clone(r[0], image.Rectangle), sr, sg, sb, sa);
    						}
  ,						$s = -1; return;
    					/* } else if ($assertType(_ref$1, ptrType$1, true)[1]) { */ case 12:
    						src0$1 = _ref$1.$val;
  N						drawCopyOver(dst0, $clone(r[0], image.Rectangle), src0$1, $clone(sp[0], image.Point));
  s						$s = -1; return;
    					/* } else if ($assertType(_ref$1, ptrType$4, true)[1]) { */ case 13:
    						src0$2 = _ref$1.$val;
  �						drawNRGBAOver(dst0, $clone(r[0], image.Rectangle), src0$2, $clone(sp[0], image.Point));
  �						$s = -1; return;
    					/* } else if ($assertType(_ref$1, ptrType$5, true)[1]) { */ case 14:
    						src0$3 = _ref$1.$val;
    						if (imageutil.DrawYCbCr(dst0, $clone(r[0], image.Rectangle), src0$3, $clone(sp[0], image.Point))) {
  �							$s = -1; return;
    						}
    						$s = 17; continue;
    					/* } else if ($assertType(_ref$1, ptrType$6, true)[1]) { */ case 15:
    						src0$4 = _ref$1.$val;
  �						drawGray(dst0, $clone(r[0], image.Rectangle), src0$4, $clone(sp[0], image.Point));
   						$s = -1; return;
    					/* } else if ($assertType(_ref$1, ptrType$7, true)[1]) { */ case 16:
    						src0$5 = _ref$1.$val;
  B						drawCMYK(dst0, $clone(r[0], image.Rectangle), src0$5, $clone(sp[0], image.Point));
  c						$s = -1; return;
    					/* } */ case 17:
    					$s = 10; continue;
				/* } else { */ case 9:
  }					_tuple$1 = $assertType(mask, ptrType$8, true);
					mask0 = _tuple$1[0];
					ok = _tuple$1[1];
  z					/* */ if (ok) { $s = 19; continue; }
					/* */ $s = 20; continue;
    					/* if (ok) { */ case 19:
  �						_ref$2 = src;
						/* */ if ($assertType(_ref$2, ptrType$3, true)[1]) { $s = 21; continue; }
						/* */ $s = 22; continue;
    						/* if ($assertType(_ref$2, ptrType$3, true)[1]) { */ case 21:
    							src0$6 = _ref$2.$val;
  �							$r = drawGlyphOver(dst0, $clone(r[0], image.Rectangle), src0$6, mask0, $clone(mp[0], image.Point)); /* */ $s = 23; case 23: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  							$s = -1; return;
    						/* } */ case 22:
    					/* } */ case 20:
    				/* } */ case 10:
    				$s = 7; continue;
			/* } else { */ case 6:
  /				/* */ if ($interfaceIsEqual(mask, $ifaceNil)) { $s = 24; continue; }
				/* */ $s = 25; continue;
    				/* if ($interfaceIsEqual(mask, $ifaceNil)) { */ case 24:
  D					_ref$3 = src;
					/* */ if ($assertType(_ref$3, ptrType$3, true)[1]) { $s = 26; continue; }
					/* */ if ($assertType(_ref$3, ptrType$1, true)[1]) { $s = 27; continue; }
					/* */ if ($assertType(_ref$3, ptrType$4, true)[1]) { $s = 28; continue; }
					/* */ if ($assertType(_ref$3, ptrType$5, true)[1]) { $s = 29; continue; }
					/* */ if ($assertType(_ref$3, ptrType$6, true)[1]) { $s = 30; continue; }
					/* */ if ($assertType(_ref$3, ptrType$7, true)[1]) { $s = 31; continue; }
					/* */ $s = 32; continue;
    					/* if ($assertType(_ref$3, ptrType$3, true)[1]) { */ case 26:
    						src0$7 = _ref$3.$val;
  ~						_r$1 = src0$7.RGBA(); /* */ $s = 33; case 33: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
						_tuple$2 = _r$1;
						sr$1 = _tuple$2[0];
						sg$1 = _tuple$2[1];
						sb$1 = _tuple$2[2];
						sa$1 = _tuple$2[3];
  �						drawFillSrc(dst0, $clone(r[0], image.Rectangle), sr$1, sg$1, sb$1, sa$1);
  �						$s = -1; return;
    					/* } else if ($assertType(_ref$3, ptrType$1, true)[1]) { */ case 27:
    						src0$8 = _ref$3.$val;
  �						drawCopySrc(dst0, $clone(r[0], image.Rectangle), src0$8, $clone(sp[0], image.Point));
  						$s = -1; return;
    					/* } else if ($assertType(_ref$3, ptrType$4, true)[1]) { */ case 28:
    						src0$9 = _ref$3.$val;
  4						drawNRGBASrc(dst0, $clone(r[0], image.Rectangle), src0$9, $clone(sp[0], image.Point));
  Y						$s = -1; return;
    					/* } else if ($assertType(_ref$3, ptrType$5, true)[1]) { */ case 29:
    						src0$10 = _ref$3.$val;
    						if (imageutil.DrawYCbCr(dst0, $clone(r[0], image.Rectangle), src0$10, $clone(sp[0], image.Point))) {
  �							$s = -1; return;
    						}
    						$s = 32; continue;
    					/* } else if ($assertType(_ref$3, ptrType$6, true)[1]) { */ case 30:
    						src0$11 = _ref$3.$val;
  �						drawGray(dst0, $clone(r[0], image.Rectangle), src0$11, $clone(sp[0], image.Point));
  �						$s = -1; return;
    					/* } else if ($assertType(_ref$3, ptrType$7, true)[1]) { */ case 31:
    						src0$12 = _ref$3.$val;
  						drawCMYK(dst0, $clone(r[0], image.Rectangle), src0$12, $clone(sp[0], image.Point));
  ;						$s = -1; return;
    					/* } */ case 32:
    				/* } */ case 25:
    			/* } */ case 7:
  S			$r = drawRGBA(dst0, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point), mask, $clone(mp[0], image.Point), op); /* */ $s = 34; case 34: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ~			$s = -1; return;
    		/* } else if ($assertType(_ref, ptrType$2, true)[1]) { */ case 3:
    			dst0$1 = _ref.$val;
  �			/* */ if ((op === 1) && $interfaceIsEqual(mask, $ifaceNil)) { $s = 35; continue; }
			/* */ $s = 36; continue;
    			/* if ((op === 1) && $interfaceIsEqual(mask, $ifaceNil)) { */ case 35:
  �				_tuple$3 = $assertType(src, ptrType$3, true);
				src0$13 = _tuple$3[0];
				ok$1 = _tuple$3[1];
  �				/* */ if (ok$1) { $s = 37; continue; }
				/* */ if (!processBackward(dst, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point))) { $s = 38; continue; }
				/* */ $s = 39; continue;
    				/* if (ok$1) { */ case 37:
  �					_r$2 = dst0$1.Palette.Index(src0$13.C); /* */ $s = 40; case 40: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					colorIndex = ((_r$2 << 24 >>> 24));
  !					i0 = dst0$1.PixOffset(r[0].Min.X, r[0].Min.Y);
  L					i1 = i0 + $clone(r[0], image.Rectangle).Dx() >> 0;
  f					i = i0;
					while (true) {
						if (!(i < i1)) { break; }
  �						(x$1 = dst0$1.Pix, ((i < 0 || i >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + i] = colorIndex));
  w						i = i + (1) >> 0;
    					}
  �					firstRow = $subslice(dst0$1.Pix, i0, i1);
  �					y = r[0].Min.Y + 1 >> 0;
					while (true) {
						if (!(y < r[0].Max.Y)) { break; }
  �						i0 = i0 + (dst0$1.Stride) >> 0;
  
						i1 = i1 + (dst0$1.Stride) >> 0;
  !						$copySlice($subslice(dst0$1.Pix, i0, i1), firstRow);
  �						y = y + (1) >> 0;
    					}
  K					$s = -1; return;
    				/* } else if (!processBackward(dst, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point))) { */ case 38:
  �					$r = drawPaletted(dst0$1, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point), false); /* */ $s = 41; case 41: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �					$s = -1; return;
    				/* } */ case 39:
    			/* } */ case 36:
    		/* } */ case 4:
  �		_tmp = r[0].Min.X;
		_tmp$1 = r[0].Max.X;
		_tmp$2 = 1;
		x0 = _tmp;
		x1 = _tmp$1;
		dx = _tmp$2;
  �		_tmp$3 = r[0].Min.Y;
		_tmp$4 = r[0].Max.Y;
		_tmp$5 = 1;
		y0 = _tmp$3;
		y1 = _tmp$4;
		dy = _tmp$5;
    		if (processBackward(dst, $clone(r[0], image.Rectangle), src, $clone(sp[0], image.Point))) {
  4			_tmp$6 = x1 - 1 >> 0;
			_tmp$7 = x0 - 1 >> 0;
			_tmp$8 = -1;
			x0 = _tmp$6;
			x1 = _tmp$7;
			dx = _tmp$8;
  R			_tmp$9 = y1 - 1 >> 0;
			_tmp$10 = y0 - 1 >> 0;
			_tmp$11 = -1;
			y0 = _tmp$9;
			y1 = _tmp$10;
			dy = _tmp$11;
    		}
  w		out[0] = new color.RGBA64.ptr(0, 0, 0, 0);
  �		sy = (sp[0].Y + y0 >> 0) - r[0].Min.Y >> 0;
  �		my = (mp[0].Y + y0 >> 0) - r[0].Min.Y >> 0;
  �		y$1 = y0;
		/* while (true) { */ case 42:
			/* if (!(!((y$1 === y1)))) { break; } */ if(!(!((y$1 === y1)))) { $s = 43; continue; }
  �			sx = (sp[0].X + x0 >> 0) - r[0].Min.X >> 0;
  			mx = (mp[0].X + x0 >> 0) - r[0].Min.X >> 0;
  4			x$2 = x0;
			/* while (true) { */ case 44:
				/* if (!(!((x$2 === x1)))) { break; } */ if(!(!((x$2 === x1)))) { $s = 45; continue; }
  j				ma = 65535;
  }				/* */ if (!($interfaceIsEqual(mask, $ifaceNil))) { $s = 46; continue; }
				/* */ $s = 47; continue;
    				/* if (!($interfaceIsEqual(mask, $ifaceNil))) { */ case 46:
  �					_r$3 = mask.At(mx, my); /* */ $s = 48; case 48: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					_r$4 = _r$3.RGBA(); /* */ $s = 49; case 49: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
					_tuple$4 = _r$4;
					ma = _tuple$4[3];
    				/* } */ case 47:
  �					/* */ if ((ma === 0)) { $s = 51; continue; }
					/* */ if ((ma === 65535) && (op === 1)) { $s = 52; continue; }
					/* */ $s = 53; continue;
    					/* if ((ma === 0)) { */ case 51:
  �						/* */ if (op === 0) { $s = 55; continue; }
						/* */ $s = 56; continue;
    						/* if (op === 0) { */ case 55:
    							$s = 57; continue;
						/* } else { */ case 56:
  							$r = dst.Set(x$2, y$1, (x$3 = color.Transparent, new x$3.constructor.elem(x$3))); /* */ $s = 58; case 58: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						/* } */ case 57:
    						$s = 54; continue;
    					/* } else if ((ma === 65535) && (op === 1)) { */ case 52:
  W						_arg = x$2;
						_arg$1 = y$1;
						_r$5 = src.At(sx, sy); /* */ $s = 59; case 59: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
						_arg$2 = _r$5;
						$r = dst.Set(_arg, _arg$1, _arg$2); /* */ $s = 60; case 60: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    						$s = 54; continue;
					/* } else { */ case 53:
  �						_r$6 = src.At(sx, sy); /* */ $s = 61; case 61: if($c) { $c = false; _r$6 = _r$6.$blk(); } if (_r$6 && _r$6.$blk !== undefined) { break s; }
						_r$7 = _r$6.RGBA(); /* */ $s = 62; case 62: if($c) { $c = false; _r$7 = _r$7.$blk(); } if (_r$7 && _r$7.$blk !== undefined) { break s; }
						_tuple$5 = _r$7;
						sr$2 = _tuple$5[0];
						sg$2 = _tuple$5[1];
						sb$2 = _tuple$5[2];
						sa$2 = _tuple$5[3];
  �						/* */ if (op === 0) { $s = 63; continue; }
						/* */ $s = 64; continue;
    						/* if (op === 0) { */ case 63:
  �							_r$8 = dst.At(x$2, y$1); /* */ $s = 66; case 66: if($c) { $c = false; _r$8 = _r$8.$blk(); } if (_r$8 && _r$8.$blk !== undefined) { break s; }
							_r$9 = _r$8.RGBA(); /* */ $s = 67; case 67: if($c) { $c = false; _r$9 = _r$9.$blk(); } if (_r$9 && _r$9.$blk !== undefined) { break s; }
							_tuple$6 = _r$9;
							dr = _tuple$6[0];
							dg = _tuple$6[1];
							db = _tuple$6[2];
							da = _tuple$6[3];
  �							a = 65535 - ((_q = ($imul(sa$2, ma) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"))) >>> 0;
  							out[0].R = (((_q$1 = ((($imul(dr, a) >>> 0) + ($imul(sr$2, ma) >>> 0) >>> 0)) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  5							out[0].G = (((_q$2 = ((($imul(dg, a) >>> 0) + ($imul(sg$2, ma) >>> 0) >>> 0)) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  ]							out[0].B = (((_q$3 = ((($imul(db, a) >>> 0) + ($imul(sb$2, ma) >>> 0) >>> 0)) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  �							out[0].A = (((_q$4 = ((($imul(da, a) >>> 0) + ($imul(sa$2, ma) >>> 0) >>> 0)) / 65535, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
    							$s = 65; continue;
						/* } else { */ case 64:
  �							out[0].R = (((_q$5 = ($imul(sr$2, ma) >>> 0) / 65535, (_q$5 === _q$5 && _q$5 !== 1/0 && _q$5 !== -1/0) ? _q$5 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  �							out[0].G = (((_q$6 = ($imul(sg$2, ma) >>> 0) / 65535, (_q$6 === _q$6 && _q$6 !== 1/0 && _q$6 !== -1/0) ? _q$6 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  �							out[0].B = (((_q$7 = ($imul(sb$2, ma) >>> 0) / 65535, (_q$7 === _q$7 && _q$7 !== 1/0 && _q$7 !== -1/0) ? _q$7 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
  							out[0].A = (((_q$8 = ($imul(sa$2, ma) >>> 0) / 65535, (_q$8 === _q$8 && _q$8 !== 1/0 && _q$8 !== -1/0) ? _q$8 >>> 0 : $throwRuntimeError("integer divide by zero")) << 16 >>> 16));
    						/* } */ case 65:
  =						$r = dst.Set(x$2, y$1, out[0]); /* */ $s = 68; case 68: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					/* } */ case 54:
    				case 50:
  F				_tmp$12 = x$2 + dx >> 0;
				_tmp$13 = sx + dx >> 0;
				_tmp$14 = mx + dx >> 0;
				x$2 = _tmp$12;
				sx = _tmp$13;
				mx = _tmp$14;
			$s = 44; continue;
			case 45:
  �			_tmp$15 = y$1 + dy >> 0;
			_tmp$16 = sy + dy >> 0;
			_tmp$17 = my + dy >> 0;
			y$1 = _tmp$15;
			sy = _tmp$16;
			my = _tmp$17;
		$s = 42; continue;
		case 43:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: DrawMask }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._arg$2 = _arg$2; $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._q$4 = _q$4; $f._q$5 = _q$5; $f._q$6 = _q$6; $f._q$7 = _q$7; $f._q$8 = _q$8; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._r$6 = _r$6; $f._r$7 = _r$7; $f._r$8 = _r$8; $f._r$9 = _r$9; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f.a = a; $f.colorIndex = colorIndex; $f.da = da; $f.db = db; $f.dg = dg; $f.dr = dr; $f.dst = dst; $f.dst0 = dst0; $f.dst0$1 = dst0$1; $f.dx = dx; $f.dy = dy; $f.firstRow = firstRow; $f.i = i; $f.i0 = i0; $f.i1 = i1; $f.ma = ma; $f.mask = mask; $f.mask0 = mask0; $f.mp = mp; $f.mx = mx; $f.my = my; $f.ok = ok; $f.ok$1 = ok$1; $f.op = op; $f.out = out; $f.r = r; $f.sa = sa; $f.sa$1 = sa$1; $f.sa$2 = sa$2; $f.sb = sb; $f.sb$1 = sb$1; $f.sb$2 = sb$2; $f.sg = sg; $f.sg$1 = sg$1; $f.sg$2 = sg$2; $f.sp = sp; $f.sr = sr; $f.sr$1 = sr$1; $f.sr$2 = sr$2; $f.src = src; $f.src0 = src0; $f.src0$1 = src0$1; $f.src0$10 = src0$10; $f.src0$11 = src0$11; $f.src0$12 = src0$12; $f.src0$13 = src0$13; $f.src0$2 = src0$2; $f.src0$3 = src0$3; $f.src0$4 = src0$4; $f.src0$5 = src0$5; $f.src0$6 = src0$6; $f.src0$7 = src0$7; $f.src0$8 = src0$8; $f.src0$9 = src0$9; $f.sx = sx; $f.sy = sy; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x0 = x0; $f.x1 = x1; $f.y = y; $f.y$1 = y$1; $f.y0 = y0; $f.y1 = y1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.DrawMask = DrawMask;
DrawMask#image.Alpha
image.CMYK
image.Grayimage.NRGBAimage.Palettedimage.Point
image.RGBAimage.Rectangleimage.Uniformimage.YCbCrimage/color.RGBA64image/color.Transparentimage/draw.DrawMaskimage/draw.clipimage/draw.drawCMYKimage/draw.drawCopyOverimage/draw.drawCopySrcimage/draw.drawFillOverimage/draw.drawFillSrcimage/draw.drawGlyphOverimage/draw.drawGrayimage/draw.drawNRGBAOverimage/draw.drawNRGBASrcimage/draw.drawPalettedimage/draw.drawRGBAimage/draw.processBackwardimage/draw.ptrType$1image/draw.ptrType$2image/draw.ptrType$3image/draw.ptrType$4image/draw.ptrType$5image/draw.ptrType$6image/draw.ptrType$7image/draw.ptrType$8"image/internal/imageutil.DrawYCbCr image/draw.drawFillOver
image/drawdrawFillOver drawFillOver�h	drawFillOver = function(dst, r, sr, sg, sb, sa) {
		var _q, _q$1, _q$2, _q$3, a, da, db, dg, dr, dst, i, i0, i1, r, sa, sb, sg, sr, x$1, x$2, x$3, x$4, y;
  �		a = $imul(((65535 - sa >>> 0)), 257) >>> 0;
  		i0 = dst.PixOffset(r.Min.X, r.Min.Y);
  (		i1 = i0 + ($imul($clone(r, image.Rectangle).Dx(), 4)) >> 0;
  A		y = r.Min.Y;
		while (true) {
			if (!(!((y === r.Max.Y)))) { break; }
  i			i = i0;
			while (true) {
				if (!(i < i1)) { break; }
  �				dr = (x$1 = dst.Pix, $indexPtr(x$1.$array, x$1.$offset + (i + 0 >> 0), ptrType$9));
  �				dg = (x$2 = dst.Pix, $indexPtr(x$2.$array, x$2.$offset + (i + 1 >> 0), ptrType$9));
  �				db = (x$3 = dst.Pix, $indexPtr(x$3.$array, x$3.$offset + (i + 2 >> 0), ptrType$9));
  �				da = (x$4 = dst.Pix, $indexPtr(x$4.$array, x$4.$offset + (i + 3 >> 0), ptrType$9));
  �				dr.$set(((((((_q = ($imul(((dr.$get() >>> 0)), a) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero")) + sr >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  				dg.$set(((((((_q$1 = ($imul(((dg.$get() >>> 0)), a) >>> 0) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")) + sg >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  ;				db.$set(((((((_q$2 = ($imul(((db.$get() >>> 0)), a) >>> 0) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")) + sb >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  g				da.$set(((((((_q$3 = ($imul(((da.$get() >>> 0)), a) >>> 0) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) + sa >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  z				i = i + (4) >> 0;
    			}
  �			i0 = i0 + (dst.Stride) >> 0;
  �			i1 = i1 + (dst.Stride) >> 0;
  ]			y = y + (1) >> 0;
    		}
    	};
drawFillOverimage.Rectangleimage/draw.drawFillOverimage/draw.ptrType$9 image/draw.drawFillSrc
image/drawdrawFillSrc drawFillSrc�	drawFillSrc = function(dst, r, sr, sg, sb, sa) {
		var dst, firstRow, i, i0, i1, r, sa, sa8, sb, sb8, sg, sg8, sr, sr8, x$1, x$2, x$3, x$4, x$5, x$6, x$7, x$8, y;
   		sr8 = (((sr >>> 8 >>> 0) << 24 >>> 24));
   &		sg8 = (((sg >>> 8 >>> 0) << 24 >>> 24));
   =		sb8 = (((sb >>> 8 >>> 0) << 24 >>> 24));
   T		sa8 = (((sa >>> 8 >>> 0) << 24 >>> 24));
  !�		i0 = dst.PixOffset(r.Min.X, r.Min.Y);
  !�		i1 = i0 + ($imul($clone(r, image.Rectangle).Dx(), 4)) >> 0;
  !�		i = i0;
		while (true) {
			if (!(i < i1)) { break; }
  !�			(x$1 = dst.Pix, x$2 = i + 0 >> 0, ((x$2 < 0 || x$2 >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + x$2] = sr8));
  !�			(x$3 = dst.Pix, x$4 = i + 1 >> 0, ((x$4 < 0 || x$4 >= x$3.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + x$4] = sg8));
  "			(x$5 = dst.Pix, x$6 = i + 2 >> 0, ((x$6 < 0 || x$6 >= x$5.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + x$6] = sb8));
  "			(x$7 = dst.Pix, x$8 = i + 3 >> 0, ((x$8 < 0 || x$8 >= x$7.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$7.$array[x$7.$offset + x$8] = sa8));
  !�			i = i + (4) >> 0;
    		}
  "2		firstRow = $subslice(dst.Pix, i0, i1);
  "R		y = r.Min.Y + 1 >> 0;
		while (true) {
			if (!(y < r.Max.Y)) { break; }
  "y			i0 = i0 + (dst.Stride) >> 0;
  "�			i1 = i1 + (dst.Stride) >> 0;
  "�			$copySlice($subslice(dst.Pix, i0, i1), firstRow);
  "q			y = y + (1) >> 0;
    		}
    	};
drawFillSrcimage.Rectangleimage/draw.drawFillSrc image/draw.drawCopyOver
image/drawdrawCopyOver drawCopyOver�	drawCopyOver = function(dst, r, src, sp) {
		var _q, _q$1, _q$2, _q$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, a, d, d0, ddelta, dpix, dst, dx, dy, i, i0, i1, idelta, r, s, s0, sa, sb, sdelta, sg, sp, spix, sr, src;
  #		_tmp = $clone(r, image.Rectangle).Dx();
		_tmp$1 = $clone(r, image.Rectangle).Dy();
		dx = _tmp;
		dy = _tmp$1;
  #8		d0 = dst.PixOffset(r.Min.X, r.Min.Y);
  #_		s0 = src.PixOffset(sp.X, sp.Y);
  #�		_tmp$2 = 0;
		_tmp$3 = 0;
		ddelta = _tmp$2;
		sdelta = _tmp$3;
  #�		_tmp$4 = 0;
		_tmp$5 = 0;
		_tmp$6 = 0;
		i0 = _tmp$4;
		i1 = _tmp$5;
		idelta = _tmp$6;
    		if (r.Min.Y < sp.Y || (r.Min.Y === sp.Y) && r.Min.X <= sp.X) {
  #�			ddelta = dst.Stride;
  $			sdelta = src.Stride;
  $			_tmp$7 = 0;
			_tmp$8 = $imul(dx, 4);
			_tmp$9 = 4;
			i0 = _tmp$7;
			i1 = _tmp$8;
			idelta = _tmp$9;
    		} else {
  %			d0 = d0 + (($imul(((dy - 1 >> 0)), dst.Stride))) >> 0;
  %3			s0 = s0 + (($imul(((dy - 1 >> 0)), src.Stride))) >> 0;
  %Q			ddelta = -dst.Stride;
  %h			sdelta = -src.Stride;
  %			_tmp$10 = $imul(((dx - 1 >> 0)), 4);
			_tmp$11 = -4;
			_tmp$12 = -4;
			i0 = _tmp$10;
			i1 = _tmp$11;
			idelta = _tmp$12;
    		}
  %�		while (true) {
			if (!(dy > 0)) { break; }
  %�			dpix = $subslice(dst.Pix, d0);
  %�			spix = $subslice(src.Pix, s0);
  %�			i = i0;
			while (true) {
				if (!(!((i === i1)))) { break; }
  &				s = $subslice(spix, i, (i + 4 >> 0), (i + 4 >> 0));
  &s				sr = $imul((((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >>> 0)), 257) >>> 0;
  &�				sg = $imul((((1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]) >>> 0)), 257) >>> 0;
  &�				sb = $imul((((2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]) >>> 0)), 257) >>> 0;
  &�				sa = $imul((((3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]) >>> 0)), 257) >>> 0;
  '(				a = $imul(((65535 - sa >>> 0)), 257) >>> 0;
  'B				d = $subslice(dpix, i, (i + 4 >> 0), (i + 4 >> 0));
  '�				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = ((((((_q = ($imul((((0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0]) >>> 0)), a) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero")) + sr >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  '�				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = ((((((_q$1 = ($imul((((1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1]) >>> 0)), a) >>> 0) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")) + sg >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  ( 				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = ((((((_q$2 = ($imul((((2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2]) >>> 0)), a) >>> 0) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")) + sb >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  (.				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = ((((((_q$3 = ($imul((((3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3]) >>> 0)), a) >>> 0) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) + sa >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  & 				i = i + (idelta) >> 0;
    			}
  (_			d0 = d0 + (ddelta) >> 0;
  (n			s0 = s0 + (sdelta) >> 0;
  %�			dy = dy - (1) >> 0;
    		}
    	};
drawCopyOverimage.Rectangleimage/draw.drawCopyOver image/draw.drawCopySrc
image/drawdrawCopySrc drawCopySrc��	drawCopySrc = function(dst, r, src, sp) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, d0, ddelta, dst, dy, n, r, s0, sdelta, sp, src;
  (�		_tmp = $imul(4, $clone(r, image.Rectangle).Dx());
		_tmp$1 = $clone(r, image.Rectangle).Dy();
		n = _tmp;
		dy = _tmp$1;
  (�		d0 = dst.PixOffset(r.Min.X, r.Min.Y);
  )		s0 = src.PixOffset(sp.X, sp.Y);
  )A		_tmp$2 = 0;
		_tmp$3 = 0;
		ddelta = _tmp$2;
		sdelta = _tmp$3;
    		if (r.Min.Y <= sp.Y) {
  )l			ddelta = dst.Stride;
  )�			sdelta = src.Stride;
    		} else {
  *�			d0 = d0 + (($imul(((dy - 1 >> 0)), dst.Stride))) >> 0;
  *�			s0 = s0 + (($imul(((dy - 1 >> 0)), src.Stride))) >> 0;
  +			ddelta = -dst.Stride;
  +"			sdelta = -src.Stride;
    		}
  +;		while (true) {
			if (!(dy > 0)) { break; }
  +R			$copySlice($subslice(dst.Pix, d0, (d0 + n >> 0)), $subslice(src.Pix, s0, (s0 + n >> 0)));
  +}			d0 = d0 + (ddelta) >> 0;
  +�			s0 = s0 + (sdelta) >> 0;
  +I			dy = dy - (1) >> 0;
    		}
    	};
drawCopySrcimage.Rectangleimage/draw.drawCopySrc image/draw.drawNRGBAOver
image/drawdrawNRGBAOver drawNRGBAOver�	drawNRGBAOver = function(dst, r, src, sp) {
		var _q, _q$1, _q$2, _q$3, _q$4, _q$5, _q$6, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, a, d, da, db, dg, dpix, dr, dst, i, i0, i1, r, s, sa, sb, sg, si, si0, sp, spix, sr, src, sy, y, yMax;
  +�		i0 = $imul(((r.Min.X - dst.Rect.Min.X >> 0)), 4);
  ,!		i1 = $imul(((r.Max.X - dst.Rect.Min.X >> 0)), 4);
  ,G		si0 = $imul(((sp.X - src.Rect.Min.X >> 0)), 4);
  ,k		yMax = r.Max.Y - dst.Rect.Min.Y >> 0;
  ,�		y = r.Min.Y - dst.Rect.Min.Y >> 0;
  ,�		sy = sp.Y - src.Rect.Min.Y >> 0;
  ,�		while (true) {
			if (!(!((y === yMax)))) { break; }
  ,�			dpix = $subslice(dst.Pix, ($imul(y, dst.Stride)));
  -			spix = $subslice(src.Pix, ($imul(sy, src.Stride)));
  -9			_tmp = i0;
			_tmp$1 = si0;
			i = _tmp;
			si = _tmp$1;
			while (true) {
				if (!(i < i1)) { break; }
  -�				s = $subslice(spix, si, (si + 4 >> 0), (si + 4 >> 0));
  .				sa = $imul((((3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]) >>> 0)), 257) >>> 0;
  .1				sr = (_q = ($imul((((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >>> 0)), sa) >>> 0) / 255, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  .S				sg = (_q$1 = ($imul((((1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]) >>> 0)), sa) >>> 0) / 255, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  .u				sb = (_q$2 = ($imul((((2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]) >>> 0)), sa) >>> 0) / 255, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  .�				d = $subslice(dpix, i, (i + 4 >> 0), (i + 4 >> 0));
  .�				dr = (((0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0]) >>> 0));
  /				dg = (((1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1]) >>> 0));
  /&				db = (((2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2]) >>> 0));
  /<				da = (((3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3]) >>> 0));
  /�				a = $imul(((65535 - sa >>> 0)), 257) >>> 0;
  /�				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = ((((((_q$3 = ($imul(dr, a) >>> 0) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) + sr >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  /�				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = ((((((_q$4 = ($imul(dg, a) >>> 0) / 65535, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >>> 0 : $throwRuntimeError("integer divide by zero")) + sg >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  /�				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = ((((((_q$5 = ($imul(db, a) >>> 0) / 65535, (_q$5 === _q$5 && _q$5 !== 1/0 && _q$5 !== -1/0) ? _q$5 >>> 0 : $throwRuntimeError("integer divide by zero")) + sb >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  0				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = ((((((_q$6 = ($imul(da, a) >>> 0) / 65535, (_q$6 === _q$6 && _q$6 !== 1/0 && _q$6 !== -1/0) ? _q$6 >>> 0 : $throwRuntimeError("integer divide by zero")) + sa >>> 0)) >>> 8 >>> 0) << 24 >>> 24)));
  -S				_tmp$2 = i + 4 >> 0;
				_tmp$3 = si + 4 >> 0;
				i = _tmp$2;
				si = _tmp$3;
			}
  ,�			_tmp$4 = y + 1 >> 0;
			_tmp$5 = sy + 1 >> 0;
			y = _tmp$4;
			sy = _tmp$5;
		}
    	};
drawNRGBAOverimage/draw.drawNRGBAOver image/draw.drawNRGBASrc
image/drawdrawNRGBASrc drawNRGBASrc�
7	drawNRGBASrc = function(dst, r, src, sp) {
		var _q, _q$1, _q$2, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, d, dpix, dst, i, i0, i1, r, s, sa, sb, sg, si, si0, sp, spix, sr, src, sy, y, yMax;
  0�		i0 = $imul(((r.Min.X - dst.Rect.Min.X >> 0)), 4);
  0�		i1 = $imul(((r.Max.X - dst.Rect.Min.X >> 0)), 4);
  0�		si0 = $imul(((sp.X - src.Rect.Min.X >> 0)), 4);
  1		yMax = r.Max.Y - dst.Rect.Min.Y >> 0;
  1.		y = r.Min.Y - dst.Rect.Min.Y >> 0;
  1M		sy = sp.Y - src.Rect.Min.Y >> 0;
  1j		while (true) {
			if (!(!((y === yMax)))) { break; }
  1�			dpix = $subslice(dst.Pix, ($imul(y, dst.Stride)));
  1�			spix = $subslice(src.Pix, ($imul(sy, src.Stride)));
  1�			_tmp = i0;
			_tmp$1 = si0;
			i = _tmp;
			si = _tmp$1;
			while (true) {
				if (!(i < i1)) { break; }
  2N				s = $subslice(spix, si, (si + 4 >> 0), (si + 4 >> 0));
  2�				sa = $imul((((3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]) >>> 0)), 257) >>> 0;
  2�				sr = (_q = ($imul((((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]) >>> 0)), sa) >>> 0) / 255, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  2�				sg = (_q$1 = ($imul((((1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]) >>> 0)), sa) >>> 0) / 255, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  3				sb = (_q$2 = ($imul((((2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]) >>> 0)), sa) >>> 0) / 255, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  38				d = $subslice(dpix, i, (i + 4 >> 0), (i + 4 >> 0));
  3�				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = (((sr >>> 8 >>> 0) << 24 >>> 24)));
  3�				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = (((sg >>> 8 >>> 0) << 24 >>> 24)));
  3�				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = (((sb >>> 8 >>> 0) << 24 >>> 24)));
  3�				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = (((sa >>> 8 >>> 0) << 24 >>> 24)));
  1�				_tmp$2 = i + 4 >> 0;
				_tmp$3 = si + 4 >> 0;
				i = _tmp$2;
				si = _tmp$3;
			}
  1{			_tmp$4 = y + 1 >> 0;
			_tmp$5 = sy + 1 >> 0;
			y = _tmp$4;
			sy = _tmp$5;
		}
    	};
drawNRGBASrcimage/draw.drawNRGBASrc image/draw.drawGray
image/drawdrawGray drawGray�7	drawGray = function(dst, r, src, sp) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, d, dpix, dst, i, i0, i1, p, r, si, si0, sp, spix, src, sy, y, yMax;
  4[		i0 = $imul(((r.Min.X - dst.Rect.Min.X >> 0)), 4);
  4�		i1 = $imul(((r.Max.X - dst.Rect.Min.X >> 0)), 4);
  4�		si0 = $imul(((sp.X - src.Rect.Min.X >> 0)), 1);
  4�		yMax = r.Max.Y - dst.Rect.Min.Y >> 0;
  4�		y = r.Min.Y - dst.Rect.Min.Y >> 0;
  5		sy = sp.Y - src.Rect.Min.Y >> 0;
  5*		while (true) {
			if (!(!((y === yMax)))) { break; }
  5Q			dpix = $subslice(dst.Pix, ($imul(y, dst.Stride)));
  5r			spix = $subslice(src.Pix, ($imul(sy, src.Stride)));
  5�			_tmp = i0;
			_tmp$1 = si0;
			i = _tmp;
			si = _tmp$1;
			while (true) {
				if (!(i < i1)) { break; }
  5�				p = ((si < 0 || si >= spix.$length) ? ($throwRuntimeError("index out of range"), undefined) : spix.$array[spix.$offset + si]);
  5�				d = $subslice(dpix, i, (i + 4 >> 0), (i + 4 >> 0));
  6=				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = p);
  6I				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = p);
  6U				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = p);
  6a				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = 255);
  5�				_tmp$2 = i + 4 >> 0;
				_tmp$3 = si + 1 >> 0;
				i = _tmp$2;
				si = _tmp$3;
			}
  5;			_tmp$4 = y + 1 >> 0;
			_tmp$5 = sy + 1 >> 0;
			y = _tmp$4;
			sy = _tmp$5;
		}
    	};
drawGrayimage/draw.drawGray image/draw.drawCMYK
image/drawdrawCMYK drawCMYK��	drawCMYK = function(dst, r, src, sp) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, d, dpix, dst, i, i0, i1, r, s, si, si0, sp, spix, src, sy, y, yMax;
  6�		i0 = $imul(((r.Min.X - dst.Rect.Min.X >> 0)), 4);
  6�		i1 = $imul(((r.Max.X - dst.Rect.Min.X >> 0)), 4);
  7		si0 = $imul(((sp.X - src.Rect.Min.X >> 0)), 4);
  7<		yMax = r.Max.Y - dst.Rect.Min.Y >> 0;
  7_		y = r.Min.Y - dst.Rect.Min.Y >> 0;
  7~		sy = sp.Y - src.Rect.Min.Y >> 0;
  7�		while (true) {
			if (!(!((y === yMax)))) { break; }
  7�			dpix = $subslice(dst.Pix, ($imul(y, dst.Stride)));
  7�			spix = $subslice(src.Pix, ($imul(sy, src.Stride)));
  8
			_tmp = i0;
			_tmp$1 = si0;
			i = _tmp;
			si = _tmp$1;
			while (true) {
				if (!(i < i1)) { break; }
  8;				s = $subslice(spix, si, (si + 4 >> 0), (si + 4 >> 0));
  8�				d = $subslice(dpix, i, (i + 4 >> 0), (i + 4 >> 0));
  8�				_tuple = color.CMYKToRGB((0 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 0]), (1 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 1]), (2 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 2]), (3 >= s.$length ? ($throwRuntimeError("index out of range"), undefined) : s.$array[s.$offset + 3]));
				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = _tuple[0]);
				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = _tuple[1]);
				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = _tuple[2]);
  8�				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = 255);
  8$				_tmp$2 = i + 4 >> 0;
				_tmp$3 = si + 4 >> 0;
				i = _tmp$2;
				si = _tmp$3;
			}
  7�			_tmp$4 = y + 1 >> 0;
			_tmp$5 = sy + 1 >> 0;
			y = _tmp$4;
			sy = _tmp$5;
		}
    	};
drawCMYKimage/color.CMYKToRGBimage/draw.drawCMYK image/draw.drawGlyphOver
image/drawdrawGlyphOver drawGlyphOver�+	drawGlyphOver = function(dst, r, src, mask, mp) {
		var _q, _q$1, _q$2, _q$3, _q$4, _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, a, d, dst, i, i0, i1, ma, mask, mi, mi0, mp, my, r, sa, sb, sg, sr, src, x$1, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _q$4 = $f._q$4; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; a = $f.a; d = $f.d; dst = $f.dst; i = $f.i; i0 = $f.i0; i1 = $f.i1; ma = $f.ma; mask = $f.mask; mi = $f.mi; mi0 = $f.mi0; mp = $f.mp; my = $f.my; r = $f.r; sa = $f.sa; sb = $f.sb; sg = $f.sg; sr = $f.sr; src = $f.src; x$1 = $f.x$1; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  9�		i0 = dst.PixOffset(r.Min.X, r.Min.Y);
  9�		i1 = i0 + ($imul($clone(r, image.Rectangle).Dx(), 4)) >> 0;
  9�		mi0 = mask.PixOffset(mp.X, mp.Y);
  9�		_r = src.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		sr = _tuple[0];
		sg = _tuple[1];
		sb = _tuple[2];
		sa = _tuple[3];
  :		_tmp = r.Min.Y;
		_tmp$1 = mp.Y;
		y = _tmp;
		my = _tmp$1;
		while (true) {
			if (!(!((y === r.Max.Y)))) { break; }
  :A			_tmp$2 = i0;
			_tmp$3 = mi0;
			i = _tmp$2;
			mi = _tmp$3;
			while (true) {
				if (!(i < i1)) { break; }
  :r				ma = (((x$1 = mask.Pix, ((mi < 0 || mi >= x$1.$length) ? ($throwRuntimeError("index out of range"), undefined) : x$1.$array[x$1.$offset + mi])) >>> 0));
    				if (ma === 0) {
  :[					_tmp$4 = i + 4 >> 0;
					_tmp$5 = mi + 1 >> 0;
					i = _tmp$4;
					mi = _tmp$5;
					continue;
    				}
  :�				ma = (ma | ((ma << 8 >>> 0))) >>> 0;
  ; 				a = $imul(((65535 - ((_q = ($imul(sa, ma) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"))) >>> 0)), 257) >>> 0;
  ;%				d = $subslice(dst.Pix, i, (i + 4 >> 0), (i + 4 >> 0));
  ;�				(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = ((((_q$1 = ((($imul((((0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0]) >>> 0)), a) >>> 0) + ($imul(sr, ma) >>> 0) >>> 0)) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  ;�				(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = ((((_q$2 = ((($imul((((1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1]) >>> 0)), a) >>> 0) + ($imul(sg, ma) >>> 0) >>> 0)) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  ;�				(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = ((((_q$3 = ((($imul((((2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2]) >>> 0)), a) >>> 0) + ($imul(sb, ma) >>> 0) >>> 0)) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  <#				(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = ((((_q$4 = ((($imul((((3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3]) >>> 0)), a) >>> 0) + ($imul(sa, ma) >>> 0) >>> 0)) / 65535, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  :[				_tmp$6 = i + 4 >> 0;
				_tmp$7 = mi + 1 >> 0;
				i = _tmp$6;
				mi = _tmp$7;
			}
  <Y			i0 = i0 + (dst.Stride) >> 0;
  <l			i1 = i1 + (dst.Stride) >> 0;
  <			mi0 = mi0 + (mask.Stride) >> 0;
  :'			_tmp$8 = y + 1 >> 0;
			_tmp$9 = my + 1 >> 0;
			y = _tmp$8;
			my = _tmp$9;
		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: drawGlyphOver }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._q$4 = _q$4; $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f.a = a; $f.d = d; $f.dst = dst; $f.i = i; $f.i0 = i0; $f.i1 = i1; $f.ma = ma; $f.mask = mask; $f.mi = mi; $f.mi0 = mi0; $f.mp = mp; $f.my = my; $f.r = r; $f.sa = sa; $f.sb = sb; $f.sg = sg; $f.sr = sr; $f.src = src; $f.x$1 = x$1; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
drawGlyphOverimage.Rectangleimage/draw.drawGlyphOver image/draw.drawRGBA
image/drawdrawRGBA drawRGBA�#6	drawRGBA = function(dst, r, src, sp, mask, mp, op) {
		var _q, _q$1, _q$2, _q$3, _q$4, _q$5, _q$6, _q$7, _q$8, _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$18, _tmp$19, _tmp$2, _tmp$20, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, a, d, da, db, dg, di, dr, dst, dx, dy, i, i0, ma, mask, mp, mx, mx0, my, op, r, sa, sb, sg, sp, sr, src, sx, sx0, sx1, sy, x0, x1, y, y0, y1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _q$4 = $f._q$4; _q$5 = $f._q$5; _q$6 = $f._q$6; _q$7 = $f._q$7; _q$8 = $f._q$8; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$17 = $f._tmp$17; _tmp$18 = $f._tmp$18; _tmp$19 = $f._tmp$19; _tmp$2 = $f._tmp$2; _tmp$20 = $f._tmp$20; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; d = $f.d; da = $f.da; db = $f.db; dg = $f.dg; di = $f.di; dr = $f.dr; dst = $f.dst; dx = $f.dx; dy = $f.dy; i = $f.i; i0 = $f.i0; ma = $f.ma; mask = $f.mask; mp = $f.mp; mx = $f.mx; mx0 = $f.mx0; my = $f.my; op = $f.op; r = $f.r; sa = $f.sa; sb = $f.sb; sg = $f.sg; sp = $f.sp; sr = $f.sr; src = $f.src; sx = $f.sx; sx0 = $f.sx0; sx1 = $f.sx1; sy = $f.sy; x0 = $f.x0; x1 = $f.x1; y = $f.y; y0 = $f.y0; y1 = $f.y1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  =		_tmp = r.Min.X;
		_tmp$1 = r.Max.X;
		_tmp$2 = 1;
		x0 = _tmp;
		x1 = _tmp$1;
		dx = _tmp$2;
  =:		_tmp$3 = r.Min.Y;
		_tmp$4 = r.Max.Y;
		_tmp$5 = 1;
		y0 = _tmp$3;
		y1 = _tmp$4;
		dy = _tmp$5;
    		if ($interfaceIsEqual((dst), src) && $clone(r, image.Rectangle).Overlaps($clone($clone(r, image.Rectangle).Add($clone($clone(sp, image.Point).Sub($clone(r.Min, image.Point)), image.Point)), image.Rectangle))) {
    			if (sp.Y < r.Min.Y || (sp.Y === r.Min.Y) && sp.X < r.Min.X) {
  =�				_tmp$6 = x1 - 1 >> 0;
				_tmp$7 = x0 - 1 >> 0;
				_tmp$8 = -1;
				x0 = _tmp$6;
				x1 = _tmp$7;
				dx = _tmp$8;
  =�				_tmp$9 = y1 - 1 >> 0;
				_tmp$10 = y0 - 1 >> 0;
				_tmp$11 = -1;
				y0 = _tmp$9;
				y1 = _tmp$10;
				dy = _tmp$11;
    			}
    		}
  > 		sy = (sp.Y + y0 >> 0) - r.Min.Y >> 0;
  >;		my = (mp.Y + y0 >> 0) - r.Min.Y >> 0;
  >V		sx0 = (sp.X + x0 >> 0) - r.Min.X >> 0;
  >r		mx0 = (mp.X + x0 >> 0) - r.Min.X >> 0;
  >�		sx1 = sx0 + ((x1 - x0 >> 0)) >> 0;
  >�		i0 = dst.PixOffset(x0, y0);
  >�		di = $imul(dx, 4);
  >�		y = y0;
		/* while (true) { */ case 1:
			/* if (!(!((y === y1)))) { break; } */ if(!(!((y === y1)))) { $s = 2; continue; }
  ?			_tmp$12 = i0;
			_tmp$13 = sx0;
			_tmp$14 = mx0;
			i = _tmp$12;
			sx = _tmp$13;
			mx = _tmp$14;
			/* while (true) { */ case 3:
				/* if (!(!((sx === sx1)))) { break; } */ if(!(!((sx === sx1)))) { $s = 4; continue; }
  ?X				ma = 65535;
  ?k				/* */ if (!($interfaceIsEqual(mask, $ifaceNil))) { $s = 5; continue; }
				/* */ $s = 6; continue;
    				/* if (!($interfaceIsEqual(mask, $ifaceNil))) { */ case 5:
  ?�					_r = mask.At(mx, my); /* */ $s = 7; case 7: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
					_r$1 = _r.RGBA(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
					_tuple = _r$1;
					ma = _tuple[3];
    				/* } */ case 6:
  ?�				_r$2 = src.At(sx, sy); /* */ $s = 9; case 9: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				_r$3 = _r$2.RGBA(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$1 = _r$3;
				sr = _tuple$1[0];
				sg = _tuple$1[1];
				sb = _tuple$1[2];
				sa = _tuple$1[3];
  ?�				d = $subslice(dst.Pix, i, (i + 4 >> 0), (i + 4 >> 0));
    				if (op === 0) {
  @Q					dr = (((0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0]) >>> 0));
  @h					dg = (((1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1]) >>> 0));
  @					db = (((2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2]) >>> 0));
  @�					da = (((3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3]) >>> 0));
  B					a = $imul(((65535 - ((_q = ($imul(sa, ma) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"))) >>> 0)), 257) >>> 0;
  B>					(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = ((((_q$1 = ((($imul(dr, a) >>> 0) + ($imul(sr, ma) >>> 0) >>> 0)) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  Bh					(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = ((((_q$2 = ((($imul(dg, a) >>> 0) + ($imul(sg, ma) >>> 0) >>> 0)) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  B�					(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = ((((_q$3 = ((($imul(db, a) >>> 0) + ($imul(sb, ma) >>> 0) >>> 0)) / 65535, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  B�					(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = ((((_q$4 = ((($imul(da, a) >>> 0) + ($imul(sa, ma) >>> 0) >>> 0)) / 65535, (_q$4 === _q$4 && _q$4 !== 1/0 && _q$4 !== -1/0) ? _q$4 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
    				} else {
  B�					(0 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 0] = ((((_q$5 = ($imul(sr, ma) >>> 0) / 65535, (_q$5 === _q$5 && _q$5 !== 1/0 && _q$5 !== -1/0) ? _q$5 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  C					(1 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 1] = ((((_q$6 = ($imul(sg, ma) >>> 0) / 65535, (_q$6 === _q$6 && _q$6 !== 1/0 && _q$6 !== -1/0) ? _q$6 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  C9					(2 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 2] = ((((_q$7 = ($imul(sb, ma) >>> 0) / 65535, (_q$7 === _q$7 && _q$7 !== 1/0 && _q$7 !== -1/0) ? _q$7 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
  C\					(3 >= d.$length ? ($throwRuntimeError("index out of range"), undefined) : d.$array[d.$offset + 3] = ((((_q$8 = ($imul(sa, ma) >>> 0) / 65535, (_q$8 === _q$8 && _q$8 !== 1/0 && _q$8 !== -1/0) ? _q$8 >>> 0 : $throwRuntimeError("integer divide by zero")) >>> 8 >>> 0) << 24 >>> 24)));
    				}
  ?4				_tmp$15 = i + di >> 0;
				_tmp$16 = sx + dx >> 0;
				_tmp$17 = mx + dx >> 0;
				i = _tmp$15;
				sx = _tmp$16;
				mx = _tmp$17;
			$s = 3; continue;
			case 4:
  C�			i0 = i0 + (($imul(dy, dst.Stride))) >> 0;
  >�			_tmp$18 = y + dy >> 0;
			_tmp$19 = sy + dy >> 0;
			_tmp$20 = my + dy >> 0;
			y = _tmp$18;
			sy = _tmp$19;
			my = _tmp$20;
		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: drawRGBA }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._q$4 = _q$4; $f._q$5 = _q$5; $f._q$6 = _q$6; $f._q$7 = _q$7; $f._q$8 = _q$8; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$17 = _tmp$17; $f._tmp$18 = _tmp$18; $f._tmp$19 = _tmp$19; $f._tmp$2 = _tmp$2; $f._tmp$20 = _tmp$20; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.d = d; $f.da = da; $f.db = db; $f.dg = dg; $f.di = di; $f.dr = dr; $f.dst = dst; $f.dx = dx; $f.dy = dy; $f.i = i; $f.i0 = i0; $f.ma = ma; $f.mask = mask; $f.mp = mp; $f.mx = mx; $f.mx0 = mx0; $f.my = my; $f.op = op; $f.r = r; $f.sa = sa; $f.sb = sb; $f.sg = sg; $f.sp = sp; $f.sr = sr; $f.src = src; $f.sx = sx; $f.sx0 = sx0; $f.sx1 = sx1; $f.sy = sy; $f.x0 = x0; $f.x1 = x1; $f.y = y; $f.y0 = y0; $f.y1 = y1; $f.$s = $s; $f.$r = $r; return $f;
	};
drawRGBAimage.Pointimage.Rectangleimage/draw.drawRGBA image/draw.clamp
image/drawclamp clamp��	clamp = function(i) {
		var i;
    		if (i < 0) {
  C�			return 0;
    		}
    		if (i > 65535) {
  D			return 65535;
    		}
  D,		return i;
    	};
clampimage/draw.clamp image/draw.sqDiff
image/drawsqDiff sqDiff��	sqDiff = function(x$1, y) {
		var d, x$1, y;
  E�		d = (((x$1 - y >> 0) >>> 0));
  E�		return (($imul(d, d) >>> 0)) >>> 2 >>> 0;
    	};
sqDiffimage/draw.sqDiff image/draw.drawPaletted
image/drawdrawPaletted drawPaletted�Y	drawPaletted = function(dst, r, src, sp, floydSteinberg$1) {
		var _i, _i$1, _i$2, _index, _index$1, _index$10, _index$11, _index$12, _index$13, _index$14, _index$15, _index$2, _index$3, _index$4, _index$5, _index$6, _index$7, _index$8, _index$9, _q, _q$1, _q$2, _q$3, _r, _r$1, _r$2, _r$3, _ref, _ref$1, _ref$2, _ref$3, _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, _tuple, _tuple$1, _tuple$2, _tuple$3, a, b, bestIndex, bestSum, col, dst, ea, eb, eg, er, floydSteinberg$1, g, i, i$1, index, ok, out, p, p$1, palette, pix, pxRGBA, quantErrorCurr, quantErrorNext, r, r$1, sa, sb, sg, sp, sr, src, src0, src0$1, src0$2, stride, sum, x$1, x$2, x$3, x$4, x$5, x$6, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _i$1 = $f._i$1; _i$2 = $f._i$2; _index = $f._index; _index$1 = $f._index$1; _index$10 = $f._index$10; _index$11 = $f._index$11; _index$12 = $f._index$12; _index$13 = $f._index$13; _index$14 = $f._index$14; _index$15 = $f._index$15; _index$2 = $f._index$2; _index$3 = $f._index$3; _index$4 = $f._index$4; _index$5 = $f._index$5; _index$6 = $f._index$6; _index$7 = $f._index$7; _index$8 = $f._index$8; _index$9 = $f._index$9; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _q$3 = $f._q$3; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _ref = $f._ref; _ref$1 = $f._ref$1; _ref$2 = $f._ref$2; _ref$3 = $f._ref$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$10 = $f._tmp$10; _tmp$11 = $f._tmp$11; _tmp$12 = $f._tmp$12; _tmp$13 = $f._tmp$13; _tmp$14 = $f._tmp$14; _tmp$15 = $f._tmp$15; _tmp$16 = $f._tmp$16; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tmp$8 = $f._tmp$8; _tmp$9 = $f._tmp$9; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; a = $f.a; b = $f.b; bestIndex = $f.bestIndex; bestSum = $f.bestSum; col = $f.col; dst = $f.dst; ea = $f.ea; eb = $f.eb; eg = $f.eg; er = $f.er; floydSteinberg$1 = $f.floydSteinberg$1; g = $f.g; i = $f.i; i$1 = $f.i$1; index = $f.index; ok = $f.ok; out = $f.out; p = $f.p; p$1 = $f.p$1; palette = $f.palette; pix = $f.pix; pxRGBA = $f.pxRGBA; quantErrorCurr = $f.quantErrorCurr; quantErrorNext = $f.quantErrorNext; r = $f.r; r$1 = $f.r$1; sa = $f.sa; sb = $f.sb; sg = $f.sg; sp = $f.sp; sr = $f.sr; src = $f.src; src0 = $f.src0; src0$1 = $f.src0$1; src0$2 = $f.src0$2; stride = $f.stride; sum = $f.sum; x$1 = $f.x$1; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		out = [out];
		src = [src];
		src0 = [src0];
		src0$1 = [src0$1];
		src0$2 = [src0$2];
  H=		_tmp = (sliceType.nil);
		_tmp$1 = (sliceType$1.nil);
		_tmp$2 = 0;
		palette = _tmp;
		pix = _tmp$1;
		stride = _tmp$2;
  Hy		_tuple = $assertType(dst, ptrType$2, true);
		p = _tuple[0];
		ok = _tuple[1];
  Hv		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
  H�			palette = $makeSlice(sliceType, p.Palette.$length);
  H�			_ref = p.Palette;
			_i = 0;
			/* while (true) { */ case 3:
				/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 4; continue; }
				i = _i;
				col = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  H�				_r = col.RGBA(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				r$1 = _tuple$1[0];
				g = _tuple$1[1];
				b = _tuple$1[2];
				a = _tuple$1[3];
  I				((i < 0 || i >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + i])[0] = ((r$1 >> 0));
  I(				((i < 0 || i >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + i])[1] = ((g >> 0));
  ID				((i < 0 || i >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + i])[2] = ((b >> 0));
  I`				((i < 0 || i >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + i])[3] = ((a >> 0));
    				_i++;
			$s = 3; continue;
			case 4:
  I			_tmp$3 = $subslice(p.Pix, p.PixOffset(r.Min.X, r.Min.Y));
			_tmp$4 = p.Stride;
			pix = _tmp$3;
			stride = _tmp$4;
    		/* } */ case 2:
  J�		_tmp$5 = sliceType.nil;
		_tmp$6 = sliceType.nil;
		quantErrorCurr = _tmp$5;
		quantErrorNext = _tmp$6;
    		if (floydSteinberg$1) {
  J�			quantErrorCurr = $makeSlice(sliceType, ($clone(r, image.Rectangle).Dx() + 2 >> 0));
  K			quantErrorNext = $makeSlice(sliceType, ($clone(r, image.Rectangle).Dx() + 2 >> 0));
    		}
  K3		pxRGBA = (function(out, src, src0, src0$1, src0$2) { return function $b(x$1, y) {
			var $24r, _r$1, _r$2, _tuple$2, a$1, b$1, g$1, r$2, x$1, y, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r$1 = $f._r$1; _r$2 = $f._r$2; _tuple$2 = $f._tuple$2; a$1 = $f.a$1; b$1 = $f.b$1; g$1 = $f.g$1; r$2 = $f.r$2; x$1 = $f.x$1; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
			r$2 = 0;
			g$1 = 0;
			b$1 = 0;
			a$1 = 0;
    			_r$1 = src[0].At(x$1, y); /* */ $s = 1; case 1: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_r$2 = _r$1.RGBA(); /* */ $s = 2; case 2: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$2 = _r$2;
			r$2 = _tuple$2[0];
			g$1 = _tuple$2[1];
			b$1 = _tuple$2[2];
			a$1 = _tuple$2[3];
			$24r = [r$2, g$1, b$1, a$1];
			$s = 3; case 3: return $24r;
    			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f.$24r = $24r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._tuple$2 = _tuple$2; $f.a$1 = a$1; $f.b$1 = b$1; $f.g$1 = g$1; $f.r$2 = r$2; $f.x$1 = x$1; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
		}; })(out, src, src0, src0$1, src0$2);
  LP		_ref$1 = src[0];
		/* */ if ($assertType(_ref$1, ptrType$1, true)[1]) { $s = 6; continue; }
		/* */ if ($assertType(_ref$1, ptrType$4, true)[1]) { $s = 7; continue; }
		/* */ if ($assertType(_ref$1, ptrType$5, true)[1]) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if ($assertType(_ref$1, ptrType$1, true)[1]) { */ case 6:
    			src0[0] = _ref$1.$val;
  L�			pxRGBA = (function(out, src, src0, src0$1, src0$2) { return function(x$1, y) {
				var _tuple$2, a$1, b$1, g$1, r$2, x$1, y;
				r$2 = 0;
				g$1 = 0;
				b$1 = 0;
				a$1 = 0;
    				_tuple$2 = $clone(src0[0].RGBAAt(x$1, y), color.RGBA).RGBA();
				r$2 = _tuple$2[0];
				g$1 = _tuple$2[1];
				b$1 = _tuple$2[2];
				a$1 = _tuple$2[3];
				return [r$2, g$1, b$1, a$1];
    			}; })(out, src, src0, src0$1, src0$2);
    			$s = 9; continue;
    		/* } else if ($assertType(_ref$1, ptrType$4, true)[1]) { */ case 7:
    			src0$1[0] = _ref$1.$val;
  L�			pxRGBA = (function(out, src, src0, src0$1, src0$2) { return function(x$1, y) {
				var _tuple$2, a$1, b$1, g$1, r$2, x$1, y;
				r$2 = 0;
				g$1 = 0;
				b$1 = 0;
				a$1 = 0;
    				_tuple$2 = $clone(src0$1[0].NRGBAAt(x$1, y), color.NRGBA).RGBA();
				r$2 = _tuple$2[0];
				g$1 = _tuple$2[1];
				b$1 = _tuple$2[2];
				a$1 = _tuple$2[3];
				return [r$2, g$1, b$1, a$1];
    			}; })(out, src, src0, src0$1, src0$2);
    			$s = 9; continue;
    		/* } else if ($assertType(_ref$1, ptrType$5, true)[1]) { */ case 8:
    			src0$2[0] = _ref$1.$val;
  MN			pxRGBA = (function(out, src, src0, src0$1, src0$2) { return function(x$1, y) {
				var _tuple$2, a$1, b$1, g$1, r$2, x$1, y;
				r$2 = 0;
				g$1 = 0;
				b$1 = 0;
				a$1 = 0;
    				_tuple$2 = $clone(src0$2[0].YCbCrAt(x$1, y), color.YCbCr).RGBA();
				r$2 = _tuple$2[0];
				g$1 = _tuple$2[1];
				b$1 = _tuple$2[2];
				a$1 = _tuple$2[3];
				return [r$2, g$1, b$1, a$1];
    			}; })(out, src, src0, src0$1, src0$2);
    		/* } */ case 9:
  M�		out[0] = new color.RGBA64.ptr(0, 0, 0, 65535);
  M�		y = 0;
		/* while (true) { */ case 10:
			/* if (!(!((y === $clone(r, image.Rectangle).Dy())))) { break; } */ if(!(!((y === $clone(r, image.Rectangle).Dy())))) { $s = 11; continue; }
  N
			x$1 = 0;
			/* while (true) { */ case 12:
				/* if (!(!((x$1 === $clone(r, image.Rectangle).Dx())))) { break; } */ if(!(!((x$1 === $clone(r, image.Rectangle).Dx())))) { $s = 13; continue; }
  N�				_r$1 = pxRGBA(sp.X + x$1 >> 0, sp.Y + y >> 0); /* */ $s = 14; case 14: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$2 = _r$1;
				sr = _tuple$2[0];
				sg = _tuple$2[1];
				sb = _tuple$2[2];
				sa = _tuple$2[3];
  N�				_tmp$7 = ((sr >> 0));
				_tmp$8 = ((sg >> 0));
				_tmp$9 = ((sb >> 0));
				_tmp$10 = ((sa >> 0));
				er = _tmp$7;
				eg = _tmp$8;
				eb = _tmp$9;
				ea = _tmp$10;
    				if (floydSteinberg$1) {
  O					er = clamp(er + (_q = (x$2 = x$1 + 1 >> 0, ((x$2 < 0 || x$2 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + x$2]))[0] / 16, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")) >> 0);
  O;					eg = clamp(eg + (_q$1 = (x$3 = x$1 + 1 >> 0, ((x$3 < 0 || x$3 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + x$3]))[1] / 16, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0);
  Oj					eb = clamp(eb + (_q$2 = (x$4 = x$1 + 1 >> 0, ((x$4 < 0 || x$4 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + x$4]))[2] / 16, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0);
  O�					ea = clamp(ea + (_q$3 = (x$5 = x$1 + 1 >> 0, ((x$5 < 0 || x$5 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + x$5]))[3] / 16, (_q$3 === _q$3 && _q$3 !== 1/0 && _q$3 !== -1/0) ? _q$3 >> 0 : $throwRuntimeError("integer divide by zero")) >> 0);
    				}
  O�				/* */ if (!(palette === sliceType.nil)) { $s = 15; continue; }
				/* */ $s = 16; continue;
    				/* if (!(palette === sliceType.nil)) { */ case 15:
  P�					_tmp$11 = 0;
					_tmp$12 = 4294967295;
					bestIndex = _tmp$11;
					bestSum = _tmp$12;
  P�					_ref$2 = palette;
					_i$1 = 0;
					while (true) {
						if (!(_i$1 < _ref$2.$length)) { break; }
						index = _i$1;
						p$1 = $clone(((_i$1 < 0 || _i$1 >= _ref$2.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref$2.$array[_ref$2.$offset + _i$1]), arrayType);
  P�						sum = ((sqDiff(er, p$1[0]) + sqDiff(eg, p$1[1]) >>> 0) + sqDiff(eb, p$1[2]) >>> 0) + sqDiff(ea, p$1[3]) >>> 0;
    						if (sum < bestSum) {
  QR							_tmp$13 = index;
							_tmp$14 = sum;
							bestIndex = _tmp$13;
							bestSum = _tmp$14;
    							if (sum === 0) {
  Q�								break;
    							}
    						}
    						_i$1++;
					}
  Q�					(x$6 = ($imul(y, stride)) + x$1 >> 0, ((x$6 < 0 || x$6 >= pix.$length) ? ($throwRuntimeError("index out of range"), undefined) : pix.$array[pix.$offset + x$6] = ((bestIndex << 24 >>> 24))));
    					if (!floydSteinberg$1) {
  N						x$1 = x$1 + (1) >> 0;
    						/* continue; */ $s = 12; continue;
    					}
  R 					er = er - (((bestIndex < 0 || bestIndex >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + bestIndex])[0]) >> 0;
  R 					eg = eg - (((bestIndex < 0 || bestIndex >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + bestIndex])[1]) >> 0;
  R@					eb = eb - (((bestIndex < 0 || bestIndex >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + bestIndex])[2]) >> 0;
  R`					ea = ea - (((bestIndex < 0 || bestIndex >= palette.$length) ? ($throwRuntimeError("index out of range"), undefined) : palette.$array[palette.$offset + bestIndex])[3]) >> 0;
    					$s = 17; continue;
				/* } else { */ case 16:
  R�					out[0].R = ((er << 16 >>> 16));
  R�					out[0].G = ((eg << 16 >>> 16));
  R�					out[0].B = ((eb << 16 >>> 16));
  R�					out[0].A = ((ea << 16 >>> 16));
  S�					$r = dst.Set(r.Min.X + x$1 >> 0, r.Min.Y + y >> 0, out[0]); /* */ $s = 18; case 18: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    					if (!floydSteinberg$1) {
  N						x$1 = x$1 + (1) >> 0;
    						/* continue; */ $s = 12; continue;
    					}
  T9					_r$2 = dst.At(r.Min.X + x$1 >> 0, r.Min.Y + y >> 0); /* */ $s = 19; case 19: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
					_r$3 = _r$2.RGBA(); /* */ $s = 20; case 20: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
					_tuple$3 = _r$3;
					sr = _tuple$3[0];
					sg = _tuple$3[1];
					sb = _tuple$3[2];
					sa = _tuple$3[3];
  Tr					er = er - (((sr >> 0))) >> 0;
  T�					eg = eg - (((sg >> 0))) >> 0;
  T�					eb = eb - (((sb >> 0))) >> 0;
  T�					ea = ea - (((sa >> 0))) >> 0;
    				/* } */ case 17:
    				_index = x$1 + 0 >> 0;
  T�				((_index < 0 || _index >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index])[0] = (((_index < 0 || _index >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index])[0] + (($imul(er, 3))) >> 0);
    				_index$1 = x$1 + 0 >> 0;
  U#				((_index$1 < 0 || _index$1 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$1])[1] = (((_index$1 < 0 || _index$1 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$1])[1] + (($imul(eg, 3))) >> 0);
    				_index$2 = x$1 + 0 >> 0;
  UG				((_index$2 < 0 || _index$2 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$2])[2] = (((_index$2 < 0 || _index$2 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$2])[2] + (($imul(eb, 3))) >> 0);
    				_index$3 = x$1 + 0 >> 0;
  Uk				((_index$3 < 0 || _index$3 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$3])[3] = (((_index$3 < 0 || _index$3 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$3])[3] + (($imul(ea, 3))) >> 0);
    				_index$4 = x$1 + 1 >> 0;
  U�				((_index$4 < 0 || _index$4 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$4])[0] = (((_index$4 < 0 || _index$4 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$4])[0] + (($imul(er, 5))) >> 0);
    				_index$5 = x$1 + 1 >> 0;
  U�				((_index$5 < 0 || _index$5 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$5])[1] = (((_index$5 < 0 || _index$5 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$5])[1] + (($imul(eg, 5))) >> 0);
    				_index$6 = x$1 + 1 >> 0;
  U�				((_index$6 < 0 || _index$6 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$6])[2] = (((_index$6 < 0 || _index$6 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$6])[2] + (($imul(eb, 5))) >> 0);
    				_index$7 = x$1 + 1 >> 0;
  U�				((_index$7 < 0 || _index$7 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$7])[3] = (((_index$7 < 0 || _index$7 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$7])[3] + (($imul(ea, 5))) >> 0);
    				_index$8 = x$1 + 2 >> 0;
  V				((_index$8 < 0 || _index$8 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$8])[0] = (((_index$8 < 0 || _index$8 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$8])[0] + (($imul(er, 1))) >> 0);
    				_index$9 = x$1 + 2 >> 0;
  VC				((_index$9 < 0 || _index$9 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$9])[1] = (((_index$9 < 0 || _index$9 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$9])[1] + (($imul(eg, 1))) >> 0);
    				_index$10 = x$1 + 2 >> 0;
  Vg				((_index$10 < 0 || _index$10 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$10])[2] = (((_index$10 < 0 || _index$10 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$10])[2] + (($imul(eb, 1))) >> 0);
    				_index$11 = x$1 + 2 >> 0;
  V�				((_index$11 < 0 || _index$11 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$11])[3] = (((_index$11 < 0 || _index$11 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + _index$11])[3] + (($imul(ea, 1))) >> 0);
    				_index$12 = x$1 + 2 >> 0;
  V�				((_index$12 < 0 || _index$12 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$12])[0] = (((_index$12 < 0 || _index$12 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$12])[0] + (($imul(er, 7))) >> 0);
    				_index$13 = x$1 + 2 >> 0;
  V�				((_index$13 < 0 || _index$13 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$13])[1] = (((_index$13 < 0 || _index$13 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$13])[1] + (($imul(eg, 7))) >> 0);
    				_index$14 = x$1 + 2 >> 0;
  V�				((_index$14 < 0 || _index$14 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$14])[2] = (((_index$14 < 0 || _index$14 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$14])[2] + (($imul(eb, 7))) >> 0);
    				_index$15 = x$1 + 2 >> 0;
  W				((_index$15 < 0 || _index$15 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$15])[3] = (((_index$15 < 0 || _index$15 >= quantErrorCurr.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorCurr.$array[quantErrorCurr.$offset + _index$15])[3] + (($imul(ea, 7))) >> 0);
  N				x$1 = x$1 + (1) >> 0;
    			$s = 12; continue;
			case 13:
    			if (floydSteinberg$1) {
  W�				_tmp$15 = quantErrorNext;
				_tmp$16 = quantErrorCurr;
				quantErrorCurr = _tmp$15;
				quantErrorNext = _tmp$16;
  W�				_ref$3 = quantErrorNext;
				_i$2 = 0;
				while (true) {
					if (!(_i$2 < _ref$3.$length)) { break; }
					i$1 = _i$2;
  W�					arrayType.copy(((i$1 < 0 || i$1 >= quantErrorNext.$length) ? ($throwRuntimeError("index out of range"), undefined) : quantErrorNext.$array[quantErrorNext.$offset + i$1]), arrayType.zero());
    					_i$2++;
				}
    			}
  M�			y = y + (1) >> 0;
    		$s = 10; continue;
		case 11:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: drawPaletted }; } $f._i = _i; $f._i$1 = _i$1; $f._i$2 = _i$2; $f._index = _index; $f._index$1 = _index$1; $f._index$10 = _index$10; $f._index$11 = _index$11; $f._index$12 = _index$12; $f._index$13 = _index$13; $f._index$14 = _index$14; $f._index$15 = _index$15; $f._index$2 = _index$2; $f._index$3 = _index$3; $f._index$4 = _index$4; $f._index$5 = _index$5; $f._index$6 = _index$6; $f._index$7 = _index$7; $f._index$8 = _index$8; $f._index$9 = _index$9; $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._q$3 = _q$3; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._ref = _ref; $f._ref$1 = _ref$1; $f._ref$2 = _ref$2; $f._ref$3 = _ref$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$10 = _tmp$10; $f._tmp$11 = _tmp$11; $f._tmp$12 = _tmp$12; $f._tmp$13 = _tmp$13; $f._tmp$14 = _tmp$14; $f._tmp$15 = _tmp$15; $f._tmp$16 = _tmp$16; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tmp$8 = _tmp$8; $f._tmp$9 = _tmp$9; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f.a = a; $f.b = b; $f.bestIndex = bestIndex; $f.bestSum = bestSum; $f.col = col; $f.dst = dst; $f.ea = ea; $f.eb = eb; $f.eg = eg; $f.er = er; $f.floydSteinberg$1 = floydSteinberg$1; $f.g = g; $f.i = i; $f.i$1 = i$1; $f.index = index; $f.ok = ok; $f.out = out; $f.p = p; $f.p$1 = p$1; $f.palette = palette; $f.pix = pix; $f.pxRGBA = pxRGBA; $f.quantErrorCurr = quantErrorCurr; $f.quantErrorNext = quantErrorNext; $f.r = r; $f.r$1 = r$1; $f.sa = sa; $f.sb = sb; $f.sg = sg; $f.sp = sp; $f.sr = sr; $f.src = src; $f.src0 = src0; $f.src0$1 = src0$1; $f.src0$2 = src0$2; $f.stride = stride; $f.sum = sum; $f.x$1 = x$1; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
drawPalettedimage.Rectangleimage/color.NRGBAimage/color.RGBAimage/color.RGBA64image/color.YCbCrimage/draw.arrayTypeimage/draw.clampimage/draw.drawPalettedimage/draw.ptrType$1image/draw.ptrType$2image/draw.ptrType$4image/draw.ptrType$5image/draw.sliceTypeimage/draw.sliceType$1image/draw.sqDiff �3{"Base":22556,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/image/draw/draw.go","Base":1,"Size":22554,"Lines":[0,55,109,159,160,214,217,289,340,353,354,363,372,387,415,417,418,480,500,501,572,595,608,638,640,641,719,792,868,912,941,960,990,1027,1029,1030,1076,1103,1174,1241,1297,1299,1300,1345,1357,1358,1366,1413,1429,1464,1469,1471,1472,1551,1558,1641,1692,1694,1695,1731,1755,1821,1883,1952,1954,1955,2031,2045,2090,2091,2120,2121,2213,2248,2264,2273,2276,2313,2315,2316,2388,2464,2507,2619,2634,2666,2717,2735,2788,2791,2815,2839,2864,2873,2876,2888,2900,2916,2929,2942,2945,2947,2948,3045,3067,3105,3163,3165,3166,3206,3288,3339,3341,3342,3438,3527,3647,3683,3699,3708,3711,3712,3825,3854,3873,3891,3911,3943,3968,4003,4026,4069,4083,4127,4134,4146,4168,4205,4217,4240,4278,4290,4313,4374,4429,4490,4510,4559,4572,4579,4601,4634,4646,4668,4701,4713,4719,4771,4803,4828,4873,4885,4891,4896,4907,4927,4959,4984,5019,5061,5073,5095,5131,5143,5166,5203,5215,5238,5287,5300,5307,5329,5362,5374,5396,5429,5441,5447,5452,5456,5499,5508,5531,5563,5608,5660,5703,5725,5756,5786,5792,5824,5869,5892,5915,5952,5958,5969,6018,6060,6071,6076,6080,6083,6084,6119,6154,6193,6223,6253,6256,6257,6279,6306,6333,6389,6417,6445,6502,6521,6541,6582,6587,6599,6616,6636,6651,6664,6702,6708,6738,6772,6784,6828,6848,6891,6919,6959,6999,7039,7079,7092,7125,7158,7191,7224,7230,7291,7356,7419,7480,7504,7509,7513,7516,7518,7519,7598,7656,7679,7718,7739,7778,7810,7833,7856,7879,7902,7903,7947,7991,8035,8079,8083,8102,8121,8124,8126,8127,8205,8228,8251,8274,8297,8399,8503,8574,8613,8634,8665,8686,8707,8728,8749,8752,8780,8822,8841,8860,8893,8896,8898,8899,8988,9014,9053,9086,9093,9114,9135,9138,9197,9219,9241,9272,9282,9390,9490,9520,9550,9573,9596,9632,9635,9657,9680,9703,9741,9839,9869,9899,9929,9959,9960,10020,10045,10046,10144,10190,10236,10282,10328,10332,10347,10362,10365,10367,10368,10456,10483,10522,10555,10579,10601,10623,10645,10655,10723,10790,10862,10931,10956,10986,11016,11039,11062,11065,11087,11130,11145,11160,11163,11165,11166,11257,11295,11333,11369,11403,11404,11435,11464,11502,11535,11569,11570,11622,11690,11791,11821,11855,11889,11923,11924,12022,12044,12066,12088,12110,12111,12171,12196,12197,12233,12269,12305,12341,12345,12348,12350,12351,12441,12479,12517,12553,12587,12588,12619,12648,12686,12719,12753,12754,12806,12874,12975,13005,13039,13073,13107,13108,13206,13231,13256,13281,13306,13310,13313,13315,13316,13401,13439,13477,13513,13547,13548,13579,13608,13646,13679,13713,13714,13766,13783,13881,13893,13905,13917,13931,13935,13938,13940,13941,14026,14064,14102,14138,14172,14173,14204,14233,14271,14304,14338,14339,14391,14492,14520,14582,14596,14600,14603,14605,14606,14718,14757,14778,14813,14843,14906,14958,14988,15004,15017,15022,15039,15040,15100,15136,15137,15238,15289,15340,15391,15442,15446,15465,15484,15505,15508,15510,15511,15637,15672,15707,15773,15832,15863,15894,15898,15901,15902,15929,15956,15984,16012,16036,16065,16079,16135,16212,16231,16251,16292,16297,16340,16441,16460,16483,16506,16529,16552,16553,16633,16691,16712,16778,16843,16915,16952,16953,16995,17037,17079,17121,17122,17134,17169,17204,17239,17274,17279,17283,17307,17310,17312,17313,17360,17388,17400,17411,17414,17431,17447,17450,17460,17462,17463,17537,17586,17589,17649,17682,17748,17822,17890,17910,17931,17933,17934,18038,18105,18170,18232,18233,18303,18374,18445,18491,18548,18589,18634,18668,18696,18724,18752,18780,18808,18812,18876,18879,18880,18955,19030,19086,19133,19154,19200,19246,19249,19326,19401,19471,19534,19563,19582,19664,19684,19767,19787,19870,19873,19874,19907,19939,19971,20004,20062,20100,20144,20208,20231,20278,20325,20372,20419,20424,20425,20448,20514,20568,20620,20665,20701,20787,20811,20849,20869,20882,20890,20897,20903,20941,20942,20967,20981,20987,21019,21051,21083,21115,21116,21128,21151,21174,21197,21220,21281,21346,21409,21470,21510,21511,21536,21550,21556,21613,21633,21653,21673,21693,21698,21699,21755,21791,21827,21863,21899,21935,21971,22007,22043,22079,22115,22151,22187,22223,22259,22295,22331,22335,22336,22381,22403,22470,22505,22540,22545,22549,22552],"Infos":null}]}
 