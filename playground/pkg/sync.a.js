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
GoLinkname�� Implementation�� 	Reference��   �����syncsyncgithub.com/gopherjs/gopherjs/jsinternal/racesync/atomic�i ��
 noCopyLLockernotify
notifyListcheckercopyCheckernchWaitcCondSignal	BroadcastLockUnlockmuMutexreadValuesync/atomicdirtyentrymissesLoadmMapkeyvalueokStoreLoadOrStoreactualloadedLoadAndDeleteDeleteRangef
missLockeddirtyLockedstatesemalockSlow
unlockSlownewldoneDooOncedoSlowstoreNewGetpPoolPutxw	writerSem	readerSemreaderCount
readerWaitRLockrwRWMutexRUnlockrUnlockSlowrRLockercounterstate1Addwg	WaitGroupdeltastatepsemapDonewaitlockheadtailcheckvSwapoldCompareAndSwapswappedcheckNewoploadetryStoreiunexpungeLockedwasExpungedstoreLockedtryLoadOrStoredeletetryExpungeLocked
isExpungedsyncNewCondatomic   
    +        #   &   #)   7   9,   C PPPT / < AS   H AU   O AW     Y   ^  T r h  sy    � ���  e�   n�   ��   �   � �      �   �      �      �   �     �� ��    ��T � � �� �� �� �   � �� �� ��   � �� �� �� �� �   � �� �� �� �   � �� ��   � �� ��   � ��   � ��    �   �	  ����T � Y ��   � ��   ^ ��   � �� �  PF  �#  �   �	   ��   � �   �   T � � �� ��   � �� ��     �       �  ��   ��   � �   �   T � � ��   � � �� ��    ��   �	   �	   �   �   � ������T � � ��   � ��   � �� �   Y ��   ^ ��   � ��   #  �	  �   9�   ��   � ���
	�T � � �� �   < ��   � ��  �� �� � ��      T � Y  �   ^  �    �	   	   �   �   �  T � )T  � A�  y  y ��  �y  �y  �y  y  �y  �y  T � � ��  �� � �� ��   � �� �� ��  � �� �� �� �   � �� � ��    �  �   �   �	��   �	�      �   �T � � ��  ��	 �  � ��	 ��	     � ��	  �  � ��	 ��	   � ��	 ��	 ��	 �  �   � ��	  ��	 �  � ��	  �  � C9
^��h�����������+���	��y� s��� js4	js = $packages["github.com/gopherjs/gopherjs/js"];
��    		$r = js.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  race$	race = $packages["internal/race"];
��    		$r = race.$init(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  atomic$	atomic = $packages["sync/atomic"];
��    		$r = atomic.$init(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  Cond��	Cond = $pkg.Cond = $newType(0, $kindStruct, "sync.Cond", true, "sync", true, function(noCopy_, L_, notify_, checker_, n_, ch_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.noCopy = new noCopy.ptr();
			this.L = $ifaceNil;
			this.notify = new notifyList.ptr(0, 0, 0, 0, 0);
			this.checker = 0;
			this.n = 0;
			this.ch = $chanNil;
			return;
		}
		this.noCopy = noCopy_;
		this.L = L_;
		this.notify = notify_;
		this.checker = checker_;
		this.n = n_;
		this.ch = ch_;
	});
��	ptrType$12.methods = [{prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}, {prop: "Signal", name: "Signal", pkg: "", typ: $funcType([], [], false)}, {prop: "Broadcast", name: "Broadcast", pkg: "", typ: $funcType([], [], false)}];
� 	Cond.init("sync", [{prop: "noCopy", name: "noCopy", embedded: false, exported: false, typ: noCopy, tag: ""}, {prop: "L", name: "L", embedded: false, exported: true, typ: Locker, tag: ""}, {prop: "notify", name: "notify", embedded: false, exported: false, typ: notifyList, tag: ""}, {prop: "checker", name: "checker", embedded: false, exported: false, typ: copyChecker, tag: ""}, {prop: "n", name: "n", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: chanType, tag: ""}]);
Cond	sync.Condsync.Lockersync.chanTypesync.copyCheckersync.noCopysync.notifyListsync.ptrType$12  Pool�	Pool = $pkg.Pool = $newType(0, $kindStruct, "sync.Pool", true, "sync", true, function(store_, New_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.store = sliceType$3.nil;
			this.New = $throwNilPointerError;
			return;
		}
		this.store = store_;
		this.New = New_;
	});
��	ptrType$13.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Put", name: "Put", pkg: "", typ: $funcType([$emptyInterface], [], false)}];
��	Pool.init("sync", [{prop: "store", name: "store", embedded: false, exported: false, typ: sliceType$3, tag: ""}, {prop: "New", name: "New", embedded: false, exported: true, typ: funcType, tag: ""}]);
Pool	sync.Poolsync.funcTypesync.ptrType$13sync.sliceType$3  	WaitGroup�\	WaitGroup = $pkg.WaitGroup = $newType(0, $kindStruct, "sync.WaitGroup", true, "sync", true, function(counter_, ch_, state1_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.counter = 0;
			this.ch = $chanNil;
			this.state1 = arrayType.zero();
			return;
		}
		this.counter = counter_;
		this.ch = ch_;
		this.state1 = state1_;
	});
�J	ptrType$14.methods = [{prop: "Add", name: "Add", pkg: "", typ: $funcType([$Int], [], false)}, {prop: "Wait", name: "Wait", pkg: "", typ: $funcType([], [], false)}, {prop: "state", name: "state", pkg: "sync", typ: $funcType([], [ptrType$6, ptrType], false)}, {prop: "Done", name: "Done", pkg: "", typ: $funcType([], [], false)}];
�(	WaitGroup.init("sync", [{prop: "counter", name: "counter", embedded: false, exported: false, typ: $Int, tag: ""}, {prop: "ch", name: "ch", embedded: false, exported: false, typ: chanType$1, tag: ""}, {prop: "state1", name: "state1", embedded: false, exported: false, typ: arrayType, tag: ""}]);
	WaitGroupsync.WaitGroupsync.arrayTypesync.chanType$1sync.ptrTypesync.ptrType$14sync.ptrType$6sync.structType  _��	_ = $newType(0, $kindStruct, "sync._", true, "sync", false, function(noCopy_, L_, notify_, checker_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.noCopy = new noCopy.ptr();
			this.L = $ifaceNil;
			this.notify = new notifyList.ptr(0, 0, 0, 0, 0);
			this.checker = 0;
			return;
		}
		this.noCopy = noCopy_;
		this.L = L_;
		this.notify = notify_;
		this.checker = checker_;
	});
�{	_.init("sync", [{prop: "noCopy", name: "noCopy", embedded: false, exported: false, typ: noCopy, tag: ""}, {prop: "L", name: "L", embedded: false, exported: true, typ: Locker, tag: ""}, {prop: "notify", name: "notify", embedded: false, exported: false, typ: notifyList, tag: ""}, {prop: "checker", name: "checker", embedded: false, exported: false, typ: copyChecker, tag: ""}]);
_sync.Lockersync.copyCheckersync.noCopysync.notifyList  copyCheckerl	copyChecker = $pkg.copyChecker = $newType(4, $kindUintptr, "sync.copyChecker", true, "sync", false, null);
d	ptrType$15.methods = [{prop: "check", name: "check", pkg: "sync", typ: $funcType([], [], false)}];
copyCheckersync.copyCheckersync.ptrType$15  noCopy��	noCopy = $pkg.noCopy = $newType(0, $kindStruct, "sync.noCopy", true, "sync", false, function() {
		this.$val = this;
		if (arguments.length === 0) {
			return;
		}
	});
��	ptrType$16.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
	noCopy.init("", []);
noCopysync.noCopysync.ptrType$16  Map��	Map = $pkg.Map = $newType(0, $kindStruct, "sync.Map", true, "sync", true, function(mu_, read_, dirty_, misses_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.mu = new Mutex.ptr(0, 0);
			this.read = new atomic.Value.ptr($ifaceNil);
			this.dirty = false;
			this.misses = 0;
			return;
		}
		this.mu = mu_;
		this.read = read_;
		this.dirty = dirty_;
		this.misses = misses_;
	});
�K	ptrType$17.methods = [{prop: "Load", name: "Load", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface, $Bool], false)}, {prop: "Store", name: "Store", pkg: "", typ: $funcType([$emptyInterface, $emptyInterface], [], false)}, {prop: "LoadOrStore", name: "LoadOrStore", pkg: "", typ: $funcType([$emptyInterface, $emptyInterface], [$emptyInterface, $Bool], false)}, {prop: "LoadAndDelete", name: "LoadAndDelete", pkg: "", typ: $funcType([$emptyInterface], [$emptyInterface, $Bool], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$emptyInterface], [], false)}, {prop: "Range", name: "Range", pkg: "", typ: $funcType([funcType$1], [], false)}, {prop: "missLocked", name: "missLocked", pkg: "sync", typ: $funcType([], [], false)}, {prop: "dirtyLocked", name: "dirtyLocked", pkg: "sync", typ: $funcType([], [], false)}];
�s	Map.init("sync", [{prop: "mu", name: "mu", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "read", name: "read", embedded: false, exported: false, typ: atomic.Value, tag: ""}, {prop: "dirty", name: "dirty", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "misses", name: "misses", embedded: false, exported: false, typ: $Int, tag: ""}]);
Mapsync.Map
sync.Mutexsync.funcType$1sync.mapTypesync.ptrType$17sync.ptrType$3sync/atomic.Value  readOnly�	readOnly = $pkg.readOnly = $newType(0, $kindStruct, "sync.readOnly", true, "sync", false, function(m_, amended_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.m = false;
			this.amended = false;
			return;
		}
		this.m = m_;
		this.amended = amended_;
	});
��	readOnly.init("sync", [{prop: "m", name: "m", embedded: false, exported: false, typ: mapType, tag: ""}, {prop: "amended", name: "amended", embedded: false, exported: false, typ: $Bool, tag: ""}]);
readOnlysync.mapTypesync.readOnly  entry��	entry = $pkg.entry = $newType(0, $kindStruct, "sync.entry", true, "sync", false, function(p_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.p = 0;
			return;
		}
		this.p = p_;
	});
��	ptrType$3.methods = [{prop: "load", name: "load", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}, {prop: "tryStore", name: "tryStore", pkg: "sync", typ: $funcType([ptrType$2], [$Bool], false)}, {prop: "unexpungeLocked", name: "unexpungeLocked", pkg: "sync", typ: $funcType([], [$Bool], false)}, {prop: "storeLocked", name: "storeLocked", pkg: "sync", typ: $funcType([ptrType$2], [], false)}, {prop: "tryLoadOrStore", name: "tryLoadOrStore", pkg: "sync", typ: $funcType([$emptyInterface], [$emptyInterface, $Bool, $Bool], false)}, {prop: "delete$", name: "delete", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}, {prop: "tryExpungeLocked", name: "tryExpungeLocked", pkg: "sync", typ: $funcType([], [$Bool], false)}];
o	entry.init("sync", [{prop: "p", name: "p", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
entry
sync.entrysync.ptrType$2sync.ptrType$3  Mutex�	Mutex = $pkg.Mutex = $newType(0, $kindStruct, "sync.Mutex", true, "sync", true, function(state_, sema_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.state = 0;
			this.sema = 0;
			return;
		}
		this.state = state_;
		this.sema = sema_;
	});
�V	ptrType$18.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "lockSlow", name: "lockSlow", pkg: "sync", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "unlockSlow", name: "unlockSlow", pkg: "sync", typ: $funcType([$Int32], [], false)}];
��	Mutex.init("sync", [{prop: "state", name: "state", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "sema", name: "sema", embedded: false, exported: false, typ: $Uint32, tag: ""}]);
Mutex
sync.Mutexsync.ptrType$18  Locker^	Locker = $pkg.Locker = $newType(8, $kindInterface, "sync.Locker", true, "sync", true, null);
��	Locker.init([{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}]);
Lockersync.Locker  Once�	Once = $pkg.Once = $newType(0, $kindStruct, "sync.Once", true, "sync", true, function(done_, m_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.done = 0;
			this.m = new Mutex.ptr(0, 0);
			return;
		}
		this.done = done_;
		this.m = m_;
	});
��	ptrType$19.methods = [{prop: "Do", name: "Do", pkg: "", typ: $funcType([funcType$2], [], false)}, {prop: "doSlow", name: "doSlow", pkg: "sync", typ: $funcType([funcType$2], [], false)}];
��	Once.init("sync", [{prop: "done", name: "done", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "m", name: "m", embedded: false, exported: false, typ: Mutex, tag: ""}]);
Once
sync.Mutex	sync.Oncesync.funcType$2sync.ptrType$19  poolDequeue�A	poolDequeue = $pkg.poolDequeue = $newType(0, $kindStruct, "sync.poolDequeue", true, "sync", false, function(headTail_, vals_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.headTail = new $Uint64(0, 0);
			this.vals = sliceType$1.nil;
			return;
		}
		this.headTail = headTail_;
		this.vals = vals_;
	});
�	ptrType$20.methods = [{prop: "unpack", name: "unpack", pkg: "sync", typ: $funcType([$Uint64], [$Uint32, $Uint32], false)}, {prop: "pack", name: "pack", pkg: "sync", typ: $funcType([$Uint32, $Uint32], [$Uint64], false)}, {prop: "pushHead", name: "pushHead", pkg: "sync", typ: $funcType([$emptyInterface], [$Bool], false)}, {prop: "popHead", name: "popHead", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}, {prop: "popTail", name: "popTail", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}];
��	poolDequeue.init("sync", [{prop: "headTail", name: "headTail", embedded: false, exported: false, typ: $Uint64, tag: ""}, {prop: "vals", name: "vals", embedded: false, exported: false, typ: sliceType$1, tag: ""}]);
poolDequeuesync.poolDequeuesync.ptrType$20sync.sliceType$1  eface��	eface = $pkg.eface = $newType(0, $kindStruct, "sync.eface", true, "sync", false, function(typ_, val_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.typ = 0;
			this.val = 0;
			return;
		}
		this.typ = typ_;
		this.val = val_;
	});
��	eface.init("sync", [{prop: "typ", name: "typ", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "val", name: "val", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);
eface
sync.eface  
dequeueNile	dequeueNil = $pkg.dequeueNil = $newType(4, $kindPtr, "sync.dequeueNil", true, "sync", false, null);
	dequeueNil.init(structType);

dequeueNilsync.dequeueNilsync.structType  	poolChain�%	poolChain = $pkg.poolChain = $newType(0, $kindStruct, "sync.poolChain", true, "sync", false, function(head_, tail_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.head = ptrType$8.nil;
			this.tail = ptrType$8.nil;
			return;
		}
		this.head = head_;
		this.tail = tail_;
	});
�E	ptrType$21.methods = [{prop: "pushHead", name: "pushHead", pkg: "sync", typ: $funcType([$emptyInterface], [], false)}, {prop: "popHead", name: "popHead", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}, {prop: "popTail", name: "popTail", pkg: "sync", typ: $funcType([], [$emptyInterface, $Bool], false)}];
��	poolChain.init("sync", [{prop: "head", name: "head", embedded: false, exported: false, typ: ptrType$8, tag: ""}, {prop: "tail", name: "tail", embedded: false, exported: false, typ: ptrType$8, tag: ""}]);
	poolChainsync.poolChainsync.ptrType$21sync.ptrType$8  poolChainElt��	poolChainElt = $pkg.poolChainElt = $newType(0, $kindStruct, "sync.poolChainElt", true, "sync", false, function(poolDequeue_, next_, prev_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.poolDequeue = new poolDequeue.ptr(new $Uint64(0, 0), sliceType$1.nil);
			this.next = ptrType$8.nil;
			this.prev = ptrType$8.nil;
			return;
		}
		this.poolDequeue = poolDequeue_;
		this.next = next_;
		this.prev = prev_;
	});
�8	poolChainElt.init("sync", [{prop: "poolDequeue", name: "poolDequeue", embedded: true, exported: false, typ: poolDequeue, tag: ""}, {prop: "next", name: "next", embedded: false, exported: false, typ: ptrType$8, tag: ""}, {prop: "prev", name: "prev", embedded: false, exported: false, typ: ptrType$8, tag: ""}]);
poolChainEltsync.poolChainEltsync.poolDequeuesync.ptrType$8sync.sliceType$1  
notifyList��	notifyList = $pkg.notifyList = $newType(0, $kindStruct, "sync.notifyList", true, "sync", false, function(wait_, notify_, lock_, head_, tail_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.wait = 0;
			this.notify = 0;
			this.lock = 0;
			this.head = 0;
			this.tail = 0;
			return;
		}
		this.wait = wait_;
		this.notify = notify_;
		this.lock = lock_;
		this.head = head_;
		this.tail = tail_;
	});
��	notifyList.init("sync", [{prop: "wait", name: "wait", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "notify", name: "notify", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "lock", name: "lock", embedded: false, exported: false, typ: $Uintptr, tag: ""}, {prop: "head", name: "head", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}, {prop: "tail", name: "tail", embedded: false, exported: false, typ: $UnsafePointer, tag: ""}]);

notifyListsync.notifyList  RWMutex��	RWMutex = $pkg.RWMutex = $newType(0, $kindStruct, "sync.RWMutex", true, "sync", true, function(w_, writerSem_, readerSem_, readerCount_, readerWait_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = new Mutex.ptr(0, 0);
			this.writerSem = 0;
			this.readerSem = 0;
			this.readerCount = 0;
			this.readerWait = 0;
			return;
		}
		this.w = w_;
		this.writerSem = writerSem_;
		this.readerSem = readerSem_;
		this.readerCount = readerCount_;
		this.readerWait = readerWait_;
	});
��	ptrType$11.methods = [{prop: "RLock", name: "RLock", pkg: "", typ: $funcType([], [], false)}, {prop: "RUnlock", name: "RUnlock", pkg: "", typ: $funcType([], [], false)}, {prop: "rUnlockSlow", name: "rUnlockSlow", pkg: "sync", typ: $funcType([$Int32], [], false)}, {prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}, {prop: "RLocker", name: "RLocker", pkg: "", typ: $funcType([], [Locker], false)}];
��	RWMutex.init("sync", [{prop: "w", name: "w", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "writerSem", name: "writerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerSem", name: "readerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerCount", name: "readerCount", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "readerWait", name: "readerWait", embedded: false, exported: false, typ: $Int32, tag: ""}]);
RWMutexsync.Locker
sync.Mutexsync.RWMutexsync.ptrType$11  rlocker��	rlocker = $pkg.rlocker = $newType(0, $kindStruct, "sync.rlocker", true, "sync", false, function(w_, writerSem_, readerSem_, readerCount_, readerWait_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.w = new Mutex.ptr(0, 0);
			this.writerSem = 0;
			this.readerSem = 0;
			this.readerCount = 0;
			this.readerWait = 0;
			return;
		}
		this.w = w_;
		this.writerSem = writerSem_;
		this.readerSem = readerSem_;
		this.readerCount = readerCount_;
		this.readerWait = readerWait_;
	});
��	ptrType$10.methods = [{prop: "Lock", name: "Lock", pkg: "", typ: $funcType([], [], false)}, {prop: "Unlock", name: "Unlock", pkg: "", typ: $funcType([], [], false)}];
��	rlocker.init("sync", [{prop: "w", name: "w", embedded: false, exported: false, typ: Mutex, tag: ""}, {prop: "writerSem", name: "writerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerSem", name: "readerSem", embedded: false, exported: false, typ: $Uint32, tag: ""}, {prop: "readerCount", name: "readerCount", embedded: false, exported: false, typ: $Int32, tag: ""}, {prop: "readerWait", name: "readerWait", embedded: false, exported: false, typ: $Int32, tag: ""}]);
rlocker
sync.Mutexsync.ptrType$10sync.rlocker  _$8�	_$8 = $newType(0, $kindStruct, "sync._", true, "sync", false, function(noCopy_, state1_) {
		this.$val = this;
		if (arguments.length === 0) {
			this.noCopy = new noCopy.ptr();
			this.state1 = arrayType.zero();
			return;
		}
		this.noCopy = noCopy_;
		this.state1 = state1_;
	});
��	_$8.init("sync", [{prop: "noCopy", name: "noCopy", embedded: false, exported: false, typ: noCopy, tag: ""}, {prop: "state1", name: "state1", embedded: false, exported: false, typ: arrayType, tag: ""}]);
_sync.arrayTypesync.noCopy  ptrType	ptrType = $ptrType($Uint32);
ptrType  chanType,	chanType = $chanType($Bool, false, false);
chanType  	sliceType#	sliceType = $sliceType(chanType);
	sliceTypesync.chanType  
structType#	structType = $structType("", []);

structType  	ptrType$1!	ptrType$1 = $ptrType($Uintptr);
	ptrType$1  	ptrType$2(	ptrType$2 = $ptrType($emptyInterface);
	ptrType$2  	ptrType$3	ptrType$3 = $ptrType(entry);
	ptrType$3
sync.entry  	ptrType$4'	ptrType$4 = $ptrType($UnsafePointer);
	ptrType$4  	ptrType$5	ptrType$5 = $ptrType($Int32);
	ptrType$5  	ptrType$6 	ptrType$6 = $ptrType($Uint64);
	ptrType$6  	ptrType$7	ptrType$7 = $ptrType(eface);
	ptrType$7
sync.eface  	ptrType$8%	ptrType$8 = $ptrType(poolChainElt);
	ptrType$8sync.poolChainElt  sliceType$1"	sliceType$1 = $sliceType(eface);
sliceType$1
sync.eface  	ptrType$9"	ptrType$9 = $ptrType(ptrType$8);
	ptrType$9sync.ptrType$8  
ptrType$10!	ptrType$10 = $ptrType(rlocker);

ptrType$10sync.rlocker  
ptrType$11!	ptrType$11 = $ptrType(RWMutex);

ptrType$11sync.RWMutex  sliceType$2#	sliceType$2 = $sliceType($Uint8);
sliceType$2  
ptrType$12	ptrType$12 = $ptrType(Cond);

ptrType$12	sync.Cond  sliceType$3,	sliceType$3 = $sliceType($emptyInterface);
sliceType$3  
ptrType$13	ptrType$13 = $ptrType(Pool);

ptrType$13	sync.Pool  funcType5	funcType = $funcType([], [$emptyInterface], false);
funcType  	arrayType%	arrayType = $arrayType($Uint32, 3);
	arrayType  
ptrType$14#	ptrType$14 = $ptrType(WaitGroup);

ptrType$14sync.WaitGroup  
chanType$13	chanType$1 = $chanType(structType, false, false);

chanType$1sync.structType  
ptrType$15%	ptrType$15 = $ptrType(copyChecker);

ptrType$15sync.copyChecker  
ptrType$16 	ptrType$16 = $ptrType(noCopy);

ptrType$16sync.noCopy  
funcType$1M	funcType$1 = $funcType([$emptyInterface, $emptyInterface], [$Bool], false);

funcType$1  
ptrType$17	ptrType$17 = $ptrType(Map);

ptrType$17sync.Map  mapType1	mapType = $mapType($emptyInterface, ptrType$3);
mapTypesync.ptrType$3  
ptrType$18	ptrType$18 = $ptrType(Mutex);

ptrType$18
sync.Mutex  
funcType$2(	funcType$2 = $funcType([], [], false);

funcType$2  
ptrType$19	ptrType$19 = $ptrType(Once);

ptrType$19	sync.Once  
ptrType$20%	ptrType$20 = $ptrType(poolDequeue);

ptrType$20sync.poolDequeue  
ptrType$21#	ptrType$21 = $ptrType(poolChain);

ptrType$21sync.poolChain  
semWaiters
semWaiters  	semAwoken	semAwoken  expungedexpunged    �		semWaiters = {};
sync.semWaiters    
%		semAwoken = {};
sync.semAwoken  '  &�		expunged = (new Uint8Array(8));
sync.expunged (*sync.Cond).Wait ��	Cond.ptr.prototype.Wait = function() {
		var _r, c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  
		c.n = c.n + (1) >> 0;
    		if (c.ch === $chanNil) {
  $			c.ch = new $Chan($Bool, 0);
    		}
  ?		$r = c.L.Unlock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  M		_r = $recv(c.ch); /* */ $s = 2; case 2: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r[0];
  U		$r = c.L.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Cond.ptr.prototype.Wait }; } $f._r = _r; $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	Cond.prototype.Wait = function() { return this.$val.Wait(); };
Cond	sync.Cond (*sync.Cond).Signal ��	Cond.ptr.prototype.Signal = function() {
		var c, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
    		if (c.n === 0) {
  �			$s = -1; return;
    		}
  �		c.n = c.n - (1) >> 0;
    		$r = $send(c.ch, true); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Cond.ptr.prototype.Signal }; } $f.c = c; $f.$s = $s; $f.$r = $r; return $f;
	};
	Cond.prototype.Signal = function() { return this.$val.Signal(); };
Cond	sync.Cond (*sync.Cond).Broadcast �{	Cond.ptr.prototype.Broadcast = function() {
		var c, i, n, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; c = $f.c; i = $f.i; n = $f.n; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		c = this;
  �		n = c.n;
  �		c.n = 0;
  �		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < n)) { break; } */ if(!(i < n)) { $s = 2; continue; }
    			$r = $send(c.ch, true); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Cond.ptr.prototype.Broadcast }; } $f.c = c; $f.i = i; $f.n = n; $f.$s = $s; $f.$r = $r; return $f;
	};
	Cond.prototype.Broadcast = function() { return this.$val.Broadcast(); };
Cond	sync.Cond (*sync.Pool).Get ��	Pool.ptr.prototype.Get = function() {
		var $24r, _r, p, x, x$1, x$2, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; $24r = $f.$24r; _r = $f._r; p = $f.p; x = $f.x; x$1 = $f.x$1; x$2 = $f.x$2; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		p = this;
  �		/* */ if (p.store.$length === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (p.store.$length === 0) { */ case 1:
  			/* */ if (!(p.New === $throwNilPointerError)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (!(p.New === $throwNilPointerError)) { */ case 3:
  (				_r = p.New(); /* */ $s = 5; case 5: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
				$24r = _r;
				$s = 6; case 6: return $24r;
    			/* } */ case 4:
  =			$s = -1; return $ifaceNil;
    		/* } */ case 2:
  L		x$2 = (x = p.store, x$1 = p.store.$length - 1 >> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  j		p.store = $subslice(p.store, 0, (p.store.$length - 1 >> 0));
  �		$s = -1; return x$2;
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Pool.ptr.prototype.Get }; } $f.$24r = $24r; $f._r = _r; $f.p = p; $f.x = x; $f.x$1 = x$1; $f.x$2 = x$2; $f.$s = $s; $f.$r = $r; return $f;
	};
	Pool.prototype.Get = function() { return this.$val.Get(); };
Pool	sync.Pool (*sync.Pool).Put ��	Pool.ptr.prototype.Put = function(x) {
		var p, x;
		p = this;
    		if ($interfaceIsEqual(x, $ifaceNil)) {
  �			return;
    		}
  �		p.store = $append(p.store, x);
    	};
	Pool.prototype.Put = function(x) { return this.$val.Put(x); };
Pool	sync.Pool sync.runtime_procPinsyncruntime_procPin runtime_procPin:	runtime_procPin = function() {
  ]		return 0;
    	};
runtime_procPinsync.runtime_procPin sync.runtime_procUnpinsyncruntime_procUnpin runtime_procUnpin+	runtime_procUnpin = function() {
    	};
runtime_procUnpinsync.runtime_procUnpin sync.runtime_Semacquiresyncruntime_Semacquire runtime_Semacquire�'	runtime_Semacquire = function(s) {
		var s, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; s = $f.s; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  
q		$r = runtime_SemacquireMutex(s, false, 1); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: runtime_Semacquire }; } $f.s = s; $f.$s = $s; $f.$r = $r; return $f;
	};
runtime_Semacquiresync.runtime_Semacquiresync.runtime_SemacquireMutex sync.runtime_SemacquireMutexsyncruntime_SemacquireMutex runtime_SemacquireMutex�	�	runtime_SemacquireMutex = function(s, lifo, skipframes) {
		var _entry, _entry$1, _entry$2, _entry$3, _entry$4, _key, _key$1, _key$2, _r, ch, lifo, s, skipframes, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _entry$3 = $f._entry$3; _entry$4 = $f._entry$4; _key = $f._key; _key$1 = $f._key$1; _key$2 = $f._key$2; _r = $f._r; ch = $f.ch; lifo = $f.lifo; s = $f.s; skipframes = $f.skipframes; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
  �		/* */ if (((s.$get() - (_entry = semAwoken[ptrType.keyFor(s)], _entry !== undefined ? _entry.v : 0) >>> 0)) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (((s.$get() - (_entry = semAwoken[ptrType.keyFor(s)], _entry !== undefined ? _entry.v : 0) >>> 0)) === 0) { */ case 1:
  			ch = new $Chan($Bool, 0);
    			if (lifo) {
  <				_key = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType.keyFor(_key)] = { k: _key, v: $appendSlice(new sliceType([ch]), (_entry$1 = semWaiters[ptrType.keyFor(s)], _entry$1 !== undefined ? _entry$1.v : sliceType.nil)) };
    			} else {
  �				_key$1 = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType.keyFor(_key$1)] = { k: _key$1, v: $append((_entry$2 = semWaiters[ptrType.keyFor(s)], _entry$2 !== undefined ? _entry$2.v : sliceType.nil), ch) };
    			}
  �			_r = $recv(ch); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r[0];
  �			_key$2 = s; (semAwoken || $throwRuntimeError("assignment to entry in nil map"))[ptrType.keyFor(_key$2)] = { k: _key$2, v: (_entry$3 = semAwoken[ptrType.keyFor(s)], _entry$3 !== undefined ? _entry$3.v : 0) - (1) >>> 0 };
    			if ((_entry$4 = semAwoken[ptrType.keyFor(s)], _entry$4 !== undefined ? _entry$4.v : 0) === 0) {
  �				delete semAwoken[ptrType.keyFor(s)];
    			}
    		/* } */ case 2:
    		s.$set(s.$get() - (1) >>> 0);
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: runtime_SemacquireMutex }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._entry$3 = _entry$3; $f._entry$4 = _entry$4; $f._key = _key; $f._key$1 = _key$1; $f._key$2 = _key$2; $f._r = _r; $f.ch = ch; $f.lifo = lifo; $f.s = s; $f.skipframes = skipframes; $f.$s = $s; $f.$r = $r; return $f;
	};
runtime_SemacquireMutexsync.chanTypesync.ptrTypesync.runtime_SemacquireMutexsync.semAwokensync.semWaiterssync.sliceType sync.runtime_Semreleasesyncruntime_Semrelease runtime_Semrelease��	runtime_Semrelease = function(s, handoff, skipframes) {
		var _entry, _entry$1, _key, _key$1, ch, handoff, s, skipframes, w, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _key = $f._key; _key$1 = $f._key$1; ch = $f.ch; handoff = $f.handoff; s = $f.s; skipframes = $f.skipframes; w = $f.w; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
    		s.$set(s.$get() + (1) >>> 0);
  �		w = (_entry = semWaiters[ptrType.keyFor(s)], _entry !== undefined ? _entry.v : sliceType.nil);
    		if (w.$length === 0) {
  �			$s = -1; return;
    		}
  �		ch = (0 >= w.$length ? ($throwRuntimeError("index out of range"), undefined) : w.$array[w.$offset + 0]);
  �		w = $subslice(w, 1);
  �		_key = s; (semWaiters || $throwRuntimeError("assignment to entry in nil map"))[ptrType.keyFor(_key)] = { k: _key, v: w };
    		if (w.$length === 0) {
  �			delete semWaiters[ptrType.keyFor(s)];
    		}
  		_key$1 = s; (semAwoken || $throwRuntimeError("assignment to entry in nil map"))[ptrType.keyFor(_key$1)] = { k: _key$1, v: (_entry$1 = semAwoken[ptrType.keyFor(s)], _entry$1 !== undefined ? _entry$1.v : 0) + (1) >>> 0 };
    		$r = $send(ch, true); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: runtime_Semrelease }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._key = _key; $f._key$1 = _key$1; $f.ch = ch; $f.handoff = handoff; $f.s = s; $f.skipframes = skipframes; $f.w = w; $f.$s = $s; $f.$r = $r; return $f;
	};
runtime_Semreleasesync.ptrTypesync.runtime_Semreleasesync.semAwokensync.semWaiterssync.sliceType sync.runtime_notifyListChecksyncruntime_notifyListCheck runtime_notifyListCheckA	runtime_notifyListCheck = function(size) {
		var size;
    	};
runtime_notifyListChecksync.runtime_notifyListCheck sync.runtime_canSpinsyncruntime_canSpin runtime_canSpinH	runtime_canSpin = function(i) {
		var i;
  �		return false;
    	};
runtime_canSpinsync.runtime_canSpin sync.runtime_nanotimesyncruntime_nanotime runtime_nanotime��	runtime_nanotime = function() {
  �		return $mul64($internalize(new ($global.Date)().getTime(), $Int64), new $Int64(0, 1000000));
    	};
runtime_nanotimesync.runtime_nanotime 
sync.throwsyncthrow throw$1`	throw$1 = function(s) {
		var s;
  m		$throwRuntimeError($externalize(s, $String));
    	};
throw
sync.throw (*sync.WaitGroup).Add �	WaitGroup.ptr.prototype.Add = function(delta) {
		var delta, wg;
		wg = this;
  ;		wg.counter = wg.counter + (delta) >> 0;
    		if (wg.counter < 0) {
  f			$panic(new $String("sync: negative WaitGroup counter"));
    		}
    		if (wg.counter > 0 && wg.ch === $chanNil) {
  �			wg.ch = new $Chan(structType, 0);
    		}
    		if ((wg.counter === 0) && !(wg.ch === $chanNil)) {
  			$close(wg.ch);
  			wg.ch = $chanNil;
    		}
    	};
	WaitGroup.prototype.Add = function(delta) { return this.$val.Add(delta); };
	WaitGroupsync.WaitGroupsync.structType (*sync.WaitGroup).Wait �3	WaitGroup.ptr.prototype.Wait = function() {
		var _r, wg, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; wg = $f.wg; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		wg = this;
  A		/* */ if (wg.counter > 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (wg.counter > 0) { */ case 1:
  W			_r = $recv(wg.ch); /* */ $s = 3; case 3: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			_r[0];
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: WaitGroup.ptr.prototype.Wait }; } $f._r = _r; $f.wg = wg; $f.$s = $s; $f.$r = $r; return $f;
	};
	WaitGroup.prototype.Wait = function() { return this.$val.Wait(); };
	WaitGroupsync.WaitGroup sync.NewCondsyncNewCond NewCond��	NewCond = function(l) {
		var l;
  o		return new Cond.ptr(new noCopy.ptr(), l, new notifyList.ptr(0, 0, 0, 0, 0), 0, 0, $chanNil);
    	};
	$pkg.NewCond = NewCond;
NewCond	sync.Condsync.NewCondsync.noCopysync.notifyList (*sync.copyChecker).check ��	$ptrType(copyChecker).prototype.check = function() {
		var _ptr, c;
		c = this;
    		if (!((((c.$get() >>> 0)) === ((c)))) && !atomic.CompareAndSwapUintptr(((_ptr = c, new ptrType$1(function() { return (_ptr.$get() >>> 0); }, function($v) { _ptr.$set(($v >>> 0)); }, _ptr.$target))), 0, ((c))) && !((((c.$get() >>> 0)) === ((c))))) {
  =			$panic(new $String("sync.Cond is copied"));
    		}
    	};
copyCheckercheck~sync.copyCheckersync.ptrType$1!sync/atomic.CompareAndSwapUintptr (*sync.noCopy).Lock u	noCopy.ptr.prototype.Lock = function() {
    	};
	noCopy.prototype.Lock = function() { return this.$val.Lock(); };
noCopysync.noCopy (*sync.noCopy).Unlock {	noCopy.ptr.prototype.Unlock = function() {
    	};
	noCopy.prototype.Unlock = function() { return this.$val.Unlock(); };
noCopysync.noCopy sync.newEntrysyncnewEntry newEntry��	newEntry = function(i) {
		var i, i$24ptr;
  *�		return new entry.ptr(((i$24ptr || (i$24ptr = new ptrType$2(function() { return i; }, function($v) { i = $v; })))));
    	};
newEntry
sync.entrysync.newEntrysync.ptrType$2 (*sync.Map).Load �
�	Map.ptr.prototype.Load = function(key) {
		var _entry, _entry$1, _entry$2, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, e, key, m, ok, read, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; e = $f.e; key = $f.key; m = $f.m; ok = $f.ok; read = $f.read; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = $ifaceNil;
		ok = false;
		m = this;
  +�		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  ,"		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$3.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
  ,8		/* */ if (!ok && read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok && read.amended) { */ case 1:
  ,S			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  -,			_tuple$2 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$2[0]);
  -Q			_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$3.nil, false]);
			e = _tuple$3[0];
			ok = _tuple$3[1];
    			if (!ok && read.amended) {
  -�				_tuple$4 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$3.nil, false]);
				e = _tuple$4[0];
				ok = _tuple$4[1];
  .;				m.missLocked();
    			}
  .P			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		if (!ok) {
    			_tmp = $ifaceNil;
			_tmp$1 = false;
			value = _tmp;
			ok = _tmp$1;
			$s = -1; return [value, ok];
    		}
    		_tuple$5 = e.load();
		value = _tuple$5[0];
		ok = _tuple$5[1];
		$s = -1; return [value, ok];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Load }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.e = e; $f.key = key; $f.m = m; $f.ok = ok; $f.read = read; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Load = function(key) { return this.$val.Load(key); };
Mapsync.Map
sync.entry
sync.load~sync.missLocked~sync.ptrType$3sync.readOnly (*sync.entry).load �k	entry.ptr.prototype.load = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, ok, p, value;
		value = $ifaceNil;
		ok = false;
		e = this;
  .�		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    		if (p === 0 || p === expunged) {
    			_tmp = $ifaceNil;
			_tmp$1 = false;
			value = _tmp;
			ok = _tmp$1;
			return [value, ok];
    		}
    		_tmp$2 = (p).$get();
		_tmp$3 = true;
		value = _tmp$2;
		ok = _tmp$3;
		return [value, ok];
    	};
	entry.prototype.load = function() { return this.$val.load(); };
entryload~
sync.entrysync.expungedsync.ptrType$4sync/atomic.LoadPointer (*sync.Map).Store ��	Map.ptr.prototype.Store = function(key, value) {
		var _entry, _entry$1, _entry$2, _key, _key$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, e, e$1, e$2, key, m, ok, ok$1, ok$2, read, value, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _key = $f._key; _key$1 = $f._key$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; e = $f.e; e$1 = $f.e$1; e$2 = $f.e$2; key = $f.key; m = $f.m; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; read = $f.read; value = $f.value; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = [value];
		m = this;
  /�		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  /�		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$3.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
    		if (ok && e.tryStore((value.$ptr || (value.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))))) {
  /�			$s = -1; return;
    		}
  /�		$r = m.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  0		_tuple$2 = $assertType(m.read.Load(), readOnly, true);
		readOnly.copy(read, _tuple$2[0]);
  03		_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$3.nil, false]);
		e$1 = _tuple$3[0];
		ok$1 = _tuple$3[1];
    		if (ok$1) {
    			if (e$1.unexpungeLocked()) {
  0�				_key = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e$1 };
    			}
  0�			e$1.storeLocked((value.$ptr || (value.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))));
    		} else {
  1 			_tuple$4 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$3.nil, false]);
			e$2 = _tuple$4[0];
			ok$2 = _tuple$4[1];
    			if (ok$2) {
  1>				e$2.storeLocked((value.$ptr || (value.$ptr = new ptrType$2(function() { return this.$target[0]; }, function($v) { this.$target[0] = $v; }, value))));
    			} else {
    				if (!read.amended) {
  1�					m.dirtyLocked();
  2
					m.read.Store((x = new readOnly.ptr(read.m, true), new x.constructor.elem(x)));
    				}
  2A				_key$1 = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key$1)] = { k: _key$1, v: newEntry(value[0]) };
    			}
    		}
  2d		$r = m.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Store }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._key = _key; $f._key$1 = _key$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f.e = e; $f.e$1 = e$1; $f.e$2 = e$2; $f.key = key; $f.m = m; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.read = read; $f.value = value; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Store = function(key, value) { return this.$val.Store(key, value); };
Map	sync.Mapsync.dirtyLocked~sync.newEntrysync.ptrType$2sync.ptrType$3sync.readOnlysync.storeLocked~sync.tryStore~sync.unexpungeLocked~ (*sync.entry).tryStore �e	entry.ptr.prototype.tryStore = function(i) {
		var e, i, p;
		e = this;
  3?		while (true) {
  3G			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    			if (p === expunged) {
  3}				return false;
    			}
    			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), p, (i))) {
  3�				return true;
    			}
    		}
    	};
	entry.prototype.tryStore = function(i) { return this.$val.tryStore(i); };
entry	tryStore~
sync.entrysync.expungedsync.ptrType$4!sync/atomic.CompareAndSwapPointersync/atomic.LoadPointer (*sync.entry).unexpungeLocked ��	entry.ptr.prototype.unexpungeLocked = function() {
		var e, wasExpunged;
		wasExpunged = false;
		e = this;
    		wasExpunged = atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), expunged, 0);
		return wasExpunged;
    	};
	entry.prototype.unexpungeLocked = function() { return this.$val.unexpungeLocked(); };
entryunexpungeLocked~
sync.entrysync.expungedsync.ptrType$4!sync/atomic.CompareAndSwapPointer (*sync.entry).storeLocked �?	entry.ptr.prototype.storeLocked = function(i) {
		var e, i;
		e = this;
  5�		atomic.StorePointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), (i));
    	};
	entry.prototype.storeLocked = function(i) { return this.$val.storeLocked(i); };
entrystoreLocked~
sync.entrysync.ptrType$4sync/atomic.StorePointer (*sync.Map).LoadOrStore �U	Map.ptr.prototype.LoadOrStore = function(key, value) {
		var _entry, _entry$1, _entry$2, _key, _key$1, _tmp, _tmp$1, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, _tuple$6, _tuple$7, actual, actual$1, e, e$1, e$2, key, loaded, loaded$1, m, ok, ok$1, ok$2, ok$3, read, value, x, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _key = $f._key; _key$1 = $f._key$1; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tmp$2 = $f._tmp$2; _tmp$3 = $f._tmp$3; _tmp$4 = $f._tmp$4; _tmp$5 = $f._tmp$5; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; _tuple$6 = $f._tuple$6; _tuple$7 = $f._tuple$7; actual = $f.actual; actual$1 = $f.actual$1; e = $f.e; e$1 = $f.e$1; e$2 = $f.e$2; key = $f.key; loaded = $f.loaded; loaded$1 = $f.loaded$1; m = $f.m; ok = $f.ok; ok$1 = $f.ok$1; ok$2 = $f.ok$2; ok$3 = $f.ok$3; read = $f.read; value = $f.value; x = $f.x; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		actual = $ifaceNil;
		loaded = false;
		m = this;
  7		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  7;		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$3.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
    		if (ok) {
  7X			_tuple$2 = e.tryLoadOrStore(value);
			actual$1 = _tuple$2[0];
			loaded$1 = _tuple$2[1];
			ok$1 = _tuple$2[2];
    			if (ok$1) {
    				_tmp = actual$1;
				_tmp$1 = loaded$1;
				actual = _tmp;
				loaded = _tmp$1;
				$s = -1; return [actual, loaded];
    			}
    		}
  7�		$r = m.mu.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  7�		_tuple$3 = $assertType(m.read.Load(), readOnly, true);
		readOnly.copy(read, _tuple$3[0]);
  7�		_tuple$4 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$3.nil, false]);
		e$1 = _tuple$4[0];
		ok$2 = _tuple$4[1];
    		if (ok$2) {
    			if (e$1.unexpungeLocked()) {
  8				_key = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e$1 };
    			}
  86			_tuple$5 = e$1.tryLoadOrStore(value);
			actual = _tuple$5[0];
			loaded = _tuple$5[1];
    		} else {
  8m			_tuple$6 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$3.nil, false]);
			e$2 = _tuple$6[0];
			ok$3 = _tuple$6[1];
    			if (ok$3) {
  8�				_tuple$7 = e$2.tryLoadOrStore(value);
				actual = _tuple$7[0];
				loaded = _tuple$7[1];
  8�				m.missLocked();
    			} else {
    				if (!read.amended) {
  9k					m.dirtyLocked();
  9~					m.read.Store((x = new readOnly.ptr(read.m, true), new x.constructor.elem(x)));
    				}
  9�				_key$1 = key; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key$1)] = { k: _key$1, v: newEntry(value) };
  9�				_tmp$2 = value;
				_tmp$3 = false;
				actual = _tmp$2;
				loaded = _tmp$3;
    			}
    		}
  9�		$r = m.mu.Unlock(); /* */ $s = 2; case 2: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		_tmp$4 = actual;
		_tmp$5 = loaded;
		actual = _tmp$4;
		loaded = _tmp$5;
		$s = -1; return [actual, loaded];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.LoadOrStore }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._key = _key; $f._key$1 = _key$1; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tmp$2 = _tmp$2; $f._tmp$3 = _tmp$3; $f._tmp$4 = _tmp$4; $f._tmp$5 = _tmp$5; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f._tuple$6 = _tuple$6; $f._tuple$7 = _tuple$7; $f.actual = actual; $f.actual$1 = actual$1; $f.e = e; $f.e$1 = e$1; $f.e$2 = e$2; $f.key = key; $f.loaded = loaded; $f.loaded$1 = loaded$1; $f.m = m; $f.ok = ok; $f.ok$1 = ok$1; $f.ok$2 = ok$2; $f.ok$3 = ok$3; $f.read = read; $f.value = value; $f.x = x; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.LoadOrStore = function(key, value) { return this.$val.LoadOrStore(key, value); };
Mapsync.Mapsync.dirtyLocked~sync.missLocked~sync.newEntrysync.ptrType$3sync.readOnlysync.tryLoadOrStore~sync.unexpungeLocked~ (*sync.entry).tryLoadOrStore ��	entry.ptr.prototype.tryLoadOrStore = function(i) {
		var _tmp, _tmp$1, _tmp$10, _tmp$11, _tmp$12, _tmp$13, _tmp$14, _tmp$2, _tmp$3, _tmp$4, _tmp$5, _tmp$6, _tmp$7, _tmp$8, _tmp$9, actual, e, i, ic, ic$24ptr, loaded, ok, p;
		actual = $ifaceNil;
		loaded = false;
		ok = false;
		e = this;
  ;7		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    		if (p === expunged) {
    			_tmp = $ifaceNil;
			_tmp$1 = false;
			_tmp$2 = false;
			actual = _tmp;
			loaded = _tmp$1;
			ok = _tmp$2;
			return [actual, loaded, ok];
    		}
    		if (!(p === 0)) {
    			_tmp$3 = (p).$get();
			_tmp$4 = true;
			_tmp$5 = true;
			actual = _tmp$3;
			loaded = _tmp$4;
			ok = _tmp$5;
			return [actual, loaded, ok];
    		}
  <�		ic = i;
  <�		while (true) {
    			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), 0, ((ic$24ptr || (ic$24ptr = new ptrType$2(function() { return ic; }, function($v) { ic = $v; })))))) {
    				_tmp$6 = i;
				_tmp$7 = false;
				_tmp$8 = true;
				actual = _tmp$6;
				loaded = _tmp$7;
				ok = _tmp$8;
				return [actual, loaded, ok];
    			}
  <�			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    			if (p === expunged) {
    				_tmp$9 = $ifaceNil;
				_tmp$10 = false;
				_tmp$11 = false;
				actual = _tmp$9;
				loaded = _tmp$10;
				ok = _tmp$11;
				return [actual, loaded, ok];
    			}
    			if (!(p === 0)) {
    				_tmp$12 = (p).$get();
				_tmp$13 = true;
				_tmp$14 = true;
				actual = _tmp$12;
				loaded = _tmp$13;
				ok = _tmp$14;
				return [actual, loaded, ok];
    			}
    		}
    	};
	entry.prototype.tryLoadOrStore = function(i) { return this.$val.tryLoadOrStore(i); };
entrytryLoadOrStore~
sync.entrysync.expungedsync.ptrType$2sync.ptrType$4!sync/atomic.CompareAndSwapPointersync/atomic.LoadPointer (*sync.Map).LoadAndDelete �@	Map.ptr.prototype.LoadAndDelete = function(key) {
		var _entry, _entry$1, _entry$2, _tmp, _tmp$1, _tuple, _tuple$1, _tuple$2, _tuple$3, _tuple$4, _tuple$5, e, key, loaded, m, ok, read, value, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _entry$1 = $f._entry$1; _entry$2 = $f._entry$2; _tmp = $f._tmp; _tmp$1 = $f._tmp$1; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; _tuple$3 = $f._tuple$3; _tuple$4 = $f._tuple$4; _tuple$5 = $f._tuple$5; e = $f.e; key = $f.key; loaded = $f.loaded; m = $f.m; ok = $f.ok; read = $f.read; value = $f.value; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		value = $ifaceNil;
		loaded = false;
		m = this;
  >k		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  >�		_tuple$1 = (_entry = read.m[$emptyInterface.keyFor(key)], _entry !== undefined ? [_entry.v, true] : [ptrType$3.nil, false]);
		e = _tuple$1[0];
		ok = _tuple$1[1];
  >�		/* */ if (!ok && read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!ok && read.amended) { */ case 1:
  >�			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  >�			_tuple$2 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$2[0]);
  >�			_tuple$3 = (_entry$1 = read.m[$emptyInterface.keyFor(key)], _entry$1 !== undefined ? [_entry$1.v, true] : [ptrType$3.nil, false]);
			e = _tuple$3[0];
			ok = _tuple$3[1];
    			if (!ok && read.amended) {
  ?&				_tuple$4 = (_entry$2 = m.dirty[$emptyInterface.keyFor(key)], _entry$2 !== undefined ? [_entry$2.v, true] : [ptrType$3.nil, false]);
				e = _tuple$4[0];
				ok = _tuple$4[1];
  ?>				delete m.dirty[$emptyInterface.keyFor(key)];
  ?�				m.missLocked();
    			}
  @			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		if (ok) {
    			_tuple$5 = e.delete$();
			value = _tuple$5[0];
			loaded = _tuple$5[1];
			$s = -1; return [value, loaded];
    		}
    		_tmp = $ifaceNil;
		_tmp$1 = false;
		value = _tmp;
		loaded = _tmp$1;
		$s = -1; return [value, loaded];
    		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.LoadAndDelete }; } $f._entry = _entry; $f._entry$1 = _entry$1; $f._entry$2 = _entry$2; $f._tmp = _tmp; $f._tmp$1 = _tmp$1; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f._tuple$3 = _tuple$3; $f._tuple$4 = _tuple$4; $f._tuple$5 = _tuple$5; $f.e = e; $f.key = key; $f.loaded = loaded; $f.m = m; $f.ok = ok; $f.read = read; $f.value = value; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.LoadAndDelete = function(key) { return this.$val.LoadAndDelete(key); };
Mapsync.Mapsync.delete~sync.missLocked~sync.ptrType$3sync.readOnly (*sync.Map).Delete ��	Map.ptr.prototype.Delete = function(key) {
		var _r, key, m, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _r = $f._r; key = $f.key; m = $f.m; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  @�		_r = m.LoadAndDelete(key); /* */ $s = 1; case 1: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
		_r;
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Delete }; } $f._r = _r; $f.key = key; $f.m = m; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Delete = function(key) { return this.$val.Delete(key); };
Mapsync.Map (*sync.entry).delete �\	entry.ptr.prototype.delete$ = function() {
		var _tmp, _tmp$1, _tmp$2, _tmp$3, e, ok, p, value;
		value = $ifaceNil;
		ok = false;
		e = this;
  @�		while (true) {
  @�			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    			if (p === 0 || p === expunged) {
    				_tmp = $ifaceNil;
				_tmp$1 = false;
				value = _tmp;
				ok = _tmp$1;
				return [value, ok];
    			}
    			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), p, 0)) {
    				_tmp$2 = (p).$get();
				_tmp$3 = true;
				value = _tmp$2;
				ok = _tmp$3;
				return [value, ok];
    			}
    		}
    	};
	entry.prototype.delete$ = function() { return this.$val.delete$(); };
entrydelete~
sync.entrysync.expungedsync.ptrType$4!sync/atomic.CompareAndSwapPointersync/atomic.LoadPointer (*sync.Map).Range �
L	Map.ptr.prototype.Range = function(f) {
		var _entry, _i, _keys, _r, _ref, _tuple, _tuple$1, _tuple$2, e, f, k, m, ok, read, v, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; _entry = $f._entry; _i = $f._i; _keys = $f._keys; _r = $f._r; _ref = $f._ref; _tuple = $f._tuple; _tuple$1 = $f._tuple$1; _tuple$2 = $f._tuple$2; e = $f.e; f = $f.f; k = $f.k; m = $f.m; ok = $f.ok; read = $f.read; v = $f.v; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  D�		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  E		/* */ if (read.amended) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (read.amended) { */ case 1:
  F			$r = m.mu.Lock(); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  F+			_tuple$1 = $assertType(m.read.Load(), readOnly, true);
			readOnly.copy(read, _tuple$1[0]);
    			if (read.amended) {
  Fe				readOnly.copy(read, new readOnly.ptr(m.dirty, false));
  F�				m.read.Store(new read.constructor.elem(read));
  F�				m.dirty = false;
  F�				m.misses = 0;
    			}
  F�			$r = m.mu.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
  F�		_ref = read.m;
		_i = 0;
		_keys = $keys(_ref);
		/* while (true) { */ case 5:
			/* if (!(_i < _keys.length)) { break; } */ if(!(_i < _keys.length)) { $s = 6; continue; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				/* continue; */ $s = 5; continue;
    			}
			k = _entry.k;
			e = _entry.v;
  F�			_tuple$2 = e.load();
			v = _tuple$2[0];
			ok = _tuple$2[1];
    			if (!ok) {
  G				_i++;
				/* continue; */ $s = 5; continue;
    			}
  G			_r = f(k, v); /* */ $s = 9; case 9: if($c) { $c = false; _r = _r.$blk(); } if (_r && _r.$blk !== undefined) { break s; }
			/* */ if (!_r) { $s = 7; continue; }
			/* */ $s = 8; continue;
    			/* if (!_r) { */ case 7:
  G.				/* break; */ $s = 6; continue;
    			/* } */ case 8:
    			_i++;
		$s = 5; continue;
		case 6:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Map.ptr.prototype.Range }; } $f._entry = _entry; $f._i = _i; $f._keys = _keys; $f._r = _r; $f._ref = _ref; $f._tuple = _tuple; $f._tuple$1 = _tuple$1; $f._tuple$2 = _tuple$2; $f.e = e; $f.f = f; $f.k = k; $f.m = m; $f.ok = ok; $f.read = read; $f.v = v; $f.$s = $s; $f.$r = $r; return $f;
	};
	Map.prototype.Range = function(f) { return this.$val.Range(f); };
Mapsync.Map
sync.load~sync.readOnly (*sync.Map).missLocked ��	Map.ptr.prototype.missLocked = function() {
		var m, x;
		m = this;
  G\		m.misses = m.misses + (1) >> 0;
    		if (m.misses < $keys(m.dirty).length) {
  G�			return;
    		}
  G�		m.read.Store((x = new readOnly.ptr(m.dirty, false), new x.constructor.elem(x)));
  G�		m.dirty = false;
  G�		m.misses = 0;
    	};
	Map.prototype.missLocked = function() { return this.$val.missLocked(); };
MapmissLocked~sync.Mapsync.readOnly (*sync.Map).dirtyLocked ��	Map.ptr.prototype.dirtyLocked = function() {
		var _entry, _i, _key, _keys, _ref, _tuple, e, k, m, read, x;
		m = this;
    		if (!(m.dirty === false)) {
  H
			return;
    		}
  H		_tuple = $assertType(m.read.Load(), readOnly, true);
		read = $clone(_tuple[0], readOnly);
  H;		m.dirty = (x = $keys(read.m).length, ((x < 0 || x > 2147483647) ? $throwRuntimeError("makemap: size out of range") : {}));
  Hp		_ref = read.m;
		_i = 0;
		_keys = $keys(_ref);
		while (true) {
			if (!(_i < _keys.length)) { break; }
			_entry = _ref[_keys[_i]];
    			if (_entry === undefined) {
    				_i++;
				continue;
    			}
			k = _entry.k;
			e = _entry.v;
    			if (!e.tryExpungeLocked()) {
  H�				_key = k; (m.dirty || $throwRuntimeError("assignment to entry in nil map"))[$emptyInterface.keyFor(_key)] = { k: _key, v: e };
    			}
    			_i++;
		}
    	};
	Map.prototype.dirtyLocked = function() { return this.$val.dirtyLocked(); };
MapdirtyLocked~sync.Mapsync.readOnlysync.tryExpungeLocked~ (*sync.entry).tryExpungeLocked �m	entry.ptr.prototype.tryExpungeLocked = function() {
		var e, isExpunged, p;
		isExpunged = false;
		e = this;
  H�		p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
  I		while (true) {
			if (!(p === 0)) { break; }
    			if (atomic.CompareAndSwapPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))), 0, expunged)) {
    				isExpunged = true;
				return isExpunged;
    			}
  Ix			p = atomic.LoadPointer((e.$ptr_p || (e.$ptr_p = new ptrType$4(function() { return this.$target.p; }, function($v) { this.$target.p = $v; }, e))));
    		}
    		isExpunged = p === expunged;
		return isExpunged;
    	};
	entry.prototype.tryExpungeLocked = function() { return this.$val.tryExpungeLocked(); };
entrytryExpungeLocked~
sync.entrysync.expungedsync.ptrType$4!sync/atomic.CompareAndSwapPointersync/atomic.LoadPointer (*sync.Mutex).Lock �~	Mutex.ptr.prototype.Lock = function() {
		var m, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; m = $f.m; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
    		if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), 0, 1)) {
    			if (false) {
  T&				race.Acquire((m));
    			}
  TL			$s = -1; return;
    		}
  T�		$r = m.lockSlow(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.Lock }; } $f.m = m; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.Lock = function() { return this.$val.Lock(); };
Mutexinternal/race.Acquire
sync.Mutexsync.lockSlow~sync.ptrType$5sync/atomic.CompareAndSwapInt32 (*sync.Mutex).lockSlow ��	Mutex.ptr.prototype.lockSlow = function() {
		var awoke, delta, iter, m, new$1, old, queueLifo, starving, waitStartTime, x, x$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; awoke = $f.awoke; delta = $f.delta; iter = $f.iter; m = $f.m; new$1 = $f.new$1; old = $f.old; queueLifo = $f.queueLifo; starving = $f.starving; waitStartTime = $f.waitStartTime; x = $f.x; x$1 = $f.x$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
  T�		waitStartTime = new $Int64(0, 0);
  T�		starving = false;
  T�		awoke = false;
  T�		iter = 0;
  U
		old = m.state;
  U		/* while (true) { */ case 1:
    			if (((old & 5) === 1) && runtime_canSpin(iter)) {
    				if (!awoke && ((old & 2) === 0) && !(((old >> 3 >> 0) === 0)) && atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, old | 2)) {
  V�					awoke = true;
    				}
  W				runtime_doSpin();
  W				iter = iter + (1) >> 0;
  W)				old = m.state;
  W:				/* continue; */ $s = 1; continue;
    			}
  WI			new$1 = old;
    			if ((old & 4) === 0) {
  W�				new$1 = new$1 | (1);
    			}
    			if (!(((old & 5) === 0))) {
  X					new$1 = new$1 + (8) >> 0;
    			}
    			if (starving && !(((old & 1) === 0))) {
  Y4				new$1 = new$1 | (4);
    			}
    			if (awoke) {
    				if ((new$1 & 2) === 0) {
  Y�					throw$1("sync: inconsistent mutex state");
    				}
  Z				new$1 = (new$1 & ~(2)) >> 0;
    			}
  Z%			/* */ if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { $s = 3; continue; }
			/* */ $s = 4; continue;
    			/* if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { */ case 3:
    				if ((old & 5) === 0) {
  Z�					/* break; */ $s = 2; continue;
    				}
  Z�				queueLifo = !((waitStartTime.$high === 0 && waitStartTime.$low === 0));
    				if ((waitStartTime.$high === 0 && waitStartTime.$low === 0)) {
  [>					waitStartTime = runtime_nanotime();
    				}
  [i				$r = runtime_SemacquireMutex((m.$ptr_sema || (m.$ptr_sema = new ptrType(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), queueLifo, 1); /* */ $s = 6; case 6: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  [�				starving = starving || (x = (x$1 = runtime_nanotime(), new $Int64(x$1.$high - waitStartTime.$high, x$1.$low - waitStartTime.$low)), (x.$high > 0 || (x.$high === 0 && x.$low > 1000000)));
  [�				old = m.state;
    				if (!(((old & 4) === 0))) {
    					if (!(((old & 3) === 0)) || ((old >> 3 >> 0) === 0)) {
  ]U						throw$1("sync: inconsistent mutex state");
    					}
  ]�					delta = -7;
    					if (!starving || ((old >> 3 >> 0) === 1)) {
  ^�						delta = delta - (4) >> 0;
    					}
  ^�					atomic.AddInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), delta);
  _ 					/* break; */ $s = 2; continue;
    				}
  _.				awoke = true;
  _>				iter = 0;
    				$s = 5; continue;
			/* } else { */ case 4:
  _U				old = m.state;
    			/* } */ case 5:
    		$s = 1; continue;
		case 2:
    		if (false) {
  _�			race.Acquire((m));
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.lockSlow }; } $f.awoke = awoke; $f.delta = delta; $f.iter = iter; $f.m = m; $f.new$1 = new$1; $f.old = old; $f.queueLifo = queueLifo; $f.starving = starving; $f.waitStartTime = waitStartTime; $f.x = x; $f.x$1 = x$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.lockSlow = function() { return this.$val.lockSlow(); };
Mutex	lockSlow~internal/race.Acquire
sync.Mutexsync.ptrTypesync.ptrType$5sync.runtime_SemacquireMutexsync.runtime_canSpinsync.runtime_doSpinsync.runtime_nanotime
sync.throwsync/atomic.AddInt32sync/atomic.CompareAndSwapInt32 (*sync.Mutex).Unlock �:	Mutex.ptr.prototype.Unlock = function() {
		var m, new$1, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; m = $f.m; new$1 = $f.new$1; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
    		if (false) {
  `�			$unused(m.state);
  `�			race.Release((m));
    		}
  a,		new$1 = atomic.AddInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), -1);
  a\		/* */ if (!((new$1 === 0))) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (!((new$1 === 0))) { */ case 1:
  a�			$r = m.unlockSlow(new$1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.Unlock }; } $f.m = m; $f.new$1 = new$1; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.Unlock = function() { return this.$val.Unlock(); };
Mutexinternal/race.Release
sync.Mutexsync.ptrType$5sync.unlockSlow~sync/atomic.AddInt32 (*sync.Mutex).unlockSlow ��	Mutex.ptr.prototype.unlockSlow = function(new$1) {
		var m, new$1, old, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; m = $f.m; new$1 = $f.new$1; old = $f.old; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		m = this;
    		if ((((new$1 + 1 >> 0)) & 1) === 0) {
  bg			throw$1("sync: unlock of unlocked mutex");
    		}
  b�		/* */ if ((new$1 & 4) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if ((new$1 & 4) === 0) { */ case 1:
  b�			old = new$1;
  b�			/* while (true) { */ case 4:
    				if (((old >> 3 >> 0) === 0) || !(((old & 7) === 0))) {
  d�					$s = -1; return;
    				}
  d�				new$1 = ((old - 8 >> 0)) | 2;
  d�				/* */ if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { $s = 6; continue; }
				/* */ $s = 7; continue;
    				/* if (atomic.CompareAndSwapInt32((m.$ptr_state || (m.$ptr_state = new ptrType$5(function() { return this.$target.state; }, function($v) { this.$target.state = $v; }, m))), old, new$1)) { */ case 6:
  e)					$r = runtime_Semrelease((m.$ptr_sema || (m.$ptr_sema = new ptrType(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), false, 1); /* */ $s = 8; case 8: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  eS					$s = -1; return;
    				/* } */ case 7:
  eb				old = m.state;
    			$s = 4; continue;
			case 5:
    			$s = 3; continue;
		/* } else { */ case 2:
  f�			$r = runtime_Semrelease((m.$ptr_sema || (m.$ptr_sema = new ptrType(function() { return this.$target.sema; }, function($v) { this.$target.sema = $v; }, m))), true, 1); /* */ $s = 9; case 9: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Mutex.ptr.prototype.unlockSlow }; } $f.m = m; $f.new$1 = new$1; $f.old = old; $f.$s = $s; $f.$r = $r; return $f;
	};
	Mutex.prototype.unlockSlow = function(new$1) { return this.$val.unlockSlow(new$1); };
MutexunlockSlow~
sync.Mutexsync.ptrTypesync.ptrType$5sync.runtime_Semrelease
sync.throwsync/atomic.CompareAndSwapInt32 (*sync.Once).Do �%	Once.ptr.prototype.Do = function(f) {
		var f, o, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; f = $f.f; o = $f.o; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		o = this;
  o-		/* */ if (atomic.LoadUint32((o.$ptr_done || (o.$ptr_done = new ptrType(function() { return this.$target.done; }, function($v) { this.$target.done = $v; }, o)))) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (atomic.LoadUint32((o.$ptr_done || (o.$ptr_done = new ptrType(function() { return this.$target.done; }, function($v) { this.$target.done = $v; }, o)))) === 0) { */ case 1:
  o�			$r = o.doSlow(f); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: Once.ptr.prototype.Do }; } $f.f = f; $f.o = o; $f.$s = $s; $f.$r = $r; return $f;
	};
	Once.prototype.Do = function(f) { return this.$val.Do(f); };
Once	sync.Oncesync.doSlow~sync.ptrTypesync/atomic.LoadUint32 (*sync.Once).doSlow �	Once.ptr.prototype.doSlow = function(f) {
		var f, o, $s, $deferred, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; f = $f.f; o = $f.o; $s = $f.$s; $deferred = $f.$deferred; $r = $f.$r; } var $err = null; try { s: while (true) { switch ($s) { case 0: $deferred = []; $curGoroutine.deferStack.push($deferred);
		o = this;
  o�		$r = o.m.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  o�		$deferred.push([$methodVal(o.m, "Unlock"), []]);
  o�		/* */ if (o.done === 0) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (o.done === 0) { */ case 2:
  o�			$deferred.push([atomic.StoreUint32, [(o.$ptr_done || (o.$ptr_done = new ptrType(function() { return this.$target.done; }, function($v) { this.$target.done = $v; }, o))), 1]]);
  p			$r = f(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
    		$s = -1; return;
		/* */ } return; } } catch(err) { $err = err; $s = -1; } finally { $callDeferred($deferred, $err); if($curGoroutine.asleep) { if ($f === undefined) { $f = { $blk: Once.ptr.prototype.doSlow }; } $f.f = f; $f.o = o; $f.$s = $s; $f.$deferred = $deferred; $f.$r = $r; return $f; } }
	};
	Once.prototype.doSlow = function(f) { return this.$val.doSlow(f); };
OncedoSlow~	sync.Oncesync.ptrTypesync/atomic.StoreUint32 (*sync.poolDequeue).unpack ��	poolDequeue.ptr.prototype.unpack = function(ptrs) {
		var d, head, ptrs, tail, x;
		head = 0;
		tail = 0;
		d = this;
  x�		head = (((x = $shiftRightUint64(ptrs, 32), new $Uint64(x.$high & 0, (x.$low & 4294967295) >>> 0)).$low >>> 0));
  y		tail = ((new $Uint64(ptrs.$high & 0, (ptrs.$low & 4294967295) >>> 0).$low >>> 0));
  y9		return [head, tail];
    	};
	poolDequeue.prototype.unpack = function(ptrs) { return this.$val.unpack(ptrs); };
poolDequeueunpack~sync.poolDequeue (*sync.poolDequeue).pack �v	poolDequeue.ptr.prototype.pack = function(head, tail) {
		var d, head, tail, x, x$1;
		d = this;
  y�		return (x = $shiftLeft64((new $Uint64(0, head)), 32), x$1 = (new $Uint64(0, ((tail & 4294967295) >>> 0))), new $Uint64(x.$high | x$1.$high, (x.$low | x$1.$low) >>> 0));
    	};
	poolDequeue.prototype.pack = function(head, tail) { return this.$val.pack(head, tail); };
poolDequeuepack~sync.poolDequeue (*sync.poolDequeue).pushHead �O	poolDequeue.ptr.prototype.pushHead = function(val) {
		var _tuple, d, head, ptrs, slot, tail, typ, val, x, x$1;
		d = this;
  z�		ptrs = atomic.LoadUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))));
  z�		_tuple = d.unpack(ptrs);
		head = _tuple[0];
		tail = _tuple[1];
    		if (((((tail + ((d.vals.$length >>> 0)) >>> 0)) & 4294967295) >>> 0) === head) {
  {/			return false;
    		}
  {@		slot = (x = d.vals, x$1 = (head & (((d.vals.$length - 1 >> 0) >>> 0))) >>> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  {�		typ = atomic.LoadPointer((slot.$ptr_typ || (slot.$ptr_typ = new ptrType$4(function() { return this.$target.typ; }, function($v) { this.$target.typ = $v; }, slot))));
    		if (!(typ === 0)) {
  |?			return false;
    		}
    		if ($interfaceIsEqual(val, $ifaceNil)) {
  |�			val = (dequeueNil.nil);
    		}
  |�		((slot)).$set(val);
  }G		atomic.AddUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))), new $Uint64(1, 0));
  }v		return true;
    	};
	poolDequeue.prototype.pushHead = function(val) { return this.$val.pushHead(val); };
poolDequeue	pushHead~sync.dequeueNilsync.poolDequeuesync.ptrType$4sync.ptrType$6sync.unpack~sync/atomic.AddUint64sync/atomic.LoadPointersync/atomic.LoadUint64 (*sync.poolDequeue).popHead �	poolDequeue.ptr.prototype.popHead = function() {
		var _tuple, d, head, ptrs, ptrs2, slot, tail, val, x, x$1;
		d = this;
  ~`		slot = ptrType$7.nil;
  ~m		while (true) {
  ~u			ptrs = atomic.LoadUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))));
  ~�			_tuple = d.unpack(ptrs);
			head = _tuple[0];
			tail = _tuple[1];
    			if (tail === head) {
  ~�				return [$ifaceNil, false];
    			}
  z			head = head - (1) >>> 0;
  �			ptrs2 = d.pack(head, tail);
    			if (atomic.CompareAndSwapUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))), ptrs, ptrs2)) {
  �				slot = (x = d.vals, x$1 = (head & (((d.vals.$length - 1 >> 0) >>> 0))) >>> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  �3				break;
    			}
    		}
  �B		val = ((slot)).$get();
    		if ($interfaceIsEqual(val, (dequeueNil.nil))) {
  ��			val = $ifaceNil;
    		}
  �			eface.copy(slot, new eface.ptr(0, 0));
  �		return [val, true];
    	};
	poolDequeue.prototype.popHead = function() { return this.$val.popHead(); };
poolDequeuepopHead~	sync.dequeueNil
sync.eface
sync.pack~sync.poolDequeuesync.ptrType$6sync.ptrType$7sync.unpack~ sync/atomic.CompareAndSwapUint64sync/atomic.LoadUint64 (*sync.poolDequeue).popTail ��	poolDequeue.ptr.prototype.popTail = function() {
		var _tuple, d, head, ptrs, ptrs2, slot, tail, val, x, x$1;
		d = this;
  �			slot = ptrType$7.nil;
  �		while (true) {
  �			ptrs = atomic.LoadUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))));
  �G			_tuple = d.unpack(ptrs);
			head = _tuple[0];
			tail = _tuple[1];
    			if (tail === head) {
  ��				return [$ifaceNil, false];
    			}
  �5			ptrs2 = d.pack(head, tail + 1 >>> 0);
    			if (atomic.CompareAndSwapUint64((d.$ptr_headTail || (d.$ptr_headTail = new ptrType$6(function() { return this.$target.headTail; }, function($v) { this.$target.headTail = $v; }, d))), ptrs, ptrs2)) {
  ��				slot = (x = d.vals, x$1 = (tail & (((d.vals.$length - 1 >> 0) >>> 0))) >>> 0, ((x$1 < 0 || x$1 >= x.$length) ? ($throwRuntimeError("index out of range"), undefined) : x.$array[x.$offset + x$1]));
  ��				break;
    			}
    		}
  ��		val = ((slot)).$get();
    		if ($interfaceIsEqual(val, (dequeueNil.nil))) {
  �@			val = $ifaceNil;
    		}
  �x		slot.val = 0;
  ��		atomic.StorePointer((slot.$ptr_typ || (slot.$ptr_typ = new ptrType$4(function() { return this.$target.typ; }, function($v) { this.$target.typ = $v; }, slot))), 0);
  ��		return [val, true];
    	};
	poolDequeue.prototype.popTail = function() { return this.$val.popTail(); };
poolDequeuepopTail~
sync.dequeueNil
sync.pack~sync.poolDequeuesync.ptrType$4sync.ptrType$6sync.ptrType$7sync.unpack~ sync/atomic.CompareAndSwapUint64sync/atomic.LoadUint64sync/atomic.StorePointer sync.storePoolChainEltsyncstorePoolChainElt storePoolChainEltf	storePoolChainElt = function(pp, v) {
		var pp, v;
  ��		atomic.StorePointer(((pp)), (v));
    	};
storePoolChainEltsync.storePoolChainEltsync/atomic.StorePointer sync.loadPoolChainEltsyncloadPoolChainElt loadPoolChainElt��	loadPoolChainElt = function(pp) {
		var pp;
  �		return ($pointerOfStructConversion(atomic.LoadPointer(((pp))), ptrType$8));
    	};
loadPoolChainEltsync.loadPoolChainEltsync.poolChainEltsync.ptrType$8sync/atomic.LoadPointer (*sync.poolChain).pushHead ��	poolChain.ptr.prototype.pushHead = function(val) {
		var c, d, d2, newSize, val;
		c = this;
  ��		d = c.head;
    		if (d === ptrType$8.nil) {
  �			d = new poolChainElt.ptr(new poolDequeue.ptr(new $Uint64(0, 0), sliceType$1.nil), ptrType$8.nil, ptrType$8.nil);
  �			d.poolDequeue.vals = $makeSlice(sliceType$1, 8);
  �B			c.head = d;
  �O			storePoolChainElt((c.$ptr_tail || (c.$ptr_tail = new ptrType$9(function() { return this.$target.tail; }, function($v) { this.$target.tail = $v; }, c))), d);
    		}
    		if (d.poolDequeue.pushHead(val)) {
  ��			return;
    		}
  ��		newSize = $imul(d.poolDequeue.vals.$length, 2);
    		if (newSize >= 1073741824) {
  �:			newSize = 1073741824;
    		}
  �V		d2 = new poolChainElt.ptr(new poolDequeue.ptr(new $Uint64(0, 0), sliceType$1.nil), ptrType$8.nil, d);
  �t		d2.poolDequeue.vals = $makeSlice(sliceType$1, newSize);
  ��		c.head = d2;
  ��		storePoolChainElt((d.$ptr_next || (d.$ptr_next = new ptrType$9(function() { return this.$target.next; }, function($v) { this.$target.next = $v; }, d))), d2);
  ��		d2.poolDequeue.pushHead(val);
    	};
	poolChain.prototype.pushHead = function(val) { return this.$val.pushHead(val); };
	poolChain	pushHead~	
sync.efacesync.poolChainsync.poolChainEltsync.poolDequeuesync.ptrType$8sync.ptrType$9sync.pushHead~sync.sliceType$1sync.storePoolChainElt (*sync.poolChain).popHead �[	poolChain.ptr.prototype.popHead = function() {
		var _tuple, c, d, ok, val;
		c = this;
  �		d = c.head;
  �		while (true) {
			if (!(!(d === ptrType$8.nil))) { break; }
  �-			_tuple = d.poolDequeue.popHead();
			val = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  �M				return [val, ok];
    			}
  ��			d = loadPoolChainElt((d.$ptr_prev || (d.$ptr_prev = new ptrType$9(function() { return this.$target.prev; }, function($v) { this.$target.prev = $v; }, d))));
    		}
  ��		return [$ifaceNil, false];
    	};
	poolChain.prototype.popHead = function() { return this.$val.popHead(); };
	poolChainpopHead~sync.loadPoolChainEltsync.poolChainsync.popHead~sync.ptrType$8sync.ptrType$9 (*sync.poolChain).popTail ��	poolChain.ptr.prototype.popTail = function() {
		var _tuple, c, d, d2, ok, val;
		c = this;
  �+		d = loadPoolChainElt((c.$ptr_tail || (c.$ptr_tail = new ptrType$9(function() { return this.$target.tail; }, function($v) { this.$target.tail = $v; }, c))));
    		if (d === ptrType$8.nil) {
  �[			return [$ifaceNil, false];
    		}
  �r		while (true) {
  ��			d2 = loadPoolChainElt((d.$ptr_next || (d.$ptr_next = new ptrType$9(function() { return this.$target.next; }, function($v) { this.$target.next = $v; }, d))));
  ��			_tuple = d.poolDequeue.popTail();
			val = _tuple[0];
			ok = _tuple[1];
    			if (ok) {
  ��				return [val, ok];
    			}
    			if (d2 === ptrType$8.nil) {
  �z				return [$ifaceNil, false];
    			}
    			if (atomic.CompareAndSwapPointer((((c.$ptr_tail || (c.$ptr_tail = new ptrType$9(function() { return this.$target.tail; }, function($v) { this.$target.tail = $v; }, c))))), (d), (d2))) {
  �t				storePoolChainElt((d2.$ptr_prev || (d2.$ptr_prev = new ptrType$9(function() { return this.$target.prev; }, function($v) { this.$target.prev = $v; }, d2))), ptrType$8.nil);
    			}
  ��			d = d2;
    		}
    	};
	poolChain.prototype.popTail = function() { return this.$val.popTail(); };
	poolChainpopTail~sync.loadPoolChainEltsync.poolChainsync.popTail~sync.ptrType$8sync.ptrType$9sync.storePoolChainElt!sync/atomic.CompareAndSwapPointer sync.runtime_notifyListAddsyncruntime_notifyListAdd runtime_notifyListAdd	runtime_notifyListAdd = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_notifyListAdd");
	};
runtime_notifyListAddsync.runtime_notifyListAdd sync.runtime_notifyListWaitsyncruntime_notifyListWait runtime_notifyListWait��	runtime_notifyListWait = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_notifyListWait");
	};
runtime_notifyListWaitsync.runtime_notifyListWait  sync.runtime_notifyListNotifyAllsyncruntime_notifyListNotifyAll runtime_notifyListNotifyAll��	runtime_notifyListNotifyAll = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_notifyListNotifyAll");
	};
runtime_notifyListNotifyAll sync.runtime_notifyListNotifyAll  sync.runtime_notifyListNotifyOnesyncruntime_notifyListNotifyOne runtime_notifyListNotifyOne��	runtime_notifyListNotifyOne = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_notifyListNotifyOne");
	};
runtime_notifyListNotifyOne sync.runtime_notifyListNotifyOne 	sync.initsyncinit inity	init = function() {
		var n;
  �e		n = new notifyList.ptr(0, 0, 0, 0, 0);
  �s		runtime_notifyListCheck(20);
    	};
    		init();
	sync.initsync.notifyListsync.runtime_notifyListCheck sync.runtime_doSpinsyncruntime_doSpin runtime_doSpinq	runtime_doSpin = function() {
		$throwRuntimeError("native function not implemented: sync.runtime_doSpin");
	};
runtime_doSpinsync.runtime_doSpin (*sync.RWMutex).RLock �R	RWMutex.ptr.prototype.RLock = function() {
		var rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
    		if (false) {
  ��			$unused(rw.w.state);
  ��			race.Disable();
    		}
  ��		/* */ if (atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$5(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1) < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$5(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1) < 0) { */ case 1:
  �T			$r = runtime_SemacquireMutex((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw))), false, 0); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		if (false) {
  ��			race.Enable();
  ��			race.Acquire(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.RLock }; } $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.RLock = function() { return this.$val.RLock(); };
RWMutexinternal/race.Acquireinternal/race.Disableinternal/race.Enablesync.RWMutexsync.ptrTypesync.ptrType$5sync.runtime_SemacquireMutexsync/atomic.AddInt32 (*sync.RWMutex).RUnlock �"	RWMutex.ptr.prototype.RUnlock = function() {
		var r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
    		if (false) {
  ��			$unused(rw.w.state);
  ��			race.ReleaseMerge(((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw)))));
  �			race.Disable();
    		}
  �		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$5(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), -1);
  �		/* */ if (r < 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (r < 0) { */ case 1:
  ��			$r = rw.rUnlockSlow(r); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		if (false) {
  ��			race.Enable();
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.RUnlock }; } $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.RUnlock = function() { return this.$val.RUnlock(); };
RWMutexinternal/race.Disableinternal/race.Enableinternal/race.ReleaseMergesync.RWMutexsync.ptrTypesync.ptrType$5sync.rUnlockSlow~sync/atomic.AddInt32 (*sync.RWMutex).rUnlockSlow ��	RWMutex.ptr.prototype.rUnlockSlow = function(r) {
		var r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
    		if (((r + 1 >> 0) === 0) || ((r + 1 >> 0) === -1073741824)) {
  � 			race.Enable();
  �0			throw$1("sync: RUnlock of unlocked RWMutex");
    		}
  �x		/* */ if (atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$5(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), -1) === 0) { $s = 1; continue; }
		/* */ $s = 2; continue;
    		/* if (atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$5(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), -1) === 0) { */ case 1:
  ��			$r = runtime_Semrelease((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw))), false, 1); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 2:
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.rUnlockSlow }; } $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.rUnlockSlow = function(r) { return this.$val.rUnlockSlow(r); };
RWMutexrUnlockSlow~internal/race.Enablesync.RWMutexsync.ptrTypesync.ptrType$5sync.runtime_Semrelease
sync.throwsync/atomic.AddInt32 (*sync.RWMutex).Lock ��	RWMutex.ptr.prototype.Lock = function() {
		var r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
    		if (false) {
  ��			$unused(rw.w.state);
  ��			race.Disable();
    		}
  �		$r = rw.w.Lock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �O		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$5(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), -1073741824) + 1073741824 >> 0;
  ��		/* */ if (!((r === 0)) && !((atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$5(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), r) === 0))) { $s = 2; continue; }
		/* */ $s = 3; continue;
    		/* if (!((r === 0)) && !((atomic.AddInt32((rw.$ptr_readerWait || (rw.$ptr_readerWait = new ptrType$5(function() { return this.$target.readerWait; }, function($v) { this.$target.readerWait = $v; }, rw))), r) === 0))) { */ case 2:
  ��			$r = runtime_SemacquireMutex((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw))), false, 0); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		/* } */ case 3:
    		if (false) {
  �=			race.Enable();
  �M			race.Acquire(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
  �{			race.Acquire(((rw.$ptr_writerSem || (rw.$ptr_writerSem = new ptrType(function() { return this.$target.writerSem; }, function($v) { this.$target.writerSem = $v; }, rw)))));
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.Lock }; } $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.Lock = function() { return this.$val.Lock(); };
RWMutexinternal/race.Acquireinternal/race.Disableinternal/race.Enablesync.RWMutexsync.ptrTypesync.ptrType$5sync.runtime_SemacquireMutexsync/atomic.AddInt32 (*sync.RWMutex).Unlock �	RWMutex.ptr.prototype.Unlock = function() {
		var i, r, rw, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; i = $f.i; r = $f.r; rw = $f.rw; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		rw = this;
    		if (false) {
  �			$unused(rw.w.state);
  �&			race.Release(((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw)))));
  �T			race.Disable();
    		}
  ��		r = atomic.AddInt32((rw.$ptr_readerCount || (rw.$ptr_readerCount = new ptrType$5(function() { return this.$target.readerCount; }, function($v) { this.$target.readerCount = $v; }, rw))), 1073741824);
    		if (r >= 1073741824) {
  ��			race.Enable();
  �			throw$1("sync: Unlock of unlocked RWMutex");
    		}
  �Z		i = 0;
		/* while (true) { */ case 1:
			/* if (!(i < ((r >> 0)))) { break; } */ if(!(i < ((r >> 0)))) { $s = 2; continue; }
  �v			$r = runtime_Semrelease((rw.$ptr_readerSem || (rw.$ptr_readerSem = new ptrType(function() { return this.$target.readerSem; }, function($v) { this.$target.readerSem = $v; }, rw))), false, 0); /* */ $s = 3; case 3: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  �n			i = i + (1) >> 0;
    		$s = 1; continue;
		case 2:
  ��		$r = rw.w.Unlock(); /* */ $s = 4; case 4: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		if (false) {
  ��			race.Enable();
    		}
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: RWMutex.ptr.prototype.Unlock }; } $f.i = i; $f.r = r; $f.rw = rw; $f.$s = $s; $f.$r = $r; return $f;
	};
	RWMutex.prototype.Unlock = function() { return this.$val.Unlock(); };
RWMutex	internal/race.Disableinternal/race.Enableinternal/race.Releasesync.RWMutexsync.ptrTypesync.ptrType$5sync.runtime_Semrelease
sync.throwsync/atomic.AddInt32 (*sync.RWMutex).RLocker ��	RWMutex.ptr.prototype.RLocker = function() {
		var rw;
		rw = this;
  ��		return ($pointerOfStructConversion(rw, ptrType$10));
    	};
	RWMutex.prototype.RLocker = function() { return this.$val.RLocker(); };
RWMutexsync.RWMutexsync.ptrType$10sync.rlocker (*sync.rlocker).Lock ��	rlocker.ptr.prototype.Lock = function() {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  ��		$r = ($pointerOfStructConversion(r, ptrType$11)).RLock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rlocker.ptr.prototype.Lock }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	rlocker.prototype.Lock = function() { return this.$val.Lock(); };
rlockersync.RWMutexsync.ptrType$11sync.rlocker (*sync.rlocker).Unlock ��	rlocker.ptr.prototype.Unlock = function() {
		var r, $s, $r;
		/* */ $s = 0; var $f, $c = false; if (this !== undefined && this.$blk !== undefined) { $f = this; $c = true; r = $f.r; $s = $f.$s; $r = $f.$r; } s: while (true) { switch ($s) { case 0:
		r = this;
  �"		$r = ($pointerOfStructConversion(r, ptrType$11)).RUnlock(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
    		$s = -1; return;
		/* */ } return; } if ($f === undefined) { $f = { $blk: rlocker.ptr.prototype.Unlock }; } $f.r = r; $f.$s = $s; $f.$r = $r; return $f;
	};
	rlocker.prototype.Unlock = function() { return this.$val.Unlock(); };
rlockersync.ptrType$11sync.rlocker (*sync.WaitGroup).state ��	WaitGroup.ptr.prototype.state = function() {
		var _r, _tmp, _tmp$1, _tmp$2, _tmp$3, semap, statep, wg;
		statep = ptrType$6.nil;
		semap = ptrType.nil;
		wg = this;
    		if ((_r = ((wg.state1)) % 8, _r === _r ? _r : $throwRuntimeError("integer divide by zero")) === 0) {
    			_tmp = ((wg.state1));
			_tmp$1 = $indexPtr(wg.state1, 2, ptrType);
			statep = _tmp;
			semap = _tmp$1;
			return [statep, semap];
    		} else {
    			_tmp$2 = (($sliceToNativeArray(new sliceType$2(wg.state1))));
			_tmp$3 = $indexPtr(wg.state1, 0, ptrType);
			statep = _tmp$2;
			semap = _tmp$3;
			return [statep, semap];
    		}
    	};
	WaitGroup.prototype.state = function() { return this.$val.state(); };
	WaitGroupstate~sync.WaitGroupsync.ptrTypesync.ptrType$6sync.sliceType$2 (*sync.WaitGroup).Done ��	WaitGroup.ptr.prototype.Done = function() {
		var wg;
		wg = this;
  ��		wg.Add(-1);
    	};
	WaitGroup.prototype.Done = function() { return this.$val.Done(); };
	WaitGroupsync.WaitGroup �%f{"Base":49894,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/cond.go","Base":1,"Size":525,"Lines":[0,14,27,28,41,42,61,103,119,135,155,176,177,215,223,237,239,240,264,271,289,314,317,331,339,351,353,354,380,395,404,407,414,428,430,431,460,470,479,505,520,523],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/pool.go","Base":527,"Size":1399,"Lines":[0,14,27,28,41,42,117,131,134,214,278,281,361,415,494,573,593,596,672,707,710,790,870,898,917,938,964,966,967,1002,1026,1046,1064,1068,1081,1084,1114,1150,1160,1162,1163,1199,1214,1223,1226,1256,1258,1259,1329,1369],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/sync.go","Base":1927,"Size":2064,"Lines":[0,14,27,28,41,42,83,84,131,132,218,299,302,390,476,567,607,610,666,707,708,745,783,785,786,862,958,1066,1135,1166,1190,1202,1263,1274,1319,1323,1330,1350,1375,1399,1403,1406,1412,1414,1415,1482,1524,1530,1531,1551,1569,1578,1581,1582,1594,1605,1624,1642,1666,1669,1670,1689,1690,1702,1704,1705,1751,1752,1787,1801,1803,1804,1833,1865,1894,1968,1970,1971,1998,2021,2062],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/waitgroup.go","Base":3992,"Size":460,"Lines":[0,14,27,28,41,42,66,79,102,103,121,123,124,162,183,204,248,251,288,318,321,359,374,388,391,393,394,424,445,455,458],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/cond.go","Base":4453,"Size":2604,"Lines":[0,55,109,159,160,173,174,183,198,208,210,211,271,330,346,349,419,473,506,509,555,574,589,590,646,656,657,677,698,700,701,746,777,797,799,800,854,915,976,1036,1039,1104,1163,1223,1226,1243,1268,1287,1295,1331,1350,1353,1377,1396,1435,1449,1487,1499,1501,1502,1563,1566,1627,1647,1673,1692,1732,1734,1735,1783,1786,1847,1867,1896,1915,1955,1957,1958,2028,2053,2054,2086,2135,2216,2262,2293,2296,2298,2299,2363,2387,2390,2451,2467,2488,2489,2550,2577],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/map.go","Base":7058,"Size":11806,"Lines":[0,55,109,159,160,173,174,183,198,208,210,211,290,360,422,425,502,582,649,652,738,821,904,984,1060,1063,1149,1167,1177,1178,1248,1297,1301,1380,1393,1397,1477,1556,1593,1624,1625,1700,1780,1850,1854,1933,2012,2037,2041,2118,2186,2216,2217,2296,2360,2364,2440,2514,2583,2595,2597,2598,2674,2697,2729,2796,2798,2799,2878,2901,2949,2950,3018,3038,3098,3102,3176,3199,3203,3283,3312,3316,3396,3425,3429,3505,3578,3602,3606,3685,3765,3843,3867,3901,3903,3904,3942,3980,3982,3983,4051,4072,4135,4202,4239,4261,4287,4301,4376,4452,4504,4541,4563,4590,4614,4689,4763,4774,4792,4796,4812,4815,4825,4845,4848,4865,4867,4868,4922,4953,4985,5005,5008,5041,5043,5044,5079,5125,5162,5215,5224,5227,5228,5241,5277,5308,5335,5406,5459,5479,5483,5507,5546,5570,5580,5601,5656,5730,5749,5801,5805,5838,5841,5856,5858,5859,5922,5925,5998,6012,6060,6067,6099,6120,6136,6140,6204,6219,6223,6226,6228,6229,6298,6301,6376,6404,6459,6517,6519,6520,6580,6583,6630,6676,6722,6724,6725,6791,6844,6915,7001,7040,7077,7108,7156,7166,7191,7195,7198,7199,7212,7248,7279,7306,7326,7330,7376,7415,7461,7478,7488,7509,7564,7638,7657,7709,7713,7746,7778,7781,7796,7797,7820,7822,7823,7896,7909,7912,7987,8014,8100,8131,8151,8178,8181,8196,8236,8239,8240,8318,8397,8435,8444,8451,8519,8544,8548,8579,8600,8628,8632,8648,8689,8693,8696,8698,8699,8782,8840,8920,8957,8979,9005,9019,9056,9078,9105,9129,9153,9228,9302,9313,9331,9335,9351,9354,9363,9383,9386,9405,9407,9408,9447,9487,9509,9511,9512,9568,9575,9607,9640,9661,9665,9715,9750,9754,9757,9759,9760,9833,9883,9886,9967,10048,10129,10170,10173,10251,10294,10353,10426,10473,10547,10594,10631,10650,10727,10799,10871,10889,10903,10940,10960,10991,11013,11030,11046,11050,11066,11069,11070,11098,11118,11129,11141,11145,11161,11170,11174,11177,11179,11180,11209,11221,11251,11260,11263,11299,11314,11328,11330,11331,11361,11382,11391,11394,11395,11432,11485,11513,11542,11560,11564,11567,11569,11570,11625,11656,11672,11729,11744,11748,11779,11782,11804],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/mutex.go","Base":18865,"Size":7496,"Lines":[0,55,109,159,160,233,312,386,433,436,513,526,527,536,553,568,578,580,581,623,624,663,715,718,765,785,798,812,814,815,881,905,913,923,925,926,934,978,990,1005,1030,1031,1051,1055,1121,1196,1270,1343,1415,1489,1570,1616,1620,1694,1763,1841,1917,1949,1953,2022,2103,2156,2160,2239,2309,2389,2418,2420,2421,2438,2494,2534,2559,2595,2654,2674,2709,2713,2722,2725,2787,2801,2803,2804,2833,2858,2877,2893,2904,2920,2927,2998,3052,3131,3166,3216,3260,3329,3393,3410,3415,3435,3445,3462,3474,3478,3491,3569,3599,3621,3625,3669,3701,3705,3767,3833,3901,3928,3968,3992,3996,4009,4056,4107,4135,4179,4184,4206,4210,4264,4309,4348,4353,4427,4462,4489,4528,4533,4583,4666,4683,4714,4782,4845,4912,4950,5023,5068,5074,5128,5177,5207,5262,5325,5384,5412,5440,5446,5483,5493,5498,5514,5526,5537,5554,5558,5561,5562,5581,5615,5618,5620,5621,5642,5707,5710,5775,5835,5882,5909,5928,5942,5976,5979,5980,6010,6058,6073,6130,6217,6237,6240,6242,6243,6283,6324,6366,6369,6398,6411,6419,6476,6538,6611,6678,6757,6783,6869,6880,6885,6923,6973,7028,7070,7081,7086,7103,7107,7117,7191,7265,7337,7404,7452,7491,7494],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/once.go","Base":26362,"Size":2350,"Lines":[0,55,109,159,160,173,174,183,198,200,201,260,263,309,328,386,452,500,591,664,677,689,691,692,761,824,842,920,993,1043,1046,1122,1198,1246,1299,1302,1380,1418,1421,1497,1519,1522,1552,1605,1609,1661,1670,1676,1680,1736,1796,1858,1919,1970,2031,2097,2098,2136,2196,2210,2213,2215,2216,2250,2262,2282,2300,2339,2345,2348],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/poolqueue.go","Base":28713,"Size":9086,"Lines":[0,55,109,159,160,173,174,183,198,208,210,211,269,336,391,394,461,531,593,619,680,743,747,788,826,830,890,954,1015,1029,1033,1094,1151,1165,1182,1183,1246,1298,1302,1358,1418,1482,1536,1568,1582,1584,1585,1605,1630,1632,1633,1656,1657,1711,1714,1784,1854,1917,1961,1962,2030,2101,2122,2148,2149,2213,2246,2291,2319,2327,2329,2330,2385,2418,2458,2478,2480,2481,2552,2615,2670,2710,2740,2800,2820,2835,2838,2883,2884,2941,2979,2996,3053,3092,3107,3110,3111,3152,3169,3193,3196,3241,3242,3303,3357,3404,3417,3419,3420,3489,3560,3580,3634,3651,3658,3699,3730,3750,3772,3793,3797,3798,3854,3908,3919,3928,3958,4019,4057,4103,4112,4116,4119,4120,4166,4195,4207,4210,4268,4319,4336,4354,4356,4357,4426,4493,4517,4571,4588,4595,4636,4667,4687,4709,4730,4734,4735,4789,4844,4874,4906,4967,4982,5028,5037,5041,5044,5045,5066,5112,5141,5153,5156,5157,5219,5282,5342,5346,5410,5454,5470,5507,5549,5550,5568,5570,5571,5631,5634,5703,5772,5842,5912,5975,5999,6061,6118,6138,6139,6201,6255,6275,6277,6278,6305,6318,6319,6380,6395,6399,6455,6519,6532,6536,6592,6649,6669,6695,6697,6698,6759,6838,6840,6841,6898,6981,6983,6984,7032,7045,7060,7087,7132,7156,7191,7204,7236,7239,7240,7262,7271,7274,7275,7336,7350,7378,7408,7439,7464,7467,7468,7498,7532,7545,7577,7595,7597,7598,7650,7663,7679,7713,7731,7735,7786,7828,7860,7863,7882,7884,7885,7937,7969,7984,8004,8007,8008,8015,8065,8118,8172,8226,8283,8319,8353,8354,8388,8406,8410,8411,8428,8477,8526,8547,8551,8552,8608,8664,8719,8739,8858,8907,8957,9002,9032,9068,9072,9081,9084],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/runtime.go","Base":37800,"Size":2018,"Lines":[0,55,109,159,160,173,174,190,191,221,222,290,367,411,446,447,523,583,659,696,763,764,836,872,950,994,1058,1134,1166,1231,1232,1274,1323,1324,1366,1419,1420,1462,1510,1511,1553,1601,1602,1663,1706,1720,1738,1781,1783,1784,1820,1891,1924,1925,1965,1987,1988],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/runtime2.go","Base":39819,"Size":507,"Lines":[0,55,109,159,160,203,245,246,259,260,276,277,352,362,387,402,417,459,482,505],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/rwmutex.go","Base":40327,"Size":5045,"Lines":[0,55,109,159,160,173,174,183,200,215,225,227,228,292,360,361,416,494,548,551,600,603,677,752,826,904,978,987,1009,1066,1142,1218,1267,1318,1320,1321,1355,1356,1428,1461,1494,1527,1530,1604,1675,1688,1691,1761,1834,1878,1879,1910,1913,1981,2043,2081,2110,2129,2146,2163,2166,2212,2251,2302,2305,2324,2340,2386,2389,2391,2392,2431,2481,2539,2563,2594,2613,2630,2681,2698,2701,2756,2817,2837,2840,2859,2875,2878,2880,2881,2923,2967,2983,3028,3031,3056,3103,3145,3191,3194,3196,3197,3227,3284,3328,3356,3375,3392,3409,3412,3463,3476,3527,3606,3635,3691,3742,3745,3764,3780,3826,3872,3875,3877,3878,3944,3990,3993,4066,4130,4187,4217,4236,4253,4299,4316,4319,4320,4371,4429,4458,4474,4518,4521,4558,4589,4635,4638,4674,4689,4708,4724,4727,4729,4730,4784,4851,4889,4912,4914,4915,4936,4937,4990],"Infos":null},{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/sync/waitgroup.go","Base":45373,"Size":4520,"Lines":[0,55,109,159,160,173,174,183,200,215,225,227,228,291,344,399,455,520,523,574,598,613,614,688,754,823,892,910,928,930,931,1011,1074,1123,1185,1195,1260,1263,1265,1266,1334,1411,1456,1459,1536,1611,1690,1706,1783,1842,1918,1992,2022,2060,2089,2108,2149,2166,2206,2247,2251,2268,2290,2293,2347,2372,2392,2445,2502,2558,2613,2648,2651,2663,2707,2710,2757,2826,2829,2851,2860,2863,2921,2975,3026,3089,3151,3174,3243,3246,3276,3289,3310,3348,3351,3353,3354,3403,3433,3445,3447,3448,3500,3530,3559,3578,3619,3636,3639,3646,3683,3709,3730,3744,3781,3802,3820,3857,3862,3872,3876,3906,3965,3996,4049,4119,4188,4249,4287,4292,4321,4342,4415,4420,4441,4459,4496,4501,4511,4515,4518],"Infos":null}]}
 