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
GoLinkname�� Implementation�� 	Reference��   �{���
hash/crc32crc32errorshashsyncsync/atomic��i ��datatabTable polyHash32hashcrcpHashSum32Writerio	BlockSizeResetSizeSumbWritenerrcrc32
CastagnoliChecksumChecksumIEEEIEEE	IEEETableKoopman	MakeTableNewNewIEEEUpdateC ���;x 	*F   ( - 	 F   = 	 C ���� *V RC ��1�.*F  	 _ * F  l n F   nC �	T � *F  !	 � %� 	  ' � ,  	T � 29 � <   F   L   Q U� � T �9  W %� ] _ T �c i t}�*�4�7�A�Q�\Lc	k�t '��99 2�9 errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Tablea	Table = $pkg.Table = $newType(1024, $kindArray, "crc32.Table", true, "hash/crc32", true, null);
	Table.init($Uint32, 256);
Tablehash/crc32.Table  digest�	digest = $pkg.digest = $newType(0, $kindStruct, "crc32.digest", true, "hash/crc32", false, function(crc_, tab_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.crc = 0;
			this.tab = ptrType.nil;
			return;
		}
		this.crc = crc_;
		this.tab = tab_;
	});
��	ptrType$3.methods = [{prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum32", name: "Sum32", pkg: "", typ: $funcType([], [$Uint32], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}];
��	digest.init("hash/crc32", [{prop: "crc", name: "crc", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "tab", name: "tab", embedded: false, exported: false, typ: ptrType, tag: ""}]);
digesthash/crc32.digesthash/crc32.ptrTypehash/crc32.ptrType$3hash/crc32.sliceType  slicing8Tablez	slicing8Table = $pkg.slicing8Table = $newType(8192, $kindArray, "crc32.slicing8Table", true, "hash/crc32", false, null);
	slicing8Table.init(Table, 8);
slicing8Tablehash/crc32.Tablehash/crc32.slicing8Table  ptrType	ptrType = $ptrType(Table);
ptrTypehash/crc32.Table  	ptrType$1&	ptrType$1 = $ptrType(slicing8Table);
	ptrType$1hash/crc32.slicing8Table  	ptrType$2 	ptrType$2 = $ptrType($Uint32);
	ptrType$2  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType'	arrayType = $arrayType($Uint8, 1024);
	arrayType  arrayType$1)	arrayType$1 = $arrayType($Uint32, 256);
arrayType$1  arrayType$2%	arrayType$2 = $arrayType(Table, 8);
arrayType$2hash/crc32.Table  	ptrType$3	ptrType$3 = $ptrType(digest);
	ptrType$3hash/crc32.digest  castagnoliTable!		castagnoliTable = ptrType.nil;
castagnoliTablehash/crc32.Tablehash/crc32.castagnoliTablehash/crc32.ptrType  castagnoliTable8$		castagnoliTable8 = ptrType$1.nil;
castagnoliTable8hash/crc32.castagnoliTable8hash/crc32.ptrType$1hash/crc32.slicing8Table  castagnoliArchImpl		castagnoliArchImpl = false;
castagnoliArchImplhash/crc32.castagnoliArchImpl  updateCastagnoli,		updateCastagnoli = $throwNilPointerError;
updateCastagnolihash/crc32.updateCastagnoli  castagnoliOnceC		castagnoliOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
castagnoliOncehash/crc32.castagnoliOnce
sync.Mutex	sync.Once  haveCastagnolihaveCastagnoli$24ptr		haveCastagnoli = 0;
haveCastagnolihash/crc32.haveCastagnoli  	IEEETable  
ieeeTable8		ieeeTable8 = ptrType$1.nil;

ieeeTable8hash/crc32.ieeeTable8hash/crc32.ptrType$1  ieeeArchImpl		ieeeArchImpl = false;
ieeeArchImplhash/crc32.ieeeArchImpl  
updateIEEE&		updateIEEE = $throwNilPointerError;

updateIEEEhash/crc32.updateIEEE  ieeeOnce=		ieeeOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
ieeeOncehash/crc32.ieeeOnce
sync.Mutex	sync.Once  5  �		$pkg.IEEETable = simpleMakeTable(3988292384);
hash/crc32.IEEETablehash/crc32.simpleMakeTable hash/crc32.castagnoliInit
hash/crc32castagnoliInit castagnoliInit��	castagnoliInit = function() {
  �		castagnoliTable = simpleMakeTable(2197175160);
  �		castagnoliArchImpl = archAvailableCastagnoli();
    		if (castagnoliArchImpl) {
  			archInitCastagnoli();
  3			updateCastagnoli = archUpdateCastagnoli;
    		} else {
  �			castagnoliTable8 = slicingMakeTable(2197175160);
  �			updateCastagnoli = (function(crc, p) {
				var crc, p;
  �				return slicingUpdate(crc, castagnoliTable8, p);
    			});
    		}
  3		atomic.StoreUint32((haveCastagnoli$24ptr || (haveCastagnoli$24ptr = new ptrType$2(function() { return haveCastagnoli; }, function($v) { haveCastagnoli = $v; }))), 1);
    	};
castagnoliInit"hash/crc32.archAvailableCastagnolihash/crc32.archInitCastagnolihash/crc32.archUpdateCastagnolihash/crc32.castagnoliArchImplhash/crc32.castagnoliInithash/crc32.castagnoliTablehash/crc32.castagnoliTable8hash/crc32.haveCastagnolihash/crc32.ptrType$2hash/crc32.simpleMakeTablehash/crc32.slicingMakeTablehash/crc32.slicingUpdatehash/crc32.updateCastagnolisync/atomic.StoreUint32 hash/crc32.ieeeInit
hash/crc32ieeeInit ieeeInit�i	ieeeInit = function() {
  s		ieeeArchImpl = archAvailableIEEE();
    		if (ieeeArchImpl) {
  �			archInitIEEE();
  �			updateIEEE = archUpdateIEEE;
    		} else {
  			ieeeTable8 = slicingMakeTable(3988292384);
  3			updateIEEE = (function(crc, p) {
				var crc, p;
  g				return slicingUpdate(crc, ieeeTable8, p);
    			});
    		}
    	};
ieeeInit	hash/crc32.archAvailableIEEEhash/crc32.archInitIEEEhash/crc32.archUpdateIEEEhash/crc32.ieeeArchImplhash/crc32.ieeeInithash/crc32.ieeeTable8hash/crc32.slicingMakeTablehash/crc32.slicingUpdatehash/crc32.updateIEEE hash/crc32.MakeTable
hash/crc32	MakeTable 	MakeTable��	MakeTable = function(poly) {
		var _1, poly, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; poly = $f.poly; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    			_1 = poly;
  K			/* */ if (_1 === (3988292384)) { $s = 2; continue; }
			/* */ if (_1 === (2197175160)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (_1 === (3988292384)) { */ case 2:
  X				$r = ieeeOnce.Do(ieeeInit); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  p				$s = -1; return $pkg.IEEETable;
    			/* } else if (_1 === (2197175160)) { */ case 3:
  �				$r = castagnoliOnce.Do(castagnoliInit); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �				$s = -1; return castagnoliTable;
    			/* } */ case 4:
    		case 1:
  �		$s = -1; return simpleMakeTable(poly);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeTable }; } $f._1 = _1; $f.poly = poly; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeTable = MakeTable;
	MakeTablehash/crc32.IEEETablehash/crc32.MakeTablehash/crc32.castagnoliInithash/crc32.castagnoliOncehash/crc32.castagnoliTablehash/crc32.ieeeInithash/crc32.ieeeOncehash/crc32.simpleMakeTable hash/crc32.New
hash/crc32New New��	New = function(tab) {
		var tab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; tab = $f.tab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (tab === $pkg.IEEETable) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (tab === $pkg.IEEETable) { */ case 1:
  �			$r = ieeeOnce.Do(ieeeInit); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
  		$s = -1; return new digest.ptr(0, tab);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: New }; } $f.tab = tab; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.New = New;
Newhash/crc32.IEEETablehash/crc32.Newhash/crc32.digesthash/crc32.ieeeInithash/crc32.ieeeOnce hash/crc32.NewIEEE
hash/crc32NewIEEE NewIEEE�\	NewIEEE = function() {
		var $24r, _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  z		_r = New($pkg.IEEETable); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: NewIEEE }; } $f.$24r = $24r; $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.NewIEEE = NewIEEE;
NewIEEEhash/crc32.IEEETablehash/crc32.Newhash/crc32.NewIEEE (*hash/crc32.digest).Size ��	digest.ptr.prototype.Size = function() {
		var d;
		d = this;
  �		return 4;
    	};
	digest.prototype.Size = function() { return this.$val.Size(); };
digesthash/crc32.digest (*hash/crc32.digest).BlockSize ��	digest.ptr.prototype.BlockSize = function() {
		var d;
		d = this;
  �		return 1;
    	};
	digest.prototype.BlockSize = function() { return this.$val.BlockSize(); };
digesthash/crc32.digest (*hash/crc32.digest).Reset ��	digest.ptr.prototype.Reset = function() {
		var d;
		d = this;
  
		d.crc = 0;
    	};
	digest.prototype.Reset = function() { return this.$val.Reset(); };
digesthash/crc32.digest "(*hash/crc32.digest).MarshalBinary ��	digest.ptr.prototype.MarshalBinary = function() {
		var _arg, _arg$1, _r, _r$1, b, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; b = $f.b; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  �		b = $makeSlice(sliceType, 0, 12);
  �		b = $appendSlice(b, "crc\x01");
  �		_arg = b;
		_r = tableSum(d.tab); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = _r;
		_r$1 = appendUint32(_arg, _arg$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		b = _r$1;
  �		b = appendUint32(b, d.crc);
  		$s = -1; return [b, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.MarshalBinary }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
digesthash/crc32.appendUint32hash/crc32.digesthash/crc32.sliceTypehash/crc32.tableSum $(*hash/crc32.digest).UnmarshalBinary �8	digest.ptr.prototype.UnmarshalBinary = function(b) {
		var _r, b, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "crc\x01")) {
  �			$s = -1; return errors.New("hash/crc32: invalid hash state identifier");
    		}
    		if (!((b.$length === 12))) {
  �			$s = -1; return errors.New("hash/crc32: invalid hash state size");
    		}
  7		_r = tableSum(d.tab); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((_r === readUint32($subslice(b, 4))))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((_r === readUint32($subslice(b, 4))))) { */ case 1:
  c			$s = -1; return errors.New("hash/crc32: tables do not match");
    		/* } */ case 2:
  �		d.crc = readUint32($subslice(b, 8));
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.UnmarshalBinary }; } $f._r = _r; $f.b = b; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.UnmarshalBinary = function(b) { return this.$val.UnmarshalBinary(b); };
digest
errors.Newhash/crc32.digesthash/crc32.readUint32hash/crc32.tableSum hash/crc32.appendUint32
hash/crc32appendUint32 appendUint32�	appendUint32 = function(b, x) {
		var a, b, x;
  �		a = $toNativeArray($kindUint8, [(((x >>> 24 >>> 0) << 24 >>> 24)), (((x >>> 16 >>> 0) << 24 >>> 24)), (((x >>> 8 >>> 0) << 24 >>> 24)), ((x << 24 >>> 24))]);
  D		return $appendSlice(b, new sliceType(a));
    	};
appendUint32hash/crc32.appendUint32hash/crc32.sliceType hash/crc32.readUint32
hash/crc32
readUint32 
readUint32��	readUint32 = function(b) {
		var b;
  �		$unused((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]));
  �		return ((((((((3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]) >>> 0)) | ((((2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]) >>> 0)) << 24 >>> 0)) >>> 0;
    	};

readUint32hash/crc32.readUint32 hash/crc32.Update
hash/crc32Update Update�r	Update = function(crc, tab, p) {
		var $24r, $24r$1, _r, _r$1, crc, p, tab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; crc = $f.crc; p = $f.p; tab = $f.tab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  b			/* */ if (!((atomic.LoadUint32((haveCastagnoli$24ptr || (haveCastagnoli$24ptr = new ptrType$2(function() { return haveCastagnoli; }, function($v) { haveCastagnoli = $v; })))) === 0)) && tab === castagnoliTable) { $s = 2; continue; }
			/* */ if (tab === $pkg.IEEETable) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!((atomic.LoadUint32((haveCastagnoli$24ptr || (haveCastagnoli$24ptr = new ptrType$2(function() { return haveCastagnoli; }, function($v) { haveCastagnoli = $v; })))) === 0)) && tab === castagnoliTable) { */ case 2:
  �				_r = updateCastagnoli(crc, p); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 7; case 7: return $24r;
    			/* } else if (tab === $pkg.IEEETable) { */ case 3:
  �				$r = ieeeOnce.Do(ieeeInit); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �				_r$1 = updateIEEE(crc, p); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				$24r$1 = _r$1;
				$s = 10; case 10: return $24r$1;
    			/* } else { */ case 4:
  �				$s = -1; return simpleUpdate(crc, tab, p);
    			/* } */ case 5:
    		case 1:
    		$s = -1; return 0;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Update }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f.crc = crc; $f.p = p; $f.tab = tab; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Update = Update;
Updatehash/crc32.IEEETablehash/crc32.Updatehash/crc32.castagnoliTablehash/crc32.haveCastagnolihash/crc32.ieeeInithash/crc32.ieeeOncehash/crc32.ptrType$2hash/crc32.simpleUpdatehash/crc32.updateCastagnolihash/crc32.updateIEEEsync/atomic.LoadUint32 (*hash/crc32.digest).Write ��	digest.ptr.prototype.Write = function(p) {
		var _r, _r$1, _tmp, _tmp$1, d, err, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; d = $f.d; err = $f.err; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
  )			/* */ if (!((atomic.LoadUint32((haveCastagnoli$24ptr || (haveCastagnoli$24ptr = new ptrType$2(function() { return haveCastagnoli; }, function($v) { haveCastagnoli = $v; })))) === 0)) && d.tab === castagnoliTable) { $s = 2; continue; }
			/* */ if (d.tab === $pkg.IEEETable) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!((atomic.LoadUint32((haveCastagnoli$24ptr || (haveCastagnoli$24ptr = new ptrType$2(function() { return haveCastagnoli; }, function($v) { haveCastagnoli = $v; })))) === 0)) && d.tab === castagnoliTable) { */ case 2:
  u				_r = updateCastagnoli(d.crc, p); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				d.crc = _r;
    				$s = 5; continue;
    			/* } else if (d.tab === $pkg.IEEETable) { */ case 3:
  				_r$1 = updateIEEE(d.crc, p); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				d.crc = _r$1;
    				$s = 5; continue;
			/* } else { */ case 4:
  D				d.crc = simpleUpdate(d.crc, d.tab, p);
    			/* } */ case 5:
    		case 1:
    		_tmp = p.$length;
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Write }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.d = d; $f.err = err; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Write = function(p) { return this.$val.Write(p); };
digest	hash/crc32.IEEETablehash/crc32.castagnoliTablehash/crc32.digesthash/crc32.haveCastagnolihash/crc32.ptrType$2hash/crc32.simpleUpdatehash/crc32.updateCastagnolihash/crc32.updateIEEEsync/atomic.LoadUint32 (*hash/crc32.digest).Sum32 ��	digest.ptr.prototype.Sum32 = function() {
		var d;
		d = this;
  �		return d.crc;
    	};
	digest.prototype.Sum32 = function() { return this.$val.Sum32(); };
digesthash/crc32.digest (*hash/crc32.digest).Sum �K	digest.ptr.prototype.Sum = function(in$1) {
		var d, in$1, s;
		d = this;
  �		s = d.Sum32();
  �		return $append(in$1, (((s >>> 24 >>> 0) << 24 >>> 24)), (((s >>> 16 >>> 0) << 24 >>> 24)), (((s >>> 8 >>> 0) << 24 >>> 24)), ((s << 24 >>> 24)));
    	};
	digest.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
digesthash/crc32.digest hash/crc32.Checksum
hash/crc32Checksum Checksum��	Checksum = function(data, tab) {
		var $24r, _r, data, tab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; data = $f.data; tab = $f.tab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = Update(0, tab, data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Checksum }; } $f.$24r = $24r; $f._r = _r; $f.data = data; $f.tab = tab; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Checksum = Checksum;
Checksumhash/crc32.Checksumhash/crc32.Update hash/crc32.ChecksumIEEE
hash/crc32ChecksumIEEE ChecksumIEEE�(	ChecksumIEEE = function(data) {
		var $24r, _r, data, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; data = $f.data; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  `		$r = ieeeOnce.Do(ieeeInit); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  w		_r = updateIEEE(0, data); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ChecksumIEEE }; } $f.$24r = $24r; $f._r = _r; $f.data = data; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ChecksumIEEE = ChecksumIEEE;
ChecksumIEEEhash/crc32.ChecksumIEEEhash/crc32.ieeeInithash/crc32.ieeeOncehash/crc32.updateIEEE hash/crc32.tableSum
hash/crc32tableSum tableSum�r	tableSum = function(t) {
		var $24r, _i, _r, _ref, a, b, t, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _i = $f._i; _r = $f._r; _ref = $f._ref; a = $f.a; b = $f.b; t = $f.t; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		a = arrayType.zero();
  �		b = $subslice(new sliceType(a), 0, 0);
    		if (!(t === ptrType.nil)) {
  			_ref = t;
			_i = 0;
			while (true) {
				if (!(_i < 256)) { break; }
				x$1 = (x = _ref, ((_i < 0 || _i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_i]));
  0				b = appendUint32(b, x$1);
    				_i++;
			}
    		}
  O		_r = ChecksumIEEE(b); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: tableSum }; } $f.$24r = $24r; $f._i = _i; $f._r = _r; $f._ref = _ref; $f.a = a; $f.b = b; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
tableSumhash/crc32.ChecksumIEEEhash/crc32.appendUint32hash/crc32.arrayTypehash/crc32.ptrTypehash/crc32.sliceTypehash/crc32.tableSum hash/crc32.simpleMakeTable
hash/crc32simpleMakeTable simpleMakeTable��	simpleMakeTable = function(poly) {
		var poly, t;
  "		t = arrayType$1.zero();
  "(		simplePopulateTable(poly, t);
  "F		return t;
    	};
simpleMakeTablehash/crc32.arrayType$1hash/crc32.simpleMakeTablehash/crc32.simplePopulateTable hash/crc32.simplePopulateTable
hash/crc32simplePopulateTable simplePopulateTable�X	simplePopulateTable = function(poly, t) {
		var crc, i, j, poly, t, y;
  "�		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  #			crc = ((i >>> 0));
  #(			j = 0;
			while (true) {
				if (!(j < 8)) { break; }
    				if (((crc & 1) >>> 0) === 1) {
  #T					crc = (((crc >>> 1 >>> 0)) ^ poly) >>> 0;
    				} else {
  #|					crc = (y = (1), y < 32 ? (crc >>> y) : 0) >>> 0;
    				}
  #7				j = j + (1) >> 0;
    			}
  #�			t.nilCheck, ((i < 0 || i >= t.length) ? ($throwRuntimeError("index out of range"), undefined) : t[i] = crc);
  #				i = i + (1) >> 0;
    		}
    	};
simplePopulateTablehash/crc32.simplePopulateTable hash/crc32.simpleUpdate
hash/crc32simpleUpdate simpleUpdate�;	simpleUpdate = function(crc, tab, p) {
		var _i, _ref, crc, p, tab, v, x, x$1;
  $b		crc = ~crc >>> 0;
  $n		_ref = p;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  $�			crc = ((x = tab, x$1 = (((crc << 24 >>> 24)) ^ v) << 24 >>> 24, ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) ^ ((crc >>> 8 >>> 0))) >>> 0;
    			_i++;
		}
  $�		return ~crc >>> 0;
    	};
simpleUpdatehash/crc32.simpleUpdate hash/crc32.slicingMakeTable
hash/crc32slicingMakeTable slicingMakeTable��	slicingMakeTable = function(poly) {
		var crc, i, j, poly, t, x, x$1, x$2, x$3, x$4;
  &D		t = arrayType$2.zero();
  &]		simplePopulateTable(poly, t[0]);
  &�		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  &�			crc = (x = t[0], ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i]));
  &�			j = 1;
			while (true) {
				if (!(j < 8)) { break; }
  &�				crc = ((x$1 = t[0], x$2 = (crc & 255) >>> 0, ((x$2 < 0 || x$2 >= x$1.length) ? ($throwRuntimeError("index out of range"), undefined) : x$1[x$2])) ^ ((crc >>> 8 >>> 0))) >>> 0;
  &�				(x$3 = (x$4 = t, ((j < 0 || j >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[j])), ((i < 0 || i >= x$3.length) ? ($throwRuntimeError("index out of range"), undefined) : x$3[i] = crc));
  &�				j = j + (1) >> 0;
    			}
  &�			i = i + (1) >> 0;
    		}
  '		return t;
    	};
slicingMakeTablehash/crc32.Tablehash/crc32.arrayType$1hash/crc32.arrayType$2hash/crc32.simplePopulateTablehash/crc32.slicingMakeTable hash/crc32.slicingUpdate
hash/crc32slicingUpdate slicingUpdate�
	slicingUpdate = function(crc, tab, p) {
		var crc, p, tab, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
    		if (p.$length >= 16) {
  (			crc = ~crc >>> 0;
  (			while (true) {
				if (!(p.$length > 8)) { break; }
  ("				crc = (crc ^ ((((((((((0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]) >>> 0)) | ((((1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]) >>> 0)) << 8 >>> 0)) >>> 0) | ((((2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]) >>> 0)) << 16 >>> 0)) >>> 0) | ((((3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]) >>> 0)) << 24 >>> 0)) >>> 0))) >>> 0;
  (q				crc = ((((((((((((((x = tab[0], x$1 = (7 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 7]), ((x$1 < 0 || x$1 >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[x$1])) ^ (x$2 = tab[1], x$3 = (6 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 6]), ((x$3 < 0 || x$3 >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[x$3]))) >>> 0) ^ (x$4 = tab[2], x$5 = (5 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 5]), ((x$5 < 0 || x$5 >= x$4.length) ? ($throwRuntimeError("index out of range"), undefined) : x$4[x$5]))) >>> 0) ^ (x$6 = tab[3], x$7 = (4 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 4]), ((x$7 < 0 || x$7 >= x$6.length) ? ($throwRuntimeError("index out of range"), undefined) : x$6[x$7]))) >>> 0) ^ (x$8 = tab[4], x$9 = crc >>> 24 >>> 0, ((x$9 < 0 || x$9 >= x$8.length) ? ($throwRuntimeError("index out of range"), undefined) : x$8[x$9]))) >>> 0) ^ (x$10 = tab[5], x$11 = (((crc >>> 16 >>> 0)) & 255) >>> 0, ((x$11 < 0 || x$11 >= x$10.length) ? ($throwRuntimeError("index out of range"), undefined) : x$10[x$11]))) >>> 0) ^ (x$12 = tab[6], x$13 = (((crc >>> 8 >>> 0)) & 255) >>> 0, ((x$13 < 0 || x$13 >= x$12.length) ? ($throwRuntimeError("index out of range"), undefined) : x$12[x$13]))) >>> 0) ^ (x$14 = tab[7], x$15 = (crc & 255) >>> 0, ((x$15 < 0 || x$15 >= x$14.length) ? ($throwRuntimeError("index out of range"), undefined) : x$14[x$15]))) >>> 0;
  )				p = $subslice(p, 8);
    			}
  )"			crc = ~crc >>> 0;
    		}
    		if (p.$length === 0) {
  )D			return crc;
    		}
  )S		return simpleUpdate(crc, tab[0], p);
    	};
slicingUpdatehash/crc32.simpleUpdatehash/crc32.slicingUpdate hash/crc32.archAvailableIEEE
hash/crc32archAvailableIEEE archAvailableIEEE@	archAvailableIEEE = function() {
  *�		return false;
    	};
archAvailableIEEEhash/crc32.archAvailableIEEE hash/crc32.archInitIEEE
hash/crc32archInitIEEE archInitIEEES	archInitIEEE = function() {
  *�		$panic(new $String("not available"));
    	};
archInitIEEEhash/crc32.archInitIEEE hash/crc32.archUpdateIEEE
hash/crc32archUpdateIEEE archUpdateIEEEi	archUpdateIEEE = function(crc, p) {
		var crc, p;
  +F		$panic(new $String("not available"));
    	};
archUpdateIEEEhash/crc32.archUpdateIEEE "hash/crc32.archAvailableCastagnoli
hash/crc32archAvailableCastagnoli archAvailableCastagnoliF	archAvailableCastagnoli = function() {
  +�		return false;
    	};
archAvailableCastagnoli"hash/crc32.archAvailableCastagnoli hash/crc32.archInitCastagnoli
hash/crc32archInitCastagnoli archInitCastagnoliY	archInitCastagnoli = function() {
  +�		$panic(new $String("not available"));
    	};
archInitCastagnolihash/crc32.archInitCastagnoli hash/crc32.archUpdateCastagnoli
hash/crc32archUpdateCastagnoli archUpdateCastagnolio	archUpdateCastagnoli = function(crc, p) {
		var crc, p;
  ,3		$panic(new $String("not available"));
    	};
archUpdateCastagnolihash/crc32.archUpdateCastagnoli ��{"Base":11341,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/crc32/crc32.go","Base":1,"Size":8039,"Lines":[0,55,109,159,160,235,310,326,329,417,420,549,569,583,584,593,603,611,619,634,636,637,680,695,696,723,731,794,861,880,881,925,983,1024,1049,1050,1076,1139,1187,1209,1211,1212,1295,1318,1319,1399,1451,1454,1533,1566,1597,1600,1681,1749,1770,1773,1852,1899,1949,1952,2026,2067,2104,2107,2181,2260,2275,2302,2305,2384,2440,2496,2497,2572,2648,2724,2750,2777,2813,2841,2896,2925,2951,2952,2976,3023,3071,3072,3097,3120,3162,3172,3212,3262,3319,3369,3373,3376,3377,3417,3419,3420,3471,3509,3510,3554,3584,3606,3655,3678,3679,3697,3733,3734,3753,3770,3800,3810,3850,3888,3939,3983,3987,3990,3992,3993,4065,4117,4154,4169,4181,4205,4224,4242,4278,4303,4306,4336,4338,4339,4398,4419,4431,4443,4445,4446,4519,4587,4651,4724,4781,4816,4839,4863,4866,4890,4892,4893,4966,5031,5093,5163,5212,5265,5266,5310,5311,5357,5358,5397,5398,5406,5433,5469,5471,5472,5523,5560,5585,5623,5651,5666,5668,5669,5720,5781,5846,5849,5879,5938,5941,5984,6039,6042,6069,6081,6083,6084,6131,6146,6163,6180,6196,6207,6210,6237,6239,6240,6275,6285,6362,6364,6365,6431,6486,6496,6569,6603,6627,6705,6784,6808,6836,6846,6881,6884,6886,6887,6941,6951,7026,7063,7089,7158,7192,7223,7233,7273,7276,7296,7298,7299,7348,7349,7390,7406,7472,7474,7475,7523,7573,7651,7652,7704,7734,7774,7797,7825,7827,7828,7878,7911,7929,7941,7956,7980,8006,8010,8013,8037],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/crc32/crc32_generic.go","Base":8041,"Size":2577,"Lines":[0,55,109,159,160,241,281,284,361,364,440,466,467,481,482,552,623,642,685,702,732,742,744,745,826,856,906,934,953,980,999,1027,1039,1053,1058,1062,1075,1078,1080,1081,1161,1211,1272,1284,1307,1345,1348,1361,1363,1364,1412,1438,1439,1514,1542,1543,1624,1702,1754,1779,1813,1841,1858,1885,1922,1939,1943,1946,1956,1958,1959,2035,2097,2167,2198,2211,2230,2309,2378,2425,2470,2483,2487,2500,2503,2521,2534,2537,2575],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/hash/crc32/crc32_otherarch.go","Base":10619,"Size":721,"Lines":[0,55,109,159,160,210,250,251,265,266,332,408,484,485,557,639],"Infos":null}]}
 