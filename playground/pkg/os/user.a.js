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
GoLinkname�� Implementation�� 	Reference��   �����os/useruser
bufiobyteserrorsfmtioosruntimestrconvstringssync��i �� UserGidNameusernamenameGroupgiduidErroreUnknownGroupErrorUnknownGroupIdErrorUnknownUserErrorUnknownUserIdErrorUidUsernameHomeDirGroupIdsuuserCurrentLookupLookupGroupLookupGroupIdLookupId   F    #       
  T /  F    @     PF    S   PF  #  c    F  '  s    3 T  + 1�    E T  + 1�    Y T  + 1�    j T  + 1�     }      �   
   �   T � � ��   �   � ��"�5�E�U3fExY�j��9 bufio	bufio = $packages["bufio"];
��    		$r = bufio.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  bytes	bytes = $packages["bytes"];
��    		$r = bytes.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 7; case 7: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strconv!	strconv = $packages["strconv"];
��    		$r = strconv.$init(); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  lineFuncc	lineFunc = $pkg.lineFunc = $newType(4, $kindFunc, "user.lineFunc", true, "os/user", false, null);
?	lineFunc.init([sliceType], [$emptyInterface, $error], false);
lineFuncos/user.lineFuncos/user.sliceType  User��	User = $pkg.User = $newType(0, $kindStruct, "user.User", true, "os/user", true, function(Uid_, Gid_, Username_, Name_, HomeDir_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Uid = "";
			this.Gid = "";
			this.Username = "";
			this.Name = "";
			this.HomeDir = "";
			return;
		}
		this.Uid = Uid_;
		this.Gid = Gid_;
		this.Username = Username_;
		this.Name = Name_;
		this.HomeDir = HomeDir_;
	});
v	ptrType.methods = [{prop: "GroupIds", name: "GroupIds", pkg: "", typ: $funcType([], [sliceType$2, $error], false)}];
��	User.init("", [{prop: "Uid", name: "Uid", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Gid", name: "Gid", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Username", name: "Username", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "HomeDir", name: "HomeDir", embedded: false, exported: true, typ: $String, tag: ""}]);
Useros/user.Useros/user.ptrTypeos/user.sliceType$2  Group�	Group = $pkg.Group = $newType(0, $kindStruct, "user.Group", true, "os/user", true, function(Gid_, Name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Gid = "";
			this.Name = "";
			return;
		}
		this.Gid = Gid_;
		this.Name = Name_;
	});
��	Group.init("", [{prop: "Gid", name: "Gid", embedded: false, exported: true, typ: $String, tag: ""}, {prop: "Name", name: "Name", embedded: false, exported: true, typ: $String, tag: ""}]);
Groupos/user.Group  UnknownUserIdError	UnknownUserIdError = $pkg.UnknownUserIdError = $newType(4, $kindInt, "user.UnknownUserIdError", true, "os/user", true, null);
o	UnknownUserIdError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnknownUserIdErroros/user.UnknownUserIdError  UnknownUserError|	UnknownUserError = $pkg.UnknownUserError = $newType(8, $kindString, "user.UnknownUserError", true, "os/user", true, null);
m	UnknownUserError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnknownUserErroros/user.UnknownUserError  UnknownGroupIdError��	UnknownGroupIdError = $pkg.UnknownGroupIdError = $newType(8, $kindString, "user.UnknownGroupIdError", true, "os/user", true, null);
p	UnknownGroupIdError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnknownGroupIdErroros/user.UnknownGroupIdError  UnknownGroupError	UnknownGroupError = $pkg.UnknownGroupError = $newType(8, $kindString, "user.UnknownGroupError", true, "os/user", true, null);
n	UnknownGroupError.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}];
UnknownGroupErroros/user.UnknownGroupError  ptrType	ptrType = $ptrType(User);
ptrTypeos/user.User  
structType�$	structType = $structType("os/user", [{prop: "Once", name: "Once", embedded: true, exported: true, typ: sync.Once, tag: ""}, {prop: "u", name: "u", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);

structTypeos/user.ptrType	sync.Once  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  sliceType$2$	sliceType$2 = $sliceType($String);
sliceType$2  	ptrType$1	ptrType$1 = $ptrType(Group);
	ptrType$1os/user.Group  cachef		cache = new structType.ptr(new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)), ptrType.nil, $ifaceNil);
cacheos/user.Useros/user.cacheos/user.ptrTypeos/user.structType
sync.Mutex	sync.Once  coloncolon  userImplementeduserImplemented  groupImplementedgroupImplemented  $  �		colon = new sliceType([58]);
colonos/user.colonos/user.sliceType    +		userImplemented = true;
userImplementedos/user.userImplemented     +J		groupImplemented = true;
groupImplementedos/user.groupImplemented os/user.Currentos/userCurrent Current�O	Current = function() {
		var u, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; u = $f.u; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		u = [u];
  �		$r = cache.Once.Do((function(u) { return function $b() {
			var _r, _tuple, $s, $r;
			/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �			_r = current(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			cache.u = _tuple[0];
			cache.err = _tuple[1];
    			$s = -1; return;
			/* */ } return; } if ($f === undefined) { $f = { $blk: $b }; } $f._r = _r; $f._tuple = _tuple; $f.$s = $s; $f.$r = $r; return $f;
		}; })(u)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (!($interfaceIsEqual(cache.err, $ifaceNil))) {
  �			$s = -1; return [ptrType.nil, cache.err];
    		}
  		u[0] = $clone(cache.u, User);
  &		$s = -1; return [u[0], $ifaceNil];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Current }; } $f.u = u; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Current = Current;
Currentos/user.Currentos/user.Useros/user.cacheos/user.currentos/user.ptrType os/user.Lookupos/userLookup Lookup�`	Lookup = function(username) {
		var $24r, _r, _r$1, _tuple, err, u, username, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; u = $f.u; username = $f.username; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  5		_r = Current(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		u = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $ifaceNil) && u.Username === username) {
  s			$s = -1; return [u, err];
    		}
  �		_r$1 = lookupUser(username); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Lookup }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.u = u; $f.username = username; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Lookup = Lookup;
Lookupos/user.Currentos/user.Lookupos/user.lookupUser os/user.LookupIdos/userLookupId LookupId�=	LookupId = function(uid) {
		var $24r, _r, _r$1, _tuple, err, u, uid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; u = $f.u; uid = $f.uid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  L		_r = Current(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		u = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $ifaceNil) && u.Uid === uid) {
  �			$s = -1; return [u, err];
    		}
  �		_r$1 = lookupUserId(uid); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r = _r$1;
		$s = 3; case 3: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LookupId }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.u = u; $f.uid = uid; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.LookupId = LookupId;
LookupIdos/user.Currentos/user.LookupIdos/user.lookupUserId os/user.LookupGroupos/userLookupGroup LookupGroup��	LookupGroup = function(name) {
		var $24r, _r, name, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; name = $f.name; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Z		_r = lookupGroup(name); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LookupGroup }; } $f.$24r = $24r; $f._r = _r; $f.name = name; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.LookupGroup = LookupGroup;
LookupGroupos/user.LookupGroupos/user.lookupGroup os/user.LookupGroupIdos/userLookupGroupId LookupGroupId��	LookupGroupId = function(gid) {
		var $24r, _r, gid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; gid = $f.gid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  *		_r = lookupGroupId(gid); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LookupGroupId }; } $f.$24r = $24r; $f._r = _r; $f.gid = gid; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.LookupGroupId = LookupGroupId;
LookupGroupIdos/user.LookupGroupIdos/user.lookupGroupId (*os/user.User).GroupIds ��	User.ptr.prototype.GroupIds = function() {
		var $24r, _r, u, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; u = $f.u; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		u = this;
  �		_r = listGroups(u); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: User.ptr.prototype.GroupIds }; } $f.$24r = $24r; $f._r = _r; $f.u = u; $f.$s = $s; $f.$r = $r; return $f;
	};
	User.prototype.GroupIds = function() { return this.$val.GroupIds(); };
Useros/user.Useros/user.listGroups os/user.initos/userinit init?	init = function() {
  d		groupImplemented = false;
    	};
    		init();
os/user.groupImplementedos/user.init os/user.currentos/usercurrent current�
�	current = function() {
		var $24r, _1, _r, _r$1, _r$2, _r$3, _r$4, _r$5, _tuple, _tuple$1, err, homeDir, missing, u, uid, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _1 = $f._1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _r$4 = $f._r$4; _r$5 = $f._r$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; homeDir = $f.homeDir; missing = $f.missing; u = $f.u; uid = $f.uid; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = currentUID(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		uid = _r;
  	,		_r$1 = lookupUserId(uid); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple = _r$1;
		u = _tuple[0];
		err = _tuple[1];
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  	[			$s = -1; return [u, $ifaceNil];
    		}
  	n		_r$2 = os.UserHomeDir(); /* */ $s = 3; case 3: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
		_tuple$1 = _r$2;
		homeDir = _tuple$1[0];
  	�		_r$3 = currentGID(); /* */ $s = 4; case 4: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
		_r$4 = os.Getenv("USER"); /* */ $s = 5; case 5: if($c) { $c = false; _r$4 = _r$4.$blk(); } if (_r$4 && _r$4.$blk !== undefined) { break s; }
		u = new User.ptr(uid, _r$3, _r$4, "", homeDir);
    		_1 = "linux";
    		if (_1 === ("android")) {
    			if (u.Uid === "") {
  
�				u.Uid = "1";
    			}
    			if (u.Username === "") {
  
�				u.Username = "android";
    			}
    		}
    		if (!(u.Uid === "") && !(u.Username === "") && !(u.HomeDir === "")) {
  i			$s = -1; return [u, $ifaceNil];
    		}
  		missing = "";
    		if (u.Username === "") {
  �			missing = "$USER";
    		}
    		if (u.HomeDir === "") {
    			if (!(missing === "")) {
  �				missing = missing + (", ");
    			}
   			missing = missing + ("$HOME");
    		}
  		_r$5 = fmt.Errorf("user: Current requires cgo or %s set in environment", new sliceType$1([new $String(missing)])); /* */ $s = 6; case 6: if($c) { $c = false; _r$5 = _r$5.$blk(); } if (_r$5 && _r$5.$blk !== undefined) { break s; }
		$24r = [u, _r$5];
		$s = 7; case 7: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: current }; } $f.$24r = $24r; $f._1 = _1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._r$4 = _r$4; $f._r$5 = _r$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.homeDir = homeDir; $f.missing = missing; $f.u = u; $f.uid = uid; $f.$s = $s; $f.$r = $r; return $f;
	};
current	
fmt.Errorf	os.Getenvos.UserHomeDiros/user.Useros/user.currentos/user.currentGIDos/user.currentUIDos/user.lookupUserIdos/user.sliceType$1 os/user.listGroupsos/user
listGroups 
listGroups��	listGroups = function(param) {
		var $24r, _r, param, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; param = $f.param; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (false) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (false) { */ case 1:
  �			_r = fmt.Errorf("user: GroupIds not implemented on %s", new sliceType$1([new $String("linux")])); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			$24r = [sliceType$2.nil, _r];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  &		$s = -1; return [sliceType$2.nil, errors.New("user: GroupIds requires cgo")];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: listGroups }; } $f.$24r = $24r; $f._r = _r; $f.param = param; $f.$s = $s; $f.$r = $r; return $f;
	};

listGroups
errors.New
fmt.Errorfos/user.listGroupsos/user.sliceType$1os/user.sliceType$2 os/user.currentUIDos/user
currentUID 
currentUID�z	currentUID = function() {
		var _r, id, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; id = $f.id; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ~		_r = os.Getuid(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r;
    		if (id >= 0) {
  �			$s = -1; return strconv.Itoa(id);
    		}
  8		$s = -1; return "";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: currentUID }; } $f._r = _r; $f.id = id; $f.$s = $s; $f.$r = $r; return $f;
	};

currentUID	os.Getuidos/user.currentUIDstrconv.Itoa os/user.currentGIDos/user
currentGID 
currentGID�z	currentGID = function() {
		var _r, id, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; id = $f.id; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  d		_r = os.Getgid(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		id = _r;
    		if (id >= 0) {
  �			$s = -1; return strconv.Itoa(id);
    		}
  �		$s = -1; return "";
    		/* */ } return; } if ($f === undefined) { $f = { $blk: currentGID }; } $f._r = _r; $f.id = id; $f.$s = $s; $f.$r = $r; return $f;
	};

currentGID	os.Getgidos/user.currentGIDstrconv.Itoa os/user.initos/userinit init$1A	init$1 = function() {
  			groupImplemented = false;
    	};
    		init$1();
os/user.groupImplementedos/user.init os/user.readColonFileos/userreadColonFile readColonFile��	readColonFile = function(r, fn, readCols) {
		var _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, _tuple$2, err, fn, isPrefix, line, r, rd, readCols, v, wholeLine, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; fn = $f.fn; isPrefix = $f.isPrefix; line = $f.line; r = $f.r; rd = $f.rd; readCols = $f.readCols; v = $f.v; wholeLine = $f.wholeLine; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		v = $ifaceNil;
		err = $ifaceNil;
  h		rd = bufio.NewReader(r);
  �		/* while (true) { */ case 1:
  �			isPrefix = false;
  �			wholeLine = sliceType.nil;
  �			/* while (true) { */ case 3:
  �				line = sliceType.nil;
  �				_r = rd.ReadLine(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				line = _tuple[0];
				isPrefix = _tuple[1];
				err = _tuple[2];
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					if ($interfaceIsEqual(err, io.EOF)) {
  R						err = $ifaceNil;
    					}
    					_tmp = $ifaceNil;
					_tmp$1 = err;
					v = _tmp;
					err = _tmp$1;
					$s = -1; return [v, err];
    				}
    				if (!isPrefix && (wholeLine.$length === 0)) {
  					wholeLine = line;
  					/* break; */ $s = 4; continue;
    				}
  &				wholeLine = $appendSlice(wholeLine, line);
    				if (!isPrefix || bytes.Count(wholeLine, new sliceType([58])) >= readCols) {
  �					/* break; */ $s = 4; continue;
    				}
    			$s = 3; continue;
			case 4:
  �			_r$1 = bytes.TrimSpace(wholeLine); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			wholeLine = _r$1;
    			if ((wholeLine.$length === 0) || ((0 >= wholeLine.$length ? ($throwRuntimeError("index out of range"), undefined) : wholeLine.$array[wholeLine.$offset + 0]) === 35)) {
  				/* continue; */ $s = 1; continue;
    			}
  			_r$2 = fn(wholeLine); /* */ $s = 7; case 7: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$1 = _r$2;
			v = _tuple$1[0];
			err = _tuple$1[1];
    			if (!($interfaceIsEqual(v, $ifaceNil)) || !($interfaceIsEqual(err, $ifaceNil))) {
  N				$s = -1; return [v, err];
    			}
  �			/* while (true) { */ case 8:
				/* if (!(isPrefix)) { break; } */ if(!(isPrefix)) { $s = 9; continue; }
    				if (!($interfaceIsEqual(err, $ifaceNil))) {
    					if ($interfaceIsEqual(err, io.EOF)) {
  1						err = $ifaceNil;
    					}
    					_tmp$2 = $ifaceNil;
					_tmp$3 = err;
					v = _tmp$2;
					err = _tmp$3;
					$s = -1; return [v, err];
    				}
  �				_r$3 = rd.ReadLine(); /* */ $s = 10; case 10: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$2 = _r$3;
				isPrefix = _tuple$2[1];
				err = _tuple$2[2];
			$s = 8; continue;
			case 9:
    		$s = 1; continue;
		case 2:
    		$s = -1; return [v, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: readColonFile }; } $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.fn = fn; $f.isPrefix = isPrefix; $f.line = line; $f.r = r; $f.rd = rd; $f.readCols = readCols; $f.v = v; $f.wholeLine = wholeLine; $f.$s = $s; $f.$r = $r; return $f;
	};
readColonFilebufio.NewReaderbytes.Countbytes.TrimSpaceio.EOFos/user.readColonFileos/user.sliceType os/user.matchGroupIndexValueos/usermatchGroupIndexValue matchGroupIndexValue�9	matchGroupIndexValue = function(value, idx) {
		var idx, leadColon, substr, value;
  �		leadColon = "";
    		if (idx > 0) {
  �			leadColon = ":";
    		}
  �		substr = (new sliceType($stringToBytes(leadColon + value + ":")));
  		return (function(line) {
			var _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, err, err$1, line, parts, v;
			v = $ifaceNil;
			err = $ifaceNil;
    			if (!bytes.Contains(line, substr) || bytes.Count(line, colon) < 3) {
  �				return [v, err];
    			}
  �			parts = strings.SplitN(($bytesToString(line)), ":", 4);
    			if (parts.$length < 4 || (0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]) === "" || !(((idx < 0 || idx >= parts.$length) ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + idx]) === value) || ((0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]).charCodeAt(0) === 43) || ((0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]).charCodeAt(0) === 45)) {
  4				return [v, err];
    			}
  D			_tuple = strconv.Atoi((2 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 2]));
			err$1 = _tuple[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp = $ifaceNil;
				_tmp$1 = $ifaceNil;
				v = _tmp;
				err = _tmp$1;
				return [v, err];
    			}
    			_tmp$2 = new Group.ptr((2 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 2]), (0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]));
			_tmp$3 = $ifaceNil;
			v = _tmp$2;
			err = _tmp$3;
			return [v, err];
    		});
    	};
matchGroupIndexValuebytes.Containsbytes.Countos/user.Groupos/user.colonos/user.matchGroupIndexValueos/user.sliceTypestrconv.Atoistrings.SplitN os/user.findGroupIdos/userfindGroupId findGroupId�	findGroupId = function(id, r) {
		var _r, _tuple, err, id, r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; id = $f.id; r = $f.r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  		_r = readColonFile(r, matchGroupIndexValue(id, 2), 3); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  N			$s = -1; return [ptrType$1.nil, err];
    		} else if (!($interfaceIsEqual(v, $ifaceNil))) {
  v			$s = -1; return [$assertType(v, ptrType$1), $ifaceNil];
    		}
  �		$s = -1; return [ptrType$1.nil, new UnknownGroupIdError((id))];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: findGroupId }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.id = id; $f.r = r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
findGroupIdos/user.Groupos/user.UnknownGroupIdErroros/user.findGroupIdos/user.matchGroupIndexValueos/user.ptrType$1os/user.readColonFile os/user.findGroupNameos/userfindGroupName findGroupName�$	findGroupName = function(name, r) {
		var _r, _tuple, err, name, r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; name = $f.name; r = $f.r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		_r = readColonFile(r, matchGroupIndexValue(name, 0), 3); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  H			$s = -1; return [ptrType$1.nil, err];
    		} else if (!($interfaceIsEqual(v, $ifaceNil))) {
  p			$s = -1; return [$assertType(v, ptrType$1), $ifaceNil];
    		}
  �		$s = -1; return [ptrType$1.nil, new UnknownGroupError((name))];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: findGroupName }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.name = name; $f.r = r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
findGroupNameos/user.UnknownGroupErroros/user.findGroupNameos/user.matchGroupIndexValueos/user.ptrType$1os/user.readColonFile os/user.matchUserIndexValueos/usermatchUserIndexValue matchUserIndexValue�
�	matchUserIndexValue = function(value, idx) {
		var idx, leadColon, substr, value;
  H		leadColon = "";
    		if (idx > 0) {
  i			leadColon = ":";
    		}
  }		substr = (new sliceType($stringToBytes(leadColon + value + ":")));
  �		return (function(line) {
			var _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, err, err$1, err$2, i, line, parts, u, v;
			v = $ifaceNil;
			err = $ifaceNil;
    			if (!bytes.Contains(line, substr) || bytes.Count(line, colon) < 6) {
   &				return [v, err];
    			}
   d			parts = strings.SplitN(($bytesToString(line)), ":", 7);
    			if (parts.$length < 6 || !(((idx < 0 || idx >= parts.$length) ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + idx]) === value) || (0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]) === "" || ((0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]).charCodeAt(0) === 43) || ((0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]).charCodeAt(0) === 45)) {
  !				return [v, err];
    			}
  !			_tuple = strconv.Atoi((2 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 2]));
			err$1 = _tuple[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp = $ifaceNil;
				_tmp$1 = $ifaceNil;
				v = _tmp;
				err = _tmp$1;
				return [v, err];
    			}
  !^			_tuple$1 = strconv.Atoi((3 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 3]));
			err$2 = _tuple$1[1];
    			if (!($interfaceIsEqual(err$2, $ifaceNil))) {
    				_tmp$2 = $ifaceNil;
				_tmp$3 = $ifaceNil;
				v = _tmp$2;
				err = _tmp$3;
				return [v, err];
    			}
  !�			u = new User.ptr((2 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 2]), (3 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 3]), (0 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 0]), (4 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 4]), (5 >= parts.$length ? ($throwRuntimeError("index out of range"), undefined) : parts.$array[parts.$offset + 5]));
  "�			i = strings.Index(u.Name, ",");
    			if (i >= 0) {
  #				u.Name = $substring(u.Name, 0, i);
    			}
    			_tmp$4 = u;
			_tmp$5 = $ifaceNil;
			v = _tmp$4;
			err = _tmp$5;
			return [v, err];
    		});
    	};
matchUserIndexValue	bytes.Containsbytes.Countos/user.Useros/user.colonos/user.matchUserIndexValueos/user.sliceTypestrconv.Atoistrings.Indexstrings.SplitN os/user.findUserIdos/user
findUserId 
findUserId�T	findUserId = function(uid, r) {
		var _r, _tuple, _tuple$1, e, err, i, r, uid, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; e = $f.e; err = $f.err; i = $f.i; r = $f.r; uid = $f.uid; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  #�		_tuple = strconv.Atoi(uid);
		i = _tuple[0];
		e = _tuple[1];
    		if (!($interfaceIsEqual(e, $ifaceNil))) {
  #�			$s = -1; return [ptrType.nil, errors.New("user: invalid userid " + uid)];
    		}
  #�		_r = readColonFile(r, matchUserIndexValue(uid, 2), 6); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		v = _tuple$1[0];
		err = _tuple$1[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  $9			$s = -1; return [ptrType.nil, err];
    		} else if (!($interfaceIsEqual(v, $ifaceNil))) {
  $a			$s = -1; return [$assertType(v, ptrType), $ifaceNil];
    		}
  ${		$s = -1; return [ptrType.nil, new UnknownUserIdError(((i >> 0)))];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: findUserId }; } $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.e = e; $f.err = err; $f.i = i; $f.r = r; $f.uid = uid; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};

findUserId
errors.Newos/user.UnknownUserIdErroros/user.findUserIdos/user.matchUserIndexValueos/user.ptrTypeos/user.readColonFilestrconv.Atoi os/user.findUsernameos/userfindUsername findUsername�	findUsername = function(name, r) {
		var _r, _tuple, err, name, r, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; err = $f.err; name = $f.name; r = $f.r; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  $�		_r = readColonFile(r, matchUserIndexValue(name, 0), 6); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		v = _tuple[0];
		err = _tuple[1];
    		if (!($interfaceIsEqual(err, $ifaceNil))) {
  %-			$s = -1; return [ptrType.nil, err];
    		} else if (!($interfaceIsEqual(v, $ifaceNil))) {
  %U			$s = -1; return [$assertType(v, ptrType), $ifaceNil];
    		}
  %o		$s = -1; return [ptrType.nil, new UnknownUserError((name))];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: findUsername }; } $f._r = _r; $f._tuple = _tuple; $f.err = err; $f.name = name; $f.r = r; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
findUsernameos/user.UnknownUserErroros/user.findUsernameos/user.matchUserIndexValueos/user.ptrTypeos/user.readColonFile os/user.lookupGroupos/userlookupGroup lookupGroup��	lookupGroup = function(groupname) {
		var $24r, $24r$1, _r, _r$1, _tuple, err, f, groupname, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; f = $f.f; groupname = $f.groupname; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  %�		_r = os.Open("/etc/group"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  %�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  %�			$24r = [ptrType$1.nil, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  &		$deferred.push([$methodVal(f, "Close"), []]);
  & 		_r$1 = findGroupName(groupname, f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [ptrType$1.nil, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: lookupGroup }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.f = f; $f.groupname = groupname; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
lookupGroupos.Openos/user.findGroupNameos/user.lookupGroupos/user.ptrType$1 os/user.lookupGroupIdos/userlookupGroupId lookupGroupId�V	lookupGroupId = function(id) {
		var $24r, $24r$1, _r, _r$1, _tuple, err, f, id, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; f = $f.f; id = $f.id; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  &w		_r = os.Open("/etc/group"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  &�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  &�			$24r = [ptrType$1.nil, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  &�		$deferred.push([$methodVal(f, "Close"), []]);
  &�		_r$1 = findGroupId(id, f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [ptrType$1.nil, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: lookupGroupId }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.f = f; $f.id = id; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
lookupGroupIdos.Openos/user.findGroupIdos/user.lookupGroupIdos/user.ptrType$1 os/user.lookupUseros/user
lookupUser 
lookupUser�x	lookupUser = function(username) {
		var $24r, $24r$1, _r, _r$1, _tuple, err, f, username, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; f = $f.f; username = $f.username; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  '		_r = os.Open("/etc/passwd"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  '9		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  'K			$24r = [ptrType.nil, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  '_		$deferred.push([$methodVal(f, "Close"), []]);
  'p		_r$1 = findUsername(username, f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [ptrType.nil, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: lookupUser }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.f = f; $f.username = username; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};

lookupUseros.Openos/user.findUsernameos/user.lookupUseros/user.ptrType os/user.lookupUserIdos/userlookupUserId lookupUserId�W	lookupUserId = function(uid) {
		var $24r, $24r$1, _r, _r$1, _tuple, err, f, uid, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; err = $f.err; f = $f.f; uid = $f.uid; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
  '�		_r = os.Open("/etc/passwd"); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		f = _tuple[0];
		err = _tuple[1];
  '�		/* */ if (!($interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(err, $ifaceNil))) { */ case 2:
  '�			$24r = [ptrType.nil, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 3:
  (		$deferred.push([$methodVal(f, "Close"), []]);
  (		_r$1 = findUserId(uid, f); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		$24r$1 = _r$1;
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return [ptrType.nil, $ifaceNil]; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: lookupUserId }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f.err = err; $f.f = f; $f.uid = uid; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
lookupUserIdos.Openos/user.findUserIdos/user.lookupUserIdos/user.ptrType "(os/user.UnknownUserIdError).Error �	UnknownUserIdError.prototype.Error = function() {
		var e;
		e = this.$val;
  0n		return "user: unknown userid " + strconv.Itoa(((e >> 0)));
    	};
	$ptrType(UnknownUserIdError).prototype.Error = function() { return new UnknownUserIdError(this.$get()).Error(); };
UnknownUserIdErroros/user.UnknownUserIdErrorstrconv.Itoa  (os/user.UnknownUserError).Error ��	UnknownUserError.prototype.Error = function() {
		var e;
		e = this.$val;
  1;		return "user: unknown user " + (e);
    	};
	$ptrType(UnknownUserError).prototype.Error = function() { return new UnknownUserError(this.$get()).Error(); };
UnknownUserErroros/user.UnknownUserError #(os/user.UnknownGroupIdError).Error ��	UnknownGroupIdError.prototype.Error = function() {
		var e;
		e = this.$val;
  2		return "group: unknown groupid " + (e);
    	};
	$ptrType(UnknownGroupIdError).prototype.Error = function() { return new UnknownGroupIdError(this.$get()).Error(); };
UnknownGroupIdErroros/user.UnknownGroupIdError !(os/user.UnknownGroupError).Error ��	UnknownGroupError.prototype.Error = function() {
		var e;
		e = this.$val;
  2�		return "group: unknown group " + (e);
    	};
	$ptrType(UnknownGroupError).prototype.Error = function() { return new UnknownGroupError(this.$get()).Error(); };
UnknownGroupErroros/user.UnknownGroupError �
�{"Base":13063,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/os/user/lookup.go","Base":1,"Size":1748,"Lines":[0,55,109,159,160,173,174,188,189,226,229,288,358,390,422,475,498,522,525,548,564,566,567,596,615,626,637,648,650,651,723,770,816,880,896,899,928,930,931,1003,1052,1095,1149,1165,1168,1194,1196,1197,1272,1320,1368,1394,1396,1397,1477,1527,1576,1603,1605,1606,1678,1724,1746],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/os/user/lookup_stubs.go","Base":1750,"Size":2005,"Lines":[0,55,109,159,160,247,311,312,325,326,335,345,352,358,369,380,382,383,397,423,425,426,458,479,555,597,626,643,659,662,663,695,707,724,750,781,808,829,832,888,911,928,947,962,966,990,1016,1020,1023,1088,1112,1169,1185,1188,1208,1231,1251,1254,1276,1297,1316,1320,1341,1344,1430,1432,1433,1476,1533,1612,1615,1670,1672,1673,1700,1733,1759,1762,1820,1879,1889,1900,1902,1903,1930,1963,1989,1992,2003],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/os/user/lookup_unix.go","Base":3756,"Size":6536,"Lines":[0,55,109,159,160,304,389,413,414,427,428,437,446,455,465,471,477,488,499,501,502,533,564,565,589,590,604,630,632,633,703,762,763,841,919,970,973,1053,1123,1211,1237,1238,1270,1277,1297,1320,1321,1386,1448,1511,1519,1538,1577,1578,1597,1650,1674,1697,1712,1718,1738,1743,1744,1803,1833,1874,1895,1905,1910,1911,1953,1954,2012,2027,2096,2106,2111,2115,2116,2189,2262,2301,2342,2392,2404,2408,2433,2463,2473,2477,2478,2523,2576,2595,2665,2688,2703,2709,2729,2734,2738,2741,2743,2744,2804,2826,2840,2858,2861,2904,2959,3028,3038,3042,3062,3110,3174,3238,3306,3377,3415,3461,3471,3475,3527,3546,3550,3602,3605,3607,3608,3667,3744,3762,3784,3809,3812,3849,3851,3852,3915,3994,4012,4034,4059,4062,4099,4101,4102,4172,4188,4247,4269,4283,4301,4304,4347,4402,4471,4481,4485,4534,4582,4646,4692,4702,4706,4758,4777,4781,4833,4852,4856,4870,4893,4916,4939,4962,4985,4989,5049,5107,5171,5183,5230,5253,5257,5273,5276,5278,5279,5337,5364,5379,5435,5438,5515,5533,5555,5579,5582,5617,5619,5620,5681,5759,5777,5799,5823,5826,5862,5864,5865,5918,5948,5965,5983,5986,6003,6039,6041,6042,6090,6120,6137,6155,6158,6175,6202,6204,6205,6255,6284,6301,6319,6322,6339,6373,6375,6376,6423,6452,6469,6487,6490,6507,6534],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/os/user/user.go","Base":10293,"Size":2769,"Lines":[0,55,109,159,160,163,219,220,292,361,433,507,508,580,647,675,678,691,692,701,712,714,715,721,788,855,857,858,893,912,936,1005,1077,1127,1139,1172,1241,1291,1341,1353,1385,1402,1447,1470,1545,1555,1604,1654,1667,1740,1756,1758,1759,1800,1803,1880,1900,1925,1952,1954,1955,2030,2058,2059,2104,2159,2161,2162,2209,2236,2265,2266,2309,2351,2353,2354,2411,2439,2471,2472,2518,2564,2566,2567,2620,2648,2678,2679,2723,2767],"Infos":null}]}
 