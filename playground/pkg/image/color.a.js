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
GoLinkname�� Implementation�� 	Reference��   ��!��image/colorcolor��i �� ARGBAcAlphargbaAlpha16ModelGray16CMYKCMYKmykGrayConvertColorfRGBNRGBANRGBA64YCbCrNYCbCrApPaletteIndexRGBA64CbCrcbcrcolorAlpha16Model
AlphaModelBlack	CMYKModel	CMYKToRGBGray16Model	GrayModel	ModelFuncNRGBA64Model
NRGBAModelNYCbCrAModelOpaqueRGBA64Model	RGBAModel	RGBToCMYK
RGBToYCbCrTransparentWhite
YCbCrModel
YCbCrToRGB     
 T    (  	 	 	 	      T B  J  	 	 	 	   V dV d & V m  -   /   1   3   5 T s  �   	  	  	  	V dF   : < >            	 	 	 	T �  1   @ T �  �  	 	 	 	  1  T �  m  	 	 	 	V dV d M    E �  � T �   �  � F  S�  d   U   W   Y      [ T �  �  	 	 	 	  U   W   Y      a T �  �  	 	 	 	V dV d i   i�     o T �  �   	  	  	  	V dV J� y T � E w� �  �  � w� �     U   W   Y       T �  �  	 	 	 	  U   W   Y      � T �  �  	 	 	 	V dV dF             F           V JV m  1   �   �  T �  �   	  	  	  	V dF  < � �        � "
-�G�J�P5m����M�@�&����� ���[�a�����o�����y����������������i�����N Colorc	Color = $pkg.Color = $newType(8, $kindInterface, "color.Color", true, "image/color", true, null);
w	Color.init([{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}]);
Colorimage/color.Color  RGBA�1	RGBA = $pkg.RGBA = $newType(0, $kindStruct, "color.RGBA", true, "image/color", true, function(R_, G_, B_, A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = 0;
			this.G = 0;
			this.B = 0;
			this.A = 0;
			return;
		}
		this.R = R_;
		this.G = G_;
		this.B = B_;
		this.A = A_;
	});
z	RGBA.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�N	RGBA.init("", [{prop: "R", name: "R", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "G", name: "G", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "B", name: "B", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "A", name: "A", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
RGBAimage/color.RGBA  RGBA64�7	RGBA64 = $pkg.RGBA64 = $newType(0, $kindStruct, "color.RGBA64", true, "image/color", true, function(R_, G_, B_, A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = 0;
			this.G = 0;
			this.B = 0;
			this.A = 0;
			return;
		}
		this.R = R_;
		this.G = G_;
		this.B = B_;
		this.A = A_;
	});
|	RGBA64.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�T	RGBA64.init("", [{prop: "R", name: "R", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "G", name: "G", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "B", name: "B", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "A", name: "A", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
RGBA64image/color.RGBA64  NRGBA�4	NRGBA = $pkg.NRGBA = $newType(0, $kindStruct, "color.NRGBA", true, "image/color", true, function(R_, G_, B_, A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = 0;
			this.G = 0;
			this.B = 0;
			this.A = 0;
			return;
		}
		this.R = R_;
		this.G = G_;
		this.B = B_;
		this.A = A_;
	});
{	NRGBA.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�O	NRGBA.init("", [{prop: "R", name: "R", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "G", name: "G", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "B", name: "B", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "A", name: "A", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
NRGBAimage/color.NRGBA  NRGBA64�:	NRGBA64 = $pkg.NRGBA64 = $newType(0, $kindStruct, "color.NRGBA64", true, "image/color", true, function(R_, G_, B_, A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = 0;
			this.G = 0;
			this.B = 0;
			this.A = 0;
			return;
		}
		this.R = R_;
		this.G = G_;
		this.B = B_;
		this.A = A_;
	});
}	NRGBA64.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�U	NRGBA64.init("", [{prop: "R", name: "R", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "G", name: "G", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "B", name: "B", embedded: false, exported: true, typ: $Uint16, tag: ""}, {prop: "A", name: "A", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
NRGBA64image/color.NRGBA64  Alpha��	Alpha = $pkg.Alpha = $newType(0, $kindStruct, "color.Alpha", true, "image/color", true, function(A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.A = 0;
			return;
		}
		this.A = A_;
	});
{	Alpha.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
b	Alpha.init("", [{prop: "A", name: "A", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
Alphaimage/color.Alpha  Alpha16��	Alpha16 = $pkg.Alpha16 = $newType(0, $kindStruct, "color.Alpha16", true, "image/color", true, function(A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.A = 0;
			return;
		}
		this.A = A_;
	});
}	Alpha16.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
e	Alpha16.init("", [{prop: "A", name: "A", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
Alpha16image/color.Alpha16  Gray��	Gray = $pkg.Gray = $newType(0, $kindStruct, "color.Gray", true, "image/color", true, function(Y_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Y = 0;
			return;
		}
		this.Y = Y_;
	});
z	Gray.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
a	Gray.init("", [{prop: "Y", name: "Y", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
Grayimage/color.Gray  Gray16��	Gray16 = $pkg.Gray16 = $newType(0, $kindStruct, "color.Gray16", true, "image/color", true, function(Y_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Y = 0;
			return;
		}
		this.Y = Y_;
	});
|	Gray16.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
d	Gray16.init("", [{prop: "Y", name: "Y", embedded: false, exported: true, typ: $Uint16, tag: ""}]);
Gray16image/color.Gray16  Modelc	Model = $pkg.Model = $newType(8, $kindInterface, "color.Model", true, "image/color", true, null);
e	Model.init([{prop: "Convert", name: "Convert", pkg: "", typ: $funcType([Color], [Color], false)}]);
Modelimage/color.Colorimage/color.Model  	modelFunc��	modelFunc = $pkg.modelFunc = $newType(0, $kindStruct, "color.modelFunc", true, "image/color", false, function(f_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.f = $throwNilPointerError;
			return;
		}
		this.f = f_;
	});
k	ptrType.methods = [{prop: "Convert", name: "Convert", pkg: "", typ: $funcType([Color], [Color], false)}];
t	modelFunc.init("image/color", [{prop: "f", name: "f", embedded: false, exported: false, typ: funcType, tag: ""}]);
	modelFuncimage/color.Colorimage/color.funcTypeimage/color.modelFuncimage/color.ptrType  Palettef	Palette = $pkg.Palette = $newType(12, $kindSlice, "color.Palette", true, "image/color", true, null);
��	Palette.methods = [{prop: "Convert", name: "Convert", pkg: "", typ: $funcType([Color], [Color], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([Color], [$Int], false)}];
	Palette.init(Color);
Paletteimage/color.Colorimage/color.Palette  YCbCr�	YCbCr = $pkg.YCbCr = $newType(0, $kindStruct, "color.YCbCr", true, "image/color", true, function(Y_, Cb_, Cr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Y = 0;
			this.Cb = 0;
			this.Cr = 0;
			return;
		}
		this.Y = Y_;
		this.Cb = Cb_;
		this.Cr = Cr_;
	});
{	YCbCr.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�	YCbCr.init("", [{prop: "Y", name: "Y", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "Cb", name: "Cb", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "Cr", name: "Cr", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
YCbCrimage/color.YCbCr  NYCbCrA�	NYCbCrA = $pkg.NYCbCrA = $newType(0, $kindStruct, "color.NYCbCrA", true, "image/color", true, function(YCbCr_, A_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.YCbCr = new YCbCr.ptr(0, 0, 0);
			this.A = 0;
			return;
		}
		this.YCbCr = YCbCr_;
		this.A = A_;
	});
}	NYCbCrA.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
��	NYCbCrA.init("", [{prop: "YCbCr", name: "YCbCr", embedded: true, exported: true, typ: YCbCr, tag: ""}, {prop: "A", name: "A", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
NYCbCrAimage/color.NYCbCrAimage/color.YCbCr  CMYK�1	CMYK = $pkg.CMYK = $newType(0, $kindStruct, "color.CMYK", true, "image/color", true, function(C_, M_, Y_, K_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.C = 0;
			this.M = 0;
			this.Y = 0;
			this.K = 0;
			return;
		}
		this.C = C_;
		this.M = M_;
		this.Y = Y_;
		this.K = K_;
	});
z	CMYK.methods = [{prop: "RGBA", name: "RGBA", pkg: "", typ: $funcType([], [$Uint32, $Uint32, $Uint32, $Uint32], false)}];
�N	CMYK.init("", [{prop: "C", name: "C", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "M", name: "M", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "Y", name: "Y", embedded: false, exported: true, typ: $Uint8, tag: ""}, {prop: "K", name: "K", embedded: false, exported: true, typ: $Uint8, tag: ""}]);
CMYKimage/color.CMYK  ptrType 	ptrType = $ptrType(modelFunc);
ptrTypeimage/color.modelFunc  funcType0	funcType = $funcType([Color], [Color], false);
funcTypeimage/color.Color  	RGBAModel  RGBA64Model  
NRGBAModel  NRGBA64Model  
AlphaModel  Alpha16Model  	GrayModel  Gray16Model  Black  White  Transparent  Opaque  
YCbCrModel  NYCbCrAModel  	CMYKModel  .  \		$pkg.RGBAModel = ModelFunc(rgbaModel);
image/color.ModelFuncimage/color.RGBAModelimage/color.rgbaModel  2  �		$pkg.RGBA64Model = ModelFunc(rgba64Model);
image/color.ModelFuncimage/color.RGBA64Modelimage/color.rgba64Model  0  �		$pkg.NRGBAModel = ModelFunc(nrgbaModel);
image/color.ModelFuncimage/color.NRGBAModelimage/color.nrgbaModel  4  �		$pkg.NRGBA64Model = ModelFunc(nrgba64Model);
image/color.ModelFuncimage/color.NRGBA64Modelimage/color.nrgba64Model  0  		$pkg.AlphaModel = ModelFunc(alphaModel);
image/color.AlphaModelimage/color.ModelFuncimage/color.alphaModel  4  :		$pkg.Alpha16Model = ModelFunc(alpha16Model);
image/color.Alpha16Modelimage/color.ModelFuncimage/color.alpha16Model  .  h		$pkg.GrayModel = ModelFunc(grayModel);
image/color.GrayModelimage/color.ModelFuncimage/color.grayModel  2  �		$pkg.Gray16Model = ModelFunc(gray16Model);
image/color.Gray16Modelimage/color.ModelFuncimage/color.gray16Model  '   �		$pkg.Black = new Gray16.ptr(0);
Blackimage/color.Blackimage/color.Gray16  +   �		$pkg.White = new Gray16.ptr(65535);
Whiteimage/color.Gray16image/color.White  .   �		$pkg.Transparent = new Alpha16.ptr(0);
Transparentimage/color.Alpha16image/color.Transparent  -   �		$pkg.Opaque = new Alpha16.ptr(65535);
Opaqueimage/color.Alpha16image/color.Opaque  0  >N		$pkg.YCbCrModel = ModelFunc(yCbCrModel);
image/color.ModelFuncimage/color.YCbCrModelimage/color.yCbCrModel  4  D			$pkg.NYCbCrAModel = ModelFunc(nYCbCrAModel);
image/color.ModelFuncimage/color.NYCbCrAModelimage/color.nYCbCrAModel  .  KU		$pkg.CMYKModel = ModelFunc(cmykModel);
image/color.CMYKModelimage/color.ModelFuncimage/color.cmykModel (image/color.RGBA).RGBA ��	RGBA.ptr.prototype.RGBA = function() {
		var a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  ,		r = ((c.R >>> 0));
  =		r = (r | ((r << 8 >>> 0))) >>> 0;
  J		g = ((c.G >>> 0));
  [		g = (g | ((g << 8 >>> 0))) >>> 0;
  h		b = ((c.B >>> 0));
  y		b = (b | ((b << 8 >>> 0))) >>> 0;
  �		a = ((c.A >>> 0));
  �		a = (a | ((a << 8 >>> 0))) >>> 0;
  �		return [r, g, b, a];
    	};
	RGBA.prototype.RGBA = function() { return this.$val.RGBA(); };
RGBAimage/color.RGBA (image/color.RGBA64).RGBA ��	RGBA64.ptr.prototype.RGBA = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
    		_tmp = ((c.R >>> 0));
		_tmp$1 = ((c.G >>> 0));
		_tmp$2 = ((c.B >>> 0));
		_tmp$3 = ((c.A >>> 0));
		r = _tmp;
		g = _tmp$1;
		b = _tmp$2;
		a = _tmp$3;
		return [r, g, b, a];
    	};
	RGBA64.prototype.RGBA = function() { return this.$val.RGBA(); };
RGBA64image/color.RGBA64 (image/color.NRGBA).RGBA �	NRGBA.ptr.prototype.RGBA = function() {
		var _q, _q$1, _q$2, a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  �		r = ((c.R >>> 0));
  �		r = (r | ((r << 8 >>> 0))) >>> 0;
  �		r = $imul(r, (((c.A >>> 0)))) >>> 0;
  �		r = (_q = r / (255), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		g = ((c.G >>> 0));
  		g = (g | ((g << 8 >>> 0))) >>> 0;
  		g = $imul(g, (((c.A >>> 0)))) >>> 0;
  %		g = (_q$1 = g / (255), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  0		b = ((c.B >>> 0));
  A		b = (b | ((b << 8 >>> 0))) >>> 0;
  N		b = $imul(b, (((c.A >>> 0)))) >>> 0;
  `		b = (_q$2 = b / (255), (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  k		a = ((c.A >>> 0));
  |		a = (a | ((a << 8 >>> 0))) >>> 0;
  �		return [r, g, b, a];
    	};
	NRGBA.prototype.RGBA = function() { return this.$val.RGBA(); };
NRGBAimage/color.NRGBA (image/color.NRGBA64).RGBA �u	NRGBA64.ptr.prototype.RGBA = function() {
		var _q, _q$1, _q$2, a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  f		r = ((c.R >>> 0));
  w		r = $imul(r, (((c.A >>> 0)))) >>> 0;
  �		r = (_q = r / (65535), (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		g = ((c.G >>> 0));
  �		g = $imul(g, (((c.A >>> 0)))) >>> 0;
  �		g = (_q$1 = g / (65535), (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		b = ((c.B >>> 0));
  �		b = $imul(b, (((c.A >>> 0)))) >>> 0;
  �		b = (_q$2 = b / (65535), (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		a = ((c.A >>> 0));
  			return [r, g, b, a];
    	};
	NRGBA64.prototype.RGBA = function() { return this.$val.RGBA(); };
NRGBA64image/color.NRGBA64 (image/color.Alpha).RGBA ��	Alpha.ptr.prototype.RGBA = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  	�		a = ((c.A >>> 0));
  	�		a = (a | ((a << 8 >>> 0))) >>> 0;
    		_tmp = a;
		_tmp$1 = a;
		_tmp$2 = a;
		_tmp$3 = a;
		r = _tmp;
		g = _tmp$1;
		b = _tmp$2;
		a = _tmp$3;
		return [r, g, b, a];
    	};
	Alpha.prototype.RGBA = function() { return this.$val.RGBA(); };
Alphaimage/color.Alpha (image/color.Alpha16).RGBA �|	Alpha16.ptr.prototype.RGBA = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, c, g, r;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  
9		a = ((c.A >>> 0));
    		_tmp = a;
		_tmp$1 = a;
		_tmp$2 = a;
		_tmp$3 = a;
		r = _tmp;
		g = _tmp$1;
		b = _tmp$2;
		a = _tmp$3;
		return [r, g, b, a];
    	};
	Alpha16.prototype.RGBA = function() { return this.$val.RGBA(); };
Alpha16image/color.Alpha16 (image/color.Gray).RGBA ��	Gray.ptr.prototype.RGBA = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, c, g, r, y;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  
�		y = ((c.Y >>> 0));
  
�		y = (y | ((y << 8 >>> 0))) >>> 0;
    		_tmp = y;
		_tmp$1 = y;
		_tmp$2 = y;
		_tmp$3 = 65535;
		r = _tmp;
		g = _tmp$1;
		b = _tmp$2;
		a = _tmp$3;
		return [r, g, b, a];
    	};
	Gray.prototype.RGBA = function() { return this.$val.RGBA(); };
Grayimage/color.Gray (image/color.Gray16).RGBA ��	Gray16.ptr.prototype.RGBA = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, a, b, c, g, r, y;
		r = 0;
		g = 0;
		b = 0;
		a = 0;
		c = this;
  �		y = ((c.Y >>> 0));
    		_tmp = y;
		_tmp$1 = y;
		_tmp$2 = y;
		_tmp$3 = 65535;
		r = _tmp;
		g = _tmp$1;
		b = _tmp$2;
		a = _tmp$3;
		return [r, g, b, a];
    	};
	Gray16.prototype.RGBA = function() { return this.$val.RGBA(); };
Gray16image/color.Gray16 image/color.ModelFuncimage/color	ModelFunc 	ModelFuncn	ModelFunc = function(f) {
		var f;
  �		return new modelFunc.ptr(f);
    	};
	$pkg.ModelFunc = ModelFunc;
	ModelFuncimage/color.ModelFuncimage/color.modelFunc  (*image/color.modelFunc).Convert ��	modelFunc.ptr.prototype.Convert = function(c) {
		var $24r, _r, c, m, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; m = $f.m; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  		_r = m.f(c); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: modelFunc.ptr.prototype.Convert }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.m = m; $f.$s = $s; $f.$r = $r; return $f;
	};
	modelFunc.prototype.Convert = function(c) { return this.$val.Convert(c); };
	modelFuncimage/color.modelFunc image/color.rgbaModelimage/color	rgbaModel 	rgbaModel��	rgbaModel = function(c) {
		var _r, _tuple, _tuple$1, a, b, c, g, ok, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = $assertType(c, RGBA, true);
		ok = _tuple[1];
    		if (ok) {
   			$s = -1; return c;
    		}
  		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
		a = _tuple$1[3];
  %		$s = -1; return (x = new RGBA.ptr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)), (((a >>> 8 >>> 0) << 24 >>> 24))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: rgbaModel }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	rgbaModelimage/color.RGBAimage/color.rgbaModel image/color.rgba64Modelimage/colorrgba64Model rgba64Model�i	rgba64Model = function(c) {
		var _r, _tuple, _tuple$1, a, b, c, g, ok, r, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = $assertType(c, RGBA64, true);
		ok = _tuple[1];
    		if (ok) {
  �			$s = -1; return c;
    		}
  �		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
		a = _tuple$1[3];
  �		$s = -1; return (x = new RGBA64.ptr(((r << 16 >>> 16)), ((g << 16 >>> 16)), ((b << 16 >>> 16)), ((a << 16 >>> 16))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: rgba64Model }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
rgba64Modelimage/color.RGBA64image/color.rgba64Model image/color.nrgbaModelimage/color
nrgbaModel 
nrgbaModel�s	nrgbaModel = function(c) {
		var _q, _q$1, _q$2, _r, _tuple, _tuple$1, a, b, c, g, ok, r, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  9		_tuple = $assertType(c, NRGBA, true);
		ok = _tuple[1];
    		if (ok) {
  T			$s = -1; return c;
    		}
  a		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
		a = _tuple$1[3];
    		if (a === 65535) {
  �			$s = -1; return (x = new NRGBA.ptr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)), 255), new x.constructor.elem(x));
    		}
    		if (a === 0) {
  �			$s = -1; return (x$1 = new NRGBA.ptr(0, 0, 0, 0), new x$1.constructor.elem(x$1));
    		}
  a		r = (_q = (($imul(r, 65535) >>> 0)) / a, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  w		g = (_q$1 = (($imul(g, 65535) >>> 0)) / a, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		b = (_q$2 = (($imul(b, 65535) >>> 0)) / a, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  �		$s = -1; return (x$2 = new NRGBA.ptr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)), (((a >>> 8 >>> 0) << 24 >>> 24))), new x$2.constructor.elem(x$2));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: nrgbaModel }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};

nrgbaModelimage/color.NRGBAimage/color.nrgbaModel image/color.nrgba64Modelimage/colornrgba64Model nrgba64Model�	nrgba64Model = function(c) {
		var _q, _q$1, _q$2, _r, _tuple, _tuple$1, a, b, c, g, ok, r, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		_tuple = $assertType(c, NRGBA64, true);
		ok = _tuple[1];
    		if (ok) {
  3			$s = -1; return c;
    		}
  @		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
		a = _tuple$1[3];
    		if (a === 65535) {
  k			$s = -1; return (x = new NRGBA64.ptr(((r << 16 >>> 16)), ((g << 16 >>> 16)), ((b << 16 >>> 16)), 65535), new x.constructor.elem(x));
    		}
    		if (a === 0) {
  �			$s = -1; return (x$1 = new NRGBA64.ptr(0, 0, 0, 0), new x$1.constructor.elem(x$1));
    		}
  :		r = (_q = (($imul(r, 65535) >>> 0)) / a, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  P		g = (_q$1 = (($imul(g, 65535) >>> 0)) / a, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  f		b = (_q$2 = (($imul(b, 65535) >>> 0)) / a, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  |		$s = -1; return (x$2 = new NRGBA64.ptr(((r << 16 >>> 16)), ((g << 16 >>> 16)), ((b << 16 >>> 16)), ((a << 16 >>> 16))), new x$2.constructor.elem(x$2));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: nrgba64Model }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
nrgba64Modelimage/color.NRGBA64image/color.nrgba64Model image/color.alphaModelimage/color
alphaModel 
alphaModel��	alphaModel = function(c) {
		var _r, _tuple, _tuple$1, a, c, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; c = $f.c; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = $assertType(c, Alpha, true);
		ok = _tuple[1];
    		if (ok) {
  �			$s = -1; return c;
    		}
  		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		a = _tuple$1[3];
  		$s = -1; return (x = new Alpha.ptr((((a >>> 8 >>> 0) << 24 >>> 24))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: alphaModel }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.c = c; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};

alphaModelimage/color.Alphaimage/color.alphaModel image/color.alpha16Modelimage/coloralpha16Model alpha16Model��	alpha16Model = function(c) {
		var _r, _tuple, _tuple$1, a, c, ok, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; c = $f.c; ok = $f.ok; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  e		_tuple = $assertType(c, Alpha16, true);
		ok = _tuple[1];
    		if (ok) {
  �			$s = -1; return c;
    		}
  �		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		a = _tuple$1[3];
  �		$s = -1; return (x = new Alpha16.ptr(((a << 16 >>> 16))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: alpha16Model }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.c = c; $f.ok = ok; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
alpha16Modelimage/color.Alpha16image/color.alpha16Model image/color.grayModelimage/color	grayModel 	grayModel��	grayModel = function(c) {
		var _r, _tuple, _tuple$1, b, c, g, ok, r, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = $assertType(c, Gray, true);
		ok = _tuple[1];
    		if (ok) {
  			$s = -1; return c;
    		}
  		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
  �		y = ((((($imul(19595, r) >>> 0) + ($imul(38470, g) >>> 0) >>> 0) + ($imul(7471, b) >>> 0) >>> 0) + 32768 >>> 0)) >>> 24 >>> 0;
  �		$s = -1; return (x = new Gray.ptr(((y << 24 >>> 24))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: grayModel }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
	grayModelimage/color.Grayimage/color.grayModel image/color.gray16Modelimage/colorgray16Model gray16Model��	gray16Model = function(c) {
		var _r, _tuple, _tuple$1, b, c, g, ok, r, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_tuple = $assertType(c, Gray16, true);
		ok = _tuple[1];
    		if (ok) {
  			$s = -1; return c;
    		}
  (		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
  		y = ((((($imul(19595, r) >>> 0) + ($imul(38470, g) >>> 0) >>> 0) + ($imul(7471, b) >>> 0) >>> 0) + 32768 >>> 0)) >>> 16 >>> 0;
  M		$s = -1; return (x = new Gray16.ptr(((y << 16 >>> 16))), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: gray16Model }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
gray16Modelimage/color.Gray16image/color.gray16Model (image/color.Palette).Convert ��	Palette.prototype.Convert = function(c) {
		var $24r, _r, c, p, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; c = $f.c; p = $f.p; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
    		if (p.$length === 0) {
  ,			$s = -1; return $ifaceNil;
    		}
  ;		_r = p.Index(c); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = (x = _r, ((x < 0 || x >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x]));
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Palette.prototype.Convert }; } $f.$24r = $24r; $f._r = _r; $f.c = c; $f.p = p; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(Palette).prototype.Convert = function(c) { return this.$get().Convert(c); };
Paletteimage/color.Palette (image/color.Palette).Index �	�	Palette.prototype.Index = function(c) {
		var _i, _r, _r$1, _ref, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, bestSum, c, ca, cb, cg, cr, i, p, ret, sum, v, va, vb, vg, vr, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; bestSum = $f.bestSum; c = $f.c; ca = $f.ca; cb = $f.cb; cg = $f.cg; cr = $f.cr; i = $f.i; p = $f.p; ret = $f.ret; sum = $f.sum; v = $f.v; va = $f.va; vb = $f.vb; vg = $f.vg; vr = $f.vr; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		cr = _tuple[0];
		cg = _tuple[1];
		cb = _tuple[2];
		ca = _tuple[3];
  5		_tmp = 0;
		_tmp$1 = 4294967295;
		ret = _tmp;
		bestSum = _tmp$1;
  Y		_ref = p;
		_i = 0;
		/* while (true) { */ case 2:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 3; continue; }
			i = _i;
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  q			_r$1 = v.RGBA(); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			vr = _tuple$1[0];
			vg = _tuple$1[1];
			vb = _tuple$1[2];
			va = _tuple$1[3];
  �			sum = ((sqDiff(cr, vr) + sqDiff(cg, vg) >>> 0) + sqDiff(cb, vb) >>> 0) + sqDiff(ca, va) >>> 0;
    			if (sum < bestSum) {
    				if (sum === 0) {
  					$s = -1; return i;
    				}
  				_tmp$2 = i;
				_tmp$3 = sum;
				ret = _tmp$2;
				bestSum = _tmp$3;
    			}
    			_i++;
		$s = 2; continue;
		case 3:
  0		$s = -1; return ret;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Palette.prototype.Index }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.bestSum = bestSum; $f.c = c; $f.ca = ca; $f.cb = cb; $f.cg = cg; $f.cr = cr; $f.i = i; $f.p = p; $f.ret = ret; $f.sum = sum; $f.v = v; $f.va = va; $f.vb = vb; $f.vg = vg; $f.vr = vr; $f.$s = $s; $f.$r = $r; return $f;
	};
	$ptrType(Palette).prototype.Index = function(c) { return this.$get().Index(c); };
Paletteimage/color.Paletteimage/color.sqDiff image/color.sqDiffimage/colorsqDiff sqDiff|	sqDiff = function(x, y) {
		var d, x, y;
   O		d = x - y >>> 0;
   [		return (($imul(d, d) >>> 0)) >>> 2 >>> 0;
    	};
sqDiffimage/color.sqDiff image/color.RGBToYCbCrimage/color
RGBToYCbCr 
RGBToYCbCr��	RGBToYCbCr = function(r, g, b) {
		var b, b1, cb, cr, g, g1, r, r1, yy;
  #		r1 = ((r >> 0));
  #		g1 = ((g >> 0));
  #,		b1 = ((b >> 0));
  #�		yy = ((((($imul(19595, r1)) + ($imul(38470, g1)) >> 0) + ($imul(7471, b1)) >> 0) + 32768 >> 0)) >> 16 >> 0;
  %�		cb = ((($imul(-11056, r1)) - ($imul(21712, g1)) >> 0) + ($imul(32768, b1)) >> 0) + 8421376 >> 0;
    		if (((((cb >>> 0)) & 4278190080) >>> 0) === 0) {
  %�			cb = (cb >> $min((16), 31)) >> 0;
    		} else {
  %�			cb = ~((cb >> 31 >> 0)) >> 0;
    		}
  &3		cr = ((($imul(32768, r1)) - ($imul(27440, g1)) >> 0) - ($imul(5328, b1)) >> 0) + 8421376 >> 0;
    		if (((((cr >>> 0)) & 4278190080) >>> 0) === 0) {
  &�			cr = (cr >> $min((16), 31)) >> 0;
    		} else {
  &�			cr = ~((cr >> 31 >> 0)) >> 0;
    		}
  &�		return [((yy << 24 >>> 24)), ((cb << 24 >>> 24)), ((cr << 24 >>> 24))];
    	};
	$pkg.RGBToYCbCr = RGBToYCbCr;

RGBToYCbCrimage/color.RGBToYCbCr image/color.YCbCrToRGBimage/color
YCbCrToRGB 
YCbCrToRGB��	YCbCrToRGB = function(y, cb, cr) {
		var b, cb, cb1, cr, cr1, g, r, y, yy1;
  2u		yy1 = $imul(((y >> 0)), 65793);
  2�		cb1 = ((cb >> 0)) - 128 >> 0;
  2�		cr1 = ((cr >> 0)) - 128 >> 0;
  46		r = yy1 + ($imul(91881, cr1)) >> 0;
    		if (((((r >>> 0)) & 4278190080) >>> 0) === 0) {
  4m			r = (r >> $min((16), 31)) >> 0;
    		} else {
  4�			r = ~((r >> 31 >> 0)) >> 0;
    		}
  4�		g = (yy1 - ($imul(22554, cb1)) >> 0) - ($imul(46802, cr1)) >> 0;
    		if (((((g >>> 0)) & 4278190080) >>> 0) === 0) {
  4�			g = (g >> $min((16), 31)) >> 0;
    		} else {
  4�			g = ~((g >> 31 >> 0)) >> 0;
    		}
  5		b = yy1 + ($imul(116130, cb1)) >> 0;
    		if (((((b >>> 0)) & 4278190080) >>> 0) === 0) {
  5:			b = (b >> $min((16), 31)) >> 0;
    		} else {
  5O			b = ~((b >> 31 >> 0)) >> 0;
    		}
  5c		return [((r << 24 >>> 24)), ((g << 24 >>> 24)), ((b << 24 >>> 24))];
    	};
	$pkg.YCbCrToRGB = YCbCrToRGB;

YCbCrToRGBimage/color.YCbCrToRGB (image/color.YCbCr).RGBA ��	YCbCr.ptr.prototype.RGBA = function() {
		var b, c, cb1, cr1, g, r, yy1;
		c = this;
  ;F		yy1 = $imul(((c.Y >> 0)), 65793);
  ;c		cb1 = ((c.Cb >> 0)) - 128 >> 0;
  ;}		cr1 = ((c.Cr >> 0)) - 128 >> 0;
  <�		r = yy1 + ($imul(91881, cr1)) >> 0;
    		if (((((r >>> 0)) & 4278190080) >>> 0) === 0) {
  <�			r = (r >> $min((8), 31)) >> 0;
    		} else {
  <�			r = (~((r >> 31 >> 0)) >> 0) & 65535;
    		}
  =		g = (yy1 - ($imul(22554, cb1)) >> 0) - ($imul(46802, cr1)) >> 0;
    		if (((((g >>> 0)) & 4278190080) >>> 0) === 0) {
  =P			g = (g >> $min((8), 31)) >> 0;
    		} else {
  =d			g = (~((g >> 31 >> 0)) >> 0) & 65535;
    		}
  =�		b = yy1 + ($imul(116130, cb1)) >> 0;
    		if (((((b >>> 0)) & 4278190080) >>> 0) === 0) {
  =�			b = (b >> $min((8), 31)) >> 0;
    		} else {
  =�			b = (~((b >> 31 >> 0)) >> 0) & 65535;
    		}
  =�		return [((r >>> 0)), ((g >>> 0)), ((b >>> 0)), 65535];
    	};
	YCbCr.prototype.RGBA = function() { return this.$val.RGBA(); };
YCbCrimage/color.YCbCr image/color.yCbCrModelimage/color
yCbCrModel 
yCbCrModel�0	yCbCrModel = function(c) {
		var _r, _tuple, _tuple$1, _tuple$2, b, c, g, ok, r, u, v, x, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; b = $f.b; c = $f.c; g = $f.g; ok = $f.ok; r = $f.r; u = $f.u; v = $f.v; x = $f.x; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  >�		_tuple = $assertType(c, YCbCr, true);
		ok = _tuple[1];
    		if (ok) {
  >�			$s = -1; return c;
    		}
  >�		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
  >�		_tuple$2 = RGBToYCbCr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)));
		y = _tuple$2[0];
		u = _tuple$2[1];
		v = _tuple$2[2];
  ?		$s = -1; return (x = new YCbCr.ptr(y, u, v), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: yCbCrModel }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.b = b; $f.c = c; $f.g = g; $f.ok = ok; $f.r = r; $f.u = u; $f.v = v; $f.x = x; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};

yCbCrModelimage/color.RGBToYCbCrimage/color.YCbCrimage/color.yCbCrModel (image/color.NYCbCrA).RGBA ��	NYCbCrA.ptr.prototype.RGBA = function() {
		var _q, _q$1, _q$2, a, b, c, cb1, cr1, g, r, yy1;
		c = this;
  @g		yy1 = $imul(((c.YCbCr.Y >> 0)), 65793);
  @�		cb1 = ((c.YCbCr.Cb >> 0)) - 128 >> 0;
  @�		cr1 = ((c.YCbCr.Cr >> 0)) - 128 >> 0;
  A�		r = yy1 + ($imul(91881, cr1)) >> 0;
    		if (((((r >>> 0)) & 4278190080) >>> 0) === 0) {
  A�			r = (r >> $min((8), 31)) >> 0;
    		} else {
  B			r = (~((r >> 31 >> 0)) >> 0) & 65535;
    		}
  B.		g = (yy1 - ($imul(22554, cb1)) >> 0) - ($imul(46802, cr1)) >> 0;
    		if (((((g >>> 0)) & 4278190080) >>> 0) === 0) {
  Bq			g = (g >> $min((8), 31)) >> 0;
    		} else {
  B�			g = (~((g >> 31 >> 0)) >> 0) & 65535;
    		}
  B�		b = yy1 + ($imul(116130, cb1)) >> 0;
    		if (((((b >>> 0)) & 4278190080) >>> 0) === 0) {
  B�			b = (b >> $min((8), 31)) >> 0;
    		} else {
  B�			b = (~((b >> 31 >> 0)) >> 0) & 65535;
    		}
  CA		a = $imul(((c.A >>> 0)), 257) >>> 0;
  C[		return [(_q = ($imul(((r >>> 0)), a) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero")), (_q$1 = ($imul(((g >>> 0)), a) >>> 0) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero")), (_q$2 = ($imul(((b >>> 0)), a) >>> 0) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero")), a];
    	};
	NYCbCrA.prototype.RGBA = function() { return this.$val.RGBA(); };
NYCbCrAimage/color.NYCbCrA image/color.nYCbCrAModelimage/colornYCbCrAModel nYCbCrAModel�	!	nYCbCrAModel = function(c) {
		var _q, _q$1, _q$2, _r, _ref, _tuple, _tuple$1, a, b, c, c$1, c$2, g, r, u, v, x, x$1, y, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _q$1 = $f._q$1; _q$2 = $f._q$2; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; a = $f.a; b = $f.b; c = $f.c; c$1 = $f.c$1; c$2 = $f.c$2; g = $f.g; r = $f.r; u = $f.u; v = $f.v; x = $f.x; x$1 = $f.x$1; y = $f.y; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  D[		_ref = c;
    		if ($assertType(_ref, NYCbCrA, true)[1]) {
    			c$1 = $clone(_ref.$val, NYCbCrA);
  D�			$s = -1; return new c$1.constructor.elem(c$1);
    		} else if ($assertType(_ref, YCbCr, true)[1]) {
    			c$2 = $clone(_ref.$val, YCbCr);
  D�			$s = -1; return (x = new NYCbCrA.ptr($clone(c$2, YCbCr), 255), new x.constructor.elem(x));
    		}
  D�		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r = _tuple[0];
		g = _tuple[1];
		b = _tuple[2];
		a = _tuple[3];
    		if (!((a === 0))) {
  E			r = (_q = (($imul(r, 65535) >>> 0)) / a, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  E6			g = (_q$1 = (($imul(g, 65535) >>> 0)) / a, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  EM			b = (_q$2 = (($imul(b, 65535) >>> 0)) / a, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
    		}
  Eg		_tuple$1 = RGBToYCbCr((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)));
		y = _tuple$1[0];
		u = _tuple$1[1];
		v = _tuple$1[2];
  E�		$s = -1; return (x$1 = new NYCbCrA.ptr(new YCbCr.ptr(y, u, v), (((a >>> 8 >>> 0) << 24 >>> 24))), new x$1.constructor.elem(x$1));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: nYCbCrAModel }; } $f._q = _q; $f._q$1 = _q$1; $f._q$2 = _q$2; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.a = a; $f.b = b; $f.c = c; $f.c$1 = c$1; $f.c$2 = c$2; $f.g = g; $f.r = r; $f.u = u; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.y = y; $f.$s = $s; $f.$r = $r; return $f;
	};
nYCbCrAModelimage/color.NYCbCrAimage/color.RGBToYCbCrimage/color.YCbCrimage/color.nYCbCrAModel image/color.RGBToCMYKimage/color	RGBToCMYK 	RGBToCMYK��	RGBToCMYK = function(r, g, b) {
		var _q, _q$1, _q$2, b, bb, c, g, gg, m, r, rr, w, y;
  FX		rr = ((r >>> 0));
  Fi		gg = ((g >>> 0));
  Fz		bb = ((b >>> 0));
  F�		w = rr;
    		if (w < gg) {
  F�			w = gg;
    		}
    		if (w < bb) {
  F�			w = bb;
    		}
    		if (w === 0) {
  F�			return [0, 0, 0, 255];
    		}
  F�		c = (_q = ($imul(((w - rr >>> 0)), 255) >>> 0) / w, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  G		m = (_q$1 = ($imul(((w - gg >>> 0)), 255) >>> 0) / w, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  G!		y = (_q$2 = ($imul(((w - bb >>> 0)), 255) >>> 0) / w, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  G;		return [((c << 24 >>> 24)), ((m << 24 >>> 24)), ((y << 24 >>> 24)), (((255 - w >>> 0) << 24 >>> 24))];
    	};
	$pkg.RGBToCMYK = RGBToCMYK;
	RGBToCMYKimage/color.RGBToCMYK image/color.CMYKToRGBimage/color	CMYKToRGB 	CMYKToRGB��	CMYKToRGB = function(c, m, y, k) {
		var _q, _q$1, _q$2, b, c, g, k, m, r, w, y;
  G�		w = 65535 - ($imul(((k >>> 0)), 257) >>> 0) >>> 0;
  H		r = (_q = ($imul(((65535 - ($imul(((c >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  H3		g = (_q$1 = ($imul(((65535 - ($imul(((m >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  Ha		b = (_q$2 = ($imul(((65535 - ($imul(((y >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  H�		return [(((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24))];
    	};
	$pkg.CMYKToRGB = CMYKToRGB;
	CMYKToRGBimage/color.CMYKToRGB (image/color.CMYK).RGBA �e	CMYK.ptr.prototype.RGBA = function() {
		var _q, _q$1, _q$2, b, c, g, r, w;
		c = this;
  J[		w = 65535 - ($imul(((c.K >>> 0)), 257) >>> 0) >>> 0;
  J|		r = (_q = ($imul(((65535 - ($imul(((c.C >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
  J�		g = (_q$1 = ($imul(((65535 - ($imul(((c.M >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q$1 === _q$1 && _q$1 !== 1/0 && _q$1 !== -1/0) ? _q$1 >>> 0 : $throwRuntimeError("integer divide by zero"));
  J�		b = (_q$2 = ($imul(((65535 - ($imul(((c.Y >>> 0)), 257) >>> 0) >>> 0)), w) >>> 0) / 65535, (_q$2 === _q$2 && _q$2 !== 1/0 && _q$2 !== -1/0) ? _q$2 >>> 0 : $throwRuntimeError("integer divide by zero"));
  K		return [r, g, b, 65535];
    	};
	CMYK.prototype.RGBA = function() { return this.$val.RGBA(); };
CMYKimage/color.CMYK image/color.cmykModelimage/color	cmykModel 	cmykModel�t	cmykModel = function(c) {
		var _r, _tuple, _tuple$1, _tuple$2, b, c, cc, g, kk, mm, ok, r, x, yy, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; b = $f.b; c = $f.c; cc = $f.cc; g = $f.g; kk = $f.kk; mm = $f.mm; ok = $f.ok; r = $f.r; x = $f.x; yy = $f.yy; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  K�		_tuple = $assertType(c, CMYK, true);
		ok = _tuple[1];
    		if (ok) {
  K�			$s = -1; return c;
    		}
  K�		_r = c.RGBA(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		r = _tuple$1[0];
		g = _tuple$1[1];
		b = _tuple$1[2];
  K�		_tuple$2 = RGBToCMYK((((r >>> 8 >>> 0) << 24 >>> 24)), (((g >>> 8 >>> 0) << 24 >>> 24)), (((b >>> 8 >>> 0) << 24 >>> 24)));
		cc = _tuple$2[0];
		mm = _tuple$2[1];
		yy = _tuple$2[2];
		kk = _tuple$2[3];
  L$		$s = -1; return (x = new CMYK.ptr(cc, mm, yy, kk), new x.constructor.elem(x));
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cmykModel }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.b = b; $f.c = c; $f.cc = cc; $f.g = g; $f.kk = kk; $f.mm = mm; $f.ok = ok; $f.r = r; $f.x = x; $f.yy = yy; $f.$s = $s; $f.$r = $r; return $f;
	};
	cmykModelimage/color.CMYKimage/color.RGBToCMYKimage/color.cmykModel �{"Base":19523,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/image/color/color.go","Base":1,"Size":8445,"Lines":[0,55,109,159,160,211,225,226,303,335,358,433,509,585,599,603,678,715,743,745,746,822,870,873,950,983,1002,1020,1022,1023,1066,1083,1096,1113,1126,1143,1156,1173,1186,1194,1196,1197,1273,1312,1315,1392,1425,1446,1465,1467,1468,1513,1572,1574,1575,1635,1655,1673,1675,1676,1720,1737,1750,1768,1779,1796,1809,1827,1838,1855,1868,1886,1897,1914,1927,1935,1937,1938,2000,2058,2080,2099,2101,2102,2148,2165,2183,2196,2213,2231,2244,2261,2279,2292,2309,2317,2319,2320,2362,2382,2391,2393,2394,2438,2455,2468,2487,2489,2490,2534,2556,2566,2568,2569,2615,2632,2651,2653,2654,2699,2718,2727,2729,2730,2773,2791,2804,2828,2830,2831,2878,2899,2909,2911,2912,2957,2975,2999,3001,3002,3081,3098,3121,3145,3147,3148,3221,3265,3314,3363,3412,3462,3492,3514,3516,3517,3541,3562,3564,3565,3610,3625,3627,3628,3668,3674,3717,3762,3806,3852,3896,3942,3985,4030,4032,4033,4065,4093,4104,4107,4131,4204,4206,4207,4241,4271,4282,4285,4309,4368,4370,4371,4404,4433,4444,4447,4471,4489,4555,4558,4571,4598,4601,4703,4725,4747,4769,4843,4845,4846,4881,4912,4923,4926,4950,4968,5026,5029,5042,5071,5074,5176,5198,5220,5242,5302,5304,5305,5338,5367,5378,5381,5405,5434,5436,5437,5472,5503,5514,5517,5541,5568,5570,5571,5603,5631,5642,5645,5669,5670,5745,5821,5835,5839,5888,5892,5965,6028,6077,6078,6101,6103,6104,6138,6168,6179,6182,6206,6207,6282,6358,6372,6376,6425,6474,6475,6501,6503,6504,6539,6560,6561,6637,6679,6697,6710,6713,6735,6737,6738,6812,6830,6868,6934,6935,6963,6999,7022,7051,7126,7147,7164,7177,7182,7207,7211,7214,7226,7228,7229,7303,7352,7355,7415,7449,7507,7511,7528,7543,7558,7571,7586,7592,7616,7620,7694,7754,7758,7828,7895,7969,8040,8056,8060,8128,8201,8269,8281,8302,8304,8305,8325,8331,8356,8386,8412,8443],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/image/color/ycbcr.go","Base":8447,"Size":11075,"Lines":[0,55,109,159,160,174,175,232,287,320,361,408,455,523,524,540,556,572,573,602,606,655,708,709,754,758,818,834,849,875,898,904,908,951,1005,1051,1108,1112,1159,1208,1241,1253,1263,1282,1285,1286,1331,1378,1411,1423,1433,1452,1455,1456,1496,1498,1499,1556,1613,1646,1676,1725,1755,1823,1827,1902,1977,2045,2098,2151,2204,2257,2261,2338,2413,2487,2561,2635,2710,2778,2852,2856,2925,2960,3016,3072,3128,3132,3209,3285,3361,3438,3489,3493,3570,3646,3715,3787,3862,3939,3968,3972,4048,4065,4082,4099,4170,4215,4219,4295,4369,4397,4425,4446,4469,4496,4520,4544,4545,4590,4594,4627,4642,4656,4681,4703,4709,4713,4756,4810,4856,4918,4940,4972,4983,4993,5010,5013,5014,5048,5080,5091,5101,5118,5121,5122,5145,5177,5188,5198,5215,5218,5219,5256,5258,5259,5338,5377,5380,5454,5529,5607,5660,5663,5742,5817,5890,5910,5927,5929,5930,5987,6060,6137,6213,6281,6338,6342,6370,6409,6452,6503,6557,6610,6663,6675,6700,6725,6726,6755,6781,6807,6808,6853,6857,6889,6904,6918,6943,6962,6968,6972,7015,7077,7099,7131,7141,7151,7177,7180,7181,7215,7247,7257,7267,7293,7296,7297,7320,7352,7362,7372,7398,7401,7402,7450,7452,7453,7499,7544,7545,7578,7607,7618,7621,7645,7707,7730,7732,7733,7813,7878,7900,7907,7916,7918,7919,7978,8039,8068,8094,8120,8121,8166,8170,8202,8217,8231,8256,8275,8281,8285,8328,8390,8412,8444,8454,8464,8490,8493,8494,8528,8560,8570,8580,8606,8609,8610,8633,8665,8675,8685,8711,8714,8715,8769,8795,8877,8879,8880,8955,8966,9015,9016,9051,9075,9090,9101,9114,9140,9143,9167,9168,9233,9246,9269,9292,9315,9318,9319,9381,9439,9441,9442,9499,9560,9577,9594,9611,9620,9633,9642,9645,9658,9667,9670,9683,9706,9709,9735,9761,9787,9841,9843,9844,9901,9958,9989,10035,10081,10127,10179,10181,10182,10260,10290,10293,10352,10371,10389,10391,10392,10448,10520,10586,10587,10620,10668,10716,10764,10788,10790,10791,10834,10877,10878,10910,10938,10949,10952,10976,11044,11073],"Infos":null}]}
 