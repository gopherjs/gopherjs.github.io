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
GoLinkname�� Implementation�� 	Reference��   �4���internal/syscall/unixunixsync/atomicsyscall��i ��rfdroffwfdwofflenflagsnerrdirfdpathstatStat_tsyscall GetRandomFlagpfdnonblockingpermDevInoNlinkModeUidGidX__pad0RdevSizeBlksizeBlocksAtimTimespecMtimCtim	X__unusedSecNsecUnixtssecnsecNanounixAT_REMOVEDIRAT_SYMLINK_NOFOLLOWCopyFileRangeFcntlSyscallFstatatGRND_NONBLOCKGRND_RANDOM	GetRandom
IsNonblockOpenatUnlinkatC � C � F    , 	 .     V  29PF  " ( -S  A  BAC iC iF  Pt i   T  F  R U   F  " (  a	 A A F  " (  A  �99 f
 A j
 A n
 A t	 A y	 A }	 A � A �
 A � A � A � A �� A �� A �� A �� AT � 9 � A � A��T � � ��  � � � ��  AA� � ���-�5�L�P�VBg�k�y��99 2��� atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  syscall!	syscall = $packages["syscall"];
��    		$r = syscall.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  GetRandomFlag��	GetRandomFlag = $pkg.GetRandomFlag = $newType(4, $kindUintptr, "unix.GetRandomFlag", true, "internal/syscall/unix", true, null);
GetRandomFlag#internal/syscall/unix.GetRandomFlag  ptrType	ptrType = $ptrType($Uint8);
ptrType  	ptrType$1	ptrType$1 = $ptrType($Int32);
	ptrType$1  getrandomUnsupportedgetrandomUnsupported$24ptr		getrandomUnsupported = 0;
getrandomUnsupported*internal/syscall/unix.getrandomUnsupported  FcntlSyscall    n		$pkg.FcntlSyscall = 72;
FcntlSyscall"internal/syscall/unix.FcntlSyscall  internal/syscall/unix.IsNonblockinternal/syscall/unix
IsNonblock 
IsNonblock�	IsNonblock = function(fd) {
		var _tmp, _tmp$1, err, fd, nonblocking;
		nonblocking = false;
		err = $ifaceNil;
    		_tmp = false;
		_tmp$1 = $ifaceNil;
		nonblocking = _tmp;
		err = _tmp$1;
		return [nonblocking, err];
    	};
	$pkg.IsNonblock = IsNonblock;

IsNonblock internal/syscall/unix.IsNonblock internal/syscall/unix.unlinkatinternal/syscall/unixunlinkat unlinkat��	unlinkat = function(dirfd, path, flags) {
		var $24r, _r, dirfd, flags, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; dirfd = $f.dirfd; flags = $f.flags; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = syscall.Unlink(path); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: unlinkat }; } $f.$24r = $24r; $f._r = _r; $f.dirfd = dirfd; $f.flags = flags; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
unlinkatinternal/syscall/unix.unlinkatsyscall.Unlink internal/syscall/unix.Unlinkatinternal/syscall/unixUnlinkat Unlinkat��	Unlinkat = function(dirfd, path, flags) {
		var _r, _tuple, _tuple$1, dirfd, err, errno, flags, p, path, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dirfd = $f.dirfd; err = $f.err; errno = $f.errno; flags = $f.flags; p = $f.p; path = $f.path; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  E		p = ptrType.nil;
  N		_tuple = syscall.BytePtrFromString(path);
		p = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return err;
    		}
  �		_r = syscall.Syscall(263, ((dirfd >>> 0)), ((p)), ((flags >>> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		errno = _tuple$1[2];
    		if (!((errno === 0))) {
  			$s = -1; return new syscall.Errno(errno);
    		}
  )		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Unlinkat }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dirfd = dirfd; $f.err = err; $f.errno = errno; $f.flags = flags; $f.p = p; $f.path = path; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Unlinkat = Unlinkat;
Unlinkatinternal/syscall/unix.Unlinkatinternal/syscall/unix.ptrTypesyscall.BytePtrFromStringsyscall.Errnosyscall.Syscall internal/syscall/unix.Openatinternal/syscall/unixOpenat Openat��	Openat = function(dirfd, path, flags, perm) {
		var _r, _tuple, _tuple$1, dirfd, err, errno, fd, flags, p, path, perm, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dirfd = $f.dirfd; err = $f.err; errno = $f.errno; fd = $f.fd; flags = $f.flags; p = $f.p; path = $f.path; perm = $f.perm; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		p = ptrType.nil;
  �		_tuple = syscall.BytePtrFromString(path);
		p = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  �			$s = -1; return [0, err];
    		}
  �		_r = syscall.Syscall6(257, ((dirfd >>> 0)), ((p)), ((flags >>> 0)), ((perm >>> 0)), 0, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		fd = _tuple$1[0];
		errno = _tuple$1[2];
    		if (!((errno === 0))) {
  q			$s = -1; return [0, new syscall.Errno(errno)];
    		}
  �		$s = -1; return [((fd >> 0)), $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Openat }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dirfd = dirfd; $f.err = err; $f.errno = errno; $f.fd = fd; $f.flags = flags; $f.p = p; $f.path = path; $f.perm = perm; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Openat = Openat;
Openatinternal/syscall/unix.Openatinternal/syscall/unix.ptrTypesyscall.BytePtrFromStringsyscall.Errnosyscall.Syscall6 internal/syscall/unix.Fstatatinternal/syscall/unixFstatat Fstatat�4	Fstatat = function(dirfd, path, stat, flags) {
		var _r, _tuple, _tuple$1, dirfd, err, errno, flags, p, path, stat, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; dirfd = $f.dirfd; err = $f.err; errno = $f.errno; flags = $f.flags; p = $f.p; path = $f.path; stat = $f.stat; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		p = ptrType.nil;
  �		_tuple = syscall.BytePtrFromString(path);
		p = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  6			$s = -1; return err;
    		}
  F		_r = syscall.Syscall6(0, ((dirfd >>> 0)), ((p)), ((stat)), ((flags >>> 0)), 0, 0); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		errno = _tuple$1[2];
    		if (!((errno === 0))) {
  �			$s = -1; return new syscall.Errno(errno);
    		}
  �		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Fstatat }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.dirfd = dirfd; $f.err = err; $f.errno = errno; $f.flags = flags; $f.p = p; $f.path = path; $f.stat = stat; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fstatat = Fstatat;
Fstatatinternal/syscall/unix.Fstatatinternal/syscall/unix.ptrTypesyscall.BytePtrFromStringsyscall.Errnosyscall.Syscall6 #internal/syscall/unix.CopyFileRangeinternal/syscall/unixCopyFileRange CopyFileRange��	CopyFileRange = function(rfd, roff, wfd, woff, len, flags) {
		var _r, _tuple, err, errno, flags, len, n, r1, rfd, roff, wfd, woff, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; errno = $f.errno; flags = $f.flags; len = $f.len; n = $f.n; r1 = $f.r1; rfd = $f.rfd; roff = $f.roff; wfd = $f.wfd; woff = $f.woff; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  	�		_r = syscall.Syscall6(0, ((rfd >>> 0)), ((roff)), ((wfd >>> 0)), ((woff)), ((len >>> 0)), ((flags >>> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r1 = _tuple[0];
		errno = _tuple[2];
  
[		n = ((r1 >> 0));
    		if (!((errno === 0))) {
  
z			err = new syscall.Errno(errno);
    		}
  
�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: CopyFileRange }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.errno = errno; $f.flags = flags; $f.len = len; $f.n = n; $f.r1 = r1; $f.rfd = rfd; $f.roff = roff; $f.wfd = wfd; $f.woff = woff; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.CopyFileRange = CopyFileRange;
CopyFileRange#internal/syscall/unix.CopyFileRangesyscall.Errnosyscall.Syscall6 internal/syscall/unix.GetRandominternal/syscall/unix	GetRandom 	GetRandom��	GetRandom = function(p, flags) {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tuple, err, errno, flags, n, p, r1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tmp$6 = $f._tmp$6; _tmp$7 = $f._tmp$7; _tuple = $f._tuple; err = $f.err; errno = $f.errno; flags = $f.flags; n = $f.n; p = $f.p; r1 = $f.r1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		if (p.$length === 0) {
    			_tmp = 0;
			_tmp$1 = $ifaceNil;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
    		if (!((atomic.LoadInt32((getrandomUnsupported$24ptr || (getrandomUnsupported$24ptr = new ptrType$1(function() { return getrandomUnsupported; }, function($v) { getrandomUnsupported = $v; })))) === 0))) {
    			_tmp$2 = 0;
			_tmp$3 = new syscall.Errno(38);
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		}
  /		_r = syscall.Syscall(0, (($sliceToNativeArray(p))), ((p.$length >>> 0)), ((flags >>> 0))); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		r1 = _tuple[0];
		errno = _tuple[2];
    		if (!((errno === 0))) {
    			if (errno === 38) {
  �				atomic.StoreInt32((getrandomUnsupported$24ptr || (getrandomUnsupported$24ptr = new ptrType$1(function() { return getrandomUnsupported; }, function($v) { getrandomUnsupported = $v; }))), 1);
    			}
    			_tmp$4 = 0;
			_tmp$5 = new syscall.Errno(errno);
			n = _tmp$4;
			err = _tmp$5;
			$s = -1; return [n, err];
    		}
    		_tmp$6 = ((r1 >> 0));
		_tmp$7 = $ifaceNil;
		n = _tmp$6;
		err = _tmp$7;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: GetRandom }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tmp$6 = _tmp$6; $f._tmp$7 = _tmp$7; $f._tuple = _tuple; $f.err = err; $f.errno = errno; $f.flags = flags; $f.n = n; $f.p = p; $f.r1 = r1; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.GetRandom = GetRandom;
	GetRandominternal/syscall/unix.GetRandom*internal/syscall/unix.getrandomUnsupportedinternal/syscall/unix.ptrType$1sync/atomic.LoadInt32sync/atomic.StoreInt32syscall.Errnosyscall.Syscall ��{"Base":4729,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/unix.go","Base":1,"Size":473,"Lines":[0,14,27,28,41,42,59,60,68,99,130,161,192,194,195,251,270,272,273,330,389,442,471],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/at.go","Base":475,"Size":1324,"Lines":[0,55,109,159,160,211,252,253,266,267,276,287,297,299,300,357,370,413,430,443,446,447,553,570,585,588,589,601,603,604,679,692,735,752,768,771,772,899,916,934,937,938,959,961,962,1040,1053,1096,1113,1126,1129,1130,1273,1290,1305,1308,1309,1321,1322],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/at_sysnum_linux.go","Base":1800,"Size":350,"Lines":[0,55,109,159,160,173,174,191,192,242,288,289,316],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/copy_file_range_linux.go","Base":2151,"Size":556,"Lines":[0,55,109,159,160,173,174,183,194,204,206,207,311,364,380,413,429,462,478,496,499,512,529,543,546,554],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/getrandom.go","Base":2708,"Size":928,"Lines":[0,55,109,159,160,201,235,236,249,250,259,274,285,295,297,298,339,340,407,434,435,481,548,566,582,585,636,663,666,714,748,767,785,802,833,880,884,902,905,926],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/getrandom_linux.go","Base":3637,"Size":391,"Lines":[0,55,109,159,160,173,174,182,242,280,281,353,389],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/internal/syscall/unix/nonblocking.go","Base":4029,"Size":699,"Lines":[0,55,109,159,160,222,271,272,285,286,303,304,369,429,474,475,531,619,633,652,655,697],"Infos":null}]}
 