0ÇXÿlogÇ%epackage log
import fmt "fmt"
import io "io"
import os "os"
import runtime "runtime"
import sync "sync"
import time "time"
func @"".Fatal(@"".v ...interface {  }) ()
func @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func @"".Fatalln(@"".v ...interface {  }) ()
func @"".Flags() (? int)
const @"".Ldate = 0x1
const @"".Llongfile = 0x8
const @"".Lmicroseconds = 0x4
type @"".Logger struct { @"".mu @"sync".Mutex; @"".prefix string; @"".flag int; @"".out @"io".Writer; @"".buf []byte }
func (? *@"".Logger) @"".Fatal(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Fatalln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Flags() (? int)
func (? *@"".Logger) @"".Output(@"".calldepth int, @"".s string) (? error)
func (? *@"".Logger) @"".Panic(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Panicln(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Prefix() (? string)
func (? *@"".Logger) @"".Print(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".Printf(@"".format string, @"".v ...interface {  }) ()
func (? *@"".Logger) @"".Println(@"".v ...interface {  }) ()
func (? *@"".Logger) @"".SetFlags(@"".flag int) ()
func (? *@"".Logger) @"".SetPrefix(@"".prefix string) ()
func (? *@"".Logger) @"".formatHeader(@"".buf *[]byte, @"".t @"time".Time, @"".file string, @"".line int) ()
const @"".Lshortfile = 0x10
const @"".LstdFlags = 0x3
const @"".Ltime = 0x2
func @"".New(@"".out @"io".Writer, @"".prefix string, @"".flag int) (? *@"".Logger)
func @"".Panic(@"".v ...interface {  }) ()
func @"".Panicf(@"".format string, @"".v ...interface {  }) ()
func @"".Panicln(@"".v ...interface {  }) ()
func @"".Prefix() (? string)
func @"".Print(@"".v ...interface {  }) ()
func @"".Printf(@"".format string, @"".v ...interface {  }) ()
func @"".Println(@"".v ...interface {  }) ()
func @"".SetFlags(@"".flag int) ()
func @"".SetOutput(@"".w @"io".Writer) ()
func @"".SetPrefix(@"".prefix string) ()
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"time".Time struct { @"time".sec int64; @"time".nsec uintptr; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
0Å†github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicodeunicode/utf8bytessyscallstringstimeosstrconvreflectfmt0@0fmtA0ioB0osC0runtimeD0	syncE0	timeF0Ç+Ÿ0Ç» 0GÇTG=$pkg.Logger=$newType(0,"Struct","log.Logger","Logger","log",function(mu_,prefix_,flag_,out_,buf_){this.$val=this;this.mu=mu_!==undefined?mu_:new E.Mutex.Ptr();this.prefix=prefix_!==undefined?prefix_:"";this.flag=flag_!==undefined?flag_:0;this.out=out_!==undefined?out_:$ifaceNil;this.buf=buf_!==undefined?buf_:($sliceType($Uint8)).nil;});Ç4($ptrType(G)).methods=[["Fatal","Fatal","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Fatalf","Fatalf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Fatalln","Fatalln","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Flags","Flags","",$funcType([],[$Int],false),-1],["Output","Output","",$funcType([$Int,$String],[$error],false),-1],["Panic","Panic","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Panicf","Panicf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Panicln","Panicln","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Prefix","Prefix","",$funcType([],[$String],false),-1],["Print","Print","",$funcType([($sliceType($emptyInterface))],[],true),-1],["Printf","Printf","",$funcType([$String,($sliceType($emptyInterface))],[],true),-1],["Println","Println","",$funcType([($sliceType($emptyInterface))],[],true),-1],["SetFlags","SetFlags","",$funcType([$Int],[],false),-1],["SetPrefix","SetPrefix","",$funcType([$String],[],false),-1],["formatHeader","formatHeader","log",$funcType([($ptrType(($sliceType($Uint8)))),F.Time,$String,$Int],[],false),-1]];G.init([["mu","mu","log",E.Mutex,""],["prefix","prefix","log",$String,""],["flag","flag","log",$Int,""],["out","out","log",B.Writer,""],["buf","buf","log",($sliceType($Uint8)),""]]);0Logger0"	io:Writer
sync:Mutex	time:Time 0 0I  0std0  0D 0      I=H(C.Stderr,"",3);0 0log:Newlog:std	os:Stderr 0Å†log.New0HjH=$pkg.New=function(a,b,c){  	®return new G.Ptr(new E.Mutex.Ptr(),b,c,a,($sliceType($Uint8)).nil);    }; 0New0
log:Logger
sync:Mutex 0ÇÆlog.itoa0JÇåJ=function(a,b,c){var d,e,f,g,h;  
≤  
∂d=(b>>>0);  
»    if((d===0)&&c<=1){  
‚a.$set($append(a.$get(),48));  
˝return;    }  0  4e=($arrayType($Uint8,32)).zero();$copy(e,($arrayType($Uint8,32)).zero(),($arrayType($Uint8,32)));  @f=32;  Nwhile(d>0||c>0){  r  rf=f-(1)>>0;  y  yc=c-(1)>>0;  Å(f<0||f>=e.length)?$throwRuntimeError("index out of range"):e[f]=((g=d%10,g===g?g:$throwRuntimeError("integer divide by zero"))<<24>>>24)+48<<24>>>24;      fd=(h=d/(10),(h===h&&h!==1/0&&h!==-1/0)?h>>>0:$throwRuntimeError("integer divide by zero"));}  ûa.$set($appendSlice(a.$get(),$subslice(new($sliceType($Uint8))(e),f)));    }; 0itoa0  0Ç…(*log.Logger).formatHeader0 ÇrG.Ptr.prototype.formatHeader=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;  ∆e=this;  a.$set($appendSlice(a.$get(),new($sliceType($Uint8))($stringToBytes(e.prefix))));  4    if(!(((e.flag&7)===0))){  c    if(!(((e.flag&1)===0))){  }f=b.Date();g=f[0];h=f[1];i=f[2];  ùJ(a,g,4);  ≥a.$set($append(a.$get(),47));  œJ(a,(h>>0),2);  Îa.$set($append(a.$get(),47));  J(a,i,2);  a.$set($append(a.$get(),32));    }  ;    if(!(((e.flag&6)===0))){  ej=b.Clock();k=j[0];l=j[1];m=j[2];  ÑJ(a,k,2);  öa.$set($append(a.$get(),58));  ∂J(a,l,2);  Àa.$set($append(a.$get(),58));  ÁJ(a,m,2);  ¸    if(!(((e.flag&4)===0))){  a.$set($append(a.$get(),46));  <J(a,(n=b.Nanosecond()/1000,(n===n&&n!==1/0&&n!==-1/0)?n>>0:$throwRuntimeError("integer divide by zero")),6);    }  ea.$set($append(a.$get(),32));    }    }  Ü    if(!(((e.flag&24)===0))){  ∞    if(!(((e.flag&16)===0))){  œo=c;  ‡  ‰p=c.length-1>>0;while(p>0){  	    if(c.charCodeAt(p)===47){  "o=c.substring((p+1>>0));  :break;    }      ˇ  ˇp=p-(1)>>0;}  Nc=o;    }  aa.$set($appendSlice(a.$get(),new($sliceType($Uint8))($stringToBytes(c))));  Äa.$set($append(a.$get(),58));  õJ(a,d,-1);  ±a.$set($appendSlice(a.$get(),new($sliceType($Uint8))($stringToBytes(": "))));    }    };G.prototype.formatHeader=function(a,b,c,d){return this.$val.formatHeader(a,b,c,d);}; 0LoggerformatHeader0
log:Loggerlog:itoa 0Çr(*log.Logger).Output0 ÇG.Ptr.prototype.Output=function(a,b){var $deferred=[],$err=null,c,d,e,f,g,h,i,j;try{$deferFrames.push($deferred);  Ic=this;  }d=new F.Time.Ptr();$copy(d,F.Now(),F.Time);  £  ße="";  ¥  ∏f=0;  ¬c.mu.Lock();  œ$deferred.push([$methodVal(c.mu,"Unlock"),[]]);  ‰    if(!(((c.flag&24)===0))){  Lc.mu.Unlock();  \  `g=false;  jh=D.Caller(a);e=h[1];f=h[2];g=h[3];  ö    if(!g){  ¶e="???";  ∂f=0;    }  ≈c.mu.Lock();    }  ’c.buf=$subslice(c.buf,0,0);  Ëc.formatHeader(new($ptrType(($sliceType($Uint8))))(function(){return this.$target.buf;},function($v){this.$target.buf=$v;},c),$clone(d,F.Time),e,f);  c.buf=$appendSlice(c.buf,new($sliceType($Uint8))($stringToBytes(b)));  .    if(b.length>0&&!((b.charCodeAt((b.length-1>>0))===10))){  Wc.buf=$append(c.buf,10);    }  wi=c.out.Write(c.buf);j=i[1];  ïreturn j;    }catch(err){$err=err;return $ifaceNil;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Output=function(a,b){return this.$val.Output(a,b);}; 0Logger0C
log:Loggerlog:formatHeaderruntime:Callertime:Now	time:Time 0Å„(*log.Logger).Printf0 ÅûG.Ptr.prototype.Printf=function(a,b){var c;  c=this;  Fc.Output(2,A.Sprintf(a,b));    };G.prototype.Printf=function(a,b){return this.$val.Printf(a,b);}; 0Logger0fmt:Sprintf
log:Logger 0Å’(*log.Logger).Print0 ÅíG.Ptr.prototype.Print=function(a){var b;  €b=this;   b.Output(2,A.Sprint(a));    };G.prototype.Print=function(a){return this.$val.Print(a);}; 0Logger0
fmt:Sprint
log:Logger 0Å·(*log.Logger).Println0 ÅöG.Ptr.prototype.Println=function(a){var b;  êb=this;  ∑b.Output(2,A.Sprintln(a));    };G.prototype.Println=function(a){return this.$val.Println(a);}; 0Logger0fmt:Sprintln
log:Logger 0ÅÌ(*log.Logger).Fatal0 Å°G.Ptr.prototype.Fatal=function(a){var b;  &b=this;  Lb.Output(2,A.Sprint(a));  kC.Exit(1);    };G.prototype.Fatal=function(a){return this.$val.Fatal(a);}; 0Logger0!
fmt:Sprint
log:Loggeros:Exit 0Å˚(*log.Logger).Fatalf0 Å≠G.Ptr.prototype.Fatalf=function(a,b){var c;  «c=this;  ˝c.Output(2,A.Sprintf(a,b));  %C.Exit(1);    };G.prototype.Fatalf=function(a,b){return this.$val.Fatalf(a,b);}; 0Logger0"fmt:Sprintf
log:Loggeros:Exit 0Å˘(*log.Logger).Fatalln0 Å©G.Ptr.prototype.Fatalln=function(a){var b;  Éb=this;  ´b.Output(2,A.Sprintln(a));  ÃC.Exit(1);    };G.prototype.Fatalln=function(a){return this.$val.Fatalln(a);}; 0Logger0#fmt:Sprintln
log:Loggeros:Exit 0Å¸(*log.Logger).Panic0 ÅπG.Ptr.prototype.Panic=function(a){var b,c;  #b=this;  Ic=A.Sprint(a);  `b.Output(2,c);  p$panic(new $String(c));    };G.prototype.Panic=function(a){return this.$val.Panic(a);}; 0Logger0
fmt:Sprint
log:Logger 0Ç
(*log.Logger).Panicf0 Å≈G.Ptr.prototype.Panicf=function(a,b){var c,d;  «c=this;  ˝d=A.Sprintf(a,b);  c.Output(2,d);  -$panic(new $String(d));    };G.prototype.Panicf=function(a,b){return this.$val.Panicf(a,b);}; 0Logger0fmt:Sprintf
log:Logger 0Ç(*log.Logger).Panicln0 Å¡G.Ptr.prototype.Panicln=function(a){var b,c;  Üb=this;  Æc=A.Sprintln(a);  «b.Output(2,c);  ◊$panic(new $String(c));    };G.prototype.Panicln=function(a){return this.$val.Panicln(a);}; 0Logger0fmt:Sprintln
log:Logger 0Çì(*log.Logger).Flags0 Ç[G.Ptr.prototype.Flags=function(){var $deferred=[],$err=null,a;try{$deferFrames.push($deferred);  a=this;  5a.mu.Lock();  B$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  Wreturn a.flag;    }catch(err){$err=err;return 0;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Flags=function(){return this.$val.Flags();}; 0Logger0
log:Logger 0Çî(*log.Logger).SetFlags0 ÇYG.Ptr.prototype.SetFlags=function(a){var $deferred=[],$err=null,b;try{$deferFrames.push($deferred);  †b=this;  ¡b.mu.Lock();  Œ$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  „b.flag=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.SetFlags=function(a){return this.$val.SetFlags(a);}; 0Logger0
log:Logger 0Çô(*log.Logger).Prefix0 Ç`G.Ptr.prototype.Prefix=function(){var $deferred=[],$err=null,a;try{$deferFrames.push($deferred);  .a=this;  La.mu.Lock();  Y$deferred.push([$methodVal(a.mu,"Unlock"),[]]);  nreturn a.prefix;    }catch(err){$err=err;return"";}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.Prefix=function(){return this.$val.Prefix();}; 0Logger0
log:Logger 0Çö(*log.Logger).SetPrefix0 Ç^G.Ptr.prototype.SetPrefix=function(a){var $deferred=[],$err=null,b;try{$deferFrames.push($deferred);  ªb=this;  ‚b.mu.Lock();  Ô$deferred.push([$methodVal(b.mu,"Unlock"),[]]);  b.prefix=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};G.prototype.SetPrefix=function(a){return this.$val.SetPrefix(a);}; 0Logger0
log:Logger 0Ç7log.SetOutput0KÇK=$pkg.SetOutput=function(a){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  zI.mu.Lock();  â$deferred.push([$methodVal(I.mu,"Unlock"),[]]);  †I.out=a;    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}}; 0	SetOutput0	log:std 0`	log.Flags0L5L=$pkg.Flags=function(){  ˛return I.Flags();    }; 0Flags0	log:std 0glog.SetFlags0M6M=$pkg.SetFlags=function(a){  jI.SetFlags(a);    }; 0
SetFlags0	log:std 0d
log.Prefix0N7N=$pkg.Prefix=function(){  ’return I.Prefix();    }; 0Prefix0	log:std 0klog.SetPrefix0O8O=$pkg.SetPrefix=function(a){  JI.SetPrefix(a);    }; 0	SetPrefix0	log:std 0t	log.Print0P=P=$pkg.Print=function(a){  !I.Output(2,A.Sprint(a));    }; 0Print0
fmt:Sprintlog:std 0}
log.Printf0QCQ=$pkg.Printf=function(a,b){  ‚I.Output(2,A.Sprintf(a,b));    }; 0Printf0fmt:Sprintflog:std 0~log.Println0RAR=$pkg.Println=function(a){   †I.Output(2,A.Sprintln(a));    }; 0	Println0fmt:Sprintlnlog:std 0Åå	log.Fatal0SLS=$pkg.Fatal=function(a){  !)I.Output(2,A.Sprint(a));  !JC.Exit(1);    }; 0Fatal0
fmt:Sprintlog:stdos:Exit 0Åï
log.Fatalf0TRT=$pkg.Fatalf=function(a,b){  !ŒI.Output(2,A.Sprintf(a,b));  !¯C.Exit(1);    }; 0Fatalf0fmt:Sprintflog:stdos:Exit 0Åñlog.Fatalln0UPU=$pkg.Fatalln=function(a){  "pI.Output(2,A.Sprintln(a));  "ìC.Exit(1);    }; 0	Fatalln0 fmt:Sprintlnlog:stdos:Exit 0Åü	log.Panic0VhV=$pkg.Panic=function(a){var b;  #b=A.Sprint(a);  #I.Output(2,b);  #+$panic(new $String(b));    }; 0Panic0
fmt:Sprintlog:std 0Å®
log.Panicf0WnW=$pkg.Panicf=function(a,b){var c;  #™c=A.Sprintf(a,b);  # I.Output(2,c);  #‹$panic(new $String(c));    }; 0Panicf0fmt:Sprintflog:std 0Å©log.Panicln0XlX=$pkg.Panicln=function(a){var b;  $Ob=A.Sprintln(a);  $hI.Output(2,b);  $z$panic(new $String(b));    }; 0	Panicln0fmt:Sprintlnlog:std 0 Çú{"Base":9350,"Files":[{"Name":"/usr/local/go/src/pkg/log/log.go","Base":1,"Size":9348,"Lines":[0,55,109,159,160,239,314,390,463,532,559,629,694,706,707,716,723,729,735,746,754,762,764,765,851,859,939,1016,1084,1139,1194,1247,1338,1419,1523,1596,1598,1599,1671,1745,1817,1890,1911,1986,2050,2083,2128,2181,2183,2184,2241,2291,2358,2411,2470,2524,2526,2527,2567,2568,2661,2695,2736,2758,2783,2810,2819,2822,2823,2862,2878,2892,2927,2934,2942,2969,2972,3004,3006,3007,3088,3122,3168,3193,3225,3247,3275,3303,3331,3352,3380,3384,3425,3456,3478,3506,3527,3555,3576,3610,3639,3676,3681,3709,3713,3716,3757,3787,3804,3844,3868,3892,3903,3909,3914,3930,3934,3965,3992,4014,4045,4048,4050,4051,4123,4191,4259,4325,4395,4418,4475,4513,4530,4544,4557,4578,4619,4681,4697,4711,4759,4770,4786,4798,4802,4816,4819,4838,4879,4908,4948,4978,4981,5011,5023,5025,5026,5075,5129,5188,5228,5230,5231,5279,5332,5407,5408,5458,5513,5592,5593,5663,5706,5737,5749,5751,5752,5824,5883,5923,5935,5937,5938,6012,6057,6090,6102,6104,6105,6172,6215,6238,6254,6264,6266,6267,6336,6395,6427,6443,6453,6455,6456,6527,6572,6597,6613,6623,6625,6626,6676,6707,6720,6741,6756,6758,6759,6809,6847,6860,6881,6896,6898,6899,6951,6986,6999,7020,7037,7039,7040,7092,7136,7149,7170,7189,7191,7192,7258,7288,7303,7326,7339,7341,7342,7401,7420,7440,7442,7443,7502,7528,7548,7550,7551,7612,7635,7656,7658,7659,7720,7752,7775,7777,7778,7827,7828,7883,7936,7967,8000,8002,8003,8059,8113,8160,8202,8204,8205,8262,8317,8350,8385,8387,8388,8456,8487,8520,8532,8534,8535,8605,8652,8694,8706,8708,8709,8781,8814,8849,8861,8863,8864,8929,8960,8983,9001,9011,9013,9014,9081,9128,9160,9178,9188,9190,9191,9260,9293,9318,9336,9346],"Infos":null}]}
 ˇ