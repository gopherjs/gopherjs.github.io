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
GoLinkname�� Implementation�� 	Reference��   ���internal/oserroroserrorerrorsci A oserror	ErrClosedErrExist
ErrInvalidErrNotExistErrPermissionV V V V V   	 '	3 errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  
ErrInvalid  ErrPermission  ErrExist  ErrNotExist  	ErrClosed  9  _		$pkg.ErrInvalid = errors.New("invalid argument");

errors.Newinternal/oserror.ErrInvalid  =  �		$pkg.ErrPermission = errors.New("permission denied");

errors.Newinternal/oserror.ErrPermission  :  �		$pkg.ErrExist = errors.New("file already exists");

errors.Newinternal/oserror.ErrExist  =  �		$pkg.ErrNotExist = errors.New("file does not exist");

errors.Newinternal/oserror.ErrNotExist  ;  &		$pkg.ErrClosed = errors.New("file already closed");

errors.Newinternal/oserror.ErrClosed ��{"Base":603,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/internal/oserror/errors.go","Base":1,"Size":601,"Lines":[0,55,109,159,160,225,228,309,325,326,342,343,349,397,446,497,548,599],"Infos":null}]}
 