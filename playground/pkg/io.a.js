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
GoLinkname�� Implementation�� 	Reference��   �II��ioioerrorssync�
~i �� ReadByte
ByteReader
UnreadByte	WriteBytecClosedstWritersrcReaderwrittenerrbufnrRNReadlLimitedReaderpreaderswritersReaderAtoffSectionReader
ReadCloser
PipeReader
PipeWriterpipedataCloseWithErrorWritewminCloserSeekerReadAtReadFromReadRunesize
RuneReader
UnreadRunebaselimitsSeekoffsetwhenceSizeWriteStringWriteAtWriteTowrMuMutexsyncwrChrdChonceOncedonererr	onceErrorwerrbreadCloseError	CloseReadwriteCloseError
CloseWritestatesemaLockmlockSlowUnlock
unlockSlownewDoofdoSlowStoreaLoadioByteScanner
ByteWriterCopy
CopyBufferCopyNDiscardEOFErrClosedPipeErrNoProgressErrShortBufferErrShortWriteErrUnexpectedEOFLimitReaderMultiReaderMultiWriterNewSectionReader	NopCloserPipeReadAllReadAtLeastReadFullReadSeekCloser
ReadSeekerReadWriteCloserReadWriteSeeker
ReadWriter
ReaderFromRuneScannerSeekCurrentSeekEnd	SeekStartStringWriter	TeeReaderWriteCloserWriteSeekerWriterAtWriterTo        T   
   1    T 4     *   T D   ,   T V 6  A F  2d =g H P F  2d =g T{ H P F  2d =g X H P V dV V V V V V F  Zg X  g   \g   ^   g �T � ` e� u� X P gF  w�  gdF  �  d �  � �F  Z� � X  �  � F  Zg  �  � � � �F    �  � � �  u�  ���T � ` Z� �� X P  , Z�    � Z� P   �  u�  ���T � � �� �� X P  , ��    � �� P   F  Zg  �   F  Zg T� � X P  �   � g T �F  Zg T� X P  �   � g � T �  g � T �  � g d T �  g � d T �  g d T �   ` u� X P T �   � u� � X P T �   � Zg X P T �   �  Z � PT � �   � �   T �  Z�   �   �   �  ����T � ` �� u� X P  � �� � �      � �� u� � X P  � ��   C C C     � � �     T �   � � X P T �F  Zg �d  g   � d T �  � d T �F  �d � X P    � u� X P T �   � u� � X P T �   � �d X P T � ��� ��  � �   ��   ��   ��   ��   ��   ��   ��  ������T � ` u�	 ��	 X P  � u�	    � u�	 P    � u�	 ��	 X P  � u�	    � u�	 P   � �   �	  ����T �
 � ��
   � ��
   � ��
   � ��
 �  � �	   ��  ��  ��  T �
 � �� ��   � �� ��    ��  P  ��T � � �� P   � ��    � 4
�!�3�A�J�]�q����������������g���������������������������������A�����������������������������6���������	�� ��
��
y errors	errors = $packages["errors"];
��    		$r = errors.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  sync	sync = $packages["sync"];
��    		$r = sync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ReaderZ	Reader = $pkg.Reader = $newType(8, $kindInterface, "io.Reader", true, "io", true, null);
m	Reader.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
Reader	io.Readerio.sliceType$1  WriterZ	Writer = $pkg.Writer = $newType(8, $kindInterface, "io.Writer", true, "io", true, null);
o	Writer.init([{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
Writer	io.Writerio.sliceType$1  CloserZ	Closer = $pkg.Closer = $newType(8, $kindInterface, "io.Closer", true, "io", true, null);
^	Closer.init([{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}]);
Closer	io.Closer  SeekerZ	Seeker = $pkg.Seeker = $newType(8, $kindInterface, "io.Seeker", true, "io", true, null);
p	Seeker.init([{prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}]);
Seeker	io.Seeker  
ReadWriterf	ReadWriter = $pkg.ReadWriter = $newType(8, $kindInterface, "io.ReadWriter", true, "io", true, null);
��	ReadWriter.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);

ReadWriterio.ReadWriterio.sliceType$1  
ReadCloserf	ReadCloser = $pkg.ReadCloser = $newType(8, $kindInterface, "io.ReadCloser", true, "io", true, null);
��	ReadCloser.init([{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);

ReadCloserio.ReadCloserio.sliceType$1  WriteCloseri	WriteCloser = $pkg.WriteCloser = $newType(8, $kindInterface, "io.WriteCloser", true, "io", true, null);
��	WriteCloser.init([{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
WriteCloserio.WriteCloserio.sliceType$1  ReadWriteCloseru	ReadWriteCloser = $pkg.ReadWriteCloser = $newType(8, $kindInterface, "io.ReadWriteCloser", true, "io", true, null);
�#	ReadWriteCloser.init([{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
ReadWriteCloserio.ReadWriteCloserio.sliceType$1  
ReadSeekerf	ReadSeeker = $pkg.ReadSeeker = $newType(8, $kindInterface, "io.ReadSeeker", true, "io", true, null);
��	ReadSeeker.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}]);

ReadSeekerio.ReadSeekerio.sliceType$1  ReadSeekCloserr	ReadSeekCloser = $pkg.ReadSeekCloser = $newType(8, $kindInterface, "io.ReadSeekCloser", true, "io", true, null);
�#	ReadSeekCloser.init([{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}]);
ReadSeekCloserio.ReadSeekCloserio.sliceType$1  WriteSeekeri	WriteSeeker = $pkg.WriteSeeker = $newType(8, $kindInterface, "io.WriteSeeker", true, "io", true, null);
��	WriteSeeker.init([{prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
WriteSeekerio.WriteSeekerio.sliceType$1  ReadWriteSeekeru	ReadWriteSeeker = $pkg.ReadWriteSeeker = $newType(8, $kindInterface, "io.ReadWriteSeeker", true, "io", true, null);
�5	ReadWriteSeeker.init([{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}]);
ReadWriteSeekerio.ReadWriteSeekerio.sliceType$1  
ReaderFromf	ReaderFrom = $pkg.ReaderFrom = $newType(8, $kindInterface, "io.ReaderFrom", true, "io", true, null);
v	ReaderFrom.init([{prop: "ReadFrom", name: "ReadFrom", pkg: "", typ: $funcType([Reader], [$Int64, $error], false)}]);

ReaderFrom	io.Readerio.ReaderFrom  WriterTo`	WriterTo = $pkg.WriterTo = $newType(8, $kindInterface, "io.WriterTo", true, "io", true, null);
r	WriterTo.init([{prop: "WriteTo", name: "WriteTo", pkg: "", typ: $funcType([Writer], [$Int64, $error], false)}]);
WriterTo	io.Writerio.WriterTo  ReaderAt`	ReaderAt = $pkg.ReaderAt = $newType(8, $kindInterface, "io.ReaderAt", true, "io", true, null);
{	ReaderAt.init([{prop: "ReadAt", name: "ReadAt", pkg: "", typ: $funcType([sliceType$1, $Int64], [$Int, $error], false)}]);
ReaderAtio.ReaderAtio.sliceType$1  WriterAt`	WriterAt = $pkg.WriterAt = $newType(8, $kindInterface, "io.WriterAt", true, "io", true, null);
}	WriterAt.init([{prop: "WriteAt", name: "WriteAt", pkg: "", typ: $funcType([sliceType$1, $Int64], [$Int, $error], false)}]);
WriterAtio.WriterAtio.sliceType$1  
ByteReaderf	ByteReader = $pkg.ByteReader = $newType(8, $kindInterface, "io.ByteReader", true, "io", true, null);
p	ByteReader.init([{prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}]);

ByteReaderio.ByteReader  ByteScanneri	ByteScanner = $pkg.ByteScanner = $newType(8, $kindInterface, "io.ByteScanner", true, "io", true, null);
��	ByteScanner.init([{prop: "ReadByte", name: "ReadByte", pkg: "", typ: $funcType([], [$Uint8, $error], false)}, {prop: "UnreadByte", name: "UnreadByte", pkg: "", typ: $funcType([], [$error], false)}]);
ByteScannerio.ByteScanner  
ByteWriterf	ByteWriter = $pkg.ByteWriter = $newType(8, $kindInterface, "io.ByteWriter", true, "io", true, null);
p	ByteWriter.init([{prop: "WriteByte", name: "WriteByte", pkg: "", typ: $funcType([$Uint8], [$error], false)}]);

ByteWriterio.ByteWriter  
RuneReaderf	RuneReader = $pkg.RuneReader = $newType(8, $kindInterface, "io.RuneReader", true, "io", true, null);
v	RuneReader.init([{prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}]);

RuneReaderio.RuneReader  RuneScanneri	RuneScanner = $pkg.RuneScanner = $newType(8, $kindInterface, "io.RuneScanner", true, "io", true, null);
��	RuneScanner.init([{prop: "ReadRune", name: "ReadRune", pkg: "", typ: $funcType([], [$Int32, $Int, $error], false)}, {prop: "UnreadRune", name: "UnreadRune", pkg: "", typ: $funcType([], [$error], false)}]);
RuneScannerio.RuneScanner  StringWriterl	StringWriter = $pkg.StringWriter = $newType(8, $kindInterface, "io.StringWriter", true, "io", true, null);
}	StringWriter.init([{prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}]);
StringWriterio.StringWriter  LimitedReader�	LimitedReader = $pkg.LimitedReader = $newType(0, $kindStruct, "io.LimitedReader", true, "io", true, function(R_, N_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.R = $ifaceNil;
			this.N = new $Int64(0, 0);
			return;
		}
		this.R = R_;
		this.N = N_;
	});
t	ptrType$2.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	LimitedReader.init("", [{prop: "R", name: "R", embedded: false, exported: true, typ: Reader, tag: ""}, {prop: "N", name: "N", embedded: false, exported: true, typ: $Int64, tag: ""}]);
LimitedReaderio.LimitedReader	io.Readerio.ptrType$2io.sliceType$1  SectionReader��	SectionReader = $pkg.SectionReader = $newType(0, $kindStruct, "io.SectionReader", true, "io", true, function(r_, base_, off_, limit_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.base = new $Int64(0, 0);
			this.off = new $Int64(0, 0);
			this.limit = new $Int64(0, 0);
			return;
		}
		this.r = r_;
		this.base = base_;
		this.off = off_;
		this.limit = limit_;
	});
��	ptrType$4.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Seek", name: "Seek", pkg: "", typ: $funcType([$Int64, $Int], [$Int64, $error], false)}, {prop: "ReadAt", name: "ReadAt", pkg: "", typ: $funcType([sliceType$1, $Int64], [$Int, $error], false)}, {prop: "Size", name: "Size", pkg: "", typ: $funcType([], [$Int64], false)}];
�q	SectionReader.init("io", [{prop: "r", name: "r", embedded: false, exported: false, typ: ReaderAt, tag: ""}, {prop: "base", name: "base", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "off", name: "off", embedded: false, exported: false, typ: $Int64, tag: ""}, {prop: "limit", name: "limit", embedded: false, exported: false, typ: $Int64, tag: ""}]);
SectionReaderio.ReaderAtio.SectionReaderio.ptrType$4io.sliceType$1  	teeReader�	teeReader = $pkg.teeReader = $newType(0, $kindStruct, "io.teeReader", true, "io", false, function(r_, w_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.r = $ifaceNil;
			this.w = $ifaceNil;
			return;
		}
		this.r = r_;
		this.w = w_;
	});
t	ptrType$5.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
��	teeReader.init("io", [{prop: "r", name: "r", embedded: false, exported: false, typ: Reader, tag: ""}, {prop: "w", name: "w", embedded: false, exported: false, typ: Writer, tag: ""}]);
	teeReader	io.Reader	io.Writerio.ptrType$5io.sliceType$1io.teeReader  discard��	discard = $pkg.discard = $newType(0, $kindStruct, "io.discard", true, "io", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
�=	discard.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}, {prop: "ReadFrom", name: "ReadFrom", pkg: "", typ: $funcType([Reader], [$Int64, $error], false)}];
	discard.init("", []);
discard	io.Reader
io.discardio.sliceType$1  	nopCloser��	nopCloser = $pkg.nopCloser = $newType(0, $kindStruct, "io.nopCloser", true, "io", false, function(Reader_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Reader = $ifaceNil;
			return;
		}
		this.Reader = Reader_;
	});
e	nopCloser.methods = [{prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}];
o	nopCloser.init("", [{prop: "Reader", name: "Reader", embedded: true, exported: true, typ: Reader, tag: ""}]);
	nopCloser	io.Readerio.nopCloser  	eofReader��	eofReader = $pkg.eofReader = $newType(0, $kindStruct, "io.eofReader", true, "io", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
t	eofReader.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
	eofReader.init("", []);
	eofReaderio.eofReaderio.sliceType$1  multiReader��	multiReader = $pkg.multiReader = $newType(0, $kindStruct, "io.multiReader", true, "io", false, function(readers_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.readers = sliceType$2.nil;
			return;
		}
		this.readers = readers_;
	});
t	ptrType$3.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}];
|	multiReader.init("io", [{prop: "readers", name: "readers", embedded: false, exported: false, typ: sliceType$2, tag: ""}]);
multiReaderio.multiReaderio.ptrType$3io.sliceType$1io.sliceType$2  multiWriter��	multiWriter = $pkg.multiWriter = $newType(0, $kindStruct, "io.multiWriter", true, "io", false, function(writers_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.writers = sliceType$3.nil;
			return;
		}
		this.writers = writers_;
	});
��	ptrType$1.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "WriteString", name: "WriteString", pkg: "", typ: $funcType([$String], [$Int, $error], false)}];
|	multiWriter.init("io", [{prop: "writers", name: "writers", embedded: false, exported: false, typ: sliceType$3, tag: ""}]);
multiWriterio.multiWriterio.ptrType$1io.sliceType$1io.sliceType$3  	onceError�(	onceError = $pkg.onceError = $newType(0, $kindStruct, "io.onceError", true, "io", false, function(Mutex_, err_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.Mutex = new sync.Mutex.ptr(0, 0);
			this.err = $ifaceNil;
			return;
		}
		this.Mutex = Mutex_;
		this.err = err_;
	});
��	ptrType$6.methods = [{prop: "Store", name: "Store", pkg: "", typ: $funcType([$error], [], false)}, {prop: "Load", name: "Load", pkg: "", typ: $funcType([], [$error], false)}];
��	onceError.init("io", [{prop: "Mutex", name: "Mutex", embedded: true, exported: true, typ: sync.Mutex, tag: ""}, {prop: "err", name: "err", embedded: false, exported: false, typ: $error, tag: ""}]);
	onceErrorio.onceErrorio.ptrType$6
sync.Mutex  pipe��	pipe = $pkg.pipe = $newType(0, $kindStruct, "io.pipe", true, "io", false, function(wrMu_, wrCh_, rdCh_, once_, done_, rerr_, werr_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wrMu = new sync.Mutex.ptr(0, 0);
			this.wrCh = $chanNil;
			this.rdCh = $chanNil;
			this.once = new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0));
			this.done = $chanNil;
			this.rerr = new onceError.ptr(new sync.Mutex.ptr(0, 0), $ifaceNil);
			this.werr = new onceError.ptr(new sync.Mutex.ptr(0, 0), $ifaceNil);
			return;
		}
		this.wrMu = wrMu_;
		this.wrCh = wrCh_;
		this.rdCh = rdCh_;
		this.once = once_;
		this.done = done_;
		this.rerr = rerr_;
		this.werr = werr_;
	});
�S	ptrType$7.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "readCloseError", name: "readCloseError", pkg: "io", typ: $funcType([], [$error], false)}, {prop: "CloseRead", name: "CloseRead", pkg: "", typ: $funcType([$error], [$error], false)}, {prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "writeCloseError", name: "writeCloseError", pkg: "io", typ: $funcType([], [$error], false)}, {prop: "CloseWrite", name: "CloseWrite", pkg: "", typ: $funcType([$error], [$error], false)}];
��	pipe.init("io", [{prop: "wrMu", name: "wrMu", embedded: false, exported: false, typ: sync.Mutex, tag: ""}, {prop: "wrCh", name: "wrCh", embedded: false, exported: false, typ: chanType, tag: ""}, {prop: "rdCh", name: "rdCh", embedded: false, exported: false, typ: chanType$1, tag: ""}, {prop: "once", name: "once", embedded: false, exported: false, typ: sync.Once, tag: ""}, {prop: "done", name: "done", embedded: false, exported: false, typ: chanType$2, tag: ""}, {prop: "rerr", name: "rerr", embedded: false, exported: false, typ: onceError, tag: ""}, {prop: "werr", name: "werr", embedded: false, exported: false, typ: onceError, tag: ""}]);
pipe
io.chanTypeio.chanType$1io.chanType$2io.onceErrorio.pipeio.ptrType$7io.sliceType$1io.structType
sync.Mutex	sync.Once  
PipeReader��	PipeReader = $pkg.PipeReader = $newType(0, $kindStruct, "io.PipeReader", true, "io", true, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = ptrType$7.nil;
			return;
		}
		this.p = p_;
	});
�(	ptrType$8.methods = [{prop: "Read", name: "Read", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "CloseWithError", name: "CloseWithError", pkg: "", typ: $funcType([$error], [$error], false)}];
m	PipeReader.init("io", [{prop: "p", name: "p", embedded: false, exported: false, typ: ptrType$7, tag: ""}]);

PipeReaderio.PipeReaderio.ptrType$7io.ptrType$8io.sliceType$1  
PipeWriter��	PipeWriter = $pkg.PipeWriter = $newType(0, $kindStruct, "io.PipeWriter", true, "io", true, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = ptrType$7.nil;
			return;
		}
		this.p = p_;
	});
�*	ptrType$9.methods = [{prop: "Write", name: "Write", pkg: "", typ: $funcType([sliceType$1], [$Int, $error], false)}, {prop: "Close", name: "Close", pkg: "", typ: $funcType([], [$error], false)}, {prop: "CloseWithError", name: "CloseWithError", pkg: "", typ: $funcType([$error], [$error], false)}];
m	PipeWriter.init("io", [{prop: "p", name: "p", embedded: false, exported: false, typ: ptrType$7, tag: ""}]);

PipeWriterio.PipeWriterio.ptrType$7io.ptrType$9io.sliceType$1  	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType  sliceType$1#	sliceType$1 = $sliceType($Uint8);
sliceType$1  ptrType"	ptrType = $ptrType(sliceType$1);
ptrTypeio.sliceType$1  	ptrType$1$	ptrType$1 = $ptrType(multiWriter);
	ptrType$1io.multiWriter  	ptrType$2&	ptrType$2 = $ptrType(LimitedReader);
	ptrType$2io.LimitedReader  	ptrType$3$	ptrType$3 = $ptrType(multiReader);
	ptrType$3io.multiReader  sliceType$2#	sliceType$2 = $sliceType(Reader);
sliceType$2	io.Reader  sliceType$3#	sliceType$3 = $sliceType(Writer);
sliceType$3	io.Writer  
structType#	structType = $structType("", []);

structType  	ptrType$4&	ptrType$4 = $ptrType(SectionReader);
	ptrType$4io.SectionReader  	ptrType$5"	ptrType$5 = $ptrType(teeReader);
	ptrType$5io.teeReader  	ptrType$6"	ptrType$6 = $ptrType(onceError);
	ptrType$6io.onceError  	ptrType$7	ptrType$7 = $ptrType(pipe);
	ptrType$7io.pipe  chanType2	chanType = $chanType(sliceType$1, false, false);
chanTypeio.sliceType$1  
chanType$1-	chanType$1 = $chanType($Int, false, false);

chanType$1  
chanType$23	chanType$2 = $chanType(structType, false, false);

chanType$2io.structType  	ptrType$8#	ptrType$8 = $ptrType(PipeReader);
	ptrType$8io.PipeReader  	ptrType$9#	ptrType$9 = $ptrType(PipeWriter);
	ptrType$9io.PipeWriter  ErrShortWrite  errInvalidWriteerrInvalidWrite  ErrShortBuffer  EOF  ErrUnexpectedEOF  ErrNoProgress  	errWhence	errWhence  	errOffset	errOffset  Discard  blackHolePoolblackHolePool  ErrClosedPipe  7  �		$pkg.ErrShortWrite = errors.New("short write");

errors.Newio.ErrShortWrite  =  L		errInvalidWrite = errors.New("invalid write result");

errors.Newio.errInvalidWrite  9  �		$pkg.ErrShortBuffer = errors.New("short buffer");

errors.Newio.ErrShortBuffer  %  �		$pkg.EOF = errors.New("EOF");

errors.Newio.EOF  =  0		$pkg.ErrUnexpectedEOF = errors.New("unexpected EOF");

errors.Newio.ErrUnexpectedEOF  W  		$pkg.ErrNoProgress = errors.New("multiple Read calls return no data or error");

errors.Newio.ErrNoProgress  7  @`		errWhence = errors.New("Seek: invalid whence");

errors.Newio.errWhence  7  @�		errOffset = errors.New("Seek: invalid offset");

errors.Newio.errOffset  xJ  Fr		$pkg.Discard = (x = new discard.ptr(), new x.constructor.elem(x));
Discard
io.Discard
io.discard  x$1J  G		$unused((x$1 = new discard.ptr(), new x$1.constructor.elem(x$1)));
_
io.discard  �  G�		blackHolePool = new sync.Pool.ptr(sliceType.nil, (function() {
			var b, b$24ptr;
  G�			b = $makeSlice(sliceType$1, 8192);
  H			return (b$24ptr || (b$24ptr = new ptrType(function() { return b; }, function($v) { b = $convertSliceType($v, sliceType$1); })));
    		}));
io.blackHolePool
io.ptrTypeio.sliceTypeio.sliceType$1	sync.Pool  !  R�		$unused((ptrType$1.nil));
_io.multiWriterio.ptrType$1  I  Y�		$pkg.ErrClosedPipe = errors.New("io: read/write on closed pipe");

errors.Newio.ErrClosedPipe io.WriteStringioWriteString WriteString�[	WriteString = function(w, s) {
		var $24r, $24r$1, _r, _r$1, _tuple, _tuple$1, _tuple$2, err, n, ok, s, sw, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; n = $f.n; ok = $f.ok; s = $f.s; sw = $f.sw; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
  *(		_tuple = $assertType(w, StringWriter, true);
		sw = _tuple[0];
		ok = _tuple[1];
  *%		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
    			_r = sw.WriteString(s); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple$1 = _r;
			n = _tuple$1[0];
			err = _tuple$1[1];
			$24r = [n, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
    		_r$1 = w.Write((new sliceType$1($stringToBytes(s)))); /* */ $s = 5; case 5: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$2 = _r$1;
		n = _tuple$2[0];
		err = _tuple$2[1];
		$24r$1 = [n, err];
		$s = 6; case 6: return $24r$1;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: WriteString }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.n = n; $f.ok = ok; $f.s = s; $f.sw = sw; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.WriteString = WriteString;
WriteStringio.StringWriterio.WriteStringio.sliceType$1 io.ReadAtLeastioReadAtLeast ReadAtLeast�	ReadAtLeast = function(r, buf, min) {
		var _r, _tmp, _tmp$1, _tuple, buf, err, min, n, nn, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; buf = $f.buf; err = $f.err; min = $f.min; n = $f.n; nn = $f.nn; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		if (buf.$length < min) {
    			_tmp = 0;
			_tmp$1 = $pkg.ErrShortBuffer;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  ,�		/* while (true) { */ case 1:
			/* if (!(n < min && $interfaceIsEqual(err, $ifaceNil))) { break; } */ if(!(n < min && $interfaceIsEqual(err, $ifaceNil))) { $s = 2; continue; }
  -			nn = 0;
  -(			_r = r.Read($subslice(buf, n)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			nn = _tuple[0];
			err = _tuple[1];
  -D			n = n + (nn) >> 0;
    		$s = 1; continue;
		case 2:
    		if (n >= min) {
  -`			err = $ifaceNil;
    		} else if (n > 0 && $interfaceIsEqual(err, $pkg.EOF)) {
  -�			err = $pkg.ErrUnexpectedEOF;
    		}
  -�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadAtLeast }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.buf = buf; $f.err = err; $f.min = min; $f.n = n; $f.nn = nn; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadAtLeast = ReadAtLeast;
ReadAtLeastio.EOFio.ErrShortBufferio.ErrUnexpectedEOFio.ReadAtLeast io.ReadFullioReadFull ReadFull�h	ReadFull = function(r, buf) {
		var $24r, _r, _tuple, buf, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
    		_r = ReadAtLeast(r, buf, buf.$length); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadFull }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadFull = ReadFull;
ReadFullio.ReadAtLeastio.ReadFull io.CopyNioCopyN CopyN�B	CopyN = function(dst, src, n) {
		var _r, _tmp, _tmp$1, _tuple, dst, err, n, src, written, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; dst = $f.dst; err = $f.err; n = $f.n; src = $f.src; written = $f.written; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		written = new $Int64(0, 0);
		err = $ifaceNil;
  10		_r = Copy(dst, LimitReader(src, n)); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		written = _tuple[0];
		err = _tuple[1];
    		if ((written.$high === n.$high && written.$low === n.$low)) {
    			_tmp = n;
			_tmp$1 = $ifaceNil;
			written = _tmp;
			err = _tmp$1;
			$s = -1; return [written, err];
    		}
    		if ((written.$high < n.$high || (written.$high === n.$high && written.$low < n.$low)) && $interfaceIsEqual(err, $ifaceNil)) {
  1�			err = $pkg.EOF;
    		}
  1�		$s = -1; return [written, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: CopyN }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.dst = dst; $f.err = err; $f.n = n; $f.src = src; $f.written = written; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.CopyN = CopyN;
CopyNio.Copyio.CopyNio.EOFio.LimitReader io.CopyioCopy Copy��	Copy = function(dst, src) {
		var $24r, _r, _tuple, dst, err, src, written, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; dst = $f.dst; err = $f.err; src = $f.src; written = $f.written; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		written = new $Int64(0, 0);
		err = $ifaceNil;
    		_r = copyBuffer(dst, src, sliceType$1.nil); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		written = _tuple[0];
		err = _tuple[1];
		$24r = [written, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Copy }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.dst = dst; $f.err = err; $f.src = src; $f.written = written; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Copy = Copy;
Copyio.Copyio.copyBufferio.sliceType$1 io.CopyBufferio
CopyBuffer 
CopyBuffer�^	CopyBuffer = function(dst, src, buf) {
		var $24r, _r, _tuple, buf, dst, err, src, written, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; buf = $f.buf; dst = $f.dst; err = $f.err; src = $f.src; written = $f.written; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		written = new $Int64(0, 0);
		err = $ifaceNil;
    		if (!(buf === sliceType$1.nil) && (buf.$length === 0)) {
  6o			$panic(new $String("empty buffer in CopyBuffer"));
    		}
    		_r = copyBuffer(dst, src, buf); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		written = _tuple[0];
		err = _tuple[1];
		$24r = [written, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: CopyBuffer }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.buf = buf; $f.dst = dst; $f.err = err; $f.src = src; $f.written = written; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.CopyBuffer = CopyBuffer;

CopyBufferio.CopyBufferio.copyBufferio.sliceType$1 io.copyBufferio
copyBuffer 
copyBuffer��	copyBuffer = function(dst, src, buf) {
		var $24r, $24r$1, _r, _r$1, _r$2, _r$3, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, buf, dst, er, err, ew, l, nr, nw, ok, ok$1, ok$2, rt, size, src, written, wt, x$2, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; buf = $f.buf; dst = $f.dst; er = $f.er; err = $f.err; ew = $f.ew; l = $f.l; nr = $f.nr; nw = $f.nw; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; rt = $f.rt; size = $f.size; src = $f.src; written = $f.written; wt = $f.wt; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		written = new $Int64(0, 0);
		err = $ifaceNil;
  7�		_tuple = $assertType(src, WriterTo, true);
		wt = _tuple[0];
		ok = _tuple[1];
  7�		/* */ if (ok) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (ok) { */ case 1:
    			_r = wt.WriteTo(dst); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple$1 = _r;
			written = _tuple$1[0];
			err = _tuple$1[1];
			$24r = [written, err];
			$s = 4; case 4: return $24r;
    		/* } */ case 2:
  8e		_tuple$2 = $assertType(dst, ReaderFrom, true);
		rt = _tuple$2[0];
		ok$1 = _tuple$2[1];
  8b		/* */ if (ok$1) { $s = 5; continue; }
		/* */ $s = 6; continue;
    		/* if (ok$1) { */ case 5:
    			_r$1 = rt.ReadFrom(src); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$3 = _r$1;
			written = _tuple$3[0];
			err = _tuple$3[1];
			$24r$1 = [written, err];
			$s = 8; case 8: return $24r$1;
    		/* } */ case 6:
    		if (buf === sliceType$1.nil) {
  8�			size = 32768;
  8�			_tuple$4 = $assertType(src, ptrType$2, true);
			l = _tuple$4[0];
			ok$2 = _tuple$4[1];
    			if (ok$2 && (x$2 = (new $Int64(0, size)), x$3 = l.N, (x$2.$high > x$3.$high || (x$2.$high === x$3.$high && x$2.$low > x$3.$low)))) {
    				if ((x$4 = l.N, (x$4.$high < 0 || (x$4.$high === 0 && x$4.$low < 1)))) {
  9					size = 1;
    				} else {
  93					size = (((x$5 = l.N, x$5.$low + ((x$5.$high >> 31) * 4294967296)) >> 0));
    				}
    			}
  9N			buf = $makeSlice(sliceType$1, size);
    		}
  9k		/* while (true) { */ case 9:
  9s			_r$2 = src.Read(buf); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tuple$5 = _r$2;
			nr = _tuple$5[0];
			er = _tuple$5[1];
  9�			/* */ if (nr > 0) { $s = 12; continue; }
			/* */ $s = 13; continue;
    			/* if (nr > 0) { */ case 12:
  9�				_r$3 = dst.Write($subslice(buf, 0, nr)); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tuple$6 = _r$3;
				nw = _tuple$6[0];
				ew = _tuple$6[1];
    				if (nw < 0 || nr < nw) {
  9�					nw = 0;
    					if ($interfaceIsEqual(ew, $ifaceNil)) {
  9�						ew = errInvalidWrite;
    					}
    				}
  :				written = (x$6 = (new $Int64(0, nw)), new $Int64(written.$high + x$6.$high, written.$low + x$6.$low));
    				if (!($interfaceIsEqual(ew, $ifaceNil))) {
  :F					err = ew;
  :S					/* break; */ $s = 10; continue;
    				}
    				if (!((nr === nw))) {
  :s					err = $pkg.ErrShortWrite;
  :�					/* break; */ $s = 10; continue;
    				}
    			/* } */ case 13:
    			if (!($interfaceIsEqual(er, $ifaceNil))) {
    				if (!($interfaceIsEqual(er, $pkg.EOF))) {
  :�					err = er;
    				}
  :�				/* break; */ $s = 10; continue;
    			}
    		$s = 9; continue;
		case 10:
    		_tmp = written;
		_tmp$1 = err;
		written = _tmp;
		err = _tmp$1;
		$s = -1; return [written, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: copyBuffer }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f.buf = buf; $f.dst = dst; $f.er = er; $f.err = err; $f.ew = ew; $f.l = l; $f.nr = nr; $f.nw = nw; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.rt = rt; $f.size = size; $f.src = src; $f.written = written; $f.wt = wt; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};

copyBuffer	io.EOFio.ErrShortWriteio.LimitedReaderio.ReaderFromio.WriterToio.copyBufferio.errInvalidWriteio.ptrType$2io.sliceType$1 io.LimitReaderioLimitReader LimitReader��	LimitReader = function(r, n) {
		var n, r;
  ;�		return new LimitedReader.ptr(r, n);
    	};
	$pkg.LimitReader = LimitReader;
LimitReaderio.LimitReaderio.LimitedReader (*io.LimitedReader).Read �]	LimitedReader.ptr.prototype.Read = function(p) {
		var _r, _tmp, _tmp$1, _tuple, err, l, n, p, x$2, x$3, x$4, x$5, x$6, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; err = $f.err; l = $f.l; n = $f.n; p = $f.p; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		l = this;
    		if ((x$2 = l.N, (x$2.$high < 0 || (x$2.$high === 0 && x$2.$low <= 0)))) {
    			_tmp = 0;
			_tmp$1 = $pkg.EOF;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
    		if ((x$3 = (new $Int64(0, p.$length)), x$4 = l.N, (x$3.$high > x$4.$high || (x$3.$high === x$4.$high && x$3.$low > x$4.$low)))) {
  =�			p = $subslice(p, 0, $flatten64(l.N));
    		}
  =�		_r = l.R.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  =�		l.N = (x$5 = l.N, x$6 = (new $Int64(0, n)), new $Int64(x$5.$high - x$6.$high, x$5.$low - x$6.$low));
  =�		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: LimitedReader.ptr.prototype.Read }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.err = err; $f.l = l; $f.n = n; $f.p = p; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.$s = $s; $f.$r = $r; return $f;
	};
	LimitedReader.prototype.Read = function(p) { return this.$val.Read(p); };
LimitedReaderio.EOFio.LimitedReader io.NewSectionReaderioNewSectionReader NewSectionReader��	NewSectionReader = function(r, off, n) {
		var n, off, r;
  >�		return new SectionReader.ptr(r, off, off, new $Int64(off.$high + n.$high, off.$low + n.$low));
    	};
	$pkg.NewSectionReader = NewSectionReader;
NewSectionReaderio.NewSectionReaderio.SectionReader (*io.SectionReader).Read �M	SectionReader.ptr.prototype.Read = function(p) {
		var _r, _tmp, _tmp$1, _tuple, err, max, n, p, s, x$2, x$3, x$4, x$5, x$6, x$7, x$8, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; err = $f.err; max = $f.max; n = $f.n; p = $f.p; s = $f.s; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; x$8 = $f.x$8; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		s = this;
    		if ((x$2 = s.off, x$3 = s.limit, (x$2.$high > x$3.$high || (x$2.$high === x$3.$high && x$2.$low >= x$3.$low)))) {
    			_tmp = 0;
			_tmp$1 = $pkg.EOF;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  ?�		max = (x$4 = s.limit, x$5 = s.off, new $Int64(x$4.$high - x$5.$high, x$4.$low - x$5.$low));
    		if ((x$6 = (new $Int64(0, p.$length)), (x$6.$high > max.$high || (x$6.$high === max.$high && x$6.$low > max.$low)))) {
  @			p = $subslice(p, 0, $flatten64(max));
    		}
  @ 		_r = s.r.ReadAt(p, s.off); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  @?		s.off = (x$7 = s.off, x$8 = (new $Int64(0, n)), new $Int64(x$7.$high + x$8.$high, x$7.$low + x$8.$low));
  @R		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: SectionReader.ptr.prototype.Read }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.err = err; $f.max = max; $f.n = n; $f.p = p; $f.s = s; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.x$8 = x$8; $f.$s = $s; $f.$r = $r; return $f;
	};
	SectionReader.prototype.Read = function(p) { return this.$val.Read(p); };
SectionReaderio.EOFio.SectionReader (*io.SectionReader).Seek ��	SectionReader.ptr.prototype.Seek = function(offset, whence) {
		var _1, offset, s, whence, x$2, x$3, x$4, x$5, x$6;
		s = this;
    		_1 = whence;
    		if (_1 === (0)) {
  AO			offset = (x$2 = s.base, new $Int64(offset.$high + x$2.$high, offset.$low + x$2.$low));
    		} else if (_1 === (1)) {
  Au			offset = (x$3 = s.off, new $Int64(offset.$high + x$3.$high, offset.$low + x$3.$low));
    		} else if (_1 === (2)) {
  A�			offset = (x$4 = s.limit, new $Int64(offset.$high + x$4.$high, offset.$low + x$4.$low));
    		} else {
  A(			return [new $Int64(0, 0), errWhence];
    		}
    		if ((x$5 = s.base, (offset.$high < x$5.$high || (offset.$high === x$5.$high && offset.$low < x$5.$low)))) {
  A�			return [new $Int64(0, 0), errOffset];
    		}
  A�		s.off = offset;
  A�		return [(x$6 = s.base, new $Int64(offset.$high - x$6.$high, offset.$low - x$6.$low)), $ifaceNil];
    	};
	SectionReader.prototype.Seek = function(offset, whence) { return this.$val.Seek(offset, whence); };
SectionReaderio.SectionReaderio.errOffsetio.errWhence (*io.SectionReader).ReadAt �	SectionReader.ptr.prototype.ReadAt = function(p, off) {
		var $24r, _r, _r$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tuple, _tuple$1, err, max, n, off, p, s, x$2, x$3, x$4, x$5, x$6, x$7, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; max = $f.max; n = $f.n; off = $f.off; p = $f.p; s = $f.s; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; x$6 = $f.x$6; x$7 = $f.x$7; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		s = this;
    		if ((off.$high < 0 || (off.$high === 0 && off.$low < 0)) || (x$2 = (x$3 = s.limit, x$4 = s.base, new $Int64(x$3.$high - x$4.$high, x$3.$low - x$4.$low)), (off.$high > x$2.$high || (off.$high === x$2.$high && off.$low >= x$2.$low)))) {
    			_tmp = 0;
			_tmp$1 = $pkg.EOF;
			n = _tmp;
			err = _tmp$1;
			$s = -1; return [n, err];
    		}
  B�		off = (x$5 = s.base, new $Int64(off.$high + x$5.$high, off.$low + x$5.$low));
  B�		max = (x$6 = s.limit, new $Int64(x$6.$high - off.$high, x$6.$low - off.$low));
  B�		/* */ if ((x$7 = (new $Int64(0, p.$length)), (x$7.$high > max.$high || (x$7.$high === max.$high && x$7.$low > max.$low)))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((x$7 = (new $Int64(0, p.$length)), (x$7.$high > max.$high || (x$7.$high === max.$high && x$7.$low > max.$low)))) { */ case 1:
  B�			p = $subslice(p, 0, $flatten64(max));
  B�			_r = s.r.ReadAt(p, off); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			n = _tuple[0];
			err = _tuple[1];
    			if ($interfaceIsEqual(err, $ifaceNil)) {
  C				err = $pkg.EOF;
    			}
    			_tmp$2 = n;
			_tmp$3 = err;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		/* } */ case 2:
    		_r$1 = s.r.ReadAt(p, off); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_tuple$1 = _r$1;
		n = _tuple$1[0];
		err = _tuple$1[1];
		$24r = [n, err];
		$s = 5; case 5: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: SectionReader.ptr.prototype.ReadAt }; } $f.$24r = $24r; $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.max = max; $f.n = n; $f.off = off; $f.p = p; $f.s = s; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.x$6 = x$6; $f.x$7 = x$7; $f.$s = $s; $f.$r = $r; return $f;
	};
	SectionReader.prototype.ReadAt = function(p, off) { return this.$val.ReadAt(p, off); };
SectionReaderio.EOFio.SectionReader (*io.SectionReader).Size �	SectionReader.ptr.prototype.Size = function() {
		var s, x$2, x$3;
		s = this;
  C�		return (x$2 = s.limit, x$3 = s.base, new $Int64(x$2.$high - x$3.$high, x$2.$low - x$3.$low));
    	};
	SectionReader.prototype.Size = function() { return this.$val.Size(); };
SectionReaderio.SectionReader io.TeeReaderio	TeeReader 	TeeReaderw	TeeReader = function(r, w) {
		var r, w;
  E&		return new teeReader.ptr(r, w);
    	};
	$pkg.TeeReader = TeeReader;
	TeeReaderio.TeeReaderio.teeReader (*io.teeReader).Read �z	teeReader.ptr.prototype.Read = function(p) {
		var _r, _r$1, _tmp, _tmp$1, _tuple, _tuple$1, err, err$1, n, n$1, p, t, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; err$1 = $f.err$1; n = $f.n; n$1 = $f.n$1; p = $f.p; t = $f.t; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		t = this;
  E�		_r = t.r.Read(p); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
  E�		/* */ if (n > 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (n > 0) { */ case 2:
  E�			_r$1 = t.w.Write($subslice(p, 0, n)); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple$1 = _r$1;
			n$1 = _tuple$1[0];
			err$1 = _tuple$1[1];
    			if (!($interfaceIsEqual(err$1, $ifaceNil))) {
    				_tmp = n$1;
				_tmp$1 = err$1;
				n = _tmp;
				err = _tmp$1;
				$s = -1; return [n, err];
    			}
    		/* } */ case 3:
  F		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: teeReader.ptr.prototype.Read }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.err$1 = err$1; $f.n = n; $f.n$1 = n$1; $f.p = p; $f.t = t; $f.$s = $s; $f.$r = $r; return $f;
	};
	teeReader.prototype.Read = function(p) { return this.$val.Read(p); };
	teeReaderio.teeReader (io.discard).Write ��	discard.ptr.prototype.Write = function(p) {
		var p;
  Ga		return [p.$length, $ifaceNil];
    	};
	discard.prototype.Write = function(p) { return this.$val.Write(p); };
discard
io.discard (io.discard).WriteString ��	discard.ptr.prototype.WriteString = function(s) {
		var s;
  G�		return [s.length, $ifaceNil];
    	};
	discard.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
discard
io.discard (io.discard).ReadFrom �	discard.ptr.prototype.ReadFrom = function(r) {
		var _r, _r$1, _tmp, _tmp$1, _tuple, bufp, err, n, r, readSize, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; bufp = $f.bufp; err = $f.err; n = $f.n; r = $f.r; readSize = $f.readSize; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = new $Int64(0, 0);
		err = $ifaceNil;
  Hc		_r = blackHolePool.Get(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		bufp = $assertType(_r, ptrType);
  H�		readSize = 0;
  H�		/* while (true) { */ case 2:
  H�			_r$1 = r.Read(bufp.$get()); /* */ $s = 4; case 4: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_tuple = _r$1;
			readSize = _tuple[0];
			err = _tuple[1];
  H�			n = (x$2 = (new $Int64(0, readSize)), new $Int64(n.$high + x$2.$high, n.$low + x$2.$low));
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  H�				blackHolePool.Put(bufp);
    				if ($interfaceIsEqual(err, $pkg.EOF)) {
    					_tmp = n;
					_tmp$1 = $ifaceNil;
					n = _tmp;
					err = _tmp$1;
					$s = -1; return [n, err];
    				}
  I0				$s = -1; return [n, err];
    			}
    		$s = 2; continue;
		case 3:
    		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: discard.ptr.prototype.ReadFrom }; } $f._r = _r; $f._r$1 = _r$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.bufp = bufp; $f.err = err; $f.n = n; $f.r = r; $f.readSize = readSize; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	discard.prototype.ReadFrom = function(r) { return this.$val.ReadFrom(r); };
discardio.EOFio.blackHolePool
io.discard
io.ptrType io.NopCloserio	NopCloser 	NopCloser��	NopCloser = function(r) {
		var r, x$2;
  I�		return (x$2 = new nopCloser.ptr(r), new x$2.constructor.elem(x$2));
    	};
	$pkg.NopCloser = NopCloser;
	NopCloserio.NopCloserio.nopCloser (io.nopCloser).Close ��	nopCloser.ptr.prototype.Close = function() {
  J"		return $ifaceNil;
    	};
	nopCloser.prototype.Close = function() { return this.$val.Close(); };
	nopCloserio.nopCloser 
io.ReadAllioReadAll ReadAll��	ReadAll = function(r) {
		var _r, _tuple, b, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tuple = $f._tuple; b = $f.b; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  K[		b = $makeSlice(sliceType$1, 0, 512);
  Kv		/* while (true) { */ case 1:
    			if (b.$length === b.$capacity) {
  K�				b = $subslice($append(b, 0), 0, b.$length);
    			}
  K�			_r = r.Read($subslice(b, b.$length, b.$capacity)); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			n = _tuple[0];
			err = _tuple[1];
  L			b = $subslice(b, 0, (b.$length + n >> 0));
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
    				if ($interfaceIsEqual(err, $pkg.EOF)) {
  LJ					err = $ifaceNil;
    				}
  L\				$s = -1; return [b, err];
    			}
    		$s = 1; continue;
		case 2:
    		$s = -1; return [sliceType$1.nil, $ifaceNil];
		/* */ } return; } if ($f === undefined) { $f = { $blk: ReadAll }; } $f._r = _r; $f._tuple = _tuple; $f.b = b; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.ReadAll = ReadAll;
ReadAllio.EOF
io.ReadAllio.sliceType$1 (io.eofReader).Read ��	eofReader.ptr.prototype.Read = function(param) {
		var param;
  Mg		return [0, $pkg.EOF];
    	};
	eofReader.prototype.Read = function(param) { return this.$val.Read(param); };
	eofReaderio.EOFio.eofReader (*io.multiReader).Read �	�	multiReader.ptr.prototype.Read = function(p) {
		var _r, _tmp, _tmp$1, _tuple, _tuple$1, err, mr, n, ok, p, r, x$2, x$3, x$4, x$5, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; err = $f.err; mr = $f.mr; n = $f.n; ok = $f.ok; p = $f.p; r = $f.r; x$2 = $f.x$2; x$3 = $f.x$3; x$4 = $f.x$4; x$5 = $f.x$5; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		mr = this;
  M�		/* while (true) { */ case 1:
			/* if (!(mr.readers.$length > 0)) { break; } */ if(!(mr.readers.$length > 0)) { $s = 2; continue; }
    			if (mr.readers.$length === 1) {
  N_				_tuple = $assertType((x$2 = mr.readers, (0 >= x$2.$length ? ($throwRuntimeError("index out of range"), undefined) : x$2.$array[x$2.$offset + 0])), ptrType$3, true);
				r = _tuple[0];
				ok = _tuple[1];
    				if (ok) {
  N�					mr.readers = r.readers;
  N�					/* continue; */ $s = 1; continue;
    				}
    			}
  N�			_r = (x$3 = mr.readers, (0 >= x$3.$length ? ($throwRuntimeError("index out of range"), undefined) : x$3.$array[x$3.$offset + 0])).Read(p); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple$1 = _r;
			n = _tuple$1[0];
			err = _tuple$1[1];
    			if ($interfaceIsEqual(err, $pkg.EOF)) {
  OV				(x$5 = mr.readers, (0 >= x$5.$length ? ($throwRuntimeError("index out of range"), undefined) : x$5.$array[x$5.$offset + 0] = (x$4 = new eofReader.ptr(), new x$4.constructor.elem(x$4))));
  O�				mr.readers = $subslice(mr.readers, 1);
    			}
    			if (n > 0 || !($interfaceIsEqual(err, $pkg.EOF))) {
    				if ($interfaceIsEqual(err, $pkg.EOF) && mr.readers.$length > 0) {
  P%					err = $ifaceNil;
    				}
  P7				$s = -1; return [n, err];
    			}
    		$s = 1; continue;
		case 2:
    		_tmp = 0;
		_tmp$1 = $pkg.EOF;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: multiReader.ptr.prototype.Read }; } $f._r = _r; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.err = err; $f.mr = mr; $f.n = n; $f.ok = ok; $f.p = p; $f.r = r; $f.x$2 = x$2; $f.x$3 = x$3; $f.x$4 = x$4; $f.x$5 = x$5; $f.$s = $s; $f.$r = $r; return $f;
	};
	multiReader.prototype.Read = function(p) { return this.$val.Read(p); };
multiReaderio.EOFio.eofReaderio.multiReaderio.ptrType$3 io.MultiReaderioMultiReader MultiReader��	MultiReader = function(readers) {
		var r, readers;
  Q�		r = $makeSlice(sliceType$2, readers.$length);
  Q�		$copySlice(r, readers);
  Q�		return new multiReader.ptr(r);
    	};
	$pkg.MultiReader = MultiReader;
MultiReaderio.MultiReader	io.Readerio.multiReaderio.sliceType$2 (*io.multiWriter).Write ��	multiWriter.ptr.prototype.Write = function(p) {
		var _i, _r, _ref, _tmp, _tmp$1, _tuple, err, n, p, t, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; err = $f.err; n = $f.n; p = $f.p; t = $f.t; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		t = this;
  RQ		_ref = t.writers;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			w = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  Rq			_r = w.Write(p); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tuple = _r;
			n = _tuple[0];
			err = _tuple[1];
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  R�				$s = -1; return [n, err];
    			}
    			if (!((n === p.$length))) {
  R�				err = $pkg.ErrShortWrite;
  R�				$s = -1; return [n, err];
    			}
    			_i++;
		$s = 1; continue;
		case 2:
    		_tmp = p.$length;
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: multiWriter.ptr.prototype.Write }; } $f._i = _i; $f._r = _r; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f.err = err; $f.n = n; $f.p = p; $f.t = t; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	multiWriter.prototype.Write = function(p) { return this.$val.Write(p); };
multiWriterio.ErrShortWriteio.multiWriter (*io.multiWriter).WriteString �
	multiWriter.ptr.prototype.WriteString = function(s) {
		var _i, _r, _r$1, _ref, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, err, n, ok, p, s, sw, t, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _i = $f._i; _r = $f._r; _r$1 = $f._r$1; _ref = $f._ref; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; err = $f.err; n = $f.n; ok = $f.ok; p = $f.p; s = $f.s; sw = $f.sw; t = $f.t; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		t = this;
  Sg		p = sliceType$1.nil;
  S�		_ref = t.writers;
		_i = 0;
		/* while (true) { */ case 1:
			/* if (!(_i < _ref.$length)) { break; } */ if(!(_i < _ref.$length)) { $s = 2; continue; }
			w = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  S�			_tuple = $assertType(w, StringWriter, true);
			sw = _tuple[0];
			ok = _tuple[1];
  S�			/* */ if (ok) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (ok) { */ case 3:
  S�				_r = sw.WriteString(s); /* */ $s = 6; case 6: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple$1 = _r;
				n = _tuple$1[0];
				err = _tuple$1[1];
    				$s = 5; continue;
			/* } else { */ case 4:
    				if (p === sliceType$1.nil) {
  T					p = (new sliceType$1($stringToBytes(s)));
    				}
  T.				_r$1 = w.Write(p); /* */ $s = 7; case 7: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$2 = _r$1;
				n = _tuple$2[0];
				err = _tuple$2[1];
    			/* } */ case 5:
    			if (!($interfaceIsEqual(err, $ifaceNil))) {
  T[				$s = -1; return [n, err];
    			}
    			if (!((n === s.length))) {
  T|				err = $pkg.ErrShortWrite;
  T�				$s = -1; return [n, err];
    			}
    			_i++;
		$s = 1; continue;
		case 2:
    		_tmp = s.length;
		_tmp$1 = $ifaceNil;
		n = _tmp;
		err = _tmp$1;
		$s = -1; return [n, err];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: multiWriter.ptr.prototype.WriteString }; } $f._i = _i; $f._r = _r; $f._r$1 = _r$1; $f._ref = _ref; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.err = err; $f.n = n; $f.ok = ok; $f.p = p; $f.s = s; $f.sw = sw; $f.t = t; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	multiWriter.prototype.WriteString = function(s) { return this.$val.WriteString(s); };
multiWriterio.ErrShortWriteio.StringWriterio.multiWriterio.sliceType$1 io.MultiWriterioMultiWriter MultiWriter��	MultiWriter = function(writers) {
		var _i, _ref, _tuple, allWriters, mw, ok, w, writers;
  V0		allWriters = $makeSlice(sliceType$3, 0, writers.$length);
  V_		_ref = writers;
		_i = 0;
		while (true) {
			if (!(_i < _ref.$length)) { break; }
			w = ((_i < 0 || _i >= _ref.$length) ? ($throwRuntimeError("index out of range"), undefined) : _ref.$array[_ref.$offset + _i]);
  V�			_tuple = $assertType(w, ptrType$1, true);
			mw = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  V�				allWriters = $appendSlice(allWriters, mw.writers);
    			} else {
  V�				allWriters = $append(allWriters, w);
    			}
    			_i++;
		}
  W		return new multiWriter.ptr(allWriters);
    	};
	$pkg.MultiWriter = MultiWriter;
MultiWriterio.MultiWriter	io.Writerio.multiWriterio.ptrType$1io.sliceType$3 (*io.onceError).Store �	onceError.ptr.prototype.Store = function(err) {
		var a, err, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; a = $f.a; err = $f.err; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		a = this;
  Y			$r = a.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Y		$deferred.push([$methodVal(a.Mutex, "Unlock"), []]);
  Y%		/* */ if (!($interfaceIsEqual(a.err, $ifaceNil))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!($interfaceIsEqual(a.err, $ifaceNil))) { */ case 2:
  Y9			$s = 4; case 4: return;
    		/* } */ case 3:
  YD		a.err = err;
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: onceError.ptr.prototype.Store }; } $f.a = a; $f.err = err; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	onceError.prototype.Store = function(err) { return this.$val.Store(err); };
	onceErrorio.onceError (*io.onceError).Load �<	onceError.ptr.prototype.Load = function() {
		var $24r, a, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; a = $f.a; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		a = this;
  Yv		$r = a.Mutex.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Y�		$deferred.push([$methodVal(a.Mutex, "Unlock"), []]);
  Y�		$24r = a.err;
		$s = 2; case 2: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: onceError.ptr.prototype.Load }; } $f.$24r = $24r; $f.a = a; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	onceError.prototype.Load = function() { return this.$val.Load(); };
	onceErrorio.onceError (*io.pipe).Read �1	pipe.ptr.prototype.Read = function(b) {
		var $24r, $24r$1, _r, _r$1, _r$2, _selection, _selection$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, bw, err, n, nr, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _selection = $f._selection; _selection$1 = $f._selection$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; b = $f.b; bw = $f.bw; err = $f.err; n = $f.n; nr = $f.nr; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		p = this;
  [{		_selection = $select([[p.done], []]);
		/* */ if (_selection[0] === 0) { $s = 1; continue; }
		/* */ if (_selection[0] === 1) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_selection[0] === 0) { */ case 1:
    			_tmp = 0;
			_r = p.readCloseError(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tmp$1 = _r;
			n = _tmp;
			err = _tmp$1;
			$24r = [n, err];
			$s = 5; case 5: return $24r;
    		/* } else if (_selection[0] === 1) { */ case 2:
    		/* } */ case 3:
  [�		_r$1 = $select([[p.wrCh], [p.done]]); /* */ $s = 6; case 6: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_selection$1 = _r$1;
		/* */ if (_selection$1[0] === 0) { $s = 7; continue; }
		/* */ if (_selection$1[0] === 1) { $s = 8; continue; }
		/* */ $s = 9; continue;
    		/* if (_selection$1[0] === 0) { */ case 7:
  [�			bw = _selection$1[1][0];
  [�			nr = $copySlice(b, bw);
    			$r = $send(p.rdCh, nr); /* */ $s = 10; case 10: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    			_tmp$2 = nr;
			_tmp$3 = $ifaceNil;
			n = _tmp$2;
			err = _tmp$3;
			$s = -1; return [n, err];
    		/* } else if (_selection$1[0] === 1) { */ case 8:
    			_tmp$4 = 0;
			_r$2 = p.readCloseError(); /* */ $s = 11; case 11: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
			_tmp$5 = _r$2;
			n = _tmp$4;
			err = _tmp$5;
			$24r$1 = [n, err];
			$s = 12; case 12: return $24r$1;
    		/* } */ case 9:
    		$s = -1; return [n, err];
		/* */ } return; } if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.Read }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._selection = _selection; $f._selection$1 = _selection$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.b = b; $f.bw = bw; $f.err = err; $f.n = n; $f.nr = nr; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	pipe.prototype.Read = function(b) { return this.$val.Read(b); };
pipeio.pipeio.readCloseError~ (*io.pipe).readCloseError �`	pipe.ptr.prototype.readCloseError = function() {
		var _r, _r$1, p, rerr, werr, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; p = $f.p; rerr = $f.rerr; werr = $f.werr; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  \s		_r = p.rerr.Load(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		rerr = _r;
  \�		_r$1 = p.werr.Load(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		werr = _r$1;
    		if ($interfaceIsEqual(rerr, $ifaceNil) && !($interfaceIsEqual(werr, $ifaceNil))) {
  \�			$s = -1; return werr;
    		}
  \�		$s = -1; return $pkg.ErrClosedPipe;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.readCloseError }; } $f._r = _r; $f._r$1 = _r$1; $f.p = p; $f.rerr = rerr; $f.werr = werr; $f.$s = $s; $f.$r = $r; return $f;
	};
	pipe.prototype.readCloseError = function() { return this.$val.readCloseError(); };
pipereadCloseError~io.ErrClosedPipeio.pipe (*io.pipe).CloseRead ��	pipe.ptr.prototype.CloseRead = function(err) {
		var err, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; err = $f.err; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = [p];
		p[0] = this;
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  ]*			err = $pkg.ErrClosedPipe;
    		}
  ]B		$r = p[0].rerr.Store(err); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ]U		$r = p[0].once.Do((function(p) { return function() {
  ]h			$close(p[0].done);
    		}; })(p)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ]z		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.CloseRead }; } $f.err = err; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	pipe.prototype.CloseRead = function(err) { return this.$val.CloseRead(err); };
pipeio.ErrClosedPipeio.pipe (*io.pipe).Write ��	pipe.ptr.prototype.Write = function(b) {
		var $24r, $24r$1, $24r$2, _r, _r$1, _r$2, _r$3, _selection, _selection$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, b, err, n, nw, once, p, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; $24r$1 = $f.$24r$1; $24r$2 = $f.$24r$2; _r = $f._r; _r$1 = $f._r$1; _r$2 = $f._r$2; _r$3 = $f._r$3; _selection = $f._selection; _selection$1 = $f._selection$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; b = $f.b; err = $f.err; n = $f.n; nw = $f.nw; once = $f.once; p = $f.p; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $deferred.index = $curGoroutine.deferStack.length; $curGoroutine.deferStack.push($deferred);
		n = 0;
		err = $ifaceNil;
		p = this;
  ]�		_selection = $select([[p.done], []]);
		/* */ if (_selection[0] === 0) { $s = 1; continue; }
		/* */ if (_selection[0] === 1) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (_selection[0] === 0) { */ case 1:
    			_tmp = 0;
			_r = p.writeCloseError(); /* */ $s = 4; case 4: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_tmp$1 = _r;
			n = _tmp;
			err = _tmp$1;
			$24r = [n, err];
			$s = 5; case 5: return $24r;
    		/* } else if (_selection[0] === 1) { */ case 2:
  ^			$r = p.wrMu.Lock(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  ^			$deferred.push([$methodVal(p.wrMu, "Unlock"), []]);
    		/* } */ case 3:
  ^1		once = true;
		/* while (true) { */ case 7:
			/* if (!(once || b.$length > 0)) { break; } */ if(!(once || b.$length > 0)) { $s = 8; continue; }
  ^d			_r$1 = $select([[p.wrCh, b], [p.done]]); /* */ $s = 9; case 9: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
			_selection$1 = _r$1;
			/* */ if (_selection$1[0] === 0) { $s = 10; continue; }
			/* */ if (_selection$1[0] === 1) { $s = 11; continue; }
			/* */ $s = 12; continue;
    			/* if (_selection$1[0] === 0) { */ case 10:
  ^�				_r$2 = $recv(p.rdCh); /* */ $s = 13; case 13: if($c) { $c = false; _r$2 = _r$2.$blk(); } if (_r$2 && _r$2.$blk !== undefined) { break s; }
				nw = _r$2[0];
  ^�				b = $subslice(b, nw);
  ^�				n = n + (nw) >> 0;
    				$s = 12; continue;
    			/* } else if (_selection$1[0] === 1) { */ case 11:
    				_tmp$2 = n;
				_r$3 = p.writeCloseError(); /* */ $s = 14; case 14: if($c) { $c = false; _r$3 = _r$3.$blk(); } if (_r$3 && _r$3.$blk !== undefined) { break s; }
				_tmp$3 = _r$3;
				n = _tmp$2;
				err = _tmp$3;
				$24r$1 = [n, err];
				$s = 15; case 15: return $24r$1;
    			/* } */ case 12:
  ^S			once = false;
		$s = 7; continue;
		case 8:
    		_tmp$4 = n;
		_tmp$5 = $ifaceNil;
		n = _tmp$4;
		err = _tmp$5;
		$24r$2 = [n, err];
		$s = 16; case 16: return $24r$2;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if (!$curGoroutine.asleep) { return  [n, err]; } if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.Write }; } $f.$24r = $24r; $f.$24r$1 = $24r$1; $f.$24r$2 = $24r$2; $f._r = _r; $f._r$1 = _r$1; $f._r$2 = _r$2; $f._r$3 = _r$3; $f._selection = _selection; $f._selection$1 = _selection$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f.b = b; $f.err = err; $f.n = n; $f.nw = nw; $f.once = once; $f.p = p; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	pipe.prototype.Write = function(b) { return this.$val.Write(b); };
pipeio.pipeio.writeCloseError~ (*io.pipe).writeCloseError �d	pipe.ptr.prototype.writeCloseError = function() {
		var _r, _r$1, p, rerr, werr, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; p = $f.p; rerr = $f.rerr; werr = $f.werr; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  _!		_r = p.werr.Load(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		werr = _r;
  _;		_r$1 = p.rerr.Load(); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		rerr = _r$1;
    		if ($interfaceIsEqual(werr, $ifaceNil) && !($interfaceIsEqual(rerr, $ifaceNil))) {
  _q			$s = -1; return rerr;
    		}
  _�		$s = -1; return $pkg.ErrClosedPipe;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.writeCloseError }; } $f._r = _r; $f._r$1 = _r$1; $f.p = p; $f.rerr = rerr; $f.werr = werr; $f.$s = $s; $f.$r = $r; return $f;
	};
	pipe.prototype.writeCloseError = function() { return this.$val.writeCloseError(); };
pipewriteCloseError~io.ErrClosedPipeio.pipe (*io.pipe).CloseWrite ��	pipe.ptr.prototype.CloseWrite = function(err) {
		var err, p, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; err = $f.err; p = $f.p; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = [p];
		p[0] = this;
    		if ($interfaceIsEqual(err, $ifaceNil)) {
  _�			err = $pkg.EOF;
    		}
  _�		$r = p[0].werr.Store(err); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  _�		$r = p[0].once.Do((function(p) { return function() {
  `			$close(p[0].done);
    		}; })(p)); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  `		$s = -1; return $ifaceNil;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: pipe.ptr.prototype.CloseWrite }; } $f.err = err; $f.p = p; $f.$s = $s; $f.$r = $r; return $f;
	};
	pipe.prototype.CloseWrite = function(err) { return this.$val.CloseWrite(err); };
pipeio.EOFio.pipe (*io.PipeReader).Read ��	PipeReader.ptr.prototype.Read = function(data) {
		var $24r, _r, _tuple, data, err, n, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; data = $f.data; err = $f.err; n = $f.n; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		r = this;
    		_r = r.p.Read(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeReader.ptr.prototype.Read }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.data = data; $f.err = err; $f.n = n; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeReader.prototype.Read = function(data) { return this.$val.Read(data); };

PipeReaderio.PipeReader (*io.PipeReader).Close ��	PipeReader.ptr.prototype.Close = function() {
		var $24r, _r, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  bb		_r = r.CloseWithError($ifaceNil); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeReader.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeReader.prototype.Close = function() { return this.$val.Close(); };

PipeReaderio.PipeReader (*io.PipeReader).CloseWithError �)	PipeReader.ptr.prototype.CloseWithError = function(err) {
		var $24r, _r, err, r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; err = $f.err; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  c�		_r = r.p.CloseRead(err); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeReader.ptr.prototype.CloseWithError }; } $f.$24r = $24r; $f._r = _r; $f.err = err; $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeReader.prototype.CloseWithError = function(err) { return this.$val.CloseWithError(err); };

PipeReaderio.PipeReader (*io.PipeWriter).Write ��	PipeWriter.ptr.prototype.Write = function(data) {
		var $24r, _r, _tuple, data, err, n, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; data = $f.data; err = $f.err; n = $f.n; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		n = 0;
		err = $ifaceNil;
		w = this;
    		_r = w.p.Write(data); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple = _r;
		n = _tuple[0];
		err = _tuple[1];
		$24r = [n, err];
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeWriter.ptr.prototype.Write }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f.data = data; $f.err = err; $f.n = n; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeWriter.prototype.Write = function(data) { return this.$val.Write(data); };

PipeWriterio.PipeWriter (*io.PipeWriter).Close ��	PipeWriter.ptr.prototype.Close = function() {
		var $24r, _r, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  f		_r = w.CloseWithError($ifaceNil); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeWriter.ptr.prototype.Close }; } $f.$24r = $24r; $f._r = _r; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeWriter.prototype.Close = function() { return this.$val.Close(); };

PipeWriterio.PipeWriter (*io.PipeWriter).CloseWithError �*	PipeWriter.ptr.prototype.CloseWithError = function(err) {
		var $24r, _r, err, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; err = $f.err; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		w = this;
  gS		_r = w.p.CloseWrite(err); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: PipeWriter.ptr.prototype.CloseWithError }; } $f.$24r = $24r; $f._r = _r; $f.err = err; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
	PipeWriter.prototype.CloseWithError = function(err) { return this.$val.CloseWithError(err); };

PipeWriterio.PipeWriter io.PipeioPipe Pipe��	Pipe = function() {
		var p;
  j�		p = new pipe.ptr(new sync.Mutex.ptr(0, 0), new $Chan(sliceType$1, 0), new $Chan($Int, 0), new sync.Once.ptr(0, new sync.Mutex.ptr(0, 0)), new $Chan(structType, 0), new onceError.ptr(new sync.Mutex.ptr(0, 0), $ifaceNil), new onceError.ptr(new sync.Mutex.ptr(0, 0), $ifaceNil));
  j�		return [new PipeReader.ptr(p), new PipeWriter.ptr(p)];
    	};
	$pkg.Pipe = Pipe;
Pipe	io.Pipeio.PipeReaderio.PipeWriterio.onceErrorio.pipeio.sliceType$1io.structType
sync.Mutex	sync.Once �{"Base":27401,"Files":[{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/io/io.go","Base":1,"Size":19570,"Lines":[0,55,109,159,160,219,294,361,428,431,507,580,628,639,640,649,659,667,669,670,693,701,761,817,862,864,865,937,980,1026,1027,1095,1152,1153,1233,1281,1282,1352,1412,1460,1531,1594,1666,1689,1717,1718,1776,1835,1887,1888,1951,2014,2069,2147,2148,2209,2212,2284,2351,2428,2499,2557,2560,2624,2686,2754,2814,2877,2942,3006,3024,3027,3092,3160,3221,3247,3250,3310,3372,3437,3498,3501,3539,3563,3598,3600,3601,3663,3666,3733,3801,3867,3930,3989,3992,4030,4054,4090,4092,4093,4155,4158,4218,4279,4303,4318,4320,4321,4382,4385,4447,4483,4537,4594,4632,4692,4722,4725,4791,4866,4938,4962,5009,5011,5012,5089,5117,5125,5133,5135,5136,5213,5241,5249,5257,5259,5260,5339,5368,5376,5384,5386,5387,5476,5509,5517,5525,5533,5535,5536,5612,5640,5648,5656,5658,5659,5737,5749,5781,5789,5797,5805,5807,5808,5886,5915,5923,5931,5933,5934,6022,6055,6063,6071,6079,6081,6082,6145,6148,6198,6249,6319,6322,6373,6401,6442,6444,6445,6505,6508,6575,6642,6711,6714,6763,6789,6829,6831,6832,6897,6900,6966,7025,7079,7082,7144,7209,7242,7245,7314,7388,7464,7514,7517,7585,7653,7656,7721,7783,7799,7802,7864,7886,7889,7927,7953,8001,8003,8004,8070,8073,8141,8224,8290,8355,8358,8420,8483,8499,8502,8571,8616,8619,8657,8683,8732,8734,8735,8798,8801,8863,8928,8992,8995,9056,9116,9176,9204,9230,9232,9233,9304,9330,9333,9404,9441,9511,9532,9561,9573,9593,9595,9596,9660,9688,9713,9715,9716,9779,9782,9841,9907,9938,9966,10008,10010,10011,10082,10108,10111,10182,10219,10289,10310,10339,10351,10371,10373,10374,10442,10472,10514,10516,10517,10606,10683,10729,10787,10824,10851,10854,10881,10883,10884,10959,11039,11087,11144,11185,11266,11316,11395,11464,11485,11512,11515,11544,11557,11585,11595,11598,11613,11625,11658,11683,11686,11694,11696,11697,11755,11835,11883,11946,11984,12039,12123,12180,12218,12220,12221,12282,12340,12376,12430,12433,12480,12517,12590,12637,12656,12672,12675,12707,12751,12763,12766,12774,12776,12777,12836,12897,12962,12965,13022,13085,13143,13146,13191,13247,13305,13362,13425,13459,13461,13462,13531,13596,13667,13702,13705,13772,13817,13898,13932,13970,13973,14007,14009,14010,14077,14113,14194,14257,14294,14329,14354,14357,14432,14469,14495,14498,14515,14535,14597,14613,14626,14638,14658,14663,14667,14694,14697,14704,14730,14744,14778,14804,14815,14834,14860,14866,14871,14895,14913,14926,14936,14941,14958,14982,14992,14997,15001,15018,15036,15049,15054,15063,15067,15070,15091,15093,15094,15144,15181,15235,15310,15311,15368,15420,15470,15540,15568,15599,15632,15634,15635,15695,15710,15726,15729,15755,15770,15773,15795,15812,15820,15822,15823,15885,15945,16016,16061,16063,16064,16128,16158,16186,16202,16215,16228,16241,16243,16244,16304,16327,16343,16346,16396,16411,16414,16445,16464,16472,16474,16475,16526,16577,16578,16650,16667,16677,16699,16716,16735,16754,16772,16787,16807,16810,16832,16854,16857,16873,16902,16904,16905,16978,17017,17033,17036,17051,17099,17114,17144,17162,17175,17179,17195,17198,17225,17227,17228,17278,17343,17344,17413,17471,17534,17588,17656,17700,17725,17727,17728,17752,17762,17772,17774,17775,17831,17853,17865,17911,17928,17932,17935,17943,17945,17946,18002,18029,18060,18061,18083,18084,18147,18195,18224,18225,18271,18291,18293,18294,18346,18366,18368,18369,18400,18427,18453,18465,18469,18471,18472,18529,18568,18583,18590,18622,18645,18663,18690,18709,18727,18732,18742,18746,18749,18751,18752,18821,18847,18885,18906,18908,18909,18933,18941,18943,18944,18990,18991,19067,19143,19217,19248,19289,19316,19323,19347,19399,19428,19432,19469,19488,19506,19525,19539,19544,19561,19565,19568],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/io/multi.go","Base":19572,"Size":2746,"Lines":[0,55,109,159,160,171,172,196,197,242,257,259,260,286,304,306,307,366,393,457,485,535,562,575,580,584,617,635,689,735,787,818,822,849,891,941,955,960,970,974,977,992,994,995,1063,1130,1204,1269,1314,1349,1367,1391,1393,1394,1420,1438,1440,1441,1500,1531,1553,1571,1581,1585,1604,1627,1637,1641,1644,1664,1666,1667,1708,1709,1774,1825,1856,1894,1924,1935,1952,1970,1975,1998,2002,2020,2030,2034,2053,2076,2086,2090,2093,2113,2115,2116,2186,2243,2246,2309,2378,2446,2491,2538,2567,2605,2655,2666,2704,2708,2711,2744],"Infos":null},{"Name":"/tmp/gopherjs_playground.WkHY9CoDpa/goroot/src/io/pipe.go","Base":22319,"Size":5081,"Lines":[0,55,109,159,160,215,252,253,264,265,274,284,292,294,295,357,381,413,431,433,434,473,483,501,520,529,532,545,547,582,592,610,624,626,627,709,773,774,851,870,918,936,951,952,993,1013,1029,1045,1047,1048,1099,1109,1125,1156,1166,1169,1170,1180,1202,1222,1237,1254,1270,1301,1304,1306,1307,1347,1370,1426,1440,1443,1465,1467,1468,1512,1529,1551,1554,1573,1610,1622,1624,1625,1677,1687,1703,1735,1745,1761,1785,1788,1789,1843,1854,1874,1892,1906,1917,1934,1967,1971,1974,1989,1991,1992,2033,2056,2112,2126,2129,2151,2153,2154,2199,2216,2228,2231,2250,2287,2299,2301,2302,2346,2371,2380,2382,2383,2431,2487,2526,2585,2627,2687,2710,2712,2713,2766,2829,2866,2896,2898,2899,2954,3014,3017,3084,3111,3166,3193,3195,3196,3241,3266,3275,3277,3278,3328,3394,3451,3507,3559,3620,3644,3646,3647,3701,3756,3793,3823,3825,3826,3889,3954,3979,3982,4049,4076,4131,4159,4161,4162,4208,4265,4302,4305,4360,4428,4499,4559,4580,4647,4699,4702,4782,4851,4903,4944,4957,4984,5008,5037,5040,5079],"Infos":null}]}
 