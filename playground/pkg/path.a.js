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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �-���pathpatherrorsstringsunicode/utf8��version 4

 path 	 Base      	 	Clean      	 Dir       ErrBadPattern &	 Ext      	 	IsAbs      	 Join  elem    	 	Match  pattern   name   matched  &err  	 	Split     dir   file  AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["strings"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["unicode/utf8"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} H��H=$pkg.lazybuf=$newType(0,$kindStruct,"path.lazybuf",true,"path",false,function(s_,buf_,w_){this.$val=this;if(arguments.length===0){this.s="";this.buf=P.nil;this.w=0;return;}this.s=s_;this.buf=buf_;this.w=w_;});��Q.methods=[{prop:"index",name:"index",pkg:"path",typ:$funcType([$Int],[$Uint8],false)},{prop:"append",name:"append",pkg:"path",typ:$funcType([$Uint8],[],false)},{prop:"string",name:"string",pkg:"path",typ:$funcType([],[$String],false)}];��H.init("path",[{prop:"s",name:"s",embedded:false,exported:false,typ:$String,tag:""},{prop:"buf",name:"buf",embedded:false,exported:false,typ:P,tag:""},{prop:"w",name:"w",embedded:false,exported:false,typ:$Int,tag:""}]);lazybufpath.Ppath.Qpath.lazybuf PP=$sliceType($Uint8);P QQ=$ptrType(H);Qpath.lazybuf ErrBadPattern 9    $pkg.ErrBadPattern=A.New("syntax error in pattern");
errors.Newpath.ErrBadPattern 
path.MatchD��D=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;c=false;d=$ifaceNil;  �Pattern:while(true){if(!(a.length>0)){break;}  �e=false;  �f="";  �g=E(a);e=g[0];f=g[1];a=g[2];    if(e&&f===""){    h=!B.Contains(b,"/");i=$ifaceNil;c=h;d=i;return[c,d];    }  �j=F(f,b);k=j[0];l=j[1];m=j[2];    if(l&&((k.length===0)||a.length>0)){  �b=k;  �continue;    }    if(!($interfaceIsEqual(m,$ifaceNil))){    n=false;o=m;c=n;d=o;return[c,d];    }    if(e){  #p=0;while(true){if(!(p<b.length&&!((b.charCodeAt(p)===47)))){break;}  Vq=F(f,$substring(b,(p+1>>0)));r=q[0];s=q[1];t=q[2];    if(s){    if((a.length===0)&&r.length>0){  Lp=p+(1)>>0;    continue;    }  b=r;  "continue Pattern;    }    if(!($interfaceIsEqual(t,$ifaceNil))){    u=false;v=t;c=u;d=v;return[c,d];    }  Lp=p+(1)>>0;    }    }    w=false;x=$ifaceNil;c=w;d=x;return[c,d];    }    y=b.length===0;z=$ifaceNil;c=y;d=z;return[c,d];    };$pkg.Match=D;Match
path.Matchpath.matchChunkpath.scanChunkstrings.Contains path.scanChunkE�5E=function(a){var a,b,c,d,e,f,g,h,i,j;b=false;c="";d="";  	Uwhile(true){if(!(a.length>0&&(a.charCodeAt(0)===42))){break;}  	�a=$substring(a,1);  	�b=true;    }  	�e=false;  	�f=0;  	�f=0;Scan:while(true){if(!(f<a.length)){break;}    g=a.charCodeAt(f);    if(g===(92)){    if((f+1>>0)<a.length){  
if=f+(1)>>0;    }    }else if(g===(91)){  
�e=true;    }else if(g===(93)){  
�e=false;    }else if(g===(42)){    if(!e){  
�break Scan;    }    }  	�f=f+(1)>>0;    }    h=b;i=$substring(a,0,f);j=$substring(a,f);b=h;c=i;d=j;return[b,c,d];    };	scanChunkpath.scanChunk path.matchChunkF��F=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c="";d=false;e=$ifaceNil;  while(true){if(!(a.length>0)){break;}    if(b.length===0){  Hreturn[c,d,e];    }    f=a.charCodeAt(0);    if(f===(91)){  �g=C.DecodeRuneInString(b);h=g[0];i=g[1];  �b=$substring(b,i);  �a=$substring(a,1);  �j=true;    if(a.length>0&&(a.charCodeAt(0)===94)){  ,j=false;  Ca=$substring(a,1);    }  tk=false;  �l=0;  �while(true){    if(a.length>0&&(a.charCodeAt(0)===93)&&l>0){  �a=$substring(a,1);  �break;    }  m=0;n=0;o=m;p=n;  q=G(a);o=q[0];a=q[1];e=q[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  Ireturn[c,d,e];    }  Zp=o;    if(a.charCodeAt(0)===45){  �r=G($substring(a,1));p=r[0];a=r[1];e=r[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[c,d,e];    }    }    if(o<=h&&h<=p){  �k=true;    }  l=l+(1)>>0;    }    if(!(k===j)){  4return[c,d,e];    }    }else if(f===(63)){    if(b.charCodeAt(0)===47){  ereturn[c,d,e];    }  ts=C.DecodeRuneInString(b);t=s[1];  �b=$substring(b,t);  �a=$substring(a,1);    }else if(f===(92)){  �a=$substring(a,1);    if(a.length===0){  �e=$pkg.ErrBadPattern;  return[c,d,e];    }    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  Treturn[c,d,e];    }  cb=$substring(b,1);  pa=$substring(a,1);    }else{    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  Treturn[c,d,e];    }  cb=$substring(b,1);  pa=$substring(a,1);    }    }    u=b;v=true;w=$ifaceNil;c=u;d=v;e=w;return[c,d,e];    };
matchChunkpath.ErrBadPatternpath.getEscpath.matchChunkunicode/utf8.DecodeRuneInString path.getEscG�G=function(a){var a,b,c,d,e,f;b=0;c="";d=$ifaceNil;    if((a.length===0)||(a.charCodeAt(0)===45)||(a.charCodeAt(0)===93)){  md=$pkg.ErrBadPattern;  �return[b,c,d];    }    if(a.charCodeAt(0)===92){  �a=$substring(a,1);    if(a.length===0){  �d=$pkg.ErrBadPattern;  �return[b,c,d];    }    }  �e=C.DecodeRuneInString(a);b=e[0];f=e[1];    if((b===65533)&&(f===1)){  Ed=$pkg.ErrBadPattern;    }  ]c=$substring(a,f);    if(c.length===0){  �d=$pkg.ErrBadPattern;    }  �return[b,c,d];    };getEscpath.ErrBadPatternpath.getEscunicode/utf8.DecodeRuneInString (*path.lazybuf).index�(H.ptr.prototype.index=function(a){var a,b,c;b=this;    if(!(b.buf===P.nil)){  0return(c=b.buf,((a<0||a>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+a]));    }  Dreturn b.s.charCodeAt(a);    };H.prototype.index=function(a){return this.$val.index(a);};lazybufindex~path.Ppath.lazybuf (*path.lazybuf).append��H.ptr.prototype.append=function(a){var a,b,c,d;b=this;    if(b.buf===P.nil){    if(b.w<b.s.length&&(b.s.charCodeAt(b.w)===a)){  �b.w=b.w+(1)>>0;  �return;    }  �b.buf=$makeSlice(P,b.s.length);  �$copyString(b.buf,$substring(b.s,0,b.w));    }  (c=b.buf,d=b.w,((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]=a));  b.w=b.w+(1)>>0;    };H.prototype.append=function(a){return this.$val.append(a);};lazybufappend~path.Ppath.lazybuf (*path.lazybuf).string��H.ptr.prototype.string=function(){var a;a=this;    if(a.buf===P.nil){  Yreturn $substring(a.s,0,a.w);    }  nreturn($bytesToString($subslice(a.buf,0,a.w)));    };H.prototype.string=function(){return this.$val.string();};lazybufstring~path.Ppath.lazybuf 
path.CleanI�&I=function(a){var a,b,c,d,e,f,g,h,i,j;    if(a===""){  �return".";    }  
b=a.charCodeAt(0)===47;  $c=a.length;  5d=new H.ptr(a,P.nil,0);  Ne=0;f=0;g=e;h=f;    if(b){  od.append(47);  �i=1;j=1;g=i;h=j;    }  �while(true){if(!(g<c)){break;}    if((a.charCodeAt(g)===47)){  �g=g+(1)>>0;    }else if((a.charCodeAt(g)===46)&&(((g+1>>0)===c)||(a.charCodeAt((g+1>>0))===47))){  1g=g+(1)>>0;    }else if((a.charCodeAt(g)===46)&&(a.charCodeAt((g+1>>0))===46)&&(((g+2>>0)===c)||(a.charCodeAt((g+2>>0))===47))){  �g=g+(2)>>0;    if(d.w>h){  �d.w=d.w-(1)>>0;  �while(true){if(!(d.w>h&&!((d.index(d.w)===47)))){break;}  -d.w=d.w-(1)>>0;    }    }else if(!b){    if(d.w>0){  �d.append(47);    }  �d.append(46);  �d.append(46);  �h=d.w;    }    }else{    if(b&&!((d.w===1))||!b&&!((d.w===0))){  qd.append(47);    }  �while(true){if(!(g<c&&!((a.charCodeAt(g)===47)))){break;}  �d.append(a.charCodeAt(g));  �g=g+(1)>>0;    }    }    }    if(d.w===0){   return".";    }   (return d.string();    };$pkg.Clean=I;Clean
path.Cleanpath.Ppath.append~path.index~path.lazybufpath.string~ 
path.SplitJ��J=function(a){var a,b,c,d,e,f;b="";c="";  !xd=B.LastIndex(a,"/");    e=$substring(a,0,(d+1>>0));f=$substring(a,(d+1>>0));b=e;c=f;return[b,c];    };$pkg.Split=J;Split
path.Splitstrings.LastIndex 	path.JoinK�$K=function(a){var a,b,c,d,e;  "�b=a;c=0;while(true){if(!(c<b.$length)){break;}d=c;e=((c<0||c>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+c]);    if(!(e==="")){  "�return I(B.Join($subslice(a,d),"/"));    }    c++;}  "�return"";    };$pkg.Join=K;Join
path.Clean	path.Joinstrings.Join path.ExtL��L=function(a){var a,b;  #�b=a.length-1>>0;while(true){if(!(b>=0&&!((a.charCodeAt(b)===47)))){break;}    if(a.charCodeAt(b)===46){  $/return $substring(a,b);    }  $b=b-(1)>>0;    }  $Greturn"";    };$pkg.Ext=L;Extpath.Ext 	path.BaseM�JM=function(a){var a,b;    if(a===""){  %_return".";    }  %�while(true){if(!(a.length>0&&(a.charCodeAt((a.length-1>>0))===47))){break;}  %�a=$substring(a,0,(a.length-1>>0));    }  %�b=B.LastIndex(a,"/");    if(b>=0){  &(a=$substring(a,(b+1>>0));    }    if(a===""){  &wreturn"/";    }  &�return a;    };$pkg.Base=M;Base	path.Basestrings.LastIndex 
path.IsAbsNWN=function(a){var a;  &�return a.length>0&&(a.charCodeAt(0)===47);    };$pkg.IsAbs=N;IsAbs
path.IsAbs path.DirONO=function(a){var a,b,c;  (�b=J(a);c=b[0];  (�return I(c);    };$pkg.Dir=O;Dir
path.Cleanpath.Dir
path.Split �	U{"Base":10472,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/path/match.go","Base":1,"Size":4777,"Lines":[0,55,109,159,160,173,174,183,193,204,220,222,223,275,333,334,391,417,420,432,445,454,511,562,602,654,717,753,756,776,834,870,924,927,997,1064,1081,1084,1145,1154,1178,1194,1213,1257,1284,1343,1387,1391,1432,1472,1537,1607,1627,1674,1686,1698,1702,1720,1741,1745,1757,1798,1819,1873,1921,1933,1998,2040,2055,2062,2076,2098,2104,2124,2147,2153,2158,2162,2182,2185,2213,2215,2216,2290,2322,2387,2432,2456,2470,2473,2491,2502,2508,2544,2566,2579,2633,2660,2668,2673,2685,2703,2715,2734,2746,2763,2778,2783,2787,2790,2830,2832,2833,2896,2955,3030,3099,3121,3140,3150,3154,3174,3186,3208,3246,3259,3280,3303,3325,3367,3390,3412,3417,3440,3458,3473,3482,3539,3562,3573,3579,3599,3651,3663,3669,3681,3706,3763,3776,3783,3789,3817,3835,3841,3854,3859,3887,3898,3903,3904,3916,3936,3947,3952,3990,4003,4024,4025,4038,4059,4083,4107,4118,4123,4138,4139,4150,4175,4186,4191,4204,4225,4229,4232,4253,4255,4256,4335,4398,4458,4480,4489,4492,4515,4535,4558,4581,4591,4595,4598,4638,4674,4696,4699,4719,4742,4764,4767,4775],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/path/path.go","Base":4779,"Size":5692,"Lines":[0,55,109,159,160,237,247,250,321,392,458,516,529,530,539,550,552,553,603,661,727,784,806,818,830,839,841,842,880,899,917,920,935,937,938,973,992,1031,1040,1050,1054,1087,1112,1115,1131,1138,1140,1141,1177,1196,1215,1218,1246,1248,1249,1308,1372,1428,1431,1483,1549,1620,1674,1728,1792,1795,1860,1863,1922,1949,1952,2008,2036,2075,2108,2125,2138,2141,2142,2168,2184,2185,2201,2260,2314,2376,2441,2466,2485,2498,2516,2535,2538,2539,2552,2563,2586,2611,2618,2675,2691,2698,2775,2810,2820,2832,2856,2877,2889,2941,2954,2960,2977,3040,3059,3080,3086,3106,3126,3145,3150,3161,3186,3212,3266,3286,3291,3310,3350,3374,3379,3383,3386,3387,3418,3435,3448,3451,3452,3473,3475,3476,3536,3595,3659,3680,3743,3788,3823,3854,3856,3857,3928,4000,4034,4069,4095,4110,4155,4159,4162,4173,4175,4176,4229,4287,4336,4371,4402,4459,4481,4500,4504,4507,4518,4520,4521,4563,4631,4674,4737,4769,4786,4799,4802,4830,4879,4910,4913,4939,4987,5007,5010,5049,5066,5079,5082,5095,5097,5098,5145,5176,5216,5218,5219,5300,5382,5406,5448,5525,5607,5617,5648,5671,5690],"Infos":null}]}
 