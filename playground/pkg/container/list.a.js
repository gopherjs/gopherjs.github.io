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
GoLinkname�� Implementation�� 	Reference��   �:���container/listlist�+i �� nextElementprevlistListValueNextePrevrootlenInitlLenFrontBacklazyInitinsertatinsertValuevremovemoveRemove	PushFrontPushBackInsertBeforemarkInsertAfterMoveToFront
MoveToBack
MoveBefore	MoveAfterPushBackListotherPushFrontListNew     %     #   #   (   *      T . # (E   G * (I   K  /    4  %%%% % %%  %     %  %  %    %    %    %     %     % % % % %%%%T e 8 =r   t ? =v    C =x   z I =|   ~ N =�   W =� (� ^�  �  a =� m� ^�  �  o =� (�  �  v =� (� ^�  �  { =� (�  �  � =� m�  �  � =� m�  �  � =� m� ��  �  � =� m� ��  �  � =� (�   � =� (�   � =� (� ��   � =� (� ��   � =� ��   � =� ��  %F    �  -��� Element��	Element = $pkg.Element = $newType(0, $kindStruct, "list.Element", true, "container/list", true, function(next_, prev_, list_, Value_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.next = ptrType$1.nil;
			this.prev = ptrType$1.nil;
			this.list = ptrType.nil;
			this.Value = $ifaceNil;
			return;
		}
		this.next = next_;
		this.prev = prev_;
		this.list = list_;
		this.Value = Value_;
	});
��	ptrType$1.methods = [{prop: "Next", name: "Next", pkg: "", typ: $funcType([], [ptrType$1], false)}, {prop: "Prev", name: "Prev", pkg: "", typ: $funcType([], [ptrType$1], false)}];
��	Element.init("container/list", [{prop: "next", name: "next", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "prev", name: "prev", embedded: false, exported: false, typ: ptrType$1, tag: ""}, {prop: "list", name: "list", embedded: false, exported: false, typ: ptrType, tag: ""}, {prop: "Value", name: "Value", embedded: false, exported: true, typ: $emptyInterface, tag: ""}]);
Elementcontainer/list.Elementcontainer/list.ptrTypecontainer/list.ptrType$1  List�G	List = $pkg.List = $newType(0, $kindStruct, "list.List", true, "container/list", true, function(root_, len_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.root = new Element.ptr(ptrType$1.nil, ptrType$1.nil, ptrType.nil, $ifaceNil);
			this.len = 0;
			return;
		}
		this.root = root_;
		this.len = len_;
	});
��	ptrType.methods = [{prop: "Init", name: "Init", pkg: "", typ: $funcType([], [ptrType], false)}, {prop: "Len", name: "Len", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Front", name: "Front", pkg: "", typ: $funcType([], [ptrType$1], false)}, {prop: "Back", name: "Back", pkg: "", typ: $funcType([], [ptrType$1], false)}, {prop: "lazyInit", name: "lazyInit", pkg: "container/list", typ: $funcType([], [], false)}, {prop: "insert", name: "insert", pkg: "container/list", typ: $funcType([ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "insertValue", name: "insertValue", pkg: "container/list", typ: $funcType([$emptyInterface, ptrType$1], [ptrType$1], false)}, {prop: "remove", name: "remove", pkg: "container/list", typ: $funcType([ptrType$1], [ptrType$1], false)}, {prop: "move", name: "move", pkg: "container/list", typ: $funcType([ptrType$1, ptrType$1], [ptrType$1], false)}, {prop: "Remove", name: "Remove", pkg: "", typ: $funcType([ptrType$1], [$emptyInterface], false)}, {prop: "PushFront", name: "PushFront", pkg: "", typ: $funcType([$emptyInterface], [ptrType$1], false)}, {prop: "PushBack", name: "PushBack", pkg: "", typ: $funcType([$emptyInterface], [ptrType$1], false)}, {prop: "InsertBefore", name: "InsertBefore", pkg: "", typ: $funcType([$emptyInterface, ptrType$1], [ptrType$1], false)}, {prop: "InsertAfter", name: "InsertAfter", pkg: "", typ: $funcType([$emptyInterface, ptrType$1], [ptrType$1], false)}, {prop: "MoveToFront", name: "MoveToFront", pkg: "", typ: $funcType([ptrType$1], [], false)}, {prop: "MoveToBack", name: "MoveToBack", pkg: "", typ: $funcType([ptrType$1], [], false)}, {prop: "MoveBefore", name: "MoveBefore", pkg: "", typ: $funcType([ptrType$1, ptrType$1], [], false)}, {prop: "MoveAfter", name: "MoveAfter", pkg: "", typ: $funcType([ptrType$1, ptrType$1], [], false)}, {prop: "PushBackList", name: "PushBackList", pkg: "", typ: $funcType([ptrType], [], false)}, {prop: "PushFrontList", name: "PushFrontList", pkg: "", typ: $funcType([ptrType], [], false)}];
��	List.init("container/list", [{prop: "root", name: "root", embedded: false, exported: false, typ: Element, tag: ""}, {prop: "len", name: "len", embedded: false, exported: false, typ: $Int, tag: ""}]);
Listcontainer/list.Elementcontainer/list.Listcontainer/list.ptrTypecontainer/list.ptrType$1  ptrType	ptrType = $ptrType(List);
ptrTypecontainer/list.List  	ptrType$1 	ptrType$1 = $ptrType(Element);
	ptrType$1container/list.Element (*container/list.Element).Next �	Element.ptr.prototype.Next = function() {
		var e, p;
		e = this;
  �		p = e.next;
    		if (!(e.list === ptrType.nil) && !(p === e.list.root)) {
  �			return p;
    		}
  		return ptrType$1.nil;
    	};
	Element.prototype.Next = function() { return this.$val.Next(); };
Elementcontainer/list.Elementcontainer/list.Listcontainer/list.ptrTypecontainer/list.ptrType$1 (*container/list.Element).Prev �	Element.ptr.prototype.Prev = function() {
		var e, p;
		e = this;
  l		p = e.prev;
    		if (!(e.list === ptrType.nil) && !(p === e.list.root)) {
  �			return p;
    		}
  �		return ptrType$1.nil;
    	};
	Element.prototype.Prev = function() { return this.$val.Prev(); };
Elementcontainer/list.Elementcontainer/list.ptrTypecontainer/list.ptrType$1 (*container/list.List).Init ��	List.ptr.prototype.Init = function() {
		var l;
		l = this;
  		l.root.next = l.root;
  -		l.root.prev = l.root;
  D		l.len = 0;
  O		return l;
    	};
	List.prototype.Init = function() { return this.$val.Init(); };
Listcontainer/list.List container/list.Newcontainer/listNew New��	New = function() {
  �		return new List.ptr(new Element.ptr(ptrType$1.nil, ptrType$1.nil, ptrType.nil, $ifaceNil), 0).Init();
    	};
	$pkg.New = New;
Newcontainer/list.Elementcontainer/list.Listcontainer/list.Newcontainer/list.ptrTypecontainer/list.ptrType$1 (*container/list.List).Len ��	List.ptr.prototype.Len = function() {
		var l;
		l = this;
  		return l.len;
    	};
	List.prototype.Len = function() { return this.$val.Len(); };
Listcontainer/list.List (*container/list.List).Front ��	List.ptr.prototype.Front = function() {
		var l;
		l = this;
    		if (l.len === 0) {
  �			return ptrType$1.nil;
    		}
  �		return l.root.next;
    	};
	List.prototype.Front = function() { return this.$val.Front(); };
Listcontainer/list.Listcontainer/list.ptrType$1 (*container/list.List).Back ��	List.ptr.prototype.Back = function() {
		var l;
		l = this;
    		if (l.len === 0) {
  D			return ptrType$1.nil;
    		}
  S		return l.root.prev;
    	};
	List.prototype.Back = function() { return this.$val.Back(); };
Listcontainer/list.Listcontainer/list.ptrType$1 (*container/list.List).lazyInit ��	List.ptr.prototype.lazyInit = function() {
		var l;
		l = this;
    		if (l.root.next === ptrType$1.nil) {
  �			l.Init();
    		}
    	};
	List.prototype.lazyInit = function() { return this.$val.lazyInit(); };
List	lazyInit~container/list.Listcontainer/list.ptrType$1 (*container/list.List).insert �D	List.ptr.prototype.insert = function(e, at) {
		var at, e, l;
		l = this;
  	R		e.prev = at;
  	_		e.next = at.next;
  	q		e.prev.next = e;
  	�		e.next.prev = e;
  	�		e.list = l;
  	�		l.len = l.len + (1) >> 0;
  	�		return e;
    	};
	List.prototype.insert = function(e, at) { return this.$val.insert(e, at); };
Listinsert~container/list.List "(*container/list.List).insertValue �	List.ptr.prototype.insertValue = function(v, at) {
		var at, l, v;
		l = this;
  
C		return l.insert(new Element.ptr(ptrType$1.nil, ptrType$1.nil, ptrType.nil, v), at);
    	};
	List.prototype.insertValue = function(v, at) { return this.$val.insertValue(v, at); };
ListinsertValue~container/list.Elementcontainer/list.Listcontainer/list.insert~container/list.ptrTypecontainer/list.ptrType$1 (*container/list.List).remove �Y	List.ptr.prototype.remove = function(e) {
		var e, l;
		l = this;
  
�		e.prev.next = e.next;
  
�		e.next.prev = e.prev;
  		e.next = ptrType$1.nil;
  0		e.prev = ptrType$1.nil;
  T		e.list = ptrType.nil;
  b		l.len = l.len - (1) >> 0;
  k		return e;
    	};
	List.prototype.remove = function(e) { return this.$val.remove(e); };
Listremove~container/list.Listcontainer/list.ptrTypecontainer/list.ptrType$1 (*container/list.List).move �v	List.ptr.prototype.move = function(e, at) {
		var at, e, l;
		l = this;
    		if (e === at) {
  �			return e;
    		}
  �		e.prev.next = e.next;
  		e.next.prev = e.prev;
  		e.prev = at;
  *		e.next = at.next;
  <		e.prev.next = e;
  M		e.next.prev = e;
  _		return e;
    	};
	List.prototype.move = function(e, at) { return this.$val.move(e, at); };
Listmove~container/list.List (*container/list.List).Remove ��	List.ptr.prototype.Remove = function(e) {
		var e, l;
		l = this;
    		if (e.list === l) {
  �			l.remove(e);
    		}
  �		return e.Value;
    	};
	List.prototype.Remove = function(e) { return this.$val.Remove(e); };
Listcontainer/list.Listcontainer/list.remove~  (*container/list.List).PushFront ��	List.ptr.prototype.PushFront = function(v) {
		var l, v;
		l = this;
  i		l.lazyInit();
  w		return l.insertValue(v, l.root);
    	};
	List.prototype.PushFront = function(v) { return this.$val.PushFront(v); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ (*container/list.List).PushBack ��	List.ptr.prototype.PushBack = function(v) {
		var l, v;
		l = this;
  $		l.lazyInit();
  2		return l.insertValue(v, l.root.prev);
    	};
	List.prototype.PushBack = function(v) { return this.$val.PushBack(v); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ #(*container/list.List).InsertBefore �/	List.ptr.prototype.InsertBefore = function(v, mark) {
		var l, mark, v;
		l = this;
    		if (!(mark.list === l)) {
  l			return ptrType$1.nil;
    		}
  �		return l.insertValue(v, mark.prev);
    	};
	List.prototype.InsertBefore = function(v, mark) { return this.$val.InsertBefore(v, mark); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.ptrType$1 "(*container/list.List).InsertAfter �'	List.ptr.prototype.InsertAfter = function(v, mark) {
		var l, mark, v;
		l = this;
    		if (!(mark.list === l)) {
  �			return ptrType$1.nil;
    		}
  1		return l.insertValue(v, mark);
    	};
	List.prototype.InsertAfter = function(v, mark) { return this.$val.InsertAfter(v, mark); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.ptrType$1 "(*container/list.List).MoveToFront �	List.ptr.prototype.MoveToFront = function(e) {
		var e, l;
		l = this;
    		if (!(e.list === l) || l.root.next === e) {
  4			return;
    		}
  x		l.move(e, l.root);
    	};
	List.prototype.MoveToFront = function(e) { return this.$val.MoveToFront(e); };
Listcontainer/list.Listcontainer/list.move~ !(*container/list.List).MoveToBack �		List.ptr.prototype.MoveToBack = function(e) {
		var e, l;
		l = this;
    		if (!(e.list === l) || l.root.prev === e) {
  m			return;
    		}
  �		l.move(e, l.root.prev);
    	};
	List.prototype.MoveToBack = function(e) { return this.$val.MoveToBack(e); };
Listcontainer/list.Listcontainer/list.move~ !(*container/list.List).MoveBefore �.	List.ptr.prototype.MoveBefore = function(e, mark) {
		var e, l, mark;
		l = this;
    		if (!(e.list === l) || e === mark || !(mark.list === l)) {
  �			return;
    		}
  �		l.move(e, mark.prev);
    	};
	List.prototype.MoveBefore = function(e, mark) { return this.$val.MoveBefore(e, mark); };
Listcontainer/list.Listcontainer/list.move~  (*container/list.List).MoveAfter �&	List.ptr.prototype.MoveAfter = function(e, mark) {
		var e, l, mark;
		l = this;
    		if (!(e.list === l) || e === mark || !(mark.list === l)) {
  			return;
    		}
  (		l.move(e, mark);
    	};
	List.prototype.MoveAfter = function(e, mark) { return this.$val.MoveAfter(e, mark); };
Listcontainer/list.Listcontainer/list.move~ #(*container/list.List).PushBackList ��	List.ptr.prototype.PushBackList = function(other) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, i, l, other;
		l = this;
  �		l.lazyInit();
  �		_tmp = other.Len();
		_tmp$1 = other.Front();
		i = _tmp;
		e = _tmp$1;
		while (true) {
			if (!(i > 0)) { break; }
  C			l.insertValue(e.Value, l.root.prev);
  *			_tmp$2 = i - 1 >> 0;
			_tmp$3 = e.Next();
			i = _tmp$2;
			e = _tmp$3;
		}
    	};
	List.prototype.PushBackList = function(other) { return this.$val.PushBackList(other); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ $(*container/list.List).PushFrontList ��	List.ptr.prototype.PushFrontList = function(other) {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, i, l, other;
		l = this;
  "		l.lazyInit();
  4		_tmp = other.Len();
		_tmp$1 = other.Back();
		i = _tmp;
		e = _tmp$1;
		while (true) {
			if (!(i > 0)) { break; }
  w			l.insertValue(e.Value, l.root);
  ^			_tmp$2 = i - 1 >> 0;
			_tmp$3 = e.Prev();
			i = _tmp$2;
			e = _tmp$3;
		}
    	};
	List.prototype.PushFrontList = function(other) { return this.$val.PushFrontList(other); };
Listcontainer/list.Listcontainer/list.insertValue~container/list.lazyInit~ �{"Base":6557,"Files":[{"Name":"/tmp/gopherjs_playground.8jBDQH4ORK/goroot/src/container/list/list.go","Base":1,"Size":6555,"Lines":[0,55,109,159,160,209,212,260,308,341,346,349,362,363,406,428,498,569,639,710,735,756,757,801,813,814,854,873,875,876,922,958,1012,1023,1026,1038,1040,1041,1091,1127,1181,1192,1195,1207,1209,1210,1251,1309,1328,1414,1485,1487,1488,1526,1556,1579,1602,1613,1623,1625,1626,1662,1707,1708,1757,1784,1826,1827,1901,1935,1952,1965,1968,1988,1990,1991,2063,2096,2113,2126,2129,2149,2151,2152,2202,2230,2255,2266,2269,2271,2272,2335,2384,2397,2415,2432,2449,2461,2470,2480,2482,2483,2559,2625,2666,2668,2669,2737,2782,2804,2826,2862,2898,2912,2921,2931,2933,2934,2979,3026,3040,3051,3054,3076,3098,3099,3112,3130,3147,3164,3165,3175,3177,3178,3235,3276,3308,3356,3374,3444,3512,3526,3529,3545,3547,3548,3636,3687,3701,3735,3737,3738,3824,3874,3888,3926,3928,3929,4021,4082,4111,4180,4201,4214,4217,4274,4310,4312,4313,4403,4464,4493,4561,4582,4595,4598,4655,4686,4688,4689,4744,4802,4834,4875,4913,4922,4925,4982,5002,5004,5005,5058,5116,5148,5188,5226,5235,5238,5295,5319,5321,5322,5385,5465,5506,5552,5601,5610,5613,5635,5637,5638,5699,5779,5820,5865,5914,5923,5926,5943,5945,5946,6016,6080,6123,6137,6208,6246,6249,6251,6252,6324,6388,6432,6446,6516,6550,6553],"Infos":null}]}
 