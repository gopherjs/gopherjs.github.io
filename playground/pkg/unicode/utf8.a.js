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
GoLinkname�� Implementation�� 	Reference��   �u���unicode/utf8utf8��i ��prsizes nbutf8DecodeLastRuneDecodeLastRuneInString
DecodeRuneDecodeRuneInString
EncodeRuneFullRuneFullRuneInStringMaxRune	RuneCountRuneCountInString	RuneErrorRuneLenRuneSelf	RuneStartUTFMaxValid	ValidRuneValidStringF       F  	   F   >   F  	   F   \   F   l   F  	   C ���F   �  F  	  C ���F    C ��F     C F   �   F     F  	    $; F.Y>dNmY~d�m�y���������������� acceptRange�	acceptRange = $pkg.acceptRange = $newType(0, $kindStruct, "utf8.acceptRange", true, "unicode/utf8", false, function(lo_, hi_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.lo = 0;
			this.hi = 0;
			return;
		}
		this.lo = lo_;
		this.hi = hi_;
	});
��	acceptRange.init("unicode/utf8", [{prop: "lo", name: "lo", embedded: false, exported: false, typ: $Uint8, tag: ""}, {prop: "hi", name: "hi", embedded: false, exported: false, typ: $Uint8, tag: ""}]);
acceptRangeunicode/utf8.acceptRange  firstfirst  acceptRangesacceptRanges  ��  �		first = $toNativeArray($kindUint8, [240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 19, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 3, 3, 52, 4, 4, 4, 68, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241, 241]);
firstunicode/utf8.first  ��  �		acceptRanges = $toNativeArray($kindStruct, [new acceptRange.ptr(128, 191), new acceptRange.ptr(160, 191), new acceptRange.ptr(128, 159), new acceptRange.ptr(144, 191), new acceptRange.ptr(128, 143), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0), new acceptRange.ptr(0, 0)]);
acceptRangesunicode/utf8.acceptRangeunicode/utf8.acceptRanges unicode/utf8.FullRuneunicode/utf8FullRune FullRune��	FullRune = function(p) {
		var accept, n, p, x, x$1, x$2;
  �		n = p.$length;
    		if (n === 0) {
  �			return false;
    		}
  		x$1 = (x = (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]), ((x < 0 || x >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[x]));
    		if (n >= ((((x$1 & 7) >>> 0) >> 0))) {
  6			return true;
    		}
  �		accept = $clone((x$2 = x$1 >>> 4 << 24 >>> 24, ((x$2 < 0 || x$2 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$2])), acceptRange);
    		if (n > 1 && ((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]) < accept.lo || accept.hi < (1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]))) {
  �			return true;
    		} else if (n > 2 && ((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]) < 128 || 191 < (2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]))) {
  			return true;
    		}
  &		return false;
    	};
	$pkg.FullRune = FullRune;
FullRuneunicode/utf8.FullRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.FullRuneInStringunicode/utf8FullRuneInString FullRuneInString�;	FullRuneInString = function(s) {
		var accept, n, s, x, x$1, x$2;
  �		n = s.length;
    		if (n === 0) {
  �			return false;
    		}
  �		x$1 = (x = s.charCodeAt(0), ((x < 0 || x >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[x]));
    		if (n >= ((((x$1 & 7) >>> 0) >> 0))) {
  �			return true;
    		}
  <		accept = $clone((x$2 = x$1 >>> 4 << 24 >>> 24, ((x$2 < 0 || x$2 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$2])), acceptRange);
    		if (n > 1 && (s.charCodeAt(1) < accept.lo || accept.hi < s.charCodeAt(1))) {
  �			return true;
    		} else if (n > 2 && (s.charCodeAt(2) < 128 || 191 < s.charCodeAt(2))) {
  �			return true;
    		}
  �		return false;
    	};
	$pkg.FullRuneInString = FullRuneInString;
FullRuneInStringunicode/utf8.FullRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneunicode/utf8
DecodeRune 
DecodeRune�
�	DecodeRune = function(p) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, accept, b1, b2, b3, mask, n, p, p0, r, size, sz, x, x$1;
		r = 0;
		size = 0;
  �		n = p.$length;
    		if (n < 1) {
    			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
    		}
  %		p0 = (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]);
  1		x = ((p0 < 0 || p0 >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[p0]);
    		if (x >= 240) {
  			mask = (((x >> 0)) << 31 >> 0) >> 31 >> 0;
    			_tmp$2 = (((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >> 0)) & ~mask) >> 0) | (65533 & mask);
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
    		}
  u		sz = ((((x & 7) >>> 0) >> 0));
  �		accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
    		if (n < sz) {
    			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
    		}
  �		b1 = (1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]);
    		if (b1 < accept.lo || accept.hi < b1) {
    			_tmp$6 = 65533;
			_tmp$7 = 1;
			r = _tmp$6;
			size = _tmp$7;
			return [r, size];
    		}
    		if (sz <= 2) {
    			_tmp$8 = (((((p0 & 31) >>> 0) >> 0)) << 6 >> 0) | ((((b1 & 63) >>> 0) >> 0));
			_tmp$9 = 2;
			r = _tmp$8;
			size = _tmp$9;
			return [r, size];
    		}
  �		b2 = (2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]);
    		if (b2 < 128 || 191 < b2) {
    			_tmp$10 = 65533;
			_tmp$11 = 1;
			r = _tmp$10;
			size = _tmp$11;
			return [r, size];
    		}
    		if (sz <= 3) {
    			_tmp$12 = ((((((p0 & 15) >>> 0) >> 0)) << 12 >> 0) | (((((b1 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((b2 & 63) >>> 0) >> 0));
			_tmp$13 = 3;
			r = _tmp$12;
			size = _tmp$13;
			return [r, size];
    		}
  4		b3 = (3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]);
    		if (b3 < 128 || 191 < b3) {
    			_tmp$14 = 65533;
			_tmp$15 = 1;
			r = _tmp$14;
			size = _tmp$15;
			return [r, size];
    		}
    		_tmp$16 = (((((((p0 & 7) >>> 0) >> 0)) << 18 >> 0) | (((((b1 & 63) >>> 0) >> 0)) << 12 >> 0)) | (((((b2 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((b3 & 63) >>> 0) >> 0));
		_tmp$17 = 4;
		r = _tmp$16;
		size = _tmp$17;
		return [r, size];
    	};
	$pkg.DecodeRune = DecodeRune;

DecodeRuneunicode/utf8.DecodeRuneunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeRuneInStringunicode/utf8DecodeRuneInString DecodeRuneInString�	:	DecodeRuneInString = function(s) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$15, _tmp$16, _tmp$17, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, accept, mask, n, r, s, s0, s1, s2, s3, size, sz, x, x$1;
		r = 0;
		size = 0;
  �		n = s.length;
    		if (n < 1) {
    			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
    		}
  �		s0 = s.charCodeAt(0);
  �		x = ((s0 < 0 || s0 >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[s0]);
    		if (x >= 240) {
  �			mask = (((x >> 0)) << 31 >> 0) >> 31 >> 0;
    			_tmp$2 = ((((s.charCodeAt(0) >> 0)) & ~mask) >> 0) | (65533 & mask);
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
    		}
  >		sz = ((((x & 7) >>> 0) >> 0));
  P		accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
    		if (n < sz) {
    			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
    		}
  �		s1 = s.charCodeAt(1);
    		if (s1 < accept.lo || accept.hi < s1) {
    			_tmp$6 = 65533;
			_tmp$7 = 1;
			r = _tmp$6;
			size = _tmp$7;
			return [r, size];
    		}
    		if (sz <= 2) {
    			_tmp$8 = (((((s0 & 31) >>> 0) >> 0)) << 6 >> 0) | ((((s1 & 63) >>> 0) >> 0));
			_tmp$9 = 2;
			r = _tmp$8;
			size = _tmp$9;
			return [r, size];
    		}
  f		s2 = s.charCodeAt(2);
    		if (s2 < 128 || 191 < s2) {
    			_tmp$10 = 65533;
			_tmp$11 = 1;
			r = _tmp$10;
			size = _tmp$11;
			return [r, size];
    		}
    		if (sz <= 3) {
    			_tmp$12 = ((((((s0 & 15) >>> 0) >> 0)) << 12 >> 0) | (((((s1 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((s2 & 63) >>> 0) >> 0));
			_tmp$13 = 3;
			r = _tmp$12;
			size = _tmp$13;
			return [r, size];
    		}
  �		s3 = s.charCodeAt(3);
    		if (s3 < 128 || 191 < s3) {
    			_tmp$14 = 65533;
			_tmp$15 = 1;
			r = _tmp$14;
			size = _tmp$15;
			return [r, size];
    		}
    		_tmp$16 = (((((((s0 & 7) >>> 0) >> 0)) << 18 >> 0) | (((((s1 & 63) >>> 0) >> 0)) << 12 >> 0)) | (((((s2 & 63) >>> 0) >> 0)) << 6 >> 0)) | ((((s3 & 63) >>> 0) >> 0));
		_tmp$17 = 4;
		r = _tmp$16;
		size = _tmp$17;
		return [r, size];
    	};
	$pkg.DecodeRuneInString = DecodeRuneInString;
DecodeRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.DecodeLastRuneunicode/utf8DecodeLastRune DecodeLastRune�}	DecodeLastRune = function(p) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, end, lim, p, r, size, start;
		r = 0;
		size = 0;
   �		end = p.$length;
    		if (end === 0) {
    			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
    		}
   �		start = end - 1 >> 0;
   �		r = ((((start < 0 || start >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + start]) >> 0));
    		if (r < 128) {
    			_tmp$2 = r;
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
    		}
  !�		lim = end - 4 >> 0;
    		if (lim < 0) {
  !�			lim = 0;
    		}
  !�		start = start - (1) >> 0;
    		while (true) {
			if (!(start >= lim)) { break; }
    			if (RuneStart(((start < 0 || start >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + start]))) {
  "				break;
    			}
  !�			start = start - (1) >> 0;
    		}
    		if (start < 0) {
  ".			start = 0;
    		}
  "<		_tuple = DecodeRune($subslice(p, start, end));
		r = _tuple[0];
		size = _tuple[1];
    		if (!(((start + size >> 0) === end))) {
    			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
    		}
    		_tmp$6 = r;
		_tmp$7 = size;
		r = _tmp$6;
		size = _tmp$7;
		return [r, size];
    	};
	$pkg.DecodeLastRune = DecodeLastRune;
DecodeLastRuneunicode/utf8.DecodeLastRuneunicode/utf8.DecodeRuneunicode/utf8.RuneStart #unicode/utf8.DecodeLastRuneInStringunicode/utf8DecodeLastRuneInString DecodeLastRuneInString��	DecodeLastRuneInString = function(s) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, end, lim, r, s, size, start;
		r = 0;
		size = 0;
  $�		end = s.length;
    		if (end === 0) {
    			_tmp = 65533;
			_tmp$1 = 0;
			r = _tmp;
			size = _tmp$1;
			return [r, size];
    		}
  $�		start = end - 1 >> 0;
  $�		r = ((s.charCodeAt(start) >> 0));
    		if (r < 128) {
    			_tmp$2 = r;
			_tmp$3 = 1;
			r = _tmp$2;
			size = _tmp$3;
			return [r, size];
    		}
  %�		lim = end - 4 >> 0;
    		if (lim < 0) {
  %�			lim = 0;
    		}
  %�		start = start - (1) >> 0;
    		while (true) {
			if (!(start >= lim)) { break; }
    			if (RuneStart(s.charCodeAt(start))) {
  &					break;
    			}
  %�			start = start - (1) >> 0;
    		}
    		if (start < 0) {
  &(			start = 0;
    		}
  &6		_tuple = DecodeRuneInString($substring(s, start, end));
		r = _tuple[0];
		size = _tuple[1];
    		if (!(((start + size >> 0) === end))) {
    			_tmp$4 = 65533;
			_tmp$5 = 1;
			r = _tmp$4;
			size = _tmp$5;
			return [r, size];
    		}
    		_tmp$6 = r;
		_tmp$7 = size;
		r = _tmp$6;
		size = _tmp$7;
		return [r, size];
    	};
	$pkg.DecodeLastRuneInString = DecodeLastRuneInString;
DecodeLastRuneInString#unicode/utf8.DecodeLastRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.RuneStart unicode/utf8.RuneLenunicode/utf8RuneLen RuneLen��	RuneLen = function(r) {
		var r;
    		if (r < 0) {
  'c			return -1;
    		} else if (r <= 127) {
  '�			return 1;
    		} else if (r <= 2047) {
  '�			return 2;
    		} else if (55296 <= r && r <= 57343) {
  '�			return -1;
    		} else if (r <= 65535) {
  '�			return 3;
    		} else if (r <= 1114111) {
  (			return 4;
    		}
  (*		return -1;
    	};
	$pkg.RuneLen = RuneLen;
RuneLenunicode/utf8.RuneLen unicode/utf8.EncodeRuneunicode/utf8
EncodeRune 
EncodeRune��	EncodeRune = function(p, r) {
		var i, p, r;
  )}		i = ((r >>> 0));
    		if (i <= 127) {
  )�			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((r << 24 >>> 24)));
  )�			return 1;
    		} else if (i <= 2047) {
  )�			$unused((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]));
  )�			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((192 | (((r >> 6 >> 0) << 24 >>> 24))) >>> 0));
  *			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  *2			return 2;
    		} else if ((i > 1114111) || (55296 <= i && i <= 57343)) {
  *x			r = 65533;
  *�			$unused((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]));
  *�			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((224 | (((r >> 12 >> 0) << 24 >>> 24))) >>> 0));
  *�			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +
			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +&			return 3;
    		} else if (i <= 65535) {
  *�			$unused((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]));
  *�			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((224 | (((r >> 12 >> 0) << 24 >>> 24))) >>> 0));
  *�			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +
			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +&			return 3;
    		} else {
  +;			$unused((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]));
  +a			(0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0] = ((240 | (((r >> 18 >> 0) << 24 >>> 24))) >>> 0));
  +{			(1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1] = ((128 | (((((r >> 12 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +�			(2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2] = ((128 | (((((r >> 6 >> 0) << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +�			(3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3] = ((128 | ((((r << 24 >>> 24)) & 63) >>> 0)) >>> 0));
  +�			return 4;
    		}
    	};
	$pkg.EncodeRune = EncodeRune;

EncodeRuneunicode/utf8.EncodeRune unicode/utf8.RuneCountunicode/utf8	RuneCount 	RuneCount�	RuneCount = function(p) {
		var accept, c, c$1, c$2, c$3, i, n, np, p, size, x, x$1, x$2, x$3, x$4;
  ,�		np = p.$length;
  ,�		n = 0;
  ,�		i = 0;
		while (true) {
			if (!(i < np)) { break; }
  ,�			n = n + (1) >> 0;
  ,�			c = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]);
    			if (c < 128) {
  ,�				i = i + (1) >> 0;
  ,�				continue;
    			}
  -			x = ((c < 0 || c >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[c]);
    			if (x === 241) {
  -&				i = i + (1) >> 0;
  -9				continue;
    			}
  -H			size = ((((x & 7) >>> 0) >> 0));
    			if ((i + size >> 0) > np) {
  -q				i = i + (1) >> 0;
  -�				continue;
    			}
  -�			accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
  -�			c$1 = (x$2 = i + 1 >> 0, ((x$2 < 0 || x$2 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$2]));
    			if (c$1 < accept.lo || accept.hi < c$1) {
  -�				size = 1;
    			} else if (size === 2) {
    			} else {
  .				c$2 = (x$3 = i + 2 >> 0, ((x$3 < 0 || x$3 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$3]));
    				if (c$2 < 128 || 191 < c$2) {
  .C					size = 1;
    				} else if (size === 3) {
    				} else {
  .p					c$3 = (x$4 = i + 3 >> 0, ((x$4 < 0 || x$4 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$4]));
    					if (c$3 < 128 || 191 < c$3) {
  .�						size = 1;
    					}
    				}
    			}
  .�			i = i + (size) >> 0;
    		}
  .�		return n;
    	};
	$pkg.RuneCount = RuneCount;
	RuneCountunicode/utf8.RuneCountunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneCountInStringunicode/utf8RuneCountInString RuneCountInString��	RuneCountInString = function(s) {
		var accept, c, c$1, c$2, c$3, i, n, ns, s, size, x, x$1;
		n = 0;
  /.		ns = s.length;
  /@		i = 0;
		while (true) {
			if (!(i < ns)) { break; }
  /X			c = s.charCodeAt(i);
    			if (c < 128) {
  /�				i = i + (1) >> 0;
  /P				n = n + (1) >> 0;
    				continue;
    			}
  /�			x = ((c < 0 || c >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[c]);
    			if (x === 241) {
  /�				i = i + (1) >> 0;
  /P				n = n + (1) >> 0;
    				continue;
    			}
  /�			size = ((((x & 7) >>> 0) >> 0));
    			if ((i + size >> 0) > ns) {
  0				i = i + (1) >> 0;
  /P				n = n + (1) >> 0;
    				continue;
    			}
  0;			accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
  0]			c$1 = s.charCodeAt((i + 1 >> 0));
    			if (c$1 < accept.lo || accept.hi < c$1) {
  0�				size = 1;
    			} else if (size === 2) {
    			} else {
  0�				c$2 = s.charCodeAt((i + 2 >> 0));
    				if (c$2 < 128 || 191 < c$2) {
  0�					size = 1;
    				} else if (size === 3) {
    				} else {
  1					c$3 = s.charCodeAt((i + 3 >> 0));
    					if (c$3 < 128 || 191 < c$3) {
  16						size = 1;
    					}
    				}
    			}
  1E			i = i + (size) >> 0;
  /P			n = n + (1) >> 0;
    		}
    		n = n;
		return n;
    	};
	$pkg.RuneCountInString = RuneCountInString;
RuneCountInStringunicode/utf8.RuneCountInStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.RuneStartunicode/utf8	RuneStart 	RuneStartx	RuneStart = function(b) {
		var b;
  2+		return !((((b & 192) >>> 0) === 128));
    	};
	$pkg.RuneStart = RuneStart;
	RuneStartunicode/utf8.RuneStart unicode/utf8.Validunicode/utf8Valid Valid��	Valid = function(p) {
		var accept, c, c$1, c$2, first32, i, n, p, pi, second32, size, x, x$1, x$2, x$3, x$4;
  2�		while (true) {
			if (!(p.$length >= 8)) { break; }
  3�			first32 = ((((((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0)) | ((((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]) >>> 0)) << 24 >>> 0)) >>> 0;
  4>			second32 = ((((((((4 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 4]) >>> 0)) | ((((5 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 5]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((6 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 6]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((7 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 7]) >>> 0)) << 24 >>> 0)) >>> 0;
    			if (!(((((((first32 | second32) >>> 0)) & 2155905152) >>> 0) === 0))) {
  4�				break;
    			}
  4�			p = $subslice(p, 8);
    		}
  5		n = p.$length;
  5		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  5&			pi = ((i < 0 || i >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + i]);
    			if (pi < 128) {
  5I				i = i + (1) >> 0;
  5P				continue;
    			}
  5_			x = ((pi < 0 || pi >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[pi]);
    			if (x === 241) {
  5�				return false;
    			}
  5�			size = ((((x & 7) >>> 0) >> 0));
    			if ((i + size >> 0) > n) {
  5�				return false;
    			}
  5�			accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
  6			c = (x$2 = i + 1 >> 0, ((x$2 < 0 || x$2 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$2]));
    			if (c < accept.lo || accept.hi < c) {
  6O				return false;
    			} else if (size === 2) {
    			} else {
  6�				c$1 = (x$3 = i + 2 >> 0, ((x$3 < 0 || x$3 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$3]));
    				if (c$1 < 128 || 191 < c$1) {
  6�					return false;
    				} else if (size === 3) {
    				} else {
  6�					c$2 = (x$4 = i + 3 >> 0, ((x$4 < 0 || x$4 >= p.$length) ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + x$4]));
    					if (c$2 < 128 || 191 < c$2) {
  6�						return false;
    					}
    				}
    			}
  7			i = i + (size) >> 0;
    		}
  7 		return true;
    	};
	$pkg.Valid = Valid;
Validunicode/utf8.Validunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidStringunicode/utf8ValidString ValidString�	ValidString = function(s) {
		var accept, c, c$1, c$2, first32, i, n, s, second32, si, size, x, x$1;
  7�		while (true) {
			if (!(s.length >= 8)) { break; }
  8�			first32 = (((((((s.charCodeAt(0) >>> 0)) | (((s.charCodeAt(1) >>> 0)) << 8 >>> 0)) >>> 0) | (((s.charCodeAt(2) >>> 0)) << 16 >>> 0)) >>> 0) | (((s.charCodeAt(3) >>> 0)) << 24 >>> 0)) >>> 0;
  95			second32 = (((((((s.charCodeAt(4) >>> 0)) | (((s.charCodeAt(5) >>> 0)) << 8 >>> 0)) >>> 0) | (((s.charCodeAt(6) >>> 0)) << 16 >>> 0)) >>> 0) | (((s.charCodeAt(7) >>> 0)) << 24 >>> 0)) >>> 0;
    			if (!(((((((first32 | second32) >>> 0)) & 2155905152) >>> 0) === 0))) {
  9�				break;
    			}
  9�			s = $substring(s, 8);
    		}
  9�		n = s.length;
  :
		i = 0;
		while (true) {
			if (!(i < n)) { break; }
  :			si = s.charCodeAt(i);
    			if (si < 128) {
  :@				i = i + (1) >> 0;
  :G				continue;
    			}
  :V			x = ((si < 0 || si >= first.length) ? ($throwRuntimeError("index out of range"), undefined) : first[si]);
    			if (x === 241) {
  :w				return false;
    			}
  :�			size = ((((x & 7) >>> 0) >> 0));
    			if ((i + size >> 0) > n) {
  :�				return false;
    			}
  :�			accept = $clone((x$1 = x >>> 4 << 24 >>> 24, ((x$1 < 0 || x$1 >= acceptRanges.length) ? ($throwRuntimeError("index out of range"), undefined) : acceptRanges[x$1])), acceptRange);
  ;			c = s.charCodeAt((i + 1 >> 0));
    			if (c < accept.lo || accept.hi < c) {
  ;F				return false;
    			} else if (size === 2) {
    			} else {
  ;w				c$1 = s.charCodeAt((i + 2 >> 0));
    				if (c$1 < 128 || 191 < c$1) {
  ;�					return false;
    				} else if (size === 3) {
    				} else {
  ;�					c$2 = s.charCodeAt((i + 3 >> 0));
    					if (c$2 < 128 || 191 < c$2) {
  ;�						return false;
    					}
    				}
    			}
  <				i = i + (size) >> 0;
    		}
  <		return true;
    	};
	$pkg.ValidString = ValidString;
ValidStringunicode/utf8.ValidStringunicode/utf8.acceptRangeunicode/utf8.acceptRangesunicode/utf8.first unicode/utf8.ValidRuneunicode/utf8	ValidRune 	ValidRune��	ValidRune = function(r) {
		var r;
    		if (0 <= r && r < 55296) {
  <�			return true;
    		} else if (57343 < r && r <= 1114111) {
  =.			return true;
    		}
  =>		return false;
    	};
	$pkg.ValidRune = ValidRune;
	ValidRuneunicode/utf8.ValidRune �,{"Base":15694,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/unicode/utf8/utf8.go","Base":1,"Size":15692,"Lines":[0,55,109,159,160,238,323,366,379,380,437,492,567,568,608,616,697,800,863,954,956,957,1020,1028,1051,1074,1076,1077,1085,1102,1119,1136,1153,1170,1187,1188,1208,1228,1248,1268,1269,1290,1312,1334,1335,1389,1408,1427,1428,1504,1577,1649,1691,1721,1749,1780,1811,1842,1873,1904,1935,1966,1968,1969,2035,2059,2123,2201,2279,2357,2435,2513,2591,2669,2747,2811,2889,2967,3045,3123,3201,3279,3357,3435,3437,3438,3516,3529,3555,3598,3642,3644,3645,3722,3758,3776,3794,3812,3830,3848,3850,3851,3938,4034,4065,4078,4091,4106,4109,4127,4147,4189,4192,4222,4252,4306,4320,4371,4385,4388,4402,4404,4405,4469,4508,4521,4534,4549,4552,4570,4590,4633,4636,4666,4696,4750,4764,4815,4829,4832,4846,4848,4849,4926,5004,5079,5120,5123,5198,5270,5314,5361,5374,5386,5408,5411,5423,5439,5453,5523,5595,5640,5698,5744,5747,5765,5795,5808,5830,5833,5845,5884,5906,5909,5993,6040,6043,6055,6084,6106,6109,6123,6191,6194,6206,6235,6257,6260,6348,6350,6351,6427,6505,6583,6593,6596,6671,6743,6787,6842,6855,6867,6889,6892,6904,6920,6934,7004,7076,7121,7179,7225,7228,7246,7276,7289,7311,7314,7326,7365,7387,7390,7474,7521,7524,7536,7565,7587,7590,7604,7672,7675,7687,7716,7738,7741,7829,7831,7832,7912,7990,8065,8106,8109,8184,8256,8300,8351,8366,8381,8403,8406,8424,8444,8463,8477,8480,8530,8583,8602,8623,8637,8647,8650,8688,8715,8724,8728,8731,8747,8759,8762,8798,8822,8844,8847,8863,8865,8866,8945,9025,9096,9116,9119,9194,9266,9310,9369,9384,9399,9421,9424,9442,9462,9481,9495,9498,9548,9601,9620,9641,9655,9665,9668,9706,9733,9742,9746,9749,9765,9777,9780,9824,9848,9870,9873,9889,9891,9892,9960,10030,10057,10067,10080,10092,10113,10124,10145,10156,10202,10214,10235,10246,10266,10277,10280,10291,10293,10294,10383,10452,10495,10535,10612,10638,10659,10676,10687,10708,10746,10771,10799,10810,10869,10885,10899,10920,10958,10984,11015,11043,11054,11064,11102,11128,11160,11191,11219,11230,11233,11235,11236,11303,11361,11392,11406,11417,11440,11446,11458,11478,11500,11507,11519,11523,11539,11554,11573,11585,11589,11610,11629,11657,11669,11673,11704,11755,11767,11791,11839,11851,11875,11923,11935,11939,11951,11954,11964,11966,11967,12033,12076,12090,12117,12129,12149,12171,12178,12190,12194,12210,12225,12244,12256,12260,12281,12300,12328,12340,12344,12375,12426,12438,12462,12510,12522,12546,12594,12606,12610,12622,12625,12635,12637,12638,12715,12793,12812,12866,12867,12942,12970,13047,13066,13130,13164,13233,13289,13371,13454,13496,13540,13549,13553,13565,13568,13581,13603,13616,13637,13644,13656,13660,13677,13692,13733,13737,13758,13776,13813,13817,13848,13899,13915,13939,13987,14003,14027,14075,14091,14095,14107,14110,14123,14125,14126,14207,14241,14318,14337,14401,14435,14504,14560,14642,14725,14767,14811,14820,14824,14836,14839,14852,14874,14887,14908,14915,14927,14931,14948,14963,15004,15008,15029,15047,15084,15088,15119,15170,15186,15210,15258,15274,15298,15346,15362,15366,15378,15381,15394,15396,15397,15461,15531,15561,15571,15605,15619,15659,15673,15676,15690],"Infos":null}]}
 