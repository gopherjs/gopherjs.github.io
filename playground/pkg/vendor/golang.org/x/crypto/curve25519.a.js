����Archive�� 

ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames�� 	BuildTime��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   ��Time��   � f��%vendor/golang.org/x/crypto/curve25519
curve25519crypto/subtlefmt4vendor/golang.org/x/crypto/curve25519/internal/field��i]Gdstscalarpoint 
curve25519	Basepoint	PointSizeScalarBaseMult
ScalarMult
ScalarSizeX25519V  C @ *F   - -   :F   = = =  C @F  R R T   '1@K-V6 AA=$packages["crypto/subtle"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CDC=$packages["vendor/golang.org/x/crypto/curve25519/internal/field"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  KK=$sliceType($Uint8);K  MM=$arrayType($Uint8,32);M  NN=$sliceType($emptyInterface);N  OO=$ptrType($Uint8);O  $pkg.Basepoint=K.nil;	Basepoint/vendor/golang.org/x/crypto/curve25519.Basepoint'vendor/golang.org/x/crypto/curve25519.K  FL	basePoint  d  �F=$toNativeArray($kindUint8,[9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);	basePoint/vendor/golang.org/x/crypto/curve25519.basePoint 0vendor/golang.org/x/crypto/curve25519.ScalarMult%vendor/golang.org/x/crypto/curve25519
ScalarMult D��D=function(a,b,c){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  d=M.zero();  $copySlice(new K(d),new K(b));  ,d[0]=((d[0]&(248))>>>0);  9d[31]=((d[31]&(127))>>>0);  Gd[31]=((d[31]|(64))>>>0);  Ye=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));f=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));g=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));h=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));i=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));j=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));k=new C.Element.ptr(new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0),new $Uint64(0,0));l=$clone(e,C.Element);m=$clone(f,C.Element);n=$clone(g,C.Element);o=$clone(h,C.Element);p=$clone(i,C.Element);q=$clone(j,C.Element);r=$clone(k,C.Element);  �l.SetBytes(new K(c));  �m.One();  �o.Set(l);  �p.One();  �s=0;  �t=254;while(true){if(!(t>=0)){break;}  �x=(u=(((t&7)>>>0)),u<32?((v=(w=t/8,(w===w&&w!==1/0&&w!==-1/0)?w>>0:$throwRuntimeError("integer divide by zero")),((v<0||v>=d.length)?($throwRuntimeError("index out of range"),undefined):d[v]))>>>u):0)<<24>>>24;  x=(x&(1))>>>0;  s=(s^(((x>>0))))>>0;  (m.Swap(o,s);  =n.Swap(p,s);  Rs=((x>>0));  cq.Subtract(o,p);  }r.Subtract(m,n);  �m.Add(m,n);  �n.Add(o,p);  �p.Multiply(q,m);  �n.Multiply(n,r);  �q.Square(r);  r.Square(m);  o.Add(p,n);  ,n.Subtract(p,n);  Dm.Multiply(r,q);  `r.Subtract(r,q);  ~n.Square(n);  �p.Mult32(r,121666);  �o.Square(o);  �q.Add(q,p);  �p.Multiply(l,n);  �n.Multiply(r,q);  �t=t-(1)>>0;    }  
m.Swap(o,s);  n.Swap(p,s);  3n.Invert(n);  Cm.Multiply(m,n);  Z$copySlice(new K(a),m.Bytes());    };$pkg.ScalarMult=D;
ScalarMult'vendor/golang.org/x/crypto/curve25519.K'vendor/golang.org/x/crypto/curve25519.M0vendor/golang.org/x/crypto/curve25519.ScalarMult<vendor/golang.org/x/crypto/curve25519/internal/field.Element 4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult%vendor/golang.org/x/crypto/curve25519ScalarBaseMult ECE=function(a,b){var a,b;  �D(a,b,F);    };$pkg.ScalarBaseMult=E;ScalarBaseMult4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult0vendor/golang.org/x/crypto/curve25519.ScalarMult/vendor/golang.org/x/crypto/curve25519.basePoint *vendor/golang.org/x/crypto/curve25519.init%vendor/golang.org/x/crypto/curve25519init G1G=function(){  	)$pkg.Basepoint=new K(F);    };	    G();/vendor/golang.org/x/crypto/curve25519.Basepoint'vendor/golang.org/x/crypto/curve25519.K/vendor/golang.org/x/crypto/curve25519.basePoint*vendor/golang.org/x/crypto/curve25519.init 4vendor/golang.org/x/crypto/curve25519.checkBasepoint%vendor/golang.org/x/crypto/curve25519checkBasepoint H��H=function(){    if(!((A.ConstantTimeCompare($pkg.Basepoint,new K([9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))===1))){  
d$panic(new $String("curve25519: global Basepoint value was modified"));    }    };checkBasepoint!crypto/subtle.ConstantTimeCompare/vendor/golang.org/x/crypto/curve25519.Basepoint'vendor/golang.org/x/crypto/curve25519.K4vendor/golang.org/x/crypto/curve25519.checkBasepoint ,vendor/golang.org/x/crypto/curve25519.X25519%vendor/golang.org/x/crypto/curve25519X25519 I�FI=function(a,b){var{a,b,c,d,e,$s,$r,$c}=$restore(this,{a,b});$s=$s||0;s:while(true){switch($s){case 0:c=[c];  1c[0]=M.zero();  ?d=J(c[0],a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;$s=2;case 2:return e;    }return;}var $f={$blk:I,$c:true,$r,a,b,c,d,e,$s};return $f;};$pkg.X25519=I;X25519'vendor/golang.org/x/crypto/curve25519.M,vendor/golang.org/x/crypto/curve25519.X25519,vendor/golang.org/x/crypto/curve25519.x25519 ,vendor/golang.org/x/crypto/curve25519.x25519%vendor/golang.org/x/crypto/curve25519x25519 J��J=function(a,b,c){var{a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r,$c}=$restore(this,{a,b,c});$s=$s||0;s:while(true){switch($s){case 0:d=[d];e=[e];  �e[0]=M.zero();  �f=b.$length;  �if(!((f===32))){$s=1;continue;}$s=2;continue;    case 1:  �g=B.Errorf("bad scalar length: %d, expected %d",new N([new $Int(f),new $Int(32)]));$s=3;case 3:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}h=[K.nil,g];$s=4;case 4:return h;    case 2:  &i=c.$length;  #if(!((i===32))){$s=5;continue;}$s=6;continue;    case 5:  Cj=B.Errorf("bad point length: %d, expected %d",new N([new $Int(i),new $Int(32)]));$s=7;case 7:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=[K.nil,j];$s=8;case 8:return k;    case 6:  �$copySlice(new K(e[0]),b);  �if($indexPtr(c.$array,c.$offset+0,O)===$indexPtr($pkg.Basepoint.$array,$pkg.Basepoint.$offset+0,O)){$s=9;continue;}$s=10;continue;    case 9:  �H();  �E(a,e[0]);    $s=11;continue;case 10:  �l=M.zero();m=M.zero();d[0]=$clone(l,M);n=$clone(m,M);  $copySlice(new K(d[0]),c);  *D(a,e[0],d[0]);  Hif(A.ConstantTimeCompare(new K(a),new K(n))===1){$s=12;continue;}$s=13;continue;    case 12:  �o=B.Errorf("bad input point: low order point",new N([]));$s=14;case 14:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}p=[K.nil,o];$s=15;case 15:return p;    case 13:    case 11:  �$s=-1;return[new K(a),$ifaceNil];    }return;}var $f={$blk:J,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s};return $f;};x25519!crypto/subtle.ConstantTimeCompare
fmt.Errorf/vendor/golang.org/x/crypto/curve25519.Basepoint'vendor/golang.org/x/crypto/curve25519.K'vendor/golang.org/x/crypto/curve25519.M'vendor/golang.org/x/crypto/curve25519.N'vendor/golang.org/x/crypto/curve25519.O4vendor/golang.org/x/crypto/curve25519.ScalarBaseMult0vendor/golang.org/x/crypto/curve25519.ScalarMult4vendor/golang.org/x/crypto/curve25519.checkBasepoint,vendor/golang.org/x/crypto/curve25519.x25519 �B{"Base":4058,"Files":[{"Name":"/usr/local/go/src/vendor/golang.org/x/crypto/curve25519/curve25519.go","Base":1,"Size":4056,"Lines":[0,55,109,159,160,239,316,333,395,396,405,422,429,430,479,481,482,536,539,618,697,722,770,786,787,810,823,837,850,851,901,924,934,947,957,958,969,1004,1035,1044,1061,1082,1103,1119,1120,1146,1172,1191,1210,1236,1262,1283,1302,1321,1345,1373,1403,1420,1421,1448,1465,1488,1512,1540,1543,1544,1564,1584,1585,1601,1624,1650,1652,1653,1727,1750,1753,1828,1891,1936,1973,1975,1976,1984,2042,2059,2115,2131,2133,2134,2186,2207,2208,2329,2330,2371,2372,2396,2446,2496,2546,2596,2646,2657,2716,2719,2721,2722,2798,2874,2897,2900,2981,3042,3045,3119,3192,3244,3318,3371,3389,3425,3427,3428,3495,3512,3544,3614,3617,3648,3717,3720,3741,3774,3793,3820,3830,3856,3879,3909,3965,4027,4031,4034,4054],"Infos":null}]}
   گ��(<�� < 