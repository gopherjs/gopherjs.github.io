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
GoLinkname�� Implementation�� 	Reference��   �|���
math/cmplxcmplxmath	math/bits�i ��x rθycmplxAbsAcosAcoshAsinAsinhAtanAtanhConjCosCoshCotExpInfIsInfIsNaNLogLog10NaNPhasePolarPowRectSinSinhSqrtTanTanhF     F     F     F     F     F     F     F     F     F     F     F     F   F      F      F     F     F   F     F      F      F     F     F     F     F     F     
  !$,*7/B5M:X>cCnGyK�O�U�[�_�e�i�o�u�y�~���������  math	math = $packages["math"];
��    		$r = math.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
 math/cmplx.Abs
math/cmplxAbs Absd	Abs = function(x) {
		var x;
  �		return math.Hypot(x.$real, x.$imag);
    	};
	$pkg.Abs = Abs;
Abs
math.Hypotmath/cmplx.Abs math/cmplx.Asin
math/cmplxAsin Asin��	Asin = function(x) {
		var _tmp, _tmp$1, ct, im, re, w, x, x1, x2, xx;
  �		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((im === 0) && math.Abs(re) <= 1) {
  				return new $Complex128(math.Asin(re), im);
    		} else if ((re === 0) && math.Abs(im) <= 1) {
  	]			return new $Complex128(re, math.Asinh(im));
    		} else if (math.IsNaN(im)) {
    			if ((re === 0)) {
  	�				return new $Complex128(re, math.NaN());
    			} else if (math.IsInf(re, 0)) {
  	�				return new $Complex128(math.NaN(), re);
    			} else {
  
				return NaN();
    			}
    		} else if (math.IsInf(im, 0)) {
    			if (math.IsNaN(re)) {
  
l				return x;
    			} else if (math.IsInf(re, 0)) {
  
�				return new $Complex128(math.Copysign(0.7853981633974483, re), im);
    			} else {
  
�				return new $Complex128(math.Copysign(0, re), im);
    			}
    		} else if (math.IsInf(re, 0)) {
  			return new $Complex128(math.Copysign(1.5707963267948966, re), math.Copysign(re, im));
    		}
  a		ct = new $Complex128(-x.$imag, x.$real);
  �		xx = new $Complex128(x.$real * x.$real - x.$imag * x.$imag, x.$real * x.$imag + x.$imag * x.$real);
  �		x1 = new $Complex128(1 - xx.$real, -xx.$imag);
  �		x2 = Sqrt(x1);
  		w = Log(new $Complex128(ct.$real + x2.$real, ct.$imag + x2.$imag));
  		return new $Complex128(w.$imag, -w.$real);
    	};
	$pkg.Asin = Asin;
Asinmath.Abs	math.Asin
math.Asinhmath.Copysign
math.IsInf
math.IsNaNmath.NaNmath/cmplx.Asinmath/cmplx.Logmath/cmplx.NaNmath/cmplx.Sqrt math/cmplx.Asinh
math/cmplxAsinh Asinh��	Asinh = function(x) {
		var _tmp, _tmp$1, im, re, x, x$1, x1, xx;
  �		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((im === 0) && math.Abs(re) <= 1) {
  �			return new $Complex128(math.Asinh(re), im);
    		} else if ((re === 0) && math.Abs(im) <= 1) {
  6			return new $Complex128(re, math.Asin(im));
    		} else if (math.IsInf(re, 0)) {
    			if (math.IsInf(im, 0)) {
  �				return new $Complex128(re, math.Copysign(0.7853981633974483, im));
    			} else if (math.IsNaN(im)) {
  �				return x;
    			} else {
  �				return new $Complex128(re, math.Copysign(0, im));
    			}
    		} else if (math.IsNaN(re)) {
    			if ((im === 0)) {
  ^				return x;
    			} else if (math.IsInf(im, 0)) {
  �				return new $Complex128(im, re);
    			} else {
  �				return NaN();
    			}
    		} else if (math.IsInf(im, 0)) {
  �			return new $Complex128(math.Copysign(im, re), math.Copysign(1.5707963267948966, im));
    		}
  		xx = new $Complex128(x.$real * x.$real - x.$imag * x.$imag, x.$real * x.$imag + x.$imag * x.$real);
  *		x1 = new $Complex128(1 + xx.$real, xx.$imag);
  Z		return Log((x$1 = Sqrt(x1), new $Complex128(x.$real + x$1.$real, x.$imag + x$1.$imag)));
    	};
	$pkg.Asinh = Asinh;
Asinh
math.Abs	math.Asin
math.Asinhmath.Copysign
math.IsInf
math.IsNaNmath/cmplx.Asinhmath/cmplx.Logmath/cmplx.NaNmath/cmplx.Sqrt math/cmplx.Acos
math/cmplxAcos Acos��	Acos = function(x) {
		var w, x;
  2		w = Asin(x);
  @		return new $Complex128(1.5707963267948966 - w.$real, -w.$imag);
    	};
	$pkg.Acos = Acos;
Acosmath/cmplx.Acosmath/cmplx.Asin math/cmplx.Acosh
math/cmplxAcosh Acosh�e	Acosh = function(x) {
		var w, x;
    		if ((x.$real === 0 && x.$imag === 0)) {
  �			return new $Complex128(0, math.Copysign(1.5707963267948966, x.$imag));
    		}
  		w = Acos(x);
    		if (w.$imag <= 0) {
  4			return new $Complex128(-w.$imag, w.$real);
    		}
  c		return new $Complex128(w.$imag, -w.$real);
    	};
	$pkg.Acosh = Acosh;
Acoshmath.Copysignmath/cmplx.Acosmath/cmplx.Acosh math/cmplx.Atan
math/cmplxAtan Atan�H	Atan = function(x) {
		var _tmp, _tmp$1, a, b, c, im, re, t, w, x, x2;
  ?		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((im === 0)) {
  n			return new $Complex128(math.Atan(re), im);
    		} else if ((re === 0) && math.Abs(im) <= 1) {
  �			return new $Complex128(re, math.Atanh(im));
    		} else if (math.IsInf(im, 0) || math.IsInf(re, 0)) {
    			if (math.IsNaN(re)) {
   				return new $Complex128(math.NaN(), math.Copysign(0, im));
    			}
  W			return new $Complex128(math.Copysign(1.5707963267948966, re), math.Copysign(0, im));
    		} else if (math.IsNaN(re) || math.IsNaN(im)) {
  �			return NaN();
    		}
  �		x2 = x.$real * x.$real;
  �		a = 1 - x2 - x.$imag * x.$imag;
    		if (a === 0) {
  			return NaN();
    		}
  ,		t = 0.5 * math.Atan2(2 * x.$real, a);
  Q		w = reducePi(t);
  d		t = x.$imag - 1;
  u		b = x2 + t * t;
    		if (b === 0) {
  �			return NaN();
    		}
  �		t = x.$imag + 1;
  �		c = (x2 + t * t) / b;
  �		return new $Complex128(w, 0.25 * math.Log(c));
    	};
	$pkg.Atan = Atan;
Atanmath.Abs	math.Atan
math.Atan2
math.Atanhmath.Copysign
math.IsInf
math.IsNaNmath.Logmath.NaNmath/cmplx.Atanmath/cmplx.NaNmath/cmplx.reducePi math/cmplx.Atanh
math/cmplxAtanh Atanh��	Atanh = function(x) {
		var x, z;
  M		z = new $Complex128(-x.$imag, x.$real);
  {		z = Atan(z);
  �		return new $Complex128(z.$imag, -z.$real);
    	};
	$pkg.Atanh = Atanh;
Atanhmath/cmplx.Atanmath/cmplx.Atanh math/cmplx.Conj
math/cmplxConj Conjm	Conj = function(x) {
		var x;
  �		return new $Complex128(x.$real, -x.$imag);
    	};
	$pkg.Conj = Conj;
Conjmath/cmplx.Conj math/cmplx.Exp
math/cmplxExp Exp��	Exp = function(x) {
		var _tmp, _tmp$1, _tuple, c, im, r, re, s, x;
  !d		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if (math.IsInf(re, 0)) {
    			if (re > 0 && (im === 0)) {
  !�				return x;
    			} else if (math.IsInf(im, 0) || math.IsNaN(im)) {
    				if (re < 0) {
  "					return new $Complex128(0, math.Copysign(0, im));
    				} else {
  "C					return new $Complex128(math.Inf(1), math.NaN());
    				}
    			}
    		} else if (math.IsNaN(re)) {
    			if (im === 0) {
  "�				return new $Complex128(math.NaN(), im);
    			}
    		}
  "�		r = math.Exp(x.$real);
  "�		_tuple = math.Sincos(x.$imag);
		s = _tuple[0];
		c = _tuple[1];
  "�		return new $Complex128(r * c, r * s);
    	};
	$pkg.Exp = Exp;
Expmath.Copysignmath.Expmath.Inf
math.IsInf
math.IsNaNmath.NaNmath.Sincosmath/cmplx.Exp math/cmplx.IsInf
math/cmplxIsInf IsInf��	IsInf = function(x) {
		var x;
    		if (math.IsInf(x.$real, 0) || math.IsInf(x.$imag, 0)) {
  $q			return true;
    		}
  $�		return false;
    	};
	$pkg.IsInf = IsInf;
IsInf
math.IsInfmath/cmplx.IsInf math/cmplx.Inf
math/cmplxInf Inf|	Inf = function() {
		var inf;
  $�		inf = math.Inf(1);
  $�		return new $Complex128(inf, inf);
    	};
	$pkg.Inf = Inf;
Infmath.Infmath/cmplx.Inf math/cmplx.IsNaN
math/cmplxIsNaN IsNaN�	IsNaN = function(x) {
		var x;
    		if (math.IsInf(x.$real, 0) || math.IsInf(x.$imag, 0)) {
  &�			return false;
    		} else if (math.IsNaN(x.$real) || math.IsNaN(x.$imag)) {
  &�			return true;
    		}
  &�		return false;
    	};
	$pkg.IsNaN = IsNaN;
IsNaN
math.IsInf
math.IsNaNmath/cmplx.IsNaN math/cmplx.NaN
math/cmplxNaN NaN{	NaN = function() {
		var nan;
  '8		nan = math.NaN();
  'K		return new $Complex128(nan, nan);
    	};
	$pkg.NaN = NaN;
NaNmath.NaNmath/cmplx.NaN math/cmplx.Log
math/cmplxLog Logs	Log = function(x) {
		var x;
  .�		return new $Complex128(math.Log(Abs(x)), Phase(x));
    	};
	$pkg.Log = Log;
Logmath.Logmath/cmplx.Absmath/cmplx.Logmath/cmplx.Phase math/cmplx.Log10
math/cmplxLog10 Log10��	Log10 = function(x) {
		var x, z;
  /C		z = Log(x);
  /P		return new $Complex128(0.4342944819032518 * z.$real, 0.4342944819032518 * z.$imag);
    	};
	$pkg.Log10 = Log10;
Log10math/cmplx.Logmath/cmplx.Log10 math/cmplx.Phase
math/cmplxPhase Phasej	Phase = function(x) {
		var x;
  0�		return math.Atan2(x.$imag, x.$real);
    	};
	$pkg.Phase = Phase;
Phase
math.Atan2math/cmplx.Phase math/cmplx.Polar
math/cmplxPolar Polar��	Polar = function(x) {
		var $CE$B8, _tmp, _tmp$1, r, x;
		r = 0;
		$CE$B8 = 0;
    		_tmp = Abs(x);
		_tmp$1 = Phase(x);
		r = _tmp;
		$CE$B8 = _tmp$1;
		return [r, $CE$B8];
    	};
	$pkg.Polar = Polar;
Polarmath/cmplx.Absmath/cmplx.Phasemath/cmplx.Polar math/cmplx.Pow
math/cmplxPow Pow�?	Pow = function(x, y) {
		var _tmp, _tmp$1, _tuple, arg, c, i, modulus, r, r$1, s, theta, x, y;
    		if ((x.$real === 0 && x.$imag === 0)) {
    			if (IsNaN(y)) {
  9�				return NaN();
    			}
  9�			_tmp = y.$real;
			_tmp$1 = y.$imag;
			r = _tmp;
			i = _tmp$1;
    			if ((r === 0)) {
  9�				return new $Complex128(1, 0);
    			} else if (r < 0) {
    				if (i === 0) {
  :					return new $Complex128(math.Inf(1), 0);
    				}
  :(				return Inf();
    			} else if (r > 0) {
  :F				return new $Complex128(0, 0);
    			}
  :U			$panic(new $String("not reached"));
    		}
  :n		modulus = Abs(x);
    		if (modulus === 0) {
  :�			return new $Complex128(0, 0);
    		}
  :�		r$1 = math.Pow(modulus, y.$real);
  :�		arg = Phase(x);
  :�		theta = y.$real * arg;
    		if (!((y.$imag === 0))) {
  ;			r$1 = r$1 * (math.Exp(-y.$imag * arg));
  ;,			theta = theta + (y.$imag * math.Log(modulus));
    		}
  ;U		_tuple = math.Sincos(theta);
		s = _tuple[0];
		c = _tuple[1];
  ;q		return new $Complex128(r$1 * c, r$1 * s);
    	};
	$pkg.Pow = Pow;
Powmath.Expmath.Infmath.Logmath.Powmath.Sincosmath/cmplx.Absmath/cmplx.Infmath/cmplx.IsNaNmath/cmplx.NaNmath/cmplx.Phasemath/cmplx.Pow math/cmplx.Rect
math/cmplxRect Rect��	Rect = function(r, $CE$B8) {
		var $CE$B8, _tuple, c, r, s;
  <�		_tuple = math.Sincos($CE$B8);
		s = _tuple[0];
		c = _tuple[1];
  <�		return new $Complex128(r * c, r * s);
    	};
	$pkg.Rect = Rect;
Rectmath.Sincosmath/cmplx.Rect math/cmplx.Sin
math/cmplxSin Sin�	Sin = function(x) {
		var _tmp, _tmp$1, _tuple, _tuple$1, c, ch, im, re, s, sh, x;
  CV		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((im === 0) && (math.IsInf(re, 0) || math.IsNaN(re))) {
  C�			return new $Complex128(math.NaN(), im);
    		} else if (math.IsInf(im, 0)) {
    			if ((re === 0)) {
  D				return x;
    			} else if (math.IsInf(re, 0) || math.IsNaN(re)) {
  D<				return new $Complex128(math.NaN(), im);
    			}
    		} else if ((re === 0) && math.IsNaN(im)) {
  D�			return x;
    		}
  D�		_tuple = math.Sincos(x.$real);
		s = _tuple[0];
		c = _tuple[1];
  D�		_tuple$1 = sinhcosh(x.$imag);
		sh = _tuple$1[0];
		ch = _tuple$1[1];
  D�		return new $Complex128(s * ch, c * sh);
    	};
	$pkg.Sin = Sin;
Sin
math.IsInf
math.IsNaNmath.NaNmath.Sincosmath/cmplx.Sinmath/cmplx.sinhcosh math/cmplx.Sinh
math/cmplxSinh Sinh�8	Sinh = function(x) {
		var _tmp, _tmp$1, _tuple, _tuple$1, c, ch, im, re, s, sh, x;
  Fy		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((re === 0) && (math.IsInf(im, 0) || math.IsNaN(im))) {
  F�			return new $Complex128(re, math.NaN());
    		} else if (math.IsInf(re, 0)) {
    			if ((im === 0)) {
  G'				return new $Complex128(re, im);
    			} else if (math.IsInf(im, 0) || math.IsNaN(im)) {
  Gm				return new $Complex128(re, math.NaN());
    			}
    		} else if ((im === 0) && math.IsNaN(re)) {
  G�			return new $Complex128(math.NaN(), im);
    		}
  G�		_tuple = math.Sincos(x.$imag);
		s = _tuple[0];
		c = _tuple[1];
  G�		_tuple$1 = sinhcosh(x.$real);
		sh = _tuple$1[0];
		ch = _tuple$1[1];
  H		return new $Complex128(c * sh, s * ch);
    	};
	$pkg.Sinh = Sinh;
Sinh
math.IsInf
math.IsNaNmath.NaNmath.Sincosmath/cmplx.Sinhmath/cmplx.sinhcosh math/cmplx.Cos
math/cmplxCos Cos�w	Cos = function(x) {
		var _tmp, _tmp$1, _tuple, _tuple$1, c, ch, im, re, s, sh, x;
  I�		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((im === 0) && (math.IsInf(re, 0) || math.IsNaN(re))) {
  JF			return new $Complex128(math.NaN(), -im * math.Copysign(0, re));
    		} else if (math.IsInf(im, 0)) {
    			if ((re === 0)) {
  J�				return new $Complex128(math.Inf(1), -re * math.Copysign(0, im));
    			} else if (math.IsInf(re, 0) || math.IsNaN(re)) {
  K				return new $Complex128(math.Inf(1), math.NaN());
    			}
    		} else if ((re === 0) && math.IsNaN(im)) {
  Kf			return new $Complex128(math.NaN(), 0);
    		}
  K�		_tuple = math.Sincos(x.$real);
		s = _tuple[0];
		c = _tuple[1];
  K�		_tuple$1 = sinhcosh(x.$imag);
		sh = _tuple$1[0];
		ch = _tuple$1[1];
  K�		return new $Complex128(c * ch, -s * sh);
    	};
	$pkg.Cos = Cos;
Cosmath.Copysignmath.Inf
math.IsInf
math.IsNaNmath.NaNmath.Sincosmath/cmplx.Cosmath/cmplx.sinhcosh math/cmplx.Cosh
math/cmplxCosh Cosh�x	Cosh = function(x) {
		var _tmp, _tmp$1, _tuple, _tuple$1, c, ch, im, re, s, sh, x;
  MO		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if ((re === 0) && (math.IsInf(im, 0) || math.IsNaN(im))) {
  M�			return new $Complex128(math.NaN(), re * math.Copysign(0, im));
    		} else if (math.IsInf(re, 0)) {
    			if ((im === 0)) {
  N				return new $Complex128(math.Inf(1), im * math.Copysign(0, re));
    			} else if (math.IsInf(im, 0) || math.IsNaN(im)) {
  Nv				return new $Complex128(math.Inf(1), math.NaN());
    			}
    		} else if ((im === 0) && math.IsNaN(re)) {
  N�			return new $Complex128(math.NaN(), im);
    		}
  N�		_tuple = math.Sincos(x.$imag);
		s = _tuple[0];
		c = _tuple[1];
  O		_tuple$1 = sinhcosh(x.$real);
		sh = _tuple$1[0];
		ch = _tuple$1[1];
  O#		return new $Complex128(c * ch, s * sh);
    	};
	$pkg.Cosh = Cosh;
Coshmath.Copysignmath.Inf
math.IsInf
math.IsNaNmath.NaNmath.Sincosmath/cmplx.Coshmath/cmplx.sinhcosh math/cmplx.sinhcosh
math/cmplxsinhcosh sinhcosh��	sinhcosh = function(x) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, ch, e, ei, sh, x;
		sh = 0;
		ch = 0;
    		if (math.Abs(x) <= 0.5) {
    			_tmp = math.Sinh(x);
			_tmp$1 = math.Cosh(x);
			sh = _tmp;
			ch = _tmp$1;
			return [sh, ch];
    		}
  O�		e = math.Exp(x);
  O�		ei = 0.5 / e;
  O�		e = e * (0.5);
    		_tmp$2 = e - ei;
		_tmp$3 = e + ei;
		sh = _tmp$2;
		ch = _tmp$3;
		return [sh, ch];
    	};
sinhcoshmath.Abs	math.Coshmath.Exp	math.Sinhmath/cmplx.sinhcosh math/cmplx.Sqrt
math/cmplxSqrt Sqrt��	Sqrt = function(x) {
		var a, b, r, r$1, r$2, scale, t, x;
    		if (x.$imag === 0) {
    			if (x.$real === 0) {
  X7				return new $Complex128(0, x.$imag);
    			}
    			if (x.$real < 0) {
  Xl				return new $Complex128(0, math.Copysign(math.Sqrt(-x.$real), x.$imag));
    			}
  X�			return new $Complex128(math.Sqrt(x.$real), x.$imag);
    		} else if (math.IsInf(x.$imag, 0)) {
  Y			return new $Complex128(math.Inf(1), x.$imag);
    		}
    		if (x.$real === 0) {
    			if (x.$imag < 0) {
  YV				r = math.Sqrt(-0.5 * x.$imag);
  Yx				return new $Complex128(r, -r);
    			}
  Y�			r$1 = math.Sqrt(0.5 * x.$imag);
  Y�			return new $Complex128(r$1, r$1);
    		}
  Y�		a = x.$real;
  Y�		b = x.$imag;
  Y�		scale = 0;
    		if (math.Abs(a) > 4 || math.Abs(b) > 4) {
  Z[			a = a * (0.25);
  Zg			b = b * (0.25);
  Zs			scale = 2;
    		} else {
  Z�			a = a * (1.8014398509481984e+16);
  Z�			b = b * (1.8014398509481984e+16);
  Z�			scale = 7.450580596923828e-09;
    		}
  Z�		r$2 = math.Hypot(a, b);
  [		t = 0;
    		if (a > 0) {
  [-			t = math.Sqrt(0.5 * r$2 + 0.5 * a);
  [L			r$2 = scale * math.Abs((0.5 * b) / t);
  [n			t = t * (scale);
    		} else {
  [�			r$2 = math.Sqrt(0.5 * r$2 - 0.5 * a);
  [�			t = scale * math.Abs((0.5 * b) / r$2);
  [�			r$2 = r$2 * (scale);
    		}
    		if (b < 0) {
  [�			return new $Complex128(t, -r$2);
    		}
  [�		return new $Complex128(t, r$2);
    	};
	$pkg.Sqrt = Sqrt;
Sqrtmath.Absmath.Copysign
math.Hypotmath.Inf
math.IsInf	math.Sqrtmath/cmplx.Sqrt math/cmplx.Tan
math/cmplxTan Tan��	Tan = function(x) {
		var _tmp, _tmp$1, d, im, re, x;
  c{		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if (math.IsInf(im, 0)) {
    			if (math.IsInf(re, 0) || math.IsNaN(re)) {
  c�				return new $Complex128(math.Copysign(0, re), math.Copysign(1, im));
    			}
  d-			return new $Complex128(math.Copysign(0, math.Sin(2 * re)), math.Copysign(1, im));
    		} else if ((re === 0) && math.IsNaN(im)) {
  d�			return x;
    		}
  d�		d = math.Cos(2 * x.$real) + math.Cosh(2 * x.$imag);
    		if (math.Abs(d) < 0.25) {
  d�			d = tanSeries(x);
    		}
    		if (d === 0) {
  e			return Inf();
    		}
  e#		return new $Complex128(math.Sin(2 * x.$real) / d, math.Sinh(2 * x.$imag) / d);
    	};
	$pkg.Tan = Tan;
Tanmath.Absmath.Copysignmath.Cos	math.Cosh
math.IsInf
math.IsNaNmath.Sin	math.Sinhmath/cmplx.Infmath/cmplx.Tanmath/cmplx.tanSeries math/cmplx.Tanh
math/cmplxTanh Tanh��	Tanh = function(x) {
		var _tmp, _tmp$1, d, im, re, x;
  f�		_tmp = x.$real;
		_tmp$1 = x.$imag;
		re = _tmp;
		im = _tmp$1;
    		if (math.IsInf(re, 0)) {
    			if (math.IsInf(im, 0) || math.IsNaN(im)) {
  gO				return new $Complex128(math.Copysign(1, re), math.Copysign(0, im));
    			}
  g�			return new $Complex128(math.Copysign(1, re), math.Copysign(0, math.Sin(2 * im)));
    		} else if ((im === 0) && math.IsNaN(re)) {
  g�			return x;
    		}
  h		d = math.Cosh(2 * x.$real) + math.Cos(2 * x.$imag);
    		if (d === 0) {
  hF			return Inf();
    		}
  hW		return new $Complex128(math.Sinh(2 * x.$real) / d, math.Sin(2 * x.$imag) / d);
    	};
	$pkg.Tanh = Tanh;
Tanh	math.Copysignmath.Cos	math.Cosh
math.IsInf
math.IsNaNmath.Sin	math.Sinhmath/cmplx.Infmath/cmplx.Tanh math/cmplx.reducePi
math/cmplxreducePi reducePi�-	reducePi = function(x) {
		var _q, _r, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, bitshift, c, digit, e, exp, hi, ix, lo, lz, mPi, t, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, z0, z0lo, z1, z1hi, z1lo, z2, z2hi;
    		if (math.Abs(x) < 1.073741824e+09) {
  o�			t = x / 3.141592653589793;
  o�			t = t + (0.5);
  o�			t = ($flatten64((new $Int64(0, t))));
  o�			return ((x - t * 3.141592502593994) - t * 1.5099578831723193e-07) - t * 1.0780605716316238e-14;
    		}
  p�		ix = math.Float64bits(x);
  q		exp = ((((x$1 = $shiftRightUint64(ix, 52), new $Uint64(x$1.$high & 0, (x$1.$low & 2047) >>> 0)).$low >> 0)) - 1023 >> 0) - 52 >> 0;
  q6		ix = (x$2 = new $Uint64(1048575, 4294967295), new $Uint64(ix.$high & x$2.$high, (ix.$low & x$2.$low) >>> 0));
  qF		ix = (x$3 = new $Uint64(1048576, 0), new $Uint64(ix.$high | x$3.$high, (ix.$low | x$3.$low) >>> 0));
  r%		mPi = $toNativeArray($kindUint64, [new $Uint64(0, 0), new $Uint64(1367130551, 656542356), new $Uint64(4262702056, 4204424928), new $Uint64(1840335564, 2653014048), new $Uint64(4280857045, 4015907504), new $Uint64(3683792669, 556198256), new $Uint64(52729717, 82364686), new $Uint64(2131686798, 1486148511), new $Uint64(1950423802, 2539496002), new $Uint64(1959671827, 1513078560), new $Uint64(2630413084, 3249118458), new $Uint64(1312960453, 3741094941), new $Uint64(2415676415, 4009937927), new $Uint64(4153903301, 2902800015), new $Uint64(3063627623, 2481292507), new $Uint64(2812485555, 1328542998), new $Uint64(3130252643, 4126341309), new $Uint64(2659425531, 3307817333), new $Uint64(905818072, 2412162692), new $Uint64(721524771, 2117973461)]);
  t�		_tmp = (_q = (((exp + 64 >> 0) >>> 0)) / 64, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >>> 0 : $throwRuntimeError("integer divide by zero"));
		_tmp$1 = (_r = (((exp + 64 >> 0) >>> 0)) % 64, _r === _r ? _r : $throwRuntimeError("integer divide by zero"));
		digit = _tmp;
		bitshift = _tmp$1;
  u		z0 = (x$4 = $shiftLeft64(((digit < 0 || digit >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[digit]), bitshift), x$5 = $shiftRightUint64((x$6 = digit + 1 >>> 0, ((x$6 < 0 || x$6 >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[x$6])), ((64 - bitshift >>> 0))), new $Uint64(x$4.$high | x$5.$high, (x$4.$low | x$5.$low) >>> 0));
  uY		z1 = (x$7 = $shiftLeft64((x$8 = digit + 1 >>> 0, ((x$8 < 0 || x$8 >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[x$8])), bitshift), x$9 = $shiftRightUint64((x$10 = digit + 2 >>> 0, ((x$10 < 0 || x$10 >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[x$10])), ((64 - bitshift >>> 0))), new $Uint64(x$7.$high | x$9.$high, (x$7.$low | x$9.$low) >>> 0));
  u�		z2 = (x$11 = $shiftLeft64((x$12 = digit + 2 >>> 0, ((x$12 < 0 || x$12 >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[x$12])), bitshift), x$13 = $shiftRightUint64((x$14 = digit + 3 >>> 0, ((x$14 < 0 || x$14 >= mPi.length) ? ($throwRuntimeError("index out of range"), undefined) : mPi[x$14])), ((64 - bitshift >>> 0))), new $Uint64(x$11.$high | x$13.$high, (x$11.$low | x$13.$low) >>> 0));
  v4		_tuple = bits.Mul64(z2, ix);
		z2hi = _tuple[0];
  vS		_tuple$1 = bits.Mul64(z1, ix);
		z1hi = _tuple$1[0];
		z1lo = _tuple$1[1];
  vu		z0lo = $mul64(z0, ix);
  v�		_tuple$2 = bits.Add64(z1lo, z2hi, new $Uint64(0, 0));
		lo = _tuple$2[0];
		c = _tuple$2[1];
  v�		_tuple$3 = bits.Add64(z0lo, z1hi, c);
		hi = _tuple$3[0];
  v�		lz = ((bits.LeadingZeros64(hi) >>> 0));
  w		e = (new $Uint64(0, (1023 - ((lz + 1 >>> 0)) >>> 0)));
  wo		hi = (x$15 = $shiftLeft64(hi, ((lz + 1 >>> 0))), x$16 = $shiftRightUint64(lo, ((64 - ((lz + 1 >>> 0)) >>> 0))), new $Uint64(x$15.$high | x$16.$high, (x$15.$low | x$16.$low) >>> 0));
  w�		hi = $shiftRightUint64(hi, (12));
  w�		hi = (x$17 = $shiftLeft64(e, 52), new $Uint64(hi.$high | x$17.$high, (hi.$low | x$17.$low) >>> 0));
  w�		x = math.Float64frombits(hi);
    		if (x > 0.5) {
  x<			x = x - (1);
    		}
  xD		return 3.141592653589793 * x;
    	};
reducePimath.Absmath.Float64bitsmath.Float64frombitsmath/bits.Add64math/bits.LeadingZeros64math/bits.Mul64math/cmplx.reducePi math/cmplx.tanSeries
math/cmplx	tanSeries 	tanSeries�$	tanSeries = function(z) {
		var d, f, rn, t, x, x2, y, y2, z;
  x�		x = math.Abs(2 * z.$real);
  x�		y = math.Abs(2 * z.$imag);
  y		x = reducePi(x);
  y		x = x * x;
  y(		y = y * y;
  y3		x2 = 1;
  y>		y2 = 1;
  yI		f = 1;
  yS		rn = 0;
  y^		d = 0;
  yh		while (true) {
  yp			rn = rn + (1);
  yw			f = f * (rn);
  y�			rn = rn + (1);
  y�			f = f * (rn);
  y�			x2 = x2 * (x);
  y�			y2 = y2 * (y);
  y�			t = y2 + x2;
  y�			t = t / (f);
  y�			d = d + (t);
  y�			rn = rn + (1);
  y�			f = f * (rn);
  y�			rn = rn + (1);
  y�			f = f * (rn);
  y�			x2 = x2 * (x);
  y�			y2 = y2 * (y);
  y�			t = y2 - x2;
  z			t = t / (f);
  z			d = d + (t);
    			if (!(math.Abs(t / d) > 1.1102230246251565e-16)) {
  z�				break;
    			}
    		}
  z�		return d;
    	};
	tanSeriesmath.Absmath/cmplx.reducePimath/cmplx.tanSeries math/cmplx.Cot
math/cmplxCot Cot�F	Cot = function(x) {
		var d, x;
  }g		d = math.Cosh(2 * x.$imag) - math.Cos(2 * x.$real);
    		if (math.Abs(d) < 0.25) {
  }�			d = tanSeries(x);
    		}
    		if (d === 0) {
  }�			return Inf();
    		}
  }�		return new $Complex128(math.Sin(2 * x.$real) / d, -math.Sinh(2 * x.$imag) / d);
    	};
	$pkg.Cot = Cot;
Cotmath.Absmath.Cos	math.Coshmath.Sin	math.Sinhmath/cmplx.Cotmath/cmplx.Infmath/cmplx.tanSeries ��{"Base":32296,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/abs.go","Base":1,"Size":523,"Lines":[0,55,109,159,160,233,304,356,370,371,385,386,452],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/asin.go","Base":525,"Size":6061,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1162,1165,1181,1184,1209,1244,1283,1286,1314,1317,1330,1333,1373,1431,1491,1551,1609,1647,1648,1687,1724,1762,1798,1834,1870,1907,1929,1940,1956,1990,2016,2050,2061,2077,2081,2106,2117,2140,2152,2178,2230,2241,2285,2289,2314,2384,2387,2430,2443,2492,2552,2571,2616,2618,2619,2670,2708,2746,2782,2819,2855,2891,2916,2927,2953,3005,3028,3040,3051,3097,3101,3123,3134,3150,3162,3188,3214,3225,3241,3245,3270,3340,3343,3356,3404,3467,3469,3470,3501,3504,3520,3523,3560,3563,3576,3579,3619,3677,3737,3797,3798,3839,3876,3890,3935,3937,3938,3991,4029,4042,4097,4100,4114,4133,4178,4181,4226,4228,4229,4261,4264,4280,4283,4289,4308,4311,4319,4353,4396,4430,4464,4467,4499,4531,4563,4595,4627,4630,4666,4669,4698,4701,4714,4717,4757,4815,4875,4935,4997,5052,5082,5083,5125,5162,5200,5215,5251,5287,5324,5370,5392,5444,5448,5517,5557,5572,5575,5600,5631,5644,5659,5662,5699,5717,5718,5735,5750,5763,5778,5781,5798,5819,5856,5858,5859,5913,5951,5997,6010,6059],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/conj.go","Base":6587,"Size":292,"Lines":[0,55,109,159,160,174,175,219],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/exp.go","Base":6880,"Size":2102,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1165,1168,1184,1187,1249,1252,1258,1277,1296,1304,1336,1339,1352,1355,1395,1453,1513,1573,1574,1624,1660,1698,1723,1734,1760,1772,1816,1831,1875,1887,1933,1938,1942,1964,1979,2013,2017,2020,2044,2074,2100],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/isinf.go","Base":8983,"Size":506,"Lines":[0,55,109,159,160,174,175,189,190,257,289,344,358,361,375,377,378,434,458,478,504],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/isnan.go","Base":9490,"Size":596,"Lines":[0,55,109,159,160,174,175,189,190,248,279,311,321,377,392,442,456,459,473,475,476,525,549,568,594],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/log.go","Base":10087,"Size":2084,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1162,1165,1181,1184,1241,1268,1271,1277,1323,1331,1368,1371,1413,1416,1429,1432,1472,1530,1590,1650,1653,1712,1774,1801,1802,1845,1881,1925,1927,1928,1973,2011,2024,2082],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/phase.go","Base":12172,"Size":372,"Lines":[0,55,109,159,160,174,175,189,190,250,299],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/polar.go","Base":12545,"Size":371,"Lines":[0,55,109,159,160,174,175,232,261,301,344,369],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/pow.go","Base":12917,"Size":2327,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1159,1162,1178,1181,1227,1263,1322,1325,1338,1341,1381,1439,1499,1500,1550,1598,1626,1709,1748,1798,1814,1830,1834,1861,1872,1887,1899,1913,1928,1963,1968,1984,1998,2010,2014,2037,2040,2059,2078,2101,2104,2137,2154,2178,2197,2229,2268,2271,2299,2325],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/rect.go","Base":15245,"Size":348,"Lines":[0,55,109,159,160,174,175,189,190,257,295,320,346],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/sin.go","Base":15594,"Size":4898,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1158,1161,1177,1180,1186,1205,1208,1216,1219,1264,1267,1294,1297,1310,1313,1353,1411,1471,1531,1569,1570,1600,1636,1674,1730,1763,1788,1799,1815,1827,1871,1905,1909,1942,1953,1956,1986,2015,2043,2045,2046,2073,2076,2092,2095,2131,2182,2185,2198,2201,2241,2299,2359,2360,2402,2439,2477,2533,2566,2591,2602,2618,2644,2688,2722,2726,2759,2792,2795,2825,2854,2882,2884,2885,2912,2915,2931,2934,2940,2959,2962,2970,2973,3018,3021,3034,3037,3077,3135,3195,3255,3256,3288,3324,3362,3418,3473,3498,3509,3525,3582,3626,3669,3673,3706,3738,3741,3771,3800,3829,3831,3832,3861,3864,3880,3883,3930,3933,3946,3949,3989,4047,4107,4108,4152,4189,4227,4283,4337,4362,4373,4389,4445,4489,4532,4536,4569,4602,4605,4635,4664,4692,4694,4695,4722,4766,4791,4827,4830,4848,4863,4873,4896],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/sqrt.go","Base":20493,"Size":3078,"Lines":[0,55,109,159,160,174,175,189,190,250,320,378,381,429,493,496,557,627,702,769,842,914,928,931,997,1063,1076,1079,1103,1132,1133,1156,1159,1175,1178,1211,1214,1243,1273,1276,1305,1335,1338,1398,1430,1433,1493,1563,1566,1579,1582,1622,1680,1740,1800,1801,1839,1929,1966,1985,2067,2087,2117,2121,2140,2206,2210,2256,2292,2333,2336,2355,2374,2408,2433,2437,2469,2492,2495,2509,2523,2542,2595,2636,2648,2660,2672,2682,2720,2749,2793,2796,2819,2834,2846,2877,2911,2924,2934,2965,2999,3012,3015,3027,3051,3054,3076],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/math/cmplx/tan.go","Base":23572,"Size":8723,"Lines":[0,55,109,159,160,174,175,184,192,205,207,208,268,338,396,399,447,511,514,575,645,720,787,860,932,946,949,1015,1081,1094,1097,1121,1150,1151,1179,1182,1198,1201,1207,1226,1229,1237,1240,1274,1309,1342,1345,1406,1461,1490,1493,1520,1523,1536,1539,1579,1637,1697,1757,1817,1818,1851,1887,1925,1950,1961,2005,2067,2071,2144,2177,2188,2191,2240,2265,2284,2287,2300,2315,2318,2381,2383,2384,2414,2417,2433,2436,2494,2497,2510,2513,2553,2611,2671,2672,2717,2754,2792,2817,2828,2872,2934,2938,3011,3044,3055,3058,3107,3120,3135,3138,3201,3203,3204,3273,3337,3395,3463,3492,3566,3631,3666,3701,3773,3843,3910,3990,4066,4148,4222,4268,4309,4345,4391,4401,4467,4530,4600,4665,4733,4806,4832,4886,4940,4994,4998,5017,5028,5079,5118,5121,5164,5173,5192,5217,5235,5261,5264,5316,5339,5366,5409,5425,5443,5444,5500,5542,5591,5644,5668,5690,5712,5734,5756,5778,5800,5822,5844,5866,5888,5910,5932,5954,5976,5998,6020,6042,6064,6086,6108,6111,6185,6265,6347,6400,6468,6538,6608,6687,6718,6752,6769,6805,6841,6881,6918,6948,7002,7051,7070,7119,7137,7167,7192,7206,7212,7215,7235,7237,7238,7288,7327,7359,7387,7415,7432,7443,7454,7465,7476,7486,7497,7507,7514,7521,7531,7538,7548,7558,7568,7583,7592,7601,7602,7609,7619,7626,7636,7646,7656,7670,7679,7688,7721,7798,7821,7830,7834,7837,7847,7849,7850,7880,7883,7899,7902,7908,7927,7930,7938,7941,7975,8010,8043,8046,8101,8158,8181,8184,8197,8200,8240,8298,8358,8418,8458,8459,8494,8530,8579,8604,8623,8626,8639,8654,8657,8721],"Infos":null}]}
 