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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �bh��compress/zlibzlibbufiocompress/flateerrorsfmthashhash/adler32io�	�
$$ exports $$
pv0zlibcompress/zlibBestCompression$!BestSpeed$!$DefaultCompression$!ErrChecksum6ErrDictionary6ErrHeader6	NewReader rReaderioio Read p2nerr6   ReadCloserCloser 
Close   6  :   6 	NewReaderDict r:dict2 B 6 	NewWriter wWriter 
Write p2nerr6   Writer w R 
level  dict 2 compressor Writer
flatecompress/flatedcompressor(  compressionLevel
good lazy nice 
chain fastSkipHashing   w huffmanBitWriterwR bits 
nbits 
bytes�2 nbytes literalFreq offsetFreq codegen codegenFreq literalEncodinghuffmanEncodercodeBits code bitLengthh�freq 
 bitCountsh�listliteralNodeliteral freq  maxBits  *assignEncodingAndSizeh�bitCountlist�  generateh�freqmaxBits   offsetEncoding� codegenEncoding� err6 
resetwrwriterR  flushBitswr   
flushwr   writeBitswrbnb  writeByteswr
bytes2  generateCodegenwrnumLiteralsnumOffsets  writeCodewrcode�literal  $writeDynamicHeaderwrnumLiteralsnumOffsetsnumCodegens
isEof   "writeStoredHeaderwrlength
isEof    writeFixedHeaderwr
isEof   writeBlockwrtokens
tokentypt�   literalt�   offsett�   lengtht�   eof 
input2   fill  h 2   step  h   sync  chainHead hashHead hashPrev hashOffset 
index window2 windowEnd blockStart byteAvailable  tokens� length offset hash maxInsertIndex err6 fillDeflatedhb2  writeBlockdhtokens�
indexeof  6 findMatchdhposprevHeadprevLengthlookaheadlengthoffsetok   writeStoredBlockdhbuf2 6 initDeflatedh   deflatedh   fillStoredhb2  
storedh   
writedhb2nerr6 syncFlushdh  6 initdhwR
levelerr6 
resetdhwR  
closedh  6  dict2 
Writewddata2nerr6 
Flushwd  6 
Closewd  6 
ResetwddstR   digest Hash32hashhashHashRBlockSize    
Reset    Size    Sum b2 2  
Sum32      err 6 scratch 2 wroteHeader   

Resetz\wR  writeHeaderz\ err6 
Writez\p2nerr6 
Flushz\  6 
Closez\  6  	NewWriterLevel wR
level \ 6 	$NewWriterLevelDict wR
leveldict2 \ 6 NoCompression$! Resetter  
Reset r:dict2 6  \#AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["compress/flate"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["fmt"];a    $r=G.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["hash"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["hash/adler32"];a    $r=E.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["io"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} H�~H=$pkg.reader=$newType(0,$kindStruct,"zlib.reader","reader","compress/zlib",function(r_,decompressor_,digest_,err_,scratch_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.decompressor=$ifaceNil;this.digest=$ifaceNil;this.err=$ifaceNil;this.scratch=Q.zero();return;}this.r=r_;this.decompressor=decompressor_;this.digest=digest_;this.err=err_;this.scratch=scratch_;});��U.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}];�aH.init([{prop:"r",name:"r",pkg:"compress/zlib",typ:B.Reader,tag:""},{prop:"decompressor",name:"decompressor",pkg:"compress/zlib",typ:F.ReadCloser,tag:""},{prop:"digest",name:"digest",pkg:"compress/zlib",typ:D.Hash32,tag:""},{prop:"err",name:"err",pkg:"compress/zlib",typ:$error,tag:""},{prop:"scratch",name:"scratch",pkg:"compress/zlib",typ:Q,tag:""}]);readercompress/flate.Readercompress/zlib.Pcompress/zlib.Qcompress/zlib.Ucompress/zlib.readerhash.Hash32io.ReadCloser	io.Reader I[I=$pkg.Resetter=$newType(8,$kindInterface,"zlib.Resetter","Resetter","compress/zlib",null);XI.init([{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}]);Resettercompress/zlib.Pcompress/zlib.Resetter	io.Reader L� L=$pkg.Writer=$newType(0,$kindStruct,"zlib.Writer","Writer","compress/zlib",function(w_,level_,dict_,compressor_,digest_,err_,scratch_,wroteHeader_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.level=0;this.dict=P.nil;this.compressor=T.nil;this.digest=$ifaceNil;this.err=$ifaceNil;this.scratch=Q.zero();this.wroteHeader=false;return;}this.w=w_;this.level=level_;this.dict=dict_;this.compressor=compressor_;this.digest=digest_;this.err=err_;this.scratch=scratch_;this.wroteHeader=wroteHeader_;});��R.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Writer],[],false)},{prop:"writeHeader",name:"writeHeader",pkg:"compress/zlib",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�L.init([{prop:"w",name:"w",pkg:"compress/zlib",typ:F.Writer,tag:""},{prop:"level",name:"level",pkg:"compress/zlib",typ:$Int,tag:""},{prop:"dict",name:"dict",pkg:"compress/zlib",typ:P,tag:""},{prop:"compressor",name:"compressor",pkg:"compress/zlib",typ:T,tag:""},{prop:"digest",name:"digest",pkg:"compress/zlib",typ:D.Hash32,tag:""},{prop:"err",name:"err",pkg:"compress/zlib",typ:$error,tag:""},{prop:"scratch",name:"scratch",pkg:"compress/zlib",typ:Q,tag:""},{prop:"wroteHeader",name:"wroteHeader",pkg:"compress/zlib",typ:$Bool,tag:""}]);Writercompress/zlib.Pcompress/zlib.Qcompress/zlib.Rcompress/zlib.Tcompress/zlib.Writerhash.Hash32	io.Writer PP=$sliceType($Uint8);P QQ=$arrayType($Uint8,4);Q RR=$ptrType(L);Rcompress/zlib.Writer SS=$sliceType($emptyInterface);S TT=$ptrType(B.Writer);Tcompress/flate.Writer UU=$ptrType(H);Ucompress/zlib.reader ErrChecksum ErrDictionary 	ErrHeader 6    $pkg.ErrChecksum=C.New("zlib: invalid checksum");compress/zlib.ErrChecksum
errors.New :    $pkg.ErrDictionary=C.New("zlib: invalid dictionary");compress/zlib.ErrDictionary
errors.New 2    $pkg.ErrHeader=C.New("zlib: invalid header");compress/zlib.ErrHeader
errors.New compress/zlib.NewReaderJ��J=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=K(a,P.nil);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=2;case 2:return b;    }return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReader=J;	NewReadercompress/zlib.NewReadercompress/zlib.NewReaderDictcompress/zlib.P compress/zlib.NewReaderDictK�wK=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	�c=new H.ptr($ifaceNil,$ifaceNil,$ifaceNil,$ifaceNil,Q.zero());  	�d=c.Reset(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  	�return[$ifaceNil,e];    }  	�return[c,$ifaceNil];    }return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReaderDict=K;NewReaderDictcompress/zlib.NewReaderDictcompress/zlib.Qcompress/zlib.reader (*compress/zlib.reader).Read�WH.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  
	d=this;    if(!($interfaceIsEqual(d.err,$ifaceNil))){    e=0;f=d.err;b=e;c=f;return[b,c];    }    if(a.$length===0){    g=0;h=$ifaceNil;b=g;c=h;return[b,c];    }  
�j=d.decompressor.Read(a);$s=1;case 1:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}i=j;b=i[0];c=i[1];  
�k=d.digest.Write($subslice(a,0,b));$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}k;    if(!((b===0))||!($interfaceIsEqual(c,F.EOF))){  
�d.err=c;  
�return[b,c];    }  m=F.ReadFull(d.r,$subslice(new P(d.scratch),0,4));$s=3;case 3:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;n=l[1];    if(!($interfaceIsEqual(n,$ifaceNil))){    if($interfaceIsEqual(n,F.EOF)){  pn=F.ErrUnexpectedEOF;    }  �d.err=n;    o=0;p=n;b=o;c=p;return[b,c];    }  �q=(((((((d.scratch[0]>>>0)<<24>>>0)|((d.scratch[1]>>>0)<<16>>>0))>>>0)|((d.scratch[2]>>>0)<<8>>>0))>>>0)|(d.scratch[3]>>>0))>>>0;  ]r=d.digest.Sum32();$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}if(!((q===r))){$s=4;continue;}$s=5;continue;    case 4:  �d.err=$pkg.ErrChecksum;    s=0;t=d.err;b=s;c=t;return[b,c];    case 5:  �return[b,c];    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Read=function(a){return this.$val.Read(a);};readercompress/zlib.ErrChecksumcompress/zlib.Pcompress/zlib.readerio.EOFio.ErrUnexpectedEOFio.ReadFull (*compress/zlib.reader).Close�\H.ptr.prototype.Close=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  a=this;    if(!($interfaceIsEqual(a.err,$ifaceNil))){  Areturn a.err;    }  Rb=a.decompressor.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;  rreturn a.err;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Close=function(){return this.$val.Close();};readercompress/zlib.reader (*compress/zlib.reader).Reset�	�H.ptr.prototype.Reset=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=this;  �d=$assertType(a,B.Reader,true);e=d[0];f=d[1];    if(f){  �c.r=e;    }else{  �c.r=A.NewReader(a);    }  h=F.ReadFull(c.r,$subslice(new P(c.scratch),0,2));$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){    if($interfaceIsEqual(i,F.EOF)){  hi=F.ErrUnexpectedEOF;    }  �return i;    }  �j=(((c.scratch[0]>>>0)<<8>>>0)|(c.scratch[1]>>>0))>>>0;    if((!((((c.scratch[0]&15)>>>0)===8)))||(!(((k=j%31,k===k?k:$throwRuntimeError("integer divide by zero"))===0)))){  return $pkg.ErrHeader;    }  l=!((((c.scratch[1]&32)>>>0)===0));  :if(l){$s=2;continue;}$s=3;continue;    case 2:  Jn=F.ReadFull(c.r,$subslice(new P(c.scratch),0,4));$s=4;case 4:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;i=m[1];    if(!($interfaceIsEqual(i,$ifaceNil))){    if($interfaceIsEqual(i,F.EOF)){  �i=F.ErrUnexpectedEOF;    }  �return i;    }  �o=(((((((c.scratch[0]>>>0)<<24>>>0)|((c.scratch[1]>>>0)<<16>>>0))>>>0)|((c.scratch[2]>>>0)<<8>>>0))>>>0)|(c.scratch[3]>>>0))>>>0;    if(!((o===E.Checksum(b)))){  qreturn $pkg.ErrDictionary;    }    case 3:  �if($interfaceIsEqual(c.decompressor,$ifaceNil)){$s=5;continue;}$s=6;continue;    case 5:  �if(l){$s=8;continue;}$s=9;continue;    case 8:  �p=B.NewReaderDict(c.r,b);$s=11;case 11:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}c.decompressor=p;    $s=10;continue;case 9:  �q=B.NewReader(c.r);$s=12;case 12:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}c.decompressor=q;    case 10:    $s=7;continue;case 6:  0r=$assertType(c.decompressor,B.Resetter).Reset(c.r,b);$s=13;case 13:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}r;    case 7:  ec.digest=E.New();  return $ifaceNil;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Reset};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Reset=function(a,b){return this.$val.Reset(a,b);};readerbufio.NewReadercompress/flate.NewReadercompress/flate.NewReaderDictcompress/flate.Readercompress/flate.Resettercompress/zlib.ErrDictionarycompress/zlib.ErrHeadercompress/zlib.Pcompress/zlib.readerhash/adler32.Checksumhash/adler32.Newio.EOFio.ErrUnexpectedEOFio.ReadFull compress/zlib.NewWriterM��M=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  c=O(a,-1,P.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];  Treturn d;    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriter=M;	NewWritercompress/zlib.NewWriter compress/zlib.NewWriterLevelDictcompress/zlib.P compress/zlib.NewWriterLevelN��N=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=O(a,b,P.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=2;case 2:return c;    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriterLevel=N;NewWriterLevelcompress/zlib.NewWriterLevel compress/zlib.NewWriterLevelDictcompress/zlib.P  compress/zlib.NewWriterLevelDictO��O=function(a,b,c){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !if(b<-1||b>9){$s=1;continue;}$s=2;continue;    case 1:  ^d=G.Errorf("zlib: invalid compression level: %d",new S([new $Int(b)]));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=4;case 4:return[R.nil,d];    case 2:  �return[new L.ptr(a,b,c,T.nil,$ifaceNil,$ifaceNil,Q.zero(),false),$ifaceNil];    }return;}if($f===undefined){$f={$blk:O};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriterLevelDict=O;NewWriterLevelDict	compress/flate.Writer compress/zlib.NewWriterLevelDictcompress/zlib.Pcompress/zlib.Qcompress/zlib.Rcompress/zlib.Scompress/zlib.Tcompress/zlib.Writer
fmt.Errorf (*compress/zlib.Writer).Reset��L.ptr.prototype.Reset=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=this;  �b.w=a;  �if(!(b.compressor===T.nil)){$s=1;continue;}$s=2;continue;    case 1:  $r=b.compressor.Reset(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  if(!($interfaceIsEqual(b.digest,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  5$r=b.digest.Reset();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 5:  Jb.err=$ifaceNil;  WQ.copy(b.scratch,Q.zero());  nb.wroteHeader=false;    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Reset};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Reset=function(a){return this.$val.Reset(a);};Writercompress/zlib.Qcompress/zlib.Tcompress/zlib.Writer #(*compress/zlib.Writer).writeHeader��L.ptr.prototype.writeHeader=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=$ifaceNil;  �b=this;  �b.wroteHeader=true;  �b.scratch[0]=120;    c=b.level;    if((c===(0))||(c===(1))){  b.scratch[1]=0;    }else if((c===(2))||(c===(3))||(c===(4))||(c===(5))){  -b.scratch[1]=64;    }else if((c===(6))||(c===(-1))){  Rb.scratch[1]=128;    }else if((c===(7))||(c===(8))||(c===(9))){  yb.scratch[1]=192;    }else{  �$panic(new $String("unreachable"));    }    if(!(b.dict===P.nil)){  �b.scratch[1]=((b.scratch[1]|(32))>>>0);    }  �b.scratch[1]=(b.scratch[1]+(((31-(d=((((b.scratch[0]<<16>>>16)<<8<<16>>>16)+(b.scratch[1]<<16>>>16)<<16>>>16))%31,d===d?d:$throwRuntimeError("integer divide by zero"))<<16>>>16)<<24>>>24))<<24>>>24);  6f=b.w.Write($subslice(new P(b.scratch),0,2));$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;a=e[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;return a;    }  xif(!(b.dict===P.nil)){$s=2;continue;}$s=3;continue;    case 2:  �g=E.Checksum(b.dict);  �b.scratch[0]=((g>>>24>>>0)<<24>>>24);   !b.scratch[1]=((g>>>16>>>0)<<24>>>24);   Hb.scratch[2]=((g>>>8>>>0)<<24>>>24);   nb.scratch[3]=((g>>>0>>>0)<<24>>>24);   �i=b.w.Write($subslice(new P(b.scratch),0,4));$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;a=h[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;return a;    }    case 3:   �if(b.compressor===T.nil){$s=5;continue;}$s=6;continue;    case 5:  !Mk=B.NewWriterDict(b.w,b.level,b.dict);$s=7;case 7:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;b.compressor=j[0];a=j[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;return a;    }  !�b.digest=E.New();    case 6:    a=$ifaceNil;return a;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.writeHeader};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.writeHeader=function(){return this.$val.writeHeader();};WriterwriteHeader~compress/flate.NewWriterDictcompress/zlib.Pcompress/zlib.Tcompress/zlib.Writerhash/adler32.Checksumhash/adler32.New (*compress/zlib.Writer).Write��L.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  "�d=this;  "�if(!d.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  "�e=d.writeHeader();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d.err=e;    case 2:    if(!($interfaceIsEqual(d.err,$ifaceNil))){    f=0;g=d.err;b=f;c=g;return[b,c];    }    if(a.$length===0){    h=0;i=$ifaceNil;b=h;c=i;return[b,c];    }  #?k=d.compressor.Write(a);$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;b=j[0];c=j[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  #qd.err=c;  #return[b,c];    }  #�l=d.digest.Write(a);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}l;  #�return[b,c];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Flush�!L.ptr.prototype.Flush=function(){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�a=this;  $if(!a.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  $b=a.writeHeader();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;    case 2:    if(!($interfaceIsEqual(a.err,$ifaceNil))){  $Hreturn a.err;    }  $Yc=a.compressor.Flush();$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a.err=c;  $wreturn a.err;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Flush=function(){return this.$val.Flush();};Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Close�AL.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  %a=this;  %.if(!a.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  %Db=a.writeHeader();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;    case 2:    if(!($interfaceIsEqual(a.err,$ifaceNil))){  %treturn a.err;    }  %�c=a.compressor.Close();$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a.err=c;    if(!($interfaceIsEqual(a.err,$ifaceNil))){  %�return a.err;    }  %�d=a.digest.Sum32();$s=5;case 5:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  &!a.scratch[0]=((e>>>24>>>0)<<24>>>24);  &Ga.scratch[1]=((e>>>16>>>0)<<24>>>24);  &ma.scratch[2]=((e>>>8>>>0)<<24>>>24);  &�a.scratch[3]=((e>>>0>>>0)<<24>>>24);  &�g=a.w.Write($subslice(new P(a.scratch),0,4));$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;a.err=f[1];  &�return a.err;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Close=function(){return this.$val.Close();};Writercompress/zlib.Pcompress/zlib.Writercompress/zlib.writeHeader~ �G{"Base":9965,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.LFqXad3kxU/goroot/src/compress/zlib/reader.go","Base":1,"Size":4491,"Lines":[0,55,109,159,160,163,239,265,266,333,401,414,415,435,460,495,506,507,535,536,566,589,600,603,616,617,626,635,653,663,671,687,693,695,696,718,719,725,806,858,943,999,1076,1124,1126,1127,1148,1175,1203,1229,1249,1271,1273,1274,1348,1423,1459,1485,1559,1604,1643,1645,1646,1685,1756,1838,1918,1921,1987,2040,2070,2072,2073,2138,2223,2320,2323,2393,2463,2481,2506,2523,2541,2544,2559,2561,2562,2615,2634,2652,2655,2673,2689,2692,2693,2726,2750,2780,2794,2803,2806,2807,2842,2903,2924,2953,2957,2971,2987,2990,3049,3163,3198,3220,3238,3241,3249,3251,3252,3338,3371,3390,3405,3408,3440,3454,3456,3457,3514,3551,3562,3572,3599,3602,3646,3663,3684,3713,3717,3730,3733,3782,3838,3857,3860,3896,3911,3955,3973,3995,4025,4030,4044,4048,4163,4205,4229,4233,4236,4264,4280,4331,4342,4383,4387,4397,4448,4451,4477,4489],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.LFqXad3kxU/goroot/src/compress/zlib/writer.go","Base":4493,"Size":5471,"Lines":[0,55,109,159,160,173,174,183,201,208,216,232,238,240,241,321,387,395,437,475,519,566,568,569,632,694,715,738,755,775,802,827,846,867,885,887,888,923,989,992,1073,1128,1166,1222,1232,1234,1235,1315,1350,1353,1427,1503,1550,1613,1655,1657,1658,1733,1751,1754,1834,1859,1939,1999,2070,2073,2090,2102,2118,2133,2141,2143,2144,2220,2300,2309,2347,2356,2395,2421,2445,2448,2470,2489,2492,2505,2528,2551,2553,2554,2593,2638,2660,2720,2825,2904,2925,3003,3045,3103,3158,3176,3188,3212,3230,3254,3267,3291,3306,3330,3340,3363,3366,3386,3411,3414,3493,3546,3559,3562,3582,3652,3691,3730,3769,3807,3845,3899,3913,3917,3920,3946,4005,4030,4094,4112,4126,4130,4157,4160,4172,4174,4175,4247,4325,4348,4402,4423,4449,4452,4471,4489,4492,4510,4526,4529,4561,4578,4592,4601,4604,4623,4631,4633,4634,4691,4724,4745,4771,4774,4793,4808,4811,4841,4855,4857,4858,4932,4991,5024,5045,5071,5074,5093,5108,5111,5141,5160,5175,5178,5208,5267,5305,5343,5380,5417,5455,5469],"Infos":null}]}
 