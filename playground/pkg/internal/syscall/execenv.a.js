˙˙Archive˙ 	
ImportPath Name Imports˙ 
ExportData
 Declarations˙ 	IncJSCode
 FileSet
 Minified GoLinknames˙   ˙[]string˙   ˙[]*compiler.Decl˙ ˙  ˙´˙˙ FullName LinkingName˙ Vars˙ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps˙ Blocking   *˙SymName˙ PkgPath Name   $˙[]compiler.GoLinkname˙ ˙  ;˙
GoLinkname˙ Implementation˙ 	Reference˙   ū+˙internal/syscall/execenvexecenvsyscallū#i ĻŨsysSysProcAttrsyscall Chroot
CredentialPtraceSetsidSetpgidSetcttyNocttyCtty
ForegroundPgid	PdeathsigSignal
CloneflagsUnshareflagsUidMappingsSysProcIDMapGidMappingsGidMappingsEnableSetgroupsAmbientCapsUidGidGroupsNoSetGroupssStringContainerIDHostIDSizeexecenvDefault  F   # %    5 o ==    8  +   2   9   A   I   P  U   `  e:  v    A  §C  ŗ   ÎE T G 	 Ú	  Ū	  â¨  é  T Ē T  o õ:   ÷ õ:   ū     T ã    ĻoĢØ syscall!	syscall = $packages["syscall"];
˙    		$r = syscall.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  internal/syscall/execenv.Defaultinternal/syscall/execenvDefault Defaultū	Default = function(sys) {
		var $24r, _r, sys, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; sys = $f.sys; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  Ũ		_r = syscall.Environ(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = [_r, $ifaceNil];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Default }; } $f.$24r = $24r; $f._r = _r; $f.sys = sys; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Default = Default;
Default internal/syscall/execenv.Defaultsyscall.Environ ˙õ{"Base":510,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/internal/syscall/execenv/execenv_default.go","Base":1,"Size":508,"Lines":[0,55,109,159,160,180,199,200,216,217,234,235,282,327,340,343,393,416,475,506],"Infos":null}]}
 