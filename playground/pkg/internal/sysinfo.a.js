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
GoLinkname�� Implementation�� 	Reference��   ���internal/sysinfosysinfointernal/cpusync�+i |�cpuInfo onceOncesyncnameNamecpudonemMutexDoofdoSlowstatesemaLocklockSlowUnlock
unlockSlownewsysinfoCPU  V    	&    T )  "6   - &	  +F &  &  T I 3 6V 8X   : 6\ 8^   A  G	 FFFFT | L +�   Q +�   Z +�   a +� l  p x  -qB cpu"	cpu = $packages["internal/cpu"];
��    		$r = cpu.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  cpuInfo�D	cpuInfo = $pkg.cpuInfo = $newType(0, $kindStruct, "sysinfo.cpuInfo", true, "internal/sysinfo", false, function(once_, name_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.once = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
			this.name = "";
			return;
		}
		this.once = once_;
		this.name = name_;
	});
b	ptrType.methods = [{prop: "Name", name: "Name", pkg: "", typ: $funcType([], [$String], false)}];
��	cpuInfo.init("internal/sysinfo", [{prop: "once", name: "once", embedded: false, exported: false, typ: sync.Once, tag: ""}, {prop: "name", name: "name", embedded: false, exported: false, typ: $String, tag: ""}]);
cpuInfointernal/sysinfo.cpuInfointernal/sysinfo.ptrType
sync.Mutex	sync.Once  ptrType	ptrType = $ptrType(cpuInfo);
ptrTypeinternal/sysinfo.cpuInfo  R		$pkg.CPU = new cpuInfo.ptr(new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)), "");
CPUinternal/sysinfo.CPUinternal/sysinfo.cpuInfo
sync.Mutex	sync.Once  (*internal/sysinfo.cpuInfo).Name �n	cpuInfo.ptr.prototype.Name = function() {
		var cpu$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; cpu$1 = $f.cpu$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		cpu$1 = [cpu$1];
		cpu$1[0] = this;
  �		$r = cpu$1[0].once.Do((function(cpu$1) { return function() {
			var name;
  			name = cpu.Name();
    			if (!(name === "")) {
  J				cpu$1[0].name = name;
  ]				return;
    			}
    		}; })(cpu$1)); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �		$s = -1; return cpu$1[0].name;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: cpuInfo.ptr.prototype.Name }; } $f.cpu$1 = cpu$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	cpuInfo.prototype.Name = function() { return this.$val.Name(); };
cpuInfointernal/cpu.Nameinternal/sysinfo.cpuInfo �{"Base":730,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/sysinfo/sysinfo.go","Base":1,"Size":728,"Lines":[0,55,109,159,160,232,291,307,308,317,345,353,355,356,378,394,407,409,410,426,427,463,485,536,582,601,611,615,705,709,726],"Infos":null}]}
 