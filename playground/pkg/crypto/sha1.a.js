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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �k���crypto/sha1sha1cryptoerrorshash��version 4

 sha1  BlockSize *%�	 New   Hashhash
 
    	Reset   Size   Sum"b "  	Write"pio n &err    *%(	  "data  (" "AA=$packages["crypto"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["hash"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} E�
E=$pkg.digest=$newType(0,$kindStruct,"sha1.digest",true,"crypto/sha1",false,function(h_,x_,nx_,len_){this.$val=this;if(arguments.length===0){this.h=S.zero();this.x=T.zero();this.nx=0;this.len=new $Uint64(0,0);return;}this.h=h_;this.x=x_;this.nx=nx_;this.len=len_;});��W.methods=[{prop:"MarshalBinary",name:"MarshalBinary",pkg:"",typ:$funcType([],[P,$error],false)},{prop:"UnmarshalBinary",name:"UnmarshalBinary",pkg:"",typ:$funcType([P],[$error],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([P],[P],false)},{prop:"checkSum",name:"checkSum",pkg:"crypto/sha1",typ:$funcType([],[U],false)},{prop:"ConstantTimeSum",name:"ConstantTimeSum",pkg:"",typ:$funcType([P],[P],false)},{prop:"constSum",name:"constSum",pkg:"crypto/sha1",typ:$funcType([],[U],false)}];�#E.init("crypto/sha1",[{prop:"h",name:"h",embedded:false,exported:false,typ:S,tag:""},{prop:"x",name:"x",embedded:false,exported:false,typ:T,tag:""},{prop:"nx",name:"nx",embedded:false,exported:false,typ:$Int,tag:""},{prop:"len",name:"len",embedded:false,exported:false,typ:$Uint64,tag:""}]);digestcrypto/sha1.Pcrypto/sha1.Scrypto/sha1.Tcrypto/sha1.Ucrypto/sha1.Wcrypto/sha1.digest PP=$sliceType($Uint8);P QQ=$arrayType($Uint8,8);Q RR=$arrayType($Uint8,4);R SS=$arrayType($Uint32,5);S TT=$arrayType($Uint8,64);T UU=$arrayType($Uint8,20);U VV=$arrayType($Uint32,16);V WW=$ptrType(E);Wcrypto/sha1.digest Oblock 	    O=N;blockcrypto/sha1.blockcrypto/sha1.blockGeneric crypto/sha1.initD-D=function(){  �A.RegisterHash(3,J);    };	    D();crypto.RegisterHashcrypto/sha1.Newcrypto/sha1.init #(*crypto/sha1.digest).MarshalBinary��E.ptr.prototype.MarshalBinary=function(){var a,b;a=this;  �b=$makeSlice(P,0,96);  �b=$appendSlice(b,"sha\x01");  �b=G(b,a.h[0]);  b=G(b,a.h[1]);  .b=G(b,a.h[2]);  Kb=G(b,a.h[3]);  hb=G(b,a.h[4]);  �b=$appendSlice(b,$subslice(new P(a.x),0,a.nx));  �b=$subslice(b,0,((b.$length+64>>0)-(a.nx)>>0));  �b=F(b,a.len);  �return[b,$ifaceNil];    };E.prototype.MarshalBinary=function(){return this.$val.MarshalBinary();};digestcrypto/sha1.Pcrypto/sha1.appendUint32crypto/sha1.appendUint64crypto/sha1.digest %(*crypto/sha1.digest).UnmarshalBinary��E.ptr.prototype.UnmarshalBinary=function(a){var a,b,c,d,e,f,g,h,i;b=this;    if(a.$length<4||!(($bytesToString($subslice(a,0,4)))==="sha\x01")){  ureturn B.New("crypto/sha1: invalid hash state identifier");    }    if(!((a.$length===96))){  �return B.New("crypto/sha1: invalid hash state size");    }  a=$subslice(a,4);  *c=I(a);a=c[0];b.h[0]=c[1];  Hd=I(a);a=d[0];b.h[1]=d[1];  fe=I(a);a=e[0];b.h[2]=e[1];  �f=I(a);a=f[0];b.h[3]=f[1];  �g=I(a);a=g[0];b.h[4]=g[1];  �a=$subslice(a,$copySlice(new P(b.x),a));  �h=H(a);a=h[0];b.len=h[1];  �b.nx=(i=((b.len.$low>>0))%64,i===i?i:$throwRuntimeError("integer divide by zero"));  return $ifaceNil;    };E.prototype.UnmarshalBinary=function(a){return this.$val.UnmarshalBinary(a);};digestcrypto/sha1.Pcrypto/sha1.consumeUint32crypto/sha1.consumeUint64crypto/sha1.digest
errors.New crypto/sha1.appendUint64FiF=function(a,b){var a,b,c;  Sc=Q.zero();  ^L(new P(c),b);  rreturn $appendSlice(a,new P(c));    };appendUint64crypto/sha1.Pcrypto/sha1.Qcrypto/sha1.appendUint64crypto/sha1.putUint64 crypto/sha1.appendUint32GiG=function(a,b){var a,b,c;  �c=R.zero();  �M(new P(c),b);  �return $appendSlice(a,new P(c));    };appendUint32crypto/sha1.Pcrypto/sha1.Rcrypto/sha1.appendUint32crypto/sha1.putUint32 crypto/sha1.consumeUint64H�H=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  0$unused((7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]));  :p=(b=(c=(d=(e=(f=(g=(h=(new $Uint64(0,(7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]))),i=$shiftLeft64((new $Uint64(0,(6>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+6]))),8),new $Uint64(h.$high|i.$high,(h.$low|i.$low)>>>0)),j=$shiftLeft64((new $Uint64(0,(5>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+5]))),16),new $Uint64(g.$high|j.$high,(g.$low|j.$low)>>>0)),k=$shiftLeft64((new $Uint64(0,(4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4]))),24),new $Uint64(f.$high|k.$high,(f.$low|k.$low)>>>0)),l=$shiftLeft64((new $Uint64(0,(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]))),32),new $Uint64(e.$high|l.$high,(e.$low|l.$low)>>>0)),m=$shiftLeft64((new $Uint64(0,(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]))),40),new $Uint64(d.$high|m.$high,(d.$low|m.$low)>>>0)),n=$shiftLeft64((new $Uint64(0,(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]))),48),new $Uint64(c.$high|n.$high,(c.$low|n.$low)>>>0)),o=$shiftLeft64((new $Uint64(0,(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]))),56),new $Uint64(b.$high|o.$high,(b.$low|o.$low)>>>0));  �return[$subslice(a,8),p];    };consumeUint64crypto/sha1.consumeUint64 crypto/sha1.consumeUint32I�eI=function(a){var a,b;  	$unused((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]));  	!b=((((((((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3])>>>0))|((((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2])>>>0))<<8>>>0))>>>0)|((((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])>>>0))<<16>>>0))>>>0)|((((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])>>>0))<<24>>>0))>>>0;  	lreturn[$subslice(a,4),b];    };consumeUint32crypto/sha1.consumeUint32 (*crypto/sha1.digest).Reset�E.ptr.prototype.Reset=function(){var a;a=this;  	�a.h[0]=1732584193;  	�a.h[1]=4023233417;  	�a.h[2]=2562383102;  	�a.h[3]=271733878;  	�a.h[4]=3285377520;  	�a.nx=0;  	�a.len=new $Uint64(0,0);    };E.prototype.Reset=function(){return this.$val.Reset();};digestcrypto/sha1.digest crypto/sha1.NewJyJ=function(){var a;  
�a=new E.ptr(S.zero(),T.zero(),0,new $Uint64(0,0));  
�a.Reset();  return a;    };$pkg.New=J;Newcrypto/sha1.Newcrypto/sha1.Scrypto/sha1.Tcrypto/sha1.digest (*crypto/sha1.digest).SizeyE.ptr.prototype.Size=function(){var a;a=this;  -return 20;    };E.prototype.Size=function(){return this.$val.Size();};digestcrypto/sha1.digest (*crypto/sha1.digest).BlockSize��E.ptr.prototype.BlockSize=function(){var a;a=this;  _return 64;    };E.prototype.BlockSize=function(){return this.$val.BlockSize();};digestcrypto/sha1.digest (*crypto/sha1.digest).Write��E.ptr.prototype.Write=function(a){var a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  �b=a.$length;  �d.len=(e=d.len,f=(new $Uint64(0,b)),new $Uint64(e.$high+f.$high,e.$low+f.$low));  �if(d.nx>0){$s=1;continue;}$s=2;continue;    case 1:  �g=$copySlice($subslice(new P(d.x),d.nx),a);  �d.nx=d.nx+(g)>>0;  if(d.nx===64){$s=3;continue;}$s=4;continue;    case 3:  $r=O(d,new P(d.x));$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  .d.nx=0;    case 4:  =a=$subslice(a,g);    case 2:  Kif(a.$length>=64){$s=6;continue;}$s=7;continue;    case 6:  bh=(a.$length&~63)>>0;  $r=O(d,$subslice(a,0,h));$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �a=$subslice(a,h);    case 7:    if(a.$length>0){  �d.nx=$copySlice(new P(d.x),a);    }  �$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Write};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Write=function(a){return this.$val.Write(a);};digestcrypto/sha1.Pcrypto/sha1.blockcrypto/sha1.digest (*crypto/sha1.digest).Sum�DE.ptr.prototype.Sum=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  Bc=$clone(b,E);  Ld=c.checkSum();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=$clone(d,U);  c$s=-1;return $appendSlice(a,new P(e));    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.Sum};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.Sum=function(a){return this.$val.Sum(a);};digestcrypto/sha1.Pcrypto/sha1.Ucrypto/sha1.checkSum~crypto/sha1.digest (*crypto/sha1.digest).checkSum�E.ptr.prototype.checkSum=function(){var a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=a.len;  �c=T.zero();  
c[0]=128;  if((d=$div64(b,new $Uint64(0,64),true),(d.$high<0||(d.$high===0&&d.$low<56)))){$s=1;continue;}$s=2;continue;    case 1:  ,f=a.Write($subslice(new P(c),0,$flatten64((e=$div64(b,new $Uint64(0,64),true),new $Uint64(0-e.$high,56-e.$low)))));$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=3;continue;case 2:  Th=a.Write($subslice(new P(c),0,$flatten64((g=$div64(b,new $Uint64(0,64),true),new $Uint64(0-g.$high,120-g.$low)))));$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}h;    case 3:  �b=$shiftLeft64(b,(3));  �L(new P(c),b);  �i=a.Write($subslice(new P(c),0,8));$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}i;    if(!((a.nx===0))){  �$panic(new $String("d.nx != 0"));    }  �j=U.zero();  M($subslice(new P(j),0),a.h[0]);  #M($subslice(new P(j),4),a.h[1]);  BM($subslice(new P(j),8),a.h[2]);  aM($subslice(new P(j),12),a.h[3]);  �M($subslice(new P(j),16),a.h[4]);  �$s=-1;return j;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.checkSum};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.checkSum=function(){return this.$val.checkSum();};digest	checkSum~crypto/sha1.Pcrypto/sha1.Tcrypto/sha1.Ucrypto/sha1.digestcrypto/sha1.putUint32crypto/sha1.putUint64 %(*crypto/sha1.digest).ConstantTimeSum�tE.ptr.prototype.ConstantTimeSum=function(a){var a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  3c=$clone(b,E);  =d=c.constSum();$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=$clone(d,U);  T$s=-1;return $appendSlice(a,new P(e));    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.ConstantTimeSum};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.ConstantTimeSum=function(a){return this.$val.ConstantTimeSum(a);};digestcrypto/sha1.Pcrypto/sha1.Ucrypto/sha1.constSum~crypto/sha1.digest (*crypto/sha1.digest).constSum��E.ptr.prototype.constSum=function(){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=Q.zero();  �c=$shiftLeft64(a.len,3);  �d=0;while(true){if(!(d<8)){break;}  �((d<0||d>=b.length)?($throwRuntimeError("index out of range"),undefined):b[d]=(($shiftRightUint64(c,((56-(8*d>>>0)>>>0))).$low<<24>>>24)));  �d=d+(1)>>>0;    }  e=((a.nx<<24>>>24));  f=e-56<<24>>>24;  cg=(((((f<<24>>24))>>7<<24>>24)<<24>>>24));  �h=128;  �i=0;while(true){if(!(i<64)){break;}  
j=((((((i-e<<24>>>24)<<24>>24))>>7<<24>>24)<<24>>>24));  �(l=a.x,((i<0||i>=l.length)?($throwRuntimeError("index out of range"),undefined):l[i]=((((((~j<<24>>>24)&h)>>>0))|(((j&(k=a.x,((i<0||i>=k.length)?($throwRuntimeError("index out of range"),undefined):k[i])))>>>0)))>>>0)));  �h=(h&(j))>>>0;    if(i>=56){  I(o=a.x,((i<0||i>=o.length)?($throwRuntimeError("index out of range"),undefined):o[i]=(((m=a.x,((i<0||i>=m.length)?($throwRuntimeError("index out of range"),undefined):m[i]))|(((g&(n=i-56<<24>>>24,((n<0||n>=b.length)?($throwRuntimeError("index out of range"),undefined):b[n])))>>>0)))>>>0)));    }  i=i+(1)<<24>>>24;    }  �$r=O(a,new P(a.x));$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �p=U.zero();  �q=a.h;r=0;while(true){if(!(r<5)){break;}s=r;t=((r<0||r>=q.length)?($throwRuntimeError("index out of range"),undefined):q[r]);  �(u=$imul(s,4),((u<0||u>=p.length)?($throwRuntimeError("index out of range"),undefined):p[u]=((g&(((t>>>24>>>0)<<24>>>24)))>>>0)));  (v=($imul(s,4))+1>>0,((v<0||v>=p.length)?($throwRuntimeError("index out of range"),undefined):p[v]=((g&(((t>>>16>>>0)<<24>>>24)))>>>0)));  A(w=($imul(s,4))+2>>0,((w<0||w>=p.length)?($throwRuntimeError("index out of range"),undefined):p[w]=((g&(((t>>>8>>>0)<<24>>>24)))>>>0)));  g(x=($imul(s,4))+3>>0,((x<0||x>=p.length)?($throwRuntimeError("index out of range"),undefined):p[x]=((g&((t<<24>>>24)))>>>0)));    r++;}  �y=0;while(true){if(!(y<64)){break;}    if(y<56){  (z=a.x,((y<0||y>=z.length)?($throwRuntimeError("index out of range"),undefined):z[y]=h));  "h=0;    }else{  >(ab=a.x,((y<0||y>=ab.length)?($throwRuntimeError("index out of range"),undefined):ab[y]=(aa=y-56<<24>>>24,((aa<0||aa>=b.length)?($throwRuntimeError("index out of range"),undefined):b[aa]))));    }  �y=y+(1)<<24>>>24;    }  �$r=O(a,new P(a.x));$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �ac=a.h;ad=0;while(true){if(!(ad<5)){break;}ae=ad;af=((ad<0||ad>=ac.length)?($throwRuntimeError("index out of range"),undefined):ac[ad]);    ag=$imul(ae,4);  �((ag<0||ag>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ag]=((((ag<0||ag>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ag])|((((~g<<24>>>24)&(((af>>>24>>>0)<<24>>>24)))>>>0)))>>>0));    ah=($imul(ae,4))+1>>0;  �((ah<0||ah>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ah]=((((ah<0||ah>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ah])|((((~g<<24>>>24)&(((af>>>16>>>0)<<24>>>24)))>>>0)))>>>0));    ai=($imul(ae,4))+2>>0;  (((ai<0||ai>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ai]=((((ai<0||ai>=p.length)?($throwRuntimeError("index out of range"),undefined):p[ai])|((((~g<<24>>>24)&(((af>>>8>>>0)<<24>>>24)))>>>0)))>>>0));    aj=($imul(ae,4))+3>>0;  P((aj<0||aj>=p.length)?($throwRuntimeError("index out of range"),undefined):p[aj]=((((aj<0||aj>=p.length)?($throwRuntimeError("index out of range"),undefined):p[aj])|((((~g<<24>>>24)&((af<<24>>>24)))>>>0)))>>>0));    ad++;}  x$s=-1;return p;    }return;}if($f===undefined){$f={$blk:E.ptr.prototype.constSum};}$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};E.prototype.constSum=function(){return this.$val.constSum();};digest	constSum~crypto/sha1.Pcrypto/sha1.Qcrypto/sha1.Ucrypto/sha1.blockcrypto/sha1.digest crypto/sha1.SumK�FK=function(a){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=new E.ptr(S.zero(),T.zero(),0,new $Uint64(0,0));  �b.Reset();  �c=b.Write(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}c;  d=b.checkSum();$s=2;case 2:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:K};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Sum=K;Sumcrypto/sha1.Scrypto/sha1.Sumcrypto/sha1.Tcrypto/sha1.checkSum~crypto/sha1.digest crypto/sha1.putUint64L��L=function(a,b){var a,b;  A$unused((7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]));  K(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(($shiftRightUint64(b,56).$low<<24>>>24)));  a(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(($shiftRightUint64(b,48).$low<<24>>>24)));  w(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(($shiftRightUint64(b,40).$low<<24>>>24)));  �(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=(($shiftRightUint64(b,32).$low<<24>>>24)));  �(4>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+4]=(($shiftRightUint64(b,24).$low<<24>>>24)));  �(5>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+5]=(($shiftRightUint64(b,16).$low<<24>>>24)));  �(6>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+6]=(($shiftRightUint64(b,8).$low<<24>>>24)));  �(7>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+7]=((b.$low<<24>>>24)));    };	putUint64crypto/sha1.putUint64 crypto/sha1.putUint32M�_M=function(a,b){var a,b;  $unused((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]));  &(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((b>>>24>>>0)<<24>>>24)));  <(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((b>>>16>>>0)<<24>>>24)));  R(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((b>>>8>>>0)<<24>>>24)));  g(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=((b<<24>>>24)));    };	putUint32crypto/sha1.putUint32 crypto/sha1.blockGenericN��N=function(a,b){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  "c=V.zero();  1d=a.h[0];e=a.h[1];f=a.h[2];g=a.h[3];h=a.h[4];i=d;j=e;k=f;l=g;m=h;  ywhile(true){if(!(b.$length>=64)){break;}  �n=0;while(true){if(!(n<16)){break;}  o=$imul(n,4);  ((n<0||n>=c.length)?($throwRuntimeError("index out of range"),undefined):c[n]=(((((((((((o<0||o>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+o])>>>0))<<24>>>0)|((((p=o+1>>0,((p<0||p>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+p]))>>>0))<<16>>>0))>>>0)|((((q=o+2>>0,((q<0||q>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+q]))>>>0))<<8>>>0))>>>0)|(((r=o+3>>0,((r<0||r>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+r]))>>>0)))>>>0));  �n=n+(1)>>0;    }  ms=i;t=j;u=k;v=l;w=m;x=s;y=t;z=u;aa=v;ab=w;  ac=0;  while(true){if(!(ac<16)){break;}  2ad=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;  Gae=((x<<5>>>0)|(x>>>27>>>0))>>>0;  aaf=((y<<30>>>0)|(y>>>2>>>0))>>>0;  ~ah=(((ae+ad>>>0)+ab>>>0)+(ag=ac&15,((ag<0||ag>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ag]))>>>0)+1518500249>>>0;  �ai=ah;aj=x;ak=af;al=z;am=aa;x=ai;y=aj;z=ak;aa=al;ab=am;  )ac=ac+(1)>>0;    }  �while(true){if(!(ac<20)){break;}  �ar=((((((an=((ac-3>>0))&15,((an<0||an>=c.length)?($throwRuntimeError("index out of range"),undefined):c[an]))^(ao=((ac-8>>0))&15,((ao<0||ao>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ao])))>>>0)^(ap=((ac-14>>0))&15,((ap<0||ap>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ap])))>>>0)^(aq=(ac)&15,((aq<0||aq>=c.length)?($throwRuntimeError("index out of range"),undefined):c[aq])))>>>0;  "(as=ac&15,((as<0||as>=c.length)?($throwRuntimeError("index out of range"),undefined):c[as]=(((ar<<1>>>0)|(ar>>>31>>>0))>>>0)));  Fat=(((y&z)>>>0)|((((~y>>>0))&aa)>>>0))>>>0;  [au=((x<<5>>>0)|(x>>>27>>>0))>>>0;  uav=((y<<30>>>0)|(y>>>2>>>0))>>>0;  �ax=(((au+at>>>0)+ab>>>0)+(aw=ac&15,((aw<0||aw>=c.length)?($throwRuntimeError("index out of range"),undefined):c[aw]))>>>0)+1518500249>>>0;  �ay=ax;az=x;ba=av;bb=z;bc=aa;x=ay;y=az;z=ba;aa=bb;ab=bc;  �ac=ac+(1)>>0;    }  �while(true){if(!(ac<40)){break;}  �bh=((((((bd=((ac-3>>0))&15,((bd<0||bd>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bd]))^(be=((ac-8>>0))&15,((be<0||be>=c.length)?($throwRuntimeError("index out of range"),undefined):c[be])))>>>0)^(bf=((ac-14>>0))&15,((bf<0||bf>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bf])))>>>0)^(bg=(ac)&15,((bg<0||bg>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bg])))>>>0;  6(bi=ac&15,((bi<0||bi>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bi]=(((bh<<1>>>0)|(bh>>>31>>>0))>>>0)));  Ybj=(((y^z)>>>0)^aa)>>>0;  kbk=((x<<5>>>0)|(x>>>27>>>0))>>>0;  �bl=((y<<30>>>0)|(y>>>2>>>0))>>>0;  �bn=(((bk+bj>>>0)+ab>>>0)+(bm=ac&15,((bm<0||bm>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bm]))>>>0)+1859775393>>>0;  �bo=bn;bp=x;bq=bl;br=z;bs=aa;x=bo;y=bp;z=bq;aa=br;ab=bs;  �ac=ac+(1)>>0;    }  �while(true){if(!(ac<60)){break;}  bx=((((((bt=((ac-3>>0))&15,((bt<0||bt>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bt]))^(bu=((ac-8>>0))&15,((bu<0||bu>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bu])))>>>0)^(bv=((ac-14>>0))&15,((bv<0||bv>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bv])))>>>0)^(bw=(ac)&15,((bw<0||bw>=c.length)?($throwRuntimeError("index out of range"),undefined):c[bw])))>>>0;  F(by=ac&15,((by<0||by>=c.length)?($throwRuntimeError("index out of range"),undefined):c[by]=(((bx<<1>>>0)|(bx>>>31>>>0))>>>0)));  ibz=(((((((y|z)>>>0))&aa)>>>0))|(((y&z)>>>0)))>>>0;  �ca=((x<<5>>>0)|(x>>>27>>>0))>>>0;  �cb=((y<<30>>>0)|(y>>>2>>>0))>>>0;  �cd=(((ca+bz>>>0)+ab>>>0)+(cc=ac&15,((cc<0||cc>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cc]))>>>0)+2400959708>>>0;  �ce=cd;cf=x;cg=cb;ch=z;ci=aa;x=ce;y=cf;z=cg;aa=ch;ab=ci;  �ac=ac+(1)>>0;    }   while(true){if(!(ac<80)){break;}   "cn=((((((cj=((ac-3>>0))&15,((cj<0||cj>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cj]))^(ck=((ac-8>>0))&15,((ck<0||ck>=c.length)?($throwRuntimeError("index out of range"),undefined):c[ck])))>>>0)^(cl=((ac-14>>0))&15,((cl<0||cl>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cl])))>>>0)^(cm=(ac)&15,((cm<0||cm>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cm])))>>>0;   e(co=ac&15,((co<0||co>=c.length)?($throwRuntimeError("index out of range"),undefined):c[co]=(((cn<<1>>>0)|(cn>>>31>>>0))>>>0)));   �cp=(((y^z)>>>0)^aa)>>>0;   �cq=((x<<5>>>0)|(x>>>27>>>0))>>>0;   �cr=((y<<30>>>0)|(y>>>2>>>0))>>>0;   �ct=(((cq+cp>>>0)+ab>>>0)+(cs=ac&15,((cs<0||cs>=c.length)?($throwRuntimeError("index out of range"),undefined):c[cs]))>>>0)+3395469782>>>0;   �cu=ct;cv=x;cw=cr;cx=z;cy=aa;x=cu;y=cv;z=cw;aa=cx;ab=cy;   ac=ac+(1)>>0;    }  !i=i+(x)>>>0;  !&j=j+(y)>>>0;  !0k=k+(z)>>>0;  !:l=l+(aa)>>>0;  !Dm=m+(ab)>>>0;  !Ob=$subslice(b,64);    }  !bcz=i;da=j;db=k;dc=l;dd=m;a.h[0]=cz;a.h[1]=da;a.h[2]=db;a.h[3]=dc;a.h[4]=dd;    };blockGenericcrypto/sha1.Vcrypto/sha1.blockGeneric �	7{"Base":8871,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/crypto/sha1/sha1.go","Base":1,"Size":6263,"Lines":[0,55,109,159,160,236,239,310,327,340,341,350,360,370,378,380,381,395,434,436,437,479,495,496,532,553,554,562,574,594,614,634,654,674,676,677,736,757,772,789,798,810,812,813,821,848,894,896,897,948,985,1010,1039,1068,1097,1126,1155,1185,1236,1264,1279,1281,1282,1333,1394,1460,1463,1493,1553,1556,1576,1606,1636,1666,1696,1726,1751,1780,1807,1819,1821,1822,1869,1884,1904,1931,1933,1934,1981,1996,2016,2043,2045,2046,2094,2104,2181,2257,2274,2276,2277,2325,2335,2410,2427,2429,2430,2457,2473,2489,2505,2521,2537,2547,2558,2560,2561,2635,2708,2765,2788,2806,2817,2827,2829,2830,2874,2875,2929,2930,2985,2998,3019,3034,3061,3073,3094,3114,3126,3130,3142,3145,3167,3196,3214,3226,3229,3246,3271,3274,3282,3284,3285,3326,3392,3402,3425,3456,3458,3459,3500,3514,3574,3592,3607,3625,3655,3665,3698,3701,3702,3722,3733,3757,3776,3777,3793,3814,3817,3818,3841,3842,3873,3904,3935,3967,3999,4000,4015,4017,4018,4092,4145,4155,4178,4209,4211,4212,4253,4273,4290,4322,4358,4361,4362,4380,4449,4521,4522,4579,4615,4677,4678,4744,4793,4794,4828,4848,4849,4864,4933,4968,4972,4975,4976,5039,5057,5058,5081,5106,5143,5182,5220,5255,5258,5259,5295,5370,5384,5406,5423,5434,5459,5463,5466,5467,5545,5563,5564,5589,5628,5669,5709,5746,5749,5750,5765,5767,5768,5815,5850,5864,5875,5890,5911,5913,5914,5951,5961,5983,6005,6027,6049,6071,6093,6114,6130,6132,6133,6170,6180,6202,6224,6245,6261],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/crypto/sha1/sha1block.go","Base":6265,"Size":2353,"Lines":[0,55,109,159,160,173,174,182,200,218,236,254,256,257,329,377,420,438,439,511,534,583,622,650,664,749,753,754,792,793,835,881,919,928,950,971,997,1026,1062,1097,1101,1123,1190,1225,1226,1247,1273,1302,1338,1373,1377,1399,1466,1501,1519,1545,1574,1610,1645,1649,1671,1738,1773,1805,1806,1832,1861,1897,1932,1936,1958,2025,2060,2078,2104,2133,2169,2204,2208,2209,2219,2229,2239,2249,2259,2260,2276,2279,2280,2351],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/crypto/sha1/sha1block_generic.go","Base":8619,"Size":251,"Lines":[0,55,109,159,160,211,212,225,226],"Infos":null}]}
 