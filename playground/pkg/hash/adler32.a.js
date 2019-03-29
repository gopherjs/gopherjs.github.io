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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����hash/adler32adler32errorshash��version 4

 adler32 	 Checksum "data   	 New   Hash32hash  BlockSize   	Reset   Size   Sum"b "  	Sum32   	Write"pio n &err    *%AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["hash"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CVC=$pkg.digest=$newType(4,$kindUint32,"adler32.digest",true,"hash/adler32",false,null);�NI.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"MarshalBinary",name:"MarshalBinary",pkg:"",typ:$funcType([],[J,$error],false)},{prop:"UnmarshalBinary",name:"UnmarshalBinary",pkg:"",typ:$funcType([J],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([J],[$Int,$error],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([J],[J],false)}];digesthash/adler32.Ihash/adler32.Jhash/adler32.digest II=$ptrType(C);Ihash/adler32.digest JJ=$sliceType($Uint8);J (*hash/adler32.digest).ResetJ$ptrType(C).prototype.Reset=function(){var a;a=this;  a.$set(1);    };digesthash/adler32.digest hash/adler32.NewD^D=function(){var a;  \a=$newDataPointer(0,I);  na.Reset();  yreturn a;    };$pkg.New=D;Newhash/adler32.Ihash/adler32.Newhash/adler32.digest (*hash/adler32.digest).SizeH$ptrType(C).prototype.Size=function(){var a;a=this;  �return 4;    };digesthash/adler32.digest  (*hash/adler32.digest).BlockSizeM$ptrType(C).prototype.BlockSize=function(){var a;a=this;  �return 4;    };digesthash/adler32.digest $(*hash/adler32.digest).MarshalBinary��$ptrType(C).prototype.MarshalBinary=function(){var a,b;a=this;  [b=$makeSlice(J,0,8);  �b=$appendSlice(b,"adl\x01");  �b=E(b,((a.$get()>>>0)));  �return[b,$ifaceNil];    };digesthash/adler32.Jhash/adler32.appendUint32hash/adler32.digest &(*hash/adler32.digest).UnmarshalBinary�q$ptrType(C).prototype.UnmarshalBinary=function(a){var a,b;b=this;    if(a.$length<4||!(($bytesToString($subslice(a,0,4)))==="adl\x01")){  =return A.New("hash/adler32: invalid hash state identifier");    }    if(!((a.$length===8))){  �return A.New("hash/adler32: invalid hash state size");    }  �b.$set(((F($subslice(a,4))>>>0)));  	return $ifaceNil;    };digest
errors.Newhash/adler32.digesthash/adler32.readUint32 hash/adler32.appendUint32E��E=function(a,b){var a,b,c;  Gc=$toNativeArray($kindUint8,[(((b>>>24>>>0)<<24>>>24)),(((b>>>16>>>0)<<24>>>24)),(((b>>>8>>>0)<<24>>>24)),((b<<24>>>24))]);  �return $appendSlice(a,new J(c));    };appendUint32hash/adler32.Jhash/adler32.appendUint32 hash/adler32.readUint32F�IF=function(a){var a;  �$unused((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3]));  �return((((((((3>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+3])>>>0))|((((2>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+2])>>>0))<<8>>>0))>>>0)|((((1>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+1])>>>0))<<16>>>0))>>>0)|((((0>=a.$length?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+0])>>>0))<<24>>>0))>>>0;    };
readUint32hash/adler32.readUint32 hash/adler32.updateG��G=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;  	~c=((((a&65535)>>>0)>>>0));d=(((a>>>16>>>0)>>>0));e=c;f=d;  	�while(true){if(!(b.$length>0)){break;}  	�g=J.nil;    if(b.$length>5552){  	�h=$subslice(b,0,5552);i=$subslice(b,5552);b=h;g=i;    }  
while(true){if(!(b.$length>=4)){break;}  
e=e+((((0>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+0])>>>0)))>>>0;  
,f=f+(e)>>>0;  
8e=e+((((1>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+1])>>>0)))>>>0;  
Nf=f+(e)>>>0;  
Ze=e+((((2>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+2])>>>0)))>>>0;  
pf=f+(e)>>>0;  
|e=e+((((3>=b.$length?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+3])>>>0)))>>>0;  
�f=f+(e)>>>0;  
�b=$subslice(b,4);    }  
�j=b;k=0;while(true){if(!(k<j.$length)){break;}l=((k<0||k>=j.$length)?($throwRuntimeError("index out of range"),undefined):j.$array[j.$offset+k]);  
�e=e+(((l>>>0)))>>>0;  
�f=f+(e)>>>0;    k++;}  
�e=(m=e%(65521),m===m?m:$throwRuntimeError("integer divide by zero"));  
�f=(n=f%(65521),n===n?n:$throwRuntimeError("integer divide by zero"));  b=g;    }  return(((((f<<16>>>0)|e)>>>0)>>>0));    };updatehash/adler32.Jhash/adler32.update (*hash/adler32.digest).Write��$ptrType(C).prototype.Write=function(a){var a,b,c,d,e,f;b=0;c=$ifaceNil;d=this;  ad.$set(G(d.$get(),a));    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };digesthash/adler32.digesthash/adler32.update (*hash/adler32.digest).Sum32W$ptrType(C).prototype.Sum32=function(){var a;a=this;  �return((a.$get()>>>0));    };digesthash/adler32.digest (*hash/adler32.digest).Sum��$ptrType(C).prototype.Sum=function(a){var a,b,c;b=this;  �c=((b.$get()>>>0));  �return $append(a,(((c>>>24>>>0)<<24>>>24)),(((c>>>16>>>0)<<24>>>24)),(((c>>>8>>>0)<<24>>>24)),((c<<24>>>24)));    };digesthash/adler32.digest hash/adler32.ChecksumHEH=function(a){var a;  �return((G(1,a)>>>0));    };$pkg.Checksum=H;Checksumhash/adler32.Checksumhash/adler32.update �;{"Base":3258,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/hash/adler32/adler32.go","Base":1,"Size":3256,"Lines":[0,55,109,159,160,213,216,246,310,377,444,501,544,560,561,570,580,588,590,591,599,653,666,702,755,808,821,823,824,870,885,886,945,997,1016,1017,1053,1054,1124,1191,1255,1323,1345,1370,1388,1399,1409,1411,1412,1456,1457,1503,1504,1512,1539,1571,1573,1574,1625,1662,1687,1720,1735,1737,1738,1789,1850,1917,1920,1950,2011,2014,2055,2067,2069,2070,2117,2132,2149,2166,2182,2193,2196,2223,2225,2226,2261,2271,2348,2350,2351,2387,2428,2471,2489,2504,2525,2554,2558,2578,2600,2612,2634,2646,2668,2680,2702,2714,2727,2731,2755,2774,2786,2790,2802,2814,2822,2825,2853,2855,2856,2911,2931,2951,2953,2954,3008,3009,3050,3067,3133,3135,3136,3187],"Infos":null}]}
 