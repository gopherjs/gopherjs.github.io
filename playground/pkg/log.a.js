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
GoLinkname�� Implementation�� 	Reference��   �����loglogfmt#github.com/gopherjs/gopherjs/nosyncioosruntimetime�<i �� LoggervformatmuMutex#github.com/gopherjs/gopherjs/nosyncprefixflagoutWriteriobuf	SetOutputlwformatHeadertTimetimefilelineOutput	calldepthsPrintfPrintPrintlnFatalFatalfFatallnPanicPanicfPaniclnFlagsSetFlagsPrefix	SetPrefixlockedLockmUnlockWritepnerrwallextlocLocationStringGoStringFormatlayoutAppendFormatbnsecsecunixSecaddSecdsetLoc	stripMonosetMonomonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetlookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixokNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutclogDefaultLUTCLdate	LlongfileLmicroseconds
Lmsgprefix
Lshortfile	LstdFlagsLtimeNewnosync   F    #   ,F  0    :F  
 >    KF  O F    C @C C C C �@  NU  u   >   E   Jx   X{    � y~     �    �    �    �    �    �    �    �    �     T } \ f� hx   j f� X� w� � �   � f� � �    � f� 
 �  � f� �  � f� �  � f� �  � f� 
 �  � f� �  � f� �  � f� 
 �  � f� �  � f�    � f� E   � f�    � f� >   N f�   xC  C C  F  Jx > E  � F  � �      �F  �    �F  
 �    �F  � F       �F  �    �F  
 �    �F  � F  E  F  hx  F  >  F    x �   uuT � � ��   � ��  U  � �� � � T � �~�~ �
   �   ��  ��������� �~ �~ �~������T �6 � w�    � w�    � w� �    � w� �� �  �  � w�    � w�    � w�    � w� �   � w� ��   � w�   � w� �   � w�    � w� ��     � w� ��     � w� ��     � w�     � w�   
 � w�  � � �
 � w�  � �� � � w�    � w�   � � w�    � w�   � � w�  � � � w�  � � � � w�    � w�    � w�    � w�    � w�    � w� ��  �  � w� ��  �  � w� � � �  �  � w� �  � �� � �  � w�   � � w�   � � w� ��  �  � w�   � � w�  � � � w�    � w�    � w�    � w�    � w�   �   � w� ��    � w�   �   � w� ��    � w�   �   � w� ��    � w�   �   � w� ��    � w�     � w� ��  �  � w� ��  �  �~� �~��~ �   ��   ��   �   �   �   ��  �������T � � f�   � � f�    � f� � � � � � �   � f�    � f�     � f� � � � �  T  � ��   T  � ��   T 	 � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �� ��  �  � �� ��  � ~ �   �   �   T � ~ �   �   �    �   T �  � ��� �1�9�@�D�H�L�P���������������������������\���N�� �UU N�~~ ������y�������2 fmt	fmt = $packages["fmt"];
��    		$r = fmt.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  nosync<	nosync = $packages["github.com/gopherjs/gopherjs/nosync"];
��    		$r = nosync.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  io	io = $packages["io"];
��    		$r = io.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  os	os = $packages["os"];
��    		$r = os.$init(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  runtime!	runtime = $packages["runtime"];
��    		$r = runtime.$init(); /* */ $s = 5; case 5: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  time	time = $packages["time"];
��    		$r = time.$init(); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Logger��	Logger = $pkg.Logger = $newType(0, $kindStruct, "log.Logger", true, "log", true, function(mu_, prefix_, flag_, out_, buf_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new nosync.Mutex.ptr(false);
			this.prefix = "";
			this.flag = 0;
			this.out = $ifaceNil;
			this.buf = sliceType.nil;
			return;
		}
		this.mu = mu_;
		this.prefix = prefix_;
		this.flag = flag_;
		this.out = out_;
		this.buf = buf_;
	});
��	ptrType$1.methods = [{prop: "SetOutput", name: "SetOutput", pkg: "", typ: $funcType([io.Writer], [], false)}, {prop: "formatHeader", name: "formatHeader", pkg: "log", typ: $funcType([ptrType, time.Time, $String, $Int], [], false)}, {prop: "Output", name: "Output", pkg: "", typ: $funcType([$Int, $String], [$error], false)}, {prop: "Printf", name: "Printf", pkg: "", typ: $funcType([$String, sliceType$1], [], true)}, {prop: "Print", name: "Print", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Println", name: "Println", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Fatal", name: "Fatal", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Fatalf", name: "Fatalf", pkg: "", typ: $funcType([$String, sliceType$1], [], true)}, {prop: "Fatalln", name: "Fatalln", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Panic", name: "Panic", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Panicf", name: "Panicf", pkg: "", typ: $funcType([$String, sliceType$1], [], true)}, {prop: "Panicln", name: "Panicln", pkg: "", typ: $funcType([sliceType$1], [], true)}, {prop: "Flags", name: "Flags", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "SetFlags", name: "SetFlags", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Prefix", name: "Prefix", pkg: "", typ: $funcType([], [$String], false)}, {prop: "SetPrefix", name: "SetPrefix", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Writer", name: "Writer", pkg: "", typ: $funcType([], [io.Writer], false)}];
��	Logger.init("log", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: nosync.Mutex, tag: ""}, {prop: "prefix", name: "prefix", embedded: false, exported: false, typ: $String, tag: ""}, {prop: "flag", name: "flag", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "out", name: "out", embedded: false, exported: false, typ: io.Writer, tag: ""}, {prop: "buf", name: "buf", embedded: false, exported: false, typ: sliceType, tag: ""}]);
Logger)github.com/gopherjs/gopherjs/nosync.Mutex	io.Writer
log.Loggerlog.ptrTypelog.ptrType$1log.sliceTypelog.sliceType$1	time.Time  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  	arrayType%	arrayType = $arrayType($Uint8, 20);
	arrayType  ptrType 	ptrType = $ptrType(sliceType);
ptrTypelog.sliceType  sliceType$1,	sliceType$1 = $sliceType($emptyInterface);
sliceType$1  	ptrType$1	ptrType$1 = $ptrType(Logger);
	ptrType$1
log.Logger  stdstd  $  I		std = New(os.Stderr, "", 3);
log.Newlog.std	os.Stderr log.NewlogNew New��	New = function(out, prefix, flag) {
		var flag, out, prefix;
  z		return new Logger.ptr(new nosync.Mutex.ptr(false), prefix, flag, out, sliceType.nil);
    	};
	$pkg.New = New;
New)github.com/gopherjs/gopherjs/nosync.Mutex
log.Loggerlog.Newlog.sliceType (*log.Logger).SetOutput ��	Logger.ptr.prototype.SetOutput = function(w) {
		var l, w, $deferred;
		/* */ var $err = null; try { $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  		l.mu.Lock();
  #		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
  8		l.out = w;
    		/* */ } catch(err) { $err = err; } finally { $callDeferred($deferred, $err); }
	};
	Logger.prototype.SetOutput = function(w) { return this.$val.SetOutput(w); };
Logger
log.Logger log.DefaultlogDefault DefaultM	Default = function() {
  �		return std;
    	};
	$pkg.Default = Default;
Defaultlog.Defaultlog.std log.itoalogitoa itoa��	itoa = function(buf, i, wid) {
		var _q, b, bp, buf, i, q, wid;
  �		b = arrayType.zero();
  �		bp = 19;
  �		while (true) {
			if (!(i >= 10 || wid > 1)) { break; }
  �			wid = wid - (1) >> 0;
  �			q = (_q = i / 10, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero"));
  �			((bp < 0 || bp >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[bp] = ((((48 + i >> 0) - ($imul(q, 10)) >> 0) << 24 >>> 24)));
  			bp = bp - (1) >> 0;
  			i = q;
    		}
  #		((bp < 0 || bp >= b.length) ? ($throwRuntimeError("index out of range"), undefined) : b[bp] = (((48 + i >> 0) << 24 >>> 24)));
  :		buf.$set($appendSlice(buf.$get(), $subslice(new sliceType(b), bp)));
    	};
itoalog.arrayTypelog.itoalog.sliceType (*log.Logger).formatHeader ��	Logger.ptr.prototype.formatHeader = function(buf, t, file, line) {
		var _q, _r, _r$1, _tuple, _tuple$1, buf, day, file, hour, i, l, line, min, month, sec, short$1, t, year, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _q = $f._q; _r = $f._r; _r$1 = $f._r$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; buf = $f.buf; day = $f.day; file = $f.file; hour = $f.hour; i = $f.i; l = $f.l; line = $f.line; min = $f.min; month = $f.month; sec = $f.sec; short$1 = $f.short$1; t = $f.t; year = $f.year; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
    		if ((l.flag & 64) === 0) {
  			buf.$set($appendSlice(buf.$get(), l.prefix));
    		}
  (		/* */ if (!(((l.flag & 7) === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!(((l.flag & 7) === 0))) { */ case 1:
    			if (!(((l.flag & 32) === 0))) {
  p				time.Time.copy(t, $clone(t, time.Time).UTC());
    			}
  �			/* */ if (!(((l.flag & 1) === 0))) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!(((l.flag & 1) === 0))) { */ case 3:
  �				_r = $clone(t, time.Time).Date(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				_tuple = _r;
				year = _tuple[0];
				month = _tuple[1];
				day = _tuple[2];
  �				itoa(buf, year, 4);
  �				buf.$set($append(buf.$get(), 47));
  �				itoa(buf, ((month >> 0)), 2);
  
				buf.$set($append(buf.$get(), 47));
  &				itoa(buf, day, 2);
  ;				buf.$set($append(buf.$get(), 32));
    			/* } */ case 4:
  Z			/* */ if (!(((l.flag & 6) === 0))) { $s = 6; continue; }
			/* */ $s = 7; continue;
    			/* if (!(((l.flag & 6) === 0))) { */ case 6:
  �				_r$1 = $clone(t, time.Time).Clock(); /* */ $s = 8; case 8: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
				_tuple$1 = _r$1;
				hour = _tuple$1[0];
				min = _tuple$1[1];
				sec = _tuple$1[2];
  �				itoa(buf, hour, 2);
  �				buf.$set($append(buf.$get(), 58));
  �				itoa(buf, min, 2);
  �				buf.$set($append(buf.$get(), 58));
  				itoa(buf, sec, 2);
    				if (!(((l.flag & 4) === 0))) {
  >					buf.$set($append(buf.$get(), 46));
  [					itoa(buf, (_q = $clone(t, time.Time).Nanosecond() / 1000, (_q === _q && _q !== 1/0 && _q !== -1/0) ? _q >> 0 : $throwRuntimeError("integer divide by zero")), 6);
    				}
  �				buf.$set($append(buf.$get(), 32));
    			/* } */ case 7:
    		/* } */ case 2:
    		if (!(((l.flag & 24) === 0))) {
    			if (!(((l.flag & 16) === 0))) {
  �				short$1 = file;
  				i = file.length - 1 >> 0;
				while (true) {
					if (!(i > 0)) { break; }
    					if (file.charCodeAt(i) === 47) {
  A						short$1 = $substring(file, (i + 1 >> 0));
  Y						break;
    					}
  					i = i - (1) >> 0;
    				}
  m				file = short$1;
    			}
  �			buf.$set($appendSlice(buf.$get(), file));
  �			buf.$set($append(buf.$get(), 58));
  �			itoa(buf, line, -1);
  �			buf.$set($appendSlice(buf.$get(), ": "));
    		}
    		if (!(((l.flag & 64) === 0))) {
  			buf.$set($appendSlice(buf.$get(), l.prefix));
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.formatHeader }; } $f._q = _q; $f._r = _r; $f._r$1 = _r$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.buf = buf; $f.day = day; $f.file = file; $f.hour = hour; $f.i = i; $f.l = l; $f.line = line; $f.min = min; $f.month = month; $f.sec = sec; $f.short$1 = short$1; $f.t = t; $f.year = year; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.formatHeader = function(buf, t, file, line) { return this.$val.formatHeader(buf, t, file, line); };
LoggerformatHeader~
log.Loggerlog.itoa	time.Time (*log.Logger).Output �	Q	Logger.ptr.prototype.Output = function(calldepth, s) {
		var $24r, _r, _tuple, _tuple$1, calldepth, err, file, l, line, now, ok, s, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; calldepth = $f.calldepth; err = $f.err; file = $f.file; l = $f.l; line = $f.line; now = $f.now; ok = $f.ok; s = $f.s; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  �		now = $clone(time.Now(), time.Time);
  		file = "";
  		line = 0;
  !		l.mu.Lock();
  .		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
    		if (!(((l.flag & 24) === 0))) {
  �			l.mu.Unlock();
  �			ok = false;
  �			_tuple = runtime.Caller(calldepth);
			file = _tuple[1];
			line = _tuple[2];
			ok = _tuple[3];
    			if (!ok) {
  				file = "???";
  				line = 0;
    			}
  $			l.mu.Lock();
    		}
  4		l.buf = $subslice(l.buf, 0, 0);
  G		$r = l.formatHeader((l.$ptr_buf || (l.$ptr_buf = new ptrType(function() { return this.$target.buf; }, function($v) { this.$target.buf = $v; }, l))), $clone(now, time.Time), file, line); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  p		l.buf = $appendSlice(l.buf, s);
    		if ((s.length === 0) || !((s.charCodeAt((s.length - 1 >> 0)) === 10))) {
  �			l.buf = $append(l.buf, 10);
    		}
  �		_r = l.out.Write(l.buf); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_tuple$1 = _r;
		err = _tuple$1[1];
  �		$24r = err;
		$s = 3; case 3: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Output }; } $f.$24r = $24r; $f._r = _r; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f.calldepth = calldepth; $f.err = err; $f.file = file; $f.l = l; $f.line = line; $f.now = now; $f.ok = ok; $f.s = s; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Logger.prototype.Output = function(calldepth, s) { return this.$val.Output(calldepth, s); };
Logger
log.Loggerlog.formatHeader~log.ptrTypelog.sliceTyperuntime.Callertime.Now	time.Time (*log.Logger).Printf ��	Logger.ptr.prototype.Printf = function(format, v) {
		var _arg, _r, _r$1, format, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; format = $f.format; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  �		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Printf }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Printf = function(format, v) { return this.$val.Printf(format, v); };
Loggerfmt.Sprintf
log.Logger (*log.Logger).Print ��	Logger.ptr.prototype.Print = function(v) {
		var _arg, _r, _r$1, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  `		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Print }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Print = function(v) { return this.$val.Print(v); };
Logger
fmt.Sprint
log.Logger (*log.Logger).Println ��	Logger.ptr.prototype.Println = function(v) {
		var _arg, _r, _r$1, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Println }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Println = function(v) { return this.$val.Println(v); };
Loggerfmt.Sprintln
log.Logger (*log.Logger).Fatal �	Logger.ptr.prototype.Fatal = function(v) {
		var _arg, _r, _r$1, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  �		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  �		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Fatal }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Fatal = function(v) { return this.$val.Fatal(v); };
Logger
fmt.Sprint
log.Loggeros.Exit (*log.Logger).Fatalf �m	Logger.ptr.prototype.Fatalf = function(format, v) {
		var _arg, _r, _r$1, format, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; format = $f.format; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  ]		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  �		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Fatalf }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Fatalf = function(format, v) { return this.$val.Fatalf(format, v); };
Loggerfmt.Sprintf
log.Loggeros.Exit (*log.Logger).Fatalln �"	Logger.ptr.prototype.Fatalln = function(v) {
		var _arg, _r, _r$1, l, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; l = $f.l; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = l.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  ,		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Fatalln }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Fatalln = function(v) { return this.$val.Fatalln(v); };
Loggerfmt.Sprintln
log.Loggeros.Exit (*log.Logger).Panic ��	Logger.ptr.prototype.Panic = function(v) {
		var _r, _r$1, l, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; l = $f.l; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  �		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  �		_r$1 = l.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  �		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Panic }; } $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Panic = function(v) { return this.$val.Panic(v); };
Logger
fmt.Sprint
log.Logger (*log.Logger).Panicf ��	Logger.ptr.prototype.Panicf = function(format, v) {
		var _r, _r$1, format, l, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; format = $f.format; l = $f.l; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  ]		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  }		_r$1 = l.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  �		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Panicf }; } $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.l = l; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Panicf = function(format, v) { return this.$val.Panicf(format, v); };
Loggerfmt.Sprintf
log.Logger (*log.Logger).Panicln ��	Logger.ptr.prototype.Panicln = function(v) {
		var _r, _r$1, l, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; l = $f.l; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		l = this;
  		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  '		_r$1 = l.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  7		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Panicln }; } $f._r = _r; $f._r$1 = _r$1; $f.l = l; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Logger.prototype.Panicln = function(v) { return this.$val.Panicln(v); };
Loggerfmt.Sprintln
log.Logger (*log.Logger).Flags ��	Logger.ptr.prototype.Flags = function() {
		var $24r, l, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; l = $f.l; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  �		l.mu.Lock();
  �		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
  �		$24r = l.flag;
		$s = 1; case 1: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return 0; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Flags }; } $f.$24r = $24r; $f.l = l; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Logger.prototype.Flags = function() { return this.$val.Flags(); };
Logger
log.Logger (*log.Logger).SetFlags ��	Logger.ptr.prototype.SetFlags = function(flag) {
		var flag, l, $deferred;
		/* */ var $err = null; try { $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
   }		l.mu.Lock();
   �		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
   �		l.flag = flag;
    		/* */ } catch(err) { $err = err; } finally { $callDeferred($deferred, $err); }
	};
	Logger.prototype.SetFlags = function(flag) { return this.$val.SetFlags(flag); };
Logger
log.Logger (*log.Logger).Prefix ��	Logger.ptr.prototype.Prefix = function() {
		var $24r, l, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; l = $f.l; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  !		l.mu.Lock();
  !		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
  !*		$24r = l.prefix;
		$s = 1; case 1: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return ""; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Prefix }; } $f.$24r = $24r; $f.l = l; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Logger.prototype.Prefix = function() { return this.$val.Prefix(); };
Logger
log.Logger (*log.Logger).SetPrefix ��	Logger.ptr.prototype.SetPrefix = function(prefix) {
		var l, prefix, $deferred;
		/* */ var $err = null; try { $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  !�		l.mu.Lock();
  !�		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
  !�		l.prefix = prefix;
    		/* */ } catch(err) { $err = err; } finally { $callDeferred($deferred, $err); }
	};
	Logger.prototype.SetPrefix = function(prefix) { return this.$val.SetPrefix(prefix); };
Logger
log.Logger (*log.Logger).Writer ��	Logger.ptr.prototype.Writer = function() {
		var $24r, l, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; l = $f.l; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		l = this;
  "5		l.mu.Lock();
  "B		$deferred.push([$methodVal(l.mu, "Unlock"), []]);
  "W		$24r = l.out;
		$s = 1; case 1: return $24r;
    		/* */ } return; } } catch(err) { $err = err; $s = -1; return $ifaceNil; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Logger.ptr.prototype.Writer }; } $f.$24r = $24r; $f.l = l; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Logger.prototype.Writer = function() { return this.$val.Writer(); };
Logger
log.Logger log.SetOutputlog	SetOutput 	SetOutput�d	SetOutput = function(w) {
		var w, $deferred;
		/* */ var $err = null; try { $deferred = []; $curGoroutine.deferStack.push($deferred);
  "�		std.mu.Lock();
  "�		$deferred.push([$methodVal(std.mu, "Unlock"), []]);
  "�		std.out = w;
    		/* */ } catch(err) { $err = err; } finally { $callDeferred($deferred, $err); }
	};
	$pkg.SetOutput = SetOutput;
	SetOutputlog.SetOutputlog.std 	log.FlagslogFlags Flags�L	Flags = function() {
		var $24r, _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  #z		_r = std.Flags(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Flags }; } $f.$24r = $24r; $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Flags = Flags;
Flags	log.Flagslog.std log.SetFlagslogSetFlags SetFlagsh	SetFlags = function(flag) {
		var flag;
  $		std.SetFlags(flag);
    	};
	$pkg.SetFlags = SetFlags;
SetFlagslog.SetFlagslog.std 
log.PrefixlogPrefix Prefix�Q	Prefix = function() {
		var $24r, _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  $		_r = std.Prefix(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Prefix }; } $f.$24r = $24r; $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Prefix = Prefix;
Prefix
log.Prefixlog.std log.SetPrefixlog	SetPrefix 	SetPrefixr	SetPrefix = function(prefix) {
		var prefix;
  $�		std.SetPrefix(prefix);
    	};
	$pkg.SetPrefix = SetPrefix;
	SetPrefixlog.SetPrefixlog.std 
log.WriterlogWriter Writer�Q	Writer = function() {
		var $24r, _r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  %j		_r = std.Writer(); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Writer }; } $f.$24r = $24r; $f._r = _r; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Writer = Writer;
Writer
log.Writerlog.std 	log.PrintlogPrint Print�	Print = function(v) {
		var _arg, _r, _r$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  &?		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Print }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Print = Print;
Print
fmt.Sprint	log.Printlog.std 
log.PrintflogPrintf Printf�^	Printf = function(format, v) {
		var _arg, _r, _r$1, format, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; format = $f.format; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  ' 		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Printf }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Printf = Printf;
Printffmt.Sprintf
log.Printflog.std log.PrintlnlogPrintln Println�#	Println = function(v) {
		var _arg, _r, _r$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  '�		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Println }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Println = Println;
Printlnfmt.Sprintlnlog.Printlnlog.std 	log.FatallogFatal Fatal��	Fatal = function(v) {
		var _arg, _r, _r$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  (G		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  (h		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Fatal }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fatal = Fatal;
Fatal
fmt.Sprint	log.Fatallog.stdos.Exit 
log.FatalflogFatalf Fatalf��	Fatalf = function(format, v) {
		var _arg, _r, _r$1, format, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; format = $f.format; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  (�		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  )		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Fatalf }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fatalf = Fatalf;
Fatalffmt.Sprintf
log.Fatalflog.stdos.Exit log.FatallnlogFatalln Fatalln��	Fatalln = function(v) {
		var _arg, _r, _r$1, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _arg = $f._arg; _r = $f._r; _r$1 = $f._r$1; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  )�		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_arg = _r;
		_r$1 = std.Output(2, _arg); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  )�		$r = os.Exit(1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Fatalln }; } $f._arg = _arg; $f._r = _r; $f._r$1 = _r$1; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Fatalln = Fatalln;
Fatallnfmt.Sprintlnlog.Fatallnlog.stdos.Exit 	log.PaniclogPanic Panic�(	Panic = function(v) {
		var _r, _r$1, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  * 		_r = fmt.Sprint(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  *7		_r$1 = std.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  *I		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Panic }; } $f._r = _r; $f._r$1 = _r$1; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Panic = Panic;
Panic
fmt.Sprint	log.Paniclog.std 
log.PanicflogPanicf Panicf�m	Panicf = function(format, v) {
		var _r, _r$1, format, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; format = $f.format; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  *�		_r = fmt.Sprintf(format, v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  *�		_r$1 = std.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  *�		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Panicf }; } $f._r = _r; $f._r$1 = _r$1; $f.format = format; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Panicf = Panicf;
Panicffmt.Sprintf
log.Panicflog.std log.PaniclnlogPanicln Panicln�2	Panicln = function(v) {
		var _r, _r$1, s, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; _r$1 = $f._r$1; s = $f.s; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  +m		_r = fmt.Sprintln(v); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		s = _r;
  +�		_r$1 = std.Output(2, s); /* */ $s = 2; case 2: if($c) { $c = false; _r$1 = _r$1.$blk(); } if (_r$1 && _r$1.$blk !== undefined) { break s; }
		_r$1;
  +�		$panic(new $String(s));
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Panicln }; } $f._r = _r; $f._r$1 = _r$1; $f.s = s; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Panicln = Panicln;
Paniclnfmt.Sprintlnlog.Paniclnlog.std 
log.OutputlogOutput Output��	Output = function(calldepth, s) {
		var $24r, _r, calldepth, s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; calldepth = $f.calldepth; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  -�		_r = std.Output(calldepth + 1 >> 0, s); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		$24r = _r;
		$s = 2; case 2: return $24r;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Output }; } $f.$24r = $24r; $f._r = _r; $f.calldepth = calldepth; $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
	$pkg.Output = Output;
Output
log.Outputlog.std �{"Base":11711,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/log/log.go","Base":1,"Size":11709,"Lines":[0,55,109,159,160,239,314,390,463,532,559,631,694,764,829,841,842,851,858,864,870,881,889,897,899,900,986,1040,1098,1160,1222,1293,1310,1370,1401,1467,1521,1529,1607,1683,1774,1855,1959,2059,2164,2237,2239,2240,2312,2385,2456,2529,2550,2625,2711,2744,2789,2842,2844,2845,2900,2950,3020,3080,3133,3192,3246,3248,3249,3306,3348,3361,3382,3393,3395,3396,3436,3437,3520,3558,3559,3651,3692,3731,3747,3765,3791,3799,3813,3844,3851,3859,3862,3873,3896,3928,3930,3931,3992,4053,4116,4183,4242,4323,4352,4387,4390,4436,4460,4475,4479,4504,4536,4558,4586,4614,4642,4663,4691,4695,4736,4767,4789,4817,4838,4866,4887,4921,4950,4987,4992,5020,5024,5027,5068,5098,5115,5155,5179,5203,5214,5220,5225,5241,5245,5276,5303,5325,5356,5359,5388,5423,5426,5428,5429,5500,5568,5635,5700,5770,5793,5850,5888,5905,5919,5932,5953,5994,6056,6072,6086,6134,6145,6161,6173,6177,6191,6194,6213,6254,6283,6324,6354,6357,6387,6399,6401,6402,6451,6505,6564,6604,6606,6607,6655,6708,6783,6784,6834,6889,6968,6969,7039,7082,7113,7125,7127,7128,7200,7259,7299,7311,7313,7314,7388,7433,7466,7478,7480,7481,7548,7591,7614,7630,7640,7642,7643,7712,7771,7803,7819,7829,7831,7832,7903,7948,7973,7989,7999,8001,8002,8052,8098,8129,8142,8163,8178,8180,8181,8231,8277,8315,8328,8349,8364,8366,8367,8419,8454,8467,8488,8505,8507,8508,8560,8604,8617,8638,8657,8659,8660,8717,8755,8768,8789,8803,8805,8806,8872,8902,8917,8940,8953,8955,8956,9015,9061,9080,9100,9102,9103,9162,9208,9234,9254,9256,9257,9318,9341,9362,9364,9365,9426,9458,9481,9483,9484,9550,9576,9597,9599,9600,9649,9650,9705,9758,9789,9822,9824,9825,9881,9935,9982,10024,10026,10027,10084,10139,10172,10207,10209,10210,10278,10309,10342,10354,10356,10357,10427,10474,10516,10528,10530,10531,10603,10636,10671,10683,10685,10686,10751,10782,10805,10823,10833,10835,10836,10903,10950,10982,11000,11010,11012,11013,11082,11115,11140,11158,11168,11170,11171,11242,11310,11377,11439,11502,11576,11605,11650,11707],"Infos":null}]}
 