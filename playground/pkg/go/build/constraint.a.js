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
GoLinkname�� Implementation�� 	Reference��   ��Time��   ��q��go/build/constraint
constrainterrorsstringsunicodeunicode/utf8�li�� XExprYisExprxAndExprEvaloktagStringlineNotExprOrExprOffsetErrErroreSyntaxErrorTagTagExpr
constraint	IsGoBuildIsPlusBuildParsePlusBuildLines             00  #    0T # 
 3    5  7     ' B     #         g     '    
  T rF  .    F  .          3 ��  #    �T � 
 �    �  �     ' �             ; ��  #    �T � 
 �    �  �     ' �   F  .      F     �     B   I   U �T � M S�     a   e ��  #    �T � 
 �    �  �     ' �    m 
$lxo�z3�;�����U�e�> AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["strings"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CC=$packages["unicode"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  DD=$packages["unicode/utf8"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  E^E=$pkg.Expr=$newType(8,$kindInterface,"constraint.Expr",true,"go/build/constraint",true,null);��E.init([{prop:"Eval",name:"Eval",pkg:"",typ:$funcType([AO],[$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)},{prop:"isExpr",name:"isExpr",pkg:"go/build/constraint",typ:$funcType([],[],false)}]);Exprgo/build/constraint.AOgo/build/constraint.Expr  F��F=$pkg.TagExpr=$newType(0,$kindStruct,"constraint.TagExpr",true,"go/build/constraint",true,function(Tag_){this.$val=this;if(arguments.length===0){this.Tag="";return;}this.Tag=Tag_;});��AL.methods=[{prop:"isExpr",name:"isExpr",pkg:"go/build/constraint",typ:$funcType([],[],false)},{prop:"Eval",name:"Eval",pkg:"",typ:$funcType([AO],[$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];UF.init("",[{prop:"Tag",name:"Tag",embedded:false,exported:true,typ:$String,tag:""}]);TagExprgo/build/constraint.ALgo/build/constraint.AOgo/build/constraint.TagExpr  H��H=$pkg.NotExpr=$newType(0,$kindStruct,"constraint.NotExpr",true,"go/build/constraint",true,function(X_){this.$val=this;if(arguments.length===0){this.X=$ifaceNil;return;}this.X=X_;});��AM.methods=[{prop:"isExpr",name:"isExpr",pkg:"go/build/constraint",typ:$funcType([],[],false)},{prop:"Eval",name:"Eval",pkg:"",typ:$funcType([AO],[$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];KH.init("",[{prop:"X",name:"X",embedded:false,exported:true,typ:E,tag:""}]);NotExprgo/build/constraint.AMgo/build/constraint.AOgo/build/constraint.Exprgo/build/constraint.NotExpr  J��J=$pkg.AndExpr=$newType(0,$kindStruct,"constraint.AndExpr",true,"go/build/constraint",true,function(X_,Y_){this.$val=this;if(arguments.length===0){this.X=$ifaceNil;this.Y=$ifaceNil;return;}this.X=X_;this.Y=Y_;});��AF.methods=[{prop:"isExpr",name:"isExpr",pkg:"go/build/constraint",typ:$funcType([],[],false)},{prop:"Eval",name:"Eval",pkg:"",typ:$funcType([AO],[$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];��J.init("",[{prop:"X",name:"X",embedded:false,exported:true,typ:E,tag:""},{prop:"Y",name:"Y",embedded:false,exported:true,typ:E,tag:""}]);AndExprgo/build/constraint.AFgo/build/constraint.AOgo/build/constraint.AndExprgo/build/constraint.Expr  M��M=$pkg.OrExpr=$newType(0,$kindStruct,"constraint.OrExpr",true,"go/build/constraint",true,function(X_,Y_){this.$val=this;if(arguments.length===0){this.X=$ifaceNil;this.Y=$ifaceNil;return;}this.X=X_;this.Y=Y_;});��AG.methods=[{prop:"isExpr",name:"isExpr",pkg:"go/build/constraint",typ:$funcType([],[],false)},{prop:"Eval",name:"Eval",pkg:"",typ:$funcType([AO],[$Bool],false)},{prop:"String",name:"String",pkg:"",typ:$funcType([],[$String],false)}];��M.init("",[{prop:"X",name:"X",embedded:false,exported:true,typ:E,tag:""},{prop:"Y",name:"Y",embedded:false,exported:true,typ:E,tag:""}]);OrExprgo/build/constraint.AGgo/build/constraint.AOgo/build/constraint.Exprgo/build/constraint.OrExpr  P��P=$pkg.SyntaxError=$newType(0,$kindStruct,"constraint.SyntaxError",true,"go/build/constraint",true,function(Offset_,Err_){this.$val=this;if(arguments.length===0){this.Offset=0;this.Err="";return;}this.Offset=Offset_;this.Err=Err_;});RAH.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];��P.init("",[{prop:"Offset",name:"Offset",embedded:false,exported:true,typ:$Int,tag:""},{prop:"Err",name:"Err",embedded:false,exported:true,typ:$String,tag:""}]);SyntaxErrorgo/build/constraint.AHgo/build/constraint.SyntaxError  U�3U=$pkg.exprParser=$newType(0,$kindStruct,"constraint.exprParser",true,"go/build/constraint",false,function(s_,i_,tok_,isTag_,pos_){this.$val=this;if(arguments.length===0){this.s="";this.i=0;this.tok="";this.isTag=false;this.pos=0;return;}this.s=s_;this.i=i_;this.tok=tok_;this.isTag=isTag_;this.pos=pos_;});��AP.methods=[{prop:"or",name:"or",pkg:"go/build/constraint",typ:$funcType([],[E],false)},{prop:"and",name:"and",pkg:"go/build/constraint",typ:$funcType([],[E],false)},{prop:"not",name:"not",pkg:"go/build/constraint",typ:$funcType([],[E],false)},{prop:"atom",name:"atom",pkg:"go/build/constraint",typ:$funcType([],[E],false)},{prop:"lex",name:"lex",pkg:"go/build/constraint",typ:$funcType([],[],false)}];��U.init("go/build/constraint",[{prop:"s",name:"s",embedded:false,exported:false,typ:$String,tag:""},{prop:"i",name:"i",embedded:false,exported:false,typ:$Int,tag:""},{prop:"tok",name:"tok",embedded:false,exported:false,typ:$String,tag:""},{prop:"isTag",name:"isTag",embedded:false,exported:false,typ:$Bool,tag:""},{prop:"pos",name:"pos",embedded:false,exported:false,typ:$Int,tag:""}]);
exprParsergo/build/constraint.APgo/build/constraint.Exprgo/build/constraint.exprParser  AFAF=$ptrType(J);AFgo/build/constraint.AndExpr  AGAG=$ptrType(M);AGgo/build/constraint.OrExpr  AHAH=$ptrType(P);AHgo/build/constraint.SyntaxError  AIAI=$sliceType(E);AIgo/build/constraint.Expr  AJAJ=$sliceType(AI);AJgo/build/constraint.AI  AKAK=$sliceType(AJ);AKgo/build/constraint.AJ  ALAL=$ptrType(F);ALgo/build/constraint.TagExpr  AMAM=$ptrType(H);AMgo/build/constraint.NotExpr  ANAN=$sliceType($String);AN  AO&AO=$funcType([$String],[$Bool],false);AO  APAP=$ptrType(U);APgo/build/constraint.exprParser  QerrNotConstraint  AA
errComplex  '  �Q=A.New("not a build constraint");
errors.New$go/build/constraint.errNotConstraint  <  ,�AA=A.New("expression too complex for // +build lines");
errors.Newgo/build/constraint.errComplex %(*go/build/constraint.TagExpr).isExpr pF.ptr.prototype.isExpr=function(){var a;a=this;    };F.prototype.isExpr=function(){return this.$val.isExpr();};TagExprisExpr~go/build/constraint.TagExpr #(*go/build/constraint.TagExpr).Eval �yF.ptr.prototype.Eval=function(a){var{a,b,c,d,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b=this;  �c=a(b.Tag);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;$s=2;case 2:return d;    }return;}var $f={$blk:F.ptr.prototype.Eval,$c:true,$r,a,b,c,d,$s};return $f;};F.prototype.Eval=function(a){return this.$val.Eval(a);};TagExprgo/build/constraint.TagExpr %(*go/build/constraint.TagExpr).String ��F.ptr.prototype.String=function(){var a;a=this;  �return a.Tag;    };F.prototype.String=function(){return this.$val.String();};TagExprgo/build/constraint.TagExpr go/build/constraint.taggo/build/constrainttag G4G=function(a){var a;  �return new F.ptr(a);    };taggo/build/constraint.TagExprgo/build/constraint.tag %(*go/build/constraint.NotExpr).isExpr pH.ptr.prototype.isExpr=function(){var a;a=this;    };H.prototype.isExpr=function(){return this.$val.isExpr();};NotExprisExpr~go/build/constraint.NotExpr #(*go/build/constraint.NotExpr).Eval �}H.ptr.prototype.Eval=function(a){var{a,b,c,d,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b=this;  �c=b.X.Eval(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=!c;$s=2;case 2:return d;    }return;}var $f={$blk:H.ptr.prototype.Eval,$c:true,$r,a,b,c,d,$s};return $f;};H.prototype.Eval=function(a){return this.$val.Eval(a);};NotExprgo/build/constraint.NotExpr %(*go/build/constraint.NotExpr).String ��H.ptr.prototype.String=function(){var{a,b,c,d,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �b=a.X.String();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  
d=a.X;    if($assertType(d,AF,true)[1]||$assertType(d,AG,true)[1]){  9c="("+c+")";    }  O$s=-1;return"!"+c;    }return;}var $f={$blk:H.ptr.prototype.String,$c:true,$r,a,b,c,d,$s};return $f;};H.prototype.String=function(){return this.$val.String();};NotExprgo/build/constraint.AFgo/build/constraint.AGgo/build/constraint.AndExprgo/build/constraint.NotExprgo/build/constraint.OrExpr go/build/constraint.notgo/build/constraintnot I4I=function(a){var a;  yreturn new H.ptr(a);    };notgo/build/constraint.NotExprgo/build/constraint.not %(*go/build/constraint.AndExpr).isExpr pJ.ptr.prototype.isExpr=function(){var a;a=this;    };J.prototype.isExpr=function(){return this.$val.isExpr();};AndExprisExpr~go/build/constraint.AndExpr #(*go/build/constraint.AndExpr).Eval ��J.ptr.prototype.Eval=function(a){var{a,b,c,d,e,f,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b=this;  	xc=b.X.Eval(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  	�e=b.Y.Eval(a);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  	�$s=-1;return d&&f;    }return;}var $f={$blk:J.ptr.prototype.Eval,$c:true,$r,a,b,c,d,e,f,$s};return $f;};J.prototype.Eval=function(a){return this.$val.Eval(a);};AndExprgo/build/constraint.AndExpr %(*go/build/constraint.AndExpr).String ��J.ptr.prototype.String=function(){var{a,b,c,d,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  	�b=K(a.X);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=K(a.Y);$s=2;case 2:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=b+" && "+c;$s=3;case 3:return d;    }return;}var $f={$blk:J.ptr.prototype.String,$c:true,$r,a,b,c,d,$s};return $f;};J.prototype.String=function(){return this.$val.String();};AndExprgo/build/constraint.AndExprgo/build/constraint.andArg go/build/constraint.andArggo/build/constraintandArg K�`K=function(a){var{a,b,c,d,e,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  
'b=a.String();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  
;d=$assertType(a,AG,true);e=d[1];    if(e){  
Xc="("+c+")";    }  
n$s=-1;return c;    }return;}var $f={$blk:K,$c:true,$r,a,b,c,d,e,$s};return $f;};andArggo/build/constraint.AGgo/build/constraint.andArg go/build/constraint.andgo/build/constraintand L:L=function(a,b){var a,b;  
�return new J.ptr(a,b);    };andgo/build/constraint.AndExprgo/build/constraint.and $(*go/build/constraint.OrExpr).isExpr pM.ptr.prototype.isExpr=function(){var a;a=this;    };M.prototype.isExpr=function(){return this.$val.isExpr();};OrExprisExpr~go/build/constraint.OrExpr "(*go/build/constraint.OrExpr).Eval ��M.ptr.prototype.Eval=function(a){var{a,b,c,d,e,f,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b=this;  �c=b.X.Eval(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;  �e=b.Y.Eval(a);$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  �$s=-1;return d||f;    }return;}var $f={$blk:M.ptr.prototype.Eval,$c:true,$r,a,b,c,d,e,f,$s};return $f;};M.prototype.Eval=function(a){return this.$val.Eval(a);};OrExprgo/build/constraint.OrExpr $(*go/build/constraint.OrExpr).String ��M.ptr.prototype.String=function(){var{a,b,c,d,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �b=N(a.X);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=N(a.Y);$s=2;case 2:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=b+" || "+c;$s=3;case 3:return d;    }return;}var $f={$blk:M.ptr.prototype.String,$c:true,$r,a,b,c,d,$s};return $f;};M.prototype.String=function(){return this.$val.String();};OrExprgo/build/constraint.OrExprgo/build/constraint.orArg go/build/constraint.orArggo/build/constraintorArg N�`N=function(a){var{a,b,c,d,e,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  ?b=a.String();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  Sd=$assertType(a,AF,true);e=d[1];    if(e){  qc="("+c+")";    }  �$s=-1;return c;    }return;}var $f={$blk:N,$c:true,$r,a,b,c,d,e,$s};return $f;};orArggo/build/constraint.AFgo/build/constraint.orArg go/build/constraint.orgo/build/constraintor O:O=function(a,b){var a,b;  �return new M.ptr(a,b);    };orgo/build/constraint.OrExprgo/build/constraint.or ((*go/build/constraint.SyntaxError).Error P.ptr.prototype.Error=function(){var a;a=this;  �return a.Err;    };P.prototype.Error=function(){return this.$val.Error();};SyntaxErrorgo/build/constraint.SyntaxError go/build/constraint.Parsego/build/constraintParse R�0R=function(a){var{a,b,c,d,e,f,g,h,i,j,k,l,m,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  �c=T(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];  �if(e){$s=2;continue;}$s=3;continue;    case 2:  �f=V(d);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;$s=5;case 5:return g;    case 3:  i=X(a);$s=6;case 6:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;j=h[0];k=h[1];  if(k){$s=7;continue;}$s=8;continue;    case 7:  ;l=Y(j);$s=9;case 9:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}m=[l,$ifaceNil];$s=10;case 10:return m;    case 8:  d$s=-1;return[$ifaceNil,Q];    }return;}var $f={$blk:R,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,$s};return $f;};$pkg.Parse=R;Parsego/build/constraint.Parse$go/build/constraint.errNotConstraintgo/build/constraint.parseExpr&go/build/constraint.parsePlusBuildExpr go/build/constraint.splitGoBuild"go/build/constraint.splitPlusBuild go/build/constraint.IsGoBuildgo/build/constraint	IsGoBuild S�'S=function(a){var{a,b,c,d,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  Ic=T(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  f$s=-1;return d;    }return;}var $f={$blk:S,$c:true,$r,a,b,c,d,$s};return $f;};$pkg.IsGoBuild=S;	IsGoBuildgo/build/constraint.IsGoBuild go/build/constraint.splitGoBuild  go/build/constraint.splitGoBuildgo/build/constraintsplitGoBuild T�JT=function(a){var{a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b="";c=false;    if(a.length>0&&(a.charCodeAt((a.length-1>>0))===10)){  �a=$substring(a,0,(a.length-1>>0));    }    if(B.Contains(a,"\n")){    d="";e=false;b=d;c=e;$s=-1;return[b,c];    }    if(!B.HasPrefix(a,"//go:build")){    f="";g=false;b=f;c=g;$s=-1;return[b,c];    }  �h=B.TrimSpace(a);$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}a=h;  �a=$substring(a,10);  �i=B.TrimSpace(a);$s=2;case 2:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}j=i;    if((a.length===j.length)&&!(a==="")){    k="";l=false;b=k;c=l;$s=-1;return[b,c];    }    m=j;n=true;b=m;c=n;$s=-1;return[b,c];    }return;}var $f={$blk:T,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s};return $f;};splitGoBuild go/build/constraint.splitGoBuildstrings.Containsstrings.HasPrefixstrings.TrimSpace go/build/constraint.parseExprgo/build/constraint	parseExpr V��V=function(a){var{a,b,c,d,e,f,g,h,$s,$deferred,$r,$c}=$restore(this,{a});$s=$s||0;var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$curGoroutine.deferStack.push($deferred);b=[b];c=$ifaceNil;b[0]=$ifaceNil;  �$deferred.push([(function(b){return function(){var d,e,f,g;  �d=$recover();    if(!($interfaceIsEqual(d,$ifaceNil))){  �e=$assertType(d,AH,true);f=e[0];g=e[1];    if(g){  b[0]=f;  (return;    }  7$panic(d);    }    };})(b),[]]);  rd=new U.ptr(a,0,"",false,0);  �e=d.or();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}c=e;    if(!(d.tok==="")){  �$panic(new P.ptr(d.pos,"unexpected token "+d.tok));    }    f=c;g=$ifaceNil;c=f;b[0]=g;h=[c,b[0]];$s=2;case 2:return h;    }return;}}catch(err){$err=err;$s=-1;}finally{$callDeferred($deferred,$err);if(!$curGoroutine.asleep){return[c,b[0]];}if($curGoroutine.asleep){var $f={$blk:V,$c:true,$r,a,b,c,d,e,f,g,h,$s,$deferred};return $f;}}};	parseExprgo/build/constraint.AHgo/build/constraint.SyntaxErrorgo/build/constraint.exprParsergo/build/constraint.or~go/build/constraint.parseExpr $(*go/build/constraint.exprParser).or �zU.ptr.prototype.or=function(){var{a,b,c,d,e,f,g,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �b=a.and();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  �case 2:if(!(a.tok==="||")){$s=3;continue;}  �d=c;e=a.and();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;g=O(d,f);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}c=g;    $s=2;continue;case 3:  	$s=-1;return c;    }return;}var $f={$blk:U.ptr.prototype.or,$c:true,$r,a,b,c,d,e,f,g,$s};return $f;};U.prototype.or=function(){return this.$val.or();};
exprParseror~go/build/constraint.and~go/build/constraint.exprParsergo/build/constraint.or %(*go/build/constraint.exprParser).and �~U.ptr.prototype.and=function(){var{a,b,c,d,e,f,g,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �b=a.not();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=b;  �case 2:if(!(a.tok==="&&")){$s=3;continue;}  d=c;e=a.not();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;g=L(d,f);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}c=g;    $s=2;continue;case 3:  $s=-1;return c;    }return;}var $f={$blk:U.ptr.prototype.and,$c:true,$r,a,b,c,d,e,f,g,$s};return $f;};U.prototype.and=function(){return this.$val.and();};
exprParserand~go/build/constraint.andgo/build/constraint.exprParsergo/build/constraint.not~ %(*go/build/constraint.exprParser).not ��U.ptr.prototype.not=function(){var{a,b,c,d,e,f,$s,$r,$c}=$restore(this,{});$s=$s||0;s:while(true){switch($s){case 0:a=this;  �a.lex();  �if(a.tok==="!"){$s=1;continue;}$s=2;continue;    case 1:   a.lex();    if(a.tok==="!"){  $panic(new P.ptr(a.pos,"double negation not allowed"));    }  lb=a.atom();$s=3;case 3:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}c=I(b);$s=4;case 4:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;$s=5;case 5:return d;    case 2:  �e=a.atom();$s=6;case 6:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;$s=7;case 7:return f;    }return;}var $f={$blk:U.ptr.prototype.not,$c:true,$r,a,b,c,d,e,f,$s};return $f;};U.prototype.not=function(){return this.$val.not();};
exprParsernot~go/build/constraint.SyntaxErrorgo/build/constraint.atom~go/build/constraint.exprParsergo/build/constraint.lex~go/build/constraint.not &(*go/build/constraint.exprParser).atom ��U.ptr.prototype.atom=function(){var{a,b,c,d,e,f,g,$s,$deferred,$r,$c}=$restore(this,{});$s=$s||0;var $err=null;try{s:while(true){switch($s){case 0:$deferred=[];$curGoroutine.deferStack.push($deferred);a=this;  �if(a.tok==="("){$s=1;continue;}$s=2;continue;    case 1:  �b=a.pos;  �$deferred.push([(function(){var c,d,e,f;  �c=$recover();    if(!($interfaceIsEqual(c,$ifaceNil))){  �d=$assertType(c,AH,true);e=d[0];f=d[1];    if(f&&e.Err==="unexpected end of expression"){  .e.Err="missing close paren";    }  V$panic(c);    }    }),[]]);  lc=a.or();$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}d=c;    if(!(a.tok===")")){  �$panic(new P.ptr(b,"missing close paren"));    }  �a.lex();  �e=d;$s=4;case 4:return e;    case 2:    if(!a.isTag){    if(a.tok===""){  $panic(new P.ptr(a.pos,"unexpected end of expression"));    }  \$panic(new P.ptr(a.pos,"unexpected token "+a.tok));    }  �f=a.tok;  �a.lex();  �g=G(f);$s=5;case 5:return g;    }return;}}catch(err){$err=err;$s=-1;return $ifaceNil;}finally{$callDeferred($deferred,$err);if($curGoroutine.asleep){var $f={$blk:U.ptr.prototype.atom,$c:true,$r,a,b,c,d,e,f,g,$s,$deferred};return $f;}}};U.prototype.atom=function(){return this.$val.atom();};
exprParseratom~go/build/constraint.AHgo/build/constraint.SyntaxErrorgo/build/constraint.exprParsergo/build/constraint.lex~go/build/constraint.or~go/build/constraint.tag %(*go/build/constraint.exprParser).lex �
U.ptr.prototype.lex=function(){var a,b,c,d,e,f,g,h,i,j;a=this;  ea.isTag=false;  vwhile(true){if(!(a.i<a.s.length&&((a.s.charCodeAt(a.i)===32)||(a.s.charCodeAt(a.i)===9)))){break;}  �a.i=a.i+(1)>>0;    }    if(a.i>=a.s.length){  �a.tok="";  �a.pos=a.i;  �return;    }    b=a.s.charCodeAt(a.i);    if((b===(40))||(b===(41))||(b===(33))){   &a.pos=a.i;   4a.i=a.i+(1)>>0;   <a.tok=$substring(a.s,a.pos,a.i);   Ureturn;    }else if((b===(38))||(b===(124))){    if((a.i+1>>0)>=a.s.length||!((a.s.charCodeAt((a.i+1>>0))===a.s.charCodeAt(a.i)))){   �$panic(new P.ptr(a.i,"invalid syntax at "+($encodeRune(((a.s.charCodeAt(a.i)>>0))))));    }   �a.pos=a.i;  !a.i=a.i+(2)>>0;  !a.tok=$substring(a.s,a.pos,a.i);  !0return;    }  !<c=$substring(a.s,a.i);  !Nd=c;e=0;while(true){if(!(e<d.length)){break;}f=$decodeRune(d,e);g=e;h=f[0];    if(!C.IsLetter(h)&&!C.IsDigit(h)&&!((h===95))&&!((h===46))){  !�c=$substring(c,0,g);  !�break;    }    e+=f[1];}    if(c===""){  !�i=D.DecodeRuneInString($substring(a.s,a.i));j=i[0];  "$panic(new P.ptr(a.i,"invalid syntax at "+($encodeRune(j))));    }  "^a.pos=a.i;  "ka.i=a.i+(c.length)>>0;  "|a.tok=$substring(a.s,a.pos,a.i);  "�a.isTag=true;  "�return;    };U.prototype.lex=function(){return this.$val.lex();};
exprParserlex~go/build/constraint.SyntaxErrorgo/build/constraint.exprParserunicode.IsDigitunicode.IsLetterunicode/utf8.DecodeRuneInString go/build/constraint.IsPlusBuildgo/build/constraintIsPlusBuild W�)W=function(a){var{a,b,c,d,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  #vc=X(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  #�$s=-1;return d;    }return;}var $f={$blk:W,$c:true,$r,a,b,c,d,$s};return $f;};$pkg.IsPlusBuild=W;IsPlusBuildgo/build/constraint.IsPlusBuild"go/build/constraint.splitPlusBuild "go/build/constraint.splitPlusBuildgo/build/constraintsplitPlusBuild X��X=function(a){var{a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:b="";c=false;    if(a.length>0&&(a.charCodeAt((a.length-1>>0))===10)){  %"a=$substring(a,0,(a.length-1>>0));    }    if(B.Contains(a,"\n")){    d="";e=false;b=d;c=e;$s=-1;return[b,c];    }    if(!B.HasPrefix(a,"//")){    f="";g=false;b=f;c=g;$s=-1;return[b,c];    }  %�a=$substring(a,2);  &h=B.TrimSpace(a);$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}a=h;    if(!B.HasPrefix(a,"+build")){    i="";j=false;b=i;c=j;$s=-1;return[b,c];    }  &la=$substring(a,6);  '�k=B.TrimSpace(a);$s=2;case 2:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}l=k;    if((a.length===l.length)&&!(a==="")){    m="";n=false;b=m;c=n;$s=-1;return[b,c];    }    o=l;p=true;b=o;c=p;$s=-1;return[b,c];    }return;}var $f={$blk:X,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s};return $f;};splitPlusBuild"go/build/constraint.splitPlusBuildstrings.Containsstrings.HasPrefixstrings.TrimSpace &go/build/constraint.parsePlusBuildExprgo/build/constraintparsePlusBuildExpr Y��Y=function(a){var{a,b,c,d,e,f,g,h,i,j,k,l,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  (�b=$ifaceNil;  (�d=B.Fields(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=0;case 2:if(!(e<c.$length)){$s=3;continue;}f=((e<0||e>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+e]);  (�g=$ifaceNil;  (�h=B.Split(f,",");i=0;while(true){if(!(i<h.$length)){break;}j=((i<0||i>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+i]);  ) k=$ifaceNil;  ).l=false;    if(B.HasPrefix(j,"!!")||j==="!"){  )nk=G("ignore");    }else{    if(B.HasPrefix(j,"!")){  )�l=true;  )�j=$substring(j,1);    }    if(Z(j)){  )�k=G(j);    }else{  *k=G("ignore");    }    if(l){  *Hk=I(k);    }    }    if($interfaceIsEqual(g,$ifaceNil)){  *sg=k;    }else{  *�g=L(g,k);    }    i++;}    if($interfaceIsEqual(b,$ifaceNil)){  *�b=g;    }else{  *�b=O(b,g);    }    e++;$s=2;continue;case 3:    if($interfaceIsEqual(b,$ifaceNil)){  *�b=G("ignore");    }  +$s=-1;return b;    }return;}var $f={$blk:Y,$c:true,$r,a,b,c,d,e,f,g,h,i,j,k,l,$s};return $f;};parsePlusBuildExpr	go/build/constraint.andgo/build/constraint.isValidTaggo/build/constraint.notgo/build/constraint.or&go/build/constraint.parsePlusBuildExprgo/build/constraint.tagstrings.Fieldsstrings.HasPrefixstrings.Split go/build/constraint.isValidTaggo/build/constraint
isValidTag Z�Z=function(a){var a,b,c,d,e;    if(a===""){  +�return false;    }  ,	b=a;c=0;while(true){if(!(c<b.length)){break;}d=$decodeRune(b,c);e=d[0];    if(!C.IsLetter(e)&&!C.IsDigit(e)&&!((e===95))&&!((e===46))){  ,preturn false;    }    c+=d[1];}  ,�return true;    };
isValidTaggo/build/constraint.isValidTagunicode.IsDigitunicode.IsLetter "go/build/constraint.PlusBuildLinesgo/build/constraintPlusBuildLines AB�	�AB=function(a){var{a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r,$c}=$restore(this,{a});$s=$s||0;s:while(true){switch($s){case 0:  .�a=AC(a,false);  /Mb=AK.nil;  /_c=AD(AI.nil,a);d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  /�f=AJ.nil;  /�g=AE(AI.nil,e);h=0;while(true){if(!(h<g.$length)){break;}i=((h<0||h>=g.$length)?($throwRuntimeError("index out of range"),undefined):g.$array[g.$offset+h]);  /�j=AI.nil;  /�k=AD(AI.nil,i);l=0;while(true){if(!(l<k.$length)){break;}m=((l<0||l>=k.$length)?($throwRuntimeError("index out of range"),undefined):k.$array[k.$offset+l]);  0n=m;    if($assertType(n,AL,true)[1]||$assertType(n,AM,true)[1]){  0Mj=$append(j,m);    }else{  0x$s=-1;return[AN.nil,AA];    }    l++;}  0�f=$append(f,j);    h++;}  0�b=$append(b,f);    d++;}  1�o=0;  1�p=b;q=0;while(true){if(!(q<p.$length)){break;}r=((q<0||q>=p.$length)?($throwRuntimeError("index out of range"),undefined):p.$array[p.$offset+q]);    if(o<r.$length){  1�o=r.$length;    }    q++;}    if(o===1){  1�s=AI.nil;  2t=b;u=0;while(true){if(!(u<t.$length)){break;}v=((u<0||u>=t.$length)?($throwRuntimeError("index out of range"),undefined):t.$array[t.$offset+u]);  2s=$appendSlice(s,(0>=v.$length?($throwRuntimeError("index out of range"),undefined):v.$array[v.$offset+0]));    u++;}  2Cb=new AK([new AJ([s])]);    }  2�w=AN.nil;  2�x=b;y=0;case 1:if(!(y<x.$length)){$s=2;continue;}z=((y<0||y>=x.$length)?($throwRuntimeError("index out of range"),undefined):x.$array[x.$offset+y]);  2�aa="// +build";  2�ab=z;ac=0;case 3:if(!(ac<ab.$length)){$s=4;continue;}ad=((ac<0||ac>=ab.$length)?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+ac]);  2�ae="";  2�af=ad;ag=0;case 5:if(!(ag<af.$length)){$s=6;continue;}ah=ag;ai=((ag<0||ag>=af.$length)?($throwRuntimeError("index out of range"),undefined):af.$array[af.$offset+ag]);    if(ah>0){  3"ae=ae+(",");    }  3:aj=ai.String();$s=7;case 7:if($c){$c=false;aj=aj.$blk();}if(aj&&aj.$blk!==undefined){break s;}ae=ae+(aj);    ag++;$s=5;continue;case 6:  3Yaa=aa+(" "+ae);    ac++;$s=3;continue;case 4:  3tw=$append(w,aa);    y++;$s=1;continue;case 2:  3�$s=-1;return[w,$ifaceNil];    }return;}var $f={$blk:AB,$c:true,$r,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s};return $f;};$pkg.PlusBuildLines=AB;PlusBuildLinesgo/build/constraint.AIgo/build/constraint.AJgo/build/constraint.AKgo/build/constraint.ALgo/build/constraint.AMgo/build/constraint.ANgo/build/constraint.Exprgo/build/constraint.NotExpr"go/build/constraint.PlusBuildLinesgo/build/constraint.TagExpr"go/build/constraint.appendSplitAnd!go/build/constraint.appendSplitOrgo/build/constraint.errComplexgo/build/constraint.pushNot go/build/constraint.pushNotgo/build/constraintpushNot AC�*AC=function(a,b){var a,b,c,d,e,f,g,h,i,j,k,l,m,n;  4�c=a;    if($assertType(c,AM,true)[1]){    e=c.$val;  4�i=$assertType(e.X,AL,true);j=i[1];    if(j&&!b){  5return e;    }  5&return AC(e.X,!b);    }else if($assertType(c,AL,true)[1]){    f=c.$val;    if(b){  5^return new H.ptr(f);    }  5zreturn f;    }else if($assertType(c,AF,true)[1]){    g=c.$val;  5�k=AC(g.X,b);  5�l=AC(g.Y,b);    if(b){  5�return O(k,l);    }    if($interfaceIsEqual(k,g.X)&&$interfaceIsEqual(l,g.Y)){  6return g;    }  6return L(k,l);    }else if($assertType(c,AG,true)[1]){    h=c.$val;  6?m=AC(h.X,b);  6Yn=AC(h.Y,b);    if(b){  6return L(m,n);    }    if($interfaceIsEqual(m,h.X)&&$interfaceIsEqual(n,h.Y)){  6�return h;    }  6�return O(m,n);    }else{    d=c;  4�return d;    }    };pushNotgo/build/constraint.AFgo/build/constraint.AGgo/build/constraint.ALgo/build/constraint.AMgo/build/constraint.NotExprgo/build/constraint.andgo/build/constraint.orgo/build/constraint.pushNot "go/build/constraint.appendSplitAndgo/build/constraintappendSplitAnd AD��AD=function(a,b){var a,b,c,d,e;  7�c=$assertType(b,AF,true);d=c[0];e=c[1];    if(e){  7�a=AD(a,d.X);  7�a=AD(a,d.Y);  8return a;    }  8!return $append(a,b);    };appendSplitAndgo/build/constraint.AF"go/build/constraint.appendSplitAnd !go/build/constraint.appendSplitOrgo/build/constraintappendSplitOr AE��AE=function(a,b){var a,b,c,d,e;  9c=$assertType(b,AG,true);d=c[0];e=c[1];    if(e){  9$a=AE(a,d.X);  9Fa=AE(a,d.Y);  9hreturn a;    }  9xreturn $append(a,b);    };appendSplitOrgo/build/constraint.AG!go/build/constraint.appendSplitOr �l{"Base":14738,"Files":[{"Name":"/usr/local/go/src/go/build/constraint/expr.go","Base":1,"Size":14736,"Lines":[0,55,109,159,160,243,353,356,483,582,632,726,745,746,755,765,776,787,803,805,806,855,932,954,1008,1063,1080,1081,1140,1209,1262,1299,1300,1375,1441,1451,1453,1454,1502,1524,1577,1579,1580,1610,1611,1667,1685,1687,1688,1724,1738,1740,1741,1792,1793,1856,1878,1886,1888,1889,1919,1920,1976,1998,2000,2001,2037,2056,2077,2102,2122,2125,2141,2143,2144,2189,2190,2238,2260,2271,2273,2274,2304,2305,2361,2422,2443,2464,2483,2485,2486,2522,2565,2567,2568,2597,2614,2645,2665,2668,2678,2680,2681,2708,2731,2733,2734,2781,2802,2813,2815,2816,2845,2846,2901,2962,2983,3004,3023,3025,3026,3061,3102,3104,3105,3133,3150,3182,3202,3205,3215,3217,3218,3244,3266,3268,3269,3339,3365,3429,3468,3470,3471,3510,3524,3526,3527,3587,3588,3691,3744,3784,3825,3850,3853,3896,3935,3938,3968,3970,3971,4051,4132,4167,4196,4207,4209,4210,4311,4414,4470,4541,4590,4618,4621,4656,4675,4678,4679,4724,4743,4746,4747,4779,4812,4813,4895,4979,5031,5103,5136,5179,5198,5201,5202,5221,5223,5224,5285,5310,5336,5373,5374,5407,5419,5464,5466,5467,5519,5569,5585,5617,5655,5667,5678,5683,5734,5738,5743,5744,5771,5783,5801,5872,5875,5890,5892,5893,5936,5994,6059,6092,6106,6127,6148,6151,6161,6163,6164,6208,6266,6331,6365,6379,6400,6422,6425,6435,6437,6438,6468,6526,6591,6625,6634,6653,6663,6683,6757,6761,6784,6787,6804,6806,6807,6859,6909,6974,7009,7042,7061,7076,7093,7126,7208,7243,7249,7262,7267,7273,7287,7307,7371,7375,7385,7396,7399,7400,7415,7434,7509,7513,7584,7587,7601,7610,7627,7629,7630,7692,7738,7786,7870,7944,8006,8035,8052,8115,8123,8126,8148,8161,8175,8184,8187,8206,8227,8241,8249,8274,8283,8284,8300,8351,8439,8443,8457,8468,8493,8502,8505,8506,8524,8549,8624,8641,8650,8654,8657,8673,8718,8792,8795,8796,8809,8826,8850,8866,8874,8876,8877,8958,9039,9076,9107,9118,9120,9121,9223,9325,9383,9454,9503,9531,9534,9569,9588,9591,9592,9629,9648,9651,9676,9738,9770,9771,9812,9831,9834,9863,9864,9942,10022,10070,10141,10174,10217,10236,10239,10240,10259,10261,10262,10353,10397,10409,10456,10469,10520,10534,10550,10601,10623,10635,10672,10688,10714,10720,10745,10763,10776,10799,10805,10818,10834,10840,10845,10862,10872,10884,10902,10907,10911,10927,10936,10947,10963,10967,10970,10985,11005,11008,11018,11020,11021,11082,11136,11200,11236,11253,11268,11271,11297,11372,11388,11392,11395,11408,11410,11411,11485,11486,11589,11704,11752,11853,11930,12015,12038,12039,12103,12125,12170,12190,12237,12256,12306,12330,12359,12389,12402,12430,12436,12441,12470,12474,12504,12507,12508,12570,12634,12674,12686,12714,12737,12756,12760,12763,12780,12798,12827,12860,12864,12893,12896,12897,12927,12947,12975,12997,13024,13040,13069,13084,13103,13109,13136,13141,13165,13169,13199,13202,13203,13222,13224,13225,13298,13346,13428,13466,13490,13500,13517,13528,13544,13587,13599,13603,13631,13647,13658,13683,13687,13698,13714,13740,13766,13777,13798,13802,13832,13844,13848,13869,13884,13910,13936,13947,13969,13973,14003,14015,14019,14039,14042,14044,14045,14133,14198,14248,14280,14315,14350,14364,14367,14391,14393,14394,14481,14545,14594,14625,14659,14693,14707,14710,14734],"Infos":null}]}
   گ��8T� < 