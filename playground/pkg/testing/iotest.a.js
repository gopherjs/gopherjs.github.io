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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �8���testing/iotestiotesterrorsiolog�Aversion 4

 iotest 	 DataErrReader  Readerio  Read"p n &err r  <  ErrTimeout &	 HalfReader <  < 	 NewReadLogger  prefix  <  < 	 NewWriteLogger     Writer  	Write"  & w  > 	 OneByteReader <  < 	 TimeoutReader <  < 	 TruncateWriter >"  
  > #CC=$packages["errors"];a    $r=C.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["io"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["log"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D��D=$pkg.writeLogger=$newType(0,$kindStruct,"iotest.writeLogger",true,"testing/iotest",false,function(prefix_,w_){this.$val=this;if(arguments.length===0){this.prefix="";this.w=$ifaceNil;return;}this.prefix=prefix_;this.w=w_;});VT.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([S],[$Int,$error],false)}];��D.init("testing/iotest",[{prop:"prefix",name:"prefix",embedded:false,exported:false,typ:$String,tag:""},{prop:"w",name:"w",embedded:false,exported:false,typ:A.Writer,tag:""}]);writeLogger	io.Writertesting/iotest.Stesting/iotest.Ttesting/iotest.writeLogger F��F=$pkg.readLogger=$newType(0,$kindStruct,"iotest.readLogger",true,"testing/iotest",false,function(prefix_,r_){this.$val=this;if(arguments.length===0){this.prefix="";this.r=$ifaceNil;return;}this.prefix=prefix_;this.r=r_;});TU.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([S],[$Int,$error],false)}];��F.init("testing/iotest",[{prop:"prefix",name:"prefix",embedded:false,exported:false,typ:$String,tag:""},{prop:"r",name:"r",embedded:false,exported:false,typ:A.Reader,tag:""}]);
readLogger	io.Readertesting/iotest.Stesting/iotest.Utesting/iotest.readLogger I��I=$pkg.oneByteReader=$newType(0,$kindStruct,"iotest.oneByteReader",true,"testing/iotest",false,function(r_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;return;}this.r=r_;});TV.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([S],[$Int,$error],false)}];aI.init("testing/iotest",[{prop:"r",name:"r",embedded:false,exported:false,typ:A.Reader,tag:""}]);oneByteReader	io.Readertesting/iotest.Stesting/iotest.Vtesting/iotest.oneByteReader K��K=$pkg.halfReader=$newType(0,$kindStruct,"iotest.halfReader",true,"testing/iotest",false,function(r_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;return;}this.r=r_;});TW.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([S],[$Int,$error],false)}];aK.init("testing/iotest",[{prop:"r",name:"r",embedded:false,exported:false,typ:A.Reader,tag:""}]);
halfReader	io.Readertesting/iotest.Stesting/iotest.Wtesting/iotest.halfReader M�M=$pkg.dataErrReader=$newType(0,$kindStruct,"iotest.dataErrReader",true,"testing/iotest",false,function(r_,unread_,data_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.unread=S.nil;this.data=S.nil;return;}this.r=r_;this.unread=unread_;this.data=data_;});TX.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([S],[$Int,$error],false)}];��M.init("testing/iotest",[{prop:"r",name:"r",embedded:false,exported:false,typ:A.Reader,tag:""},{prop:"unread",name:"unread",embedded:false,exported:false,typ:S,tag:""},{prop:"data",name:"data",embedded:false,exported:false,typ:S,tag:""}]);dataErrReader	io.Readertesting/iotest.Stesting/iotest.Xtesting/iotest.dataErrReader O��O=$pkg.timeoutReader=$newType(0,$kindStruct,"iotest.timeoutReader",true,"testing/iotest",false,function(r_,count_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.count=0;return;}this.r=r_;this.count=count_;});TY.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([S],[$Int,$error],false)}];��O.init("testing/iotest",[{prop:"r",name:"r",embedded:false,exported:false,typ:A.Reader,tag:""},{prop:"count",name:"count",embedded:false,exported:false,typ:$Int,tag:""}]);timeoutReader	io.Readertesting/iotest.Stesting/iotest.Ytesting/iotest.timeoutReader Q��Q=$pkg.truncateWriter=$newType(0,$kindStruct,"iotest.truncateWriter",true,"testing/iotest",false,function(w_,n_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.n=new $Int64(0,0);return;}this.w=w_;this.n=n_;});VZ.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([S],[$Int,$error],false)}];��Q.init("testing/iotest",[{prop:"w",name:"w",embedded:false,exported:false,typ:A.Writer,tag:""},{prop:"n",name:"n",embedded:false,exported:false,typ:$Int64,tag:""}]);truncateWriter	io.Writertesting/iotest.Stesting/iotest.Ztesting/iotest.truncateWriter RR=$sliceType($emptyInterface);R SS=$sliceType($Uint8);S TT=$ptrType(D);Ttesting/iotest.writeLogger UU=$ptrType(F);Utesting/iotest.readLogger VV=$ptrType(I);Vtesting/iotest.oneByteReader WW=$ptrType(K);Wtesting/iotest.halfReader XX=$ptrType(M);Xtesting/iotest.dataErrReader YY=$ptrType(O);Ytesting/iotest.timeoutReader ZZ=$ptrType(Q);Ztesting/iotest.truncateWriter 
ErrTimeout &    $pkg.ErrTimeout=C.New("timeout");
errors.Newtesting/iotest.ErrTimeout #(*testing/iotest.writeLogger).Write��D.ptr.prototype.Write=function(a){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  Df=d.w.Write(a);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;b=e[0];c=e[1];  [if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  m$r=B.Printf("%s %x: %v",new R([new $String(d.prefix),$subslice(a,0,b),c]));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=4;continue;case 3:  �$r=B.Printf("%s %x",new R([new $String(d.prefix),$subslice(a,0,b)]));$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 4:  �$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:D.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};D.prototype.Write=function(a){return this.$val.Write(a);};writeLogger
log.Printftesting/iotest.Rtesting/iotest.writeLogger testing/iotest.NewWriteLoggerEPE=function(a,b){var a,b;  �return new D.ptr(a,b);    };$pkg.NewWriteLogger=E;NewWriteLoggertesting/iotest.NewWriteLoggertesting/iotest.writeLogger !(*testing/iotest.readLogger).Read��F.ptr.prototype.Read=function(a){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  jf=d.r.Read(a);$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;b=e[0];c=e[1];  �if(!($interfaceIsEqual(c,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  �$r=B.Printf("%s %x: %v",new R([new $String(d.prefix),$subslice(a,0,b),c]));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=4;continue;case 3:  �$r=B.Printf("%s %x",new R([new $String(d.prefix),$subslice(a,0,b)]));$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 4:  �$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Read=function(a){return this.$val.Read(a);};
readLogger
log.Printftesting/iotest.Rtesting/iotest.readLogger testing/iotest.NewReadLoggerGOG=function(a,b){var a,b;  �return new F.ptr(a,b);    };$pkg.NewReadLogger=G;NewReadLoggertesting/iotest.NewReadLoggertesting/iotest.readLogger testing/iotest.OneByteReaderHIH=function(a){var a;  �return new I.ptr(a);    };$pkg.OneByteReader=H;OneByteReadertesting/iotest.OneByteReadertesting/iotest.oneByteReader $(*testing/iotest.oneByteReader).Read�5I.ptr.prototype.Read=function(a){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if(a.$length===0){  L$s=-1;return[0,$ifaceNil];    }  ^c=b.r.Read($subslice(a,0,1));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Read=function(a){return this.$val.Read(a);};oneByteReadertesting/iotest.oneByteReader testing/iotest.HalfReaderJFJ=function(a){var a;  	return new K.ptr(a);    };$pkg.HalfReader=J;
HalfReadertesting/iotest.HalfReadertesting/iotest.halfReader !(*testing/iotest.halfReader).Read�mK.ptr.prototype.Read=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  d=b.r.Read($subslice(a,0,(c=((a.$length+1>>0))/2,(c===c&&c!==1/0&&c!==-1/0)?c>>0:$throwRuntimeError("integer divide by zero"))));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:K.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};K.prototype.Read=function(a){return this.$val.Read(a);};
halfReadertesting/iotest.halfReader testing/iotest.DataErrReaderLbL=function(a){var a;  
6return new M.ptr(a,S.nil,$makeSlice(S,1024));    };$pkg.DataErrReader=L;DataErrReadertesting/iotest.DataErrReadertesting/iotest.Stesting/iotest.dataErrReader $(*testing/iotest.dataErrReader).Read��M.ptr.prototype.Read=function(a){var a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  [case 1:  cif(d.unread.$length===0){$s=3;continue;}$s=4;continue;    case 3:  ~f=d.r.Read(d.data);$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];h=e[1];  �d.unread=$subslice(d.data,0,g);  �c=h;    case 4:    if(b>0||!($interfaceIsEqual(c,$ifaceNil))){  �$s=2;continue;    }  �b=$copySlice(a,d.unread);  
d.unread=$subslice(d.unread,b);    $s=1;continue;case 2:  &$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Read=function(a){return this.$val.Read(a);};dataErrReadertesting/iotest.dataErrReader testing/iotest.TimeoutReaderNKN=function(a){var a;  �return new O.ptr(a,0);    };$pkg.TimeoutReader=N;TimeoutReadertesting/iotest.TimeoutReadertesting/iotest.timeoutReader $(*testing/iotest.timeoutReader).Read�FO.ptr.prototype.Read=function(a){var a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  b.count=b.count+(1)>>0;    if(b.count===2){  �$s=-1;return[0,$pkg.ErrTimeout];    }  �c=b.r.Read(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:O.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};O.prototype.Read=function(a){return this.$val.Read(a);};timeoutReadertesting/iotest.ErrTimeouttesting/iotest.timeoutReader testing/iotest.TruncateWriterPPP=function(a,b){var a,b;  return new Q.ptr(a,b);    };$pkg.TruncateWriter=P;TruncateWritertesting/iotest.TruncateWritertesting/iotest.truncateWriter &(*testing/iotest.truncateWriter).Write��Q.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;    if((e=d.n,(e.$high<0||(e.$high===0&&e.$low<=0)))){    f=a.$length;g=$ifaceNil;b=f;c=g;$s=-1;return[b,c];    }  �b=a.$length;    if((h=(new $Int64(0,b)),i=d.n,(h.$high>i.$high||(h.$high===i.$high&&h.$low>i.$low)))){  b=(((j=d.n,j.$low+((j.$high>>31)*4294967296))>>0));    }  l=d.w.Write($subslice(a,0,b));$s=1;case 1:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;b=k[0];c=k[1];  4d.n=(m=d.n,n=(new $Int64(0,b)),new $Int64(m.$high-n.$high,m.$low-n.$low));    if($interfaceIsEqual(c,$ifaceNil)){  Wb=a.$length;    }  f$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:Q.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};Q.prototype.Write=function(a){return this.$val.Write(a);};truncateWritertesting/iotest.truncateWriter �{"Base":4208,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/testing/iotest/logger.go","Base":1,"Size":1295,"Lines":[0,55,109,159,160,175,176,185,191,198,200,201,227,242,260,262,263,322,345,362,411,421,461,464,472,474,475,537,602,659,719,751,753,754,779,794,812,814,815,872,894,911,960,970,1010,1013,1021,1023,1024,1085,1149,1203,1262,1293],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/testing/iotest/reader.go","Base":1297,"Size":2235,"Lines":[0,55,109,159,160,236,251,252,261,271,277,279,280,330,381,452,453,481,494,496,497,551,569,585,588,613,615,616,668,719,784,785,810,823,825,826,877,915,917,918,995,1073,1149,1227,1273,1369,1370,1398,1416,1431,1446,1448,1449,1509,1554,1609,1616,1642,1674,1701,1715,1719,1746,1755,1759,1783,1809,1812,1820,1822,1823,1862,1863,1918,1969,2043,2044,2072,2089,2100,2102,2103,2157,2168,2187,2210,2213,2233],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/testing/iotest/writer.go","Base":3533,"Size":674,"Lines":[0,55,109,159,160,175,176,188,189,241,278,332,362,364,365,394,407,416,418,419,481,496,517,520,535,547,568,583,586,614,631,648,661,664,672],"Infos":null}]}
 