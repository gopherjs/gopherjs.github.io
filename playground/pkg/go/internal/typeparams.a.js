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
GoLinkname�� Implementation�� 	Reference��   �2��go/internal/typeparams
typeparamsgo/ast��i �� Nodego/ast	FieldListnlistExprnodeparamsexprEndPosgo/tokenOpeningListFieldClosingf	NumFieldsexprNodeIsValidpDocCommentGroupNamesIdentTypeTagBasicLitCommentgTextNamePosNameObjObjectx
IsExportedidStringValuePosKindTokenValueSlashcObjKindDeclDataobjtok
Precedenceop	IsLiteral
IsOperator	IsKeywordkind
typeparamsDisallowParsingEnabledGet
IsListExprPackExprSet
UnpackExprasttokenC �@   C    /F   ,  2 F  ,     JF  M  J /F  #, (Z  JF  /J  g  8<  4   t 8   tT w R�� Et   M�   Xt  ///T � 8 `�   t 4 `�   t b `�    , l  T �T  u }t     �� ��� ��� �   ��   �J   ��   ��  ��T � 8 `�   t 4 `�   t ��� M�  ���T � 8 ��   t 4 ��   t � ��    �� �t   �   ��  �����T � 8 ��   t 4 ��   t l  �   � ��     � ��    �< �t   ��   �  ���T � 8 ��   t 4 ��   t l  �   �t   �  ��T � 8 ��   t 4 ��   t �       ��   �   ��   ��   ��  �T � 8 ��   tT  � ��    � ��    � ��     � ��     � ��    T  � ��    � � ����/�<�I� 
�������R����i����<� 8��� ast	ast = $packages["go/ast"];
��    		$r = ast.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	sliceType#	sliceType = $sliceType(ast.Expr);
	sliceTypego/ast.Expr  ptrType$	ptrType = $ptrType(ast.FieldList);
ptrTypego/ast.FieldList go/internal/typeparams.PackExprgo/internal/typeparamsPackExpr PackExpr�x	PackExpr = function(list) {
		var _1, list;
    		_1 = list.$length;
    		if (_1 === (1)) {
  �			return (0 >= list.$length ? ($throwRuntimeError("index out of range"), undefined) : list.$array[list.$offset + 0]);
    		} else {
  /			$panic(new $String("multiple index expressions are unsupported without type params"));
    		}
    	};
	$pkg.PackExpr = PackExpr;
PackExprgo/internal/typeparams.PackExpr !go/internal/typeparams.UnpackExprgo/internal/typeparams
UnpackExpr 
UnpackExprx	UnpackExpr = function(expr) {
		var expr;
  �		return new sliceType([expr]);
    	};
	$pkg.UnpackExpr = UnpackExpr;

UnpackExprgo/ast.Expr!go/internal/typeparams.UnpackExpr go/internal/typeparams.sliceType !go/internal/typeparams.IsListExprgo/internal/typeparams
IsListExpr 
IsListExprb	IsListExpr = function(n) {
		var n;
  �		return false;
    	};
	$pkg.IsListExpr = IsListExpr;

IsListExpr!go/internal/typeparams.IsListExpr go/internal/typeparams.Getgo/internal/typeparamsGet Get[	Get = function(param) {
		var param;
  		return ptrType.nil;
    	};
	$pkg.Get = Get;
Getgo/ast.FieldListgo/internal/typeparams.Getgo/internal/typeparams.ptrType go/internal/typeparams.Setgo/internal/typeparamsSet SetN	Set = function(node, params) {
		var node, params;
    	};
	$pkg.Set = Set;
Setgo/internal/typeparams.Set ��{"Base":1376,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/go/internal/typeparams/common.go","Base":1,"Size":582,"Lines":[0,55,109,159,160,234,303,318,337,338,416,493,550],"Infos":null},{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/go/internal/typeparams/notypeparams.go","Base":584,"Size":791,"Lines":[0,55,109,159,160,183,205,206,225,226,235,245,247,248,270,271,313,333,342,359,369,441,485,559,562,564,565,609,634,636,637,672,686,688,689,725,737,739,740,789],"Infos":null}]}
 