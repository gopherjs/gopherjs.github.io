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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �ta��contextcontexterrorsfmtreflectsynctime�w
$$ exports $$
pv0contextcontext	Background   Context  Deadline  deadlineTimetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZoneL getlF  F StringlF    lookuplFsec

name offset
isDST 
start
end
 lookupFirstZonelF   firstZoneUsedlF    lookupNamelFname unix
offset
isDST ok   VStringt@    Formatt@layout    AppendFormatt@b2layout  2 setLoct@locF  
Aftert@u@   Beforet@u@   
Equalt@u@   IsZerot@    abst@   locabst@ name offsetabs Datet@ year
month
MonthStringm�    day Yeart@   
Montht@  � Dayt@   Weekdayt@  WeekdayStringd�     ISOWeekt@ yearweek 
Clockt@ hourminsec Hourt@   Minutet@   Secondt@   Nanosecondt@   YearDayt@   Addt@dDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    @ Subt@u@ � AddDatet@
yearsmonthsdays @ datet@full year
month�dayyday UTCt@  @ 
Localt@  @ Int@locF @ Locationt@  F Zonet@ name offset Unixt@  
 UnixNanot@  
 MarshalBinaryt@  2 6 UnmarshalBinaryt@data2 6 GobEncodet@  2 6 GobDecodet@data2 6 MarshalJSONt@  2 6 UnmarshalJSONt@data2 6 MarshalTextt@  2 6 UnmarshalTextt@data2 6 Truncatet@d� @ 
Roundt@d� @ ok  Done     Err   6 
Value key        CancelFunc      Canceled6: DeadlineExceeded6	TODO   : 	WithCancel parent:ctx:cancel� 	WithDeadline parent:deadline@ : � 	WithTimeout parent:timeout� : � 	WithValue parent:key  val� : ;AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["fmt"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["reflect"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["sync"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["time"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FUF=$pkg.Context=$newType(8,$kindInterface,"context.Context",true,"context",true,null);�4F.init([{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)}]);Context
context.AB
context.AHcontext.Context	time.Time G��G=$pkg.deadlineExceededError=$newType(0,$kindStruct,"context.deadlineExceededError",true,"context",false,function(){this.$val=this;if(arguments.length===0){return;}});��G.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)},{prop:"Timeout",name:"Timeout",pkg:"",typ:$funcType([],[$Bool],false)},{prop:"Temporary",name:"Temporary",pkg:"",typ:$funcType([],[$Bool],false)}];G.init("",[]);deadlineExceededErrorcontext.deadlineExceededError HRH=$pkg.emptyCtx=$newType(4,$kindInt,"context.emptyCtx",true,"context",false,null);�}Z.methods=[{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];emptyCtx
context.AH	context.Zcontext.emptyCtx	time.Time MVM=$pkg.CancelFunc=$newType(4,$kindFunc,"context.CancelFunc",true,"context",true,null);M.init([],[],false);
CancelFunccontext.CancelFunc SXS=$pkg.canceler=$newType(8,$kindInterface,"context.canceler",true,"context",false,null);��S.init([{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}]);canceler
context.AHcontext.canceler T�vT=$pkg.cancelCtx=$newType(0,$kindStruct,"context.cancelCtx",true,"context",false,function(Context_,done_,mu_,children_,err_){this.$val=this;if(arguments.length===0){this.Context=$ifaceNil;this.done=$chanNil;this.mu=new D.Mutex.ptr(0,0);this.children=false;this.err=$ifaceNil;return;}this.Context=Context_;this.done=done_;this.mu=mu_;this.children=children_;this.err=err_;});�%AC.methods=[{prop:"Done",name:"Done",pkg:"",typ:$funcType([],[AH],false)},{prop:"Err",name:"Err",pkg:"",typ:$funcType([],[$error],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}];�/T.init("context",[{prop:"Context",name:"",exported:true,typ:F,tag:""},{prop:"done",name:"done",exported:false,typ:AI,tag:""},{prop:"mu",name:"mu",exported:false,typ:D.Mutex,tag:""},{prop:"children",name:"children",exported:false,typ:AJ,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""}]);	cancelCtx	
context.AB
context.AC
context.AH
context.AI
context.AJcontext.Contextcontext.cancelCtxcontext.canceler
sync.Mutex V��V=$pkg.timerCtx=$newType(0,$kindStruct,"context.timerCtx",true,"context",false,function(cancelCtx_,timer_,deadline_){this.$val=this;if(arguments.length===0){this.cancelCtx=new T.ptr($ifaceNil,$chanNil,new D.Mutex.ptr(0,0),false,$ifaceNil);this.timer=AG.nil;this.deadline=new E.Time.ptr(new $Int64(0,0),0,AA.nil);return;}this.cancelCtx=cancelCtx_;this.timer=timer_;this.deadline=deadline_;});��AD.methods=[{prop:"Deadline",name:"Deadline",pkg:"",typ:$funcType([],[E.Time,$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"cancel",name:"cancel",pkg:"context",typ:$funcType([$Bool,$error],[],false)}];��V.init("context",[{prop:"cancelCtx",name:"",exported:false,typ:T,tag:""},{prop:"timer",name:"timer",exported:false,typ:AG,tag:""},{prop:"deadline",name:"deadline",exported:false,typ:E.Time,tag:""}]);timerCtx
context.AA
context.AD
context.AGcontext.cancelCtxcontext.timerCtx
sync.Mutex	time.Time Y�Y=$pkg.valueCtx=$newType(0,$kindStruct,"context.valueCtx",true,"context",false,function(Context_,key_,val_){this.$val=this;if(arguments.length===0){this.Context=$ifaceNil;this.key=$ifaceNil;this.val=$ifaceNil;return;}this.Context=Context_;this.key=key_;this.val=val_;});��AE.methods=[{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"Value",name:"Value",pkg:"",typ:$funcType([$emptyInterface],[$emptyInterface],false)}];��Y.init("context",[{prop:"Context",name:"",exported:true,typ:F,tag:""},{prop:"key",name:"key",exported:false,typ:$emptyInterface,tag:""},{prop:"val",name:"val",exported:false,typ:$emptyInterface,tag:""}]);valueCtx
context.AEcontext.Contextcontext.valueCtx ZZ=$ptrType(H);Zcontext.emptyCtx AAAA=$ptrType(E.Location);AAtime.Location ABAB=$structType("",[]);AB ACAC=$ptrType(T);ACcontext.cancelCtx ADAD=$ptrType(V);ADcontext.timerCtx AEAE=$ptrType(Y);AEcontext.valueCtx AFAF=$sliceType($emptyInterface);AF AGAG=$ptrType(E.Timer);AG
time.Timer AHAH=$chanType(AB,false,true);AH
context.AB AIAI=$chanType(AB,false,false);AI
context.AB AJAJ=$mapType(S,AB);AJ
context.ABcontext.canceler Canceled DeadlineExceeded I
background Jtodo -    $pkg.Canceled=A.New("context canceled");context.Canceled
errors.New aE    $pkg.DeadlineExceeded=(a=new G.ptr(),new a.constructor.elem(a));DeadlineExceededcontext.DeadlineExceededcontext.deadlineExceededError     I=$newDataPointer(0,Z);	context.Zcontext.backgroundcontext.emptyCtx     J=$newDataPointer(0,Z);	context.Zcontext.todo %(context.deadlineExceededError).Error��G.ptr.prototype.Error=function(){var $ptr;  dreturn"context deadline exceeded";    };G.prototype.Error=function(){return this.$val.Error();};deadlineExceededErrorcontext.deadlineExceededError '(context.deadlineExceededError).Timeout��G.ptr.prototype.Timeout=function(){var $ptr;  �return true;    };G.prototype.Timeout=function(){return this.$val.Timeout();};deadlineExceededErrorcontext.deadlineExceededError )(context.deadlineExceededError).Temporary��G.ptr.prototype.Temporary=function(){var $ptr;  �return true;    };G.prototype.Temporary=function(){return this.$val.Temporary();};deadlineExceededErrorcontext.deadlineExceededError (*context.emptyCtx).Deadline��$ptrType(H).prototype.Deadline=function(){var $ptr,b,c;b=new E.Time.ptr(new $Int64(0,0),0,AA.nil);c=false;  �return[b,c];    };emptyCtx
context.AAcontext.emptyCtxtime.Location	time.Time (*context.emptyCtx).DoneK$ptrType(H).prototype.Done=function(){var $ptr;  return $chanNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).ErrK$ptrType(H).prototype.Err=function(){var $ptr;  Lreturn $ifaceNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).ValueP$ptrType(H).prototype.Value=function(b){var $ptr,b;  �return $ifaceNil;    };emptyCtxcontext.emptyCtx (*context.emptyCtx).String��$ptrType(H).prototype.String=function(){var $ptr,b,c;b=this;    c=b;    if(c===(I)){  �return"context.Background";    }else if(c===(J)){  return"context.TODO";    }  (return"unknown empty Context";    };emptyCtxcontext.backgroundcontext.emptyCtxcontext.todo context.BackgroundK=K=function(){var $ptr;  �return I;    };$pkg.Background=K;
Backgroundcontext.Backgroundcontext.background context.TODOL7L=function(){var $ptr;  %return J;    };$pkg.TODO=L;TODOcontext.TODOcontext.todo context.WithCancelN��N=function(b){var $ptr,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=[c];d=$ifaceNil;e=$throwNilPointerError;   �c[0]=$clone(O(b),T);   �$r=P(b,c[0]);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    f=c[0];g=(function(c){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  !$r=c[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(c);d=f;e=g;$s=-1;return[d,e];    }return;}if($f===undefined){$f={$blk:N};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithCancel=N;
WithCancelcontext.Canceledcontext.WithCancelcontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancel context.newCancelCtxOnO=function(b){var $ptr,b;  !�return new T.ptr(b,new $Chan(AB,0),new D.Mutex.ptr(0,0),false,$ifaceNil);    };newCancelCtx
context.ABcontext.cancelCtxcontext.newCancelCtx
sync.Mutex context.propagateCancelP�	!P=function(b,c){var $ptr,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=[b];c=[c];  "ad=b[0].Done();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}if(d===$chanNil){$s=1;continue;}$s=2;continue;    case 1:  "}$s=-1;return;    case 2:  "�e=Q(b[0]);f=e[0];g=e[1];  "�if(g){$s=4;continue;}$s=5;continue;    case 4:  "�$r=f.mu.Lock();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  "�if(!($interfaceIsEqual(f.err,$ifaceNil))){$s=8;continue;}$s=9;continue;    case 8:  #$r=c[0].cancel(false,f.err);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=10;continue;case 9:    if(f.children===false){  #^f.children={};    }  #�h=c[0];(f.children||$throwRuntimeError("assignment to entry in nil map"))[S.keyFor(h)]={k:h,v:new AB.ptr()};    case 10:  #�$r=f.mu.Unlock();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=6;continue;case 5:  #�$go((function(b,c){return function $b(){var $ptr,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  #�j=b[0].Done();$s=1;case 1:if($c){$c=false;j=j.$blk();}if(j&&j.$blk!==undefined){break s;}k=c[0].Done();$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=$select([[j],[k]]);$s=3;case 3:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}i=l;if(i[0]===0){$s=4;continue;}if(i[0]===1){$s=5;continue;}$s=6;continue;    case 4:  $m=b[0].Err();$s=7;case 7:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;$r=c[0].cancel(false,n);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=6;continue;    case 5:    case 6:    $s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};})(b,c),[]);    case 6:    $s=-1;return;}return;}if($f===undefined){$f={$blk:P};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};propagateCancel
context.ABcontext.cancelercontext.cancel~context.parentCancelCtxcontext.propagateCancel context.parentCancelCtxQ�`Q=function(b){var $ptr,b,c,d,e,f,g;  %Dwhile(true){  %Lc=b;    if($assertType(c,AC,true)[1]){    d=c.$val;  %~return[d,true];    }else if($assertType(c,AD,true)[1]){    e=c.$val;  %�return[e.cancelCtx,true];    }else if($assertType(c,AE,true)[1]){    f=c.$val;  %�b=f.Context;    }else{    g=c;  %�return[AC.nil,false];    }    }    };parentCancelCtx
context.AC
context.AD
context.AEcontext.cancelCtxcontext.parentCancelCtxcontext.timerCtxcontext.valueCtx context.removeChildR��R=function(b,c){var $ptr,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &td=Q(b);e=d[0];f=d[1];    if(!f){  &�$s=-1;return;    }  &�$r=e.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(!(e.children===false)){  &�delete e.children[S.keyFor(c)];    }  &�$r=e.mu.Unlock();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};removeChildcontext.cancelercontext.parentCancelCtxcontext.removeChild (*context.cancelCtx).Done��T.ptr.prototype.Done=function(){var $ptr,b;b=this;  )oreturn b.done;    };T.prototype.Done=function(){return this.$val.Done();};	cancelCtxcontext.cancelCtx (*context.cancelCtx).Err�BT.ptr.prototype.Err=function(){var $ptr,b,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);b=this;  )�$r=b.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  )�$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  )�$s=-1;return b.err;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:T.ptr.prototype.Err};}$f.$ptr=$ptr;$f.b=b;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};T.prototype.Err=function(){return this.$val.Err();};	cancelCtxcontext.cancelCtx (*context.cancelCtx).String�!T.ptr.prototype.String=function(){var $ptr,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  )�c=B.Sprintf("%v.WithCancel",new AF([b.Context]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:T.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.String=function(){return this.$val.String();};	cancelCtx
context.AFcontext.cancelCtxfmt.Sprintf (*context.cancelCtx).cancel�T.ptr.prototype.cancel=function(b,c){var $ptr,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;    if($interfaceIsEqual(c,$ifaceNil)){  +$panic(new $String("context: internal error: missing cancel error"));    }  +=$r=d.mu.Lock();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  +Jif(!($interfaceIsEqual(d.err,$ifaceNil))){$s=2;continue;}$s=3;continue;    case 2:  +^$r=d.mu.Unlock();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  +n$s=-1;return;    case 3:  +�d.err=c;  +�$close(d.done);  +�e=d.children;f=0;g=$keys(e);case 5:if(!(f<g.length)){$s=6;continue;}h=e[g[f]];    if(h===undefined){    f++;$s=5;continue;    }i=h.k;  ,$r=i.cancel(false,c);$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    f++;$s=5;continue;case 6:  ,+d.children=false;  ,=$r=d.mu.Unlock();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  ,Mif(b){$s=9;continue;}$s=10;continue;    case 9:  ,e$r=R(d.Context,d);$s=11;case 11:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 10:    $s=-1;return;}return;}if($f===undefined){$f={$blk:T.ptr.prototype.cancel};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};T.prototype.cancel=function(b,c){return this.$val.cancel(b,c);};	cancelCtxcancel~context.cancelCtxcontext.cancel~context.removeChild context.WithDeadlineU�U=function(b,c){var $ptr,b,c,d,e,f,g,h,i,j,$s,$deferred,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$deferred=$f.$deferred;$r=$f.$r;}var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$deferred.index=$curGoroutine.deferStack.length;$curGoroutine.deferStack.push($deferred);d=[d];  /!f=b.Deadline();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=$clone(e[0],E.Time);h=e[1];  /if(h&&$clone(g,E.Time).Before($clone(c,E.Time))){$s=2;continue;}$s=3;continue;    case 2:  /�i=N(b);$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return i;    case 3:  /�d[0]=new V.ptr($clone(O(b),T),AG.nil,$clone(c,E.Time));  0$r=P(b,d[0]);$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0$j=E.Until($clone(c,E.Time));  0?if((j.$high<0||(j.$high===0&&j.$low<=0))){$s=6;continue;}$s=7;continue;    case 6:  0M$r=d[0].cancel(true,$pkg.DeadlineExceeded);$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0�$s=-1;return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  0�$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];    case 7:  0�$r=d[0].cancelCtx.mu.Lock();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  0�$deferred.push([$methodVal(d[0].cancelCtx.mu,"Unlock"),[]]);    if($interfaceIsEqual(d[0].cancelCtx.err,$ifaceNil)){  0�d[0].timer=E.AfterFunc(j,(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  1$r=d[0].cancel(true,$pkg.DeadlineExceeded);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d));    }  1I$s=-1;return[d[0],(function(d){return function $b(){var $ptr,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  1\$r=d[0].cancel(true,$pkg.Canceled);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:$b};}$f.$ptr=$ptr;$f.$s=$s;$f.$r=$r;return $f;};})(d)];    }return;}}catch(err){$err=err;$s=-1;return[$ifaceNil,$throwNilPointerError];}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$deferred=$deferred;$f.$r=$r;return $f;}}};$pkg.WithDeadline=U;WithDeadline
context.AA
context.AGcontext.Canceledcontext.DeadlineExceededcontext.WithCancelcontext.WithDeadlinecontext.cancelCtxcontext.cancel~context.newCancelCtxcontext.propagateCancelcontext.timerCtx
sync.Mutextime.AfterFunc	time.Time
time.Timer
time.Until (*context.timerCtx).Deadline��V.ptr.prototype.Deadline=function(){var $ptr,b,c,d,e,f;b=new E.Time.ptr(new $Int64(0,0),0,AA.nil);c=false;d=this;    e=$clone(d.deadline,E.Time);f=true;E.Time.copy(b,e);c=f;return[b,c];    };V.prototype.Deadline=function(){return this.$val.Deadline();};timerCtx
context.AAcontext.timerCtx	time.Time (*context.timerCtx).String��V.ptr.prototype.String=function(){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  3d=B.Sprintf("%v.WithDeadline(%s [%s])",new AF([b.cancelCtx.Context,(c=b.deadline,new c.constructor.elem(c)),E.Until($clone(b.deadline,E.Time))]));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:V.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};V.prototype.String=function(){return this.$val.String();};timerCtx
context.AFcontext.timerCtxfmt.Sprintf	time.Time
time.Until (*context.timerCtx).cancel�V.ptr.prototype.cancel=function(b,c){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:d=this;  3�$r=d.cancelCtx.cancel(false,c);$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  3�if(b){$s=2;continue;}$s=3;continue;    case 2:  45$r=R(d.cancelCtx.Context,d);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    case 3:  4]$r=d.cancelCtx.mu.Lock();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    if(!(d.timer===AG.nil)){  4�d.timer.Stop();  4�d.timer=AG.nil;    }  4�$r=d.cancelCtx.mu.Unlock();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}    $s=-1;return;}return;}if($f===undefined){$f={$blk:V.ptr.prototype.cancel};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};V.prototype.cancel=function(b,c){return this.$val.cancel(b,c);};timerCtxcancel~
context.AGcontext.cancel~context.removeChildcontext.timerCtx context.WithTimeoutW��W=function(b,c){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  6�d=U(b,$clone($clone(E.Now(),E.Time).Add(c),E.Time));$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:W};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithTimeout=W;WithTimeoutcontext.WithDeadlinecontext.WithTimeouttime.Now	time.Time context.WithValueX��X=function(b,c,d){var $ptr,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if($interfaceIsEqual(c,$ifaceNil)){  :$panic(new $String("nil key"));    }  :(e=C.TypeOf(c).Comparable();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}if(!e){$s=1;continue;}$s=2;continue;    case 1:  :Q$panic(new $String("key is not comparable"));    case 2:  :t$s=-1;return new Y.ptr(b,c,d);    }return;}if($f===undefined){$f={$blk:X};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.WithValue=X;	WithValuecontext.WithValuecontext.valueCtxreflect.TypeOf (*context.valueCtx).String�6Y.ptr.prototype.String=function(){var $ptr,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  ;|c=B.Sprintf("%v.WithValue(%#v, %#v)",new AF([b.Context,b.key,b.val]));$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return c;    }return;}if($f===undefined){$f={$blk:Y.ptr.prototype.String};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};Y.prototype.String=function(){return this.$val.String();};valueCtx
context.AFcontext.valueCtxfmt.Sprintf (*context.valueCtx).Value�VY.ptr.prototype.Value=function(b){var $ptr,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=this;    if($interfaceIsEqual(c.key,b)){  <$s=-1;return c.val;    }  <#d=c.Context.Value(b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}$s=-1;return d;    }return;}if($f===undefined){$f={$blk:Y.ptr.prototype.Value};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};Y.prototype.Value=function(b){return this.$val.Value(b);};valueCtxcontext.valueCtx �
�{"Base":15426,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.QDLsW9nGOZ/goroot/src/context/context.go","Base":1,"Size":15424,"Lines":[0,55,109,159,160,230,308,334,337,408,475,546,615,677,724,727,793,864,928,996,1063,1131,1197,1220,1223,1298,1378,1394,1397,1468,1546,1581,1584,1643,1667,1673,1676,1755,1804,1807,1886,1945,1948,2028,2094,2097,2176,2189,2205,2206,2215,2225,2232,2243,2251,2259,2261,2262,2341,2360,2363,2437,2462,2533,2604,2667,2709,2710,2784,2856,2927,2931,3000,3066,3139,3152,3156,3207,3211,3282,3348,3412,3424,3458,3481,3500,3509,3525,3551,3576,3598,3607,3615,3622,3626,3700,3736,3760,3761,3833,3901,3969,4042,4055,4056,4129,4200,4242,4246,4312,4385,4400,4404,4476,4544,4616,4681,4744,4760,4764,4838,4880,4884,4952,4970,4974,4996,5000,5058,5086,5090,5158,5228,5246,5250,5317,5386,5430,5455,5459,5522,5591,5639,5646,5650,5716,5775,5817,5836,5843,5879,5881,5882,5961,6007,6008,6084,6104,6157,6158,6194,6195,6280,6342,6404,6405,6485,6552,6570,6571,6631,6639,6641,6642,6684,6696,6698,6699,6730,6742,6744,6745,6799,6811,6813,6814,6851,6863,6881,6911,6923,6947,6950,6982,6984,6985,6991,7019,7047,7049,7050,7127,7202,7274,7287,7315,7334,7336,7337,7413,7490,7560,7634,7693,7715,7728,7730,7731,7787,7839,7909,7932,7933,8010,8090,8171,8174,8254,8329,8396,8423,8452,8500,8502,8503,8553,8599,8618,8637,8669,8672,8674,8675,8744,8799,8826,8863,8866,8909,8923,8943,8982,9012,9023,9049,9094,9099,9133,9137,9153,9163,9177,9189,9214,9252,9276,9281,9287,9290,9292,9293,9366,9446,9480,9538,9545,9575,9594,9612,9630,9659,9677,9699,9710,9731,9735,9738,9740,9741,9791,9842,9876,9886,9895,9898,9911,9935,9963,9966,9981,9983,9984,10051,10100,10126,10168,10192,10194,10195,10271,10299,10323,10332,10333,10389,10390,10411,10482,10557,10559,10560,10605,10620,10622,10623,10657,10670,10691,10705,10707,10708,10746,10794,10796,10797,10860,10927,10990,11007,11064,11067,11080,11099,11115,11144,11147,11160,11175,11208,11275,11302,11305,11323,11338,11339,11362,11390,11393,11395,11396,11476,11554,11632,11713,11788,11824,11827,11907,11982,12060,12123,12185,12213,12216,12233,12268,12291,12294,12322,12349,12362,12428,12476,12479,12492,12513,12532,12571,12607,12612,12615,12662,12664,12665,12736,12811,12846,12869,12880,12922,12923,12943,12945,12946,13008,13033,13035,13036,13073,13178,13180,13181,13243,13275,13298,13362,13400,13403,13416,13437,13454,13470,13473,13488,13490,13491,13561,13564,13644,13719,13722,13795,13862,13955,13986,13992,14072,14126,14128,14129,14209,14217,14220,14299,14358,14361,14426,14491,14561,14621,14675,14742,14784,14847,14864,14883,14886,14926,14959,14962,14998,15000,15001,15078,15132,15155,15164,15186,15188,15189,15226,15297,15299,15300,15356,15375,15390,15393,15422],"Infos":null}]}
 