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
GoLinkname�� Implementation�� 	Reference��   �Y���#vendor/golang.org/x/crypto/chacha20chacha20crypto/cipherencoding/binaryerrors	math/bitsruntime*vendor/golang.org/x/crypto/internal/subtle�i �� keycounternoncebuflenoverflowprecompDonep1p5p9p13p2p6p10p14p3p7p11p15
SetCountersCipherXORKeyStreamdstsrcxorKeyStreamBlocksGenericxorKeyStreamBlockschacha20	HChaCha20KeySizeNewUnauthenticatedCipher	NonceSize
NonceSizeX		@      	   #   &          $    0	   3	   6	   9	   =	   @	   C	   G	   K	   N	   Q	   U	   f ����T ) Y d� 	   m d� z� ~�   � d� z� ~�   � d� z� ~�  F  � �  �   C @�F  � �  �   C C 0 � f����������� AA=$packages["crypto/cipher"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["encoding/binary"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  DD=$packages["math/bits"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  FF=$packages["runtime"];a    $r=F.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  E:E=$packages["vendor/golang.org/x/crypto/internal/subtle"];a    $r=E.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  G�+G=$pkg.Cipher=$newType(0,$kindStruct,"chacha20.Cipher",true,"vendor/golang.org/x/crypto/chacha20",true,function(key_,counter_,nonce_,buf_,len_,overflow_,precompDone_,p1_,p5_,p9_,p13_,p2_,p6_,p10_,p14_,p3_,p7_,p11_,p15_){this.$val=this;if(arguments.length===0){this.key=O.zero();this.counter=0;this.nonce=P.zero();this.buf=Q.zero();this.len=0;this.overflow=false;this.precompDone=false;this.p1=0;this.p5=0;this.p9=0;this.p13=0;this.p2=0;this.p6=0;this.p10=0;this.p14=0;this.p3=0;this.p7=0;this.p11=0;this.p15=0;return;}this.key=key_;this.counter=counter_;this.nonce=nonce_;this.buf=buf_;this.len=len_;this.overflow=overflow_;this.precompDone=precompDone_;this.p1=p1_;this.p5=p5_;this.p9=p9_;this.p13=p13_;this.p2=p2_;this.p6=p6_;this.p10=p10_;this.p14=p14_;this.p3=p3_;this.p7=p7_;this.p11=p11_;this.p15=p15_;});��N.methods=[{prop:"SetCounter",name:"SetCounter",pkg:"",typ:$funcType([$Uint32],[],false)},{prop:"XORKeyStream",name:"XORKeyStream",pkg:"",typ:$funcType([R,R],[],false)},{prop:"xorKeyStreamBlocksGeneric",name:"xorKeyStreamBlocksGeneric",pkg:"vendor/golang.org/x/crypto/chacha20",typ:$funcType([R,R],[],false)},{prop:"xorKeyStreamBlocks",name:"xorKeyStreamBlocks",pkg:"vendor/golang.org/x/crypto/chacha20",typ:$funcType([R,R],[],false)}];��G.init("vendor/golang.org/x/crypto/chacha20",[{prop:"key",name:"key",embedded:false,exported:false,typ:O,tag:""},{prop:"counter",name:"counter",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"nonce",name:"nonce",embedded:false,exported:false,typ:P,tag:""},{prop:"buf",name:"buf",embedded:false,exported:false,typ:Q,tag:""},{prop:"len",name:"len",embedded:false,exported:false,typ:$Int,tag:""},{prop:"overflow",name:"overflow",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"precompDone",name:"precompDone",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"p1",name:"p1",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p5",name:"p5",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p9",name:"p9",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p13",name:"p13",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p2",name:"p2",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p6",name:"p6",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p10",name:"p10",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p14",name:"p14",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p3",name:"p3",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p7",name:"p7",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p11",name:"p11",embedded:false,exported:false,typ:$Uint32,tag:""},{prop:"p15",name:"p15",embedded:false,exported:false,typ:$Uint32,tag:""}]);Cipher*vendor/golang.org/x/crypto/chacha20.Cipher%vendor/golang.org/x/crypto/chacha20.N%vendor/golang.org/x/crypto/chacha20.O%vendor/golang.org/x/crypto/chacha20.P%vendor/golang.org/x/crypto/chacha20.Q%vendor/golang.org/x/crypto/chacha20.R  NN=$ptrType(G);N*vendor/golang.org/x/crypto/chacha20.Cipher  OO=$arrayType($Uint32,8);O  PP=$arrayType($Uint32,3);P  QQ=$arrayType($Uint8,64);Q  RR=$sliceType($Uint8);R      $unused((N.nil));_*vendor/golang.org/x/crypto/chacha20.Cipher%vendor/golang.org/x/crypto/chacha20.N <vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher#vendor/golang.org/x/crypto/chacha20NewUnauthenticatedCipher H��H=function(a,b){var a,b,c;  
tc=new G.ptr(O.zero(),0,P.zero(),Q.zero(),0,false,false,0,0,0,0,0,0,0,0,0,0,0,0);  
�return I(c,a,b);    };$pkg.NewUnauthenticatedCipher=H;NewUnauthenticatedCipher*vendor/golang.org/x/crypto/chacha20.Cipher<vendor/golang.org/x/crypto/chacha20.NewUnauthenticatedCipher%vendor/golang.org/x/crypto/chacha20.O%vendor/golang.org/x/crypto/chacha20.P%vendor/golang.org/x/crypto/chacha20.Q<vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher <vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher#vendor/golang.org/x/crypto/chacha20newUnauthenticatedCipher I��I=function(a,b,c){var a,b,c,d,e,f,g;    if(!((b.$length===32))){  !return[N.nil,C.New("chacha20: wrong key size")];    }    if(c.$length===24){  5d=K(b,$subslice(c,0,16));b=d[0];  \e=$makeSlice(R,12);  �$copySlice($subslice(e,4,12),$subslice(c,16,24));  �c=e;    }else if(!((c.$length===12))){  �return[N.nil,C.New("chacha20: wrong nonce size")];    }  f=$subslice(b,0,32);g=$subslice(c,0,12);b=f;c=g;  cO.copy(a.key,$toNativeArray($kindUint32,[$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,0,4)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,4,8)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,8,12)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,12,16)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,16,20)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,20,24)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,24,28)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,28,32))]));  �P.copy(a.nonce,$toNativeArray($kindUint32,[$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,0,4)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,4,8)),$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,8,12))]));  ]return[a,$ifaceNil];    };newUnauthenticatedCipher	encoding/binary.LittleEndianencoding/binary.littleEndian
errors.New-vendor/golang.org/x/crypto/chacha20.HChaCha20%vendor/golang.org/x/crypto/chacha20.N%vendor/golang.org/x/crypto/chacha20.O%vendor/golang.org/x/crypto/chacha20.P%vendor/golang.org/x/crypto/chacha20.R<vendor/golang.org/x/crypto/chacha20.newUnauthenticatedCipher 0vendor/golang.org/x/crypto/chacha20.quarterRound#vendor/golang.org/x/crypto/chacha20quarterRound J�:J=function(a,b,c,d){var a,b,c,d;  ra=a+(b)>>>0;  zd=(d^(a))>>>0;  �d=D.RotateLeft32(d,16);  �c=c+(d)>>>0;  �b=(b^(c))>>>0;  �b=D.RotateLeft32(b,12);  �a=a+(b)>>>0;  �d=(d^(a))>>>0;  �d=D.RotateLeft32(d,8);  �c=c+(d)>>>0;  b=(b^(c))>>>0;  b=D.RotateLeft32(b,7);  (return[a,b,c,d];    };quarterRoundmath/bits.RotateLeft320vendor/golang.org/x/crypto/chacha20.quarterRound 8(*vendor/golang.org/x/crypto/chacha20.Cipher).SetCounter ��G.ptr.prototype.SetCounter=function(a){var a,b,c,d;b=this;  �d=b.counter-(c=((b.len>>>0))/64,(c===c&&c!==1/0&&c!==-1/0)?c>>>0:$throwRuntimeError("integer divide by zero"))>>>0;    if(b.overflow||a<d){   $panic(new $String("chacha20: SetCounter attempted to rollback counter"));    }    if(a<b.counter){  rb.len=$imul((((b.counter-a>>>0)>>0)),64);    }else{  �b.counter=a;  �b.len=0;    }    };G.prototype.SetCounter=function(a){return this.$val.SetCounter(a);};Cipher*vendor/golang.org/x/crypto/chacha20.Cipher :(*vendor/golang.org/x/crypto/chacha20.Cipher).XORKeyStream �
G.ptr.prototype.XORKeyStream=function(a,b){var a,aa,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=this;    if(b.$length===0){  =return;    }    if(a.$length<b.$length){  c$panic(new $String("chacha20: output smaller than input"));    }  �a=$subslice(a,0,b.$length);    if(E.InexactOverlap(a,b)){  �$panic(new $String("chacha20: invalid buffer overlap"));    }    if(!((c.len===0))){  Zd=$subslice(new R(c.buf),(64-c.len>>0));    if(b.$length<d.$length){  �d=$subslice(d,0,b.$length);    }  �$unused((e=d.$length-1>>0,((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e])));  f=d;g=0;while(true){if(!(g<f.$length)){break;}h=g;i=((g<0||g>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+g]);  &((h<0||h>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+h]=((((h<0||h>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+h])^i)<<24>>>24));    g++;}  @c.len=c.len-(d.$length)>>0;  Zj=$subslice(a,d.$length);k=$subslice(b,d.$length);a=j;b=k;    }    if(b.$length===0){  �return;    }  �n=$div64(((l=(m=(new $Uint64(0,b.$length)),new $Uint64(m.$high+0,m.$low+64)),new $Uint64(l.$high-0,l.$low-1))),new $Uint64(0,64),false);    if(c.overflow||(o=(p=(new $Uint64(0,c.counter)),new $Uint64(p.$high+n.$high,p.$low+n.$low)),(o.$high>1||(o.$high===1&&o.$low>0)))){   $panic(new $String("chacha20: counter overflow"));    }else if((q=(r=(new $Uint64(0,c.counter)),new $Uint64(r.$high+n.$high,r.$low+n.$low)),(q.$high===1&&q.$low===0))){  Xc.overflow=true;    }  At=b.$length-(s=b.$length%64,s===s?s:$throwRuntimeError("integer divide by zero"))>>0;    if(t>0){  vc.xorKeyStreamBlocks($subslice(a,0,t),$subslice(b,0,t));    }  �u=$subslice(a,t);v=$subslice(b,t);a=u;b=v;    if((w=(x=(new $Uint64(0,c.counter)),new $Uint64(x.$high+0,x.$low+1)),(w.$high>1||(w.$high===1&&w.$low>0)))){  �Q.copy(c.buf,Q.zero());  �z=(y=(((b.$length+64>>0)-1>>0))/64,(y===y&&y!==1/0&&y!==-1/0)?y>>0:$throwRuntimeError("integer divide by zero"));  �aa=$subslice(new R(c.buf),(64-($imul(z,64))>>0));   $copySlice(aa,b);   &c.xorKeyStreamBlocksGeneric(aa,aa);   Nc.len=aa.$length-$copySlice(a,aa)>>0;   rreturn;    }    if(b.$length>0){  !#Q.copy(c.buf,Q.zero());  !=$copySlice(new R(c.buf),b);  !Sc.xorKeyStreamBlocks(new R(c.buf),new R(c.buf));  !~c.len=64-$copySlice(a,new R(c.buf))>>0;    }    };G.prototype.XORKeyStream=function(a,b){return this.$val.XORKeyStream(a,b);};Cipher*vendor/golang.org/x/crypto/chacha20.Cipher%vendor/golang.org/x/crypto/chacha20.Q%vendor/golang.org/x/crypto/chacha20.R>vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocksGeneric~7vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocks~9vendor/golang.org/x/crypto/internal/subtle.InexactOverlap G(*vendor/golang.org/x/crypto/chacha20.Cipher).xorKeyStreamBlocksGeneric ��G.ptr.prototype.xorKeyStreamBlocksGeneric=function(a,b){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=this;    if(!((a.$length===b.$length))||!(((d=a.$length%64,d===d?d:$throwRuntimeError("integer divide by zero"))===0))){  " $panic(new $String("chacha20: internal error: wrong dst and/or src length"));    }  $�e=1634760805;f=857760878;g=2036477234;h=1797285236;i=e;j=f;k=g;l=h;  $�m=c.key[0];n=c.key[1];o=c.key[2];p=c.key[3];q=m;r=n;s=o;t=p;  $�u=c.key[4];v=c.key[5];w=c.key[6];x=c.key[7];y=u;z=v;aa=w;ab=x;  %&$unused(c.counter);ad=c.nonce[0];ae=c.nonce[1];af=c.nonce[2];ag=ad;ah=ae;ai=af;    if(!c.precompDone){  &Eaj=J(j,r,z,ag);c.p1=aj[0];c.p5=aj[1];c.p9=aj[2];c.p13=aj[3];  &ak=J(k,s,aa,ah);c.p2=ak[0];c.p6=ak[1];c.p10=ak[2];c.p14=ak[3];  &�al=J(l,t,ab,ai);c.p3=al[0];c.p7=al[1];c.p11=al[2];c.p15=al[3];  &�c.precompDone=true;    }  '�while(true){if(!(b.$length>=64&&a.$length>=64)){break;}  '�am=J(i,q,y,c.counter);an=am[0];ao=am[1];ap=am[2];aq=am[3];  (:ar=J(an,c.p5,c.p10,c.p15);as=ar[0];at=ar[1];au=ar[2];av=ar[3];  (waw=J(c.p1,c.p6,c.p11,aq);ax=aw[0];ay=aw[1];az=aw[2];ba=aw[3];  (�bb=J(c.p2,c.p7,ap,c.p13);bc=bb[0];bd=bb[1];be=bb[2];bf=bb[3];  (�bg=J(c.p3,ao,c.p9,c.p14);bh=bg[0];bi=bg[1];bj=bg[2];bk=bg[3];  )Mbl=0;while(true){if(!(bl<9)){break;}  )ybm=J(as,bi,be,ba);as=bm[0];bi=bm[1];be=bm[2];ba=bm[3];  )�bn=J(ax,at,bj,bf);ax=bn[0];at=bn[1];bj=bn[2];bf=bn[3];  )�bo=J(bc,ay,au,bk);bc=bo[0];ay=bo[1];au=bo[2];bk=bo[3];  *bp=J(bh,bd,az,av);bh=bp[0];bd=bp[1];az=bp[2];av=bp[3];  *`bq=J(as,at,au,av);as=bq[0];at=bq[1];au=bq[2];av=bq[3];  *�br=J(ax,ay,az,ba);ax=br[0];ay=br[1];az=br[2];ba=br[3];  *�bs=J(bc,bd,be,bf);bc=bs[0];bd=bs[1];be=bs[2];bf=bs[3];  *�bt=J(bh,bi,bj,bk);bh=bt[0];bi=bt[1];bj=bt[2];bk=bt[3];  )\bl=bl+(1)>>0;    }  +�M($subslice(a,0,4),$subslice(b,0,4),as,i);  +�M($subslice(a,4,8),$subslice(b,4,8),ax,j);  ,M($subslice(a,8,12),$subslice(b,8,12),bc,k);  ,(M($subslice(a,12,16),$subslice(b,12,16),bh,l);  ,QM($subslice(a,16,20),$subslice(b,16,20),bi,q);  ,zM($subslice(a,20,24),$subslice(b,20,24),at,r);  ,�M($subslice(a,24,28),$subslice(b,24,28),ay,s);  ,�M($subslice(a,28,32),$subslice(b,28,32),bd,t);  ,�M($subslice(a,32,36),$subslice(b,32,36),be,y);  -M($subslice(a,36,40),$subslice(b,36,40),bj,z);  -GM($subslice(a,40,44),$subslice(b,40,44),au,aa);  -rM($subslice(a,44,48),$subslice(b,44,48),az,ab);  -�M($subslice(a,48,52),$subslice(b,48,52),ba,c.counter);  -�M($subslice(a,52,56),$subslice(b,52,56),bf,ag);  -�M($subslice(a,56,60),$subslice(b,56,60),bk,ah);  .$M($subslice(a,60,64),$subslice(b,60,64),av,ai);  .Pc.counter=c.counter+(1)>>>0;  .bbu=$subslice(b,64);bv=$subslice(a,64);b=bu;a=bv;    }    };G.prototype.xorKeyStreamBlocksGeneric=function(a,b){return this.$val.xorKeyStreamBlocksGeneric(a,b);};CipherxorKeyStreamBlocksGeneric~*vendor/golang.org/x/crypto/chacha20.Cipher*vendor/golang.org/x/crypto/chacha20.addXor0vendor/golang.org/x/crypto/chacha20.quarterRound -vendor/golang.org/x/crypto/chacha20.HChaCha20#vendor/golang.org/x/crypto/chacha20	HChaCha20 K_K=function(a,b){var a,b,c;  0Uc=$makeSlice(R,32);  0nreturn L(c,a,b);    };$pkg.HChaCha20=K;	HChaCha20-vendor/golang.org/x/crypto/chacha20.HChaCha20%vendor/golang.org/x/crypto/chacha20.R-vendor/golang.org/x/crypto/chacha20.hChaCha20 -vendor/golang.org/x/crypto/chacha20.hChaCha20#vendor/golang.org/x/crypto/chacha20	hChaCha20 L�	iL=function(a,b,c){var a,aa,ab,ac,ad,ae,af,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;    if(!((b.$length===32))){  0�return[R.nil,C.New("chacha20: wrong HChaCha20 key size")];    }    if(!((c.$length===16))){  1Areturn[R.nil,C.New("chacha20: wrong HChaCha20 nonce size")];    }  1�d=1634760805;e=857760878;f=2036477234;g=1797285236;h=d;i=e;j=f;k=g;  1�l=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,0,4));  1�m=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,4,8));  1�n=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,8,12));  2,o=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,12,16));  2Zp=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,16,20));  2�q=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,20,24));  2�r=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,24,28));  2�s=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(b,28,32));  3t=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,0,4));  3Cu=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,4,8));  3rv=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,8,12));  3�w=$clone(B.LittleEndian,B.littleEndian).Uint32($subslice(c,12,16));  3�x=0;while(true){if(!(x<10)){break;}  4y=J(h,l,p,t);h=y[0];l=y[1];p=y[2];t=y[3];  47z=J(i,m,q,u);i=z[0];m=z[1];q=z[2];u=z[3];  4iaa=J(j,n,r,v);j=aa[0];n=aa[1];r=aa[2];v=aa[3];  4�ab=J(k,o,s,w);k=ab[0];o=ab[1];s=ab[2];w=ab[3];  4�ac=J(h,m,r,w);h=ac[0];m=ac[1];r=ac[2];w=ac[3];  5ad=J(i,n,s,t);i=ad[0];n=ad[1];s=ad[2];t=ad[3];  5Mae=J(j,o,p,u);j=ae[0];o=ae[1];p=ae[2];u=ae[3];  5af=J(k,l,q,v);k=af[0];l=af[1];q=af[2];v=af[3];  3�x=x+(1)>>0;    }  5�$unused((31>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+31]));  5�$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,0,4),h);  6$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,4,8),i);  6<$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,8,12),j);  6j$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,12,16),k);  6�$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,16,20),t);  6�$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,20,24),u);  6�$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,24,28),v);  7)$clone(B.LittleEndian,B.littleEndian).PutUint32($subslice(a,28,32),w);  7Yreturn[a,$ifaceNil];    };	hChaCha20encoding/binary.LittleEndianencoding/binary.littleEndian
errors.New%vendor/golang.org/x/crypto/chacha20.R-vendor/golang.org/x/crypto/chacha20.hChaCha200vendor/golang.org/x/crypto/chacha20.quarterRound @(*vendor/golang.org/x/crypto/chacha20.Cipher).xorKeyStreamBlocks ��G.ptr.prototype.xorKeyStreamBlocks=function(a,b){var a,b,c;c=this;  8�c.xorKeyStreamBlocksGeneric(a,b);    };G.prototype.xorKeyStreamBlocks=function(a,b){return this.$val.xorKeyStreamBlocks(a,b);};CipherxorKeyStreamBlocks~*vendor/golang.org/x/crypto/chacha20.Cipher>vendor/golang.org/x/crypto/chacha20.xorKeyStreamBlocksGeneric~ *vendor/golang.org/x/crypto/chacha20.addXor#vendor/golang.org/x/crypto/chacha20addXor M�oM=function(a,b,c,d){var a,b,c,d,e,f,g;  ;6$unused((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3]));$unused((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]));    if(false){  <mg=(((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>0));  <�g=(g|(((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>0))<<8>>>0)))>>>0;  <�g=(g|(((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])>>>0))<<16>>>0)))>>>0;  <�g=(g|(((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>0))<<24>>>0)))>>>0;  <�g=(g^((c+d>>>0)))>>>0;  <�(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=((g<<24>>>24)));  <�(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((g>>>8>>>0)<<24>>>24)));  =(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((g>>>16>>>0)<<24>>>24)));  ='(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=(((g>>>24>>>0)<<24>>>24)));    }else{  =Jc=c+(d)>>>0;  =S(0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0]=(((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])^((c<<24>>>24)))<<24>>>24));  =o(1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1]=(((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])^(((c>>>8>>>0)<<24>>>24)))<<24>>>24));  =�(2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2]=(((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])^(((c>>>16>>>0)<<24>>>24)))<<24>>>24));  =�(3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]=(((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])^(((c>>>24>>>0)<<24>>>24)))<<24>>>24));    }    };addXor*vendor/golang.org/x/crypto/chacha20.addXor �
�{"Base":15826,"Files":[{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/vendor/golang.org/x/crypto/chacha20/chacha_generic.go","Base":1,"Size":14186,"Lines":[0,55,109,159,160,240,300,317,318,327,344,363,373,386,387,426,428,429,437,503,517,518,596,618,622,699,740,756,757,832,859,876,878,879,960,1024,1045,1116,1168,1187,1203,1222,1223,1301,1377,1423,1442,1451,1452,1523,1583,1598,1599,1676,1709,1732,1757,1782,1807,1809,1810,1847,1848,1928,2008,2088,2114,2117,2197,2277,2355,2428,2496,2573,2650,2674,2690,2738,2740,2741,2820,2846,2899,2902,2933,3007,3076,3122,3161,3197,3232,3249,3286,3341,3344,3345,3425,3445,3485,3525,3566,3608,3650,3692,3734,3776,3779,3801,3843,3885,3928,3931,3946,3948,3949,4002,4010,4042,4074,4106,4138,4140,4141,4162,4163,4243,4324,4392,4464,4472,4480,4510,4518,4526,4556,4564,4572,4601,4609,4617,4646,4665,4667,4668,4748,4812,4815,4892,4919,4922,4996,5014,5060,5129,5203,5279,5307,5361,5405,5467,5470,5471,5547,5623,5698,5717,5743,5788,5798,5820,5832,5835,5837,5838,5909,5982,5985,6054,6124,6190,6193,6261,6324,6389,6438,6458,6467,6470,6496,6543,6546,6568,6606,6650,6653,6654,6726,6743,6780,6813,6849,6853,6914,6946,6969,6973,6999,7055,7058,7078,7087,7090,7091,7164,7239,7304,7365,7421,7459,7509,7529,7532,7533,7604,7681,7742,7743,7780,7795,7842,7845,7880,7881,7959,7998,8040,8085,8111,8165,8210,8227,8267,8303,8312,8315,8316,8391,8461,8480,8506,8528,8571,8611,8614,8616,8617,8679,8733,8798,8801,8802,8869,8935,9006,9047,9051,9110,9169,9228,9287,9291,9344,9351,9387,9447,9507,9574,9577,9578,9655,9732,9773,9794,9852,9912,9972,9995,9998,9999,10066,10111,10151,10197,10262,10263,10295,10356,10417,10476,10535,10536,10566,10593,10613,10664,10715,10768,10821,10822,10844,10897,10950,11001,11052,11056,11057,11122,11188,11225,11262,11301,11342,11383,11424,11465,11506,11547,11588,11631,11674,11723,11766,11809,11852,11853,11870,11871,11917,11920,11922,11923,12001,12081,12142,12194,12270,12347,12371,12396,12431,12433,12434,12491,12517,12580,12583,12606,12671,12674,12675,12709,12753,12797,12842,12888,12934,12980,13027,13074,13121,13168,13216,13265,13266,13293,13314,13364,13414,13466,13518,13519,13538,13590,13642,13692,13742,13745,13746,13792,13837,13882,13928,13975,14023,14071,14119,14167,14184],"Infos":null},{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/vendor/golang.org/x/crypto/chacha20/chacha_noasm.go","Base":14188,"Size":362,"Lines":[0,55,109,159,160,220,221,238,239,265,266,321,360],"Infos":null},{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/vendor/golang.org/x/crypto/chacha20/xor.go","Base":14551,"Size":1274,"Lines":[0,55,109,160,161,178,179,196,197,266,311,341,371,403,430,431,505,562,606,662,678,727,781,833,876,916,938,965,993,1021,1034,1053,1077,1102,1127,1137,1146,1174,1205,1237,1269,1272],"Infos":null}]}
 