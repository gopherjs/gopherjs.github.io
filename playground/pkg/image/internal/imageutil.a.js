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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �.#��image/internal/imageutil	imageutilimage�F
$$ exports $$
pv0imageutil0image/internal/imageutil	DrawYCbCr dstRGBA
image
imagePix Stride RectRectangleMin
PointX Y StringpF    AddpFqF F SubpFqF F MulpFk F DivpFk F InpFrB   ModpFrB F EqpFqF    MaxF "StringrB    DxrB   DyrB   SizerB  F AddrBpF B SubrBpF B 
InsetrBn B IntersectrBsB B 
UnionrBsB B 
EmptyrB    EqrBsB   OverlapsrBsB   InrBsB   
CanonrB  B AtrBxy 
Color
colorimage/color RGBA  rgba   BoundsrB  B ColorModelrB  
Model Convert cx x    ColorModelp<  � Boundsp<  B Atp<xy x RGBAAtp<xy RGBAR G B A RGBAc� rgba  PixOffsetp<xy  Setp<xycx  SetRGBAp<xyc�  SubImagep<rB 
Image At xy x Bounds   B ColorModel   �   Opaquep<    rBsrc
YCbCrY Cb� Cr� YStride CStride SubsampleRatio&YCbCrSubsampleRatioStrings�     RectB ColorModelp�  � Boundsp�  B Atp�xy x YCbCrAtp�xy 
YCbCrY Cb Cr RGBAc�       YOffsetp�xy  COffsetp�xy  SubImagep�rB � Opaquep�    spFok  AA=$packages["image"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} "image/internal/imageutil.DrawYCbCrB�!	B=function(a,b,c,d){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=false;  Mf=$imul(((b.Min.X-a.Rect.Min.X>>0)),4);  sg=$imul(((b.Max.X-a.Rect.Min.X>>0)),4);  �h=b.Min.Y-a.Rect.Min.Y>>0;  �i=b.Max.Y-a.Rect.Min.Y>>0;    j=c.SubsampleRatio;    if(j===(0)){   k=h;l=d.Y;m=k;n=l;while(true){if(!(!((m===i)))){break;}  So=$subslice(a.Pix,($imul(m,a.Stride)));  up=($imul(((n-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �q=($imul(((n-c.Rect.Min.Y>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;   r=f;while(true){if(!(!((r===g)))){break;}  �t=$imul(((s=c.Y,((p<0||p>=s.$length)?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+p]))>>0),65792);  �v=((u=c.Cb,((q<0||q>=u.$length)?($throwRuntimeError("index out of range"),undefined):u.$array[u.$offset+q]))>>0)-128>>0;  �x=((w=c.Cr,((q<0||q>=w.$length)?($throwRuntimeError("index out of range"),undefined):w.$array[w.$offset+q]))>>0)-128>>0;  
�y=t+($imul(91881,x))>>0;    if((((y>>>0)&4278190080)>>>0)===0){  
�y=(y>>$min((16),31))>>0;    }else{   y=~((y>>31>>0))>>0;    }  z=(t-($imul(22554,v))>>0)-($imul(46802,x))>>0;    if((((z>>>0)&4278190080)>>>0)===0){  cz=(z>>$min((16),31))>>0;    }else{  ~z=~((z>>31>>0))>>0;    }  �aa=t+($imul(116130,v))>>0;    if((((aa>>>0)&4278190080)>>>0)===0){  �aa=(aa>>$min((16),31))>>0;    }else{  �aa=~((aa>>31>>0))>>0;    }  _ab=$subslice(o,r,(r+4>>0),o.$length);  �(0>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+0]=(y<<24>>>24));  �(1>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+1]=(z<<24>>>24));  �(2>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+2]=(aa<<24>>>24));  �(3>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+3]=255);  ac=r+4>>0;ad=p+1>>0;ae=q+1>>0;r=ac;p=ad;q=ae;}  <af=m+1>>0;ag=n+1>>0;m=af;n=ag;}    }else if(j===(1)){  ah=h;ai=d.Y;aj=ah;ak=ai;while(true){if(!(!((aj===i)))){break;}  ?al=$subslice(a.Pix,($imul(aj,a.Stride)));  aam=($imul(((ak-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �ao=($imul(((ak-c.Rect.Min.Y>>0)),c.CStride))-(an=c.Rect.Min.X/2,(an===an&&an!==1/0&&an!==-1/0)?an>>0:$throwRuntimeError("integer divide by zero"))>>0;  �ap=f;aq=d.X;ar=ap;as=aq;while(true){if(!(!((ar===g)))){break;}  'au=ao+(at=as/2,(at===at&&at!==1/0&&at!==-1/0)?at>>0:$throwRuntimeError("integer divide by zero"))>>0;  �aw=$imul(((av=c.Y,((am<0||am>=av.$length)?($throwRuntimeError("index out of range"),undefined):av.$array[av.$offset+am]))>>0),65792);  �ay=((ax=c.Cb,((au<0||au>=ax.$length)?($throwRuntimeError("index out of range"),undefined):ax.$array[ax.$offset+au]))>>0)-128>>0;  �ba=((az=c.Cr,((au<0||au>=az.$length)?($throwRuntimeError("index out of range"),undefined):az.$array[az.$offset+au]))>>0)-128>>0;  �bb=aw+($imul(91881,ba))>>0;    if((((bb>>>0)&4278190080)>>>0)===0){  �bb=(bb>>$min((16),31))>>0;    }else{  bb=~((bb>>31>>0))>>0;    }  %bc=(aw-($imul(22554,ay))>>0)-($imul(46802,ba))>>0;    if((((bc>>>0)&4278190080)>>>0)===0){  nbc=(bc>>$min((16),31))>>0;    }else{  �bc=~((bc>>31>>0))>>0;    }  �bd=aw+($imul(116130,ay))>>0;    if((((bd>>>0)&4278190080)>>>0)===0){  �bd=(bd>>$min((16),31))>>0;    }else{  �bd=~((bd>>31>>0))>>0;    }  jbe=$subslice(al,ar,(ar+4>>0),al.$length);  �(0>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+0]=(bb<<24>>>24));  �(1>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+1]=(bc<<24>>>24));  �(2>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+2]=(bd<<24>>>24));  �(3>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+3]=255);  bf=ar+4>>0;bg=as+1>>0;bh=am+1>>0;ar=bf;as=bg;am=bh;}  (bi=aj+1>>0;bj=ak+1>>0;aj=bi;ak=bj;}    }else if(j===(2)){  bk=h;bl=d.Y;bm=bk;bn=bl;while(true){if(!(!((bm===i)))){break;}  Jbo=$subslice(a.Pix,($imul(bm,a.Stride)));  lbp=($imul(((bn-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �bt=($imul((((bq=bn/2,(bq===bq&&bq!==1/0&&bq!==-1/0)?bq>>0:$throwRuntimeError("integer divide by zero"))-(br=c.Rect.Min.Y/2,(br===br&&br!==1/0&&br!==-1/0)?br>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))-(bs=c.Rect.Min.X/2,(bs===bs&&bs!==1/0&&bs!==-1/0)?bs>>0:$throwRuntimeError("integer divide by zero"))>>0;  �bu=f;bv=d.X;bw=bu;bx=bv;while(true){if(!(!((bw===g)))){break;}  6bz=bt+(by=bx/2,(by===by&&by!==1/0&&by!==-1/0)?by>>0:$throwRuntimeError("integer divide by zero"))>>0;  �cb=$imul(((ca=c.Y,((bp<0||bp>=ca.$length)?($throwRuntimeError("index out of range"),undefined):ca.$array[ca.$offset+bp]))>>0),65792);  �cd=((cc=c.Cb,((bz<0||bz>=cc.$length)?($throwRuntimeError("index out of range"),undefined):cc.$array[cc.$offset+bz]))>>0)-128>>0;  cf=((ce=c.Cr,((bz<0||bz>=ce.$length)?($throwRuntimeError("index out of range"),undefined):ce.$array[ce.$offset+bz]))>>0)-128>>0;  �cg=cb+($imul(91881,cf))>>0;    if((((cg>>>0)&4278190080)>>>0)===0){  �cg=(cg>>$min((16),31))>>0;    }else{  cg=~((cg>>31>>0))>>0;    }  4ch=(cb-($imul(22554,cd))>>0)-($imul(46802,cf))>>0;    if((((ch>>>0)&4278190080)>>>0)===0){  }ch=(ch>>$min((16),31))>>0;    }else{  �ch=~((ch>>31>>0))>>0;    }  �ci=cb+($imul(116130,cd))>>0;    if((((ci>>>0)&4278190080)>>>0)===0){  �ci=(ci>>$min((16),31))>>0;    }else{  ci=~((ci>>31>>0))>>0;    }  ycj=$subslice(bo,bw,(bw+4>>0),bo.$length);  �(0>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+0]=(cg<<24>>>24));  �(1>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+1]=(ch<<24>>>24));  �(2>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+2]=(ci<<24>>>24));  �(3>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+3]=255);  ck=bw+4>>0;cl=bx+1>>0;cm=bp+1>>0;bw=ck;bx=cl;bp=cm;}  3cn=bm+1>>0;co=bn+1>>0;bm=cn;bn=co;}    }else if(j===(3)){  &cp=h;cq=d.Y;cr=cp;cs=cq;while(true){if(!(!((cr===i)))){break;}  Yct=$subslice(a.Pix,($imul(cr,a.Stride)));  {cu=($imul(((cs-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �cx=($imul((((cv=cs/2,(cv===cv&&cv!==1/0&&cv!==-1/0)?cv>>0:$throwRuntimeError("integer divide by zero"))-(cw=c.Rect.Min.Y/2,(cw===cw&&cw!==1/0&&cw!==-1/0)?cw>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;  
cy=f;while(true){if(!(!((cy===g)))){break;}  �da=$imul(((cz=c.Y,((cu<0||cu>=cz.$length)?($throwRuntimeError("index out of range"),undefined):cz.$array[cz.$offset+cu]))>>0),65792);  �dc=((db=c.Cb,((cx<0||cx>=db.$length)?($throwRuntimeError("index out of range"),undefined):db.$array[db.$offset+cx]))>>0)-128>>0;  �de=((dd=c.Cr,((cx<0||cx>=dd.$length)?($throwRuntimeError("index out of range"),undefined):dd.$array[dd.$offset+cx]))>>0)-128>>0;  �df=da+($imul(91881,de))>>0;    if((((df>>>0)&4278190080)>>>0)===0){  �df=(df>>$min((16),31))>>0;    }else{  
df=~((df>>31>>0))>>0;    }  $dg=(da-($imul(22554,dc))>>0)-($imul(46802,de))>>0;    if((((dg>>>0)&4278190080)>>>0)===0){  mdg=(dg>>$min((16),31))>>0;    }else{  �dg=~((dg>>31>>0))>>0;    }  �dh=da+($imul(116130,dc))>>0;    if((((dh>>>0)&4278190080)>>>0)===0){  �dh=(dh>>$min((16),31))>>0;    }else{  �dh=~((dh>>31>>0))>>0;    }  idi=$subslice(ct,cy,(cy+4>>0),ct.$length);  �(0>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+0]=(df<<24>>>24));  �(1>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+1]=(dg<<24>>>24));  �(2>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+2]=(dh<<24>>>24));  �(3>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+3]=255);  dj=cy+4>>0;dk=cu+1>>0;dl=cx+1>>0;cy=dj;cu=dk;cx=dl;}  Bdm=cr+1>>0;dn=cs+1>>0;cr=dm;cs=dn;}    }else{    e=false;return e;    }    e=true;return e;    };$pkg.DrawYCbCr=B;	DrawYCbCr"image/internal/imageutil.DrawYCbCr ��{"Base":7960,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.bNaXSMvRIy/goroot/src/image/internal/imageutil/imageutil.go","Base":1,"Size":276,"Lines":[0,55,109,159,160,188,189,258],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.bNaXSMvRIy/goroot/src/image/internal/imageutil/impl.go","Base":278,"Size":7681,"Lines":[0,46,47,65,66,75,84,86,87,164,236,300,303,375,448,481,578,654,731,791,795,869,942,1012,1089,1097,1101,1200,1204,1278,1333,1334,1372,1410,1442,1474,1503,1504,1540,1594,1628,1695,1696,1763,1818,1819,1895,1963,1998,2033,2034,2082,2089,2125,2143,2160,2188,2213,2222,2229,2275,2332,2381,2446,2471,2506,2520,2533,2553,2559,2560,2597,2632,2646,2659,2679,2685,2686,2712,2747,2761,2774,2794,2800,2801,2885,2923,2946,2969,2992,3010,3015,3019,3020,3056,3110,3144,3211,3212,3276,3341,3365,3366,3442,3510,3545,3580,3581,3629,3636,3672,3690,3707,3735,3760,3769,3776,3822,3879,3928,3993,4018,4053,4067,4080,4100,4106,4107,4144,4179,4193,4206,4226,4232,4233,4259,4294,4308,4321,4341,4347,4348,4432,4470,4493,4516,4539,4557,4562,4566,4567,4603,4657,4691,4758,4759,4827,4892,4916,4917,4993,5061,5096,5131,5132,5180,5187,5223,5241,5258,5286,5311,5320,5327,5373,5430,5479,5544,5569,5604,5618,5631,5651,5657,5658,5695,5730,5744,5757,5777,5783,5784,5810,5845,5859,5872,5892,5898,5899,5983,6021,6044,6067,6090,6108,6113,6117,6118,6154,6208,6242,6309,6310,6381,6436,6437,6513,6581,6616,6651,6652,6700,6707,6743,6761,6778,6806,6831,6840,6847,6893,6950,6999,7064,7089,7124,7138,7151,7171,7177,7178,7215,7250,7264,7277,7297,7303,7304,7330,7365,7379,7392,7412,7418,7419,7503,7541,7564,7587,7610,7628,7633,7637,7638,7648,7663,7666,7679],"Infos":null}]}
 