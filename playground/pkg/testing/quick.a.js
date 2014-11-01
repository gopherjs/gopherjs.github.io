0���
import flag "flag"
import fmt "fmt"
import math "math"
import rand "math/rand"
import reflect "reflect"
import strings "strings"
func @"".Check(@"".function interface {  }, @"".config *@"".Config) (@"".err error)
func @"".CheckEqual(@"".f interface {  }, @"".g interface {  }, @"".config *@"".Config) (@"".err error)
type @"".CheckEqualError struct { ? @"".CheckError; @"".Out1 []interface {  }; @"".Out2 []interface {  } }
func (? *@"".CheckEqualError) @"".Error() (? string)
type @"".CheckError struct { @"".Count int; @"".In []interface {  } }
func (? *@"".CheckError) @"".Error() (? string)
type @"".Config struct { @"".MaxCount int; @"".MaxCountScale float64; @"".Rand *@"math/rand".Rand; @"".Values func (? []@"reflect".Value, ? *@"math/rand".Rand) () }
func (? *@"".Config) @"".getMaxCount() (@"".maxCount int)
func (? *@"".Config) @"".getRand() (? *@"math/rand".Rand)
type @"".Generator interface { @"".Generate(@"".rand *@"math/rand".Rand, @"".size int) (? @"reflect".Value) }
type @"".SetupError string
func (? @"".SetupError) @"".Error() (? string)
func (? *@"".SetupError) @"".Error() (? string)
func @"".Value(@"".t @"reflect".Type, @"".rand *@"math/rand".Rand) (@"".value @"reflect".Value, @"".ok bool)
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"math/rand".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"math/rand".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"math/rand".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"math/rand".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"math/rand".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"reflect".Value struct { @"reflect".typ *@"reflect".rtype; @"reflect".ptr @"unsafe".Pointer; @"reflect".scalar uintptr; ? @"reflect".flag }
func (? @"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Bool() (? bool)
func (? @"reflect".Value) @"reflect".Bytes() (? []byte)
func (? @"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".CanAddr() (? bool)
func (? @"reflect".Value) @"reflect".CanInterface() (? bool)
func (? @"reflect".Value) @"reflect".CanSet() (? bool)
func (? @"reflect".Value) @"reflect".Cap() (? int)
func (? @"reflect".Value) @"reflect".Close() ()
func (? @"reflect".Value) @"reflect".Complex() (? complex128)
func (? @"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Float() (? float64)
func (? @"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Int() (? int64)
func (? @"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? @"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? @"reflect".Value) @"reflect".IsNil() (? bool)
func (? @"reflect".Value) @"reflect".IsValid() (? bool)
func (? @"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? @"reflect".Value) @"reflect".Len() (? int)
func (? @"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".NumField() (? int)
func (? @"reflect".Value) @"reflect".NumMethod() (? int)
func (? @"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? @"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? @"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? @"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? @"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? @"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? @"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? @"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? @"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? @"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? @"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? @"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? @"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? @"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? @"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".String() (? string)
func (? @"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? @"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? @"reflect".Value) @"reflect".Uint() (? uint64)
func (? @"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? @"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? @"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? @"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? @"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? @"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? @"reflect".Value) @"reflect".runes() (? []rune)
func (? @"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? @"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
func (? *@"reflect".Value) @"reflect".Addr() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Bool() (? bool)
func (? *@"reflect".Value) @"reflect".Bytes() (? []byte)
func (? *@"reflect".Value) @"reflect".Call(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CallSlice(@"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".CanAddr() (? bool)
func (? *@"reflect".Value) @"reflect".CanInterface() (? bool)
func (? *@"reflect".Value) @"reflect".CanSet() (? bool)
func (? *@"reflect".Value) @"reflect".Cap() (? int)
func (? *@"reflect".Value) @"reflect".Close() ()
func (? *@"reflect".Value) @"reflect".Complex() (? complex128)
func (? *@"reflect".Value) @"reflect".Convert(@"reflect".t @"reflect".Type) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Elem() (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Field(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Float() (? float64)
func (? *@"reflect".Value) @"reflect".Index(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Int() (? int64)
func (? *@"reflect".Value) @"reflect".Interface() (@"reflect".i interface {  })
func (? *@"reflect".Value) @"reflect".InterfaceData() (? [2]uintptr)
func (? *@"reflect".Value) @"reflect".IsNil() (? bool)
func (? *@"reflect".Value) @"reflect".IsValid() (? bool)
func (? *@"reflect".Value) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".Value) @"reflect".Len() (? int)
func (? *@"reflect".Value) @"reflect".MapIndex(@"reflect".key @"reflect".Value) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MapKeys() (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".Method(@"reflect".i int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".MethodByName(@"reflect".name string) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".NumField() (? int)
func (? *@"reflect".Value) @"reflect".NumMethod() (? int)
func (? *@"reflect".Value) @"reflect".OverflowComplex(@"reflect".x complex128) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowFloat(@"reflect".x float64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowInt(@"reflect".x int64) (? bool)
func (? *@"reflect".Value) @"reflect".OverflowUint(@"reflect".x uint64) (? bool)
func (? *@"reflect".Value) @"reflect".Pointer() (? uintptr)
func (? *@"reflect".Value) @"reflect".Recv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".Send(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".Set(@"reflect".x @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetBool(@"reflect".x bool) ()
func (? *@"reflect".Value) @"reflect".SetBytes(@"reflect".x []byte) ()
func (? *@"reflect".Value) @"reflect".SetCap(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetComplex(@"reflect".x complex128) ()
func (? *@"reflect".Value) @"reflect".SetFloat(@"reflect".x float64) ()
func (? *@"reflect".Value) @"reflect".SetInt(@"reflect".x int64) ()
func (? *@"reflect".Value) @"reflect".SetLen(@"reflect".n int) ()
func (? *@"reflect".Value) @"reflect".SetMapIndex(@"reflect".key @"reflect".Value, @"reflect".val @"reflect".Value) ()
func (? *@"reflect".Value) @"reflect".SetPointer(@"reflect".x @"unsafe".Pointer) ()
func (? *@"reflect".Value) @"reflect".SetString(@"reflect".x string) ()
func (? *@"reflect".Value) @"reflect".SetUint(@"reflect".x uint64) ()
func (? *@"reflect".Value) @"reflect".Slice(@"reflect".i int, @"reflect".j int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".Slice3(@"reflect".i int, @"reflect".j int, @"reflect".k int) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".String() (? string)
func (? *@"reflect".Value) @"reflect".TryRecv() (@"reflect".x @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".TrySend(@"reflect".x @"reflect".Value) (? bool)
func (? *@"reflect".Value) @"reflect".Type() (? @"reflect".Type)
func (? *@"reflect".Value) @"reflect".Uint() (? uint64)
func (? *@"reflect".Value) @"reflect".UnsafeAddr() (? uintptr)
func (? *@"reflect".Value) @"reflect".assignTo(@"reflect".context string, @"reflect".dst *@"reflect".rtype, @"reflect".target *interface {  }) (? @"reflect".Value)
func (? *@"reflect".Value) @"reflect".call(@"reflect".op string, @"reflect".in []@"reflect".Value) (? []@"reflect".Value)
func (? *@"reflect".Value) @"reflect".iword() (? @"reflect".iword)
func (? *@"reflect".Value) @"reflect".pointer() (? @"unsafe".Pointer)
func (? *@"reflect".Value) @"reflect".recv(@"reflect".nb bool) (@"reflect".val @"reflect".Value, @"reflect".ok bool)
func (? *@"reflect".Value) @"reflect".runes() (? []rune)
func (? *@"reflect".Value) @"reflect".send(@"reflect".x @"reflect".Value, @"reflect".nb bool) (@"reflect".selected bool)
func (? *@"reflect".Value) @"reflect".setRunes(@"reflect".x []rune) ()
type @"reflect".Type interface { @"reflect".Align() (? int); @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Bits() (? int); @"reflect".ChanDir() (? @"reflect".ChanDir); @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool); @"reflect".Elem() (? @"reflect".Type); @"reflect".Field(@"reflect".i int) (? @"reflect".StructField); @"reflect".FieldAlign() (? int); @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField); @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool); @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool); @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool); @"reflect".In(@"reflect".i int) (? @"reflect".Type); @"reflect".IsVariadic() (? bool); @"reflect".Key() (? @"reflect".Type); @"reflect".Kind() (? @"reflect".Kind); @"reflect".Len() (? int); @"reflect".Method(? int) (? @"reflect".Method); @"reflect".MethodByName(? string) (? @"reflect".Method, ? bool); @"reflect".Name() (? string); @"reflect".NumField() (? int); @"reflect".NumIn() (? int); @"reflect".NumMethod() (? int); @"reflect".NumOut() (? int); @"reflect".Out(@"reflect".i int) (? @"reflect".Type); @"reflect".PkgPath() (? string); @"reflect".Size() (? uintptr); @"reflect".String() (? string); @"reflect".common() (? *@"reflect".rtype); @"reflect".uncommon() (? *@"reflect".uncommonType) }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"math/rand".seed int64) () }
type @"reflect".rtype struct { @"reflect".size uintptr; @"reflect".hash uint32; _ uint8; @"reflect".align uint8; @"reflect".fieldAlign uint8; @"reflect".kind uint8; @"reflect".alg *uintptr; @"reflect".gc @"unsafe".Pointer; @"reflect".string *string; ? *@"reflect".uncommonType; @"reflect".ptrToThis *@"reflect".rtype; @"reflect".zero @"unsafe".Pointer }
func (? *@"reflect".rtype) @"reflect".Align() (? int)
func (? *@"reflect".rtype) @"reflect".AssignableTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Bits() (? int)
func (? *@"reflect".rtype) @"reflect".ChanDir() (? @"reflect".ChanDir)
func (? *@"reflect".rtype) @"reflect".ConvertibleTo(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".Elem() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Field(@"reflect".i int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldAlign() (? int)
func (? *@"reflect".rtype) @"reflect".FieldByIndex(@"reflect".index []int) (? @"reflect".StructField)
func (? *@"reflect".rtype) @"reflect".FieldByName(@"reflect".name string) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".FieldByNameFunc(@"reflect".match func (? string) (? bool)) (? @"reflect".StructField, ? bool)
func (? *@"reflect".rtype) @"reflect".Implements(@"reflect".u @"reflect".Type) (? bool)
func (? *@"reflect".rtype) @"reflect".In(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".IsVariadic() (? bool)
func (? *@"reflect".rtype) @"reflect".Key() (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".Kind() (? @"reflect".Kind)
func (? *@"reflect".rtype) @"reflect".Len() (? int)
func (? *@"reflect".rtype) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".rtype) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".rtype) @"reflect".Name() (? string)
func (? *@"reflect".rtype) @"reflect".NumField() (? int)
func (? *@"reflect".rtype) @"reflect".NumIn() (? int)
func (? *@"reflect".rtype) @"reflect".NumMethod() (? int)
func (? *@"reflect".rtype) @"reflect".NumOut() (? int)
func (? *@"reflect".rtype) @"reflect".Out(@"reflect".i int) (? @"reflect".Type)
func (? *@"reflect".rtype) @"reflect".PkgPath() (? string)
func (? *@"reflect".rtype) @"reflect".Size() (? uintptr)
func (? *@"reflect".rtype) @"reflect".String() (? string)
func (? *@"reflect".rtype) @"reflect".common() (? *@"reflect".rtype)
func (? *@"reflect".rtype) @"reflect".pointers() (? bool)
func (? *@"reflect".rtype) @"reflect".ptrTo() (? *@"reflect".rtype)
type @"reflect".flag uintptr
func (? @"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? @"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? @"reflect".flag) @"reflect".mustBeAssignable() ()
func (? @"reflect".flag) @"reflect".mustBeExported() ()
func (? *@"reflect".flag) @"reflect".kind() (? @"reflect".Kind)
func (? *@"reflect".flag) @"reflect".mustBe(@"reflect".expected @"reflect".Kind) ()
func (? *@"reflect".flag) @"reflect".mustBeAssignable() ()
func (? *@"reflect".flag) @"reflect".mustBeExported() ()
type @"reflect".Kind uint
func (? @"reflect".Kind) @"reflect".String() (? string)
func (? *@"reflect".Kind) @"reflect".String() (? string)
type @"reflect".iword @"unsafe".Pointer
type @"reflect".ChanDir int
func (? @"reflect".ChanDir) @"reflect".String() (? string)
func (? *@"reflect".ChanDir) @"reflect".String() (? string)
type @"reflect".StructField struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Tag @"reflect".StructTag; @"reflect".Offset uintptr; @"reflect".Index []int; @"reflect".Anonymous bool }
type @"reflect".Method struct { @"reflect".Name string; @"reflect".PkgPath string; @"reflect".Type @"reflect".Type; @"reflect".Func @"reflect".Value; @"reflect".Index int }
type @"reflect".uncommonType struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".methods []@"reflect".method }
func (? *@"reflect".uncommonType) @"reflect".Method(@"reflect".i int) (@"reflect".m @"reflect".Method)
func (? *@"reflect".uncommonType) @"reflect".MethodByName(@"reflect".name string) (@"reflect".m @"reflect".Method, @"reflect".ok bool)
func (? *@"reflect".uncommonType) @"reflect".Name() (? string)
func (? *@"reflect".uncommonType) @"reflect".NumMethod() (? int)
func (? *@"reflect".uncommonType) @"reflect".PkgPath() (? string)
func (? *@"reflect".uncommonType) @"reflect".uncommon() (? *@"reflect".uncommonType)
type @"reflect".StructTag string
func (? @"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
func (? *@"reflect".StructTag) @"reflect".Get(@"reflect".key string) (? string)
type @"reflect".method struct { @"reflect".name *string; @"reflect".pkgPath *string; @"reflect".mtyp *@"reflect".rtype; @"reflect".typ *@"reflect".rtype; @"reflect".ifn @"unsafe".Pointer; @"reflect".tfn @"unsafe".Pointer }
$$
0��github.com/gopherjs/gopherjs/jsruntimeerrorssync/atomicsynciomathunicodeunicode/utf8bytessyscallstringstimeosstrconvreflectfmtsortflag	math/rand0L0	flagA0fmtB0	mathC0	math/randD0reflectE0stringsF0�40�� 0H\H=$pkg.Generator=$newType(8,"Interface","quick.Generator","Generator","testing/quick",null);ZH.init([["Generate","Generate","",$funcType([($ptrType(D.Rand)),$Int],[E.Value],false)]]);0	Generator0math/rand:Rand
SetupError0  0�� 0P��P=$pkg.CheckError=$newType(0,"Struct","quick.CheckError","CheckError","testing/quick",function(Count_,In_){this.$val=this;this.Count=Count_!==undefined?Count_:0;this.In=In_!==undefined?In_:($sliceType($emptyInterface)).nil;});��($ptrType(P)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];P.init([["Count","Count","",$Int,""],["In","In","",($sliceType($emptyInterface)),""]]);0
CheckError0  0�{ 0Q�aQ=$pkg.CheckEqualError=$newType(0,"Struct","quick.CheckEqualError","CheckEqualError","testing/quick",function(CheckError_,Out1_,Out2_){this.$val=this;this.CheckError=CheckError_!==undefined?CheckError_:new P.Ptr();this.Out1=Out1_!==undefined?Out1_:($sliceType($emptyInterface)).nil;this.Out2=Out2_!==undefined?Out2_:($sliceType($emptyInterface)).nil;});��($ptrType(Q)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];Q.init([["CheckError","","",P,""],["Out1","Out1","",($sliceType($emptyInterface)),""],["Out2","Out2","",($sliceType($emptyInterface)),""]]);0CheckEqualError0testing/quick:CheckError 0# 0G  0defaultMaxCount0  0b 0N N=new M.Ptr();0

j.SetUint((o=K(b),new $Uint64(o.$high,o.$low)));      
.}else if(l===8){  
Dj.SetUint((p=K(b),new $Uint64(p.$high,p.$low)));      
h}else if(l===7){  
}j.SetUint((q=K(b),new $Uint64(q.$high,q.$low)));      
�}else if(l===12){  
�j.SetUint((r=K(b),new $Uint64(r.$high,r.$low)));      
�}else if(l===21){  
�s=b.Intn(50);  j.Set($clone(E.MakeMap(k),E.Value));  9  =t=0;while(t<s){  \u=L(k.Key(),b);v=new E.Value.Ptr();$copy(v,u[0],E.Value);w=u[1];  �x=L(k.Elem(),b);y=new E.Value.Ptr();$copy(y,x[0],E.Value);z=x[1];  �    if(!w||!z){  �    aa=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0,0);ab=false;$copy(c,aa,E.Value);d=ab;return[c,d];    }  �j.SetMapIndex($clone(v,E.Value),$clone(y,E.Value));      S  St=t+(1)>>0;}      }else if(l===22){  $ac=L(k.Elem(),b);ad=new E.Value.Ptr();$copy(ad,ac[0],E.Value);ae=ac[1];  O    if(!ae){  [    af=new E.Value.Ptr(($ptrType(E.rtype)).nil,0,0,0);ag=false;$copy(c,af,E.Value);d=ag;return[c,d];    }  j.Set($clone(E.New(k.Elem()),E.Value));  �j.Elem().Set($clone(ad,E.Value));      �}else if(l===23){  �ah=b.Intn(50);  �j.Set($clone(E.MakeSlice(k,ah,ah),E.Value));  
return D.New(D.NewSource(new $Int64(0,0)));    }  1return a.Rand;    };M.prototype.getRand=function(){return this.$val.getRand();}; 0ConfiggetRand0J
SetupError0testing/quick:SetupError 0�j!(*testing/quick.CheckError).Error0 ��P.Ptr.prototype.Error=function(){var a;  �a=this;  �return B.Sprintf("#%d: failed on input %s",new($sliceType($emptyInterface))([new $Int(a.Count),new $String(W(a.In))]));    };P.prototype.Error=function(){return this.$val.Error();}; 0
CheckError0?fmt:Sprintftesting/quick:CheckErrortesting/quick:toString 0��&(*testing/quick.CheckEqualError).Error0 �NQ.Ptr.prototype.Error=function(){var a;  �a=this;   return B.Sprintf("#%d: failed on input %s. Output 1: %s. Output 2: %s",new($sliceType($emptyInterface))([new $Int(a.CheckError.Count),new $String(W(a.CheckError.In)),new $String(W(a.Out1)),new $String(W(a.Out2))]));    };Q.prototype.Error=function(){return this.$val.Error();}; 0CheckEqualError0Dfmt:Sprintftesting/quick:CheckEqualErrortesting/quick:toString 0��testing/quick.Check0R�|R=$pkg.Check=function(a,b){var c=$ifaceNil,d,e,f,g,h,i,j,k,l;  �    if(b===($ptrType(M)).nil){  �b=N;    }  �d=U(a);e=new E.Value.Ptr();$copy(e,d[0],E.Value);f=d[1];g=d[2];      if(!g){  %c=new O("argument is not a function");  Vreturn c;    }  b    if(!((f.NumOut()===1))){  }c=new O("function returns more than one value.");  �return c;    }  �    if(!((f.Out(0).Kind()===1))){  �c=new O("function does not return a bool");  %return c;    }  1h=($sliceType(E.Value)).make(f.NumIn());  di=b.getRand();  ~j=b.getMaxCount();  �  �k=0;while(k<j){  �c=T(h,f,b,i);  �    if(!($interfaceIsEqual(c,$ifaceNil))){  return c;    }      if(!(l=e.Call(h),((0<0||0>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+0])).Bool()){  Ac=new P.Ptr(k+1>>0,V(h));  vreturn c;    }      �  �k=k+(1)>>0;}  �return c;    }; 0Check0�
CheckEqual0�4reflect:DeepEqual
toString0fmt:Sprintfstrings:Join 0 �S{"Base":9491,"Files":[{"Name":"/usr/local/go/src/pkg/testing/quick/quick.go","Base":1,"Size":9489,"Lines":[0,55,109,159,160,238,252,253,262,270,277,285,298,309,320,322,323,430,431,490,517,585,627,678,680,681,757,801,840,864,873,876,895,897,898,974,1018,1057,1081,1090,1093,1103,1105,1106,1179,1249,1250,1326,1337,1360,1361,1416,1486,1568,1645,1704,1749,1752,1753,1781,1822,1842,1873,1896,1937,1960,1992,2017,2097,2123,2185,2206,2234,2255,2283,2304,2332,2352,2380,2399,2427,2449,2486,2508,2545,2567,2604,2625,2662,2682,2719,2742,2779,2798,2835,2870,2904,2947,2993,3014,3048,3053,3082,3086,3105,3148,3159,3192,3196,3234,3255,3276,3313,3370,3404,3448,3460,3494,3499,3523,3527,3549,3586,3625,3659,3704,3708,3742,3764,3802,3853,3865,3899,3904,3928,3932,3942,3974,3977,3978,3994,3996,3997,4056,4077,4138,4165,4179,4251,4299,4322,4394,4433,4450,4517,4590,4657,4679,4721,4723,4724,4749,4750,4811,4851,4871,4908,4911,4926,4928,4929,5004,5015,5063,5086,5106,5134,5197,5208,5239,5243,5246,5247,5255,5257,5258,5331,5383,5406,5407,5463,5464,5521,5546,5557,5578,5580,5581,5619,5691,5693,5694,5758,5788,5800,5820,5840,5842,5843,5886,6022,6024,6025,6091,6160,6227,6273,6289,6292,6340,6369,6402,6436,6443,6492,6511,6518,6524,6587,6607,6633,6636,6637,6680,6690,6739,6748,6751,6752,6778,6838,6847,6850,6892,6946,6955,6958,6959,7010,7036,7070,7071,7104,7160,7178,7188,7192,7193,7229,7282,7292,7296,7299,7300,7308,7310,7311,7387,7459,7537,7578,7642,7662,7688,7691,7692,7728,7738,7780,7789,7792,7828,7838,7880,7889,7892,7893,7914,7967,7976,7979,7980,8031,8057,8091,8092,8125,8181,8199,8209,8213,8214,8256,8298,8299,8337,8419,8429,8433,8436,8437,8445,8447,8448,8520,8547,8653,8680,8708,8717,8720,8721,8755,8769,8806,8817,8922,8932,8936,8939,8940,8948,8950,8951,9032,9056,9087,9097,9106,9109,9123,9131,9133,9134,9192,9233,9261,9286,9289,9301,9303,9304,9353,9391,9423,9454,9457,9487],"Infos":null}]}
 �