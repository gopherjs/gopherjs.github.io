����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �j��crypto/internal/randutilrandutiliosync_version 4

 randutil 	 MaybeReadByte  Readerio  Read"p n &err r   AA=$packages["io"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sync"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$structType("",[]);F GG=$arrayType($Uint8,1);G HH=$sliceType($Uint8);H C)C=new B.Once.ptr(new B.Mutex.ptr(0,0),0);closedChanOnce'crypto/internal/randutil.closedChanOnce
sync.Mutex	sync.Once DD=$chanNil;
closedChan#crypto/internal/randutil.closedChan &crypto/internal/randutil.MaybeReadByteE�JE=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �$r=C.Do((function(){  D=new $Chan(F,0);  &$close(D);    }));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  >c=$select([[D],[D]]);$s=2;case 2:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;if(b[0]===0){$s=3;continue;}if(b[0]===1){$s=4;continue;}$s=5;continue;    case 3:  ]$s=-1;return;    case 4:  ~d=G.zero();  �e=a.Read(new H(d));$s=6;case 6:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;    case 5:    $s=-1;return;}return;}if($f===undefined){$f={$blk:E};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.MaybeReadByte=E;MaybeReadBytecrypto/internal/randutil.Fcrypto/internal/randutil.Gcrypto/internal/randutil.H&crypto/internal/randutil.MaybeReadByte#crypto/internal/randutil.closedChan'crypto/internal/randutil.closedChanOnce �b{"Base":929,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/crypto/internal/randutil/randutil.go","Base":1,"Size":927,"Lines":[0,55,109,159,160,231,251,268,269,278,284,292,294,295,301,327,357,359,360,440,514,594,597,675,706,740,768,803,823,827,828,838,858,867,887,905,922,925],"Infos":null}]}
 