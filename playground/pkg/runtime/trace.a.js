����Archive�� 

ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames�� 	BuildTime��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   ��Time��   �A1��runtime/tracetracecontextfmtioruntimesyncsync/atomic�
�i�� ctxContextcontextcategorymessageformatargspctxtaskTypetaskTaskid
regionTypeEndrRegionwWriteriotfnDeadlinedeadlineTimetimeokDoneErrValuekeyWritepnerrwallextlocLocationnsecsecunixSecaddSecdsetLoc	stripMonosetMonommonoAfteruBeforeEqualIsZeroabslocabsnameoffsetDateyearmonthMonthdayYearDayWeekdayISOWeekweekClockhourminHourMinuteSecond
NanosecondYearDayAddDurationSubAddDateyearsmonthsdaysdatefullydayUTCLocalInZoneUnix	UnixMilli	UnixMicroUnixNanoMarshalBinaryUnmarshalBinarydata	GobEncode	GobDecodeMarshalJSONUnmarshalJSONMarshalTextUnmarshalTextIsDSTTruncateRoundStringGoStringFormatlayoutAppendFormatbzonetx	zoneTransextend
cacheStartcacheEnd	cacheZonegetllookupstartendisDSTlookupFirstZonefirstZoneUsed
lookupNameunixNanosecondsMicrosecondsMillisecondsSecondsMinutesHourswhenindexisstdisutctrace	IsEnabledLogLogfNewTaskStartStartRegionStop
WithRegionF      F  '    F  '  & -8  E KF  2' 7 ' @N   J
   M   ^ nT a X \q   gnF  e~   nF  ' M  � F     J
  KT � X q�     F  ' M s�   �� �  v  � �  �   � �    � �   T �n  � �� � � T � ���� �
   �   ��  ��������� �� �� ��������T �6 � q�    � q�    � q�    � q� �   � q� ��   � q�   � q� �   � q�    � q� ��     � q� ��     � q� ��     � q�     � q�   
 � q�  � � �
 � q�  � �� � � q�    � q�   � � q�    � q�   � � q�  � � � q�  � � � � q�    � q�    � q�    � q�    � q�    � q� ��  �  � q� ��  �  � q� � � �  �  � q� �  � �� � �  � q�   � � q�   � � q� ��  �  � q�   � � q�  � � � q�    � q�    � q�    � q�    � q�   �   � q� ��    � q�   �   � q� ��    � q�   �   � q� ��    � q�   �   � q� ��    � q�     � q� ��  �  � q� ��  �  � q�    � q�    � q� �    � q� �� �  �  ���	 ���	�	� �   ��	   ��	   �   �   �   ��	  �������T �	 � ��
   �
 � ��
    � ��
 � � � � � �   � ��
    � ��
     � ��
 � � � �  T  � ��   T  � ��   T 	 � ��    � ��    � ��    � ��    � ��    � ��    � ��    � �� ��  �  � �� ��  � � �   �   �   T � � �   �   �    �   T �  � 
� �
��0^S�a�n�}E��� �nn g��� ����
����������& EE=$packages["context"];a    $r=E.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  FF=$packages["fmt"];a    $r=F.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  AA=$packages["io"];a    $r=A.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["runtime"];a    $r=B.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CC=$packages["sync"];a    $r=C.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  DD=$packages["sync/atomic"];a    $r=D.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  J��J=$pkg.traceContextKey=$newType(0,$kindStruct,"trace.traceContextKey",true,"runtime/trace",false,function(){this.$val=this;if(arguments.length===0){return;}});J.init("",[]);traceContextKeyruntime/trace.traceContextKey  M��M=$pkg.Task=$newType(0,$kindStruct,"trace.Task",true,"runtime/trace",true,function(id_){this.$val=this;if(arguments.length===0){this.id=new $Uint64(0,0);return;}this.id=id_;});GAG.methods=[{prop:"End",name:"End",pkg:"",typ:$funcType([],[],false)}];aM.init("runtime/trace",[{prop:"id",name:"id",embedded:false,exported:false,typ:$Uint64,tag:""}]);Taskruntime/trace.AGruntime/trace.Task  U��U=$pkg.Region=$newType(0,$kindStruct,"trace.Region",true,"runtime/trace",true,function(id_,regionType_){this.$val=this;if(arguments.length===0){this.id=new $Uint64(0,0);this.regionType="";return;}this.id=id_;this.regionType=regionType_;});GAI.methods=[{prop:"End",name:"End",pkg:"",typ:$funcType([],[],false)}];��U.init("runtime/trace",[{prop:"id",name:"id",embedded:false,exported:false,typ:$Uint64,tag:""},{prop:"regionType",name:"regionType",embedded:false,exported:false,typ:$String,tag:""}]);Regionruntime/trace.AIruntime/trace.Region  AB��AB=$structType("runtime/trace",[{prop:"Mutex",name:"Mutex",embedded:true,exported:true,typ:C.Mutex,tag:""},{prop:"enabled",name:"enabled",embedded:false,exported:false,typ:$Int32,tag:""}]);AB
sync.Mutex  AEAE=$sliceType($Uint8);AE  AFAF=$ptrType($Int32);AF  AGAG=$ptrType(M);AGruntime/trace.Task  AHAH=$ptrType($Uint64);AH  AIAI=$ptrType(U);AIruntime/trace.Region  I%I=new AB.ptr(new C.Mutex.ptr(0,0),0);tracingruntime/trace.ABruntime/trace.tracing
sync.Mutex  NAC
lastTaskID  PADbgTask  V
noopRegion    
gN=new $Uint64(0,0);
lastTaskIDruntime/trace.lastTaskID  #  P=new M.ptr(new $Uint64(0,0));bgTaskruntime/trace.Taskruntime/trace.bgTask  &  �V=new U.ptr(new $Uint64(0,0),"");
noopRegionruntime/trace.Regionruntime/trace.noopRegion runtime/trace.Startruntime/traceStart G�OG=function(a){var{a,b,c,d,$s,$deferred,$r,$c}=$restore(this,{a});$s=$s||0;var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$curGoroutine.deferStack.push($deferred);a=[a];  *�$r=I.Mutex.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  *�$deferred.push([$methodVal(I.Mutex,"Unlock"),[]]);  + b=B.StartTrace();  *�if(!($interfaceIsEqual(b,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  +,c=b;$s=4;case 4:return c;    case 3:  +;$go((function(a){return function $b(){var{d,e,f,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:  +Icase 1:  +Rd=B.ReadTrace();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;    if(e===AE.nil){  +�$s=2;continue;    }  +�f=a[0].Write(e);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;    $s=1;continue;case 2:    $s=-1;return;}return;}var $f={$blk:$b,$c:true,$r,d,e,f,$s};return $f;};})(a),[]);  +�D.StoreInt32((I.$ptr_enabled||(I.$ptr_enabled=new AF(function(){return this.$target.enabled;},function($v){this.$target.enabled=$v;},I))),1);  +�d=$ifaceNil;$s=5;case 5:return d;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){var $f={$blk:G,$c:true,$r,a,b,c,d,$s,$deferred};return $f;}}};$pkg.Start=G;Startruntime.ReadTraceruntime.StartTraceruntime/trace.AEruntime/trace.AFruntime/trace.Startruntime/trace.tracingsync/atomic.StoreInt32 runtime/trace.Stopruntime/traceStop H��H=function(){var{$s,$deferred,$r,$c}=$restore(this,{});$s=$s||0;var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$curGoroutine.deferStack.push($deferred);  ,d$r=I.Mutex.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  ,t$deferred.push([$methodVal(I.Mutex,"Unlock"),[]]);  ,�D.StoreInt32((I.$ptr_enabled||(I.$ptr_enabled=new AF(function(){return this.$target.enabled;},function($v){this.$target.enabled=$v;},I))),0);  ,�B.StopTrace();    $s=-1;return;}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){var $f={$blk:H,$c:true,$r,$s,$deferred};return $f;}}};$pkg.Stop=H;Stopruntime.StopTraceruntime/trace.AFruntime/trace.Stopruntime/trace.tracingsync/atomic.StoreInt32 runtime/trace.NewTaskruntime/traceNewTask K��K=function(a,b){var{a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r,$c}=$restore(this,{a,b});$s=$s||0;s:while(true){switch($s){case 0:c=$ifaceNil;d=AG.nil;  ee=L(a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e.id;  �g=O();  �$r=X(g,f,b);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �h=new M.ptr(g);    k=E.WithValue(a,(j=new J.ptr(),new j.constructor.elem(j)),h);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}i=k;l=h;c=i;d=l;m=[c,d];$s=4;case 4:return m;    }return;}var $f={$blk:K,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,$s};return $f;};$pkg.NewTask=K;NewTaskcontext.WithValueruntime/trace.AGruntime/trace.NewTaskruntime/trace.Taskruntime/trace.fromContextruntime/trace.newIDruntime/trace.traceContextKeyruntime/trace.userTaskCreate runtime/trace.fromContextruntime/tracefromContext L��L=function(a){var{a,b,c,d,e,f,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  	d=a.Value((c=new J.ptr(),new c.constructor.elem(c)));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}b=$assertType(d,AG,true);e=b[0];f=b[1];    if(f){  	L$s=-1;return e;    }  	Y$s=-1;return P;    }return;}var $f={$blk:L,$c:true,$r,a,b,c,d,e,f,$s};return $f;};fromContextruntime/trace.AGruntime/trace.bgTaskruntime/trace.fromContextruntime/trace.traceContextKey (*runtime/trace.Task).End �]M.ptr.prototype.End=function(){var{a,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  
N$r=Y(a.id);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}var $f={$blk:M.ptr.prototype.End,$c:true,$r,a,$s};return $f;};M.prototype.End=function(){return this.$val.End();};Taskruntime/trace.Taskruntime/trace.userTaskEnd runtime/trace.newIDruntime/tracenewID O{O=function(){  
�return D.AddUint64((AC||(AC=new AH(function(){return N;},function($v){N=$v;}))),new $Uint64(0,1));    };newIDruntime/trace.AHruntime/trace.lastTaskIDruntime/trace.newIDsync/atomic.AddUint64 runtime/trace.Logruntime/traceLog Q��Q=function(a,b,c){var{a,b,c,d,e,$s,$r,$c}=$restore(this,{a,b,c});$s=$s||0;s:while(true){switch($s){case 0:  d=L(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d.id;  &$r=AA(e,b,c);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}var $f={$blk:Q,$c:true,$r,a,b,c,d,e,$s};return $f;};$pkg.Log=Q;Logruntime/trace.Logruntime/trace.fromContextruntime/trace.userLog runtime/trace.Logfruntime/traceLogf R�FR=function(a,b,c,d){var{a,b,c,d,e,f,g,h,i,j,$s,$r,$c}=$restore(this,{a,b,c,d});$s=$s||0;s:while(true){switch($s){case 0:  �if(W()){$s=1;continue;}$s=2;continue;    case 1:  Te=L(a);$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e.id;  pg=f;h=b;i=F.Sprintf(c,d);$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;$r=AA(g,h,j);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 2:    $s=-1;return;}return;}var $f={$blk:R,$c:true,$r,a,b,c,d,e,f,g,h,i,j,$s};return $f;};$pkg.Logf=R;Logffmt.Sprintfruntime/trace.IsEnabledruntime/trace.Logfruntime/trace.fromContextruntime/trace.userLog runtime/trace.WithRegionruntime/trace
WithRegion S��S=function(a,b,c){var{a,b,c,d,e,$s,$deferred,$r,$c}=$restore(this,{a,b,c});$s=$s||0;var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$curGoroutine.deferStack.push($deferred);  /d=L(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d.id;  J$r=Z(e,new $Uint64(0,0),b);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  w$deferred.push([Z,[e,new $Uint64(0,1),b]]);  �$r=c();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){var $f={$blk:S,$c:true,$r,a,b,c,d,e,$s,$deferred};return $f;}}};$pkg.WithRegion=S;
WithRegionruntime/trace.WithRegionruntime/trace.fromContextruntime/trace.userRegion runtime/trace.StartRegionruntime/traceStartRegion T��T=function(a,b){var{a,b,c,d,$s,$r,$c}=$restore(this,{a,b});$s=$s||0;s:while(true){switch($s){case 0:    if(!W()){  �$s=-1;return V;    }  �c=L(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c.id;  �$r=Z(d,new $Uint64(0,0),b);$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $s=-1;return new U.ptr(d,b);    }return;}var $f={$blk:T,$c:true,$r,a,b,c,d,$s};return $f;};$pkg.StartRegion=T;StartRegionruntime/trace.IsEnabledruntime/trace.Regionruntime/trace.StartRegionruntime/trace.fromContextruntime/trace.noopRegionruntime/trace.userRegion (*runtime/trace.Region).End ��U.ptr.prototype.End=function(){var{a,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;    if(a===V){  5$s=-1;return;    }  @$r=Z(a.id,new $Uint64(0,1),a.regionType);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}var $f={$blk:U.ptr.prototype.End,$c:true,$r,a,$s};return $f;};U.prototype.End=function(){return this.$val.End();};Regionruntime/trace.Regionruntime/trace.noopRegionruntime/trace.userRegion runtime/trace.IsEnabledruntime/trace	IsEnabled W��W=function(){var a;  *a=D.LoadInt32((I.$ptr_enabled||(I.$ptr_enabled=new AF(function(){return this.$target.enabled;},function($v){this.$target.enabled=$v;},I))));  Yreturn a===1;    };$pkg.IsEnabled=W;	IsEnabledruntime/trace.AFruntime/trace.IsEnabledruntime/trace.tracingsync/atomic.LoadInt32 runtime/trace.userTaskCreateruntime/traceuserTaskCreate XcX=function(){$throwRuntimeError("native function not implemented: runtime/trace.userTaskCreate");};userTaskCreateruntime/trace.userTaskCreate runtime/trace.userTaskEndruntime/traceuserTaskEnd Y`Y=function(){$throwRuntimeError("native function not implemented: runtime/trace.userTaskEnd");};userTaskEndruntime/trace.userTaskEnd runtime/trace.userRegionruntime/trace
userRegion Z_Z=function(){$throwRuntimeError("native function not implemented: runtime/trace.userRegion");};
userRegionruntime/trace.userRegion runtime/trace.userLogruntime/traceuserLog AA]AA=function(){$throwRuntimeError("native function not implemented: runtime/trace.userLog");};userLogruntime/trace.userLog ��{"Base":11582,"Files":[{"Name":"/usr/local/go/src/runtime/trace/annotation.go","Base":1,"Size":6358,"Lines":[0,55,109,159,160,174,175,184,195,202,217,229,231,232,262,263,333,383,453,456,523,591,637,640,701,775,840,871,935,979,982,1034,1086,1118,1193,1219,1282,1291,1379,1408,1423,1458,1478,1535,1536,1594,1657,1722,1757,1761,1811,1837,1894,1932,1959,1991,2056,2082,2086,2139,2197,2253,2272,2274,2275,2321,2377,2388,2391,2407,2409,2410,2480,2499,2510,2547,2549,2550,2613,2636,2655,2657,2658,2712,2713,2735,2770,2811,2813,2814,2847,2848,2914,2987,3023,3081,3108,3140,3142,3143,3224,3295,3313,3365,3409,3437,3491,3494,3496,3497,3505,3534,3563,3565,3566,3644,3718,3799,3808,3811,3884,3919,3988,3998,4063,4093,4154,4196,4263,4308,4369,4412,4472,4540,4554,4618,4652,4653,4680,4725,4774,4780,4782,4783,4853,4925,4982,5052,5120,5144,5147,5207,5210,5277,5296,5316,5319,5346,5391,5423,5425,5426,5497,5518,5537,5556,5558,5559,5586,5587,5635,5660,5682,5691,5694,5741,5743,5744,5793,5849,5904,5928,5975,5996,5998,5999,6002,6053,6056,6057,6088,6146,6147,6175,6203,6204,6231,6283,6284,6308],"Infos":null},{"Name":"/usr/local/go/src/runtime/trace/trace.go","Base":6360,"Size":5221,"Lines":[0,55,109,159,160,229,261,264,294,297,370,439,510,575,643,669,672,740,811,882,903,906,937,940,1010,1080,1122,1125,1194,1268,1297,1300,1333,1336,1404,1449,1452,1471,1474,1541,1585,1588,1657,1671,1674,1743,1809,1884,1956,1967,1970,2045,2111,2163,2236,2311,2325,2328,2382,2385,2440,2495,2538,2541,2595,2657,2719,2727,2730,2797,2858,2927,2993,3059,3127,3196,3237,3240,3310,3374,3443,3464,3467,3525,3568,3571,3603,3639,3642,3662,3724,3753,3765,3785,3855,3888,3900,3920,4002,4029,4052,4122,4134,4137,4140,4206,4270,4334,4348,4349,4358,4364,4375,4383,4398,4400,4401,4451,4514,4571,4603,4619,4643,4644,4690,4703,4706,4719,4727,4758,4778,4788,4793,4810,4814,4819,4859,4871,4873,4874,4917,4989,5003,5019,5043,5083,5084,5105,5107,5108,5129,5178,5219],"Infos":null}]}
   گ�� ǋ� < 