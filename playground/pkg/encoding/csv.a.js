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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �ta��encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8��version 4

 csv  ErrBareQuote & ErrFieldCount & ErrQuote & ErrTrailingComma &	 NewReader  Readerio  Read"p n &err r     	Comma|S  Comment|S  FieldsPerRecord  LazyQuotes   TrimLeadingSpace   ReuseRecord   TrailingComma     	bufio* buf"  rd<    w  &  lastByte  lastRuneSize & Buffered@b     Discard@8  discarded &   Peek@8  " &   @8 "  &   ReadByte@8  " &   ReadBytes@8 "	delim " &   ReadLine@8  "line  isPrefix &   ReadRune@8  |S size &   ReadSlice@8 "D "H &   ReadString@8 "D   &   	Reset@8 <    Size@     UnreadByte@8  &   UnreadRune@8  &   WriteTo@8  Writer  	Write"  & 0 
 &   fill@8     readErr@8  &   	reset@8 ", <    writeBuf@8 B0 
 &    numLine   rawBuffer "  recordBuffer "  fieldIndexes   lastRecord    >    record  &    ReadAll>    records  &    readLine >   " &   readRecord >   dst    &   	 NewWriter B0   ^  |S  UseCRLF   0  ^ &  ,"    wrB  AvailableF8     6F8     	FlushF8  &   ReadFromF8 < 
 &   TF8 B0    VF8     `F8 " nn &   WriteByteF8 "c &   WriteRuneF8 |S N &   WriteStringF8  s  &   
 	ErrorD0   &   �D0      `D0   t  &   WriteAllD0   x  &   fieldNeedsQuotes D0   	field       ParseError  StartLine  Line  Column  Err&  �He      >D.AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["strings"];a    $r=H.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["unicode"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["unicode/utf8"];a    $r=G.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I�8I=$pkg.ParseError=$newType(0,$kindStruct,"csv.ParseError",true,"encoding/csv",true,function(StartLine_,Line_,Column_,Err_){this.$val=this;if(arguments.length===0){this.StartLine=0;this.Line=0;this.Column=0;this.Err=$ifaceNil;return;}this.StartLine=StartLine_;this.Line=Line_;this.Column=Column_;this.Err=Err_;});QY.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];�7I.init("",[{prop:"StartLine",name:"StartLine",embedded:false,exported:true,typ:$Int,tag:""},{prop:"Line",name:"Line",embedded:false,exported:true,typ:$Int,tag:""},{prop:"Column",name:"Column",embedded:false,exported:true,typ:$Int,tag:""},{prop:"Err",name:"Err",embedded:false,exported:true,typ:$error,tag:""}]);
ParseErrorencoding/csv.ParseErrorencoding/csv.Y L��L=$pkg.Reader=$newType(0,$kindStruct,"csv.Reader",true,"encoding/csv",true,function(Comma_,Comment_,FieldsPerRecord_,LazyQuotes_,TrimLeadingSpace_,ReuseRecord_,TrailingComma_,r_,numLine_,rawBuffer_,recordBuffer_,fieldIndexes_,lastRecord_){this.$val=this;if(arguments.length===0){this.Comma=0;this.Comment=0;this.FieldsPerRecord=0;this.LazyQuotes=false;this.TrimLeadingSpace=false;this.ReuseRecord=false;this.TrailingComma=false;this.r=S.nil;this.numLine=0;this.rawBuffer=T.nil;this.recordBuffer=T.nil;this.fieldIndexes=U.nil;this.lastRecord=V.nil;return;}this.Comma=Comma_;this.Comment=Comment_;this.FieldsPerRecord=FieldsPerRecord_;this.LazyQuotes=LazyQuotes_;this.TrimLeadingSpace=TrimLeadingSpace_;this.ReuseRecord=ReuseRecord_;this.TrailingComma=TrailingComma_;this.r=r_;this.numLine=numLine_;this.rawBuffer=rawBuffer_;this.recordBuffer=recordBuffer_;this.fieldIndexes=fieldIndexes_;this.lastRecord=lastRecord_;});�OZ.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([],[V,$error],false)},{prop:"ReadAll",name:"ReadAll",pkg:"",typ:$funcType([],[W,$error],false)},{prop:"readLine",name:"readLine",pkg:"encoding/csv",typ:$funcType([],[T,$error],false)},{prop:"readRecord",name:"readRecord",pkg:"encoding/csv",typ:$funcType([V],[V,$error],false)}];�KL.init("encoding/csv",[{prop:"Comma",name:"Comma",embedded:false,exported:true,typ:$Int32,tag:""},{prop:"Comment",name:"Comment",embedded:false,exported:true,typ:$Int32,tag:""},{prop:"FieldsPerRecord",name:"FieldsPerRecord",embedded:false,exported:true,typ:$Int,tag:""},{prop:"LazyQuotes",name:"LazyQuotes",embedded:false,exported:true,typ:$Bool,tag:""},{prop:"TrimLeadingSpace",name:"TrimLeadingSpace",embedded:false,exported:true,typ:$Bool,tag:""},{prop:"ReuseRecord",name:"ReuseRecord",embedded:false,exported:true,typ:$Bool,tag:""},{prop:"TrailingComma",name:"TrailingComma",embedded:false,exported:true,typ:$Bool,tag:""},{prop:"r",name:"r",embedded:false,exported:false,typ:S,tag:""},{prop:"numLine",name:"numLine",embedded:false,exported:false,typ:$Int,tag:""},{prop:"rawBuffer",name:"rawBuffer",embedded:false,exported:false,typ:T,tag:""},{prop:"recordBuffer",name:"recordBuffer",embedded:false,exported:false,typ:T,tag:""},{prop:"fieldIndexes",name:"fieldIndexes",embedded:false,exported:false,typ:U,tag:""},{prop:"lastRecord",name:"lastRecord",embedded:false,exported:false,typ:V,tag:""}]);Readerencoding/csv.Readerencoding/csv.Sencoding/csv.Tencoding/csv.Uencoding/csv.Vencoding/csv.Wencoding/csv.Z P��P=$pkg.Writer=$newType(0,$kindStruct,"csv.Writer",true,"encoding/csv",true,function(Comma_,UseCRLF_,w_){this.$val=this;if(arguments.length===0){this.Comma=0;this.UseCRLF=false;this.w=X.nil;return;}this.Comma=Comma_;this.UseCRLF=UseCRLF_;this.w=w_;});��AA.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([V],[$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteAll",name:"WriteAll",pkg:"",typ:$funcType([W],[$error],false)},{prop:"fieldNeedsQuotes",name:"fieldNeedsQuotes",pkg:"encoding/csv",typ:$funcType([$String],[$Bool],false)}];��P.init("encoding/csv",[{prop:"Comma",name:"Comma",embedded:false,exported:true,typ:$Int32,tag:""},{prop:"UseCRLF",name:"UseCRLF",embedded:false,exported:true,typ:$Bool,tag:""},{prop:"w",name:"w",embedded:false,exported:false,typ:X,tag:""}]);Writerencoding/csv.AAencoding/csv.Vencoding/csv.Wencoding/csv.Writerencoding/csv.X RR=$sliceType($emptyInterface);R SS=$ptrType(A.Reader);Sbufio.Reader TT=$sliceType($Uint8);T UU=$sliceType($Int);U VV=$sliceType($String);V WW=$sliceType(V);Wencoding/csv.V XX=$ptrType(A.Writer);Xbufio.Writer YY=$ptrType(I);Yencoding/csv.ParseError ZZ=$ptrType(L);Zencoding/csv.Reader AAAA=$ptrType(P);AAencoding/csv.Writer ErrTrailingComma ErrBareQuote ErrQuote ErrFieldCount JerrInvalidDelim C    $pkg.ErrTrailingComma=C.New("extra delimiter at end of line");encoding/csv.ErrTrailingComma
errors.New <    $pkg.ErrBareQuote=C.New("bare \" in non-quoted-field");encoding/csv.ErrBareQuote
errors.New E    $pkg.ErrQuote=C.New("extraneous or missing \" in quoted-field");encoding/csv.ErrQuote
errors.New 8    $pkg.ErrFieldCount=C.New("wrong number of fields");encoding/csv.ErrFieldCount
errors.New 8    J=C.New("csv: invalid field or comment delimiter");encoding/csv.errInvalidDelim
errors.New  (*encoding/csv.ParseError).Error��I.ptr.prototype.Error=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �if($interfaceIsEqual(a.Err,$pkg.ErrFieldCount)){$s=1;continue;}$s=2;continue;    case 1:  �b=D.Sprintf("record on line %d: %v",new R([new $Int(a.Line),a.Err]));$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    case 2:  if(!((a.StartLine===a.Line))){$s=4;continue;}$s=5;continue;    case 4:  c=D.Sprintf("record on line %d; parse error on line %d, column %d: %v",new R([new $Int(a.StartLine),new $Int(a.Line),new $Int(a.Column),a.Err]));$s=6;case 6:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    case 5:  �d=D.Sprintf("parse error on line %d, column %d: %v",new R([new $Int(a.Line),new $Int(a.Column),a.Err]));$s=7;case 7:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.Error};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Error=function(){return this.$val.Error();};
ParseErrorencoding/csv.ErrFieldCountencoding/csv.ParseErrorencoding/csv.Rfmt.Sprintf encoding/csv.validDelimKxK=function(a){var a;  
�return!((a===0))&&!((a===34))&&!((a===13))&&!((a===10))&&G.ValidRune(a)&&!((a===65533));    };
validDelimencoding/csv.validDelimunicode/utf8.ValidRune encoding/csv.NewReaderM��M=function(a){var a;  �return new L.ptr(44,0,0,false,false,false,false,A.NewReader(a),0,T.nil,T.nil,U.nil,V.nil);    };$pkg.NewReader=M;	NewReaderbufio.NewReaderbufio.Readerencoding/csv.NewReaderencoding/csv.Readerencoding/csv.Sencoding/csv.Tencoding/csv.Uencoding/csv.V (*encoding/csv.Reader).Read��L.ptr.prototype.Read=function(){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=V.nil;b=$ifaceNil;c=this;  �if(c.ReuseRecord){$s=1;continue;}$s=2;continue;    case 1:  �e=c.readRecord(c.lastRecord);$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];b=d[1];  c.lastRecord=a;    $s=3;continue;case 2:  6g=c.readRecord(V.nil);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;a=f[0];b=f[1];    case 3:    h=a;i=b;a=h;b=i;$s=-1;return[a,b];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Read=function(){return this.$val.Read();};Readerencoding/csv.Readerencoding/csv.Vencoding/csv.readRecord~ (*encoding/csv.Reader).ReadAll��L.ptr.prototype.ReadAll=function(){var a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=W.nil;b=$ifaceNil;c=this;  �case 1:  �e=c.readRecord(V.nil);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];    if($interfaceIsEqual(g,E.EOF)){    h=a;i=$ifaceNil;a=h;b=i;$s=-1;return[a,b];    }    if(!($interfaceIsEqual(g,$ifaceNil))){    j=W.nil;k=g;a=j;b=k;$s=-1;return[a,b];    }  4a=$append(a,f);    $s=1;continue;case 2:    $s=-1;return[a,b];}return;}if($f===undefined){$f={$blk:L.ptr.prototype.ReadAll};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.ReadAll=function(){return this.$val.ReadAll();};Readerencoding/csv.Readerencoding/csv.Vencoding/csv.Wencoding/csv.readRecord~io.EOF (*encoding/csv.Reader).readLine�L.ptr.prototype.readLine=function(){var a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �c=a.r.ReadSlice(10);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];  �if($interfaceIsEqual(e,A.ErrBufferFull)){$s=2;continue;}$s=3;continue;    case 2:  �a.rawBuffer=$appendSlice($subslice(a.rawBuffer,0,0),d);  �case 4:if(!($interfaceIsEqual(e,A.ErrBufferFull))){$s=5;continue;}  g=a.r.ReadSlice(10);$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;d=f[0];e=f[1];  >a.rawBuffer=$appendSlice(a.rawBuffer,d);    $s=4;continue;case 5:  od=a.rawBuffer;    case 3:    if(d.$length>0&&$interfaceIsEqual(e,E.EOF)){  �e=$ifaceNil;    if((h=d.$length-1>>0,((h<0||h>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+h]))===13){  d=$subslice(d,0,(d.$length-1>>0));    }    }  ;a.numLine=a.numLine+(1)>>0;  xi=d.$length;    if(i>=2&&((j=i-2>>0,((j<0||j>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+j]))===13)&&((k=i-1>>0,((k<0||k>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+k]))===10)){  �(l=i-2>>0,((l<0||l>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+l]=10));  �d=$subslice(d,0,(i-1>>0));    }  �$s=-1;return[d,e];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.readLine};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.readLine=function(){return this.$val.readLine();};Reader	readLine~bufio.ErrBufferFullencoding/csv.Readerio.EOF encoding/csv.lengthNLN��N=function(a){var a,b;    if(a.$length>0&&((b=a.$length-1>>0,((b<0||b>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+b]))===10)){  return 1;    }  �return 0;    };lengthNLencoding/csv.lengthNL encoding/csv.nextRuneOKO=function(a){var a,b,c;  �b=G.DecodeRune(a);c=b[0];   return c;    };nextRuneencoding/csv.nextRuneunicode/utf8.DecodeRune !(*encoding/csv.Reader).readRecord�aL.ptr.prototype.readRecord=function(a){var a,aa,ab,ac,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if((b.Comma===b.Comment)||!K(b.Comma)||(!((b.Comment===0))&&!K(b.Comment))){   �$s=-1;return[V.nil,J];    }  !*c=T.nil;d=T.nil;e=c;f=d;  !Eg=$ifaceNil;  !Tcase 1:if(!($interfaceIsEqual(g,$ifaceNil))){$s=2;continue;}  !ki=b.readLine();$s=3;case 3:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;e=h[0];g=h[1];    if(!((b.Comment===0))&&(O(e)===b.Comment)){  !�e=T.nil;  !�$s=1;continue;    }    if($interfaceIsEqual(g,$ifaceNil)&&(e.$length===N(e))){  ")e=T.nil;  "7$s=1;continue;    }  "Zf=e;  "l$s=2;continue;    $s=1;continue;case 2:    if($interfaceIsEqual(g,E.EOF)){  "�$s=-1;return[V.nil,g];    }  "�j=$ifaceNil;  "�k=G.RuneLen(b.Comma);  #l=b.numLine;  #Kb.recordBuffer=$subslice(b.recordBuffer,0,0);  #pb.fieldIndexes=$subslice(b.fieldIndexes,0,0);  #�case 4:  #�if(b.TrimLeadingSpace){$s=6;continue;}$s=7;continue;    case 6:  #�m=B.TrimLeftFunc(e,F.IsSpace);$s=8;case 8:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}e=m;    case 7:  #�if((e.$length===0)||!(((0>=e.$length?($throwRuntimeError("index out of range"),undefined):e.$array[e.$offset+0])===34))){$s=9;continue;}$s=10;continue;    case 9:  $Bn=B.IndexRune(e,b.Comma);  $io=e;    if(n>=0){  $�o=$subslice(o,0,n);    }else{  $�o=$subslice(o,0,(o.$length-N(o)>>0));    }    if(!b.LazyQuotes){  %4p=B.IndexByte(o,34);    if(p>=0){  %dq=G.RuneCount($subslice(f,0,(f.$length-$subslice(e,p).$length>>0)));  %�j=new I.ptr(l,b.numLine,q,$pkg.ErrBareQuote);  &$s=5;continue s;    }    }  &"b.recordBuffer=$appendSlice(b.recordBuffer,o);  &Wb.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);    if(n>=0){  &�e=$subslice(e,(n+k>>0));  &�$s=4;continue s;    }  &�$s=5;continue s;    $s=11;continue;case 10:  'e=$subslice(e,1);  '3case 12:  '=r=B.IndexByte(e,34);  'aif(r>=0){$s=14;continue;}if(e.$length>0){$s=15;continue;}$s=16;continue;    case 14:  '�b.recordBuffer=$appendSlice(b.recordBuffer,$subslice(e,0,r));  '�e=$subslice(e,(r+1>>0));  '�s=O(e);    if((s===34)){  (Cb.recordBuffer=$append(b.recordBuffer,34);  (ve=$subslice(e,1);    }else if((s===b.Comma)){  (�e=$subslice(e,k);  (�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  )3$s=4;continue s;    }else if((N(e)===e.$length)){  )�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  )�$s=5;continue s;    }else if(b.LazyQuotes){  *1b.recordBuffer=$append(b.recordBuffer,34);    }else{  *�t=G.RuneCount($subslice(f,0,((f.$length-e.$length>>0)-1>>0)));  *�j=new I.ptr(l,b.numLine,t,$pkg.ErrQuote);  +H$s=5;continue s;    }    $s=17;continue;    case 15:  +�b.recordBuffer=$appendSlice(b.recordBuffer,e);    if(!($interfaceIsEqual(g,$ifaceNil))){  ,$s=5;continue s;    }  , v=b.readLine();$s=18;case 18:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;e=u[0];g=u[1];    if($interfaceIsEqual(g,E.EOF)){  ,_g=$ifaceNil;    }  ,yf=e;    $s=17;continue;case 16:    if(!b.LazyQuotes&&$interfaceIsEqual(g,$ifaceNil)){  ,�w=G.RuneCount(f);  -j=new I.ptr(l,b.numLine,w,$pkg.ErrQuote);  -p$s=5;continue s;    }  -�b.fieldIndexes=$append(b.fieldIndexes,b.recordBuffer.$length);  -�$s=5;continue s;    case 17:    $s=12;continue;case 13:    case 11:    $s=4;continue;case 5:    if($interfaceIsEqual(j,$ifaceNil)){  .j=g;    }  .�x=($bytesToString(b.recordBuffer));  .�a=$subslice(a,0,0);    if(a.$capacity<b.fieldIndexes.$length){  /a=$makeSlice(V,b.fieldIndexes.$length);    }  /Fa=$subslice(a,0,b.fieldIndexes.$length);  /ky=0;  /wz=b.fieldIndexes;aa=0;while(true){if(!(aa<z.$length)){break;}ab=aa;ac=((aa<0||aa>=z.$length)?($throwRuntimeError("index out of range"),undefined):z.$array[z.$offset+aa]);  /�((ab<0||ab>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+ab]=$substring(x,y,ac));  /�y=ac;    aa++;}    if(b.FieldsPerRecord>0){    if(!((a.$length===b.FieldsPerRecord))&&$interfaceIsEqual(j,$ifaceNil)){  0Pj=new I.ptr(l,l,0,$pkg.ErrFieldCount);    }    }else if(b.FieldsPerRecord===0){  0�b.FieldsPerRecord=a.$length;    }  0�$s=-1;return[a,j];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.readRecord};}$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.readRecord=function(a){return this.$val.readRecord(a);};ReaderreadRecord~bytes.IndexBytebytes.IndexRunebytes.TrimLeftFuncencoding/csv.ErrBareQuoteencoding/csv.ErrFieldCountencoding/csv.ErrQuoteencoding/csv.ParseErrorencoding/csv.Readerencoding/csv.Tencoding/csv.Vencoding/csv.errInvalidDelimencoding/csv.lengthNLencoding/csv.nextRuneencoding/csv.readLine~encoding/csv.validDelimio.EOFunicode.IsSpaceunicode/utf8.RuneCountunicode/utf8.RuneLen encoding/csv.NewWriterQ[Q=function(a){var a;  4preturn new P.ptr(44,false,A.NewWriter(a));    };$pkg.NewWriter=Q;	NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Writerencoding/csv.X (*encoding/csv.Writer).Write��P.ptr.prototype.Write=function(a){var a,aa,ab,ac,ad,ae,af,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if(!K(b.Comma)){  5�$s=-1;return J;    }  5�c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  5�if(e>0){$s=3;continue;}$s=4;continue;    case 3:  5�h=b.w.WriteRune(b.Comma);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  6$s=-1;return i;    }    case 4:  6�if(!b.fieldNeedsQuotes(f)){$s=6;continue;}$s=7;continue;    case 6:  6�k=b.w.WriteString(f);$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;l=j[1];    if(!($interfaceIsEqual(l,$ifaceNil))){  6�$s=-1;return l;    }  7d++;$s=1;continue;    case 7:  7m=b.w.WriteByte(34);$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;    if(!($interfaceIsEqual(n,$ifaceNil))){  7@$s=-1;return n;    }  7Qcase 10:if(!(f.length>0)){$s=11;continue;}  7�o=H.IndexAny(f,"\"\r\n");    if(o<0){  7�o=f.length;    }  8q=b.w.WriteString($substring(f,0,o));$s=12;case 12:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}p=q;r=p[1];    if(!($interfaceIsEqual(r,$ifaceNil))){  8V$s=-1;return r;    }  8if=$substring(f,o);  8�if(f.length>0){$s=13;continue;}$s=14;continue;    case 13:  8�s=$ifaceNil;    t=f.charCodeAt(0);  8�if(t===(34)){$s=16;continue;}if(t===(13)){$s=17;continue;}if(t===(10)){$s=18;continue;}$s=19;continue;    case 16:  8�v=b.w.WriteString("\"\"");$s=20;case 20:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;s=u[1];    $s=19;continue;    case 17:  9%if(!b.UseCRLF){$s=21;continue;}$s=22;continue;    case 21:  9;w=b.w.WriteByte(13);$s=23;case 23:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}s=w;    case 22:    $s=19;continue;    case 18:  9pif(b.UseCRLF){$s=24;continue;}$s=25;continue;    case 24:  9�y=b.w.WriteString("\r\n");$s=27;case 27:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}x=y;s=x[1];    $s=26;continue;case 25:  9�z=b.w.WriteByte(10);$s=28;case 28:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}s=z;    case 26:    case 19:    case 15:  9�f=$substring(f,1);    if(!($interfaceIsEqual(s,$ifaceNil))){  :$s=-1;return s;    }    case 14:    $s=10;continue;case 11:  :/aa=b.w.WriteByte(34);$s=29;case 29:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}ab=aa;    if(!($interfaceIsEqual(ab,$ifaceNil))){  :Z$s=-1;return ab;    }    d++;$s=1;continue;case 2:  :qac=$ifaceNil;  :|if(b.UseCRLF){$s=30;continue;}$s=31;continue;    case 30:  :�ae=b.w.WriteString("\r\n");$s=33;case 33:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}ad=ae;ac=ad[1];    $s=32;continue;case 31:  :�af=b.w.WriteByte(10);$s=34;case 34:if($c){$c=false;af=af.$blk();}if(af&&af.$blk!==undefined){break s;}ac=af;    case 32:  :�$s=-1;return ac;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.Write};}$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Write=function(a){return this.$val.Write(a);};Writerencoding/csv.Writerencoding/csv.errInvalidDelimencoding/csv.fieldNeedsQuotes~encoding/csv.validDelimstrings.IndexAny (*encoding/csv.Writer).Flush��P.ptr.prototype.Flush=function(){var a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  ;�b=a.w.Flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;    $s=-1;return;}return;}if($f===undefined){$f={$blk:P.ptr.prototype.Flush};}$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Flush=function(){return this.$val.Flush();};Writerencoding/csv.Writer (*encoding/csv.Writer).Error�P.ptr.prototype.Error=function(){var a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  < c=a.w.Write(T.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  <$s=-1;return d;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.Error};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.Error=function(){return this.$val.Error();};Writerencoding/csv.Tencoding/csv.Writer (*encoding/csv.Writer).WriteAll��P.ptr.prototype.WriteAll=function(a){var a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  <�c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  <�f=b.Write(e);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;    if(!($interfaceIsEqual(g,$ifaceNil))){  <�$s=-1;return g;    }    d++;$s=1;continue;case 2:  =h=b.w.Flush();$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return h;    }return;}if($f===undefined){$f={$blk:P.ptr.prototype.WriteAll};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};P.prototype.WriteAll=function(a){return this.$val.WriteAll(a);};Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes�^P.ptr.prototype.fieldNeedsQuotes=function(a){var a,b,c,d;b=this;    if(a===""){  @�return false;    }    if(a==="\\."||H.ContainsRune(a,b.Comma)||H.ContainsAny(a,"\"\r\n")){  @�return true;    }  Ac=G.DecodeRuneInString(a);d=c[0];  A4return F.IsSpace(d);    };P.prototype.fieldNeedsQuotes=function(a){return this.$val.fieldNeedsQuotes(a);};WriterfieldNeedsQuotes~encoding/csv.Writerstrings.ContainsAnystrings.ContainsRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString �[{"Base":16722,"Files":[{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/encoding/csv/reader.go","Base":1,"Size":12533,"Lines":[0,55,109,159,160,228,299,325,328,406,481,531,534,558,561,607,610,678,681,759,824,827,896,965,975,978,993,996,1028,1031,1056,1059,1096,1099,1169,1212,1215,1262,1265,1279,1282,1328,1331,1388,1391,1406,1429,1432,1446,1449,1465,1490,1502,1503,1512,1521,1530,1540,1547,1553,1564,1580,1582,1583,1631,1688,1713,1762,1812,1877,1914,1916,1917,1955,1984,2045,2048,2076,2195,2198,2284,2286,2287,2351,2357,2453,2515,2590,2647,2649,2650,2726,2727,2758,2855,2857,2858,2909,2912,2988,3062,3096,3099,3167,3238,3304,3325,3359,3402,3457,3508,3520,3521,3595,3659,3729,3774,3831,3882,3922,3936,3937,4002,4067,4145,4219,4294,4353,4374,4375,4448,4500,4517,4518,4594,4663,4686,4687,4761,4838,4924,4942,4943,4994,4995,5012,5013,5073,5086,5087,5152,5170,5171,5235,5304,5379,5439,5460,5461,5521,5588,5608,5609,5682,5703,5705,5706,5759,5797,5814,5828,5857,5860,5862,5863,5916,5969,6032,6094,6138,6204,6264,6299,6354,6374,6417,6441,6451,6485,6488,6508,6510,6511,6562,6599,6678,6756,6769,6830,6837,6872,6893,6916,6920,6938,6957,6961,6997,7000,7002,7003,7064,7129,7189,7250,7296,7330,7363,7412,7447,7482,7528,7532,7553,7556,7593,7605,7668,7701,7730,7734,7737,7750,7795,7866,7885,7905,7908,7926,7928,7929,7990,8020,8060,8071,8074,8084,8086,8087,8145,8176,8204,8214,8216,8217,8279,8376,8406,8409,8410,8484,8511,8530,8552,8583,8636,8650,8684,8688,8741,8755,8787,8791,8809,8817,8820,8844,8866,8869,8870,8906,8921,8948,8983,9033,9070,9107,9119,9126,9152,9204,9208,9248,9278,9317,9334,9349,9371,9383,9430,9435,9494,9516,9566,9633,9725,9747,9753,9758,9811,9875,9890,9919,9943,9948,9968,9979,10005,10031,10040,10076,10092,10116,10174,10204,10240,10261,10300,10351,10380,10405,10444,10473,10540,10566,10605,10644,10711,10734,10758,10794,10845,10859,10911,10984,11073,11096,11103,11133,11181,11235,11260,11283,11290,11324,11352,11372,11379,11400,11413,11456,11498,11536,11625,11648,11655,11721,11743,11749,11754,11758,11761,11778,11794,11797,11798,11854,11923,12001,12016,12053,12097,12100,12133,12149,12187,12214,12229,12232,12233,12285,12313,12364,12440,12444,12480,12511,12514,12531],"Infos":null},{"Name":"/var/folders/b8/66r1c5856mqds1mrf2tjtq8w0000gn/T/gopherjs_playground.PrZQkb3xQW/goroot/src/encoding/csv/writer.go","Base":12535,"Size":4186,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,288,291,360,435,515,518,551,554,635,656,715,772,795,797,798,850,888,905,919,948,951,953,954,1030,1098,1146,1173,1198,1201,1202,1234,1247,1300,1315,1320,1324,1325,1380,1437,1471,1524,1539,1544,1556,1560,1561,1606,1620,1624,1647,1684,1726,1740,1759,1764,1765,1826,1883,1898,1903,1924,1925,1961,1984,2002,2024,2038,2074,2089,2110,2142,2149,2164,2184,2223,2237,2269,2276,2282,2304,2324,2340,2346,2351,2355,2400,2414,2418,2421,2436,2452,2487,2497,2525,2528,2540,2542,2543,2606,2669,2696,2709,2711,2712,2791,2824,2850,2862,2864,2865,2944,2998,3032,3057,3075,3089,3093,3096,3116,3118,3119,3193,3253,3316,3389,3465,3538,3610,3679,3734,3809,3849,3906,3961,3979,3994,3997,4097,4111,4114,4115,4156,4184],"Infos":null}]}
 