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
GoLinkname�� Implementation�� 	Reference��   �=���#github.com/gopherjs/gopherjs/nosyncnosync��i �� mLoadMapkeyvalueokStoreLoadOrStoreactualloadedDeleteRangeflockedLockMutexUnlockdoingdoneDooOncestoreNewGetpPoolPutxwriteLockedreadLockCounterrwRWMutexRLockRUnlockcounterAddwg	WaitGroupdeltaDoneWaitnosync       $  (    3      3   3      3   3     X X    T +  6 8 <     @ B B    F H H +L 2   9 P R   @ V F\    H    T ��T � O �   Z �    a    g    q �   T � l o� F�     �       �  v�   |�   � �   �   T � � ��   � � �� ��    �    �   � ����T � O ��   Z ��   � ��   � ��    �   � ���T � � �� �   � ��   � ��   � JT�q�������" A��A=$pkg.Map=$newType(0,$kindStruct,"nosync.Map",true,"github.com/gopherjs/gopherjs/nosync",true,function(m_){this.$val=this;if(arguments.length===0){this.m=false;return;}this.m=m_;});��H.methods=[{prop:"Load",name:"Load",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface,$Bool],false)},{prop:"Store",name:"Store",pkg:"",typ:$funcType([$emptyInterface,$emptyInterface],[],false)},{prop:"LoadOrStore",name:"LoadOrStore",pkg:"",typ:$funcType([$emptyInterface,$emptyInterface],[$emptyInterface,$Bool],false)},{prop:"Delete",name:"Delete",pkg:"",typ:$funcType([$emptyInterface],[],false)},{prop:"Range",name:"Range",pkg:"",typ:$funcType([G],[],false)}];oA.init("github.com/gopherjs/gopherjs/nosync",[{prop:"m",name:"m",embedded:false,exported:false,typ:I,tag:""}]);Map%github.com/gopherjs/gopherjs/nosync.G%github.com/gopherjs/gopherjs/nosync.H%github.com/gopherjs/gopherjs/nosync.I'github.com/gopherjs/gopherjs/nosync.Map  B��B=$pkg.Mutex=$newType(0,$kindStruct,"nosync.Mutex",true,"github.com/gopherjs/gopherjs/nosync",true,function(locked_){this.$val=this;if(arguments.length===0){this.locked=false;return;}this.locked=locked_;});��J.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)}];}B.init("github.com/gopherjs/gopherjs/nosync",[{prop:"locked",name:"locked",embedded:false,exported:false,typ:$Bool,tag:""}]);Mutex%github.com/gopherjs/gopherjs/nosync.J)github.com/gopherjs/gopherjs/nosync.Mutex  C�4C=$pkg.RWMutex=$newType(0,$kindStruct,"nosync.RWMutex",true,"github.com/gopherjs/gopherjs/nosync",true,function(writeLocked_,readLockCounter_){this.$val=this;if(arguments.length===0){this.writeLocked=false;this.readLockCounter=0;return;}this.writeLocked=writeLocked_;this.readLockCounter=readLockCounter_;});�K.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)},{prop:"Unlock",name:"Unlock",pkg:"",typ:$funcType([],[],false)},{prop:"RLock",name:"RLock",pkg:"",typ:$funcType([],[],false)},{prop:"RUnlock",name:"RUnlock",pkg:"",typ:$funcType([],[],false)}];��C.init("github.com/gopherjs/gopherjs/nosync",[{prop:"writeLocked",name:"writeLocked",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"readLockCounter",name:"readLockCounter",embedded:false,exported:false,typ:$Int,tag:""}]);RWMutex%github.com/gopherjs/gopherjs/nosync.K+github.com/gopherjs/gopherjs/nosync.RWMutex  D��D=$pkg.WaitGroup=$newType(0,$kindStruct,"nosync.WaitGroup",true,"github.com/gopherjs/gopherjs/nosync",true,function(counter_){this.$val=this;if(arguments.length===0){this.counter=0;return;}this.counter=counter_;});��L.methods=[{prop:"Add",name:"Add",pkg:"",typ:$funcType([$Int],[],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[],false)},{prop:"Wait",name:"Wait",pkg:"",typ:$funcType([],[],false)}];~D.init("github.com/gopherjs/gopherjs/nosync",[{prop:"counter",name:"counter",embedded:false,exported:false,typ:$Int,tag:""}]);	WaitGroup%github.com/gopherjs/gopherjs/nosync.L-github.com/gopherjs/gopherjs/nosync.WaitGroup  E��E=$pkg.Once=$newType(0,$kindStruct,"nosync.Once",true,"github.com/gopherjs/gopherjs/nosync",true,function(doing_,done_){this.$val=this;if(arguments.length===0){this.doing=false;this.done=false;return;}this.doing=doing_;this.done=done_;});EN.methods=[{prop:"Do",name:"Do",pkg:"",typ:$funcType([M],[],false)}];��E.init("github.com/gopherjs/gopherjs/nosync",[{prop:"doing",name:"doing",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"done",name:"done",embedded:false,exported:false,typ:$Bool,tag:""}]);Once%github.com/gopherjs/gopherjs/nosync.M%github.com/gopherjs/gopherjs/nosync.N(github.com/gopherjs/gopherjs/nosync.Once  F��F=$pkg.Pool=$newType(0,$kindStruct,"nosync.Pool",true,"github.com/gopherjs/gopherjs/nosync",true,function(store_,New_){this.$val=this;if(arguments.length===0){this.store=O.nil;this.New=$throwNilPointerError;return;}this.store=store_;this.New=New_;});��P.methods=[{prop:"Get",name:"Get",pkg:"",typ:$funcType([],[$emptyInterface],false)},{prop:"Put",name:"Put",pkg:"",typ:$funcType([$emptyInterface],[],false)}];��F.init("github.com/gopherjs/gopherjs/nosync",[{prop:"store",name:"store",embedded:false,exported:false,typ:O,tag:""},{prop:"New",name:"New",embedded:false,exported:true,typ:Q,tag:""}]);Pool%github.com/gopherjs/gopherjs/nosync.O%github.com/gopherjs/gopherjs/nosync.P(github.com/gopherjs/gopherjs/nosync.Pool%github.com/gopherjs/gopherjs/nosync.Q  G=G=$funcType([$emptyInterface,$emptyInterface],[$Bool],false);G  HH=$ptrType(A);H'github.com/gopherjs/gopherjs/nosync.Map  I,I=$mapType($emptyInterface,$emptyInterface);I  JJ=$ptrType(B);J)github.com/gopherjs/gopherjs/nosync.Mutex  KK=$ptrType(C);K+github.com/gopherjs/gopherjs/nosync.RWMutex  LL=$ptrType(D);L-github.com/gopherjs/gopherjs/nosync.WaitGroup  MM=$funcType([],[],false);M  NN=$ptrType(E);N(github.com/gopherjs/gopherjs/nosync.Once  OO=$sliceType($emptyInterface);O  PP=$ptrType(F);P(github.com/gopherjs/gopherjs/nosync.Pool  Q(Q=$funcType([],[$emptyInterface],false);Q /(*github.com/gopherjs/gopherjs/nosync.Map).Load �A.ptr.prototype.Load=function(a){var a,b,c,d,e,f,g,h;b=$ifaceNil;c=false;d=this;  e=(f=d.m[$emptyInterface.keyFor(a)],f!==undefined?[f.v,true]:[$ifaceNil,false]);b=e[0];c=e[1];    g=b;h=c;b=g;c=h;return[b,c];    };A.prototype.Load=function(a){return this.$val.Load(a);};Map'github.com/gopherjs/gopherjs/nosync.Map 0(*github.com/gopherjs/gopherjs/nosync.Map).Store �A.ptr.prototype.Store=function(a,b){var a,b,c,d;c=this;    if(c.m===false){  �c.m={};    }  �d=a;(c.m||$throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(d)]={k:d,v:b};    };A.prototype.Store=function(a,b){return this.$val.Store(a,b);};Map'github.com/gopherjs/gopherjs/nosync.Map 6(*github.com/gopherjs/gopherjs/nosync.Map).LoadOrStore �A.ptr.prototype.LoadOrStore=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;c=$ifaceNil;d=false;e=this;  �f=(g=e.m[$emptyInterface.keyFor(a)],g!==undefined?[g.v,true]:[$ifaceNil,false]);h=f[0];i=f[1];    if(i){    j=h;k=true;c=j;d=k;return[c,d];    }    if(e.m===false){  Ee.m={};    }  ql=a;(e.m||$throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(l)]={k:l,v:b};    m=b;n=false;c=m;d=n;return[c,d];    };A.prototype.LoadOrStore=function(a,b){return this.$val.LoadOrStore(a,b);};Map'github.com/gopherjs/gopherjs/nosync.Map 1(*github.com/gopherjs/gopherjs/nosync.Map).Delete ��A.ptr.prototype.Delete=function(a){var a,b;b=this;    if(b.m===false){  �return;    }  delete b.m[$emptyInterface.keyFor(a)];    };A.prototype.Delete=function(a){return this.$val.Delete(a);};Map'github.com/gopherjs/gopherjs/nosync.Map 0(*github.com/gopherjs/gopherjs/nosync.Map).Range �@A.ptr.prototype.Range=function(a){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  mc=b.m;d=0;e=$keys(c);case 1:if(!(d<e.length)){$s=2;continue;}f=c[e[d]];    if(f===undefined){    d++;$s=1;continue;    }g=f.k;h=f.v;  �i=a(g,h);$s=5;case 5:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}if(!i){$s=3;continue;}$s=4;continue;    case 3:  �$s=2;continue;    case 4:    d++;$s=1;continue;case 2:    $s=-1;return;}return;}if($f===undefined){$f={$blk:A.ptr.prototype.Range};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};A.prototype.Range=function(a){return this.$val.Range(a);};Map'github.com/gopherjs/gopherjs/nosync.Map 1(*github.com/gopherjs/gopherjs/nosync.Mutex).Lock ��B.ptr.prototype.Lock=function(){var a;a=this;    if(a.locked){  q$panic(new $String("nosync: mutex is already locked"));    }  �a.locked=true;    };B.prototype.Lock=function(){return this.$val.Lock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.Mutex).Unlock ��B.ptr.prototype.Unlock=function(){var a;a=this;    if(!a.locked){  	$panic(new $String("nosync: unlock of unlocked mutex"));    }  	La.locked=false;    };B.prototype.Unlock=function(){return this.$val.Unlock();};Mutex)github.com/gopherjs/gopherjs/nosync.Mutex 3(*github.com/gopherjs/gopherjs/nosync.RWMutex).Lock ��C.ptr.prototype.Lock=function(){var a;a=this;    if(!((a.readLockCounter===0))||a.writeLocked){  
�$panic(new $String("nosync: mutex is already locked"));    }  
�a.writeLocked=true;    };C.prototype.Lock=function(){return this.$val.Lock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 5(*github.com/gopherjs/gopherjs/nosync.RWMutex).Unlock ��C.ptr.prototype.Unlock=function(){var a;a=this;    if(!a.writeLocked){  Y$panic(new $String("nosync: unlock of unlocked mutex"));    }  �a.writeLocked=false;    };C.prototype.Unlock=function(){return this.$val.Unlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.RWMutex).RLock ��C.ptr.prototype.RLock=function(){var a;a=this;    if(a.writeLocked){  :$panic(new $String("nosync: mutex is already locked"));    }  ga.readLockCounter=a.readLockCounter+(1)>>0;    };C.prototype.RLock=function(){return this.$val.RLock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 6(*github.com/gopherjs/gopherjs/nosync.RWMutex).RUnlock �C.ptr.prototype.RUnlock=function(){var a;a=this;    if(a.readLockCounter===0){  L$panic(new $String("nosync: unlock of unlocked mutex"));    }  za.readLockCounter=a.readLockCounter-(1)>>0;    };C.prototype.RUnlock=function(){return this.$val.RUnlock();};RWMutex+github.com/gopherjs/gopherjs/nosync.RWMutex 4(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Add ��D.ptr.prototype.Add=function(a){var a,b;b=this;  ub.counter=b.counter+(a)>>0;    if(b.counter<0){  �$panic(new $String("sync: negative WaitGroup counter"));    }    };D.prototype.Add=function(a){return this.$val.Add(a);};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Done yD.ptr.prototype.Done=function(){var a;a=this;  a.Add(-1);    };D.prototype.Done=function(){return this.$val.Done();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup 5(*github.com/gopherjs/gopherjs/nosync.WaitGroup).Wait ��D.ptr.prototype.Wait=function(){var a;a=this;    if(!((a.counter===0))){  �$panic(new $String("sync: WaitGroup counter not zero"));    }    };D.prototype.Wait=function(){return this.$val.Wait();};	WaitGroup-github.com/gopherjs/gopherjs/nosync.WaitGroup .(*github.com/gopherjs/gopherjs/nosync.Once).Do ��E.ptr.prototype.Do=function(a){var a,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=[b];b[0]=this;    if(b[0].done){  c$s=-1;return;    }    if(b[0].doing){  }$panic(new $String("nosync: Do called within f"));    }  �b[0].doing=true;  �$deferred.push([(function(b){return function(){  �b[0].doing=false;  �b[0].done=true;    };})(b),[]]);  �$r=a();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:E.ptr.prototype.Do};}$f.a=a;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};E.prototype.Do=function(a){return this.$val.Do(a);};Once(github.com/gopherjs/gopherjs/nosync.Once /(*github.com/gopherjs/gopherjs/nosync.Pool).Get ��F.ptr.prototype.Get=function(){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  +if(a.store.$length===0){$s=1;continue;}$s=2;continue;    case 1:  Dif(!(a.New===$throwNilPointerError)){$s=3;continue;}$s=4;continue;    case 3:  Yb=a.New();$s=5;case 5:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    case 4:  n$s=-1;return $ifaceNil;    case 2:  }e=(c=a.store,d=a.store.$length-1>>0,((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]));  �a.store=$subslice(a.store,0,(a.store.$length-1>>0));  �$s=-1;return e;    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Get};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Get=function(){return this.$val.Get();};Pool(github.com/gopherjs/gopherjs/nosync.Pool /(*github.com/gopherjs/gopherjs/nosync.Pool).Put ��F.ptr.prototype.Put=function(a){var a,b;b=this;    if($interfaceIsEqual(a,$ifaceNil)){  return;    }  &b.store=$append(b.store,a);    };F.prototype.Put=function(a){return this.$val.Put(a);};Pool(github.com/gopherjs/gopherjs/nosync.Pool ��{"Base":7238,"Files":[{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/github.com/gopherjs/gopherjs/nosync/map.go","Base":1,"Size":1958,"Lines":[0,15,16,100,176,179,215,218,263,281,312,314,315,383,404,467,534,556,574,576,577,612,658,675,717,720,738,740,741,807,860,931,1017,1049,1070,1073,1090,1132,1135,1153,1174,1176,1177,1216,1256,1273,1282,1285,1303,1305,1306,1379,1429,1432,1513,1594,1675,1716,1719,1797,1840,1899,1924,1940,1949,1953,1956],"Infos":null},{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/github.com/gopherjs/gopherjs/nosync/mutex.go","Base":1960,"Size":2073,"Lines":[0,15,16,59,79,92,94,95,159,184,199,242,245,262,264,265,329,356,372,416,419,437,439,440,485,507,529,550,552,553,653,681,729,772,775,798,800,801,891,921,943,987,990,1014,1016,1017,1118,1147,1168,1211,1214,1236,1238,1239,1381,1412,1442,1486,1489,1511,1513,1514,1561,1585,1598,1600,1601,1702,1740,1761,1782,1826,1829,1831,1832,1874,1904,1916,1918,1919,1972,2002,2024,2068,2071],"Infos":null},{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/github.com/gopherjs/gopherjs/nosync/once.go","Base":4034,"Size":1072,"Lines":[0,15,16,75,94,106,118,120,121,190,253,271,349,423,473,476,553,629,677,730,733,780,783,859,881,884,914,927,936,939,953,991,994,1010,1026,1044,1060,1065,1070],"Infos":null},{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/github.com/gopherjs/gopherjs/nosync/pool.go","Base":5107,"Size":2130,"Lines":[0,15,16,91,105,108,188,265,295,298,363,366,440,517,597,612,615,687,761,838,862,865,942,1021,1091,1105,1108,1188,1267,1347,1361,1364,1383,1404,1430,1432,1433,1501,1540,1600,1675,1706,1709,1780,1812,1847,1871,1891,1909,1913,1926,1929,1959,1995,2005,2007,2008,2035,2071,2086,2095,2098,2128],"Infos":null}]}
 