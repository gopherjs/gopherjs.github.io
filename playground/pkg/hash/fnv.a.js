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
GoLinkname�� Implementation�� 	Reference��   ��%��hash/fnvfnverrorshash	math/bits�Hi �� HashhashHash32Hash64Writerio	BlockSizeResetSizeSumbSum32Sum64WritepnerrfnvNew128New128aNew32New32aNew64New64a F     F      F    1F    1 F    BF    B   S #    -   3    8 <V  X T Z   >   	T �   D   
T �   J P� R T T � X \c
kqx%~, ]m~   �I errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bits 	bits = $packages["math/bits"];
��    		$r = bits.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sum32\	sum32 = $pkg.sum32 = $newType(4, $kindUint32, "fnv.sum32", true, "hash/fnv", false, null);
��	ptrType.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Sum32", name: "Sum32", pkg: "", typ: $funcType([], [$Uint32], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
sum32hash/fnv.ptrTypehash/fnv.sliceTypehash/fnv.sum32  sum32a_	sum32a = $pkg.sum32a = $newType(4, $kindUint32, "fnv.sum32a", true, "hash/fnv", false, null);
��	ptrType$1.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Sum32", name: "Sum32", pkg: "", typ: $funcType([], [$Uint32], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
sum32ahash/fnv.ptrType$1hash/fnv.sliceTypehash/fnv.sum32a  sum64\	sum64 = $pkg.sum64 = $newType(8, $kindUint64, "fnv.sum64", true, "hash/fnv", false, null);
��	ptrType$2.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Sum64", name: "Sum64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
sum64hash/fnv.ptrType$2hash/fnv.sliceTypehash/fnv.sum64  sum64a_	sum64a = $pkg.sum64a = $newType(8, $kindUint64, "fnv.sum64a", true, "hash/fnv", false, null);
��	ptrType$3.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Sum64", name: "Sum64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
sum64ahash/fnv.ptrType$3hash/fnv.sliceTypehash/fnv.sum64a  sum128_	sum128 = $pkg.sum128 = $newType(16, $kindArray, "fnv.sum128", true, "hash/fnv", false, null);
��	ptrType$4.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
	sum128.init($Uint64, 2);
sum128hash/fnv.ptrType$4hash/fnv.sliceTypehash/fnv.sum128  sum128ab	sum128a = $pkg.sum128a = $newType(16, $kindArray, "fnv.sum128a", true, "hash/fnv", false, null);
��	ptrType$5.methods = [{prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}];
	sum128a.init($Uint64, 2);
sum128ahash/fnv.ptrType$5hash/fnv.sliceTypehash/fnv.sum128a  ptrType	ptrType = $ptrType(sum32);
ptrTypehash/fnv.sum32  	ptrType$1	ptrType$1 = $ptrType(sum32a);
	ptrType$1hash/fnv.sum32a  	ptrType$2	ptrType$2 = $ptrType(sum64);
	ptrType$2hash/fnv.sum64  	ptrType$3	ptrType$3 = $ptrType(sum64a);
	ptrType$3hash/fnv.sum64a  	arrayType%	arrayType = $arrayType($Uint64, 2);
	arrayType  	ptrType$4	ptrType$4 = $ptrType(sum128);
	ptrType$4hash/fnv.sum128  	ptrType$5 	ptrType$5 = $ptrType(sum128a);
	ptrType$5hash/fnv.sum128a  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType hash/fnv.New32hash/fnvNew32 New32��	New32 = function() {
		var s, s$24ptr;
  z		s = 2166136261;
  �		return (s$24ptr || (s$24ptr = new ptrType(function() { return s; }, function($v) { s = $v; })));
    	};
	$pkg.New32 = New32;
New32hash/fnv.New32hash/fnv.ptrTypehash/fnv.sum32 hash/fnv.New32ahash/fnvNew32a New32a��	New32a = function() {
		var s, s$24ptr;
  0		s = 2166136261;
  E		return (s$24ptr || (s$24ptr = new ptrType$1(function() { return s; }, function($v) { s = $v; })));
    	};
	$pkg.New32a = New32a;
New32ahash/fnv.New32ahash/fnv.ptrType$1hash/fnv.sum32a hash/fnv.New64hash/fnvNew64 New64��	New64 = function() {
		var s, s$24ptr;
  �		s = new sum64(3421674724, 2216829733);
  �		return (s$24ptr || (s$24ptr = new ptrType$2(function() { return s; }, function($v) { s = $v; })));
    	};
	$pkg.New64 = New64;
New64hash/fnv.New64hash/fnv.ptrType$2hash/fnv.sum64 hash/fnv.New64ahash/fnvNew64a New64a��	New64a = function() {
		var s, s$24ptr;
  �		s = new sum64a(3421674724, 2216829733);
  �		return (s$24ptr || (s$24ptr = new ptrType$3(function() { return s; }, function($v) { s = $v; })));
    	};
	$pkg.New64a = New64a;
New64ahash/fnv.New64ahash/fnv.ptrType$3hash/fnv.sum64a hash/fnv.New128hash/fnvNew128 New128��	New128 = function() {
		var s;
  O		s = arrayType.zero();
  Y		s[0] = new $Uint64(1818371886, 129696066);
  q		s[1] = new $Uint64(1656234357, 1653982605);
  �		return new ptrType$4(s);
    	};
	$pkg.New128 = New128;
New128hash/fnv.New128hash/fnv.arrayTypehash/fnv.ptrType$4hash/fnv.sum128 hash/fnv.New128ahash/fnvNew128a New128a��	New128a = function() {
		var s;
  +		s = arrayType.zero();
  6		s[0] = new $Uint64(1818371886, 129696066);
  N		s[1] = new $Uint64(1656234357, 1653982605);
  e		return new ptrType$5(s);
    	};
	$pkg.New128a = New128a;
New128ahash/fnv.New128ahash/fnv.arrayTypehash/fnv.ptrType$5hash/fnv.sum128a (*hash/fnv.sum32).Reset i	$ptrType(sum32).prototype.Reset = function() {
		var s;
		s = this;
  �		s.$set(2166136261);
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).Reset j	$ptrType(sum32a).prototype.Reset = function() {
		var s;
		s = this;
  �		s.$set(2166136261);
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).Reset ��	$ptrType(sum64).prototype.Reset = function() {
		var s;
		s = this;
  �		s.$set(new sum64(3421674724, 2216829733));
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).Reset ��	$ptrType(sum64a).prototype.Reset = function() {
		var s;
		s = this;
  			s.$set(new sum64a(3421674724, 2216829733));
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum128).Reset �%	sum128.prototype.Reset = function() {
		var s;
		s = this.$val;
  	>		s.nilCheck, s[0] = new $Uint64(1818371886, 129696066);
  	V		s.nilCheck, s[1] = new $Uint64(1656234357, 1653982605);
    	};
	$ptrType(sum128).prototype.Reset = function() { return (new sum128(this.$get())).Reset(); };
sum128hash/fnv.sum128 (*hash/fnv.sum128a).Reset �(	sum128a.prototype.Reset = function() {
		var s;
		s = this.$val;
  	�		s.nilCheck, s[0] = new $Uint64(1818371886, 129696066);
  	�		s.nilCheck, s[1] = new $Uint64(1656234357, 1653982605);
    	};
	$ptrType(sum128a).prototype.Reset = function() { return (new sum128a(this.$get())).Reset(); };
sum128ahash/fnv.sum128a (*hash/fnv.sum32).Sum32 p	$ptrType(sum32).prototype.Sum32 = function() {
		var s;
		s = this;
  	�		return ((s.$get() >>> 0));
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum32 q	$ptrType(sum32a).prototype.Sum32 = function() {
		var s;
		s = this;
  
		return ((s.$get() >>> 0));
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum64 ��	$ptrType(sum64).prototype.Sum64 = function() {
		var s, x;
		s = this;
  
I		return ((x = s.$get(), new $Uint64(x.$high, x.$low)));
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum64 ��	$ptrType(sum64a).prototype.Sum64 = function() {
		var s, x;
		s = this;
  
		return ((x = s.$get(), new $Uint64(x.$high, x.$low)));
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum32).Write �	$ptrType(sum32).prototype.Write = function(data) {
		var _i, _ref, c, data, hash$1, s;
		s = this;
  
�		hash$1 = s.$get();
  
�		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  
�			hash$1 = $imul(hash$1, (16777619)) >>> 0;
   			hash$1 = (hash$1 ^ (((c >>> 0)))) >>> 0;
    			_i++;
		}
  		s.$set(hash$1);
   		return [data.$length, $ifaceNil];
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).Write �	$ptrType(sum32a).prototype.Write = function(data) {
		var _i, _ref, c, data, hash$1, s;
		s = this;
  m		hash$1 = s.$get();
  y		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			hash$1 = (hash$1 ^ (((c >>> 0)))) >>> 0;
  �			hash$1 = $imul(hash$1, (16777619)) >>> 0;
    			_i++;
		}
  �		s.$set(hash$1);
  �		return [data.$length, $ifaceNil];
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).Write �X	$ptrType(sum64).prototype.Write = function(data) {
		var _i, _ref, c, data, hash$1, s, x;
		s = this;
  		hash$1 = s.$get();
  		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  :			hash$1 = $mul64(hash$1, (new sum64(256, 435)));
  L			hash$1 = (x = (new sum64(0, c)), new sum64(hash$1.$high ^ x.$high, (hash$1.$low ^ x.$low) >>> 0));
    			_i++;
		}
  a		s.$set(hash$1);
  l		return [data.$length, $ifaceNil];
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).Write �\	$ptrType(sum64a).prototype.Write = function(data) {
		var _i, _ref, c, data, hash$1, s, x;
		s = this;
  �		hash$1 = s.$get();
  �		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			hash$1 = (x = (new sum64a(0, c)), new sum64a(hash$1.$high ^ x.$high, (hash$1.$low ^ x.$low) >>> 0));
  �			hash$1 = $mul64(hash$1, (new sum64a(256, 435)));
    			_i++;
		}
  		s.$set(hash$1);
  		return [data.$length, $ifaceNil];
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum128).Write ��	sum128.prototype.Write = function(data) {
		var _i, _ref, _tuple, c, data, s, s0, s1, x, x$1, x$2, x$3, x$4;
		s = this.$val;
  `		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			_tuple = bits.Mul64(new $Uint64(0, 315), s[1]);
			s0 = _tuple[0];
			s1 = _tuple[1];
  �			s0 = (x = (x$1 = $shiftLeft64(s[1], 24), x$2 = $mul64(new $Uint64(0, 315), s[0]), new $Uint64(x$1.$high + x$2.$high, x$1.$low + x$2.$low)), new $Uint64(s0.$high + x.$high, s0.$low + x.$low));
  			s.nilCheck, s[1] = s1;
  			s.nilCheck, s[0] = s0;
  '			s[1] = (x$3 = s[1], x$4 = (new $Uint64(0, c)), new $Uint64(x$3.$high ^ x$4.$high, (x$3.$low ^ x$4.$low) >>> 0));
    			_i++;
		}
  =		return [data.$length, $ifaceNil];
    	};
	$ptrType(sum128).prototype.Write = function(data) { return (new sum128(this.$get())).Write(data); };
sum128hash/fnv.sum128math/bits.Mul64 (*hash/fnv.sum128a).Write ��	sum128a.prototype.Write = function(data) {
		var _i, _ref, _tuple, c, data, s, s0, s1, x, x$1, x$2, x$3, x$4;
		s = this.$val;
  �		_ref = data;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			c = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			s[1] = (x = s[1], x$1 = (new $Uint64(0, c)), new $Uint64(x.$high ^ x$1.$high, (x.$low ^ x$1.$low) >>> 0));
  �			_tuple = bits.Mul64(new $Uint64(0, 315), s[1]);
			s0 = _tuple[0];
			s1 = _tuple[1];
  			s0 = (x$2 = (x$3 = $shiftLeft64(s[1], 24), x$4 = $mul64(new $Uint64(0, 315), s[0]), new $Uint64(x$3.$high + x$4.$high, x$3.$low + x$4.$low)), new $Uint64(s0.$high + x$2.$high, s0.$low + x$2.$low));
  N			s.nilCheck, s[1] = s1;
  Z			s.nilCheck, s[0] = s0;
    			_i++;
		}
  h		return [data.$length, $ifaceNil];
    	};
	$ptrType(sum128a).prototype.Write = function(data) { return (new sum128a(this.$get())).Write(data); };
sum128ahash/fnv.sum128amath/bits.Mul64 (*hash/fnv.sum32).Size ^	$ptrType(sum32).prototype.Size = function() {
		var s;
		s = this;
  �		return 4;
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).Size _	$ptrType(sum32a).prototype.Size = function() {
		var s;
		s = this;
  �		return 4;
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).Size ^	$ptrType(sum64).prototype.Size = function() {
		var s;
		s = this;
  �		return 8;
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).Size _	$ptrType(sum64a).prototype.Size = function() {
		var s;
		s = this;
  		return 8;
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum128).Size ��	sum128.prototype.Size = function() {
		var s;
		s = this.$val;
  H		return 16;
    	};
	$ptrType(sum128).prototype.Size = function() { return (new sum128(this.$get())).Size(); };
sum128hash/fnv.sum128 (*hash/fnv.sum128a).Size ��	sum128a.prototype.Size = function() {
		var s;
		s = this.$val;
  s		return 16;
    	};
	$ptrType(sum128a).prototype.Size = function() { return (new sum128a(this.$get())).Size(); };
sum128ahash/fnv.sum128a (*hash/fnv.sum32).BlockSize c	$ptrType(sum32).prototype.BlockSize = function() {
		var s;
		s = this;
  �		return 1;
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).BlockSize d	$ptrType(sum32a).prototype.BlockSize = function() {
		var s;
		s = this;
  �		return 1;
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).BlockSize c	$ptrType(sum64).prototype.BlockSize = function() {
		var s;
		s = this;
  		return 1;
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).BlockSize d	$ptrType(sum64a).prototype.BlockSize = function() {
		var s;
		s = this;
  1		return 1;
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum128).BlockSize ��	sum128.prototype.BlockSize = function() {
		var s;
		s = this.$val;
  `		return 1;
    	};
	$ptrType(sum128).prototype.BlockSize = function() { return (new sum128(this.$get())).BlockSize(); };
sum128hash/fnv.sum128 (*hash/fnv.sum128a).BlockSize ��	sum128a.prototype.BlockSize = function() {
		var s;
		s = this.$val;
  �		return 1;
    	};
	$ptrType(sum128a).prototype.BlockSize = function() { return (new sum128a(this.$get())).BlockSize(); };
sum128ahash/fnv.sum128a (*hash/fnv.sum32).Sum �	$ptrType(sum32).prototype.Sum = function(in$1) {
		var in$1, s, v;
		s = this;
  �		v = ((s.$get() >>> 0));
  �		return $append(in$1, (((v >>> 24 >>> 0) << 24 >>> 24)), (((v >>> 16 >>> 0) << 24 >>> 24)), (((v >>> 8 >>> 0) << 24 >>> 24)), ((v << 24 >>> 24)));
    	};
sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum �	$ptrType(sum32a).prototype.Sum = function(in$1) {
		var in$1, s, v;
		s = this;
  C		v = ((s.$get() >>> 0));
  T		return $append(in$1, (((v >>> 24 >>> 0) << 24 >>> 24)), (((v >>> 16 >>> 0) << 24 >>> 24)), (((v >>> 8 >>> 0) << 24 >>> 24)), ((v << 24 >>> 24)));
    	};
sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum �	$ptrType(sum64).prototype.Sum = function(in$1) {
		var in$1, s, v, x;
		s = this;
  �		v = ((x = s.$get(), new $Uint64(x.$high, x.$low)));
  �		return $append(in$1, (($shiftRightUint64(v, 56).$low << 24 >>> 24)), (($shiftRightUint64(v, 48).$low << 24 >>> 24)), (($shiftRightUint64(v, 40).$low << 24 >>> 24)), (($shiftRightUint64(v, 32).$low << 24 >>> 24)), (($shiftRightUint64(v, 24).$low << 24 >>> 24)), (($shiftRightUint64(v, 16).$low << 24 >>> 24)), (($shiftRightUint64(v, 8).$low << 24 >>> 24)), ((v.$low << 24 >>> 24)));
    	};
sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum �	$ptrType(sum64a).prototype.Sum = function(in$1) {
		var in$1, s, v, x;
		s = this;
  t		v = ((x = s.$get(), new $Uint64(x.$high, x.$low)));
  �		return $append(in$1, (($shiftRightUint64(v, 56).$low << 24 >>> 24)), (($shiftRightUint64(v, 48).$low << 24 >>> 24)), (($shiftRightUint64(v, 40).$low << 24 >>> 24)), (($shiftRightUint64(v, 32).$low << 24 >>> 24)), (($shiftRightUint64(v, 24).$low << 24 >>> 24)), (($shiftRightUint64(v, 16).$low << 24 >>> 24)), (($shiftRightUint64(v, 8).$low << 24 >>> 24)), ((v.$low << 24 >>> 24)));
    	};
sum64ahash/fnv.sum64a (*hash/fnv.sum128).Sum ��	sum128.prototype.Sum = function(in$1) {
		var in$1, s;
		s = this.$val;
  '		return $append(in$1, (($shiftRightUint64(s[0], 56).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 48).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 40).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 32).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 24).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 16).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 8).$low << 24 >>> 24)), ((s[0].$low << 24 >>> 24)), (($shiftRightUint64(s[1], 56).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 48).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 40).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 32).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 24).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 16).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 8).$low << 24 >>> 24)), ((s[1].$low << 24 >>> 24)));
    	};
	$ptrType(sum128).prototype.Sum = function(in$1) { return (new sum128(this.$get())).Sum(in$1); };
sum128hash/fnv.sum128 (*hash/fnv.sum128a).Sum ��	sum128a.prototype.Sum = function(in$1) {
		var in$1, s;
		s = this.$val;
  d		return $append(in$1, (($shiftRightUint64(s[0], 56).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 48).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 40).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 32).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 24).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 16).$low << 24 >>> 24)), (($shiftRightUint64(s[0], 8).$low << 24 >>> 24)), ((s[0].$low << 24 >>> 24)), (($shiftRightUint64(s[1], 56).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 48).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 40).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 32).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 24).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 16).$low << 24 >>> 24)), (($shiftRightUint64(s[1], 8).$low << 24 >>> 24)), ((s[1].$low << 24 >>> 24)));
    	};
	$ptrType(sum128a).prototype.Sum = function(in$1) { return (new sum128a(this.$get())).Sum(in$1); };
sum128ahash/fnv.sum128a (*hash/fnv.sum32).MarshalBinary ��	$ptrType(sum32).prototype.MarshalBinary = function() {
		var b, s;
		s = this;
  �		b = $makeSlice(sliceType, 0, 8);
  		b = $appendSlice(b, "fnv\x01");
  		b = appendUint32(b, ((s.$get() >>> 0)));
  =		return [b, $ifaceNil];
    	};
sum32hash/fnv.appendUint32hash/fnv.sliceTypehash/fnv.sum32  (*hash/fnv.sum32a).MarshalBinary ��	$ptrType(sum32a).prototype.MarshalBinary = function() {
		var b, s;
		s = this;
  �		b = $makeSlice(sliceType, 0, 8);
  �		b = $appendSlice(b, "fnv\x02");
  �		b = appendUint32(b, ((s.$get() >>> 0)));
  �		return [b, $ifaceNil];
    	};
sum32ahash/fnv.appendUint32hash/fnv.sliceTypehash/fnv.sum32a (*hash/fnv.sum64).MarshalBinary �	$ptrType(sum64).prototype.MarshalBinary = function() {
		var b, s, x;
		s = this;
  *		b = $makeSlice(sliceType, 0, 12);
  Q		b = $appendSlice(b, "fnv\x03");
  l		b = appendUint64(b, ((x = s.$get(), new $Uint64(x.$high, x.$low))));
  �		return [b, $ifaceNil];
    	};
sum64hash/fnv.appendUint64hash/fnv.sliceTypehash/fnv.sum64  (*hash/fnv.sum64a).MarshalBinary �	$ptrType(sum64a).prototype.MarshalBinary = function() {
		var b, s, x;
		s = this;
  �		b = $makeSlice(sliceType, 0, 12);
  �		b = $appendSlice(b, "fnv\x04");
  		b = appendUint64(b, ((x = s.$get(), new $Uint64(x.$high, x.$low))));
  7		return [b, $ifaceNil];
    	};
sum64ahash/fnv.appendUint64hash/fnv.sliceTypehash/fnv.sum64a  (*hash/fnv.sum128).MarshalBinary �u	sum128.prototype.MarshalBinary = function() {
		var b, s;
		s = this.$val;
  |		b = $makeSlice(sliceType, 0, 20);
  �		b = $appendSlice(b, "fnv\x05");
  �		b = appendUint64(b, s[0]);
  �		b = appendUint64(b, s[1]);
  �		return [b, $ifaceNil];
    	};
	$ptrType(sum128).prototype.MarshalBinary = function() { return (new sum128(this.$get())).MarshalBinary(); };
sum128hash/fnv.appendUint64hash/fnv.sliceTypehash/fnv.sum128 !(*hash/fnv.sum128a).MarshalBinary �x	sum128a.prototype.MarshalBinary = function() {
		var b, s;
		s = this.$val;
  <		b = $makeSlice(sliceType, 0, 20);
  d		b = $appendSlice(b, "fnv\x06");
  �		b = appendUint64(b, s[0]);
  �		b = appendUint64(b, s[1]);
  �		return [b, $ifaceNil];
    	};
	$ptrType(sum128a).prototype.MarshalBinary = function() { return (new sum128a(this.$get())).MarshalBinary(); };
sum128ahash/fnv.appendUint64hash/fnv.sliceTypehash/fnv.sum128a !(*hash/fnv.sum32).UnmarshalBinary ��	$ptrType(sum32).prototype.UnmarshalBinary = function(b) {
		var b, s;
		s = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x01")) {
  ?			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 8))) {
  �			return errors.New("hash/fnv: invalid hash state size");
    		}
  �		s.$set(((readUint32($subslice(b, 4)) >>> 0)));
  �		return $ifaceNil;
    	};
sum32
errors.Newhash/fnv.readUint32hash/fnv.sum32 "(*hash/fnv.sum32a).UnmarshalBinary ��	$ptrType(sum32a).prototype.UnmarshalBinary = function(b) {
		var b, s;
		s = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x02")) {
  �			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 8))) {
  �			return errors.New("hash/fnv: invalid hash state size");
    		}
  !		s.$set(((readUint32($subslice(b, 4)) >>> 0)));
  A		return $ifaceNil;
    	};
sum32a
errors.Newhash/fnv.readUint32hash/fnv.sum32a !(*hash/fnv.sum64).UnmarshalBinary ��	$ptrType(sum64).prototype.UnmarshalBinary = function(b) {
		var b, s, x;
		s = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x03")) {
  �			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 12))) {
  (			return errors.New("hash/fnv: invalid hash state size");
    		}
  c		s.$set(((x = readUint64($subslice(b, 4)), new sum64(x.$high, x.$low))));
  �		return $ifaceNil;
    	};
sum64
errors.Newhash/fnv.readUint64hash/fnv.sum64 "(*hash/fnv.sum64a).UnmarshalBinary ��	$ptrType(sum64a).prototype.UnmarshalBinary = function(b) {
		var b, s, x;
		s = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x04")) {
   			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 12))) {
   m			return errors.New("hash/fnv: invalid hash state size");
    		}
   �		s.$set(((x = readUint64($subslice(b, 4)), new sum64a(x.$high, x.$low))));
   �		return $ifaceNil;
    	};
sum64a
errors.Newhash/fnv.readUint64hash/fnv.sum64a "(*hash/fnv.sum128).UnmarshalBinary �e	sum128.prototype.UnmarshalBinary = function(b) {
		var b, s;
		s = this.$val;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x05")) {
  !Q			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 20))) {
  !�			return errors.New("hash/fnv: invalid hash state size");
    		}
  !�		s.nilCheck, s[0] = readUint64($subslice(b, 4));
  "			s.nilCheck, s[1] = readUint64($subslice(b, 12));
  "$		return $ifaceNil;
    	};
	$ptrType(sum128).prototype.UnmarshalBinary = function(b) { return (new sum128(this.$get())).UnmarshalBinary(b); };
sum128
errors.Newhash/fnv.readUint64hash/fnv.sum128 #(*hash/fnv.sum128a).UnmarshalBinary �h	sum128a.prototype.UnmarshalBinary = function(b) {
		var b, s;
		s = this.$val;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "fnv\x06")) {
  "�			return errors.New("hash/fnv: invalid hash state identifier");
    		}
    		if (!((b.$length === 20))) {
  #			return errors.New("hash/fnv: invalid hash state size");
    		}
  #O		s.nilCheck, s[0] = readUint64($subslice(b, 4));
  #i		s.nilCheck, s[1] = readUint64($subslice(b, 12));
  #�		return $ifaceNil;
    	};
	$ptrType(sum128a).prototype.UnmarshalBinary = function(b) { return (new sum128a(this.$get())).UnmarshalBinary(b); };
sum128a
errors.Newhash/fnv.readUint64hash/fnv.sum128a hash/fnv.readUint32hash/fnv
readUint32 
readUint32��	readUint32 = function(b) {
		var b;
  #�		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  #�		return ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};

readUint32hash/fnv.readUint32 hash/fnv.appendUint32hash/fnvappendUint32 appendUint32�	appendUint32 = function(b, x) {
		var a, b, x;
  $?		a = $toNativeArray($kindUint8, [(((x >>> 24 >>> 0) << 24 >>> 24)), (((x >>> 16 >>> 0) << 24 >>> 24)), (((x >>> 8 >>> 0) << 24 >>> 24)), ((x << 24 >>> 24))]);
  $�		return $appendSlice(b, new sliceType(a));
    	};
appendUint32hash/fnv.appendUint32hash/fnv.sliceType hash/fnv.appendUint64hash/fnvappendUint64 appendUint64��	appendUint64 = function(b, x) {
		var a, b, x;
  $�		a = $toNativeArray($kindUint8, [(($shiftRightUint64(x, 56).$low << 24 >>> 24)), (($shiftRightUint64(x, 48).$low << 24 >>> 24)), (($shiftRightUint64(x, 40).$low << 24 >>> 24)), (($shiftRightUint64(x, 32).$low << 24 >>> 24)), (($shiftRightUint64(x, 24).$low << 24 >>> 24)), (($shiftRightUint64(x, 16).$low << 24 >>> 24)), (($shiftRightUint64(x, 8).$low << 24 >>> 24)), ((x.$low << 24 >>> 24))]);
  %n		return $appendSlice(b, new sliceType(a));
    	};
appendUint64hash/fnv.appendUint64hash/fnv.sliceType hash/fnv.readUint64hash/fnv
readUint64 
readUint64�T	readUint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  %�		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  %�		return (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
    	};

readUint64hash/fnv.readUint64 ��{"Base":9814,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/fnv/fnv.go","Base":1,"Size":9812,"Lines":[0,55,109,159,160,237,297,304,367,370,437,509,566,578,579,588,598,606,619,621,622,629,645,661,677,693,712,731,733,734,742,772,812,850,888,916,949,974,996,998,999,1046,1113,1140,1164,1175,1177,1178,1227,1294,1322,1347,1358,1360,1361,1408,1475,1502,1526,1537,1539,1540,1589,1656,1684,1709,1720,1722,1723,1772,1839,1865,1879,1903,1926,1937,1939,1940,1991,2058,2085,2100,2124,2147,2158,2160,2161,2205,2249,2293,2337,2413,2489,2490,2544,2598,2652,2706,2707,2757,2769,2795,2813,2832,2835,2846,2869,2871,2872,2923,2935,2961,2981,2999,3002,3013,3036,3038,3039,3089,3101,3127,3145,3164,3167,3178,3201,3203,3204,3255,3267,3293,3313,3331,3334,3345,3368,3370,3371,3422,3448,3480,3524,3573,3596,3608,3620,3640,3643,3666,3668,3669,3721,3747,3767,3799,3843,3892,3915,3927,3939,3942,3965,3967,3968,4010,4052,4094,4136,4179,4222,4223,4270,4317,4364,4411,4458,4505,4506,4546,4563,4629,4631,4632,4673,4690,4756,4758,4759,4799,4816,4934,4936,4937,4978,4995,5113,5115,5116,5157,5176,5301,5426,5429,5431,5432,5474,5493,5618,5743,5746,5748,5749,5757,5787,5817,5847,5877,5907,5937,5974,6011,6051,6053,6054,6104,6143,6170,6203,6218,6220,6221,6272,6311,6339,6372,6387,6389,6390,6440,6479,6506,6539,6554,6555,6557,6558,6609,6648,6676,6709,6724,6726,6727,6778,6818,6846,6873,6900,6915,6917,6918,6970,7010,7039,7066,7093,7108,7110,7111,7161,7228,7291,7294,7326,7383,7386,7417,7429,7431,7432,7483,7553,7616,7619,7651,7708,7711,7743,7755,7757,7758,7808,7875,7938,7941,7973,8030,8033,8064,8076,8078,8079,8130,8200,8263,8266,8298,8355,8358,8390,8402,8404,8405,8456,8526,8589,8592,8625,8682,8685,8711,8738,8750,8752,8753,8805,8878,8941,8944,8977,9034,9037,9063,9090,9102,9104,9105,9140,9150,9227,9229,9230,9277,9292,9309,9326,9342,9353,9356,9383,9385,9386,9433,9448,9465,9482,9499,9516,9533,9550,9566,9577,9580,9607,9609,9610,9645,9655,9734,9810],"Infos":null}]}
 