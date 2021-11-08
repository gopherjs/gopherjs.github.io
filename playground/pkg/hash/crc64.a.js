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
GoLinkname�� Implementation�� 	Reference��   �s���
hash/crc64crc64errorshashsync��i ��datatabTable polyHash64hashcrcpHashSum64Writerio	BlockSizeResetSizeSumbWritenerrcrc64ChecksumECMAISO	MakeTableNewUpdate 	"F     % 
 C ��lW�ׇBC ��       "F  
 M " F  Z \ C �
T n "F  !
 v %x 
  ' � ,  
T � 29 � <   F   L   Q U� � T �9  W %� ] _ T �c irw!{/�?LJ	R�Z '�|99 2�# errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  hash	hash = $packages["hash"];
��    		$r = hash.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Tablea	Table = $pkg.Table = $newType(2048, $kindArray, "crc64.Table", true, "hash/crc64", true, null);
	Table.init($Uint64, 256);
Tablehash/crc64.Table  digest�	digest = $pkg.digest = $newType(0, $kindStruct, "crc64.digest", true, "hash/crc64", false, function(crc_, tab_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.crc = new $Uint64(0, 0);
			this.tab = ptrType$1.nil;
			return;
		}
		this.crc = crc_;
		this.tab = tab_;
	});
��	ptrType$2.methods = [{prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "BlockSize", name: "BlockSize", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Reset", name: "Reset", pkg: "", typ: $funcType([], [], false)}, {prop: "MarshalBinary", name: "MarshalBinary", pkg: "", typ: $funcType([], [sliceType, $error], false)}, {prop: "UnmarshalBinary", name: "UnmarshalBinary", pkg: "", typ: $funcType([sliceType], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType], [$Int, $error], false)}, {prop: "Sum64", name: "Sum64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Sum", name: "Sum", pkg: "", typ: $funcType([sliceType], [sliceType], false)}];
��	digest.init("hash/crc64", [{prop: "crc", name: "crc", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "tab", name: "tab", embedded: false, exported: false, typ: ptrType$1, tag: ""}]);
digesthash/crc64.digesthash/crc64.ptrType$1hash/crc64.ptrType$2hash/crc64.sliceType  	arrayType#	arrayType = $arrayType(Table, 8);
	arrayTypehash/crc64.Table  ptrType 	ptrType = $ptrType(arrayType);
ptrTypehash/crc64.arrayType  	ptrType$1	ptrType$1 = $ptrType(Table);
	ptrType$1hash/crc64.Table  arrayType$1)	arrayType$1 = $arrayType($Uint64, 256);
arrayType$1  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  arrayType$2)	arrayType$2 = $arrayType($Uint8, 2048);
arrayType$2  	ptrType$2	ptrType$2 = $ptrType(digest);
	ptrType$2hash/crc64.digest  slicing8TablesBuildOnceL		slicing8TablesBuildOnce = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
slicing8TablesBuildOnce"hash/crc64.slicing8TablesBuildOnce
sync.Mutex	sync.Once  slicing8TableISO"		slicing8TableISO = ptrType.nil;
slicing8TableISOhash/crc64.Tablehash/crc64.arrayTypehash/crc64.ptrTypehash/crc64.slicing8TableISO  slicing8TableECMA#		slicing8TableECMA = ptrType.nil;
slicing8TableECMAhash/crc64.ptrTypehash/crc64.slicing8TableECMA "hash/crc64.buildSlicing8TablesOnce
hash/crc64buildSlicing8TablesOnce buildSlicing8TablesOnce�$	buildSlicing8TablesOnce = function() {
		var $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ~		$r = slicing8TablesBuildOnce.Do(buildSlicing8Tables); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: buildSlicing8TablesOnce }; } $f.$s = $s; $f.$r = $r; return $f;
	};
buildSlicing8TablesOncehash/crc64.buildSlicing8Tables"hash/crc64.buildSlicing8TablesOnce"hash/crc64.slicing8TablesBuildOnce hash/crc64.buildSlicing8Tables
hash/crc64buildSlicing8Tables buildSlicing8Tables��	buildSlicing8Tables = function() {
  �		slicing8TableISO = makeSlicingBy8Table(makeTable(new $Uint64(3623878656, 0)));
  		slicing8TableECMA = makeSlicingBy8Table(makeTable(new $Uint64(3379320725, 3615952706)));
    	};
buildSlicing8Tableshash/crc64.buildSlicing8Tableshash/crc64.makeSlicingBy8Tablehash/crc64.makeTablehash/crc64.slicing8TableECMAhash/crc64.slicing8TableISO hash/crc64.MakeTable
hash/crc64	MakeTable 	MakeTable�	MakeTable = function(poly) {
		var _1, poly, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _1 = $f._1; poly = $f.poly; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = buildSlicing8TablesOnce(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		_1 = poly;
    		if ((x = new $Uint64(3623878656, 0), (_1.$high === x.$high && _1.$low === x.$low))) {
  			$s = -1; return slicing8TableISO[0];
    		} else if ((x$1 = new $Uint64(3379320725, 3615952706), (_1.$high === x$1.$high && _1.$low === x$1.$low))) {
  E			$s = -1; return slicing8TableECMA[0];
    		} else {
  n			$s = -1; return makeTable(poly);
    		}
    		$s = -1; return ptrType$1.nil;
		/* */ } return; } if ($f === undefined) { $f = { $blk: MakeTable }; } $f._1 = _1; $f.poly = poly; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.MakeTable = MakeTable;
	MakeTablehash/crc64.MakeTablehash/crc64.Table"hash/crc64.buildSlicing8TablesOncehash/crc64.makeTablehash/crc64.ptrType$1hash/crc64.slicing8TableECMAhash/crc64.slicing8TableISO hash/crc64.makeTable
hash/crc64	makeTable 	makeTable��	makeTable = function(poly) {
		var crc, i, j, poly, t, x, x$1;
  �		t = arrayType$1.zero();
  �		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  �			crc = (new $Uint64(0, i));
  �			j = 0;
			while (true) {
				if (!(j < 8)) { break; }
    				if ((x = new $Uint64(crc.$high & 0, (crc.$low & 1) >>> 0), (x.$high === 0 && x.$low === 1))) {
  "					crc = (x$1 = $shiftRightUint64(crc, 1), new $Uint64(x$1.$high ^ poly.$high, (x$1.$low ^ poly.$low) >>> 0));
    				} else {
  J					crc = $shiftRightUint64(crc, (1));
    				}
  				j = j + (1) >> 0;
    			}
  _			t.nilCheck, ((i < 0 || i >= t.length) ? ($throwRuntimeError("index out of range"), undefined) : t[i] = crc);
  �			i = i + (1) >> 0;
    		}
  n		return t;
    	};
	makeTablehash/crc64.arrayType$1hash/crc64.makeTable hash/crc64.makeSlicingBy8Table
hash/crc64makeSlicingBy8Table makeSlicingBy8Table�4	makeSlicingBy8Table = function(t) {
		var crc, helperTable, i, j, t, x, x$1, x$2, x$3, x$4, x$5;
  �		helperTable = arrayType.zero();
  �		Table.copy(helperTable[0], t);
  �		i = 0;
		while (true) {
			if (!(i < 256)) { break; }
  �			crc = (x = t, ((i < 0 || i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[i]));
  			j = 1;
			while (true) {
				if (!(j < 8)) { break; }
   				crc = (x$1 = (x$2 = t, x$3 = new $Uint64(crc.$high & 0, (crc.$low & 255) >>> 0), (($flatten64(x$3) < 0 || $flatten64(x$3) >= x$2.length) ? ($throwRuntimeError("index out of range"), undefined) : x$2[$flatten64(x$3)])), x$4 = $shiftRightUint64(crc, 8), new $Uint64(x$1.$high ^ x$4.$high, (x$1.$low ^ x$4.$low) >>> 0));
  B				(x$5 = ((j < 0 || j >= helperTable.length) ? ($throwRuntimeError("index out of range"), undefined) : helperTable[j]), ((i < 0 || i >= x$5.length) ? ($throwRuntimeError("index out of range"), undefined) : x$5[i] = crc));
  				j = j + (1) >> 0;
    			}
  �			i = i + (1) >> 0;
    		}
  b		return helperTable;
    	};
makeSlicingBy8Tablehash/crc64.Tablehash/crc64.arrayTypehash/crc64.arrayType$1hash/crc64.makeSlicingBy8Table hash/crc64.New
hash/crc64New Newr	New = function(tab) {
		var tab;
  	V		return new digest.ptr(new $Uint64(0, 0), tab);
    	};
	$pkg.New = New;
Newhash/crc64.Newhash/crc64.digest (*hash/crc64.digest).Size ��	digest.ptr.prototype.Size = function() {
		var d;
		d = this;
  	�		return 8;
    	};
	digest.prototype.Size = function() { return this.$val.Size(); };
digesthash/crc64.digest (*hash/crc64.digest).BlockSize ��	digest.ptr.prototype.BlockSize = function() {
		var d;
		d = this;
  	�		return 1;
    	};
	digest.prototype.BlockSize = function() { return this.$val.BlockSize(); };
digesthash/crc64.digest (*hash/crc64.digest).Reset ��	digest.ptr.prototype.Reset = function() {
		var d;
		d = this;
  	�		d.crc = new $Uint64(0, 0);
    	};
	digest.prototype.Reset = function() { return this.$val.Reset(); };
digesthash/crc64.digest "(*hash/crc64.digest).MarshalBinary ��	digest.ptr.prototype.MarshalBinary = function() {
		var _arg, _arg$1, _r, _r$1, b, d, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _arg$1 = $f._arg$1; _r = $f._r; _r$1 = $f._r$1; b = $f.b; d = $f.d; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
  
r		b = $makeSlice(sliceType, 0, 20);
  
�		b = $appendSlice(b, "crc\x02");
  
�		_arg = b;
		_r = tableSum(d.tab); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = _r;
		_r$1 = appendUint64(_arg, _arg$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		b = _r$1;
  
�		b = appendUint64(b, d.crc);
  
�		$s = -1; return [b, $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.MarshalBinary }; } $f._arg = _arg; $f._arg$1 = _arg$1; $f._r = _r; $f._r$1 = _r$1; $f.b = b; $f.d = d; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.MarshalBinary = function() { return this.$val.MarshalBinary(); };
digesthash/crc64.appendUint64hash/crc64.digesthash/crc64.sliceTypehash/crc64.tableSum $(*hash/crc64.digest).UnmarshalBinary ��	digest.ptr.prototype.UnmarshalBinary = function(b) {
		var _r, b, d, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; b = $f.b; d = $f.d; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		d = this;
    		if (b.$length < 4 || !(($bytesToString($subslice(b, 0, 4))) === "crc\x02")) {
  u			$s = -1; return errors.New("hash/crc64: invalid hash state identifier");
    		}
    		if (!((b.$length === 20))) {
  �			$s = -1; return errors.New("hash/crc64: invalid hash state size");
    		}
  		_r = tableSum(d.tab); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		/* */ if (!((x = _r, x$1 = readUint64($subslice(b, 4)), (x.$high === x$1.$high && x.$low === x$1.$low)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((x = _r, x$1 = readUint64($subslice(b, 4)), (x.$high === x$1.$high && x.$low === x$1.$low)))) { */ case 1:
  @			$s = -1; return errors.New("hash/crc64: tables do not match");
    		/* } */ case 2:
  y		d.crc = readUint64($subslice(b, 12));
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.UnmarshalBinary }; } $f._r = _r; $f.b = b; $f.d = d; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.UnmarshalBinary = function(b) { return this.$val.UnmarshalBinary(b); };
digest
errors.Newhash/crc64.digesthash/crc64.readUint64hash/crc64.tableSum hash/crc64.appendUint64
hash/crc64appendUint64 appendUint64��	appendUint64 = function(b, x) {
		var a, b, x;
  �		a = $toNativeArray($kindUint8, [(($shiftRightUint64(x, 56).$low << 24 >>> 24)), (($shiftRightUint64(x, 48).$low << 24 >>> 24)), (($shiftRightUint64(x, 40).$low << 24 >>> 24)), (($shiftRightUint64(x, 32).$low << 24 >>> 24)), (($shiftRightUint64(x, 24).$low << 24 >>> 24)), (($shiftRightUint64(x, 16).$low << 24 >>> 24)), (($shiftRightUint64(x, 8).$low << 24 >>> 24)), ((x.$low << 24 >>> 24))]);
  f		return $appendSlice(b, new sliceType(a));
    	};
appendUint64hash/crc64.appendUint64hash/crc64.sliceType hash/crc64.readUint64
hash/crc64
readUint64 
readUint64�T	readUint64 = function(b) {
		var b, x, x$1, x$10, x$11, x$12, x$13, x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9;
  �		$unused((7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]));
  �		return (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (new $Uint64(0, (7 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 7]))), x$7 = $shiftLeft64((new $Uint64(0, (6 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 6]))), 8), new $Uint64(x$6.$high | x$7.$high, (x$6.$low | x$7.$low) >>> 0)), x$8 = $shiftLeft64((new $Uint64(0, (5 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 5]))), 16), new $Uint64(x$5.$high | x$8.$high, (x$5.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (4 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 4]))), 24), new $Uint64(x$4.$high | x$9.$high, (x$4.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 3]))), 32), new $Uint64(x$3.$high | x$10.$high, (x$3.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (2 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 2]))), 40), new $Uint64(x$2.$high | x$11.$high, (x$2.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (1 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 1]))), 48), new $Uint64(x$1.$high | x$12.$high, (x$1.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (0 >= b.$length ? ($throwRuntimeError("index out of range"), undefined) : b.$array[b.$offset + 0]))), 56), new $Uint64(x.$high | x$13.$high, (x.$low | x$13.$low) >>> 0));
    	};

readUint64hash/crc64.readUint64 hash/crc64.update
hash/crc64update update� k	update = function(crc, tab, p) {
		var _i, _ref, crc, helperTable, p, tab, v, x, x$1, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$2, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$3, x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$4, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$5, x$50, x$51, x$52, x$53, x$54, x$6, x$7, x$8, x$9, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _ref = $f._ref; crc = $f.crc; helperTable = $f.helperTable; p = $f.p; tab = $f.tab; v = $f.v; x = $f.x; x$1 = $f.x$1; x$10 = $f.x$10; x$11 = $f.x$11; x$12 = $f.x$12; x$13 = $f.x$13; x$14 = $f.x$14; x$15 = $f.x$15; x$16 = $f.x$16; x$17 = $f.x$17; x$18 = $f.x$18; x$19 = $f.x$19; x$2 = $f.x$2; x$20 = $f.x$20; x$21 = $f.x$21; x$22 = $f.x$22; x$23 = $f.x$23; x$24 = $f.x$24; x$25 = $f.x$25; x$26 = $f.x$26; x$27 = $f.x$27; x$28 = $f.x$28; x$29 = $f.x$29; x$3 = $f.x$3; x$30 = $f.x$30; x$31 = $f.x$31; x$32 = $f.x$32; x$33 = $f.x$33; x$34 = $f.x$34; x$35 = $f.x$35; x$36 = $f.x$36; x$37 = $f.x$37; x$38 = $f.x$38; x$39 = $f.x$39; x$4 = $f.x$4; x$40 = $f.x$40; x$41 = $f.x$41; x$42 = $f.x$42; x$43 = $f.x$43; x$44 = $f.x$44; x$45 = $f.x$45; x$46 = $f.x$46; x$47 = $f.x$47; x$48 = $f.x$48; x$49 = $f.x$49; x$5 = $f.x$5; x$50 = $f.x$50; x$51 = $f.x$51; x$52 = $f.x$52; x$53 = $f.x$53; x$54 = $f.x$54; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; x$9 = $f.x$9; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		$r = buildSlicing8TablesOnce(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		crc = new $Uint64(~crc.$high, ~crc.$low >>> 0);
  �		while (true) {
			if (!(p.$length >= 64)) { break; }
  			helperTable = ptrType.nil;
    			if ($equal(tab, slicing8TableECMA[0], Table)) {
  K				helperTable = slicing8TableECMA;
    			} else if ($equal(tab, slicing8TableISO[0], Table)) {
  �				helperTable = slicing8TableISO;
    			} else if (p.$length > 16384) {
  				helperTable = makeSlicingBy8Table(tab);
    			} else {
  P				break;
    			}
  {			while (true) {
				if (!(p.$length > 8)) { break; }
  �				crc = (x = (x$1 = (x$2 = (x$3 = (x$4 = (x$5 = (x$6 = (x$7 = (new $Uint64(0, (0 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 0]))), x$8 = $shiftLeft64((new $Uint64(0, (1 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 1]))), 8), new $Uint64(x$7.$high | x$8.$high, (x$7.$low | x$8.$low) >>> 0)), x$9 = $shiftLeft64((new $Uint64(0, (2 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 2]))), 16), new $Uint64(x$6.$high | x$9.$high, (x$6.$low | x$9.$low) >>> 0)), x$10 = $shiftLeft64((new $Uint64(0, (3 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 3]))), 24), new $Uint64(x$5.$high | x$10.$high, (x$5.$low | x$10.$low) >>> 0)), x$11 = $shiftLeft64((new $Uint64(0, (4 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 4]))), 32), new $Uint64(x$4.$high | x$11.$high, (x$4.$low | x$11.$low) >>> 0)), x$12 = $shiftLeft64((new $Uint64(0, (5 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 5]))), 40), new $Uint64(x$3.$high | x$12.$high, (x$3.$low | x$12.$low) >>> 0)), x$13 = $shiftLeft64((new $Uint64(0, (6 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 6]))), 48), new $Uint64(x$2.$high | x$13.$high, (x$2.$low | x$13.$low) >>> 0)), x$14 = $shiftLeft64((new $Uint64(0, (7 >= p.$length ? ($throwRuntimeError("index out of range"), undefined) : p.$array[p.$offset + 7]))), 56), new $Uint64(x$1.$high | x$14.$high, (x$1.$low | x$14.$low) >>> 0)), new $Uint64(crc.$high ^ x.$high, (crc.$low ^ x.$low) >>> 0));
  .				crc = (x$15 = (x$16 = (x$17 = (x$18 = (x$19 = (x$20 = (x$21 = (x$22 = helperTable[7], x$23 = new $Uint64(crc.$high & 0, (crc.$low & 255) >>> 0), (($flatten64(x$23) < 0 || $flatten64(x$23) >= x$22.length) ? ($throwRuntimeError("index out of range"), undefined) : x$22[$flatten64(x$23)])), x$24 = (x$25 = helperTable[6], x$26 = (x$27 = $shiftRightUint64(crc, 8), new $Uint64(x$27.$high & 0, (x$27.$low & 255) >>> 0)), (($flatten64(x$26) < 0 || $flatten64(x$26) >= x$25.length) ? ($throwRuntimeError("index out of range"), undefined) : x$25[$flatten64(x$26)])), new $Uint64(x$21.$high ^ x$24.$high, (x$21.$low ^ x$24.$low) >>> 0)), x$28 = (x$29 = helperTable[5], x$30 = (x$31 = $shiftRightUint64(crc, 16), new $Uint64(x$31.$high & 0, (x$31.$low & 255) >>> 0)), (($flatten64(x$30) < 0 || $flatten64(x$30) >= x$29.length) ? ($throwRuntimeError("index out of range"), undefined) : x$29[$flatten64(x$30)])), new $Uint64(x$20.$high ^ x$28.$high, (x$20.$low ^ x$28.$low) >>> 0)), x$32 = (x$33 = helperTable[4], x$34 = (x$35 = $shiftRightUint64(crc, 24), new $Uint64(x$35.$high & 0, (x$35.$low & 255) >>> 0)), (($flatten64(x$34) < 0 || $flatten64(x$34) >= x$33.length) ? ($throwRuntimeError("index out of range"), undefined) : x$33[$flatten64(x$34)])), new $Uint64(x$19.$high ^ x$32.$high, (x$19.$low ^ x$32.$low) >>> 0)), x$36 = (x$37 = helperTable[3], x$38 = (x$39 = $shiftRightUint64(crc, 32), new $Uint64(x$39.$high & 0, (x$39.$low & 255) >>> 0)), (($flatten64(x$38) < 0 || $flatten64(x$38) >= x$37.length) ? ($throwRuntimeError("index out of range"), undefined) : x$37[$flatten64(x$38)])), new $Uint64(x$18.$high ^ x$36.$high, (x$18.$low ^ x$36.$low) >>> 0)), x$40 = (x$41 = helperTable[2], x$42 = (x$43 = $shiftRightUint64(crc, 40), new $Uint64(x$43.$high & 0, (x$43.$low & 255) >>> 0)), (($flatten64(x$42) < 0 || $flatten64(x$42) >= x$41.length) ? ($throwRuntimeError("index out of range"), undefined) : x$41[$flatten64(x$42)])), new $Uint64(x$17.$high ^ x$40.$high, (x$17.$low ^ x$40.$low) >>> 0)), x$44 = (x$45 = helperTable[1], x$46 = (x$47 = $shiftRightUint64(crc, 48), new $Uint64(x$47.$high & 0, (x$47.$low & 255) >>> 0)), (($flatten64(x$46) < 0 || $flatten64(x$46) >= x$45.length) ? ($throwRuntimeError("index out of range"), undefined) : x$45[$flatten64(x$46)])), new $Uint64(x$16.$high ^ x$44.$high, (x$16.$low ^ x$44.$low) >>> 0)), x$48 = (x$49 = helperTable[0], x$50 = $shiftRightUint64(crc, 56), (($flatten64(x$50) < 0 || $flatten64(x$50) >= x$49.length) ? ($throwRuntimeError("index out of range"), undefined) : x$49[$flatten64(x$50)])), new $Uint64(x$15.$high ^ x$48.$high, (x$15.$low ^ x$48.$low) >>> 0));
  K				p = $subslice(p, 8);
    			}
    		}
  ~		_ref = p;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			v = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  �			crc = (x$51 = (x$52 = tab, x$53 = (((crc.$low << 24 >>> 24)) ^ v) << 24 >>> 24, ((x$53 < 0 || x$53 >= x$52.length) ? ($throwRuntimeError("index out of range"), undefined) : x$52[x$53])), x$54 = $shiftRightUint64(crc, 8), new $Uint64(x$51.$high ^ x$54.$high, (x$51.$low ^ x$54.$low) >>> 0));
    			_i++;
		}
  �		$s = -1; return new $Uint64(~crc.$high, ~crc.$low >>> 0);
    		/* */ } return; } if ($f === undefined) { $f = { $blk: update }; } $f._i = _i; $f._ref = _ref; $f.crc = crc; $f.helperTable = helperTable; $f.p = p; $f.tab = tab; $f.v = v; $f.x = x; $f.x$1 = x$1; $f.x$10 = x$10; $f.x$11 = x$11; $f.x$12 = x$12; $f.x$13 = x$13; $f.x$14 = x$14; $f.x$15 = x$15; $f.x$16 = x$16; $f.x$17 = x$17; $f.x$18 = x$18; $f.x$19 = x$19; $f.x$2 = x$2; $f.x$20 = x$20; $f.x$21 = x$21; $f.x$22 = x$22; $f.x$23 = x$23; $f.x$24 = x$24; $f.x$25 = x$25; $f.x$26 = x$26; $f.x$27 = x$27; $f.x$28 = x$28; $f.x$29 = x$29; $f.x$3 = x$3; $f.x$30 = x$30; $f.x$31 = x$31; $f.x$32 = x$32; $f.x$33 = x$33; $f.x$34 = x$34; $f.x$35 = x$35; $f.x$36 = x$36; $f.x$37 = x$37; $f.x$38 = x$38; $f.x$39 = x$39; $f.x$4 = x$4; $f.x$40 = x$40; $f.x$41 = x$41; $f.x$42 = x$42; $f.x$43 = x$43; $f.x$44 = x$44; $f.x$45 = x$45; $f.x$46 = x$46; $f.x$47 = x$47; $f.x$48 = x$48; $f.x$49 = x$49; $f.x$5 = x$5; $f.x$50 = x$50; $f.x$51 = x$51; $f.x$52 = x$52; $f.x$53 = x$53; $f.x$54 = x$54; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.x$9 = x$9; $f.$s = $s; $f.$r = $r; return $f;
	};
updatehash/crc64.Table"hash/crc64.buildSlicing8TablesOncehash/crc64.makeSlicingBy8Tablehash/crc64.ptrTypehash/crc64.slicing8TableECMAhash/crc64.slicing8TableISOhash/crc64.update hash/crc64.Update
hash/crc64Update Update��	Update = function(crc, tab, p) {
		var $24r, _r, crc, p, tab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; crc = $f.crc; p = $f.p; tab = $f.tab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  G		_r = update(crc, tab, p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Update }; } $f.$24r = $24r; $f._r = _r; $f.crc = crc; $f.p = p; $f.tab = tab; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Update = Update;
Updatehash/crc64.Updatehash/crc64.update (*hash/crc64.digest).Write ��	digest.ptr.prototype.Write = function(p) {
		var _r, _tmp, _tmp$1, d, err, n, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; d = $f.d; err = $f.err; n = $f.n; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		d = this;
  �		_r = update(d.crc, d.tab, p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		d.crc = _r;
    		_tmp = p.$length;
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: digest.ptr.prototype.Write }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f.d = d; $f.err = err; $f.n = n; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	digest.prototype.Write = function(p) { return this.$val.Write(p); };
digesthash/crc64.digesthash/crc64.update (*hash/crc64.digest).Sum64 ��	digest.ptr.prototype.Sum64 = function() {
		var d;
		d = this;
  �		return d.crc;
    	};
	digest.prototype.Sum64 = function() { return this.$val.Sum64(); };
digesthash/crc64.digest (*hash/crc64.digest).Sum �7	digest.ptr.prototype.Sum = function(in$1) {
		var d, in$1, s;
		d = this;
  /		s = d.Sum64();
  ?		return $append(in$1, (($shiftRightUint64(s, 56).$low << 24 >>> 24)), (($shiftRightUint64(s, 48).$low << 24 >>> 24)), (($shiftRightUint64(s, 40).$low << 24 >>> 24)), (($shiftRightUint64(s, 32).$low << 24 >>> 24)), (($shiftRightUint64(s, 24).$low << 24 >>> 24)), (($shiftRightUint64(s, 16).$low << 24 >>> 24)), (($shiftRightUint64(s, 8).$low << 24 >>> 24)), ((s.$low << 24 >>> 24)));
    	};
	digest.prototype.Sum = function(in$1) { return this.$val.Sum(in$1); };
digesthash/crc64.digest hash/crc64.Checksum
hash/crc64Checksum Checksum��	Checksum = function(data, tab) {
		var $24r, _r, data, tab, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; data = $f.data; tab = $f.tab; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  I		_r = update(new $Uint64(0, 0), tab, data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Checksum }; } $f.$24r = $24r; $f._r = _r; $f.data = data; $f.tab = tab; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Checksum = Checksum;
Checksumhash/crc64.Checksumhash/crc64.update hash/crc64.tableSum
hash/crc64tableSum tableSum��	tableSum = function(t) {
		var $24r, _arg, _arg$1, _i, _r, _r$1, _ref, a, b, t, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _arg = $f._arg; _arg$1 = $f._arg$1; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; a = $f.a; b = $f.b; t = $f.t; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		a = arrayType$2.zero();
  �		b = $subslice(new sliceType(a), 0, 0);
    		if (!(t === ptrType$1.nil)) {
  �			_ref = t;
			_i = 0;
			while (true) {
				if (!(_i < 256)) { break; }
				x$1 = (x = _ref, ((_i < 0 || _i >= x.length) ? ($throwRuntimeError("index out of range"), undefined) : x[_i]));
  				b = appendUint64(b, x$1);
    				_i++;
			}
    		}
  !		_arg = b;
		_r = MakeTable(new $Uint64(3623878656, 0)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg$1 = _r;
		_r$1 = Checksum(_arg, _arg$1); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: tableSum }; } $f.$24r = $24r; $f._arg = _arg; $f._arg$1 = _arg$1; $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f.a = a; $f.b = b; $f.t = t; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
tableSumhash/crc64.Checksumhash/crc64.MakeTablehash/crc64.appendUint64hash/crc64.arrayType$2hash/crc64.ptrType$1hash/crc64.sliceTypehash/crc64.tableSum ��{"Base":5703,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/hash/crc64/crc64.go","Base":1,"Size":5701,"Lines":[0,55,109,159,160,235,310,326,340,341,350,360,368,376,378,379,422,437,438,465,473,535,561,562,608,635,637,638,721,744,745,751,786,821,856,858,859,892,941,943,944,973,1029,1087,1089,1090,1162,1214,1251,1278,1293,1304,1334,1346,1377,1387,1412,1415,1417,1418,1455,1472,1500,1519,1546,1565,1593,1605,1619,1624,1628,1641,1644,1654,1656,1657,1704,1730,1751,1779,1793,1820,1854,1881,1885,1888,1909,1911,1912,1971,1992,2004,2016,2018,2019,2092,2160,2224,2297,2354,2414,2415,2459,2460,2506,2507,2546,2547,2555,2582,2618,2620,2621,2672,2709,2734,2772,2800,2815,2817,2818,2869,2930,2995,2998,3028,3087,3090,3133,3188,3191,3219,3231,3233,3234,3281,3296,3313,3330,3347,3364,3381,3398,3414,3425,3428,3455,3457,3458,3493,3503,3582,3658,3660,3661,3716,3743,3755,3827,3847,3875,3911,3946,3988,4022,4090,4119,4161,4172,4181,4185,4216,4235,4316,4394,4430,4466,4503,4540,4577,4614,4651,4679,4692,4696,4699,4732,4755,4793,4796,4809,4811,4812,4878,4933,4961,4963,4964,5018,5051,5071,5073,5074,5123,5124,5165,5181,5299,5301,5302,5350,5400,5478,5479,5528,5561,5579,5591,5606,5630,5656,5660,5663,5699],"Infos":null}]}
 