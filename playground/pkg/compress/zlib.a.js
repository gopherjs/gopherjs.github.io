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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �f1��compress/zlibzlibbufiocompress/flateerrorsfmthashhash/adler32io�I
$$ exports $$
pv0zlibcompress/zlibBestCompression$!BestSpeed$!$DefaultCompression$!ErrChecksum6ErrDictionary6ErrHeader6HuffmanOnly$!	NewReader rReaderioio Read p2nerr6   ReadCloserCloser 
Close   6  :   6 	NewReaderDict r:dict2 B 6 	NewWriter wWriter 
Write p2nerr6   Writer w R 
level  dict 2 compressor Writer
flatecompress/flatedcompressor.  compressionLevel
level good lazy nice 
chain fastSkipHashing   w huffmanBitWriterwriterR bits 
nbits 
bytes�2 codegenFreq& nbytes literalFreq offsetFreq codegen literalEncodinghuffmanEncoder

codes
hcodecode len seth�codelength   freqcacheliteralNodeliteral freq   bitCount" lnsbyLiteral�sorts�a�  Lens�   Lesss�ij   Swaps�ij   lfsbyFreq�sorts�a�  Lens�   Lesss�ij   Swaps�ij   bitLengthh�freq  bitCountsh�list�maxBits  *assignEncodingAndSizeh�bitCountlist�  generateh�freqmaxBits   offsetEncoding� codegenEncoding� err6 $
resetwrwriterR  
flushwr   
writewrb2  writeBitswrbnb  writeByteswr
bytes2  generateCodegenwrnumLiteralsnumOffsetslitEnc�offEnc�  dynamicSizewrlitEnc�offEnc�extraBitssizenumCodegens fixedSizewrextraBits  storedSizewrin2    writeCodewrc�  $writeDynamicHeaderwrnumLiteralsnumOffsetsnumCodegens
isEof   "writeStoredHeaderwrlength
isEof    writeFixedHeaderwr
isEof   writeBlockwrtokens
tokenliteralt�   offsett�   lengtht�   eof 
input2  "writeBlockDynamicwrtokens�eof 
input2  indexTokenswrtokens�numLiteralsnumOffsets writeTokenswrtokens�leCodes�oeCodes�  writeBlockHuffwreof 
input2   bulkHasher  2    fill  h 2   step  h   sync  bestSpeeddeflateFast
table��tableEntryval offset   prev2 cur encodee�dst�src2 � matchLene�stsrc2  
resete�   resetAlle�    chainHead hashHead�� hashPrev�� hashOffset 
index window2 windowEnd blockStart byteAvailable  tokens� length offset hash maxInsertIndex err6 hashMatch�  fillDeflatedhb2  writeBlockdhtokens�
index 6 fillWindowdhb2  findMatchdhposprevHeadprevLengthlookaheadlengthoffsetok   writeStoredBlockdhbuf2 6 encSpeeddh   initDeflatedh   deflatedh   fillStoredhb2  
storedh   storeHuffdh   
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
Reset r:dict2 6  \#AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["compress/flate"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["fmt"];a    $r=G.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["hash"];a    $r=D.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["hash/adler32"];a    $r=E.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["io"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} H��H=$pkg.reader=$newType(0,$kindStruct,"zlib.reader",true,"compress/zlib",false,function(r_,decompressor_,digest_,err_,scratch_){this.$val=this;if(arguments.length===0){this.r=$ifaceNil;this.decompressor=$ifaceNil;this.digest=$ifaceNil;this.err=$ifaceNil;this.scratch=Q.zero();return;}this.r=r_;this.decompressor=decompressor_;this.digest=digest_;this.err=err_;this.scratch=scratch_;});��U.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}];�XH.init("compress/zlib",[{prop:"r",name:"r",exported:false,typ:B.Reader,tag:""},{prop:"decompressor",name:"decompressor",exported:false,typ:F.ReadCloser,tag:""},{prop:"digest",name:"digest",exported:false,typ:D.Hash32,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"scratch",name:"scratch",exported:false,typ:Q,tag:""}]);readercompress/flate.Readercompress/zlib.Pcompress/zlib.Qcompress/zlib.Ucompress/zlib.readerhash.Hash32io.ReadCloser	io.Reader IZI=$pkg.Resetter=$newType(8,$kindInterface,"zlib.Resetter",true,"compress/zlib",true,null);XI.init([{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Reader,P],[$error],false)}]);Resettercompress/zlib.Pcompress/zlib.Resetter	io.Reader L�L=$pkg.Writer=$newType(0,$kindStruct,"zlib.Writer",true,"compress/zlib",true,function(w_,level_,dict_,compressor_,digest_,err_,scratch_,wroteHeader_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.level=0;this.dict=P.nil;this.compressor=T.nil;this.digest=$ifaceNil;this.err=$ifaceNil;this.scratch=Q.zero();this.wroteHeader=false;return;}this.w=w_;this.level=level_;this.dict=dict_;this.compressor=compressor_;this.digest=digest_;this.err=err_;this.scratch=scratch_;this.wroteHeader=wroteHeader_;});��R.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([F.Writer],[],false)},{prop:"writeHeader",name:"writeHeader",pkg:"compress/zlib",typ:$funcType([],[$error],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�L.init("compress/zlib",[{prop:"w",name:"w",exported:false,typ:F.Writer,tag:""},{prop:"level",name:"level",exported:false,typ:$Int,tag:""},{prop:"dict",name:"dict",exported:false,typ:P,tag:""},{prop:"compressor",name:"compressor",exported:false,typ:T,tag:""},{prop:"digest",name:"digest",exported:false,typ:D.Hash32,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"scratch",name:"scratch",exported:false,typ:Q,tag:""},{prop:"wroteHeader",name:"wroteHeader",exported:false,typ:$Bool,tag:""}]);Writercompress/zlib.Pcompress/zlib.Qcompress/zlib.Rcompress/zlib.Tcompress/zlib.Writerhash.Hash32	io.Writer PP=$sliceType($Uint8);P QQ=$arrayType($Uint8,4);Q RR=$ptrType(L);Rcompress/zlib.Writer SS=$sliceType($emptyInterface);S TT=$ptrType(B.Writer);Tcompress/flate.Writer UU=$ptrType(H);Ucompress/zlib.reader ErrChecksum ErrDictionary 	ErrHeader 6    $pkg.ErrChecksum=C.New("zlib: invalid checksum");compress/zlib.ErrChecksum
errors.New :    $pkg.ErrDictionary=C.New("zlib: invalid dictionary");compress/zlib.ErrDictionary
errors.New 2    $pkg.ErrHeader=C.New("zlib: invalid header");compress/zlib.ErrHeader
errors.New compress/zlib.NewReaderJ��J=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  b=K(a,P.nil);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReader=J;	NewReadercompress/zlib.NewReadercompress/zlib.NewReaderDictcompress/zlib.P compress/zlib.NewReaderDictK��K=function(a,b){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	�c=new H.ptr($ifaceNil,$ifaceNil,$ifaceNil,$ifaceNil,Q.zero());  	�d=c.Reset(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(!($interfaceIsEqual(e,$ifaceNil))){  	�$s=-1;return[$ifaceNil,e];    }  
$s=-1;return[c,$ifaceNil];    }return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewReaderDict=K;NewReaderDictcompress/zlib.NewReaderDictcompress/zlib.Qcompress/zlib.reader (*compress/zlib.reader).Read�^H.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;    if(!($interfaceIsEqual(b.err,$ifaceNil))){  
]$s=-1;return[0,b.err];    }  
vc=0;  
}e=b.decompressor.Read(a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;c=d[0];b.err=d[1];  
�f=b.digest.Write($subslice(a,0,c));$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    if(!($interfaceIsEqual(b.err,F.EOF))){  
�$s=-1;return[c,b.err];    }  2h=F.ReadFull(b.r,$subslice(new P(b.scratch),0,4));$s=3;case 3:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){    if($interfaceIsEqual(i,F.EOF)){  �i=F.ErrUnexpectedEOF;    }  �b.err=i;  �$s=-1;return[c,b.err];    }   j=(((((((b.scratch[0]>>>0)<<24>>>0)|((b.scratch[1]>>>0)<<16>>>0))>>>0)|((b.scratch[2]>>>0)<<8>>>0))>>>0)|(b.scratch[3]>>>0))>>>0;  rk=b.digest.Sum32();$s=6;case 6:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}if(!((j===k))){$s=4;continue;}$s=5;continue;    case 4:  �b.err=$pkg.ErrChecksum;  �$s=-1;return[c,b.err];    case 5:  �$s=-1;return[c,F.EOF];    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Read=function(a){return this.$val.Read(a);};readercompress/zlib.ErrChecksumcompress/zlib.Pcompress/zlib.readerio.EOFio.ErrUnexpectedEOFio.ReadFull (*compress/zlib.reader).Close��H.ptr.prototype.Close=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;    if(!($interfaceIsEqual(a.err,$ifaceNil))&&!($interfaceIsEqual(a.err,F.EOF))){  �$s=-1;return a.err;    }  �b=a.decompressor.Close();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;  $s=-1;return a.err;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Close=function(){return this.$val.Close();};readercompress/zlib.readerio.EOF (*compress/zlib.reader).Reset�
]H.ptr.prototype.Reset=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;  WH.copy(c,new H.ptr($ifaceNil,c.decompressor,$ifaceNil,$ifaceNil,Q.zero()));  �d=$assertType(a,B.Reader,true);e=d[0];f=d[1];    if(f){  �c.r=e;    }else{  �c.r=A.NewReader(a);    }  h=F.ReadFull(c.r,$subslice(new P(c.scratch),0,2));$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;c.err=g[1];    if(!($interfaceIsEqual(c.err,$ifaceNil))){    if($interfaceIsEqual(c.err,F.EOF)){  ac.err=F.ErrUnexpectedEOF;    }  �$s=-1;return c.err;    }  �i=(((c.scratch[0]>>>0)<<8>>>0)|(c.scratch[1]>>>0))>>>0;    if((!((((c.scratch[0]&15)>>>0)===8)))||(!(((j=i%31,j===j?j:$throwRuntimeError("integer divide by zero"))===0)))){  �c.err=$pkg.ErrHeader;  $s=-1;return c.err;    }  #k=!((((c.scratch[1]&32)>>>0)===0));  Gif(k){$s=2;continue;}$s=3;continue;    case 2:  Wm=F.ReadFull(c.r,$subslice(new P(c.scratch),0,4));$s=4;case 4:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;c.err=l[1];    if(!($interfaceIsEqual(c.err,$ifaceNil))){    if($interfaceIsEqual(c.err,F.EOF)){  �c.err=F.ErrUnexpectedEOF;    }  �$s=-1;return c.err;    }  �n=(((((((c.scratch[0]>>>0)<<24>>>0)|((c.scratch[1]>>>0)<<16>>>0))>>>0)|((c.scratch[2]>>>0)<<8>>>0))>>>0)|(c.scratch[3]>>>0))>>>0;    if(!((n===E.Checksum(b)))){  �c.err=$pkg.ErrDictionary;  �$s=-1;return c.err;    }    case 3:  �if($interfaceIsEqual(c.decompressor,$ifaceNil)){$s=5;continue;}$s=6;continue;    case 5:  �if(k){$s=8;continue;}$s=9;continue;    case 8:  �o=B.NewReaderDict(c.r,b);$s=11;case 11:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}c.decompressor=o;    $s=10;continue;case 9:  #p=B.NewReader(c.r);$s=12;case 12:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}c.decompressor=p;    case 10:    $s=7;continue;case 6:  Yq=$assertType(c.decompressor,B.Resetter).Reset(c.r,b);$s=13;case 13:if($c){$c=false;q=q.$blk();}if(q&&q.$blk!==undefined){break s;}q;    case 7:  �c.digest=E.New();  �$s=-1;return $ifaceNil;    }return;}if($f===undefined){$f={$blk:H.ptr.prototype.Reset};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.$s=$s;$f.$r=$r;return $f;};H.prototype.Reset=function(a,b){return this.$val.Reset(a,b);};readerbufio.NewReadercompress/flate.NewReadercompress/flate.NewReaderDictcompress/flate.Readercompress/flate.Resettercompress/zlib.ErrDictionarycompress/zlib.ErrHeadercompress/zlib.Pcompress/zlib.Qcompress/zlib.readerhash/adler32.Checksumhash/adler32.Newio.EOFio.ErrUnexpectedEOFio.ReadFull compress/zlib.NewWriterM��M=function(a){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  mc=O(a,-1,P.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];  �$s=-1;return d;    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriter=M;	NewWritercompress/zlib.NewWriter compress/zlib.NewWriterLevelDictcompress/zlib.P compress/zlib.NewWriterLevelN��N=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  8c=O(a,b,P.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriterLevel=N;NewWriterLevelcompress/zlib.NewWriterLevel compress/zlib.NewWriterLevelDictcompress/zlib.P  compress/zlib.NewWriterLevelDictO��O=function(a,b,c){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ~if(b<-2||b>9){$s=1;continue;}$s=2;continue;    case 1:  �d=G.Errorf("zlib: invalid compression level: %d",new S([new $Int(b)]));$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return[R.nil,d];    case 2:  �$s=-1;return[new L.ptr(a,b,c,T.nil,$ifaceNil,$ifaceNil,Q.zero(),false),$ifaceNil];    }return;}if($f===undefined){$f={$blk:O};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.NewWriterLevelDict=O;NewWriterLevelDict	compress/flate.Writer compress/zlib.NewWriterLevelDictcompress/zlib.Pcompress/zlib.Qcompress/zlib.Rcompress/zlib.Scompress/zlib.Tcompress/zlib.Writer
fmt.Errorf (*compress/zlib.Writer).Reset��L.ptr.prototype.Reset=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  b.w=a;  ?if(!(b.compressor===T.nil)){$s=1;continue;}$s=2;continue;    case 1:  Z$r=b.compressor.Reset(a);$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:  tif(!($interfaceIsEqual(b.digest,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  �$r=b.digest.Reset();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 5:  �b.err=$ifaceNil;  �Q.copy(b.scratch,Q.zero());  �b.wroteHeader=false;    $s=-1;return;}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Reset};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Reset=function(a){return this.$val.Reset(a);};Writercompress/zlib.Qcompress/zlib.Tcompress/zlib.Writer #(*compress/zlib.Writer).writeHeader��L.ptr.prototype.writeHeader=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=$ifaceNil;b=this;  2b.wroteHeader=true;  <b.scratch[0]=120;    c=b.level;    if((c===(-2))||(c===(0))||(c===(1))){  ]b.scratch[1]=0;    }else if((c===(2))||(c===(3))||(c===(4))||(c===(5))){  �b.scratch[1]=64;    }else if((c===(6))||(c===(-1))){  �b.scratch[1]=128;    }else if((c===(7))||(c===(8))||(c===(9))){  �b.scratch[1]=192;    }else{  �$panic(new $String("unreachable"));    }    if(!(b.dict===P.nil)){   #b.scratch[1]=((b.scratch[1]|(32))>>>0);    }   >b.scratch[1]=(b.scratch[1]+(((31-(d=((((b.scratch[0]<<16>>>16)<<8<<16>>>16)+(b.scratch[1]<<16>>>16)<<16>>>16))%31,d===d?d:$throwRuntimeError("integer divide by zero"))<<16>>>16)<<24>>>24))<<24>>>24);   �f=b.w.Write($subslice(new P(b.scratch),0,2));$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;a=e[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;$s=-1;return a;    }   �if(!(b.dict===P.nil)){$s=2;continue;}$s=3;continue;    case 2:  !-g=E.Checksum(b.dict);  !Tb.scratch[0]=((g>>>24>>>0)<<24>>>24);  !{b.scratch[1]=((g>>>16>>>0)<<24>>>24);  !�b.scratch[2]=((g>>>8>>>0)<<24>>>24);  !�b.scratch[3]=((g>>>0>>>0)<<24>>>24);  !�i=b.w.Write($subslice(new P(b.scratch),0,4));$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;a=h[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;$s=-1;return a;    }    case 3:  "8if(b.compressor===T.nil){$s=5;continue;}$s=6;continue;    case 5:  "�k=B.NewWriterDict(b.w,b.level,b.dict);$s=7;case 7:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;b.compressor=j[0];a=j[1];    if(!($interfaceIsEqual(a,$ifaceNil))){    a=a;$s=-1;return a;    }  #b.digest=E.New();    case 6:    a=$ifaceNil;$s=-1;return a;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.writeHeader};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.writeHeader=function(){return this.$val.writeHeader();};WriterwriteHeader~compress/flate.NewWriterDictcompress/zlib.Pcompress/zlib.Tcompress/zlib.Writerhash/adler32.Checksumhash/adler32.New (*compress/zlib.Writer).Write��L.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  $if(!d.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  $0e=d.writeHeader();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d.err=e;    case 2:    if(!($interfaceIsEqual(d.err,$ifaceNil))){    f=0;g=d.err;b=f;c=g;$s=-1;return[b,c];    }    if(a.$length===0){    h=0;i=$ifaceNil;b=h;c=i;$s=-1;return[b,c];    }  $�k=d.compressor.Write(a);$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;b=j[0];c=j[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  $�d.err=c;  $�$s=-1;return[b,c];    }  $�l=d.digest.Write(a);$s=5;case 5:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}l;  $�$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Flush�(L.ptr.prototype.Flush=function(){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  %\if(!a.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  %rb=a.writeHeader();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;    case 2:    if(!($interfaceIsEqual(a.err,$ifaceNil))){  %�$s=-1;return a.err;    }  %�c=a.compressor.Flush();$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a.err=c;  %�$s=-1;return a.err;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Flush=function(){return this.$val.Flush();};Writercompress/zlib.Writercompress/zlib.writeHeader~ (*compress/zlib.Writer).Close�NL.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  &�if(!a.wroteHeader){$s=1;continue;}$s=2;continue;    case 1:  &�b=a.writeHeader();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}a.err=b;    case 2:    if(!($interfaceIsEqual(a.err,$ifaceNil))){  &�$s=-1;return a.err;    }  &�c=a.compressor.Close();$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}a.err=c;    if(!($interfaceIsEqual(a.err,$ifaceNil))){  '$s=-1;return a.err;    }  '"d=a.digest.Sum32();$s=5;case 5:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  '{a.scratch[0]=((e>>>24>>>0)<<24>>>24);  '�a.scratch[1]=((e>>>16>>>0)<<24>>>24);  '�a.scratch[2]=((e>>>8>>>0)<<24>>>24);  '�a.scratch[3]=((e>>>0>>>0)<<24>>>24);  (g=a.w.Write($subslice(new P(a.scratch),0,4));$s=6;case 6:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;a.err=f[1];  (7$s=-1;return a.err;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Close=function(){return this.$val.Close();};Writercompress/zlib.Pcompress/zlib.Writercompress/zlib.writeHeader~ �q{"Base":10311,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.QDLsW9nGOZ/goroot/src/compress/zlib/reader.go","Base":1,"Size":4788,"Lines":[0,55,109,159,160,163,239,265,266,333,401,414,415,435,460,495,506,507,535,536,566,589,600,603,616,617,626,635,653,663,671,687,693,695,696,718,719,725,806,858,943,999,1076,1124,1126,1127,1148,1175,1203,1229,1249,1271,1273,1274,1348,1423,1459,1485,1559,1604,1643,1645,1646,1685,1756,1829,1860,1940,1943,2009,2062,2092,2094,2095,2160,2245,2342,2345,2415,2485,2503,2528,2545,2563,2566,2581,2583,2584,2631,2650,2668,2671,2672,2683,2718,2742,2764,2804,2822,2825,2826,2861,2922,2943,2972,2976,2990,3008,3011,3070,3184,3219,3241,3259,3262,3280,3282,3283,3369,3438,3474,3507,3545,3560,3563,3595,3609,3611,3612,3669,3712,3749,3760,3770,3797,3800,3801,3846,3891,3910,3933,3964,3968,3983,3986,4035,4091,4111,4126,4129,4165,4180,4226,4246,4270,4302,4307,4323,4327,4442,4484,4509,4525,4529,4532,4533,4561,4577,4628,4639,4680,4684,4694,4745,4748,4774,4786],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.QDLsW9nGOZ/goroot/src/compress/zlib/writer.go","Base":4790,"Size":5520,"Lines":[0,55,109,159,160,173,174,183,201,208,216,232,238,240,241,321,387,395,437,475,519,566,606,608,609,672,734,755,778,795,815,842,867,886,907,925,927,928,963,1029,1032,1113,1168,1206,1262,1272,1274,1275,1355,1390,1393,1472,1545,1602,1665,1707,1709,1710,1785,1803,1806,1886,1911,1991,2044,2115,2118,2135,2147,2163,2178,2186,2188,2189,2265,2345,2354,2392,2401,2440,2466,2490,2493,2515,2534,2537,2550,2573,2596,2598,2599,2638,2683,2705,2765,2870,2949,2970,3048,3090,3148,3203,3221,3237,3261,3279,3303,3316,3340,3355,3379,3389,3412,3415,3435,3460,3463,3542,3595,3608,3611,3631,3701,3740,3779,3818,3856,3894,3948,3962,3966,3969,3995,4054,4079,4143,4161,4175,4179,4206,4209,4221,4223,4224,4296,4374,4397,4451,4472,4498,4501,4520,4538,4541,4559,4575,4578,4610,4627,4641,4650,4653,4672,4680,4682,4683,4740,4773,4794,4820,4823,4842,4857,4860,4890,4904,4906,4907,4981,5040,5073,5094,5120,5123,5142,5157,5160,5190,5209,5224,5227,5257,5316,5354,5392,5429,5466,5504,5518],"Infos":null}]}
 