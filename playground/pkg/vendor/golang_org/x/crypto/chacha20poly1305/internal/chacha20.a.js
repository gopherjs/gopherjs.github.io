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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �%@��=vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20chacha20encoding/binary��
$$ exports $$
pv0chacha20zvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20	XORKeyStream out2in:counter 2key@2  AA=$packages["encoding/binary"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$sliceType($Uint8);D EE=$arrayType($Uint8,64);E FF=$arrayType($Uint8,16);F Bvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.coreB��B=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  (d=1634760805;  Be=857760878;  \f=2036477234;  vg=1797285236;  �h=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),0,4));  �i=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),4,8));  �j=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),8,12));  k=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),12,16));  ;l=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),16,20));  gm=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),20,24));  �n=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),24,28));  �o=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(c),28,32));  �p=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(b),0,4));  q=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(b),4,8));  Er=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(b),8,12));  rs=$clone(A.LittleEndian,A.littleEndian).Uint32($subslice(new D(b),12,16));  �t=d;u=e;v=f;w=g;x=h;y=i;z=j;aa=k;ab=t;ac=u;ad=v;ae=w;af=x;ag=y;ah=z;ai=aa;  �aj=l;ak=m;al=n;am=o;an=p;ao=q;ap=r;aq=s;ar=aj;as=ak;at=al;au=am;av=an;aw=ao;ax=ap;ay=aq;  6az=0;while(true){if(!(az<20)){break;}  Uab=ab+(af)>>>0;  `av=(av^(ab))>>>0;  lav=(((av<<16>>>0))|((av>>>16>>>0)))>>>0;  �ar=ar+(av)>>>0;  �af=(af^(ar))>>>0;  �af=(((af<<12>>>0))|((af>>>20>>>0)))>>>0;  �ab=ab+(af)>>>0;  �av=(av^(ab))>>>0;  �av=(((av<<8>>>0))|((av>>>24>>>0)))>>>0;  ar=ar+(av)>>>0;  af=(af^(ar))>>>0;  af=(((af<<7>>>0))|((af>>>25>>>0)))>>>0;  9ac=ac+(ag)>>>0;  Daw=(aw^(ac))>>>0;  Paw=(((aw<<16>>>0))|((aw>>>16>>>0)))>>>0;  ras=as+(aw)>>>0;  ~ag=(ag^(as))>>>0;  �ag=(((ag<<12>>>0))|((ag>>>20>>>0)))>>>0;  �ac=ac+(ag)>>>0;  �aw=(aw^(ac))>>>0;  �aw=(((aw<<8>>>0))|((aw>>>24>>>0)))>>>0;  �as=as+(aw)>>>0;  �ag=(ag^(as))>>>0;  �ag=(((ag<<7>>>0))|((ag>>>25>>>0)))>>>0;  ad=ad+(ah)>>>0;   ax=(ax^(ad))>>>0;  ,ax=(((ax<<16>>>0))|((ax>>>16>>>0)))>>>0;  Nat=at+(ax)>>>0;  [ah=(ah^(at))>>>0;  gah=(((ah<<12>>>0))|((ah>>>20>>>0)))>>>0;  �ad=ad+(ah)>>>0;  �ax=(ax^(ad))>>>0;  �ax=(((ax<<8>>>0))|((ax>>>24>>>0)))>>>0;  �at=at+(ax)>>>0;  �ah=(ah^(at))>>>0;  �ah=(((ah<<7>>>0))|((ah>>>25>>>0)))>>>0;  �ae=ae+(ai)>>>0;   ay=(ay^(ae))>>>0;  ay=(((ay<<16>>>0))|((ay>>>16>>>0)))>>>0;  .au=au+(ay)>>>0;  ;ai=(ai^(au))>>>0;  Gai=(((ai<<12>>>0))|((ai>>>20>>>0)))>>>0;  fae=ae+(ai)>>>0;  qay=(ay^(ae))>>>0;  }ay=(((ay<<8>>>0))|((ay>>>24>>>0)))>>>0;  �au=au+(ay)>>>0;  �ai=(ai^(au))>>>0;  �ai=(((ai<<7>>>0))|((ai>>>25>>>0)))>>>0;  �ab=ab+(ag)>>>0;  �ay=(ay^(ab))>>>0;  �ay=(((ay<<16>>>0))|((ay>>>16>>>0)))>>>0;  	at=at+(ay)>>>0;  	ag=(ag^(at))>>>0;  	'ag=(((ag<<12>>>0))|((ag>>>20>>>0)))>>>0;  	Fab=ab+(ag)>>>0;  	Qay=(ay^(ab))>>>0;  	]ay=(((ay<<8>>>0))|((ay>>>24>>>0)))>>>0;  	~at=at+(ay)>>>0;  	�ag=(ag^(at))>>>0;  	�ag=(((ag<<7>>>0))|((ag>>>25>>>0)))>>>0;  	�ac=ac+(ah)>>>0;  	�av=(av^(ac))>>>0;  	�av=(((av<<16>>>0))|((av>>>16>>>0)))>>>0;  	�au=au+(av)>>>0;  	�ah=(ah^(au))>>>0;  
ah=(((ah<<12>>>0))|((ah>>>20>>>0)))>>>0;  
&ac=ac+(ah)>>>0;  
1av=(av^(ac))>>>0;  
=av=(((av<<8>>>0))|((av>>>24>>>0)))>>>0;  
^au=au+(av)>>>0;  
kah=(ah^(au))>>>0;  
wah=(((ah<<7>>>0))|((ah>>>25>>>0)))>>>0;  
�ad=ad+(ai)>>>0;  
�aw=(aw^(ad))>>>0;  
�aw=(((aw<<16>>>0))|((aw>>>16>>>0)))>>>0;  
�ar=ar+(aw)>>>0;  
�ai=(ai^(ar))>>>0;  
�ai=(((ai<<12>>>0))|((ai>>>20>>>0)))>>>0;  ad=ad+(ai)>>>0;  aw=(aw^(ad))>>>0;  aw=(((aw<<8>>>0))|((aw>>>24>>>0)))>>>0;  <ar=ar+(aw)>>>0;  Hai=(ai^(ar))>>>0;  Sai=(((ai<<7>>>0))|((ai>>>25>>>0)))>>>0;  qae=ae+(af)>>>0;  |ax=(ax^(ae))>>>0;  �ax=(((ax<<16>>>0))|((ax>>>16>>>0)))>>>0;  �as=as+(ax)>>>0;  �af=(af^(as))>>>0;  �af=(((af<<12>>>0))|((af>>>20>>>0)))>>>0;  �ae=ae+(af)>>>0;  �ax=(ax^(ae))>>>0;  �ax=(((ax<<8>>>0))|((ax>>>24>>>0)))>>>0;  as=as+(ax)>>>0;  $af=(af^(as))>>>0;  /af=(((af<<7>>>0))|((af>>>25>>>0)))>>>0;  Jaz=az+(2)>>0;    }  Pab=ab+(d)>>>0;  Zac=ac+(e)>>>0;  dad=ad+(f)>>>0;  nae=ae+(g)>>>0;  xaf=af+(h)>>>0;  �ag=ag+(i)>>>0;  �ah=ah+(j)>>>0;  �ai=ai+(k)>>>0;  �ar=ar+(l)>>>0;  �as=as+(m)>>>0;  �at=at+(n)>>>0;  �au=au+(o)>>>0;  �av=av+(p)>>>0;  �aw=aw+(q)>>>0;  �ax=ax+(r)>>>0;  �ay=ay+(s)>>>0;  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),0,4),ab);  *$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),4,8),ac);  W$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),8,12),ad);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),12,16),ae);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),16,20),af);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),20,24),ag);  $clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),24,28),ah);  A$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),28,32),ai);  p$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),32,36),ar);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),36,40),as);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),40,44),at);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),44,48),au);  .$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),48,52),av);  ^$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),52,56),aw);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),56,60),ax);  �$clone(A.LittleEndian,A.littleEndian).PutUint32($subslice(new D(a),60,64),ay);    };coreencoding/binary.LittleEndianencoding/binary.littleEndian?vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.DBvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.core Jvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.XORKeyStreamC�+C=function(a,b,c,d){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;  -e=E.zero();  Af=F.zero();  W$copySlice(new D(f),new D(c));  zwhile(true){if(!(b.$length>=64)){break;}  �B(e,f,d);  �g=e;h=0;while(true){if(!(h<64)){break;}i=h;j=((h<0||h>=g.length)?($throwRuntimeError("index out of range"),undefined):g[h]);  �((i<0||i>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+i]=((((i<0||i>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+i])^j)<<24>>>24));    h++;}  �k=1;  �l=0;while(true){if(!(l<4)){break;}  k=k+((((l<0||l>=f.length)?($throwRuntimeError("index out of range"),undefined):f[l])>>>0))>>>0;  4((l<0||l>=f.length)?($throwRuntimeError("index out of range"),undefined):f[l]=(k<<24>>>24));  Pk=(m=(8),m<32?(k>>>m):0)>>>0;  l=l+(1)>>0;    }  ^b=$subslice(b,64);  ma=$subslice(a,64);    }    if(b.$length>0){  �B(e,f,d);  �n=b;o=0;while(true){if(!(o<n.$length)){break;}p=o;q=((o<0||o>=n.$length)?($throwRuntimeError("index out of range"),undefined):n.$array[n.$offset+o]);  �((p<0||p>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+p]=((q^((p<0||p>=e.length)?($throwRuntimeError("index out of range"),undefined):e[p]))<<24>>>24));    o++;}    }    };$pkg.XORKeyStream=C;XORKeyStream?vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.D?vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.E?vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.FJvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.XORKeyStreamBvendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20.core ��{"Base":4848,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.QDLsW9nGOZ/goroot/src/vendor/golang_org/x/crypto/chacha20poly1305/internal/chacha20/chacha_generic.go","Base":1,"Size":4846,"Lines":[0,55,109,159,160,283,300,301,326,327,345,346,425,496,550,576,602,628,654,696,738,781,825,869,913,958,1003,1047,1091,1136,1182,1183,1249,1327,1328,1362,1373,1385,1421,1433,1444,1477,1488,1500,1535,1547,1558,1590,1601,1613,1647,1659,1670,1701,1712,1724,1757,1769,1780,1810,1821,1833,1867,1880,1892,1923,1934,1946,1979,1992,2004,2034,2045,2057,2091,2104,2116,2147,2158,2170,2203,2216,2228,2258,2269,2281,2315,2328,2340,2371,2382,2394,2427,2440,2452,2482,2493,2505,2539,2552,2564,2595,2606,2618,2651,2664,2676,2706,2717,2729,2763,2775,2786,2817,2828,2840,2873,2885,2896,2926,2937,2949,2983,2995,3006,3037,3048,3060,3093,3105,3116,3146,3149,3150,3160,3170,3180,3190,3200,3210,3220,3230,3240,3250,3262,3274,3286,3298,3310,3322,3323,3368,3413,3459,3506,3553,3600,3647,3694,3741,3788,3836,3884,3932,3980,4028,4076,4078,4079,4157,4235,4310,4321,4391,4411,4437,4471,4472,4493,4527,4555,4577,4581,4598,4625,4656,4684,4695,4699,4714,4731,4734,4735,4753,4787,4812,4837,4841,4844],"Infos":null}]}
 