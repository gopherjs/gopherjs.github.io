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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �!��unicode/utf16utf16��version 4

 	utf16 	 Decode s  |S 	 DecodeRune |Sr1  |Sr2  |S 	 Encode |S   	 EncodeRune |Sr  |S
  |S  	 IsSurrogate |S    
FF=$sliceType($Uint16);F GG=$sliceType($Int32);G unicode/utf16.IsSurrogateALA=function(a){var a;  �return 55296<=a&&a<57344;    };$pkg.IsSurrogate=A;IsSurrogateunicode/utf16.IsSurrogate unicode/utf16.DecodeRuneB��B=function(a,b){var a,b;    if(55296<=a&&a<56320&&56320<=b&&b<57344){  �return((((a-55296>>0))<<10>>0)|((b-56320>>0)))+65536>>0;    }  $return 65533;    };$pkg.DecodeRune=B;
DecodeRuneunicode/utf16.DecodeRune unicode/utf16.EncodeRuneC��C=function(a){var a,b,c,d,e,f,g;b=0;c=0;    if(a<65536||a>1114111){    d=65533;e=65533;b=d;c=e;return[b,c];    }  sa=a-(65536)>>0;    f=55296+(((a>>10>>0))&1023)>>0;g=56320+(a&1023)>>0;b=f;c=g;return[b,c];    };$pkg.EncodeRune=C;
EncodeRuneunicode/utf16.EncodeRune unicode/utf16.EncodeD�zD=function(a){var a,b,c,d,e,f,g,h,i,j,k,l,m;  !b=a.$length;  .c=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);    if(e>=65536){  \b=b+(1)>>0;    }    d++;}  if=$makeSlice(F,b);  �b=0;  �g=a;h=0;while(true){if(!(h<g.$length)){break;}i=((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]);    if((0<=i&&i<55296)||(57344<=i&&i<65536)){  �((b<0||b>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+b]=((i<<16>>>16)));  
b=b+(1)>>0;    }else if(65536<=i&&i<=1114111){  Vj=C(i);k=j[0];l=j[1];  q((b<0||b>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+b]=((k<<16>>>16)));  �(m=b+1>>0,((m<0||m>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+m]=((l<<16>>>16))));  �b=b+(2)>>0;    }else{  �((b<0||b>=f.$length)?($throwRuntimeError("index out of range"),undefined):f.$array[f.$offset+b]=65533);  �b=b+(1)>>0;    }    h++;}  �return $subslice(f,0,b);    };$pkg.Encode=D;Encodeunicode/utf16.Encodeunicode/utf16.EncodeRuneunicode/utf16.F unicode/utf16.DecodeE�UE=function(a){var a,b,c,d,e,f,g,h;  	mb=$makeSlice(G,a.$length);  	�c=0;  	�d=0;while(true){if(!(d<a.$length)){break;}  	�e=((d<0||d>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+d]);    if((e<55296)||(57344<=e)){  	�((c<0||c>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+c]=((e>>0)));    }else if(55296<=e&&e<56320&&(d+1>>0)<a.$length&&56320<=(f=d+1>>0,((f<0||f>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+f]))&&(g=d+1>>0,((g<0||g>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+g]))<57344){  
�((c<0||c>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+c]=B(((e>>0)),(((h=d+1>>0,((h<0||h>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+h]))>>0))));  
�d=d+(1)>>0;    }else{  
�((c<0||c>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+c]=65533);    }  
�c=c+(1)>>0;  	�d=d+(1)>>0;    }  return $subslice(b,0,c);    };$pkg.Decode=E;Decodeunicode/utf16.Decodeunicode/utf16.DecodeRuneunicode/utf16.G ��{"Base":2836,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.UG0INtHzcQ/goroot/src/unicode/utf16/utf16.go","Base":1,"Size":2834,"Lines":[0,55,109,159,160,231,245,246,309,364,439,440,448,513,582,584,585,593,647,700,745,761,777,793,794,814,816,817,881,916,948,980,982,983,1046,1118,1164,1200,1261,1311,1314,1338,1340,1341,1416,1492,1530,1570,1604,1646,1649,1664,1711,1713,1714,1790,1823,1836,1859,1880,1887,1891,1894,1895,1919,1926,1949,1960,2016,2034,2054,2061,2099,2130,2157,2178,2201,2211,2222,2256,2263,2267,2270,2284,2286,2287,2349,2378,2411,2438,2446,2477,2499,2529,2547,2565,2615,2653,2684,2728,2735,2746,2779,2805,2809,2815,2818,2832],"Infos":null}]}
 